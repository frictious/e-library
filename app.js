const       express         = require("express"),
            Index           = require("./routes/index");

const app = express();

//CONFIG
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", Index);

//SERVER
app.listen(process.env.PORT, () => {
    console.log(`SERVER STARTED ON PORT ${process.env.PORT}`);
});
