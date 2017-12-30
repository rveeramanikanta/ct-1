var lang, intro, stepCount = 1;

function deleteAtBeginNodeInSllAnimation() { //call the method to start the intro and create some nodes
	declareNodesWhenFunctionCall("tempNode", "tempVal", "tempNodeInDelMtd", "temp");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	introFunction();
}

function introFunction() {	
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#headingDiv',
						intro :'',
					},{
						element :'#animationDiv',
						intro :'',
						animateStep: 'firstNodeNull',
						tooltipClass : "hide",
					}]
	});
	intro.onafterchange(function(targetElement) {
		intro.refresh();
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
			case 'animationDiv' :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'firstNodeNull': 
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked is empty</y>. i.e <y>first</y> is "
								+ " <y>NULL</y>.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'firstEqNull');
						});
					break;
					case 'firstNotEqNull' :
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contain only <y>one node</y>."
								+ " i.e <y>first</y> contains the <y>address</y> of the "
								+ " <y>first</y> node.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNullAnimation');
						});
					break;
					case 'thirdExample' :
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contains more than <y>one node</y>."
								+ " Apply the beside steps.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$('#algorithmStepsDiv').addClass('z-index1000000');
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
				}
			break;
			case 'algorithmStepsDiv' :
				$('#algorithmStepsDiv').removeClass('opacity00');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'step1':
						$('#s1').addClass('opacity00');
						appendSteps(1);
						var text = "<ul><li>Check whether the list is <brown>Empty</brown> (if <bwbg>first</bwbg> is equal to <g>NULL</g>).</li>"
							+ "<li>If it is <g>Empty</g> then, display <brown>'List is Empty, Deletion is not possible'</brown>"
							+ " and terminate the function.<span id='btn'></span></li></ul>" 
						$('#stepDes1').html(text);
						zoomInEffect('#s1', function() {
							stepCount++;
							introNextSteps('#mainDiv', 'first');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case 'step2' :
						$('#s2').addClass('opacity00');
						appendSteps(2);
							var text = "<ul><li>If it is <brown>Not Empty</brown> then, define one temporary node <g>temp</g>"
								+ " and initialize with the <bwbg>first</bwbg> node value.</li>"
								+ "<li> Assign <g>next</g> field of the <bwbg>first</bwbg> to the <bwbg>first</bwbg> then print "
								+ "<g>data</g> field of <g>temp</g> node and delete <g>temp</g> and terminate the function."
								+ "<span id='btn'></span></li></ul>";
						
						$('#stepDes2').html(text);
						zoomInEffect('#s2', function() {
							stepCount++;
							introNextSteps('#mainDiv', 'second');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
				}
			break;
			case "mainDiv" :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "first" :
						deleteAtBegin();
						$('#parentPre').removeClass('opacity00');
						$('#algorithmStepsDiv ul:first').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:first','#ifFirstEqNull', function() {
								$('#ifFirstEqNull').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'firstNotEqNull');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "second" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							$('#ifFirstEqNull').after('<span id="elseBlock" class="opacity00"><span id="elseCon"> else {</span>\n'
									+ '\t\t\tnode temp = first;\n'
									+ '\t\t\tfirst = first -> next;'
									+ '\n\t\t\t<span id="print">printf("The deleted element from "\n\t\t\t\t" SLL : "\\n" << temp -> data);'
									+ '\n\t\t\tfree temp;'
									+ '\n\t\t\treturn first;</span>'
									+ '\n\t}</span>');
							if (lang == 'cpp') {
								$('#print').html('cout << "The deleted element from ";\n\t\t\tcout << " SLL : \\n" << temp -> data;'
												+ '\n\t\t\tdelete temp;');
							}
							transferEffect('#algorithmStepsDiv ul:last','#elseBlock', function() {
								$('#elseBlock').effect( "highlight",{color: 'yellow'}, 600);
								$('#parentPre').scrollTo('#elseBlock', 500);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'thirdExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					
				}
			break;
			case "restartBtn":
				$('#mainDiv').addClass('z-index1000000');
				$("#restartBtn").removeClass('opacity00');
				$('#restartBtn').click(function() {
					location.reload();
				});
			break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	text = " Here, we will learn <y>Delete At Begin Node in Singly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
} 


function deleteAtBegin() {
	$('#parentPre').append('<span id="funName" class="opacity00"><span id="functionName">node <g>deleteAtBegin()</g></span> { '
			+ '\n\t<span id="ifFirstEqNull" class="opacity00"> if (<brown>first == NULL</brown>) {'
			+'\n\t\t<span id="printf1">printf("List is Empty,"\n\t\t\t" Deletion is not possible\\n");</span>\n\t}</span>'
			+'\n}</span>');
	if (lang == 'cpp') {
		$('#functionName').html('void Sll::<g>deleteAtBegin()</g>');
		$('#printf1').html('cout << "List is Empty. So, ";\n\t\tcout << " deletion is not possible\\n";');
	}
	$('#funName').removeClass('opacity00');
}


function firstEqNull() {
	$('.user-btn, #btn').remove();;
	zoomInEffect('#firstNode', function() {
		text = '<li>Here the <y>first</y> value (i.e <y>'+ $('#firstVal').text() +'</y>) is equal to <y>NULL</y>'
				+ ' means there is no node in a <y>list</y> so '
				+ 'deletion is not possible here.</li><li> Print <y>List is Empty, Deletion is not possible</y></li>';
		typing('#appendDiv', text, function() {
			introNextSteps('#algorithmStepsDiv', 'step1');
			$('.introjs-nextbutton').show();
		});
	});
}

function firstNotEqNullAnimation() {
	$('.user-btn, #btn').remove();
	createDynamicNodes(1);
	svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
			 "#svgId", "line1", "arrow", true);
	setTimeout(function() {
		$('#data1').text(10);
		$('#next1').text('NULL');
		$('#data1, #next1').removeClass('opacity00');
		zoomInEffect('#node1', function() {
			$('#firstVal').text($('.data-address:first').text());
			$('#line1').css('opacity', '1');
			text = '<li>Here <y>first</y> value (i.e <y>'+ $('#firstVal').text() +'</y>) is not equal to <y>NULL</y> means '
					+ '<y>list</y> contains some nodes, so there is possible to delete the node.</li>'
			typing('#appendDiv', text, function() {
				$('#appendDiv').after('<div id="appendDiv1"></div>')
				appendNextBtn('.introjs-tooltipbuttons', 'createTempNode');
			});
		});
	},500);
}

function createTempNode() {
	$('.user-btn, #btn').remove();
	$('#s2').removeClass('blinkingGreen');
	$('.user-btn').remove();
	text = '<li>Let us take one temporary node (i.e <y>temp</y>) and store the <y>first</y> value (i.e <y> '
			+ $('#firstVal').text() +'</y>) to the <y>temp</y>.</li>';
	typing('#appendDiv1', text, function() {
		$('#appendDiv1').after('<div id="appendDiv2"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createTempNodeAnimation');
	});
}

function createTempNodeAnimation() {
	$('.user-btn').remove();
	zoomInEffect('#tempNode', function() {
		$('#tempVal').removeClass('opacity00');
		fromEffectWithTweenMax("#tempVal", "#firstVal", $("#firstVal").text(), function() {
			svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv1",
					 "#svgId", "line11", "arrow", false, function() {
				appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstText');
			});
		});
	});
}

