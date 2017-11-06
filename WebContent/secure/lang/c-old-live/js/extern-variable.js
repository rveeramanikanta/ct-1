var introjs;
var index = 1;
var count = 1;

function externVariable() {
	initIntroJS();
	
	$('#restart').click(function() {
		location.reload();
	});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
		}
	});
}

function initIntroJS() {
	introjs= introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps :	[ {
			element :'#codeDiv',
			intro :'',
			position:"right",
		}, {
			element :'#globalDeclaration',
			intro :'',
			position:"right"
		}, {
			element :'#numberDiv1',
			intro :'',
			position:"right" 
		}, {
			element :'#funDeclaration',
			intro :'',
			position : "right"
		}, {
			element :'#variableDeclaration1',
			intro :'',
			position:"bottom" 
		}, {
			element :'#globalDeclaration',
			intro :'',
			position :"right",
			tooltipClass: "hide"
		}, {
			element :'#numberDiv1',
			tooltipClass :'hide'
		}, {
			element :'#sopLine1',
			tooltipClass :'hide'
		}, {
			element :'#outputDiv',
			tooltipClass :'hide'
		}, {
			element :'#sopLine2',
			tooltipClass :'hide'
		}, {
			element :'#percentage2',
			tooltipClass :'hide'
		}, {
			element :'#xValue2',
			tooltipClass :'hide'
		}, {
			element :'#functionDeclaration1',
			tooltipClass :'hide'
		}, {
			element :'#variableDeclaration2',
			intro :'',
			position:"right" 
		}, {
			element :'#globalDeclaration',
			intro :'',
			position :"right" 
		}, {
			element :'#numberDiv1',
			intro :'',
			position:"right",
			tooltipClass: 'hide'
		}, {
			element :'#return1',
			tooltipClass :'hide'
		}, {
			element :'#sopLine2',
			tooltipClass :'hide'
		}, {
			element :'#outputDiv',
			tooltipClass :'hide'
		}, {
			element :'#sopLine3',
			tooltipClass :'hide'
		}, {
			element :'#percentage3',
			tooltipClass :'hide'
		}, {
			element :'#xValue3',
			tooltipClass :'hide'
		}, {
			element :'#functionDeclaration2',
			tooltipClass :'hide'
		}, {
			element :'#variableDeclaration3',
			intro :'',
			position:"right" 
		}, {
			element :'#numberDiv4',
			intro :'',
			position:"right" 
		}, {
			element :'#initialize1',
			intro :'',
			position:"right" 
		}, {
			element :'#numberDiv4',
			tooltipClass:'hide'
		}, {
			element :'#return2',
			intro :'',
			position:"right", 
		}, {
			element :'#sopLine3',
			tooltipClass :'hide'
		}, {
			element :'#outputDiv',
			tooltipClass:'hide'
		}, {
			element : '#printDefinition',
			intro : '',
			position : "right",
			tooltipClass: 'hide'
		}, {
			element :'#codeDiv',
			intro :'',
			position:"right",
		}, {
			element :'#funDeclaration',
			intro :'',
			position:"right",
		}, {
			element :'#variableDeclaration1',
			intro :'',
			position:"right" 
		}, {
			element :'#openspace',
			tooltipClass:'hide'
		}, {
			element :'#openspace1',
			tooltipClass:'hide'
		}, {
			element :'#globalDeclaration1',
			intro :'',
			position:"right",
		}, {
			element :'#numberDiv1',
			intro :'',
			position:"right" 
		}, {
			element :'#variableDeclaration1',
			tooltipClass:'hide'
		}, {
			element :'#numberDiv1',
			intro :'',
			position : "right" 
		}, {
			element :'#sopLine1',
			intro :'',
			position:"right",
			tooltipClass :'hide'
		}, {
			element :'#outputDiv',
			tooltipClass :'hide'
		}, {
			element :'#sopLine2',
			tooltipClass :'hide'
		}, {
			element :'#percentage2',
			tooltipClass :'hide'
		}, {
			element :'#xValue2',
			tooltipClass :'hide'
		}, {
			element :'#functionDeclaration1',
			tooltipClass :'hide'
		}, {
			element :'#variableDeclaration2',
			intro :'',
			position:"right" 
		}, {
			element :'#openspace1',
			tooltipClass:'hide'
		}, {
			element :'#globalDeclaration1',
			tooltipClass:'hide'
		}, {
			element :'#variableDeclaration2',
			tooltipClass:'hide'
		}, {
			element :'#numberDiv1',
			intro :'',
			position:"right",
			tooltipClass: 'hide'
		}, {
			element :'#return1',
			tooltipClass :'hide'
		}, {
			element :'#sopLine2',
			tooltipClass :'hide'
		}, {
			element :'#outputDiv',
			tooltipClass :'hide'
		}, {
			element :'#sopLine3',
			tooltipClass :'hide'
		}, {
			element :'#percentage3',
			tooltipClass :'hide'
		}, {
			element :'#xValue3',
			tooltipClass :'hide'
		}, {
			element :'#functionDeclaration2',
			tooltipClass :'hide'
		}, {
			element :'#variableDeclaration3',
			intro :'',
			position:"right" 
		}, {
			element :'#numberDiv4',
			intro :'',
			position:"right" 
		}, {
			element :'#initialize1',
			intro :'',
			position:"right" 
		}, {
			element :'#numberDiv4',
			intro :'',
			position:"right" 
		}, {
			element :'#return2',
			intro :'',
			position:"right", 
		}, {
			element :'#sopLine3',
			tooltipClass :'hide'
		}, {
			element :'#outputDiv',
			tooltipClass:'hide'
		}, {
			element : "#restart",
			position : "right",
			intro: "Click to restart.",
		} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
			case "codeDiv" :
				if(introjs._currentStep == 31) {
					$('#globalDeclaration').prepend("<span class='fa fa-arrow-right'></span> ");
					var text = "Now, declare the <span class='ct-code-b-yellow'>global variable x</span> at the end of the program.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
						$('.animation-nextbtn').click(function() { 
							$('.animation-nextbtn').remove();
							arrowAnimation();
						});	
					});
				} else {
					var text = "Let us consider an example."	
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});	
				}
			break;
			
			case "globalDeclaration" :
				$(".introjs-helperLayer").one("transitionend", function() {
					if(introjs._currentStep == 1) {
						$('.introjs-tooltip').removeClass("hide");
						var text = "The variables that are declared outside of <span class='ct-code-b-yellow'>any function</span>(including"
									+ " main( )) are called <span class='ct-code-b-yellow'>extern variables</span>.";
						typing('.introjs-tooltiptext', text, function() { 
							$('.introjs-nextbutton').show();	
						});
					} else if(introjs._currentStep == 5) {
						$('.introjs-tooltip').addClass("hide");
						setTimeout(function () {
							introjs.nextStep();
						},1000);
					} else if(introjs._currentStep == 14) {
						$('.introjs-tooltip').addClass("hide");
						setTimeout(function () {
							introjs.nextStep();
						},1000);
					}
				});
			break; 
			
			case "numberDiv1" :
				$("#numberDiv1, #animationDiv").removeClass("opacity00");
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					if(introjs._currentStep == 2 || introjs._currentStep == 38) {
						var text = "The <span class='ct-code-b-yellow'>extern</span> variable <span class='ct-code-b-yellow'>x</span> of type "
								+ "<span class='ct-code-b-yellow'>int</span> is allocated <span class='ct-code-b-yellow'>2 bytes</span> in memory.";
						typing('.introjs-tooltiptext', text, function() { 
							$('.introjs-nextbutton').show();	
						});
					}
					else if(introjs._currentStep == 6 || introjs._currentStep == 40) {
						$("#addressValue1").removeClass("opacity00").text($("#number1").text());
						fromEffectWithTweenMax('#number1', '#addressValue1', function() {
							$('.introjs-tooltip').removeClass("hide");
							$('#number1').removeClass("z-index1000000");
							var text = "When the <span class='ct-code-b-yellow'>main()</span> method finds <span class='ct-code-b-yellow'>x</span>"
										+ " declared as a <span class='ct-code-b-yellow'>global</span> variable, it stores the value 10 in the"
										+ " memory allocated for <span class='ct-code-b-yellow'>x</span>.";
							typing('.introjs-tooltiptext', text, function() { 
								$('.introjs-nextbutton').show();
							});	
						});
					} else if(introjs._currentStep == 15 || introjs._currentStep == 52) {
						addition();
					}
				});
			break; 
			 case "funDeclaration" :
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "These are <span class='ct-code-b-yellow'>function declarations</span>.";
						typing('.introjs-tooltiptext', text, function() { 
							$('.introjs-nextbutton').show();	
						});
					});
			break; 
			
			case "mainDeclaration" :
				$(".introjs-helperLayer").one("transitionend", function() {
					if(introjs._currentStep == 4) {
						var text = "<ul><li><span class='ct-code-b-yellow'>main()</span> is called by the operating system.</li>"
									+ "<li><span class='ct-code-b-yellow'>main()</span> is the execution starting point of a"
									+ " <span class='ct-code-b-yellow'>C</span> program.";
					typing('.introjs-tooltiptext', text, function() { 
						$('.introjs-nextbutton').show();	
					});
					} else if(introjs._currentStep == 32) {
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					}
				});
			break;
			
			case "return1":
			case "openspace":
			case "openspace1":
			case "funDeclaration1":
			case "funDeclaration2":
			case "functionDeclaration1" :
			case "xValue2":
			case "percentage2":
			case "sopLine2":
			case "percentage3":
			case "xValue3":
			case "functionDeclaration2":
				nextLine();
			break; 
			
			case "variableDeclaration1" :
			introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
				if(introjs._currentStep == 4) {
					text = "In this statement the <span class='ct-code-b-yellow'>main()</span> method first checks for the declaration of "
							+ "<span class='ct-code-b-yellow'>x</span> with in the <span class='ct-code-b-yellow'>main()</span> method.<br>"
							+" If it is not declared, it checks the <span class='ct-code-b-yellow'>global</span> variable declaration.";
					typing('.introjs-tooltiptext',text,function() { 
						$('.introjs-nextbutton').show();
					});
				} else if(introjs._currentStep == 33) {
					$('.fa').remove();
					$("#globalDeclaration1").text('int x');
					text = "The variable <span class='ct-code-b-yellow'>x</span> is not declared as local/global variable. So, an "
							+ " <span class='ct-code-b-yellow'>error</span> is thrown.<br> So, declaring an <span class='ct-code-b-yellow'>"
							+ "extern int</span> variable x(which means an extern variable x is declared) avoids the error.";
					typing('.introjs-tooltiptext',text ,function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
						$('.animation-nextbtn').click(function() { 
							$('.animation-nextbtn').remove();
							$('#openBrace').append('<br>\t\t\t<span id="extDeclaration"><span class="ct-green-color">extern</span> int x;</span>');
							introjs.refresh(); 
							$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-nextbtn' onclick='myfunction()'>Next&#8594;</a>");
						});
					});
				} else if(introjs._currentStep == 39) {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				}
			});
			break; 
		
			case "mainMemory" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#mainmemoryheading').css({'opacity':'1'});
					$('#mainMemory').addClass('box-border');
					$('.introjs-tooltip').removeClass("hide");
					var text = "The main() memory is checked for variable <span class='ct-code-b-yellow'>x</span>. As it is not declared here,"
								+ " it checks globally.";
					typing('.introjs-tooltiptext', text, function() { 
						$('.introjs-nextbutton').show();	
					});
				});
			break;
			
			case "sopLine1" :
				nextLine();
			break; 
			
			case "outputDiv" :
				$("#outputDiv").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					 if (introjs._currentStep == 8 || introjs._currentStep == 42) {
						printDecimalValue();
					 } else if (introjs._currentStep == 18 || introjs._currentStep == 55) {
						count++;
						printDecimalValue();
					} else if (introjs._currentStep == 29 || introjs._currentStep == 66) {
						count++;
						index = 4;
						console.log(index + " @@451");
						printDecimalValue1();
					} 
				});
			break; 
			
			case "variableDeclaration2" :
				$(".introjs-helperLayer").one("transitionend", function() {
				 if (introjs._currentStep == 13) {
					text = "This function checks for the declaration of <span class='ct-code-b-yellow'>x</span> with in the"
							+ " function.<br> If it is not declared, it checks for the <span class='ct-code-b-yellow'>global</span> declaration of"
							+ " <span class='ct-code-b-yellow'>x</span>.";
					typing('.introjs-tooltiptext',text,function() {
						$('.introjs-nextbutton').show();	
					});
				} else if (introjs._currentStep == 47) {
					text = "The variable x is not declared as local/global variable. So, an <span class='color-red'>error</span> is thrown."
							+ " <br>So, declaring an <span class='ct-code-b-yellow'>extern int</span> variable x(which means an extern"
							+ " variable x is declared) avoids the error.";
					typing('.introjs-tooltiptext',text ,function() { 
						$('#openBrace1').append('<br>\t\t\t<span id = "extDeclaration1"><span class="ct-green-color">extern</span> int x;</span>');
						introjs.refresh(); 
						$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-nextbtn' onclick='myfunction2()'>Next&#8594;</a>");	
					});
				} else if (introjs._currentStep == 51) {
					$('#extDeclaration1').removeClass('z-index1000000');
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				}
			});
			break; 
			
			case "globalDeclaration1" :
				$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 37) {
					var text = "The global variable <span class='ct-code-b-yellow'>x</span> is declared and the memory is allocated to"
								+ " <span class='ct-code-b-yellow'>x</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#extDeclaration").removeClass("z-index1000000");
						$('.introjs-nextbutton').show();
					});
				} else if (introjs._currentStep == 50) {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				}
			});
			break; 
			
			case "numberDiv3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#numberDiv3').addClass('box-border');
					setTimeout(function () {
						text = "Here, <span class='ct-code-b-yellow'>x</span> is a variable and the function"
								+ " <span class='ct-code-b-yellow'>ganga()</span> is checked for the variable x in its scope.<br>"
								+ " If the declaration is not within the scope, then it checks for the global section."
						typing('.introjs-tooltiptext',text ,function() { 
							$('.introjs-nextbutton').show();	
						});	
					}, 1000);
				});
			break; 
			
			case "return2" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here, variable <span class='ct-code-b-yellow'>x</span> is returned with value"
								+ " <span class='ct-code-b-yellow'>1</span>.";
					typing('.introjs-tooltiptext', text, function() { 
						$('.introjs-nextbutton').show();	
					});	
				});
			break;
			
			case "sopLine3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function () {
						introjs.nextStep();	
					}, 1000);
				});
			break;
			
			case "variableDeclaration3" :
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "A new variable <span class='ct-code-b-yellow'>x</span> is declared as a <span class='ct-code-b-yellow'>"
								+ "local</span> variable in the function <span class='ct-code-b-yellow'>yamuna()</span>.";
					typing('.introjs-tooltiptext', text, function() { 
						$('.introjs-nextbutton').show();
					});	
				});
			break; 
			
			case "numberDiv4" :
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$("#functionMemory, #numberDiv4").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					if(introjs._currentStep == 24 || introjs._currentStep == 61) {
						$('#numberDiv4').addClass('box-border');
						$('.introjs-tooltip').removeClass("hide");
						var text = "The <span class='ct-code-b-yellow'>local</span> variable <span class='ct-code-b-yellow'>x</span> of type"
									+ " <b>int</b> is allocated 2 bytes in memory.";
						typing('.introjs-tooltiptext', text, function() { 
							$('.introjs-nextbutton').show();
						});
					}
					else if(introjs._currentStep == 26 || introjs._currentStep == 63) {
						$('#number4').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
							$('#number4').removeClass('circle-css');
							$("#addressValue4").text($("#number4").text());
							$("#addressValue4").removeClass("opacity00");
							fromEffectWithTweenMax('#number4', '#addressValue4', function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "The value 1 is assigned to the local variable <span class='ct-code-b-yellow'>x</span> and is stored"
											+ " in the memory allocated for the same.";
								typing('.introjs-tooltiptext', text, function() { 
									$('.introjs-nextbutton').show();	
								});	
							});
						});
					} 
				});
			break; 
			
			case "initialize1" :
				$('.introjs-tooltip').css({'min-width' : '320px'});
				$(".introjs-helperLayer").one("transitionend", function() {
					text = "Two variables with the same name <span class='ct-code-b-yellow'>x</span>, have been declared here, one as local and the"
							+ " other as global.<br> Inside any function, local variables will have the highest precedence because the control"
							+ " is within the function. <br>Here, in the function <span class='ct-code-b-yellow'>yamuna()</span> the local"
							+ " variable <span class='ct-code-b-yellow'>x</span> will have precedence over the global variable.";
					typing('.introjs-tooltiptext',text,function() { 
						$('.introjs-nextbutton').show();
					});
				});
			break; 
			
			case "printDefinition" :
				count = 1;
				index = 1;
				for(var i = 0; i < 4; i++) {
					$('#outputAValue'+i).text('');
				}
				$('#addressValue1, #addressValue4').text('');
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#printDefinition').removeClass('opacity00');
					TweenMax.to($("#line1"), 0.5, {opacity: 1, onComplete: function() {
						TweenMax.to($("#line2"), 0.5, {opacity: 1, onComplete: function() {
							$('.introjs-tooltip').removeClass("hide");
							typing('.introjs-tooltiptext', "Now let us consider an example where the <span class='ct-code-b-yellow'>global</span>"
										+ " variable is declared at the <span class='ct-code-b-yellow'>end of the program</span>." ,function() { 
								$('.introjs-nextbutton').show();
							});
						}});
				  	}});
				});
			break; 
			
			case "extDeclaration" :
				$('.animation-nextbtn').remove();
			 	$('#extDeclaration').addClass('introjs-showElement'); 
				$(".introjs-helperLayer").one("transitionend", function() {
					text = "<span class='ct-code-b-yellow'>extern</span> means the variable is declared as <span class='ct-code-b-yellow'>global"
							+ " variable</span>, so the control checks the global declaration which could be at the end of the program.";  
					typing('.introjs-tooltiptext',text,function() { 
						$('.introjs-nextbutton').show();
					});
				});
			break; 
			
			case "extDeclaration1" :
				$('.animation-nextbtn').remove();
				nextLine()
			break; 
			
			case "restart":
				$('.introjs-tooltip').css({'min-width' : '120px'});
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#restart").removeClass('opacity00');
				});
			break; 
			}
		});
	introjs.start();
}

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : 5,
		"cursor_color": "white"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}

