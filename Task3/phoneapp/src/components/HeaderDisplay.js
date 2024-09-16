import React from "react";

const HeaderDisplay = ({ headers, errorMessage }) => {
  if (errorMessage) {
    return <p style={{ color: "red" }}>{errorMessage}</p>;
  }
  if (!headers) {
    return ;
  }

  const headerString = Object.entries(headers)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  return (
    <div>
      <h2>Received Headers</h2>
      <pre>{headerString}</pre>
    </div>
  );
};

export default HeaderDisplay;
