 var binarySearchTimeComplexity = function() {
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
			element : '#indexDiv',
			intro : '',
			tooltipClass : 'hide'
		}, {
			element : '#preCode1',
			intro : '',
		}, {
			element : '#preCode2',
			intro : '',
		}, {
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
		case 'indexDiv':
			$("#listLine1").fadeTo(500, 1, function() {
				$("#listLine2").fadeTo(500, 1, function() {
					$("#listLine3").fadeTo(500, 1, function() {
						$("#listLine4").fadeTo(500, 1, function() {
							$("#listLine4").after('<span class="introjs-button user-btn">Next &#8594;</span>');
							introjs.refresh();
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								introjs.nextStep();
							});
						});
					});
				});
			});
			break;
		case 'preCode1':
			$('.introjs-helperLayer').one('transitionend', function() {
				TweenMax.to($("#preCode1"), 1, {opacity: 1, onComplete: function() {
					var text = 'This is an iterative code for <span class="ct-code-b-yellow">binary search</span>.';
					typing('.introjs-tooltiptext', text, function() {
						buttonAppendFunction(".introjs-tooltipbuttons", function() {
							$(".introjs-tooltip").hide();
							popoverAppendFunction("#line1", 1);
							var text = "Let us calculate <span class='ct-code-b-yellow'>time complexity</span> of "+
							"<span class='ct-code-b-yellow'>binarySearchIteration()</span>.";
							typing("#popover1", text, function() {
								buttonAppendFunction("#popover1", function() {
									$("#line1").popover('hide');
									popoverAppendFunction("#line5", 5);
									var text = "<ul><li id='liLine1'>The main principle of <span class='ct-code-b-yellow'>binary search</span> is "+
										"to <span class='color-highlight'>divide</span> the given list into "+
										"<span class='ct-code-b-yellow'>two halfs</span>.</li></ul>";
									typing("#popover5", text, function() {
										$("#line5").effect('highlight',{color:'#da5805'}, 1500);
										buttonAppendFunction("#liLine1", function() {
											$("#liLine1").append("<li id='liLine2'>Compare the <span class='color-highlight'>key</span> element "+
													"with the <span class='color-highlight'>middle</span> element.</li>");
											typing("#liLine2", $("#liLine2").html(), function() {
												$("#line6").effect('highlight',{color:'#da5805'}, 1500);
												buttonAppendFunction("#liLine2", function() {
													$("#liLine2").append("<li id='liLine3'>If the comparision result is <span class='color-highlight'>"+
														"true</span> then print's its position.</li>");
													typing("#liLine3", $("#liLine3").html(), function() {
														$("#line7").effect('highlight',{color:'#da5805'}, 1500);
														buttonAppendFunction("#liLine3", function() {
															$("#liLine3").append("<li id='liLine4'>If <span class='color-highlight'>key</span> "+
																"element is found at <span class='color-highlight'>middle</span> element then the "+
																"<span class='ct-code-b-yellow'>break</span> statement terminate the loop.</li>");
															typing("#liLine4", $("#liLine4").html(), function() {
																$("#line8").effect('highlight',{color:'#da5805'}, 1500);
																$("#liLine4").append("<li id='liLine5'>In this type of cases the time complexity is "+
																		"<span class='ct-code-b-yellow'>T(1)</span>.</li>");
																typing("#liLine5", $("#liLine5").html(), function() {
																	buttonAppendFunction("#liLine5", function() {
																		secondStep();
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
				}});
			});
			break;
		case 'preCode2':
			$('.introjs-helperLayer').one('transitionend', function() {
			//	$("#preCode1").addClass("z-index9999999");
			TweenMax.to($("#preCode2"), 1, {opacity: 1, onComplete: function() {
				var text = '<span id="tooltiptextId">This is a recursive code for <span class="ct-code-b-yellow">binary search.</span>';
					typing('.introjs-tooltiptext', text, function() {
						buttonAppendFunction(".introjs-tooltiptext", function() {
							$(".introjs-tooltip").hide();
							popoverAppendFunction("#recLine4", 4);
							var text = "<span id='recSpanText1'>If <span class='color-highlight'>key</span> element found at "+
							"<span class='color-highlight'>middle</span>"+
							" position then the time complexity is <span class='ct-code-b-yellow'>T(1)</span>.</span>";
							typing("#popover4", text, function() {
								$("#recEqualId").effect('highlight',{color:'#da5805'}, 1500);
								buttonAppendFunction("#popover4", function() {
									$("#recLine4").popover('hide');
									TweenMax.to($("#timeC1"), 1, {opacity: 1, onComplete:function() {
										popoverAppendFunction("#recLine6", 6);
										var text = "<span id='recSpanText2'><ul><li>If the <span class='color-highlight'>key</span> element is "+
										"less than <span class='color-highlight'>middle</span> element then search the "+
										"<span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>first half</span>."+
										"</li> <li>Then the "+
										"time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul></span>";
										typing("#popover6", text, function() {
											$("#recLessThanId").effect('highlight',{color:'#da5805'}, 1500);
											buttonAppendFunction("#popover6", function() {
												$("#recLine6").popover('hide');
												TweenMax.to($("#timeC2"), 1, {opacity: 1, onComplete:function() {
													popoverAppendFunction("#recLine8", 8);
													var text = "<span id='recSpanText3'><ul><li>If the <span class='color-highlight'>key</span> "+
													"element is greater than <span class='color-highlight'>middle</span> element "+
													"then search the <span class='color-highlight'>key</span> element in the "+
													"<span class='ct-code-b-yellow'>second half</span>.</li> <li>In this type of cases the "+
													"time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul></span>";
													typing("#popover8", text, function() {
														$("#recGreaterThanlId").effect('highlight',{color:'#da5805'}, 1500);
														buttonAppendFunction("#popover8", function() {
															$("#recLine8").popover('hide');
															TweenMax.to($("#timeC3"), 1, {opacity: 1, onComplete:function() {
																setTimeoutFunction();
															}});
														});
													});
												}});
											});
										});
									}});
								});
							});
						}); 
					});
				}});
			});
			break;
		case 'explanationDiv':
			$("#unitSecondLineText8").popover('hide');
			$(".introjs-helperLayer").one('transitionend', function() {
				TweenMax.to($("#explanationDiv"), 1, {opacity: 1, onComplete: function() {
					popoverLeftSideAppendFunction("#caseList1", 1);
					var text = "<ul><li id='text1'>The <span class='color-highlight'>best case</span> time complexity of "+
					"<span class='ct-code-b-yellow'>binary search</span> is <span class='ct-code-b-yellow'>T(1)</span>.</li></ul>";
					typing(".popover-content", text, function() {
						TweenMax.to($("#caseList1"), 1, {opacity: 1, onComplete: function() {
							$("#timeItrSpan1, #timeRecSpan1").addClass("blinking").one('animationend', function() {
								$("#timeItrSpan1, #timeRecSpan1").removeClass("blinking").off();
								buttonAppendFunction("#text1", function() {
									$("#text1").after("<li id='text2'>The <span class='color-highlight'>worst case</span> the time complexity "+
											"is <span class='ct-code-b-yellow'>T(n/2)</span>.</li>");
									typing("#text2", $("#text2").html(), function() {
										TweenMax.to($("#caseList2"), 1, {opacity: 1, onComplete: function() {
											$("#timeItrSpan2, #timeRecSpan2").addClass("blinking").one('animationend', function() {
												$("#timeItrSpan2, #timeRecSpan2").removeClass("blinking").off();
												TweenMax.to($("#caseList3"), 1, {opacity: 1, onComplete: function() {
													$("#timeItrSpan3, #timeRecSpan3").addClass("blinking").one('animationend', function() {
														$("#timeItrSpan3, #timeRecSpan3").removeClass("blinking").off();
														buttonAppendFunction("#text2", function() {
															$("#caseList1").popover('hide');
															calculationActionFunction();
														});
													});
												}});
											});
										}});
									});
								});
							});
						}});
					});
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
	$(selector).append('<div class="introjs-tooltipbuttons popover-btn-css"><span class="introjs-button user-btn">Next &#8594;</span></div>');
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

function fadeToAndTransferAction(selector1, selector2, selector3, callBackFunction) {
	$(selector1).fadeTo(1000, 1, function() {
		$(selector2).effect('highlight',{color:'#da5805'}, 800, function() {
			transferEffectFunction(selector2, selector3, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	});
}



function secondStep() {
	$("#line5").popover('hide');
	TweenMax.to($("#timeCtPre1"), 1, {opacity: 1, onComplete:function() {
		popoverAppendFunction("#line9", 9);
		var text = "<ul><li>If the <span class='color-highlight'>key</span> element is less than <span class='color-highlight'>middle</span> "+
		"element then search the <span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>first half</span>.</li> "+
		"<li>In this type of cases the time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
		typing("#popover9", text, function() {
			$("#lessThanid").effect('highlight',{color:'#da5805'}, 1500);
			buttonAppendFunction("#popover9", function() {
				thirdStep();
			});
		});
	}});
}

function thirdStep() {
	$("#line9").popover('hide');
	TweenMax.to($("#timeCtPre2"), 1, {opacity: 1, onComplete:function() {
		popoverAppendFunction("#line10", 10);
		var text = "<ul><li>If the <span class='color-highlight'>key</span> element is greater than <span class='color-highlight'>middle</span> "+
		"element then search the <span class='color-highlight'>key</span> element in the <span class='ct-code-b-yellow'>second half</span>.</li> "+
		"<li>In this type of cases the time complexity is <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
		typing("#popover10", text, function() {
			$("#greaterThanid").effect('highlight',{color:'#da5805'}, 1500);
			buttonAppendFunction("#popover10", function() {
				$("#line10").popover('hide');
				TweenMax.to($("#timeCtPre3"), 1, {opacity: 1, onComplete:function() {
					introjs.nextStep();
				}});
			});
		});
	}});
}

function calculationActionFunction() {
	TweenMax.to($("#calcLine1"), 1, {opacity:1, onComplete:function() {
		TweenMax.to($("#divCalcLine1"), 1, {opacity:1, onComplete:function() {
			popoverLeftSideAppendFunction("#divCalcLine1", 1);
			var text = "<ul><li id='popoverText'><span class='ct-code-b-yellow'>T(n/2)</span> is the time taken to find the "+
					"<span class='color-highlight'>key</span> element in any one half (i.e. If the given <span class='color-highlight'>key</span> "+
					"element is not <span class='color-highlight'>middle</span> element).</li>"+
					"<li><span class='ct-code-b-yellow'>c</span> is a constant time taken to compare the <span class='color-highlight'>key</span> "+
					"element with different elements.</li></ul>";
			typing(".popover-content", text, function() {
				buttonAppendFunction(".popover-content", function() {
					line3CalculationAnimation();
				});
			});
		}});
	}});
}

function line3CalculationAnimation() {
	$("#divCalcLine1").popover("hide");
	popoverLeftSideAppendFunction("#divCalcLine3", 3);
	$("#divCalcLine3").removeClass("opacity00");
	tweenMaxAnimation("#divCalcLine1", "#divCalcLine3", function() {	
		var text = "<ul><li id='Line3FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>T(n/2)</span>.</li></ul>";
		typing("#popover3", text, function() {
			$("#line3Span").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover3", function() {
					$("#Line3FirstLi").after("<li id='Line3SecondLi'>Consider <span class='ct-code-b-yellow'>T(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line3SecondLiSpan'>T(n) = T(n/2) + c</span></li>");
					$("#divCalcLine1").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#divCalcLine1", "#Line3SecondLiSpan", function() {
						buttonAppendFunction("#popover3", function() {
							$("#Line3SecondLi").after("<li id='Line3ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n/2</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line3ThirdLiSpan'>T(<span id='numericalId3' class='display'>n</span>) = "+
							"<span id='value3Main' class='display'>"+
							"<span id='value3ParentSpan' class='display'>T(<span id='value3SecondParent' class='display'>"+
								"<span id='value3' class='display'>n</span>/2</span>)</span> + c</span></span></li>");
							tweenMaxAnimation("#Line3SecondLiSpan", "#Line3ThirdLiSpan", function() {
								$("#numericalId3").effect( "highlight", {color:"#FFD700"}, 2000);
								flipEffect("#numericalId3", "n/2", function() {
									$("#value2").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#value3", "(n/2)", function() {
										buttonAppendFunction("#popover3", function() {
											$("#value3SecondParent").effect( "highlight", {color:"#FFD700"}, 2000);
											flipEffect("#value3SecondParent", "n/4", function() {
												buttonAppendFunction("#popover3", function() {
													transferEffectFunction("#Line3ThirdLiSpan", "#line3Span", function() {
														$("#line3Span").effect( "highlight", {color:"#FFD700"}, 2000);
														flipEffect("#line3Span", $("#value3Main").text(), function() {
															buttonAppendFunction("#popover3", function() {
																line4CalculationAnimation();
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
	});
}

function line4CalculationAnimation() {
	$("#divCalcLine3").popover("hide");
	popoverLeftSideAppendFunction("#divCalcLine4", 4);
	tweenMaxAnimation("#divCalcLine3", "#divCalcLine4", function() {	
		var text = "<ul><li id='Line4FirstLi'>Now calculate value of <span class='ct-code-b-yellow'>T(n/4)</span>.</li></ul>";
		typing("#popover4", text, function() {
			$("#line4Span").effect('highlight',{color:'#da5805'}, 1500, function() {
				buttonAppendFunction("#popover4", function() {
					$("#Line4FirstLi").after("<li id='Line4SecondLi'>Consider <span class='ct-code-b-yellow'>T(n)</span> value<br>"+
						"<span class='ct-code-b-yellow opacity00' id='Line4SecondLiSpan'>T(n) = T(n/2) + c</span></li>");
					$("#divCalcLine1").effect( "highlight", {color:"#FFD700"}, 2000);
					transferEffectFunction("#divCalcLine1", "#Line4SecondLiSpan", function() {
						buttonAppendFunction("#popover4", function() {
							$("#Line4SecondLi").after("<li id='Line4ThirdLi'>Substitute <span class='ct-code-b-yellow'>n</span> with "+
							"<span class='ct-code-b-yellow'>n/2</span>.<br>"+
							"<span class='ct-code-b-yellow opacity00' id='Line4ThirdLiSpan'>T(<span id='numericalId4' class='display'>n</span>) = "+
							"<span id='value4Main' class='display'>"+
							"<span id='value4ParentSpan' class='display'>T(<span id='value4SecondParent' class='display'>"+
								"<span id='value4' class='display'>n</span>/4</span>)</span> + c</span></span></li>");
							tweenMaxAnimation("#Line4SecondLiSpan", "#Line4ThirdLiSpan", function() {
								$("#numericalId4").effect( "highlight", {color:"#FFD700"}, 2000);
								flipEffect("#numericalId4", "n/2", function() {
									$("#value2").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#value4", "(n/2)", function() {
										buttonAppendFunction("#popover4", function() {
											$("#value4SecondParent").effect( "highlight", {color:"#FFD700"}, 2000);
											flipEffect("#value4SecondParent", "n/8", function() {
												buttonAppendFunction("#popover4", function() {
													transferEffectFunction("#Line4ThirdLiSpan", "#line4Span", function() {
														$("#line4Span").effect( "highlight", {color:"#FFD700"}, 2000);
														flipEffect("#line4Span", $("#value4Main").text(), function() {
															buttonAppendFunction("#popover4", function() {
																line5CalculationAnimation();
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
	});
}

function line5CalculationAnimation() {
	$("#divCalcLine4").popover("hide");
	tweenMaxAnimation("#divCalcLine4", "#divCalcLine5", function() {
		popoverLeftSideAppendFunction("#divCalcLine5", 5);
		var text = "<ul><li id='Line5FirstLi'>Here <span class='ct-code-b-yellow'>8</span> can be written as "+
		"<span class='ct-code-b-yellow' id='twoPowerId'>2<sup>3</sup></span>.</li></ul>";
		typing("#popover5", text, function() {
			buttonAppendFunction("#popover5", function() {
				$("#line5Span").effect( "highlight", {color:"#FFD700"}, 2000);
				flipEffect("#line5Span", "", function() {
					$("#line5Span").append("2<sup>3</sup>");				
					buttonAppendFunction("#popover5", function() {
						$("#Line5FirstLi").after("<li id='Line5SecondLi'><span class='ct-code-b-yellow'>c+c+c</span> can be written as<br>"+
						"<span class='ct-code-b-yellow' id='Line4SecondLiSpan'>c*c*c</span> i.e. <span  class='ct-code-b-yellow'>3*c</span>.</li>");
						typing("#Line5SecondLi", $("#Line5SecondLi").html(), function() {
							buttonAppendFunction("#popover5", function() {
								$("#line5SpanParent").effect( "highlight", {color:"#FFD700"}, 2000);
								flipEffect("#line5SpanParent", "(3 * c)", function() {
									buttonAppendFunction("#popover5", function() {
										$("#divCalcLine5").popover("hide");
										line6CalculationAnimation();
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

function line6CalculationAnimation() {
	$("#divCalcLine6").fadeTo(500, 1, function() {
		$("#divCalcLine6").effect( "highlight", {color:"#FFD700"}, 1000);
		$("#divCalcLine7").fadeTo(500, 1, function() {
			$("#divCalcLine7").effect( "highlight", {color:"#FFD700"}, 1000);
			$("#divCalcLine8").fadeTo(500, 1, function() {
				$("#divCalcLine8").effect( "highlight", {color:"#FFD700"}, 1000);
				popoverLeftSideAppendFunction("#divCalcLine9", 9);
				var text = "For <span class='ct-code-b-yellow'>k<sup>th</sup></span> order the <span class='ct-code-b-yellow'>T(n)</span> written as";
				typing("#popover9", text, function() {
					TweenMax.to($("#divCalcLine9"), 1, {opacity : 1, onComplete:function() {
						buttonAppendFunction("#popover9", function() {
							$("#divCalcLine9").popover("hide");
							popoverLeftSideAppendFunction("#divCalcLine10", 10);
							tweenMaxAnimation("#divCalcLine9", "#divCalcLine10", function() {
								var text = "We do a <span class='ct-code-b-yellow'>binary search</span> (half the elements) until we found it. "+
								"So we can divide <span class='ct-code-b-yellow'>n/2</span> times until we get <span class='ct-code-b-yellow'>1</span>."+
								"<br>i.e. <span class='ct-code-b-yellow'>n/2<sup>k</sup> = 1</span><br>From above "+
								"<span class='ct-code-b-yellow' id='calcLine1Span'>n = 2<sup>k</sup></span>.";
								/* var text = "We have <span class='ct-code-b-yellow'>n = 2<sup>k</sup></span>." */
								typing("#popover10", text, function() {
									buttonAppendFunction("#popover10", function() {
										$("#calcLine1Span").effect( "highlight", {color:"#FFD700"}, 1000);
										transferEffectFunction("#calcLine1Span", "#kPowerId", function() {
											flipEffect("#kPowerId", "n", function() {
												buttonAppendFunction("#popover10", function() {
													$("#divCalcLine10").popover("hide");
													tweenMaxAnimation("#divCalcLine10", "#divCalcLine11", function() {
														flipEffect("#nDivisionId", "1", function() {
															line11CalculationAnimation();
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
			});
		});
	});
}

function line11CalculationAnimation() {
	popoverLeftSideAppendFunction("#divCalcLine11", 11);
	var text = "<ul><li><span class='ct-code-b-yellow'>T(1)</span> value is <span class='ct-code-b-yellow'>1</span>.</li>"+
	"<li id='li2Text1'>We have <span class='ct-code-b-yellow'>2<sup>k</sup> = n</span>.</li></ul>";
	typing("#popover11", text, function() {
		buttonAppendFunction("#popover11", function() {
			$("#li2Text1").after("<span id='li2Text2'>now do the <span class='ct-code-b-yellow'>log<sub>2</sub></span> on both sides.</span>");
			buttonAppendFunction("#popover11", function() {
				$("#li2Text2").after("<br><span id='li2Text3' class='ct-code-b-yellow'>log<sub>2</sub>(2<sup>k</sup>) = log<sub>2</sub>n</span>");
				buttonAppendFunction("#popover11", function() {
					$("#li2Text3").after("<br><span id='li2Text4' class='ct-code-b-yellow'>k * log<sub>2</sub>(2) = log<sub>2</sub>n</span>");
					buttonAppendFunction("#popover11", function() {
						$("#li2Text4").after("<br><span id='li2Text5' class='ct-code-b-yellow'>k * 1 = log<sub>2</sub>n</span>");
						buttonAppendFunction("#popover11", function() {
							$("#li2Text5").after("<br><span id='li2Text6' class='ct-code-b-yellow'>k = log<sub>2</sub>n</span>");
							transferEffectFunction("#divCalcLine11", "#divCalcLine12", function() {
								console.log("transferred");
								buttonAppendFunction("#popover11", function() {
									console.log("Button");
									$("#finalIdC").effect( "highlight", {color:"#FFD700"}, 2000);
									flipEffect("#finalIdC", "1", function() {
										$("#finalIdK").effect( "highlight", {color:"#FFD700"}, 2000);
										flipEffect("#finalIdK", "", function() {
											$("#finalIdK").append("log<sub>2</sub>n");
											buttonAppendFunction("#popover11", function() {
												$("#divCalcLine11").popover("hide");
												TweenMax.to($("#divCalcLine13"), 1, {opacity : 1, onComplete: function() {
													$("#finalIdK").effect( "highlight", {color:"#FFD700"}, 2000);
													transferEffectFunction("#finalIdK", "#resultTimeCt", function() {
														setTimeoutFunction();										
													});
												}});
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

function typing(selector, text, callBackFunction) {
	var typingSpeed = 0.01;
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

function tweenMaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector2).removeClass("opacity00");
	TweenMax.from(selector2, 0.8, {top: topLength, left: leftLength, onComplete: function() {	//	1
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
	TweenMax.to($('#' + svgLineId).show(),0.4, {attr: {x2: x2, y2: y2}, onComplete: function() {	//	0.5
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
