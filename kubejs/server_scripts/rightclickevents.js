BlockEvents.rightClicked('kubejs:oil_carpet', event => {

	if (event.item.id == 'minecraft:sponge') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function backrooms:oil_bubble`)
		event.cancel()
		}
	})

BlockEvents.rightClicked('kubejs:wallpaper1', event => {
  		const heldItem = event.item

  	if (heldItem && heldItem.hasTag('minecraft:axes')) {
		
    	const {hand, player} = event
    	player.damageHeldItem(hand, 1)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:item.axe.strip master @a ~ ~ ~ 1 1`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ kubejs:stripped_wallpaper`)
		event.player.giveInHand('kubejs:wallpaper')

		}
	})

BlockEvents.rightClicked('kubejs:wallpaper1', event => {

	if (event.item.id == 'kubejs:putty_knife') {
		
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:item.axe.strip master @a ~ ~ ~ 1 1`)
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ kubejs:stripped_wallpaper`)
		event.player.giveInHand('kubejs:wallpaper')

		}
	})

BlockEvents.rightClicked('kubejs:stripped_wallpaper', event => {

	if (event.item.id == 'kubejs:wallpaper') {
		event.item.count--
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run setblock ~ ~ ~ kubejs:wallpaper1`)
		}
	})

BlockEvents.rightClicked('kubejs:ceilling_lamp_off', event => {

	if (event.item.id == 'kubejs:fluorescent_tube') {
		event.item.count--
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function backrooms:lamp_restoration`)
		}
	})

BlockEvents.rightClicked('kubejs:reality_controller', event => {

	if (event.item.id == 'kubejs:data_chip1') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_cave`)
	}
	
	if (event.item.id == 'kubejs:data_chip2') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_nether`)
	}

	if (event.item.id == 'kubejs:data_chip3') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_osmium`)
	}

	if (event.item.id == 'kubejs:data_chip4') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_grass`)
	}

	if (event.item.id == 'kubejs:data_chip5') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_diamonds`)
	}

	if (event.item.id == 'kubejs:data_chip6') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_blaze`)
	}

	if (event.item.id == 'kubejs:data_chip7') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_pyramid`)
	}

	if (event.item.id == 'kubejs:data_chip8') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_end`)
	}

	if (event.item.id == 'kubejs:data_chip9') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_room`)
	}

	if (event.item.id == 'kubejs:data_chip10') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_portal`)
	}

	if (event.item.id == 'kubejs:data_chip_error') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_error`)
	}

	if (event.item.id == 'kubejs:data_chip_infinity') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~1 ~ kubejs:reality_charge run function backrooms:reality_black_hole`)
	}
})

BlockEvents.rightClicked('minecraft:sculk', event => {
	if (event.item.id == 'kubejs:sculk_scrubber') {
		event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk_scrubber","color":"white"}`)
		event.cancel()
	}
})

BlockEvents.rightClicked('minecraft:sculk', event => {
	if (event.item.id != 'kubejs:sculk_scrubber') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
		event.cancel()
	}
})
BlockEvents.rightClicked('kubejs:sculk_tendrils', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
	event.cancel()
})
BlockEvents.rightClicked('minecraft:sculk_vein', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
	event.cancel()
})
BlockEvents.rightClicked('minecraft:sculk_sensor', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
	event.cancel()
})
BlockEvents.rightClicked('minecraft:sculk_shrieker', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
	event.cancel()
})
BlockEvents.rightClicked('kubejs:sculk_shroom', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
	event.cancel()
})
BlockEvents.rightClicked('kubejs:sculk_slab', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
	event.cancel()
})
BlockEvents.rightClicked('kubejs:sculk_stairs', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
	event.cancel()
})
BlockEvents.rightClicked('minecraft:spawner', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"translate":"tip.right_click.sculk","color":"white"}`)
	event.cancel()
})

BlockEvents.rightClicked('kubejs:sculk_scrubber', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~-1 ~ minecraft:sculk run summon marker ~ ~ ~ {Tags:["scrubber"]}`)
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} unless block ~ ~-1 ~ minecraft:sculk run title @a[distance=..5] actionbar {"translate":"tip.right_click.scrubber","color":"white"}`)
})

BlockEvents.rightClicked('eidolon:shadow_gem_block', event => {
	if (event.item.id == 'create:chromatic_compound') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function backrooms:shadow_conversion`)
		event.item.count--
		event.player.give('create:shadow_steel')
	}
})

BlockEvents.rightClicked('create:experience_block', event => {
	if (event.item.id == 'minecraft:enchanted_book') {
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function backrooms:cryptic_levelup`)
		event.item.count--
		event.player.give('minecraft:book')
	}
})

BlockEvents.rightClicked(/.*/, event => {

	if (event.item.id == 'tconstruct:magma_bucket') {
		event.item.count--
		event.player.give('minecraft:bucket')

		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run summon magma_cube ~ ~1 ~ {Health:1f,Size:0}`)
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:item.bucket.empty_lava master @a ~ ~ ~ 1 0`)
		event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run particle lava ~ ~ ~ 0 0 0 0.5 10 force`)
	}

	if (event.item.id == 'miners_delight:copper_cup') {
		event.cancel()
	}
})

BlockEvents.broken('cfm_circuit_breaker:circuit_breaker', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run function backrooms:powerhouse_depower`)
})

BlockEvents.broken('mekanism:radioactive_waste_barrel', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if entity @e[tag=radioactive_waste_barrel,distance=..1] run function backrooms:radiation_barrel`)
})

ItemEvents.rightClicked('minecraft:lava_bucket', event => {
    if( event.item.count > 1){
		event.cancel()
	}
})

BlockEvents.rightClicked('kubejs:wall_destroyer', event => {
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~ ~ kubejs:wall_destroyer[facing=north] unless block ~ ~ ~1 minecraft:air if block ~ ~ ~2 kubejs:wall_destroyer[facing=south] positioned ~ ~ ~1 run function backrooms:wall_break`)
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~ ~ kubejs:wall_destroyer[facing=south] unless block ~ ~ ~-1 minecraft:air if block ~ ~ ~-2 kubejs:wall_destroyer[facing=north] positioned ~ ~ ~-1 run function backrooms:wall_break`)

	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~ ~ kubejs:wall_destroyer[facing=west] unless block ~1 ~ ~ minecraft:air if block ~2 ~ ~ kubejs:wall_destroyer[facing=east] positioned ~1 ~ ~ run function backrooms:wall_break`)
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~ ~ kubejs:wall_destroyer[facing=east] unless block ~-1 ~ ~ minecraft:air if block ~-2 ~ ~ kubejs:wall_destroyer[facing=west] positioned ~-1 ~ ~ run function backrooms:wall_break`)

	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~ ~ kubejs:wall_destroyer[facing=down] unless block ~ ~1 ~ minecraft:air if block ~ ~2 ~ kubejs:wall_destroyer[facing=up] positioned ~ ~1 ~ run function backrooms:wall_break`)
	event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} if block ~ ~ ~ kubejs:wall_destroyer[facing=up] unless block ~ ~-1 ~ minecraft:air if block ~ ~-2 ~ kubejs:wall_destroyer[facing=down] positioned ~ ~-1 ~ run function backrooms:wall_break`)
})