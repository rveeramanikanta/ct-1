var buttonNames = ["CREATE", "DISPLAY", "ADDITION", "SUBTRACTION", "MULTIPLICATION"];
var buttonName, btn, tag;
var arr = [];
var createMethodCallCount = outputCount = nodeCount = p1Count = p2Count = t1Count = t2Count =  1;
var introjs;

function polyAnimationFunction() {
	lang = getURLParameter("lang");
	appendButtons();
	createDynamicNodes("#temparyPolyNode", nodeCount);
	createDynamicNodes("#temparyPolyNodeForPloy", nodeCount);
	preStructTypeList();
	introFunction();
	svgAppend("#animationDiv", "svgId");
	svgMarkerAppend("#svgId", "arrow");
}

function preStructTypeList() {
	var structCode = '<span id="strcutSpan">struct polynomial {\n'
		+ '\tint coeff;\n'
		+ '\tint exp;\n'
		+ '\tstruct polynomial *next;\n'
		+ '};</span>\n'
		+ '<span id="typeDefDec">typedef struct polynomial *poly;</span>\n'
		+ '<span id="nodeDec">poly head1, head2, result;</span>\n'
		+ '<span id="nodeInitialization">head1 = head2 = result = NULL;</span>\n'
	$("#structTypelist").addClass("opacity00").text('').append(structCode);
}

function preMain() {
	if (buttonName == "create") { //create method code Display in main()
		var mainCodeForCreate = '<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
			+ '<span id="printf1">printf("Enter 1st polynomial: \\n");</span>\n'
			+ '<span id="assignHead1ToNull">head1 = NULL;</span>\n'
			+ '<span id="callCreateMethod1">head1 = create(head1);</span>\n'
			+ '<span id="printf2">printf("Enter 2nd polynomial: \\n");</span>\n'
			+ '<span id="assignHead2ToNull">head2 = NULL;</span>\n'
			+ '<span id="callCreateMethod2">head2 = create(head2);</span>'
	} else if (buttonName == "print") {	//print method code display in main()
		var mainCodeForCreate = '<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
			+ '<span id="callPrintMethod1">print(head1);</span>\n'
			+ '<span id="callPrintMethod2">print(head2);</span>\n';
	} else if (buttonName != "create" || buttonName != "print" ) { //mul and add and subtraction method code display in main method
		var mainCodeForCreate = '<div class="text-center ct-blue-color ct-fonts padding00">In main()</div>'
			+ '<span id="callMulMethod1">result = '+ buttonName +'(head1,head2);</span>\n'
			+ '<span id="callPrintMethod1">print(result);</span>\n'
	}
	$("#inMain").addClass("opacity00").text('').append(mainCodeForCreate);
}

function preCreateMethodCodeDisplay() {
	if (buttonName == "create") {
		var preCodeForCreateMethod = '<div id="createMethodDef">'
			+ '<span id="nameOfCreateMthd">poly create(poly head) {</span>\n'
		        + '\t<span id="varDecInCreate"><span id="tempNodeInCreateMthd">poly temp;</span>\n'
		        + '\t<span id="decChInCreateMthd">char ch;</span>\n'
		        + '\t<span id="decCoeffExpInCreateMthd">int coeff, exp;</span></span>\n'
		        + '\t<span id="doWhileInCreate">do {\n'
		                + '\t\t<span id="MemoryAllocateInCreateMthd">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
		                + '\t\t<span id="printNdReadCoeffNdExpInCreateMthd"><span id="printCoeffNdExpVal">printf("Enter coeff, exp of node : ");'
		                + '</span>\n'
		                + '\t\t<span id="readCoeffNdExpVal">scanf("%d %d\\n", &coeff, &exp);</span></span>\n'
		                + '\t\t<span id="fillCoeffExpNextFieldsInCreateMthd"><span id="storeCoeffValToTempCoeff">temp -> coeff = coeff;</span>\n'
		                + '\t\t<span id="storeExpValToTempExp">temp -> exp = exp;</span>\n'
		                + '\t\t<span id="storeNullToTemoNext">temp -> next = NULL;</span></span>\n'
		                + '\t\t<span id="callAddTermMethod">head = addTerm(head, temp);</span>\n'
		                + '\t\t<span id="wantToInsertAnotherNode"><span id="printChconformationMsg">printf("Do u want another node(y/n) : ");</span>\n'
		                + '\t\t<span id="readChVal">scanf("%c\\n", &ch);</span></span>\n'
		        + '\t}<span id="whileLoopToInsertAnotherNode"> while(ch != \'n\');</span></span>\n'
		        + '\t<span id="returnHeadInCreateMthd">return head;</span>\n'
			+ '}</div>';
	} else if (buttonName == "print") {
		console.log("in  printMethod");
		var preCodeForCreateMethod = '<div id="displayMethodDef">'
			+ '<span id="nameOfDisplayMthd">void print(poly head) {</span>\n'
		        + '\t<span id="varDecInCreate">poly temp = head;</span>\n'
		        + '\t<span id="whileLoopInDisplay"><span id="printWhileLoop">while(temp != NULL) {</span>\n'
		                   + '\t\t<span id="printTempCoeffAndExpVal">printf("%d X^ %d --->", temp -> coeff, temp -> exp);</span>\n'
		                   + '\t\t<span id="travelTempNctToTemp">temp = temp -> next;</span>\n'
		         + '\t}</span>\n'
		         + '\t<span id="printNullOnConsole">printf("NULL\\n");</span>\n'
	        +'}</div>'
	} else if (buttonName == "mul") {
		var preCodeForCreateMethod = '<div id="mulMethodDef">'
			+ '<span id="nameOfMulMthd">poly mul(poly head1,poly head2) {</span>\n'
		        + '\t<span id="varDecInMul">poly t1, t2, temp, pro;</span>\n'
		        + '\t<span id="varIniInMul">t1 = t2 = temp = pro = NULL;</span>\n'
		        + '\t<span id="firstForLoop">for(<span id="t1Initl">t1 = head1;</span> <span id="t1NotEqNull">t1 != NULL;</span>'
		        + ' <span id="t1NxtToT1">t1 = t1 -> next</span>) {</span>\n'
		            + '\t\t<span id="secondForLoop">for(<span id="t2Initl">t2 = head2;</span> <span id="t2NotEqNull">t2 != NULL;</span> '
		            + '<span id="t2NxtToT2">t2 = t2 -> next</span>) {</span>\n'
		                     + '\t\t\t<span id="memoryAlloc">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
		                     + '\t\t\t<span id="mulT1CoeffNdT2Coeff">temp -> coeff = t1 -> coeff * t2 -> coeff;</span>\n'
		                     + '\t\t\t<span id="addT1ExpNdT2Exp">temp -> exp = t1 -> exp + t2 -> exp;</span>\n'
		                     + '\t\t\t<span id="tmpNxtNull">temp -> next = NULL;</span>\n'
		                     + '\t\t\t<span id="callToAddTermMthd">pro = addterm(pro,temp);</span>\n'
		            +'\t\t}\n'
		        + '\t}\n'
		        + '\t<span id="returnPro">return pro;</span>\n'
		+'}</div>';
	} else if (buttonName == "add" || buttonName == "sub") {
		var preCodeForCreateMethod = '<div id="mulMethodDef">'
			+ '<span id="nameOfMulMthd">poly '+ btn +'(poly head1, poly head2) {</span>\n'
	        	+ '\t<span id="varDecInAdd">poly t1, t2, sum = NULL, temp = NULL;</span>\n'
	        	+ '\t<span id="t1InilToHead1Val">t1 = head1;</span>\n'
	        	+ '\t<span id="t2InitlToHead2Val">t2 = head2;</span>\n'
	        	+ '\t<span id="firstWhile"><span id="firstWhileConInAdd">while(<span id="firstWhileCon">t1 != NULL && t2 != NULL</span>) {</span>\n'
	        		+ '\t\t<span id="memoryAlloc1">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
	             	+ '\t\t<span id="whileFirstIfConInAdd">if(<span id="whileFirstIfCon">t1 -> exp == t2 -> exp</span>) {</span>\n'
                             + '\t\t\t<span id="additionSpan">temp -> coeff = t1 -> coeff + t2 -> coeff;</span>\n'
                             + '\t\t\t<span id="t1ExpToTmpExp1">temp -> exp = t1 -> exp;</span>\n'
                             + '\t\t\t<span id="tempNxtToNull1">temp -> next = NULL;</span>\n'
                             + '\t\t\t<span id="callAddMethod1">sum = addterm(sum,temp);</span>\n'
                             + '\t\t\t<span id="treavelT1ToT1Nxt1">t1 = t1 -> next;</span>\n'
                             + '\t\t\t<span id="treavelT2ToT2Nxt1">t2 = t2 -> next;</span>\n'
                   + '\t\t<span id="whileSecondIfConInAdd">} else if(<span id="whileSecondIfCon">t1 -> exp > t2 -> exp</span>) {</span>\n'
	            	   + '\t\t\t<span id="tmpCoeffToT1Coeff1">temp -> coeff = t1 -> coeff;</span>\n'
	            	   + '\t\t\t<span id="t1ExpToTmpExp2">temp -> exp = t1 -> exp;</span>\n'
	            	   + '\t\t\t<span id="tempNxtToNull2">temp -> next = NULL;</span>\n'
	            	   + '\t\t\t<span id="callAddMethod2">sum = addterm(sum,temp);</span>\n'
	            	   + '\t\t\t<span id="treavelT1ToT1Nxt2">t1 = t1 -> next;</span>\n'
                   + '\t\t<span id="elseCon">} else {\n'
                	   + '\t\t\t<span id="tmpCoeffToT2Coeff1">temp -> coeff = t2 -> coeff;</span>\n'
                	   + '\t\t\t<span id="t2ExpToTmpExp1">temp -> exp = t2 -> exp;</span>\n'
                	   + '\t\t\t<span id="tempNxtToNull3">temp -> next = NULL;</span>\n'
                	   + '\t\t\t<span id="callAddMethod3">sum = addterm(sum,temp);</span>\n'
                	   + '\t\t\t<span id="treavelT2ToT2Nxt2">t2 = t2 -> next;</span>\n'
                   + '\t\t}</span>\n'
	         + '\t}</span>\n'
	         + '\t<span id="secondWhile"><span id="secondWhileInAdd">while(<span id="secondWhileCon">t1 != NULL</span>) {</span>\n'
	                   + '\t\t<span id="memoryAlloc2">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
	                   + '\t\t<span id="tmpCoeffToT1Coeff2">temp -> coeff = t1 -> coeff;</span>\n'
	                   + '\t\t<span id="t1ExpToTmpExp3">temp -> exp = t1 -> exp;</span>\n'
	                   + '\t\t<span id="tempNxtToNull4">temp -> next = NULL;</span>\n'
	                   + '\t\t<span id="callAddMethod4">sum = addterm(sum,temp);</span>\n'
	                   + '\t\t<span id="treavelT1ToT1Nxt3">t1 = t1 -> next;</span>\n'
	         + '\t}</span>\n'
	         + '\t<span id="thirdWhile"><span id="thirdWhileInAdd">while(<span id="thirdWhileCon">t2 != NULL</span>) {</span>\n'
	        	 + '\t\t<span id="memoryAlloc3">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
	        	 + '\t\t<span id="tmpCoeffToT2Coeff2">temp -> coeff = t2 -> coeff;</span>\n'
	        	 + '\t\t<span id="t2ExpToTmpExp2">temp -> exp = t2 -> exp;</span>\n'
	             + '\t\t<span id="tempNxtToNull5">temp -> next = NULL;</span>\n'
	             + '\t\t<span id="callAddMethod5">sum = addterm(sum,temp);</span>\n'
	             + '\t\t<span id="treavelT2ToT2Nxt3">t2 = t2 -> next;</span>\n'
	         + '\t}</span>\n'
	         + '\t<span id="returnSum"> return sum;</span>\n'
	    + '}</div>'
	    
		if (btn == "sub") {
			$("#additionSpan").text("temp -> coeff = t1 -> coeff - t2 -> coeff;");
		}
	}
	$("#polyOperationsDivPre").addClass("opacity00").empty("").append(preCodeForCreateMethod);
}

function preAddTermMethodCodeDisplay() {
	var preCodeforAddtermMethod = '<div id="addTermMethodDef">'
		+ '\t<span id="nameOfAddTermMthd">poly addTerm(poly head, poly temp) {</span>\n'
		+ '\t<span id="varDecInAddTerm">poly p1,p2;</span>\n'
		+ '\t<span id="p1P2InitializeInAddTerm">p1 = p2 = head;</span>\n'
		+ '\t<span id="ifp1EqualToNullInAddTermFirstIf">if(p1 == NULL) {</span>\n'
			+'\t\t<span id="tempToHeadIfP1EqNullInAddTerm">head = temp;</span>\n'
		+ '\t} else {\n'
			+ '\t\t<span id="whileLoopInAddTerm">while(p1 != NULL && p1 -> exp > temp -> exp) {</span>\n'
				+ '\t\t\t<span id="p1ToP2InAddTermWhileLoop">p2 = p1;</span>\n'
				+ '\t\t\t<span id="p1NxtTop1InAddTermWhile">p1 = p1 -> next;</span>\n'
			+'\t\t}\n'
			+ '\t\t<span id="ifp1EqualToNullInAddTerm">if(p1 == NULL) {</span>\n'
				+ '\t\t\t<span id="tempToP2NxtInAddTerm">p2 -> next = temp;</span>\n'
			+ '\t\t<span id="ifP1ExpEqToTempExpInAddTerm">} else if(p1 -> exp == temp -> exp) {</span>\n'
				+ '\t\t\t<span id="addp1CoeffTempCoeffNdStoreP1CoeffInAddTerm">p1 -> coeff = p1 -> coeff + temp -> coeff;</span>\n'
			+ '\t\t<span id="ifP1ExpLessThanTempExpInAddTerm">} else if(p1 -> exp < temp -> exp) {</span>\n'
				+ '\t\t\t<span id="ifP2EqP2InAddTerm">if(p2 == p1) {</span>\n'
					+ '\t\t\t\t<span id="p1ToTempNextInAddTerm">temp -> next = p1;</span>\n'
					+ '\t\t\t\t<span id="tempToHeadInAddTerm">head = temp;</span>\n'
				+'\t\t\t} else {\n'
					+ '\t\t\t\t<span id="p1ToTempNextInAddTerm1">temp -> next = p1;</span>\n'
					+ '\t\t\t\t<span id="tempToP2NextInAddTerm">p2 -> next = temp;</span>\n'
				+ '\t\t\t}\n'
			+ '\t\t}\n'
		+ '\t}\n'
		+ '\t<span id="returnHeadInAddTerm">return head;</span>\n'
	+'}\n</div>';
	$("#polyOperationsPre").empty().addClass("opacity00").append(preCodeforAddtermMethod);
}

