var app = app || {}; // namespace


app.Tile = Backbone.Model.extend({ 
	initialize: function(){
		console.log("Tile is born!");
	},
	defaults : {
		name : "Empty tile",
		img : "images/tile_empty.gif",
		number : 0,
		
		
		cost_workers : 0,
		cost_wood : 0,
		cost_stone : 0,
		
		require_wood : 0,
		require_stone : 0,
		
		produce_wood : 0,
		produce_stone : 0,
		
	}
	
});