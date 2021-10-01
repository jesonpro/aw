const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
let tn = Config.WORKTYPE == 'public' ? false : true
const XN_UP = "*Please Wait Little Bit Im Uploding Your Ehi⏱*"
const DESC = "Free data( EHI ලැයිස්තුව)"
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*Downloading Your EHI📑*"
const TXN_D = "*💎Downloading Your APK*"
const TXN_UP = "*Uploading Your APK🔅*"
const DW_D = "*🔴Downloading DIALOG Whatsapp  EHI*"
const DF_D = "*🔴Downloading DIALOG Facebook  EHI*"
const DY_D = "*🔴Downloading DIALOG Youtube  EHI*"
const DZ_D = "*🔴Downloading DIALOG Zoom EHI*"
const HW_D = "*⚪Downloading HUTCH Whatsapp  EHI*"
const HF_D = "*⚪Downloading HUTCH Facebook  EHI*"
const HY_D = "*⚪Downloading HUTCH Youtube  EHI*"
const MF_D = "*🔵Downloading MOBITEL  Facebook  EHI*"
const MT_D = "*🔵Downloading MOBITEL  TWITTER   EHI*"

Neotro.addCommand({pattern: 'apkhttp ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,TXN_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}78085`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,TXN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/vnd.android.package-archive', quoted: message.data})
      }));
//===========🔴🔴DIALOG===================================================================================
//===========🔴🔴Whatsapp ===================================================================================
Neotro.addCommand({pattern: 'DWEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DW_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77685`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77686`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77689`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

 //===========🔴🔴FACEBOOK ===================================================================================
Neotro.addCommand({pattern: 'DFEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DF_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77693`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77695`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77697`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴🔴YOUTUBE ===================================================================================
Neotro.addCommand({pattern: 'DYEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77701`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77702`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77705`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴🔴ZOOM===================================================================================
Neotro.addCommand({pattern: 'DZEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,DZ_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77707`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77708`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77711`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========⚪⚪HUTCH===================================================================================
//===========⚪⚪Whatsapp ===================================================================================

Neotro.addCommand({pattern: 'HWEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HW_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77713`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77714`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77715`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========⚪⚪Facebook ===================================================================================
Neotro.addCommand({pattern: 'HFEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HF_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77719`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77720`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77723`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));
//===========⚪⚪Youtube ===================================================================================
Neotro.addCommand({pattern: 'HYEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77725`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77726`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77729`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔵🔵MOBITEL ===================================================================================
//===========🔵🔵Twitter ===================================================================================
Neotro.addCommand({pattern: 'MTEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77733`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77734`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77737`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔵🔵FACEBOOK ===================================================================================
Neotro.addCommand({pattern: 'MFEHI ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77739`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77740`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77743`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴⚪🔵ALL SIM===================================================================================
//===========🔴⚪🔵ALL Whatsapp ===================================================================================
Neotro.addCommand({pattern: 'allwehi ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77745`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77746`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77749`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴⚪🔵ALL Facebook  ===================================================================================
Neotro.addCommand({pattern: 'allfehi ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77751`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77752`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77755`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴⚪🔵ALL Youtube  ===================================================================================
Neotro.addCommand({pattern: 'allyehi ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77757`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77758`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77761`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));

//===========🔴⚪🔵ALL Zoom ===================================================================================
Neotro.addCommand({pattern: 'allzehi ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,HY_D,MessageType.text);
       var webimage = await axios.get(`${Config.ASITE}77763`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,XN_UP,MessageType.text);
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77765`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
       var webimage = await axios.get(`${Config.ASITE}77767`, { responseType: 'arraybuffer' })
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
 }));
