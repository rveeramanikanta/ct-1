
var introcode;
var typingSpeed = 10;
var i = 0;
var printCount = 1;
var flag = true;

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

function cCode() {
$('#sllProgram').append('#include &lt;stdio.h&gt;\n'
		+ '#include &lt;stdlib.h&gt;\n'
		+ '<span id="structType"><span class="ct-code-b-brown">struct</span> listNode {\n'
		+ '\t<span class="ct-code-b-green">int</span> data;\n'
		+ '\t<span class="ct-code-b-brown">struct</span> listNode *next;\n'
		+ '};</span>\n'
		+ '<span id="typeDef"><span class="ct-code-b-brown">typedef struct</span> listNode *node;</span>\n\n'
		+ '<div id="createNode"><span class="ct-code-b-blue">node</span> createNode() {\n'
		+ '\t<span id="creTemp"><span class="ct-code-b-blue">node</span> temp;</span>\n'
		+ '\t<span id="credataInfoNode">temp = (<span class="ct-code-b-blue">node</span>)'
		+ ' <span id="mallocMemoryAllocation">malloc(sizeof(struct listNode))</span>;</span>\n'
		+ '\t<span id="tempNext">temp -> next = NULL;</span>\n'
		+ '\t<span id="returnTemp">return temp;</span>\n'
		+ '}</div>\n<div id="mainMethod"><span class="ct-code-b-green">void</span> main() {\n'
		+ '\t<span id="xValDec"><span class="ct-code-b-green">int</span> x;</span>\n'
		+ '\t<span id="creFirst"><span class="ct-code-b-blue">node</span> first = NULL;</span>\n'
		+ '\t<span id="callCreateFun1">first = createNode();</span>\n'
		+ '\t<span id="printf1">printf("Enter element of first node : ");</span>\n'
		+ '\t<span id="scanf1">scanf("%d", &x);</span>\n'
		+ '\t<span id="firstData1">first -> data = x;</span>\n'
		+ '\t<span id="callCreateFun2">first -> next = createNode();</span>\n'
		+ '\t<span id="printf2">printf("Enter element of second node : ");</span>\n'
		+ '\t<span id="scanf2">scanf("%d", &x);</span>\n'
		+ '\t<span id="firstData2">first -> next -> data = x;</span>\n'
		+ '\t<span id="printf3">printf("<span id="listIs">The list is :</span> '
		+ '<span id="Percen1">%d</span> <span id="pLin1">--></span> '
		+ '<span id="Percen2">%d</span><span id="pLin2">--></span> <span id="Null">NULL</span>\\n", '
		+ '<span id="fData1">first -> data</span>, <span id="fData2">first -> next -> data</span>);</span>\n'
		+ '}</div>\n');
}

function cppCode() {
	$('#sllProgram').append('#include &lt;iostream&gt;\n'
			+ 'using namsespace std;\n\n'
			+ '<span id="structType"><span class="ct-code-b-brown">class</span> <span class="ct-code-b-blue">listNode</span> {\n'
			+ '\tpublic: <span class="ct-code-b-green">int</span> data;\n'
			+ '\t\t\t\t\tlistNode *next;\n'
			+ '};</span>\n\n'
			
			+ '<div id="createNode"><span class="ct-code-b-blue">listNode*</span> createNode() {\n'
			+ '\t<span id="creTemp"><span class="ct-code-b-blue">listNode*</span> temp;</span>\n'
			+ '\t<span id="credataInfoNode">temp = <span id="mallocMemoryAllocation"><span class="ct-code-b-brown">new</span> listNode;</span></span>\n'
			+ '\t<span id="tempNext">temp -> next = NULL;</span>\n'
			+ '\t<span id="returnTemp">return temp;</span>\n'
			+ '}</div>\n<div id="mainMethod"><span class="ct-code-b-green">int</span> main() {\n'
			+ '\t<span id="xValDec"><span class="ct-code-b-green">int</span> x;</span>\n'
			+ '\t<span id="creFirst"><span class="ct-code-b-blue">listNode*</span> first = NULL;</span>\n'
			+ '\t<span id="callCreateFun1">first = createNode();</span>\n'
			+ '\t<span id="printf1">cout << "Enter element of first node : ";</span>\n'
			+ '\t<span id="scanf1">cin >> x;</span>\n'
			+ '\t<span id="firstData1">first -> data = x;</span>\n'
			+ '\t<span id="callCreateFun2">first -> next = createNode();</span>\n'
			+ '\t<span id="printf2">cout << "Enter element of second node : ";</span>\n'
			+ '\t<span id="scanf2">cin >> x;</span>\n'
			+ '\t<span id="firstData2">first -> next -> data = x;</span>\n'
			+ '\t<span id="printf3">cout << " <span id="listIs">The list is :</span>" '
			+ '<span id="fData1">first -> data</span> << " <span id="pLin1">--></span> " '
			+ '<span id="fData2">first -> next -> data</span> << " <span id="pLin2">--></span>'
			+ ' <span id="Null">NULL</span>\\n";</span>\n'
			+ '}</div>\n');
}

