// // import React, { useMemo, useCallback, useRef, useState, useEffect } from 'react';
// // import { Editor, Transforms, Range, createEditor ,Element as SlateElement } from 'slate';
// // import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
// // import { withHistory } from 'slate-history';
// // import { Portal } from '../components/Portal';

// // const TextFormattingExample = () => {
// //   const editor = useMemo(() => withTextFormatting(withReact(withHistory(createEditor()))), []);
// //   const [target, setTarget] = useState(null);
// //   const [index, setIndex] = useState(0);
// //   const [search, setSearch] = useState('');
// //   const ref = useRef();

// //   const options = ['Normal', 'H1', 'H2', 'H3', 'H4', 'Bullet'];

// //   const renderElement = useCallback(props => <Element {...props} />, []);
// //   const onKeyDown = useCallback(event => {
// //     if (target) {
// //       switch (event.key) {
// //         case 'ArrowDown':
// //           event.preventDefault();
// //           setIndex(index >= options.length - 1 ? 0 : index + 1);
// //           break;
// //         case 'ArrowUp':
// //           event.preventDefault();
// //           setIndex(index <= 0 ? options.length - 1 : index - 1);
// //           break;
// //         case 'Enter':
// //           event.preventDefault();
// //           Transforms.select(editor, target);
// //           insertHeading(editor, options[index]);
// //           setTarget(null);
// //           break;
// //         case 'Escape':
// //           event.preventDefault();
// //           setTarget(null);
// //           break;
// //       }
// //     }
// //   }, [index, target, options, editor]);

// //   useEffect(() => {
// //     if (target && ref.current) {
// //       const el = ref.current;
// //       const domRange = ReactEditor.toDOMRange(editor, target);
// //       const rect = domRange.getBoundingClientRect();
// //       el.style.top = `${rect.top + window.pageYOffset + 24}px`;
// //       el.style.left = `${rect.left + window.pageXOffset}px`;
// //     }
// //   }, [editor, target]);

// //   return (
// //     <Slate
// //       editor={editor}
// //       initialValue={initialValue}
// //       onChange={() => {
// //         const { selection } = editor;
// //         if (selection && Range.isCollapsed(selection)) {
// //           const [start] = Range.edges(selection);
// //           const wordBefore = Editor.before(editor, start, { unit: 'word' });
// //           const before = wordBefore && Editor.before(editor, wordBefore);
// //           const beforeRange = before && Editor.range(editor, before, start);
// //           const beforeText = beforeRange && Editor.string(editor, beforeRange);
// //           const beforeMatch = beforeText && beforeText.match(/^\/(\w*)$/);
// //           if (beforeMatch) {
// //             setTarget(beforeRange);
// //             setSearch(beforeMatch[1]);
// //             setIndex(0);
// //             return;
// //           }
// //         }
// //         setTarget(null);
// //       }}
// //     >
// //       <Editable
// //         renderElement={renderElement}
// //         onKeyDown={onKeyDown}
// //         placeholder="Enter some text..."
// //       />
// //       {target && (
// //         <Portal>
// //           <div
// //             ref={ref}
// //             style={{
// //               position: 'absolute',
// //               top: '-9999px',
// //               left: '-9999px',
// //               zIndex: 1,
// //               background: 'white',
// //               borderRadius: '4px',
// //               padding: '3px',
// //               boxShadow: '0 1px 5px rgba(0,0,0,.2)',
// //             }}
// //           >
// //             {options.map((option, i) => (
// //               <div
// //                 key={option}
// //                 onClick={() => {
// //                   Transforms.select(editor, target);
// //                   insertHeading(editor, option);
// //                   setTarget(null);
// //                 }}
// //                 style={{
// //                   padding: '5px',
// //                   background: i === index ? '#B4D5FF' : 'transparent',
// //                   cursor: 'pointer',
// //                 }}
// //               >
// //                 {option}
// //               </div>
// //             ))}
// //           </div>
// //         </Portal>
// //       )}
// //     </Slate>
// //   );
// // };

// // const withTextFormatting = editor => {
// //   const { isInline } = editor;
// //   editor.isInline = element => {
// //     return ['heading-one', 'heading-two', 'heading-three', 'heading-four', 'bullet-list'].includes(element.type)
// //       ? false
// //       : isInline(element);
// //   };
// //   return editor;
// // };



