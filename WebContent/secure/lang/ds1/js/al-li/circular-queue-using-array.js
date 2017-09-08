var ARRAY_START_X = 130;
var ARRAY_START_Y = 250;
var ARRAY_ELEM_WIDTH = 50;
var ARRAY_ELEM_HEIGHT = 50;

var ARRRAY_ELEMS_PER_LINE = 10;
var ARRAY_LINE_SPACING = 130;

var FRONT_VAL_X = 310;
var FRONT_VAL_Y = 50;
var REAR_VAL_X = 410;

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
	this.front = -1;
	this.rear = -1;
}

CircularQueueArray.prototype.addControls = function() {
	this.controls = [];
	
	this.enqueueValue = document.getElementById("enqueueText");
	this.enqueueValue.onkeydown = this.returnSubmit(this.enqueueValue, this.enqueueCallBack.bind(this), 4);

	this.enqueueButton = document.getElementById("enqueueBtn");
	this.enqueueButton.onclick = this.enqueueCallBack.bind(this);
	this.controls.push(this.enqueueValue);
	this.controls.push(this.enqueueButton);

	this.dequeueButton = document.getElementById("dequeueBtn");
	this.dequeueButton.onclick = this.dequeueCallBack.bind(this);
	this.controls.push(this.dequeueButton);

	this.displayButton = document.getElementById("displayBtn");
	this.displayButton.onclick = this.displayCallback.bind(this);
	this.controls.push(this.displayButton);
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
	//this.nextIndex = 0;
	this.arrayId = new Array(SIZE);
	this.indexArrayId = new Array(SIZE);
	this.lineId1 = this.nextIndex++;
	this.lineId2 = this.nextIndex++;
	this.frontLabelId = this.nextIndex++;
	this.frontValId = this.nextIndex++;
	this.dummyFrontId = this.nextIndex++;
	this.rearLabelId = this.nextIndex++;
	this.rearValId = this.nextIndex++;
	this.dummyRearId = this.nextIndex++;
	
	for (var i = 0; i < SIZE; i++) {
		this.arrayId[i] = this.nextIndex++;
		this.indexArrayId[i] = this.nextIndex++;
		/* End of id's creation*/
		
		var xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;	//indexes
		var x1 = ARRAY_START_X - ARRAY_ELEM_WIDTH / 2;
		var y2 = ARRAY_START_Y - ARRAY_ELEM_WIDTH / 2;
		var y1 = y2 - 40;
		/*End of variables */
		
		this.cmd("createRectangle", this.arrayId[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("createLabel", this.indexArrayId[i], i, xPos, yPos - ARRAY_ELEM_HEIGHT);
	}

	this.cmd("drawLine", this.lineId1, x1, y1, x1, y2);
	
	x1 = (SIZE - 1) * ARRAY_ELEM_WIDTH + ARRAY_START_X + ARRAY_ELEM_WIDTH / 2;	//line2
	
	this.cmd("drawLine", this.lineId2, x1, y1, x1, y2);
	this.cmd("createLabel", this.frontLabelId, "front : ", 280, FRONT_VAL_Y);
	this.cmd("createLabel", this.frontValId, "-1", FRONT_VAL_X, FRONT_VAL_Y);
	this.cmd("createLabel", this.dummyFrontId, "", FRONT_VAL_X, 60);
	this.cmd("connect", this.dummyFrontId, this.lineId1);
	
	this.cmd("createLabel", this.rearLabelId, "rear : ", 380, FRONT_VAL_Y);
	this.cmd("createLabel", this.rearValId, "-1", REAR_VAL_X, FRONT_VAL_Y);
	this.cmd("createLabel", this.dummyRearId, "", REAR_VAL_X, 60);
	this.cmd("connect", this.dummyRearId, this.lineId1);
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

CircularQueueArray.prototype.reset = function() {
	this.rear = 0;
	this.nextIndex = this.initialIndex;
}

CircularQueueArray.prototype.enqueueCallBack = function(event) {
	var enqueueVal = this.enqueueValue.value;
	this.implementAction(this.enqueue.bind(this), enqueueVal);
}

CircularQueueArray.prototype.dequeueCallBack = function(event) {
	this.implementAction(this.dequeue.bind(this), "");
}

CircularQueueArray.prototype.displayCallback = function(event) {
	frontVal = this.front;
	rearVal = this.rear;
	this.implementAction(this.displayData.bind(this), "");
}

CircularQueueArray.prototype.displayData = function(ignored) {
	this.commands = new Array();
	this.displayAll();
	return this.commands;
}

CircularQueueArray.prototype.enqueue = function(elemToPush) {
	console.log("enqueue methodsdf43")
	this.commands = new Array();
	if (!((this.rear == SIZE - 1 && this.front == 0) || (this.rear + 1 == this.front))) {
		this.highlightID1 = this.nextIndex++;
		this.highlightID2 = this.nextIndex++;
		this.displayText = this.nextIndex++;
		this.displayVal = this.nextIndex++;
		
		this.cmd("CreateLabel", this.displayText, "Enqueue Value :", 50, 30);
		this.cmd("CreateLabel", this.displayVal, elemToPush, 100, 30);
		
		if (this.rear == SIZE - 1) {
			this.rear = -1;
			this.cmd("SetText", this.rearValId, this.rear);
		} else if (this.front == -1) {
			this.front = 0;
			this.cmd("CreateHighlightCircle", this.highlightID1, "#0000FF", FRONT_VAL_X, FRONT_VAL_Y);
			this.cmd("SetText", this.frontValId, this.front);
			this.cmd("Step");
			//this.cmd("DisConnect", this.dummyfrontId, this.lineId1);//write cmd for front to disconnect
			this.cmd("Delete", this.highlightID1);
			//this.cmd("Connect", this.dummyfrontId, this.indexArrayId[this.front]);
		}
		
		this.cmd("Step");
		this.rear = this.rear + 1;
		this.cmd("CreateHighlightCircle", this.highlightID2, "#0000FF", REAR_VAL_X, FRONT_VAL_Y);
		this.cmd("Step");
		this.cmd("SetText", this.rearValId, this.rear);
		this.cmd("Step");
		
		if (this.rear == 0) {
			this.cmd("DisConnect", this.dummyRearId, this.lineId1);
		} else {
			this.cmd("DisConnect", this.dummyRearId, this.indexArrayId[this.rear - 1]);
		}
		
		this.cmd("Connect", this.dummyRearId, this.indexArrayId[this.rear]);
		
		var xPos = (this.rear) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(this.rear / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;
		
		this.cmd("Move", this.highlightID2, xPos, yPos - ARRAY_ELEM_HEIGHT);
		this.cmd("Step");
		this.cmd("Move", this.displayVal, xPos, yPos);
		this.cmd("Step");
		this.cmd("Delete", this.highlightID2);
		this.cmd("SetText", this.arrayId[this.rear], elemToPush);
		this.cmd("Delete", this.displayVal, "");
		this.cmd("Delete", this.displayText, "");
		//this.enqueueValue = "";
		this.cmd("Step");
	}
	
	//this.cmd("Delete", this.displayText);
	//this.cmd("Delete", this.displayVal);
	return this.commands;
}

CircularQueueArray.prototype.dequeue = function(ignored) {
	this.commands = new Array();
	this.highlightID1 = this.nextIndex++;
	this.highlightID2 = this.nextIndex++;
	
	var xPos = (this.rear) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
	var yPos = Math.floor(this.rear / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;
	
	if (!(this.front == -1)) {
		if (this.rear == this.front) {
			this.rear = this.front = -1;
		} else if (this.front == SIZE - 1) {
			this.front = 0;
		} else {
			this.front = this.front + 1;
			this.cmd("CreateHighlightCircle", this.highlightID1, "#0000FF", FRONT_VAL_X, FRONT_VAL_Y);
			this.cmd("Step");
			this.cmd("SetText", this.frontValId, this.front);
			this.cmd("Step");
			//this.cmd("Move", this.highlightID1, xPos, yPos - ARRAY_ELEM_HEIGHT);
		}
	}
	
	
	return this.commands;
}
/*
CircularQueueArray.prototype.clearAll = function() {
	this.commands = new Array();
	return this.commands;
}
*/

CircularQueueArray.prototype.displayAll = function() {
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
	$(toSelector).offset({top : l.top, left : l.left});
	TweenMax.to(toSelector, 1, {top : 0, left : 0, onComplete : function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flip(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete : function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete : function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}