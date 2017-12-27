var introjs, index = 1, position = 0, dummmyArr = [],
soldiers = Array(10).fill(0);
function josephusProgramReady() {
	$('.fa-check, .val').addClass('opacity00');
	$('pre div').addClass('position-css');
	$('#restartBtn').click(function() {
		location.reload();
	});
	initIntroJS();
}

function appendVariables(varName) {
	$('#variablesDiv').append('<div class="col-xs-2 text-center padding0 opacity00" id="' + varName + 'VarDec"><b>'
			 			+ varName + '</b> <b>=</b> <b class="border-css"><span id="' + varName + 'VarVal">' + varName + '</span></b></div>');
	if (varName == "sName") {
		$('#sNameVarDec').removeClass('col-xs-2').addClass('col-xs-4');
	}
	$('#' + varName + 'VarVal').addClass('opacity00 position-css');
	$('#variablesDiv > div:not(:first)').addClass('margin-top-20');
	$('b.border-css').css({'min-height': '0px', 'padding' : '6px'});
}

function appendVariableNodes(nodeNme, subNme) {
	var sub = subNme.charAt(0).toUpperCase() + subNme.substring(1, subNme.length); 
	$('#variableNodesDiv').append('<div class="col-xs-1 text-center padding0 margin-left opacity00" id="' + nodeNme + 'VarDec' + sub + '">'
							+ '<div class="col-xs-12 box" id="' + nodeNme + sub + '">'
							+ '<span id="' + nodeNme + 'Val' + sub + '" class="brown-color">1248</span></div>'
							+ '<div class="col-xs-12 green-color padding0">' + nodeNme + '<sub>' + subNme + '</sub></div></div>');
	$('#' + nodeNme + 'Val' + sub).addClass('opacity00 position-css');
	if (subNme == 'print') {
		$('#' + nodeNme + 'VarDec' + sub + ' sub').text('display');
	}
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
	if ($('.nodes').length < 5) {
		$('#row1').append(x);
	} else {
		if (count == 5) {
			var w = ($('.nodes:last').offset().left + $('.nodes:last').outerWidth()) - $("#nodesDiv").offset().left;
			$('#row2').addClass('margin-top15').css({'width' : w + 'px'});
		}
		$('#row2').append(x);
		$('#row2 .nodes').css('float', 'right');
	}
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

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		showBullets: false,
		steps: [ {
				element: '#headingSection',
				intro: '',
				position: 'right'
			}, {	
				element: '#kingSoldierAnimDiv',
				intro: '',
				position: 'right'
			/*}, {
				element: '#includePre',
				intro: '',
				tooltipClass: 'hide'*/
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		switch(elementId) {
			case "headingSection":
				text = 'Let us learn about <y>Josephus problem</y>.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
					/*$('#codeDiv').removeClass('hide').css('padding', '6px');
					$('#kingSoldierAnimDiv').addClass('hide');*/
				});
			break;
			case 'kingSoldierAnimDiv':
				$('.introjs-tooltip').css('min-width', '520px');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#kingSoldierAnimDiv').removeClass('opacity00');
					text = '<ul><li>There are <y>10</y> people standing in a <y>circle</y> waiting to be executed. The <y>counting</y> out begins'
							+ ' at some point in the circle and proceeds around the circle in a fixed direction.</li>'
							+ '<li>In each step, a <y>certain number of people</y> are <y>skipped</y> and the <y>next person</y> is <y>executed</y>.</li>'
							+ ' <li>The <y>elimination</y> proceeds around the <y>circle</y> (which is becoming smaller and smaller as the'
							+ ' <y>executed people are removed</y>), until only the <y>last person remains</y>, who is given <y>freedom</y>.</li>'	
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltiptext').append('<br><div id="appendText"></div>');
						text = 'Enter a value to kill the soldier <input id="killedVal" class="kill-val" maxlength="2" size="3">'
								+ '<span id="killingStatus"></span>';
						typing('#appendText', text, function() {
							eventValidation('.kill-val');
						});
					});
				});
			break;
			case 'strCmpWhileLoop':
			case 'includePre':
			case 'mainPre':
				$('.introjs-tooltip').css('min-width', '350px');
				$('#includePre, #codeDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.zindex-css, .background-yellow').removeClass('background-yellow zindex-css');
					var stepId = (elementId == 'includePre') ? '#structDec' : (elementId == 'strCmpWhileLoop') ? '#strCmpCond' : '#nodesDecInMain'; 
					customIntroNextStep(stepId, '', 'show', 'right');
				});
			break;
			case 'typeDefDec':
			case 'structDec':
				var stepId;
				if (elementId == 'structDec') {
					index = position = 0;
					soldiers = ["sName", "i", "n"], dummmyArr = ["q", "temp", "first"];
					for (var i = 0; i < 3; i++) {
						appendVariables(soldiers[0]);
						appendVariableNodes(dummmyArr[0], "main");
						soldiers.shift();
						dummmyArr.shift();
					}
					text = 'This is the declaration of a new struct type <y>list</y>.<br>'
				    		+ ' <ul><li><y>name</y> field is used to hold the <y>name</y> inside the linked list.</li>'
				    		+ '<li><y>next</y> field is used to keep the <y>address of next node</y>.</ul>';
					stepId = '#typeDefDec';
				} else {
					text = 'The <y>typedef</y> creates a <y>node</y> as a new type <y>pointer</y> to <y>struct list</y>.';
					stepId = '#mainPre';
				}
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', text, function() {
						nextStepWithBtn(stepId, '', 'hide');
					});
				});
			break;
			case 'nodesDecInMain':
				$('#includePre').parent().css({'display': 'none'});
				$('#includeBtn').css({'display': 'inline'});
				preBtnEvent();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					text1 = 'Let us declare three int variables <y>q</y>, <y>temp</y>, <y>first</y>.';
					text2 = 'Let us initialize <y>first</y> with <y>NULL</y>.';
					nodesDeclaration(text1, text2, '#nodesDecInMain span:', 'first', 'last', 'decQTempFirst');
				});
			break;
			case 'endSNmeIAndNDec':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
					text1 = 'Let us declare a variable <y>sName</y> of type <y>char</y>.';
					text2 = 'Let us declare two variable <y>i</y> and <y>n</y> of type <y>int</y>.';
					nodesDeclaration(text1, text2, '#endSNmeIAndNDec span:', 'first', 'eq(1)', 'decEndSnameIN');
				});
			break;
			case 'animationDiv':
				$('#animationDiv').removeClass('opacity00');
				$('.background-yellow').removeClass('background-yellow');
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'decQTempFirst':
							soldiers = ['#qVarDecMain', '#tempVarDecMain', '#firstVarDecMain', '#firstValMain'];
							dummmyArr = ['first', 'first', 'first', 'last'];
							arrWithRecursiveFunction('#nodesDecInMain', '#endSNmeIAndNDec', '', 'show', 'right')
						break;
						case 'decEndSnameIN':
							soldiers = ['#sNameVarDec', '#iVarDec', '#nVarDec'];
							dummmyArr = ['first', 'eq(1)', 'eq(1)'];
							$('#output div').removeAttr('class');
							svgAppend("svgId", "#animationDiv");
							position = 1;
							arrWithRecursiveFunction('#endSNmeIAndNDec', '#printf1', 'enterSoldierName', 'hide');
						break;
						case 'EliminateVal':
						case 'SoldierName':
							$('.err-msg').remove();
							$('.user-txt:last').attr('disabled', 'disabled');
							var stepId, value;
							if (animateStep == 'SoldierName') {
								value = '#sName';
								stepId = '#strCmpCond';
							} else {
								value = '#n';
								stepId = '#whileCond';	
								$('#nVarDec').removeClass('opacity00');
							}
							$(value + 'VarVal').text($('.user-txt:last').val());
							fromEffect('.user-txt:last', value + 'VarVal', function() {
								stepId = ($('input').length == 1) ? '#strCmpWhileLoop' : stepId; 
								customIntroNextStep(stepId, '', 'hide', 'right');
							});
						break;
						case 'nodeMemAlloc':
							$('#allocMemory').addClass('zindex-css');
							$('#allocMemory span:first').addClass('background-yellow');
							text = 'Let us assume <y>malloc()</y> allocates a memory to its members <y>name</y> and <y>next</y> at address'
									+ ' <y>' + $("#dataAddress" + index).text().trim() +'</y>.';
							typing('.introjs-tooltiptext' , text, function() {
								appendNextButton('displayNodeNameAndNext');
							});
						break;
						case 'storeTempInFirstRQNext':
							var val = ($('#firstValMain').text() == "NULL") ? '1' : '2';
							$('#ifFirstIsNull span:eq(' + val + ')').addClass('zindex-css');
							if (index == 0) {
								bounceEffect('#tempValMain', '#firstValMain', false, '-750px', function() {
									svgAnimatingLineTopAndBottom('#firstVarDecMain .box', '#nextDiv0', 'line22', false, function() {
										customIntroNextStep('#tempToQ', '', 'hide');
									});
								});
							} else {
								$('#qMain').effect('highlight', {color: 'blue'}, 600, function() {
									var l = index - 1;
									TopBottomLineWithBounce('#qMain', '#nextDiv' + l, true, '#tempValMain', '#next' + l, false, '-750px', function() {
										basedOnRowLineReveal(index);
										setTimeout(function() {
											customIntroNextStep('#tempToQ', '', 'hide');
										}, 1200);
									});
								});
							}
						break;
						case 'tempToQ':
							(index == 0) ? $('#qValMain').text($('#tempValMain').text()) : '';
							$('#tempMain').effect('highlight', {color: 'blue'}, 800);
							fromEffectAndBounceAnim('#tempValMain', '#qValMain', true, '20px', function() {
								$('#line23').remove();
								svgAnimatingLineTopAndBottom('#qMain', '#nextDiv' + index, 'line23', true, function() {
									position = 2;
									index++;
									$('#output').append('<div class="opacity00">' + 'Enter Name of the Soldier : ' 
											+ ' <input class="user-txt" maxlength="10" size="10"/></div>');
									customIntroNextStep('#outputDiv', 'enterSoldierName', 'hide');
								});
							});
						break;
						case 'firstToQNext':
							$('#qMain').effect('highlight', {color: 'blue'}, 600, function() {
								TopBottomLineWithBounce('#qMain', '.next-div:last', true, '#firstValMain', '.next-span:last', false, '1px', function() {
									svgCurve($('#' + ($('.next-div:last').attr('id'))), $('#' + ($('.name-div:first').attr('id'))), 1);
									index++;
									setTimeout(function() {
										$('#output').append('<div class="opacity00">The Original Soldiers List is --> </div>');
										customIntroNextStep('#outputDiv', 'soldierNameIs', 'hide');
									}, 500);
								});
							});
						break;
						case 'qFirstAnim':
							bounceEffect('#firstValMain', '#qValMain', false, '-10', function() {
								$('#line23').remove();
								var val1 = +$('.data-address:contains("' + $('#qValMain').text().trim() + '")').attr('id').substr(-1);
								svgAnimatingLineTopAndBottom('#qMain', '#nextDiv' + val1, 'line23', true, function() {
									$('#firstVarDecMain .box').effect('highlight', {color: 'blue'}, 600, function() {
										TopBottomLineWithBounce('#firstVarDecMain .box', '#nextDiv' + val1, false, '#next' + val1, 
												'#firstValMain', false, '-850px', function() {
											$('#line22').remove();
											var val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
											svgAnimatingLineTopAndBottom('#firstVarDecMain .box', '#nextDiv' + val, 'line22', false, function() {
												customIntroNextStep('#printPre', 'iIncrement', 'show', 'left');
											});
										});
									});
								});
							});
						break;
					}
				});
			break;
			case 'printf' + position :
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'enterEliminateVal':
						case 'enterSoldierName':
							$('.zindex-css, .background-yellow').removeClass('background-yellow zindex-css');
							$('#printf' + position).addClass('zindex-css');
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
						case 'eliminatedSoldier':
							$('#output').append('<div class="opacity00">The Escaped Soldier is  --> <y>' + $('.name-span').text() + '</y></div>');
							customIntroNextStep('#outputDiv', 'escapedSoldier', 'hide');
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
							$('.zindex-css, .background-yellow').removeClass('background-yellow zindex-css');
							var stepId = animateStep.substring(5, animateStep.length);
							$('#outputDiv div:last').removeClass('opacity00').removeAttr('style');
							if (stepId == 'SoldierName') {
								text1 = '<br>If you want to exit from the loop enter "<y>end</y> / <y>ENd</y>".';
								text2 = 'Enter name of the soldier.';
								text = ($('.user').text().length > 1) ? (text2 + text1) : text2; 
							} else {
								text = 'Enter a value to eliminate the soldier.';
							}
							$('.introjs-tooltip').removeClass('hide');
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps('#animationDiv', stepId, 'hide');
								(stepId == 'SoldierName') ? nameValidation() : eventValidation('.user-txt');
							});
						break;
						case 'escapedSoldier':
						case 'eleminatedSoldier':
						case 'soldierNameIs':
							TweenMax.to($('#output div:last'), 0.5, {opacity : 1, onComplete: function() {
								$('#outputDiv div:last').removeClass('opacity00').removeAttr('style');
								if (animateStep == 'soldierNameIs') {
									customIntroNextStep('#callingPrintMethod', '', 'show');
								} else {
									var stepId = (animateStep == 'escapedSoldier') ? '#restartBtn' : '#printPre'  
									customIntroNextStep(stepId, 'DeletingSoldier', 'show', 'left');
								}
							}});
						break;
						case 'printingValues':
							$('#output div:last').append(' <span id="soldiersAre" class="ct-code-b-yellow opacity00" style="position: relative;"> '
										+ $('#printValues').html() + '</span>');
							fromEffect('#printValues', '#soldiersAre', function() {
								$('#soldiersAre').removeClass('opacity00');
								$('#soldiersAre span').removeClass('blue-color');
								$('#printValues').parent().remove();
								position = 2;
								customIntroNextStep('#printf2', 'enterEliminateVal', 'hide');
							});
						break;
					}
				});
			break;
			case 'strCmpCond':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
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
									var stepId = (value != 0) ? '#allocMemory' : '#firstToQNext'; 
									appendCondCheckingText('.introjs-tooltiptext', (value != 0), (value != 0), 'while-loop', function() {
										introNextSteps(stepId, '', 'hide', 'right');
										introjs.nextStep();
									});
								});
							});
						});
					});
				});
			break;
			case 'allocMemory':
				$('.introjs-helperLayer').one('transitionend', function() {
					if ($('.nodes').length == 5) {
						$('#line21, #line23').remove();
						appendListNodes(index);
						svgAnimatingLineTopAndBottom('#tempMain', '#nextDiv' + (index - 1), 'line21', true);
						svgAnimatingLineTopAndBottom('#qMain', '#nextDiv' + (index - 1), 'line23', true);
					} else {
						appendListNodes(index);
					}
					customIntroNextStep("#animationDiv", "nodeMemAlloc", 'show');
				});
			break;
			case 'firstToQNext':
			case 'tempToQ':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
					customIntroNextStep('#animationDiv', elementId, 'hide');
				});
			break;
			case 'ifFirstIsNull':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
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
						text = 'Now <y>temp</y> value (i.e., <y>' + $('#tempValMain').text().trim() + '</y>) is stored in <y>' 
								+ selectorText + '</y>.';
						movingArrowWithLiTyping('#ifFirstIsNull span:eq(' + val + ')', text, function() {
							nextStepWithBtn('#animationDiv', 'storeTempInFirstRQNext', 'hide');
						});
					});
				});
			break;
			case 'callingPrintMethod':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = 'Here we are calling <y>display()</y> method and passing <y>first</y> (i.e., <y>' + $('#firstValMain').text().trim()
							+ '</y>) as argument.';
					typing('.introjs-tooltiptext', text, function() {
						$('#variableNodesDiv #firstVarDecMain, #line21, #tempVarDecMain').remove();
						appendVariableNodes("first", "print");
						appendVariableNodes("q", "print");
						$('#printPre').removeClass('hide').addClass('opacity00');
						nextStepWithBtn('#printPre', 'methodExpalin', 'hide', 'left');
						/*position = 2;
						nextStepWithBtn('#printf2', 'enterEliminateVal', 'hide');*///to escape from print method
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
							$('#firstDecPrint').addClass('background-yellow');
							inPrintQAndFirstAnim('#firstDecPrint', '#firstVarDecPrint', '24', '#printPre', 'span:eq(1)', 'span:eq(1)' , function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Let us initialize <y>q</y> with <y>first</y> value (i.e., <y>' + $('#firstValMain').text() + '</y>).';
								typingWithUserBtn('.introjs-tooltiptext', text, function() {
									inPrintQAndFirstAnim('#printPre span:eq(1)', '#qVarDecPrint', '25', '#printPre', 'span:eq(1)', 'div', function() {
										text = 'Now control enters into the <y>do-while-loop</y> block.';
										typingWithUserBtn('.introjs-tooltiptext', text, function() {
											index = 0;
											$('#svgId').before('<div class="col-xs-12 margin-top-10" style="min-height: 20px; font-size: 12px;">'
														+ ' <span id="printValues"> </span></div>');
											introjs.refresh();
											arrow('#printPre div', '#printPre span:eq(2)', function() {
												printingAnim();
											});
										});
									});
								});
							});
						break;
						case 'DeletingSoldier':
							$('#printValues').parent().remove();
							if ($('#printPre').hasClass('visited')) {
								arrow('#qNextToFirst', '#firstIsNotFirstNext', function() {
									deletingSoldierWhileCondition();
								});
							} else {
								transferEffect('#whileCond', '#deleteLogic', function() {
									arrow('#firstIsNotFirstNext', '#firstIsNotFirstNext', function() {
										$('#printPre').addClass('visited')
										deletingSoldierWhileCondition();
									}); 
								});
							}
						break;
						case 'iIncrement':
							arrow('#forIn', '#forLoop', function() {
								text = 'Now increment the <y>i</y> (i.e., <y>' + position + '</y>) value by <y>one</y> (i.e., <y>' + ++position
										+ '</y>).';
								typing('.introjs-tooltiptext', text, function() {
									++index;
									index = (position > $('.nodes').length) ? 0 : index;
									$('#iVarVal').text(position);
									fromEffect('#iInc', '#iVarVal', function() {
										 appendNextButton('forLoopChecking');
									});
								});
							});
						break;
					}
				});
			break;
			case 'whileCond':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '\t<div class="position-css opacity00" id="deleteLogic">'
							+ ' <span id="firstIsNotFirstNext">while(first != first -> next) {</span>\n'
							+ ' \t<span id="forLoop">for(i = <span id="iInit">1</span>; <span id="iLessThanN">i < n</span>;'
							+ ' <span id="iInc">i++</span>) {</span>\n'
							+ ' \t\t<div class="position-css" id="forIn"><span id="firstToQ">q = first;</span>\n'
							+ '<span id="firstNextToFirst">first = first -> next;</span></div>\n\t}\n'
							+ ' \t<span id="firstNextToQNext">q -> next = first -> next;</span>\n'
							+ ' \t<span id="printf3">printf("The Eliminated Soldier is --> %s\\n", first -> name);</span>\n'
							+ ' \t<span id="free">free(first);</span>\n'
							+ ' \t<span id="qNextToFirst">first = q -> next;</span>\n}</div>'
					$('#printPre').empty().append(text);
					$('#printPre').removeClass('hide');
					customIntroNextStep('#printPre', 'DeletingSoldier', 'show', 'left');
				});
			break;
			case 'restartBtn':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-tooltip').css('min-width', '125px');
				$('#restartBtn').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltiptext').append('Click to restart.');
				});
			break;
		}
	});
	introjs.start();
}

