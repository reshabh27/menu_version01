import React from "react";


export const MenuItem = ({ food }) => {
  // console.log(food);
  return (
    <div className="grid-item">
      <img
        src={food.img}
        alt="food"
        style={{ height: "150px", width: "230px" }}
      />
      <div>
        <div className="foodTitles">
          <b>{food.title}</b>
          <p>$ {food.price}</p>
        </div>
        <p>{food.desc}</p>
      </div>
    </div>
  );
};

