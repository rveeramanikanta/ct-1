var lang, intro, nodeCount = stepCount = 1;

function deleteAtEndNodeAnimation() { //call the method to start the intro and create some nodes
	lang = getURLParameter("lang");
	declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInDelMtd", "lastNode");
	declareNodesWhenFunctionCall("prevNode", "prevNodeVal", "prevNodeInDelMtd", "prevNode");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
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
						text = "<ul><li>Let us assume <y>single linked list</y> can contains only <y>one node</y>."
								+ " meaninng <y>first</y> contains the <y>address</y> of the "
								+ " <y>first</y> node.</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNullAnimation');
						});
					break;
					case 'thirdExample' :
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contains <y>more than one node</y>."
								+ " Apply the beside conditions.</li><br/><div id='appendDiv'></div></ul>";
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
					case 'condition1':
						$('#s1').addClass('opacity00');
						appendSteps(1);
						text = "<span id='l1'>If <g>first</g> is <brown>equal</brown> to <g>NULL</g>.</span><ol><li>"
								+ " <span id='l2'>Print <brown>List is empty, deletion is not possible</brown>.</span>"
								+ "<span id='btn'></span></li></ol>";
						$('#stepDes1').html(text);
						zoomInEffect('#s1', function() {
							stepCount++;
							introNextSteps('#animationDiv', 'firstNotEqNull');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case 'condition2' :
						$('#s2').addClass('opacity00');
						appendSteps(2);
						if (lang == 'c') {
							text = "If <g>first</g> is <brown>not equal</brown> to <g>NULL</g>.<ol><li>"
								+ " <span id='l3'>Create a <g>lastNode</g> node and store the <g>first</g> node value.</span></li>"
								+ "<div id='condition21'><span id='l4'><blue>Condition 2.1:&emsp;</blue>If <g>lastNode</g> is "
								+ "<brown>equal</brown> to <g>NULL</g>.</span><ol>"
								+ "<li><span id='l4'>Store <g>first -> next</g> value to <g>first</g> node.</span></li>"
								+ "<li><span id='l5'>Print <brown>The deleted element (lastNode -> data) from SLL</brown></span></li>"
								+ "<li><span id='l6'>Now delete the <g>lastNode</g> node.</span></li>"
								+ "<li><span id='l7'>Return the <g>first</g> node.</span><span id='btn'></span></li></ol></ol></div>";
							
						} else if (lang == "cpp") {
							text = "If <g>first</g> is <brown>not equal</brown> to <g>NULL</g>.<ol><li>"
								+ " <span id='l3'>Create a <g>lastNode</g> node and store the <g>first</g> node value.</span></li>"
								+ "<div id='condition21'><span id='l4'><blue>Condition 2.1:&emsp;</blue>If <g>lastNode</g> is "
								+ "<brown>equal</brown> to <g>NULL</g>.</span><ol>"
								+ "<li><span id='l4'>Store <g>first -> next</g> value to <g>first</g> node.</span></li>"
								+ "<li><span id='l5'>Print <brown>The deleted element (lastNode -> data) from SLL</brown></span></li>"
								+ "<li><span id='l6'>Now delete the <g>lastNode</g> node.</span><span id='btn'></span></li></ol></ol></div>";
						}
						$('#stepDes2').html(text);
						intro.refresh();
						zoomInEffect('#s2', function() {
							stepCount++;
							introNextSteps('#animationDiv', 'thirdExample');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case 'condition3' :
						if (lang == 'c') {
							$('#condition21').after('<div id="condition22"><span id="l8"><blue>Condition 2.2:&emsp;</blue>'
									+ 'If <g>lastNode</g> is <brown>not equal</brown> to <g>NULL</g>.</span>'
									+ '<ol><li><span id="l9">Repeat the Loop until <g>lastNode -> next</g> to <g>NULL</g></span>.</li>'
									+ '<li><span id="l10">Store the <g>lastNode</g> value to <g>prevNode</g></span>.</li>'
									+ '<li><span id="l11">Store <g>lastNode -> next</g> to <g>lastNode</g></span>.</li>'
									+ '<li><span id="l12">Assign <g>NULL</g> to <g>prevNode</g>, if <g>lastNode -> next</g>'
									+ ' is equal to <g>NULL</g></span>.</li>'
									+ '<li><span id="l13">Print <brown>The deleted element (lastNode -> data) from SLL</brown></span></li>'
									+ '<li><span id="l14">Now delete the <g>lastNode</g> node.</span></li>'
									+ '<li><span id="l15">Return the <g>first</g> node.</span><span id="btn"></span></li></ol></div>');
						} else if (lang == 'cpp') {
							$('#condition21').after('<div id="condition22"><span id="l7"><blue>Condition 2.2:&emsp;</blue>'
									+ 'If <g>lastNode</g> is <brown>not equal</brown> to <g>NULL</g>.</span>'
									+ '<ol><li><span id="l8">Repeat the Loop until <g>lastNode -> next</g> to <g>NULL</g></span>.</li>'
									+ '<li><span id="l9">Store the <g>lastNode</g> value to <g>prevNode</g></span>.</li>'
									+ '<li><span id="l10">Store <g>lastNode -> next</g> to <g>lastNode</g></span>.</li>'
									+ '<li><span id="l11">Assign <g>NULL</g> to <g>prevNode</g>, if <g>lastNode -> next</g>'
									+ ' is equal to <g>NULL</g></span>.</li>'
									+ '<li><span id="l12">Print <brown>The deleted element (lastNode -> data) from SLL</brown></span></li>'
									+ '<li><span id="l13">Now delete the <g>lastNode</g> node.</span></li>'
									+ '<span id="btn"></span></li></ol></div>');
						}
						intro.refresh();
						$('#condition22').addClass('opacity00');
						zoomInEffect('#condition22', function() {
							stepCount++;
							deleteAtBegin();
							introNextSteps('#parentPre', 'convertToCode');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
				}
			break;
			case 'parentPre' :
				$('.introjs-tooltip').css('height','');
				$('.introjs-tooltip').removeClass('hide');
				if (lang == 'c') {
					text = 'Now convert the above <y>algorithm</y> to <y>C</y> program.'
				} else if (lang == 'cpp') {
					text = 'Now convert the above <y>algorithm</y> to <y>CPP</y> program.'
				}
				typing(".introjs-tooltiptext", text, function() {
					appendNextBtn('.introjs-tooltipbuttons', 'convertToCode');
				});
			break;
			case "restartBtn":
				$('.introjs-tooltip').css('min-width','');
				$('#parentPre').addClass('z-index1000000');
				$("#restartBtn").removeClass('opacity00');
				/*$('.introjs-tooltip').removeClass('hide');
				$('.introjs-tooltip').addClass('introjs-tooltip-min-width');
				text = 'Click to restart.';
				typing('.introjs-tooltiptext', text, function() {*/
					$('#restartBtn').click(function() {
						location.reload();
					//});
				});
			break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	text = " Here, we will learn <y>Delete At End Node in Singly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
} 

function convertToCode() {
	$('.user-btn').remove();
	transferEffect('#algorithmStepsDiv','#deleteAtEndLogic', function() {
		zoomInEffect('#parentPre', function() {
			introNextSteps("#restartBtn", "restartBtn");
			$('.introjs-nextbutton').show();
		});
	});
}

function firstEqNull() {
	$('.user-btn, #btn').remove();;
	zoomInEffect('#firstNode', function() {
		text = '<li>Here <y>first</y> value (i.e <y>'+ $('#firstVal').text() +'</y>) is equal to <y>NULL</y>'
				+ ' means there in no node in a <y>list</y> so '
				+ 'deletion is not possible here.</li><li> Print <y>List is empty, deletion is not possible</y></li>';
		typing('#appendDiv', text, function() {
			introNextSteps('#algorithmStepsDiv', 'condition1');
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
			text = '<li>Here the <y>condition1</y> is evaluates to <y>false</y> because the <y>first</y> node contain the value (i.e <y>'
					+ $('#firstVal').text() +'</y>) is not equal to <y>NULL</y> means '
					+ '<y>list</y> contains some nodes, so there is possible to delete the node.</li>'
			typing('#appendDiv', text, function() {
				$('#appendDiv').after('<div id="appendDiv1"></div>')
				appendNextBtn('.introjs-tooltipbuttons', 'createLastNode');
			});
		});
	},500);
}

function createLastNode() {
	$('.user-btn, #btn').remove();
	$('#s2').removeClass('blinkingGreen');
	text = '<li>Let us take one tempary node (i.e <y>LastNode</y>) and store the <y>first</y> value (i.e <y> '
			+ $('#firstVal').text() +'</y>) to <y>LastNode</y>.</li>';
	typing('#appendDiv1', text, function() {
		$('#appendDiv1').after('<div id="appendDiv22"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createLastNodeAnimation');
	});
}

function createLastNodeAnimation() {
	$('.user-btn').remove();
	$('#lastNodeVal').text('');
	zoomInEffect('#lastNode', function() {
		$('#lastNodeVal').removeClass('opacity00');
		fromEffectWithTweenMax("#lastNodeVal", "#firstVal", $("#firstVal").text(), function() {
			svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv1",
					 "#svgId", "line11", "arrow", false, function() {
				if ($('#dynamicNodes .nodes').length != 1) {
					appendNextBtn('.introjs-tooltipbuttons', 'lastNodeNextNotNullText');
				} else {
					appendNextBtn('.introjs-tooltipbuttons', 'lastNodeNextNullText');
				}
				$('.introjs-tooltip').scrollTo('.user-btn', 500);
			});
		});
	});
}

function lastNodeNextNullText() {
	$('.user-btn').remove();
	$('.introjs-tooltip').css('height','250');
	text = '<li>Here the <y>lastNode -> next</y> is <y>NULL</y> means there is only <y>one node</y> in the <y>list</y>.</li>'
	typing('#appendDiv22', text, function() {
		$('#appendDiv22').after('<div id="appendDiv2"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstText');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function lastNodeNextNotNullText() {
	$('.user-btn').remove();
	$('#condition21').addClass('blinkingRed');
	$('.introjs-tooltip').css('height','250');
	text = '<li>Here the <y>condition 2.1</y> (<y>'+ $('#next1').text() +' == NULL</y>) is evaluates to <y>false</y> '
			+ 'because the <y>lastNode -> next</y> contains <y>'+ $('#next1').text() +'</y> not a <y>NULL</y> meaning '
			+ 'the list contains  <y>more than one node</y>.</li>'
	typing('#appendDiv22', text, function() {
		$('#appendDiv22').after('<div id="appendDiv2"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createPrevNodeText');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
} 

function createPrevNodeText() {
	$('.user-btn').remove();
	$('#condition21').removeClass('blinkingRed');
	text = '<li>Let us take another tempary node (i.e <y>prevNode</y>) and store the <y>lastNode</y> value (i.e <y> '
		+ $('#lastNodeVal').text() +'</y>) to <y>prevNode</y>.</li>';
	typing('#appendDiv2', text, function() {
		$('#appendDiv2').after('<div id="appendDiv3"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createPrevNodeTextAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);

	});
}

function createPrevNodeTextAnimation() {
	$('.user-btn').remove();
	zoomInEffect('#prevNode', function() {
		$('#prevNodeVal').text("").removeClass('opacity00');
		$('#lastNodeVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
			fromEffectWithTweenMax("#prevNodeVal", "#lastNodeVal", $("#lastNodeVal").text(), function() {
				svgAnimatingLineTopToBottom("#animationDiv", "#prevNode", "#dataDiv1",
						 "#svgId", "line111", "arrow", false, function() {
					appendNextBtn('.introjs-tooltipbuttons', 'repeatLoopCondition');
					$('.introjs-tooltip').scrollTo('.user-btn', 500);
				});
			});
		});
	});
}

function repeatLoopCondition() {
	$('.user-btn').remove();
	text = '<li>Repeat the <y>loop</y> until the <y>lastNode -> next</y> is <y>equal</y> to <y>NULL</y>. if <y>lastNode -> next</y>'
			+ ' is <y>not equal</y> to <y>NULL</y> assign a <y>lastNode</y> value to <y>prevNode</y> and <y>lastNode -> next</y>'
			+ ' to <y>lastNode</y>. </li>'
	typing('#appendDiv3', text, function() {
		$('#appendDiv3').after('<div id="appendDiv4"></div>');
		appendNextBtn('.introjs-tooltipbuttons', 'repeatLoopConditionAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function repeatLoopConditionAnimation() {
	$('.user-btn').remove();
	if ($('#next' + nodeCount).text().trim() != "NULL") {
		$('#lastNodeVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
			fadeInBounceEffectWithTimelineMax("#lastNodeVal", "#prevNodeVal", function() {
				$('#line111').remove();
				svgAnimatingLineTopToBottom("#animationDiv", "#prevNode", "#dataDiv" + nodeCount,
						 "#svgId", "line111", "arrow", false, function() {
					$('#lastNodeVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
						svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + nodeCount,
								 "#svgId", "line22", "arrow", false, function() {
							$('#line22').remove();
							$('#lastNodeVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
									fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#lastNodeVal",  function() {
											$('#line11').remove();
											svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + (nodeCount + 1),
											"#svgId", "line11", "arrow", false, function() {
												nodeCount++;
												repeatLoopConditionAnimation()
											});
									});
							});
						});
					});
				});
			});
		});
	} else {
		text = '<li>Here the <y>lastNode -> next</y> (<y>'+ $('#next' + nodeCount).text() +'</y>) is equal to <y>NULL</y>'
		+' so assign <y>NULL</y> to <y>prevNode -> next</y>.</li>'
		typing('#appendDiv4', text, function() {
			$('#appendDiv4').after('<div id="appendDiv31"></div>');
			appendNextBtn('.introjs-tooltipbuttons', 'assignNullToPrev');
			$('.introjs-tooltip').scrollTo('.user-btn', 500);
		});
	}
}

function assignNullToPrev() {
	$('.user-btn').remove();
	$('#prevNodeVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineTopToBottom("#animationDiv", "#prevNode", "#dataDiv" + (nodeCount - 1),
			 "#svgId", "line22", "arrow", false, function() {
			$('#line22').remove();
			$('#next' + (nodeCount - 1)).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				$('#next' + (nodeCount - 1)).addClass('opacity00').text("NULL");
				zoomInEffect('#next' + (nodeCount - 1), function() {
					$('#line' + nodeCount).remove();
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
					$('.introjs-tooltip').scrollTo('.user-btn', 500);
				});
			});
		});
	});
}