function basedOnRowLineReveal(val) {
	if (val < 5) {
		svgAnimatingLineRightAndLeft($('.next-div:eq(' + (val - 1) + ')'), $('.name-div:eq(' + val +')'), 'line' + val, true);
	} else if (val == 5) {
		svgAnimatingLineTopAndBottom($('.next-div:eq(' + (val - 1) + ')'), $('.next-div:eq(' + val + ')'), 'line' + val, false);
	} else {
		svgAnimatingLineRightAndLeft($('.name-div:eq(' + (val - 1) +')'), $('.next-div:eq(' + val + ')'), 'line' + val, false);
	}
	$('#line' + val).attr('class', 'svg-line lines')
}

function curves(val1) {
	var len = +$('.nodes').length - 2;
	if (+$('.nodes').length < 3) {
		var l = +$('.data-address:first').text().trim() == +$('.next-span:first').text().trim()  ? 2 : 1;
		svgCurve('#nextDiv' + val1, '#nameDiv' + val1, l); //check once
	} else if (+$('.data-address:first').text().trim() == +$('.next-span:eq(' + len + ')').text()) {
		svgCurve($('#' + ($('.next-div:eq(' + len + ')')).attr('id')), $('#' + ($('.name-div:first').attr('id'))), 2);
	} else if (+$('.data-address:eq(1)').text().trim() == +$('.next-span:last').text().trim()) {
		svgCurve($('#' + ($('.next-div:last')).attr('id')), $('#' + ($('.name-div:eq(1)').attr('id'))), 1);
	}
} //curve show after deletion

