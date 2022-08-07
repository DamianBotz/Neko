/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Kamu Bukan Owner')
if (gconly === false) return m.reply('GC only udah mati\n')
//if (modepublic === true) return 
gconly = false
m.reply(`Success Mematikan Mode GC Only

Bot akan merespon di Grup dan di pribadi Bot`)

}
handler.help = ['offgconly']
handler.tags = ['info', 'main']

handler.command = /^(offgc|offgconly)$/i

module.exports = handler