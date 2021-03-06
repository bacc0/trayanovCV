import React, { Fragment, useState } from 'react';
import Script from 'next/script';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { TState } from '../../store/hooks';
import  typeWriter  from '../sections/helpers/TypeWriter';
import { useSelector } from 'react-redux';


interface Props {
     color: string;
};


const Veselin: React.FC<Props> = ({ color }) => {
     // const Veselin: React.FC<Props> = ({ color }: Props): JSX.Element => {
     // const Veselin: React.FC<{ color: string }> = ({ color }) => {
     // const Veselin  = ({ color }: Props ): JSX.Element => {

     const min_width_600px = useSelector((state: TState) => state.min_width_600px_Reducer.value)

     const strokeWidth = 0.75;

     const strokeWidth_extra = 2;

     const transitionStroke = { delay: 0.2, duration: 3 };

     const transitionFill = { delay: 2, duration: 0.3 };

     const transition_stroke_extra = { delay: 2.35, duration: 1.05 };

     const size = 310;

     const style_colibri = {
          top: 120,
          right: 250,
          margin: 'auto',
          width: '81px',
          height: '50px',
          overflow: 'hidden',
          position: 'absolute' 
     };

     const colibri = (
          <motion.div
               initial={{ opacity: 0, scale: 0.9, x: 11, y: -11 }}
               animate={{ opacity: 1, scale: 0.8, x: 0, y: 0 }}
               transition={{ delay: 0.2, duration: 0.25 }}
          >

               <div id='colibri_hype_container' className='HYPE_document' style={style_colibri as React.CSSProperties} />
               <Script
                    src='colibri.hyperesources/colibri_hype_generated_script.js?23464'
                    strategy='afterInteractive'
               />
          </motion.div>

);
     const [visStart, setVisStart] = useState(false);

     if (!visStart) {
          setInterval(() => {
               setVisStart(true)
          }, 2350)
     };

     const style_typing = {
          color: color,
          fontSize: 19,
          fontWeight: 400,
          letterSpacing: 1.3,
          position: 'relative',
          top: -82,
          left: 53 
     } ;


     const typing = (
          <Typography variant='h3' sx={style_typing as React.CSSProperties}>
               {visStart && (
                    <div>
                         {typeWriter(['... end ', 'front end developer'])}
                    </div>
               )}
          </Typography>

     );

     return (
          <div
               style={{
                    width: 300,
                    padding: 0,
                    paddingBottom: 36,
               }}
          >
               {colibri}

               <svg version='1.1' xmlns='http://www.w3.org/2000/svg'
                    width={size} height={size} viewBox='0, 0, 250, 100'
                    style={{ paddingLeft: 11 }}
               >
                    <motion.g
                         initial={{ opacity: 0, scale: 1.5, y: -7, x: 16 }}
                         animate={{ opacity: 1, scale: 1.00, y: -7, x: 16 }}
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
                         initial={{ scale: 1.00, y: 0, x: 0 }}
                         animate={{ scale: 0.82, y: 4, x: 0 }}   //   animate={{ scale: 0.95, y: 2 }} 
                         transition={{
                              delay: 2.16, duration: 0.25, type: "tween",
                              // @ts-ignore
                              stiffness: 400
                         }}
                    >
                         <motion.g
                              initial={{ opacity: 0 }}  // x=?
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6, duration: 1.5 }}
                         >
                              <g id="veselin">
                                   <g id="veselin_stroke">

                                        <motion.path
                                             initial={{ pathLength: 0 }}
                                             animate={{ pathLength: 1 }}
                                             transition={transitionStroke}
                                             stroke={color}
                                             strokeWidth={strokeWidth}
                                             fillOpacity="0"
                                             d="M55.834,88.402 Q51.352,88.402 47.606,86.057 Q43.86,83.712 41.739,79.622 Q39.617,75.532 39.617,70.544 L39.617,69.047 Q39.617,64.06 41.67,59.903 Q43.723,55.745 47.315,53.417 Q50.907,51.09 55.149,51.09 Q61.342,51.09 65.276,55.379 Q69.211,59.67 69.211,66.653 L69.211,68.549 L41.465,68.549 L41.465,70.511 Q41.465,74.9 43.364,78.642 Q45.262,82.383 48.598,84.511 Q51.934,86.64 55.834,86.64 Q59.563,86.64 62.18,85.425 Q64.797,84.212 66.815,81.685 L68.115,82.582 Q63.976,88.402 55.834,88.402 z M55.149,52.886 Q49.744,52.886 45.981,56.793 Q42.217,60.701 41.567,66.753 L67.363,66.753 L67.363,66.32 Q67.363,62.663 65.772,59.52 Q64.182,56.377 61.393,54.632 Q58.605,52.886 55.149,52.886 z" />


                                        <motion.path
                                             initial={{ pathLength: 0 }}
                                             animate={{ pathLength: 1 }}
                                             transition={{ ...transitionStroke, ...{ duration: 2 } }}
                                             stroke={color}
                                             strokeWidth={strokeWidth}
                                             fillOpacity="0"
                                             d="M104.626,78.925 Q104.626,72.373 93.131,70.012 Q86.221,68.582 83.518,66.338 Q80.815,64.092 80.815,60.168 Q80.815,56.211 84.254,53.65 Q87.692,51.09 93.2,51.09 Q99.187,51.09 102.813,53.866 Q106.44,56.643 106.44,61.365 L104.559,61.365 Q104.559,57.74 101.411,55.313 Q98.263,52.886 93.2,52.886 Q88.342,52.886 85.502,54.948 Q82.663,57.009 82.663,60.102 Q82.663,62.529 83.723,63.91 Q84.784,65.289 87.179,66.403 Q89.573,67.518 94.158,68.549 Q98.742,69.58 101.411,70.977 Q104.08,72.373 105.276,74.285 Q106.474,76.197 106.474,78.957 Q106.474,83.214 102.882,85.808 Q99.289,88.402 93.474,88.402 Q87.247,88.402 83.433,85.658 Q79.617,82.914 79.617,78.591 L81.465,78.591 Q81.739,82.383 84.904,84.494 Q88.068,86.606 93.474,86.606 Q98.434,86.606 101.53,84.362 Q104.626,82.116 104.626,78.925 z" />

                                        <motion.path
                                             initial={{ pathLength: 0 }}
                                             animate={{ pathLength: 1 }}
                                             transition={transitionStroke}
                                             stroke={color}
                                             strokeWidth={strokeWidth}
                                             fillOpacity="0"
                                             d="M133.953,88.402 Q129.471,88.402 125.725,86.057 Q121.979,83.712 119.857,79.622 Q117.736,75.532 117.736,70.544 L117.736,69.047 Q117.736,64.06 119.79,59.903 Q121.842,55.745 125.434,53.417 Q129.027,51.09 133.269,51.09 Q139.461,51.09 143.395,55.379 Q147.33,59.67 147.33,66.653 L147.33,68.549 L119.584,68.549 L119.584,70.511 Q119.584,74.9 121.482,78.642 Q123.381,82.383 126.717,84.511 Q130.052,86.64 133.953,86.64 Q137.682,86.64 140.299,85.425 Q142.916,84.212 144.935,81.685 L146.235,82.582 Q142.095,88.402 133.953,88.402 z M133.269,52.886 Q127.863,52.886 124.1,56.793 Q120.336,60.701 119.686,66.753 L145.482,66.753 L145.482,66.32 Q145.482,62.663 143.891,59.52 Q142.301,56.377 139.512,54.632 Q136.724,52.886 133.269,52.886 z" />

                                        <motion.path
                                             initial={{ pathLength: 0 }}
                                             animate={{ pathLength: 1 }}
                                             transition={{ ...transitionStroke, ...{ duration: 2 } }}
                                             stroke={color}
                                             strokeWidth={strokeWidth}
                                             fillOpacity="0"
                                             d="M162.219,87.737 L160.371,87.737 L160.371,36.657 L162.219,36.657 z" />

                                        <motion.path
                                             initial={{ pathLength: 0 }}
                                             animate={{ pathLength: 1 }}
                                             transition={{ ...transitionStroke, ...{ duration: 2.5 } }}
                                             stroke={color}
                                             strokeWidth={strokeWidth}
                                             fillOpacity="0"
                                             d="M181.625,87.737 L179.778,87.737 L179.778,51.755 L181.625,51.755 z M178.82,40.514 Q178.82,39.75 179.367,39.201 Q179.915,38.653 180.702,38.653 Q181.488,38.653 182.053,39.201 Q182.617,39.75 182.617,40.514 Q182.617,41.279 182.053,41.812 Q181.488,42.344 180.702,42.344 Q179.915,42.344 179.367,41.812 Q178.82,41.279 178.82,40.514 z" />

                                        <motion.path
                                             initial={{ pathLength: 0 }}
                                             animate={{ pathLength: 1 }}
                                             transition={{ ...transitionStroke, ...{ duration: 2 } }}
                                             stroke={color}
                                             strokeWidth={strokeWidth}
                                             fillOpacity="0"
                                             d="M199.594,60.135 Q201.406,55.945 204.931,53.518 Q208.454,51.09 212.731,51.09 Q218.684,51.09 221.574,54.365 Q224.465,57.641 224.5,64.259 L224.5,87.737 L222.652,87.737 L222.652,64.192 Q222.618,58.406 220.223,55.629 Q217.828,52.852 212.628,52.852 Q207.839,52.852 204.331,56.161 Q200.825,59.47 199.594,64.691 L199.594,87.737 L197.746,87.737 L197.746,51.755 L199.594,51.755 z" />

                                        <motion.path
                                             initial={{ pathLength: 0 }}
                                             animate={{ pathLength: 1 }}
                                             transition={{ ...transitionStroke, ...{ duration: 2 } }}
                                             stroke={color}
                                             strokeWidth={strokeWidth}
                                             fillOpacity="0"
                                             d="M31.599,52.992 L17.425,88.402 L15.641,88.402 L1.5,52.992 L3.453,52.992 L16.55,85.588 L29.635,52.992 L31.599,52.992 z" />


                                   </g>

                                   <g id="veselin_fill">


                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transitionFill}
                                             fill={color} d="M55.834,88.402 Q51.352,88.402 47.606,86.057 Q43.86,83.712 41.739,79.622 Q39.617,75.532 39.617,70.544 L39.617,69.047 Q39.617,64.06 41.67,59.903 Q43.723,55.745 47.315,53.417 Q50.907,51.09 55.149,51.09 Q61.342,51.09 65.276,55.379 Q69.211,59.67 69.211,66.653 L69.211,68.549 L41.465,68.549 L41.465,70.511 Q41.465,74.9 43.364,78.642 Q45.262,82.383 48.598,84.511 Q51.934,86.64 55.834,86.64 Q59.563,86.64 62.18,85.425 Q64.797,84.212 66.815,81.685 L68.115,82.582 Q63.976,88.402 55.834,88.402 z M55.149,52.886 Q49.744,52.886 45.981,56.793 Q42.217,60.701 41.567,66.753 L67.363,66.753 L67.363,66.32 Q67.363,62.663 65.772,59.52 Q64.182,56.377 61.393,54.632 Q58.605,52.886 55.149,52.886 z" />


                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transitionFill}
                                             fill={color} d="M104.626,78.925 Q104.626,72.373 93.131,70.012 Q86.221,68.582 83.518,66.338 Q80.815,64.092 80.815,60.168 Q80.815,56.211 84.254,53.65 Q87.692,51.09 93.2,51.09 Q99.187,51.09 102.813,53.866 Q106.44,56.643 106.44,61.365 L104.559,61.365 Q104.559,57.74 101.411,55.313 Q98.263,52.886 93.2,52.886 Q88.342,52.886 85.502,54.948 Q82.663,57.009 82.663,60.102 Q82.663,62.529 83.723,63.91 Q84.784,65.289 87.179,66.403 Q89.573,67.518 94.158,68.549 Q98.742,69.58 101.411,70.977 Q104.08,72.373 105.276,74.285 Q106.474,76.197 106.474,78.957 Q106.474,83.214 102.882,85.808 Q99.289,88.402 93.474,88.402 Q87.247,88.402 83.433,85.658 Q79.617,82.914 79.617,78.591 L81.465,78.591 Q81.739,82.383 84.904,84.494 Q88.068,86.606 93.474,86.606 Q98.434,86.606 101.53,84.362 Q104.626,82.116 104.626,78.925 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transitionFill}
                                             fill={color} d="M133.953,88.402 Q129.471,88.402 125.725,86.057 Q121.979,83.712 119.857,79.622 Q117.736,75.532 117.736,70.544 L117.736,69.047 Q117.736,64.06 119.79,59.903 Q121.842,55.745 125.434,53.417 Q129.027,51.09 133.269,51.09 Q139.461,51.09 143.395,55.379 Q147.33,59.67 147.33,66.653 L147.33,68.549 L119.584,68.549 L119.584,70.511 Q119.584,74.9 121.482,78.642 Q123.381,82.383 126.717,84.511 Q130.052,86.64 133.953,86.64 Q137.682,86.64 140.299,85.425 Q142.916,84.212 144.935,81.685 L146.235,82.582 Q142.095,88.402 133.953,88.402 z M133.269,52.886 Q127.863,52.886 124.1,56.793 Q120.336,60.701 119.686,66.753 L145.482,66.753 L145.482,66.32 Q145.482,62.663 143.891,59.52 Q142.301,56.377 139.512,54.632 Q136.724,52.886 133.269,52.886 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transitionFill}
                                             fill={color} d="M162.219,87.737 L160.371,87.737 L160.371,36.657 L162.219,36.657 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transitionFill}
                                             fill={color} d="M181.625,87.737 L179.778,87.737 L179.778,51.755 L181.625,51.755 z M178.82,40.514 Q178.82,39.75 179.367,39.201 Q179.915,38.653 180.702,38.653 Q181.488,38.653 182.053,39.201 Q182.617,39.75 182.617,40.514 Q182.617,41.279 182.053,41.812 Q181.488,42.344 180.702,42.344 Q179.915,42.344 179.367,41.812 Q178.82,41.279 178.82,40.514 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transitionFill}
                                             fill={color} d="M199.594,60.135 Q201.406,55.945 204.931,53.518 Q208.454,51.09 212.731,51.09 Q218.684,51.09 221.574,54.365 Q224.465,57.641 224.5,64.259 L224.5,87.737 L222.652,87.737 L222.652,64.192 Q222.618,58.406 220.223,55.629 Q217.828,52.852 212.628,52.852 Q207.839,52.852 204.331,56.161 Q200.825,59.47 199.594,64.691 L199.594,87.737 L197.746,87.737 L197.746,51.755 L199.594,51.755 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transitionFill}
                                             fill={color} d="M31.599,52.992 L17.425,88.402 L15.641,88.402 L1.5,52.992 L3.453,52.992 L16.55,85.588 L29.635,52.992 L31.599,52.992 z" />
















                                   </g>

                                   <g id="veselin_extra_stroke">

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transition_stroke_extra}
                                             stroke={color}
                                             strokeWidth={strokeWidth_extra}
                                             fillOpacity="0"
                                             d="M55.834,88.402 Q51.352,88.402 47.606,86.057 Q43.86,83.712 41.739,79.622 Q39.617,75.532 39.617,70.544 L39.617,69.047 Q39.617,64.06 41.67,59.903 Q43.723,55.745 47.315,53.417 Q50.907,51.09 55.149,51.09 Q61.342,51.09 65.276,55.379 Q69.211,59.67 69.211,66.653 L69.211,68.549 L41.465,68.549 L41.465,70.511 Q41.465,74.9 43.364,78.642 Q45.262,82.383 48.598,84.511 Q51.934,86.64 55.834,86.64 Q59.563,86.64 62.18,85.425 Q64.797,84.212 66.815,81.685 L68.115,82.582 Q63.976,88.402 55.834,88.402 z M55.149,52.886 Q49.744,52.886 45.981,56.793 Q42.217,60.701 41.567,66.753 L67.363,66.753 L67.363,66.32 Q67.363,62.663 65.772,59.52 Q64.182,56.377 61.393,54.632 Q58.605,52.886 55.149,52.886 z" />


                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transition_stroke_extra}
                                             stroke={color}
                                             strokeWidth={strokeWidth_extra}
                                             fillOpacity="0"
                                             d="M104.626,78.925 Q104.626,72.373 93.131,70.012 Q86.221,68.582 83.518,66.338 Q80.815,64.092 80.815,60.168 Q80.815,56.211 84.254,53.65 Q87.692,51.09 93.2,51.09 Q99.187,51.09 102.813,53.866 Q106.44,56.643 106.44,61.365 L104.559,61.365 Q104.559,57.74 101.411,55.313 Q98.263,52.886 93.2,52.886 Q88.342,52.886 85.502,54.948 Q82.663,57.009 82.663,60.102 Q82.663,62.529 83.723,63.91 Q84.784,65.289 87.179,66.403 Q89.573,67.518 94.158,68.549 Q98.742,69.58 101.411,70.977 Q104.08,72.373 105.276,74.285 Q106.474,76.197 106.474,78.957 Q106.474,83.214 102.882,85.808 Q99.289,88.402 93.474,88.402 Q87.247,88.402 83.433,85.658 Q79.617,82.914 79.617,78.591 L81.465,78.591 Q81.739,82.383 84.904,84.494 Q88.068,86.606 93.474,86.606 Q98.434,86.606 101.53,84.362 Q104.626,82.116 104.626,78.925 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transition_stroke_extra}
                                             stroke={color}
                                             strokeWidth={strokeWidth_extra}
                                             fillOpacity="0"
                                             d="M133.953,88.402 Q129.471,88.402 125.725,86.057 Q121.979,83.712 119.857,79.622 Q117.736,75.532 117.736,70.544 L117.736,69.047 Q117.736,64.06 119.79,59.903 Q121.842,55.745 125.434,53.417 Q129.027,51.09 133.269,51.09 Q139.461,51.09 143.395,55.379 Q147.33,59.67 147.33,66.653 L147.33,68.549 L119.584,68.549 L119.584,70.511 Q119.584,74.9 121.482,78.642 Q123.381,82.383 126.717,84.511 Q130.052,86.64 133.953,86.64 Q137.682,86.64 140.299,85.425 Q142.916,84.212 144.935,81.685 L146.235,82.582 Q142.095,88.402 133.953,88.402 z M133.269,52.886 Q127.863,52.886 124.1,56.793 Q120.336,60.701 119.686,66.753 L145.482,66.753 L145.482,66.32 Q145.482,62.663 143.891,59.52 Q142.301,56.377 139.512,54.632 Q136.724,52.886 133.269,52.886 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transition_stroke_extra}
                                             stroke={color}
                                             strokeWidth={strokeWidth_extra}
                                             fillOpacity="0"
                                             d="M162.219,87.737 L160.371,87.737 L160.371,36.657 L162.219,36.657 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transition_stroke_extra}
                                             stroke={color}
                                             strokeWidth={strokeWidth_extra}
                                             fillOpacity="0"
                                             d="M181.625,87.737 L179.778,87.737 L179.778,51.755 L181.625,51.755 z M178.82,40.514 Q178.82,39.75 179.367,39.201 Q179.915,38.653 180.702,38.653 Q181.488,38.653 182.053,39.201 Q182.617,39.75 182.617,40.514 Q182.617,41.279 182.053,41.812 Q181.488,42.344 180.702,42.344 Q179.915,42.344 179.367,41.812 Q178.82,41.279 178.82,40.514 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transition_stroke_extra}
                                             stroke={color}
                                             strokeWidth={strokeWidth_extra}
                                             fillOpacity="0"
                                             d="M199.594,60.135 Q201.406,55.945 204.931,53.518 Q208.454,51.09 212.731,51.09 Q218.684,51.09 221.574,54.365 Q224.465,57.641 224.5,64.259 L224.5,87.737 L222.652,87.737 L222.652,64.192 Q222.618,58.406 220.223,55.629 Q217.828,52.852 212.628,52.852 Q207.839,52.852 204.331,56.161 Q200.825,59.47 199.594,64.691 L199.594,87.737 L197.746,87.737 L197.746,51.755 L199.594,51.755 z" />

                                        <motion.path
                                             initial={{ opacity: 0 }}  // x=?
                                             animate={{ opacity: 1 }}
                                             transition={transition_stroke_extra}
                                             stroke={color}
                                             strokeWidth={strokeWidth_extra}
                                             fillOpacity="0"
                                             d="M31.599,52.992 L17.425,88.402 L15.641,88.402 L1.5,52.992 L3.453,52.992 L16.55,85.588 L29.635,52.992 L31.599,52.992 z" />

                                   </g>
                              </g>

                         </motion.g>
                    </motion.g>
               </svg>

               <div style={{ minHeight: min_width_600px ? 25 : 35 }} >
                    {typing}
               </div>
          </div>
     )
};

export default Veselin;