function validation() {
	$('.user-btn, .err-msg').remove();
	$('.kill-val').attr('disabled', 'disabled');
	var val = +$('#killedVal').val();
	text = '<br><br>&emsp;&emsp;Now count the <y>' + val + '</y> soldiers from starting soldier and kill the <y>' + val 
			+ '</y> person and repeat the loop';
	typing('#killingStatus', text, function() {
		appendNextButton('soldiersAnimation');
	});
} 

function soldiersAnimation() {
	$('.user-btn').remove();
	if ($('.fa-user.opacity00').length != 9) {
		checkingSoldier(1, function() {
			$('.fa-check, .val').addClass('opacity00').removeClass('grn red');
			setTimeout(function() {
				index = 1;
				var t = 1;
				for (var i = 0; i < soldiers.length; i++) {
					t = (+t < 10) ? '0' + t : t;
					$('#soldier' + (i + 1)).attr('id', 'soldier' + t);
					soldiers[i] = $('#kingWithSoldiers .soldiers:eq(' + i + ')');
					t++;
				}
				arrSort();
				t = soldiers[+position - 1].attr('id');
				soldiers.splice(+position - 1, 1);
				$('#' + t + ' *').removeAttr('id');
				$('#' + t).addClass('finished').removeClass('soldiers temp').removeAttr('id');
				changeIds(1, true);
				setTimeout(function() {
					soldiersAnimation();
				}, 800);
			}, 500);
		});
	} else {
		$('#killingStatus').append('<br>The remaining soldier got <y>freedom</y>.');
		$('.soldiers .fa-user').css('color', 'green');
		introNextSteps('#includePre', '', 'hide');
		callingNextButton(function() {
			$('#codeDiv').removeClass('hide').css('padding', '6px');
			$('#kingSoldierAnimDiv').addClass('hide');
			soldiers = [];
			introjs.nextStep();
		});
	}
}

