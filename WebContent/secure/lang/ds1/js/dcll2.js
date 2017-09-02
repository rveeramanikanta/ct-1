var buttonNames = ['Add Nodes', 'Insert At Begin', 'Insert At End',
	                   'Delete At Position', 'Delete At End', 'Count', 'Traverse List'];
var buttonName, printfCount, outPutCount, lastNodeCount, lineCount = nodeCount =  iVal = 1;
var lineFlag = false;

function dcllReadyFunction() {
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

function getRandomInt(min, max) { //access random address 
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(val) { //dynamically create a empty new node
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
			svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv1", "#svgId", "line11", "arrow");
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

function preDeleteAtEndMthdInMain() {	//deleteAtEnd() in main()
	$('#inMain').append('<div id="deleteAtEndNodeMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="fstToNul">if (first == NULL) {</span>\n'
					+ '\t<span id="printf1">printf("Linked List is empty "\n'
					+ '\t\t"so Deletion is not possible");</span>\n'
					+ '} else {\n'
					+ '\t<span id="deleteAtEndNodeMethod">first = deleteAtEnd(first);</span>\n'
					+ '}\n</div>');
}

function preDeleteAtPositionMthdInMain() {	//deleteAtPosition() in main()
	$('#inMain').append('<div id="deleteAtPositionNodeMainDiv"><div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="intlPos">int pos;</span>\n'
					+ '<span id="fstToNul">if (first == NULL) {</span>\n'
					+ '\t<span id="printf1">printf("Linked List is empty "\n'
					+ '\t\t"so Deletion is not possible");</span>\n'
					+ '} else {\n'
					+ '\t<span id="printf2">printf("Enter a position : ");</span>\n'
					+ '\t<span id="scanf2">scanf("%d", &pos);</span>\n'
					+ '\t<span id="posLesThnEqZero">if (<span id="posLessThanZero">pos <= 0</span>)</span>\n'
					+ '\t\t<span id="printf3">printf("No such position in Doubly Linked"\n'
					+ '\t\t\t" List so deletion is not possible");</span>\n'
					+ '\t} else {\n'
					+ '\t<span id="deleteAtPositionNodeMethod">first = deleteAtPosition(first, pos);</span>\n'
					+ '\t}\n'
					+ '}\n</div>');
}

function preAddNodesMethod() {	//addNodes()
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

function preDeleteAtEndMethod() {	//deleteAtEnd() 
	$('#csllMethodOperations').append('<div id="addNodesDiv"><span id="'+ buttonName + 'MthdDec">node '+ buttonName +'('
					+ '<span id="decFstVar">node first</span>) {</span>\n'
					+ '\t<span id="decTempNLstNde">node temp, lastNode = first</span>\n'
					+ '\t<span id="lstNxtEqNl">if (<span id="chkLstNxtEqst">lastNode -> next == first</span>) {</span>\n'
					+ '\t\t<span id="streNlInFrst">first = NULL;</span>\n'
					+ '\t} else {\n'
					+ '\t\t\t<span id="whileLstNxtEqlToNl">while (<span id="lstNxtEqlToNl">lastNode -> next != first</span>) {</span>\n'
					+ '\t\t\t\t<span id="streLstToTmp">temp = lastNode;</span>\n'			
					+ '\t\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
					+ '\t\t\t}\n'
					+ '\t\t<span id="streFstToTmpNext">temp -> next = first;</span>\n'
					+ '\t\t<span id="streTmpToFstPrev">first -> prev = temp;</span>\n'
					+ '\t}\n'
					+ '\t<span id="printf2">printf("The deleted item from Doubly Linke List : %d", lastNode -> data);</span>\n'
					+ '\t<span id="freeLstNde">free(lastNode);</span>\n'
					+ '\t<span id="retnFrst">return first;</span>\n'
					+ '}</div>');
}

function preDeleteAtPositionMethod() {
	$('#csllMethodOperations').append('<div id="addNodesDiv"><span id="'+ buttonName + 'MthdDec">node '+ buttonName +'('
			+ '<span id="decFstVar">node first</span>, <span id="decPosVar">int pos</span>) {</span>\n'
			+ '\t<span id="decTempNLstNde">node temp = first, lastNode = first;</span>\n'
			+ '\t<span id="declareiVar">int i;</span>\n'
			+ '\t<span id="ifPosEqOne">if (<span id="posWqOne">pos == 1</span>) {</span> \n'
			+ '\t\t<span id="lstNxtEqNl">if (<span id="chkLstNxtEqst">lastNode -> next == first</span>) {</span>\n'
			+ '\t\t\t<span id="streNlInFrst">first = NULL;</span>\n'
			+ '\t\t} else {\n'
			+ '\t\t\t<span id="whileLstNxtEqlToNl">while (<span id="lstNxtEqlToNl">lastNode -> next != first</span>) {</span>\n'
			+ '\t\t\t\t<span id="strLstNxtToLst">lastNode = lastNode -> next;</span>\n'
			+ '\t\t\t}\n'
			+ '\t\t\t<span id="strefstNxtToLstNxt">lastNode -> next = first -> next;</span>\n'
			+ '\t\t\t<span id="streLstToFstNxtPrev">first -> next -> prev = lastNode;</span>\n'
			+ '\t\t\t<span id="streFrstNxtToFrst">first = first -> next;</span>\n'
			+ '\t\t}\n'
			+ '\t} else {\n'
			+ '\t\t<span id="forLoop">for (<span id="iInit">i = 1;</span> <span id="iCon">i < pos;</span> <span id="iInc">i++</span>) {</span>\n'
			+ '\t\t\t<span id="ifTmpNxtNl">if (temp -> next == first) {</span>\n'
			+ '\t\t\t\t<span id="printf5">printf("No such position in Doubly Circular "\n'
			+ '\t\t\t\t\t"Linked List so deletion is not possible");</span>\n'
			+ '\t\t\t\t<span id="rtnFst">return first;</span>\n'
			+ '\t\t\t}\n'
			+ '\t\t\t<span id="lstToTemp">lastNode = temp;</span>\n'
			+ '\t\t\t<span id="tempToTmpNxt">temp = temp -> next</span>\n'
			+ '\t\t}\n'
			+ '\t\t<span id="ifTmpNxtFst">if (temp -> next == first) {</span>\n'
			+ '\t\t\t\t<span id="lstNxtFst">lastNode -> next = first;</span>\n'
			+ '\t\t\t\t<span id="fstPrevToLstNde">first -> prev = lastNode;</span>\n'
			+ '\t\t\t} else {\n'
			+ '\t\t\t\t<span id="lstNxtToTmpNxt">lastNode -> next = temp -> next</span>\n'
			+ '\t\t\t\t<span id="tmpNxtPrvTolstnde">temp -> next -> prev = lastNode;</span>\n'
			+ '\t\t\t}\n'
			+ '\t\t}\n'
			+ '\t<span id="printf4">printf("The deleted element from SLL : %d" , temp -> data);</span>\n'
			+ '\t<span id="freeTmp">free(temp);</span>\n'
			+ '\t<span id="returnFirst">return first;</span>\n'
			+ '}\n</div>');
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
					outPutCount = printfCount = lastNodeCount =  iVal = 1;
					$('#buttonDiv, .btn, #insertAtBegin').removeClass('opacity00 disabled insert-begin');
					$('#line11, #line12, .extraNode, .fa').remove();
					$('.intVariables, .intValues').addClass('opacity00');
					if ($('.nodes').length == 8) {
						$('#insertAtBegin, #insertAtEnd, #insertAtPosition').addClass('disabled');
					}
					$('#addNodes').off().click(function() {	//addNodes() 
						$('polyline').remove();
						$("#dynamicNodes").empty();
						$('line').remove();
						nodeCount = lineCount = 1;
						buttonCorrespondingText('addNodes');
					});
					$('#deleteAtEnd').off().click(function() {	//deleteAtEnd()
						buttonCorrespondingText('deleteAtEnd');
					});
					$('#deleteAtPosition').off().click(function() {	//deleteAtPosition() 
						buttonCorrespondingText('deleteAtPosition');
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
						case 'deleteAtEnd' :	//deleteAtEnd()
							preDeleteAtEndMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#fstToNul');
						break;
						case 'deleteAtPosition' :	//deleteAtPosition()
							preDeleteAtPositionMthdInMain();
							introjs.refresh();
							customIntroNxtStep('#intlPos');
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
								lineFlag = false;
								if ($('#firstVal').text() != 'NULL') {
									svgAnimatingLineRightToLeft('#animationDiv', '#firstDiv', '#prevDiv1', '#svgId', 'line10', 'arrow');
								}
								$('.extraNode, #line11, #line12').remove();
								introjs.refresh();
								if (buttonName == 'addNodes') {
									outPutCount++;
									printfCount = 2
									customIntroNxtStep('#printf2', 'printText');
								} else {
									customIntroNxtStep('#buttonDiv');
								}
							});
						break;
						case 'readPosVal' :	//deleteAtPosition()
							$('#posVal').text($('#nodeVal' + (outPutCount - 1)).val());
							$('#nodeVal' + (outPutCount - 1)).attr("disabled", "disabled");
							fromEffectWithTweenMax("#nodeVal" + (outPutCount - 1), "#posVal", false, function() {
								customIntroNxtStep("#posLesThnEqZero", "posLesThnEqZero", 'bottom');
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
						case "deletetionNotPossible" : //deleteAtEnd
							customIntroNxtStep("#consoleId", "printDeletionNotPossible");
						break;
						case 'deletedNoElement' :
							customIntroNxtStep("#consoleId", "deletedNoElement");
						break;
						case 'printEnterPosText' :
							customIntroNxtStep("#consoleId", "printEnterPosText");
						break;
					}
				break;
				case 'scanf' + printfCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'scanfReadval':
							customIntroNxtStep('#consoleId', 'enterNodeVal', 'left');
						break;
						case 'readPosVal' :
							customIntroNxtStep("#consoleId", "enterPosVal", "left");
						break;
						
					}
				break;
				case 'consoleId' :
					$("#consoleId, #consoleEnter").removeClass("opacity00");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "printNodeValText"://addNodesMethod
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
						case "printDeletionNotPossible" ://deleteAtEnd && deleteAtPosition
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Linked List is empty so '
									+ 'Deletion is not possible</span><br/>');
							butnStepWithTime();
						break;
						case "deletedNoElement" :	// deleteAtPosition() no such element to delete.
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">No such position in Doubly Circular Linked List '
									+ 'so Deletion is not possible</span><br/>');
							outPutCount++;
							if (buttonName == "deleteAtPosition") {
								if (printfCount == 5) {
									customIntroNxtStep("#csllMethodOperations", "returnFirst", 'left');
								} else {
									customIntroNxtStep("#buttonDiv", "showButtons", 'bottom');
								} 
									
							} else {
								customIntroNxtStep("#csllMethodOperations", "returnFirst", 'left');
							}
						break;
						case 'printDelNode' :
							var val;
							if (buttonName != 'deleteAtPosition') {
								val = lastNodeCount
							} else {
								val = $("#posVal").text()
							}
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The deleted item from Doubly Circular Linked List : '
									+ '<span class="ct-code-b-yellow value"></span></span><br/>');
							$('.value').append($("#data" + val).text());
							customIntroNxtStep("#csllMethodOperations", "freeNode", 'left');
						break;
						case "printEnterPosText" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter a position : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							outPutCount++;
							customIntroNxtStep("#scanf2", "readPosVal", 'bottom');
						break;
						case "enterPosVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = "Please enter a position which element you want to <span class='ct-code-b-yellow'>delete</span>.";
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + (outPutCount - 1)).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'},
										400).focus();
								introNextSteps("#animationDiv", "readPosVal", 'bottom');
								events("#nodeVal" + (outPutCount - 1));
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
							$('#animationDiv').removeClass('z-index1000000');
							introNextSteps('#animationDiv', 'streRetnFstVal', 'left');
							retnValWithFrstNVar();
						break;
					}
				break; 
				case  buttonName+'NodeMethod' :	//deleteAtEnd() && deleteAtBegin() method
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'callToMethod':
							introNextSteps("#csllMethodOperations", buttonName + "MthdDec",  "left");
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
						case 'deleteAtEndMthdDec' :	//deleteAtEnd()
							preDeleteAtEndMethod();
							introjs.refresh();
							initFrstNodeInMathod();
						break;
						case 'freeNode' : //deleteAtEnd()
							var val;
							if (buttonName == 'deleteAtEnd') {
								val = lastNodeCount;
								arrow("#printf2", "#freeLstNde");
							} else  {
								val = $("#posVal").text()
								arrow("#printf4", "#freeTmp");
							}
							$('.introjs-tooltip').removeClass('hide');
							text = 'Now delete the node <span class="ct-code-b-yellow">' + $("#data" + val).text() +'</span> '
									+ 'at address <span class="ct-code-b-yellow">' + $('#dataAddress' + val).text() + '</span>.';
							typing('.introjs-tooltiptext', text, function() {
								appendNextBtn('callToFreeMethod');
							});
						break;
						case 'deleteAtPositionMthdDec' :
							preDeleteAtPositionMethod();
							introjs.refresh();
							arrow('#deleteAtPositionMthdDec', '#deleteAtPositionMthdDec', function() {
								initFrstNodeInMathod();
							});
						break;
						case 'returnFirst' :
							returnFirstNode();
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
				case 'intlPos' :	//deleteAtPosition
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">pos</span> '
							+ 'of type <span class="ct-code-b-yellow">int</span>.';
					typing('.introjs-tooltiptext', text, function() {
						appendNextBtn('declarationOfPosVar');
					});
				break;
				case 'fstToNul' :	//deleteAtEnd() & deleteAtPosition 
					ifConText($('#firstVal').text());
				break;
				case 'posLesThnEqZero' :
					var t = $('#posVal').text();
					conditionChecking('#posLessThanZero', 'pos', '<=', '0', t, false, '', function() {
						var cond = t <= 0;
						conditionMessage(cond, function() {
							if (cond) {
								printfCount = 3;
								introNextSteps("#printf3",'deletedNoElement', 'bottom');
							} else {
								introNextSteps("#deleteAtPositionNodeMethod",'callToMethod', 'bottom');
							}
							$('.introjs-nextbutton').show();
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

function declarationOfPosVar() { 
	$(".introjs-duplicate-nextbutton").remove();
	transferEffect("#intlPos", "#posValDec", function() {
		introNextSteps("#fstToNul", "", "bottom");
		$('.introjs-nextbutton').show();
	});
}

function butnStepWithTime() {
	introNextSteps("#buttonDiv", "showButtons", 'bottom');
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function initFrstNVarInMethod(arrowId, text, selector) {	//In method declaration first & another var dec text 
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

function initFrstNodeInMathod() { // in deleteAtEnd() & deleteAtPosition declaration of first node 
	$('.introjs-tooltip').removeClass('hide');
	text = 'Here, the <span class="ct-code-b-yellow">first</span> node is'
			+ ' initialized with the values are passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br>i.e.,'
			+ ' <span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() +')</span>.';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('methodPassedValFrstNXInit');
	});
}

function methodPassedValFrstNXInit() { //addNodes addNodes(first, x) passed values & deleteAtEnd & deleteAtPosition
	$('.introjs-duplicate-nextbutton').remove();
	$('#animationDiv').addClass('z-index1000000');
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introjs.refresh();
		setTimeout(function() {
			varDecNInit('#decFstVar', '#firstNode', '#firstNodeVal', '#firstVal', function() {
				if ($('#firstNodeVal').text() != "NULL") {
					$("#line11").remove();
					svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv1", "#svgId", "line11", "arrow");
				}
				$("#subVal").text("(" + buttonName + ")");
				if (buttonName == 'addNodes') {
					varDecNInit('#decXVar', '#xValDecInAdd', '#xValInAdd', '#xValInMain', function() {	
						appendNextBtn('initTempAndLstToFrst');
					});
				} else if (buttonName == 'deleteAtEnd' || buttonName == 'deleteAtPosition') {
					$('#extraNode').html('pos<sub>del@pos</sub>');
					varDecNInit('#decPosVar', '#opValDec', '#opVal', '#posVal', function() {
						appendNextBtn('initTempAndLstToFrst');
					});
				}
			});
		},800);
	});
}

function initTempAndLstToFrst() { //addNodes() & deleteAtPosition & deleteAtEnd initialize temp and lastNode = first
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#'+ buttonName +'MthdDec', '#decTempNLstNde');
		text = 'Here, we declared two nodes <span class="ct-code-b-yellow">temp</span> and <span class="ct-code-b-yellow">lastNode</span>, '
			+ '<span class="ct-code-b-yellow">lastNode</span> is initialized with the <span class="ct-code-b-yellow">first</span> value (i.e.,'
			+ ' <span class="ct-code-b-yellow"> ' + $('#firstNodeVal').text() + '</span>).';
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(function() {
			declareNodesWhenFunctionCall('tempNode', 'tempNodeVal', 'tempNodeInAddMtd', 'temp<sub>' + buttonName + '</sub>', function() {
				declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInAddMtd", "lastNode", function() {
					$("#tempNode, #lastNode").addClass("margin-left30");
					if (buttonName != 'deleteAtBegin') {
						transferEffect('#decTempNLstNde', '#tempNode');
					}
					if (buttonName == 'deleteAtPosition') {
						varDecNInit('#decTempNLstNde', '#tempNode', '#tempNodeVal', '#firstNodeVal', function() {
							$("#line12").remove();
							svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv1", "#svgId", "line12", "arrow");
						});
					}
					varDecNInit('#decTempNLstNde', '#lastNode', '#lastNodeVal', '#firstNodeVal', function() {
						if ($('#firstNodeVal').text() != "NULL") {
							$("#line13").remove();
							svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv1", "#svgId", "line13", "arrow");
						}
						if (buttonName == 'addNodes') {
							appendNextBtn('callToCreateMethod');
						} else if (buttonName == 'deleteAtEnd') {	//deleteAtEnd()
							appendNextBtn('iflstNxtIsEqNl');
						} else if (buttonName == 'deleteAtPosition') { //deleteAtPosition
							appendNextBtn('decIVal');

						}
					});
				});
			});
		});
	});
}

