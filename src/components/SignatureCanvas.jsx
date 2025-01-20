// import React, { useRef, useState, useEffect } from 'react';

// // SignatureCanvas Component
// const SignatureCanvas = ({ width = 400, height = 200, onSave }) => {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [context, setContext] = useState(null);

//   // Set up canvas context
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     ctx.lineWidth = 2;
//     ctx.lineCap = 'round';
//     ctx.strokeStyle = 'black';
//     setContext(ctx);
//   }, []);

//   // Start drawing
//   const startDrawing = (e) => {
//     const ctx = context;
//     if (ctx) {
//       setIsDrawing(true);
//       const { offsetX, offsetY } = e.nativeEvent;
//       ctx.beginPath();
//       ctx.moveTo(offsetX, offsetY);
//     }
//   };

//   // Draw on canvas
//   const draw = (e) => {
//     if (!isDrawing) return;
//     const ctx = context;
//     if (ctx) {
//       const { offsetX, offsetY } = e.nativeEvent;
//       ctx.lineTo(offsetX, offsetY);
//       ctx.stroke();
//     }
//   };

//   // Stop drawing
//   const stopDrawing = () => {
//     const ctx = context;
//     if (ctx) {
//       setIsDrawing(false);
//       ctx.closePath();
//     }
//   };

//   // Clear the canvas
//   const clearCanvas = () => {
//     const ctx = context;
//     if (ctx) {
//       ctx.clearRect(0, 0, width, height);
//     }
//   };

//   // Save the signature
//   const saveSignature = () => {
//     const canvas = canvasRef.current;
//     if (canvas && onSave) {
//       onSave(canvas.toDataURL());
//       console.log(canvas.toDataURL())
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <canvas
//         ref={canvasRef}
//         width={width}
//         height={height}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//         onTouchStart={startDrawing}
//         onTouchMove={draw}
//         onTouchEnd={stopDrawing}
//         style={{ border: '1px solid #000', cursor: 'crosshair' }}
//       />
//       <div style={{ marginTop: '10px' }}>
//         <button onClick={clearCanvas}>Clear</button>
//         <button onClick={saveSignature}>Save</button>
//       </div>
//     </div>
//   );
// };

// export default SignatureCanvas;
//=================================================================================================================================
// import React, { useState, useRef } from 'react';

// // SignatureCanvas Component using SVG
// const SignatureCanvas = ({ width = 400, height = 200, onSave }) => {
//   const [paths, setPaths] = useState([]); // To store the paths drawn by the user
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [currentPath, setCurrentPath] = useState([]);
//   const [svg , setSvg] = useState(null);

//   const startDrawing = (e) => {
//     const { offsetX, offsetY } = e.nativeEvent;
//     setIsDrawing(true);
//     setCurrentPath([{ x: offsetX, y: offsetY }]);
//   };

//   const draw = (e) => {
//     if (!isDrawing) return;
//     const { offsetX, offsetY } = e.nativeEvent;
//     setCurrentPath((prevPath) => [
//       ...prevPath,
//       { x: offsetX, y: offsetY },
//     ]);
//   };

//   const stopDrawing = () => {
//     setIsDrawing(false);
//     setPaths((prevPaths) => [...prevPaths, currentPath]);
//     setCurrentPath([]); // Reset the current path for the next drawing
//   };

//   const clearCanvas = () => {
//     setPaths([]); // Clear all paths
//   };

