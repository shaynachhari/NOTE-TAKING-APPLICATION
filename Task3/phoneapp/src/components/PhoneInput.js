import React, { useState } from "react";
import axios from "axios";

const PhoneInput = ({ onSubmit }) => {
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = async () => {
    if (!phonenumber) {
      alert("Please enter a phone number");
      return;
    }

    try {
      const response = await axios.post("https://chimpu.online/api/post.php", {
        phonenumber,
      });
      console.log("Response Headers:", response.headers);
      onSubmit(response.headers);
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