function introFunction() {
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
			$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
			var elementId = targetElement.id;
			switch (elementId) {
				case "structTypelist" :
					$("#structTypelist").removeClass("opacity00");
					introjs.refresh();
					$("#structTypelist, #explanationDiv").removeClass("opacity00");
					setTimeToIntroGoNextStep();
				break;
				case "strcutSpan":
					$('.introjs-tooltip').removeClass('hide');
					var text = "This is the declaration of a new <y>struct</y> type <y>polynomial</y>.<br><br>"
								+ "<ul><li><y>coeff</y> field is used to hold the <y>coefficient</y> inside the linked list.</li>"
								+ "<li><y>exp</y> field is used to hold the <y>Exponent </y> inside the linked list.</li>"
								+ "<li><y>next</y> field is used to keep the <y>address</y> of <y>next</y> node.</li></ul>";
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#typeDefDec");
						$('.introjs-nextbutton').show();
					});
				break;
				case "typeDefDec" :
					$('.introjs-tooltip').removeClass('hide');
					var text = 'The <y>typedef</y> creates an <y>alias</y> name as a <y>poly</y> to the '
							+ '<y>struct polynomial</y> which is a <y>pointer</y>.'
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#nodeDec");
						$('.introjs-nextbutton').show();
					});
				break;
				case "nodeDec" :
					$(".introjs-tooltip").removeClass("hide");
					var text = "Declare <y>three</y> pointer variables <y>head1</y>, <y>head2</y> and <y>result</y>.";
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#animationDiv", "headsDeclaration");
						$(".introjs-nextbutton").show();
					});
				break;
				case "nodeInitialization" :
					$(".introjs-tooltip").removeClass("hide");
					var text = "Initialize <y>three</y> pointer variables <y>head1</y>, <y>head2</y> and <y>result</y> to <y>NULL</y>.";
					typing(".introjs-tooltiptext", text, function() {
						introNextSteps("#animationDiv", "headsInitialization");
						$(".introjs-nextbutton").show();
					});
				break;
				case "animationDiv" :
					$("#animationParent").removeClass("opacity00");
					$(".background-color-yellow").addClass("z-index1000000");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "headsDeclaration" :
							zoomInEffect("#head1", function() {
								zoomInEffect("#head2", function() {
									zoomInEffect("#result", function() {
										customIntroNxtStep("#nodeInitialization");
									});
								});
							});
						break;
						case "headsInitialization" :
							$("#head1Val").text("NULL");
							zoomInEffect("#head1Val", function() {
								$("#head2Val").text("NULL");
								zoomInEffect("#head2Val", function() {
									$("#resultVal").text("NULL");
									zoomInEffect("#resultVal", function() {
										customIntroNxtStep("#buttonsDiv");
									});
								});
							});
						break;
						case "initializeHead"+ createMethodCallCount +"ToNull" :
							$("#head"+ createMethodCallCount  +"Val").parent().effect( "highlight",{color: 'blue'}, 500);
							$("#head"+ createMethodCallCount +"Val").text("NULL").addClass("opacity00");
							zoomInEffect("#head"+ createMethodCallCount  +"Val", function() {
								customIntroNxtStep("#callCreateMethod"+ createMethodCallCount, "callCreateMethod");
							});
						break;
						case "variableDecInCreateMthd" :
							zoomInEffect("#head", function() {
								$("#headVal").text($("#head"+ createMethodCallCount +"Val").text());
								fromEffectWithTweenMax("#head"+ createMethodCallCount +"Val", "#headVal", false, function() {
									zoomInEffect("#temp", function() {
										zoomInEffect("#chValeDec", function() {
											zoomInEffect("#coeffValeDec", function() {
												zoomInEffect("#expValeDec", function() {
													$(".background-color-yellow").removeClass("z-index1000000 background-color-yellow");
													customIntroNxtStep("#polyOperationsDivPre", "callDoWhileLoop", "right")
												});
											});
										});
									});
								});
							});
						break;
						case "memoryAllocationAndPrintReadCoeffAndExpVal" :
							$("#temparyPolyNode, #temparyPolyNode .nodes").removeClass("opacity00")
							$("#tempVal").text($("#temparyPolyNode #dataAddress"+ nodeCount).text());
							fromEffectWithTweenMax("#temparyPolyNode #dataAddress"+ nodeCount, "#tempVal", false, function() {
								$("#tempLine").remove();
								svgAnimatingLineRightToLeft("#animationDiv", "#tempDiv", "#temparyPolyNode #coeffDiv" + nodeCount, "#svgId", "tempLine", "arrow", function() {
									customIntroNxtStep("#consoleId", "printAndReadCoeffNdExpValues", "left");
								});
							});
						break;
						case "storeCoeffAndExpsValues" :
							$("#val" + outputCount).remove();
							$("#outputCoeffAndExpValue" + outputCount).append("<span id='outputCoeff"+ outputCount +"' class='position'>"+ arr[0] 
									+"</span>  <span id='outputExp"+ outputCount +"' class='position'>"+ arr[1] +"</span>");
							$("#coeffVal").text(arr[0]).removeClass("opacity00");
							fromEffectWithTweenMax("#outputCoeff"+ outputCount, "#coeffVal", false, function() {
								$("#expVal").text(arr[1]).removeClass("opacity00");
								fromEffectWithTweenMax("#outputExp"+ outputCount, "#expVal", false, function() {
									customIntroNxtStep("#polyOperationsDivPre", "codeForStoreCoeffExpAndNext", "right");
								});
							});
						break;
						case "fillTheTempNodeWithCoeffExpAndNextField":
							var parentId = (btn == "create")? "#temparyPolyNode" : "#temparyPolyNodeForPloy" ;
							$(parentId +" #coeff" + nodeCount).text(arr[0]);
							$(parentId +" #exp" + nodeCount).text(arr[1]);
							$(parentId + " #next" + nodeCount).text("NULL");
							var coeffValue = "#coeffVal";
							var expValue = "#expVal";
							if (btn != "create") {
								if (tag == "greaterThan" || tag == "secondWhileLoop") {
									var coeffValue = $("#firstList #coeff" + t1Count);
									var expValue = $("#firstList #exp" + t1Count);	
									$(parentId +" #coeff" + nodeCount).text($("#firstList #coeff" + t1Count).text().trim());
									$(parentId +" #exp" + nodeCount).text($("#firstList #exp" + t1Count).text().trim());
								} else if (tag == "lessThan" || tag == "thirdWhileLoop") {
									var coeffValue = $("#secondList #coeff" + t2Count);
									var expValue = $("#secondList #exp" + t2Count);
									$(parentId +" #coeff" + nodeCount).text($("#secondList #coeff" + t2Count).text().trim());
									$(parentId +" #exp" + nodeCount).text($("#secondList #exp" + t2Count).text().trim());
								}
							} 
							fromEffectWithTweenMax(coeffValue, parentId +" #coeff" + nodeCount, false, function() {
								fromEffectWithTweenMax(expValue, parentId +" #exp" + nodeCount, false, function() {
									zoomInEffect(parentId +" #next" + nodeCount, function() {
										customIntroNxtStep("#polyOperationsDivPre", "callToAddTermMethod", "right");
									});
								});
							});
						break;
						case "variableDecInAddTermMthd":
							if (btn == "create") {
								zoomInEffect("#p1", function() {
									zoomInEffect("#p2", function() {
										addTermP1AndP2PointerVarDec();
									});
								});
							} else {
								$("#headNode1").text("p1");
								$("#tempNode1").text("p2");
								zoomInEffect("#headOp", function() {
									$("#headOpVal").text($("#sumVal").text());
									fromEffectWithTweenMax("#sumVal", "#headOpVal", false, function() {
										zoomInEffect("#headD1", function() {
											zoomInEffect("#temp1", function() {
												addTermP1AndP2PointerVarDec();
											});
										});
									});
								});
							}
						break;
						case "addTermP1EqNullFirstIf" :
							var selector1, selector2;
							if (btn == "create") {
								selector1 = "#tempDiv";
								selector2 = "#headVal";
							} else {
								selector1 = "#t3Val";
								selector2 = "#headOpVal";
							}
							$(selector1).effect( "highlight",{color: 'blue'}, 500);
							fadeInBounceEffectWithTimelineMax(selector1, selector2, "left", function() {
								nodeCount++;
								orderingNodes(nodeCount - 1);
							});
						break;
						case "storeChValue" :
							var val = $("#yesOrNoVal" + outputCount).val();
							$("#chVal").text(val).removeClass("opacity00");
							fromEffectWithTweenMax("#yesOrNoVal"+ outputCount, "#chVal", false, function() {
								customIntroNxtStep("#polyOperationsDivPre", "checkWhileChIsYOrNo", "right");
							});
						break;
						case "returnHeadVal":
							var selector = (createMethodCallCount == 1) ? "#firstList #coeffDiv1" : "#secondList #coeffDiv1"; 
							var pos = (createMethodCallCount == 1) ? "top" : "bottom"; 
							fadeInBounceEffectWithTimelineMax("#headVal", "#head"+ createMethodCallCount +"Val", pos, function() {
								svgAnimatingLineRightToLeft("#animationDiv", "#head"+ createMethodCallCount +"Div", selector, "#svgId", "head"
										+ createMethodCallCount +"Line", "arrow", function() {
									$("#headVal, #head").addClass("opacity00");
									$("#headLine").remove();
									nodeCount = p1Count = p2Count = 1;
									createMethodCallCount++;
									customIntroNxtStep((createMethodCallCount == 2) ? "#printf2" : "#buttonsDiv");
								});
							});
						break;
						case "p1AndTempCoeffSame" :
							var temporaryDiv = "#temparyPolyNode";
							var p1DivId = "#p1Div";
							var selector = (createMethodCallCount == 1) ? "#firstList #coeff"+ p1Count : "#secondList #coeff" + p1Count;
							var parentSelector = (createMethodCallCount == 1) ? "#firstList": "#secondList";
							
							if (btn != "create") {
								temporaryDiv = "#temparyPolyNodeForPloy";
								p1DivId = "#headDiv1";
								selector ="#thirdList #coeff"+ p1Count;
								parentSelector = "#thirdList";
							}
							var value  = parseInt($(temporaryDiv +" #coeff"+ nodeCount).text());
							$(p1DivId).effect( "highlight",{color: 'blue'}, 500, function() {
								if (createMethodCallCount == 1 && btn != "mul") {
									svgAnimatingLineTopToBottom("#animationDiv", p1DivId, parentSelector +" #nextDiv" 
											+ p1Count, "#svgId", "p1LineDuplicate", "arrow", function() {
										$("#p1LineDuplicate").remove();
										$(selector).effect( "highlight",{color: 'blue'}, 500);
										addTermAdditionAnimation(selector, value);
									});
								} else {
									svgAnimatingLineBottomToTop("#animationDiv", p1DivId, parentSelector +" #nextDiv" 
											+ p1Count, "#svgId", "p1LineDuplicate", "arrow", function() {
										$("#p1LineDuplicate").remove();
										$(selector).effect( "highlight",{color: 'blue'}, 500);
										addTermAdditionAnimation(selector, value);
									});
								}
							});
						break;
						case "addTermWhileLoopAnimation" :
							p1Count = p2Count = 1;
							whileLoopAnimationFunction();
						break;
						case "storeTempToP2NextAnimation" :
							var tempDiv = "#tempDiv";
							var tempVal = "#tempVal";
							var p2Div = "#p2Div";
							var selector = (btn == "create") ? (createMethodCallCount == 1) ? "#firstList" : "#secondList" : "#thirdList";
							if (btn != "create") {
								tempDiv = "#t3Div";
								tempVal = "#t3Val";
								p2Div = "#tempDiv1";
								selector = "#thirdList";
							}
							$(tempDiv).effect( "highlight",{color: 'blue'}, 500, function() {
								if (createMethodCallCount == 1 && btn == "create") {
									svgAnimatingLineTopToBottom("#animationDiv", p2Div, selector +" #nextDiv" 
											+ p2Count, "#svgId", "p2LineDuplicate", "arrow", function() {
										$("#p2LineDuplicate").remove();
										fadeInBounceEffectWithTimelineMax(tempVal, selector + " #next" + p2Count, "top", function() {
											nodeCount++;
											orderingNodes(nodeCount - 1);
										});
									});
								} else {
									svgAnimatingLineBottomToTop("#animationDiv", p2Div, selector +" #nextDiv" 
											+ p2Count, "#svgId", "p2LineDuplicate", "arrow", function() {
										$("#p2LineDuplicate").remove();
										fadeInBounceEffectWithTimelineMax(tempVal, selector + " #next" + p2Count, "top", function() {
											nodeCount++;
											orderingNodes(nodeCount - 1);
										});
									});
								}
							});
						break;
						case "ifP2AndP1ValAreSame" :
							var tempDiv = "#tempDiv";
							var tempVal = "#tempVal";
							var p1Div = "#p1Div";
							var temparyPolyNode = "#temparyPolyNode";
							var selector = (btn == "create") ? (createMethodCallCount == 1) ? "#firstList" : "#secondList" : "#thirdList";
							if (btn != "create") {
								tempDiv = "#t3Div";
								tempVal = "#t3Val";
								p2Div = "#tempDiv1";
								temparyPolyNode = "#temparyPolyNodeForPloy"
								selector = "#thirdList"
							}
							$(p1Div).effect( "highlight",{color: 'blue'}, 500, function() {
								$(tempDiv).effect( "highlight",{color: 'blue'}, 500, function() {
									svgAnimatingLineRightToLeft("#animationDiv", tempDiv, temparyPolyNode +" #coeffDiv" 
										+ nodeCount, "#svgId", "dummyTempLine", "arrow", function() {
										$("#dummyTempLine").remove();
										$(temparyPolyNode+" #nextDiv" + nodeCount).effect( "highlight",{color: 'blue'}, 500, function() {
											fadeInBounceEffectWithTimelineMax(p1Val, temparyPolyNode + " #next" + nodeCount, "right", function() {
												$(tempDiv).effect( "highlight",{color: 'blue'}, 500, function() {
													fadeInBounceEffectWithTimelineMax(tempVal, "#headVal", "right", function() {
														$("#headLine").remove();
														nodeCount++;
														orderingNodes(nodeCount - 1);
													});
												});
											});	
										});
									});
								}); 
							});
						break;
						case "ifP2AndP1ValAreNotSame" :
							var tempDivValue = "#tempDiv";
							var tempValue = "#tempVal";
							var p1DivValue = "#p1Div";
							var temparyNode = "#temparyPolyNode";
							var p1Value = "#p1Val";
							var selector = (createMethodCallCount == 1) ? "#firstList" : "#secondList";
							if (btn != "create") {
								tempDivValue = "#t3Div";
								tempValue = "#t3Val";
								p1DivValue = "#headDiv1";
								p1Value = "#headVal1"
								temparyNode = "#temparyPolyNodeForPloy";
								selector = "#thirdList"
							}
							$(p1DivValue).effect( "highlight",{color: 'blue'}, 500, function() {
								$(tempDivValue).effect( "highlight",{color: 'blue'}, 500, function() {
									svgAnimatingLineRightToLeft("#animationDiv", tempDivValue, temparyNode+ " #coeffDiv" 
										+ nodeCount, "#svgId", "dummyTempLine", "arrow", function() {
										$("#dummyTempLine").remove();
										$(temparyNode + " #nextDiv" + nodeCount).effect( "highlight",{color: 'blue'}, 500, function() {
											fadeInBounceEffectWithTimelineMax(p1Value, temparyNode+" #next" + nodeCount, "right", function() {
												$(tempDivValue).effect( "highlight",{color: 'blue'}, 500, function() {
													fadeInBounceEffectWithTimelineMax(tempValue, selector + " #next" + p2Count, "right", function() {
														nodeCount++;
														orderingNodes(nodeCount - 1);
													});
												});
												
												
											});	
										});
									});
								}); 
							});
						break;
						case "variableDecInPrintMthd" : //Print method cases
							var head = "#head";
							var headVal = "#headVal";
							var headDiv = "#headDiv";
							var selector = (createMethodCallCount == 1) ? "#firstList" : "#secondList";
							var value = $("#head"+ createMethodCallCount +"Val").text();
							var selector1 = "#head"+ createMethodCallCount +"Val";
							if (btn != "print") {
								head = "#headD1";
								headVal = "#headVal1";
								headDiv = "#headDiv1";
								selector = "#thirdList" 
								value = $("#resultVal").text();
								selector1 = "#resultVal";
								$("#headNode1").text("head");
								$("#tempNode1").text("temp");
							}
							zoomInEffect(head, function() {
								$(headVal).text(value);
								fromEffectWithTweenMax(selector1, headVal, false, function() {
									if ($(headVal).text() != "NULL") {
										$("#headLine").remove();
										if (createMethodCallCount == 1 && btn == "print") {
											svgAnimatingLineTopToBottom("#animationDiv", headDiv, selector + " #coeffDiv1", "#svgId", "headLine", "arrow", function() {
												printVariableDeclarationAnimation(selector);
											});
 										} else {
 											svgAnimatingLineBottomToTop("#animationDiv", headDiv, selector + " #coeffDiv1", "#svgId", "headLine", "arrow", function() {
 												printVariableDeclarationAnimation(selector);
 											});
 										}
									} else {
										printVariableDeclarationAnimation(selector);
									}
								});
							});
						break;
						case "PrintCoeffExpValues" :
							$("#consoleId").addClass("z-index1000000");
							$(".output-console-body").append('<div id="printCoeffExpValues'+ outputCount +'"></div>');
							printCoeffAndExpValueToConsole(1);
						break;
						case "variableDecInMulMthd" : //Multiplication Method cases
							$("#t3Node").text("temp");
							$("#sumNode").text((btn == "mul") ? "pro" : "sum");
							zoomInEffect("#p1", function() {
								zoomInEffect("#p2", function() {
									zoomInEffect("#t3", function() {
										zoomInEffect("#sum", function() {
											if (btn == "mul") {
												$("#p1Val").text("NULL");
												zoomInEffect("#p1Val", function() {
													$("#p2Val").text("NULL");
													zoomInEffect("#p2Val", function() {
														$("#t3Val").text("NULL");
														zoomInEffect("#t3Val", function() {
															$("#sumVal").text("NULL");
															zoomInEffect("#sumVal", function() {
																customIntroNxtStep("#polyOperationsDivPre", "mulMainLogicExplanation", "right");
															});
														});
													});
												});
											} else {//addition and subtraction variables
												$("#t3Val").text("NULL");
												zoomInEffect("#t3Val", function() {
													$("#sumVal").text("NULL");
													zoomInEffect("#sumVal", function() {
														$("#p1Val").text($("#head1Val").text().trim())
														fromEffectWithTweenMax("#head1Val", "#p1Val", false, function() {
															if ($("#p1Val").text() != "NULL") {
																svgAnimatingLineTopToBottom("#animationDiv", "#p1Div", "#firstList #nextDiv1", "#svgId", "p1Line", "arrow");	
															}
															$("#p2Val").text($("#head2Val").text().trim());
															fromEffectWithTweenMax("#head2Val", "#p2Val", false, function() {
																if ($("#p2Val").text() != "NULL") {
																	svgAnimatingLineBottomToTop("#animationDiv", "#p2Div", "#secondList #nextDiv1", "#svgId", "p2Line", "arrow");
																}
																customIntroNxtStep("#polyOperationsDivPre", "addAndSubMainLogicExplanation", "right");
															}); 
														});
													});
												});
											}
										});
									});
								});
							});
						break
						case "forLoopT1Initialization" :
							fadeInBounceEffectWithTimelineMax("#head1Val", "#p1Val", "right", function() {
								if ($("#p1Val").text().trim() != "NULL") {
									svgAnimatingLineTopToBottom("#animationDiv", "#p1Div", "#firstList #nextDiv1" 
											, "#svgId", "t1Line", "arrow", function() {
										customIntroNxtStep("#polyOperationsDivPre", "firstForLoopConCheck", "right");	
									});
								} else {
									customIntroNxtStep("#polyOperationsDivPre", "firstForLoopConCheck", "right");
								}
							});
						break;
						case "returnProValAnimation" :
							fadeInBounceEffectWithTimelineMax("#sumVal", "#resultVal", "right", function() {
								$("#sum, #sumVal").addClass("opacity00");
								$("#proLine").remove();
								$(".arrow").remove();
								if ($("#resultVal").text().trim() != "NULL") {
									svgAnimatingLineRightToLeft("#animationDiv", "#resultDiv", "#thirdList #coeffDiv1" 
											, "#svgId", "resultLine", "arrow", function() {
										$(".background-color-yellow").removeClass("background-color-yellow");
										$("#polyOperationsDivPre").empty().addClass("opacity00");
										customIntroNxtStep("#callPrintMethod1", "callPrintMethod");	
									});
								} else {
									$(".background-color-yellow").removeClass("background-color-yellow");
									$("#polyOperationsDivPre").empty().addClass("opacity00");
									customIntroNxtStep("#callPrintMethod1", "callPrintMethod");
								}
							});
						break;
						case "innerForLoopT2Initialization" :
							fadeInBounceEffectWithTimelineMax("#head2Val", "#p2Val", "right", function() {
								if ($("#p2Val").text().trim() != "NULL") {
									svgAnimatingLineBottomToTop("#animationDiv", "#p2Div", "#secondList #nextDiv1" 
											, "#svgId", "t2Line", "arrow", function() {
										customIntroNxtStep("#polyOperationsDivPre", "secondForLoopConCheck", "right");	
									});
								} else {
									customIntroNxtStep("#polyOperationsDivPre", "secondForLoopConCheck", "right");
								}
							});
						break;
						case "allocateMemory" :
							$("#temparyPolyNodeForPloy").empty();
							createDynamicNodes("#temparyPolyNodeForPloy", nodeCount);
							$("#temparyPolyNodeForPloy #coeff"+ nodeCount).addClass("opacity00");
							$("#temparyPolyNodeForPloy #exp"+ nodeCount).addClass("opacity00");
							$("#temparyPolyNodeForPloy #next"+ nodeCount).addClass("opacity00");
							$("#temparyPolyNodeForPloy, #temparyPolyNodeForPloy .nodes").removeClass("opacity00");
							$("#t3Val").text($("#temparyPolyNodeForPloy #dataAddress"+ nodeCount).text());
							fromEffectWithTweenMax("#temparyPolyNodeForPloy #dataAddress"+ nodeCount, "#t3Val", false, function() {
								$("#tempLine").remove();
								svgAnimatingLineRightToLeft("#animationDiv", "#t3Div", "#temparyPolyNodeForPloy #coeffDiv" + 
									nodeCount, "#svgId", "tempLine", "arrow", function() {
									if (btn == "mul") {
										customIntroNxtStep("#polyOperationsDivPre", "multiplicaitonOperation", "right");
									} else {
										if ($("#p1Val").text().trim() != "NULL" && $("#p2Val").text().trim() != "NULL") {
											customIntroNxtStep("#firstWhile", "firstIfCondition", "right");
										} else if ($("#p1Val").text().trim() != "NULL") {
											customIntroNxtStep("#secondWhile", "fillTempNodeWithCoeffExpNdNect", "right");
										} else {
											customIntroNxtStep("#thirdWhile", "fillTempNodeWithCoeffExpNdNect", "right");
										}
									}
								});
							});
						break;
						case "multilplicationOperation" :
							$("#temparyPolyNodeForPloy #coeff"+ nodeCount).text($("#firstList #coeff"+ t1Count).text());
							fromEffectWithTweenMax("#firstList #coeff"+ t1Count, "#temparyPolyNodeForPloy #coeff"+ nodeCount, false, function() {
								fromEffectWithTweenMax("#secondList #coeff"+ t2Count, "#temparyPolyNodeForPloy #coeff"+ nodeCount, true, function() {
									var val1 = parseInt($("#firstList #coeff"+ t1Count).text());
									var val2 = parseInt($("#secondList #coeff"+ t2Count).text());
									$("#temparyPolyNodeForPloy #coeff"+ nodeCount).text(val1 * val2);
									$("#temparyPolyNodeForPloy #exp"+ nodeCount).text($("#firstList #exp"+ t1Count).text());
									fromEffectWithTweenMax("#firstList #exp"+ t1Count, "#temparyPolyNodeForPloy #exp"+ nodeCount, false, function() {
										fromEffectWithTweenMax("#secondList #exp"+ t2Count, "#temparyPolyNodeForPloy #exp"+ nodeCount, true, function() {
											var val1 = parseInt($("#firstList #exp"+ t1Count).text());
											var val2 = parseInt($("#secondList #exp"+ t2Count).text());
											$("#temparyPolyNodeForPloy #exp"+ nodeCount).text(val1 + val2);
											$("#temparyPolyNodeForPloy #next"+ nodeCount).text("NULL").addClass("opacity00");
											zoomInEffect("#temparyPolyNodeForPloy #next"+ nodeCount, function() {
												customIntroNxtStep("#polyOperationsDivPre", "callToAddTermMethod", "right");
											});
										});
									});
								});
							});
						break;
						case "returnProVal" :
							$(".background-color-yellow").addClass("z-index1000000").removeClass("background-color-yellow");
							fadeInBounceEffectWithTimelineMax("#headOpVal", "#sumVal", "top", function() {
								$("#proLine").remove();
								svgAnimatingLineBottomToTop("#animationDiv", "#sumDiv", "#thirdList #nextDiv1", "#svgId", "proLine", "arrow", function() {
									$("#headOpVal, #headOp").addClass("opacity00");
									$("#headOpLine").remove();
									p1Count = p2Count = 1;
									if (btn == "mul") {
										customIntroNxtStep("#polyOperationsDivPre", "t2NxtToT2", "right");
									} else {
										if (tag == "same" || tag == "greaterThan" || tag == "secondWhileLoop") {
											travelT1NxtT1();
										} else {
											travelT2NxtToT2();
										}
									}
								});
							});
						break;
						case "travelT2NxtToT2" :
							travelT2NxtToT2();
						break;
						case "travelT1NxtToT1" :
							travelT1NxtT1();
						break;
						case "additionAndSubtractionOperation" :
							$("#temparyPolyNodeForPloy #coeff"+ nodeCount).text($("#firstList #coeff"+ t1Count).text().trim());
							fromEffectWithTweenMax("#firstList #coeff"+ t1Count, "#temparyPolyNodeForPloy #coeff"+ nodeCount, false, function() {
								fromEffectWithTweenMax("#secondList #coeff"+ t2Count, "#temparyPolyNodeForPloy #coeff"+ nodeCount, true, function() {
									var val1 = parseInt($("#firstList #coeff"+ t1Count).text());
									var val2 = parseInt($("#secondList #coeff"+ t2Count).text());
									if (btn == "add") {
										$("#temparyPolyNodeForPloy #coeff"+ nodeCount).text(val1 + val2);
									} else {
										$("#temparyPolyNodeForPloy #coeff"+ nodeCount).text(val1 - val2);
									}
									$("#temparyPolyNodeForPloy #exp"+ nodeCount).text($("#firstList #exp"+ t1Count).text().trim());
									fromEffectWithTweenMax("#firstList #exp"+ t1Count, "#temparyPolyNodeForPloy #exp"+ nodeCount, false, function() {
										$("#temparyPolyNodeForPloy #next"+ nodeCount).text("NULL").addClass("opacity00");
										zoomInEffect("#temparyPolyNodeForPloy #next"+ nodeCount, function() {
											customIntroNxtStep("#polyOperationsDivPre", "callToAddTermMethod", "right");
										});
									});
								});
							});
						break;
					}
				break;
				case "buttonsDiv" :
					buttonsClick();
				break;
				case "inMain" :
					$("#inMain").removeClass("opacity00");
					if (buttonName == "create") {
						customIntroNxtStep("#printf1");
					} else if (buttonName == "print") {//display method call in main
						customIntroNxtStep("#callPrintMethod1", "callPrintMethod");
					} else if (buttonName != "create" || buttonName != "print") { //multiplication method && add & sub
						customIntroNxtStep("#callMulMethod1", "callMulMethod");
					}
				break;
				case "printf" + createMethodCallCount :
					customIntroNxtStep("#consoleId", "print"+ createMethodCallCount +"PolyText", "left");
				break;
				case "consoleId" :
					$("#consoleId").removeClass("opacity00");
					$("#structTypelist").addClass("hide");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "print"+ createMethodCallCount +"PolyText":
							var printText;
							if (createMethodCallCount == 1) {
								$("#outputText" + createMethodCallCount).remove();
								printText = "<div id='outputText"+ createMethodCallCount +"'>Enter 1st polynomial: </div>";
							} else {
								printText = "<span id='outputText"+ createMethodCallCount +"'>Enter 2nd polynomial: </span>";
							}
							$("#consoleBodyDiv").append(printText);
							$("#consoleBodyDiv").scrollTo("#outputText"+ createMethodCallCount);
							customIntroNxtStep("#assignHead"+ createMethodCallCount +"ToNull");
						break;
						case "printAndReadCoeffNdExpValues" :
							$('.introjs-tooltip').removeClass("hide");
							$("#MemoryAllocateInCreateMthd").removeClass("z-index1000000");
							$("#printCoeffNdExpVal, #readCoeffNdExpVal").addClass("z-index1000000");
							$('.output-console-body').append('<div id="outputCoeffAndExpValue'+ outputCount + '">Enter coeff, exp of node : '
									+ ' <span id="input'+ outputCount+ '"><input class="output-scanf-line input" '
									+ 'id="val'+ outputCount+ '" size="15" maxlength="6"/></span></div>');
							$('#val' + outputCount).focus();
							var text = "Enter <y>coefficient</y> and <y>exponent</y> of the <y>polynomial</y> each separated number "
									+ "by a <y>space</y>.";
							typing(".introjs-tooltiptext",text,function() {
								$("#consoleBodyDiv").scrollTo("#outputCoeffAndExpValue"+ outputCount);
								introNextSteps("#animationDiv","storeCoeffAndExpsValues");
								readCoeffAndExpValuesFromConsole("#val" + outputCount);
							});
						break;
						case "printAndReadChValues" :
							$('.introjs-tooltip').removeClass("hide");
							$('.output-console-body').append('<div id="yesOrNoText'+ outputCount+ '">Do u want another node(y/n): '
									+ ' <div class="position" id="yesOrNoDiv'+ outputCount+ '"><input class="output-scanf-line input" '
									+ 'id="yesOrNoVal'+ outputCount+ '" size="15" maxlength="2"/></div></div>');
							$('#yesOrNoVal' + outputCount).focus();
							if (nodeCount < 5) {
								var text = "Enter <y>y/n</y> (or) <y>Y/N</y> to continue to insert node into the list.";
							} else {
								var text = "Enter <y>n</y> (or) <y>N</y> to exit the node insertion becauses here we restricted to allow only "
											+ " <y>4</y> nodes in the list).";
							}
							$("#consoleBodyDiv").scrollTo("#yesOrNoText"+ outputCount);
							$('.introjs-tooltip').removeClass("hide");
							typing(".introjs-tooltiptext",text,function() {
								introNextSteps("#animationDiv","storeChValue");
								readYesOrNoFromConsole('#yesOrNoVal' + outputCount);
							});
						break;
						case "printNull" :
							$("#structTypelist").removeClass("hide");
							$("#head, #temp, #headVal, #tempVal, #headD1, #headVal, #tempVal1, #temp1").addClass("opacity00");
							$("#headLine, #tempLine").remove();
							
							var selector = (btn != "print") ? "#thirdList" : (createMethodCallCount == 1) ? "#firstList" : "#secondList";
							if ($(selector + " .nodes").length == 0) {
								$(".output-console-body").append('<div id="printNull'+ outputCount +'">NULL</div>');
							} else {
								$("#printCoeffExpValues" + outputCount).append('<span id="printNull'+ outputCount +'">NULL</span>');
							}
							$("#consoleBodyDiv").scrollTo('#printNull'+ outputCount);
							outputCount++;
							if (btn != "print") {
								customIntroNxtStep("#buttonsDiv");
							} else {
								if (createMethodCallCount == 1) {
									createMethodCallCount++;
									$("#consoleBodyDiv").scrollTo("#yesOrNoText"+ outputCount);
									customIntroNxtStep("#callPrintMethod2", "callPrintMethod");
								} else {
									customIntroNxtStep("#buttonsDiv");
								}
							}
						break;
					}
				break;
				case "assignHead"+ createMethodCallCount +"ToNull" :
					$(".introjs-tooltip").removeClass("hide");
					if (buttonName == "create") {
						var text = "Initialize <y>head"+ createMethodCallCount +"</y> to <y>NULL</y>.";
						typing(".introjs-tooltiptext", text, function() {
							introNextSteps("#animationDiv", "initializeHead"+ createMethodCallCount +"ToNull");
							$(".introjs-nextbutton").show();
						});
					}
				break;
				case "callCreateMethod"+ createMethodCallCount :
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "callCreateMethod" :
							$(".introjs-tooltip").removeClass("hide");
							var text = "<ul><li>Call the <y>create()</y> method with argument <y>head"+ createMethodCallCount +"</y> "
										+ "(<y>NULL</y>).</li><li>The <y>return</y> value of the <y>create(</y>) method will be stored in "
										+ "<y>head"+ createMethodCallCount +"</y>.</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
								introNextSteps("#polyOperationsDivPre", "createMethodVarDec", "right");
								$(".introjs-nextbutton").show();
							});
						break;
						case "returnHead" :
							$("#polyOperationsDivPre").empty().addClass("opacity00");
							$(".arrow, #tempLine").remove();
							$(".intValues, .intVariables, #tempVal, #temp").addClass("opacity00");
							p1Count = p2Count = 1;
							customIntroNxtStep("#animationDiv", "returnHeadVal");
						break;
					}
				break;
				case "polyOperationsDivPre" :
					$("#polyOperationsDivPre").removeClass("hide");
					$(".z-index1000000, .background-color-yellow").removeClass("z-index1000000 background-color-yellow");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "createMethodVarDec":
							preCreateMethodCodeDisplay();
							$("#polyOperationsDivPre").removeClass("opacity00");
							introjs.refresh();
							$(".introjs-tooltip").removeClass("hide");
							createMethodAnimationFunction();
						break;
						case "callDoWhileLoop":
							$(".background-color-yellow").removeClass("z-index1000000 background-color-yellow");
							memoryAllocationOfTemp("ul");
						break;
						case "codeForStoreCoeffExpAndNext":
							var text = "Store the <y>coeff</y> value (<y>"+ arr[0] +"</y>) to the <y>coeff</y> field of <y>temp</y>.";
							tooltipBooletsAppendAndTypeText("#readCoeffNdExpVal", "#storeCoeffValToTempCoeff", text, "ul", function() {
								var text = "Store the <y>exp</y> value (<y>"+ arr[1] +"</y>) to the <y>exp</y> field of <y>temp</y>.";
								tooltipBooletsAppendAndTypeText("#storeCoeffValToTempCoeff", "#storeExpValToTempExp", text, "li", function() {
									var text = "Store <y>NULL</y> to the <y>next</y> field of <y>temp</y>.";
									tooltipBooletsAppendAndTypeText("#storeExpValToTempExp", "#storeNullToTemoNext", text, "li", function() {
										introNextSteps("#animationDiv", "fillTheTempNodeWithCoeffExpAndNextField");
										$(".introjs-nextbutton").show();
									});
								});
							});
						break;
						case "callToAddTermMethod":
							$(".z-index1000000, .background-color-yellow").removeClass("z-index1000000 background-color-yellow");
							$(".introjs-tooltip").show();
							callToAddTermMethod();
						break;
						case "storeRtnValueOfAddTerm" :
							$("#polyOperationsPre").empty();
							$("#p1, #p1Val, #p2, #p2Val, #polyOperationsPre").addClass("opacity00");
							$("#p1Line, #p2Line").remove();
							p1Count = p2Count = 1;
							introjs.refresh();
							$("#callAddTermMethod").addClass("background-color-yellow");
							arrow("#callAddTermMethod", "#callAddTermMethod", function() {
								$("#callAddTermMethod").removeClass("background-color-yellow");
								var text = "Print <y>Do u want another node(y/n) : </y> text into the console.";
								tooltipBooletsAppendAndTypeText("#callAddTermMethod", "#printChconformationMsg", text, "ul", function() {
									var text = "Read the <y>ch</y> values from the keyboard.";
									tooltipBooletsAppendAndTypeText("#printChconformationMsg", "#readChVal", text, "li", function() {
										outputCount++;
										introNextSteps("#consoleId", "printAndReadChValues", "left");
										$(".introjs-nextbutton").show();
									});
								});
							});
						break;
						case "checkWhileChIsYOrNo" :
							var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
										+ '<span class="position" id="tooltipChVal">ch</span> != \'n\'</span>';
							$(".introjs-tooltiptext").append("<ul><li>"+ text +"</li></ul>");
							arrow("#readChVal", "#whileLoopToInsertAnotherNode", function() {
								$("#whileLoopToInsertAnotherNode").addClass("background-color-yellow");
								$(".introjs-tooltip").removeClass("hide");
								travel("#whileLoopToInsertAnotherNode", "#tooltipCndtn", function() {
									flipEffectWithTweenMax("#tooltipChVal", $("#chVal").text(), function() {
										$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
										if ($("#chVal").text() != "n") {
											var text = "Since it evaluates to <y>true</y>."
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												appendDuplicateNextBtnUsingClickFunction("", false, function() {
													$("#whileLoopToInsertAnotherNode").removeClass("background-color-yellow");
													memoryAllocationOfTemp("li");
												});
											});
										} else {
											text = "Since it evaluates to <r>false</r>."
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												$("#whileLoopToInsertAnotherNode").removeClass("background-color-yellow");
												var text = "Return <y>head</y> value <y>"+ $("#headVal").text() +"</y>";
												tooltipBooletsAppendAndTypeText("#whileLoopToInsertAnotherNode", "#returnHeadInCreateMthd", text, "li", function() {
													introNextSteps("#callCreateMethod"+ createMethodCallCount, "returnHead");
													$(".introjs-nextbutton").show();
												});
											});
										}
									});
								});
							});
						break;
						case "printMethodVarDec" : //printMethod call
							$("#printMethodVarDec").removeClass("hide");
							buttonName = "print";
							preCreateMethodCodeDisplay();
							$("#polyOperationsDivPre").removeClass("opacity00");
							introjs.refresh();
							$(".introjs-tooltip").removeClass("hide");
							displayMethodAnimationFunction();
						break;
						case "printWhileLoop" :
							displayWhileLoopAnimation();
						break;
						case "printNull" :
							$(".introjs-tooltiptext").append("<ul></ul>");
							displayMethodPrintNull();
						break;
						case "mulMethodVarDec" : //common for Multiplication && addition && subtraction call 
							preCreateMethodCodeDisplay();
							$("#polyOperationsDivPre").removeClass("opacity00");
							if (buttonName == "add" || buttonName == "sub") {
								$("#inMain, #structTypelist").addClass("hide");
							}
							introjs.refresh();
							$(".introjs-tooltip").removeClass("hide");
							mulMethodVariablesDeclaration();
						break;
						case "mulMainLogicExplanation" :
							var text = "Initialize the <y>t1</y> value to <y>head1</y> value <y>"+ $("#head1Val").text() +"</y>.";
							tooltipBooletsAppendAndTypeText("#varIniInMul", "#firstForLoop", text, "ul", function() {
								$(".background-color-yellow").removeClass("background-color-yellow");
								$("#t1Initl").addClass("background-color-yellow");
								introNextSteps("#animationDiv", "forLoopT1Initialization");
								$(".introjs-nextbutton").show();
							});
						break;
						case "firstForLoopConCheck" :
							$(".introjs-tooltiptext").append("<ul></ul>");
							firstForLoopConditionChecking();
						break;
						case "secondForLoopConCheck" :
							$(".introjs-tooltiptext").append("<ul></ul>");
							secondForLoopConditionChecking();
						break;
						case "multiplicaitonOperation" :
							$(".introjs-tooltiptext").append("<ul></ul>");
							multiplcationAnimationFunction();
						break;
						case "storeRtnResultOfAddTerm" :
							addTermReturnCode();
							var text = "The <y>return</y> value of the <y>addTerm</y> (<y>"+ $("#headOpVal").text().trim() +"</y>)";
							$("#callAddTermMethod").addClass("background-color-yellow");
							$("#callAddTermMethod").removeClass("background-color-yellow");
							tooltipBooletsAppendAndTypeText("#callToAddTermMthd", "#callToAddTermMthd", text, "ul", function() {
								introNextSteps("#animationDiv", "returnProVal");
								$(".introjs-nextbutton").show();
							});
						break;
						case "t2NxtToT2" :
							travelT2NxtToT2Text()
							
						break;
						case "addAndSubMainLogicExplanation" : //addition and subtraction explanation
							addAndSubFirstWhileLoop();
						break;
					}
				break;
				case "polyOperationsPre" :
					$(".z-index1000000, .background-color-yellow").removeClass("z-index1000000 background-color-yellow");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "addTermVariablesDec":
							preAddTermMethodCodeDisplay();
							$("#polyOperationsPre").removeClass("opacity00");
							introjs.refresh();
							$(".introjs-tooltip").removeClass("hide");
							addTermMethodAnimationFunction();
						break;
						case "addTermIfConditions":
							var selector = "#headDiv1";
							var selector1 = "#t3Val";
							if (btn == "create") {
								selector = "#p1Val";
								selector1 = "#tempVal";
							}
							var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
										+ '<span class="position" id="tooltipP1Val">p1</span> == NULL</span>';
							$(".introjs-tooltiptext").append("<ul><li>"+ text +"</li></ul>");
							arrow("#p1P2InitializeInAddTerm", "#ifp1EqualToNullInAddTermFirstIf", function() {
								$("#ifp1EqualToNullInAddTermFirstIf").addClass("background-color-yellow");
								$(".introjs-tooltip").removeClass("hide");
								travel("#ifp1EqualToNullInAddTermFirstIf", "#tooltipCndtn", function() {
									flipEffectWithTweenMax("#tooltipP1Val", $(selector).text(), function() {
										$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
										if ($(selector).text().trim() == "NULL") {
											var text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												appendDuplicateNextBtnUsingClickFunction("", false, function() {
													$(".background-color-yellow").removeClass("background-color-yellow");
													var text = "Store the <y>temp</y> value (<y>"+ $(selector1).text() 
																+"</y>) into <y>head</y>.";
													tooltipBooletsAppendAndTypeText("#ifp1EqualToNullInAddTermFirstIf", "#tempToHeadIfP1EqNullInAddTerm", text, "li", function() {
														introNextSteps("#animationDiv", "addTermP1EqNullFirstIf", "");
														$(".introjs-nextbutton").show();
													});
												});
											});
										} else {
											var text = "Since it evaluates to <r>false</r>."
											$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
											typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
												appendDuplicateNextBtnUsingClickFunction("", false, function() {
													ifP1NotEqNullAnimation() 
												});
											});
										}
									})
								});
							});
						break;
						case "retutnHead" :
							returnAddTermHead();
						break;
						case "afterWhileLoop" :
							$(".introjs-tooltiptext").append("<ul></ul>");
							addTermWhileConFalseAnimation();
						break;
					}
				break;
				case "callPrintMethod" + createMethodCallCount ://display Method cases
					$(".background-color-yellow").removeClass("background-color-yellow z-index1000000");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "callPrintMethod" :
							$(".introjs-tooltip").removeClass("hide");
							var value = $("#head"+ createMethodCallCount +"Val").text().trim();
							var selector = "head" + createMethodCallCount;
							if (btn != "print") {
								value = $("#resultVal").text().trim();
								selector = "result"
							}
							var text = "<ul><li>Call <y>print()</y> method with argument <y>"+ selector +"</y> (<y>"+ value +"</y>).</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
								introNextSteps("#polyOperationsDivPre", "printMethodVarDec", "right");
								$(".introjs-nextbutton").show();
							});
						break;
						case "returnHead" :
							$("#polyOperationsDivPre").empty().addClass("opacity00");
							$(".arrow, #tempLine").remove();
							$(".intValues, .intVariables, #tempVal, #temp").addClass("opacity00");
							p1Count = p2Count = 1;
							customIntroNxtStep("#animationDiv", "returnHeadVal");
						break;
					}
				break;
				case "callMulMethod1" ://Multiplication Method call
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "callMulMethod" :
							$(".introjs-tooltip").removeClass("hide");
							var text = "<ul><li>Call <y>mul()</y> method with arguments <y>head1</y> (<y>"+ $("#head1Val").text().trim() 
										+"</y>) and and <y>head2</y> (<y>"+ $("#head2Val").text().trim() +"</y>)</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
								introNextSteps("#polyOperationsDivPre", "mulMethodVarDec", "right");
								$(".introjs-nextbutton").show();
							});
						break;
						case "returnResultVal" :
							$("#p1, #p2, #t3, #p1Val, #p2Val, #t3Val").addClass("opacity00");
							customIntroNxtStep("#animationDiv", "returnProValAnimation");
						break;
					}
				break;
				case "returnSum" :
					$(".introjs-tooltip").removeClass("hide");
					$(".introjs-tooltiptext").append("<ul></ul>");
					var text = "Return <y>sum</y> value <y>"+ $("#sumVal").text() +"</y>";
					$(".background-color-yellow").removeClass("background-color-yellow");
					tooltipBooletsAppendAndTypeText("#thirdWhileInAdd", "#returnSum", text, "li", function() {
						$("#inMain").removeClass("hide");
						introjs.refresh();
						introNextSteps("#callMulMethod1", "returnResultVal", "right");
						$(".introjs-nextbutton").show();
					});
				break;
				case "firstWhile" :
					$(".z-index1000000, .background-color-yellow").removeClass("z-index1000000 background-color-yellow");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "checkWhileLoop" :
							addAndSubFirstWhileLoop();
						break;
						case "firstIfCondition" :
							$(".introjs-tooltip").removeClass("hide");
							ifT1AndT2AreSame();
						break;
						case "storeRtnResultOfAddTermInAdd" :
							addTermReturnCode();
							var methodCallId;
							if (tag == "same") {
								methodCallId = "#callAddMethod1";
							} else if (tag == "greaterThan") {
								methodCallId = "#callAddMethod2";
							} else if (tag == "lessThan") {
								methodCallId = "#callAddMethod3";
							} else if (tag == "secondWhileLoop") {
								methodCallId = "#callAddMethod4";
							} else {
								methodCallId = "#callAddMethod5";
							}
							$(methodCallId).addClass("background-color-yellow");
							$(methodCallId).removeClass("background-color-yellow");
							var text = "The <y>return</y> value of the <y>addTerm</y> (<y>"+ $("#headOpVal").text().trim() +"</y>)";
							tooltipBooletsAppendAndTypeText(methodCallId, methodCallId, text, "li", function() {
								if (btn == "mul") {
									introNextSteps("#animationDiv", "returnProVal");
									$(".introjs-nextbutton").show();
								} else {
									if (tag == "same") {
										t1NextToT1Animation();
									} else if (tag == "greaterThan") {
										t1NextToT1Animation();
									} else if (tag == "lessThan") {
										travelT2NxtToT2Text()
									} else if (tag == "secondWhileLoop") {
										t1NextToT1Animation();
									} else {
										travelT2NxtToT2Text()
									}
								}
							});
						break;
					}
				break;
				case "secondWhile" :
					$(".introjs-tooltip").removeClass("hide");
					$(".introjs-tooltiptext").append("<ul></ul>");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "secondConCheck" :
							secondWhileLoopAnimationFuntion();
						break;
						case "fillTempNodeWithCoeffExpNdNect" :
							ifT1ExpGreaterThanTrueT2ExpAnimation("t1", "#memoryAlloc2", "#tmpCoeffToT1Coeff2", "#t1ExpToTmpExp3", "#tempNxtToNull4");
						break;
						case "storeRtnResultOfAddTermInAdd" :
							addTermReturnCode();
							var methodCallId= "#callAddMethod4";
							$(methodCallId).addClass("background-color-yellow");
							$(methodCallId).removeClass("background-color-yellow");
							var text = "The <y>return</y> value of the <y>addTerm</y> (<y>"+ $("#headOpVal").text().trim() +"</y>)";
							tooltipBooletsAppendAndTypeText(methodCallId, methodCallId, text, "li", function() {
								t1NextToT1Animation();
							});
						break;
					}
				break;
				case "thirdWhile" :
					$(".introjs-tooltiptext").append("<ul></ul>");
					$(".introjs-tooltip").removeClass("hide");
					var animatedStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animatedStep) {
						case "thirdConCheck" :
							thirdWhileLoopAnimationFuntion();
						break;
						case "fillTempNodeWithCoeffExpNdNect" :
							ifT1ExpGreaterThanTrueT2ExpAnimation("t2", "#memoryAlloc3", "#tmpCoeffToT2Coeff2", "#t2ExpToTmpExp2", "#tempNxtToNull5");
						break;
						case "storeRtnResultOfAddTermInAdd" :
							addTermReturnCode();
							var methodCallId= "#callAddMethod5";
							$(methodCallId).addClass("background-color-yellow");
							$(methodCallId).removeClass("background-color-yellow");
							var text = "The <y>return</y> value of the <y>addTerm</y> (<y>"+ $("#headOpVal").text().trim() +"</y>)";
							tooltipBooletsAppendAndTypeText(methodCallId, methodCallId, text, "li", function() {
								travelT2NxtToT2Text();
							});
						break;
					}					
				break;
			}
		});
	});
	introjs.start();
	$(".introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton").hide();
	var text = "In this <y>live demo</y> we will learn the implementation of <y>Polynomial</y> operations using <y>Linked List</y>.";
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-nextbutton").show();
	})
}

