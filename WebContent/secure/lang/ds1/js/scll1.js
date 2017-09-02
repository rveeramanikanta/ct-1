var introcode;
var buttonNames = ["Add Nodes", "Count", "Insert At Begin", "Insert At End", "Insert At Position",
                   "Traverse List", "Search", "Delete At Begin", "Delete At End", "Delete At Position"];
var arr = ["l1", "l2", "l3", "x", "t3"];
var buttonName, lastnodeCount = printfCount = outPutCount = nodeCount = lineCount = searchCount = count = 1, iVal = 0;
var flag = false;

function sCLLReadyFunction() {
	preStructTypeList();
	appendButtons();
	svgAppend("#animatinDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	introFunction();
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(nodeCount) {	//dynamically append list node
	$('#row2').css({width: $('#row1').outerWidth()});
	var randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="opacity00 col-xs-2 nodes" id="node' + nodeCount + '" style="top: 0px; width: auto;">'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 ct-blue-color ct-fonts padding00 text-center">'
						+ ' data</div><div class="ct-green-color ct-fonts text-center">next</div></div>'
						+ ' <div id="nodedata' + nodeCount + '" class="data-nodes"><div id="dataDiv' + nodeCount + '"'
						+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + nodeCount +'"'
						+ ' class="data-span opacity00 ct-blue-color ct-fonts" style="top: 0px; left: 0px;"></span></div>'
						+ ' <div id="nextDiv' + nodeCount +'" class="position div-border right-radius col-xs-6 next-div">'
						+ ' <span id="next' + nodeCount +'" class="position next-span ct-green-color ct-fonts inline-style"></span></div></div>'
						+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 padding00 text-center">'
						+ ' <span id="dataAddress' + nodeCount + '" class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress 
						+ '</span></div></div></div>';
	if ((buttonName == 'insertAtBegin' || (buttonName == 'insertAtPosition' && $('.nodes').length != 0)) && $('.nodes').length != 0) {
		if (buttonName == 'insertAtPosition' && (count != 1 && count < ($('.nodes').length + 1))) {
			$('#insertAtPosition').addClass('insert-position');
		} else if (buttonName == 'insertAtPosition' && count == ($('.nodes').length + 1)) {
			$('#insertAtPosition').addClass('insert-endPos');
		}
		$('#insertAtBegin').addClass('insert-begin');
		$('#declareNodes').after('<div class="col-xs-10 col-xs-offset-1 padding00" id="posNodes"></div>');
		$('#posNodes').append(x);
		introcode.refresh();
	} else {
		$("#row1").append(x);
		if ($('#dynamicNodes #row1 .nodes').length > 5) {
			$('#dynamicNodes #row1 .nodes:last').css({'float' : 'right'});
			var t = $('#row1 .nodes:last').detach();
			t.appendTo('#row2');
		}
	}
}

function preStructTypeList() {	//declare structure type and first node to null
	$("#structTypelist").append('<span id="strcutSpan">struct listNode {\n'
					+ '\tint data;\n'
					+ '\tstruct listNode *next;\n'
					+ '};</span>\n'
					+ '<span id="typeDefDec">typedef struct listNode* nodeptr;</span>\n'
					+ '<span id="declareFirstNode">node first = NULL;</span>\n');
}

function preAddMethodInMain() {	//addMthod() Call in main method
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="iniFstToNull"><span id="frstInit">first = NULL;</span>\n<span id="xInit">int x;</span></span>\n'
					+ '<span id="printf1">printf("Enter an element : ");</span>\n'
					+ '<span id="scanf1">scanf("%d", &x);</span>\n'
					+ '<span id="addWhileCon">while (<span id="whileCon">x != -1</span>) {</span>\n'
					+ '\t<span id="addNodeMethod">first = addNodes(first, x);</span>\n'
					+ '\t<span id="printf2">printf("Enter an element : ");</span>\n'
					+ '\t<span id="scanf2">scanf("%d", &x);</span>\n'
					+'}');
}

function preTraverseMainMethod() {	//traverse() call in main method
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+'<span id="travrseIfCond">if (<span id="travrseFrstToNul">first == NULL</span>) {</span>\n'
					+ '\t<span id="printf8">printf("Circular Singly Linked List is empty\\n);</span>\n'
					+ '} else {\n'
					+ '\t<span id="printf9">The elements in Circular Singly Linked List are: ");</span>\n'
					+ '\t<span id="calToTravrseMethd">traverseList(first);</span>\n'
					+ '}');
}

function preSearchMethodInMain() { 	//search() call in main method
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="declareXAndPos">int x, pos;</span>\n'
					+'<span id="printf1">printf("Enter a search element : ");</span>\n'
			 		+ '<span id="scanf1">scanf("%d", &x);</span>\n'
			 		+ '<span id="callToSearchMethod">pos = searchPosOfEle(first, x);</span>\n'
			 		+ '<span id="checkIfCondition">if (<span id="posEqlZero">pos == 0</span>) {</span>\n'
			 		+ '\t<div id="printf2" style="display: inline-block">printf("The given element %d is not found in "\n'
			 		+ '\t\t"the given Circular Singly Linked List.", x);</div>\n'
			 		+ '} else {\n'
			 		+ '\t<div id="printf3" style="display: inline-block">printf("The given element %d is "\n'
			 		+ '\t\t"found at position : %d", x, pos);</div>\n'
			 		+ '}'); 
}

function preCountMainMethod() { 	//count() call in main method
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<div id="printf12" style="display: inline-block;">printf("The number of nodes in a Circular Singly\n'
								+ '\t\t\t\t\t\tLinked List are : %d\\n", <span id="callToCntMtd">count(first)</span>);</span>');
}

function preDeleteAtBeginEndMethodInMain() {	//deleteAtEnd() & deleteAtBegin() call in main method
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main</div>'
					+ '<span id="IfFirstNotEqToNull">if (<span id="frstToNl">first == NULL</span>) {</span>\n'
					+ '\t<span id="printf1">printf("Linked List is empty "\n'
					+'\t\t"so Deletion is not possible");\n</span>'
					+ '} else {\n'
					+ '\t<span id="callToDeleteAtEndMethod">first = ' + buttonName + '(first);</span>\n'
					+ '}\n');
}

function preDeleteAtPositionMethodInMain() { //deleteAtPosition() call in main method
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In Main</div>'
					+ '<span id="decPos">int pos;</span>\n'
					+ '<span id="IfFirstNotEqToNull">if (<span id="frstToNl">first == NULL</span>) {</span>\n'
					+ '\t<span id="printf1">printf("Linked List is empty "\n'
					+'\t\t"so Deletion is not possible");\n</span>'
					+ '} else {\n'
					+ '\t<span id="printf2">printf("Enter a position : ");</span>\n'
					+ '\t<span id="scanf2">scanf("%d", &pos);</span>\n'
					+ '\t<span id="ifPosEqZero">if (<span id="posEqlZero">pos <= 0</span>) {</span>\n'
					+ '\t\t<span id="printf3">printf("No such position in Circular "\n'
					+ '\t\t\t"Linked List so deletion is not possible");</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="callToDeleteAtEndMethod">first = deleteAtPosition(first, pos);</span>\n'
					+ '\t}\n}\n');
}

function preInsrtBgnEndMainMethod() { 	//insertAtBegin() & insertAtEnd() call in main method
	$("#inMain").append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
					+ '<span id="insrtXDec">int x;</span>\n'
					+ '<span id="printf3">printf("Enter an element : ");</span>\n'
					+ '<span id="scanf3">scanf("%d", &x);</span>\n'
					+ '<span id="calToInsrtBgnEndMthd">first = ' + buttonName + '(first, x);</span>');
}

function preInsrtAtPosMainMethod() {	//insertAtPosition() call in main method
	$('#inMain').append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="decPosX">int pos, x;</span>\n'
						+ '<span id="printf2">printf("Enter a position : ");</span>\n'
						+ '<span id="scanf2">scanf("%d", &pos);</span>\n'
						+ '<span id="printf1">printf("Enter an element : ");</span>\n'
						+ '<span id="scanf1">scanf("%d", &x);</span>\n'
						+ '<span id="insPosIfCondMain">if (<span id="posConCheck">pos <= 0 || (pos > 1 && first == NULL)</span>) {</span>\n'
						+ '\t<div id="printf3" style="display: inline-block">printf("No such position in Circular Singly "\n'
						+ '\t\t"Linked List. So insertion is not possible\\n");</div>\n'
						+ '} else {\n'
						+ '\t<span id="calToInsrtAtPosMthd">first = insertAtPosition(first, pos, x);</span>\n'
						+ '}');
}

function addNodesMethod() { 	//pre addMethod() logic
	$("#csllMethodOperations").append('<div class="addNodesDiv">' 
			+'<span id="addMethodDec">node ' + buttonName + '(<span id="decFstVar">node first</span>,'
					+ ' <span id="decXVal">int x</span>) {</span>\n'
					+ '\t<span id="decTmpNdLstNd">node temp, lastNode = first;</span>\n'
					+ '\t<span id="callTocreateMethod">temp = createNode();</span>\n'
					+ '\t<span id="stroreXValInTmpDt">temp -> data = x;</span>\n'
					+ '\t<span id="ifFstEqNull">if (first == NULL) {</span>\n'
					+ '\t\t<span id="streTmpToFst">first = temp;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNxtNeqFst">while (lastNode -> next != first) {</span>\n'	
					+ '\t\t\t<span id="streLstNxtToLst">lastNode = lastNode -> next;</span>\n'
					+ '\t\t}\n'	
					+ '\t\t<span id="streTmpToLstNxt">lastNode -> next = temp;</span>\n'
					+ '\t}\n'
					+ '\t<span  id="streFstToTmpNxt">temp -> next = first;</span>\n'
					+ '\t<span id="retrnFst">return first;</span>\n'	
					+ '}</div>\n');
}

function searchPositionOfEle() {	//pre search() logic 
	$("#csllMethodOperations").append('<div class="searchElement"><span id="searchPassValDecl">'
					+ 'int searchPosOfEle(<span id="decKeyAndFstNode">node first, int key</span>) {</span>\n'
					+ '\t<span id="declCurrNodeNdQNode">node currentNode = first, q = first;</span>\n'
					+ '\t<span id="decCount">int count = 0;</span>\n'
					+ '\t<span id="crntNtEqNull">if (currentNode == NULL) {</span>\n'
					+ '\t\t<spna id="rtnCountIfNull">return count;</spna>\n'
					+ '\t} else {\n'
					+ '\t\tdo {\n'
					+ '\t\t\t<span id="countInc">count++;</span>\n'
					+ '\t\t\t<span id="assgnToQtoCrrNode">q = currentNode;</span>\n'
					+ '\t\t\t<span id="ifkeyNtEqNull">if (currentNode -> next == first && currentNode -> data != key) {</span>\n'
					+ '\t\t\t\t<span id="returnzero">return 0;</span>\n'
					+ '\t\t\t}\n'
					+ '\t\t\t<span id="currToCurrNodeNext">currentNode = currentNode -> next;</span>\n'
					+ '\t\t<span id="whileLoopCkeck">} while (q -> next != first && q -> data != key);</span>\n'
					+ '\t\t\t<span id="returnCountIfNotNull">return count;</span>\n'
					+ '\t}\n'
					+ '}</div>\n\n');
}

function deleteAtEnd() {	//pre deleteAtEnd() method
	$("#csllMethodOperations").append('<div class="deleteAtEndElement"><span id="deleteAtEndDec">'
					+ 'node deleteAtEnd(<span id="decFirstNode">node first</span>) {</span>\n'
					+ '\t<span id="decPrevAndLastNode">node prev, lastNode = first;</span>\n'
					+ '\t<span id="iflstNtEqFst">if (lastNode -> next == first) {</span>\n'
					+ '\t\t<span id="assnNullTofst">first = NULL;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNotEqFst">while (lastNode -> next != first) {</span>\n'
					+ '\t\t\t<span id="assnlstToPrev">prev = lastNode;</span>\n'
					+ '\t\t\t<span id="assnLstNxtTolst">lastNode = lastNode -> next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t<span id="assnFstToPrevNxt">prev -> next = first;</span>\n'
					+ '\t}\n'
					+ '\t<span id="printf2">printf("The deleted item from Circular Singly Linked List : %d", lastNode -> data);</span>\n'
					+ '\t<span id="freeNode">free(lastNode);</span>\n'
					+ '\t<span id="rtnFst">return first;</span>\n'
					+ '}</div>');
}

function deleteAtBegin() {	//pre deleteAtBegin() method
	$("#csllMethodOperations").append('<div class="deleteAtEndElement"><span id="deleteAtEndDec">'
					+ 'node deleteAtBegin(<span id="decFirstNode">node first</span>) {</span>\n'
					+ '\t<span id="decPrevAndLastNode">node prev = first, lastNode = first;</span>\n'
					+ '\t<span id="iflstNtEqFst">if (prev -> next == first) {</span>\n'
					+ '\t\t<span id="assnNullTofst">first = NULL;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="whileLstNotEqFst">while (lastNode -> next != first) {</span>\n'
					+ '\t\t\t<span id="assnlstToPrev">lastNode = lastNode -> next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t<span id="assnLstNxtTolst">first = prev -> next;</span>\n'
					+ '\t\t<span id="assnFstToPrevNxt">lastNode -> next = first;</span>\n'
					+ '\t}\n'
					+ '\t<span id="printf2">printf("The deleted item from Circular Singly Linked List : %d", prev -> data);</span>\n'
					+ '\t<span id="freeNode">free(prev);</span>\n'
					+ '\t<span id="rtnFst">return first;</span>\n'
					+ '}</div>');
}

function deleteAtPosition() { //pre deleteAtPosition() method
	$("#csllMethodOperations").append('<div class="deleteAtEndElement"><span id="deleteAtEndDec">'
					+ 'node deleteAtPosition(<span id="decFirstNode">node first</span>, <span id="declarePosVar">int pos</span>) {</span>\n'
					+ '\t<span id="decPrevAndLastNode">node prev = first, lastNode = first;</span>\n'
					+ '\t<span id="declareiVar">int i;</span>\n'
					+ '\t<span id="ifPosEqOne">if (pos == 1) {</span>\n'
					+ '\t\t<span id="iflstNtEqFst">if (prev -> next == first) {</span>\n'
					+ '\t\t\t<span id="assnNullTofst">first = NULL;</span>\n'
					+ '\t\t} else {\n'
					+ '\t\t\t<span id="whileLstNotEqFst">while (lastNode -> next != first) {</span>\n'
					+ '\t\t\t\t<span id="assnlstToPrev">lastNode = lastNode -> next;</span>\n'
					+ '\t\t\t}\n'
					+ '\t\t\t<span id="assnLstNxtTolst">first = prev -> next;</span>\n'
					+ '\t\t\t<span id="assnFstToPrevNxt">lastNode -> next = first;</span>\n'
					+ '\t\t}\n'
					+ '\t} else {\n'
					+ '\t\t<span id="forLoop">for (<span id="iDec">i = 1</span>; <span id="iCon">i < pos</span>; <span id="iInc">i++</span>) {</span>\n'
					+ '\t\t\t<span id="ifLastNodeNextEqFirst">if (prev -> next == first) {</span>\n'
					+ '\t\t\t\t<span id="printf4">printf("No such position in Circular Linked List so Deletion is not possible");</span>\n'
					+ '\t\t\t\t<span id="returnFirst">return first;</span>\n'
					+ '\t\t\t}\n'
					+ '\t\t\t<span id="prevEqLastNode">lastNode = prev;</span>\n'
					+ '\t\t\t<span id="lstNodeEqLstNxt">prev = prev -> next;</span>\n'
					+ '\t\t}\n'
					+ '\t\t<span id="prevNxtEqLstNext">lastNode -> next = prev -> next;</span>\n'
					+ '\t}\n'
					+ '\t<span id="printf5">printf("The deleted item from Circular Linked List : %d", prev -> data);</span>\n'
					+ '\t<span id="freeNode">free(prev);</span>\n'
					+ '\t<span id="rtnFst">return first;</span>\n'
					+ '}</div>');
}

function preTraverseLstMtd() {	//pre traverse() method
	$("#csllMethodOperations").append('<div id="travrseLstDiv"><span id="trvrseLstMtdDec">void traverseList'
					+ '(<span id="decFstVar">node first</span>) {</span>\n'
					+ '\t<span id="travrsrTmpDec">node temp = first;</span>\n'
					+ '\t<span id="travrseDoWle"><span id="doLoop">do {</span>\n'
					+ '\t\t<span id="printf10">printf("%d --> ", temp -> data);</span>\n'
					+ '\t\t<span id="travrseTmpnxtToTmp">temp = temp -> next;</span>\n'
					+ '\t<span id="travrseWleTmpEqlToFrst">} while (<span id="trvrsTmpToFrst">temp != first</span>);</span></span>\n'
					+ '\t<span id="printf11">printf("\\n");</span>\n'
					+ '}</div>');
}

function preCountMtd() {	//pre count() method
	$("#csllMethodOperations").append('<span id="cntMtdDec">int count(<span id="decFstVar">node first</span>) {</span>\n'
					+ '\t<span id="travrsrTmpDec">node temp = first;</span>\n'
					+ '\t<span id="cntSumDec">int sum = <span id="sumValue">0</span>;</span>\n'
					+ '\t<span id="cntIfCond">if (<span id="frstToNulCond">first == NULL</span>) {</span>\n'
					+ '\t\t<span id="cntIfRetnSm1">return sum;</span>\n'
					+ '\t} else {\n'
					+ '\t\t<span id="cntDoCond">do {\n'
					+ '\t\t\t<span id="cntElseSmInc">sum++;</span>\n'
					+ '\t\t\t<span id="cntTmpNxtToTmp">temp = temp -> next;</span>\n'
					+ '\t\t<span id="cntWleTmpEqlToFst">} while (<span id="cntTmpToFrst">temp != first</span>);</span></span>\n'
					+ '\t\t<span id="cntIfRetnSm2">return sum;</span>\n'
					+ '\t}\n'
					+ '}');
}

function preInsertBeginMethod() {	//pre insertBegin() method
	$("#csllMethodOperations").append('<div id="insrtBeginDiv"><span id="insrtBgnDec">node insertAtBegin(<span id="decFstVar">node first</span>,'
									+ ' <span id="decXVal">int x</span>) {</span>\n'
									+ '\t<span id="decTmpNdLstNd">node temp, lastNode = first;</span>\n'
									+ '\t<span id="callTocreateMethod">temp = createNode();</span>\n'
									+ '\t<span id="stroreXValInTmpDt">temp -> data = x;</span>\n'
									+ '\t<div id="combinedTextFrBegnNPos" style="display: inline-block"></div>\n'
									+ '\t<span id="retrnFst">return first;</span>\n'
									+ '}</div>');
}

