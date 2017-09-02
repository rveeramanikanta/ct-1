var buttonNames = ["CONCAT", "UNION", "INTERSECT"];
var arr = ["l1", "l2", "l3", "x", "t3"];
var count = tCount = printfCount = outputLineCount = returnValCount = nodeCount = lineCount = outerLoop = innerLoop = extraNode = 1;
var buttonName, removeLineNum, fstNdeInSecdList, typingSpeed = 10;
var tempLine = 11, qLine = 111, infoLine =33;
var concatflag = lineClass = flag = false;
var svgIds = [], secSvgIds = [], thirdSvgIds = [], fstSvgIds = [];

function documentCallFunctin() {
	lang = getURLParameter("lang");
	preStructTypeList();
	appendButtons();
	svgAppend("#animatinDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
	noOfNodeList();
	noOfNodesInUnion();
	initIntroJS();
}

function getURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function preStructTypeList() {
	$("#structTypelist").text('').append('<span id="strcutSpan">struct list {\n'
							+ '\tint data;\n'
							+ '\tstruct list *next;\n'
							+ '};</span>\n'
							+ '<span id="typeDefDec">typedef struct list *nodeptr;</span>');
	if (lang == 'cpp') {
		$('#structTypelist').after('<pre class="creamPreTab opacity00" id="preClassCreation"></pre>');
		$('#preClassCreation').append('class Sll {\n'
								+ '\t<span id="cppFstDec">nodeptr first;</span>\n'
								+ '\t<span id="constructCreat">public: Sll() {\n'
								+ '\t\t<span id="cppFstInit">first = NULL;</span>\n'
								+ '\t}</span>\n'
								+ '\t<span id="membrFunctions">void create();\n'
								+ '\tvoid print();<span id="methodsInClass"></span></span>\n};');	
	}
}

function preMain() {
	if (lang == 'c') {
		$("#inMain").text('').append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="nodeDec">nodeptr l1, l2, l3;</span>\n'
						+ '<span id="nodeToNull">l1 = l2 = l3 = NULL;</span>\n'
						+ '<span id="printf1">printf("Enter list 1 elements : \\n");</span>\n'
						+ '<span id="callCreateMethos1">l1 = create(l1);</span>\n'
						+ '<span id="printf2">printf("Enter list 2 elements : \\n");</span>\n'
						+ '<span id="callCreateMethos2">l2 = create(l2);</span>');
	} else if (lang == 'cpp') {
		$("#inMain").text('').append('<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
						+ '<span id="nodeDec">Sll l1, l2, l3;</span>\n'
						+ '<span id="printf1">cout << "Enter list 1 elements : \\n";</span>\n'
						+ '<span id="callCreateMethos1">l1.create();</span>\n'
						+ '<span id="printf2">cout << "Enter list 2 elements : \\n";</span>\n'
						+ '<span id="callCreateMethos2">l2.create();</span>');
	}
}

function preConCatMainMthd() {
	if (lang == 'c') {
		$("#callCreateMethos2").after('\n<span id="callConcatMethod">l3 = concat(l1, l2);</span>\n'
								+ '<span id="printf5">printf("Elements in list3 : \\n");</span>\n'
								+ '<span id="printFunction">print(l3);</span>');
	} else if (lang == 'cpp') {
		$("#callCreateMethos2").after('\n<span id="callConcatMethod">l3.concat(l1, l2);</span>\n'
								+ '<span id="printf5">cout << "Elements in list3 : \\n";</span>\n'
								+ '<span id="printFunction">l3.print();</span>');
	}
}

function preUnionMainMethd() {
	if (lang == 'c') {
		$("#callCreateMethos2").after('\n<span id="callConcatMethod">l3 = unions(l1, l2);</span>\n'
								+ '<span id="p3">printf("Unions list : \\n");</span>\n'
								+ '<span id="p4">print(l3);</span>');
	} else if (lang == 'cpp') {
		$("#callCreateMethos2").after('\n<span id="callConcatMethod">l3.unions(l1, l2);</span>\n'
								+ '<span id="p3">cout << "Union list : \\n";</span>\n'
								+ '<span id="p4">l3.print();</span>');
	}
}

function preIntersectMainMethod() {
	if (lang == 'c') {
		$("#callCreateMethos2").after('\n<span id="intrsctMainIfCond">if (l1 == NULL || l2 == NULL) {</span>\n'
								+ '\t<span id="printf5">printf("Intersection list is empty\\n");</span>\n'
								+ '\t<span id="retn0">return 0;</span>\n}\n'
								+ '<span id="callL1Srt">l1 = sort(l1);</span>\n'
								+ '<span id="callL2Srt">l2 = sort(l2);</span>\n'
								+ '<span id="printMethod1">print(l1);</span>\n'
								+ '<span id="printMethod2">print(l2);</span>\n'
								+ '<span id="callIntrsctMethod">l3 = intersect(l1, l2);</span>\n'
								+ '<span id="printf6">printf("Intersection list : \\n");</span>\n'
								+ '<span id="printMethod3">print(l3);</span>');
	} else if (lang == 'cpp') {
		$("#callCreateMethos2").after('\n<span id="intrsctMainIfCond">if (<span id="iFL1IsEmpty">l1.isEmpty()</span> ||'
								+ ' <span id="iFL2IsEmpty">l2.isEmpty()</span>) {</span>\n'
								+ '\t<span id="printf5">cout << "Intersection list is empty\\n";</span>\n'
								+ '\t<span id="retn0">return 0;</span>\n}\n'
								+ '<span id="callL1Srt">l1 = sort();</span>\n'
								+ '<span id="callL2Srt">l2 = sort();</span>\n'
								+ '<span id="printMethod1">l1.print();</span>\n'
								+ '<span id="printMethod2">l2.print();</span>\n'
								+ '<span id="callIntrsctMethod">l3.intersect(l1, l2);</span>\n'
								+ '<span id="printf6">count << "Intersection list : \\n";</span>\n'
								+ '<span id="printMethod3">l3.print();</span>');
	}
}
function preSingleLinkedListOperations() {
	$('#structTypelist').removeClass('hide');
	introjs.refresh();
	$("#sllOperations").append('<span id="createSpan"></span>\n'
							+ '\t<span id="initTempAndQnode">nodeptr temp, q;</span>\n'
							+ '\t<span id="initXVar">int x;</span>\n'
							+ '\t<span id="printf3"></span>'
							+ '\t<span id="whileXNotEqlToMinusOne">while(<span id="xNotEqToOne">x != -1</span>) {</span>\n'
							+ '\t\t<span id="createNewTempNode"></span>\n'
							+ '\t\t<span id="xValStreInTempData">temp -> data = x;</span>\n'
							+ '\t\t<span id="tempNextToNull">temp -> next = NULL;</span>\n'
							+ '\t\t<span id="ifFirstEqlToNull">if(first == NULL) {</span>\n'
							+ '\t\t\t<span id="firstEqlToTemp">first = temp;</span>\n'
							+ '\t\t} else {\n'
							+ '\t\t\t<span id="tempToQNext">q -> next = temp;</span>\n'
							+'\t\t}\n'	
							+ '\t\t<span id="tempValStreInQ">q = temp;</span>\n'
							+ '\t\t<span id="printf4">printf("Enter element : ");</span>');
	if (lang == 'c') {
		$('#createSpan').html('nodeptr create(<span id="firstNode">nodeptr first</span>) {');
		$('#printf3').html('printf("Enter element : ");');
		$('#printf3').after('\n\t<span id="scanf3">scanf("%d", &x);</span>\n');
		$('#createNewTempNode').html('temp = (nodeptr)malloc(sizeof(struct list));');
		$('#printf4').html('printf("Enter element : ");');
		$('#printf4').after('\n\t\t<span id="scanf4">scanf("%d", &x);</span>\n\t}\n\t<span id="returnFirst">return first;</span>\n}');
	} else if (lang == 'cpp') {
		$('#createSpan').html('void Sll::create() {');
		$('#printf3').html('cout << "Enter element : ";');
		$('#printf3').after('\n\t<span id="scanf3">cin >> x;</span>\n');
		$('#createNewTempNode').html('temp = new list;');
		$('#printf4').html('cout << "Enter element : ";');
		$('#printf4').after('\n\t\t<span id="scanf4">cin >> x;</span>\n\t}\n}');
	}
}

function preConcatOperation() {
	if (lang == 'c') {
		$("#sllOperations").append('<div id="concatCode">nodeptr concat(<span id="concatTwoNodes">nodeptr t1, nodeptr t2</span>) {\n'
								+ '\t<span id="decNodeT3">nodeptr t3;</span>\n'
								+ '\t<span id="ifT1IsNull">if (<span id="ifCondition">t1 == NULL</span>) {</span>\n'
								+ '\t\t<span id="returnT1">return t2;</span>\n'
								+ '\t} <span id="ifT2IsNull">else if (<span id="ifCondition">t2 == NULL</span>) {</span>\n'
								+ '\t\t<span id="returnT2">return t1;</span>\n'
								+ '\t} else {\n'
								+ '\t\t<span id="t1StoredToT3">t3 = t1;</span>\n'
								+ '\t\t<span id="whileT1NxtNotEqNull">while(t1 -> next != NULL) {</span>\n'
								+ '\t\t\t<span id="t1nxtToT1">t1 = t1 -> next;</span>\n'
								+ '\t\t}\n\t\t<span id="t2StoreT1Nxt">t1 -> next = t2;</span>\n'
								+ '\t}\n\t<span id="returnT3">return t3;</span>\n}</div>');
	} else if (lang == 'cpp') {
		$("#sllOperations").append('<div id="concatCode">void Sll::concat(<span id="concatTwoNodes">Sll l1, Sll l2</span>) {\n'
								+ '\t<span id="ifT1IsNull">if (<span id="ifCondition">l1.first == NULL</span>) {</span>\n'
								+ '\t\t<span id="returnT1">first = l2.first;</span>\n'
								+ '\t<span id="ifT2IsNull">} else if (<span id="ifCondition">l2.first == NULL</span>) {</span>\n'
								+ '\t\t<span id="returnT2">first = l1.first;</span>\n'
								+ '\t} else {\n'
								+ '\t\t<span id="t1StoredToT3">first = l1.first;</span>\n'
								+ '\t\t<span id="whileT1NxtNotEqNull">while(l1.first -> next != NULL) {</span>\n'
								+ '\t\t\t<span id="t1nxtToT1">l1.first = l1.first -> next;</span>\n'
								+ '\t\t}\n\t\t<span id="t2StoreT1Nxt">l1.first -> next = l2.first;</span>\n\t}\n}</div>');
	}
}

function preUnionOperation() {
	if (lang == 'c') {
		$("#sllOperations").append('nodeptr unions(<span id="unionTwoNodes">nodeptr l1, nodeptr l2</span>) {\n'
						        + '\t<span id="decForNodes">nodeptr l3, t1, t2, q = NULL;</span>\n'
						        + '\t<span id="callToConcatMethod">l3 = concat(l1, l2);</span>\n'
						        + '\t<span id="nodeRepeation">for (t1 = l3; t1 != NULL && t1 -> next != NULL; \n\t\tt1 = t1 -> next) {\n'
							    + '\t\tfor (t2 = t1; t2 != NULL && t2 -> next != NULL) {\n'
								+ '\t\t\tif (t1 -> data == t2 -> next -> data) {\n'
								+ '\t\t\t\tq = t2 -> next;\n'
								+ '\t\t\t\tt2 -> next = q -> next;\n'
								+ '\t\t\t\tfree(q);\n'
								+ '\t\t\t} else {\n'
								+ '\t\t\t\t t2 = t2 -> next;\n'
								+ '\t\t\t}\n\t\t}\n\t}</span>\n'
						      	+ '\t<span id="returnT4">return l3;</span>\n}');
	} else if (lang == 'cpp') {
		$("#sllOperations").append('nodeptr unions(<span id="unionTwoNodes">Sll l1, Sll l2</span>) {\n'
						        + '\t<span id="decForNodes">nodeptr t1, t2, q = NULL;</span>\n'
						        + '\t<span id="callToConcatMethod">concat(l1, l2);</span>\n'
						        + '\t<span id="nodeRepeation">for (t1 = first; t1 != NULL && t1 -> next != NULL; \n\t\t\tt1 = t1 -> next) {\n'
							    + '\t\tfor (t2 = t1; t2 != NULL && t2 -> next != NULL; \n\t\t\t t2 = t2 -> next) {\n'
								+ '\t\t\tif (t1 -> data == t2 -> next -> data) {\n'
								+ '\t\t\t\tq = t2 -> next;\n'
								+ '\t\t\t\tt2 -> next = q -> next;\n'
								+ '\t\t\t\tdelete q;\n'
								+ '\t\t\t}\n\t\t}\n\t}</span>\n}');
	}
}

function prePrintfFunctionOperation() {
	$("#sllOperations").append('<div id="prePrintMethod"><span id="printSpan"></span>\n'
							+ '\t<span id="nodeQ">nodeptr q = first;</span>\n'
							+ '\t<span id="firstIsNull">if (<span id="ifFstEqNull">first == NULL</span>) {</span>\n'
							+ '\t\t<span id="printf7"></span>\n'
							+ '\t} else {\n'
							+ '\t\t<span id="printf8"></span>\n'
							+ '\t\t<span id="whileQNotEqNull">while (<span id="checkQNxtNull">q != NULL</span>) {</span>\n'
							+ '\t\t\t<span id="printf9"></span>\n'
							+ '\t\t\t<span id="qNxtToQ">q = q -> next;</span>\n'
							+ '\t\t}\n\t\t<span id="printf10"></span>\n\t}\n}\n</div>');
	if (lang == 'c') {
		$('#printSpan').html('void print(<span id="printNode">nodeptr first</span>) {');
		$('#printf7').html('printf("List is empty\\n");');
		$('#printf8').html('printf("Elements in list are : ");');
		$('#printf9').html('printf("%d---> ", q -> data);');
		$('#printf10').html('printf("NULL\\n");');
	} else if (lang == 'cpp') {
		$('#printSpan').html('void Sll::print() {');
		$('#printf7').html('cout << "List is empty\\n";');
		$('#printf8').html('cout << "Elements in list are : ";');
		$('#printf9').html('cout << q -> data << "---> ";');
		$('#printf10').html('cout << "NULL\\n";');
	}
}

function unionOperationFunction() {
	if (lang == 'c') {
		$("#unionOperations").append("\t<div class='position'><span id='firstLoop'>for (t1 = <span class='position' id='l3ValInit'>l3</span>;" 
								+ " <span id='fstLoopCond'>"
								+ " <span id='fstFstCon' class='position'><span class='position' id='t1'>t1</span>"
								+ " != NULL</span> && <span class='position' id='fstSecCon'>"
								+ " <span id='t1Nxt' class='position'>t1 -> next</span> != NULL</span></span>;"
								+ " <span id='t1Inc' class='position'>t1 = t1 -> next</span>) {&nbsp;&nbsp;"
					      		+ " <span id='firstLoopTrueOrFalse' class='position'></span></span>\n"
								+ " \t<span id='secondLoop'>for (t2 = <span class='position' id='t1ValInit'>t1</span>; "
								+ " <span id='secForLoop'><span id='secFstCon' class='position'><span id='t2' class='position'>t2</span> != NULL</span>"
					      		+ " && <span id='secSecCon'><span id='t2Next' class='position'>t2 -> next</span> != NULL</span>"
					      		+ "</span>) {&nbsp;&nbsp;"
					      		+ " <span id='secondLoopTrueOrFalse'></span></span></span>\n"
					            + "\t\t<span id='ifCondition'>if (<span id='unIfCon'><span id='t1Data' class='position'>t1 -> data</span>"
					            + " == <span id='t2NextData' class='position'>t2 -> next -> data</span></span>) {"
					            + "&nbsp;&nbsp;<span id='ifConTrueorFalse' class='position'></span></span>\n"
					            + "\t\t\t<span id='fstStat'>q = <span class='position' id='t2nextVal'>t2 -> next</span>;</span>\n"
					            + "\t\t\t<span id='secStat'>t2 -> next = <span class='position' id='qNodeNxt'>q -> next</span>;</span>\n"
					            + "\t\t\t<span id='thirdStat'><span id='freeQnode'>free(q)</span></span>\n"
					            + "\t\t} else {\n"
					            + "\t\t\t<span id='t2Increment'><span id='t2Inc' class='position'>t2 = t2 -> next</span>;</span>\n"
					            + "\t\t}\n\t}\n}</div>");
	} else if (lang == 'cpp') {
		$("#unionOperations").append("\t<div class='position'><span id='firstLoop'>for (t1 = <span class='position' id='l3ValInit'>first</span>;"
								+ " <span id='fstLoopCond'>"
								+ " <span id='fstFstCon' class='position'><span class='position' id='t1'>t1</span> != NULL</span> &&"
								+ " <span class='position' id='fstSecCon'><span id='t1Nxt' class='position'>t1 -> next</span> != NULL</span></span>"
								+ "</span>; <span id='t1Inc' class='position'>t1 = t1 -> next</span>) {&nbsp;&nbsp;<span id='firstLoopTrueOrFalse'"
								+ " class='position'></span></span>\n"
								+ " \t<span id='secondLoop'>for (t2 = <span class='position' id='t1ValInit'>t1</span>; <span id='secForLoop'>"
								+ " <span id='secFstCon' class='position'><span id='t2' class='position'>t2</span> != NULL</span> &&"
								+ " <span id='secSecCon'><span id='t2Next' class='position'>t2 -> next</span> != NULL</span></span>;"
								+ " <span id='t2Increment'><span id='t2Inc' class='position'>t2 = t2 -> next</span></span>) {&nbsp;&nbsp;"
								+ " <span id='secondLoopTrueOrFalse'></span></span></span>\n"
								+ "\t\t<span id='ifCondition'>if (<span id='unIfCon'><span id='t1Data' class='position'>t1 -> data</span>"
					            + " == <span id='t2NextData' class='position'>t2 -> next -> data</span></span>) {"
					            + "&nbsp;&nbsp;<span id='ifConTrueorFalse' class='position'></span></span>\n"
					            + "\t\t\t<span id='fstStat'>q = <span class='position' id='t2nextVal'>t2 -> next</span>;</span>\n"
					            + "\t\t\t<span id='secStat'>t2 -> next = <span class='position' id='qNodeNxt'>q -> next</span>;</span>\n"
					            + "\t\t\t<span id='thirdStat'><span id='freeQnode'>delete q</span>;</span>\n"
					            + "\t\t}\n\t}\n}</div>");
	}
}

function preSortMethod() {
	if (lang == 'c') {
		$("#sllOperations").append('<div id="srtMethod">nodeptr sort(<span id="firstNodeIn">nodeptr first</span>) {\n'
				 				+ '\t<span id="initT1T2">nodeptr t1, t2;</span>\n'
				 				+ '\t<span id="initX">int x;</span>\n'
				 				+ '\t<span id="srtForLoop">for(t1 = first; t1 -> next != NULL; t1 = t1 -> next) {\n'
								+ '\t\tfor(t2 = t1 -> next; t2 != NULL; t2 = t2 -> next) {\n'
								+ '\t\t\tif (t1 -> data > t2 -> data) {\n'	
								+ '\t\t\t\tx = t1 -> data;\n'
								+ '\t\t\t\tt1 -> data = t2 -> data;\n'
								+ '\t\t\t\tt2 -> data = x;\n'
								+ '\t\t\t}\n\t\t}\n\t}</span>\n'
								+ '\t<span id="retn3">return first;</span>\n}</div>');
	} else if (lang == 'cpp') {
		$("#sllOperations").append('<div id="srtMethod">void Sll::sort() {\n'
				 				+ '\t<span id="initT1T2">nodeptr t1, t2;</span>\n'
				 				+ '\t<span id="initX">int x;</span>\n'
				 				+ '\t<span id="srtForLoop">for(t1 = first; t1 -> next != NULL; t1 = t1 -> next) {\n'
								+ '\t\tfor(t2 = t1 -> next; t2 != NULL; t2 = t2 -> next) {\n'
								+ '\t\t\tif (t1 -> data > t2 -> data) {\n'	
								+ '\t\t\t\tx = t1 -> data;\n'
								+ '\t\t\t\tt1 -> data = t2 -> data;\n'
								+ '\t\t\t\tt2 -> data = x;\n'
								+ '\t\t\t}\n\t\t}\n\t}</span>\n}</div>');
	}
}

function sortingLoops() {
	if (lang == 'c') {
		$("#sortingLogic").append('<span id="nodeSrtLogic">\t<span id="frLoop1">for(<span id="loop1Init">t1 = first</span>; '
								+ ' <span id="loop1Cond">t1 -> next != NULL</span>; <span id="loop1Inc">t1 = t1 -> next</span>) {</span>\n'
								+ '\t\t<span id="frLoop2">for(<span id="loop2Init">t2 = t1 -> next</span>; <span id="loop2Cond"">t2 != NULL</span>;'
								+ ' <span id="loop2Inc">t2 = t2 -> next</span>) {</span>\n'
								+ '\t\t\t<span id="loopIfCond">if (t1 -> data > t2 -> data) {</span>\n'
								+ '\t\t\t\t<span id="ifXVal">x = t1 -> data</span>;\n'
								+ '\t\t\t\t<span id="t1InfoVal">t1 -> data = t2 -> data;</span>\n'
								+ '\t\t\t\t<span id="t2InfoVal">t2 -> data = x;</span>\n'
								+ '\t\t\t}\n\t\t}\n\t}</span>');
	} else if (lang == 'cpp') {
		$("#sortingLogic").append('<span id="nodeSrtLogic">\t<span id="frLoop1">for(<span id="loop1Init">t1 = first</span>; '
								+ ' <span id="loop1Cond">t1 -> next != NULL</span>; <span id="loop1Inc">t1 = t1 -> next</span>) {</span>\n'
								+ '\t\t<span id="frLoop2">for(<span id="loop2Init">t2 = t1 -> next</span>; <span id="loop2Cond"">t2 != NULL</span>;'
								+ ' <span id="loop2Inc">t2 = t2 -> next</span>) {</span>\n'
								+ '\t\t\t<span id="loopIfCond">if (t1 -> data > t2 -> data) {</span>\n'
								+ '\t\t\t\t<span id="ifXVal">x = t1 -> data</span>;\n'
								+ '\t\t\t\t<span id="t1InfoVal">t1 -> data = t2 -> data;</span>\n'
								+ '\t\t\t\t<span id="t2InfoVal">t2 -> data = x;</span>\n'
								+ '\t\t\t}\n\t\t}\n\t}</span>');
	}
}

function preIntersectionMethod() {
	if (lang == 'c') {
		$("#sllOperations").append('<div id="intrsctionMethod">nodeptr intersect(<span id="l1L2Dec">nodeptr l1, nodeptr l2</span>) {\n'
								+ '\t<span id="initT1T2L3">nodeptr t1 = l1, t2 = l2, l3 = NULL;</span>\n'
								+ '\t<span id="intrsctWhileCond">while(<span id="whileInside">t1 != NULL && t2 != NULL</span>) {</span>\n'
			    				+ '\t\t<span id="intrsctIfCond">if (t1 -> data < t2 -> data) {</span>\n'
								+ '\t\t\t<span id="intrsctIfT1Next">t1 = t1 -> next;</span>\n'
								+ '\t\t} <span id="intrsctElseIfCond">else if (t1 -> data > t2 -> data) {</span>\n'
								+ '\t\t\t<span id="intrsctElseIfT2Next">t2 = t2 -> next;</span>\n'
								+ '\t\t} else {\n'
								+ '\t\t\t<span id="callAddMethod">l3 = add(l3, t1 -> data);</span>\n'
								+ '\t\t\t<span id="intrsctElseT1Next">t1 = t1 -> next;</span>\n'
								+ '\t\t\t<span id="intrsctElseT2Next">t2 = t2 -> next;</span>\n'
								+ '\t\t}\n\t}\n\t<span id="retn2">return l3;</span>\n}</div>');
	} else if (lang == 'cpp') {
		$("#sllOperations").append('<div id="intrsctionMethod">void Sll::intersect(<span id="l1L2Dec">Sll l1, Sll l2</span>) {\n'
								+ '\t<span id="initT1T2L3">nodeptr t1 = l1, t2 = l2;</span>\n'
								+ '\t<span id="intrsctWhileCond">while(<span id="whileInside">t1 != NULL && t2 != NULL</span>) {</span>\n'
								+ '\t\t<span id="intrsctIfCond">if (t1 -> data < t2 -> data) {</span>\n'
								+ '\t\t\t<span id="intrsctIfT1Next">t1 = t1 -> next;</span>\n'
								+ '\t\t} <span id="intrsctElseIfCond">else if (t1 -> data > t2 -> data) {</span>\n'
								+ '\t\t\t<span id="intrsctElseIfT2Next">t2 = t2 -> next;</span>\n'
								+ '\t\t} else {\n'
								+ '\t\t\t<span id="callAddMethod">add(t1 -> data);</span>\n'
								+ '\t\t\t<span id="intrsctElseT1Next">t1 = t1 -> next;</span>\n'
								+ '\t\t\t<span id="intrsctElseT2Next">t2 = t2 -> next;</span>\n'
								+ '\t\t}\n\t}\n}</div>');
	}
}

