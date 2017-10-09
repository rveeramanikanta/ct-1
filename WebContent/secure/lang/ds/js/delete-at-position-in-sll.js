var lang, intro, nodeCount = stepCount = delNum = i = 1;

function deleteAtPositionAnimation() { //call the method to start the intro and create some nodes
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	
	declareNodesWhenFunctionCall("last", "lastVal", "lastInDelMtd", "last");
	declareNodesWhenFunctionCall("prev", "prevVal", "prevInDelMtd", "prev");
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	introFunction();
	var toolTopText = "This is a temporary node to store the address of node.";
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
				nodeCount = stepCount = delNum = i = 1;
				$('.tooltopClass').addClass('zindex');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'firstNodeNull': 
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked is empty</y>. i.e <y>first</y> is "
								+ " <y>NULL</y>.</li><li>For example, user wants to delete <y>1</y> node in the <y>list</y>.</li>"
								+ " <div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							var toolTopText = "first Nodes which stores the starting address of the list";
							tooltipDisplay("#firstDiv", "bottom", toolTopText);
							appendNextBtn('.introjs-tooltipbuttons', 'firstEqNull');
						});
					break;
					case 'firstNotEqNull' :
						$('#ifFirstEqNull').removeClass('y')
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contain <y>more than one node</y>."
							+ "</li><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							delNum = 1;
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
					case 'thirdExample' :
						$('#elseBlock').removeClass('y')
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contains <y>more than one node</y>."
								+ "</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							delNum = 0;
							$('#firstNode').addClass('opacity00')
							$('#dynamicNodes').empty();
							$('line').remove();
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
					case 'fourthExample' :
						$('#elseBlock11').removeClass('y');
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contains <y>more than one node</y>."
								+ "</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							delNum = 2;
							$('#firstNode').addClass('opacity00')
							$('#dynamicNodes').empty();
							$('line').remove();
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
					case "fifthExample" :
						$('#elseBlock1').removeClass('y');
						$('#prev, #iVal1').addClass('opacity00');
						$('#prevVal').text("");
						$('#val').text("1");
						$('#elseBlock11').removeClass('y');
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>single linked list</y> can contains <y>more than one node</y>."
								+ "</li><br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							delNum = 5;
							$('#firstNode').addClass('opacity00')
							$('#dynamicNodes').empty();
							$('line').remove();
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
						var text = "<ul><li>Check whether the list is <g>Empty</g> (if <bwbg>first</bwbg> is equal to <g>NULL</g>).</li>"
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
						var text = "<ul><li>If it is <g>Not Empty</g> then, define one temporary node <g>last</g>"
									+ " and initialize with <bwbg>first</bwbg> value.</li>"
									+ "<ul><li>Check whether the user given <g>position</g> is <g>equal</g> to <g>1</g>.</li>"
									+ "<li> If it is <brown>TRUE</brown>. Then, assign <g>next</g> field of <bwbg>first</bwbg> "
									+ " to the <bwbg>first</bwbg> then print "
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
						var text = '<ul><ul><li>If it is <brown>FALSE</brown>, then check  if <g>position</g> is <g>less than</g> or <g>equal</g>'
									+' to <g>0</g>.</li> <li>If its <brown>TRUE</brown>, then print <brown>No such position in SLL So deletion is not possible.</brown>'
									+ '<span id="btn"></span></li></ul></ul>';
						intro.refresh();
						$('#stepDes3').html(text).addClass('opacity00');
						$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
						intro.refresh();
						setTimeout(function() {
							$('#stepDes3').removeClass('opacity00');
							zoomInEffect('#s3', function() {
								stepCount++;
								introNextSteps('#mainDiv', 'three');
								appendNextBtn('#btn', 'moveStep');
							});
						},800);
					break;
					case 'Step4' :
						$('#s4').addClass('opacity00');
						appendSteps(4);
						var text = '<ul><ul><li>If it is <brown>FALSE</brown>, then define Two temporary nodes <g>last</g> and <g>prev</g> and '
									+ 'initialized with <bwbg>first</bwbg>.</li>'
									+ '<li>Initialize an integer variable <g>i</g> with the value <g>1</g>.</li>'
									+ '<li>Repeat the loop until the <g>i</g> is <brown>less than</brown> <g>position</g>.</li> '
									
									+ '<li>if it <brown>TRUE</brown>, assign a <g>last</g> to'
									+ ' <g>prev</g> and also travel the <g>next</g> field of <g>last</g> to <g>last</g></li>'
									+ '<li>if it <brown>FALSE</brown>, assign <g>next</g> field of <g>last</g> to'
									+ ' the  <g>next</g> field of <g>prev</g>'
									+ ' then print the <g>data</g> field of <g>last</g> and '
									+ 'delete the <g>last</g> node and terminate the function.<span id="btn"></span></li></ul></ul>';
						intro.refresh();
						$('#stepDes4').html(text).addClass('opacity00');
						$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
						setTimeout(function() {
							$('#stepDes4').removeClass('opacity00');
							zoomInEffect('#s4', function() {
								stepCount++;
								introNextSteps('#mainDiv', 'four');
								appendNextBtn('#btn', 'moveStep');
							});
						},800);
					break;
					case 'Step5' :
						$('#s5').addClass('opacity00');
						appendSteps(5);
						var text = '<ul><ul><li>Repeat the above steps until the given <g>position</g> is found, if not found check '
									+' if <g>lastNode</g> is <g>equal</g> to <g>NULL</g> or not .'
									+ ' If it is <g>NULL</g> print <brown>No such position in SLL So deletion is not possible.</brown>'
									+ '<span id="btn"></span></li></ul></ul>';
						intro.refresh();
						$('#stepDes5').html(text).addClass('opacity00');
						$('#algorithmStepsDiv').scrollTo('#btn', 500);
						setTimeout(function() {
							$('#stepDes5').removeClass('opacity00');
							zoomInEffect('#s5', function() {
								stepCount++;
								introNextSteps('#mainDiv', 'five');
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
						deleteAtPosition();
						$('#parentPre').removeClass('opacity00');
						$('#algorithmStepsDiv ul:first').effect( "highlight",{color: 'yellow'}, 600, function() {
							transferEffect('#algorithmStepsDiv ul:first','#ifFirstEqNull', function() {
								$('#ifFirstEqNull').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
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
									+ '\t\t\tif (<brown>position == 1</brown>) {'
									+ '\n\t\t\t\tfirst = first -> next;'
									+ '\n\t\t\t}<span id="secondElseCon"></span>'
									
									+ '\n\t\t\t<span id="print">printf("The deleted element %d from  "\n\t\t\t\t\t" SLL : \\n" last -> data);'
									+ '\n\t\t\tfree(last);'
									+ '\n\t\t\treturn first;</span>'
									+ '\n\t}</span>');
							if (lang == 'cpp') {
								$('#print').html('cout << "The deleted element " \n\t\t\t\t\t << last -> data << " from SLL : \\n";\n'
									+ '\t\t\tdelete last;');
							}
							transferEffect('#algorithmStepsDiv ul:last','#elseBlock', function() {
								$('#elseBlock').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#parentPre').scrollTo('#elseBlock', 500);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'thirdExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "three" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							$('#secondElseCon').append('<span id="elseBlock11" class="opacity00"> else {\n'
									+ '\t\t\t\tif (<brown>position <= 0</brown>) {\n'
									+ '\t\t\t\t\t<span id="print1">printf("No such position in"\n\t\t\t\t\t\t" SLL So deletion is"'
									+ '\n\t\t\t\t\t\t\t "not possible\\n");\n\t\t\t\t\treturn first;</span>\n\t\t\t\t} '
									+ ' <span id="ifposNotZero"><span id="btn"></span>');
							if (lang == 'cpp') {
								$('#print1').html('cout << "No such position in"\n\t\t\t\t\t\t" SLL So deletion is"'
										+ '\n\t\t\t\t\t\t\t "not possible\\n";');
							}
							transferEffect('#algorithmStepsDiv ul:last','#elseBlock11', function() {
								$('#parentPre').scrollTo('#elseBlock11', 500);
								$('#elseBlock11').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'fourthExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "four" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							$('#ifposNotZero').append('<span id="elseBlock1" class="opacity00">else {\n'
									+ '\t\t\t\t\tint i;\n'
									+ '\t\t\t\t\tfor (<brown>i = 1; i < position; i++</brown>) {<span id="iflstNul"></span>\n'
									+ '\t\t\t\t\t\tprev = last;\n'
									+ '\t\t\t\t\t\tlast = last -> next;\n'
									+ '\t\t\t\t\t}\n'
									+ '\t\t\t\t\tprev -> next = last -> next;\n\t\t\t\t}\n\t\t\t}</span>');
							transferEffect('#algorithmStepsDiv ul:last','#elseBlock1', function() {
								$('#parentPre').scrollTo('#print', 500);
								$('#elseBlock1').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#funName').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'fifthExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "five" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							$('#iflstNul').append('\n<span id="onlyIfBlock" class="opacity00"> '
									+ '\t\t\t\t\t\tif (<brown>lastNode == NULL</brown>) {\n'
									+ '\t\t\t\t\t\t\t<span id="print1">printf("No such position in"\n\t\t\t\t\t\t\t\t" SLL So deletion is"'
									+ 'not possible\\n");\n\t\t\t\t\t\t\treturn first;</span>\n\t\t\t\t\t\t}<span id="btn"></span>');
							if (lang == 'cpp') {
								$('#print2').html('cout << "No such position in"\n\t\t\t\t\t\t" SLL So deletion is"'
										+ '\n\t\t\t\t\t\t\t "not possible\\n";');
							}
							transferEffect('#algorithmStepsDiv ul:last','#onlyIfBlock', function() {
								$('#parentPre').scrollTo('#elseBlock1', 500);
								$('#onlyIfBlock').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
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
				$('#onlyIfBlock').removeClass('y');
				$('#restartBtn').click(function() {
					location.reload();
				});
			break;
			}
		});
	});
	intro.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	text = " Here, we will learn <y>Delete At Position Node in Singly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
} 

function deleteAtPosition() {
	$('#parentPre').append('<span id="funName"><span id="functionName">node <g>deleteAtPosition()</g></span> { '
				+ '\n\t<span id="ifFirstEqNull" class="opacity00"> if (<brown>first == NULL</brown>) {'
				+'\n\t\t<span id="printf1">printf("List is Empty,"\n\t\t\t" Deletion is not possible\\n");</span>\n\t}</span>'
				+'\n}</span>');
	if (lang == 'cpp'){
		$('#functionName').html('void Sll::<g>deleteAtPosition()</g>');
		$('#printf1').html('cout << "List is Empty,"\n\t\t\t" Deletion is not possible\\n";');
	}
}

function firstEqNull() {
	$('.user-btn, #btn').remove();;
	zoomInEffect('#firstNode', function() {
		text = '<li>Here <y>first</y> value (i.e <y>'+ $('#firstVal').text() +'</y>) is equal to <y>NULL</y>'
				+ ' means there is no node in the <y>list</y> so deletion is not possible here.</li><li> Print <y>List is Empty,'
				+ ' Deletion is not possible</y> and terminate the function</li>';
		typing('#appendDiv', text, function() {
			introNextSteps('#algorithmStepsDiv', 'Step1');
			$('.introjs-nextbutton').show();
		});
	});
}

function firstNotEqNullAnimation() {
	$('.user-btn, #btn').remove();
	$('#firstVal').text($('.data-address:first').text());
	$('#line1').css('opacity', '1');
	text = '<li>Here, the <y>first</y> node contain the value (i.e <y>'+ $('#firstVal').text() +'</y>) is not a <y>NULL</y> means '
			+ '<y>list</y> contains some nodes.</li>'
	typing('#appendDiv11', text, function() {
		$('#appendDiv11').after('<div id="appendDiv1"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createlast');
	});
}

function createlast() {
	$('.user-btn, #btn').remove();
	$('#s2').removeClass('blinkingGreen');
	
	if (delNum == 1) {
		text = '<li>Let us take one temporary node (<y>last</y>) and store the <y>first</y> value (i.e <y> '
				+ $('#firstVal').text() +'</y>) to <y>last</y>.</li>';
	} else if (delNum == 0) { 
		text = '<li>Check if position (<y>'+ delNum +'</y>) is less than or equal to <y>0</y> or not.'
				+ ' Here, position (<y>'+ delNum +' == 0</y>) condition is evaluates to <y>true</y>. so '
				+ 'print <y>No such position in SLL so deletion is not possible.</y> </li>';
	} else {
		text = '<li>Let us take two temporary node (<y>last</y> and <y>prev</y>) and store the <y>first</y> value (i.e <y> '
			+ $('#firstVal').text() +'</y>) to <y>last</y> and <y>prev</y>.</li>';
	}
	typing('#appendDiv1', text, function() {
		$('#appendDiv1').after('<div id="appendDiv25"></div>');
		/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
		if (delNum == 0) {
			introNextSteps('#algorithmStepsDiv', 'Step3');
			$('.introjs-nextbutton').show();
		} else {
			appendNextBtn('.introjs-tooltipbuttons', 'createlastAnimation');
		}
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
				if (delNum == 1) {
					appendNextBtn('.introjs-tooltipbuttons', 'checkPosEqOneText');
				} else {
					zoomInEffect('#prev', function() {
						$('#prevVal').text("").removeClass('opacity00');
						$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
							fromEffectWithTweenMax("#prevVal", "#firstVal", $("#firstVal").text(), function() {
								svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#dataDiv1",
										 "#svgId", "line111", "arrow", false, function() {
									appendNextBtn('.introjs-tooltipbuttons', 'checkPosEqOneText');
								});
							});
						});
					});
				}
				/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
			});
		});
	});
}

