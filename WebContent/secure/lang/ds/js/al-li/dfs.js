var MAX_VERTICES_SIZE = 8;
var VERTICES_SIZE = 0;

var edgesMap = {};
var dfs = {};
var visited = {};

var VERTICES_FIXID_X_POS = [ 500, 425, 575, 350, 650, 425, 575, 500 ];
var VERTICES_FIXID_Y_POS = [ 50, 150, 150, 250, 250, 350, 350, 450 ];


var HIGHLIGHT_LABEL_COLOR = "#FF0000"
var HIGHLIGHT_LINK_COLOR = "#FF0000"

var HIGHLIGHT_COLOR = "#f962f3"
var HEIGHT_LABEL_COLOR = "#007700"

var LINK_COLOR = "#f962f3";
var HIGHLIGHT_CIRCLE_COLOR = "#f962f3";
var visitedEdgeColor = "#6e00ff";

var adjMap = {};

var arr = [];
var visited = {};
var visit = [];
var currentVertex;
var startingVertex;
var visit;
var adj = {};
var fp, np, stackTop;
var queueIDMap = {};
var queueArr = [];
var colorsArr = ["#4cef83", "#3acde0", "#e039dd", "#8d96ba", "#e8b068", "#e8d668", "#ed368d"];
var usedColorsCount = 0;
var HIGHLIGHT_CIRCLE_COLOR = "#FF0000";

var adjacentTableMap = {};

var ADJACENT_TABLE_HORIZONTAL_X_POS = 725;
var ADJACENT_TABLE_HORIZONTAL_Y_POS = 100;
var ADJACENT_TABLE_VERTICAL_X_POS = 700;
var ADJACENT_TABLE_VERTICAL_Y_POS = 125;
var ADJACENT_TABLE_LINE_FLAG = false;
var VISITED_VERTEX_X_POS = 150;
var DFS_R_X = 65;
var DFS_R_Y = 460;


function Graph(am, w, h) {
	this.init(am, w, h);
}

Graph.prototype = new Algorithm();
Graph.prototype.constructor = Graph;
Graph.superclass = Algorithm.prototype;

Graph.prototype.init = function(am, w, h) {
	Graph.superclass.init.call(this, am, w, h);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.setup();
	this.initialIndex = this.nextIndex;
	//this.
	console.log(this)
}

Graph.prototype.getScope = function() {
	/*console.log(this);*/
}

Graph.prototype.addControls = function() {
	this.controls = [];
	this.vertexButton = document.getElementById("addVertexBtn");
	this.vertexButton.onclick = this.vertexCallback.bind(this);
	this.controls.push(this.vertexButton);

	this.edgeButton = document.getElementById("addEdgeBtn");
	this.edgeButton.onclick = this.edgeCallback.bind(this);
	this.controls.push(this.edgeButton);
	
	this.dfsVal = document.getElementById("dfsVal");
	this.dfsVal.onkeydown = this.returnSubmit(this.dfsVal,
			this.dfsCallback.bind(this), 4);
	
	this.dfsButton = document.getElementById("dfsBtn");
	this.dfsButton.onclick = this.dfsCallback.bind(this);
	this.controls.push(this.dfsButton);
	//console.log(this);
	//this.mani.bind(this);
}

Graph.prototype.enableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = false;
	}
}

Graph.prototype.disableUI = function(event) {
	for (var i = 0; i < this.controls.length; i++) {
		this.controls[i].disabled = true;
	}
}

Graph.prototype.setup = function() {
	this.vertices = new Array(MAX_VERTICES_SIZE);
	this.verticesEdges = new Array(MAX_VERTICES_SIZE);
	
	this.visitedVertices = new Array(MAX_VERTICES_SIZE);
	this.parentVertices = new Array(MAX_VERTICES_SIZE);
	
	for (var i = 0; i < MAX_VERTICES_SIZE; i++) {
		this.vertices[i] = this.nextIndex++;
	}
	for (var i = 0; i < MAX_VERTICES_SIZE; i++) {
		this.visitedVertices[i] = this.nextIndex++;
		this.parentVertices[i] = this.nextIndex++;
	}
	this.ADJACENT_TABLE_HORIZONTAL_LINE = this.nextIndex++;
	this.ADJACENT_TABLE_VERTICAL_LINE = this.nextIndex++;
	this.CURRENT_INDEX_LABEL = this.nextIndex++;
	this.CURRENT_INDEX_POINTER = this.nextIndex++;
	
	
	this.stackLabelID = this.nextIndex++;
	this.stackBaseLineID = this.nextIndex++;
	this.stackLeftLineID = this.nextIndex++;
	this.stackRightLineID = this.nextIndex++;
	
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();
}

