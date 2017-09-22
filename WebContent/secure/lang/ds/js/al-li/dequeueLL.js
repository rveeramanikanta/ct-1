var deQueueAlg;

var LL_START_X = 100;
var LL_START_Y = 200;
var LL_ELEM_WIDTH = 70;
var LL_ELEM_HEIGHT = 30;
var LL_NEXT_WIDTH = 40;
var LL_NEXT_HEIGHT = 30;

//FRONT field & label Height and width
var FRONT_LABLE_X = 50;
var FRONT_LABLE_Y = 120;
var FRONT_WIDTH = 50;
var FRONT_HEIGHT = 30;
var FRONT_POS_X = 100;
var FRONT_POS_Y = 120;

//REAR field & label set height and width
var REAR_LABEL_X = 50;
var REAR_LABEL_Y = 450;
var REAR_WIDTH = 50;
var REAR_HEIGHT = 30;
var REAR_POS_X = 100;
var REAR_POS_Y = 450;

//DATA field height and width x and Y position
var CQLL_ELE_WIDTH = 50;
var CQLL_ELE_HEIGHT = 30;
var CQLL_ELE_POS_X = 190;
var CQLL_ELE_POS_Y = 55;

//NEXT field height and width
var CQLL_NEXT_WIDTH = 45;
var CQLL_NEXT_HEIGHT = 30;
var CQLL_NEXT_POS_X = 235;
var CQLL_NEXT_POS_Y = 55;

//TEMP label set height and width
var TEMP_WIDTH = 220;
var TEMP_HEIGHT = 30;

var LL_ELEMS_PER_LINE = 5;
var LL_ELEM_SPACING = 150;
var LL_LINE_SPACING = 70;

//size of the linked list
var SIZE = 19;
var firstNodeAdd;
var firstNodeAdd = getRandomInt(1000, 5000);
var address = []
var queue = [];
var rearVal = 0;
var frontVal = 0;

function init() {
	var animMang = initCanvas();
	deQueueAlg = new DeQll(animMang, canvas.width, canvas.height);
}

function DeQll(am, w, h) {
	this.init(am, w. h);
}

DeQll.prototype = new Algorithm();
DeQll.prototype.constructor = DeQll;
DeQll.superclass = Algorithm.prototype;
DeQll.prototype.init = function(am, w, h) {
	DeQll.superclass.init.call(this, am ,w, h);
	this.nextIndex = 0;
	this.commands = [];
	this.Controls();
	this.setUp();
}

DeQll.prototype.Controls = function() {
	this.ButtonArr = [];
	//Inject element
	this.injectTextField = document.getElementById('injectText');
	this.injectTextField.onkeydown = this.returnSubmit(this.injectTextField, this.injectCallBack.bind(this),  3);
	this.injectButton = document.getElementById('injectBtn');
	this.injectButton.onclick = this.injectCallBack.bind(this);
	this.ButtonArr.push(this.injectTextField);
	this.ButtonArr.push(this.injectButton);
	
	// Push element
	this.pushTextField = document.getElementById('pushText');
	this.pushTextField.onkeydown = this.returnSubmit(this.pushTextField, this.pushCallBack.bind(this),  3);
	this.pushButton = document.getElementById('pushBtn');
	this.pushButton.onclick = this.pushCallBack.bind(this);
	this.ButtonArr.push(this.pushTextField);
	this.ButtonArr.push(this.pushButton);
	
	//Eject element
	this.ejectButton = document.getElementById('ejectBtn');
	this.ejectButton.onclick = this.ejectCallBack.bind(this);
	this.ButtonArr.push(this.ejectButton);
	
	//pop element
	this.popButton = document.getElementById('popBtn');
	this.popButton.onclick = this.popCallBack.bind(this);
	this.ButtonArr.push(this.popButton);
	
	//display elements
	this.dispalyButton = document.getElementById('displayBtn');
	this.dispalyButton.onclick = this.displayCallBack.bind(this);
	this.ButtonArr.push(this.displayBtn);
	
	//clear elements
	this.clearButton = document.getElementById('clearBtn');
	this.clearButton.onclick = this.clearCallBack.bind(this);
	this.ButtonArr.push(this.clearButton);
}

