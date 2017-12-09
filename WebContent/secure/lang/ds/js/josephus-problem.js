var intro, printfCount = 1, nodeCount = 1;
var arr = ["sName", "i", "n"], dummmyArr = ["q", "temp", "first"];
function josephusProblemReady() {
	$('pre div').addClass('position-css');
	for (var i = 0; i < 3; i++) {
		appendVariables(arr[0]);
		appendVariableNodes(dummmyArr[0], "main");
		arr.shift();
		dummmyArr.shift();
	}
	svgAppend();
	initIntroJS();
	/*for (var i = 1; i < 13; i++) {
		appendListNodes(i);
		$('#output').append(' --> ' + $('#name' + i).text());
	}*/
}

function preBtnEvent() {
	$('.introjs-button').click(function () {
		$('#includePre').parent().css({'display': 'none'});
		$('#includeBtn').css({'display': 'inline'});
		introjs.refresh();
	});
	$('#includeBtn').click(function () {
		$('#includePre').parent().css({'display': 'inline'});
		$('#includeBtn').css({'display': 'none'});
		introjs.refresh();
	});
}

function appendVariables(varName) {
	$('#variablesDiv').append('<div class="col-xs-2 text-center padding0 opacity00" id="' + varName + 'VarDec"><b>'
			 			+ varName + '</b> <b>=</b> <b class="border-css"><span id="' + varName + 'VarVal">' + varName + '</span></b></div>');
	if (varName == "sName") {
		$('#sNameVarDec').removeClass('col-xs-2').addClass('col-xs-3');
	}
	$('#' + varName + 'VarVal').addClass('opacity00 position-css');
	$('#variablesDiv > div:not(:first)').addClass('margin-top15');
}

