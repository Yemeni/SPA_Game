var app = app || {};

app.TileInfoRouter = Backbone.Router.extend({

routes : {},

noTileSelected: function() {
  $("#draw-tile-info").html("Select a tile to build or view it's info");
},

info0: function() {
	$("#draw-tile-info").html("Test 0");
},
info1: function(){
	$("#draw-tile-info").html("Test 1");
}

});

// intiliaize the routes automaticly
console.log("intiliaize the routes automaticly");
var route = {};
route[''] = 'noTileSelected';
for(var i = 0; i <= 20; i++){
	route['tile'+i] = 'info'+i;
} // end for
app.TileInfoRouter.prototype.routes = route;

/* intiliaize the routes functions automaticly
console.log("intiliaize the routes functions automaticly");
var functions = {};
for(var i = 0; i <= 20; i++){
	app.TileInfoRouter.prototype['info'+i].apply() = function(aArgs) { 
		$("#draw-tile-info").html("Selected" + i ); // problem :/
	};
} // end for
//app.TileInfoRouter.prototyp.push("Kiwi" : "");

*/