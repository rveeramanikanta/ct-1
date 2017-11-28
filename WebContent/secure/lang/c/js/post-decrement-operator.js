var introcode;
var typingInterval = 1;
var tl = new TimelineLite();
var sopLineCount = 1;

var postDecrementOperatorReady = function() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [{
					element :'#program',
					intro :'',
					position : "bottom"
				},{
					element :'#yVariableDeclararionLine',
					intro :'',
				},{
					element :'#animationDiv1',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#xVariableDeclararionLine',
					intro :'',
					tooltipClass: 'hide'
				},{
					element :'#xCup',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#yVariableDeclararionLine',
					intro :'',
				},{
					element :'#expressionStatement',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#sopLine1',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#outputDiv',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#sopLine2',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#outputDiv',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#singleStatement',
					intro :'',
				},{
					element: '#animationDiv5',
					intro: '',
					tooltipClass: 'hide'
				},{
					element :'#sopLine3',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#outputDiv',
					intro :'',
					tooltipClass : "hide"
				},{
					element : "#restartBtn",
					intro : "Click to restart.",
					tooltipClass: "introcode-tooltip-min-width-custom",
					position : "right"
				}]
			});
	
	introcode.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "program" :
		break;
		case "yVariableDeclararionLine"  :
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introcode._currentStep == 1) {
					$('.animation-div1, .animation-div2, .animation-div3').removeAttr("style");
					$(".introjs-duplicate-nextbutton").remove();
					$('.introjs-tooltip').removeClass('hide');
				} else if (introcode._currentStep == 5) {
					$(".introjs-duplicate-nextbutton").remove();
					$("#xCupValue").text($("#xvalue").text());
					$("#yCup").addClass("visibility-hidden");
					$("#yCupValue").text("");
					$('.animation-div5').css({"opacity":0});
					$('.introjs-tooltip').removeClass('hide');
				}
			});
		break;
		case "animationDiv1"  :
			introcode.refresh();
			$('.animation-div1, .animation-div2, .animation-div3').removeAttr("style");
			$('.svg-text').css({fill: 'white'});
			TweenMax.to($('.svg-line').hide().eq(0), 0.5, {attr: {y2: '39.2%'}});
			$("#predecrement").removeClass("svg-border");
			$(".animation-div1").removeClass("opacity00")
		break;
		case "xVariableDeclararionLine":
			$("#xCup").addClass("visibility-hidden");
			$("#xvalue").attr("contenteditable", "true");
			caretAtEnd('xvalue');
			$('.introjs-tooltip').removeClass('hide');
		break;
		case "xCup":
			$("#xvalue").attr("contenteditable", "false");
		break;
		case "expressionStatement":
			$("#yVariableDeclararionLine").addClass("z-index1000000");
			$("#xCupValue").text($("#xvalue").text());
		break;
		case "singleStatement":
			$('#xCup').removeClass('z-index1000000')
			$('.animation-div6').css({"opacity":0})
			$("#xCupValue").text(parseInt($("#xvalue").text()) - (1));
			$(".introjs-duplicate-nextbutton").remove();
		break;
		case "animationDiv5"  :
			$(".introjs-duplicate-nextbutton").remove();
		break;
		}
	});
	
	
	introcode.onafterchange(function(targetElement) {
		
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		if (introcode._introItems[introcode._currentStep]["tooltipClass"] == "hide") {
			introcode._introItems[introcode._currentStep]["animation"] = "repeat";
		}
		
		if (introcode._introItems[introcode._currentStep]["isCompleted"]) {
			
			if (introcode._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introcode._introItems[introcode._currentStep]["animation"] != "repeat") {
			introcode._introItems[introcode._currentStep]["isCompleted"] = true;
		}
		
		
	var elementId = targetElement.id;
		switch (elementId) {
			case "program" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				text = '<span class="ct-code-b-yellow">--</span> indicates decrement.<br>'+
				 		'When it is applied after a variable, for example: <span class="ct-code-b-yellow">x--</span>,'+
				 		' it is called <span class="ct-code-b-yellow">post-decrement</span>.<br/><br/>'+
				 		'Let us learn how a <span class="ct-code-b-yellow">post-decrement</span> operator '+
				 		'works.'
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
					$('.introjs-nextbutton').show();
				});
			break;
			case "yVariableDeclararionLine"  :
				$('.introjs-helperLayer').one('transitionend', function() {
				if (introcode._currentStep == 1) {
					$('.animation-div1, .animation-div2, .animation-div3').removeAttr("style");
					$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, <span class="ct-code-b-yellow">y</span> is assigned'+
							' a value with <span class="ct-code-b-yellow">x--</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else if (introcode._currentStep == 5) {
					$(".introjs-duplicate-nextbutton").remove();
					$("#xCupValue").text($("#xvalue").text());
					$("#yCup").addClass("visibility-hidden");
					$(".animation-div5").css({"opacity":0});
					$('.introjs-tooltip').removeClass('hide');
					text = 'Here, we are using a '+
							'<span class="ct-code-b-yellow">post-decrement</span> operator.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				}
			});
			break;
			case "animationDiv1"  :
				introcode.refresh();
				$('.animation-div1, .animation-div2, .animation-div3').attr("opacity","0");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					TweenMax.to('.animation-div1', 1, {opacity: 1, onComplete: function() {
						$("#predecrement").addClass("svg-border");
						svgBoxAnimation(0, function(){
							$('.introjs-tooltip').removeClass('hide');
							text = 'In the above expression, we are using <span class="ct-code-b-yellow">post-decrement</span>'+
									' (<span class="ct-code-b-yellow">x--</span>) operator  '+
									'  on a variable <span class="ct-code-b-yellow">x</span>.<br/><br/>'+
									'First, the value of <span class="ct-code-b-yellow">x</span> will be assigned to the'+
									' variable <span class="ct-code-b-yellow">y</span>. '+
									'And then the value of <span class="ct-code-b-yellow">x</span> will be decremented'+
									' by <span class="ct-code-b-yellow">one</span>.' ;
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
								"onclick=xValueAssignedToVariabley()>Next &#8594;</a>");
							});
						});
					}});
				});
			break;
			case "xVariableDeclararionLine":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us work with a live example.<br/>'+
							'Please provide a value for <span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$("#xvalue").effect( "highlight",{color: 'yellow'}, 500);
						caretAtEnd('xvalue');
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "xCup":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introcode._direction == "forward") {
						$("#xCupValue").text("");
						$("#xVariableDeclararionLine").addClass("z-index1000000");
						$("#xVariable").effect( "highlight",{color: '#ffff33'}, 500);
						$("#xVariable").effect( "transfer", { to: $("#xCup"), className: "ui-effects-transfer" }, 1000 , function(){
							$("#xCup").removeClass("visibility-hidden");
							$("#xCupValue").text($("#xvalue").text());
							$("#xCupValue").addClass("z-index100000000").removeClass("visibility-hidden");
							fromEffectWithTweenMax('#xvalue', '#xCupValue', function() {
							   $("#xCupValue").removeClass("z-index100000000");
							   $("#xVariableDeclararionLine").removeClass("z-index1000000");
								setTimeout(function () {
									introcode.nextStep();
								}, 1000);
							});
						});							
					} else {
						$("#xCup").addClass("visibility-hidden");
						setTimeout(function () {
							introcode.previousStep();
						}, 1000);
					}
				});
			break;
			case "expressionStatement":
				$('.introjs-tooltip').addClass('hide');
				$("#yCup").addClass("visibility-hidden");
				$(".animation-div5").addClass("opacity00").css({"opacity":0});
				$("#yVariableDeclararionLine").addClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#yVariable").effect( "highlight",{color: '#ffff33'}, 500);
					$("#yVariable").effect( "transfer", { to: $("#yCup"), className: "ui-effects-transfer" }, 1000 , function(){
						$("#yCup").removeClass("visibility-hidden");
								$("#yVariableDeclararionLine").effect( "highlight",{color: '#ffff33'}, 500);
								$("#yVariableDeclararionLine").effect( "transfer", { to: $("#yvalueassignment"), className: "ui-effects-transfer" }, 1000 , function(){
									TweenMax.to('.animation-div5', 1, {opacity: 1, onComplete: function() {
										$("#yVariableDeclararionLine").removeClass("z-index1000000");
										$('.introjs-tooltip').removeClass('hide');
										text = 'Let us create variable <span class="ct-code-b-yellow">y</span>.';
										typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
											$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
											"onclick=postdecrementOperatorAnimation()>Next &#8594;</a>");
										});
									}});
								});
					});							
				});
			break;
			case "sopLine1":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introcode._direction == "forward") {
						setTimeout(function () {
							introcode.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introcode.previousStep();
						}, 1000);
					}
				});
			break;
			case "sopLine2":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introcode._direction == "forward") {
						setTimeout(function () {
							introcode.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introcode.previousStep();
						}, 1000);
					}
				});
			break;
			case "outputDiv":
				//$("#xCup").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introcode._currentStep == 8) {
						if (introcode._direction == "forward") {
							$(".output").append('<div id="firstVal"> x value : '+ $("#xCupValue").text() + '</div>');
							setTimeout(function () {
								introcode.nextStep();
							}, 1000);
						} else {
							setTimeout(function () {
								$(".output #firstVal").remove();
								introcode.previousStep();
							}, 1000);
						}
					} else if (introcode._currentStep == 10) {
						if (introcode._direction == "forward") {
							$(".output").append('<div id="secondVal"> y value : '+ $("#yCupValue").text() + '</div>');
							setTimeout(function () {
								introcode.nextStep();
							}, 1000);
						} else {
							setTimeout(function () {
								$(".output #secondVal").remove();
								introcode.previousStep();
							}, 1000);
						}
					} else {
						if (introcode._direction == "forward") {
							$(".output").append('<div id="thirdVal"> x value : '+ $("#xCupValue").text() + '</div>');
							setTimeout(function () {
								introcode.nextStep();
							}, 1000);
						} else {
							setTimeout(function () {
								$(".output #thirdVal").remove();
								introcode.previousStep();
							}, 1000);
						}
					}
				});
			break;
			case "sopLine3":
				$("#xCup").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introcode._direction == "forward") {
						setTimeout(function () {
							introcode.nextStep();
						}, 1000);
					} else {
						setTimeout(function () {
							introcode.previousStep();
						}, 1000);
					}
				});
			break;
			
			case "singleStatement"  :
				/*$('.animation-div6').css({"opacity":0})
				$("#xCupValue").text(($("#xvalue").text()) - 1);
				$(".introjs-duplicate-nextbutton").remove();*/
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">post-decrement</span> operator '+
							'can also be applied on a variable which can exist as a single statement'+
							' as shown here.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "animationDiv5"  :
				//$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#singleStatement").effect( "highlight",{color: 'yellow'});
					$("#singleStatement").effect( "transfer", { to: $("#singleStatementDiv"), className: "ui-effects-transfer" }, 1000 , function(){
						TweenMax.to('.animation-div6', 1, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass('hide');
							text = '<span class="ct-code-b-yellow">x</span> value '+
									'which is currently <span class="ct-code-b-yellow">'+ $("#xCupValue").text() +'</span>'+
									' will be <span class="ct-code-b-yellow">decremented</span>'+
									' by <span class="ct-code-b-yellow">1</span>.<br/>'+
									'<span id="appendSpan"></span>';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$("#xCup").addClass("z-index1000000");
								$('.introjs-tooltipbuttons').append("<a class='introjs-button "+
										"introjs-duplicate-nextbutton'>Next &#8594;</a>");
								$(".introjs-duplicate-nextbutton").click(function() {
									$('.introjs-tooltip').removeClass('hide');
									$(".introjs-duplicate-nextbutton").remove();
									TweenMax.to($("#xCupValue"), 1, {rotationX : -90, onComplete:function() {
										$("#xCupValue").text(parseInt($("#xCupValue").text()) - 1);
										TweenMax.to($("#xCupValue"), 1, {rotationX : 0, onComplete:function() {
											text = 'Finally, the value of <span class="ct-code-b-yellow">x</span>'+
													' becomes <span class="ct-code-b-yellow">'+ 
													$("#xCupValue").text() +'</span>.';
											typing('#appendSpan', text, typingInterval, 'white', function() {
												$(".introjs-nextbutton, .introjs-prevbutton").show();
											});
										}});
									}});
								});
							});
						}});
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

