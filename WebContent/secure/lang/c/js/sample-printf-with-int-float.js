var num = '20+30';
var sum = 50;
var per = '%d';
var count = 0;
var z = 0;
var input;
var lenOfInput;

var samplePrintfWithIntFloatReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [
					{
						element : '#startBtn',
						intro : "",
						position : "right"
					},
					{
						element : '#mainDiv',
						intro : '',
						position : "bottom",
						tooltipClass: 'hide'
					},		
					{
						element : '#line1',
						intro : "",
						position : "top",
						tooltipClass: 'hide'
					},
					{
						element : '#line2',
						intro : "",
						position : "top",
						tooltipClass: 'hide'
					},
					{
						element : '#line3',
						intro : '',
						position : "bottom",
						tooltipClass: 'hide'
					},
					
					{
						element : '#outputDiv',
						intro : "",
						position : "left",
						tooltipClass: 'hide'
					},
					{
						element : '#line4',
						intro : '',
						position : "bottom"
					},
					
					{
						element : '#outputDiv',
						intro : "",
						position : "left",
						tooltipClass: 'hide'
					},
					
					{
						element : '#line5',
						intro : '',
						position : "bottom"
					},
					
					{
						element : '#outputDiv',
						intro : "",
						position : "left",
						tooltipClass: 'hide'
					},
					
					{
						element : '#line7',
						intro : '',
						position : "bottom"
					},
					
					{
						element : '#outputDiv',
						intro : "",
						position : "left",
						tooltipClass: 'hide'
					},
				
					{
						element : '#line6',
						intro : "This is the end of the <span class = 'color-yellow'><b>main()</b></span> where the program execution ends.",
						position : "bottom"
					}, 
					{
						element : '#reStartBtn',
						intro : "Click to restart.",
						position : "right",
					}]
	});
		
