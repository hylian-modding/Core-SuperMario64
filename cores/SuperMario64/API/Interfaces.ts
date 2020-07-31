import * as apiBit from './Bitmaps';
import * as apiEnum from './Enums';
import { ICommandBuffer } from './ICommandBuffer';

// ##################################################################
// ##  Sub-Classes
// ##################################################################

export interface IBuffered {
  get_all(): Buffer;
  set_all(value: Buffer): void;
  get_bit(flag: number): boolean;
  set_bit(flag: number, value: boolean): void;
  get(offset: number): number;
  set(offset: number, value: number): void;
}

// ##################################################################
// ##  Primary-Classes
// ##################################################################

export interface IPlayer {
  exists: boolean;
  animation_id: number;
  animation_frame: number;
  animation_block_data: Buffer 
  cap: number;
  position: Buffer;
  pos_x: number;
  pos_y: number;
  pos_z: number;
  rotation: Buffer;
  rot_x: number;
  rot_y: number;
  rot_z: number;
  translucency: number;
  visible: boolean;
  y_offset: number;

  get_animation(id: number): Buffer | undefined;
}

export interface IRuntime {
  get_current_profile(): number;
  get_current_scene(): number;
  get_is_paused(): boolean;
  star_count: number;
}

export interface ISM64Core {
  player: IPlayer;
  runtime: IRuntime;
  save: IBuffered[];
  version: apiEnum.GameVersion;
  commandBuffer: ICommandBuffer;
}