function buttonsClick() {
	$("#buttonsDiv").removeClass("opacity00");
	$(".buttons").removeClass("disabled");
	tag = "";
	createMethodCallCount = nodeCount = p1Count = p2Count = t1Count = t2Count = 1;
	$(".arrow").remove();
	$("#polyOperationsDivPre, #inMain").empty().addClass("opacity00");
	$("#structTypelist").removeClass("hide");
	$("#p1Node").text("p1");
	$("#p2Node").text("p2");
	$("#create").click(function() {
		btn = "create";
		$(".lines").remove()
		$("#firstList, #secondList, #thirdList").empty();
		$("#head1Line, #head2Line").remove();
		$("#head1Val, #head2Val, #resultVal").text("NULL");
		buttonNameAndCallFun("create");
	});
	$("#display").click(function() {
		btn = "print";
		buttonNameAndCallFun("print");
	});
	$("#multiplication").click(function() {
		addSunAndMulCommDivs("mul");
	});
	$("#addition").click(function() {
		console.log("Hello addition Method");
		addSunAndMulCommDivs("add");
	});
	$("#subtraction").click(function() {
		console.log("Hello subtraction Method");
		addSunAndMulCommDivs("sub");
	});
}

function addSunAndMulCommDivs(btnName) {
	btn = btnName;
	for (i = 1; i <= $("#thirdList .nodes").length; i++) {
		$("#linee" + i).remove();
	}
	$("#resultLine").remove();
	$("#thirdList").empty();
	$("#resultVal").text("NULL");
	$("#p1Node").text("t1");
	$("#p2Node").text("t2");
	buttonNameAndCallFun(btnName);
}

