import { useState ,useRef ,useEffect} from 'react';
import logo from '../assets/airbnb.svg';
import logo1 from '../assets/airbnb-color-svgrepo-com.svg';
import { ConciergeBell, FerrisWheel, Globe, House, Menu, Minus, Plus, Search } from 'lucide-react';
import { destinations } from "../assets/constant.js";
import DestinationDropdown from './Dropdown.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import CalenderDrop from './CalenderDrop.jsx';
import { div } from 'framer-motion/client';
import { Button } from '@mui/material';
import Searchbar from './Searchbar.jsx';



const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isFocused, setIsFocused] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const searchBarRef = useRef(null);
  const dropdownRef = useRef(null);

  const [adultCount , setAdultCount] = useState(0);
  const [kidsCount , setKidsCount] = useState(0);
  const [infantCount , setInfantCount] = useState(0);
  const [petCount , setPetCount] = useState(0);

  const hasGuests = adultCount || kidsCount || infantCount || petCount;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  

  function handleAdultClick() {
  setAdultCount((prev) => prev + 1);

}

function handleAdultDecrease() {
  setAdultCount((prev) => Math.max(prev - 1, 0));
}

function handleKidsDecrease() {
  setKidsCount((prev) => Math.max(prev - 1, 0));
}

function handleInfantDecrease() {
  setInfantCount((prev) => Math.max(prev - 1, 0));
}

function handlePetDecrease() {
  setPetCount((prev) => Math.max(prev - 1, 0));
}

function handleKidsClick() {
  setKidsCount((prev) => prev + 1);
}

function handleInfantClick() {
  setInfantCount((prev) => prev + 1);
}

function handlePettClick() {
  setPetCount((prev) => prev + 1);
}



  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);

  const Navbar = () => {
  const [selectedDates, setSelectedDates] = useState(null);
};


  const handleDateChange = (range) => {
  setSelectedDates(range);
};


