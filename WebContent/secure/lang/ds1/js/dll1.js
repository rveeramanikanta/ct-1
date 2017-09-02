var buttonNames = ['Add Nodes', 'Insert At Begin', 'Insert At End',
	                   'Delete At Begin', 'Delete At End', 'Count', 'Traverse List'];
var buttonName, printfCount, outPutCount, lastNodeCount, lineCount = nodeCount = 1;
var lineFlag = false;
function dllReadyFunction() {
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
					+ '</div><div class="text-center col-xs-12 padding00 ct-green-color" id=' + nodeName + '>' + nodeNameText + '</div>'
					+'</div> ');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(val) {
	var randomAddress = getRandomInt(1000, 5000);
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
	if (buttonName == 'insertAtBegin' && $('.nodes').length != 0) {
		$('#declareNodes').after('<div class="col-xs-10 col-xs-offset-1 padding00" id="posNodes"></div>');
		$('#posNodes').append(x);
		$('#insertAtBegin').addClass('insert-begin');
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
					+ '<span id="typeDefDec">typedef struct listNode* node;</span>\n'
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
function preDeleteAtEndMthdInMain() { 	//deleteAtEnd()  && deleteAtBegin in main()
	$('#inMain').append('<div id="deleteAtEndNodeMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="ifFrstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
					+ '\t<div id="printf1" class="position">printf("Linked List is empty so "\n'
					+ '\t\t\t"Deletion is not possible");</div>\n'
					+ '} else {\n'
					+ '\t<span id="'+ buttonName +'NodeMethod"">first = ' + buttonName + '(first);</span>\n'
					+ '}</div>');
}

function preTraverseMthdInMain() {	//traverse method in main
	$('#inMain').append('<div id="traverseMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="tIfFstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
					+ '\t<span id="printf1">printf("Linked List is empty\\n");</span>\n'
					+ '} else {\n'
					+ '\t<span id="printf2">printf("The elements in Doubly Linked List are: ");</span>\n'
					+ '\t<span id="traverseListMethod">traverseList(first);</span>\n'
					+ '}</div>');
}

function preCountMthdInMain() {	//count method in main
	$('#inMain').append('<div id="countMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<div id="printf1" class="position">printf("The number of nodes in a Doubly Linked\n'
							+ '\t\t\t List are : %d\\n", <span id="countMthd">count(first)</span>);</div></div>');
}

function preInsertBgnEndMthdInMain() {	//insertAtBegin & insertAtEnd in main
	$('#inMain').append('<div id="bgnEndMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="initX">int x;</span>\n'
					+ '<span id="printf1">printf("Enter an element : ");</span>\n'
					+ '<span id="scanf1">scanf("%d", &x);</span>\n'
					+ '<span id="insrtBgnEndMethod">first = ' + buttonName + '(first, x);</span></div>');
}

function preAddNodesMethod() {	//addNodes() & insertAtEnd() method
	$('#csllMethodOperations').append('<div id="addNodesDiv"><span id="' + buttonName + 'MthdDec">node ' + buttonName + '('
					+ '<span id="decFstVar">node first</span>, <span id="decXVar">int x</span>) {</span>\n'
					+ '\t<span id="decTempNLstNde">node temp, lastNode = first;</span>\n'
					+ '\t<span id="createNodeMethod">temp = createNode();</span>\n'
					+ '\t<span id="streXValInTmpDt">temp -> data = x;</span>\n'
					+ '\t<span id="ifFrstEqlToNl">if (<span id="fstToNul">first == NULL</span>) {</span>\n'
					+ '\t\t<span id="streTmpToFrst">first = temp;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNxtEqlToNl">while (<span id="lstNxtEqlToNl">lastNode -> next != NULL</span>) {</span>\n'
					+ '\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t<span id="streTmpToLstNxt">lastNode -> next = temp;</span>\n'
					+ '\t\t<span id="streLstToTmpPrev">temp -> prev = lastNode;</span>\n'
					+ '\t}\n'
					+ '\t<span id="retnFrst">return first;</span>\n'
					+ '}</div>');
}

function preDeleteAtEndMethod() { //deleteAtEnd() method
	$('#csllMethodOperations').append('<div id="deleteAtEndDiv"><span id="deleteAtEndMthdDec">node deleteAtEnd('
					+ '<span id="decFstVar">node first</span>) {</span>\n'
					+ '\t<span id="decTempNLstNde">node temp, lastNode = first;</span>\n'
					+ '\t<span id="ifLstNxtEqlToNl">if (<span id="lstNxtToNul">lastNode -> next == NULL</span>) {</span>\n'
					+ '\t\t<span id="streTmpToFrst">first = NULL;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNxtEqlToNl">while (<span id="lstNxtEqlToNl">lastNode -> next != NULL</span>) {</span>\n'
					+ '\t\t\t<span id="tmpToLst">temp = lastNode;</span>\n'			
					+ '\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t<span id="tmpNxtToNl">temp -> next = NULL;</span>\n'
					+ '\t}\n'
					+ '\t<span id="printf2">printf("The deleted item from Doubly Linke List : %d", lastNode -> data);</span>\n'
					+ '\t<span id="freeLst">free(lastNode);</span>\n'
					+ '\t<span id="retnFrst">return first;</span>\n'
					+ '}</div>');
}

function preDeleteAtBeginMethod() {
	$('#csllMethodOperations').append('<div id="deleteAtEndDiv"><span id="deleteAtBeginMthdDec">node deleteAtBegin('
					+ '<span id="decFstVar">node first</span>) {</span>\n'
					+ '\t<span id="decTempNLstNde">node lastNode = first;</span>\n'
					+ '\t<span id="ifLstNxtEqlToNl">if (<span id="lstNxtToNul">lastNode -> next == NULL</span>) {</span>\n'
					+ '\t\t<span id="streTmpToFrst">first = NULL;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="fstToFstNxt">first = first -> next;</span>\n'
					+ '\t\t<span id="fstPreToNl">first -> prev = NULL;</span>\n'
					+ '\t}\n'
					+ '\t<span id="printf2">printf("The deleted item from Doubly Linke List : %d", lastNode -> data);</span>\n'
					+ '\t<span id="freeLst">free(lastNode);</span>\n'
					+ '\t<span id="retnFrst">return first;</span>\n'
					+ '}</div>');
}
function preTraverseMethod() {	//traverse() method
	$('#csllMethodOperations').append('<div id="traverseDiv"><span id="traverseListMthdDec">void traverseList('
									+ '<span id="decFstVar">node first</span>) {</span>\n'
									+ '\t<span id="initLstToFst">node lastNode = first;</span>\n'
									+ '\t<span id="wleLstEqlToNl">while (<span id="lstEqlToNl">lastNode != NULL</span>) {</span>\n'
									+ '\t\t<span id="printf3">printf("%d ---> ", lastNode -> data);</span>\n'
									+ '\t\t<span id="lstNxtToLst">lastNode = lastNode -> next;</span>\n'
									+ '\t}\n'	
									+ '\t<span id="printf4">printf("NULL\\n");</span>\n'
									+ '}</div>');
}

function preCountMethod() {	//count() method
	$('#csllMethodOperations').append('<div id="countDiv"><span id="countMthdDec">int count(<span id="decFstVar">node first</span>) {</span>\n'
									+ '\t<span id="initLstToFst">node lastNode = first;</span>\n'
									+ '\t<span id="initSumZero">int sum = 0;</span>\n'
									+ '\t<span id="wleLstEqlToNl">while (<span id="lstEqlToNl">lastNode != NULL</span>) {</span>\n'
									+ '\t\t<span id="sumInc">sum++;</span>\n'
									+ '\t\t<span id="lstNxtToLst">lastNode = lastNode -> next;</span>\n'
									+ '\t}\n'
									+ '\t<span id="returnSm">return sum;</span>\n'
									+ '}</div>');
}


function preInsertBeginMethod() {	//insertAtBegin() method
	$('#csllMethodOperations').append('<div id="insertBgnDiv"><span id="insertAtBeginMthdDec">node insertAtBegin('
									+ '<span id="decFstVar">node first</span>, <span id="decXVar">int x</span>) {</span>\n'
									+ '\t<span id="decTempNLstNde">node temp;</span>\n'
									+ '\t<span id="createNodeMethod">temp = createNode();</span>\n'
									+ '\t<span id="streXValInTmpDt">temp -> data = x;</span>\n'
									+ '\t<span id="ifFrstNtEqlToNl">if (<span id="fstToNul">first != NULL</span>) {</span>\n'
									+ '\t\t<span id="fstToTmpNxt">temp -> next = first;</span>\n'		
									+ '\t\t<span id="tmpToFstPrev">first -> prev = temp</span>;\n'
									+ '\t}\n'
									+ '\t<span id="streTmpToFrst">first = temp;</span>\n'
									+ '\t<span id="retnFrst">return first;</span>\n'
									+ '}</div>');
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
					$('#buttonDiv, .btn, #insertAtBegin').removeClass('opacity00 disabled insert-begin');
					$('#line11, #line12, .extraNode, .fa').remove();
					$('#xValeDecInMain, #xValInMain, #opValDec, #opVal').addClass('opacity00');
					outPutCount = printfCount = lastNodeCount = 1;
					if ($('.nodes').length == 8) {
						$('#insertAtBegin, #insertAtEnd, #insertAtPosition').addClass('disabled');
					}
					$('#addNodes').off().click(function() {
						$("#dynamicNodes").empty();
						$('line').remove();
						nodeCount = lineCount = 1;
						buttonCorrespondingText('addNodes');
					});
					$('#deleteAtEnd').off().click(function() {	//deleteAtEnd button
						buttonCorrespondingText('deleteAtEnd');
					});
					$('#deleteAtBegin').off().click(function() {	//deleteAtBegin button
						buttonCorrespondingText('deleteAtBegin');
					});
					$('#traverseList').off().click(function() {
						buttonCorrespondingText('traverseList');
					});
					$('#count').off().click(function() {
						buttonCorrespondingText('count');
					});
					$('#insertAtEnd').off().click(function() {
						nodeCount = $('.nodes').length + 1;
						buttonCorrespondingText('insertAtEnd');
					});
					$('#insertAtBegin').off().click(function() {
						nodeCount = 1;
						if ($('.nodes').length != 0) {
							lastNodeCount = 2;
							changeIdsBasedOnCond(2);
						}
						buttonCorrespondingText('insertAtBegin');
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
						case 'deleteAtBegin' :	//deleteAtBegin method
						case 'deleteAtEnd' :	//deleteAtEnd method  
							preDeleteAtEndMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#ifFrstEqlToNl');
						break;
						case 'traverseList':
							preTraverseMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#tIfFstEqlToNl');
						break;
						case 'count':
							preCountMthdInMain();
							introjs.refresh();
							introNextSteps('#csllMethodOperations', 'countMthdDec', 'left');
							$('#countMthd').effect('highlight', {color: 'blue'}, 500);
							callingMethodWithFrst();
						break;
						case 'insertAtBegin':
						case 'insertAtEnd':
							preInsertBgnEndMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#initX');
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
								} else {
									customIntroNxtStep('#insrtBgnEndMethod', 'callToMethod');
								}
							});
						break;
						case "tempsDeclar" :
							transferEffect("#tmpCreate", "#tmpNde", function() {
								customIntroNxtStep("#allocateMem", "", "bottom");
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
								$('.fa, #line13, #line10, #line15').remove();
								$("#csllMethodOperations, #xValDecInAdd, #xValInAdd").addClass('opacity00');
								$("#csllMethodOperations").empty();
								if ($('#firstVal').text() != 'NULL') {
									svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv1', '#svgId', 'line10', 'arrow');
								}
								if ($('#insertAtBegin').hasClass('insert-begin')) {
									$('.introjs-tooltip').removeClass('hide');
									text = 'Now rearrange the nodes';
									typing('.introjs-tooltiptext', text, function() {
										nextBtnWithoutCalling(function() {
											orderingNodes(nodeCount - 1, function() {
												regenerateArrows();
												lineFlag = false;
												svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv1", "#svgId", "line11", "arrow");
												svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv1", "#svgId", "line12", "arrow");
												introNextSteps('#buttonDiv');
												$('.introjs-nextbutton').show();
											});
										});
									});
								} else {
									$('.extraNode, #line11, #line12').remove();
									introjs.refresh();
									if (buttonName == 'addNodes') {
										outPutCount++;
										printfCount = 2
										customIntroNxtStep('#printf2', 'printText');
									} else {
										customIntroNxtStep('#buttonDiv');
									}
								}
							});
						break;
						case 'xDeclaration':	//insertAtBegin & insertAtEnd
							transferEffect('#initX', '#xValeDecInMain', function() {
								printfCount = 1;
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
						case 'listIsEmpty' : //deleteAtEnd() && deleteAtBegin()  
							customIntroNxtStep('#consoleId', 'printEmptyNode');
						break;
						case 'listEmpty':	//traverse list empty
							customIntroNxtStep('#consoleId', 'listEmpty');
						break;
						case 'displayElemnts':	//traverse
							customIntroNxtStep('#consoleId', 'displayList');
						break;
						case 'printCount':	//count
							customIntroNxtStep('#consoleId', 'printSumVal');
						break
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
						case "printNodeValText"://addNodesMethod, insertAtBegin & insertAtEnd
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter an element : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							if ($('.nodes').length != 0 && buttonName == "addNodes") {
								$('.introjs-tooltiptext').append('<br><div id="appendText"></div>');
								var text = "If you want to exit from <span class='ct-code-b-yellow'>addNodes()</span> method enter -1";
								typing("#appendText", text, function() {});
							}
							customIntroNxtStep('#scanf' + printfCount, 'scanfReadval', 'bottom');
						break;
						case "enterNodeVal" :
							$('.introjs-tooltip').removeClass('hide');
							var t = $(".nodes").length == 4;
							if (t && buttonName == "addNodes") {
								addNegativeValuEvent("#nodeVal" + outPutCount)
								var text = "Here, we are restricted to allow only <span class='ct-code-b-yellow'>5</span> nodes. So, please enter "
										+ "the <span class='ct-code-b-yellow'>node data</span> as <span class='ct-code-b-yellow'>-1</span> only.";
							} else {
								events("#nodeVal" + outPutCount);
								var text = "Enter the <span class='ct-code-b-yellow'>node data</span> value.";
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + outPutCount).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
								introNextSteps("#animationDiv", "storeXVal", "bottom");
							});
						break;
						case "printEmptyNode" : //deleteAtEnd && deleteAtBegin print empty node list
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Linked List is empty so Deletion'
									+ ' is not possible</span><br/>');
							outPutCount++;
							customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
						break;
						case 'printDelNode' : //deleteAtEnd() && deleteAtBegin() 
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The deleted item from Doubly Linked List : '
									+ '<span class="ct-code-b-yellow value"></span></span><br/>');
							$('.value').append($("#data" + lastNodeCount).text());
							customIntroNxtStep("#csllMethodOperations", "freeNode", 'left');
						break;
						case 'listEmpty':	//traverse List empty
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Linked List is empty</span>');
							customIntroNxtStep('#buttonDiv');
						break;
						case 'displayList':	//traverse
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The elements in Doubly Linked List are: </span>');
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
						case 'printNull':	//traverse print null
							$('#print1').append('<span id="prntnl" class="ct-code-b-yellow">NULL</span>');
							$('#line12, #line15, .fa, .extraNode').remove();
							introjs.refresh();
							customIntroNxtStep('#buttonDiv');
						break;
						case 'printSumVal':	//count
							$('#animationDiv').addClass('z-index1000000');
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The number of nodes in a Doubly Linked List are : '
									 				+ '<span id="outData1" class="ct-code-b-yellow"></span></span>');
							fadeInFromEffectWithTimelineMax("#opVal", "#outData1", true, function() {
								$('#animationDiv').removeClass('z-index1000000');
								$('#line12, #line15, .extraNode, .fa').remove();
								introjs.refresh();
								customIntroNxtStep('#buttonDiv');	
							});
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
				case 'insrtBgnEndMethod':	//insertAtEnd & insertAtBegin
				case 'addNodesMethod':	//addNodes
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'callToMethod':
							if (buttonName == 'insertAtBegin') {
								introNextSteps('#csllMethodOperations', 'insertAtBeginMthdDec', 'left');	//complete code here
							} else {
								introNextSteps("#csllMethodOperations", buttonName + "MthdDec",  "left");
							}
							callingMethodWithFrstNVar('x', '#xValInMain');
						break;
						case 'retnFstVal':
							introNextSteps('#animationDiv', 'streRetnFstVal', 'left');
							retnValWithFrstNVar();
						break;
					}
				break;
				case  buttonName+'NodeMethod' :	//deleteAtEnd() && deleteAtBegin() method
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'callToMethod':
							introNextSteps("#csllMethodOperations", buttonName +"MthdDec",  "left");
							callingMethodWithFrst();
						break;
						case 'retnFstVal':
							introNextSteps('#animationDiv', 'streRetnFstVal');
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
						case "deleteAtEndMthdDec" : //deleteAtEnd
							preDeleteAtEndMethod();
							introjs.refresh();
							arrow('#deleteAtEndMthdDec', '#deleteAtEndMthdDec', function() {
								initFrstNodeInMathod();
							});
						break;
						case 'deleteAtBeginMthdDec' : //deleteAtBegin
							preDeleteAtBeginMethod();
							introjs.refresh();
							arrow('#deleteAtBeginMthdDec', '#deleteAtBeginMthdDec', function() {
								initFrstNodeInMathod();
							});
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
						case 'freeNode' : //deleteAtEnd() && deleteAtBegin
							if (buttonName == 'deleteAtEnd' || buttonName == 'deleteAtBegin') {
								arrow("#printf2", "#freeLst");
							}
							$('.introjs-tooltip').removeClass('hide');
							text = 'Now delete the node <span class="ct-code-b-yellow">' + $("#data" + lastNodeCount).text() +'</span> '
									+ 'at address <span class="ct-code-b-yellow">' + $('#dataAddress' + lastNodeCount).text() + '</span>.';
							typing('.introjs-tooltiptext', text, function() {
								appendNextBtn('callToFreeMethod');
							});
						break;
						case 'countMthdDec':	//count
						case 'traverseMtdDec':	//traverse
							$('#csllMethodOperations').removeClass('opacity00');
							if (animateStep == 'traverseMtdDec') {
								preTraverseMethod();
							} else {
								preCountMethod();
							}
							initFrstInMethod(function() {
								appendNextBtn('initLstTofirst');
							});
						break;
						case 'lstNxtToLst':	//traverse
							arrow('#printf3', '#lstNxtToLst', function() {
								whileTrueConText();
							});
						break;
						case 'insertAtBeginMthdDec':
							$('#csllMethodOperations').removeClass('opacity00');
							preInsertBeginMethod();
							introjs.refresh();
							initFrstNVarInMethod('#insertAtBeginMthdDec', 'x', '#xValInMain');
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
							introNextSteps("#animationDiv", 'tempsDeclar','bottom');
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
				case "ifFrstEqlToNl" :	//deleteAtEnd() && deleteAtBegin method
					$('.introjs-tooltip').removeClass("hide");
					ifConText($('#firstVal').text());
				break;
				case 'tIfFstEqlToNl': 	//traverse strat
					ifConText($('#firstVal').text());
				break;
				case 'traverseListMethod':
					introNextSteps('#csllMethodOperations', 'traverseMtdDec', 'left');
					callingMethodWithFrst();
				break;
				case 'initX':	//insertAtEnd
					$('.introjs-tooltip').removeClass('hide');
					text = 'A variable <span class="ct-code-b-yellow">x</span> is of type int is declared.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animationDiv', 'xDeclaration');
						$('.introjs-nextbutton').show();
					});
				break;
			}
		});
	});
	introjs.start();
	text = 'Here we will learn about <span class="ct-code-b-yellow">Doubly linked list</span> operations.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
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
}	//End of if condition function