function preAddMethod() {
	if (lang == 'c') {
		$("#intrsctionMethod").after('<div id="addMethod">nodeptr add(<span id="l3XIn">nodeptr l3, int x</span>) {\n'
									+ '\t<span id="initTQVar">nodeptr t, q = l3;</span>\n'
									+ '\t<span id="nodeCreation">t = (nodeptr)malloc(sizeof(struct list));</span>\n'
									+ '\t<span id="tInfoVal">t -> data = x;</span>\n'
									+ '\t<span id="tNextVal">t -> next = NULL;</span></span>\n'
									+ '\t<span id="addIfCond">if (l3 == NULL) {</span>\n'
									+ '\t\t<span id="ifL3Val">l3 = t;</span>\n'
									+ '\t} else {\n'
									+ '\t\t<div id="addWhileCond" class="position"><span id="elseWhileCond">while(q -> next != NULL) {</span>\n'
									+ '\t<div id="elseWhileQValue" class="position">q = q -> next;</div>\n'
									+ '}</div>\n\t\t<span id="elseQNextVal">q -> next = t;</span>\n'
									+ '\t}\n\t<span id="retn4">return l3;</span>\n}</div>');
	} else if (lang == 'cpp') {
		$("#intrsctionMethod").after('<div id="addMethod">void Sll::add(<span id="l3XIn">int x</span>) {\n'
									+ '\t<span id="initTQVar">nodeptr t, q = first;</span>\n'
									+ '\t<span id="nodeCreation">t = new list;</span>\n'
									+ '\t<span id="tInfoVal">t -> data = x;</span>\n'
									+ '\t<span id="tNextVal">t -> next = NULL;</span></span>\n'
									+ '\t<span id="addIfCond">if (first == NULL) {</span>\n'
									+ '\t\t<span id="ifL3Val">first = t;</span>\n'
									+ '\t} else {\n'
									+ '\t\t<div id="addWhileCond" class="position"><span id="elseWhileCond">while(q -> next != NULL) {</span>\n'
									+ '\t<div id="elseWhileQValue" class="position">q = q -> next;</div>\n'
									+ '}</div>\n\t\t<span id="elseQNextVal">q -> next = t;</span>\n\t}\n}</div>');
	}
}

function firstAndSecondList() {
	var value, val;
	if (lang == 'c') {
		val = 2;
	} else if (lang == 'cpp') {
		val = 3;
	}
	for (var i = 1; i <= val; i++) {
		if (lang == 'c') {
			value = 'first';
		} else if (lang == 'cpp') {
			value = 'l' + i + '<sub>main</sub>';
		}
	$(".list" + i).append('<div class="col-xs-1 padding00 opacity00" id="firstNode'+ i +'">'
						+ '	<div class="text-center col-xs-12 padding00 ct-green-color ct-fonts firstNodeName'+ i +'">' + value + '</div>'
						+ '	<div class="col-xs-12 box padding00" id="firstDiv'+ i +'">'
						+ '	<span  id="firstVal'+ i +'" class="opacity00 ct-green-color ct-fonts position">NULL</span></div></div>'
						+ '<div class="col-xs-11" id="dynamicNodes'+ i +'"></div>');
	 }
}

function createDynamicNodes(selector, nodeNum) {
	var randomAddress = getRandomInt(1000, 5000);
	$(selector).append('<div class="opacity00 col-xs-2 nodes node list-nodes" id="node' + nodeNum 
					+ '" style="top: 0px; width: auto;">'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 ct-blue-color ct-fonts padding00 text-center">'
					+ ' data</div><div class="ct-green-color ct-fonts text-center">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="dataDiv' + nodeNum + '"'
					+ ' class="div-border left-radius col-xs-6 data-div"><span id="data' + nodeNum +'"'
					+ ' class="data-span opacity00 ct-blue-color ct-fonts position" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeNum +'" class="position div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum +'" class="position next-span ct-green-color ct-fonts position"></span></div></div>'
					+ ' <div class="col-xs-12 padding00"><div class="col-xs-6 padding00 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress 
					+ '</span></div></div></div>');
}

function createLastNode(i, nodeName, nodeNumber) {
	$('#nodeAddress' + i).append('<div class="col-xs-1 padding00 margin-top15 opacity00" id="lastNodeMemory' + nodeNumber + '">'
							+ '<div class="col-xs-12 box padding00" id="memDiv' + nodeNumber + '"><span id="nodeVal'
							+ nodeNumber +'" class="ct-brown-color ct-fonts position"></span></div><div id="nodeName' + nodeNumber + '"'
							+ ' class="text-center col-xs-12 padding00 ct-green-color ct-fonts">' + nodeName + '</div></div>');	
	if (nodeNumber == 1) {
		$("#lastNodeMemory" + nodeNumber).addClass("");
	} else {
		$("#lastNodeMemory" + nodeNumber).addClass("margin-left30");
	}
}

function noOfNodeList() {
	$("#NoOfLists").append('<div class="col-xs-12 text-center ct-blue-color ct-fonts padding00 opacity00" id="inMainMet">In Main</div>')
	if (lang == 'cpp') {
		$('#NoOfLists').append('<div class="col-xs-1 padding00 opacity00 margin-left30" id="firstNodeInMain">'
							+ '<div class="col-xs-12 box padding00" id="firstDivMain">'
							+ '<span id="firstValMain" class="ct-green-color ct-fonts position opacity00">NULL</span></div>'
							+ '<div class="text-center col-xs-12 padding00 ct-green-color ct-fonts">first</div></div>');
	}
	for (var i = 0; i < arr.length; i++ ) {
		$('#NoOfLists').append('<div class="col-xs-1 padding00 opacity00 margin-left30 lnodes" id="'+ arr[i] +'Node">'
						+ '<div class="col-xs-12 box padding00"><span id="'
						+ arr[i] +'Val" class="ct-brown-color ct-fonts position lnodevalues"></span></div>'
						+ '<div class="text-center col-xs-12 padding00 ct-green-color ct-fonts" id="'
						+ arr[i] +'nodeName">'+ arr[i] +'</div></div>');
	}
}

function noOfNodesInUnion() {
	$("#NoOfListsInUnion").append('<div class="col-xs-12 text-center ct-blue-color ct-fonts padding00 opacity00" id = "inUnion">In Union</div>')
	for (var i = 0; i < arr.length; i++ ) {
	$('#NoOfListsInUnion').append('<div class="col-xs-1 padding00 opacity00 margin-left30 unionNodes" id="'+ arr[i] +'NodeInUn">'
								+ '<div class="col-xs-12 box padding00"><span id="'
								+ arr[i] +'ValInUn" class="ct-brown-color ct-fonts position"></span></div>'
								+ '<div class="text-center col-xs-12 padding00 ct-green-color ct-fonts" id="'
								+ arr[i] +'nodeNameInUn">'+ arr[i] +'</div></div>');
	}
}

