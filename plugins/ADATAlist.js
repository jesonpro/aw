/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Alexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
let tn = Config.WORKTYPE == 'public' ? false : true

Alexa.addCommand({pattern: 'btn', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
    const rows = [
        {title: 'tenu', description: "", rowId:"rowid1"},
        {title: 'tenu', description: "", rowId:"rowid2"}
       ]
       
       const sections = [{title: "©️Alexa-Teenuh", rows: rows}]
       
       const button = {
        buttonText: 'Free Data!',
        description: "💰Amazone Alexa Free Data ලැයිස්තුව",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
