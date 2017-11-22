var introjs;
var typingInterval = 1;
var count = 0;
var iValue = 0;
var flag = true;
var flag2 = true;
var printStep;
var spaceCheckflag = true; 

var lengthOfAStringReady = function() {
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
					memoryStep: 'tableDefine',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
					element: '#intDec',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#enterString',
					intro: '',
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputStep: 'firstPrint'
				}, {
					element: '#scanf',
					intro: ''
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputStep: 'EnterString'
				}, {
					element: '#memory',
					memoryStep: 'spaceFind',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
					element: '#stringIs',
					intro: ''
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputStep: 'secondPrint'
				}, {
					element: '#whileCond',
					intro: '',
					tooltipClass: 'hide',
					position: 'right'
				}, {
					element: '#stringLength',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputStep: 'lastPrint'
				}, {
					element: '#restart',
					intro: 'Click to restart.',
					position: 'right'
				}]
	});
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "memory":
				$('.usr-btn').remove();
				var memoryStep = introjs._introItems[introjs._currentStep].memoryStep;
				switch(memoryStep) {
					case "tableDefine":
						$("#cup").addClass("opacity00");
						$("#memory").addClass("opacity00");
					break;
					case "spaceFind":
						$(".filled").addClass("opacity00");
						$("#userString td:not(:empty)").addClass("opacity00");
					break;
				}
			break;
			case "intDec":
				$("#cup").addClass("opacity00");
				break;
			case "enterString":
				$('#output').addClass('opacity00');
				break;
			case "output":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				var outputStep = introjs._introItems[introjs._currentStep].outputStep;
				switch(outputStep) {
				case "EnterString":
					$("#userString td").eq($(".filled").length + 1).text('');
					$('.filled').text('');
					break;
				case "secondPrint":
						$(".secondLine").empty();
					break;
				}
			break;
			case "scanf":
				$('#textEnter').remove();
				$('.introjs-tooltip').css({'min-width' : '300px'});
			break;
			case "stringIs":
				$('.usr-btn, .back-button').remove();
			break;
			case "whileCond":
				$('.introjs-tooltip').css({'min-width' : '300px'});	
				if (flag == true) {
					flag = !flag;
					iValue = 0;
					count = 0;
					$("#iSpan").text("0");
					$("#chVal").removeAttr('style')
					$("#appendText").empty();
				}
			break;
		}
	});
	introjs.onafterchange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "program":
				var text = "In this program we will learn how to arrive at the <span class='ct-code-b-yellow'>length</span> of the"
							+ " <span class='ct-code-b-yellow'>string</span> without using any string library functions.";  
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case "charDec":
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "This statement declares a <span class='ct-code-b-yellow'>character array</span> of size"
								+ " <span class='ct-code-b-yellow'>20</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
				
			case "memory":
				$("#usrText").attr("disabled", true);
				$('.introjs-helperLayer ').one('transitionend', function() {
					var memoryStep = introjs._introItems[introjs._currentStep].memoryStep;
					switch(memoryStep) {
						case "tableDefine":
							if (introjs._direction == "backward") {
								setTimeout(function() {
									introjs.previousStep()
								}, 1000);
								
							} else {
								$("#memory").removeClass("opacity00");
								$("#userString td:nth-child(n+2)").remove();
								$("#tableId").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
									$("#tableId").removeClass("animated zoomIn");
									$("#userString").removeClass("hide");
									for (var i = 0; i < 20; i++) {
										$("#userString").append("<td class='td-border'></td>");
									}
									setTimeout(function() {
										introjs.nextStep();
									}, 1000);
								});
							}
						break;
							
						case "spaceFind":
							spaceFind();
							$('.introjs-tooltip').css({'min-width' : '250px'});
							if (spaceCheckflag) {
								
								var text = "The <span class='ct-code-b-yellow'>scanf()</span> function reads all the characters that are specified"
											+ " in the console in the same sequence.";
							} else {
								var text = "Since you have provided a <span class='ct-code-b-yellow'>space</span> only the first sequence of"
											+ " characters before the space is considered is read by the <span class='ct-code-b-yellow'>scanf()</span>"
											+ " method.";
							}
							$(".introjs-tooltip").removeClass('hide');
							var text = text + "<br><br>Also note the <span class='ct-code-b-yellow'>delimiter('\\0')</span> character that"
										+ " is automatically appended as the last character that indicates the end of the string in the array.";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
							break;
					}
				});
				break;
				
			case "intDec":
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass('hide');
					var text = "A variable <span class='ct-code-b-yellow'>i</span> of type"
								+ " <span class='ct-code-b-yellow'>int</span> is declared"
								+ " and initialized to <span class='ct-code-b-yellow'>0</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#cup").addClass("z-index");
						$(".cup-value").removeClass("opacity00");
						$("#intDec").effect("transfer", {to: $("#cup"), className: "ui-effect-transfer"}, 500, function() {
							$("#cup").removeClass("opacity00");
							changeValue("#iSpan", ".zero", iValue, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
				break;
				
			case "enterString":
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
				
			case "output":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('.introjs-helperLayer ').one('transitionend', function() {
					var outputStep = introjs._introItems[introjs._currentStep].outputStep;
					switch(outputStep) {
		
						case "firstPrint":
							if (introjs._direction == 'backward') {
								$('#printString').remove();
								timeOut();
							} else {
								$("#output").removeClass("opacity00");
								$(".firstLine").append('<span id="printString">Enter a string : </span>');
								timeOut();
							}
							break;
							
						case "EnterString":
							$("#usrText").val("");
							$("#textEnter").remove();
							$(".introjs-tooltip").removeClass('hide');
							var text = "Enter a string.";
							typing('.introjs-tooltiptext', text, function() {
								$(".firstLine").append('<span id="textEnter"><input type="text" class="input" spellcheck="false" maxlength="19"'
													+ ' id ="usrText"></span>');
								$("#usrText").effect("highlight", {color: 'yellow'}, 500);
								$("#usrText").focus();
								events();
							});
							break;
								
						case "secondPrint":
							if (introjs._direction == 'backward') {
								$('#givenString').remove();
								timeOut();
							} else {
								$(".secondLine").append('<span id="givenString">The entered string is&nbsp;:&nbsp;</span>');
								$.each($("#usrText").val().split(""), function(index, value) {
									if (value.trim() == "") {
										return false;
									}
									$("#givenString").append('<span class="input">' + value + '</span>');
								});
								timeOut();
							}
							break;
							
						case "lastPrint":
							$(".thirdLine").append('<span id="lengthString">The length of the string </span>');
							$.each($("#usrText").val().split(""), function(index, value) {
								if (value.trim() == "") {
									return false;
								}
								$("#lengthString").append('<span class="ct-code-b-yellow">' + value + '</span>');
							});
							$("#lengthString").append('<span id="length"> is : <span class="ct-code-b-yellow">' + count +'</span></span>');
							timeOut();
							break;
					}
				});
				break;
				
			case "scanf":
				$('.introjs-tooltip').css({'min-width' : '300px'});
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>scanf()</span> function with the format specifier" 
								+ " <span class='ct-code-b-yellow'>%s</span> reads multiple characters specified"
								+ " on the console until it encounters a white space.<br><br>"
								+ " The content that is stored into the <span class='ct-code-b-yellow'>ch</span> character array"
								+ " will always have a <span class='ct-code-b-yellow'>'\\0'</span>"
								+ " character at the end specifying the end of the string.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
				
			case "stringIs":
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>printf()</span> function which uses the"
								+ " <span class='ct-code-b-yellow'>%s</span> format character prints all the characters"
								+ " stored in the character array <span class='ct-code-b-yellow'>ch</span> until it encounters"
								+ " the <span class='ct-code-b-yellow'>'\\0'</span> character.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
				
			case "whileCond":
				$('.back-button').remove();
				$('.introjs-tooltip').css({'min-width' : '300px'});
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var startingText = "Inorder to calculate the string length (the number of characters stored in the character array)"
										+ " we need to count all the characters in the character array untill we encounter the "
										+ "<span class='ct-code-b-yellow'>'\\0'</span> character"
										+ " which is used to mark the end of the character sequence.<br><br>";
					var text1 = "The condition in the while loop evaluates if the character at the given position" 
								+ " <span class='ct-code-b-yellow'>i</span> is"
								+ " <span class='ct-code-b-yellow'>'\\0'</span> or not.<br><br><div id='appendText'></div>";
					if (count == 0) {
						var text = startingText + text1;
						$('.introjs-tooltipbuttons').append('<a id="backbutton" class="introjs-button back-button hide" onClick = "backBtn()">&#8592; Back</a>');
					} else {
						var text = text1;
					}
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext', text, function() {
						$("#backbutton").removeClass('hide');
						$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn">Next &#8594;</a>');
						$('.usr-btn').click(function() {
							$('.usr-btn, .back-button').remove();
							$('#appendText').append('<span class="position-css ct-code-b-yellow opacity00" id="condition"><span class="position-css"'
										+ ' id="chVal">ch[<span id="iVal" class="position-css">i</span>]</span> != \'\\0\'</span>'
										+ '<div id="appendText1"></div>');
							var l1 = $("#chIsNotZero").offset();
							$("#condition").offset({top:l1.top, left:l1.left});
							$("#condition").removeClass("opacity00");
							TweenMax.to("#condition", 1, {top:0, left:0, onComplete: function() {
								rotationEffect('#iVal', count, function() {
									var value;
									if (($("#usrText").val().charAt(count)) == " " || ($("#usrText").val().charAt(count) == "")) {
										var text2 = "Since the above condition evaluates to"
													+ " <span class='ct-red'>false</span>. The control comes out of the <br>"
													+ " <span class='ct-code-b-yellow'>while-loop</span> block.";
										value = '\'\\0\'';
										rotationEffect('#chVal', value, function() {
											typing('#appendText1', text2, function() {
												if (flag2) {
													$('.introjs-nextbutton').show();
												} else {
													$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onClick = "printStepFunc()"> Next &#8594;</a>');
												}
											
											});
										});
									} else {
										nextStep("#increment");
										var text2 = "Since the above condition evaluates to <span class='ct-code-b-yellow'>true</span>."
													+ " The control enters in to the <span class='ct-code-b-yellow'>while-loop</span> block.";
										value = '\'' + $("#usrText").val().charAt(count) + '\'';
										rotationEffect('#chVal', value, function() {
											$(".introjs-tooltip").removeClass("hide");
											typing('#appendText1', text2, function() {
												if (iValue >= 3) {
													$('#appendText1').append("<br>If you want to <span class='ct-code-b-yellow'>terminate</span> the "
															+ "<span class='ct-code-b-yellow'>loop</span> click on the <span class='ct-code-b-yellow'>"
															+ "skip</span> button.");
													$('.introjs-tooltipbuttons').append('<a class="introjs-button skip-button" id="skipBtn"'
																+ ' onClick="skipNext()">Skip</a>');
												}
												$('.introjs-nextbutton').show();
											});
										});
									}
								});
							}});
						});
					});
				});
				break;
				
			case "increment":
				iValue++;
				count++;
				$('.skip-button').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (!$('#increment').hasClass('skip-clicked')) {
						nextStep("#cup");
						setTimeout(function() {
							introjs.nextStep();
						}, 400);
					} else {
						lengthText();
					}
				});
				break;
				
			case "cup":
				$('.introjs-helperLayer ').one('transitionend', function() {
					rotationEffect("#iSpan", iValue, function() {
						var newStep = getStep('#whileCond', '', '', 'right');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						setTimeout(function() {
							introjs.nextStep();
						}, 400);
					});
				});
				break;
				
			case "stringLength":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					flag = true;
					flag2 = false;
					var text = "The function <span class='ct-code-b-yellow'>printf()</span> prints the characters stored in the character array"
								+ " <span class='ct-code-b-yellow'>ch</span> using <span class='ct-code-b-yellow'>%s</span> and prints the"
								+ " count of the characters stored in <span class='ct-code-b-yellow'>i</span> using <span class='ct-code-b-yellow'>"
								+ "%d</span> format character.";
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').prepend('<a class="introjs-button back-button" onClick = "backBtn2()">&#8592; Back</a>');
						
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "restart":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$('.back-button').remove();
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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
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


