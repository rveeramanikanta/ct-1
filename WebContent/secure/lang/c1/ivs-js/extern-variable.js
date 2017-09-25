var introjs;
var index = 1;
var count = 1;

function externVariable() {
	initIntroJS();
	
	$("#address1").text(Math.floor((Math.random() * 1024) + 1125));
	$("#address2").text(Math.floor((Math.random() * 1024) + 1225));
	
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
			element :'#mainDeclaration',
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
			element :'#mainDeclaration',
			intro :'',
			position:"right",
			tooltipClass:'hide'
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
			tooltipClass: 'introjs-tooltip-min-width'
		} ]
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
			case "codeDiv" :
				if(introjs._currentStep == 32) {
					$('#globalDeclaration').append("<span class = 'fa fa-arrow-left'></span>");
					var text = "Now, declare the <span class='ct-code-b-yellow'>global variable</span> at the bottom of the program"
								+ " i.e.,outside of the functions in the program.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
						$('.animation-nextbtn').click(function() { 
							$('.animation-nextbtn').remove();
							$('#globalDeclaration1').css({'opacity':'1'});
							fromEffectWithTweenMax("#globalDeclaration", "#globalDeclaration1", function() {
								$('#globalDeclaration').css({'opacity':'0'});
								typing('.introjs-tooltiptext',"Now, let us see how this program is executed." ,function() {
									$('.introjs-nextbutton').show();
								});
							});
						});	
					});
				} else {
					var text = "Let us consider an example on <span class='ct-code-b-yellow'>global variables</span>."	
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-nextbutton').show();
					});	
				}
			break;
			
			case "globalDeclaration" :
				$(".introjs-helperLayer").one("transitionend", function() {
					if(introjs._currentStep == 1) {
						$('.introjs-tooltip').removeClass("hide");
						var text = "The <span class='ct-code-b-yellow'>global variables</span> are declared outside the function main().";
						typing('.introjs-tooltiptext', text, function() { 
							$('.introjs-nextbutton').show();	
						});
					} else if(introjs._currentStep == 6) {
						$('.introjs-tooltip').addClass("hide");
						setTimeout(function () {
							introjs.nextStep();
						},1000);
					} else if(introjs._currentStep == 15) {
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
					if(introjs._currentStep == 2 || introjs._currentStep == 40) {
						var text = "The <span class = 'ct-code-b-yellow'>global variable x</span> occupies 2 bytes in the memory.";
						typing('.introjs-tooltiptext', text, function() { 
							$('.introjs-nextbutton').show();	
						});
					}
					else if(introjs._currentStep == 7 || introjs._currentStep == 42) {
						$("#addressValue1").removeClass("opacity00").text($("#number1").text());
						fromEffectWithTweenMax('#number1', '#addressValue1', function() {
							$('.introjs-tooltip').removeClass("hide");
							$('#number1').removeClass("z-index1000000");
							var text = "The value 10 is stored in the variable <span class = 'ct-code-b-yellow'>x</span>.";
							typing('.introjs-tooltiptext', text, function() { 
								$('.introjs-nextbutton').show();	
							});	
						});
					} else if(introjs._currentStep == 16 || introjs._currentStep == 54) {
						addition();
					}
				});
			break; 
			 case "funDeclaration" :
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "These are <span class = 'ct-code-b-yellow'>function declarations</span>.";
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
					} else if(introjs._currentStep == 34) {
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
			$(".introjs-helperLayer").one("transitionend", function() {
				if(introjs._currentStep == 5) {
					text = "The statement <span class = 'ct-code-b-yellow'>x = 10;</span> is in the function"
							+ " <span class='ct-code-b-yellow'>main()</span>.<br>"
							+" <span class = 'ct-code-b-yellow'>main()</span> checks for the declaration of "
							+ " <span class = 'ct-code-b-yellow'>x</span>.<br>"
							+" If it is not declared, then it checks global variable declaration.";
					typing('.introjs-tooltiptext',text,function() { 
						$('.introjs-nextbutton').show();
					});
				} else if(introjs._currentStep == 35) {
					text = "Here, the variable x is not declared. So, an <span class = 'color-red'>error</span> message is shown."
							+"<br>So, we can change the declaration as <span class = 'ct-code-b-yellow'>extern int x;</span>"
					typing('.introjs-tooltiptext',text ,function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
						$('.animation-nextbtn').click(function() { 
							$('.animation-nextbtn').remove();
							$('#openBrace').append('<br>\t\t\t<span id="extDeclaration">extern int x;</span>');
							introjs.refresh(); 
							$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-nextbtn' onclick='myfunction()'>Next&#8594;</a>");
						});
					});
				} else if(introjs._currentStep == 41) {
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
					var text = "The main memory is checked for variable <span class='ct-code-b-yellow'>x</span>. As it is not declared here,"
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
					 if (introjs._currentStep == 9 || introjs._currentStep == 44) {
						printDecimalValue();
					 } else if (introjs._currentStep == 19 || introjs._currentStep == 57) {
						count++;
						printDecimalValue();
					} else if (introjs._currentStep == 30 || introjs._currentStep == 68) {
						count++;
						index = 4;
						printDecimalValue1();
					} 
				});
			break; 
			
			case "variableDeclaration2" :
				$(".introjs-helperLayer").one("transitionend", function() {
				 if (introjs._currentStep == 14) {
					text = "The function <span class = 'ct-code-b-yellow'>ganga()</span> checks for the declaration of"
							+ " <span class='ct-code-b-yellow'>x</span>.<br> If it is not declared, then it checks for the global declaration.";
					typing('.introjs-tooltiptext',text,function() {
						$('.introjs-nextbutton').show();	
					});
				} else if (introjs._currentStep == 49) {
					text = "This statement gives an <span class='color-red'>error</span> because the variable"
							+ " <span class='ct-code-b-yellow'>x</span> is not declared locally.<br>"
							+ "<span class='ct-code-b-yellow'>Note:</span> But <span class='ct-code-b-yellow'>x</span> is globally"
							+ " at the outside of functions."
							+ " <br>So, we can change the declaration as <span class = 'ct-code-b-yellow'>extern int x;</span>"
					typing('.introjs-tooltiptext',text ,function() { 
						$('#openBrace1').append('<br>\t\t\t<span id = "extDeclaration1">extern int x;</span>');
						introjs.refresh(); 
						$('.introjs-tooltipbuttons').append("<a class='introjs-button animation-nextbtn' onclick='myfunction2()'>Next&#8594;</a>");	
					});
				} else if (introjs._currentStep == 53) {
					$('#extDeclaration1').removeClass('z-index1000000');
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				}
			});
			break; 
			
			case "globalDeclaration1" :
				$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 39) {
					var text = "The global variable is declared and the memory is allocated to the variable"
								+ " <span class='ct-code-b-yellow'>x</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#extDeclaration").removeClass("z-index1000000");
						$('.introjs-nextbutton').show();
					});
				} else if (introjs._currentStep == 52) {
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
					var text = "Here, the value <span class='ct-code-b-yellow'>1</span> of the variable"
								+ " <span class='ct-code-b-yellow'>x</span> returns.";
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
					var text = "The variable <span class='ct-code-b-yellow'>x</span> is declared as <span class='ct-code-b-yellow'>local</span>"
								+ " variable in the function yamuna().";
					typing('.introjs-tooltiptext', text, function() { 
						$('.introjs-nextbutton').show();
					});	
				});
			break; 
			
			case "numberDiv4" :
				$("#functionMemory, #numberDiv4").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					if(introjs._currentStep == 25 || introjs._currentStep == 63) {
						$('#numberDiv4').addClass('box-border');
						$('.introjs-tooltip').removeClass("hide");
						var text = "The variable <span class = 'ct-code-b-yellow'>x</span> occupies 2 bytes in the memory.";
						typing('.introjs-tooltiptext', text, function() { 
							$('.introjs-nextbutton').show();
						});
					}
					else if(introjs._currentStep == 27 || introjs._currentStep == 65) {
						$('#number4').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
							$('#number4').removeClass('circle-css');
							$("#addressValue4").text($("#number4").text());
							$("#addressValue4").removeClass("opacity00");
							fromEffectWithTweenMax('#number4', '#addressValue4', function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "The local variable <span class='ct-code-b-yellow'>x</span> is assigned with value 1.";
								typing('.introjs-tooltiptext', text, function() { 
									$('.introjs-nextbutton').show();	
								});	
							});
						});
					} 
				});
			break; 
			
			case "initialize1" :
				$(".introjs-helperLayer").one("transitionend", function() {
					text = "The variable <span class='ct-code-b-yellow'>x</span> is declared as local and global.<br>"
							+ " The local variable <span class='ct-code-b-yellow'>x</span> will have the highest precedence because the control"
							+ " is within the function <span class = 'ct-code-b-yellow'>yamuna()</span>.";
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
							typing('.introjs-tooltiptext',"Now let us consider an example where the global variable is declared at the end of the program." ,function() { 
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
					text = "<span class='ct-code-b-yellow'>extern</span> means the variable is declared outside of any function globally,"
							+ " the control  checks for the global declaration.";  
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
				$("#restart").removeClass('opacity00');
			break; 
			}
		});
	introjs.start();
}

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":5,
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

function toEffectWithTweenMax(selector1, selector2, selector3, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset({top: l1.top, left: l1.left});
	TweenMax.to($(selector2), 1, {top: 22, left: selector3, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function printDecimalValue() {
	$("#xValue" + count).addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
		$("#xValue" + count).removeClass("z-index1000000");
		$("#outputAValue" + count).text($("#addressValue" + index).text());
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
		$("#outputAValue" + count).text($("#addressValue" + index).text());
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
			TweenMax.fromTo("#addressValue1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0, opacity:1, onComplete:function() {
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext',"The variable <span class='ct-code-b-yellow'>x</span> is increased by 10.",function() {
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