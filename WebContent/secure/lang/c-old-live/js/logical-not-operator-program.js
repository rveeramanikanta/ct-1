var introcode;
var typingInterval = 1;
var tl = new TimelineLite();
var sopLineCount = 1;

var logicalNotOperatorProgramReady = function() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
						element :'#logicalNotDefinition',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#codeDiv',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#VariableDeclararion1',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#numberDiv1',
						intro :'',
						position: "left",
						tooltipClass : "hide"
					},{
						element :'#VariableDeclararion2',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#numberDiv2',
						intro :'',
						position: "left",
						tooltipClass : "hide"
					},{
						element :'#statusCondition',
						intro :'',
						tooltipClass : "hide"
					},{
						element :'#sopLine1',
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
						element : "#restartBtn",
						intro : "Click to Restart",
						tooltipClass: "introjs-tooltip-min-width-custom",
						position : "right"
					}]
	});
	introcode.onafterchange(function(targetElement) {
	var elementId = targetElement.id;
		switch (elementId) {
			case "logicalNotDefinition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				text = $('#logicalnotDefinition').removeClass("visibility-hidden").html();
				typing('#logicalnotDefinition', text, typingInterval, 'white', function(){
					$('#logicalnotDefinition').append("<br><a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
					$(".introjs-duplicate-nextbutton").click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						text = $('#example').removeClass("visibility-hidden").html();
						typing('#example', text, typingInterval, 'white', function(){
							TweenMax.to('#logicalNotTable', 1, {opacity: 1, onComplete: function() {
								$('.introjs-tooltip').removeClass('hide');
								text = 'If <span class="ct-code-b-yellow">status</span> is '+
										'<span class="ct-code-b-yellow">True</span> the'+
										'<span class="ct-code-b-yellow"> Logical NOT</span> operator is <span class="ct-code-b-yellow">False</span>.';
								typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
									$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>" + 
										"Next &#8594;</a>");
									$(".introjs-duplicate-nextbutton").click(function() {
										$('.introjs-tooltip').addClass('hide');
										$(".introjs-duplicate-nextbutton").remove();
										TweenMax.to('#trueValue, #falseValue', 1, {opacity: 1, onComplete: function() {
											$('.introjs-tooltip').removeClass('hide');
											text = 'If <span class="ct-code-b-yellow">status</span> is '+
													'<span class="ct-code-b-yellow">False</span> the'+
													'<span class="ct-code-b-yellow"> Logical NOT</span>'+
													' operator is <span class="ct-code-b-yellow">True</span>.';
											typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
												$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>" + 
												"Next &#8594;</a>");
											$(".introjs-duplicate-nextbutton").click(function() {
												$('.introjs-tooltip').addClass('hide');
												$(".introjs-duplicate-nextbutton").remove();
												TweenMax.to('#trueValue1, #falseValue1', 1, {opacity: 1, onComplete: function() {
													$('#nextBtn').append("<a class='introjs-button introjs-duplicate-nextbutton'>" + 
													"Next &#8594;</a>");
													$(".introjs-duplicate-nextbutton").click(function() {
														$(".introjs-duplicate-nextbutton").remove();
														introcode.nextStep();
													});
												}});
												});
											});
										}});
									});
								});
							}});
						});
					});
				});
			break;
			case "codeDiv"  :
				$(".introjs-duplicate-nextbutton").remove();
				$("#logicalNotDefinition").addClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						introcode.nextStep();
					},1000);
				});
			break;
			case "VariableDeclararion" + sopLineCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('[contenteditable="false"]').attr('contenteditable', 'true');
					$('.introjs-tooltip').removeClass('hide');
					text = 'You can also change the value.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
						caretAtEnd(document.getElementById('number' + sopLineCount));
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "numberDiv" + sopLineCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					if(introcode._currentStep == 3 || introcode._currentStep == 5) {
					$("#value" + sopLineCount).text($("#number" + sopLineCount).text());
					TweenMax.to('#numberDiv' + sopLineCount, 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						text = '<span class="ct-code-b-yellow">'+ $("#number" + sopLineCount).text()+'</span>'+
								' stored in <span class="ct-code-b-yellow">' + $("#address" + sopLineCount).text() + '</span>.';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
							$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
							sopLineCount++;
							$('.introjs-nextbutton').show();
						});
					}});
					} 
				});
			break;
			case "statusCondition"  :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var num1 = parseInt($("#number1").text());
					var num2 = parseInt($("#number2").text());
					$('.introjs-tooltip').removeClass('hide');
					$(".introjs-tooltiptext").append('<span id = "logicforNotOperator" class = "ct-code-b-yellow position">'+
							'! (<span id = "equal" class = "position"> <span id = "avalue" class = "position">aValue</span>'+
							' == <span id = "bvalue" class = "position">bValue</span> </span>)'+
							'</span> <br><span id = "appendText"></span>');
					setTimeout(function(){
						TweenMax.to($("#avalue"), 0.5, {rotationX : -90, onComplete:function() {
							$("#avalue").text(num1);
							TweenMax.to($("#avalue"), 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to($("#bvalue"), 0.5, {rotationX : -90, onComplete:function() {
									$("#bvalue").text(num2);
									TweenMax.to($("#bvalue"), 0.5, {rotationX : 0, onComplete:function() {
										TweenMax.to($("#equal"), 0.5, {rotationX : -90, onComplete:function() {
											$("#equal").text(num1 == num2);
											TweenMax.to($("#equal"), 0.5, {rotationX : 0, onComplete:function() {
												sopLineCount = 1;
												logicalNotOperatorAnimation(num1, num2);
											}});
										}});
									}});
								}});
							}});
						}});
					},1000);
					
				});
			break;
			case "sopLine1" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					sopLineCount++;
					setTimeout(function() {
						introcode.goToStep(10);
					},800);	
				});
			break;
			case "sopLine2":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						introcode.nextStep();
					},800);
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var num1 = parseInt($("#number1").text());
					var num2 = parseInt($("#number2").text());
					if (!(num1 == num2)) {
						$(".output").append('<span class = "ct-code-b-yellow">'+ num1 +'</span> and '+
								'<span class = "ct-code-b-yellow">'+ num2 +'</span> are not equal');
						setTimeout(function() {
							sopLineCount++;
							introcode.nextStep();
						},1000);
					} else {
						$(".output").append('<span class = "ct-code-b-yellow">'+ num1 +'</span> and '+
								'<span class = "ct-code-b-yellow">'+ num2 +'</span> are equal');
						setTimeout(function() {
							sopLineCount++;
							introcode.nextStep();
						},1000);
					}
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

