var app = app || {}; // namespace


app.ControllerView = Backbone.View.extend({
	id : "#controllerView.js line5",
	
	template : _.template( $("#build-main-info").html() ),
	
	render: function() {
		var controller_template= this.template(this.model.toJSON());
		//var renTemp = this.template(); //this.model.toJSON()
		this.$el.html(controller_template);
		return this;
	  },
	  
	events: {
		'click #next-day': 'nextDay'
	},
	
	nextDay: function(){
		main.set('day' ,main.get('day') + 1 );

		$.each(tile, function( index, value ){
			if(tile[index].get('tier') == 1){
				if(main.get('storage') <= main.get('max_storage')){
					main.set('stone', main.get('stone') + tile[index].get('produce_stone') );
					main.set('wood', main.get('wood') + tile[index].get('produce_wood') );
				}
			}
		});
		
		$.each(tile, function( index, value ){
			if(tile[index].get('tier') == 2){
				if(main.get('wood') >= tile[index].get('require_wood')){
					if(main.get('storage') <= main.get('max_storage')){
						main.set('wood', main.get('wood') - tile[index].get('require_wood') );
						main.set('planks', main.get('planks') + tile[index].get('produce_planks') );
					}
				}
			}
		});
		
		main.set('storage' , main.get('stone') +  main.get('wood') + main.get('planks'));
		
		mainView.render();
		//main.set('stone' ,main.get('day')  )
	}

});