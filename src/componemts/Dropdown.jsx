import { motion, AnimatePresence } from "framer-motion";
import { forwardRef } from 'react';
import {
  Navigation,
  TreePalm,
  TentTree,
  Building2,
  Landmark,
  CircuitBoard,
  TrainFront,
  Wheat,
  Leaf,
  Tent,
  BusFront,
  Castle,
  Plane,
  Globe,
  Hotel,
  Mountain,
  School,
  Utensils,
  ScrollText,
  ShoppingBag
} from 'lucide-react';

const iconMap = {
  navigation: <Navigation size={20} />,
  treePalm: <TreePalm size={20} />,
  tenttree: <TentTree size={20} />,
  building: <Building2 size={20} />,
  landmark: <Landmark size={20} />,
  circuit: <CircuitBoard size={20} />,
  train: <TrainFront size={20} />,
  wheat: <Wheat size={20} />,
  leaf: <Leaf size={20} />,
  tent: <Tent size={20} />,
  bus: <BusFront size={20} />,
  castle: <Castle size={20} />,
  plane: <Plane size={20} />,
  globe: <Globe size={20} />,
  hotel: <Hotel size={20} />,
  mountain: <Mountain size={20} />,
  school: <School size={20} />,
  utensils: <Utensils size={20} />,
  scrollText: <ScrollText size={20} />,
  shopping: <ShoppingBag size={20} />,
};

const DestinationDropdown = forwardRef(({ destinations, onSelect, isTyping ,selectedDestination  }, ref) => {
  return (
    <AnimatePresence>
      <motion.div
        ref={ref} // ✅ Properly pass the ref here
        key="dropdown"
        initial={{ opacity: 0, scale: 0.5, height: "0px", width: '300px' }}
        animate={{
          opacity: 1,
          scale: 1,
          height: isTyping ? "auto" : "540px",
          width: '409px',
          borderRadius: "1.5rem"
        }}
        style={{
          transformOrigin: 'top center',
        }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          opacity: { duration: 0.3, ease: "easeInOut" },
        }}
        className="absolute z-[9999] left-0 top-full px-[8px] mt-4   pt-[24px] w-[409px] bg-white shadow-xl  border flex flex-col"
      >
        <div className={`py-2 px-4  overflow-y-auto ${isTyping ? 'max-h-60' : 'flex-1'} transition-all`}>
          <div className="">
            <p className="text-xs px-4 pt-2 mb-1">Suggested destinations</p>
          </div>

          {destinations.length > 0 ? (
            destinations.map((dest, index) => (
              <div
                key={dest.name}
                onClick={() => onSelect(dest.name)} // ✅ This will auto-fill the search bar
                className="flex items-center gap-3 px-2 py-3 hover:bg-neutral-100 rounded-xl  transition-all cursor-pointer"
              >
                <span className={`text-xl rounded-xl p-4 flex items-center justify-center w-15 h-15 ${
                  index % 4 === 0 ? 'bg-blue-100 text-blue-600' :
                  index % 4 === 1 ? 'bg-green-100 text-green-600' :
                  index % 4 === 2 ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {iconMap[dest.icon]}
                </span>
                <div className="flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-gray-800">{dest.name}</h4>
                  <p className="text-sm text-gray-500">{dest.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div
              onClick={() => onSelect(selectedDestination)}
              className="flex items-center gap-3 px-4 py-3 mt-4 bg-neutral-100 cursor-pointer rounded-xl"
            >
              <div className="rounded-xl p-4 w-15 h-15 bg-gray-300 text-gray-500 flex items-center justify-center">
                <Globe size={20} />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-gray-600">
                  {selectedDestination || 'Unknown destination'}
                </h4>
                
            </div>
          </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

// Add display name for debugging
DestinationDropdown.displayName = 'DestinationDropdown';

export default DestinationDropdown;