/**
 * Menu manipulation code
 **/

/**
 * Router:
 *
 **/
 
var DataRouter = Backbone.Router.extend({
    routes:{
        "dA": "displayAuthor",
		"dT": "displayText",
		"dU": "displayUser",
		"dTBA": "dipslayTextByAuthor",
		"dC": "displayCitation",
		"dM": "displayMenu"
    },
    displayAuthor: function() {
        var authorCollection = new AuthorCollection(); 
		var authorListView = new AuthorListView({model:authorCollection});
		var authorModel = new AuthorModel();
        var authorListItemView = new AuthorListItemView({model:authorModel});
		authorCollection.fetch({
			success: function () {
					$('#AuthorList').html(authorListView.render().el);
			}
		});
    },
    displayText: function() {
        var textCollection = new TextCollection(); 
		var textListView = new TextListView({model:textCollection});
		var textModel = new TextModel();
        var textListItemView = new TextListItemView({model:textModel});
		textCollection.fetch({
			success: function () {
					$('#TextList').html(textListView.render().el);
			}
		});
    },

    displayCitation: function(authNum) {
		var textByAuthorCollection = new TextByAuthorCollection(authNum); 
		var citationListView = new CitationListView({model:textByAuthorCollection});
		var textModel = new TextModel();
        var citationListItemView = new CitationListItemView({model:textModel});
		textByAuthorCollection.fetch({
			success: function () {
					$('#UserList').html(citationListView.render().el);
			}
		});
    },
	
    displayTextByAuthor: function(authNum) {
        var textByAuthorCollection = new TextByAuthorCollection(authNum); 
		var textListView = new TextListView({model:textByAuthorCollection});
		var textModel = new TextModel();
        var textListItemView = new TextListItemView({model:textModel});
		textByAuthorCollection.fetch({
			success: function () {
					$('#TextList').html(textListView.render().el);
			}
		});
    },

	displayUser: function() {
		$('#floatingMenu').css("height", 256);
		$('#floatingMenu').css("left", 996);
		$('#floatingMenu').css("top", 56);
		$('#floatingMenu').css("width", 365);
		$('#floatingMenu').css("z-index", 0);
		$('#floatingMenu').css("background-color", "cyan");
		$('#floatingMenu').css("color", "blue");
		$('#floatingMenu').css("border", "4px solid red");

        var userCollection = new UserCollection(); 
		var userListView = new UserListView({model:userCollection});
		var userModel = new UserModel();
        var userListItemView = new UserListItemView({model:userModel});
		userCollection.fetch({
			success: function () {
					//$('#UserList').html(userListView.render().el);
					$('#floatingMenu').html(userListView.render().el);
			}
		});
    },

    displayMenu2: function(usage) {
        var menu2Collection = new Menu2Collection(usage); 
		var menu2ListView = new Menu2ListView({model:menu2Collection});
		//alert("Router: " + menu2ListView.getUsage());
		//alert("HERE");
		var menu2Model = new Menu2Model();
		
        var menu2ListItemView = new Menu2ListItemView({model:menu2Model});
		//$('#floatingMenu').html(menu2ListItemView.render().el);
		//alert("Router: " + menu2ListView.getUsage());
		menu2Collection.fetch({
			success: function () {
					alert("HERE2");
					//$('#floatingMenu').html(menu2ListItemView.render().el);
					$('#floatingMenu').html(menu2ListView.render().el);
			}
		});
    },
	
    displayMenu: function() {
		var menuModel = new MenuModel();
        var menuView = new MenuView({model:menuModel});
		$('#floatingMenu').html(menuView.render().el);
    },
	
	setMenuPosition: function() {
		$('#floatingMenu').css("height", 256);
		$('#floatingMenu').css("left", 956);
		$('#floatingMenu').css("top", 56);
		$('#floatingMenu').css("width", 365);
		$('#floatingMenu').css("z-index", 0);
		$('#floatingMenu').css("background-color", "yellow");
		$('#floatingMenu').css("color", "black");
	}
});