Graph.prototype.vertexCallback = function(event) {
	if($("#addVertexBtn").hasClass("disabled")) {
		return;
	}
	
	if (VERTICES_SIZE < MAX_VERTICES_SIZE) {
		this.implementAction(this.vertex.bind(this), "");
	}
}

Graph.prototype.edgeCallback = function(event) {
	if($("#addEdgeBtn").hasClass("disabled") || ($("#fromID button").text().trim() == "vertex" ||  $("#toID button").text().trim() == "vertex")) {
		return;
	}
	
	if (!isNaN($("#fromID .active").text()) && !isNaN($("#toID .active").text()) ) {
		this.implementAction(this.edge.bind(this), "");
	}
}

Graph.prototype.dfsCallback = function(event) {
	if($("#dfsBtn").hasClass("disabled") || $("#dfsVal button").text().trim() == "vertex") {
		return;
	}
	this.implementAction(this.dfs.bind(this), "");
}

Graph.prototype.vertex = function() {
	this.commands = new Array();
	if (!$("#animationDiv").hasClass("introjs-showElement") && introjs != undefined) {
		introjs.goToStep(4);
		this.cmd("Step");
	}
	this.cmd("CreateCircle", this.vertices[VERTICES_SIZE], VERTICES_SIZE, VERTICES_FIXID_X_POS[VERTICES_SIZE], VERTICES_FIXID_Y_POS[VERTICES_SIZE]);
	$("#fromID ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	$("#toID ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	$("#dfsVal ul").append("<li><a href='#'>" + VERTICES_SIZE + "</a></li>");
	
	this.cmd("CreateLabel", this.nextIndex++, VERTICES_SIZE, ADJACENT_TABLE_HORIZONTAL_X_POS, ADJACENT_TABLE_HORIZONTAL_Y_POS);
	this.cmd("CreateLabel", this.nextIndex++, VERTICES_SIZE, ADJACENT_TABLE_VERTICAL_X_POS, ADJACENT_TABLE_VERTICAL_Y_POS);
	if (ADJACENT_TABLE_LINE_FLAG) {
		this.cmd("Delete", this.ADJACENT_TABLE_HORIZONTAL_LINE);
		this.cmd("Delete", this.ADJACENT_TABLE_VERTICAL_LINE);
	}
	this.cmd("DrawLine", this.ADJACENT_TABLE_HORIZONTAL_LINE, 675, 110, 
			ADJACENT_TABLE_HORIZONTAL_X_POS + 25, 110);
	this.cmd("DrawLine", this.ADJACENT_TABLE_VERTICAL_LINE, 710, 85, 710, ADJACENT_TABLE_VERTICAL_Y_POS + 25);
	
	this.cmd("CreateLabel", this.nextIndex++, 0, ADJACENT_TABLE_HORIZONTAL_X_POS, ADJACENT_TABLE_HORIZONTAL_Y_POS + 25);
	adjacentTableMap["0-" + VERTICES_SIZE] = this.nextIndex - 1;
	if (ADJACENT_TABLE_LINE_FLAG) {
		for (let i = 0; i < VERTICES_SIZE; i++) {
			this.cmd("CreateLabel", this.nextIndex++, 0, ADJACENT_TABLE_HORIZONTAL_X_POS, ADJACENT_TABLE_HORIZONTAL_Y_POS + (i + 2) * 25);
			adjacentTableMap[(i + 1) + "-" + VERTICES_SIZE] = this.nextIndex - 1;
			this.cmd("CreateLabel", this.nextIndex++, 0, ADJACENT_TABLE_VERTICAL_X_POS + (i + 1) * 25, ADJACENT_TABLE_VERTICAL_Y_POS);
			adjacentTableMap[(VERTICES_SIZE) + "-" + i] = this.nextIndex - 1;
		}
	}
	
	ADJACENT_TABLE_HORIZONTAL_X_POS = ADJACENT_TABLE_HORIZONTAL_X_POS + 25;
	ADJACENT_TABLE_VERTICAL_Y_POS = ADJACENT_TABLE_VERTICAL_Y_POS + 25;
	
	this.cmd("CreateLabel", this.nextIndex++, VERTICES_SIZE, VISITED_VERTEX_X_POS, 55);
	this.cmd("CreateRectangle", this.parentVertices[VERTICES_SIZE], "-", 25, 25, VISITED_VERTEX_X_POS, 105);
	this.cmd("CreateRectangle", this.visitedVertices[VERTICES_SIZE], "-1", 25, 25, VISITED_VERTEX_X_POS, 80);
	VISITED_VERTEX_X_POS = VISITED_VERTEX_X_POS + 25;
	
	if (!ADJACENT_TABLE_LINE_FLAG) {
		this.cmd("CreateLabel", this.nextIndex++, "Visited : ", 110, 80);
		this.cmd("CreateLabel", this.nextIndex++, "Parent : ", 110, 105);
	}
	
	ADJACENT_TABLE_LINE_FLAG = true;
	VERTICES_SIZE++;
	
	if (VERTICES_SIZE == 8) {
		$("#addVertexBtn").addClass("disabled");
	}
	
	return this.commands;
}



var parentsMap = {};
var childsMap = {};
var stackTopIDArr = [];

Graph.prototype.edge = function() {
	this.commands = new Array();
	var fromEdge = parseInt($("#fromID .active").text());
	var toEdge = parseInt($("#toID .active").text());
	
	//adj[fromEdge][toEdge] = 1;
	if (edgesMap[fromEdge + "-" + toEdge] == undefined) {
		var key = fromEdge + "-" + toEdge;
		if (edgesMap[toEdge + "-" + fromEdge] != undefined) {
			this.cmd("DisConnect", this.vertices[toEdge], this.vertices[fromEdge]);
			this.cmd("Connect", this.vertices[toEdge], this.vertices[fromEdge], "#000000", 0.3, 1, "");
			this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0.3, 1, "");
			edgesMap[fromEdge + "-" + toEdge] = true;
		} else {
			if ((key == "0-3" || key == "3-0") || (key == "0-4" || key == "4-0")
				|| (key == "3-7" || key == "7-3")  || (key == "4-7" || key == "7-4") ) {
				this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0.3, 1, "");
			} else {
				this.cmd("Connect", this.vertices[fromEdge], this.vertices[toEdge], "#000000", 0, 1, "");
			}
			edgesMap[fromEdge + "-" + toEdge] = true;
		}
		
		var connections = [];
		if (dfs[fromEdge] != undefined) {
			connections = dfs[fromEdge]; 
		}
		connections.push(toEdge);
		dfs[fromEdge] = connections.sort();
		adjMap[key] = 1;
		
		this.cmd("SetText", adjacentTableMap[key], 1);
		this.cmd("SetForegroundColor", adjacentTableMap[key], "#cd3232");
		
		var parents = [];
		
		if (parentsMap[toEdge] != undefined) {
			parents = parentsMap[toEdge]; 
		}
		parents.push(fromEdge);
		parentsMap[toEdge] = parents.sort();
	}
	return this.commands;
}


