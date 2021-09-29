const Neotro = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const config = require('../hatzu');
const NEED = "*🍭YOU MUST TYPE SOME WORDS*"
const desc = "Text to image Pack";
let td = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({ pattern: 'wordgreen ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/wordgreen?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})

    }));

Neotro.addCommand({ pattern: 'zombie3d ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/zombie3d?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'metal ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/metal?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'cloud ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/cloud?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'graffiticolor ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/graffiticolor?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'nneon ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/neon?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'snake ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/snake?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'lightgalaxy ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/lightgalaxy?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'graffiti5 ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/graffiti5?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'hotmetalic ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/hotmetalic?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'thunder ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/thunder?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'graffiti3 ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/graffiti3?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'neon2 ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/neon2?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'brokenglass ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/brokenglass?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'neondevil ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/neondevil?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));

Neotro.addCommand({ pattern: 'juventus ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/juventus?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'realisticvintage ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/realisticvintage?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'multicolor3d ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/multicolor3d?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: '3dwood ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/3dwood?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'paulscholes ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/paulscholes?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'artpapercut ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/artpapercut?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: '2galaxy ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/galaxy?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'galaxybat ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/galaxybat?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'cake ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/cake?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'writingchalk ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/writingchalk?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'birthdaycake ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/birthdaycake?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'barlog ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/blackpinkneon?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'bearlogo ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/bearlogo?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'fi ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
Neotro.addCommand({ pattern: 'if ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(NEED);
        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/?text=${encodeURIComponent(match[1])}&apikey=TEENUU`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    }));