function checkingSoldier(t, callBackFunction) {
	t = (t < 10) ? '0' + t : t;
	t = (t == (soldiers.length + 1)) ? '01' : t;
	$('#val' + t).text(index);
	if (index < +$('.kill-val').val()) {
		showingSoldiers(t, 'green', 'fa-check grn', 'fa-close ', function() {
			index++;
			checkingSoldier(++t, callBackFunction);
		});
	} else {
		showingSoldiers(t, 'red', 'fa-close red', 'fa-check grn', function() {
			$('#user' + t).addClass('blink', function() {
				rotateOutEffect('#user' + t, 'rotateOut animated', function() {
					$('#user' + t).removeClass('blink');
					rotateOutEffect('#val' + t, 'rotateOut animated', function() {
						rotateOutEffect('#sym' + t, 'rotateOut animated', function() {
							position = t;
							callBackFunction();
						});
					});
				});
			});
		});
	}
}//Cheking the condition and delete soldier

function showingSoldiers(t, val, selector1, selector2, callBackFunction) {
	$('#val' + t).effect('highlight', {color: val}, 800);
	zoomInEffect('#val' + t, function() {
		$('#sym' + t).addClass(selector1).removeClass(selector2);
		zoomInEffect('#sym' + t, function() {
			callBackFunction();
		});
	});
}