function decIVal() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#decTempNLstNde", "#declareiVar");
	text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">i</span> is of type <span class="ct-code-b-yellow">int</span>.';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('decIValAnimation');
	});
}

function decIValAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#countNme").text("i");
	transferEffect("#declareiVar", "#countValDec", function() {
		appendNextBtn('ifPosEqOne');
	});
}

function ifPosEqOne() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#declareiVar","#ifPosEqOne");
	conditionChecking('#ifPosEqOne', "pos", "==", "1", parseInt($("#posVal").text()), false, '', function() {
		t = parseInt($("#posVal").text());
		var cond = t == 1;
		conditionMessage(cond, function() {
			if (cond) {
				arrow('#ifPosEqOne', '#lstNxtEqNl', function() {
					appendNextBtn('iflstNxtIsEqNl');
				});
			} else {
				nextBtnWithoutCalling(function() {
					arrow('#ifPosEqOne', '#forLoop', function() {
						appendNextBtn('forLoop');
					});
				});
			}
		});
	});
}

function forLoop() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#ifPosEqOne", "#forLoop", function() {
		text = 'The <span class="ct-code-b-yellow">i</span> value will be initialize to <span class="ct-code-b-yellow">1</span>.'
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('iValDeclaration');
		});
	});
}

function iValDeclaration() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#countName").text("i");
	transferEffect("#iInit", "#countValDec", function() {
	  $("#countVal").text(iVal);
	  zoomInEffect("#countVal", function() {
		  appendNextBtn("iConText");
	  });
	});
}