//   const saveSignature = () => {
//     // Create SVG string from the paths
//     const svgContent = `
//       <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
//         ${paths.map((path, index) => {
//           const d = path
//             .map((point, i) => {
//               return i === 0
//                 ? `M${point.x},${point.y}`
//                 : `L${point.x},${point.y}`;
//             })
//             .join(' ');
//           return `<path d="${d}" stroke="black" stroke-width="2" fill="none" />`;
//         }).join('')}
//         ${currentPath.length > 0
//           ? `<path d="${currentPath
//               .map((point, i) => {
//                 return i === 0
//                   ? `M${point.x},${point.y}`
//                   : `L${point.x},${point.y}`;
//               })
//               .join(' ')}" stroke="black" stroke-width="2" fill="none" />`
//           : ''}
//       </svg>
//     `;
//     if (onSave) {
//       onSave(svgContent); // Pass the SVG string to the parent
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <svg
//         width={width}
//         height={height}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//         onTouchStart={startDrawing}
//         onTouchMove={draw}
//         onTouchEnd={stopDrawing}
//         style={{ border: '1px solid #000', cursor: 'crosshair' }}
//       >
//         {/* Render the paths */}
//         {paths.map((path, index) => {
//           const d = path
//             .map((point, i) => {
//               return i === 0
//                 ? `M${point.x},${point.y}`
//                 : `L${point.x},${point.y}`;
//             })
//             .join(' ');
//           return <path key={index} d={d} stroke="black" strokeWidth="2" fill="none" />;
//         })}
//         {/* Render the current drawing path */}
//         {currentPath.length > 0 && (
//           <path
//             d={currentPath
//               .map((point, i) => {
//                 return i === 0
//                   ? `M${point.x},${point.y}`
//                   : `L${point.x},${point.y}`;
//               })
//               .join(' ')}
//             stroke="black"
//             strokeWidth="2"
//             fill="none"
//           />
//         )}
//       </svg>
//       <div style={{ marginTop: '10px' }}>
//         <button onClick={clearCanvas}>Clear</button>
//         <button onClick={saveSignature}>Save</button>
//       </div>
//       {/* 
//       hii chat gpt add the svg image hear to show and also create cotroles to resize it and save it again hrear
//       */}
//     </div>
//   );
// };

// export default SignatureCanvas;

//import React, { useState, useRef } from 'react';

// SignatureCanvas Component using SVG
// const SignatureCanvas = ({ width = 400, height = 200, onSave }) => {
//   const [paths, setPaths] = useState([]); // To store the paths drawn by the user
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [currentPath, setCurrentPath] = useState([]);
//   const [svg, setSvg] = useState(null);
//   const [resizeWidth, setResizeWidth] = useState(width);
//   const [resizeHeight, setResizeHeight] = useState(height);
//   const [dragging, setDragging] = useState(null); // To track which side or corner is being dragged
//   const resizeRef = useRef(null); // Reference for resize container
//   const isResizing = useRef(false); // To track if resizing is in progress
//   const initialMousePos = useRef({ x: 0, y: 0 }); // To store initial mouse position for resizing

//   const startDrawing = (e) => {
//     const { offsetX, offsetY } = e.nativeEvent;
//     setIsDrawing(true);
//     setCurrentPath([{ x: offsetX, y: offsetY }]);
//   };

//   const draw = (e) => {
//     if (!isDrawing) return;
//     const { offsetX, offsetY } = e.nativeEvent;
//     setCurrentPath((prevPath) => [
//       ...prevPath,
//       { x: offsetX, y: offsetY },
//     ]);
//   };

//   const stopDrawing = () => {
//     setIsDrawing(false);
//     setPaths((prevPaths) => [...prevPaths, currentPath]);
//     setCurrentPath([]); // Reset the current path for the next drawing
//   };

//   const clearCanvas = () => {
//     setPaths([]); // Clear all paths
//     setSvg(null);  // Reset the SVG preview when clearing the canvas
//   };

