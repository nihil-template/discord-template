import type { Interaction } from 'discord.js';
import type { CommandConfig, CommandResult } from 'robo.js';

export const config: CommandConfig = {
  description: '응답 시간을 반환합니다.',
};

export default (interaction: Interaction): CommandResult => {
  return `${interaction.client.ws.ping}ms`;
};