function appendButtons() {
	for (var i = 0; i <= 2; i++) {
		$('#buttonDiv').append('<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="'
							+ buttonNames[i].toLowerCase() +'">'+ buttonNames[i] +' </span></div>');
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		exitOnEsc : false,
		showBullets : false,
		steps : [{
			element: '#headdingSection',
			intro: '',
		},{
			element:'#structTypelist',
			intro: '',
			tooltipClass : "hide",
		},{
			element:'#strcutSpan',
			intro: '',
			tooltipClass : "hide",
		}]
	});
	
	introjs.onafterchange(function (targetElement) {
		introjs.refresh();	
		var elementId = targetElement.id;
			$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "structTypelist" :
					$("#structTypelist, #explanationDiv").removeClass("opacity00");
					setTimeToIntroGoNextStep();
				break;
				case "strcutSpan":
					$('.introjs-tooltip').removeClass('hide');
					var text = "This is the declaration of a new <span class='ct-code-b-yellow'>struct</span> type <span class='ct-code-b-yellow'>"
							+ " list</span>.";
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#typeDefDec");
						$('.introjs-nextbutton').show();
					});
				break;
				case "buttonDiv" :
					clickMethod();
				break;
				case "typeDefDec" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>typedef</span> creates a <span class='ct-code-b-yellow'>nodeptr</span> as a"
								+ " new type <span class='ct-code-b-yellow'>pointer</span> to <span class='ct-code-b-yellow'>struct list</span>.";
					typing('.introjs-tooltiptext', text, function() {
						if (lang == 'c') {
							introNextSteps("#buttonDiv");
						} else if (lang == 'cpp') {
							introNextSteps("#preClassCreation", 'classCreation');
						}
						$('.introjs-nextbutton').show();
					});
				break;
				case "inMain" :
					$("#inMain").removeClass("opacity00");
					customIntroNxtStep("#nodeDec");
				break;
				case "nodeDec" :
					$('.introjs-tooltip').removeClass('hide');
					if (lang == 'c') {
						text = 'Here, we are declaring <span class="ct-code-b-yellow">three</span> variables <span class="ct-code-b-yellow"> '
									+ 'l1</span>, <span class="ct-code-b-yellow">l2</span>, and <span class="ct-code-b-yellow">l3</span> to the '
									+ '<span class="ct-code-b-yellow"> nodeptr</span> type.';
						$(".col-xs-8 div:first").addClass("box-border");
						$("#animationParent").removeClass("opacity00");
					} else if (lang == 'cpp') {
						text = 'Here we are declaring three objects. They are <span class="ct-code-b-yellow">l1</span>'
								+ ' , <span class="ct-code-b-yellow">l2</span> and '
								+ '<span class="ct-code-b-yellow">l3</span> and initialized with <span class="ct-code-b-yellow">NULL</span>.';
					}
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "varDeclr");
						$('.introjs-nextbutton').show();
					});
				break;
				case "nodeToNull" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'Here, we are initializing <span class="ct-code-b-yellow">l1</span>, <span class="ct-code-b-yellow">l2</span>,'
							+ ' and <span class="ct-code-b-yellow">l3</span> to <span class="ct-code-b-yellow"> NULL</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "assignToNull");
						$('.introjs-nextbutton').show();
					});
				break;
				case "printf" + printfCount :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "enterList1Elem" :
							customIntroNxtStep("#consoleId", "displyEntrList"+ printfCount +"Elem");
						break;
						case "enterNodeValText" :
							customIntroNxtStep("#consoleId", "displyEntrNodeVal");
						break;
						case "printL3Text" :
							customIntroNxtStep("#consoleId", "displyL3Text");
						break;
						case "printEmpty" :
							customIntroNxtStep("#consoleId", "printEmptyText");
						break;
						case "printListEle" :
							customIntroNxtStep("#consoleId", "printListEleText");
						break;
						case "printData" :
							customIntroNxtStep("#consoleId", "printListEleData");
						break;
						case "printNull" :
							customIntroNxtStep("#consoleId", "printNullVal");
						break;
						case "IntrsctionEmpty":
							customIntroNxtStep("#consoleId", "displyIntrsctionEmpty");
						break;
						case "printIntrsction":
							customIntroNxtStep("#consoleId", "displayIntrsctionListStmnt");
						break;
					}
				break;
				case "scanf" + printfCount :
						customIntroNxtStep("#consoleId", "enterNodeVal", "left");
				break;
				case "animatinDiv" :
					introjs.refresh();
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "varDeclr" :
							if (lang == 'cpp') {
								firstAndSecondList();
							}
							introjs.refresh();
							initializeTheL1L2AndL3("Node", function() {
								if (lang == 'c') {
									customIntroNxtStep("#nodeToNull");
								} else if (lang == 'cpp') {
									setTimeout(function() {
										introNextSteps("#printf" + printfCount, "enterList"+ printfCount +"Elem");
										introjs.nextStep();
									}, 1200);
								}
							});
						break;
						case "assignToNull" :
							initializeTheL1L2AndL3("Val", function() {
								customIntroNxtStep("#printf" + printfCount, "enterList"+ printfCount +"Elem");
							});
						break;
						case "declrFirstNode" :
							if ($("#callCreateMethos" + returnValCount).hasClass("creating") && lang == 'c') {
								firstAndSecondList();
							}
							setTimeout(function() {
								introjs.refresh();
								$(".firstNodeName2").text("first");
								$("#firstVal" + printfCount).addClass("opacity00");
								zoomInEffect("#firstNode" + printfCount, function() {
									fromEffectWithTweenMax("#l"+ printfCount +"Val", "#firstVal"+printfCount, false, function() {
										if ($("#intersect").hasClass("intersect")) {
											svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv"+ printfCount, "#dataDiv"
													+ ($('.completed').length + 1), "#svgId", "line22", "arrow", function() {
												returnValCount = 0;
												customIntroNxtStep("#initT1T2");
											});
										} else {
											customIntroNxtStep("#initTempAndQnode");
										}
									});
								});
							}, 500);
						break;
						case "tempAndQvarDeclr" :
							zoomInEffect("#lastNodeMemory1" , function() {
								zoomInEffect("#lastNodeMemory2" , function() {
									introjs.refresh();
									customIntroNxtStep("#initXVar");
								});
							});
						break;
						case "xValDec" :
							zoomInEffect("#xNode", function() {
								if ($("#intersect").hasClass("intersect")) {
									customIntroNxtStep("#srtForLoop");
								} else {
									printfCount = 3;
									customIntroNxtStep("#printf3", "enterNodeValText");
								}
							});	
						break;
						case "firstValueStorInL" + returnValCount :
							fadeInBounceEffectWithTimelineMax("#firstVal"+ returnValCount, "#l"+ returnValCount +"Val", function() {
								$(".nodes").removeClass("nodes");
								zoomOutEffect("#firstNode" + returnValCount);
								$("#firstNode" + returnValCount + ", #firstNode" + returnValCount + " span").addClass("opacity00");
								$("#line22, #line" + infoLine + ", #temp" + tempLine + ", #line" + removeLineNum).remove();
								printfCount = ++returnValCount;
								if ($("#intersect").hasClass("intersect")) {
									if ($("#srtMethod").hasClass("sorting")) {
										$(".sorting").removeClass("sorting");
										customIntroNxtStep("#callL2Srt", "callSrt1");
									} else {
										$("#sortingDiv").addClass("hide");
										nodeCount = count = returnValCount = printfCount = 1;
										$("#sllOperations").empty().addClass("opacity00");
										$("#intersect").addClass("intersection");
										customIntroNxtStep("#printMethod1");
									}
								} else if (returnValCount == 2 ) {
									customIntroNxtStep("#printf2", "enterList1Elem");
								} else if (buttonName == "intersect") {
									customIntroNxtStep("#intrsctMainIfCond", 'hide');
								} else {
									$("#sllOperations").empty().addClass("opacity00");
									customIntroNxtStep("#callConcatMethod", "methodCall");
								}
							});
						break;
						case "MemoryAllocation" :
							$("#node" + nodeCount).removeClass("opacity00")
							TweenMax.from("#node" + nodeCount, 1, {top : -30, onComplete:function() {
								$("#nodeVal" + (nodeCount + 1)).removeClass("opacity00")
								fadeInBounceEffectWithTimelineMax("#dataAddress" + nodeCount , "#nodeVal1", function() {
									$("#line" + tempLine).remove();
									svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv"
										+ nodeCount, "#svgId", "line"+ tempLine, "arrow", function() {
										customIntroNxtStep("#xValStreInTempData");
									});
								});
							}});
						break;
						case "storeXVal":
							$("#data" + nodeCount).text($("#nodeDataVal" + (outputLineCount - 1)).val()).addClass("opacity00")
							fromEffectWithTweenMax("#xVal", "#data" + nodeCount, false, function() {
								customIntroNxtStep("#tempNextToNull");
							})
						break;
						case "assignNullToTmpNxt" :
							$("#next" + nodeCount).text("NULL").addClass("opacity00");
							zoomInEffect("#next" + nodeCount, function() {
								customIntroNxtStep("#ifFirstEqlToNull");
							});	
						break;
						case "tempValStredInFirst":
							fadeInBounceEffectWithTimelineMax("#nodeVal1", "#firstVal" + returnValCount ,function() {
								if (lang == 'c' || buttonName == 'intersect') {
									returnToRevilArrow("line"+ lineCount);
								} else {
									if ("#firstVal" + returnValCount == "#firstVal1") {
										returnToRevilArrow("line1111");
										fstSvgIds.push("#line1111");
									} else if ("#firstVal" + returnValCount == "#firstVal2") {
										fstNdeInSecdList = nodeCount;
										svgIds.push("#line222");
										returnToRevilArrow("line222");
									} 
								} 
							});
						break;
						case "tempValStredInQ" :
							fadeInBounceEffectWithTimelineMax("#nodeVal1", "#nodeVal2",function() {
								$("#line" + qLine).remove();
								svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + nodeCount, "#svgId", 
												"line" + qLine, "arrow", function() {
									printfCount = 4;
									nodeCount++;
									customIntroNxtStep("#printf4", "enterNodeValText");
								});
							});
						break;
						case "tempvalstoredInQNext" :
							fadeInBounceEffectWithTimelineMax("#nodeVal1", "#next"+(nodeCount - 1),function() {
								lineClass = true;
								svgAnimatingLineRightToLeft("#animatinDiv", "#nextDiv"+ (nodeCount - 1), "#dataDiv" + nodeCount, "#svgId",
												"line"+ lineCount, "arrow", function() {
									if (buttonName == 'intersect') {
										if (returnValCount % 2 == 0) {
											secSvgIds.push("#line"+ lineCount);
										} else if (returnValCount == 1) {
											svgIds.push('#line' + lineCount)
										}
									} else {
										if (returnValCount % 2 == 0) {
											svgIds.push("#line"+ lineCount);
										} else {
											fstSvgIds.push("#line"+ lineCount);
											
										}
									}
									lineClass = false;
									lineCount++;
									customIntroNxtStep("#tempValStreInQ");
								});
							});
						break;
						case "declrT1AndT2Nodes": //c
							var selector1, selector2;
							$(".firstNodeName2").text("t2");
							$("#nodeVal1").addClass("opacity00");
							zoomInEffect("#lastNodeMemory1", function() {
								zoomInEffect("#firstNode2", function() {
									if (concatflag) {
										selector1 = "#l1ValInUn";
										selector2 = "#l2ValInUn";
									} else {
										selector1 = "#l1Val";
										selector2 = "#l2Val";
									}
									$("#nodeVal1").text($(selector1).text());
									fromEffectWithTweenMax(selector1, "#nodeVal1", false, function() {
										if (($("#firstVal1").text()).trim() != "NULL") {
											svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv1", "#svgId", "line31", "arrow");
										}
										$("#firstVal2").text($(selector2).text());
										fromEffectWithTweenMax(selector2, "#firstVal2", false, function() {
											if (($("#firstVal2").text()).trim() != "NULL") {
												if (buttonName == 'intersect' || lang == 'c') {
													declrT1AndT2NodesArrow(removeLineNum);
												} else {
													declrT1AndT2NodesArrow(222);
												}
											}
											setTimeout(function() {
												customIntroNxtStep("#decNodeT3");
											}, 1200);
										});
									});
								});
							});
						break;
						case 'declrL1AndL2NodesCPP': //cpp
							zoomInEffect("#lastNodeMemory1", function() {
								zoomInEffect("#nodeAddress2 > #lastNodeMemory2", function() {
									if (concatflag) {
										selector1 = "#l1ValInUn";
										selector2 = "#l2ValInUn";
									} else {
										selector1 = "#firstVal1";
										selector2 = "#firstVal2";
									}
									$("#nodeVal1").text($(selector1).text());
									fromEffectWithTweenMax(selector1, "#nodeVal1", false, function() {
										if (($("#firstVal1").text()).trim() != "NULL") {
											svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv1", "#svgId", "line31", "arrow");
										}
										$("#nodeAddress2 #nodeVal2").text($(selector2).text());
										fromEffectWithTweenMax(selector2, "#nodeAddress2 #nodeVal2", false, function() {
											if (($("#firstVal2").text()).trim() != "NULL") {
												svgAnimatingLineTopToBottom("#animatinDiv", "#nodeAddress2 > #lastNodeMemory2", "#nextDiv"
														+ fstNdeInSecdList, "#svgId", "line32", "arrow");
												customIntroNxtStep("#ifT1IsNull");
											} else {
												customIntroNxtStep("#ifT1IsNull");
											}
										});
									});
								});
							});
						break;
						case "declrL1AndL2Nodes" :
							$("#inUnion, #inMainMet").removeClass("opacity00");
							zoomInEffect("#l1NodeInUn", function() {
								zoomInEffect("#l2NodeInUn", function() {
									var selector1, selector2;
									if (lang == 'c') {
									 	selector1 = "#l1Val";
									 	selector2 = "#l2Val";
									} else if (lang == 'cpp') {
										selector1 = '#firstVal1';
										selector2 = '#firstVal2';
									}
									$("#l1ValInUn").text($(selector1).text());
									fromEffectWithTweenMax(selector1, "#l1ValInUn", false, function() {
										$("#l2ValInUn").text($(selector2).text());
										fromEffectWithTweenMax(selector2, "#l2ValInUn", false, function() {
											customIntroNxtStep("#decForNodes");
										});
									});
								});
							});
						break;
						case "declrT3Nodes" :
							$("#firstVal1").addClass("opacity00");
							$(".firstNodeName1").text("t3");
							zoomInEffect("#firstNode1", function() {
								customIntroNxtStep("#ifT1IsNull");
							});
						break;
						case "declrFourNodes" :
							if (lang == 'c') {
								zoomInEffect("#l3NodeInUn", function() {
									declrFourNodesAnim();
								});
							} else if (lang == 'cpp') {
								declrFourNodesAnim();
							}
						break;
						case "streT1ToT3" :
							var selector;
							if (lang == 'c') {
								var text = $("#firstVal1").text($("#nodeVal1").text().trim());
								fromEffectWithTweenMax("#nodeVal1", "#firstVal1", false, function() {
									streT1ToT3Anim(text);
								});
							} else if (lang == 'cpp') {
								var text = $("#nodeVal1").text().trim();
								fadeInBounceEffectWithTimelineMax("#nodeVal1", '#firstVal3', function() {
									streT1ToT3Anim(text);
								});
							}
						break;
						case "streT1nextToT1":
							$("#nodeVal1").parent().effect( "highlight",{color: 'blue'}, 500, function() {
								svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv"+count , "#svgId", "line1"
										+ count, "arrow", function(){
									$("#line1" + count).remove();
									fadeInBounceEffectWithTimelineMax("#next" + count, "#nodeVal1", function() {
										count++;
										$("#line31").remove();
								        svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + count, "#svgId", "line31",
								        				"arrow", function() {
								        	customIntroNxtStep("#whileT1NxtNotEqNull", "concatWhileCon");
								        });
									});
								});
							});
						break;
						case "streT2NextToT1Nxt" :
							var selector;
							if (lang == 'c') {
								selector = '#firstVal2';
							} else if (lang == 'cpp') {
								selector = '#nodeAddress2 #nodeVal2';
							}
							fadeInBounceEffectWithTimelineMax(selector, "#next"+(fstNdeInSecdList - 1), function() {
								svgAnimatingLineBottomToTop("#animatinDiv", "#nextDiv" + (fstNdeInSecdList - 1) 
										, "#nextDiv"+fstNdeInSecdList , "#svgId", "line0", "arrow", function() {
									$("#line0").attr("class", "svg-line lineNumber");
									tCount = 3;
									if (lang == 'c') {
										customIntroNxtStep("#returnT3", "concatWhileCon");
									} else if (lang == 'cpp') {
										$("#line31, #line32").remove();
										$('#nodeAddress2').empty();
										$("#lastNodeMemory1").addClass("opacity00");
										if (concatflag) {
											$("#concatCode").remove();
											customIntroNxtStep("#nodeRepeation");
										} else {
											printfCount = 5;
											customIntroNxtStep("#printf5", "printL3Text");
										}
									}
								});
							});
						break;
						case "storeT1Value" :
							$('#animatinDiv').removeClass('z-index1000000');
							var selector = '#firstVal1';
							if ($('#firstVal1').text().trim() == "NULL" && $('#firstVal1').text().trim() != "NULL" ) {
								var selector = '#firstVal2';
							}
							fadeInBounceEffectWithTimelineMax(selector, '#firstVal3', function() {
								customIntroNxtStep("#p3");
								
							});
						break;
						case "storeT3ToL3" :
							var selector, selector1;
							if (concatflag) {
								if (lang == 'c') {
									selector = "#l3ValInUn";
								} else {
									selector = '#firstVal3';
								}
							} else if (lang == 'c') {
								selector = "#l3Val"; 
							} else if (lang == 'cpp') {
								selector = '#firstVal3';
							}
							if (lang == 'c') {
								if ($("#nodeVal1").text().trim() == "NULL") {
									selector1 = "#firstVal2";
								} else if ($("#firstVal2").text().trim() == "NULL") {
									selector1 = "#nodeVal1";
								} else {
									selector1 = "#firstVal1";
								}
							} else if (lang == 'cpp') {
								if ($("#nodeVal1").text().trim() == "NULL") {
									selector1 = "#nodeAddress2 #nodeVal2";
								} else if ($("#firstVal2").text().trim() == "NULL") {
									selector1 = "#nodeVal1";
								} else {
									selector1 = '#firstVal3'
								}
							}
							fadeInBounceEffectWithTimelineMax(selector1, selector, function() {
								setTimeout(function() {
									valStoreInT3Node();
								}, 300);
							});
						break;
						case "storeUnionl3Value" :
							fadeInBounceEffectWithTimelineMax("#l3ValInUn", "#l3Val", function() {
								$("#line22, #line23").remove();
								$("#lastNodeMemory2, #lastNodeMemory3, #lastNodeMemory4").addClass("opacity00");
								customIntroNxtStep("#p3");
							});
						break;
						case "dspFstNode" :
							if (buttonName != 'intersect') {	
								nodeCount = 1;
							}
							$("#animatinDiv").removeClass("z-index1000000");
							$("#firstVal" + nodeCount).addClass("opacity00");
							$(".firstNodeName" + nodeCount).text("first");
							zoomInEffect("#firstNode" + nodeCount, function() {
 								$("#firstVal" + nodeCount).text($("#l" + printfCount + "Val").text());
								fromEffectWithTweenMax("#l" + printfCount + "Val","#firstVal" + nodeCount, false, function() {
									if ($("#firstVal" + nodeCount).text().trim() != "NULL") {
										$("#line21").remove();
										svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv" + nodeCount, "#dataDiv" + count, "#svgId",
														"line21", "arrow", function() {
											if (lang == 'c' && buttonName == 'intersect') {
												svgIds.push('#line21');
											}
											customIntroNxtStep("#nodeQ");
	                      				});	
									} else {
										customIntroNxtStep("#nodeQ");
									}
				                });
							});
						break;
						case "decAndStreQVal" :
							$("#nodeName1").text("q");
							$("#nodeVal1").addClass("opacity00");
							if ($("#intersect").hasClass("intersection")) {	
								zoomInEffect("#lastNodeMemory" + returnValCount, function() {
									var selector, t;
									if (lang == 'c') {
										selector = "#firstVal" + nodeCount;
										if (buttonName == 'intersect') {
											t = count;
										} else {
											t = nodeCount;
										}
									} else if (lang == 'cpp') {
										selector = '#firstVal' + printfCount;
										if (buttonName == 'intersect') {
											t = count;
										} else {
											t = nodeCount;
										}
									}
									$("#nodeVal" + returnValCount).text($(selector).text());
									fromEffectWithTweenMax(selector, "#nodeVal" + returnValCount, false, function() {
										$("#line22").remove();
										if ($(selector).text() != 'NULL') {
											if (buttonName == 'intersect') {
												svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount,
													"#nextDiv" + t, "#svgId", "line22", "arrow", function() {
													customIntroNxtStep("#firstIsNull");
												});
											} else {
												svgAnimatingLineLeftToRight("#animatinDiv", "#lastNodeMemory" + returnValCount,
														"#nextDiv" + t, "#svgId", "line22", "arrow", function() {
														customIntroNxtStep("#firstIsNull");
												});
											}
										} else {
											customIntroNxtStep("#firstIsNull");
										}
									});
								});	
							} else { 
								var selector;
								if (lang == 'c') {
									selector = '#firstVal1';
								} else if (lang == 'cpp') {
									selector = '#firstVal3';
								}
								zoomInEffect("#lastNodeMemory1" , function() {
									$("#nodeVal1").text($(selector).text());
									fromEffectWithTweenMax(selector, "#nodeVal1", false, function() { 
										if (lang == 'c') {
											var isL2NodeData = $("#l2Val").text().trim() != "NULL" && $("#l1Val").text().trim() == "NULL";
										} else if (lang == 'cpp') {
											var isL2NodeData = $("#firstVal2").text().trim() != "NULL" && $("#firstVal1").text().trim() == "NULL";
										}
										$("#line22").remove();
										if (isL2NodeData) {
											if (buttonName == 'intersect') {
												svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#dataDiv" + count, "#svgId",
															"line22", "arrow", function() {
													introNextSteps("#firstIsNull");
										        	setTimeToIntroGoNextStep();
												});
											} else {
												svgAnimatingLineTopToBottom("#animatinDiv", "#memDiv1", "#nextDiv" + count, "#svgId", "line22",
															"arrow", function() {
													introNextSteps("#firstIsNull");
										        	setTimeToIntroGoNextStep();
												});	
											}
										} else {
											if ($("#firstVal1").text().trim() != "NULL") {
												svgAnimatingLineTopToBottom("#animatinDiv", "#memDiv1", "#nextDiv" + count, "#svgId", "line22", 
															"arrow", function() {
													introNextSteps("#firstIsNull");
										        	setTimeToIntroGoNextStep();
												});
											} else if ($("#firstVal1").text().trim() == "NULL" && $("#firstVal2").text().trim() != "NULL") {
												svgAnimatingLineRightToLeft("#animatinDiv", "#memDiv1", "#dataDiv" + count, "#svgId", "line22",
															"arrow", function() {
													introNextSteps("#firstIsNull");
										        	setTimeToIntroGoNextStep();
												});
											} else {
												introNextSteps("#firstIsNull");
									        	setTimeToIntroGoNextStep();
											}
										}
									});
								});
							}
						break;
						case "qNxtToQNode" :
							$("#animatinDiv").removeClass("z-index1000000");
							 $("#nodeVal" + returnValCount).parent().effect( "highlight",{color: 'blue'}, 500, function() {
								 if ($("#intersect").hasClass("intersection")) {
									 svgWithFadeInEffect("#lastNodeMemory" + returnValCount, "#nextDiv" + count, "2222", "#next" + count,
											 	"#nodeVal" + returnValCount, function() {
								 		count++;
								 		$('#line22, #line2222').remove();
								 		if ($('#next' + (count - 1)).text() != 'NULL') {
								 			svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" + count, 
								 							"#svgId", "line22", "arrow", function() {
								 				customIntroNxtStep("#whileQNotEqNull");
								 			});
								 		} else {
								 			customIntroNxtStep("#whileQNotEqNull");
								 		}
								 		
									 });
								 } else {
								 	changeQNodeAddressToQNextAdd();
								 }
							});
						break;
						//intersection steps
						case "mainIfCond":
							$('.introjs-tooltip').removeClass("hide");
							mainIfCondChecking("mainIfCond", "#l1Val", "#l2Val", "#intrsctMainIfCond");
						break;
						case "declareT1T2":
							zoomInEffect("#lastNodeMemory1" , function() {
								zoomInEffect("#lastNodeMemory2" , function() {
									customIntroNxtStep("#initX");
								});
							});
						break;
						case "l1L2Nodes":
							var t = $("#dynamicNodes1 .data-span").length + 1;
							if (lang == 'c') {
								$(".firstNodeName1").text('l1').append('<sub>intersect</sub>');
								$(".firstNodeName2").text('l2').append('<sub>intersect</sub>');
								$("#firstVal1").text($("#l1Val").text()).addClass("opacity00");
								$("#firstVal2").text($("#l2Val").text()).addClass("opacity00");
								zoomInEffect("#firstNode1", function() {
									fromEffectWithTweenMax("#l1Val", "#firstVal1", false, function() {
										svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv1", "#dataDiv1", "#svgId", "line31", "arrow", function() {
											zoomInEffect("#firstNode2", function() {
												fromEffectWithTweenMax("#l2Val", "#firstVal2", false, function() {
													svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv2", "#dataDiv" + t, "#svgId",
																	"line32", "arrow", function() {
														secSvgIds.push('#line32');
														customIntroNxtStep("#initT1T2L3");
													});
												});
											});
										});
									});
								});
							} else if (lang == 'cpp') {
								$("#nodeVal3").text($("#firstVal1").text()).addClass("opacity00");
								$("#nodeVal4").text($("#firstVal2").text()).addClass("opacity00");
								zoomInEffect("#lastNodeMemory3", function() {
									fromEffectWithTweenMax("#firstVal1", "#nodeVal3", false, function() {
										svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory3", "#nextDiv1", "#svgId", "line31", 
													"arrow", function() {
											zoomInEffect("#lastNodeMemory4", function() {
												fromEffectWithTweenMax("#firstVal2", "#nodeVal4", false, function() {
													svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory4", "#nextDiv" + t, "#svgId",
																	"line32", "arrow", function() {
														secSvgIds.push('#line32');
														customIntroNxtStep("#initT1T2L3");
													});
												});
											});
										});
									});
								});
							}
						break;
						case "DecT1T2L3":
							nodeCount++;
							printfCount++;
							if (lang == 'c') {
								$("#lastNodeMemory0").removeClass("margin-left30");
								zoomInEffect("#lastNodeMemory1" , function() {
									$("#nodeVal1").text($("#l1Val").text()).addClass("opacity00");
									fromEffectWithTweenMax("#l1Val", "#nodeVal1", false, function() {
										$("#line45, #line46").remove();
										svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1 div:first", "#nextDiv1", "#svgId", "line45",
															"arrow", function() {
											zoomInEffect("#lastNodeMemory2" , function() {
												$("#nodeVal2").text($("#l2Val").text()).addClass("opacity00");
												fromEffectWithTweenMax("#l2Val", "#nodeVal2", false, function() {
													var t = $('#dynamicNodes2 .next-div:first').attr('id')
													svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2 div:first", "#" + t, "#svgId",
																		"line46", "arrow", function() {
														$("#nodeName0").append('<sub>intersect</sub>');
														zoomInEffect("#lastNodeMemory0", function() {
															$("#nodeVal0").text("NULL").addClass("opacity00");
															zoomInEffect("#nodeVal0", function() {
																customIntroNxtStep("#intrsctWhileCond");
															});
														});
													});
												});
											});
										});
									});
								});
							} else if (lang == 'cpp') {
								var t = $("#dynamicNodes1 .data-span").length + 1;
								$('#lastNodeMemory1').addClass('margin-left30');
								zoomInEffect("#lastNodeMemory1" , function() {
									$("#nodeVal1").text($("#firstVal1").text()).addClass("opacity00");
									fromEffectWithTweenMax("#nodeVal3", "#nodeVal1", false, function() {
										$("#line45, #line46").remove();
										svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv1", "#svgId", "line45", 
														"arrow", function() {
											zoomInEffect("#lastNodeMemory2" , function() {
												$("#nodeVal2").text($("#firstVal2").text()).addClass("opacity00");
												fromEffectWithTweenMax("#nodeVal4", "#nodeVal2", false, function() {
													svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + t, "#svgId", 
																	"line46", "arrow", function() {
														customIntroNxtStep("#intrsctWhileCond");
													});
												});
											});
										});
									});
								});
							}
						break;
						case "whileCondCheck":
							$('.introjs-tooltip').removeClass("hide");
							mainIfCondChecking("whileCondCheck", "#nodeVal1", "#nodeVal2", "#whileInside");
						break;
						case "intrsctIfCheck":
							$('.introjs-tooltip').removeClass("hide");
							ifCondText("t1 -> data", "<", "t2 -> data", function() {
								ifCondAnimation("intrsctIfCheck", "#intrsctIfCond");
							});
						break;
						case "t1Next":
							t1NxtAnimation(function() {
								customIntroNxtStep("#intrsctWhileCond");
							});
						break;
						case "intrsctIfElseCheck":
							$('.introjs-tooltip').removeClass("hide");
							ifCondText("t1 -> data", ">", "t2 -> data", function() {
								ifCondAnimation("intrsctIfElseCheck", "#intrsctElseIfCond");
							});
						break;
						case "t2Next":
							t2NxtAnimation(function() {
								customIntroNxtStep("#intrsctWhileCond");
							});
						break;
						case "l3XDec":
							if (lang == 'c') {
								$(".firstNodeName3").text('').append('l3<sub>add</sub>');
								zoomInEffect("#firstNode3", function() {
									$("#firstVal3").text($("#nodeVal0").text());
									fromEffectWithTweenMax("#nodeVal0", "#firstVal3", false, function() {
										if ($('.nodes').length > 0) {
											svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv3", "#dataDiv" + ($('.completed').length + 1), 
													"#svgId", "line44", "arrow");
										}
										xDecInAdd();
									});
								});
							} else if (lang == 'cpp') {
								xDecInAdd();
							}
						break;
						case "decTQ":
							var t = $('#dynamicNodes3 .next-div:first').attr('id');
							zoomInEffect("#lastNodeMemory6", function() {
								zoomInEffect("#lastNodeMemory5", function() {
									$("#nodeVal5").text($("#firstVal3").text()).addClass("opacity00");
									fromEffectWithTweenMax("#firstVal3", "#nodeVal5", false, function() {
										if ($('.nodes').length > 0 && $('#firstVal3').text() != 'NULL') {
											svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory5", "#" + t, "#svgId", "line" + infoLine,
															"arrow", function() {
												customIntroNxtStep("#nodeCreation");
											});
										} else {
											customIntroNxtStep("#nodeCreation");
										}
									});
								});
							});
						break;
						case "tempMemoryAlloc":
							$("#node" + lineCount).removeClass("opacity00");
							TweenMax.from("#node" + lineCount, 1, {top : -30, onComplete:function() {
								$("#nodeVal6").text($("#dataAddress" + lineCount).text()).addClass("opacity00");
								fromEffectWithTweenMax("#dataAddress" + lineCount, "#nodeVal6", false, function() {
									$("#line" + tempLine).remove();
									svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory6", "#nextDiv" + lineCount, "#svgId",
													"line" + tempLine, "arrow", function() {
										customIntroNxtStep("#tInfoVal");
									});
								});
							}});
						break;
						case "tInfoValue":
							$("#data" + lineCount).removeClass("opacity00");
							$("#data" + lineCount).text($("#xVal").text()).addClass("opacity00");
							fromEffectWithTweenMax("#xVal", "#data" + lineCount, false, function() {
								customIntroNxtStep("#tNextVal");
							});
						break;
						case "tNextValue":
							$("#next" + lineCount).text("NULL").addClass("opacity00");
							zoomInEffect("#next" + lineCount, function() {
								customIntroNxtStep("#addIfCond");
							});
						break;
						case "addIfCheck":
							var value;
							if (lang == 'c') {
								value = 'l3';
							} else if (lang == 'cpp') {
								value = 'first';
							}
							$('.introjs-tooltip').removeClass("hide");
							ifCondText(value, " == ", "NULL", function() {
								toEffectAnimation("#addIfCond", "#mainCond", function() {
									$("#frstCond").effect("highlight", {color: 'yellow'}, 300, function() {
										effectAndRotation("#firstVal3", "blue", "#frstCond", $("#firstVal3").text(), function() {
											var frstVal = $("#firstVal3").text() == "NULL";
											text1 = "Condition evaluates to ";//ifCondition
											if (frstVal) {
												$("#whileTrueOrFalse").html(" ====> <span class='ct-lime-color ct-fonts'>true</span>");
												introNextSteps("#ifL3Val");
												text2 = "<span class='ct-lime-color ct-fonts'>true</span>. Hence the control enters into"
														+ " the if-block";
											} else {
												$("#whileTrueOrFalse").html(" ====> <span class='ct-code-b-red ct-fonts'>false</span>");
												introNextSteps("#addWhileCond");
												text2 = "<span class='ct-code-b-red ct-fonts'>false</span>. Hence the control comes"
														+ " out of the if-block.";												
											}
											text = text1 + text2;
											typing('#appendText', text, function() {
												$('.introjs-nextbutton').show();
											});
										});
									});
								});
							});
						break;
						case "l3ValueInIf":
							fadeInBounceEffectWithTimelineMax("#nodeVal6", "#firstVal3", function() {
								svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv3", "#dataDiv" + ($('.completed').length + 1), 
										"#svgId", "line44", "arrow", function() {
									if (lang == 'cpp') {
										thirdSvgIds.push('#line44');
									}
									addMethodRtnVal();
								});
							});
						break;
						case "elseT1Next":
							t1NxtAnimation(function() {
								customIntroNxtStep("#intrsctElseT2Next");
							});
						break;
						case "elseT2Next":
							t2NxtAnimation(function() {
								customIntroNxtStep("#intrsctWhileCond");
							});
						break;
						case "addWhileCheck":
							$('.introjs-tooltip').removeClass("hide");
							ifCondText("q -> next", " != ", "NULL", function() {
								toEffectAnimation("#elseWhileCond", "#mainCond", function() {
									$("#frstCond").effect("highlight", {color: 'yellow'}, 300, function() {
										$("#nodeVal5").effect("highlight", {color: 'blue'}, 500, function() {
											var t =  $("#dynamicNodes3 .nodes .next-span:first").parent().attr('id');
											svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory5", "#" + t, "#svgId", "line" + qLine,
															"arrow", function() {
												$("#line" + qLine).remove();
												effectAndRotation("#" + t, "blue", "#frstCond", $("#" + t + " .next-span").text(), function() {
													var frstVal = $("#dynamicNodes3 > .nodes .next-span:first").text() != "NULL";
													text1 = "Condition evaluates to ";//ifcondition
													if (frstVal) {
														$("#whileTrueOrFalse").html(" ====> <span class='ct-lime-color ct-fonts'>true</span>");
														introNextSteps("#elseWhileQValue");
														text2 = "<span class='ct-lime-color ct-fonts'>true</span>. Hence the control enters into"
																+ " the if-block";
													} else {
														$("#whileTrueOrFalse").html(" ====> <span class='ct-code-b-red ct-fonts'>false</span>");
														introNextSteps("#elseQNextVal");
														text2 = "<span class='ct-code-b-red ct-fonts'>false</span>. Hence the control comes"
																+ " out of the if-block.";												
													}
													text = text1 + text2;
													typing('#appendText', text, function() {
														$('.introjs-nextbutton').show();
													});
												});
											});
										});
									});
								});
							});
						break;
						case "elseWhileQVal":
							var l = $("#dynamicNodes3 .nodes:first .next-span").attr('id');
							$("#nodeVal5").effect("highlight", {color: 'blue'}, 500, function() {
								fadeInBounceEffectWithTimelineMax("#" + l, "#nodeVal5", function() {
									$('#dynamicNodes3 .nodes:first').removeClass('nodes');
									var t = $('#dynamicNodes3 .nodes:first .next-span').parent().attr('id');
									$("#line54, #line" + infoLine).remove();
									if ($('#' + l).text() != 'NULL') {
										svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory5", "#" + t, "#svgId", "line54", "arrow", function() {
											customIntroNxtStep("#elseWhileCond");
										});
									} else {
										customIntroNxtStep("#elseWhileCond");
									}
								});
							});
						break;
						case "qNxtValue":
							var l = $("#dynamicNodes3 .nodes:first .next-span").parent().attr('id');
							if (lineCount >= 11) {
								t = lineCount + 1;
							} else {
								t = lineCount;
							}
							$("#dynamicNodes3 > div").addClass("nodes");
							fadeInBounceEffectWithTimelineMax("#nodeVal6", "#next" + (lineCount - 1), function() {
								svgAnimatingLineRightToLeft("#animatinDiv", "#nextDiv" + (lineCount - 1), "#dataDiv"
										+ lineCount, "#svgId", "line"+ t, "arrow", function() {
									thirdSvgIds.push("#line" + t);
									addMethodRtnVal();
								});
							});
						break;
						case "l3AddValueStore":
							fadeInBounceEffectWithTimelineMax("#firstVal3", "#nodeVal0", function() {
								setTimeout(function() {
									$("#line44, #line54, #line" + infoLine + ", #line" + tempLine).remove();
									$("#nodeAddress3, #firstVal3").empty();
									introjs.refresh();
									zoomOutEffect("#firstNode3");
									$("#firstNode3").addClass("opacity00");
									customIntroNxtStep("#intrsctElseT1Next");
								}, 500);
							});
						break;
						case "l3IntrsctValueStore":
							fadeInBounceEffectWithTimelineMax("#nodeVal0", "#l3Val", function() {
								setTimeout(function() {
									$("#nodeAddress1").empty();
									rechangeSVGLineHeights(secSvgIds, "#dynamicNodes2 .node");
									rechangeSVGLineHeights(thirdSvgIds, "#dynamicNodes3 .node");
									introjs.refresh();
									printfCount = 6;
									customIntroNxtStep("#printf6", "printIntrsction");
								}, 500);
							});
						break;
						case 'cppFstInitNDec':
							transferEffect('#cppFstDec', '#firstNodeInMain', function() {
								transferEffect('#cppFstInit', '#firstValMain', function() {
									customIntroNxtStep('#buttonDiv');
								});
							});
						break;
						case 'storeXValAnim':
							$("#nodeDataVal" + (outputLineCount - 1)).attr("disabled", true);
							$("#xVal").text($("#nodeDataVal" + (outputLineCount - 1)).val());
							fromEffectWithTweenMax('#nodeDataVal' + (outputLineCount - 1), '#xVal', false, function() {
								customIntroNxtStep("#whileXNotEqlToMinusOne", "whileForInsertNode", "bottom");
							});
						break;
					}
				break;
				case "consoleId" :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "displyEntrList"+ printfCount +"Elem" :
							$("#consoleId").removeClass("opacity00");
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Enter list ' + printfCount +' elements : </span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								outputLineCount++;
								customIntroNxtStep("#callCreateMethos" + printfCount, "callCreate" + printfCount);
							});
						break;
						case "displyEntrNodeVal" :
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Enter element : </span>'
									+'<input class="user-text opacity00"'
									+ ' id= "nodeDataVal'+ outputLineCount +'" placeholder="Number" maxlength="3"></span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								outputLineCount++;
								customIntroNxtStep("#scanf" + printfCount);
							});
						break;
						case "enterNodeVal" :
							$('.introjs-tooltip').removeClass('hide');
							var t = $("#dynamicNodes" + returnValCount + " .nodes").length == 5;
							if (t) {
								addNegativeValuEvent("#nodeDataVal" + (outputLineCount - 1))
								var text = "Here, we are restricted to allow only <span class='ct-code-b-yellow'>5</span> nodes. So, "
										+ "please enter the <span class='ct-code-b-yellow'>node data</span> as "
										+ "<span class='ct-code-b-yellow'>-1</span> only.";
							} else {
								enterValidNumberOrNot("#nodeDataVal" + (outputLineCount - 1));
								var text = "Enter the <span class='ct-code-b-yellow'>node data</span> value or enter " 
											+ "<span class='ct-code-b-yellow'>-1</span> to exit.";
							}
							typing('.introjs-tooltiptext', text, function() {
								$("#nodeDataVal" + (outputLineCount - 1)).removeClass("opacity00").focus();
								introNextSteps("#animatinDiv", "storeXValAnim");
							});
						break;
						case "displyL3Text" :
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Elements in list3 :  </span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								outputLineCount++;
								printfCount = 3;
								count = returnValCount = nodeCount = 1;
								$("#sllOperations").empty().addClass("opacity00");
								customIntroNxtStep("#printFunction", "callPrintFun");
							});
						break;
						case "printEmptyText" :
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">List is empty</span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								customIntroNxtStep("#buttonDiv");
							});
						break;
						case "printListEleText" :
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Elements in list are : '
									+ '<span class="position list-elem" id="displaydata' + count + '"></span></span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								customIntroNxtStep("#whileQNotEqNull");
							});
						break;
						case "printListEleData" :
							$("#animatinDiv").addClass("z-index1000000");
							$(".list-elem").append('<span id="outData' + count + '"></span><span class="opacity00" id="arrow' + count 
											+ '">--->&nbsp;</span>');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								$("#nodeVal" + returnValCount).parent().effect( "highlight",{color: 'blue'}, 500, function() {
									if ($("#intersect").hasClass("intersection")) {
										svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv"
												+ count, "#svgId", "line23", "arrow", function() {
											$("#line23").remove();
											$("#dataDiv" + count).effect( "highlight",{color: 'blue'}, 500, function() {
												$("#outData" + count).text($("#dataDiv" + count).text()).addClass('opacity00 position');
												fromEffectWithTweenMax("#dataDiv" + count, "#outData" + count, false, function() {
													$("#outData" + count).css("color", "yellow");
										           	zoomInEffect("#arrow" + count, function() {
										           		customIntroNxtStep("#qNxtToQ");
										           	});
										    	});
											});
										});
									} else {
										printL1AndL2Nodes();
									}
								});
							});
						break;
						case "printNullVal" :
							$("#animatinDiv").addClass("z-index1000000");
							$(".list-elem").append('<span id="null'+ (count - 1) +'">NULL</span>\n');
							outputLineCount++;
							zoomInEffect("#null" + (count - 1), function() {
								if (buttonName == "concat" || buttonName == "union") {
									$("#animatinDiv").removeClass("z-index1000000");
									customIntroNxtStep("#buttonDiv");
								} else {
									$('.list-elem').removeClass("list-elem");
									if ($("#concat").is(":not(.concatination)")) {
										$("#nodeAddress" + nodeCount).empty();
										introjs.refresh();
									}
									if (nodeCount == 3) {
										secSvgIds.pop();	
									}
									rechangeSVGLineHeights(secSvgIds, "#dynamicNodes2 .node");
									$("#line22, #line21").remove();
									if (lang == 'c') {
										$("#firstNode" + nodeCount).addClass("opacity00");
									}
									if (flag) {
										flag = false;
										printfCount = 2;
										nodeCount++;
										$("#sllOperations").empty();
										customIntroNxtStep("#printMethod2", "printmethd3")
									} else if((count - 1) == $('.completed').length) {
										nodeCount++;
										customIntroNxtStep("#callIntrsctMethod", 'methodCalling');
									} else {
										rechangeSVGLineHeights(thirdSvgIds, "#dynamicNodes3 .node");
										customIntroNxtStep("#buttonDiv");
									}
								}
							});
						break;
						case "displyUnionText" :
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Unions list : </span>\n');
							$("#consoleBodyDiv").scrollTo($("#consoleBodyDiv > span:last()"), 500, function() {
								$("#sllOperations").addClass("opacity00").empty();
								customIntroNxtStep("#p4");
							});
						break;
						//intersection
						case "displyIntrsctionEmpty":
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Intersection list is empty</span>\n');
							outputLineCount++;
							lineCount = 0;
							customIntroNxtStep("#retn0", 'return0');
						break;
						case "displayIntrsctionListStmnt":
							$("#consoleBodyDiv").append('<span id="output'+ outputLineCount +'">Intersection list : </span>\n');
							outputLineCount++;
							$("#sllOperations").empty('');
							printfCount = nodeCount = 3;
							returnValCount = 1;
							count = $('.completed').length + 1;
							$('.completed').removeClass("completed");
							customIntroNxtStep("#printMethod3", "printmethd3")
						break;
					}
				break;
				case "callCreateMethos" + returnValCount :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "callCreate" + returnValCount :
							$('.introjs-tooltip').removeClass('hide');
							$("#callCreateMethos1").addClass("creating");
							if (lang == 'c') {
								text = 'Here, we are calling the  <span class="ct-code-b-yellow">create()</span> method and '
										+ ' passing <span class="ct-code-b-yellow">l'+ returnValCount +'</span> data (i.e.,' 
										+ ' <span class="ct-code-b-yellow">NULL</span>) as an argument and the'
										+ ' <span class="ct-code-b-yellow">return</span> value is stored in the'
										+ ' variable <span class="ct-code-b-yellow">l'+ returnValCount +'</span>.';
							} else if (lang == 'cpp') {
								text = 'Here, we are calling the  <span class="ct-code-b-yellow">create()</span> method.';
							}
							typing('.introjs-tooltiptext', text, function() {
								$("#sllOperations").empty();
								preSingleLinkedListOperations();
								introNextSteps("#sllOperations", "addNodes", "right");
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnValueStoreIn" :
							$(".creating").removeClass("creating");
							$('.introjs-tooltip').removeClass('hide');
							var text = 'The <span class="ct-code-b-yellow">create()</span> method returns the value '
									+ ' (i.e., <span class="ct-code-b-yellow"> '+$("#firstVal" + returnValCount).text() + '</span>)' 
									+ ' that value should be stored in the variable <span class="ct-code-b-yellow">l' + returnValCount + '</span>.';	
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "firstValueStorInL" + returnValCount);
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "sllOperations" :
					$("#sllOperations").removeClass("opacity00");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "addNodes" :
							if (lang == 'c') {
								customIntroNxtStep("#firstNode");
							} else if (lang == 'cpp') {
								customIntroNxtStep("#initTempAndQnode");
							}
						break;
						case "concatNode":
							if (buttonName == "concat") {
								customIntroNxtStep("#concatTwoNodes");
							} else {
								customIntroNxtStep("#unionTwoNodes");
							}
						break;
						case "displayPrintFun" :
							if (lang == 'c') {
								customIntroNxtStep("#printNode");
							} else if (lang == 'cpp') {
								customIntroNxtStep("#nodeQ");
							}
						break;
						case "unionNode" :
							customIntroNxtStep("#unionTwoNodes");
						break;
					}
				break;
				case "firstNode" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring <span class="ct-code-b-yellow">first</span> node and that will be initialized to'
							+ ' <span class="ct-code-b-yellow">create(l1)</span> method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "declrFirstNode", "right");
						$('.introjs-nextbutton').show();
					});					
				break;
				case "initTempAndQnode" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'Here, we are declaring <span class="ct-code-b-yellow">two</span> variables <span class="ct-code-b-yellow">'
						+ 'temp</span> and <span class="ct-code-b-yellow">q</span> to the <span class="ct-code-b-yellow"> nodeptr</span> type.';
					typing('.introjs-tooltiptext', text, function() {
						createLastNode(returnValCount, "temp2", 4);
						createLastNode(returnValCount, "q", 2);createLastNode(returnValCount, "temp1", 3);
						createLastNode(returnValCount, "temp", 1);
						introNextSteps("#animatinDiv", "tempAndQvarDeclr");
						$('.introjs-nextbutton').show();
					});
				break;
				case "initX":
				case "initXVar" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "Here, we declaring an int variable <span class='ct-code-b-yellow'>x</span>.";
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "xValDec");
						$('.introjs-nextbutton').show();
 					});
				break;
				case "whileXNotEqlToMinusOne" :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "whileForInsertNode" :
							whileConditionCheckingText("x", " != -1", function() {
								toEffectAnimation("#xNotEqToOne", "#whileConForAddNode", function() {
									nextBtnWithoutCalling(function() {
										checkWhileCondForisDataValIsNullOrNot();
									});
								});	
							});
						break;
					}
				break;
				case "returnFirst" :
					$("#xNode").addClass("opacity00");
					$("#xVal, #nodeAddress" + returnValCount).empty();
					$("#line" + tempLine + ", #line" + qLine).remove();
					customIntroNxtStep("#callCreateMethos" + returnValCount, "returnValueStoreIn");
				break;
				case "createNewTempNode" :
					$('.introjs-tooltip').removeClass('hide');
					if (lang == 'c') {
						text = 'Here, we are creating a <span class="ct-code-b-yellow">nodeptr</span>  with <span class="ct-code-b-yellow">'
								+ 'data</span> and <span class="ct-code-b-yellow">next</span> field and allocating a <span class="ct-code-b-yellow">'
								+ 'dynamic memory</span>.';
					} else if (lang == 'cpp') {
						text = 'The <span class="ct-code-b-yellow">new</span> operator creates'
								+ ' <span class="ct-code-b-yellow">dynamic memory</span> to the <span class="ct-code-b-yellow">struct list</span>.'
								+ ' Which contains <span class="ct-code-b-yellow">two</span> fields '
								+ ' <span class="ct-code-b-yellow">data</span> and <span class="ct-code-b-yellow">next</span>.';
					}
					typing('.introjs-tooltiptext' , text, function() {
						createDynamicNodes("#dynamicNodes" + returnValCount, nodeCount);
						introNextSteps("#animatinDiv", "MemoryAllocation");
						$('.introjs-nextbutton').show();
					});
				break;
				case "xValStreInTempData" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>x</span> value (i.e., "
							+ '<span class="ct-code-b-yellow">' + $("#nodeDataVal" + (outputLineCount - 1)).val() 
							+ '</span>) is stored in <span class="ct-code-b-yellow">temp -> data</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "storeXVal");
						$('.introjs-nextbutton').show();
					});
				break;
				case "tempNextToNull" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "Assigning <span class='ct-code-b-yellow'>NULL</span> value to <span class='ct-code-b-yellow'>temp -> next</span>.";
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "assignNullToTmpNxt");
						$('.introjs-nextbutton').show();
					});
				break;
				case "ifFirstEqlToNull" :
					ifConditionCheckingText("first", " == NULL", function() {
						toEffectAnimation("#ifFirstEqlToNull", "#ifConForAddNode", function() {
							var firstVal = $("#firstVal" + returnValCount).text().trim();
							nextBtnWithoutCalling(function() {
								ifConToChekisFirstEqlToNull(firstVal, "ifFirstEqlToNull");
							});
						});	
					}); 
				break;
				case "firstEqlToTemp" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>temp</span> value (i.e., <span class='ct-code-b-yellow'>" 
								+ $('#nodeVal1').text()	+ "</span>) is stored in <span class='ct-code-b-yellow'>first</span>.";
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "tempValStredInFirst");
						$('.introjs-nextbutton').show();
					});
				break;
				case "tempValStreInQ" :
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>temp</span> value (i.e., <span class='ct-code-b-yellow'>" 
								+ $('#nodeVal1').text() + "</span>) is stored in <span class='ct-code-b-yellow'>q</span>.";
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "tempValStredInQ");
						$('.introjs-nextbutton').show();
					});
				break;
				case "tempToQNext":
					$('.introjs-tooltip').removeClass('hide');
					var text = "The <span class='ct-code-b-yellow'>temp</span> value (i.e., <span class='ct-code-b-yellow'>" 
							+ $('#nodeVal1').text() + "</span>) is stored in <span class='ct-code-b-yellow'>q -> next</span>.";
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animatinDiv", "tempvalstoredInQNext");
						$('.introjs-nextbutton').show();
					});
				break;
				case "callConcatMethod" :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "methodCall" :
							$('.introjs-tooltip').removeClass('hide');
							if (lang == 'c') {
								text = 'Here, we are calling the <span class="ct-code-b-yellow">' + buttonName +'()</span> method and'
										+ ' passing <span class="ct-code-b-yellow">l1</span> and <span class="ct-code-b-yellow">l2</span> data (i.e.,'
										+ ' <span class="ct-code-b-yellow">'+ $("#l1Val").text() + '</span> and <span class="ct-code-b-yellow">'
										+ $("#l2Val").text() + '</span>) as arguments and the <span class="ct-code-b-yellow">return</span>'
										+ ' value is stored in the variable <span class="ct-code-b-yellow">l3</span>.';
							} else if (lang == 'cpp') {
								text = 'Here, we are calling the <span class="ct-code-b-yellow">' + buttonName +'()</span> method and'
										+ ' passing <span class="ct-code-b-yellow">l1</span> and <span class="ct-code-b-yellow">l2</span>'
										+ ' data (i.e., <span class="ct-code-b-yellow">'+ $("#firstVal1").text() + '</span> and'
										+ ' <span class="ct-code-b-yellow">' + $("#firstVal2").text() + '</span>) as arguments.';
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#structTypelist').addClass('hide');
								introjs.refresh();
								if (buttonName == "concat") {
									preConcatOperation();
									introNextSteps("#sllOperations", "concatNode", "right");
									$('.introjs-nextbutton').show();		
								} else {
									preUnionOperation();
									introjs.refresh();
									introNextSteps("#sllOperations", "concatNode", "right");
									$('.introjs-nextbutton').show();
								}
								
							});
						break;
						 case "returnValue" :
							 $('.introjs-tooltip').removeClass('hide');
							 text = 'The <span class="ct-code-b-yellow">concat(l1, l2)</span> method return value '
							 		+ ' is stroed in <span class="ct-code-b-yellow">l3</span>.'
					 		typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "storeT3ToL3", "right");
									$('.introjs-nextbutton').show();
							});
						break;
						 case "returnValue1" :
								$('.introjs-tooltip').removeClass('hide');
								 text = 'The <span class="ct-code-b-yellow">unions(l1, l2)</span> return value '
								 		+ ' is stroed on <span class="ct-code-b-yellow">l3</span>.'
						 		typing('.introjs-tooltiptext', text, function() {
						 			$("#unionOperations").empty().addClass("opacity00");
						 			$(".fa").remove();
						 			$("#animatinDiv").removeClass("z-index1000000");
									introNextSteps("#animatinDiv", "storeUnionl3Value", "right");
										$('.introjs-nextbutton').show();
								});
							break;
					}
				break;
				case "callToConcatMethod" :
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "methodCall" :
							$('.introjs-tooltip').removeClass('hide');
							if (lang == 'c') {
								text = 'Here, we call the '
									+ ' <span class="ct-code-b-yellow">concat()</span> method and '
									+ ' passing <span class="ct-code-b-yellow">l1</span> and '
									+ ' <span class="ct-code-b-yellow">l2</span> data (i.e. '
									+ ' <span class="ct-code-b-yellow">'+ $("#l1Val").text() 
									+ '</span> and  <span class="ct-code-b-yellow">'+ $("#l2Val").text() 
									+ '</span>) as a argument and '
									+ ' the <span class="ct-code-b-yellow">return</span> value is stored in the'
									+ ' variable <span class="ct-code-b-yellow">l3</span>.';
							} else if (lang == 'cpp') {
								text = 'Here, we call the '
									+ ' <span class="ct-code-b-yellow">concat()</span> method and '
									+ ' passing <span class="ct-code-b-yellow">l1</span> and '
									+ ' <span class="ct-code-b-yellow">l2</span> data (i.e. '
									+ ' <span class="ct-code-b-yellow">'+ $("#firstVal1").text() 
									+ '</span> and  <span class="ct-code-b-yellow">'+ $("#firstVal2").text() 
									+ '</span>) as a arguments.';
							}
							typing('.introjs-tooltiptext', text, function() {
								nextBtnWithoutCalling(function() {
									preConcatOperation();
									buttonName = "concat";
									introNextSteps("#concatCode", "concatNode", "right");
									introjs.nextStep();
								});
							});
						break;
						 case "returnValue" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">concat(l1, l2)</span> return value '
							 		+ ' is stroed on <span class="ct-code-b-yellow">l3</span>.'
					 		typing('.introjs-tooltiptext', text, function() {
					 			$("#concatCode").remove();
								introNextSteps("#animatinDiv", "storeT3ToL3", "right");
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "concatCode" :
					customIntroNxtStep("#concatTwoNodes");
				break;
				case "concatTwoNodes" :
					$('.introjs-tooltip').removeClass('hide');
					if (lang == 'c') {
						var text = 'Here, we are declaring <span class="ct-code-b-yellow">t1</span> and '
								+ ' <span class="ct-code-b-yellow">t2</span> nodes'
								+ ' and that will be initialized to <span class="ct-code-b-yellow">concat(l1, l2)</span>'
								+ ' method passed value.';
					} else if (lang == 'cpp') {
						var text = 'Here, we are declaring <span class="ct-code-b-yellow">l1</span> and '
							+ ' <span class="ct-code-b-yellow">l2</span> nodes'
							+ ' and that will be initialized to <span class="ct-code-b-yellow">concat(l1, l2)</span>'
							+ ' method passed value.';
					}
					typing('.introjs-tooltiptext', text, function() {
						if (lang == 'c') {
							createLastNode(1, "t3", 2);createLastNode(1, "t1", 1);
							introNextSteps("#animatinDiv", "declrT1AndT2Nodes", "right");
						} else if (lang == 'cpp') {
							createLastNode(1, "t", 8);createLastNode(1, "l1.first<sub>concat</sub>", 1);
							createLastNode(2, "t", 8);createLastNode(2, "l2.first<sub>concat</sub>", 2);
							introNextSteps("#animatinDiv", "declrL1AndL2NodesCPP", "right");
						}
						rechangeSVGLineHeights(fstSvgIds, "#dynamicNodes1 .data-span");
						rechangeSVGLineHeights(svgIds, "#dynamicNodes2 .node");
						$('.introjs-nextbutton').show();
					});		
				break;
				case "unionTwoNodes" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'Here, we are declaring a local variable <span class="ct-code-b-yellow">l1</span> and '
						+ ' <span class="ct-code-b-yellow">l2</span> nodes'
						+ ' and that will be initialized to <span class="ct-code-b-yellow">union(l1, l2)</span>'
						+ ' method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						concatflag = true;
						createLastNode(1, "t3", 5);createLastNode(1, "t1<sub>inUnion</sub>", 2);
						createLastNode(1, "t2<sub>inUnion</sub>", 3);createLastNode(1, "q<sub>inUnion</sub>", 4);
						$("#NoOfLists, #NoOfListsInUnion").removeClass("box-border1").addClass("box-border");
						rechangeSVGLineHeights(fstSvgIds, "#dynamicNodes1 .data-span");
						rechangeSVGLineHeights(svgIds, "#dynamicNodes2 .node");
						introNextSteps("#animatinDiv", "declrL1AndL2Nodes", "right");
						$('.introjs-nextbutton').show();
					});
				break;
				case "decNodeT3" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'Here, we are declaring <span class="ct-code-b-yellow">t3</span> node.';
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#animatinDiv", "declrT3Nodes", "right");
						$('.introjs-nextbutton').show();
					});
				break;
				case "decForNodes" :
					$('.introjs-tooltip').removeClass('hide');
					if (lang == 'c') {
						var text = 'Here, we declared <span class="ct-code-b-yellow">l3</span>, <span class="ct-code-b-yellow">t1</span>,'
									+ ' <span class="ct-code-b-yellow">t2</span> and, <span class="ct-code-b-yellow">q</span>, nodes. The'
									+ ' <span class="ct-code-b-yellow">q</span> node is initialized with <span class="ct-code-b-yellow">NULL</span>.';
					} else if (lang == 'cpp') {
						var text = 'Here, we declared <span class="ct-code-b-yellow">t1</span>,'
									+ ' <span class="ct-code-b-yellow">t2</span> and, <span class="ct-code-b-yellow">q</span>, nodes. The'
									+ ' <span class="ct-code-b-yellow">q</span> node is initialized with <span class="ct-code-b-yellow">NULL</span>.';
					}
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#animatinDiv", "declrFourNodes", "right");
						$('.introjs-nextbutton').show();
					});
				break;
				case "ifT"+ tCount +"IsNull" :
					var value, selector1, selector2;
					if (lang == 'c') {
						value = 't' + tCount;
						selector1 = "#nodeVal1";
						selector2 = "#firstVal2";
					} else if (lang == 'cpp') {
						value = 'l' + tCount + '.first';
						selector1 = '#nodeVal1';
						selector2 = '#nodeAddress2 #nodeVal2';
					}
					ifConditionCheckingText(value, " == NULL" ,function() {
						toEffectAnimation("#ifT"+ tCount +"IsNull > #ifCondition", "#ifConForAddNode", function() {
							nextBtnWithoutCalling(function() {
								if(tCount == 1) {
									var firstVal = $(selector1).text().trim();
									ifConToChekisFirstEqlToNull(firstVal, "ifT"+ tCount +"IsNull");
								} else {
									var firstVal = $(selector2).text().trim(); 
									ifConToChekisFirstEqlToNull(firstVal, "ifT"+ tCount +"IsNull");
								}
							});
						});
					});
				break;
				case "returnT" + tCount :
					if (lang == 'c') {
						if (concatflag) {
							customIntroNxtStep("#callToConcatMethod", "returnValue");
						} else {
							customIntroNxtStep("#callConcatMethod", "returnValue");
						}
					} else if (lang == 'cpp') {
						customIntroNxtStep('#animatinDiv', 'storeT3ToL3')
					}
				break;
				case "returnT4" :
					customIntroNxtStep("#callConcatMethod", "returnValue1");
				break;
				case "t1StoredToT3" :
					$('.introjs-tooltip').removeClass('hide');
					if (lang == 'c') {
						text = 'The <span class="ct-code-b-yellow">t1</span> value (i.e., <span class="ct-code-b-yellow">' + $("#nodeVal1").text() 
								+ '</span>) is stored in <span class="ct-code-b-yellow">t3</span>.';
					} else if (lang == 'cpp') {
						text = 'The <span class="ct-code-b-yellow">l1.first</span> value (i.e., <span class="ct-code-b-yellow">' + $("#nodeVal1").text() 
								+ '</span>) is stored in <span class="ct-code-b-yellow">first</span>.';
					}
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "streT1ToT3");
						$('.introjs-nextbutton').show();
					});
				break;
				case "whileT1NxtNotEqNull" :
					var selector;
					if (lang == 'c') {
						selector = "t1 -> next";
					} else if (lang == 'cpp') {
						selector = 'l1.first -> next';
					}
					whileConditionCheckingText(selector, " != NULL", function() {
						toEffectAnimation("#whileT1NxtNotEqNull", "#whileConForAddNode", function() {
							nextBtnWithoutCalling(function() {
								var firstVal = $("#nextDiv" + count).text().trim();
								whileConForT1nextNotEqNull(firstVal, "whileT1NxtNotEqNull");
							});
						});
					});
				break;
				case "t1nxtToT1" :
					var selector;
					var selector1, selector2;
					if (lang == 'c') {
						selector1 = 't2';
						selector2 = 't1 -> next';
					} else if (lang == 'cpp') {
						selector1 = 'l1.first';
						selector2 = 'l1.first -> next';
					}
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">' + selector2 + '</span> value (i.e., <span class="ct-code-b-yellow">'
							+ $("#nextDiv" + count).text() + '</span>) is stored in <span class="ct-code-b-yellow">' + selector1 + '</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "streT1nextToT1");
						$('.introjs-nextbutton').show();
					});
				break;
				case "t2StoreT1Nxt" :
					$('.introjs-tooltip').removeClass('hide');
					var selector1, selector2;
					if (lang == 'c') {
						selector1 = 't2';
						selector2 = 't1 -> next';
					} else if (lang == 'cpp') {
						selector1 = 'l2.first';
						selector2 = 'l1.first -> next';
					}
					text = 'The <span class="ct-code-b-yellow">' + selector1 + '</span> value (i.e., <span class="ct-code-b-yellow">'
							+ $("#firstVal2").text() + '</span>) is stored in <span class="ct-code-b-yellow">' + selector2 + '</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "streT2NextToT1Nxt");
						$('.introjs-nextbutton').show();
					});
				break;
				case "printMethod" + printfCount:
				case "printFunction" :
					$('.introjs-tooltip').removeClass('hide');
					var text;
					if (elementId != 'printFunction' && buttonName == 'intersect') {
						nodeCount = printfCount;
					}
					if (lang == 'c') {
						text = 'Here, we are calling the <span class="ct-code-b-yellow">print()</span> method and passing'
								+ ' <span class="ct-code-b-yellow">l' + printfCount + '</span> data (i.e., <span class="ct-code-b-yellow">'
								+ $("#l" + printfCount + "Val").text() +'</span>) as an argument.';
					} else if (lang == 'cpp') {
						text = 'Here, we are calling the <span class="ct-code-b-yellow">print()</span> method with '
								+ ' <span class="ct-code-b-yellow">l' + printfCount + '</span>.';
					}
					typing('.introjs-tooltiptext', text, function() {
						$("#sllOperations").removeClass("opacity00")
						prePrintfFunctionOperation();
						introNextSteps("#sllOperations", "displayPrintFun");
						$('.introjs-nextbutton').show();
					});
				break;
				case "printNode" :
					$("#animatinDiv").removeClass("z-index1000000");
					customIntroNxtStep("#animatinDiv", "dspFstNode");
				break;
				case "nodeQ" :
					$("#animatinDiv").removeClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing <span class="ct-code-b-yellow">q</span> node'
							+ ' with <span class="ct-code-b-yellow">first</span> node value.'
					typing('.introjs-tooltiptext', text, function() {
						if ($("#concat").is(":not(.concatination)")) {
							createLastNode(nodeCount, "t3", 2);createLastNode(nodeCount, "q", 1);
						}
						if ((buttonName == 'intersect' && nodeCount == 1) && ($("#concat").is(":not(.concatination)"))) {
							rechangeSVGLineHeights(secSvgIds, "#dynamicNodes2 .node");
							rechangeSVGLineHeights(thirdSvgIds, "#dynamicNodes3 .node");
						}
						introNextSteps("#animatinDiv", "decAndStreQVal");
						$('.introjs-nextbutton').show();
					});
				break;
				case "firstIsNull":
					var selector;
					if (lang == 'c') {
						selector = '#firstVal1';
					} else if (lang == 'cpp') {
						if (buttonName == 'intersect') {
							selector = '#firstVal' + printfCount;
						} else {
							selector = '#firstVal3';
						}
					}
					ifConditionCheckingText("first", " == NULL", function() {
						toEffectAnimation("#ifFstEqNull", "#ifConForAddNode", function() {
							nextBtnWithoutCalling(function() {
								var firstValue = $(selector).text().trim();
								ifConToChekisFirstEqlToNull(firstValue, "ifFirstIsNull");
							});
						});	
					});
				break;
				case "whileQNotEqNull" :
					$("#animatinDiv").addClass("z-index1000000");
					whileConditionCheckingText("q", " != NULL", function() {
						toEffectAnimation("#checkQNxtNull", "#whileConForAddNode", function() {
							nextBtnWithoutCalling(function() {
								var firstVal = $("#nodeVal1").text().trim();  
								whileConForT1nextNotEqNull(firstVal, "whileQNotEqNull");
							});
						});
					});
				break;
				case "qNxtToQ" :
					$("#animatinDiv").removeClass("z-index1000000");
					customIntroNxtStep("#animatinDiv", "qNxtToQNode");
				break;
				case "nodeRepeation" :
					removeLine();
					$('#unionOperations').empty()
					unionOperationFunction();
					customIntroNxtStep("#unionOperations", "", "left");
				break;
				case "unionOperations" :
					var t1Val = $("#l3ValInUn").text().trim();
					$("#unionOperations").removeClass("opacity00");
					$("#animatinDiv").addClass("z-index1000000");
					arrow("#firstLoop", "#firstLoop", function() {
						$('.introjs-tooltip').removeClass('hide');
						if (lang == 'c') {
							var text = "The <span class='ct-code-b-yellow'>t1</span> value is initialized to "
									+ " <span class='ct-code-b-yellow'>l3</span>"
									+ " (i.e <span class='ct-code-b-yellow'>"+$("#l3ValInUn").text() +"</span>)";
						} else if (lang == 'cpp') {
							var text = "The <span class='ct-code-b-yellow'>t1</span> value is initialized to "
									+ " <span class='ct-code-b-yellow'>first</span>"
									+ " (i.e <span class='ct-code-b-yellow'>"+$("#firstVal3").text() +"</span>)";
						}
						typing('.introjs-tooltiptext', text, function() {
							$(".introjs-tooltipbuttons").append("<br><a class='introjs-button user-btn'" 
									+ "onclick = outerLoopIniializationText()>Next &#8594;</a>");
						});
					});
				break;
				case "p3" :
					customIntroNxtStep("#consoleId", "displyUnionText");
				break;
				case "p4" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are calling the '
						+ ' <span class="ct-code-b-yellow">print()</span> method and '
						+ ' passing <span class="ct-code-b-yellow">l3</span> data (i.e. '
						+ ' <span class="ct-code-b-yellow">'+ $("#l3Val").text() +'</span>) as a argument.';
					typing('.introjs-tooltiptext', text, function() {
						count = 1;
						$("#sllOperations").removeClass("opacity00");
						prePrintfFunctionOperation();
						introNextSteps("#sllOperations", "displayPrintFun");
						$('.introjs-nextbutton').show();
					});
				break;
				//intersection steps
				case "intrsctMainIfCond":
					if (lang == 'c') {
						customIntroNxtStep("#animatinDiv", 'mainIfCond', 'left');
					} else if (lang == 'cpp') {
						isEmptyMthodInCPP();
					}
				break;
				case "retn" + lineCount:
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "return0":
							customIntroNxtStep("#buttonDiv");
						break;
						case "return3":
							if ($("#srtMethod").hasClass("sorting")) {
								customIntroNxtStep("#callL1Srt", "retunValue");
							} else {
								returnValCount = 2;
								customIntroNxtStep("#callL2Srt", "retunValue");
							}
						break;
						case "return2":
							customIntroNxtStep("#callIntrsctMethod", 'retunValue');
						break;
						case "return4":
							customIntroNxtStep("#callAddMethod", 'retunValue');
						break;
					}
				break;
				case "callL2Srt":
				case "callL1Srt":
					if ($("#srtMethod").hasClass("sorting")) {
						printfCount = returnValCount = 1;
						$("#intersect").addClass("intersect");
					} else {
						printfCount = returnValCount = 2;
						flag = true;
					}
					$('.introjs-tooltip').removeClass('hide');
					$("#line" + infoLine + ", #line" + tempLine).remove();
					$("#nodeAddress" + returnValCount).empty();
					introjs.refresh();
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "callSrt1":
							if (lang == 'c') {
								text = 'Here, we are calling <span class="ct-code-b-yellow">sort()</span> method and passing'
									+ ' <span class="ct-code-b-yellow">l' + returnValCount + '</span> data (i.e., '
									+ ' <span class="ct-code-b-yellow">' + $("#l" + returnValCount + "Val").text() + '</span>) as an argument and '
									+ ' the <span class="ct-code-b-yellow">return</span> value is stored in the'
									+ ' variable <span class="ct-code-b-yellow">l'+ returnValCount +'</span>.';
							} else if (lang == 'cpp') {
								text = 'Here, we are calling <span class="ct-code-b-yellow">sort()</span> method with'
									+ ' <span class="ct-code-b-yellow">l' + returnValCount + '</span>.';
							}
							typing('.introjs-tooltiptext', text, function() {
								$('#structTypelist').addClass('hide');
								introjs.refresh();
								introNextSteps("#srtMethod");
								$('.introjs-nextbutton').show();
							});
						break;
						case "retunValue":
							if (returnValCount == 1) {
								if (buttonName == 'intersect') {
									rechangeSVGLineHeights(secSvgIds, "#dynamicNodes2 .node");
								} else {
									rechangeSVGLineHeights(fstSvgIds, "#dynamicNodes1 .data-span");
									rechangeSVGLineHeights(svgIds, "#dynamicNodes2 .node");
								}
							}
							$("#xNode").addClass("opacity00");
							$("#xNode span").empty();
							text = 'The <span class="ct-code-b-yellow">sort()</span> method returns value'
									+ ' i.e., <span class="ct-code-b-yellow"> ' + $("#l" + returnValCount + "Val").text() 
									+ '</span> is stored in the variable <span class="ct-code-b-yellow">l' + returnValCount + '</span>.';	
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "firstValueStorInL" + returnValCount);
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "srtMethod":
					if (lang == 'c') {
						customIntroNxtStep("#firstNodeIn");
					} else if (lang == 'cpp') {
						customIntroNxtStep("#initT1T2");
					}
				break;
				case "firstNodeIn":
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring the <span class="ct-code-b-yellow">first</span> node and that will be initialized'
							+ ' to <span class="ct-code-b-yellow">sort(l' + printfCount + ')</span> method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "declrFirstNode", "right");
						$('.introjs-nextbutton').show();
					});	
				break;
				case "initT1T2":
					$('.introjs-tooltip').removeClass('hide');
					text = "Here we are declaring two variables <span class='ct-code-b-yellow'>t1</span> and <span class='ct-code-b-yellow'>"
							+ "t2</span> of the type <span class='ct-code-b-yellow'>nodeptr</span>.";
					typing('.introjs-tooltiptext', text, function() {
						if ($("#srtMethod").hasClass("sorting")) {
							returnValCount = 1;
						} else {
							returnValCount = 2;
						}
						introNextSteps("#animatinDiv", 'declareT1T2');
						creatingT1T2L3(function() {
							if (returnValCount == 1) {
								if (buttonName == 'intersect') {
									rechangeSVGLineHeights(secSvgIds, "#dynamicNodes2 .node");
								} else {
									rechangeSVGLineHeights(fstSvgIds, "#dynamicNodes1 .data-span");
									rechangeSVGLineHeights(svgIds, "#dynamicNodes2 .node");
								}
							}
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "srtForLoop":
					$("#sortingDiv").removeClass("hide");
					customIntroNxtStep("#animationParent");
				break;
				case "animationParent":
					$("#srtForLoop").addClass("z-index1000000").effect("highlight", {color: 'yellow'}, 500, function() {
						$("#srtForLoop").effect("transfer", {to: $("#sortingLogic"), className: "ui-effects-transfer"}, 500, function() {
							sortingLoops();
							introjs.refresh();
							$("#srtForLoop").removeClass("z-index1000000");
							popover('#sortingLogic', 'left');
							text = 'Here we will learn how to sort linked list elements.'
							typing("#popover", text, function() {
								if ($("#srtMethod").hasClass("sorting")) {
									count = 1;
									printfCount = 1;
								} else {
									printfCount = $('.completed').length + 1;
									count++;
								}
								$("#popover").append("<br><a class='introjs-button user-btn'" 
										+ "onclick = frloop1InitText(" + printfCount + ")>Next &#8594;</a>");
							});
						});
					});
				break;
				case "callIntrsctMethod":
					$('.introjs-tooltip').removeClass('hide');
					$("#animatinDiv").removeClass("z-index1000000");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "methodCalling":
							$("#sllOperations").empty();
							preIntersectionMethod();
							nodeCount = 0; printfCount = $("#dynamicNodes1 .data-span").length;
							if (lang == 'c') {
								text = 'Here, we are calling the <span class="ct-code-b-yellow">intersect()</span> method and  passing'
										+ ' <span class="ct-code-b-yellow">l1, l2</span> data (i.e., <span class="ct-code-b-yellow">'
										+ $("#l1Val").text() + ', ' + $("#l2Val").text() + '</span>) as arguments and the'
										+ ' <span class="ct-code-b-yellow">return</span> value is stored in the variable'
										+ ' <span class="ct-code-b-yellow">l3</span>.';
							} else if (lang == 'cpp') {
								text = 'Here, we are calling the <span class="ct-code-b-yellow">intersect()</span> method and  passing'
										+ ' <span class="ct-code-b-yellow">l1, l2</span> data (i.e., <span class="ct-code-b-yellow">'
										+ $("#firstVal1").text() + ', ' + $("#firstVal2").text() + '</span>) as arguments.';
							}
							typing('.introjs-tooltiptext', text, function() {
								if ($("#intersect").hasClass("intersect") && lang == 'c') {
									$("#intersect").removeClass("intersect")
									$("#nodeAddress2").after('<div id="thirdList" class="col-xs-12 padding00 list3">'
													+ '<div id="firstNode3" class="col-xs-1 padding00 opacity00">'
													+ '<div class="text-center col-xs-12 padding00 ct-green-color ct-fonts firstNodeName3">'
													+ 'first</div><div id="firstDiv3" class="col-xs-12 box padding00"><span id="firstVal3"'
													+ ' class="ct-green-color ct-fonts position opacity00" style="color: brown;">'
													+ '1217</span></div></div><div id="dynamicNodes3" class="col-xs-11"></div></div>');
									$("#thirdList").after('<div id="nodeAddress3" style="margin-bottom: 7px;"'
													+ ' class="col-xs-12 margin-top15 padding00"></div>');
								}
								introNextSteps("#intrsctionMethod");
								$('.introjs-nextbutton').show();
							});
						break;
						case "retunValue":
							$("#line31, #line32, #line45, #line46, #intrsctionMethod, #line" + tempLine).remove();
							$("#firstNode1, #firstNode2").addClass("opacity00");
							$("#firstDiv1, #firstDiv2").prev().text('first');
							var text = 'The <span class="ct-code-b-yellow">intersect()</span> method returns value '
										+ 'i.e., <span class="ct-code-b-yellow"> ' + $("#nodeVal0").text() 
										+ '</span> stored in the variable <span class="ct-code-b-yellow">l3</span>.';	
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "l3IntrsctValueStore");
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "intrsctionMethod":
					customIntroNxtStep("#l1L2Dec");
				break;
				case "l1L2Dec":
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring <span class="ct-code-b-yellow">l1</span> and <span class="ct-code-b-yellow">l2</span> nodes'
							+ ' and that will be initialized to <span class="ct-code-b-yellow">intersect(l1, l2)</span> method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						if (lang == 'cpp') {
							createLastNode(returnValCount, "l3", 0);createLastNode(returnValCount, "l1<sub>intersect</sub>", 3);
							createLastNode(2, "l3", 0);createLastNode(2, "l2<sub>intersect</sub>", 4);
							console.log('2159 true');
							rechangeSVGLineHeights(secSvgIds, "#dynamicNodes2 .node");
						}
						introNextSteps("#animatinDiv", "l1L2Nodes");
						$('.introjs-nextbutton').show();
					});
				break;
				case "initT1T2L3":
					$('.introjs-tooltip').removeClass('hide');
					if (lang == 'c') {
						text =  'Here, we are declaring and initializing <span class="ct-code-b-yellow">t1</span> with'
								+ ' <span class="ct-code-b-yellow">l1</span> (i.e., <span class="ct-code-b-yellow">' + $("#l1Val").text()
								+ '</span>), <span class="ct-code-b-yellow">t2</span> with <span class="ct-code-b-yellow">l2</span>'
								+ ' (i.e., <span class="ct-code-b-yellow">' + $("#l2Val").text() + '</span>) and'
								+ ' <span class="ct-code-b-yellow">l3</span> with <span class="ct-code-b-yellow">NULL</span>';
						returnValCount = 1;
						creatingT1T2L3();
						console.log('2159 true');
						rechangeSVGLineHeights(secSvgIds, "#dynamicNodes2 .node");
					} else if (lang == 'cpp') {
						text = 'Here we declared and <span class="ct-code-b-yellow">t1</span> with'
								+ ' <span class="ct-code-b-yellow">l1</span> (i.e., <span class="ct-code-b-yellow">' + $("#firstVal1").text()
								+ '</span>), <span class="ct-code-b-yellow">t2</span> with <span class="ct-code-b-yellow">l2</span>'
								+ ' (i.e., <span class="ct-code-b-yellow">' + $("#firstVal2").text() + '</span>).';
						createLastNode(returnValCount, "t1", 1);
						createLastNode(2, "t2", 2);
					}
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "DecT1T2L3");
						$('.introjs-nextbutton').show();
					});
				break;
				case "intrsctWhileCond":
					$("#line" + infoLine + ", #line" + tempLine).remove();
					customIntroNxtStep("#animatinDiv", "whileCondCheck", 'left');
				break;
				case "intrsctIfCond":
					customIntroNxtStep("#animatinDiv", 'intrsctIfCheck', 'left');
				break;
				case "intrsctIfT1Next":
					customIntroNxtStep("#animatinDiv", "t1Next");
				break;
				case "intrsctElseIfCond":
					customIntroNxtStep("#animatinDiv", 'intrsctIfElseCheck', 'left');
				break;
				case "intrsctElseIfT2Next":
					customIntroNxtStep("#animatinDiv", "t2Next");
				break;
				case "callAddMethod":
					$('.introjs-tooltip').removeClass("hide");
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case "methodCalling":
							if (lang == 'c') {
								text = 'Here, we are calling <span class="ct-code-b-yellow">add()</span> method and passing'
										+ ' <span class="ct-code-b-yellow">l3, t1 -> data</span> (i.e., <span class="ct-code-b-yellow">'
										+ $("#nodeVal0").text() + ', ' + $("#data" + nodeCount).text() + '</span>) as arguments and the' 
										+ ' <span class="ct-code-b-yellow">return</span> value is stored in the'
										+ ' variable <span class="ct-code-b-yellow">l3</span>.';
							} else if (lang == 'cpp') {
								text = 'Here, we are calling <span class="ct-code-b-yellow">add()</span> method and passing'
										+ ' <span class="ct-code-b-yellow">t1 -> data</span> (i.e., <span class="ct-code-b-yellow">'
										+  $("#data" + nodeCount).text() + '</span>) as an argument.';
							}
							typing('.introjs-tooltiptext', text, function() {
								preAddMethod();
								introNextSteps("#addMethod");
								$('.introjs-nextbutton').show();
							});
						break;
						case "retunValue":
							$("#addMethod").remove();
							$("#xNode").addClass("opacity00");
							$("#xNode span").empty();
							var text = 'The <span class="ct-code-b-yellow">add()</span> method returns value i.e., <span class="ct-code-b-yellow">'
										+ $("#firstVal3").text() + '</span> stored in the variable <span class="ct-code-b-yellow">l3</span>.';	
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#animatinDiv", "l3AddValueStore");
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				case "addMethod":
					customIntroNxtStep("#l3XIn");
				break;
				case "l3XIn":
					$('.introjs-tooltip').removeClass("hide");
					text = 'Here, we are declaring <span class="ct-code-b-yellow">l3</span> and <span class="ct-code-b-yellow">x</span>'
							+ ' and that will be initialized to <span class="ct-code-b-yellow">add(l3, t1 -> data)</span> method passed value.';
					typing('.introjs-tooltiptext', text, function() {
						returnValCount = 3;
						if (lang == 'c') {
							createLastNode(returnValCount, "l3", 11);
						}
						createLastNode(returnValCount, "q", 5);
						createLastNode(returnValCount, "temp2", 3); createLastNode(returnValCount, "t", 6);
						introNextSteps("#animatinDiv", "l3XDec");
						$('.introjs-nextbutton').show();
					});
				break;
				case "initTQVar":
					var value;
					if (lang == 'c') {
						value = 'l3';
					} else if (lang == 'cpp') {
						value = 'first';
					}
					$('.introjs-tooltip').removeClass("hide");
					text = 'Here we are declaring <span class="ct-code-b-yellow">t</span> and <span class="ct-code-b-yellow">q</span> nodes,'
							+ ' and <span class="ct-code-b-yellow">q</span> is initialized with <span class="ct-code-b-yellow">' + value + '</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animatinDiv", "decTQ");
						$('.introjs-nextbutton').show();
					});
				break;
				case "nodeCreation":
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are creating a <span class="ct-code-b-yellow">nodeptr</span> with <span class="ct-code-b-yellow">'
							+ 'data</span> and <span class="ct-code-b-yellow">next</span> field and allocating a'
							+ ' <span class="ct-code-b-yellow">dynamic memory</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						lineCount = $(".data-div").length + 1;
						createDynamicNodes("#dynamicNodes" + returnValCount, lineCount);
						introNextSteps("#animatinDiv", "tempMemoryAlloc");
						$('.introjs-nextbutton').show();
					});
				break;
				case "tInfoVal":
					customIntroNxtStep("#animatinDiv", "tInfoValue");
				break;
				case "tNextVal":
					customIntroNxtStep("#animatinDiv", "tNextValue");
				break;
				case "addIfCond":
					customIntroNxtStep("#animatinDiv", 'addIfCheck', 'left');
				break;
				case "ifL3Val":
					customIntroNxtStep("#animatinDiv", 'l3ValueInIf');
				break;
				case "intrsctElseT1Next":
					customIntroNxtStep("#animatinDiv", "elseT1Next");
				break;
				case "intrsctElseT2Next":
					customIntroNxtStep("#animatinDiv", "elseT2Next");
				break;
				case "addWhileCond":
					customIntroNxtStep("#elseWhileCond");
				break;
				case "elseWhileCond":
					customIntroNxtStep("#animatinDiv", 'addWhileCheck', 'left');
				break;
				case "elseWhileQValue":
					customIntroNxtStep("#animatinDiv", "elseWhileQVal");
				break;
				case "elseQNextVal":
					customIntroNxtStep("#animatinDiv", "qNxtValue");
				break;
				case 'preClassCreation':
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {	
						case 'classCreation':
							$('#preClassCreation').removeClass('opacity00');
							$('.introjs-tooltip').removeClass('hide');
							text = 'This is the declaration of a class in <span class="ct-code-b-yellow">Sll</span>.';
							introNextSteps('#constructCreat');
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						break;
						case 'firstCreation':
							$(".col-xs-8 div:first").addClass("box-border");
							$("#animationParent").removeClass("opacity00");
							customIntroNxtStep('#animatinDiv', 'cppFstInitNDec');
						break;
					}
				break;
				case 'constructCreat':
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the declaration of a <span class="ct-code-b-yellow">class</span> constructor <span class="ct-code-b-yellow">Sll'
							+ '</span> with the access specifier <span class="ct-code-b-yellow">public</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps('#membrFunctions');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'membrFunctions':
					$('.introjs-tooltip').removeClass('hide');
					text = 'These are the declarations of <span class="ct-code-b-yellow">member functions</span> in a class'
							+ ' <span class="ct-code-b-yellow">Sll</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#preClassCreation", 'firstCreation');
						$('.introjs-nextbutton').show();
					});
				break;
				case 'objCallSll':
					$('#objCallSll').removeClass('opacity00');
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the creation of an object <span class="ct-code-b-yellow">s</span> for a class'
								+ ' <span class="ct-code-b-yellow">Sll</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#preClassCreation", 'firstCreation');
						$('.introjs-nextbutton').show();
					});
				break;
				
			}
		});
	});
	introjs.start();
	var text = "Here, we are learning about <span class='ct-code-b-yellow'>Single Linked List Operations</span>"
			+ " i.e., <span class='ct-code-b-yellow'>Concat</span>, <span class='ct-code-b-yellow'>Union</span>, and"
			+ " <span class='ct-code-b-yellow'>Intersect</span>.";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function outerLoopIniializationText() {
	$(".user-btn").remove();
	$('.introjs-tooltip').addClass('hide');
	var selector, selector1;
	if (lang == 'c') {
		selector = '#l3ValInit';
		selector1 = "#l3ValInUn";
	} else if (lang == 'cpp') {
		selector = selector1 = '#firstVal3';
	}
	var t1Val = $(selector1).text().trim();
	rotationEffect("#l3ValInit",  t1Val, function() {
		$("#nodeVal2").text($(selector).text());
		fromEffectWithTweenMax(selector, "#nodeVal2", false, function() {
			if (t1Val !=  "NULL") {
				svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + outerLoop, "#svgId", "line22", "arrow", function() {
					outerLoopConditionText(t1Val);
				});
			} else {
				outerLoopConditionText(t1Val);
			}
	    });
	});
}

