import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdventureDetailsCard from "./cards/AdventureDetailsCard";
import NewReservationCard from "./cards/NewReservationCard";
import SoldoutCard from "./cards/SoldoutCard";

const AdventureDetails = () => {
  const [records, setRecords] = useState([]);

  const { id } = useParams();

  const getAdventureDetails = async (e) => {
    //e.preventDefault();
    try {
      const response = await axios.get(
        `https://mtrip-dynamic.herokuapp.com/adventures/detail?adventure=${id}`
      );
      //console.log(response);
      setRecords(response.data);
      //console.log(records.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdventureDetails();
  }, []);

  return (
    <div className="mt-5 ">
      <div className="container" style={{ backgroundColor: "#e4e9f2" }}>
        <h4 className="bordered">
          Greetings! Reservation for this adventure is successful. (Click
          <Link className="reservation" to="/reservation">
            {" "}
            here{" "}
          </Link>
          to view your reservations)
        </h4>
      </div>
      <div className="row ms-3 me-3 ">
        <AdventureDetailsCard data={records} />
      </div>
    </div>
  );
};

export default AdventureDetails;
