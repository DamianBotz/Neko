let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `*𝗝𝗢𝗜𝗡 𝗞𝗘 𝗚𝗥𝗨𝗣 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗡𝗘𝗞𝗢 𝗕𝗢𝗧*\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: '💌 › Group ShinnBot', description: "Group Utama Nekobotz", rowId:".gcbot1"},
        {title: '🎐 › Owner', description: "Creator Shinnbotz >ω<", rowId:".owner"},
        {title: '🧿 › Info ShinnBot', description: "Info Nekobotz >ω<", rowId:".info"},
        {title: '📮 › Donasi', description: "Donasi Untuk Shinn ≧▽≦", rowId:".donasi"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot|grupbot|botgrup)$/i
handler.help = ['gcbot', 'grupbot', 'botgrup']
module.exports = handler