function iConText() {
	$(".introjs-duplicate-nextbutton").remove();
	conditionChecking('#iCon', "i", "<", "pos",  iVal, true, parseInt($("#posVal").text()), function() {
		t = parseInt($("#posVal").text());
		var cond = iVal < t;
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {
					arrow('#forLoop', '#ifTmpNxtNl', function() {
						conditionChecking('#ifTmpNxtNl', "temp -> next", "==", "first",  $('#next' + lastNodeCount).text(), true, parseInt($("#firstNodeVal").text()), function() {
							var a = parseInt($('#next' + lastNodeCount).text());
							var b = parseInt($("#firstNodeVal").text());
							var cond = a == b;
							conditionMessage(cond, function() {
								nextBtnWithoutCalling(function() {
									if (cond) {
										arrow('#ifTmpNxtNl', '#printf5', function() {
											printNoSuchElementInDcll();
										});
									} else {
										arrow('#ifTmpNxtNl', '#lstToTemp', function() {
											assignValfromOneVarToAnotherVar('temp', 'lastNode', $('#tempNodeVal').text(), function() {
												$('#tempNodeVal').parent().effect("highlight", {color : 'blue'}, 400);
												fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#lastNodeVal', false, function() {
													$('#line13').remove();
													svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv"+ lastNodeCount, "#svgId", "line13", "arrow", function() {
														arrow('#lstToTemp', '#tempToTmpNxt', function() {
															tempNxtToTemp();
														});
												    });
											    });
											});
										});
									}
								});
							});
						});
					});
				} else {
					arrow('#forLoop', '#ifTmpNxtFst', function() {
						conditionChecking('#ifTmpNxtNl', "temp -> next", "==", "first",  $('#next' + lastNodeCount).text(), true, parseInt($("#firstNodeVal").text()), function() {
							var a = parseInt($('#next' + lastNodeCount).text());
							var b = parseInt($("#firstNodeVal").text());
							var cond = a == b;
							conditionMessage(cond, function() {
								nextBtnWithoutCalling(function() {
									if(cond) {
										arrow('#ifTmpNxtFst', '#lstNxtFst', function() {
											assignValfromOneVarToAnotherVar('first', 'lastNode -> next', $('#firstNodeVal').text(), function() {
												$('#firstNodeVal').parent().effect("highlight", {color : 'blue'}, 400);
												polyline = 2;
												streValFromOneToAnotherAndDrwCircleLine('first', 'lastNode -> next', '#firstNodeVal', '#next' + (lastNodeCount - 1),
														true, '#nextDiv' + (lastNodeCount - 1), '#prevDiv1', 'pUpLine' + polyline, function() {
													arrow('#lstNxtFst', '#fstPrevToLstNde', function() {
														streValFromOneToAnotherAndDrwCircleLine('lastNode', 'first -> prev', '#lastNodeVal', '#prev1',
																false, '#prevDiv1', '#nextDiv' + (lastNodeCount - 1), 'pDownLine' + polyline, function() {
															$('#line' + (lastNodeCount - 1)).remove();
															printfCount = 4;
															arrow('#streLstToFstNxtPrev','#printf4', function() {
																printDeleteNode(parseInt($('#posVal').text()));
															}); 
														});
													});
												});
											});
										});
									} else {
										arrow('#ifTmpNxtFst', '#lstNxtToTmpNxt', function() {
											polyline = 2;
											streValFromOneToAnotherAndDrwCircleLine('temp -> next', 'lastNode -> next', '#next' + lastNodeCount, '#next' + (lastNodeCount - 1),
													true, '#nextDiv' + (lastNodeCount - 1), '#prevDiv1',   'pUpLine' + polyline, function() {
												$('#line' + (lastNodeCount - 1)).remove();
												arrow('#lstNxtToTmpNxt', '#tmpNxtPrvTolstnde', function() {
													streValFromOneToAnotherAndDrwCircleLine('lastNode', 'temp -> next -> prev', '#lastNodeVal', '#prev' + (lastNodeCount + 1),
															false, '#prevDiv1', '#nextDiv' + (lastNodeCount - 1),  'pDownLine' + polyline, function() {
														$('#line2' + (lastNodeCount)).remove();
														printfCount = 4;
														arrow('#streLstToFstNxtPrev','#printf4', function() {
															printDeleteNode(parseInt($('#posVal').text()));
														}); 
													});
												});
											});

											
											
											/*assignValfromOneVarToAnotherVar('temp -> next', 'lastNode -> next', $('#next' + lastNodeCount).text(), function() {
												fadeInBounceEffectWithTimelineMax('#next' + lastNodeCount, '#next' + (lastNodeCount - 1), false, function() {
													assignValfromOneVarToAnotherVar('lastNode', 'temp -> next -> prev', $('#lastNodeVal').text(), function() {
														fadeInBounceEffectWithTimelineMax('#lastNodeVal', '#prev' + (lastNodeCount + 1), false, function() {
															printfCount = 4;
															arrow('#streLstToFstNxtPrev','#printf4', function() {
																printDeleteNode(parseInt($('#posVal').text()));
															}); 
														});
													});
												});
											});*/
										});
									}
								});
							});
						});
					});
				}
			});
		});
	});
}

