
var SIZE = 20;

function DeQueueArray(am, w, h) {
	this.init(am, w, h);
}

DeQueueArray.prototype = new Algorithm();
DeQueueArray.prototype.constructor = DeQueueArray;

DeQueueArray.superclass = Algorithm.prototype;

DeQueueArray.prototype.init = function(am, w, h) {
	DeQueueArray.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

DeQueueArray.prototype.addControls = function() {
	this.controls = [];
	
}

DeQueueArray.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

DeQueueArray.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

DeQueueArray.prototype.setup = function() {
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

DeQueueArray.prototype.reset = function() {
	this.rear = 0;
	this.nextIndex = this.initialIndex;
}

DeQueueArray.prototype.injectCallBack = function(event) {
	var injectVal = this.injectValue.value;
	this.implementAction(this.inject.bind(this), injectVal);
}

DeQueueArray.prototype.popCallBack = function(event) {
	this.implementAction(this.pop.bind(this), "");
}


DeQueueArray.prototype.pushCallBack = function(event) {
	var pushVal = this.pushValue.value;
	this.implementAction(this.push.bind(this), pushVal);
}

DeQueueArray.prototype.ejectCallBack = function(event) {
	this.implementAction(this.eject.bind(this), "");
}

DeQueueArray.prototype.displayCallback = function(event) {
	this.implementAction(this.displayData.bind(this), "");
}

DeQueueArray.prototype.displayData = function(ignored) {
	this.commands = new Array();
	this.displayAll();
	return this.commands;
}

DeQueueArray.prototype.inject = function(elemToPush) {
	this.commands = new Array();
	return this.commands;
}

DeQueueArray.prototype.pop = function(ignored) {
	this.commands = new Array();
	return this.commands;
}

DeQueueArray.prototype.push = function(elemToPush) {
	this.commands = new Array();
	return this.commands;
}

DeQueueArray.prototype.eject = function(ignored) {
	this.commands = new Array();
	
	return this.commands;
}

DeQueueArray.prototype.displayAll = function() {
	this.commands = new Array();
	return this.commands;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new DeQueueArray(animManag, canvas.width, canvas.height);
}

function travel(fromSelector, toSelector, callBackFunction) {
	$(fromSelector).addClass('background-color-yellow');
	var l = $(fromSelector).offset();
	$(toSelector).offset({top : l.top, left : l.left});
	TweenMax.to(toSelector, 1, {top : 0, left : 0, onComplete : function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flip(selector, val, callBackFunction) {
	$(selector).effect('highlight', {color: 'yellow'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete : function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete : function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}

