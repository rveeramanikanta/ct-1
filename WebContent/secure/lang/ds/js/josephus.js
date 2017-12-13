function josephusProgramReady() {
	svgAppend("svgId1", "#kingWithSoldiers");
	firstAnimLines();
	/*$('.fa:eq(0)').toggle('explode').addClass('opacity00');
	setTimeout(function() {
		$('.fa:eq(0)').removeAttr('style');
	}, 500);*/
	// <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
}


function firstAnimLines() {
	var king = '#kingWithSoldiers', svgId = '#svgId1', flag= true;
	svgAnimatingLineRightAndLeft(king, svgId, '#user1', '#user2', 'line1', flag)
	svgAnimatingLineRightToBottomOrTop(king, svgId, '#user2', '#user3', 'line2', flag);
	svgAnimatingLineTopAndBottom(king, svgId, '#user3', '#user4', 'line3', !flag);
	svgAnimatingLineBottomToLeftOrRight(king, svgId, '#user4', '#user5', 'line4', flag);
	svgAnimatingLineRightAndLeft(king, svgId, '#user5', '#user6', 'line5', !flag);
	svgAnimatingLineRightAndLeft(king, svgId, '#user6', '#user7', 'line6', !flag);
	svgAnimatingLineLeftToBottomOrTop(king, svgId, '#user7', '#user8', 'line7', !flag);
	svgAnimatingLineTopAndBottom(king, svgId, '#user8', '#user9', 'line8', flag);
	svgAnimatingLineTopToLeftOrRight(king, svgId, '#user9', '#user10', 'line9', !flag);
	svgAnimatingLineRightAndLeft(king, svgId, '#user10', '#user1', 'line10', flag);
}

function svgAppend(svgId, parentId) {
	var code = '<svg class="svg-css" id=' + svgId +'></svg>';
	$(parentId).append(code);
	svgMarkerAppend(svgId);
}

function svgMarkerAppend(svgId, curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', 'arrow');
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$('#' + svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#arrow').append(path);
}


function svgLineAppend(svgId, svgLineId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#arrow")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToBottomOrTop(parentId, svgId, selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var y2;
	if (lineFlag) { //right to top
		console.log("right to top");
		y2 = $(selector2).offset().top - parentOffset.top;
	} else { //right to bottom // not used
		console.log("right to bottom");
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	}
	lineAnimation(svgId, svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineLeftToBottomOrTop(parentId, svgId, selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1 = x1 = $(selector1).offset().left - parentOffset.left;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var y2;
	if (lineFlag) { //left to top	//not used
		console.log("left to top");
		y2 = $(selector2).offset().top - parentOffset.top;
	} else { //left to bottom
		console.log("left to bottom");
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	}
	lineAnimation(svgId, svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineBottomToLeftOrRight(parentId, svgId, selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	var x2;
	if (lineFlag) { //bottom to right
		console.log("bottom to right");
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	} else { //bottom to left // not used
		console.log("bottom to left");
		x2 = $(selector2).offset().left - parentOffset.left;
	}
	lineAnimation(svgId, svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineTopToLeftOrRight(parentId, svgId, selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	var x2;
	if (lineFlag) { //top to right	//not used
		console.log("top to right");
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	} else { //top to left
		console.log("top to left");
		x2 = $(selector2).offset().left - parentOffset.left;
	}
	lineAnimation(svgId, svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineRightAndLeft(parentId, svgId, selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	var x1, x2;
	if (lineFlag) {	//RightToLeft
		console.log("right to left");
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		x2 = $(selector2).offset().left - parentOffset.left;
	} else {	//LeftToRight
		console.log("left to right");
		x1 = $(selector1).offset().left - parentOffset.left;
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(svgId, svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineTopAndBottom(parentId, svgId, selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $(parentId).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1, y2;
	if (lineFlag) {	//TopToBottom
		console.log("top to bottom");
		y1 = $(selector1).offset().top - parentOffset.top;
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else { //BottomToTop
		console.log("bottom to top");
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
		y2 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnimation(svgId, svgLineId, x1, y1, x2, y2, callBackFunction);
}

function lineAnimation(svgId, svgLineId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgId, svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

/*var x = ($('#user10').offset().left - $("#kingWithSoldiers").offset().left) + $('#user10').width();
var y = ($('#user10').offset().top - $("#kingWithSoldiers").offset().top);
var x2 = ($('#user2').offset().left - $("#kingWithSoldiers").offset().left);
var y2 = ($('#user2').offset().top - $("#kingWithSoldiers").offset().top) ;
var y1 = y + 20 + $('#user2').outerHeight()
var x1 = x + ($('#user2').width() / 5);
var line = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	line.setAttribute("class", "svg-line curve");
	var points = "M" + x + ", " + y + " " + "C" + x + ", " + x + " " + x1 + ", " + y1 + " " + x2 + ", " + y2;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId1").append(line);
	setTimeout(function() {
		TweenMax.to("path", 1, {attr: {d : points}});
		$('path').css('fill', 'transparent');
	},500);
//M40,80 C40,40  120,40  120,80"

*var x = ($('#user10').offset().left - $("#kingWithSoldiers").offset().left) + $('#user10').width();
var y = ($('#user10').offset().top - $("#kingWithSoldiers").offset().top);
var x2 = ($('#user2').offset().left - $("#kingWithSoldiers").offset().left);
var y2 = ($('#user2').offset().top - $("#kingWithSoldiers").offset().top) ;
var line = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	line.setAttribute("class", "svg-line curve");
	var points = "M" + x + ", " + y + " " + "C" + x + ", " + x + " " + x2 + ", " + x + " " + x2 + ", " + y2;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId1").append(line);
	setTimeout(function() {
		TweenMax.to("path", 1, {attr: {d : points}});
		$('path').css('fill', 'transparent');
	},500);
//M40,80 C40,40  120,40  120,80"
*/


