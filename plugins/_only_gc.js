/*****
WATERMARK BY RyuuZeyy

RyuuZeyy
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Kamu Bukan Owner')
if (gconly === true) return m.reply('GC only udah Aktif\n')
//if (modepublic === true) return (Just Example)
gconly = true
m.reply(`Success Activated Mode GC Only

Artinya... Bot hanya akan merespon di pribadi Grup`)
}
handler.help = ['gconly']
handler.tags = ['info', 'main']

handler.command = /^(ongc|gconly)$/i

module.exports = handler