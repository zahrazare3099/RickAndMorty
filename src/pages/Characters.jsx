import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
const Characters = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await axios.get(`https://rickandmortyapi.com/api/character`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="d-flex flex-column w-100 align-items-center font-size-bold text-dark">
        <h1 className="d-flex py-4">Characters</h1>
        <div className="d-flex col-5 py-3">
          <input
            type="search"
            className="d-flex flex-fill px-2 py-1 border border-dark rounded"
            placeholder="search for Characters"
          />
          <Button />
        </div>
        <div className="bg- p-3">
          {/* {console.log("data", data.data.results)} */}
          {/* {data.map((item, id) => {
            <div className="bg-info p-1" id={id}>
              <span>{item.name}</span>
              <span>{item.gender}</span>
              <span>{item.statuse}</span>
              <span>{item.species}</span>
              <span>{item.image}</span>
            </div>;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Characters;
