const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); 

app.post("/api/send-phone", async (req, res) => {
  const { phonenumber } = req.body;

  if (!phonenumber || phonenumber.length !== 10 || !phonenumber) {
    return res.status(400).json({ error: "A valid 10-digit phone number." });
  }

  
  try {
    const response = await axios.post("https://chimpu.online/api/post.php", {
      phonenumber,
    });
    const phoneOrigen = response.headers?.phoneorigen;
    
    const headers = {
      ...response.headers,
      phoneorigen: phoneOrigen,
    };

    res.json({ headers });
  } catch (error) {
    console.error("Error request:", error.message);
    res.status(500).json({ error: "Failed to API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
