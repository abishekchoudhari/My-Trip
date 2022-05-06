import React from "react";

const SoldoutCard = () => {
  return (
    <div className="card  mt-3 mb-4">
      <div className="card-body">
        <h3 className="card-title">Sold Out!</h3>
        <p className="card-text">
          This activity is currently sold out. But there's a lot more to
          <a className="home" href="/" style={{ color: "orange" }}>
            explore
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SoldoutCard;