function firstNextToFirstText() {
	$('.introjs-tooltip').css('height','250');
	$('.user-btn').remove();
	text = '<li>Now store the <y>next</y> field of the <y>first</y> value (i.e <y>'+ $('#next1').text() +'</y>) to the <y>first</y> node.</li>'
	typing('#appendDiv2', text, function() {
		$('#appendDiv2').after('<div id="appendDiv3"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function firstNextToFirstAnimation() {
	$('.user-btn, #btn').remove();
	$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
				 "#svgId", "line21", "arrow", false, function() {
			$('#line21').remove();
			$('#next1').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				fadeInBounceEffectWithTimelineMax("#next1", "#firstVal", function() {
					$('#line1').remove();
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
					$('.introjs-tooltip').scrollTo('.user-btn', 500);
				});
			});
		});
	});
}

function printAndDeleteNodeText() {
	$('.user-btn').remove();
	if (lang == 'cpp') {
		text = '<li>Now print the <y>temp -> data</y> (i.e <y>'+ $('#data1').text() +'</y>) and '
		+ ' <y>delete</y> the <y>temp</y> node i.e (<y>'+ $('#tempVal').text() +'</y>).</li>'	
	} else {
		text = '<li>Now print the <y>temp -> data</y> (i.e <y>'+ $('#data1').text() +'</y>) and '
		+ ' <y>delete</y> the <y>temp</y> node i.e (<y>'+ $('#tempVal').text() +'</y>) and also return the <y>temp</y> node.</li>'
	}
	typing('#appendDiv3', text, function() {
		$('#dataDiv1, #nextDiv1').addClass('blinkingRed');
		$('#appendDiv3').after('<div id="appendDiv4"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeAnimation');
		$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons', 500);
	});
}

