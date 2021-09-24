const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class botCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "hire",
      group: "utility",
      memberName: "hire",
      description: "Application to be staff",
      throttling: {
        usages: 2,
        duration: 3,
      },
    });
  }

  async run(message) {
    message.say({
      embed: {
        color: 6684813,
        author: {
          name: "Application Form",
          icon_url: "https://cdn.discordapp.com/attachments/850595860495859762/852099402386243594/VID_20210511181-1620728835706.gif?size=128",
          url: "",
        },
        description: "[Tagpuan PH](https://discord.gg/tagpuanph)",
        fields: [
          {
            name: "Application form",
            value: `https://forms.gle/LpQzM764tAUvmx2t6`,
            inline: false,
          },
          {
            name: "Intervivew Chat",
            value: `<#855794078775509012>`,
            inline: false,
          },
          {
            name: "Interview Vc's",
            value: `<#853783272717680660>\n<#853783348166131792>\n<#853783503208185856>\n<#853783683478323220>\n<#853783768183734272>`,
            inline: false,
          },
        ],
      },
    });
  }
};
