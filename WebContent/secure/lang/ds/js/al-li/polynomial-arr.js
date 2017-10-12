var ARRAY1_START_X = 130;
var ARRAY1_START_Y = 200;
var ARRAY2_START_X = 530;
var ARRAY3_START_X = 330;
var ARRAY3_START_Y = 400;
var ARRAY_ELEM_WIDTH = 30;
var ARRAY_ELEM_HEIGHT = 30;

var ARRRAY_ELEMS_PER_LINE = 10;

var SIZE = 10;
var head1 = [], head2 = [], head3 = [], hpow1, hpow2;
var iVal = 1;

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
	
//	this.createValue = document.getElementById("create1Text");
	this.createButton = document.getElementById("createBtn");
	this.createButton.onclick = this.createCallBack.bind(this);
	//this.controls.push(this.createValue);
	this.controls.push(this.createButton);

	this.additionButton = document.getElementById("addBtn");
	this.additionButton.onclick = this.additionCallBack.bind(this);
	this.controls.push(this.additionButton);
	
	this.subtractionButton = document.getElementById("subBtn");
	this.subtractionButton.onclick = this.subtractionCallBack.bind(this);
	this.controls.push(this.subtractionButton);

	this.multiplicationButton = document.getElementById("mulBtn");
	this.multiplicationButton.onclick = this.multiplicationCallBack.bind(this);
	this.controls.push(this.multiplicationButton);

	this.displayButton = document.getElementById("displayBtn");
	this.displayButton.onclick = this.displayCallback.bind(this);
	this.controls.push(this.displayButton);
	
	this.testingButton = document.getElementById("testingBtn");
	this.testingButton.onclick = this.testingCallBack.bind(this);
	this.controls.push(this.testingButton);
	
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
	this.coeffID1 = new Array(SIZE);
	this.indexArrayID1 = new Array(SIZE);
	this.exponentArrayID1 = new Array(SIZE);
	this.exponentValID1 = new Array(SIZE);
	this.coeffID2 = new Array(SIZE);
	this.indexArrayID2 = new Array(SIZE);
	this.exponentArrayID2 = new Array(SIZE);
	this.exponentValID2 = new Array(SIZE);
	this.coeffID3 = new Array(SIZE);
	this.indexArrayID3 = new Array(SIZE);
	this.exponentArrayID3 = new Array(SIZE);
	this.exponentValID3 = new Array(SIZE);
	
	this.headID1 = this.nextIndex++;
	this.exponentID1 = this.nextIndex++;
	this.headID2 = this.nextIndex++;
	this.exponentID2 = this.nextIndex++;
	this.headID3 = this.nextIndex++;
	this.exponentID3 = this.nextIndex++;
	this.powerID1 = this.nextIndex++;
	this.powerValueID1 = this.nextIndex++;
	this.powerID2 = this.nextIndex++;
	this.powerValueID2 = this.nextIndex++;
	this.powerID3 = this.nextIndex++;
	this.powerValueID3 = this.nextIndex++;
	
	this.highlightID = this.nextIndex++;
	
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y;
	
	this.cmd("CreateLabel", this.headID1, "head1", xPos, yPos);
	this.cmd("CreateLabel", this.exponentID1, "", xPos, yPos + ARRAY_ELEM_WIDTH + 7);
	this.cmd("CreateLabel", this.powerID1, "hpow1", xPos + 150, yPos - (3 * ARRAY_ELEM_WIDTH));
	this.cmd("CreateRectangle", this.powerValueID1, "", ARRAY_ELEM_WIDTH + 10, ARRAY_ELEM_HEIGHT, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH));
	this.cmd("SetBackGroundColor", this.powerValueID1, "#ccc");
	
	xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY2_START_X;
	
	this.cmd("CreateLabel", this.headID2, "head2", xPos, yPos);
	this.cmd("CreateLabel", this.exponentID2, "", xPos, yPos + ARRAY_ELEM_WIDTH + 7);
	this.cmd("CreateLabel", this.powerID2, "hpow2", xPos + 150, yPos - (3 * ARRAY_ELEM_WIDTH));
	this.cmd("CreateRectangle", this.powerValueID2, "", ARRAY_ELEM_WIDTH + 10, ARRAY_ELEM_HEIGHT, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH));
	this.cmd("SetBackGroundColor", this.powerValueID2, "#ccc");
	
	/*xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
	yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y;
	
	this.cmd("CreateLabel", this.headID3, "head3", xPos, yPos);
	this.cmd("CreateLabel", this.exponentID3, "Exp", xPos, yPos + ARRAY_ELEM_WIDTH + 7);
	this.cmd("CreateLabel", this.powerID3, "hpow", xPos + 150, yPos - (3 * ARRAY_ELEM_WIDTH));
	this.cmd("CreateRectangle", this.powerValueID3, "", ARRAY_ELEM_WIDTH + 10, ARRAY_ELEM_HEIGHT, xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH));
	this.cmd("SetBackGroundColor", this.powerValueID3, "#ccc");*/
	
	for (var i = 0; i < SIZE; i++) {
		this.coeffID1[i] = this.nextIndex++;
		this.indexArrayID1[i] = this.nextIndex++;
		this.exponentValID1[i] = this.nextIndex++;
		this.exponentArrayID1[i] = this.nextIndex++;
		this.coeffID2[i] = this.nextIndex++;
		this.indexArrayID2[i] = this.nextIndex++;
		this.exponentValID2[i] = this.nextIndex++;
		this.exponentArrayID2[i] = this.nextIndex++;
		this.coeffID3[i] = this.nextIndex++;
		this.indexArrayID3[i] = this.nextIndex++;
		this.exponentValID3[i] = this.nextIndex++;
		this.exponentArrayID3[i] = this.nextIndex++;
		
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y;
		
		this.cmd("CreateRectangle", this.coeffID1[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.coeffID1[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID1[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("CreateLabel", this.exponentValID1[i], "", xPos, yPos + ARRAY_ELEM_WIDTH + 9);//exponent
		this.cmd("CreateLabel", this.exponentArrayID1[i], "", xPos + 5, yPos + ARRAY_ELEM_WIDTH);//exponent values
		
		this.cmd("SetTextColor", this.coeffID1[i], "#000000");
		this.cmd("SetText", this.coeffID1[i], "");
		
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY2_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y;
		
		this.cmd("CreateRectangle", this.coeffID2[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.coeffID2[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID2[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("CreateLabel", this.exponentValID2[i], "", xPos, yPos + ARRAY_ELEM_WIDTH + 9);
		this.cmd("CreateLabel", this.exponentArrayID2[i], "", xPos + 5, yPos + ARRAY_ELEM_WIDTH);
		
		this.cmd("SetTextColor", this.coeffID2[i], "#000000");
		this.cmd("SetText", this.coeffID2[i], "");
		
		/*xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY3_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY3_START_Y;
		
		this.cmd("CreateRectangle", this.coeffID3[i], "", ARRAY_ELEM_WIDTH, ARRAY_ELEM_HEIGHT, xPos, yPos);
		this.cmd("SetBackGroundColor", this.coeffID3[i], "#c4e4ed");
		this.cmd("CreateLabel", this.indexArrayID3[i], i, xPos, yPos - ARRAY_ELEM_WIDTH);
		this.cmd("CreateLabel", this.exponentValID3[i], "x", xPos, yPos + ARRAY_ELEM_WIDTH + 9);
		this.cmd("CreateLabel", this.exponentArrayID3[i], i, xPos + 5, yPos + ARRAY_ELEM_WIDTH);
		
		this.cmd("SetTextColor", this.coeffID3[i], "#000000");
		this.cmd("SetText", this.coeffID3[i], "");*/
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
	if($(".btn").is(":disabled")) {
		return;
	}
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

PolynomialArray.prototype.testingCallBack = function(event) {
	this.implementAction(this.testing.bind(this), "");
}

PolynomialArray.prototype.displayCallback = function(event) {
	this.implementAction(this.displayData.bind(this), "");
}

PolynomialArray.prototype.displayData = function(ignored) {
	this.commands = new Array();
	this.displayAll();
	return this.commands;
}

PolynomialArray.prototype.create = function() {
	this.commands = new Array();
	
	if (iVal == 1) {
		hpow1 = parseInt($('#create1Text').val());
		this.createPowerAnimation(this.powerValueID1, hpow1, this.exponentID1, this.exponentValID1, this.exponentArrayID1);
		$('#output').append('<div id="coeff1Span0">Enter coeff value for ' + hpow1 + ' degree term : '
						+ ' <input class="usr-txt" size="3" maxlength="2" id="create1Text0" type="text"/></div>');
		coeffValidation('#create1Text0', hpow1, 0, hpow1, 1, false);
	} else if (iVal == 2){
		hpow2 = parseInt($('#create2Text').val());
		this.createPowerAnimation(this.powerValueID2, hpow2, this.exponentID2, this.exponentValID2, this.exponentArrayID2);
		$('#output').append('<div id="coeff2Span0">Enter coeff value for ' + hpow2 + ' degree term : '
						+ ' <input class="usr-txt" size="3" maxlength="2" id="create2Text0" type="text"/></div>');
		coeffValidation('#create2Text0', hpow2, 0, hpow2, 2, false);
	}
	
	return this.commands;
}

PolynomialArray.prototype.createPowerAnimation = function(powerValueID, elemToPush, exponentID, exponentValID, exponentArrayID) {//powers showing
	this.cmd("SetText", powerValueID, elemToPush);
	this.cmd("Step");
	this.cmd("SetText", exponentID, "Exp");
	for (let i = elemToPush; i >= 0; i--) {
		this.cmd("SetText", exponentValID[i], "X");//exponent
		this.cmd("SetText", exponentArrayID[i], i);//exponent values
		this.cmd("SetHighlight", exponentArrayID[i], "#0000FF");
		this.cmd("Step");
		this.cmd("SetHighlight", exponentArrayID[i], "");
	}
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

PolynomialArray.prototype.testing = function() {
	this.commands = new Array();
	var testingVal;
	if (iVal == 1) {
		testingVal = hpow1;
		this.coeffAnimation(testingVal, ARRAY1_START_X, ARRAY1_START_Y, this.coeffID1, head1);
	} else if (iVal == 2) {
		testingVal = hpow2;
		this.coeffAnimation(testingVal, ARRAY2_START_X, ARRAY1_START_Y, this.coeffID2, head2);
	}
	
	return this.commands;
}

PolynomialArray.prototype.coeffAnimation = function(elemToPush, ARRAY_START_X, ARRAY_START_Y, coeffID, head) {//coefficient values
	let t = 0;
	for (let i = elemToPush; i >= 0; i--) {
		var xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY_START_X;
		var yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY_START_Y;
		
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos, yPos + ARRAY_ELEM_WIDTH + 7);
		$('#create1Text' + t).effect('highligh', {color: 'blue'}, 500);
		this.cmd("SetText", coeffID[i], $('#create' + iVal + 'Text' + t).val());
		if (i > 0) {
			this.cmd("Step");
			this.cmd("Move", this.highlightID, xPos - ARRAY_ELEM_WIDTH, yPos + ARRAY_ELEM_WIDTH + 7);
		}
		head.push($('#create' + iVal + 'Text' + t).val());
		this.cmd("Step");
		this.cmd("Delete", this.highlightID);
		t++;
	}
	iVal++;
}

PolynomialArray.prototype.displayAll = function() {
	this.commands = new Array();
	/*this.dummyDisplayID1 = new Array(SIZE);
	this.dummyDisplayXID1 = new Array(SIZE);
	this.dummyDisplayPowerID1 = new Array(SIZE);
	this.dummyDisplayArrowID1 = new Array(SIZE);
	
	this.firstPolyID = this.nextIndex++;
	this.dummyhead1ID = this.nextIndex++;
	
	let t = ARRAY1_START_X + 10, m = 0;
	
	this.cmd("CreateLabel", this.firstPolyID, "First polynomial is : ", 80, 30);
	
//	this.cmd("SetHighlight", this.powerValueID1, "#0000FF");
	
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y;
	
	this.cmd("Step");
//	this.cmd("SetHighlight", this.powerValueID1, "");
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH));
	
	xPos = hpow1 * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
	yPos = Math.floor(hpow1 / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y;
	
	this.cmd("Step");
	this.cmd("Move", this.highlightID, xPos, yPos + ARRAY_ELEM_WIDTH + 7);
	this.cmd("Step");
	this.cmd("Delete", this.highlightID);
	
	for (let i = hpow1; i >= 0; i--) {
		xPos = (i) * ARRAY_ELEM_WIDTH + ARRAY1_START_X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + ARRAY1_START_Y;
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos, yPos + ARRAY_ELEM_WIDTH + 7);
		
		this.dummyDisplayID1[i] = this.nextIndex++;
		this.dummyDisplayXID1[i] = this.nextIndex++;
		this.dummyDisplayPowerID1[i] = this.nextIndex++;
		this.dummyDisplayArrowID1[i] = this.nextIndex++;
		
		yPos = yPos + ARRAY_ELEM_WIDTH + 4;
		this.cmd("CreateLabel", this.dummyDisplayID1[i], "", t, 30);
		this.cmd("CreateLabel", this.dummyhead1ID, head1[m], xPos, yPos - ARRAY_ELEM_WIDTH - 4);
		this.cmd("SetHighlight", this.dummyhead1ID, "#0000FF");
		this.cmd("Step");
		this.cmd("Move", this.dummyhead1ID, t, 30);
		this.cmd("Step");
		this.cmd("SetText", this.dummyDisplayID1[i], head1[m]);
		
		this.cmd("CreateLabel", this.dummyDisplayXID1[i], "x", t + 12, 30);
		this.cmd("CreateLabel", this.dummyDisplayPowerID1[i], i, t + 17, 23);
		this.cmd("CreateLabel", this.dummyDisplayArrowID1[i], " -- > ", t + 28, 30);
		
		this.cmd("Step");
		if (i != 0) {
			this.cmd("Move", this.highlightID, xPos -  ARRAY_ELEM_WIDTH, yPos);
			this.cmd("Step");
		}
		t = t + 48;
		m++;
		this.cmd("SetHighlight", this.dummyhead1ID, "");
		this.cmd("Delete", this.highlightID);
		this.cmd("Delete", this.dummyhead1ID);
		
	}*/
	
	if (iVal == 1) {
		this.displayAnim(this.dummyDisplayID1, this.dummyDisplayXID1, this.dummyDisplayPowerID1, this.dummyDisplayArrowID1, 
						this.firstPolyID, ARRAY1_START_X, "First polynomial is : ", 30, ARRAY1_START_Y, hpow1, head1);
	} else {
		this.displayAnim(this.dummyDisplayID2, this.dummyDisplayXID2, this.dummyDisplayPowerID2, this.dummyDisplayArrowID2, 
				this.secondPolyID, ARRAY2_START_X, "Second polynomial is : ", 55, ARRAY1_START_Y, hpow2, head2);
	}
	
	return this.commands;
}

PolynomialArray.prototype.displayAnim = function(dummyID, dummyXID, dummyPowerID, dummyArrowID, polyID, X, text, val, Y, pow, arr) {
	dummyID = new Array(SIZE);
	dummyXID = new Array(SIZE);
	dummyPowerID = new Array(SIZE);
	dummyArrowID = new Array(SIZE);
	
	polyID = this.nextIndex++;
	this.dummyheadID = this.nextIndex++;
	let t, m = 0;
	if (iVal == 1) {
		t = ARRAY1_START_X + 10;
	} else {
		t = ARRAY1_START_X + 15;
	}
	
	this.cmd("CreateLabel", polyID, text, 80, val);
	
	var xPos = -1.5 * ARRAY_ELEM_WIDTH + X;
	var yPos = Math.floor(-1.5 / ARRRAY_ELEMS_PER_LINE) * 0 + Y;
	
	this.cmd("Step");
	this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos + 200, yPos - (3 * ARRAY_ELEM_WIDTH));
	
	xPos = pow * ARRAY_ELEM_WIDTH + X;
	yPos = Math.floor(pow / ARRRAY_ELEMS_PER_LINE) * 0 + Y;
	
	this.cmd("Step");
	this.cmd("Move", this.highlightID, xPos, yPos + ARRAY_ELEM_WIDTH + 7);
	this.cmd("Step");
	this.cmd("Delete", this.highlightID);
	
	for (let i = pow; i >= 0; i--) {
		xPos = (i) * ARRAY_ELEM_WIDTH + X;
		yPos = Math.floor(i / ARRRAY_ELEMS_PER_LINE) * 0 + Y;
		this.cmd("CreateHighlightCircle", this.highlightID, "#0000FF", xPos, yPos + ARRAY_ELEM_WIDTH + 7);
		
		dummyID[i] = this.nextIndex++;
		dummyXID[i] = this.nextIndex++;
		dummyPowerID[i] = this.nextIndex++;
		dummyArrowID[i] = this.nextIndex++;
		
		yPos = yPos + ARRAY_ELEM_WIDTH + 4;
		this.cmd("CreateLabel", dummyID[i], "", t, val);
		this.cmd("CreateLabel", this.dummyheadID, arr[m], xPos, yPos - ARRAY_ELEM_WIDTH - 4);
		this.cmd("SetHighlight", this.dummyheadID, "#0000FF");
		this.cmd("Step");
		this.cmd("Move", this.dummyheadID, t, val);
		this.cmd("Step");
		this.cmd("SetText", dummyID[i], arr[m]);
		
		this.cmd("CreateLabel", dummyXID[i], "X", t + 12, val);
		this.cmd("CreateLabel", dummyPowerID[i], i, t + 17, val - 9);
		this.cmd("CreateLabel", dummyArrowID[i], " -- > ", t + 28, val);
		
		this.cmd("Step");
		if (i != 0) {
			this.cmd("Move", this.highlightID, xPos -  ARRAY_ELEM_WIDTH, yPos);
			this.cmd("Step");
		}
		t = t + 48;
		m++;
		this.cmd("SetHighlight", this.dummyheadID, "");
		this.cmd("Delete", this.highlightID);
		this.cmd("Delete", this.dummyheadID);
		
	}
	iVal++;
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

