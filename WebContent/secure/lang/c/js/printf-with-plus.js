var introcode;
var typingInterval = 10;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;
var plusCount = 1;

var printfWithPlusReady = function() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
				element :'#printfDefinition',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#VariableDeclararion',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#animationDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#sopLine1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "decimal"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'left',
				tooltipClass : "hide",
				animateStep: "decimal"
			},{
				element :'#sopLine2',
				intro :'',
				tooltipClass : "hide",
				animateStep: "plusSpace"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'left',
				tooltipClass : "hide",
				animateStep: "plusSpace"
			},{
				element :'#sopLine3',
				intro :'',
				tooltipClass : "hide",
				animateStep: "plusWithSpace"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'left',
				tooltipClass : "hide",
				animateStep: "plusWithSpace"
			},{
				element :'#sopLine4',
				intro :'',
				tooltipClass : "hide",
				animateStep: "plusWithZero"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'left',
				tooltipClass : "hide",
				animateStep: "plusWithZero"
			},{
				element : "#restartBtn",
				intro : "Click to restart.",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}]
	});
	introcode.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch (elementId) {
				case "VariableDeclararion" :
					$("#printfDefinition").addClass("z-index1000000");
					$("#codeDiv, #animationDiv, #outputDiv").removeClass("opacity00");
					$("#VariableDeclararion").removeClass("z-index1000000");
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing an integer variable '
							+ ' <span class = "ct-code-b-yellow">a</span> to '
							+ ' <span class = "ct-code-b-yellow">64</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
				break;
				
				case "animationDiv" :
					transferEffect('#VariableDeclararion', '#numberDiv1', function() {
						introNextStep();
					});
				break;
				
				case "sopLine" + sopLineCount :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "decimal" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here, the <span class="ct-code-b-yellow">printf()</span> function'
									+ ' uses <span class="ct-code-b-yellow">%d</span> format character '
									+ ' to print the value strored in the variable <span class="ct-code-b-yellow">a</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
							
						case "plusSpace" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here, the <span class="ct-code-b-yellow">printf</span> statement is trying to print the'
									+ ' value <span class="ct-code-b-yellow">64</span> using '
									+ ' the format character <span class="ct-code-b-yellow">%+d</span>.';	
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						break;
							
						case "plusWithSpace" :
							$('[contenteditable = "false"]').attr('contenteditable', 'true');
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf</span> statement is trying to '
									+ ' print the value <span class="ct-code-b-yellow">64</span>, using  '
									+ ' <span class="ct-code-b-yellow">+</span> symbol as well as '
									+ ' <span class="ct-code-b-yellow">field width</span> of '
									+ ' <span class="ct-code-b-yellow"><span class = "keyValue">6</span></span> '
									+ ' specified in <span class = "ct-code-b-yellow">%+<span class = "keyValue">6</span>d</span>.'
									+ ' <br/><br/> You can also change the value of field width'
									+ ' <span class = "ct-code-b-yellow keyValue">6</span> to any other value.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								caretAtEnd(document.getElementById('number' + sopLineCount));
								changeValue('#number' + sopLineCount, 1);
								clickToFocus("#sopLine" + sopLineCount,"#number" + sopLineCount);
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "plusWithZero" :
							$('[contenteditable = "false"]').attr('contenteditable', 'true');
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf</span> statement is trying to '
									+ ' print the value <span class="ct-code-b-yellow">64</span> using the '
									+ ' format specifier <span class = "ct-code-b-yellow">%+0'
									+ ' <span class = "keyValue">6</span>d</span>.'
									+ ' <br/><br/> You can also change the value of field width'
									+ ' <span class = "ct-code-b-yellow">6</span> to any other value.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								caretAtEnd(document.getElementById('number' + sopLineCount));
								changeValue('#number' + sopLineCount, 1);
								clickToFocus("#sopLine" + sopLineCount,"#number" + sopLineCount);
								$('.introjs-nextbutton').show();
							});
						break;
					}
				break;
				
				case "outputDiv" :
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					case "decimal" :
						printDecimalValue();
					break;
					
					case "plusSpace" :
						$("#pluss"+plusCount).text("+");
						$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
						sopLineCount++;
					  	plusCount++;
						introNextStep();
					break;
					
					case "plusWithSpace" :
						var length = $("#addressValue1").text().length;
						var number = parseInt($("#number" + sopLineCount).text());
						if (length < number) {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, the number of characters of the digits in '
									+ ' <span class = "ct-code-b-yellow">64</span> '
									+ ' is lesser than the field width <span class = "ct-code-b-yellow">6</span>, '
									+ ' the remaining positions will be padded with'
									+ ' <span class = "ct-code-b-yellow">spaces</span>.<br/><br/>'
									+ ' We will also notice that the number will'
									+ ' be preceded with <span class = "ct-code-b-yellow">+</span>';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								for (var i = (number - 1); i >= 0; i--) {
									$("#appendDiv" + sopLineCount).append('<span id = "borderSpan" class = "bottom-border '
											+ 'visibility-hidden"><span class = "visibility-hidden" id = "outputSpan'
											+ i +'">0</span></span>');
								}
								$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>"
										+ "Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-tooltip').addClass('hide');
									$('.introjs-duplicate-nextbutton').remove();
									var length = $("#addressValue1").text().length;
									var number = parseInt($("#number" + sopLineCount).text());
									for (var i = (length - 1), j = 0; i >= 0, j < length; i--, j++) {
										if ( j ==  (length - 1)) {
											$("#outputSpan" + (j + 1)).addClass("pluse-symbol");
											$("#outputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values");
										} else {
											$("#outputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values");
										}
									}
									$("#persentage" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
									$("#persentage" + sopLineCount).effect( "transfer", { to: $("#appendDiv" + sopLineCount), className: "ui-effects-transfer" }, 1000 , function() {
										$("#persentage" + sopLineCount).removeClass("z-index1000000");
										$(".bottom-border").removeClass("visibility-hidden");
										$(".pluse-symbol").text("+").removeClass("visibility-hidden");
										$(".move-values").removeClass("visibility-hidden");
										sopLineCount++;
										introNextStep();
									});
								});
							});
						} else {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, the number of characters of the digits in <span class = "ct-code-b-yellow">64</span> '
									+ ' is more than the field width <span class = "ct-code-b-yellow">'+ number+'</span>, '
									+ ' the number <span class = "ct-code-b-yellow">64</span> will be printed with '
									+ ' preceding <span class = "ct-code-b-yellow">+</span> sign.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>"
									+ "Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-tooltip').addClass('hide');
									$('.introjs-duplicate-nextbutton').remove();
									$("#pluss2").text("+").removeClass("visibility-hidden");
									$('#outputAValue3').text($('#addressValue1').text());
									sopLineCount++;
									introNextStep();
								});
							});
						}
					break;
					
					case "plusWithZero" :
						var length = $("#addressValue1").text().length;
						var number = parseInt($("#number" + sopLineCount).text());
						if (length < number) {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, we are using <span class = "ct-code-b-yellow">0</span> as the padding character to '
									+ ' fill the remaining <span class = "ct-code-b-yellow">spaces</span>'
									+ ' while priting <span class = "ct-code-b-yellow">64</span> ,'
									+ ' the <span class = "ct-code-b-yellow">+</span> symbol will appear before the padding characters.'
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								for (var i = (number - 1); i >= 0; i--) {
									if (i == (number -1 )) {
										$("#appendDiv" + sopLineCount).append('<span id = "borderSpan" '
											+ 'class = "bottom-border visibility-hidden">'
											+ ' <span class = "visibility-hidden append-plus" id = "zerpOutputSpan'
											+ i +'">0</span></span>');	
									} else {
								 		$("#appendDiv" + sopLineCount).append('<span id = "borderSpan"'
								 			+ ' class = "bottom-border visibility-hidden">'
								 			+ ' <span class = "visibility-hidden append-zero" id = "zerpOutputSpan'
								 			+ i +'">0</span></span>');
									}
								}
								$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>"
										+ "Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-tooltip').addClass('hide');
									$('.introjs-duplicate-nextbutton').remove();
									var length = $("#addressValue1").text().length;
									var number = parseInt($("#number" + sopLineCount).text());
									for (var i = (length - 1), j = 0; i >= 0, j < length; i--, j++) {
										if ( j == 1 ) {
											$("#zerpOutputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values1");
										} else {
											$("#zerpOutputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values1");
										}
									}
									$("#persentage" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
									$("#persentage" + sopLineCount).effect( "transfer", { to: $("#appendDiv" + sopLineCount), className: "ui-effects-transfer" }, 1000 , function(){
										$("#persentage" + sopLineCount).removeClass("z-index1000000");
										$(".bottom-border").removeClass("visibility-hidden");
										$(".append-zero").removeClass("visibility-hidden");
										$(".append-plus").text("+").removeClass("visibility-hidden");
										$(".move-values1").removeClass("visibility-hidden");
										sopLineCount++;
										introNextStep();
									});
								});
							});
						} else {
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, the number of characters of the digits in <span class = "ct-code-b-yellow">64</span> '
									+ ' is more than the field width <span class = "ct-code-b-yellow">'+ number+'</span>, '
									+ ' the number <span class = "ct-code-b-yellow">64</span> will be printed with '
									+ ' preceding <span class = "ct-code-b-yellow">+</span> sign.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton'>"
									+ "Next &#8594;</a>");
								$('.introjs-duplicate-nextbutton').click(function() {
									$('.introjs-tooltip').addClass('hide');
									$('.introjs-duplicate-nextbutton').remove();
									$("#pluss3").text("+").removeClass("visibility-hidden");
									$('#outputAValue4').text($('#addressValue1').text());
									sopLineCount++;
									introNextStep();
								});
							});
						}
					break;
					}
				break;
				
				case "restartBtn":
					$("#printfDefinition").removeClass("z-index1000000");
					$("#restartBtn").removeClass('visibility-hidden');
				break;
			}
		});
	});
	introcode.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
	
	TweenMax.to('#text1', 1, {opacity: 1, onComplete: function() {
		TweenMax.to('#text2', 1, {opacity: 1, onComplete: function() {
			TweenMax.to('#text3', 1, {opacity: 1, onComplete: function() {
				$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
					$('.introjs-duplicate-nextbutton').click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						introcode.nextStep();
					});
				});
			}});
		}});
	}});
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function clickToFocus(id1, id2) {
	$(id1).click(function(){
		$(id2).focus();
	});
}

