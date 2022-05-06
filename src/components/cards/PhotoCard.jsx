import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const PhotoCard = ({ data }) => {

  const navigate = useNavigate();

  //console.log(data.id)

  
  const getAdventureDetails = (id) => {
 navigate(`/adventures/${id}`)
  }
  
  
  return (
    <div className="col-lg-4 col-md-6 col-sm-10">
      <div className="card  mt-3 mb-4" key={data.id} onClick={() => getAdventureDetails(data.id)}>
        <div className="card-body" >
          <div className="bg-image hover-zoom">
            <img
              className="w-100"
              src={data.image}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <h5 className="card-title">{data.city}</h5>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
