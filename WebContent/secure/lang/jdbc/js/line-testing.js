var svgCommonProperties = {};

/*function lineTesting() {
	svgAppend('#animationDiv', 'svgId', 'arrow', 'red', 'red');
	svgAppend('#animationDiv1');	
	
	svgLineRightAndLeft('#animationDiv', '#box1', '#box2', 'line1', 'right', 'top', 'top', true);
	svgLineRightAndLeft('#animationDiv1', '#box11', '#box12', 'line2', 'right', 'top', 'top', false);
	svgLineTopAndBottom('#animationDiv', '#box1', '#box3', 'line11', 'bottom');
	svgLineTopAndBottom('#animationDiv1', '#box11', '#box13', 'line3', 'bottom', '', '', true);
	
	svgLineTopAndBottom('#animationDiv', '#box1', '#box3', 'line4', 'bottom', 'left', 'left');
	svgLineTopAndBottom('#animationDiv', '#box3', '#box1', 'line5', 'top');
	svgLineTopAndBottom('#animationDiv', '#box1', '#box3', 'line6', 'bottom', 'right', 'right');
	
	svgLineRightOrLeftToBottomOrTop('#animationDiv', '#text1', '#box1', 'line7', 'left', 'bottom', 'top', 'right');
	svgLineRightOrLeftToBottomOrTop('#animationDiv', '#text1', '#box3', 'line8', 'left', 'top', 'bottom');
	svgLineRightOrLeftToBottomOrTop('#animationDiv', '#text1', '#box1', 'line9', 'left', 'bottom', '', 'left');
	
	svgLineTopOrBottomToLeftOrRight('#animationDiv', '#text1', '#box1', 'line10', 'top', 'right', 'left', 'bottom');
	svgLineTopOrBottomToLeftOrRight('#animationDiv', '#text1', '#box1', 'line12', 'top', 'right', '', 'top');
	
	svgDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#text1', '#box2', 'line13', 'line14', 'right', 'bottom', 'top', 'left');
	svgDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#text1', '#box3', 'line15', 'line16', 'left', 'top');
	svgDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#text1', '#box4', 'line17', 'line18', 'right', 'top', 'bottom', 'right');
	
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#text1', '#box4', 'line19', 'line20', 'bottom', 'left', 'right', 'top');
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#text1', '#box2', 'line21', 'line22', 'top', 'left');
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#text1', '#box3', 'line23', 'line24', 'bottom', 'right', 'left', 'bottom');
	
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#box4', '#ovalId', 'line25', 'line26', 'bottom', 'right', 'left', 'top');
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#box4', '#ovalId', 'line27', 'line28', 'bottom', 'right', '', '', true);
}*/

function svgAppend(parentId, svgId, markerId, markerColor, lineColor) {
	if (typeof parentId === "undefined" || parentId.trim() == '') {
		console.error('Uncaught TypeError: Cannot read property \'parentId\' of undefined')
		alert("parentId is not defined....");
	} else {
		if (typeof svgId === "undefined" || svgId.trim() == '') {
			svgId = 'svgId' + (+$('svg').length + 1);
		}
		if (typeof markerId === "undefined" || markerId.trim() == '') {
			markerId = 'arrow' + (+$('svg').length + 1);
		}
		if (typeof lineColor === "undefined" || lineColor.trim() == '') {
			lineColor = 'gray';
		}
		svgCommonProperties[parentId] = {"parentId" : parentId, "svgId" : "#" + svgId, "markerId": markerId, "lineColor": lineColor};

		var code = '<svg class="svg-css" id=' + svgId +'></svg>';
		$(parentId).append(code);
		svgMarkerAppend(parentId, markerColor);
	}
}

function svgMarkerAppend(parentId, markerColor) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgCommonProperties[parentId].markerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	if (typeof markerColor === "undefined" || markerColor.trim() == '') {
		markerColor = 'gray';
	}
	marker.style.fill = markerColor;
	$(svgCommonProperties[parentId].svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgCommonProperties[parentId].markerId).append(path);
}

function svgLineAppend(parentId, svgLineId, x1, y1, x2, y2, styleFlag) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	if (styleFlag) {
		line.setAttribute("class", "svg-line svg-dotted-line");
	} else {
		line.setAttribute("class", "svg-line");
	}
	line.style.stroke = svgCommonProperties[parentId].lineColor;
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgCommonProperties[parentId].markerId + '")';
	$(svgCommonProperties[parentId].svgId).append(line);
}

