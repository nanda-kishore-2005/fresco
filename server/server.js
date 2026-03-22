import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID;

app.post('/api/orders', async (req, res) => {
  const { phone, message } = req.body;

  if (!phone || !message) {
    return res.status(400).json({ success: false, error: 'Phone number and message are required.' });
  }

  // Format phone (ensure strictly digits, remove + or spaces if any)
  let formattedPhone = phone.replace(/\D/g, '');
  // Automatically append 91 if it's a 10 digit Indian number
  if (formattedPhone.length === 10) {
    formattedPhone = `91${formattedPhone}`;
  }

  try {
    // If user has not configured the backend yet, simply simulate success 
    // This allows the frontend to show the "Success" screen without breaking.
    if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_ID) {
      console.warn("⚠️ Missing WhatsApp API credentials! Simulating response for development.");
      return res.status(200).json({ 
        success: true, 
        mock: true,
        receipt: `Simulated message successfully processed for ${formattedPhone}` 
      });
    }

    const response = await axios({
      method: "POST",
      url: `https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_ID}/messages`,
      headers: {
        "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        messaging_product: "whatsapp",
        to: formattedPhone,
        type: "text",
        text: { body: message },
      },
    });

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("WhatsApp API Error:", error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send WhatsApp message.', 
      details: error.response?.data 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (!WHATSAPP_TOKEN) {
    console.log("------------------------------------------------------------------");
    console.log("⚠️ WHATSAPP_TOKEN is missing from .env!");
    console.log("The server is currently running in SIMULATION mode.");
    console.log("Orders will succeed on the frontend, but no API call will be made.");
    console.log("------------------------------------------------------------------");
  }
});
