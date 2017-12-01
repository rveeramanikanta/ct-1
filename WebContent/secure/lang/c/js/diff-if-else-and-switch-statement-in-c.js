var switchnumber;
var action;
var id,id1;
var stepTo = 0;
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
	       	$(".introjs-nextbutton, .introjs-prevbutton").hide();
	       	$('.error-text').empty();
	       	$('.length-error-text').empty();
	       	$(".introjs-tooltiptext").append("<span class='error-text ct-code-b-red'><br/>Please enter a number.</span>")
  	    } else {
  	    	$(".introjs-tooltip").removeClass("hide");
  	    	$(".introjs-nextbutton, .introjs-prevbutton").show();
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
			tooltipClass: "hide"
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
			key : "first"
		},
		{
			element : '#elseifline2',
			intro : '',
			position : 'right',
			key : "first"
		},
		{
			element : '#elseifline3',
			intro : '',
			position : 'right',
			key : "first"
		},
		{
			element : '#elseifline4',
			intro : '',
			position : 'right',
			key : "first"
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
			position : 'right',
			tooltipClass: "hide"
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
			tooltipClass: "hide",
			key : "print1"
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
			tooltipClass: "hide",
			key : "one"
		},
		{
			element : '#elseifline1',
			intro : '',
			position : 'right',
			tooltipClass: "hide",
			key : "line1"
		}
		]
	});
	
	
	
	introcode.onbeforechange(function(targetElement) {
		var key = introcode._introItems[introcode._currentStep]["key"];
		var elementId = targetElement.id;
		switch (elementId) {
		case "enterLine1":
			if (introcode._direction == "backward") {
				$('#consoleDiv, #outputAValue1').addClass('opacity00');
				$("#firstNum").removeAttr("contentEditable").text('');
			}
			
		break;
		case "senterLine1":
			if (introcode._direction == "backward") {
					introcode._introItems.splice(introcode._introItems.length - 2);
					$('#outputAValue3').addClass('opacity00');
					$("#firstNum1").removeAttr('contentEditable').text('');
			}
		break;
		case "breakline1":
				if (introcode._direction == "backward") {
					introcode._introItems.splice(introcode._introItems.length - 1);
				}
		break;
		case "breakline2":
				if (introcode._direction == "backward") {
					introcode._introItems.splice(introcode._introItems.length - 1);
				}
		break;
		case "breakline3":
				if (introcode._direction == "backward") {
					introcode._introItems.splice(introcode._introItems.length - 1);
				}
		break;
		case "outputDiv":
			
			if (introcode._direction == "backward") {
				if (introcode._currentStep == 11 ) {
					$('#outputAValue1').addClass('opacity00');
					$("#firstNum").removeAttr("contentEditable").text('');
				} else if (key == "switchOutPut") {
					$('#outputAValue3').addClass('opacity00');
					$("#firstNum1").removeAttr('contentEditable').text('');
					if (introcode._direction == "backward") {
						introcode._introItems.splice(introcode._introItems.length - 1);
					}
				} else {
					if (introcode._direction == "backward") {
						introcode._introItems.splice(introcode._introItems.length - 1);
					}
				}
			}
			
		break;
		case "elseifline1":
			
			if (introcode._direction == "backward") {
				if (key == "line1") {
					if(parseInt($("#firstNum").text()) == 2) {
						introcode._introItems.splice(introcode._introItems.length - 5);
					} else {
						introcode._introItems.splice(introcode._introItems.length - 2);
					}
				}
			}
		break;
		case "senterLine2":
			if (introcode._direction == "backward") {
				if (key == "switchNumFirst") {
					introcode._introItems.splice(introcode._introItems.length - 1);
				} else {  //switchNumSecond
					switchConditionBack();
				}
			}
		break;
		case "variableDeclaration1":
			if (introcode._direction == "backward") {
				$('#panelBoxA').addClass('visibility-hidden');
				$('#address3').addClass('visibility-hidden');
			}
		break;
		case "svariableDeclaration1":
			if (introcode._direction == "backward") {
				$('#panelBoxB').addClass('visibility-hidden');
				$('#address4').addClass('visibility-hidden');
				introcode._introItems.splice(introcode._introItems.length - 1);
			}
		break;
		case "switchline1":
				if (introcode._direction == "backward") {
					introcode._introItems.splice(introcode._introItems.length - 1);
				}
		break;
		case "ifPanel":
			if (introcode._direction == "backward") {
				$('#panelBoxA').addClass('visibility-hidden');
				$('#address3').addClass('visibility-hidden');
			}
		break;
		case "switchPanel":
			if (introcode._direction == "backward") {
				introcode._introItems.splice(introcode._introItems.length - 1);
			}
		break;
		case "elseifline2":
			if (introcode._direction == "backward") {
				if (key == "line2") {
					if(parseInt($("#firstNum").text()) == 3) {
						introcode._introItems.splice(introcode._introItems.length - 5);
					} else {
						introcode._introItems.splice(introcode._introItems.length - 2);
					}
				}
				
			}
			
		break;
		case "elseifline3":
			if (introcode._direction == "backward") {
				if (key == "line3") {
					introcode._introItems.splice(introcode._introItems.length - 5);
				}
			}
		break;
		case "elseifline4":
			if (introcode._direction == "backward") {
				if(parseInt($("#firstNum").text()) > 3) {
					introcode._introItems.splice(introcode._introItems.length - 5);
				} else {
					//introcode._introItems.splice(introcode._introItems.length - 1);
				}
			}
		break;
		case "ifelseblock":
			if (introcode._direction == "backward") {
				if (key == "one") {
					if(parseInt($("#firstNum").text()) == 1) {
						introcode._introItems.splice(introcode._introItems.length - 4);
					} else {
						introcode._introItems.splice(introcode._introItems.length - 1);
					}
				}
			}
		break;
		case "pre2":
			if (introcode._direction == "backward") {
				introcode._introItems.splice(introcode._introItems.length - 1);
			}
		break;
		case "ssopLine1":
			if (introcode._direction == "backward") {
				$('#out4').addClass('opacity00');
				introcode._introItems.splice(introcode._introItems.length - 1);
			}
		break;
		case "ssopLine2":
			if (introcode._direction == "backward") {
				$('#out4').addClass('opacity00');
				introcode._introItems.splice(introcode._introItems.length - 1);
			}
		break;
		case "ssopLine3":
			if (introcode._direction == "backward") {
				$('#out4').addClass('opacity00');
				introcode._introItems.splice(introcode._introItems.length - 1);
			}
		break;
		case "ssopLine4":
		break;
		case "switchnum":
			if (introcode._direction == "backward") {
				if (key == "switchNumSecond") {
					switchConditionBack();
				} else {
					introcode._introItems.splice(introcode._introItems.length - 1);
				}
			}
		break;
		case "cas1":
				if (introcode._direction == "backward") {
					introcode._introItems.splice(introcode._introItems.length - 1);
				}
		break;
		case "cas2":
				if (introcode._direction == "backward") {
					introcode._introItems.splice(introcode._introItems.length - 1);
				}
		break;
		case "cas3":
				if (introcode._direction == "backward") {
					introcode._introItems.splice(introcode._introItems.length - 1);
				}
		break;
		}
	});
		
	introcode.onafterchange(function(targetElement) {
		
		
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		if (introcode._introItems[introcode._currentStep]["tooltipClass"] == "hide") {
			introcode._introItems[introcode._currentStep]["animation"] = "repeat";
		}
		
		if (introcode._introItems[introcode._currentStep]["isCompleted"]) {
			
			if (introcode._currentStep != 0 && targetElement.id !== "pre2") {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introcode._introItems[introcode._currentStep]["animation"] != "repeat") {
			introcode._introItems[introcode._currentStep]["isCompleted"] = true;
		}
		
		var elementId = targetElement.id;
		var key = introcode._introItems[introcode._currentStep]["key"];
		switch (elementId) {
		case "typingBox":
			
			if (introcode._currentStep == 0) {
				$('#typingBox1').fadeTo(1000, 1,function() {
					$('#typingBox2').fadeTo(1000, 1,function() {
						$('#typingBox3').fadeTo(1000, 1,function() {
							
						});
					});
				});
			} else /*if (introcode._currentStep == 25)*/ /*if (introcode._currentStep == 19)*/ {
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
				$('.introjs-prevbutton').hide();
				$(".introjs-tooltip").removeClass("hide");
				typingContent = 'This is a sample code for the given problem using <span class = ct-code-b-yellow>if-else-if</span>.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
			} else if (introcode._currentStep == 7 ) {
				$('#middle').removeClass('opacity00');
				stepNext();
			}
		break;
		case "enterLine1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introcode._direction == "forward") {
					$('#consoleDiv').removeClass('opacity00');
					stepNext();
				} else {
					stepNext();
				}
			});
		break;
		case "senterLine1":
			/*nextLine();*/
			if (introcode._direction == "forward") {
				introcode.insertOption(introcode._currentStep + 1, insertionIntro("outputDiv", "", "right", "hide", "switchOutPut"));
				introcode.insertOption(introcode._currentStep + 2, insertionIntro("senterLine2", "", "left", "hide"));
			}
			stepNext();
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
			$('.introjs-helperLayer').one('transitionend', function () {
				if (key == "print1") {
					/*$("#firstNum").html('&nbsp;');*/
					$("#firstNum").text('');
					$(".introjs-tooltip").removeClass("hide");
					typingContent = 'Enter an integer.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('#outputAValue1').removeClass('opacity00');
						$("#firstNum").attr('contentEditable',true);
						$('#firstNum').focus();
					});
				} else if (introcode._currentStep == stepTo) {
					$('.introjs-helperLayer').one('transitionend', function () {
						$('#out2').removeClass('opacity00');
						stepNext();
					});
				} else if (/*introcode._currentStep == 33*/ key == "switchOutPut") {
					$('.introjs-helperLayer').one('transitionend', function () {
						$(".introjs-tooltip").removeClass("hide");
						typingContent = 'Enter an integer.'; 
						typing('.introjs-tooltiptext', typingContent,function() {
							$('#outputAValue3').removeClass('opacity00');
							$("#firstNum1").attr('contentEditable',true);
							$('#firstNum1').focus();
						});
					 });
				} else {
					$('#out4').removeClass('opacity00');
							
						
						if (switchnumber < 4) {
							if (introcode._direction == "forward") {
								introcode.insertOption(introcode._currentStep + 1, insertionIntro("breakline"+ switchnumber, "", "right", "hide"));
							}
						} else {
							//scloseBrace1
							if (introcode._direction == "forward") {
								introcode.insertOption(introcode._currentStep + 1, insertionIntro("scloseBrace1", "", "right", "hide"));
							}
						}
						stepNext();
				}
			})
		break;
		case "elseifline1":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				/*$()*/
				if (key == "first") {
					typingContent = 'If the first <span class = "ct-code-b-yellow">if</span> condition is <span class = "ct-code-b-yellow">false</span>, then it goes to the <span class = "ct-code-b-yellow">else</span> part where another <span class = "ct-code-b-yellow">if</span> is present.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else /*if (introcode._currentStep == 14)*/ {
				$(".introjs-tooltip").removeClass("hide");
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
			if (introcode._direction == "forward") {
				introcode.insertOption(introcode._currentStep + 1, insertionIntro("switchnum", "", "right", "hide", "switchNumSecond"));
			}
			enterLine('#addressValue4','#firstNum1');
		break;
		case "variableDeclaration1":
			stepNext();
		break;
		case "svariableDeclaration1":
			if (introcode._direction == "forward") {
				introcode.insertOption(introcode._currentStep + 1, insertionIntro("switchPanel", "", "left", "hide"));
			}
			stepNext();
		break;
		case "switchline1":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introcode._direction == "forward") {
					introcode.insertOption(introcode._currentStep + 1, insertionIntro("switchnum", "", "right", "", "switchNumFirst"));
				}
				
				stepNext();
				
			})
		break;
		case "ifPanel":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				$('#panelBoxA').removeClass('visibility-hidden');
				$('#address3').removeClass('visibility-hidden');
				typingContent = 'Here, int variable <span class = ct-code-b-yellow>country_id</span> occupies 2 bytes in the memory.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "switchPanel":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$(".introjs-tooltip").removeClass("hide");
				$('#panelBoxB').removeClass('visibility-hidden');
				$('#address4').removeClass('visibility-hidden');
				typingContent = 'Here, int variable <span class = ct-code-b-yellow>country_id</span> occupies 2 bytes in the memory.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					//if (introcode._direction == "forward") {
						introcode.insertOption(introcode._currentStep + 1, insertionIntro("senterLine1", "", "right", "hide"));
					//}
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "elseifline2":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				if (key == "first") {
					typingContent = 'Here, when the <span class = "ct-code-b-yellow">if</span> condition is <span class = "ct-code-b-yellow">false</span>, then it goes to the <span class = "ct-code-b-yellow">else</span> part where another <span class = "ct-code-b-yellow">if</span> is present.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else /*if (introcode._currentStep == 17)*/ {
					$(".introjs-tooltip").removeClass("hide");
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
				if (key == "first") {
					typingContent = 'Here, when the <span class = "ct-code-b-yellow">if</span> condition is <span class = "ct-code-b-yellow">false</span>, then it goes to the <span class = "ct-code-b-yellow">else</span> part.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else/* if (introcode._currentStep == 19)*/ {
					$(".introjs-tooltip").removeClass("hide");
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
			if (key == "first") {
				$('.introjs-helperLayer').one('transitionend', function () {
					typingContent = 'If all the conditions are <span class = "ct-code-b-yellow">false</span>, then finally last <span class = "ct-code-b-yellow">else</span> part is executed.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			} else /*if (introcode._currentStep == 21)*/ {
				 $('.introjs-helperLayer').one('transitionend', function () {
					 $(".introjs-tooltip").removeClass("hide");
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
				$(".introjs-tooltip").removeClass("hide");
				if (introcode._currentStep == 2) {
					typingContent = 'This is the <span class = "ct-code-b-yellow">logic</span> used for the selection of statements by using conditions.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-tooltiptext').append('<div id = "append1"></div>');
						typingContent = 'In <span class = "ct-code-b-yellow">if-else-if</span>, <br>first <span class = "ct-code-b-yellow">if</span> condition is checked,<br>if it is <span class = "ct-code-b-yellow">true</span>'
										+' it executes the statements within <span class = "ct-code-b-yellow">if</span>,<br> and then the control automatically goes to the end of <span class = "ct-code-b-yellow">if-else-if</span>.'
						typing('#append1', typingContent,function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				} else if (introcode._currentStep == 13) {
					$(".animation-nextbtn").remove();
					typingContent = 'Now, control enters into <span class = "ct-code-b-yellow" style = "white-space: nowrap;">if-else-if</span> block.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				}
			});
		break;
		
		case "pre2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (key == "switchShow") {
					$('.introjs-prevbutton').hide();
					typingContent = '<span class = "ct-code-b-yellow">switch-case</span> is an alternative for <span class = "ct-code-b-yellow">if-else-if</span>'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						
						introcode.insertOption(introcode._currentStep + 1, insertionIntro("switchline1", "", "right", "hide"));
						
						$('.introjs-nextbutton').show();
						
						
					});
				} else /*if (introcode._currentStep == 29)*/ if (key == "switchElse") {
					//$('.introjs-nextbutton').show();
					if (introcode._direction == "forward") {
						introcode.insertOption(introcode._currentStep + 1, insertionIntro("svariableDeclaration1", "", "right", "hide"));
					}
					stepNext();
				}
			});
		break;
		case "closeBrace4":
			/*nextLine();*/
			stepNext();
		break;
		case "closeBrace":
			/*nextLine();*/
			
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("typingBox", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 2, insertionIntro("pre2", "", "left", "", "switchShow"));
			
			stepNext();
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
				if (/*introcode._currentStep == 28*/ key == "switchNumFirst") {
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
								if (introcode._direction == "forward") {
									introcode.insertOption(introcode._currentStep + 1, insertionIntro("pre2", "", "left", "hide", "switchElse"));
								}
								
								$('.introjs-nextbutton, .introjs-prevbutton').show();
								
							});
						});
					});
				} else if (/*introcode._currentStep == 35*/ key == "switchNumSecond") {
					$(".introjs-tooltip").removeClass("hide");
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
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				$('.introjs-tooltip').css('min-width', '125px').removeClass('hide');
				$('.introjs-tooltiptext').append('Click to restart.')
				$("#restartBtn").click(function() {
					location.reload();
				});
			});
		break;
		case "scloseBrace1":
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("restartBtn", "", "left", "hide"));
			stepNext();
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
		"typing_interval":1,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
		introcode._introItems[introcode._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}

