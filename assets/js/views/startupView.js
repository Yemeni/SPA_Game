var app = app || {}; // namespace


app.StartUpView = Backbone.View.extend({
	id : "#startupView.js line5",
	
	template : _.template( $("#build-game-startup").html() ),
	
	initialize: function(){
	},
	
	render: function() {
		var template = this.template(this.model.toJSON());
		//var renTemp = this.template(); //this.model.toJSON()
		this.$el.html(template);
		return this;
	  },
	  
	events: {
		'click #submit-info': 'startGame'
	},
	
	startGame: function(){
		var name = $('#player-name').val();
		var start_wood = parseInt($('#starting-wood').val());
		var start_stone = parseInt($('#starting-stone').val());
		var start_planks = parseInt($('#starting-planks').val());
        main.set({
			'name': name,
			'wood': start_wood,
			'stone' : start_stone,
			'planks' : start_planks
		});
		$('#draw-game-startup').removeClass('startup');
		tileGroupView = new app.allTileView({ collection: tileGroup}); // view for all tiles
		$("#draw-tile-map").html(tileGroupView.render().el);
		mainView.nextDay();
		this.remove();
	}

});