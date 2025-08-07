ServerEvents.recipes(event => {

		event.shapeless(Item.of('kubejs:data_chip1', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip1.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip10'])
		event.shapeless(Item.of('kubejs:data_chip2', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip2.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip1']).id("backrooms:data_chip_2")
		event.shapeless(Item.of('kubejs:data_chip3', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip3.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip2'])
		event.shapeless(Item.of('kubejs:data_chip4', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip4.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip3'])
		event.shapeless(Item.of('kubejs:data_chip5', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip5.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip4'])
		event.shapeless(Item.of('kubejs:data_chip6', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip6.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip5'])
		event.shapeless(Item.of('kubejs:data_chip7', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip7.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip6'])
		event.shapeless(Item.of('kubejs:data_chip8', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip8.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip7'])
		event.shapeless(Item.of('kubejs:data_chip9', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip9.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip8'])
		event.shapeless(Item.of('kubejs:data_chip10', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip10.tooltip\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}']}}"), ['kubejs:data_chip9'])


		event.recipes.create.splashing([Item.of('kubejs:data_chip_error', "{display:{Lore:['{\"translate\":\"item.kubejs.data_chip_error.tooltip\",\"color\":\"red\",\"italic\":false,\"obfuscated\":true}']}}")],
			'kubejs:data_chip1')

		event.shaped('16x kubejs:reality_frame', [
			'AAA',
			'CBC',
			'AAA'  
			],{
			A: 'kubejs:reality_alloy',
			B: 'ae2:spatial_pylon',
			C: 'ae2:fluix_glass_cable'
		})

		event.shaped('kubejs:reality_controller', [
			'AEA',
			'BCB',
			'ADA'  
			],{
			A: 'kubejs:reality_alloy',
			B: 'immersiveengineering:component_electronic_adv',
			C: 'ae2:semi_dark_monitor',
			D: 'ae2:controller',
			E: 'ae2:spatial_cell_component_16'
		})

		event.shaped('kubejs:reality_charge_empty', [
			'A A',
			' B ',
			'A A'  
			],{
			A: 'kubejs:reality_alloy',
			B: 'create:fluid_tank'
		})

		event.shaped('kubejs:data_chip1', [
			'   ', 
			'ABC', 
			'   '  
		  	], {
			A: 'immersiveengineering:component_electronic_adv', 
			B: 'ae2:memory_card',  
			C: 'ae2:spatial_cell_component_2'   
		}).id("backrooms:data_chip_1")

		event.shaped('kubejs:data_chip_infinity', [
			'ABC', 
			'FDE',
			'   '  
			],{
			A: 'kubejs:overclocked_clock', 
			B: 'kubejs:data_chip1',
			C: 'ae2:singularity',
			D: 'immersiveengineering:wirecoil_redstone', 
			E: 'immersiveengineering:wirecutter', 
			F: 'mekanism:ingot_refined_obsidian'
		}).id("backrooms:data_chip_infinity")

		event.replaceInput({output: 'botania:terra_plate'}, 'botania:manasteel_block', 'actuallyadditions:empowered_palis_crystal')

})