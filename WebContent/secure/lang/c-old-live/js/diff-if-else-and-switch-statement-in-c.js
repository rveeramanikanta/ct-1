var switchnumber;
var action;
var id,id1;

var diffIfElseAndSwitchStatementInCReady = function() {
	introGuide();
	$('#firstNum').val(""); 
	$('#firstNum1').val(""); 
	$(".entered-element").keydown(function(e) { 
			var max = $(this).attr("maxlength");
			if ($(this).text().length > max - 1) {
				if (e.which == 8 || e.which == 46) {
					return true;	
				}
				e.preventDefault();
			}
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || e.which == 8 || e.which == 46)) {
				return true;
			} else {
				e.preventDefault();
			}
	 	});
	
	$(".entered-element").keyup(function() {
		introcode.refresh();
		$(".tooltip-text-edit").text($("#firstNum").text());
		if ($(this).text().length == 0) {
	       	$(".introjs-nextbutton").hide();
	       	$('.error-text').empty();
	       	$('.length-error-text').empty();
	       	$(".introjs-tooltiptext").append("<span class='error-text ct-code-b-red'><br/>Please enter a number.</span>")
  	    } else {
  	    	$(".introjs-tooltip").removeClass("hide");
  	    	$(".introjs-nextbutton").show();
        	$('.error-text').empty();
        	$('.length-error-text').empty();
  	    }
    });
} 

