import * as API from '../API/Imports';

export class Runtime extends API.BaseObj implements API.IRuntime {
    private cur_prof_addr = global.ModLoader[API.AddressType.CURRENT_PROFILE];
    private cur_scene_addr = global.ModLoader[API.AddressType.CURRENT_SCENE];
    private pause_addr = global.ModLoader[API.AddressType.PAUSE_SCREEN];
    private star_count_addr = global.ModLoader[API.AddressType.STAR_COUNT];
  
    get_current_profile(): number {
        return this.emulator.rdramRead8(this.cur_prof_addr) - 1;
    }
  
    get_current_scene(): number {
        return this.emulator.rdramRead16(this.cur_scene_addr);
    }

    get_is_paused(): boolean {
        return this.emulator.rdramRead16(this.pause_addr) === 0x0001;
    }
  
    get star_count(): number {
        return this.emulator.rdramRead16(this.star_count_addr);
    }
    set star_count(val: number) {
        this.emulator.rdramWrite16(this.star_count_addr, val);
    }
  }