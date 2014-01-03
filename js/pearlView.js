/**
 * Views
 *
 * AUTHOR VIEWS
 **/

var AuthorListItemView = Backbone.View.extend({
 
    tagName:"div",
 
    template:_.template($('#AuthorTemplate').html()),
		
    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
		$(this.el).append("<button id='changeAuthor'>Change Stuff</button>");
        return this;
    }
 
});
 
var AuthorListView = Backbone.View.extend({

    tagName: "div",

    render: function(eventName) {
        _.each(this.model.models, function (mdl) {
            $(this.el).append(new AuthorListItemView({model:mdl}).render().el);
        }, this);

        return this;
    }
 
});


 /**
 * USER VIEWS 
 **/
var UserListItemView = Backbone.View.extend({
 
    tagName:"div",
 
    template:_.template($('#UserTemplate').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
 
});
 
var UserListView = Backbone.View.extend({
 
    tagName: "div",
     
    render: function(eventName) {
        _.each(this.model.models, function (mdl) {
            $(this.el).append(new UserListItemView({model:mdl}).render().el);
        }, this);

        return this;
    }
 
});


/**
 * TEXT VIEWS 
 **/
var TextListItemView = Backbone.View.extend({
 
    //tagName:"p",
 
    template:_.template($('#TextTemplate').html()),
	// adding double click and changing text from english to hebrew...
	events: {
		'mouseover clickText' : 'showIt',
		'mouseout clickText' : 'hideIt'
	},
	//
	showIt: function(){
		$('#contentMain').html("<div lang='he'><div class='he' style='clear:both'><p><font face='Ezra Sil'>" + this.model.get('PCTEXT') + "</font></p></div></div>");
		$('#FloatOver').css("height", "56");
		$('#FloatOver').css("background-color", "blue");
		$('#FloatOver').html(this.model.get('PCTRANSLATION'));
		$('#FloatOver').css("border", "2px solid #bbb");
		$('#FloatOver').css("padding", "5px");
		
		$('#FloatOver2').css("height", "96");
		$('#FloatOver2').css("background-color", "yellow");
		$('#FloatOver2').html(this.model.get('PCPARUSH'));
		$('#FloatOver2').css("border", "4px solid red");
		$('#FloatOver2').css("padding", "5px");
		//var stuff = "<div lang='he'><div class='he' style='clear:both'><p><font face='Ezra Sil'>תִּקנְתָּ שַׁבָּת רָצִיתָ קָרְבְּנוֹתֶיהָ</font></p></div></div>";
		//this.model.set("PCTEXT", stuff);
		//this.render();
		},

	hideIt: function(){
		//$('#contentMain').html("<div lang='he'><div class='he' style='clear:both'><p><font face='Ezra Sil'>" + this.model.get('PCTEXT') + "</font></p></div></div>");
		$('#FloatOver').html("");
		$('#FloatOver').css("height", "0");
		$('#FloatOver').css("border", "0px solid #bbb");
		$('#FloatOver').css("padding", "0px");
		
		$('#FloatOver2').html("");
		$('#FloatOver2').css("height", "0");
		$('#FloatOver2').css("border", "0px solid red");
		$('#FloatOver2').css("padding", "0px");

		//$('#FloatOver').css("z-index", "5");
		//$('#FloatOver').css("background-color", "none");
		//$('#FloatOver').html(this.model.get('PCTRANSLATION'));
		//var stuff = "<div lang='he'><div class='he' style='clear:both'><p><font face='Ezra Sil'>תִּקנְתָּ שַׁבָּת רָצִיתָ קָרְבְּנוֹתֶיהָ</font></p></div></div>";
		//this.model.set("PCTEXT", stuff);
		//this.render();
		},
		
     render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
 
});
 
var TextListView = Backbone.View.extend({
 
    tagName: "ul",
     
    render: function(eventName) {
        _.each(this.model.models, function (mdl) {
            $(this.el).append(new TextListItemView({model:mdl}).render().el);
        }, this);
        return this;
    }
 
});
