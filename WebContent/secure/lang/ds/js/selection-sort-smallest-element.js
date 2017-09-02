var introcode;
var typingSpeed = 10;
var outerIdx = 0, innerIdx;
var len = 8, elementAtInnerIdx;
var arr = [];
var innerFlag = true, flag = true, buttonflag = false;
var position = outerIdx;
var lang;

function urlChangeMethod() {
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

	lang = getURLParameter("lang");
	if (lang == 'c') {
		$('#headerFile').text('#include <stdio.h>');
		$('#printing').text('printf("%d ", arr[i]);');
	} else if (lang == 'cpp') {
		$('#headerFile').text('#include <iostream>\nusing namespace std;');
		$('#printing').text('cout << arr[i] << " ";');
	}
}

function introFunction() {
	urlChangeMethod();
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
						element :'#bubbleSortProgram',
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
			
				case "bubbleSortProgram" :
					$("#bubbleSortAnimationDiv").removeClass("opacity00");
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we will learn how to sort an array elements in '
							+ 'an <span class="ct-code-b-yellow">assending</span> order using the '
							+ ' <span class="ct-code-b-yellow">selection sort</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#arrDec", "arrayDec", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "arrDec" :
					$('.arr-ele').attr('maxlength',2);
				    $('.arr-ele').attr('contenteditable','true');
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing an integer array with 8 elements : '
							+ '<span class="ct-code-b-yellow element" arrayvalue="0">'+ parseInt($("#number0").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="1">'+ parseInt($("#number1").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="2">'+ parseInt($("#number2").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="3">'+ parseInt($("#number3").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="4">'+ parseInt($("#number4").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="5">'+ parseInt($("#number5").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="6">'+ parseInt($("#number6").text()) +'</span>,'
							+ '<span class="ct-code-b-yellow element" arrayvalue="7">'+ parseInt($("#number7").text()) +'</span>';
					typing('.introjs-tooltiptext', text, function() {
						$('#number0').focus();
						changeValue();
						introNextSteps("#animationDiv", "arrayVal", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "animationDiv" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "arrayVal" :
							$('.arr-ele').removeAttr('contenteditable placeholder');
							transferEffect('#arrDec', '#arrElements', function() {
								$('#eleAtInnerIdx').removeClass('opacity00');
								introNextSteps("#variableDec", "variableDec", 'bottom');
								setTimeToIntroGoNextStep();
							});
						break;
						
						case "bubbleSortLogic" :
							transferEffect('#bubbleSortLogic', '#logicOfBubbleSort', function() {
								popover('#logicOfBubbleSort', 'left');
								text = 'Here we will learn how to sort an array elements.'
								typing("#popover", text, function() {
									$("#popover").append("<br><a class='introjs-button introjs-duplicate-nextbutton'" 
											+ "onclick = outerLoopInitializationText()>Next &#8594;</a>");
								});
							});
						break;
					}
				break;
				
				case "variableDec" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing an integer variable '
							+ '<span class="ct-code-b-yellow">len</span> to '
							+ '<span class="ct-code-b-yellow">8</span>'
							+ ', <span class="ct-code-b-yellow">outerIdx</span>, '
							+ '<span class="ct-code-b-yellow">innerIdx</span>, '
							+ '<span class="ct-code-b-yellow">elementAtOuterIdx</span>, ' 
							+ '<span class="ct-code-b-yellow">position</span> and '
							+ '<span class="ct-code-b-yellow">i</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#bubbleSortLogic", "bubbleSortLogic", 'bottom');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "bubbleSortLogic" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'This is the logic of the <span class="ct-code-b-yellow">selection sort</span>.';
					typing('.introjs-tooltiptext', text, function() {
						introNextSteps("#animationDiv", "bubbleSortLogic", 'left');
						$('.introjs-nextbutton').show();
					});
				break;
				case "printArr" :
					$('.introjs-tooltip').removeClass('hide');
					text = 'This for loop is used to print the <span class="ct-code-b-yellow">sorted</span>. elements.';
					typing('.introjs-tooltiptext', text, function() {
						for (var a = 0; a < 8; a++) {
							$(".output").append('<span class = "output-text" id = "outElement'+ a +'"></span>\t');
						}
						introNextSteps("#outputDiv", "outputDiv", 'left');
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "outputDiv" :
					$('.introjs-nextbutton').hide();
					$("#values").effect( "transfer", { to: $(".output"), className: "ui-effects-transfer" }, 1000 , function() {
						for (var data = 0; data < 8; data++) {
						  $("#outElement"+ data).append($("#sortEle"+ data).text() + " &nbsp;").css({'color': 'white'});
						  setTimeout(function(){
							  introNextSteps("#restartBtn", "restartBtn", 'bottom');
							  introcode.nextStep();
							},800);
						}
					});
				break;
				
				case "restartBtn":
					$("#restartBtn").removeClass('opacity00');
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
	text = 'In <span class="ct-code-b-yellow">selection sort</span> algorithm, '
			+ 'first finds the <span class="ct-code-b-yellow">smallest</span> element in the array and exchanges '
			+ 'it with the element in the <span class="ct-code-b-yellow">first position</span>, '
			+ 'then find the <span class="ct-code-b-yellow">second smallest</span> element and exchange '
			+ 'it with the element in the <span class="ct-code-b-yellow">second position</span>, and continues'
			+ ' in this way until the entire array is <span class="ct-code-b-yellow">sorted</span>.'
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});
}

function outerLoopInitializationText() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton, .popover').remove();
	$('#explanationDiv1').removeClass('opacity00'); 
	arrow('#outerForLoop', '#outerForLoop');
	text = '<span class="ct-code-b-black"><span class="ct-code-b-blue">outer</span>Idx</span> value Intialize to '
			+ '<span class="outer-loop-color">0</span>.</span>'
			+ ' <span id="appendButton"></span>';
	typing('#explanationDiv', text, function() {
		$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
			 	+ "onclick=outerLoopInitialization()>Next &#8594;</a>");
	});
}

function outerLoopInitialization() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton').remove();
	$('#explanationDiv').removeClass('opacity00'); 
	$('#outerInti').effect( "highlight",{color: 'blue'}, 800, function() {
		zoomInEffect('#outerArrow' + outerIdx, function() {
			setTimeout(function() {
				outerLoopConditionChecking();
			},500);
		});
	});
} 


function outerLoopConditionChecking() {
	$('.introjs-duplicate-skipbutton').remove();
	if (outerIdx < (len - 1)) {
		text = '<span class="ct-code-b-black"><span class="ct-code-b-blue">outer</span>Idx &lt; len - 1</span>'
			+ ' evaluates <span class="ct-code-b-green">true</span>.&nbsp;'
			+ ' <span id="appendButton"></span>';
		typing('#explanationDiv', text, function() {
			$('#outerLoop').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
				if (flag) {
					$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 		+ "onclick=positionInitializationText()>Next &#8594;</a>");	
				} else {
					setTimeout(function() {
						positionInitializationText();
					},500);
				}
			});	
		});
	} else {
		text = '<span class="ct-code-b-black"><span class="outer-loop-color">outer</span>Idx &lt; len - 1</span>'
			+ ' evaluates <span class="ct-code-b-red">false</span>.&nbsp;'
			+ ' <span id="appendButton"></span><br><span id="elementText"></span>';
		typing('#explanationDiv', text, function() {
			$('#outerLoop').effect( "highlight",{color: 'lightgreen'}, 800, function() {
				$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
				$('.introjs-duplicate-nextbutton').click(function() {
					$('.introjs-duplicate-nextbutton, #appendButton').remove();
					$('#sortEle7').parent().css('background', 'orange').addClass("completed");
					text = 'The smallest element <span class="outer-loop-color">'+ $('#sortEle7').text() +'</span> will be places at '
							+ '<span class="outer-loop-color">7</span> location. <br/>'
							+ 'All elements are sorted successfully. <span id="appendButton"></span>';
					typing('#elementText', text, function() {
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
						$('.introjs-duplicate-nextbutton').click(function() {
							$('.introjs-duplicate-nextbutton').remove();
							introNextSteps("#printArr", "printArr", 'bottom');
							introcode.nextStep();
						})
					});
				});
			});
		});
	}
}

