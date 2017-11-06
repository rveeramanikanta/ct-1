var intializationOfTwoDimensionalArraysReady = function() {
introGuide();
	
	$("#restart").click(function() {
		location.reload();
	});
	
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
}

function introGuide() {
	introjs = introJs();
	
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
			element :'#exampleDiv1',
			intro : '',
			animateStep: 'firstExample',
		}, {
			element :'#rowColumnSyntax',
			intro : '',
		}, {
			element :'#exampleDiv1',
			intro : '',
			animateStep: 'tdBoxAnimate',
		}, {
			element :'#exampleDiv2',
			intro : '',
		}, {
			element :'#exampleDiv3',
			intro : '',
			animateStep: 'thirdExample',
		}, {
			element :'#exampleDiv3',
			intro : '',
			animateStep: 'tweenmaxAnimate',
		}, {
			element :'#exampleDiv3',
			intro : '',
			animateStep: 'appendingZero',
		}, {
			element :'#exampleDiv4',
			intro :'',
			position: 'right',
		}, {
			element :'#exampleDiv5',
			intro :'',
		}/* , {
			element :'#sixthExample',
			intro : '',
		} */, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
//		console.log("steps :" + introjs._currentStep);
		switch(elementId) {
		case 'infoDiv' :
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$('#nextButton').removeClass("opacity00");
					$('.user-btn').click(function() {
						$('.user-btn').remove();
						introjs.nextStep();
					});
				});
			});
			break;
		case 'heading':
			$(".introjs-nextbutton").show();
			break;
		case 'exampleDiv1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
				case 'firstExample':
					$('.introjs-helperLayer').one('transitionend', function() {	
						$("#exampleDiv1").removeClass("opacity00", function() {
							typing('.introjs-tooltiptext', "Let us consider an example of a simple <span class='ct-code-b-yellow'>"+
									"two dimensional array</span>.", function() {
								$("#firstExample").removeClass("opacity00", function() {
									$(".introjs-nextbutton").show();
								});
							});
						});
					});
					break;
				case 'tdBoxAnimate':
					$('.introjs-helperLayer').one('transitionend', function() {
						var text = "Let us learn how the elements are distributed in rows and columns in the memory.";
						typing('.introjs-tooltiptext', text, function() {
							$("#smallBox1").removeClass("visibility-hidden");
							$(".smallBox1, .smallBox2, .smallBox3").addClass("animated-border").one('animationend', function() {
								$(".smallBox1, .smallBox2, .smallBox3").off();
								borderColorForRows(".smallBox1", ".smallBox2", ".smallBox3");
								rowsFirstRemove(1);
							});
						});
					});
					break;
			}
			break;
		case 'rowColumnSyntax':
			$('.introjs-helperLayer').one('transitionend', function() {
				typing('.introjs-tooltiptext', "3 represents number of rows and 2 represents the number of columns.", function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'exampleDiv2':
			/* var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'secondExample': */
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv2").removeClass("opacity00", function() {
					var text = "Here we will notice a similar <span class='ct-code-b-yellow'>two dimensional array</span> but in a more "+
						"readable manner.";
					typing('.introjs-tooltiptext', text, function() {
						$("#secondExample").removeClass("opacity00", function() {
							nextButtonFucntion(function() {
								$("#smallBox2").removeClass("visibility-hidden");
								$(".second-box-1, .second-box-2, .second-box-3").addClass("animated-border").one('animationend', function() {
									$(".second-box-1, .second-box-2, .second-box-3").off();
									borderColorForRows(".second-box-1", ".second-box-2", ".second-box-3");
									rowsSecondRemoving(1);
								});
							});
						});
					});
				});
			});
		//	}
			break;
		case 'exampleDiv3':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'thirdExample':
				$('.introjs-helperLayer').one('transitionend', function() {	
					$("#exampleDiv3").removeClass("opacity00", function() {
						typing('.introjs-tooltiptext', "Let us consider another example where the number of elements provided is lower than "+
								"the size specified in rows and columns.", function() {
							$("#thirdExample").removeClass("opacity00", function() {
								nextButtonFucntion(function() {
									$("#smallBox3").removeClass("visibility-hidden");
									$(".three-box-1, .three-box-2, .three-box-3").addClass("animated-border").one('animationend', function() {
										$(".three-box-1, .three-box-2, .three-box-3").off();
										borderColorForRows(".three-box-1", ".three-box-2", ".three-box-3");
										rowsThirdRemoving(1);
									});
								});
							});
						});
					});
				});
				break;
			case 'tweenmaxAnimate':
				typing('.introjs-tooltiptext', "The values are assigned from left to right starting from <span class='ct-code-b-yellow'>arr[0][0]"+
						"</span>, <span class='ct-code-b-yellow'>arr[0][1]</span>, <span class='ct-code-b-yellow'>arr[0][2]</span> " +
						"and so on in the order of the storage as shown above.", function() {
					nextButtonFucntion(function() {
						thirdAnimation(1);
					});
				});
				break;
			case 'appendingZero':
				var text = "Since there are only 5 elements and we have four columns the first four elements are stored in the first row "+
					"and the fifth element is stored as the first element in the second row. <br> The remaining empty spaces are filled "+
					"with <span class='ct-code-b-yellow'>0's</span>.";
				typing('.introjs-tooltiptext', text, function() {
					nextButtonFucntion(function() {
						$(".append-zero").removeClass("opacity00");
						TweenMax.staggerFrom(".append-zero", 1, {opacity:1, top:-95, onComplete: function() {
							$(".introjs-nextbutton").show();
						}});
					});
				});
				break;
			}
			break;
		case 'exampleDiv4':
			$('.introjs-helperLayer').one('transitionend', function() {	
				$("#exampleDiv4").removeClass("opacity00", function() {
					typing('.introjs-tooltiptext', "Let us consider another scenario where the given rows and columns do not match "+
							"the elements in the initialization section.", function() {
						$("#fourthExample").removeClass("opacity00", function() {
							nextButtonFucntion(function() {
								typing('.introjs-tooltiptext', "Here we have three rows and four columns however in the initialization "+
										"section you notice that only two elements are provided while there are four columns in each row.", function() {
									$("#smallBox4").removeClass("visibility-hidden");
									$(".four-box-1, .four-box-2, .four-box-3").addClass("animated-border").one('animationend', function() {
										$(".four-box-1, .four-box-2, .four-box-3").off();
										borderColorForRows(".four-box-1", ".four-box-2", ".four-box-3");
										rowsFourthRemoving(1);
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
					typing('.introjs-tooltiptext', "In the above example you will notice that we can also declare an array without "+
							"mentioning the <span class='ct-code-b-yellow'>count of rows</span>. <br>In which case the compiler automatically "+
							"will use the <span class='ct-code-b-yellow'>count of columns</span> "+
							"to arrive at the <span class='ct-code-b-yellow'>count of rows</span>.", function() {
						$("#fifthExample").removeClass("opacity00", function() {
							nextButtonFucntion(function() {
								$("#emptyRowArray").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
									$("#smallBox5").removeClass("visibility-hidden");
									$(".fifth-box-1, .fifth-box-2").addClass("animated-border").one('animationend', function() {
										$(".fifth-box-1, .fifth-box-2").off();
										$(".fifth-box-1").css("border-color", "green");
										$(".fifth-box-2").css("border-color", "firebrick");
										//$(".four-box-3").css("border-color", "royalblue");
										rowsFifthRemoving(1);
									});
								});
							});
						});
					});
				});
			});
			break;
		/* case 'sixthExample':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#sixthExample").removeClass("opacity00", function() {
					typing('.introjs-tooltiptext', "Here row and column size is not mentioned. Without column size the memory will not be created. " +
						"So it will gives an <span class='ct-color-red'><b>error</b></span>.", function() {
						$("#emptySixRow").effect( "highlight", {color:"red"}, 1000);
						$("#emptySixColumn").effect( "highlight", {color:"red"}, 1000, function() {
							$(".introjs-nextbutton").show();
						});
					});
				});
			});
			break; */
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

function nextButtonFucntion(callBackFunction) {
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$(".user-btn").click(function() {
		$(".user-btn").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function rowsFirstRemove(i) {
	TweenMax.to($("#rowOneId" + i), 0.3, {opacity: 1, onComplete: function() {
		if (i < 3) {
			rowsFirstRemove(++i);
		} else {
			firstElementRecursion(1);
		}
	}});
}

function firstElementRecursion(i) {
	TweenMax.to($("#element" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 6) {
			firstElementRecursion(++i);
		} else {
			$("#address1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				$("#address1").off();
				nextButtonFucntion(function() {
					var text = "The integer constants values provide during the initialization within the braces are scanned from "+
					"left to right and are assigned to <span class='ct-code-b-yellow'>arr[0][0]</span>, <span class='ct-code-b-yellow'>"+
					"arr[0][1]</span>, and so on.<span class='secondText'></span>";
					typing('.introjs-tooltiptext',text, function() {
						nextButtonFucntion(function() {
							var text = '<ul>' +
										'<li>Here <span class="ct-code-b-yellow">0<sup><b>th</b></sup> row</span> is initialised with values '+
										'<span class="ct-code-b-yellow">10</span> and <span class="ct-code-b-yellow">20</span>.</li>' +
										'<li><span class="ct-code-b-yellow">1<sup><b>st</b></sup> row</span> is initialised with values '+
										'<span class="ct-code-b-yellow">30</span> and <span class="ct-code-b-yellow">40</span>.</li>' +
										'<li><span class="ct-code-b-yellow">2<sup><b>nd</b></sup> row</span> is initialised with values '+ 
										'<span class="ct-code-b-yellow">50</span> and <span class="ct-code-b-yellow">60</span>.</li>' +
										'</ul>'
							typing('.secondText', text, function() {
								firstAnimation(1);
							});
						});
					});
				});
			});
		}
	}});
}

function firstAnimation(i) {
	var l3 = $("#input" + i).offset();
	var l4 = $("#value" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#input" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#value" + i).removeClass("opacity00");
		TweenMax.from("#value" + i, 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 6 ) {
				firstAnimation(++i);
			} else {
				$(".introjs-nextbutton").show();
			}
		}});
	});
}

function rowsSecondRemoving(i) {
	TweenMax.to($("#rowTwoId" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 3) {
			rowsSecondRemoving(++i);
		} else{
			secondElementRecursion(1);
		}
	}});
}

function secondElementRecursion(i) {
	TweenMax.to($("#elementTwo" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 6) {
			secondElementRecursion(++i);
		} else {
			$("#address2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				$("#address2").off();
				secondAnimation(1, 1);
			});
		}
	}});
}