function buttonNameAndCallFun(btnName) {
	buttonName = btnName;
	preMain();
	customIntroNxtStep("#inMain");
}

function createMethodAnimationFunction() {
	var text = "The value (<y>NULL</y>) of <y>head"+ createMethodCallCount +"</y> is passed into the formal argument <y>head</y>.";
	tooltipBooletsAppendAndTypeText("#nameOfCreateMthd", "#nameOfCreateMthd", text, "ul", function() {
		appendDuplicateNextBtnUsingClickFunction("", false, function() {
			var text = "Declare a temporary pointer variable <y>temp</y>.";
			tooltipBooletsAppendAndTypeText("#nameOfCreateMthd", "#tempNodeInCreateMthd", text, "li", function() {
				var text = "Declare a character variable <y>ch</y>.";
				tooltipBooletsAppendAndTypeText("#tempNodeInCreateMthd", "#decChInCreateMthd", text, "li", function() {
					var text = "Declare two integer variables <y>coeff</y> and <y>exp</y>.";
					tooltipBooletsAppendAndTypeText("#decChInCreateMthd", "#decCoeffExpInCreateMthd", text, "li", function() {
						introNextSteps("#animationDiv", "variableDecInCreateMthd");
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}

function memoryAllocationOfTemp(selector) {
	var text = "The control enters into the body of <y>do-while</y> loop.";
	tooltipBooletsAppendAndTypeText("#decCoeffExpInCreateMthd", "#MemoryAllocateInCreateMthd", text, selector, function() {
		var text = "Allocate the polynomial <y>memory</y> to the <y>struct</y> variable <y>temp</y>.";
		tooltipBooletsAppendAndTypeText("#MemoryAllocateInCreateMthd", "#MemoryAllocateInCreateMthd", text, "li", function() {
			var text = "Print <y>Enter coeff, exp of node : </y> text into the console.";
			tooltipBooletsAppendAndTypeText("#MemoryAllocateInCreateMthd", "#printCoeffNdExpVal", text, "li", function() {
				var text = "Read the <y>coeff</y> and <y>exp</y> values from the keyboard.";
				tooltipBooletsAppendAndTypeText("#printCoeffNdExpVal", "#readCoeffNdExpVal", text, "li", function() {
					$("#temparyPolyNode").empty();
					createDynamicNodes("#temparyPolyNode", nodeCount);
					introNextSteps("#animationDiv", "memoryAllocationAndPrintReadCoeffAndExpVal");
					$(".introjs-nextbutton").show();
				});
			});
		});
	});
}

function addTermMethodAnimationFunction() {
	var value1 = $("#head"+ createMethodCallCount +"Val").text();
	var value2 = $("#tempVal").text();
	var headVal = "#headVal"
	if (btn != "create") {
		value1 = $("#sumVal").text();
		value2 = $("#t3Val").text();
		headVal = "#resultVal";
	}
	var text = "The values (<y>"+ value1 +"</y> and <y>"+ value2 +"</y>) is passed into the formal argument <y>head</y> and <y>temp</y>.";
	tooltipBooletsAppendAndTypeText("#nameOfAddTermMthd", "#nameOfAddTermMthd", text, "ul", function() {
		var text = "Declare two temporary pointer variable <y>p1</y> and <y>p2</y>.";
		tooltipBooletsAppendAndTypeText("#nameOfAddTermMthd", "#varDecInAddTerm", text, "li", function() {
			var text = "Initialize the <y>p1</y> and <y>p2</y> to <y>head</y> value (<y>"+ $(headVal).text() +"</y>).";
			tooltipBooletsAppendAndTypeText("#varDecInAddTerm", "#p1P2InitializeInAddTerm", text, "li", function() {
				introNextSteps("#animationDiv", "variableDecInAddTermMthd");
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function addTermP1AndP2PointerVarDec() {
	var line1 = "p1Line"
	var line2 = "p2Line"
	var selector1 = "#headVal1";
	var selector2 = "#tempVal1";
	var selector3 = "#headOpVal"
	if (btn == "create") {
		selector1 = "#p1Val";
		selector2 = "#p2Val";
		selector3 = "#headVal"
	} 
	$(selector1).text($(selector3).text()).addClass("opacity00");
	$(selector2).text($(selector3).text()).addClass("opacity00");
	fromEffectWithTweenMax(selector3, selector1, false, function() {
		commonCodeForP1AndP2InAddTerm(selector1, line1, function() {
			fromEffectWithTweenMax(selector3, selector2, false, function() {
				commonCodeForP1AndP2InAddTerm(selector2, line2, function() {
					customIntroNxtStep("#polyOperationsPre", "addTermIfConditions", "right");
				});
			});
		});
	});
}

function ifP1NotEqNullAnimation() {
	var temporaryNodeDiv = "#temparyPolyNode";
	var p1Val = "#p1Val";
	if (btn != "create") {
		temporaryNodeDiv = "#temparyPolyNodeForPloy";
		p1Val = "#headDiv1";
	} else {
		temporaryNodeDiv = "#temparyPolyNode";
		p1Val = "#p1Val";
	}
	var text = '<span id="tooltipWhileCndn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="firstCon"><span class="position" id="tooltipP1Value">p1</span> != NULL</span> && '
				+ '<span id="secondCon" class="position"><span id="p1Exp" class="position">p1 -> exp</span> &gt; <span class="position"'
				+ ' id="tempExp">temp -> exp</span></span></span>';
	$("#ifp1EqualToNullInAddTermFirstIf").removeClass("background-color-yellow");
	arrow("#ifp1EqualToNullInAddTermFirstIf", "#whileLoopInAddTerm", function() {
		$("#whileLoopInAddTerm").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
		travel("#whileLoopInAddTerm", "#tooltipWhileCndn", function() {
			flipEffectWithTweenMax("#tooltipP1Value", $(p1Val).text().trim(), function() {
				if ($(p1Val).text().trim() != "NULL") {
					var selector = (btn != "create") ? "#thirdList": (createMethodCallCount == 1) ? "#firstList" : "#secondList";
					var val1 = parseInt($(selector + " #exp" + p1Count).text().trim());
					var val2 = parseInt($(temporaryNodeDiv + " #exp" + nodeCount).text().trim());
					flipEffectWithTweenMax(p1Exp, val1, function() {
						flipEffectWithTweenMax("#tempExp", val2, function() {
							if (val1 > val2) {
								var text = "Since it evaluates to <y>true</y>, so the control enters into the body of <y>while-loop</y>.";
								$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
								typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
									appendDuplicateNextBtnUsingClickFunction("", false, function() {
										whileLoopTrueConditionAnimation(); 
									});
								});
							} else {
								var text = "Since it evaluates to <r>false</r>."
								$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
								typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
									appendDuplicateNextBtnUsingClickFunction("", false, function() {
										addTermWhileConFalseAnimation() 
									});
								});
							}
						});
					});
				} else {
					var text = "Since it evaluates to <r>false</r>."
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							addTermWhileConFalseAnimation() 
						});
					});
				}
			});
		});
	});
}

function whileLoopTrueConditionAnimation() {
	var text = "Store the <y>p1</y> value into <y>p2</y>.";
	tooltipBooletsAppendAndTypeText("#whileLoopInAddTerm", "#p1ToP2InAddTermWhileLoop", text, "li", function() {
		var text = "Store the <y>next</y> field of <y>p1</y> to <y>p1</y>.";
		tooltipBooletsAppendAndTypeText("#p1ToP2InAddTermWhileLoop", "#p1NxtTop1InAddTermWhile", text, "li", function() {
			var text = "Repeat the loop until the condition <y>p1 != NULL && p1 -> exp > temp -> exp</y> is evaluates to <r>false</r>.";
			tooltipBooletsAppendAndTypeText("#p1NxtTop1InAddTermWhile", "#whileLoopInAddTerm", text, "li", function() {
				introNextSteps("#animationDiv", "addTermWhileLoopAnimation");
				$(".introjs-nextbutton").show();
			});
		});
	});
}

function addTermWhileConFalseAnimation() {
	var temporaryNodeDiv = "#temparyPolyNode";
	var p1Value = "#p1Val";
	if (btn != "create") {
		temporaryNodeDiv = "#temparyPolyNodeForPloy";
		p1Value = "#headDiv1";
	}
	var text = '<span id="tooltipP1Cndn" class="position" style="font-family: monospace; font-weight: bold;">'
			+ '<span class="position" id="tooltipP1Valu">p1</span> != NULL</span>';
	$("#whileLoopInAddTerm").removeClass("background-color-yellow");
	arrow("#whileLoopInAddTerm", "#ifp1EqualToNullInAddTerm", function() {
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
		travel("#ifp1EqualToNullInAddTerm", "#tooltipP1Cndn", function() {
			$("#ifp1EqualToNullInAddTerm").addClass("background-color-yellow");
			flipEffectWithTweenMax("#tooltipP1Valu", $(p1Value).text().trim(), function() {
				if ($(p1Value).text().trim() == "NULL") {
					var text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							ifP1EqNullAfterWhileLoopAnimation(); 
						});
					});
				} else {
					var text = "Since it evaluates to <r>false</r>."
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							ifP1ExpAndTempExpAreSame() 
						});
					});
				}
			});
		});
	});
}

function ifP1EqNullAfterWhileLoopAnimation() {
	var tempVal = "#tempVal"
	if (btn != "create") {
		tempVal = "t3Val";
	}
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = "Store the <y>temp</y> value <y>"+ $(tempVal).text() +"</y> into the <y>next</y> field of <y>p2</y>.";
	tooltipBooletsAppendAndTypeText("#ifp1EqualToNullInAddTerm", "#tempToP2NxtInAddTerm", text, "li", function() {
		introNextSteps("#animationDiv", "storeTempToP2NextAnimation");
		$(".introjs-nextbutton").show();
	});
}

function ifP1ExpAndTempExpAreSame() {
	var tempPolyDiv = "#temparyPolyNode"; 
	if (btn != "create") {
		tempPolyDiv = "#temparyPolyNodeForPloy";
	}
	var text = '<span id="tooltipP1TempEqCndn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="tooltipP1ExpValue">p1 -> exp</span> == <span id="tooltiptempExpValue" class="position">'
				+ ' temp -> exp</span></span>';
	$("#ifp1EqualToNullInAddTerm").removeClass("background-color-yellow");
	arrow("#ifp1EqualToNullInAddTerm", "#ifP1ExpEqToTempExpInAddTerm", function() {
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
		travel("#ifP1ExpEqToTempExpInAddTerm", "#tooltipP1TempEqCndn", function() {
			var selector = (btn != "create") ? "#thirdList" : (createMethodCallCount == 1) ? "#firstList" : "#secondList";
			var val1 = parseInt($(selector + " #exp" + p1Count).text().trim());
			var val2 = parseInt($(tempPolyDiv +" #exp" + nodeCount).text().trim());
			flipEffectWithTweenMax("#tooltipP1ExpValue", val1, function() {
				flipEffectWithTweenMax("#tooltiptempExpValue", val2, function() {
					if (val1 == val2) {
						text = "Since it evaluates to <y>true</y>, so the control enters into <y>else if-block</y>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifP1ExpAndTempExpSameAnimation() 
							});
						});
					} else {
						var text = "Since it evaluates to <r>false</r>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifP1ExpAndTempExpLessThan() 
							});
						});
					}
				});
			});
		});
	});
}

