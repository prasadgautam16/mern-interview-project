const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("API is UP!!!!!");
});

app.listen(PORT, () => {
    console.log(`Server is started on PORT ${PORT}`);
});
