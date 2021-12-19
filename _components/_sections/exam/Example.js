import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";



const text = [
     <span>One _ 1</span>,
     <span>Two _ 2</span>,
     <span>Three 3</span>,
     <span>Four_ 4</span>,
     <span>Five _ 5</span>
]

const itemIds = []

const handlerItemIds = () => {
     let count = 0

     text.forEach((e) => {
          itemIds.push(count)
          count++
     });
};

handlerItemIds();

const MenuItem = ({ i }) => {
     return (
          <motion.li
               initial={{ y: 20, opacity: 0 }}
               variants={{
                    open: {
                         y: 0,
                         opacity: 1
                    }
               }}
          >
               <>{text[i]}</>
          </motion.li>
     );
};
const MenuToggle = ({ toggle }) => (
     <button onClick={toggle}>
          
     </button>
);


export const Example = () => {
     const [isOpen, toggleOpen] = useCycle(false, true);
     const containerRef = useRef(null);


     //   const { height } = useDimensions(containerRef);
     const { height } = 150;


     return (
          <motion.nav
               initial={false}
               animate={isOpen ? "open" : "closed"}
               custom={height}
               ref={containerRef}
               // style={{ backgroundColor: 'lightgreen' }}
          >

               <motion.ul
                    variants={{
                         open: {
                              transition: { staggerChildren: 0.07, delayChildren: 0.5 }
                         },
                         closed: {
                              transition: { staggerChildren: 0.05, staggerDirection: -1 }
                         }
                    }}
               >
                    {itemIds.map((i) => (
                         <MenuItem i={i} key={i} />
                    ))}
               </motion.ul>

               <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
     );
};