function positionInitializationText() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#outerForLoop', '#positionAtOuterIdx', function() {
		text = '<span class="ct-code-b-black"><span class="browen-color">position</span> = '
				+ '<span class="ct-code-b-blue">outer</span>Idx</span>, now the position is: '
				+ '<span class="outer-loop-color">'+ outerIdx + '</span>.'
				+ ' <span id="appendButton"></span>';
		typing('#explanationDiv', text, function() {
			$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
				 	+ "onclick=positionInitialization()>Next &#8594;</a>");
			if (buttonflag) {
				innerFlag = true;
				$('.introjs-duplicate-skipbutton').remove();
				$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
					 	+ "onclick=selectionSort()>Auto complete &#8594;</a>");
			}
		});
	});
}

function positionInitialization() {
	position = outerIdx;
	$('.introjs-duplicate-nextbutton').remove();
	zoomInEffect('#positionArrow' + position, function() {
		$('#positionArrow').css({'opacity': '1'});
		innerLoopInitializationText();
	});
}

function innerLoopInitializationText() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton').remove();
	$('#outerLoop').css('background', '');
	innerIdx = outerIdx + 1;
	if(innerIdx < len) {
		arrow('#positionAtOuterIdx', '#innerForLoop', function() {
			text = '<span class="ct-code-b-black"><span class="inner-loop-color">inner</span>Idx</span> value Intialize to '
					+ '<span class="inner-loop-color">'+ (outerIdx + 1) +'</span>.</span>'
					+ ' <span id="appendButton"></span>';
			typing('#explanationDiv', text, function() {
				if (flag) {
					$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 		+ "onclick=innerLoopInitialization()>Next &#8594;</a>");						
				} else {
					setTimeout(function() {
						innerLoopInitialization();
					},500);
				}
			});
		});
	}
}