function callingMethodWithFrstNVar(text, selector) {	//first & variable in method calling text
	$('.introjs-tooltip').removeClass('hide');
	text = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method and passing <span class="ct-code-b-yellow">'
			+ 'first</span> value (i.e., <span class="ct-code-b-yellow">' + $('#firstVal').text() + '</span>) and <span class="ct-code-b-yellow">'
			+ text + '</span> value (i.e., <span class="ct-code-b-yellow"> ' + $(selector).text() + '</span>) as arguments and the return value'
			+ ' is stored in <span class="ct-code-b-yellow">first</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function callingMethodWithFrst() {	// method declare first node when call the method
	$('.introjs-tooltip').removeClass('hide');
	text1 = 'Here, we are calling <span class="ct-code-b-yellow">' + buttonName + '()</span> method and passing <span class="ct-code-b-yellow">'
			+ 'first</span> value (i.e., <span class="ct-code-b-yellow">' + $('#firstVal').text() + '</span>) as an argument'
	text2 = ' and the return value is stored in <span class="ct-code-b-yellow">first</span>.';
	if (buttonName == 'traverseList' || buttonName == 'count') {
		text = text1 + '.';
	} else {
		text = text1 + text2;
	}
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function initFrstNodeInMathod() { // in deleteAtEnd() && deleteAtBegin() declaration of first node
	$('.introjs-tooltip').removeClass('hide');
	text = 'Here, the <span class="ct-code-b-yellow">first</span> node is'
			+ ' initialized with the values are passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
			+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() +')</span>.';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('methodPassedValFrstNXInit');
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

function initFrstNVarInMethod(arrowId, text, selector) {	//In method declaration first & var dec text 
	arrow(arrowId, arrowId, function() {
		$('.introjs-tooltip').removeClass('hide');
		text = 'Here, the <span class="ct-code-b-yellow">first</span> node and <span class="ct-code-b-yellow">' + text + '</span> variable are'
				+ ' initialized with the values are passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
				+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() +  ', ' + $(selector).text() + ')</span>.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('methodPassedValFrstNXInit');
		});
	});
}

