var lang, intro, nodeCount = stepCount = 1;

function deleteAtEndNodeAnimation() { //call the method to start the intro and create some nodes
	lang = getURLParameter("lang");
	declareNodesWhenFunctionCall("last", "lastVal", "lastInDelMtd", "last");
	declareNodesWhenFunctionCall("prev", "prevVal", "prevInDelMtd", "prev");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	introFunction();
	var toolTopText = "This is a tempary node to store the address of node.";
	tooltipDisplay("#last", "bottom", toolTopText);
	tooltipDisplay("#prev", "bottom", toolTopText);
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
		$('.zindex').removeClass('zindex');
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
			case 'animationDiv' :
				$('.tooltopClass').addClass('zindex');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'firstNodeNull': 
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>doubly linked is empty</y>. i.e <y>first</y> is "
								+ " <y>NULL</y>.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							var toolTopText = "first Nodes which stores the starting address of the list";
							tooltipDisplay("#firstDiv", "bottom", toolTopText);
							appendNextBtn('.introjs-tooltipbuttons', 'firstEqNull');
						});
					break;
					case 'firstNotEqNull' :
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>doubly linked list</y> can contains only <y>one node</y>."
								+ " meaninng <y>first</y> contains the <y>address</y> of the "
								+ " <y>first</y> node.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNullAnimation');
						});
					break;
					case 'thirdExample' :
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>doubly linked list</y> can contains <y>more than one node</y>."
								+ "</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$('#algorithmStepsDiv').addClass('z-index1000000');
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
				}
			break;
			case 'algorithmStepsDiv' :
				$('#algorithmStepsDiv').removeClass('opacity00 z-index1000000');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'Step1':
						$('#s1').addClass('opacity00');
						appendSteps(1);
						var text = "<ul><li>Check whether list is <g>Empty</g> (if <bwbg>first</bwbg> is equal to <g>NULL</g>).</li>"
									+ "<li>If it is <g>Empty</g> then, display <brown>'List is Empty, Deletion is not possible'</brown>"
									+ " and terminate the function.<span id='btn'></span></li></ul>" 
						$('#stepDes1').html(text);
						zoomInEffect('#s1', function() {
							stepCount++;
							introNextSteps('#mainDiv', 'first');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case 'Step2' :
						$('#s2').addClass('opacity00');
						appendSteps(2);
						var text = "<ul><li>If it is <g>Not Empty</g> then, define one tempary node <g>last</g>"
									+ " and initialize with <bwbg>first</bwbg> value.</li>"
									+ "<ul><li>Check whether the <g>next</g> field of <g>last</g> node is <g>NULL</g>.</li>"
									+ "<li> If it is <brown>TRUE</brown>. Then, assign <g>NULL</g> to the <bwbg>first</bwbg> then print "
									+ "<g>data</g> field of <g>last</g> node and delete <g>last</g> and terminate the function."
									+ "<span id='btn'></span></li></ul></ul>";
						$('#stepDes2').html(text);
						intro.refresh();
						zoomInEffect('#s2', function() {
							$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
							stepCount++;
							introNextSteps('#mainDiv', 'second');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case 'Step3' :
						$('#s3').addClass('opacity00');
						appendSteps(3);
						var text = '<ul><ul><li>If it is <brown>FALSE</brown>, then define another tempary node <g>prev</g>.</li>'
									+ '<li>Repeat the loop until the <g>next</g> field of <g>last</g> is <brown>equal</brown> to <g>NULL</g>.</li> '
									+ '<li>if the <g>next</g> field of <g>last</g> is <brown>not equal</brown> to <g>NULL</g> assign a <g>last</g> to'
									+ ' <g>prev</g> and also travel the <g>next</g> field of <g>last</g> to <g>last</g></li>'
									+ '<li>if <g>next</g> field of <g>last</g> is <brown>equal</brown> to <g>NULL</g> assign <g>NULL</g> to'
									+ ' the  <g>next</g> field of <g>prev</g>'
									+ ' then print the <g>data</g> field of <g>last</g> and '
									+ 'delete the <g>last</g> node and terminate the function.<span id="btn"></span></li></ul></ul>';
						intro.refresh();
						$('#stepDes3').html(text).addClass('opacity00');
						$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
						setTimeout(function() {
							$('#stepDes3').removeClass('opacity00');
							zoomInEffect('#s3', function() {
								stepCount++;
								introNextSteps('#mainDiv', 'three');
								appendNextBtn('#btn', 'moveStep');
							});
						},800);
					break;
				}
			break;
			case "mainDiv" :
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "first" :
						deleteAtEnd();
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
									+ '\t\t\tnode last = first;\n'
									+ '\t\t\tif (<brown>last -> next == NULL</brown>) {'
									+ '\n\t\t\t\tfirst = NULL;'
									+ '\n\t\t\t}<span id="secondElseCon"></span>'
									+ '\n\t\t\t<span id="print">printf("The deleted element from "\n\t\t\t\t" SLL : "\\n" << last -> data);</span>'
									+ '\n\t\t\tfree(last);'
									+ '\n\t\t\treturn first;'
									+ '\n\t}</span>');
							transferEffect('#algorithmStepsDiv ul:last','#elseBlock', function() {
								$('#elseBlock').effect( "highlight",{color: 'yellow'}, 600);
								$('#parentPre').scrollTo('#elseBlock', 500);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'thirdExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "three" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							$('#secondElseCon').append('<span id="elseBlock1" class="opacity00"> else {\n'
									+ '\t\t\t\twhile (<brown>last -> next != NULL</brown>) {\n'
									+ '\t\t\t\t\tprev = last;\n'
									+ '\t\t\t\t\tlast = last -> next;\n'
									+ '\t\t\t\t}\n'
									+ '\t\t\t\tprev -> next = NULL;\n\t\t\t}</span>');
							transferEffect('#algorithmStepsDiv ul:last','#elseBlock1', function() {
								$('#parentPre').scrollTo('#print', 500);
								$('#elseBlock1').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#restartBtn', 'restartBtn');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
				}
			break;
			case "restartBtn":
				$('.introjs-tooltip').css('min-width','');
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
	text = " Here, we will learn <y>Delete At End Node in Doubly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
} 

function deleteAtEnd() {
	$('#parentPre').append('<span id="funName">node <g>deleteAtEnd()</g> { '
				+ '\n\t<span id="ifFirstEqNull" class="opacity00"> if (<brown>first == NULL</brown>) {'
				+'\n\t\tprintf("List is Empty,"\n\t\t\t" Deletion is not possible\\n");\n\t}</span>'
				+'\n}</span>');
}




function firstEqNull() {
	$('.user-btn, #btn').remove();;
	zoomInEffect('#firstNode', function() {
		text = '<li>Here <y>first</y> value (i.e <y>'+ $('#firstVal').text() +'</y>) is equal to <y>NULL</y>'
				+ ' means there in no node in the <y>list</y> so '
				+ 'deletion is not possible here.</li><li> Print <y>List is Empty, Deletion is not possible</y> and terminate the function</li>';
		typing('#appendDiv', text, function() {
			introNextSteps('#algorithmStepsDiv', 'Step1');
			$('.introjs-nextbutton').show();
		});
	});
}

function firstNotEqNullAnimation() {
	$('.user-btn, #btn').remove();
	createDynamicNodes(1);
	svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#prevDiv1",
			 "#svgId", "line1", "arrow", true);
	setTimeout(function() {
		$('#data1').text(10);
		$('#next1, #prev1').text('NULL');
		$('#data1, #next1, #prev1').removeClass('opacity00');
		zoomInEffect('#node1', function() {
			$('#firstVal').text($('.data-address:first').text());
			$('#line1').css('opacity', '1');
			text = '<li>Here, the <y>first</y> node contain the value (i.e <y>'
					+ $('#firstVal').text() +'</y>) is not equal to <y>NULL</y> means '
					+ '<y>list</y> contains some nodes, so there is possible to delete the node.</li>'
			typing('#appendDiv', text, function() {
				$('#appendDiv').after('<div id="appendDiv1"></div>')
				appendNextBtn('.introjs-tooltipbuttons', 'createlast');
			});
		});
	},500);
}

function createlast() {
	$('.user-btn, #btn').remove();
	$('#s2').removeClass('blinkingGreen');
	text = '<li>Let us take one tempary node (<y>last</y>) and store the <y>first</y> value (i.e <y> '
			+ $('#firstVal').text() +'</y>) to <y>last</y>.</li>';
	typing('#appendDiv1', text, function() {
		$('#appendDiv1').after('<div id="appendDiv22"></div>')
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
		appendNextBtn('.introjs-tooltipbuttons', 'createlastAnimation');
	});
}

function createlastAnimation() {
	$('.user-btn').remove();
	$('#lastVal').text('');
	zoomInEffect('#last', function() {
		$('#lastVal').removeClass('opacity00');
		fromEffectWithTweenMax("#lastVal", "#firstVal", $("#firstVal").text(), function() {
			svgAnimatingLineTopToBottom("#animationDiv", "#last", "#dataDiv1",
					 "#svgId", "line11", "arrow", false, function() {
				if ($('#dynamicNodes .nodes').length != 1) {
					appendNextBtn('.introjs-tooltipbuttons', 'lastNextNotNullText');
				} else {
					appendNextBtn('.introjs-tooltipbuttons', 'lastNextNullText');
				}
				$('.introjs-tooltip').scrollTo('.user-btn', 500);
			});
		});
	});
}

function lastNextNullText() {
	$('.user-btn').remove();
	$('.introjs-tooltip').css('height','250');
	text = '<li>Check if <y>last -> next</y> is equal to <y>NULL</y>. it returns <y>true</y>'
			+' so the list contain only <y>one node</y>.</li>'
	typing('#appendDiv22', text, function() {
		$('#appendDiv22').after('<div id="appendDiv2"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstText');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function lastNextNotNullText() {
	$('.user-btn').remove();
	$('#Step21').addClass('blinkingRed');
	$('.introjs-tooltip').css('height','250');
	var text = '<li>Here, the <y>last -> next</y> is <y>not equal</y> to <y>NULL</y> '
				+ 'so, list contains more than one node.</li>'
	typing('#appendDiv22', text, function() {
		$('#nextDiv1').removeClass('blinkingGreen');
		$('#appendDiv22').after('<div id="appendDiv2"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createprevText');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
} 

function createprevText() {
	$('.user-btn').remove();
	$('#nextDiv1').removeClass('blinkingRed');
	text = '<li>Let us take another tempary node (i.e <y>prev</y>) and store the <y>last</y> value (i.e <y> '
		+ $('#lastVal').text() +'</y>) to <y>prev</y>.</li>';
	typing('#appendDiv2', text, function() {
		$('#appendDiv2').after('<div id="appendDiv3"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createprevTextAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);

	});
}

function createprevTextAnimation() {
	$('.user-btn').remove();
	zoomInEffect('#prev', function() {
		$('#prevVal').text("").removeClass('opacity00');
		$('#lastVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
			fromEffectWithTweenMax("#prevVal", "#lastVal", $("#lastVal").text(), function() {
				svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#dataDiv1",
						 "#svgId", "line111", "arrow", false, function() {
					appendNextBtn('.introjs-tooltipbuttons', 'repeatLoopStep');
					$('.introjs-tooltip').scrollTo('.user-btn', 500);
				});
			});
		});
	});
}

function repeatLoopStep() {
	$('.user-btn').remove();
	text = '<li>Repeat the <y>loop</y> until the <y>last -> next</y> is <y>equal</y> to <y>NULL</y>.</li> <li>if <y>last -> next</y>'
			+ ' is <y>not equal</y> to <y>NULL</y> assign <y>last</y> value to <y>prev</y> and <y>last -> next</y>'
			+ ' to <y>last</y>. </li>'
	typing('#appendDiv3', text, function() {
		$('#appendDiv3').after('<div id="appendDiv4"></div>');
		appendNextBtn('.introjs-tooltipbuttons', 'repeatLoopStepAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function repeatLoopStepAnimation() {
	$('.user-btn').remove();
	if ($('#next' + nodeCount).text().trim() != "NULL") {
		$('#lastVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
			fadeInBounceEffectWithTimelineMax("#lastVal", "#prevVal", "right", function() {
				$('#line111').remove();
				svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#dataDiv" + nodeCount,
						 "#svgId", "line111", "arrow", false, function() {
					$('#lastVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
						svgAnimatingLineTopToBottom("#animationDiv", "#last", "#dataDiv" + nodeCount,
								 "#svgId", "line22", "arrow", false, function() {
							$('#line22').remove();
							$('#lastVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
									fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#lastVal", "bottom", function() {
											$('#line11').remove();
											svgAnimatingLineTopToBottom("#animationDiv", "#last", "#dataDiv" + (nodeCount + 1),
											"#svgId", "line11", "arrow", false, function() {
												nodeCount++;
												repeatLoopStepAnimation()
											});
									});
							});
						});
					});
				});
			});
		});
	} else {
		text = '<li>Here the <y>last -> next</y> (<y>'+ $('#next' + nodeCount).text() +'</y>) is equal to <y>NULL</y>'
		+' so assign <y>NULL</y> to <y>prev -> next</y>.</li>'
		typing('#appendDiv4', text, function() {
			$('.next-div:last').addClass('blinkingRed');
			$('#appendDiv4').after('<div id="appendDiv31"></div>');
			appendNextBtn('.introjs-tooltipbuttons', 'assignNullToPrev');
			$('.introjs-tooltip').scrollTo('.user-btn', 500);
		});
	}
}

function assignNullToPrev() {
	$('.user-btn').remove();
	$('.next-div:last').removeClass('blinkingRed');
	$('#prevVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#dataDiv" + (nodeCount - 1),
			 "#svgId", "line22", "arrow", false, function() {
			$('#line22').remove();
			$('#next' + (nodeCount - 1)).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				$('#next' + (nodeCount - 1)).addClass('opacity00').text("NULL");
				zoomInEffect('#next' + (nodeCount - 1), function() {
					$('#line' + nodeCount + ', #line1' + nodeCount).remove();
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
					$('.introjs-tooltip').scrollTo('.user-btn', 500);
				});
			});
		});
	});
}