function innerLoopInitialization() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton').remove();
	$('#innerInti').effect( "highlight",{color: 'blue'}, 800, function() {
		zoomInEffect('#innerArrow' + innerIdx, function() {
			$('#innerArrow' + innerIdx).css({'opacity' : '1'});
			setTimeout(function() {
				innerLoopConditionChecking();
			},500);
		});
	});
}

function innerLoopConditionChecking() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton').remove();
	if(innerIdx < len ) {
		text = '<span class="ct-code-b-black"><span class="inner-loop-color">inner</span>Idx &lt; len </span>'
			+ ' evaluates <span class="ct-code-b-green">true</span>.&nbsp;'
			+ ' <span id="appendButton"></span>';
		typing('#explanationDiv', text, function() {
			$('#innerLoop').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
				if (flag) {
					$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 		+ "onclick=checkIfCondition()>Next &#8594;</a>");	
				} else {
					setTimeout(function() {
						checkIfCondition();
					},500)
				}
			});	
		});
	} else {
		swapElements();
	}
}

function checkIfCondition() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton').remove();
	$('#innerLoop').css('background', '');
	arrow('#innerForLoop', '#ifConditionCheck', function() {
		$('#ifCondition').effect( "highlight",{color: 'blue'}, 500, function() {
			arr[innerIdx] = parseInt($('#sortEle' + innerIdx).text());
			arr[position] = parseInt($('#sortEle' + (position)).text());
			if (arr[innerIdx] < arr[position]) {
				text = '<span class="ct-code-b-black">arr[<span class="inner-loop-color">inner</span>Idx] &lt; arr['
				        + '<span class="browen-color">position</span>]</span> evaluates  '
						+ '<span class="inner-loop-color">true</span>.</span>'
						+ ' <span id="appendButton"></span>';
				typing('#explanationDiv', text, function() {
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
						 		+ "onclick=positionIncrementText()>Next &#8594;</a>");	
					if (buttonflag) {
						innerFlag = false;
						$('.introjs-duplicate-skipbutton').remove();
						$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
							 	+ "onclick=selectionSort()>Auto complete &#8594;</a>");
					}
				});
			} else {
				text = '<span class="ct-code-b-black">arr[<span class="inner-loop-color">inner</span>Idx &lt; arr['
			        + '<span class="browen-color">position</span>]</span> evaluates  '
					+ '<span class="ct-code-b-red">false</span>.</span>'
					+ ' <span id="appendButton"></span>';
				typing('#explanationDiv', text, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
						 		+ "onclick=innerIdxIncerementText()>Next &#8594;</a>");	
					} else {
						setTimeout(function() {
							innerIdxIncerementText();
						},500);
					}
				});
			}
		});
	});
}

