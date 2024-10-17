// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchBitcoinPrice, selectBitcoinPrice, selectBitcoinPriceStatus, selectBitcoinPriceError } from '../features/bitcoinSlice';
//  import {getData} from '../features/bitcoinSlice'
// const Deshboard = () => {
//   const dispatch = useDispatch();
//   const bitcoinData = useSelector(getData);
// //   const status = useSelector(selectBitcoinPriceStatus);
// //   const error = useSelector(selectBitcoinPriceError);

//   useEffect(() => {
//     console.log("Fetching Bitcoin Price...");
//    let data = dispatch(getData());
//    console.log(data);
   
//   }, [dispatch]);

// //   console.log("Data state:", bitcoinData, status, error);

// //   if (status === 'loading') return <div>Loading...</div>;
// //   if (status === 'failed') return <div>Error: {error}</div>;
// //   if (status !== 'succeeded') return null;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">{bitcoinData.chartName} Prices</h1>
//       <p className="mb-4">Updated: {bitcoinData.time?.updated}</p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {Object.entries(bitcoinData.bpi).map(([currency, data]) => (
//           <div key={currency} className="bg-white shadow rounded-lg p-4">
//             <h2 className="text-xl font-semibold mb-2">{data.description}</h2>
//             <p className="text-3xl font-bold">
//               {data.symbol} {parseFloat(data.rate).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//       <p className="mt-4 text-sm text-gray-600">{bitcoinData.disclaimer}</p>
//     </div>
//   );
// };

// export default Deshboard;



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/bitcoinSlice'
const Deshboard = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.data);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  return (
    <>
    <div>{JSON.stringify(data)}</div>

    <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default Deshboard