function displayNodeNameAndNext() {
	$('.user-btn').remove();
	var address = $("#dataAddress" + index).text().trim();
	$('#node' + index).removeClass('opacity00');
	TweenMax.from($('#node' + index), 0.6, {top : -50, onComplete: function() {
		text = 'Now, the <y>address</y> (i.e., <y>' + address +'</y>) of the memory allocated by the <y>malloc()</y> method is stored in <y>temp</y>.';
		typingWithUserBtn('.introjs-tooltiptext', text, function() {
			$('#name' + index).text($('#sNameVarVal').text());
			(index == 0) ? $('#tempValMain').text(address) : '';
			fromEffectAndBounceAnim('#dataAddress' + index, '#tempValMain', false, '1px', function() {
				$('#line21').remove();
				svgAnimatingLineTopAndBottom('#tempMain', '#nextDiv' + index, 'line21', true, function() {
					backGroundAppend('#allocMemory span:eq(1)');
					$('#nameDiv' + index).effect('highlight', {color: 'yellow'}, 1000);
					zoomInEffect('#name' + index, function() {
						backGroundAppend('#allocMemory span:last');
						$('#nextDiv' + index).effect('highlight', {color: 'yellow'}, 1000);
						zoomInEffect('#next' + index, function() {
							$('#allocMemory span:last').removeClass('background-yellow');
							nextStepWithBtn('#ifFirstIsNull', '', 'show');
						});
					})
				});
			});
		});
	}});
}

function printingAnim() {
	$('#printValues').append(' <span class="opacity00 position-css blue-color">' + $("#name" + index).text().trim() + ' --> </span></div>');	
	soldiersListAnim(index, function() {
		$('.background-yellow').removeClass('background-yellow');
		arrow('#printPre span:eq(2)', '#printPre span:eq(3)', function() {
			text = 'Now store the <y>q -> next</y> value (i.e., <y>' + $('#next' + index).text().trim() + '</y>) in <y>q</y>.';
			typingWithUserBtn('.introjs-tooltiptext', text, function() {
				$('#qPrint').effect('highlight', {color: 'blue'}, 500, function() {
					TopBottomLineWithBounce('#qPrint', '#nextDiv' + index, true, '#next' + index, '#qValPrint', false, '1px', function() {
						$('#line25').remove();
						index++;
						var count = ($('#next' + (index - 1)).text() != $('#firstValPrint').text()) ? index : 0;
						svgAnimatingLineTopAndBottom('#qPrint', '#nextDiv' + count, 'line25', true, function() {
							arrow('#printPre span:eq(3)', '#printPre span:eq(4)', function() {
								var val = $('#qValPrint').text() != $('#firstValPrint').text();
								$('.introjs-tooltiptext').empty();
								appendCondText('.introjs-tooltiptext', '#printPre span:eq(4)', 'q', '!=', 'first',
										true, $('#qValPrint').text(),  $('#firstValPrint').text(), val, val, 'do-while', function() {
									var selector = val ? '#printPre span:eq(2)' : '#printPre span:last';
									arrow('#printPre span:eq(4)', selector, function() {
										if (val) {
											printingAnim();
										} else {
											$('#printValues').append(' <span class="blue-color opacity00 position-css"> NULL</span>');
											TweenMax.to($('#printValues span:last'), 0.5, {opacity : 1, onComplete: function() {
												$('#printValues span:last').removeClass('opacity00');
												$('.arrow').remove();
												$('.background-yellow').removeClass('background-yellow');
												introNextSteps('#outputDiv', 'printingValues', 'hide');
												$('.introjs-nextbutton').show();
											}});
										}
									});
								})	
							});
						});
					});
				});
			});
		});
	});
}

function deletingSoldierWhileCondition() {
	index = 0;
	position = 1;
	$('.introjs-tooltiptext').empty();
	introjs.refresh();
	var val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
	var cond = +$('#firstValMain').text().trim() != $('#next' + val).text().trim(); 
	 appendCondText('.introjs-tooltiptext', '#firstIsNotFirstNext', 'first', '!=', 'first -> next', true,  
			 $('#firstValMain').text().trim(), $('#next' + val).text().trim(), cond, cond, 'while-loop', function() {
		 if (cond) {
			 arrow('#firstIsNotFirstNext', '#forLoop', function() {
				 text = 'Let us initialize <y>i</y> with <y>1</y>.';
				 typing('.introjs-tooltiptext', text, function() {
					 $('#animationDiv').addClass('zindex-css');
					 $('#iVarDec').removeClass('opacity00');
					 $('#iVarVal').text(position);
					 fromEffect('#iInit', '#iVarVal', function() {
						 appendNextButton('forLoopChecking');
					 });
				 });
			 });
		} else {
			 $('.fa-arrow-right, .background-yellow').removeClass('fa-arrow-right background-yellow');
			position = 4;
			introNextSteps('#printf4', 'eliminatedSoldier', 'hide');
			introjs.nextStep();
		}
	});
}

