//var app = app || {};
var main = new app.Controller({});
var mainView = new app.ControllerView({ model : main});
$("#draw-main-info").html(mainView.render().el);

// create 20 tile models in an array
var tile = []; 
for(var i = 0; i <= 24 ; i++){
	tile[i] = new app.Tile({
		number : i,
		link : "tile"+i
	});
}
// end of creating 20 tiles

// create different types of tile /  buildings
var empty_tile = new app.Building({

});
var mason = new app.Building({
	name : "Mason",
	produce_stone : 1,
	img : "images/Mason_Level_1.png",
	level : 1,
	tier : 1,
	cost_workers : 1,
	cost_wood : 1,
	cost_stone : 0
});

var wood_cutter = new app.Building({
	name : "Wood Cutter",
	produce_wood : 1,
	img : "images/Pinewood_Cutter_Level_1.png",
	level : 1,
	tier : 1,
	cost_workers : 1,
	cost_wood : 0,
	cost_stone : 2
});

var wood_swamill = new app.Building({
	name : "Wood Swamill",
	require_wood : 2,
	produce_planks: 1,
	img : "images/Pinewood_Sawmill_Level_1.png",
	level : 1,
	tier : 2,
	cost_workers : 2,
	cost_planks : 20,
	cost_stone : 5
});



var residence = new app.Building({
	name : "Residence",
	img : "images/Residence_Level_1.png",
	level : 1,
	tier : 1,
	max_settlers: 10,
	
	cost_wood : 1,
	cost_stone : 2,
	cost_planks: 3
	
});

var storage = new app.Building({
	name : "Storage",
	img : "images/Storehouse_Level_1.png",
	level : 1,
	tier : 1,
	max_storage: 100,
	
	cost_wood : 4,
	cost_stone : 2,
	cost_planks: 6
});

//
var selectedTile = new app.SelectedTile({model : tile[0]});

var tileGroup = new app.TileGroup(tile); // putting all the tiles inside tile group ^__^
var tileGroupView = new app.allTileView({ collection: tileGroup}); // view for all tiles
$("#draw-tile-map").html(tileGroupView.render().el);



//view.listenTo(tile , 'change', view.render); // instead of this.render() >> view.render() on each function

//var tileRouter = new app.TileInfoRouter({});
//Backbone.history.start();