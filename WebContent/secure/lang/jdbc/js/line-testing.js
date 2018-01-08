function lineTesting() {
	svgAppend('svgId', '#animationDiv', 'arrow', 'gray');
	
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#box3', '#text1', '#svgId', 'line1', 'line2', 'arrow', 'top', 'left', 'left', 'bottom');
	/*svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#box3', '#text1', '#svgId', 'line3', 'line4', 'arrow', 'top', 'left');
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#box3', '#text1', '#svgId', 'line5', 'line6', 'arrow', 'top', 'left', 'right', 'top');*/
}

function svgAppend(svgId, parentId, markerId, markerColor) {
	var code = '<svg class="svg-css" id=' + svgId +'></svg>';
	$(parentId).append(code);
	svgMarkerAppend(svgId, markerId, markerColor);
}

function svgMarkerAppend(svgId, markerId, markerColor) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', markerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = markerColor;
	$('#' + svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + markerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

// Top (left, right, center) or bottom (left, right, center) to right (top, bottom, center) or left (top, bottom, center) 2 lines
function svgDoubleLineTopOrBottomToRightOrLeft(parentId, selector1, selector2, svgId, lineId1, lineId2, markerId, fromId, toId,
				startPos, endPos, callBackFunction) {
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
	lineAnimation(svgId, lineId1, markerId, x1, y1, x2, y2, function() {
		$('#' + lineId1).removeAttr('style');
		lineAnimation(svgId, lineId2, markerId, x2, y2, x3, y3, callBackFunction);
	});	
}

// Right (top, bottom, center) or left (top, bottom, center) to bottom (left, right, center) or top (left, right, center) 2 lines
function svgDoubleLineRightOrLeftToBottomOrTop(parentId, selector1, selector2, svgId, lineId1, lineId2, markerId, fromId, toId, 
				startPos, endPos, callBackFunction) {
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
	lineAnimation(svgId, lineId1, markerId, x1, y1, x2, y2, function() {
		$('#' + lineId1).removeAttr('style');
		lineAnimation(svgId, lineId2, markerId, x2, y2, x3, y3, callBackFunction);
	});
}

// Right (top, bottom, center) to left (top, bottom, center), Left (top, bottom, center) to right (top, bottom, center)
function svgineRightAndLeft(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, startPos, endPos, callBackFunction) {
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
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

// Top (left, right, center) to bottom (left, right, center), Bottom(left, right, middle) to (left, right, center)
function svgLineTopAndBottom(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, startPos, endPos, callBackFunction) {
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
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

//Right (top, bottom, center) or left (top, bottom, center) to bottom (left, right, center) or top (left, right, center)
function svgLineRightOrLeftToBottomOrTop(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, toId, 
				startPos, endPos, callBackFunction) {
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
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

// top (left, right, center) or bottom (left, right, center) to right (top, bottom, center) or left (top, bottom, center)
function svgLineTopOrBottomToLeftOrRight(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, toId, startPos, endPos, callBackFunction) {
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
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

function lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 0.8, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

