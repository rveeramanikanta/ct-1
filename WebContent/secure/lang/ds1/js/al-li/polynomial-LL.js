var currentAlg;

var LL_START_X = 0;
var LL_START_Y = 210;
var LL_ELEM_WIDTH = 50;
var LL_ELEM_HEIGHT = 30;
var LL_NEXT_WIDTH = 40;
var LL_NEXT_HEIGHT = 30;

//FRONT field & label Height and width
var head1_LABLE_X = 30;
var head1_LABLE_Y = 60;
var head1_WIDTH = 50;
var head1_HEIGHT = 30;
var head1_POS_X = 75;
var head1_POS_Y = 60;

//DATA field height and width x and Y position
var POLYLL_ELE_WIDTH = 50;
var POLYLL_ELE_HEIGHT = 30;
var POLYLL_ELE_POS_X = 180;
var POLYLL_ELE_POS_Y = 120;

//NEXT field height and width
var POLYLL_NEXT_WIDTH = 45;
var POLYLL_NEXT_POS_X = 225;

var LL_ELEMS_PER_LINE = 5;
var LL_ELEM_SPACING = 180;
var LL_LINE_SPACING = 70;

//size of the linked list
var SIZE = 6;
var outputSpanCount = 0;
var randomAdd, firstAdd;

var address = [], listCoeff = [], listExp = [];
var address1 = [], listCoeff1 = [], listExp1 = [];
var address2 = [], listCoeff2 = [], listExp2 = [];
var address3 = [], listCoeff3 = [], listExp3 = [];
var ButtonArr = [];

var head1 = head2 = head3 = sum = null;
var nodeCount = nodeCount1 = nodeCount2 = nodeCount3 = createClickCount = 0;
var indexM1 = indexM2 = indexM3 = 0 

var flag = manikanta = createButtonFlag = true, ch = "y", name; 
var headPos = 1, p1NdP2Val, p1Value;

function PolynomialLL(am, w, h) {
	this.init(am, w, h);
}

PolynomialLL.prototype = new Algorithm();
PolynomialLL.prototype.constructor = PolynomialLL;
PolynomialLL.superclass = Algorithm.prototype;

PolynomialLL.prototype.init = function(am, w, h) {
	PolynomialLL.superclass.init.call(this, am, w, h);
	this.nextIndex = 0;
	this.commands = [];
	this.Controls();
	this.setUp();
}

function init() {
	var animManag = initCanvas();
	currentAlg = new PolynomialLL(animManag, canvas.width, canvas.height);
}

PolynomialLL.prototype.Controls = function() {
	
	//create node
	this.createButton = document.getElementById('createBtn');
	this.createButton.onclick = this.createCallBack.bind(this);
	ButtonArr.push(this.createButton);
	//buttonName = "createBtn";
	
	//display nodes
	this.displayButton = document.getElementById('displayBtn');
	this.displayButton.onclick = this.displayCallBack.bind(this);
	ButtonArr.push(this.displayButton);
	//buttonName = "displayBtn";
	
	//addition nodes
	this.addButton = document.getElementById("addBtn");
	this.addButton.onclick = this.addCallBack.bind(this);
	ButtonArr.push(this.addButton);
	//buttonName = "addBtn";
	
	//subtraction nodes
	this.subButton = document.getElementById("subBtn");
	this.subButton.onclick = this.subCallBack.bind(this);
	ButtonArr.push(this.subButton);
	//buttonName = "subBtn";
	
	this.mulButton = document.getElementById("mulBtn");
	this.mulButton.onclick = this.mulCallBack.bind(this);
	ButtonArr.push(this.mulButton);
	//buttonName = "mulBtn";
	
	this.testButton = document.getElementById("testBtn");
	this.testButton.onclick = this.testCallBack.bind(this);
	ButtonArr.push(this.testButton);
}


PolynomialLL.prototype.createCallBack = function() {
	if($(".btn").is(":disabled")) {
		return;
	}
	createClickCount++;
	$('.btn').attr("disabled", true);
	this.implementAction(this.createNode.bind(this), "");
	console.log("Create");
}

PolynomialLL.prototype.displayCallBack = function() {
	if($(".btn").is(":disabled")) {
		return;
	}
	flag = true;
	this.implementAction(this.displayNodes.bind(this), "");
	console.log("Display");
	
}

PolynomialLL.prototype.addCallBack = function() {
	if($(".btn").is(":disabled")) {
		return;
	}
	decSumAndSubValues();
	this.implementAction(this.addNodes.bind(this), "");
	console.log("Addition");
}

PolynomialLL.prototype.subCallBack = function() {
	if($(".btn").is(":disabled")) {
		return;
	}
	decSumAndSubValues();
	this.implementAction(this.subNodes.bind(this), "");
	console.log("Subtraction");
}

PolynomialLL.prototype.mulCallBack = function() {
	if($(".btn").is(":disabled")) {
		return;
	}
	decSumAndSubValues();
	this.implementAction(this.mulNodes.bind(this), "");
	console.log("Multiplaction");
}

PolynomialLL.prototype.testCallBack = function() {
	this.implementAction(this.testing.bind(this), "");
	console.log("Testing");
}

PolynomialLL.prototype.disableUI = function() {
	for (var i = 0; i < ButtonArr.length; i++) {
		ButtonArr[i].disabled = true;
	}
}

PolynomialLL.prototype.enableUI = function() {
	for (var i = 0; i < ButtonArr.length; i++) {
		ButtonArr[i].enabled = false;
	}
}

PolynomialLL.prototype.varDec = function() {
	this.head1Lable = this.nextIndex++;
	this.head1Id = this.nextIndex++;
	this.head2Label = this.nextIndex++;
	this.head2Id = this.nextIndex++;
	this.head3Label = this.nextIndex++;
	this.head3Id = this.nextIndex++;
	
	//user entered coeff and exponent
	this.coefficient = this.nextIndex++;
	this.coefficientValue = this.nextIndex++;
	this.exponent = this.nextIndex++;
	this.exponentValue = this.nextIndex++;
	
	this.head1RectID = this.nextIndex++;
	this.head2RectID = this.nextIndex++;
	this.head3RectID = this.nextIndex++;
	
	this.tempLabel = this.nextIndex++;
	this.headLable = this.nextIndex++;
	this.headRectID = this.nextIndex++;
	this.headId = this.nextIndex++;
	
	this.p1 = this.nextIndex++;
	this.p1RectID = this.nextIndex++;
	this.p1Id = this.nextIndex++;
	
	this.p2 = this.nextIndex++;
	this.p2RectID = this.nextIndex++;
	this.p2Id = this.nextIndex++;
	
	//list1 variables
	this.llCoeff1 = new Array(SIZE);
	this.llExp1 = new Array(SIZE);
	this.llNext1 = new Array(SIZE);
	this.addVal1 = new Array(SIZE);
	this.llCoeffVal1 = new Array();
	this.llExpVal1 = new Array();
	this.llNextVal1 = new Array();
	
	//list2 variables
	this.llCoeff2 = new Array(SIZE);
	this.llExp2 = new Array(SIZE);
	this.llNext2 = new Array(SIZE);
	this.addVal2 = new Array(SIZE);
	this.llCoeffVal2 = new Array();
	this.llExpVal2 = new Array();
	this.llNextVal2 = new Array();
	
	//temparary list1 and list2 variables
	this.llCoeff = new Array(SIZE);
	this.llExp = new Array(SIZE);
	this.llNext = new Array(SIZE);
	this.addVal = new Array(SIZE);
	this.llCoeffVal = new Array();
	this.llExpVal = new Array();
	this.llNextVal = new Array();
	
	//temparary list1 and list2 variables
	this.llCoeff3 = new Array(SIZE);
	this.llExp3 = new Array(SIZE);
	this.llNext3 = new Array(SIZE);
	this.addVal3 = new Array(SIZE);
	this.llCoeffVal3 = new Array();
	this.llExpVal3 = new Array();
	this.llNextVal3 = new Array();
	
	//display variable
	this.displayVal1 = new Array();
	this.displayVal2 = new Array();
	this.dummyarrow1 = new Array();
	this.dummyarrow2 = new Array();
	this.dummyNull1 = this.nextIndex++;
	this.dummyNull2 = this.nextIndex++;
	
	//add, sub & mul t1, t2, t3 & sum object initialization
	this.t1Label = this.nextIndex++;
	this.t2Label = this.nextIndex++;
	this.t3Label = this.nextIndex++;
	this.sumLabel = this.nextIndex++;
	
	this.t1RectId = this.nextIndex++;
	this.t2RectId = this.nextIndex++;
	this.t3RectId = this.nextIndex++;
	this.sumRectId = this.nextIndex++;
	
	this.t1Id = this.nextIndex++;
	this.t2Id = this.nextIndex++;
	this.t3Id = this.nextIndex++;
	this.sumId = this.nextIndex++;
	
	
	for (var i = 0; i < SIZE; i++) {
		this.llCoeff1[i] = this.nextIndex++;
		this.llExp1[i] = this.nextIndex++;
		this.llNext1[i] = this.nextIndex++;
		this.addVal1[i] = this.nextIndex++;
		this.llCoeffVal1[i] = this.nextIndex++;
		this.llExpVal1[i] = this.nextIndex++;
		this.llNextVal1[i] = this.nextIndex++;
		
		this.llCoeff2[i] = this.nextIndex++;
		this.llExp2[i] = this.nextIndex++;
		this.llNext2[i] = this.nextIndex++;
		this.addVal2[i] = this.nextIndex++;
		this.llCoeffVal2[i] = this.nextIndex++;
		this.llExpVal2[i] = this.nextIndex++;
		this.llNextVal2[i] = this.nextIndex++;
		
		//display array initialization
		this.displayVal1[i] = this.nextIndex++;
		this.displayVal2[i] = this.nextIndex++;
		this.dummyarrow1[i] = this.nextIndex++;
		this.dummyarrow2[i] = this.nextIndex++;
	}
	
	for (let i = 0; i < SIZE * 2; i++) {
		this.llCoeff3[i] = this.nextIndex++;
		this.llCoeffVal3[i] = this.nextIndex++;
		this.llExp3[i] = this.nextIndex++;
		this.llExpVal3[i] = this.nextIndex++;
		this.llNext3[i] = this.nextIndex++;
		this.llNextVal3[i] = this.nextIndex++;
		this.addVal3[i] = this.nextIndex++;
	}
	
}

