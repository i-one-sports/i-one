import React from 'react'
import apps from '@/assets/images/phone.png'

import logo from '@/assets/images/footer-logo.png'
import AppStoreSvg from '@/assets/svg/appStoreSvg'
import PlayStoreSvg from '@/assets/svg/PlayStoresvg'

import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="relative flex flex-col px-5 lg:px-[120px] justify-center items-center mx-auto  gap-5 md:gap-[10px] lg:gap-[80px] py-[50px]">
        <div className="flex flex-col ">
          <div className="flex mt-2 flex-col lg:flex-row items-center justify-center lg:justify-end lg:items-end gap-4 relative z-20 w-full font-sans mx-auto lg:mx-0">
            <a
              href="#"
              className="hover:scale-105 hover:transition-all ease-in-out"
            >
              <AppStoreSvg />
            </a>

            <a
              href="#"
              className="rounded-lg hover:scale-105 hover:transition-all ease-in-out"
            >
              <PlayStoreSvg />
            </a>
          </div>
        </div>
        <div className="w-full max-w-[450px] lg:max-w-[847px]">
          <img className="w-full h-auto object-cover" src={apps} alt="Hero" />
        </div>
      </div>

      <footer className="px-5 lg:px-[120px] flex flex-col md:flex-row justify-between bg-[#000] py-[40px] border-t border-[#E4E7EC] mt-[40px] gap-5 lg:gap-0">
        <div className="flex-col flex  justify-between w-full gap-[92px]">
          <div className="flex-col flex gap-2 lg:gap-[22px] justify-center items-center w-full max-w-[364px] mx-auto text-[#fff]">
            <p className="footer-text text-sm">GAME ON?</p>
            <p className="text-2xl font-bold text-center">
              Build your squad, own the match
            </p>
            <p className="text-[13px] lg:text-base font-light text-center">
              From squads to pitches, we make it simple to set up and play
              anywhere.
            </p>
            <Link
              to="/role"
              className="text-[#000] bg-primary py-[10px] px-[40px] rounded-md mt-7 lg:mt-0"
              role="button"
            >
              Book A Slot Now!
            </Link>
          </div>

          <div className="flex  lg:gap-0 lg:justify-between text-[#667185] text-sm gap-[20px] items-center flex-col lg:flex-row">
            <a className="w-full max-w-[87px]" href="/">
              <img
                className="w-full object-cover"
                src={logo}
                alt="ISO Access"
              />
            </a>
            <p>
              © {new Date().getFullYear()} I-One. All rights reserved. | Owned
              by I-one-sports ltd
            </p>

            <div className="flex justify-between gap-3">
              <a href="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
                    fill="#00E082"
                  />
                  <path
                    d="M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
                    fill="#00E082"
                  />
                  <path
                    d="M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12Z"
                    fill="#00E082"
                  />
                  <path
                    d="M12 6.90002C13.65 6.90002 13.875 6.90002 14.55 6.90002C15.15 6.90002 15.45 7.05002 15.675 7.12502C15.975 7.27502 16.2 7.35002 16.425 7.57502C16.65 7.80002 16.8 8.02502 16.875 8.32502C16.95 8.55002 17.025 8.85002 17.1 9.45002C17.1 10.125 17.1 10.275 17.1 12C17.1 13.725 17.1 13.875 17.1 14.55C17.1 15.15 16.95 15.45 16.875 15.675C16.725 15.975 16.65 16.2 16.425 16.425C16.2 16.65 15.975 16.8 15.675 16.875C15.45 16.95 15.15 17.025 14.55 17.1C13.875 17.1 13.725 17.1 12 17.1C10.275 17.1 10.125 17.1 9.44999 17.1C8.84999 17.1 8.54999 16.95 8.32499 16.875C8.02499 16.725 7.79999 16.65 7.57499 16.425C7.34999 16.2 7.19999 15.975 7.12499 15.675C7.04999 15.45 6.97499 15.15 6.89999 14.55C6.89999 13.875 6.89999 13.725 6.89999 12C6.89999 10.275 6.89999 10.125 6.89999 9.45002C6.89999 8.85002 7.04999 8.55002 7.12499 8.32502C7.27499 8.02502 7.34999 7.80002 7.57499 7.57502C7.79999 7.35002 8.02499 7.20002 8.32499 7.12502C8.54999 7.05002 8.84999 6.97502 9.44999 6.90002C10.125 6.90002 10.35 6.90002 12 6.90002ZM12 5.77502C10.275 5.77502 10.125 5.77502 9.44999 5.77502C8.77499 5.77502 8.32499 5.92502 7.94999 6.07502C7.57499 6.22502 7.19999 6.45002 6.82499 6.82502C6.44999 7.20002 6.29999 7.50002 6.07499 7.95002C5.92499 8.32502 5.84999 8.77502 5.77499 9.45002C5.77499 10.125 5.77499 10.35 5.77499 12C5.77499 13.725 5.77499 13.875 5.77499 14.55C5.77499 15.225 5.92499 15.675 6.07499 16.05C6.22499 16.425 6.44999 16.8 6.82499 17.175C7.19999 17.55 7.49999 17.7 7.94999 17.925C8.32499 18.075 8.77499 18.15 9.44999 18.225C10.125 18.225 10.35 18.225 12 18.225C13.65 18.225 13.875 18.225 14.55 18.225C15.225 18.225 15.675 18.075 16.05 17.925C16.425 17.775 16.8 17.55 17.175 17.175C17.55 16.8 17.7 16.5 17.925 16.05C18.075 15.675 18.15 15.225 18.225 14.55C18.225 13.875 18.225 13.65 18.225 12C18.225 10.35 18.225 10.125 18.225 9.45002C18.225 8.77502 18.075 8.32502 17.925 7.95002C17.775 7.57502 17.55 7.20002 17.175 6.82502C16.8 6.45002 16.5 6.30002 16.05 6.07502C15.675 5.92502 15.225 5.85002 14.55 5.77502C13.875 5.77502 13.725 5.77502 12 5.77502Z"
                    fill="white"
                  />
                  <path
                    d="M12 8.77502C10.2 8.77502 8.77499 10.2 8.77499 12C8.77499 13.8 10.2 15.225 12 15.225C13.8 15.225 15.225 13.8 15.225 12C15.225 10.2 13.8 8.77502 12 8.77502ZM12 14.1C10.875 14.1 9.89999 13.2 9.89999 12C9.89999 10.875 10.8 9.90002 12 9.90002C13.125 9.90002 14.1 10.8 14.1 12C14.1 13.125 13.125 14.1 12 14.1Z"
                    fill="white"
                  />
                  <path
                    d="M15.3 9.45002C15.7142 9.45002 16.05 9.11424 16.05 8.70002C16.05 8.28581 15.7142 7.95002 15.3 7.95002C14.8858 7.95002 14.55 8.28581 14.55 8.70002C14.55 9.11424 14.8858 9.45002 15.3 9.45002Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