function tempNxtToTemp() { //temp = temp -> next
	assignValfromOneVarToAnotherVar('temp -> next', 'tempNode', $("#next" + lastNodeCount).text(), function() {
		$('#tempNodeVal').parent().effect("highlight", {color : 'blue'}, 400);
		svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv"+ lastNodeCount, "#svgId", "line31", "arrow", function() {
			$('#line31').remove();
			$('#next' + lastNodeCount).parent().effect("highlight", {color : 'blue'}, 400);
			fadeInBounceEffectWithTimelineMax('#next' + lastNodeCount, '#tempNodeVal', false, function() {
				$('#line12').remove();
				if ($('#tempNodeVal').text().trim() != $('#firstNodeVal').text()) {
					lastNodeCount++;
					svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv" + lastNodeCount, "#svgId", "line12", "arrow");
				} else {
					svgAnimatingLineTopToBottom("#animationDiv", "#tempNode", "#dataDiv" + lastNodeCount, "#svgId", "line12", "arrow");
				}
				nextBtnWithoutCalling(function() {
					incrementIValue();
				});
			});
		}); 
	});
}

function incrementIValue() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#tempToTmpNxt", "#forLoop"); 
	text = 'Now increment the <span class="ct-code-b-yellow">i</span> value by <span class="ct-code-b-yellow">one</span>.'
	typing('.introjs-tooltiptext' , text, function() {
		iVal++;
		flipEffectWithTweenMax("#countVal", iVal, function() {
			appendNextBtn("iConText");
			
		});	
	});
}


