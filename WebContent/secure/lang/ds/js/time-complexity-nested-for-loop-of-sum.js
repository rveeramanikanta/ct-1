var timeComplexityNestedForLoopOfSumFunction = function() {
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
				TweenMax.to($("#divTable"), 1, {opacity: 1, onComplete: function() {
					codeLinesReveledFunction(1);
				}});
			//	});
				break;
			case 'explanationOfUnits':
				$("#codeLine1").css("background", "#c0e1fb");
				svgAppend($('#divTable'), 'svg');
				svgMarkerAppend($('#svg'), 'marker');
				svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine1', '#unitLineText1', '#svg', 'svgLine1', 'marker', function() {	
					TweenMax.to($("#unitLine1"), 1, {opacity: 1, onComplete: function() {
						$("#unitLineText1").popover({
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
			$("#unitLineText10").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#finalDiv"), 1, {opacity: 1, onComplete: function() {
					$("#finalDiv").addClass("z-index9999999");
					TweenMax.to($("#finalLine1"), 1, {opacity: 1, onComplete: function() {
						TweenMax.to($("#finalLine2"), 1, {opacity: 1, onComplete: function() {
							$("#conclusionId").effect('highlight',{color:'#da5805'}, 1500, function() {
								$("#alphabetN1").effect('highlight',{color:'#da5805'}, 1500, function() {
									tweenmaxAnimation("#alphabetN1", "#alphabetN2", function() {
										setTimeoutFunction();
									});
								});
							});
						}});
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

function codeLinesReveledFunction(i) {
	$("#stepNo" + i).fadeTo("slow", 1);
	$("#codeLine" + i).fadeTo("slow", 1, function() {
		if (i < ($("tr td:nth-child(2)").length - 1)) {
			codeLinesReveledFunction(++i);
		} else {
			$(".introjs-tooltip").show();
			var text = "This is the iterative code to find the sum of a given number.<b/>" + 
			"<ul><li>Now find the <span class='ct-code-b-yellow'>time complexity</span> of this function.</li>"+
			"<li>The total number of units is measured depending upon the number of <span class='ct-code-b-yellow'>operations</span> "+
			"done in the code.</li></ul>"
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		}
	});
}

function secondStepAnimation() {
	$("#codeLine2").css("background", "#c0e1fb");
	$("#unitLineText1").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine2', '#unitLineText2', '#svg', 'svgLine2', 'marker', function() {	
		TweenMax.to($("#unitLine2"), 1, {opacity: 1, onComplete: function() {
			$("#operator1").addClass("blinking").one('animationend', function() {
				$("#operator1").removeClass("blinking");
				$("#unitLineText2").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover2"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
			//	$("#operator1").effect('highlight',{color:'#da5805'}, 2000, function() {
				var text = "<span class='step-color-css'>Step 2 :</span> Only one operator "+
				"<span class='ct-code-b-yellow'>=</span> is used in this statement, it takes "+
				"<span class='ct-code-b-yellow'>1</span> <span class='ct-code-teal'>unit of time</span>.";
				typing("#popover2", text, function() {
					$('#popover2').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="thirdStepAnimation()">Next &#8594;</span></div>');
				});
			});
		}});
	});
}

function thirdStepAnimation() {
	$("#codeLine3").css("background", "#c0e1fb");
	$("#unitLineText2").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine3', '#unitLineText3', '#svg', 'svgLine3', 'marker', function() {	
		TweenMax.to($("#unitLine3"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText3").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover3"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span id='popover3Text1'><span class='step-color-css'>Step 3 :</span><br/>This for loop involves three instructions which are "+
			"<span class='ct-code-b-yellow'>initialization</span>, "+
			"<span class='ct-code-b-yellow'>condition</span> and <span class='ct-code-b-yellow'>increment</span> part.</span>"
			typing("#popover3", text, function() {
				$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					thirdStepAnimationSecondStep();
				});
			});
		}});
	});
}

function thirdStepAnimationSecondStep() {
	$("#popover3Text1").after("<span><ul><li id='initLine'><span class='for-loop-li-css'>i = 0</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>.</li></ul></span>");
	typing("#initLine", $("#initLine").html(), function() {
		$("#forInit").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit", "#initUnitNo", function() {
				$("#initUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
					$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#initLine").after("<li id='conditionLine'><span class='for-loop-li-css'>i < n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n</span> "+
								"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>n+1</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine", $("#conditionLine").html(), function() {
							$("#forCondition").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition", "#conditionUnitNo", function() {
									$("#conditionUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
										$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
												'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$("#conditionLine").after("<li id='incrementLine'><span class='for-loop-li-css'>i++</span><br>In the "+
													"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
													"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
													"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n</span>) number "+
													"of times. So it takes <span class='ct-code-b-yellow'>n</span> "+
													"<span class='ct-code-teal'>units of time</span>.</li>");
											typing("#incrementLine", $("#incrementLine").html(), function() {
												$("#forIncrement").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement", "#incrementUnitNo", function() {
														$("#incrementUnitNo").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover3').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
																	'<span class="introjs-button user-btn" '+
																	'onclick="fourthStepAnimation()">Next &#8594;</span></div>');
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

function fourthStepAnimation() {
	$("#codeLine4").css("background", "#c0e1fb");
	$("#unitLineText3").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine4', '#unitLineText4', '#svg', 'svgLine4', 'marker', function() {	
		TweenMax.to($("#unitLine4"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText4").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover4"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span id='popover4Text1'><span class='step-color-css'>Step 4 :</span><br/>This <span class='ct-code-b-yellow'>for</span> loop "+
			"as <span class='for-loop-li-css'>inner loop</span> of the another <span class='ct-code-b-yellow'>for</span> loop.</span>";
			typing("#popover4", text, function() {
				$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					fourthStepAnimationSecondStep();
				});
			});
		}});
	});
}

function fourthStepAnimationSecondStep() {
	$("#popover4Text1").after("<span><ul><li id='initLine2'><span class='for-loop-li-css'>j = 0</span><br/>In the "+
			"<span class='ct-code-b-yellow'>initialization</span> only one operator"+
			" <span class='ct-code-b-yellow'>=</span> is used so it takes <span class='ct-code-b-yellow'>1</span> "+
			"<span class='ct-code-teal'>unit of time</span>. But this loop executes <span class='ct-code-b-yellow'>n</span> times because of "+
			"the inner for loop. So it takes <span class='ct-code-b-yellow'>n*1 = n</span> <span class='ct-code-teal'>units of time</span>.</li>"+
			"</ul></span>");
	typing("#initLine2", $("#initLine2").html(), function() {
		$("#forInit2").effect('highlight',{color:'#da5805'}, 1000, function() {
			transferEffectFunction("#forInit2", "#initUnitNo2", function() {
				$("#initUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
					$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$("#initLine2").after("<li id='conditionLine2'><span class='for-loop-li-css'>j < n</span><br>In the "+
								"<span class='ct-code-b-yellow'>condition</span> part also only one operator "+
								"<span class='ct-code-b-yellow'><</span> is used but the <span class='ct-code-b-yellow'>condition</span> part "+
								"executes <span class='ct-code-teal'>n</span> "+
								"time as <span class='ct-color-boolean'>true</span> and 1 time as <span class='ct-color-boolean'>false</span>. "+
								"So takes <span class='ct-code-b-yellow'>n+1</span> "+
								"<span class='ct-code-teal'>units of time</span>. But this loop executes <span class='ct-code-b-yellow'>n</span> "+
								"times because of "+
								"the inner for loop. So it takes <span class='ct-code-b-yellow'>n*(n+1) = n<sup>2</sup>+n</span> "+
								"<span class='ct-code-teal'>units of time</span>.</li>");
						typing("#conditionLine2", $("#conditionLine2").html(), function() {
							$("#forCondition2").effect('highlight',{color:'#da5805'}, 1000, function() {
								transferEffectFunction("#forCondition2", "#conditionUnitNo2", function() {
									$("#conditionUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
										$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
												'<span class="introjs-button user-btn" >Next &#8594;</span></div>');
										$(".user-btn").click(function() {
											$(".user-btn").remove();
											$("#conditionLine2").after("<li id='incrementLine2'><span class='for-loop-li-css'>j++</span><br>In the "+
													"<span class='ct-code-b-yellow'>increment</span> part only 1 operator "+
													"<span class='ct-code-b-yellow'>++</span> is used but the same operator is executed "+
													"<span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n</span>) number "+
													"of times. So it takes <span class='ct-code-b-yellow'>n</span> "+
													"<span class='ct-code-teal'>units of time</span>. But this loop executes "+
													"<span class='ct-code-b-yellow'>n</span> times because of "+
													"the inner for loop. So it takes <span class='ct-code-b-yellow'>n*n = n<sup>2</sup></span> "+
													"<span class='ct-code-teal'>units of time</span>.</li>");
											typing("#incrementLine2", $("#incrementLine2").html(), function() {
												$("#forIncrement2").effect('highlight',{color:'#da5805'}, 1000, function() {
													transferEffectFunction("#forIncrement2", "#incrementUnitNo2", function() {
														$("#incrementUnitNo2").effect('highlight',{color:'#da5805'}, 1000, function() {
															$('#popover4').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
																	'<span class="introjs-button user-btn" '+
																	'onclick="fifthStepAnimation()">Next &#8594;</span></div>');
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

function fifthStepAnimation() {
	//$(".user-btn").remove();
	$("#codeLine5").css("background", "#c0e1fb");
	$("#unitLineText4").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine5', '#unitLineText5', '#svg', 'svgLine5', 'marker', function() {	
		TweenMax.to($("#unitLine5"), 1, {opacity: 1, onComplete: function() {
			$("#incrementOperator").addClass("blinking").one('animationend', function() {
				$("#incrementOperator").removeClass("blinking").off();
				$("#unitLineText5").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover5"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
				var text = "<span class='step-color-css'>Step 5 :</span><br/><ul><li> Only one statement is involved in the for loop which contains" +
						" only one operator <span class='ct-code-b-yellow'>++</span>.</li>"+
				"<li>This statement is executed <span class='ct-color-boolean'>true</span>(<span class='ct-code-b-yellow'>n</span>) "+
				"number of times.</li><li>So it takes <span class='ct-code-b-yellow'>n</span> "+
				"number of <span class='ct-code-teal'>units of time</span>. But this statement involved in two inner for loops i.e. "+
				"number of <span class='ct-code-teal'>units of time</span> is <span class='ct-code-b-yellow'>n*n=n<sup>2</sup></span></li></ul>";
				typing("#popover5", text, function() {
					$('#popover5').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="sixthStepAnimation()">Next &#8594;</span></div>');
				});
			});
		}});
	});
}

function sixthStepAnimation() {
	$("#codeLine6").css("background", "#c0e1fb");
	$("#unitLineText5").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine6', '#unitLineText6', '#svg', 'svgLine6', 'marker', function() {	
		TweenMax.to($("#unitLine6"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText6").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover6"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span class='step-color-css'>Step 6 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";	
			"<span class='ct-code-b-yellow'>0</span>.";
			typing("#popover6", text, function() {
				$('#popover6').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="seventhStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function seventhStepAnimation() {
	$("#codeLine7").css("background", "#c0e1fb");
	$("#unitLineText6").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine7', '#unitLineText7', '#svg', 'svgLine7', 'marker', function() {	
		TweenMax.to($("#unitLine7"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText7").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover7"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span class='step-color-css'>Step 7 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover7", text, function() {
				$('#popover7').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="eigthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}

function eigthStepAnimation() {
	$("#codeLine8").css("background", "#c0e1fb");
	$("#unitLineText7").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine8', '#unitLineText8', '#svg', 'svgLine8', 'marker', function() {	
		TweenMax.to($("#unitLine8"), 1, {opacity: 1, onComplete: function() {
			$("#returnOperator").addClass("blinking").one('animationend', function() {
				$("#returnOperator").removeClass("blinking");
				$("#unitLineText8").popover({
					placement: 'right',
					html: true,
					trigger: 'focus',
					content: '<div id="popover8"></div>',
				}).popover('show');
				$(".popover").css({"top" : "0px;"});
				var text = "<span class='step-color-css'>Step 8 :</span> The <span class='ct-code-b-yellow'>return</span> statement always take "+
					"<span class='ct-code-b-yellow'>1</span> unit of time.";
				typing("#popover8", text, function() {
					$('#popover8').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
							'<span class="introjs-button user-btn" onclick="ninenthStepAnimation()">Next &#8594;</span></div>');
				});
			});
		}});
	});
}

function ninenthStepAnimation() {
	$("#codeLine9").css("background", "#c0e1fb");
	$("#unitLineText8").popover('hide');
	svgAnimatingLineSelector1RightSideToSelector2LeftSide('#divTable', '#codeLine9', '#unitLineText9', '#svg', 'svgLine9', 'marker', function() {	
		TweenMax.to($("#unitLine9"), 1, {opacity: 1, onComplete: function() {
			$("#unitLineText9").popover({
				placement: 'right',
				html: true,
				trigger: 'focus',
				content: '<div id="popover9"></div>',
			}).popover('show');
			$(".popover").css({"top" : "0px;"});
			var text = "<span class='step-color-css'>Step 9 :</span> No operation is involved in closed brace. So "+
			"the <span class='ct-code-teal'>unit count</span> is <span class='ct-code-b-yellow'>0</span>.";
			typing("#popover9", text, function() {
				$('#popover9').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
						'<span class="introjs-button user-btn" onclick="tenthStepAnimation()">Next &#8594;</span></div>');
			});
		}});
	});
}


function tenthStepAnimation() {
	$("#unitLineText9").popover('hide');
	TweenMax.to($("#unitLine10, #codeLine10"), 1, {opacity: 1, onComplete: function() {
		$("#unitLineText10").popover({
			placement: 'right',
			html: true,
			trigger: 'focus',
			content: '<div id="popover10"></div>',
		}).popover('show');
		$(".popover").css({"top" : "0px;"});
		var text = "The total unit count is <span class='ct-code-b-yellow'>3n<sup>2</sup> + 4n + 3</span>.";
		typing("#popover10", text, function() {
			$('#popover10').append('<div class="introjs-tooltipbuttons popover-btn-css">'+
					'<span class="introjs-button user-btn">Next &#8594;</span></div>');
			$(".user-btn").click(function() {
			//	$("#unitLineText10").popover('hide');
				introjs.nextStep();
			})
		});
	}});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.5;
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
	TweenMax.to($('#' + svgLineId).show(),0.6, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}