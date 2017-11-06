var t1;

var usageOfIfElseReady = function() {

	t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		location.reload();
	});
	
	$("#inputChar").keyup(function() {
		console.log("hello");
		if ($("#inputChar").val().length < 1) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
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
					element :'#informationdiv',
					intro :'',
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
					position:"bottom"
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
					position:"bottom"
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
					position:"bottom"
				}]
	});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "preBody" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#preBody").removeClass("visibility-hidden");
					typing(".introjs-tooltiptext", "Above program explains us <span class='ct-code-b-yellow'> #if #else</span> directive.", 10, "",function() {
						$('.introjs-nextbutton').show();
					});
				});
				
			} else if(intro._currentStep == 12) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#line2").remove();
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				});
			}
			break;
			
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>#include&lt;stdio.h&gt;</span> is a header file which contains standard <span class='ct-code-b-yellow'>input/output</span> library functions.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here, MAX is defined with the value <span class='ct-code-b-yellow'>10</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 4) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#idDefId").effect("highlight", {color: '#008000'}, 1000, function() {
						$("#maxValue").effect("highlight",{color: '#008000'}, 1000, function() {
							typing(".introjs-tooltiptext", "<ul><li>This preprocessor command(<span class='ct-code-b-yellow'>#ifdef</span>) returns <span class='ct-code-b-yellow'>true</span> because <span class='ct-code-b-yellow'>MAX</span> value is already defined in the previous step.</li><li>Here, <span class='ct-code-b-yellow'>true</span> part will be executed and <span class='ct-code-b-red'>false</span> will omitted.</li></ul>", 10, "",function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				
			} else if (intro._currentStep == 14) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "Here, <span class='ct-code-b-yellow'>MAX</span> is not defined, So it returns <span class='ct-code-b-yellow'>false</span>. because of this <span class='ct-code-b-yellow'>else</span> part will be executed. In this case it does not execute <span class='ct-code-b-red'>true</span> part.", 10, "",function() {
						$("#printMaxValue").text("MAX");
						$("#printMinValue").text("MIN");
						$('.introjs-nextbutton').show();
					});
				});
			}
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "In true part we have only one preprocessor command, i.e; <span class='ct-code-b-yellow'>MIN</span> which is defined with the value <span class='ct-code-b-yellow'>20</span>.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 6) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "This is end of the <span class='ct-code-b-yellow'>#if</span> preprocessor command.", 10, "",function() {
						$('.introjs-nextbutton').show();
					});
				});
				
			} else if (intro._currentStep == 16) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing(".introjs-tooltiptext", "This is end of the <span class='ct-code-b-yellow'>#if</span> preprocessor command.", 10, "",function() {
						$('.introjs-nextbutton').show();
					});
				});
			}
			break;
			
		case "line9" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<ul><li><span class='ct-code-b-yellow'>main()</span> is the operating system call.</li><li><span class='ct-code-b-yellow'>main()</span> is the execution starting point for a C program.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line10" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>printf()</span> is a library function. It prints the message which is in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "totalElse" :
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer ').one('transitionend', function() {
			typing(".introjs-tooltiptext", "In the else part we have two preprocessor commands. The <span class='ct-code-b-yellow'>MAX</span> value is defined with value <span class='ct-code-b-yellow'>100</span> and <span class='ct-code-b-yellow'>MIN</span> is defined with value <span class='ct-code-b-yellow'>200</span>.", 10, "",function() {
				$('.introjs-nextbutton').show();
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
					
				typing(".introjs-tooltiptext", "main() is the operating system call.<ul><li>main is execution starting point for any c programs</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "printMaxValue" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 7) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#printMaxValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printMaxValue").text("10");
					}});
					
					t1.to("#printMaxValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						intro.nextStep();
					}});
				});
				
			} else if (intro._currentStep == 17) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#printMaxValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printMaxValue").text("100");
					}});
					
					t1.to("#printMaxValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						intro.nextStep();
					}});
				});
			}
			break;
		
		case "printMinValue" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 8) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#printMinValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printMinValue").text("20");
					}});
					
					t1.to("#printMinValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						intro.nextStep();
					}});
				});
			} else if (intro._currentStep == 18) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					t1.to("#printMinValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#printMinValue").text("200");
					}});
					
					t1.to("#printMinValue", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						intro.nextStep();
					}});
				});
			}
			break;
		
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 11) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#consoleId").removeClass("opacity00");
					typing("#typeChar", "max and min values are: <span class='ct-code-b-green'>10</span>, <span class='ct-code-b-green'>20</span>.", 10, "",function() {
						setTimeout(function() {
							intro.nextStep();	
						}, 1000);
					});
				});
			} else if(intro._currentStep == 21) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar1", "max and min values are: <span class='ct-code-b-green'>100</span>, <span class='ct-code-b-green'>200</span>.", 10, "",function() {
						setTimeout(function() {
							intro.nextStep();	
						}, 1000);
					});
				});
			}
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					
				});
			});
			break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	
	$("#informationdiv").removeClass("opacity00");
	typing("#defination", "<ol><li id='list1'>Here <span class='ct-code-b-green'>#</span> referes preprocessor, It processes the code before it passes through the compiler.</li>" +
		"<li id='list2'>We can use these directives(<span class='ct-code-b-green'>#if</span> and <span class='ct-code-b-green'>#else</span>) when compiling a portion of the program conditionally.</li>" + 
		"<li>The format of <span class='ct-code-b-green'>#if</span> and <span class='ct-code-b-green'>#else</span> is :</li></ol>", 10, "", function() {
		typing("#format", "<span class='text-center'>#if condition</br><span style='margin-left: 10px;'>//  <span class='ct-code-b-green'>true</span> part</span></br> #else</br><span style='margin-left: 10px;'>//  <span class='ct-code-b-red'>false</span> part</span></br>#endif</span>", 10, "", function() {
			$("#informationdiv").addClass('z-index9999999');
			typing(".introjs-tooltiptext", "Let us learn execution of sample program on <span class='ct-code-b-yellow'>#if #else</span> in next step.", 10, "",function() {
				$('.introjs-nextbutton').show();
			});
		})	
	});
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
	});
}