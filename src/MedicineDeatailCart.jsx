import React from "react";
import { Link, useParams } from "react-router-dom";
import { medicines } from "./api";

const MedicineDeatailCart = () => {
  const { id } = useParams();
  const medicine = medicines.find((med) => med.id === parseInt(id));

  if (!medicine) {
    return <p>Medicine not found!</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <Link className="p-1 m-3 text-white bg-indigo-700 rounded" to="/">
          Back
        </Link>
        <div className="flex items-center justify-center gap-2 p-3 shadow-2xl md:m-3 sm:m-3 hover:translate-y-3 rounded-3xl bg-slate-100 h-36 w-96 ">
          <img
            className="h-20 rounded-lg"
            src={medicine.image}
            alt={medicine.title}
          />
          <div className="m-1">
            <h1 className="text-blue-700">{medicine.title}</h1>
            <p className="text-red-500">{medicine.details}</p>
          </div>
          <div>
            <p>{medicine.price}</p>
            <p className="text-red-800">Stock {medicine.stock}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicineDeatailCart;