function checkPosEqOneText() {
	$('.user-btn').remove();
	$('.introjs-tooltip').css('height','250');
	if (delNum == 1) {
		text = '<li>Check if the user given <y>position</y> (<y>'+ delNum +'</y>) is <y>equal</y> to <y>1</y> or not. '
				+ 'the condition returns <y>true</y> follow the below steps.</li>'
	} else {
		text = '<li>Check if the user given <y>position</y> (<y>'+ delNum +'</y>) is <y>equal</y> to <y>1</y> or not. '
				+'the condition returns <y>false</y> follow the below steps.</li>'
	}
	typing('#appendDiv25', text, function() {
		if (delNum == 1) {
			$('#appendDiv25').after('<div id="appendDiv22"></div>');
			appendNextBtn('.introjs-tooltipbuttons', 'PosEqOne');
		} else {
			$('#appendDiv25').after('<div id="appendDiv3"></div>');
			appendNextBtn('.introjs-tooltipbuttons', 'repeatLoopStep');
		}
		/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
	});	
}

function PosEqOne() {
	$('.user-btn').remove();
	text = '<li>Store the <y>next</y> field of <y>first</y> (i.e <y>'+ $('#next1').text() +'</y>) to the <y>first</y> node.</li>'
	typing('#appendDiv22', text, function() {
		$('#appendDiv22').after('<div id="appendDiv31"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'firstNextToFirstAnimation');
		/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
	});
}


function repeatLoopStep() {
	$('.user-btn').remove();
	if (delNum == 5) {
		text = '<li>Let us take one integer variable <y>i</y> and initialized with <y>1</y>.</li><br/>'
				+ '<li>Repeat the loop until the <y>i</y> value is <y>less than</y> user entered <y>position</y> (<y>'+ delNum +'</y>) </y>'
				+ 'if it is <y>true</y>, then check if <y>lastNode</y> is equal to <y>NULL</y> or not if it not NULL then,'
				+ ' assign <y>last</y> to <y>prev</y> and travers the <y>next</y> field of <y>last</y> to <y>last</y>. otherwise print '
				+ '<y>No such position in SLL So deletion is not possible</y>';
	} else {
		text = '<li>Let us take one integer variable <y>i</y> and initialized with <y>1</y>.</li><br/>'
				+ '<li>Repeat the loop until the <y>i</y> value is <y>less than</y> user entered <y>position</y> (<y>'+ delNum +'</y>) </y>'
				+ 'if it is <y>true</y>, assign <y>last</y> to <y>prev</y> and travels the <y>next</y> field of <y>last</y> to <y>last</y>. ';
	}
	
	typing('#appendDiv3', text, function() {
		i = 1;
		$('#appendDiv3').after('<div id="appendDiv4"></div>');
		zoomInEffect('#iVal1');
		$('#iVal1').effect( "highlight",{color: 'yellow'}, 600);
		appendNextBtn('.introjs-tooltipbuttons', 'repeatLoopStepAnimation');
		/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
	});
}

function repeatLoopStepAnimation() {
	$('.user-btn').remove();
	if (i < delNum && $("#lastVal").text() != "NULL") {
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
											if ($("#lastVal").text() != "NULL") {
												svgAnimatingLineTopToBottom("#animationDiv", "#last", "#dataDiv" + (nodeCount + 1),
														"#svgId", "line11", "arrow", false, function() {
															nodeCount++;
															i++;
															$('#val').effect( "highlight",{color: 'yellow'}, 600);
															flipEffectWithTweenMax('#val', i, function() {
																repeatLoopStepAnimation();
															});
														});
											} else {
												repeatLoopStepAnimation();
											}
									});
							});
						});
					});
				});
			});
		});
	} else {
		if ($("#lastVal").text() == "NULL") {
			text = '<li>Here the condition (<y>'+ i +'</y> &lt; <y>'+ delNum +'</y>) is evaluates to <y>true</y> but there is no node to check'
					+ '.</li><br/><li>Here, <y>lastNode</y> is equal to <y>NULL</y> So, <y>NULL</y> print <y>No such position'
					+ ' in SLL So deletion is not possible</li>';
			introNextSteps('#algorithmStepsDiv', 'Step5');
			$('.introjs-nextbutton').show();
		} else {
			text = '<li>Here the condition (<y>'+ i+'</y> &lt; <y>'+ delNum +'</y>) is evaluates to <y>false</y>'
			+' so assign the <y>next</y> filed of <y>last</y> to <y>next</y> field of <y>prev</y>.</li>'	
			appendNextBtn('.introjs-tooltipbuttons', 'assignPrevToNext');
		}
		typing('#appendDiv4', text, function() {
			$('#appendDiv4').after('<div id="appendDiv31"></div>');
			/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
		});
	}
}

