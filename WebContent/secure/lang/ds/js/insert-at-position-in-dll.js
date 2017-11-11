function insertAtPositionInDLLReady() {
	dynamicTempNodes(1);
	createDynamicNodes('#dynamicNodes', 1);
	createDynamicNodes('#fstExplain', 3);
	svgAppend("#animationDiv");
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	
	$('#restartBtn').click(function() {
		location.reload();
	});
	initIntroJS();
}

function getURLParameter(sParam) {	//language selection in url
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function dynamicTempNodes(val) {	//temp nodes
	$('#tempDynamicNodes').append('<div class="col-xs-1 col-xs-offset-1 padding0 opacity00" id="tempNodeParent' + val + '">'
						+ '<div class="col-xs-12 box padding0 temp-node" id="tempBox' + val + '"><span id="tempNode' + val + '"'
						+ ' class="ct-brown-color ct-fonts position-css temp-node-val opacity00">1245</span></div>'
						+ '<div class="text-center col-xs-12 padding0 ct-green-color ct-fonts" id="tempame' + val + '">temp</div></div>');
}

function createDynamicNodes(id, nodeNum) {	//node
	var randomAddress = getRandomInt(1000, 5000);
	$(id).append('<div class="col-xs-2 nodes list-nodes opacity00" id="node' + nodeNum + '" style="top: 0px; width: auto;">'
	 				+ ' <div class="col-xs-12 padding0"><div class="col-xs-4 ct-green-color ct-fonts text-center padding0">prev</div>'
					+ ' <div class="col-xs-4 ct-blue-color ct-fonts padding0 text-center">data</div>'
					+ '	<div class="col-xs-4 ct-green-color ct-fonts text-center padding0">next</div></div>'
					+ ' <div id="nodedata' + nodeNum + '"><div id="prevDiv' + nodeNum + '" class="div-border left-radius col-xs-4 prev-div">'
					+ ' <span id="prev' + nodeNum + '" class="prev-span ct-green-color">NULL</span></div>'
					+ ' <div id="dataDiv' + nodeNum + '" class="div-border no-radius col-xs-4 data-div">'
					+ ' <span id="data' + nodeNum + '" class="data-span ct-blue-color opacity00" style="top: 0px; left: 0px;"></span></div>'
					+ ' <div id="nextDiv' + nodeNum + '" class="div-border right-radius col-xs-6 next-div">'
					+ ' <span id="next' + nodeNum + '" class="next-span ct-green-color">NULL</span></div></div>'
					+ ' <div class="col-xs-12 padding0"><div class="col-xs-4 col-xs-offset-4 padding0 text-center">'
					+ ' <span id="dataAddress' + nodeNum + '" class="data-address padding0 ct-brown-color ct-fonts">'+ randomAddress
					+ '</span></div></div></div>');
	$('#prev' + nodeNum + ', #data' + nodeNum + ', #next' + nodeNum).addClass('position-css ct-fonts');
	animatedTooltip('#prevDiv' + nodeNum, "bottom", "prev holds previous node's address");
	animatedTooltip('#dataDiv' + nodeNum, "bottom", "data holds user data");
	animatedTooltip('#nextDiv' + nodeNum, "bottom", "next holds next node's address");
}

function getRandomInt(min, max) { //random address
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function animatedTooltip(id, position, tooltipText) {
	$(id).addClass('zIndex').attr({"data-placement" : position, "data-original-title" : tooltipText}).tooltip();
}

function createNodeMethod() {
	$('#codeDiv').append('\n\n<span id="createNodeFun" class="opacity00">node <g>createNode()</g> {\n'
						+ '\tnode temp;\n'
						+ '\t<span id="allocMemory"></span>\n'
						+ '\ttemp -> next = NULL;\n'
						+ '\t<span>return temp;</span>\n'
						+ '} &emsp;</span>\n\n');
}

function structCode() {
	$('#codeDiv').append('<span id="structCode" class="opacity00"><g>struct list</g> {\n'
						+ '\tint <bl>data</bl>;\n'
						+ '\tstruct list <g>*prev</g>;\n'
						+ '\tstruct list <g>*next</g>;\n'
						+ '};\n<span>typedef struct list *node; \t</span> </span>\n');
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showBullets: false,
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps: [ {
				element: '#headingInDll',
				intro: ''
			}, {
				element: '#algorithmDiv',
				intro: '',
				tooltipClass: 'hide'
			}, {
				element: '#animationDiv',
				intro: '',
				animateStep: 'fstDeclaration',
				tooltipClass: 'hide'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.zIndex').not('.introjs-showElement, #headingInDll').css({'z-index': '0'});
		$('.introjs-showElement .zIndex').css({'zIndex': '99999999'});
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		switch(elementId) {
			case 'headingInDll':
				text = 'Here we will learn about <y>insertAtPosition()</y> method in a <y>Doubly Linked List</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'algorithmDiv':
				$('#algorithmDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#codeAndAlgorithmDiv').addClass('box-border');
					text = 'Let us learn about adding a <bl>node</bl> at a particular <brn>position</brn> to a <brn>Doubly Linked List(DLL)</brn>. ';
					typing('#algorithmDiv', text, function() {
						callingNextBtn('#algorithmDiv', function() {
							introjs.nextStep();
						});
					});
				});
			break;
			case 'animationDiv':
				$('#animationDiv').removeClass('opacity00');
				$('.introjs-tooltip').css({'height' : ''});
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'fstDeclaration':
							animatedTooltip('#firstDiv', "bottom", "first stores the beginning of the linked list");
							zoomInEffect('#firstNode', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = '<span id="l1">Let us store the <yy class="ct-fonts brn">beginning of the linked list</yy> in a pointer variable'
										+ ' of type node (<bgb>first</bgb>). Since the <yy class="ct-fonts brn">Linked list</yy> is'
										+ ' <yy class="ct-fonts brn">not yet created</yy> we should initialize it with <yy class="ct-fonts g">NULL</yy>.';
								typing('.introjs-tooltiptext', text, function() {
									$('#algorithmDiv').removeClass('opacity00').append('<ul style="list-style-type: circle" id="ul1"></ul>');
									algorithmSteps(text, '.introjs-tooltiptext span', '#algorithmDiv #l1', 0, 'fstCreation');
								});
							});
						break;
						case 'ifPosZeroStep':
							posZeroAnim();
						break;
						case 'posOneCond':
							posOneAnim();
						break;
						case 'ifPosIsOne':
						case 'posTwoNode':
						case 'firstPosition':
						case 'positionGreaterOne':
						case 'noPositionStep':
							var nodeVal;
							$('#line11, #line12, #line14').remove();
							$('#tempDynamicNodes > div, .temp-node-val').addClass('opacity00');
							if (animateStep == 'ifPosIsOne') {
								text = '<span>Let us <yy class="ct-fonts">insert</yy> a node at <yy class="ct-fonts brn one">'
										+ '1</yy>st <yy class="ct-fonts brn">position</yy> </span>';
								nodeVal = 1;
							} else if (animateStep == 'posTwoNode') {
								text = '<span id="l8">Let us <yy class="ct-fonts">insert</yy> another node at <yy class="brn ct-fonts">position '
									+ '<span class="one">2<span></yy> (i.e., greater than 1)</span>';
								nodeVal = 2;
							} else if (animateStep == 'firstPosition') {
								text = 'Let us insert another <y>node</y> at <y class="one">1</y><y>st position</y>';
								nodeVal = 3;
							} else if (animateStep == 'positionGreaterOne'){
								text = 'Let us insert another <y>node</y> at <y class="one">4</y><y>th position</y>';
								nodeVal = 4;
							} else {
								text = 'Let us insert another <y>node</y> at <y class="one">6</y><y>th position</y>';
								nodeVal = 6;
							}
							text1 = text + ' for a given value. <br>Enter a value : '
									+ '<input type="text" class="usr-txt position-css zIndex" size="3" maxlength="3" id="nodeVal" />';
							typing('.introjs-tooltiptext', text1, function() {
								fromEffectWithTweenMax('.introjs-tooltiptext .one', '#posVal', true, function() {
									validation('#nodeVal', nodeVal);
								});
							});
						break;
					}
				});
			break;
			case 'codeAndAlgorithmDiv':
				$('#algorithmDiv').removeClass('z-index10000');
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introjs._introItems[introjs._currentStep].animateStep;
					switch(animateStep) {
						case 'fstCreation':
							zoomInEffect('#codeDiv', function() {
								$('#codeDiv').append('<span id="fstCreation" class="opacity00">node first = <g>NULL</g>; '
											+ ' <span><i class="fa fa-question-circle fa-1x" id="helpText"></i></span> &emsp;</span>');
								$('#algorithmDiv ul li:last').effect('highlight', {color: 'yellow'}, 1400);
								transWithZoomInEffect('#l1', '#fstCreation', function() {
									animatedTooltip('#helpText', "bottom", "first stores the beginning of the linked list");
									nextBtnWithNextStep('#fstCreation', '#animationDiv', 'ifPosZeroStep', 'show');
								});
							});
						break;
						case 'posLesThanZero':
							$('#l2').effect('highlight', {color: 'yellow'}, 1400);
							$('#codeDiv').append('\n\n<div id="positionDiv" class="position-css"><span id="insertAtPositionMthd" class="opacity00">'
											+ ' </span></div>');
							if (lang == 'c') {
								$('#insertAtPositionMthd').html('node insertAtPosition(int <brn>position</brn>, int x) {'
															+ ' <span id="insertAtPosition">\n\t<span id="retn">return first;\n</span>}</span>');
							} else if (lang == 'cpp') {
								$('#insertAtPositionMthd').html('void Dll::insertAtPosition(int <brn>position</brn>, int x) {'
															+ ' <span id="insertAtPosition">\n}</span>');
							}
							transWithZoomInEffect('#l2', '#insertAtPositionMthd', function() {
								$('#insertAtPosition').before('\n\t<span id="ifPosIsZero" class="opacity00">'
												+ ' if (<brn>position</brn> <g><=</g> <brn>0</brn>) {\n\t\t<span id="printf0">printf("'
												+ '<brn>No such position in DLL. So</brn> "\n\t\t\t\t"<brn>insertion is '
												+ 'not possible</brn>\\n");\n\t\treturn first;</span>\n\t}</span>');
								if (lang == 'cpp') {
									$('#printf0').html('cout << "<brn>No such position in DLL. So</brn> "\n\t\t\t\t"<brn>insertion is '
													+ 'not possible</brn>\\n";\n\t\treturn;');
								}
								codeDivAnim('#l3', '#ifPosIsZero', '#createCall', '#codeDiv', function() {
									nextBtnWithNextStep('#insertAtPositionMthd', '#animationDiv', 'ifPosIsOne', 'show');
								});
							});
						break;
						case 'mallocCreation':
							$('#ifPosIsZero').after('\n<span id="createMethod" class="opacity00">\t<span id="tempDec">node temp;</span>\n'
											+ '\t<span id="createCall">temp = <g>createNode()</g>;</span>\n\ttemp -> data = x;</span>'
											+ '\n\t<span id="ifPosIsOne" class="opacity00">if (<brn>position</brn> <g>==</g> <brn>1</brn>) {\n'
											+ '<span id="posOneCond"></span>\t<span id="posOneClose">}</span></span>');
							codeDivAnim('#l4', '#ifPosIsOne', '#createCall', '#codeDiv', function() {
								codeDivAnim('#l5', '#createMethod', '#createCall', '#codeDiv', function() {
									createNodeMethod();
									$('#createCall').css({'background-color' : 'yellow'});
									$('.introjs-tooltip').removeClass('hide');
									text = '<y>createNode()</y> is used to <y>allocate memory</y>.';
									typing('.introjs-tooltiptext', text, function() {
										callingNextBtn('.introjs-tooltipbuttons', function() {
											$('#codeDiv').scrollTo('#createNodeFun span:first', 300, function() {
												if (lang == 'c') {
													$('#allocMemory').html('temp = (node)malloc(sizeof(<span id="list"><g>struct list</g></span>));');
												} else if (lang == 'cpp') {
													$('#allocMemory').html('temp = <span id="list"><g>new list;</g></span>');
												}
												transWithZoomInEffect('#createCall', '#createNodeFun', function() {
													structCode();
													$('#codeDiv').scrollTo('#structCode span:last', 300, function() {	
														$('#list').css({'background-color' : 'yellow'});
														transWithZoomInEffect('#list', '#structCode', function() {
															introNextSteps('#animationDiv', 'posOneCond', 'show');
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
						case 'posOneStep':
							$('#posOneCond').append('\t\t<span id="tmpToFirst" class="opacity00">first = temp; </span>\n');
							$('#codeDiv').scrollTo('#positionDiv span:first', 300);
							$('#algorithmDiv').scrollTo('#ul3 span:last', 300);
							codeDivAnim('#l7', '#tmpToFirst', '#positionDiv span:first', '#codeDiv', function() {
								nextBtnWithNextStep('#tmpToFirst', '#animationDiv', 'posTwoNode', 'show');
							});
						break;
						case 'posTwoCode':
							$('#tempDec').html('node temp, <span id="lstDec" class="opacity00">last = first</span>;')
							$('#ifPosIsOne').after('<span id="posNotOne"> else {\n'
											+ '\t\t<span id="lstNxtTToTmpNxt" class="opacity00">temp -> next = last -> next;</span>\n'
											+ '\t\t<span id="tmpToLstNxt" class="opacity00">last -> next = temp;</span>\n'
											+ '\t\t<span id="tmpToTmpPrev" class="opacity00">temp -> prev = last;</span>\n\t}</span>');
							codeDivAnim('#l9', '#lstDec', '#ifPosIsZero', '#codeDiv', function() {
								recursionAnim('11', '#posNotOne span', 0, 13, '#createCall', '#codeDiv', '#algorithmDiv', function() {
									callingNextBtn('#posNotOne', function() {
										introNextSteps('#animationDiv', 'firstPosition', 'show');
										introjs.nextStep();
									});
								});
							});
						break;
						case 'posOneNotNul':
							$('#algorithmDiv').scrollTo('#ul3', 300);
							$('#codeDiv').scrollTo('#tempDec', 300);
							$('#tmpToFirst').prepend('<span id="posOneNotNlCond" class="opacity00">if (first != NULL) {\n'
												+ '\t\t\ttemp -> next = first;\n'
												+ '\t\t\t<span id="tmpToFstPrev" class="opacity00">first -> prev = temp;</span>\n'
												+ '\t\t}</span>\n\t\t');
							codeDivAnim('#l14', '#posOneNotNlCond', '#tempDec' , '#algorithmDiv', function() {
								codeDivAnim('#l15', '#tmpToFstPrev', '#tempDec' , '#algorithmDiv', function() {
									nextBtnWithNextStep('#posOneNotNlCond', '#animationDiv', 'positionGreaterOne', 'show');
								});
							});
						break;
						case 'posTwoSteps':
							$('#tempDec').after('\n\t<span id="frLoop"><span id="decI">int i;</span>\n'
											+ '\t<span id="frLoopDec">for (i = 1; i < (<brn>position</brn> - 1); i++) {\n'
											+ '\t\t<span id="lstNxtIsNLRNot">if (last -> next == NULL) {\n'
											+ '\t\t\t<div id="printfStatement" class="position-css"></div>\n\t\t}</span>\n'
											+ '\t\t<span id="lstToLstNxt">last = last -> next;</span>\n\t}</span></span>');
							$('#frLoop span').addClass('opacity00');
							$('#algorithmDiv').scrollTo('#l12', 300);
							recursionAnim('16', '#frLoop span', 0, 19, '#ifPosIsZero', '#codeDiv', '#algorithmDiv', function() {
								nextBtnWithNextStep('#frLoop', '#animationDiv', 'noPositionStep', 'show');
							});
						break;
						case 'noPositionStep':
							$('#printfStatement').html('<span id="printf1">printf("<brn>No such position in DLL. </brn>" \n'
													+ '\n\t"<brn>So insertion is not possible</brn>\\n");\n'
													+ 'return first;</span>');
							if (lang == 'cpp') {
								$('#printfStatement').html('<span id="printf1" class="opacity00">cout << "<brn>No such position in DLL. </brn>"'
														+ ' \t"<brn>So insertion is not possible</brn>\\n";\n'
														+ 'return;</span>');
							}
							transWithZoomInEffect('#l20', '#printf1', function() {
								nextBtnWithNextStep('#printf1', '#restartBtn', '', 'show', 'right');
							});
						break;
					}
				});
			break;
			case 'restartBtn':
				$('#restartBtn').removeClass('opacity00');
				$('.introjs-tooltip').css({'height':'', 'min-width': '125px'});
				$('#animationDiv, #codeAndAlgorithmDiv').addClass('z-index10000').css({'z-index': '99999999'});
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext', 'Click to restart.');
				});
			break;
		}
	});
	introjs.start();
}


function changeIds(elemParent, idAttr) {//changing Ids based on situation
	$(elemParent).each(function(index){
		$(this).attr('id', (idAttr + (index + 1)));
	});
}

function changeIdsBasedOnCond(callBackFunction) {
	changeIds($('#dynamicNodes .nodes'), 'node');
	changeIds($('#dynamicNodes .data-nodes'), 'nodeData');
	changeIds($('#dynamicNodes .prev-div'), 'prevDiv');
	changeIds($("#dynamicNodes .data-div"), "dataDiv");
	changeIds($("#dynamicNodes .next-div"), "nextDiv");
	changeIds($("#dynamicNodes .data-address"), "dataAddress");
	changeIds($("#dynamicNodes .prev-span"), "prev");
	changeIds($("#dynamicNodes .data-span"), "data");
	changeIds($("#dynamicNodes .next-span"), "next");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function rearrangingNodes() {
	$('line').remove();
	createDynamicNodes('#dynamicNodes', 3);
	TweenMax.to($('#node2'), 1, {left: '165', onComplete: function () {
		TweenMax.to($('#node1'), 1, {left: '165', onComplete: function () {
			changeIdsBasedOnCond(function() {
				$('#dynamicNodes #node3').html($('#node2').html()).removeClass('opacity00');
				$('#node2').html($('#node1').html());
				$('#node1').html($('#fstExplain #node3').html()).addClass('opacity00');
				$('.nodes').not('#node1').css('left', '0');
				changeIdsBasedOnCond();
				setTimeout(function() {
					var l = $('#fstExplain #node3').offset();
					$('#node1').offset({top : l.top, left : l.left});
					$('#node1').removeClass('opacity00');
					$('#fstExplain #node3').addClass('opacity00').remove();
					TweenMax.to('#node1', 1, {top : 0, left : 0, onComplete : function() {
						svgAnimatingLineTopAndBottom('#firstDiv', '#prevDiv1', 'line1', false);
						svgAnimatingLineRightToLeft('#nextDiv1', '#prevDiv2', 'line2');
						svgAnimatingLineLeftToRight('#prevDiv2', '#nextDiv1', 'line3');
						svgAnimatingLineRightToLeft('#nextDiv2', '#prevDiv3', 'line4');
						svgAnimatingLineLeftToRight('#prevDiv3', '#nextDiv2', 'line5');
						svgAnimatingLineTopAndBottom('#tempBox3', '#nextDiv1', 'line11', true);
						nextBtnWithNextStep('.introjs-tooltipbuttons', '#codeAndAlgorithmDiv', 'posOneNotNul', 'hide');
					}});
				}, 800);
			});
		}});
	}});
}

function positionFourAnim() {
	$('#algorithmDiv li').removeAttr('class');
	$('.introjs-tooltiptext').append('<br>Repeat the <y>position 2</y> steps. <ul></ul>');
	text = 'Let us initialize a temporary node (<yy class="ct-fonts">last</yy>) with the <bgb>first</bgb> value.';
	liTyping(text, function() {
		$('#tempame3').text('last');
		tempararyNodeDec(3, function() {
			text1 = "<span id='l16'>Let us take one <yy class='ct-fonts'>integer</yy> variable <yy class='ct-fonts'>i</yy> and initialize it with"
					+ " <yy class='ct-fonts'>1</yy>.";
			text2 = '<span id="l17">Repeat the <yy class="ct-fonts">loop</yy> until the <yy class="ct-fonts">i</yy> value is'
					+ ' <yy class="ct-fonts g">less than</yy> the <yy class="ct-fonts brn">position minus one(4 - 1 = 3)</yy>.</span>';
			text3 = '<span id="l18">If it is <yy class="ct-fonts g">true</yy>, then check <yy class="g ct-fonts">last\'s next</yy> is'
							+ ' <yy class="ct-fonts g">NULL</yy> or not.</span>';
			text4 = '<span id="l19">If  <yy class="g ct-fonts">last\'s next</yy> is <yy class="ct-fonts g"> not NULL</yy> then assign '
					+ '<yy class="ct-fonts g">next field of</yy> <yy class="g ct-fonts">last</yy> to <yy class="g ct-fonts">last</yy>.</span>';
			if ($('#posVal').text() == 4) {		
				frLoopAnimText(text1, '16', '#ul4', function() {
					frLoopAnimText(text2, '17', '#ul4', function() {
						frLoopAnimText(text3, '18', '#ul4', function() {
							frLoopAnimText(text4, '19', '#ul4', function() {	
								$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="frLoopAnim()">Next &#8594;</a>');
							});
						});
					});
				});
			} else {
				liTyping(text1, function() {
					liTyping(text2, function() {
						liTyping(text3, function() {
							liTyping(text4, function() {
								$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="frLoopAnim()">Next &#8594;</a>');
							});
						});
					});
				});
			}
		});
	});
}

function frLoopAnim() {
	$('.user-btn').remove();
	fadeInNSvgTopAndBottom('#next1', '#tempNode3', '#tempNodeParent3', '#nextDiv2', 'line14', true, function() {
		$('#tempBox3').attr('data-original-title' , 'Address of the first next node.');
		$('#nextDiv2').effect('highlight', {color: 'blue'}, 500, function() {
			fadeInNSvgTopAndBottom('#next2', '#tempNode3', '#tempNodeParent3', '#nextDiv3', 'line14', true, function() {
				if ($('#posVal').text() == 4) {
					callingNextBtn('.introjs-tooltipbuttons', function() {
						$('#algorithmDiv').addClass('z-index10000');
						recursionAnim('16', '#ul4 span', 5, 19, '#l13', '#algorithmDiv', '.introjs-tooltiptext', function() {
							$('.introjs-tooltip').css({'height':'250px', 'overflow-y':'auto'}).scrollTo('.introjs-tooltiptext li:last', 300);
							repeatedTextTyping('#l10', false, '', '', '', '', function() {
								dynamicTempNodes(4);
								createDynamicNodes('#dynamicNodes', 4);
								nodeAnim(4, function() {
									repeatedTextTyping('#l11', true, '#next3', '#next4', true, 700, function() {
										repeatedTextTyping('#l12', true, '#tempNode4', '#next3', false, -350, function() {
											svgAnimatingLineRightToLeft('#nextDiv3', '#prevDiv4', 'line6', function() {
												repeatedTextTyping('#l13', true, '#tempNode3', '#prev4', false, -350, function() {
													$('.background-yellow').removeClass('background-yellow');
													svgAnimatingLineLeftToRight('#prevDiv4', '#nextDiv3', 'line7', function() {
														nextBtnWithNextStep('.introjs-tooltipbuttons', '#codeAndAlgorithmDiv', 'posTwoSteps', 'hide');
													});
												});
											});
										});
									});
								});
							});
						});
					});
				} else {
					$('#nextDiv3').effect('highlight', {color: 'blue'}, 500, function() {
						fadeInNSvgTopAndBottom('#next3', '#tempNode3', '#tempNodeParent3', '#nextDiv4', 'line14', true, function() {
							$('.introjs-tooltiptext ul').append('<div id="appendText"></div>');
							text = '<yy class="ct-fonts">last\'s next</yy> value is <yy class="ct-fonts">NULL</yy>. Here, for loop fails we can\'t '
									+ ' insert any node. <br>Print <yy class="brn ct-fonts">No such position in DLL. So insertion is'
									+ ' not possible</yy>.';
							typing('#appendText', text, function() {
								text = '<li><span id="l20" class="opacity00">If <g>last next\'s</g> value is <g>NULL</g>. Then print <brn>No'
										+ ' such position in DLL. So insertion is not possible</brn>.</span></li>'
								$('#algorithmDiv ul:last').append(text);
								$('#algorithmDiv').addClass('z-index10000').scrollTo('yy:last', 300, function() {
									transWithZoomInEffect('#appendText', '#l20', function() {
										nextBtnWithNextStep('.introjs-tooltipbuttons', '#codeAndAlgorithmDiv', 'noPositionStep', 'hide');
									});
								});
							});
						});
					});
				}
			});
		});
	});
}

function repeatedTextTyping(selector1, checkFlag, selector2, selector3, flag, val, callBackFunction) {
	$('#algorithmDiv').scrollTo('#l15', 300);
	$('.background-yellow').removeClass('background-yellow');
	$(selector1).parent().addClass('background-yellow');
	$('.introjs-tooltiptext ul').append('<li>' + $(selector1).html() + '</li>');
	$('.introjs-tooltiptext li:last yy[class*=ct]').removeAttr("class").addClass('ct-fonts');
	$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons', 300);
	if (checkFlag) {
		fadeInBounceEffectWithTimelineMax(selector2, selector3, flag, val, function() {
			callBackFunction();
		});
	} else {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}

function fadeInNSvgTopAndBottom(selector1, selector2, selector3, selector4, lineId, flag, callBackFunction) {
	fadeInBounceEffectWithTimelineMax(selector1, selector2, false, 250, function() {
		$('#' + lineId).remove();
		svgAnimatingLineTopAndBottom(selector3, selector4, lineId, flag, function() {
			callBackFunction();
		});
	});
}

function recursionAnim(idVal, selector, val, finlVal, scrollID, scrollParentId, parentId, callBackFunction) {
	if (idVal <= finlVal) {
		let t = $(selector).eq(val).attr('id');
		$(parentId + ' #l' + idVal).effect('highlight', {color: 'yellow'}, 1400);
		codeDivAnim('#l' + idVal, '#' + t, scrollID, scrollParentId, function() {
			recursionAnim(++idVal, selector, ++val, finlVal, scrollID, scrollParentId, parentId, callBackFunction)
		});
	} else {
		callBackFunction();
	}
}

function nextBtnWithNextStep(selector1, parentSelector, selector2, tooltip, position) {
	callingNextBtn(selector1, function() {
		introNextSteps(parentSelector, selector2, tooltip, position);
		introjs.nextStep();
	});
}

function liTyping(text, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li></li>');
	typing('.introjs-tooltiptext li:last', text, function() {
		callBackFunction();
	});
}

function codeDivAnim(id1, id2, id3, id4, callBackFunction) {
	$(id4).scrollTo(id3, 300);
	$(id1).effect('highlight', {color: 'yellow'}, 1400);
	$(id2).parent().removeClass('opacity00');
	transWithZoomInEffect(id1, id2, function() {
		callBackFunction();
	});
}

function frLoopAnimText(text, val, id, callBackFunction) {
	liTyping(text, function() {
		$('#algorithmDiv ' + id).append('<li class="opacity00">' + text + '</li>');
		$('#algorithmDiv #l' + val).addClass('opacity00');
		$('#algorithmDiv').scrollTo(id, 300);
		algorithmAnim();
		callBackFunction();
	});
}

function algorithmColorAnim() {
	$('#algorithmDiv yy').removeClass('ct-fonts').addClass('ct-blue-color');
	$('#algorithmDiv .brn').removeClass('ct-fonts ct-blue-color').addClass('ct-brown-color');
	$('#algorithmDiv .g').removeClass('ct-fonts ct-blue-color').addClass('ct-green-color');
}

function algorithmAnim(id1, id2, callBackFunction) {
	algorithmColorAnim();
	$('#algorithmDiv').scrollTo(id1 + ' span:last', 300, function() {
		$('#algorithmDiv ' + id2).parent().removeClass('opacity00');
		transWithZoomInEffect('.introjs-tooltiptext ' + id2, '#algorithmDiv ' + id2, function() {
			callBackFunction();
		});
	});
}

function positionOneRepeatAnim() {
	$('#algorithmDiv li').removeAttr('class');
	$('.introjs-tooltiptext').append('<br><br>Repeat the steps<ul></ul>');
	$('#algorithmDiv').addClass('z-index10000').scrollTo('#l3', 300);
	$('#l5').css({'background-color' : 'yellow'});
	text = 'Allocate <y>memory</y> for the <y>new node</y> (<y>address</y> of the <y>new node</y> is stored in <y>temp</y>) and'
			+ ' store the given value in <y>data</y>'
	liTyping(text, function() {
		dynamicTempNodes(3);
		nodeAnim(3, function() {
			$('#l5').css({'background-color' : ''});
			text = '<span id="l14">Store the <bgb>first</bgb> value in <yy class="ct-fonts bl">newly created node\'s'
					+ ' </yy> <yy class="ct-fonts g">next</yy> pointer variable. If <bgb>first</bgb> is <yy class="ct-fonts g">not NULL</yy>.</span>';
			frLoopWithNextBtnAndBounceEffect('#ul3', '14', '#firstVal', '#next3', true, 500, function() {
				svgAnimatingLineTopAndBottom('#dataDiv3', '#nextDiv1', 'line4', false, function() {
					callingNextBtn('.introjs-tooltipbuttons', function() {
						text = '<span id="l15">Store the newly created node\'s <yy class="ct-fonts g">address</yy> in first node\'s <yy class="ct-fonts g">'
								+ ' prev</yy> pointer variable.</span>';
						frLoopWithNextBtnAndBounceEffect('#ul3', '15', '#tempNode3', '#prev1', false, -320, function() {
							svgAnimatingLineTopAndBottom('#dataDiv1', '#prevDiv3', 'line5', true, function() {
								text = 'Store the <y>address</y> of the <y>newly created node</y> in the <bgb>first</bgb> variable.</span>';
								liTyping(text, function() {
									callingNextBtn('.introjs-tooltipbuttons', function() {
										fadeInBounceEffectWithTimelineMax('#tempNode3', '#firstVal', false, -400, function() {
											$('#line1').remove();
											svgAnimatingLineRightToLeft('#firstDiv', '#prevDiv3', 'line1', function() {
												codeDivAnim('.introjs-tooltiptext #l14', '#algorithmDiv #l14', '#ul3', '#algorithmDiv', function() {
													codeDivAnim('.introjs-tooltiptext #l15', '#algorithmDiv #l15', '#ul3', '#algorithmDiv', function() {
														callingNextBtn('.introjs-tooltipbuttons', function() {
															rearrangingNodes();
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
			});
		});
	});
}

function posZeroAnim() {
	text = '<span id="l2">Let us consider the <y>steps</y> involved in <yy class="ct-fonts">adding</yy> a new '
		+ '<yy class="ct-fonts bl">node</yy> at a particular <yy class="ct-fonts brn">position</yy> for a given value.</span>';
	typing('.introjs-tooltiptext', text, function() {
		$('#algorithmDiv').append(text);
		$('#algorithmDiv #l2').addClass('opacity00');
		$('.introjs-tooltiptext').append('<ul></ul>');
		text = '<li><span id="l3">Let us <yy class="ct-fonts">insert</yy> a node at <yy class="ct-fonts brn">position</yy>'
				+ ' <yy class="ct-fonts one brn">0</yy>.'
		typing('.introjs-tooltiptext ul', text, function() {	
			zoomInEffect('#posDec', function() {
				fromEffectWithTweenMax('#l3 .one', '#posVal', true, function() {
					animatedTooltip('#positionBox', "bottom", "Position of the node");
					$('.introjs-tooltiptext li').append('<br><div id="appendText"></div>');
					text1 = ' We can\'t <yy class="ct-fonts">insert</yy> any node if the <yy class="ct-fonts brn">position</yy> is '
							+ '<yy class="ct-fonts brn"><span class="g">less than or equal to</span> zero</yy>.<br>Print'
							+ ' <yy class="ct-fonts brn">No such position in DLL. So insertion is not possible</yy>.</span></li>';
					typing('#appendText', text1, function() {
						$('#algorithmDiv y, #algorithmDiv .one, #algorithmDiv .brn').addClass('ct-brown-color');
						$('#algorithmDiv').append('<ul style="list-style-type: circle" id="ul2"></ul>');
						$('#ul2').append(text + text1);
						$('#algorithmDiv #l3, #algorithmDiv li:last').addClass('opacity00');
						algorithmColorAnim();
						callingNextBtn('.introjs-tooltipbuttons', function() {
							$('#algorithmDiv').addClass('z-index10000');
							codeDivAnim('.introjs-tooltiptext #l2', '#algorithmDiv #l2', 'yy:last', '#algorithmDiv', function() {
								codeDivAnim('.introjs-tooltiptext #l3', '#algorithmDiv #l3', 'yy:last', '#algorithmDiv', function() {
									nextBtnWithNextStep('.introjs-tooltipbuttons', '#codeAndAlgorithmDiv', 'posLesThanZero', 'hide');
								});
							});
						});
					});
				});
			});
		});
	});
}


function posOneValidationAnim() {
	$('.introjs-tooltiptext').append('<br><br><div id="appendText"></div>');
	text = '<span id="l5">Allocate <yy class="ct-fonts brn">memory</yy> for the <yy class="ct-fonts">new node</yy> (<yy class="ct-fonts g">address</yy>'
			+ ' of the <yy class="ct-fonts">new node</yy> is stored in <yy class="ct-fonts">temp</yy>) and store the given value in'
			+ ' <yy class="ct-fonts">data</yy>.</span>';
	typing('#appendText', text, function() {
		animatedTooltip('#tempBox1', "top", "Address of the newly created node.");
		nodeAnim(1, function() {
			$('#algorithmDiv #ul2').append('<li class="opacity00"><span id="l4" class="opacity00">' + $('.introjs-tooltiptext span:first').html() 
								+ '</span></li>');
			$('#algorithmDiv #l4').after('<ul id="ul3"><li class="opacity00">' + text + '</li></ul>');
			$('#algorithmDiv').scrollTo('ul yy:last', 300);
			algorithmColorAnim();
			callingNextBtn('.introjs-tooltipbuttons', function() {
				$('#algorithmDiv #l5').addClass('opacity00');
				$('#algorithmDiv #ul2 > li:last').removeClass('opacity00');
				$('#algorithmDiv').addClass('z-index10000');
				codeDivAnim('.introjs-tooltiptext span:first', '#algorithmDiv #l4', '#createCall', '#algorithmDiv', function() {
					codeDivAnim('.introjs-tooltiptext #l5', '#algorithmDiv #l5', '#createCall', '#algorithmDiv', function() {
						introNextSteps('#codeAndAlgorithmDiv', 'mallocCreation', 'hide');
						$('.introjs-nextbutton').show();
					});
				});
			});
		});
	});
}

function posOneAnim() {
	$('#createCall, #list').css({'background-color' : ''});
	text = '<span id="l7">Store the <yy class="ct-fonts g">address</yy> of the <yy class="ct-fonts">newly created node</yy>'
				+ ' in the <bgb>first</bgb> variable.</span>';
	typing('.introjs-tooltiptext', text, function() {
		$('#algorithmDiv #ul3').append('<li class="opacity00">' + text + '</li>');
		$('#ul3 #l7').addClass('opacity00');
		callingNextBtn('.introjs-tooltipbuttons', function() {
			fadeInBounceEffectWithTimelineMax('#tempNode1', '#firstVal', false, -350, function() {
				svgAnimatingLineTopAndBottom('#firstDiv', '#prevDiv1', 'line1', false, function() {
					callingNextBtn('.introjs-tooltipbuttons', function() {
						$('#algorithmDiv').addClass('z-index10000');
						algorithmAnim('#ul3', '#l7', function() {
							introNextSteps('#codeAndAlgorithmDiv', 'posOneStep', 'hide');
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}

function posTwoValidationAnim() {
	$('#algorithmDiv').addClass('z-index10000');
	$('#algorithmDiv #ul2').append('<li class="opacity00">' + text + '</li>');
	$('#algorithmDiv #l8').addClass('opacity00');
	algorithmAnim('#ul2', '#l8', function() {
		callingNextBtn('.introjs-tooltipbuttons', function() {
			$('.introjs-tooltiptext').append('<ul><li></li></ul>');
			text = '<span id="l9">Let us initialize a temporary node (<yy class="ct-fonts">last</yy>) with the <bgb>first</bgb> value.</span>';
			typing('.introjs-tooltiptext li', text, function() {
				dynamicTempNodes(2);
				$('#tempame1').text('last');
				tempararyNodeDec(1, function() {
					$('#algorithmDiv #l8').after('<ul id="ul4"><li class="opacity00">' + text + '</li></ul>');
					$('#algorithmDiv #l9').addClass('opacity00');
					$('#algorithmDiv').scrollTo('#ul4 span:first', 300);
					algorithmAnim('#ul4', '#l9', function() {
						text = '<span id="l10">Allocate <y>memory</y> for the new node (<y>address</y> of the new node'
							+ ' is stored in <y>temp</y>) and store the given value in <y>data</y>.</span>';
						liTyping(text, function() {
							createDynamicNodes('#dynamicNodes', 2);
							nodeAnim(2, function() {
								$('#algorithmDiv ul:last').append('<li><span id="l10" class="opacity00">' + $('#l5').html() + '</span></li>');
								$('#algorithmDiv').scrollTo('yy:last', 300);
								codeDivAnim('.introjs-tooltiptext #l10', '#algorithmDiv #l10', 'yy:last', '#algorithmDiv', function() {
									text = "<span id='l11'>Store the <yy class='ct-fonts g'>last node\'s next</yy> value in newly created node's"
											+ " <yy class='ct-fonts g'>next</yy> pointer variable.</span>";
									frLoopWithNextBtnAndBounceEffect('#ul4', '11', '#next1', '#next2', true, 320, function() {
										codeDivAnim('.introjs-tooltiptext #l11', '#algorithmDiv #l11', 'yy:last', '#algorithmDiv', function() {
											text = '<span id="l12">Store the newly created node\'s <yy class="ct-fonts g">address</yy> in '
															+ ' <yy class="ct-fonts g">last node\'s next</yy> pointer variable.</span>';
											frLoopWithNextBtnAndBounceEffect('#ul4', '12', '#tempNode2', '#next1', false, -320, function() {
												svgAnimatingLineRightToLeft('#nextDiv1', '#prevDiv2', 'line2', function() {
													codeDivAnim('.introjs-tooltiptext #l12', '#algorithmDiv #l12', 'yy:last', '#algorithmDiv', function() {
														text = '<span id="l13">Store the <yy class="ct-fonts g">last</yy> node\'s '
																+ ' <yy class="ct-fonts g">address</yy> in newly created node\'s '
																+ ' <yy class="ct-fonts g">prev</yy> pointer variable</span>.';
														frLoopWithNextBtnAndBounceEffect('#ul4', '13', '#tempNode1', '#prev2', false, -320, function() {
															svgAnimatingLineLeftToRight('#prevDiv2', '#nextDiv1', 'line3', function() {
																codeDivAnim('.introjs-tooltiptext #l13', '#algorithmDiv #l13', 'yy:last', '#algorithmDiv', function() {
																	introNextSteps('#codeAndAlgorithmDiv', 'posTwoCode', 'hide');
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
						})	
					});
				});
			});
		});
	});
}

function frLoopWithNextBtnAndBounceEffect(id, liId, selector1, selector2, flag, val, callBackFunction) {
	frLoopAnimText(text, liId, id, function() {
		callingNextBtn('.introjs-tooltipbuttons', function() {
			fadeInBounceEffectWithTimelineMax(selector1, selector2, flag, val, function() {
				callBackFunction();
			});
		});
	});
}
	
function tempararyNodeDec(val, callBackFunction) {
	$('#tempBox' + val).attr('data-original-title' , '');
	animatedTooltip('#tempBox' + val, "top", "Address of the first node.");
	zoomInEffect('#tempNodeParent' + val, function() {
		fromEffectWithTweenMax('#firstVal', '#tempNode' + val, true, function() {
			svgAnimatingLineTopAndBottom('#tempNodeParent' + val, '#nextDiv1', 'line1' + (val + 1), true, function() {
				callBackFunction()
			});
		});
	});	
}

function validation(selector, val) {
	$(selector).effect('highlight', {color: 'yellow'}, 500).focus();
	$(selector).on('keydown', function(e) {
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode == 9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on('keyup', function(e) {
		if ($(this).val().length == 2) {
			$('.error-text').remove();
		}
		if ($(selector).val().length != 0) {
			$('.user-btn, .errMsg').remove();
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="validationAnim(' + val + ')">Next &#8594;</a>');
			if (e.keyCode == 13) {
				validationAnim(val);
			}
		} else {
			$('.user-btn').hide();
			$('.error-text').remove();
			$('.introjs-tooltiptext').append('<div class="error-text ct-fonts errMsg">Please enter number.</div>');
		}
	});
}

function validationAnim(val) {
	$('.user-btn, .error-text').remove();
	$('#nodeVal').attr('disabled', true);
	if (val == 1) {
		posOneValidationAnim();
	} else if (val == 2) {
		posTwoValidationAnim();
	} else if (val == 3) {
		positionOneRepeatAnim();
	} else {
		positionFourAnim();
	}
}

function nodeAnim(val, callBackFunction) {
	callingNextBtn('.introjs-tooltipbuttons', function() {
		$('#node' + val).removeClass('opacity00');
		TweenMax.from("#node"+ val, 1, {top : -30, onComplete:function() {
			zoomInEffect('#tempNodeParent' + val, function() {
				animatedTooltip('#tempBox' + val, "top", "Address of the newly created node.");
				fromEffectWithTweenMax('#dataAddress' + val, '#tempNode' + val, true, function() {
					svgAnimatingLineTopAndBottom('#tempNodeParent' + val, '#nextDiv' + val, 'line11', true, function() {
						$('.introjs-tooltip').scrollTo('input', 300);
						fromEffectWithTweenMax('#nodeVal', '#data' + val, false, function() {
							$('#nodeVal').css({'color': 'white'});
							callBackFunction();
						});
					});
				});
			});
		}});
	});
}

function algorithmSteps(text, id1, id2, val, animatedStep) {
	$('#algorithmDiv ul').append('<li class="opacity00">' + text + '</li>');
	$(id2).addClass('opacity00');
	algorithmColorAnim();
	callingNextBtn('.introjs-tooltipbuttons', function() {
		$('#algorithmDiv').addClass('z-index10000');
		transferEffect(id1, id2, function() {
			$('#algorithmDiv li').not('ol li').eq(val).removeClass('opacity00');
			introNextSteps('#codeAndAlgorithmDiv', animatedStep, 'hide');
			$('.introjs-nextbutton').show();
		});
	});
}
	
function typing(typingId, typingContent, typingCallbackFunction) {
	$('.typingCursor').removeClass('typingCursor');
	$(typingId).typewriting(typingContent, {
		"typing_interval" : '1',
		"cursor_color" : 'white'
	}, function() {
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
}

function introNextSteps(stepName, animatedStep, tooltip, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
			element :stepName,
			intro :'',
			position : position,
			tooltipClass : tooltip,
			animateStep: animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({"element" : stepName});
}

function callingNextBtn(id, callBackFunction) {
	$(id).append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.introjs-tooltip').scrollTo('.introjs-tooltipbuttons a:last', 300);
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function zoomInEffect(selector1, callBackFunction) {
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass('opacity00')
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transWithZoomInEffect(selector1, selector2, callBackFunction) {
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector2).removeClass("animated zoomIn").effect('highlight', {color: 'yellow'}, 800, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	});
}

function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	if (flag) {
		$(selector2).text($(selector1).text()).addClass('opacity00');
	} else {
		$(selector2).text($(selector1).val()).addClass('opacity00');
	}
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "brown", "font-width" : "bold", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: brown;'>" + $(selector2).text() + "</span>");
	$("#dummy").offset({"top" : l2.top, "left" : l2.left});
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	$("#dummy").remove();
	$(selector2).removeClass('opacity00');
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "brown");
		$(selector1).removeClass('z-index1000000');
		if (typeof callBackFunction === "function") {
			introjs.refresh();
			callBackFunction();
		}
	}});
}

function fadeInBounceEffectWithTimelineMax(selector1, selector2, flag, val, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("body").append("<span id='dummy' class='ct-brown-color ct-fonts' style='position: relative;z-index: 9999999;'>" 
					+ $(selector2).text() + "</span>");
		$('#dummy').offset({"top": l2.top, "left": l2.left});
		$(selector2).text($(selector1).text());
		TweenLite.from(selector2, 2.8, {ease: Bounce.easeOut, top: topLength, left: leftLength});
		if (flag) {
			TweenLite.to('#dummy', 1.5, {ease: Sine.easeOut, left: val, delay : 1.1, opacity:0 , onComplete: function() {
				bounceAnim(selector1, selector2, callBackFunction);
			}});
		} else {
			TweenLite.to('#dummy', 1.5, {ease: Sine.easeOut, top: val , delay : 1.1, opacity:0 , onComplete: function() {
				bounceAnim(selector1, selector2, callBackFunction);
			}});
		}
	});
}

function bounceAnim(selector1, selector2, callBackFunction) {
	$(selector2).removeAttr("style");
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
	$(selector2).text($(selector1).text());
	$("body").removeAttr("style");			
	$('#dummy').remove();
}

function svgAppend(selector) {
	var code = '<svg class="svg-css" id="svgId"></svg>';
	$(selector).append(code);
	svgMarkerAppend();
}

function svgMarkerAppend() {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', 'arrow');
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$("#svgId").append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#arrow').append(path);
}

function svgLineAppend(svgLineId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
}

function svgAnimatingLineRightToLeft(selector1, selector2, svgLineId, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 1.5;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 1.5;
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineLeftToRight(selector1, selector2, svgLineId, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 5;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 5;
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineTopAndBottom(selector1, selector2, svgLineId, flag, callBackFunction) {
	var parentOffset = $("#animationDiv").offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	if (flag) {
		var y1 = $(selector1).offset().top - parentOffset.top;
		var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else {
		var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
		var y2 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function lineAnim(svgLineId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
	}});
}