function appendVariableNodes(nodeNme, subNme) {
	var sub = subNme.charAt(0).toUpperCase() + subNme.substring(1, subNme.length); 
	$('#variableNodesDiv').append('<div class="col-xs-1 text-center padding0 margin-left opacity00" id="' + nodeNme + 'VarDec' + sub + '">'
							+ '<div class="col-xs-12 box" id="' + nodeNme + sub + '">'
							+ '<span id="' + nodeNme + 'Val' + sub + '" class="brown-color">1248</span></div>'
							+ '<div class="col-xs-12 green-color padding0">' + nodeNme + '<sub>' + subNme + '</sub></div></div>');
	$('#' + nodeNme + 'Val' + sub).addClass('opacity00 position-css');
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function appendListNodes(count) {
	var randomAddress = getRandomInt(1000, 5000);
	var x = '<div class="col-xs-2 nodes opacity00" id="node' + count + '" style="top: 0px; width: auto;">'
			+ ' <div class="col-xs-12 padding0"><div class="col-xs-8 blue-color padding0 text-center">name</div>'
			+ ' <div class="green-color text-center">next</div></div>'
			+ ' <div id="nodedata' + count + '" class="data-nodes"><div id="nameDiv' + count + '" class="div-border left-radius col-xs-6 name-div">'
			+ ' <span id="name' + count +'" class="name-span position-css blue-color opacity00" style="top: 3px;"></span></div>'
			+ ' <div id="nextDiv' + count +'" class="div-border right-radius col-xs-6 next-div">'
			+ ' <span id="next' + count +'" class="next-span position-css green-color opacity00" style="top: 3px;">NULL</span></div>'
			+ ' </div><div class="col-xs-12 padding0"><div class="col-xs-8 padding0 text-center">'
			+ ' <span id="dataAddress' + count + '" class="position-css data-address padding0 brown-color">' + randomAddress 
			+ ' </span></div></div></div>';
	if ($('.nodes').length < 6) {
		$('#row1').append(x);
	} else {
		if (count == 7) {
			var w = ($('.nodes:last').offset().left + $('.nodes:last').outerWidth()) - $("#nodesDiv").offset().left;
			$('#row2').addClass('margin-top15').css({'width' : w + 'px'});
		}
		$('#row2').append(x);
		$('#row2 .nodes').css('float', 'right');
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		keyboardNavigation: false,
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		steps : [ {
				element : '#headingSection',
				intro : '',
				position : 'right'
			}, {
				element : '#includePre',
				intro: '',
				tooltipClass: 'hide'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch(elementId) {
			case "headingSection":
				text = "Josephus problem";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			break;
			case 'strCmpWhileLoop':
			case 'mainPre':
			case 'includePre':
				$('.introjs-helperLayer').one('transitionend', function() {
					var stepId;
					if (elementId == 'strCmpWhileLoop') {
						$('.zindex-css, .background-yellow').removeClass('background-yellow zindex-css');
						stepId = '#strCmpCond';
						$('.user-txt:last').attr('disabled', 'disabled');
					} else {
						$('#codeDiv').removeClass('opacity00');
						stepId = (elementId == 'includePre') ? '#structDec' : '#nodesDecInMain';
					}
					customIntroNextStep(stepId, '', 'show', 'right');
				});
			break;
			case 'structDec':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'This is the declaration of a new struct type <y>list</y>.<br>'
					    	+ ' <ul><li><y>name</y> field is used to hold the <y>name</y> inside the linked list.</li>'
					    	+ '<li><y>next</y> field is used to keep the <y>address of next node</y>.</ul>';
					typing('.introjs-tooltiptext', text, function() {
						nextStepWithBtn('#typeDefDec', '', 'show');
					});
				});
			break;
			case 'typeDefDec':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'The <y>typedef</y> creates a <y>node</y> as a new type <y>pointer</y> to <y>struct list</y>.';
					typing('.introjs-tooltiptext', text, function() {
						nextStepWithBtn('#mainPre', '', 'hide');
						$('#mainPre').removeClass('hide');
					});
				});
			break;
			case 'nodesDecInMain':
				$('#includePre').parent().css({'display': 'none'});
				$('#includeBtn').css({'display': 'inline'});
				preBtnEvent();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul></ul>');
					text = 'Let us declare three int variables <y>q</y>, <y>temp</y>, <y>first</y>.';
					movingArrowWithLiTyping('#mainPre', '#nodesDecInMain span:first', '#nodesDecInMain span:first', text, function() {
						text = 'Let us initialize <y>first</y> with <y>NULL</y>.';
						movingArrowWithLiTyping('#mainPre', '#nodesDecInMain span:first', '#nodesDecInMain span:last', text, function() {
							nextStepWithBtn('#animationDiv', 'decQTempFirst', 'hide');
						});
					});
				});
			break;
			case 'endSNmeIAndNDec':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul></ul>');
					text = 'Let us declare a variable <y>sName</y> of type <y>char</y>.';
					movingArrowWithLiTyping('#mainPre', '#nodesDecInMain span:last', '#endSNmeIAndNDec span:eq(0)', text, function() {
						text = 'Let us declare two variable <y>i</y> and <y>n</y> of type <y>int</y>.';
						movingArrowWithLiTyping('#mainPre', '#endSNmeIAndNDec span:eq(0)', '#endSNmeIAndNDec span:eq(1)', text, function() {
							nextStepWithBtn('#animationDiv', 'decEndSnameIN', 'hide');
						});
					});
				});
			break;
			case 'animationDiv':
				$('#animationDiv').removeClass('opacity00');
				$('.background-yellow').removeClass('background-yellow');
				$('.arrow').remove();
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'decQTempFirst':
							arr = ['#qVarDecMain', '#tempVarDecMain', '#firstVarDecMain', '#firstValMain'];
							dummmyArr = ['first', 'first', 'first', 'last'];
							arrWithRecursiveFunction('#nodesDecInMain', '#endSNmeIAndNDec', '', 'show', 'right')
						break;
						case 'decEndSnameIN':
							arr = ['#sNameVarDec', '#iVarDec', '#nVarDec'];
							dummmyArr = ['first', 'eq(1)', 'eq(1)'];
							$('#output div').removeAttr('class');
							arrWithRecursiveFunction('#endSNmeIAndNDec', '#printf1', 'enterSoldierName', 'hide');
						break;
						case 'assignNameNext':
							arr = ['#name' + nodeCount, '#next' + nodeCount];
							dummmyArr = ['first', 'last'];
							arrWithRecursiveFunction('#assignNameNextVal', '#ifFirstIsNull', '', 'show');
						break;
						case 'EliminateVal':
						case 'SoldierName':
							var stepId, value;
							if (animateStep == 'SoldierName') {
								value = '#sName';
								stepId = '#strCmpCond';
							} else {
								value = '#n';
								stepId = '#whileCond';	//write here
							}
							$(value + 'VarVal').text($('.user-txt:last').val());
							fromEffect('.user-txt:last', value + 'VarVal', function() {
								if ($('input').length == 1) {
									customIntroNextStep('#strCmpWhileLoop', '', 'hide');
								} else {
									customIntroNextStep(stepId, '', 'show', 'right');
								}
							});
						break;
						case 'nodeMemAllo':
							text = 'Let us assume <y>malloc()</y> allocates a memory to its members <y>name</y> and <y>next</y> at address'
									+ ' <y>' + $("#dataAddress" + nodeCount).text().trim() +'</y>.';
							typing('.introjs-tooltiptext' , text, function() {
								appendNextButton('displayNodeNameAndNext');
							});
						break;
						case 'storeTempInFirstRQNext':
							var val = ($('#firstValMain').text() == "NULL") ? '1' : '2';
							$('#ifFirstIsNull span:eq(' + val + ')').addClass('zindex-css');
							if (nodeCount == 1) {
								bounceEffect('#tempValMain', '#firstValMain', false, '-750px', function() {
									svgAnimatingLineTopAndBottom($('#firstVarDecMain > div:eq(1)'), '#nextDiv1', 'line22', false, function() {
										customIntroNextStep('#tempToQ', '', 'show');
									});
								});
							} else {
								$('#qMain').effect('highlight', {color: 'blue'}, 500, function() {
									svgAnimatingLineTopAndBottom('#qMain', '#nextDiv' + (nodeCount - 1), 'line24', true, function() {
										$('#line24').remove();
										bounceEffect('#tempValMain', '#next' + (nodeCount - 1), false, '-750px', function() {
											basedOnRowLineReveal(nodeCount);
											setTimeout(function() {
												customIntroNextStep('#tempToQ', '', 'show');
											}, 1200);
										});
									});
								});
							}
						break;
						case 'tempToQ':
							(nodeCount == 1) ? $('#qValMain').text($('#tempValMain').text()) : '';
							fromEffectAndBounceAnim('#tempValMain', '#qValMain', true, '20px', function() {
								$('#line23').remove();
								svgAnimatingLineTopAndBottom('#qMain', '#nextDiv' + nodeCount, 'line23', true, function() {
									printfCount = 2;
									nodeCount++;
									customIntroNextStep('#printf2', 'enterSoldierName', 'hide');
								});
							});
						break;
						case 'firstToQNext':
							bounceEffect('#firstValMain', '.next-span:last', false, '10px', function() {
								svgCurve('.nodes:last');
								printfCount++;
								setTimeout(function() {
									customIntroNextStep('#printf3', 'soldierName', 'hide');
								}, 500);
							});
						break;
						case 'qToQNext':
							$('#printPre span:eq(3)').addClass('background-yellow');
							$('#qPrint').effect('highlight', {color: 'blue'}, 500, function() {
								svgAnimatingLineTopAndBottom('#qPrint', '#nextDiv' + nodeCount, 'line26', true, function() {
									bounceEffect('#next' + nodeCount, '#qValPrint', false, '10px', function() {
										$('#line25, #line26').remove();
										nodeCount++;
										var count = ($('#next' + (nodeCount - 1)).text() != $('#firstValPrint').text()) ? nodeCount : '1';
										svgAnimatingLineTopAndBottom('#qPrint', '#nextDiv' + count, 'line25', true, function() {
											customIntroNextStep('#printPre', 'whileQNotFirst', 'hide', 'left');
										});
									});
								});
							});
						break;
					}
				});
			break;
			case 'printf' + printfCount :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'enterEliminateVal':
						case 'enterSoldierName':
							$('.zindex-css, .background-yellow').removeClass('background-yellow zindex-css');
							$('.arrow').remove();
							$('#printf' + printfCount).addClass('zindex-css');
							var text, val;
							if (animateStep == 'enterSoldierName') {
								text = 'Enter Name of the Soldier : ';
								val = '10';
							} else {
								$('#printPre').addClass('hide');
								$('#firstVarDecPrint, #qVarDecPrint, #line25, #line24').remove();
								text = 'Enter a val : ';
								val = '2';
							}
							$('#output').append('<div class="opacity00">' + text 
									+ ' <input class="user-txt" maxlength="' + val + '" size="' + val +'"/></div>');
							customIntroNextStep('#outputDiv', animateStep, 'show', 'left');
						break;
						case 'soldierName':
							$('#output').append('<div class="opacity00">The Original Soldiers List is --> </div>');
							customIntroNextStep('#outputDiv', 'soldierNameIs', 'hide');
						break;
					}
				});
			break;
			case 'outputDiv':
				$('#outputDiv').removeClass('opacity00');
				$('#output').scrollTo('div:last', 100);
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'enterEliminateVal':
						case 'enterSoldierName':
							var stepId = animateStep.substring(5, animateStep.length);
							$('#outputDiv div:last').removeClass('opacity00').removeAttr('style');
							var text = (stepId == 'SoldierName') ? 'Enter name of the soldier.' : 'Enter a value to eliminate the soldier.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps('#animationDiv', stepId, 'hide');
								(stepId == 'SoldierName') ? validation(false) : validation(true);
							});
						break;
						case 'printNULL':
						case 'soldierNameIs':
							TweenMax.to($('#output div:last'), 0.5, {opacity : 1, onComplete: function() {
								$('#outputDiv div:last').removeClass('opacity00');
								if (animateStep == 'printNULL') {
									$('.arrow').remove();
									$('.background-yellow, .zindex-css').removeClass('background-yellow zindex-css');
									printfCount++;
									customIntroNextStep('#printf4', 'enterEliminateVal', 'hide');
								} else {
									customIntroNextStep('#callingPrintMethod', '', 'show');
								}
							}});
						break;
						case 'soldierList':
							$('#animationDiv').addClass('zindex-css');
							$('#output div:last').append(' <span class="opacity00 position-css ct-code-b-yellow">' 
										+ $("#name" + nodeCount).text().trim() + ' --> </span>');
							soldiersListAnim(nodeCount, function() {
								$('#animationDiv').removeClass('zindex-css');
								customIntroNextStep('#printPre', 'qToQNext', 'hide', 'left');
							});
						break;
					}
				});
			break;
			case 'strCmpCond':
				$('.zindex-css').removeClass('zindex-css');
				$('.user-txt:last').attr('disabled', 'disabled');
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'The <y>strcmp()</y> function compares two strings and returns <y>0</y> if both strings are identical.<br>'
							+ ' <span class="ct-code-b-yellow opacity00" id="mainCond"><span id="fstVal">strcmp(<span id="secondVal">'
							+ 'sName</span>, "end")</span> != 0</span>';
					$('.introjs-tooltiptext').append(text);
					$('.introjs-tooltiptext span').addClass('position-css');
					fromEffect('#strCmpCond', '#mainCond', function() {
						callingNextButton(function() {
							flipEffect('#secondVal', "\"" + $('#sNameVarVal').text() + "\"", function() {
								var value = $('#sNameVarVal').text().toLowerCase().localeCompare("end");
								var flipVal = (value == 0) ? 0 : ($('#sNameVarVal').text().length > 3) ? 1 : -1;
								flipEffect('#fstVal', flipVal, function() {
									appendCondCheckingText('.introjs-tooltiptext', (value != 0), (value != 0), 'while-loop', function() {
										var stepId = (value != 0) ? '#allocMemory' : '#firstToQNext'; 
										nextStepWithBtn(stepId, '', 'show');
									});
								});
							});
						});
					});
				});
			break;
			case 'allocMemory':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<ul><li class = "opacity00" id="li1">The <y>sizeof(struct list)</y> returns the size '
							+ ' occupied by a list node which contains <y>two</y> fields <y>name</y> and <y>next</y>.</li>'
							+ ' <li class = "opacity00" id="li2">The <y>malloc()</y> function allocates memory <y>dynamically</y>'
							+ ' to the size that is occuiped by the <y>list</y> return by the above statement.</li>'
							+ ' <li class = "opacity00" id="li3">The address returned by the <y>malloc()</y> is '
							+ ' stored in <y>temp</y>.</li></ul>'
					$(".introjs-tooltiptext").append(text);
					TweenMax.to('#li1', 1, {opacity: 1, onComplete: function() {
						TweenMax.to('#li2', 1, {opacity: 1, onComplete: function() {
							TweenMax.to('#li3', 1, {opacity: 1, onComplete: function() {
								if ($('.nodes').length == 6) {
									$('#line21, #line23').remove();
									appendListNodes(nodeCount);
									svgAnimatingLineTopAndBottom('#tempMain', '#nextDiv' + (nodeCount - 1), 'line21', true);
									svgAnimatingLineTopAndBottom('#qMain', '#nextDiv' + (nodeCount - 1), 'line23', true);
								} else {
									appendListNodes(nodeCount);
								}
								nextStepWithBtn("#animationDiv", "nodeMemAllo", 'show');
							}});
						}});
					}});
				});
			break;
			case 'assignNameNextVal':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('<ul></ul>');
					text = 'The <y>strcpy()</y> function copies the string to the another character array.<br>';
					movingArrowWithLiTyping('#mainPre', '#assignNameNextVal span:first', '#assignNameNextVal span:first', text, function() {
						text = '<span class="opacity00 ct-code-b-yellow" id="mainCond">strcpy(temp -> name, <span id="fstVal">sName</span>);</span>';
						$('.introjs-tooltiptext li').append(text);
						$('.introjs-tooltiptext li span').addClass('position-css');
						fromEffect('#assignNameNextVal span:first', '#mainCond', function() {
							callingNextButton(function() {
								flipEffect('#fstVal', '"' + $('#sNameVarVal').text() + '"', function() {
									flipEffect('#mainCond', '"' + $('#sNameVarVal').text() + '"', function() {
										text = '<y>next</y> member of the <y>temp</y> node is initialize with <y>NULL</y>.';
										movingArrowWithLiTyping('#mainPre', '#assignNameNextVal span:first', '#assignNameNextVal span:last',
												text, function() {
											nextStepWithBtn('#animationDiv', 'assignNameNext', 'hide');
										});
									});
								});
							});
						});
					});
				});
			break;
			case 'ifFirstIsNull':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
					arrow('#mainPre', '#ifFirstIsNull span:first', '#ifFirstIsNull span:first', function() {
						var condVal = $('#firstValMain').text() == "NULL";
						$('.introjs-tooltiptext').append('<ul><li></li></ul>');
						var val, selectorText, flagText;
						if (condVal) {
							val = '1';
							selectorText = 'first';
							flagText = 'if';
						} else {
							val = '2';
							selectorText = 'q -> next';
							flagText = 'else';
						}
						appendCondText('.introjs-tooltiptext li:last', '#ifFirstIsNull span:first', 'first ', '==', ' NULL', false,  
								 $('#firstValMain').text(), "NULL", true, condVal, flagText, function() {
							callingNextButton(function() {
								text = 'Now <y>temp</y> value (i.e., <y>' + $('#tempValMain').text().trim() + '</y>) is stored in <y>' 
										+ selectorText + '</y>.';
								var selector = '#ifFirstIsNull span:eq';
								 movingArrowWithLiTyping('#mainPre', selector + '(0)', selector + '(' + val + ')', text, function() {
									 nextStepWithBtn('#animationDiv', 'storeTempInFirstRQNext', 'hide');
								 });
							});
						});
					});
				});
			break;
			case 'firstToQNext':
			case 'tempToQ':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
					var str = elementId.substring(0, elementId.search('To'))
					var val = (elementId == 'firstToQNext') ? 'q -> next' : 'q';
					text = 'Now the <y>' + str + '</y> value (i.e., <y>' + $('#' + str + 'ValMain').text().trim() + '</y>) is stored in <y>'
							+ val + '</y>.';
					typing('.introjs-tooltiptext', text, function() {
						nextStepWithBtn('#animationDiv', elementId, 'hide');
					});
				});
			break;
			case 'callingPrintMethod':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Here we are calling <y>print</y> method and passing <y>first</y> (i.e., <y>' + $('#firstValMain').text().trim()
							+ '</y>) as argument.';
					typing('.introjs-tooltiptext', text, function() {
						$('#variableNodesDiv #firstVarDecMain').remove();
						appendVariableNodes("first", "print");
						appendVariableNodes("q", "print");
						$('#printPre').removeClass('hide').addClass('opacity00');
						nextStepWithBtn('#printPre', 'methodExpalin', 'hide', 'left');
					});
				});
			break;
			case 'printPre':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'methodExpalin':
							$('#printPre').removeClass('opacity00');
							$('#animationDiv').addClass('zindex-css');
							inPrintQAndFirstAnim('#firstDecPrint', '#firstVarDecPrint', '24', '#printPre', 'span:eq(1)', 'span:eq(1)' , function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Let us initialize <y>q</y> with <y>first</y> value (i.e., <y>' + $('#firstValMain').text() + '</y>).';
								typingWithUserBtn('.introjs-tooltiptext', text, function() {
									inPrintQAndFirstAnim('#printPre span:eq(1)', '#qVarDecPrint', '25', '#printPre', 'span:eq(1)', 'div', function() {
										text = 'Now control enters into the <y>do-while-loop</y> block.';
										typingWithUserBtn('.introjs-tooltiptext', text, function() {
											$('.introjs-tooltip').addClass('hide');
											nodeCount = 1;
											arrow('#printPre', '#printPre div', '#printPre span:eq(2)', function() {
												customIntroNextStep('#outputDiv', 'soldierList', 'hide');
											});
										});
									});
								});
							});
						break;
						case 'qToQNext':
							arrow('#printPre', '#printPre span:eq(2)', '#printPre span:eq(3)', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Now store the <y>q -> next</y> value (i.e., <y>' + $('#next' + nodeCount).text().trim() + '</y>) in <y>q</y>.';
								typing('.introjs-tooltiptext', text, function() {
									nextStepWithBtn('#animationDiv', 'qToQNext', 'hide');
								});
							});
						break;
						case 'whileQNotFirst':
							arrow('#printPre', '#printPre span:eq(3)', '#printPre span:eq(4)', function() {
								$('.introjs-tooltip').removeClass('hide');
								var val = $('#qValPrint').text() != $('#firstValPrint').text()
								appendCondText('.introjs-tooltiptext', '#printPre span:eq(4)', 'q', '!=', 'first', true, $('#qValPrint').text(),
											$('#firstValPrint').text(), val, val, 'do-while', function(){
									callingNextButton(function() {
										var selector, stepId;
										if (val) {
											selector = '#printPre span:eq(2)';
											stepId = 'soldierList';
										} else {
											$('.introjs-tooltip').addClass('hide');
											selector = '#printPre span:last';
											stepId = 'printNULL';
											$('#output div:last').append(' <div class="ct-code-b-yellow opacity00 position-css">NULL</div>');
										}
										arrow('#printPre', '#printPre span:eq(4)', selector, function() {
											customIntroNextStep('#outputDiv', stepId, 'hide');
										});
									});
								});
							});
						break;
						case 'whileCondExplain':
							arrow('#printPre', '#firstIsNotFirstNext', '#firstIsNotFirstNext', function() {
								$('.introjs-tooltip').removeClass('hide');
								/*for (var i = 0; i < $('.next-span').length; i++) {
									arr.push($('.next-span').eq(i).text());
								}
								function findEqualNumber(elem) {
									return elem == $('#firstValMain').text();
								}*/
								var val = $('#firstValMain').text() != $('#next' + nodeCount).text();
								appendCondText('.introjs-tooltiptext', 'firstIsNotFirstNext', 'first', '!=', 'first -> next',
										true, $('#firstValMain').text(), $('#next' + nodeCount).text(), val, val, 'while-loop', function() {
									if (val) {
										appendNextButton('soldierEliminationAnim');
									}
								});
							});
						break;
					}
				});
			break;
			case 'whileCond':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#printPre').html($('#whileCond').html()).addClass('opacity00').removeClass('hide');
					nodeCount = 1;
					customIntroNextStep('#printPre', 'whileCondExplain', 'show', 'left');
				});
			break;
		}
	});
	introjs.start();
}

