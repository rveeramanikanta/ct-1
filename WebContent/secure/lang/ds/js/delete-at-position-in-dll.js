var lang, intro, nodeCount = stepCount = delNum = i = 1;

function deleteAtPositionAnimation() { //call the method to start the intro and create some nodes
	lang = getURLParameter("lang");
	declareNodesWhenFunctionCall("last", "lastVal", "lastInDelMtd", "last");
	declareNodesWhenFunctionCall("prev", "prevVal", "prevInDelMtd", "prev");
	createDynamicNodes(1);
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
				nodeCount = stepCount = delNum = i = 1;
				$('.tooltopClass').addClass('zindex');
				$(".y").removeClass('y');
				intro.refresh();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case 'firstNodeNull': 
						intro.refresh();
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>doubly linked is empty</y>. i.e <y>first</y> is "
								+ " <y>NULL</y>.</li><li>For example: user want to delete <y>1</y> node in the <y>list</y>.</li>"
								+ " <div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#position").text(delNum);
							zoomInEffect("#position", function() {
								var toolTopText = "first Nodes which stores the starting address of the list";
								tooltipDisplay("#firstDiv", "bottom", toolTopText);
								appendNextBtn('.introjs-tooltipbuttons', 'firstEqNull');
							});
						});
					break;
					case 'firstNotEqNull' :
						intro.refresh();
						$('#ifFirstEqNull').removeClass('y')
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>double linked list</y> can contains <y>more than one node</y>."
								+ "</li><li>For example: user want to delete <y>1</y> node in the <y>list</y>.</li>"
								+ "<div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							delNum = 1;
							appendNextBtn('.introjs-tooltipbuttons', 'ifSingleNodePresent');
						});
					break;
					case 'thirdExample' :
						intro.refresh();
						$('#dynamicNodes .next-span:first').text($('.data-address').eq(1).text());
						$('#dynamicNodes .next-span').eq(1).text($('.data-address').eq(2).text());
						$('#dynamicNodes .next-span:last').text('NULL');
						$('#firstNode, #posVal, #position').addClass('opacity00');
						$('line').remove();
						$('#elseBlock').removeClass('y')
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>double linked list</y> can contains <y>more than one node</y>."
								+ "</li><li>For example: user want to delete <y>1</y> node in the <y>list</y>.</li>"
								+ "<br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							delNum = 1;
							$("#position").text(delNum);
							zoomInEffect("#position", function() {
								appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
							});
						});
					break;
					case 'fourthExample' :
						intro.refresh();
						appendNodes();
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>double linked list</y> can contains <y>more than one node</y>."
								+ "</li><li>For example: user want to delete <y>4</y> node in the <y>list</y>.</li>"
								+ "<br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							delNum = 4;
							$('#firstNode, #position, #posVal').addClass('opacity00')
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
					case "fifthExample" :
						intro.refresh();
						appendNodes();
						$('.introjs-tooltip').css('height','');
						$('.introjs-tooltip').removeClass('hide');
						text = "<ul><li>Let us assume <y>double linked list</y> can contains <y>more than one node</y>."
								+ "</li><li>For example: user want to delete <y>-1</y> node in the <y>list</y>.</li>"
								+ "<br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							delNum = -1;
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
					case "sixthExample" :
						intro.refresh();
						appendNodes();
						delNum = 3;
						text = "<ul><li>Let us assume <y>double linked list</y> can contains <y>more than one node</y>."
								+ "</li><li>For example: user want to delete <y>"+ delNum +"</y> node in the <y>list</y>.</li>"
								+ "<br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
					case "seventhExample":
						intro.refresh();
						appendNodes();
						delNum = 2;
						text = "<ul><li>Let us assume <y>double linked list</y> can contains <y>more than one node</y>."
								+ "</li><li>For example: user want to delete <y>"+ delNum +"</y> node in the <y>list</y>.</li>"
								+ "<br/><div id='appendDiv'></div></ul>";
						typing(".introjs-tooltiptext", text, function() {
							appendNextBtn('.introjs-tooltipbuttons', 'multipleNodes');
						});
					break;
				}
			break;
			case 'algorithmStepsDiv':
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
							introNextSteps('#mainDiv', 'firstFunction');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case 'Step2':
						$('#s2').addClass('opacity00');
						appendSteps(2);
						var text = "<ul><li>If it is <g>Not Empty</g> then, define one tempary node <g>last</g>"
									+ " and initialize with <bwbg>first</bwbg> value.</li>"
									+ "<ul><li>Check whether the user given <g>position</g> is <g>equal</g> to <g>1</g>.</li>"
									+ "<li> If it is <brown>TRUE</brown> then, check another condition the <g>next</g> field of <g>last</g>"
									+ " is <brown>equal</brown> to <g>NULL</g> or not.</li>"
									+ "<li> If it is <brown>TRUE</brown> Then, assign <g>NULL</g> "
									+ " to the <bwbg>first</bwbg> then print "
									+ "<g>data</g> field of <g>last</g> node and delete <g>last</g> and terminate the function."
									+ "<span id='btn'></span></li></ul></ul>";
						$('#stepDes2').html(text);
						intro.refresh();
						zoomInEffect('#s2', function() {
							$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
							stepCount++;
							introNextSteps('#mainDiv', 'secondFunction');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case "Step3":
						$('#s3').addClass('opacity00');
						appendSteps(3);
						var text = "<ul><ul><li>If it is <brown>FALSE</brown> then, assign the <g>next</g> field of <bwbg>first</bwbg> to "
									+ " <bwbg>first</bwbg> node and also assign <g>NULL</g> to the <g>prev</g> field of <bwbg>first</bwbg>"
									+ " node.<span id='btn'></span></li></ul></ul>";
						$('#stepDes3').html(text);
						intro.refresh();
						zoomInEffect('#s3', function() {
							$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
							stepCount++;
							introNextSteps('#mainDiv', 'threeFunction');
							appendNextBtn('#btn', 'moveStep');
						});
					break;
					case 'Step4' :
						$('#s4').addClass('opacity00');
						appendSteps(4);
						var text = '<ul><ul><li>If it is <brown>FALSE</brown>, then define Two tempary nodes <g>last</g> and <g>prev</g> and '
									+ 'initialized with <bwbg>first</bwbg>.</li>'
									+ '<li>Initialize an integer variable <g>i</g> with the value <g>1</g>.</li>'
									+ '<li>Repeat the loop until the <g>i</g> is <brown>less than</brown> <g>position</g>.</li> '
									+ '<li>if it <brown>TRUE</brown> then, check the another condition <g>last</g> is equal to <brown>'
									+ 'NULL</brown> or not.</li>'
									+ '<ul><li>If it is <brown>TRUE</brown> then, print <g>No such position in Doubly Linked List'
									+ ' so deletion is not possible</g></li> and return <g>first</g> node</li>'
									+ '<li>It it is <brown>FALSE</brown> then, assign <g>last</g> value to <g>last</g> node then travel the <g>next</g> field '
									+ ' of <g>last</g> to <g>last</g>.</li></ul><span id="btn"></span></li></ul></ul>';
						intro.refresh();
						$('#stepDes4').html(text).addClass('opacity00');
						$('#algorithmStepsDiv').scrollTo('ul li:last', 500);
						setTimeout(function() {
							$('#stepDes4').addClass("y").removeClass('opacity00');
							zoomInEffect('#s4', function() {
								stepCount++;
								introNextSteps('#mainDiv', 'fourFunction');
								appendNextBtn('#btn', 'moveStep');
							});
						},800);
					break;
					case 'Step5' :
						$('#s5').addClass('opacity00');
						appendSteps(5);
						var text = '<ul><ul><li>If it is <brown>FALSE</brown> then check another condition if <g>last</g> is <g>equal</g> to '
									+ '<g>NULL</g> or user entered <g>position</g> is <g>less than</g> or <brown>equal</brown> to <g>zero</g>.<li> '
									+ '<ul><li>If it is <brown>TRUE</brown>, then print No such position in Doubly Linked List so deletion '
									+ 'is not possible and return the <g>first</g> node.</li></ul>'
									+ '<span id="btn"></span></li></ul></ul>';
						intro.refresh();
						$('#stepDes5').html(text).addClass('opacity00');
						$('#algorithmStepsDiv').scrollTo('#btn', 500);
						setTimeout(function() {
							$('#stepDes5').removeClass('opacity00');
							zoomInEffect('#s5', function() {
								stepCount++;
								introNextSteps('#mainDiv', 'fiveFunction');
								appendNextBtn('#btn', 'moveStep');
							});
						},800);
					break;
					case "Step6" :
						$('#s6').addClass('opacity00');
						appendSteps(6);
						var text = '<ul><ul><li>If the above condition is <brown>FALSE</brown> then check the another condition if the <g>next</g>'
									+ ' field of <g>last</g> is <brown>equal</brown> to <g>NULL</g> Or not</ll>'
									+ '<li>If it is <g>NULL</g> the assign <g>NULL</g> to the <g>next</g> field of <g>prev</g>.</li>'
								+ '<span id="btn"></span></li></ul></ul>';
						intro.refresh();
						$('#stepDes6').html(text).addClass('opacity00');
						$('#algorithmStepsDiv').scrollTo('#btn', 500);
						setTimeout(function() {
							$('#stepDes6').removeClass('opacity00');
							zoomInEffect('#s6', function() {
								stepCount++;
								introNextSteps('#mainDiv', 'sixFunction');
								appendNextBtn('#btn', 'moveStep');
							});
						},800);	
					break;
					case "Step7":
						$('#s7').addClass('opacity00');
						appendSteps(7);
						var text = '<ul><ul><li>If the above condition is <brown>FALSE</brown> then check the another condition if the <g>next</g>'
									+ ' field of <g>last</g> is <brown>equal</brown> to <g>NULL</g> Or not</ll>'
									+ '<li>If it is <g>NULL</g> the assign <g>NULL</g> to the <g>next</g> field of <g>prev</g>.</li>'
								+ '<span id="btn"></span></li></ul></ul>';
						intro.refresh();
						$('#stepDes7').html(text).addClass('opacity00');
						$('#algorithmStepsDiv').scrollTo('#btn', 500);
						setTimeout(function() {
							$('#stepDes7').removeClass('opacity00');
							zoomInEffect('#s7', function() {
								stepCount++;
								introNextSteps('#mainDiv', 'seventhFunction');
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
					case "firstFunction" :
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
					case "secondFunction" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							$('#ifFirstEqNull').after('<span id="elseBlock" class="opacity00"><span id="elseCon"> else {</span>\n'
									+ '\t\t\tnode last = first;\n'
									+ '\t\t\tif(<brown>position == 1</brown>) {\n'
									+ '\t\t\t\tif(<brown>last -> next == NULL</brown>) {\n'
									+ '\t\t\t\t\tfirst = NULL;\n'
									+ '\t\t\t\t} <span id="secondIfElseCon"></span>\n'
									+ '\t\t\t} <span id="firstIfElseCon"></span>'
									+ '\n\t\t\t<span id="print">printf("The deleted element from "\n\t\t\t\t\t" SLL : "\\n" << last -> data);</span>\n'
									+ '\t\t\treturn last;\n'
									+ '\t}\n</span>');
							transferEffect('#algorithmStepsDiv ul:last','#elseBlock', function() {
								$('#elseBlock').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#parentPre').scrollTo('#elseBlock', 500);
								$('#dynamicNodes').empty();
								for (var i = 1; i < 4; i++ ) {
									createDynamicNodes(i);
									$("#next" + i).text(randomAddress).removeClass("opacity00");
								}
								$('#funName').after('<span id="btn"></span>');
								
								$('#dynamicNodes .next-span:first').text($('.data-address').eq(1).text());
								$('#dynamicNodes .next-span').eq(1).text($('.data-address').eq(2).text());
								$('#dynamicNodes .next-span:last').text('NULL');
								introNextSteps('#animationDiv', 'thirdExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "threeFunction":
					$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
						var text = " else {\n"
								+ "\t\t\t\t\tfirst = first -> next;\n"
								+ "\t\t\t\t\tfirst -> prev = NULL;\n"
								+ "\t\t\t\t}"
						$("#secondIfElseCon").addClass("opacity00").append(text);
						transferEffect('#algorithmStepsDiv ul:last','#secondIfElseCon', function() {
							$("#secondIfElseCon").removeClass("opacity00")
							$('#secondIfElseCon').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
							$('#parentPre').scrollTo('#secondIfElseCon', 500);
							$('#funName').after('<span id="btn"></span>');
							introNextSteps('#animationDiv', 'fourthExample');
							appendNextBtn('#btn', 'moveStep');
						});
					});
					break;
					case "fourFunction" :
						$('#stepDes4').removeClass("y")
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							var appendText = '<span id="elseBlock1" class="opacity00">else {\n'
								+ '\t\t\t\t\tint i;\n'
								+ '\t\t\t\t\tfor (<brown>i = 1; i < position; i++</brown>) {\n'
								+ '\t\t\t\t\t\tif (<brown>last == NULL</brown>) {\n'
								+ '\t\t\t\t\t\t\tprintf("No such position in"\n'
								+ '\t\t\t\t\t\t\t " Doubly Linked List"\n'
								+ '\t\t\t\t\t\t\t\t" so deletion is not possible\\n");\n'
								+ '\t\t\t\t\t\t\treturn first;\n'
								+ '\t\t\t\t\t\t} else {\n'
								+ '\t\t\t\t\t\t\tprev = last;\n'
								+ '\t\t\t\t\t\t\tlast = last -> next;\n'
								+ '\t\t\t\t\t\t}\n'
								+ '\t\t\t\t}<span id="iflstNul"></span><span id="btnAppend"></span>\n</span>'
							$('#firstIfElseCon').append(appendText);
							transferEffect('#algorithmStepsDiv ul:eq(5)','#elseBlock1', function() {
								$('#parentPre').scrollTo('#print', 500);
								$('#elseBlock1').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								$('#btnAppend').after('<span id="btn"></span>');
								introNextSteps('#animationDiv', 'fifthExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "fiveFunction" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							var appendText = '\n<span id="onlyIfBlock" class="opacity00"> '
								+ '\t\t\t\t\tif (<brown>lastNode == NULL || position <= 0 </brown>) {\n'
								+ '\t\t\t\t\t\tprintf("No such position in"\n\t\t\t\t\t\t\t\t" SLL So deletion is"'
								+ '\n\t\t\t\t\t\t\t\t "not possible\\n");\n\t\t\t\t\t\treturn first;\n\t\t\t\t\t}<span id="preNextNull"></span>'
								+ '<span id="btn"></span>'
							$('#iflstNul').append(appendText);
							transferEffect('#algorithmStepsDiv ul:last','#onlyIfBlock', function() {
								$('#parentPre').scrollTo('#elseBlock1', 500);
								$('#onlyIfBlock').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								introNextSteps('#animationDiv', 'sixthExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "sixFunction":
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							var appendText = '<span id="onlyIfBlock1" class="opacity00"> '
								+ ' else if (<brown>last -> next == NULL</brown>) {\n'
								+ '\t\t\t\t\t\tprev -> next = NULL;\n\t\t\t\t\t}<span id="lastIfCon"></span><span id="btn"></span>'
							$('#preNextNull').append(appendText);
							transferEffect('#algorithmStepsDiv ul:last','#onlyIfBlock1', function() {
								$('#parentPre').scrollTo('#onlyIfBlock1', 500);
								$('#onlyIfBlock1').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
								introNextSteps('#animationDiv', 'seventhExample');
								appendNextBtn('#btn', 'moveStep');
							});
						});
					break;
					case "seventhFunction" :
						$('#algorithmStepsDiv ul:last').effect( "highlight",{color: 'yellow'}, 600, function() {
							var appendText = '<span id="onlyIfBlock2" class="opacity00"> '
								+ ' else {\n'
								+ '\t\t\t\t\t\t\tprev -> next = last -> next;'
								+ '\n\t\t\t\t\t\t\tprev -> next -> prev = last -> next;'
								+ '\n\t\t\t\t\t}<span id="btn"></span>'
							$('#lastIfCon').append(appendText);
							transferEffect('#algorithmStepsDiv ul:last','#onlyIfBlock2', function() {
								$('#parentPre').scrollTo('#lastIfCon', 500);
								$('#lastIfCon').addClass('y').effect( "highlight",{color: 'yellow'}, 600);
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
	text = " Here, we will learn <y>Delete At End Node in Doubly Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
	});
} 

function deleteAtPosition() {
	$('#parentPre').append('<span id="funName">node <g>deleteAtPosition()</g> { '
				+ '\n\t<span id="ifFirstEqNull" class="opacity00"> if (<brown>first == NULL</brown>) {'
				+'\n\t\tprintf("List is Empty,"\n\t\t\t" Deletion is not possible\\n");\n\t}</span>'
				+'\n}</span>');
}

function firstEqNull() {
	$('.user-btn, #btn').remove();;
	zoomInEffect('#firstNode', function() {
		text = '<li>Here <y>first</y> value (i.e <y>'+ $('#firstVal').text() +'</y>) is equal to <y>NULL</y>'
				+ ' means there in no node in the <y>list</y> so deletion is not possible here.</li><li> Print <y>List is Empty,'
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
	typing('#appendDiv', text, function() {
		$('#appendDiv').after('<div id="appendDiv1"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'createlast');
	});
}

function createlast() {
	$('.user-btn, #btn').remove();
	$('#s2').removeClass('blinkingGreen');
	
	if (delNum == 1) {
		text = '<li>Let us take one tempary node (<y>last</y>) and store the <y>first</y> value (i.e <y> '
				+ $('#firstVal').text() +'</y>) to <y>last</y>.</li>';
	} else if (delNum == 0) { 
		text = '<li>Check if position (<y>'+ delNum +'</y>) is less than or equal to <y>0</y> or not.'
				+ ' Here, position (<y>'+ delNum +' == 0</y>) condition is evaluates to <y>true</y>. so '
				+ 'print <y>No such position in SLL so deletion is not possible.</y> </li>';
	} else {
		text = '<li>Let us take two tempary node (<y>last</y> and <y>prev</y>) and store the <y>first</y> value (i.e <y> '
			+ $('#firstVal').text() +'</y>) to <y>last</y> and <y>prev</y>.</li>';
	}
	typing('#appendDiv1', text, function() {
		$('#appendDiv1').after('<div id="appendDiv25"></div>');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
		if (delNum == 0) {
			//introNextSteps('#algorithmStepsDiv', 'Step3');
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
			svgAnimatingLineTopToBottom("#animationDiv", "#last", "#prevDiv1",
				"#svgId", "line11", "arrow", false, function() {
				if (delNum == 1) {
					appendNextBtn('.introjs-tooltipbuttons', 'checkPosEqOneText');
				} else {
					zoomInEffect('#prev', function() {
						$('#prevVal').text("").removeClass('opacity00');
						$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
							fromEffectWithTweenMax("#prevVal", "#firstVal", $("#firstVal").text(), function() {
								svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#prevDiv1",
										 "#svgId", "line111", "arrow", false, function() {
									appendNextBtn('.introjs-tooltipbuttons', 'checkPosEqOneText');
								});
							});
						});
					});
				}
				$('.introjs-tooltip').scrollTo('.user-btn', 500);
			});
		});
	});
}

function checkPosEqOneText() {
	$('.user-btn').remove();
	$('.introjs-tooltip').css('height','250');
	if (delNum == 1) {
		text = '<li>Check if the user given <y>position</y> (<y>'+ delNum +'</y>) is <y>equal</y> to <y>1</y> or not.</li> '
				+ '<li>Here, the condition return <y>true</y> so follow the below steps.</li>'
	} else {
		text = '<li>Check if the user given <y>position</y> (<y>'+ delNum +'</y>) is <y>equal</y> to <y>1</y> or not.</li> '
				+ '<li>Here, the condition return <y>false</y> because the given element <y>'+ delNum +'</y> is <y>not equal</y> to <y>1</y> '
				+ ' so follow the below steps.</li>'
	}
	typing('#appendDiv25', text, function() {
		if (delNum == 1) {
			$('#appendDiv25').after('<div id="appendDiv22"></div>');
			appendNextBtn('.introjs-tooltipbuttons', 'PosEqOne');
		} else {
			$('#appendDiv25').after('<div id="appendDiv3"></div>');
			appendNextBtn('.introjs-tooltipbuttons', 'repeatLoopStep');
		}
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});	
}

function PosEqOne() {
	$('.user-btn').remove();
	if ($(".nodes").length == 1) {
		text = "<li>Now check another condition if the <y>next</y> field of <y>last</y> is <Y>equal</y> to <y>NULL</y> or not.</li>"
			+ "<li>Here, the condition is evaluates to <y>true</y> so the control enters in if-block.</li>";
	} else {
		text = "<li>Now check another condition if the <y>next</y> field of <y>last</y> is <Y>equal</y> to <y>NULL</y> or not.</li>"
			+ "<li>Here, the condition is evaluates to <y>false</y> so the control enters in else-block.</li>"
	} 
	typing('#appendDiv22', text, function() {
		$('#appendDiv22').after('<div id="appendDiv31"></div>')
		appendNextBtn('.introjs-tooltipbuttons', 'checkTempNextToNull');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function checkTempNextToNull() {
	$('.user-btn').remove();
	if ($(".nodes").length == 1) {
		text = '<li>Assign <y>NULL</y> to the <y>first</y> node.</li>'
	} else {
		text = '<li>Store the <y>next</y> field of <y>first</y> (i.e <y>'+ $('#next1').text() +'</y>) to <y>first</y> node.</li> and assign '
				+ ' <y>NULL</y> to the <y>prev</y> field of <y>last</y> node.'
	}
	typing('#appendDiv22', text, function() {
		$('#appendDiv22').after('<div id="appendDiv31"></div>')
		appendNextBtn('.introjs-tooltipbuttons', ($(".nodes").length == 1) ? 'assignNullToTheFst': 'firstNextToFirstAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function repeatLoopStep() {
	$('.user-btn').remove();
	text = '<li>Let us take one integer variable <y>i</y> and initialized with <y>1</y>.</li><br/>'
			+ '<li>Repeat the loop until the <y>i</y> is <y>less than</y> <y>position</y> (i.e. <y>'+ delNum +'</y>).</li> '
			+ '<li>if it <y>TRUE</y> then, check the another condition <y>last</y> is equal to <y>'
			+ 'NULL</y> or not.</li>'
			+ '<ul><li>If it is <y>TRUE</y> then, print <y>No such position in Doubly Linked List'
			+ ' so deletion is not possible</y></li> and return <y>first</y> node</li>'
			+ '<li>It it is <y>FALSE</y> then, assign <y>last</y> value to <y>last</y> node then travel the <y>next</y> field '
			+ ' of <y>last</y> to <y>last</y>.</li>';
	typing('#appendDiv3', text, function() {
		i = 1;
		$('#appendDiv3').after('<div id="appendDiv4"></div>');
		zoomInEffect('#iVal1');
		$('#iVal1').effect( "highlight",{color: 'yellow'}, 600);
		appendNextBtn('.introjs-tooltipbuttons', 'repeatLoopStepAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function repeatLoopStepAnimation() {
	$('.user-btn').remove();
	if (i < delNum && $("#lastVal").text() != "NULL") {
		$('#lastVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
			fadeInBounceEffectWithTimelineMax("#lastVal", "#prevVal", "right", function() {
				$('#line111').remove();
				svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#prevDiv" + nodeCount,
						 "#svgId", "line111", "arrow", false, function() {
					$('#lastVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
						svgAnimatingLineTopToBottom("#animationDiv", "#last", "#prevDiv" + nodeCount,
								 "#svgId", "line22", "arrow", false, function() {
							$('#line22').remove();
							$('#lastVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
									fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#lastVal", "bottom", function() {
											$('#line11').remove();
											if ($("#lastVal").text() != "NULL") {
												svgAnimatingLineTopToBottom("#animationDiv", "#last", "#prevDiv" + (nodeCount + 1),
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
					+ '.</li><br/><li>Here, <y>lastNode</y> is equal to <y>NULL</y> So, print <y>No such position'
					+ ' in DLL So deletion is not possible</li>';
			introNextSteps('#algorithmStepsDiv', 'Step4');
			$('.introjs-nextbutton').show();
		} else {
			text = '<li>Here the condition (<y>'+ i+'</y> &lt; <y>'+ delNum +'</y>) is evaluates to <y>false</y>,</li>'
					+ ' then check another condition if <y>last</y> is <y>equal</y> to <y>NULL</y> or if <y>position</y> is '
					+ ' <y>less than</y> or <y>equal</y> to <y>zero</y>.</li>'	
			appendNextBtn('.introjs-tooltipbuttons', 'checkIfPosIsLessThanZero');
		}
		typing('#appendDiv4', text, function() {
			$('#appendDiv4').after('<div id="appendDiv31"></div>');
			$('.introjs-tooltip').scrollTo('.user-btn', 500);
		});
	}
}

function checkIfPosIsLessThanZero() {
	$('.user-btn').remove();
	if (delNum <= 0) {
		var text = "<li>Here, the condition <y>"+ randomAddress +" == NULL || "+ delNum +" <= 0</y> condiio is evaluates to <y>true</y>"
					+ " so, print there is <y>No such position in Doubly Linked List so deletion is not possible</y> "
					+ "and return the <y>first</y> node.</li>";
		$('#appendDiv31').after('<div id="appendDiv5"></div>');
		typing('#appendDiv31', text, function() {
			introNextSteps('#algorithmStepsDiv', 'Step5');
			$('.introjs-nextbutton').show();
			$('.introjs-tooltip').scrollTo('.introjs-nextbutton', 500);
		});
	} else {
		var text = "<li>Here, the condition <y>"+ randomAddress +" == NULL || "+ delNum +" <= 0</y> condiio is evaluates to <y>FALSE</y>"
					+ " again check another conditin if <y>next</y> field of <y>last</y> node is <y>equal</y> to <y>NULL</y> or not.</li>"
					+ "<li>It is <y>TRUE</y> then assign the <y>prev</y> field of <y>prev</y> to <y>NULL</y>.</li>"
					+ "<li>If it is <y>FALSE</y> then store the <y>next</y> field of <y>prev</y> to <y>next</y> field of <y>last</y> also "
					+ " store the <y>next</y> field of <y>prev</y> to the <y>last</y> node <y>next</y> of <y>prev</y>.</li>"
					+ "<li>Here, the condition is evaluates to <y>"+ (randomAddress == "NULL" || delNum <= 0) +"</y></li>";
		$('#appendDiv31').after('<div id="appendDiv5"></div>');
		typing('#appendDiv31', text, function() {
			if (i == 3) {
				appendNextBtn('.introjs-tooltipbuttons', 'assignNullToPreNode');
			} else {
				appendNextBtn('.introjs-tooltipbuttons', 'assignNxtNodeToPreNode');
			}
		});
	}
}

function assignNullToPreNode() {
	$('.user-btn, #btn').remove();
	$('#prevVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#prevDiv2",
				 "#svgId", "line22", "arrow", false, function() {
			$('#line22').remove();
			$('#next2').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				$('#next2').text("NULL").addClass("opacity00");
				zoomInEffect("#next2", function() {
					$("#line3, #line13").remove();
					$('.introjs-tooltip').scrollTo('.user-btn', 500);
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
				});
			});
		});
	});
}

function assignNxtNodeToPreNode() {
	$('.user-btn').remove();
	$('#prevVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#prevDiv1",
				 "#svgId", "line22", "arrow", false, function() {
			$('#line22').remove();
			$('#next1').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				fadeInBounceEffectWithTimelineMax("#next1", "#next2", "left", function() {
					$("#line3").remove();
					$('#prevVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
						svgAnimatingLineTopToBottom("#animationDiv", "#prev", "#prevDiv1",
								 "#svgId", "line22", "arrow", false, function() {
							$('#line22').remove();
							$('#next1').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
								fadeInBounceEffectWithTimelineMax("#next1", "#prev3", "left", function() {
									$("#line13").remove();
									appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
									$('.introjs-tooltip').scrollTo('.user-btn', 500);
								});
							});
						});
					});
				});
			});
		});
	});
}

function assignPrevToNext() {
	$('.user-btn').remove();
	$('.next-div:last').removeClass('blinkingRed');
	$('#prevVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineTopToBottom("#animationDiv", "#last", "#prevDiv" + (nodeCount),
			 "#svgId", "line22", "arrow", false, function() {
			$('#line22').remove();
			$('#next' + (nodeCount)).parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#next" + (nodeCount - 1), "left", function() {
					$('#line' + nodeCount).remove();
					appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
					$('.introjs-tooltip').scrollTo('.user-btn', 500);
				});
			});
		});
	});
}

function firstNextToFirstAnimation() {
	$('.user-btn, #btn').remove();
	$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		svgAnimatingLineBottomToTop("#animationDiv", "#firstDiv", "#prevDiv1",
				 "#svgId", "line21", "arrow", false, function() {
			$('#line21').remove();
			$('#next1').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
				fadeInBounceEffectWithTimelineMax("#next1", "#firstVal", "left", function() {
					$('#line1').remove();
					svgAnimatingLineBottomToTop("#animationDiv", "#firstDiv", "#prevDiv2",
							"#svgId", "line1", "arrow", false, function() {
						$('#prev2').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
							$('#prev2').text("NULL").addClass("opacity00");
							zoomInEffect("#prev2", function() {
								$("#line2, #line12").remove();
								appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
								$('.introjs-tooltip').scrollTo('.user-btn', 500);
							});
						});
					});
				});
			});
		});
	});
}

function assignNullToTheFst() {
	$('.user-btn, #btn').remove();
	$('#firstVal').parent().effect( "highlight",{color: 'yellow'}, 600, function() {
		$("#firstVal").text("NULL").addClass("opacity00");
		zoomInEffect("#firstVal", function() {
			$("#line1").remove();
			appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeText');
			$('.introjs-tooltip').scrollTo('.user-btn', 500);
			
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
		$('#dataDiv'+nodeCount +', #nextDiv'+ nodeCount + ', #prevDiv' + nodeCount).addClass('blinkingRed');
		appendNextBtn('.introjs-tooltipbuttons', 'printAndDeleteNodeAnimation');
		$('.introjs-tooltip').scrollTo('.user-btn', 500);
	});
}

function printAndDeleteNodeAnimation() {
	$('.user-btn, #btn').remove();
	TweenMax.to("#node"+ nodeCount, 0.5, { top : -80, onComplete: function() {
		$('#dataDiv'+ nodeCount +', #nextDiv'+ nodeCount + ', #prevDiv' + nodeCount).removeClass('blinkingRed');
		$("#node"+ nodeCount +", #line11").remove();
		$('#last').addClass('opacity00');
		if ($('#dynamicNodes .nodes').length == 0) {
			introNextSteps('#algorithmStepsDiv', 'Step2');
			$('.introjs-nextbutton').show();
			$('.introjs-tooltip').scrollTo('.introjs-nextbutton', 500);
		} else {
			$('#s4').css('background-color', '');
			$('line').remove();
			changeIdsAtBegin(function() {
				for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
					if (i == 1) {
						svgAnimatingLineBottomToTop("#animationDiv", "#firstDiv", "#prevDiv1",
								"#svgId", "line"+ i +"", "arrow", true);
					} else {
						svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#prevDiv"+ (i) +"",
								"#svgId", "line"+ i +"", "arrow", true);
						svgAnimatingLineLeftToRight("#animationDiv", "#prevDiv"+ (i) +"", "#nextDiv"+ (i - 1) +"",
								"#svgId", "line1"+ i +"", "arrow", false);
					}
				}
				if (delNum == 1) {
					introNextSteps('#algorithmStepsDiv', 'Step3');
				} else if (delNum == 3) {
					introNextSteps('#algorithmStepsDiv', 'Step6');
				} else if (delNum == 2) {
					introNextSteps('#algorithmStepsDiv', 'Step7');
				}
				$('.introjs-nextbutton').show();
				$('.introjs-tooltip').scrollTo('.introjs-nextbutton', 500);
			});
		}
	}});
}

function ifSingleNodePresent() {
	$(".user-btn, #btn").remove();
	$('#tempVal').text('');
	zoomInEffect("#posVal", function() {
		//createDynamicNodes(1);
		$("#data1").text("20");
		$('#firstNode, #node1, #data1').removeClass('opacity00');
		$("#prev1, #next1").text("NULL").removeClass("opacity00");
		$('#firstVal').text($('.data-address:first').text());
		regenerateArrows(true);
		appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNullAnimation');
	});
}


function multipleNodes() {
	$('.user-btn, #btn').remove();
	$('#tempVal').text('');
	zoomInEffect("#posVal", function() {
		$("#position").text(delNum);
		zoomInEffect("#position", function() {
			$('#firstNode').removeClass('opacity00');
			setTimeout(function() {
				$('#firstVal').text($('.data-address:first').text());
				for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++ ) {
					$("#prev" + (i + 1)).text($("#dataAddress" + (i)).text()).removeClass("opacity00");			
					$('#data' + i).text(i+'0').removeClass('opacity00');
					$('#node'+ i).removeClass('opacity00');
					$('#line' + i).css('opacity', '1');
				}
				$("#prev1").text("NULL").removeClass("opacity00");
				//$("#next2").text("NULL").removeClass("opacity00");
				regenerateArrows(true);
				appendNextBtn('.introjs-tooltipbuttons', 'firstNotEqNullAnimation');
			},500);
		});
	});
}

function regenerateArrows(flag) {
	for (var i = 1; i <= $('#dynamicNodes .nodes').length; i++) {
		if (i == 1) {
			svgAnimatingLineBottomToTop("#animationDiv", "#firstDiv", "#prevDiv1",
					"#svgId", "line"+ i +"", "arrow", flag);
		} else {
			svgAnimatingLineRightToLeft("#animationDiv", "#nextDiv"+ (i - 1) +"", "#prevDiv"+ (i) +"",
					"#svgId", "line"+ i +"", "arrow", flag);
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

function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, flag, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var y2 = $(selector2).offset().top - parentOffset.top;
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1, flag);
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
	$('.introjs-tooltip').scrollTo(typingId, 500);
}

function appendNodes() {
	$('line').remove();
	$('#dynamicNodes').empty();
	for (var i = 1; i < 4; i++ ) {
		createDynamicNodes(i);
		$("#next" + i).text(randomAddress).removeClass("opacity00");
	}
	$('#dynamicNodes .next-span:first').text($('.data-address').eq(1).text());
	$('#dynamicNodes .next-span').eq(1).text($('.data-address').eq(2).text());
	$('#dynamicNodes .next-span:last').text('NULL');
	
	$("#val").text(1);
	$('#firstNode').addClass('opacity00')
	$('#prev, #iVal1, #last, #posVal, #position').addClass('opacity00');
	$('#prevVal, #lastVal').text("");
	$('.introjs-tooltip').css('height','');
	$('.introjs-tooltip').removeClass('hide');
}