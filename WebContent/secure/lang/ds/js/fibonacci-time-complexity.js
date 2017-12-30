var fibonacciTimeComplexityFunction = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if(e.keyCode == 13) {
			e.preventDefault();
		}
	});
	$("#restart").click(function() {
		location.reload();
	});
	
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[/* {
			element : '#infoDiv',
			intro : "",
			tooltipClass : 'hide'
		},  */{
			element : '#divTable',
			intro : '',
			animateStep : 'codeReveledAction'
		}, {
			element : '#divTable',
			intro : '',
			animateStep : 'explanationOfUnits',
			tooltipClass : 'hide'
		}, {
			element : '#finalDiv',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : "#restart",
			intro : '',
			position : 'right'
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
				$("#line1").fadeTo(1000, 1, function() {
					$("#line2").fadeTo(1000, 1, function() {
						$("#infoDiv").addClass('z-index9999999');
						$('#nextButton').removeClass("opacity00");
						$('.user-btn').click(function() {
							$('.user-btn').remove();
								introjs.nextStep();
						});
					});
				});
			break;
		case 'divTable':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'codeReveledAction':
			//	$(".introjs-helperLayer").one('transitionend', function() {
				$(".introjs-tooltip").hide();
				TweenMax.to($("#divTable"), 1.5, {opacity: 1, onComplete: function() {
					codeLinesReveledFunction(1);
				}});
			//	});
				break;
			case 'explanationOfUnits':
				$("#codeLine1").css("background", "#c0e1fb");
				svgAppend($('#divTable'), 'svg');
				svgMarkerAppend($('#svg'), 'marker');
				svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine1', '#unitFirstLineText1', '#svg', 'svgLine1', 'marker', function() {	
					TweenMax.to($("#unitFirstLineTd1, #unitSecondLineTd1"), 1, {opacity: 1, onComplete: function() {
						$("#unitSecondLineText1").popover({
							placement: 'right',
							html: true,
							trigger: 'focus',
							content: '<div id="popover1"></div>',
						}).popover('show');
						$(".popover").css({"top" : "0px;"});
						var text = "<span class='step-color-css'>Step 1 :</span> This is the function header and no operation is involved so "+
						"the <span class='ct-code-teal'>unit of time</span> count is <span class='ct-code-b-yellow'>0</span>.";
						typing("#popover1", text, function() {
							$('#popover1').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
									'<span class="introjs-button user-btn" onclick="secondStepAnimation()">Next &#8594;</span></div>');
						});
					}});
				});
				
				break;
			}
			break;
		case 'finalDiv':
			$("#unitSecondLineText14").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#finalDiv"), 1.5, {opacity: 1, onComplete: function() {
					$("#finalDiv").addClass("z-index9999999");
					TweenMax.to($("#finalLine1"), 1.5, {opacity: 1, onComplete: function() {
						$("#unitSecondLineText14").effect('highlight',{color:'#da5805'}, 1500, function() {
							$("#alphabetN1").effect('highlight',{color:'#da5805'}, 1500, function() {
								tweenmaxAnimation("#alphabetN1", "#alphabetN2", function() {
									setTimeoutFunction();
								});
							});
						});
					}});
				}});
			});
			break;
		case "restart":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restart").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					});
				});
			break;
		}
	});
	introjs.start();
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	}, 2000);
}

