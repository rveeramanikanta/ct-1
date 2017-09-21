var btnName;
function DeQueueArrayReady() {
	lang = getURLParameter("lang");
	$("#injectText, #pushText").on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	
	if (lang == 'cpp') {
		$('#headerFiles').html('#include &lt;iostream&gt;\nusing namespace std;');
	}
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

function injectMethod() {
	$('#deQueueMethods').html('').append('<pre class="creampretab4 hide" id="injectMethod"></pre>');
	$('#injectMethod').append('<div class="position-css" id="injectDiv">void inject(<span id="xDec">int x</span>) {\n'
						+ '\t<span id="injectIf">if (rear == MAX - 1) {</span>\n'
						+ '\t\t<span id="injectTrue">printf("Dequeue is overflow...\\n");</span>\t\n'
						+ '\t} else {\n'
						+ '\t\t<span id="rearInc">rear++;</span>\n'
						+ '\t\t<span id="xInDQAtRear">deQueue[rear] = x;</span>\n'
						+ '\t\t<span id="frontIsMinusOne">if (front == -1) {</span>\n'
						+ '\t\t\t<span id="frontIsZero">front = 0;</span>\n'
						+ '\t\t}\n'
						+ '\t\t<span id="printSuccess">printf("Successfully inserted...\\n");</span>\n\t}\n}</div>');
	if (lang == 'cpp') {
		$('#injectTrue').html('cout << "Dequeue is overflow...\\n";');
		$('#printSuccess').html('cout << "Successfully inserted...\\n";');
	}
}

function popMethod() {
	$('#deQueueMethods').html('').append('<pre class="creampretab4 hide" id="popMethod"></pre>');
	$('#popMethod').append('<div id="popDiv" class="position-css">void pop() {\n'
						+ '\t<span id="frontIsMinusOne">if (front == -1) {</span>\n'
						+ '\t\t<span id="popTrue">printf("Dequeue is underflow...\\n");</span>\t\n'
						+ '\t} else {\n'
						+ '\t\t<div id="popFalse" class="position-css">printf("Deleted element : %d\\n",\n\t\t\t\t\t\t\t deQueue[front]);</div>\n' 
						+ '\t\t<span id="popIf">if (front == rear) {</span>\n'
						+ '\t\t\t<span id="FrntRerIsMinusOne">front = rear = -1;</span>\n'
						+ '\t\t} else {\n'
						+ '\t\t\t<span id="frntInc">front++;</span>\n'
						+ '\t\t}\n\t}\n}</div>');
	if (lang == 'cpp') {
		$('#popTrue').html('cout << "Dequeue is underflow...\\n";');
		$('#popFalse').html('cout << "Deleted element : " << \n\t\t\t\t\t\t\t deQueue[front];');
	}
}

function pushMethod() {
	$('#deQueueMethods').html('').append('<pre class="creampretab4 hide" id="pushMethod"></pre>');
	$('#pushMethod').append('<div class="position-css" id="pushDiv">void push(<span id="xDec">int x</span>) {\n'
						+ '\t<span id="frontIsMinusOne">if (<span id="frnt1">front</span> == -1 || <span id="frnt2">front</span> == 0) {</span>\n'
						+ '\t\t<span id="pushTrue">printf("Dequeue is overflow...\\n");</span>\t\n'
						+ '\t} else {\n'
						+ '\t\t<span id="frntDec">front--;</span>\n'
						+ '\t\t<span id="xInDQAtFront">deQueue[front] = x;</span>\n'
						+ '\t\t<span id="printSuccess">printf("Successfully inserted...\\n");</span>\n'
						+ '\t}\n}</div>');
	if (lang == 'cpp') {
		$('#pushTrue').html('cout << "Dequeue is overflow...\\n";');
		$('#printSuccess').html('cout << "Successfully inserted...\\n";');
	}
}

function ejectMethod() {
	$('#deQueueMethods').html('').append('<pre class="creampretab4 hide" id="ejectMethod"></pre>');
	$('#ejectMethod').append('<div class="position-css" id="ejectDiv">void eject() {\n'
						+ '\t<span id="rearIsMinusOne">if (rear == -1) {</span>\n'
						+ '\t\t<span id="ejectTrue">printf("Dequeue is underflow...\\n");</span>\t\n'
						+ '\t} else {\n'
						+ '\t\t<div id="ejectFalse" class="position-css">printf("Deleted element : %d\\n",\n\t\t\t\t\t\t\t deQueue[rear]);</div>\n'
						+ '\t\t<span id="ejectIf">if (front == rear) {</span>\n'
						+ '\t\t\t<span id="FrntRerIsMinusOne">front = rear = -1;</span>\n'
						+ '\t\t} else {\n'
						+ '\t\t\t<span id="rearDec">rear--;</span>\n'
						+ '\t\t}\n\t}\n}</div>');
	if (lang == 'cpp') {
		$('#ejectTrue').html('cout << "Dequeue is underflow...\\n";');
		$('#ejectFalse').html('cout << "Deleted element : " << \n\t\t\t\t\t\t\t deQueue[rear];');
	}
}

function displayMethod() {
	$('#deQueueMethods').html('').append('<pre class="creampretab4 hide" id="displayMethod"></pre>');
	$('#displayMethod').append('<div class="position-css" id="displayDiv">void display() {\n'
						+ '\tint i;\n'
						+ '\t<span id="ifCond">if(front == -1 && rear == -1) {</span>\n'
						+ '\t\t<span id="displayTrue">printf("Double ended queue is empty.");</span>\t\n'
						+ '\t} else {\n'
						+ '\t\t<span id="displayFalse">printf("Elements in the dequeue : \\n");</span>\n'
						+ '\t\t<div id="frLoop" class="position-css">for(i = front; i <= rear; i++) {\n'
						+ '\t<span id="displayValue">printf("%d ", deQueue[i]);</span>\n'
						+ '}</div>\n'
						+ '\t}\n'
						+ '\t<span id="displayNewLine">printf("\\n");</span>\n}</div>');
	if (lang == 'cpp') {
		$('#displayTrue').html('cout << "Double ended queue is empty.";');
		$('#displayFalse').html('cout << "Elements in the dequeue : \\n";');
		$('#displayValue').html('cout << deQueue[i] << " ";');
		$('#displayNewLine').html('cout << "\\n";');
	}
}

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : 
			[ {
				element: '#deQueueHeading',
				intro: ''
			}, {
				element: '#queueInit',
				intro: '',
				position: 'right'
			} ]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		switch(elementId) {
			case 'deQueueHeading':
				text = '<y>Double-ended queue</y> allows <y>insertion</y> and <y>deletion</y> at both the sides.';
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					$('#preCode').removeClass('opacity00');
				});
			break;
			case 'queueInit':
				$('.introjs-helperLayer').one('transitionend', function() {
					text = '<ul><li>Let us declare an int array <y>deQueue</y> with maximum size <y>20</y>.</li>'
						+ ' <li>Let us declare two int variables <y>front</y> and <y>rear</y> and initialized with <y>-1</y>.</li></ul>';
					typing('.introjs-tooltiptext', text, function() {
						$('#animationDiv').removeClass("opacity00");
						getIntrojsStep('#btnsDiv', '', 'left', 'show');
						$('.introjs-nextbutton').removeClass('introjs-disabled').show();
					});
				});
			break;
			case 'btnsDiv':
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.background-color-yellow').removeClass('background-color-yellow');
					$('.fa').remove();
					$('#injectText, #pushText').val('');
					if (introjs._currentStep == 2) {
						typing('.introjs-tooltiptext', 'Provide any number.');	
					} else {
						typing('.introjs-tooltiptext', 'Choose any operation.');
					}
					$('#injectText, #pushText').effect('highlight', {color: '#e0e092'}, 500)
					if ($("#injectText, #pushText").is(":disabled")) {
						doPlayPause();
					}
					setTimeout(function() {
						$("#btnsDiv [disabled]").removeAttr("disabled");
					}, 500);
				});
			break;
			case 'lastCall':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#lastCall').removeClass('opacity00');
					setTimeout(function() {
						doPlayPause();
					}, 500);
				});
			break;
			case 'injectMethod':
				insertAnim('rear', '#injectIf', function() {
					ifCondAnim('rear', 'MAX', '- 1', '==', '#injectIf', rearVal, '20', false, '', function() {
						flip('#secndSubVal1', 20, function() {
							flip('#secndVal', 19, function() {
								let cond = rearVal == 19;
								ifElseCondText(cond, function() {
									if (cond) {
										outputSteps('#injectIf', '#injectTrue', 'Dequeue is overflow...', true);
									} else {
										rearVal++;
										insertngElemIntoQ('#injectIf', '#rearInc', 'rear++', rearVal, 'rear', '#xInDQAtRear');
									}
								});
							});
						});
					});
				});
			break;
			case 'injectDiv':
				$('.introjs-helperLayer').one('transitionend', function() {
					arrowMoving('#xInDQAtRear', '#frontIsMinusOne', function() {
						$('.introjs-tooltiptext').append('<ul></ul>');
						let cond = frontVal == -1;
						if (cond) {
							ifCondAnim('front', '-1', '', '==', '#frontIsMinusOne', frontVal, '-1', true, cond, function() {
								arrowMoving('#frontIsMinusOne', '#frontIsZero', function() {
									$('.introjs-tooltiptext ul').append('<li><span>front = 0</span></li>');
									travel('#frontIsZero', '.introjs-tooltiptext li:last', function() {
										getIntrojsStep('#animationDiv', '', '', 'hide');
										$('.introjs-nextbutton').removeClass('introjs-disabled').show();
									});
								});
							});
						} else {
							$('.introjs-tooltiptext ul').append('<li><span id="ifCondition"><span id="frntVal">front</span> == -1</span></li>');
							travel('#frontIsMinusOne', '#ifCondition', function() {
								flip('#frntVal', frontVal, function() {
									text = 'Condition evaluates to <y>false</y>. Hence control comes out of the <y>if-block</y>.';
									$('.introjs-tooltiptext ul').append('<div class="style-css"></div>');
									typing('.introjs-tooltiptext ul div', text, function() {
										outputSteps('#frontIsZero', '#printSuccess', 'Successfully inserted...', true);
									});
								});
							});
						}
					});
				});
			break;
			case 'printSuccess':
				$('.introjs-helperLayer').one('transitionend', function() {
					var selector;
					if (btnName == 'inject') {
						selector = '#frontIsZero';
					} else {
						selector = '#xInDQAtFront';
					}
					outputSteps(selector, '#printSuccess', 'Successfully inserted...', false);
				});
			break;
			case 'popMethod':
				let cond = frontVal == -1;
				deletingElem('front', '#frontIsMinusOne', frontVal, cond, deQArr[0]);
			break;
			case 'popDiv':
				let condition = frontVal == rearVal;
				deQArr.splice(0, 1);
				frontVal++;
				delAfterAnim(condition, '#frntInc', 'front++', frontVal, 'front'); 
			break;
			case 'pushMethod':
				insertAnim('front', '#frontIsMinusOne', function() {
					arrowMoving('#frontIsMinusOne', '#frontIsMinusOne', function() {
						$('.introjs-tooltiptext ul').append('<li><span><span id="cond1"><span id="frntVal1">front</span> == -1</span> ||'
								+ ' <span id="cond2"><span id="frntVal2">front</span> == 0</span></span></li>');
						travel('#frontIsMinusOne', '.introjs-tooltiptext li:last span', function() {
							flip('#frntVal1', frontVal, function() {
								flip('#frntVal2', frontVal, function() {
									flip('#cond1', frontVal == -1, function() {
										flip('#cond2', frontVal == 0, function() {
											let cond = frontVal == -1 || frontVal == 0;
											ifElseCondText(cond, function() {
												if (cond) {
													outputSteps('#frontIsMinusOne', '#pushTrue', 'Dequeue is overflow...', true);
												} else {
													frontVal--;
													insertngElemIntoQ('#frontIsMinusOne', '#frntDec', 'front--', frontVal, 'front', '#xInDQAtFront');
												}
											});
										});
									});
								});
							});
						});
					});
				});
			break;
			case 'ejectMethod':
				let cond1 = rearVal == -1;
				deletingElem('rear', '#rearIsMinusOne', rearVal, cond1, deQArr[deQArr.length - 1]);
			break;
			case 'ejectDiv':
				let condition1 = frontVal == rearVal;
				deQArr.pop();
				rearVal--;
				delAfterAnim(condition1, '#rearDec', 'rear--', rearVal, 'rear');
			break;
			case 'displayMethod':
				text = 'In this method we are <y>printing</y> all the elements in <y>deQueue</y>.';
				methodDefinition(text, '#ifCond', function() {
					$('.introjs-tooltiptext').append('<ul><li><span><span id="rearVl">rear</span> == -1</span></li></ul>')
					travel('#ifCond', '.introjs-tooltiptext li span:first', function() {
						let con = rearVal == -1;
						flip('#rearVl', rearVal, function() {
							if (con) {
								outputSteps('#ifCond', '#displayTrue', 'Double ended queue is empty.', true);
							} else {
								ifElseCondText(con, function() {
									outputSteps('#ifCond', '#displayFalse', 'Elements in the dequeue : ', true);
								});
							}
						});
					});
				});
			break;
			case 'displayDiv':
				$('.introjs-helperLayer').one('transitionend', function() {
					arrowMoving('#displayFalse', '#frLoop', function() {
						$('#frLoop').addClass('background-color-yellow');
						$('.introjs-tooltiptext').append('<ul><li></li></ul>')
						var text = "This <y>for-loop</y> is repeated untill the <y>i</y> value is less than or equal to <y>rear</y> value (i.e., <y>"
									+ rearVal + "</y>).";
						typing(".introjs-tooltiptext li:last", text, function() {
							$('.introjs-tooltiptext ul').append('<li></li>')
							var text = "Initially the <y>i</y> value is initialize with <y>front</y> value (i.e., <b style='font-family: monospace;'>"
										+ " i = " + frontVal + "</b>).";
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								$(".introjs-tooltiptext ul").append("<li></li>");
								var text = "It prints the value of <y>deQueue[i]</y>.";
								typing($(".introjs-tooltiptext ul li:last"), text, function() {
									let t = 0, displayText = "";
									for (let i = frontVal; i <= rearVal; i++) {
										displayText = displayText + deQArr[t] + " ";
										t++;
									}
									$("#output").append("<div class='opacity00' style='white-space: initial;'>" + displayText + "</div>");
									getIntrojsStep("#animationDiv", "", "", "hide");
									$(".introjs-nextbutton").removeClass("introjs-disabled").show();
								});
							});
						});
					});
				});
			break;
			case 'animationDiv':
				$("#btnsDiv .btn").attr("disabled", "disabled");
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._introItems[introjs._currentStep].tooltipClass == "hide") {
						doPlayPause();
					} else {
						doPlayPause();
						setTimeout(function() {
							$('#mainCallMethod, #deQueueMethods, #output').empty();
							typing(".introjs-tooltiptext", "Successfully clear the <y>queue</y>.");
						}, 1500);
					}
				});
			break;
			case 'outputDiv':
				$("#outputDiv").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".output-console-body").scrollTo($("#output > div:last-child()"), 500, function() {
						$("#output > div:last-child()").removeClass("opacity00");
						if($("#output > div:last-child() *").length == 1) {
							$("#output").append("<br/>");
						}
						$('.background-color-yellow').removeClass('background-color-yellow');
						doPlayPause();
					});
				});
			break;
		}
	});
	introjs.start();
}