//   const saveSignature = () => {
//     // Create SVG string from the paths
//     const svgContent = `
//       <svg width="${resizeWidth}" height="${resizeHeight}" xmlns="http://www.w3.org/2000/svg">
//         ${paths.map((path, index) => {
//           const d = path
//             .map((point, i) => {
//               return i === 0
//                 ? `M${point.x},${point.y}`
//                 : `L${point.x},${point.y}`;
//             })
//             .join(' ');
//           return `<path d="${d}" stroke="black" stroke-width="2" fill="none" />`;
//         }).join('')}
//         ${currentPath.length > 0
//           ? `<path d="${currentPath
//               .map((point, i) => {
//                 return i === 0
//                   ? `M${point.x},${point.y}`
//                   : `L${point.x},${point.y}`;
//               })
//               .join(' ')}" stroke="black" stroke-width="2" fill="none" />`
//           : ''}
//       </svg>
//     `;
//     setSvg(svgContent); // Set the SVG to be rendered as an image
//     if (onSave) {
//       onSave(svgContent); // Pass the SVG string to the parent
//     }
//   };

//   const startResizing = (e, direction) => {
//     setDragging(direction); // Set the direction of resizing
//     initialMousePos.current = { x: e.clientX, y: e.clientY }; // Store the initial mouse position
//     setIsDrawing(false); // Prevent drawing while resizing
//     document.body.style.cursor = `${direction}-resize`; // Change cursor for visual feedback
//   };

//   const handleResizing = (e) => {
//     if (!dragging) return;

//     const dx = e.clientX - initialMousePos.current.x; // Calculate horizontal movement
//     const dy = e.clientY - initialMousePos.current.y; // Calculate vertical movement

//     switch (dragging) {
//       case 'right':
//         setResizeWidth((prevWidth) => Math.max(prevWidth + dx, 50)); // Prevent width from becoming too small
//         break;
//       case 'left':
//         setResizeWidth((prevWidth) => Math.max(prevWidth - dx, 50)); // Prevent width from becoming too small
//         break;
//       case 'bottom':
//         setResizeHeight((prevHeight) => Math.max(prevHeight + dy, 50)); // Prevent height from becoming too small
//         break;
//       case 'top':
//         setResizeHeight((prevHeight) => Math.max(prevHeight - dy, 50)); // Prevent height from becoming too small
//         break;
//       case 'bottom-right':
//         setResizeWidth((prevWidth) => Math.max(prevWidth + dx, 50));
//         setResizeHeight((prevHeight) => Math.max(prevHeight + dy, 50));
//         break;
//       case 'top-left':
//         setResizeWidth((prevWidth) => Math.max(prevWidth - dx, 50));
//         setResizeHeight((prevHeight) => Math.max(prevHeight - dy, 50));
//         break;
//       case 'top-right':
//         setResizeWidth((prevWidth) => Math.max(prevWidth + dx, 50));
//         setResizeHeight((prevHeight) => Math.max(prevHeight - dy, 50));
//         break;
//       case 'bottom-left':
//         setResizeWidth((prevWidth) => Math.max(prevWidth - dx, 50));
//         setResizeHeight((prevHeight) => Math.max(prevHeight + dy, 50));
//         break;
//       default:
//         break;
//     }

//     initialMousePos.current = { x: e.clientX, y: e.clientY }; // Update initial mouse position for next calculation
//   };

//   const stopResizing = () => {
//     setDragging(null); // Reset dragging state
//     document.body.style.cursor = 'default'; // Reset cursor
//   };

//   const downloadSvg = () => {
//     if (svg) {
//       const blob = new Blob([svg], { type: 'image/svg+xml' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'signature.svg';
//       link.click();
//       URL.revokeObjectURL(url);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <svg
//         width={width}
//         height={height}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//         onTouchStart={startDrawing}
//         onTouchMove={draw}
//         onTouchEnd={stopDrawing}
//         style={{ border: '1px solid #000', cursor: 'crosshair' }}
//       >
//         {/* Render the paths */}
//         {paths.map((path, index) => {
//           const d = path
//             .map((point, i) => {
//               return i === 0
//                 ? `M${point.x},${point.y}`
//                 : `L${point.x},${point.y}`;
//             })
//             .join(' ');
//           return <path key={index} d={d} stroke="black" strokeWidth="2" fill="none" />;
//         })}
//         {/* Render the current drawing path */}
//         {currentPath.length > 0 && (
//           <path
//             d={currentPath
//               .map((point, i) => {
//                 return i === 0
//                   ? `M${point.x},${point.y}`
//                   : `L${point.x},${point.y}`;
//               })
//               .join(' ')}
//             stroke="black"
//             strokeWidth="2"
//             fill="none"
//           />
//         )}
//       </svg>
//       <div style={{ marginTop: '10px' }}>
//         <button onClick={clearCanvas}>Clear</button>
//         <button onClick={saveSignature}>Save</button>
//       </div>

