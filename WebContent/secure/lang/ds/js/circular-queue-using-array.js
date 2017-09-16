var flag = false, iVal = 0;
function circularQueueArrayReady() {
//	$('.opacity00').removeClass('opacity00');
	lang = getURLParameter("lang");
	$("#enqueueText").on("keydown", function(e) {
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
		$('#enqueIfPrintf').html('cout << "Circular Queue is overflow\\n";');
		$('#enqueElsePrintf').html('cout << "Successfully inserted.\\n";');
		$('#dequeIfPrintf').html('cout << "Circular Queue is underflow\\n";');
		$('#dequeElsePrintf').html('cout << "Deleted element = "\n \t\t\t\t << queue[front] << "\\n";');
		$('#displayIfPrintf').html('cout << "Circular Queue is empty.\\n";');
		$('#displayElsePrintf').html('cout << "Elements in the queue : \\n";');
		$('#printf1').html('cout << queue[i] << " ";');
		$('#printf2').html('cout << queue[i] << " ";');
		$('#printf3').html('cout << queue[i] << " ";');
		$('#displayNewLinePrintf').html('cout << "\\n";');
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


function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
					element: '#queueInit',
					intro: '',
					position: 'right'
				}, {
					element: '#btnsDiv',
					intro: '',
					position: 'left'
		}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		introjs.refresh();
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(elementId) {
				case 'btnsDiv':
					introjs.refresh();
					$("#mainCallMethod *").removeAttr("id");
					$('#mainCallMethod').append('<div id="lastCall" class="opacity00"></div>');
					//$("#mainCallMethod").scrollTo($("#mainCallMethod > div:last-child()"), 100);
					flag = false;
					$('.background-color-yellow').removeClass('background-color-yellow');
					$('.fa').remove();
					$('#enqueueText').val('');
					typing('.introjs-tooltiptext', 'Choose any operation.');
					if ($("#enqueueText").is(":disabled")) {
						doPlayPause();
					}
					setTimeout(function() {
						$("#btnsDiv [disabled]").removeAttr("disabled");
						$('#enqueueText').effect('highlight', {color: 'yellow'}, 500).focus();
					}, 500);
				break;
				case 'lastCall':
					$('#lastCall').removeClass('opacity00');
					setTimeout(function() {
						doPlayPause();
					}, 500);
				break;
				case 'enqueuMethod':
					if (!flag) {
						text = 'In this method we are inserting a value into the <y>circular queue</y>.';
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltiptext').append('<ul style="font-family: monospace"><li><span>int x</span></li></ul>');
							travel('#enqueueXDec', '.introjs-tooltiptext li:last span', function() {
								let enqueueValue = parseInt($('#enqueueText').val());
								$(".introjs-tooltiptext ul li span").append(" = <span>" + enqueueValue + "</span>.");
								$("#enqueueXDec").removeClass('background-color-yellow');
								arrow('#enqueIfCond', '#enqueIfCond', function() {
									$('.introjs-tooltiptext ul').append('<li><span id="enqTotlIfCond"><span id="enqIfCond1">(<span id="enqIf1">'
													+ ' <span id="rear1">rear</span> == <span id="totlMaxVal"><span id="maxVal">MAX</span> - 1</span></span>'
													+ ' && <span id="enqIf2"><span id="frontVal">front</span> == 0</span>)</span> || '
													+ '<span id="enqIfCond2"><span id="rearPlusVal"><span id="rearVal">rear</span> + 1</span> == '
													+ ' <span id="rearFrontVal">front</span></span></span></li>');
									travel('#enqueIfCond', '#enqTotlIfCond', function() {
										flipAnimation('#maxVal', '#totlMaxVal', '#rear1', 10, 9, rearVal, function() {
											enqueueIfCondition();
										});
									});
								});
							});
						});
					} else {
						$('.introjs-tooltiptext').append('<ul style="font-family: monospace"></ul>');
						rearIncrementation();
					}
				break;
				case 'dequeuMethod':
					text = 'In this method we are deleting an element from the <y>circular queue</y>.';
					typing('.introjs-tooltiptext', text, function() {
						arrow('#frontIsMinusOne', '#frontIsMinusOne', function() {
							$('.introjs-tooltiptext').append('<ul style="font-family: monospace"></ul>');
							ifCondAnim('front', ' -1 ', '', ' == ', '#frontIsMinusOne', frontVal, '-1', false, function() {
								let cond = frontVal == -1;
								ifElseCondText(cond);
								$('.introjs-tooltiptext li:last').append('<div></div>');
								typing('.introjs-tooltiptext li:last div', text, function() {
									getIntrojsStep('#outputDiv', '', '', 'hide');
									if (cond) {
										arrowMoving("#frontIsMinusOne", '#dequeIfPrintf', function() {
											$('#dequeIfPrintf').addClass('background-color-yellow');
											$('#output').append('<div class="opacity00">Circular Queue is underflow</div>');
											$('.introjs-nextbutton').removeClass('introjs-disabled').show();
										});
									} else {
										arrowMoving("#frontIsMinusOne", '#dequeElsePrintf', function() {
											$('#dequeElsePrintf').addClass('background-color-yellow');
											$('#output').append('<div class="opacity00">Deleted element = ' + displayArr[0] + '</div>');
											//queueArr.splice(frontVal, 1);
											queueArr.splice(0, 1);
											displayArr.splice(0, 1);
											$('.introjs-nextbutton').removeClass('introjs-disabled').show();
										});
									}
								});
							});
						});
					});
				break;
				case 'dequeDiv':
					flag = true;
					arrowMoving("#dequeElsePrintf", '#ifRearIsFront', function() {
						$('.introjs-tooltiptext').append('<ul style="font-family: monospace"></ul>');
						ifCondAnim('rear', ' front ', '', ' == ', '#ifRearIsFront', rearVal, frontVal, true, function() {
							let cond1 = rearVal == frontVal;
							ifElseCondText(cond1);
							$('.introjs-tooltiptext li:last').append('<div></div>');
							typing('.introjs-tooltiptext li:last div', text, function() {
								$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onClick="dequeAnim1()">Next &#8594;</a>');
							});
						});
					});
				break;
				case 'displayMethod':
					iVal = 0;
					text = 'In this method we are printing all the elements from the <y>circular queue</y>.';
					typing('.introjs-tooltiptext', text, function() {
						arrow('#ifFrontNRearIsMinusOne', '#ifFrontNRearIsMinusOne', function() {
							$('.introjs-tooltiptext').append('<ul style="font-family: monospace"><li><span><span id="frontVal">front</span>'
											+ ' == -1 && <span id="rearVal">rear</span> == -1</span></li></ul>');
							travel('#ifFrontNRearIsMinusOne', '.introjs-tooltiptext li', function() {
								flip('#frontVal', frontVal, function() {
									flip('#rearVal', rearVal, function() {
										let cond = frontVal == -1 && rearVal == -1;
										ifElseCondText(cond);
										$('.introjs-tooltiptext li').append('<div></div>');
										typing('.introjs-tooltiptext li div', text, function() {
											getIntrojsStep('#outputDiv', '', '', 'hide');
											if (cond) {
												arrowMoving("#ifFrontNRearIsMinusOne", '#displayIfPrintf', function() {
													$('#displayIfPrintf').addClass('background-color-yellow');
													$('#output').append('<div class="opacity00">Circular Queue is empty.</div>');
													$('.introjs-nextbutton').removeClass('introjs-disabled').show();
												});
											} else {
												$('#displayDiv').addClass('Checking');
												arrowMoving("#ifFrontNRearIsMinusOne", '#displayElsePrintf', function() {
													$('#displayElsePrintf').addClass('background-color-yellow');
													$('#output').append('<div class="opacity00">Elements in the queue : </div>');
													$('.introjs-nextbutton').removeClass('introjs-disabled').show();
												});
											}
										});
									});
								});
							});
						});	
					});
				break;
				case 'displayDiv':
					let cond1 = frontVal <= rearVal;
					if (cond1) {
						displayAnim1(cond1, function() {
							var displayText = "";
							for (var i = 0; i < queueArr.length; i++) {
								displayText = displayText + queueArr[i] + " "; 
							}
							displayAnim("#ifFrontLesThanRear", '#frontLesRearForLoop', 'rear', rearVal, 'front', frontVal, displayText);
						});
					} else {
						if ($('#displayDiv').hasClass('Checking')) {
							displayAnim1(cond1, function() {
								let displayText = "";
								for (let i = frontVal; i <= 9; i++) {
									displayText = displayText + displayArr[iVal] + " ";
									iVal++;
								}
								$('#displayDiv').removeClass('Checking');
								displayAnim("#ifFrontLesThanRear", '#elseFrLoop1', 'MAX - 1', 9, 'front', frontVal, displayText);
							});
						} else {
							$('.introjs-tooltip').removeClass('hide');
							$('.introjs-tooltiptext').append('<ul style="font-family: monospace"></ul>');
							let displayText1 = "";
							for (let i = 0; i <= rearVal; i++) {
								displayText1 = displayText1 + displayArr[iVal] + " ";
								iVal++;
							}
							displayAnim("#elseFrLoop1", '#elseFrLoop2', 'rear', rearVal, '0', 0, displayText1);
						}
					}
				break;
				case "animationDiv":
					$("#btnsDiv .btn").attr("disabled", "disabled");
					if (introjs._introItems[introjs._currentStep].tooltipClass == "hide") {
						doPlayPause();
					} else {
						doPlayPause();
						setTimeout(function() {
							typing(".introjs-tooltiptext", "Successfully clear the <y>queue</y>.");
						}, 1500);
					}
					break;
				case 'outputDiv':
					$("#outputDiv").removeClass("opacity00");
					$(".output-console-body").scrollTo($("#output > div:last-child()"), 500, function() {
						$("#output > div:last-child()").removeClass("opacity00");
						if($("#output > div:last-child() *").length == 1) {
							$("#output").append("<br/>");
						}
						$('.background-color-yellow').removeClass('background-color-yellow');
						doPlayPause();
					});
				break;
			}
		});
	});
	introjs.start();
	text = '<ul><li>Let us declare an int array <y>queue</y> with maximum size <y>10</y>.</li>'
			+ ' <li>Let us declare two int variables <y>front</y> and <y>rear</y> and initialized with <y>-1</y>.</li></ul>';
	typing('.introjs-tooltiptext', text, function() {
		$('#animationDiv').removeClass('opacity00');
		$('.introjs-nextbutton').show();
	});
}

