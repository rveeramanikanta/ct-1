var introjs;
var typingInterval = 1;
var countI = 0;
var iVal = 0;
var jVal = 0;
var countJ = 0;
var tValue = 1;
var printStep;
var a = [];
var spaceCheckFlag = true;

var concatinationOfStrings = function() {
	introGuide();
	
	$('#restart').click(function() {
		location.reload();
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
		steps : [ {
					element: '#program',
					intro: '',
					position: 'right'
				}, {
					element: '#charDec',
					intro: '',
					position: 'right'
				}, {
					element: '#memory',
					intro: '',
					tooltipClass: 'hide',
				}, {
					element: '#intDec',
					intro: '',
					tooltipClass: 'hide',
				}, {
					element: '#firstString',
					intro: '',
					//tooltipClass: 'hide'
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputSteps: 'firstStatement'
				}, {
					element: '#scanA',
					intro: '',
				}, {
					element: '#output',
					intro: '',
					outputSteps: 'enterString1',
					position: 'left',
					tooltipClass: 'hide',
				}, {
					element: '#tableId1',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
					element: '#secondString',
					intro: '',
					//tooltipClass: 'hide'
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputSteps: 'secondStatement'
				}, {
					element: '#scanB',
					intro: '',
				}, {
					element: '#output',
					intro: '',
					outputSteps: 'enterString2',
					position: 'left',
					tooltipClass: 'hide',
				}, {
					element: '#tableId2',
					intro: '',
					tooltipClass: 'hide',
					position: 'left'
				}, {
					element: '#loopA',
					intro: '',
					//tooltipClass: 'hide'
				}/*, {
					element: '#iInitialization',
					intro: '',
					tooltipClass: 'hide',
				}, {
					element: '#condition1',
					intro: '',
					//tooltipClass: 'hide',
				}*//*, {
					element: '#loopB',
					intro: '',
					tooltipClass: 'hide'
				}*//*, {
					element: '#jInitialization',
					intro: '',
					tooltipClass: 'hide',
				}*//*, {
					element: '#concatenatedString',
					intro: ''
				}, {
					element: '#output',
					intro: '',
					tooltipClass: 'hide',
					outputSteps: 'thirdStatement'
				}, {
					element: '#restart',
					intro: 'Click to restart.',
					position: 'right'
				}*/ ]
	});
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();	
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "program":
			
			break;
			
		case "intDec":
			$('#cupI, #cupJ').addClass('opacity00');
			break;
			
		case "charDec":
			$('#cupI, #cupJ').addClass('opacity00');
			break;
			
		case "memory":
			$('#cupI, #cupJ').addClass('opacity00');
			$("#memory").addClass("opacity00");
			$("#tableId1").addClass("opacity00");
			$("#stringTd1 td:nth-child(n+2)").remove();
			$("#tableId2").addClass("opacity00");
			$("#stringTd2 td:nth-child(n+2)").remove();
			$("#tableId3").addClass("opacity00");
			$("#stringTd3 td:nth-child(n+2)").remove();
			$("#tableId1").css("opacity", 0);
			$("#tableId2").css("opacity", 0);
			$("#tableId3").css("opacity", 0);
			break;
			
		case "tableId2":
			$(".auto-filled").addClass("opacity00");
			$("#stringTd2 td:not(:empty)").addClass("opacity00");
			break;
		case "tableId1":
			$(".filled").addClass("opacity00");
			$("#stringTd1 td:not(:empty)").addClass("opacity00");
			tValue = 1;
			break;
	
		case "firstString":
			$("#firstStringPrint").remove('firstStringPrint');
			$("#user1Text").remove('user1Text');
			$(".firstLine").empty();
			$("#output").addClass('opacity00');
			break;
			
		case "secondString":
			$("#secondStringPrint").remove('secondStringPrint');
			$("#user2Text").remove('user2Text');
			$(".introjs-prevbutton").hide();
			$(".secondLine").empty();
			break;
			
		case "output":
				
			var outputSteps = introjs._introItems[introjs._currentStep].outputSteps;
			switch(outputSteps) {
				case "firstStatement":
					
					break;
					
				case "enterString1":
					$('#user1Text').val('');
					$("#stringTd1 td").eq($(".filled").length + 1).text('');
					$(".filled").text('');
					$(".filled").removeClass('filled');
					$("#user1Text").removeAttr("disabled");
					tValue == 1;
					break;
					
				case "secondStatement":
					
					break;
					
				case "enterString2":
					$('#user2Text').val('');
					$("#stringTd2 td").eq($(".auto-filled").length + 1).text('');
					$(".auto-filled").text('');
					$(".auto-filled").removeClass('auto-filled');
					$("#user2Text").removeAttr("disabled");
					break;
					
				case "thirdStatement":
						
					break;
			}
		break;
		case "tableId3":
			
			break;
			
		case "scanB":
			$("#user2Text").remove();
			$('.introjs-tooltip').css({'min-width' : '250px'});	
			break;
		case "scanA":
			$(".introjs-tooltip").removeAttr('style');
			$("#user1Text").remove();
			$('.introjs-tooltip').css({'min-width' : '250px'});	
			break;
			
		
			
		case "loopA":
			iVal = 0;
			countI = 0;
			$("#iSpan").text("");
			$("#aVal").removeAttr('style')
			$("#appendText").empty();
			$(".introjs-tooltip").removeAttr('style');
			$("#stringTd3 td:eq(0)").nextAll().text("");
			
			break;
		case "loopB":
			iVal = $("#user1Text").val().length;
			jVal = 0;
			countJ = 0;
			$("#stringTd3 td:eq(" + iVal +")").nextAll().text("");
			$("#iSpan").text($("#user1Text").val().length);
			$("#jSpan").text("");
			$("#aVal").removeAttr('style')
			$("#appendText").empty();
			$(".introjs-tooltip").removeAttr('style');
			break;
			
		case "iInitialization":
			countI = 0;
			break;
			
		case "condition1":
			
				if (introjs._direction == "backward") {
					introjs.goToStep(15);
					introjs._introItems.splice(15);
				}
			
			break;
				
		case "line1":
			
			break;
				
		case "tableId3":
			$("#stringTd3 td:not(:empty)").addClass("opacity00");
			break;
			
		case "iIncrement":
			
			break;
			
		case "jInitialization":
			countJ = 0;
			break;
			
		case "condition2":
			/*if (introjs._direction == "backward") {
				countJ = 0;
				introjs.goToStep(25);
				introjs._introItems.splice(26);
			}*/
			break;
			
		case "line2":
			
			break;
				
		case "jIncrement":
			
			break;
			
		case "secondIIncrement":
			
			break;
			
		case "delimeter":
			$("#tdBorder" + iVal).text("");
			$(".introjs-prevbutton").hide();
			break;
			
		case "concatenatedString":
			$("#concatString").remove('concatString');
			$(".thirdLine").empty();
			//$("#concatString").addClass("opacity00");
			break;
			
		case "restart":
			
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-prevbutton, .introjs-skipbutton, .introjs-nextbutton').hide();
		if (introjs._introItems[introjs._currentStep]["tooltipClass"] == "hide") {
			introjs._introItems[introjs._currentStep]["animation"] = "repeat";
		}
		
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		var elementId = targetElement.id;
		switch (elementId) {
		
			case "program":
				var text = "In this program we will learn how to <span class='ct-code-b-yellow'>concatenation of strings</span>"
							+ " without using any string library functions.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
				
			case "charDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "This statement declares three <span class='ct-code-b-yellow'>character arrays</span> with the size"
								+ " <span class='ct-code-b-yellow'>20</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
				break;
				
			case "memory":
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == 'forward') {
						tableCreation();
					} else {
						introjs.previousStep();
					}
				});
				break;
				
			case "tableId2":
			case "tableId1":
				$('.introjs-tooltip').css({'min-width' : '250px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					if (tValue == 1) {
						$("#user1Text").attr("disabled", true);
						firstUserSpaceFind();
						tValue++;
					} else {
						$("#user2Text").attr("disabled", true);
						secondUserSpaceFind();
						a = [];
					}
					$('.introjs-tooltip').removeClass("hide");
					if (spaceCheckFlag) {
						var text1 = "The <span class='ct-code-b-yellow'>scanf()</span> function reads all the characters that are specified"
									+ " in the console in the same sequence.";
					} else {
						var text1 = "Since you have provided a <span class='ct-code-b-yellow'>space</span> only the first sequence of characters"
									+ " before the space is considered is read by the <span class='ct-code-b-yellow'>scanf()</span> method.";
					}
					var text = text1 + "<br><br> Also note the <span class='ct-code-b-yellow'>delimeter('\\0')</span> character that is"
								+ " automatically appended as the last character that indicates the end of the string in the array.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
				break;
				
			case "intDec":
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".introjs-tooltip").removeClass('hide');
					var text = "Let us declare two integer variables <span class='ct-code-b-yellow'>i</span> and <span class='ct-code-b-yellow'>j</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#iInit").effect("transfer", {to: $("#cupI"), className: "ui-effects-transfer"}, 1000, function() {
							$("#cupI").addClass("z-index").removeClass("opacity00").removeClass("z-index");
							$("#jInit").effect("transfer", {to: $("#cupJ"), className: "ui-effects-transfer"}, 1000, function() {
								$("#cupJ").addClass("z-index").removeClass("opacity00").removeClass("z-index");
								$('.introjs-prevbutton, .introjs-nextbutton').show();
							});
						});
					});
				});
				break;
				
			case "secondString":
			case "firstString":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cupI, #cupJ").removeClass("z-index");
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
				
			case "output":
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					var outputSteps = introjs._introItems[introjs._currentStep].outputSteps;
					switch(outputSteps) {
					
						case "firstStatement":
							if (introjs._direction == "backward") {
								$('#firstStringPrint').remove();
								setTimeout(function () {
									introjs.previousStep();
								}, 1000);
							} else {
								$("#output").removeClass("opacity00");
								$(".firstLine").append('<span id="firstStringPrint">Enter the first string : </span>');
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							}
							break;
							
						case "enterString1":
							$('.introjs-tooltip').removeClass('hide');
							tValue = 1;
							var text = "Enter a string.";
							typing('.introjs-tooltiptext', text, function() {
								$(".firstLine").append('<input type="text" class="input" maxlength="9" id ="user1Text" spellcheck="false">');
								$("#user1Text").effect("highlight", {color: 'yellow'}, 300);
								$("#user1Text").focus();
								firstEvent();
								keyUpEvent("#user1Text");
							});
							break;
							
						case "secondStatement":
							if (introjs._direction == "backward") {
								$('#secondStringPrint').remove();
								setTimeout(function () {
									introjs.previousStep();
								}, 1000);
							} else {
								//	$("#output").removeClass("opacity00");
								$(".secondLine").append('<span id="secondStringPrint">Enter the second string : </span>');
								setTimeout(function () {
									introjs.nextStep();
								}, 1000);
							}
							break;
						case "enterString2":
							$('.introjs-tooltip').removeClass('hide');
							var text = "Enter a string.";
							typing('.introjs-tooltiptext', text, function() {
								$(".secondLine").append('<input type="text" class="input" id="user2Text" maxlength="9" spellcheck="false">');
								$("#user2Text").effect("highlight", {color: 'yellow'}, 300);
								$("#user2Text").focus();
								keydownEvent();
								keyUpEvent("#user2Text");
							});
							break;
							
						case "thirdStatement":
							//nextStep("#restart");
							var newStep = getStep("#end", '', 'right', '');
							introjs.insertOption(introjs._currentStep + 1, newStep);
							printValue();
							break;
					}
				});
				break;
				
			case "scanB":
			case "scanA":
				$(".introjs-tooltip").css({'min-width' : '250px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The <span class='ct-code-b-yellow'>scanf()</span> function with the format specifier" 
								+ " <span class='ct-code-b-yellow'>%s</span> reads multiple characters specified"
								+ " on the console until it encounters a white space.<br><br>"
								+ " The content that is stored into the <span class='ct-code-b-yellow'>ch</span> character array"
								+ " will always have a <span class='ct-code-b-yellow'>'\\0'</span> character that is "
								+ "	automatically appended as the last character that indicates the end of the string in the array.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
				
			case "loopA":
				loopACount = introjs._currentStep;
				$(".back-button").remove();
				$('.introjs-helperLayer').one('transitionend', function() {
					nextStep("#iInitialization", "hide");
					var text = "Execution of <span class='ct-code-b-yellow'>for-loop</span> starts here.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case "loopB":
				loopBCount = introjs._currentStep;
				$(".back-button").remove();
				$(".introjs-prevbutton").hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					nextStep("#jInitialization", "hide");
					$('.introjs-tooltip').removeClass('hide');
					var text = "Execution of <span class='ct-code-b-yellow'>for-loop</span> starts here.";
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltipbuttons').prepend('<a class="introjs-button back-button" onClick = "backBtnLoop()">&#8592; Back</a>');
						$(".introjs-nextbutton").show();
					});
				});
				break;
				
			case "iInitialization":
				introjs.refresh();
				$(".back-button").remove();
				$(".introjs-tooltip").css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "Here we initialized <span class='ct-code-b-yellow'>i</span> with <span class='ct-code-b-yellow i-init'>0</span>.";
					$("#cupI").addClass("z-index");
					typing('.introjs-tooltiptext', text, function() {
						$(".i-value").removeClass("opacity00")
						nextStep("#condition1", "hide");
						fromEffectWithTweenMax("#iSpan", ".zero", iVal, function() {
							$('.introjs-nextbutton').show();	
						});
					});
				});
				break;
				
			case "condition1":
				$(".introjs-prevbutton").hide();
				$("#cupI").removeClass("z-index");
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					$('.introjs-tooltiptext').append('<span class="position-css ct-code-b-yellow opacity00" id="frcondition">'
									+ ' <span class="position-css" id="aVal">a['
									+ '<span id="iVal" class="position-css">i</span>]</span> != \'\\0\'</span><div id="appendText"></div>');
					var l1 = $("#condition1").offset();
					$("#frcondition").offset({top:l1.top, left:l1.left});
					$("#frcondition").removeClass("opacity00");
					TweenMax.to("#frcondition", 1, {top:0, left:0, onComplete: function() {
						rotationEffect('#iVal', countI, function() {
							
							if (countI <= 3 || (($("#user1Text").val().charAt(countI) == " ") || ($("#user1Text").val().charAt(countI) == ""))) {
								if (($("#user1Text").val().charAt(countI) != " ") && ($("#user1Text").val().charAt(countI) != "")) {
									rotationEffect('#aVal', '\'' + $("#user1Text").val().charAt(countI) + '\'', function() {
										//$('.introjs-tooltip').removeClass('hide');
										var text = "Since the above condition evaluates to <span class='ct-code-b-yellow'>true</span>. Hence the control"
													+ " enters in to the <span class='ct-code-b-yellow'>for-loop</span>.";
										typing('#appendText', text, function() {
											nextStep("#line1");
											$('.introjs-nextbutton').show();
										});
									});
								} else {
									rotationEffect('#aVal', '\'\\0\'', function() {
										$('.introjs-tooltip').removeClass('hide');
										var text ="Since the above condition evaluates to"
													+ " <span class='ct-red'>false</span>. Hence the control comes out of the"
													+ " <span class='ct-code-b-yellow'>for-loop</span>.";
										typing('#appendText', text, function() {
											/*var newStep = getStep("#loopB", '', ' ', '');
											introjs.insertOption(introjs._currentStep + 1, newStep);*/
											nextStep("#loopB", "hide");
											$('.introjs-nextbutton').show(); 
											/*$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn">Next &#8594;</a>');
											$('.usr-btn').click(function() {
												$('.usr-btn').remove();
												//introjs.goToStep(introjs._introItems.length - 4);
											});*/										
										});
									});
								}
							} else {
								rotationEffect('#aVal', '\'' + $("#user1Text").val().charAt(countI) + '\'', function() {
									nextStep("#line1");
									setTimeout(function() {
										introjs.nextStep();
									}, 500);
								});
							}
						});
					}});
					
				});
				break;
					
			case "line1":
				$(".introjs-prevbutton").hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>c[" + countI + "] = \'" + $('#user1Text').val().charAt(countI) + "\'</span>";
					typing('.introjs-tooltiptext', text, function() {
						var newStep = getStep("#tableId3", '', 'hide', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						if (countI <= 3) {
							$('.introjs-nextbutton').show();
						} else {
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						}
					});
				});
				break;
					
			case "tableId3":
				$('.introjs-helperLayer').one('transitionend', function() {
					introjs.refresh();
					//$('.auto-filled').removeClass('auto-filled opacity00');
					$("#stringTd3 td:not(:empty)").removeClass("opacity00");
					if (($("#user1Text").val().charAt(countI) != " ") && ($("#user1Text").val().charAt(countI) != "")) {
						$("#tdBorder" + iVal).text(($("#user1Text").val().charAt(countI)));
						var newStep = getStep("#iIncrement", '', 'hide', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
					} else if (countJ < $('.auto-filled').length) {
						$("#tdBorder" + iVal).text(($(".auto-filled").text().charAt(countJ)));
						var newStep = getStep("#secondIIncrement", '', 'hide', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
					}
					else {
						nextStep("#concatenatedString");
						$("#tdBorder" + iVal).text("\\0");
					}
					timing();
				});
				break;
				
			case "iIncrement":
				$('.introjs-tooltip').addClass('hide');
				iVal++;
				countI++;
				$('.introjs-helperLayer').one('transitionend', function() {
					if (iVal == 1) {
						$('.introjs-tooltip').removeClass('hide');
						var text = "<span class='ct-code-b-yellow value-text'>i</span> is incremented to <span class='ct-code-b-yellow' id='animateI'>"
									+ iVal + "</span>";
						typing('.introjs-tooltiptext', text, function () {
							fromEffectWithTweenMax("#iSpan", "#animateI", iVal, function() {
								nextStep("#condition1");
								$('.introjs-nextbutton').show();
							});
						});
					} else {
						$('#iIncrement').append("<span class='opacity00' id='animateI'>" + iVal + "</span>");
						fromEffectWithTweenMax("#iSpan", "#animateI", iVal, function() {
							$('#animateI').remove();
							nextStep("#condition1");
							introjs.nextStep();
						});
					}
				});
				break;
				
			case "jInitialization":
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cupI").removeClass("z-index");
					$("#cupJ").addClass("z-index");
					$('.introjs-tooltip').removeClass("hide");
					$(".back-button").remove();
					var text = "Here we initialized <span class='ct-code-b-yellow'>j</span> with <span class='ct-code-b-yellow j-init'>0</span>";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#condition2", "hide");
						fromEffectWithTweenMax("#jSpan", ".j-zero", jVal, function() {
							$('.introjs-nextbutton').show();
						})
					});
				});
				break;
				
			case "condition2":
				$("#cupJ").removeClass("z-index");
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "forward") {
					$(".introjs-tooltip").removeClass("hide");
					$('.introjs-tooltiptext').append('<span class="position-css ct-code-b-yellow opacity00" id="frcondition">'
												+ ' <span class="position-css" id="aVal">b['
												+ '<span id="iVal" class="position-css">j</span>]</span> != \'\\0\'</span><div id="appendText"></div>');
					var l1 = $("#condition2").offset();
					$("#frcondition").offset({top:l1.top, left:l1.left});
					$("#frcondition").removeClass("opacity00");
					TweenMax.to("#frcondition", 1, {top:0, left:0, onComplete: function() {
						rotationEffect('#iVal', countJ, function() {
							if (countJ <= 3 || countJ == $('.auto-filled').length) {
								if (countJ < $('.auto-filled').length) {
									rotationEffect('#aVal', '\'' + $('.auto-filled').text().charAt(countJ) + '\'', function() {
										var text =" Since the above condition evaluates to <span class='ct-code-b-yellow'>true</span>. The control"
													+ " enters in to the <span class='ct-code-b-yellow'>for-loop</span>.";
										typing('#appendText', text, function() {
											nextStep("#line2");
											$('.introjs-nextbutton').show();
										});
									});
								} else {
									rotationEffect('#aVal', "'\\0'", function() {
										var text = " Since the above condition evaluates to  <span class='ct-red'>false</span>. The control comes"
													+ " out of the <span class='ct-code-b-yellow'>for-loop</span>.";
										typing('#appendText', text, function() {
											nextStep("#delimeter","hide");
											//nextStep("#concatenatedString");
											$('.introjs-nextbutton').show();
										});
									});
								}
							} else {
								rotationEffect('#aVal', '\'' + $('.auto-filled').text().charAt(countJ) + '\'', function() {
									nextStep("#line2");
									setTimeout(function() {
										introjs.nextStep();
									}, 500);
								});
							}
						});
					}});
					}
					
				});
				break;
				
			case "line2":
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>c[" + iVal + "] = \'" + $('.auto-filled').text().charAt(countJ) + "\'</span>";
					typing('.introjs-tooltiptext', text, function() {
						var newStep = getStep("#tableId3", '', 'hide', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
						if (countJ <= 3) {
							$('.introjs-nextbutton').show();
						} else {
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						}
					});
				});
				break;
					
			case "jIncrement":
				$('.introjs-tooltip').addClass('hide');
				jVal++;	
				countJ++;
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cupJ").addClass("z-index");
					$("#cupI").removeClass("z-index");
					if (jVal == 1) {
						$('.introjs-tooltip').removeClass('hide');
						var text = "<span class='ct-code-b-yellow value-text-j'>j</span> is incremented to <span class='ct-code-b-yellow' id='animateJ'>"
									+ jVal + "</span>";
						typing('.introjs-tooltiptext', text, function () {
							fromEffectWithTweenMax("#jSpan", "#animateJ", jVal, function() {
								nextStep("#condition2", "hide");
								$('.introjs-nextbutton').show();
							});
						});
					} else {
						$('#jIncrement').append("<span class='opacity00' id='animateJ'>"+ jVal + "</span>")
						fromEffectWithTweenMax("#jSpan", "#animateJ", jVal, function() {
							$('#animateJ').remove();
							nextStep("#condition2", "hide");
							introjs.nextStep();
						});
					}
				});
				break;
				
			case "secondIIncrement":
				$('.introjs-tooltip').addClass('hide');
				iVal++;
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#cupJ").removeClass("z-index");
					$("#cupI").addClass("z-index");
					$('#secondIIncrement').append("<span class='opacity00' id='animateII'>"+ iVal + "</span>")
					var newStep = getStep("#jIncrement", '', 'hide', '');
					introjs.insertOption(introjs._currentStep + 1, newStep);
					fromEffectWithTweenMax("#iSpan", "#animateII", iVal, function() {
						$('#animateII').remove();
						introjs.nextStep();
					})
				});
				break;
				
			case "delimeter":
				$(".introjs-prevbutton").hide();
				$('.introjs-tooltip').css({'min-width' : '200px'});
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var text = "<span class='ct-code-b-yellow'>c[" + iVal + "] = '\\0'";
					typing('.introjs-tooltiptext', text, function() {
						//var newStep = getStep("#tableId3", '', 'hide', '');
						//introjs.insertOption(introjs._currentStep + 1, newStep);
						//$(".introjs-prevbutton").show();
						nextStep("#tableId3", "hide");
						$('.introjs-tooltipbuttons').prepend('<a class="introjs-button back-button" onClick = "backBtn2()">&#8592; Back</a>');
						$(".introjs-nextbutton").show();
					});
				});
				break;
				
			case "concatenatedString":
				$(".back-button").remove();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "The function printf() using <span class='ct-code-b-yellow'>%s</span> as the conversion specification displays the string.";
					typing('.introjs-tooltiptext', text, function() {
						nextStep("#output", "hide", "thirdStatement");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'end':
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "This is the end of the main() function where the program execution ends.";
					typing(".introjs-tooltiptext",text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
						var newStep = getStep("#restart", '', 'right', '');
						introjs.insertOption(introjs._currentStep + 1, newStep);
					});
				});
				break;
	
			case "restart":
				$('.introjs-tooltip').css({'min-width' : '110px'});
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					typing(".introjs-tooltiptext", "Click to restart.",function() {});
				});
				break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function getStep(element, intro, tooltipClass, position, outputSteps) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	
	if (typeof  outputSteps != 'undefined') {
		step['outputSteps'] = outputSteps;
	}
	
	return step;
}