// // const insertHeading = (editor, heading) => {
// //   const typeMap = {
// //     Normal: 'paragraph',
// //     H1: 'heading-one',
// //     H2: 'heading-two',
// //     H3: 'heading-three',
// //     H4: 'heading-four',
// //     Bullet: 'bullet-list',
// //   };

// //   Transforms.setNodes(
// //     editor,
// //     { type: typeMap[heading] },
// //     { match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n) }
// //   );
  
// //   // Remove the slash command
// //   Editor.deleteBackward(editor, { unit: 'word' });
// // };
// // const Element = ({ attributes, children, element }) => {
// //   console.log(element.type)
// //   switch (element.type) {
// //     case 'heading-one':
// //       return <h1 style={{ fontSize: '2em', fontWeight: 'bold' }} {...attributes}>{children}</h1>;
// //     case 'heading-two':
// //       return <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }} {...attributes}>{children}</h2>;
// //     case 'heading-three':
// //       return <h3 style={{ fontSize: '1.17em', fontWeight: 'bold' }} {...attributes}>{children}</h3>;
// //     case 'heading-four':
// //       return <h4 style={{ fontSize: '1em', fontWeight: 'bold' }} {...attributes}>{children}</h4>;
// //       case 'bullet-list':
// //       return (
// //         <div style={{ display: 'flex', alignItems: 'flex-start' }} {...attributes}>
// //           <span style={{ marginRight: '0.5em' }}>•</span>
// //           <div>{children}</div>
// //         </div>
// //       );
// //     default:
// //       return <p {...attributes}>{children}</p>;
// //   }
// // };

// // const initialValue = [
// //   {
// //     type: 'paragraph',
// //     children: [{ text: 'Type / to select a heading size' }],
// //   },
// // ];

// // export default TextFormattingExample;
// import React, { useMemo, useCallback, useRef, useState, useEffect } from 'react';
// import { Editor, Transforms, Range, createEditor, Element as SlateElement } from 'slate';
// import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
// import { withHistory } from 'slate-history';
// import { Portal } from '../components/Portal';

// const TextFormattingExample = () => {
//   const editor = useMemo(() => withTextFormatting(withReact(withHistory(createEditor()))), []);
//   const [target, setTarget] = useState(null);
//   const [index, setIndex] = useState(0);
//   const [search, setSearch] = useState('');
//   const [currenntVar, setCurretVar] = useState('');
//   const [variables, setVariables] = useState([]); // Variable list
//   const [isVariableMode, setIsVariableMode] = useState(false); // Track if user is typing within square brackets
//   const ref = useRef();

//   const options = ['Normal', 'H1', 'H2', 'H3', 'H4', 'Bullet'];

//   const renderElement = useCallback(props => <Element {...props} />, []);
  
//   const onKeyDown = useCallback(event => {
//     if (target) {
//       switch (event.key) {
//         case 'ArrowDown':
//           event.preventDefault();
//           setIndex(index >= options.length - 1 ? 0 : index + 1);
//           break;
//         case 'ArrowUp':
//           event.preventDefault();
//           setIndex(index <= 0 ? options.length - 1 : index - 1);
//           break;
//         case 'Enter':
//           event.preventDefault();
//           Transforms.select(editor, target);
//           insertHeading(editor, options[index]);
//           setTarget(null);
//           break;
//         case 'Escape':
//           event.preventDefault();
//           setTarget(null);
//           break;
//       }
//     }
// if(isVariableMode){
//   setCurretVar(currenntVar+event.key)
// }
//     // Handle variable creation
//     if (event.key === '[') {
//       setIsVariableMode(true);
//       console.log("variables on")
//     }

//     if (event.key === ']' && isVariableMode) {
//       const selection = editor.selection;
//       console.log("selection" , selection);
      
//       // SlateElement.isElement(n) && Editor.isBlock(editor, n)
//       const variableRange = Editor.range(editor, selection.anchor, selection.focus);
//       console.log("variableRange" , variableRange);
//       const variableText = Editor.string(editor, variableRange);
//       console.log("variableText" , variableText);
//       const variableName =currenntVar
//       console.log("variables off")
//       console.log(variableName)

//       if (variableName && !variables.includes(variableName)) {
//         setVariables([...variables, variableName]); // Add new variable to the list
//       }

//       setIsVariableMode(false);
//       setCurretVar('')
//     }
//   }, [index, target, options, editor, variables, isVariableMode]);

