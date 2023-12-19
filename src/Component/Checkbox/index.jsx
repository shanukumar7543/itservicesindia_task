import React from "react";

// CheckboxList component
export const CheckboxList = ({ items, onItemChange }) => {
  return (
    <div className="my-6 space-y-4 text-base">
      <h1>
        <b className="text-xl">Select Style</b>
      </h1>

      {items.map((item) => (
        <div className="flex mr-8 justify-between" key={item.id}>
          <div className="flex">
            <div className="  h-10 w-10"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMUCkNMjbRhIoGPMa_wQWL8E_Qr8Did0Zsg6_3j1QtpsDvf_HSvWWcse6Fw&s" alt=" NOT AVILABLE" ></img></div>
            <p> {item.label}</p>
          </div>

          <div className="flex space-x-3 items-baseline">
            <p>
              <b>$ {item.price}</b>
            </p>
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => onItemChange(item.id, !item.selected)}
            />
          </div>
        </div>
      ))}
      <hr />
      <div className="mt-4">
        <hr />
      </div>
    </div>
  );
};
