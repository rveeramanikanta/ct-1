var svgCommonProperties = {};

function lineTesting() {
	svgAppend('#animationDiv');
	svgAppend('#animationDiv1');
	
	svgLineRightAndLeft('#animationDiv', '#box2', '#box1', 'line1', '', 'left', 'right', 'top', 'top');
	svgLineTopAndBottom('#animationDiv', '#box1', '#box3', 'line2', '', 'bottom', 'top', 'left', 'left', true);
	svgLineRightOrLeftToBottomOrTop('#animationDiv', '#box1', '#text1', 'line3', '', 'right', 'top', 'bottom', 'left', false);
	svgLineTopOrBottomToLeftOrRight('#animationDiv', '#text1', '#box3', 'line4', '', 'bottom', 'right', 'left', 'top');
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv', '#text1', '#box4', 'line5', 'line6', '', 'bottom', 'left');
	svgDoubleLineRightOrLeftToBottomOrTop('#animationDiv', '#box2', '#text1', 'line7', 'line8', '', 'left', 'top');
			
			
	svgLineRightAndLeft('#animationDiv1', '#box11', '#box12', 'line11', '', 'right', 'left', 'top', 'top', true);
	svgLineTopAndBottom('#animationDiv1', '#box13', '#box11', 'line12', '', 'top', 'bottom', 'left', 'left');
	svgLineRightOrLeftToBottomOrTop('#animationDiv1', '#box12', '#text11', 'line13', '', 'left', 'top', 'bottom', 'right', true);
	svgLineTopOrBottomToLeftOrRight('#animationDiv1', '#text11', '#box14', 'line14', '', 'bottom', 'left', 'right', 'top');
	svgDoubleLineTopOrBottomToRightOrLeft('#animationDiv1', '#text11', '#box13', 'line15', 'line16', '', 'bottom', 'right', 'left', 'top');
	svgDoubleLineRightOrLeftToBottomOrTop('#animationDiv1', '#box11', '#text11', 'line17', 'line18', '', 'right', 'top');
}