intro.onafterchange(function(targetElement) { 
	var elementId = targetElement.id;
	switch (elementId) {
	case "startBtn" :
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$("#preBody").removeClass("hidden");
		});
	break;
	case "mainDiv" :
		$('.introjs-nextbutton').hide();
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$('.introjs-tooltip').removeClass("hide");
			text = "Let us consider a sample code which uses <span class = 'color-yellow'>printf()</span> and <span class = 'color-yellow'>format characters</b>."	
			typing('.introjs-tooltiptext', text, function() {
				$('.introjs-nextbutton').show();
			});
		});
	break; 
	case "line1" :
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$('.introjs-tooltip').removeClass("hide");
			typing('.introjs-tooltiptext',"It is a <span class = 'color-yellow'>preprocessor directive</span> which includes the <b>header file</b> <span class = 'color-yellow'>stdio.h</span> in our program." ,function() { 
				$('.introjs-nextbutton').show();
			});
		});
	break;
	case "line2" :
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$('.introjs-tooltip').removeClass("hide");
			typing('.introjs-tooltiptext',"This is the <span class = 'color-yellow'>main()</span> method where the program execution starts." ,function() { 
				$('.introjs-nextbutton').show();
			});
		});
	break;
	case "line3" :
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$('.introjs-tooltip').removeClass("hide");
			text = '<ul><li><span class = "color-yellow">printf()</span> prints the text message onto the console.</li><span id = "typing2"></span>'  
			typing(".introjs-tooltiptext",text,function() { 
				$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn1' onclick = 'myfunction()'>Next&#8594;</a>");
			});
		});
	break;
	
	case "nextline" :
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			text = '<span class = "color-yellow">\\n</span> is an escape character used in <span class = "color-yellow">printf()</span> to print the message onto the next line.'  
    		typing(".introjs-tooltiptext",text,function() { 
				$('.introjs-nextbutton').show();
    		});
		});
	break;
	case "nextline1" :
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			text = '<span class = "color-yellow">\\n</span> is an escape character used in <span class = "color-yellow">printf()</span> to print the message onto the next line.'  
    		typing(".introjs-tooltiptext",text,function() { 
				$('.introjs-nextbutton').show();
    		});
		});
	break;
	
	case "line7" :
		$('#newline').css({'opacity':'1'});
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			text = 'The above three messages in different printf() statements can be written in a single <span class = "color-yellow">printf()</span> statement.'  
    		typing(".introjs-tooltiptext",text,function() { 
				$('.introjs-nextbutton').show();
    		});
		});
	break;
	case "line6" :
		$('.introjs-tooltip').css('min-width','180px');
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$("#reStartBtn").removeClass("hidden").addClass("opacity00");
			setTimeout(function () {
				 $('.introjs-nextbutton').show();
			}, 1000);
		});
	break;
	case "outputDiv" :
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
	$('.introjs-helperLayer').one('transitionend', function() {
		 if (intro._currentStep == 5) {
			 $(".introjs-tooltiptext").append('<span id = typing1 class = "opacity00 position">printf</b>("<span id = "print1" class = "position">Sum of two integers = <span id = "per1" class = "position">%d</span></span>\\n",<span id = "args1" class = "positionblock color-yellow">(20+30)</span>);</span></span>')  
			 $("#line3").effect( "highlight",{color: 'red'}, 800,function() {
				 $('.introjs-tooltip').removeClass("hide");	
				 $('#typing1').removeClass('opacity00');
				 fromEffectWithTweenMax("#line3", "#typing1", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
					$('.animation-nextbtn').click(function() { 
						$('.animation-nextbtn').remove(); 
						$("#typing1").append('<br><span id = typing2 class = "opacity00 position">Sum of two integers = <span id = "per2" class = "position color-yellow">%d</span></span>')
						$("#print1").effect( "highlight",{color: 'red'}, 800,function() {
							$('#typing2').removeClass('opacity00');
							fromEffectWithTweenMax("#print1", "#typing2", function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
								$('.animation-nextbtn').click(function() { 
									$('.animation-nextbtn').remove(); 
									$("#args1").effect( "highlight",{color: 'red'}, 800,function() {
										$('#args1').text('50');
									 	TweenMax.fromTo("#args1",1,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
											$('.animation-nextbtn').click(function() { 
												$('.animation-nextbtn').remove(); 
												$("#args1").effect( "highlight",{color: 'red'}, 800,function() {
												var l1 = $('#args1').offset();
												var l2 = $('#per2').offset();
												var topLength = l2.top - l1.top;
												var leftLength = l2.left - l1.left;
												$("body").append('<span id ="dupargs1" class = "color-yellow" style="position: relative; z-index: 10000000;"></span>');
												
												$('#dupargs1').text('50').offset({
													"top" : l1.top,
													"left" : l1.left
												});
												TweenLite.to($('#args1'), 1.3, { ease:  Bounce.easeOut, top:topLength, left :leftLength, delay :.5});
												TweenLite.to($('#per2'), 1.5, { ease: Sine.easeOut, left:-30 , top:25, delay : 1, opacity:0 , onComplete: function() {
													$('#args1, #per2').removeAttr("style").text("50");
													$('#dupargs1').remove();
													$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
													$('.animation-nextbtn').click(function() { 
														$('.animation-nextbtn').remove(); 
														$("#typing2").effect( "highlight",{color: 'red'}, 800,function() {
															$("#outputAValue1").text("Sum of two integers = 50");
											 				fromEffectWithTweenMax("#typing2", "#outputAValue1", function() {
											 					$('.introjs-nextbutton').show();
											 				});
														}); 
													});
												}});
											 }); 
										 });
									 }});
						 			});
								});
				  			});
						});
					});
				});
			});
		 } else if ( intro._currentStep == 7) {
			 $(".introjs-tooltiptext").append('<span id = typing1 class = "opacity00 position">printf</b>("<span id = "print1" class = "position">Product of two float values = <span id = "per1" class = "position">%f</span></span>\\n",<span id = "args1" class = "positionblock color-yellow">(12.6 * 2.5)</span>);</span></span>');  
			 $("#line4").effect( "highlight",{color: 'red'}, 800,function() {
				 $('.introjs-tooltip').removeClass("hide");	
				 $('#typing1').removeClass('opacity00');
				 fromEffectWithTweenMax("#line4", "#typing1", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
					$('.animation-nextbtn').click(function() { 
						$('.animation-nextbtn').remove(); 
						$("#typing1").append('<br><span id = typing2 class = "opacity00 position">Product of two float values = <span id = "per2" class = "position color-yellow">%f</span></span>')
						$("#print1").effect( "highlight",{color: 'red'}, 800,function() {
							$('#typing2').removeClass('opacity00');
								fromEffectWithTweenMax("#print1", "#typing2", function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove(); 
										$("#args1").effect( "highlight",{color: 'red'}, 800,function() {
											$('#args1').text('31.500000');
										 	TweenMax.fromTo("#args1",1,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
										 		$("#args1").effect( "highlight",{color: 'red'}, 800,function() {
													var l1 = $('#args1').offset();
													var l2 = $('#per2').offset();
													var topLength = l2.top - l1.top;
													var leftLength = l2.left - l1.left;
													
													$("body").append('<span id ="dupargs1" class = "color-yellow" style="position: relative; z-index: 10000000;"></span>');
													
													$('#dupargs1').text('31.500000').offset({
														"top" : l1.top,
														"left" : l1.left
													});
													TweenLite.to($('#args1'), 1.3, { ease:  Bounce.easeOut, top:topLength, left :leftLength, delay :.5});
													TweenLite.to($('#per2'), 1.5, { ease: Sine.easeOut, left:-30 , top:25, delay : 1, opacity:0 , onComplete: function() {
														$('#args1, #per2').removeAttr("style").text("31.500000");
														$('#dupargs1').remove();
														$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
														$('.animation-nextbtn').click(function() { 
															$('.animation-nextbtn').remove(); 	
															$("#typing2").effect( "highlight",{color: 'red'}, 800,function() {
															$("#outputAValue2").text("Product of two float values = 31.500000");
												 				fromEffectWithTweenMax("#typing2", "#outputAValue2", function() {
												 					$('.introjs-nextbutton').show();
												 				});
															}); 
														});
													}});
										 		});
										 	}});
							 			});
									});
								});
							});
			  			});
					});
				});
		 } else if (intro._currentStep == 9) {
			 $(".introjs-tooltiptext").append("<span id = typing1 class = 'opacity00 position'>printf</b>(\"<span id = 'print1' class = 'position'>The given character = <span id = 'per1' class = 'position'>%c</span></span>\\n\",<span id = 'args1' class = 'positionblock color-yellow'>\'A\'</span>);</span></span>")  
			 $("#line5").effect( "highlight",{color: 'red'}, 800,function() {
				 $('.introjs-tooltip').removeClass("hide");	
				 $('#typing1').removeClass('opacity00');
				 fromEffectWithTweenMax("#line5", "#typing1", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
					$('.animation-nextbtn').click(function() { 
						$('.animation-nextbtn').remove(); 
						$("#typing1").append('<br><span id = typing2 class = "opacity00 position">The given character = <span id = "per2" class = "position color-yellow">%c</span></span>')
						$("#print1").effect( "highlight",{color: 'red'}, 800,function() {
							$('#typing2').removeClass('opacity00');
							fromEffectWithTweenMax("#print1", "#typing2", function() {
								$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
								$('.animation-nextbtn').click(function() { 
									$('.animation-nextbtn').remove(); 
									$("#args1").effect( "highlight",{color: 'red'}, 800,function() {
										$('#args1').text('A');
									 	TweenMax.fromTo("#args1",1,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
									 		$("#args1").effect( "highlight",{color: 'red'}, 800,function() {
												var l1 = $('#args1').offset();
												var l2 = $('#per2').offset();
												var topLength = l2.top - l1.top;
												var leftLength = l2.left - l1.left;
												$("body").append('<span id ="dupargs1" class = "color-yellow" style="position: relative; z-index: 10000000;"></span>');
												
												$('#dupargs1').text('A').offset({
													"top" : l1.top,
													"left" : l1.left
												});
												TweenLite.to($('#args1'), 1.3, { ease:  Bounce.easeOut, top:topLength, left :leftLength, delay :.5});
												TweenLite.to($('#per2'), 1.5, { ease: Sine.easeOut, left:-30 , top:25, delay : 1, opacity:0 , onComplete: function() {
													$('#args1, #per2').removeAttr("style").text("A");
													$('#dupargs1').remove();
													$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
													$('.animation-nextbtn').click(function() { 
														$('.animation-nextbtn').remove(); 	
														$("#typing2").effect( "highlight",{color: 'red'}, 800,function() {
														$("#outputAValue3").text("The given character = A");
											 				fromEffectWithTweenMax("#typing2", "#outputAValue3", function() {
											 					$('.introjs-nextbutton').show();
											 				});
														}); 
													});
												}});
									 		});
							 			}});
									 });
									});
				  				});
							});
						});
					});
				 });
		 } else if (intro._currentStep == 11) {
			lastline();
		 }
	});
	break;
	case "line4" :
		$('.introjs-nextbutton').hide();
		$('#outputAValue1').removeClass('z-index9999999');
		$(".introjs-helperLayer").one("transitionend", function() {
			text = 'Here, the format character <span class = "color-yellow">%f</span> refers to a <span class = "color-yellow">float</span> value.'  
			typing(".introjs-tooltiptext",text,function() { 
            	$('.introjs-nextbutton').show();
			});
		});
	break;
	
	case "line5" :
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			text = 'Here, the format character <span class = "color-yellow">%c</span> refers to a <span class = "color-yellow">character</span> value.'  
			typing(".introjs-tooltiptext",text,function() { 
				$('.introjs-nextbutton').show();
			});
		});
	break;
			
	case "reStartBtn":
		$('.introjs-helperLayer').one('transitionend', function () {
			$('.introjs-nextbutton').hide();
			$("#reStartBtn").fadeTo(1300, 1);
			$("#reStartBtn").click(function() {
				location.reload();
			});
		});
	break;
	}
});