function ifP1ExpAndTempExpLessThan() {
	var tempPolyDiv = "#temparyPolyNode"; 
	if (btn != "create") {
		tempPolyDiv = "#temparyPolyNodeForPloy";
	}
	var text = '<span id="tooltipP1TempLessCndn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="tooltipP1Exp">p1 -> exp</span> &lt; <span id="tooltiptempExp" class="position">'
				+ ' temp -> exp</span></span>';
	$("#ifP1ExpEqToTempExpInAddTerm").removeClass("background-color-yellow");
	arrow("#ifP1ExpEqToTempExpInAddTerm", "#ifP1ExpLessThanTempExpInAddTerm", function() {
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
		travel("#ifP1ExpLessThanTempExpInAddTerm", "#tooltipP1TempLessCndn", function() {
			var selector = (btn != "create") ? "#thirdList" : (createMethodCallCount == 1) ? "#firstList" : "#secondList";
			var val1 = parseInt($(selector + " #exp" + p1Count).text().trim());
			var val2 = parseInt($(tempPolyDiv+ " #exp" + nodeCount).text().trim());
			flipEffectWithTweenMax("#tooltipP1Exp", val1, function() {
				flipEffectWithTweenMax("#tooltiptempExp", val2, function() {
					if (val1 < val2) {
					text = "Since it evaluates to <y>true</y>, so the control enters into <y>else if-block</y>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifP2IsEqToP1AnimationFunction(); 
							});
						});
					} else {
						var text = "Since it evaluates to <r>false</r>."
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								returnAddTermHead();
							});
						});
					}
				});
			});
		});
	});
}

function ifP1ExpAndTempExpSameAnimation() {
	var text = "Store the addition result of <y>coeff</y> field of <y>p1</y> and the <y>coeff</y> field of <y>temp</y> "
				+ " to the <y>coeff</y> field of <y>p1</y>.";
	tooltipBooletsAppendAndTypeText("#ifP1ExpEqToTempExpInAddTerm", "#addp1CoeffTempCoeffNdStoreP1CoeffInAddTerm", text, "ul", function() {
		introNextSteps("#animationDiv", "p1AndTempCoeffSame");
		$(".introjs-nextbutton").show();
	});
}

function whileLoopAnimationFunction() {
	var selector = (btn != "create") ? "#thirdList" : (createMethodCallCount == 1) ? "#firstList" : "#secondList";
	
	var val1 = parseInt($(selector + " #exp" + p1Count).text());
	var val2 = parseInt($("#temparyPolyNode #exp" + nodeCount).text());
	var p1Value = "#p1Val";
	var p2Value = "#p2Val";
	var p2DivId = "#p2Div"
	if (btn != "create") {
		val2 = parseInt($("#temparyPolyNodeForPloy #exp" + nodeCount).text());
		p1Value = "#headVal1";
		p2Value = "#tempVal1";
		p2DivId = "#headDiv1"
	} 
	if ($(p1Value).text() != "NULL" &&  val1 > val2) {
		p2Count = p1Count;
		fadeInBounceEffectWithTimelineMax(p1Value, p2Value, "right", function() {
			$("#p2Line").remove();
			addTermWhileLoopP1AndP2ValuesAnimation(selector, function() {
				$(selector + " #nextDiv" + p1Count).effect( "highlight",{color: 'blue'}, 500, function() {
					fadeInBounceEffectWithTimelineMax(selector + " #next" + p1Count, p1Value, "right", function() {
						$("#p1Line").remove();
						p1Count++;
						if ($(p1Value).text() != "NULL") {
							$("#p1Line").remove();
							if (createMethodCallCount == 1 && btn == "create") {
								svgAnimatingLineTopToBottom("#animationDiv", p2DivId, selector + " #nextDiv" + p1Count, "#svgId", "p1Line", "arrow", function() {
									whileLoopAnimationFunction();
								});
							} else {
								svgAnimatingLineBottomToTop("#animationDiv", p2DivId, selector + " #nextDiv" + p1Count, "#svgId", "p1Line", "arrow", function() {
									whileLoopAnimationFunction();
								});
							}
						} else {
							whileLoopAnimationFunction();
						}
					});
				});
			});
		});
	} else {
		customIntroNxtStep("#polyOperationsPre", "afterWhileLoop", "right");
	}
}

function addTermWhileLoopP1AndP2ValuesAnimation(selector, callBackFunction) {
	var p2DivId = "#p2Div";
	var p1DivId = "#p1Div";
	if (btn != "create") {
		p1DivId = "#headDiv1";
		p2DivId = "#tempDiv1"
	}
	$("#p2Line").remove();
	if (createMethodCallCount == 1 && btn == "create") {
		svgAnimatingLineTopToBottom("#animationDiv", p2DivId, selector + " #nextDiv" + p2Count, "#svgId", "p2Line", "arrow", function() {
			$(p1DivId).effect( "highlight",{color: 'blue'}, 500);
			svgAnimatingLineTopToBottom("#animationDiv", p1DivId, selector + " #nextDiv" + p1Count, "#svgId", "p1LineDuplicate", "arrow", function() {
				$("#p1LineDuplicate").remove();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	} else {
		svgAnimatingLineBottomToTop("#animationDiv", p2DivId, selector + " #nextDiv" + p2Count, "#svgId", "p2Line", "arrow", function() {
			p2Count = p1Count;
			$(p1DivId).effect( "highlight",{color: 'blue'}, 500);
			svgAnimatingLineBottomToTop("#animationDiv", p1DivId, selector + " #nextDiv" + p1Count, "#svgId", "p1LineDuplicate", "arrow", function() {
				$("#p1LineDuplicate").remove();
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	}
} 

function addTermAdditionAnimation(selector, value) {
	var temporaryDiv = "#temparyPolyNode"
	if (btn != "create") {
		temporaryDiv = "#temparyPolyNodeForPloy"
	}
	var add = parseInt($(selector).text()) + value;
	fromEffectWithTweenMax(temporaryDiv+" #coeff"+ nodeCount, selector, true, function() {
		$(temporaryDiv).addClass("opacity00");
		$("#tempLine").remove();
		$(selector).text(add);
		customIntroNxtStep("#polyOperationsPre", "retutnHead", "right");
	});
}

function returnAddTermHead() {
	var arrowParentId;
	if (btn != "create") {
		var text = "Return the <y>head</y> value <y>"+ $("#headOpVal").text() +"</y>.";
	} else {
		var text = "Return the <y>head</y> value <y>"+ $("#headVal").text() +"</y>.";
	}
	tooltipBooletsAppendAndTypeText("#returnHeadInAddTerm", "#returnHeadInAddTerm", text, "ul", function() {
		if (btn != "create") {
			if (btn == "mul") {
				introNextSteps("#polyOperationsDivPre", "storeRtnResultOfAddTerm", "right");
			} else {
				if (tag == "same" || tag == "greaterThan" || tag == "lessThan") {
					introNextSteps("#firstWhile", "storeRtnResultOfAddTermInAdd", "right");
				} else if (tag == "thirdWhileLoop") {//pending*************
					introNextSteps("#thirdWhile", "storeRtnResultOfAddTermInAdd", "right");
				} else {
					introNextSteps("#secondWhile", "storeRtnResultOfAddTermInAdd", "right");
				}
			}
		} else {
			introNextSteps("#polyOperationsDivPre", "storeRtnValueOfAddTerm", "right");
		}
		$(".introjs-nextbutton").show();
	});
}

function ifP2IsEqToP1AnimationFunction() {
	var p1Value = "#p1Val";
	var p2Value = "#p2Val";
	if(btn != "create") {
		p1Value = "#headVal1";
		p2Value = "#tempVal1";
	}
	var text = '<span id="toolP1EqP2Cndn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="toolP1Value">p1</span> == <span id="toolP2Value" class="position">'
				+ ' p2</span></span>';
	$("#ifP1ExpLessThanTempExpInAddTerm").removeClass("background-color-yellow");
	arrow("#ifP1ExpLessThanTempExpInAddTerm", "#ifP2EqP2InAddTerm", function() {
		travel("#ifP2EqP2InAddTerm", "#toolP1EqP2Cndn", function() {
			$(".introjs-tooltip").removeClass("hide");
			$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
			var selector = (btn != "create") ? "#thirdList" : (createMethodCallCount == 1) ? "#firstList" : "#secondList";
			var val1 = parseInt($(p1Value).text().trim());
			var val2 = parseInt($(p2Value).text().trim());
			flipEffectWithTweenMax("#toolP1Value", val1, function() {
				flipEffectWithTweenMax("#toolP2Value", val2, function() {
					if (val1 == val2) {
						text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>.";
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								p2EqP1BodyAnimation();
							});
						});
					} else {
						var text = "Since it evaluates to <r>false</r>, so the control enters into <y>else-block</y>.";
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifP2IsNotEqToP1AnimationFunction();
							});
						});
					}
				});
			});
				
		});
	});
}

function p2EqP1BodyAnimation() {
	var p1Value = "#p1Val";
	var tempValue = "#tempVal";
	if(btn != "create") {
		p1Value = "#headVal1";
		tempValue = "#t3Val";
	}
	var text = "Store the <y>p1</y> value <y>"+ $(p1Value).text() +"</y> to the <y>next</y> field of <y>temp</y>.";
	tooltipBooletsAppendAndTypeText("#ifP2EqP2InAddTerm", "#p1ToTempNextInAddTerm", text, "li", function() {
		var text = "Store the <y>temp</y> value <y>"+ $(tempValue).text().trim() +"</y> to <y>head</y>.";
		tooltipBooletsAppendAndTypeText("#p1ToTempNextInAddTerm", "#tempToHeadInAddTerm", text, "li", function() {
			introNextSteps("#animationDiv", "ifP2AndP1ValAreSame");
			$(".introjs-nextbutton").show();
		});
	});
}

function ifP2IsNotEqToP1AnimationFunction() {
	var p1Value = "#p1Val";
	var tempValue = "#tempVal";
	if(btn != "create") {
		p1Value = "#headVal1";
		tempValue = "#t3Val";
	}
	var text = "Store the <y>p1</y> value <y>"+ $(p1Value).text() +"</y> to the <y>next</y> field of <y>temp</y>.";
	tooltipBooletsAppendAndTypeText("#ifP2EqP2InAddTerm", "#p1ToTempNextInAddTerm1", text, "li", function() {
		var text = "Store the <y>temp</y> value <y>"+ $(tempValue).text() +"</y> to the <y>next</y> field of <y>p2</y>.";
		tooltipBooletsAppendAndTypeText("#p1ToTempNextInAddTerm1", "#tempToP2NextInAddTerm", text, "li", function() {
			introNextSteps("#animationDiv", "ifP2AndP1ValAreNotSame");
			$(".introjs-nextbutton").show();
		});
	});
}

//Display method animation functions
function displayMethodAnimationFunction() {
	var value, selector;
	if (btn != "print") {
		value = $("#resultVal").text().trim();
		selector = "result"
	} else {
		value = $("#head"+ createMethodCallCount +"Val").text().trim();
		selector = "head"+ createMethodCallCount
	}
	var text = "The value (<y>"+ value +"</y>) <y>" + selector 
				+"</y> is passed into the formal argument <y>head</y>.";
	tooltipBooletsAppendAndTypeText("#nameOfDisplayMthd", "#nameOfDisplayMthd", text, "ul", function() {
		appendDuplicateNextBtnUsingClickFunction("", false, function() {
			var text = "Declare and initialize the temporary pointer variable <y>temp</y> to <y>head</y> (<y>"+ value +"</y>).";
			tooltipBooletsAppendAndTypeText("#nameOfDisplayMthd", "#varDecInCreate", text, "li", function() {
				introNextSteps("#animationDiv", "variableDecInPrintMthd");
				$('.introjs-nextbutton').show();
			});
		});
	});
}

