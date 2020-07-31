pointer_code equ 0x80802000 //ram offset of the pointer function i wrote
copied_code equ 0x80801000 //ram offset of the code you guys are copying from the debug function

.n64
.create "0x2CB1C0.bin",0

ADDIU SP, SP, 0xFFE8
SW RA, 0x14(SP)

JAL pointer_code
NOP

JAL copied_code
NOP

end:

LW RA, 0x14(SP)
JR RA
ADDIU SP, SP, 0x18
