const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// TODO ENDPOINTS

const get_addictions = require("./routes/GET.addictions");
app.use("/addictions", get_addictions);

const get_addiction = require("./routes/GET.addiction");
app.use("/addiction", get_addiction);

const post_addiction = require("./routes/POST.addiction");
app.use("/addiction", post_addiction);

const put_addiction = require("./routes/PUT.addiction");
app.use("/addiction", put_addiction);

const get_stats = require("./routes/GET.stats");
app.use("/stats", get_stats);

// ! RUN SERVER

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`(!) Server running on http://localhost:${PORT}`);
});