function secondAnimation(i, j) {
	var l3 = $("#inputTwo" + i).offset();
	var l4 = $("#valueTwo" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	var l5 = $("#inputTwos" + j).offset();
	var l6 = $("#valueTwos" + j).offset();
	var topLen = l5.top - l6.top;
	var leftLen = l5.left-l6.left;
	$("#innerArray" + j).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
	//	$("#inputTwo" + i).effect("highlight", {color:"#F08080"}, 500);
	//	$("#inputTwos" + i).effect("highlight", {color:"#F08080"}, 500, function() {
			$("#valueTwo" + i).removeClass("opacity00");
			$("#valueTwos" + j).removeClass("opacity00");
			TweenMax.from("#valueTwo" + i, 0.8, {top: topLength, left: leftLength});
			TweenMax.from("#valueTwos" + j, 0.8, {top: topLen, left: leftLen, onComplete: function() {
				if (i < 3) {
					secondAnimation(++i, ++j);
				} else {
					$(".introjs-nextbutton").show();
				}
			}});
	//	});
	});
}

function rowsThirdRemoving(i) {
	TweenMax.to($("#rowThreeId" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 3) {
			rowsThirdRemoving(++i);
		} else{
			thirdElementRecursion(1);
		}
	}});
}

function thirdElementRecursion(i) {
	TweenMax.to($("#elementThree" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 12) {
			thirdElementRecursion(++i);
		} else {
			$("#address3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				$("#address3").off();
			$(".introjs-nextbutton").show();
			});
		}
	}});
}

