const express = require('express');
const app = express();

const STATUS_CODES = {
  200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
  201: "Created: The request has been fulfilled, resulting in the creation of a new resource.",
  204: "No Content: The server successfully processed the request, but there's no content to send.",
  400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
  401: "Unauthorized: Authentication is required and has failed or not been provided.",
  403: "Forbidden: The server understands the request, but it refuses to authorize it.",
  404: "Not Found: The server has not found anything matching the request URI.",
  405: "Method Not Allowed: The request method is not supported for the requested resource.",
  429: "Too Many Requests: The user has sent too many requests in a given time.",
  500: "Internal Server Error: The server encountered an unexpected condition.",
  502: "Bad Gateway: The server received an invalid response from an upstream server.",
  503: "Service Unavailable: The server is currently unavailable due to overload or maintenance.",
  504: "Gateway Timeout: The server didn't receive a timely response from an upstream server."
};

// Create the GET endpoint
app.get('/status-info', (req, res) => {
  const code = req.query.code;

  // Validate input
  if (!code || !STATUS_CODES[code]) {
    return res.status(400).json({ 
      status: 400, 
      message: "Invalid or missing status code. Please provide a valid HTTP status code." 
    });
  }

  // Respond with the requested status code information
  res.status(parseInt(code)).json({
    status: parseInt(code),
    message: STATUS_CODES[code]
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
