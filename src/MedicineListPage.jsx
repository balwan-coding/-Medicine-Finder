import React, { useState } from "react";
import MedicineCartList from "./MedicineCartList";
import { medicines } from "./api";

function MedicineListPage() {
  const [query, setQuary] = useState("");

  const handleQuaryChange = (event) => {
    setQuary(event.target.value);
  };

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen">
      <input
        value={query}
        onChange={handleQuaryChange}
        className="w-3/4 p-2 m-2 border border-black rounded"
        type="text"
        placeholder="search medicine"
      />
      <MedicineCartList medicines={filteredMedicines} />
    </div>
  );
}

export default MedicineListPage;
