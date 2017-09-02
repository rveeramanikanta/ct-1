var buttonNames = ['Add Nodes', 'Insert At End', 'Insert At Position', 'Delete At End', 'Delete At Position', 'Traverse List'];
var buttonName, printfCount, outPutCount, iVal, lastNodeCount, lineCount = nodeCount = 1;
var lineFlag = false;

function dCllReadyFunction() {
	preStructTypeList();
	appendButtons();
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	initIntroJS();
}

function appendButtons() {	//append double linked list operation (buttons)
	for (var i = 0; i < buttonNames.length; i++) {
		var buttonId = buttonNames[i].charAt(0).toLowerCase() + buttonNames[i].substring(1, buttonNames[i].length);
		$('#buttonDiv').append('<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="'
							+ buttonId.split(" ").join("") + '">' + buttonNames[i] + ' </span></div>');
	}
}

function declareNodesWhenFunctionCall(id1, id2, nodeName, nodeNameText, callBackFunction) {	//extra node declaration 
	$('#declareNodes').append('<div class="col-xs-1  extraNode opacity00 padding00" id=' + id1 + '>'
					+ '<div class="col-xs-12 box padding00"><span id=' + id2 + ' class="extrNodeVal ct-brown-color ct-fonts inline-style"></span>'
					+ '</div><div class="text-center col-xs-12 padding00 ct-green-color" id=' + nodeName + '>' + nodeNameText + '</div></div> ');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function getRandomInt(min, max) { //access random address
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(val) { //dynamically create a empty new node
	var randomAddress = getRandomInt(1000, 5000);
	var t = $('#posVal').text();
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
	if (buttonName == 'insertAtPosition' && $('.nodes').length != 0) {
		$('#declareNodes').after('<div class="col-xs-10 col-xs-offset-1 padding00" id="posNodes"></div>');
		$('#posNodes').append(x);
		$('#insertAtPosition').addClass('insert-position');
		if ($('.nodes').length == t) {
			$('#insertAtPosition').addClass('insert-endpos');
		} else if (buttonName == 'insertAtPosition' && (t != 1 && t < $('.nodes').length)) {
			$('#insertAtPosition').addClass('insert-middle');
		}
	} else {
		$('#dynamicNodes').append(x);
		if ($('.nodes').length > 4) {
			$('#node' + val).css({'float' : 'right'});
		}
		if ($('.nodes').length == 5) {
			$('#line11, #line13').remove();
			svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv" + lastNodeCount, "#svgId", "line11", "arrow");
			svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
		}
	}
}

function preStructTypeList() {	//declare structure type and first node to null
	$("#structTypelist").append('<span id="strcutSpan">struct listNode {\n'
					+ '\tint data;\n'
					+ '\tstruct listNode *prev;\n'
					+ '\tstruct listNode *next;\n'
					+ '};</span>\n'
					+ '<span id="typeDefDec">typedef struct listNode* nodeptr;</span>\n'
					+ '<span id="declareFirstNode">node first = NULL;</span>\n');
}

function preCreateNodeFunction() {	//pre create Node method
	$("#csllOperations").append('node createNode() {\n'
					+ '\t<span id="tmpCreate">node temp;</span>\n'
					+ '\t<span id="allocateMem">temp = (node) <span id="mallocMemoryAllocation">malloc(sizeof(struct listNode))</span>;</span>\n'
					+ '\t<span id="asgnNlToTmpPrev">temp -> prev = NULL;</span>\n'
					+ '\t<span id="asgnToNlToTmp">temp -> next = NULL;</span>\n'
					+ '\t<span id="returnTmp">return temp;</span>\n'
					+ '}\n');
}

function preAddNodeMthdInMain() {	//addNodes() in main()
	$('#inMain').append('<div id="addNodesMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="initFrstNlNX"><span id="frstInit">first = NULL;</span>\n<span id="xInit">int x;</span></span>\n'
					+ '<span id="printf1">printf("Enter an element : ");</span>\n'
					+ '<span id="scanf1">scanf("%d", &x);</span>\n'
					+ '<span id="wleXEqlToOne">while (<span id="whileCond">x != -1</span>) {</span>\n'
					+ '\t<span id="addNodesMethod">first = addNodes(first, x);</span>\n'
					+ '\t<span id="printf2">printf("Enter an element : ");</span>\n'
					+ '\t<span id="scanf2">scanf("%d", &x);</span>\n'
					+ '}</div>');
}

function preInsertAtEndMthdInMain() {	//insertAtEnd() in main
	$('#inMain').append('<div id="insertEndMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="initX">int x;</span>\n'
					+ '<span id="printf1">printf("Enter an element : ");</span>\n'
					+ '<span id="scanf1">scanf("%d", &x);</span>\n'
					+ '<span id="insertAtEndMethod">first = insertAtEnd(first, x);</span></div>');
}

function preTraverseListMthdInMain() {	//traverseList() in main
	$('#inMain').append('<div id="traverseMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="ifFstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
					+ '\t<span id="printf1">printf("Linked List is empty\\n");</span>\n'
					+ '} else {\n'
					+ '\t<div id="printf2" class="position">printf("The elements in Doubly Circular Linked\n\t\t\t\t\t List are : ");</div>\n'
					+ '\t<span id="traverseListMethod">traverseList(first);</span>\n'
					+ '}</div>');
}

function preInsertAtPositionMthdInMain() {	//insertAtPosition() in main
	$('#inMain').append('<div id="insertPosMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="initPosNX">int pos, x;</span>\n'
					+ '<span id="printf2">printf("Enter a position : ");</span>\n'
					+ '<span id="scanf2">scanf("%d", &pos);</span>\n'
					+ '<span id="printf1">printf("Enter an element : ");</span>\n'
					+ '<span id="scanf1">scanf("%d", &x);</span>\n'
					+ '<span id="posIfCond">if (<span id="ifCond">pos <= 0 || (pos > 1 && first == NULL)</span>) {</span>\n'
					+ '\t<div id="printf3" class="position">printf("No such position in Doubly Linked List"\n'
					+ '\t\t\t\t\t" so insertion is not possible\\n");</div>\n'
					+ '} else {\n'
					+ '\t<span id="insertAtPositionMethod">first = insertAtPosition(first, pos, x);</span>\n'
					+ '}</div>');
}

function preAddNodesMethod() {	//addNodes() & insertAtEnd()
	$('#csllMethodOperations').append('<div id="addNodesDiv"><span id="' + buttonName + 'MthdDec">node ' + buttonName + '('
					+ '<span id="decFstVar">node first</span>, <span id="decXVar">int x</span>) {</span>\n'
					+ '\t<span id="decTempNLstNde">node temp, lastNode = first;</span>\n'
					+ '\t<span id="createNodeMethod">temp = createNode();</span>\n'
					+ '\t<span id="streXValInTmpDt">temp -> data = x;</span>\n'
					+ '\t<span id="ifFrstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
					+ '\t\t<span id="streTmpToFrst">first = temp;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNxtEqlToNl">while (<span id="lstNxtEqlToNl">lastNode -> next != first</span>) {</span>\n'
					+ '\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t<span id="streTmpToLstNxt">lastNode -> next = temp;</span>\n'
					+ '\t\t<span id="streLstToTmpPrev">temp -> prev = lastNode;</span>\n'
					+ '\t}\n'
					+ '\t<span id="streFstToTmpNext">temp -> next = first;</span>\n'
					+ '\t<span id="streTmpToFstPrev">first -> prev = temp;</span>\n'
					+ '\t<span id="retnFrst">return first;</span>\n'
					+ '}</div>');
}

function preTraverseListMethod() {	//traverseList()
	$('#csllMethodOperations').append('<div id="traverseDiv"><span id="traverseListMthdDec">void traverseList('
									+ '<span id="decFstVar">node first</span>) {</span>\n'
									+ '\t<span id="decTempNLstNde">node lastNode = first;</span>\n'
									+ '\tdo {\n'
									+ '\t\t<span id="printf3">printf("%d --> ", lastNode -> data);</span>\n'
									+ '\t\t<span id="lstNxtToLst">lastNode = lastNode -> next;</span>\n'
									+ '\t<span id="wleLstEqlToFst">} while (<span id="lstEqlToFst">lastNode != first</span>);</span>\n'	
									+ '}</div>');
}

function preInsertAtPositionMethod() {	//insertAtPosition()
	$('#csllMethodOperations').append('<div id="insertPosDiv"><span id="insertAtPositionMthdDec">node insertAtPosition('
								+ '<span id="decFstVar">node first</span>, <span id="decPosVar">int pos</span>,'
								+ ' <span id="decXVar">int x</span>) {</span>\n'
								+ '\t<span id="decTempNLstNde">node temp, lastNode = first;</span>\n'
								+ '\t<span id="decIntI">int i;</span>\n'
								+ '\t<span id="frLoop">for (<span id="iInit">i = 1;</span> <span id="frCond">i < (pos - 1)</span>;'
								+ ' <span id="iInc">i++</span>) {</span>\n'
								+ '\t\t<span id="ifLstNxtEqlToFst">if (lastNode -> next == first) {</span>\n'
								+ '\t\t\t<span id="printf4">printf("No such position in Doubly Linked List so insertion is not possible\\n");</span>\n'
								+ '\t\t\t<span id="retnFst1">return first;</span>\n'
								+ '\t\t}\n'
								+ '\t\t<span id="strLstNxtToLst1">lastNode = lastNode -> next;</span>\n'
								+ '\t}\n'
								+ '\t<span id="createNodeMethod">temp = createNode();</span>\n'       
								+ '\t<span id="streXValInTmpDt">temp -> data = x;</span>\n'	
								+ '\t<span id="posEqlToOne">if (pos == 1) {</span>\n'
								+ '\t\t<span id="fstToNul">if (first == NULL) {</span>\n'
								+ '\t\t\t<span id="tmpToTmpNxt">temp -> next = temp;</span>\n'
								+ '\t\t\t<span id="tmpToTmpPrev">temp -> prev = temp;</span>\n'
								+ '\t\t} else {\n'
								+ '\t\t\t<span id="whileLstNxtEqlToNl">while(<span id="lstNxtEqlToNl">lastNode -> next != first</span>) {</span>\n'
								+ '\t\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
								+ '\t\t\t}\n' 
								+ '\t\t\t<span id="streTmpToLstNxt">lastNode -> next = temp;</span>\n'
								+ '\t\t\t<span id="streLstToTmpPrev">temp -> prev = lastNode;</span>\n'
								+ '\t\t\t<span id="streFstToTmpNext">temp -> next = first;</span>\n'
								+ '\t\t\t<span id="streTmpToFstPrev">first -> prev = temp;</span>\n'
								+ '\t\t}\n'
								+ '\t\t<span id="streTmpToFrst">first = temp;</span>\n'
								+ '\t} else {\n'
								+ '\t\t<span id="lstNdeToTmpPrev">temp -> prev = lastNode;</span>\n'
								+ '\t\t<span id="lstNxtToTmpNxt">temp -> next = lastNode -> next;</span>\n'
								+ '\t\t<span id="tmpToLstNxt">lastNode -> next = temp;</span>\n'
								+ '\t\t<span id="tmpTotmpNxtPrev">temp -> next -> prev = temp;</span>\n'
								+ '\t}\n'
								+ '\t<span id="retnFrst">return first;</span>\n'
								+ '}</div>')
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
					element: '#headingSection',
					intro: ''
				}, {
					element: '#structTypelist',
					intro: '',
					tooltipClass: 'hide'
		}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case 'structTypelist':
					$('#structTypelist').removeClass('opacity00');
					customIntroNxtStep('#strcutSpan');
				break;
				case 'strcutSpan':
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the declaration of a new <b class="ct-code-b-yellow">struct</b> type named '
							+ '<b class="ct-code-b-yellow">listNode</b>.<br/><br/> It contains three members : '
							+ '<ul><li><b class="ct-code-b-yellow">data</b> which is of type int.</li>'
							+ '<li><b class="ct-code-b-yellow">*prev</b> which is a pointer to the <b class="ct-code-b-yellow">previous</b> node.</li>'
							+ '<li><b class="ct-code-b-yellow">*next</b> which is a pointer to the <b class="ct-code-b-yellow">next</b> node.</li></ul>';
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps('#typeDefDec');
						$(".introjs-nextbutton").show();
					});
				break;
				case 'typeDefDec':
					$(".introjs-tooltip").removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">typedef</span> creates a <span class="ct-code-b-yellow">node</span> as a '
						+ ' new type <span class="ct-code-b-yellow">pointer</span> to <span class="ct-code-b-yellow">struct listNode</span>. '
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps('#declareFirstNode');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'declareFirstNode':
					$('.introjs-tooltip').removeClass('hide');
					text = 'A variable <b class="ct-code-b-yellow">first</b> is of type <b class="ct-code-b-yellow">node</b> is declared and'
							+ ' initialized with <b class="ct-code-b-yellow">NULL</b>.';
					typing('.introjs-tooltiptext', text, function() {
						$('#animationParent').removeClass('opacity00');
						introNextSteps('#animationDiv', 'initFstToNul');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'buttonDiv':
					lineFlag = false;
					$('#buttonDiv, .btn, #insertAtPosition').removeClass('opacity00 disabled insert-position insert-endpos insert-middle');
					$('#line11, #line12, #line13, .extraNode, .fa').remove();
					$('#xValeDecInMain, #xValInMain, #posValDec, #posVal').addClass('opacity00');
					if ($('.nodes').length == 8) {
						$('#insertAtEnd, #insertAtPosition').addClass('disabled');
					}
					outPutCount = printfCount = lastNodeCount = 1;
					nodeCount = $('.nodes').length + 1;
					if ($('.nodes').length == 8) {
						$('#insertAtPosition, #insertAtEnd, #insertAtPosition').addClass('disabled');
					}
					$('#addNodes').off().click(function() {
						$('polyline').remove();
						$("#dynamicNodes").empty();
						$('line').remove();
						nodeCount = lineCount = 1;
						buttonCorrespondingText('addNodes');
					});
					$('#insertAtEnd').off().click(function() {
						buttonCorrespondingText('insertAtEnd');
					});
					$('#traverseList').off().click(function() {
						buttonCorrespondingText('traverseList');
					});
					$('#insertAtPosition').off().click(function() {
						buttonCorrespondingText('insertAtPosition');
					});
				break;
				case 'inMain':
					$('#inMain').removeClass('opacity00');
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'addNodes':
							preAddNodeMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#initFrstNlNX');
						break;
						case 'insertAtEnd':
							preInsertAtEndMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#initX');
						break;
						case 'traverseList':
							preTraverseListMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#ifFstEqlToNl');
						break;
						case 'insertAtPosition':
							preInsertAtPositionMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#initPosNX');
						break;
					}
				break;
				case 'animationDiv':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'initFstToNul':
							transferEffect('#declareFirstNode', '#firstNodeInMain', function() {
								customIntroNxtStep('#buttonDiv');
							});
						break;
						case 'assignFrstToNL':
							$('#firstVal').text('NULL');
							transferEffect('#frstInit', '#firstNodeInMain', function() {
								transferEffect('#xInit', '#xValeDecInMain', function() {
									printfCount = 1;
									customIntroNxtStep('#printf1', 'printText');
								});
							});
						break;
						case 'storeXVal':
							$('#xValInMain').text($('#nodeVal' + outPutCount).val());
							$('#nodeVal' + outPutCount).attr('disabled', 'disabled');
							fromEffectWithTweenMax('#nodeVal' + outPutCount, '#xValInMain', false, function() {
								if (buttonName == 'addNodes') {	//addNodes
									customIntroNxtStep('#wleXEqlToOne');
								} else if (buttonName == 'insertAtEnd') {	//insertAtEnd
									customIntroNxtStep('#insertAtEndMethod', 'callToMethod');
								} else {	//insertAtPosition
									customIntroNxtStep('#posIfCond');
								}
							});
						break;
						case "tempsDeclar" :
							transferEffect("#tmpCreate", "#tmpNde", function() {
								customIntroNxtStep("#allocateMem");
							});
						break;
						case "nodeMemAllo" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'Let us assume <span class="ct-code-b-yellow">malloc()</span> allocates a memory '
									+ 'to its members  <span class="ct-code-b-yellow">prev</span>, <span class="ct-code-b-yellow">data</span> and'
									+ ' <span class="ct-code-b-yellow">next</span> at address'
									+ ' <span class="ct-code-b-yellow">' + $("#dataAddress" + (nodeCount - 1)).text() +'</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								appendNextBtn('displayNodeDataAndNext');
							});
						break;
						case 'tempPrevToNul':
						case 'tempNextToNul':
							var text;
							if (animateStep == 'tempNextToNul') {
								text = 'next';
								introNextSteps('#returnTmp');
							} else {
								text = 'prev';
								introNextSteps('#asgnToNlToTmp');
							}
							$('#' + text + (nodeCount - 1)).text('NULL').addClass('opacity00');
							zoomInEffect('#' + text + (nodeCount - 1), function() {
								setTimeToIntroGoNextStep();
							});
						break;
						case 'streRetnFstVal':
							fadeInBounceEffectWithTimelineMax('#firstNodeVal', '#firstVal', false, function() {
								$('.fa, #line15, #line10').remove();
								if ($('#firstVal').text() != 'NULL') {
									svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv1', '#svgId', 'line10', 'arrow');
								}
								$("#csllMethodOperations, #xValDecInAdd, #xValInAdd").addClass('opacity00');
								$("#csllMethodOperations").empty();
								if ($('#insertAtPosition').hasClass('insert-position')) {
									$('.introjs-tooltip').removeClass('hide');
									text = 'Now rearrange the nodes';
									typing('.introjs-tooltiptext', text, function() {
										nextBtnWithoutCalling(function() {
											orderingNodes(nodeCount - 1);
										});
									});
								} else {
									$('.extraNode, #line11, #line12, #line13').remove();
									introjs.refresh();
									if (buttonName == 'addNodes') {
										$('.extraNode, #line11, #line12').remove();
										outPutCount++;
										printfCount = 2
										customIntroNxtStep('#printf2', 'printText');
									} else {
										customIntroNxtStep('#buttonDiv');
									}
								}
							});
						break;
						case 'xInit':	//insertAtEnd
							transferEffect('#initX', '#xValeDecInMain', function() {
								printfCount = 1;
								customIntroNxtStep('#printf1', 'printText');
							});
						break;
						case 'initXPos':	//insertAtPosition
							transferEffect('#initPosNX' , '#posValDec', function() {
								transferEffect('#initPosNX', '#xValeDecInMain', function() {
									printfCount = 2;
									customIntroNxtStep('#printf2', 'printText');
								});
							});
						break;
						case 'storePosVal':	//insertAtPosition
							$('#posVal').text($('#nodeVal' + outPutCount).val());
							$('#nodeVal' + outPutCount).attr('disabled', 'disabled');
							fromEffectWithTweenMax('#nodeVal' + outPutCount, '#posVal', false, function() {
								printfCount = 1;
								outPutCount++;
								customIntroNxtStep('#printf1', 'printText');
							});
						break;
					}
				break;
				case 'initFrstNlNX':
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, <ul>'
							+ '<li><span class="ct-code-b-yellow">first</span> is initialized with <span class="ct-code-b-yellow">NULL</span>.</li>'
							+ '<li>A variable <span class="ct-code-b-yellow">x</span> is of type int is declared.</li>';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animationDiv', 'assignFrstToNL');
						$('.introjs-nextbutton').show();
					}); 
				break;
				case 'printf' + printfCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'printText':
							customIntroNxtStep('#consoleId', 'printNodeValText');
						break;
						case 'listEmpty':	//traverse list empty
							customIntroNxtStep('#consoleId', 'listEmpty');
						break;
						case 'displayElemnts':	//traverse display elements
							customIntroNxtStep('#consoleId', 'displayList');
						break;
						case 'noSuchPosition':	//insertPosition no element found
							customIntroNxtStep('#consoleId', 'noSuchPosition');
						break;
					}
				break;
				case 'scanf' + printfCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'scanfReadval':
							customIntroNxtStep('#consoleId', 'enterNodeVal', 'left');
						break;
					}
				break;
				case 'consoleId' :
					$("#consoleId, #consoleEnter").removeClass("opacity00");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "printNodeValText":	//addNodesMethod & insertAtEnd & insertAtPosition
							if (buttonName == 'insertAtPosition' && printfCount == 2) {
								text1 = 'a position';
							} else {
								text1 = 'an element';
							}
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter ' + text1 + ' : <input id="nodeVal'+ outPutCount +'"' 
									+ 'class="user-text visibility-hidden" placeholder="number" maxlength="3" size="4"></span><br/>');
							customIntroNxtStep('#scanf' + printfCount, 'scanfReadval');
						break;
						case "enterNodeVal" :	//addNodesMethod & insertAtEnd & insertAtPosition
							$('.introjs-tooltip').removeClass('hide');
							if (buttonName == 'insertAtPosition' && printfCount == 2) {
								events("#nodeVal" + outPutCount);
								introNextSteps('#animationDiv', 'storePosVal');
								text = 'Enter <span class="ct-code-b-yellow">position</span> of the node where you want to'
										+ ' <span class="ct-code-b-yellow">insert</span>.';
							} else {
								var t = $(".nodes").length == 4;
								if (t && buttonName == 'addNodes') {
									addNegativeValuEvent("#nodeVal" + outPutCount)
									var text = "Here, we are restricted to allow only <span class='ct-code-b-yellow'>5</span> nodes. So, please enter "
											+ "the <span class='ct-code-b-yellow'>node data</span> as <span class='ct-code-b-yellow'>-1</span> only.";
								} else {
									events("#nodeVal" + outPutCount);
									var text = "Enter the <span class='ct-code-b-yellow'>node data</span> value.";
								}
								introNextSteps("#animationDiv", "storeXVal");
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + outPutCount).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
							});
						break;
						case 'listEmpty':	//traverse List empty
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Linked List is empty</span>');
							customIntroNxtStep('#buttonDiv');
						break;
						case 'displayList':	//traverse
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The elements in Doubly Circular Linked List are : </span>');
							customIntroNxtStep('#traverseListMethod');
						break;
						case 'prntngElem':	//traverse list elements
							$('#animationDiv').addClass('z-index1000000');
							$('#print' + outPutCount).append('<span id="outData' + lastNodeCount + '" class="ct-code-b-yellow"></span>'
									+ '<span class="opacity00" id="arrow' + lastNodeCount	+ '"> -->&nbsp;</span></span>');
							$("#lastNodeVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
								svgAnimatingLineTopToBottom('#animationDiv', '#lastNode', '#dataDiv' + lastNodeCount, '#svgId', 'line45', 'arrow',
             										function() {
									$("#line45").remove();
									fadeInFromEffectWithTimelineMax("#data" + lastNodeCount, "#outData" + lastNodeCount, true, function() {
										zoomInEffect("#arrow" + lastNodeCount, function() {
											customIntroNxtStep('#csllMethodOperations', 'lstNxtToLst', 'left');
										});
									});
								});
							});
						break;
						case 'noSuchPosition':	//insertAtPosition
							outPutCount++;
							$('#consoleEnter').append('<span id="print' + outPutCount + '">No such position in Doubly Linked List'
									+ ' so insertion is not possible</span>');
							var cond = $('#posVal').text() <= 0 || ($('#posVal').text() > 1 && $('#firstVal').text() == 'NULL');
							if (cond) {
								$('#posValDec, #posVal').addClass('opacity00');
								customIntroNxtStep('#buttonDiv');
							} else {
								customIntroNxtStep('#csllMethodOperations', 'retnFst1', 'left');
							}
						break;
					}
				break;
				case 'wleXEqlToOne':
					var t = $('#nodeVal' + outPutCount).val();
					conditionChecking('#whileCond', 'x', '!=', '-1', t, false, '', function() {
						var cond = t != -1;
						conditionMessage(cond, function() {
							if (cond) {
								introNextSteps('#addNodesMethod', 'callToMethod');
							} else {
								introNextSteps('#buttonDiv');
							}
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case 'insertAtPositionMethod':	//insertAtPosition
				case 'insertAtEndMethod':	
				case 'addNodesMethod':	
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'callToMethod':
							introNextSteps("#csllMethodOperations", buttonName + "MthdDec",  "left");
							callingMethodWithFrstNVar('x', '#xValInMain');
						break;
						case 'retnFstVal':
							if (buttonName == 'insertAtPosition') {
								$('#countValDec, #countVal, #opValDec, #opVal, #xValDecInAdd, #xValInAdd').addClass('opacity00');
							}
							introNextSteps('#animationDiv', 'streRetnFstVal', 'left');
							retnValWithFrstNVar();
						break;
					}
				break;
				case 'csllMethodOperations':
					$('#csllMethodOperations').removeClass('opacity00');
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'insertAtEndMthdDec': 
						case 'addNodesMthdDec':
							preAddNodesMethod();
							introjs.refresh();
							initFrstNVarInMethod('#' + buttonName + 'MthdDec', 'x', '#xValInMain');
						break;
						case 'returnTempVal':
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">createNode()</span> method returns a value (i.e., '
									+ '<span class="ct-code-b-yellow">' + $("#dataAddress" + (nodeCount - 1)).text() 
									+'</span>) and stores it in the variable <span class="ct-code-b-yellow">temp</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#createNodeMethod').effect( "highlight",{color: 'blue'}, 1000);
								$('#animationDiv').addClass('z-index1000000');
								appendNextBtn('storeAddAndData');
							});
						break;
						case 'traverseMtdDec':	//traverse
							preTraverseListMethod();
							introjs.refresh();
							arrow('#' + buttonName + 'MthdDec', '#' + buttonName + 'MthdDec', function() {
								$('.introjs-tooltip').removeClass("hide");
								text = 'Here, <span class="ct-code-b-yellow">first</span> node is initialized with the value passed by the'
										+ ' <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br> i.e.,' 
										+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstNodeVal').text() + ')</span>.';
								typing('.introjs-tooltiptext', text, function() {
									methodPassedValFrstNXInit();
								});
							});
						break;
						case 'lstNxtToLst':	//traverse
							arrow('#printf3', '#lstNxtToLst', function() {
								whileTrueConText();
							});
						break;
						case 'insertAtPositionMthdDec':	//insertAtPosition
							preInsertAtPositionMethod();
							introjs.refresh();
							initFrstNVarInMethod('#' + buttonName + 'MthdDec', 'x', '#xValInMain');
						break;
						case 'retnFst1':	//insertAtPosition
							arrow('#printf4', '#retnFst1', function(){
								retrnFrst('first', '#firstNodeVal');
							});
						break;
					}
				break;
				case 'csllOperations':
					$('#csllOperations').removeClass('opacity00');
					preCreateNodeFunction();
					introjs.refresh();
					customIntroNxtStep('#tmpCreate');
				break;
				case 'tmpCreate':
					$('.introjs-tooltip').removeClass('hide');
					text = 'A variable <span class="ct-code-b-yellow">temp</span> is of type <span class="ct-code-b-yellow">node</span> is declared.';
					typing('.introjs-tooltiptext', text, function() {
						declareNodesWhenFunctionCall("tmpNde", "tmpNdeVal", "tmpNdeInCreMtd", "temp<sub>createNode</sub>", function() {
							$('#tmpNde').addClass('margin-left30');
							introNextSteps("#animationDiv", 'tempsDeclar');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "allocateMem" :
					$('.introjs-tooltip').removeClass("hide");
					text = '<ul><li class = "opacity00" id="li1">The <span class="ct-code-b-yellow">'
							+ 'sizeof(struct listNode)</span> returns the size '
							+ ' occupied by a list node which contains <span class="ct-code-b-yellow">three</span>'
							+ ' fileds <span class="ct-code-b-yellow">prev</span>, <span class="ct-code-b-yellow">data</span> and'
							+ ' <span class="ct-code-b-yellow">next</span>.</li> '
							+ ' <li class = "opacity00" id="li2">The <span class="ct-code-b-yellow">malloc()</span> function allocates memory '
							+ ' <span class="ct-code-b-yellow">dynamically</span> '
							+ ' to the size that is occuiped by the <span class="ct-code-b-yellow">listNode</span>'
							+ ' return by the above statement.</li>'
							+ ' <li class = "opacity00" id="li3">The address returned by the <span class="ct-code-b-yellow">malloc()</span> is '
							+ ' stored in <span class="ct-code-b-yellow">temp</span>.</li></ul>'
					$(".introjs-tooltiptext").append(text);
					TweenMax.to('#li1', 1, {opacity: 1, onComplete: function() {
						TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
								nodeCount++;
								createDynamicNodes(nodeCount - 1);
								introNextSteps("#animationDiv", "nodeMemAllo", 'left');
								$('.introjs-nextbutton').show();
							}});
						}});
					}});
				break;
				case 'asgnToNlToTmp':
				case 'asgnNlToTmpPrev':
					var text;
					if (elementId == 'asgnToNlToTmp') {
						text = 'next';
						introNextSteps('#animationDiv', 'tempNextToNul');
					} else {
						text = 'prev';
						introNextSteps('#animationDiv', 'tempPrevToNul');
					}
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, <span class="ct-code-b-yellow">' + text + '</span> member of the <span class="ct-code-b-yellow">temp</span>'
							+ ' node is initialized with <span class="ct-code-b-yellow">NULL</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				break;
				case "returnTmp" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'The <span class="ct-code-b-yellow">return</span> statement returns the temp value (i.e., <span class="ct-code-b-yellow">'
							+ $("#dataAddress" + (nodeCount - 1)).text() +'</span>).';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#csllMethodOperations", "returnTempVal", 'left');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'initX':	//insertAtEnd
					$('.introjs-tooltip').removeClass('hide');
					text = 'An int variable <span class="ct-code-b-yellow">x</span> is declared.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animationDiv', 'xInit');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'ifFstEqlToNl':	//traverse
					ifConText($('#firstVal').text());
				break;
				case 'traverseListMethod':	//traverse
					introNextSteps('#csllMethodOperations', 'traverseMtdDec', 'left');
					callingMethodWithFrst();
				break;
				case 'initPosNX':	//insertAtPosition
					$('.introjs-tooltip').removeClass('hide');
					text = 'Two variables <span class="ct-code-b-yellow">pos</span> and <span class="ct-code-b-yellow">x</span> of'
							+ ' type int are declared.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animationDiv', 'initXPos');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'posIfCond':	//insertAtPosition
					$('.introjs-tooltip').removeClass('hide');
					text = 'Now check the condition : <br>&nbsp;<span id="ifCondition" class="position ct-code-b-yellow opacity00">'
							+ '<span id="first" class="position">pos</span> <= 0 || (<span id="second" class="position">pos</span> > 1 && '
							+ '<span id="third" class="position">first</span> == NULL)</span>'
							+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appendSpan"></div>';
					$('.introjs-tooltiptext').append(text);
					fromEffectWithTweenMax('#ifCond', '#ifCondition', true, function() {
						nextBtnWithoutCalling(function() {
							var t = $('#posVal').text();
							highlightNFlip('#first', t, function() {
								highlightNFlip('#second', t, function() {
									highlightNFlip('#third', $('#firstVal').text(), function() {
										var cond = t <= 0 || (t > 1 && $('#firstVal').text() == 'NULL');
										conditionMessage(cond, function() {
											if (cond) {
												printfCount = 3;
												introNextSteps('#printf3', 'noSuchPosition');
											} else {
												if (t == 1 && $('.nodes').length > 0) {
													nodeCount = 1;
													lastNodeCount = 2;
													changeIdsBasedOnCond(2);
												}
												introNextSteps('#insertAtPositionMethod', 'callToMethod');
											}
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn about <span class="ct-code-b-yellow">Doubly circular linked list</span> operations.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function methodPassedValFrstNXInit() { //addNodes() & insertAtEnd() & traverseList() & insertAtPosion()
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introjs.refresh();
		nextBtnWithoutCalling(function() {
			$('#animationDiv').addClass('z-index1000000');
			varDecNInit('#decFstVar', '#firstNode', '#firstNodeVal', '#firstVal', function() {
				if ($('#firstNodeVal').text() != "NULL") {
					$("#line11").remove();
					svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv" + lastNodeCount, "#svgId", "line11", "arrow");
				}
				if (buttonName == 'insertAtPosition') {
					$('#extraNode').text('').append('pos<sub>('  + buttonName + ')</sub>');
					varDecNInit('#decPosVar', '#opValDec', '#opVal', '#posVal', function() {
						xDeclaration();
					});
				} else if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
					xDeclaration();
				} else {	//traverseList
					appendNextBtn('initTempAndLstToFrst');
				}
			});
		});
	});
}

function xDeclaration() {
	$("#subVal").text('(' + buttonName + ')');
	varDecNInit('#decXVar', '#xValDecInAdd', '#xValInAdd', '#xValInMain', function() {	
		appendNextBtn('initTempAndLstToFrst');
	});
}

function initTempAndLstToFrst() { //addNodes() && insertAtEnd() && traverseList() && insertAtPosion()
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#'+ buttonName +'MthdDec', '#decTempNLstNde', function() {
		text1 = 'Here we declared';
		text2 = ' two nodes <span class="ct-code-b-yellow">temp</span> and';
		text3 = ' <span class="ct-code-b-yellow">lastNode</span>. <span class="ct-code-b-yellow">lastNode</span> is initialized with the '
			+ '<span class="ct-code-b-yellow">first</span> value (i.e., <span class="ct-code-b-yellow"> ' + $('#firstVal').text() + '</span>).';
		if (buttonName == 'traverseList') {
			text = text1 + text3;
		} else {
			text = text1 + text2 + text3;
		}
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCalling(function() {
				if (buttonName != 'traverseList') {
					declareNodesWhenFunctionCall('tempNode', 'tempNodeVal', 'tempNodeInAddMtd', 'temp<sub>' + buttonName + '</sub>');
					$("#tempNode").addClass("margin-left30");
					transferEffect('#decTempNLstNde', '#tempNode');
				}
				declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInAddMtd", "lastNode", function() {
					$("#lastNode").addClass("margin-left30");
					varDecNInit('#decTempNLstNde', '#lastNode', '#lastNodeVal', '#firstNodeVal', function() {
						if ($('#firstNodeVal').text() != "NULL") {
							$("#line13").remove();
							svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
						}
						nextBtnWithoutCalling(function() {
							if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
								arrow('#decTempNLstNde', '#createNodeMethod', function() {
									callToCreateMethod();
								});
							} else if (buttonName == 'insertAtPosition') {	
								intIDec();
							} else {	//traverseList
								arrow('#decTempNLstNde', '#printf3', function() {
									printData();
								});
							}
						});
					});
				});
			});
		});
	});
}

function callToCreateMethod() {
	$('#animationDiv').removeClass('z-index1000000');
	text = 'Here, we are calling <span class="ct-code-b-yellow">createNode()</span> method and the return value is stored in'
			+ ' <span class="ct-code-b-yellow">temp</span>.';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#csllOperations');
		$('.introjs-nextbutton').show();
	});
}


