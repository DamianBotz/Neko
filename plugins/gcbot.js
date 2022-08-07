let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
ʚ───═[ 𝗚𝗥𝗨𝗣 𝗕𝗢𝗧 ]═───ɞ

https://chat.whatsapp.com/JLm7nyMWymE8ATQHyHWxsv

✧─────···───────✧
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Neko Groups')).buffer(), ext, '🎮 𝑁𝑒𝑘𝑜 𝐵𝑜𝑡', 'Siap Neko', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot1']
handler.tags = ['main']
handler.command = /^(gcbot1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
