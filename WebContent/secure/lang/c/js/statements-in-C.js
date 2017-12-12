var statementsInCReady = function() {
	introGuide();
	$('#simpleDiv').click(function() {
		action = "simple";
		$('#simpletextDiv').removeClass('visibility-hidden');
		dynamicSteps("simple");
		introcode.nextStep();
		$('#simpleDiv').addClass('disabled',true);
		$('#compoundDiv').addClass('disabled',true);
		$('#controlDiv').addClass('disabled',true);
	});
	$('#compoundDiv').click(function() {
		action = "compound";
		$('#simpletextDiv').removeClass('visibility-hidden');
		dynamicSteps("compound");
		introcode.nextStep();
		$('#simpleDiv').addClass('disabled',true);
		$('#compoundDiv').addClass('disabled',true);
		$('#controlDiv').addClass('disabled',true);
	});
	$('#controlDiv').click(function() {
		action = "control";
		$('#simpletextDiv').removeClass('visibility-hidden');
		dynamicSteps("control");
		introcode.nextStep();
		$('#simpleDiv').addClass('disabled',true);
		$('#compoundDiv').addClass('disabled',true);
		$('#controlDiv').addClass('disabled',true);
	});
}

var simple;
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
			element : '#typingbox',
			intro : '',
			position : 'right',
			tooltipClass : "hide"
		},
		{
			element : '#statetypeDiv',
			intro : '',
			position : 'right',
			tooltipClass : "hide"
		}
		]
	});
	introcode.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) 
		{
		case "typingbox":
		$('.introjs-nextbutton').hide();
		$('#typingbox').append('<span class = "margin10">A <span class = color-green>statement</span> is an ' 
				+ '<span class = color-green>instruction</span> to the computer to ' 
				+ 'perform a <span class = color-green>specific action.</span><span id = typing1></span>').addClass("animated fadeIn").one("animationend", function() {
					$('#typing1').append('<br>A <span class = color-green>statement</span> is a collection of variables,'
					+ ' operators and data types finally ending with a semicolon.').addClass("animated fadeIn").one("animationend", function() { 
					$('.introjs-tooltip').removeClass("hide");
					typingContent = 'Let us see the types of statements.'; 
					typing('.introjs-tooltiptext', typingContent,function() {
						$('.introjs-nextbutton').show();
						$('#statetypeDiv').removeClass('visibility-hidden');
					});
				});
			});
		break;
		case "statetypeDiv":
		$('.introjs-helperLayer').one('transitionend', function() {
			if(introcode._currentStep == 1) {
				$('.introjs-nextbutton').hide();
				$('.type-name').fadeTo(1000,1,function() {
					$('#simpleDiv').slideDown('1000',function() {
						$('#compoundDiv').slideDown('1000',function() {
							$('#controlDiv').slideDown('1000',function() {
								$('.introjs-tooltip').removeClass("hide");	
								typingContent = 'Click on each of the types to know more about them.'; 
								typing('.introjs-tooltiptext', typingContent,function() {
									$('#simpleDiv').removeClass('disabled',true);
									$('#compoundDiv').removeClass('disabled',true);
									$('#controlDiv').removeClass('disabled',true);
								});
							});
						});
					});
				});
			} else {
				$('#simDiv').empty();
				$('#textDiv').empty();
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltip').removeClass("hide");
				typingContent = 'Click on each of the types to know more about them.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('#simpleDiv').removeClass('disabled',true);
					$('#compoundDiv').removeClass('disabled',true);
					$('#controlDiv').removeClass('disabled',true);
				});
			}
		});
		break;
		case "simDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('#simDiv').addClass('introjs-showElement');  
				var action =  introcode._introItems[introcode._currentStep].action;
					if (action == 'simple') {
						typingContent = '<div class = "col-xs-offset-4 col-xs-4" id = "simheading">Simple Statement</div>'
						typing('#simDiv', typingContent,function() {
							$('#simDiv').append('<div id = "exampleDiv" class = "col-xs-12"></div>');
							typingContent = '<span class = "margin10">Example:<span id = "expSimple1" class = "margin10 col-xs-offset-1 col-xs-10" >' 
							+'a = b<span class = "opacity00 ct-code-b-red" id = "simcommaDiv">;</span><span class = "ct-code-b-green" id = "expSimple2">'
							+' // This is an expression. </span></span></span>'
							typing('#exampleDiv', typingContent,function() {
								$('.introjs-tooltip').removeClass("hide");
								typingContent = 'When we place a semicolon(;) at the end of an expression,<span id = "simtext"></span>'; 
								typing('.introjs-tooltiptext', typingContent,function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove();
										$('#expSimple2').remove();
										$('#simcommaDiv').fadeTo(1000,1,function() {
											$('#simcommaDiv').effect("highlight", {color: 'yellow'}, 1000, function() {
												$('#simDiv').append('<div id = "example2Div" class = "col-xs-12"></div>');
												typingContent = '<br> it is called a simple statement.'; 
												typing('#simtext', typingContent,function() {	
													$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
													$('.animation-nextbtn').click(function() { 
														$('.animation-nextbtn').remove();
														$('.introjs-tooltiptext').append('<div id = exp></div>');
														typingContent = 'Let us see a few more examples.'; 
														typing('#exp', typingContent,function() {
															$('#example2Div').append('<span id = "expSimple3" class = "margin20 col-xs-offset-1 col-xs-11 opacity00" > x = 5<span class = "ct-code-b-red" id = "simcomma2Div">;</span></span>'
																	+'<br><span id = "expSimple4" class = "margin20 col-xs-offset-1 col-xs-11 opacity00" > a = b + 10<span class = "ct-code-b-red" id = "simcomma3Div">;</span></span>');
															$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
															$('.animation-nextbtn').click(function() { 
																$('.animation-nextbtn').remove();	
																dynamicSteps1();
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					} else if (action == 'compound') {
						typingContent = '<div class = "col-xs-offset-4 col-xs-6" id = "simheading">Compound Statement</div>'
						typing('#simDiv', typingContent,function() {
						$('#simDiv').append('<div id = "exampleDiv" class = "col-xs-12 margin10 padding0"></div>');
							typingContent = 'Let us consider an example:'
							typing('#exampleDiv', typingContent,function() {
							$('#exampleDiv').append('<div id = "comDiv"><span id = "comstate">\t<span id = "openDiv">'
									+'<span id = "openbrace" class = "opacity00">{</span></span><br><span id = "firstexp" class = "opacity00 ">'
									+'\t\tc = a + b;</span><span id = "firststate" class = "opacity00 ct-code-b-green"> //This is a simple statement.</span><br>'
									+'<span id = "secondexp" class = "opacity00">\t\tx = 10;</span> <span id = "secondstate" class = " ct-code-b-green opacity00">'
									+'//This is another simple statement.</span><br>\t<span id = "closeDiv"><span id = "closebrace" class = "opacity00">}</span></span></span> ' 
									+'<span id = "thirdstate" class = "ct-code-b-green opacity00"> //compound statement</span></div>');
							$('#firstexp').fadeTo(20,1,function() {
								$('#firststate').fadeTo(1000,1,function() {
									$('#secondexp').fadeTo(1000,1,function() {
										$('#secondstate').fadeTo(1000,1,function() {
											$('.introjs-tooltip').removeClass('hide');
											typingContent = 'When one or more simple statements are enclosed within braces<span id = comtext></span>'
											typing('.introjs-tooltiptext', typingContent,function() {	
												$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
												$('.animation-nextbtn').click(function() { 
													$('.animation-nextbtn').remove();	
													dynamicSteps3();
												});
											});
										});
									});
								});
							});
						});
					});
				} else if (action == 'control') {
					typingContent = '<div class = "col-xs-offset-4 col-xs-4 margin10" id = "simheading">Control Statement</div>'
					typing('#simDiv', typingContent,function() {
						$('#simDiv').append('<div id = "exampleDiv" class = "col-xs-12 margin20"></div>');
						typingContent = 'For example:'
						typing('#exampleDiv', typingContent,function() {
						$('#exampleDiv').append('<br><div id = "comDiv" class="col-xs-12 margin10">' 
							+'<span id = "ifDiv" class = "col-xs-offset-1 col-xs-2">if(i < 4)</span> {' 
							+'<span id = printDiv class = "col-xs-offset-2 col-xs-10">printf("I am inside an if-block");</span>'
							+'<span id = closeBrace class =" col-xs-offset-1 col-xs-10">}</span></div>');
						$('.introjs-tooltip').removeClass("hide");
						typingContent = 'Let us consider an example.'; 
						typing('.introjs-tooltiptext', typingContent,function() {
							$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
							$('.animation-nextbtn').click(function() { 
								$('.animation-nextbtn').remove();
									dynamicSteps2();
								 });
							});
						});
					});
				}
			});
		break;
		
		case "example2Div":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('#expSimple3').fadeTo(1000,1.2,function() {
					$('#expSimple4').fadeTo(1500,1,function() {
						setTimeout(function() {
							introcode.nextStep();
						},1000);
					});
				});
			});
		break;
		
		case "openDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('#openbrace').fadeTo(1000,1,function() {
					 setTimeout(function() {
						introcode.nextStep();
					},1000);
				});
			});
		break;
		
		case "closeDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('#closebrace').fadeTo(1000,1,function() {
					setTimeout(function() {
						introcode.nextStep();
					},1000);
				});
			});
		break;
		
		case "comstate":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('#comstate').effect( "highlight", {color:"pink"}, 3000);
				$('#thirdstate').fadeTo(1000,1,function() {
					$('#thirdstate').addClass('position');
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').text('When one or more simple statements are enclosed within braces,');
					$('.introjs-tooltiptext').append('<div id = typing10></div>');
					typingContent = 'it is called as <span class = "color-yellow">compound statement</span> or a <span class = color-yellow>block</span>.'; 
					typing('#typing10', typingContent,function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "ifDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass("hide");
				typingContent = 'This is the <span class = "color-yellow">if-condition</span> which will determine when to execute the block of code that follows it.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "printDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				$('.introjs-tooltip').removeClass("hide");
				typingContent = 'This statement will execute only when <br><span class = "color-yellow">i < 4</span> condition evaluates to <span class = "color-yellow">true</span>.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "textDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
			$('.introjs-nextbutton').hide();
			$('#textDiv').addClass('introjs-showElement');  
			var action =  introcode._introItems[introcode._currentStep].action;
			if (action == 'simple') {
				typingContent = 'An expression which ends with a semicolon(;) is called a simple statement. <span id=nextbuttonDiv class= "opacity00"></span>' 
				typing('#textDiv', typingContent,function() {
					$('#nextbuttonDiv').append('<a style="background-color:green" class="introjs-button animation-nextbtn" onclick = "animate4()">Next &#8594;</a>');
					$('#nextbuttonDiv').fadeTo(1000,1,function() {
					});
				}); 
			} else if (action == 'compound') {
				$('#thirdstate').removeClass('position');
				$('#textDiv').append('<span id = defDiv class = "margin20"></span>');
				typingContent = 'The individual statements can be expressions, compound statements, or control statements. <span id=nextbuttonDiv class= "opacity00"></span>'
				typing('#defDiv', typingContent,function() {
					$('#nextbuttonDiv').append('<span><a style="background-color:green" class="introjs-button animation-nextbtn" onclick = "animate4()">Next &#8594;</a></span>');
					$('#nextbuttonDiv').fadeTo(1000,1,function() {
					});
				});
			} else if (action == 'control') {
				$('#textDiv').append('<div id = defDiv style = "display:inline-block;"></div>');
				typingContent = '<span>Control statements are used to create special program features such as logical tests, loops and branches.</span>' 
				+' <span id=nextbuttonDiv class= "opacity00"><a style="background-color:green" class="introjs-button animation-nextbtn " onclick = "animate4()">Next &#8594;</a></span>'
				typing('#defDiv', typingContent,function() {
					$('#nextbuttonDiv').removeClass('opacity00');
				});
			}
		});
		break;
		case "simpletextDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
			$('.introjs-nextbutton').hide();
			var action =  introcode._introItems[introcode._currentStep].action;
			$('#simpletextDiv').addClass('introjs-showElement');  
			if (action == 'simple') {
				setTimeout(function() {
					introcode.nextStep();
				},2000);
			} else if (action == 'compound') {
				setTimeout(function() {
					introcode.nextStep();
				},2000);
			} else if (action == 'control') {
				setTimeout(function() {
					introcode.nextStep();
				},2000);
			}
		});
		break;
		}
	});		
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
}

