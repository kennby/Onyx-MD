import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭꒱≡≡≡≡≡╡.｡❅*⋆⍋*∞*｡❅*⋆⍋*∞*｡╞≡≡≡≡♡
┊    ❥ᰰຼ ⃟ᬽ៸onyx-𝔹𝕠𝕥༒★»
┊-----------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊❦ *𝗛ola, ${taguser}*
┊─►⸙❐⚘⸙❐⚘⸙❐⚘⸙❐⚘⸙❐⚘⸙❐⚘⸙✎
┊❦ *Owner:* pit
┊❦ *Numero:* wa.me/13852322280
┊❦ *Grupo Bot:* https://chat.whatsapp.com/GDTBXXPiFbw6z4AEZZzbZ8
┊❦ *Fecha:* ${date}
┊❦ *Tiempo activo:* ${uptime}
┊❦ *Usuarios regs:* ${rtotalreg}
┊❦ *Usuarios totales:* ${rtotal}
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑰𝑵𝑭𝑶 𝑫𝑬𝑳 𝑼𝑺𝑼𝑨𝑹𝑰𝑶*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺ *🎖️ Nivel:* ${level}
┊⋆⁺ *🧰 Experiencia:* ${exp}
┊⋆⁺ *⚓ Rango:* ${role}
┊⋆⁺ *💎 Diamantes:* ${limit}
┊⋆⁺ *👾 ShinCoins:* ${money}
┊⋆⁺ *🪙 Tokens:* ${joincount}
┊⋆⁺ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧
${readMore}
╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑩𝑶𝑻 𝑶𝑭𝑪 𝑶 𝑺𝑼𝑩 𝑩𝑶𝑻*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊${(conn.user.jid == global.conn.user.jid ? '' : `ShinoBot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*༺♥༻❀💕﻿ Este es el Bot oficial 💕﻿❀༺♥༻*'}
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑺𝑶𝑳𝑼𝑪𝑰𝑶𝑵 𝑫𝑬 𝑬𝑹𝑹𝑶𝑹𝑬𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊❦ Mensajes en espera
┊↻ _${usedPrefix}fixmsgespera_
┊❦ Mensajes en espera (owner)
┊↺ _${usedPrefix}dsowner_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑰𝑵𝑭𝑶 𝑫𝑬𝑳 𝑩𝑶𝑻*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛➠ _${usedPrefix}terminosycondiciones_
┊⋆⁺˖⸙̭❛➠ _${usedPrefix}grupos_
┊⋆⁺˖⸙̭❛➠ _${usedPrefix}estado_
┊⋆⁺˖⸙̭❛➠ _${usedPrefix}infobot_
┊⋆⁺˖⸙̭❛➠ _${usedPrefix}speedtest_
┊⋆⁺˖⸙̭❛➠ _${usedPrefix}donar_
┊⋆⁺˖⸙̭❛➠ _${usedPrefix}owner_
┊⋆⁺˖⸙̭❛➠ _${usedPrefix}script_
┊⋆⁺˖⸙̭❛➠ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑼𝑵𝑬 𝑨𝑳 𝑩𝑶𝑻 𝑨 𝑻𝑼 𝑮𝑹𝑼𝑷𝑶*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛웃 _${usedPrefix}join *<enlace / link / url>*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑶𝑷𝑪𝑰𝑶𝑵𝑬𝑺-𝑺𝑬𝑹𝑩𝑶𝑻*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛➱ _${usedPrefix}serbot --code_
┊⋆⁺˖⸙̭❛➱ _${usedPrefix}serbot_
┊⋆⁺˖⸙̭❛➱ _${usedPrefix}deletebot_
┊⋆⁺˖⸙̭❛➱ _${usedPrefix}token_
┊⋆⁺˖⸙̭❛➱ _${usedPrefix}stop_
┊⋆⁺˖⸙̭❛➱ _${usedPrefix}bots_
┊
┊⋆⁺˖⸙̭❛➱ _${usedPrefix}enable restrict_
┊⋆⁺˖⸙̭❛➱ _${usedPrefix}disable restrict_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}enable autoread_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}disable autoread_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}enable antispam_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}disable antispam_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}enable anticall_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}disable anticall_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}enable modoia_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}disable modoia_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}enable audios_bot_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}disable audios_bot_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}enable antiprivado_
┊⋆⁺˖⸙̭❛➯ _${usedPrefix}disable antiprivado_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑫𝑰𝑽𝑬𝑹𝑺𝑰𝑶𝑵*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}prostituto *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}prostituta *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}gay2 *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}lesbiana *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}pajero *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}pajera *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}follar *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}puto *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}puta *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}manco *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}manca *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}rata *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}love *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}doxear *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}pregunta *<texto>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}suitpvp *<@tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}slot *<apuesta>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}ttt *<nombre sala>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}delttt_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}acertijo_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}personalidad *<nombre / @tag>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}simi *<texto>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}top *<texto>*_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}topgays_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}topotakus_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}formarpareja_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}verdad_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}reto_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}cancion_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}pista_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}akinator_
┊⋆⁺˖⸙̭❛❀ _${usedPrefix}wordfind_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑯𝑨𝑩𝑰𝑳𝑰𝑻𝑨𝑹-𝑰𝑵𝑯𝑨𝑩𝑰𝑳𝑰𝑻𝑨𝑹*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *welcome*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *welcome*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *modohorny*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *modohorny*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *antilink*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *antilink*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *antilink2*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *antilink2*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *detect*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *detect*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *audios*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *audios*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *autosticker*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *autosticker*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *antiviewonce*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *antiviewonce*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *antitoxic*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *antitoxic*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *antitraba*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *antitraba*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *antiarabes*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *antiarabes*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *modoadmin*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *modoadmin*_
┊⋆⁺˖⸙̭❛☑️ _${usedPrefix}enable *antidelete*_
┊⋆⁺˖⸙̭❛❎ _${usedPrefix}disable *antidelete*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑹𝑬𝑷𝑶𝑹𝑻𝑨 𝑬𝑹𝑹𝑶𝑹𝑬𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛☏ _${usedPrefix}reporte *<texto>*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑶𝑷𝑪𝑰𝑶𝑵𝑬𝑺 𝑫𝑬 𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}instagram *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}mediafire *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}gitclone *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}gdrive *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}tiktok *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}tiktokimg *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}xnxxdl *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}xvideosdl *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}twitter *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}fb *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}ytshort *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}ytmp3 *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}ytmp4 *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}videodoc *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}dapk2 *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}stickerpack *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}play *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}play2 *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}play.1 *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}play.2 *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}playdoc *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}playdoc2 *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}playlist *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}spotify *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}ringtone *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}soundcloud *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}imagen *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}pinterest *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}wallpaper *<texto>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}pptiktok *<nombre de usuario>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}igstalk *<nombre de usuario>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}igstory *<nombre de usuario>*_
┊⋆⁺˖⸙̭❛⇅ _${usedPrefix}tiktokstalk *<username>*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}githubsearch *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}pelisplus *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}modapk *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}stickersearch *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}stickersearch2 *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}xnxxsearch *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}animeinfo *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}google *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}letra *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}wikipedia *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}ytsearch *<texto>*_
┊⋆⁺˖⸙̭❛ ⎙ _${usedPrefix}playstore *<texto>*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑶𝑷𝑪𝑰𝑶𝑵𝑬𝑺 𝑫𝑬 𝑮𝑹𝑼𝑷𝑶*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}add *<numero>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}kick *<@tag>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}kick2 *<@tag>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}listanum *<texto>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}kicknum *<texto>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}grupo *<abrir / cerrar>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}grouptime *<opcion> <tiempo>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}promote *<@tag>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}demote *<@tag>*_
┊⋆⁺˖⸙̭❛✦ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}demote *<@tag>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}infogroup_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}resetlink_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}link_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}setname *<texto>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}setdesc *<texto>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}invocar *<texto>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}setwelcome *<texto>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}setbye *<texto>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}hidetag *<texto>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}hidetag *<audio>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}hidetag *<video>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}hidetag *<imagen>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}warn *<@tag>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}unwarn *<@tag>*_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}listwarn_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}fantasmas_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}destraba_
┊⋆⁺˖⸙̭❛✦ _${usedPrefix}setpp *<imagen>*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}toanime *<imagen>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}togifaud *<video>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}toimg *<sticker>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}tomp3 *<video>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}tomp3 *<nota de voz>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}toptt *<video / audio>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}tovideo *<sticker>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}tourl *<video / imagen / audio>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}tts *<idioma> <texto>*_
┊⋆⁺˖⸙̭❛☘ _${usedPrefix}tts *<efecto> <texto>*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑳𝑶𝑮𝑶𝑺 𝒀 𝑬𝑭𝑬𝑪𝑻𝑶𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛🅓 _${usedPrefix}logos *<efecto> <texto>*_
┊⋆⁺˖⸙̭❛🅔 _${usedPrefix}logochristmas *<texto>*_
┊⋆⁺˖⸙̭❛🅒 _${usedPrefix}logocorazon *<texto>*_
┊⋆⁺˖⸙̭❛🅞 _${usedPrefix}ytcomment *<texto>*_
┊⋆⁺˖⸙̭❛🅡 _${usedPrefix}hornycard *<@tag>*_
┊⋆⁺˖⸙̭❛🅐 _${usedPrefix}simpcard *<@tag>*_
┊⋆⁺˖⸙̭❛🅒 _${usedPrefix}lolice *<@tag>*_
┊⋆⁺˖⸙̭❛🅘 _${usedPrefix}itssostupid_
┊⋆⁺˖⸙̭❛🅞 _${usedPrefix}pixelar_
┊⋆⁺˖⸙̭❛🅝 _${usedPrefix}blur_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑭𝑹𝑨𝑺𝑬𝑺 𝒀 𝑯𝑰𝑺𝑻𝑶𝑹𝑰𝑨𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛ੈ✩‧₊🥀 _${usedPrefix}piropo_
┊⋆⁺˖⸙̭❛ੈ✩‧₊ _${usedPrefix}consejo_
┊⋆⁺˖⸙̭❛ੈ✩‧₊ _${usedPrefix}fraseromantica_
┊⋆⁺˖⸙̭❛ੈ✩‧₊ _${usedPrefix}historiaromantica_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑨𝑵𝑰𝑴𝑬*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛➤ _${usedPrefix}menuanimes_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑨𝑳𝑬𝑨𝑻𝑶𝑹𝑰𝑶 - 𝑬𝑿𝑻𝑹𝑨𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}kpop *<blackpink / exo / bts>*_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}cristianoronaldo_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}messi_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}cat_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}dog_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}meme_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}itzy_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}blackpink_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}navidad_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}wpmontaña_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}pubg_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}wpgaming_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}wpaesthetic_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}wpaesthetic2_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}wprandom_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}wallhp_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}wpvehiculo_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}wpmoto_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}coffee_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}pentol_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}caricatura_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}ciberespacio_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}technology_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}doraemon_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}hacker_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}planeta_
┊⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}randomprofile_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑶𝑷𝑪𝑰𝑶𝑵𝑬𝑺 +18*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛-🔞 _${usedPrefix}labiblia_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑬𝑭𝑬𝑪𝑻𝑶𝑺 𝑷𝑨𝑹𝑨 𝑨𝑼𝑫𝑰𝑶*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊*- ℛ𝓔𝓢𝓟𝓞𝓝𝓓𝓔 𝓐 𝓤𝓝𝓐 𝓝𝓞𝓣𝓐 𝓓𝓔 𝓥𝓞𝓩 𝓞 𝓐𝓤𝓓𝓘𝓞*
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}bass_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}blown_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}deep_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}earrape_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}fast_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}fat_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}nightcore_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}reverse_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}robot_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}slow_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}smooth_
┊⋆⁺ː͡➘₊̣̇ _${usedPrefix}tupai_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑪𝑯𝑨𝑻𝑺 𝑨𝑵𝑶𝑵𝑰𝑴𝑶𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛⚉ _${usedPrefix}start_
┊⋆⁺˖⸙̭❛⚉ _${usedPrefix}next_
┊⋆⁺˖⸙̭❛⚉ _${usedPrefix}leave_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑺𝑶𝑵𝑰𝑫𝑶𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛𝄞 _${usedPrefix}menuaudios_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑼𝑻𝑰𝑳𝑰𝑫𝑨𝑫𝑬𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}inspect *<link wa_gc>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}chatgpt *<texto>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}delchatgpt
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}gptvoz *<texto>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}dall-e *<texto>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}readviewonce *<imagen / video>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}clima *<país> <ciudad>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}encuesta *<texto1|texto2...>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}afk *<motivo>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}ocr *<responde a imagen>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}hd *<responde a imagen>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}acortar *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}calc *<operacion math>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}del *<mensaje>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}whatmusic *<audio>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}readqr *<imagen (QR)>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}qrcode *<texto>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}readmore *<texto1| texto2>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}styletext *<texto>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}traducir *<texto>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}nowa *<numero>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}covid *<pais>*_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}horario_
┊⋆⁺˖⸙̭❛❧ _${usedPrefix}dropmail_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑹𝑷𝑮-𝑳𝑰𝑴𝑰𝑻𝑬𝑺-𝑬𝑪𝑶𝑵𝑶𝑴𝑰𝑨*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}adventure_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}cazar_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}cofre_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}balance_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}claim_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}heal_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}lb_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}levelup_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}myns_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}perfil_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}work_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}minar_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}minar2_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}buy_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}buyall_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}verificar_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}robar *<cantidad> <@tag>*_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┊⋆⁺˖⸙̭❛Ⱏ _${usedPrefix}unreg *<numero de serie>*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ *𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}sticker *<responder a imagen o video>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}sticker *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}sticker2 *<responder a imagen o video>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}sticker2 *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}s *<responder a imagen o video>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}s *<enlace / link / url>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}scircle *<imagen>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}sremovebg *<imagen>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}semoji *<tipo> <emoji>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}qc *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}attp *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}attp2 *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}attp3 *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}ttp *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}ttp2 *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}ttp3 *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}ttp4 *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}ttp5 *<texto>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}pat *<@tag>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}slap *<@tag>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}kiss *<@tag>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}dado_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}wm *<packname> <author>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}stickermarker *<efecto> <imagen>*_
┊⋆⁺˖⸙̭❛ᐕ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧

╭꒱≡≡≡≡≡╡✦✧✦✧✦✧╞≡≡≡≡♡
┊❥ ⌲ 𝑶𝑷𝑪𝑰𝑶𝑵𝑬𝑺 𝑫𝑬 𝑶𝑾𝑵𝑬𝑹-𝑴𝑶𝑫𝑬𝑹𝑨𝑫𝑶𝑹*
┊-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┊𒈞  > *<funcion>*
┊𒈞 => *<funcion>*
┊𒈞 $ *<funcion>*
┊𒈞 _${usedPrefix}setprefix *<prefijo>*_
┊𒈞 _${usedPrefix}resetprefix_
┊𒈞 _${usedPrefix}autoadmin_
┊𒈞 _${usedPrefix}grouplist_
┊𒈞 _${usedPrefix}chetar_
┊𒈞 _${usedPrefix}leavegc_
┊𒈞 _${usedPrefix}cajafuerte_
┊𒈞 _${usedPrefix}blocklist_
┊𒈞 _${usedPrefix}addowner *<@tag / numero>*_
┊𒈞 _${usedPrefix}delowner *<@tag / numero>*_
┊𒈞 _${usedPrefix}block *<@tag / numero>*_
┊𒈞 _${usedPrefix}unblock *<@tag / numero>*_
┊𒈞 _${usedPrefix}enable *restrict*_
┊𒈞 _${usedPrefix}disable *restrict*_
┊𒈞 _${usedPrefix}enable *autoread*_
┊𒈞 _${usedPrefix}disable *autoread*_
┊𒈞 _${usedPrefix}enable *public*_
┊𒈞 _${usedPrefix}disable *public*_
┊𒈞 _${usedPrefix}enable *pconly*_
┊𒈞 _${usedPrefix}disable *pconly*_
┊𒈞 _${usedPrefix}enable *gconly*_
┊𒈞 _${usedPrefix}disable *gconly*_
┊𒈞 _${usedPrefix}enable *anticall*_
┊𒈞 _${usedPrefix}disable *anticall*_
┊𒈞 _${usedPrefix}enable *antiprivado*_
┊𒈞 _${usedPrefix}disable *antiprivado*_
┊𒈞 _${usedPrefix}enable *modejadibot*_
┊𒈞 _${usedPrefix}disable *modejadibot*_
┊𒈞 _${usedPrefix}enable *audios_bot*_
┊𒈞 _${usedPrefix}disable *audios_bot*_
┊𒈞 _${usedPrefix}enable *antispam*_
┊𒈞 _${usedPrefix}disable *antispam*_
┊𒈞 _${usedPrefix}msg *<texto>*_
┊𒈞 _${usedPrefix}banchat_
┊𒈞 _${usedPrefix}unbanchat_
┊𒈞 _${usedPrefix}resetuser *<@tag>*_
┊𒈞 _${usedPrefix}banuser *<@tag>*_
┊𒈞 _${usedPrefix}unbanuser *<@tag>*_
┊𒈞 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┊𒈞 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┊𒈞 _${usedPrefix}banuser *<@tag>*_
┊𒈞 _${usedPrefix}bc *<texto>*_
┊𒈞 _${usedPrefix}bcchats *<texto>*_
┊𒈞 _${usedPrefix}bcgc *<texto>*_
┊𒈞 _${usedPrefix}bcgc2 *<audio>*_
┊𒈞 _${usedPrefix}bcgc2 *<video>*_
┊𒈞 _${usedPrefix}bcgc2 *<imagen>*_
┊𒈞 _${usedPrefix}bcbot *<texto>*_
┊𒈞 _${usedPrefix}cleartpm_
┊𒈞 _${usedPrefix}restart_
┊𒈞 _${usedPrefix}update_
┊𒈞 _${usedPrefix}banlist_
┊𒈞 _${usedPrefix}addprem *<@tag> <tiempo>*_
┊𒈞 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┊𒈞 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┊𒈞 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┊𒈞 _${usedPrefix}delprem *<@tag>*_
┊𒈞 _${usedPrefix}listcmd_
┊𒈞 _${usedPrefix}setppbot *<responder a imagen>*_
┊𒈞 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┊𒈞 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┊𒈞 _${usedPrefix}saveimage
┊𒈞 _${usedPrefix}viewimage
╰⌦≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈‧₊˚✧`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
