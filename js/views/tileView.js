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

	events: {
	'mouseover': 'addBgColor',
	'mouseout': 'removeBgColor',
	'onclick' : 'showTileInfo'
	},

	addBgColor: function() {
	this.$el.addClass("bgColorImage");
	},

	removeBgColor: function() {
	this.$el.removeClass("bgColorImage");
	},
	
	showTileInfo: function(){
		
	}
});