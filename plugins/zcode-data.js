const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_UP = "*Please Wait Little Bit Im Uploding Your Ehi⏱*"
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*Downloading Your EHI📑*"

Neotro.addCommand({pattern: 'apkhttp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
      }));
Neotro.addCommand({pattern: 'ehi ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
      }));
