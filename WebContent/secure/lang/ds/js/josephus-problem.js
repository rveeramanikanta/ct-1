var introjs, lang, index = 1, position = 0, soldiers = Array(10).fill(0);

function josephusProgramReady() {
	$('#soldier5, #soldier6').addClass('col-xs-offset-2');
	$('#soldier6, #soldier2').addClass('margin-top-20');
	$('.fa-check, .val, #explanationDiv li').addClass('opacity00');
	$('pre div').addClass('position-css');
	$('#restartBtn').click(function() {
		location.reload();
	});
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
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

function appendVariables(varName, sub) {
	$('#variablesDiv').append('<div class="col-xs-2 text-center padding0 margin-top-20 opacity00" id="' + varName + sub + '"><b>'
			 			+ varName + '</b> <b>=</b> <b class="border-css"><span id="' + varName + sub + 'Val" class="opacity00 position-css">'
			 			+ varName + '</span></b></div>');
	if (varName == "sName") {
		$('#sName' + sub).removeClass('col-xs-2').addClass('col-xs-4');
	}
	$('b.border-css').css({'min-height': '0px', 'padding' : '6px'});
}

function appendVariableNodes(nodeNme, subNme) {
	var sub = subNme.charAt(0).toUpperCase() + subNme.substring(1, subNme.length); 
	$('#variableNodesDiv').append('<div class="col-xs-1 text-center padding0 col-xs-offset-1 opacity00" id="' + nodeNme + 'VarDec' + sub + '">'
							+ '<div class="col-xs-12 box" id="' + nodeNme + sub + '">'
							+ '<span id="' + nodeNme + 'Val' + sub + '" class="brown-color opacity00 position-css">1248</span></div>'
							+ '<div class="col-xs-12 green-color padding0">' + nodeNme + '<sub>' + subNme + '</sub></div></div>');
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
			+ ' <span id="next' + count +'" class="next-span position-css green-color" style="top: 3px;">NULL</span></div>'
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

function addNodesMethod() {
	$('#printPre').addClass('opacity00').append('\t<div class="position-css"><span id="addMethod">node addNode(<span id="lastDec">node'
					+ ' last</span>, <span id="sNameDec">char sname[]</span>) {</span>\n'
					+ '\t<span id="tempDec">node temp;</span>\n'
					+ '\t<span id="createNodeMethod">temp = createNode();</span>\n'
					+ '\t<span id="strCpyMethod">strcpy(temp -> name, sname);</span>\n'
					+ '\t<span id="ifFstIsNull">if (first == NULL) {</span>\n'
					+ '\t\t<span id="tempToFst">first = temp;</span>\n\t} else {\n'
					+ '\t\t<span id="tempToLastNext">last -> next = temp;</span>\n\t}\n'
					+ '\t<span id="firstToTempNext">temp -> next = first;</span>\n'
					+ '\t<span id="retnTemp">return temp;</span>\n}</div>');
	$('#createNodePre').removeClass('hide');
	introjs.refresh();
}

function displayMethod() {
	$('#printPre').addClass('opacity00').empty().append('\t<div class="position-css">void display() {\n'
						+ '\t<span id="print1">printf("The original soldiers list is -->");</span>\n'
						+ '\t<span id="qInit">node q = first;</span>\n\tdo {\n'
						+ '\t\t<span id="print2">printf(" %s --> ", q -> name);</span>\n'
						+ '\t\t<span id="qNextToQ">q = q -> next;</span>\n'
						+ '\t<span id="qNotEqualToFst">} while (q != first);</span>\n'
						+ '\t<span id="print3">printf("NULL\\n");</span>\n}</div>');
	if (lang == 'cpp') {
		$('#print1').html('cout << "The original soldiers list is --> ";');
		$('#print2').html('q -> name << " --> ";');
		$('#print3').html('cout << "NULL\\n";');
	}
}

function deleteMethod() {	
	$('#printPre').addClass('opacity00').append('\t<div class="position-css"><span id="delMthd">void delete(<span id="lastDec">node last</span>) {\n'
					+ '</span>\t<span id="decN">int n, i;</span>\n'
					+ '\t<div id="print" class="position-css">printf("Enter a value to eliminate the soldier : ");\n'
					+ 'scanf("%d", &n);</div>\n'
					+ '\t<span id="whileCondition">while(first != first -> next) {</span>\n'
					+ '\t\t<span id="forLoop">for (<span id="iInit">i = <span id="iValue" class="position-css">1</span>;</span> <span id="forCond">'
					+ '<span id="iVal">i</span> < <span id="nVal">n</span></span>; <span id="iInc">i++</span>) {</span>\n'
					+ '\t\t\t<div id="deletionLogic" class="position-css">last = first;\n'
					+ 'first = first -> next;</div>\n\t\t}\n'
					+ '\t\t<span id="frstNxtToLstNxt">last -> next = first -> next;</span>\n'
					+ '\t\t<span id="print1">printf("The eliminated soldier is --> %s\\n", first -> name);</span>\n'
					+ '\t\t<span id="freeMethod">free(first);</span>\n'
					+ '\t\t<span id="lastNextToFirst">first = last -> next;</span>\n\t}\n'
					+ '\t<span id="printing">printf("The escaped soldier is --> %s\\n", first -> name);</span>\n}</div>');
	if (lang == 'cpp') {
		$('#print').html('cout << "Enter a value to eliminate the soldier : ";\ncin >> n;');
		$('#print1').html('cout << "The eliminated soldier is --> " << first -> name << "\\n";');
		$('#freeMethod').html('delete first;');
		$('#printing').html('cout << "The escaped soldier is --> " << first -> name << "\\n";');
	}
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
				element: '#explanationDiv',
				intro: '',
				tooltipClass: 'hide'
			}, {	
				element: '#kingSoldierAnimDiv',	//king soldier anim
				intro: '',
				position: 'right'
		} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		switch(elementId) {
			case "explanationDiv":
				TweenMax.to($('#explanationDiv li:first'), 0.5, {opacity: 1, onComplete: function() {
					TweenMax.to($('#explanationDiv li:eq(1)'), 0.5, {opacity: 1, onComplete: function() {
						TweenMax.to($('#explanationDiv li:last'), 0.5, {opacity: 1, onComplete: function() {
							$('#explanationDiv li:last').append('<a class="introjs-button user-btn">Next &#8594;</a>');
							$('.user-btn').click(function() {
								$(this).remove();
								/*introNextSteps('#includePre', '', 'hide');
								$('#codeDiv, .animation-div').removeClass('hide');
								$('#codeDiv').css('padding', '6px');
								$('#kingSoldiersDiv').addClass('hide');
								soldiers = [];*/
								introjs.nextStep();
							});
						}});
					}});
				}});
			break;
			case 'kingSoldierAnimDiv':
				$('.introjs-tooltip').css('min-width', '520px');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#kingSoldierAnimDiv').removeClass('opacity00');
					text = '<ul><li>Let us assume there are <y>10</y> soldiers standing in a <y>circle</y> waiting to be executed. The <y>counting</y>'
							+ ' out begins at some point in the circle and proceeds around the circle in a fixed direction.</li><li>In each step, '
							+ ' a <y>certain number of soldiers</y> are <y>skipped</y> and the <y>next soldier</y> is <y>executed</y>.</li>'
							+ ' <li>The <y>elimination</y> proceeds around the <y>circle</y> (which is becoming smaller and smaller as the'
							+ ' <y>executed soldiers are removed</y>), until only the <y>last soldier remains</y>, who is given <y>freedom</y>.</li>'	
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltiptext').append('<br><div id="appendText"></div>');
						text = 'Enter a value <input id="killedVal" class="kill-val" maxlength="2" size="3"><span id="killingStatus"></span>';
						typing('#appendText', text, function() {
							eventValidation('.kill-val');
						});
					});
				});
			break;
			case 'includePre':
			case 'mainPre':
				$('.introjs-tooltip').css('min-width', '350px');
				$('#includePre, #codeDiv').removeClass('opacity00');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#kingSoldierAnimDiv').remove();
					if (elementId == 'mainPre') {
						appendVariables('sName', 'Main');
						$('#sNameMain b:first').html('sName<sub>(main)</sub>');
						$('#includePre').parent().css({'display': 'none'});
						$('#includeBtn').css({'display': 'inline'});
						preBtnEvent();
						introjs.refresh();
					}
					$('.zindex-css, .background-yellow').removeClass('background-yellow zindex-css');
					var stepId = (elementId == 'includePre') ? '#structDec' : '#decSNamelast'; 
					customIntroNextStep(stepId, '', 'hide', 'right');
				});
			break;
			case 'typeDefDec':
			case 'structDec':
				var stepId;
				if (elementId == 'structDec') {
					text = 'This is the declaration of a new struct type <y>list</y>.<br>'
				    		+ ' <ul><li><y>name</y> field is used to hold the <y>name</y> inside the linked list.</li>'
				    		+ '<li><y>next</y> field is used to keep the <y>address of next node</y>.</ul>';
					stepId = '#typeDefDec';
				} else {
					text = 'The <y>typedef</y> creates a <y>node</y> as a new type <y>pointer</y> to <y>struct list</y>.';
					stepId = '#globalfirstDec';
				}
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', text, function() {
						nextStepWithBtn(stepId, '', 'hide');
					});
				});
			break;
			case 'globalfirstDec':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationDiv').removeClass('opacity00').addClass('zindex-css');
					transferEffect('#globalfirstDec', '#firstVarDecMain', function() {
						zoomInEffect('#firstValMain', function() {
							introNextSteps('#mainPre', '', 'hide');	// animatestep - enterSoldierName
							setTimeout(function() {
								$('#animationDiv').removeClass('zindex-css');
								introjs.nextStep();
							}, 800);
						});
					});
				});
			break;	
			case 'decSNamelast':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationDiv').addClass('zindex-css');
					variableAnimation('#globallastDec', '#lastVarDecMain', '#firstValMain', function() {
						position = 1;
						index = 0;
						transferEffect('#decSNamelast span:last', '#sNameMain', function() {
							introNextSteps('#printf1', '', 'hide');	// animatestep - enterSoldierName
							setTimeout(function() {
								$('#animationDiv').removeClass('zindex-css');
								introjs.nextStep();
							}, 800);
						});
					});
				});
			break;
			case 'printf' + position:
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#printf' + position).addClass('zindex-css');
					$('#output').append('<div class="opacity00">Enter name of the soldier : <input class="user-txt" maxlength="10" '
									+ 'size="10" placeholder="name"/></div>');
					customIntroNextStep('#outputDiv', 'enterSoldierName', 'show', 'left');
				});
			break;
			case 'outputDiv':
				$('#outputDiv').removeClass('opacity00');
				$('#output').scrollTo('div:last', 100);
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'enterDeletedValue':
						case 'enterSoldierName':
							$('.zindex-css').removeClass('zindex-css');
							var stepId = animateStep.substring(5, animateStep.length);
							$('#outputDiv div:last').removeClass('opacity00').removeAttr('style class');
							if (stepId == 'SoldierName') {
								text1 = '<br>If you want to exit from the loop enter "<y>end</y> / <y>ENd</y>".';
								text2 = 'Enter name of the soldier.';
								text = ($('.user-txt').length > 1) ? (text2 + text1) : text2; 
							} else {
								text = 'Enter a value to eliminate the soldier.';
							}
							$('.introjs-tooltip').removeClass('hide');
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps('#animationDiv', stepId, 'hide');
								(stepId == 'SoldierName') ? nameValidation() : eventValidation('.user-txt');
							});
						break;
						case 'printMethod':
							$('#animationDiv').addClass('zindex-css');
							highlightWithTopAndBottomLine('#qDisplay', '#nextDiv' + position, true, function() {
								$('#output div:last').append(' <span class="opacity00 position-css ct-code-b-yellow">' + 
										$("#name" + position).text() + ' --> </span>');
								fromEffect('#name' + position, '#output span:last', false, function() {
									customIntroNextStep('#printPre', 'displayWhileCond', 'hide', 'left');
								});
							});
						break;
					}
				});
			break;
			case 'animationDiv':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'DeletedValue':
						case 'SoldierName':
							$('.err-msg').remove();
							$('.user-txt:last').attr('disabled', 'disabled');
							var stepId, value, pos, sub;
							if (animateStep == 'SoldierName') {
								value = '#sName';
								stepId = '#strCmpCond';
								sub = 'Main';
								pos = 'right';
							} else {
								value = '#n';
								stepId = '#printPre';
								sub = 'Delete';
								pos = 'left';
							}
							$(value + sub + 'Val').text($('.user-txt:last').val());
							fromEffect('.user-txt:last', value + sub + 'Val', false, function() {
								customIntroNextStep(stepId, 'whileCondition', 'hide', pos);
							});
						break;
						case 'nodeMemoryAlloc':
							transferEffect('#mallocMethod', '#node' + index, function() {
								fromEffect('#dataAddress' + index, '#tempValAddNode', true, function() {
									svgAnimatingLineTopAndBottom('#tempVarDecAddNode', '#nextDiv' + index, 'line15', true, function() {
										$('#printPre').addClass('zindex-css');
										arrow('#createNodeMethod', '#strCpyMethod', function() {
											fromEffect('#sNameAddNodeVal', '#name' + index, true, function() {
												customIntroNextStep('#printPre', 'addMehodIfCond', 'hide', 'left');
											});
										});
									});
								});
							});
						break;
						case 'tempretnval':
							bounceEffect('#tempValAddNode', '#lastValMain', false, '-750px', function() {
								//$('#line14').remove();
								//svgAnimatingLineTopAndBottom('#lastVarDecMain .box', '#nextDiv' + index, 'line14', false, function() {
									index++;
									position = 2;
									introNextSteps('#printf2', '', 'hide');
									setTimeout(function() {
										$('#line15, #line17, .arrow, #sNameAddNode, #tempVarDecAddNode, #lastVarDecAddNode').remove();
										$('#printPre, #createNodePre').addClass('hide');
										introjs.nextStep();
									}, 800);
								//});
							});
						break;
					}
				});
			break;
			case 'strCmpCond':
				$('.zindex-css').removeClass('zindex-css');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <y>strcmp()</y> function compares two strings and returns <y>0</y> if both the strings are identical.<br>'
							+ ' <span class="ct-code-b-yellow opacity00" id="mainCond"><span id="fstVal">strcmp(<span id="secondVal">'
							+ 'sName</span>, "end")</span> != 0</span>';
					$('.introjs-tooltiptext').append(text);
					$('.introjs-tooltiptext span').addClass('position-css');
					fromEffect('#strCmpCond', '#mainCond', false, function() {
						flipEffect('#secondVal', "\"" + $('#sNameMainVal').text() + "\"", 'yellow', function() {
							var value = $('#sNameMainVal').text().toLowerCase().localeCompare("end");
							var flipVal = (value == 0) ? 0 : ($('#sNameMainVal').text().length > 3) ? 1 : -1;
							flipEffect('#fstVal', flipVal, 'yellow', function() {
								//flipVal = (value != 0) ? '#addNodeMethod' : '#displayMethod';	// for display method
								flipVal = (value != 0) ? '#addNodeMethod' : '#deleteMethod';	// for delete method
								appendCondCheckingText('.introjs-tooltiptext', (value != 0), (value != 0), 'while-loop', function() {
									introNextSteps(flipVal, '', 'hide', 'right');
									introjs.nextStep();
								});
							});
						});
					});
				});
			break;
			case 'addNodeMethod':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we are calling <y>addNode()</y> method and passing <y>last</y> (i.e., <y>' + $('#lastValMain').text().trim() 
							+ '</y>) and <y>sName</y> (i.e., <y>' + $('#sNameMainVal').text().trim() + '</y>) as arguments and the return'
							+ ' value is stored in <y>last</y>.';
					typing('.introjs-tooltiptext', text, function() {
						$('#printPre').removeClass('hide').empty();
						appendVariableNodes('last', 'addNode');
						nextStepWithBtn('#printPre', 'addCallingMethod', 'hide', 'left');
					})
				});
			break;
			case 'displayMethod':
				$('.introjs-helperLayer').one('transitionend', function() {
					displayMethod();
					appendVariableNodes('q', 'display');
					$('#printPre').removeClass('hide');
					customIntroNextStep('#printPre', 'displayMethod', 'hide', 'left');
				});
			break;
			case 'deleteMethod':
				$('#outputDiv').removeClass('zindex-css');
				$('#qVarDecDisplay, #line17, .arrow').remove();
				$('#printPre').empty().addClass('hide');
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');	// remove this
					text = 'Here we are calling <y>delete()</y> method and passing <y>last</y> (i.e., <y>' + $('#lastValMain').text().trim() 
							+ '</y>) as an argument.';
					typing('.introjs-tooltiptext', text, function() {
						$('#printPre').removeClass('hide').empty();
						appendVariableNodes('last', 'delete');
						nextStepWithBtn('#printPre', 'deleteCallingMethod', 'hide', 'left');
					});
				});
			break;
			case 'printPre':
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				$('.introjs-helperLayer').one('transitionend', function() {
					switch(animateStep) {
						case 'addCallingMethod':
							addNodesMethod();
							$('#lastVarDecAddNode').removeClass('margin-left');
							appendVariables('sName', 'AddNode');
							$('#sNameAddNode b:first').html('sName<sub>(addNode)</sub>');
							$('#printPre').removeClass('opacity00');
							callingAddNodeMethod();
						break;
						case 'addMehodIfCond':
							$('#animationDiv').removeClass('zindex-css');
							arrow('#strCpyMethod', '#ifFstIsNull', function() {
								var condVal = $('#firstValMain').text().trim() == "NULL";
								$('.introjs-tooltip').removeClass('hide');
								appendCondText('.introjs-tooltiptext', '#ifFstIsNull', 'first ', '==', ' NULL', false,  
										$('#firstValMain').text(), "NULL", true, condVal, condVal ? 'if' : 'else', function() {
									var selector = condVal ? '#tempToFst' : '#tempToLastNext';  
									arrow('#ifFstIsNull', selector, function() {
										var flagText = condVal ? 'first' : 'last -> next';	
										text = '<ul><li>Now store the <y>temp</y> value (i.e., <y>' + +$('#tempValAddNode').text() + '</y>) in ' 
												+ '<y style="white-space: nowrap;">'+ flagText + '</y>.</li></ul>';
										typingWithUserBtn('.introjs-tooltiptext', text, function() {
											addMethodIfCond(condVal, selector);
										});
									});
								});
							});
						break;
						case 'displayMethod':
							$('#printPre').removeClass('opacity00');
							position = 0;
							$('.introjs-tooltip').removeClass('hide');
							text = '<y>display()</y> method is used to <y>print</y> the <y>name</y> of a node.';
							typingWithUserBtn('.introjs-tooltiptext', text, function() {
								arrow('#print1', '#print1', function() {
									$('#outputDiv').addClass('zindex-css');
									$('#output').append('<div class="opacity00">The Original Soldiers List is --></div>').scrollTo('div:last', 100);
									transferEffect('#print1', '#output div:last', function() {
										arrow('#print1', '#qInit', function() {
											$('#outputDiv').removeClass('zindex-css');
											$('#animationDiv').addClass('zindex-css');
											variableAnimation('#qInit', '#qVarDecDisplay', '#firstValMain', function() {
												svgAnimatingLineTopAndBottom('#qDisplay', '#nextDiv' + position, 'line17', true, function() {
													arrow('#qInit', '#print2', function() {
														nextStepWithBtn('#outputDiv', 'printMethod', 'hide');
													});
												});
											});
										});
									});
								});
							});
						break;
						case 'displayWhileCond':
							$('#animationDiv').removeClass('zindex-css');
							arrow('#print2', '#qNextToQ', function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Store the <y>q -> next</y> value (i.e., <y>' + $('#next' + position).text().trim() + '</y>) in <y>q</y>.';
								typingWithUserBtn('.introjs-tooltiptext', text, function() {
									$('#animationDiv').addClass('zindex-css');
									TopBottomLineWithBounce('#qDisplay', '#nextDiv' + position, true, '#next' + position, '#qValDisplay',
											false, '8px', function() {
										$('#line17').remove();
										position++;
										var val = position == index ? 0 : position;
										svgAnimatingLineTopAndBottom('#qDisplay', '#nextDiv' + val, 'line17', true, function() {
											displayAnim();
										});
									});
								});
							});
						break;
						case 'deleteCallingMethod':
							deleteMethod();
							introjs.refresh();
							appendVariables('n', 'Delete');
							$('#printPre').removeClass('opacity00');
							callingDeleteMethod();
						break;
						case 'whileCondition':
							arrow('#print', '#whileCondition', function() {
								whileConditionAnim();
							});
						break;
					}
				});	
			break;
			case 'createNodePre':
				$('.introjs-helperLayer').one('transitionend', function() {
					introNextSteps('#animationDiv', 'nodeMemoryAlloc', 'hide');
					if ($('.nodes').length == 5) {
						$('#line17, .arrow').remove();
						appendListNodes(index);	
						arrow('#createNodeMethod', '#createNodeMethod');
						svgAnimatingLineTopAndBottom('#lastAddNode', '#nextDiv' + (index - 1), 'line17', true);
					} else {
						appendListNodes(index);
					}
					if (index > 1) {
						setTimeToIntroNextStep();
					} else {
						$('#mallocMethod').effect('highlight', {color: 'yellow'}, 1500);
						$('.introjs-tooltip').removeClass('hide');
						text = '<y>malloc()</y> allocates a memory to its members <y>name</y> and <y>next</y>.';
						typing('.introjs-tooltiptext', text, function() {
							(index == 0) ? svgAppend("svgId", "#animationDiv") : '';
							$('.introjs-nextbutton').show();
						});
					}
				});
			break;
			case 'restartBtn':
				$('.zindex-css').removeClass('zindex-css');
				$('#restartBtn').removeClass('opacity00');
				$('#printPre').parent().remove();
				$('#lastVarDecDelete, #nDelete, #line17').remove();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').css('min-width', '125px');
					typing('.introjs-tooltiptext', 'Click to restart.', function() {
						$('#restartBtn').click(function() {
							location.reload();
						});
					});
				});
			break;
		}
	});
	introjs.start();
}
//deletion
function whileConditionAnim() {
	position = 1;
	$('#forCond').removeAttr('style');
	$('.introjs-tooltip').removeClass('hide');
	$('.introjs-tooltiptext').empty();
	var val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
	var cond = $('#firstValMain').text().trim() != $('#next' + val).text().trim();    
	appendCondText('.introjs-tooltiptext', '#whileCondition', 'first', '!=', 'first -> next', true, 
			$('#firstValMain').text().trim(), $('#next' + val).text().trim(), cond, cond, 'while-loop', function() {
		if (!cond) {
			text = 'The escaped soldier is --> <y>' + $('.name-span').text() + '</y>';
			outputAnim('#whileCondition', '#printing', text, '#output div:last', function() {
				$('.arrow').remove();
				nextStepWithBtn('#restartBtn', '', 'show', 'right');
			});
		} else {
			arrow('#whileCondition', '#forLoop', function() {
				introjs.refresh();
				flipEffect('#nVal',  +$('#nDeleteVal').text(), 'blue', function() {
					text = 'Let us initialize <y>i</y> with <y>1</y>.';
					typingWithUserBtn('.introjs-tooltiptext', text, function() {
						flipEffect('#iVal', position, 'blue', function() {
							deletionAnim();
						});
					});
				});
			});
		}
	});
}

