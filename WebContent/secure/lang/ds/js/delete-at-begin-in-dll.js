var lang, intro, stepCount = 1;
var randomAddress;

function deleteAtBeginNodeInDLLAnimation() { //call the method to start the intro and create some nodes
	lang = getURLParameter("lang");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	introFunction();
	tooltipDisplay("#tempNode div:first", "bottom", "This is a tempary node to store the address of node.");
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
		$('#animationDiv').hasClass('introjs-showElement') ? $('.zindex').css('z-index', '1000000') : $('.zindex').css('z-index', '0');
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
			case 'animationDiv' :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'firstNodeNull': 
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>linked is empty</y>. i.e., <bwBg>first</bwBg> is "
								+ " <y>NULL</y>.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							tooltipDisplay("#firstDiv", "bottom", "first stores the beginning of the linked list.");
							appendNextBtn('.introjs-tooltipbuttons', 'firstEqNull');
						});
					break;
					case 'firstNotEqNull' :
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>linked list</y> contain only <y>one node</y>."
								+ " i.e., <bwBg>first</bwBg> contains the beginning of the <y>linked list</y>.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNullAnimation');
						});
					break;
					case 'thirdExample' :
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>linked list</y> contain more than <y>one node</y>."
								+ " Apply the beside steps.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$('#mainDiv').addClass('z-index1000000');
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
				}
			break;
			case 'algorithmStepsDiv' :
				$('#mainDiv').removeClass('z-index1000000');
				$('#algorithmStepsDiv').removeClass('opacity00');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'step1':
						$('#s1').addClass('opacity00');
						appendSteps(1);
						var text = "Let us learn about <bl>delete a node</bl> at the <bl>begining</bl> of the <brown>Doubly Linked List (DLL)</brown>."
							+ " <ul><li>Check whether the list is <brown>Empty</brown> (if <bwbg>first</bwbg> is equal to <g>NULL</g>).</li>"
							+ "<li>If it is <g>NULL</g> then, print \"<brown>List is Empty. So deletion is not possible.</brown>\""
							+ "<span id='btn'></span></li></ul>" 
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
							var text = "<ul><li>If it is <brown>Not NULL</brown> then, declare a tempary node as <g>temp</g>"
								+ " and initialize with the <bwbg>first</bwbg> value.</li>"
								+ "	<li>Now check the <g>next</g> field of <g>temp</g> is <brown>equal</brown> to <g>NULL</g> or not.</li> " 
								+ "<li>If it is <brown>NULL</brown> then assign <g>NULL</g> to the <bwbg>first</bwbg> node then print "
								+ "\"<bl>data</bl>\" field of <g>temp</g> and delete <g>temp</g> node. <span id='btn'></span></li></ul>";
						$('#stepDes2').html(text);
						zoomInEffect('#s2', function() {
							$('#algorithmStepsDiv').scrollTo('#btn', 500);
							stepCount++;
							introNextSteps('#mainDiv', 'second');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case "step3":
						$('#s3').addClass('opacity00');
						appendSteps(3);
						var text = "<ul><li>If it is <brown>not NULL</brown> then assign <g>next</g> field of <bwBg>first</bwBg> to " 
									+ " <bwbg>first</bwbg> node and also assign <g>prev</g> field of <bwbg>first</bwbg> to <g>NULL</g> " 
									+ " then print \"<bl>data</bl>\" field of <g>temp</g> and delete <g>temp</g> node."
									+ "<span id='btn'></span></li></ul>";
						$('#stepDes3').html(text);
						$('#algorithmStepsDiv').scrollTo('span:last', 500);
						zoomInEffect('#s3', function() {
							stepCount++;
							introNextSteps('#mainDiv', 'threeStatement');
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
									+ '\t\t\tif (<span id="tempNextNull"><g>temp -> next == NULL</g></span>) {\n'
									+ '\t\t\t\tfirst = NULL;\n'
									+ '\t\t\t} <span id="elseStatement"></span>\n'
									+ '\t\t\t<span id="print">printf("<brown>The deleted element from </brown>"\n\t\t\t\t'
									+ ' "<brown> DLL : %d</brown>\\n", <brown>temp -> data</brown>);</span>'
									+ '\n\t\t\treturn temp;'
									+ '\n\t}</span>');
							if (lang == 'cpp') {
								$('#print').html('cout << "<brown>The deleted element from </brown>"\n\t\t\t\t'
										+ ' "<brown> DLL : </brown>" <brown> << temp -> data</brown> << ".\\n";')
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
					case "threeStatement" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							$('#elseStatement').append('<span id="elseBlock1" class="opacity00"><span id="elseCon"> else {</span>\n'
									+ '\t\t\t\tfirst = first -> next;\n'
									+ '\t\t\t\tfirst -> prev = NULL;\n\t\t\t}');
							transferEffect('#algorithmStepsDiv ul:last','#elseStatement', function() {
								$("#elseBlock1").removeClass("opacity00");
								$('#elseStatement').effect( "highlight",{color: 'yellow'}, 600);
								$('#parentPre').scrollTo('#elseBlock', 500);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#restartBtn', '', 'right');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
				}
			break;
			case "restartBtn":
				$('#mainDiv').addClass('z-index1000000');
				$("#restartBtn").removeClass('opacity00');
				$('.introjs-tooltip').css({'height' : '', 'min-width': '125px'}).removeClass('hide');
				$('.introjs-tooltiptext').append('Click to restart.');
				$('#restartBtn').click(function() {
					location.reload();
				});
			break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	text = " Here, we will learn about <y>deleteAtBegin() in Doubly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
} 


function deleteAtBegin() {
	$('#parentPre').append('<span id="funName"><span id="funMthd">node <g>deleteAtBegin()</g> {</span> '
			+ '\n\t<span id="ifFirstEqNull" class="opacity00"> if (<span id="firstNullCon"><g>first == NULL</g></span>) {'
			+'\n\t\tprintf("<brown>List is Empty. So</brown>"\n\t\t\t" <brown>deletion is not possible.</brown>\\n");\n\t}</span>'
			+'\n}</span>');
	if (lang == 'cpp') {
		$('#funMthd').html('node Dll::<g>deleteAtBegin()</g> {');
	}
}


function firstEqNull() {
	$('.user-btn, #btn').remove();;
	zoomInEffect('#firstNode', function() {
		text = '<li>Here <bwBg>first</bwBg> value (i.e., <y>'+ $('#firstVal').text() +'</y>) is equal to <y>NULL</y>'
				+ ' means there in no nodes in <y>list</y>. So '
				+ 'deletion is not possible here.</li><li> Print "<y>List is Empty. So deletion is not possible</y>"</li>';
		typing('#appendDiv', text, function() {
			introNextSteps('#algorithmStepsDiv', 'step1');
			$('.introjs-nextbutton').show();
		});
	});
}

function firstNotEqNullAnimation() {
	$('.user-btn, #btn').remove();
	createDynamicNodes(1);
	setTimeout(function() {
		$('#data1').text(10);
		$('#next1, #prev1').text('NULL');
		$('#data1, #next1, #prev1').removeClass('opacity00');
		zoomInEffect('#node1', function() {
			$('#firstVal').text($('.data-address:first').text());
			svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#prevDiv1", "#svgId", "line1", "arrow", true);
			$('#line1').css('opacity', '1');
			text = '<li>Here <bwBg>first</bwBg> value (i.e., <y>'+ $('#firstVal').text() +'</y>) is not equal to <y>NULL</y> means '
					+ '<y>list</y> contain some nodes. So there is a possible to <y>delete</y> the node.</li>'
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
	text = '<li>Let us declare a tempary node as <y>temp</y> and initialize with the <bwBg>first</bwBg> value (i.e., <y> '
			+ $('#firstVal').text() +'</y>).</li>';
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
			svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#prevDiv1",
					 "#svgId", "line11", "arrow", true, function() {
				appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstText');
			});
		});
	});
}

function firstNextToFirstText() {
	$('.introjs-tooltip').css('height','250');
	$('.user-btn').remove();
	if ($(".nodes").length == 1) {
		var text = "<li>Now check the <y>next</y> field of <y>temp</y> is <y>equal</y> to <y>NULL</y> or not.</li> "
					+ "<li>Here, the <y>next</y> field of <y>temp</y> is <y>NULL</y>. So assign <y>NULL</y> to <bwBg>first</bwBg> node.</li>";
	} else {
		var text = "<li>Now check the <y>next</y> field of <y>temp</y> is <y>equal</y> to <y>NULL</y> or not.</li> "
					+ "<li>Here, the <y>next</y> field of <y>temp</y> is not equal to <y>NULL</y>. So assign the "
					+ "<y>next</y> field of <bwBg>first</bwBg> to <bwBg>first</bwBg> node and also assign <y>prev</y> field of <bwBg>first</bwBg> "
					+ "to <y>NULL</y>.</li>";	
	}
	typing('#appendDiv2', text, function() {
		$('#appendDiv2').after('<div id="appendDiv3"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function firstNextToFirstAnimation() {
	$('.user-btn, #btn').remove();
	$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		if ($(".nodes").length == 1) {
			$('#firstVal').text("NULL").addClass("opacity00");
			zoomInEffect("#firstVal", function() {
				$('#line1').remove();
				appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
				$('.introjs-tooltip').scrollTo('.user-btn', 500);
			});
		} else {
			svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#prevDiv1",
					 "#svgId", "line21", "arrow", true, function() {
				$('#line21').remove();
				$('#next1').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
					fadeInBounceEffectWithTimelineMax("#next1", "#firstVal", function() {
						$('#line1').remove();
						$('#prev2').parent().effect( "highlight",{color: 'yellow'}, 800, function() {
							$('#prev2').text("NULL").addClass("opacity00");
							zoomInEffect("#prev2", function() {
								$("#line12, #line2").remove();
								appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
								$('.introjs-tooltip').scrollTo('.user-btn', 500);
							});
						});
					});
				});
			});
		}
	});
}

function printAndDeleteNodeText() {
	$('.user-btn').remove();
	if (lang == 'cpp') {
		text = '<li>Now print the "<y>temp -> data</y>" (i.e., <y>'+ $('#data1').text() +'</y>) and '
		+ ' <y>delete</y> the <y>temp</y> node (i.e., <y>'+ $('#tempVal').text() +'</y>).</li>'	
	} else {
		text = '<li>Now print the "<y>temp -> data</y>" (i.e., <y>'+ $('#data1').text() +'</y>) and '
		+ ' <y>delete</y> the <y>temp</y> node (i.e., <y>'+ $('#tempVal').text() +'</y>) and also return the <y>temp</y> node.</li>'
	}
	typing('#appendDiv3', text, function() {
		$('#prevDiv1, #dataDiv1, #nextDiv1').addClass('blinkingRed');
		$('#appendDiv3').after('<div id="appendDiv4"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeAnimation');
		$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons', 500);
	});
}

function printAndDeleteNodeAnimation() {
	$('.user-btn, #btn').remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$('#prevDiv1, #dataDiv1, #nextDiv1').removeClass('blinkingRed');
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
						svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#prevDiv1",
								"#svgId", "line"+ i +"", "arrow", true);
					} else {
						svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#prevDiv"+ (i) +"",
								"#svgId", "line"+ i +"", "arrow", false);
						
						svgAnimatingLineLeftToRight("#animationDiv", "#prevDiv"+ (i) +"", "#nextDiv"+ (i - 1) +"",
								"#svgId", "line1"+ i +"", "arrow", false);
					}
				}
				introNextSteps('#algorithmStepsDiv', 'step3');
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
		$("#next" + i).text(randomAddress).removeClass("opacity00");
	}
	$('#dynamicNodes .next-span:last').text('NULL');
	$('#dynamicNodes .next-span:first').text($('.data-address').eq(1).text());
	$('#dynamicNodes .next-span').eq(1).text($('.data-address').eq(2).text());
	setTimeout(function() {
		$('#firstVal').text($('.data-address:first').text());
		for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++ ) {
			$("#prev" + (i + 1)).text($("#dataAddress" + (i)).text()).removeClass("opacity00");			
			$('#data' + i).text(i+'0').removeClass('opacity00');
			$('#node'+ i).removeClass('opacity00');
			$('#line' + i).css('opacity', '1');
		}
		$("#prev1").text("NULL").removeClass("opacity00");
		$("#next3").text("NULL").removeClass("opacity00");
		regenerateArrows(true);
		appendNextBtn('.introjs-tooltipbuttons', 'applyBesidestep');
	},500);
}