//Right (top, bottom, center) to left (top, bottom, center), Left (top, bottom, center) to right (top, bottom, center)
function svgLineRightAndLeft(parentId, selector1, selector2, svgLineId, fromId, startPos, endPos, styleFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, x2, y1, y2, startVal, endVal;
	startVal = (startPos == 'top') ? 4 : (startPos == 'bottom') ? 1.33 : 2;
	endVal = (endPos == 'top') ? 4 : (endPos == 'bottom') ? 1.33 : 2;
	y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / startVal;
	y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / endVal;
	if (fromId == 'right') {	// right to left
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		x2 = $(selector2).offset().left - parentOffset.left;
	} else if (fromId == 'left') {	// left to right
		x1 = $(selector1).offset().left - parentOffset.left;
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(parentId, svgLineId, x1, y1, x2, y2, styleFlag, callBackFunction);
}

//Top (left, right, center) to bottom (left, right, center), Bottom(left, right, middle) to (left, right, center)
function svgLineTopAndBottom(parentId, selector1, selector2, svgLineId, fromId, startPos, endPos, styleFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, x2, y1, y2, startVal, endVal;
	startVal = (startPos == 'left') ? 4 : (startPos == 'right') ? 1.33 : 2;
	endVal = (endPos == 'left') ? 4 : (endPos == 'right') ? 1.33 : 2;
	x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / startVal;
	x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / endVal;
	if (fromId == 'top') {	// top to bottom
		y1 = $(selector1).offset().top - parentOffset.top;
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else if (fromId == 'bottom') { // bottom to top
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
		y2 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnimation(parentId, svgLineId, x1, y1, x2, y2, styleFlag, callBackFunction);
}

//Right (top, bottom, center) or left (top, bottom, center) to bottom (left, right, center) or top (left, right, center)
function svgLineRightOrLeftToBottomOrTop(parentId, selector1, selector2, svgLineId, fromId, toId, startPos, endPos, styleFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, x2, y1, y2, startVal, endVal;
	startVal = (startPos == 'top') ? 4 : (startPos == 'bottom') ? 1.33 : 2;
	endVal = (endPos == 'left') ? 4 : (endPos == 'right') ? 1.33 : 2;
	x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / endVal;
	y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / startVal;
	if (fromId == 'right') {	// from right
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	} else if (fromId == 'left') {	// from left
		x1 = $(selector1).offset().left - parentOffset.left;
	}
	if (toId == 'top') { // to top
		y2 = $(selector2).offset().top - parentOffset.top;
	} else if (toId == 'bottom') { // to bottom
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	}
	lineAnimation(parentId, svgLineId, x1, y1, x2, y2, styleFlag, callBackFunction);
}

//top (left, right, center) or bottom (left, right, center) to right (top, bottom, center) or left (top, bottom, center)
function svgLineTopOrBottomToLeftOrRight(parentId, selector1, selector2, svgLineId, fromId, toId, startPos, endPos, styleFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, startVal, endVal;
	startVal = (startPos == 'left') ? 4 : (startPos == 'right') ? 1.33 : 2;
	endVal = (endPos == 'top') ? 4 : (endPos == 'bottom') ? 1.33 : 2;
	x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / startVal;
	y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / endVal;
	if (fromId == 'top') {	// from top
		y1 = $(selector1).offset().top - parentOffset.top;
	} else if (fromId == 'bottom') {	// from bottom
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	}
	if (toId == 'right') { // to right
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	} else if (toId == 'left') { // to left
		x2 = $(selector2).offset().left - parentOffset.left;
	}
	lineAnimation(parentId, svgLineId, x1, y1, x2, y2, styleFlag, callBackFunction);
}

// Top (left, right, center) or bottom (left, right, center) to right (top, bottom, center) or left (top, bottom, center) 2 lines
function svgDoubleLineTopOrBottomToRightOrLeft(parentId, selector1, selector2, lineId1, lineId2, fromId, toId, startPos, endPos, styleFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3, startVal, endVal;
	startVal = (startPos == 'left') ? 4 : (startPos == 'right') ? 1.33 : 2;
	endVal = (endPos == 'top') ? 4 : (endPos == 'bottom') ? 1.33 : 2;
	if (fromId == 'top') {
		y1 = $(selector1).offset().top - parentOffset.top;
	} else if (fromId == 'bottom') {
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	}
	x2 = x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / startVal;
	y3 = y2 = $(selector2).offset().top - parentOffset.top  + $(selector2).outerHeight() / endVal;
	if (toId == 'left') {
		x3 = $(selector2).offset().left - parentOffset.left;
	} else if (toId == 'right') {
		x3 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(parentId, lineId1, x1, y1, x2, y2, styleFlag, function() {
		$('#' + lineId1).css('marker-end', '');
		lineAnimation(parentId, lineId2, x2, y2, x3, y3, styleFlag, callBackFunction);
	});	
}

// Right (top, bottom, center) or left (top, bottom, center) to bottom (left, right, center) or top (left, right, center) 2 lines
function svgDoubleLineRightOrLeftToBottomOrTop(parentId, selector1, selector2, lineId1, lineId2, fromId, toId, startPos, endPos, styleFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3, startVal, endVal;
	startVal = (startPos == 'top') ? 4 : (startPos == 'bottom') ? 1.33 : 2;
	endVal = (endPos == 'left') ? 4 : (endPos == 'right') ? 1.33 : 2;
	if (fromId == 'right') {
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	} else if (fromId == 'left') {
		x1 = $(selector1).offset().left - parentOffset.left;
	}
	x3 = x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / endVal;
	y2 = y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / startVal;
	if (toId == 'bottom') {
		y3 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else if (toId == 'top') {
		y3 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnimation(parentId, lineId1, x1, y1, x2, y2, styleFlag, function() {
		$('#' + lineId1).css('marker-end', '');
		lineAnimation(parentId, lineId2, x2, y2, x3, y3, styleFlag, callBackFunction);
	});
}

function lineAnimation(parentId, svgLineId, x1, y1, x2, y2, styleFlag, callBackFunction) {
	svgLineAppend(parentId, svgLineId, x1, y1, x1, y1, styleFlag);
	TweenMax.to($('#' + svgLineId).show(), 0.8, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

