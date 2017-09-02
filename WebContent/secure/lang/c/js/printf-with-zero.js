var introcode;
var typingInterval = 10;
var tl = new TimelineLite();
var sopLineCount = 1;
var count = 0;

var printfWithZeroReady = function() {
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
				element :'#program',
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
				animateStep: "printAvalue"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'right',
				tooltipClass : "hide",
				animateStep: "printAvalue"
			},{
				element :'#sopLine2',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printAvalueWithOutLoss"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'right',
				tooltipClass : "hide",
				animateStep: "printAvalueWithOutLoss"
			},{
				element :'#sopLine3',
				intro :'',
				tooltipClass : "hide",
				animateStep: "printAvalueWithLoss"
			},{
				element :'#outputDiv',
				intro :'',
				position: 'right',
				tooltipClass : "hide",
				animateStep: "printAvalueWithLoss"
			},{
				element : "#restartBtn",
				intro : "Click to restart.",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}]
	});
	introcode.onafterchange(function(targetElement){
		var elementId = targetElement.id;
		switch (elementId) {
			case "printfDefinition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				TweenMax.to('#text1', 1, {opacity: 1, onComplete: function() {
					TweenMax.to('#text2', 1, {opacity: 1, onComplete: function() {
						$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
							$('.introjs-duplicate-nextbutton').click(function() {
								$(".introjs-duplicate-nextbutton").remove();
								introcode.nextStep();
							});
						});
					}});
				}});
			break;
			case "program" :
				$("#codeDiv, #animationDiv, #outputDiv").removeClass("opacity00");
				$("#printfDefinition").addClass("z-index1000000");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we will learn how to specify <span class = "ct-code-b-yellow">0</span> as'+
							' padding character while using <span class = "ct-code-b-yellow">field width</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "VariableDeclararion" :
				$("#VariableDeclararion").removeClass("z-index1000000");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are declaring and initializing an integer variable '+
							'<span class = "ct-code-b-yellow">a</span> to '+
							'<span class = "ct-code-b-yellow">54</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					transferEffect('#VariableDeclararion', '#numberDiv1', function() {
						introNextStep();
					});
				});
			break;
			case "sopLine" + sopLineCount  :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printAvalue" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here, the <span class="ct-code-b-yellow">printf()</span> function'+
									' uses <span class="ct-code-b-yellow">%d</span> format character '+
									' to print the value strored in the variable <span class="ct-code-b-yellow">a</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "printAvalueWithOutLoss" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Here, the <span class="ct-code-b-yellow">printf</span> statement is trying to print the'+
									' value <span class="ct-code-b-yellow">999</span> using '+
									'the format character <span class="ct-code-b-yellow">%02d</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
						
						case"printAvalueWithLoss" :
							$('.introjs-tooltip').removeClass('hide');
							$('[contenteditable = "false"]').attr('contenteditable', 'true');
							text = 'The <span class="ct-code-b-yellow">printf</span> statement is trying to '+
									' print the value <span class="ct-code-b-yellow">54</span> stored in '+
									'the variable <span class="ct-code-b-yellow">a</span>,'+
									' using <span class = "ct-code-b-yellow">%0<span class = "keyValue">6</span>d</span>.'+
									'<br/><br/> You can also change the value of field width'+
									' <span class="ct-code-b-yellow keyValue">6</span> to any other value.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								caretAtEnd(document.getElementById('number' + sopLineCount));
								changeValue('#number' + sopLineCount, 1);
								clickToFocus("#sopLine"+sopLineCount ,"#number" + sopLineCount);
								$('.introjs-nextbutton').show();
							});
						break;
					}
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printAvalue" :
							printDecimalValue();
						break;
						case "printAvalueWithOutLoss" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'Since, we are trying to print <span class = "ct-code-b-yellow">999</span>'+
									' which has <span class = "ct-code-b-yellow">3</span> digits,'+
									' while the <span class = "ct-code-b-yellow">field width</span> specified'+
									' in <span class = "ct-code-b-yellow">%02d</span> is only of '+
									' <span class = "ct-code-b-yellow">2</span> spaces, the whole number '+
									'<span class = "ct-code-b-yellow">999</span> will be printed as it is '+
									'without considering the <span class = "ct-code-b-yellow">0</span> '+
									' as padding.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
								"onclick=printnineValue()>Next &#8594;</a>");
							});
						break;
						
						case"printAvalueWithLoss" :
							var length = $("#addressValue1").text().length;
							var number = parseInt($("#number" + sopLineCount).text());
							if (length < number) {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Since, the value <span class = "ct-code-b-yellow">54</span> has only '+
										'<span class = "ct-code-b-yellow">2</span> digits and the '+
										' <span class = "ct-code-b-yellow">field width</span> specified ' +
										' <span class = "ct-code-b-yellow">'+ number +'</span>, '+
										'the <span class = "ct-code-b-yellow">0</span> that precedes '+
										' <span class = "ct-code-b-yellow">'+ number +'</span>'+
										' will be used to pad all the remaining '+
										' <span class = "ct-code-b-yellow">'+ ( number - length) +'</span> spaces.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
									for (var i = (number - 1); i >= 0; i--) {
										$("#appendDiv" + sopLineCount).append('<span id = "borderSpan" class = "bottom-border visibility-hidden"><span class = "zeros visibility-hidden" id = "outputSpan'+ i +'">0</span></span>');
									}
									$('.introjs-tooltipbuttons').append("<a class = 'introjs-button introjs-duplicate-nextbutton' " +
									"onclick = outputReservedPositions()>Next &#8594;</a>");
								});
							} else {
								$('.introjs-tooltip').removeClass('hide');
								text = 'Since, we are trying to print <span class = "ct-code-b-yellow">54</span>'+
										' which has <span class = "ct-code-b-yellow">2</span> digits,'+
										' while <span class = "ct-code-b-yellow">field width</span> specified'+
										' in <span class = "ct-code-b-yellow">%0'+ number+'d</span> is only of '+
										' <span class = "ct-code-b-yellow">'+ number +'</span> spaces, the whole number '+
										'<span class = "ct-code-b-yellow">54</span> will be printed as it is '+
										'without considering the <span class = "ct-code-b-yellow">0</span> '+
										' as padding.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
									"onclick=printDecimalValue()>Next &#8594;</a>");
								});
							}
						break;
					}
				});
			break;
			case "restartBtn":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$("#printfDefinition").removeClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
				});
			break;
		}
	});
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function clickToFocus(id1, id2) {
	$(id1).click(function(){
		$(id2).focus();
	});
}