function logicalNotOperatorAnimation(num1, num2) {
	text = '<span class="ct-code-b-yellow">'+ num1 +'</span> == '+
	' <span class="ct-code-b-yellow">' + num2 + '</span> is return <span class="ct-code-b-yellow">'+
	(num1 == num2) +'</span>. But in <span class="ct-code-b-yellow">Logical Not</span>'+
	' Operator (<span class="ct-code-b-yellow">!</span>) takes its '+
	' inverse logic state i.e. (<span class="ct-code-b-yellow">'+ !(num1 == num2)+'</span>).'+
	'<br><span id = "appendtext"></span>';
typing('#appendText', text, typingInterval, 'white', function(){
	$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>" + 
	"Next &#8594;</a>");
	$(".introjs-duplicate-nextbutton").click(function() {
		$(".introjs-duplicate-nextbutton").remove();
		TweenMax.to($("#logicforNotOperator"), 0.5, {rotationX : -90, onComplete:function() {
			$("#logicforNotOperator").text(!(num1 == num2));
			TweenMax.to($("#logicforNotOperator"), 0.5, {rotationX : 0, onComplete:function() {
				text = 'The Condition evaluated to <span class="ct-code-b-yellow">'+ 
				!(num1 == num2) +'</span>, so <span class="ct-code-b-yellow">' + !(num1 == num2) +'</span>'+
				' block will be executed. </span>.';
			typing('#appendtext', text, typingInterval, 'white', function(){
				$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>" + 
				"Next &#8594;</a>");
				$(".introjs-duplicate-nextbutton").click(function() {
					$('.introjs-tooltip').addClass('hide');
					$(".introjs-duplicate-nextbutton").remove();
					if (!(num1 == num2)) {
						introcode.goToStep(8);
					} else {
						introcode.goToStep(9);
					}
				});
			});
			}});
		}});
	});
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