function nextStep(id, tooltipClass, abc) {
	var newStep = getStep(id, '', tooltipClass, '', abc);
	introjs.insertOption(introjs._currentStep + 1, newStep);
}

function timing() {
	if (introjs._direction == 'backward') {
		setTimeout(function() {
			introjs.previousStep();
		}, 1000);
	} else{
		setTimeout(function() {
			introjs.nextStep();
		}, 1000);
	}
}

function firstEvent() {
	$(".input").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		$('.error-text').remove();
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9, spacebar = 32;
		if ($.inArray(e.keyCode, [46, 8, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (e.keyCode == 9 || e.keyCode == 32) {
			e.preventDefault();
		}
		
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-red error-text'><br/>Please restrict the string maximum length to 9.</span>");
			e.preventDefault();
		}
	});
}

function keydownEvent() {
	$(".input").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		$('.error-text').remove();
		
		if (e.keyCode == 32) {
			spaceCheckFlag = false;
		}
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 9) {
			e.preventDefault();
		}
		if ($(this).val().length > max-1) {
			$('.introjs-tooltiptext').append("<span class='ct-red error-text'><br/>Please restrict the string maximum length to 9.</span>");
			e.preventDefault();
		}
	}); 
}

function keyUpEvent(id) {
	$(id).on("keyup", function(e) {
		if ($(id).val().trim().length != 0) {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
			if (e.keyCode == 13) {
				introjs.nextStep();
			}
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		}
	});
}