function outputReservedPositions(text) {
	$('.introjs-tooltip').addClass('hide');
	var number = parseInt($("#number" + sopLineCount).text());
	var length = $("#addressValue1").text().length;
	$(".introjs-duplicate-nextbutton").remove();
	$("#persentageD" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	$("#persentageD" + sopLineCount).effect( "transfer", { to: $("#appendDiv" + sopLineCount), className: "ui-effects-transfer" }, 1000 , function(){
		$("#persentageD" + sopLineCount).removeClass("z-index1000000")
		$(".bottom-border").removeClass("visibility-hidden");
		printOutputWithSpaces();
	});
}

function printOutputWithSpaces() {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	var length = $("#addressValue1").text().length;
	var number = parseInt($("#number" + sopLineCount).text());
	for (var i = (length - 1), j = 0; i >= 0, j < length; i--, j++) {
		var text = $("#outputSpan" + i).text($("#addressValue1").text().charAt(j)).addClass("move-values visibility-hidden");
	}
	highlightFunction("#persentageD" + sopLineCount, "z-index1000000", function() {
		highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
			fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", true, function() {
				$('#persentageD' + sopLineCount).removeClass('z-index1000000');
				$('#aValue' + sopLineCount).removeClass('z-index1000000');
				highlightFunction("#addressValue1", "circle-css z-index1000000", function() {
					$(".move-values").removeClass("circle-css visibility-hidden");
					fromEffectWithTweenMax("#addressValue1", ".move-values", false, function() {
						$('#addressValue1').removeClass('circle-css z-index1000000');
						$('.zeros').removeClass("visibility-hidden");
						setTimeout(function() {
							sopLineCount++;
							introcode.nextStep();
						},500);
					});
				});
			});
		});
	});
}

function printDecimalValue() {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	highlightFunction("#persentageD" + sopLineCount, "z-index1000000", function() {
		highlightFunction("#aValue" + sopLineCount, "z-index1000000", function() {
			fromEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation",true, function() {
		  		$('#persentageD' + sopLineCount).removeClass('z-index1000000');
				$('#aValue' + sopLineCount).removeClass('z-index1000000');
				highlightFunction("#addressValue1", "circle-css z-index1000000", function() {
					$("#outputAValue" + sopLineCount).text($("#addressValue1").text());
				  	fromEffectWithTweenMax("#addressValue1", "#outputAValue" + sopLineCount, false, function() {
				  		$('#addressValue1').removeClass('circle-css z-index1000000');
						setTimeout(function(){
							sopLineCount++;
							introcode.nextStep();
						},800);
					 });
				});
			});
		});
	});
}	

function printnineValue() {
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	highlightFunction("#persentageD" + sopLineCount, "z-index1000000", function() {
		highlightFunction("#aValue" + sopLineCount, "circle-css z-index1000000", function() {
			$("#outputAValue" + sopLineCount).text($('#aValue'+sopLineCount).text());
		  	fromEffectWithTweenMax('#aValue'+sopLineCount, "#outputAValue" + sopLineCount, false, function() {
		  		$('#aValue' + sopLineCount).removeClass('circle-css z-index1000000');
		  		$('#persentageD' + sopLineCount).removeClass('z-index1000000');
				setTimeout(function(){
					sopLineCount++;
					introcode.nextStep();
				},800);
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
		$("body").append("<span id='dummy' style='position: relative; z-index: 9999999; color: white;'>" + $(selector2).text() + "</span>");
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