/*function iConAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	var pos = $("#nodeVal" + (outPutCount - 1)).val();
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#first", i, function() {
		flipEffectWithTweenMax("#second", pos, function() {
			var con = i < pos;
			if (con) {
				flag = true;
				$("#trueOrFalse").text("====> True").addClass("green-color");
				appendNextBtn('ifLastNodeNextEqualToFirst');
			} else {
				$("#trueOrFalse").text("====> False").addClass("red-color");
				$(".introjs-duplicate-nextbutton").remove();
				appendNextBtn('prevNxtEqLstNextText');
			}
			text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ con +'</span>.';
			typing("#appnedSpan", text, function() {
			});
		});
	});
}
*/



function iflstNxtIsEqNl() {	//deleteAtEnd() if (first == NULL)
	$('.introjs-duplicate-nextbutton').remove();
	if (buttonName == 'deleteAtEnd') {
		arrow('#decTempNLstNde', '#lstNxtEqNl');
	}
	var t = $('#next' + lastNodeCount).text().trim();
	conditionChecking('#chkLstNxtEqst', 'lastNode -> next', '==', 'first', t, true, $('#firstNodeVal').text(), function() {
		var cond = t == $('#firstVal').text();
		conditionMessage(cond, function() {
			nextBtnWithoutCalling(function() {
				if (cond) {
					arrow('#lstNxtEqNl', '#streNlInFrst', function() {
						NullToSpecificNode('first', function() {
							nextBtnWithoutCalling(function() {
								streNullInSpecifiedNode('#firstNodeVal', '#line11', function() {
									nextBtnWithoutCalling(function() {
										if (buttonName == 'deleteAtEnd') {
											printfCount = 2;
										} else {
											printfCount = 4;
										}
										arrow('#streNlInFrst', '#printf' + printfCount, function() {
											printDeleteNode(lastNodeCount);
										});
									});
								});
							});
						});
					});
				} else {
					arrow('#lstNxtEqNl', '#whileLstNxtEqlToNl', function() {
						elseConText();
					});
				}
			});
		});
	});
}

