const express = require('express');
const app = express();
const port = 4000; 

app.get('/api', (req, res) => {
  // Query parameters
  const { slack_name, track } = req.query;

  // Day of the week
  const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

  // UTC time within a +/-2 minute window
  const currentTime = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');

  // JSON response
  const response = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: currentTime,
    track: track,
    github_file_url: 'https://github.com/nodekage/Hngx-API-Endpoint/blob/main/app.js',
    github_repo_url: 'https://github.com/nodekage/Hngx-API-Endpoint',
    status_code: 200,
  };

  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
