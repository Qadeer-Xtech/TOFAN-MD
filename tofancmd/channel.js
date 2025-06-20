"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ezra } = require("../fredi/ezra");

ezra(
  {
    nomCom: "channel",
    reaction: "💐",
    nomFichier: __filename,
  },
  async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");

    let z = "Salut je m'appelle *TOFAN_MD* \n\n je suis un bot Whatsapp Multi-appareil voici la chaîne";
    let d = " développé par *Qadeer*";
    let varmess = z + d;

    let lien = "https://whatsapp.com/channel/0029Vaw6yRaBPzjZPtVtA80A"; // Replace if needed

    await zk.sendMessage(dest, {
      text: varmess + "\n" + lien,
    });
  }
);

console.log("mon test");
