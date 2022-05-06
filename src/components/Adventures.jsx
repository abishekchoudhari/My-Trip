import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CityCard from "./cards/CityCard";

const Adventures = () => {
  const { id } = useParams();

  const [citydata, setCitydata] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);
  const [duration, setDuration] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getAdventures();
  }, []);

  const getAdventures = async (e) => {
    //e.preventDefault();
    try {
      const response = await axios.get(
        `https://mtrip-dynamic.herokuapp.com/adventures?city=${id}`
      );
      //console.log(response.data);
      setCitydata(response.data);
      setFilteredCity(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(duration);
    getFilterDuration();
  }, [duration]);

  const getFilterDuration = () => {
    // const updatedDuration = citydata.filter((record) => {
    //   console.log(duration.length);
    //   for (let i = duration[0]; i <= duration.length; i++) {
    //     return record.duration.match(duration[i]);
    //   }
    // });
    let newCategorys = category;
    let newDuration = duration;
    if (category.length === 0)
      newCategorys = ["Party", "Cycling", "Hillside", "Beaches"];
    if (duration.length === 0) newDuration = [12, 13, 14, 16];
    console.log("newCategorys", newCategorys);
    const joinedDuration = newDuration.join().split(",");
    const upperValue = joinedDuration.pop();
    const lowerValue = joinedDuration.shift();
    // const responseData = adventuresDataCopy
    const filteredData = citydata.filter((obj) => {
      const { category, duration } = obj;
      if (
        duration <= upperValue &&
        duration >= lowerValue &&
        newCategorys.includes(category)
      )
        return true;
      else return false;
    });

    // const updatedDuration = duration.map((time) => {
    //   let data;
    //   if (!category.length) data = citydata;
    //   else data = filteredCity;
    //   return data.filter((obj) => obj.duration == time).pop();
    // });
    // console.log(updatedDuration);

    setFilteredCity(filteredData);
  };

  useEffect(() => {
    //console.log(category);
    getFilterCategory();
  }, [category]);

  const getFilterCategory = () => {
    const updatedCategory = citydata.filter((record) => {
      return record.category.toLowerCase().match(category.toLowerCase());
    });
    setFilteredCity(updatedCategory);
  };

  return (
    <div className=" mt-5" style={{ backgroundColor: "#e4ebf7" }}>
      <h1>Explore all adventures</h1>
      <h3>Here's a list of places that you can explore in city</h3>

      <div className="table">
        <div className="row ms-3">
          <tr>
            <td>filters:</td>
            <td>
              <select
                className="form-control"
                value={duration}
                onChange={(e) => setDuration(e.target.value.split(","))}
              >
                <option value="" disabled>
                  Filter by Duration(Hours)
                </option>
                <option value={[0, 1, 2]}>0-2 Hours</option>
                <option value={[2, 3, 4, 6]}>2-6 Hours</option>
                <option value={[6, 7, 8, 9, 10, 11, 12]}>6-12 Hours</option>
                <option value={[12]}>12+ Hours</option>
              </select>
            </td>
            <td>
              <a style={{ color: "blue" }} onClick={() => setDuration("")}>
                clear
              </a>
            </td>
            <td>
              <select
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>
                  Add Category
                </option>
                <option value="Cycling">Cycling Routes</option>
                <option value="Hillside">Hillside Getaways</option>
                <option value="Serene">Serene Beaches</option>
                <option value="Party">Party Sports</option>
              </select>
            </td>
            <td>
              <a style={{ color: "blue" }} onClick={() => setCategory("")}>
                clear
              </a>
            </td>
          </tr>
        </div>
      </div>
      <div className="row ms-3 me-3">
        {filteredCity.map((record) => (
          <CityCard data={record} key={record.id} />
        ))}
      </div>
    </div>
  );
};

export default Adventures;