Graph.prototype.dfs = function() {
	this.commands = new Array();
	startingVertex = parseInt($("#dfsVal .active").text());
	this.highlightID = this.nextIndex++;
	this.queueID = this.nextIndex++;
	queueIDMap = {};
	$(".btn").addClass("disabled");
	var QUEUE_STARTING_X_POS = 150;
	var QUEUE_STARTING_Y_POS = 350;
	var CURRENT_INDEX_POINTER_X_POS = 150;
	var CURRENT_INDEX_POINTER_Y_POS = 370;
	var CURRENT_INDEX_LABEL_X_POS = 150;
	var CURRENT_INDEX_LABEL_Y_POS = 400;
	
	
	delete parentsMap[startingVertex];
	visitedVerticesMap[startingVertex] = true;
	
	adj = {};
	for (let i = 0; i < VERTICES_SIZE; i++) {
		for (let j = 0; j < VERTICES_SIZE; j++) {
			if (adjMap[i + "-" + j] == 1) {
				adj[i + "-" + j] = 1;
			} else {
				adj[i + "-" + j] = 0;
			}
		}
	}
	visit = [];
	visited = {};
	for (let i = 0; i < VERTICES_SIZE; i++) {
		visit[i] = -1;
	}
	currentVertex = startingVertex;
	fp = {};
	stackTop = fp;
	fp["data"] = currentVertex;
	fp["next"] = null;
	this.highlightCircleID = this.nextIndex++;
	/*this.cmd("CreateHighlightCircle", this.highlightCircleID, HIGHLIGHT_CIRCLE_COLOR, 
			VERTICES_FIXID_X_POS[startingVertex], VERTICES_FIXID_Y_POS[startingVertex]);*/
	
	this.cmd("DFSTooltipPos", VERTICES_FIXID_X_POS[currentVertex] + 30, VERTICES_FIXID_Y_POS[currentVertex] - 20);
	this.cmd("DFSStep");
	var text = "Initially, we should start traversing from the <y>given vertex</y>, i.e. <y id='startingVertex'>" + startingVertex + "</y>";
	this.cmd("DFSText", text);
	this.cmd("SetBackgroundColor", startingVertex, colorsArr[usedColorsCount]);
	this.cmd("Step");
	this.cmd("SetHighlight", currentVertex, 1);
	this.cmd("Step");
	
	this.cmd("CreateHighlightCircle", this.highlightCircleID, HIGHLIGHT_CIRCLE_COLOR, 
			VERTICES_FIXID_X_POS[currentVertex], VERTICES_FIXID_Y_POS[currentVertex]);
	this.cmd("Move", this.highlightCircleID, VISITED_VERTEX_X_POS + 25 - (25 * (VERTICES_SIZE - currentVertex + 1) ), 80);			
	this.cmd("Step");
	
	this.cmd("SetText", this.visitedVertices[startingVertex], 1);
	this.cmd("Delete", this.highlightCircleID);	
	this.cmd("DFSButton", "play");
	
	
	
	this.cmd("Step");
	this.cmd("DrawLine", this.nextIndex++, 150, 400, 200, 400);
	this.cmd("DrawLine", this.nextIndex++, 150, 400, 150, 200);
	this.cmd("DrawLine", this.nextIndex++, 200, 400, 200, 200);
	this.cmd("CreateLabel", this.nextIndex++, "stack", 175, 410);
	this.cmd("CreateLabel", this.nextIndex++, "DFS Result : ", DFS_R_X, DFS_R_Y);
	
	this.cmd("DFSTooltipPos", 220, 200);
	this.cmd("DFSStep");
	var text = "Now, starting vertex <y>" + startingVertex + "</y> is insert into the <y>stack</y>.";
	this.cmd("DFSText", text);
	this.cmd("Step");
	this.cmd("DFSButton", "play");
	this.cmd("Step");
	
	stackTopID = this.nextIndex++;
	stackTopIDArr.push(stackTopID);
	stackTop = 370;
	this.cmd("CreateRectangle", stackTopIDArr.slice(-1), startingVertex, 30, 30, 175, 180);
	this.cmd("SetBackgroundColor", stackTopIDArr.slice(-1), colorsArr[usedColorsCount]);
	usedColorsCount++;
	this.cmd("Move", stackTopIDArr.slice(-1), 175, stackTop);
	this.cmd("Step");
	DFS_R_X = 105;
	this.cmd("CreateLabel", this.nextIndex++, startingVertex + " ", DFS_R_X, DFS_R_Y);	
	this.cmd("DFSButton", "play");
	this.cmd("Step");
	this.cmd("DFSTooltipPos", VERTICES_FIXID_X_POS[currentVertex] + 30, VERTICES_FIXID_Y_POS[currentVertex] - 20);
	this.cmd("DFSStep");
	
	this.traversing(currentVertex);
	
	//console.log("DFS result : ");
	/*for (i = 0; i < VERTICES_SIZE; i++) {
		console.log(visit[i] + "  ");
	}*/
	return this.commands;
}

