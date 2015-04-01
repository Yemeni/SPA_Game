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
		'click #upgrade-to-mason' : 'upgradeToMason',
		'click #upgrade-to-wood-cutter' : 'upgradeToWoodCutter',
		'click #upgrade-to-residence' : 'upgradeToResidence',
		'click #upgrade-to-storage' : 'upgradeToStorage'
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
	
	upgradeToWoodCutter : function(){
		var tilenum = this.model.get('number');
		self.tile[tilenum].set(wood_cutter.attributes);
		console.log("upgraded " + selectedTile.model.get('number') + " to wood_cutter ");
		this.updateAllTiles();

	},
	
	upgradeToResidence : function(){
		var tilenum = this.model.get('number');
		self.tile[tilenum].set(residence.attributes);
		main.set('max_settlers', main.get('max_settlers') + tile[tilenum].get('max_settlers') );
		console.log("upgraded " + selectedTile.model.get('number') + " to residence ");
		this.updateAllTiles();

	},
	
	upgradeToStorage : function(){
		var tilenum = this.model.get('number');
		self.tile[tilenum].set(storage.attributes);
		main.set('max_storage', main.get('max_storage') + tile[tilenum].get('max_storage') );
		console.log("upgraded " + selectedTile.model.get('number') + " to storage ");
		this.updateAllTiles();

	},
	
	updateAllTiles : function(){
		
		this.render();
		tileGroupView = new app.allTileView({ collection: tileGroup}); // view for all tiles
		$("#draw-tile-map").html(tileGroupView.render().el);
		mainView.render();
	}
	
	
	  

});