var app = app || {}; // namespace
// this is an object for building list // tile name

app.Building = Backbone.Model.extend({ 
	initialize: function(){
		console.log("Building is born!");
	},
	defaults : {
		name : "Empty tile",
		img : "images/2x2.png",
		level : 0,
		tier : 0,
		cost_workers : 0,
		cost_wood : 0,
		cost_stone : 0,
		
		require_wood : 0,
		require_stone : 0,
		
		produce_wood : 0,
		produce_stone : 0,
		
		max_storage: 0,
		max_settlers: 0
		
	}
	
});