//   useEffect(() => {
//     if (target && ref.current) {
//       const el = ref.current;
//       const domRange = ReactEditor.toDOMRange(editor, target);
//       const rect = domRange.getBoundingClientRect();
//       el.style.top = `${rect.top + window.pageYOffset + 24}px`;
//       el.style.left = `${rect.left + window.pageXOffset}px`;
//     }
//   }, [editor, target]);

//   return (
//     <>
//     <Slate
//       editor={editor}
//       initialValue={initialValue}
//       onChange={() => {
//         const { selection } = editor;
//         if (selection && Range.isCollapsed(selection)) {
//           const [start] = Range.edges(selection);
//           const wordBefore = Editor.before(editor, start, { unit: 'word' });
//           const before = wordBefore && Editor.before(editor, wordBefore);
//           const beforeRange = before && Editor.range(editor, before, start);
//           const beforeText = beforeRange && Editor.string(editor, beforeRange);
//           const beforeMatch = beforeText && beforeText.match(/^\/(\w*)$/);
//           if (beforeMatch) {
//             setTarget(beforeRange);
//             setSearch(beforeMatch[1]);
//             setIndex(0);
//             return;
//           }
//         }
//         setTarget(null);
//       }}
//     >
//       <Editable
//         renderElement={renderElement}
//         onKeyDown={onKeyDown}
//         placeholder="Enter some text..."
//       />
//       {target && (
//         <Portal>
//           <div
//             ref={ref}
//             style={{
//               position: 'absolute',
//               top: '-9999px',
//               left: '-9999px',
//               zIndex: 1,
//               background: 'white',
//               borderRadius: '4px',
//               padding: '3px',
//               boxShadow: '0 1px 5px rgba(0,0,0,.2)',
//             }}
//           >
//             {options.map((option, i) => (
//               <div
//                 key={option}
//                 onClick={() => {
//                   Transforms.select(editor, target);
//                   insertHeading(editor, option);
//                   setTarget(null);
//                 }}
//                 style={{
//                   padding: '5px',
//                   background: i === index ? '#B4D5FF' : 'transparent',
//                   cursor: 'pointer',
//                 }}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>
//         </Portal>
//       )}
//     </Slate>

//     <div className=' mt-6'>
// {
//   variables.map((variable , i)=>{
//     return (
//       <div
//       key={variable}
//       // onClick={() => {
//       //   Transforms.select(editor, target);
//       //   insertHeading(editor, option);
//       //   setTarget(null);
//       // }}
//       style={{
//         padding: '5px',
//         background: i === index ? '#B4D5FF' : 'transparent',
//         cursor: 'pointer',
//       }}
//     >
//       {variable}
//     </div>
//     )
//   })
// }
//     </div>
//     </>
//   );
// };

// const withTextFormatting = editor => {
//   const { isInline } = editor;
//   editor.isInline = element => {
//     return ['heading-one', 'heading-two', 'heading-three', 'heading-four', 'bullet-list', 'variable'].includes(element.type)
//       ? false
//       : isInline(element);
//   };
//   return editor;
// };

// const insertHeading = (editor, heading) => {
//   const typeMap = {
//     Normal: 'paragraph',
//     H1: 'heading-one',
//     H2: 'heading-two',
//     H3: 'heading-three',
//     H4: 'heading-four',
//     Bullet: 'bullet-list',
//   };

//   Transforms.setNodes(
//     editor,
//     { type: typeMap[heading] },
//     { match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n) }
//   );
  
//   // Remove the slash command
//   Editor.deleteBackward(editor, { unit: 'word' });
// };

// const Element = ({ attributes, children, element }) => {
//   switch (element.type) {
//     case 'heading-one':
//       return <h1 style={{ fontSize: '2em', fontWeight: 'bold' }} {...attributes}>{children}</h1>;
//     case 'heading-two':
//       return <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }} {...attributes}>{children}</h2>;
//     case 'heading-three':
//       return <h3 style={{ fontSize: '1.17em', fontWeight: 'bold' }} {...attributes}>{children}</h3>;
//     case 'heading-four':
//       return <h4 style={{ fontSize: '1em', fontWeight: 'bold' }} {...attributes}>{children}</h4>;
//     case 'bullet-list':
//       return (
//         <div style={{ display: 'flex', alignItems: 'flex-start' }} {...attributes}>
//           <span style={{ marginRight: '0.5em' }}>•</span>
//           <div>{children}</div>
//         </div>
//       );
//     case 'variable':
//       return <span style={{ color: 'red' }} {...attributes}>{children}</span>; // Highlight variable text in red
//     default:
//       return <p {...attributes}>{children}</p>;
//   }
// };