function insertAnim(val, id1, callBackFunction) {
	$('.introjs-helperLayer').one('transitionend', function() {
		text = 'In this method we are <y>inserting</y> an element into the <y>deQueue</y> from <y>' + val + '</y> side.';
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-tooltiptext').append('<ul><li><span>int x</span></li></ul>');
			travel('#xDec', '.introjs-tooltiptext ul li span', function() {
				let value = parseInt($('#' + btnName + 'Text').val());
				$(".introjs-tooltiptext ul li span").append(" = <span>" + value + "</span>");
				arrowMoving(id1, id1, function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function insertngElemIntoQ(id1, id2, condText, val, text, id3) {
	arrowMoving(id1, id2, function() {
		$('.introjs-tooltiptext ul').append('<li><span>' + condText + '</span></li>');
		travel(id2, '.introjs-tooltiptext ul li:last span', function() {
			flip('.introjs-tooltiptext ul li:last span', text + " = " + val, function() {
				arrowMoving(id2, id3, function() {
					$('.introjs-tooltiptext ul').append('<li><span>deQueue[<span id="rearVal">' + text + '</span>]'
								+ ' = <span id="xVal">x</span></span></li>');
					travel(id3, '.introjs-tooltiptext ul li:last span', function() {
						flip('#rearVal', val, function() {
							flip('#xVal', parseInt($('#' + btnName + 'Text').val()), function() {
								getIntrojsStep('#animationDiv', '', '', 'hide');
								$('.introjs-nextbutton').removeClass('introjs-disabled').show();
							});
						})
					});
				});
			});
		});
	});
}

function outputSteps(id1, id2, text, flag) {
	arrowMoving(id1, id2, function() {
		$(id2).addClass('background-color-yellow');
		getIntrojsStep('#outputDiv', '', '', 'hide');
		$('#output').append('<div class="opacity00">' + text + '</div>');
		if (flag) {
			$('.introjs-nextbutton').removeClass('introjs-disabled').show();
		} else {
			setTimeout(function() {
				introjs.nextStep();
			}, 500);
		}
	});
}

function deletingElem(valText, id1, value, condition, delValue) {
	text = 'In this method we are <y>deleting</y> an element from <y>' + valText + '</y> side in <y>deQueue</y>.';
	methodDefinition(text, id1, function() {
		$('.introjs-tooltiptext').append('<ul></ul>');
		ifCondAnim(valText, '-1', '', '==', id1, value, '-1', true, condition, function() {
			if (condition) {
				outputSteps(id1, '#' + btnName + 'True', 'Dequeue is underflow...', true);
			} else {
				outputSteps(id1, '#' + btnName + 'False', 'Deleted element : ' + delValue, true);
			}
		});
	});
}

function delAfterAnim(cond, id1, valText,val, text) {
	$('.introjs-helperLayer').one('transitionend', function() {
		arrowMoving('#' + btnName + 'False', '#' + btnName + 'If', function() {
			$('.introjs-tooltiptext').append('<ul></ul>');
			let val1, val2;
			if (btnName == 'pop') {
				val1 = frontVal - 1;
				val2 = rearVal;
			} else {
				val1 = frontVal;
				val2 = rearVal + 1;
			}
			ifCondAnim('front', 'rear', ' ', '==', '#' + btnName + 'If', val1 , val2, true, cond, function() {
				if (cond) {
					arrowMoving('#' + btnName + 'If', '#FrntRerIsMinusOne', function() {
						$('.introjs-tooltiptext ul').append('<li><span>front = rear = -1</span></li>');
						travel('#FrntRerIsMinusOne', '.introjs-tooltiptext li:last span', function() {
							getIntrojsStep('#animationDiv', '', '', 'hide');
							$('.introjs-nextbutton').removeClass('introjs-disabled').show();
						});
					});
				} else {
					arrowMoving('#' + btnName + 'If', id1, function() {
						$('.introjs-tooltiptext ul').append('<li><span>' + valText + '</span></li>');
						travel(id1, '.introjs-tooltiptext li:last span', function() {
							flip('.introjs-tooltiptext li:last span', text + " = " + val, function() {
								getIntrojsStep('#animationDiv', '', '', 'hide');
								$('.introjs-nextbutton').removeClass('introjs-disabled').show();
							});
						});
					});
				}
			});
		});
	});
}

function methodDefinition(text, id, callBackFunction) {
	$('.introjs-helperLayer').one('transitionend', function() {
		typing('.introjs-tooltiptext', text, function() {
			arrowMoving(id, id, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	});
}

function ifCondAnim(val1, val2, val3, operatr, selector, id1Val, id2Val, flag, cond, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li><span id="ifCondtion"><span id="frstVal">' + val1 + '</span> ' + operatr + ' <span id="secndVal">'
				+'<span id="secndSubVal1">' +  val2 + '</span> <span id="secndSubVal2">' + val3 + '</span></span></span></li>');
	travel(selector, '#ifCondtion', function() {
		flip('#frstVal', id1Val, function() {
			if (flag) {
				if (val3 == '') {
					ifElseCondText(cond, callBackFunction);
				} else {
					flip('#secndVal', id2Val, function() {
						ifElseCondText(cond, callBackFunction);
					});
				}
			} else {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}
		});
	});
} 

function ifElseCondText(cond, callBackFunction) {
	if (cond) {  
		text = 'Condition evaluates to <y>true</y>. Hence control enters into the <y>if-block</y>.';
	} else {
		text = 'Condition evaluates to <y>false</y>. Hence control enters into the <y>else-block</y>.';
	}
	$('.introjs-tooltiptext ul').append('<div class="style-css"></div>');
	typing('.introjs-tooltiptext ul div', text, function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
		$('.user-btn').click(function() {
			$('.user-btn').remove();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({'top': l.top, 'left': l.left - ($('.arrow').width() * 1.5)
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	var time = 0;
	if (fromId !== toId) {
		time = 1;
	}
	TweenMax.to(".arrow", time, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function arrowMoving(id1, id2, callBackFunction) {
	$('.user-btn').remove();
	$('.background-color-yellow').removeClass('background-color-yellow');
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	arrow(id1, id2, function() {
		callBackFunction();
	});
}
