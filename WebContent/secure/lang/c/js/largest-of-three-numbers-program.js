var introcode;
var typingInterval = 1;
var tl = new TimelineLite();
var numberCount = 1;

var largestOfThreeNumbersProgramReady = function() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#programForLargestNumber',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#numberDeclaration1',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#numberDeclaration2',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#numberDeclaration3',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#condition',
						intro :'',
						position: 'bottom',
						tooltipClass : "hide"
					},{
						element :'#conditionAimation',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#printStatement',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#outputDiv',
						intro :'',
						position: 'right',
						tooltipClass : "hide"
					},{
						element : "#restartBtn",
						intro : "Click to restart.",
						tooltipClass: "introjs-tooltip-min-width-custom",
						position : "right"
					}]
	});
	introcode.onafterchange(function(targetElement) {
	var elementId = targetElement.id;
		switch (elementId) {
			case "programForLargestNumber" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-tooltip').removeClass('hide');
				text = 'This program demonstrates the usage of the <span class="ct-code-b-yellow">ternary operator</span>.'+
						'<br/><br/>In this program tries to find the <span class="ct-code-b-yellow">largest</span>'+
						' of <span class="ct-code-b-yellow">three</span> numbers.';
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
					$('.introjs-nextbutton').show(); 
				});
			break;
			case "numberDeclaration" + numberCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('[contenteditable="false"]').attr('contenteditable', 'true');
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here we are declaring and initializing the integer variable '+
							'<span class = "ct-code-b-yellow">'+ $('#declaration' + numberCount).text() +'</span> to '+
							'<span class = "ct-code-b-yellow keyUp">'+ $("#number" + numberCount).text() +'</span>.'+
							'<br/><br/>You can also change the value.'
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$("#number" + numberCount).effect( "highlight",{color: 'yellow'});
						caretAtEnd(document.getElementById('number' + numberCount));
						numberCount++;
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "numberDiv" + numberCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					if(introcode._currentStep == 3 || introcode._currentStep == 5 || introcode._currentStep == 7) {
					$("#value" + numberCount).text($("#number" + numberCount).text());
					TweenMax.to('#numberDiv' +numberCount, 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'The value <span class="ct-code-b-yellow">'+ $("#number" + numberCount).text()+'</span> is '+
								' stored in the variable <span class="ct-code-b-yellow">'+
								$('#declaration' +numberCount).text() + '</span>.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
							$("#number" + numberCount).effect( "highlight",{color: 'yellow'});
							numberCount++;
							$('.introjs-nextbutton').show();
						});
					}});
					} else if(introcode._currentStep == 10) {
						$("#value4").text($('.max-value-div').children().text());
						TweenMax.to('#numberDiv4', 1, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass('hide');
							text = 'The value <span class="ct-code-b-yellow">'+ $('.max-value-div').children().text() +'</span> is '+
									' stored in the variable <span class="ct-code-b-yellow">'+
							$('#declaration' +numberCount).text() + '</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						}});
					}
				});
			break;
			case "condition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'This statement contains <span class="ct-code-b-yellow">conditional</span> (or) '+
							'<span class="ct-code-b-yellow">ternary</span> operator. '+
							'Whose syntax is of the format '+
							'<span class="ct-code-b-yellow">condition ? true : false</span><br/><br/>'+
							'Let us subsuite the values in the statement for evaluation to proceed.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "conditionAimation" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					TweenMax.to('#conditionAimation', 1, {opacity: 1, onComplete: function() {
						flipEffectWithTweenMax('#num1', $('#number1').text(), function() {
							flipEffectWithTweenMax('#num2', $('#number2').text(), function() {
								 flipEffectWithTweenMax('#num3', $('#number1').text(), function() {
									flipEffectWithTweenMax('#num4', $('#number3').text(), function() {
										flipEffectWithTweenMax('#n1', $('#number1').text(), function() {
											flipEffectWithTweenMax('#num5', $('#number2').text(), function() {
												flipEffectWithTweenMax('#num6', $('#number3').text(), function() {
													flipEffectWithTweenMax('#n2', $('#number2').text(), function() {
														flipEffectWithTweenMax('#n3', $('#number3').text(), function() {
															conditionChecking();
														});
													});
												});
											});
										});
									});
								}); 
							});
						});
					}});
				});
			break;
			case "printStatement" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						introcode.nextStep();
					},500);
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#outputText").removeClass("visibility-hidden");
					text = 'The largest number is : ' + $('.max-value-div').children().text();
					typing('#outputText', text, typingInterval, 'white', function(){
						setTimeout(function() {
							introcode.nextStep();
						},800);
					});
					
				});
			break;
			case "restartBtn":
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
	changeValue();
	
	$('#restartBtn').click(function() {
		location.reload();
	});
}

