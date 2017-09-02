
var introcode;
var typingSpeed = 10;
var outerIdx = 0;
var len = 8, elementAtInnerIdx;
var arr = [];
var flag = true;
var staringPoint = 1;
var endingPoint = 8;

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
						text = 'Here, we will learn how to sort the array elements in '
								+ 'an <span class="ct-code-b-yellow value">assending</span> order using the '
								+ ' <span class="ct-code-b-yellow value">bubble sort</span>.';
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
						text = 'Here, we are declaring and initializing the integer variable '
								+ '<span class="ct-code-b-yellow">length</span> to '
								+ '<span class="ct-code-b-yellow">8</span>'
								+ ', <span class="ct-code-b-yellow">outerIdx</span>, '
								+ '<span class="ct-code-b-yellow">innerIdx</span>, '
								+ '<span class="ct-code-b-yellow">elementAtOuterIdx</span> and '
								+ '<span class="ct-code-b-yellow">print</span>.';
						typing('.introjs-tooltiptext', text, function() {
							introNextSteps("#bubbleSortLogic", "bubbleSortLogic", 'bottom');
							$('.introjs-nextbutton').show();
						});
					break;
					
					case "bubbleSortLogic" :
						$('.introjs-tooltip').removeClass('hide');
						text = 'This is the logic of the <span class="ct-code-b-yellow">bubble sort</span>.';
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
							  $("#outElement"+ data).text($("#sortEle"+ data).text()).css({'color': 'white'});
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
		text = 'In <span class="ct-code-b-yellow value">bubble sort</span> algorithm, '
				+ 'an array is traversed from <span class="ct-code-b-yellow value">first element</span> to '
				+ '<span class="ct-code-b-yellow value">last element</span>. Here, current element is '
				+ '<span class="ct-code-b-yellow value">compared</span> with the '
				+ 'next element. If current element is '
				+ '<span class="ct-code-b-yellow value">greater</span> than the next element, '
				+ 'it is <span class="ct-code-b-yellow value">swapped</span>.'
		typing('.introjs-tooltiptext', text, function() {
			$('.introjs-nextbutton').show();
		});
		
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
		if (lang == "c") {
			$('#preproceserDir').text("#include <stdio.h>\nint main() {");			
			$('#printArray').text('printf("%d ", arr[print]);');
		} else if (lang == "cpp") {
			$('#preproceserDir').text("#include <iostream>\nusing namespace std;\nint main() {");
			$('#printArray').text('cout << arr[print]) << " ";');
		}
	}
	
	function outerLoopInitializationText() {
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
		$('.introjs-duplicate-nextbutton').remove();
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
		if (outerIdx < (len - 1)) {
			text = '<span class="ct-code-b-black"><span class="ct-code-b-blue">outer</span>Idx &lt; len - 1</span>'
				+ ' evaluates <span class="ct-code-b-green">true</span>.&nbsp;'
				+ ' <span id="appendButton"></span>';
			typing('#explanationDiv', text, function() {
				$('#outerLoop').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
						 		+ "onclick=innerLoopInitializationText()>Next &#8594;</a>");						
					} else {
						setTimeout(function() {
							innerLoopInitializationText();
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
						text = 'Largest element <span class="outer-loop-color">'+ $('#sortEle0').text() +'</span> will be places at '
								+ '<span class="outer-loop-color">0</span> location. <br/>'
								+ 'All elements are sorted successfully. <span id="appendButton"></span>';
						typing('#elementText', text, function() {
							$('#sortEle0').parent().css('background', 'orange').addClass("completed");
							endingPoint = 8 - $(".completed").length;
							$('.introjs-duplicate-skipbutton').remove();
							$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
								 	+ "onclick=bubbleSort()>Auto Complete &#8594;</a>");
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
	
	function innerLoopInitializationText() {
		$('.introjs-duplicate-nextbutton').remove();
		$('#outerLoop').css('background', '');
		var innerIdx = 0;
		if(innerIdx < (len - outerIdx - 1)) {
			arrow('#outerForLoop', '#innerForLoop', function() {
				text = '<span class="ct-code-b-black"><span class="inner-loop-color">inner</span>Idx</span> value Intialize to '
						+ '<span class="inner-loop-color">0</span>.</span>'
						+ ' <span id="appendButton"></span>';
				typing('#explanationDiv', text, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
						 		+ "onclick=innerLoopInitialization(" +innerIdx +")>Next &#8594;</a>");						
					} else {
						setTimeout(function() {
							innerLoopInitialization(innerIdx);
						},500);
					}
				});
			});
		}
	}
	
	function innerLoopInitialization(innerIdx) {
		$('.introjs-duplicate-nextbutton').remove();
		$('#innerInti').effect( "highlight",{color: 'blue'}, 800, function() {
			zoomInEffect('#innerArrow' + innerIdx, function() {
				$('#innerArrow' + innerIdx).css({'opacity' : '1'});
				setTimeout(function() {
					innerLoopConditionChecking(innerIdx);
				},500);
			});
		});
	}
	
	function innerLoopConditionChecking(innerIdx) {
		$('.introjs-duplicate-nextbutton').remove();
		if(innerIdx < (len - outerIdx - 1)) {
			text = '<span class="ct-code-b-black"><span class="inner-loop-color">inner</span>Idx &lt; len - outerIdx - 1</span>'
				+ ' evaluates <span class="ct-code-b-green">true</span>.&nbsp;'
				+ ' <span id="appendButton"></span>';
			typing('#explanationDiv', text, function() {
				$('#innerLoop').css('background', 'lightgreen').effect( "highlight",{color: 'blue'}, 800, function() {
					if (flag) {
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
						 		+ "onclick=checkIfCondition(" + innerIdx + ")>Next &#8594;</a>");	
					} else {
						setTimeout(function() {
							checkIfCondition(innerIdx);
						},500)
					}
				});	
			});
		} else {
			text = '<span class="ct-code-b-black"><span class="inner-loop-color">inner</span>Idx &lt; len - outerIdx - 1</span>'
				+ ' evaluates <span class="ct-code-b-red">false</span>.&nbsp;'
				+ ' <br/><span id="appendedText"></span> <span id="appendButton"></span>';
			typing('#explanationDiv', text, function() {
				$('#innerLoop').effect( "highlight",{color: 'lightgreen'}, 800, function() {
					text = 'The largest element <span class="outer-loop-color">'+ parseInt($('#sortEle' + innerIdx).text()) 
							+ '</span> will be places at <span class="outer-loop-color">'+ innerIdx 
							+ '</span> location.<span id="appendButton"></span>';
					typing('#appendedText', text, function() {
						$('#sortEle' + innerIdx).parent().css('background', 'orange').addClass("completed");
						
						endingPoint = 8 - $(".completed").length;
							$('.introjs-duplicate-skipbutton').remove();
							$('#autoCompleButtons').append("<a class='introjs-button introjs-duplicate-skipbutton'" 
								 	+ "onclick=bubbleSort()>Auto complete &#8594;</a>");
						$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
						 		+ "onclick=outerIdxIncerementText(" + innerIdx + ")>Next &#8594;</a>");
					});
				});
			});
		}
	}
	
	function checkIfCondition(innerIdx) {
		$('.introjs-duplicate-nextbutton').remove();
		$('#innerLoop').css('background', '');
		arrow('#innerForLoop', '#ifConditionCheck', function() {
			$('#ifCondition').effect( "highlight",{color: 'blue'}, 500, function() {
				arr[innerIdx] = parseInt($('#sortEle' + innerIdx).text());
				arr[innerIdx + 1] = parseInt($('#sortEle' + (innerIdx + 1)).text());
				if (arr[innerIdx] > arr[innerIdx + 1]) {
					text = '<span class="ct-code-b-black">arr[<span class="inner-loop-color">inner</span>Idx &gt; arr['
					        + '<span class="inner-loop-color">inner</span>Idx + 1]</span> evaluates  '
							+ '<span class="inner-loop-color">true</span>.</span>'
							+ ' <span id="appendButton"></span>';
					typing('#explanationDiv', text, function() {
						setTimeout(function() {
							swapElements(innerIdx);
						},500);
					});
				} else {
					text = '<span class="ct-code-b-black">arr[<span class="inner-loop-color">inner</span>Idx &gt; arr['
				        + '<span class="inner-loop-color">inner</span>Idx + 1]</span> evaluates  '
						+ '<span class="ct-code-b-red">false</span>.</span>'
						+ ' <span id="appendButton"></span>';
					typing('#explanationDiv', text, function() {
						if (flag) {
							$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
							 		+ "onclick=innerIdxIncerementText(" + innerIdx + ")>Next &#8594;</a>");	
						} else {
							setTimeout(function() {
								innerIdxIncerementText(innerIdx);
							},500);
						}
					});
				}
			});
		});
	}
	
	function innerIdxIncerementText(innerIdx) {
		$('.introjs-duplicate-nextbutton').remove();
		arrow('#ifConditionCheck', '#innerForLoop', function() {
			text = '<span class="ct-code-b-black"><span class="inner-loop-color">inner</span>Idx++</span> increment by one'
					+ ' <span id="appendButton"></span>';
			typing('#explanationDiv', text, function() {
				if (flag) {
					$('#appendButton').append("<a class='introjs-button introjs-duplicate-nextbutton'" 
					 		+ "onclick=innerIdxIncerement(" + innerIdx + ")>Next &#8594;</a>");
				} else {
					setTimeout(function() {
						innerIdxIncerement(innerIdx);
					},500);
				}
			});
		});
	}
	
	function innerIdxIncerement(innerIdx) {
		$('#storeValueInOuterIdx, #storeArrInnerIdxPlusVal, #storeEleOuterIdxVal').css('background', '');
		$('.introjs-duplicate-nextbutton').remove();
		$('#innerInc').effect( "highlight",{color: 'blue'}, 500, function() {
			++innerIdx;
			toEffectWithTweenMax('#innerArrow' + (innerIdx - 1) , '#innerArrow' + innerIdx , function() {
				flag = false;
				setTimeout(function() {
					innerLoopConditionChecking(innerIdx);
				},500);
			});
		});
	}
	
	function swapElements(innerIdx) {
		arrow('#ifConditionCheck', '#storeArrInnerIdxPlusVal', function() {
			text = 'Now swap the elements.'
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
						fadeInFromEffectWithTimelineMax('#sortEle' + innerIdx, '#eleAtInnerIdxVal', function() {
							fadeInFromEffectWithTimelineMax('#sortEle' + (innerIdx + 1), '#sortEle' + innerIdx, function() {
								fadeInFromEffectWithTimelineMax('#eleAtInnerIdxVal', '#sortEle' + (innerIdx + 1), function() {
									setTimeout(function() {
										innerIdxIncerementText(innerIdx);
									},500);
								});
							});
						});
					});
				});				
			});
		});
	}
	
	function outerIdxIncerementText(innerIdx) {
		//$('#sortEle0').parent().css('background', 'orange').addClass("completed");
		$('.introjs-duplicate-skipbutton').addClass('opacity00');
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
			toEffectWithTweenMax('#outerArrow' + outerIdx , '#outerArrow' + (outerIdx + 1) , function() {
				flag = false;
				++outerIdx;
				
				setTimeout(function() {
					outerLoopConditionChecking();
				},500);
			});
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
			$(selector1).removeClass("animated zoomIn")
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
	
	function appendTds() {
		for(var i = 0; i < 8; i++) {
			$('#arrayIndices').append('<th class="text-center"><span id="sortIndex'+ i +'">'+ i +'</span></th>')
			$('#outerArrow').append('<th><div class="text-center opacity00" id="outerArrow'+ i + '">'
					+ '<div id="outerIdxText'+ i +'"><span class="outer-loop-color">outer</span>Idx</div>'
					+ '<i class="fa fa-arrow-down" id="outerarrow'+ i + '"></i></div></th>');
			$('#innerArrow').append('<th><div class="text-center opacity00" id="innerArrow'+ i + '">'
					+ '<div id="innerIdxText'+ i +'"><span class="inner-loop-color">inner</span>Idx</div>'
					+ '<i class="fa fa-arrow-down" id="innerarrow'+ i + '"></i></div></th>'); 
		}
	}
	
	
	function bubbleSort() {
		$(".introjs-duplicate-skipbutton").remove();
		$('.introjs-duplicate-nextbutton').remove();
		$("#outerArrow" + outerIdx).addClass("opacity00");
		$("#innerArrow th i").parent().not(".opacity00").addClass("opacity00");
		if (staringPoint <= endingPoint) {
			$("#arrElements tr:nth-child(3) td").eq(staringPoint - 1).effect("highlight", {color: 'pink'}, 100, function() {
				var val1 = parseInt($("#arrElements tr:nth-child(3) td:nth-child(" + (staringPoint - 1) + ") span").text());
				var val2 = parseInt($("#arrElements tr:nth-child(3) td:nth-child(" + (staringPoint) + ") span").text());
				if (val1 > val2) {
					var elmt1 = $("#arrElements tr:nth-child(3) td:nth-child(" + (staringPoint - 1) + ") span");
					var elmt2 = $("#arrElements tr:nth-child(3) td:nth-child(" + (staringPoint) + ") span");
					var l1 = elmt1.text(val2).offset();
					var l2 = elmt2.text(val1).offset();
					$("#eleAtInnerIdxVal").text(val1);
					var leftLength = l2.left - l1.left;
					TweenMax.from(elmt1, 0.2, {"left" : leftLength});
					TweenMax.from(elmt2, 0.2, {"left" : -leftLength, onComplete:function() {
						staringPoint++;
						bubbleSort();
					}});
				} else if (staringPoint <= endingPoint) {
					$("#eleAtInnerIdxVal").text(val2);
					staringPoint++;
					bubbleSort();
				}
			});
		} else if (staringPoint == 1) {
			$("#arrElements tr:nth-child(3) td").eq(staringPoint - 1).effect("highlight", {color: 'pink'}, 100, function() {
				if (staringPoint < endingPoint) {
					staringPoint++;
					bubbleSort();
				}
			});
		} else {
			$("#arrElements tr:nth-child(3) td").eq(staringPoint - 2).css("background-color", "orange").addClass("completed");
				staringPoint = 1;
				endingPoint--;
				if (staringPoint <= endingPoint) {
					setTimeout(function() {
						bubbleSort();
					}, 200);
				} else {
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
	}
