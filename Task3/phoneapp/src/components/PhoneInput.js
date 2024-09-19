import React, { useState } from "react";
import axios from "axios";

const PhoneInput = ({ onSubmit }) => {
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = async () => {
    if (!phonenumber || phonenumber.length !== 10 || !phonenumber) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/send-phone", {
        phonenumber,
      });
      console.log("Response Headers:", response.data.headers);
      onSubmit(response.data.headers); 
    } catch (error) {
      console.error("Error:", error);
      onSubmit(null, "Error fetching data.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your number"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PhoneInput;
