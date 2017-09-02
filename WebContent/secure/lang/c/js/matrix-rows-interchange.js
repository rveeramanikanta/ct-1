var typingSpeed = 10;
var row = 0, col = 0, count = 1;
var valIndex = 0, index = 1;
var stack = [], stackIndex = [];
var size = ["0", "1", "2", "3"];


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
						element :'#matrixRowInterChange',
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
			
				case "matrixRowInterChange" :
					$("#bodyContaint").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the sample <span class="ct-code-b-yellow">program</span> to '
							+ 'interchange the <span class="ct-code-b-yellow">rows</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#arrDec", "arrayDec", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "arrDec" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing an integer array'
							+ ' <span class="ct-code-b-yellow">arr[3][3]</span> and variables are '
							+ '<span class="ct-code-b-yellow">row</span>,'
							+ '<span class="ct-code-b-yellow"> col</span>, '
							+ '<span class="ct-code-b-yellow">row1</span>, '
							+ '<span class="ct-code-b-yellow">row2</span>, and '
							+ '<span class="ct-code-b-yellow">temp</span> valle will be initialize to 0.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animationDiv", "arrayVal", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "animationDiv" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "arrayVal" :
							transferEffect('#arrDec', '#arrElements', function() {
								$('#eleAtInnerIdx').removeClass('opacity00');
								introNextSteps("#forLoop1", "readValesFromKeybord", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
					}
				break;
				
				case "forLoop" + count :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "readValesFromKeybord" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'This <span class="ct-code-b-yellow">for</span> loop is used to read'
									+ ' the matrix values from the keybord.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#outputDiv", "readMatrixValues", 'left');
								$('.introjs-nextbutton').show();
							});
						break;
						case "printBeforeVal" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'This <span class="ct-code-b-yellow">for</span> loop is used to print'
									+ ' the matrix values to the console.';
							typing('.introjs-tooltiptext', text, function() {
								$("#consoleBodyDiv1").append("<div id='value"+ valIndex +"'>"
										+ " <span id='outVal0'></span>\t<span id='outVal1'></span>"
										+ "\t<span id='outVal2'></span></div>");
								valIndex++;
								$("#consoleBodyDiv1").append("<div id='value"+ valIndex +"'>"
										+ " <span id='outVal3'></span>\t<span id='outVal4'></span>"
										+ "\t<span id='outVal5'></span></div>");
								valIndex++;
								$("#consoleBodyDiv1").append("<div id='value"+ valIndex +"'>"
										+ " <span id='outVal6'></span>\t<span id='outVal7'></span>"
										+ "\t<span id='outVal8'></span></div>");
								introNextSteps("#outputDiv", "printMatrixValues", 'left');
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "exchangeCondition" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'This <span class="ct-code-b-yellow">for</span> loop is used to print'
									+ ' the matrix values to the console.';
							typing('.introjs-tooltiptext', text, function() {
								introNextSteps("#explanationDiv", "explanationDiv", 'left');
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "printAfterVal" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'This <span class="ct-code-b-yellow">for</span> loop is used to print'
									+ ' the matrix values to the console after exchange the row values.';
							typing('.introjs-tooltiptext', text, function() {
								$("#consoleBodyDiv1").append("<div id=afterValue><div id='value"+ valIndex +"'>"
										+ " <span id='aoutVal0'></span>\t<span id='aoutVal1'></span>"
										+ "\t<span id='aoutVal2'></span></div></span>");
								valIndex++;
								$("#afterValue").append("<div id='value"+ valIndex +"'>"
										+ " <span id='aoutVal3'></span>\t<span id='aoutVal4'></span>"
										+ "\t<span id='aoutVal5'></span></div>");
								valIndex++;
								$("#afterValue").append("<div id='value"+ valIndex +"'>"
										+ " <span id='aoutVal6'></span>\t<span id='aoutVal7'></span>"
										+ "\t<span id='aoutVal8'></span></div>");
								introNextSteps("#outputDiv", "printMatrixValuesAfter", 'left');
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				
				case"explanationDiv" :
					transferEffect("#forLoop3", "#logicOfMatrixInterChange", function() {
						arrow("#ifCondition", "#ifCondition", function() {
							matrixRowInterchangeValues();								
						});
					});
				break;
				
				case "outputDiv":
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "readMatrixValues" :
							$('.introjs-tooltip').removeClass('hide');
							var text = "press enter key for next entry.";
							typing(".introjs-tooltiptext", text, function() {
								tableIndex();
						 		$("#consoleBodyDiv1").append("<div>Enter the value of a[0][0]: "
						 			+ "<div id='blinkCursor0' style='display:inline-block; position: relative;'"
						 			+ " class='int input-char a00' placeholder='value' "
						 			+ "contenteditable='true' maxlength='2'></div></div>");
						 		$('#blinkCursor0').focus();
						 		introNextSteps("#arrElements", "arrElements", 'left');
						 		keyDownEvent();
							});
						break;
						
						case "printBeforeText" :
							valIndex++;
							$("#consoleBodyDiv1").append("<div id='value"+ valIndex +"'>Before interchange :</div>");
							introNextSteps("#forLoop2", "printBeforeVal", 'bottom');
							scrollToBottom(valIndex);
							count++;
							setTimeToIntroGoNextStep();
						break;
						
						case "printMatrixValues" :
							introNextSteps("#printf2", "enterRow", 'left');
							storeValuesIntoTheArr("#sortEle", "#outVal",0);
						break;
						
						case "printEnterRow" :
							valIndex++;
							$("#consoleBodyDiv1").append("<div id='value"+ valIndex +"'>"
									+ "Enter the numbers of two rows to be exchanged\t"
									+ '<span id="inputVal" class="input-all">'
									+ '<input id="secondInput" maxlength="15" class="input-all"/></div>');
							introNextSteps("#scanf2", "readRowVal", 'bottom');
							scrollToBottom(valIndex);
							setTimeToIntroGoNextStep();
						break;
						
						case "readRowValuas" :
							$('.introjs-tooltip').removeClass('hide');
							var text ="Enter <b class='ct-code-b-yellow'>row1</b> and <b class='ct-code-b-yellow'>"
					 				+ "row2</b> values separated by <b class='ct-code-b-yellow'>space</b>.</br></br>"
					 				+ "For example your want to exchanged <b class='ct-code-b-yellow'>first row</b>"
					 				+ " and <b class='ct-code-b-yellow'>second row</b>"
					 				+ " enter them as <b class='ct-code-b-yellow'>1 2</b>.";
							typing(".introjs-tooltiptext", text, function() {
								introNextSteps("#forLoop3", "exchangeCondition", 'bottom');
								readRowOneAndRowTwoValues();
							});
						break;
						
						case "printAfterExchange" :
							valIndex++;
							$("#consoleBodyDiv1").append("<div id='value"+ valIndex +"'>"
										+ "The matix after interchanging the two rows(in the original matrix</div>");
							introNextSteps("#forLoop4", "printAfterVal", 'bottom');
							scrollToBottom(valIndex);
							count++;
							setTimeToIntroGoNextStep();
						break;
						
						case "printMatrixValuesAfter" :
							for (var i = 0; i <= 8; i++) {
								$("#aoutVal" + i).text($("#sortEle" + i).text());
							}
							introNextSteps("#restartBtn", "restartBtn", 'bottom');
							transferEffect("#values", "#afterValue", function() {
								scrollToBottom(valIndex);
								setTimeout(function() {
									introcode.nextStep();
								},1200);
							});
						break;
					}
					break;
					
				case "arrElements" :
					introNextSteps("#printf1", "beforeText", 'left');
					storeValuesIntoTheArr("#blinkCursor", "#sortEle",0);
				break;
				
				case "printf" + count:
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "beforeText" :
							introNextSteps("#outputDiv", "printBeforeText", 'bottom');
							setTimeToIntroGoNextStep();
						break;
						
						case "enterRow" :
							introNextSteps("#outputDiv", "printEnterRow", 'bottom');
							setTimeToIntroGoNextStep();
						break;
						case "afterEnterChange" :
							introNextSteps("#outputDiv", "printAfterExchange", 'bottom');
							setTimeToIntroGoNextStep();
						break;
					}
				break;

				case "scanf" + count :
					$('.introjs-tooltip').removeClass('hide');
					text = 'The <span class="ct-code-b-yellow">scanf()</span> function reads'
							+ ' two integer values as '
							+ '<span class="ct-code-b-yellow">row1</span> and <span class="ct-code-b-yellow">row2</span>.';
					typing('.introjs-tooltiptext', text, function() {
						count++;
						introNextSteps("#outputDiv", "readRowValuas", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "restartBtn":
					$("#restartBtn").removeClass('opacity00');
					$('.introjs-tooltip').removeClass('hide').css('min-width','200px');
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
	text = 'In this <span class="ct-code-b-yellow">matrix</span> we will interchange'
			+ ' the <span class="ct-code-b-yellow">rows</span> and <span class="ct-code-b-yellow">columns</span>.'
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}


function matrixRowInterchangeValues() {
	var val1 = arr[0];
	var val2 = arr[1];

	flipEffectWithTweenMax("#row1", val1 , function() {
		flipEffectWithTweenMax("#firstCon", (val1 >= 0) , function() {
			if (val1 >= 0) {
				$("#firstCon").addClass("true");
				flipEffectWithTweenMax("#row2", val2 , function() {
					flipEffectWithTweenMax("#secondCon", (val2 >= 0) , function() {
						if (val2 >= 0) {
							$("#secondCon").addClass("true");
							flipEffectWithTweenMax("#row3", val1 , function() {
								flipEffectWithTweenMax("#thirdCon", (val1 < 3) , function() {
									if (val1 < 3) {
										$("#thirdCon").addClass("true");	
										flipEffectWithTweenMax("#row4", val2 , function() {
											flipEffectWithTweenMax("#fourthCon", (val2 < 3) , function() {
												if (val2 < 3) {
													$("#fourthCon").addClass("true");
													forLoopCondition();
												} else {
													falseCondition("#fourthCon");
												}
											});
										});
									} else {
										falseCondition("#thirdCon");
									}
								});
							});
						} else {
							falseCondition("#secondCon");
						}
					});
				});
			} else {
				falseCondition("#firstCon");
			}
		});
	});
}

function falseCondition(selector) {
	valIndex++;
	$("#consoleBodyDiv1").append("<div id='value"+ valIndex +"'>Not possible</div>");
	introNextSteps("#printf3", "afterEnterChange", 'bottom');
	
	$("#forTrueOrFalse").text("=====> false").addClass("red-color");
	$(selector).text("false").addClass("false");
	$('.introjs-tooltip').removeClass('hide');
	text = 'The condition <b class="ct-code-b-yellow">row1 &gt;= 0</b> && <b class="ct-code-b-yellow">row2 &gt;= 0</b>'
			+' && <b class="ct-code-b-yellow">row1 &lt; 3</b> && <b class="ct-code-b-yellow">row2 &lt; 3</b>'
			+ ' condition evalates to <b class="ct-code-b-yellow">false</b>. So there is not possible to exchage the rows'
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
			$(".introjs-duplicate-nextbutton").remove();
			arrow("#ifCondition", "#printf", function() {
				transferEffect("#printf", "#value" + valIndex, function() {
				scrollToBottom(valIndex);
					setTimeToIntroGoNextStep();
				});
			}); 	
		});
	});
}

function forLoopCondition() {
	valIndex++;
	introNextSteps("#printf3", "afterEnterChange", 'bottom');
	$("#forTrueOrFalse").text("=====> true").addClass("green-color");
	$('.introjs-tooltip').removeClass('hide');
	text = 'The condition <b class="ct-code-b-yellow">row1 &gt;= 0</b> && <b class="ct-code-b-yellow">row2 &gt;= 0</b>'
			+' && <b class="ct-code-b-yellow">row1 &lt; 3</b> && <b class="ct-code-b-yellow">row2 &lt; 3</b>'
			+ ' condition evalates to <b class="ct-code-b-yellow">true</b>.';
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
			$(".introjs-duplicate-nextbutton").remove();
			arrow("#ifCondition", "#forLoop", function() {
				$('.introjs-tooltip').addClass('hide');
				changeRowValues();
			}); 	
		});
	});
}