function svgAppend(parentId, svgId, markerId, markerColor) {
	if (typeof parentId === "undefined" || parentId.trim() == '') {
		console.error('Uncaught TypeError: Cannot read property \'parentId\' of undefined')
		alert("parentId is not defined....");
	} else {
		var dateObj = new Date();
		var time = dateObj.getTime();
		console.log(time);
		if (typeof svgId === "undefined" || svgId.trim() == '') {
			svgId = 'svgId' + time;
		}
		if (typeof markerId === "undefined" || markerId.trim() == '') {
			markerId = 'arrow' + time;
		}
		svgCommonProperties[parentId] = {"parentId" : parentId, "svgId" : "#" + svgId, "markerId": markerId};

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

function svgLineAppend(parentId, lineId, lineColor, x1, y1, x2, y2, styleFlag) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", lineId);
	if (styleFlag) {
		line.setAttribute("class", "svg-line svg-dotted-line");
	} else {
		line.setAttribute("class", "svg-line");
	}
	if (typeof lineColor === "undefined" || lineColor.trim() == '') {
		lineColor = 'gray';
	}
	line.style.stroke = lineColor;
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgCommonProperties[parentId].markerId + '")';
	$(svgCommonProperties[parentId].svgId).append(line);
}

//Right (top, bottom, center) to left (top, bottom, center), Left (top, bottom, center) to right (top, bottom, center)
function svgLineRightAndLeft(parentId, fromSelector, toSelector, lineId, lineColor, fromPosition, toPosition,
						fromSubPosition, toSubPosition, lineStyle, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, x2, y1, y2, startPosition, endPosition;
	startPosition = (fromSubPosition == 'top') ? 4 : (fromSubPosition == 'bottom') ? 1.33 : 2;
	endPosition = (toSubPosition == 'top') ? 4 : (toSubPosition == 'bottom') ? 1.33 : 2;
	y1 = $(fromSelector).offset().top - parentOffset.top + $(fromSelector).outerHeight() / startPosition;
	y2 = $(toSelector).offset().top - parentOffset.top + $(toSelector).outerHeight() / endPosition;
	if (fromPosition == 'right' && toPosition == 'left') {	// right to left
		x1 = $(fromSelector).offset().left - parentOffset.left + $(fromSelector).outerWidth();
		x2 = $(toSelector).offset().left - parentOffset.left;
	} else if (fromPosition == 'left' && toPosition == 'right') {	// left to right
		x1 = $(fromSelector).offset().left - parentOffset.left;
		x2 = $(toSelector).offset().left - parentOffset.left + $(toSelector).outerWidth();
	}
	lineAnimation(parentId, lineId, lineColor, x1, y1, x2, y2, lineStyle, callBackFunction);
}

//Top (left, right, center) to bottom (left, right, center), Bottom(left, right, middle) to (left, right, center)
function svgLineTopAndBottom(parentId, fromSelector, toSelector, lineId, lineColor, fromPosition, toPosition, 
						fromSubPosition, toSubPosition, lineStyle, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, x2, y1, y2, startPosition, endPosition;
	startPosition = (fromSubPosition == 'left') ? 4 : (fromSubPosition == 'right') ? 1.33 : 2;
	endPosition = (toSubPosition == 'left') ? 4 : (toSubPosition == 'right') ? 1.33 : 2;
	x1 = $(fromSelector).offset().left - parentOffset.left + $(fromSelector).outerWidth() / startPosition;
	x2 = $(toSelector).offset().left - parentOffset.left + $(toSelector).outerWidth() / endPosition;
	if (fromPosition == 'top' && toPosition == "bottom") {	// top to bottom
		y1 = $(fromSelector).offset().top - parentOffset.top;
		y2 = $(toSelector).offset().top - parentOffset.top + $(toSelector).outerHeight();
	} else if (fromPosition == 'bottom' && toPosition == 'top' ) { // bottom to top
		y1 = $(fromSelector).offset().top - parentOffset.top + $(fromSelector).outerHeight();
		y2 = $(toSelector).offset().top - parentOffset.top;
	}
	lineAnimation(parentId, lineId, lineColor, x1, y1, x2, y2, lineStyle, callBackFunction);
}

//Right (top, bottom, center) or left (top, bottom, center) to bottom (left, right, center) or top (left, right, center)
function svgLineRightOrLeftToBottomOrTop(parentId, fromSelector, toSelector, lineId, lineColor, fromPosition, toPosition, 
						fromSubPosition, toSubPosition, lineStyle, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, x2, y1, y2, startPosition, endPosition;
	startPosition = (fromSubPosition == 'top') ? 4 : (fromSubPosition == 'bottom') ? 1.33 : 2;
	endPosition = (toSubPosition == 'left') ? 4 : (toSubPosition == 'right') ? 1.33 : 2;
	y1 = $(fromSelector).offset().top - parentOffset.top + $(fromSelector).outerHeight() / startPosition;
	x2 = $(toSelector).offset().left - parentOffset.left + $(toSelector).outerWidth() / endPosition;
	if (fromPosition == 'right') {	// from right
		x1 = $(fromSelector).offset().left - parentOffset.left + $(fromSelector).outerWidth();
	} else if (fromPosition == 'left') {	// from left
		x1 = $(fromSelector).offset().left - parentOffset.left;
	}
	if (toPosition == 'top') { // to top
		y2 = $(toSelector).offset().top - parentOffset.top;
	} else if (toPosition == 'bottom') { // to bottom
		y2 = $(toSelector).offset().top - parentOffset.top + $(toSelector).outerHeight();
	}
	lineAnimation(parentId, lineId, lineColor, x1, y1, x2, y2, lineStyle, callBackFunction);
}

//top (left, right, center) or bottom (left, right, center) to right (top, bottom, center) or left (top, bottom, center)
function svgLineTopOrBottomToLeftOrRight(parentId, fromSelector, toSelector, lineId, lineColor, fromPosition, toPosition, 
						fromSubPosition, toSubPosition, lineStyle, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, startPosition, endPosition;
	startPosition = (fromSubPosition == 'left') ? 4 : (fromSubPosition == 'right') ? 1.33 : 2;
	endPosition = (toSubPosition == 'top') ? 4 : (toSubPosition == 'bottom') ? 1.33 : 2;
	x1 = $(fromSelector).offset().left - parentOffset.left + $(fromSelector).outerWidth() / startPosition;
	y2 = $(toSelector).offset().top - parentOffset.top + $(toSelector).outerHeight() / endPosition;
	if (fromPosition == 'top') {	// from top
		y1 = $(fromSelector).offset().top - parentOffset.top;
	} else if (fromPosition == 'bottom') {	// from bottom
		y1 = $(fromSelector).offset().top - parentOffset.top + $(fromSelector).outerHeight();
	}
	if (toPosition == 'right') { // to right
		x2 = $(toSelector).offset().left - parentOffset.left + $(toSelector).outerWidth();
	} else if (toPosition == 'left') { // to left
		x2 = $(toSelector).offset().left - parentOffset.left;
	}
	lineAnimation(parentId, lineId, lineColor, x1, y1, x2, y2, lineStyle, callBackFunction);
}

//Top (left, right, center) or bottom (left, right, center) to right (top, bottom, center) or left (top, bottom, center) 2 lines
function svgDoubleLineTopOrBottomToRightOrLeft(parentId, fromSelector, toSelector, lineId1, lineId2, lineColor, fromPosition, toPosition, 
						fromSubPosition, toSubPosition, lineStyle, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3, startPosition, endPosition;
	startPosition = (fromSubPosition == 'left') ? 4 : (fromSubPosition == 'right') ? 1.33 : 2;
	endPosition = (toSubPosition == 'top') ? 4 : (toSubPosition == 'bottom') ? 1.33 : 2;
	if (fromPosition == 'top') {
		y1 = $(fromSelector).offset().top - parentOffset.top;
	} else if (fromPosition == 'bottom') {
		y1 = $(fromSelector).offset().top - parentOffset.top + $(fromSelector).outerHeight();
	}
	x2 = x1 = $(fromSelector).offset().left - parentOffset.left + $(fromSelector).outerWidth() / startPosition;
	y3 = y2 = $(toSelector).offset().top - parentOffset.top  + $(toSelector).outerHeight() / endPosition;
	if (toPosition == 'left') {
		x3 = $(toSelector).offset().left - parentOffset.left;
	} else if (toPosition == 'right') {
		x3 = $(toSelector).offset().left - parentOffset.left + $(toSelector).outerWidth();
	}
	lineAnimation(parentId, lineId1, lineColor, x1, y1, x2, y2, lineStyle, function() {
		$('#' + lineId1).css('marker-end', '');
		lineAnimation(parentId, lineId2, lineColor, x2, y2, x3, y3, lineStyle, callBackFunction);
	});	
}

//Right (top, bottom, center) or left (top, bottom, center) to bottom (left, right, center) or top (left, right, center) 2 lines
function svgDoubleLineRightOrLeftToBottomOrTop(parentId, fromSelector, toSelector, lineId1, lineId2, lineColor, fromPosition, toPosition,
						fromSubPosition, toSubPosition, styleFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1, y1, x2, y2, x3, y3, startPosition, endPosition;
	startPosition = (fromSubPosition == 'top') ? 4 : (fromSubPosition == 'bottom') ? 1.33 : 2;
	endPosition = (toSubPosition == 'left') ? 4 : (toSubPosition == 'right') ? 1.33 : 2;
	if (fromPosition == 'right') {
		x1 = $(fromSelector).offset().left - parentOffset.left + $(fromSelector).outerWidth();
	} else if (fromPosition == 'left') {
		x1 = $(fromSelector).offset().left - parentOffset.left;
	}
	y2 = y1 = $(fromSelector).offset().top - parentOffset.top + $(fromSelector).outerHeight() / startPosition;
	x3 = x2 = $(toSelector).offset().left - parentOffset.left + $(toSelector).outerWidth() / endPosition;
	if (toPosition == 'bottom') {
		y3 = $(toSelector).offset().top - parentOffset.top + $(toSelector).outerHeight();
	} else if (toPosition == 'top') {
		y3 = $(toSelector).offset().top - parentOffset.top;
	}
	lineAnimation(parentId, lineId1, lineColor, x1, y1, x2, y2, styleFlag, function() {
		$('#' + lineId1).css('marker-end', '');
		lineAnimation(parentId, lineId2, lineColor, x2, y2, x3, y3, styleFlag, callBackFunction);
	});
}

function lineAnimation(parentId, lineId, lineColor, x1, y1, x2, y2, styleFlag, callBackFunction) {
	svgLineAppend(parentId, lineId, lineColor, x1, y1, x1, y1, styleFlag);
	TweenMax.to($('#' + lineId).show(), 0.8, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

