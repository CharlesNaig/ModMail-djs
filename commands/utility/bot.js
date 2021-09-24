const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class botCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "bot",
      group: "utility",
      memberName: "bot",
      description: "General & technical bot information",
      throttling: {
        usages: 2,
        duration: 5,
      },
    });
  }

  async run(message) {
    message.say({
      embed: {
        color: 6684813,
        author: {
          name: "hatry4",
          icon_url: "https://cdn.discordapp.com/avatars/573709909594734603/a_0373a1af50110d31994c48b66ceaeec2.gif?size=128",
          url: "https://github.com/hatry4",
        },
        description: "Bot by [hatry4](https://github.com/hatry4).",
        fields: [
          {
            name: "Prefix",
            value: `\`${this.client.config.prefix}\``,
            inline: true,
          },
          {
            name: "Version",
            value: `\`${require("../../package.json").version}\``,
            inline: true,
          },
          {
            name: "Config File Version",
            value: `\`${this.client.config.version}\``,
            inline: true,
          },
          {
            name: "Tagpuan PH",
            value: "https://discord.gg/tagpuanph",
          },
        ],
      },
    });
  }
};
