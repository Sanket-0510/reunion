
import React, { useState, useEffect } from 'react';

const PropertyCard = (props) => {
  const [user, setUser] = useState({});

  const fetchRealtor = async () => {
    try {
      const result = await fetch(`${process.env.REACT_APP_URL}/get-userDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: props.property.user
        })
      });

      if (result.ok) {
        const data = await result.json();
        setUser(data);
        console.log(data);
      } else {
        throw new Error('Failed to fetch user details');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRealtor();
  
  }, [props.property.user]); 

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
              <div className="flex justify-end">
                <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{props.property.propertyName}</p>
              <p className="text-3xl text-gray-900">&#8377; {props.property.rentPerMonth}</p>
              <p className="text-gray-700">{props.property.location}</p>
            </div>
            <div className="flex p-4 border-t border-gray-300 text-gray-700">
              <div className="flex-1 inline-flex items-center">
                <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                </svg>
                <p><span className="text-gray-900 font-bold">{props.property.numberOfBedrooms}</span> Bedrooms</p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                </svg>
                <p><span className="text-gray-900 font-bold">{props.property.bathrooms}</span>Bathrooms</p>
              </div>
            </div>
            <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
              <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">{user.name}</div>
              <div className="flex items-center pt-2">
                <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: 'url(https://via.placeholder.com/50x50)' }}>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-700">{user.number}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
