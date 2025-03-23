const { ezra } = require("../fredi/ezra");
const axios = require("axios");

const OPENAI_API_KEY = "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"; // یہاں اپنی نئی محفوظ API Key ڈالیں

ezra({ nomCom: "gpt5", reaction: "🌐", categorie: "QADEER NEW AI" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg } = commandeOptions;

    try {
        if (!arg || arg.length === 0) {
            return repondre("براہ کرم ایک سوال پوچھیں۔");
        }

        const question = arg.join(' ');

        const responseApi = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo", // آپ چاہیں تو "gpt-4" بھی استعمال کر سکتے ہیں
                messages: [{ role: "user", content: question }],
                temperature: 0.7
            },
            {
                headers: {
                    "Authorization": `Bearer ${OPENAI_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const resultat = responseApi.data;
        if (resultat && resultat.choices && resultat.choices[0].message.content) {
            repondre(resultat.choices[0].message.content);
        } else {
            repondre("جواب حاصل کرنے میں مسئلہ ہوا۔");
        }
    } catch (error) {
        console.error('Erreur:', error.message || 'ایک مسئلہ پیش آیا');
        repondre("معذرت، کچھ غلط ہو گیا ہے۔ براہ کرم دوبارہ کوشش کریں۔");
    }
});
