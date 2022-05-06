import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewReservationCard = ({ record }) => {
  //console.log(record);

  const navigate = useNavigate()

  const [fname, setFname] = useState("");
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState("");
  const [total, setTotal] = useState(0);

  const reserveBooking = async (e) => {
    e.preventDefault();
    try {
      const newResponse = await axios.post(
        "https://mtrip-dynamic.herokuapp.com/reservations/new",
        { name: fname, date: date, person: persons, adventure: record.id }
      );
      // response.status.success && alert("Thanks for booking");
      if(newResponse.data.success){
        alert("Thanks for booking")
        navigate('/reservation')
      }
      console.log(newResponse);
      setFname("");
      setDate("");
      setPersons("");
      setTotal(0);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalAmount = () => {
    let amt = persons * record.costPerHead;
    setTotal(amt);
  };

  useEffect(() => {
    getTotalAmount();
  }, [persons]);

  return (
    <div className="container mb-5 ">
      <div id="reservation-panel-available" style={{ display: "block" }}>
        <form id="myForm" onSubmit={reserveBooking}>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={fname}
            required={true}
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <label>Pick a Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            required={true}
            onChange={(e) => setDate(e.target.value)}
          />
          <hr />
          <h6 className="m-0">Person(s)</h6>
          <div className=" d-flex align-items-center justify-content-between">
            <div>
              <p
                className="m-0"
                style={{ fontSize: "16px", color: "#999" }}
              ></p>
              <div className="d-inline">₹</div>
              <div className="d-inline" id="reservation-person-cost">
                {record.costPerHead}
              </div>{" "}
              per head
              <p></p>
            </div>
            <div>
              <input
                type="number"
                className="form-control"
                min={1}
                max={10}
                value={persons}
                required={true}
                style={{ width: "100px" }}
                onChange={(e) => setPersons(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6 className="m-0">Total</h6>
            </div>
            <div>
              <h5>
                ₹
                <div className="d-inline" id="reservation-cost">
                  {total}
                </div>
              </h5>
            </div>
          </div>
          <button className="reserve-button" type="submit" style={{backgroundColor:"rgb(255 145 0)"}}>
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewReservationCard;