function printVariableDeclarationAnimation(selector) {
	var headValue = "#headVal";
	var tempDIvId = "#temp";
	var tempValue = "#tempVal";
	var tempDivId = "#tempDiv";
	if (btn != "print") {
		var head = "#headD1";
		var headValue = "#headVal1";
		var headDiv = "#headDiv1";
		var tempDIvId = "#temp1";
		var tempValue = "#tempVal1";
		var tempDivId = "#tempDiv1";
	}
	zoomInEffect(tempDIvId, function() {
		$(tempValue).text($(headValue).text());
		fromEffectWithTweenMax(headValue, tempValue, false, function() {
			if ($(tempValue).text() != "NULL") {
				$("#tempLine").remove();
				if (createMethodCallCount == 1 && btn == "print") {
					svgAnimatingLineTopToBottom("#animationDiv", tempDivId, selector + " #coeffDiv1", "#svgId", "tempLine", "arrow", function() {
						customIntroNxtStep("#polyOperationsDivPre", "printWhileLoop", "right");
					});
				} else {
					svgAnimatingLineBottomToTop("#animationDiv", tempDivId, selector + " #coeffDiv1", "#svgId", "tempLine", "arrow", function() {
						customIntroNxtStep("#polyOperationsDivPre", "printWhileLoop", "right");
					});
				}
			} else {
				customIntroNxtStep("#polyOperationsDivPre", "printWhileLoop", "right");
			}
		});
	});
}

function displayWhileLoopAnimation() {
	var tempValue = "#tempVal";
	if (btn != "print") {
		tempValue = "#tempVal1";
	}
	var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="tooltipTenpVal">temp</span> != NULL</span>';
	$(".introjs-tooltiptext").append("<ul><li>"+ text +"</li></ul>");
	arrow("#varDecInCreate", "#printWhileLoop", function() {
		$("#printWhileLoop").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass("hide");
		travel("#printWhileLoop", "#tooltipCndtn", function() {
			flipEffectWithTweenMax("#tooltipTenpVal", $(tempValue).text(), function() {
				if ($(tempValue).text().trim() != "NULL") {
					text = "Since it evaluates to <y>true</y>, so the control enters into the body of <y>while-loop</y>.";
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							displayMethodPrintNodeValues();
						});
					});
				} else {
					var text = "Since it evaluates to <r>false</r>.";
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							displayMethodPrintNull();
						});
					});
				}
			});
		});
	});
}

function displayMethodPrintNull() {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = "Print <y>NULL</y> to the console.";
	tooltipBooletsAppendAndTypeText("#printWhileLoop", "#printNullOnConsole", text, "li", function() {
		introNextSteps("#consoleId", "printNull", "left");
		$(".introjs-nextbutton").show();
	});
}

function displayMethodPrintNodeValues() {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = "Print the <y>coeff</y> field of <y>temp</y> and the <y>exp</y> field of </y>temp</y>.";
	tooltipBooletsAppendAndTypeText("#printWhileLoop", "#printTempCoeffAndExpVal", text, "li", function() {
		var text = "Travel the <y>next</y> field of <y>temp</y> to <y>temp</y>.";
		tooltipBooletsAppendAndTypeText("#printTempCoeffAndExpVal", "#travelTempNctToTemp", text, "li", function() {
			var text = "Repeat the <y>while-loop</y> until the condition <y>temp != NULL</y> is evaluates to <r>false</r>.";
			tooltipBooletsAppendAndTypeText("#travelTempNctToTemp", "#printWhileLoop", text, "li", function() {
				appendDuplicateNextBtnUsingClickFunction("", false, function() {
					introNextSteps("#animationDiv", "PrintCoeffExpValues");
					$('.introjs-nextbutton').show();
				});
			});
		});
	})
}

function printCoeffAndExpValueToConsole(printCount) {
	var selector = (btn != "print") ? "#thirdList" : (createMethodCallCount == 1) ? "#firstList" : "#secondList";
	arrow("#printTempCoeffAndExpVal", "#printTempCoeffAndExpVal");
	var tempVal = (btn == "print") ? "#tempVal" : "#tempVal1";
	var tempid = (btn == "print") ? "#tempDiv" : "#tempDiv1";
	$(tempid).effect( "highlight", {color: 'blue'}, 500, function() {
		if (createMethodCallCount == 1 && btn == "print") {
			svgAnimatingLineTopToBottom("#animationDiv", "#tempDiv", selector + " #coeff" + printCount , "#svgId", "dummyTempLine", "arrow", function() {
				$("#dummyTempLine").remove(); 
				$(selector + " #coeff" + printCount).parent().effect( "highlight", {color: 'blue'}, 500, function() {
					$("#printCoeffExpValues" + outputCount).append("<span id='values"+ outputCount  +""+ printCount +"'>"+ 
					$(selector + " #coeff" + printCount).text() + " X^ "+ $(selector + " #exp" + printCount).text() + " --> </span>");
					travel($(selector + " #exp" + printCount).parent(), "#values"+ outputCount +"" + printCount, function() {
						$("#consoleBodyDiv").scrollTo("#printCoeffExpValues" + outputCount);
						arrow("#printTempCoeffAndExpVal", "#travelTempNctToTemp");
						$("#tempDiv").effect( "highlight", {color: 'blue'}, 500, function() {
							svgAnimatingLineTopToBottom("#animationDiv", "#tempDiv", selector + " #coeff" + printCount , "#svgId", "dummyTempLine", "arrow", function() {
								$("#dummyTempLine").remove(); 
								$(selector + " #next" + printCount).parent().effect( "highlight", {color: 'blue'}, 500, function() {
									fadeInBounceEffectWithTimelineMax(selector + " #next"+ printCount, tempVal, "left", function() {
										$("#tempLine").remove();
										if ($(tempVal).text().trim() != "NULL") {
											printCount++;
											svgAnimatingLineTopToBottom("#animationDiv", tempid, selector + " #coeff" + printCount , "#svgId", "tempLine", "arrow", function() {
												printCoeffAndExpValueToConsole(printCount)
											});
										} else {
											customIntroNxtStep("#polyOperationsDivPre", "printNull", "right");	
										}
									});
								});
							});
						});
					});
				});
			});
		} else {
			svgAnimatingLineBottomToTop("#animationDiv", tempid, selector + " #coeff" + printCount , "#svgId", "dummyTempLine", "arrow", function() {
				$("#dummyTempLine").remove(); 
				$(selector + " #coeff" + printCount).parent().effect( "highlight", {color: 'blue'}, 500, function() {
					$("#printCoeffExpValues" + outputCount).append("<span id='values"+ outputCount +""+ printCount +"'>"+ 
					$(selector + " #coeff" + printCount).text() + " X^ "+ $(selector + " #exp" + printCount).text() + " --> </span>");
					travel($(selector + " #exp" + printCount).parent(), "#values"+ outputCount +"" + printCount, function() {
						arrow("#printTempCoeffAndExpVal", "#travelTempNctToTemp");
						$(tempid).effect( "highlight", {color: 'blue'}, 500, function() {
							svgAnimatingLineBottomToTop("#animationDiv", tempid, selector + " #coeff" + printCount , "#svgId", "dummyTempLine", "arrow");
							$("#dummyTempLine").remove(); 
							$(selector + " #next" + printCount).parent().effect( "highlight", {color: 'blue'}, 500, function() {
								fadeInBounceEffectWithTimelineMax(selector + " #next"+ printCount, tempVal, "left", function() {
									$("#tempLine").remove();
									if ($(tempVal).text().trim() != "NULL") {
										printCount++;
										svgAnimatingLineBottomToTop("#animationDiv", tempid, selector + " #coeff" + printCount , "#svgId", "tempLine", "arrow");
										printCoeffAndExpValueToConsole(printCount)
									} else {
										customIntroNxtStep("#polyOperationsDivPre", "printNull", "right");	
									}
								});
							});
						});
					});
				});
			});
		}
	});
}

//Multiplication Method Animation
function mulMethodVariablesDeclaration() {
	var text = "The value (<y>"+ $("#head1Val").text().trim() +"</y>) of <y>head1</y> is passed into the formal argument <y>head1</y> and "
				+" the value (<y>"+ $("#head2Val").text().trim() +"</y>) of <y>head2</y> is passed into the formal argument <y>head2</y>.";
	tooltipBooletsAppendAndTypeText("#nameOfMulMthd", "#nameOfMulMthd", text, "ul", function() {
		appendDuplicateNextBtnUsingClickFunction("", false, function() {
			if (btn == "mul") {
				var text = "Declare four temporary pointer variables <y>t1</y>, <y>t2</y>, <y>temp</y> and <y>pro</y>.";
				tooltipBooletsAppendAndTypeText("#nameOfMulMthd", "#varDecInMul", text, "li", function() {
					var text = "Initialize the four pointer variables to <y>NULL</y>."
						tooltipBooletsAppendAndTypeText("#varDecInMul", "#varIniInMul", text, "li", function() {
							introNextSteps("#animationDiv", "variableDecInMulMthd");
							$('.introjs-nextbutton').show();
						});
				});
			} else {
				console.log("in add method")
				var text = "Declare four temporary pointer variables <y>t1</y>, <y>t2</y>, <y>temp</y> and <y>sum</y>.<br/>"
							+ " Initialize the <y>temp</y> and <y>sum</y> variables to <y>NULL</y>.";
				tooltipBooletsAppendAndTypeText("#nameOfMulMthd", "#varDecInAdd", text, "li", function() {
					var text = "Initialize the <y>t1</y> variable to <y>"+ $("#head1Val").text().trim() +"</y>.";
					tooltipBooletsAppendAndTypeText("#varDecInAdd", "#t1InilToHead1Val", text, "li", function() {
						var text = "Initialize the <y>t2</y> variable to <y>"+ $("#head2Val").text().trim() +"</y>";
						tooltipBooletsAppendAndTypeText("#t1InilToHead1Val", "#t2InitlToHead2Val", text, "li", function() {
							introNextSteps("#animationDiv", "variableDecInMulMthd");
							$('.introjs-nextbutton').show();
						});
					});
				});
			}
		});
	});
}

function firstForLoopConditionChecking() {
	var text = '<span id="toolP1EqP2Cndn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="toolP1Value">t1</span> != NULL</span>';
	$("#t1Initl").removeClass("background-color-yellow");
	arrow("#firstForLoop", "#firstForLoop", function() {
		$(".introjs-tooltip").removeClass("hide");
		travel("#t1NotEqNull", "#toolP1EqP2Cndn", function() {
			$(".introjs-tooltip").removeClass("hide");
			$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
			flipEffectWithTweenMax("#toolP1Value", $("#p1Val").text().trim(), function() {
				if ($("#p1Val").text().trim() != "NULL") {
					text = "Since it evaluates to <y>true</y>, so the control enters into the body of <y>for-loop</y>.";
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							innerForLoopCondition();
						});
					});
				} else {
					text = "Since it evaluates to <r>false</r>.";
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							returnProVal();
						});
					});
				}
			});
		});
	});
}

function returnProVal() {
	var text = "Return <y>pro</y> value <y>"+ $("#sumVal").text() +"</y>";
	$(".background-color-yellow").removeClass("background-color-yellow");
	tooltipBooletsAppendAndTypeText("#firstForLoop", "#returnPro", text, "li", function() {
		introNextSteps("#callMulMethod1", "returnResultVal", "right");
		$(".introjs-nextbutton").show();
	});
}

function innerForLoopCondition() {
	var text = "Initialize the <y>t2</y> value to <y>head2</y> value <y>"+ $("#head2Val").text() +"</y>.";
	tooltipBooletsAppendAndTypeText("#firstForLoop", "#secondForLoop", text, "li", function() {
		$(".background-color-yellow").removeClass("background-color-yellow");
		$("#t2Initl").addClass("background-color-yellow");
		introNextSteps("#animationDiv", "innerForLoopT2Initialization");
		$(".introjs-nextbutton").show();
		
	});
}

function secondForLoopConditionChecking() {
	var text = '<span id="toolT1EqT2Cndn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="toolT2Value">t2</span> != NULL</span>';
	$("#t2Initl").removeClass("background-color-yellow");
	arrow("#secondForLoop", "#secondForLoop", function() {
		$(".introjs-tooltip").removeClass("hide");
		travel("#t2NotEqNull", "#toolT1EqT2Cndn", function() {
			$(".introjs-tooltip").removeClass("hide");
			$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
			flipEffectWithTweenMax("#toolT2Value", $("#p2Val").text().trim(), function() {
				if ($("#p2Val").text().trim() != "NULL") {
					text = "Since it evaluates to <y>true</y>, so the control enters into the body of <y>for-loop</y>.";
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							allocateMemoryForMul("#secondForLoop", "#memoryAlloc")
						});
					});
				} else {
					text = "Since it evaluates to <r>false</r>.";
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							t1NextToT1Animation();
						});
					});
				}
			});
		});
	});
}

function t1NextToT1Animation() {
	var selector1 = "#secondForLoop";
	var selector2 = "#firstForLoop";
	if (btn != "mul") {
		if (tag == "same") {
			selector1 = "#callAddMethod1";
			selector2 = "#treavelT1ToT1Nxt1";
		} else if (tag == "greaterThan") {
			selector1 = "#callAddMethod2";
			selector2 = "#treavelT1ToT1Nxt2";
		} else if (tag == "secondWhileLoop") {
			selector1 = "#callAddMethod4";
			selector2 = "#treavelT1ToT1Nxt3";
		} else {
			selector1 = "#callAddMethod5";
			selector2 = "#treavelT2ToT2Nxt3";
		}
	}
	var text = "Travel the <y>next</y> field of <y>t1</y> to <y>t1</y>.";
	tooltipBooletsAppendAndTypeText(selector1, selector2, text, "li", function() {
		$(".background-color-yellow").addClass("background-color-yellow");
		$("#t1NxtToT1").addClass("background-color-yellow");
		$(selector2).addClass("background-color-yellow");
		if (btn == "mul") {
			introNextSteps("#animationDiv", "travelT1NxtToT1")
			$(".introjs-nextbutton").show();
		} else {
			if (tag == "same") {
				travelT2NxtToT2Text();
			} else  {
				introNextSteps("#animationDiv", "returnProVal");
				$(".introjs-nextbutton").show();
			}
		}
	});
}

function travelT2NxtToT2Text() {
	var selector1 = "#callToAddTermMthd";
	var selector2 = "#secondForLoop";
	if (btn != "mul") {
		if (tag == "same") {
			selector1 = "#treavelT1ToT1Nxt1";
			selector2 = "#treavelT2ToT2Nxt1";
		} else if (tag == "lessThan") {
			selector1 = "#callAddMethod3";
			selector2 = "#treavelT2ToT2Nxt2";
		} else {
			selector1 = "#callAddMethod5";
			selector2 = "#treavelT2ToT2Nxt3";
		}
	}
	$("#t2NxtToT2, #treavelT2ToT2Nxt1").addClass("background-color-yellow");
	$(".introjs-tooltiptext").append("<ul></ul>");
	var text = "Travel the <y>next</y> field of <y>t2</y> to <y>t2</y>";
	tooltipBooletsAppendAndTypeText(selector1, selector2, text, "ul", function() {
		$(".background-color-yellow").removeClass("background-color-yellow");
		if (btn == "mul") {
			introNextSteps("#animationDiv", "travelT2NxtToT2");
			$(".introjs-nextbutton").show();
		} else {
			introNextSteps("#animationDiv", "returnProVal");
			$(".introjs-nextbutton").show();
		}
	});
} 

function allocateMemoryForMul(selector1, selector2) {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = "Allocate the polynomial <y>memory</y> to the <y>struct</y> variable <y>temp</y>.";
	tooltipBooletsAppendAndTypeText(selector1, selector2, text, "li", function() {
		introNextSteps("#animationDiv", "allocateMemory")
		$(".introjs-nextbutton").show();
	});
}

function multiplcationAnimationFunction() {
	var text = "Perform <y>multiplication</y> operation on the <y>coeff</y> field of <y>t1</y> and the <y>coeff</y> field of <y>t2</y> finally the "
				+" <y>result</y> will be stored in the <y>coeff</y> field of <y>temp</y>.";
	tooltipBooletsAppendAndTypeText("#memoryAlloc", "#mulT1CoeffNdT2Coeff", text, "li", function() {
		var text = "Perform <y>addition</y> operation on the <y>exp</y> field of <y>t1</y> and the <y>exp</y> field of <y>t2</y> finally the "
				+" <y>result</y> will be stored in the <y>exp</y> field of <y>temp</y>.";
		tooltipBooletsAppendAndTypeText("#mulT1CoeffNdT2Coeff", "#addT1ExpNdT2Exp", text, "li", function() {
			var text = "Assign <y>NULL</y> to the <y>next</y> field of <y>temp</y>.";
			tooltipBooletsAppendAndTypeText("#addT1ExpNdT2Exp", "#tmpNxtNull", text, "li", function() {
				introNextSteps("#animationDiv", "multilplicationOperation");
				$(".introjs-nextbutton").show();
			});
		});
	});
}

function addAndSubFirstWhileLoop() { //addition and subtraction functions
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="tooltipT1Val">t1</span> != NULL && '
				+ '<span class="position" id="tooltipT2Val">t2</span> != NULL</span></span>';
	arrow("#t2InitlToHead2Val", "#firstWhileConInAdd", function() {
		$("#firstWhileCon").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass("hide");
		travel("#firstWhileCon", "#tooltipCndtn", function() {
			$(".introjs-tooltiptext").append("<ul></ul>");
			$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
			flipEffectWithTweenMax("#tooltipT1Val", $("#p1Val").text().trim(), function() {
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				if ($("#p1Val").text().trim() != "NULL") {
					flipEffectWithTweenMax("#tooltipT2Val", $("#p2Val").text().trim(), function() {
						if ($("#p2Val").text().trim() != "NULL") {
							var text = "Since it evaluates to <y>true</y>, so the control enters into the body "
										+ " of <y>while-loop</y>."
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								appendDuplicateNextBtnUsingClickFunction("", false, function() {
									allocateMemoryForMul("#firstWhileConInAdd", "#memoryAlloc1")
								});
							});
						} else {
							firstWhileFalseCon("#secondWhile", "secondConCheck");
						}
					});
				} else {
					firstWhileFalseCon("#secondWhile", "secondConCheck");
				}
			});
		});
	});
}

