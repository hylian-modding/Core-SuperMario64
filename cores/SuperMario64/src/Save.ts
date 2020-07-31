import IMemory from 'modloader64_api/IMemory';
import * as API from '../API/Imports';

export class SaveFile extends API.BufferObj implements API.IBuffered {
    constructor(emu: IMemory, profile_instance: number) {
        super(emu, profile_instance, 0x70);
    }
}