function outerLoopConditionText(t1Val) {
	$(".user-btn").remove();
	$('.introjs-tooltip').removeClass('hide');
	var text = "Now check the condition <span class='ct-code-b-yellow'>t1 != NULL && "
				+ "t1 -> next != NULL</span>."
	typing('.introjs-tooltiptext', text, function() {
		var selector;
		if (lang == 'c') {
			selector = '#l3ValInUn';
		} else if (lang == 'cpp') {
			selector = '#firstVal3';
		}
		if (outerLoop == 1) {
			t1Val = $(selector).text().trim();
		} else {
			t1val = $("#nodeVal2").text().trim();
		}
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
				+ "onclick = outerLoopCheck("+ "\"" + t1Val.toString() + "\"" +")>Next &#8594;</a>");
	});

}

function outerLoopCheck(t1Val) {
	$(".user-btn").remove();
	$("#secondLoopTrueOrFalse, #ifConTrueorFalse").empty()
	$("#secFstCon, #secSecCon").removeClass("true");
	$("#secFstCon, #secSecCon").removeClass("false");
	checkCondition("#t1", "#fstFstCon", t1Val, function() {
		var t1Con = t1Val != "NULL";
		if (t1Con) {
    		firstForLoopFstConTrueCon();		
    	} else {
    		firstForLoopFalseCon();
    	}
	});
}