function preInsBeginNPositionMethod() {		//pre insertAtBegin() & insertAtPosition() common code
	$('#combinedTextFrBegnNPos').append('<span id="ifFstEqNull">if (first == NULL) {</span>\n'
									+ '\t\t<span id="streTmpToFst">first = temp;</span>\n'
									+ '\t\t<span id="streFstToTmpNxt1">temp -> next = first;</span>\n'
									+ '\t} else {\n'
									+ '\t\t<span id="whileLstNxtNeqFst">while (lastNode -> next != first) {</span>\n'
									+ '\t\t\t<span id="streLstNxtToLst">lastNode = lastNode -> next;</span>\n'
									+ '\t\t}\n'
									+ '\t\t<span id="streFstToTmpNxt2">temp -> next = first;</span>\n'
									+ '\t\t<span id="elseStreTmpToFrst">first = temp;</span>\n'
									+ '\t\t<span id="frstToLstNxt">lastNode -> next = first;</span>\n'
									+ '\t}');
}

function preInsrtAtPosMethod() {	//pre insertAtPosition() method
	$('#csllMethodOperations').append('<span id="insrtPosDec">node insertAtPosition(<span id="decFstVar">node first</span>,'
									+ ' <span id="decPosValue">int pos</span>, <span id="decXVal">int x</span>) {</span>\n'
									+ '\t<span id="decTmpNdLstNd">node temp, lastNode = first;</span>\n'
									+ '\t<span id="decIntI">int i ;</span>\n'
									+ '\t<span id="posForLoop">for (<span id="InitITo1">i = 1</span>; <span id="posForCond">i < (pos - 1)</span>;'
									+ ' <span id="iInc">i++</span>) {</span>\n'
									+ '\t\t<span id="IfLstNextEqlToFrst">if (<span id="IfLstNxtCond">lastNode -> next == first</span>) {</span>\n'
									+ '\t\t\t<span id="printf4">printf("No such position in Circular Singly '
									+ 'Linked List. So insertion is not possible\\n");</span>\n'
									+ '\t\t\t<span id="retrnFst1">return first;</span>\n'
									+ '\t\t}\n'
									+ '\t\t<span id="streLstNxtToLst1">lastNode = lastNode -> next;</span>\n'
									+ '\t}\n'
									+ '\t<span id="callTocreateMethod">temp = createNode();</span>\n'
									+ '\t<span id="stroreXValInTmpDt">temp -> data = x;</span>\n'
									+ '\t<span id="ifPosEqlTo1">if (pos == 1) {</span>\n'
									+ '\t\t<div id="combinedTextFrBegnNPos" style="display: inline-block"></div>\n'
									+ '\t} else {\n'
									+ '\t\t<span id="elseLstNxtToTmpNxt">temp -> next = lastNode -> next;</span>\n'
									+ '\t\t<span id="elseTmpToLstNxt">lastNode -> next = temp;</span>\n'
									+ '\t}\n'
									+ '\t<span id="retrnFst">return first;</span>\n'
									+ '}');
}

function preCreateNodeFunction() {	//pre create Node method
	$("#csllOperations").append('node createNode() {\n'
					+' \t<span id="tmpCreate">node temp;</span>\n'
					+' \t<span id="allocateMem">temp = (node) <span id="mallocMemoryAllocation">malloc(sizeof(struct listNode))</span>;</span>\n'
					+' \t<span id="asgnToNlToTmp">temp -> next = NULL;</span>\n'
					+' \t<span id="returnTmp">return temp;</span>\n'
					+'}\n');
}

