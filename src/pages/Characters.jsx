import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import "./Characters.css";
const Characters = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await axios.get(`https://rickandmortyapi.com/api/character`);
    setData(data.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Characters w-100 d-flex justify-content-center">
      <div className="d-flex flex-column w-100 align-items-center font-size-bold text-dark">
        <h1 className="d-flex py-4">Characters</h1>
        <div className="d-flex col-5 py-3 pb-5">
          <input
            type="search"
            className="d-flex flex-fill px-2 py-1 border border-dark rounded"
            placeholder="search for Characters"
          />
          <Button />
        </div>
        {/*  scrollCard */}
        <div className="disGrid d-grid col-10 rounded p-4">
          {data.map((item, id) => {
            return (
              <div
                className="card border border-primary"
                key={id}
                style={{ backgroundColor: "#F0EBE3", width: "20rem" }}
              >
                <img
                  className="card-img-top position-relative"
                  src={item.image}
                  alt="pic"
                />
                <span
                  className={`position-absolute m-1  btn text-white btn-${
                    item.status === "Alive"
                      ? "success"
                      : item.status === "Dead"
                      ? "danger"
                      : "dark"
                  }`}
                  style={{ right: "0" }}
                >
                  {item.status}
                </span>
                <div className="card-body">
                  <span className="card-title d-flex flex-nowrap h4">
                    {item.name}
                  </span>
                  <span className="d-flex flex-column">
                    Last location :
                    <span className="d-flex h6"> {item.location.name}</span>
                  </span>
                  {/* {console.log("item.Location ===>", item.location)} */}
                  {/* {console.log("llllllllll", data)} */}
                  {/* <span>{item.species}</span> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Characters;
