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
			tooltipClass: 'hide',
		}, {
			element :'#exampleDiv2',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element :'#exampleDiv3',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element :'#exampleDiv4',
			intro :'',
			position: 'right',
			tooltipClass: 'hide',
		}, {
			element :'#exampleDiv5',
			intro :'',
			tooltipClass: 'hide',
		}, {
			element :"#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		
		switch (elementId) {
		case 'rowColumnSyntax':
			$("#smallBox1").addClass("visibility-hidden");
			$(".smallBox1, .smallBox2, .smallBox3").css("border-color", "white");
			$("#rowOneId1, #rowOneId2, #rowOneId3").css("opacity", "0");
			for (var i = 0; i <= 6; i++) {
				$("#element" + i).css("opacity", "0");
				$("#value" + i).addClass("opacity00");
			}
			$("#address1").addClass("opacity00");
			break;
		case 'exampleDiv1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstExample':
				break;
			case 'tdBoxAnimate':
				$("#smallBox1").addClass("visibility-hidden");
				$(".smallBox1, .smallBox2, .smallBox3").css("border-color", "white");
				$("#rowOneId1, #rowOneId2, #rowOneId3").css("opacity", "0");
				for (var i = 0; i <= 6; i++) {
					$("#element" + i).css("opacity", "0");
					$("#value" + i).addClass("opacity00");
				}
				$("#address1").addClass("opacity00").removeClass("animated zoomIn");
				$("#exampleDiv2").addClass("opacity00");
				break;
			}
			break;
		case 'exampleDiv2':
			$("#exampleDiv2").addClass("opacity00");
			$("#smallBox2").addClass("visibility-hidden");
			$(".second-box-1, .second-box-2, .second-box-3").css("border-color", "white");
			$("#rowTwoId1, #rowTwoId2, #rowTwoId3").css("opacity", "0");
			for (var i = 0; i <= 6; i++) {
				$("#elementTwo" + i).css("opacity", "0");
			}
			for (var i = 0; i <= 3; i++) {
				$("#valueTwo" + i).addClass("opacity00");
				$("#valueTwos" + i).addClass("opacity00");
			}
			$("#address2").addClass("opacity00").removeClass("animated zoomIn");
			$("#exampleDiv3").addClass("opacity00");
			break;
		case 'exampleDiv3':
			$("#exampleDiv3").addClass("opacity00");
			$("#address3").addClass("opacity00").removeClass("animated zoomIn");;
			$("#smallBox3").addClass("visibility-hidden");
			$(".three-box-1, .three-box-2, .three-box-3").css("border-color", "white");
			$(".three-box-1, .three-box-2, .three-box-3").removeClass("animated-border");
			for (var i = 0; i <= 12; i++) {
				$("#elementThree" + i).addClass("opacity00");
			}
			for (var i = 0; i <= 5; i++) {
				$("#valueThree" + i).addClass("opacity00");
			}
			$("#rowThreeId1, #rowThreeId2, #rowThreeId3").css("opacity", "0");
			$(".append-zero").css("opacity", "0");
			$("#exampleDiv4").addClass("opacity00");
			
			break;
		case 'exampleDiv4':
			$("#exampleDiv4").addClass("opacity00");
			$("#address4").addClass("opacity00").removeClass("animated zoomIn");;
			$("#smallBox4").addClass("visibility-hidden");
			$(".four-box-1, .four-box-2, .four-box-3").css("border-color", "white");
			$(".four-box-1, .four-box-2, .four-box-3").removeClass("animated-border");
			for (var i = 0; i <= 12; i++) {
				$("#elementFourth" + i).css("opacity", "0");
			}
			for (var i = 0; i <= 5; i++) {
				$("#valueFourth" + i).addClass("opacity00");
			}
			$(".zero-class").css("opacity", "0");
			$("#rowFourthId1, #rowFourthId2, #rowFourthId3").css("opacity", "0");
			$("#exampleDiv5").addClass("opacity00");
			break;
		case 'exampleDiv5':
			$("#exampleDiv5").addClass("opacity00");
			$("#address5").addClass("opacity00").removeClass("animated zoomIn");;
			$("#smallBox5").addClass("visibility-hidden");
			$(".fifth-box-1, .fifth-box-2").css("border-color", "white");
			$(".fifth-box-1, .fifth-box-2").removeClass("animated-border");
			for (var i = 0; i <= 4; i++) {
				$("#elementFifth" + i).css("opacity", "0");
				$("#valueFifth" + i).addClass("opacity00");
			}
			$("#rowFifthId1, #rowFifthId2").css("opacity", "0");
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv' :
		//	$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$('#nextButton').removeClass("opacity00");
					$('.user-btn').click(function() {
						$('#nextButton').remove();
						introjs.nextStep();
					});
				});
			});
			break;
		case 'exampleDiv1':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
				case 'firstExample':
					$('.introjs-helperLayer').one('transitionend', function() {
						$("#exampleDiv1").removeClass("opacity00");
						typing('.introjs-tooltiptext', "Let us consider an example of a simple <span class='ct-code-b-yellow'>"+
								"two dimensional array</span>.", function() {
							$("#firstExample").removeClass("opacity00");
							$(".introjs-nextbutton").show();
						});
					});
					break;
				case 'tdBoxAnimate':
					$('.introjs-helperLayer').one('transitionend', function() {
						$(".introjs-tooltip").removeClass('hide');
						var text = "Let us learn how the elements are distributed in <span class='ct-code-b-yellow'>rows</span> and "+
						"<span class='ct-code-b-yellow'>columns</span> in the memory.";
						typing('.introjs-tooltiptext', text, function() {
							$("#smallBox1").removeClass("visibility-hidden");
							$(".smallBox1, .smallBox2, .smallBox3").addClass("animated-border").one('animationend', function() {
								$(".smallBox1, .smallBox2, .smallBox3").removeClass("animated-border").off();
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
				typing('.introjs-tooltiptext', "<span class='ct-color-num'>3</span> represents number of <span class='ct-code-b-yellow'>rows</span>"+
					" and <span class='ct-color-num'>2</span> represents the number of <span class='ct-code-b-yellow'>columns</span>.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'exampleDiv2':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv2").removeClass("opacity00");
				$(".introjs-tooltip").removeClass('hide');
				var text = "Here we will notice a similar <span class='ct-code-b-yellow'>two dimensional array</span> but in a more "+
					"readable manner.";
				typing('.introjs-tooltiptext', text, function() {
					$("#secondExample").removeClass("opacity00");
					nextButtonFucntion(function() {
						$("#smallBox2").removeClass("visibility-hidden");
						$(".second-box-1, .second-box-2, .second-box-3").addClass("animated-border").one('animationend', function() {
							$(".second-box-1, .second-box-2, .second-box-3").removeClass("animated-border").off();
							borderColorForRows(".second-box-1", ".second-box-2", ".second-box-3");
							rowsSecondRemoving(1);
						});
					});
				});
			});
			break;
		case 'exampleDiv3':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv3").removeClass("opacity00");
				$(".introjs-tooltip").removeClass('hide');
				var text = "<ul><li id='liText1'>Let us consider another example where the number of elements provided is lower than "+
				"the size specified in <span class='ct-code-b-yellow'>rows</span> and <span class='ct-code-b-yellow'>columns</span>.</li></ul>";
				typing('.introjs-tooltiptext', text, function() {
					$("#thirdExample").removeClass("opacity00");
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
			break;
		case 'exampleDiv4':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv4").removeClass("opacity00");
				$(".introjs-tooltip").removeClass('hide');
				var text = "<ul><li id='div4LiSpan1'>Let us consider another scenario where the given <span class='ct-code-b-yellow'>rows</span> "+
				"and <span class='ct-code-b-yellow'>columns</span> do not match "+
						"the elements in the initialization section.</li></ul>";
				typing('.introjs-tooltiptext', text, function() {
					$("#fourthExample").removeClass("opacity00");
					nextButtonFucntion(function() {
						$("#div4LiSpan1").append("<li id='div4LiSpan2'>Here we have <span class='ct-color-num'>3</span> "+
							"<span class='ct-code-b-yellow'>rows</span> and <span class='ct-color-num'>4</span> "+
							"<span class='ct-code-b-yellow'>columns</span> however in the initialization "+
								"section you notice that only <span class='ct-code-b-yellow'>two</span> elements are provided while there are "+
								"<span class='ct-code-b-yellow'>four columns</span> in each <span class='ct-code-b-yellow'>row</span>.</li>");
						typing('#div4LiSpan2', $("#div4LiSpan2").html(), function() {
							$("#smallBox4").removeClass("visibility-hidden");
							$(".four-box-1, .four-box-2, .four-box-3").addClass("animated-border").one('animationend', function() {
								$(".four-box-1, .four-box-2, .four-box-3").removeClass("animated-border").off();
								borderColorForRows(".four-box-1", ".four-box-2", ".four-box-3");
								rowsFourthRemoving(1);
							});
						});
					});
				});
			});
			break;
		case 'exampleDiv5':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleDiv5").removeClass("opacity00");
				$(".introjs-tooltip").removeClass('hide');
				typing('.introjs-tooltiptext', "In the above example you will notice that we can also declare an array without "+
						"mentioning the <span class='ct-code-b-yellow'>count of rows</span>. <br>In which case the compiler automatically "+
						"will use the <span class='ct-code-b-yellow'>count of columns</span> "+
						"to arrive at the <span class='ct-code-b-yellow'>count of rows</span>.", function() {
					$("#fifthExample").removeClass("opacity00");
					nextButtonFucntion(function() {
						$("#emptyRowArray").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
							$("#smallBox5").removeClass("visibility-hidden");
							$(".fifth-box-1, .fifth-box-2").addClass("animated-border").one('animationend', function() {
								$(".fifth-box-1, .fifth-box-2").removeClass("animated-border").off();
								$(".fifth-box-1").css("border-color", "green");
								$(".fifth-box-2").css("border-color", "firebrick");
								rowsFifthRemoving(1);
							});
						});
					});
				});
			});
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

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}

