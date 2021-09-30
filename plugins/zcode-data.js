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
const TXN_D = "*💎Downloading Your APK*"
const TXN_UP = "*Uploading Your APK🔅*"
const DW_D = "*🔴Downloading DIALOG Whatsapp  EHI*"
const DF_D = "*🔴Downloading DIALOG Facebook  EHI*"
const DY_D = "*🔴Downloading DIALOG Youtube  EHI*"
const DZ_D = "*🔴Downloading DIALOG Zoom EHI*"

Neotro.addCommand({pattern: 'apkhttp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
//===========🔴🔴DIALOG===================================================================================
//===========🔴🔴Whatsapp ===================================================================================
Neotro.addCommand({pattern: 'DWEHI ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DW_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

 //===========🔴🔴FACEBOOK ===================================================================================
Neotro.addCommand({pattern: 'DFEHI ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DF_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴🔴YOUTUBE ===================================================================================
Neotro.addCommand({pattern: 'DYEHI ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴🔴ZOOM===================================================================================
Neotro.addCommand({pattern: 'DZEHI ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DZ_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77489`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));
