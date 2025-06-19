import { ChevronDown, Globe, IndianRupee } from 'lucide-react';
import React, { useState } from 'react'
import fb from '../assets/fb.svg';
import ig from '../assets/ig.svg';
import x from '../assets/x.svg';
const Footer = () => {

    const [UniqueStays, setUniqueStays] = useState(true);
  return (
    <div className='footer bg-[#F7F7F7] font-inter mt-12 '>
      <div className='footer-container py-[48px] px-[32px] w-[1344px] mx-auto pt-12 flex flex-col gap-4 '>

        <p className='text-xl font-bold'>Inspiration for future getaways</p>

        <div className='flex cursor-pointer border-b border-neutral-300 '>
            <div className='mr-6 flex flex-col gap-3' onClick={() => setUniqueStays(true)}>
                <p className={`text-sm font-semibold ${UniqueStays ? 'text-black' : 'text-neutral-500'}`}>Unique Stays</p>
                {UniqueStays && (<div className='h-0.5 w-full bg-black'></div>)}
            </div>

            <div className='flex flex-col gap-3' onClick={() => setUniqueStays(false)}>
                <p className={`text-sm font-semibold ${!UniqueStays ? 'text-black' : 'text-neutral-500'}`}>Categories</p>
                {!UniqueStays && (<div className='h-0.5 w-full bg-black'></div>)}

            </div>
        </div>
        {UniqueStays ? (
            <div className='grid lg:grid-cols-3 sm:grid-cols-2  xl:grid-cols-6   text-sm '>
                
                <div className='hidden md:flex flex-col justify-between gap-6 mt-4'>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Yurt Rentals</p>
                        <p className='text-neutral-500'>United States</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Farm Houses </p>
                        <p className='text-neutral-500'>United States</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Cottage Rentals</p>
                        <p className='text-neutral-500'>United States</p>
                    </div>
                </div>

                <div className='hidden md:flex flex-col justify-between gap-6 mt-4'>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Yurt Rentals</p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Farm Houses </p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Holdiay Cottages</p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                </div>

                <div className='hidden md:flex flex-col justify-between gap-6 mt-4'>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Castle Rentals</p>
                        <p className='text-neutral-500'>United States</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Cabin Rentals </p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Mansion Rentals</p>
                        <p className='text-neutral-500'>United States</p>
                    </div>
                </div>

                <div className='hidden md:flex flex-col justify-between gap-6 mt-4'>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Houseboats</p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Luxury Cabins </p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Holdiay Bunglaws</p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                </div>

                <div className='hidden md:flex flex-col justify-between gap-6 mt-4'>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Holidat Caravans</p>
                        <p className='text-neutral-500'>United States</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Luxury Houses </p>
                        <p className='text-neutral-500'>United States</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Cottage Rentals</p>
                        <p className='text-neutral-500'>United States</p>
                    </div>
                </div>

                <div className='flex flex-col  gap-6 mt-4'>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Private Island Rentals</p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-semibold'>Farm Houses </p>
                        <p className='text-neutral-500'>United Kingdom</p>
                    </div>
                    <div className='flex  cursor-pointer '>
                        <p className='font-semibold '>Show more</p>
                        <ChevronDown width={16} className='font-extrabold' />
                        
                    </div>
                </div>


                
            </div>    
        ) : (
            <div className='font-semibold text-sm   grid  py-[32px] grid-cols-1 xl:grid-cols-6' >
                <div className='flex flex-col gap-6 mt-6 cursor-pointer'>
                    <p>Amazing pools</p>
                    <p>Countryside</p>
                    <p>OMG!</p>
                </div>

                <div className='flex flex-col mt-6 gap-6 cursor-pointer '>
                    <p>Arctic</p>
                    <p>Design</p>
                    <p>Tiny Homes</p>
                </div>
                <div className='flex flex-col gap-6 mt-6 cursor-pointer '>
                    <p>Camping</p>
                    <p>Earth Homes</p>
                    <p>Towers</p>
                </div>
                <div className='flex flex-col gap-6 mt-6  cursor-pointer'>
                    <p>Camper vans</p>
                    <p>Farms</p>
                    <p>Widmills</p>
                </div>
                <div className='flex flex-col gap-6 mt-6 cursor-pointer'>
                    <p>Castles</p>
                    <p>National parks</p>
                    <p>Luxe</p>
                </div>
                <div className='flex flex-col gap-6 mt-6 cursor-pointer '>
                    <p>Containers</p>
                    <p>Vineyards</p>
                    
                </div>
            </div>
        )}

      </div>

      <div className="w-full max-w-screen-xl px-[32px] sm:px-6 lg:px-12 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto ">

            <div className='flex flex-col gap-4'>
                <p className='text-sm font-semibold'>Support</p>
                <div className='flex flex-col text-sm gap-4'>
                    <a href="#help" className='hover:underline'>Help Centre</a>
                    <a href="#air" className='hover:underline'>AirCover</a>
                    <a href="#anti-dis" className='hover:underline'>Anti-discrimination</a>
                    <a href="#disability" className='hover:underline'>Disability support</a>
                    <a href="#cancelaltion" className='hover:underline'>Cancellation options</a>
                    <a href="#report" className='hover:underline'>Report neighbourhood concern</a>
                </div>

            </div>

            <div className='flex flex-col gap-4'>
                <p className='text-sm font-semibold'>Hosting</p>
                <div className='flex flex-col text-sm gap-4'>
                    <a href="#Airbnb" className='hover:underline'>Airbnb your home</a>
                    <a href="#airC" className='hover:underline'>AirCover for Hosts</a>
                    <a href="#Hosting" className='hover:underline'>Hosting resources</a>
                    <a href="#Community" className='hover:underline'>Community forum</a>
                    <a href="#HostingR" className='hover:underline'>Hosting responsibly</a>
                    <a href="#Join" className='hover:underline'>Join a free Hosting class</a>
                    <a href="#Find" className='hover:underline'>Find a co-host</a>
                </div>

            </div>

            <div className='flex flex-col gap-4'>
                <p className='text-sm font-semibold'>Airbnb</p>
                <div className='flex flex-col text-sm gap-4'>
                    <a href="#summer2025" className='hover:underline'>2025 Summer Release</a>
                    <a href="#news" className='hover:underline'>Newsroom</a>
                    <a href="#features" className='hover:underline'>New features</a>
                    <a href="#careers" className='hover:underline'>Careers</a>
                    <a href="#investors" className='hover:underline'>Investors</a>
                    <a href="#Airbnborg" className='hover:underline'>Airbnb.org emergency stays</a>
                </div>

            </div>
      </div>

      <div className='w-[90%]  mx-auto justify-between flex flex-col-reverse lg:flex-row border-t border-neutral-200 pt-6 pb-8 mt-12'>
        <div className='flex text-sm text-neutral-800 gap-2 justify-center  items-center'>
            <p>© 2025 Airbnb, Inc.</p>
            <p>·</p>
            <a href="#privacy" className='hover:underline'>Privacy</a>
            <p>·</p>
            <a href="#terms" className='hover:underline'>Terms</a>
            <p>·</p>
            <a href="#sitemap" className='hover:underline'>Sitemap</a>
            <p>·</p>
            <a href="#details" className='hover:underline'>Company details</a>

        </div>

        <div className='flex justify-between font-semibold text-neutral-800 gap-4 text-sm'>
            <div className='flex gap-2  justify-center items-center'>
                <Globe width={18} />
                <a href="#lang">English (IN)</a>
                <div className='flex gap-2  justify-center items-center'>
                <div className='hidden gap-2 md:flex  justify-center items-center'>
                    <IndianRupee width={12} className=''/>
                    <a href="#inr">INR</a>
                </div>
                
            </div>
            </div>
            <div className='flex gap-2 md:hidden  justify-center items-center'>
                <IndianRupee width={12} className=''/>
                <a href="#inr">INR</a>
            </div>
            <div className="flex gap-1 justify-center items-center">
                <div className="p-2 rounded-full hover:bg-neutral-300 transition cursor-pointer">
                    <img src={fb} alt="fb" className="w-[18px] h-[18px]" />
                </div>
                <div className="p-2 rounded-full hover:bg-neutral-300 transition cursor-pointer">
                    <img src={x} alt="x" className="w-[18px] h-[18px]" />
                </div>
                <div className="p-2 rounded-full hover:bg-neutral-300 transition cursor-pointer">
                    <img src={ig} alt="ig" className="w-[18px] h-[18px]" />
                </div>
            </div>

        </div>
      </div>

    </div>
  )
}

export default Footer
