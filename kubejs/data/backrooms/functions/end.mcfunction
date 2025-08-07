execute as @a[tag=!finished] at @s if dimension minecraft:the_end run spreadplayers ~ ~ 5 10 false @s

execute as @a[tag=!finished] at @s if dimension minecraft:the_end run playsound minecraft:ui.toast.challenge_complete master @s ~ ~ ~ 1 0
execute as @a[tag=!finished] at @s if dimension minecraft:the_end run playsound minecraft:music.overworld.meadow master @s ~ ~ ~ 1 1
execute as @a[tag=!finished] at @s if dimension minecraft:the_end run title @s title {"translate":"escaped.title","bold":true,"color":"gold"}
execute as @a[tag=!finished] at @s if dimension minecraft:the_end run title @s title {"translate":"escaped.title","bold":true,"color":"gold"}
execute as @a[tag=!finished] at @s if dimension minecraft:the_end run title @s subtitle {"translate":"escaped.subtitle","bold":true,"color":"yellow"}
execute as @a[tag=!finished] at @s if dimension minecraft:the_end run gamerule doDaylightCycle true

execute as @a[tag=!finished] at @s if dimension minecraft:the_end run tag @s add finished