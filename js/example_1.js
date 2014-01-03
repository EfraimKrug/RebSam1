/**
 * Created with JetBrains PhpStorm.
 * User: foysal
 * Date: 10/23/13
 * Time: 4:52 PM
 * To change this template use File | Settings | File Templates.
 */
var MessageModel = Backbone.Model.extend({
    defaults: {
        message: "My Test Message",
		other: "Other Test Message"
    }
 
});


/**
 * View...
 *
 */

var MessageView = Backbone.View.extend({
	template: _.template($('#tpl-hello-backbone').html()),
			
    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});


/**
 * Router:
 *
 */
 
var MessageRouter = Backbone.Router.extend({
    routes:{
        "": "displayMessage"
    },
    displayMessage: function() {
        var messageModel = new MessageModel(); 
        var messageView = new MessageView({model:messageModel}); 
        $('#msg').html(messageView.render().el);		
    }
});

var messageRouter = new MessageRouter();
Backbone.history.start();
//messageRouter.displayMessage();
