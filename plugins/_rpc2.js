/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Kamu Bukan Owner')
if (rpc === false) return m.reply('Auto Read pribadi udah Mati')
//if (autovn === true) return 
rpc = false
m.reply(`Sukses Mematikan Mode Auto Read pribadi Bot`)

}
handler.help = ['offreadpc']
handler.tags = ['info', 'main']

handler.command = /^(offrpc|offreadpc)$/i

module.exports = handler