function popoverAppendFunction(selector, divIdNum) {
	$(selector).popover({
		placement: 'right',
		html: true,
		trigger: 'focus',
		content: '<div id="popover' + divIdNum +'"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
}

function codeLinesReveledFunction(i) {
	$("#stepNo" + i).fadeTo("1", 1);
	$("#codeLine" + i).fadeTo("1", 1, function() {
		if (i < ($("tr td:nth-child(2)").length - 1)) {
			codeLinesReveledFunction(++i);
		} else {
			$(".introjs-tooltip").show();
			var text = "This is the iterative code to find the fibanocci series of a given number.<b/>" + 
			"<ul><li>Now find the <span class='ct-code-b-yellow'>time complexity</span> of this function.</li>"+
			"<li>The total number of units is measured depending upon the number of <span class='ct-code-b-yellow'>operations</span> "+
			"done in the code.</li><li>Here the code contains if-else statement. So we have to calculate "+
			"<span class='ct-code-b-yellow'>time complexity</span> for two conditions.</li></ul>";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-btn">Next &#8594;</a>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					$("#ifCondition").effect('highlight', {color: '#da5805'}, 1000);
					transferEffectFunction("#ifCondition", "#unitsForLessThanOne", function() {
						$("#unitsForLessThanOne").removeClass("opacity00");
						$("#elseCondition").effect('highlight', {color: '#da5805'}, 1000);
						transferEffectFunction("#elseCondition", "#unitsForGreaterThanOne", function() {
							$("#unitsForGreaterThanOne").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		}
	});
}

function secondStepAnimation() {
//	$("#codeLine1").css("background-color","");
	$("#codeLine2").css("background", "#c0e1fb");
	$("#unitSecondLineText1").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitFirstLineText2', '#svg', 'svgLine2', 'marker', function() {	
		$("#operator1, #operator2").addClass("blinking").one('animationend', function() {
			TweenMax.to($("#unitFirstLineTd2, #unitSecondLineTd2"), 1, {opacity: 1, onComplete: function() {
				$("#operator1, #operator2").removeClass("blinking");
				$("#unitSecondLineText2").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover2"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
				var text = "<span class='step-color-css'>Step 2 :</span> <span class='ct-code-teal'>Two</span> "+
				"<span class='ct-code-b-yellow'>=</span> operators are used in this statement, so it takes "+
				"<span class='ct-code-b-yellow'>2</span> <span class='ct-code-teal'>unit of time</span>.";
				typing("#popover2", text, function() {
					$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="thirdStepAnimation()">Next &#8594;</span></div>');
				});
			}});
		});
	});
}

function thirdStepAnimation() {
//	$("#codeLine2").css("background-color","");
	$("#codeLine3").css("background", "#c0e1fb");
	$("#unitSecondLineText2").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3', '#unitFirstLineText3', '#svg', 'svgLine3', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd3, #unitSecondLineTd3"), 1, {opacity: 1, onComplete: function() {
			/* $("#operator1").addClass("blinking").one('animationend', function() {
				$("#operator1").removeClass("blinking"); */
				popoverAppendFunction("#unitSecondLineText3", 3);
				var text = "<span id='textTooptipForIf'><span class='step-color-css'>Step 2 :</span> Only one operator "+
				"<span class='ct-code-b-yellow'><=</span> is used in this statement, it takes "+
				"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.</span>";
				typing("#popover3", text, function() {
					$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<a class="introjs-button user-btn">Next &#8594;</a>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#textTooptipForIf").after("<br><span id='textForNote'>Note: If <span class='ct-code-b-yellow'>if</span> condition "+
							"evaluates <span class='ct-code-teal'>true</span> then control enters into <span class='ct-code-b-yellow'>if</span> "+
							"statement otherwise enters into <span class='ct-code-b-yellow'>else</span> statement.");
						typing("#textForNote", $("#textForNote").html(), function() {
							$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
									'<span class="introjs-button user-btn" onclick="fourthStepAnimation()">Next &#8594;</span></div>');
						});
					});
				});
		//	});
		}});
	});
}

function fourthStepAnimation() {
//	$("#codeLine3").css("background-color","");
	$("#codeLine4").css("background", "#c0e1fb");
	$("#unitSecondLineText3").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine4', '#unitFirstLineText4', '#svg', 'svgLine4', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd4, #unitSecondLineTd4"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText4", 4);
			var text = "<span class='step-color-css'>Step 4 :</span> The <span class='ct-code-b-yellow'>return</span> statement always take "+
			"<span class='ct-code-b-yellow'>1</span> unit of time.";
			typing("#popover4", text, function() {
				$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="fifthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function fifthStepAnimation() {
//	$("#codeLine4").css("background-color","");
	$("#codeLine5").css("background", "#c0e1fb");
	$("#unitSecondLineText4").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine5', '#unitFirstLineText5', '#svg', 'svgLine5', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd5, #unitSecondLineTd5"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText5", 5);
			var text = "<span class='step-color-css'>Step 5 :</span> No operation is involved in this statement. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover5", text, function() {
				$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="sixthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

/* function sixthStepAnimation() {
//	$("#codeLine5").css("background-color","");
	$("#codeLine6").css("background", "#c0e1fb");
	$("#unitSecondLineText5").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitFirstLineText6', '#svg', 'svgLine6', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd6, #unitSecondLineTd6"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText6", 6);
			var text = "<span class='step-color-css'>Step 6 :</span> No operation is involved in <span class='ct-code-b-yellow'>else</span> "+
			"statement. So the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover6", text, function() {
				$('#popover6').append('<div class="popover-height"><span class="introjs-button user-btn" onclick="seventhStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
} */

function sixthStepAnimation() {
//	$("#codeLine6").css("background-color","");
	$("#codeLine6").css("background", "#c0e1fb");
	$("#unitSecondLineText5").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitFirstLineText6', '#svg', 'svgLine6', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd6, #unitSecondLineTd6"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText6", 6);
			var text = "<span id='popover6Text1'><span class='step-color-css'>Step 6 :</span><br/>This for loop involves three instructions which are "+
			"<span class='ct-code-b-yellow'>initialization</span>, "+
			"<span class='ct-code-b-yellow'>condition</span> and <span class='ct-code-b-yellow'>increment</span> part.</span>"
			typing("#popover6", text, function() {
				$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					sixthStepAnimationSecondStep();
				});
			});
		}});
	});
}

