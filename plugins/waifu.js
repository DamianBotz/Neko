let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Random Waifu', `${wm}`, 'Next', `${usedPrefix + command}`, m,)
}
handler.help = ['waifu']
handler.tags = ['anime', 'premium']
handler.command = /^(waifu)$/i

module.exports = handler
handler.premium = true
let wm = global.botwm