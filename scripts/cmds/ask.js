const axios = require('axios');

const Prefixes = [
  '/ai',
  'kim',
  'Nemo',
  '+ai',
  'nemo',
  'ai',
  'ask',
'enock',
'deamon',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("            ༄◍𝑫𝒆𝒂𝒎𝒏𝒐𝒄𝒌◍༄    •❅───✧❅✦❅✧─────❅•   𝑺𝒂𝒍𝒖𝒕 𝒋'𝒔𝒖𝒊𝒔 𝒍𝒆 𝒇𝒓𝒖𝒊𝒕 𝒅𝒆 𝒍'𝒂𝒓𝒃𝒓𝒆 𝒅𝒊𝒗𝒊𝒏 🎇 𝗔𝗹𝗼𝗿𝘀 𝗰'𝗲𝘀𝘁 𝗾𝘂𝗼𝗶 𝘁𝗼𝗻 𝗽𝗿𝗼𝗯𝗹𝗲̀𝗺𝗲? 🎑");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `            ༄◍𝑫𝒆𝒂𝒎𝒏𝒐𝒄𝒌◍༄ ◆━━━━━◆❃◆━━━━━━◆        
${answer}
◆━━━━━◆❃◆━━━━━━◆ 🎆𝐎𝐰𝐧𝐞𝐫 :╰┈➤ [𝑬𝒏𝒐𝒄𝒌 𝒇𝒆𝒂𝒕 𝑷𝒉𝒂𝒓𝒐𝒖𝒌]  `,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