function spaceFind() {
	$('.filled').removeClass('filled opacity00');
	$("#userString td:not(:empty)").removeClass("opacity00");
	$.each($("#usrText").val().split(""), function(index, value) {
		if (value.trim() != "") {
	    	$("#userString td").eq(index + 1).addClass("filled").text(value);
	    } else {
	    	$("#userString td").eq(index + 1).text("\\0");
			return false;
	    }
	});
	
	if ($(".filled").length < 20) {
		$("#userString td").eq($(".filled").length + 1).text("\\0");
	}
}

function events() {
	$("#usrText").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		$('.error-text').remove();
		//space bar = 32, backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, tab = 9;
		if (e.keyCode == 32) {
			spaceCheckflag = false;
		}
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-red error-text'><br/>Please restrict the string maximum length to 19.</span>");
			e.preventDefault();
		}
	}); 
	
	$("#usrText").on("keyup", function(e) {
		if ($("#usrText").val().length < 1) {
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		} else {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
			if (e.keyCode == 13) {
				introjs.nextStep();
			}
		}
	});
}

function timeOut() {
	if (introjs._direction == 'backward') {
		setTimeout(function() {
			introjs.previousStep();
		}, 800);
	} else{
		setTimeout(function() {
			introjs.nextStep();
		}, 800);
	}
}