function deletionAnim() {
	var cond = position < +$('#nDeleteVal').text();
	$('#forCond').css({'font-weight' : 'bold', 'color' : cond ? 'green' : 'red'});
	$('.introjs-tooltip').removeClass('hide');
	$('.introjs-tooltiptext').empty().append('<span class="ct-code-b-yellow position-css opacity00">' + $('#forCond').text() + '</span>');
	$('#forCond').effect('highlight', {color: 'blue'}, 900);
	fromEffect('#forCond', '.introjs-tooltiptext span', false, function() {
		appendCondCheckingText('.introjs-tooltiptext', cond, cond, 'for-loop', function() {
			cond ? forLoopTrueAnim() : forLoopFalseAnim();
		});
	});
}

function forLoopTrueAnim() {
	$('.user-btn').remove();
	$('.introjs-tooltip').addClass('hide')
	$('.introjs-tooltiptext').empty();
	arrow('#forLoop', '#deletionLogic', function() {
		$('#animationDiv').addClass('zindex-css');
		bounceEffect('#firstValMain', '#lastValDelete', false, '-10', function() {
			$('#line17').remove();
			var val = +$('.data-address:contains("' + $('#lastValDelete').text().trim() + '")').attr('id').substr(-1);
			svgAnimatingLineTopAndBottom('#lastDelete', '#nextDiv' + val, 'line17', true, function() {
				TopBottomLineWithBounce('#firstMain', '#nextDiv' + val, false, '#next' + val, '#firstValMain', false, '-850px', function() {
					val = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
					$('#line13').remove();
					svgAnimatingLineTopAndBottom('#firstMain', '#nextDiv' + val, 'line13', false, function() {
						arrow('#deletionLogic', '#forLoop', function() {
							++position;
							$('#forCond').removeAttr('style');
							$('#animationDiv').removeClass('zindex-css');
							$('#iInc').effect('highlight', {color: 'blue'}, 800);
							flipEffect('#iVal', position, 'blue', function() {
								setTimeout(function() {
									deletionAnim();
								}, 600);
							});
						});
					});
				});
			});
		});
	});
}