function initFrstInMethod(callBackFunction) {	//create first and init first
	introjs.refresh();
	arrow('#' + buttonName + 'MthdDec', '#' + buttonName + 'MthdDec', function() {
		$('.introjs-tooltip').removeClass("hide");
		text = 'Here, <span class="ct-code-b-yellow">first</span> node is initialized with the value passed by the <span class="ct-code-b-yellow">'
				+ buttonName + '()</span> method.<br> i.e., <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() + ')</span>.';
		typing('.introjs-tooltiptext', text, function() {
			declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
				introjs.refresh();
				nextBtnWithoutCalling(function() {
					$('#animationDiv').addClass('z-index1000000');
					varDecNInit('#decFstVar', '#firstNode', '#firstNodeVal', '#firstVal', function () {
						if ($('#firstNodeVal').text() != "NULL") {
							svgAnimatingLineTopToBottom('#animationDiv', '#firstNode', '#dataDiv' + lastNodeCount, '#svgId', 'line15', 'arrow');
						}
						if (typeof callBackFunction === 'function') {
							callBackFunction();
						}
					});
				});
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


function methodPassedValFrstNXInit() { //addNodes && deleteAtEnd && deleteAtBegin method
	$('.introjs-duplicate-nextbutton').remove();
	$('#animationDiv').addClass('z-index1000000');
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introjs.refresh();
		setTimeout(function() {
			varDecNInit('#decFstVar', '#firstNode', '#firstNodeVal', '#firstVal', function() {
				if ($('#firstNodeVal').text() != "NULL") {
					$("#line11").remove();
					svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv" + lastNodeCount, "#svgId", "line11", "arrow");
				}
				$("#subVal").text("(" + buttonName + ")");
				if (buttonName == 'addNodes' || buttonName == 'insertAtEnd' || buttonName == 'insertAtBegin') {
					varDecNInit('#decXVar', '#xValDecInAdd', '#xValInAdd', '#xValInMain', function() {	
						if (buttonName == 'insertAtBegin') {
							appendNextBtn('initTempNode');
						} else {
							appendNextBtn('initTempAndLstToFrst');
						}
					});
				} else if (buttonName == 'deleteAtEnd' || buttonName == 'deleteAtBegin') {
					appendNextBtn('initTempAndLstToFrst');
				}
			});
		},800);
	});
}

function initTempAndLstToFrst() { //addNodes() && deleteAtEnd() && deleteAtBegin
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#'+ buttonName +'MthdDec', '#decTempNLstNde');
	if (buttonName == 'deleteAtBegin') {
		text = 'Here, we declared a <span class="ct-code-b-yellow">lastNode</span> node and it will be initialized with'
				+' the <span class="ct-code-b-yellow">first</span> value (i.e.,'
				+ ' <span class="ct-code-b-yellow"> ' + $('#firstNodeVal').text() + '</span>).';
	} else {
		text = 'Here, we declared two nodes <span class="ct-code-b-yellow">temp</span> and <span class="ct-code-b-yellow">lastNode</span>, '
			+ '<span class="ct-code-b-yellow">lastNode</span> is initialized with the <span class="ct-code-b-yellow">first</span> value (i.e.,'
			+ ' <span class="ct-code-b-yellow"> ' + $('#firstNodeVal').text() + '</span>).';
	}
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(function() {
			if (buttonName != 'deleteAtBegin') {
				declareNodesWhenFunctionCall('tempNode', 'tempNodeVal', 'tempNodeInAddMtd', 'temp<sub>' + buttonName + '</sub>');
			}
				declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInAddMtd", "lastNode", function() {
					$("#tempNode, #lastNode").addClass("margin-left30");
					if (buttonName != 'deleteAtBegin') {
						transferEffect('#decTempNLstNde', '#tempNode');
					}
						varDecNInit('#decTempNLstNde', '#lastNode', '#lastNodeVal', '#firstNodeVal', function() {
							if ($('#firstNodeVal').text() != "NULL") {
								$("#line13").remove();
								svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv1", "#svgId", "line13", "arrow");
							}
							if (buttonName == 'addNodes' || buttonName == 'insertAtEnd') {
								appendNextBtn('callToCreateMethod');
							} else {	//deleteAtEnd() && deleteAtBegin
								appendNextBtn('lstNextToNl');
							} 
						});
				});
		});
	});
}


