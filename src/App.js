import { useState } from "react";
import { CheckboxList } from "./Component/Checkbox";
import { RadioList } from "./Component/RadioBtn";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
const App = () => {
  const [addQuantity, setAddQuantity] = useState(1);

  const [products, setProducts] = useState([
    {
      type: "radioButton",
      data: [{ id: 1, label: "Radio 1", price: 40 }],
    },
    {
      type: "checkBox",
      data: [
        { id: 1, label: "Beard Trim", selected: false, price: 32 },
        { id: 2, label: "Head Shave", selected: false, price: 40 },
        { id: 3, label: "Deluxe Cut", selected: false, price: 80 },
      ],
    },
  ]);

  const [selectedRadio, setSelectedRadio] = useState(null);

  const RemoveItems = () => {
    if (addQuantity > 1) {
      setAddQuantity(addQuantity - 1);
    }
  };

  const handleCheckboxChange = (itemId, selected) => {
    const checkBoxItems = products.find(
      (element) => element.type === "checkBox"
    ).data;
    const updatedItems = checkBoxItems.map((item) =>
      item.id === itemId ? { ...item, selected } : item
    );
    setProducts((preval) => {
      return preval.map((ele) => {
        if (ele.type === "checkBox") {
          return { ...ele, data: updatedItems };
        } else {
          return ele;
        }
      });
    });
  };

  const handleRadioChange = (itemId) => {
    setSelectedRadio(itemId);
  };

  const calculateTotal = () => {
    const checkBoxItems = products.find(
      (element) => element.type === "checkBox"
    ).data;
    const radioBoxItems = products.find(
      (element) => element.type === "radioButton"
    ).data;
    const selectedCheckboxItems = checkBoxItems.filter((item) => item.selected);
    const selectedRadioItem = radioBoxItems.find(
      (item) => item.id === selectedRadio
    );

    const total =
      selectedCheckboxItems.reduce((acc, item) => acc + item.price, 0) +
      (selectedRadioItem ? selectedRadioItem.price : 0);
    // TODO:
    return total * addQuantity;
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="h-full w-[500px]  p-5 shadow-2xl  shadow-black ">
        <div className="mb-5">
          <h1 className="flex justify-between">
            <b className="text-xl"> Customize "Men's Haircut" </b>
            <p>
              {" "}
              <CloseIcon />
            </p>
          </h1>
          <p className="mt-4 text-base"> &#x20B9;140 - &#x20B9;1250</p>
        </div>
        <hr />
        {products.map((element) => {
          return element.type === "checkBox" ? (
            <CheckboxList
              items={element.data}
              onItemChange={handleCheckboxChange}
            />
          ) : element.type === "radioButton" ? (
            <RadioList items={element.data} onItemChange={handleRadioChange} />
          ) : null;
        })}

        <div className="flex justify-between ">
          <div className="h-10 space-x-2 w-20 mt-7 pt-1.5 border-2 bg-white border-black rounded-lg text-black flex justify-center font-bold ">
            <RemoveIcon
              onClick={() => {
                RemoveItems();
              }}
            />
            <h1> {addQuantity} </h1>
            <AddIcon
              onClick={() => {
                setAddQuantity(addQuantity + 1);
              }}
            />
          </div>
          <div className="w-36   h-10 rounded-lg flex justify-center items-center float-right m-8 bg-black text-white">
            <h2>Add $ {calculateTotal()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