DeQll.prototype.setUp = function() {
	this.point1 = this.nextIndex++;
	this.point2 = this.nextIndex++;
	this.point3 = this.nextIndex++;
	this.point4 = this.nextIndex++;
	this.point5 = this.nextIndex++;
	this.point6 = this.nextIndex++;
	
	this.deQllData = new Array(SIZE);
	this.deQllNext = new Array(SIZE);
	this.dataAddress = new Array(SIZE);
	this.address = new Array(SIZE);
	
	for (var i = 0; i < SIZE; i++) {
		this.deQllData[i] = this.nextIndex++;
		this.deQllNext[i] = this.nextIndex++;
		this.dataAddress[i] = this.nextIndex++;
	}
	
	this.rear = 0;
	this.frontLable = this.nextIndex++;
	this.frontId = this.nextIndex++;
	this.rearLabel = this.nextIndex++;
	this.rearId = this.nextIndex++;
	this.frontRectID = this.nextIndex++;
	this.rearRectID = this.nextIndex++;
	
	this.cmd("CreateLabel", this.frontLable, "front : ", FRONT_LABLE_X, FRONT_LABLE_Y);
	this.cmd("CreateRectangle", this.frontRectID, "", FRONT_WIDTH, FRONT_HEIGHT, FRONT_POS_X, FRONT_POS_Y);
	this.cmd("CreateLabel", this.frontId, "NULL", FRONT_POS_X, FRONT_POS_Y);
	
	this.cmd("CreateLabel", this.rearLabel, "rear : ", REAR_LABEL_X, REAR_LABEL_Y);
	this.cmd("CreateRectangle", this.rearRectID, "", REAR_WIDTH, REAR_HEIGHT, REAR_POS_X, REAR_POS_Y);
	this.cmd("CreateLabel", this.rearId, "NULL", REAR_POS_X, REAR_POS_Y);
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

DeQll.prototype.inject = function(elementToInject) {
	this.commands = new Array();
	$('#mainFun').removeClass("hide");
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>inject(" + elementToInject + ");</span></div>");
	this.introNextStep("#lastCall", "right", "hide");
	$("input").attr("disabled", true);
	this.cmd("Step");
	$('.function').addClass('hide');
	$('#injectFun').removeClass('hide');
	this.introNextStep("#injectFun", "right", "");
	this.createANodeWithDataAndNext(elementToInject, true);
	this.introNextStep("#injectBlk1", "right", "");
	this.assignDataValueAndAddress(elementToInject, true);
	this.introNextStep("#injectElseIfElseBlk", "right", "");
	if (this.rear == 0) {
		this.cmd("SetPosition", this.frontId, TEMP_WIDTH - 10, TEMP_HEIGHT + CQLL_NEXT_POS_Y);
		this.cmd("SetText", this.frontId, randomAdd);
		this.cmd("Move", this.frontId, FRONT_POS_X, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("Connect", this.frontRectID, this.deQllData[this.rear]);
		this.cmd("Step");
		this.introNextStep("#injectElsePrintfBlk", "right", "");
		this.rearAddressChange();
		this.rear = this.rear + 1;
	} else {
		this.cmd("SetText", this.deQllNext[this.rear - 1], "");
		var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
		var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
		this.cmd("CreateLabel", this.dummyTmpAdd, "", nextX, nextY);
		this.cmd("SetPosition", this.dummyTmpAdd, TEMP_WIDTH - 10 , TEMP_HEIGHT + CQLL_NEXT_POS_Y);
		this.cmd("SetText", this.dummyTmpAdd, randomAdd);
		this.cmd("Move", this.dummyTmpAdd, nextX , nextY);
		this.cmd("Step");
		this.cmd("Delete", this.dummyTmpAdd);
		this.cmd("SetText", this.deQllNext[this.rear - 1], randomAdd);
		this.cmd("Connect", this.deQllNext[this.rear - 1], this.deQllData[this.rear]);
		//this.cmd("SetText", this.deQllNext[this.rear - 1], "");
		this.cmd("Step");
		this.introNextStep("#injectElsePrintfBlk", "right", "");
		this.rearAddressChange();
		this.rear = this.rear + 1;
	}
	var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	this.cmd("Move", this.tempLabel, nextX + 12, nextY - 20);
	this.resetLinkedListPositions(0);
	this.cmd("Step");
	$('#enqueueText').val("");
	this.cmd("Delete", this.displayText);
	this.cmd("Delete", this.displayVal);
	this.cmd("Delete", this.tempLabel);
	this.cmd("Step");
	this.introNextStep("#outputDiv", "", "hide");
	this.cmd("Step");
	this.introNextStep("#btnsDiv", "left", "");
	return this.commands;
}

DeQll.prototype.pop = function() {
	this.commands = new Array();
	this.deQueueTemp = this.nextIndex++;
	this.deQueueRectID = this.nextIndex++;
	this.deQueueId = this.nextIndex++;
	this.dummyTmpAdd = this.nextIndex++;
	$('#mainFun').removeClass("hide");
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>pop();</span></div>");
	this.introNextStep("#lastCall", "right", "hide");
	$("input").attr("disabled", true);
	this.cmd("Step");
	$('.function').addClass('hide');
	$('#popFun').removeClass('hide');
	this.introNextStep("#popFun", "right", "");
	this.createTempNode();
	this.cmd("Step");
	if (address.length == 0) {
		this.introNextStep("#popBlk1", "right", "");
		this.cmd("Step");
		this.cmd("Delete", this.deQueueTemp);
		this.cmd("Delete", this.deQueueRectID);
		this.cmd("Delete", this.deQueueId);
	} else {
		this.cmd("Step");
		this.introNextStep("#popBlk1", "right", "");
		this.assignFrontToTemp();
		this.introNextStep("#popElseIfElseBlk", "right", "");
		if (address.length == 1) {
			this.cmd("SetText", this.frontId, "NULL");
			this.cmd("Disconnect", this.frontRectID, this.deQllData[0]);
			this.cmd("SetText", this.rearId, "NULL");
			this.cmd("Disconnect", this.rearRectID, this.deQllData[0]);
			this.cmd("Step");
			this.introNextStep("#popElsePrintfBlk", "right", "");
			this.cmd("Step");
			this.introNextStep("#animationDiv", "", "hide");
			this.deleteNode(0);
			this.cmd("Step");
			this.rear = this.rear - 1;
		} else {
			this.cmd("Disconnect", this.frontRectID, this.deQllData[0]);
			var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
			var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
			this.cmd("CreateLabel", this.dummyTmpAdd, address[1], FRONT_POS_X, FRONT_POS_Y);
			this.cmd("SetPosition", this.dummyTmpAdd, 110, nextY);
			this.cmd("Move", this.dummyTmpAdd, FRONT_POS_X, FRONT_POS_Y);
			this.cmd("Step");
			this.cmd("SetText", this.frontId, address[1]);
			this.cmd("Connect", this.frontRectID, this.deQllData[1]);
			this.cmd("Step");
			this.cmd("Delete", this.dummyTmpAdd);
			this.cmd("Connect", this.frontRectID, this.deQllData[1]);
			this.cmd("Disconnect", this.deQllNext[0], this.deQllData[1]);
			this.introNextStep("#popElsePrintfBlk", "right", "");
			this.cmd("Step");
			this.introNextStep("#animationDiv", "", "hide");
			this.deleteNode(0);
			this.resetLinkedListPositions(1);
			this.cmd("Step");
			this.rear = this.rear - 1;
			this.deQllData.splice(0, 1);
			this.deQllNext.splice(0, 1);
			this.dataAddress.splice(0, 1);
			this.deQllData.push(this.nextIndex++);
			this.deQllNext.push(this.nextIndex++);
			this.dataAddress.push(this.nextIndex++);
		}		
	}
	this.cmd("Step");
	this.introNextStep("#btnsDiv", "left", "");
	return this.commands;
}

DeQll.prototype.display = function() {
	this.commands = new Array();
	this.deQueueTemp = this.nextIndex++;
	this.deQueueRectID = this.nextIndex++;
	this.deQueueId = this.nextIndex++;
	this.dummyTmpAdd = this.nextIndex++;
	this.displayText = this.nextIndex++;
	this.displayVal = new Array(SIZE);
	$('#mainFun').removeClass("hide");
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>display();</span></div>");
	this.introNextStep("#lastCall", "right", "hide");
	$("input").attr("disabled", true);
	this.cmd("Step");
	$(".function").addClass('hide');
	$("#displayFun").removeClass('hide');
	this.introNextStep("#displayFun", "right", "");
	for (let i = 0 ; i <= this.rear; i++) {
		this.displayVal[i] = this.nextIndex++;
	}
	if (address.length == 0) {
		this.cmd("Step");
		this.introNextStep("#btnsDiv", "left", "");
	} else {
		this.cmd("CreateLabel", this.deQueueTemp, "temp : ", 170, FRONT_LABLE_Y);
		this.cmd("CreateRectangle", this.deQueueRectID, "", FRONT_WIDTH, FRONT_HEIGHT, 220, FRONT_POS_Y);
		this.cmd("CreateLabel", this.deQueueId, "", 220, FRONT_POS_Y);
		this.cmd("CreateLabel", this.dummyTmpAdd, (address.length == 0) ? "NULL" : address[0], FRONT_POS_X, FRONT_POS_Y);
		this.cmd("Move", this.dummyTmpAdd, 220, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("SetText", this.deQueueId, (address.length == 0) ? "NULL" : address[0]);
		if (address.length != 0 ) { this.cmd("Connect", this.deQueueRectID, this.deQllData[0]);}
		this.cmd("Step");
		this.cmd("Delete", this.dummyTmpAdd);
		this.displayNode();
	}
	return this.commands;
}

DeQll.prototype.clearAll = function() {
	this.commands = new Array();
	this.introNextStep("#animationDiv", "left", "");
	this.cmd("SetText", this.frontId, "NULL");
	this.cmd("SetText", this.rearId, "NULL");
	if (this.rear != 0) {
		for (var i = 0; i < this.rear; i++) {
			this.cmd("Delete", this.deQllData[i]);
			this.cmd("Delete", this.deQllNext[i]);
			this.cmd("Delete", this.dataAddress[i]);
		}
	}
	address = []
	queue = [];
	rearVal = frontVal = 0;
	this.rear = 0;
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("Step");
	this.introNextStep("#btnsDiv", "left", "");
	return this.commands;
}

DeQll.prototype.eject = function() {
	this.commands = new Array();
	this.deQueueTemp = this.nextIndex++;
	this.deQueueRectID = this.nextIndex++;
	this.deQueueId = this.nextIndex++;
	this.dummyTmpAdd = this.nextIndex++;
	$('#mainFun').removeClass("hide");
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>eject();</span></div>");
	this.introNextStep("#lastCall", "right", "hide");
	this.cmd("Step");
	$("input").attr("disabled", true);
	$(".function").addClass('hide');
	$("#ejectFun").removeClass('hide');
	this.introNextStep("#ejectFun", "right", "");
	this.createTempNode();
	this.cmd("Step");
	this.introNextStep("#ejectBlk1", "right", "");
	if (address.length == 0) {
		this.cmd("Step");
		this.cmd("Delete", this.deQueueTemp);
		this.cmd("Delete", this.deQueueRectID);
		this.cmd("Delete", this.deQueueId);
	} else {
		this.assignFrontToTemp();
		this.cmd('Step');
		this.introNextStep("#ejectElseIfElseBlk", "right", "");
		if (address.length == 1) {
			this.cmd("SetText", this.frontId, "NULL");
			this.cmd("Disconnect", this.frontRectID, this.deQllData[0]);
			this.cmd("SetText", this.rearId, "NULL");
			this.cmd("Disconnect", this.rearRectID, this.deQllData[0]);
			this.cmd("Step");
			this.introNextStep("#ejectElsePrintfBlk", "right", "");
			this.cmd("Step");
			this.introNextStep("#animationDiv", "", "hide");
			this.deleteNode(0);
			this.cmd("Step");
			this.rear = this.rear - 1;
		} else {
			var disPos = 0;
			this.enjectFunction(disPos);
		}		
	}
	this.cmd("Step");
	this.introNextStep("#btnsDiv", "left", "");
	return this.commands;
}

DeQll.prototype.push = function(elementToPush) {
	this.commands = new Array();
	
	$('#mainFun').removeClass("hide");
	$("#mainCalls *").removeAttr("id");
	$("#mainCalls").append("<div>\t<span id='lastCall'>push("+ elementToPush +");</span></div>");
	this.introNextStep("#lastCall", "right", "hide");
	this.cmd("Step");
	$("input").attr("disabled", true);
	$(".function").addClass('hide');
	$("#pushFun").removeClass('hide');
	this.introNextStep("#pushFun", "right", "");
	this.createANodeWithDataAndNext(elementToPush, false);
	this.introNextStep("#pushBlk1", "right", "");
	this.assignDataValueAndAddress(elementToPush, false);
	this.introNextStep("#pushElsePrintfBlk", "right", "");
	if (this.rear == 0) {
		this.cmd("SetPosition", this.frontId, TEMP_WIDTH - 10, TEMP_HEIGHT + CQLL_NEXT_POS_Y);
		this.cmd("SetText", this.frontId, randomAdd);
		this.cmd("Move", this.frontId, FRONT_POS_X, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("Connect", this.frontRectID, this.deQllData[this.rear]);
		this.rearAddressChange();
		this.rear = this.rear + 1;
		var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
		var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
		this.cmd("Move", this.tempLabel, nextX + 12, nextY - 20);
		this.resetLinkedListPositions(0);
		this.cmd("Step");
	} else {
		this.cmd("SetPosition", this.frontId, TEMP_WIDTH - 10, TEMP_HEIGHT + CQLL_NEXT_POS_Y);
		this.cmd("SetText", this.frontId, randomAdd);
		this.cmd("Move", this.frontId, FRONT_POS_X, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("Disconnect", this.frontRectID, this.deQllData[1]);
		this.cmd("Connect", this.frontRectID, this.deQllData[0]);
		
		this.rear = this.rear + 1;
		var nextX = (0) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
		var nextY = Math.floor((0) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
		this.cmd("Move", this.tempLabel, nextX + 12, nextY - 20);
		this.resetLinkedListPositions(2);
		this.cmd("Step");
	}
	this.cmd("Delete", this.tempLabel);
	this.cmd("Step");
	this.introNextStep("#outputDiv", "", "hide");
	this.cmd("Step");
	this.introNextStep("#btnsDiv", "left", "");
	$('#enqueueText').val("");
	this.cmd("Delete", this.displayText);
	this.cmd("Delete", this.displayVal);
	this.cmd("Step");
	
	return this.commands;
}

DeQll.prototype.createANodeWithDataAndNext = function(elementToInject, flag) {
	this.llData = new Array(SIZE);
	this.llNext = new Array(SIZE);
	if (flag) {
		this.llData[this.rear] = this.nextIndex++;
		this.llNext[this.rear] = this.nextIndex++;
	} else {
		this.deQllData.splice(0, 0, this.nextIndex++);
		this.deQllNext.splice(0, 0, this.nextIndex++);
		this.dataAddress.splice(0, 0, this.nextIndex++);
		this.llData.splice(0, 0, this.nextIndex++);
		this.llNext.splice(0, 0, this.nextIndex++);
	}
	this.tempLabel = this.nextIndex++;
	this.displayText = this.nextIndex++;
	this.displayVal = this.nextIndex++;
	this.dummyTmpAdd = this.nextIndex++;
	this.cmd("CreateLabel", this.displayText, "Entered Value : ", 50, 30);
	this.cmd("CreateLabel", this.displayVal, elementToInject, 100, 30);
	this.cmd("Step");
	this.cmd("CreateLabel", this.tempLabel, "temp", TEMP_WIDTH, TEMP_HEIGHT);
	this.cmd("CreateRectangle", this.deQllData[(flag) ? this.rear : 0], "", CQLL_ELE_WIDTH, CQLL_ELE_HEIGHT, CQLL_ELE_POS_X, CQLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llData[(flag) ? this.rear : 0], "", CQLL_ELE_POS_X, CQLL_ELE_POS_Y);
	this.cmd("SetBackgroundColor", this.deQllData[(flag) ? this.rear : 0], "#cce6ff");
	this.cmd("CreateRectangle", this.deQllNext[(flag) ? this.rear : 0], "", CQLL_NEXT_WIDTH, CQLL_NEXT_HEIGHT, CQLL_NEXT_POS_X, CQLL_NEXT_POS_Y);
	this.cmd("CreateLabel", this.llNext[(flag) ? this.rear : 0], "", CQLL_NEXT_POS_X, CQLL_NEXT_POS_Y);
	this.cmd("SetBackgroundColor", this.deQllNext[(flag) ? this.rear : 0], "#ccffcc");
	randomAdd = getRandomInt(1000, 5000);
	if (flag) {
		address[this.rear] = randomAdd;
	} else {
		address.splice(0, 0, randomAdd)
	}
	this.cmd("CreateLabel", this.dataAddress[(flag) ? this.rear : 0], randomAdd, TEMP_WIDTH - 10 , TEMP_HEIGHT + CQLL_NEXT_POS_Y);
	this.cmd("Step");
}

DeQll.prototype.assignDataValueAndAddress = function(elementToInject, flag) {
	this.cmd("SetPosition", this.llData[(flag) ? this.rear : 0], 100, 30);
	this.cmd("SetText", this.llData[(flag) ? this.rear : 0], elementToInject);
	this.cmd("Move", this.llData[(flag) ? this.rear : 0], CQLL_ELE_POS_X, CQLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.deQllData[(flag) ? this.rear : 0], elementToInject);
	if (flag) {
		this.cmd("SetText", this.deQllNext[(flag) ? this.rear : 0], "NULL");
	} else {
		this.cmd("CreateLabel", this.dummyTmpAdd, (this.rear == 0) ? "NULL" : address[1], FRONT_POS_X, FRONT_POS_Y);
		this.cmd("Move", this.dummyTmpAdd, CQLL_NEXT_POS_X, CQLL_NEXT_POS_Y);
		this.cmd("Step");
		this.cmd("SetText", this.deQllNext[(flag) ? this.rear : 0], (this.rear == 0)? "NULL" : address[1]);
		if (this.rear != 0) {
			this.cmd("Connect", this.deQllNext[(flag) ? this.rear : 0], this.deQllData[1]);
		}
		this.cmd("Step");
		this.cmd("Delete", this.dummyTmpAdd);
	}
	this.cmd("Delete", this.llData[(flag) ? this.rear : 0]);
	this.cmd("Step");
}

DeQll.prototype.enjectFunction = function(disPos) {
	var nextX = (disPos) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((disPos) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	
	if (disPos != this.rear - 2) {
		this.storeTempNextToTempNode(disPos);
		this.cmd("Delete", this.dummyTmpAdd);
		disPos++;
		this.cmd("Step");
		this.enjectFunction(disPos);
	} else {
		this.cmd("Step");
		this.introNextStep("#ejectSetRearToNull", "right", "");
		this.cmd("Step");
		this.cmd("CreateLabel", this.dummyTmpAdd, address[this.rear - 2], 220, FRONT_POS_Y);
		this.cmd("Move", this.dummyTmpAdd, REAR_POS_X, REAR_POS_Y);
		this.cmd("Step");
		this.cmd("SetText", this.rearId, address[this.rear - 2]);
		
		this.cmd("Disconnect", this.rearRectID, this.deQllData[this.rear - 1]);
		this.cmd("Connect", this.rearRectID, this.deQllData[this.rear - 2]);
		this.cmd("Step");
		this.cmd("Delete", this.dummyTmpAdd);
		
		this.cmd("Step");
		this.cmd("CreateLabel", this.dummyTmpAdd, address[this.rear - 1], nextX , nextY);
		this.cmd("Move", this.dummyTmpAdd, 220, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("SetText", this.deQueueId, address[this.rear - 1]);
		this.cmd("Disconnect", this.deQueueRectID, this.deQllData[this.rear - 2]);
		this.cmd("Connect", this.deQueueRectID, this.deQllData[this.rear - 1]);
		
		this.cmd("Step");
		this.cmd("Step");
		this.cmd("Delete", this.dummyTmpAdd);
		this.cmd("SetText", this.deQllNext[this.rear - 2], "NULL");
		this.cmd("Disconnect", this.deQllNext[this.rear - 2], this.deQllData[this.rear - 1]);
		this.cmd("Step");
		this.cmd("Step");
		
		this.introNextStep("#ejectElsePrintfBlk", "right", "");
		this.cmd("Step");
		this.introNextStep("#animationDiv", "", "hide");
		this.cmd("Step");
		this.deleteNode(this.rear - 1);
		this.rear = this.rear - 1;
		this.deQllData.splice(this.rear, 1);
		this.deQllNext.splice(this.rear, 1);
		this.dataAddress.splice(this.rear, 1);
		this.deQllData.push(this.nextIndex++);
		this.deQllNext.push(this.nextIndex++);
		this.dataAddress.push(this.nextIndex++);
	}
}


DeQll.prototype.storeTempNextToTempNode = function(disPos) {
	var nextX = (disPos) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((disPos) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	this.cmd("CreateLabel", this.dummyTmpAdd, address[disPos + 1], nextX , nextY);
	this.cmd("Move", this.dummyTmpAdd, 220, FRONT_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.deQueueId, address[disPos + 1]);
	this.cmd("Disconnect", this.deQueueRectID, this.deQllData[disPos]);
	this.cmd("Connect", this.deQueueRectID, this.deQllData[disPos + 1]);
}

DeQll.prototype.displayNode = function() {
	var disPos = 0;
	this.cmd("CreateLabel", this.displayText, "Elements in the queue : ", 60, 30);
	this.introNextStep("#displayBlk2", "", "");
	this.displayInfoValue(130, disPos);
	this.cmd("Step");
	this.tempNextToTemp(disPos);
	
}

DeQll.prototype.tempNextToTemp = function(disPos) {
	var nextX = (disPos) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((disPos) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	if (disPos != this.rear - 1) {
		this.storeTempNextToTempNode(disPos);
	} else {
		this.cmd("CreateLabel", this.dummyTmpAdd, "NULL", nextX , nextY);
		this.cmd("Move", this.dummyTmpAdd, 220, FRONT_POS_Y);
		this.cmd("Step");
		this.cmd("SetText", this.deQueueId, "NULL");
		this.cmd("Disconnect", this.deQueueRectID, this.deQllData[disPos]);
	}
	disPos++;
	this.cmd("Delete", this.dummyTmpAdd);
	this.cmd("Step");
	if (disPos != this.rear) {
		this.displayInfoValue(130 + (disPos * 30), disPos);
		this.cmd("Step");
		this.tempNextToTemp(disPos);
	} else {
		this.cmd("Step");
		this.cmd("Step");
		for (let i = 0 ; i <= this.rear - 1; i++) {
			this.cmd("Delete", this.displayVal[i]);
		}
		this.cmd("Delete", this.displayText);
		this.cmd("Delete", this.deQueueTemp);
		this.cmd("Delete", this.deQueueRectID);
		this.cmd("Delete", this.deQueueId);
		this.introNextStep("#outputDiv", "", "hide");
		this.cmd("Step");
		this.introNextStep("#btnsDiv", "left", "");
	}
}

DeQll.prototype.displayInfoValue = function(xPos, disPos) {
	this.dummyTmpAdd = this.nextIndex++;
	
	this.cmd("CreateLabel", this.displayVal[disPos], "", xPos, 30);
	var nextX = (disPos) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((disPos) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	
	this.cmd("CreateLabel", this.dummyTmpAdd, queue[disPos], nextX - (LL_ELEM_WIDTH / 2) - 5, nextY);
	this.cmd("Move", this.dummyTmpAdd, xPos , 30);
	this.cmd("Step");
	this.cmd("SetText", this.displayVal[disPos], queue[disPos]);
	this.cmd("Delete", this.dummyTmpAdd);
}

DeQll.prototype.createTempNode = function(){
	this.deQueueTemp = this.nextIndex++;
	this.deQueueRectID = this.nextIndex++;
	this.deQueueId = this.nextIndex++;
	
	this.cmd("CreateLabel", this.deQueueTemp, "temp : ", 170, FRONT_LABLE_Y);
	this.cmd("CreateRectangle", this.deQueueRectID, "", FRONT_WIDTH, FRONT_HEIGHT, 220, FRONT_POS_Y);
	this.cmd("CreateLabel", this.deQueueId, "NULL", 220, FRONT_POS_Y);
}

DeQll.prototype.assignFrontToTemp = function() {
	var nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	var nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y;
	
	this.cmd("CreateLabel", this.dummyTmpAdd, address[0], nextX, nextY);
	this.cmd("SetPosition", this.dummyTmpAdd, FRONT_POS_X, FRONT_POS_Y);
	this.cmd("Move", this.dummyTmpAdd, 220, FRONT_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.deQueueId, address[0]);
	this.cmd("Connect", this.deQueueRectID, this.deQllData[0]);
	this.cmd("Step");
	this.cmd("Delete", this.dummyTmpAdd);
}

DeQll.prototype.deleteNode = function(nodeNum) {
	var nextX = (nodeNum) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X;
	this.cmd("Move", this.deQllData[nodeNum], nextX, 50);
	this.cmd("Move", this.deQllNext[nodeNum], nextX + LL_ELEM_WIDTH - 25, 50);
	this.cmd("Move", this.dataAddress[nodeNum], nextX +  25, 80);
	this.cmd("Step");
	this.cmd("Step");
	
	this.cmd("Delete", this.deQllData[nodeNum]);
	this.cmd("Delete", this.deQllNext[nodeNum]);
	this.cmd("Delete", this.dataAddress[nodeNum]);
	this.cmd("Delete", this.deQueueRectID);
	this.cmd("Delete", this.deQueueId);
	this.cmd("Delete", this.deQueueTemp);
}

DeQll.prototype.rearAddressChange = function() {
	this.cmd("SetPosition", this.rearId, TEMP_WIDTH - 10, TEMP_HEIGHT + CQLL_NEXT_POS_Y);
	this.cmd("SetText", this.rearId, randomAdd);
	this.cmd("Move", this.rearId, REAR_POS_X, REAR_POS_Y);
	this.cmd("Step");
	if (this.rearId != 0) {
		this.cmd("Disconnect", this.rearRectID, this.deQllData[this.rear - 1]);
	}
	this.cmd("Connect", this.rearRectID, this.deQllData[this.rear]);
}


DeQll.prototype.resetLinkedListPositions = function(flag) {
		if (flag == 0) {
			let nextX = (this.rear - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
			let nextY = Math.floor((this.rear - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y;
			this.cmd("Move", this.deQllData[this.rear - 1], nextX, nextY);
			this.cmd("Move", this.deQllNext[this.rear - 1], nextX + LL_ELEM_WIDTH - 25, nextY);
			this.cmd("Move", this.dataAddress[this.rear - 1], nextX + 25, nextY + 25);
		} else if (flag == 1) {
			for (let i = 1; i < this.rear; i++) {
				let nextX = (this.rear - 1 - i) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
				let nextY = Math.floor((this.rear - 1 - i) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y;
				this.cmd("Move", this.deQllData[this.rear - i], nextX, nextY);
				this.cmd("Move", this.deQllNext[this.rear - i], nextX + LL_ELEM_WIDTH - 22, nextY);
				this.cmd("Move", this.dataAddress[this.rear - i], nextX + 10 , nextY + 25);
			}
		} else {
			for (var i = 0; i <= this.rear - 1; i++) {
				let nextX = (i) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X - LL_NEXT_WIDTH;
				let nextY = Math.floor((i) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y;
				this.cmd("Move", this.deQllData[i], nextX, nextY);
				this.cmd("Move", this.deQllNext[i], nextX + LL_ELEM_WIDTH - 22, nextY);
				this.cmd("Move", this.dataAddress[i], nextX + 10, nextY + 25);
			}
		}
}

DeQll.prototype.injectCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	var injectField = this.injectTextField.value;
	if (this.rear < SIZE && this.injectTextField.value != "") {
		var pushVal = this.injectTextField.value;
		queue.push(pushVal);
		this.implementAction(this.inject.bind(this), injectField);
	}
}

DeQll.prototype.ejectCallBack = function() {
	console.log("Eject call Back");
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.eject.bind(this), "");
}

DeQll.prototype.pushCallBack = function(event) {
	if($(".btn").is(":disabled")) {
		return;
	}
	var pushField = this.pushTextField.value;
	if (this.rear < SIZE && this.pushTextField.value != "") {
		var pushVal = this.pushTextField.value;
		//queue.push(pushVal);
		queue.splice(0, 0, pushVal)
		this.implementAction(this.push.bind(this), pushField);
	}
	console.log("Push Call Back");
}

DeQll.prototype.popCallBack = function() {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.pop.bind(this), "");
}

DeQll.prototype.displayCallBack = function() {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.display.bind(this), "");
}

DeQll.prototype.clearCallBack = function() {
	if($(".btn").is(":disabled")) {
		return;
	}
	this.implementAction(this.clearAll.bind(this), "");
}

DeQll.prototype.disableBtn = function() {
	for (var i = 0; i < this.Controls.length; i++) {
		this.Controls[i].disabled = true;
	}
}

DeQll.prototype.enableBtn = function() {
	for (var i = 0; i < this.Controls.length; i++) {
		this.Controls[i].enabled = false;
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

DeQll.prototype.introNextStep = function(id, position, ttClass) {
	this.cmd("SetNextIntroStep", id, "", position, ttClass);
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
}

function travel(fromSelector, toSelector, callBackFunction) {
	$(fromSelector).css("background-color", "yellow");
	var l = $(fromSelector).offset();
	$(toSelector).offset({
		top : l.top,
		left : l.left
	});
	TweenMax.to(toSelector, 1, { top : 0, left : 0, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flip(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').width() * 1.5)
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	var time = 0;
	if (fromId !== toId) {
		time = 1;
	}
	TweenMax.to(".arrow", time, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}