function innerIdxIncerementText() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#ifConditionCheck', '#innerForLoop', function() {
		text = '<span class="ct-code-b-black"><span class="inner-loop-color">inner</span>Idx++</span> increment by one'
				+ ' <span id="appendButton"></span>';
		typing('#explanationDiv', text, function() {
			if (flag) {
				$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
				 		+ "onclick=innerIdxIncerement()>Next &#8594;</a>");
			} else {
				setTimeout(function() {
					innerIdxIncerement();
				},500);
			}
		});
	});
}

function innerIdxIncerement() {
	$('.introjs-duplicate-skipbutton').remove();
	$('#storeValueInOuterIdx, #storeArrInnerIdxPlusVal, #storeEleOuterIdxVal').css('background', '');
	$('.introjs-duplicate-nextbutton').remove();
	$('#innerInc').effect( "highlight",{color: 'blue'}, 500, function() {
		++innerIdx;
		toEffectWithTweenMax('#innerArrow' + (innerIdx - 1) , '#innerArrow' + innerIdx , function() {
			flag = false;
			setTimeout(function() {
				innerLoopConditionChecking();
			},500);
		});
	});
}

function positionIncrementText() {
	$('.introjs-duplicate-skipbutton').remove();
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#ifConditionCheck', '#positionOfElement', function() {
		text = '<span class="ct-code-b-black"><span class="browen-color">position</span> = '
				+ '<span class="inner-loop-color">inner</span>Idx</span>, now the position is: '
				+ '<span class="outer-loop-color">'+ innerIdx + '</span>.'
				+ ' <span id="appendButton"></span>';
		typing('#explanationDiv', text, function() {
			$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
			 		+ "onclick=positionIncrement()>Next &#8594;</a>");
			if (buttonflag) {
				innerFlag = true;
				$('.introjs-duplicate-skipbutton').remove();
				$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
					 	+ "onclick=selectionSort()>Auto complete &#8594;</a>");
			}
		});
	});
}

function positionIncrement() {
	$('.introjs-duplicate-nextbutton').remove();
	toEffectWithTweenMax('#positionArrow' + position  , '#positionArrow' + innerIdx , function() {
		position = innerIdx;
		arrow('#positionOfElement', '#innerForLoop', function() {
			innerIdxIncerement();
		});
	});
}

function swapElements() {
	$('.introjs-duplicate-skipbutton').remove();
	arrow('#innerForLoop', '#storeArrInnerIdxPlusVal', function() {
		text = 'Now, swap <span class="outer-loop-color">'+ $('#sortEle' + position).text() 
				+ '</span> and <span class="outer-loop-color">'
				+ $('#sortEle' + outerIdx).text() +'</span>.<br/><span id="appendedText"></span>'
				+ ' <span id="appendButton"></span>';
		typing('#explanationDiv', text, function() {
			$('.introjs-duplicate-skipbutton').removeClass('opacity00');
			$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
			$('.introjs-duplicate-nextbutton').click(function() {
				$('.introjs-duplicate-nextbutton').remove();
				$('#storeValueInOuterIdx, #storeArrInnerIdxPlusVal, #storeEleOuterIdxVal').css('background', 'lightgreen');
				$('#storeValueInOuterIdx').effect( "highlight",{color: 'blue'});
				$('#storeArrInnerIdxPlusVal').effect( "highlight",{color: 'blue'});
				$('#storeEleOuterIdxVal').effect( "highlight",{color: 'blue'}, 800, function() {
					fadeInFromEffectWithTimelineMax('#sortEle' + position, '#eleAtInnerIdxVal', function() {
						fadeInFromEffectWithTimelineMax('#sortEle' + outerIdx , '#sortEle' + position, function() {
							fadeInFromEffectWithTimelineMax('#eleAtInnerIdxVal', '#sortEle' + outerIdx, function() {
								text = 'The smallest element <span class="outer-loop-color">'+ parseInt($('#sortEle' + outerIdx).text()) 
										+ '</span> will be places at <span class="outer-loop-color">'+ outerIdx 
										+ '</span> location.<span id="appendButton"></span>';
								typing('#appendedText', text, function() {
									$('#sortEle' + outerIdx).parent().css('background', 'orange').addClass("completed");
									buttonflag = true;
									$('.introjs-duplicate-skipbutton').remove();
									$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
											 	+ "onclick=selectionSort()>Auto complete &#8594;</a>");
									$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
									 		+ "onclick=outerIdxIncerementText()>Next &#8594;</a>");
								});
							});
						});
					});
				});
			});				
		});
	});
}