function animate3() {
	$('#ifelseDiv').removeClass('opacity00');
	$('.animation-nextbtn').remove(); 
	introcode.nextStep();
}


function animate4() {
	$('#switchcaseDiv').removeClass('opacity00');
	$('.animation-nextbtn1, .animation-nextbtn').remove(); 
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
		
function switchConditionBack() {
	
	if (introcode._direction == "backward") {
		if (switchnumber < 4) {
			introcode._introItems.splice(introcode._introItems.length - 2);
		} else {
			introcode._introItems.splice(introcode._introItems.length - 2);
		}
	}
	
}

function checkCondition1() {
	var if1 = $("#firstNum").text();
	if (if1 == 1) {
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "true1" class = "opacity00 ct-code-b-yellow position">true</span>');
		$('#true1').removeClass('opacity00');
		TweenMax.fromTo("#true1",0.5,{rotationX:-90},{delay : 0.5, rotationX: 0, opacity: 1,onComplete:function() {
			$(".introjs-prevbutton, .introjs-nextbutton").show();
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("sopLine1", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 2, insertionIntro("outputDiv", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 3, insertionIntro("closeBrace4", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 4, insertionIntro("closeBrace", "", "right", "hide"));
				stepTo = introcode._currentStep + 2;
		}});
	} else { 
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "false1" class = "opacity00 ct-code-b-yellow position">false</span>');
		$('#false1').removeClass('opacity00');
		TweenMax.fromTo("#false1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity: 1,onComplete:function() {
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("elseifline2", "", "right", "hide", "line2"));
			stepTo = introcode._currentStep + 1;
			$(".introjs-prevbutton, .introjs-nextbutton").show();
		}});
	} 
}
function checkCondition2() {
	var if1 = $("#firstNum").text();
	if (if1 == 2) {
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "true1" class = "opacity00 ct-code-b-yellow position">true</span>');
		$('#true1').removeClass('opacity00');
		TweenMax.fromTo("#true1",0.5,{rotationX:-90},{delay : 0.5, rotationX: 0,opacity:1,onComplete:function() {
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("sopLine2", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 2, insertionIntro("outputDiv", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 3, insertionIntro("closeBrace4", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 4, insertionIntro("closeBrace", "", "right", "hide"));
			stepTo = introcode._currentStep + 2;
			$(".introjs-prevbutton, .introjs-nextbutton").show();
		}});
	} else { 
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "false1" class = "opacity00 ct-code-b-yellow position">false</span>');
		$('#false1').removeClass('opacity00');
		TweenMax.fromTo("#false1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("elseifline3", "", "right", "hide", "line3"));
			stepTo = introcode._currentStep + 1;
			$(".introjs-prevbutton, .introjs-nextbutton").show();
		}});
	} 
}

