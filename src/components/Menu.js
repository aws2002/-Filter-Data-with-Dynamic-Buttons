import React from "react";

export default function Menu({ menuItem }) {
  return (
    <div className=" container mt-20">
      <div className=" grid grid-cols-4">
        {menuItem.map((item) => (
          <div key={item.id} className=" col-span-1">
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
