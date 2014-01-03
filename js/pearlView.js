/**
 * Views
 *
 * AUTHOR VIEWS
 **/

var AuthorListItemView = Backbone.View.extend({
 
    tagName:"div",
 
    template:_.template($('#AuthorTemplate').html()),

	events: {
		'dblclick clickAuthor' : 'doit',
		'click button#changeAuthor' : 'changeUser'
	},
 
	changeUser: function(){
		var lname = this.model.get("PCLNAME");
		var id = this.model.get("PCAUTHORID");
		var dRouter = new DataRouter();
		dRouter.displayTextByAuthor(id);
		//$('#UserList').html("Fine - just fine!");
		dRouter.displayCitation(id);
		//alert(this.model.get("PCLNAME"));
		// get list of possible divrei torah...
		//this.model.on('goNuts', function(){alert("going nuts");});
		//this.model.trigger('goNuts');
		//$('#UserList').html("Fine - just fine!");
		},
		
	doit: function(){
		var fnameHold = this.model.get('PCFNAME');
		var lnameHold = this.model.get('PCLNAME');
		var titleHold = this.model.get('PCTITLE');
		this.model.set("PCLNAME", "OOPS");
		
		this.render();
		$('#FloatOver').html("Come on... deal with your problems, huh? " + titleHold + " " + fnameHold + " " + lnameHold);		
		},

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
		$('#FloatOver').css("background-color", "blue");
		var s = this.model.get('PCTRANSLATION');
		var l = s.length;	// 50 char per line & 18 px / line
		var h = (l/54) * 20;
		$('#FloatOver').css("height", h);	// 54
		//var x = s.length();
		//alert(x);
		$('#FloatOver').html(this.model.get('PCTRANSLATION'));
		$('#FloatOver').css("border", "2px solid #bbb");
		$('#FloatOver').css("padding", "5px");

		var s = this.model.get('PCPARUSH');
		var l = s.length;	// 50 char per line & 18 px / line
		var h = (l/40) * 18;
		
		$('#FloatOver2').css("height", h);	// 96
		$('#FloatOver2').css("background-color", "yellow");
		$('#FloatOver2').html(this.model.get('PCPARUSH'));
		$('#FloatOver2').css("border", "4px solid red");
		$('#FloatOver2').css("padding", "5px");
		},

	hideIt: function(){
		$('#FloatOver').html("");
		$('#FloatOver').css("height", "0");
		$('#FloatOver').css("border", "0px solid #bbb");
		$('#FloatOver').css("padding", "0px");
		
		$('#FloatOver2').html("");
		$('#FloatOver2').css("height", "0");
		$('#FloatOver2').css("border", "0px solid red");
		$('#FloatOver2').css("padding", "0px");
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

/**
 * TEXT VIEWS 
 **/
var CitationListItemView = Backbone.View.extend({
 
    //tagName:"p",
 
    template:_.template($('#CitationTemplate').html()),
		
     render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
 
});
 
var CitationListView = Backbone.View.extend({
 
    //tagName: "p",
     
    render: function(eventName) {
        _.each(this.model.models, function (mdl) {
            $(this.el).append(new CitationListItemView({model:mdl}).render().el);
        }, this);
        return this;
    }
	
});
