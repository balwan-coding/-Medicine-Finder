import React from "react";
import { Link } from "react-router-dom";

function MedicineCart({ image, title, details, price, id }) {
  return (
    <div className="flex items-center justify-center gap-2 p-3 m-3 shadow-2xl hover:translate-y-3 rounded-3xl bg-slate-100 h-36 w-96 ">
      <img className="h-20 rounded-lg" src={image} alt={title} />
      <div className="m-1">
        <h1 className="text-blue-700">{title}</h1>
        <p className="text-red-500">{details}</p>
      </div>
      <p>{price}</p>
      <Link
        to={"/MedicineDeatailCart/" + id}
        className="p-1 m-1 bg-green-400 rounded-md hover:bg-green-600 "
      >
        View
      </Link>
    </div>
  );
}

export default MedicineCart;
