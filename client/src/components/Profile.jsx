import { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard"; // Replace this with your property component
import Navbar from "./Navbar";
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const UserProfile = () => {
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [_id, setId] = useState("");
  const [number, setNumber] = useState(" ");
  const [showProperties, setShowProperties] = useState(false);
 
  const [properties, setProperties] = useState([])
  const navigation = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigation("/404");
    }
  }, []);

  const fetchUserData = () => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        setEmail(decodedToken.email);
        setName(decodedToken.name);
        setId(decodedToken._id);
        setNumber(decodedToken.number);

      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    } else {
      console.error("Token not found in local storage");
      return null;
    }
  };
  useEffect(()=>{
    fetchUserData();
  },[])

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem("token")
        const id = _id;
        const response = await fetch(
          `${process.env.REACT_APP_URL}/property/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
               Authorization: `Bearer ${token}` 
            },
          }
        );
        
      console.log(response)        

        if (response.ok) {
          const result = await response.json();
          setProperties(result)
          console.log("Properties:", result);
        } else {
          console.error("Failed to fetch properties:", response.status);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, [showProperties]);

  // If token doesn't exist, redirect to 404 page
 

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        {/* User Icon */}
        <div className="flex justify-center mb-4">
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </div>

        {/* User Details */}
        <div className="mb-4">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-gray-600">{email}</p>
          <p className="text-gray-600">{number}</p>
        </div>

        {/* Toggle Properties */}
        <div className="flex justify-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => setShowProperties(!showProperties)}
          >
            {showProperties ? "Hide Properties" : "Show Properties"}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-60"> {/* Increased gap value */}
          {/* Map properties into PropertyCard components */}
          {showProperties &&
            properties.map((property, index) => (
              <PropertyCard key={index} property={property}></PropertyCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
