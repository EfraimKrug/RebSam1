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
		dRouter.displayCitation(id);
		//dRouter.displayMenu2('Shachar');
		},
		
	doit: function(){
		var fnameHold = this.model.get('PCFNAME');
		var lnameHold = this.model.get('PCLNAME');
		var titleHold = this.model.get('PCTITLE');
		var phoneHold = this.model.get('PCPHONE');
		var email = this.model.get('PCEMAIL');
		var phoneHold1 = phoneHold.substr(0,3);
		var phoneHold2 = phoneHold.substr(3,3);
		var phoneHold3 = phoneHold.substr(6,4);
		//this.model.set("PCLNAME", "OOPS");
		
		this.render();
		$('#FloatOver').html("Get in touch: " + titleHold + " " + fnameHold + " " + lnameHold + "<br>Phone: " + phoneHold1 + "-" + phoneHold2 + "-" + phoneHold3 + "<br>Email: " + email);		
		},

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
		$(this.el).append("<button id='changeAuthor'>Explanations on...</button>");
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

	events: {
		'dblclick clickuser' : 'destroy'
		},
		
	destroy: function() {
		$('#floatingMenu').css("height", 0);
		$('#floatingMenu').css("width", 0);
		$('#floatingMenu').css("border", "0px solid red");
	},
	
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

		$('#floatingMenu').html("");
		$('#floatingMenu').css("height", "0");
		$('#floatingMenu').css("border", "0px solid #bbb");
		$('#floatingMenu').css("padding", "0px");
		
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
	
	events: {
		'click clickCitation' : 'showIt'
		},
		
	 showIt: function(){
		parush = this.model.get("PCPARUSH");
		citation = this.model.get("PCCITATION");
		len = parush.length;
		hgt = 104 + len;
		$('#floatingMenu').css("height", hgt);
		$('#floatingMenu').css("left", 996);
		$('#floatingMenu').css("top", 56);
		$('#floatingMenu').css("width", 365);
		$('#floatingMenu').css("z-index", 0);
		$('#floatingMenu').css("background-color", "cyan");
		$('#floatingMenu').css("color", "blue");
		$('#floatingMenu').css("border", "4px solid red");
		$('#floatingMenu').css("text-align", "left");
		$('#floatingMenu').html("<h5>" + citation + "</h5>" + parush);
		},
		
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