function firstWhileFalseCon(stepName, animationStep) {
	var text = "Since, the condition is evaluates to <r>false</r>.";
	typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
		introNextSteps(stepName, animationStep, "right");
		$(".introjs-nextbutton").show();
	});
}

function secondWhileLoopAnimationFuntion() {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
			+ '<span class="position" id="tooltipT1Val">t1</span> != NULL</span>';
		arrow("#firstWhileConInAdd", "#secondWhileInAdd", function() {
			$("#secondWhileCon").addClass("background-color-yellow");
			$(".introjs-tooltip").removeClass("hide");
			$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
			travel("#secondWhileCon", "#tooltipCndtn", function() {
				flipEffectWithTweenMax("#tooltipT1Val", $("#p1Val").text(), function() {
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					if ($("#p1Val").text().trim() != "NULL") {
						tag = "secondWhileLoop";
						var text = "Since it evaluates to <y>true</y>, so the control enters into the body "
									+ " of<y>while-loop</y>."
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								allocateMemoryForMul("#secondWhileInAdd", "#memoryAlloc2");
						});
					});
				} else {
					firstWhileFalseCon("#thirdWhile", "thirdConCheck");
				}
			});
		});
	});
}

function thirdWhileLoopAnimationFuntion() {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="tooltipT2Val">t2</span> != NULL</span>';
	arrow("#secondWhileInAdd", "#thirdWhileInAdd", function() {
		$("#thirdWhileInAdd").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
		travel("#thirdWhileInAdd", "#tooltipCndtn", function() {
			flipEffectWithTweenMax("#tooltipT2Val", $("#p2Val").text().trim(), function() {
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				if ($("#p2Val").text().trim() != "NULL") {
					tag = "thirdWhileLoop";
					var text = "Since it evaluates to <y>true</y>, so the control enters into the body "
								+ " of<y>while-loop</y>."
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						appendDuplicateNextBtnUsingClickFunction("", false, function() {
							allocateMemoryForMul("#thirdWhileInAdd", "#memoryAlloc3");
						});
					});
				} else {
					firstWhileFalseCon("#returnSum", "");
				}
			});
		});
	});
}

function ifT1AndT2AreSame() {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = '<span id="tooltipCndtn" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="tooltipT1Exp">t1 -> exp</span> == <span class="position" '
				+ 'id="tooltipT2Exp">t2 -> exp</span></span>';
	arrow("#memoryAlloc1", "#whileFirstIfConInAdd", function() {
		$("#whileFirstIfConInAdd").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext").append("<ul><li>"+ text +"</li></ul>");
		travel("#whileFirstIfCon", "#tooltipCndtn", function() {
			flipEffectWithTweenMax("#tooltipT1Exp", $("#firstList #exp"+t1Count).text().trim(), function() {
				flipEffectWithTweenMax("#tooltipT2Exp", $("#secondList #exp"+t2Count).text().trim(), function() {
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					var value1 = $("#firstList #exp"+t1Count).text().trim();
					var value2 = $("#secondList #exp"+t2Count).text().trim()
					if (value1 == value2) {
						tag = "same";
						var text = "Since it evaluates to <y>true</y>, so the control enters into the body of<y>while-loop</y>."
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifBothNodeExpAreSameAnimation();
							});
						});
					} else {
						var text = "Since it evaluates to <r>false</r>."
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifBothNodeExpAreNotSameAnimation();
							});
						});
					}
				});
			});
		});
	});
}

function ifBothNodeExpAreSameAnimation() {
	var operation = (btn == "add") ? "addition" : "subtraction";
	var text = "Perform <y>"+ operation +"</y> operation on the <y>coeff</y> field of <y>t1</y> and the <y>coeff</y> "
				+"field of <y>t2</y> finally the <y>result</y> will be stored in the <y>coeff</y> field of <y>temp</y>.";
	tooltipBooletsAppendAndTypeText("#whileFirstIfConInAdd", "#additionSpan", text, "li", function() {
		var text = "Store the value of  <y>exp</y> field of <y>t1</y>. to <y>exp</y> filed of </y>temp</y>.";
		tooltipBooletsAppendAndTypeText("#additionSpan", "#t1ExpToTmpExp1", text, "li", function() {
			var text = "Assign <y>NULL</y> to the <y>next</y> field of <y>temp</y>.";
			tooltipBooletsAppendAndTypeText("#t1ExpToTmpExp1", "#tempNxtToNull1", text, "li", function() {
				introNextSteps("#animationDiv", "additionAndSubtractionOperation");
				$(".introjs-nextbutton").show();
			});
		});
	});
}

function ifBothNodeExpAreNotSameAnimation() {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = '<span id="tooltipCondition" class="position" style="font-family: monospace; font-weight: bold;">'
				+ '<span class="position" id="t1Exp">t1 -> exp</span> &gt; <span class="position" '
				+ 'id="t2Exp">t2 -> exp</span></span>';
	arrow("#whileFirstIfConInAdd", "#whileSecondIfConInAdd", function() {
		$("#whileSecondIfConInAdd").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext ul").append("<li>"+ text +"</li>");
		travel("#whileSecondIfConInAdd", "#tooltipCondition", function() {
			flipEffectWithTweenMax("#t1Exp", $("#firstList #exp"+t1Count).text().trim(), function() {
				flipEffectWithTweenMax("#t2Exp", $("#secondList #exp"+t2Count).text().trim(), function() {
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					var value1 = parseInt($("#firstList #exp" + t1Count).text().trim());
					var value2 = parseInt($("#secondList #exp" + t2Count).text().trim());
					if (value1 > value2) {
						tag = "greaterThan";
						var text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								appendDuplicateNextBtnUsingClickFunction("", false, function() {
									ifT1ExpGreaterThanTrueT2ExpAnimation("t1", "#whileSecondIfConInAdd", "#tmpCoeffToT1Coeff1", "#t1ExpToTmpExp2", "#tempNxtToNull2");
								});
							});
					} else {
						tag = "lessThan";
						var text = "Since it evaluates to <r>false</r>."
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							appendDuplicateNextBtnUsingClickFunction("", false, function() {
								ifT1ExpGreaterThanTrueT2ExpAnimation("t2", "#whileSecondIfConInAdd", "#tmpCoeffToT2Coeff1", "#t2ExpToTmpExp1", "#tempNxtToNull3");
							});
						});
					}
				});
			});
		});
	});
}

function ifT1ExpGreaterThanTrueT2ExpAnimation(t1, selector1, selector2, selector3, selector4) {
	$(".background-color-yellow").removeClass("background-color-yellow");
	var text = "Store the value  of <y>coeff</y> field of <y>"+ t1 +"</y> to <y>coeff</y> field of </y>temp</y>";
	tooltipBooletsAppendAndTypeText(selector1, selector2, text, "li", function() {
		var text = "Store the value of <y>exp</y> field of <y>t1</y> to <y>exp</y> field of </y>temp</y>.";
		tooltipBooletsAppendAndTypeText(selector2, selector3, text, "li", function() {
			var text = "Assign <y>Null</y> to the <y>next</y> filed of <y>temp</y>.";
			tooltipBooletsAppendAndTypeText(selector3, selector4, text, "li", function() {
				introNextSteps("#animationDiv", "fillTheTempNodeWithCoeffExpAndNextField");
				$(".introjs-nextbutton").show();
			});
		});
		
	});
}

function travelT2NxtToT2() {
	$(".background-color-yellow").addClass("z-index1000000");
	$("#p2Div").effect( "highlight",{color: 'blue'}, 500, function() {
		fadeInBounceEffectWithTimelineMax("#secondList #nextDiv" + t2Count, "#p2Val", "right", function() {
			$("#t2Line").remove();
			t2Count++;
			if ($("#p2Val").text().trim() != "NULL") {
				svgAnimatingLineBottomToTop("#animationDiv", "#p2Div", "#secondList #nextDiv" + t2Count 
						, "#svgId", "t2Line", "arrow", function() {
					if (btn == "mul") {
						customIntroNxtStep("#polyOperationsDivPre", "secondForLoopConCheck", "right");
					} else {
						$(".z-index1000000").removeClass("z-index1000000 background-color-yellow");
						
						if (tag == "greaterThan" || tag == "lessThan" || tag == "same") {
							customIntroNxtStep("#firstWhile", "checkWhileLoop", "right");
						} else if (tag == "secondWhileLoop") {
							customIntroNxtStep("#secondWhile", "secondConCheck", "right");
						} else {
							customIntroNxtStep("#thirdWhile", "thirdConCheck", "right");	
						}
						customIntroNxtStep("#firstWhile", "checkWhileLoop", "right");
					}
				});
			} else {
				if(btn == "mul") {
					customIntroNxtStep("#polyOperationsDivPre", "secondForLoopConCheck", "right");
				} else {
					$(".z-index1000000").removeClass("z-index1000000 background-color-yellow");
					if (tag == "greaterThan" || tag == "lessThan" || tag == "same") {
						customIntroNxtStep("#firstWhile", "checkWhileLoop", "right");
					} else if (tag == "secondWhileLoop") {
						customIntroNxtStep("#secondWhile", "secondConCheck", "right");
					} else {
						customIntroNxtStep("#thirdWhile", "thirdConCheck", "right");	
					}
				}
			}
		});
	});
}

function travelT1NxtT1() {
	$(".background-color-yellow").addClass("z-index1000000");
	$("#p1Div").effect( "highlight",{color: 'blue'}, 500, function() {
		fadeInBounceEffectWithTimelineMax("#firstList #nextDiv" + t1Count, "#p1Val", "right", function() {
			$("#t1Line").remove();
			t1Count++;
			if (btn == "mul") {
				t2Count = 1;
			}
			if ($("#p1Val").text().trim() != "NULL") {
				svgAnimatingLineTopToBottom("#animationDiv", "#p1Div", "#firstList #nextDiv" + t1Count 
						, "#svgId", "t1Line", "arrow", function() {
					if(btn == "mul") {
						customIntroNxtStep("#polyOperationsDivPre", "firstForLoopConCheck", "right");
					} else {
						if (tag == "same") {
							travelT2NxtToT2();
						} else if (tag == "greaterThan" || tag == "lessThan") {
							customIntroNxtStep("#firstWhile", "checkWhileLoop", "right");
						} else if (tag == "secondWhileLoop") {
							customIntroNxtStep("#secondWhile", "secondConCheck", "right");
						} else {
							customIntroNxtStep("#thirdWhile", "thirdConCheck", "right");	
						}
					}
				});
			} else {
				if(btn == "mul") {
					customIntroNxtStep("#polyOperationsDivPre", "firstForLoopConCheck", "right");
				} else {
					if (tag == "same") {
						travelT2NxtToT2();
					} else if (tag == "greaterThan" || tag == "lessThan") {
						customIntroNxtStep("#firstWhile", "checkWhileLoop", "right");
					} else if (tag == "secondWhileLoop") {
						customIntroNxtStep("#secondWhile", "secondConCheck", "right");
					} else {
						customIntroNxtStep("#thirdWhile", "thirdConCheck", "right");	
					}
				}
			}
		});
	});
}

function addTermReturnCode() {
	$(".introjs-tooltiptext").append("<ul></ul>");
	$(".arrow").remove();
	$("#polyOperationsPre").empty();
	$("#headD1, #headVal1, #temp1, #tempVal1, #polyOperationsPre").addClass("opacity00");
	$("#p1Line, #p2Line").remove();
	p1Count = p2Count = 1;
	introjs.refresh();
}

function callToAddTermMethod() {
	if(tag == "same") {
		var selector1 = "#tempNxtToNull1";
		var selector2 = "#callAddMethod1";
	} else if (tag == "greaterThan") {
		var selector1 = "#tempNxtToNull2";
		var selector2 = "#callAddMethod2";
	} else if (tag == "lessThan") {
		var selector1 = "#tempNxtToNull3";
		var selector2 = "#callAddMethod3";
	} else if (tag == "secondWhileLoop") {
		var selector1 = "#tempNxtToNull4";
		var selector2 = "#callAddMethod4";
	} else {
		var selector1 = "#tempNxtToNull5";
		var selector2 = "#callAddMethod5";
	}
	var value1 = $("#sumVal").text();
	var value2 = $("#t3Val").text();
	var selectorName = "sum";
	if (btn == "mul") {
		selector2 = "#callToAddTermMthd";
		selectorName = "pro";
		selector1 = "#tmpNxtNull";	
	}
	if (btn == "create") {
		selector1 = "#storeNullToTemoNext";
		selector2 = "#callAddTermMethod";
		value1 = $("#head"+ createMethodCallCount +"Val").text();
		value2 = $("#tempVal").text();
		selectorName = "head";
	} 
	$(selector2).addClass("background-color-yellow");
	var text = "The <y>addTerm()</y> method is used to arrange the <y>polynomial</y> in an <y>order</y>.";
	tooltipBooletsAppendAndTypeText(selector1, selector2, text, "ul", function() {
		var text = "Call the <y>addTerm()</y> method with arguments <y>"+ selectorName +"</y> (<y>"+ value1  
					+"</y>) and <y>temp</y> (<y>"+ value2 +"</y>)."
		tooltipBooletsAppendAndTypeText(selector2, selector2, text, "li", function() {
			introNextSteps("#polyOperationsPre", "addTermVariablesDec", "right");
			$(".introjs-nextbutton").show();
		});
	});
}
























































































































