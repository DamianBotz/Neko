/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Kamu Bukan Owner')
if (rpc === true) return m.reply('Auto Read pribadi udah Aktif ')
//if (autovn === true) return 
rpc = true
m.reply(`Success Activated Mode Auto Read Pribadi Bot`)

}
handler.help = ['readpc']
handler.tags = ['info', 'main']

handler.command = /^(rpc|readpc)$/i

module.exports = handler
