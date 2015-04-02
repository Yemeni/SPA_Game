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
		'click #upgrade': 'upgradeTile',
		'click #destroy': 'destroyTile',
		'click #upgrade-to-mason' : 'upgradeToMason',
		'click #upgrade-to-wood-cutter' : 'upgradeToWoodCutter',
		'click #upgrade-to-wood-swamill' : 'upgradeToSwamill',
		'click #upgrade-to-residence' : 'upgradeToResidence',
		'click #upgrade-to-storage' : 'upgradeToStorage'
	},
	
	upgradeTile : function(){
		var tilenum = this.model.get('number');
		if(main.get('wood') >= self.tile[tilenum].get('cost_wood')
			&& main.get('stone') >= self.tile[tilenum].get('cost_stone')
			&& main.get('planks') >= self.tile[tilenum].get('cost_planks')
			
			&& self.tile[tilenum].get('level') <= 10
		){
			main.set('wood' , main.get('wood') - self.tile[tilenum].get('cost_wood'));
			main.set('stone' , main.get('stone') - self.tile[tilenum].get('cost_stone'));
			main.set('planks' , main.get('planks') - self.tile[tilenum].get('cost_planks'));
			
			self.tile[tilenum].set('level', self.tile[tilenum].get('level') + 1 );
			
			self.tile[tilenum].set('cost_wood', Math.round(self.tile[tilenum].get('cost_wood')*2.50 + 10) );
			self.tile[tilenum].set('cost_stone', Math.round(self.tile[tilenum].get('cost_stone')*2.20 + 8) );
			self.tile[tilenum].set('cost_planks', Math.round(self.tile[tilenum].get('cost_planks')*1.50 + 10) );
			
			self.tile[tilenum].set('require_wood', Math.round(self.tile[tilenum].get('require_wood')*1.9));

			
			self.tile[tilenum].set('produce_wood', Math.round(self.tile[tilenum].get('produce_wood')*1.9));
			self.tile[tilenum].set('produce_stone', Math.round(self.tile[tilenum].get('produce_stone')*1.9));
			self.tile[tilenum].set('produce_planks', Math.round(self.tile[tilenum].get('produce_planks')*1.9));
			
			main.set('max_storage', main.get('max_storage') - tile[tilenum].get('max_storage') );
			self.tile[tilenum].set('max_storage', Math.round(self.tile[tilenum].get('max_storage')*2.9));
			main.set('max_storage', main.get('max_storage') + tile[tilenum].get('max_storage') );
			
			main.set('max_settlers', main.get('max_settlers') - tile[tilenum].get('max_settlers') );
			self.tile[tilenum].set('max_settlers', Math.round(self.tile[tilenum].get('max_settlers')*2.2));
			main.set('max_settlers', main.get('max_settlers') + tile[tilenum].get('max_settlers') );
			
			var name = tile[tilenum].get('name');
			var level = tile[tilenum].get('level');
			switch(name){
				case "Wood Cutter":
					switch(level){
						case 3 :
						tile[tilenum].set('img' , 'images/Pinewood_Cutter_Level_2.png');
						break;
						
						case 5 :
						tile[tilenum].set('img' , 'images/Pinewood_Cutter_Level_3.png');
						break;
						
						case 7 :
						tile[tilenum].set('img' , 'images/Pinewood_Cutter_Level_4.png');
						break;
						
						case 9 :
						tile[tilenum].set('img' , 'images/Pinewood_Cutter_Level_5.png');
						break;
					}
				break;
				case "Mason":
					switch(level){
						case 3 :
						tile[tilenum].set('img' , 'images/Mason_Level_2.png');
						break;
						
						case 5 :
						tile[tilenum].set('img' , 'images/Mason_Level_3.png');
						break;
						
						case 7 :
						tile[tilenum].set('img' , 'images/Mason_Level_4.png');
						break;
						
						case 9 :
						tile[tilenum].set('img' , 'images/Mason_Level_5.png');
						break;
					}
				break;
				case "Wood Swamill":
					switch(level){
						case 3 :
						tile[tilenum].set('img' , 'images/Pinewood_Sawmill_Level_2.png');
						break;
						
						case 5 :
						tile[tilenum].set('img' , 'images/Pinewood_Sawmill_Level_3.png');
						break;
						
						case 7 :
						tile[tilenum].set('img' , 'images/Pinewood_Sawmill_Level_4.png');
						break;
						
						case 9 :
						tile[tilenum].set('img' , 'images/Pinewood_Sawmill_Level_5.png');
						break;
					}
				break;
				
				case "Storage":
					switch(level){
						case 3 :
						tile[tilenum].set('img' , 'images/Storehouse_Level_2.png');
						break;
						
						case 5 :
						tile[tilenum].set('img' , 'images/Storehouse_Level_3.png');
						break;
						
						case 7 :
						tile[tilenum].set('img' , 'images/Storehouse_Level_4.png');
						break;
						
						case 9 :
						tile[tilenum].set('img' , 'images/Storehouse_Level_5.png');
						break;
					}
				break;
				
				case "Residence":
					switch(level){
						case 3 :
						tile[tilenum].set('img' , 'images/Residence_Level_2.png');
						break;
						
						case 5 :
						tile[tilenum].set('img' , 'images/Residence_Level_3.png');
						break;
						
						case 7 :
						tile[tilenum].set('img' , 'images/Residence_Level_4.png');
						break;
						
						case 9 :
						tile[tilenum].set('img' , 'images/Residence_Level_5.png');
						break;
					}
				break;
			}
			
			console.log("upgraded " + selectedTile.model.get('number'));
		}
		this.updateAllTiles();
	},
	
	destroyTile : function(){
		var tilenum = this.model.get('number');
		main.set('max_storage',main.get('max_storage') - self.tile[tilenum].get('max_storage'));
		main.set('max_settlers',main.get('max_settlers') - self.tile[tilenum].get('max_settlers'));
		self.tile[tilenum].set(empty_tile.attributes);
		this.updateAllTiles();
		console.log("removed " + selectedTile.model.get('number'));
		
	},
	
	upgradeToMason : function(){
		var tilenum = this.model.get('number');
		self.tile[tilenum].set(mason.attributes);
		self.tile[tilenum].set('cost_wood', Math.round(self.tile[tilenum].get('level')*2.50 + 10) );
		self.tile[tilenum].set('cost_stone', Math.round(self.tile[tilenum].get('level')*1.20 + 8) );
		console.log("upgraded " + selectedTile.model.get('number') + " to mason ");
		this.updateAllTiles();
		
	},
	
	upgradeToWoodCutter : function(){
		var tilenum = this.model.get('number');
		self.tile[tilenum].set(wood_cutter.attributes);
		self.tile[tilenum].set('cost_wood', Math.round(self.tile[tilenum].get('level')*1.50 + 10) );
		self.tile[tilenum].set('cost_stone', Math.round(self.tile[tilenum].get('level')*2.20 + 8) );
		console.log("upgraded " + selectedTile.model.get('number') + " to wood_cutter ");
		this.updateAllTiles();

	},
	
	upgradeToSwamill : function(){
		var tilenum = this.model.get('number');
		self.tile[tilenum].set(wood_swamill.attributes);
		self.tile[tilenum].set('cost_planks', Math.round(self.tile[tilenum].get('level')*1.50 + 10) );
		self.tile[tilenum].set('cost_stone', Math.round(self.tile[tilenum].get('level')*3.20 + 8) );
		console.log("upgraded " + selectedTile.model.get('number') + " to wood_swamill ");
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