function dynamicSteps2() {
	var dynamicStep = {
	    "element" : '#ifDiv',
	    "position" : "left",
	    "intro" : "",
	    "tooltipClass" : "hide",
	}
	introcode.insertOption(introcode._currentStep + 1, dynamicStep);
	var dynamicStep = {
		"element" : "#printDiv",
	    "position" : "left",
	    "intro" : "",
	    "tooltipClass" : "hide",
	}
	introcode.insertOption(introcode._currentStep + 2, dynamicStep);
	introcode.nextStep();
}

function dynamicSteps1() {
	var dynamicStep = {
	    "element" : '#example2Div',
	    "position" : "left",
	    "intro" : "",
	    "tooltipClass" : "hide",
	}
	introcode.insertOption(introcode._currentStep + 1, dynamicStep);
	introcode.nextStep();
}

function dynamicSteps3() {
	var dynamicStep = {
	    "element" : '#openDiv',
	    "position" : "left",
	    "intro" : "",
	    "tooltipClass" : "hide",
	}
	introcode.insertOption(introcode._currentStep + 1, dynamicStep);
	var dynamicStep = {
		"element" : "#closeDiv",
	    "position" : "left",
	    "intro" : "",
	    "tooltipClass" : "hide",
	}
	introcode.insertOption(introcode._currentStep + 2, dynamicStep);
	var dynamicStep = {
		"element" : "#comstate",
	    "position" : "right",
	    "intro" : "",
	    "tooltipClass" : "hide",
	}
	introcode.insertOption(introcode._currentStep + 3, dynamicStep);
	introcode.nextStep();	
}

function animate4() {
	$('.animation-nextbtn').remove(); 
	introcode.nextStep();
}

function dynamicSteps(action) {
	var dynamicStep = {
	    "element" : '#simDiv',
	    "position" : "right",
	    "intro" : "",
	    "tooltipClass" : "hide",
	    action :action,
	}
	introcode.insertOption(introcode._currentStep + 1, dynamicStep);
	        
	var dynamicStep = {
		"element" : "#textDiv",
	    "position" : "right",
	    "intro" : "",
	    "tooltipClass" : "hide",
	    action :action,
	}
	introcode.insertOption(introcode._currentStep + 2, dynamicStep);
	
	var dynamicStep = {
		"element" : "#simpletextDiv",
	    "position" : "right",
	    "intro" : "",
	    "tooltipClass" : "hide",
	    action :action,
	}
	introcode.insertOption(introcode._currentStep + 3, dynamicStep);
		
	var dynamicStep = {
	    "element" : "#statetypeDiv",
	    "position" : "right",
	    "tooltipClass" : "hide",
	}
    $('.introjs-nextbutton').hide();
    introcode.insertOption(introcode._currentStep + 4, dynamicStep);
}

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : 1,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}