function checkCondition3() {
	var if1 = $("#firstNum").text();
	if (if1 == 3) {
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "true1" class = "opacity00 ct-code-b-yellow position">true</span>');
		$('#true1').removeClass('opacity00');
		TweenMax.fromTo("#true1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("sopLine3", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 2, insertionIntro("outputDiv", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 3, insertionIntro("closeBrace4", "", "right", "hide"));
			introcode.insertOption(introcode._currentStep + 4, insertionIntro("closeBrace", "", "right", "hide"));
			stepTo = introcode._currentStep + 2;
			$(".introjs-prevbutton, .introjs-nextbutton").show();
		}});
	} else { 
		$('#firstexp').append('<br><span id = firstexp1>returns <span id = "false1" class = "opacity00 ct-code-b-yellow position">false</span>');
		$('#false1').removeClass('opacity00');
		TweenMax.fromTo("#false1",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function() {
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("elseifline4", "", "right", "hide"));
			stepTo = introcode._currentStep + 1;
			$(".introjs-prevbutton, .introjs-nextbutton").show();
		}});
	} 
}

function checkCondition4() {
	
	introcode.insertOption(introcode._currentStep + 1, insertionIntro("sopLine4", "", "right", "hide"));
	introcode.insertOption(introcode._currentStep + 2, insertionIntro("outputDiv", "", "right", "hide"));
	introcode.insertOption(introcode._currentStep + 3, insertionIntro("closeBrace4", "", "right", "hide"));
	introcode.insertOption(introcode._currentStep + 4, insertionIntro("closeBrace", "", "right", "hide"));
	$(".introjs-nextbutton, .introjs-prevbutton").show();
	stepTo = introcode._currentStep + 2;
	
}

