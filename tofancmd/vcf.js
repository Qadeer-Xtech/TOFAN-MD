const { ezra } = require("../qadeer/ezra");
const fs = require('fs-extra');
const conf = require('../set');
const { default: axios } = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const gis = require('g-i-s');

ezra({
  'nomCom': 'apk',
  'aliases': ['app', 'playstore'],
  'reaction': '🉑',
  'categorie': 'Download'
}, async (groupId, client, context) => {
  const { repondre, arg, ms } = context;

  try {
    const appName = arg.join(" ");
    if (!appName) {
      return repondre("Please provide an app name.");
    }

    const searchResponse = await axios.get(`https://bk9.fun/search/apk?q=${appName}`);
    const searchData = searchResponse.data;

    if (!searchData.BK9 || searchData.BK9.length === 0) {
      return repondre("No app found with that name, please try again.");
    }

    const appDetailsResponse = await axios.get(`https://bk9.fun/download/apk?id=${searchData.BK9[0].id}`);
    const appDetails = appDetailsResponse.data;

    if (!appDetails.BK9 || !appDetails.BK9.dllink) {
      return repondre("Unable to find the download link for this app.");
    }

    const details = appDetails.BK9;
    const captionText = `✧⁠TOFAN-MD✧
    
*Name:* ${details.name || "N/A"}
*Size:* ${details.size || "N/A"}
*Version:* ${details.version || "N/A"}
*Updated:* ${details.updated || "N/A"}
*Package:* ${details.packagename || "N/A"}
*Developer:* ${details.developer || "N/A"}
*Download Link:* Available Below`;

    await client.sendMessage(
      groupId,
      {
        document: { url: details.dllink },
        fileName: `${details.name}.apk`,
        mimetype: "application/vnd.android.package-archive",
        caption: captionText
      },
      { quoted: ms }
    );

  } catch (error) {
    console.error("Error during APK download process:", error);
    repondre("APK download failed. Please try again later.");
  }
});