function postdecrementOperatorAnimation() {
	$(".introjs-duplicate-nextbutton").remove();
	$('.introjs-tooltip').removeClass('hide');
	text = 'First, the value <span class="ct-code-b-yellow">'+ $("#xvalue").text() +'</span>'+
			' which is in the variable <span class="ct-code-b-yellow">x</span> is '+
			'assigned to the variable of '+
			'<span class="ct-code-b-yellow">y</span>.';
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
			$(".introjs-prevbutton").hide()
			$('.introjs-tooltip').removeClass('hide');
			$(".introjs-duplicate-nextbutton").remove();
			$("#yCupValue").text($("#xCupValue").text());
			$(".y-cup").addClass("blinking");
			$("#yCupValue").addClass("z-index100000000").removeClass("visibility-hidden");
			fromEffectWithTweenMax('#xCupValue', '#yCupValue', function() {
				$(".y-cup").removeClass("blinking");
				$("#yCupValue").removeClass("z-index100000000");
				$('.introjs-tooltip').removeClass('hide');
				text = 'Later the value <span class="ct-code-b-yellow">'+ $("#xvalue").text() +'</span>'+
						' contained in <span class="ct-code-b-yellow">x</span> is '+
						'<span class="ct-code-b-yellow">decremented</span>'+
						' by <span class="ct-code-b-yellow">1</span>.<br/><span id="appendSpan"></span>';
				typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
					$(".introjs-duplicate-nextbutton").click(function() {
						$(".introjs-prevbutton").hide()
						$('.introjs-tooltip').removeClass('hide');
						$(".introjs-duplicate-nextbutton").remove();
						TweenMax.to($("#xCupValue"), 1, {rotationX : -90, onComplete:function() {
							$("#xCupValue").text(parseInt($("#xCupValue").text()) - 1);
							if ($("#xCupValue").text().length == 3) {
								 $("#xCupValue").css({"left": 52});
							}
							TweenMax.to($("#xCupValue"), 1, {rotationX : 0, onComplete:function() {
								text = 'Finally, the value of <span class="ct-code-b-yellow">x</span>'+
										' becomes <span class="ct-code-b-yellow">'+ 
										$("#xCupValue").text() +'</span>.';
								typing('#appendSpan', text, typingInterval, 'white', function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							}});
						}});
					});
				});
			});
		});
	});
}
		
