/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Kamu Bukan Owner')
if (rgc === true) return m.reply('Auto Read Grup udah Aktif')
//if (autovn === true) return 
rgc = true
m.reply(`Success Activated Mode Auto Read Group`)

}
handler.help = ['readgc']
handler.tags = ['info', 'main']

handler.command = /^(rgc|readgc)$/i

module.exports = handler
