var AuthorModel = Backbone.Model.extend({
    defaults: {
		PCAUTHORID: "0",
		PCTITLE: "Dr",
		PCFNAME: "Albert",
		PCLNAME: "Who",
		PCEMAIL: "AlbertWho@Gmail.com",
		PCPHONE: "6177807984"
		}
	});

var UserModel = Backbone.Model.extend({
    defaults: {
		PCUSERID: "0",
		PCTITLE: "Dr",
		PCFNAME: "Albert",
		PCLNAME: "Who",
		PCEMAIL: "AlbertWho@Gmail.com",
		PCPHONE: "6177807984"
		}
	});

var TextModel = Backbone.Model.extend({
    defaults: {
		PCTEXT: "Text text text",
		PCTRANSLATION: "Translate translate translate",
		PCTRANSLITERATION: "transliterate transliterate transliterate",
		PCPARUSH: "Explain explain explain",
		PCCITATION: "Place:Perek-verse",
		PCAUTHORID: 0
		}
	});

	
/**
 * Collection of Models
 **/
var AuthorCollection = Backbone.Collection.extend({
    model: AuthorModel,
	url: "api/getDBInfo.php?usage=PCAuthor"
});

var UserCollection = Backbone.Collection.extend({
    model: UserModel,
	url: "api/getDBInfo.php?usage=PCUser"
});

var TextCollection = Backbone.Collection.extend({
    model: TextModel,
	url: "api/getDBInfo.php?usage=PCText"
});

var TextByAuthorCollection = Backbone.Collection.extend({
    model: TextModel,
	authorNumber: 0,
	//getAuthorNumber: function(){ return this.authorNumber; },
	setAuthorNumber: function(authNum){ this.authorNumber = authNum; },
	setURL: function(authNum){ this.url = "api/getDBInfo.php?usage=PCTextByAuthor&PCAUTHOR=" + authNum; },
	initialize: function(authNum){ this.setURL(authNum); this.authorNumber = authNum; }, //this.authorNumber = authNum;},
	//getURL: function(){ return this.url; },
	url: "api/getDBInfo.php?usage=PCTextByAuthor&PCAUTHOR=" + this.authorNumber
});

