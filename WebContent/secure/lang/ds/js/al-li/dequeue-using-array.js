var ARRAY_START_X = 70;
var ARRAY_START_Y = 280;
var ARRAY_ELEM_WIDTH = 40;
var ARRAY_ELEM_HEIGHT = 40;

var ARRRAY_ELEMS_PER_LINE = 10;

var Y_VALUE = 70;
var FRONT_LABEL_X = 370;
var FRONT_VAL_X = 420;
var REAR_LABEL_X = 470;
var REAR_VAL_X = 520;
var DISPLAY_VAL_Y = 30;

var SIZE = 20;
var rearVal, frontVal, deQArr = [];

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
	this.front = -1;
	this.rear = -1;
}

DeQueueArray.prototype.addControls = function() {
	this.controls = [];
	
	this.injectValue = document.getElementById("injectText");
	this.injectValue.onkeydown = this.returnSubmit(this.injectValue, this.injectCallBack.bind(this), 4);

	this.injectButton = document.getElementById("injectBtn");
	this.injectButton.onclick = this.injectCallBack.bind(this);
	this.controls.push(this.injectValue);
	this.controls.push(this.injectButton);

	this.popButton = document.getElementById("popBtn");
	this.popButton.onclick = this.popCallBack.bind(this);
	this.controls.push(this.popButton);
	
	this.pushValue = document.getElementById("pushText");
	this.pushValue.onkeydown = this.returnSubmit(this.pushValue, this.pushCallBack.bind(this), 4);

	this.pushButton = document.getElementById("pushBtn");
	this.pushButton.onclick = this.pushCallBack.bind(this);
	this.controls.push(this.pushValue);
	this.controls.push(this.pushButton);
	
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
	this.lineID1 = this.nextIndex++;
	this.lineID2 = this.nextIndex++;
	this.highlightID = this.nextIndex++;
	this.injectLabelID = this.nextIndex++;
	this.injectValID = this.nextIndex++;
	this.dummyInjectValID = this.nextIndex++;
	this.popLabelID = this.nextIndex++;
	this.popValID = this.nextIndex++;
	
	for (var i = 0; i < SIZE; i++) {
		this.arrayID[i] = this.nextIndex++;
		this.indexArrayID[i] = this.nextIndex++;
		this.dummyIndexArrayID[i] = this.nextIndex++;
		
		var xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y;
		
		this.cmd("CreateRectangle", this.arrayID[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.arrayID[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("SetTextColor", this.indexArrayID[i], "#a1126c");
		this.cmd("CreateLabel", this.dummyIndexArrayID[i], "", xPos, yPos - ARRAY_ELEM_WIDTH - 8);
		
		this.cmd("SetTextColor", this.arrayID[i], "#000000");
		this.cmd("SetText", this.arrayID[i], "");
	}
	
	this.cmd("CreateLabel", this.frontLabelID, "front : ", FRONT_LABEL_X, Y_VALUE);
	this.cmd("CreateLabel", this.frontValID, "-1", FRONT_VAL_X, Y_VALUE);
	this.cmd("SetTextColor", this.frontValID, "#800080");
	this.cmd("CreateLabel", this.dummyFrontValID, "", FRONT_VAL_X, Y_VALUE + 8);
	
	this.cmd("CreateLabel", this.rearLabelID, "rear : ", REAR_LABEL_X, Y_VALUE);
	this.cmd("CreateLabel", this.rearValID, "-1", REAR_VAL_X, Y_VALUE);
	this.cmd("SetTextColor", this.rearValID, "#800080");
	this.cmd("CreateLabel", this.dummyRearValID, "", REAR_VAL_X, Y_VALUE + 8);
	
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

DeQueueArray.prototype.injectCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	frontVal = this.front;
	rearVal = this.rear;
	
	var injectVal = this.injectValue.value;
	if (injectVal != "" && !isNaN(injectVal)) {
		btnName = 'inject';
		deQArr.push(parseInt(injectVal));
		injectMethod();
		this.implementAction(this.inject.bind(this), injectVal);
	}
}

DeQueueArray.prototype.popCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	frontVal = this.front;
	rearVal = this.rear;
	btnName = 'pop';
	popMethod();
	this.implementAction(this.pop.bind(this), "");
}


DeQueueArray.prototype.pushCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	frontVal = this.front;
	rearVal = this.rear;
	btnName = 'push';
	var pushVal = this.pushValue.value;
	if (pushVal != "" && !isNaN(pushVal)) {
		pushMethod();
		this.implementAction(this.push.bind(this), pushVal);
	}
}

DeQueueArray.prototype.ejectCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	frontVal = this.front;
	rearVal = this.rear;
	btnName = 'eject';
	ejectMethod();
	this.implementAction(this.eject.bind(this), "");
}