function lstNextToNl() { //deleteAtEnd() if (lastNode -> next == NULL)
	$('.introjs-duplicate-nextbutton').remove();
	var t = $('#next' + lastNodeCount).text();
	arrow('#decTempNLstNde', '#ifLstNxtEqlToNl');
	conditionChecking('#lstNxtToNul', 'lastNode -> next', '==', 'NULL', t, false, '', function() {
		var cond = t == 'NULL';
		conditionMessage(cond, function() {
			if (cond) {
				if (buttonName == "deleteAtEnd" || buttonName == 'deleteAtBegin') { //deleteAtEnd
					nextBtnWithoutCalling(function() {
						arrow('#ifLstNxtEqlToNl', '#streTmpToFrst', function() {
							NullToSpecificNode('first', function() {
								streNullInfrst('#firstNodeVal', '#line11', function() {
									nextBtnWithoutCalling(function() {
										arrow('#streTmpToFrst', '#printf2', function() {
											printfCount = 2;
											printDeleteNode(1);
										});
									});
								});
							});
						});
					});
				} 
			} else {
				if (buttonName == "deleteAtEnd") { //deleteAtEnd
					nextBtnWithoutCalling(function() {
						arrow('#ifLstNxtEqlToNl', '#whileLstNxtEqlToNl', function() {
							lastNodeCount = 1;
							elseConText();
						});
					});
				} else if (buttonName == 'deleteAtBegin') {
					nextBtnWithoutCalling(function() {
						arrow('#ifLstNxtEqlToNl', '#fstToFstNxt', function() {
							assignValfromOneVarToAnotherVar('first -> next', 'first', $('#next1').text().trim(), function() {
								lastNodeCount++;
								storeValAndDrawLine('#next1', '#firstNodeVal', 'line11', '#firstNode', function() {
									lastNodeCount--;
									arrow('#fstToFstNxt', '#fstPreToNl', function() {
										NullToSpecificNode('first -> prev', function() {
											streNullInfrst('#prev' + (lastNodeCount + 1), '#line' + (lastNodeCount), function() {
												$('#line2' + lastNodeCount).remove();
												arrow('#fstPreToNl', '#printf2', function() {
													printfCount = 2;
													printDeleteNode(1);
												});
											});
										});
									});
								});
							});
						});
					});
				}
			}
		});
	});
}

