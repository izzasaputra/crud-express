const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

const corsOptions = {
  origin: "*",
};

//register cors middleware
app.use(cors(corsOptions));

app.use(express.json());

//connect database
db.mongoose
  .connect(db.url)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log(`something error, error message : ${err.message}`)
    process.exit();
  });

//call route mahasiswa
// app.get("/", (req, res) => {
//   res.json({ message: "Hello World Bambang" });
// });

require("./app/routes/mahasiswa.routes")(app)


const PORT = process.nextTick.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
