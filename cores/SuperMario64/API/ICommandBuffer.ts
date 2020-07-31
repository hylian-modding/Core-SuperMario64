export const enum CMD {
  EMPTY = 0x00000000,
  SPAWN = 0xFFFFFFFF,
  DESPAWN = 0xFFFFFFFE,
}

export interface ICommandBuffer {
  runCommand(command: CMD, index: number, callback?: Function): void;
}