function transferEffect(id1, id2, callBackFunction) {
	$(id1).addClass("z-index99").effect("transfer", {to: $(id2), className: "ui-effects-transfer"}, 800, function() {
		if (typeof callBackFunction === "function") {
			$(id1).removeClass("z-index99")
			callBackFunction();
		}
	});
}

function tableCreation() {
	$("#memory").removeClass("opacity00");
	for (var i = 0; i < 10; i++) {
		$("#stringTd1, #stringTd2").append("<td class='td-border'></td>");
	}
	for (var i = 0; i < 20; i++) {
		$("#stringTd3").append('<td class="td-border" id="tdBorder' + i + '"></td>');
	}
	transferEffect("#charA", "#tableId1", function() {
		TweenMax.to($("#tableId1"), 0.5, {opacity: 1, onComplete: function() {
			transferEffect("#charB", "#tableId2", function() {
				TweenMax.to($("#tableId2"), 0.5, {opacity: 1, onComplete: function() {
					transferEffect("#charC", "#tableId3", function() {
						TweenMax.to($("#tableId3"), 0.5, {opacity: 1, onComplete: function() {
							timing();
						}});
					});
				}});
			});
		}});
	});
}

function firstUserSpaceFind() {
	$('.filled').removeClass('filled opacity00');
	$("#stringTd1 td:not(:empty)").removeClass("opacity00");
	$.each($("#user1Text").val().split(""), function(index, value) {
		if (value.trim() != "") {
	    	$("#stringTd1 td").eq(index + 1).addClass("filled").text(value);
	    } else {
	    	$("#stringTd1 td").eq(index + 1).text("\\0");
			return false;
	    }
	});

	if ($(".filled").length < 10) {
		$("#stringTd1 td").eq($(".filled").length + 1).text("\\0");
	}
}

