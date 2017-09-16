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

var frontVal, rearVal, queueArr = [], displayArr = [];

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
	this.arrayID = new Array(SIZE);
	this.indexArrayID = new Array(SIZE);
	this.dummyIndexArrayID = new Array(SIZE);
	this.enqueueData = new Array(SIZE);
	this.lineID1 = this.nextIndex++;
	this.lineID2 = this.nextIndex++;
	this.frontLabelID = this.nextIndex++;
	this.frontValID = this.nextIndex++;
	this.dummyFrontID = this.nextIndex++;
	this.rearLabelID = this.nextIndex++;
	this.rearValID = this.nextIndex++;
	this.dummyRearID = this.nextIndex++;
	
	for (var i = 0; i < SIZE; i++) {
		this.arrayID[i] = this.nextIndex++;
		this.indexArrayID[i] = this.nextIndex++;
		this.dummyIndexArrayID[i] = this.nextIndex++;
		/* End of id's creation*/
		
		var xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;	//indexes
		var x1 = ARRAY_START_X - ARRAY_ELEM_WIDTH / 2;
		var y2 = ARRAY_START_Y - ARRAY_ELEM_WIDTH / 2;
		var y1 = y2 - 40;
		/*End of variables */
		
		this.cmd("CreateRectangle", this.arrayID[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("CreateLabel", this.indexArrayID[i], i, xPos, yPos - ARRAY_ELEM_HEIGHT);
		this.cmd("SetTextColor", this.indexArrayID[i], "#006600");
		this.cmd("CreateLabel", this.dummyIndexArrayID[i], "", xPos, yPos - ARRAY_ELEM_HEIGHT - 8);
	}

	this.cmd("DrawLine", this.lineID1, x1, y1, x1, y2);
	
	x1 = (SIZE - 1) * ARRAY_ELEM_WIDTH + ARRAY_START_X + ARRAY_ELEM_WIDTH / 2;	//line2
	
	this.cmd("DrawLine", this.lineID2, x1, y1, x1, y2);
	this.cmd("CreateLabel", this.frontLabelID, "front : ", 275, FRONT_VAL_Y);
	this.cmd("CreateLabel", this.frontValID, "-1", FRONT_VAL_X, FRONT_VAL_Y);
	this.cmd("SetTextColor", this.frontValID, "#006600");
	this.cmd("CreateLabel", this.dummyFrontID, "", FRONT_VAL_X, 60);
	this.cmd("Connect", this.dummyFrontID, this.lineID1);
	
	this.cmd("CreateLabel", this.rearLabelID, "rear : ", 375, FRONT_VAL_Y);
	this.cmd("CreateLabel", this.rearValID, "-1", REAR_VAL_X, FRONT_VAL_Y);
	this.cmd("SetTextColor", this.rearValID, "#006600");//a1126c
	this.cmd("CreateLabel", this.dummyRearID, "", REAR_VAL_X, 60);
	this.cmd("Connect", this.dummyRearID, this.lineID1);
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

CircularQueueArray.prototype.reset = function() {
	this.rear = 0;
	this.nextIndex = this.initialIndex;
}

CircularQueueArray.prototype.enqueueCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	var enqueueVal = this.enqueueValue.value;
	if (enqueueVal != "" && !isNaN(enqueueVal)) {
		$('#dequeuMethod, #displayMethod').addClass('hide');
		$('#enqueuMethod').removeClass('hide');
		frontVal = this.front;
		rearVal = this.rear;
		queueArr.push(parseInt(enqueueVal));
		
		this.implementAction(this.enqueue.bind(this), enqueueVal);
	}
}

CircularQueueArray.prototype.dequeueCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	$('#enqueuMethod, #displayMethod').addClass('hide');
	$('#dequeuMethod').removeClass('hide');
	frontVal = this.front;
	rearVal = this.rear;
	this.implementAction(this.dequeue.bind(this), "");
}

CircularQueueArray.prototype.displayCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	$('#dequeuMethod, #enqueuMethod').addClass('hide');
	$('#displayMethod').removeClass('hide');
	frontVal = this.front;
	rearVal = this.rear;
	this.implementAction(this.displayData.bind(this), "");
}

CircularQueueArray.prototype.displayData = function(ignored) {
	this.commands = new Array();
	this.displayAll();
	return this.commands;
}

CircularQueueArray.prototype.clearCallback = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.clearData.bind(this), "");
}

