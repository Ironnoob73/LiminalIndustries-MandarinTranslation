fill ~-10 ~-10 ~-10 ~10 ~10 ~10 air replace minecraft:nether_portal
fill ~-10 ~-10 ~-10 ~10 ~10 ~10 air replace minecraft:obsidian

tellraw @a[distance=..3] {"translate":"chat.out_of_backrooms.0","color":"dark_purple"}
tellraw @a[distance=..3] {"translate":"chat.out_of_backrooms.1","color":"dark_purple"}
tellraw @a[distance=..3] {"translate":"chat.out_of_backrooms.2","color":"dark_purple"}

tp @a[distance=..3] -1000 22 -1000