function enqueueIfCondition() {
	let cond1 = rearVal == 9;
	flip('#enqIf1', cond1, function() {
		flip('#frontVal', frontVal, function() {
			let cond2 = frontVal == 0;
			flip('#enqIf2', cond2, function() {
				let cond3 = cond1 && cond2;
				flip('#enqIfCond1', cond3, function() {
					flipAnimation('#rearVal', '#rearPlusVal', '#rearFrontVal', rearVal, (rearVal + 1), frontVal, function() {
						let cond4 = (rearVal + 1) == frontVal;
						flip('#enqIfCond2', cond4, function() {
							let cond = cond3 || cond4;
							ifElseCondText(cond);
							$('.introjs-tooltiptext li:last').append('<div></div>');
							typing('.introjs-tooltiptext li:last div', text, function() {
								if (cond) {
									arrowMoving("#enqueIfCond", '#enqueIfPrintf', function() {
										$('#enqueIfPrintf').addClass('background-color-yellow');
										getIntrojsStep('#outputDiv', '', '', 'hide');
										$('#output').append('<div class="opacity00">Circular Queue is overflow</div>');
										$('.introjs-nextbutton').removeClass('introjs-disabled').show();
									});
								} else {
									$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onClick="enqueueElseBlk()">'
												+ ' Next &#8594;</a>')
								}
							});
						});
					});
				});
			});
		});
	});
}

