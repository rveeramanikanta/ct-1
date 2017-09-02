/**
 * 
 */


var initializationOfOneDimensionalArraysReady = function() {
	console.log("*******************")
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
			element : '#preLineArrayCode',
			intro : '',
			position : 'right',
		}, {
			element : '#exampleDiv6',
			intro : '',
			position : 'right',
			animateStep : 'firstStep',
			tooltipClass : 'hide',
		}, {
			element : '#preCode',
			intro : '',
			position : 'top',
		}, {
			element : '#exampleDiv6',
			intro : '',
			position : 'right',
			animateStep : 'secondStep',
			tooltipClass : 'hide',
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv' :
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			//var text = $("#infoDiv").html();
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
							$("#list5").fadeTo(300, 1, function() {
								$('#nextButton').removeClass("opacity00");
								$('.user-btn').click(function() {
									$('.user-btn').remove();
									introjs.nextStep();
								});
							});
						});
					});
				});
			});
			break;
		case 'exampleDiv1':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv1").removeClass("opacity00", function() {
					$("#firstExample").removeClass("opacity00");
					var text = $("#firstExample").html();
					typing($("#firstExample"), text, function() {
						var text = "Let us consider an example of an array declaration. <br>Here you will notice that an array "+
						"<span class='ct-code-b-yellow'>arr</span> of type <span class='ct-code-b-yellow'>int</span> with size "+
						"<span class='ct-code-b-yellow'>4</span> is declared.<br><br>"+
						"The array <span class='ct-code-b-yellow'>arr</span> is initialized with the integer constants <span class='ct-code-b-yellow'>10"+
						"</span>, <span class='ct-code-b-yellow'>20</span>, <span class='ct-code-b-yellow'>30</span>, <span class='ct-code-b-yellow'>40"+
						"</span> enclosed with in braces."
						typing('.introjs-tooltiptext', text, function() {
							nextButtonFucntion(function() {
								$("#smallBox1").removeClass("visibility-hidden");
								$("#arraySize1").effect( "highlight", {color:"dodgerblue"}, 500, function() {
									$(".smallBox1").addClass("animated-border").one('animationend', function() {
										$(".smallBox1").off();
										$(".smallBox1").css("border-color", "dodgerblue");
										var text = "Since an array always stores elements in a sequential manner the memory location of the second "+
										"element will be adjacent to the memory location of the first element."
										typing('.introjs-tooltiptext', text, function() {
											nextButtonFucntion(function() {
												$("#address1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
													var text = "Since we are declaring an array of type <span class='ct-code-b-yellow'>int</span> "+
													"and <span class='ct-code-b-yellow'>int</span> occupies <span class='ct-color-lime'>2 bytes</span>"+
													" in memory you will notice that the memory addresses of all the elements very sequentially with "+
													"<span class='ct-code-b-yellow'>2</span> as the difference "+
													"starting with <span class='ct-code-b-yellow'>1023</span>.";	
													typing('.introjs-tooltiptext', text, function() {
														nextButtonFucntion(function() {
															firstExampleElementRecursion(1);
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
					$("#secondExample").removeClass("opacity00");
					var text = $("#secondExample").html();
					typing($("#secondExample"), text, function() {
						typing('.introjs-tooltiptext', "Now let us consider an example where we are declaring an array of a larger size but "+
								"initializing with fewer values.", function() {
							nextButtonFucntion(function() {
								$("#arraySize2").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
									$("#smallBox2").removeClass("visibility-hidden");
									$(".smallBox2").addClass("animated-border").one('animationend', function() {
										$(".smallBox2").off();
										$(".smallBox2").css("border-color", "dodgerblue");
										$("#address2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
											secondExampleElementRecursion(5);
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
					$("#thirdExample").removeClass("opacity00");
					var text = $("#thirdExample").html();
					typing($("#thirdExample"), text, function() {
						typing('.introjs-tooltiptext', "In this example you will notice we are declaring an array of size 2 and are attempting to "+
								"initialize it with 5 elements.", function() {
							nextButtonFucntion(function() {
								$("#arraySize3").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
									$("#smallBox3").removeClass("visibility-hidden");
									$(".smallBox3").addClass("animated-border").one('animationend', function() {
										$(".smallBox3").off();
										$(".smallBox3").css("border-color", "dodgerblue");
										$("#address3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
											thirdExampleElementRecursion(10);
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
					$("#fourthExample").removeClass("opacity00");
					var text = $("#fourthExample").html();
					typing($("#fourthExample"), text, function() {
						typing('.introjs-tooltiptext', "array can also be declared without specifying the size in the declaration statement as "+
							"shown above.", function() {
							nextButtonFucntion(function() {
								var text = "If the size of an array is not mentioned during initialization, the compiler considers the number of"+
								" values assigned as the <span class='ct-code-b-yellow'>size of the array</span>.";
								typing('.introjs-tooltiptext', text, function() {
									nextButtonFucntion(function() {
										$("#inputCount").effect("highlight", {color:"#FF9900"}, 1000, function() {
											$("#arraySize4").effect("highlight", {color:"dodgerblue"}, 1000, function() {
												$("#smallBox4").removeClass("visibility-hidden");
												$(".smallBox4").addClass("animated-border").one('animationend', function() {
													$(".smallBox4").off();
													$(".smallBox4").css("border-color", "dodgerblue");
													$("#address4").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
														fourthExampleElementRecursion(12);
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
					$("#fifthExample").removeClass("opacity00");
					var text = $("#fifthExample").html();
					typing($("#fifthExample"), text, function() {
						typing('.introjs-tooltiptext', "Here you will notice we are declaring an array <span class='ct-code-b-yellow'>arr[10]</span> "+
								"without any elements be initialized. In such a situation all the slots are filled with "+
								"<span class='ct-code-b-yellow'>0's</span>.", function() {
							nextButtonFucntion(function() {
								$("#arraySize5").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
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
			break;
		case 'preLineArrayCode':
		//	$("#preCode").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#preLineArrayCode").removeClass("opacity00");
				var text = "Here you will notice an example of array declaration without initialization. Where the arrays elements are assigned at "+
					"later stage."
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'preCode':
			$('.introjs-helperLayer').one('transitionend', function() {
				preCodeLineAnimation(1);
			});
			break;
		case 'exampleDiv6':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#preLineArrayCode").addClass("z-index9999999");
					$("#exampleDiv6").removeClass("opacity00");
					$("#preLineArrayCode").effect( "transfer", { to: $("#smallBox6"), className: "ui-effects-transfer" }, 1500 , function() {
						$("#smallBox6").removeClass("visibility-hidden");
						$(".smallBox6").addClass("animated-border").one('animationend', function() {
							$(".smallBox6").off();
							$(".smallBox6").css("border-color", "dodgerblue");
							$("#address6").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								sixthExampleElementRecursion(1);
							});
						});
					});
				});
				break;
			case 'secondStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					valuesAnimationLaterDeclaration(1);
				});
				break;
			}
			break;
		case "restart":
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function preCodeLineAnimation(i) {
	TweenMax.to($("#preLine" + i), 0.5, {opacity: 1, onComplete: function() {
		$("#preLine" + i).effect( "highlight", {color:"dodgerblue"}, 500, function() {
			if (i < 3) {
				preCodeLineAnimation(++i);
			} else {
				var text = "These assignment statements individually assign the values in their respective indices.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			}
		});
	}});
}

function valuesAnimationLaterDeclaration(i) {
	var l3 = $("#lineValue" + i).offset();
	var l4 = $("#valuesLineId" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#lineValue" + i).addClass("css-circle").effect( "highlight", {color:"white"}, 500, function() {
		$("#lineValue" + i).removeClass("css-circle");
		$("#valuesLineId" + i).removeClass("opacity00");
		TweenMax.from("#valuesLineId" + i, 0.7, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 3) {
				valuesAnimationLaterDeclaration(++i);
			} else {
				setTimeout(function () {
					introjs.nextStep();
				}, 500);
			}
		}});
	});
}

function firstExampleElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 4) {
			firstExampleElementRecursion(++i);
		} else {
			firstAnimation(1);
		}
	}});
}

function secondExampleElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 9) {
			secondExampleElementRecursion(++i);
		} else {
			secondAnimation(1);
		}
	}});
}

function thirdExampleElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 11) {
			thirdExampleElementRecursion(++i);
		} else {
			thirdAnimation(1);
		}
	}});
}

function fourthExampleElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 14) {
			fourthExampleElementRecursion(++i);
		} else {
			fourthAnimation(1);
		}
	}});
}

function sixthExampleElementRecursion(i) {
	TweenMax.to($("#elementSixth" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 3) {
			sixthExampleElementRecursion(++i);
		} else {
			$("#preLineArrayCode").removeClass("z-index9999999");
			setTimeout(function () {
				introjs.nextStep();
			}, 500);
		}
	}});
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
	$("#input" + i).effect("highlight", {color:"#F08080"}, 600, function() {
		$("#value" + i).removeClass("opacity00");
		TweenMax.from("#value" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < $("#arraySize1").text()) {
				firstAnimation(++i);
			} else {
				var text = "The values of an elements are scanned from left to right and are assigned to "+
				"<span class='ct-code-b-yellow'>arr[0]</span>, <span class='ct-code-b-yellow'>arr[1]</span>, "+
				"and so on. <br>Please note that the array indexes starts with <span class='ct-code-b-yellow'>0</span> and ends the last index "+
				"value is <span class='ct-code-b-yellow'>arrays total length-1</span>.";
				typing('.introjs-tooltiptext',text , function() {
					$(".introjs-nextbutton").show();
				});
			}
		}});
	});
} 

function secondAnimation(i) {
	var l3 = $("#inputValue" + i).offset();
	var l4 = $("#valueId" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#inputValue" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#valueId" + i).removeClass("opacity00");
		TweenMax.from("#valueId" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 3) {
				secondAnimation(++i);
			} else{
				var text = "Here you will notice that since only 3 values are provided even though array size is 5 only first three "+
				"slots are filled with the given three values and the remaining slots will be filled with <span class='ct-code-b-yellow'>0's</span>."
				typing('.introjs-tooltiptext', text, function() {
					nextButtonFucntion(function() {
						$("#valueId4").removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 500, function() {
							$("#valueId5").removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 500, function() {
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			}
		}});
	});
}

function thirdAnimation(i) {
	var l3 = $("#inValue" + i).offset();
	var l4 = $("#valueIds" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#inValue" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#valueIds" + i).removeClass("opacity00");
		TweenMax.from("#valueIds" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 2) {
				thirdAnimation(++i);
			} else {
				typing('.introjs-tooltiptext', "Here you will notice that since the array size is only 2 and all the remaining three elements "+
					"will be discarded.", function() {
					nextButtonFucntion(function() {
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
	});
}

function fourthAnimation(i) {
	var l3 = $("#inputVal" + i).offset();
	var l4 = $("#valuesId" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#inputVal" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#valuesId" + i).removeClass("opacity00");
		TweenMax.from("#valuesId" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 3) {
				fourthAnimation(++i);
			} else {
				$(".introjs-nextbutton").show();
			}
		}});
	});
}

function elementRecursion(i) {
	TweenMax.to($("#elementVal" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 9) {
			elementRecursion(++i);
		} else {
			$(".lastValues").removeClass("opacity00");
			TweenMax.staggerFrom(".lastValues", 1, {opacity:1, top:-95, onComplete: function() {
				$(".introjs-nextbutton").show();
				$("#preCode").removeClass("opacity00");
			}});
		}
	}});
}

function nextButtonFucntion(callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