function firstForLoopFstConTrueCon() {
	var t1Val = $("#next"+outerLoop).text().trim();
	$('.introjs-tooltip').removeClass('hide');
	var text = "The first condition evaluates to <span class='ct-code-b-yellow'>true</span> "
				+ "so check the second condition <span class='ct-code-b-yellow'>t1 -> next != NULL</span>.";
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
				+ "onclick = outerLoopSecondCon("+ "\"" + t1Val.toString() + "\"" +")>Next &#8594;</a>");
	});
}

function firstForLoopFalseCon() {
	$('.introjs-tooltip').removeClass('hide');
	var text = "The first condition evaluates to <span class='ct-code-b-yellow'>false</span> "
			+ "so no need to check the second condition <span class='ct-code-b-yellow'>t1 -> next != NULL</span>"
			+ " because we are using <span class='ct-code-b-yellow'>&&</span> operator, the total condition will"
			+ " evaluates to <span class='ct-code-b-yellow'>false</span>";
	typing('.introjs-tooltiptext', text, function() {
		$("#firstLoopTrueOrFalse").removeClass("green-color");
		$("#firstLoopTrueOrFalse").text("=====> false").addClass("red-color");
		concatflag = false;
		if (lang == 'c') {
			introNextSteps("#returnT4", "", "left");
		} else { 
			introNextSteps("#animatinDiv", "storeT1Value", "bottom");
		}
		$('.introjs-nextbutton').show();
	});
}

function outerLoopSecondCon(t1Val) {
	checkCondition("#t1Nxt", "#fstSecCon", t1Val, function() {
		var t1Con = t1Val != "NULL";
		if (t1Con) {
			inOuterLoopBothAreTrue();
    	} else {
    		$("#firstLoopTrueOrFalse").removeClass("green-color");
    		$("#firstLoopTrueOrFalse").text("=====> false").addClass("red-color");
    		$('.introjs-tooltip').removeClass('hide');
    		var text= "The total condition evaluates to <span class='ct-code-b-yellow'>false</span>."
    		typing('.introjs-tooltiptext', text, function() {
    			concatflag = false;
    			if (lang == 'c') {
    				introNextSteps("#returnT4", "", "left");
    				$('.introjs-nextbutton').show();
    			} else if (lang == 'cpp') {
    				nextBtnWithoutCalling(function() {
    					$("#line22, #line23").remove();
    					$("#lastNodeMemory2, #lastNodeMemory3, #lastNodeMemory4").addClass("opacity00");
    					$("#animatinDiv").removeClass("z-index1000000");
    					introNextSteps("#p3", "", "bottom");
    					introjs.nextStep();
    					$("#unionOperations").empty().addClass("opacity00");
			 			$(".fa").remove();
    				});
    			}
    		});
    	}
	});
}