// const initialValue = [
//   {
//     type: 'paragraph',
//     children: [{ text: 'Type / to select a heading size. Use [variable] to define variables.' }],
//   },
// ];



// import React, { useMemo, useCallback, useRef, useState, useEffect } from 'react';
// import { Editor, Transforms, Range, createEditor, Element as SlateElement, Text } from 'slate';
// import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
// import { withHistory } from 'slate-history';
// import { Portal } from '../components/Portal';

// const TextFormattingExample = () => {
//   const editor = useMemo(() => withTextFormatting(withReact(withHistory(createEditor()))), []);
//   const [target, setTarget] = useState(null);
//   const [index, setIndex] = useState(0);
//   const [search, setSearch] = useState('');
//   const ref = useRef();

//   const options = ['Normal', 'H1', 'H2', 'H3', 'H4', 'Bullet'];

//   const renderElement = useCallback(props => <Element {...props} />, []);
//   const renderLeaf = useCallback(props => <Leaf {...props} />, []);

//   const onKeyDown = useCallback(event => {
//     if (target) {
//       switch (event.key) {
//         case 'ArrowDown':
//           event.preventDefault();
//           setIndex(index >= options.length - 1 ? 0 : index + 1);
//           break;
//         case 'ArrowUp':
//           event.preventDefault();
//           setIndex(index <= 0 ? options.length - 1 : index - 1);
//           break;
//         case 'Enter':
//           event.preventDefault();
//           Transforms.select(editor, target);
//           insertHeading(editor, options[index]);
//           setTarget(null);
//           break;
//         case 'Escape':
//           event.preventDefault();
//           setTarget(null);
//           break;
//       }
//     }
//   }, [index, target, options, editor]);

//   useEffect(() => {
//     if (target && ref.current) {
//       const el = ref.current;
//       const domRange = ReactEditor.toDOMRange(editor, target);
//       const rect = domRange.getBoundingClientRect();
//       el.style.top = `${rect.top + window.pageYOffset + 24}px`;
//       el.style.left = `${rect.left + window.pageXOffset}px`;
//     }
//   }, [editor, target]);

//   return (
//     <Slate
//       editor={editor}
//       initialValue={initialValue}
//       onChange={value => {
//         const { selection } = editor;
//         if (selection && Range.isCollapsed(selection)) {
//           const [start] = Range.edges(selection);
//           const wordBefore = Editor.before(editor, start, { unit: 'word' });
//           const before = wordBefore && Editor.before(editor, wordBefore);
//           const beforeRange = before && Editor.range(editor, before, start);
//           const beforeText = beforeRange && Editor.string(editor, beforeRange);
//           const beforeMatch = beforeText && beforeText.match(/^\/(\w*)$/);

//           if (beforeMatch) {
//             setTarget(beforeRange);
//             setSearch(beforeMatch[1]);
//             setIndex(0);
//             return;
//           }
//         }

//         setTarget(null);
//       }}
//     >
//       <Editable
//         renderElement={renderElement}
//         renderLeaf={renderLeaf}
//         decorate={decorate}  // Apply the decorate function here
//         onKeyDown={onKeyDown}
//         placeholder="Enter some text..."
//       />
//       {target && (
//         <Portal>
//           <div
//             ref={ref}
//             style={{
//               position: 'absolute',
//               top: '-9999px',
//               left: '-9999px',
//               zIndex: 1,
//               background: 'white',
//               borderRadius: '4px',
//               padding: '3px',
//               boxShadow: '0 1px 5px rgba(0,0,0,.2)',
//             }}
//           >
//             {options.map((option, i) => (
//               <div
//                 key={option}
//                 onClick={() => {
//                   Transforms.select(editor, target);
//                   insertHeading(editor, option);
//                   setTarget(null);
//                 }}
//                 style={{
//                   padding: '5px',
//                   background: i === index ? '#B4D5FF' : 'transparent',
//                   cursor: 'pointer',
//                 }}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>
//         </Portal>
//       )}
//     </Slate>
//   );
// };