function appendButtons() {	//append circular linked list operation (buttons)
	for (var i = 0; i < 10; i++) {
		if (i == 5) {
			$("#buttonDiv").append('<br>');
		}
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

function introFunction() {	
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#headdingSection',
						intro :'',
						tooltipClass : "hide",
					},{
						element :'#structTypelist',
						intro :'',
						position : 'right',
						tooltipClass : "hide",
					}]
	});
	introcode.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "structTypelist" :
					$("#structTypelist").removeClass("opacity00");
						introNextSteps("#strcutSpan");
						setTimeToIntroGoNextStep()
				break;
				case "strcutSpan" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the declaration of a new <span class="ct-code-b-yellow">struct</span> type named '
						+ '<span class="ct-code-b-yellow">listNode</span>.<br/><br/> It contains two members : '
						+ '<ul><li><span class="ct-code-b-yellow">data</span> which is of type int.</li>'
						+ '<li><span class="ct-code-b-yellow">*next</span> which is a pointer to the next node.</li></ul>';
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#typeDefDec");
						$(".introjs-nextbutton").show();
					});
				break;
				case "typeDefDec" :
					$(".introjs-tooltip").removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">typedef</span> creates a <span class="ct-code-b-yellow">node</span> as a '
						+ ' new type <span class="ct-code-b-yellow">pointer</span> to <span class="ct-code-b-yellow">struct listNode</span>. '
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#declareFirstNode");
						$('.introjs-nextbutton').show();
					});
				break;
				case "declareFirstNode" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we declared <span class="ct-code-b-yellow">first</span> node and initialized with'
							+ ' <span class="ct-code-b-yellow">NULL</span>.';
					typing('.introjs-tooltiptext', text, function() {
						$("#animationParent").removeClass("opacity00");
						introNextSteps("#animatinDiv", "intlFstToNull");
						$('.introjs-nextbutton').show();
					});
				break;
				case "buttonDiv" :
					flag = false;
					lastnodeCount = printfCount = outPutCount = searchCount = preCount = i = count = 1, iVal = 0;
					$("#buttonDiv, .buttons, #deleteAtBegin").removeClass("opacity00 disabled del-begin");
					if ($('.nodes').length == 10) {
						$('#insertAtBegin, #insertAtEnd, #insertAtPosition').addClass('disabled');
					}
					$('#insertAtBegin, #insertAtPosition').removeClass('insert-begin insert-position not-found insert-endPos');
					$('.intVariables, .intValues').addClass('opacity00');
					$('#nxtLne, .fa, #line26, #line30, #line17, .extraNode').remove();//traverse
					nodeCount = $('.nodes').length + 1;
					lineCount = nodeCount - 1;
					introcode.refresh();
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "showButtons" :
							$("#addNodes").off().click(function() {
								$('#line15, polyline, .lines, .line').remove();
								$('#xValDecInAdd, #xValInAdd, .displayCode').addClass('opacity00');
								$('#xValInMain').text("5");
								$("#row1, #row2, .outputCount1, #declareNodes, .displayCode").empty();
								nodeCount = lineCount = 1;
								buttonCorrespondingText("addNodes");
							});
							$("#traverseList").off().click(function() {
								nodeCount = 1;
								buttonCorrespondingText("traverseList");
							});
							$("#search").off().click(function() {
								$('#countNme').text('count');
								buttonCorrespondingText("search");
							});
							$("#count").off().click(function() {
								buttonCorrespondingText('count');
							});
							$("#deleteAtEnd").off().click(function() {
								buttonCorrespondingText("deleteAtEnd");
							});
							$("#deleteAtBegin").off().click(function() {
								buttonCorrespondingText("deleteAtBegin");
							});
							$("#deleteAtPosition").off().click(function() {
								$('#countNme').text('i');
								nodeCount = 1;
								buttonCorrespondingText("deleteAtPosition");
							});
							$('#insertAtEnd').off().click(function() {
								nodeCount = ($('.nodes').length + 1);
								lastnodeCount = 1;
								buttonCorrespondingText('insertAtEnd');
							});
							$('#insertAtBegin').off().click(function() {
								nodeCount = 1;
								if ($('.nodes').length > 0) {
									lastnodeCount = 2;
									changeIdsAtBegin(2);
								}
								buttonCorrespondingText('insertAtBegin');
							});
							$('#insertAtPosition').off().click(function() {
								$('#countNme').text('i');
								buttonCorrespondingText('insertAtPosition')
							});
						break;
					}
				break;
				case"inMain" :
					$("#inMain").removeClass("opacity00");
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "addNodes": 
							preAddMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#iniFstToNull");
						break;
						case "traverseList":
							preTraverseMainMethod();
							introcode.refresh();
							customIntroNxtStep("#travrseIfCond");
						break;
						case "search" :
							preSearchMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#declareXAndPos");
						break;
						case "count":
							preCountMainMethod();
							introcode.refresh();
							$("#callToCntMtd").effect("highlight", {color: 'blue'}, 500, function() {
								frstNodeInitInMethod(function() {
									introNextSteps("#csllMethodOperations", 'countMtdCalng', 'left');
									$('.introjs-nextbutton').show();
								});
							})
						break;
						case "deleteAtBegin" :
						case "deleteAtEnd" :
							preDeleteAtBeginEndMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#IfFirstNotEqToNull");
						break;
						case "deleteAtPosition" :
							preDeleteAtPositionMethodInMain();
							introcode.refresh();
							customIntroNxtStep("#decPos");
						break;
						case "insertAtBegin":
						case "insertAtEnd":
							preInsrtBgnEndMainMethod();
							introcode.refresh();
							customIntroNxtStep('#insrtXDec');
						break;
						case "insertAtPosition":
							preInsrtAtPosMainMethod();
							introcode.refresh();
							customIntroNxtStep('#decPosX');
						break;
					}
				break;
				case "decPos" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">pos</span> '
							+ 'of type <span class="ct-code-b-yellow">int</span>.';
					typing('.introjs-tooltiptext', text, function() {
						appendNextBtn('declarationOfPosVar');
					});
				break; 
				case "IfFirstNotEqToNull" : //deleteAtEnd & deleteAtBegin & deleteAtPosition
					$('.introjs-tooltip').removeClass('hide');
					ifConditionText('first','==', 'NULL', function() {
						fromEffectWithTweenMax("#frstToNl", "#ifCondition", true, function() {
							$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
							$('.introjs-duplicate-nextbutton').click(function () {
								flipTheCon("#first", $("#firstVal").text(), "NULL")
							});
						});
					});
				break;
				case "callToDeleteAtEndMethod" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "storeReturnValToFirst" :
							$('.introjs-tooltip').removeClass('hide');
							if (buttonName != "deleteAtPosition") {
								text = 'The <span class="ct-code-b-yellow">first</span> is initialize with the'
									+ ' node address returned by the <span class="ct-code-b-yellow">' + buttonName + '("'
									+ $('#firstVal').text() +')</span> method.';
							} else {
								var pos = $("#nodeVal" + (outPutCount - 1)).val();
								text = 'The <span class="ct-code-b-yellow">first</span> is initialize with the'
									+ ' node address returned by the <span class="ct-code-b-yellow">' + buttonName + '("'
									+ $('#firstVal').text() +'", "'+ pos +'")</span> method.';
							}
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#csllMethodOperations", "deleteAtEndMethod",  "left");
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnFirstVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">'+ buttonName +'()</span> method call '
									+ 'returns the value stored in <span class="ct-code-b-yellow">first</span>('
									+ '<span class="ct-code-b-yellow">'+ $("#firstNodeVal").text() +'</span>) and '
									+ 'stores it in the variable <span class="ct-code-b-yellow">first</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#animatinDiv').removeClass('z-index1000000');
								introNextSteps("#animatinDiv", "storeRtnFirstVal");
								$('.introjs-nextbutton').show();
							});
						break;
						
					}
				break;//end deleteAtEnd
				case "declareXAndPos" ://declare search variables X and POS
					$('.introjs-tooltip').removeClass('hide');
						text = 'Here, we declared two variables <span class="ct-code-b-yellow">x</span> and '
								+ '<span class="ct-code-b-yellow">pos</span> of type <span class="ct-code-b-yellow">int</span>.';
						typing('.introjs-tooltiptext', text, function() {
							introNextSteps("#animatinDiv", "declareXAndPosVar");
							$('.introjs-nextbutton').show();
					});
				break;
				case "callToSearchMethod" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "storeSearchReturnValToPos" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">pos</span> is initialized with the node position returned by the '
									+ '<span class="ct-code-b-yellow">searchPosOfEle(' + $('#firstVal').text() + ', ' + $('#xValInAdd').text()
									+ ')</span> method.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#csllMethodOperations", "searchMethod", "left");
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnCountVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">searchPosOfEle()</span> method returns the value stored in <span class='
									+ '"ct-code-b-yellow">count</span> and stores it in the variable <span class="ct-code-b-yellow">pos</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#animatinDiv').removeClass('z-index1000000');
								introNextSteps("#animatinDiv", "storeRtnPosVal");
								$('.introjs-nextbutton').show();
							});
						break;
						
					}
				break;
				case "checkIfCondition" :
					ifConditionText('pos', '==', '0', function() {
						fromEffectWithTweenMax("#posEqlZero", "#ifCondition", true, function() {
							nextBtnWithoutCall(function() {
								flipTheCon("#first", $("#posVal").text(), "0")
							});
						});
					});
				break;//end search
				case "iniFstToNull" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, <ul>'
						+ '<li><span class="ct-code-b-yellow">first</span> is initialized with <span class="ct-code-b-yellow">NULL</span>.</li>'
						+ '<li>A variable <span class="ct-code-b-yellow">x</span> is of type int is declared.</li>';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "fistNodeToNull");
						$('.introjs-nextbutton').show();
					});
				break;
				case "animatinDiv" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "readPosVal" :
							$('#posVal').text($('#nodeVal' + (outPutCount - 1)).val());
							$('#nodeVal' + (outPutCount - 1)).attr("disabled", "disabled");
							fromEffectWithTweenMax("#nodeVal" + (outPutCount - 1), "#posVal", false, function() {
								customIntroNxtStep("#ifPosEqZero", "ifPosEqZero");
							});
						break;
						case "storeRtnFirstVal" ://deleteAtEnd method
							introcode.refresh();
							fadeInBounceEffectWithTimelineMax('#firstNodeVal','#firstVal', false, function() {
								$('#line15, #line10, #line16, #line17, #line12, #line13, .fa, .extraNode').remove();
								if ($('.nodes').length != 0) {
									svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#firstDiv", "#dataDiv1", "#svgId",
											"line15", "arrow");
								}
								introcode.refresh();
								butnStepWithTime();
							});
						break;
						case "declareXAndPosVar" ://search method
							$("#subVal").text('');
							transferEffect("#declareXAndPos", "#xValDecInAdd", function() {
								transferEffect("#declareXAndPos", "#posValDec", function() {
									customIntroNxtStep("#printf1", "enterSearchElement");
								});
							});
						break;
						case "readSearchVal" :
							$('#xValInAdd').text($('#nodeVal' + (outPutCount - 1)).val());
							$('#nodeVal' + (outPutCount - 1)).attr("disabled", "disabled");
							fromEffectWithTweenMax("#nodeVal" + (outPutCount - 1), "#xValInAdd", false, function() {
								customIntroNxtStep("#callToSearchMethod", "storeSearchReturnValToPos");
							});
						break;
						case "storeRtnPosVal" :
							var currentNext = $("#next" + (searchCount)).text();
							var first = $("#firstVal").text();
							var currentData = $("#data" + (searchCount)).text();
							var key = $("#opVal").text();
							if (currentNext == first && currentData != key) {
								$("#posVal").text(0).addClass("opacity00");
								zoomInEffect("#posVal", function() {
									$('#opVal, #countVal, #countValDec, #opValDec').addClass('opacity00');
									$('.extraNode, #line16, #line17, #line18').remove();
									introcode.refresh();
									customIntroNxtStep("#checkIfCondition", "checkIfPosEqToNull");
								});
							} else {
								$("#posVal").text($("#countVal").text());
								fromEffectWithTweenMax("#countVal", "#posVal", false, function() {
									$('#opVal, #countVal, #countValDec, #opValDec').addClass('opacity00');
									$('.extraNode, #line16, #line17, #line18').remove();
									introcode.refresh();
									customIntroNxtStep("#checkIfCondition", "checkIfPosEqToNull");
								});
							}
						break;
						//search end
						case "intlFstToNull" :
							transferEffect("#declareFirstNode", "#firstNodeInMain", function() {
								customIntroNxtStep("#buttonDiv", "showButtons");
							});
						break;
						case "fistNodeToNull":
							$("#firstVal").text("NULL");
							transferEffect("#frstInit", "#firstNodeInMain", function() {
								transferEffect("#xInit", "#xValeDecInMain", function() {
									customIntroNxtStep("#printf1", "printText");
								});
							});
						break;
						case "tempsDeclar" :
							transferEffect("#tmpCreate", "#tmpNde", function() {
								customIntroNxtStep("#allocateMem");
							});
						break;
						case "storeXVal" :
							$('#xValInMain').text($('#nodeVal' + outPutCount).val());
							$('#nodeVal' + outPutCount).attr("disabled", "disabled");
							fromEffectWithTweenMax("#nodeVal" + outPutCount, "#xValInMain", false, function() {
								if (buttonName == "addNodes") {
									customIntroNxtStep("#addWhileCon", "checkWhileCon");
								} else if (buttonName == 'insertAtPosition') {//insertAtPosition
									customIntroNxtStep('#insPosIfCondMain');
								} else {//insertAtEnd
									customIntroNxtStep('#calToInsrtBgnEndMthd', 'callToAddNodeMethod');
								}
							});
						break;
						case "nodeMemAllo" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'Let us assume <span class="ct-code-b-yellow">malloc()</span> allocates a memory '
									+ 'to its members <span class="ct-code-b-yellow">data</span> and <span class="ct-code-b-yellow">next</span>'
									+ ' at address <span class="ct-code-b-yellow">' + $("#dataAddress" + (nodeCount - 1)).text() +'</span>.';
							typing('.introjs-tooltiptext' , text, function() {
								appendNextBtn('displayNodeDataAndNext');
							});
						break;
						case "tempNextToNull" :
							$('#next' + (nodeCount - 1)).text('NULL').addClass('opacity00');
							zoomInEffect("#next" + (nodeCount - 1), function() {
								customIntroNxtStep("#returnTmp");
							});
						break;
						case "storeRtnValStre" :
							introcode.refresh();
							fadeInBounceEffectWithTimelineMax('#firstNodeVal','#firstVal', false, function(){
								$('#line15').remove();
								lastnodeCount = 1;
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#firstDiv", "#dataDiv1", "#svgId",
										"line15", "arrow", function() {
									if ($('#insertAtBegin').hasClass('insert-begin')) {
										$('.introjs-tooltip').removeClass('hide');
										text = 'Now rearrange the nodes.';
										typing('.introjs-tooltiptext', text, function() {
											nextBtnWithoutCall(function() {
												$('#line40, #line16, #line10').remove();
												orderingNodes(count);
											});
										});
									} else {
										$('#line12, #line13, .fa, .extraNode, #line40, #line16, #line10').remove();
										introcode.refresh();
										 if (buttonName == 'addNodes') {
											 $('#xValDecInAdd, #xValInAdd').addClass('opacity00');
											 printfCount = 2;
											 outPutCount++;
											 customIntroNxtStep("#printf2", "printText");
										 } else {//insertAtEnd
											 butnStepWithTime();
										 }
									}
								});
							});
						break;
						case "xValDecInInsrt"://insertAtEnd & begin
							transferEffect("#insrtXDec", "#xValeDecInMain", function() {
								printfCount = 3;
								customIntroNxtStep('#printf3', 'printText');
							});
						break;
						case "xPosValDecInInsPos"://insertAtPosition
							transferEffect('#decPosX', '#posValDec', function() {
								transferEffect('#decPosX', '#xValeDecInMain', function() {
									printfCount = 2;
									customIntroNxtStep('#printf2', 'enterInsPosition');
								});
							});
						break;
						case "storeInsPosVal":
							$('#posVal').text($('#nodePosVal' + (outPutCount - 1)).val());
							count = parseInt($('#posVal').text());
							$('#nodePosVal' + (outPutCount - 1)).attr('disabled', 'disabled');
							fromEffectWithTweenMax('#nodePosVal' + (outPutCount - 1), '#posVal', false, function() {
								printfCount = 1;
								customIntroNxtStep('#printf1', 'printText');
							});
						break;
						case "tmpNxtToLstNxt":
							$('#lastNode div:first').effect('highlight', {color: 'blue'}, 500, function() {
								svgAnimatingLineSelector1TopSideToSelector2BottomSide('#animatinDiv', '#lastNode', '#dataDiv'
										 + lastnodeCount, '#svgId', 'line22', 'arrow', function() {
									$('#line22').remove();
									$('#nextDiv' + lastnodeCount).effect('highlight', {color: 'blue'}, 500, function() {
										$("#nextDiv" + (nodeCount - 1)).effect('highlight', {color : 'blue'}, 500);
										fadeInBounceEffectWithTimelineMax('#next'+lastnodeCount, '#next' + (nodeCount - 1), false,
												function() {
											var val;
											if ($('#insertAtPosition').hasClass('insert-position')) {
												val = lastnodeCount + 1;
											} else {
												 val = 1;
											}
											svgAnimatingLineSelector1TopSideToSelector2BottomSide('#animatinDiv', '#nextDiv'
													 + (nodeCount - 1),  '#dataDiv' + val, '#svgId', 'line' + lineCount, 'arrow', function() {
												lineCount++;
												customIntroNxtStep('#csllMethodOperations', 'tmpToLstNxtInElsePosInCsll', 'left');
											});
										});
									});
								});
							});
						break;
						case "tmpToLstNxtInElsePos":
							$('#lastNode div:first').effect('highlight', {color: 'blue'}, 500, function() {
								svgAnimatingLineSelector1TopSideToSelector2BottomSide('#animatinDiv', '#lastNode', '#dataDiv' + lastnodeCount,
											'#svgId', 'line22', 'arrow', function() {
									$('#line22').remove();
									$('#nextDiv' + lastnodeCount).effect('highlight', {color: 'blue'}, 500, function() {
										$('#tempNode div:first').effect('highlight', {color: 'blue'}, 500, function() {
											fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#next' + lastnodeCount, false, function() {
												$('#line' + lastnodeCount).remove();
												if ($('#insertAtPosition').hasClass('insert-endPos')) {
													svgCurve('#node' + (nodeCount - 1), '#dataDiv1');
													customIntroNxtStep('#csllMethodOperations', 'returnFstValue', 'left');
												} else {
													svgAnimatingLineSelector1BottomSideToSelector2TopSide('#animatinDiv',  '#nextDiv' + lastnodeCount,
															'#dataDiv' + (nodeCount - 1),  '#svgId', 'line' + lineCount, 'arrow', function() {
														lineCount++;
														customIntroNxtStep('#csllMethodOperations', 'returnFstValue', 'left');
													});
												}
											});
										});
									});
								});
							});
						break;
					}
				break;
				case "printf" + printfCount:
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printText":
							customIntroNxtStep("#consoleId", "printNodeValText");
						break;
						case "travrsePrntng":
							customIntroNxtStep("#consoleId", "printListEmpty");
						break;
						case "travrseLstPrntng":
							customIntroNxtStep("#consoleId", "printList");
						break;
						case "enterSearchElement" ://search Method
							customIntroNxtStep("#consoleId", "PrintSearchElementText");
						break;
						case "elementNotFound" :
							customIntroNxtStep("#consoleId", "PrintSearchElementNotFoundText");
						break;
						case "elementFound" :
							customIntroNxtStep("#consoleId", "PrintSearchElementFoundText");
						break;
						case "sumPrintng"://count
							customIntroNxtStep("#consoleId", "countPrintng");
						break;
						case "deletetionNotPossible" : //deleteAtEnd
							customIntroNxtStep("#consoleId", "printDeletionNotPossible");
						break;
						case "printPosText" :
							customIntroNxtStep("#consoleId", "printEnterPosText");
						break;
						case "enterInsPosition":
							customIntroNxtStep('#consoleId', 'printInsPosition')
						break;
						case "printInsNoPos":
							customIntroNxtStep('#consoleId', 'PrntInsrtPosNotFound');
						break;
						case "noSuchPosition" :
							customIntroNxtStep("#consoleId", "printNoSuchPosition");
						break;
					}
				break;
				case "consoleId" :
					$("#consoleId, #consoleEnter").removeClass("opacity00");
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printNodeValText"://addMethod & insertAtEnd
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter an element : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							if (iVal > 0 && buttonName == "addNodes") {//change
								$('.introjs-tooltiptext').append('<br><div id="appendText"></div>');
								var text = "If you want to exit from <span class='ct-code-b-yellow'>addNodes()</span> method enter -1";
								typing("#appendText", text, function() {});
							}
							customIntroNxtStep('#scanf' + printfCount, 'scanfReadval');
						break;
						case "enterNodeVal" :
							$('.introjs-tooltip').removeClass('hide');
							var t = $(".nodes").length == 5;
							if (t && buttonName == "addNodes") {//change
								addNegativeValuEvent("#nodeVal" + outPutCount)
								var text = "Here, we are restricted to allow only <span class='ct-code-b-yellow'>5</span> nodes. So, "
										+ "please enter the <span class='ct-code-b-yellow'>node data</span> as "
										+ "<span class='ct-code-b-yellow'>-1</span> only.";
							} else {
								events("#nodeVal" + outPutCount);
								var text = "Enter the <span class='ct-code-b-yellow'>node data</span> value.";
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + outPutCount).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'}, 400).focus();
								introNextSteps("#animatinDiv", "storeXVal");
							});
						break;//end addMethod
						case "printListEmpty"://traverse Method
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Circular Singly Linked List is empty</span><br/>');
							outPutCount++;
							customIntroNxtStep("#buttonDiv", "showButtons");
						break;
						case "printList":
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The elements in Circular Singly Linked List are: </span>');
							customIntroNxtStep("#calToTravrseMethd");
						break;
						case "printLstElemnts":
							$('#print' + outPutCount).append('<b><span id="outData' + nodeCount + '" class="ct-code-b-yellow"></span></b>'
													+ '<span class="opacity00" id="arrow' + nodeCount	+ '"> -->&nbsp;</span></span>');
							$("#tempNodeVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
								svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv" 
											+ nodeCount, "#svgId", "line36", "arrow", function() {
									$("#line36").remove();
									fadeInFromEffectWithTimelineMax("#data" + nodeCount, "#outData" + nodeCount, true, function() {
										$("#outData" + nodeCount).css({"color": "yellow"});
										$("#arrow" + nodeCount).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
											$(this).removeClass("animated zoomIn");
											customIntroNxtStep('#csllMethodOperations', 'trvrsTmpToTmpNxt', 'left');
										});
									});
								});
							});
						break;
						case "printNextLine":
							$('#print1').after('<span id="nxtLne">\n<input id="emptySpan" style="width: 10px; border: none; background: black;">'
											+ '</input></span>');
							$('#emptySpan').effect('highlight', {color: 'yellow'}, 500, function() {
								customIntroNxtStep("#buttonDiv", "showButtons");
							});
						break;//end traverse method
						case "PrintSearchElementText" ://search method
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter a search element : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							outPutCount++;
							customIntroNxtStep("#scanf1", "readSearchVal");
						break;
						case "entersearchVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = "Please enter which element you want to <span class='ct-code-b-yellow'>search</span>.";
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + (outPutCount - 1)).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'},
										400).focus();
								introNextSteps("#animatinDiv", "readSearchVal");
								events("#nodeVal" + (outPutCount - 1));
							});
						break;
						case "PrintSearchElementNotFoundText" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The given element <span class="ct-code-b-yellow">'
									+ $("#xValInAdd").text() +'</span> is <span class="ct-code-b-yellow">not found</span> in the given Circular'
									+ ' Singly Linked List.</span><br/>');
							butnStepWithTime();
						break;
						case "PrintSearchElementFoundText" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The given element <span class="ct-code-b-yellow">'
									+ $("#xValInAdd").text() +'</span> is <span class="ct-code-b-yellow">found</span> at position'
									+ ' <span class="ct-code-b-yellow">'+ $("#posVal").text() +'</span></span><br/>');
							butnStepWithTime();
						break;
						case "countPrintng"://count
							$('#consoleEnter').append('<span id="print' + outPutCount + '">The number of nodes in a Circular Singly Linked List are : '
										+ '<span id="outData" class="ct-code-b-yellow"></span></span>');
							$('#animatinDiv').addClass('z-index1000000');
							fadeInFromEffectWithTimelineMax('#opVal', '#outData', true, function() {
								$('#animatinDiv').removeClass('z-index1000000');
								butnStepWithTime();
							});
						break;
						case "printDeletionNotPossible" ://deleteAtEnd && deleteAtBegin && deleteAtPosition
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Linked List is empty so '
									+ 'Deletion is not possible</span><br/>');
							butnStepWithTime();
						break;
						case "deletedNoElement" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">No such position in Circular Linked List '
									+ 'so Deletion is not possible</span><br/>');
							outPutCount++;
							customIntroNxtStep("#csllMethodOperations", "freeNoNode", 'left');
						break;
						case "deletedElement" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">The deleted item from Circular Singly Linked List : '
												+ '<span class="ct-code-b-yellow value"></span></span><br/>');
							if (buttonName == "deleteAtBegin") {
								$('.value').append($("#data1").text());
							} else {
								$('.value').append($("#data" + lastnodeCount).text());
							}
							customIntroNxtStep("#csllMethodOperations", "freeNode", 'left');
						break;
						case "printEnterPosText" :
							$("#consoleEnter").append('<span id="print'+ outPutCount +'">Enter a position : ' 
									+ '<input class="user-text visibility-hidden"'
									+ ' id="nodeVal'+ outPutCount +'" placeholder="number" maxlength="3" size="4"></span><br/>');
							outPutCount++;
							customIntroNxtStep("#scanf2", "readPosVal");
						break;
						case "enterPosVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = "Please enter a position which element you want to <span class='ct-code-b-yellow'>delete</span>.";
							typing('.introjs-tooltiptext', text, function() {
								$('#nodeVal' + (outPutCount - 1)).removeClass("visibility-hidden").effect("highlight", {color : 'yellow'},
										400).focus();
								introNextSteps("#animatinDiv", "readPosVal");
								events("#nodeVal" + (outPutCount - 1));
							});
						break;
						case "printInsPosition":
							$("#consoleEnter").append('<span id="print' + outPutCount + '">Enter a position : <input id="nodePosVal' 
									 + outPutCount + '" maxlength="2" class="visibility-hidden user-text" placeholder="number"></span><br/>');
							outPutCount++;
							customIntroNxtStep('#scanf2', 'readInsPosVal');
						break;
						case 'enterInsPosVal':
							$('.introjs-tooltip').removeClass('hide');
							text = 'Please enter a <span class="ct-code-b-yellow">position</span>, where you want to'
									+ ' <span class="ct-code-b-yellow">insert</span> a node.';
							typing('.introjs-tooltiptext', text, function() {
								$('#nodePosVal' + (outPutCount - 1)).removeClass('visibility-hidden').effect('highlight', {color: 'yellow'},
										400).focus();
								introNextSteps('#animatinDiv', 'storeInsPosVal');
								events('#nodePosVal' + (outPutCount - 1));
							});
						break;
						case "PrntInsrtPosNotFound":
							outPutCount++;
							$('#consoleEnter').append('<span id="print' + outPutCount + '">No such position in Circular Singly'
									 + ' Linked List. So insertion is not possible</span><br/>');
							if (count <= 0 || (count > 1 && $('#firstVal').text() == 'NULL')) {
								butnStepWithTime();
							} else {
								customIntroNxtStep('#csllMethodOperations', 'returnFstValue', 'left');
							}
						break;
					}
				break;
				case "scanf" + printfCount :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "scanfReadval" :// add method
							customIntroNxtStep("#consoleId", "enterNodeVal", "left");
						break;
						case "readSearchVal" ://search method
							customIntroNxtStep("#consoleId", "entersearchVal", "left");
						break;
						case "readPosVal" :
							customIntroNxtStep("#consoleId", "enterPosVal", "left");
						break;
						case "readInsPosVal"://insertAtPosition
							customIntroNxtStep('#consoleId', 'enterInsPosVal', 'left');
						break;
					}
				break;
				case "addWhileCon" ://addMethod
					$("#nodeVal" + outPutCount).attr("disabled", "disabled");
					ifConditionText('x', '!=', '-1', function() {
						fromEffectWithTweenMax("#whileCon", "#ifCondition", true, function() {
							flipEffectWithTweenMax("#first", $("#nodeVal" + outPutCount).val(), function() {
								var con = $("#nodeVal" + outPutCount).val() != -1;
								conditionMessage(con, function() {
									if (con) {
										introNextSteps("#addNodeMethod", "callToAddNodeMethod");	
									} else {
										introNextSteps("#buttonDiv", "showButtons");
										$('#xValeDecInMain, #xValInMain').addClass('opacity00');
									}
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				break;
				case "calToInsrtAtPosMthd":
				case "calToInsrtBgnEndMthd"://addNodes, insertAtEnd & insertAtBegin
				case "addNodeMethod" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "callToAddNodeMethod" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here, we are calling the <span class="ct-code-b-yellow"> ' + buttonName + '()</span> method and passing'
									+ ' <span class="ct-code-b-yellow">first</span> and <span class="ct-code-b-yellow">x</span> as arguments'
									+ ' and the return value is stored in <span class="ct-code-b-yellow">first</span>.<br>i.e., '
									+ '<span class="ct-code-b-yellow">' + buttonName + '("' + $('#firstVal').text() +'", '
									+ $('#xValInMain').text() +')</span>.';
							typing('.introjs-tooltiptext', text, function() {
								if (buttonName == 'insertAtBegin') {
									introNextSteps('#csllMethodOperations', 'insrtBgnMethod', 'left');
								} else {
									introNextSteps("#csllMethodOperations", "addNodeMethos",  "left");
								}
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnFirstVal" :
							frstNodeRetrnInMethod(function() {
								introNextSteps("#animatinDiv", "storeRtnValStre", 'left');
								$('.introjs-nextbutton').show();
							});
						break;
						case "callToPosMthd":
							$('.introjs-tooltip').removeClass('hide');
							if (count == 1 && $('.nodes').length > 0) {
								nodeCount = 1;
								lastnodeCount = 2;
								changeIdsAtBegin(2);
							}
							text = 'The <span class="ct-code-b-yellow">first</span> node is initialized with the address returned by the'
									+ ' <br><span class="ct-code-b-yellow">' + buttonName + '(' + $('#firstVal').text() +', ' 
									+ $('#posVal').text() + ', ' + $('#xValInMain').text() + ')</span> method.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps('#csllMethodOperations', 'insrtPosMethod', 'left');
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "csllMethodOperations":
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "addNodeMethos" :
							$("#csllMethodOperations").empty().removeClass("opacity00");
							addNodesMethod();
							introcode.refresh();
							arrow("#addMethodDec", "#addMethodDec", function() {
								insrtngNodesTxt();
							});
						break;
						case "returnTempVal" :
							$('.introjs-tooltip').removeClass("hide");
							text = 'The <span class="ct-code-b-yellow">createNode()</span> method returns the value stored in '
									+ '<span class="ct-code-b-yellow">temp</span>(<span class="ct-code-b-yellow">' + $("#dataAddress" 
									+ (nodeCount - 1)).text() +'</span>) and it is stored in <span class="ct-code-b-yellow">temp</span> node.';
							typing('.introjs-tooltiptext' , text, function() {
								$('#callTocreateMethod').effect( "highlight",{color: 'blue'}, 1000);
								$('#animatinDiv').addClass('z-index1000000');
								appendNextBtn('storeAddAndData');
							});
						break;//traverse Method
						case "traverseList":
							$("#csllMethodOperations").removeClass("opacity00");
							preTraverseLstMtd();
							introcode.refresh();
							arrow("#trvrseLstMtdDec", "#trvrseLstMtdDec", function() {
								frstNodeInitNPassed(function() {
									$('#animatinDiv').addClass('z-index1000000');
									appendNextBtn('travrsePassedValInit');
								});
							});
						break;
						case "trvrsTmpToTmpNxt":
							arrow("#printf10", "#travrseTmpnxtToTmp", function() {
								$('.introjs-tooltip').removeClass("hide");
								tmpNxtToTmpText();
							});
						break;//end traverse method
						case "searchMethod" ://search method
							$("#csllMethodOperations").empty().removeClass("opacity00");
							searchPositionOfEle();
							introcode.refresh();
							arrow("#searchPassValDecl", "#searchPassValDecl", function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'The <span class="ct-code-b-yellow">first</span> node and <span class="ct-code-b-yellow">key</span>'
										+ ' variables are initialized with the values passed by the <span class="ct-code-b-yellow">searchPosOfEle()'
										+ '</span> method. i.e. <span class="ct-code-b-yellow">' + buttonName + '('+ $("#firstVal").text() 
										+ ', '+ $('#xValInAdd').text() +')</span>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#animatinDiv').addClass('z-index1000000');
									appendNextBtn('searchMethodVariablesDeclaration');
								});
							});
						break;
						case "countMtdCalng"://count method
							preCountMtd();
							introcode.refresh();
							$("#csllMethodOperations").removeClass("opacity00");
							arrow('#cntMtdDec', '#cntMtdDec', function() {
								$('.introjs-tooltip').removeClass("hide");
								frstNodeInitNPassed(function() {
									appendNextBtn('travrsePassedValInit');
								});
							});
						break;
						case "deleteAtEndMethod" ://deleteAtEnd && deleteAtBegin Method
							$("#csllMethodOperations").empty().removeClass("opacity00");
							if (buttonName == "deleteAtEnd") {
								deleteAtEnd();
							} else if (buttonName == "deleteAtPosition") { 
								deleteAtPosition();
							} else {
								deleteAtBegin();
							}
							introcode.refresh();
							arrow("#deleteAtEndDec", "#deleteAtEndDec", function() {
								frstNodeInitNPassed(function() {
									$('#animatinDiv').addClass('z-index1000000');
									appendNextBtn('deleteAtEndMethodVariablesDeclaration');
								});
							});
						break;
						case "freeNode" :
							$('#animatinDiv').addClass('z-index1000000');
							if (buttonName != "deleteAtPosition") {
								arrow("#printf2", "#freeNode");
							} else {
								if (printfCount == 5) {
									arrow("#printf5", "#freeNode");
								} else {
									arrow("#printf4", "#returnFirst");
								}
							}
							$('.introjs-tooltip').removeClass('hide');
							if (buttonName == "deleteAtBegin") {
								text = 'Now delete the node <span class="ct-code-b-yellow">' + $("#data1").text() +'</span> at address'
								+ ' <span class="ct-code-b-yellow">' + $('#dataAddress1').text() + '</span>.';
							} else if (buttonName == "deleteAtPosition") {
								var pos = $("#posVal").text();
								text = 'Now delete the node <span class="ct-code-b-yellow">' + $("#data" + pos).text() +'</span> '
								+ 'at address <span class="ct-code-b-yellow">' + $('#dataAddress' + pos).text() + '</span>.';
							} else {
								text = 'Now delete the node <span class="ct-code-b-yellow">' + $("#data" + lastnodeCount).text() +'</span> '
								+ 'at address <span class="ct-code-b-yellow">' + $('#dataAddress' + lastnodeCount).text() + '</span>.';
							}
							typing('.introjs-tooltiptext', text, function() {
								appendNextBtn('freeNode');
							});
						break;
						case "freeNoNode" :
							returnFirstNode();
						break;
						case "insrtBgnMethod"://insertAtBegin
							preInsertBeginMethod();
							preInsBeginNPositionMethod();
							introcode.refresh();
							$("#csllMethodOperations").removeClass("opacity00");
							arrow('#insrtBgnDec', '#insrtBgnDec', function() {
								insrtngNodesTxt();
							});
						break;
						case "insrtPosMethod"://insertAtPositon
							preInsrtAtPosMethod();
							preInsBeginNPositionMethod();
							introcode.refresh();
							$('#csllMethodOperations').removeClass('opacity00');
							arrow('#insrtPosDec', '#insrtPosDec', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'The <span class="ct-code-b-yellow">first</span> node <span class="ct-code-b-yellow">pos</span> and'
									+ ' <span class="ct-code-b-yellow">x</span> variables are initialized'
									+ ' with the address passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method. <br>i.e., '
									+ '<span class="ct-code-b-yellow">' + buttonName + '('+ $("#firstVal").text() 
									+ ', ' + $('#posVal').text() + ', '+ $('#xValInMain').text() +')</span>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#animatinDiv').addClass('z-index1000000');
									appendNextBtn('insPosPassedValInit');
								});
							});
						break;
						case "returnFstValue":
							if ($('#insertAtPosition').hasClass('not-found')) {
								frstRetnInInsrtPos('#printf4', '#retrnFst1');
							} else {
								frstRetnInInsrtPos('#elseTmpToLstNxt', '#retrnFst');
							}
						break;
						case "tmpToLstNxtInElsePosInCsll":
							arrow('#elseLstNxtToTmpNxt', '#elseTmpToLstNxt', function() {
								$('.introjs-tooltip').removeClass('hide');	
								text = 'Here we are storing <span class="ct-code-b-yellow">temp</span> (i.e., <span class="ct-code-b-yellow">'
										+ $('#tempNodeVal').text() + '</span>) to the <span class="ct-code-b-yellow">next</span> member of'
										+ ' <span class="ct-code-b-yellow">lastNode</span> (<span class="ct-code-b-yellow">lastNode -> next</span>).';
								typing('.introjs-tooltiptext', text, function() {
									introNextSteps('#animatinDiv', 'tmpToLstNxtInElsePos');
									$('.introjs-nextbutton').show();
								});
							});
						break;
					}
				break;
				case "csllOperations" :
					$("#csllOperations").empty().removeClass('opacity00');
					preCreateNodeFunction();
					introcode.refresh();
					customIntroNxtStep("#tmpCreate");
				break;
				case "tmpCreate" ://addMethod
					$('#animatinDiv').removeClass('z-index1000000');
					$('.introjs-tooltip').removeClass('hide');
					text = 'A variable <span class="ct-code-b-yellow">temp</span> is of type <span class="ct-code-b-yellow">node</span> is declared.';
					typing('.introjs-tooltiptext', text, function() {
						declareNodesWhenFunctionCall("tmpNde", "tmpNdeVal", "tmpNdeInCreMtd", "temp<sub>createNode</sub>", function() {
							$('#tmpNde').addClass('margin-left30');
							introNextSteps("#animatinDiv", 'tempsDeclar');
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "allocateMem" :
					$('.introjs-tooltip').removeClass("hide");
					text = '<ul><li class = "opacity00" id="li1">The <span class="ct-code-b-yellow">'
							+ 'sizeof(struct listNode)</span> returns the size '
							+ ' occupied by a list node which contains <span class="ct-code-b-yellow">two</span>'
							+ ' fileds <span class="ct-code-b-yellow">data</span> and <span class="ct-code-b-yellow">next</span>.</li> '
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
								introNextSteps("#animatinDiv", "nodeMemAllo", 'left');
								$('.introjs-nextbutton').show();
							}});
						}});
					}});
				break;
				case "asgnToNlToTmp" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'Since, the <span class="ct-code-b-yellow">next</span> member of the <span class="ct-code-b-yellow">temp</span> '
							+ 'node is initialized to <span class="ct-code-b-yellow">NULL</span>.'
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "tempNextToNull");
						$('.introjs-nextbutton').show();
					});
				break;
				case "returnTmp" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'The <span class="ct-code-b-yellow">return</span> statement returns the <span class="ct-code-b-yellow">address'
							+ '</span> (i.e. <span class="ct-code-b-yellow">' + $("#dataAddress" + (nodeCount - 1)).text() +'</span>)'
							+ ' stored in <span class="ct-code-b-yellow">temp</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#csllMethodOperations", "returnTempVal", 'left');
						$('.introjs-nextbutton').show();
					});
				break;//end addMethod
				case "travrseIfCond"://traverse
					ifConditionText('first', '==', 'NULL', function() {
						fromEffectWithTweenMax("#travrseFrstToNul", "#ifCondition", true, function() {
							nextBtnWithoutCall(function() {
								flipTheCon("#first", $("#firstVal").text(), "NULL")
							});
						});
					});
					break;
				case "calToTravrseMethd":
					frstNodeInitInMethod(function() {
						introNextSteps("#csllMethodOperations", "traverseList", "left");
						$('.introjs-nextbutton').show();
					});
				break;//end of traverse
				case "ifPosEqZero" :
					text = 'Now check the condition : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
							+ '<span id="first" class="position">pos</span> <= <span id="second" class="position">0</span></span>'
							+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
					$('.introjs-tooltiptext').text("").append(text);
					$('.introjs-tooltip').removeClass('hide');
					fromEffectWithTweenMax("#posEqlZero", "#ifCondition", true, function() {
						appendNextBtn('ifPosLessThanZero');
					});
				break;
				case 'insrtXDec'://insertAtBegin
					$('.introjs-tooltip').removeClass('hide');
					text = 'A variable <span class="ct-code-b-yellow">x</span> is of type <span class="ct-code-b-yellow">int</span> is declared.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animatinDiv', 'xValDecInInsrt');
						$('.introjs-nextbutton').show();
					}); 
				break;
				case "decPosX"://insertAtPosition
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we declared two variables <span class="ct-code-b-yellow">pos</span> and <span class="ct-code-b-yellow">x</span>'
							+ ' are of type <span class="ct-code-b-yellow">int</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#animatinDiv', 'xPosValDecInInsPos');
						$('.introjs-nextbutton').show();
					});
				break;
				case "insPosIfCondMain":
					insertPosMainCondChecking();
				break;
			}
		});
	});
	introcode.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	$('.introjs-tooltip').removeClass('hide');
	text = 'Here, we will learn about <span class="ct-code-b-yellow">Circular Singly Linked List </span> operations.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function ifPosLessThanZero() { 
	var pos = $("#posVal").text();
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#first", pos, function() {
		var con = pos <= 0;
		conditionMessage(con, function() {
			if (con) {
				printfCount = 3;
				introNextSteps("#printf3", "noSuchPosition");	
			} else {
				introNextSteps("#callToDeleteAtEndMethod",'storeReturnValToFirst');
			}
			$('.introjs-nextbutton').show();
		});
	});
}

