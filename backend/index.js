const express = require('express');
const app = express();

// express json-parser
app.use(express.json());



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})