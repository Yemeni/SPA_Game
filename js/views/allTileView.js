var app = app || {}; // namespace


app.allTileView = Backbone.View.extend({

  //tagName: "section",

  render: function() {
 	  this.collection.each(this.addTile, this);
 		return this;
  },

 addTile: function(tile) {
 		var tileView = new app.TileView ({ model: tile });
 		this.$el.append(tileView.render().el);
 }

});