function frstNodeInitInMethod(callBackFunction) {
	$('.introjs-tooltip').removeClass('hide');
	text = "Here, we are calling <span class='ct-code-b-yellow'>" + buttonName + "()</span> method and passing <span class='ct-code-b-yellow'>" 
			+ "first</span> value (i.e., <span class='ct-code-b-yellow'>" + $("#firstVal").text() + "</span>) as an argument.";
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function frstNodeRetrnInMethod(callBackFunction) {
	$('.introjs-tooltip').removeClass("hide");
	text = 'The <span class="ct-code-b-yellow">' + buttonName + '()</span> method returns the value stored in'
			+ ' <span class="ct-code-b-yellow">first</span>(i.e., <span class="ct-code-b-yellow">' + $("#firstNodeVal").text()
			+'</span>) and stores it in the variable <span class="ct-code-b-yellow">first</span>.';
	typing('.introjs-tooltiptext' , text, function() {
		$('#animatinDiv').removeClass('z-index1000000');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function frstNodeInitNPassed(callBackFunction) {
	var methodDefinitions;
	var pos = $("#posVal").text()
	if (buttonName == "deleteAtPosition") {
		methodDefinitions = 'deleteAtPosition("'+ $("#firstVal").text() +'", "'+  pos + '")';
	} else {
		methodDefinitions = buttonName + '("'+ $("#firstVal").text() +'")';
	}
	$('.introjs-tooltip').removeClass('hide');
	text = 'The <span class="ct-code-b-yellow">first</span> node is initialized with the node address passed by the <span class="ct-code-b-yellow">'
			+ buttonName + '()</span> method.<br> i.e., <span class="ct-code-b-yellow">' + methodDefinitions + '</span>.';
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	});
}

function declarationOfPosVar() { 
	$(".introjs-duplicate-nextbutton").remove();
	transferEffect("#decPos", "#posValDec", function() {
		introNextSteps("#IfFirstNotEqToNull");
		$('.introjs-nextbutton').show();
	});
}

//deleteAtEnd Method Functions
function deleteAtEndMethodVariablesDeclaration() { 
	$(".introjs-duplicate-nextbutton").remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
		introcode.refresh();
		transferEffect("#deleteAtEndDec", "#firstNode", function() {
			$('#firstNodeVal').text($('#firstVal').text());
			fromEffectWithTweenMax('#firstVal', '#firstNodeVal', false, function() {
				if ($('#firstNodeVal').text() != "NULL") {
					$("#line16").remove();
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", "#svgId", "line16", "arrow");
				}
				if (buttonName == "deleteAtPosition") {
					$("#extraNode").html("pos<sub>" + buttonName + "</sub>");
					transferEffect("#declarePosVar", "#opValDec", function() {
						$('#opVal').text($('#posVal').text());
						fromEffectWithTweenMax('#posVal', '#opVal', false, function() {
							appendNextBtn('declarePrevAndLastNode');
						});
					});
				} else {
					appendNextBtn('declarePrevAndLastNode');
				}
			});
		});
	});
}

function declarePrevAndLastNode() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#deleteAtEndDec", "#decPrevAndLastNode", function() {
		if (buttonName != "deleteAtEnd") {
			text = 'Here, we are declaring <span class="ct-code-b-yellow">prev</span> and <span class="ct-code-b-yellow">'
				+ ' lastNode</span> node and initialize to <span class="ct-code-b-yellow">first</span> node value '
				+ ' <span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>.'
		} else {
			text = 'Here, we are declaring <span class="ct-code-b-yellow">prev</span> and <span class="ct-code-b-yellow">'
				+ ' lastNode</span> node and the <span class="ct-code-b-yellow">lastNode</span> is initialize to'
				+ ' <span class="ct-code-b-yellow">first</span> node value '
				+ ' <span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>.'
		}
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('declarePrevAndLastNodeAnimation');
		});
	});
}

function declarePrevAndLastNodeAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	declareNodesWhenFunctionCall("prevNode", "prevNodeVal", "prevNodeInSearch", "prev", function() {
		$("#prevNode").addClass("margin-left30");
		transferEffect("#decPrevAndLastNode", "#prevNode", function() {
			if (buttonName != "deleteAtEnd" ) {
				$('#prevNodeVal').text($('#firstVal').text());
				fromEffectWithTweenMax('#firstNodeVal', '#prevNodeVal', false, function() {
					if ($('#prevNodeVal').text() != "NULL") {
						$("#line17").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#prevNode", "#dataDiv1"
								, "#svgId", "line17", "arrow", function() {
							deleteFunctionVarDeclaration();
						});
					}
				});
			} else {
				deleteFunctionVarDeclaration();
			}
		});
	});
}

function deleteFunctionVarDeclaration() {
	declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInSearch", "lastNode", function() {
		$("#lastNode").addClass("margin-left30");
		transferEffect("#decPrevAndLastNode", "#lastNode", function() {
			$('#lastNodeVal').text($('#firstVal').text());
			fromEffectWithTweenMax('#firstNodeVal', '#lastNodeVal', false, function() {
				if ($('#lastNodeVal').text() != "NULL") {
					$("#line10").remove();
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", "#dataDiv1", "#svgId", "line10", "arrow");
				}
				if (buttonName == "deleteAtPosition") {
					appendNextBtn('decIVal');
				} else {
					appendNextBtn('ifLastNodeNextEqualToFirst');
				}
			});
		});
	});
}

function decIVal() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#decPrevAndLastNode", "#declareiVar");
	text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">i</span> is of type <span class="ct-code-b-yellow">int</span>.';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('decIValAnimation');
	});
}

function decIValAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#countName").text("i");
	transferEffect("#declareiVar", "#countValDec", function() {
		appendNextBtn('ifPosEqOne');
	});
}

function ifPosEqOne() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#declareiVar","#ifPosEqOne");
	ifConditionText("pos", "==", "1", function() {
		fromEffectWithTweenMax("#ifPosEqOne", "#ifCondition", true, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
			$('.introjs-duplicate-nextbutton').click(function () {
				ifConditionInDelAtPos("#first", $("#posVal").text(), "1", 1);
			});
		});
	});
}

function ifConditionInDelAtPos(selector1, value1, value2) {
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax(selector1, value1, function() {
		var con = value1 == value2 ;
		conditionMessage(con, function() {
			if (con) {
				flag = false;
				appendNextBtn('ifLastNodeNextEqualToFirst');
			} else {
				flag = true;
				appendNextBtn('forLoop');
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
	transferEffect("#iDec", "#countValDec", function() {
		$("#countVal").text(i);
		zoomInEffect("#countVal", function() {
			appendNextBtn("iConText");
		});
	});
}

function iConText() {
	$(".introjs-duplicate-nextbutton").remove();
	text = 'Now check the condition : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
		+ '<span id="first" class="position">i</span> < <span id="second" class="position">pos</span></span>'
		+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	fromEffectWithTweenMax("#iCon", "#ifCondition", true, function() {
		appendNextBtn('iConAnimation');
	});
}

function iConAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	var pos = $("#nodeVal" + (outPutCount - 1)).val();
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#first", i, function() {
		flipEffectWithTweenMax("#second", pos, function() {
			var con = i < pos;
			conditionMessage(con, function() {
				if (con) {
					flag = true;
					appendNextBtn('ifLastNodeNextEqualToFirst');
				} else {
					$(".introjs-duplicate-nextbutton").remove();
					appendNextBtn('prevNxtEqLstNextText');
				}
			});
		});
	});
}

function ifLastNodeNextEqualToFirst() {
	var selector, selector1;
	$(".introjs-duplicate-nextbutton").remove();
	if (buttonName == "deleteAtBegin") {
		selector1 = "iflstNtEqFst";
		arrow("#decPrevAndLastNode", "#iflstNtEqFst");
		selector = "prev -> next";
	} else if (buttonName == "deleteAtPosition") {
		if ($("#posVal").text() == 1) {
			selector1 = "iflstNtEqFst";
			arrow("#decPrevAndLastNode", "#iflstNtEqFst");
			selector = "prev -> next";
		} else {
			selector1 = "ifLastNodeNextEqFirst";
			selector = "prev -> next";
			arrow("#forLoop", "#ifLastNodeNextEqFirst");
		}
	} else {
		selector1 = "iflstNtEqFst";
		arrow("#decPrevAndLastNode", "#iflstNtEqFst");
		selector = "lastNode -> next";
	}
	ifConditionText(selector, '==', 'first', function() {
		fromEffectWithTweenMax("#" + selector1, "#ifCondition", true, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
			$('.introjs-duplicate-nextbutton').click(function () {
				ifEqualCondition("#next" + lastnodeCount, '#firstVal');
			});
		});
	});
}

function ifEqualCondition(value1, value2) {
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#first", $(value1).text(), function() {
		flipEffectWithTweenMax("#second", $(value2).text(), function() {
			var con = $(value1).text() == $(value2).text();
			conditionMessage(con, function() {
				if ( buttonName == "deleteAtPosition") {
					if (con) {
						if (flag) {
							appendNextBtn('printNoSuchElement');
						} else {
							appendNextBtn('assignFirstToNull');
						}
					} else {
						if ($("#posVal").text() == 1) {
							nextBtnWithoutCall(function() {
								whileConText("deleteAtEnd")
							});
						} else {
							appendNextBtn('assnlstToPrev');	
						}
					}
				} else {
					if (con) {
						appendNextBtn('assignFirstToNull');
					} else {
						nextBtnWithoutCall(function() {
							whileConText("deleteAtEnd")
						});
					}
				}
			});
		});
	});
}

function printNoSuchElement() {
	$(".introjs-duplicate-nextbutton").remove();
	printfCount = 4;
	arrow("#ifLastNodeNextEqFirst", "#printf4");
	text = 'There is no such position to delete the node.';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps("#consoleId",'deletedNoElement');
		$('.introjs-nextbutton').show();
	});
}

function assignFirstToNull() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#iflstNtEqFst", "#assnNullTofst", function() {
		text = 'Here, <span class="ct-code-b-yellow">first</span> node is initialized with <span class="ct-code-b-yellow">NULL</span>.'; 
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn("assignNullValue");
		});
	});
}

function assignNullValue() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#firstNodeVal").text("NULL");
	zoomInEffect("#firstNodeVal", function() {
		$("#line16").remove();	
		appendNextBtn("printDeletedElement");
	});
}


function printDeletedElement() {
	$(".introjs-duplicate-nextbutton").remove();
	if (buttonName == "deleteAtBegin") {
		arrow("#assnFstToPrevNxt", "#printf2");
		text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">'
			+ $("#data1").text() +'</span>.'
	} else if (buttonName == "deleteAtPosition") {
		var pos = $("#posVal").text();
		printfCount = 5;
		if ($("#posVal").text() == 1) {
			arrow("#whileLstNotEqFst", "#printf5");
		} else {
			arrow("#prevNxtEqLstNext", "#printf5");
		}
		text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">'
			+ $("#data" + pos).text() +'</span>.'
	} else {
		arrow("#assnNullTofst", "#printf2");
		text = 'Here we have to print the deleted node <span class="ct-code-b-yellow">'
			+ $("#data" + lastnodeCount).text() +'</span>.'
	}
	typing('.introjs-tooltiptext', text, function() {
		if (buttonName == "deleteAtBegin") {
			$("#node1").addClass("blinking");
		} else {
			$("#node" + lastnodeCount).addClass("blinking");
		}
		introNextSteps("#consoleId",'deletedElement');
		$('.introjs-nextbutton').show();
	});
}