function printDeleteNode(delNodeNum) { //print delete node 
	text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">' + $("#data" + delNodeNum).text() +'</span>.'
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#consoleId', 'printDelNode');
		$('.introjs-nextbutton').show();
	});
}

function NullToSpecificNode(selector1, callBackFunction) { //deleteAtEnd
	text = 'Here, We are assigning a <span class="ct-code-b-yellow">NULL</span> to <span class="ct-code-b-yellow">'+ selector1+'</span> node.'; 
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function streNullInfrst(selector1, lineNum, callBackFunction) { //deleteAtEnd first = NULL
	$('.introjs-duplicate-nextbutton').remove();
	$(selector1).parent().effect("highlight", {color : 'blue'}, 400);
	$(selector1).text('NULL').addClass('opacity00');
	zoomInEffect(selector1, function() {
		$(lineNum).remove();
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function callToFreeMethod() {
	$('.introjs-duplicate-nextbutton').remove();
	if (buttonName == 'deleteAtEnd') {
		deleteAtEndNode();
	} else if (buttonName == 'deleteAtBegin') {
		deleteAtBeginNode();
	}
}

function deleteAtEndNode() {
	TweenMax.to("#node" + lastNodeCount, 0.5, { top : -80, onComplete: function() {
		$("#node" + lastNodeCount).remove();
		introjs.refresh();
		if ($('.nodes').length == 0) {
			$('line').remove();
			appendNextBtn("returnFirstNode");
		} else {
			$('#line13').remove();
			nodeCount--;
			appendNextBtn("returnFirstNode");
		}
	}});
}

function deleteAtBeginNode() {
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		if ($('.nodes').length == 1) {
			$("#node1").remove();
			$('line').remove();
			appendNextBtn("returnFirstNode");
		} else {
			$('line').remove();
			$('#node1').addClass('opacity00').css({'top': '0'});
			deleteAtFirstNode(1, '#node1', function() {
				setTimeout(function() {
					changeIdsBasedOnCond(1, function() {
						if ($('.nodes').length >= 4) {
							$('#node4').css({'float' : 'left'});
						}
						svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv1", "#svgId", "line11", "arrow");
						regenerateArrows();
						lineFlag = false;
						appendNextBtn("returnFirstNode");
					});
				}, 1000);
			});
		}
	}});
}

function returnFirstNode() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#freeLst", "#retnFrst", function() {
		$('.introjs-tooltip').removeClass("hide");
		text = 'The <span class="ct-code-b-yellow">' + buttonName + '()</span> method return <span class="ct-code-b-yellow">first</span> value'
				+ ' <span class="ct-code-b-yellow">' + $("#firstNodeVal").text() + '</span>.'
		typing('.introjs-tooltiptext', text, function() {
			$('#animationDiv').removeClass('z-index1000000');
			introNextSteps("#"+ buttonName +"NodeMethod", 'retnFstVal', 'bottom');		
			$('.introjs-nextbutton').show();
		});
	});
}

