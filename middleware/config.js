const express = require("express");
const session = require('express-session');
const KnexSessionStore = require("connect-session-knex")(session);
const helmet = require("helmet");
const cors = require("cors");

const sessionConfig = {
    name: "Sprint Challenge",
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || "Secrets don't make friends...",
    cookie: {
        httpOnly: true,
        maxAge: 600000,
        secure: false, //Don't forget to change to true for production!
    },
    store: new KnexSessionStore({
        knex: require("../database/dbConfig.js"),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 600000,
    }),
};

module.exports = function(server) {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(session(sessionConfig));
};