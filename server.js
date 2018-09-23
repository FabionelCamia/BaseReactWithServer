const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // this is a peice of midlleware

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

app.get('/api/courses', (req, res) => {
    // '/' is the url
    res.send(courses);
    // this is the massage you see when you access the url

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listining on port ${port}`));