var visitedVerticesMap = {};

Graph.prototype.traversing = function(currentVertex) {
	console.log(dfs[currentVertex]);
	
	if (dfs[currentVertex] != undefined && dfs[currentVertex].length > 0) {
		var text = "Find all adjacent vertices of vertex <y>" + currentVertex + "</y>";
		this.cmd("DFSText", text);
		this.cmd("Step");
		
		for(let i = 0; i < dfs[currentVertex].length; i++) {			
			this.cmd("SetEdgeHighlight", currentVertex, dfs[currentVertex][i], 1);						
		}
		
		var text = "They are : <y>" + dfs[currentVertex].toString() + "</y>.";
		this.cmd("DFSText", text);
		this.cmd("Step");
		this.cmd("DFSButton", "play");
		this.cmd("Step");
		
		
		if (dfs[currentVertex].length > 1) {
			var text = "If a vertex as more than one adjacent vertices, " 
				+ "we can visit any one of the adjacent. I'm choose the vertex " 
				+ "<y>" + dfs[currentVertex].slice(-1) + "</y>.";
			this.cmd("DFSText", text);
			this.cmd("Step");
		}
		
		this.cmd("DFSButton", "play");
		this.cmd("Step");
		
		for(let i = 0; i < dfs[currentVertex].length; i++) {	
			this.cmd("SetEdgeHighlight", currentVertex, dfs[currentVertex][i], 0);						
		}
		
		if ( visitedVerticesMap[dfs[currentVertex].slice(-1)] != undefined ) {
			console.log("is already visited");
			var text = "The adjacent vertex of vertex <y>" + currentVertex + "</y> is already visited, so don't visit again.";
			this.cmd("DFSText", text);
			this.cmd("Step");
			
			if (parentsMap[dfs[currentVertex].slice(-1)] != undefined) {				
				parentsMap[dfs[currentVertex].slice(-1)].splice(parentsMap[dfs[currentVertex].slice(-1)].indexOf(currentVertex), 1)
			}
			
			let vertexVal = dfs[currentVertex].pop();			
			if (dfs[currentVertex].length == 0 && parentsMap[currentVertex] != undefined) {
				//parentVertex = parentsMap[currentVertex].slice(-1);
				this.backTracking1(currentVertex, parentVertex);
				/*var text = "If there is no <r>non-visited</r> adjacent vertices for vertex <y>" + currentVertex + "</y>, so backtrack it.";
				this.cmd("DFSText", text);
				this.cmd("Step");*/
			} else {
				this.traversing(currentVertex);
			}
			
		} else {
			visitedVerticesMap[dfs[currentVertex].slice(-1)] = true;
			console.log("is not visited");
			console.log(dfs[currentVertex])
			var text = "Now traveling to the vertex <y>" + dfs[currentVertex].slice(-1) + "</y>.";
			this.cmd("DFSText", text);
			this.cmd("Step");			
			this.cmd("CreateHighlightCircle", this.highlightCircleID, HIGHLIGHT_CIRCLE_COLOR, 
					VERTICES_FIXID_X_POS[currentVertex], VERTICES_FIXID_Y_POS[currentVertex]);
			this.cmd("Step");
			parentVertex = currentVertex;
			currentVertex = dfs[currentVertex].slice(-1);
			this.cmd("Move", this.highlightCircleID, VERTICES_FIXID_X_POS[currentVertex], VERTICES_FIXID_Y_POS[currentVertex]);
			this.cmd("Step");
			this.cmd("Step");
			this.cmd("Move", this.highlightCircleID, VISITED_VERTEX_X_POS + 25 - (25 * (VERTICES_SIZE - currentVertex + 1) ), 80);			
			this.cmd("Step");
			this.cmd("SetText", this.parentVertices[currentVertex], parentVertex);
			this.cmd("SetText", this.visitedVertices[currentVertex], 1);
			this.cmd("Step");
			this.cmd("Delete", this.highlightCircleID);
			this.cmd("DFSButton", "play");
			this.cmd("Step");
			this.cmd("DFSTooltipPos", 220, 200);
			this.cmd("DFSStep");			
			var text = "Insert the vertex <y>" + currentVertex + "</y> into the <y>stack</y>.";
			this.cmd("DFSText", text);
			this.cmd("Step");
			
			stackTopID = this.nextIndex++;
			stackTopIDArr.push(stackTopID);
			stackTop = stackTop - 35;			
			this.cmd("CreateRectangle", stackTopIDArr.slice(-1), currentVertex, 30, 30, 175, 180);
			this.cmd("SetBackgroundColor", stackTopIDArr.slice(-1), colorsArr[usedColorsCount]);
			usedColorsCount++;
			this.cmd("Move", stackTopIDArr.slice(-1), 175, stackTop);
			DFS_R_X = DFS_R_X + 15;
			this.cmd("CreateLabel", this.nextIndex++, " -  " + currentVertex, DFS_R_X, DFS_R_Y);
			this.cmd("Step");
			this.cmd("DFSButton", "play");
			this.cmd("Step");
			this.cmd("DFSTooltipPos", VERTICES_FIXID_X_POS[currentVertex] + 30, VERTICES_FIXID_Y_POS[currentVertex] - 20);
			this.cmd("DFSStep");
			//dfs[currentVertex].pop();
			
			
			this.traversing(currentVertex);
		}
		
		
	} else if (dfs[currentVertex] != undefined && parentsMap[currentVertex] != undefined) {
		//parentVertex = parentsMap[currentVertex].slice(-1);
		console.log("backtrack....");
		console.log(currentVertex);
		console.log(parentVertex);
		this.backTracking1(currentVertex, parentVertex);
	} else {		
		var text = "Visit all vertices";
		this.cmd("DFSText", text);
		this.cmd("Step");
		stackTop = stackTop + 35;
		this.cmd("Move", stackTopIDArr.slice(-1), 175, 175);
		this.cmd("Step");
		this.cmd("Delete", stackTopIDArr.slice(-1));
		/*this.cmd("Step");
		DFS_R_X = DFS_R_X + 15;
		this.cmd("CreateLabel", this.nextIndex++, " - " + currentVertex, DFS_R_X, DFS_R_Y);
		this.cmd("Delete", stackTopIDArr.slice(-1));*/
		stackTopIDArr.pop();
		this.cmd("RESTARTBUTTON", "restart");
		this.cmd("Step");
		this.cmd("hide", ".canvas-tooltip");
		this.cmd("Step");
	}
	
}

