mario_behavior equ 0x00800000 //ram offset of mario behav. do not include 0x80 at beginning!

.n64
.create "0x802000.bin",0
.headersize 0x80245000

pointer_code:
ADDIU SP, SP, 0xFFE8
SW RA, 0x14(SP)

LI T0, 0x80803000

cmdLoop:

LW T1, 0x0000(T0)
SUBIU T2, R0, 0x01
BNE T1, T2, afterSpawnMario

LW T3, 0x0004(T0)
BEQZ T3, afterRespawnMario
NOP

SH R0, 0x74(T3)

afterRespawnMario:
SW T0, 0x10(SP)
SW R0, 0x0000(T0)

LUI A0, 0x8036
LW A0, 0x1158(A0)
ORI A1, R0, 0x0
LI A3, mario_behavior
JAL 0x8029ED20
ORI A2, R0, 0x01

LUI T3, 0x468C
SW T3, 0xA0(V0)
SW T3, 0xA8(V0)
LUI T3, 0xC66C
SW T3, 0xA4(V0)

LW T0, 0x10(SP)
SW V0, 0x4(T0)

LI T1, 0x80060030
SW T1, 0x3C(V0)

afterSpawnMario:

LW T1, 0x0000(T0)
SUBIU T2, R0, 0x02
BNE T1, T2, afterDespawnMario

LW T3, 0x0004(T0)
BNEZ T3, afterReDespawnMario
NOP

B afterDespawnMario

afterReDespawnMario:

SW R0, 0x0000(T0)
LW A0, 0x0004(T0)
SH R0, 0x74(A0)
SW R0, 0x0004(T0)

afterDespawnMario:

ADDIU T0, T0, 0x0008
LI T2, 0x808030B0
BLT T0, T2, cmdLoop
NOP

LW A0, 0x80361158
LW A1, 0x78(A0)
BEQZ A1, end
NOP
LW T2, 0x20C(A1)
LI T3, 0x80800000 //check if mario puppet exists/collided with
BNE T2, T3, end
NOP

JAL 0x8029E27C
NOP

LI.S F1, 100
C.LT.S F1, F0
LUI T0, 0x8036
BC1T end
LW A0, 0x1158(T0)
LW A1, 0x78(A0) //radius check

JAL 0x8029E2F8
NOP

LI.S F1, 180
C.LT.S F1, F0
LUI T0, 0x8036
BC1T end
LW T0, 0x1158(T0)
LW T1, 0x78(T0) //dist check

LWC1 F2, 0xB0(T0)
MTC1 R0, F3
C.LE.S F2, F3
LUI T5, 0x8034
BC1F end
LUI T6, 0x0100

LWC1 F1, 0xA4(T0)
LWC1 F2, 0xA4(T1) //speed <= 0 check
LI.S F3, 120
ADD.S F2, F2, F3
C.LT.S F1, F2
ORI T6, T6, 0x0882
BC1T end
LUI T7, 0x4248 //height to puppet >150 check

SW T6, 0xB17C(T5)
SW T7, 0xB1BC(T5) //bounce

SW R0, 0x78(T0)

end:

LW RA, 0x14(SP)
JR RA
ADDIU SP, SP, 0x18