function zooming(selector, callBackFunction) {
	$(selector).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(selector).off();
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
			zooming("#address1", function() {
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
				$('.introjs-nextbutton, .introjs-prevbutton').show();
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
			zooming("#address2", function() {
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
		$("#valueTwo" + i).removeClass("opacity00");
		$("#valueTwos" + j).removeClass("opacity00");
		TweenMax.from("#valueTwo" + i, 0.8, {top: topLength, left: leftLength});
		TweenMax.from("#valueTwos" + j, 0.8, {top: topLen, left: leftLen, onComplete: function() {
			if (i < 3) {
				secondAnimation(++i, ++j);
			} else {
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			}
		}});
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
	$("#elementThree" + i).removeClass("opacity00");
	TweenMax.to($("#elementThree" + i), 0.2, {onComplete: function() {
		if (i < 12) {
			thirdElementRecursion(++i);
		} else {
			zooming("#address3", function() {
				nextButtonFucntion(function() {
					$("#liText1").after("<li id='liText2'>The values are assigned from left to right starting from "+
							"<span class='ct-code-b-yellow'>arr[0][0]"+
							"</span>, <span class='ct-code-b-yellow'>arr[0][1]</span>, <span class='ct-code-b-yellow'>arr[0][2]</span> " +
							"and so on in the order of the storage as shown above.</li>");
					typing('#liText2', $("#liText2").html(), function() {
						nextButtonFucntion(function() {
							thirdAnimation(1);
						});
					});
				});
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
				nextButtonFucntion(function() {
					$("#liText2").after("<li id='liText3'>Since there are only <span class='ct-color-num'>5</span> elements and we have "+
					"four columns the first four elements are "+
					"stored in the <span class='ct-color-num'>1<sup>st</sup></span> row "+
					"and the fifth element is stored as the first element in the <span class='ct-color-num'>2<sup>nd</sup></span> row. "+
					"<br> The remaining empty spaces are filled "+
					"with <span class='ct-code-b-yellow'>0's</span>.</li>")
					typing('#liText3', $("#liText3").html(), function() {
						nextButtonFucntion(function() {
							$(".append-zero").css("opacity", "1");
							TweenMax.staggerFrom(".append-zero", 1, {top:-95, onComplete:function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							}});
						});
					});
				});
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
			zooming("#address4", function() {
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
	var l6 = $("#valueFourth2").offset();
	var topLen = l5.top - l6.top;
	var leftLen = l5.left-l6.left;
	$("#arrayBrace1").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#valueFourth1").removeClass("opacity00");
		$("#valueFourth2").removeClass("opacity00");
		TweenMax.from("#valueFourth1", 0.8, {top: topLength, left: leftLength});
		TweenMax.from("#valueFourth2", 0.8, {top: topLen, left: leftLen, onComplete: function() {
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
			$("#div4LiSpan2").append("<li id='div4LiSpan3'>After initializing the elements in the appropriate rows the remaining empty slots will "+
					"be filled up with <span class='ct-code-b-yellow'>0's</span>.</li>");
			typing('#div4LiSpan3', $("#div4LiSpan3").html(), function() {
				nextButtonFucntion(function() {
					$(".zero-class").css("opacity", "1");	
					TweenMax.staggerFrom(".zero-class", 1, {top:-95, onComplete:function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
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
			zooming("#address5", function() {
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
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			}
		}});
	});
}

function borderColorForRows(selector1, selector2, selector3) {
	$(selector1).css("border-color", "green");
	$(selector2).css("border-color", "firebrick");
	$(selector3).css("border-color", "royalblue");
}