// // Custom function to check and highlight variables within [ ]
// const withTextFormatting = editor => {
//   const { isInline } = editor;
  
//   editor.isInline = element => {
//     return ['heading-one', 'heading-two', 'heading-three', 'heading-four', 'bullet-list'].includes(element.type)
//       ? false
//       : isInline(element);
//   };
  
//   return editor;
// };

// // Insert Heading function remains unchanged
// const insertHeading = (editor, heading) => {
//   const typeMap = {
//     Normal: 'paragraph',
//     H1: 'heading-one',
//     H2: 'heading-two',
//     H3: 'heading-three',
//     H4: 'heading-four',
//     Bullet: 'bullet-list',
//   };

//   Transforms.setNodes(
//     editor,
//     { type: typeMap[heading] },
//     { match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n) }
//   );
  
//   // Remove the slash command
//   Editor.deleteBackward(editor, { unit: 'word' });
// };

// // New Leaf component to handle variable styling
// const Leaf = ({ attributes, children, leaf }) => {
//   if (leaf.variable) {
//     children = <span style={{ color: 'red' }}>{children}</span>;
//   }

//   return <span {...attributes}>{children}</span>;
// };

// // Use the decorate function to detect variables inside [ ]
// const decorate = ([node, path]) => {
//   const ranges = [];

//   if (!Text.isText(node)) {
//     return ranges;
//   }

//   const { text } = node;
//   const regex = /\[([^\]]+)\]/g;
//   let match;
  
//   while ((match = regex.exec(text))) {
//     const start = match.index;
//     const end = start + match[0].length;
    
//     ranges.push({
//       anchor: { path, offset: start },
//       focus: { path, offset: end },
//       variable: true,  // Mark it as a variable
//     });
//   }

//   return ranges;
// };

// const Element = ({ attributes, children, element }) => {
//   switch (element.type) {
//     case 'heading-one':
//       return <h1 style={{ fontSize: '2em', fontWeight: 'bold' }} {...attributes}>{children}</h1>;
//     case 'heading-two':
//       return <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }} {...attributes}>{children}</h2>;
//     case 'heading-three':
//       return <h3 style={{ fontSize: '1.17em', fontWeight: 'bold' }} {...attributes}>{children}</h3>;
//     case 'heading-four':
//       return <h4 style={{ fontSize: '1em', fontWeight: 'bold' }} {...attributes}>{children}</h4>;
//     case 'bullet-list':
//       return (
//         <div style={{ display: 'flex', alignItems: 'flex-start' }} {...attributes}>
//           <span style={{ marginRight: '0.5em' }}>•</span>
//           <div>{children}</div>
//         </div>
//       );
//     default:
//       return <p {...attributes}>{children}</p>;
//   }
// };

// const initialValue = [
//   {
//     type: 'paragraph',
//     children: [{ text: 'Type [variable] to declare variables in red color' }],
//   },
// ];

// export default TextFormattingExample;

// import React, { useMemo, useCallback, useRef, useState, useEffect } from 'react';
// import { Editor, Transforms, Range, createEditor, Element as SlateElement, Text } from 'slate';
// import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
// import { withHistory } from 'slate-history';
// import { Portal } from '../components/Portal';

// const TextFormattingExample = () => {
//   const editor = useMemo(() => withTextFormatting(withReact(withHistory(createEditor()))), []);
//   const [target, setTarget] = useState(null);
//   const [index, setIndex] = useState(0);
//   const [search, setSearch] = useState('');
//   const [variables, setVariables] = useState([]);  // State to store variables
//   const ref = useRef();

//   const options = ['Normal', 'H1', 'H2', 'H3', 'H4', 'Bullet'];

//   const renderElement = useCallback(props => <Element {...props} />, []);
//   const renderLeaf = useCallback(props => <Leaf {...props} />, []);

//   const onKeyDown = useCallback(event => {
//     if (target) {
//       switch (event.key) {
//         case 'ArrowDown':
//           event.preventDefault();
//           setIndex(index >= options.length - 1 ? 0 : index + 1);
//           break;
//         case 'ArrowUp':
//           event.preventDefault();
//           setIndex(index <= 0 ? options.length - 1 : index - 1);
//           break;
//         case 'Enter':
//           event.preventDefault();
//           Transforms.select(editor, target);
//           insertHeading(editor, options[index]);
//           setTarget(null);
//           break;
//         case 'Escape':
//           event.preventDefault();
//           setTarget(null);
//           break;
//       }
//     }
//   }, [index, target, options, editor]);

