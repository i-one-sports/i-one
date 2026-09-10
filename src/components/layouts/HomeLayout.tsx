/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, ReactNode, useEffect } from 'react'
import logo from '@/assets/images/footer-logo.png'
import ioneBg from '../../assets/images/ione-bg.png'
import Footer2 from '../Footer2'
import { Link, useNavigate } from 'react-router-dom'
import userFace from '../../assets/images/userFace.png'
import { CiLogout } from 'react-icons/ci'
import { useAppSelector } from '@/redux/store'
import LogoutModal from '../LogoutModal'
import DeleteAccountModal from '../DeleteAccountModal'

interface HomeLayoutProps {
  children: ReactNode
  activeNavId?: number // Optional prop to override automatic route detection
}

interface NavItem {
  id: number
  name: string
  path: string // Path for navigation
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children, activeNavId }) => {
  const { user } = useAppSelector(state => state.auth)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState<string>('')
  const [activeId, setActiveId] = useState<number>(1) // Default to Home
  const [profile, setProfile] = useState(false)
  // Navigation items
  const navigation: NavItem[] = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Schedule', path: '/schedule' },
    { id: 3, name: 'Tournament', path: '/tournament' },
    // { id: 4, name: 'Profile', path: '/profile' },
    { id: 5, name: 'Live Match', path: '/live-match' },
  ]
  const handleProfile = () => {
    setProfile(prev => !prev)
  }
  const handleDeleteAccount = () => {
    console.log('Account deleted')
    setIsDeleteModalOpen(false)
  }
  // Detect current path on component mount and window location changes
  useEffect(() => {
    // Get current path
    const path = window.location.pathname
    setCurrentPath(path)

    // Find matching navigation item
    const matchingItem = navigation.find(item => {
      // Exact match for home
      if (item.path === '/' && path === '/') return true

      // For other routes, check if the path starts with the navigation path
      // This handles both exact matches and nested routes
      if (item.path !== '/' && path.startsWith(item.path)) return true

      return false
    })

    // If found, set the active ID
    if (matchingItem) {
      setActiveId(matchingItem.id)
    } else {
      setActiveId(0) // No match, don't highlight any item
    }
  }, [])

  useEffect(() => {
    if (activeNavId !== undefined) {
      setActiveId(activeNavId)
    }
  }, [activeNavId])

  const handleNavClick = (path: string) => {
    window.location.href = path
    setIsMobileMenuOpen(false)
  }
  const navigate = useNavigate()

  return (
    <div className="flex relative flex-col min-h-screen w-full overflow-x-hidden m-0">
      <nav className="z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <div
                onClick={() => handleNavClick('/')}
                className="cursor-pointer"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                  i-<span className="text-primary">o</span>ne
                </h1>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 items-center h-16">
              <div>
                {activeNavId ? (
                  <button
                    onClick={() => navigate(-1)}
                    className="text-gray-500 hidden sm:flex"
                  >
                    Back
                  </button>
                ) : (
                  <div className="flex justify-end w-full">
                    <div className="hidden md:flex md:items-center md:space-x-8">
                      {navigation.map((item: NavItem) => (
                        <div
                          key={item.id}
                          onClick={() => handleNavClick(item.path)}
                          className={` hover:text-primary font-medium px-3 py-2 transition-colors duration-200 cursor-pointer ${
                            activeId === item.id
                              ? 'text-black font-extrabold border-b-2 border-primary'
                              : 'text-gray-400'
                          }`}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isMobileMenuOpen
                          ? 'M6 18L18 6M6 6l12 12'
                          : 'M4 6h16M4 12h16M4 18h16'
                      }
                    />
                  </svg>
                </button>
              </div>
              <div className="w-10 h-10 flex  justify-end rounded-full overflow-hidden">
                <img
                  src={userFace}
                  alt="Profile"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={handleProfile}
                />
              </div>
            </div>
          </div>

          <div
            className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item: NavItem) => (
                <div
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={` hover:text-primary block px-3 py-2 text-base font-medium cursor-pointer ${
                    activeId === item.id ? 'text-primary' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 cursor-pointer z-50 bg-black/30 transition-all duration-700 ${
          profile
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleProfile}
      >
        <div
          className={`absolute top-0 cursor-arrow h-full right-0 bg-white shadow-lg transition-all duration-700 ${
            profile ? 'lg:w-[500px] w-[300px]' : 'w-0 whitespace-nowrap'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div
            className={`transition-all  overflow-y-auto h-full w-full duration-700 ${
              profile
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="md:py-[50px] py-[20px] whitespace-nowrap flex flex-col gap-[5px] px-[20px] md:px-[35px]">
              <div className="border-b-[#A3A3A3] flex flex-col gap-3 mt-[5px] ">
                <p className="text-[12px] text-[#A3A3A3]">Nickname:</p>
                <h1 className=" text-[17px] md:text-[28px]">
                  {user.nickname || 'User'}
                </h1>
              </div>
              <div className="border-b-[#A3A3A3] border-b-[1px] pb-8">
                <p className="text-[#A3A3A3] text-[12px]">
                  {/* {userData.department || "User"} */}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="border-b-[#A3A3A3] flex flex-col gap-3 mt-[35px] ">
                  <p className="text-[12px] text-[#A3A3A3]">First Name:</p>
                  <h1 className=" text-[14px] md:text-[24px]">
                    {user.firstName || 'User'}
                  </h1>
                </div>
                <div className="border-b-[#A3A3A3] flex flex-col gap-3 mt-[35px] ">
                  <p className="text-[12px] text-[#A3A3A3]">Last Name:</p>
                  <h1 className=" text-[14px] md:text-[24px]">
                    {user.lastName || 'User'}
                  </h1>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:gap-[126px]">
                <div className="border-b-[#A3A3A3] flex flex-col gap-3 mt-[35px] ">
                  <p className="text-[12px] text-[#A3A3A3]">Position:</p>
                  <h1 className=" text-[14px] md:text-[24px]">
                    {user.position || 'User'}
                  </h1>
                </div>
                <div className="border-b-[#A3A3A3] flex flex-col gap-3 mt-[35px] ">
                  <p className="text-[12px] text-[#A3A3A3]">Number:</p>
                  <h1 className=" text-[14px] md:text-[24px]">
                    {user.phoneNumber || 'User'}
                  </h1>
                </div>
              </div>
              <div className="border-b-[#A3A3A3] flex flex-col gap-3 mt-[35px] ">
                <p className="text-[12px] text-[#A3A3A3]">Email:</p>
                <h1 className=" text-[14px] md:text-[24px]">
                  {user.email || 'User'}
                </h1>
              </div>
              <button
                onClick={() => setIsLogoutModalOpen(true)}
                className="flex md:mt-[50px] mt-[30px] cursor-pointer items-center gap-[22px] w-full text-left py-2 text-sm"
              >
                <div className="rotate-180 flex justify-center items-center w-[64px] bg-[#FF00000D] h-[64px] rounded-full">
                  <CiLogout className="text-black" size={24} />
                </div>
                <p className=" text-[14px] md:text-[20px]">Logout</p>
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="flex mt-[20px] cursor-pointer items-center gap-[22px] w-full text-left py-2 text-sm"
              >
                <div className="flex justify-center items-center w-[64px] bg-red-100 h-[64px] rounded-full">
                  <CiLogout className="text-red-600" size={24} />
                </div>
                <Link
                  to="/delete-account"
                  className="text-[14px] md:text-[20px] text-red-600"
                >
                  Delete Account
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-8  HomeBackground">
        {children}
      </main>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
      <Footer2 />
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
    </div>
  )
}

export default HomeLayout
