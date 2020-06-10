const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connecting to dataBase
connectDB();

//BodyParser Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('App Started');
});

//Defining Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/matches', require('./routes/api/matches'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
