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
        {buttonId: '', buttonText: {displayText: '⚙️සැකසුම්\n\n\n💎ඔබ දැනටමත් අන්තර්ජාල සැරිසන්නෙකු වශයෙන් දන්නා කරුණක් තමයි Ehi,sks,ray files මඟින් ඔබ Active කළ ඇති පැකේජ මගින් නොමිලේ අන්තර්ජාලය භාවිත කල හැකි බව...\n\n💎ඇත්තටම  කොහොමද එහෙම කරන්නෙ...? මොනාද ඕනී..?\n\n🛡️HTTP App එක\n💬Apk ලබාගැනීමට( .apkhttp )\n\n🛡️ඉන්පසු ඔබ Active  කළ පැකේජයට අදාළ ehi ෆයිල් එක Download කරගන්න\n\n🛡️අදාල ෆයිල් download කළ පසු HTTP INJECTOR App එක හරහා Open කරගන්න\n\n🛡️ අවසාන වශයෙන් START බටනය Click කරන්න.. එවිට Vpn ක්‍රියාත්මක කිරීමට අවසර ලබාදෙන්න.\n\n*💰දැන් ඔබට අන්තර්ජාලයට අදාළ පැකේජය මඟින් පිවිසිය හැක.*\n\n'}, type: 1},
        {buttonId: '', buttonText: {displayText: '🔴DIALOG EHI\n\n\n*🛡️PACKAGE NAME* : Whatsapp\n*💬COMMAND* : .DWEHI\n\n*🛡️PACKAGE NAME* : Youtube\n*💬COMMAND* : .DYEHI\n\n*🛡️PACKAGE NAME* : Facebook\n*💬COMMAND* :  .DFEHI\n\n*🛡️PACKAGE NAME* : Zoom\n*💬COMMAND* :  .DZEHI'}, type: 1},
        {buttonId: '', buttonText: {displayText: '🔵MOBITEL EHI\n\n\n*🛡️PACKAGE NAME* : Mobitel Twitter\n *💬COMMAND* : .MTEHI\n\n*🛡️PACKAGE NAME* : Mobitel Facebook\n *💬COMMAND* : .MFEHI\n\n'}, type: 1},
        {buttonId: '', buttonText: {displayText: '⚪HUTCH EHI\n\n\n*🛡️PACKAGE NAME* : Whatsapp\n *💬COMMAND* : .HWEHI\n\n*🛡️PACKAGE NAME* : Facebook\n *💬COMMAND* : .HFEHI\n\n*🛡️PACKAGE NAME* : Youtube\n *💬COMMAND* : .HYEHI'}, type: 1},
        {buttonId: '', buttonText: {displayText: '🔅ALL PACKAGE EHI\n\n\n🛡️All Whatsapp ehi\n💬  .allwehi\n\🛡️All Facebook ehi\n💬  .allfehi\n\n🛡️All Youtube ehi\n💬 .allyehi\n\n🛡️All Zoom ehi\n💬 .allzehi\n\n'}, type: 1},
        {buttonId: '', buttonText: {displayText: '💰SSH ACCOUNT\n\n\n🛡️SSH ACCOUNT\n💬 .ssh'}, type: 1}
      ]
      
      const buttonMessage = {
          contentText: "💰Amazone Alexa Free Data ලැයිස්තුව",
          footerText: '©️Amazone-Teenuh',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
