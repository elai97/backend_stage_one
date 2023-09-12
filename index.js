const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
    // Extract query parameters
    const slackName = req.query.slack_name;
    const track = req.query.track;

    // Get the current date and time
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    // Format UTC time as "2023-09-12T21:30:29Z"
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
    const utcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    // GitHub URLs
    const githubFileUrl = 'https://github.com/Ohuegbe01/Praise-app-sample/blob/main/index.js';
    const githubRepoUrl = 'https://github.com/Ohuegbe01/backend_stage_one_task';

    // Response JSON
    const jsonResponse = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    };

    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