function introFunction() {
	
	lang = getURLParameter("lang");
	if (lang == "c") {
		$('.creamPreTab').css('padding', '12');
		cCode()
	} else if (lang == "cpp") {
		$('.creamPreTab').css('padding', '3');
		cppCode();
	}
	
	appendNode();
	
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
						element :'#sllProgram',
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
				case "sllProgram" :
					$("#sslAnimationDiv").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is a sample program to <span class="ct-code-b-yellow">create</span> a '
							+ 'node and <span class="ct-code-b-yellow">add</span> '
							+ '<span class="ct-code-b-yellow">data</span> to that '
							+ '<span class="ct-code-b-yellow">node</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#structType", "structType", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "structType" :
					$('.introjs-tooltip').removeClass('hide');
					if (lang == 'c') {
						text = 'This is the declaration of a new '
							+ '<span class="ct-code-b-yellow">struct</span> type named '
							+ '<span class="ct-code-b-yellow">listNode</span>.<br/><br/>'
							+' It contains two members : '
							+ '<ul><li><span class="ct-code-b-yellow">data</span> which is of type int.</li>'
							+ '<li><span class="ct-code-b-yellow">*next</span> which is a pointer to the next node.</li></ul>';
							introNextSteps("#typeDef", "typeDef", 'bottom');
					} else if (lang == "cpp") {
						text = 'This is the declaration of a '
							+ '<span class="ct-code-b-yellow">class</span> type named '
							+ '<span class="ct-code-b-yellow">listNode</span>.<br/><br/>'
							+' It contains two members : '
							+ '<ul><li><span class="ct-code-b-yellow">data</span> which is of type int.</li>'
							+ '<li><span class="ct-code-b-yellow">*next</span> which is a pointer to the next node.</li></ul>';
							introNextSteps("#createNode", "createNode", 'bottom');
					}
					
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				break;
				case "typeDef" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">typedef</span> creates a '
							+ '<span class="ct-code-b-yellow">node</span> as a '
							+ ' new type <span class="ct-code-b-yellow">pointer</span> '
							+ 'to <span class="ct-code-b-yellow">struct listNode</span>. '
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#createNode", "createNode", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "createNode" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "createNode" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">createNode()</span> function is used'
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#mainMethod", "mainMethod", 'bottom');
								$('.introjs-nextbutton').show();
							});
						break;
						case "functionCall" :
							introNextSteps("#creTemp", "creTemp", 'bottom');
							setTimeToIntroGoNextStep();
						break;
					}
				break;
				case "mainMethod" :
					introNextSteps("#xValDec", "xValDec", 'bottom');
					setTimeToIntroGoNextStep();
				break;
				case "xValDec" :
					introNextSteps("#animationDiv", "xValDec", 'bottom');
					setTimeToIntroGoNextStep();
				break;
				case "creFirst" :
					$('.introjs-tooltip').removeClass("hide");
					if (lang == 'c') {
						text = 'Here, we are declaring a variable <span class="ct-code-b-yellow">first</span> '
							+ ' of type <span class="ct-code-b-yellow">node</span> and '
							+ 'initializing it to <span class="ct-code-b-yellow">NULL</span>.';
					} else if (lang == 'cpp') {
						text = 'Here, we are declaring an object <span class="ct-code-b-yellow">first</span> '
							+ ' of type class <span class="ct-code-b-yellow">listNode</span> and '
							+ 'initializing it to <span class="ct-code-b-yellow">NULL</span>.';
					}
					
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "firstNodeDec", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "callCreateFun" + printCount :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "callCreateFun1" :
							$('.introjs-tooltip').removeClass("hide");
							if (printCount == 1) {
								if (lang == 'c') {
									text = 'The <span class="ct-code-b-yellow">first</span> node is initialize with the'
										+ ' address returned by the <span class="ct-code-b-yellow">createNode()</span> method.';
								} else if (lang == 'cpp') {
									text = 'The <span class="ct-code-b-yellow">first</span> object is initialize with the'
										+ ' address returned by the <span class="ct-code-b-yellow">createNode()</span> method.';
								}
								
							} else {
								if (lang == 'c') {
									text = 'This statement creates another <span class="ct-code-b-yellow">node</span> and stores'
										+' the address into the <span class="ct-code-b-yellow">next</span> field of '
										+'<span class="ct-code-b-yellow">first</span> node.';
								} else if (lang == 'cpp') {
									text = 'This statement creates another <span class="ct-code-b-yellow">object</span> and stores'
										+' the address into the <span class="ct-code-b-yellow">next</span> field of '
										+'<span class="ct-code-b-yellow">first</span> object.';
								}
							}
							typing('.introjs-tooltiptext' , text, function() {
								introNextSteps("#createNode", "functionCall", 'bottom');
								$('.introjs-nextbutton').show();
							});
						break;
						case "returnTempVal":
							if (printCount == 1) {
								$('.introjs-tooltip').removeClass("hide");
								if (lang == 'c') {
									text = 'The <span class="ct-code-b-yellow">crateNode()</span> method call '
										+ 'returns the value stored in <span class="ct-code-b-yellow">temp</span>('
										+ '<span class="ct-code-b-yellow">'+$("#infoAddress" + printCount).text() +'</span>) and '
										+ 'stores it in the variable <span class="ct-code-b-yellow">first</span>.';
								} else if (lang == 'cpp') {
									text = 'The <span class="ct-code-b-yellow">crateNode()</span> method call '
										+ 'returns the value stored in an object <span class="ct-code-b-yellow">temp</span>('
										+ '<span class="ct-code-b-yellow">'+$("#infoAddress" + printCount).text() +'</span>) and '
										+ 'stores it in an object <span class="ct-code-b-yellow">first</span>.';
								}
								typing('.introjs-tooltiptext' , text, function() {
									introNextSteps("#animationDiv", "tempToFirst", 'bottom');
									$('.introjs-nextbutton').show();
								});
							} else {
								$('.introjs-tooltip').removeClass("hide");
								if (lang == 'c') {
									text = 'The <span class="ct-code-b-yellow">crateNode()</span> method call '
										+ 'returns the value stored in <span class="ct-code-b-yellow">temp</span>('
										+ '<span class="ct-code-b-yellow">'+$("#infoAddress" + printCount).text() +'</span>) and '
										+ 'stores it in the variable <span class="ct-code-b-yellow">first</span>.';
								} else if (lang == 'cpp') {
									text = 'The <span class="ct-code-b-yellow">crateNode()</span> method call '
										+ 'returns the value stored in an object <span class="ct-code-b-yellow">temp</span>('
										+ '<span class="ct-code-b-yellow">'+$("#infoAddress" + printCount).text() +'</span>) and '
										+ 'stores it in an object <span class="ct-code-b-yellow">first</span>.';
								}
								typing('.introjs-tooltiptext' , text, function() {
								introNextSteps("#animationDiv", "tempToNext", 'bottom');
									$('.introjs-nextbutton').show();
								});
							}
						break;
					}
				break;
				case "printf" + printCount :
					introNextSteps("#consoleId", "printXVal", 'bottom');
					setTimeToIntroGoNextStep();
				break;  
				case "consoleId" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printXVal" :
							var text;
							if (printCount == 1) {
								text = "Enter element of first node : ";
							} else if(printCount == 2) {
								text = "Enter element of second node : ";
							}
							if (printCount == 3) {
								introNextSteps("#restartBtn", "restartBtn", 'bottom');
								$("#consoleBodyDiv").append("<div class='position' id='text"+ printCount +"'>"
										+ "<span id='listText' class='opacity00'>The list is : </span> "
										+ "<span id='firstData' class='opacity00'>"+ $("#xValue1").val() +"</span>"
										+ "<span id='lines1' class='opacity00'> --> </span>"
										+ "<span id='firstData3' class='opacity00'>"+ $("#xValue2").val() +"</span>"
										+ "<span id='lines2' class='opacity00'> --> </span>"
										+ "<span id='nullText' class='opacity00'> NULL </span>"
										+ "</div>");
								
								$("#printf3").addClass("z-index1000000");
								$("#animationDiv").addClass("z-index1000000");
								transferEffect("#listIs", "#listText", function() {
									setTimeout(function() {
										cPrinting();
									},200);
								}); 
							} else {
								introNextSteps("#scanf"+ printCount, "enterXVal", 'bottom');
								$("#consoleBodyDiv").append("<div class='position' id='text"+ printCount +"'>"+ text 
										+ "<input id='xValue"+ printCount +"' class='position opacity00' size = '3' contenteditable='true' spellcheck='false' maxlength='2'>"
										+ "</div>");	
								setTimeToIntroGoNextStep();
							}
						break;
						case "enterXVal" :
							$("#xValue" + printCount).css("background", "indianred").removeClass("opacity00");
							$("#text").click(function() {
								$("#xValue" + printCount).focus();
							});
							$('.introjs-tooltip').removeClass("hide");
							text = 'Enter an integer value.';
							typing('.introjs-tooltiptext' , text, function() {
								introNextSteps("#animationDiv", "xValueAnimation", 'bottom');
								$("#xValue" +printCount).focus();
								changeValue();
							});
						break;
					}
				break;
				case "firstData" + printCount:
					var val = $("#xValue" + printCount).val();
					$("#xVal").text(val).removeClass('opacity00');
					$('.introjs-tooltip').removeClass("hide");
					text = 'This statement initializes the value stored in <span class="ct-code-b-yellow">x</span>'
						+'(<span class="ct-code-b-yellow">'+ val +'</span>)' 
						+ '</span> in to the <span class="ct-code-b-yellow">data</span> field of '
						+ '<span class="ct-code-b-yellow">first</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "storeXVal", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "scanf" + printCount :
					introNextSteps("#consoleId", "enterXVal", 'bottom');
					setTimeToIntroGoNextStep();
				break;
				case "creTemp":
					$('.introjs-tooltip').removeClass("hide");
					if (lang == 'c') {
						text = 'The <span class="ct-code-b-yellow">createNode()</span> function internally uses a variable '
							+ '<span class="ct-code-b-yellow">temp</span> of type '
							+ '<span class="ct-code-b-yellow">node</span>.';
					} else if (lang == 'cpp') {
						text = 'The <span class="ct-code-b-yellow">createNode()</span> function internally uses an object '
							+ '<span class="ct-code-b-yellow">temp</span> of type class '
							+ '<span class="ct-code-b-yellow">listNode</span> .';
					}
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "TempNodeDec", 'bottom');
						if (flag) {
							$('.introjs-nextbutton').show();
						} else {
							setTimeToIntroGoNextStep();
						}
					});
				break;
				case "credataInfoNode" :
					$('.introjs-tooltip').removeClass("hide");
					if (lang == 'c') {
						text = '<ul><li class = "opacity00" id="li1">The <span class="ct-code-b-yellow">sizeof(struct listNode)</span> returns the size '
							+ ' occupied by a list node which contains <span class="ct-code-b-yellow">two</span>'
							+ ' fileds <span class="ct-code-b-yellow">data</span> and <span class="ct-code-b-yellow">next</span>.</li> '
							+ ' <li class = "opacity00" id="li2">The <span class="ct-code-b-yellow">malloc()</span> function allocates memory '
							+ ' <span class="ct-code-b-yellow">dynamically</span> '
							+ ' to the size that is occuiped by the <span class="ct-code-b-yellow">listNode</span>'
							+ ' return by the above statement.</li>'
							+ ' <li class = "opacity00" id="li3">The address return by the <span class="ct-code-b-yellow">malloc()</span> is '
							+ ' stored in <span class="ct-code-b-yellow">temp</span>.</li></ul>'
					} else if (lang == 'cpp') {
						text = '<ul> <li class = "opacity00" id="li2">The <span class="ct-code-b-yellow">new</span> allocates memory '
							+ ' <span class="ct-code-b-yellow">dynamically</span> '
							+ ' to the size that is occuiped by the <span class="ct-code-b-yellow">listNode</span>'
							+ ' return by the above statement.</li>'
							+ ' <li class = "opacity00" id="li3">The address return by the <span class="ct-code-b-yellow">new</span> is '
							+ ' stored in an object <span class="ct-code-b-yellow">temp</span>.</li></ul>'
					}
					$(".introjs-tooltiptext").append(text);
					TweenMax.to('#li1', 1, {opacity: 1, onComplete: function() {
						TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
								introNextSteps("#animationDiv", "node1", 'bottom');
								$('.introjs-nextbutton').show();
							}});
						}});
					}});
				break;
				case "animationDiv" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "xValDec" :
							transferEffect('#xValDec', '#declareXVal', function() {
								introNextSteps("#creFirst", "creFirst", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						case "firstNodeDec" :
							transferEffect('#creFirst', '#firstNode', function() {
								introNextSteps("#callCreateFun1", "callCreateFun1", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						case "TempNodeDec" :
							transferEffect('#creTemp', '#temp'+ printCount, function() {
								introNextSteps("#credataInfoNode", "credataInfoNode", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						case "node1":
							$('.introjs-tooltip').removeClass("hide");
							if (lang == 'c') {
								text = 'Let us assume <span class="ct-code-b-yellow">malloc()</span> allocates a memory '
									+ 'to its members <span class="ct-code-b-yellow">data</span>'
									+ ' and <span class="ct-code-b-yellow">next</span> at an address <span class="ct-code-b-yellow">'
									+ $("#infoAddress" + printCount).text() +'</span>.';
							} else if (lang == 'cpp') {
								text = 'Let us assume <span class="ct-code-b-yellow">new</span> allocates a memory '
									+ 'to its members <span class="ct-code-b-yellow">data</span>'
									+ ' and <span class="ct-code-b-yellow">next</span> at an address <span class="ct-code-b-yellow">'
									+ $("#infoAddress" + printCount).text() +'</span>.';
							}
							typing('.introjs-tooltiptext' , text, function() {
								$('.introjs-tooltiptext').append("<br/><div class='introjs-tooltipbuttons'>"
										+"<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a></div>");
								$(".introjs-duplicate-nextbutton").click(function() {
									$(".introjs-duplicate-nextbutton").remove();
									transferEffect('#mallocMemoryAllocation', '#node'+printCount, function() {
										$('.introjs-tooltiptext').append("<br/><div class='introjs-tooltipbuttons'>"
												+"<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a></div>");
										$(".introjs-duplicate-nextbutton").click(function() {
											$(".introjs-duplicate-nextbutton").remove();
											if (lang == 'c') {
												text = 'Now, The <span class="ct-code-b-yellow">address</span> '
													+'(i.e. <span class="ct-code-b-yellow">'+ $("#infoAddress" + printCount).text() +')</span>'
													+'of the memory allocated '
													+ 'by the <span class="ct-code-b-yellow">malloc()</span> method is '
													+ 'stored in <span class="ct-code-b-yellow">temp</span>.';
											} else if (lang == 'cpp') {
												text = 'Now, The <span class="ct-code-b-yellow">address</span> '
													+'(i.e. <span class="ct-code-b-yellow">'+ $("#infoAddress" + printCount).text() +')</span>'
													+'of the memory allocated '
													+ 'by the <span class="ct-code-b-yellow">new</span> method is '
													+ 'stored in <span class="ct-code-b-yellow">temp</span>.';
											}
											
											typing('.introjs-tooltiptext' , text, function() {
												$('.introjs-tooltiptext').append("<br/><div class='introjs-tooltipbuttons'>"
														+"<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a></div>");
												$(".introjs-duplicate-nextbutton").click(function() {
													$(".introjs-duplicate-nextbutton").remove();
													$("#tempDiv" + printCount).text($("#infoAddress" + printCount).text());
													fromEffectWithTweenMax("#infoAddress"+printCount, "#tempDiv"+printCount, false, function() {
														svgAppend("#animationDiv", "svgId");
														svgMarkerAppend("#svgId", "arrow");
														svgAnimatingLineSelector1TopSideToSelector2BottomSide("#animationDiv", "#temp"+ printCount, "#dataDiv"+ printCount, "#svgId", "line"+ printCount, "arrow", function() {
															introNextSteps("#tempNext", "tempNext", 'bottom');
															$('.introjs-nextbutton').show();
														});
													});
												});
											});
										});
									});									
								});
							});
						break;
						case "tempNextNull" :
							zoomInEffect("#next"+printCount, function() {
								introNextSteps("#returnTemp", "returnTemp", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						case "tempToNext" :
							if (printCount == 1) {
								fadeInFromEffectWithTimelineMax('#tempDiv'+printCount, '#next' + (printCount - 1),  true, function() {
									svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", '#node' + (printCount - 1), "#node"+ printCount+"data", "#svgId", "line1"+printCount, "arrow", function() {
										$("#line"+ printCount+", #temp"+ printCount).css("opacity", '0');
										introNextSteps("#printf"+printCount, "enterXVal", 'bottom');
										setTimeToIntroGoNextStep();
									});
								});
							} else {
								fadeInBounceEffectWithTimelineMax('#tempDiv'+printCount, '#next' + (printCount - 1),  false, function() {
									svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", '#node' + (printCount - 1), "#node"+ printCount+"data", "#svgId", "line1"+printCount, "arrow", function() {
										$("#line"+ printCount+", #temp"+ printCount).css("opacity", '0');
										introNextSteps("#printf"+printCount, "enterXVal", 'bottom');
										setTimeToIntroGoNextStep();
									});
								});
							}
							
						break;
						case "tempToFirst" :
							fadeInFromEffectWithTimelineMax('#tempDiv'+printCount, '#firstDiv', true, function() {
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node"+ printCount+"data", "#svgId", "line1"+printCount, "arrow", function() {
									$("#line"+ printCount+", #temp"+ printCount).css("opacity", '0');
									introNextSteps("#printf"+printCount, "enterXVal", 'bottom');
									setTimeToIntroGoNextStep();
								});
							});
						break;
						case "xValueAnimation" :
							$("#xVal").removeClass("opacity00");
							if (printCount == 1) {
								fadeInFromEffectWithTimelineMax('#xValue'+printCount, '#xVal', false,  function() {
									introNextSteps("#firstData" + printCount, "data", 'bottom');
									setTimeToIntroGoNextStep();
								});
							} else {
								fadeInBounceEffectWithTimelineMax('#xValue'+printCount, '#xVal', true,  function() {
									introNextSteps("#firstData" + printCount, "data", 'bottom');
									setTimeToIntroGoNextStep();
								});
							}
							$("#xValue" + printCount).attr("disabled", " disabled").css("background", "black");
							
						break;
						case "storeXVal":
							var val = $("#xValue" + printCount).val();
							$("#xVal").text(val).removeClass("opacity00");
							$("#info" + printCount).text(val);
							$("#first").effect("highlight",{color: 'blue'}, 500);
							if(printCount == 1) {
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node"+ printCount+"data", "#svgId", "line2"+printCount, "arrow", function() {
									$("#info" + printCount).removeClass("opacity00");
									fadeInFromEffectWithTimelineMax('#xVal', "#info" + printCount, true, function() {
										$("#line2" + printCount).remove();
										introNextSteps("#callCreateFun2", "callCreateFun1", 'bottom');
										$("#xValue" + printCount).attr("disabled", " disabled").css("background", "black");
										printCount++;
										setTimeToIntroGoNextStep();
									});
								});
							} else {
								svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node"+ (printCount - 1)+"data", "#svgId", "line2"+printCount, "arrow", function() {
									$("#line2" + printCount).remove();	
									$("#nextDiv1").effect("highlight",{color: 'blue'}, 500);
									svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#node"+ (printCount - 1)+"data", "#node"+ printCount+"data", "#svgId", "line2"+printCount, "arrow", function() {
										$("#line2" + printCount).remove();
										$("#info" + printCount).removeClass("opacity00");
										fadeInFromEffectWithTimelineMax('#xVal', "#info" + printCount, true, function() {
											introNextSteps("#printf"+ (printCount + 1), "printOutput", 'bottom');
											$("#xValue" + printCount).attr("disabled", " disabled")
											printCount++;
											setTimeToIntroGoNextStep();
										});
									});
								});
							}
						break;
					}
				break;
				case "returnTemp" :
					$('.introjs-tooltip').removeClass("hide");
					text = 'The <span class="ct-code-b-yellow">return</span> statement returns the'
							+' <span class="ct-code-b-yellow">address</span> (i.e. <span class="ct-code-b-yellow">'
							+ $("#infoAddress" + printCount).text() +'</span>)'
							+' stored in <span class="ct-code-b-yellow">temp</span>.';
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#callCreateFun"+ printCount, "returnTempVal", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "tempNext" :
					$('.introjs-tooltip').removeClass("hide");
					if (lang == 'c') {
						text = 'Since, the <span class="ct-code-b-yellow">next</span> member of the '
							+ '<span class="ct-code-b-yellow">temp</span> node is initialize to '
							+ '<span class="ct-code-b-yellow">NULL</span>.'
					} else if (lang == 'cpp') {
						text = 'Since, the <span class="ct-code-b-yellow">next</span> member of the '
							+ '<span class="ct-code-b-yellow">temp</span> object is initialize to '
							+ '<span class="ct-code-b-yellow">NULL</span>.'
					}
					typing('.introjs-tooltiptext' , text, function() {
						introNextSteps("#animationDiv", "tempNextNull", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				case "restartBtn":
					$("#restartBtn").removeClass('opacity00');
					$("#printf3").removeClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
					text = 'Click to restart.';
					typing('.introjs-tooltiptext', text, function() {
						$('#restartBtn').click(function() {
							location.reload();
						});
					});
				break;
			}
		});
	});
	introcode.start();
	$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
	$('.introjs-tooltip').removeClass('hide');
	text = 'In this <span class="ct-code-b-yellow">live demo</span>'
		+ ' we will learn how to create and add a <span class="ct-code-b-yellow">node</span> in a '
		+ ' <span class="ct-code-b-yellow">single linked list</span>.'
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function cPrinting() {
	if (lang == 'c') {
		$('#Percen1').effect( "highlight",{color: 'blue'}, 500);
	}
		$('#fData1').css('background', 'yellow').effect( "highlight",{color: 'blue'}, 500, function() {
			svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node1data", "#svgId", "line01", "arrow", function() {
				$("#line01").remove();
				$("#firstData").removeClass("opacity00");
				fadeInFromEffectWithTimelineMax("#info1", "#firstData" , true, function() {
					$('#fData1').css('background', '')
					setTimeout(function() {
						transferEffect("#pLin1", "#lines1", function() {
							setTimeout(function() {
								if (lang == 'c') {
									$('#Percen2').effect( "highlight",{color: 'blue'}, 500);
								}
									$('#fData2').css('background', 'yellow').effect( "highlight",{color: 'blue'}, 500, function() {
										svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#first", "#node1data", "#svgId", "line01", "arrow", function() {
											$("#line01").remove();
											$('#nextDiv1').effect( "highlight",{color: 'blue'}, 500);
											svgAnimatingLineSelector1RightSideToSelector2LeftSide("#animationDiv", "#node1data", "#node2data", "#svgId", "line01", "arrow", function() {
												$("#line01").remove();
												$("#firstData3").removeClass("opacity00");
												fadeInFromEffectWithTimelineMax("#info2", "#firstData3" , true, function() {
													$('#fData2').css('background', '');
													setTimeout(function() {
														transferEffect("#pLin2", "#lines2", function() {
															setTimeout(function() {
																transferEffect("#Null", "#nullText", function() {	
																setTimeToIntroGoNextStep();
																});
															},200);
														});
													},200);
												});
											});
										});
									});
							},200);
						});
					},200);
				});
			});
		});
}