function forLoopChecking() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').empty();
	var cond = +$('#iVarVal').text().trim() < +$('#nVarVal').text().trim();
	appendCondText('.introjs-tooltiptext', '#iLessThanN', 'i', '<', 'n', true, $('#iVarVal').text().trim(), $('#nVarVal').text().trim(),
				cond, cond, 'for-loop', function() {
		if (cond) {
			forloopInsideAnim();
		} else {
			forloopOutsideAnim();
		}
	});
}

function forloopInsideAnim() {
	$('.user-btn').remove();
	arrow('#forLoop', '#forIn', function() {
		text = 'Now store <ul><li><y>first</y> value (i.e., <y>' + $('#firstValMain').text().trim() + '</y>) in <y>q</y>.</li>'
				+ '<li><y>first -> next</y> value (i.e., <y>' + $('#next' + index).text().trim() + '</y>) in <y>first</y>.</li></ul>';
		typing('.introjs-tooltiptext', text, function() {
			nextStepWithBtn('#animationDiv', 'qFirstAnim', 'hide');
		});
	});
}

function forloopOutsideAnim() {
	$('.user-btn').remove();
	arrow('#forLoop', '#firstNextToQNext', function() {
		text = 'Store the <y>first -> next</y> (i.e., <y>' + $('#next' + index).text().trim() + '</y>) in <y>q -> next</y>.';
		typing('.introjs-tooltiptext', text, function() {
			btnWithFirstNodeLine(function() {
				var val1 = +$('.data-address:contains("' + $('#qValMain').text().trim() + '")').attr('id').substr(-1);
				var val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
				position = $('#node' + index).index('.nodes'); //index of the node
				var l = (val < val1) ? '900px' : '1px';
				bounceEffect('#next' + val, '#next' + val1, true, l, function() {
					var delLine = +$('#next' + val).index('.next-span');
					$('#line' + delLine).remove();
					curves(val1);
					callingNextButton(function() {
						arrow('#firstNextToQNext', '#printf3', function() {
							introjs.refresh();
							setTimeout(function() {
								val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
								svgAnimatingLineTopAndBottom($('#firstVarDecMain > div:eq(1)'), '#nextDiv' + val, 'line29', false, function() {
									$('#line29').remove();
									$('#svgId').before('<div class="col-xs-12 margin-top-10 blue-color" style="min-height: 20px; font-size: 12px;">'
											+ ' The Eliminated  Soldier is --> <span id="printValues" class="opacity00 position-css"> ' 
											+ $('#name' + val).text() + ' </span></div>');//write here
									introjs.refresh();
									fromEffect('#name' + val, '#printValues', function() {
										arrow('#printf3', '#free', function() {
											text = 'Now <y>delete</y> the node at address <y>' + $('#firstValMain').text().trim() + '</y>.';
											typing('.introjs-tooltiptext', text, function() {
												freeMethod();
											});
										});
									});
								});
							}, 800);
						});
					});
				});
			});
		});
	});
}

function freeMethod() {
	btnWithFirstNodeLine(function() {
		var val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
		$('#node' + val).effect('highlight', {color: 'red'}, 800, function() {
			if ($('.data-address:first').text().trim() == $('.next-span:eq(' + ($('.nodes').length - 2) + ')').text() && $('.nodes').length < 3) {
				$('#polyLine1').remove();
			}
			TweenMax.to("#node" + val, 0.5, { top : -80, opacity: 0, onComplete: function() {
				$('#polyline2').attr('id', 'polyline1');
				deletingNode($('.nodes').length, (+$('#next' + val).index('.next-span') + 1), '#node' + val, function() {
					setTimeout(function() {
						introjs.refresh();
						for (var i = 1; i < $('.nodes').length; i++){
						 	basedOnRowLineReveal(i)  
						}
						svgCurve($('#' + ($('.next-div:last').attr('id'))), $('#' + ($('.name-div:first').attr('id'))), 1);
						val = +$('.data-address:contains("' + $('#qValMain').text().trim() + '")').attr('id').substr(-1);
						svgAnimatingLineTopAndBottom('#qMain', '#nextDiv' + val, 'line23', true);
						arrow('#free', '#qNextToFirst', function() {
							text = 'Now store the <y>q -> next</y> value (i.e., <y>' + $('#next' + (index - 1)).text().trim() + '</y>) in <y>first</y>.';
							typingWithUserBtn('.introjs-tooltiptext', text, function() {
								$('#qMain').effect('highlight', {color: 'blue'}, 600, function() {
									TopBottomLineWithBounce('#qMain', '#nextDiv' + val, true, '#next' + val, '#firstValMain', false, 
												'-720px', function() {
										val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
										svgAnimatingLineTopAndBottom('#firstVarDecMain .box', '#nextDiv' + val, 'line22', false, function() {
											position++;
											changeIds(0, false);
											$('#output').append('<div class="opacity00">The Eliminated Soldier is --> <y>' + $('#printValues').text() 
													+ '</y></div>');
											nextStepWithBtn('#outputDiv', 'eleminatedSoldier', 'hide', 'left');
										});
									});
								});
							});
						});
					}, 1800);
				});
			}});
		});
	});
}//deleting node

function TopBottomLineWithBounce(selector1, selector2, lineFlag, selector3, selector4, flag, val, callBackFunction) {
	svgAnimatingLineTopAndBottom(selector1, selector2, 'line35', lineFlag, function() {
		$('#line35').remove();
		bounceEffect(selector3, selector4, flag, val, function() {
			callBackFunction();
		});
	});
}

