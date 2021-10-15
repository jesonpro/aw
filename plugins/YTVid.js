/* Copyright (C) 2021 RAMIYA - Alexa Team.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RAMIYA - Alexa Team

// 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
// --------------------------------------------------|
// ----------------------A---------------------------|
// ----------------------M--------------C------------|
// ----------------------A--------------O------------|
// ----------------------Z--------------D------------|
// -------A--------------Z--------------E------------|
// -------L--------------O---------------------------|
// -------E--------------N--------------R------------|
// -------X--------------E--------------A------------|
// -------A-----------------------------M------------|
// ----------------------A--------------I------------|
// ----------------------L--------------Y------------|
// ----------------------E--------------A------------|
// ----------------------X---------------------------|
// ----------------------A---------------------------|
// --------------------------------------------------|
//___________________________________________________
//________00000000000___________000000000000_________
//______00000000_____00000___000000_____0000000______
//____0000000_____________000______________00000_____
//___0000000_______________0_________________0000____
//__000000____________________________________0000___
//__00000_____________________________________ 0000__
//_00000______________________________________00000__
//_00000_______________A_L_E_X_A_____________000000__
//__000000_________________________________0000000___
//___0000000________C_O_D_E___B_Y_________0000000____
//_____000000________R_A_M_I_Y_A_________000000______
//_______000000________________________000000________
//__________00000_____________________0000___________
//_____________0000_________________0000_____________
//_______________0000_____________000________________
//_________________000_________000___________________
//_________________ __000_____00_____________________
//______________________00__00_______________________
//________________________00_________________________
//___________________________________________________

const Ramiya = require('../events'); // COPYRIGHT ~ RAMIYA - ALEXA TEAM
const {MessageType,Mimetype} = require('@adiwajshing/baileys'); // COPYRIGHT ~ RAMIYA - ALEXA TEAM
const axios = require('axios'); // COPYRIGHT ~ RAMIYA - ALEXA TEAM
var ruq = { cd: 'Li4vY29uZmln', encrypt: 'Code Encrypted BY RAMIYA' } // COPYRIGHT ~ RAMIYA - ALEXA TEAM
var code = Buffer.from(ruq.cd, 'base64') // COPYRIGHT ~ RAMIYA - ALEXA TEAM
var file = code.toString('utf-8') // COPYRIGHT ~ RAMIYA - ALEXA TEAM
const Alexa = require(file); // COPYRIGHT ~ RAMIYA - ALEXA TEAM
const Language = require('../language'); // COPYRIGHT ~ RAMIYA - ALEXA TEAM
const Lang = Language.getString('scrapers'); // COPYRIGHT ~ RAMIYA - ALEXA TEAM
const YT_NEED = "😏 *Enter Youtube URL*\n 🎥 *Example* : _.video https://www.youtube.com/watch?v=iIm4gcybpsI_"
const DWLOAD_VID = "🤍 *Downloading Your Video...*" // COPYRIGHT ~ RAMIYA - ALEXA TEAM
const YTV_UP = "*🚀Uploading Your Video...*" // COPYRIGHT ~ RAMIYA - ALEXA TEAM
const NO_RESULT = "*🤕 Oops Video Not Found...*" // COPYRIGHT ~ RAMIYA - ALEXA TEAM
let ramiya = Alexa.WORKTYPE == 'public' ? false : true // COPYRIGHT ~ RAMIYA - ALEXA TEAM
let amazone = Alexa.WORKTYPE == 'public' ? true : false // COPYRIGHT ~ RAMIYA - ALEXA TEAM


Ramiya.addCommand({ pattern: 'video ?(.*)', fromMe: ramiya, desc: Lang.VIDEO_DESC, deleteCommand: false}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
		
		var url = `${Alexa.VID1}ytmp4?url=${link}&list=${Alexa.VID2}&apikey=${Alexa.VIDAPI}`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {
             url,title,channel,views,published,thumb,
            } = response.data.result
    
            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})
            
            const vcap = Alexa.BOT_NAME+"\n\n*✽ Title* : "+title+"\n*✽ Channel* : "+channel+"\n*✽ Views* : "+views+"\n*✽ Upload Date* : "+published+"\n\n*🦹‍♂️ Powered By Alexa*\n👨🏻‍💻 _Code By Ramiya_"
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
			var thumbdata = thumb // COPYRIGHT ~ RAMIYA - ALEXA TEAM
			var respoimage = await axios.get(`${thumbdata}`, { responseType: 'arraybuffer' }) // COPYRIGHT ~ RAMIYA - ALEXA TEAM
			const thumbimg  = Buffer.from(respoimage.data) // COPYRIGHT ~ RAMIYA - ALEXA TEAM
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption: vcap, thumbnail: thumbimg, quoted: message.data});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
	
	Ramiya.addCommand({ pattern: 'video ?(.*)', fromMe: amazone, deleteCommand: false, dontAddCommandList:true}, async (message, match) => {

        const link = match[1] // 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
  
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
		
		var url = `${Alexa.VID1}ytmp4?url=${link}&list=${Alexa.VID2}&apikey=${Alexa.VIDAPI}`
		
        await axios
          .get(`${url}`) // Request Code
          .then(async (response) => {
            const {
             url,title,channel,views,published,thumb,
            } = response.data.result
    
            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})
            
            const vcap = Alexa.BOT_NAME+"\n\n*✽ Title* : "+title+"\n*✽ Channel* : "+channel+"\n*✽ Views* : "+views+"\n*✽ Upload Date* : "+published+"\n\n*🦹‍♂️ Powered By Alexa*\n👨🏻‍💻 _Code By Ramiya_"
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
			var thumbdata = thumb // COPYRIGHT ~ RAMIYA - ALEXA TEAM
			var respoimage = await axios.get(`${thumbdata}`, { responseType: 'arraybuffer' }) // COPYRIGHT ~ RAMIYA - ALEXA TEAM
			const thumbimg  = Buffer.from(respoimage.data) // COPYRIGHT ~ RAMIYA - ALEXA TEAM
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false, caption: vcap, thumbnail: thumbimg, quoted: message.data});
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )

      },
    )
*/