PolynomialLL.prototype.setUp = function() {
	this.varDec();
	
	//Head1 Label
	this.cmd("CreateLabel", this.head1Lable, "head1 : ", head1_LABLE_X, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.head1RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 5, head1_POS_Y);
	this.cmd("CreateLabel", this.head1Id, head1, head1_POS_X + 5, head1_POS_Y);
	//Head2 Label	
	this.cmd("CreateLabel", this.head2Label, "head2 : ", head1_LABLE_X + 125, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.head2RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 130, head1_POS_Y);
	this.cmd("CreateLabel", this.head2Id, head2, head1_POS_X + 130, head1_POS_Y);
	//Head3 Label
	this.cmd("CreateLabel", this.head3Label, "head3 : ", head1_LABLE_X + 250, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.head3RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 255, head1_POS_Y);
	this.cmd("CreateLabel", this.head3Id, head3, head1_POS_X + 255, head1_POS_Y);
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

PolynomialLL.prototype.create = function(head) {
	temp = {};
	
	if (flag) {
		nodeCount = nodeCount1;
		address = address1.slice();
		listCoeff = listCoeff1.slice();
		listExp = listExp1.slice();
		this.llCoeff = this.llCoeff1.slice();
		this.llCoeffVal = this.llCoeffVal1.slice();
		this.llExp = this.llExp1.slice();
		this.llExpVal = this.llExpVal1.slice();
		this.llNext = this.llNext1.slice();
		this.llNextVal = this.llNextVal1.slice();
		this.addVal = this.addVal1.slice();
	} else  {
		nodeCount = nodeCount2;
		address = address2.slice();
		listCoeff = listCoeff2.slice();
		listExp = listExp2.slice();
		this.llCoeff = this.llCoeff2.slice();
		this.llCoeffVal = this.llCoeffVal2.slice();
		this.llExp = this.llExp2.slice();
		this.llExpVal = this.llExpVal2.slice();
		this.llNext = this.llNext2.slice();
		this.llNextVal = this.llNextVal2.slice();
		this.addVal = this.addVal2.slice();
	}
	//origibal code
/*	temp["coeff"] = listCoeff[nodeCount] = arr[0];
	temp["exp"] = listExp[nodeCount] = arr[1];
	temp["next"] = null;*/
	if (nodeCount == 0) {
		firstAdd = head;
		this.cmd("CreateLabel", this.headLable, "head : ", head1_LABLE_X, POLYLL_ELE_POS_Y);
		this.cmd("CreateRectangle", this.headRectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		this.cmd("CreateLabel", this.headId, "", head1_POS_X + 5, POLYLL_ELE_POS_Y);
		this.cmd("Step");
		if (flag) {
			this.moveValueFromOnePositionToAnother(this.headId, head, head1_POS_X + 5, head1_POS_Y, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		} else {
			this.moveValueFromOnePositionToAnother(this.headId, head, head1_POS_X + 130, head1_POS_Y, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		}
	} else {
		firstAdd = address[0];
	}
	this.cmd("Step");
	this.cmd("CreateLabel", this.tempLabel, "temp", 225, 100);
	this.cmd("CreateRectangle", this.llCoeff[nodeCount], "", POLYLL_ELE_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llCoeffVal[nodeCount], "", POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateRectangle", this.llExp[nodeCount], "", POLYLL_NEXT_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llExpVal[nodeCount], "", POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("CreateRectangle", this.llNext[nodeCount], "", POLYLL_NEXT_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.llNextVal[nodeCount], "", POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
	randomAdd = getRandomInt(1000, 5000);
	address[nodeCount] = randomAdd;
	this.cmd("CreateLabel", this.addVal[nodeCount], randomAdd, 225, 150);
	this.cmd("Step");
	$("#readConsole1, #console1, #createinitTemp, #temp").removeClass("background-color-yellow");
	introNextSteps("#outputDiv", "readValues", "right");
	this.cmd("RunNextIntroStep");
	this.cmd("Step");
	this.cmd("Step");
		
	return head;
} 

PolynomialLL.prototype.decP1AndP2 = function() {
	this.cmd("CreateLabel", this.p1, "p1 :", 320, 120);
	this.cmd("CreateRectangle", this.p1RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 290, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.p1Id, "", head1_POS_X + 290, POLYLL_ELE_POS_Y);
	
	this.cmd("Step");
	this.cmd("CreateLabel", this.p2, "p2 : ", 420, 120);
	this.cmd("CreateRectangle", this.p2RectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 390, POLYLL_ELE_POS_Y);
	this.cmd("CreateLabel", this.p2Id, "", head1_POS_X + 390, POLYLL_ELE_POS_Y);
	this.cmd("Step");
}

PolynomialLL.prototype.addTerm = function(head, t) {
	p1 = p2 = head;
	
	let index = 0;
	this.introNextStep("#callAddTerm", "right", "hide");
	this.cmd("Step");
	
	if(flag == "addition") {
		this.cmd("CreateLabel", this.headLable, "head : ", 520, 120);
		this.cmd("CreateRectangle", this.headRectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 490, POLYLL_ELE_POS_Y);
		this.cmd("CreateLabel", this.headId, "", head1_POS_X + 490, POLYLL_ELE_POS_Y);
		this.cmd("Step");
		this.moveValueFromOnePositionToAnother(this.headId, (head == null) ? head : address[0], head1_POS_X + 195, 120, head1_POS_X + 490, POLYLL_ELE_POS_Y);
		this.cmd("Step");
	}
	this.decP1AndP2();
	this.cmd("Step");
	if(flag == "addition") {
		this.moveValueFromOnePositionToAnother(this.p1Id, (head == null) ? head : address[0], head1_POS_X + 490, POLYLL_ELE_POS_Y, head1_POS_X + 290, POLYLL_ELE_POS_Y);
	} else {
		this.moveValueFromOnePositionToAnother(this.p1Id, firstAdd, head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 290, POLYLL_ELE_POS_Y);
	}
	this.cmd("Step");
	if (head != null) {
		this.cmd("Connect", this.p1RectID, this.llNext[index])
	}
	this.cmd("Step");
	if(flag == "addition") {
		this.moveValueFromOnePositionToAnother(this.p2Id, (head == null) ? head : address[0], head1_POS_X + 490, POLYLL_ELE_POS_Y, head1_POS_X + 390, POLYLL_ELE_POS_Y);
	} else {
		this.moveValueFromOnePositionToAnother(this.p2Id, firstAdd, head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 390, POLYLL_ELE_POS_Y);
	}
	this.cmd("Step");
	if (head != null) {
		this.cmd("Connect", this.p2RectID, this.llNext[index]);
	}
	this.cmd("Step");
	this.introNextStep("#addTermLogic", "right", "hide");
	this.cmd("Step");
	
	if(p1 == null) {
		head = t;
		if (flag == "addition") { 
			this.moveValueFromOnePositionToAnother(this.headId, randomAdd, 680, 150, head1_POS_X + 490, POLYLL_ELE_POS_Y);
		} else {
			this.moveValueFromOnePositionToAnother(this.headId, randomAdd, 225, 150, head1_POS_X + 5, POLYLL_ELE_POS_Y);
		}
		this.cmd("Step");
		this.cmd("Connect", this.headId, this.llCoeff[index]);
		this.cmd("Step");
		this.resetLinkedListPositions(0, nodeCount);
		this.cmd("Step");
		nodeCount++;
		if (flag == true) {
			nodeCount1 = nodeCount;
		} else if (flag == false) {
			nodeCount2 = nodeCount;
		} else {
			nodeCount3 = nodeCount;
		}
		this.cmd("Step");
		this.deleteLabels();
	} else {
		index;
		p1Value = p1;
		while(p1 != null && parseInt(p1["exp"]) > parseInt(t["exp"])) {
			p2 = p1;
			p1 = p1["next"];
			
			this.moveValueFromOnePositionToAnother(this.p2Id, address[index], head1_POS_X + 290, POLYLL_ELE_POS_Y, head1_POS_X + 390, POLYLL_ELE_POS_Y);
			this.cmd("Step");
			if (index >= 1) {
				this.cmd("Disconnect", this.p2RectID, this.llNext[index - 1]);
			}
			this.cmd("Disconnect", this.p2RectID, this.llNext[index]);
			this.cmd("Step");
			this.cmd("Connect", this.p2RectID, this.llNext[index]);
			this.cmd("Step");
			let nextX = (index) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
			if (flag == true) {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
			} else if (flag == false) {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;				
			} else {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y+ 200;
			}
			this.cmd("Step");
			if (p1 == null) {
				this.moveValueFromOnePositionToAnother(this.p1Id, null, nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 290, POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("Disconnect", this.p1RectID, this.llNext[index]);
			} else {
				this.moveValueFromOnePositionToAnother(this.p1Id, address[index + 1], nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 290, POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("Disconnect", this.p1RectID, this.llNext[index]);
				this.cmd("Step");
				this.cmd("Connect", this.p1RectID, this.llNext[index + 1]);
			}
			index++;
		}
		this.cmd("Step");
		this.introNextStep("#addTermIfLogic", "right", "hide");
		this.cmd("Step");
		
		if(p1 == null) {
			p2["next"] = t;
			
			let nextX = (index - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
			if (flag == true) {
				var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
			} else if (flag == false) {
				var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
			} else {
				var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 200;
			}
			this.dummyCoeff = this.nextIndex++;
			this.cmd("Sethighlight", this.llNext[index - 1], "#ff4d4d");
			this.cmd("Step");
			if (flag != "addition") {
				this.cmd("CreateLabel", this.dummyCoeff, address[index], 225, 150);
				this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[index], 225, 150, nextX + LL_ELEM_WIDTH + 20, nextY);
			} else {
				this.cmd("CreateLabel", this.dummyCoeff, address[index], 680, 150);
				this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[index], 680, 150, nextX + LL_ELEM_WIDTH + 20, nextY);
			}
			this.cmd("Step");
			this.cmd("Delete", this.dummyCoeff);
			this.cmd("SetText", this.llNext[index - 1], address[index]);
			this.cmd("Sethighlight", this.llNext[index - 1], "");
			this.cmd("Connect", this.llNext[index - 1], this.llCoeff[nodeCount]);
			this.cmd("Step");
			this.resetLinkedListPositions(nodeCount, nodeCount);
			this.cmd("Step");
			nodeCount++;
			if (flag == true) {
				nodeCount1 = nodeCount;
			} else if (flag == false) {
				nodeCount2 = nodeCount;
			} else {
				nodeCount3 = nodeCount;
			}
			this.deleteLabels();
		} else if(parseInt(p1["exp"]) == parseInt(t["exp"])) {
			p1["coeff"] = parseInt(p1["coeff"]) + parseInt(t["coeff"]);
			
			this.dummyCoeff = this.nextIndex++;
			this.cmd("CreateLabel", this.dummyCoeff, listCoeff[nodeCount], POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
			this.cmd("Sethighlight", this.llExp[index], "#ff4d4d");
			this.cmd("Sep");
			this.cmd("Sethighlight", this.llExp[index], "");
			let nextX = (index) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
			if (flag == true) {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
			} else if (flag == false) {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
			} else {
				var nextY = Math.floor((index) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 200;
			}
			this.moveValueFromOnePositionToAnother(this.dummyCoeff, listCoeff[nodeCount], POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y, nextX - 22, nextY);
			this.cmd("Step");
			this.cmd("Delete", this.dummyCoeff);
			listCoeff[index] = p1["coeff"];
			this.cmd("SetText", this.llCoeff[index], parseInt(p1["coeff"]));
			this.cmd("Step");
			this.cmd("Step");
			this.cmd("Delete", this.llCoeff[nodeCount]);
			this.cmd("Delete", this.llExp[nodeCount]);
			this.cmd("Delete", this.llNext[nodeCount]);
			this.cmd("Delete", this.addVal[nodeCount]);
			this.deleteLabels();
			this.cmd("Step");
			if (flag == true) {
				address1.splice((nodeCount), 1);
				listCoeff1.splice((nodeCount), 1);
				listExp1.splice((nodeCount), 1);
				this.llCoeff1.splice((nodeCount), 1);
				this.llExp1.splice((nodeCount), 1);
				this.llNext1.splice((nodeCount), 1);
				this.addVal1.splice((nodeCount), 1);
				this.llCoeffVal1.splice((nodeCount), 1);
				this.llExpVal1.splice((nodeCount), 1);
				this.llNextVal1.splice((nodeCount), 1);
			} else if (flag == false) {
				address2.splice((nodeCount), 1);
				listCoeff2.splice((nodeCount), 1);
				listExp2.splice((nodeCount), 1);
				this.llCoeff2.splice((nodeCount), 1);
				this.llExp2.splice((nodeCount), 1);
				this.llNext2.splice((nodeCount), 1);
				this.addVal2.splice((nodeCount), 1);
				this.llCoeffVal2.splice((nodeCount), 1);
				this.llExpVal2.splice((nodeCount), 1);
				this.llNextVal2.splice((nodeCount), 1);
			} else {
				address3.splice((nodeCount), 1);
				listCoeff3.splice((nodeCount), 1);
				listExp3.splice((nodeCount), 1);
				this.llCoeff3.splice((nodeCount), 1);
				this.llExp3.splice((nodeCount), 1);
				this.llNext3.splice((nodeCount), 1);
				this.addVal3.splice((nodeCount), 1);
			}
			this.cmd("Step");
			index--;
		} else if(parseInt(p1["exp"]) < parseInt(t["exp"]))	{
			if(p2 == p1) {
				t["next"]= p1;
				head = t;
				p1NdP2Val = index;
				this.dummyCoeff = this.nextIndex++;
				this.cmd("CreateLabel", this.dummyCoeff, address[index], head1_POS_X + 290, POLYLL_ELE_POS_Y);
				this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[index], head1_POS_X + 290, POLYLL_ELE_POS_Y, POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("SetText", this.llNext[nodeCount], address[index]);
				this.cmd("Step");
				this.cmd("Delete", this.dummyCoeff);
				this.cmd("Connect", this.llNext[nodeCount], this.llCoeff[index]);
				this.cmd("Step");
				if (flag != "addition") {
					this.cmd("CreateLabel", this.dummyCoeff, address[nodeCount ], 225, 150);
					this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[nodeCount], 225, 150, head1_POS_X + 5, POLYLL_ELE_POS_Y);
				} else {
					this.cmd("CreateLabel", this.dummyCoeff, address[nodeCount ], 680, 150);
					this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[nodeCount], 680, 150, head1_POS_X + 5, POLYLL_ELE_POS_Y);
				}
				this.cmd("Step");
				this.cmd("SetText", this.headId, address[nodeCount]);
				this.cmd("Step");
				this.cmd("Delete", this.dummyCoeff);
				this.cmd("Disconnect", this.headId, this.llCoeff[index]);
				this.cmd("Step");
				this.cmd("Connect", this.headId, this.llCoeff[nodeCount]);
				this.cmd("Step");
				this.resetLinkedListPositions(index, nodeCount);
			} else {
				t["next"] = p1;
				p2["next"] = t;
				
				this.cmd("CreateLabel", this.dummyCoeff, address[index], head1_POS_X + 290, POLYLL_ELE_POS_Y);
				this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[index], head1_POS_X + 290, POLYLL_ELE_POS_Y, POLYLL_NEXT_POS_X + 45 , POLYLL_ELE_POS_Y);
				this.cmd("Step");
				this.cmd("SetText", this.llNext[nodeCount], address[index]);
				this.cmd("Delete", this.dummyCoeff);
				this.cmd("Connect", this.llNext[nodeCount], this.llCoeff[index]);
				this.cmd("Step");
				let nextX = (index - 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X + POLYLL_ELE_WIDTH;
				if (flag == true) {
					var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
				} else if (flag == false) {
					var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
				} else {
					var nextY = Math.floor((index - 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y+ 200;
				}
				if (flag != "addition") {
					this.cmd("CreateLabel", this.dummyCoeff, address[index], 225, 150);
					this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[nodeCount], 225, 150, nextX + LL_ELEM_WIDTH + 20, nextY);
				} else {
					this.cmd("CreateLabel", this.dummyCoeff, address[index], 680, 150);
					this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[nodeCount], 680, 150, nextX + LL_ELEM_WIDTH + 20, nextY);
				}
				this.cmd("Step");
				this.cmd("SetText", this.llNext[index - 1], address[nodeCount]);
				this.cmd("Step");
				this.cmd("Delete", this.dummyCoeff);
				this.cmd("Disconnect", this.llNext[index - 1], this.llCoeff[index]);
				this.cmd("Step");
				this.cmd("Connect", this.llNext[index - 1],  this.llCoeff[nodeCount]);
				this.cmd("Step");
				this.resetLinkedListPositions(index, nodeCount);
			}
			this.cmd("Step");
			this.changeValues(index, nodeCount);
		}
	}
	this.introNextStep("#rtnHead", "right", "hide");
	return head;
} 

PolynomialLL.prototype.moveHeadToHeadPos = function() {
	this.cmd("CreateLabel", this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 5, head1_POS_Y);
	this.cmd("Step");
	//headPos = address[0];
	if (flag == true) {
		this.cmd("SetText", this.head1Id, address[0]);
		flag = false;
 	} else if (flag == false) {
 		this.cmd("SetText", this.head2Id, address[0]);
 	} else {
 		this.cmd("SetText", this.head3Id, address[0]);
 	}
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
}

PolynomialLL.prototype.changeValues = function(index, nodeCount) {
	address.splice(index, 0, address[nodeCount]);
	listCoeff.splice(index, 0, listCoeff[nodeCount]);
	listExp.splice(index, 0, listExp[nodeCount]);
	
	if (flag == true) {
		this.llCoeff1.splice(index, 0, this.llCoeff[nodeCount]);
		this.llExp1.splice(index, 0, this.llExp[nodeCount]);
		this.llNext1.splice(index, 0, this.llNext[nodeCount]);
		this.llExpVal1.splice(index, 0, this.llExpVal[nodeCount]);
		this.llCoeffVal1.splice(index, 0, this.llCoeffVal[nodeCount]);
		this.llNextVal1.splice(index, 0, this.llNextVal[nodeCount]);
		this.addVal1.splice(index, 0, this.addVal[nodeCount]);
		nodeCount++;
		if (flag == true) {
			nodeCount1 = nodeCount;
		} else if (flag == false) {
			nodeCount2 = nodeCount;
		} else {
			nodeCount3 = nodeCount;
		}
		this.llCoeff1.splice((nodeCount), 1);
		this.llExp1.splice((nodeCount), 1);
		this.llNext1.splice((nodeCount), 1);
		this.llExpVal1.splice((nodeCount), 1);
		this.llCoeffVal1.splice((nodeCount), 1);
		this.llNextVal1.splice((nodeCount), 1);
		this.addVal1.splice((nodeCount), 1);
	} else if (flag == false) {
		this.llCoeff2.splice(index, 0, this.llCoeff[nodeCount]);
		this.llExp2.splice(index, 0, this.llExp[nodeCount]);
		this.llNext2.splice(index, 0, this.llNext[nodeCount]);
		this.llExpVal2.splice(index, 0, this.llExpVal[nodeCount]);
		this.llCoeffVal2.splice(index, 0, this.llCoeffVal[nodeCount]);
		this.llNextVal2.splice(index, 0, this.llNextVal[nodeCount]);
		this.addVal2.splice(index, 0, this.addVal[nodeCount]);
		nodeCount++;
		if (flag == true) {
			nodeCount1 = nodeCount;
		} else if (flag == false) {
			nodeCount2 = nodeCount;
		} else {
			nodeCount3 = nodeCount;
		}
		this.llCoeff2.splice((nodeCount), 1);
		this.llExp2.splice((nodeCount), 1);
		this.llNext2.splice((nodeCount), 1);
		this.llExpVal2.splice((nodeCount), 1);
		this.llCoeffVal2.splice((nodeCount), 1);
		this.llNextVal2.splice((nodeCount), 1);
		this.addVal2.splice((nodeCount), 1);
	} else {
		this.llCoeff3.splice(index, 0, this.llCoeff[nodeCount]);
		this.llExp3.splice(index, 0, this.llExp[nodeCount]);
		this.llNext3.splice(index, 0, this.llNext[nodeCount]);
		this.addVal3.splice(index, 0, this.addVal[nodeCount]);
		nodeCount++;
		if (flag == true) {
			nodeCount1 = nodeCount;
		} else if (flag == false) {
			nodeCount2 = nodeCount;
		} else {
			nodeCount3 = nodeCount;
		}
		this.llCoeff3.splice((nodeCount), 1);
		this.llExp3.splice((nodeCount), 1);
		this.llNext3.splice((nodeCount), 1);
		this.addVal3.splice((nodeCount), 1);
		this.cmd("Step");
	}
	address.splice((nodeCount), 1);
	listCoeff.splice((nodeCount), 1);
	listExp.splice((nodeCount), 1);
	this.cmd("Step");
	this.deleteLabels();
}

PolynomialLL.prototype.deleteLabels = function() {
	if (flag == true) {
		address1 = address.slice();
		listCoeff1 = listCoeff.slice();
		listExp1 = listExp.slice();
	} else if (flag == false) {
		address2 = address.slice();
		listCoeff2 = listCoeff.slice();
		listExp2 = listExp.slice();
	} else {
		address3 = address.slice();
		listCoeff3 = listCoeff.slice();
		listExp3 = listExp.slice();
	}
	this.cmd("Delete", this.tempLabel);
	this.cmd("Delete", this.p1RectID);
	this.cmd("Delete", this.p1);
	this.cmd("Delete", this.p1Id);
	this.cmd("Delete", this.p2);
	this.cmd("Delete", this.p2RectID);
	this.cmd("Delete", this.p2Id);
	
	if (flag != "addition") {
		this.cmd("Delete", this.coefficient);
		this.cmd("Delete", this.coefficientValue);
		this.cmd("Delete", this.exponent);
		this.cmd("Delete", this.exponentValue);
	}
}

PolynomialLL.prototype.resetLinkedListPositions = function(count, nodeCount) {
	for (let i = count; i < nodeCount; i++) {
		let nextX = (i + 1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X + POLYLL_ELE_WIDTH;
		if (flag == true) {
			var nextY = Math.floor((i + 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
		} else if (flag == false) {
			var nextY = Math.floor((i + 1) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
		} else {
			var nextY = Math.floor((count) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y+ 200;
		}
		this.cmd("Move", this.llCoeff[i], nextX - 22, nextY);
		this.cmd("Move", this.llExp[i], nextX + LL_ELEM_WIDTH - 25, nextY);
		this.cmd("Move", this.llNext[i], nextX + LL_ELEM_WIDTH + 20, nextY);
		this.cmd("Move", this.addVal[i], nextX + 25, nextY + 25);
	}
	
	var nextX = (count) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X + POLYLL_ELE_WIDTH;
	if (flag == true) {
		var nextY = Math.floor((count) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y - 20;
	} else if (flag == false) {
		var nextY = Math.floor((count) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y + 100;
	} else {
		var nextY = Math.floor((count) / LL_ELEMS_PER_LINE)* LL_LINE_SPACING + LL_START_Y+ 200;
	}
	
	this.cmd("Move", this.tempLabel, nextX + 25, nextY - 25);
	this.cmd("Move", this.llCoeff[nodeCount], nextX - 22, nextY);
	this.cmd("Move", this.llExp[nodeCount], nextX + LL_ELEM_WIDTH - 25, nextY);
	this.cmd("Move", this.llNext[nodeCount], nextX + LL_ELEM_WIDTH + 20, nextY);
	this.cmd("Move", this.addVal[nodeCount], nextX + 25, nextY + 25);
}



PolynomialLL.prototype.print = function(head) {
    temp = head;
    
    this.cmd("Step");
    this.cmd("Step");
    this.tempLabel = this.nextIndex++;
    this.tempRectID = this.nextIndex++;
    this.tempId = this.nextIndex++;
    
    let nodeAdd = null;;
    if (nodeCount1 != 0 || nodeCount2 != 0 || nodeCount3 != 0) {
    	firstAdd = (flag == true) ? nodeAdd = address1[0] : (flag == false) ? nodeAdd = address2[0] : nodeAdd = address3[0] ;
    } 
    
    this.cmd("CreateLabel", this.tempLabel, "temp : ", head1_LABLE_X + 360, head1_LABLE_Y);
	this.cmd("CreateRectangle", this.tempRectID, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 365, head1_POS_Y);
	this.cmd("CreateLabel", this.tempId, "", head1_POS_X + 365, head1_POS_Y);
    if (flag == true) {
    	this.moveValueFromOnePositionToAnother(this.tempId, nodeAdd, head1_POS_X + 5, head1_POS_Y, head1_POS_X + 365, head1_POS_Y);
    } else  if (flag == false) {
    	this.moveValueFromOnePositionToAnother(this.tempId, nodeAdd, head1_POS_X + 130, head1_POS_Y, head1_POS_X + 365, head1_POS_Y);
    } else {
    	this.moveValueFromOnePositionToAnother(this.tempId, nodeAdd, head1_POS_X + 255, head1_POS_Y, head1_POS_X + 365, head1_POS_Y);
    }
    this.cmd("Step");
    this.cmd("Step");
    this.introNextStep("#printWhileLoop", "right", "hide");
    this.cmd("Step");
    let index = xPos = 0;
    var disVal;
    if (temp == null) {
    	this.cmd("CreateLabel", (flag) ? this.dummyNull1 : this.dummyNull2, "",  110 + xPos, (flag) ? 100 : 120);
		this.cmd("Step");
		this.cmd("SetText", (flag) ? this.dummyNull1 : this.dummyNull2, "NULL");
    }
    this.cmd("Step");
    while(temp != null) {
    	console.log("%d X^ %d --->", temp["coeff"], temp["exp"]);
    	temp = temp["next"];
    	
    	this.dummyTmpAdd1 = this.nextIndex++;
    	this.dummyTmpAdd2 = this.nextIndex++;
    	this.dummyTmpAdd3 = this.nextIndex++;
    	this.dummyCoeff = this.nextIndex++;
    	
    	if (flag == true) {
    		this.cmd("Connect", this.tempRectID, this.llCoeff1[index])
    	} else if (flag == false) {
    		this.cmd("Connect", this.tempRectID, this.llCoeff2[index]);
    	} else {
    		this.cmd("Connect", this.tempRectID, this.llCoeff3[index]);
    	}
    	let nextX = (index) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
    	if (flag == true) {
    		var nextY = Math.floor((index) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y - 20;
    	} else if (flag == false) {
    		var nextY = Math.floor((index) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y + 100;
    	} else {
    		var nextY = Math.floor((index) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y+ 200;
    	}
    	
    	this.cmd("CreateLabel", (flag) ? this.displayVal1[index] : this.displayVal2[index], "", 50 + xPos, (flag) ? 100 : 120);
    	this.cmd("Sethighlight", (flag == true) ? this.llCoeff1[index] : (flag == false) ?  this.llCoeff2[index] :  this.llCoeff3[index], "#4d4dff");
    	this.cmd("Sethighlight", (flag == true) ? this.llExp1[index] : (flag == false) ? this.llExp2[index] : this.llExp3[index], "#4d4dff");
    	
    	disVal = (flag == true) ? listCoeff1[index]+ " X^ " + listExp1[index] : (flag == false) ? listCoeff2[index] + " X^ " + listExp2[index] : listCoeff3[index] + " X^ " + listExp3[index];
    	this.cmd("CreateLabel", (flag) ? this.dummyTmpAdd1 : this.dummyTmpAdd2, disVal,  nextX + LL_ELEM_WIDTH - 25, nextY);
    	this.cmd("Move", (flag) ? this.dummyTmpAdd1 : this.dummyTmpAdd2, 50 + xPos, (flag) ? 100 : 120);
    	this.cmd("Step");
    	
		this.cmd("CreateLabel", (flag) ? this.dummyarrow1[index] : this.dummyarrow2[index], "",  85 + xPos, (flag) ? 100 : 120);
		this.cmd("Step");
		this.cmd("SetText", (flag) ? this.dummyarrow1[index] : this.dummyarrow2[index], " --> ");
    	this.cmd("Step");
    	
    	this.cmd("SetText", (flag) ? this.displayVal1[index] : this.displayVal2[index], disVal);
    	this.cmd("Sethighlight", (flag == true) ? this.llCoeff1[index] : (flag == false) ? this.llCoeff2[index] : this.llCoeff3[index], "");
    	this.cmd("Sethighlight", (flag == true) ? this.llExp1[index] : (flag == false) ? this.llExp2[index] : this.llExp3[index], "");
    	this.cmd("Delete", (flag) ? this.dummyTmpAdd1 : this.dummyTmpAdd2);
    	
    	this.cmd("Step");
    	this.cmd("Sethighlight", (flag == true) ? this.llNext1[index] : (flag == false) ? this.llNext2[index] : this.llNext3[index] , "#4d4dff");
    	if ((flag == true) ? nodeCount1 == (index + 1) : (flag == false)  ? nodeCount2 == (index + 1) : nodeCount3 == (index + 1)) {
    		this.cmd("CreateLabel", this.dummyCoeff, null, head1_POS_X + 365, head1_POS_Y);
        	this.moveValueFromOnePositionToAnother(this.dummyCoeff, null, nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 365, head1_POS_Y);
    		this.cmd("Step")
    		this.cmd("SetText", this.tempId, null);
    	} else {
    		this.cmd("CreateLabel", this.dummyCoeff, (flag == true) ? address1[index + 1] : (flag == false) ? address2[index + 1] : address3[index + 1], head1_POS_X + 365, head1_POS_Y);
    		this.moveValueFromOnePositionToAnother(this.dummyCoeff, (flag == true) ? address1[index + 1] : (flag == false) ? address2[index + 1] :  address3[index + 1], nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 365, head1_POS_Y);
    		this.cmd("Step")
    		this.cmd("SetText", this.tempId, (flag == true) ? address1[index + 1] : (flag == false) ? address2[index + 1] : address3[index + 1]);
    	}
		this.cmd("Step");
		this.cmd("Sethighlight", (flag == true) ? this.llNext1[index] : (flag == false) ? this.llNext2[index] : this.llNext3[index] , "");
		this.cmd("Disconnect", this.tempRectID, (flag == true) ? this.llCoeff1[index] : (flag == false) ? this.llCoeff2[index] : this.llCoeff3[index]);
		this.cmd("Step");
		if ((flag == true) ? nodeCount1 != (index + 1) : (flag == false) ? nodeCount2 != (index + 1) : nodeCount3 != (index + 1)) {
			this.cmd("Connect", this.tempRectID, (flag == true) ? this.llCoeff1[index + 1] : (flag == false) ? this.llCoeff2[index + 1] : this.llCoeff3[index + 1])
		} else {
			this.cmd("CreateLabel", (flag) ? this.dummyNull1 : this.dummyNull2, "",  110 + xPos, (flag) ? 100 : 120);
			this.cmd("Step");
			this.cmd("SetText", (flag) ? this.dummyNull1 : this.dummyNull2, "NULL");
		}
		this.cmd("Step");
		index++;
		xPos = index * 65;
		this.cmd("Step");
		this.cmd("Delete", this.dummyCoeff); 
    }
	this.cmd("Step");
    console.log("NULL");
    this.cmd("Step");
    this.cmd("Delete", this.tempLabel);
    this.cmd("Delete", this.tempRectID);
    this.cmd("Delete", this.tempId);
    if (flag) {
    	flag = false;
    	this.introNextStep("#print2List", "", "");
    	//callCount++;
    } else {
    	flag = true;
    	callCount = 1;
    }
}

PolynomialLL.prototype.createTempararyNodes = function(operation) {
	this.cmd("CreateLabel", this.t1Label, "t1 : ", 30, 120);
	this.cmd("CreateRectangle", this.t1RectId, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 5, 120)
	this.cmd("CreateLabel", this.t1Id, "", head1_POS_X + 5, 120);
	
	this.cmd("CreateLabel", this.t2Label, "t2", head1_LABLE_X + 90, 120);
	this.cmd("CreateRectangle", this.t2RectId, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 95, 120);
	this.cmd("CreateLabel", this.t2Id, "", head1_POS_X + 95, 120);
	
	this.cmd("CreateLabel", this.sumLabel, operation, head1_LABLE_X + 190, 120);
	this.cmd("CreateRectangle", this.sumRectId, "", head1_WIDTH, head1_HEIGHT, head1_POS_X + 195, 120);
	this.cmd("CreateLabel", this.sumId, null, head1_POS_X + 195, 120);
}

PolynomialLL.prototype.storeT1AndT2 = function() {
	this.dummyCoeff = this.nextIndex++;
	
	this.cmd("CreateLabel", this.dummyCoeff, (address1.length != 0) ? address1[0] : null, head1_POS_X + 5, head1_POS_Y);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, (address1.length != 0) ? address1[0] : null, head1_POS_X + 5, head1_POS_Y, head1_POS_X + 5, 120);
	this.cmd("Step");
	this.cmd("SetText", this.t1Id, (address1.length != 0) ? address1[0] : null);
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("Step");
	if (address1.length != 0) {
		this.cmd("Connect", this.t1RectId, this.llCoeff1[0]);
	}
	
	this.cmd("Step");
	this.cmd("CreateLabel", this.dummyCoeff, (address2.length != 0) ? address2[0] : null, head1_POS_X + 125, head1_POS_Y);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, (address2.length != 0) ? address2[0] : null, head1_POS_X + 125, head1_POS_Y, head1_POS_X + 95, 120);
	this.cmd("Step");
	this.cmd("SetText", this.t2Id, (address2.length != 0) ? address2[0] : null);
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("Step");
	if (address2.length != 0) {
		this.cmd("Connect", this.t2RectId, this.llCoeff2[0]);
	}
	this.cmd("Step");
}

PolynomialLL.prototype.idChange = function() {
	 	nodeCount = nodeCount3;
	 	
		address = address3.slice();
		listCoeff = listCoeff3.slice();
		listExp = listExp3.slice();
		
		this.llCoeff = this.llCoeff3.slice();
		this.llExp = this.llExp3.slice();
		this.llNext = this.llNext3.slice();
		this.addVal = this.addVal3.slice();
}

PolynomialLL.prototype.createAnEmptyNode = function() {
	this.cmd("CreateLabel", this.tempLabel, "t3", 680, 100);
	this.cmd("CreateRectangle", this.llCoeff[nodeCount], "", POLYLL_ELE_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("CreateRectangle", this.llExp[nodeCount], "", POLYLL_NEXT_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_NEXT_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("CreateRectangle", this.llNext[nodeCount], "", POLYLL_NEXT_WIDTH, POLYLL_ELE_HEIGHT, POLYLL_NEXT_POS_X + 495 , POLYLL_ELE_POS_Y);
	randomAdd = getRandomInt(1000, 5000);
	console.log("in Create = " + nodeCount);
	address[nodeCount] = randomAdd;
	this.cmd("CreateLabel", this.addVal[nodeCount], randomAdd, 680, 150);
}

PolynomialLL.prototype.addition = function(head1, head2, operation) {
	t1 = head1;
	t2 = head2;
	
	this.createTempararyNodes("sum");
	this.cmd("Step");
	this.storeT1AndT2();
	this.cmd("Step");
	this.idChange();
	var index1 = index2 = index3 =  0;
	
	while(t1 != null && t2 != null) {
		t3 = {};
		if(parseInt(t1["exp"]) == parseInt(t2["exp"])) {
			t3["coeff"] = listCoeff[nodeCount] = parseInt(t1["coeff"]) + parseInt(t2["coeff"]);
			t3["exp"] = listExp[nodeCount] = t1["exp"];
			t3["next"] = null;
			
			this.cmd("Step");
			this.createAnEmptyNode();
			this.cmd("Step");
			
			this.ifBothExpAreSame(operation, index1, index2);
			index1++;
			index2++;
			sum = addterm(sum, t3);
	        t1 = t1["next"];
	        t2 = t2["next"];
	   } else if (parseInt(t1["exp"]) > parseInt(t2["exp"])) {
		   this.T1ExpGraterAndT1NotNull(index1);
		   index1++;
	   } else {
		   this.T2ExpGraterAndT2NotNull(index2);
		   index2++;
	   }
	}
	while(t1 != null) {
		t3 = {};
		this.T1ExpGraterAndT1NotNull(index1);
		index1++;
	}
	while(t2 != null) {
		t3 = {};
		this.T2ExpGraterAndT2NotNull(index2);
		index2++;
	}
	this.commanCodeForAddSubAndMul();
	return sum;
}

PolynomialLL.prototype.commanCodeForAddSubAndMul = function() {
	this.cmd("Step");
	this.cmd("CreateLabel", this.dummyCoeff, (address.length != 0) ? address[0] : null, head1_POS_X + 195, 120);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, (address.length != 0) ? address[0] : null, head1_POS_X + 195, 120, head1_POS_X + 255, head1_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.head3Id, (address.length != 0) ? address[0] : null);
	this.cmd("Delete", this.dummyCoeff);
	
	this.cmd("Delete", this.t1RectId);
	this.cmd("Delete", this.t1Label);
	this.cmd("Delete", this.t1Id);
	this.cmd("Delete", this.t2RectId);
	this.cmd("Delete", this.t2Label);
	this.cmd("Delete", this.t2Id);
	this.cmd("Delete", this.sumRectId);
	this.cmd("Delete", this.sumLabel);
	this.cmd("Delete", this.sumId);
	this.cmd("Step");
}

PolynomialLL.prototype.T1ExpGraterAndT1NotNull = function(index1) {
    t3["coeff"] = listCoeff[nodeCount] = t1["coeff"];
    t3["exp"]= listExp[nodeCount] = t1["exp"];
    t3["next"] = null;
    
    this.cmd("Step");
	this.createAnEmptyNode();
	this.cmd("Step");
	this.t1IsGreaterThanT2(index1, true);
	this.cmd("Step");
	sum = this.addTerm(sum, t3);
    this.cmd("Step");
    this.assignT3ToHead3();
	this.cmd("Step");
	this.t1NextToT1(index1);
	this.cmd("Step");
    
    sum = addterm(sum,t3);
    t1 = t1["next"];
}

PolynomialLL.prototype.T2ExpGraterAndT2NotNull = function(index2) {
	t3["coeff"] = listCoeff[nodeCount] = t2["coeff"];
	t3["exp"] = listExp[nodeCount] = t2["exp"];
	t3["next"] = null;
	this.cmd("Step");
	this.createAnEmptyNode();
	this.cmd("Step");
	this.t1IsGreaterThanT2(index2, false);
	this.cmd("Step");
	sum = this.addTerm(sum, t3);
    this.cmd("Step");
	
    this.cmd("Step");
    this.assignT3ToHead3();
	this.cmd("Step");
	this.t2NextToT2(index2);
	this.cmd("Step");
	
	sum = addterm(sum,t3);
	t2 = t2["next"];
}


PolynomialLL.prototype.t1IsGreaterThanT2 = function(index1, status) {
    
    var nextX = (index1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
    if (status) {
    	var nextY = Math.floor((index1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y - 20;
    } else {
    	var nextY = Math.floor((index1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y + 100;
    } 
	this.cmd("Sethighlight", (status) ? this.llCoeff1[index1] : this.llCoeff2[index1], "#2eb82e");
	this.cmd("Step");
	this.cmd("CreateLabel", this.dummyCoeff, (status) ? listCoeff1[index1] : listCoeff2[index1], nextX - 22, nextY);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, (status) ? listCoeff1[index1] : listCoeff2[index1], nextX - 22, nextY, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("SetText", this.llCoeff[nodeCount], (status) ? listCoeff1[index1] : listCoeff2[index1]);
	this.cmd("Step");
	this.cmd("Sethighlight", (status) ? this.llCoeff1[index1] : this.llCoeff2[index1], "");
	this.cmd("Step");
	this.cmd("Sethighlight", (status) ? this.llExp1[index1] : this.llExp2[index1], "#2eb82e");
	this.cmd("Step");
	
	this.cmd("CreateLabel", this.dummyCoeff, (status) ? listExp1[index1] : listExp2[index1], nextX + LL_ELEM_WIDTH - 25, nextY);																				
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, (status) ? listExp1[index1] : listExp2[index1], nextX + LL_ELEM_WIDTH - 25, nextY, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("SetText", this.llExp[nodeCount], (status) ? listExp1[index1] : listExp2[index1]);
	this.cmd("Step");
	this.cmd("Sethighlight", (status) ? this.llExp1[index1] : this.llExp2[index1], "");
	this.cmd("Step");
	this.cmd("SetText", this.llNext[nodeCount], null);
	this.cmd("Step");
}

PolynomialLL.prototype.ifBothExpAreSame = function(operation, index1, index2) {
	this.cmd("Sethighlight", this.llExp1[index1], "#2eb82e");
	this.cmd("Sethighlight", this.llExp2[index2], "#2eb82e");
	this.cmd("Step");
	this.cmd("Step");
	this.cmd("Sethighlight", this.llExp1[index1], "");
	this.cmd("Sethighlight", this.llExp2[index2], "");
	
	var nextX = (index1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
	var nextY = Math.floor((index1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y - 20;
	
	this.cmd("CreateLabel", this.dummyCoeff, listCoeff1[index1], nextX - 22, nextY);
	this.cmd("Sethighlight", this.llCoeff1[index1], "#2eb82e");
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, listCoeff1[index1], nextX - 22, nextY, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
	if (operation == "sum") {
		this.cmd("SetText", this.llCoeff[nodeCount], listCoeff1[index1] + " + ");
	} else if (operation == "sub") {
		this.cmd("SetText", this.llCoeff[nodeCount], listCoeff1[index1] + " - ");
	}
	this.cmd("Sethighlight", this.llCoeff1[index1], "");
	this.cmd("Step");
	
	var nextX = (index2) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
	var nextY = Math.floor((index2) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y + 100;
	this.cmd("Sethighlight", this.llCoeff2[index2], "#2eb82e");
	this.cmd("Step");
	this.cmd("CreateLabel", this.dummyCoeff, listCoeff2[index2], nextX - 22, nextY);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, listCoeff2[index2], nextX - 22, nextY, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
	if (operation == "sum") {
		this.cmd("SetText", this.llCoeff[nodeCount], listCoeff1[index1] + " + " + listCoeff2[index2]);
	} else if (operation == "sub") {
		this.cmd("SetText", this.llCoeff[nodeCount], listCoeff1[index1] + " - " + listCoeff2[index2]);
	}
	
	this.cmd("Step");
	var addVal
	if (operation == "sum") {
		addVal = parseInt(listCoeff1[index1]) + parseInt(listCoeff2[index2]);
	} else if (operation == "sub") {
		addVal = parseInt(listCoeff1[index1]) - parseInt(listCoeff2[index2]);
	}
	listCoeff[nodeCount] = addVal;
	this.cmd("SetText", this.llCoeff[nodeCount], addVal);
	this.cmd("Sethighlight", this.llCoeff2[index2], "");
	this.cmd("Step");
    this.cmd("Step");
    
    var nextY = Math.floor((index1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y - 20;
    this.cmd("Sethighlight", this.llExp1[index1], "#2eb82e");
    this.cmd("CreateLabel", this.dummyCoeff, listExp1[index1], nextX + LL_ELEM_WIDTH - 25, nextY);
    this.moveValueFromOnePositionToAnother(this.dummyCoeff, listExp1[index1], nextX + LL_ELEM_WIDTH - 25, nextY, POLYLL_NEXT_POS_X + 450, POLYLL_ELE_POS_Y);
    this.cmd("Step");
    this.cmd("Delete", this.dummyCoeff);
   
    this.cmd("SetText", this.llExp[nodeCount], listExp1[index1]);
    this.cmd("Sethighlight", this.llExp1[index1], "");
    this.cmd("Step");
    this.cmd("SetText", this.llNext[nodeCount], null);
    this.cmd("Step");
    sum = this.addTerm(sum, t3);
	this.cmd("Step");
	
	this.assignT3ToHead3();
	this.cmd("Step");
	this.t1NextToT1(index1);
	this.cmd("Step");
	this.t2NextToT2(index2);
	this.cmd("Step");
}

PolynomialLL.prototype.t1NextToT1 = function(index1) {
	this.cmd("Sethighlight", this.llNext1[index1], "#2eb82e");
	var nextX = (index1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
	var nextY = Math.floor((index1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y - 20;
	this.cmd("CreateLabel", this.dummyCoeff, null, nextX + LL_ELEM_WIDTH + 20, nextY);
	if (address1.length != (index1 + 1)) {
		this.moveValueFromOnePositionToAnother(this.dummyCoeff, address1[index1 + 1], nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 5, 120);
		this.cmd("Step");
		this.cmd("SetText", this.t1Id, address1[index1 + 1]);
		this.cmd("Delete", this.dummyCoeff);
		this.cmd("Disconnect", this.t1RectId, this.llCoeff1[index1]);
		this.cmd("Step");
		this.cmd("Connect", this.t1RectId, this.llCoeff1[index1 + 1]);
		this.cmd("Step");
		this.cmd("Sethighlight", this.llNext1[index1], "");
		this.cmd("Step");
	} else {
		this.moveValueFromOnePositionToAnother(this.dummyCoeff, null, nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 5, 120);
		this.cmd("Step");
		this.cmd("SetText", this.t1Id, null);
		this.cmd("Delete", this.dummyCoeff);
		this.cmd("Disconnect", this.t1RectId, this.llCoeff1[index1]);
		this.cmd("Step");
		this.cmd("Sethighlight", this.llNext1[index1], "");
		this.cmd("Step");
	}
	return index1;
}

PolynomialLL.prototype.t2NextToT2 = function(index2) {
	
	this.cmd("Sethighlight", this.llNext2[index2], "#2eb82e");
	var nextX = (index2) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
	var nextY = Math.floor((index2) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y + 100;
	this.cmd("CreateLabel", this.dummyCoeff, null, nextX + LL_ELEM_WIDTH + 20, nextY);
	if (address2.length != (index2 + 1)) {
		this.moveValueFromOnePositionToAnother(this.dummyCoeff, address2[index2 + 1], nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 95, 120);
		this.cmd("Step");
		this.cmd("SetText", this.t2Id, address2[index2 + 1]);
		this.cmd("Disconnect", this.t2RectId, this.llCoeff2[index2]);
		this.cmd("Step");
		this.cmd("Delete", this.dummyCoeff);
		this.cmd("Sethighlight", this.llNext2[index2], "");
		this.cmd("Step");
		this.cmd("Connect", this.t2RectId, this.llCoeff2[index2 + 1]);
		this.cmd("Step");
	} else {
		this.moveValueFromOnePositionToAnother(this.dummyCoeff, null, nextX + LL_ELEM_WIDTH + 20, nextY, head1_POS_X + 95, 120);
		this.cmd("Step");
		this.cmd("SetText", this.t2Id, null);
		this.cmd("Disconnect", this.t2RectId, this.llCoeff2[index2]);
		this.cmd("Step");
		this.cmd("Delete",  this.dummyCoeff);
		this.cmd("Sethighlight", this.llNext2[index2], "");
		this.cmd("Step");
	}
	return index2;
}

function subtraction(head1, head2) {
    var sum =  null;
    t1 = head1;
    t2 = head2;
    
    while(t1 != null && t2 != null) {
    	t3 = {};
		if(parseInt(t1["exp"]) == parseInt(t2["exp"])) {
			t3["exp"] = listExp[nodeCount] = t1["exp"];
			t3["coeff"] = listCoeff[nodeCount] = parseInt(t1["coeff"]) - parseInt(t2["coeff"]);
			t3["next"] = null;
            sum = addterm(sum,t3);
            t1 = t1["next"];
            t2 = t2["next"];
      } else if(parseInt(t1["exp"]) > parseInt(t2["exp"])) {
                t3["coeff"] = t1["coeff"];
                t3["exp"] = t1["exp"];
                t3["next"] = null;
                sum = addterm(sum,t3);
                t1 = t1["next"];
      } else {
                t3["coeff"] = t2["coeff"];
                t3["exp"] = t2["exp"];
                t3["next"] = null;
                sum = addterm(sum,t3);
                t2 = t2["next"];
      }
    }
    while(t1 != null) {
              t3 = {};
              t3["coeff"] = t1["coeff"];
              t3["exp"] = t1["exp"];
              t3["next"] = null;
              sum = addterm(sum,t3);
              t1 = t1["next"];
    }
    while(t2 != null) {
   	 	t3 = {};
           t3["coeff"] = t2["coeff"];
           t3["exp"] = t2["exp"];
           t3["next"] = null;
           sum = addterm(sum,t3);
           t2 = t2["next"];
    }
   return sum;
}

function addterm(head, t) {
	p1 = p2 = p1Value = head;
	if(p1 == null) {
		head = t;
	} else {
		while(p1 != null && parseInt(p1["exp"]) > parseInt(t["exp"])) {
			p2 = p1;
			p1 = p1["next"];
		}

		if(p1 == null) {
			p2["next"] = t;
		} else if(parseInt(p1["exp"]) == parseInt(t["exp"])) {
			p1["coeff"] = parseInt(p1["coeff"]) + parseInt(t["coeff"]);
		} else if(parseInt(p1["exp"]) < parseInt(t["exp"]))	{
			if(p2 == p1) {
				t["next"] = p1;
				head = t;
			} else {
				t["next"] = p1;
				p2["next"] = t;
			}
		}
	}
	return head;
}

function mul(head1, head2) { 
	t1 = t2 = pro = null;
	
	/*t1 = head1;
	while (t1 != null) {
		t2 = head2;
		while (t2 != null) {
			t3 = {};
			t3["coeff"] = parseInt(t1["coeff"]) * parseInt(t2["coeff"]);
			t3["exp"] = parseInt(t1["exp"]) + parseInt(t2["exp"]);
			t3["next"] = null;
			pro = addterm(pro,t3);
			t2 = t2["next"];
		}
		 t1 = t1["next"];
	}
	*/
	for(t1 = head1; t1 != null; t1 = t1["next"]) {
		for(t2 = head2; t2 != null; t2 = t2["next"]) {
			t3 = {};
			t3["coeff"] = parseInt(t1["coeff"]) * parseInt(t2["coeff"]);
			t3["exp"] = parseInt(t1["exp"]) + parseInt(t2["exp"]);
			t3["next"] = null;
			pro = addterm(pro,t3);
		}
	}
	return pro;
}

PolynomialLL.prototype.createNode = function() {
	this.commands = new Array();
	this.dummyCoeff = this.nextIndex++;
	
	if (!createButtonFlag) {
		console.log("Hello poorna")
		//empty Animation bord
		for (let i = 0; i < nodeCount1; i++) {
			this.cmd("Delete", this.llCoeff1[i]);
			this.cmd("Delete", this.llExp1[i]);
			this.cmd("Delete", this.llNext1[i]);
			this.cmd("Delete", this.addVal1[i]);
			
			this.llCoeff1[i] = this.nextIndex++;
			this.llExp1[i] = this.nextIndex++;
			this.llNext1[i] = this.nextIndex++;
			this.addVal1[i] = this.nextIndex++;
		}
		
		for (let i = 0; i < nodeCount2; i++) {
			this.cmd("Delete", this.llCoeff2[i]);
			this.cmd("Delete", this.llExp2[i]);
			this.cmd("Delete", this.llNext2[i]);
			this.cmd("Delete", this.addVal2[i]);
			
			this.llCoeff2[i] = this.nextIndex++;
			this.llExp2[i] = this.nextIndex++;
			this.llNext2[i] = this.nextIndex++;
			this.addVal2[i] = this.nextIndex++;
		}
			
		this.cmd("SetText", this.head1Id, null);
		this.cmd("SetText", this.head2Id, null);
		head1 = head2 = head3 = null;
		nodeCount1 = nodeCount2 = 0;
		this.cmd("step");
		createButtonFlag = true;
		doPlayPause();
		/*$('.btn').attr("disabled", false);
		$('#createBtn').click();
		this.cmd("step")*/
		
	} 
		if (manikanta) {
			$('#headsDes').removeAttr("style").empty().append('\n<div id="createInMain"><span id="print1">printf("Enter 1st polynomial: ");\n</span>' +
					'<span id="head1Null">head1 = NULL;\n'+
					'<span id="createCall1">head1 = create(<span id="head1Name" class="position">head1</span>);</span></span>\n'+
					'<span id="print2">printf("Enter 2nd polynomial: ");</span>\n'+
					'<span id="head2Null">head2 = NULL;\n'+
					'<span id="createCall2">head2 = create(<span id="head2Name" class="position">head2</span>);</span></span>\n</div>');
			this.cmd("Step");
			this.introNextStep("#createInMain", "bottom", "hide");
			if (lang == "cpp") {
				$('#print1').text('cout << "Enter 1st polynomial: ";');
				$('#print2').text('cout << "Enter 2nd polynomial: ";');
			}
			this.cmd("Step");
			this.introNextStep("#print"+ callCount, "bottom", "hide");
			this.cmd("Step");
			if (flag) {
				this.cmd("Sethighlight", this.head1RectID, "#2eb82e");
				this.cmd("SetText", this.head1Id, null);
				this.cmd("Step");
				this.cmd("Sethighlight", this.head1RectID, "");
			} else {
				this.cmd("Sethighlight", this.head2RectID, "#2eb82e");
				this.cmd("SetText", this.head2Id, null);
				this.cmd("Step");
				this.cmd("Sethighlight", this.head2RectID, "");
			}
			this.cmd("Step");
			$('#preTemp').removeClass("hide").addClass("opacity00");
			if (lang == "cpp") {
				$("#console1").text('cout << "Enter coeff, exp of node : "');
				$("#readConsole1").text("cin >> coeff >> exp;");
				$("#console2").text('cout << "Do u want another node(y/n):"');
				$("#readConsole2").text("cin >> ch;");
			}
			$("#polyInit").parent().addClass("hide");
			this.introNextStep("#preTemp", "right", "hide");
			this.cmd("Step");
			manikanta = false;
			if (flag) {
				head1 = this.create(head1);
			} else {
				head2 = this.create(head2);
			}
		} else {
			if (flag) {
				if (ch == "n") {
					this.cmd("CreateLabel", this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y);
					this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 5, head1_POS_Y);
					this.cmd("Step");
					this.cmd("SetText", this.head1Id, address[0]);
					this.cmd("Delete", this.dummyCoeff);
					this.cmd("Step");
					this.cmd("Delete", this.headId);
					this.cmd("Delete", this.headRectID);
					this.cmd("Delete", this.headLable);
					this.cmd("Step");
					
					for (let i = 0; i < nodeCount; i++) {
						this.llCoeff[i] = this.nextIndex++;
						this.llExp[i] = this.nextIndex++;
						this.llNext[i] = this.nextIndex++;
					}
					flag = false;
					manikanta = true;
					ch = "y";
					this.cmd("step");
					this.cmd("step");
					$("#preMain").removeAttr("style");
					this.cmd("Step");
				} else {
					head1 = this.create(head1);
				}
			} else {
				if (ch == "y") {
					head2 = this.create(head2);
				} else {
					this.cmd("CreateLabel", this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y);
					this.moveValueFromOnePositionToAnother(this.dummyCoeff, address[0], head1_POS_X + 5, POLYLL_ELE_POS_Y, head1_POS_X + 130, head1_POS_Y);
					this.cmd("Step");
					this.cmd("SetText", this.head2Id, address[0]);
					this.cmd("Step");
					this.cmd("Delete", this.dummyCoeff);
					this.cmd("Delete", this.headId);
					this.cmd("Delete", this.headRectID);
					this.cmd("Delete", this.headLable);
					this.cmd("Step");
					flag = true;
					manikanta = true;
					ch = "y";
					this.introNextStep("#btnsDiv", "left", "");
				}
			}
	}
	
	return this.commands;
}

PolynomialLL.prototype.testing = function() {
	this.commands = new Array();
	
	temp["coeff"] = listCoeff[nodeCount] = parseInt(arr[0]);
	temp["exp"] = listExp[nodeCount] = parseInt(arr[1]);
	temp["next"] = null;
	
	this.cmd("CreateLabel", this.coefficient, "coeff : ", 40, 20);
	this.cmd("CreateLabel", this.coefficientValue, parseInt(arr[0]), 70, 20);
	this.cmd("CreateLabel", this.exponent, "exp : ", 150, 20);
	this.cmd("CreateLabel", this.exponentValue, parseInt(arr[1]), 180, 20);
	
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.llCoeffVal[nodeCount], parseInt(arr[0]), 70, 20, POLYLL_ELE_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.llCoeff[nodeCount], parseInt(arr[0]));
	this.cmd("Delete", this.llCoeffVal[nodeCount]);
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.llExpVal[nodeCount], parseInt(arr[1]), 180, 20, POLYLL_NEXT_POS_X, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("SetText", this.llExp[nodeCount], parseInt(arr[1]));
	this.cmd("Delete", this.llExpVal[nodeCount]);
	this.cmd("Step");
	this.cmd("SetText", this.llNext[nodeCount], null);
	this.cmd("Delete", this.llNextVal[nodeCount]);
	this.cmd("Step");
	if (flag) {
		head1 = this.addTerm(head1, temp);
	} else {
		head2 = this.addTerm(head2, temp);
	}
	return this.commands;
}

PolynomialLL.prototype.displayNodes = function() {
	this.commands = new Array();
	console.log("flag = " + flag);
	$('#headsDes').removeAttr("style").empty().append('\n<div id="displayInMain"><span id="print1List">'
			+ 'print(<span id="head1" class="position">head1</span>);</span>\n'
			+ '<span id="print2List">print(<span id="head2" class="position">head2</span>);</span></div>');
	$("#preMain, #preTemp").removeClass("opacity00 hide").removeAttr("style");
	this.introNextStep("#displayInMain", "bottom", "hide");
    	
	this.cmd("Step");
	this.cmd("Step");
	
	this.print(head1);
	this.cmd("Step");
	this.cmd("Step");
	this.print(head2);
	this.cmd("Step");
	for (let i = 0; i < nodeCount1; i++) {
		this.cmd("Delete", this.displayVal1[i]);
		this.cmd("Delete", this.dummyarrow1[i]);
	}
	for (let i = 0; i < nodeCount2; i++) {
		this.cmd("Delete", this.displayVal2[i]);
		this.cmd("Delete", this.dummyarrow2[i]);
	}
	this.cmd("Delete", this.dummyNull1);
	this.cmd("Delete", this.dummyNull2);
	this.cmd("Step");
	this.introNextStep("#btnsDiv", "left", "");
	return this.commands;
}

PolynomialLL.prototype.commonCodeForAddAndSub = function(operation) {
	flag = "addition";
	sum = null;
	this.cmd("Step");
	head3 = this.addition(head1, head2, operation);
	this.cmd("Step");
	head3 = sum;
	this.print(head3);
	
	this.cmd("Step");
	this.cmd("Step");
	for (let i = 0; i < nodeCount3; i++) {
		
		this.cmd("Delete", this.llCoeff3[i]);
		this.cmd("Delete", this.llExp3[i]);
		this.cmd("Delete", this.llNext3[i]);
		this.cmd("Delete", this.addVal3[i]);
		
		this.cmd("Delete", this.displayVal1[i]);
		this.cmd("Delete", this.dummyarrow1[i]);
		
		this.llCoeff3[i] = this.nextIndex++;
		this.llExp3[i] = this.nextIndex++;
		this.llNext3[i] = this.nextIndex++;
		this.addVal3[i] = this.nextIndex++;
	}
	this.cmd("Delete", this.dummyNull1);
	this.cmd("SetText", this.head3Id, null);
	this.cmd("Step");
}

PolynomialLL.prototype.addNodes = function() {
	this.commands = new Array();
	this.commonCodeForAddAndSub("sum")
	return this.commands;
}

PolynomialLL.prototype.subNodes = function() {
	this.commands = new Array();
	head3 = {};
	console.log("subtraction");
	
	this.commonCodeForAddAndSub("sub")
	head3 = subtraction(head1, head2);
	return this.commands;
}

PolynomialLL.prototype.mulNodes = function() {
	this.commands = new Array();
	indexM1 = indexM2 = indexM3 = 0;
	head3 = mul(head1, head2);
	this.cmd("Step");
	
	
	this.multiplicationAnimation();
	this.cmd("Step");

	this.print(head3);
	
	this.cmd("Step");
	for (let i = 0; i < nodeCount3; i++) {
		
		this.cmd("Delete", this.llCoeff3[i]);
		this.cmd("Delete", this.llExp3[i]);
		this.cmd("Delete", this.llNext3[i]);
		this.cmd("Delete", this.addVal3[i]);
		
		this.cmd("Delete", this.displayVal1[i]);
		this.cmd("Delete", this.dummyarrow1[i]);
		
		this.llCoeff3[i] = this.nextIndex++;
		this.llExp3[i] = this.nextIndex++;
		this.llNext3[i] = this.nextIndex++;
		this.addVal3[i] = this.nextIndex++;
	}
	
	this.cmd("Delete", this.dummyNull1);
	this.cmd("SetText", this.head3Id, null);
	this.cmd("Step");
	
	return this.commands;
}

PolynomialLL.prototype.multiplicationAnimation = function() {
	t1 = t2 = sum = null;
	
	t1 = head1;
	
	this.createTempararyNodes("pro");
	this.cmd("Step");
	this.assignT1Value();
	this.cmd("Step");
	this.idChange();
	while (t1 != null) {
		t2 = head2;
		this.assignT2Value();
		this.cmd("Step");
		while (t2 != null) {
			t3 = {};
			t3["coeff"] = parseInt(t1["coeff"]) * parseInt(t2["coeff"]);
			t3["exp"] = parseInt(t1["exp"]) + parseInt(t2["exp"]);
			t3["next"] = null;
			
			this.createAnEmptyNode();
			this.cmd("Step");
			this.coeffMultiplication();
			this.cmd("Step");
			this.expAddition();
			sum = this.addTerm(sum, t3);
			this.cmd("Step");
			//sum = addterm(sum,t3);
			this.assignT3ToHead3();
			t2 = t2["next"];
			this.cmd("Step")
			this.t2NextToT2(indexM2);
			indexM2++;
		}
		this.cmd("step");
		t1 = t1["next"];
		this.t1NextToT1(indexM1);
		indexM1++;
	}
	this.cmd("Step");
	this.commanCodeForAddSubAndMul();
	return sum;
	
}


PolynomialLL.prototype.assignT1Value = function() {
	this.dummyCoeff = this.nextIndex++;
	this.cmd("CreateLabel", this.dummyCoeff, (address1.length != 0) ? address1[0] : null, head1_POS_X + 5, head1_POS_Y);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, (address1.length != 0) ? address1[0] : null, head1_POS_X + 5, head1_POS_Y, head1_POS_X + 5, 120);
	this.cmd("Step");
	this.cmd("SetText", this.t1Id, (address1.length != 0) ? address1[0] : null);
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("Step");
	if (address1.length != 0) {
		this.cmd("Connect", this.t1RectId, this.llCoeff1[0]);
	}
}

PolynomialLL.prototype.assignT3ToHead3 = function() {
	this.cmd("Step");
	this.cmd("CreateLabel", this.dummyCoeff, (address.length != 0) ? address[0] : null, head1_POS_X + 490, POLYLL_ELE_POS_Y);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, (address.length != 0) ? address[0] : null, head1_POS_X + 490, POLYLL_ELE_POS_Y, head1_POS_X + 195, 120);
	this.cmd("Step");
	this.cmd("SetText", this.sumId, (address.length != 0) ? address[0] : null);
	this.cmd("Delete",  this.dummyCoeff);
	this.cmd("Delete", this.headRectID);
	this.cmd("Delete", this.headLable);
	this.cmd("Delete", this.headId);
	if (address1.length != 0) {
		this.cmd("Connect", this.sumId, this.llCoeff3[0]);
	}
	this.cmd("Step");
}

PolynomialLL.prototype.assignT2Value = function() {
	indexM2 = 0;
	this.dummyCoeff = this.nextIndex++;
	this.cmd("CreateLabel", this.dummyCoeff, (address2.length != 0) ? address2[0] : null, head1_POS_X + 125, head1_POS_Y);
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, (address2.length != 0) ? address2[0] : null, head1_POS_X + 125, head1_POS_Y, head1_POS_X + 95, 120);
	this.cmd("Step");
	this.cmd("SetText", this.t2Id, (address2.length != 0) ? address2[0] : null);
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("Step");
	if (address1.length != 0) {
		this.cmd("Connect", this.t2RectId, this.llCoeff2[0]);
	}
	this.cmd("Step");
}

PolynomialLL.prototype.coeffMultiplication = function() {
	//list 1 coeff value animation
	this.cmd("Sethighlight", this.llCoeff1[indexM1], "#2eb82e");
	this.cmd("Step");
	this.cmd("Sethighlight", this.llCoeff1[indexM1], "");
	
	var nextX = (indexM1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
	var nextY = Math.floor((indexM1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y - 20;
	
	this.cmd("CreateLabel", this.dummyCoeff, listCoeff1[indexM1], nextX - 22, nextY);
	this.cmd("Sethighlight", this.llCoeff1[indexM1], "#2eb82e");
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, listCoeff1[indexM1], nextX - 22, nextY, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("SetText", this.llCoeff[nodeCount], listCoeff1[indexM1] + " * ");
	this.cmd("Sethighlight", this.llCoeff1[indexM1], "");
	this.cmd("Step");
	
	this.cmd("Sethighlight", this.llCoeff2[indexM2], "#2eb82e");
	this.cmd("Step");
	this.cmd("Sethighlight", this.llCoeff2[indexM2], "");
	
	//list 2 coeff value animation
	var nextX = (indexM2) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X + POLYLL_ELE_WIDTH;
	var nextY = Math.floor((indexM2) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y + 100;
	
	this.cmd("CreateLabel", this.dummyCoeff, listCoeff2[indexM2], nextX - 22, nextY);
	this.cmd("Sethighlight", this.llCoeff2[indexM2], "#2eb82e");
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, listCoeff2[indexM2], nextX - 22, nextY, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("SetText", this.llCoeff[nodeCount], listCoeff1[indexM1] + " * " + listCoeff2[indexM2]);
	this.cmd("Sethighlight", this.llCoeff2[indexM2], "");
	this.cmd("Step");
	listCoeff[nodeCount] = (parseInt(listCoeff1[indexM1]) * parseInt(listCoeff2[indexM2]));
	this.cmd("SetText", this.llCoeff[nodeCount], (parseInt(listCoeff1[indexM1]) * parseInt(listCoeff2[indexM2])));
	
	this.cmd("Step");
}

PolynomialLL.prototype.expAddition = function() {
	//list 1 coeff value animation
	this.cmd("Sethighlight", this.llExp1[indexM1], "#2eb82e");
	this.cmd("Step");
	this.cmd("Sethighlight", this.llExp1[indexM1], "");
	
	var nextX = (indexM1) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X  + POLYLL_ELE_WIDTH;
	var nextY = Math.floor((indexM1) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y - 20;
	
	this.cmd("CreateLabel", this.dummyCoeff, listExp1[indexM1], nextX + LL_ELEM_WIDTH - 25, nextY);
	this.cmd("Sethighlight", this.llExp1[indexM1], "#2eb82e");
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, listExp1[indexM1], nextX + LL_ELEM_WIDTH - 25, nextY, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("SetText", this.llExp[nodeCount], listExp1[indexM1] + " + ");
	this.cmd("Sethighlight", this.llExp1[indexM1], "");
	this.cmd("Step");
	
	this.cmd("Sethighlight", this.llExp2[indexM2], "#2eb82e");
	this.cmd("Step");
	this.cmd("Sethighlight", this.llExp2[indexM2], "");
	
	//list 2 coeff value animation
	var nextX = (indexM2) % LL_ELEMS_PER_LINE * LL_ELEM_SPACING + LL_START_X + POLYLL_ELE_WIDTH;
	var nextY = Math.floor((indexM2) / LL_ELEMS_PER_LINE) * LL_LINE_SPACING + LL_START_Y + 100;
	
	this.cmd("CreateLabel", this.dummyCoeff, listExp2[indexM2], nextX + LL_ELEM_WIDTH - 25, nextY);
	this.cmd("Sethighlight", this.llExp2[indexM2], "#2eb82e");
	this.cmd("Step");
	this.moveValueFromOnePositionToAnother(this.dummyCoeff, listExp2[indexM2], nextX + LL_ELEM_WIDTH - 25, nextY, POLYLL_ELE_POS_X + 450, POLYLL_ELE_POS_Y);
	this.cmd("Step");
	this.cmd("Delete", this.dummyCoeff);
	this.cmd("SetText", this.llExp[nodeCount], listExp1[indexM1] + " + " + listExp2[indexM2]);
	this.cmd("Sethighlight", this.llExp2[indexM2], "");
	this.cmd("Step");
	listExp[nodeCount] = (parseInt(listExp1[indexM1]) + parseInt(listExp2[indexM2]))
	this.cmd("SetText", this.llExp[nodeCount], (parseInt(listExp1[indexM1]) + parseInt(listExp2[indexM2])));
	this.cmd("Step");
	this.cmd("SetText", this.llNext[nodeCount], null);
	this.cmd("Step");
}

PolynomialLL.prototype.moveValueFromOnePositionToAnother = function(id, val, pos1, pos2, pos3, pos4) {
	this.cmd("SetPosition", id, pos1, pos2);
	this.cmd("SetText", id, val);
	this.cmd("Move", id, pos3, pos4);
}

function decSumAndSubValues() {
	head3 = null;
	flag = "addition";
	nodeCount3 = 0;
	listCoeff3 = []; listExp3 = []; address3 = [];
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

PolynomialLL.prototype.introNextStep = function(id, position, ttClass) {
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