function forLoopFalseAnim() {
	$('.user-btn').remove();
	arrow('#forLoop', '#frstNxtToLstNxt', function() {
		var first = +$('.data-address:contains("' + $('#firstValMain').text().trim() + '")').attr('id').substr(-1);
		var last = +$('.data-address:contains("' + $('#lastValDelete').text().trim() + '")').attr('id').substr(-1);
		text = 'Now store the <y>first -> next</y> value (i.e.,<y> ' + $('#next' + first).text().trim() + '</y>) in <y>last -> next</y>.';
		typingWithUserBtn('.introjs-tooltiptext', text, function() {
			$('#animationDiv').addClass('zindex-css');
			var val = $('#next' + first).index('.next-span') < $('#next' + last).index('.next-span') ? '850px' : '10px' ; 
			//var l = (val < val1) ? '900px' : '1px';
			TopBottomLineWithBounce('#firstMain', '#nextDiv' + first, false, '#next' + first, '#next' + last, true, val, function() {
				$('#line' + $('#next' + first).index('.next-span')).remove();
				curves(last);
				callingNextButton(function() {
					text = 'The eliminated soldier is --> <y>' + $('#name' + first).text() + '</y>';
					outputAnim('#frstNxtToLstNxt', '#print1', text, '#output div:last', function() {
						arrow('#print1', '#freeMethod', function() {
							$('#outputDiv').removeClass('zindex-css');
							text = 'Here we are <y>deleting</y> the node at address <y>' + $('#dataAddress' + first).text().trim() + '</y>.';
							typingWithUserBtn('.introjs-tooltiptext', text, function() {
								highlightWithTopAndBottomLine('#firstMain', '#nextDiv' + first, false, function() { 
									freeMethod(first, last);
								});
							});
						});
					});
				});
			});
		});
	});
}

