var initializationOfOneDimesionalArraysReady = function() {
	introGuide();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
}

function introGuide() {
	introjs = introJs();
	
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
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#exampleDiv1',
			intro : '',
			position : 'right',
		}, {
			element : '#exampleDiv2',
			intro : '',
			position : 'right',
		}, {
			element : '#exampleDiv3',
			intro : '',
			position : 'bottom',
		}, {
			element : '#exampleDiv4',
			intro : '',
			position : 'bottom',
		}, {
			element : '#exampleDiv5',
			intro : '',
			position : 'bottom',
		}, {
			element :"#restart",
			intro : "Click to restart",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv' :
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			var text = $("#infoDiv").html();
			typing($("#infoDiv"), text, function() {
				$("#infoDiv").addClass('z-index9999999');
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;
		case 'exampleDiv1':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv1").removeClass("opacity00", function() {
					typing('.introjs-tooltiptext', "Let us consider a example on <span class='ct-code-b-yellow'>one dimensional array</span>."
							, function() {
						$("#firstExample").removeClass("opacity00");
						var text = $("#firstExample").html();
						typing($("#firstExample"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								typing('.introjs-tooltiptext', "The size of the array is 4. So the memory alloted into 4 regions.", function() {
									$("#arraySize1").effect( "highlight", {color:"dodgerblue"}, 2000, function() {
										$("#smallBox1").removeClass("visibility-hidden");
										$(".smallBox1").addClass("animated-border").one('animationend', function() {
											$(".smallBox1").off();
											$(".smallBox1").css("border-color", "dodgerblue");
											$("#address1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
												typing('.introjs-tooltiptext', "Here <span class='ct-code-b-yellow'>1024</span>" +
														" is the base address and every time the address stores two bytes of memory" +
														" because of it is an <span class='ct-code-b-yellow'>integer data type</span>.", function() {
													$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
													$(".user-btn").click(function() {
														$(".user-btn").remove();
														typing('.introjs-tooltiptext', "The values with in the braces are scanned from left to right"
															+ " and assigned them to a[0], a[1], and so on. <br>And the values allocated into"
															+ " the memory.", function() {
															$("#element1").removeClass("opacity00", function() {
																$("#element2").removeClass("opacity00", function() {
																	$("#element3").removeClass("opacity00", function() {
																		$("#element4").removeClass("opacity00", function() {
																			firstAnimation(1);
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
			}); 
			break;
		case 'exampleDiv2':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv2").removeClass("opacity00", function() {
					typing('.introjs-tooltiptext', "Now look at the another example.", function() {
						$("#secondExample").removeClass("opacity00");
						var text = $("#secondExample").html();
						typing($("#secondExample"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								typing('.introjs-tooltiptext', "The size of the array is 5. So the memory allocated into 5 regions.", function() {
									$("#arraySize2").effect( "highlight", {color:"dodgerblue"}, 2000, function() {
										$("#smallBox2").removeClass("visibility-hidden");
										$(".smallBox2").addClass("animated-border").one('animationend', function() {
											$(".smallBox2").off();
											$(".smallBox2").css("border-color", "dodgerblue");
											$("#address2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
												$("#element5").removeClass("opacity00", function() {
													$("#element6").removeClass("opacity00", function() {
														$("#element7").removeClass("opacity00", function() {
															$("#element8").removeClass("opacity00", function() {
																$("#element9").removeClass("opacity00", function() {
																	secondAnimation(1);
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
			break;
		case 'exampleDiv3':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv3").removeClass("opacity00", function() {
					typing('.introjs-tooltiptext', "Now look at the another example.", function() {
						$("#thirdExample").removeClass("opacity00");
						var text = $("#thirdExample").html();
						typing($("#thirdExample"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								typing('.introjs-tooltiptext', "The size of the array is 2. So the memory allocated into 2 regions.", function() {
									$("#arraySize3").effect( "highlight", {color:"dodgerblue"}, 2000, function() {
										$("#smallBox3").removeClass("visibility-hidden");
										$(".smallBox3").addClass("animated-border").one('animationend', function() {
											$(".smallBox3").off();
											$(".smallBox3").css("border-color", "dodgerblue");
											$("#address3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
												$("#element10").removeClass("opacity00", function() {
													$("#element11").removeClass("opacity00", function() {
														thirdAnimation(1);
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
			break;
		case 'exampleDiv4':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv4").removeClass("opacity00", function() {
					typing('.introjs-tooltiptext', "Now look at the another example.", function() {
						$("#fourthExample").removeClass("opacity00");
						var text = $("#fourthExample").html();
						typing($("#fourthExample"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								typing('.introjs-tooltiptext', "The size of a <span class='ct-code-b-yellow'>one dimensional array</span>" +
										" need not be mentioned in its initialization. In this case, the compiler will count the values" +
										" assigned and take it as the size of that array.", function() {
									$("#inputCount").effect("highlight", {color:"#FF9900"}, 2000, function() {
										$("#arraySize4").effect("highlight", {color:"dodgerblue"}, 2000, function() {
											$("#smallBox4").removeClass("visibility-hidden");
											$(".smallBox4").addClass("animated-border").one('animationend', function() {
												$(".smallBox4").off();
												$(".smallBox4").css("border-color", "dodgerblue");
												$("#address4").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
													$("#element12").removeClass("opacity00", function() {
														$("#element13").removeClass("opacity00", function() {
															$("#element14").removeClass("opacity00", function() {
																fourthAnimation(1);
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
			break;
		case 'exampleDiv5':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv5").removeClass("opacity00", function() {
					typing('.introjs-tooltiptext', "Now look at the another example.", function() {
						$("#fifthExample").removeClass("opacity00");
						var text = $("#fifthExample").html();
						typing($("#fifthExample"), text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
							$(".user-btn").click(function() {
								$(".user-btn").remove();
								typing('.introjs-tooltiptext', "The size of the array is 10." +
										" So the memory allocated into 10 regions", function() {
									$("#arraySize5").effect( "highlight", {color:"dodgerblue"}, 2000, function() {
										$("#smallBox5").removeClass("visibility-hidden");
										$(".smallBox5").addClass("animated-border").one('animationend', function() {
											$(".smallBox5").off();
											$(".smallBox5").css("border-color", "dodgerblue");
											$("#address5").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
												elementRecursion(0);
											});
										});
									});
								});
							});
						});
					});
				});
			});
			break;
		case "restart":
			$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
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

function zooming(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}	
	});
}

function firstAnimation(i) {
	var l3 = $("#input" + i).offset();
	var l4 = $("#value" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#value" + i).removeClass("opacity00");
	TweenMax.from("#value" + i, 0.7, {top: topLength, left: leftLength, onComplete: function() {
		if (i < $("#arraySize1").text()) {
			firstAnimation(++i);
		} else {
			$(".introjs-nextbutton").show();
		}
	}});
} 

function secondAnimation(i) {
	var l3 = $("#inputValue" + i).offset();
	var l4 = $("#valueId" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#valueId" + i).removeClass("opacity00");
	TweenMax.from("#valueId" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
		if (i < 3) {
			secondAnimation(++i);
		} else{
			typing('.introjs-tooltiptext', "So the remaining regions filled with the <span class='ct-code-b-yellow'>0</span>\'s", function() {
				$("#valueId4").removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 2000, function() {
					$("#valueId5").removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 2000, function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
		}
	}});
}

function thirdAnimation(i) {
	var l3 = $("#inValue" + i).offset();
	var l4 = $("#valueIds" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#valueIds" + i).removeClass("opacity00");
	TweenMax.from("#valueIds" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
		if (i < 2) {
			thirdAnimation(++i);
		} else {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				typing('.introjs-tooltiptext',"Here the number of initial values exceeds the size of the array," +
						" so the remaining values are skip automatically.", function() {
					$("#inValue3").effect( "highlight", {color:"red"}, 1000, function() {
						$("#inValue4").effect( "highlight", {color:"red"}, 1000, function() {
							$("#inValue5").effect( "highlight", {color:"red"}, 1000, function() {
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			});
		}
	}});
}

function fourthAnimation(i) {
	var l3 = $("#inputVal" + i).offset();
	var l4 = $("#valuesId" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#valuesId" + i).removeClass("opacity00");
	TweenMax.from("#valuesId" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
		if (i < 3) {
			fourthAnimation(++i);
		} else {
			$(".introjs-nextbutton").show();
		}
	}});
}

function elementRecursion(i) {
	$("#elementVal" + i).removeClass("opacity00", function() {
		if (i < 9) {
			elementRecursion(++i);
		} else {
			var l3 = $("#inpVal").offset();
			var l4 = $("#lastValue").offset();
			var topLength = l3.top - l4.top;
			var leftLength = l3.left-l4.left;
			$("#lastValue").removeClass("opacity00");
			TweenMax.from("#lastValue", 0.5, {top: topLength, left: leftLength, onComplete: function() {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
				$(".user-btn").click(function() {
					$(".user-btn").remove();
					typing('.introjs-tooltiptext', "The size of the array is 10 but the values in the braces is only one." +
							" The remaining elements are initialized with 0\'s because" +
							" missing elements are assigned zero value automatically.", function() {
						$(".lastValues").removeClass("opacity00");
						TweenMax.staggerFrom(".lastValues", 1, {opacity:1, top:-95, onComplete: function() {
							$(".introjs-nextbutton").show();
						}});
					});
				});
			}});
		}
	});
}