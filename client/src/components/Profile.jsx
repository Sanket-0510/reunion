import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard'; // Replace this with your property component
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'
const UserProfile = () => {
const navigation = useNavigate()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    number: '',
    properties: [] // Assuming properties are an array of property objects
  });
  const [showProperties, setShowProperties] = useState(false);
  const [tokenExists, setTokenExists] = useState(false);

  // Check if token exists in localStorage on initial render
  useEffect(() => {
    const token = localStorage.getItem('token');
    setTokenExists(!!token); // Set tokenExists to true if token exists
  }, []);

  // Mock user data (Replace this with actual user data retrieval logic)
  useEffect(() => {
    // Simulated data fetching
    const fetchUserData = async () => {
      // Simulated user data
      const mockUserData = {
        name: 'John Doe',
        email: 'john@example.com',
        number: '+1234567890',
        properties: [
          { propertyName: 'Luxury Villa', rentPerMonth: 5000, /* Other property details */ },
          { propertyName: 'Cozy Apartment', rentPerMonth: 3000, /* Other property details */ },
          // Add more properties if needed
        ]
      };
      setUserData(mockUserData);
    };

    fetchUserData();
  }, []);

  // If token doesn't exist, redirect to 404 page
  if (!tokenExists) {
    return navigation("/404")
  }

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        {/* User Icon */}
        <div className="flex justify-center mb-4">usericon</div>

        {/* User Details */}
        <div className="mb-4">
          <p className="text-lg font-semibold">{userData.name}</p>
          <p className="text-gray-600">{userData.email}</p>
          <p className="text-gray-600">{userData.number}</p>
        </div>

        {/* Toggle Properties */}
        <div className="flex justify-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => setShowProperties(!showProperties)}
          >
            {showProperties ? 'Hide Properties' : 'Show Properties'}
          </button>
        </div>

        {/* Properties Component */}
        {showProperties && <PropertyCard properties={userData.properties} />}
      </div>
    </>
  );
};

export default UserProfile;