function sixthStepAnimationSecondStep() {
	$("#popover6Text1").after("<span><ul><li id='initLine'><span class='for-loop-li-css'>i = 2</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
	typing("#initLine", $("#initLine").html(), function() {
		$("#forInit").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit", "#initUnitNo", function() {
				$("#initUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
					$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#initLine").after("<li id='conditionLine'><span class='for-loop-li-css'>i <= n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><=</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n - 1</span> "+
								"time as <span class='ct-color-boolean'>true</span> (because the <span class='ct-color-yellow'>initialization</span> "+
								"part starts from <span class='ct-color-boolean'>i = 2</span>) and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>n-1+1</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine", $("#conditionLine").html(), function() {
							$("#forCondition").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition", "#conditionUnitNo", function() {
									$("#conditionUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
										$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
												'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$("#conditionLine").after("<li id='incrementLine'><span class='for-loop-li-css'>i++</span><br>In the "+
													"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
													"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
													"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-1</span>) number "+
													"of times. So it takes <span class='ct-code-b-yellow'>n</span> "+
													"<span class='ct-code-teal'>units of time</span>.</li>");
											typing("#incrementLine", $("#incrementLine").html(), function() {
												$("#forIncrement").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement", "#incrementUnitNo", function() {
														$("#incrementUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
																	'<span class="introjs-button user-btn" '+
																	'onclick="seventhStepAnimation()">Next &#8594;</span></div>');
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
				});
			});
		});
	});
}

function seventhStepAnimation() {
//	$("#codeLine7").css("background-color","");
	$("#codeLine7").css("background", "#c0e1fb");
	$("#unitSecondLineText6").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine7', '#unitFirstLineText7', '#svg', 'svgLine7', 'marker', function() {	
		$("#equalOperator, #plusOperator").addClass("blinking").one('animationend', function() {
			TweenMax.to($("#unitFirstLineTd7, #unitSecondLineTd7"), 1, {opacity: 1, onComplete: function() {
				$("#equalOperator, #plusOperator").removeClass("blinking").off();
				popoverAppendFunction("#unitSecondLineText7", 7);
				var text = "<span class='step-color-css'>Step 7 :</span> <br/><ul><li> This statement is involved in the for loop which contains" +
						" two operators <span class='ct-code-b-yellow'>=</span> and <span class='ct-code-b-yellow'>+</span>.</li>"+
				"<li>This statement is executed <span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-1</span>) "+
				"number of times.</li><li>So it takes <span class='ct-code-b-yellow'>2*(n-1)=2n-2</span> "+
				"number of <span class='ct-code-teal'>units of time</span>.</li></ul>";
				typing("#popover7", text, function() {
					$('#popover7').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="eighthStepAnimation()">Next &#8594;</span></div>');
				});
			}});
		});
	});
}

function eighthStepAnimation() {
//	$("#codeLine8").css("background-color","");
	$("#codeLine8").css("background", "#c0e1fb");
	$("#unitSecondLineText7").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine8', '#unitFirstLineText8', '#svg', 'svgLine8', 'marker', function() {	
		$("#equalOperator2").addClass("blinking").one('animationend', function() {
			TweenMax.to($("#unitFirstLineTd8, #unitSecondLineTd8"), 1, {opacity: 1, onComplete: function() {
				$("#equalOperator2").removeClass("blinking").off();
				popoverAppendFunction("#unitSecondLineText8", 8);
				var text = "<span class='step-color-css'>Step 8 :</span> <br/><ul><li> This statement is involved in the for loop which contains" +
				" only one operator <span class='ct-code-b-yellow'>=</span>.</li>"+
				"<li>This statement is executed <span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-1</span>) "+
				"number of times.</li><li>So it takes <span class='ct-code-b-yellow'>n-1</span> "+
				"number of <span class='ct-code-teal'>units of time</span>.</li></ul>";
				typing("#popover8", text, function() {
					$('#popover8').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="ninthStepAnimation()">Next &#8594;</span></div>');
				});
			}});
		});
	});
}

