var app = app || {}; // namespace


app.SelectedTile = Backbone.View.extend({
	id : "#tileInfoView.js line5",
	
	template : _.template( $("#build-tile-info").html() ),
	
	render: function() {
		console.log("now I am inside SelectedTile");
		var info_template= this.template(this.model.toJSON());
		this.$el.html(info_template);
		return this;
	  },
	  
	events: {
		'click #Upgrade': 'upgradeTile',
		'click #UpgradeToMason' : 'upgradeToMason'
	},
	
	upgradeTile : function(){
		console.log("upgraded " + selectedTile.model.get('number'));
		
	},
	
	upgradeToMason : function(){
		var tilenum = this.model.get('number');
		//inherit(tile[tilenum].attributes, mason.attributes);
		//tile[tilenum].attributes = mason.attributes;
		self.tile[tilenum].set(mason.attributes);
		console.log("upgraded " + selectedTile.model.get('number') + " to mason ");
		this.updateAllTiles();
		
	},
	
	updateAllTiles : function(){
	
		this.render();
		tileGroupView = new app.allTileView({ collection: tileGroup}); // view for all tiles
		$("#draw-tile-map").html(tileGroupView.render().el);
	}
	
	
	  

});