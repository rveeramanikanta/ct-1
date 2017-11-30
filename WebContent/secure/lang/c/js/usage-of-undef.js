var usageOfUnderfReady = function() {

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
					position:"bottom"
				},{
					element :'#line1',
					intro :'',
					position:"bottom"
				},{
					element :'#totalBackground',
					intro :'',
					position:"bottom"
				},{
					element :'#totalForeground',
					intro :'',
					position:"bottom"
				},{
					element :'#line2',
					intro :'',
					position:"left",
				    tooltiplass:"hide",
				},{
					element :'#printBackGroundId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line9',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#undefBackground',
					intro :'',
					position:"bottom"
				},{
					element :'#line3',
					intro :'',
					position:"left",
					tooltipClass:"hide"
				},{
					element :'#printForeGroundId',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line6',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#undefForeground',
					intro :'',
					position:"bottom"
				},{
					element :'#line4',
					intro :'',
					position:"left",
					tooltipClass:"hide"
				},{
					element :'#line5',
					intro :'',
					position:"bottom"
				},{
					element :'#consoleId',               
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line8',
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
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "titleName":
			$("#preBody").addClass("visibility-hidden");
			break;
		
		case "preBody" :
			if(intro._currentStep == 1) {
				$("#preBody").removeClass("visibility-hidden");
			} else if (intro._currentStep == 13) {
				
			}
			break;
			
		case "line1" :
			$("#totalBackground,#totalForeground").removeClass("ct-code-b-green");
			break;
			
		case "line2" :
			$("#printBackGroundId").text("BACKGROUND");
			$("#totalForeground").removeClass("ct-code-b-green");
			break;
			
		case "totalForeground" :
			$("#totalBackground").removeClass("ct-code-b-green");
			$("#totalForeground").addClass("ct-code-b-green");
			
			break;
			
		case "totalBackground" :
			$("#totalBackground").addClass("ct-code-b-green");
			break;
			
		case "line3" :
			$("#pr").remove();
			$("#printForeGroundId").text("FOREGROUND");
			break;
			
		case "line4" :
			$("#pr1").remove();
			break;
		case "line5" :
			$("#consoleId").addClass("opacity00");
			break;
		case "printBackGroundId" :
			$("#undefBackground").removeClass("ct-code-b-red");
			break;
			
		case "undefBackground" :
			$("#pr").remove();
			$('.opacity02').removeClass('opacity02');
			$("#undefBackground").addClass("ct-code-b-red");
			break;
			
		case "undefForeground" :
			$("#pr1").remove();
			$('#line7').removeClass('opacity02');
			$("#totalForeground").addClass("ct-code-b-green");
			$("#totalForeground").removeClass("ct-code-b-green");
			break;
		case "consoleId" :
			/*if (intro._currentStep == 15) {
				$("#consoleId").addClass("opacity00");
			}*/
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
			if(intro._currentStep == 1) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preBody").removeClass("visibility-hidden");
					typing(".introjs-tooltiptext", "Here is a program with the preprocessor directive <span class='ct-code-b-yellow'> #undef</span>.", 1, "",function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			} else if (intro._currentStep == 13) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preBody").removeClass("visibility-hidden");
					typing(".introjs-tooltiptext", "Here is a program with the preprocessor directive <span class='ct-code-b-yellow'> #undef</span>.", 1, "",function() {
					//	$(".blur").addClass("opacity02");
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			}
			break;
			
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>#include&lt;stdio.h&gt</span> is a header file which contains standard <span class='ct-code-b-yellow'>input/output</span> library functions.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			//$("#totalForeground").removeClass("ct-code-b-green");
			//$("#totalForeground").addClass("ct-code-b-green");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", "By using <span class='ct-code-b-yellow'>#define</span> directive we define a constant <span class='ct-code-b-yellow'>BACKGROUND</span> with its value <span class='ct-code-b-yellow'>8</span>. So whenever the compilation starts first all the occurrences of <span class='ct-code-b-yellow'>BACKGROUND</span> is replaced by <span class='ct-code-b-yellow'>8</span>.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "totalForeground" :
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$("#totalBackground").removeClass("ct-code-b-green");
			$("#totalForeground").addClass("ct-code-b-green");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#totalForeground").addClass("ct-code-b-green");
				typing(".introjs-tooltiptext", "Upto this part of the code the macro <span class='ct-code-b-yellow'>FOREGROUND</span> is available and executable.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "totalBackground" :
			$('.introjs-nextbutton').hide();
			intro.refresh();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#totalBackground").addClass("ct-code-b-green");
				typing(".introjs-tooltiptext", "Upto this part of the code the macro <span class='ct-code-b-yellow'>BACKGROUND</span> is available and executable.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			//$("#totalForeground").removeClass("ct-code-b-green");
			$("#line10").prepend("<span id = 'pr'>//&nbsp;</span>").addClass("opacity02");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", "By using <span class='ct-code-b-yellow'>#define</span> directive we define a constant <span class='ct-code-b-yellow'>FOREGROUND</span> with its value <span class='ct-code-b-yellow'>7</span>. So whenever the compilation starts first all the occurrences of <span class='ct-code-b-yellow'>FOREGROUND</span> is replaced by <span class='ct-code-b-yellow'>7</span>.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$("#line7").prepend("<span id = 'pr1'>//&nbsp;</span>").addClass("opacity02");
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>main()</span> is the operating system call.</li><li><span class='ct-code-b-yellow'>main()</span> is the execution starting point for a C program.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function, used to display the message specified with in double quotes on the output screen.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function. It prints the message which is in double quotes to the output screen.", 1, "",function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "printForeGroundId" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (intro._direction=="forward") {
					t1.to("#printForeGroundId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printForeGroundId").text("7");
						intro.refresh();
						t1.to("#printForeGroundId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
							setTimeout(function() {
								intro.nextStep()
							}, 500);
						}});
					}});
				} else {
					$("#printForeGroundId").text("FOREGROUND");
					intro.refresh();
					setTimeout(function() {
						intro.previousStep()
					}, 500);
				}
			});
			break;
		
		case "printBackGroundId" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				if (intro._direction=="forward") {
					t1.to("#printBackGroundId", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printBackGroundId").text("8");
						intro.refresh();
						t1.to("#printBackGroundId", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
							setTimeout(function() {
								intro.nextStep()
							}, 500);
						}});
					}});
				} else {
					$("#printBackGroundId").text("BACKGROUND");
					intro.refresh();
					setTimeout(function() {
						intro.previousStep();
					}, 500);
				}
			});
			break;
			
		case "line9" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "", 1, "",function() {
					setTimeout(function() {
						if (intro._direction=="forward") {
								intro.nextStep()
						} else {
							intro.previousStep()
						}
					}, 500);
				});
			});
			break;
			
		case "line6" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "", 1, "",function() {
					setTimeout(function() {
						if (intro._direction=="forward") {
								intro.nextStep()
						} else {
							intro.previousStep()
						}
					}, 500);
				});
			});
			break;
			
		case "undefBackground" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here, <span class='ct-code-b-red'>BACKGROUND</span> is not replaced with 8 because it is undefined already.", 1, "",function() {
					$("#undefBackground").addClass("ct-code-b-red");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
			
		case "undefForeground" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here <span class='ct-code-b-red'>FOREGROUND</span> is not replaced with 7 because it is undefined already.", 1, "",function() {
					$("#undefForeground").addClass("ct-code-b-red");
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 15) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					if (intro._direction=="forward") {
						typing("#typeChar", "foreground result is : <span class='ct-code-b-green1'>7</span>", 1, "",function() {
							setTimeout(function() {
								intro.nextStep()
							}, 500);
						});
					} else {
						$("#consoleId").addClass("opacity00");
						setTimeout(function() {
							intro.previousStep();
						}, 300);
					}
				});
			} else if(intro._currentStep == 17) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (intro._direction=="forward") {
						typing("#typeChar1", "background result is : <span class='ct-code-b-green1'>8</span>", 1, "",function() {
							setTimeout(function() {
							intro.nextStep()
							}, 500);
						});
					} else {
						setTimeout(function() {
						intro.previousStep()
						}, 300);
					}
				});
			}
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltip').css({'min-width':'125px'});
			$('.introjs-helperLayer ').one('transitionend', function() {
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
	
	typing(".introjs-tooltiptext", "Let us learn the execution process of a simple program by using <span class='ct-code-b-yellow'>#undef</span>.", 1, "",function() {
		$('.introjs-nextbutton').show();
	});


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
	
}