function freeNode() {
	$(".introjs-duplicate-nextbutton").remove();
	$("polyline, #line17, #line16, #line10").remove();
	if (buttonName == "deleteAtBegin" ) {
		$("#line15").remove();
		if ($('.nodes').length == 1) {
			deleteAtBeginNodeIfLengthIsOne();
		} else {
			deleteAtBeginNodeIfLengthNotEqOne();
		}
	} else if (buttonName == "deleteAtPosition") {
		if ($("#posVal").text() == 1) {
			if ($('.nodes').length == 1) {
				deleteAtBeginNodeIfLengthIsOne();
			} else {
				deleteAtBeginNodeIfLengthNotEqOne();
			}
		} else if ($("#posVal").text() == $(".nodes").length) {
			deleteAtEndNode();
			svgCurve("#next" + (lastnodeCount - 1), "#dataDiv1");
		} else {
			TweenMax.to("#node" + lastnodeCount, 0.5, { top : -80, onComplete: function() {
				$("#node" + lastnodeCount).addClass("opacity00").css("top","0");
				$("#line15").remove();
				deleteAtFirstNode(($(".line").length + 2), lastnodeCount, "#node" + lastnodeCount, function() {
					lastnodeCount--;
					$(".line").remove();
					changeIdsAtBegin(lastnodeCount, function() {
						setTimeout(function() {
							changeIdsAtBegin(lastnodeCount, function() {
								$("line, polyline").remove()
								$("#line15").remove();
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#firstDiv", "#dataDiv1", "#svgId",
									"line15", "arrow");
								var len = $(".nodes").length;
								for (var i = 1; i < len; i++) {
									svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#next" + (i), "#dataDiv" + (i + 1), "#svgId",
											"line" + (i), "arrow");
									$("#line" + i).attr("class", "svg-line line");
								}
								svgCurve("#next" + len, "#dataDiv1");
								svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#prevNode", "#dataDiv" + preCount, "#svgId",
										"line17", "arrow");
								svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", 
										"#svgId","line16", "arrow");
								appendNextBtn("returnFirstNode");
							});
						},1200);
					});
				});
			}});
		}
	} else {
		deleteAtEndNode();
	}
}

function deleteAtEndNode() {
	TweenMax.to("#node" + lastnodeCount, 0.5, { top : -80, onComplete: function() {
		$("#node" + lastnodeCount).remove();
		$("#line10, #line17").remove();
		introcode.refresh();
		if ($('.nodes').length == 0) {
			$("#line15, polyline").remove();
			appendNextBtn("returnFirstNode");
		} else {
			if (buttonName == "deleteAtEnd") {
				nodeCount--;
			}
			$("#line10, #line" + lastnodeCount).remove();
			appendNextBtn("returnFirstNode");
		}
	}});
}

function deleteAtBeginNodeIfLengthIsOne() {
	$("#line1").remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$("#node1").remove();
		$("#line15, polyline").remove();
	}});
	appendNextBtn("returnFirstNode");
}

function deleteAtBeginNodeIfLengthNotEqOne() {
	$("#line1").remove();
	TweenMax.to("#node1", 0.5, { top : -80, onComplete: function() {
		$("#node1").addClass("opacity00").css("top","0");
		deleteAtFirstNode(($(".line").length + 1), 1, "#node1", function() {  
			setTimeout(function() {
				lastnodeCount--;
				changeIdsAtBegin(1);
				var len = $(".nodes").length;
				for (var i = 1; i < len; i++) {
					svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#next" + (i), "#dataDiv" + (i + 1), "#svgId",
							"line" + (i), "arrow");
					$("#line" + i).attr("class", "svg-line line");
				}
				svgCurve("#next" + lastnodeCount, "#dataDiv1");
				svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", 
						"#svgId","line16", "arrow");
				svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", 
						"#dataDiv" + (lastnodeCount), "#svgId",
										"line10", "arrow", function() {
					$("#line15").remove();
					svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#firstDiv", "#dataDiv1", "#svgId",
							"line15", "arrow", function() {
						appendNextBtn("returnFirstNode");
					});
				});
			},1200);
		});
	}});
}

function returnFirstNode() {
	if (buttonName == "deleteAtPosition") {
		if (printfCount == 5) {
			arrow("#freeNode", "#rtnFst");	
		} else {
			arrow("#printf4", "#returnFirst");
		}
	} else {
		arrow("#freeNode", "#rtnFst");
	}
		$(".introjs-duplicate-nextbutton").remove();
		$('.introjs-tooltip').removeClass("hide");
		text = 'The <span class="ct-code-b-yellow">'+ buttonName+'()</span> method return '
				+'<span class="ct-code-b-yellow">first</span> value <span class="ct-code-b-yellow">'
				+ $("#firstNodeVal").text() +'</span>.'
		typing('.introjs-tooltiptext', text, function() {
			introNextSteps("#callToDeleteAtEndMethod", 'returnFirstVal');		
			$('.introjs-nextbutton').show();
		});
}//end deleteAtEnd

function searchMethodVariablesDeclaration() {	//search method function
	$(".introjs-duplicate-nextbutton").remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>search</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introcode.refresh();
		setTimeout(function() {
			transferEffect("#decKeyAndFstNode", "#firstNode", function() {
				$('#firstNodeVal').text($('#firstVal').text());
				fromEffectWithTweenMax('#firstVal', '#firstNodeVal', false, function() {
					if ($('#firstNodeVal').text() != "NULL") {
						$("#line16").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", "#svgId", "line16", "arrow");
					}
					$("#extraNode").text("key");
					transferEffect("#decKeyAndFstNode", "#opValDec", function() {
						$('#opVal').text($('#xValInAdd').text());
						fromEffectWithTweenMax('#xValInAdd', '#opVal', false, function() {
							appendNextBtn('declareCurrentAndQNodeText');
						});
					});
				});
			});
		},800);
	});
}

function declareCurrentAndQNodeText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#searchPassValDecl", "#declCurrNodeNdQNode", function() {
		text = 'Here, we are declared two nodes <span class="ct-code-b-yellow">currentNode</span> and <span class="ct-code-b-yellow">'
			+ 'q</span>,  which are initialized with <span class="ct-code-b-yellow">first</span> node value'
			+ ' <span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>.'
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('declareCurrentAndQNodeAnimation');
		});
	});
}

function declareCurrentAndQNodeAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	declareNodesWhenFunctionCall("currentNode", "currentNodeVal", "currentNodeInSearch", "currentNode", function() {
		$("#currentNode").addClass("margin-left30");
		transferEffect("#declCurrNodeNdQNode", "#currentNode", function() {
			$('#currentNodeVal').text($('#firstVal').text());
			fromEffectWithTweenMax('#firstNodeVal', '#currentNodeVal', false, function() {
				if ($('#currentNodeVal').text() != "NULL") {
					$("#line17").remove();
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#currentNode", "#dataDiv1", "#svgId", "line17", "arrow");
				}
				declareNodesWhenFunctionCall("qNode", "qNodeVal", "qNodeInSearch", "q", function() {
					$("#qNode").addClass("margin-left30");
					transferEffect("#declCurrNodeNdQNode", "#qNode", function() {
						$('#qNodeVal').text($('#firstVal').text());
						fromEffectWithTweenMax('#firstNodeVal', '#qNodeVal', false, function() {
							if ($('#currentNodeVal').text() != "NULL") {
								$("#line18").remove();
								svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#qNode", "#dataDiv1", "#svgId", "line18", "arrow");
							}
							appendNextBtn('declareCountText');
						});
					});
				});
			});
		});
	});
}

function declareCountText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#declCurrNodeNdQNode", "#decCount", function() {
		text ='An int variable <span class="ct-code-b-yellow">count</span> is declared and initialized with <span class="ct-code-b-yellow">0</span>.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('declareCountAnimaion');
		});
	});
}

function declareCountAnimaion() {
	$(".introjs-duplicate-nextbutton").remove();
	transferEffect("#decCount", "#countValDec", function() {
		count = 0;
		$("#countVal").text(0);
		zoomInEffect("#countVal", function() {
			appendNextBtn('checkIfCurrentNodeEqToNullOrNotText');
		});
	});	
}

function checkIfCurrentNodeEqToNullOrNotText() {
	arrow("#decCount", "#crntNtEqNull", function() {
		$(".introjs-duplicate-nextbutton").remove();
		ifConditionText('currentNode', '==', 'NULL', function() {
			fromEffectWithTweenMax("#crntNtEqNull", "#ifCondition", true, function() {
				nextBtnWithoutCall(function() {
					flipTheCon("#first", $("#firstVal").text(), "NULL")
				});
			});
		});
	});
}

function returnCountValueText(checkText) {
	$(".introjs-duplicate-nextbutton").remove();
	if (checkText == "returnCountValue1") {
		arrow("#crntNtEqNull", "#rtnCountIfNull", function() {
			returnCountValueTypingText();
		});
 	} else if (checkText == "returnCountValue2") {
 		arrow("#whileLoopCkeck", "#returnCountIfNotNull", function() {
			returnCountValueTypingText();
		});
 	} else {
 		arrow("#ifkeyNtEqNull", "#returnzero", function() {
			returnCountValueTypingText();
		});
 	}
}

function returnCountValueTypingText() {
	text = 'The <span class="ct-code-b-yellow">searchPosOfEle()</span> function returns the <span class="ct-code-b-yellow">count</span> value (i.e.,'
			+ ' <span class="ct-code-b-yellow">'+ count +'</span>).';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#callToSearchMethod', 'returnCountVal');
		$('.introjs-nextbutton').show();
	});
}

function incrementCountText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#crntNtEqNull", "#countInc", function() {
		text = 'Now, the <span class="ct-code-b-yellow">count</span> value is <span class="ct-code-b-yellow">' + count +'</span> and it will be'
				+ ' increment by <span class="ct-code-b-yellow">one</span> (i.e., <span class="ct-code-b-yellow">' + (count + 1) + '</span>).';
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCall(function() {
				$("#countVal").parent().effect( "highlight",{color: 'blue'}, 500);
				count++;
				flipEffectWithTweenMax("#countVal", count, function() {
					appendNextBtn('assgnToQtoCrrNodeText');
				});
			});
		});
	});
}

function assgnToQtoCrrNodeText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#countInc", "#assgnToQtoCrrNode", function() {
		text = 'The <span class="ct-code-b-yellow">currentNode</span> value <span class="ct-code-b-yellow">'
				+ $('#currentNodeVal').text() +'</span> is stored in <span class="ct-code-b-yellow">q</span>.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('assgnToQtoCrrNodeAnimation');
		});
	});
}

function assgnToQtoCrrNodeAnimation() {
	var node;
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax('#currentNodeVal', '#qNodeVal', false, function() {
		if ($("#next1").text() == $("#firstVal").text()) {
			node = $("#dataDiv1");
		} else {
			node = $("#dataDiv" + searchCount);
		}
		$("#line18").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#qNode", node, "#svgId", "line18", "arrow", function() {
			appendNextBtn('ifkeyNtEqNullText');
		});
	});
}

function ifkeyNtEqNullText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#assgnToQtoCrrNode", "#ifkeyNtEqNull", function() {
		text = 'Now check the condition : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
				+ '<span id="firstCond" class="position"><span id="currNext" class="position">currentNode -> next</span> == '
				+ '<span id="fstVal" class="position">first</span></span>'
				+ ' && <span id="secondCon" class="position"><span id="currData" class="position">currentNode -> data</span>'
				+ ' != <span id="keyVal" class="position">key</span></span> </span>'
				+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedText"></div>';
		$('.introjs-tooltiptext').text("").append(text);
		$('.introjs-tooltip').removeClass('hide');
		fromEffectWithTweenMax("#ifkeyNtEqNull", "#ifCondition", true, function() {
			nextBtnWithoutCall(function() {
				ifConditionForGivenElemetFoundOrNot("#next" + (searchCount), "#firstVal", "#data" 
					+ (searchCount), "#opVal", ($("#next" + (searchCount)).text() == $("#firstVal").text()) 
						, ($("#data" + searchCount).text() != $("#opVal").text()), "ifCondition");
			});
		});
	});
}

function ifConditionForGivenElemetFoundOrNot(selector1, first, selector2, key, firstCon, secondCon, checkNextStep) {
	$(".introjs-duplicate-nextbutton").remove();
	var currentNext = $(selector1).text();
	var first = $(first).text();
	var currentData = $(selector2).text();
	var key = $(key).text();
	flipEffectWithTweenMax("#currNext", currentNext, function() {
		flipEffectWithTweenMax("#fstVal", first, function() {
			if (firstCon) {
				flipEffectWithTweenMax("#currData", currentData, function() {
					flipEffectWithTweenMax("#keyVal", key, function() {
						conditionMessage(secondCon, function() {
							if (secondCon) { 
								if (checkNextStep == "ifCondition") {
									count = 0;
									nextBtnWithoutCall(function() {
										returnCountValueText("returnZero");
									});
								} else {
									searchCount++;
									appendNextBtn('incrementCountText');
								}
							} else {
								if (checkNextStep == "ifCondition") {
									appendNextBtn('currToCurrNodeNextText');
								} else {
									nextBtnWithoutCall(function() {
										returnCountValueText("returnCountValue2");
									});
								}
							}
						});
					});
				});
			} else {
				$("#trueOrFalse").text("====> False").addClass("red-color");
				text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ firstCon +'</span>. So no need '
						+ ' to check the <span class="ct-code-b-yellow">currentNode->data != key</span> condition.';
				typing("#appnedText", text, function() {
					appendNextBtn('currToCurrNodeNextText');
				});
			}
		});
	}); 
} 

function currToCurrNodeNextText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#ifkeyNtEqNull", "#currToCurrNodeNext", function() {
		text = 'The <span class="ct-code-b-yellow">currentNode -> next</span> value <span class="ct-code-b-yellow">'
				+ $("#next" + searchCount).text() + '</span> is stored in <span class="ct-code-b-yellow">currentNode</span>.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('currToCurrNodeNextAnimation');
		});
	});
} 

function currToCurrNodeNextAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax('#next' + count, '#currentNodeVal', false, function() {
		if ($("#next1").text() == $("#firstVal").text() || $("#next" + count).text() == $("#firstVal").text()) {
			node = $("#dataDiv1");
		} else {
			node = $("#dataDiv" + (count + 1));
		}
		$("#line17").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#currentNode", node, "#svgId", "line17", "arrow", function() {
			appendNextBtn('whileLoopCkeckText');
		});
	});
}

function whileLoopCkeckText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#currToCurrNodeNext", "#whileLoopCkeck", function() {
		text = 'Now check the while condition : <br/>&nbsp;<span id="whileCondition" class="opacity00 ct-code-b-yellow position">'
			+ '<span id="firstCond" class="position"><span id="currNext" class="position">q -> next</span> != '
			+ '<span id="fstVal" class="position">first</span></span>'
			+ ' && <span id="secondCon" class="position"><span id="currData" class="position">q -> data</span>'
			+ ' != <span id="keyVal" class="position">key</span></span> </span>'
			+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedText"></div>';
		$('.introjs-tooltiptext').text("").append(text);
		$('.introjs-tooltip').removeClass('hide');
		fromEffectWithTweenMax("#whileLoopCkeck", "#whileCondition",true, function() {
			nextBtnWithoutCall(function() {
				ifConditionForGivenElemetFoundOrNot("#next" + searchCount, "#firstVal", "#data" 
						+ searchCount, "#opVal", ($("#next" + searchCount) != $("#firstVal").text()) 
						, ($("#data" + searchCount).text() != $("#opVal").text()), "whileLoop");
			});
		});
	});
}//end search method

function storeAddAndData() {	//addMethod, begin & end
	$(".introjs-duplicate-nextbutton").remove();
	$('#tempNodeVal').text($('#tmpNdeVal').text());
	fromEffectWithTweenMax('#tmpNdeVal', '#tempNodeVal', false, function() {
		$("#line12").remove();
		if ($('#insertAtBegin').hasClass('insert-begin')) {
			svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animatinDiv", "#tempNode div:first", "#dataDiv"+ (nodeCount - 1), 
					"#svgId", "line12", "arrow", function() {
				$("#tmpNde, #line21").remove();
				appendNextBtn('storeXValText');
			});
		} else {
			svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv"+ (nodeCount - 1), 
					"#svgId", "line12", "arrow", function() {
				$("#tmpNde, #line21").remove();
				appendNextBtn('storeXValText');
			});
		}
	});
}

function storeXValText() {
	$(".introjs-duplicate-nextbutton").remove();
	$('.introjs-tooltip').removeClass('hide');
	text = 'The <span class="ct-code-b-yellow">x</span> value (<span class="ct-code-b-yellow">' + $("#xValInAdd").text()
			+ '</span>) is stored in <span class="ct-code-b-yellow">data</span> member of <span class="ct-code-b-yellow">temp</span> node.'
	typing('.introjs-tooltiptext', text, function() {
		arrow("#callTocreateMethod", "#stroreXValInTmpDt", function() {
			appendNextBtn('storeXValAnim');
		});
	});
}

function storeXValAnim() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#data" + (nodeCount - 1)).text($("#xValInAdd").text());
	fromEffectWithTweenMax("#xValInAdd", "#data" + (nodeCount - 1), false, function() {
		if (buttonName == 'insertAtPosition') {
			appendNextBtn('ifCondPosTo1');
		} else {
			appendNextBtn('ifConText');
		}
	});
}

function ifConText() {
	$(".introjs-duplicate-nextbutton").remove();
	if (buttonName == 'insertAtPosition') {
		arrow('#ifPosEqlTo1', '#ifFstEqNull');
	} else {
		arrow("#stroreXValInTmpDt", "#ifFstEqNull");
	}
	ifConditionText('first', '==', 'NULL', function() {
		fromEffectWithTweenMax("#ifFstEqNull", "#ifCondition", true, function() {
			nextBtnWithoutCall(function() {
				flipTheCon("#first", $("#firstVal").text(), "NULL")
			});
		});
	});
}

function flipTheCon(selector1, value1, value2) {
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax(selector1, value1, function() {
		var con = value1 == value2 ;
		conditionMessage(con, function() {
			if (buttonName == "traverseList") {
				if (con) {
					printfCount = 8;
					introNextSteps("#printf8", "travrsePrntng");
				} else {
					printfCount = 9;
					introNextSteps("#printf9", "travrseLstPrntng");
				}
				$('.introjs-nextbutton').show();
			} else if (buttonName == "count") {
				if (con) {
					appendNextBtn('cntIfRetnSm');
				} else {
					$('#animatinDiv').removeClass('z-index1000000');
					lastnodeCount = nodeCount = 1;
					appendNextBtn('cntSumIncTxt');
				}
			} else if (buttonName == "search") { 
				if (con) {
					if(value2 != "NULL") {
						printfCount = 2;
						introNextSteps("#printf2",'elementNotFound');
						$('.introjs-nextbutton').show();
					} else {
						nextBtnWithoutCall(function() {
							returnCountValueText("returnCountValue1");
						});
					}
				} else {
					if(value2 != "NULL") {
						printfCount = 3;
						introNextSteps("#printf3", 'elementFound');
						$('.introjs-nextbutton').show();
					} else {
						appendNextBtn('incrementCountText');
					}
				}
			} else if (buttonName == "deleteAtEnd" || buttonName == "deleteAtBegin" || buttonName == "deleteAtPosition") {
				if (con) {
					printfCount = 1;
					introNextSteps("#printf1",'deletetionNotPossible');
					$('.introjs-nextbutton').show();
				} else {
					if (buttonName == "deleteAtPosition") {
						printfCount = 2;
						introNextSteps("#printf2",'printPosText');
					} else {
						introNextSteps("#callToDeleteAtEndMethod",'storeReturnValToFirst');
					}
					$('.introjs-nextbutton').show();
				}
			} else {
				appendNextBtn('ifConTrueOrFalseState');
			}
		});
	});
}

