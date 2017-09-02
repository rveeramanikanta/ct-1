var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddentotalEnterChar").val();
		location.reload();
	});
	intro = introJs();
	$("nextButton").click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showBullets : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		escOnExit : false,
		showStepNumbers : false,
		steps : [{
			element : "#informationDiv",
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : "#preBody",
			intro : '',
		}, {
			element : '#class',
			intro : '',
		}, {
			element : '#char',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory'
		}, {
			element : '#int',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory1'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public'
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static'
		}, {
			element : '#main',
			intro : '',
		}, {
			element : '#manager',
			intro : '',
		}, {
			element : '#int1',
			intro : '',
		}, {
			element : '#condition',
			intro : '',
			animateStep : 'for'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'output'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData'
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public1'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'outputt1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1'	
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValAction'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output_1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep11'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal1'
		}, {
			element : "#restartBtn",
			intro : "",
			position : "left"
		}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <span class='ct-code-b-yellow'>"+
						"array of objects</span>.", 10,"", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'class' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"To create a class as <span class='ct-code-b-yellow'>Employee</span>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'char' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'manager' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'int1' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'int' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"A <span class='ct-code-b-yellow'>static varibles</span> are initialised to <span class='ct-code-b-yellow'>zero</span>" +
						" by default the user can also initialise a value to the static variable.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'animationBox' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#createMemory","#table", function() {
						$("#table").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							typing("introjs-tooltiptext","",10,"",function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case 'memory1' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#age","#age2", function() {
						$("#age2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
							$("#borderBox").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								typing("introjs-tooltiptext","",10,"",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
				break;
			}
			break;
		case  'method':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'public' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "public1":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "public2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'method1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'static' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "static1":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "static2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'condition':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'for' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "for1":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "for2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'manager1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'data' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "data1":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "data2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'cin':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cinStep' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "cinStep1":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "cinStep2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'cin1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cinStep11' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "cinStep12":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "cinStep13":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case 'cout' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputt" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<span ct-code-b-yellow>cout</span> is used to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "outputt1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'cout1' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output_1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<span ct-code-b-yellow>cout</span> is used to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "output_2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'cout4' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<span ct-code-b-yellow>cout</span> is used to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "output1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
			
		case "outputBox" :
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "enterData" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
					$("#outputBody").append(' <span id ="inputNumber" class="opacity00">Enter the manager details  : </span><br>');
					transferEffect("#enterDetails","#inputNumber",function() {
						$('#inputNumber').removeClass('opacity00');
						setTimeout(function () {
								intro.nextStep();
						},1500);
					});
				});
				break;
			case "enterData1" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
					$("#outputBody").append(' <span id ="inputNumber1" class="opacity00">Enter employee name : '
									+ '<input id="inputChar" type="text" maxlength="10" size="10" spellcheck="false" class="input-char" disabled/></span><br>');
					transferEffect("#enterText","#inputNumber1",function() {
						$('#inputNumber1').removeClass('opacity00');
						setTimeout(function () {
								intro.nextStep();
						},1500);
					});
				});
				break;
			case "enterVal" :
				$('.introjs-helperLayer').one("transitionend", function() {
					typing(".introjs-tooltiptext", "Please enter any name", 10, "",function() {
						textValidation('#inputChar');
					});
				});
				break;
				case "enterValAction" :
						$("#animationBox").addClass("z-index1000000");
						$(".td-css").addClass("ct-code-b-green");
						$.each($("#inputChar").val().split(""), function(idx, val) {
							$("table tr:nth-child(2) td:eq("+ ( idx + 1) +")").find("span").text(val);
						});
						
						/*var result = $("#inputChar").val();
						for(var i = 0; i <= result.length; i++) {
							if (result.length >= 0 && result.length < 20) {
								if (i == result.length) {
									$("table tr:nth-child(2) td:eq("+ (i+1) + ")");
								} else {
									$("table tr:nth-child(2) td:eq("+ (i+1) +")").find("span").text(result[i]);
								}
							}  else {
								if (i == 19) {
									$("table tr:nth-child(2) td:eq("+ (i+1) + ")");
									break;
								} else {
									$("table tr:nth-child(2) td:eq("+ (i+1) +")").find("span").text(result[i]);
								}
							} 
						}*/
						fromEffectWithTweenMax("#inputChar", ".td-css", function() {
							typing(".introjs-tooltiptext", "The given string is stored in the array." +
									"", 10,"",function() {
								$('.introjs-nextbutton').show();
							});
						});
						
						break;
				case "enterData2" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber2" class="opacity00">Enter age  : <input  id="inputChar1"  type="text" maxlength="2" size="3" spellcheck="false" class="input-char" /></span><br><br>');
						transferEffect("#enterText1","#inputNumber2",function() {
							$('#inputNumber2').removeClass('opacity00');
							setTimeout(function () {
									intro.nextStep();
								},1500);
						});
					});
					break;
				case "enterVal1" :
					$('.introjs-helperLayer').one("transitionend", function() {
						typing(".introjs-tooltiptext", "Please enter any name", 10, "",function() {
							checking('#inputChar1');
						});
					});
				break;
			}
		break;
	}
});
	
intro.start();
$('.introjs-skipbutton').hide();
$('.introjs-prevbutton').hide();
$('.introjs-nextbutton').hide();
$('#informationDiv').removeClass('opacity00');
TweenMax.to('#infoText', 1 ,{
	opacity00 : 1,
	onComplete : function() {
		$('#nextButton').removeClass("opacity00");
		$('#nextButton').click(function(){
			$('#nextButton').remove();
			intro.nextStep();
			});
		}
	});
}

function textValidation(selector) {
	$(selector).removeAttr('disabled').focus();
	$(selector).on("keydown", function(e){
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ((e.keyCode < 65 || e.keyCode > 90) || (e.keyCode == 13 || e.keyCode == 9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to ' + max + ' digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e){
		if ($(this).val().length > 1) {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}
	
function checking(selector) {
	$(selector).removeAttr('disabled').focus();
	$(selector).on("keydown", function(e){
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to ' + max + ' digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e){
		if ($(this).val().length > 1) {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal1()">Next&rarr;</a>');
		} else {
			$('.user-btn').remove();
		}
	});
}

function storeVal1() {
	$('.user-btn').remove();
	
}

function typing(typingId, typingContent,cursorColor, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
	})
}
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}


function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
		TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}
function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}