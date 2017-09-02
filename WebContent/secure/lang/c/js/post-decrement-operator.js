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
						tooltipClass : "hide"
					},{
						element :'#yVariableDeclararionLine',
						intro :'',
						tooltipClass : "hide",
						animateStep: "working"
					},{
						element :'#animationDiv1',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#xVariableDeclararionLine',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#xCup',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#yVariableDeclararionLine',
						intro :'',
						tooltipClass : "hide",
						animateStep: "example"
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
						tooltipClass : "hide"
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
						tooltipClass: "introjs-tooltip-min-width-custom",
						position : "right"
					}]
	});
	introcode.onafterchange(function(targetElement) {
	var elementId = targetElement.id;
		switch (elementId) {
			case "program" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-tooltip').removeClass('hide');
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
				$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
					case "working" :
						$('.introjs-tooltip').removeClass('hide');
						text = 'Here, <span class="ct-code-b-yellow">y</span> is assigned'+
								' a value with <span class="ct-code-b-yellow">x--</span>.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$('.introjs-nextbutton').show();
						});
					break;
					case "example" :
						$('.introjs-tooltip').removeClass('hide');
						text = 'Here, we are using a '+
								'<span class="ct-code-b-yellow">post-decrement</span> operator.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
							$('.introjs-nextbutton').show();
						});
					break;
					}
				});
			break;
			case "animationDiv1"  :
				introcode.refresh();
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
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "xCup":
				$("#xvalue").attr("contenteditable", "false");
				$("#xVariableDeclararionLine").addClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#xVariable").effect( "highlight",{color: '#ffff33'}, 500);
					$("#xVariable").effect( "transfer", { to: $("#xCup"), className: "ui-effects-transfer" }, 1000 , function(){
						$("#xCup").removeClass("visibility-hidden");
						$("#xCupValue").text($("#xvalue").text());
						$("#xCupValue").addClass("z-index100000000").removeClass("visibility-hidden");
						fromEffectWithTweenMax('#xvalue', '#xCupValue', function() {
						   $("#xCupValue").removeClass("z-index100000000");
						   $("#xVariableDeclararionLine").removeClass("z-index1000000");
						   setTimeout(function(){
							   introcode.nextStep();
						   },800);
						});
					});							
				});
			break;
			case "expressionStatement":
				$("#yVariableDeclararionLine").addClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#yVariable").effect( "highlight",{color: '#ffff33'}, 500);
					$("#yVariable").effect( "transfer", { to: $("#yCup"), className: "ui-effects-transfer" }, 1000 , function(){
						$("#yCup").removeClass("visibility-hidden");
							setTimeout(function() {
								$("#yVariableDeclararionLine").effect( "highlight",{color: '#ffff33'}, 500);
								$("#yVariableDeclararionLine").effect( "transfer", { to: $("#yvalueassignment"), className: "ui-effects-transfer" }, 1000 , function(){
									TweenMax.to('.animation-div5', 1, {opacity: 1, onComplete: function() {
										$("#yVariableDeclararionLine").removeClass("z-index1000000");
										postdecrementOperatorAnimation();
									}});
								});
						  },1000);
					});							
				});
			break;
			case "sopLine" + sopLineCount:
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function(){
						introcode.nextStep();
						sopLineCount++;
					},1000);
				});
				break;
			case "outputDiv":
				$("#xCup").removeClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introcode._currentStep == 8) {
						$(".output").append('<span> x value : '+ $("#xCupValue").text() + '</span><br>');
						setTimeout(function(){
							introcode.nextStep();
						},1000);
					} else if (introcode._currentStep == 10) {
						$(".output").append('<span> y value : '+ $("#yCupValue").text() + '</span>');
							setTimeout(function(){
								introcode.nextStep();
							},1000);
					} else {
						$(".output").append('<br><span> x value : '+ $("#xCupValue").text() + '</span>');
						setTimeout(function(){
							introcode.nextStep();
						},1000);
					}
					
				});
				break;
			case "singleStatement"  :
				$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">post-decrement</span> operator '+
							'can also be applied on a variable which can exist as a single statement'+
							' as shown here.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv5"  :
				$(".introjs-duplicate-nextbutton").remove();
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
												$(".introjs-nextbutton").show();
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
	$('.introjs-tooltip').removeClass('hide');
	text = 'First, the value <span class="ct-code-b-yellow">'+ $("#xvalue").text() +'</span>'+
			' which is in the variable <span class="ct-code-b-yellow">x</span> is '+
			'assigned to the variable of '+
			'<span class="ct-code-b-yellow">y</span>.';
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
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
									$(".introjs-nextbutton").show();
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
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	$('.introjs-tooltip').removeClass('hide');
	text = 'Let us see how the <span class="ct-code-b-yellow">y = x--</span> operation occurs in detail: <br/>'+
			'<br/><span id="appendSpan"></span>';
	typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {	
		$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
		$(".introjs-duplicate-nextbutton").click(function() {
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
	$(".introjs-duplicate-nextbutton").remove();
	TweenMax.to('.animation-div3', 1, {opacity: 1, onComplete: function() {
		$(".animation-div3").effect( "highlight",{color: 'yellow'});
		$('.introjs-tooltip').removeClass('hide');
		text = 'Later the value of <span class="ct-code-b-yellow">x</span> will be '+
				'<span class="ct-code-b-yellow">decremented</span> by <span class="ct-code-b-yellow">1</span>.';
		typing('#appendSpan1', text, typingInterval, 'white', function(){
			$('.introjs-nextbutton').show();
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
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
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