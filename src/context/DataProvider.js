'use client';

import React, { useEffect, useState } from 'react';
import { DataContext } from './DataContext';

const DataProvider = ({ children }) => {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://my-api-usa.com/api/newsarticle.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.log(error.message, "this is error");
      }
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={apiData}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;