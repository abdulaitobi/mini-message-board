const { Router } = require("express");  //  destructuring express object

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

//indexRouter.get("/", (req, res) => res.send("All messages"));
indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
});
indexRouter.get("/new", (req, res) => { res.render("form"); });
indexRouter.post("/new", (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.authorName, added: new Date() });
    res.redirect("/");
})
indexRouter.get("/info/:id", (req, res) => {
    const messageId = req.params.id;
    const message = messages[messageId];

    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render("info", { message: message });
});
module.exports = indexRouter;