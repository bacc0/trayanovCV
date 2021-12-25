import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";


export const animationText = ( is_Ref_Visible, delay, html ) => {
     return (
          <AnimatePresence>
               {is_Ref_Visible == 1 && (
                    <motion.div exit={{ opacity: 0.3, y: -10 }}>
                         <motion.div
                              initial={{ scale: 0.99, y: 50, opacity: 0 }}
                              animate={{ scale: 1, y: 0, opacity: 1 }}
                              transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: delay }}
                         >
                              {html}
                         </motion.div>
                    </motion.div>
               )}
          </AnimatePresence >
     )
    
}