function freeMethod(first, last) {
	$('#node' + first).effect('highlight', {color: 'red'}, 800, function() {
		$('line, polyline').remove();
		TweenMax.to("#node" + first, 0.5, { top : -80, opacity: 0, onComplete: function() {
			deletingNode($('.nodes').length, (+$('#next' + first).index('.next-span') + 1), '#node' + first, function() {
				setTimeout(function() {
					introjs.refresh();
					for (var i = 1; i < $('.nodes').length; i++){
					 	basedOnRowLineReveal(i)  
					}
					svgCurve($('#' + ($('.next-div:last').attr('id'))), $('#' + ($('.name-div:first').attr('id'))), 1);
					svgAnimatingLineTopAndBottom('#lastDelete', '#nextDiv' + last, 'line17', true, function() {
						console.clear();
						arrow('#freeMethod', '#lastNextToFirst', function() {
							text = 'Now store the <y>last -> next</y> value (i.e., <y>' + $('#next' + last).text().trim() + '</y>) in <y>first</y>';
							typingWithUserBtn('.introjs-tooltiptext', text, function() {
								TopBottomLineWithBounce('#lastDelete', '#nextDiv' + last, true, '#next' + last, '#firstValMain', false, -850, function() {
									first = $('.data-address:contains(' + $("#firstValMain").text() + ')').attr('id').substr('-1');
									svgAnimatingLineTopAndBottom('#firstMain', '#nextDiv' + first, 'line13', false, function() {
										position++;
										changeIds(0, false);
										callingNextButton(function() {
											$('#nVal').text('n');
											$('#iVal').text('i');
											arrow('#lastNextToFirst', '#whileCondition', function() {
												whileConditionAnim();
											});
										});
									});
								});
							});
						});
					});
				}, 1800);
			});
		}});
	});
}

