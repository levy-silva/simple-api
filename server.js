require("dotenv/config");
const app = require("./src/app.js");

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at port ${port}`));