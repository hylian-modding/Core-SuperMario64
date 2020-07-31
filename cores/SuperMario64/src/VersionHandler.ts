import * as API from '../API/Imports';

export namespace VersionHandler {
	export function load_jp_1_0() {
		// Player Data
		// global.ModLoader[API.AddressType.PLAYER] = 0x361158;

		// // Runtime Data
		// global.ModLoader[API.AddressType.CURRENT_PROFILE] = 0x32ddf5;
		// global.ModLoader[API.AddressType.CURRENT_SCENE] = 0x32ddf8;
		// global.ModLoader[API.AddressType.PAUSE_SCREEN] = 0x3314f8;
		// global.ModLoader[API.AddressType.STAR_COUNT] = 0x33b21a;

		// Save Data        
		// global.ModLoader[API.AddressType.FILE_A] = 0x207700;
		// global.ModLoader[API.AddressType.FILE_B] = 0x207770;
		// global.ModLoader[API.AddressType.FILE_C] = 0x2077e0;
		// global.ModLoader[API.AddressType.FILE_D] = 0x207850;
	}

	export function load_pal_1_0() {
		// Player Data
		// global.ModLoader[API.AddressType.PLAYER] = 0x361158;

		// // Runtime Data
		// global.ModLoader[API.AddressType.CURRENT_PROFILE] = 0x32ddf5;
		// global.ModLoader[API.AddressType.CURRENT_SCENE] = 0x32ddf8;
		// global.ModLoader[API.AddressType.PAUSE_SCREEN] = 0x3314f8;
		// global.ModLoader[API.AddressType.STAR_COUNT] = 0x33b21a;

		// Save Data        
		// global.ModLoader[API.AddressType.FILE_A] = 0x207700;
		// global.ModLoader[API.AddressType.FILE_B] = 0x207770;
		// global.ModLoader[API.AddressType.FILE_C] = 0x2077e0;
		// global.ModLoader[API.AddressType.FILE_D] = 0x207850;
	}

	export function load_usa_1_0() {
		// Player Data
		global.ModLoader[API.AddressType.PLAYER] = 0x361158;

		// // Runtime Data
		global.ModLoader[API.AddressType.CURRENT_PROFILE] = 0x32ddf5;
		global.ModLoader[API.AddressType.CURRENT_SCENE] = 0x32ddf8;
		global.ModLoader[API.AddressType.PAUSE_SCREEN] = 0x3314f8;
		global.ModLoader[API.AddressType.STAR_COUNT] = 0x33b21a;

		// Save Data        
		global.ModLoader[API.AddressType.FILE_A] = 0x207700;
		global.ModLoader[API.AddressType.FILE_B] = 0x207770;
		global.ModLoader[API.AddressType.FILE_C] = 0x2077e0;
		global.ModLoader[API.AddressType.FILE_D] = 0x207850;
	}
}