function changeRowValues() {
	var row1 = arr[0];
	var row2 = arr[1];
		
	flipEffectWithTweenMax("#rowCon", row , function() {
		if (row < 3) {
			$("#forRowCon").addClass("true");
			$("#trueOrFalse").text("=====> true").addClass("green-color");
			arrow("#forLoop", "#tempValSpan", function() {
				flipEffectWithTweenMax("#arrRowIdx1", row , function() {
					flipEffectWithTweenMax("#arrRow1", row1 , function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The <b class="ct-code-b-yellow">arr['+ row1 +']['+ row +']</b> value i.e (<b class="ct-code-b-yellow">'
								+ $(".sortEle" +row1+""+row).text() +'</b>) is stored in the variable'
								+ ' <b class="ct-code-b-yellow">temp</span>.';
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
							$(".introjs-duplicate-nextbutton").click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								swapArrValToArr(row1, row2);
							});
						});
					});
				});
			});
		} else {
			$('.introjs-tooltip').addClass('hide');
			$("#forRowCon").addClass("false");
			$("#trueOrFalse").text("=====> false").removeClass("green-color").addClass("red-color");
			$('.introjs-tooltip').removeClass('hide');
			text = 'the row <b class="ct-code-b-yellow">'+ row1 +'</b> and  <b class="ct-code-b-yellow">'
					+ row2 +'</b> elements are exchanged successfully.'
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
				$(".introjs-duplicate-nextbutton").click(function() {
					$('.introjs-tooltip').addClass('hide');
					$(".introjs-duplicate-nextbutton").remove();
						introcode.nextStep();
				});
			});
		}
	});
}

