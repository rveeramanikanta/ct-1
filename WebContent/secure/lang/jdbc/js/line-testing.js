function lineTesting() {
	svgAppend('svgId', '#animationDiv', 'arrow');
	/*svgAnimatingLineTopAndBottom('#animationDiv', '#box3', '#box1', '#svgId', 'line2', 'arrow', 'top', 'left', 'left')
	svgAnimatingLineTopAndBottom('#animationDiv', '#box3', '#box1', '#svgId', 'line1', 'arrow', 'top', '', '')
	svgAnimatingLineTopAndBottom('#animationDiv', '#box3', '#box1', '#svgId', 'line3', 'arrow', 'top', 'right', 'right')*/
	rlToBT('#animationDiv', '#box1', '#text1', '#svgId', 'line2', 'arrow', 'right', 'top')
}

function svgAppend(svgId, parentId, markerId) {
	var code = '<svg class="svg-css" id=' + svgId +'></svg>';
	$(parentId).append(code);
	svgMarkerAppend(svgId, markerId);
}

function svgMarkerAppend(svgId, markerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', markerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
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

function rlToBT(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	if (fromId.toLowerCase() == 'right') {	// from right
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	} else {	// from left
		x1 = $(selector1).offset().left - parentOffset.left;
	}
	if (toId.toLowerCase() == 'top') { // to top
		y2 = $(selector2).offset().top - parentOffset.top;
	} else { // to bottom
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	}
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}


// Top or bottom to right or left 2 lines
function svgAnimatingDoubleLineTopOrBottomToRightOrLeft(parentId, selector1, selector2, svgId, lineId1, lineId2, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3;
	if (toId.toLowerCase() == 'top') {
		y1 = $(selector1).offset().top - parentOffset.top;
	} else {
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	}
	x2 = x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	y3 = y2 = $(selector2).offset().top - parentOffset.top  + $(selector2).outerHeight() / 2;
	if (fromId.toLowerCase() == 'right') {
		x3 = $(selector2).offset().left - parentOffset.left;
	} else {
		x3 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(svgId, lineId1, markerId, x1, y1, x2, y2, function() {
		$('#' + lineId1).css('marker-end', '');
		lineAnimation(svgId, lineId2, markerId, x2, y2, x3, y3);
	});
}

// Right or left to bottom or top 2 lines
function svgAnimatingDoubleLineRightOrLeftToBottomOrTop(parentId, selector1, selector2, svgId, lineId1, lineId2, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3;
	if (fromId.toLowerCase() == 'right') {
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	} else {
		x1 = $(selector1).offset().left - parentOffset.left;
	}
	x3 = x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	y2 = y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	if (toId.toLowerCase() == 'bottom') {
		y3 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else {
		y3 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnimation(svgId, lineId1, markerId, x1, y1, x2, y2, function() {
		$('#' + lineId1).css('marker-end', '');
		lineAnimation(svgId, lineId2, markerId, x2, y2, x3, y3);
	});
}

// Right to left, Left to right
function svgAnimatingLineRightAndLeft(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	var x1, x2;
	if (fromId.toLowerCase() == 'right') {	// right to left
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		x2 = $(selector2).offset().left - parentOffset.left;
	} else {	// left to right
		x1 = $(selector1).offset().left - parentOffset.left;
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

// Top to (bottom-left, bottom-right, bottom), Bottom to (top-left, top-right, top)
function svgAnimatingLineTopAndBottom(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, startId, endId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, x2, y1, y2, startVal, endVal;
	startVal = (startId == 'left') ? 4 : (startId == 'right') ? 1.33 : 2;
	endVal = (endId == 'left') ? 4 : (endId == 'right') ? 1.33 : 2;
	x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / startVal;
	x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / endVal;
	if (fromId.toLowerCase() == "top") {	// top to bottom
		y1 = $(selector1).offset().top - parentOffset.top;
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else { // bottom to top
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
		y2 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

// Right or left to bottom or top
function svgAnimatingLineRightOrLeftToBottomOrTop(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	if (fromId.toLowerCase() == 'right') {	// from right
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	} else {	// from left
		x1 = $(selector1).offset().left - parentOffset.left;
	}
	if (toId.toLowerCase() == 'top') { // to top
		y2 = $(selector2).offset().top - parentOffset.top;
	} else { // to bottom
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	}
	lineAnimation(svgId, svgLineId, markerId, x1, y1, x2, y2, callBackFunction);
}

// top or bottom to right or left
function svgAnimatingLineTopOrBottomToLeftOrRight(parentId, selector1, selector2, svgId, svgLineId, markerId, fromId, toId, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var y1, x2;
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	if (fromId.toLowerCase() == 'top') {	// from top
		y1 = $(selector1).offset().top - parentOffset.top;
	} else {	// from bottom
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	}
	if (toId.toLowerCase() == 'right') { // to right
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	} else { // to left
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

