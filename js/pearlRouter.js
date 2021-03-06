
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
    }
});