function outerIdxIncerementText() {
	$('.introjs-duplicate-skipbutton').remove();
	$('#innerArrow' +innerIdx ).css('opacity', '0');
	$('.introjs-duplicate-nextbutton').remove();
	arrow('#innerForLoop', '#outerForLoop', function() {
		text = '<span class="ct-code-b-black"><span class="ct-code-b-blue">outer</span>Idx++</span> increment by one'
				+ ' <span id="appendButton"></span>';
		typing('#explanationDiv', text, function() {
			if (flag) {
				$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
				 		+ "onclick=outerIdxIncerement()>Next &#8594;</a>");
			} else {
				setTimeout(function() {
					outerIdxIncerement();
				},500);
			}
		});
	});
}

function outerIdxIncerement() {
	$('#storeValueInOuterIdx, #storeArrInnerIdxPlusVal, #storeEleOuterIdxVal').css('background', '');
	$('.introjs-duplicate-nextbutton').remove();
	$('#outerInc').effect( "highlight",{color: 'blue'}, 500, function() {
		$('#positionArrow' + position).css({'opacity': '0'});
		$('#storeEle' + position).parent().removeAttr('style');
		toEffectWithTweenMax('#outerArrow' + outerIdx , '#outerArrow' + (outerIdx + 1) , function() {
			flag = false;
			++outerIdx;
			setTimeout(function() {
				outerLoopConditionChecking();
			},500);
		});
	});
}

function selectionSort() {
	$('.introjs-duplicate-skipbutton, .introjs-duplicate-nextbutton').remove();
	$("#outerArrow" + outerIdx).addClass("opacity00");
	outerIdx = $('.completed').length; 
	outerCondition();
}

function outerCondition() {
	$("#positionArrow" + position).addClass("opacity00");
	if (outerIdx < (len - 1)) {
		$("#outerArrow" + outerIdx).removeClass("opacity00");
		position = outerIdx;
	    $("#positionArrow" + position).removeClass("opacity00");
	    if (innerFlag) {
			innerIdx = outerIdx;
	    }
	    innerFlag = true;
		innerCondition();		
	} else {
		$("#outerArrow" + outerIdx).addClass("opacity00");
		$('#sortEle7').parent().css('background', 'orange').addClass("completed");
		$(".introjs-duplicate-skipbutton").remove();
		$('.introjs-duplicate-nextbutton').remove();
		text = 'All elements are sorted successfully.'
				+ ' <span id="appendButton"></span>';
		typing('#explanationDiv', text, function() {
			$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'>next &#8594;</a>");
			$('.introjs-duplicate-nextbutton').click(function() {
				$('.introjs-duplicate-nextbutton').remove();
				introNextSteps("#printArr", "printArr", 'bottom');
				introcode.nextStep();
			});
		});
  }
}

