import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import dotenv from "dotenv";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const domain = isProduction ? "sport.avonft.io" : "staging.sport.avonft.io";
const botName = isProduction ? "" : "AvoSportStagingBot";

const app = express();

app.use("/", express.static(path.resolve("./static")));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("home", {
        layout: false,
        registationLink: `https://app.${domain}/authorization`,
        galleryLink: `https://app.${domain}/gallery-nft`,
        avonftLink: `https://${domain.replace("sport.", "")}`,
        buyTokenLink: "https://avo.center",
        tgBotLink: `https://t.me/${botName}`,
    });
});

app.listen(3001, "0.0.0.0", () => {
    console.log("Successfully started on http://localhost:3001");
});