function swapArrValToArr(row1, row2) {
	$('.introjs-tooltip').addClass('hide');
	fadeInFromEffectWithTimelineMax(".sortEle" +row1+""+row , "#tempVal", function() {
		arrow("#tempValSpan", "#row1MinVal", function() {
			flipEffectWithTweenMax("#arrRowIdx2", row , function() {
				flipEffectWithTweenMax("#arrRow2", row2 , function() {
					flipEffectWithTweenMax("#arrRowIdx3", row , function() {
						flipEffectWithTweenMax("#arrRow11", row1 , function() {
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <b class="ct-code-b-yellow">arr['+ row2 +']['+ row 
							        + ']</b> value i.e (<b class="ct-code-b-yellow">'
									+ $(".sortEle" +row2+""+row).text() +'</b>) is stored in '
									+ ' <b class="ct-code-b-yellow">arr['+ row1 +']['+ row +']</b>.'
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>"
										+ "Next &#8594;</a>");
								$(".introjs-duplicate-nextbutton").click(function() {
									$('.introjs-tooltip').addClass('hide');
									$(".introjs-duplicate-nextbutton").remove();
									swapTempToArr(row1, row2);
								});
							});	
						});
					});
				});
			});
		});
	});
}

function swapTempToArr(row1, row2) {
	$('.introjs-tooltip').addClass('hide');
	fadeInFromEffectWithTimelineMax(".sortEle" +row2+""+row , ".sortEle" +row1+""+row, function() {
		arrow("#row1MinVal", "#row2MinVal", function() {
			flipEffectWithTweenMax("#arrRowIdx4", row , function() {
				flipEffectWithTweenMax("#tRow2", row2 , function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'The temp value i.e (<b class="ct-code-b-yellow">'
							+ $("#tempVal").text() +'</b>) is stored in '
							+ '<b class="ct-code-b-yellow"> arr['+ row2 +']['+ row +']</b>.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
						$(".introjs-duplicate-nextbutton").click(function() {
							$('.introjs-tooltip').addClass('hide');
							$(".introjs-duplicate-nextbutton").remove();
							storeTempValue(row1, row2);
						});
					});	
				});
			});
		});
	});
}