function ifConTrueOrFalseState() {
	$(".introjs-duplicate-nextbutton").remove();
	var con = $("#firstVal").text() == "NULL";
	if (con) {
		arrow("#ifFstEqNull", "#streTmpToFst", function() {
			text = 'Here, the <span class="ct-code-b-yellow">temp</span> value <span class="ct-code-b-yellow">'
					+ $("#tempNodeVal").text() + '</span> is stored in <span class="ct-code-b-yellow">first</span> node.';
			typing('.introjs-tooltiptext' , text, function() {
				appendNextBtn('streTmpValInFst');
			});
		});
	} else {
		whileConText("afterIf");
	}
}

function whileConText(chech) {
	var selector1;
	$(".introjs-duplicate-nextbutton").remove();
	if (chech == "afterIf") {
		arrow("#ifFstEqNull", "#whileLstNxtNeqFst", function() {
			selector1 = "#whileLstNxtNeqFst";
			whileCondTypingText(selector1);
		});
	} else if (chech == "deleteAtEnd") { 
		if (lastnodeCount == 1) {
			arrow("#iflstNtEqFst", "#whileLstNotEqFst", function() {
				selector1 = "#whileLstNotEqFst";
				whileCondTypingText(selector1);
			});
		} else {
			arrow("#assnlstToPrev", "#whileLstNotEqFst", function() {
				selector1 = "#whileLstNotEqFst";
				whileCondTypingText(selector1);
			});
		}
	} else {
		selector1 = "#whileLstNxtNeqFst";
		arrow("#streLstNxtToLst", "#whileLstNxtNeqFst", function() {
			whileCondTypingText(selector1);
		});
	}
}

function whileCondTypingText(selector1) {
	text = 'Now check the condition : <br/>&nbsp;<span id="whileCondition" class="opacity00 ct-code-b-yellow position">'
		+'<span id="whileLstNxtVal" class="position">lastNode -> next</span> != <span id="whileFstVal" class="position">first</span></span>'
		+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	fromEffectWithTweenMax(selector1, "#whileCondition", true, function() {
		appendNextBtn('whileConditionAnimation');
	});
}
function whileConditionAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	flipEffectWithTweenMax("#whileFstVal", $("#firstNodeVal").text(), function() {
		flipEffectWithTweenMax("#whileLstNxtVal", $("#next" + lastnodeCount).text(), function() {
			var con = $("#next" + lastnodeCount).text() != $("#firstNodeVal").text();
			conditionMessage(con, function() {
				if (buttonName == "addNodes" || buttonName == "insertAtEnd" ||
						buttonName == 'insertAtBegin' || buttonName == 'insertAtPosition') {
					appendNextBtn('whileConTrueOrFalseState');
				} else if (buttonName == "traverseList") {
					if (con) {
						nodeCount++;
						appendNextBtn('printTempData');
					} else {
						$('#animatinDiv').removeClass('z-index1000000');
						appendNextBtn('prntNxtLne');
					}
				} else if (buttonName == "count") {
					if (con) {
						nodeCount++;
						lastnodeCount++;
						appendNextBtn('cntSumIncTxt');
					} else {
						appendNextBtn('cntIfRetnSm');
					}
				} else if (buttonName == "deleteAtEnd") {
					appendNextBtn('assnlstToPrev');
				} else if (buttonName == "deleteAtBegin" || buttonName == "deleteAtPosition") {
					appendNextBtn('whileConTrueOrFalseState');
				}
			});
		});
	});
}

function assnlstToPrev() { //poorna
	$(".introjs-duplicate-nextbutton").remove();
	var selector1, selector2;
	var con = $("#next" + lastnodeCount).text() != $("#firstNodeVal").text();
	if (con) {
		if (buttonName == "deleteAtPosition") {
			arrow("#ifLastNodeNextEqFirst", "#prevEqLastNode");
			selector1 = 'prev';
			selector2 = 'lastNode';
		} else {
			arrow("#whileLstNotEqFst", "#assnlstToPrev");
			selector1 = 'lastNode';
			selector2 = 'prev';
		}
		text = 'The <span class="ct-code-b-yellow">' + selector1 + '</span> value <span class="ct-code-b-yellow">'
				+ $("#lastNodeVal").text() +'</span> is stored in <span class="ct-code-b-yellow">' + selector2 + '</span>.';
		typing('.introjs-tooltiptext' , text, function() {
			if (buttonName == 'deleteAtPosition') {
				appendNextBtn("assnPrevToLstAnimation");
			} else {
				appendNextBtn("assnlstToPrevAnimation");
			}
		});
	} else {
		appendNextBtn('assnFstToPrevNxt');
	}
}

function assnFstToPrevNxt() {
	$(".introjs-duplicate-nextbutton").remove();
	var selector1, selector2;
	if (buttonName == "deleteAtBegin") {
		selector1 = "lastNode -> next";
		selector2 = "whileLstNotEqFst"
	} else if (buttonName == "deleteAtPosition") {
		selector1 = "lastNode -> next";
		if ($("#posVal").text() == 1) {
			selector2 = "assnLstNxtTolst"
		} else {
			selector2 = "whileLstNotEqFst"
		}
	} else {
		selector2 = "whileLstNotEqFst"
		selector1 = "prev -> next";
	}
	arrow("#" + selector2, "#assnFstToPrevNxt");
	text = 'The <span class="ct-code-b-yellow">first</span> value <span class="ct-code-b-yellow">'
		+ $("#firstNodeVal").text() +'</span> is stored in <span class="ct-code-b-yellow">'+ selector1 +'</span>.';
	typing('.introjs-tooltiptext' , text, function() {
		appendNextBtn("assnFstToPrevNxtAnimation");
	});
}

function assnFstToPrevNxtAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	var value;
	if (buttonName == "deleteAtBegin") {
		value = lastnodeCount;
	} else if (buttonName == "deleteAtPosition") {
		if ($("#posVal").text() == 1) {
			value = lastnodeCount;	
		} else {
			value = preCount;
		}
	} else {
		value = lastnodeCount - 1;
	} 
	fadeInBounceEffectWithTimelineMax("#firstNodeVal", $("#next" + value), false, function() {
		$("#line" + value).remove();
		if (buttonName == "deleteAtBegin") {
			svgCurve("#nextDiv" + value, "#dataDiv2");
		} else if (buttonName == "deleteAtPosition") {
			if ($("#posVal").text() == 1) {
				svgCurve("#nextDiv" + value, "#dataDiv2");
			} else {
				svgCurve("#nextDiv" + value, "#dataDiv1");
			}
		} else {
			svgCurve("#nextDiv" + value, "#dataDiv1");
		}
		appendNextBtn("printDeletedElement");
	});
}

function assnPrevToLstAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#lastNodeVal").text($("#prevNodeVal").text());
	fromEffectWithTweenMax("#prevNodeVal", "#lastNodeVal", false, function() {
		$("#line10").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", "#dataDiv"+ (lastnodeCount), "#svgId", "line10",
			"arrow", function() {
			preCount = lastnodeCount;
			appendNextBtn("whileConTrueOrFalseState");
	    });     
	});
}

function assnlstToPrevAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$("#prevNodeVal").text($("#lastNodeVal").text());
	fromEffectWithTweenMax("#lastNodeVal", "#prevNodeVal", false, function() {
		$("#line17").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#prevNode", "#dataDiv"+ (lastnodeCount), "#svgId", "line17",
			"arrow", function() {
			preCount = lastnodeCount;
			appendNextBtn("whileConTrueOrFalseState");
	    });     
	});
}

function whileConTrueOrFalseState() {
	$(".introjs-duplicate-nextbutton").remove();
	var selector1 = "lastNode", coutDiv;
	coutDiv = lastnodeCount;
	var con = $("#next" + coutDiv).text() != $("#firstNodeVal").text();
	if (con) {
		if (buttonName == "deleteAtBegin") {
			arrow("#whileLstNotEqFst", "#assnlstToPrev");
		} else if (buttonName == "deleteAtEnd") {
			arrow("#assnlstToPrev", "#assnLstNxtTolst");
		} else if (buttonName == "deleteAtPosition") { 
			if ($("#posVal").text() != 1) {
				selector1 = "prev";
				arrow("#prevEqLastNode", "#lstNodeEqLstNxt");
			} else {
				selector1 = "lastNode";
				arrow("#whileLstNotEqFst", "#assnlstToPrev");
			}
		} else {
			arrow("#whileLstNxtNeqFst", "#streLstNxtToLst");
		}
		text = 'The <span class="ct-code-b-yellow">'+ selector1 +' -> next</span> value <span class="ct-code-b-yellow">'
				+ $("#next" + coutDiv).text() + '</span> is stored in <span class="ct-code-b-yellow">'+ selector1 +'</span> node.';
		typing('.introjs-tooltiptext' , text, function() {
			appendNextBtn('lstNxtToLst');
		});
	} else {
		if (buttonName == "deleteAtBegin" || buttonName == "deleteAtPosition" ) { 
			assnLstNxtTolst();
		} else if (buttonName == 'insertAtBegin' || buttonName == 'insertAtPosition') {
			arrow('#whileLstNxtNeqFst', '#streFstToTmpNxt2', function() {
				frstToTmpNxtTxt();
			});
		} else {
			tempToLastNextText();
		}
	}
}

function assnLstNxtTolst() {
	var selector1;
	$(".introjs-duplicate-nextbutton").remove();
	if (buttonName == "deleteAtPosition") {
		if ($("#posVal").text() == 1) {
			selector2 = "prev -> next";
			selector1 = "#assnLstNxtTolst"; 
		}
	} else  {
		selector2 = "prev -> next";
		selector1 = "#assnLstNxtTolst"
	}
	arrow("#whileLstNotEqFst", selector1, function() {
		text = 'The <span class="ct-code-b-yellow">'+ selector2 +'</span> value <span class="ct-code-b-yellow">'
				+$("#next1").text() +'</span> is stored in <span class="ct-code-b-yellow">first</span> node.';
		typing('.introjs-tooltiptext' , text, function() {
			appendNextBtn('assnLstNxtTolstAnimation');
		});
	});
}

function assnLstNxtTolstAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax("#next1", "#firstNodeVal", false, function() {
		$("#line16").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode",
				"#dataDiv2", "#svgId", "line16", "arrow", function() {
			appendNextBtn('assnFstToPrevNxt');
		});
	})
}


function lstNxtToLst() {
	var selector1, countDiv, line;
	lastnodeCount++;
	countDiv = (lastnodeCount - 1);
	if (buttonName == 'deleteAtPosition' && i < $("#nodeVal" + (outPutCount - 1)).val()) {
		selector1 = 'prevNode';
		line = "line17"
	} else {
		selector1 = "lastNode";
		line = "line10"
	}
	$(".introjs-duplicate-nextbutton").remove();
	$("#"+ selector1 +"Val").parent().effect( "highlight",{color: 'blue'}, 500);
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#" + selector1, "#dataDiv"+ countDiv, "#svgId", "line21",
			"arrow", function() {
		$('#line21').remove();
		$("#next" + countDiv).parent().effect( "highlight",{color: 'blue'}, 500);
		fadeInBounceEffectWithTimelineMax('#next' + countDiv, '#'+ selector1 +'Val', false, function() {
			$("#" + line).remove()
			svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#" + selector1, "#dataDiv"+ (countDiv + 1), "#svgId",
					line, "arrow", function() {
				if (buttonName == "deleteAtEnd" || buttonName == "deleteAtBegin") {
					nextBtnWithoutCall(function() {
						whileConText("deleteAtEnd")
					});
				} else if (buttonName == "deleteAtPosition") { 
					if ($("#posVal").text() != 1) {
						appendNextBtn("incrementIValue");
					} else {
						nextBtnWithoutCall(function() {
							whileConText("deleteAtEnd")
						});
					}
				} else if (iVal < (count - 1)) {
					appendNextBtn('iIncrementing');
				} else {
					appendNextBtn('whileConText');
				}
			});
		})
	});
}


function incrementIValue() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#lstNodeEqLstNxt", "#forLoop"); 
	text = 'Now increment the <span class="ct-code-b-yellow">i</span> value by <span class="ct-code-b-yellow">one</span>.'
	typing('.introjs-tooltiptext' , text, function() {
		i++;
		flipEffectWithTweenMax("#countVal", i, function() {
			appendNextBtn("iConText");
		});	
	});
}

function prevNxtEqLstNextText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#forLoop", "#prevNxtEqLstNext");
	text = 'The <span class="ct-code-b-yellow">prev -> next</span> value <span class="ct-code-b-yellow">'
			+ $("#next" + lastnodeCount).text() +'</span> is stored in <span class="ct-code-b-yellow">lastNode -> next</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-duplicate-nextbutton").remove();
		appendNextBtn('prevNxtEqLstNextTextAnimation');
	});
}

function prevNxtEqLstNextTextAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#prevNode", "#dataDiv" 
		+ lastnodeCount,"#svgId","line50", "arrow", function() {
		$("#line50").remove();
		fadeInBounceEffectWithTimelineMax("#next" + lastnodeCount, "#next" + preCount, false, function() {
			$("#line" + (lastnodeCount - 1) + ", #line" + (lastnodeCount)).remove();
			appendNextBtn("printDeletedElement");
		});
	});
}

function tempToLastNextText() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#whileLstNxtNeqFst", "#streTmpToLstNxt", function() {
		text = 'The <span class="ct-code-b-yellow">temp</span> value <span class="ct-code-b-yellow">'
			+ $("#tempNodeVal").text() + '</span> is stored in <span class="ct-code-b-yellow">lastNode -> next</span> node.';
		typing('.introjs-tooltiptext' , text, function() {
			appendNextBtn('tempToLastNextAnimation');
		});
	});
}

function tempToLastNextAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", "#dataDiv"+ (lastnodeCount), "#svgId",
			"line20", "arrow", function() {
		$("#line20").remove();
		$("#next" + lastnodeCount).parent().effect( "highlight",{color: 'blue'}, 500);
		fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#next'+(lastnodeCount), false, function() {
			$("polyline").remove();
			if ($('.nodes').length < 5) {
				svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", "#nextDiv" + (lastnodeCount), "#dataDiv"
						+ (lastnodeCount + 1), "#svgId", "line" + lineCount, "arrow");
			} else if ($('.nodes').length > 5) {
				svgAnimatingLineSelector1LeftSideToSelector2RightSide("#animatinDiv", "#dataDiv" + (lastnodeCount), "#nextDiv"
						+ (lastnodeCount + 1), "#svgId", "line" + lineCount, "arrow");
			} else {
				svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animatinDiv", "#dataDiv" + (lastnodeCount), "#nextDiv"
						+ (lastnodeCount + 1), "#svgId", "line" +lineCount, "arrow");
			}
			$('#line' + lineCount).attr('class', 'svg-line lines line');
			lineCount++;
			appendNextBtn('tmpToTmpNxt');
		});
	});
}


function streTmpValInFst() {
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#firstNodeVal', false, function(){
		$("#line13").remove();
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv"+ (nodeCount - 1), "#svgId", 
				"line13", "arrow", function() {
			appendNextBtn('tmpToTmpNxt');	
		});
	});
}

function tmpToTmpNxt() {
	$(".introjs-duplicate-nextbutton").remove();
	if (buttonName == 'insertAtBegin' || buttonName == 'insertAtPosition') {
		arrow('#streTmpToFst', '#streFstToTmpNxt1', function() {
			frstToTmpNxtTxt();
		});
	} else {
		arrow('#streTmpToFst', '#streFstToTmpNxt', function() {
			frstToTmpNxtTxt();
		});
	}
}

function frstToTmpNxtTxt() {
	text = 'The <span class="ct-code-b-yellow">first</span> value <span class="ct-code-b-yellow">' + $('#firstNodeVal').text() 
			+'</span> is stored in <span class="ct-code-b-yellow">next</span> member of <span class="ct-code-b-yellow">temp</span> node.';
	typing('.introjs-tooltiptext' , text, function() {
		if ($('#insertAtBegin').hasClass('insert-begin')) {
			printfCount = 1;
			appendNextBtn('bgnFrstToTmpNxt');
		} else {
			appendNextBtn('tmpToTmpNxtAnim');
		}
	});
}

function tmpToTmpNxtAnim() {
	$(".introjs-duplicate-nextbutton").remove();
	$('#tempNodeVal').parent().effect('highlight', {color: 'blue'}, 500, function() {
		svgAnimatingLineSelector1TopSideToSelector2BottomSide('#animatinDiv', '#tempNode', "#dataDiv"+ (nodeCount - 1), '#svgId', 'line45',
					'arrow', function() {
			$('#line45').remove();
			$("#nextDiv"+ (nodeCount - 1)).effect('highlight', {color: 'blue'}, 500, function() {
				fadeInBounceEffectWithTimelineMax('#firstNodeVal', '#next' + (nodeCount - 1), false, function() {
					svgCurve("#nextDiv" + (nodeCount - 1), "#dataDiv1");
					if ((buttonName == 'insertAtBegin' && $('#firstVal').text() == 'NULL') || buttonName == 'insertAtPosition') {
						nextBtnWithoutCall(function() {
							$('#animatinDiv').removeClass('z-index1000000');
							arrow('#streFstToTmpNxt1', '#retrnFst', function() {
								retnFrstTxt();
							});
						});
					} else {
						appendNextBtn('returnFirstText');
					}
				});
			});
		});
	});
}


function returnFirstText() {
	$(".introjs-duplicate-nextbutton").remove();
	$('#animatinDiv').removeClass('z-index1000000');
	arrow('#streFstToTmpNxt','#retrnFst', function() {
		retnFrstTxt();
	});
}

function retnFrstTxt() {
	text = 'The <span class="ct-code-b-yellow">return</span> statement returns the <span class="ct-code-b-yellow">address</span> (i.e.,'
			+ ' <span class="ct-code-b-yellow">' + $("#firstNodeVal").text() +'</span>) is stored in <span class="ct-code-b-yellow">first</span>.';
	typing('.introjs-tooltiptext' , text, function() {
		if (buttonName == 'addNodes') {
			introNextSteps('#addNodeMethod','returnFirstVal');
		} else if (buttonName == 'insertAtPosition') {
			introNextSteps('#calToInsrtAtPosMthd','returnFirstVal');
		} else {//insertAtEnd & begin
			introNextSteps('#calToInsrtBgnEndMthd','returnFirstVal');
		}
		$('.introjs-nextbutton').show();
	});	
}