function switchCondition() {
	switchnumber = parseInt($('#firstNum1').text());
	if (switchnumber < 4) {
		$('#n'+switchnumber).effect("highlight", {color: 'blue'}, 2000, function() {
			dynamicStep2("#cas"+switchnumber,"#ssopLine"+switchnumber, switchnumber);
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	} else {
		dynamicStep3();
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}
}

function outputShow(text) {
	$('#outputAValue2').empty();
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		setTimeout(function() {
			$('#outputAValue2').append('<span id ="out2" class = "opacity00">'+ text +'</span>');
			stepNext();
		}, 1000);
	});
}

function mySwitchsopLine(text) {
	$('#outputAValue4').empty();
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		if (introcode._direction == "forward") {
			introcode.insertOption(introcode._currentStep + 1, insertionIntro("outputDiv", "", "right", "hide"));
		}
		setTimeout(function() {
			$('#outputAValue4').append('<span id ="out4" class = "opacity00">'+ text +'</span>');
			stepNext();
		}, 1000);
	});
}

function myCase(text) {
	$('.introjs-nextbutton').hide();
	$(".introjs-helperLayer").one("transitionend", function() {
		typingContent = '<span class=ct-code-b-yellow>switch-case</span> control comes to this case as the country_id is <span class=ct-code-b-yellow>'+text+'</span>'; 
		typing('.introjs-tooltiptext', typingContent,function() {
			$('.introjs-nextbutton, .introjs-prevbutton ').show();
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
		$(".introjs-tooltip").removeClass("hide");
		typingContent = 'When the switch-case encounters <span class=ct-code-b-yellow>break;</span> statement, control comes out of the loop.'; 
		typing('.introjs-tooltiptext', typingContent,function() {
			if (introcode._direction == "forward") {
				introcode.insertOption(introcode._currentStep + 1, insertionIntro("scloseBrace1", "", "right", "hide"));
			}
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}

function enterLine(id,id1) {
	$('.introjs-nextbutton').hide();
	$('.introjs-helperLayer ').one('transitionend', function() {
		$(".introjs-tooltiptext div").remove()
		$(".introjs-tooltip").removeClass("hide");
		$(".introjs-tooltiptext").append("<div></div>");
		var text = "Here, <span class='ct-code-b-yellow'>scanf()</span> with the conversional character %d reads an integer variable from the keyboard and assigns the value to variable <span class='ct-code-b-yellow'>country_id</span>."
		typing($(".introjs-tooltiptext div:last-child"), text,function() {
			$("id").text($('id1').text());
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	});
}

function stepNext() {
	if (introcode._direction == "forward") {
		setTimeout(function() {
			introcode.nextStep();
		}, 800)
	} else {
		setTimeout(function() {
			introcode.previousStep();
		}, 800)
	}
}



function insertionIntro(element, msg, position, tooltip, action) {
	
	var insert = {};
	if (typeof element != undefined) {
		insert["element"] = "#"+ element;
	}
	if (typeof msg != undefined) {
		insert["intro"] = msg;
	}
	if (typeof position != undefined) {
		insert["position"] = position;
	}
	if (typeof tooltip != undefined) {
		insert["tooltipClass"] = tooltip;
	}
	if (typeof action != undefined) {
		insert["key"] = action;
	}
	return insert;
	
	/*intro.insertOption(intro._currentStep + 4, insertionIntro("restartBtn", "", "right", ""));*/
}


