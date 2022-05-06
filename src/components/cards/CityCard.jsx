import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const CityCard = ({ data }) => {
  const navigate = useNavigate();

  //console.log(data);

  const getAdventureDetails = (id) => {
    navigate(`/adventuredetails/${id}`);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-10">
      <div
        className="card  mt-3 mb-4"
        key={data.id}
        onClick={() => getAdventureDetails(data.id)}
      >
        <div className="card-body">
          <div className="bg-image hover-zoom">
            <img
              className="w-100"
              src={data.image}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">Duration: {data.duration} Hours</p>
          <p className="card-text">Category: {data.category}</p>
          <p className="card-text">Cost: Rs. {data.costPerHead}/-</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
