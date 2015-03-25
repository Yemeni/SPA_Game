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

});