//   useEffect(() => {
//     if (target && ref.current) {
//       const el = ref.current;
//       const domRange = ReactEditor.toDOMRange(editor, target);
//       const rect = domRange.getBoundingClientRect();
//       el.style.top = `${rect.top + window.pageYOffset + 24}px`;
//       el.style.left = `${rect.left + window.pageXOffset}px`;
//     }
//   }, [editor, target]);

//   // Extract variables from the content on each change
//   const extractVariables = (value) => {
//     const variables = [];

//     for (const [node] of Editor.nodes(editor, { at: [], match: Text.isText })) {
//       const regex = /\[([^\]]+)\]/g;
//       let match;
//       while ((match = regex.exec(node.text))) {
//         variables.push(match[1]);  // Capture the variable without brackets
//       }
//     }

//     setVariables(variables);
//   };

//   return (
//     <div>
//       <Slate
//         editor={editor}
//         initialValue={initialValue}
//         onChange={value => {
//           const { selection } = editor;
//           if (selection && Range.isCollapsed(selection)) {
//             const [start] = Range.edges(selection);
//             const wordBefore = Editor.before(editor, start, { unit: 'word' });
//             const before = wordBefore && Editor.before(editor, wordBefore);
//             const beforeRange = before && Editor.range(editor, before, start);
//             const beforeText = beforeRange && Editor.string(editor, beforeRange);
//             const beforeMatch = beforeText && beforeText.match(/^\/(\w*)$/);

//             if (beforeMatch) {
//               setTarget(beforeRange);
//               setSearch(beforeMatch[1]);
//               setIndex(0);
//               return;
//             }
//           }

//           setTarget(null);

//           // Call the function to extract variables whenever the content changes
//           extractVariables(value);
//         }}
//       >
//         <Editable
//           renderElement={renderElement}
//           renderLeaf={renderLeaf}
//           decorate={decorate}  // Apply the decorate function here
//           onKeyDown={onKeyDown}
//           placeholder="Enter some text..."
//         />
//         {target && (
//           <Portal>
//             <div
//               ref={ref}
//               style={{
//                 position: 'absolute',
//                 top: '-9999px',
//                 left: '-9999px',
//                 zIndex: 1,
//                 background: 'white',
//                 borderRadius: '4px',
//                 padding: '3px',
//                 boxShadow: '0 1px 5px rgba(0,0,0,.2)',
//               }}
//             >
//               {options.map((option, i) => (
//                 <div
//                   key={option}
//                   onClick={() => {
//                     Transforms.select(editor, target);
//                     insertHeading(editor, option);
//                     setTarget(null);
//                   }}
//                   style={{
//                     padding: '5px',
//                     background: i === index ? '#B4D5FF' : 'transparent',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   {option}
//                 </div>
//               ))}
//             </div>
//           </Portal>
//         )}
//       </Slate>
      
//       {/* Render the list of variables below the editor */}
//       <div style={{ marginTop: '20px' }}>
//         <h3>Declared Variables:</h3>
//         {variables.length > 0 ? (
//           <ul>
//             {variables.map((variable, index) => (
//               <li key={index}>{variable}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No variables declared yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// // Custom function to check and highlight variables within [ ]
// const withTextFormatting = editor => {
//   const { isInline } = editor;
  
//   editor.isInline = element => {
//     return ['heading-one', 'heading-two', 'heading-three', 'heading-four', 'bullet-list'].includes(element.type)
//       ? false
//       : isInline(element);
//   };
  
//   return editor;
// };

// // Insert Heading function remains unchanged
// const insertHeading = (editor, heading) => {
//   const typeMap = {
//     Normal: 'paragraph',
//     H1: 'heading-one',
//     H2: 'heading-two',
//     H3: 'heading-three',
//     H4: 'heading-four',
//     Bullet: 'bullet-list',
//   };

//   Transforms.setNodes(
//     editor,
//     { type: typeMap[heading] },
//     { match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n) }
//   );
  
//   // Remove the slash command
//   Editor.deleteBackward(editor, { unit: 'word' });
// };