function innerCondition() {
	if (innerIdx == 7) {
		$("#innerArrow" + innerIdx).addClass("opacity00");
	  	$('#sortEle' + outerIdx).parent().effect("highlight", {color: 'pink'}, 100, function() {
	    	fadeInFromEffectWithTimelineMax('#sortEle' + position, '#eleAtInnerIdxVal', function() {
	        	fadeInFromEffectWithTimelineMax('#sortEle' + (outerIdx),'#sortEle' + (position),  function() {
					fadeInFromEffectWithTimelineMax('#eleAtInnerIdxVal','#sortEle' + (outerIdx),  function() {
						$('#sortEle' + outerIdx).parent().css('background', 'orange').addClass("completed");
	  	          		outerValInc();
	          		});
	        	});
	      	});
	  	});
	} 
	if (innerIdx < len) {
		$("#innerArrow" + innerIdx).removeClass("opacity00");
		var val1 = parseInt($("#sortEle" + innerIdx).text());
    	var val2 = parseInt($("#sortEle" + position).text()); 
		if(val1 < val2) {
			$('#positionArrow' + position).addClass("opacity00");
			position = innerIdx;
      		toEffectWithTweenMax('#positionArrow' + position  , '#positionArrow' + innerIdx , function() {
      			innerValInc();
      		});
	    } else {
		    setTimeout(function() {
			   	innerValInc();
		    },300);
	    }
	} else {
		$("#innerArrow" + innerIdx).addClass("opacity00");
    	setTimeout(function() {
    		innerValInc();
    	},300);
	}
 }

function innerValInc() {
	++innerIdx;
	toEffectWithTweenMax('#innerArrow' + (innerIdx - 1) , '#innerArrow' + innerIdx , function() {
  		$('#sortEle' + position).parent().effect("highlight", {color: 'pink'}, 100);
		$('#sortEle' + innerIdx).parent().effect("highlight", {color: 'pink'}, 100, function() {
	    	setTimeout(function() {
				innerCondition();
	    	},300);
		});
	});
}

function outerValInc() {
  ++outerIdx;
	toEffectWithTweenMax('#outerArrow' + (outerIdx - 1) , '#outerArrow' + (outerIdx) , function() {
    	setTimeout(function() {
			outerCondition();
    	},300);
	});
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
	$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector1).removeClass("animated zoomIn");
		$(selector1).removeAttr('style');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: 'blues'}, 500, function() {
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 500 , function() {
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

function changeValue() {
	$(".arr-ele").keypress(function (e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});
	$('.arr-ele').keydown(function(e) {
		$(".length-error-text").remove();
		if (e.which === 13) {
			e.preventDefault();
		}
		var max = $(this).attr("maxlength");
		if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) &&($(this).text().length + 1) > max) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
		    e.preventDefault();
		}
	});	
	
	$(".arr-ele").keyup(function(e) {
		$(".length-error-text").remove();
		var arrayvalue = $(this).attr("arrayvalue");
		$(".arr-ele").each(function(index){
			if (index == arrayvalue) {
				if ($(this).text() == '') {
					$(this).addClass("empty");
					$(".introjs-nextbutton").hide(); 
					$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter a number.</span>");
					$(".element[arrayvalue=" + index + "]").text('');
				} else {
					$(".length-error-text").remove();
					$(this).removeClass("empty");
					$(".element[arrayvalue=" + index + "]").text($(this).text());
				}
				if ($(".empty").length == 0) {
					  $(".introjs-nextbutton").show(); 
				} 
			}
		});
	});
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
			$("#animationDiv").removeAttr("style").addClass("introjs-showElement");			
			$('#dummy').remove();
		}}, "-=0.5");
	});
}


function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
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

function appendArrows() {
	for(var i = 0; i < 8; i++) {
		$('#arrayIndices').append('<th class="text-center"><span id="sortIndex'+ i +'">'+ i +'</span></th>')
		$('#outerArrow').append('<th><div class="text-center opacity00" id="outerArrow'+ i + '">'
				+ '<div id="outerIdxText'+ i +'"><span class="outer-loop-color">outer</span>Idx</div>'
				+ '<i class="fa fa-arrow-down" id="outerarrow'+ i + '"></i></div></th>');
		$('#innerArrow').append('<th><div class="text-center opacity00" id="innerArrow'+ i + '">'
				+ '<div id="innerIdxText'+ i +'"><span class="inner-loop-color">inner</span>Idx</div>'
				+ '<i class="fa fa-arrow-down" id="innerarrow'+ i + '"></i></div></th>'); 
		$('#positionArrow').append('<th><div class="text-center opacity00" id="positionArrow'+ i + '">'
				+ '<i class="fa fa-arrow-up" id="positionarrow'+ i + '"></i>' 
				+ '<div id="innerIdxText'+ i +'"><span class="position-color">position</span></div></div></th>');
	}
}