function xValueAssignedToVariabley() {
	$('.animation-div2').css({"opacity":1})
	$('.introjs-prevbutton').hide();
	$(".introjs-duplicate-nextbutton").remove();
	$('.introjs-tooltip').removeClass('hide');
	text = 'Let us see how the <span class="ct-code-b-yellow">y = x--</span> operation occurs in detail: <br/>'+
			'<br/><span id="appendSpan"></span>';
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {	
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
			$('.introjs-prevbutton').hide();
			$(".introjs-duplicate-nextbutton").remove();
			TweenMax.to('.animation-div2', 1, {opacity: 1, onComplete: function() {
				$(".animation-div2").effect( "highlight",{color: 'yellow'});
				$('.introjs-tooltip').removeClass('hide');
				text = 'First, the <span class="ct-code-b-yellow">x</span> value will be assigned to the '+
						'variable <span class="ct-code-b-yellow">y</span>.<br/><br/><span id="appendSpan1"></span>';
				typing('#appendSpan', text, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
					"onclick=xValuedecrementByOne()>Next &#8594;</a>");
				});
			}});
		});
	});
}

function xValuedecrementByOne() {
	$('.animation-div3').css({"opacity":1})
	$('.introjs-prevbutton').hide();
	$(".introjs-duplicate-nextbutton").remove();
	TweenMax.to('.animation-div3', 1, {opacity: 1, onComplete: function() {
		$(".animation-div3").effect( "highlight",{color: 'yellow'});
		$('.introjs-tooltip').removeClass('hide');
		text = 'Later the value of <span class="ct-code-b-yellow">x</span> will be '+
				'<span class="ct-code-b-yellow">decremented</span> by <span class="ct-code-b-yellow">1</span>.';
		typing('#appendSpan1', text, typingInterval, 'white', function(){
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	}});
}

function svgBoxAnimation(index, callBackFunction) {
	$('.svg-line').eq(index).show();
	TweenMax.to($('.svg-line').eq(index), 0.5, {attr: {y2: '20%'}, onComplete: function() {
		TweenMax.to($('.svg-text').eq(index), 0.5, {fill: '#333', onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function svgLineBack(index, callBackFunction) {
	$('.svg-line').eq(index).show();
	TweenMax.to($('.svg-line').eq(index), 0.5, {attr: {y2: '40%'}, onComplete: function() {
		TweenMax.to($('.svg-text').eq(index), 0.5, {fill: 'white', onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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
	}});
}

function caretAtEnd(element) {
	var element = document.getElementById(element);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
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
		introcode._introItems[introcode._currentStep].intro = $(".introjs-tooltiptext").html();
	});
} 

function changeValue() {
	$("[contenteditable=true]").on("keydown", function(e) {
		$('.length-error-text').remove();
		var max = $(this).attr("maxlength");
		//backspace[8], tab[9], escape[27], leftArrow[37], rightArrow[39], delete[46], enter[13]
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>String length to 2.</span>");
			e.preventDefault();
		}
	});
	
	$("[contenteditable=true]").on("keyup", function(e) {
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>Please enter number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introcode.refresh();
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
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
	}});
}