function storeTempValue(row1, row2) {
	fadeInFromEffectWithTimelineMax("#tempVal" , ".sortEle" +row2+""+row, function() {
		arrow("#row2MinVal", "#forLoop", function() {
			$("#rowInc").effect( "highlight",{color: 'blue'}, 500, function() {
				row++;
				changeRowValues();
			});
		});
	});
}

function readRowOneAndRowTwoValues() {
arr = [];
$("#secondInput").addClass("blinking-orange").removeAttr('disabled').focus();;
$('#secondInput').on("keydown", function(e) {
	if ((arr.length == 2 || arr.length == 0) && e.keyCode == 32) {
		e.preventDefault();
	}
	if (arr.length == 1) {
		var flag = false;
		flag = $('#secondInput').val().indexOf(' ')>=0;
		if (e.keyCode == 32 && flag) {
			e.preventDefault();
		}
	}
 	if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
		introcode.nextStep();
	}
});
	
$('#secondInput').on("keyup", function(e) {
	$('.length-error-text,.size-error').remove();
	if ($(this).val() == "") {
		$(".introjs-nextbutton").hide();
		$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
											"Please enter an row1 and row2 values each separated by a space.</span>");
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
		$('.introjs-tooltiptext').append("<span class='ct-code-b-red backspace-error length-error-text'>"
				+ "</br>Enter two numbers separated by space.</span>");
	}
	
	if (arr.length == 2) {
		var a0 = $.isNumeric(parseInt(arr[0]));
		var a1 = $.isNumeric(parseInt(arr[1]));
		var aFirst = parseInt(arr[0]).toString();
		var aSecond = parseInt(arr[1]).toString();
		var dot = arr[1].indexOf(".") == -1;
		var dot1 = arr[0].indexOf(".") == -1;
		if (a0 && a1 && dot && dot1) {
			if ($.inArray(aFirst, size) !== -1 && $.inArray(aSecond, size) !== -1) {
				$(".introjs-nextbutton").show();
			} else {
				if ($('.size-error').length == 0 ) {
					$(".introjs-nextbutton").hide();
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red size-error length-error-text'></br>size should be 0 to 3(inclusive)</span>");
				}
			}
		  } else {
		  	$(".introjs-nextbutton").hide();
		  	$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'> "
					+"<br/> Please follow the above format.</br>size must be in numbers.</span>");
		  }
	} else {
		$(".introjs-nextbutton").hide();
	}
});
}