//       {/* Resizeable Image Container */}
//       {svg && (
//         <div
//           ref={resizeRef}
//           style={{
//             position: 'relative',
//             display: 'inline-block',
//             width: `${resizeWidth}px`,
//             height: `${resizeHeight}px`,
//             border: '1px solid #000',
//             marginTop: '20px',
//           }}
//         >
//           <img
//             src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}
//             width={resizeWidth}
//             height={resizeHeight}
//             alt="SVG Preview"
//           />
//           {/* Resize Handles */}
//           <div
//             onMouseDown={(e) => startResizing(e, 'right')}
//             onMouseMove={handleResizing}
//             onMouseUp={stopResizing}
//             onMouseLeave={stopResizing}
//             style={{
//               position: 'absolute',
//               top: '50%',
//               right: '0',
//               width: '10px',
//               height: '10px',
//               cursor: 'ew-resize',
//               transform: 'translateY(-50%)',
//               backgroundColor: 'gray',
//             }}
//           />
//           <div
//             onMouseDown={(e) => startResizing(e, 'left')}
//             onMouseMove={handleResizing}
//             onMouseUp={stopResizing}
//             onMouseLeave={stopResizing}
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '0',
//               width: '10px',
//               height: '10px',
//               cursor: 'ew-resize',
//               transform: 'translateY(-50%)',
//               backgroundColor: 'gray',
//             }}
//           />
//           <div
//             onMouseDown={(e) => startResizing(e, 'top')}
//             onMouseMove={handleResizing}
//             onMouseUp={stopResizing}
//             onMouseLeave={stopResizing}
//             style={{
//               position: 'absolute',
//               top: '0',
//               left: '50%',
//               width: '10px',
//               height: '10px',
//               cursor: 'ns-resize',
//               transform: 'translateX(-50%)',
//               backgroundColor: 'gray',
//             }}
//           />
//           <div
//             onMouseDown={(e) => startResizing(e, 'bottom')}
//             onMouseMove={handleResizing}
//             onMouseUp={stopResizing}
//             onMouseLeave={stopResizing}
//             style={{
//               position: 'absolute',
//               bottom: '0',
//               left: '50%',
//               width: '10px',
//               height: '10px',
//               cursor: 'ns-resize',
//               transform: 'translateX(-50%)',
//               backgroundColor: 'gray',
//             }}
//           />
//           <div
//             onMouseDown={(e) => startResizing(e, 'bottom-right')}
//             onMouseMove={handleResizing}
//             onMouseUp={stopResizing}
//             onMouseLeave={stopResizing}
//             style={{
//               position: 'absolute',
//               bottom: '0',
//               right: '0',
//               width: '10px',
//               height: '10px',
//               cursor: 'se-resize',
//               backgroundColor: 'gray',
//             }}
//           />
//           <div
//             onMouseDown={(e) => startResizing(e, 'top-left')}
//             onMouseMove={handleResizing}
//             onMouseUp={stopResizing}
//             onMouseLeave={stopResizing}
//             style={{
//               position: 'absolute',
//               top: '0',
//               left: '0',
//               width: '10px',
//               height: '10px',
//               cursor: 'nw-resize',
//               backgroundColor: 'gray',
//             }}
//           />
//           <div
//             onMouseDown={(e) => startResizing(e, 'top-right')}
//             onMouseMove={handleResizing}
//             onMouseUp={stopResizing}
//             onMouseLeave={stopResizing}
//             style={{
//               position: 'absolute',
//               top: '0',
//               right: '0',
//               width: '10px',
//               height: '10px',
//               cursor: 'ne-resize',
//               backgroundColor: 'gray',
//             }}
//           />
//           <div
//             onMouseDown={(e) => startResizing(e, 'bottom-left')}
//             onMouseMove={handleResizing}
//             onMouseUp={stopResizing}
//             onMouseLeave={stopResizing}
//             style={{
//               position: 'absolute',
//               bottom: '0',
//               left: '0',
//               width: '10px',
//               height: '10px',
//               cursor: 'sw-resize',
//               backgroundColor: 'gray',
//             }}
//           />
//         </div>
//       )}

