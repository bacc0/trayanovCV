import { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import Script from 'next/script'



export default ({ color }) => {


     const fill = color
     const stroke = color
     const strokeWidth = 0.6
     const transitionStroke = { delay: 0.4, duration: 2 }
     const strokeWidthLines = 0.6
     const transitionStrokeLines = { delay: 6.8, duration: 0.9 }

     const transitionFill = { delay: 2.4, duration: 1 }
     const size = 270

     return (

          <svg
               version='1.1'
               xmlns='http://www.w3.org/2000/svg'
               width={size}
               height={size}
               viewBox='0, 0, 250, 100'

          >
               <g id="a_lines">
                    <motion.path
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={transitionStrokeLines}
                         d="M163.527,131.384 L8.611,131.608 L8.478,71.977" 
                         fill-opacity="0" 
                         stroke={color} 
                         strokeWidth={strokeWidthLines}
                    />
                    <motion.path
                         initial={{ pathLength: 0 }}
                         animate={{ pathLength: 1 }}
                         transition={transitionStrokeLines}
                         d="M63.087,3.091 L217.389,2.872 L217.315,62.809" 
                         fill-opacity="0" 
                         stroke={color} 
                         strokeWidth={strokeWidthLines}
                    />
                   
               </g>
               <motion.g id="a_hello"
                    initial={{ opacity: 0, scale: 1.5, x: 0 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.25 }}
               >

                    <g>
                         <path d="M50.1,26.494 Q51.049,25.329 52.568,25.329 Q55.214,25.329 55.237,28.314 L55.237,33.828 L53.81,33.828 L53.81,28.306 Q53.802,27.404 53.397,26.972 Q52.992,26.54 52.136,26.54 Q51.442,26.54 50.918,26.91 Q50.393,27.28 50.1,27.882 L50.1,33.828 L48.674,33.828 L48.674,21.982 L50.1,21.982 z" fill={color} />
                         <path d="M61.858,33.982 Q60.161,33.982 59.097,32.868 Q58.032,31.753 58.032,29.887 L58.032,29.625 Q58.032,28.383 58.507,27.407 Q58.981,26.432 59.833,25.88 Q60.685,25.329 61.68,25.329 Q63.307,25.329 64.21,26.401 Q65.112,27.473 65.112,29.47 L65.112,30.064 L59.459,30.064 Q59.49,31.298 60.18,32.058 Q60.87,32.817 61.935,32.817 Q62.691,32.817 63.215,32.509 Q63.739,32.2 64.133,31.691 L65.004,32.37 Q63.955,33.982 61.858,33.982 z M61.68,26.501 Q60.816,26.501 60.23,27.13 Q59.644,27.758 59.505,28.892 L63.685,28.892 L63.685,28.784 Q63.624,27.697 63.099,27.099 Q62.575,26.501 61.68,26.501 z" fill={color} />
                         <path d="M69.335,33.828 L67.908,33.828 L67.908,21.982 L69.335,21.982 z" fill={color} />
                         <path d="M73.26,33.828 L71.834,33.828 L71.834,21.982 L73.26,21.982 z" fill={color} />
                         <path d="M76.187,29.578 Q76.187,28.352 76.669,27.373 Q77.151,26.393 78.011,25.861 Q78.871,25.329 79.974,25.329 Q81.678,25.329 82.731,26.509 Q83.784,27.689 83.784,29.648 L83.784,29.748 Q83.784,30.967 83.317,31.934 Q82.851,32.902 81.983,33.442 Q81.115,33.982 79.989,33.982 Q78.293,33.982 77.24,32.802 Q76.187,31.622 76.187,29.679 z M77.622,29.748 Q77.622,31.136 78.266,31.977 Q78.91,32.817 79.989,32.817 Q81.077,32.817 81.717,31.965 Q82.357,31.113 82.357,29.578 Q82.357,28.206 81.705,27.353 Q81.054,26.501 79.974,26.501 Q78.917,26.501 78.27,27.342 Q77.622,28.182 77.622,29.748 z" fill={color} />
                         <path d="M94.006,33.828 L92.579,33.828 L92.579,25.483 L94.006,25.483 z M92.464,23.27 Q92.464,22.923 92.676,22.684 Q92.888,22.445 93.304,22.445 Q93.721,22.445 93.937,22.684 Q94.153,22.923 94.153,23.27 Q94.153,23.617 93.937,23.848 Q93.721,24.08 93.304,24.08 Q92.888,24.08 92.676,23.848 Q92.464,23.617 92.464,23.27 z" fill={color} />
                         <path d="M97.253,22.838 L97.091,25.676 L96.096,25.676 L96.104,21.982 L97.253,21.982 z" fill={color} />
                         <path d="M101.345,25.483 L101.383,26.409 Q102.301,25.329 103.859,25.329 Q105.609,25.329 106.242,26.671 Q106.658,26.069 107.325,25.699 Q107.992,25.329 108.902,25.329 Q111.648,25.329 111.694,28.236 L111.694,33.828 L110.268,33.828 L110.268,28.321 Q110.268,27.427 109.859,26.983 Q109.45,26.54 108.486,26.54 Q107.692,26.54 107.167,27.014 Q106.643,27.488 106.558,28.29 L106.558,33.828 L105.124,33.828 L105.124,28.36 Q105.124,26.54 103.342,26.54 Q101.938,26.54 101.422,27.735 L101.422,33.828 L99.995,33.828 L99.995,25.483 z" fill={color} />
                    </g>

               </motion.g>


               <motion.g
                    initial={{ scale: 0.8,y: 2 }}  // x=?
                    animate={{ scale: 0.9, y: 2 }}
                    transition={{ delay: 2.16, duration: .25, type: "tween", stiffness: 400 }}
               >
                    <motion.g
                         initial={{ opacity: 0 }}  // x=?
                         animate={{ opacity: 1 }}
                         transition={{ delay: 0.6, duration: 1.5 }}
                    >
                         <g id="a_veselin">
                              <g>
                                   <motion.path
                                        initial={{ opacity: 0, pathLength: 0 }}  // x=?
                                        animate={{ opacity: 1, pathLength: 1 }}
                                        transition={transitionFill}
                                        fill={color}
                                        d="M31.698,74.815 L39.141,52.194 L44.391,52.194 L33.615,81.647 L29.699,81.647 L18.811,52.194 L24.06,52.194 z" />
                              </g>
                              <g>
                                   <motion.path
                                        initial={{ opacity: 0, pathLength: 0 }}  // x=?
                                        animate={{ opacity: 1, pathLength: 1 }}
                                        transition={transitionFill}
                                        fill={color}
                                        d="M31.698,74.815 L39.141,52.194 L44.391,52.194 L33.615,81.647 L29.699,81.647 L18.811,52.194 L24.06,52.194 z" />

                                   <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={transitionStroke}
                                        stroke={color}
                                        strokeWidth={strokeWidth}
                                        fill-opacity="0"
                                        d="M31.698,74.815 L39.141,52.194 L44.391,52.194 L33.615,81.647 L29.699,81.647 L18.811,52.194 L24.06,52.194 z"
                                   />
                              </g>
                         </g>
                         <g>
                              <g>
                                   <motion.path
                                        initial={{ opacity: 0, pathLength: 0 }}  // x=?
                                        animate={{ opacity: 1, pathLength: 1 }}
                                        transition={transitionFill}
                                        fill={color}
                                        d="M63.614,51.65 Q69.474,51.65 72.724,55.433 Q75.973,59.217 75.973,66.267 L75.973,68.363 L55.615,68.363 Q55.726,72.719 58.212,75.4 Q60.698,78.081 64.53,78.081 Q67.252,78.081 69.141,76.992 Q71.03,75.904 72.446,74.107 L75.584,76.502 Q71.807,82.192 64.253,82.192 Q58.143,82.192 54.31,78.258 C51.666,75.535 50.635,71.973 50.497,68.294 L49.014,68.313 L47.433,64.239 L50.681,64.234 C51.575,60.138 50.979,61.86 52.185,58.986 Q53.893,55.542 56.962,53.596 Q60.031,51.65 63.614,51.65 z M63.614,55.787 Q60.503,55.787 58.392,58.006 Q56.281,60.224 55.782,64.225 L70.835,64.225 L70.835,63.844 Q70.613,60.006 68.725,57.896 Q66.836,55.787 63.614,55.787 z" />
                                   <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={transitionStroke}
                                        stroke={color}
                                        strokeWidth={strokeWidth}
                                        fill-opacity="0"
                                        d="M63.614,51.65 Q69.474,51.65 72.724,55.433 Q75.973,59.217 75.973,66.267 L75.973,68.363 L55.615,68.363 Q55.726,72.719 58.212,75.4 Q60.698,78.081 64.53,78.081 Q67.252,78.081 69.141,76.992 Q71.03,75.904 72.446,74.107 L75.584,76.502 Q71.807,82.192 64.253,82.192 Q58.143,82.192 54.31,78.258 C51.666,75.535 50.635,71.973 50.497,68.294 L49.014,68.313 L47.433,64.239 L50.681,64.234 C51.575,60.138 50.979,61.86 52.185,58.986 Q53.893,55.542 56.962,53.596 Q60.031,51.65 63.614,51.65 z M63.614,55.787 Q60.503,55.787 58.392,58.006 Q56.281,60.224 55.782,64.225 L70.835,64.225 L70.835,63.844 Q70.613,60.006 68.725,57.896 Q66.836,55.787 63.614,55.787 z"
                                   />
                              </g>

                         </g>
                         <g>
                              <g>
                                   <motion.path
                                        initial={{ opacity: 0, pathLength: 0 }}  // x=?
                                        animate={{ opacity: 1, pathLength: 1 }}
                                        transition={transitionFill}
                                        fill={color}
                                        d="M102.343,73.835 Q102.343,71.793 100.773,70.663 Q99.204,69.534 95.302,68.717 Q91.399,67.9 89.108,66.757 Q86.816,65.614 85.719,64.035 Q84.623,62.456 84.623,60.279 Q84.623,56.659 87.747,54.154 Q90.872,51.65 95.733,51.65 Q100.843,51.65 104.023,54.236 Q107.203,56.822 107.203,60.851 L102.037,60.851 Q102.037,58.782 100.246,57.284 Q98.454,55.787 95.733,55.787 Q92.927,55.787 91.344,56.985 Q89.76,58.183 89.76,60.115 Q89.76,61.939 91.233,62.865 Q92.705,63.79 96.551,64.634 Q100.399,65.478 102.787,66.648 Q105.175,67.819 106.329,69.466 Q107.481,71.113 107.481,73.481 Q107.481,77.428 104.259,79.81 Q101.038,82.192 95.899,82.192 Q92.288,82.192 89.511,80.94 Q86.733,79.687 85.165,77.441 Q83.595,75.195 83.595,72.582 L88.733,72.582 Q88.872,75.114 90.802,76.598 Q92.732,78.081 95.899,78.081 Q98.815,78.081 100.578,76.924 Q102.343,75.768 102.343,73.835 z" />
                                   <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={transitionStroke}
                                        stroke={color}
                                        strokeWidth={strokeWidth}
                                        fill-opacity="0"
                                        d="M102.343,73.835 Q102.343,71.793 100.773,70.663 Q99.204,69.534 95.302,68.717 Q91.399,67.9 89.108,66.757 Q86.816,65.614 85.719,64.035 Q84.623,62.456 84.623,60.279 Q84.623,56.659 87.747,54.154 Q90.872,51.65 95.733,51.65 Q100.843,51.65 104.023,54.236 Q107.203,56.822 107.203,60.851 L102.037,60.851 Q102.037,58.782 100.246,57.284 Q98.454,55.787 95.733,55.787 Q92.927,55.787 91.344,56.985 Q89.76,58.183 89.76,60.115 Q89.76,61.939 91.233,62.865 Q92.705,63.79 96.551,64.634 Q100.399,65.478 102.787,66.648 Q105.175,67.819 106.329,69.466 Q107.481,71.113 107.481,73.481 Q107.481,77.428 104.259,79.81 Q101.038,82.192 95.899,82.192 Q92.288,82.192 89.511,80.94 Q86.733,79.687 85.165,77.441 Q83.595,75.195 83.595,72.582 L88.733,72.582 Q88.872,75.114 90.802,76.598 Q92.732,78.081 95.899,78.081 Q98.815,78.081 100.578,76.924 Q102.343,75.768 102.343,73.835 z" f
                                   />
                              </g>

                         </g>
                         <g>
                              <g>
                                   <motion.path
                                        initial={{ opacity: 0, pathLength: 0 }}  // x=?
                                        animate={{ opacity: 1, pathLength: 1 }}
                                        transition={transitionFill}
                                        fill={color}
                                        d="M155.628,81.647 L150.49,81.647 L150.49,39.836 L155.628,39.836 z" f />
                                   <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={transitionStroke}
                                        stroke={color}
                                        strokeWidth={strokeWidth}
                                        fill-opacity="0"
                                        d="M155.628,81.647 L150.49,81.647 L150.49,39.836 L155.628,39.836 z"
                                   />
                              </g>

                         </g>
                         <g>
                              <g>
                                   <motion.path
                                        initial={{ opacity: 0, pathLength: 0 }}  // x=?
                                        animate={{ opacity: 1, pathLength: 1 }}
                                        transition={transitionFill}
                                        fill={color}
                                        d="M172.3,81.647 L167.161,81.647 L167.161,52.194 L172.3,52.194 z M166.744,44.382 Q166.744,43.156 167.509,42.313 Q168.273,41.469 169.773,41.469 Q171.272,41.469 172.049,42.313 Q172.827,43.156 172.827,44.382 Q172.827,45.606 172.049,46.423 Q171.272,47.24 169.773,47.24 Q168.273,47.24 167.509,46.423 Q166.744,45.606 166.744,44.382 z" f />
                                   <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={transitionStroke}
                                        stroke={color}
                                        strokeWidth={strokeWidth}
                                        fill-opacity="0"
                                        d="M172.3,81.647 L167.161,81.647 L167.161,52.194 L172.3,52.194 z M166.744,44.382 Q166.744,43.156 167.509,42.313 Q168.273,41.469 169.773,41.469 Q171.272,41.469 172.049,42.313 Q172.827,43.156 172.827,44.382 Q172.827,45.606 172.049,46.423 Q171.272,47.24 169.773,47.24 Q168.273,47.24 167.509,46.423 Q166.744,45.606 166.744,44.382 z"
                                   />
                              </g>

                         </g>
                         <g>
                              <g>
                                   <motion.path
                                        initial={{ opacity: 0, pathLength: 0 }}  // x=?
                                        animate={{ opacity: 1, pathLength: 1 }}
                                        transition={transitionFill}
                                        fill={color}
                                        d="M188.249,52.194 L188.416,55.896 Q191.86,51.65 197.415,51.65 Q206.942,51.65 207.025,62.184 L207.025,81.647 L201.887,81.647 L201.887,62.157 Q201.859,58.972 200.401,57.447 Q198.942,55.923 195.859,55.923 Q193.36,55.923 191.471,57.23 Q189.583,58.536 188.527,60.659 L188.527,81.647 L183.388,81.647 L183.388,52.194 z" />
                                   <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={transitionStroke}
                                        stroke={color}
                                        strokeWidth={strokeWidth}
                                        fill-opacity="0"
                                        d="M188.249,52.194 L188.416,55.896 Q191.86,51.65 197.415,51.65 Q206.942,51.65 207.025,62.184 L207.025,81.647 L201.887,81.647 L201.887,62.157 Q201.859,58.972 200.401,57.447 Q198.942,55.923 195.859,55.923 Q193.36,55.923 191.471,57.23 Q189.583,58.536 188.527,60.659 L188.527,81.647 L183.388,81.647 L183.388,52.194 z"
                                   />
                              </g>

                         </g>
                         <g>
                              <g>
                                   <motion.path
                                        initial={{ opacity: 0, pathLength: 0 }}  // x=?
                                        animate={{ opacity: 1, pathLength: 1 }}
                                        transition={transitionFill}
                                        fill={color}
                                        d="M128.874,51.65 Q134.734,51.65 137.984,55.433 Q141.234,59.217 141.234,66.267 L141.234,68.363 L120.875,68.363 Q120.986,72.719 123.472,75.4 Q125.958,78.081 129.791,78.081 Q132.513,78.081 134.402,76.992 Q136.29,75.904 137.706,74.107 L140.845,76.502 Q137.067,82.192 129.513,82.192 Q123.403,82.192 119.57,78.258 C116.926,75.535 115.895,71.973 115.758,68.294 L114.275,68.313 L112.694,64.239 L115.941,64.234 C116.835,60.138 116.239,61.86 117.445,58.986 Q119.154,55.542 122.222,53.596 Q125.292,51.65 128.875,51.65 z M128.874,55.787 Q125.764,55.787 123.653,58.006 Q121.542,60.225 121.042,64.225 L136.096,64.225 L136.096,63.844 Q135.874,60.006 133.985,57.896 Q132.096,55.787 128.875,55.787 z" />
                                   <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={transitionStroke}
                                        stroke={color}
                                        strokeWidth={strokeWidth}
                                        fill-opacity="0"
                                        d="M128.874,51.65 Q134.734,51.65 137.984,55.433 Q141.234,59.217 141.234,66.267 L141.234,68.363 L120.875,68.363 Q120.986,72.719 123.472,75.4 Q125.958,78.081 129.791,78.081 Q132.513,78.081 134.402,76.992 Q136.29,75.904 137.706,74.107 L140.845,76.502 Q137.067,82.192 129.513,82.192 Q123.403,82.192 119.57,78.258 C116.926,75.535 115.895,71.973 115.758,68.294 L114.275,68.313 L112.694,64.239 L115.941,64.234 C116.835,60.138 116.239,61.86 117.445,58.986 Q119.154,55.542 122.222,53.596 Q125.292,51.65 128.875,51.65 z M128.874,55.787 Q125.764,55.787 123.653,58.006 Q121.542,60.225 121.042,64.225 L136.096,64.225 L136.096,63.844 Q135.874,60.006 133.985,57.896 Q132.096,55.787 128.875,55.787 z" />
                              </g>

















                         </g>


                    </motion.g>
               </motion.g>
          </svg>

     )
}