function commonCodeForP1AndP2InAddTerm(selector, lineId, callBackFunction) {
	var parentSelector = (btn != "create") ? "#thirdList" : (createMethodCallCount == 1) ? "#firstList" : "#secondList"
	if ($(selector).text() != "NULL") {
		if (createMethodCallCount == 1 && btn == "create") {
			svgAnimatingLineTopToBottom("#animationDiv", selector, parentSelector + " #nextDiv1", "#svgId", lineId, "arrow", function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		} else {
			svgAnimatingLineBottomToTop("#animationDiv", selector, parentSelector + " #nextDiv1", "#svgId", lineId, "arrow", function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		}
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

function changeIdsAtBegin(val, selector, callBackFunction) {
	changeIds(val, $(selector+' .nodes'), 'node');
	changeIds(val, $(selector +' .data-nodes'), 'nodedata');
	changeIds(val, $(selector +" .coeff-div"), "coeffDiv");
	changeIds(val, $(selector +" .exp-div"), "expDiv");
	changeIds(val, $(selector +" .next-div"), "nextDiv");
	changeIds(val, $(selector + " .data-address"), "dataAddress");
	
	changeIds(val, $(selector + " .coeff-span"), "coeff");
	changeIds(val, $(selector + " .exp-span"), "exp");
	changeIds(val, $(selector + " .next-span"), "next");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function orderingNodes(count) {//Changing node position from temparay place to list position
	var p1CountVal = p1Count;
	var selector1 = (btn != "create" ? "#headVal1" : "#p1Val");
	var temporaryNode;
	var con
	
	var selector = (btn != "create") ? "#thirdList" : (createMethodCallCount == 1) ? "#firstList" : "#secondList"
	if ($(selector1).text().trim() == "NULL") {
		p1CountVal = p1Count - 1;
	}
	if (btn == "create") {
		con = parseInt($("#expVal").text().trim()) < parseInt($(selector + " #exp" + p1CountVal).text().trim());
	} else {
		con = parseInt($("#temparyPolyNodeForPloy #exp" + count).text().trim()) < parseInt($(selector + " #exp" + p1CountVal).text().trim());
	}
	
	if (count == 1 || con) {
		if (count == 1) {
			if (btn == "create") {
				$(selector).append('<div class="opacity00 col-xs-2 nodes hide" id="node' + (count) 
						+ '" style="top: 0px; width: auto;">' + $("#temparyPolyNode > #node" + (count)).html() + '</div>');
			} else {
				$(selector).append('<div class="opacity00 col-xs-2 nodes hide" id="node' + (count) 
						+ '" style="top: 0px; width: auto;">' + $("#temparyPolyNodeForPloy > #node" + (count)).html() + '</div>');
			}
		} else {
			if (btn == "create") {
				$(selector + " .nodes:last").after('<div class="opacity00 col-xs-2 nodes hide" id="node' + (count) 
						+ '" style="top: 0px; width: auto;">' + $("#temparyPolyNode > #node" + (count)).html() + '</div>');
			} else {
				$(selector + " .nodes:last").after('<div class="opacity00 col-xs-2 nodes hide" id="node' + (count) 
						+ '" style="top: 0px; width: auto;">' + $("#temparyPolyNodeForPloy > #node" + (count)).html() + '</div>');
			}
		}
		setTimeout(function() {
			$('.lines').remove();
			positioningNodes(selector);
		}, 2000);
	}  else {
		var con1, con2;
		if (btn == "create") {
			$(selector + " #node" + p1Count).before('<div class="opacity00 col-xs-2 nodes hide" id="node' + (count) 
					+ '" style="top: 0px; width: auto;">' + $("#temparyPolyNode > #node" + (count)).html() + '</div>');
			con1 = parseInt($(selector + " #exp" + p1Count).text().trim()) < parseInt($("#expVal").text());
		} else {
			$(selector + " #node" + p1Count).before('<div class="opacity00 col-xs-2 nodes hide" id="node' + (count) 
					+ '" style="top: 0px; width: auto;">' + $("#temparyPolyNodeForPloy > #node" + (count)).html() + '</div>');
			
			con2 = parseInt($(selector + " #exp" + p1Count).text().trim()) < parseInt($("#temparyPolyNodeForPloy #exp" + count).text());
		}
		
		var condition = (btn == "create") ?  con1 : con2;  
		if (condition) {
			movingNodes(count, selector, function() {
				setTimeout(function() {
				$(selector + "#node" + count).removeClass('hide');
				positioningNodes(selector);
			}, 1000);
			}); 
		}
	}
}

function positioningNodes(selector) {
	var selectorId;
	if (btn == "create") {
		var l2 = $(selector + " #node" + (nodeCount - 1)).removeClass("hide");
		var l1 = $("#temparyPolyNode #node" + (nodeCount - 1)).offset();
		var l2 = $(selector + " #node" + (nodeCount - 1)).offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		TweenLite.to("#temparyPolyNode > #node" + (nodeCount - 1), 0.5, {top : topLength, left : leftLength, onComplete: function() {
			$('#node' + (nodeCount - 1)).removeClass("hide").removeClass("opacity00");
			$(selector + " #node" + (nodeCount - 1)).html($("#temparyPolyNode > #node" + (nodeCount - 1)).html()).removeClass("opacity00");
			$("#temparyPolyNode > #node" + (nodeCount - 1)).css({"top": "0", "left" : "0"}).addClass("opacity00");
			introjs.refresh();
			changeIdsAtBegin(1, selector, function() {
				regenerateArrows(nodeCount - 1, selector);
				
			});
		}});
	} else {
		$(selector + " #node" + (nodeCount - 1)).removeClass("hide");
		var l1 = $("#temparyPolyNodeForPloy #node" + (nodeCount - 1)).offset();
		var l2 = $(selector + " #node" + (nodeCount - 1)).offset();
		var topLength = l2.top - l1.top;
		var leftLength = l2.left - l1.left;
		TweenLite.to("#temparyPolyNodeForPloy > #node" + (nodeCount - 1), 0.5, {top : topLength, left : leftLength, onComplete: function() {
			$(selector +'#node' + (nodeCount - 1)).removeClass("hide").removeClass("opacity00");
			$(selector + " #node" + (nodeCount - 1)).html($("#temparyPolyNodeForPloy > #node" + (nodeCount - 1)).html()).removeClass("opacity00");
			$("#temparyPolyNodeForPloy > #node" + (nodeCount - 1)).css({"top": "0", "left" : "0"}).addClass("opacity00");
			introjs.refresh();
			changeIdsAtBegin(1, selector, function() {
				regenerateArrows(nodeCount - 1, selector);
				
			});
		}});
	}
	
}

function movingNodes(val, selector, callBackFunction) {
	var nodeId = selector + " #node" + val;
	
	if (val <= ($(selector + ' .nodes').length)) {
		var l1Val = '120px';
		TweenMax.to($(selector +' .nodes').not(nodeId).eq(val - 1), 1, {left: l1Val, onComplete: function() {
			$.each($(selector +" .nodes").not(nodeId), function() {
				$(this).css("left", "0");
			});
		}});
		val++;
		movingNodes(val, selector, callBackFunction);
	} else {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}
}

function regenerateArrows(count, selector) {
	$(".lines").remove();
	if (btn != "create") {
		svgAnimatingLineRightToLeft("#animationDiv", "#head1Div", "#firstList #coeffDiv1",  "#svgId", "head1Line", "arrow");
		svgAnimatingLineRightToLeft("#animationDiv", "#head2Div", "#secondList #coeffDiv1",  "#svgId", "head2Line", "arrow");
		if ($("#p1Val").text().trim() != "NULL") {
			svgAnimatingLineTopToBottom("#animationDiv", "#p1Div", "#firstList #nextDiv" + t1Count,  "#svgId", "t1Line", "arrow");
		}
		if ($("#p2Val").text().trim() != "NULL") {
			svgAnimatingLineBottomToTop("#animationDiv", "#p2Div", "#secondList #nextDiv" + t2Count,  "#svgId", "t2Line", "arrow");
		}
		svgAnimatingLineBottomToTop("#animationDiv", "#headInOP", "#thirdList #nextDiv1",  "#svgId", "headOpLine", "arrow");
		
		for(i = 1; i < $("#thirdList .nodes").length; i++) {
			if (i == 4) {
				svgAnimatingLineLeftToRight("#animationDiv", "#thirdList #coeffDiv"+ i, "#thirdList #nextDiv"+ 
						(i + 1), "#svgId", "linee"+ i, "arrow");
			} else {
				svgAnimatingLineRightToLeft("#animationDiv", "#thirdList #nextDiv"+ i, "#thirdList #coeffDiv"+ 
						(i + 1), "#svgId", "linee"+ i, "arrow");
			}
		}
		
		for(i = 1; i< $("#secondList .nodes").length; i++) {
			svgAnimatingLineRightToLeft("#animationDiv", "#secondList #nextDiv"+ i, "#secondList #coeffDiv"+ 
					(i + 1), "#svgId", "lines"+ i, "arrow");
		}
		for(i = 1; i< $("#firstList .nodes").length; i++) {
			svgAnimatingLineRightToLeft("#animationDiv", "#firstList #nextDiv"+ i, "#firstList #coeffDiv"+ 
					(i + 1), "#svgId", "line"+ i, "arrow");
		}
		
	} else {
		if (createMethodCallCount == 1) {
			svgAnimatingLineTopToBottom("#animationDiv", "#headDiv", selector + " #coeffDiv1", "#svgId", "headLine", "arrow");
			if (count == 1 || parseInt($("#expVal").text()) < parseInt($(selector + " #exp" + p1Count).text().trim())) {
				svgAnimatingLineTopToBottom("#animationDiv", "#tempDiv", selector + " #coeffDiv" + (nodeCount - 1), "#svgId", "tempLine", "arrow");
			} else {
				svgAnimatingLineTopToBottom("#animationDiv", "#tempDiv", selector + " #coeffDiv1", "#svgId", "tempLine", "arrow");
			}
		} else {
			svgAnimatingLineBottomToTop("#animationDiv", "#headDiv", selector + " #coeffDiv1", "#svgId", "headLine", "arrow");
			if (count == 1 || parseInt($("#expVal").text()) < parseInt($(selector + " #exp" + p1Count).text().trim())) {
				svgAnimatingLineBottomToTop("#animationDiv", "#tempDiv", selector + " #coeffDiv" + (nodeCount - 1), "#svgId", "tempLine", "arrow");
			} else {
				svgAnimatingLineBottomToTop("#animationDiv", "#tempDiv", selector + " #coeffDiv1", "#svgId", "tempLine", "arrow");
			}
		}
		if ($("#firstList .nodes").length != 0 && $("#secondList .nodes").length == 0) {
			for(i = 1; i< $(selector + " .nodes").length; i++) {
				svgAnimatingLineRightToLeft("#animationDiv", selector + " #nextDiv"+ i, selector + " #coeffDiv"+ 
						(i + 1), "#svgId", "line"+ i, "arrow");
			}
		} else {
			svgAnimatingLineRightToLeft("#animationDiv", "#head1Div", "#firstList #coeffDiv1",  "#svgId", "head1Line", "arrow");
			
			for(i = 1; i< $(selector + " .nodes").length; i++) {
				svgAnimatingLineRightToLeft("#animationDiv", selector + " #nextDiv"+ i, selector + " #coeffDiv"+ 
						(i + 1), "#svgId", "line"+ i, "arrow");
			}
			for (i = 1; i < $("#firstList .nodes").length; i++) {
				svgAnimatingLineRightToLeft("#animationDiv", "#firstList #nextDiv"+ i, "#firstList #coeffDiv"+ 
						(i + 1), "#svgId", "lines"+ i, "arrow");
			}
		}
	}
	customIntroNxtStep("#polyOperationsPre", "retutnHead", "right");
}

function trueOrFalseCondition(selector1, selector2, condition, value1, value2, callBackFunction) {
	travel(selector1, $(".introjs-tooltiptext ul li:last-child div"), function() {
		flip(selector2, condition ? value1 : value2, function() {
			var text = "";
			if (condition) {
				text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
			} else {
				text = "Since it evaluates to <r>false</r>."
			}
			$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
			typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	});
}

function readCoeffAndExpValuesFromConsole(selector) { //read Coeff and Exp from the keybord;
	$(selector).focus();
	$(selector).attr({placeholder: 'Enter 2 values'});
	$(selector).addClass("blinking-orange").removeAttr('disabled').focus();;
	$(selector).on("keydown", function(e) {
		if ((arr.length == 2 || arr.length == 0) && e.keyCode == 32 ) {
			e.preventDefault();
		}
		if (arr.length == 1) {
			var test = false;
			test = $(selector).val().indexOf(' ') >= 0;
			if (e.keyCode == 32 && test) {
				e.preventDefault();
			}
		}
	});
	$(selector).on("keyup", function(e) {
		$('.length-error-text,.size-error').remove();
		if ($(this).val() == "") {
			$(".introjs-nextbutton").hide();
			$(".size-error").empty();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
													"Please enter 2 values each separated by a space.</span>");
		} 
		var givenText = $(this).val();
		var splittedText = givenText.split(" ");
		arr = [];
		$.each(splittedText, function(idx, val) {
			if (val != '') {
				arr.push(val);
			}
		});
		if (arr.length == 1 && e.keyCode == 8 && $('.backspace-error').length == 0 ) {
			$(".size-error").empty();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red backspace-error length-error-text'>"
					+"</br>Enter two numbers separated by space.</span>");
		}
		var a0 = $.isNumeric(arr[0]);		
		var a1 = $.isNumeric(arr[1]);
		
		if (a0 && a1) {
			if ((arr.length == 2) && (arr[0].length <= 3 && arr[1].length <= 3)) {
				$(".introjs-nextbutton").show();
				
			} else {
				$(".introjs-nextbutton").hide();
				$(".size-error").empty();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red size-error length-error-text'>"
						+"</br>size should be 1 to 3(inclusive)</span>");
			}
		} 
	});
}

function readYesOrNoFromConsole(selector) { //Enter Yes or No Function
	$(selector).focus();
	$(selector).attr({placeholder: 'Enter (y/n)'});
	$(selector).addClass("blinking-orange").removeAttr('disabled').focus();;
	$(selector).on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e) {
		if (nodeCount < 5) {
			if (($(this).val() != "") && (($(this).val().toLowerCase() == "y") || ($(this).val().toLowerCase() == "n"))) {
				ch = $(this).val().toLowerCase();
				$(".introjs-nextbutton").show();
			} else {
				$('.length-error-text').remove();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter (y/n (or) Y/N).</span>");
				$(".introjs-nextbutton").hide();
			}
		} else {
			if (($(this).val() != "") && ($(this).val().toLowerCase() == "n")) {
				ch = $(this).val().toLowerCase();
				$(".introjs-nextbutton").show();
			} else {
				$('.length-error-text').remove();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter (n (or) N). because "
							+" we are restricted to allow list size to (<y>4</y> nodes) only</span>");
				$(".introjs-nextbutton").hide();
			}
		} 
		introjs.refresh();
	});
}

function tooltipBooletsAppendAndTypeText(selector1, selector2, text, appendList, callBackFunction) {
	$(selector2).addClass("background-color-yellow");
	arrow(selector1, selector2, function() {
		$(".introjs-tooltip").removeClass("hide");
		if (appendList == "ul") {
			$('.introjs-tooltiptext').append('<ul><li></li></ul>');
		} else {
			$('.introjs-tooltiptext ul').append('<li></li>');
		}
		typing(".introjs-tooltiptext ul li:last", text, function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

/*function appendDuplicateNextBtnUsingOnClickMethod(functionName, callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='"+ functionName +"'>Next &#8594;</a>");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}*/

function appendDuplicateNextBtnUsingClickFunction(functionName, flag, callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (flag) {
			functionName;
		} else {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}

function appendButtons() {	//append polynomial operation (buttons)
	for (var i = 0; i < buttonNames.length; i++) {
		var buttonId = buttonNames[i].charAt(0).toLowerCase() + buttonNames[i].substring(1, buttonNames[i].length);
		var appendBtnsDiv = '<div class="inline-css"><span class="btn btn-success buttons btn-xs margin-7 disabled" id="'
			+ buttonId.split(" ").join("").toLowerCase() + '">' + buttonNames[i] + ' </span></div>'
		$('#buttonsDiv').append(appendBtnsDiv);
	}
}

function declareNodesWhenFunctionCall(parenetId, id1, id2, nodeName, nodeNameText, callBackFunction) {	//temparary node declaration
	var appendTempararyNodeDec = '<div class="col-xs-1  extraNode opacity00 padding00" id=' + id1 + '>'
	+ '<div class="col-xs-12 box padding00"><span id=' + id2 + ' class="extrNodeVal ct-brown-color ct-fonts inline-style"></span>'
	+ '</div><div class="text-center col-xs-12 padding00 ct-green-color" id=' + nodeName + '>' + nodeNameText + '</div></div> ' 
	$(parenetId).append(appendTempararyNodeDec);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function getRandomInt(min, max) { //generate random address for node creation
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function createDynamicNodes(selector, val) { //dynamically create an empty new node for polynomial
	var randomAddress = getRandomInt(1000, 5000);
	fixedWidth();
	var t = $('#posVal').text();
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + val + '" style="top: 0px; width: auto;"><div class="col-xs-12 padding00">'
			+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">coeff</div>'
			+ '<div class="col-xs-4 ct-blue-color ct-fonts padding00 text-center">exp</div>'
			+ '<div class="col-xs-4 ct-green-color ct-fonts text-center padding00">next</div></div>'
			+ '<div id="nodedata' + val + '" class="data-nodes"><div id="coeffDiv' + val + '" class="div-border left-radius col-xs-4 coeff-div">'
			+ ' <span id="coeff' + val + '" class="position coeff-span ct-green-color ct-fonts inline-style opacity00">99</span></div>'
			+ '<div id="expDiv' + val + '" class="div-border no-radius col-xs-4 exp-div position">'
			+ ' <span id="exp' + val + '" class="exp-span ct-blue-color ct-fonts opacity00 position" style="top: 0px; left: 0px;">88</span></div>'
			+ '<div id="nextDiv' + val + '" class="position div-border right-radius col-xs-6 next-div">'
			+ ' <span id="next' + val + '" class="position next-span ct-green-color ct-fonts inline-style opacity00">8888</span></div></div>'
			+ ' <div class="col-xs-12 padding00"><div class="col-xs-4 col-xs-offset-4 padding00 text-center"><span id="dataAddress' + val + '"'
			+ ' class="data-address padding00 ct-brown-color ct-fonts">'+ randomAddress + '</span></div></div></div>';
	$(selector).append(x);
}

function fixedWidth() { //restricted to allow only 4 nodes in polynomial list 
	/*if ($('.nodes').length == 4) {
		//var x = (($('#node4').offset().left + $('#node4').outerWidth()) - $("#dynamicNodes").offset().left) + $('#node1').width() / 2.5;
		var x = (($('#node4').offset().left + $('#node4').outerWidth()) - $("#dynamicNodes").offset().left);
		$('#dynamicNodes').css({'width' : x + 'px'});
	}*/
}


function getURLParameter(sParam) { //select language for code (c or java)
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function svgAppend(selector, svgId) { // append svg div
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) { //append marker(arrow) for svg line  
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

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) { //Draw a svg line
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

//Draw a svg line for Right to Left
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

//Draw a svg line for Left to Right
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

//Draw a svg line for Bottom to Top
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

//Draw a svg line for Top to Bottom
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

function arrow(fromId, toId, callBackFunction) { //arrow is used to show the current position of line in line 
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

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) { //value move form one place to another
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' class='ct-brown-color ct-fonts' style='position: relative; z-index: 9999999;'>" 
				+ $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	$(selector2).removeClass('opacity00')
	if (!flag) {
		$(selector1).addClass('z-index1000000').parent().effect( "highlight",{color: 'blue'}, 500);
	} else {
		$(selector2).text($(selector1).text());
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

function flipEffectWithTweenMax(selector, val, callBackFunction) { //Rotate the value from 0 - 90 to deg
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function zoomInEffect(selector1, callBackFunction) { //highlight and zoom the value
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn").removeAttr('style');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transferEffect(selector1, selector2, callBackFunction) { //move the border form selector1  to selector2
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

function toEffectWithTweenMax(selector1, selector2, callBackFunction) { //value move from selector2 to selector1
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

function setTimeToIntroGoNextStep() { //set time to intro do next Step
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function introNextSteps(stepName, animatedStep, position) { //Dynamic intro Steps
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

function customIntroNxtStep(stepName, animatedStep, position) { //Intro dynamic step and set time to go the next Step
	introNextSteps(stepName, animatedStep, position);
	setTimeToIntroGoNextStep();
}


function appendNextBtn(value) { //append duplicate button using onClick() function
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton" onclick="' + value + '()">Next &#8594;</a>');
}

function appendNextBtnAndBtnClickInternal(callBackFunction) { //Append duplicate button using click() function and remove duplicate btn
	$('.introjs-tooltipbuttons').append('<a class="introjs-button introjs-duplicate-nextbutton">Next &#8594;</a>');
	$('.introjs-duplicate-nextbutton').click(function() {
		$(this).remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function typing(typingId, typingContent, typingCallbackFunction) { //typing function
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

function fadeInBounceEffectWithTimelineMax(selector1, selector2, pos, callBackFunction) { //Bounce the value and
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
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left: -150 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else if (pos == "right") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, left: 550 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else if (pos == "bottom") {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: 50 , delay : 1.1, opacity:0 , onComplete: function() {
				bounceCallBack(selector1, selector2, callBackFunction)
			}});
		} else {
			TweenLite.to($('#dummy'), 1.5, { ease: Sine.easeOut, top: -650 , delay : 1.1, opacity:0 , onComplete: function() {
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

function travel(fromSelector, toSelector, callBackFunction) {
	$(fromSelector).effect( "highlight",{color: 'blue'}, 500);
	var l = $(fromSelector).offset();
	$(toSelector).offset({
		top : l.top,
		left : l.left
	});
	TweenMax.to(toSelector, 1, { top : 0, left : 0, onComplete:function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}