function inOuterLoopBothAreTrue() {
	$('.introjs-tooltip').removeClass('hide');
	$("#firstLoopTrueOrFalse").removeClass("red-color");
	$("#firstLoopTrueOrFalse").text("=====> true").addClass("green-color");
	var text = "The second condition is also evaluates to  <span class='ct-code-b-yellow'>true</span> "
			+  "  the total condition will evaluates <span class='ct-code-b-yellow'>true</span>, so"
			+ " the control enters into the for loop block";
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = innerForLoop()>Next &#8594;</a>");
	});
}

function innerForLoop() {
	if (outerLoop == 1) {
		var t2Val = $("#l3ValInit").text().trim();
	} else {
		var t2Val = $("#nodeVal2").text().trim();
	}
	$(".user-btn").remove();
	$('.introjs-tooltip').addClass('hide');
	arrow("#firstLoop", "#secondLoop", function() {
		$('.introjs-tooltip').removeClass('hide');
		var text = "The <span class='ct-code-b-yellow'>t2</span> value will be initialize to "
				+ " <span class='ct-code-b-yellow'>t1</span>"
				+ " (i.e <span class='ct-code-b-yellow'>"+ t2Val +"</span>)";
		typing('.introjs-tooltiptext', text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
					+ "onclick = innerLoopIniialization("+ "\"" + t2Val.toString() + "\"" +")>Next &#8594;</a>");
		});
	});
}

function innerLoopIniialization(t2Val) {
	$(".user-btn").remove();
	$('.introjs-tooltip').addClass('hide');
	rotationEffect("#t1ValInit", t2Val, function() {
		$("#nodeVal3").text($("#t1ValInit").text());
		fromEffectWithTweenMax("#t1ValInit", "#nodeVal3", false, function() {
			var t2Value = $("#nodeVal3").text().trim();
			innerLoopConditionText("\"" + t2Value.toString() + "\"");
	   });
	});
}

function innerLoopConditionText(t2Val) {
	if (t2Val ==  "NULL") {
		$('.introjs-tooltip').removeClass('hide');
		var text = "Now check the condition <span class='ct-code-b-yellow'>t2 != NULL && "
				+ "t2 -> next != NULL</span>."
		typing('.introjs-tooltiptext', text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
					+ 'onclick = innerLoopFstConCheck("NULL")>Next &#8594;</a>');
		});
	} else {
		$("#line23").remove();
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory3", "#nextDiv"
				+ innerLoop, "#svgId", "line23", "arrow", function() {
			$('.introjs-tooltip').removeClass('hide');
			var text = "Now check the condition <span class='ct-code-b-yellow'>t2 != NULL && "
					+ "t2 -> next != NULL</span>."
			typing('.introjs-tooltiptext', text, function() {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
						+ "onclick = innerLoopFstConCheck("+ t2Val.toString() +")>Next &#8594;</a>");
			});
			
		});
	}
}

function innerLoopConditionText1(t2Val) {
	$(".user-btn").remove();
	removeLine();
	var selector;
	if (lang == 'c') {
		selector = "#freeQnode";
	} else if (lang == 'cpp') {
		selector = '#secondLoop';
	}
	arrow(selector, "#secondLoop", function() {
		$('.introjs-tooltip').removeClass('hide');
		var text = "Now check the condition <span class='ct-code-b-yellow'>t2 != NULL && "
				+ "t2 -> next != NULL</span>."
		typing('.introjs-tooltiptext', text, function() {
			if (t2Val == "NULL") {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
						+ 'onclick = innerLoopFstConCheck("NULL")>Next &#8594;</a>');
			} else {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
						+ "onclick = innerLoopFstConCheck("+ t2Val.toString() +")>Next &#8594;</a>");
			}
		});
	});
}


function innerLoopFstConCheck(t2Val) {
	checkCondition("#t2", "#secFstCon", t2Val, function() {
		var t2Con = t2Val != "NULL";
		if (t2Con) {
			var t2Value = $("#next" + (innerLoop + 1)).text().trim();
			firstInnerForLoopSecConText("\"" + t2Value.toString() + "\"");
    	} else {
    		$('.introjs-tooltip').removeClass('hide');
    		var text = "The first condition evaluates to <span class='ct-code-b-yellow'>false</span> "
    				+ "so no need to check the second condition <span class='ct-code-b-yellow'>t2 -> next != NULL</span>"
    				+ " the total condition will evaluates to <span class='ct-code-b-yellow'>false</span>.";
    		typing('.introjs-tooltiptext', text, function() {
    			$("#secondLoopTrueOrFalse").removeClass("green-color");
    			$("#secondLoopTrueOrFalse").text("=====> false").addClass("red-color");
   				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = t1IncrementText()>Next &#8594;</a>");
    		});
    	}
	});
}

function firstInnerForLoopSecConText(t2Val) {
	$('.introjs-tooltip').removeClass('hide');
	var text = "The first condition evaluates to <span class='ct-code-b-yellow'>true</span> "
			+ "so check the second condition <span class='ct-code-b-yellow'>t2 -> next != NULL</span>.";
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
				+ "onclick = innerLoopSecondCon()>Next &#8594;</a>");
	});
}

function innerLoopSecondCon() {
	var t2Val = $("#next" + (innerLoop)).text().trim();
	$(".user-btn").remove();
	checkCondition("#t2Next", "#secSecCon", t2Val, function() {
		var t2Con = t2Val != "NULL";
		if (t2Con) {
			ininnerLoopBothAreTrue();
    	} else {
    		$("#secondLoopTrueOrFalse").removeClass("green-color")
    		$("#secondLoopTrueOrFalse").text("=====> false").addClass("red-color");
    		$('.introjs-tooltip').removeClass('hide');
    		var text= "The total condition evaluates to <span class='ct-code-b-yellow'>false</span>"
    		typing('.introjs-tooltiptext', text, function() {
    			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
						+ "onclick = t1IncrementText()>Next &#8594;</a>");
    		});
    	}
	});
}

function ininnerLoopBothAreTrue() {
	$(".user-btn").remove();
	$('.introjs-tooltip').removeClass('hide');
	$("#secondLoopTrueOrFalse").text("=====> true").addClass("green-color");
	var text = "The second condition is also evaluates to  <span class='ct-code-b-yellow'>true</span> "
			+  "  the total condition will evaluates <span class='ct-code-b-yellow'>true</span>, so"
			+ " the control enters into the if block and check the condition "
			+ " <span class='ct-code-b-yellow'>t1 -> data == t2 -> next -> data </span>.";
	typing('.introjs-tooltiptext', text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = ifCondition()>Next &#8594;</a>");
	});
}

function ifCondition() {
	arrow("#secondLoop", "#ifCondition", function() {
		$(".user-btn").remove();
		var value1 = $("#data" + outerLoop).text()
		var value2 = $("#data" + (innerLoop + 1)).text()
		rotationEffect("#t1Data", value1, function() {
			rotationEffect("#t2NextData", value2, function() {
				if (value1 == value2)  {
			    	$("#ifConTrueorFalse").text("=====> true").addClass("green-color");
		    		$('.introjs-tooltip').removeClass('hide');
	    			var text = "The if condition will evaluates to <span class='ct-code-b-yellow'>true</span>";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = qEqlT2Nxt()>Next &#8594;</a>");
					});
			    } else {
		    		$("#ifConTrueorFalse").text("=====> false").addClass("red-color");
		    		$('.introjs-tooltip').removeClass('hide');
		    		var text = "The if condition will evaluates to <span class='ct-code-b-yellow'>false</span>";
	    			typing('.introjs-tooltiptext', text, function() {
	    				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = incrementT2ValueText()>Next &#8594;</a>");
	    			});
			    }
			});
		});
	});
}

function qEqlT2Nxt() {
	$(".user-btn").remove();
	arrow("#ifCondition", "#fstStat", function() {
		$('.introjs-tooltip').removeClass('hide');
		var text = "<span class='ct-code-b-yellow'>t2 -> next</span>"
		  	+ "(i.e <span class='ct-code-b-yellow'>"+ $("#next" + innerLoop).text() 
			+ "</span>) is stored in <span class='ct-code-b-yellow'>q</span>"
		typing('.introjs-tooltiptext', text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = qEQlT2NxtAnimation()>Next &#8594;</a>");
		});
	})
}

function qEQlT2NxtAnimation() {
	$(".user-btn").remove();
	$("#nodeVal4").removeClass("opacity00");
	fadeInBounceEffectWithTimelineMax("#next" + (innerLoop), "#nodeVal4",  function() {
		if ($("#nodeVal4").text().trim() == "NULL") {
			$("#line26").remove();
            $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = qNxtToT2Nxt()>Next &#8594;</a>");
		} else {
			if ($("#l2ValInUn").text().trim() == "NULL") {
				svgArrowRevil(true);
			} else if ($("#l1ValInUn").text().trim() == "NULL") {
				svgArrowRevil(false);
			} else {
				var fstNdeInSecdListNum =  $("#dynamicNodes1 > .list-nodes").length
				if (innerLoop < fstNdeInSecdListNum) {
					svgArrowRevil(true);
				} else {
					svgArrowRevil(false);
				}
			}
		}  
	});
}

function svgArrowRevil(arrowFlag) {
	if (arrowFlag) {
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory4", "#nextDiv" + (innerLoop + 1), "#svgId", "line26", "arrow", function() {
			 $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = qNxtToT2Nxt()>Next &#8594;</a>");
		});
	} else {
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory4", "#nextDiv" + (innerLoop + 1), "#svgId", "line26", "arrow", function() {
			 $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = qNxtToT2Nxt()>Next &#8594;</a>");
		});
	}
	
}

function qNxtToT2Nxt() {
	$(".user-btn").remove();
	$('.introjs-tooltip').removeClass('hide');
	arrow("#fstStat", "#secStat", function() {
		var text = "The <span class='ct-code-b-yellow'>q -> next</span> value (i.e "
			+ "<span class='ct-code-b-yellow'>"+ $("#next" + (innerLoop + 1)).text() +"</span>)"
			+ " stored in <span class='ct-code-b-yellow'>t2 -> next</span>.";
		typing('.introjs-tooltiptext', text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = qNxtToT2NxtAnimation()>Next &#8594;</a>");
		});	
	})
	
}

function qNxtToT2NxtAnimation() { 
	$(".user-btn").remove();
	fadeInBounceEffectWithTimelineMax("#next" + (innerLoop + 1), "#next" + innerLoop,  function() {
		if ((lang == 'cpp') && $("#next" + innerLoop).text().trim() == $("#firstVal2").text().trim()) {
			$("#line222").remove();
		}
		$("#line" + (innerLoop)).remove();
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = freeQNode()>Next &#8594;</a>");
	});
}


function arrowRevilFunction(isArrow) {
	if (isArrow) {
		$("#line" + (innerLoop + 1)).remove();
		svgAnimatingLineBottomToTop("#animatinDiv", "#nextDiv" + (innerLoop), "#dataDiv"
				+ (innerLoop + 2), "#svgId", "line" + (innerLoop + 1), "arrow", function() {
			$("#line" + (innerLoop + 1)).attr("class", "svg-line lineNumber");
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = freeQNode()>Next &#8594;</a>");
		});
	} else {
		$("#line" + (innerLoop + 1)).remove();
		svgAnimatingLineRightToLeft("#animatinDiv", "#nextDiv" + (innerLoop), "#dataDiv" + (innerLoop + 2), "#svgId", "line" + (innerLoop + 1), 
						"arrow", function() {
			$("#line" + (innerLoop + 1)).attr("class", "svg-line lineNumber");
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = freeQNode()>Next &#8594;</a>");
		});
	}
}

function freeQNode() {
	$(".user-btn").remove();
	$('.introjs-tooltip').removeClass('hide');
	arrow("#secStat", "#freeQnode", function() {
		var text = "free the node <span class='ct-code-b-yellow'>q</span>";
		typing('.introjs-tooltiptext', text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = freeQNodeAnimation()>Next &#8594;</a>");
		});
	});
}

function freeQNodeAnimation() {
	$(".user-btn").remove();
	$("#line26, #line"+ (innerLoop + 1)).remove();
	TweenMax.to("#node" + (innerLoop + 1), 0.5, { top : -80, onComplete: function() {
		$("#node" + (innerLoop + 1)).addClass("opacity00").remove();
		changePosIds();
		regenerateArrows();
		var lValue = $("#nodeVal3").text().trim();
	  	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
	  			+ "onclick = innerLoopConditionText1("+ "\"" + lValue.toString() + "\"" +")>Next &#8594;</a>");
	}});
}

function incrementT2ValueText() {
	$(".user-btn").remove();
	$("#secondLoopTrueOrFalse, #ifConTrueorFalse").removeClass('red-color green-color').empty();
	$("#secFstCon, #secSecCon").removeClass("true");
	$("#secFstCon, #secSecCon").removeClass("false");
	$("#t2Inc").addClass("blue");
	$('.introjs-tooltip').removeClass('hide');
	var selector;
	if (lang == 'c') {
		selector = "#t2Increment";
	} else if (lang == 'cpp') {
		selector = '#secondLoop';
	}
	arrow("#secondLoop", selector, function() {
		var text = "Now the <span class='ct-code-b-yellow'>t2</span> value will be incremet by "
				+ " <span class='ct-code-b-yellow'>t2 -> next</span> value. ";
		typing('.introjs-tooltiptext', text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = incrementT2Value()>Next &#8594;</a>");
		});
	});
}

function incrementT2Value() {
	$(".user-btn").remove();
	$("#t2Inc").removeClass("blue");
	var selector;
	if (lang == 'c') {
		selector = "#ifCondition";
	} else if (lang == 'cpp') {
		selector = '#secondLoop';
	}
	$(".user-btn").remove();
	if ($("#next" + innerLoop).text().trim() == "NULL") {
		t2ArrowRevil(true);
	} else {
		if ($("#l2ValInUn").text().trim() == "NULL") {
			t2ArrowRevil(true);
		} else if ($("#l1ValInUn").text().trim() == "NULL") {
			t2ArrowRevil(false);
		} else {
			var fstNdeInSecdListNum =  $("#dynamicNodes1 > .list-nodes").length
			if (innerLoop <= fstNdeInSecdListNum) {
				t2ArrowRevil(true);
			} else {
				t2ArrowRevil(false);
			}
		}
	}
} 

function t2ArrowRevil(isT2Arrow) {
	if (isT2Arrow) {
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory3", "#nextDiv"
				+ innerLoop, "#svgId", "line25", "arrow", function() {
			$("#line25").remove();
			t2incrementValue();
		});		
	} else {
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory3", "#nextDiv"
				+ innerLoop, "#svgId", "line25", "arrow", function() {
			$("#line25").remove();
			t2incrementValue();
		});
	}
}

function t2incrementValue() {
	fadeInBounceEffectWithTimelineMax("#next" + innerLoop, "#nodeVal3",  function() {
		removeLine();
		innerLoop++;
		var lValue = $("#nodeVal3").text().trim();
   		if ($("#nodeVal3").text().trim() == "NULL") {
   		 	$("#line23").remove();
            $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
            		+ 'onclick = innerLoopConditionText1("NULL")>Next &#8594;</a>');
   		} else {
   			if ($("#l2ValInUn").text().trim() == "NULL") {
   				t2IncArrow(true, lValue);
			} else if ($("#l1ValInUn").text().trim() == "NULL") {
				t2IncArrow(false, lValue);
			} else {
				var fstNdeInSecdListNum =  $("#dynamicNodes1 > .list-nodes").length
				if (innerLoop <= fstNdeInSecdListNum) {
					t2IncArrow(true, lValue);
				} else {
					t2IncArrow(false, lValue);
				}
			}
    	}
	});
}

function t2IncArrow(incFlag, lValue) {
		$("#line23").remove();
	if (incFlag) {
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory3", "#nextDiv"
		+ innerLoop, "#svgId", "line23", "arrow", function() {
		   	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
				+ "onclick = innerLoopConditionText1("+ "\"" + lValue.toString() + "\"" +")>Next &#8594;</a>");
			});	
	} else {
		$("#line23").remove();
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory3", "#nextDiv"
		+ innerLoop, "#svgId", "line23", "arrow", function() {
		    $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
					+ "onclick = innerLoopConditionText1("+ "\"" + lValue.toString() + "\"" +")>Next &#8594;</a>");
		});
	}
}

function t1IncrementText() {
	$("#secondLoopTrueOrFalse, #ifConTrueorFalse, #firstLoopTrueOrFalse").empty().removeClass('red-color green-color');
	$("#secFstCon, #secSecCon, #fstFstCon, #fstSecCon").removeClass("true");
	$("#secFstCon, #secSecCon, #fstFstCon, #fstSecCon").removeClass("false");
	$(".user-btn").remove();
	$("#t1Inc").addClass("blue");
	$("#t1Inc").effect( "highlight",{color: 'blue'}, 500);
	arrow("#secondLoop", "#firstLoop", function() {
		$('.introjs-tooltip').removeClass('hide');
		var text = "Now the <span class='ct-code-b-yellow'>t1</span> value will be increment by "
				+ " <span class='ct-code-b-yellow'>t1 -> next</span> value. ";
		typing('.introjs-tooltiptext', text, function() {
			innerLoop = 2;
			 $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick = t1Increment()>Next &#8594;</a>");
		});
	});
}

function t1Increment() {
	$(".user-btn").remove();
	$("#t1Inc").removeClass("blue");
	if ($("#next" + (innerLoop - 1)).text().trim() == "NULL") {
		t1ArrowRevil(true);
	} else {
		if ($("#l2ValInUn").text().trim() == "NULL") {
			t1ArrowRevil(true);
		} else if ($("#l1ValInUn").text().trim() == "NULL") {
			t1ArrowRevil(false);
		} else {
			var fstNdeInSecdListNum =  $("#dynamicNodes1 > .list-nodes").length
			if (outerLoop <= fstNdeInSecdListNum ) {
				t1ArrowRevil(true);
			} else {
				t1ArrowRevil(false);
			}
		}
	}
}

function t1ArrowRevil(t1Arroew) {
	if (t1Arroew) {
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + outerLoop, "#svgId", "line25", "arrow", function() {
			$("#line25").remove();
			t1incrementValue();
		});
	} else {
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + outerLoop, "#svgId", "line25", "arrow", function() {
			$("#line25").remove();
			t1incrementValue();
		});
	}
}

function t1incrementValue() {
	fadeInBounceEffectWithTimelineMax("#next" + outerLoop, "#nodeVal2",  function() {
		removeLine();
		outerLoop++;
		innerLoop = outerLoop
		var lValue = $("#nodeVal2").text().trim();
   		if ($("#nodeVal2").text().trim() == "NULL") {
   		 	$("#line22").remove();
            $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
            			+ "onclick = outerLoopConditionText("+ "\"" + lValue.toString() + "\"" +")>Next &#8594;</a>");
   		} else {
   			if ($("#l2ValInUn").text().trim() == "NULL") {
   				t2IncArrowRevil(true, lValue);
			} else if ($("#l1ValInUn").text().trim() == "NULL") {
				t2IncArrowRevil(false, lValue);
			} else {
				var fstNdeInSecdListNum =  $("#dynamicNodes1 > .list-nodes").length
				if (outerLoop <= fstNdeInSecdListNum) {
					t2IncArrowRevil(true, lValue);	
				} else {
					t2IncArrowRevil(false, lValue);
				}	
			}
    	}
	});
}

function t2IncArrowRevil(t2IncArrow, lValue) {
	if (t2IncArrow) {
		$("#line22").remove();
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + outerLoop, "#svgId", "line22", "arrow", function() {
		   	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
		   			+ "onclick = outerLoopConditionText("+ "\"" + lValue.toString() + "\"" +")>Next &#8594;</a>");
			});
	} else {
		$("#line22").remove();
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + outerLoop, "#svgId", "line22", "arrow", function() {
		    $(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'" 
					+ "onclick = outerLoopConditionText("+ "\"" + lValue.toString() + "\"" +")>Next &#8594;</a>");
		});
	}
}

function checkCondition(selector1, selector2, value, callBackFunction) {
	$(".user-btn").remove();
	$('.introjs-tooltip').addClass('hide');
	rotationEffect(selector1, value, function() {
    	$(selector2).effect( "highlight",{color: 'blue'}, 500);
    	var t1Con = (value != "NULL");
    	if (t1Con) {
    		$(selector2).addClass("true");
    	} else {
    		$(selector2).addClass("false");
    	}
    	if (typeof callBackFunction === "function") {
    		callBackFunction();
    	}
	});
}

function whileConditionCheckingText(selector1, selector2, callBackFunction) {
	$('.introjs-tooltiptext').append("<span id='whileConForAddNode' class='opacity00 ct-code-b-yellow'>"
						+ "<span id='valOfX' class='position'>"+ selector1 +"</span> "+ selector2 +"</span> "
						+ "<span id='whileTrueOrFalse' class='opacity00'></span><div id='appendText'></div>");
	$('.introjs-tooltip').removeClass('hide');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}


function ifConditionCheckingText(selector1, selector2, callBackFunction) {
	$('.introjs-tooltiptext').append("<span id='ifConForAddNode' class='opacity00 ct-code-b-yellow'>"
								+ "<span id='valOfFirst' class='position'>"+ selector1 +"</span> "+ selector2 
								+ "</span> &nbsp;&nbsp;<span id='ifTrueOrFalse' class='opacity00'></span><div id='appendText'></div>");
	$('.introjs-tooltip').removeClass('hide');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function whileConForT1nextNotEqNull(firstVal, caseName) {
	rotationEffect("#valOfX", firstVal, function() {
		if (firstVal != "NULL") {
			$("#whileTrueOrFalse").html("====> <span class='ct-lime-color ct-fonts'>true</span>");
			zoomInEffect("#whileTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-lime-color ct-fonts'>true</span>. Hence the control"
						+ " enters into the while-loop.";
				typing("#appendText", text, function() {
					if (caseName == "whileT1NxtNotEqNull") {
						introNextSteps("#t1nxtToT1", "", "bottom");
					} else {
						printfCount = 9;
						introNextSteps("#printf9", "printData", "bottom");
					}
					$('.introjs-nextbutton').show();
				});
			});
		} else {
			$("#whileTrueOrFalse").html("====> <span class='ct-code-b-red ct-fonts'>false</span>");
			zoomInEffect("#whileTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-code-b-red ct-fonts'>false</span>. Hence the control comes out"
							+ " of the while-loop.";
				typing("#appendText", text, function() {
					if (caseName == "whileT1NxtNotEqNull") {
						introNextSteps("#t2StoreT1Nxt", "", "bottom");
					} else {
						printfCount = 10;
						$("#animatinDiv").removeClass("z-index1000000");
						introNextSteps("#printf10", "printNull", "bottom");
					}
					$('.introjs-nextbutton').show();
				});
			});
		}
	});
}

function ifConToChekisFirstEqlToNull(firstVal, caseName) {
	rotationEffect("#valOfFirst", firstVal, function() {
		if (firstVal == "NULL") {
			$("#ifTrueOrFalse").html("====> <span class='ct-lime-color ct-fonts'>true</span>");
			zoomInEffect("#ifTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-lime-color ct-fonts'>true</span>. Hence the control"
							+ " enters into the if-block.";
				typing("#appendText", text, function() {
					if (caseName == "ifFirstEqlToNull") {
						introNextSteps("#firstEqlToTemp", "", "bottom");
					} else if (caseName == "ifT"+ tCount +"IsNull") {
						introNextSteps("#returnT" + tCount, "", "bottom");
					} else if (caseName == "ifFirstIsNull") {
						printfCount = 7;
						introNextSteps("#printf7", "printEmpty", "bottom");
					}
					$('.introjs-nextbutton').show();
				});
			});
		} else {
			$("#ifTrueOrFalse").html("====> <span class='ct-code-b-red ct-fonts'>false</span>");
			zoomInEffect("#ifTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-code-b-red ct-fonts'>false</span>. Hence the control comes out"
							+ " of the if-block.";
				typing("#appendText", text, function() {
					$('.introjs-tooltip').removeClass('hide');
					if (caseName == "ifFirstEqlToNull") {
						introNextSteps("#tempToQNext", "", "bottom");
					} else if (caseName == "ifT1IsNull") {
						tCount++;
						introNextSteps("#ifT2IsNull", "", "bottom");
					} else if (caseName == "ifFirstIsNull") {
						printfCount = 8;
						introNextSteps("#printf8", "printListEle", "bottom");
					} else {
						introNextSteps("#t1StoredToT3", "", "bottom");
					}
					$('.introjs-nextbutton').show();
				});
			});
		}
	});
}

