var introjs;
var typingInterval = 5;
var countI = 0;
var iVal = 0;
var jVal = 0;
var countJ = 0;
var tValue = 1;

var a = [];

var spaceCheckFlag = true;

var concatinationOfStrings = function() {
	introGuide();
	
	$('#restart').click(function() {
		location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
					element: '#program',
					intro: '',
					position: 'right'
				}, {
					element: '#charDec',
					intro: '',
					position: 'right'
				}, {
					element: '#memory',
					intro: '',
					tooltipClass: 'hide',
				}, {
					element: '#intDec',
					intro: ''
				}, {
					element: '#firstString',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputSteps: 'firstStatement'
				}, {
					element: '#scanA',
					intro: '',
				}, {
					element: '#output',
					intro: '',
					position: 'left',
					outputSteps: 'enterString1'
				}, {
					element: '#tableId1',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
					element: '#secondString',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputSteps: 'secondStatement'
				}, {
					element: '#scanB',
					intro: '',
				}, {
					element: '#output',
					intro: '',
					position: 'left',
					outputSteps: 'enterString2'
				}, {
					element: '#tableId2',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
					element: '#loopA',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#iInitialization',
					intro: ''
				}, {
					element: '#condition1',
					intro: ''
				}, {
					element: '#jInitialization',
					intro: ''
				}, {
					element: '#concatenatedString',
					intro: ''
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputSteps: 'thirdStatement'
				}, {
					element: '#restart',
					intro: 'Click to restart.',
					position: 'right'
				} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-prevbutton, .introjs-skipbutton, .introjs-nextbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "program":
				var text = "In this program we will learn how to <span class='ct-code-b-yellow'>concatenation of strings</span>"
							+ " without using any string library functions.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case "charDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "This statement declares three <span class='ct-code-b-yellow'>character arrays</span> with the size"
								+ " <span class='ct-code-b-yellow'>20</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "memory":
				$('.introjs-helperLayer').one('transitionend', function() {
					tableCreation();
				});
				break;
				
			case "tableId2":
			case "tableId1":
				$('.introjs-tooltip').css({'min-width' : '250px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					if (tValue == 1) {
						$("#user1Text").attr("disabled", true);
						firstUserSpaceFind();
						tValue++;
					} else {
						$("#user2Text").attr("disabled", true);
						secondUserSpaceFind();
						a = [];
					}
					$('.introjs-tooltip').removeClass("hide");
					if (spaceCheckFlag) {
						var text1 = "The <span class='ct-code-b-yellow'>scanf()</span> function reads all the characters that are specified"
									+ " in the console in the same sequence.";
					} else {
						var text1 = "Since you have provided a space only the first sequence of characters before the space is considered is"
									+ " read by the <span class='ct-code-b-yellow'>scanf()</span> method.";
					}
					var text = text1 + "<br><br> Also note the <span class='ct-code-b-yellow'>delimeter('\\0')</span> character that is"
								+ " automatically appended as the last character that indicates the end of the string in the array.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "intDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Let us declare two integer variables i and j.";
					typing('.introjs-tooltiptext', text, function() {
						$("#iInit").effect("transfer", {to: $("#cupI"), className: "ui-effects-transfer"}, 1000, function() {
							$("#cupI").addClass("z-index").removeClass("opacity00").removeClass("z-index");
							$("#jInit").effect("transfer", {to: $("#cupJ"), className: "ui-effects-transfer"}, 1000, function() {
								$("#cupJ").addClass("z-index").removeClass("opacity00").removeClass("z-index");
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
				
			case "secondString":
			case "firstString":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cupI, #cupJ").removeClass("z-index");
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
				break;
				
			case "output":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					var outputSteps = introjs._introItems[introjs._currentStep].outputSteps;
					switch(outputSteps) {
					
						case "firstStatement":
							$("#output").removeClass("opacity00");
							$(".firstLine").append('<span id="firstStringPrint">Enter the first string : </span>');
							timing();
							break;
							
						case "enterString1":
							var text = "Enter a string.";
							typing('.introjs-tooltiptext', text, function() {
								$(".firstLine").append('<input type="text" class="input" maxlength="9" id ="user1Text" spellcheck="false">');
								$("#user1Text").effect("highlight", {color: 'yellow'}, 300);
								$("#user1Text").focus();
								firstEvent();
								keyUpEvent("#user1Text");
							});
							break;
							
						case "secondStatement":
							$(".secondLine").append('<span id="firstStringPrint">Enter the second string : </span>');
							timing();
							break;
							
						case "enterString2":
							var text = "Enter a string.";
							typing('.introjs-tooltiptext', text, function() {
								$(".secondLine").append('<input type="text" class="input" id="user2Text" maxlength="9" spellcheck="false">');
								$("#user2Text").effect("highlight", {color: 'yellow'}, 300);
								$("#user2Text").focus();
								keydownEvent();
								keyUpEvent("#user2Text");
							});
							break;
							
						case "thirdStatement":
								printValue();
							break;
					}
				});
				break;
				
			case "scanB":
			case "scanA":
				$(".introjs-tooltip").css({'min-width' : '250px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>scanf()</span> function with the format specifier" 
								+ " <span class='ct-code-b-yellow'>%s</span> reads multiple characters specified"
								+ " on the console until it encounters a white space.<br><br>"
								+ " The content that is stored into the <span class='ct-code-b-yellow'>ch</span> character array"
								+ " will always have a <span class='ct-code-b-yellow'>'\\0'</span> character that is "
								+ "	automatically appended as the last character that indicates the end of the string in the array.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "loopA":
			case "loopB":
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 800);
				});
				break;
				
			case "iInitialization":
				introjs.refresh();
				$(".introjs-tooltip").css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Here we initialized <span class='ct-code-b-yellow'>i</span> with <span class='ct-code-b-yellow i-init'>0</span>.";
					$("#cupI").addClass("z-index");
					typing('.introjs-tooltiptext', text, function() {
						$(".i-value").removeClass("opacity00")
						fromEffectWithTweenMax("#iSpan", ".i-init", iVal, function() {
							$('.introjs-nextbutton').show();	
						});
					});
				});
				break;
				
			case "condition1":
				$("#cupI").removeClass("z-index");
				$('.introjs-helperLayer').one('transitionend', function() {
					if (($("#user1Text").val().charAt(countI) != " ") && ($("#user1Text").val().charAt(countI) != "")) {
						var text = "a[" + countI + "] = " + $('#user1Text').val().charAt(countI) + "<br>"
									+ "<span class='ct-code-b-yellow'>" +  $('#user1Text').val().charAt(countI) +" != '\\0' </span> since the"
									+ " condition evaluates to <span class='ct-code-b-yellow'>true</span>. The control enters in to the"
									+ " <br><span class='ct-code-b-yellow'>for-loop</span>.";
						typing('.introjs-tooltiptext', text, function() {
							nextStep("#line1");
							$('.introjs-nextbutton').show();
						});
					} else {
						var text = "a[" + countI + "] = '\\0' <br>"
									+ "<span class='ct-code-b-yellow'>'\\0' != '\\0'</span> since the condition evaluates to"
									+ " <span class='ct-red'>false</span>. The control comes out of the"
									+ " <span class='ct-code-b-yellow'>for-loop</span>.";
						typing('.introjs-tooltiptext', text, function() {
							var newStep = getStep("#loopB", '', 'hide', '');
							introjs.insertOption(introjs._currentStep + 1, newStep);
							$('.introjs-nextbutton').show();
						});
					}
					
				});
				break;
					
			case "line1":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>c[" + countI + "] = " + $('#user1Text').val().charAt(countI) + "</span>";
					typing('.introjs-tooltiptext', text, function() {
						var newStep = getStep("#tableId3", '', 'hide', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						$('.introjs-nextbutton').show();
					});
				});
				break;
					
			case "tableId3":
				$('.introjs-helperLayer').one('transitionend', function() {
					introjs.refresh();
					if (($("#user1Text").val().charAt(countI) != " ") && ($("#user1Text").val().charAt(countI) != "")) {
						$("#tdBorder" + iVal).text(($("#user1Text").val().charAt(countI)));
						nextStep("#iIncrement");
					} else if (countJ < $('.auto-filled').length) {
						$("#tdBorder" + iVal).text(($(".auto-filled").text().charAt(countJ)));
						nextStep("#secondIIncrement");
					}
					else {
						$("#tdBorder" + iVal).text("\\0");
					}
					timing();
				});
				break;
				
			case "iIncrement":
				iVal++;
				countI++;
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow value-text'>i</span> is incremented to <span class='ct-code-b-yellow' id='animateI'>"
								+ iVal + "</span>";
					typing('.introjs-tooltiptext', text, function () {
						fromEffectWithTweenMax("#iSpan", "#animateI", iVal, function() {
							nextStep("#condition1");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
			case "jInitialization":
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cupI").removeClass("z-index");
					$("#cupJ").addClass("z-index");
					var text = "Here we initialized <span class='ct-code-b-yellow'>j</span> with <span class='ct-code-b-yellow j-init'>0</span>";
					typing('.introjs-tooltiptext', text, function() {
						fromEffectWithTweenMax("#jSpan", ".j-init", jVal, function() {
							nextStep("#condition2");
							$('.introjs-nextbutton').show();
						})
					});
				});
				break;
				
			case "condition2":
				$("#cupJ").removeClass("z-index");
				$('.introjs-helperLayer').one('transitionend', function() {
					if (countJ < $('.auto-filled').length) {
						var text = "b[" + countJ + "] = " + $('.auto-filled').text().charAt(countJ) + "<br>"
									+ "<span class='ct-code-b-yellow'>" + $('.auto-filled').text().charAt(countJ) +" != '\\0' </span>condition"
									+ " evaluates to <span class='ct-code-b-yellow'>true</span>. The control enters in to the"
									+ " <br><span class='ct-code-b-yellow'>for-loop</span>.";
						typing('.introjs-tooltiptext', text, function() {
							nextStep("#line2");
							$('.introjs-nextbutton').show();
						});
					} else {
						var text = "b[" + countJ + "] = '\\0'<br>"
									+ "<span class='ct-code-b-yellow'>'\\0' != '\\0'</span> condition evaluates to"
									+ " <span class='ct-red'>false</span>. The control comes out of the"
									+ " <br><span class='ct-code-b-yellow'>for-loop</span>.";
						typing('.introjs-tooltiptext', text, function() {
							nextStep("#delimeter");
							$('.introjs-nextbutton').show();
						});
					}
				});
				break;
				
			case "line2":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>c[" + iVal + "] = " + $('.auto-filled').text().charAt(countJ) + "</span>";
					typing('.introjs-tooltiptext', text, function() {
						var newStep = getStep("#tableId3", '', 'hide', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						$('.introjs-nextbutton').show();
					});
				});
				break;
					
			case "jIncrement":
				jVal++;	
				countJ++;
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cupJ").addClass("z-index");
					$("#cupI").removeClass("z-index");
					var text = "<span class='ct-code-b-yellow value-text-j'>j</span> is incremented to <span class='ct-code-b-yellow' id='animateJ'>"
								+ jVal + "</span>";
					typing('.introjs-tooltiptext', text, function () {
						fromEffectWithTweenMax("#jSpan", "#animateJ", jVal, function() {
							nextStep("#condition2");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
				
			case "secondIIncrement":
				iVal++;
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cupJ").removeClass("z-index");
					$("#cupI").addClass("z-index");
					var text = "<span class='ct-code-b-yellow value-text1'>i</span> is incremented to <span class='ct-code-b-yellow' id='animateII'>"
								+ iVal + "</span>.";
					typing('.introjs-tooltiptext', text, function () {
						nextStep("#jIncrement");
						fromEffectWithTweenMax("#iSpan", "#animateII", iVal, function() {
							$('.introjs-nextbutton').show();
						})
					});
				});
				break;
				
			case "delimeter":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>c[" + iVal + "] = '\\0'";
					typing('.introjs-tooltiptext', text, function() {
						var newStep = getStep("#tableId3", '', 'hide', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "concatenatedString":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The function printf() using %s as the conversion specification displays the string.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
	
			case "restart":
				$('.introjs-tooltip').css({'min-width' : '110px'});
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restart").removeClass("opacity00");
				});
				break;
			
		}
	});
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function getStep(element, intro, tooltipClass, position) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	return step;
}

function nextStep(id) {
	var newStep = getStep(id, '', '', '');
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

function timing() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1000);
}

function firstEvent() {
	$(".input").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		$('.error-text').remove();
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9, spacebar = 32;
		if ($.inArray(e.keyCode, [46, 8, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode == 9 || e.keyCode == 32) {
			e.preventDefault();
		}
		
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-red error-text'><br/>Please restrict the string maximum length to 9.</span>");
			e.preventDefault();
		}
	});
}

function keydownEvent() {
	$(".input").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		$('.error-text').remove();
		
		//space bar = 32, backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, tab = 9
		if (e.keyCode == 32) {
			spaceCheckFlag = false;
		}
		
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode == 9) {
			e.preventDefault();
		}
		
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-red error-text'><br/>Please restrict the string maximum length to 9.</span>");
			e.preventDefault();
		}
	}); 
}