// // New Leaf component to handle variable styling
// const Leaf = ({ attributes, children, leaf }) => {
//   if (leaf.variable) {
//     children = <span style={{ color: 'red' }}>{children}</span>;
//   }

//   return <span {...attributes}>{children}</span>;
// };

// // Use the decorate function to detect variables inside [ ]
// const decorate = ([node, path]) => {
//   const ranges = [];

//   if (!Text.isText(node)) {
//     return ranges;
//   }

//   const { text } = node;
//   const regex = /\[([^\]]+)\]/g;
//   let match;
  
//   while ((match = regex.exec(text))) {
//     const start = match.index;
//     const end = start + match[0].length;
    
//     ranges.push({
//       anchor: { path, offset: start },
//       focus: { path, offset: end },
//       variable: true,  // Mark it as a variable
//     });
//   }

//   return ranges;
// };

// const Element = ({ attributes, children, element }) => {
//   switch (element.type) {
//     case 'heading-one':
//       return <h1 style={{ fontSize: '2em', fontWeight: 'bold' }} {...attributes}>{children}</h1>;
//     case 'heading-two':
//       return <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }} {...attributes}>{children}</h2>;
//     case 'heading-three':
//       return <h3 style={{ fontSize: '1.17em', fontWeight: 'bold' }} {...attributes}>{children}</h3>;
//     case 'heading-four':
//       return <h4 style={{ fontSize: '1em', fontWeight: 'bold' }} {...attributes}>{children}</h4>;
//     case 'bullet-list':
//       return (
//         <div style={{ display: 'flex', alignItems: 'flex-start' }} {...attributes}>
//           <span style={{ marginRight: '0.5em' }}>•</span>
//           <div>{children}</div>
//         </div>
//       );
//     default:
//       return <p {...attributes}>{children}</p>;
//   }
// };

// const initialValue = [
//   {
//     type: 'paragraph',
//     children: [{ text: 'Type [variable] to declare variables in red color' }],
//   },
// ];

// export default TextFormattingExample;

import React, { useMemo, useCallback, useRef, useState, useEffect } from 'react';
import { Editor, Transforms, Range, createEditor, Element as SlateElement, Text } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { withHistory } from 'slate-history';
import { Portal } from '../components/Portal';

