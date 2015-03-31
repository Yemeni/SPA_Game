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
		'click #Upgrade': 'upgradeTile'
	},
	
	upgradeTile : function(){
		console.log("upgraded " + selectedTile.model.get('number'));
		
	}
	  

});