function soldierEliminationAnim() {
	$('.user-btn').remove();
	arrow('#printPre', '#firstIsNotFirstNext', '#forLoop', function() {
		printfCount = 1;
		$('#iVarVal').text(printfCount);
		fromEffect('#iInit', '#iVarVal', function() {
			var val = printfCount < $('#nVarVal').text();
			appendCondText('.introjs-tooltiptext', 'iLessThanN', 'i', '<', 'n',	true, printfCount, $('#nVarVal').text(),
						val, val, 'for-loop', function() {
				callingNextButton(function() {
					
				});
			});
		});
	});
}

function basedOnRowLineReveal(val) {
	if (val < 7) {
		svgAnimatingLineRightAndLeft('#nextDiv' + (val - 1), '#nameDiv' + val, 'line' + val, true);
	} else if (val == 7) {
		svgAnimatingLineTopAndBottom('#nextDiv' + (val - 1), '#nextDiv' + val, 'line' + val, false);
	} else {
		svgAnimatingLineRightAndLeft('#nameDiv' + (val - 1), '#nextDiv' + val, 'line' + val, false);
	}
}

function displayNodeNameAndNext() {
	$('.user-btn').remove();
	var address = $("#dataAddress" + nodeCount).text().trim();
	$('#node' + nodeCount).removeClass('opacity00');
	TweenMax.from($('#node' + nodeCount), 1, {top : -50, onComplete: function() {
		text = 'Now, the <y>address</y> (i.e., <y>' + address +'</y>) of the memory allocated by the <y>malloc()</y> method is stored in <y>temp</y>.';
		typing('.introjs-tooltiptext' , text, function() {
			callingNextButton(function() {
				$('#tempValMain').text(address);
				$('#name' + nodeCount).text($('#sNameVarVal').text());
				fromEffectAndBounceAnim('#dataAddress' + nodeCount, '#tempValMain', false, '50px', function() {
					$('#line21').remove();
					svgAnimatingLineTopAndBottom('#tempMain', '#nextDiv' + nodeCount, 'line21', true, function() {
						nextStepWithBtn('#assignNameNextVal', '', 'show');
					});
				});
			});
		});
	}});
}