function enqueueElseBlk() {
	arrowMoving("#enqueIfCond", '#ifRearIsMaxMinusOne', function() {
		ifCondAnim('rear', ' MAX ', ' - 1', ' == ', '#ifRearIsMaxMinusOne', rearVal, '10', true, function() {
			flip('#secndVal', 9, function() {
				let cond = rearVal == 9;
				ifElseCondText(cond);
				ifCondBtn(cond, text, 'assingRearValMinus1', 'enqueElseFrontIsMinus1')
			});
		});
	});
}

function enqueElseFrontIsMinus1() {
	arrowMoving("#ifRearIsMaxMinusOne", '#ifFrontIsMinusOne', function() {
		ifCondAnim('front', ' -1 ', '', ' == ', '#ifFrontIsMinusOne', frontVal, '-1', false, function() {
			let cond = frontVal == -1;
			if (cond) {  
				text = 'Condition evaluates to <y>true</y>. Hence control enters into the <y>if-block</y>.';
			} else {
				text = 'Condition evaluates to <y>false</y>. Hence control comes out of the <y>if-block</y>.';
			}
			ifCondBtn(cond, text, 'assignFrontVal0', 'rearIncrementation');
		});
	});
}

function assingRearValMinus1() {
	arrowMoving("#ifRearIsMaxMinusOne", '#asnRearIsMinusOne', function() {
		$('.introjs-tooltiptext ul').append('<li><span>rear = -1</span></li>');
		travel('#asnRearIsMinusOne', '.introjs-tooltiptext li:last span', function() {
			flag = true;
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function assignFrontVal0() {
	arrowMoving("#ifFrontIsMinusOne", '#asnFrontIsZero', function() {
		$('.introjs-tooltiptext ul').append('<li><span>front = 0</span></li>');
		travel('#asnFrontIsZero', '.introjs-tooltiptext li:last span', function() {
			rearIncrementation();
		});
	});
}

function rearIncrementation() {
	let selector;
	if (frontVal == -1) {
		selector = "#asnFrontIsZero";
	} else if (rearVal == 9) {
		selector = '#asnRearIsMinusOne'
	} else {
		selector = "#ifFrontIsMinusOne";
	}
	arrowMoving(selector, '#rearInc', function() {
		$('.introjs-tooltiptext ul').append('<li><span id="rearValue">rear++</span></li>');
		travel('#rearInc', '.introjs-tooltiptext li:last span', function() {
			let rVal;
			if (rearVal == 9) {
				rVal = -1;
			} else {
				rVal = rearVal;
			}
			flip('#rearValue', "rear = " + (rVal + 1), function() {
				arrowMoving("#rearInc", '#asnArrayVal', function() {
					$('.introjs-tooltiptext ul').append('<li><span>queue[<span id="rearVal">rear</span>] = <span id="xVal">x</span></span></li>');
					travel('#asnArrayVal', '.introjs-tooltiptext li:last span', function() {
						flip('#rearVal', (rVal + 1), function() {
							flip('#xVal', parseInt($('#enqueueText').val()), function() {
								arrowMoving("#asnArrayVal", '#enqueElsePrintf', function() {
									$('#enqueElsePrintf').addClass('background-color-yellow');
									getIntrojsStep("#animationDiv", "", "", "hide");
									$('#output').append('<div class="opacity00">Successfully inserted.</div>');
									$(".introjs-nextbutton").removeClass("introjs-disabled").show();
								});
							});
						});
					});
				});
			});
		});
	});
}

function dequeAnim1() {
	$('.user-btn').remove();
	let cond1 = rearVal == frontVal;
	if (cond1) {
		arrowMoving("#ifRearIsFront", '#rearNFrontMinusOne', function() {
			$('.introjs-tooltiptext ul').append('<li><span>rear = front = -1</span></li>');
			travel('#rearNFrontMinusOne', '.introjs-tooltiptext li:last span', function() {
				getIntrojsStep("#animationDiv", "", "", "hide");
				$(".introjs-nextbutton").removeClass("introjs-disabled").show();
			});
		});
	} else {
		arrowMoving("#ifRearIsFront", '#frontIsMaxMinusOne', function() {
			ifCondAnim('front', ' MAX ', ' - 1', ' == ', '#frontIsMaxMinusOne', frontVal, 10, true, function() {
				flip('#secndVal', 9, function() {
					let cond2 = frontVal == 9;
					ifElseCondText(cond2);
					$('.introjs-tooltiptext li:last').append('<div></div>');
					typing('.introjs-tooltiptext li:last div', text, function() {
						$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onClick="dequeAnim2()">Next &#8594;</a>');
					});
				});
			});
		});
	}
}

function dequeAnim2() {
	$('.user-btn').remove();
	let cond2 = frontVal == 9;	//this cond (let cond2 = frontVal == 9;)
	if (cond2) {
		arrowMoving("#frontIsMaxMinusOne", '#asignFrontIsZero', function() {
			$('.introjs-tooltiptext ul').append('<li><span>front = 0</span></li>');
			travel('#asignFrontIsZero', '.introjs-tooltiptext li:last span', function() {
				getIntrojsStep("#animationDiv", "", "", "hide");
				$(".introjs-nextbutton").removeClass("introjs-disabled").show();
			});
		});
	} else {
		arrowMoving("#frontIsMaxMinusOne", '#frontInc', function() {
			$('.introjs-tooltiptext ul').append('<li><span id="frntValInc">front++</span></li>');
			travel('#frontInc', '.introjs-tooltiptext li:last span', function() {
				flip('#frntValInc', "front = " + (frontVal + 1), function() {
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		});
	}
}

function displayAnim(selector1, selector2, frCond, frCondVal, frInit, frInitVal, displayText) {
	arrowMoving(selector1, selector2, function() {
		$(selector2).addClass('background-color-yellow');
		$('.introjs-tooltiptext ul').append('<li></li>')
		var text = "This <y>for-loop</y> is repeated untill the <y>i</y> value is less than or equal to"
				+ " <y>" + frCond + " </y> value (i.e., <y>" + frCondVal + "</y>).";
		typing(".introjs-tooltiptext li:last", text, function() {
			$('.introjs-tooltiptext ul').append('<li></li>')
			var text = "Initially the <y>i</y> value is initialize with <y>" + frInit + "</y> value" 
				+ " (i.e., <b style='font-family: monospace;'>i = " + frInitVal + "</b>).";
			typing($(".introjs-tooltiptext ul li:last"), text, function() {
				$(".introjs-tooltiptext ul").append("<li></li>");
				var text = "It prints the value of <y>queue[i]</y>.";
				typing($(".introjs-tooltiptext ul li:last"), text, function() {
					$("#output").append("<div class='opacity00 position-css'>" + displayText + "</div>");
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		});
	});
}

function displayAnim1(cond1, callBackFunction) {
	arrow('#displayElsePrintf', '#ifFrontLesThanRear', function() {
		$('.introjs-tooltip').removeClass('hide');
		$('.introjs-tooltiptext').append('<ul style="font-family: monospace"></ul>');
		ifCondAnim('front', 'rear', '', ' <= ', '#ifFrontLesThanRear', frontVal, rearVal, true, function() {
			ifElseCondText(cond1);
			$('.introjs-tooltiptext li').append('<div></div>');
			typing('.introjs-tooltiptext li div', text, function() {
				$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn">Next &#8594;</a>');
				$('.user-btn').click(function() {
					$(this).remove();
					callBackFunction();
				});
			});
		});
	});
}

function ifElseCondText(cond) {
	if (cond) {  
		text = 'Condition evaluates to <y>true</y>. Hence control enters into the <y>if-block</y>.';
	} else {
		text = 'Condition evaluates to <y>false</y>. Hence control enters into the <y>else-block</y>.';
	}
}
	
function ifCondBtn(cond, text, btn1, btn2) {
	$('.introjs-tooltiptext li:last').append('<div></div>');
	typing('.introjs-tooltiptext li:last div', text, function() {
		if (cond) {  
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onClick="' + btn1 + '()">Next &#8594;</a>');
		} else {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onClick="' + btn2 + '()">Next &#8594;</a>');
		}
	});	
}

function ifCondAnim(val1, val2, val3, cond, selector, id1Val, id2Val, flag, callBackFunction) {
	$('.introjs-tooltiptext ul').append('<li><span id="ifCondtion"><span id="frstVal">' + val1 + '</span> ' + cond+ ' <span id="secndVal">'
				+'<span id="secndVal1">' +  val2 + '</span> <span id="secndVal2">' + val3 + '</span></span></span></li>');
	travel(selector, '#ifCondtion', function() {
		flip('#frstVal', id1Val, function() {
			if (flag) {
				flip('#secndVal1', id2Val, function() {
					callBackFunction();
				});
			} else {
				callBackFunction();
			}
		});
	});
} 

function flipAnimation(id1, id2, id3, id1Val, id2Val, id3Val, callBackFunction) {
	flip(id1, id1Val, function() {
		flip(id2, id2Val, function() {
			flip(id3, id3Val, function() {
				callBackFunction();
			});
		});
	});
}
	
function arrowMoving(id1, id2, callBackFunction) {
	$('.user-btn').remove();
	$(id1).removeClass('background-color-yellow');
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	arrow(id1, id2, function() {
		callBackFunction();
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