function cppPrinting() {
	
}

function changeValue() {
	$("[contenteditable=true]").on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).val().length > max-1) {
			$(".length-error-text").remove();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").on("keyup", function(e) {
		if ($(this).val() == "") {
			$(".length-error-text").remove();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introcode.refresh();
		
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				introcode.nextStep();
			}
		}
	});
} 

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "lightgreen", "font-width" : "bold", "z-index" : "99999999"}).offset();
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
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "red");
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
	introcode.insertOption(introcode._currentStep + 1, options);
	introcode._options.steps.push({"element" : stepName});
}

function typing(typingId, typingContent, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingSpeed,
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
		$("#programDiv").append("<span id='dummy' style='position: relative;color: black;'>" 
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
			$("#animationDiv").removeAttr("style");			
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
		$("#animationDiv").append("<span id='dummy' class='ct-code-b-green ct-fonts' style='position: relative;z-index: 9999999;'>" 
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
	    TweenLite.to($("#dummy"), 0.8, { ease: Sine.easeOut, left:150 , delay :1.8, opacity:0 , onComplete: function() {
	    	if (typeof callBackFunction === "function") {
	    		$("#dummy").remove();
				callBackFunction();
			}
	    }});
}

	function appendNode() {
		for (var  i = 1; i < 3; i++) {
			$("#dynamicNodesDiv").append('<div class="col-xs-2 col-xs-offset-1 text-center opacity00 padding00 node'+ i +' " id="node' + i 
					+'" style="width: auto;">' 
			 	+ '<div class="col-xs-12" style="padding: 0px;">' 
		 		+ '<div class="col-xs-6 ct-code-b-blue no-border left-radius">data</div>' 
					+ '<div class="no-border ct-code-b-green right-radius">next</div>' 
				+ '</div>' 
				+ '<div class="col-xs-12 padding00" id="node'+ i +'data">' 
					+ '<div class="div-border ct-code-b-blue blue-border left-radius col-xs-6 info-div" id="dataDiv' + i 
					+ '"><span class="info-span opacity00" id="info' + i 
					+ '" >12</span></div>' 
					+ '<div class="div-border ct-code-b-green green-border right-radius col-xs-6 next-div" id="nextDiv' + i 
					+ '"><span class="next-span opacity00" id="next' + i +'">NULL</span></div>' 
				+ '</div>' 
				+ '<div class="col-xs-12 padding00">' 
					+ '<div class="col-xs-6 no-border ct-code-b-brown left-radius"><span class="info-address" id="infoAddress' + i 
					+ '">' + (i + 4)  +'124</span></div>' 
					/* + '<div class="col-xs-6 no-border right-radius">' + (102 + 2) + '</div>' */ 
				+ '</div>' 
				+ '</div>');
		}
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
		line.setAttribute("class", "svg-line");
		line.setAttribute("x1", x1);
		line.setAttribute("y1", y1);
		line.setAttribute("x2", x2);
		line.setAttribute("y2", y2);
		line.style.markerEnd = 'url("#' + markerId + '")';
		$(svgId).append(line);
	}

	// from selector1 Right side to selector2 Left side
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

	// from selector1 Left side to selector2 Right side
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

	// from selector1 Bottom side to selector2 Top side
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

	// from selector1 Top side to selector2 Bottom side
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
	