//       {/* Download Button */}
//       {svg && (
//         <div>
//           <button onClick={downloadSvg} style={{ marginTop: '10px' }}>
//             Download Resized SVG
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignatureCanvas;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useRef } from 'react';

// const SignatureCanvas = ({ width = 400, height = 200, onSave }) => {
//   const [paths, setPaths] = useState([]);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [currentPath, setCurrentPath] = useState([]);
//   const [svg, setSvg] = useState(null);
//   const [resizeWidth, setResizeWidth] = useState(width);
//   const [resizeHeight, setResizeHeight] = useState(height);
//   const [dragging, setDragging] = useState(null);
//   const initialMousePos = useRef({ x: 0, y: 0 });
//   const initialDimensions = useRef({ width: resizeWidth, height: resizeHeight });
//   const resizeRef = useRef(null);

//   // Drawing functions remain the same
//   const startDrawing = (e) => {
//     const { offsetX, offsetY } = e.nativeEvent;
//     setIsDrawing(true);
//     setCurrentPath([{ x: offsetX, y: offsetY }]);
//   };

//   const draw = (e) => {
//     if (!isDrawing) return;
//     const { offsetX, offsetY } = e.nativeEvent;
//     setCurrentPath((prevPath) => [...prevPath, { x: offsetX, y: offsetY }]);
//   };

//   const stopDrawing = () => {
//     setIsDrawing(false);
//     setPaths((prevPaths) => [...prevPaths, currentPath]);
//     setCurrentPath([]);
//   };

//   const clearCanvas = () => {
//     setPaths([]);
//     setSvg(null);
//   };

//   const saveSignature = () => {
//     const svgContent = `
//       <svg width="${resizeWidth}" height="${resizeHeight}" xmlns="http://www.w3.org/2000/svg">
//         ${paths.map((path, index) => {
//           const d = path
//             .map((point, i) => i === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
//             .join(' ');
//           return `<path d="${d}" stroke="black" stroke-width="2" fill="none" />`;
//         }).join('')}
//         ${currentPath.length > 0
//           ? `<path d="${currentPath
//               .map((point, i) => i === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
//               .join(' ')}" stroke="black" stroke-width="2" fill="none" />`
//           : ''}
//       </svg>
//     `;
//     setSvg(svgContent);
//     if (onSave) {
//       onSave(svgContent);
//     }
//   };

//   // Improved resizing functions
//   const startResizing = (e, direction) => {
//     e.preventDefault();
//     setDragging(direction);
//     initialMousePos.current = { x: e.clientX, y: e.clientY };
//     initialDimensions.current = { width: resizeWidth, height: resizeHeight };
//     setIsDrawing(false);
//     document.addEventListener('mousemove', handleResizing);
//     document.addEventListener('mouseup', stopResizing);
//     document.body.style.cursor = `${direction}-resize`;
//   };

//   const handleResizing = (e) => {
//     if (!dragging) return;

//     const dx = e.clientX - initialMousePos.current.x;
//     const dy = e.clientY - initialMousePos.current.y;

//     // Calculate new dimensions based on drag direction
//     let newWidth = resizeWidth;
//     let newHeight = resizeHeight;