DeQueueArray.prototype.displayCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	frontVal = this.front;
	rearVal = this.rear;
	btnName = 'display';
	displayMethod();
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

DeQueueArray.prototype.inject = function(elemToPush) {
	this.commands = new Array();
	
	this.fstStep(parseInt(elemToPush));
	
	if (this.rear != SIZE - 1) {
		
		this.rear++;
		this.enqueueFun(elemToPush, "Injected value is : ", REAR_VAL_X, this.rearValID, this.rear);
		
		if (this.rear == 0) {
			this.cmd("DisConnect", this.dummyRearValID, this.lineID1);
		} else {
			this.cmd("DisConnect", this.dummyRearValID, this.dummyIndexArrayID[this.rear - 1]);
		}
		
		this.cmd("Connect", this.dummyRearValID, this.dummyIndexArrayID[this.rear]);
		this.movingEnqueueValue(this.rear, elemToPush);
		
		if (this.front != -1) {
			this.cmd("Delete", this.injectLabelID);
			this.cmd("Delete", this.injectValID);
		}
		
		this.introSteps('#injectDiv', 'right', 'show');
		
		if (this.front == -1) {
			
			this.front = 0;
			this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", FRONT_VAL_X, Y_VALUE);
			this.cmd("Step");
			this.cmd("SetText", this.frontValID, this.front);
			this.cmd("Step");
			this.cmd("DisConnect", this.dummyFrontValID, this.lineID1);
			this.cmd("Connect", this.dummyFrontValID, this.dummyIndexArrayID[this.front]);
			this.cmd("step");
			this.cmd("Delete", this.highlightID);
			this.cmd("Delete", this.injectLabelID);
			this.cmd("Delete", this.injectValID);
			this.introSteps("#printSuccess", '', 'hide');
		}
	}
	this.introSteps("#btnsDiv", 'left', 'show');
	return this.commands;
}

