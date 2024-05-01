import React, { useEffect } from "react";

const ApiCaller = ({ setData, setLoading }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://www.test.readychatai.coM/data");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
        console.log(jsonData);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setData, setLoading]);

  return null; // No renderiza nada en el DOM
};

export default ApiCaller;
