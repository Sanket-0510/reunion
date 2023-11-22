import React from "react";
import Test from "./Test";
import { useContext } from "react";
import { DataContext } from "../context/dataContext";
const Filter = () => {
  const { isFiltered, setisFiltered, setLocation, setDate, setPropertyType } =
    useContext(DataContext);

  return (
    <div>
      <div className="flex p-4 border rounded-md shadow-md justify-around font-serif text-black-600 font-bold focus:outline-none">
        <div className="flex flex-col mr-4 text-black-600">
          <label htmlFor="location" className="font-medium mb-1">
            Select Location
          </label>
          <select
            id="location"
            className="border rounded-md p-2"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="Andheri">Andheri</option>
            <option value="Bhandup">Bhandup</option>
            <option value="Virar">Virar</option>
            <option value="Kurla">Kurla</option>
            <option value="Kalyan">Kalyan</option>
            <option value="Thane">Thane</option>
          </select>
        </div>

        <div className="flex flex-col mr-4">
          <label htmlFor="availableDate" className="font-medium mb-1">
            Available From
          </label>
          <input
            type="date"
            id="availableDate"
            className="border rounded-md p-2"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col mr-4">
          <label htmlFor="priceRange" className="font-medium mb-1">
            Price Range
          </label>
          <Test></Test>
        </div>

        <div className="flex flex-col text-black-600">
          <label htmlFor="propertyType" className="font-medium mb-1">
            Property Type
          </label>
          <select
            id="propertyType"
            className="border rounded-md p-2"
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="apartment">residential</option>
            <option value="commercial">Commercial</option>
            <option value="commercial">Appartment</option>
          </select>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-24 h-10"
          onClick={() =>{ setisFiltered(true)
             console.log(isFiltered)
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