function callToCreateMethod() {
	$('.introjs-duplicate-nextbutton').remove();
	$('#animationDiv').removeClass('z-index1000000');
	arrow('#decTempNLstNde', '#createNodeMethod', function() {
		text = 'Here, we are calling <span class="ct-code-b-yellow">createNode()</span> method and the return value is stored in'
				+ ' <span class="ct-code-b-yellow">temp</span>.';
		typing('.introjs-tooltiptext', text, function() {
			introNextSteps('#csllOperations');
			$('.introjs-nextbutton').show();
		});
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
						if ($('#insertAtBegin').hasClass('insert-begin')) {
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
		if ($('#insertAtBegin').hasClass('insert-begin')) {
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
		lastNodeCount = 1;
		nextBtnWithoutCalling(function() {
			if (buttonName == 'insertAtBegin') {
				fstNtEqlToNl('#streXValInTmpDt');
			} else {
				arrow('#streXValInTmpDt', '#ifFrstEqlToNl', function() {
					ifConText($('#firstVal').text());
				});
			}
		});
	});
}

function ifConText(t) {
	$('.introjs-duplicate-nextbutton').remove();
	conditionChecking('#fstToNul', 'first', '==', 'NULL', t, false, '', function() {
		var cond = t == 'NULL';
		conditionMessage(cond, function() {
			if (buttonName == 'traverseList') {	//traverseList
				if (cond) {
					printfCount = 1;
					introNextSteps('#printf1', 'listEmpty');
				} else {
					printfCount = 2;
					introNextSteps('#printf2', 'displayElemnts');
				}
				$('.introjs-nextbutton').show();
			} else if (buttonName == 'deleteAtEnd' || buttonName == 'deleteAtBegin') {	//deleteAtEnd && deleteAtBegin
				if (cond) {
					printfCount = 1
					introNextSteps('#printf1', 'listIsEmpty');
				} else {
					introNextSteps('#'+ buttonName +'NodeMethod', 'callToMethod');
				}
				$('.introjs-nextbutton').show();
			} else {	//addNodes, insertAtEnd
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
			}
		});
	});
}

function elseConText() {
	var t = $('#next' + lastNodeCount).text().trim();
	conditionChecking('#lstNxtEqlToNl', 'lastNode -> next', '!=', 'NULL', t, false, '', function() {
		var con = t != 'NULL';
		conditionMessage(con, function() {
			nextBtnWithoutCalling(function() {
				if (buttonName == 'addNodes' || (buttonName == 'insertAtEnd')) {
					if (con) {
						arrow('#whileLstNxtEqlToNl','#strLstNxtToLst', function() {
							whileTrueConText();
						});
					} else {
						arrow('#whileLstNxtEqlToNl','#streTmpToLstNxt', function() {
							whileFalseConText();
						});
					}
				} else {	//deleteAtEnd
					if (con) {
						arrow('#whileLstNxtEqlToNl','#tmpToLst', function() {
							assignValfromOneVarToAnotherVar('lastNode', 'temp', $('#lastNodeVal').text(), function() {
								storeValAndDrawLine('#lastNodeVal', '#tempNodeVal', 'line12', '#tempNode', function() {
									arrow('#tmpToLst','#strLstNxtToLst', function() {
										whileTrueConText();
									});
								});
							});
						});
					} else {
						arrow('#whileLstNxtEqlToNl', '#tmpNxtToNl', function() {
							$('#tempNodeVal').parent().effect("highlight", {color : 'blue'}, 400);
							svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv"+ (lastNodeCount - 1), "#svgId", "line31", "arrow", function() {
								$("#line31").remove();
								$('#next' + (lastNodeCount - 1)).parent().effect("highlight", {color : 'blue'}, 400);
								NullToSpecificNode('temp -> next', function() {
									streNullInfrst('#next' + (lastNodeCount - 1), '#line' + (lastNodeCount - 1), function() {
										$('#line2' + (lastNodeCount - 1)).remove();
										nextBtnWithoutCalling(function() {
											arrow('#tmpNxtToNl', '#printf2', function() {
												printfCount = 2;
												printDeleteNode(lastNodeCount);
											});
										});
									});
								});
							});
						});
					}
				}
			});
		});
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
				if ($('#lastNodeVal').text().trim() != 'NULL') {
					svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
				}
				nextBtnWithoutCalling(function() {
					if (buttonName == 'traverseList' || buttonName == 'count') {	//traverseList & count
						arrow('#lstNxtToLst', '#wleLstEqlToNl', function() {
							whileCondInTraverse();
						});
					} else {	//addNodes, insertAtEnd & deleteAtEnd & deleteAtBegin
						arrow('#strLstNxtToLst','#whileLstNxtEqlToNl', function() {
							elseConText();
						});
					}
				});
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
			nextBtnWithoutCalling(function() {
				arrow('#streTmpToLstNxt', '#streLstToTmpPrev', function() {
					streLstIntmpPrev();
				});
			});
		});
	});
}