function introGuide() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ 
		{
			element : '#typingBox',
			intro : '',
			position : 'bottom',
			tooltipClass : 'hide'
		},
		{
			element : '#pre1',
			intro : '',
			position : 'right',
		},
		{
			element : '#ifelseblock',
			intro : '',
			position : 'right',
		},
		{
			element : '#elseifline1',
			intro : '',
			position : 'right',
		},
		{
			element : '#elseifline2',
			intro : '',
			position : 'right',
		},
		{
			element : '#elseifline3',
			intro : '',
			position : 'right',
		},
		{
			element : '#elseifline4',
			intro : '',
			position : 'right',
		},
		{
			element : '#pre1',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#variableDeclaration1',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#ifPanel',
			intro : '',
			position : 'right'
		},
		{
			element : '#enterLine1',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#outputDiv',
			intro : '',
			position : 'right',
		},
		{
			element : '#enterLine2',
			intro : '',
			position : 'right',
		},
		{
			element : '#ifelseblock',
			intro : '',
			position : 'right',
		},
		{
			element : '#elseifline1',
			intro : '',
			position : 'right',
		},
		{
			element : '#sopLine1',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#outputDiv',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#elseifline2',
			intro : '',
			position : 'right',
		},
		{
			element : '#sopLine2',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#elseifline3',
			intro : '',
			position : 'right',
		},
		{
			element : '#sopLine3',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#elseifline4',
			intro : '',
			position : 'right',
		},
		{
			element : '#sopLine4',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#closeBrace4',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#closeBrace',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#typingBox',
			intro : '',
			position : 'bottom',
			tooltipClass : 'hide'
		},
		{
			element : '#pre2',
			intro : '',
			position : 'left',
		},
		{
			element : '#switchline1',
			intro : '',
			position : 'left',
			tooltipClass : 'hide'
		},
		{
			element : '#switchnum',
			intro : '',
			position : 'left',
		},	
		{
			element : '#pre2',
			intro : '',
			position : 'left',
			tooltipClass : 'hide'
		},
		
		{
			element : '#svariableDeclaration1',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#switchPanel',
			intro : '',
			position : 'left'
		},
		{
			element : '#senterLine1',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#outputDiv',
			intro : '',
			position : 'right',
		},
		{
			element : '#senterLine2',
			intro : '',
			position : 'left',
		},
		
		{
			element : '#switchnum',
			intro : '',
			position : 'left',
		},
		{
			element : '#outputDiv',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : '#breakline1',
			intro : '',
			position : 'left',
		},
		{
			element : '#breakline2',
			intro : '',
			position : 'left',
		},
		{
			element : '#breakline3',
			intro : '',
			position : 'left',
		},
		{
			element : '#scloseBrace1',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element : "#restartBtn",
			intro : "Click to restart.",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position : "right"
		}
		]
	});
	
	introcode.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "typingBox":
			if (introcode._currentStep == 0) {
				$('#typingBox1').fadeTo(1000, 1,function() {
					$('#typingBox2').fadeTo(1000, 1,function() {
						$('#typingBox3').fadeTo(1000, 1,function() {
							
						});
					});
				});
			} else if (introcode._currentStep == 25) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#typingBox4').fadeTo(1000, 1,function() {
						
					});
				});
			}
		break;
		case "pre1":
			if (introcode._currentStep == 1){
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				typingContent = 'This is a sample code for the given problem using <span class = ct-code-b-yellow>if-else-if</span>.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
			} else if (introcode._currentStep == 7 ) {
				$('#middle').removeClass('opacity00');
				setTimeout(function () {
					introcode.nextStep();
				}, 1000);
			}
		break;
		case "enterLine1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#consoleDiv').removeClass('opacity00');
				setTimeout(function () {
					introcode.nextStep();
				}, 1000);
			});
		break;
		case "senterLine1":
			nextLine();
		break;
		case "breakline1":
			breakLine();
		break;
		case "breakline2":
			breakLine();
		break;
		case "breakline3":
			breakLine();
		break;
		case "outputDiv":
			$('.introjs-nextbutton').hide();
			if (introcode._currentStep == 11 ) {
			$('.introjs-helperLayer').one('transitionend', function () {
				typingContent = 'Enter an integer.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('#outputAValue1').removeClass('opacity00');
					$("#firstNum").attr('contentEditable',true);
					$('#firstNum').focus();
				});
			 }); 
			} else if (introcode._currentStep == 16) {
				$('.introjs-helperLayer').one('transitionend', function () {
					$('#out2').removeClass('opacity00');
					setTimeout(function() {
						introcode.goToStep(24);
					}, 2000);
				});
			} else if (introcode._currentStep == 33) {
				$('.introjs-helperLayer').one('transitionend', function () {
					typingContent = 'Enter an integer.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('#outputAValue3').removeClass('opacity00');
						$("#firstNum1").attr('contentEditable',true);
						$('#firstNum1').focus();
					});
				 });
			} else if (introcode._currentStep == 38) {
				$('.introjs-helperLayer').one('transitionend', function () {
					$('#out4').removeClass('opacity00');
					setTimeout(function() {
						if (switchnumber == 1) {
							introcode.goToStep(40);
						} else if (switchnumber == 2) {
							introcode.goToStep(41);
						}  else if (switchnumber == 3) {
							introcode.goToStep(42);
						} else if (switchnumber > 3) {
							introcode.goToStep(43);
						}
					},1000);
				});
			}  
		break;
		case "elseifline1":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introcode._currentStep == 3) {
					typingContent = 'If the first <span class = "ct-code-b-yellow">if</span> condition is <span class = "ct-code-b-yellow">false</span>, then it goes to the <span class = "ct-code-b-yellow">else</span> part where another <span class = "ct-code-b-yellow">if</span> is present.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				} else if (introcode._currentStep == 14) {
				$('.introjs-tooltiptext').append('<span id = "firstexp" >if (<span id = "num1" class = "position ct-code-b-yellow">country_id</span>== 1)</span>');
				fromEffectWithTweenMax("#elseifline1", "#firstexp", function() {
					$("#num1").text($("#firstNum").text());
					TweenMax.fromTo("#num1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
						checkCondition1();
					}}); 
				}); 
				}
			 }); 
		break;
		case "enterLine2":
			enterLine('#addressValue3','#firstNum');
		break;
		case "senterLine2":
			enterLine('#addressValue4','#firstNum1');
		break;
		case "variableDeclaration1":
			nextLine();
		break;
		case "svariableDeclaration1":
			nextLine();
		break;
		case "switchline1":
			nextLine();
		break;
		case "ifPanel":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#panelBoxA').removeClass('visibility-hidden');
				$('#address3').removeClass('visibility-hidden');
				typingContent = 'Here, int variable <span class = ct-code-b-yellow>country_id</span> occupies 2 bytes in the memory.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "switchPanel":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$('#panelBoxB').removeClass('visibility-hidden');
				$('#address4').removeClass('visibility-hidden');
				typingContent = 'Here, int variable <span class = ct-code-b-yellow>country_id</span> occupies 2 bytes in the memory.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "elseifline2":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introcode._currentStep == 4) {
					typingContent = 'Here, when the <span class = "ct-code-b-yellow">if</span> condition is <span class = "ct-code-b-yellow">false</span>, then it goes to the <span class = "ct-code-b-yellow">else</span> part where another <span class = "ct-code-b-yellow">if</span> is present.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				} else if (introcode._currentStep == 17) {
					$('.introjs-tooltiptext').append('<span id = "firstexp" >if (<span id = "num1" class = "position ct-code-b-yellow">country_id</span>== 2)</span>');
					fromEffectWithTweenMax("#elseifline2", "#firstexp", function(){
						$("#num1").text($("#firstNum").text());
						TweenMax.fromTo("#num1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function(){
							checkCondition2();
						}}); 
					}); 
				}
			 }); 
		break;
		case "elseifline3":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introcode._currentStep == 5) {
					typingContent = 'Here, when the <span class = "ct-code-b-yellow">if</span> condition is <span class = "ct-code-b-yellow">false</span>, then it goes to the <span class = "ct-code-b-yellow">else</span> part.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				} else if (introcode._currentStep == 19) {
				$('.introjs-tooltiptext').append('<span id = "firstexp" >if (<span id = "num1" class = "position ct-code-b-yellow">country_id</span>== 3)</span>');
				fromEffectWithTweenMax("#elseifline3", "#firstexp", function(){
					$("#num1").text($("#firstNum").text());
					TweenMax.fromTo("#num1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function(){
						checkCondition3();
					}}); 
				});
				}
			 }); 
		break;
		case "elseifline4":
			$('.introjs-nextbutton').hide();
			if (introcode._currentStep == 6) {
				$('.introjs-helperLayer').one('transitionend', function () {
					typingContent = 'If all the conditions are <span class = "ct-code-b-yellow">false</span>, then finally last <span class = "ct-code-b-yellow">else</span> part is executed.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				});
			} else if (introcode._currentStep == 21) {
				 $('.introjs-helperLayer').one('transitionend', function () {
					typingContent = 'As all the above conditions are <span class = "ct-code-b-yellow">false</span>, the last <span class = "ct-code-b-yellow">else</span> part is executed.'; 
					typing('.introjs-tooltiptext', typingContent,function() { 
						checkCondition4();
					});
				 }); 
			 } 
		break;
		
		case "ifelseblock":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introcode._currentStep == 2) {
				typingContent = 'This is the <span class = "ct-code-b-yellow">logic</span> used for the selection of statements by using conditions.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-tooltiptext').append('<div id = "append1"></div>');
					typingContent = 'In <span class = "ct-code-b-yellow">if-else-if</span>, <br>first <span class = "ct-code-b-yellow">if</span> condition is checked,<br>if it is <span class = "ct-code-b-yellow">true</span>'
									+' it executes the statements within <span class = "ct-code-b-yellow">if</span>,<br> and then the control automatically goes to the end of <span class = "ct-code-b-yellow">if-else-if</span>.'
					typing('#append1', typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				});
				} else if (introcode._currentStep == 13) {
					typingContent = 'Now, control enters into <span class = "ct-code-b-yellow" style = "white-space: nowrap;">if-else-if</span> block.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				}
			});
		break;
		
		case "pre2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introcode._currentStep == 26) {
					typingContent = '<span class = "ct-code-b-yellow">switch-case</span> is an alternative for <span class = "ct-code-b-yellow">if-else-if</span>'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				} else if (introcode._currentStep == 29) {
					setTimeout(function() {
						introcode.nextStep();					
					}, 1000);
				}
			});
		break;
		case "closeBrace4":
			nextLine();
		break;
		case "closeBrace":
			nextLine();
		break;
		case "sopLine1":
			outputShow('United States');
		break;
		case "sopLine2":
			outputShow('Spain');
		break;
		case "sopLine3":
			outputShow('India');
		break;
		case "sopLine4":
			outputShow('Wrong Entry');
		break;
		case "ssopLine1":
			mySwitchsopLine('United States');
		break;
		case "ssopLine2":
			mySwitchsopLine('Spain');
		break;
		case "ssopLine3":
			mySwitchsopLine('India');
		break;
		case "ssopLine4":
			mySwitchsopLine('Wrong Entry');
		break;
		case "switchnum":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introcode._currentStep == 28) {
					typingContent = 'In <span class=ct-code-b-yellow>switch-case</span>, the expression must be either <span class = ct-code-b-yellow>int</span> or <span class = ct-code-b-yellow>char</span>.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						for(var i = 1; i < 4; i++) {
							$('#caseLine'+i).effect("highlight", {color: 'blue'}, 2000);
						}
						$('.introjs-tooltiptext').append("<span id = switchlast></span>");
						typingContent = '<br>If expression in <span class = ct-code-b-yellow>switch-case</span> is integer, then all the case labels are integers.'; 
						typing('#switchlast', typingContent,function() {
							$('#switchlast').append("<span id = switchlastone></span>");	
							typingContent = '<br>If expression in <span class = ct-code-b-yellow>switch-case</span> is character, then all the case labels are characters.'; 
							typing('#switchlastone', typingContent,function() {	
								$('.introjs-nextbutton').show();
							});
						});
					});
				} else if (introcode._currentStep == 35) {
					typingContent = '<span class=ct-code-b-yellow>switch-case</span> checks if any match is found with the given <span class=ct-code-b-yellow>country_id</span>.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						switchCondition();
					});
				}
			});
		break;
		case "cas1":
			myCase('1');
		break;
		case "cas2":
			myCase('2');
		break;
		case "cas3":
			myCase('3');
		break;
		case "cas4":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typingContent = '<span class=ct-code-b-yellow>switch-case</span> control comes to <span class=ct-code-b-yellow>default case</span> because the <span class=ct-code-b-yellow>country_id</span> is not matched with any case.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				$("#restartBtn").click(function() {
					location.reload();
				});
			});
		break;
		case "scloseBrace1":
			nextLine();
		break;
		}
	});	

	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
}

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":5,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}