intro.start();
$('.introjs-skipbutton').hide();
$('.introjs-prevbutton').hide();
$('.introjs-nextbutton').hide();
$("#startBtn").click(function() {
	$("#mainDiv").removeClass('opacity00');
	$("#startBtn").addClass("hidden");
	$('.introjs-tooltip').css('min-width','360px');
		intro.nextStep();
	});
text = "Click to start."	
typing('.introjs-tooltiptext', text, function() {
	
});
}

function myfunction() {
	$('.nextBtn1').remove();
	text = '<li>In this example, the format character <span class = "color-yellow">%d</span> refers to an <span class = "color-yellow">integer</span> value.'  
	typing("#typing2",text,function() { 
		$("#outputDiv").removeClass('opacity00'); 
		$('.introjs-nextbutton').show();
	});
}

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : 10,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
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

function toEffectWithTweenMax(selector1, selector2, selector3, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset({top: l1.top, left: l1.left});
	TweenMax.to($(selector2), 0.5, {top: 22, left: selector3, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function lastline() {
	 $(".introjs-tooltiptext").append("<span id = typing1 class = 'opacity00 position'>printf</b>(\"<span id = 'print1' class = 'position'>Sum of two integers = %d</span><span id = next>\\n\</span>"
	     +"<span id = 'print2' class = 'position'>Product of the two float values = %f</span><span id = next>\\n\</span><span id = 'print3' class = 'position'>The given character = %c</span>\""
	     +",<span id = 'args1' class = 'positionblock color-yellow' style='white-space:nowrap;'>(20+30)</span>,<span id = 'args2' class = 'positionblock color-yellow' style='white-space:nowrap;'>(12.6*2.5)</span>,<span id = 'args3' class = 'positionblock color-yellow'>\'A\'</span>);</span></span>")  
	 $('.introjs-tooltip').removeClass("hide");	
	 $('#typing1').removeClass('opacity00');
	 fromEffectWithTweenMax("#line7", "#typing1", function() {
		$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
		$('.animation-nextbtn').click(function() { 
			$('.animation-nextbtn').remove(); 
			$("#typing1").append('<br><br><span id = typing2 class = "opacity00 position"><span id = typing3 class = "position">Sum of two integers = <span id = "per2" class = "position color-yellow">%d</span></span><span id = next>\\n</span>'
					+'<span id = typing4 class = "position">Product of two float values = <span id = "per3" class = "position color-yellow">%f</span><span id = next>\\n</span></span>'
					+'<span id = typing5 class = "position">The given character = <span id = "per4" class = "position color-yellow">%c</span></span></span>')
			$("#print1").effect( "highlight",{color: 'red'}, 800,function() {
				$('#typing2').removeClass('opacity00');
				fromEffectWithTweenMax("#print1", "#typing2", function() {
					$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
					$('.animation-nextbtn').click(function() { 
						$('.animation-nextbtn').remove(); 
						$("#args1").effect( "highlight",{color: 'red'}, 800,function() {
							$('#args1').text('50');
						 	TweenMax.fromTo("#args1",1,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
						 		$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
								$('.animation-nextbtn').click(function() { 
									$('.animation-nextbtn').remove(); 
									$("#args1").effect( "highlight",{color: 'red'}, 800,function() {
										var l1 = $('#args1').offset();
										var l2 = $('#per2').offset();
										var topLength = l2.top - l1.top;
										var leftLength = l2.left - l1.left;
										$("body").append('<span id ="dupargs1" class = "color-yellow" style="position: relative; z-index: 10000000;"></span>');
										$('#dupargs1').text('50').offset({
											"top" : l1.top,
											"left" : l1.left
										});
										TweenLite.to($('#args1'), 1.3, { ease:  Bounce.easeOut, top:topLength, left :leftLength, delay :.5});
										TweenLite.to($('#per2'), 1.5, { ease: Sine.easeOut, left:-30 , top:25, delay : 1, opacity:0 , onComplete: function() {
											$('#args1, #per2').removeAttr("style").text("50");
											$('#dupargs1').remove();
											$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn' onClick = 'newfunction()'>Next &#8594;</a>");
										}});
									 }); 
								 });
							 }});
					 	});
					});	
				}); 
			});
		 });
	 });
	}

function newfunction() {
	$('.animation-nextbtn').remove();
	$("#args2").effect( "highlight",{color: 'red'}, 800,function() {
		$('#args2').text('31.500000');
	 	TweenMax.fromTo("#args2",1,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
	 		$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function() { 
				$('.animation-nextbtn').remove(); 
				$("#args2").effect( "highlight",{color: 'red'}, 800,function() {
					var l1 = $('#args2').offset();
					var l2 = $('#per3').offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					
					$("body").append('<span id ="dupargs1" class = "color-yellow" style="position: relative; z-index: 10000000;"></span>');
					
					$('#dupargs1').text('31.500000').offset({
						"top" : l1.top,
						"left" : l1.left
					});
					TweenLite.to($('#args2'), 1.3, { ease:  Bounce.easeOut, top:topLength, left :leftLength, delay :.5});
					TweenLite.to($('#per3'), 1.5, { ease: Sine.easeOut, left:-30 , top:25, delay : 1, opacity:0 , onComplete: function() {
						$('#args2, #per3').removeAttr("style").text("31.500000");
						$('#dupargs1').remove();
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn' onClick = 'newfunction1()'>Next &#8594;</a>");
					}});
				 }); 
			 });
		 }});
 	});
}

