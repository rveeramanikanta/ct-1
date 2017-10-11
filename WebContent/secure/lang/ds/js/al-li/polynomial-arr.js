var ARRAY_START_X = 70;
var ARRAY_START_Y = 200;
var ARRAY_ELEM_WIDTH = 30;
var ARRAY_ELEM_HEIGHT = 30;

var ARRRAY_ELEMS_PER_LINE = 10;

var Y_VALUE = 70;
var FRONT_LABEL_X = 370;
var FRONT_VAL_X = 420;
var REAR_LABEL_X = 470;
var REAR_VAL_X = 520;
var DISPLAY_VAL_Y = 30;

var SIZE = 15;

function PolynomialArray(am, w, h) {
	this.init(am, w, h);
}

PolynomialArray.prototype = new Algorithm();
PolynomialArray.prototype.constructor = PolynomialArray;

PolynomialArray.superclass = Algorithm.prototype;

PolynomialArray.prototype.init = function(am, w, h) {
	PolynomialArray.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

PolynomialArray.prototype.addControls = function() {
	this.controls = [];
	
}

PolynomialArray.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

PolynomialArray.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

PolynomialArray.prototype.setup = function() {
	this.arrayID = new Array(SIZE);
	this.indexArrayID = new Array(SIZE);
	this.dummyIndexArrayID = new Array(SIZE);
	this.indexArrayID1 = new Array(SIZE);
	
	for (var i = 0; i < SIZE; i++) {
		this.arrayID[i] = this.nextIndex++;
		this.indexArrayID[i] = this.nextIndex++;
		this.dummyIndexArrayID[i] = this.nextIndex++;
		this.indexArrayID1[i] = this.nextIndex++;
		
		var xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y;
		
		this.cmd("CreateRectangle", this.arrayID[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.arrayID[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID[i], 'x', xPos, yPos + 5);
		this.cmd("CreateLabel", this.indexArrayID1[i], SIZE - i, xPos + 5, yPos - 5);
		/*this.cmd("CreateLabel", this.indexArrayID[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("SetTextColor", this.indexArrayID[i], "#a1126c");
		this.cmd("CreateLabel", this.dummyIndexArrayID[i], "", xPos, yPos - ARRAY_ELEM_WIDTH - 8);*/
		
		this.cmd("SetTextColor", this.arrayID[i], "#000000");
		this.cmd("SetText", this.arrayID[i], "");
	}
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

PolynomialArray.prototype.reset = function() {
	this.rear = 0;
	this.nextIndex = this.initialIndex;
}

PolynomialArray.prototype.createCallBack = function(event) {
	this.implementAction(this.create.bind(this), "");
}

PolynomialArray.prototype.additionCallBack = function(event) {
	this.implementAction(this.addition.bind(this), "");
}

PolynomialArray.prototype.subtractionCallBack = function(event) {
	this.implementAction(this.subtraction.bind(this), "");
}

PolynomialArray.prototype.multiplicationCallBack = function(event) {
	this.implementAction(this.multiplication.bind(this), "");
}

PolynomialArray.prototype.displayCallback = function(event) {
	this.implementAction(this.displayData.bind(this), "");
}

PolynomialArray.prototype.displayData = function(ignored) {
	this.commands = new Array();
	this.displayAll();
	return this.commands;
}

PolynomialArray.prototype.create = function(elemToPush) {
	this.commands = new Array();
	return this.commands;
}

PolynomialArray.prototype.addition = function(elemToAdd) {
	this.commands = new Array();
	return this.commands;
}

PolynomialArray.prototype.subtraction = function(elemToSubtract) {
	this.commands = new Array();
	return this.commands;
}

PolynomialArray.prototype.multiplication = function(elemToMultiply) {
	this.commands = new Array();
	
	return this.commands;
}

PolynomialArray.prototype.displayAll = function() {
	this.commands = new Array();
	return this.commands;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new PolynomialArray(animManag, canvas.width, canvas.height);
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

