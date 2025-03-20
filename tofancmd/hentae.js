const { ezra } = require('../fredi/ezra');
const gis = require('g-i-s');
const axios = require('axios');
const conf = require(__dirname + '/../set');
ezra({
  nomCom: "screenswidth",
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan  Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/width/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "screenscrop",
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/crop/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "maxage",
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/maxAge/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "jpg",
  categorie: "tak-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/allowJPG/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "png",
  aliases: ["ss", "sshot"],
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/png/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "noanimate",
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/noanimate/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "wait",
  aliases: ["ss", "sshot"],
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot take by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/wait/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "viewportwidth",
  aliases: ["ss", "sshot"],
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/viewportWidth/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "iphone5",
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/iphone5/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "iphone6",
  aliases: ["ss", "sshot"],
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/iphone6/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "iphone6plus",
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/iphone6plus/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "iphoneX",
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/iphoneX/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "iphone12pro",
  aliases: ["ss", "sshot"],
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/iphone12pro/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "iphone14promax",
  aliases: ["ss", "sshot"],
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/iphone14promax/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "galaxys5",
  aliases: ["ss", "sshot"],
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/galaxys5/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});
ezra({
  nomCom: "screenshot",
  aliases: ["ss", "sshot"],
  categorie: "take-screenshots",
  reaction: "🎞️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  try {
    // Caption for the screenshot
    const cap = `*Screenshot taken by Tofan Md*`;

    // Check if a URL is provided
    if (!arg[0]) {
      return repondre('Please insert a website link to take a screenshot!');
    }

    // Construct the screenshot URL
    const image = `https://image.thum.io/get/fullpage/${arg[0]}`;

    // Send the screenshot image with the caption
    await zk.sendMessage(dest, {
      image: { url: image },
      caption: cap
    }, { quoted: ms });

  } catch (error) {
    // Log the error and notify the user with a formatted error message
    console.error(error);
    repondre(`An error occurred while processing the screenshot: ${error.message}`);
  }
});

ezra({
  nomCom: "imgs",
  aliases: ["image", "images"],
  categorie: "mod-image",
  reaction: "📷"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Which image?');
    return;
  }

  const searchTerm = arg.join(" ");
  gis(searchTerm, (error, results) => sendImage(error, results));

  function sendImage(error, results) {
    if (error) {
      repondre("Oops, an error occurred.");
      return;
    }

    if (!results || results.length === 0) {
      repondre("No images found.");
      return;
    }

    for (let i = 0; i < Math.min(results.length, 5); i++) {
      zk.sendMessage(dest, {
        image: { url: results[i].url },
        caption: `*Downloaded by ${conf.BOT}*`,
        contextInfo: {
          externalAdReply: {
            title: "Image Search Result",
            body: `Here's the image you searched for: ${searchTerm}`,
            thumbnailUrl: results[i].url,
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true
          }
        }
      }, { quoted: ms });
    }
  }
});