DeQueueArray.prototype.pop = function(ignored) {
	this.commands = new Array();
	var xPos = (this.front) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
	var yPos = Math.floor(this.front / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y;
	
	this.fstStep('');
	
	if (this.front != -1) {
	
		this.introSteps("#animationDiv", '', 'hide');
		this.dequeueFun(xPos, yPos, FRONT_VAL_X, "Popped value is : ", deQArr[0], this.front);
		this.introSteps("#popDiv", 'right', 'show');
		
		if (this.front == this.rear) {
			this.assignFrontNRearToMinusOne();
		} else {
			this.front++;
			this.incRearRFront(FRONT_VAL_X, this.frontValID, this.front, this.dummyFrontValID, this.front - 1);
		}
		this.cmd("Step");
		this.cmd("Delete", this.highlightID);
	}
	this.introSteps("#btnsDiv", 'left', 'show');
	return this.commands;
}

DeQueueArray.prototype.push = function(elemToPush) {
	this.commands = new Array();
	
	this.fstStep(parseInt(elemToPush));
	
	if (!(this.front == -1 || this.front == 0)) {
		deQArr.splice(0, 0, parseInt(elemToPush));
		this.front--;
		this.enqueueFun(elemToPush, "Pushed value is : ", FRONT_VAL_X, this.frontValID, this.front);
		this.cmd("DisConnect", this.dummyFrontValID, this.dummyIndexArrayID[this.front + 1]);
		
		if (this.front != -1) {
			this.cmd("Connect", this.dummyFrontValID, this.dummyIndexArrayID[this.front]);
		} else {
			this.cmd("Connect", this.dummyFrontValID, this.lineID1);
		}
		
		this.movingEnqueueValue(this.front, elemToPush);
		this.cmd("Delete", this.injectLabelID);
		this.cmd("Delete", this.injectValID);
		this.introSteps("#printSuccess", '', 'hide');
	}
	this.introSteps("#btnsDiv", 'left', 'show');
	return this.commands;
}

DeQueueArray.prototype.eject = function(ignored) {
	this.commands = new Array();
	
	var xPos = (this.rear) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
	var yPos = Math.floor(this.rear / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y;
	
	this.fstStep('');
	
	if (this.rear != -1) {
		this.introSteps("#animationDiv", '', 'hide');
		this.dequeueFun(xPos, yPos, REAR_VAL_X, "Ejected value is : ", deQArr[deQArr.length - 1], this.rear);
		this.introSteps("#ejectDiv", 'right', 'show');
		
		if (this.front == this.rear) {
			this.assignFrontNRearToMinusOne();
		} else {
			this.rear--;
			this.incRearRFront(REAR_VAL_X, this.rearValID, this.rear, this.dummyRearValID, this.rear + 1);
		}
		
		this.cmd("Step");
		this.cmd("Delete", this.highlightID);
	}
	this.introSteps("#btnsDiv", 'left', 'show');
	
	return this.commands;
}


DeQueueArray.prototype.displayAll = function() {
	this.commands = new Array();
	this.dummyDisplayId = new Array(SIZE);
	
	this.fstStep('');
	
	if (!(this.front == -1 && this.rear == -1)) {
		var m = 0;
		let t = ARRAY_START_X + 70;
		var xPos = (this.front) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(this.front / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y;

		this.introSteps("#displayDiv", 'right', 'show');
		
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", FRONT_VAL_X, Y_VALUE);
		this.cmd("Step");
		this.cmd("Move", this.highlightID, xPos, yPos - ARRAY_ELEM_WIDTH - 4);
		this.cmd("Step");
		this.cmd("CreateLabel", this.injectLabelID, "Elements in the dequeue : ", ARRAY_START_X, DISPLAY_VAL_Y);
		
		for (let iVal = this.front; iVal <= this.rear; iVal++) {
			xPos = iVal * ARRAY_ELEM_WIDTH + ARRAY_START_X;
			yPos = Math.floor(iVal / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y - ARRAY_ELEM_WIDTH - 4;
			if (iVal != this.front) { 
				this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos - ARRAY_ELEM_WIDTH, yPos);
				xPos = xPos;
				this.cmd("Move", this.highlightID, xPos, yPos);
				this.cmd("Step");
			}
			
			this.cmd("Step");
			this.dummyDisplayId[iVal] = this.nextIndex++;
			yPos = yPos + ARRAY_ELEM_WIDTH + 4;
			this.cmd("CreateLabel", this.dummyDisplayId[iVal], "", t, DISPLAY_VAL_Y);
			this.cmd("CreateLabel", this.dummyInjectValID, deQArr[m], xPos, yPos);
			this.cmd("SetHighlight", this.dummyInjectValID, "#0000FF");
			this.cmd("Move", this.dummyInjectValID, t, DISPLAY_VAL_Y);
			this.cmd("Step");
			this.cmd("SetText", this.dummyDisplayId[iVal], deQArr[m]);
			this.cmd("Step");
			this.cmd("Delete", this.dummyInjectValID);
			this.cmd("Delete", this.highlightID);
			m++;
			t = t + 30;
		}
		
		this.cmd("Step");
		this.cmd("Delete", this.injectLabelID);
		
		for (let iVal = this.front; iVal <= this.rear; iVal++) {
			this.cmd("Delete", this.dummyDisplayId[iVal]);
		}
		this.introSteps("#outputDiv", '', 'hide');
	}
	this.introSteps("#btnsDiv", 'left', 'show');
	return this.commands;
}

DeQueueArray.prototype.clearAll = function() {
	this.commands = new Array();
	deQArr = [];
	frontVal = rearVal = -1;
	
	this.introSteps('#animationDiv', 'left', 'show');
	
	for (let i = this.front; i <= this.rear; i++) {
		this.cmd("SetText", this.arrayID[i], "");
	}
	
	this.cmd("SetText", this.frontValID, "-1");
	this.cmd("DisConnect", this.dummyFrontValID, this.dummyIndexArrayID[this.front]);
	this.cmd("Connect", this.dummyFrontValID, this.lineID1);
	this.cmd("Step");
	
	this.cmd("SetText", this.rearValID, "-1");
	this.cmd("DisConnect", this.dummyRearValID, this.dummyIndexArrayID[this.rear]);
	this.cmd("Connect", this.dummyRearValID, this.lineID1);
	this.front = this.rear = -1;
	this.cmd("step");
	this.introSteps("#btnsDiv", 'left', 'show');
	return this.commands;
}

DeQueueArray.prototype.fstStep = function(val) {
	$('#queueMain').removeClass('hide');
	$("#mainCallMethod *").removeAttr("id");
	$('#mainCallMethod').append('<span id="lastCall" class="opacity00">' + btnName + '(' + val + ');</span>\n');
	$('#lastCall').text(btnName + '(' + val + ');');

	this.introSteps("#lastCall", '', 'hide');
	$('#' + btnName + 'Method').removeClass('hide');
	this.introSteps('#' + btnName + 'Method', 'right', 'show');
}

DeQueueArray.prototype.introSteps = function(id, position, tooltip) {
	this.cmd("SetNextIntroStep", id, "", position, tooltip);
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
}

DeQueueArray.prototype.enqueueFun = function(elemToPush, text, xVal, id, val) {
	this.cmd("CreateLabel", this.injectLabelID, text, ARRAY_START_X, DISPLAY_VAL_Y);
	this.cmd("CreateLabel", this.injectValID, parseInt(elemToPush), ARRAY_START_X + 50, DISPLAY_VAL_Y);
	this.cmd("Step");
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xVal, Y_VALUE);
	this.cmd("Step");
	this.cmd("SetText", id, val);
	this.cmd("Step");
}

DeQueueArray.prototype.movingEnqueueValue = function(val, elemToPush) {
	var xPos = (val) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
	var yPos = Math.floor(val / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y;

	this.cmd("Step");
	this.cmd("Move", this.highlightID, xPos, yPos - ARRAY_ELEM_WIDTH - 4);
	this.cmd("SetHighlight", this.injectValID, "#0000FF");
	this.cmd("Step");
	this.cmd("CreateLabel", this.dummyInjectValID, parseInt(elemToPush), ARRAY_START_X + 50, DISPLAY_VAL_Y);
	this.cmd("Move", this.dummyInjectValID, xPos, yPos);
	this.cmd("Step");
	this.cmd("SetText", this.arrayID[val], parseInt(elemToPush));
	this.cmd("SetHighlight", this.injectValID, "");
	this.cmd("Delete", this.highlightID);
	this.cmd("Delete", this.dummyInjectValID);
	this.cmd("Step");
}

DeQueueArray.prototype.dequeueFun = function(xPos, yPos, pos, text, val, i) {
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", pos, Y_VALUE);
	this.cmd("Step");
	this.cmd("Move", this.highlightID, xPos, yPos - ARRAY_ELEM_WIDTH - 4);
	this.cmd("CreateLabel", this.popLabelID, text, ARRAY_START_X, DISPLAY_VAL_Y);
	this.cmd("CreateLabel", this.popValID, val, xPos, yPos);
	this.cmd("SetHighlight", this.popValID, "#0000FF");
	this.cmd("Step");
	this.cmd("SetText", this.arrayID[i], "");
	this.cmd("Move", this.popValID, ARRAY_START_X + 50, DISPLAY_VAL_Y);
	this.cmd("Step");
	this.cmd("SetHighlight", this.popValID, "");
	this.cmd("Delete", this.highlightID);
	this.cmd("Step");
	this.cmd("Delete", this.popLabelID);
	this.cmd("Delete", this.popValID);
}

DeQueueArray.prototype.assignFrontNRearToMinusOne = function() {
	this.cmd("Step");
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", FRONT_VAL_X, Y_VALUE);
	this.cmd("Step");
	this.cmd("SetText", this.frontValID, "-1");
	this.cmd("Step");
	this.cmd("DisConnect", this.dummyFrontValID, this.dummyIndexArrayID[this.front]);
	this.cmd("Connect", this.dummyFrontValID, this.lineID1);
	this.cmd("Step");
	this.cmd("Delete", this.highlightID);
	this.cmd("Step");
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", REAR_VAL_X, Y_VALUE);
	this.cmd("Step");
	this.cmd("SetText", this.rearValID, "-1");
	this.cmd("Step");
	this.cmd("DisConnect", this.dummyRearValID, this.dummyIndexArrayID[this.rear]);
	this.cmd("Connect", this.dummyRearValID, this.lineID1);

	this.front = this.rear = -1;
}

DeQueueArray.prototype.incRearRFront = function(xVal, id, value, dummyId, idxVal) {
	this.cmd("Step");
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xVal, Y_VALUE);
	this.cmd("Step");
	this.cmd("SetText", id, value);
	this.cmd("Step");
	this.cmd("DisConnect", dummyId, this.dummyIndexArrayID[idxVal]);
	this.cmd("Connect", dummyId, this.dummyIndexArrayID[value]);
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

