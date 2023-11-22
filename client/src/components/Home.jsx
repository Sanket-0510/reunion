import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import PropertyCard from "./PropertyCard";
import { DataContext } from "../context/dataContext";

const Home = () => {
  const {
    isFiltered,
    setisFiltered,
    location,
    setLocation,
    date,
    setDate,
    inputMinG,
    setInputMinG,
    inputMaxG,
    setInputMaxG,
    propertyType,
    setPropertyType,
  } = useContext(DataContext);
  const temp = useContext(DataContext)
  const [properties, setProperties] = useState([]);

  useEffect(()=>{
    console.log(temp)
  },[isFiltered])

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/property/list-properties",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(isFiltered)
      if (isFiltered) {
        const filteredData = data.filter((property) => {
          const milisecDate = new Date(property.date).getTime();
          const dateMili = new Date(date).getTime();
          return (
            property.location === location &&
            milisecDate <= dateMili &&
            property.rentPerMonth >= inputMinG &&
            property.rentPerMonth <= inputMaxG &&
            property.type === propertyType
          );
        });
        console.log(data)
        console.log(filteredData)
        setProperties(filteredData);
      } else {
        setProperties(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [isFiltered]);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Navbar />
      <div className="flex-1 flex flex-col ml-20">
        <h1 className="text-black-600 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-serif mb-8">
          Search Properties For Rent  
        </h1>
        <Filter />
      </div>
      <div className="flex justify-center ml-20">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