function checkWhileCondForisDataValIsNullOrNot() {
	var dataVal = $("#nodeDataVal" + (outputLineCount - 1)).val();
	rotationEffect("#valOfX", dataVal, function() {
		if (dataVal != -1) {
			$("#whileTrueOrFalse").html("====> <span class='ct-lime-color ct-fonts'>true</span>");
			zoomInEffect("#whileTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-lime-color ct-fonts'>true</span>. Hence the control enters"
							+ " into the while-loop.";
				typing("#appendText", text, function() {
					introNextSteps("#createNewTempNode", "createTempNode", "bottom");
					$('.introjs-nextbutton').show();
				});
			});
		} else {
			$("#whileTrueOrFalse").html("====> <span class='ct-code-b-red ct-fonts'>false</span>");
			zoomInEffect("#whileTrueOrFalse", function() {
				var text = "The condition evaluates to <span class='ct-code-b-red ct-fonts'>false</span>. Hence the control comes out"
							+ " of the while-loop.";
				typing("#appendText", text, function() {
					printfCount = 1;
					if (lang == 'c') {
						introNextSteps("#returnFirst", "", "bottom");
						$('.introjs-nextbutton').show();
					} else if (lang == 'cpp') {
						nextBtnWithoutCalling(function() {
							$("#xNode").addClass("opacity00");
							$("#xVal, #nodeAddress" + returnValCount).empty();
							$("#line" + tempLine + ", #line" + qLine).remove();
							printfCount = ++returnValCount;
							if (returnValCount == 2) {
								introNextSteps("#printf2", "enterList1Elem", "bottom");
								introjs.nextStep();
							} else if (buttonName == "intersect") {
								customIntroNxtStep("#intrsctMainIfCond", 'hide');
							} else {
								introNextSteps("#callConcatMethod", "methodCall", "bottom");
								introjs.nextStep();
								$("#sllOperations").empty().addClass("opacity00");
							}
						});
					}
				});
			});
		}
	});
}

function printL1NodeData(val) {
	$('#nodeVal1').effect('highlight', {color: 'blue'}, 500, function() {
		if (val == 1) {
			svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + count, "#svgId", "line23", "arrow", function() {
				l1L2ArrowAfterAnimation();
			});
		} else {
			svgAnimatingLineRightToLeft("#animatinDiv", "#lastNodeMemory1", "#dataDiv" + count, "#svgId", "line23", "arrow", function() {
				l1L2ArrowAfterAnimation();
			});
		}
	});
}

function l1L2ArrowAfterAnimation() {
	$("#line23").remove();
	$("#dataDiv" + count).effect( "highlight",{color: 'blue'}, 500, function() {
		$("#outData"+count).text($("#dataDiv" + count).text()).addClass('opacity00 position');
		fromEffectWithTweenMax("#dataDiv" + count, "#outData"+count, false, function() {
			$("#outData"+count).css("color", "yellow");
			zoomInEffect("#arrow" + count, function() {
            	customIntroNxtStep("#qNxtToQ", "", "bottom");
			});
		});
	});
}

function printL1AndL2Nodes() {
	if (lang == 'c') {
		var isl1NodeData = $("#l1Val").text().trim() != "NULL" && $("#l2Val").text().trim() == "NULL";
		var isL2NodeData = $("#l2Val").text().trim() != "NULL" && $("#l1Val").text().trim() == "NULL";
	} else if (lang == 'cpp') {
		var isl1NodeData = $("#firstVal1").text().trim() != "NULL" && $("#firstVal2").text().trim() == "NULL";
		var isL2NodeData = $("#firstVal2").text().trim() != "NULL" && $("#firstVal1").text().trim() == "NULL";
	}
	if (isl1NodeData) {
		printL1NodeData(1);
	} else if (isL2NodeData) {
		printL1NodeData(2);
	} else {
		if (count < fstNdeInSecdList) {
			printL1NodeData(1);
		} else {
			printL1NodeData(2);
		}
	}
}

function l1ValueNorEqNullAndL2ValNull(val) {
	if (val == 1) {
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + count, "#svgId", "line23", "arrow", function() {
			l1L2NorEqlNullArrowAfterAnimation(val);
		});
	} else {
		if (buttonName == 'intersect') {
			svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#dataDiv" + count, "#svgId", "line23", "arrow", function() {
				l1L2NorEqlNullArrowAfterAnimation(val);
			});
		} else {
			svgAnimatingLineRightToLeft("#animatinDiv", "#lastNodeMemory1", "#dataDiv" + count, "#svgId", "line23", "arrow", function() {
				l1L2NorEqlNullArrowAfterAnimation(val);
			});
		}
	}
}

function l1L2NorEqlNullArrowAfterAnimation(val) {
	$("#line23").remove();
	$("#nextDiv" + count).effect( "highlight",{color: 'blue'}, 500, function() {
		$("#outData"+count).text($("#dataDiv"+count).text());
		fadeInBounceEffectWithTimelineMax("#next" + count, "#nodeVal1",  function() {
			count++;
			$('#nodeVal1').effect('highlight', {color: 'blue'}, 500, function() {
				$("#line22").remove();
				if ($("#nodeVal1").text().trim() == "NULL") {
					customIntroNxtStep("#whileQNotEqNull", "", "bottom");
				} else {
					if (buttonName == 'intersect') {
						if (val == 1) {
							svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + count, "#svgId", "line22", "arrow", function() {
		             			customIntroNxtStep("#whileQNotEqNull", "", "bottom");
		             		});
						} else {
							svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#dataDiv" + count, "#svgId", "line22", "arrow", function() {
			            		customIntroNxtStep("#whileQNotEqNull", "", "bottom");
							});
						}
					} else {
						if (val == 1) {
							if ($('#dynamicNodes1 .node').length >= innerLoop || $('#dynamicNodes1 .node').length >= outerLoop) {
								svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + count, "#svgId", "line22", "arrow", function() {
									customIntroNxtStep("#whileQNotEqNull", "", "bottom");
								});
							} else {
								svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + count, "#svgId", "line22", "arrow", function() {
									customIntroNxtStep("#whileQNotEqNull", "", "bottom");
								});
							}
						} else {
							svgAnimatingLineRightToLeft("#animatinDiv", "#lastNodeMemory1", "#dataDiv" + count, "#svgId", "line22", "arrow", function() {
			            		customIntroNxtStep("#whileQNotEqNull", "", "bottom");
							});
						}
					}
				}
			});
		});
	});
}


function firstPartArrowAnimation() {
	svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + count, "#svgId", "line23", "arrow", function() {
		$("#line23").remove();
		$("#nextDiv" + count).effect( "highlight",{color: 'blue'}, 500, function() {
			$("#outData"+count).text($("#dataDiv"+count).text());
			fadeInBounceEffectWithTimelineMax("#next" + count, "#nodeVal1",  function() {
				$('#nodeVal1').effect('highlight', {color: 'blue'}, 500, function() {
					if ($("#nodeVal1").text().trim() == "NULL") {
						customIntroNxtStep("#whileQNotEqNull", "", "bottom");
					} else {
						$("#line22").remove();
						if (count < (fstNdeInSecdList - 1)) {
							count++;
							svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + count, "#svgId", "line22", "arrow", function() {
		        	       		customIntroNxtStep("#whileQNotEqNull", "", "bottom");
		                   	});
						} else {
							count++;
							svgAnimatingLineRightToLeft("#animatinDiv", "#lastNodeMemory1", "#dataDiv" + count, "#svgId", "line22", "arrow", function() {
		                  		customIntroNxtStep("#whileQNotEqNull", "", "bottom");
		                   	});
						}
					}
				});
       		});
		});
	});
}