function callingDeleteMethod() {
	arrow('#delMthd', '#delMthd', function() {
		$('#animationDiv').addClass('zindex-css');
		variableAnimation('#lastDec', '#lastVarDecDelete', '#lastValMain', function() {
			svgAnimatingLineTopAndBottom('#lastDelete', '#nextDiv' + (index - 1), 'line17', true, function() {
				arrow('#delMthd', '#decN', function() {
					transferEffect('#decN', '#nDelete', function() {
						setTimeout(function() {
							$('#animationDiv').removeClass('zindex-css');
							arrow('#decN', '#print', function() {
								text = '<div class="opacity00">Enter a value to eliminate the soldier : <input class="user-txt"'
											+ ' maxlength="2" size="3" /></div>'
								$('#output').append(text);
								customIntroNextStep('#outputDiv', 'enterDeletedValue', 'show', 'left');
							});
						}, 600);
					});
				});
			});
		});
	});
}

function displayAnim() {
	$('#animationDiv').removeClass('zindex-css');
	arrow('#qNextToQ', '#qNotEqualToFst', function() {
		$('#animationDiv').removeClass('zindex-css');
		var condVal = +$('#qValDisplay').text() != +$('#firstValMain').text();
		$('.introjs-tooltiptext').empty();
		appendCondText('.introjs-tooltiptext', '#qNotEqualToFst', 'q ', '!=', 'first', true, +$('#qValDisplay').text(), +$('#firstValMain').text(),
					condVal, condVal, 'while-loop', function() {
			$('.introjs-tooltip').addClass('hide');
			if (condVal) {
				arrow('#qNotEqualToFst', '#print2', function() {
					customIntroNextStep('#outputDiv', 'printMethod', 'hide');
				});
			} else {
				arrow('#qNotEqualToFst', '#print3', function() {
					$('#output div:last').append('<span class="opacity00 ct-code-b-yellow"> NULL</span>');
					$('#outputDiv').addClass('zindex-css');
					transferEffect('#print3', '#output span:last', function() {
						customIntroNextStep('#deleteMethod', '', 'show');
					});
				});
			}
		});
	});
}