function displayNodeDataAndNext() {
	$(".introjs-duplicate-nextbutton").remove();
	transferEffect('#mallocMemoryAllocation', '#node'+(nodeCount - 1), function() {
		nextBtnWithoutCall(function() {
			text = 'Now, the <span class="ct-code-b-yellow">address</span> (i.e. <span class="ct-code-b-yellow">'
					+ $("#dataAddress" + (nodeCount - 1)).text() +')</span> of the memory is allocated by the <span class="ct-code-b-yellow">'
					+ 'malloc()</span> method, and it is stored in <span class="ct-code-b-yellow">temp</span> node.';
			typing('.introjs-tooltiptext' , text, function() {
				nextBtnWithoutCall(function() {
					$("#tmpNdeVal").text($("#dataAddress" + (nodeCount - 1)).text());
					fromEffectWithTweenMax("#dataAddress" + (nodeCount - 1), "#tmpNdeVal", false, function() {
						$("#line11").remove();
						if ($('#insertAtBegin').hasClass('insert-begin')) {
							svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animatinDiv", "#tmpNde div:first", "#dataDiv"+ (nodeCount - 1),
									"#svgId", "line21", "arrow", function() {
								introNextSteps("#asgnToNlToTmp");
								$('.introjs-nextbutton').show();
							});
						} else {
							svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tmpNde", "#dataDiv"+ (nodeCount - 1),
									"#svgId", "line21", "arrow", function() {
								introNextSteps("#asgnToNlToTmp");
								$('.introjs-nextbutton').show();
							});
						}
					});
				});
			});
		});
	});	
}

function insrtngNodesTxt() {//Add, insertBegn, end
	$('.introjs-tooltip').removeClass('hide');//change
	text = 'The <span class="ct-code-b-yellow">first</span> node and <span class="ct-code-b-yellow">x</span> variable are initialized'
			+ ' with the address passed by the <span class="ct-code-b-yellow">' + buttonName + '()</span> method.<br> i.e., '
			+ '<span class="ct-code-b-yellow">' + buttonName + '('+ $("#firstVal").text() + ', '+ $('#xValInMain').text() +')</span>.';
	typing('.introjs-tooltiptext', text, function() {
		$('#animatinDiv').addClass('z-index1000000');
		appendNextBtn('addNodePassedValuesInize');
	});
}

function addNodePassedValuesInize() {
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introcode.refresh();
		setTimeout(function() {
			transferEffect("#decFstVar", "#firstNode", function() {
				$('#firstNodeVal').text($('#firstVal').text());
				fromEffectWithTweenMax('#firstVal', '#firstNodeVal', false, function() {
					if ($('#firstNodeVal').text() != "NULL") {
						$("#line16").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv" + lastnodeCount,
								"#svgId", "line16", "arrow");
					}
					$("#subVal").text("(" + buttonName + ")")
					transferEffect("#decXVal", "#xValDecInAdd", function() {
						$('#xValInAdd').text($('#xValInMain').text());
						fromEffectWithTweenMax('#xValInMain', '#xValInAdd', false, function() {
							appendNextBtn('initTempAndLastNodeText');
						});
					});
				});
			});
		},800);
	});
}

function initTempAndLastNodeText() {
	$('.introjs-duplicate-nextbutton').remove();
	if (buttonName == 'insertAtBegin') {
		arrow('#insrtBgnDec', '#decTmpNdLstNd', function() {
			tempAndLstNodeInitTxt();
		});
	} else if (buttonName == 'insertAtPosition') {
		arrow('#insrtPosDec', '#decTmpNdLstNd', function() {
			tempAndLstNodeInitTxt();
		});
	} else {
		arrow("#addMethodDec", "#decTmpNdLstNd", function() {
			tempAndLstNodeInitTxt();
		});
	}
}

function tempAndLstNodeInitTxt() {
	text = 'Here, we declared two nodes <span class="ct-code-b-yellow">temp</span> and <span class="ct-code-b-yellow">lastNode</span>, and the'
		+ ' <span class="ct-code-b-yellow">lastNode</span> is initialized with the <span class="ct-code-b-yellow">first</span> value (i.e., '
		+ '<span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>). ';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('initTempAndLastNodeAnim');
	});
}

function initTempAndLastNodeAnim() {
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("tempNode", "tempNodeVal", "tempNodeInAddMtd", "temp<sub>" + buttonName + "</sub>", function() {
		declareNodesWhenFunctionCall("lastNode", "lastNodeVal", "lastNodeInAddMtd", "lastNode", function() {
			$("#tempNode, #lastNode").addClass("margin-left30");
			transferEffect("#decTmpNdLstNd", "#tempNode", function() {
				transferEffect("#decTmpNdLstNd", "#lastNode", function() {
					$("#firstNodeVal").parent().effect( "highlight",{color: 'blue'}, 500);
					$('#lastNodeVal').text($('#firstNodeVal').text());
					fromEffectWithTweenMax('#firstNodeVal', '#lastNodeVal', false, function() {
						if ($('#lastNodeVal').text() != "NULL") {
							$("#line10").remove();
							svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#lastNode", "#dataDiv"+ (lastnodeCount), 
									"#svgId", "line10", "arrow");
						}
						if (buttonName == "insertAtPosition") {
							appendNextBtn('intIDec');
						} else {
							appendNextBtn('callToCreateMethod');
						}
					});
				}); 
			});
		});
	});
}

function callToCreateMethod() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').removeClass('hide');
	arrow("#decTmpNdLstNd", "#callTocreateMethod", function() {
		callToCreateMethodText();
	});
}//end addMethod

function callToCreateMethodText() {
	text = 'Here, we are calling <span class="ct-code-b-yellow">createNode()</span> method and the return value is stored in'
			+ '<span class="ct-code-b-yellow">temp</span> node.';
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps("#csllOperations", '', 'right');
		$('.introjs-nextbutton').show();
	});
}

//Traverse
function travrsePassedValInit() {//traverse & count
	$('#animatinDiv').addClass('z-index1000000');
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInTrvrsMtd", "first<sub>" + buttonName + "</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introcode.refresh();
		setTimeout(function() {
			transferEffect("#decFstVar", "#firstNode", function() {
				fadeInFromEffectWithTimelineMax("#firstVal", "#firstNodeVal", true, function() {
					if ($('#firstNodeVal').text() != "NULL") {
						$("#line26").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv1", "#svgId", "line26",
								"arrow", function() {
							appendNextBtn('initTempToFrstText');
						});
					} else {
						appendNextBtn('initTempToFrstText');
					}
				});
			});
		}, 500);
	});
}

function initTempToFrstText() {//traverse & count
	$('.introjs-duplicate-nextbutton').remove();
	if (buttonName == "traverseList") {
		arrow("#trvrseLstMtdDec", "#travrsrTmpDec", function() {
			travrseCntText();
		});
	} else {
		arrow("#cntMtdDec", "#travrsrTmpDec", function() {
			travrseCntText();
		});
	}
}

function travrseCntText() {//traverse & count
	text = 'Here, we declared a <span class="ct-code-b-yellow">temp</span> node and initialized with <span class="ct-code-b-yellow">first'
			+ '</span> value (i.e., <span class="ct-code-b-yellow">'+ $("#firstVal").text() +'</span>).';
	typing('.introjs-tooltiptext', text, function() {
		appendNextBtn('initTempToFrstAnim');
	});
}

function initTempToFrstAnim() {//traverse & count
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("tempNode", "tempNodeVal", "tempNodeInTrvrsMtd", "temp<sub>" + buttonName + "</sub>", function() {
		$("#tempNode").addClass("margin-left30");
		transferEffect("#travrsrTmpDec", "#tempNode", function() {
			fadeInFromEffectWithTimelineMax("#firstNodeVal", "#tempNodeVal", true, function() {
				if ($('#tempNodeVal').text() != "NULL") {
					$("#line30").remove();
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv"
							+ (lastnodeCount), "#svgId", "line30", "arrow");
				}
				if (buttonName == "traverseList") {	
					appendNextBtn('doLoopText');
				} else {
					appendNextBtn('cntSumInit');
				}
			});
		});
	});
}

function doLoopText() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow("#travrsrTmpDec", "#doLoop", function() {
		text = 'The <span class="ct-code-b-yellow">do-while loop</span> is an <span class="ct-code-b-yellow">exit-control loop</span>.'
				+ ' This means that the code must always be executed first and then the expression.';
				+ ' is evaluated.';
		typing('.introjs-tooltiptext', text, function() {
			appendNextBtn('printTempData');
		});
	});
}

function printTempData() {
	$('.introjs-duplicate-nextbutton').remove();
	if (nodeCount == 1) {
		arrow("#doLoop", "#printf10", function() {
			printTempDataText();
		});
	} else {
		arrow("#travrseWleTmpEqlToFrst", "#printf10", function() {
			printTempDataText();
		});
	}
}

function printTempDataText() {
	text = "Here, we are printing temp(<span class='ct-code-b-yellow'>" + $("#dataAddress" + nodeCount).text() + "</span>) node's data(i.e., "
			+ "<span class='ct-code-b-yellow'>" + $("#data" + nodeCount).text() + "</span>) in console.";
	typing('.introjs-tooltiptext', text, function() {
		introNextSteps('#consoleId', 'printLstElemnts');
		$('.introjs-nextbutton').show();
	});
}

function travrsTmpToTmpNxtAnim() {
	$('.introjs-duplicate-nextbutton').remove();
	$("#tempNodeVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
		svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv" 
				+ (nodeCount), "#svgId", "line36", "arrow", function() {
			$("#line36").remove();
			fadeInBounceEffectWithTimelineMax('#next' + (nodeCount), '#tempNodeVal', false, function() {
				$("#line30").remove();
				if ($('#next' + nodeCount).text() != $('#firstVal').text()) {
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv" 
							+ (nodeCount + 1), "#svgId", "line30", "arrow");
				} else {
					svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#tempNode", "#dataDiv1", 
							 "#svgId", "line30", "arrow");
				}
				if (buttonName == "traverseList") {
					appendNextBtn('travrseWhileCondText');
				} else {
					appendNextBtn('cntWhileCondText');
				}
			});
		});
	});
}

function travrseWhileCondText() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	arrow('#travrseTmpnxtToTmp', '#travrseWleTmpEqlToFrst', function() {
		whileTempEqlFrstTxt(function() {
			lastnodeCount = nodeCount;
			fromEffectWithTweenMax("#trvrsTmpToFrst", "#whileCondition",true, function() {
				appendNextBtn('whileConditionAnimation');
			});
		});
	});
} 

function prntNxtLne() {
	$('.introjs-tooltip').addClass('hide');
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#travrseWleTmpEqlToFrst', '#printf11', function() {
		$("#printf11").effect("highlight", {color: 'blue'}, 500, function() {
			introNextSteps("#consoleId", 'printNextLine');
			introcode.nextStep();
		})
	});
}//End of traverse

function cntSumInit() {//count
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#travrsrTmpDec', '#cntSumDec', function() {
		$("#extraNode").text('sum');
		$("#opVal").text('0').addClass('opacity00');
		var text = 'An int variable <span class="ct-code-b-yellow">sum</span> is declared and initialized with <span class="ct-code-b-yellow">0</span>';
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCall(function() {
				transferEffect('#cntSumDec', '#opValDec', function() {
					zoomInEffect('#opVal', function() {
						appendNextBtn('countIfCondText');
					});
				});
			});
		});
	});
}

function countIfCondText() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	arrow('#cntSumDec', '#cntIfCond', function() {
		ifConditionText('first', '==', 'NULL', function() {
			fromEffectWithTweenMax('#frstToNulCond', '#ifCondition', true, function() {
				nextBtnWithoutCall(function() {
					flipTheCon("#first", $("#firstVal").text(), "NULL")
				});
			});
		});
	});
}

function cntIfRetnSm() {
	$('.introjs-duplicate-nextbutton').remove();
	if ($("#opVal").text() == 0) {
		arrow('#cntIfCond', '#cntIfRetnSm1', function() {
			cntIfRetnSmAnim();
		});
	} else {
		arrow('#cntWleTmpEqlToFst', '#cntIfRetnSm2', function() {
			cntIfRetnSmAnim();
		});
	}
}

function cntIfRetnSmAnim() {
	text = 'The <span class="ct-code-b-yellow">return</span> statement returns the <span class="ct-code-b-yellow">sum</span> value (i.e. '
		+ '<span class="ct-code-b-yellow">' + $('#opVal').text() +'</span>).';
	typing('.introjs-tooltiptext' , text, function() {
		printfCount = 12;
		introNextSteps('#printf12', 'sumPrintng');
		$("#opVal").parent().effect("highlight", {color: 'blue'}, 500, function() {
			nextBtnWithoutCall(function() {
				$('#animatinDiv').removeClass('z-index1000000');
				introcode.nextStep();
			});
		});
	});
}

function cntSumIncTxt() {
	$('.introjs-duplicate-nextbutton').remove();
	if ($("#opVal").text() == 0) {
		arrow('#cntIfCond', '#cntElseSmInc', function() {
			cntSumIncremntTxt();
		});
	} else {
		arrow('#cntWleTmpEqlToFst', '#cntElseSmInc', function() {
			cntSumIncremntTxt();
		});
	}
}

function cntSumIncremntTxt() {
	text = 'Now sum value is <span class="ct-code-b-yellow">' + (lastnodeCount - 1) + '</span> and is incremeted by 1' 
			+ ' <span class="ct-code-b-yellow">(i.e., ' + lastnodeCount + ')</span>.';
	typing('.introjs-tooltiptext', text, function() {
		nextBtnWithoutCall(function() {
			$('#animatinDiv').addClass('z-index1000000');
			$("#opVal").parent().effect("highlight", {color: 'blue'}, 500);
			flipEffectWithTweenMax('#opVal', lastnodeCount, function() {
				appendNextBtn('cntTmpNxtToTmpAnim');
			});
		})
	});
}

function cntTmpNxtToTmpAnim() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#cntElseSmInc', '#cntTmpNxtToTmp', function() {
		tmpNxtToTmpText();
	});
}

function cntWhileCondText(){//count
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	arrow('#cntTmpNxtToTmp', '#cntWleTmpEqlToFst', function() {
		whileTempEqlFrstTxt(function() {
			fromEffectWithTweenMax("#cntTmpToFrst", "#whileCondition",true, function() {
				appendNextBtn('whileConditionAnimation');
			});
		});
	})
}


function bgnFrstToTmpNxt() {//insertAtBegin
	$(".introjs-duplicate-nextbutton").remove();
	$('#tempNodeVal').parent().effect('highlight', {color: 'blue'}, 500, function() {
		svgAnimatingLineSelector1BottomSideToSelector2TopSide('#animatinDiv', '#tempNode div:first', "#dataDiv"+ (nodeCount - 1), '#svgId', 'line45',
					'arrow', function() {
			$('#line45').remove();
			$("#nextDiv"+ (nodeCount - 1)).effect('highlight', {color: 'blue'}, 500, function() {
				fadeInBounceEffectWithTimelineMax('#firstNodeVal', '#next' + (nodeCount - 1), false, function() {
					svgAnimatingLineSelector1RightSideToSelector2LeftSide('#animatinDiv', '#nextDiv' + printfCount, '#dataDiv' + nodeCount, 
							'#svgId', 'line' + lineCount, 'arrow', function () {
						$('#line' + lineCount).attr('class', 'svg-line lines line');
						lineCount++;
						nextBtnWithoutCall(function() {
							arrow('#streFstToTmpNxt2', '#elseStreTmpToFrst', function() {
								text = 'The <span class="ct-code-b-yellow">temp</span> value <span class="ct-code-b-yellow">'
										+ $("#tempNodeVal").text() + '</span> is stored in <span class="ct-code-b-yellow">first</span> node.';
								typing('.introjs-tooltiptext' , text, function() {
									appendNextBtn('tempToFrst');
								});
							});
						});
					});
				});
			});
		});
	});
}

function tempToFrst() {
	$(".introjs-duplicate-nextbutton").remove();
	fadeInBounceEffectWithTimelineMax('#tempNodeVal', '#firstNodeVal', false, function(){
		$("#line16").remove();
		svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animatinDiv", "#firstNode div:first", "#dataDiv"+ (nodeCount - 1), "#svgId",
				 "line13", "arrow", function() {
			appendNextBtn('lstNxtToFrst');
		});
	});
}

function lstNxtToFrst() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#elseStreTmpToFrst', '#frstToLstNxt', function() {
		text = 'The <span class="ct-code-b-yellow">first</span> value <span class="ct-code-b-yellow">' + $('#firstNodeVal').text() + '</span>'
				+ ' is stored in <span class="ct-code-b-yellow">next</span> member of the <span class="ct-code-b-yellow">lastNode</span>'
				+ '<br>i.e., <span class="ct-code-b-yellow">lastNode -> next</span>.';
		typing('.introjs-tooltiptext', text, function() {
			nextBtnWithoutCall(function() {
				$('#lastNodeVal').parent().effect('highlight', {color: 'blue'}, 500, function() {
					svgAnimatingLineSelector1TopSideToSelector2BottomSide('#animatinDiv', '#lastNode', '#dataDiv' + lastnodeCount, '#svgId',
							'line14', 'arrow', function() {
						$('#line14').remove();
						$('#next' + lastnodeCount).effect("highlight", {color: 'blue'}, 500);
						fadeInBounceEffectWithTimelineMax('#firstNodeVal', '#next' + lastnodeCount, false, function() {
							$('.curve').remove();
							if (buttonName == 'insertAtBegin' || buttonName == 'insertAtPosition') {
								svgAnimatingLineSelector1BottomSideToSelector2TopSide('#animatinDiv', '#nextDiv' + lastnodeCount, '#dataDiv' 
										+ (nodeCount - 1), '#svgId', 'line' + lineCount, 'arrow');
								$('#line' + lineCount).attr('class', 'svg-line lines line')
								lineCount++;
							}
							nextBtnWithoutCall(function() {
								arrow('#frstToLstNxt', '#retrnFst', function() {
									retnFrstTxt();
								});
							});
						});
					});
				});
			});
		});
	});
}

function ifCondPosTo1() {
	$(".introjs-duplicate-nextbutton").remove();
	arrow("#stroreXValInTmpDt", "#ifPosEqlTo1", function() {
		ifConditionText('pos', '==', '1', function() {
			fromEffectWithTweenMax("#ifPosEqlTo1", "#ifCondition", true, function() {
				nextBtnWithoutCall(function() {
					flipEffectWithTweenMax('#first', count, function() {
						var con = count == 1 ;
						conditionMessage(con, function() {
							if (con) {
								appendNextBtn('ifConText');
							} else {
								appendNextBtn('ifCondPosNot1');
							}
						});
					});
				});
			});
		});
	});
}