function storeValuesIntoTheArr(id1, id2, idx) {
	if (idx <= 8 ) {
		scrollToBottom(valIndex);	
		fromEffectWithTweenMax( id1 +'' + idx, id2 + '' + idx,  function() {
			idx++;
			storeValuesIntoTheArr(id1, id2, idx);
		});
	} else {
		setTimeToIntroGoNextStep();
	}
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrowImg").remove();
	$('body').append("<i class='fa fa-arrow-right arrowImg faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrowImg').offset({
		'top': l.top,
		'left': l.left - ($('.arrowImg').outerWidth() * 2)
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrowImg").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrowImg").css("left")) + (l2.left - l1.left);
	TweenMax.to(".arrowImg", 0.8, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function fadeInFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	$(selector1).parent().effect( "highlight",{color: 'blue'}, 500, function() {
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
		$(selector2).text($(selector1).text());
		timelineMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}}).to('#dummy', 0.5, {opacity: 0, onComplete: function() {
			$('#dummy').remove();
		}}, "-=0.5");
	});
}

function flipEffectWithTweenMax(selector, val, callBackFunction) {
	$(selector).effect( "highlight",{color: 'blue'}, 500, function() {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}


function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 500 , function() {
			$(selector1).removeClass('z-index1000000');
			$(selector2).removeClass('opacity00');
			if (typeof callBackFunction === "function") {
					callBackFunction();
			}
		});
	});
}

