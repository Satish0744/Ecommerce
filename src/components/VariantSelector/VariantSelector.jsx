// import React from 'react';

// const VariantSelector = ({
//   colors,
//   sizes,
//   selectedColor,
//   selectedSize,
//   onColorChange,
//   onSizeChange
// }) => {
//   return (
//     <div className="space-y-4">
//       {/* Color Selection */}
//       <div>
//         <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//           Color: <span className="font-semibold">{selectedColor?.name}</span>
//         </h3>
//         <div className="flex flex-wrap gap-3">
//           {colors.map((color) => (
//             <button
//               key={color.id}
//               onClick={() => color.available && onColorChange(color)}
//               disabled={!color.available}
//               className={`
//                 w-10 h-10 rounded-full border-2 transition-all duration-200
//                 ${selectedColor?.id === color.id ? 'border-primary-500 ring-2 ring-primary-200 dark:ring-primary-800' : 'border-gray-200 dark:border-gray-600'}
//                 ${!color.available ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}
//               `}
//               style={{ backgroundColor: color.hex }}
//               title={color.name}
//             >
//               <span className="sr-only">{color.name}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Size Selection */}
//       <div>
//         <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//           Size: <span className="font-semibold">{selectedSize?.name}</span>
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           {sizes.map((size) => (
//             <button
//               key={size.id}
//               onClick={() => size.available && onSizeChange(size)}
//               disabled={!size.available}
//               className={`
//                 px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-200
//                 ${selectedSize?.id === size.id 
//                   ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
//                   : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
//                 }
//                 ${!size.available ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800' : 'hover:scale-105'}
//               `}
//             >
//               {size.name}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VariantSelector;