function assignPrevToNext() {
	$('.user-btn').remove();
	$('.next-div:last').removeClass('blinkingRed');
	$('#prevVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineTopToBottom("#animationDiv", "#last", "#dataDiv" + (nodeCount),
			 "#svgId", "line22", "arrow", false, function() {
			$('#line22').remove();
			$('#next' + (nodeCount)).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#next" + (nodeCount - 1), "left", function() {
					$('#line' + nodeCount).remove();
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
					/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
				});
			});
		});
	});
}

function firstNextToFirstAnimation() {
	$('.user-btn, #btn').remove();
	$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#dataDiv1",
				 "#svgId", "line21", "arrow", false, function() {
			$('#line21').remove();
			$('#next1').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				fadeInBounceEffectWithTimelineMax("#next1", "#firstVal", "left", function() {
					$('#line1').remove();
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
					/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
				});
			});
		});
	});
}

function printAndDeleteNodeText() {
	$('.user-btn').remove();
	if (lang != 'cpp') {
		var text = '<li>Now print the <y>last -> data</y> (i.e <y>'+ $('#data' + nodeCount).text() +'</y>) and '
		+ ' <y>delete</y> the <y>last</y> node i.e (<y>'+ $('#lastVal').text() +'</y>).</li>'	
	} else {
		var text = '<li>Now print the <y>data</y> field of <y>last</y> (i.e <y>'+ $('#data' + nodeCount).text() +'</y>) and '
		+ ' <y>delete</y> the <y>last</y> node i.e (<y>'+ $('#lastVal').text() +'</y>) and also return the <y>last</y> node.</li>'
	}
	typing('#appendDiv31', text, function() {
		$('#appendDiv31').after('<div id="appendDiv4"></div>')
		$('#dataDiv'+nodeCount +', #nextDiv'+ nodeCount).addClass('blinkingRed');
		appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeAnimation');
		/*$('.introjs-tooltip').scrollTo('.user-btn', 500);*/
	});
}

