var app = app || {}; // namespace

/* The model for storing and managing all user related data including resource
// Name
// Day
// Settlers
// MaxSettlers
// Workers

// Wood
// Stone

// Storage
// MaxStorage
*/
app.Controller = Backbone.Model.extend({ 
	initialize: function(){
		console.log("Controller is born!");
	},
	
	defaults: {
		name : "Anynomos",
		day : 0,
		settlers : 0,
		max_settlers: 0,
		workers : 0,
		
		// resource
		wood: 99990,
		stone : 9990,
		planks : 9990,
		
		storage: 0,
		max_storage: 0
	}
}); // end app.Controller