function thirdAnimation(i) {
	var l3 = $("#inputThree" + i).offset();
	var l4 = $("#valueThree" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#inputThree" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#valueThree" + i).removeClass("opacity00");
		TweenMax.from("#valueThree" + i, 0.7, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 5) {
				thirdAnimation(++i);
			} else {
				$(".introjs-nextbutton").show();
			}
		}});
	});
}

function rowsFourthRemoving(i) {
	TweenMax.to($("#rowFourthId" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 3) {
			rowsFourthRemoving(++i);
		} else{
			fourthElementRecursion(1);
		}
	}});
}

function fourthElementRecursion(i) {
	TweenMax.to($("#elementFourth" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 12) {
			fourthElementRecursion(++i);
		} else {
			$("#address4").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				$("#address4").off();
				nextButtonFucntion(function() {
					fourthAnimation();
				});
			});
		}
	}});
}

function fourthAnimation() {
	var l3 = $("#inputFourth1").offset();
	var l4 = $("#valueFourth1").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	var l5 = $("#inputFourths1").offset();
	var l6 = $("#valueFourths1").offset();
	var topLen = l5.top - l6.top;
	var leftLen = l5.left-l6.left;
	$("#arrayBrace1").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#valueFourth1").removeClass("opacity00");
		$("#valueFourths1").removeClass("opacity00");
		TweenMax.from("#valueFourth1", 0.8, {top: topLength, left: leftLength});
		TweenMax.from("#valueFourths1", 0.8, {top: topLen, left: leftLen, onComplete: function() {
			$("#arrayBrace2").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
				fourthAnimationSecond(3);
			});
		}});
	});
}

