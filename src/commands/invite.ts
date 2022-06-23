import { Command } from '@guildedjs/gil';
import { Message } from 'guilded.js';

export default class BotCommand extends Command {
  name = 'invite';

  aliases = ['join', 'inv'];

  cooldown = {
    seconds: 3,
    allowedUses: 1,
  };

  async execute(message: Message) {
    return message.reply(
      [
        '**Invite Link:** N/a',
        '**Support Server:** https://www.guilded.gg/ZAD',
      ].join('\n'),
    );
  }

  init() {}
}
