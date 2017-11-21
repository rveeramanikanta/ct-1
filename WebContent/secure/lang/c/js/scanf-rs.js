var introjs;
var typingSpeed = 1;
var tl;
var arr;

var scanfRSReady = function() {
	introGuide();
	tl = new TimelineLite();
	$("[data-toggle='popover']").popover({html : true});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#description",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#codeAnimation",
			intro : "",
			position : "right",
			tooltipClass:"hide"
		},{
			element : "#addressDiv",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#printf",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf",
			intro : "",
			position : "right",
			tooltipClass :"hide"
		},{
			element : "#consoleId",
			intro : "",
			position : "right",
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide",
			
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf",
			intro : "",
			position : "bottom",
			tooltipClass :"hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf",
			intro : "",
			position : "bottom",
			tooltipClass :"hide"
		},{
			element : "#consoleId",
			intro : "",
			position : "right",
			tooltipClass :"hide"
		},{
			element : "#finalPrintf",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#restart",
			intro : "",
			position : "right",
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		case "description":
			$("#codeAnimation").addClass("opacity00");
			break;
			
		case "codeAnimation":
			$("#addressDiv").addClass("opacity00");
			break;
			
		case "printf":
			$("#consoleId").removeAttr("style").addClass("opacity00");
			$("#runEditor1").addClass("opacity00");
			break;
			
		case "addressDiv":
			
			break;
			
		case "consoleId":
			
				if (introjs._currentStep == 4) {
					
					
				} else if (introjs._currentStep == 6) {
						$("#inputVal").text("");
						//$(".introjs-tooltip").removeClass("hide");
					
				} else if (introjs._currentStep == 7) {
					$(".introjs-helperLayer").one("transitionend", function() {
						if (introjs._direction == "backward") {
							introjs._introItems.splice(8, 1);	//only one element at index 8
						}
					});
					
				} else if (introjs._currentStep == 9) {
					$('#val0').css('border', '');
					
				} else if (introjs._currentStep == 11) {
					$('#val1').css('border', '');
				} else if (introjs._currentStep == 13) {
					
				} else {
					
				}
			break;
			
		case "scanf":
			
				if (introjs._currentStep == 5) {
					$("#inputVal").text("");
					$("[data-toggle='popover']").popover("hide");	
				} else if (introjs._currentStep == 10) {
					$("[data-toggle='popover']").popover("hide");	
					$("#givenNum2").removeClass("zIndex");
					$("#givenNum1").removeClass("zIndex");
					$("#val0, #val1").css('border', '');
					$("#percentId").css('border', '1px solid black');
					//introjs.goToStep(5);
				} else if (introjs._currentStep == 12){
					$("#percentId").css('border', '1px solid black');
					$("#scanNum2").popover("hide");
				}
				else {
					
				}
			break;
			
		case "finalPrintf":
			
			break;
			
		case "rsId":
			$("#givenNum1").text("");
			$('#rsId').css('border', '1px solid black');
			$('#rsId').css('color', 'black');
			break;
			
		
		}
	});	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
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
				
				// ********************** end ************back button logic
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		case "description":
			$(".introjs-nextbutton").hide();
			setTimeout(function() {
				fadeEffect("#desList1", function() {
					fadeEffect("#desList2", function() {
						fadeEffect("#desList3", function() {
							var text2 = "Let us see how it works by entering the first input preceded by <span class='ct-code-b-yellow'>Rs.</span> " 
								+ " and other input followed by <span class='ct-code-b-yellow'>%</span>";
						});
					});
				});
			},100);
			break;
			
		case "codeAnimation":
			$(".introjs-nextbutton").hide();
			$("#codeAnimation").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text = "In this program we will learn how <span class='ct-code-b-yellow'>scanf()</span> function behaves when " 
					+ " formatting characters are mixed with special characters."		
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "printf":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				//$(".introjs-tooltip").removeClass("hide");
				setTimeout(function() {
					if (introjs._direction=="forward") {
							introjs.nextStep()
					} else {
						introjs.previousStep()
					}
				}, 500);
			});
			break;
			
		case "addressDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				//$(".introjs-tooltip").removeClass("hide");
				$("#addressDiv").removeClass("opacity00");
				tl.to("#addressLocation", 1, {opacity: 1, onComplete: function() {
					$("#addressLocation").removeClass("opacity00");
					setTimeout(function() {
						if (introjs._direction=="forward") {
								introjs.nextStep()
						} else {
							introjs.previousStep()
						}
					}, 500);
				}});
			});
			break;
			
		case "consoleId":
			$(".introjs-nextbutton").hide();
				if (introjs._currentStep == 4) {
					$(".introjs-helperLayer").one("transitionend", function() {
						if (introjs._direction=="forward") {
							//$(".introjs-tooltip").removeClass("hide");
							tl.to("#consoleId", 1, {opacity: 1, onComplete: function() {
								$("#consoleId").removeClass("opacity00");
								$("#runEditor1").removeClass("opacity00");
								var text = "Enter ammount and interest: <span id='inputVal'></span>"
									typing("#runEditor1", text, function() {
										setTimeout(function() {			
											introjs.nextStep()
										}, 500);
									});
							}});
						} else {
							setTimeout(function() {	
								introjs.previousStep()
							}, 500);
						}
					});
				} else if (introjs._currentStep == 6) {
					$(".introjs-helperLayer").one("transitionend", function() {
						introjs._introItems[introjs._currentStep]["isCompleted"] = false;
						//$(".introjs-tooltip").removeClass("hide");
						var text = "Rs.<input id='num1' class='int-num'/>%";
						typing("#inputVal", text, function() {
							var text2 = "Enter <span class='ct-code-b-yellow'>ammount</span> and <span class='ct-code-b-yellow'>interest</span>.<br/><br/> " 
										+ " Here we are providing characters <span class='ct-code-b-yellow'>Rs.</span> and <span class='ct-code-b-yellow'>%</span> " 
										+ " in console but while programing you should type those characters as mentioned in <span class='ct-code-b-yellow'>scanf()</span>. <br>"
										+ " While you are trying to read numbers using scanf() you can seperate the numbers either by space or by hitting enter between the numbers.<br>"
										+ " In this case please provide a <span class='ct-code-b-yellow'>space</span> to sperate your numbers."; 
										
							typing(".introjs-tooltiptext", text2, function() {
								$("#num1").addClass("blinking-orange");
								$("#num1").focus();
								arr = [];
								$('#num1').on("keydown", function(e) {
									if ((arr.length == 2 || arr.length == 0) && e.keyCode == 32) {
										e.preventDefault();
									}
									if (arr.length == 1) {
										var flag = false;
										flag = $('#num1').val().indexOf(' ') >= 0;
										if (e.keyCode == 32 && flag) {
											e.preventDefault();
										}
									}
									if ($.inArray(e.keyCode, [46, 8, 9, 27, 32, 35, 36, 37, 39]) !== -1) {
										return;
									}
									if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
										e.preventDefault();
									}
								});
								
								$('#num1').on("keyup", function(e) {
									$('.length-error-text').remove();
									if ($(this).val() == "") {
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please enter 2 numbers and separate each with space.</span>");
									}
									var givenText = $(this).val();
									var splittedText = givenText.split(" ");
									arr = [];
									
									$.each(splittedText, function(idx, val) {
										if (val != '') {
											arr.push(val);
										}
									});
									
									if (arr.length < 2) {
										$(".introjs-nextbutton,.introjs-prevbutton").hide();
									} else if (arr.length == 2) {
										var animTag = $('#inputVal').html(); 
										$(".introjs-nextbutton,.introjs-prevbutton").show();
									}
									
									$.each(arr, function(idx, val) {
										if (val.length > 2) {
											$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																					"Please limit the number length to 2.</span>");
											$(".introjs-nextbutton").hide();
										}
									});
								});
							});
						});
					});
					
				} else if (introjs._currentStep == 7) {
					console.log(introjs._direction);
						if (introjs._direction == "forward") {
							var numText = $("#num1").val();
							var i = 0;
							$("#inputVal").empty();
							$.each(numText.split(" "), function(index, val) {
								$("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
							    if(i == 1) {
								  $("#space1").remove();
								  $("#val0").before("<span id='rsId'>Rs.</span>");
								  $("#val1").after("<span id='percentId'>%</span>");
							    }
							  	    i++;
							});
							$('#rsId').css("border", "1px solid yellow");
							//if (introjs._introItems[introjs._currentStep]["stepFlag"] == undefined) {
								//introjs._introItems[introjs._currentStep]["stepFlag"] = true;
								var newStep = {
									"element" : "#rsId",
									"intro" : "",
									"position" : "right"
								}
								introjs.insertOption(introjs._currentStep + 1, newStep);
							//}
							setTimeout(function() {
								introjs.nextStep();
							},1000);
						} else {
							//$('#inputVal').text('Rs. ' + numText + '%');
							setTimeout(function() {
								introjs.previousStep();
							}, 500);
						}
					
				} else if (introjs._currentStep == 9) {
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
					$('#rsId').css('border', 'none');
					$('#rsId').css('color', 'white');
					$(".introjs-helperLayer").one("transitionend", function() {
						//$(".introjs-tooltip").removeClass("hide");
						$('#rsId').css("border", "none");
						if (introjs._direction=="forward") {
							$('#rsId').effect( "transfer", { to: $("#val0"), className: "ui-effects-transfer" }, 1000, function() {
							$('#val0').css('border', '1px solid yellow');
								setTimeout(function() {
									introjs.nextStep()
								}, 500);
							});
						} else {
							setTimeout(function() {
								introjs.previousStep()
							}, 500);
						}
					});
				} else if (introjs._currentStep == 11) {
					$("#scanNum1").popover("show");
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
					$(".introjs-helperLayer").one("transitionend", function() {
						if (introjs._direction=="forward") {
							$('#val0').css('border', 'none');
							$('#val0').effect( "transfer", { to: $("#val1"), className: "ui-effects-transfer" }, 1000, function() {
								$('#val1').css('border', '1px solid yellow');
								setTimeout(function() {
									introjs.nextStep()
								}, 500);
							});
						} else {
							setTimeout(function() {
								introjs.previousStep()
							}, 500);
						}
					});
				} else if (introjs._currentStep == 13) {
					$("[data-toggle='popover']").popover("show");
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#val1').css('border', 'none');
						$('#val1').effect( "transfer", { to: $("#percentId"), className: "ui-effects-transfer" }, 1000, function() {
							$('#percentId').css('border', '1px solid yellow');
							$(".introjs-tooltip").removeClass("hide");
							var text = "Here, the character <span class='ct-code-b-yellow'>%</span> is not assigned to the arguments.";
							typing(".introjs-tooltiptext", text, function() {
								$(".introjs-nextbutton,.introjs-prevbutton").show();
							});
						});
					});
				} else {
					$("[data-toggle='popover']").popover("show");
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
					$("#inputVal").removeClass("zIndex");
					$(".introjs-helperLayer").one("transitionend", function() {
						//$(".introjs-tooltip").removeClass("hide");
						var text = "ammount = "+$("#givenNum1").text()+" interest = "+$("#givenNum2").text()+"";
						typing("#runEditor2", text, function() {
							setTimeout(function() {
								if (introjs._direction=="forward") {
										$(".introjs-nextbutton").click();
								} else {
									introjs.previousStep()
								}
							}, 500);
						});
					});
				}
			break;
			
		case "scanf":
			$(".introjs-nextbutton").hide();
				if (introjs._currentStep == 5) {
					$(".introjs-helperLayer").one("transitionend", function() {
						$(".introjs-tooltip").removeClass("hide");
						var text = "Here we are implementing the <span class='ct-code-b-yellow'>scanf()</span> function with " 
							+ "<span class='ct-code-b-yellow'>%d</span> preceded by <span class='ct-code-b-yellow'>Rs.</span>";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton,.introjs-prevbutton").show();
						});
					});
				} else if (introjs._currentStep == 10) {
					$(".introjs-helperLayer").one("transitionend", function() {
						var l1 = $("#scanNum1").offset();
						var l2 = $("#scanNum2").offset();
						
						$("#givenNum1").offset({"top": l1.top, "left": l1.left});
						$("#givenNum2").offset({"top": l2.top, "left": l2.left});
						
						$("#givenNum1").text( $('#val0').text() ).css('opacity', '0');
						$("#givenNum2").text( $('#val1').text() ).css('opacity', '0');
						
						$('#val0').css('border', '1px solid yellow');
						$("#inputVal").addClass("zIndex");
						$('#val0').effect( "transfer", { to: $("#dBlink1"), className: "ui-effects-transfer" }, 1000, function() {
							$("#val0").addClass("blinking-orange");
							$("#dBlink1").addClass("blinking-orange");
							$("#scanNum1").popover("show");
							$("#popoverContent1").text($("#val0").text());
							$(".introjs-tooltip").removeClass("hide");
							var text1 = "The <span class='ct-code-b-yellow'>scanf()</span> function reads " 
								+ "<span class='ct-code-b-yellow'>"+$("#val0").text()+"</span> into " 
								+ "<span class='ct-code-b-yellow'>&a</span> using the first <span class='ct-code-b-yellow'>%d</span>"
							typing(".introjs-tooltiptext", text1, function() {
								$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="valTransfer1()">Next &#8594;</a>');
							});
						});
					});
				} else {
					$("#scanNum1").popover("show");
					$("#popoverContent1").text( $("#val0").text() );
					$("#popoverContent2").text( $("#val1").text() );
					var l2 = $("#scanNum2").offset();
					$("#givenNum2").offset({"top": l2.top, "left": l2.left});
					$("#givenNum2").text( $('#val1').text()).css('opacity', '0');
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#val1').effect( "transfer", { to: $("#dBlink2"), className: "ui-effects-transfer" }, 1000, function() {
							$("#val1").addClass("blinking-orange");
							$("#scanNum2").popover("show");
							$("#popoverContent1").text( $("#val0").text() );
							$("#popoverContent2").text($("#val1").text());
							
							$("#scanNum2").addClass("blinking-orange");
							$("#givenNum2").addClass("zIndex");
							
							tl.to("#givenNum2", 1, {opacity: 1, top:0, left:0, onComplete: function() {
								$("#val1").removeClass("blinking-orange");
								$("#givenNum2").addClass("blinking-orange");
								$("#givenNum2").removeClass("opacity00");
								$("#scanNum2").removeClass("blinking-orange");
								var text = "The <span class='ct-code-b-yellow'>scanf()</span> function reads " 
								+ "<span class='ct-code-b-yellow'>"+$("#val1").text()+"</span> into " 
								+ "<span class='ct-code-b-yellow'>&b</span> using the second <span class='ct-code-b-yellow'>%d</span>"
								$(".introjs-tooltip").removeClass("hide");
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton,.introjs-prevbutton").show();
								});
							}});
						});
					});
				}
			break;
			
		case "finalPrintf":
			$(".introjs-nextbutton").hide();
			$("[data-toggle='popover']").popover("show");
			$("#popoverContent1").text( $("#val0").text() );
			$("#popoverContent2").text( $("#val1").text() );
			$('#val1').css('border', 'none');
			$('#percentId').css('border', 'none');
			$(".introjs-helperLayer").one("transitionend", function() {
				//$(".introjs-tooltip").removeClass("hide");
				setTimeout(function() {
					if (introjs._direction=="forward") {
							introjs.nextStep()
					} else {
						introjs.previousStep()
					}
				}, 500);
			});
			break;
			
		case "rsId":
			$(".introjs-nextbutton").hide();
			$('#rsId').css('border', '1px solid black');
			$('#rsId').css('color', 'black');
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text = "Here, characters <span class='ct-code-b-yellow'>Rs.</span> are not assigned to the arguments.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "restart":
			$(".introjs-nextbutton").hide();
			$("[data-toggle='popover']").popover("show");
			$("#popoverContent1").text( $("#val0").text() );
			$("#popoverContent2").text( $("#val1").text() );
			$('.introjs-tooltip').css('min-width', '128px');
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to <span class='ct-code-b-yellow'>restart</span>." 
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").removeClass("opacity00");
					$("#restart").click(function() {
						location.reload();
					});
				});
			});
			break;
		}
	});	
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function fadeEffect(element, callBackFunction) {
	tl.to(element, 0.5, {opacity:1, onComplete: function() {
		$(element).removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function valTransfer1() {
	$(".user-btn").remove();
	$("#val0").removeClass("blinking-orange");
	$("#dBlink1").removeClass("blinking-orange");
	$("#scanNum1").addClass("blinking-orange");
	$("#givenNum1").addClass("zIndex");
	
	tl.to("#givenNum1", 1, {opacity: 1, top:0, left:0, onComplete: function() {
		$("#givenNum1").addClass("blinking-orange");
		$("#givenNum1").removeClass("opacity00");
		$("#scanNum1").removeClass("blinking-orange");
		$(".introjs-nextbutton,.introjs-prevbutton").show();
	}});
}

function nextStep() {
	$(".user-btn").remove();
	introjs.nextStep();
}