function popover(selector, position) {
	$(selector).popover({
		placement: position,
		viewport: selector,
		html: true,
		trigger: "focus",
		content: '<div id="popover'+ popoverCount +'"></div>',
		container : $(selector)
	}).popover('show');
	$(".popover").css("top" , "0");
}

function setTimeToIntroGoNextStep() {
	setTimeout(function() {
		introcode.nextStep();
	},800);
}

function scrollToBottom(index) {
	var container = $('#consoleBodyDiv1');
	scrollTo = $("#value" + valIndex);
	container.animate({scrollTop : scrollTo.offset().top - container.offset().top + container.scrollTop()});
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

function tableIndex() {
	var rows = 3, cols = 3;
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			stack.push('a['+ i +']['+ j +']');
			stackIndex.push(i + "" + j);
		}
	}
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	$("#animationDiv").removeClass("introjs-showElement").css("z-index", "10000005");
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blue'}, 500, function() {
		var l1 = $(selector1).offset();
		$(selector2).text($(selector1).text()).addClass("opacity00");
		$('body').append("<span id='dummy' style='position: relative; z-index: 100000002;"
						+ " font-family: monospace; color: lightgreen' >" + $(selector2).text() + "</span>");
		$('#dummy').offset({
		  'top': l1.top,
		  'left': l1.left
		});
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = parseInt($('#dummy').css('top')) - (l1.top - l2.top);
		var leftLength = parseInt($('#dummy').css('left')) - (l1.left - l2.left);
		TweenMax.to('#dummy', 0.8, {top: topLength, left: leftLength, onComplete: function () {
			$(selector2).removeClass('opacity00');
			$(selector1).removeClass('z-index1000000');
			$("#dummy").remove();
			$("#animationDiv").removeAttr("style").addClass("introjs-showElement");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
}

function keyDownEvent(e) {
	$(".error-msg").remove();
	$("[contenteditable=true]").off("keydown");
	$("[contenteditable=true]").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		var totalElements = parseInt(3)*parseInt(3);
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (e.keyCode == 13 && $(this).text().length > 0) {	
	    	$(this).attr("contenteditable", false);
			if (totalElements == (valIndex + 1)) {
				e.preventDefault();
				$('.introjs-nextbutton').show();
			} else {
				valIndex++;
				$("#consoleBodyDiv1").append("<div id='value"+ valIndex +"'>Enter the value of "+stack[index]
					+ ": <div style='display:inline-block; position: relative;' id='blinkCursor"+valIndex 
					+ "' class='int input-char outline-none a" + stackIndex[index] 
					+ "' placeholder='value' contenteditable='true' maxlength='2'></div></div>");
				index++;
				$('#blinkCursor' + valIndex).focus();
				keyDownEvent(e);
		    }
   		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
}
	

function appendArrayIndices() {
	var str = ["blue-color","red-color","green-color"];
	for(var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			$('#arrayIndices').append('<td class="text-center '+ str[i] +' addBorder'+ i +'"><span id="indices'+ i
					+'">arr['+ i +']['+ j +']</span></td>');
		}
	}
}
