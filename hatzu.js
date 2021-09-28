/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('hatzu.env')) require('dotenv').hatzu({ path: './hatzu.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    ZRUN: "zenzapi",
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    BOT_NAME: process.env.BOT_NAME === undefined ? 'Amazone Alexa' : process.env.BOT_NAME,
    HNLOCK: 'hadi-api',
    ZLOCK: 'zeks',
    ZNLOCK: 'zenzapi.xyz',
    ZSITE: process.env.ZSITE === undefined ?'enzapi.xyz' : process.env.ZSITE,
    ZAPI: process.env.ZAPI === undefined ?'AMAZONE' : process.env.ZAPI,
    BSITE: process.env.BSITE === undefined ?'dapuhy-api.herokuapp.com' : process.env.BSITE,
    BAPI: process.env.BAPI === undefined ?'TEENUU' : process.env.BAPI,
    NS: process.env.NS === undefined ?'' : process.env.NS,
    NS: process.env.NS === undefined ?'' : process.env.NS,
    HLOCK: process.env.HLOCK === undefined ?'hadi-api' : process.env.HLOCK,
    NEOA: process.env.NEOA === undefined ?'aca83a4354ac' : process.env.NEOA,
    NEOS: process.env.NEOS === undefined ?'zenzapi' : process.env.NEOS,
    NEOY: process.env.NEOY === undefined ?'xyz' : process.env.NEOY,
    NY: process.env.NY === undefined ?'xyz' : process.env.NY,
    NA: process.env.NA === undefined ?'aca83a4354ac' : process.env.NA,
    NS: process.env.NS === undefined ?'zenzapi' : process.env.NS,
    HACKER: process.env.HACKER === undefined ?'h4ck3rs404' : process.env.HACKER,
    A_HACKER: process.env.A_HACKER === undefined ?'h4ck3rs404-api' : process.env.A_HACKER,
    DEVELOPER: 'HATZU TEAM',
    AUTHOR: 'AMAZONE ALEXA',
    GIT: 'https://github.com/jesonpro/ales.git',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    ON: "hunter",
    CCN: "Ikyy69",
    ON: "hunter",
    HLOCK: "hadi-api",
    ZTH: "d537895142",
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ?'rjVLfqfPmpytoDDqvGt7kRbx' : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
};
 