const TextFormattingExample = () => {
  const editor = useMemo(() => withTextFormatting(withReact(withHistory(createEditor()))), []);
  const [target, setTarget] = useState(null);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [variables, setVariables] = useState([]);  // State to store declared variables
  const [suggestions, setSuggestions] = useState([]);  // State to store filtered suggestions
  const ref = useRef();

  const options = ['Normal', 'H1', 'H2', 'H3', 'H4', 'Bullet'];

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  const onKeyDown = useCallback(event => {
    if (suggestions.length > 0 && target) {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setIndex(index >= suggestions.length - 1 ? 0 : index + 1);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setIndex(index <= 0 ? suggestions.length - 1 : index - 1);
          break;
        case 'Enter':
          event.preventDefault();
          Transforms.select(editor, target);
          insertVariable(editor, suggestions[index]);  // Insert selected suggestion
          setSuggestions([]);
          setTarget(null);
          break;
        case 'Escape':
          event.preventDefault();
          setSuggestions([]);
          setTarget(null);
          break;
        default:
          break;
      }
    }
  }, [index, suggestions, target, editor]);

  useEffect(() => {
    if (target && ref.current) {
      const el = ref.current;
      const domRange = ReactEditor.toDOMRange(editor, target);
      const rect = domRange.getBoundingClientRect();
      el.style.top = `${rect.top + window.pageYOffset + 24}px`;
      el.style.left = `${rect.left + window.pageXOffset}px`;
    }
  }, [editor, target]);

  // Extract variables from the content on each change
  const extractVariables = (value) => {
    const vars = [];

    for (const [node] of Editor.nodes(editor, { at: [], match: Text.isText })) {
      const regex = /\[([^\]]+)\]/g;
      let match;
      while ((match = regex.exec(node.text))) {
        vars.push(match[1]);  // Capture the variable without brackets
      }
    }

    setVariables([... new Set(vars)]);
  };

  const onChange = value => {
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { unit: 'word' });
      const before = wordBefore && Editor.before(editor, wordBefore);
      const beforeRange = before && Editor.range(editor, before, start);
      const beforeText = beforeRange && Editor.string(editor, beforeRange);
      const match = beforeText && beforeText.match(/\[([^\]]*)$/);  // Match after the "["

      if (match) {
        const typedVariable = match[1];  // Get typed text after "["
        setSearch(typedVariable);
        const filteredSuggestions = variables.filter(v =>
          v.toLowerCase().startsWith(typedVariable.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setTarget(beforeRange);
        setIndex(0);
        return;
      }
    }

    setTarget(null);
    setSuggestions([]);

    // Call the function to extract variables whenever the content changes
    extractVariables(value);
  };

  return (
    <div>
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={onChange}
      >
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          decorate={decorate}
          onKeyDown={onKeyDown}
          placeholder="Enter some text..."
        />
        {target && suggestions.length > 0 && (
          <Portal>
            <div
              ref={ref}
              style={{
                position: 'absolute',
                top: '-9999px',
                left: '-9999px',
                zIndex: 1,
                background: 'white',
                borderRadius: '4px',
                padding: '3px',
                boxShadow: '0 1px 5px rgba(0,0,0,.2)',
              }}
            >
              {suggestions.map((suggestion, i) => (
                <div
                  key={suggestion}
                  onClick={() => {
                    Transforms.select(editor, target);
                    insertVariable(editor, suggestion);  // Insert clicked suggestion
                    setSuggestions([]);
                    setTarget(null);
                  }}
                  style={{
                    padding: '5px',
                    background: i === index ? '#B4D5FF' : 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          </Portal>
        )}
      </Slate>

      {/* Render the list of variables below the editor */}
      <div style={{ marginTop: '20px' }}>
        <h3>Declared Variables:</h3>
        {variables.length > 0 ? (
          <ul>
            {variables.map((variable, index) => (
              <li key={index}>{variable}</li>
            ))}
          </ul>
        ) : (
          <p>No variables declared yet.</p>
        )}
      </div>
    </div>
  );
};

// Custom function to insert selected variable
const insertVariable = (editor, variable) => {
  Transforms.insertText(editor, '[' + variable + ']');
  // Remove the incomplete typed text (everything after "[")
  // Editor.deleteBackward(editor, { unit: 'word' });
};

// Custom function to check and highlight variables within [ ]
const withTextFormatting = editor => {
  const { isInline } = editor;
  
  editor.isInline = element => {
    return ['heading-one', 'heading-two', 'heading-three', 'heading-four', 'bullet-list'].includes(element.type)
      ? false
      : isInline(element);
  };
  
  return editor;
};

// Insert Heading function remains unchanged
const insertHeading = (editor, heading) => {
  const typeMap = {
    Normal: 'paragraph',
    H1: 'heading-one',
    H2: 'heading-two',
    H3: 'heading-three',
    H4: 'heading-four',
    Bullet: 'bullet-list',
  };

  Transforms.setNodes(
    editor,
    { type: typeMap[heading] },
    { match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n) }
  );
  
  // Remove the slash command
  Editor.deleteBackward(editor, { unit: 'word' });
};

// New Leaf component to handle variable styling
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.variable) {
    children = <span style={{ color: 'red' }}>{children}</span>;
  }

  return <span {...attributes}>{children}</span>;
};

// Use the decorate function to detect variables inside [ ]
const decorate = ([node, path]) => {
  const ranges = [];

  if (!Text.isText(node)) {
    return ranges;
  }

  const { text } = node;
  const regex = /\[([^\]]+)\]/g;
  let match;
  
  while ((match = regex.exec(text))) {
    const start = match.index;
    const end = start + match[0].length;
    
    ranges.push({
      anchor: { path, offset: start },
      focus: { path, offset: end },
      variable: true,  // Mark it as a variable
    });
  }

  return ranges;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'heading-one':
      return <h1 style={{ fontSize: '2em', fontWeight: 'bold' }} {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }} {...attributes}>{children}</h2>;
    case 'heading-three':
      return <h3 style={{ fontSize: '1.17em', fontWeight: 'bold' }} {...attributes}>{children}</h3>;
    case 'heading-four':
      return <h4 style={{ fontSize: '1.12em', fontWeight: 'bold' }} {...attributes}>{children}</h4>;
    case 'bullet-list':
      return <ul style={{ paddingLeft: '20px' }} {...attributes}><li>{children}</li></ul>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'Type here...' }],
  },
];

export default TextFormattingExample;