function outputAnim(selector1, selector2, text, selector3, callBackFunction) {
	arrow(selector1, selector2, function() {
		$('#output').append('<div class="opacity00">' + text + '</div>').scrollTo('div:last', 100)
		$('#outputDiv').addClass('zindex-css');
		transferEffect(selector2, selector3, function() {
			callBackFunction();
		});
	});
}

function addMethodIfCond(condVal, selector) {
	$('#animationDiv').addClass('zindex-css');
	if (condVal) {
		bounceEffect('#tempValAddNode', '#firstValMain', false, '-750px', function() {
			svgAnimatingLineTopAndBottom('#firstMain', '#nextDiv0', 'line13', false, function() {
				addIfCondContinue(selector);
			});
		});
	} else {
		TopBottomLineWithBounce('#lastAddNode', '#nextDiv' + (index - 1), true, '#tempValAddNode', '#next' + (index - 1), false, '-750px', function() {
			$('#polyLine1').remove();
			basedOnRowLineReveal(index);
			addIfCondContinue(selector);
		});
	}
}

function addIfCondContinue(selector) {
	arrow(selector, '#firstToTempNext', function() {
		$('.introjs-tooltiptext ul').append('<li></li>');
		text = 'Now store the <y>first</y> value (i.e., <y>' + +$('#firstValMain').text() + '</y>) in <y style="white-space: nowrap;">temp -> next</y>.';
		typingWithUserBtn('.introjs-tooltiptext li:last', text, function() {
			TopBottomLineWithBounce('#tempAddNode', '#nextDiv' + index, true, '#firstValMain', '#next' + index, false, '10px', function() {
				svgCurve('.next-div:last', '.name-div:first', 1);
				arrow('#firstToTempNext', '#retnTemp', function() {
					nextStepWithBtn('#animationDiv', 'tempretnval', 'hide');
				});
			});
		});
	});
}

