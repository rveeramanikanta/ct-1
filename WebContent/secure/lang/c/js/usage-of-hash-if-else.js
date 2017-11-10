var t1;

var usageOfHashIfElseReady = function() {

	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		location.reload();
	});
	
	$("#inputChar").keyup(function() {
		console.log("hello");
		if ($("#inputChar").val().length < 1) {
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
		} else {
			$('.introjs-nextbutton,.introjs-prevbutton').show();
		}
	});
	
	console.log();
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
					element :'#informationdiv',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#preBody',
					intro :'',
					position:"bottom"
				},{
					element :'#line1',
					intro :'',
					position:"bottom"
				},{
					element :'#line2',
					intro :'',
					position:"bottom"
				},{
					element :'#line3',
					intro :'',
					position:"bottom",
					tooltipClass:"hide",
				},{
					element :'#line4',
					intro :'',
					position:"bottom"
				},{
					element :'#line8',
					intro :'',
					position:"bottom"
				},{
					element :'#printMaxValue',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#printMinValue',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line9',
					intro :'',
					position:"bottom"
				},{
					element :'#line10',
					intro :'',
					position:"bottom",
					
				},{
					element :'#consoleId',               
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#preBody',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line1',
					intro :'',
					position:"bottom"
				},{
					element :'#line3',
					intro :'',
					tooltipClass:"hide",
					position:"bottom"
				},{
					element :'#totalElse',
					intro :'',
					position:"bottom"
				},{
					element :'#line8',
					intro :'',
					position:"bottom"
				},{
					element :'#printMaxValue',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#printMinValue',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#line9',
					intro :'',
					position:"bottom",
					//tooltipClass:"hide"
				},{
					element :'#line10',
					intro :'',
					position:"bottom",
					tooltipClass:"hide"
				},{
					element :'#consoleId',               
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#restartBtn',               
					intro :'',
					position:"bottom"
				}]
	});
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "informationdiv" :
			$("#informationdiv").addClass("opacity00");
			$("#defination, #format").empty();
			$("#preBody").addClass("visibility-hidden");
			break;
		
		case "preBody" :
			if (intro._currentStep == 2) {
				$("#preBody").removeClass("visibility-hidden");
				
			} else if(intro._currentStep == 13) {
				// $("#typeChar").addClass("hide");
			}
			break;	
		case "line8" :
		    $("#printMaxValue").text("MAX");
			$("#printMinValue").text("MIN");
			if (intro._currentStep == 7) {
			} else if (intro._currentStep == 17) {
			}
			break;
			
		case "line9" :
			
			break;
			
		case "line10" :
			 //$("#typeChar").addClass("hide");
			if (intro._currentStep == 11) {
				$('#printMaxValue').text('10');
				$('#printMinValue').text('20')
			}
			break;
			
		case "totalElse" :
		
		break;
			
		case "maxValue" :
			
			break;
			
		case "printMaxValue" :
		
			$("#printMaxValue").text("MAX");
			if (intro._currentStep == 8) {
			} else if (intro._currentStep == 18) {
			
			}
			break;
		
		case "printMinValue" :
			
			$("#printMinValue").text("MIN");
			if (intro._currentStep == 9) {
			} else if (intro._currentStep == 19) {
			}
			break;
		
		case "consoleId" :
		
			if (intro._currentStep == 12) {
			} else if(intro._currentStep == 22) {
				
			}
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
			if (intro._currentStep != 0 && intro._currentStep != 2) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "informationdiv" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#informationdiv").removeClass("opacity00");
				typing("#defination", "<ol><li id='list1'>Here <span class='ct-code-b-green'>#</span> referes preprocessor. It processes the source code program before it passes through the compiler.</li>" +
						"<li id='list2'>If there is a need to compile a portion of the program conditionally then we can use these directives.</li>" + 
						"<li>The format of <span class='ct-code-b-green'>#if</span> and <span class='ct-code-b-green'>#else</span> is :</li></ol>", 1, "", function() {
						typing("#format", "<span class='text-center'>#if condition</br><span style='margin-left: 10px;'>//  <span class='ct-code-b-green'>true</span> part</span></br> #else</br><span style='margin-left: 10px;'>//  <span class='ct-code-b-red'>false</span> part</span></br>#endif</span>", 1, "", function() {
							$("#informationdiv").addClass('z-index9999999');
							setTimeout(function() {
								if (intro._direction=="forward") {
										intro.nextStep()
								} else {
									intro.previousStep()
								}
							}, 500);
						})	
					});
				});
				
			break;
		
		case "preBody" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 2) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preBody").removeClass("visibility-hidden");
					typing(".introjs-tooltiptext", "Here is the program for<span class='ct-code-b-yellow'> #if #else</span>.", 1, "",function() {
						$('.introjs-nextbutton').show();
					});
				});
				
			} else if(intro._currentStep == 13) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#line2").remove();
					$("#typeChar").removeClass("hide");
					setTimeout(function() {
						if (intro._direction=="forward") {
								intro.nextStep()
						} else {
							intro.previousStep()
						}
					}, 500);
				
				});
			}
			break;
			
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				//$("#typeChar").removeClass("hide");
				typing(".introjs-tooltiptext", "It is a header file which contains standard <span class='ct-code-b-yellow'>input/output</span> library functions.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "MAX is defined with value <span class='ct-code-b-yellow'>10</span>.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 5) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#idDefId").effect("highlight", {color: '#008000'}, 1000, function() {
						$("#maxValue").effect("highlight",{color: '#008000'}, 1000, function() {
							$('.introjs-tooltip').removeClass("hide");
							typing(".introjs-tooltiptext", "MAX is defined with value <span class='ct-code-b-yellow'>10</span>. So it returns <span class='ct-code-b-yellow'>true</span>. then the true part will be executed. In this case it does not execute <span class='ct-code-b-red'>false</span> part.", 1, "",function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						});
					});
				});
				
			} else if (intro._currentStep == 15) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#printMaxValue").text("MAX");
					$("#printMinValue").text("MIN");
					$('.introjs-tooltip').removeClass("hide");
					typing(".introjs-tooltiptext", "here MAX is undefined. So it returns <span class='ct-code-b-yellow'>false</span>, then <span class='ct-code-b-yellow'>else</span> part will be executed. In this case it does not execute <span class='ct-code-b-red'>true</span> part.", 1, "",function() {
						$("#typeChar").removeClass("hide");
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			}
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "In true part we have only one preprocessor command, here <span class='ct-code-b-yellow'>MIN</span> is defined with value <span class='ct-code-b-yellow'>20</span>.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 7) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "this is end of the <span class='ct-code-b-yellow'>#if</span> preprocessor command.", 1, "",function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
				
			} else if (intro._currentStep == 17) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "this is end of the <span class='ct-code-b-yellow'>#if</span> preprocessor command.", 1, "",function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			}
			break;
			
		case "line9" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				//$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is the operating system call.<ul><li><span class='ct-code-b-yellow'>main()</span> is execution starting point for any c program.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line10" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#typeChar").removeClass("hide");
				$('.introjs-tooltip').removeClass("hide");
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function, used to display the message specified with in double quotes on the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "totalElse" :
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer ').one('transitionend', function() {
			typing(".introjs-tooltiptext", "In the else part we have two preprocessor commands. The MAX value is defined with value <span class='ct-code-b-yellow'>100</span> and MIN is defined with value <span class='ct-code-b-yellow'>200</span>.", 1, "",function() {
				$('.introjs-nextbutton,.introjs-prevbutton').show();
			});
		});
		break;
			
		case "maxValue" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				t1.to("#maxValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
					$("#maxValue").text("10");
				}});
				
				t1.to("#maxValue", 0.5, {opacity:1, rotationX: 0});
					
				typing(".introjs-tooltiptext", "main() is the operating system call.<ul><li>main is execution starting point for any c programs</li></ul>", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "printMaxValue" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 8) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#printMaxValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printMaxValue").text("10");
					}});
					
					t1.to("#printMaxValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						setTimeout(function() {
							if (intro._direction=="forward") {
									intro.nextStep()
							} else {
								intro.previousStep()
							}
						}, 500);
					
					}});
				});
				
			} else if (intro._currentStep == 18) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#printMaxValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printMaxValue").text("100");
					}});
					
					t1.to("#printMaxValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						setTimeout(function() {
							if (intro._direction=="forward") {
									intro.nextStep()
							} else {
								intro.previousStep()
							}
						}, 500);
					}});
				});
			}
			break;
		
		case "printMinValue" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 9) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#printMinValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printMinValue").text("20");
					}});
					
					t1.to("#printMinValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						
						setTimeout(function() {
							if (intro._direction=="forward") {
									intro.nextStep()
							} else {
								intro.previousStep()
							}
						}, 500);
					}});
				});
			} else if (intro._currentStep == 19) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#printMinValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printMinValue").text("200");
					}});
					
					t1.to("#printMinValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						setTimeout(function() {
							if (intro._direction=="forward") {
									intro.nextStep()
							} else {
								intro.previousStep()
							}
						}, 500);
					}});
				});
			}
			break;
		
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 12) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (intro._direction =="forward") {
					$("#consoleId").removeClass("opacity00");
					$("#typeChar").removeClass("hide");
					typing("#typeChar", "max and min values are: <y>10</y>, <y>20</y>.", 1, "",function() {
						setTimeout(function() {
									intro.nextStep()
						} , 500);
						});
					}   else {
						$("#consoleId").addClass("opacity00");
						$("#typeChar").addClass("hide");
								intro.previousStep()
							}
					});
				
			} else if(intro._currentStep == 22) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar1", "max and min values are: <y>100</y>, <y>200</y>.", 1, "",function() {
						setTimeout(function() {
							if (intro._direction=="forward") {
									intro.nextStep()
							} else {
								intro.previousStep()
							}
						}, 500);
					});
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
	
	typing(".introjs-tooltiptext", "Let us learn execution of sample program on <span class='ct-code-b-yellow'>#if #else</span>.", 1, "",function() {
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