function callToFreeMethod() {	//deleteAtEnd() & deleteAtPosition
	$('.introjs-duplicate-nextbutton').remove();
	if (buttonName == 'deleteAtEnd') {
		deleteAtEndNode();
	} else  {
		deleteAtPositionNode();
	}
}

function deleteAtEndNode() {	//deleteAtEnd()
	TweenMax.to("#node" + lastNodeCount, 0.5, { top : -80, onComplete: function() {
		$("#node" + lastNodeCount).remove();
		introjs.refresh();
		if ($('.nodes').length == 0) {
			$('line, polyline').remove();
			appendNextBtn("returnFirstNode");
		} else {
			$('#line2' + (lastNodeCount - 1) +', #pDownLine1, #pUpLine1, #line13' ).remove();
			nodeCount--;
			$('#pUpLine2').attr('id', 'pUpLine1');
			$('#pDownLine2').attr('id', 'pDownLine1');
			appendNextBtn("returnFirstNode");
		}
	}});
}

function deleteAtPositionNode() {
	if ($("#posVal").text() == 1) {
		if ($('.nodes').length == 1) {
			deleteAtBeginNodeIfLengthIsOne();
		} else {
			deleteAtBeginNodeIfLengthNotEqOne($("#posVal").text(), true);
		}
	} else if ($("#posVal").text() == $(".nodes").length) {
		deleteAtEndNode();
		svgCurveUpper('#nextDiv' + ($('.nodes').length - 1),  '#prevDiv1', "pUpLine1");
		svgCurveDown('#prevDiv1', '#nextDiv' + ($('.nodes').length - 1), "pDownLine1");
	} else {
		deleteAtBeginNodeIfLengthNotEqOne($("#posVal").text(), false);
	}
}

function deleteAtBeginNodeIfLengthIsOne() {
	$('line, polyline').remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$("#node1").remove();
		introjs.refresh();
		appendNextBtn("returnFirstNode");
	}});
}

function deleteAtBeginNodeIfLengthNotEqOne(pos, flag) {
	var posn;
	$('polyline').remove();
	TweenMax.to("#node" + pos, 0.5, { top : -80, onComplete: function() {
		$("#node" + pos).addClass("opacity00").css("top","0");
		deleteAtFirstNode(($(".lines").length), pos, "#node" + pos, function() {  
			$('line, polyline').remove();
			lastNodeCount--;
			setTimeout(function() {
				if (flag) {
					posn = pos;
				} else {
					posn = (pos - 1);
				}
				changeIdsAtBegin(parseInt(posn), function() {
					regenerateArrows(function() {
						appendNextBtn("returnFirstNode");
					})
				});
			},1500);
		});
	}});
}

//arrows regenerate
function regenerateArrows(callBackFunction) {
	var len = $(".nodes").length;
	svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv1", "#svgId", "line11", "arrow");
	svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
	svgAnimatingLineRightToLeft("#animationDiv", "#firstDiv", "#prevDiv1", "#svgId", "line10", "arrow");
	for (var i = 1; i < len; i++) {
		drawDoubleLines('#nextDiv', 'line' + i, '#prevDiv', i, true);
		drawDoubleLines('#prevDiv', 'line2' + i, '#nextDiv', i, false);
	}
	svgCurveUpper('#nextDiv' + $('.nodes').length,  '#prevDiv1', "pUpLine1");
	svgCurveDown('#prevDiv1', '#nextDiv' + $('.nodes').length, "pDownLine1");
	callBackFunction();
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

function changeIds(val, elemParent, idAttr) {//changing Ids based on situation
	$(elemParent).each(function(index){
		$(this).attr('id', (idAttr + (index + val)));
	});
}

function changeIdsAtBegin(val, callBackFunction) {
	changeIds(val, $('#dynamicNodes .nodes'), 'node');
	changeIds(val, $('#dynamicNodes .data-nodes'), 'nodeData');
	changeIds(val, $("#dynamicNodes .prev-div"), "prevDiv");
	changeIds(val, $("#dynamicNodes .data-div"), "dataDiv");
	changeIds(val, $("#dynamicNodes .next-div"), "nextDiv");
	changeIds(val, $("#dynamicNodes .data-address"), "dataAddress");
	changeIds(val, $("#dynamicNodes .prev-span"), "prev");
	changeIds(val, $("#dynamicNodes .data-span"), "data");
	changeIds(val, $("#dynamicNodes .next-span"), "next");
	changeIds(val, $('.lines'), 'lines');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function deleteAtFirstNode(val, count, nodeId, callBackFunction) {
	console.log(val + ' @@3707@@');
		$('line').remove();
		if (count <= val) {
			var l1Val;
			if (count <= 4) {
				l1Val = '-120px';
			} else if (count > 5) {
				l1Val = '120px';
			}
			if (count == 5) {
				TweenMax.to($('#dynamicNodes .nodes').not(nodeId).eq(count - 1), 1, {top: '-68px', onComplete: function() {
					$.each($("#dynamicNodes .nodes").not(nodeId), function() {
						$(this).css("top", "0");
					});
					$(nodeId).remove();
					if ($('#row1 .nodes').length < 5 && $('#row2 .nodes').length != 0) {
						var t = $('#row2 .nodes:first').detach();
						t.appendTo('#row1');
						$('#dynamicNodes #row1 .nodes:last').css({'float' : 'left'});
					}
				}});
			} else {
				TweenMax.to($("#dynamicNodes .nodes").not(nodeId).eq(count - 1), 1, {left : l1Val, onComplete: function() {
					$.each($("#dynamicNodes .nodes").not(nodeId), function() {
						$(this).css("left", "0");
					});
					$(nodeId).remove();
				}});
			}
			count++;
			deleteAtFirstNode(val, count, nodeId, callBackFunction);
		} else {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	}

function returnFirstNode() {
	$(".introjs-duplicate-nextbutton").remove();
	if(buttonName == 'deleteAtPosition') {
		if (printfCount == 5) {
			arrow("#printf5", "#rtnFst");
		} else {
			arrow("#freeTmp", "#returnFirst");
		}
	} else {
		arrow("#freeLstNde", "#retnFrst");
	}
		$('.introjs-tooltip').removeClass("hide");
		text = 'The <span class="ct-code-b-yellow">' + buttonName + '()</span> method return <span class="ct-code-b-yellow">first</span> value'
				+ ' <span class="ct-code-b-yellow">' + $("#firstNodeVal").text() + '</span>.'
		typing('.introjs-tooltiptext', text, function() {
			$('#animationDiv').removeClass('z-index1000000');
			introNextSteps("#"+ buttonName +"NodeMethod", 'retnFstVal', 'bottom');		
			$('.introjs-nextbutton').show();
		});
	//});
}

function printNoSuchElementInDcll() {
	text = 'There is no such element found in dcll.'
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCalling(function() {
			printfCount = 5;
			introNextSteps("#consoleId",'deletedNoElement', 'bottom');
			$('.introjs-nextbutton').show();
		});
	});
}


function printDeleteNode(delNodeNum) { //print delete node in deleteAtEnd()
	text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">' + $("#data" + delNodeNum).text() +'</span>.'
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#consoleId', 'printDelNode');
		$('.introjs-nextbutton').show();
	});
}

