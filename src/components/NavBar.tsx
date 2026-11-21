/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import Logo from '@/assets/images/logo.png'
import ContactModal from '@/screens/contact'

const Navbar: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    // Implement your logout logic here
  }

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <nav className="relative flex justify-between items-center py-6 lg:py-[60px] bg-white px-5 lg:px-16 xl:px-[120px]">
      {/* Logo */}
      <Link className="w-full max-w-[87px] shrink-0" to="/">
        <img
          className="w-full object-cover h-full"
          src={Logo}
          alt="ISO Access"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-6 xl:gap-10 whitespace-nowrap text-[#ababad]">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` text-md hover:text-primary transition duration-500 ease-in-out ${isActive ? 'text-primary' : 'text-primaryLight'}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              ` text-md hover:text-primary transition duration-500 ease-in-out ${isActive ? 'text-primary' : 'text-primaryLight'}`
            }
          >
            How it Works
          </NavLink>
        </li>
        <li onClick={openContactModal}>
          <button
            className={
              'text-md hover:text-primary transition duration-500 ease-in-out text-primaryLight'
            }
          >
            Contact us
          </button>
        </li>
        <li>
          <NavLink
            to="/terms"
            className={({ isActive }) =>
              ` text-md hover:text-primary transition duration-500 ease-in-out ${isActive ? 'text-primary' : 'text-primaryLight'}`
            }
          >
            Terms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              ` text-md hover:text-primary transition duration-500 ease-in-out ${isActive ? 'text-primary' : 'text-primaryLight'}`
            }
          >
            Privacy
          </NavLink>
        </li>
      </ul>

      {/* Get the App Button (Desktop) */}
      <div className="lg:flex items-center gap-3 hidden shrink-0">
        <Link
          to="/sign-in"
          className="whitespace-nowrap text-white bg-primary py-[10px] px-6 xl:px-[40px] rounded-md hover:scale-95 transition-all duration-300"
          role="button"
        >
          Get the app
        </Link>
      </div>

      <button
        id="menu-btn"
        className="block lg:hidden "
        onClick={toggleSideMenu}
      >
        {!isSideMenuOpen && (
          <GiHamburgerMenu size={24} className="text-primary " />
        )}
      </button>

      {isSideMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleSideMenu}
        />
      )}

      <div
        id="side-menu"
        className={`fixed top-0 left-0 h-full bg-[#fff] lg:hidden shadow-lg transform ${
          isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-30 w-full p-5`}
      >
        <button
          id="menu-btn"
          className="block lg:hidden "
          onClick={toggleSideMenu}
        >
          {isSideMenuOpen && (
            <IoClose size={28} className="text-primary z-50 absolute right-5" />
          )}
        </button>

        <ul className="flex flex-col gap-5 text-[#ABADAC] w-full h-full justify-center items-center">
          <li>
            <Link
              to="/"
              className="text-[#000] text-sm hover:text-primary transition duration-500 ease-in-out"
              onClick={toggleSideMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/how-it-works"
              className="text-sm hover:text-primary transition duration-500 ease-in-out"
              onClick={toggleSideMenu}
            >
              How It Works
            </Link>
          </li>
          <li onClick={openContactModal}>
            <button
              className={
                'text-md hover:text-primary transition duration-500 ease-in-out text-primaryLight'
              }
            >
              Contact us
            </button>
          </li>
          <li>
            <Link
              to="/terms"
              className="text-sm hover:text-primary transition duration-500 ease-in-out"
              onClick={toggleSideMenu}
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className="text-sm hover:text-primary transition duration-500 ease-in-out"
              onClick={toggleSideMenu}
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-sm hover:text-primary transition duration-500 ease-in-out"
              onClick={toggleSideMenu}
            >
              Become a Partner
            </Link>
          </li>
          <li className="w-full justify-center items-center flex px-[36px]">
            <Link
              to="/sign-in"
              className="text-sm text-black bg-primary w-full py-3 px-8 rounded-md  justify-center items-center flex"
              onClick={toggleSideMenu}
            >
              Get the app
            </Link>
          </li>
        </ul>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </nav>
  )
}

export default Navbar
