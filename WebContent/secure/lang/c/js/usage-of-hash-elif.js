var t1;

var usageOfHashElifReady = function() {

	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		location.reload();
	});
	
	$("#inputChar").keyup(function() {
		if ($("#inputChar").val().length < 1) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		}
	});
	
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps : [{
					element :'#titleName',
					intro :'',
					position:"right"
				},{
					element :'#preBody',
					intro :'',
					position:"left"
				},{
					element :'#line1',
					intro :'',
					position:"left"
				},{
					element :'#line2',
					intro :'',
					position:"left"
				},{
					element :'#line4',
					intro :'',
					position:"bottom"
				},{
					element :'#line6',
					intro :'',
					position:"bottom"
				},{
					element :'#line7',
					intro :'',
					position:"bottom"
				},{
					element :'#foregroundId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line8',
					intro :'',
					position:"bottom"
				},{
					element :'#line9',
					intro :'',
					position:"bottom"
				},{
					element :'#line10',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',              
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#defineValue',              
					intro :'',
					position:"bottom"
				},{
					element :'#line2',
					intro :'',
					position:"bottom"
				},{
					element :'#line3',
					intro :'',
					position:"bottom"
				},{
					element :'#foregroundId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line8',
					intro :'',
					position:"bottom"
				},{
					element :'#line9',
					intro :'',
					position:"bottom"
				},{
					element :'#line10',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',              
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#defineValue',              
					intro :'',
					position:"bottom"
				},{
					element :'#line2',
					intro :'',
					position:"bottom"
				},{
					element :'#line4',
					intro :'',
					position:"bottom"
				},{
					element :'#line5',
					intro :'',
					position:"bottom"
				},{
					element :'#foregroundId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line8',
					intro :'',
					position:"bottom"
				},{
					element :'#line9',
					intro :'',
					position:"bottom"
				},{
					element :'#line10',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',              
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#restartBtn',               
					intro :'',
					position:"right"
				}]
	});
	
	intro.onbeforechange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
        var elementId = targetElement.id;
		switch (elementId) {
		   case "titleName":
				$("#preBody").addClass("visibility-hidden");
			break;
		case "preBody" :
			$("#preBody").removeClass("visibility-hidden");
			break;
			
			
		case "line3" :
			$("#foregroundId").text("FOREGROUND");
			break;	
			
		case "line7" :
			$("#foregroundId").text("FOREGROUND");
			break;
			
		case "line10" :
			$("#consoleId").addClass("opacity00");
			break;
			
		case "foregroundId" :
			if(intro._currentStep == 24) {
				$("#foregroundId").text("FOREGROUND");
			}
			break;
		case 'defineValue':
			if (intro._currentStep == 12 && intro._direction == "forward") {
				$('#defineValue').removeClass('opacity00');
			} else if (intro._currentStep == 20 && intro._direction == "forward") {
				$("#defineValue").text("#define BACKGROUND 6");
			}
			$("#foregroundId").text("FOREGROUND");
		break;
		}
	});
	intro.onafterchange(function(targetElement) {
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
	// ********************** start ************back button logic
			
			if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
				intro._introItems[intro._currentStep]["animation"] = "repeat";
			}
			
			if (intro._introItems[intro._currentStep]["isCompleted"]) {
				if (intro._currentStep != 0) {
					$('.introjs-prevbutton').show();
				}
				$('.introjs-nextbutton').show();
				return;
			}
			
			if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
				intro._introItems[intro._currentStep]["isCompleted"] = true;
			}
			
			// ********************** end ************back button logic
			
		
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preBody").removeClass("visibility-hidden");
				typing(".introjs-tooltiptext", "Here is a sample code with <span class='ct-code-b-yellow'> #if #elif</span> preprocessor directives.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>#include&lt;stdio.h&gt;</span> is a header file which contains standard <span class='ct-code-b-yellow'>input/output</span> library functions.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 3) {
				$('.introjs-helperLayer').one('transitionend', function() {
					typing(".introjs-tooltiptext", "<ul><li>The preprocessor directive <span class='ct-code-b-yellow'>#if</span> checks whether the macro <span class='ct-code-b-yellow'>BACKGROUND</span> value is defined or not.</li>"+
														"<li>The macro <span class='ct-code-b-yellow'>BACKGROUND</span> value is not defined so it returns <span class='ct-code-b-red'>false</span>.</li>"+
														"<li>Because of this control enters into <span class='ct-code-b-yellow'>#elif</span>.</li></ul>", 1, "",function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			} else if(intro._currentStep == 13) {
				$('.introjs-helperLayer').one('transitionend', function() {
					typing(".introjs-tooltiptext", "The preprocessor directive <span class='ct-code-b-yellow'>#if</span> checks whether the macro <span class='ct-code-b-yellow'>BACKGROUND</span> value is defined or not.", 1, "",function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
				break;
			} else if(intro._currentStep == 21) {
				$('.introjs-helperLayer').one('transitionend', function() {
					typing(".introjs-tooltiptext", "The preprocessor directive <span class='ct-code-b-yellow'>#if</span> checks whether the macro <span class='ct-code-b-yellow'>BACKGROUND</span> value is defined or not.", 1, "",function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			}
				break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here the macro <span class='ct-code-b-yellow'>FOREGROUND</span> is defined with value <span class='ct-code-b-yellow'>0</span>.</li><li>After the declaration of above condition, <span class='ct-code-b-yellow'>FOREGROUND</span> is replaced with the given value <span class='ct-code-b-yellow'>0</span>.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;	
		
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The preprocessor directive <span class='ct-code-b-yellow'>#elif</span> checks whether the macro <span class='ct-code-b-yellow'>BACKGROUND</span> value  is defined or not.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>Here the macro <span class='ct-code-b-yellow'>FOREGROUND</span> is defined with value <span class='ct-code-b-yellow'>1</span>.</li><li>After the declaration of above condition, <span class='ct-code-b-yellow'>FOREGROUND</span> is replaced with the given value <span class='ct-code-b-yellow'>1</span>.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "The macro <span class='ct-code-b-yellow'>BACKGROUND</span> value is not defined before it is declared so it returns false.</br>Because of this control enters into <span class='ct-code-b-yellow'>#else</span>.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li>If the condition in <span class='ct-code-b-yellow'>#if</span> and <span class='ct-code-b-yellow'>#elif</span> fails, the control automatically enters into <span class='ct-code-b-yellow'>#else</span>, and compiles the statement which is in <span class='ct-code-b-yellow'>#else</span> condition.</li><li>Here, the macro <span class='ct-code-b-yellow'>FOREGROUND</span> is defined with the value <span class='ct-code-b-yellow'>6</span>.</li><li>After the declaration of above condition, <span class='ct-code-b-yellow'>FOREGROUND</span> will be replaced with the given value <span class='ct-code-b-yellow'>6</span>.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "This is end of the <span class='ct-code-b-yellow'>#if</span> preprocessor command.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line9" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>main()</span> is the operating system call.</li><li><span class='ct-code-b-yellow'>main()</span> is the execution starting point for a <span class='ct-code-b-yellow'>C</span> program.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line10" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function. It prints the message which is in double quotes to the output screen.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "foregroundId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 7) {
				$('.introjs-helperLayer').one('transitionend', function() {
					if (intro._direction=="forward") {
						t1.to("#foregroundId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#foregroundId").text("6");
						intro.refresh();
						t1.to("#foregroundId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
							setTimeout(function() {
								intro.nextStep()
							}, 500);
						}});
					}});
				} else {
					$("#foregroundId").text("FOREGROUND");
					intro.refresh();
					setTimeout(function() {
						intro.previousStep()
					}, 500);
				}
			});
			break;
				
			} else if(intro._currentStep == 15) {
				$('.introjs-helperLayer').one('transitionend', function() {
					if (intro._direction=="forward") {
						t1.to("#foregroundId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#foregroundId").text("0");
							intro.refresh();
							t1.to("#foregroundId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
								setTimeout(function() {
											intro.nextStep()
								}, 500);
							}});
						}});
					} else {
						$("#foregroundId").text("FOREGROUND");
						intro.refresh();
						setTimeout(function() {
							intro.previousStep()
						}, 500);
					}
				});
				break;
			} else if(intro._currentStep == 24) {
				$('.introjs-helperLayer').one('transitionend', function() {
					if (intro._direction=="forward") {
						t1.to("#foregroundId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#foregroundId").text("1");
							intro.refresh();
							t1.to("#foregroundId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
								setTimeout(function() {
										intro.nextStep()
								}, 500);
							}});
						}});
					} else {
						$("#foregroundId").text("FOREGROUND");
						intro.refresh();
						setTimeout(function() {
							intro.previousStep()
						}, 500);
					}
				});
			}
			break;
			
		case "defineValue" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 12) {
				$('.introjs-helperLayer').one('transitionend', function() {
					typing(".introjs-tooltiptext", "Now let us consider another example where <span class='ct-code-b-yellow'>BACKGROUND</span> is defined with value constant <span class='ct-code-b-yellow'>7</span>.", 1, "",function() {
						$("#defineValue").removeClass("opacity00");
						$("#foregroundId").text("FOREGROUND");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			} else if(intro._currentStep == 20) {
				$('.introjs-helperLayer').one('transitionend', function() {
					typing(".introjs-tooltiptext", "Now let us consider another example where <span class='ct-code-b-yellow'>BACKGROUND</span> is defined with value constant <span class='ct-code-b-yellow'>6</span>.", 1, "",function() {
						$("#defineValue").text("#define BACKGROUND 6");
						$("#foregroundId").text("FOREGROUND");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			}
		
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 11) {
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					if (intro._direction=="forward") {
						typing("#typeChar", "result is : <span class='ct-code-b-green'>6</span>", 1, "",function() {
							setTimeout(function() {
								intro.nextStep()
							}, 500);
						});
					} else {
						$("#foregroundId").text("6");
						$("#consoleId, #defineValue").addClass("opacity00");
						setTimeout(function() {
							intro.previousStep()
						}, 500);
					}
				});
				break;
			} else if(intro._currentStep == 19) {
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					if (intro._direction=="forward") {
						typing("#typeChar", "result is : <span class='ct-code-b-green'>0</span>", 1, "",function() {
							setTimeout(function() {
								intro.nextStep()
							}, 500);
						});
					} else {
						$("#foregroundId").text("0");
						$("#defineValue").text("#define BACKGROUND 7");
						setTimeout(function() {
							intro.previousStep()
						}, 500);
					}
				});
				break;
			} else if(intro._currentStep == 28) {
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					if (intro._direction=="forward") {
						typing("#typeChar", "result is : <span class='ct-code-b-green'>1</span>", 1, "",function() {
							setTimeout(function() {
									intro.nextStep()
							}, 500);
						});
					} else {
						$("#foregroundId").text("1");
						setTimeout(function() {
							intro.previousStep()
						}, 500);
					}
				});
				break;
			}
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltip').css({'min-width':'125px'});
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 1, "",function() {
					
				});
			});
			break;
			
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "Let us learn how <span class='ct-code-b-yellow'>#if</span> and <span class='ct-code-b-yellow'>#elif</span> are compiled and executed.", 1, "",function() {
		$('.introjs-nextbutton').show();
	});
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}