/**
 * Created with JetBrains PhpStorm.
 * User: foysal
 * Date: 10/23/13
 * Time: 4:52 PM
 * To change this template use File | Settings | File Templates.
 */
var PersonModel = Backbone.Model.extend({
    defaults: {
        handle: "EfDude",
		description: "Tall, red, out in nowhere's ville",
		email: "efraimmkrug@gmail.com",
		phone: "617-780-6984",
		cell_phone: "617-780-6984",
		home_line1: "Nancy Home",
		home_line2: "Everything I need",
		home_line3: "23 Tolman Street",
		city: "Sharon",
		state: "MA",
		country: "USA",
		postal_code: "02067"
    }
});

var PlaceModel = Backbone.Model.extend({
    defaults: {
        geo_long: "-71.546732",
		geo_lat: "42.87654",
		city: "Cambridge",
		state: "MA",
		country: "USA",
		postal_code: "02139"
    }
});

var TimeModel = Backbone.Model.extend({
    defaults: {
        day_of_week: "Monday",
		begin_time: "7:10",
		end_time: "7:55"
    }
	
});


/**
 * View...
 *
 */

var PersonView = Backbone.View.extend({
	template: _.template($('#PersonTemplate').html()),
			
    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
	events: {
		"click #ClickSpot": "doClick"
	},
	doClick: function(){
		var personModel = new PersonModel();
		personModel.set("handle: Efraim Mordechai");
		$('#PersonSpot').html("<H1>" + personModel.get('handle') + "</H1>");		
	}
});
var personView = new PersonView();

var PlaceView = Backbone.View.extend({
	template: _.template($('#PlaceTemplate').html()),
			
    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

var placeView = new PlaceView();
/**
 * Router:
 *
 */
 
var PersonRouter = Backbone.Router.extend({
    routes:{
        "": "displayPerson"
    },
    displayPerson: function() {
		//alert('display Person');
        var personModel = new PersonModel(); 
        var personView = new PersonView({model:personModel}); 
        $('#PersonSpot').html(personView.render().el);		
    }
});

var PlaceRouter = Backbone.Router.extend({
    routes:{
        "": "displayPlace"
    },
    displayPlace: function() {
		//alert("display Place");
        var placeModel = new PlaceModel(); 
        var placeView = new PlaceView({model:placeModel}); 
        $('#PlaceSpot').html(placeView.render().el);		
    }
});


var placeRouter = new PlaceRouter();
var personRouter = new PersonRouter();

personRouter.displayPerson();
placeRouter.displayPlace();

Backbone.history.start();

