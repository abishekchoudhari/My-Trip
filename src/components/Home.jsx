import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./cards/PhotoCard";
import Navbar from "./Navbar";

const Home = () => {
  const [records, setRecords] = useState([]);
  const [filteredrecords, setFilteredrecords] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async (e) => {
    //e.preventDefault();
    try {
      const response = await axios.get(
        "https://mtrip-dynamic.herokuapp.com/cities"
      );
      console.log(response);
      setRecords(response.data);
      setFilteredrecords(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUpdatedData = () => {
    const updatedRecords = records.filter((record) => {
      console.log(record.city);
      return record.city.toLowerCase().match(search.toLowerCase());
    });
    setFilteredrecords(updatedRecords);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getUpdatedData();
  }, [search]);

  return (
    <div className="mt-5">
    

      <div className="justify-content-center align-items-center text-center ">
        <div
          className="justify-content-center align-items-center textalign-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/w5tyj7axkmo24e6c0txq')",
            height: "50vh",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 style={{ color: "royalblue" }}> welcome to Trip</h1>
          <p style={{ color: "royalblue" }}>
            JOBS FILL YOUR POCKETS, BUT ADVENTURES FILL YOUR SOUL.
          </p>
          <input
            className="rounded mb-2 border-dark"
            type="text"
            placeholder="Search by destination"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ height: "7vh", width: "30%" }}
          />
        </div>
      </div>
      <div className="row ms-3 me-3">
        {filteredrecords.map((record) => (
          <PhotoCard data={record} key={record.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
