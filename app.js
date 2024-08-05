const express = require("express");
const expresslayout = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

//buatkan ejs
app.set("view engine", "ejs");
//Third party middleware
app.use(expresslayout);
app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    // res.sendFile("./index.html", { root: __dirname });
    const mahasiswa = [
        {
            nama: "Aldi",
            noHp: "08123456789",
            email: "Aldi@gmail",
        },
        {
            nama: "Cahya",
            noHp: "08123456789",
            email: "Cahya@gmail",
        },
        {
            nama: "Ramadhan",
            noHp: "08123456789",
            email: "Ramadhan@gmail",
        },
    ];
    res.render("index", {
        nama: "Aldi Cahya Ramadhan",
        layout: "layouts/main-layouts",
        title: "Home",
        mahasiswa,
    });
});
app.get("/about", (req, res) => {
    // res.sendFile("./about.html", { root: __dirname });
    res.render("about", {
        layout: "layouts/main-layouts",
        title: "About",
    });
});
app.get("/contact", (req, res) => {
    // res.sendFile("./contact.html", { root: __dirname });
    res.render("contact", {
        layout: "layouts/main-layouts",
        title: "Contact",
    });
});

// cara menampilkan JSON
app.get("/json", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
});

app.use((req, res) => {
    res.status(404);
    res.render("404", {
        layout: "404",
        title: "404",
        message: "Halaman tidak ditemukan",
    });
});

app.listen(port, () => {
    console.log(`Server running listening on port ${port}`);
});