function printDecimalValue() {
	$(".introjs-duplicate-nextbutton").remove();
	highlightFunction("#persentage" + sopLineCount, "z-index1000000", function() {
		highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
			fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", true, function() {
				$("#persentage" + sopLineCount).removeClass('z-index1000000');
				$("#aValue" + sopLineCount).removeClass('z-index1000000');
				highlightFunction("#addressValue1", "circle-css z-index1000000", function() {
					$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
					fromEffectWithTweenMax("#addressValue1", "#outputAValue" + sopLineCount, false, function() {
						$('#addressValue1').removeClass('circle-css z-index1000000');							
			  			sopLineCount++;
			  			introNextStep();
					});
				});
			});
		});
	});
}

//*******Text highlight function*****
function highlightFunction(selector1, selector2, callBackFunction) {
	$(selector1).addClass(selector2).effect( "highlight",{color: 'yellow'},500, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//*****setTimeout function to intro go next step step*****
function introNextStep() {
	setTimeout(function() {
		introcode.nextStep();
	},800);
}

//*****From effect animation*****
function fromEffectWithTweenMax(selector1, selector2, flag, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).css({"color" : "red", "z-index" : "99999999"}).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	if (flag) {
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: white;'>" 
				+ $(selector2).text() + "</span>");
		$("#dummy").offset({
			"top" : l2.top,
			"left" : l2.left
		});
	}
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector2).removeAttr("style").css("color", "white");
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

//********* Transfer effect function ********* 
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
		$(selector2).removeClass("opacity00");
		$(selector1).removeClass("z-index1000000");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

//cursor position at end
function caretAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
} 

//Allow only numbers,Condition to  enter text, change the array values, Display error message & Fill all the array elements
function changeValue(id1, id2) {
	$(id1).on("keydown", function(e) {
		$(".keyValue").text($(id1).text());
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max-1) {
			if (id2 != 1) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 3.</span>");
				e.preventDefault();
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 1.</span>");
				e.preventDefault();
			}
		}
	});
	$(id1).on("keyup", function(e) {
		$(".keyValue").text($(id1).text());
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introcode.refresh();
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
}