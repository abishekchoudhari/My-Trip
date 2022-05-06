import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const Reservation = () => {
  const [reservationData, setReservationData] = useState([]);
  let i = 0;
  const navigate = useNavigate();

  const getReservationData = async (e) => {
    //e.preventDefault();
    try {
      const record = await axios.get(
        "https://mtrip-dynamic.herokuapp.com/reservations/"
      );
      console.log(record.data);
      setReservationData(record.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservationData();
  }, []);

  const getAdventureDetails = (id) => {
    navigate(`/adventuredetails/${id}`);
  };

  return (
    <div
      className=" mt-5 bg-light"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/564x/e5/15/5f/e5155fde000d8088b153efb626fa71ce.jpg')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h1
          style={{
            marginBottom: "2%",
            fontWeight: "bold",
            fontSize: "50px",
            paddingTop: "3%",
          }}
        >
          Your Reservations
        </h1>
        <div className="row">
          <div className="col-md-8" style={{ width: "100%" }}>
            <table className="table table-striped table-hover table-bordered bg-white rounded border">
              <thead>
                <tr className="bg-dark shadow-1-strong text-light text-center">
                  <th>Sl. No.</th>
                  <th>Transaction ID</th>
                  <th>Booking Name</th>
                  <th>Adventure</th>
                  <th>Person(s)</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Booking Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {reservationData.map(
                  ({
                    id,
                    name,
                    adventure,
                    adventureName,
                    person,
                    date,
                    price,
                    time,
                  }) => (
                    <tr key={id}>
                      <th>{(i += 1)}</th>
                      <th>{id}</th>
                      <th>{name}</th>
                      <th>{adventureName}</th>
                      <th>{person}</th>
                      <th>{date}</th>
                      <th>{price}</th>
                      <th>{moment(time).format("HH:mm")}</th>
                      <th>
                        <button
                          className="btn btn-primary rounded"
                          onClick={() => getAdventureDetails(adventure)}
                        >
                          Visit
                        </button>
                      </th>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
