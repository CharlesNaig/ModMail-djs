const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class botCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "helps",
      group: "utility",
      memberName: "helps",
      description: "Command list",
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
          name: "Tagpuan PH",
          icon_url: "https://cdn.discordapp.com/avatars/842674345733390376/eff58048eec9a11056933db2263f1624.png?size=128",
          url: "",
        },
        description: "[Tagpuan PH](https://discord.gg/tagpuanph) Command list",
        fields: [
          {
            name: "Utility",
            value: `__about , bot , discord , hire , helps__`,
            inline: false,
          },
          {
            name: "Info",
            value: `__userinfo , serverinfo__`,
            inline: false,
          },
          {
            name: "Fun",
            value: `__suggest , welcome , search , wiki , npm , github , djs__`,
            inline: false,
          },
          {
            name: "Settings",
            value: `__setprefix , setrole__`,
            inline: false,
          },
          {
            name: "Mods",
            value: `||__block , editsay , lock , open , say , snippets , embed , membercount__||`,
            inline: false,
          },
          {
            name: "Admins",
            value: `||__announce , dmail , makeinv , modules , sendfile__||`,
            inline: false,
          },
          {
            name: "Moderation",
            value: `||__ban , kick , mute , purge ,tempban , tempmute , unban , unmute__||`,
            inline: false,
          },
        ],
      },
    });
  }
};