function dynamicSteps() {
	var dynamicStep = {
			"element" : "#extDeclaration",
		    "position" : "right",
		    "intro" : "",
		}
	introjs.insertOption(introjs._currentStep + 1, dynamicStep); 	
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

function arrowAnimation(callBackFunction) {
	($('.fa').parent()).css({'display' :'inline-block', 'position' : 'relative'})
	var l1 = $("#globalDeclaration").offset();
	var l2 = $("#globalDeclaration1").offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("#globalDeclaration").effect('highlight', {color: 'blue'}, 500, function() {
		$("#globalDeclaration").addClass("opacity00");
		$("#globalDeclaration1").removeClass("opacity00");
		TweenMax.from($("#globalDeclaration1"), 1, {top: topLength, left: leftLength, onComplete: function() {
			typing('.introjs-tooltiptext',"Let us see how this program is executed.", function() {
				$('.introjs-nextbutton').show();
			});
		}});
	});
}

function printDecimalValue() {
	$("#xValue" + count).addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
		$("#xValue" + count).removeClass("z-index1000000");
		$('.output-console-body').append('<div id="outputAValue' + count + '">' + $("#addressValue" + index).text() + '</div>\n')
		fromEffectWithTweenMax("#xValue" + index, "#outputAValue" + count, function() {
			setTimeout(function () {
				introjs.nextStep();	
			}, 500);
		}); 
	});
}

