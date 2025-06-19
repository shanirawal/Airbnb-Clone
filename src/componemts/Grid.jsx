import React, { useRef } from 'react';
import Card from './Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Grid = ({ city }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative mx-4 md:mx-0 ">
      {/* 🔽 Left Scroll Button */}
      <ChevronLeft 
      onClick={() => scroll('left')}
        className="absolute right-8 -top-4 z-10 -translate-y-1/2 bg-zinc-200 p-1 rounded-full shadow hover:bg-gray-100 w-6 h-6"
      />

      {/* 🔁 Scrollable Row with Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-3 px-4 py-2 no-scrollbar"
        onWheel={(e) => {
          scrollRef.current.scrollLeft += e.deltaY;
        }}
      >
        {city.map((item, index) => (
          <Card
            
            key={index}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>

      {/* 🔼 Right Scroll Button */}
      <ChevronRight  
      onClick={() => scroll('right')}
      
        className="absolute right-1 -top-4  z-10 -translate-y-1/2 bg-zinc-200 p-1 rounded-full shadow hover:bg-gray-100 w-6 h-6 "
      />
    </div>
  );
};

export default Grid;