function newfunction1() {
	console.log("in newfunction1");
	$('.animation-nextbtn').remove();
	$("#args3").effect( "highlight",{color: 'red'}, 800,function() {
		$('#args3').text('A');
	 	TweenMax.fromTo("#args3",1,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
	 		$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function() { 
				$('.animation-nextbtn').remove(); 
				$("#args3").effect( "highlight",{color: 'red'}, 800,function() {
					var l1 = $('#args3').offset();
					var l2 = $('#per4').offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					
					$("body").append('<span id ="dupargs1" class = "color-yellow" style="position: relative; z-index: 10000000;"></span>');
					
					$('#dupargs1').text('A').offset({
						"top" : l1.top,
						"left" : l1.left
					});
					TweenLite.to($('#args3'), 1.3, { ease:  Bounce.easeOut, top:topLength, left :leftLength, delay :.5});
					TweenLite.to($('#per4'), 1.5, { ease: Sine.easeOut, left:-30 , top:25, delay : 1, opacity:0 , onComplete: function() {
						$('#args3, #per4').removeAttr("style").text("A");
						$('#dupargs1').remove();
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn' onClick = 'newfunction2()'>Next &#8594;</a>");
					}});
				 }); 
			 });
		 }});
 	});
}

function newfunction2() {
	$('.animation-nextbtn').remove();
	$("#outputAValue4").text("Sum of integer values = 50");
	fromEffectWithTweenMax("#typing4", "#outputAValue4", function() {
		$("#outputAValue5").text("Product of two float values = 31.500000");
			fromEffectWithTweenMax("#typing3", "#outputAValue5", function() {
			$("#outputAValue6").text("The given character = A");
				fromEffectWithTweenMax("#typing4", "#outputAValue6", function() {
					$("#typing2").append('<div id = typing11></div>');
					text = 'The statements are printed in new lines because of <span class = "color-yellow">\\n</span>(which is a new line character).'  
			        typing("#typing11",text,function() { 
			        	$("#next").effect( "highlight",{color: 'red'}, 3000,function() {
						$('.introjs-nextbutton').show();
					});
		        });
			});
		});
	});
}