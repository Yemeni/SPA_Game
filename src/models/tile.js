var app = app || {}; // namespace


app.Tile = Backbone.Model.extend({ 
	initialize: function(){
		console.log("Tile is born!");
	},
	defaults : {
		name : "Empty tile",
		img : "images/2x2.png",
		number : 0,
		tier : 0,
		level: 0,
		
		cost_workers : 0,
		cost_wood : 0,
		cost_stone : 0,
		cost_planks : 0,
		
		require_wood : 0,
		require_stone : 0,
		
		produce_wood : 0,
		produce_stone : 0,
		produce_planks : 0,
		
		max_storage: 0,
		max_settlers: 0
	}
	
});