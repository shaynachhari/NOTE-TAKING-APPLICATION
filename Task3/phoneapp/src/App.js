import React, { useState } from "react";
import PhoneInput from "./components/PhoneInput";
import HeaderDisplay from "./components/HeaderDisplay";

const App = () => {
  const [headers, setHeaders] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleApiResponse = (headers, error = "") => {
    console.log("headers from function: ", headers);

    setHeaders(headers ? headers : null);
    setErrorMessage(error);
  };

  return (
    <div>
      <h1>API Header data</h1>
      <PhoneInput onSubmit={handleApiResponse} />
       <HeaderDisplay headers={headers} errorMessage={errorMessage} />
    </div>
  );
};

export default App;
