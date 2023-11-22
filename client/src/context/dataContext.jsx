import React, { createContext, useState } from "react";

const DataContext = createContext();

const ContextProvider = (props) => {
  // States for location, date, price range (min and max), and property type
  const [isFiltered, setisFiltered] = useState(false);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null); // Date format: new Date('yyyy-mm-dd')
  const [inputMinG, setInputMinG] = useState(55);
  const [inputMaxG, setInputMaxG] = useState(100);
  const [propertyType, setPropertyType] = useState("");

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, ContextProvider };
