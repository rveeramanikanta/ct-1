var intro;
function josephusProblemReady() {
	appendVariables("end", "end");
	appendVariableNodes("q", "main");
	initIntroJS();
	/*for (var i = 1; i < 13; i++) {
		appendListNodes(i);
		$('#output').append(' --> ' + $('#name' + i).text());
	}*/
}

function preBtnEvent() {
	$('#includePre').mouseout(function () {
		$('#includePre').css({'display': 'none'});
		$('#includeBtn').css({'display': 'inline'});
	});
	$('#includeBtn').click(function () {
		$('#includePre').css({'display': 'inline'});
		$('#includeBtn').css({'display': 'none'});
	});
}

function appendVariables(varName, val) {
	$('#variablesDiv').append('<div class="col-xs-2 text-center padding0 opacity00" id="' + varName + 'Dec"><b id="' + varName + 'Var">' + varName
						+ '</b> <b>=</b> <b class="border-css"><span id="' + varName + 'VarVal">' + val + '</span></b></div>');
	if (varName == "sname") {
		$('#snameVar').parent().removeClass('col-xs-2').addClass('col-xs-3');
	}
	$('#' + varName + 'Dec span').addClass('opacity00');
	//$('#variablesDiv > div').not(':first').addClass('margin-top15');
	$('#variablesDiv > div:not(:first)').addClass('margin-top15');
}

function appendVariableNodes(nodeNme, subNme) {
	$('#variableNodesDiv').append('<div class="col-xs-1 text-center padding0 margin-left opacity00" id="' + nodeNme + 'Dec">'
							+ '<div class="col-xs-12 box"><span id="' + nodeNme + '' + subNme + 'Val" class="brown-color">1248</span></div>'
							+ '<div class="col-xs-12 green-color padding0" id="' + nodeNme + '' + subNme + '">' + nodeNme + '<sub>'
							+ subNme + '</sub></div></div>');
	$('#' + nodeNme + 'Dec span').addClass('opacity00');
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function appendListNodes(count) {
	var randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + count + '" style="top: 0px; width: auto;">'
			+ ' <div class="col-xs-12 padding0"><div class="col-xs-8 blue-color padding0 text-center">name</div>'
			+ ' <div class="green-color text-center">next</div></div>'
			+ ' <div id="nodedata' + count + '" class="data-nodes"><div id="nameDiv' + count + '" class="div-border left-radius col-xs-6 name-div">'
			+ ' <span id="name' + count +'" class="name-span position-css blue-color opacity00" style="top: 3px;"></span></div>'
			+ ' <div id="nextDiv' + count +'" class="position-css div-border right-radius col-xs-6 next-div">'
			+ ' <span id="next' + count +'" class="position-css next-span green-color position-css opacity00" style="top: 2px;">NULL</span></div>'
			+ ' </div><div class="col-xs-12 padding0"><div class="col-xs-8 padding0 text-center">'
			+ ' <span id="dataAddress' + count + '" class="position-css data-address padding0 brown-color">' + randomAddress 
			+ ' </span></div></div></div>';
	if ($('.nodes').length < 6) {
		$('#row1').append(x);
	} else {
		(count == 7) ? $('#row2').addClass('margin-top15') : '';
		$('#row2').append(x);
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
				element : '#headingSection',
				intro : '',
				position : 'right'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
			case "headingSection":
				text = "Josephus problem";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent, callBackFunction) {
	$(typingId).typewriting(typingContent, {
		'typing_interval' : '1',
		'cursor_color' : 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
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

function appendCondCheckingText(text1, cond, text2, flag, val1, val2) {
	$(id).append('Now check the condition : <br><span id="mainSpan"><span id="fstVal"> ' + text1 +  '</span>' + cond 
			+ '<span id="secondVal">' + text2 + '</span></span>');
	$(id + ' span').addClass('position-css');
	flipEffect('#firstVal', val1, function() {
		if (flag) {
			flipEffect('#secondVal', val2, function() {});
		}
		setTimeout(function() {
			callBackFunction();
		}, 800);
		
		//val1 cond val2
	});
}

function flipEffect(selector, value, callBackFunction) {
	$(selector).effect('highlight', {color: 'yellow'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete: function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete: function() {
				callBackFunction();
			}});
		}});
	});
}