function applyBesidestep() {
	$('.user-btn, #btn').remove();
	text = '<li>Check if <bwBg>first</bwBg> is <y>equal</y> to <y>NULL</y> or not. Here the <bwBg>first</bwBg> (i.e., <y>'
			+ $('#firstVal').text() +'</y>) is not <y>NULL</y>. So condition evaluates to <y>false</y>.</li>';
	typing('#appendDiv', text, function() {
		$("#firstNullCon").addClass('blinkingRed');
		$('#appendDiv').after('<div id="appendDiv11"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'applySecondstep');
	});
}

function applySecondstep() {
	$("#firstNullCon").removeClass('blinkingRed');
	$('.user-btn, #btn').remove();
	var text = "<li>Let us declare a temporary node as <y>temp</y> and initialize with <bwBg>first</bwBg> value"
				+ " (i.e., <y>"+ $('#firstVal').text()  +"</y>).</li>"
	typing('#appendDiv11', text, function() {
		$('#appendDiv11').after('<div id="appendDiv2"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createTempNodeAnimation');
	});
}

function regenerateArrows(flag) {
	for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
		if (i == 1) {
			svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#prevDiv1",
					"#svgId", "line"+ i +"", "arrow", flag);
		} else {
			svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#prevDiv"+ (i) +"",
					"#svgId", "line"+ i +"", "arrow", false);
			svgAnimatingLineLeftToRight("#animationDiv", "#prevDiv"+ (i) +"", "#nextDiv"+ (i - 1) +"",
					"#svgId", "line1"+ i +"", "arrow", false);
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
	changeIds1($("#dynamicNodes .prev-div"), "prevDiv");
	changeIds1($("#dynamicNodes .data-div"), "dataDiv");
	changeIds1($("#dynamicNodes .next-div"), "nextDiv");
	changeIds1($("#dynamicNodes .data-address"), "dataAddress");
	changeIds1($("#dynamicNodes .prev-span"), "prev");
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

function createDynamicNodes(val) {
	randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + val + '" style="top: 0px; width: auto;"><div class="col-xs-12 padding00">'
					+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">prev</div>'
					+ '<div class="col-xs-4 ct-blue-color ct-fonts padding00 text-center">data</div>'
					+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">next</div></div>'
					+ '<div id="nodedata' + val + '" class="data-nodes"><div id="prevDiv' + val + '" class="div-border left-radius col-xs-4 prev-div">'
					+ ' <span id="prev' + val + '" class="position prev-span ct-green-color ct-fonts inline-style opacity00"></span></div>'
					+ '<div id="dataDiv' + val + '" class="div-border no-radius col-xs-4 data-div">'
					+ ' <span id="data' + val + '" class="data-span ct-blue-color ct-fonts opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ '<div id="nextDiv' + val + '" class="position div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + val + '" class="position next-span ct-green-color ct-fonts inline-style opacity00"></span></div></div>'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 col-xs-offset-4 padding00 text-center"><span id="dataAddress' + val + '"'
					+ ' class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress + '</span></div></div></div>';
	$('#dynamicNodes').append(x);
	tooltipDisplay("#prevDiv" + val, "top", "This is an pointer type to hold the address of the previous node");
	tooltipDisplay("#dataDiv" + val, "top", "This is an int data type to hold the user data");
	tooltipDisplay("#nextDiv" + val, "top", "This is an pointer type to hold the address of the next node");
}

function tooltipDisplay(selector, position, text) {
	$(selector).addClass('zindex').attr({"data-placement": position, "data-original-title": text}).tooltip();
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
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500)
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("body").append("<span id='dummy' class='ct-brown-color ct-fonts' style='position: relative;z-index: 9999999;'>" 
		+ $(selector2).text() + "</span>");
	$('#dummy').offset({"top": l2.top, "left": l2.left});
	$(selector2).text($(selector1).text());
	TweenLite.from(selector2, 2.8, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :1.3});
	TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left:-150 , delay : 2.4, opacity:0 , onComplete: function() {
		$(selector2).removeAttr("style")
		$(selector2).text($(selector1).text());
		$("#animatinDiv").removeAttr("style");			
		$('#dummy').remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
	var marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('d', 'M0,0 L5,2.5 L0,5 Z');
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('id', svgLineId);
	line.setAttribute('class', 'svg-line lines');
	line.setAttribute('x1', x1);
	line.setAttribute('y1', y1);
	line.setAttribute('x2', x2);
	line.setAttribute('y2', y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, flag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var x2 = $(selector2).offset().left - parentOffset.left;
	if(flag) {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	} else {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 1.5;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 1.5;
	}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, lineFlag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	if (lineFlag) {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	} else {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 4;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 4;
	}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}


function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, lineFlag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var y2 = $(selector2).offset().top - parentOffset.top;
		if (lineFlag) {
			var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 5;
			var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 5;
		} else {
			var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
			var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
		}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, lineFlag,  callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === 'function') {
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