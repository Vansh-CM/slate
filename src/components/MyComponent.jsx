// MyComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/bitcoinSlice'

const MyComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        
        {/* <p>
            {data.time.updated}
        </p> */}
        <p>
            {data.disclaimer}
        </p>
        <p>
            {JSON.stringify(data)}
        </p>
     
        {/* 
        <p>
            {data.EUR.rate_float}
        </p>
         */}
        
      </ul>
    </div>
  );
};

export default MyComponent;