function streLstIntmpPrev() { //temp -> prev = lastNode
	assignValfromOneVarToAnotherVar('lastNode', 'temp -> prev', $('#lastNodeVal').text().trim(), function() {
		var id1, id2, lFlag;
		if ($('.nodes').length > 5) {	//arrow reverse after length 5
			id1 = 'next';
			id2 = 'prev';
			lFlag = true;
		} else {
			id1 = 'prev';
			id2 = 'next';
			lFlag = false;
		}
		drawDoubleLine('#lastNodeVal', '#prev' + (lastNodeCount + 1), '#' + id1 + 'Div' + (lastNodeCount + 1), 'line2' + lineCount, 
				'#' + id2 + 'Div'+ lastNodeCount, lFlag, function() {
			lineCount++;
			nextBtnWithoutCalling(function() {
				$('#animationDiv').removeClass('z-index1000000');
				lineFlag = false;
				arrow('#streLstToTmpPrev', '#retnFrst', function() {
					retrnFrst('first', '#firstNodeVal');
				});
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
			if ($('#insertAtBegin').hasClass('insert-begin')) {	//in begin first node 
				svgAnimatingLineTopToBottom('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			} else if ($('.nodes').length == 5) {	//5th node
				svgAnimatingLineBottomToTop('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			} else {
				svgAnimatingLineRightToLeft('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			}
		} else {
			if ($('#insertAtBegin').hasClass('insert-begin')) {	//in begin first node
				svgAnimatingLineBottomToTop('#animationDiv', selector3, selector4, '#svgId', lineId, 'arrow');
			} else if ($('.nodes').length == 5) {	//5th node
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


//arrows regenerate
function regenerateArrows() {
	var len = $(".nodes").length;
	svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv1', '#svgId', 'line10', 'arrow');
	for (var i = 1; i < len; i++) {
		drawDoubleLines('#nextDiv', 'line' + i, '#prevDiv', i, true);
		drawDoubleLines('#prevDiv', 'line2' + i, '#nextDiv', i, false);
	}
}

function drawDoubleLines(selector1, lineId, selector2, i, arrowFrom, callBackFunction) {
	lineFlag = true;
	$(lineId).remove();
	if (arrowFrom) {
		if (i < 4) {
			svgAnimatingLineRightToLeft('#animationDiv', selector1 + i, selector2 + (i + 1), '#svgId', lineId, 'arrow');
		} else if (i == 4) {
			svgAnimatingLineBottomToTop('#animationDiv', selector1 + i, selector2 + (i + 1), '#svgId', lineId, 'arrow');
		} else {
			svgAnimatingLineLeftToRight('#animationDiv', selector2 + i, selector1 + (i + 1), '#svgId', lineId, 'arrow');
		}
	} else {
		if (i < 4) {
			svgAnimatingLineLeftToRight('#animationDiv', selector1 + (i + 1), selector2 + i, '#svgId', lineId, 'arrow');
		} else if (i == 4) {
			svgAnimatingLineTopToBottom('#animationDiv', selector1 + (i + 1), selector2 + i, '#svgId', lineId, 'arrow');
		} else {
			svgAnimatingLineRightToLeft('#animationDiv', selector2 + (i + 1), selector1 + i, '#svgId', lineId, 'arrow');
		}
	}
	if (typeof callBackFunction === 'function') {
		callBackFunction();
	}
}

function streFrstInTmp() {
	$('.introjs-duplicate-nextbutton').remove();
	text = 'Here, <span class="ct-code-b-yellow">temp</span> value (i.e., <span class="ct-code-b-yellow">' + $('#tempNodeVal').text() + '</span>)'
			+ ' is stored in <span class="ct-code-b-yellow">first</span>.';
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(function() {
			if ($('#insertAtBegin').hasClass('insert-begin')) {
				fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#firstNodeVal', false, function() {
					$('#line13, #line11').remove();
					svgAnimatingLineBottomToTop('#animationDiv', '#firstNode div:first', '#dataDiv1', '#svgId', 'line11', 'arrow', function() {
						nextBtnWithoutCalling(function() {
							$('#animationDiv').removeClass('z-index1000000');
							arrow('#streTmpToFrst', '#retnFrst', function() {
								retrnFrst('first', '#firstNodeVal');
							});
						});
					});
				});
			} else {
				storeValAndDrawLine('#tempNodeVal', '#firstNodeVal', 'line13', '#firstNode', function() {
					$('#animationDiv').removeClass('z-index1000000');
					arrow('#streTmpToFrst', '#retnFrst', function() {
						retrnFrst('first', '#firstNodeVal');
					});
				});
			}
		});
	});
}


function storeValAndDrawLine(selector1, selector2, lineNum, selector3, callBackFunction) {
	fadeInBounceEffectWithTimelineMax(selector1, selector2, false, function() {
		$('#'+lineNum).remove();
		svgAnimatingLineTopToBottom('#animationDiv', selector3, '#dataDiv' + lastNodeCount, '#svgId', lineNum, 'arrow', function() {
			nextBtnWithoutCalling(function() {
				if (typeof callBackFunction === 'function') {
					callBackFunction();
				}
			});
		});
	});
}

function retrnFrst(text, selector) {
	$('.introjs-tooltip').removeClass('hide');
	text = 'The <span class="ct-code-b-yellow">return</span> statement returns the <span class="ct-code-b-yellow">' + text + '</span> value (i.e.,'
			+ ' <span class="ct-code-b-yellow">' + $(selector).text() +'</span>).';
	typing('.introjs-tooltiptext', text, function() {
		if (buttonName == 'addNodes') {
			introNextSteps('#addNodesMethod', 'retnFstVal');
		} else if (buttonName == 'count') {
			printfCount = 1;
			introNextSteps('#printf1', 'printCount');
		} else if (buttonName == 'insertAtEnd' || buttonName == 'insertAtBegin') {
			introNextSteps('#insrtBgnEndMethod', 'retnFstVal');
		}
		$('.introjs-nextbutton').show();
	});
}


function initLstTofirst() {	//traverse start
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#' + buttonName + 'MthdDec', '#initLstToFst', function() {
		text = 'Here, we declared <span class="ct-code-b-yellow">lastNode</span> and initialized with <span class="ct-code-b-yellow">first</span>'
				+ ' node value (i.e., <span class="ct-code-b-yellow">' + $('#firstNodeVal').text() + '</span>)';
		typing('.introjs-tooltiptext', text, function() {
			declareNodesWhenFunctionCall('lastNode', 'lastNodeVal', 'lastNodeInTraverse', 'lastNode', function() {
				$("#lastNode").addClass("margin-left30");
				introjs.refresh();
				nextBtnWithoutCalling(function() {
					varDecNInit('#initLstToFst', '#lastNode', '#lastNodeVal', '#firstNodeVal', function () {
						if ($('#firstNodeVal').text() != 'NULL') {
							svgAnimatingLineTopToBottom('#animationDiv', '#lastNode', '#dataDiv1', '#svgId', 'line13', 'arrow');
						}
						if (buttonName == 'count') {	//count
							appendNextBtn('initSum');
						} else {	//traverse list
							nextBtnWithoutCalling(function() {
								arrow('#initLstToFst', '#wleLstEqlToNl', function() {
									whileCondInTraverse();
								});
							});
						}
					});
				});
			});
		});
	});
}

function whileCondInTraverse() {	//while(lastNode != NULL)
	$('.introjs-duplicate-nextbutton').remove();
	var t = $('#lastNodeVal').text();
	conditionChecking('#lstEqlToNl', 'lastNode', '!=', 'NULL', t, false, '', function() {
		var con = t != 'NULL';
		conditionMessage(con, function() {
			$('#animationDiv').removeClass('z-index1000000');
			if (buttonName == 'count') {	//count
				if (con) {
					appendNextBtn('sumIncrement');
				} else {
					nextBtnWithoutCalling(function() {
						arrow('#wleLstEqlToNl', '#returnSm', function() {
							retrnFrst('sum', '#opVal');
						});
					});
				}
			} else {	//traverse
				if (con) {
					appendNextBtn('printData');
				} else {
					nextBtnWithoutCalling(function() {
						$('.introjs-tooltip').addClass('hide');
						arrow('#wleLstEqlToNl', '#printf4', function() {
							$('#printf4').effect('highlight', {color: 'blue'}, 500);
							customIntroNxtStep('#consoleId', 'printNull');
						});
					});
				}
			}
		});
	});
}

function printData() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#wleLstEqlToNl', '#printf3', function() {
		text = 'Here, we are printing <span class="ct-code-b-yellow">lastNode \'s data</span> (i.e., <span class="ct-code-b-yellow">'
				+ $('#data' + lastNodeCount).text() + '</span>)';
		typing('.introjs-tooltiptext', text, function() {
			introNextSteps('#consoleId', 'prntngElem');
			$('.introjs-nextbutton').show();
		});
	});
}	//end of traverse

function initSum() {	//count start
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#initLstToFst', '#initSumZero', function() {
		text = 'An int variable <span class="ct-code-b-yellow">sum</span> is declared and initialized with <span class="ct-code-b-yellow">0</span>.';
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCalling(function() {
				$('#extraNode').text('sum');
				$('#opVal').text('0');
				nodeCount = 0;
				transferEffect('#initSumZero', '#opValDec', function() {
					zoomInEffect('#opVal', function() {
						nextBtnWithoutCalling(function() {
							arrow('#initSumZero', '#wleLstEqlToNl', function() {
								whileCondInTraverse();
							});
						});
					});
				});
			});
		});
	});
}

