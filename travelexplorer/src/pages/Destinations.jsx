import { useEffect, useState } from "react";
import api from "../services/api";
import DestinationCard from "../components/DestinationCard";
import { Link } from "react-router-dom";
function Destinations() {
 const [destinations, setDestinations] =
   useState([]);

 useEffect(() => {
   getDestinations();
 }, []);

 async function getDestinations() {
   try {
     const response = await api.get(
       "/destinations"
     );

     setDestinations(response.data);
   } catch (error) {
     console.log(error);
   }
 }

 async function deleteDestination(id) {

 await api.delete(
   `/destinations/${id}`
 );

 setDestinations(
   destinations.filter(
     destination =>
     destination.id !== id
   )
 );
}
 return (
   <>
     <h1>Popular Destinations</h1>
     <Link to="/add-destination">
      Add Destination
     </Link>


     <div className="destinations">
       {destinations.map((destination) => (
         <DestinationCard
         onDelete={deleteDestination}
           key={destination.id}
           destination={destination}
         />
       ))}
     </div>
   </>
 );
}

export default Destinations;