function printAndDeleteNodeAnimation() {
	$('.user-btn, #btn').remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$('#dataDiv1, #nextDiv1').removeClass('blinkingRed');
		$("#node1, #line11").remove();
		$('#tempNode').addClass('opacity00');
		if ($('#dynamicNodes .nodes').length == 0) {
			introNextSteps('#algorithmStepsDiv', 'step2');
			$('.introjs-nextbutton').show();
			$('.introjs-tooltip').scrollTo('.introjs-nextbutton', 500);
		} else {
			$('#s4').css('background-color', '');
			$('line').remove();
			changeIdsAtBegin(function() {
				for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
					if (i == 1) {
						svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
								"#svgId", "line"+ i +"", "arrow", false);
					} else {
						svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#dataDiv"+ (i) +"",
								"#svgId", "line"+ i +"", "arrow", false);
					}
				}
				introNextSteps('#restartBtn');
				$('.introjs-nextbutton').show();
				$('.introjs-tooltip').scrollTo('.introjs-nextbutton', 500);
			});
		}
	}});
}

function multipleNodes() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	for (var i = 1; i < 4; i++ ) {
		createDynamicNodes(i);
	}
	$('#dynamicNodes .next-span:last').text('NULL');
	$('#dynamicNodes .next-span:first').text($('.data-address').eq(1).text());
	$('#dynamicNodes .next-span').eq(1).text($('.data-address').eq(2).text());
	regenerateArrows(true);
	setTimeout(function() {
		$('#firstVal').text($('.data-address:first').text());
		for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++ ) {
			$('#data' + i).text(i+'0').removeClass('opacity00');
			$('#node'+ i).removeClass('opacity00');
			$('#line' + i).css('opacity', '1');
		}
		appendNextBtn('.introjs-tooltipbuttons', 'applyBesidestep');
	},500);
}

function applyBesidestep() {
	$('.user-btn, #btn').remove();
	text = '<li>The <y>step1</y> (<y>'+ $('#firstVal').text() +' == NULL</y>) is evaluates to <y>false</y> '
			+'because the <y>first</y> node contains <y>'+ $('#firstVal').text() +'</y> not a <y>NULL</y>.</li>'
	typing('#appendDiv', text, function() {
		$('#s1').addClass('blinkingRed');
		$('#appendDiv').after('<div id="appendDiv11"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'applySecondstep');
	});
}

function applySecondstep() {
	$('#s1').removeClass('blinkingRed');
	$('.user-btn, #btn').remove();
	text = '<li>The <y>step2</y> (<y>'+ $('#firstVal').text() +' != NULL</y>) is evaluates to <y>true</y>.</li>';
	typing('#appendDiv11', text, function() {
		$('#s2').addClass('blinkingGreen');
		$('#appendDiv11').after('<div id="appendDiv1"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createTempNode');
	});
}

function regenerateArrows(flag) {
	for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
		if (i == 1) {
			svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
					"#svgId", "line"+ i +"", "arrow", flag);
		} else {
			svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#dataDiv"+ (i) +"",
					"#svgId", "line"+ i +"", "arrow", flag);
		}
	}
}

