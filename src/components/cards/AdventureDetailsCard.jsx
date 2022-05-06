import React from "react";
import NewReservationCard from "./NewReservationCard";
import SoldoutCard from "./SoldoutCard";

const AdventureDetailsCard = ({ data }) => {

  return (
    <>
    <div className="col-lg-8 col-md-6 col-sm-10 ">
      <div className="card  mt-3 mb-4" key={data.id}>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.subtitle}</p>
          <div className="bg-image hover-zoom">
            <img
              className="w-100"
              src={data.images}
              alt=""
              style={{ width: "100%" }}
            />
          </div>

          <h1>About the Experience</h1>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-10">
      {(data.available) ? <NewReservationCard record={data}/>: <SoldoutCard />}
   
  </div>
  </>
  );
};
export default AdventureDetailsCard;