//     switch (dragging) {
//       case 'bottom-right':
//         newWidth = Math.max(50, initialDimensions.current.width + dx);
//         newHeight = Math.max(50, initialDimensions.current.height + dy);
//         break;
//       case 'top-left':
//         newWidth = Math.max(50, initialDimensions.current.width - dx);
//         newHeight = Math.max(50, initialDimensions.current.height - dy);
//         break;
//       case 'top-right':
//         newWidth = Math.max(50, initialDimensions.current.width + dx);
//         newHeight = Math.max(50, initialDimensions.current.height - dy);
//         break;
//       case 'bottom-left':
//         newWidth = Math.max(50, initialDimensions.current.width - dx);
//         newHeight = Math.max(50, initialDimensions.current.height + dy);
//         break;
//     }

//     // Update dimensions directly without maintaining aspect ratio
//     setResizeWidth(newWidth);
//     setResizeHeight(newHeight);
//   };

//   const stopResizing = () => {
//     setDragging(null);
//     document.removeEventListener('mousemove', handleResizing);
//     document.removeEventListener('mouseup', stopResizing);
//     document.body.style.cursor = 'default';
//   };

//   const downloadSvg = () => {
//     if (svg) {
//       const blob = new Blob([svg], { type: 'image/svg+xml' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'signature.svg';
//       link.click();
//       URL.revokeObjectURL(url);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <svg
//         width={width}
//         height={height}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//         style={{ border: '1px solid #000', cursor: 'crosshair' }}
//       >
//         {paths.map((path, index) => {
//           const d = path
//             .map((point, i) => i === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
//             .join(' ');
//           return <path key={index} d={d} stroke="black" strokeWidth="2" fill="none" />;
//         })}
//         {currentPath.length > 0 && (
//           <path
//             d={currentPath
//               .map((point, i) => i === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
//               .join(' ')}
//             stroke="black"
//             strokeWidth="2"
//             fill="none"
//           />
//         )}
//       </svg>
      
//       <div style={{ marginTop: '10px' }}>
//         <button onClick={clearCanvas}>Clear</button>
//         <button onClick={saveSignature}>Save</button>
//       </div>

//       {svg && (
//         <div
//           ref={resizeRef}
//           style={{
//             position: 'relative',
//             display: 'inline-block',
//             width: `${resizeWidth}px`,
//             height: `${resizeHeight}px`,
//             border: '1px solid #000',
//             marginTop: '20px',
//           }}
//         >
//           <img
//             src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}
//             width={resizeWidth}
//             height={resizeHeight}
//             alt="SVG Preview"
//             style={{ display: 'block' }}
//           />
          