function deletingNode(val, count, nodeId, callBackFunction) {
	$('line, polyline').remove();
	if (count <= val) {
		var l1Val = (count <= 5) ? '-134px' : (count > 5) ? '134px' : '' ;
		if (count == 5) {
			TweenMax.to($('#nodesDiv .nodes').not(nodeId).eq(count - 1), 0.8, {top: '-60px', left: '-15px', onComplete: function() {
				nodeDeletion(nodeId);
				if ($('#row1 .nodes').length < 5 && $('#row2 .nodes').length != 0) {
					var t = $('#row2 .nodes:first').detach();
					t.appendTo('#row1');
					$('#row1 .nodes:last').css({'float' : 'left'});
					$('#nodesDiv #row2 .nodes').css({'float' : 'right'});
				}
			}});
		} else {
			TweenMax.to($("#nodesDiv .nodes").not(nodeId).eq(count - 1), 0.8, {left : l1Val, onComplete: function() {
				nodeDeletion(nodeId);
			}});
		}
		count++;
		deletingNode(val, count, nodeId, callBackFunction);
	} else {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}

function nodeDeletion(nodeId) {
	$.each($("#nodesDiv .nodes").not(nodeId), function() {
		$(this).css({"top": '0', 'left': "0"});
	});
	$(nodeId).remove();
}

function linkedListIdsChange(i, t) { 
	var m = ':eq(' + i + ')';
	$('.nodes' + m).attr('id', 'node' + t);
	$('.nodes .data-nodes' + m).attr('id', 'nodedata' + t);
	$('.nodes .name-div' + m).attr('id', 'nameDiv' + t);
	$('.nodes .name-span' + m).attr('id', 'name' + t);
	$('.nodes .next-div' + m).attr('id', 'nextDiv' + t);
	$('.nodes .next-span' + m).attr('id', 'next' + t);
	$('.nodes .data-address' + m).attr('id', 'dataAddress' + t);
}//linked list ids

function idsChange(i, t) {
	$('#' + soldiers[i].attr('id')).attr('id', 'soldier' + t);
 	var m = (t < 10) ? '0' + t : t;
 	$('#soldier' + t + ' .fa-user').attr('id', 'user' + m);
 	$('#soldier' + t + ' .fa-check').attr('id', 'sym' + m);
 	$('#soldier' + t + ' .val').attr('id', 'val' + m);
}//soldier ids

function changeIds(t, flag) {
	var length = (flag) ? soldiers.length : $('.nodes').length;
	for (var i = +(position - 1); i < length; i++) {
		(flag) ? idsChange(i, t) : linkedListIdsChange(i, t);
		t++;
	}
	for (var i = 0; i < +(position - 1); i++) {
		(flag) ? idsChange(i, t) : linkedListIdsChange(i, t);
		t++;
	}
}

function arrSort() {	
	soldiers = soldiers.sort(function(obj1, obj2) {
		return obj1.attr('id').substr(-2) - obj2.attr('id').substr(-2);
	});
}//sorting ids

function btnWithFirstNodeLine(callBackFunction) {
	callingNextButton(function() {
		var val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
		svgAnimatingLineTopAndBottom('#firstVarDecMain .box', '#nextDiv' + val, 'line29', false, function() {
			$('#line29').remove();
			callBackFunction();
		});
	});
}

function nodesDeclaration(text1, text2, selector, pos1, pos2, animateStep) {
	$('.introjs-tooltiptext').append('<ul></ul>');
	movingArrowWithLiTyping(selector + pos1, text1, function() {
		movingArrowWithLiTyping(selector + pos2, text2, function() {
			nextStepWithBtn('#animationDiv', animateStep, 'hide');
		});
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
			svgAnimatingLineTopAndBottom(selector2, '#nextDiv0', 'line' + val, true, function() {
				arrow(selector3 + ' ' + id1, selector3 + ' ' + id2, function() {
					callBackFunction();
				});
			});
		});
	});
}

function soldiersListAnim(count, callBackFunction) {
	$('#qPrint').effect('highlight', {color: 'blue'}, 500, function() {
		svgAnimatingLineTopAndBottom('#qPrint', '#nextDiv' + count, 'line0', true, function() {
	    	$('#nameDiv' + count).effect('highlight', {color: 'yellow'}, 500, function() {
	    		$('#line0').remove();
				fromEffect('#name' + count, '#printValues span:last', function() {
					callBackFunction();
				});
			});
		});
	});
}

function backGroundAppend(selector) {
	$('.background-yellow').removeClass('background-yellow');
	$(selector).addClass('background-yellow');
}

function movingArrowWithLiTyping(toId, text, callBackFunction) {
	backGroundAppend(toId);
	$('.introjs-tooltiptext ul').append('<li></li>');
	typing('.introjs-tooltiptext li:last', text, function() {
		callBackFunction();
	});
}

function arrWithRecursiveFunction(selector1, selector2, animatieStep, tooltip, position) {
	$(selector1).addClass('zindex-css');
	recursiveZoomIn(selector1 + ' span:', 0, function() {
		customIntroNextStep(selector2, animatieStep, tooltip, position);
	});
}

function recursiveZoomIn(parentId, i, callBackFunction) {
	if (i < soldiers.length) {
		(soldiers[0] == '#name' + index) ? $(soldiers[i]).parent().effect('highlight', {color: 'yellow'}, 500) : '';
		$(parentId + dummmyArr[i]).effect('highlight', {color: 'yellow'}, 1000);
		backGroundAppend(parentId + dummmyArr[i]);
		zoomInEffect(soldiers[i], function() {
			recursiveZoomIn(parentId, ++i, callBackFunction);
		});
	} else {
		soldiers = dummmyArr = [];
		callBackFunction();
	}
}

function appendCondText(selector1, selector2, text1, cond, text2, flag, val1, val2, textFlag, condFlag, flagText, callBackFunction) {
	text = 'Now check the condition : <br><span id="mainCond" class="ct-code-b-yellow opacity00"><span id="firstVal"> ' + text1 +  '</span> ' + cond 
			+ ' <span id="secondVal">' + text2 + '</span></span>';
	$(selector1).append(text);
	$(selector1 + ' span').addClass('position-css');
	fromEffect(selector2, '#mainCond', function() {
		callingNextButton(function() {
			flipEffect('#firstVal', val1, function() {
				(flag) ? flipEffect('#secondVal', val2, function() {}) : '';
				setTimeout(function() {
					appendCondCheckingText(selector1, textFlag, condFlag, flagText, callBackFunction);
				}, 1200);
			});
		});
	});
}