function printDecimalValue1() {
	$("#xValue" + count).addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
		$("#xValue" + count).removeClass("z-index1000000");
		$('.output-console-body').append('<div id="outputAValue' + count + '">' + $("#addressValue" + index).text() + '</div>\n')
  		fromEffectWithTweenMax("#xValue" + count, "#outputAValue" + count, function() {
  			setTimeout(function () {
  				introjs.nextStep();	
			}, 500);
	 	}); 
 	});
}

function addition() {
	$("#num").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
		$("#num").removeClass("z-index1000000")
		$("#addressValue1").append("<span>+10</span");
		setTimeout(function () {
			$("#addressValue1").text("20");
			TweenMax.fromTo("#addressValue1", 0.5, {rotationX:-90}, {rotationX : 0, opacity:1, onComplete:function() {
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "When the <span class='ct-code-b-yellow'>ganga()</span> method finds <span class='ct-code-b-yellow'>"
										+ "x</span> declared as a <span class='ct-code-b-yellow'>global variable</span>, it <span class"
										+ "='ct-code-b-yellow'>increases</span> the value by 10 and stores it in the memory allocated.", function() {
					$('.introjs-nextbutton').show();	
				});
			}}); 
		},800);
	});
}

function myfunction() {
$('.animation-nextbtn').remove();
	setTimeout(function () {
		dynamicSteps();
		introjs.nextStep();
	}, 500);
}

function myfunction2() {
$('.animation-nextbtn').remove();
	setTimeout(function () {
		var dynamicStep1 = {
				"element" : "#extDeclaration1",
			    "position" : "right",
			    "intro" : "",
			    tooltipClass :'hide'
			}
		introjs.insertOption(introjs._currentStep + 1, dynamicStep1); 	
		introjs.nextStep();
	}, 500);
}

function nextLine() {
	$(".introjs-helperLayer").one("transitionend", function() {
		setTimeout(function () {
			introjs.nextStep();	
		}, 700);
	});
}