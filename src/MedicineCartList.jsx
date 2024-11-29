import React from "react";
import MedicineCart from "./MedicineCart";

function MedicineCartList({ medicines }) {
  return (
    <div>
      {medicines.length > 0 ? (
        medicines.map((item) => {
          return <MedicineCart key={item.id} {...item} />;
        })
      ) : (
        <p className="text-gray-500">No medicines found</p>
      )}
    </div>
  );
}

export default MedicineCartList;
