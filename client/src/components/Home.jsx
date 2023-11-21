import React from 'react';
import Navbar from './Navbar';
import Filter from './Filter';
import PropertyCard from './PropertyCard';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Navbar />
      <div className="flex-1 flex flex-col ml-20">
        <h1 className="text-black-600 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-serif mb-8">
          Search Properties For Rent
        </h1>
        <Filter />
      </div>
      <div  className='flex justify-center ml-20'>
       <PropertyCard>
       </PropertyCard>
       <PropertyCard>
       </PropertyCard>
       <PropertyCard/>
       <PropertyCard/>
      </div>
      <div  className='flex justify-center ml-20'>
       <PropertyCard>
       </PropertyCard>
       <PropertyCard>
       </PropertyCard>
       <PropertyCard>
       </PropertyCard>
       <PropertyCard/>
      </div>
      <div  className='flex justify-center ml-20'>
       <PropertyCard>
       </PropertyCard>
       <PropertyCard>
       </PropertyCard>
       <PropertyCard>
       </PropertyCard><PropertyCard/>

      </div>
    </div>
  );
};

export default Home;