function ninthStepAnimation() {
//	$("#codeLine9").css("background-color","");
	$("#codeLine9").css("background", "#c0e1fb");
	$("#unitSecondLineText8").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine9', '#unitFirstLineText9', '#svg', 'svgLine9', 'marker', function() {	
		$("#equalOperator3").addClass("blinking").one('animationend', function() {
			TweenMax.to($("#unitFirstLineTd9, #unitSecondLineTd9"), 1, {opacity: 1, onComplete: function() {
				$("#equalOperator3").removeClass("blinking").off();
				popoverAppendFunction("#unitSecondLineText9", 9);
				var text = "<span class='step-color-css'>Step 9 :</span> <br/><ul><li> This statement is involved in the for loop which contains" +
				" only one operator <span class='ct-code-b-yellow'>=</span>.</li>"+
				"<li>This statement is executed <span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n-1</span>) "+
				"number of times.</li><li>So it takes <span class='ct-code-b-yellow'>n-1</span> "+
				"number of <span class='ct-code-teal'>units of time</span>.</li></ul>";
				typing("#popover9", text, function() {
					$('#popover9').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="tenthStepAnimation()">Next &#8594;</span></div>');
				});
			}});
		});
	});
}

function tenthStepAnimation() {
//	$("#codeLine10").css("background-color","");
	$("#codeLine10").css("background", "#c0e1fb");
	$("#unitSecondLineText9").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine10', '#unitFirstLineText10', '#svg', 'svgLine10', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd10, #unitSecondLineTd10"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText10", 10);
			var text = "<span class='step-color-css'>Step 10 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";	
			"<span class='ct-code-b-yellow'>0</span>.";
			typing("#popover10", text, function() {
				$('#popover10').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="eleventhStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function eleventhStepAnimation() {
//	$("#codeLine11").css("background-color","");
	$("#codeLine11").css("background", "#c0e1fb");
	$("#unitSecondLineText10").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine11', '#unitFirstLineText11', '#svg', 'svgLine11', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd11, #unitSecondLineTd11"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText11", 11);
			var text = "<span class='step-color-css'>Step 11 :</span> The <span class='ct-code-b-yellow'>return</span> statement always take "+
			"<span class='ct-code-b-yellow'>1</span> unit of time.";
			typing("#popover11", text, function() {
				$('#popover11').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="twelfthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function twelfthStepAnimation() {
//	$("#codeLine12").css("background-color","");
	$("#codeLine12").css("background", "#c0e1fb");
	$("#unitSecondLineText11").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine12', '#unitFirstLineText12', '#svg', 'svgLine12', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd12, #unitSecondLineTd12"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText12", 12);
			var text = "<span class='step-color-css'>Step 12 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";	
			"<span class='ct-code-b-yellow'>0</span>.";
			typing("#popover12", text, function() {
				$('#popover12').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="thirteenthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function thirteenthStepAnimation() {
//	$("#codeLine13").css("background-color","");
	$("#codeLine13").css("background", "#c0e1fb");
	$("#unitSecondLineText12").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine13', '#unitFirstLineText13', '#svg', 'svgLine13', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd13, #unitSecondLineTd13"), 1, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText13", 13);
			var text = "<span class='step-color-css'>Step 13 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";	
			"<span class='ct-code-b-yellow'>0</span>.";
			typing("#popover13", text, function() {
				$('#popover13').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="fourteenthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}
// fifteenthStepAnimation
function fourteenthStepAnimation() {
	$("#unitSecondLineText13").popover('hide');
	TweenMax.to($("#unitFirstLineTd14, #unitSecondLineTd14"), 1.5, {opacity: 1, onComplete: function() {
		popoverAppendFunction("#unitSecondLineText14", 14);
		var text = "The total unit count for <ul><li><span class='ct-code-teal'>n <= 1</span> is <span class='ct-code-b-yellow'>4</span>.</li>"+
			"<li><span class='ct-code-teal'>n > 1</span> is <span class='ct-code-b-yellow'>6n</span>.</li></ul>";
		typing("#popover14", text, function() {
			$('#popover14').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
					'<span class="introjs-button user-btn">Next &#8594;</span></div>');
			$(".user-btn").click(function() {
				$("#unitLineText8").popover('hide');
				introjs.nextStep();
			});
		});
	}});
}
//$("#operator1").effect('highlight',{color:'#da5805'}, 2000, function() {

function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.05;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function transferEffectFunction(selector1, selector2, callBackFunction) {
	$(selector1).effect("transfer", { to: $(selector2)}, 1000).addClass(".ui-effects-transfer", function() {
		$(selector2).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId, curve) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, markerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line lines");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + markerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, markerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, markerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(),0.5, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}