function firstNextToFirstText() {
	$('.user-btn').remove();
	var text = '<li>Now assign <y>NULL</y> to the <y>first</y> node.</li>'
	typing('#appendDiv2', text, function() {
		$('#appendDiv2').after('<div id="appendDiv31"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function firstNextToFirstAnimation() {
	$('.user-btn, #btn').remove();
	$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		$('#firstVal').text("NULL").addClass("opacity00");
		zoomInEffect("#firstVal", function() {
			$('#line1').remove();
			appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
			$('.introjs-tooltip').scrollTo('.user-btn', 500);
		});
		/*svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
				 "#svgId", "line21", "arrow", false, function() {
			$('#line21').remove();
			$('#next1').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				fadeInBounceEffectWithTimelineMax("#next1", "#firstVal", "left", function() {
					$('#line1').remove();
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
					$('.introjs-tooltip').scrollTo('.user-btn', 500);
				});
			});
		});*/
	});
}

function printAndDeleteNodeText() {
	$('.user-btn').remove();
	if (lang != 'cpp') {
		var text = '<li>Now print the <y>last -> data</y> (i.e <y>'+ $('#data' + nodeCount).text() +'</y>) and '
		+ ' <y>delete</y> the <y>last</y> node i.e (<y>'+ $('#lastVal').text() +'</y>).</li>'	
	} else {
		var text = '<li>Now print the <y>last -> data</y> (i.e <y>'+ $('#data' + nodeCount).text() +'</y>) and '
		+ ' <y>delete</y> the <y>last</y> node i.e (<y>'+ $('#lastVal').text() +'</y>) and also return the <y>last</y> node.</li>'
	}
	typing('#appendDiv31', text, function() {
		$('#appendDiv31').after('<div id="appendDiv4"></div>')
		$('#dataDiv'+nodeCount +', #nextDiv'+ nodeCount + ', #prevDiv' + nodeCount).addClass('blinkingRed');
		appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function printAndDeleteNodeAnimation() {
	$('.user-btn, #btn').remove();
	TweenMax.to("#node" + nodeCount, 0.5, { top : -80, onComplete: function() {
		$('#dataDiv'+nodeCount +', #nextDiv'+ nodeCount + ', #prevDiv' + nodeCount).removeClass('blinkingRed');
		$("#node"+ nodeCount +", #line11").remove();
		$('#last').addClass('opacity00');
		introNextSteps('#algorithmStepsDiv', 'Step' + stepCount);
		$('.introjs-nextbutton').show();
		$('.introjs-tooltip').scrollTo('.introjs-nextbutton', 500);
	}});
}

function multipleNodes() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	for (var i = 1; i < 3; i++ ) {
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
		$("#prev1, #next2").text("NULL").removeClass("opacity00");
		//$("#next2").text("NULL").removeClass("opacity00");
		regenerateArrows(true);
		appendNextBtn('.introjs-tooltipbuttons', 'applyBesideStep');
	},500);
}

function applyBesideStep() {
	$('.user-btn, #btn').remove();
	var text = '<li>Here, the given <y>list</y> is <y>not empty</y> because <y>first</y> contains the <y>address</y> of the first node (i.e <y>'
				+ $('#firstVal').text() +'</y>).</li>' 
	typing('#appendDiv', text, function() {
		$('#appendDiv').after('<div id="appendDiv1"></div>');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
		appendNextBtn('.introjs-tooltipbuttons', 'createlast');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function regenerateArrows(flag) {
	for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
		if (i == 1) {
			svgAnimatingLineBottomToTop("#animationDiv", "#firstDiv", "#prevDiv1",
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

function createDynamicNodes(val) {
	randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + val + '" style="top: 0px; width: auto;"><div class="col-xs-12 padding00">'
					+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">prev</div>'
					+ '<div class="col-xs-4 ct-blue-color ct-fonts padding00 text-center">data</div>'
					+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">next</div></div>'
					+ '<div id="nodedata' + val + '" class="data-nodes"><div id="prevDiv' + val + '" class="div-border left-radius col-xs-4 prev-div zindex">'
					+ ' <span id="prev' + val + '" class="position prev-span ct-green-color ct-fonts inline-style opacity00"></span></div>'
					+ '<div id="dataDiv' + val + '" class="div-border no-radius col-xs-4 data-div zindex">'
					+ ' <span id="data' + val + '" class="data-span ct-blue-color ct-fonts opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ '<div id="nextDiv' + val + '" class="position div-border right-radius col-xs-6 next-div zindex">'
					+ ' <span id="next' + val + '" class="position next-span ct-green-color ct-fonts inline-style opacity00"></span></div></div>'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 col-xs-offset-4 padding00 text-center"><span id="dataAddress' + val + '"'
					+ ' class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress + '</span></div></div></div>';
	$('#dynamicNodes').append(x);
	var toolTopText = "This is an pointer type to hold the address of the previous node";
	tooltipDisplay(".prev-div", "top", toolTopText);
	var toolTopText = "This is an int data type to hold the user data";
	tooltipDisplay(".data-div", "top", toolTopText);
	var toolTopText = "This is an pointer type to hold the address of the next node";
	tooltipDisplay(".next-div", "top", toolTopText);
	var toolTopText = "it indicates the address of the node";
	tooltipDisplay(".data-address", "bottom", toolTopText);
}

/*
function createDynamicNodes(nodeCount) { //Create data & next field div.
	var randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="opacity00 col-xs-2 nodes" id="node' + nodeCount + '" style="top: 0px; width: auto;">'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 ct-blue-color ct-fonts padding00 text-center">'
						+ ' data</div><div class="ct-green-color ct-fonts text-center">next</div></div>'
						+ ' <div id="nodedata' + nodeCount + '" class="data-nodes"><div id="dataDiv' + nodeCount + '"'
						+ ' class="div-border left-radius col-xs-6 data-div zindex"><span id="data' + nodeCount +'"'
						+ ' class="data-span position opacity00 ct-blue-color ct-fonts" style="top: 0px; left: 0px;"></span></div>'
						+ ' <div id="nextDiv' + nodeCount +'" class="position div-border zindex right-radius col-xs-6 next-div">'
						+ ' <span id="next' + nodeCount +'" class="position next-span ct-green-color ct-fonts position"></span></div></div>'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 padding00 text-center">'
						+ ' <span id="dataAddress' + nodeCount + '" class="position data-address zindex padding00 ct-brown-color ct-fonts">'+ randomAddress 
						+ '</span></div></div></div>';
	$('#dynamicNodes').append(x);
}*/

function declareNodesWhenFunctionCall(id1, id2, nodeName, nodeNameText, callBackFunction) {	//Temp node div declaration 
	$('#declareNodes').append('<div class="col-xs-2 col-xs-offset-1 extraNode opacity00 padding00 tooltopClass zindex" id=' + id1 + '>'
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

function fadeInBounceEffectWithTimelineMax(selector1, selector2, pos, callBackFunction) {
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
		if (pos == "left") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left:-150 , delay : 2.4, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else if (pos == "right") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left: 350 , delay : 2.4, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: 50 , delay : 2.4, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		}
	});
}

function bounceCallBack(selector1, selector2, callBackFunction) {
	$(selector2).removeAttr("style")
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
	$(selector2).text($(selector1).text());
	$("#animatinDiv").removeAttr("style");			
	$('#dummy').remove();
}

function tooltipDisplay(selector, position, text) {
	$(selector).attr({"data-placement": ""+ position +"", "title": ""+ text +""}).tooltip();
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

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
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
		$('.introjs-tooltip').scrollTo(typingId, 500);
		$('.introjs-tooltip').show();
	});
}