function fourthAnimationSecond(i) {
	var l3 = $("#inputFourth" + i).offset();
	var l4 = $("#valueFourth" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#valueFourth" + i).removeClass("opacity00");
	TweenMax.from("#valueFourth" + i, 0.7, {top: topLength, left: leftLength});
	if (i < 5) {
		fourthAnimationSecond(++i);
	} else {
		nextButtonFucntion(function() {
			var text = "After initializing the elements in the appropriate rows the remaining empty slots will be filled up with "+
				"<span class='ct-code-b-yellow'>0's</span>.";
			typing('.introjs-tooltiptext', text, function() {
				nextButtonFucntion(function() {
					$(".zero-class").removeClass("opacity00");
					TweenMax.staggerFrom(".zero-class", 1, {opacity:1, top:-95, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
			});
		});
	}
}

function rowsFifthRemoving(i) {
	TweenMax.to($("#rowFifthId" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 2) {
			rowsFifthRemoving(++i);
		} else{
			fifthElementRecursion(1);
		}
	}});
}

function fifthElementRecursion(i) {
	TweenMax.to($("#elementFifth" + i), 0.2, {opacity: 1, onComplete: function() {
		if (i < 4) {
			fifthElementRecursion(++i);
		} else {
			$("#address5").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				$("#address5").off();
				fifthAnimation(1);
			});
		}
	}});
}

function fifthAnimation(i) {
	var l3 = $("#inputFifth" + i).offset();
	var l4 = $("#valueFifth" + i).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	$("#inputFifth" + i).effect("highlight", {color:"#F08080"}, 500, function() {
		$("#valueFifth" + i).removeClass("opacity00");
		TweenMax.from("#valueFifth" + i, 0.7, {top: topLength, left: leftLength, onComplete: function() {
			if (i < 4) {
				fifthAnimation(++i);
			} else {
				$(".introjs-nextbutton").show();
			}
		}});
	});
}

function borderColorForRows(selector1, selector2, selector3) {
	$(selector1).css("border-color", "green");
	$(selector2).css("border-color", "firebrick");
	$(selector3).css("border-color", "royalblue");
}