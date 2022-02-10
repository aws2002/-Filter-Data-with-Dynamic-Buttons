import { motion, AnimatePresence } from "framer-motion";

export default function Menu({ menuItem }) {
  return (
    <div className=" container mt-20">
      <div className=" grid grid-cols-4 gap-5">
        <AnimatePresence>
          {menuItem.map((item) => (
            <motion.div
              animate={{ opacity: 1,scale:1 }}
              initial={{ opacity: 0,scale:0 }}
              exit={{ opacity: 0 }}
              transition={{duration:0.5}}
              layout
              key={item.id}
              className=" col-span-1"
            >
              <img src={item.image} alt="" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