function secondUserSpaceFind() {
	$('.auto-filled').removeClass('auto-filled opacity00');
	$("#stringTd2 td:not(:empty)").removeClass("opacity00");
	$.each($("#user2Text").val().split(""), function(index, value) {
		  a[index] = value;
		  if (a[index] != " ") {
		    $("#stringTd2 td").eq($(".auto-filled").length + 1).addClass("auto-filled").text(value);
		  } else {
		     	if ($('.auto-filled').length > 0) {
		     		$("#stringTd2 td").eq($(".auto-filled").length + 1).text("\\0");
					return false;
		     	}
		  }
		});
	if ($(".auto-filled").length < 10) {
		$("#stringTd2 td").eq($(".auto-filled").length + 1).text("\\0");
	}
}

function fromEffectWithTweenMax(id1, id2, val, callBackFunction) {
	var l1 = $(id2).offset();
	$(id1).html($(id2).text()).offset({
	  "top" : l1.top,
	  "left" : l1.left
	});
	TweenMax.to(id1, 1, {top : 0, left : 0, onComplete: function() {
		$(id1).text("" + val + "");
	  if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function printValue() {
	$(".thirdLine").append('<span id="concatString" class="opacity00">The concatenated string = <span class="ct-code-b-yellow">'
						+ $(".filled, .auto-filled").text() + '</span></span>')
	$("#concatString").removeClass("opacity00");
	timing();
}

function exceptSpace(id1, id2, callBackFunction) {
	$.each($(id1).val().split(" "), function(index, value) {
		a[index] = value;
	});
	$(id2).text(a[0]);
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}


function rotationEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : 90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}
function backBtnLoop() {
	$(".back-button").remove();
	$(".introjs-prevbutton").hide();
	flag = true;
	introjs.goToStep(15);
	
}
function backBtn2() {
	$(".back-button").remove();
	flag = true;
	introjs.goToStep(loopBCount + 1);
}