function displayNodeDataAndNext() {
	$('.introjs-duplicate-nextbutton').remove();
	transferEffect('#mallocMemoryAllocation', '#node'+(nodeCount - 1), function() {
		nextBtnWithoutCalling(function() {
			text = 'Now, the <span class="ct-code-b-yellow">address</span> (i.e. <span class="ct-code-b-yellow">'
					+ $("#dataAddress" + (nodeCount - 1)).text() +')</span> of the memory allocated '
					+ 'by the <span class="ct-code-b-yellow">malloc()</span> method is stored in <span class="ct-code-b-yellow">temp</span>.';
			typing('.introjs-tooltiptext' , text, function() {
				nextBtnWithoutCalling(function() {
					$('#tmpNdeVal').text($('#dataAddress' + (nodeCount - 1)).text());
					fromEffectWithTweenMax('#dataAddress' + (nodeCount - 1), '#tmpNdeVal', false, function() {
						$('#line16').remove();
						if ($('#insertAtPosition').hasClass('insert-position')) {
							svgAnimatingLineBottomToTop('#animationDiv', '#tmpNde div:first', '#dataDiv' + (nodeCount - 1), '#svgId', 'line16', 'arrow');
						} else {
							svgAnimatingLineTopToBottom('#animationDiv', '#tmpNde', '#dataDiv' + (nodeCount - 1), '#svgId', 'line16', 'arrow');
						}
						introNextSteps('#asgnNlToTmpPrev');
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}

function storeAddAndData() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#tempNodeVal').text($('#tmpNdeVal').text());
	fromEffectWithTweenMax('#tmpNdeVal', '#tempNodeVal', false, function() {
		if ($('#insertAtPosition').hasClass('insert-position')) {
			svgAnimatingLineBottomToTop("#animationDiv", "#tempNode div:first", "#dataDiv" + (nodeCount - 1), "#svgId", "line12", "arrow", function() {
				storeAddAndDataNext();
			});
		} else {
			svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv" + (nodeCount - 1), "#svgId", "line12", "arrow", function() {
				storeAddAndDataNext();
			});
		}
	});
}


function storeAddAndDataNext() {
	$("#tmpNde, #line16").remove();
	$("#csllOperations").addClass('opacity00').empty();
	appendNextBtn('storeXValText');
}

function storeXValText() {
	$('.introjs-duplicate-nextbutton').remove();
	text = 'Here, <span class="ct-code-b-yellow">x</span> value (i.e., <span class="ct-code-b-yellow">' + $("#xValInMain").text()
			+ '</span>) is stored in <span class="ct-code-b-yellow">data</span> member of <span class="ct-code-b-yellow">temp</span> node.'
	typing('.introjs-tooltiptext', text, function() {
		arrow("#createNodeMethod", "#streXValInTmpDt", function() {
			appendNextBtn('storeXValAnim');
		});
	});
}

function storeXValAnim() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#data" + (nodeCount - 1)).text($("#xValInAdd").text());
	fromEffectWithTweenMax("#xValInAdd", "#data" + (nodeCount - 1), false, function() {
		nextBtnWithoutCalling(function() {
			if (buttonName == 'insertAtPosition') {
				arrow('#streXValInTmpDt', '#posEqlToOne', function() {
					ifPosIsOne();
				});
			} else {
				arrow('#streXValInTmpDt', '#ifFrstEqlToNl', function() {
					ifConText($('#firstVal').text());
				});
			}
		});
	});
}

function ifConText(t) {
	conditionChecking('#fstToNul', 'first', '==', 'NULL', t, false, '', function() {
		var cond = t == 'NULL';
		conditionMessage(cond, function() {
			if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {	//addNodes & insertAtEnd
				nextBtnWithoutCalling(function() {
					if (cond) {
						arrow('#ifFrstEqlToNl', '#streTmpToFrst', function() {
							streFrstInTmp();
						});
					} else {
						arrow('#ifFrstEqlToNl', '#whileLstNxtEqlToNl', function() {
							lastNodeCount = 1;
							elseConText();
						});
					}
				});
			} else if (buttonName == 'traverseList') {	//traverseList
				if (cond) {
					printfCount = 1;
					introNextSteps('#printf1', 'listEmpty');
				} else {
					printfCount = 2;
					introNextSteps('#printf2', 'displayElemnts');
				}
				$('.introjs-nextbutton').show();
			} else if (buttonName == 'insertAtPosition') {	//insertAtPosition
				nextBtnWithoutCalling(function() {
					if (cond) {
						streTmpToTmpNxtNprev();
					} else {
						arrow('#fstToNul', '#whileLstNxtEqlToNl', function() {
							lastNodeCount = 2;
							elseConText();
						});
					}
				});
			}
		});
	});
}

function streFrstInTmp() {
	assignValfromOneVarToAnotherVar('temp', 'first', $('#tempNodeVal').text(), function() {
		storeValAndDrawLine('#tempNodeVal', '#firstNodeVal', 'line11', '#firstNode', function() {
			$('#animationDiv').removeClass('z-index1000000');
			if (buttonName == 'insertAtPosition') {	//insertAtPosition
				arrow('#streTmpToFrst', '#retnFrst', function() {
					retrnFrst('first', '#firstNodeVal');
				});
			} else {
				streFrstInsTmpNxt();
			}
		});
	});
}

function streFrstInsTmpNxt() {
	var selector = '#streTmpToFrst';
	if ($('.nodes').length != 1) {
		selector = '#streLstToTmpPrev'
		lastNodeCount += 1;
	} 
	arrow(selector, '#streFstToTmpNext', function() {
		streValFromOneToAnotherAndDrwCircleLine('first', 'temp -> next', '#firstNodeVal', '#next' + lastNodeCount,
				true, '#nextDiv' + lastNodeCount, '#prevDiv1', function() {
			arrow('#streFstToTmpNext', '#streTmpToFstPrev', function() {
				streValFromOneToAnotherAndDrwCircleLine('temp', 'first -> prev', '#tempNodeVal', '#prev1',
						false, '#prevDiv1', '#nextDiv' + lastNodeCount, function() {
					arrow('#streTmpToFstPrev', '#retnFrst', function() {
						retrnFrst('first', '#firstNodeVal');
					});
				});
			});
		}); 
	});
}

function elseConText() {
	var t = $('#next' + lastNodeCount).text().trim();
	conditionChecking('#lstNxtEqlToNl', 'lastNode -> next', '!=', 'first', t, true, $('#firstNodeVal').text(), function() {
		var con = t != $('#firstNodeVal').text();
		conditionMessage(con, function() {
			nextBtnWithoutCalling(function() {
				if (con) {
					arrow('#whileLstNxtEqlToNl','#strLstNxtToLst', function() {
						whileTrueConText();
					});
				} else {
					arrow('#whileLstNxtEqlToNl','#streTmpToLstNxt', function() {
						if (buttonName == 'insertAtPosition') {
							streLstNxtToTmp();
						} else {
							whileFalseConText();
						}
					});
				}
			});
		});
	});	
}

function whileFalseConText() { //lastNode -> next = temp
	assignValfromOneVarToAnotherVar('temp', 'lastNode -> next', $('#tempNodeVal').text().trim(), function() {
		var id1, id2, lFlag;
		if ($('.nodes').length > 5) {	//arrow reverse after length 5
			id1 = 'prev';
			id2 = 'next';
			lFlag = false;
		} else {
			id1 = 'next';
			id2 = 'prev';
			lFlag = true;
		}
		drawDoubleLine('#tempNodeVal', '#next' + lastNodeCount, '#' + id1 + 'Div'+ (lastNodeCount), 'line' + lineCount,
				'#' + id2 + 'Div'+ (lastNodeCount + 1), lFlag, function() {
			$('#pUpLine1').remove();
			nextBtnWithoutCalling(function() {
				arrow('#streTmpToLstNxt', '#streLstToTmpPrev', function() {
					streLstIntmpPrev();
				});
			});
		});
	});
}

function streLstIntmpPrev() {
	assignValfromOneVarToAnotherVar('lastNode', 'temp -> prev', $('#lastNodeVal').text().trim(), function() {
		var id1, id2, lFlag;
		if ($('.nodes').length < 5) {	//arrow reverse after length 5
			id1 = 'prev';
			id2 = 'next';
			lFlag = false;
		} else {
			id1 = 'next';
			id2 = 'prev';
			lFlag = true;
		}
		drawDoubleLine('#lastNodeVal', '#prev' + (lastNodeCount + 1), '#' + id1 + 'Div'+ (lastNodeCount + 1), 'line2' + lineCount,
					'#' + id2 + 'Div'+ (lastNodeCount), lFlag, function() {
			lineCount++;
			nextBtnWithoutCalling(function() {
				streFrstInTempNext();
			});
		});
	});
}

function drawDoubleLine(selector1, selector2, selector3, lineId, selector4, arrowFrom, callBackFunction) {
	$(selector1).parent().effect("highlight", {color : 'blue'}, 400);
	fadeInBounceEffectWithTimelineMax(selector1, selector2, false, function() {
		lineFlag = true;
		$(lineId).remove();
		if (arrowFrom) {
			if ($('.nodes').length == 5) {	//5th node
				svgAnimatingLineBottomToTop('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			} else {
				svgAnimatingLineRightToLeft('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			}
		} else {
			if ($('.nodes').length == 5) {	//5th node
				svgAnimatingLineTopToBottom('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			} else {
				svgAnimatingLineLeftToRight('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			}
		}
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function streFrstInTempNext() {
	var selector = '#streTmpToFrst';
	if ($('.nodes').length != 1) {
		selector = '#streLstToTmpPrev'
		lastNodeCount += 1;
	} 
	arrow(selector, '#streFstToTmpNext', function() {
		streValFromOneToAnotherAndDrwCircleLine('first', 'temp -> next', '#firstNodeVal', '#next' + lastNodeCount,
				true, '#nextDiv' + lastNodeCount, '#prevDiv1', function() {
			arrow('#streFstToTmpNext', '#streTmpToFstPrev', function() {
				streValFromOneToAnotherAndDrwCircleLine('temp', 'first -> prev', '#tempNodeVal', '#prev1',
						false, '#prevDiv1', '#nextDiv' + lastNodeCount, function() {
					arrow('#streTmpToFstPrev', '#retnFrst', function() {
						retrnFrst('first', '#firstNodeVal');
					});
				});
			});
		}); 
	});
}

function printData() {
	text = 'Here we are printing the <span class="ct-code-b-yellow">lastNode\'s data</span> (i.e.,'
			+ ' <span class="ct-code-b-yellow">' + $('#data' + lastNodeCount).text() + '</span>)';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#consoleId', 'prntngElem');
		$('.introjs-nextbutton').show();
	});
}

function whileTrueConText() { //lastNode = lastNode -> next
	assignValfromOneVarToAnotherVar('lastNode -> next', 'lastNode', $("#next" + lastNodeCount).text(), function() {
		$('#lastNodeVal').parent().effect("highlight", {color : 'blue'}, 400);
		svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv"+ lastNodeCount, "#svgId", "line31", "arrow", function() {
			$('#line31').remove();
			$('#next' + lastNodeCount).parent().effect("highlight", {color : 'blue'}, 400);
			fadeInBounceEffectWithTimelineMax('#next' + lastNodeCount, '#lastNodeVal', false, function() {
				lastNodeCount++;
				$('#line13').remove();
				if ($('#lastNodeVal').text().trim() == $('#firstNodeVal').text()) {
					svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv1", "#svgId", "line13", "arrow");
				} else {
					svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
				}
				nextBtnWithoutCalling(function() {
					if (buttonName == 'traverseList') {	//traverseList
						arrow('#lstNxtToLst', '#wleLstEqlToFst', function() {
							whileCondInTraverse();
						});
					} else if (!$('#insertAtPosition').hasClass('insert-position') && buttonName == 'insertAtPosition') {	//insertAtPosition
						arrow('#strLstNxtToLst1', '#frLoop', function() {
							iIncrement();
						});
					} else { 	//addNodes, insertAtEnd & deleteAtEnd
						arrow('#strLstNxtToLst','#whileLstNxtEqlToNl', function() {
							elseConText();
						});
					}
				});
			});
		}); 
	});
}

function whileCondInTraverse() {	//while(lastNode != first)
	$('.introjs-duplicate-nextbutton').remove();
	var t = $('#lastNodeVal').text();
	conditionChecking('#lstEqlToFst', 'lastNode', '!=', 'first', t, true, $('#firstNodeVal').text(), function() {
		var con = t != $('#firstNodeVal').text();
		conditionMessage(con, function() {
			$('#animationDiv').removeClass('z-index1000000');
			if (con) {
				nextBtnWithoutCalling(function() {
					arrow('#wleLstEqlToFst', '#printf3', function() {
						printData();
					});
				});
			} else {
				introNextSteps('#buttonDiv');
				$('.introjs-nextbutton').show();
			}
		});
	});
}

function intIDec() {	//insertAtPosition
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#decTempNLstNde', '#decIntI', function() {
		text = 'Here we declared an int variable <span class="ct-code-b-yellow">i</span>';
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCalling(function() {
				$('#countNme').text('i');
				transferEffect('#decIntI', '#countValDec', function() {
					nextBtnWithoutCalling(function() {
						arrow('#decIntI', '#frLoop', function() {
							text = '<span class="ct-code-b-yellow">i</span> is initialized with <span class="ct-code-b-yellow">1</span>.';
							typing('.introjs-tooltiptext', text, function() {
								transferEffect('#iInit', '#decCountVal', function() {
									$('#countVal').text('1');
									iVal = 1;
									zoomInEffect('#countVal', function() {
										nextBtnWithoutCalling(function() {
											forLoopChecking();
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
}

function forLoopChecking() {	//insertAtPosition
	var t = parseInt($('#posVal').text()) - 1;
	conditionChecking('#frCond', 'i', '<', '(pos - 1)', iVal, true, t, function() {
		var cond = iVal < t;
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {
					arrow('#frLoop', '#ifLstNxtEqlToFst', function() {
						checkingLstNxtEqlFst();
					});
				} else {
					arrow('#frLoop', '#createNodeMethod', function() {
						callToCreateMethod();
					});
				}
			});
		});
	});
}

function iIncrement() {	//insertAtPosition
	iVal++;
	text = '<span class="ct-code-b-yellow">i</span> value is incremented by one (i.e., <span class="ct-code-b-yellow">' + iVal + '</span>)';
	typing('.introjs-tooltiptext', text, function() {
		transferEffect('#iInc', '#decCountVal', function() {
			flipEffectWithTweenMax('#countVal', iVal, function() {
				nextBtnWithoutCalling(function() {
					forLoopChecking();
				});
			});
		});
	});
}

function streTmpToTmpNxtNprev() {	//insertAtPosition 	//temp -> next = temp; && temp -> prev = temp;
	arrow('#fstToNul', '#tmpToTmpNxt', function() {
		streValFromOneToAnotherAndDrwCircleLine('temp', 'temp -> next', '#tempNodeVal', '#next1', true, '#nextDiv1', '#prevDiv1', function() {
			arrow('#tmpToTmpNxt', '#tmpToTmpPrev', function() {
				streValFromOneToAnotherAndDrwCircleLine('temp', 'temp -> prev', '#tempNodeVal', '#prev1', false, '#prevDiv1', '#nextDiv1', function() {
					arrow('#tmpToTmpPrev', '#streTmpToFrst', function() {
						streFrstInTmp();
					});
				});
			});
		});
	});
}

function ifPosIsOne() {	//insertAtPosition	if( pos == 1)
	var t = $('#posVal').text();
	conditionChecking('#posEqlToOne', 'pos', '==', '1', t, false, '', function() {
		var cond = t == 1;
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {	//if(first == Null
					arrow('#posEqlToOne', '#fstToNul', function() {
						ifConText($('#firstNodeVal').text());
					});
				} else {	//temp -> prev = lastNode
					arrow('#posEqlToOne', '#lstNdeToTmpPrev', function() {
						tmpPrevToLstNode();
					});
				}
			});
		});
	});
}

function tmpPrevToLstNode() {	//insertAtPosition
	assignValNDrawLinesWithoutCircle('lastNode', 'temp -> prev', '#lastNodeVal', '#prev' + (nodeCount - 1), '#prevDiv' + (nodeCount - 1),
				'#nextDiv' + lastNodeCount, 'line' + lineCount, true, function() {
		if ($('#posVal').text() == 1) {
			appendNextBtn('fstToTmpNxt');
		} else {
			appendNextBtn('streLstNxtToTmpNxt');
		}
	});
}

function streLstNxtToTmpNxt() {	//insertAtPosition	//temp -> next = lastNode -> next
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#lstNdeToTmpPrev', '#lstNxtToTmpNxt', function() {
		var val1, val2;
		if ($('#insertAtPosition').hasClass('insert-endpos')) {
			val1 = lastNodeCount + 1;
			val2 = 1;
		} else {
			val1 = nodeCount - 1;
			val2 = lastNodeCount + 1;
		}
		assignValNDrawLinesWithoutCircle('lastNode -> next', 'temp -> next', '#next' + lastNodeCount, '#next' + (nodeCount - 1),
				 '#nextDiv' + val1, '#prevDiv' + val2, 'line45', true, function() {
			nextBtnWithoutCalling(function() {
				arrow('#lstNxtToTmpNxt', '#tmpToLstNxt', function() {
					streLstNxtToTmp();
				});
			});
		});
	});
}

function fstToTmpNxt() {	//insertAtPosition	//temp -> next = first & first -> prev = temp
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#streLstToTmpPrev', '#streFstToTmpNext', function() {
		assignValNDrawLinesWithoutCircle('first', 'temp -> next', '#firstNodeVal', '#next' + (nodeCount - 1), '#nextDiv' + (nodeCount - 1), '#prevDiv2',
					'line45', true, function() {
			nextBtnWithoutCalling(function() {
				arrow('#streFstToTmpNext', '#streTmpToFstPrev', function() {	//first -> prev = temp
					assignValNDrawLinesWithoutCircle('temp', 'first -> prev', '#tempNodeVal', '#prev2', '#prevDiv2', '#nextDiv', 
							'line46', false, function() {
						$('#pDownLine1').remove();
						nextBtnWithoutCalling(function() {
							arrow('#streTmpToFstPrev', '#streTmpToFrst', function() {
								streFrstInTmp();
							});
						});
					});
				});
			})
		});
	});
}

function streLstNxtToTmp() {	//insertAtPosition	//lastNode -> next = temp
	$('.introjs-duplicate-nextbutton').remove();
	assignValNDrawLinesWithoutCircle('temp', 'lastNode -> next', '#tempNodeVal', '#next' + lastNodeCount, '#nextDiv' + lastNodeCount, '#prevDiv',
			'line2' + lineCount, false, function() {
		if ($('#next' + $('#dynamicNodes .nodes').length).text() != $('#firstVal').text()) {
			$('#pUpLine1').remove();
		} else {
			$('#line' + (parseInt($('#posVal').text()) - 1)).remove();
		}
		lineCount++;
		nextBtnWithoutCalling(function() {
			if ($('#posVal').text() == 1) {	
				arrow('#streTmpToLstNxt', '#streLstToTmpPrev', function() {
					tmpPrevToLstNode();	
				});
			} else {
				streLstPrevToTmp();
			}
		});
	});
}

function streLstPrevToTmp() {	//insertAtPosition	//temp -> next -> prev = temp
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#tmpToLstNxt', '#tmpTotmpNxtPrev', function() {
		var val;
		if ($('#insertAtPosition').hasClass('insert-endpos')) {
			val = 1;
		} else {
			val = lastNodeCount + 1;
		}
		assignValNDrawLinesWithoutCircle('temp', 'temp -> next -> prev', '#tempNodeVal', '#prev' + val, '#prevDiv' + val, '#nextDiv', 'line46',
					false, function() {
			if ($('#insertAtPosition').hasClass('insert-endpos')) {
				$('#pDownLine1').remove();
			} else {
				$('#line2' + (parseInt($('#posVal').text()) - 1)).remove();
			}
			nextBtnWithoutCalling(function() {
				arrow('#tmpTotmpNxtPrev', '#retnFrst', function() {
					retrnFrst('first', '#firstNodeVal');
				});
			});
		});
	});
}

//insertAtPosition
function assignValNDrawLinesWithoutCircle(sel1, sel2, selector, idNme1, idNme2, idNme3, lineId, flag, callBackFunction) {//insertAtPosition (pos != 1)
	assignValfromOneVarToAnotherVar(sel1, sel2, $(selector).text(), function() {
		fadeInBounceEffectWithTimelineMax(selector, idNme1, false, function() {
			if (flag) {
				svgAnimatingLineTopToBottom('#animationDiv', idNme2, idNme3, '#svgId', lineId, 'arrow', function() {
					if (typeof callBackFunction === 'function') {
						callBackFunction();
					}
				});
			} else {
				lineFlag = true;
				svgAnimatingLineBottomToTop('#animationDiv', idNme2, idNme3 + (nodeCount - 1), '#svgId', lineId, 'arrow', function() {
					lineFlag = false;
					if (typeof callBackFunction === 'function') {
						callBackFunction();
					}
				});
			}
		});
	});
}

function streValFromOneToAnotherAndDrwCircleLine(sel1Name, sel2Name, selector1, selector2, lineFlag, selector3, selector4, callBackFunction) {
	$('#animationDiv').addClass('z-index1000000');
	assignValfromOneVarToAnotherVar(sel1Name, sel2Name, $(selector1).text(), function() {
		fadeInBounceEffectWithTimelineMax(selector1, selector2, false, function() {
			setTimeout(function() {
				if (lineFlag) {
					  svgCurveUpper(selector3,  selector4, 'pUpLine1', function() {
						  nextBtnWithoutCalling(function() {
							  if (typeof callBackFunction === 'function') {
									callBackFunction();
								}
						  });
					  });
				} else {
					svgCurveDown(selector3,  selector4, 'pDownLine1', function() {
						nextBtnWithoutCalling(function() {
							if (typeof callBackFunction === 'function') {
								callBackFunction();
							}
						});
					});
				}
			},800);
		});
	});
}

function checkingLstNxtEqlFst() {	//insertAtPosition
	var t1 = $('#next' + lastNodeCount).text();
	var t2 = $('#firstNodeVal').text();
	conditionChecking('#ifLstNxtEqlToFst', 'lastNode -> next', '==', 'first', t1, true, t2, function() {
		var cond = t1 == t2;
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {
					$('#animationDiv').removeClass('z-index1000000');
					$('.introjs-tooltip').addClass('hide');
					arrow('#ifLstNxtEqlToFst', '#printf4', function() {
						$('#printf4').effect('highlight', {color: 'blue'}, 400, function() {
							customIntroNxtStep('#consoleId', 'noSuchPosition');
						});
					});
				} else {
					arrow('#ifLstNxtEqlToFst', '#strLstNxtToLst1', function() {
						whileTrueConText();
					});
				}
			});
		});
	});
}
//var dec & initval
function varDecNInit(fromId, toId, id1, id2, callBackFunction) {
	transferEffect(fromId, toId, function() {
		$(id1).text($(id2).text());
		fromEffectWithTweenMax(id2, id1, false, function() {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
		})
	});
}

function assignValfromOneVarToAnotherVar(selector1, selector2, val, callBackFunction) { //assign value from one var to another var
	$('.introjs-tooltip').removeClass('hide');
	text = 'The <span class="ct-code-b-yellow">'+ selector1 +'</span> value <span class="ct-code-b-yellow">'
			+ val + '</span> is stored in <span class="ct-code-b-yellow">'+ selector2 +'</span>.';
	typing('.introjs-tooltiptext' , text, function() {
		nextBtnWithoutCalling(function() {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
		});
	});
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

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
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
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 800 , function() {
			$(selector1).removeClass('z-index1000000');
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
					callBackFunction();
			}
		});
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn");
			$(selector1).removeAttr('style');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function buttonCorrespondingText(nextStepName) {
	$('.displayCode, #consoleEnter').addClass('opacity00').empty();
	buttonName = nextStepName;
	introNextSteps("#inMain", nextStepName, "right");
	introjs.nextStep();
}

function nextBtnWithoutCalling(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
	$('.introjs-duplicate-nextbutton').click(function() {
		$(this).remove();
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function appendNextBtn(btnNme) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton" onclick=' + btnNme + '()>Next &#8594;</a>');
}

//conditionChecking & conditionMessage are if condition functions
function conditionChecking(fromId, text1, cond, text2, val1, flag, val2, callBackFunction) {
	text = 'Now check the condition : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
			+ '<span id="first" class="position">' + text1 +'</span> ' + cond + ' <span id="second" class="position">' + text2 + '</span></span>'
			+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appendSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	fromEffectWithTweenMax(fromId, '#ifCondition', true, function() {
		nextBtnWithoutCalling(function() {
			flipEffectWithTweenMax('#first', val1, function() {
				if (flag) {
					flipEffectWithTweenMax('#second', val2, function() {
						if (typeof callBackFunction === 'function') {
							callBackFunction();
						}
					});
				} else {
					if (typeof callBackFunction === 'function') {
						callBackFunction();
					}
				}
			});
		});
	});
}

function conditionMessage(value, callBackFunction) {
	if (value) {
		$("#trueOrFalse").text("====> True").addClass("green-color");
	} else {
		$("#trueOrFalse").text("====> False").addClass("red-color");
	}
	text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ value + '</span>.';
	typing('#appendSpan', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function callingMethodWithFrstNVar(val, selector) {	//first & variable in method calling text
	$('.introjs-tooltip').removeClass('hide');
	text1 = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method and passing <span class="ct-code-b-yellow">'
			+ 'first</span> value (i.e., <span class="ct-code-b-yellow">' + $('#firstVal').text() + '</span>) ';
	text2 = ', <span class="ct-code-b-yellow">pos</span> value (i.e., <span class="ct-code-b-yellow">' + $('#posVal').text() + '</span>) '
	text3 = 'and <span class="ct-code-b-yellow">' + val + '</span> value (i.e., <span class="ct-code-b-yellow"> ' + $(selector).text() 
			+ '</span>) as arguments and the return value is stored in <span class="ct-code-b-yellow">first</span>.';
	if (buttonName == 'insertAtPosition') {
		text = text1 + text2 + text3;
	} else {
		text = text1 + text3;
	}
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function callingMethodWithFrst() {	// method declare first node when call the method
	$('.introjs-tooltip').removeClass('hide');
	text1 = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method and passing <span class="ct-code-b-yellow">'
			+ 'first</span> value (i.e., <span class="ct-code-b-yellow">' + $('#firstVal').text() + '</span>) as an argument'
	text2 = ' and the return value is stored in <span class="ct-code-b-yellow">first</span>.';
	if (buttonName == 'traverseList') {
		text = text1 + '.';
	} else {
		text = text1 + text2;
	}
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function retnValWithFrstNVar() {
	$('.introjs-tooltip').removeClass("hide");
	text = 'The <span class="ct-code-b-yellow">' + buttonName + '()</span> method return value is stored in'
			+ ' <span class="ct-code-b-yellow">first</span>(i.e., <span class="ct-code-b-yellow">' + $("#firstNodeVal").text()
			+'</span>) and stores it in the variable <span class="ct-code-b-yellow">first</span>.';
	typing('.introjs-tooltiptext' , text, function() {
		$('.introjs-nextbutton').show();
	});
}

function highlightNFlip(id, val, callBackFunction) {
	$(id).effect('highlight', {color: 'yellow'}, 300, function() {
		flipEffectWithTweenMax(id, val, function() {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
		})
	});
}

function initFrstNVarInMethod(arrowId, text, selector) {	//In method declaration first & var dec text 
	arrow(arrowId, arrowId, function() {
		var mthdNames, mthdVal;
		if (buttonName == 'insertAtPosition') {
			mthdNames = 'pos, ' + text; 
			mthdVal = $('#posVal').text() + ', ' + $(selector).text();
		} else {
			mthdNames = text;
			mthdVal = $(selector).text();
		}
		$('.introjs-tooltip').removeClass('hide');
		text = 'Here, the <span class="ct-code-b-yellow">first</span> node and <span class="ct-code-b-yellow">' + mthdNames + '</span> variables are'
				+ ' initialized with the values are passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
				+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() +  ', ' + mthdVal + ')</span>.';
		typing('.introjs-tooltiptext', text, function() {
			methodPassedValFrstNXInit()
		});
	});
}


function retrnFrst(text, selector) {
	$('#animationDiv').removeClass('z-index1000000');
	$('.introjs-tooltip').removeClass('hide');
	text = 'The <span class="ct-code-b-yellow">return</span> statement returns the <span class="ct-code-b-yellow">' + text + '</span> value (i.e.,'
			+ ' <span class="ct-code-b-yellow">' + $(selector).text() +'</span>).';
	typing('.introjs-tooltiptext', text, function() {
		if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
			introNextSteps('#' + buttonName + 'Method', 'retnFstVal');
		} else if (buttonName == 'insertAtPosition') {
			introNextSteps('#insertAtPositionMethod', 'retnFstVal');
		}
		$('.introjs-nextbutton').show();
	});
}

function storeValAndDrawLine(selector1, selector2, lineNum, selector3, callBackFunction) {
	fadeInBounceEffectWithTimelineMax(selector1, selector2, false, function() {
		$('#'+lineNum).remove();
		if (buttonName == 'insertAtPosition' && $('.nodes').length > 1) {
			svgAnimatingLineBottomToTop('#animationDiv', selector3, '#dataDiv' + (nodeCount - 1), '#svgId', lineNum, 'arrow');
		} else {
			svgAnimatingLineTopToBottom('#animationDiv', selector3, '#dataDiv' + lastNodeCount, '#svgId', lineNum, 'arrow');
		}
		nextBtnWithoutCalling(function() {
			if (typeof callBackFunction === 'function') {
				callBackFunction();
			}
		});
	});
}

function movingNodes(val, nodeId, callBackFunction) {	//All nodes move except nodeId
	if (val <= $('#dynamicNodes .nodes').length) {
		var lVal, t;
		if (val <= 4) {
			lVal = '120px';
		} else {
			lVal = '-120px';
		}
		TweenMax.to($('#dynamicNodes .nodes').not(nodeId).eq(val - 1), 1, {left: lVal, onComplete: function () {
	        $(nodeId).removeClass('hide');
	        $.each($('#dynamicNodes .nodes').not(nodeId), function (idx) {
	        	var arr = [5, 6, 7, 8];
	        	t = $('#dynamicNodes .nodes').length;
	        	if (t > 4) {
	        		for (var i = 0; i < (t - 4); i++)  {
	        			$('#node' + arr[i]).css({'float' : 'right'}) ;
	        		}
	        	}
	        	$(this).css('left', '0');
	        });
		}});
		val++;
		movingNodes(val, nodeId, callBackFunction);
	} else {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}
}

function orderingNodes(val) {	//insertAtPosition node moving
	var t = '<div class="opacity00 col-xs-2 nodes hide position" id="node' + (nodeCount - 1)
			+ '" style="top: 0px; width: auto;">' + $('#posNodes > #node' + (nodeCount - 1)).html() + '</div>'
	if ($('#insertAtPosition').hasClass('insert-endpos')) {
		$('#dynamicNodes .nodes:last').after(t);
	} else if ($('#insertAtPosition').hasClass('insert-middle')) {
		nodeCount = parseInt($('#posVal').text()) + 1;
		$('#posNodes .nodes').attr('id', 'node' + (nodeCount - 1));
		$('#dynamicNodes #node' + parseInt($('#posVal').text())).before(t);
	} else {
		$('#dynamicNodes .nodes:first').before(t);
	}
	changeIdsBasedOnCond(1, function() {
		$('line, polyline').remove();
		if ($('#insertAtPosition').hasClass('insert-endpos')) {
			$('#node' + val).removeClass("hide");
			positioningNodes();
		} else {
			movingNodes((nodeCount - 1), '#node' + (nodeCount - 1), function() {
				setTimeout(function() {
					positioningNodes();
				}, 1200);
			});
		}
	});
}

function positioningNodes(callBackFunction) {
	var l1 = $("#posNodes #node" + (nodeCount - 1)).offset();
	var l2 = $("#dynamicNodes #node" + (nodeCount - 1)).offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenLite.to("#posNodes > #node" + (nodeCount - 1), 0.5, {top : topLength, left : leftLength, onComplete: function() {
		$("#dynamicNodes #node" + (nodeCount - 1)).html($("#posNodes > #node" + (nodeCount - 1)).html()).removeClass("opacity00");
		$("#posNodes, .extraNode").remove();
		introjs.refresh();
		changeIdsBasedOnCond(1, function() {
			regenerateArrows();
			introNextSteps('#buttonDiv');
			$('.introjs-nextbutton').show();
		});
	}});
}
function addNegativeValuEvent(selector) {
	$(selector).on('keydown keyup', function(e) {
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val() == '-1') {
			$('.introjs-nextbutton').show();
			$('input').attr('disabled', true);
		} else {
			$('.introjs-nextbutton').hide();
		}
		if ($(this).val().length < 1 && (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173)) {
			return;
		}
		if ($(this).val().length >= 1 && (e.keyCode == 49 || e.keyCode == 97))  {
			return;
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Enter -1 only.</div>');
			e.preventDefault();
		}
	});
}

function events(selector) {
	$(selector).on('keydown', function(e) {
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173) {
			if ($(this).val().length < 1) {	
				return;
			} else {
				e.preventDefault();
			}
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode ==9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on('keyup', function(e) {
		$('.error-text').remove();
		var firstCon = $(this).val().length > 0 && (!$(this).val().startsWith('-'));
		var secondCon = $(this).val().length >= 2 && $(this).val().indexOf('-', $(this).val().indexOf('-') + 1) == -1 
		if (firstCon || secondCon) {
			$('.introjs-nextbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				introjs.nextStep();
			}
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter any integer.</div>');
			$('.introjs-nextbutton').hide();
		}
	});
}

function arrow(fromId, toId, callBackFunction) {
	$('.arrow').remove();
	$('body').append("<i class='fa fa-arrow-right arrow animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth())
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($('.arrow').css('top')) + (l2.top - l1.top);
	var leftLength = parseInt($('.arrow').css('left')) + (l2.left - l1.left);
	TweenMax.to('.arrow', 0.5, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === 'function') {
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

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var x2 = $(selector2).offset().left - parentOffset.left;
	if (lineFlag) {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 1.6;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 1.6;
	} else {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	if (lineFlag) {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 3;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 3;
	} else {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	}
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$('body').append("<span id='dummy' style='position: relative; z-index: 9999999; color: red;'>" + $(selector2).text() + "</span>");
		$('#dummy').offset({
			'top' : l2.top,
			'left' : l2.left
		});
	}
	$(selector2).removeClass('opacity00');
	if (!flag) {
		$(selector1).addClass('z-index1000000').parent().effect( 'highlight',{color: 'blue'}, 500);
	} else {
		$(selector1).addClass('z-index1000000').effect( 'highlight',{color: 'blue'}, 500);
	}
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr('style');
		$(selector1).removeClass('z-index1000000');
		$('#dummy').remove();
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, flag, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#animationDiv").append("<span id='dummy' class='ct-green-color ct-fonts' style='position: relative; z-index: 9999999;'>" 
			+ $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
    if (flag) {
			val = $(selector2).text($(selector1).val());
	} else {
			val = $(selector2).text($(selector1).text());
	}
    TweenLite.from($(selector2), 3, { ease:  Bounce.easeOut, top:l1.top-l2.top, left :l1.left-l2.left, delay :0.5});
	    TweenLite.to($("#dummy"), 0.8, { ease: Sine.easeOut, left:-150 , delay :1.8, opacity:0 , onComplete: function() {
	    	introjs.refresh();
	    	$("#dummy").remove();
	    	if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	    }});
}

function fadeInFromEffectWithTimelineMax(selector1, selector2, flag, callBackFunction) {
	var timelineMax = new TimelineMax();
	if (!flag) {
		$(selector1).effect( "highlight",{color: 'blue'}, 500);
	} else {
		$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
	}
		$(selector1).removeClass('z-index1000000');
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#animationDiv").append("<span id='dummy' style='position: relative;color: black;'>" + $(selector2).text() + "</span>");
		$('#dummy').offset({
			"top": l2.top, 
			"left": l2.left
		});
		if(!flag) {
			$(selector2).text($(selector1).val());
		} else {
			$(selector2).text($(selector1).text());
		}
		timelineMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 1, {opacity: 0, onComplete: function() {
			$("#animationDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.8");
}

function changeIds(val, elemParent, idAttr) {//changing Ids based on situation
	$(elemParent).each(function(index){
		$(this).attr('id', (idAttr + (index + val)));
	});
}

function changeIdsBasedOnCond(val, callBackFunction) {
	changeIds(val, $('#dynamicNodes .nodes'), 'node');
	changeIds(val, $('#dynamicNodes .data-nodes'), 'nodeData');
	changeIds(val, $('#dynamicNodes .prev-div'), 'prevDiv');
	changeIds(val, $("#dynamicNodes .data-div"), "dataDiv");
	changeIds(val, $("#dynamicNodes .next-div"), "nextDiv");
	changeIds(val, $("#dynamicNodes .data-address"), "dataAddress");
	changeIds(val, $("#dynamicNodes .prev-span"), "prev");
	changeIds(val, $("#dynamicNodes .data-span"), "data");
	changeIds(val, $("#dynamicNodes .next-span"), "next");
	if (buttonNames == 'deleteAtEnd' || buttonNames == 'deleteAtPosition') {
		changeIds(val, $('.lines'), 'line');
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function regenerateArrows() {
	var len = $(".nodes").length;
	svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv1', '#svgId', 'line10', 'arrow');
	for (var i = 1; i < len; i++) {
		drawDoubleLines('#nextDiv', 'line' + i, '#prevDiv', i, true);
		drawDoubleLines('#prevDiv', 'line2' + i, '#nextDiv', i, false);
	}
	svgCurveUpper('#nextDiv' + $('.nodes').length, '#prevDiv1', 'pUpLine1');
	svgCurveDown('#prevDiv1' , '#nextDiv'+ $('.nodes').length, 'pDownLine1');
}

function drawDoubleLines(sel1, lineId, sel2, i, arrowFrom, callBackFunction) {
	lineFlag = true;
	$(lineId).remove();
	if (arrowFrom) {
		if (i < 4) {
			svgAnimatingLineRightToLeft('#animationDiv', sel1 + i, sel2 + (i + 1), '#svgId', lineId, 'arrow');
		} else if (i == 4) {
			svgAnimatingLineBottomToTop('#animationDiv', sel1 + i, sel2 + (i + 1), '#svgId', lineId, 'arrow');
		} else {
			svgAnimatingLineLeftToRight('#animationDiv', sel2 + i, sel1 + (i + 1), '#svgId', lineId, 'arrow');
		}
	} else {
		if (i < 4) {
			svgAnimatingLineLeftToRight('#animationDiv', sel1 + (i + 1), sel2 + i, '#svgId', lineId, 'arrow');
		} else if (i == 4) {
			svgAnimatingLineTopToBottom('#animationDiv', sel1 + (i + 1), sel2 + i, '#svgId', lineId, 'arrow');
		} else {
			svgAnimatingLineRightToLeft('#animationDiv', sel2 + (i + 1), sel1 + i, '#svgId', lineId, 'arrow');
		}
	}
	if (typeof callBackFunction === 'function') {
		callBackFunction();
	}
}

function svgCurveUpper(selector1, selector2, polyLineId, callBackFunction) {
	$('.upcurve').remove();
	var x = (($(selector1).offset().left - $("#svgId").offset().left) + $(selector1).width());
	var y = (($(selector1).offset().top  + $(selector1).height()) - $('#svgId').offset().top - 15);
	var x1 = x + (($(selector1).outerWidth() / 3));
	var y1 = y;
	var x2 = x1;
	var y2 = y - ($(selector1).outerHeight() * 1.2);
	var x3 = ($(selector2).offset().left - $("#svgId").offset().left ) - $(selector1).outerWidth() / 3;
	var y3 = y2;
	var x4 = x3;
	var y4 = (($(selector2).offset().top  + $(selector2).height()) - $('#svgId').offset().top - 15);
	var x5 = x3 + $(selector2).outerWidth() / 3;
	var y5 = y4;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line upcurve");
	line.setAttribute('id', polyLineId);
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("#" +polyLineId, 1, {attr: {points : points}});
	},500);
	if (typeof callBackFunction === 'function') {
		callBackFunction();
	}
}

function svgCurveDown(selector1, selector2, polyLineId, callBackFunction) {
	$('.downcurve').remove();
	var x = $(selector1).offset().left - $("#svgId").offset().left;
	var y = ($(selector1).offset().top + ($(selector1).height())) - $("#svgId").offset().top;
	var x1 = x - $(selector1).width() / 2.1;
	var y1 = y;
	var x2 = x1;
	var y2 = y1 + $(selector1).height() * 1.2 + 2.5;
	var x3 = (($(selector2).offset().left + $(selector2).outerWidth()) - $("#svgId").offset().left) + $(selector1).width() / 2.3;
	var y3 = y2;
	var x4 = x3;
	var y4 = ($(selector2).offset().top + ($(selector2).height())) - $("#svgId").offset().top;
	var x5 = x3 - $(selector2).width() / 2;
	var y5 = y4;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line downcurve");
	line.setAttribute('id', polyLineId);
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("#" + polyLineId, 1, {attr: {points : points}});
	},500);
	if (typeof callBackFunction === 'function') {
		callBackFunction();
	}
}
