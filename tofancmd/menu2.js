const util = require('util');
const fs = require('fs-extra');
const { ezra } = require(__dirname + "/../fredi/ezra");
const { format } = require(__dirname + "/../fredi/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

ezra({ nomCom: "menu2", categorie: "A-Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../fredi/ezra");
    let coms = {};
    let mode = (s.MODE.toLowerCase() === "yes") ? "🌐 Public" : "🔒 Private";

    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Asia/Karachi');
    const temps = moment().format('hh:mm A');
    const date = moment().format('dddd, MMMM Do YYYY');

    let infoMsg = `
╭───〔 *📋 TOFAN-MD DASHBOARD* 〕───╮
│👑 Owner        : ${s.OWNER_NAME}
│🔣 Prefix       : [ ${s.PREFIXE} ]
│🌍 Mode         : ${mode}
│📅 Date         : ${date}
│⏰ Time         : ${temps}
│💾 RAM Usage    : 8/132 GB
│💻 Platform     : ${os.platform()}
│🧠 Creator      : Qadeer Khan
│📦 Commands     : ${cm.length}
╰──────────────────────────────╯${readmore}
`;

    let menuMsg = `\n╭───────〔 *📚 COMMAND CATEGORIES* 〕───────╮\n`;

    for (const cat in coms) {
        menuMsg += `│\n│ 📂 *${cat.toUpperCase()}*\n│`;
        for (const cmd of coms[cat]) {
            menuMsg += `\n│ ├─ ⚡ ${s.PREFIXE}${cmd}`;
        }
        menuMsg += `\n│ └──────────────────────────────`;
    }

    menuMsg += `\n╰───〔 🔧 *Powered by TOFAN-MD* 🔧 〕───╯`;

    try {
        const senderName = nomAuteurMessage || message.from;
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "TOFAN-MD | AI Based Assistant",
                    body: "Click here to explore more commands!",
                    thumbnailUrl: "https://qu.ax/NfJZk.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029Vaw6yRaBPzjZPtVtA80A",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu2 error: ", error);
        repondre("❌ Menu2 Error: " + error);
    }
});