function nextStep(id) {
	var newStep = getStep(id, '', 'hide', '');
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

function changeValue(id1, id2, val, callBackFunction) {
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

function rotationEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : 90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function lengthIncrement(val) {
	if (($("#usrText").val().charAt(val + 1)) == " " || ($("#usrText").val().charAt(val + 1) == "")) {
		introjs.nextStep();	
	} else {
		count++;
		iValue++;
		val++;
		lengthIncrement(val);
	}
}

function backBtn() {
	$('.back-button').remove();
	introjs.previousStep();
}

function skipNext() {
	$('.introjs-nextbutton').hide();
	$('.skip-button').remove();
	$('#increment').addClass('skip-clicked');
	lengthIncrement(iValue);
}

function lengthText() {
	$('.introjs-tooltip').removeClass("hide");
	var text = "<span class='ct-code-b-yellow'>i</span> value incremented to <span class='ct-code-b-yellow'>" + (iValue)+"</span>";
	typing('.introjs-tooltiptext', text, function() {
		$("#iSpan").text(iValue - 1);
		nextStep("#cup");
		$('.introjs-nextbutton').show();
	});
}
function printStepFunc() {
	$(".usr-btn").remove();
	introjs.goToStep(introjs._introItems.length - 2);
}
function backBtn2() {
	$(".back-button").remove();
	flag = true;
	introjs.goToStep(12);
	
}