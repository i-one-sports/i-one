import TwLayout from '@/components/layouts/Tw'
import HowItWorksCard from '@/components/HowItWorksCard'
import { FaUsers } from 'react-icons/fa'
import { FaLocationDot, FaScaleBalanced } from 'react-icons/fa6'
import { IoStatsChart } from 'react-icons/io5'

import * as React from 'react'

const How = () => {
  return (
    <TwLayout>
      <div className="flex flex-col mx-auto justify-center items-center gap-3 px-5 pt-[44px] lg:pt-[89px] play-fair ">
        <p className="text-[#000] text-base lg:text-3xl play-fair font-semibold text-center">
          Spend Less Time Being Indecisive
        </p>
        <p className=" text-primaryLight max-w-[600px] text-sm lg:text-lg play-fair font-normal text-center">
          schedule matches, book a session, create team formations, join a team,
          and track your stats both at the team and player level with i-One.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 w-full max-w-6xl mx-auto justify-center">
          <HowItWorksCard
            icon={FaLocationDot}
            iconColor="#FF7A9E"
            iconSize={24}
            title="Find A Pitch"
            description="Search for a pitch near you and check availability. Book a session that works for your squad."
          />
          <HowItWorksCard
            icon={FaUsers}
            iconColor="#63CBF4"
            title="Fill Your Squad"
            description="Bring your players together and build your team. Invite friends and add everyone to your lineup."
          />
          <HowItWorksCard
            icon={FaScaleBalanced}
            iconColor="#A78BFA"
            iconSize={24}
            title="Get Fair Teams"
            description="Let i-One balance the sides for you. Squads are split fairly so every match stays competitive."
          />
          <HowItWorksCard
            icon={IoStatsChart}
            iconColor="#00FF94"
            title="Play & Track"
            description="Review your performance and keep getting better. See your stats at both the team and player level."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 w-full max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 p-6 justify-center items-start bg-white shadow-md rounded-3xl">
            <span className="mt-2 px-4 py-2 uppercase rounded-full bg-primary text-white text-xs font-medium">
              for players
            </span>
            <p className="text-lg lg:text-2xl font-semibold text-black play-fair">
              Just want to play?
            </p>
            <p className="text-sm lg:text-base text-primaryLight max-w-md leading-6">
              Sign up in seconds, find a game near you, and jump in. Build a
              profile that actually tracks how you play over time. The goals,
              the assists, the trophies. Whether it's for fun or something
              bigger, your record follows you.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 justify-center items-start bg-black rounded-3xl shadow-md">
            <span className="mt-2 px-4 py-2 uppercase rounded-full bg-primary text-white text-xs font-medium">
              for pitch owners
            </span>
            <p className="text-lg lg:text-2xl font-semibold text-white play-fair">
              Own a pitch? Fill it and get paid
            </p>
            <p className="text-sm lg:text-base text-white/70 max-w-md leading-6">
              List your pitch, host friendlies and tournaments, and let i-One
              handle bookings and payments. Money from every session lands in
              your wallet automatically. Withdraw straight to your bank.
              Verified owners only, so players know it's real
            </p>
          </div>
        </div>
      </div>
    </TwLayout>
  )
}

export default How
