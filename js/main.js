//var app = app || {};
var main = new app.Controller({});
var mainView = new app.ControllerView({ model : main});
$("#draw-main-info").html(mainView.render().el);

// create 20 tile models in an array
var tile = []; 
for(var i = 0; i <= 20 ; i++){
	tile[i] = new app.Tile({
		number : i,
		link : "tile"+i
	});
}
// end of creating 20 tiles

// create different types of tile /  buildings
var mason = new app.Building({
	name : "Mason",
	produce_stone : 1
});

//
var selectedTile = new app.SelectedTile({model : tile[0]});

var tileGroup = new app.TileGroup(tile); // putting all the tiles inside tile group ^__^
var tileGroupView = new app.allTileView({ collection: tileGroup}); // view for all tiles
$("#draw-tile-map").html(tileGroupView.render().el);



//view.listenTo(tile , 'change', view.render); // instead of this.render() >> view.render() on each function

//var tileRouter = new app.TileInfoRouter({});
//Backbone.history.start();