function changeIds1(elementParent, idAttr) {
	$(elementParent).each(function(index) {
      	$(this).attr("id", idAttr + (index + 1));
    	
	});
}

function changeIdsAtBegin(callBackFunction) {
	$('#dynamicNodes .nodes').each(function(index) {
	      $(this).attr("id", "node"+ (index + 1));
	}); 
	changeIds1($("#dynamicNodes .data-nodes"), "nodeData");
	changeIds1($("#dynamicNodes .data-div"), "dataDiv");
	changeIds1($("#dynamicNodes .next-div"), "nextDiv");
	changeIds1($("#dynamicNodes .data-address"), "dataAddress");
	changeIds1($("#dynamicNodes .data-span"), "data");
	changeIds1($("#dynamicNodes .next-span"), "next");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function appendSteps(i) {
	$('#algorithmStepsDiv').append('<div class="col-xs-12 margin-top-5 padding5" id="s'+ i 
			+ '"><div class="col-xs-12 padding00 position" id="stepDes'+ i +'"></div></div>');
}

function moveStep() {
	$('.user-btn, #btn').remove();
	intro.nextStep();
}

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : "hide",
			animateStep: animatedStep
	}
	intro.insertOption(intro._currentStep + 1, options);
	intro._options.steps.push({"element" : stepName});
}

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		intro.nextStep();
	}, 1000);
}

function appendNextBtn(id, value) {
	$(id).append('<a class="introjs-button user-btn" onclick="' + value + '()">Next &#8594;</a>');
}

function getURLParameter(sParam) { //choose the language like c or cpp...etc 
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function getRandomInt(min, max) { //generate dynamic memory location (address).
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(nodeCount) { //Create data & next field div.
	var randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="opacity00 col-xs-2 nodes" id="node' + nodeCount + '" style="top: 0px; width: auto;">'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 ct-blue-color ct-fonts padding00 text-center">'
						+ ' data</div><div class="ct-green-color ct-fonts text-center">next</div></div>'
						+ ' <div id="nodedata' + nodeCount + '" class="data-nodes"><div id="dataDiv' + nodeCount + '"'
						+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + nodeCount +'"'
						+ ' class="data-span position opacity00 ct-blue-color ct-fonts" style="top: 0px; left: 0px;"></span></div>'
						+ ' <div id="nextDiv' + nodeCount +'" class="position div-border right-radius col-xs-6 next-div">'
						+ ' <span id="next' + nodeCount +'" class="position next-span ct-green-color ct-fonts position"></span></div></div>'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 padding00 text-center">'
						+ ' <span id="dataAddress' + nodeCount + '" class="position data-address padding00 ct-brown-color ct-fonts">'+ randomAddress 
						+ '</span></div></div></div>';
	$('#dynamicNodes').append(x);
}

function declareNodesWhenFunctionCall(id1, id2, nodeName, nodeNameText, callBackFunction) {	//Temp node div declaration 
	$('#declareNodes').append('<div class="col-xs-2 col-xs-offset-1 extraNode opacity00 padding00" id=' + id1 + '>'
					+ '<div class="col-xs-12 box padding00 position"><span id=' + id2 + ' class="extrNodeVal ct-brown-color ct-fonts position"></span>'
					+ '</div><div class="text-center col-xs-12 padding00 ct-green-color" id=' + nodeName + '>' + nodeNameText + '</div></div> ');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass('opacity00');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass('animated zoomIn').one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	setTimeout(function(){
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
			$(selector).html(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
				intro.refresh();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	},200);
}

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		$(id1).text("" + val + "");
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function fadeInBounceEffectWithTimelineMax(selector1, selector2,callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("body").append("<span id='dummy' class='ct-brown-color' style='position: relative;z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text());
		TweenLite.from(selector2, 2.8, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :1.3});
		TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left:-150 , delay : 2.4, opacity:0 , onComplete: function() {
			$(selector2).removeAttr("style")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
			$(selector2).text($(selector1).text());
			$("#animatinDiv").removeAttr("style");			
			$('#dummy').remove();
		}});
	});
}


function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2, flag) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	if (flag) {
		line.setAttribute("opacity", 0);
	}
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, flag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1, flag);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, flag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1, flag);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}