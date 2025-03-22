const { ezra } = require("../fredi/ezra");
const axios = require("axios");

ezra({ nomCom: "gpt5", reaction: "🌐", categorie: "QADEER NEW AI" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;

    try {
        if (!arg || arg.length === 0) {
            return repondre("براہ کرم ایک سوال پوچھیں۔");
        }

        const question = arg.join(' ');

        const responseApi = await axios.get(`https://test-api-apms.onrender.com/api/chatgpt?text=${encodeURIComponent(question)}&name=Kaizoku&prompt=${encodeURIComponent("Tu seras une IA d'un bot WhatsApp tres puissant du nom ✧⁠TOFAN-MD✧")}&apikey=BrunoSobrino`, {
            timeout: 5000 // زیادہ سے زیادہ 5 سیکنڈ میں جواب دے
        });

        const resultat = responseApi.data;
        if (resultat) {
            repondre(resultat.resultado);
        } else {
            repondre("جواب حاصل کرنے میں مسئلہ ہوا۔");
        }
    } catch (error) {
        console.error('Erreur:', error.message || 'ایک مسئلہ پیش آیا');
        repondre("معذرت، کچھ غلط ہو گیا ہے۔ براہ کرم دوبارہ کوشش کریں۔");
    }
});