function animate3() {
	$('#ifelseDiv').removeClass('opacity00');
	$('.animation-nextbtn').remove(); 
	introcode.nextStep();
}

function animate4() {
	$('#switchcaseDiv').removeClass('opacity00');
	$('.animation-nextbtn1').remove(); 
	introcode.nextStep();
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

function dynamicStep1(id,action) {
	var dynamicStep = {
		"element" : id,
		"position" : "right",
		"intro" : "",
		action : action
	}
	introcode.insertOption(introcode._currentStep + 1, dynamicStep); 	
}

function dynamicStep3() {
	var dynamicStep1 = {
		"element" : "#cas4",
		"position" : "left",
		"intro" : "",
	}
	introcode.insertOption(introcode._currentStep + 1, dynamicStep1); 
	var dynamicStep1 = {
		"element" : "#ssopLine4",
	    "position" : "left",
	    "intro" : "",
	    'tooltipClass':'hide'
	}
	introcode.insertOption(introcode._currentStep + 2, dynamicStep1);
}

function dynamicStep2(id,id1,action) {
	var dynamicStep = {
		"element" : id,
	    "position" : "left",
	    "intro" : "",
	    action :action,
	}
	introcode.insertOption(introcode._currentStep + 1, dynamicStep); 
	var dynamicStep = {
		"element" : id1,
	    "position" : "left",
	    "intro" : "",
	    "tooltipClass":"hide",
	    action :action,
	}
	introcode.insertOption(introcode._currentStep + 2, dynamicStep); 
}

function checkCondition1() {
	var if1 = $("#firstNum").text();
	if (if1 == 1) {
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "true1" class = "opacity00 ct-code-b-yellow position">true</span>');
		$('#true1').removeClass('opacity00');
		TweenMax.fromTo("#true1",0.5,{rotationX:-90},{delay : 0.5, rotationX: 0, opacity: 1,onComplete:function() {
			$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function(){ 
				$('.animation-nextbtn').remove();
				introcode.goToStep(16);
			});
		}});
	} else { 
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "false1" class = "opacity00 ct-code-b-yellow position">false</span>');
		$('#false1').removeClass('opacity00');
		TweenMax.fromTo("#false1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity: 1,onComplete:function() {
			$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function(){ 
				 $('.animation-nextbtn').remove();
				 introcode.goToStep(18);
			});
		}});
	} 
}
function checkCondition2() {
	var if1 = $("#firstNum").text();
	if (if1 == 2) {
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "true1" class = "opacity00 ct-code-b-yellow position">true</span>');
		$('#true1').removeClass('opacity00');
		TweenMax.fromTo("#true1",0.5,{rotationX:-90},{delay : 0.5, rotationX: 0,opacity:1,onComplete:function() {
			$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function(){ 
				$('.animation-nextbtn').remove();
				introcode.goToStep(19);
			});
		}});
	} else { 
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "false1" class = "opacity00 ct-code-b-yellow position">false</span>');
		$('#false1').removeClass('opacity00');
		TweenMax.fromTo("#false1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
			$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function(){ 
				$('.animation-nextbtn').remove();
				introcode.goToStep(20);
			});
		}});
	} 
}

