const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let tn = Config.WORKTYPE == 'public' ? false : true
const UP = "*👩‍🦰Uploading Mp3 please wait*"

Neotro.addCommand({pattern: 'xvo1 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`${Config.ASITE}68907`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Neotro.addCommand({pattern: 'xvo2 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`${Config.ASITE}68908`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Neotro.addCommand({pattern: 'xvo3 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`${Config.ASITE}68911`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Neotro.addCommand({pattern: 'xvo4 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`${Config.ASITE}68913`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Neotro.addCommand({pattern: 'xvo5 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`${Config.ASITE}68914`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Neotro.addCommand({pattern: 'xvo6 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`${Config.ASITE}68917`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Neotro.addCommand({pattern: 'xvo7 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`${Config.ASITE}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
