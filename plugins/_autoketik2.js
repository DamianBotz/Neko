/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/

let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Maaf Kak Anda Bukan Owner Bot Ini')
if (autoketik === false) return m.reply('Udh Mati')
//if (autoketik === false) return 
autoketik = false
m.reply(`Success Deactivated Mode Auto Typing`)

}
handler.help = ['offketik']
handler.tags = ['info', 'main']

handler.command = /^(offngetik|offk|offketik)$/i

module.exports = handler