Graph.prototype.testing = function(currentVertex) {
	
}

repeatedItrFlag = true;
Graph.prototype.backTracking1 = function(currentVertex, parentVertex) {
	
//	if (parentsMap[parentVertex] != undefined && parentsMap[parentVertex].length > 0) {	
//		parentsMap[parentVertex].splice(parentsMap[currentVertex], 1);
//	}
	
	var text = "If there is no <r>non-visited</r> adjacent vertices for vertex <y>" + currentVertex + "</y>, " 
			+ "so backtrack to <y>parent</y> and remove from the <y>stack</y>.";
	this.cmd("DFSText", text);
	this.cmd("Step");
	this.cmd("SetHighlight", currentVertex, 0);
	this.cmd("CreateHighlightCircle", this.highlightCircleID, HIGHLIGHT_CIRCLE_COLOR, 
			VERTICES_FIXID_X_POS[currentVertex], VERTICES_FIXID_Y_POS[currentVertex]);
	this.cmd("Move", this.highlightCircleID, VERTICES_FIXID_X_POS[parentVertex], VERTICES_FIXID_Y_POS[parentVertex]);
	this.cmd("Step");
	
	stackTop = stackTop + 35;
	this.cmd("Move", stackTopIDArr.slice(-1), 175, 175);
	this.cmd("Step");
	DFS_R_X = DFS_R_X + 15;
	this.cmd("CreateLabel", this.nextIndex++, " - " + parentVertex, DFS_R_X, DFS_R_Y);
	this.cmd("Delete", stackTopIDArr.slice(-1));
	stackTopIDArr.pop();	
	dfs[parentVertex].splice(dfs[parentVertex].indexOf(currentVertex), 1);
	currentVertex = parentVertex;
	this.cmd("SetHighlight", currentVertex, 1);
	this.cmd("Delete", this.highlightCircleID);
	this.cmd("DFSButton", "play");
	this.cmd("Step");
	
	this.cmd("DFSTooltipPos", VERTICES_FIXID_X_POS[currentVertex] + 30, VERTICES_FIXID_Y_POS[currentVertex] - 20);
	this.cmd("DFSStep");
	
	//this.traversing(currentVertex)
	
	/*if (!testingFlag) {		
		this.traversing(currentVertex);
		testingFlag = true;
	}*/
	
	if (parentsMap[currentVertex] != undefined && parentsMap[currentVertex].length > 0) {
		if (dfs[currentVertex] != undefined && dfs[currentVertex].length > 0) {
			this.traversing(currentVertex);			
		} else {
			for (let i = 0; i < parentsMap[currentVertex].length; i++ ) {				
				if (visitedVerticesMap[parentsMap[currentVertex][i]] != undefined) {
					parentVertex = parentsMap[currentVertex][i];
					break;
				}				
				//parentVertex = parentsMap[currentVertex].slice(-1);
			}
			
			console.log("--------" + parentVertex + "------------" + currentVertex);		
			this.backTracking1(currentVertex, parentVertex);
		}
	} if (dfs[currentVertex] != undefined && dfs[currentVertex].length > 0) {
		this.traversing(currentVertex);			
	} else {
		
		if (repeatedItrFlag) {
			repeatedItrFlag = false;
			var text = "Visit all vertices";
			this.cmd("DFSText", text);
			this.cmd("Step");
			stackTop = stackTop + 35;
			this.cmd("Move", stackTopIDArr.slice(-1), 175, 175);
			this.cmd("Step");
			DFS_R_X = DFS_R_X + 15;
			this.cmd("CreateLabel", this.nextIndex++, " - " + currentVertex, DFS_R_X, DFS_R_Y);
			this.cmd("Delete", stackTopIDArr.slice(-1));
			stackTopIDArr.pop();
			this.cmd("RESTARTBUTTON", "restart");
			this.cmd("Step");
			this.cmd("hide", ".canvas-tooltip");
			this.cmd("Step");
		}
		//this.backTracking1(currentVertex, parentVertex);
	}
}

