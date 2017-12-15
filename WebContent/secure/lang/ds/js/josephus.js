var introjs, index = 1, position = 0;
var soldiers = [];
function josephusProgramReady() {
	soldiers = $('.fa-user');
	$('.fa-check, .val').addClass('opacity00');
	//svgAppend("svgId1", "#kingWithSoldiers");
	//firstAnimLines();
	initIntroJS();
			/*$('.fa:eq(0)').toggle('explode').addClass('opacity00');
	setTimeout(function() {
		$('.fa:eq(0)').removeAttr('style');
	}, 500);*/
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		showBullets: false,
		steps: [ {
				element: '#headingSection',
				intro: '',
				position: 'right'
			}, {
				element: '#kingSoldierAnimDiv',
				intro: '',
				position: 'right'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		switch(elementId) {
			case "headingSection":
				text = 'Let us learn about <y>Josephus problem</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'kingSoldierAnimDiv':
				$('.introjs-tooltip').css('min-width', '520px');
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<ul><li>There are <y>10</y> people standing in a <y>circle</y> waiting to be executed. The <y>counting</y> out begins'
							+ ' at some point in the circle and proceeds around the circle in a fixed direction.</li>'
							+ '<li>In each step, a <y>certain number of people</y> are <y>skipped</y> and the <y>next person</y> is <y>executed</y>.</li>'
							+ ' <li>The <y>elimination</y> proceeds around the <y>circle</y> (which is becoming smaller and smaller as the'
							+ ' <y>executed people are removed</y>), until only the <y>last person remains</y>, who is given <y>freedom</y>.</li>'	
					typing('.introjs-tooltiptext', text, function() {
						$('#kingSoldierAnimDiv').removeClass('opacity00');
						/*callingNextButton(function() {
							$('.introjs-tooltiptext ul').append('<li></li>');
							text = 'Let us take an example: Total number of persons <y>10</y> and a number <y>2</y> which indicates <y>position</y>.'
									+ ' First the <y>2</y>nd person was killed and <y>4</y>, <y>6</y>, <y>8</y>, <y>10</y>, <y>3</y>, <y>7</y>,'
									+ '  <y>1</y>, <y>9</y> and the last person was <y>5</y>.';
							typing('.introjs-tooltiptext li:last', text, function() {
							
							});
						});*/
						$('.introjs-tooltiptext').append('<br><div id="appendText"></div>');
						text = 'Enter a value to kill the soldier <input id="killedVal" class="kill-val" maxlength="2" size="3">'
								+ '<span id="killingStatus"></span>';
						typing('#appendText', text, function() {
							eventValidation();
						});
					});
				});
			break;
		}
	});
	introjs.start();
}

function validation() {
	$('.user-btn').remove();
	$('.kill-val').attr('disabled', 'disabled');
	text = '<br><br>&emsp;&emsp;Now count the <y>8</y> soldiers from starting soldier and kill the <y>8</y>th person and repeat the loop';
	typing('#killingStatus', text, function() {
		soldiersAnimation();
	});
}

function soldiersAnimation() {
	if ($('.fa-user.opacity00').length != 9) {
		checkingSoldier(1, function() {
			$('.fa-check, .val').addClass('opacity00').removeClass('grn red');
			index = 1;
			setTimeout(function() {
				soldiersAnimation(position + 1);
				soldiers = soldiers.sort(function(obj1, obj2) {
					return obj1.id.substr(-2) - obj2.id.substr(-2);
				});
				soldiers.splice($('.kill-val').val() - 1, 1);
				changeIds(1);
				position = (position == 10) ? 0 : position;
			}, 500);
		});
	} else {
		alert('animation completed.');
	}
}

function changeIds(t) {
	for (var i = $('.kill-val').val(); i <= soldiers.length ; i++) {
		t = (t < 10) ? '0' + t : t;
		$('#' + soldiers[i - 1].id).attr('id', 'user' + t);
		
		t++;
	}
	for (var i = 1; i < $('.kill-val').val(); i++) {
		t = (t < 10) ? '0' + t : t;
		$('#' + soldiers[i - 1].id).attr('id', 'user' + t);
		t++;
	}
}

function checkingSoldier(t, callBackFunction) {
	t = (t < 10) ? '0' + t : t;
	$('#val' + t).text(index);
	if (index < +$('.kill-val').val()) {
		if (t == 11) {
			t = '01';
	    }
		zoomInEffect('#val' + t, function() {
			$('#val' + t).effect('highlight', {color: 'green'}, 500, function() {
				$('#sym' + t).addClass('fa-check grn').removeClass('fa-close');
				zoomInEffect('#sym' + t, function() {
					index++;
					checkingSoldier(++t, callBackFunction);
				});
			});
		});
	} else {
		zoomInEffect('#val' + t, function() {
			$('#val' + t).effect('highlight', {color: 'red'}, 500, function() {
				$('#sym' + t).addClass('fa-close red').removeClass('fa-check');
				zoomInEffect('#sym' + t, function() {
					$('#user' + t).addClass('blink', function() {
						rotateOutEffect('#user' + t, 'rotateOut animated', function() {
							$('#user' + t).removeClass('blink');
							rotateOutEffect('#val' + t, 'rotateOut animated', function() {
								rotateOutEffect('#sym' + t, 'rotateOut animated', function() {
									position = t;
									callBackFunction();
								});
							});
						});
					});
				});
			});
		});
	}
}

function typing(typingId, typingContent, callBackFunction) {
	$(typingId).typewriting(typingContent, {
		'typing_interval': '1'
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function rotateOutEffect(selector, className, callBackFunction) {
	$(selector).addClass(className).one('animationend', function() {
		$(selector).removeClass(className).addClass('opacity00');
		callBackFunction();
	});
}

function introNextSteps(stepName, animatedStep, tooltip, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var newStep = {
			element : stepName,
			intro : '',
			animateStep : animatedStep,
			tooltipClass : tooltip,
			position : position
	}
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

function callingNextButton(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function eventValidation() {
	$('.kill-val').focus();
	$('.kill-val').keydown(function(e) {
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) || e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$('.kill-val').keyup(function(e) {
		if ($(this).val().length > 0 && $(this).val() < 15) {
			$('.user-btn').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onClick="validation()">Next &#8594;</a>');
			if (e.keyCode == 13) {
				validation();
			}
		} else {
			$('.user-btn').remove();
		}
	});
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

function svgCurve(selector1, selector2, val) {
	var x = ($(selector1).offset().left - $("#kingWithSoldiers").offset().left) + $(selector1).width();
	var y = ($(selector1).offset().top - $("#kingWithSoldiers").offset().top) + $(selector1).outerHeight() - 8;
	var x2 = ($(selector2).offset().left - $("#kingWithSoldiers").offset().left) - 8;
	var y2 = ($(selector2).offset().top - $("#kingWithSoldiers").offset().top) + $(selector2).outerHeight() - 8;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	line.setAttribute("class", "svg-line");
	var points = "M" + x + ", " + y + " " + "C" + (x + 50) + ", " + x/3 + " " + x2+ ", " + x / 6 + " " + (x2 + 8) + ", " + y2;  
	line.style.markerEnd = 'url("#arrow")';
	line.setAttribute('id', 'curve' + val);
	$("#svgId1").append(line);
	setTimeout(function() {
		TweenMax.to("#curve" + val, 1, {attr: {d : points}});
		$('#curve' + val).css('fill', 'transparent');
	},500);
}




