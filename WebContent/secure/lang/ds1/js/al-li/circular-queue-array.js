var ARRAY_START_X = 100;
var ARRAY_START_Y = 200;
var ARRAY_ELEM_WIDTH = 50;
var ARRAY_ELEM_HEIGHT = 50;

var ARRRAY_ELEMS_PER_LINE = 10;
var ARRAY_LINE_SPACING = 130;

var FRONT_LABEL_X = 200;
var FRONT_LABEL_Y = 50;
var FRONT_POS_X = 250;
var FRONT_POS_Y = 50;

var REAR_LABEL_X = 300;
var REAR_LABEL_Y = 50;
var REAR_POS_X = 350;
var REAR_POS_Y = 50;

/*var REAR_POS_X = 200;
var REAR_POS_Y = 60;
var REAR_LABEL_X = 180;
var REAR_LABEL_Y = 60*/;

var PUSH_LABEL_X = 50;
var PUSH_LABEL_Y = 30;
var PUSH_ELEMENT_X = 120;
var PUSH_ELEMENT_Y = 30;

var SIZE = 10;

function CircularQueueArray(am, w, h) {
	this.init(am, w, h);
}

CircularQueueArray.prototype = new Algorithm();
CircularQueueArray.prototype.constructor = CircularQueueArray;

CircularQueueArray.superclass = Algorithm.prototype;

CircularQueueArray.prototype.init = function(am, w, h) {
	CircularQueueArray.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
}

CircularQueueArray.prototype.addControls = function() {
	this.controls = [];
	
	this.pushField = document.getElementById("enqueueText");
	this.pushField.onkeydown = this.returnSubmit(this.pushField,
			this.enqueueCallBack.bind(this), 4);

	this.enqueueButton = document.getElementById("enqueueBtn");
	this.enqueueButton.onclick = this.enqueueCallBack.bind(this);
	this.controls.push(this.pushField);
	this.controls.push(this.enqueueButton);

	this.dequeueButton = document.getElementById("dequeueBtn");
	this.dequeueButton.onclick = this.dequeueCallBack.bind(this);
	this.controls.push(this.dequeueButton);

	this.clearButton = document.getElementById("clearBtn");
	this.clearButton.onclick = this.clearCallback.bind(this);
	this.controls.push(this.clearButton);
}

CircularQueueArray.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

CircularQueueArray.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

CircularQueueArray.prototype.setup = function() {
	this.nextIndex = 0;
	this.arrayID = new Array(SIZE);
	this.indexArrayID = new Array(SIZE);
	this.lineID1 = this.nextIndex++;
	this.lineID2 = this.nextIndex++;
	this.frontLabelID = this.nextIndex++;
	this.frontID = this.nextIndex++;
	this.rearLabelID = this.nextIndex++;
	this.rearID = this.nextIndex++;
	this.frontCircleID = this.nextIndex++;
	this.rearCircleID = this.nextIndex++;
	
	this.displayText = this.nextIndex++;
	this.displayVal = this.nextIndex++;
	
	for(var i = 0; i < SIZE; i++) {
		this.arrayID[i] = this.nextIndex++;
		this.indexArrayID[i] = this.nextIndex++;
	}
	
	for (var i = 0; i < SIZE; i++) {
		var xpos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var ypos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING
				+ ARRAY_START_Y;

		this.cmd("CreateRectangle", this.arrayID[i], "", ARRAY_ELEM_WIDTH,
				ARRAY_ELEM_HEIGHT, xpos, ypos);
		this.cmd("CreateLabel", this.indexArrayID[i], i, xpos, ypos - ARRAY_ELEM_HEIGHT);
	}
	
	var x = ARRAY_START_X - ARRAY_ELEM_WIDTH / 2;
	var y = ARRAY_START_Y - ARRAY_ELEM_WIDTH / 2;
	var newX = x;
	var newY = y - 25;
	this.cmd("DrawLine", this.lineID1, newX, newY, x, y);
	
	x = (SIZE - 1) * ARRAY_ELEM_WIDTH + ARRAY_START_X + ARRAY_ELEM_WIDTH / 2;
	newX = x;
	this.cmd("DrawLine", this.lineID2, newX, newY, x, y);
	
	this.cmd("CreateLabel", this.frontLabelID, "front", FRONT_LABEL_X, FRONT_LABEL_Y);
	this.cmd("CreateLabel", this.frontID, "-1", FRONT_POS_X, FRONT_POS_Y);
	this.cmd("CREATECIRCLE", this.frontCircleID, "", FRONT_POS_X, FRONT_POS_Y);
	this.cmd("SetForegroundColor", this.frontCircleID, "#FFF");
	
	this.cmd("CreateLabel", this.rearLabelID, "rear", REAR_LABEL_X, REAR_LABEL_Y);
	this.cmd("CreateLabel", this.rearID, "-1", REAR_POS_X, REAR_POS_Y);
	this.cmd("CREATECIRCLE", this.rearCircleID, "", REAR_POS_X, REAR_POS_Y);
	this.cmd("SetForegroundColor", this.rearCircleID, "#FFF");
	this.cmd("Connect", this.frontCircleID, this.lineID1);
	this.cmd("Connect", this.rearCircleID, this.lineID1);
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

CircularQueueArray.prototype.reset = function() {
	this.rear = 0;
	this.nextIndex = this.initialIndex;
}

CircularQueueArray.prototype.enqueueCallBack = function(event) {
	var pushVal = this.pushField.value;
	this.implementAction(this.enqueue.bind(this), pushVal);
}

CircularQueueArray.prototype.dequeueCallBack = function(event) {
	this.implementAction(this.dequeue.bind(this), "");
}

CircularQueueArray.prototype.clearCallback = function(event) {
	frontVal = this.front;
	rearVal = this.rear;
	this.implementAction(this.clearData.bind(this), "");
}

CircularQueueArray.prototype.clearData = function(ignored) {
	this.commands = new Array();
	this.clearAll();
	return this.commands;
}

CircularQueueArray.prototype.enqueue = function(elemToPush) {
	this.commands = new Array();
	this.cmd("CreateLabel", this.displayText, "Enqueue Value :", 50, 30);
	this.cmd("CreateLabel", this.displayVal, elemToPush, 100, 30);
	this.cmd("Step");
	
	
	
	//this.cmd("Delete", this.displayText);
	return this.commands;
}

CircularQueueArray.prototype.dequeue = function(ignored) {
	this.commands = new Array();
	
	return this.commands;
}

CircularQueueArray.prototype.clearAll = function() {
	this.commands = new Array();
	return this.commands;
}

var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new CircularQueueArray(animManag, canvas.width, canvas.height);
}

function travel(fromSelector, toSelector, callBackFunction) {
	$(fromSelector).css("background-color", "yellow");
	var l = $(fromSelector).offset();
	$(toSelector).offset({
		top : l.top,
		left : l.left
	});

	TweenMax.to(toSelector, 1, {
		top : 0,
		left : 0,
		onComplete : function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}

function flip(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {
		rotationX : -90,
		onComplete : function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {
				rotationX : 0,
				onComplete : function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				}
			});
		}
	});
}
