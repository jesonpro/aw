/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Codded BY teenuX
Wa.me/+94766598862
*/

const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_UP = "*Please Wait Little Bit Im Uploding Your PDF⏱*"
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*Downloading Your PDF📑*"
let td = Config.WORKTYPE == 'public' ? false : true

if (Config.ADULT_MODE == 'on') {
Neotro.addCommand({pattern: 'x1book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}59987`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x2book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}59988`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x3book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}59991`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x4book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}59993`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x5book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}59995`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x6book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}59997`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x7book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}59999`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x8book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60001`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x9book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60003`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x10book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60005`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x11book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60009`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x12book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60011`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x13book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60013`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x14book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60015`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x15book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60017`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x16book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60019`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x17book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60021`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x18book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60023`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x19book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60025`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x20book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60027`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x21book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}60029`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x22book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x23book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x24book ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

}