function checkCondition3() {
	var if1 = $("#firstNum").text();
	if (if1 == 3) {
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "true1" class = "opacity00 ct-code-b-yellow position">true</span>');
		$('#true1').removeClass('opacity00');
		TweenMax.fromTo("#true1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
			$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function(){ 
				$('.animation-nextbtn').remove();
				introcode.goToStep(21);
			});
		}});
	} else { 
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "false1" class = "opacity00 ct-code-b-yellow position">false</span>');
		$('#false1').removeClass('opacity00');
		TweenMax.fromTo("#false1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
			$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function(){ 
				$('.animation-nextbtn').remove();
				introcode.goToStep(22);
			});
		}});
	} 
}

function checkCondition4() {
	$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
	$('.animation-nextbtn').click(function(){ 
		$('.animation-nextbtn').remove();
		var if1 = $("#firstNum").text();
		introcode.goToStep(23);
	});
}

function switchCondition() {
	switchnumber = parseInt($('#firstNum1').text());
	if (switchnumber < 4) {
		$('#n'+switchnumber).effect("highlight", {color: 'blue'}, 2000, function() {
			dynamicStep2("#cas"+switchnumber,"#ssopLine"+switchnumber,switchnumber);
			$('.introjs-nextbutton').show();
		});
	} else {
		dynamicStep3();
		$('.introjs-nextbutton').show();
	}
}

