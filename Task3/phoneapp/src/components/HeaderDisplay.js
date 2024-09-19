import React from "react";

const HeaderDisplay = ({ headers, errorMessage }) => {
  if (errorMessage) {
    return <p style={{ color: "red" }}>{errorMessage}</p>;
  }
  if (!headers) {
    return null; 
  }

  const {
    "content-length": contentLength,
    "content-type": contentType,
    phoneorigen
  } = headers;

  return (
    <div>
      <h2>Received Headers</h2>
      <pre>
        {`Content-Length: ${contentLength || "Not provided"}
Content-Type: ${contentType || "Not provided"}
PhoneOrigin: ${phoneorigen || "Not provided"}
`}
      </pre>
    </div>
  );
};

export default HeaderDisplay;