function callingAddNodeMethod() {
	$('#animationDiv').addClass('zindex-css');
	arrow('#addMethod', '#addMethod', function() {
		variableAnimation('#lastDec', '#lastVarDecAddNode', '#lastValMain', function() {
			index != 0 ? svgAnimatingLineTopAndBottom('#lastAddNode', '#nextDiv' + (index - 1), 'line17', true) : '';
			variableAnimation('#sNameDec', '#sNameAddNode', '#sNameMainVal', function() {
				arrow('#addMethod', '#tempDec', function() {
					appendVariableNodes('temp', 'addNode');
					transferEffect('#tempDec', '#tempVarDecAddNode', function() {
						arrow('#tempDec', '#createNodeMethod', function() {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here we are calling <y>createNode()</y> method and the <y>return</y> value is stored in <y>temp</y>.';
							typing('.introjs-tooltiptext', text, function() {
								nextStepWithBtn('#createNodePre', '', 'hide');
							});
						});
					});
				});
			});
		});
	});
}

function TopBottomLineWithBounce(selector1, selector2, lineFlag, selector3, selector4, flag, val, callBackFunction) {
	highlightWithTopAndBottomLine(selector1, selector2, lineFlag, function() {
		bounceEffect(selector3, selector4, flag, val, function() {
			callBackFunction();
		});
	});
}

function highlightWithTopAndBottomLine(selector1, selector2, lineFlag, callBackFunction) {
	$(selector1).effect('highlight', {color: 'blue'}, 600, function() {
		svgAnimatingLineTopAndBottom(selector1, selector2, 'line35', lineFlag, function() {
			$('#line35').remove();
			callBackFunction();
		});
	});
}

function variableAnimation(selector1, selector2, selector3, callBackFunction) {
	transferEffect(selector1, selector2, function() {
		fromEffect(selector3, selector2 + ' .position-css', true, function() {
			callBackFunction();
		});
	});
}

function validation() {
	$('.user-btn, .err-msg').remove();
	$('.kill-val').attr('disabled', 'disabled');
	var val = +$('#killedVal').val();
	text = '<br><br>&emsp;&emsp;Now count the soldiers from starting position and eliminate the soldier at ' 
			+ 'position <y>'  + val + '</y> and then repeat the loop until the last person remains.';
	typing('#killingStatus', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="soldiersAnimation()">Next &#8594;</a>');
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
					soldiers[i] = $('#kingSoldierAnimDiv .soldiers:eq(' + i + ')');
					t++;
				}
				arrSort();
				t = soldiers[+position - 1].attr('id');
				soldiers.splice(+position - 1, 1);
				$('#' + t + ' *').removeAttr('id');	// All elements
				$('#' + t).addClass('finished').removeClass('soldiers temp').removeAttr('id');
				changeIds(1, true);
				setTimeout(function() {
					soldiersAnimation();
				}, 800);
			}, 500);
		});
	} else {
		$('#killingStatus').append('<span id="example"></span>');
		text = '<br>The remaining soldier <y>' + $('.soldiers .pos').text() + '</y> got <y>freedom</y>. Let us learn an example by'
				+ ' using <y>Single Circular Linked List</y>.';
		typing('#example', text, function() {
			$('.soldiers .fa-user').css('color', 'green');
			introNextSteps('#includePre', '', 'hide');
			callingNextButton(function() {
				$('#codeDiv, .animation-div').removeClass('hide');
				$('#codeDiv').css('padding', '6px');
				$('#kingSoldiersDiv').addClass('hide');
				soldiers = [];
				introjs.nextStep();
			});
		});
	}
}