function soldiersListAnim(count, callBackFunction) {
	$('#qPrint').effect('highlight', {color: 'blue'}, 500, function() {
		svgAnimatingLineTopAndBottom('#qPrint', '#nextDiv' + count, 'line0', true, function() {
	    	$('#nameDiv' + count).effect('highlight', {color: 'yellow'}, 500, function() {
	    		$('#line0').remove();
				fromEffect('#name' + count, '#output span:last', function() {
					callBackFunction();
				});
			});
		});
	});
}

function arrWithRecursiveFunction(selector1, selector2, animatieStep, tooltip, position) {
	$(selector1).addClass('zindex-css');
	recursiveZoomIn(selector1 + ' span:', 0, function() {
		customIntroNextStep(selector2, animatieStep, tooltip, position);
	});
}

function typingWithUserBtn(selector, text, callBackFunction) {
	typing(selector, text, function() {
		callingNextButton(function() {
			callBackFunction();
		});
	});
}

function inPrintQAndFirstAnim(selector1, selector2, val, selector3, id1, id2, callBackFunction) {
	transferEffect(selector1, selector2, function() {
		$(selector2 + ' .position-css').text($('#firstValMain').text());
		fromEffect('#firstValMain', selector2 + ' .position-css', function() {
			svgAnimatingLineTopAndBottom(selector2, '#nextDiv1', 'line' + val, true, function() {
				arrow(selector3, selector3 + ' ' + id1, selector3 + ' ' + id2, function() {
					callBackFunction();
				});
			});
		});
	});
}

