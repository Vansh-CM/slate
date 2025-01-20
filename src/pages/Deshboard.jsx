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
//     <div classNameName="p-4">
//       <h1 classNameName="text-2xl font-bold mb-4">{bitcoinData.chartName} Prices</h1>
//       <p classNameName="mb-4">Updated: {bitcoinData.time?.updated}</p>
//       <div classNameName="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {Object.entries(bitcoinData.bpi).map(([currency, data]) => (
//           <div key={currency} classNameName="bg-white shadow rounded-lg p-4">
//             <h2 classNameName="text-xl font-semibold mb-2">{data.description}</h2>
//             <p classNameName="text-3xl font-bold">
//               {data.symbol} {parseFloat(data.rate).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//       <p classNameName="mt-4 text-sm text-gray-600">{bitcoinData.disclaimer}</p>
//     </div>
//   );
// };

// export default Deshboard;



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, updateProduct } from '../features/bitcoinSlice'

const Deshboard = () => {
    const dispatch = useDispatch();


 
    const { loading, data, error } = useSelector((state) => state.data);
    const [isPopup , setPopup] = useState(false);
    const [formData, setFormData] = useState({title: "",price: "",description: "" , id : null});

    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(name , value)
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handlePopupYes= async ()=>{
      // updateData()
      setPopup(false)
     }
     const setPopupTrue= ()=>{
      formData.id = 3
       setPopup(true)
     }
  const handleSubmit= async (event)=>{
    event.preventDefault();
    console.log(formData)
    const productData = {
      id: formData.id,  // replace with the actual product ID
      title:formData.title,
      price: fetchData.price,
      description: formData.description,
    };
    await dispatch(updateProduct(productData));
    setPopup(false)
    
  }
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  return  (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img className="object-cover" src={item.image} />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">{item.title}</h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">${item.price}</span>
                  {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                </p>
                <div className="flex items-center">
                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{item.rating.rate}/{item.rating.count}</span>
                </div>
              </div>
              <div onClick={setPopupTrue} >
              <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Update
              </a>
              </div>
            </div>
          </div>
        ))}
        {isPopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 z-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl">Update product</h3>
                         <form onSubmit={handleSubmit}>
                          <div>
                          <label>
                        title
                        </label>
                        <br />

                        <input className=' border' type="text" id='title'  name='title' value={formData.title} onChange={handleChange}/> 
                          </div>
                          <div>
                          <label>
                        price
                        </label>
                        <br />
                        <input className=' border' type="text" id='price' name='price' value={formData.price} onChange={handleChange} />
                          </div>
                          <div>
                          <label>
                        description
                        </label>
                        <br />
                        <textarea className=' border' type="text" id='description' name='description' value={formData.description} onChange={handleChange} />
                          </div>
                        

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="mr-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Update
                            </button>
                          
                        </div>
                        </form>
                    </div>
                </div>
            )}
      </div>
      
    </>
  );
}

export default Deshboard


