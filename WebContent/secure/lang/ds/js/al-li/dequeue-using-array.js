var ARRAY_START_X = 70;
var ARRAY_START_Y = 280;
var ARRAY_ELEM_WIDTH = 40;
var ARRAY_ELEM_HEIGHT = 40;

var ARRRAY_ELEMS_PER_LINE = 10;

var Y_VALUE = 50;
var FRONT_LABEL_X = 370;
var FRONT_VAL_X = 420;
var REAR_LABEL_X = 470;
var REAR_VAL_X = 520;

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
	
	this.pushValue = document.getElementById("pushText");
	this.pushValue.onkeydown = this.returnSubmit(this.pushValue, this.pushCallBack.bind(this), 4);

	this.pushButton = document.getElementById("pushBtn");
	this.pushButton.onclick = this.pushCallBack.bind(this);
	this.controls.push(this.pushValue);
	this.controls.push(this.pushButton);

	this.popButton = document.getElementById("popBtn");
	this.popButton.onclick = this.popCallBack.bind(this);
	this.controls.push(this.popButton);
	
	this.injectValue = document.getElementById("injectText");
	this.injectValue.onkeydown = this.returnSubmit(this.injectValue, this.injectCallBack.bind(this), 4);

	this.injectButton = document.getElementById("injectBtn");
	this.injectButton.onclick = this.injectCallBack.bind(this);
	this.controls.push(this.injectValue);
	this.controls.push(this.injectButton);

	this.ejectButton = document.getElementById("ejectBtn");
	this.ejectButton.onclick = this.ejectCallBack.bind(this);
	this.controls.push(this.ejectButton);

	this.displayButton = document.getElementById("displayBtn");
	this.displayButton.onclick = this.displayCallback.bind(this);
	this.controls.push(this.displayButton);
	
	this.clearButton = document.getElementById("clearBtn");
	this.clearButton.onclick = this.clearCallback.bind(this);
	this.controls.push(this.clearButton);
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
	this.arrayID = new Array(SIZE);
	this.indexArrayID = new Array(SIZE);
	this.dummyIndexArrayID = new Array(SIZE);
	this.frontLabelID = this.nextIndex++;
	this.frontValID = this.nextIndex++;
	this.dummyFrontValID = this.nextIndex++;
	this.rearLabelID = this.nextIndex++;
	this.rearValID = this.nextIndex++;
	this.dummyRearValID = this.nextIndex++;
	this.highlightID = this.nextIndex++;
	this.lineID1 = this.nextIndex++;
	this.lineID2 = this.nextIndex++;
	
	for (var i = 0; i < SIZE; i++) {
		this.arrayID[i] = this.nextIndex++;
		this.indexArrayID[i] = this.nextIndex++;
		this.dummyIndexArrayID[i] = this.nextIndex++;
		
		var xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y;	//indexes
		
		this.cmd("CreateRectangle", this.arrayID[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.arrayID[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("SetTextColor", this.indexArrayID[i], "#a1126c");
		this.cmd("CreateLabel", this.dummyIndexArrayID[i], "", xPos, yPos - ARRAY_ELEM_WIDTH - 8);
		
		this.cmd("SetTextColor", this.arrayID[i], "#000000");
		this.cmd("SetText", this.arrayID[i], i);
	}
	
	this.cmd("CreateLabel", this.frontLabelID, "front : ", FRONT_LABEL_X, Y_VALUE);
	this.cmd("CreateLabel", this.frontValID, "-1", FRONT_VAL_X, Y_VALUE);
	this.cmd("SetTextColor", this.frontValID, "#800080");
	this.cmd("CreateLabel", this.dummyFrontValID, "", FRONT_VAL_X, Y_VALUE + 10);
	//this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", FRONT_VAL_X, Y_VALUE);
	
	this.cmd("CreateLabel", this.rearLabelID, "rear : ", REAR_LABEL_X, Y_VALUE);
	this.cmd("CreateLabel", this.rearValID, "-1", REAR_VAL_X, Y_VALUE);
	this.cmd("SetTextColor", this.rearValID, "#800080");
	this.cmd("CreateLabel", this.dummyRearValID, "", REAR_VAL_X, Y_VALUE + 10);
	
	var x1 = ARRAY_START_X - ARRAY_ELEM_WIDTH / 2;
	var y1 = ARRAY_START_Y - ARRAY_ELEM_WIDTH / 2;
	var y2 = y1- 40;
	
	this.cmd("DrawLine", this.lineID1, x1, y2, x1, y1);
	
	x1 = (SIZE - 1) * ARRAY_ELEM_WIDTH + ARRAY_START_X + ARRAY_ELEM_WIDTH / 2;
	
	this.cmd("DrawLine", this.lineID2, x1, y2, x1, y1);
	
	this.cmd("Connect", this.dummyFrontValID, this.lineID1);
	this.cmd("Connect", this.dummyRearValID, this.lineID1);
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

DeQueueArray.prototype.reset = function() {
	this.rear = 0;
	this.nextIndex = this.initialIndex;
}

DeQueueArray.prototype.pushCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	var pushVal = this.pushValue.value;
	if (pushVal != "" && !isNaN(pushVal)) {
		//this.implementAction(this.push.bind(this), pushVal);
	}
}

DeQueueArray.prototype.popCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	//this.implementAction(this.pop.bind(this), "");
}

DeQueueArray.prototype.injectCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	var injectVal = this.injectValue.value;
	if (injectVal != "" && !isNaN(injectVal)) {
		//this.implementAction(this.inject.bind(this), injectVal);
	}
}

DeQueueArray.prototype.ejectCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	//this.implementAction(this.eject.bind(this), "");
}

DeQueueArray.prototype.displayCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.displayData.bind(this), "");
}

DeQueueArray.prototype.displayData = function(ignored) {
	this.commands = new Array();
	this.displayAll();
	return this.commands;
}

DeQueueArray.prototype.clearCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.clearData.bind(this), "");
}

DeQueueArray.prototype.clearData = function(ignored) {
	this.commands = new Array();
	this.clearAll();
	return this.commands;
}

DeQueueArray.prototype.enqueue = function(elemToPush) {
	this.commands = new Array();
	return this.commands;
}

DeQueueArray.prototype.dequeue = function(ignored) {
	this.commands = new Array();

	return this.commands;
}

DeQueueArray.prototype.displayAll = function() {
	this.commands = new Array();

	return this.commands;
}

DeQueueArray.prototype.clearAll = function() {
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