Graph.prototype.seqSearch = function(visit, n, currentVertex) {
	for (let i = 0; i < n; i++) {
		if (visit[i] != currentVertex) {
			continue;
		} else {
			return 1;
		}
	}
	return 0;
}

Graph.prototype.insert = function(visit, n, currentVertex) {
	for (let i = 0; i < n; i++) {
		if (visit[i] == -1) {
			visit[i] = currentVertex;
			return;
		}
	}
}

Graph.prototype.travel = function(vertex) {
	if (dfs[vertex] != undefined) {
		this.cmd("SetHighlight", vertex, 1);
		visited[vertex] = true;
		for (var i = 0; i < dfs[vertex].length; i++) {
			arr.push(dfs[vertex][i]);
			this.cmd("SetEdgeHighlight", vertex, dfs[vertex][i], 1);
			this.cmd("Step");
			this.cmd("Step");
			this.cmd("SetEdgeHighlight", vertex, dfs[vertex][i], 0);
			
			if(!visited[dfs[vertex][i]]) {
				this.cmd("SetEdgeColor", vertex, dfs[vertex][i], visitedEdgeColor);
			}
			visited[dfs[vertex][i]] = true;
		}
		this.cmd("SetHighlight", vertex, 0);
	}
}

function customPopover(selector, position, text, callBackFunction) {
	//doPlayPause();
	$(selector).popover({
		placement: position,
		html: true,
		trigger: 'focus',
		container : $("canvas").parent(),
		content: '<div class="customPopover">' + text + '</div>'
	}).popover('show').next().css("top", "0");
	
	typing($(".customPopover:last"), text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function play() {
	$(".user-btn").remove();
	doPlayPause();
}

function step1() {
	$(".user-btn").remove();
	$(".introjs-tooltiptext").append("<y id='dummy'>" + startingVertex + "</y>");
	$("#dummy").offset({
		top : $("#startingVertex").offset().top,
		left : $("#startingVertex").offset().left
	});
	let topVal = ($("canvas").offset().top- $("#startingVertex").offset().top) + VERTICES_FIXID_Y_POS[$("#startingVertex").text()] 
					+ parseInt($("#dummy").css("top"))
	let leftVal = ($("canvas").offset().left - $("#startingVertex").offset().left) + VERTICES_FIXID_X_POS[$("#startingVertex").text()] 
					+ parseInt($("#dummy").css("left"))
	
	TweenMax.to("#dummy", 1, {top : topVal - 5, left: leftVal - 5, onComplete: function() {
		$("#dummy").remove();
		doPlayPause();
	}});
}

var currentAlg;
function init() {
	var animManag = initCanvas();
	currentAlg = new Graph(animManag, canvas.width, canvas.height);
}
