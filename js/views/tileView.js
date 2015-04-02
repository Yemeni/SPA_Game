var app = app || {}; // namespace


app.TileView = Backbone.View.extend({
	//tagName: "div",
	className: "tile",

	template: _.template( $("#build-tile-map").html() ),

	render: function() {
	var TileTemplate = this.template(this.model.toJSON());
	this.$el.html(TileTemplate);
	return this;
	},

	infoTemplate: _.template( $("#build-tile-info").html() ),

	events: {
	'mouseover': 'addBgColor',
	'mouseout': 'removeBgColor',
	'click' : 'showSelectedTile',
	'click #Upgrade' : 'upgradeTile'
	},

	addBgColor: function() {
	this.$el.addClass("bgColorImage");
	},

	removeBgColor: function() {
	this.$el.removeClass("bgColorImage");
	},
	
	showSelectedTile: function(){
		console.log("clicked showSelectedTile");
		selectedTile = new app.SelectedTile({model : this.model});
		$("#draw-tile-info").html(selectedTile.render().el);
		//var TileInfoTemplate = this.infoTemplate(this.model.toJSON());
		//$("#draw-tile-info").html(TileInfoTemplate);
		//return this;
	}
});