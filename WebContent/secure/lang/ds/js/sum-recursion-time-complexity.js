var sumRecursionTimeComplexityFunction = function() {
	$("td > span").css("display", "initial");
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
		steps :[{
			element : '#divTable',
			intro : '',
			animateStep : 'codeReveledAction'
		},  {
			element : '#divTable',
			intro : '',
			animateStep : 'explanationOfUnits',
			tooltipClass : 'hide'
		},  {
			element : '#explanationDiv',
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
				$(".introjs-tooltip").hide();
				TweenMax.to($("#divTable"), 1.5, {opacity: 1, onComplete: function() {
					codeLinesReveledFunction(1);
				}});
				break;
			case 'explanationOfUnits':
				firstStepAnimation();
				break;
			}
			break;
		case 'explanationDiv':
			$("#unitSecondLineText8").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#explanationDiv").removeClass("opacity00");
				TweenMax.to($("#lessThanResult"), 1.5, {opacity: 1, onComplete: function() {
					TweenMax.to($("#greaterThanResult"), 1.5, {opacity: 1, onComplete: function() {
						TweenMax.to($(".heading-css"), 1.5, {opacity: 1, onComplete: function() {
							line2CalculationAnimation();
						}});
					}});
				}});
			});
			break;
		case 'finalDiv':
			$("#unitSecondLineText15").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#finalDiv"), 1.5, {opacity: 1, onComplete: function() {
					$("#finalDiv").addClass("z-index9999999");
					TweenMax.to($("#finalLine1"), 1.5, {opacity: 1, onComplete: function() {
						$("#unitSecondLineText15").effect('highlight',{color:'#da5805'}, 1500, function() {
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

function previousStepFunction() {
	introjs.previousStep();
}

function setTimeoutFunction() {
	setTimeout(function() {
		introjs.nextStep();
	}, 2000);
}

function buttonAppendFunction(selector, callBackFunction) {
	$(selector).append('<div class="introjs-tooltipbuttons popover-btn-css"><span class="introjs-button user-btn" >Next &#8594;</span></div>');
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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

function popoverLeftSideAppendFunction(selector, divIdNum) {
	$(selector).popover({
		placement: 'left',
		html: true,
		trigger: 'focus',
		content: '<div id="popover' + divIdNum +'"></div>',
	}).popover('show');
	$(".popover").css({"top" : "0px;"});
}

function line2CalculationAnimation() {
	$("#line1").popover('hide');
	tweenmaxAnimation("#greaterThanResultSpan", "#line1", function() {
		$("#line2").removeClass("opacity00");
		tweenmaxAnimation("#line1Span", "#line2Span", function() {
			popoverLeftSideAppendFunction("#line2", 2);
			var text = "<ul><li id='Line2FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>sum(n-1)</span>.</li></ul>";
			typing("#popover2", text, function() {
				$("#line2SpanSum").effect('highlight',{color:'#da5805'}, 1500, function() {
					buttonAppendFunction("#popover2", function() {
						$("#Line2FirstLi").after("<li id='Line2SecondLi'>Consider <span class='ct-code-b-yellow'>sum(n)</span> value<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line2SecondLiSpan'>sum(n) = 2 + sum(n-1)</span></li>");
						$("#greaterThanResultSpan").effect( "highlight", {color:"#FFD700"}, 2000);
						transferEffectFunction("#greaterThanResultSpan", "#Line2SecondLiSpan", function() {
							buttonAppendFunction("#popover2", function() {
								$("#Line2SecondLi").after("<li id='Line2ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
								"<span class='ct-code-b-yellow'>n-1</span>.<br>"+
								"<span class='ct-code-b-yellow opacity00 display' id='Line2ThirdLiSpan'>sum(<span id='numericalId2' class='display'>n</span>) = "+
								"<span id='value2ParentSpan' class='display'>2 + sum(<span id='value2Sum' class='display'>"+
									"<span id='value2' class='display'>n</span>-1</span>)</span></span></li>");
								tweenmaxAnimation("#Line2SecondLiSpan", "#Line2ThirdLiSpan", function() {
									$("#numericalId2").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#numericalId2", "n-1", function() {
										$("#value2").effect( "highlight", {color:"#FFD700"}, 2000);
										flipEffect("#value2", "n-1", function() {
											buttonAppendFunction("#popover2", function() {
												$("#value2Sum").effect( "highlight", {color:"#FFD700"}, 2000);
												flipEffect("#value2Sum", "n-2", function() {
													$("#value2ParentSpan").effect( "highlight", {color:"#FFD700"}, 2000);
													transferEffectFunction("#value2ParentSpan", "#line2SpanSum", function() {
														flipEffect("#line2SpanSum", $("#value2ParentSpan").text(), function() {
															$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
															'<span class="introjs-button user-btn" onclick="line3CalculationAnimation()">'+
															'Next &#8594;</span></div>');
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

function line3CalculationAnimation() {
	$("#line2").popover('hide');
	$("#line3").removeClass("opacity00");
	tweenmaxAnimation("#line2Span", "#line3Span", function() {
		popoverLeftSideAppendFunction("#line3", 3);
		var text = "<ul><li id='Line3FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>sum(n-2)</span>.</li></ul>";
		typing("#popover3", text, function() {
			$("#line3SpanSum").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover3", function() {
					$("#Line3FirstLi").after("<li id='Line3SecondLi'>Consider <span class='ct-code-b-yellow'>sum(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line3SecondLiSpan'>sum(n) = 2 + sum(n-1)</span></li>");
					$("#greaterThanResultSpan").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#greaterThanResultSpan", "#Line3SecondLiSpan", function() {
						buttonAppendFunction("#popover3", function() {
							$("#Line3SecondLi").after("<li id='Line3ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n-2</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line3ThirdLiSpan'>sum(<span id='numericalId3' class='display'>n</span>) = "+
							"<span id='value3ParentSpan' class='display'>2 + sum(<span id='value3Sum' class='display'>"+
								"<span id='value3' class='display'>n</span>-1</span>)</span></span></li>");
							tweenmaxAnimation("#Line3SecondLiSpan", "#Line3ThirdLiSpan", function() {
								$("#numericalId3").effect( "highlight", {color:"#FFD700"}, 2000);
								flipEffect("#numericalId3", "n-2", function() {
									$("#value2").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#value3", "n-2", function() {
										buttonAppendFunction("#popover3", function() {
											$("#value3Sum").effect( "highlight", {color:"#FFD700"}, 2000);
											flipEffect("#value3Sum", "n-3", function() {
												$("#value3ParentSpan").effect( "highlight", {color:"#FFD700"}, 2000);
												transferEffectFunction("#value3ParentSpan", "#line3SpanSum", function() {
													flipEffect("#line3SpanSum", $("#value3ParentSpan").text(), function() {
														$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
														'<span class="introjs-button user-btn" onclick="line4CalculationAnimation()">'+
														'Next &#8594;</span></div>');
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

function line4CalculationAnimation() {
	$("#line3").popover('hide');	
	$("#line4").removeClass("opacity00");
	tweenmaxAnimation("#line3Span", "#line4Span", function() {
	popoverLeftSideAppendFunction("#line4", 4);
	var text = "<span class='ct-code-b-yellow'>sum(n-3)</span> can be written as "+
	"<span id='value4ParentSpan' class='ct-code-b-yellow'>2 + sum(n-4)</span>.";
		typing("#popover4", text, function() {
			buttonAppendFunction("#popover4", function() {
				transferEffectFunction("#value4ParentSpan", "#line4SpanSum", function() {
					flipEffect("#line4SpanSum", $("#value4ParentSpan").text(), function() {
						$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="line10CalculationAnimation()">'+
						'Next &#8594;</span></div>');
					});
				});
			});
		});
	});
}

function line10CalculationAnimation() {
	$("#line4").popover('hide');
	TweenMax.to($("#line5, #line5Span"), 1, {opacity: 1, onComplete: function() {
		TweenMax.to($("#line6"), 1, {opacity: 1, onComplete: function() {
		$("#line6").effect( "highlight", {color:"#FFD700"}, 1000);
			TweenMax.to($("#line7"), 1, {opacity: 1, onComplete: function() {
			$("#line7").effect( "highlight", {color:"#FFD700"}, 1000);
				TweenMax.to($("#line8"), 1, {opacity: 1, onComplete: function() {
				$("#line8").effect( "highlight", {color:"#FFD700"}, 1000);
					TweenMax.to($("#line9"), 1, {opacity: 1, onComplete: function() {
						$("#line9").effect( "highlight", {color:"#FFD700"}, 1000);
						popoverLeftSideAppendFunction("#line10", 10);
						var text = "<span id='popoverTextSpan10'>Similarly for <span class='ct-code-b-yellow'>n<sup>th</sup></span> number the "+
						"<span class='ct-code-b-yellow'>sum(n)</span> is<br></span>";
						typing("#popover10", text, function() {
							TweenMax.to($("#line10, #line10Span"), 1, {opacity: 1, onComplete: function() {
								buttonAppendFunction("#popover10", function() {	
									$("#popoverTextSpan10").after("<ul><li id='Line10FirstLi'><span class='ct-code-b-yellow opacity00' id='Line10FirstLiSpan'>"+
										"n(2) + sum(n - n)</span></li></ul>");
									tweenmaxAnimation("#line10", "#Line10FirstLiSpan", function() {
										$("#Line10FirstLi").after("<li><span class='ct-code-b-yellow opacity00' id='Line10SecondLiSpan'>"+
										"<span id='numericalId10' class='display'>n(2)</span> + sum(<span id='value10' class='display'>n - n</span>)"+
										"</span></li>");
										secondAnimation("#Line10FirstLiSpan", "#Line10SecondLiSpan", "#numericalId10", "2n", 
												"#value10", "0", "#line11", "#line11Span", function() {
											$('#popover10').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
											'<span class="introjs-button user-btn" onclick="line11CalculationAnimation()">Next &#8594;</span></div>');
										});
									});
								});
							}});
						});
					}});
				}});
			}});
		}});
	}});
}

function line11CalculationAnimation() {
	$("#line10").popover('hide');
	popoverLeftSideAppendFunction("#line11", 11);
	var text = "<span id='popoverTextSpan11'><ul><li id='Line11FirstLi'>Now calculate the value of <span class='ct-code-b-yellow'>"+
	"sum(0)</span></li></ul></span>";
	typing("#popover11", text, function() {
		buttonAppendFunction("#popover11", function() {
			$("#Line11FirstLi").after("<li id='Line11SecondLi'>If <span class='ct-code-b-yellow'>n <= 0</span> then "+
					"<span class='ct-code-b-yellow'>sum(n) = 2</span> as per the units count.</li>");
			typing("#Line11SecondLi", $("#Line11SecondLi").html(), function() {
				$("#lessThanResult").effect( "highlight", {color:"#FFD700"}, 1500, function() {
					buttonAppendFunction("#popover11", function() {
						$("#line12").removeClass("opacity00");
						tweenmaxAnimation("#line11Span", "#line12Span", function() {
							flipEffect("#line12SpanSum", "2", function() {
								$('#popover11').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
								'<span class="introjs-button user-btn" onclick="finalCalculationAnimation()">Next &#8594;</span></div>');
							});
						});
					});
				});
			});
		});
	});
}

function finalCalculationAnimation() {
	$("#line11").popover('hide');
	TweenMax.to($("#finalLine"), 1.5, {opacity: 1, onComplete: function() {
		$("#line12Span").effect('highlight',{color:'#da5805'}, 1500, function() {
			$("#alphabetN1").effect('highlight',{color:'#da5805'}, 1500, function() {
				tweenmaxAnimation("#alphabetN1", "#alphabetN2", function() {
					setTimeoutFunction();
				});
			});
		});
	}});
}

function codeLinesReveledFunction(i) {
	$("#stepNo" + i).fadeTo("0.1", 1);
	$("#codeLine" + i).fadeTo("0.1", 1, function() {
		if (i < ($("tr td:nth-child(2)").length - 1)) {
			codeLinesReveledFunction(++i);
		} else {
			$(".introjs-tooltip").show();
			var text = "This is the recursive code to find the sum of a given number using recursion.<b/>" + 
			"<ul><li>Now find the <span class='ct-code-b-yellow'>time complexity</span> of this function.</li>"+
			"<li>The total number of units is measured depending upon the number of <span class='ct-code-b-yellow'>operations</span> "+
			"done in the code.</li><li>Here the code contains <span class='ct-code-b-yellow'>if-else</span> statement. So we have to calculate "+
			"<span class='ct-code-b-yellow'>time complexity</span> for two conditions.</li></ul>";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn">Next &#8594;</a>');
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

function firstAnimation(selector1, selector2, selector3, selector4, value, callBackFunction) {
	$(selector1).effect('highlight',{color:'#da5805'}, 1500, function() {
		tweenmaxAnimation(selector1, selector2, function() {
			transferEffectFunction(selector3, selector4, function() {
				$(selector4).effect( "highlight", {color:"#FFD700"}, 2000);
				flipEffect(selector4, value, function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function secondAnimation(id1, id2, id3, value1, id4, value2, id5, id6, callBackFunction) {
	tweenmaxAnimation(id1, id2, function() {
		$(id3).effect( "highlight", {color:"#FFD700"}, 2000);
			flipEffect(id3, value1, function() {
			$(id4).effect( "highlight", {color:"#FFD700"}, 2000);
			flipEffect(id4, value2, function() {
				$(id5).removeClass("opacity00");
				transferEffectFunction(id2, id6, function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
					}
				});
			});
		});
	});
}

function firstStepAnimation() {
	$("#codeLine1").css("background", "#c0e1fb");
	$("#unitSecondLineText2").popover('hide');
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
			var text = "<span class='step-color-css'>step-1 :</span> This is the function header and no operation is involved so "+
			"the <span class='ct-code-teal'>unit of time</span> count is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover1", text, function() {
				$('#popover1').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-btn" onclick="secondStepAnimation()">Next &#8594;</a></div>');
			});
		}});
	});
}

function secondStepAnimation() {
	$("#codeLine2").css("background", "#c0e1fb");
	$("#unitSecondLineText1").popover('hide');
	$("#unitSecondLineText3").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitFirstLineText2', '#svg', 'svgLine2', 'marker', function() {	
		$("#operator1").addClass("blinking").one('animationend', function() {
			$("#operator1").removeClass("blinking").off();
			TweenMax.to($("#unitFirstLineTd2, #unitSecondLineTd2"), 1, {opacity: 1, onComplete: function() {
				$("#unitSecondLineText2").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover2"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
				var text = "<span id='textTooptipForIf'><span class='step-color-css'>step-2 :</span> Only one operator "+
				"<span class='ct-code-b-yellow'><=</span> is used in this statement, it takes "+
				"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.</span>";
				typing("#popover2", text, function() {
					$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<a class="introjs-button user-btn">Next &#8594;</a>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#textTooptipForIf").after("<br><span id='textForNote'>Note: If <span class='ct-code-b-yellow'>if</span> condition "+
							"evaluates <span class='ct-code-teal'>true</span> then control enters into <span class='ct-code-b-yellow'>if</span> "+
							"statement otherwise enters into <span class='ct-code-b-yellow'>else</span> statement.");
						typing("#textForNote", $("#textForNote").html(), function() {
							$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
									'<a class="introjs-button user-back-btn" tabindex="-1" onclick="firstStepAnimation()">&#8592; Back</a>'+
									'<span class="introjs-button user-btn" onclick="thirdStepAnimation()">Next &#8594;</span></div>');
						});
					});
				});
			}});
		});
	});
}

function thirdStepAnimation() {
	$("#codeLine3").css("background", "#c0e1fb");
	$("#unitSecondLineText2").popover('hide');
	$("#unitSecondLineText4").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3', '#unitFirstLineText3', '#svg', 'svgLine3', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd3, #unitSecondLineTd3"), 0.5, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText3", 3);
			var text = "<span class='step-color-css'>step-3 :</span> The <span class='ct-code-b-yellow'>return</span> statement always take "+
			"<span class='ct-code-b-yellow'>1</span> unit of time.";
			typing("#popover3", text, function() {
				$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-back-btn" tabindex="-1" onclick="secondStepAnimation()">&#8592; Back</a>'+
						'<span class="introjs-button user-btn" onclick="fourthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function fourthStepAnimation() {
	$("#codeLine4").css("background", "#c0e1fb");
	$("#unitSecondLineText3").popover('hide');
	$("#unitSecondLineText5").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine4', '#unitFirstLineText4', '#svg', 'svgLine4', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd4, #unitSecondLineTd4"), 0.5, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText4", 4);
			var text = "<span class='step-color-css'>step-4 :</span> No operation is involved in this statement. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover4", text, function() {
				$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-back-btn" tabindex="-1" onclick="thirdStepAnimation()">&#8592; Back</a>'+
						'<span class="introjs-button user-btn" onclick="fifthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function fifthStepAnimation() {
	$("#codeLine5").css("background", "#c0e1fb");
	$("#unitSecondLineText4").popover('hide');
	$("#unitSecondLineText6").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine5', '#unitFirstLineText5', '#svg', 'svgLine5', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd5, #unitSecondLineTd5"), 0.5, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText5", 5);
			var text = "<span class='step-color-css'>step-4 :</span><br><ul><li id='popover5Text1'>The <span class='ct-code-b-yellow'>+</span> "+
			"operator takes <span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span></li></ul>";
			typing("#popover5", text, function() {
				$("#asteriskOperator").addClass("blinking").one('animationend', function() {
					$("#asteriskOperator").removeClass("blinking").off();
					transferEffectFunction("#asteriskOperator", "#unitSecondLineTdText1", function() {
						$("#unitSecondLineTdText1").effect('highlight',{color:'#da5805'}, 1000, function() {
							$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
									'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								$("#popover5Text1").after("<li id='popover5Text2'>We could not define the <span class='ct-code-b-yellow'>sum(a, n-1)</span> of unit count."+
									" So the <span class='ct-code-teal'>units count</span> return as <span class='ct-code-b-yellow'>sum(n-1)</span>.</li>");
								typing("#popover5Text2", $("#popover5Text2").html(), function() {
									$("#sumOperator").addClass("blinking").one('animationend', function() {
										$("#sumOperator").removeClass("blinking").off();
										transferEffectFunction("#sumOperator", "#unitSecondLineTdText2", function() {
											$("#unitSecondLineTdText2").effect('highlight',{color:'#da5805'}, 1000, function() {
												$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
														'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
												$(".user-btn").click(function() {
													$(".user-btn").remove();
													$("#popover5Text2").after("<li id='popover5Text3'>The <span class='ct-code-b-yellow'>return</span> statement "+
														"is not defined without knowing the <span class='ct-code-teal'>units count</span> of "+
														"<span class='ct-code-b-yellow'>sum(n-1)</span>.</li>");
													typing("#popover5Text3", $("#popover5Text3").html(), function() {
														$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
														'<a class="introjs-button user-back-btn" tabindex="-1" onclick="fourthStepAnimation()">&#8592; Back</a>'+
														'<span class="introjs-button user-btn" onclick="sixthStepAnimation()">Next &#8594;</span></div>');
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
		}});
	});
}

function sixthStepAnimation() {
	$("#codeLine6").css("background", "#c0e1fb");
	$("#unitSecondLineText5").popover('hide');
	$("#unitSecondLineText7").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitFirstLineText6', '#svg', 'svgLine6', 'marker', function() {	
		TweenMax.to($("#unitFirstLineTd6, #unitSecondLineTd6"), 0.5, {opacity: 1, onComplete: function() {
			popoverAppendFunction("#unitSecondLineText6", 6);
			$("#popover6").append("<span id='popover6Text1'><span class='step-color-css'>step-6 :</span> No operation is involved in closed brace."+
				"So the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.");
			$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
					'<a class="introjs-button user-back-btn" tabindex="-1" onclick="fifthStepAnimation()">&#8592; Back</a>'+
					'<span class="introjs-button user-btn"  onclick="seventhStepAnimation()">Next &#8594;</span></div>');
		}});
	});
}

function seventhStepAnimation() {
	$("#codeLine7").css("background", "#c0e1fb");
	$("#unitSecondLineText6").popover('hide');
	$("#unitSecondLineText8").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine7', '#unitFirstLineText7', '#svg', 'svgLine7', 'marker', function() {	
			TweenMax.to($("#unitFirstLineTd7, #unitSecondLineTd7"), 0.5, {opacity: 1, onComplete: function() {
				$("#equalOperator, #plusOperator").removeClass("blinking").off();
				popoverAppendFunction("#unitSecondLineText7", 7);
				$("#popover7").append("<span id='popover6Text1'><span class='step-color-css'>step-6 :</span> No operation is involved in closed brace."+
				"So the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.");
				$('#popover7').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<a class="introjs-button user-back-btn" tabindex="-1" onclick="sixthStepAnimation()">&#8592; Back</a>'+
						'<span class="introjs-button user-btn" onclick="eighthStepAnimation()">Next &#8594;</span></div>');
			}});
	});
}

function eighthStepAnimation() {
	$("#unitSecondLineText7").popover('hide');
	TweenMax.to($("#unitFirstLineTd8, #unitSecondLineTd8"), 0.5, {opacity: 1, onComplete: function() {
		popoverAppendFunction("#unitSecondLineText8", 8);
		var text = "The total unit count for <span class='ct-code-b-yellow'>sum(n)</span> : "+
		"<ul><li><span class='ct-code-teal'>n <= 0</span> is <span class='ct-code-b-yellow'>2</span>.</li>"+
		"<li><span class='ct-code-teal'>n > 0</span> is <span class='ct-code-b-yellow'>2 + sum(n-1)</span>.</li></ul>";
		typing("#popover8", text, function() {
			$('#popover8').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
					'<a class="introjs-button user-back-btn" tabindex="-1" onclick="seventhStepAnimation()">&#8592; Back</a>'+
					'<span class="introjs-button user-btn">Next &#8594;</span></div>');
			$(".user-btn").click(function() {
				$("#unitLineText8").popover('hide');
				introjs.nextStep();
			});
		});
	}});
}

function typing(selector, text, callBackFunction) {
//	if (var typingEffect == false) {
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

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.6, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.6, {css: {top : 0, rotationX : 0}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function bounceFromEffextWithTimelineMax(selector1, selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text($(selector1).text());
	timelineMax.from(selector2, 3, {ease:  Bounce.easeOut, top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
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