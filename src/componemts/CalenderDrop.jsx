import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style
import 'react-date-range/dist/theme/default.css'; // theme
import { motion, AnimatePresence } from "framer-motion";

const CalenderDrop = ({ onDateChange, initialRange }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
     onDateChange(ranges.selection);
  };

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5, height: "0px", width: '300px' }}
        animate={{
          opacity: 1,
          scale: 1,
          height:  "auto",
          width: 'auto',
          borderRadius: "1.5rem"
        }}
        style={{
          transformOrigin: 'top center',
        }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          opacity: { duration: 0.3, ease: "easeInOut" },
        }}
    className="absolute left-[10rem] top-full px-[8px] rounded-xl mt-4 pt-[24px]  bg-white shadow-xl z-10 border flex flex-col ">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
      />
    </motion.div>
  );
};

export default CalenderDrop;