function NullToSpecificNode(selector1, callBackFunction) { //deleteAtEnd
	text = 'Here, We are assigning a <span class="ct-code-b-yellow">NULL</span> value to <span class="ct-code-b-yellow">'+ selector1+'</span> node.'; 
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function streNullInSpecifiedNode(selector1, lineNum, callBackFunction) { //deleteAtEnd first = NULL
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

function callToCreateMethod() { //call to createNode()
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

function displayNodeDataAndNext() { // declare empty Node prev|data|next
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
			if (buttonName == 'addNodes') {	//addNodes() 
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
			} else if (buttonName == 'deleteAtEnd' || buttonName == 'deleteAtPosition') {	// deleteAtEnd() & deleteAtPosition
				if (cond) {
					printfCount = 1;
					introNextSteps("#printf1",'deletetionNotPossible', 'bottom');
				} else {
					if (buttonName == 'deleteAtEnd') {
						introNextSteps("#deleteAtEndNodeMethod",'callToMethod', 'bottom');
					} else {
						printfCount = 2
						introNextSteps("#printf2",'printEnterPosText', 'bottom');
					}
				}
				$('.introjs-nextbutton').show();
			}
		});
	});
}

function elseConText() {
	var t = $('#next' + lastNodeCount).text().trim();
	conditionChecking('#lstNxtEqlToNl', 'lastNode -> next', '!=', 'first', t, true, $('#firstNodeVal').text(), function() {
		var con = t != $('#firstNodeVal').text();
		conditionMessage(con, function() {
			nextBtnWithoutCalling(function() {
				if (buttonName == 'addNodes' || buttonName == 'deleteAtPosition') {
					if (con) {
						arrow('#whileLstNxtEqlToNl','#strLstNxtToLst', function() {
							whileTrueConText();
						});
					} else {
						if (buttonName == 'addNodes') {
							arrow('#whileLstNxtEqlToNl','#streTmpToLstNxt', function() {
								whileFalseConText();
							});
						} else { // deleteAtPosition() 
							arrow('#whileLstNxtEqlToNl','#strefstNxtToLstNxt', function() {
								polyline = 3;
								streValFromOneToAnotherAndDrwCircleLine('first -> next ', 'lastNode -> next', '#next1', '#next' + lastNodeCount,
										true, '#nextDiv' + lastNodeCount, '#prevDiv2', 'pUpLine' + polyline, function() {
									arrow('#strefstNxtToLstNxt','#streLstToFstNxtPrev', function() {
										streValFromOneToAnotherAndDrwCircleLine('lastnode ', 'first -> next -> prev', '#lastNodeVal', '#prev2',
											false , '#prevDiv2', '#nextDiv2', 'pDownLine' + polyline, function() {
											$('#line21').remove();
											arrow('#streLstToFstNxtPrev','#streFrstNxtToFrst', function() {
												polyline = 5;
												assignValfromOneVarToAnotherVar('first -> next ', 'first', $('#next1').text(), function() {
													fadeInBounceEffectWithTimelineMax('#next1', '#firstNodeVal', false, function() {
														$('#line11').remove();
														svgAnimatingLineTopToBottom("#animationDiv", "#firstNode", "#dataDiv2", "#svgId", "line11", "arrow", function() {
															$('#line1').remove();
															printfCount = 4;
															arrow('#streLstToFstNxtPrev','#printf4', function() {
																printDeleteNode(1);
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
					}
				} else if (buttonName == 'deleteAtEnd') {
					if (con) {
						arrow('#whileLstNxtEqlToNl','#streLstToTmp', function() {
							assignValfromOneVarToAnotherVar('lastNode', 'temp', $("#next" + lastNodeCount).text(), function() {
								storeValAndDrawLine('#lastNodeVal', '#tempNodeVal', 'line12', '#tempNode', function() {
									arrow('#streLstToTmp','#strLstNxtToLst', function() {
										whileTrueConText();
									});
								});
							});
						});
					} else {
						streFrstInTempNext();
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
				$('#line13').remove();
				if ($('#lastNodeVal').text().trim() != $('#firstNodeVal').text()) {
					lastNodeCount++;
					svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
				} else {
					svgAnimatingLineTopToBottom("#animationDiv", "#lastNode", "#dataDiv" + lastNodeCount, "#svgId", "line13", "arrow");
				}
				nextBtnWithoutCalling(function() {
					arrow('#strLstNxtToLst','#whileLstNxtEqlToNl', function() {
						elseConText();
					});
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
		drawDoubleLine('#lastNodeVal', '#prev' + (lastNodeCount + 1), '#prevDiv'+ (lastNodeCount + 1), 'line2' + lineCount,
					'#nextDiv'+ (lastNodeCount), false, function() {
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

function streFrstInTmp() {
	assignValfromOneVarToAnotherVar('temp', 'first', $('#tempNodeVal').text(), function() {
		storeValAndDrawLine('#tempNodeVal', '#firstNodeVal', 'line13', '#firstNode', function() {
			$('#animationDiv').removeClass('z-index1000000');
			streFrstInTempNext();
		});
	});
}

function streFrstInTempNext() {
	var polyLine, selector = '#streTmpToFrst';
	if (buttonName == 'addNodes') {
		polyLine = 1;
		if ($('.nodes').length != 1) {
			selector = '#streLstToTmpPrev'
			lastNodeCount += 1;
		} 
	} else if (buttonName == 'deleteAtEnd') {
		selector = '#whileLstNxtEqlToNl'
		lastNodeCount -= 1;
		polyLine = 2
	}
	arrow(selector, '#streFstToTmpNext', function() {
		streValFromOneToAnotherAndDrwCircleLine('first', 'temp -> next', '#firstNodeVal', '#next' + lastNodeCount,
				true, '#nextDiv' + lastNodeCount, '#prevDiv1', 'pUpLine' + polyLine, function() {
			if (buttonName == 'deleteAtEnd') {
				$('#line' + lastNodeCount).remove();
			}
			arrow('#streFstToTmpNext', '#streTmpToFstPrev', function() {
				streValFromOneToAnotherAndDrwCircleLine('temp', 'first -> prev', '#tempNodeVal', '#prev1',
						false, '#prevDiv1', '#nextDiv' + lastNodeCount, 'pDownLine' + polyLine,  function() {
					if (buttonName == 'addNodes') {
						arrow('#streTmpToFstPrev', '#retnFrst', function() {
							retrnFrst('first', '#firstNodeVal');
						});
					} else if (buttonName == 'deleteAtEnd') {
						arrow('#streTmpToFstPrev', '#printf2', function() {
							printfCount = 2;
							lastNodeCount++;
							printDeleteNode(lastNodeCount);
						});
					}
				});
			});
		}); 
	});
}


function streValFromOneToAnotherAndDrwCircleLine(sel1Name, sel2Name, selector1, selector2, lineFlag, selector3, selector4, polyLine, callBackFunction) {
	$('#animationDiv').addClass('z-index1000000');
	assignValfromOneVarToAnotherVar(sel1Name, sel2Name, $(selector1).text(), function() {
		fadeInBounceEffectWithTimelineMax(selector1, selector2, false, function() {
			setTimeout(function() {
				if (lineFlag) {
					  svgCurveUpper(selector3,  selector4, polyLine, function() {
						  nextBtnWithoutCalling(function() {
							  if (typeof callBackFunction === 'function') {
									callBackFunction();
								}
						  });
					  });
				} else {
					svgCurveDown(selector3,  selector4, polyLine, function() {
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

function retnValWithFrstNVar() {
	$('.introjs-tooltip').removeClass("hide");
	text = 'The <span class="ct-code-b-yellow">' + buttonName + '()</span> method return value is stored in'
			+ ' <span class="ct-code-b-yellow">first</span>(i.e., <span class="ct-code-b-yellow">' + $("#firstNodeVal").text()
			+'</span>) and stores it in the variable <span class="ct-code-b-yellow">first</span>.';
	typing('.introjs-tooltiptext' , text, function() {
		$('.introjs-nextbutton').show();
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
			var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 3;
			var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 3;
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


function svgCurveUpper(selector1, selector2, polyLineId, callBackFunction) {
	$("#" + polyLineId).remove();
	var x = (($(selector1).offset().left - $("#svgId").offset().left) + $(selector1).width());
	var y = (($(selector1).offset().top  + $(selector1).height()) - $('#svgId').offset().top - 15)  ;
	var x1 = x + (($(selector1).outerWidth() / 3) - 5);
	var y1 = y;
	var x2 = x1;
	var y2 = y - ($(selector1).outerHeight() * 1.2);
	var x3 = (($(selector2).offset().left - $("#svgId").offset().left ) - $(selector1).outerWidth() / 3 );
	var y3 = y2;
	var x4 = x3;
	var y4 = y1;
	var x5 = x3 + $(selector1).outerWidth() / 3;
	var y5 = y4;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line curve");
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
	$("#" + polyLineId).remove();
	var x = $(selector1).offset().left - $("#svgId").offset().left;
	var y = ($(selector1).offset().top + ($(selector1).height())) - $("#svgId").offset().top;
	var x1 = (x - $(selector1).width() / 3) - 3;
	var y1 = y;
	var x2 = x1;
	var y2 = y1 + $(selector1).height() * 1.2;
	var x3 = ((($(selector2).offset().left + $(selector2).outerWidth()) - $("#svgId").offset().left) + $(selector1).width() / 3 ) ;
	var y3 = y2;
	var x4 = x3;
	var y4 = y1;
	var x5 = (($(selector2).offset().left - $("#svgId").offset().left) + $(selector2).outerWidth());
	var y5 = y;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line curve");
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

