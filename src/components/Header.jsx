import React from "react";

export default function Header() {
  return (
    <div
      className="p-4 w-100 d-flex flex-fill justify-content-between "
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <div className="d-flex col-3">
        <span></span>Rick & Morty
        <span className="text-info px-1">Wiki</span>
      </div>
      <div className="d-flex col-2 text-muted justify-content-around font-size-bold">
        <span>Characters</span>
        <span>Episod</span>
        <span>Location</span>
      </div>
    </div>
  );
}