function keyUpEvent(id) {
	$(id).on("keyup", function(e) {
		if ($(id).val().trim().length != 0) {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}

function transferEffect(id1, id2, callBackFunction) {
	$(id1).addClass("z-index99").effect("transfer", {to: $(id2), className: "ui-effects-transfer"}, 800, function() {
		if (typeof callBackFunction === "function") {
			$(id1).removeClass("z-index99")
			callBackFunction();
		}
	});
}

function tableCreation() {
	$("#memory").removeClass("opacity00");
	for (var i = 0; i < 10; i++) {
		$("#stringTd1, #stringTd2").append("<td class='td-border'></td>");
	}
	for (var i = 0; i < 20; i++) {
		$("#stringTd3").append('<td class="td-border" id="tdBorder' + i + '"></td>');
	}
	transferEffect("#charA", "#tableId1", function() {
		TweenMax.to($("#tableId1"), 0.5, {opacity: 1, onComplete: function() {
			transferEffect("#charB", "#tableId2", function() {
				TweenMax.to($("#tableId2"), 0.5, {opacity: 1, onComplete: function() {
					transferEffect("#charC", "#tableId3", function() {
						TweenMax.to($("#tableId3"), 0.5, {opacity: 1, onComplete: function() {
							timing();
						}});
					});
				}});
			});
		}});
	});
}

function firstUserSpaceFind() {
	$.each($("#user1Text").val().split(""), function(index, value) {
		if (value.trim() != "") {
	    	$("#stringTd1 td").eq(index + 1).addClass("filled").text(value);
	    } else {
	    	$("#stringTd1 td").eq(index + 1).text("\\0");
			return false;
	    }
	});

	if ($(".filled").length < 10) {
		$("#stringTd1 td").eq($(".filled").length + 1).text("\\0");
	}
}

function secondUserSpaceFind() {
	$.each($("#user2Text").val().split(""), function(index, value) {
		  a[index] = value;
		  if (a[index] != " ") {
		    $("#stringTd2 td").eq($(".auto-filled").length + 1).addClass("auto-filled").text(value);
		  } else {
		     	if ($('.auto-filled').length > 0) {
		     		$("#stringTd2 td").eq($(".auto-filled").length + 1).text("\\0");
					return false;
		     	}
		  }
		});
	if ($(".auto-filled").length < 10) {
		$("#stringTd2 td").eq($(".auto-filled").length + 1).text("\\0");
	}
}

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		$(id1).text("" + val + "");
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function printValue() {
	$(".thirdLine").append('<span id="concatString" class="opacity00">The concatenated string = <span class="ct-code-b-yellow">'
						+ $(".filled, .auto-filled").text() + '</span></span>')
	$("#concatString").removeClass("opacity00");
	timing();
}

function exceptSpace(id1, id2, callBackFunction) {
	$.each($(id1).val().split(" "), function(index, value) {
		a[index] = value;
	});
	$(id2).text(a[0]);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}