function mainIfCondText(val1, cond, exp, val2, callBackFunction) {
	$('.introjs-tooltiptext').append("<span class='ct-code-b-yellow opacity00 position' id=conditions><span id='condition1'"
								+ " class='position'><span id='l1Value' class='position'>" + val1 + "</span> " + cond + " NULL</span> "
								+ exp + " <span id='condition2' class='position'><span id='l2Value' class='position'>"
								+ val2 + "</span> " + cond + " NULL</span></span> <span id='whileTrueOrFalse'></span> <div id='appendText'></div>");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function mainIfCondChecking(caseName, id1, id2, fromId) {
	var frstCond, secndCond, mainCond;
	if (caseName == "mainIfCond") {
		mainIfCondText("l1", "==", "||", "l2", function() {
			frstCond = $(id1).text() == "NULL";
			secndCond = $(id2).text() == "NULL";
			mainCond = frstCond || secndCond;
		});
	} else {
		mainIfCondText("t1", "!=", "&&", "t2", function() {
			frstCond = $(id1).text() != "NULL";
			secndCond = $(id2).text() != "NULL";
			mainCond = frstCond && secndCond;
		});
	}
	setTimeout(function() {
		toEffectAnimation(fromId, "#conditions", function() {
			$("#l1Value").effect("highlight", {color: 'yellow'}, 300, function() {
				effectAndRotation(id1, 'blue', '#l1Value', $(id1).text(), function() {
					effectAndRotation('#condition1', 'yellow', '#condition1', frstCond, function() {
						nextBtnWithoutCalling(function() {
							$("#l2Value").effect("highlight", {color: 'yellow'}, 300, function() {
								effectAndRotation(id2, 'blue', '#l2Value', $(id2).text(), function() {
									effectAndRotation('#condition2', 'yellow', '#condition2', secndCond, function() {
										var text1 = "Condition evaluates to ";
										if (mainCond == true) {
											$("#whileTrueOrFalse").html("====> <span class='ct-lime-color ct-fonts'>true</span>");
											if (caseName == "mainIfCond") {
												printfCount = 5;
												introNextSteps("#printf5", "IntrsctionEmpty");
												text2 = "Hence the control enters into the if-block.";
											} else {
												introNextSteps("#intrsctIfCond");
												text2 = "Hence the control enters into the while-loop.";
											}
											text = text1 + "<span class='ct-lime-color ct-fonts'>true</span>. " + text2;
										} else {
											$("#whileTrueOrFalse").html("====> <span class='ct-code-b-red ct-fonts'>false</span>");
											if (caseName == "mainIfCond") {
												$("#sllOperations").empty();
												preSortMethod();
												$("#srtMethod").addClass("sorting");
												introNextSteps("#callL1Srt", 'callSrt1');
												text2 = "Hence the control comes out of the if-block."
											} else {
												printfCount = lineCount = 2;
												if (lang == 'c') {
													introNextSteps("#retn2", "return2");
												} else if (lang == 'cpp') {
													$("#line31, #line32, #line45, #line46, #intrsctionMethod, #line" + tempLine).remove();
													$("#nodeAddress1, #nodeAddress2	").empty();
													console.log('1396 false');
													var arr=[];
													for (i = 0; i < secSvgIds.length; i++) {
														if (secSvgIds[i] != '#line32') {
															arr.push(secSvgIds[i]);
														}
													}
													rechangeSVGLineHeights(arr, "#dynamicNodes2 .node");
													rechangeSVGLineHeights(thirdSvgIds, "#dynamicNodes3 .node");
													introjs.refresh();
													printfCount = 6;
													introNextSteps("#printf6", "printIntrsction");
												}
												text2 = "Hence the control comes out of the while-loop.";
											}
											text = text1 + "<span class='ct-code-b-red ct-fonts'>false</span>. " + text2;
										}
										zoomInEffect("#whileTrueOrFalse", function() {
											typing("#appendText", text, function() {
												$('.introjs-nextbutton').show();
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
	}, 500);
}

function ifCondAnimationLineCNCPP(callBackFunction) {
	if (lang == 'c') {
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2 > div:first", "#nextDiv" + printfCount, "#svgId", "line"+ tempLine,
						"arrow", function() {
			callBackFunction();
		});
	} else if (lang == 'cpp') {
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + printfCount, "#svgId", "line"+ tempLine, "arrow", function() {
			callBackFunction();
		});
	}
} 

function ifCondAnimation(caseName, fromId) {
	if (caseName == "intrsctIfCheck") {
		var ifCond = parseInt($("#data" + nodeCount).text()) < parseInt($("#data" + printfCount).text());
	} else {
		var ifCond = parseInt($("#data" + nodeCount).text()) > parseInt($("#data" + printfCount).text());
	}
	toEffectAnimation(fromId, "#mainCond", function() {
		$("#frstCond").effect("highlight", {color: 'yellow'}, 300, function() {
			$("#nodeVal1").effect("highlight", {color: 'blue'}, 500, function() {
				svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + nodeCount, "#svgId", "line"+ infoLine, "arrow", function() {
					effectAndRotation("#data" + nodeCount, "blue", "#frstCond", $("#data" + nodeCount).text(), function() {
						$("#secndCond").effect("highlight", {color: 'yellow'}, 300, function() {
							$("#nodeVal2").effect("highlight", {color: 'blue'}, 500, function() {
								ifCondAnimationLineCNCPP(function() {
									effectAndRotation("#data" + printfCount, "blue", "#secndCond", $("#data" + printfCount).text(), function() {
										var text1 = "Condition evaluates to ";
										if (ifCond == true) {
											$("#whileTrueOrFalse").html(" ====> <span class='ct-lime-color ct-fonts'>true</span>");
											text = text1 + "<span class='ct-lime-color ct-fonts'>true</span>."
													+ " Hence the control enters into the if-block.";
											if (caseName == "intrsctIfCheck") {
												introNextSteps("#intrsctIfT1Next");
											} else {
												introNextSteps("#intrsctElseIfT2Next");
											}
										} else {
											$("#whileTrueOrFalse").html(" ====> <span class='ct-code-b-red ct-fonts'>false</span>");
											text = text1 + "<span class='ct-code-b-red ct-fonts'>false</span>."
													+ " Hence the control comes out of the if-block.";
											if (caseName == "intrsctIfCheck") {
												introNextSteps("#intrsctElseIfCond");
											} else {
												introNextSteps("#callAddMethod", "methodCalling");
											}
										}
										typing('#appendText', text, function() {
											$("#line" + infoLine + ", #line" + tempLine).remove();
											$('.introjs-nextbutton').show();
										})
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

function t1NxtAnimation(callBackFunction) {
	$("#nodeVal1").effect("highlight", {color: 'blue'}, 500, function() {
		fadeInBounceEffectWithTimelineMax("#next" + nodeCount, "#nodeVal1", function() {
			$("#line45, #line" + infoLine + ", #line" + tempLine).remove();
			nodeCount++;
			if ($('#next' + (nodeCount - 1)).text() != 'NULL') {
				svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + nodeCount, "#svgId", "line45", "arrow", function() {
					callBackFunction();
				});
			} else {
				callBackFunction();
			}
		});
	});
}

function ifCondText(selector1, condition, selector2, callBackFunction) {
	text = "<span class='ct-code-b-yellow opacity00 position' id='mainCond'><span id='frstCond' class='position'>" + selector1 + "</span> "
			+ condition + " <span id='secndCond' class='position'>" + selector2 + "</span></span> <span id='whileTrueOrFalse'></span>"
			+ "<div id='appendText'></div>";
	typing('.introjs-tooltiptext', text, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function t2NxtAnimation(callBackFunction) {
	$("#nodeVal2").effect("highlight", {color: 'blue'}, 500, function() {
		fadeInBounceEffectWithTimelineMax("#next" + printfCount, "#nodeVal2", function() {
			$("#line46, #line" + infoLine + ", #line" + tempLine).remove();
			printfCount++;
			if ($('#next' + (printfCount - 1)).text() != 'NULL') {
				if (lang == 'cpp') {
					svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2 div:first", "#nextDiv" + printfCount, "#svgId", "line46",
									"arrow", function() {
						callBackFunction();
					});
				} else if (lang == 'c') {
					svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2 div:first", "#nextDiv" + printfCount, "#svgId", "line46", 
								"arrow", function() {
						callBackFunction();
					});
				}
			} else {
				callBackFunction();
			}
		});
	});
}
	
function effectAndRotation(id1, clrVal, id2, val, callBackFunction) {
	$(id1).effect("highlight", {color: clrVal}, 500, function() {
		rotationEffect(id2, val, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
	})
}

function creatingT1T2L3(callBackFunction) {
	createLastNode(returnValCount, "l3", 0);
	createLastNode(returnValCount, "temp2", 14); createLastNode(returnValCount, "t1", 1);
	createLastNode(returnValCount, "temp2", 13); createLastNode(returnValCount, "t2", 2);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function frloop1InitText(idxVal) {
	$('.user-btn, .popover').remove();
	$('#srtingExplanation').removeClass('hide'); 
	returnValCount = 1;
	arrow('#frLoop1', '#frLoop1', function() {
		$('#loop1Init').effect( "highlight",{color: 'blue'}, 800, function() {
			text1 = '<span class="ct-code-b-black ct-fonts">t1</span> is initialized to <b class="ct-blue-color ct-fonts">first</b> value'
					+ ' (i.e., <b class="ct-blue-color">'
			if ($("#srtMethod").hasClass("sorting")) {
				nodeCount = 0;
				text = text1 + $("#firstVal" + returnValCount).text() + '</b>). <span id="appendButton"></span>'; 
				typing('#srtExplain', text, function() {
					$("#nodeVal" + returnValCount).text($("#firstVal" + returnValCount).text()).addClass("opacity00");
					fromEffectWithTweenMax("#firstVal" + returnValCount, "#nodeVal" + returnValCount, false, function() {
						svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" + idxVal, 
							"#svgId", "line" + tempLine, "arrow", function() {
							$('#appendButton').append("<a class='introjs-button user-btn' onclick=frLoop1CondCheck(" + idxVal + ")>Next &#8594;</a>");
						});
					});
				});
			} else {
				nodeCount = idxVal - 1;
				text = text1 + $("#firstVal" + (returnValCount + 1)).text() + '</b>). <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					$("#nodeVal" + returnValCount).text($("#firstVal" + (returnValCount + 1)).text()).addClass("opacity00");
					fromEffectWithTweenMax("#firstVal" + (returnValCount + 1), "#nodeVal" + returnValCount, false, function() {
						svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" + idxVal, 
							"#svgId", "line" + tempLine, "arrow", function() {
							$('#appendButton').append("<a class='introjs-button user-btn' onclick=frLoop1CondCheck(" + idxVal + ")>Next &#8594;</a>");
						});
					});
				});	
			}
		});
	});
}

function frLoop1CondCheck(idxVal) {
	$('.user-btn, .introjs-duplicate-skipbutton').remove();
	nodeCount++;
	$('#loop1Cond').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
		$("#nodeVal" + returnValCount).effect("highlight", {color: 'blue'}, 500, function() {
			svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#next" + idxVal, 
					"#svgId", "line" + infoLine, "arrow", function() {
				$("#next" + idxVal).effect("highlight", {color: 'blue'}, 500, function() {
					$("#line" + infoLine).remove();
					var text1 = '<span class="ct-code-b-black ct-fonts">t1 -> next != NULL</span> evaluates to ';
					if ($("#next" + idxVal).text() != "NULL") {
						text = text1 + '<span class="ct-code-b-green ct-fonts">true</span>. Hence the control enters into the for-loop'
								+ ' <span id="appendButton"></span>';
						typing('#srtExplain', text, function() {
							if (flag) {
								$('#appendButton').append("<a class='introjs-button user-btn'" 
							 			+ "onclick=frLoop2InitText(" + idxVal + ")>Next &#8594;</a>");
							} else {
								setTimeout(function() {
									frLoop2InitText(idxVal);
								}, 500);
							}
						});
					} else {
						$("#dynamicNodes" + count + " .data-div").not(".completed").first().addClass("completed");
						text = text1 + '<span class="ct-code-b-red ct-fonts">false</span>. Hence the control comes out of the for-loop'
								+ ' <span id="appendButton"></span>';
						typing('#srtExplain', text, function() {
							$('#loop1Cond').css('background', '');
							$('#temp' + infoLine).remove();
							$('#appendButton').append("<a class='introjs-button user-btn'" + "onclick=endingText()>Next &#8594;</a>");
						});
					}
				});
			});
		});
	});
}

function endingText() {
	$('.introjs-duplicate-skipbutton, .user-btn, .fa').remove();
	$("#dynamicNodes" + count + " .data-span").removeAttr("style");
	text = 'All the elements are sorted successfully. <span id="appendButton"></span>';
	typing('#srtExplain', text, function() {
		$('#appendButton').append("<a class='introjs-button user-btn'>next &#8594;</a>");
		$('.user-btn').click(function() {
			$('.user-btn').remove();
			lineCount = 3;
			$("#srtExplain, #sortingLogic").empty('');
			$("#srtingExplanation, #sortingDiv").addClass("hide");
			if (lang == 'c') {
				introNextSteps("#retn3", 'return3');
			} else if (lang == 'cpp') {
				if ($("#srtMethod").hasClass("sorting")) {
					printfCount = returnValCount = 1;
					$("#intersect").addClass("intersect");
				} else {
					printfCount = returnValCount = 2;
					flag = true;
				}
				$('.introjs-tooltip').removeClass('hide');
				$("#line" + infoLine + ", #line" + tempLine).remove();
				$("#nodeAddress" + returnValCount).empty();
				if (returnValCount == 1) {
					console.log('2013 false');
					rechangeSVGLineHeights(secSvgIds, "#dynamicNodes2 .node");
				}
				$("#xNode").addClass("opacity00");
				$("#xNode span").empty();
				if ($("#srtMethod").hasClass("sorting")) {
					$(".sorting").removeClass("sorting");
					introNextSteps("#callL2Srt", "callSrt1");
				} else {
					$("#sortingDiv").addClass("hide");
					nodeCount = count = returnValCount = printfCount = 1;
					$("#sllOperations").empty().addClass("opacity00");
					$("#intersect").addClass("intersection");
					introNextSteps("#printMethod1");
				}
			}
			introjs.nextStep();
		});
	});
}

function frLoop1IncText(idxVal) {
	$('.introjs-duplicate-skipbutton').addClass('opacity00');
	$('.user-btn, #line' + qLine).remove();
	arrow('#frLoop2', '#frLoop1', function() {
		text = '<span class="ct-code-b-black ct-fonts">t1 = t1 -> next</span> <span id="appendButton"></span>';
		typing('#srtExplain', text, function() {
			if (flag) {
				$('#appendButton').append("<a class='introjs-button user-btn' onclick=frLoop1Inc(" + idxVal + ")>Next &#8594;</a>");
			} else {
				setTimeout(function() {
					frLoop1Inc(idxVal);
				}, 500);
			}
		});
	});
}

function frLoop1Inc(idxVal) {
	$('.user-btn').remove();
	$('#loop1Inc').effect( "highlight",{color: 'blue'}, 500, function() {
		returnValCount = 1;
		$("#nodeVal" + returnValCount).effect( "highlight",{color: 'blue'}, 500, function() {
			svgWithFadeInEffect("#lastNodeMemory" + returnValCount, "#nextDiv" + (idxVal - 1), '1211', "#next" + (idxVal - 1), "#nodeVal" 
					+ returnValCount, function() {
				$('#line1211, #line' + tempLine).remove();
				svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" + idxVal, 
						"#svgId", "line" + tempLine, "arrow", function() {
					flag = false;
					$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
							 			+ "onclick=sorting(" + idxVal + ")>Auto Complete &#8594;</a>");
					$('#appendButton').append("<a class='introjs-button user-btn' onclick=frLoop1CondCheck(" + idxVal + ");>Next &#8594;</a>");
				});
			});
		});
	});
}

function frLoop2InitText(idxVal) {
	$('.user-btn, #line' + infoLine).remove();
	$('#loop1Cond').css('background', '');
	returnValCount = 2;
	arrow('#frLoop1', '#frLoop2', function() {
		text = '<span class="ct-code-b-black ct-fonts">t2</span> is initialized to <b class="ct-blue-color">t1 -> next</b> (i.e., '
				+ '<b class="ct-blue-color">' + $("#next" + idxVal).text() + '</b>). <span id="appendButton"></span>';
		typing('#srtExplain', text, function() {
			$('#loop2Init').effect( "highlight",{color: 'blue'}, 800, function() {
				$("#nodeVal" + (returnValCount - 1)).effect("highlight", {color: 'blue'}, 500, function() {
					svgWithFadeInEffect("#lastNodeMemory" + (returnValCount - 1), "#nextDiv" + idxVal, infoLine, "#next" + idxVal, "#nodeVal" 
							+ returnValCount, function() {
						$("#line" + infoLine).remove();
						svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" + (idxVal + 1), 
								"#svgId", "line" + qLine, "arrow", function() {
							$('#appendButton').append("<a class='introjs-button user-btn' onclick=frLoop2CondCheck(" + idxVal + ")>Next &#8594;</a>");
						});
					});
				}); 
			});
		});
	});
}

function frLoop2CondCheck(idxVal) {
	$('.user-btn, #line' + infoLine).remove();
	$('#loop2Cond').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
		$("#nodeVal" + returnValCount).effect("highlight", {color: 'blue'}, 500, function() {
			var text1 = '<span class="ct-code-b-black ct-fonts">t2 != NULL</span> evaluates to ';
			if ($("#next" + idxVal).text() != "NULL") {
				text = text1 + '<span class="ct-code-b-green ct-fonts">true</span>. Hence the control enters into the for-loop.'
						+ ' <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button user-btn' onclick=checkIfCondition(" + idxVal + ")>Next &#8594;</a>");
					} else {
						setTimeout(function() {
							checkIfCondition(idxVal);
						}, 500);
					}
				});
			} else {
				$('#loop2Cond').css('background', '');
				text = text1 + '<span class="ct-code-b-red ct-fonts">false</span>. Hence the control comes out of the for-loop.'
							+ ' <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					$("#dynamicNodes" + count + " .data-div").not(".completed").first().addClass("completed");
					$('.introjs-duplicate-skipbutton').remove();
					$('#appendButton').append("<a class='introjs-button user-btn'" 
					 						+ "onclick=frLoop1IncText(" + ($('.completed').length + 1) + ")>Next &#8594;</a>");
				});
			}
		});
	});
}


function frLoop2IncrementText(idxVal) {
	$('#loop2Cond').css('background', '');
	$('.user-btn, #line' + infoLine).remove();
	arrow('#ifXVal', '#frLoop2', function() {
		text = 'Now, <span class="ct-code-b-black ct-fonts">t2 = t2 -> next</span>. <span id="appendButton"></span>';
		typing('#srtExplain', text, function() {
			if (flag) {
				$('#appendButton').append("<a class='introjs-button user-btn' onclick=frLoop2Increment(" + idxVal + ")>Next &#8594;</a>");
			} else {
				setTimeout(function() {
					frLoop2Increment(idxVal);
				}, 500);
			}
		});
	});
}

function frLoop2Increment(idxVal) {
	$('#ifXVal, #t1InfoVal, #t2InfoVal').css('background', '');
	$('.user-btn').remove();
	$('#loop2Inc').effect( "highlight",{color: 'blue'}, 500, function() {
		idxVal++;
		$("#nodeVal" + returnValCount).effect( "highlight",{color: 'blue'}, 500, function() {
			svgWithFadeInEffect("#lastNodeMemory" + returnValCount, "#nextDiv" + idxVal, '1211', "#next" + idxVal,
						"#nodeVal" + returnValCount, function() { 
				$('#line1211, #line' + qLine).remove();
				if ($('#nodeVal' + returnValCount).text() != 'NULL') {
					svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory" + returnValCount, "#nextDiv" + (idxVal + 1), 
							"#svgId", "line" + qLine, "arrow", function() {
						flag = false;
						setTimeout(function() {
							frLoop2CondCheck(idxVal);
						}, 500);
					});
				} else {
					flag = false;
					setTimeout(function() {
						frLoop2CondCheck(idxVal);
					}, 500);
				}
			});
		});
	});
}

function checkIfCondition(idxVal) {
	$('.user-btn').remove();
	$('#loop2Cond').css('background', '');
	arrow('#frLoop2', '#loopIfCond', function() {
		$('#loopIfCond').effect( "highlight",{color: 'blue'}, 500, function() {
			var t1 = parseInt($("#data" + nodeCount).text());
			var t2 = parseInt($("#data" + (idxVal + 1)).text());
			var text1 = '<span class="ct-code-b-black ct-fonts">t1 -> data > t2 -> data</span> evaluates to ';
			if (t1 > t2) {
				text = text1 + '<span class="ct-code-b-green ct-fonts">true</span>. Hence the control enters into the if-block.'
							+ ' <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					setTimeout(function() {
						swapElements(idxVal);
					}, 500);
				});
			} else {
				text = text1 + '<span class="ct-code-b-red ct-fonts">false</span>. <span id="appendButton"></span>';
				typing('#srtExplain', text, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button user-btn'" 
					 			+ "onclick=frLoop2IncrementText(" + idxVal + ")>Next &#8594;</a>");
					} else {
						setTimeout(function() {
							frLoop2IncrementText(idxVal);
						}, 500);
					}
				});
			}
		});
	});
}

function swapElements(idxVal) {
	arrow('#loopIfCond', '#ifXVal', function() {
		text = 'Now swap the elements. <span id="appendButton"></span>';
		typing('#srtExplain', text, function() {
			$('#appendButton').append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$('.user-btn').click(function() {
				$('.user-btn').remove();
				$('#ifXVal, #t1InfoVal, #t2InfoVal').css('background', 'lightgreen');
				$('#ifXVal').effect( "highlight",{color: 'blue'}, 500, function() {
					$("#nodeVal" + (returnValCount -1)).effect( "highlight",{color: 'blue'}, 500, function() {
						svgWithFadeInEffect("#lastNodeMemory" + (returnValCount -1), "#nextDiv" + nodeCount, infoLine, 
								"#data" + nodeCount, "#xVal", function() {
							$("#line" + infoLine).remove();
							$('#t1InfoVal').effect( "highlight",{color: 'blue'}, 500, function() {
								$("#nodeVal" + returnValCount).effect( "highlight",{color: 'blue'}, 500, function() {
									svgWithFadeInEffect("#lastNodeMemory" + returnValCount, "#nextDiv" + (idxVal + 1), infoLine,
											"#data" + (idxVal + 1), "#data" + nodeCount, function() {
										$('#t2InfoVal').effect( "highlight",{color: 'blue'}, 800, function() {
											fadeInBounceEffectWithTimelineMax("#xVal", "#data" + (idxVal + 1), function() {
												$("#line" + infoLine).remove();
												setTimeout(function() {
													frLoop2IncrementText(idxVal);
												},500);
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
	});
}

function sorting(idxVal) {
	$(".introjs-duplicate-skipbutton, .user-btn, #line" + infoLine + ", #line" + tempLine + ", #line" + qLine).remove();
	if ($("#srtMethod").hasClass("sorting")) {
		nodeCount = $('.completed').length;
		idxVal = nodeCount + 1;
		returnValCount = 1;
		if (idxVal <= $("#dynamicNodes" + returnValCount + " .data-div").length) {
			mainFrSorting(idxVal);
		}
	} else {
		nodeCount = $('.completed').length;
		idxVal = nodeCount + 1;
		returnValCount = 2;
		if (idxVal <= $(".data-div").length) {
			mainFrSorting(idxVal);
		}
	}
}

function linkedListSorting(idxVal) {
	if ($("#next" + (idxVal)).text() != "NULL") {
		var t1 = parseInt($("#data" + (nodeCount + 1)).text());
		var t2 = parseInt($("#data" + (idxVal + 1)).text());
		var elmt1 = $("#data" + (nodeCount + 1));
		var elmt2 = $("#data" + (idxVal + 1));
		$(elmt1).parent().effect("highlight", {color: 'pink'}, 400, function() {
			if (t1 > t2) {
				var l1 = elmt1.text(t2).offset();
				var l2 = elmt2.text(t1).offset();
				$("#xVal").text(t1);
				var leftLength = l2.left - l1.left;
				$("#eleAtInnerIdxVal").text(t1);
				TweenMax.from(elmt1, 0.2, {"left" : leftLength});
				TweenMax.from(elmt2, 0.2, {"left" : -leftLength, onComplete:function() {
        			idxVal++;
        			linkedListSorting(idxVal);
      			}});
			} else {
			  idxVal++;
			  linkedListSorting(idxVal);
			}
		});
	} else {
		$("#dynamicNodes" + count + " .data-div").not(".completed").first().addClass("completed");
		idxVal = $('.completed').length + 1;
		nodeCount = nodeCount + 1;
		mainFrSorting(idxVal);
	}
}


function notL1AndL2() {
	if (count < fstNdeInSecdList) {
		firstPartArrowAnimation();
	 } else {
		 l1ValueNorEqNullAndL2ValNull(2);
	 }
}

function changeQNodeAddressToQNextAdd() {
	var isL1AndL2 = $("#l1Val").text().trim() != "NULL" && $("#l2Val").text().trim() == "NULL";
	var isL2AndL1 = $("#l2Val").text().trim() != "NULL" && $("#l1Val").text().trim() == "NULL";
	if (isL1AndL2) {
		l1ValueNorEqNullAndL2ValNull(1);
	} else if (isL2AndL1) {
		l1ValueNorEqNullAndL2ValNull(2);
	} else {
		notL1AndL2();
	}
}

function initializeTheL1L2AndL3(idName, callBackFunction) {
	if (lang == 'c') {
		if (idName == "Val") {
			for (var i = 0; i < 3; i++ ) {
				$("#" + arr[i] + idName).text("NULL").addClass("opacity00");
			}
		}
		for(var  i = 0; i < 3; i++) {
			zoomInEffect("#" + arr[i] + idName);
		}
	} else if (lang == 'cpp') {
		for(var  i = 0; i <= 3; i++) {
			$("#firstVal" + i).text("NULL");
			zoomInEffect('#firstNode' + i);
			zoomInEffect('#firstVal' + i);
		}
	}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function mainFrSorting(idxVal) {
	if ($("#next" + (nodeCount)).text() != "NULL") {
		linkedListSorting(idxVal);
	} else {
		endingText();
	}
}

function valStoreInT3Node() {
	$("#line" + fstNdeInSecdList + ", #line21, #line31, #line32").remove();
	if (lang == 'c') {
		$("#firstNode1, #firstNode2").addClass("opacity00");
	}
	$("#lastNodeMemory1").addClass("opacity00");
	if (lang == 'cpp' && ($("#nodeVal1").text().trim() == "NULL" || $("#firstVal2").text().trim() == "NULL")) {	
		$('#nodeAddress2').empty();
	}
	if (concatflag) {
		customIntroNxtStep("#nodeRepeation", "", "bottom");
	} else {
		printfCount = 5;
		customIntroNxtStep("#printf5", "printL3Text", "bottom");
	}
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

function enterValidNumberOrNot(selector) {
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
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode == 9)) {
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e) {
		$('.error-text').remove();
		if ($(this).val().length > 0 && (!$(this).val().startsWith('-'))) {
			$('.introjs-nextbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				introjs.nextStep();
			}
		} else if ($(this).val().length >= 2 && $(this).val().indexOf('-', $(this).val().indexOf('-') + 1) == -1) {
			$('.introjs-nextbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				$("input").attr("disabled", true);
				introjs.nextStep();
			}
		} else if (!$(this).val().startsWith('-')) {
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltiptext').append('<div class="error-text">Please enter number.</div>')
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}

function popover(selector, position) {
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover"></div>',
	});
	$(selector).popover('show');
	$(".popover").css("top" , "0");
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('#unionOperations').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({
		'top': l.top,
		'left': l.left - ($('.arrow').outerWidth() * 2)
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

function svgWithFadeInEffect(id1, id2, lineVal, fromId, toId, callBackFunction) {
	svgAnimatingLineTopToBottom("#animatinDiv", id1, id2, "#svgId", "line" + lineVal, "arrow", function() {
		fadeInBounceEffectWithTimelineMax(fromId, toId, function() {
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

function fadeInBounceEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#explanationDiv").append("<span id='dummy' class='ct-brown-color ct-fonts' style='position: relative;z-index: 9999999;'>" 
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

function rotationEffect(selector, val, callBackFunction) {
	$(selector).effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.to($(selector), 0.5, {rotationX : 90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function toEffectAnimation(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	$(selector2).offset({top:l1.top, left:l1.left});
	$(selector2).removeClass("opacity00");
	$(selector1).effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.to(selector2, 0.5, {top:0, left:0, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "brown", "font-width" : "bold", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: red;'>" + $(selector2).text() + "</span>");
		$("#dummy").offset({"top" : l2.top, "left" : l2.left});
	}
	$(selector2).removeClass('opacity00')
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "brown");
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomOutEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomOut").one('animationend', function() {
		$(selector1).removeClass("animated zoomOut")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	},800); 
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

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '5',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
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
	line.setAttribute("class", (lineClass) ? "svg-line " + "lineNumber" : "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineRightToLeft(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function svgAnimatingLineLeftToRight(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function svgAnimatingLineBottomToTop(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function svgAnimatingLineTopToBottom(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
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

function changePosIds() {
	var len = $(".list-nodes").length
	for (var idx = (innerLoop + 2); idx <= len + 1; idx++ ) {
		$("#node" + (idx)).removeAttr("id").attr("id", "node" + (idx - 1));
		$("#nodedata" + (idx)).removeAttr("id").attr("id", "nodedata" + (idx - 1));
		$("#dataDiv" + (idx)).removeAttr("id").attr("id", "dataDiv" + (idx - 1));
		$("#data" + (idx)).removeAttr("id").attr("id", "data" + (idx - 1));
		$("#nextDiv" + (idx)).removeAttr("id").attr("id", "nextDiv" + (idx - 1));
		$("#next" + (idx)).removeAttr("id").attr("id", "next" + (idx - 1));
		$("#dataAddress" + (idx)).removeAttr("id").attr("id", "dataAddress" + (idx - 1));
	}
}

function removeLine() {
	var abc = [];
	var len = $("#dynamicNodes1 > .node").length;
	$.each($(".lineNumber"), function(idx) {
	    abc.push($(this).attr("id"));
	});
	abc.splice((len - 1), 0, abc.pop())
	$.each(abc, function(idx, val) {
	  $("#" + val).attr("id", "line" + (idx + 1));
	});
}

function rechangeSVGLineHeights(id, selector) {
	console.log(id + ' @@ ' + selector);
	for (var i = 0; i < id.length; i++) {
		var y = ($(selector).eq(i).offset().top + $(selector).eq(i).height()/2) - $("svg").offset().top;
		$(id[i]).attr({"y1" : y, "y2" : y});
	}
}

function clickMethod() {
	$(".lnodes, .lnodevalues, #firstNode1, #firstVal1, #lastNodeMemory1, #nodeVal1").addClass("opacity00");
	$("#inMainMet, #inUnion, .unionNodes, #l1ValInUn, #unionOperations").addClass("opacity00");
	$("#NoOfLists, #NoOfListsInUnion").removeClass("box-border box-border1");
	$("#buttonDiv").removeClass("opacity00");
	$(".buttons").removeClass("disabled");
	$("#unionOperations, #nodeAddress1, #nodeAddress2, #firstList, #secondList, #thirdList, #nodeAddress3").empty();
	$("#animatinDiv").removeClass("z-index1000000");
	$('line').remove();
	if (lang == 'c') {
		$("#thirdList, #nodeAddress3").remove()
	}
	tempLine = 11, qLine = 111, removeLineNum, fstNdeInSecdList;
	count = tCount = printfCount = outputLineCount = returnValCount = nodeCount = lineCount = 1;
	svgIds = [], secSvgIds = [], thirdSvgIds = [], fstSvgIds = [];;
	$("#intersect, #concat").removeClass("intersect intersection concatination");
	
	$("#concat").click(function() {
		buttonName = "concat";
		$("#inMain, #consoleBodyDiv, #sllOperations").empty();
		$('#methodsInClass').html('\n\tvoid concat(Sll l1, Sll l2);');
		preMain();
		preConCatMainMthd();
		introNextSteps("#inMain", "", "bottom");
		$("#concat").addClass("concatination");
		introjs.nextStep();
	});
	$("#union").click(function() {
		buttonName = "union";
		$("#inMain, #consoleBodyDiv, #sllOperations").empty();
		$('#methodsInClass').html('\n\tvoid unions(Sll l1, Sll l2);\n\tvoid concat(Sll l1, Sll l2);')
		preMain();
		preUnionMainMethd();
		introNextSteps("#inMain", "", "bottom");
		introjs.nextStep();
	});
	$("#intersect").click(function() {
		buttonName = "intersect";
		flag = true;
		$("#inMain, #consoleBodyDiv, #sllOperations").empty();
		$('#methodsInClass').html('\n\tint isEmpty();\n\tvoid sort();\n\tvoid intersect(Sll l1, Sll l2);\n\tvoid add(int x);');
		preMain();
		preIntersectMainMethod();
		introNextSteps("#inMain", "", "bottom");
		introjs.nextStep();
	});
}

function nextBtnWithoutCalling(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$(".user-btn").remove();
		callBackFunction();
	});
}

function streT1ToT3Anim(text) {
	if (text != "NULL" && lang == 'c') {
		$("#line21").remove();
		svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv1", "#dataDiv1", "#svgId", "line21", "arrow", function() {
			customIntroNxtStep("#whileT1NxtNotEqNull", "concatWhileCon", "bottom");
		});
	} else {
		customIntroNxtStep("#whileT1NxtNotEqNull", "concatWhileCon", "bottom");
	}
}

function declrFourNodesAnim() {
	zoomInEffect("#lastNodeMemory2", function() {
		zoomInEffect("#lastNodeMemory3", function() {
			zoomInEffect("#lastNodeMemory4", function() {
				$("#nodeVal4").text("NULL").addClass("opacity00");
				zoomInEffect("#nodeVal4", function() {
					customIntroNxtStep("#callToConcatMethod", "methodCall", "bottom");
				});
			});
		});					
	});
}

function regenerateArrows() {
	$('.lineNumber').remove();
	$('line').remove();
	if (lang == 'cpp') {
		if ($('#firstVal1').text().trim() != "NULL" && $('#dynamicNodes1 .node').length != 0) {
			svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv1", "#dataDiv1", "#svgId", "line1111", "arrow");
			$('#line1111').attr("class", "svg-line");
		}
		if ($('#firstVal2').text().trim() != "NULL" && $('#dynamicNodes2 .node').length != 0) {
			svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv2", '#dynamicNodes2 .data-div:first', "#svgId", "line222", "arrow");
			$('#line222').attr("class", "svg-line");
		}
	}
	if ($('#dynamicNodes2 .node').length != 0) {
		$('#firstVal2').text($('#dynamicNodes2 .data-address:first').text());
	} else {
		$('#firstVal2').text('NULL');
	}
	$('#line22, #line23').remove()
	if ($('#dynamicNodes1 .node').length >= innerLoop || $('#dynamicNodes1 .node').length >= outerLoop) {
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + outerLoop, "#svgId", "line22", "arrow");
		svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory3", "#nextDiv" + innerLoop, "#svgId", "line23", "arrow");
	} else {
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory2", "#nextDiv" + outerLoop, "#svgId", "line22", "arrow");
		svgAnimatingLineBottomToTop("#animatinDiv", "#lastNodeMemory3", "#nextDiv" + innerLoop, "#svgId", "line23", "arrow");
	}
	
	for (var i = 1; i < $('.node').length; i++) {
		if (i == $('#dynamicNodes1 .node').length) {
			svgAnimatingLineBottomToTop("#animatinDiv", "#nextDiv" + i, "#dataDiv" + (i + 1), "#svgId", "line" + (i), "arrow", function() {
			$('#line' + (i)).attr("class", "svg-line lineNumber");	
			});
		} else {
			svgAnimatingLineRightToLeft("#animatinDiv", "#nextDiv" + i, "#dataDiv" + (i + 1), "#svgId", "line" + (i), "arrow", function() {
			$('#line' + (i)).attr("class", "svg-line lineNumber");	
			});
		}
	}
}

function xDecInAdd() {
	zoomInEffect("#xNode", function() {
		$("#nodeVal1").effect("highlight", {color: 'blue'}, 500, function() {
			svgAnimatingLineTopToBottom("#animatinDiv", "#lastNodeMemory1", "#nextDiv" + nodeCount, 
					"#svgId", "line"+ infoLine, "arrow", function() {
				$("#xVal").text($("#data" + nodeCount).text()).addClass("opacity00");
				fromEffectWithTweenMax("#data" + nodeCount, "#xVal", false, function() {
					$("#line" + infoLine).remove();
					customIntroNxtStep("#initTQVar");
				});
			});
		})
	});
}

function addMethodRtnVal() {
	lineCount = 4;
	if (lang == 'c') {
		customIntroNxtStep("#retn4", "return4");
	} else if (lang == 'cpp') {
		$("#addMethod").remove();
		$("#xNode").addClass("opacity00");
		$("#xNode span").empty();
		$("#line54, #line" + infoLine + ", #line" + tempLine).remove();
		$("#nodeAddress3").empty();
		introjs.refresh();
		customIntroNxtStep("#intrsctElseT1Next");
	}
}

function isEmptyMthodInCPP() {
	$('.introjs-tooltip').removeClass('hide');
	$('.introjs-tooltiptext').append('<span id="trueFalseState" class="position ct-code-b-yellow"></span><span id="ifTrueOrFalse"></span>');
	text1 = '<div id="emptyMthd" class="opacity00"><br>int Sll::<b>isEmpty()</b> {<br>'
			+ ' &emsp; if (<span id="fstIsNull"><span id="frstIsNlFrst" class="position">first</span> == NULL</span>) {'
			+ ' &emsp; <span id="whileTrueOrFalse"></span><br>'
			+ ' &emsp; &emsp; <span id="isEmptyRetn1">return 1;</span><br>'
			+ ' &emsp; } else {<br>'
			+ ' &emsp; &emsp; <span id="isEmptyRetn0">return 0;</span><br>'
			+ ' &emsp; }<br>}</div>';
	isEmptyCond(1, text1, function() {
		var cond1 = $('#firstVal1').text() == 'NULL';
		if (!cond1) {
			nextBtnWithoutCalling(function() {
				$('#trueFalseState').append('<span class="ct-code-b-yellow">' + cond1 + '</span> || ');
				$('#emptyMthd').remove();
				isEmptyCond(2, text1, function() {
					var cond2 = $('#firstVal2').text() == 'NULL';
					nextBtnWithoutCalling(function() {
						$('#emptyMthd').remove();
						$('#trueFalseState').append('<span class="ct-code-b-yellow">' + cond2 + '</span>');
						var cond = cond1 || cond2 
						nextBtnWithoutCalling(function() {
							rotationEffect('#trueFalseState', cond, function() {
								if (cond) {
									$("#ifTrueOrFalse").html(" ====> <span class='ct-lime-color ct-fonts'>true</span>");
									intersectionStep();
								} else {
									$("#ifTrueOrFalse").html(" ====> <span class='ct-code-b-red ct-fonts'>false</span>");
									$("#sllOperations").empty();
									preSortMethod();
									$("#srtMethod").addClass("sorting");
									introNextSteps("#callL1Srt", 'callSrt1');
									$('.introjs-nextbutton').show();
								}
							});
						});
					});
				});
			});
		}
	});
}

function isEmptyCond(val, text, callBackFunction) {
	$('#iFL' + val + 'IsEmpty').css({'background-color': 'yellow'});
	$('#trueFalseState').after(text);
	toEffectAnimation('#iFL' + val + 'IsEmpty', '#emptyMthd', function() {
		var cond = $('#firstVal' + val).text() == 'NULL';
		isEmptyMthdAnim(cond, function() {
			$('#iFL' + val + 'IsEmpty').css({'background-color': ''});
			if (cond) {
				if (val == 2) {
					callBackFunction();
				} else {
					intersectionStep();
				}
			} else {
				callBackFunction();
			}
		});
	});
}

function isEmptyMthdAnim(cond, callBackFunction) {
	nextBtnWithoutCalling(function() {
		rotationEffect('#frstIsNlFrst', $('#firstVal1').text(), function() {
			if (cond) {
				$('#fstIsNull').addClass('ct-lime-color ct-fonts');
				$("#whileTrueOrFalse").html("====> <span class='ct-lime-color ct-fonts'>true</span>");
				$('#isEmptyRetn1').addClass('ct-code-b-yellow');
				callBackFunction();
			} else {
				$('#fstIsNull').addClass('ct-code-b-red ct-fonts');
				$("#whileTrueOrFalse").html("====> <span class='ct-code-b-red ct-fonts'>false</span>");
				$('#isEmptyRetn0').addClass('ct-code-b-yellow');
				callBackFunction();
			}
		});
	});
}

function intersectionStep() {
	printfCount = 5;
	introNextSteps("#printf5", "IntrsctionEmpty");
	$('.introjs-nextbutton').show();
}

function returnToRevilArrow(lineId) { 
	svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv"+ returnValCount, "#dataDiv" + nodeCount, "#svgId", lineId, "arrow", function() {
		removeLineNum = lineCount;
		if (buttonName == 'intersect') {
			$('#' + lineId).attr("class", "svg-line lineNumber");
			if (returnValCount % 2 == 0) {
				fstNdeInSecdList = nodeCount;
				if (lang == 'cpp') {
					secSvgIds.push("#line"+ lineCount);
				}
			} else if (returnValCount == 1) {
				if (lang == 'cpp') {
					svgIds.push('#line' + lineCount);
				}
			}
			lineCount++;
		} else {
			$('#'+lineId).attr("class", "svg-line");
			if (lang == 'c') {
				$('#'+lineId).attr("class", "svg-line lineNumber");
				lineCount++;
				if (returnValCount % 2 == 0) {
					fstNdeInSecdList = nodeCount;
					svgIds.push("#line"+ lineCount);
				} else {
					fstSvgIds.push("#line"+ lineCount);
				}
			}
		}
		customIntroNxtStep("#tempValStreInQ", "", "");
	});
}

function declrT1AndT2NodesArrow(lineId) {
	$("#line" + lineId).remove();
	svgAnimatingLineRightToLeft("#animatinDiv", "#firstDiv2","#dataDiv"+ fstNdeInSecdList, "#svgId", "line"+ lineId, "arrow");
}