//           {['bottom-right', 'top-left', 'top-right', 'bottom-left'].map(direction => (
//             <div
//               key={direction}
//               onPointerMoveCapture={(e) => startResizing(e, direction)}
//               style={{
//                 position: 'absolute',
//                 width: '12px',
//                 height: '12px',
//                 backgroundColor: '#4a90e2',
//                 borderRadius: '50%',
//                 cursor: `${direction}-resize`,
//                 ...(direction.includes('bottom') ? { bottom: '-6px' } : { top: '-6px' }),
//                 ...(direction.includes('right') ? { right: '-6px' } : { left: '-6px' }),
//                 zIndex: 2
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {svg && (
//         <div>
//           <button onClick={downloadSvg} style={{ marginTop: '10px' }}>
//             Download Resized SVG
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignatureCanvas;

import React, { useState } from 'react';

const SignatureCanvas = ({ width = 400, height = 200, onSave }) => {
  const [paths, setPaths] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState([]);
  const [svg, setSvg] = useState(null);
  const [resizeWidth, setResizeWidth] = useState(width);
  const [resizeHeight, setResizeHeight] = useState(height);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setIsDrawing(true);
    setCurrentPath([{ x: offsetX, y: offsetY }]);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setCurrentPath((prevPath) => [...prevPath, { x: offsetX, y: offsetY }]);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (currentPath.length > 0) {
      setPaths((prevPaths) => [...prevPaths, currentPath]);
    }
    setCurrentPath([]);
  };

  const clearCanvas = () => {
    setPaths([]);
    setSvg(null);
  };

  const saveSignature = () => {
    const svgContent = `
      <svg width="${resizeWidth}" height="${resizeHeight}" xmlns="http://www.w3.org/2000/svg">
        ${paths.map((path) => {
          const d = path
            .map((point, i) => i === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
            .join(' ');
          return `<path d="${d}" stroke="black" stroke-width="2" fill="none" />`;
        }).join('')}
        ${currentPath.length > 0
          ? `<path d="${currentPath
              .map((point, i) => i === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
              .join(' ')}" stroke="black" stroke-width="2" fill="none" />`
          : ''}
      </svg>
    `;
    setSvg(svgContent);
    if (onSave) {
      onSave(svgContent);
    }
  };

  const downloadSvg = () => {
    if (svg) {
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'signature.svg';
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <svg
        width={width}
        height={height}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{ border: '1px solid #000', cursor: 'crosshair' }}
      >
        {paths.map((path, index) => {
          const d = path
            .map((point, i) => i === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
            .join(' ');
          return <path key={index} d={d} stroke="black" strokeWidth="2" fill="none" />;
        })}
        {currentPath.length > 0 && (
          <path
            d={currentPath
              .map((point, i) => i === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)
              .join(' ')}
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        )}
      </svg>

      <div style={{ marginTop: '10px' }}>
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={saveSignature}>Save</button>
      </div>
      

      {svg && (
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            width: `${resizeWidth}px`,
            height: `${resizeHeight}px`,
            border: '1px solid #000',
            marginTop: '20px',
          }}
        >
          <img
            src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}
            width={resizeWidth}
            height={resizeHeight}
            alt="SVG Preview"
            style={{ display: 'block' }}
          />

          {['bottom-right', 'top-left', 'top-right', 'bottom-left'].map(direction => (
            <div
              key={direction}
              onMouseDown={(e) => {
                e.preventDefault();
                const startX = e.clientX;
                const startY = e.clientY;
                const startWidth = resizeWidth;
                const startHeight = resizeHeight;

                function handleResize(moveEvent) {
                  const dx = moveEvent.clientX - startX;
                  const dy = moveEvent.clientY - startY;
                  
                  switch(direction) {
                    case 'bottom-right':
                      setResizeWidth(Math.max(50, startWidth + dx));
                      setResizeHeight(Math.max(50, startHeight + dy));
                      break;
                    case 'top-left':
                      setResizeWidth(Math.max(50, startWidth - dx));
                      setResizeHeight(Math.max(50, startHeight - dy));
                      break;
                    case 'top-right':
                      setResizeWidth(Math.max(50, startWidth + dx));
                      setResizeHeight(Math.max(50, startHeight - dy));
                      break;
                    case 'bottom-left':
                      setResizeWidth(Math.max(50, startWidth - dx));
                      setResizeHeight(Math.max(50, startHeight + dy));
                      break;
                  }
                }

                function handleMouseUp() {
                  document.removeEventListener('mousemove', handleResize);
                  document.removeEventListener('mouseup', handleMouseUp);
                }

                document.addEventListener('mousemove', handleResize);
                document.addEventListener('mouseup', handleMouseUp);
              }}
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                backgroundColor: '#4a90e2',
                borderRadius: '50%',
                cursor: `${direction}-resize`,
                ...(direction.includes('bottom') ? { bottom: '-6px' } : { top: '-6px' }),
                ...(direction.includes('right') ? { right: '-6px' } : { left: '-6px' }),
                zIndex: 2
              }}
            />
          ))}
        </div>
      )}

      {svg && (
        <div>
          <button onClick={downloadSvg} style={{ marginTop: '10px' }}>
            Download Resized SVG
          </button>
        </div>
      )}
    </div>
  );
};

export default SignatureCanvas;