function sumIncrement() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#wleLstEqlToNl', '#sumInc', function() {
		nodeCount++;
		text = 'Here, <span class="ct-code-b-yellow">sum</span> value is incremented by one (i.e., <span class="ct-code-b-yellow">'
				+ nodeCount +'</span>).';
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCalling(function() {
				$('#animationDiv').addClass('z-index1000000');
				transferEffect('#sumInc', '#opValDec', function() {
					$('#opVal').parent().effect('highlight', {color: 'blue'}, 500);
					flipEffectWithTweenMax('#opVal', nodeCount, function() {
						nextBtnWithoutCalling(function() {
							arrow('#sumInc', '#lstNxtToLst', function() {
								whileTrueConText();
							});
						})
					});
				})
			});
		});
	});
}	//end of count

function initTempNode() {	//insertAtBegin
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#insertAtBeginMthdDec', '#decTempNLstNde', function() {
		text = 'Here, we declared a <span class="ct-code-b-yellow">temp</span> node.';
		typing('.introjs-tooltiptext', text, function() {
			declareNodesWhenFunctionCall('tempNode', 'tempNodeVal', 'tempNodeInAddMtd', 'temp<sub>' + buttonName + '</sub>', function() {
				$("#tempNode").addClass("margin-left30");
				transferEffect('#decTempNLstNde', '#tempNode', function() {
					appendNextBtn('callToCreateMethod');
				});
			});
		});
	});
}

function fstNtEqlToNl(selector) {	//insertAtBegin if (first != NULL)
	arrow(selector, '#ifFrstNtEqlToNl', function() {
		var t = $('#firstVal').text();
		conditionChecking('#fstToNul', 'first', '!=', 'NULL', t, false, '', function() {
			if ($('.nodes').length > 1) {
				lastNodeCount = 2;
			} else {
				lastNodeCount = 1;
			}
			var cond = t != 'NULL';
			conditionMessage(cond, function() {
				if (cond) {
					appendNextBtn('fstNtNlTrueFstToTmpNxt');
				} else {
					nextBtnWithoutCalling(function() {
						arrow('#ifFrstNtEqlToNl', '#streTmpToFrst', function() {
							streFrstInTmp();
						});
					});
				}
			});
		})
	});
}

function fstNtNlTrueFstToTmpNxt() {	//temp -> next = first	(double line for insertAtBegin)
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#ifFrstNtEqlToNl', '#fstToTmpNxt', function() {
		assignValfromOneVarToAnotherVar('first', 'temp -> next', $('#firstVal').text(), function() {
			drawDoubleLine('#firstVal', '#next' + (lastNodeCount - 1), '#nextDiv' + (lastNodeCount - 1), 'line' + lineCount, '#prevDiv' 
					+ lastNodeCount, true, function() {
				appendNextBtn('tmpToFstPrev');
			});
		});
	});
}

function tmpToFstPrev() {	//first -> prev = temp (double line for insertAtBegin)
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#fstToTmpNxt', '#tmpToFstPrev', function() {
		assignValfromOneVarToAnotherVar('temp', 'first -> prev', $('#prev' + lastNodeCount).text(), function() {
			drawDoubleLine('#tempNodeVal', '#prev' + lastNodeCount, '#prevDiv' + nodeCount, 'line2' + lineCount, '#nextDiv' + (nodeCount - 1), false,
					function() {
				lineCount++;
				nextBtnWithoutCalling(function() {
					$('#animationDiv').removeClass('z-index1000000');
					lineFlag = false;
					$('#animationDiv').addClass('z-index1000000');
					arrow('#tmpToFstPrev', '#streTmpToFrst', function() {
						streFrstInTmp();
					});
				});
			});
		});
	});
}

function deleteAtFirstNode(count, nodeId, callBackFunction) {
	if (count <= $(".nodes").length ) {
		TweenMax.to($("#dynamicNodes .nodes").not(nodeId).eq(count - 1), 1, {left : "-120px", onComplete: function() {
			$.each($("#dynamicNodes .nodes").not(nodeId), function() {
				$(this).css("left", "0");
			});
			$(nodeId).remove();
		}});
		count++;
		deleteAtFirstNode(count, nodeId, callBackFunction);
	} else {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
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
	if (buttonNames == 'deleteAtBegin' || buttonNames == 'deleteAtEnd' || buttonNames == 'deleteAtPosition') {
		changeIds(val, $('.lines'), 'line');
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
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
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 1.5;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 1.5;
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
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 5;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 5;
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

function orderingNodes(val, callBackFunction) {	//insertAtBegin node moving
	if ($('#insertAtBegin').hasClass('insert-begin')) {
		$('#dynamicNodes .nodes:first').before('<div class="opacity00 col-xs-2 nodes hide" id="node' + (nodeCount - 1)
						+ '" style="top: 0px; width: auto;">' + $('#posNodes > #node' + (nodeCount - 1)).html() + '</div>');
	}
	changeIdsBasedOnCond(1, function() {
		$('line').remove();
		movingNodes(val, '#node1', function() {
			setTimeout(function() {
				positioningNodes(function() {
					if (typeof callBackFunction === 'function') {
						callBackFunction();
					}
				});
			}, 1200);
		});
	});
}

function movingNodes(val, nodeId, callBackFunction) {	//All nodes move except nodeId
	if (val <= $('#dynamicNodes .nodes').length) {
		var lVal;
		if (val <= 4) {
			lVal = '120px';
		} else {
			lVal = '-120px';
		}
		TweenMax.to($('#dynamicNodes .nodes').not(nodeId).eq(val - 1), 1, {left: lVal, onComplete: function () {
	        $(nodeId).removeClass('hide');
	        if ($('#dynamicNodes .nodes').length > 4) {	//insertAtBegin
        		$('#node5').css({'float' : 'right'});
        	}
	        $.each($('#dynamicNodes .nodes').not(nodeId), function (idx) {
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

function positioningNodes(callBackFunction) {
	var l1 = $("#posNodes #node" + (nodeCount - 1)).offset();
	var l2 = $("#dynamicNodes #node" + (nodeCount - 1)).offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenLite.to("#posNodes > #node" + (nodeCount - 1), 0.5, {top : topLength, left : leftLength, onComplete: function() {
		$("#dynamicNodes #node" + (nodeCount - 1)).html($("#posNodes > #node" + (nodeCount - 1)).html()).removeClass("opacity00");
		$("#posNodes").remove();
		introjs.refresh();
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}