function printAndDeleteNodeAnimation() {
	$('.user-btn, #btn').remove();
	TweenMax.to("#node"+ nodeCount, 0.5, { top : -80, onComplete: function() {
		$('#dataDiv'+ nodeCount +', #nextDiv'+ nodeCount).removeClass('blinkingRed');
		$("#node"+ nodeCount +", #line11").remove();
		$('#last').addClass('opacity00');
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
				if (delNum == 1) {
					introNextSteps('#algorithmStepsDiv', 'Step2');
				} else if (delNum == 2) {
					introNextSteps('#algorithmStepsDiv', 'Step4');
				} else {
					//introNextSteps('#algorithmStepsDiv', 'Step4');
				}
				
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
		$('#firstNode').removeClass('opacity00')
		$('#firstVal').text($('.data-address:first').text());
		for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++ ) {
			$('#data' + i).text(i+'0').removeClass('opacity00');
			$('#node'+ i).removeClass('opacity00');
			$('#line' + i).css('opacity', '1');
		}
		var text = '<li>User wants to delete <y>'+ delNum +'</y> node in the list.</li>' 
		typing('#appendDiv', text, function() {
				$('#appendDiv').after('<div id="appendDiv11"></div>');
				appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNullAnimation');
		});
	},500);
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
						+ ' class="div-border left-radius col-xs-6 data-div zindex"><span id="data' + nodeCount +'"'
						+ ' class="data-span position opacity00 ct-blue-color ct-fonts" style="top: 0px; left: 0px;"></span></div>'
						+ ' <div id="nextDiv' + nodeCount +'" class="position div-border zindex right-radius col-xs-6 next-div">'
						+ ' <span id="next' + nodeCount +'" class="position next-span ct-green-color ct-fonts position"></span></div></div>'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 padding00 text-center">'
						+ ' <span id="dataAddress' + nodeCount + '" class="position data-address zindex padding00 ct-brown-color ct-fonts">'+ randomAddress 
						+ '</span></div></div></div>';
	$('#dynamicNodes').append(x);
	var toolTopText = "This is an int data type to hold the user data";
	tooltipDisplay(".data-div", "top", toolTopText);
	var toolTopText = "This is an pointer type to hold the address of the next node";
	tooltipDisplay(".next-div", "top", toolTopText);
	var toolTopText = "it indicates the address of the node";
	tooltipDisplay(".data-address", "bottom", toolTopText);
	
}

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
		TweenLite.from(selector2, 2.8, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left});
		if (pos == "left") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left:-150 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else if (pos == "right") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left: 350 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: 50 , delay : 1.1, opacity:0 , onComplete: function() {
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