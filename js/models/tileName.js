var app = app || {}; // namespace
// this is an object for building list // tile name

app.Building = Backbone.Model.extend({ 
	initialize: function(){
		console.log("Building is born!");
	},
	defaults : {
		name : "Empty tile",
		img : "images/tile_empty.gif",
				
		cost_workers : 0,
		cost_wood : 0,
		cost_stone : 0,
		
		require_wood : 0,
		require_stone : 0,
		
		produce_wood : 0,
		produce_stone : 0,
		
	}
	
});