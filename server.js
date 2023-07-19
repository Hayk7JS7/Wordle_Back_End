const express = require('express');
const app = express();
const mongoose = require('mongoose');
const wordRoutes = require('./src/routes/wordRoutes');
const PORT = process.env.PORT || 3500;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect('mongodb://127.0.0.1:27017/BoardGame', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

app.use('/', wordRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