function outputShow(text) {
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		setTimeout(function() {
			$('#outputAValue2').append('<span id ="out2" class = "opacity00">'+ text +'</span>');
			introcode.goToStep(17);
		}, 1000);
	});
}

function mySwitchsopLine(text) {
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		setTimeout(function() {
			$('#outputAValue4').append('<span id ="out4" class = "opacity00">'+ text +'</span>');
			introcode.nextStep();
		}, 1000);
	});
}

function myCase(text) {
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		typingContent = '<span class=ct-code-b-yellow>switch-case</span> control comes to this case as the country_id is <span class=ct-code-b-yellow>'+text+'</span>'; 
		typing('.introjs-tooltiptext', typingContent,function() {
			$('.introjs-nextbutton').show();
		});
	});
}

function nextLine() {
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		setTimeout(function () {
			introcode.nextStep();
		}, 1000);
	});
} 

function breakLine() {
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		typingContent = 'When the switch-case encounters <span class=ct-code-b-yellow>break;</span> statement, control comes out of the loop.'; 
		typing('.introjs-tooltiptext', typingContent,function() {
			$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
			$('.animation-nextbtn').click(function() {
				$('.animation-nextbtn').remove();
				introcode.goToStep(43);
			});
		});
	});
}

function enterLine(id,id1) {
	$('.introjs-nextbutton').hide();
	$('.introjs-helperLayer ').one('transitionend', function() {
		$(".introjs-tooltiptext").append("<div></div>");
		var text = "Here, <span class='ct-code-b-yellow'>scanf()</span> with the conversional character %d reads an integer variable from the keyboard and assigns the value to variable <span class='ct-code-b-yellow'>country_id</span>."
		typing($(".introjs-tooltiptext div:last-child"), text,function() {
			$("id").text($('id1').text());
			$('.introjs-nextbutton').show();
		});
	});
}