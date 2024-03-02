import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    let type = "a weekday";
    let activity = "it's time to work hard";

    if(day === 0 || day === 6){
        type = "the weekend";
        activity ="Time to partaaay!";
    }
    res.render("index.ejs", {
        dayType: type,
        advice: activity,
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});