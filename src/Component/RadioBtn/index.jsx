// RadioList component
export const RadioList = ({ items, onItemChange }) => {
  return (
    <>
      <div className="my-6 text-base">
        <h1 className="text-xl">
          <b> Men's Haircut </b>
        </h1>

        {items.map((item) => (
          <div key={item.id}>
            <span className="flex justify-between mr-8">
              <p className="mt-4 text-base">Men's Haircut</p>
              <span className="flex space-x-4 mt-5">
                <p>
                  <b>$ {item.price}</b>
                </p>
                <input
                  type="radio"
                  name="radioGroup"
                  checked={item.selected}
                  onChange={() => onItemChange(item.id)}
                />
              </span>
            </span>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};