const formatDate = (date) => date?.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
});




  const tabRefs = useRef({});

  const tabRects = {};
  ['where', 'checkin', 'checkout', 'who'].forEach((tab) => {
    const el = tabRefs.current[tab];
    if (el) {
      tabRects[tab] = {
        left: el.offsetLeft,
        width: el.offsetWidth,
      };
    }
  });




  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(selectedDestination.toLowerCase())
  );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
            searchBarRef.current &&
            !searchBarRef.current.contains(event.target) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
            ) {
            setIsFocused('');
            setIsSearchFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);





  return (
    <div
      onClick={() => (setClicked(!clicked)
        
    )}
      className="navbar z-[100]  relative flex flex-col font-inter border-b pb-6 bg-gradient-to-t from-[#F7F7F7] to-white"
    >

      <div className={`flex md:hidden relative   border rounded-[100px]    cursor-pointer mx-auto w-[95%] shadow-lg p-[1rem] mt-[0.9rem] mb-[1rem] `}>
        <div className='flex mx-auto gap-2 items-center'>
          <Search width={12} height={12} />
        <p className='text-sm '>Start your search</p>
        </div>
      </div>

      {/* Top nav */}
      <div className="nav-upper flex justify-between pt-8 px-12 items-center">
        <img src={logo} height={100} width={100} alt="Airbnb logo" className=' hidden lg:block'/>
        <img src={logo1}  alt="Airbnb logo" className=' hidden md:block lg:hidden w-[32px] h-[34px]' />

        
        


        <div className="flex space-x-10 justify-between  md:mx-auto w-full md:w-auto  text-sm cursor-pointer ">
          <div className="flex space-x-2 items-center transition-transform duration-300 hover:scale-110">
            <House height={30} width={30} />
            <p className="text-gray-400 hover:text-gray-600">Homes</p>
          </div>
          <div className="flex space-x-2 items-center transition-transform duration-300 hover:scale-110">
            <FerrisWheel height={30} width={30} />
            <span className="text-gray-400 hover:text-gray-600">Experiences</span>
          </div>
          <div className="flex space-x-2 items-center transition-transform duration-300 hover:scale-110">
            <ConciergeBell height={30} width={30} />
            <span className="text-gray-400 hover:text-gray-600">Services</span>
          </div>
        </div>

        <div className=" items-center space-x-4 cursor-pointer hidden md:flex">
          <p className="text-sm font-medium text-gray-800">Become a host</p>
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            <Globe className="text-gray-700 w-[16px] text-sm" />
          </div>
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            <Menu className="text-gray-700 text-lg w-[16px]" />
          </div>
        </div>
      </div>

      {/* Search bar */}
      <motion.div 
      animate={{
            scale: isScrolled ? 0.9 : 1,
            
            transition: { type: 'spring', stiffness: 200, damping: 20 }
          }}
      

      className="nav-bottom relative hidden bg-white justify-center border rounded-[100px] mx-[2rem] items-center self-center mt-10 cursor-pointer drop-shadow-lg md:flex ">

        

        <motion.div
          
          onClick={() => setClicked(!clicked)}
          ref={searchBarRef} 
          className={`search-bar flex z-[10]  h-16 overflow-hidden rounded-full ${
            isSearchFocused ? 'bg-neutral-200' : ''
          }`}
        >

          {isFocused && tabRefs.current[isFocused] && (
          <motion.div
            layoutId="tab-indicator"
            className="absolute top-0 bottom-0 bg-white rounded-full z-0"
            initial={false}
            animate={{
              left: tabRects[isFocused]?.left || 0,
              width: tabRects[isFocused]?.width || 0
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}

          {/* WHERE */}
          <div

            ref={(el) => (tabRefs.current['where'] = el)}
            onClick={() => {
              setIsSearchFocused(true);
              setIsFocused('where');
            }}
            className={`flex items-center  pl-8 rounded-full overflow-hidden group ${
              isFocused === 'where' ? 'bg-white' : 'hover:bg-neutral-200'
            }`}
          >
            <div className="z-10 flex flex-col justify-center pr-24">
              <p className="text-xs font-medium ">Where</p>
              <input
                type="text"
                value={selectedDestination}
                onFocus={() => {
                  setIsFocused('where');
                  setIsSearchFocused(true);
                }}
                onChange={(e) => {
                  setSelectedDestination(e.target.value);
                  setIsFocused('where');
                  setIsSearchFocused(true);
                }}
                placeholder="Search destinations"
                className={`
                  text-sm whitespace-nowrap
                  ${selectedDestination ? 'text-gray-800 font-medium' : 'text-neutral-500'}
                  ${isFocused === 'where' ? 'bg-white' : 'group-hover:bg-neutral-200'}
                  ${isSearchFocused ? 'bg-neutral-200' : ''}
                  focus:outline-none w-full h-full cursor-text
                `}
              />
            </div>
          </div>

          <div className="h-6 w-px bg-gray-300 self-center" />

          {/* CHECK-IN */}
          <div
            ref={(el) => (tabRefs.current['checkin'] = el)}
            onClick={() => {
              setIsSearchFocused(true);
              setIsFocused('checkin');
            }}
            className={`flex z-10 items-center rounded-full overflow-hidden group/checkin ${
              isFocused === 'checkin' ? 'bg-white' : 'hover:bg-neutral-200'
            }`}
          >
            <div className="flex flex-col justify-center pl-4 pr-12">
              <p className="text-xs font-medium">Check in</p>
              <h4 className={`text-sm ${selectedDates ?"text-black font-semibold":"text-neutral-500"} whitespace-nowrap`}>
                 
                  {selectedDates ? selectedDates.startDate.toLocaleDateString() : "Add dates"}
                

              </h4>
            </div>
          </div>

          <div className="h-6 w-px bg-gray-300 self-center" />

          {/* CHECK-OUT */}
          <div

            ref={(el) => (tabRefs.current['checkout'] = el)}
            onClick={() => {
              setIsSearchFocused(true);
              setIsFocused('checkout');
            }}
            className={`flex items-center rounded-full overflow-hidden ${
              isFocused === 'checkout' ? 'bg-white' : 'hover:bg-neutral-200'
            }`}
          >
            <div className="flex z-10 flex-col justify-center pl-4 pr-12">
              <p className="text-xs font-medium">Check out</p>
              <h4 className={`text-sm ${selectedDates ?"text-black font-semibold":"text-neutral-500"} whitespace-nowrap`}>
                 
                  {selectedDates ? selectedDates.endDate.toLocaleDateString() : "Add dates"}


              </h4>
            </div>
          </div>

          <div className="h-6 w-px bg-gray-300 self-center" />

          {/* WHO */}
          <div

            ref={(el) => (tabRefs.current['who'] = el)}
            onClick={() => {
              setIsSearchFocused(true);
              setIsFocused('who');
            }}
            className={`flex z-10 items-center relative w-[295px] rounded-full overflow-hidden ${
              isFocused === 'who' ? 'bg-white' : 'hover:bg-neutral-200'
            }`}
          >
            <div className="flex flex-col justify-center pl-4 pr-24">
              <p className="text-xs font-medium">Who</p>
             <h4 className={`text-sm whitespace-nowrap ${hasGuests ? 'font-semibold text-black' : 'text-neutral-500'}`}>
                
                  {adultCount > 0 || kidsCount > 0 || infantCount > 0 || petCount > 0
                    ? `${adultCount > 0 ? `${adultCount} adult${adultCount > 1 ? "s" : ""}` : ""}`
                      + `${kidsCount > 0 ? `, ${kidsCount} kid${kidsCount > 1 ? "s" : ""}` : ""}`
                      + `${infantCount > 0 ? `, ${infantCount} infant${infantCount > 1 ? "s" : ""}` : ""}`
                      + `${petCount > 0 ? `, ${petCount} pet${petCount > 1 ? "s" : ""}` : ""}`
                    : "Add guests"}
                

                

              </h4>

            </div>

            <div onClick={(e) =>{
                  e.stopPropagation(); 
                  setIsSearchFocused(false);
                  setIsFocused('');
                }}
            className="absolute right-0 top-2 pr-2 ">
              {isFocused !== '' ? (
                <div 
                className="bg-[linear-gradient(90deg,_rgba(168,19,19,1)_0%,_rgba(199,68,85,1)_35%,_rgba(158,2,88,1)_94%)] rounded-full p-3 hover:bg-[#e03150] transition cursor-pointer flex justify-center items-center gap-1">
                  <Search className="text-white" width="16px" height="16px" />
                  <p className="text-white font-semibold">Search</p>
                </div>
              ) : (
                <div 
                 className="bg-airbnb-red rounded-full p-3 hover:bg-[#e03150] transition cursor-pointer h-12 w-12 flex justify-center items-center">
                  <Search className="text-white" width="16px" height="16px" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

         <AnimatePresence mode='wait'>
          <motion.div 
            key={['checkin', 'checkout'].includes(isFocused) ? 'calendar' : isFocused}
            initial={{ x: 0, opacity: 0  }}
            animate={{ x: 0, opacity: 1   }}
            exit={{ x: 0, opacity: 0  }}
            transition={{ duration: 0.3 , ease: 'easeInOut' }}
            className=''
          >
              {/* Destination dropdown */}
                {isFocused === 'where' && (
                  <DestinationDropdown
                    ref={dropdownRef}
                    selectedDestination={selectedDestination} 
                    destinations={filteredDestinations}
                    isTyping={selectedDestination.length > 0}
                    onSelect={(city) => {
                      setSelectedDestination(city);
                      setIsFocused('');
                      setIsSearchFocused(false);
                    }}
                  />
                )}


              {['checkin', 'checkout'].includes(isFocused) && (
                <CalenderDrop onDateChange={handleDateChange} initialRange={selectedDates} />
              )}

              {isFocused === 'who' && (
                <div className='absolute left-[27rem] w-[425px] h-[402px] top-full  rounded-[2rem] mt-4 pt-[24px]  bg-white shadow-xl z-10 border flex flex-col py-[32px]  px-[32px]'>

                  <div className='flex justify-between border-b  items-center   py-[24px] '>
                    <div>
                      <p className='font-semibold'>Adults</p>
                      <p className='text-sm text-neutral-500 text-nowrap'>Ages 13 or above</p>
                    </div>

                    <div className='flex    gap-4 '>
                      <button 
                      onClick={handleAdultDecrease} 
                      disabled={adultCount === 0}
                      className={`border rounded-full p-2 w-[32px] h-[32px] flex justify-center items-center ${adultCount === 0 ? 'text-neutral-200 cursor-not-allowed':'text-neutral-500 border-neutral-500/50 hover:border-neutral-800 hover:text-neutral-800'}  `}><Minus className='w-[12px] h-[12px]' /></button>
                      <p className='p-1'>{adultCount}</p>
                      <button onClick={handleAdultClick}
                      className='border rounded-full p-2 w-[32px] h-[32px] flex justify-center items-center text-neutral-500 border-neutral-500/50 hover:border-neutral-800 hover:text-neutral-800'><Plus className='w-[12px]  h-[12px] scale-105  ' /></button>
                    </div>

                  </div>

                  <div className='flex justify-between border-b  items-center   py-[24px] '>
                    <div>
                      <p className='font-semibold'>Children</p>
                      <p className='text-sm text-neutral-500 text-nowrap'>Ages 2-12</p>
                    </div>

                    <div className='flex    gap-4 '>
                      <button 
                      onClick={handleKidsDecrease} 
                      disabled={kidsCount === 0}
                      className={`border rounded-full p-2 w-[32px] h-[32px] flex justify-center items-center ${adultCount === 0 ? 'text-neutral-200 cursor-not-allowed':'text-neutral-500 border-neutral-500/50 hover:border-neutral-800 hover:text-neutral-800'}  `}><Minus className='w-[12px] h-[12px]' /></button>
                      <p className='p-1'>{kidsCount}</p>
                      <button onClick={handleKidsClick}
                      className='border rounded-full p-2 w-[32px] h-[32px] flex justify-center items-center text-neutral-500 border-neutral-500/50 hover:border-neutral-800 hover:text-neutral-800'><Plus className='w-[12px]  h-[12px] scale-105  ' /></button>
                    </div>

                  </div>

                  <div className='flex justify-between border-b  items-center   py-[24px] '>
                    <div>
                      <p className='font-semibold'>Infants</p>
                      <p className='text-sm text-neutral-500 text-nowrap'>Under 2</p>
                    </div>

                    <div className='flex    gap-4 '>
                      <button 
                      onClick={handleInfantDecrease} 
                      disabled={infantCount === 0}
                      className={`border rounded-full p-2 w-[32px] h-[32px] flex justify-center items-center ${adultCount === 0 ? 'text-neutral-200 cursor-not-allowed':'text-neutral-500 border-neutral-500/50 hover:border-neutral-800 hover:text-neutral-800'}  `}><Minus className='w-[12px] h-[12px]' /></button>
                      <p className='p-1'>{infantCount}</p>
                      <button onClick={handleInfantClick}
                      className='border rounded-full p-2 w-[32px] h-[32px] flex justify-center items-center text-neutral-500 border-neutral-500/50 hover:border-neutral-800 hover:text-neutral-800'><Plus className='w-[12px]  h-[12px] scale-105  ' /></button>
                    </div>

                  </div>

                  <div className='flex justify-between  items-center   py-[24px] '>
                    <div>
                      <p className='font-semibold'>Pets</p>
                      <a className='text-sm font-semibold underline text-neutral-500 text-nowrap'>Bringing a service animal?</a>
                    </div>

                    <div className='flex    gap-4 '>
                      <button 
                      onClick={handlePetDecrease} 
                      disabled={petCount === 0}
                      className={`border rounded-full p-2 w-[32px] h-[32px] flex justify-center items-center ${adultCount === 0 ? 'text-neutral-200 cursor-not-allowed':'text-neutral-500 border-neutral-500/50 hover:border-neutral-800 hover:text-neutral-800'}  `}><Minus className='w-[12px] h-[12px]' /></button>
                      <p className='p-1'>{petCount}</p>
                      <button onClick={handlePettClick}
                      className='border rounded-full p-2 w-[32px] h-[32px] flex justify-center items-center text-neutral-500 border-neutral-500/50 hover:border-neutral-800 hover:text-neutral-800'><Plus className='w-[12px]  h-[12px] scale-105  ' /></button>
                    </div>

                  </div>

                  
                </div>
              )}

        </motion.div> 
        </AnimatePresence>

        
      </motion.div>

     
             


    </div>

    
  );
};

export default Navbar;