function appendCondCheckingText(selector1, flag, condFlag, flagText, callBackFunction) {
	$(selector1).append('<br><div id="appendText"></div>')
	text = flag ? '<y>' + condFlag + '</y>. Hence control enters into the <y>' + flagText + '-block</y>.' : '<y>' + condFlag + '</y>.'
				+ ' Hence control comes out of the <y>' + flagText + '-block</y>.';
	typing('#appendText', 'Condition evaluates to ' + text, function() {
		callingNextButton(function() {
			callBackFunction();
		});
	});
}

function typing(typingId, typingContent, callBackFunction) {
	$(typingId).typewriting(typingContent, {
		'typing_interval': '1'
	}, function() {
		$('.typingCursor').removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function zoomInEffect(selector, callBackFunction) {
	$(selector).removeClass('opacity00').addClass('animated zoomIn').one('animationend', function() {
		$(selector).removeClass('animated zoomIn');
		callBackFunction();
	});
}

function rotateOutEffect(selector, className, callBackFunction) {
	$(selector).addClass(className).one('animationend', function() {
		$(selector).removeClass(className).addClass('opacity00');
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

function customIntroNextStep(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function callingNextButton(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function appendNextButton(methodName) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="' + methodName + '()">Next &#8594;</a>');
}

function nextStepWithBtn(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	$('.introjs-nextbutton').show();
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

function arrow(fromId, toId, callBackFunction) {
	$('.arrow').remove();
	backGroundAppend(toId);
	$('#printPre').append("<i class='fa fa-arrow-right arrow animated' style='position: absolute; z-index: 10000000;'></i>");
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

function fromEffectAndBounceAnim(selector1, selector2, pos, val, callBackFunction) {
	if (index == 0) {
		fromEffect(selector1, selector2, function() {
			callBackFunction();
		});
	} else {
		bounceEffect(selector1, selector2, pos, val, function() {
			callBackFunction();
		});
	}
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
		introjs.refresh();
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
	$("body").removeAttr("style");			
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
	$(selector2).text($(selector1).text());
	$('#dummy').remove();
	introjs.refresh();
}

function errorMsgText(text) {
	$('.user-btn, .err-msg').remove();
	$('.introjs-nextbutton').hide();
	$('.introjs-tooltiptext').append('<div class="err-msg"><br>' + text + '</div>');
}

function btnShowing(e) {
	$('.err-msg').remove();
	$('.introjs-nextbutton').show();
	(e.keyCode == 13) ? introjs.nextStep() : '';
}

function eventValidation(selector) {
	$(selector + ':last').focus();
	$(selector).keydown(function(e) {
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) || e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$(selector).keyup(function(e) {
		if ($(this).val().length > 0 && ($(this).val() > 0 && $(this).val() < 15)) {
			$('.user-btn, .err-msg').remove();
			if (selector == '.kill-val') {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onClick="validation()">Next &#8594;</a>');
				(e.keyCode == 13) ? validation() : "";
			} else {
				btnShowing(e);
			}
		} else {
			text = ($(this).val() > 14) ? 'Please enter a value below 15.' : ($(this).val() < 1) ? 'Please enter a value greater than 0.' : '';    
			errorMsgText(text);
		}
	});
}

function nameValidation() {
	$('.user-txt:last').focus();
	$('.user-txt').keydown(function(e) {
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
	});
	$('.user-txt').keyup(function(e) {
		if ($('.user-txt').length != 11) {
			($(this).val().length > 0) ? btnShowing(e) : $('.introjs-nextbutton').hide();
		} else {
			($(this).val().toLowerCase() == "end") ? btnShowing(e) : errorMsgText('Here we are restricted to enter "end / End" only.');
		}
	});
}

function svgAppend(svgId, parentId) {
	var code = '<svg class="svg-css" id=' + svgId +'></svg>';
	$(parentId).append(code);
	svgMarkerAppend(svgId);
}

function svgMarkerAppend(svgId, curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', 'arrow');
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$('#' + svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#arrow').append(path);
}

function svgLineAppend(svgId, svgLineId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#arrow")';
	$(svgId).append(line);
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
	lineAnimation('#svgId', svgLineId, x1, y1, x2, y2, callBackFunction);
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
	lineAnimation('#svgId', svgLineId, x1, y1, x2, y2, callBackFunction);
}

function lineAnimation(svgId, svgLineId, x1, y1, x2, y2, callBackFunction) {
	svgLineAppend(svgId, svgLineId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 0.8, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgCurve(selector1, selector2, val) {
	$("#polyLine" + val).remove();
	var x = (($(selector1).offset().left - $("#svgId").offset().left) + $(selector1).width()) + 2;
	var y = (($(selector1).offset().top  + $(selector1).height()) - $('#svgId').offset().top - 7);
	var x1 = x + (($(selector1).outerWidth() / 3) + 4);
	var y1 = y;
	var x2 = x1;
	var y2 = y - ($(selector1).outerHeight() * 1.4) - 4;
	var x3 = ($(selector2).offset().left - $("#svgId").offset().left ) - $(selector1).outerWidth() / 3 - 7;
	var y3 = y2;
	var x4 = x3;
	var y4 = (($(selector2).offset().top  + $(selector2).height()) - $('#svgId').offset().top - 7);
	var x5 = x3 + $(selector2).outerWidth() / 3;
	var y5 = y4;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line");
	line.setAttribute('id', 'polyLine' + val);
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 
				+ " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("#polyLine" + val, 0.8, {attr: {points : points}});
	},500);
}