function checkingSoldier(t, callBackFunction) {
	t = (t < 10) ? '0' + t : t;
	t = (t == (soldiers.length + 1)) ? '01' : t;
	$('#val' + t).text(index);
	$('#sym' + t).addClass('opacity00');
	if (index < +$('.kill-val').val()) {
		showingSoldiers(t, 'green', 'fa-check grn', 'fa-close ', function() {
			index++;
			checkingSoldier(++t, callBackFunction);
		});
	} else {
		showingSoldiers(t, 'red', 'fa-close red', 'fa-check grn', function() {
			$('#user' + t).addClass('blink', function() {
				$('#val' + t).addClass('red ');
				rotateOutEffect('#user' + t, 'rotateOut animated', function() {
					rotateOutEffect('#val' + t, 'rotateOut animated', function() {
						rotateOutEffect('#sym' + t, 'rotateOut animated', function() {
							$('#soldier' + +t + ' *').addClass('opacity00');
							$('#user' + t).removeClass('blink');
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
	$('#val' + t).effect('highlight', {color: val}, 300);
	$('#sym' + t).addClass(selector1).removeClass(selector2);
	$('#val' + t + ', #sym' + t).removeClass('opacity00');
	setTimeout(function() {
		callBackFunction();
	}, 200);
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

function deletingNode(val, count, nodeId, callBackFunction) {
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

function curves(val) {
	var len = +$('.nodes').length - 2;
	if (+$('.nodes').length < 3) {
		var l = +$('.data-address:first').text().trim() == +$('.next-span:first').text().trim() ? 2 : 1;
		svgCurve('#nextDiv' + val, '#nameDiv' + val, l);
	} else if (+$('.data-address:first').text().trim() == +$('.next-span:eq(' + len + ')').text()) {
		svgCurve($('#' + ($('.next-div:eq(' + len + ')')).attr('id')), $('#' + ($('.name-div:first').attr('id'))), 2);
	} else if (+$('.data-address:eq(1)').text().trim() == +$('.next-span:last').text().trim()) {
		svgCurve($('#' + ($('.next-div:last')).attr('id')), $('#' + ($('.name-div:eq(1)').attr('id'))), 1);
	}
} //curve after deletion


function appendCondText(selector1, selector2, text1, cond, text2, flag, val1, val2, textFlag, condFlag, flagText, callBackFunction) {
	text = 'Now check the condition : <br><span id="mainCond" class="ct-code-b-yellow opacity00"><span id="firstVal"> ' + text1 +  '</span> ' + cond 
			+ ' <span id="secondVal">' + text2 + '</span></span>';
	$(selector1).append(text);
	$(selector1 + ' span').addClass('position-css');
	fromEffect(selector2, '#mainCond', false, function() {
		flipEffect('#firstVal', val1, 'yellow', function() {
			(flag) ? flipEffect('#secondVal', val2, 'yellow', function() {}) : '';
			setTimeout(function() {
				appendCondCheckingText(selector1, textFlag, condFlag, flagText, callBackFunction);
			}, 1200);
		});
	});
}

function appendCondCheckingText(selector1, flag, condFlag, flagText, callBackFunction) {
	$(selector1).append('<br><div id="appendText"></div>')
	text = flag ? '<y>' + condFlag + '</y>. Hence control enters into the <y>' + flagText + '-block</y>.' : '<y>' + condFlag + '</y>.'
				+ ' Hence control comes out of the <y>' + flagText + '-block</y>.';
	typing('#appendText', 'condition evaluates to ' + text, function() {
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

function typingWithUserBtn(selector, text, callBackFunction) {
	typing(selector, text, function() {
		callingNextButton(function() {
			callBackFunction();
		});
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
	$(selector1).addClass('zindex-css').effect( "highlight",{color: 'blue'}, 500);
	$(selector1).effect("transfer", { to: $(selector2), className: "ui-effects-transfer" }, 800 , function() {
		$(selector1).removeClass('zindex-css');
		$(selector2).removeClass('opacity00');
		if (typeof callBackFunction === 'function') {
			callBackFunction();
		}
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

function setTimeToIntroNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 800);
}

function customIntroNextStep(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	setTimeToIntroNextStep();
}

function callingNextButton(callBackFunction) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
	$('.user-btn').click(function() {
		$('.user-btn').remove();
		callBackFunction();
	});
}

function nextStepWithBtn(stepName, animatedStep, tooltip, position) {
	introNextSteps(stepName, animatedStep, tooltip, position);
	$('.introjs-nextbutton').show();
}

function flipEffect(selector, val, colorVal, callBackFunction) {
	$(selector).effect('highlight', {color: colorVal}, 800);
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete: function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete: function() {
			callBackFunction();
		}});
	}});
}

function arrow(fromId, toId, callBackFunction) {
	$('.arrow').remove();
	$('.background-yellow').removeClass('background-yellow');
	$(toId).addClass('background-yellow');
	$('body').append("<i class='fa fa-arrow-right arrow animated' style='position: absolute; z-index: 10000000;'></i>");
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

function fromEffect(fromId, toId, flag, callBackFunction) {
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	(flag) ? $(toId).text($(fromId).text()) : '';
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
	$('.next-span').css('top', '3px');
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
	//Number.isInteger(+$('.user-txt:last').val())
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
	var x, y, x1, y1, x2, y2, x3,y3, x4, y4, x5, y5;
	x = (($(selector1).offset().left - $("#svgId").offset().left) + $(selector1).width()) + 2;
	y1 = y = (($(selector1).offset().top  + $(selector1).height()) - $('#svgId').offset().top - 7);
	x2 = x1 = x + (($(selector1).outerWidth() / 3) + 4);
	y3 = y2 = y - ($(selector1).outerHeight() * 1.4) - 4;
	x4 = x3 = ($(selector2).offset().left - $("#svgId").offset().left ) - $(selector1).outerWidth() / 3 - 7;
	y5 = y4 = (($(selector2).offset().top  + $(selector2).height()) - $('#svgId').offset().top - 7);
	x5 = x3 + $(selector2).outerWidth() / 3;
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
	line.setAttribute("class", "svg-line");
	line.setAttribute('id', 'polyLine' + val);
	var points = x + " " + y + ", " + x1 + " " + y1 + ", " + x2 + " " + y2 + ", " + x3 + " " + y3 + ", " + x4 + " " + y4 + ", " + x5 + " " + y5;  
	line.style.markerEnd = 'url("#arrow")';
	$("#svgId").append(line);
	setTimeout(function() {
		TweenMax.to("#polyLine" + val, 0.8, {attr: {points : points}});
	},500);
}