function insertPosMainCondChecking() {
	text = 'Now check the condition : <br>&nbsp;<span id="ifCondition" class="ct-code-b-yellow opacity00 position">'
			+ ' <span id="frstCond" class="position">pos</span> <= 0 || (<span id="scndCond" class="position">pos</span> > 1 &&'
			+ ' <span id="thrdCond" class="position">first</span> == NULL)</span>'
			+ ' &nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text('').append(text);
	$('.introjs-tooltip').removeClass('hide');
	fromEffectWithTweenMax('#posConCheck', '#ifCondition', true, function() {
		highlightNFlip('#frstCond', count, function() {
			highlightNFlip('#scndCond', count, function() {
				highlightNFlip('#thrdCond', $('#firstVal').text(), function() {
					var con1 = count <= 0;
					var con2 = count > 1;
					var con3 = $('#firstVal').text() == 'NULL';
					var con = con1 || (con2 && con3);
					conditionMessage(con, function() {
						if (con) {
							printfCount = 3;
							introNextSteps('#printf3', 'printInsNoPos');
						} else {
							introNextSteps('#calToInsrtAtPosMthd', 'callToPosMthd');
						}
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}

function insPosPassedValInit() {
	$('.introjs-duplicate-nextbutton').remove();
	declareNodesWhenFunctionCall("firstNode", "firstNodeVal", "fstNodeInAddMtd", "first<sub>" + buttonName + "</sub>", function() {
		$("#firstVal").addClass("ct-green-color");
		introcode.refresh();
		setTimeout(function() {
			transferEffect("#decFstVar", "#firstNode", function() {
				$('#firstNodeVal').text($('#firstVal').text());
				fromEffectWithTweenMax('#firstVal', '#firstNodeVal', false, function() {
					if ($('#firstNodeVal').text() != "NULL") {
						$("#line16").remove();
						svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animatinDiv", "#firstNode", "#dataDiv" + lastnodeCount,
								"#svgId", "line16", "arrow");
					}
					$('#extraNode').text('pos').append('<span id="extrasub"><sub>('+buttonName+')</sub></span>');
					transferEffect("#decPosValue", "#opValDec", function() {
						$('#opVal').text(count);
						fromEffectWithTweenMax('#posVal', '#opVal', false, function() {
							$("#subVal").text("(" + buttonName + ")")
							transferEffect("#decXVal", "#xValDecInAdd", function() {
								$('#xValInAdd').text($('#xValInMain').text());
								fromEffectWithTweenMax('#xValInMain', '#xValInAdd', false, function() {
									appendNextBtn('initTempAndLastNodeText');
								});
							});
						});
					});
				});
			});
		},800);
	});
}

function intIDec() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#decTmpNdLstNd', '#decIntI', function() {
		text = 'An int variable <span class="ct-code-b-yellow">i</span> is declared.';
		typing('.introjs-tooltiptext', text, function() {
			transferEffect('#decIntI', '#countValDec', function() {
				nextBtnWithoutCall(function() {
					arrow('#decIntI', '#posForLoop', function() {
						text = 'Here, <span class="ct-code-b-yellow">i</span> is initialized with <span class="ct-code-b-yellow">1</span>.';
						typing('.introjs-tooltiptext', text, function() {
							iVal = 1;
							$('#countVal').text(iVal);
							zoomInEffect('#countVal', function() {
								appendNextBtn('forCondBtn');
							});
						});
					});
				});
			});
		});
	});
}

function forCondBtn() {
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	ifConditionText('i', '<', '(pos - 1)', function() {
		fromEffectWithTweenMax('#posForCond', '#ifCondition', true, function() {
			nextBtnWithoutCall(function() {
				highlightNFlip('#first', iVal, function() {
					highlightNFlip('#second', (parseInt($('#nodePosVal1').val())-1), function() {
						var con = iVal < (parseInt($('#nodePosVal1').val())-1);
						conditionMessage(con, function() {
							if (con) {
								appendNextBtn('lstNxtEqlToFrst');
							} else {
								nextBtnWithoutCall(function() {
									arrow('#posForLoop', '#callTocreateMethod', function() {
										callToCreateMethodText();
									});
								});
							}
						});
					});
				});
			});
		});
	});
}

function lstNxtEqlToFrst() {
	$('.introjs-duplicate-nextbutton').remove();
	if (iVal == 1) {
		arrow('#posForLoop', '#IfLstNextEqlToFrst', function() {
			lstNxtEqlToFrstText();
		});
	} else {
		arrow('#IfLstNextEqlToFrst', '#IfLstNextEqlToFrst', function() {
			lstNxtEqlToFrstText();
		});
	}
}

function lstNxtEqlToFrstText() {
	$('.introjs-tooltip').addClass('hide');
	ifConditionText('lastNode -> next', '==', 'first', function() {
		fromEffectWithTweenMax('#IfLstNxtCond', '#ifCondition', true, function() {
			svgAnimatingLineSelector1TopSideToSelector2BottomSide('#animatinDiv', '#lastNode', '#dataDiv' + lastnodeCount, '#svgId', 'line21',
					'arrow', function() {
				$('#line21').remove();
				$('#nextDiv' + lastnodeCount).effect('highlight', {color: 'blue'}, 500, function() {
					highlightNFlip('#first', $('#next' + lastnodeCount).text(), function() {
						highlightNFlip('#second', $('#firstVal').text(), function() {
							var con = $('#next' + lastnodeCount).text() == $('#firstVal').text();
							conditionMessage(con, function() {
								nextBtnWithoutCall(function() {
									if (con) {
										arrow('#IfLstNextEqlToFrst', '#printf4', function() {
											$('#printf4').effect('highlight', {color: 'blue'}, 500, function() {
												$('#insertAtPosition').addClass('not-found');
												introNextSteps('#consoleId', 'PrntInsrtPosNotFound');
												introcode.nextStep();
											});
										});
									} else {
										arrow('#IfLstNextEqlToFrst', '#streLstNxtToLst1', function() {	
											text = 'The <span class="ct-code-b-yellow">lastNode -> next</span> value '
													+ '<span class="ct-code-b-yellow">' + $("#next" + lastnodeCount).text()
													+ '</span> is stored in <span class="ct-code-b-yellow">lastNode</span>.';
											typing('.introjs-tooltiptext' , text, function() {
												appendNextBtn('lstNxtToLst');
											});
										});
									}
								});
							});
						});
					});
				});
			});
		});
	});
}

function iIncrementing() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#streLstNxtToLst1', '#posForLoop', function() {
		$('#iInc').effect('highlight', {color: 'blue'}, 500, function() {
			iVal++;
			text = 'Here, the <span class="ct-code-b-yellow">i</span> value is incremented by one (i.e., <span class="ct-code-b-yellow">'
					+ iVal + '</span>).';
			typing('.introjs-tooltiptext', text, function() {
				nextBtnWithoutCall(function() {
					$('#countVal').parent().effect('highlight', {color: 'blue'}, 500);
					flipEffectWithTweenMax('#countVal', iVal, function() {
						nextBtnWithoutCall(function() {
							forCondBtn();
						});
					});
				});
			});
		});
	});
}

function ifCondPosNot1() {
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#ifPosEqlTo1', '#elseLstNxtToTmpNxt', function() {
		var text = 'Here, we are storing <span class="ct-code-b-yellow">next</span> member of <span class="ct-code-b-yellow">lastNode</span>'
					+ ' (<span class="ct-code-b-yellow">lastNode -> next</span> (i.e., <span class="ct-code-b-yellow">'
					+ $('#next' + lastnodeCount).text() + '</span>)) to the <span class="ct-code-b-yellow">next</span> member of'
					+ ' <span class="ct-code-b-yellow">temp</span> node (<span class="ct-code-b-yellow">temp -> next</span>).';
		typing('.introjs-tooltiptext', text, function() {
			$('#animatinDiv').removeClass('z-index1000000');
			introNextSteps('#animatinDiv', 'tmpNxtToLstNxt');
			$('.introjs-nextbutton').show();
		});
	});
}

function frstRetnInInsrtPos(id1, id2) {
	arrow(id1, id2, function() {
		$('.introjs-tooltip').removeClass('hide');
		retnFrstTxt();
	});	
}

function highlightNFlip(id1, id2, callBackFunction) {
	 $(id1).effect('highlight', {color: 'yellow'}, 300, function() {
		 flipEffectWithTweenMax(id1, id2, function() {
			 if (typeof callBackFunction === "function") {
				 callBackFunction();
			 }
		 });
	 });
}

function ifConditionText(text1, value, text2, callBackFunction) {
	text = 'Now check the condition : <br/>&nbsp;<span id="ifCondition" class="opacity00 ct-code-b-yellow position">'
			+ '<span id="first" class="position">' + text1 +'</span> ' + value + ' <span id="second" class="position">' + text2 + '</span></span>'
			+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	if (typeof  callBackFunction === "function") {
		callBackFunction();
	}
}

function tmpNxtToTmpText() {//travese & count
	text = 'The <span class="ct-code-b-yellow">temp -> next</span> value (i.e., '
		+ '<span class="ct-code-b-yellow">' + $("#next" + lastnodeCount).text() + '</span>) is stored in '
		+ '<span class="ct-code-b-yellow">temp</span> node.';
	typing('.introjs-tooltiptext', text, function() {
		$('#animatinDiv').addClass('z-index1000000');
		appendNextBtn('travrsTmpToTmpNxtAnim');
	});
}

function whileTempEqlFrstTxt(callBackFunction) {//traverse & count
	text = 'Now check the condition : <br/>&nbsp;<span id="whileCondition" class="opacity00 ct-code-b-yellow position">'
		+ '<span id="whileLstNxtVal" class="position">temp</span> != <span id="whileFstVal" class="position">first</span></span>'
		+ '&nbsp;&nbsp;<span class="position" id="trueOrFalse"></span><div id="appnedSpan"></div>';
	$('.introjs-tooltiptext').text("").append(text);
	$('.introjs-tooltip').removeClass('hide');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function conditionMessage(value, callBackFunction) {
	if (value) {
		$("#trueOrFalse").text("====> True").addClass("green-color");
	} else {
		$("#trueOrFalse").text("====> False").addClass("red-color");
	}
	text = 'The condition evaluates to <span class="ct-code-b-yellow">'+ value + '</span>.';
	typing('#appnedSpan', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function orderingNodes(val) {//Changing node position
	$('.lines, .curve').remove();
	if ($('#insertAtPosition').hasClass('insert-position')) {
		nodeCount = count + 1;
		$('#dynamicNodes #node' + count).before('<div class="opacity00 col-xs-2 nodes hide" id="node' + (nodeCount - 1) 
						+ '" style="top: 0px; width: auto;">' + $("#posNodes > #node" + (nodeCount - 1)).html() + '</div>');
		$('#posNodes .nodes').attr('id', 'node' + count);
	} else if ($('#insertAtPosition').hasClass('insert-endPos')) {
		$("#dynamicNodes .nodes:last").after('<div class="opacity00 col-xs-2 nodes hide" id="node' + (nodeCount - 1) 
				+ '" style="top: 0px; width: auto;">' + $("#posNodes > #node" + (nodeCount - 1)).html() + '</div>');
	} else if ($('#insertAtBegin').hasClass('insert-begin')) {
		$("#dynamicNodes .nodes:first").before('<div class="opacity00 col-xs-2 nodes hide" id="node' + (nodeCount - 1) 
				+ '" style="top: 0px; width: auto;">' + $("#posNodes > #node" + (nodeCount - 1)).html() + '</div>');
	}
	changeIdsAtBegin(1, function() {
		if ($('#insertAtPosition').hasClass('insert-endPos')) {
			$('#node' + count).removeClass("hide");
			if ($('#dynamicNodes #row1 .nodes').length > 5) {
				$('#row1 .nodes:last').css({'float' : 'right'});
				var t = $('#row1 .nodes:last').detach();
				t.prependTo('#row2');
			}
			positioningNodes();
		} else {
			movingNodes(count, '#node' + count, function() {
				if ($('#insertAtPosition').hasClass('insert-endPos')) {
					positioningNodes();
				} else {
					setTimeout(function() {
						positioningNodes();
					}, 1200);
				}
			});
		}
	});
}

function positioningNodes() {
	var l1 = $("#posNodes #node" + (nodeCount - 1)).offset();
	var l2 = $("#dynamicNodes #node" + (nodeCount - 1)).offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenLite.to("#posNodes > #node" + (nodeCount - 1), 0.5, {top : topLength, left : leftLength, onComplete: function() {
		$("#dynamicNodes #node" + (nodeCount - 1)).html($("#posNodes > #node" + (nodeCount - 1)).html()).removeClass("opacity00");
		$("#posNodes").remove();
		introcode.refresh();
		changeIdsAtBegin(1, function() {
			regenerateArrows();
			svgCurve("#nextDiv" + $('.nodes').length, "#dataDiv1");
			$('.fa, .extraNode').remove();
			introcode.refresh();
			introNextSteps("#buttonDiv", "showButtons");
			$('.introjs-nextbutton').show();
		});
	}});
}

function movingNodes(val, nodeId, callBackFunction) {
	if (val <= ($('#dynamicNodes .nodes').length)) {
		var l1Val;
		if (val <= 4) {
			l1Val = '120px';
		} else if (val > 5) {
			l1Val = '-120px';
		}
		if (val == 5) {
			TweenMax.to($('#dynamicNodes .nodes').not(nodeId).eq(val - 1), 1, {top: '68px', onComplete: function() {
				$(nodeId).removeClass('hide');
				$.each($("#dynamicNodes .nodes").not(nodeId), function() {
					if ($('#row1 .nodes').length > 5) {
						$('#row1 .nodes:last').css({'float' : 'right'});
						var t = $('#row1 .nodes:last').detach();
						t.prependTo('#row2');
					}
					$(this).css('top', '0');
				});
			}});
		} else {
			TweenMax.to($('#dynamicNodes .nodes').not(nodeId).eq(val - 1), 1, {left: l1Val, onComplete: function() {
				$(nodeId).removeClass('hide');
				$.each($("#dynamicNodes .nodes").not(nodeId), function() {
					$(this).css("left", "0");
				});
			}});
		}
		val++;
		movingNodes(val, nodeId, callBackFunction);
	} else {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}
}

function regenerateArrows(callBackFunction) {//regenerating all arrows for nodes
	$('.lines, .curve').remove();
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#animatinDiv', '#firstDiv', '#dataDiv1', '#svgId', 'line15', 'arrow');
	$.each($("#dynamicNodes .nodes:not(:last)"), function(index, val) {
		if (index < 4) {
			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animatinDiv", $(this).find(".next-div"), $(this).next().find(".data-div"),
					"#svgId", "line" + (index + 1), "arrow");
			$('#line' + (index + 1)).attr('class', 'svg-line lines line');
		} else if (index > 4) {
			svgAnimatingLineSelector1LeftSideToSelector2RightSide("#animatinDiv", $(this).find(".data-div"), $(this).next().find(".next-div"), 
					 "#svgId", "line"+ (index + 1), "arrow");
			$('#line' + (index + 1)).attr('class', 'svg-line lines line');
		} else {
			svgAnimatingLineSelector1BottomSideToSelector2TopSide("#animatinDiv", "#nextDiv5", "#dataDiv6", "#svgId", "line" + (index + 1), "arrow");
			$('#line' + (index + 1)).attr('class', 'svg-line lines line');
		}
	});
	if (typeof callBackFunction === "function") {
		callBackFunction;
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
	changeIds(val, $("#dynamicNodes .data-div"), "dataDiv");
	changeIds(val, $("#dynamicNodes .next-div"), "nextDiv");
	changeIds(val, $("#dynamicNodes .data-address"), "dataAddress");
	changeIds(val, $("#dynamicNodes .data-span"), "data");
	changeIds(val, $("#dynamicNodes .next-span"), "next");
	if (buttonNames == 'deleteAtBegin' || buttonNames == 'deleteAtEnd' || buttonNames == 'deleteAtPosition') {
		changeIds(val, $('.lines'), 'line');
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function butnStepWithTime() {
	introNextSteps("#buttonDiv", "showButtons");
	setTimeout(function() {
		introcode.nextStep();
	}, 800);
}

function buttonCorrespondingText(nextStepName) {
	$('.displayCode, .outputCount1').addClass('opacity00').empty();
	$('.intValues, .intVariables').addClass('opacity00');
	buttonName = nextStepName;
	introNextSteps("#inMain", nextStepName, "right");
	introcode.nextStep();
}

function addNegativeValuEvent(selector) {
	$(selector).on("keydown keyup", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val() == "-1") {
			$('.introjs-nextbutton').show();
			$("input").attr("disabled", true);
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
	$(selector).on("keydown", function(e) {
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
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
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		var firstCon = $(this).val().length > 0 && (!$(this).val().startsWith('-'));
		var secondCon = $(this).val().length >= 2 && $(this).val().indexOf('-', $(this).val().indexOf('-') + 1) == -1 
		if (firstCon || secondCon) {
			$('.introjs-nextbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				introcode.nextStep();
			}
		} else {
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter any integer.</div>');
			$('.introjs-nextbutton').hide();
		}
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

function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1LeftSideToSelector2RightSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1BottomSideToSelector2TopSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAnimatingLineSelector1TopSideToSelector2BottomSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var y1 = $(selector1).offset().top - parentOffset.top;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth())
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	TweenMax.to(".arrow", 0.5, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
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
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: red;'>" + $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	$(selector2).removeClass('opacity00')
	if (!flag) {
		$(selector1).addClass('z-index1000000').parent().effect( "highlight",{color: 'blue'}, 500);
	} else {
		$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500);
	}
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style");
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
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

function toEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	$(selector2).offset({top: l1.top, left: l1.left});
	$(selector1).addClass("opacity00").removeAttr("style")
	TweenMax.to($(selector2), 0.3, {opacity: 1, top: 0, left: 0, onComplete: function() {
		$(selector2).removeAttr("style").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introcode.nextStep();
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
	introcode.insertOption(introcode._currentStep + 1, options);
	introcode._options.steps.push({"element" : stepName});
}

function customIntroNxtStep(stepName, animatedStep, position) {
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}


function appendNextBtn(value) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton" onclick="' + value + '()">Next &#8594;</a>');
}

function nextBtnWithoutCall(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
	$('.introjs-duplicate-nextbutton').click(function() {
		$(this).remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
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
		$("#animatinDiv").append("<span id='dummy' style='position: relative;color: black;'>" 
			+ $(selector2).text() + "</span>");
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
			$("#animatinDiv").removeAttr("style");			
			$('#dummy').remove();
		}}, "-=0.8");
}


function fadeInBounceEffectWithTimelineMax(selector1, selector2, flag, callBackFunction) {
	var timelineMax = new TimelineMax();
	var val;
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500);
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#animatinDiv").append("<span id='dummy' class='ct-green-color ct-fonts' style='position: relative;z-index: 9999999;'>" 
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
	    	introcode.refresh();
	    	$("#dummy").remove();
	    	if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	    }});
}

function svgCurve(selector1, selector2) {
	$("polyline").remove();
	var x = ($(selector1).offset().left - $("#animatinDiv").offset().left) + $(selector1).width();
	var y = ($(selector1).offset().top - $("#animatinDiv").offset().top) + $(selector1).outerHeight() / 2;
	var x1 = x + ($(selector1).outerWidth() / 2);
	var y1 = y;
	var x2 = x1;
	var y2 = y - ($(selector1).outerHeight() * 1.5);
	var x3 = ($(selector2).offset().left - $("#animatinDiv").offset().left) - ($(selector2).outerWidth() / 2);;
	var y3 = y2;
	var x4 = x3;
	var y4 = ($(selector2).offset().top - $("#animatinDiv").offset().top) + $(selector2).outerHeight() / 2;
	var x5 = ($(selector2).offset().left - $("#animatinDiv").offset().left);
	var y5 = y4; 		
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line curve");
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("polyline", 1, {attr: {points : points}});
	},500);
}

function deleteAtFirstNode(val, count, nodeId, callBackFunction) {
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