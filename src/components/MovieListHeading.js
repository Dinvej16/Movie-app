import React from "react";

const MovieListHeading = (props) => {
  return (
    <div className="col d-flex p-2 ">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;