CircularQueueArray.prototype.clearData = function(ignored) {
	this.commands = new Array();
	this.clearAll();
	return this.commands;
}

CircularQueueArray.prototype.enqueue = function(elemToPush) {
	this.commands = new Array();
	$('#queueMain').removeClass('hide');
	$('#lastCall').text('enqueue(' + parseInt(elemToPush) + ');');
	//$("#queueMain").scrollTo($("#mainCallMethod > div:last-child()"), 100);
	
	this.introSteps("#lastCall", '', 'hide');
	this.introSteps("#enqueuMethod", 'right', 'show');
	
	if (!((this.rear == SIZE - 1 && this.front == 0) || (this.rear + 1 == this.front))) {
		displayArr.push(parseInt(elemToPush));
		this.highlightID = this.nextIndex++;
		this.displayText = this.nextIndex++;
		this.displayVal = this.nextIndex++;
		this.dummyDisplayVal = this.nextIndex++;
		
		this.cmd("CreateLabel", this.displayText, "Enqueue Value :", 50, 50);
		this.cmd("CreateLabel", this.displayVal, parseInt(elemToPush), 100, 50);
		this.cmd("SetTextColor", this.displayVal, "#0645aa");
		this.cmd("CreateLabel", this.dummyDisplayVal, "", 100, 50);
		
		if (this.rear == SIZE - 1) {
			this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", REAR_VAL_X, FRONT_VAL_Y);
			this.cmd("Step");
			this.cmd("SetText", this.rearValID, "-1");
			this.cmd("Step");
			this.cmd("DisConnect", this.dummyRearID, this.dummyIndexArrayID[this.rear]);
			
			this.rear = -1;
			
			this.cmd("Connect", this.dummyRearID, this.lineID1);
			this.cmd("Delete", this.highlightID);
			
			this.cmd("Step");
			this.cmd("Step");
			this.introSteps("#enqueuMethod", 'right', 'show');
			
		} else if (this.front == -1) {
		
			this.front = 0;
			
			this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", FRONT_VAL_X, FRONT_VAL_Y);
			this.cmd("Step");
			this.cmd("SetText", this.frontValID, this.front);
			this.cmd("Step");
			this.cmd("DisConnect", this.dummyFrontID, this.lineID1);//write cmd for front to disconnect
			this.cmd("Connect", this.dummyFrontID, this.dummyIndexArrayID[this.front]);
			this.cmd("Delete", this.highlightID);
		}
		
		this.cmd("Step");
	
		this.rear = this.rear + 1;
		
		this.enqueueData.push(parseInt(elemToPush));
		
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", REAR_VAL_X, FRONT_VAL_Y);
		this.cmd("Step");
		this.cmd("SetText", this.rearValID, this.rear);
		this.cmd("Step");
		
		if (this.rear == 0) {
			this.cmd("DisConnect", this.dummyRearID, this.lineID1);
		} else {
			this.cmd("DisConnect", this.dummyRearID, this.dummyIndexArrayID[this.rear - 1]);
		}
		
		this.cmd("Connect", this.dummyRearID, this.dummyIndexArrayID[this.rear]);
		
		var xPos = (this.rear) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(this.rear / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;
		
		this.cmd("Move", this.highlightID, xPos, yPos - ARRAY_ELEM_HEIGHT);
		this.cmd("Step");
		this.cmd("SetText", this.dummyDisplayVal, parseInt(elemToPush));
		this.cmd("SetTextColor", this.dummyDisplayVal, "#0645aa");
		this.cmd("Move", this.dummyDisplayVal, xPos, yPos);
		this.cmd("Step");
		this.cmd("Delete", this.highlightID);
		this.cmd("SetText", this.arrayID[this.rear], parseInt(elemToPush));
		this.cmd("SetTextColor", this.arrayID[this.rear], "#0645aa");
		this.cmd("Delete", this.displayVal);
		this.cmd("Delete", this.displayText);
		this.cmd("Delete", this.dummyDisplayVal);
		
		this.cmd("Step");
		
		this.introSteps("#outputDiv", '', 'hide');
		this.introSteps("#btnsDiv", 'left', 'show');
	} else {
		this.cmd("Step");
		this.introSteps("#btnsDiv", 'left', 'show');
	}
	
	
	return this.commands;
}

CircularQueueArray.prototype.dequeue = function(ignored) {
	this.commands = new Array();
	this.highlightID = this.nextIndex++;
	this.displayText = this.nextIndex++;
	this.displayVal = this.nextIndex++;
	var xPos = (this.front) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
	var yPos = Math.floor(this.front / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;
	this.dummyDelVal = displayArr[0];
	
	$('#queueMain').removeClass('hide');
	$('#lastCall').text('dequeue();');
	//$("#queueMain").scrollTo($("#mainCallMethod > div:last-child()"), 100);
	
	this.introSteps("#lastCall", '', 'hide');
	this.introSteps("#dequeuMethod", 'right', 'show');
	this.enqueueData.splice(0, 1);
	
	if (this.front != -1) {

		this.cmd("Step");
		this.cmd("Step");
		this.introSteps("#animationDiv", '', 'hide');

		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", FRONT_VAL_X, FRONT_VAL_Y);
		this.cmd("CreateLabel", this.displayText, "Dequeue Value : ", 50, 50);
		//this.cmd("CreateLabel", this.displayVal, this.enqueueData[this.front], xPos, yPos);
		this.cmd("CreateLabel", this.displayVal, this.dummyDelVal, xPos, yPos);
		this.cmd("SetTextColor", this.displayVal, "#0645aa");
		this.cmd("Step");
		this.cmd("Move", this.highlightID, xPos, yPos - ARRAY_ELEM_HEIGHT);
		this.cmd("Step");
		this.cmd("Move", this.displayVal, 100, 50);
		this.cmd("SetText", this.arrayID[this.front], "");
		
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("Delete", this.highlightID);
		this.cmd("Delete", this.displayText);
		this.cmd("Delete", this.displayVal);

		this.cmd("Step");
		this.cmd("Step");
		
		this.introSteps("#dequeDiv", 'right', 'show');

		this.cmd("Step");
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", FRONT_VAL_X, FRONT_VAL_Y);
		this.cmd("Step");
		
		if (this.rear == this.front) {
			this.cmd("SetText", this.frontValID, "-1");
			this.cmd("Step");
			this.cmd("DisConnect", this.dummyFrontID, this.dummyIndexArrayID[this.front]);
			this.cmd("Connect", this.dummyFrontID, this.lineID1);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
			
			this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", REAR_VAL_X, FRONT_VAL_Y);
			this.cmd("Step");this.cmd("Step");
			this.cmd("SetText", this.rearValID, "-1");
			this.cmd("DisConnect", this.dummyRearID, this.dummyIndexArrayID[this.rear]);
			this.cmd("Connect", this.dummyRearID, this.lineID1);
			this.cmd("Step");
			
			this.rear = this.front = -1;
			
			this.cmd("Delete", this.highlightID);
		} else if (this.front == SIZE - 1) {
			this.cmd("SetText", this.frontValID, "0");
			this.cmd("DisConnect", this.dummyFrontID, this.dummyIndexArrayID[this.front]);
			this.front = 0;
			this.cmd("Connect", this.dummyFrontID, this.dummyIndexArrayID[this.front]);
			this.cmd("Step");
			this.cmd("Delete", this.highlightID);
		} else {
			
			this.front = this.front + 1;
		
			this.cmd("SetText", this.frontValID, this.front);
			this.cmd("Step");
			this.cmd("DisConnect", this.dummyFrontID, this.lineID1);
			this.cmd("DisConnect", this.dummyFrontID, this.dummyIndexArrayID[this.front - 1]);
			this.cmd("Connect", this.dummyFrontID, this.dummyIndexArrayID[this.front]);
			this.cmd("Step");

			this.cmd("Delete", this.highlightID);
		}
	}	

	this.cmd("Step");
	this.introSteps("#btnsDiv", 'left', 'show');

	return this.commands;
}

CircularQueueArray.prototype.displayAll = function() {
	this.commands = new Array();
	var iVal;
	this.highlightID = this.nextIndex++;

	$('#queueMain').removeClass('hide');
	$('#lastCall').text('display();');
	
	this.introSteps("#lastCall", '', 'hide');
	this.introSteps("#displayMethod", 'right', 'show');
	
	if (this.front != -1 && this.rear != -1) {
		var xPos = this.front * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(this.front / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y - ARRAY_ELEM_HEIGHT;	//indexes
		
		this.cmd("Step");
		this.cmd("Step");
		
		this.introSteps("#displayDiv", 'right', 'show');

		if (this.front <= this.rear) {
			this.displayAnim(xPos, yPos, this.highlightID);
			
			for (iVal = this.front; iVal < this.rear; iVal++) {
				xPos = iVal * ARRAY_ELEM_WIDTH + ARRAY_START_X;
				yPos = Math.floor(iVal / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y - ARRAY_ELEM_HEIGHT;	//indexes
				
				this.cmd("CreateHighlightCircle", this.highlightID,"#0000FF", xPos, yPos);
				this.cmd("Step");
				xPos = xPos + ARRAY_ELEM_WIDTH;
				this.cmd("Move", this.highlightID, xPos, yPos);
				this.cmd("Step");
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
		} else if (this.rear < this.front) {
			this.displayAnim(xPos, yPos, this.highlightID);
			for (iVal = this.front; iVal < SIZE - 1; iVal++) {
				xPos = iVal * ARRAY_ELEM_WIDTH + ARRAY_START_X;
				yPos = Math.floor(iVal / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;	//indexes
				
				this.cmd("CreateHighlightCircle", this.highlightID,"#0000FF", xPos, yPos - ARRAY_ELEM_HEIGHT);
				this.cmd("Step");
				xPos = xPos + ARRAY_ELEM_WIDTH;
				this.cmd("Move", this.highlightID, xPos, yPos - ARRAY_ELEM_HEIGHT);
				this.cmd("Step");
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
			
			this.cmd("Step");
			this.introSteps("#outputDiv", '', 'hide');
			this.cmd("Step");
			this.introSteps("#displayDiv", 'right', 'show');
			
			for (iVal = 0; iVal <= this.rear; iVal++) {
				xPos = iVal * ARRAY_ELEM_WIDTH + ARRAY_START_X;
				yPos = Math.floor(iVal / ARRRAY_ELEMS_PER_LINE) * ARRAY_LINE_SPACING + ARRAY_START_Y;	//indexes
				this.cmd("CreateHighlightCircle", this.highlightID,"#0000FF", xPos, yPos - ARRAY_ELEM_HEIGHT);
				this.cmd("Step");
				if (iVal < this.rear) {
					xPos = xPos + ARRAY_ELEM_WIDTH;
					this.cmd("Move", this.highlightID, xPos, yPos - ARRAY_ELEM_HEIGHT);
					this.cmd("Step");
				}
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
			}
		}
		
		this.cmd("Step");
		this.introSteps("#outputDiv", '', 'hide');
	}
	
	this.cmd("Step");
	this.introSteps("#btnsDiv", 'left', 'show');

	return this.commands;
}

CircularQueueArray.prototype.clearAll = function() {
	this.commands = new Array();
	
	this.introSteps('#animationDiv', 'left', 'show');
	
	this.enqueueData = [];
	displayArr = [];
	queueArr = [];
	rearVal = -1;
	frontVal = -1;
	
	if (this.front != -1 && this.rear != -1) {
		if (this.front <= this.rear) {
			for (let i = this.front; i <= this.rear; i++) {
				this.cmd("SetText", this.arrayID[i], "");
			}
		} else {
			for (let i = this.front; i <= SIZE - 1; i++) {
				this.cmd("SetText", this.arrayID[i], "");
			}
			for (let i = 0; i <= this.rear; i++) {
				this.cmd("SetText", this.arrayID[i], "");
			}
		}
		
		this.cmd("SetText", this.rearValID, "-1");
		this.cmd("DisConnect", this.dummyRearID, this.dummyIndexArrayID[this.rear]);
		this.cmd("Step");
		this.cmd("Connect", this.dummyRearID, this.lineID1);
		this.cmd("Step");
		
		this.cmd("SetText", this.frontValID, "-1");
		this.cmd("DisConnect", this.dummyFrontID, this.dummyIndexArrayID[this.front]);
		this.cmd("Step");
		this.cmd("Connect", this.dummyFrontID, this.lineID1);
		this.cmd("Step");
		
		this.front = this.rear = -1;
	}
	
	this.cmd("Step");
	this.cmd("Step");
	this.introSteps("#btnsDiv", 'left', 'show');
	
	return this.commands;
}

CircularQueueArray.prototype.displayAnim = function(xPos, yPos, highlightID) {
	this.cmd("CreateHighlightCircle", highlightID, "#0000FF", FRONT_VAL_X, FRONT_VAL_Y);
	this.cmd("Step");
	this.cmd("Move", highlightID, xPos, yPos);
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("Delete", highlightID);
}

CircularQueueArray.prototype.introSteps = function(id, position, tooltip) {
	this.cmd("SetNextIntroStep", id, "", position, tooltip);
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
}


var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new CircularQueueArray(animManag, canvas.width, canvas.height);
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

