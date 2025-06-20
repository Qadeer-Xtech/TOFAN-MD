const util = require('util');
const fs = require('fs-extra');
const { ezra } = require(__dirname + "/../fredi/ezra");
const { format } = require(__dirname + "/../fredi/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

ezra({ nomCom: "menu", categorie: "A-Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, arg } = commandeOptions;
    let { cm } = require(__dirname + "/../fredi/ezra");
    let coms = {};
    let categories = [];

    // Group commands by category
    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
            categories.push(com.categorie);
        }
        coms[com.categorie].push(com.nomCom);
    });

    // Reply with category commands if number is sent
    if (arg && arg[0] && !isNaN(arg[0])) {
        const index = parseInt(arg[0]) - 1;
        const selectedCat = categories[index];

        if (!selectedCat) return repondre("❌ Invalid category number.");

        let replyMsg = `📂 *${selectedCat.toUpperCase()} Commands*\n\n`;

        coms[selectedCat].forEach(cmd => {
            replyMsg += `- ${prefixe}${cmd}\n`;
        });

        return repondre(replyMsg.trim());
    }

    // Default: Show categories only
    let mode = (s.MODE.toLowerCase() === "yes") ? "🌐 Public" : "🔒 Private";
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

    let menuMsg = `\n╭──────〔 *📚 COMMAND CATEGORIES* 〕──────╮\n`;
    categories.forEach((cat, index) => {
        menuMsg += `│ ${index + 1}. ${cat}\n`;
    });
    menuMsg += `╰─ Reply with a number (e.g. 1) to view commands.\n`;

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
        console.error("Menu error: ", error);
        repondre("❌ Menu Error: " + error);
    }
});