function conditionChecking() {
	var num1 = parseInt($('#number1').text());
	var num2 = parseInt($('#number2').text());
	var num3 = parseInt($('#number3').text());
	if (num1 > num2 && num1 > num3) {
		$("#firstCondition").addClass("blinking-green");
		$('.introjs-tooltip').removeClass('hide');
		text = 'Since, the expression <span class="ct-code-b-yellow">(' + num1 + ' > ' + num2 + ' && ' + num1 + ' > ' + num3 + 
				')</span> evaluates to <span class="ct-code-b-yellow">true</span>. '+
				' The value <span class="ct-code-b-yellow">' + num1 + '</span> is assigned to'+
				' the variable  <span class="ct-code-b-yellow">largestValue</span>.';
		typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
			$("#firstCondition").removeClass("blinking-green");
			$("#firstCondition").css({"background": "lightgreen"});
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
				"onclick='animatingDiv1()'>Next &#8594;</a>");
		});	
	} else {
		$("#firstCondition").addClass("blinking-red");
		$('.introjs-tooltip').removeClass('hide');
		text = 'Since, the expression <span class="ct-code-b-yellow">(' + num1 + ' > ' + num2 + ' && ' + num1 + ' > ' + num3 + 
				')</span> evaluates to <span class="ct-code-b-yellow">false</span>.'+
				' The control goes to the else part which contains the nested expression '+
				'  <span class="ct-code-b-yellow"> (' + num2 + ' > ' + num3 + ' ) ' + ' ? ' +
				num2 +' : ' + num3 + '</span>.';
		typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
			$("#firstCondition").removeClass("blinking-red");
			$("#firstCondition").css({"background": "#ff8080"}); 
			$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
				"onclick='animatingDiv1()'>Next &#8594;</a>");
		});	
	}
}

function innerConditionCheck() {
	setTimeout(function(){
		$("#innerCon").addClass("blinking");
		var num1 = parseInt($('#number1').text());
		var num2 = parseInt($('#number2').text());
		var num3 = parseInt($('#number3').text());
	//	flipEffectWithTweenMax('#num5', $('#number2').text(), function() {
		//	flipEffectWithTweenMax('#num6', $('#number3').text(), function() {
				$('.introjs-tooltip').removeClass('hide');
				text = 'Since, the condition <span class="ct-code-b-yellow">(' + num2 + ' > ' + num3 + 
						')</span> evaluates to <span class="ct-code-b-yellow">' + (num2 > num3).toString() + 
						'</span>. The value <span class="ct-code-b-yellow">' + 
						((num2 > num3) ? num2 : num3).toString() + '</span> is assigned to ' +
						'the  variable <span class="ct-code-b-yellow">largestValue</span>.';
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick='animatingDiv2()'>Next &#8594;</a>");
				});	
			},500);
	//	});
	//});
}

function animatingDiv1() {
	$("#firstCondition").removeClass("blinking-red");
	$("#firstCondition").removeClass('blinking-green');
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	var num1 = parseInt($('#number1').text());
	var num2 = parseInt($('#number2').text());
	var num3 = parseInt($('#number3').text());
	if ((num1 > num2 && num1 > num3)){
		//flipEffectWithTweenMax('#n1', $('#number1').text(), function() {
		//$("#n1").css({"background": "lightgreen"});
		 animatingMax('n1' ,'.max-value-div', num1);
		//});
	} else {
		$("#innerCondition").css({"background": "lightgreen"});
		animatingInnerCondition('innerCondition');
	}
}

function animatingDiv2() {
	$("#innerCon").removeClass("blinking");
	$('.introjs-duplicate-nextbutton').remove();
	$('.introjs-tooltip').addClass('hide');
	var num1 = parseInt($('#number1').text());
	var num2 = parseInt($('#number2').text());
	var num3 = parseInt($('#number3').text());
	(num2 > num3) ? animatingMax('n2', '#innerCondition', num2) :  animatingMax('n3', '#innerCondition', num3);
}

function animatingInnerCondition(id) {
	TweenMax.to($('.max-value-div').children().not('#' + id), 1, {opacity: 0, onComplete: function() {
		var beforeRemoveLeft = $('#' + id).offset().left;
		$('.max-value-div').children().not('#' + id).remove();
		TweenMax.from($('#' + id), 0.5, {left: beforeRemoveLeft - $('#' + id).offset().left, onComplete: function() {
			$("#innerCondition").css({"background": ""});
			innerConditionCheck();
		}});
	}});
}

function animatingMax(id, id1, num) {
	//flipEffectWithTweenMax('#'+id, num, function() {
	$("#" +id).css({"background": "lightgreen"});
	setTimeout(function(){
		TweenMax.to($(id1).children().not('#' + id), 0.5, {opacity: 0, onComplete: function() {
			var beforeRemoveLeft = $('#' + id).offset().left;
			$(id1).children().not('#' + id).remove();
			TweenMax.from($('#' + id), 0.5, {left: beforeRemoveLeft - $('#' + id).offset().left, onComplete: function() {
				/* $('.introjs-tooltip').removeClass('hide');
				typingId = '.introjs-tooltiptext';
				typingContent = 'The value <span class="ct-code-b-yellow">' + $(id1).children().text() + '</span> is assigned to ' +
								' the variable <span class="ct-code-b-yellow">largestValue</span>.';
				typingInterval = 10;
				cursorColor = 'white';
				typingCallbackFunction = function() { */
					$("#" +id).css({"background": ""});
				setTimeout(function() {
					introcode.nextStep();
				},800);
				//	$('.introjs-nextbutton').show();
				/* }
				typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction); */
			}});
		}});
	},600);
	//});
}



function flipEffectWithTweenMax(selector, val, callBackFunction) {
	$(selector).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			$(selector).removeClass("z-index1000000");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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
function changeValue() {
	$("[contenteditable=true]").on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 3.</span>");
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").on("keyup", function(e) {
		$('.keyUp').text($(this).text());
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter a number.</span>");
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