function fromEffectAndBounceAnim(selector1, selector2, pos, val, callBackFunction) {
	if (nodeCount == 1) {
		fromEffect(selector1, selector2, function() {
			callBackFunction();
		});
	} else {
		bounceEffect(selector1, selector2, pos, val, function() {
			callBackFunction();
		});
	}
}

function typing(typingId, typingContent, callBackFunction) {
	$(typingId).typewriting(typingContent, {
		'typing_interval' : '1',
		'cursor_color' : 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		callBackFunction();
	});
}

function liTyping(text, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li></li>');
	typing('.introjs-tooltiptext li:last', text, function() {
		callBackFunction();
	});
}

function movingArrowWithLiTyping(parentId, fromId, toId, text, callBackFunction) {
	arrow(parentId, fromId, toId, function() {
		liTyping(text, function() {
			callBackFunction();
		});
	});
}

function zoomInWithHighlight(selector1, selector2, callBackFunction) {
	$('.background-yellow').removeClass('background-yellow');
	$(selector1).addClass('background-yellow');
	zoomInEffect(selector2, function() {
		callBackFunction();
	});
}

function introNextSteps(stepName, animatedStep, tooltip, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var newStep = {
			element : stepName,
			intro : '',
			animateStep : animatedStep,
			tooltipClass : tooltip,
			position : position
	}
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

function nextStepWithBtn(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	$('.introjs-nextbutton').show();
}

function customIntroNextStep(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function appendNextButton(methodName) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="' + methodName + '()">Next &#8594;</a>');
}

function callingNextButton(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
} 

function recursiveZoomIn(parentId, i, callBackFunction) {
	if (i < arr.length) {
		(arr[0] == '#name' + nodeCount) ? $(arr[i]).parent().effect('highlight', {color: 'yellow'}, 500) : '';
		$(parentId + dummmyArr[i]).effect('highlight', {color: 'yellow'}, 1000);
		zoomInWithHighlight(parentId + dummmyArr[i], arr[i], function() {
			recursiveZoomIn(parentId, ++i, callBackFunction);
		});
	} else {
		arr = dummmyArr = [];
		callBackFunction();
	}
}

function appendCondCheckingText(selector1, flag, condFlag, flagText, callBackFunction) {
	$(selector1).append('<br><div id="appendText"></div>')
	if (flag) {
		text = '<y>' + condFlag + '</y>. Hence control enters into the <y>' + flagText + '-block</y>.'
	} else {
		text = '<y>' + condFlag + '</y>. Hence control comes out of the <y>' + flagText + '-block</y>.'
	}
	typing('#appendText', 'Condition evaluates to ' + text, function() {
		callBackFunction();
	});
}

function appendCondText(selector1, selector2, text1, cond, text2, flag, val1, val2, textFlag, condFlag, flagText, callBackFunction) {
	text = 'Now check the condition : <br><span id="mainCond" class="ct-code-b-yellow opacity00"><span id="firstVal"> ' + text1 +  '</span> ' + cond 
			+ ' <span id="secondVal">' + text2 + '</span></span>';
	$(selector1).append(text);
	$(selector1 + ' span').addClass('position-css');
	fromEffect(selector2, '#mainCond', function() {
		callingNextButton(function() {
			flipEffect('#firstVal', val1, function() {
				if (flag) {
					flipEffect('#secondVal', val2, function() {});
				}
				setTimeout(function() {
					appendCondCheckingText(selector1, textFlag, condFlag, flagText, callBackFunction);
				}, 1200);
				//if (eval(val1 + cond + val2)) {
			});
		});
	});
}

function flipEffect(selector, val, callBackFunction) {
	$(selector).effect('highlight', {color: 'yellow'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete: function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete: function() {
				callBackFunction();
			}});
		}});
	});
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('zindex-css').effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).effect("transfer", { to: $(selector2), className: "ui-effects-transfer" }, 800 , function() {
			$(selector1).removeClass('zindex-css');
			$(selector2).removeClass('opacity00');
			callBackFunction();
		});
	});
}


