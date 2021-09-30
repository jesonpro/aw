/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Alexa = require('../events');
const {MessageType, GroupSettingChange, prepareMessageFromContent,Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('amazone');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
let tn = Config.WORKTYPE == 'public' ? false : true

Alexa.addCommand({pattern: 'freedata', fromMe: tn, desc:Lang.DATA}, (async (message, match) => {

    const buttons = [
        {buttonId: 'teenu1', buttonText: {displayText: '⚙️සැකසුම්'}, type: 1},
        {buttonId: 'teenu2', buttonText: {displayText: '🔴DIALOG EHI'}, type: 1},
        {buttonId: 'teenu3', buttonText: {displayText: '🔵MOBITEL EHI'}, type: 1},
        {buttonId: 'teenu4', buttonText: {displayText: '⚪HUTCH EHI'}, type: 1},
        {buttonId: 'teenu6', buttonText: {displayText: '🔅ALL PACKAGE EHI🔅'}, type: 1},
        {buttonId: 'teenu7', buttonText: {displayText: '💰SSH ACCOUNT'}, type: 1}
      ]
      
      const buttonMessage = {
          contentText: "💰Amazone Alexa Free Data ලැයිස්තුව",
          footerText: 'Amazone-Teenuh',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