function firstNextToFirstText() {
	$('.user-btn').remove();
	text = '<li>Now store <y>first -> next</y> value (i.e <y>'+ $('#next1').text() +'</y>) to <y>first</y> node.</li>'
	typing('#appendDiv2', text, function() {
		$('#appendDiv2').after('<div id="appendDiv31"></div>')
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
		text = '<li>Now print the <y>lastNode -> data</y> (i.e <y>'+ $('#data' + nodeCount).text() +'</y>) and '
		+ ' <y>delete</y> the <y>lastNode</y> node i.e (<y>'+ $('#lastNodeVal').text() +'</y>).</li>'	
	} else if (lang == 'c') {
		text = '<li>Now print the <y>lastNode -> data</y> (i.e <y>'+ $('#data' + nodeCount).text() +'</y>) and '
		+ ' <y>delete</y> the <y>lastNode</y> node i.e (<y>'+ $('#lastNodeVal').text() +'</y>) and also return the <y>lastNode</y> node.</li>'
	}
	typing('#appendDiv31', text, function() {
		$('#appendDiv31').after('<div id="appendDiv4"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function printAndDeleteNodeAnimation() {
	$('.user-btn, #btn').remove();
	TweenMax.to("#node" + nodeCount, 0.5, { top : -80, onComplete: function() {
		$("#node"+ nodeCount +", #line11").remove();
		$('#lastNode').addClass('opacity00');
		introNextSteps('#algorithmStepsDiv', 'condition' + stepCount);
		$('.introjs-nextbutton').show();
		$('.introjs-tooltip').scrollTo('.introjs-nextbutton', 500);
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
		appendNextBtn('.introjs-tooltipbuttons', 'applyBesideCondition');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	},500);
}

function applyBesideCondition() {
	$('.user-btn, #btn').remove();
	text = '<li>The <y>condition1</y> (<y>'+ $('#firstVal').text() +' == NULL</y>) is evaluates to <y>false</y> '
			+'because <y>first</y> node contains <y>'+ $('#firstVal').text() +'</y> not a <y>NULL</y>.</li>'
	typing('#appendDiv', text, function() {
		$('#s1').addClass('blinkingRed');
		$('#appendDiv').after('<div id="appendDiv11"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'applySecondCondition');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function applySecondCondition() {
	$('#s1').removeClass('blinkingRed');
	$('.user-btn, #btn').remove();
	text = '<li>The <y>condition2</y> (<y>'+ $('#firstVal').text() +' != NULL</y>) is evaluates to <y>true</y>.</li>';
	typing('#appendDiv11', text, function() {
		$('#s2').addClass('blinkingGreen');
		$('#appendDiv11').after('<div id="appendDiv1"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createLastNode');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function deleteAtBegin() {
	$("#parentPre").append('<span id="deleteAtEndParent"><span id="deleteAtEndLogic"><span id="methodName"></span>\n'
			+ '\t<span id="assignFirstToLastNode">node lastNode = first, prev</span>;\n'
			+ '\t<span id="delIfCon">if (first == NULL) {</span>\n'
			+ '\t\t<span id="printfdelAtEnd1" style="display: inline-block">cout << "Single linked list is empty."\n'
			+ '\t\t\t" So deletion is not possible\\n";</span>\n\t} else {\n'
			+ '\t\t<span id="checkLastNodeNull">if (lastNode -> next == NULL) {</span>\n'
			+ '\t\t\t<span id="firstEQlTofirstNext">first = first -> next;</span>\n\t\t} else {\n'
			+ '\t\t\t<span id="checkLastNodeNotEqlToNull">while (lastNode -> next != NULL) {</span>\n'
			+ '\t\t\t\t<span id="lastEqlPrev">prev = lastNode;</span>\n'
			+ '\t\t\t\t<span id="lastNextEqlLast">lastNode = lastNode -> next;</span>\n\t\t\t}\n'
			+ '\t\t\t<span id="preNextToNull">prev -> next = NULL;</span>\n\t\t}\n'
			+ '\t\t<span id="printfdelAtEnd2">cout << "The deleted element from SLL : "\n'
			+ '\t\t\t\t<< lastNode -> data << "\\n";</span>\n'
			+ '\t\t<span id="freeLastNode">delete lastNode;</span>\n'
			+ '\t\t<span id="returnLstNde"></span>\n\t}\n'
			+ '}</span></span>');
	if (lang == 'c') {
		$('#methodName').html('<span class="ct-green-color ct-css">node</span>'
				+ ' <span class="ct-green-color ct-css">deleteAtEnd()</span> {');
		$('#returnLstNde').text('return(lastNode);');
		$('#freeLastNode').text("free first;");
		$('#printfdelAtEnd1').html('printf("Single linked list is empty. So deletion is not possible\\n");');
		$('#printfdelAtEnd2').html('printf("The deleted element from SLL : %d\\n",lastNode -> data);');
	} else if (lang == 'cpp') {
		$('#methodName').html('<span class="ct-green-color ct-css">void Sll::</span>'
				+ ' <span class="ct-green-color ct-css">deleteAtEnd()</span> {');	
	}
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
	$('#algorithmStepsDiv').append('<div class="col-xs-12 margin-top-5" id="s'+ i 
			+ '"><div class="col-xs-3 padding00" id="step'+ i +'"><blue>Condition '+ i 
			+ ' : </blue></div><div class="col-xs-9 padding00 position" id="stepDes'+ i +'"></div></div><br/>');
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
	$(selector1).effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
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


function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("body").append("<span id='dummy' class='ct-brown-color ct-fonts' style='position: relative;z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		$(selector2).text($(selector1).text());
		timelineMax.from(selector2, 2, {ease: Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
      $(selector2).removeAttr("style")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 1, top: parseInt($('#dummy').css("top")) - 40, onComplete: function() {
      		$(selector2).text($(selector1).text());
			$("#animatinDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.5");
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
		$('.introjs-tooltip').scrollTo(typingId, 500);
		$('.introjs-tooltip').show();
	});
}