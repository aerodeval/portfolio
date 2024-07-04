import { render } from "@testing-library/react";
import { useState,useEffect } from 'react';

export default function Test(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://reqres.in/api/users?page=2');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;
  
    return (
      <div>
        <h1>{data.data.map(uten =>(<p>{uten.first_name}</p>))}</h1>
      </div>
    );
  }

