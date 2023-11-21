import React from 'react';
import { RangeSlider } from 'flowbite-react';
import Test from './Test'
const Filter = () => {
  return (
    <div className="flex p-4 border rounded-md shadow-md justify-around font-serif text-black-600 font-bold focus:outline-none">
      <div className="flex flex-col mr-4 text-black-600">
        <label htmlFor="location" className="font-medium mb-1">Select Location</label>
        <select id="location" className="border rounded-md p-2">
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
        </select>
      </div>

      <div className="flex flex-col mr-4">
        <label htmlFor="availableDate" className="font-medium mb-1">Available From</label>
        <input
          type="date"
          id="availableDate"
          className="border rounded-md p-2"
        />
      </div>

      <div className="flex flex-col mr-4">
        <label htmlFor="priceRange" className="font-medium mb-1">Price Range</label>
         <Test></Test>
      </div>

      <div className="flex flex-col text-black-600">
        <label htmlFor="propertyType" className="font-medium mb-1">Property Type</label>
        <select id="propertyType" className="border rounded-md p-2">
          <option value="apartment">Apartment</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-24 h-10">
        Apply
      </button>
    </div>
  );
};

export default Filter;