function fromEffect(fromId, toId, callBackFunction) {
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(fromId).effect('highlight', {color: 'yellow'}, 800);
	$(toId).removeClass('opacity00');
	TweenMax.from($(toId), 1, {top: topLength, left: leftLength, onComplete: function() {
		callBackFunction();
	}});
}

function arrow(parentId, fromId, toId, callBackFunction) {
	$('.arrow').remove();
	$('.background-yellow').removeClass('background-yellow');
	$(toId).addClass('background-yellow');
	$(parentId).append("<i class='fa fa-arrow-right arrow animated' style='position: absolute; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({'top': l.top, 'left': l.left - ($('.arrow').outerWidth())});
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


function bounceEffect(selector1, selector2, flag, val, callBackFunction) {
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 800, function() {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		TweenLite.from(selector2, 2.8, {ease: Bounce.easeOut, top: topLength, left: leftLength});
		$("body").append("<span id='dummy' class='brown-color' style='position: relative;z-index: 9999999;'>" + $(selector2).text() + "</span>");
		$(selector2).text($(selector1).text());
		$('#dummy').offset({"top": l2.top, "left": l2.left});
		($(selector2).parent().hasClass("div-border")) ? $("#dummy").css('font-size', '10px') : '';
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

function validation(flag) {
	$('.user-txt:last').focus();
	$('.user-txt').keydown(function(e) {
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (flag &&	((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) || e.keyCode == 13)) {
			e.preventDefault();
		}
	});
	$('.user-txt').keyup(function(e) {
		if ($(this).val().length > 0) {
			$('.introjs-nextbutton').show();
			if (e.keyCode == 13) {
				introjs.nextStep();
			}
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}

function svgAppend() {
	var code = '<svg class="svg-css" id="svgId"></svg>';
	$('#animationDiv').append(code);
	svgMarkerAppend();
}

function svgMarkerAppend(curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', 'arrow');
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$('#svgId').append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#arrow').append(path);
}

function svgLineAppend(svgLineId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#arrow")';
	$('#svgId').append(line);
}

function svgAnimatingLineRightAndLeft(selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $('#animationDiv').offset();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	var x1, x2;
	if (lineFlag) {	//RightToLeft
		x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
		x2 = $(selector2).offset().left - parentOffset.left;
	} else {	//LeftToRight
		x1 = $(selector1).offset().left - parentOffset.left;
		x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth();
	}
	lineAnimation(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function svgAnimatingLineTopAndBottom(selector1, selector2, svgLineId, lineFlag, callBackFunction) {
	var parentOffset = $('#animationDiv').offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left + $(selector2).outerWidth() / 2;
	var y1, y2;
	if (lineFlag) {	//TopToBottom
		y1 = $(selector1).offset().top - parentOffset.top;
		y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight();
	} else { //BottomToTop
		y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight();
		y2 = $(selector2).offset().top - parentOffset.top;
	}
	lineAnimation(svgLineId, x1, y1, x2, y2, callBackFunction);
}

function lineAnimation(svgLineId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//svgCurve('#node1');
function svgCurve(selector) {
	$("polyline").remove();
	var x = ($(selector).offset().left - $("#animationDiv").offset().left) + $(selector).width() + 10;
	var y = ($(selector).offset().top - $("#animationDiv").offset().top) + $(selector).outerHeight() / 2 - 0.5;
	var x1 = x + ($(selector).width() / 5);
	var y1 = y;
	var x2 = x1;
	var y2 = y + 20 - ($(selector).outerHeight());
	var x3 = ($('#nameDiv1').offset().left - $("#animationDiv").offset().left) - ($('#nameDiv1').outerWidth() / 3) + 2;
	var y3 = y2;
	var x4 = x3;
	var y4 = ($('#nameDiv1').offset().top - $("#animationDiv").offset().top) + $('#nameDiv1').outerHeight() / 2 - 0.5;
	var x5 = ($('#nameDiv1').offset().left - $("#animationDiv").offset().left);
	var y5 = y4; 		
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line curve");
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 + " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("polyline", 1, {attr: {points : points}});
	},500);
}













