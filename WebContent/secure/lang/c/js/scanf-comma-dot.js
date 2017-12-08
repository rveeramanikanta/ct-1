var introjs;
var typingSpeed = 1;
var tl;
var arr;

var scanfCommaDotReady = function() {
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
			position : "right"
		},{
			element : "#addressDiv",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#printf1",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf1",
			intro : "",
			position : "right",
			
		},{
			element : "#consoleId",
			intro : "",
			position : "right",
			tooltipClass:"hide"
		},{
			element : "#scanf1",
			intro : "",
			position : "bottom",
			tooltipClass:"hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf1",
			intro : "",
			position : "bottom",
			tooltipClass:"hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide",
			tooltipClass:"hide"
		},{
			element : "#scanf1",
			intro : "",
			position : "bottom",
			tooltipClass:"hide"
		},{
			element : "#printf2", //step 13
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId", //step14
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#printf3", //step 15
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#consoleId",// step 16
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf2", // step 17
			intro : "",
			position : "right"
		},{
			element : "#consoleId",
			intro : "",
			position : "right",
			tooltipClass:"hide"
		},{
			element : "#scanf2",
			intro : "",
			position : "bottom",
			tooltipClass:"hide"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf2",
			intro : "",
			position : "bottom"
		},{
			element : "#consoleId",
			intro : "",
			tooltipClass: "hide"
		},{
			element : "#scanf2",
			intro : "",
			position : "bottom"
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
			position : "right"
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
		case "codeAnimation":
			if (introjs._direction == "backward") {
				$("#consoleId").addClass("opacity00");
				$("#addressDiv").addClass("opacity00");
			}
			break;
		case "printf1":
			if (introjs._direction == "backward") {
				$("#consoleId").addClass("opacity00");
			}
			break;
		case "printf3":
				if (introjs._direction == "backward") {
					$("#runEditor3").addClass("opacity00");
				}
			break;
		case "printf2":
			if (introjs._direction == "backward") {
				$("#runEditor2").addClass("opacity00");
			}
			break;
		case "consoleId":
			if (introjs._currentStep == 4) {
			} else if (introjs._currentStep == 6) {
				if (introjs._direction == "backward") {
				$("#givenNum1").text("");
				$("[data-toggle='popover']").popover("hide");
				}
				} else if (introjs._currentStep == 8) {
					$(".introjs-helperLayer").one("transitionend", function() {
						if (introjs._direction == "backward") {
							introjs._introItems.splice(9, 1);	//only one element at index 8
						}
					});
				} else if (introjs._currentStep == 18) {
					if (introjs._direction == "backward") {
					$("#givenNum1").removeAttr("style").addClass("opacity00");
					$("[data-toggle='popover']").popover("hide");
					}
				} else if (introjs._currentStep == 20) {
					$(".introjs-helperLayer").one("transitionend", function() {
						if (introjs._direction == "backward") {
							introjs._introItems.splice(21, 1);
						}
					});
					
				}
			break;
			
		case "scanf1":
			
			if (introjs._currentStep == 5) {
				if (introjs._direction == "backward") {
					$("#inputVal").text("");
				}
			} else if (introjs._currentStep == 7) {
				if (introjs._direction == "backward") {
					$("#comma0").removeAttr("style");
					$("#givenNum1").removeClass("zIndex ");
					$("[data-toggle='popover']").popover("hide");
				}
			} else if (introjs._currentStep == 10) {
				if (introjs._direction == "backward") {
					$("#givenNum2").removeClass("zIndex ");
					$("[data-toggle='popover']").popover("hide");
					var l2 = $("#scanNum2").offset();
					$("#givenNum2").offset({"top": l2.top, "left": l2.left});
					$("#givenNum2").text( $('#val1').text() ).css('opacity', 0);
					//if (introjs._direction == "backward") {
					$("[data-toggle='popover']").popover("hide");
					$("#val1").css('border', '1px solid black');
					//$("#val1").removeAttr("style");
				}
			} else {
				if (introjs._direction == "backward") {
					var l2 = $("#scanNum2").offset();
					$("#givenNum2").offset({"top": l2.top, "left": l2.left});
					$("#givenNum2").text( $('#val1').text() ).css('opacity', 0);
					//if (introjs._direction == "backward") {
					$("[data-toggle='popover']").popover("hide");
					$("#val1").css('border', '1px solid black');
				}
			}
			
			break;
			
		case "scanf2":
			
			if (introjs._currentStep == 17) {
				if (introjs._direction == "backward") {
				$("#inputVal2").text("");
				}
			} else if (introjs._currentStep == 19) {
				if (introjs._direction == "backward") {
					$("#dot0").removeAttr("style");
					$("#givenNum1").removeClass("zIndex");
				}
			}
			
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
					if (introjs._currentStep != 0 && introjs._currentStep != 1) {
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
							
						});
					});
				},100);
			break;
			
		case "codeAnimation":
			$(".introjs-nextbutton").hide();
			$("#codeAnimation").removeClass("opacity00");
			//$("#consoleId").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In this program we will learn how <span class='ct-code-b-yellow'>scanf()</span> function behaves when " 
							+ " formatting characters are mixed with other characters."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "printf1":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					if (introjs._direction=="forward") {
					introjs.nextStep()
					} else {
					introjs.previousStep()
					}
					}, 500);
			});
			break;
		case "printf3":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					if (introjs._direction=="forward") {
					introjs.nextStep()
					} else {
					introjs.previousStep()
					}
					}, 500);
				//$(".introjs-nextbutton,.introjs-prevbutton").show();
			});
			break;
			
		case "printf2":
			
				if (introjs._direction=="forward") {
					$(".introjs-nextbutton").hide();
					$('#val1').css("border", "none");
					$("#scanNum1").popover("show");
					$("#scanNum2").popover("show");
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
						$(".introjs-helperLayer").one("transitionend", function() {
							/*$(".introjs-nextbutton,.introjs-prevbutton").show();
						});*/
				
						introjs.nextStep()
						});
				} else {
						introjs.previousStep()
					}
					
		
			break;
			
		case "finalPrintf":
			$(".introjs-nextbutton").hide();
			$("[data-toggle='popover']").popover("show");
			$("#popoverContent1").text( $("#val0").text() );
			$("#popoverContent2").text( $("#val1").text() );
			$("#popoverContent3").text( $("#dotVal0").text() );
			$("#popoverContent4").text( $("#dotVal1").text() );
			$('#dotVal1').css('border', 'none');
			$(".introjs-helperLayer").one("transitionend", function() {
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
						setTimeout(function() {
							if (introjs._direction=="forward") {
								$(".introjs-helperLayer").one("transitionend", function() {
									$("#consoleId").removeClass("opacity00");
									var text = "Enter two numbers:  <span id='inputVal'></span>"
										typing("#runEditor1", text, function() {
											setTimeout(function() {			
												introjs.nextStep()
											}, 400);
										});
									});	
							} else {
							introjs.previousStep()
							}
							}, 500);
			
			} else if (introjs._currentStep == 6) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#consoleId").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide")
					var text = "<input type='text' id='num1' spellcheck='false' class='int-num'/>";
					typing("#inputVal", text, function() {
						var text2 = "Enter two numbers seperated by a <span class='ct-code-b-yellow'>comma</span>. " 
								+ " <ul><li>For example, if your numbers are <span class='ct-code-b-yellow'>12</span> and " 
								+ " <span class='ct-code-b-yellow'>33</span>, enter them as <span class='ct-code-b-yellow'>12,33</span></li></ul>";
						typing(".introjs-tooltiptext", text2, function() {
							$("#num1").addClass("blinking-orange");
							$("#num1").focus();
							arr = [];
							$('#num1').on("keydown", function(e) {
								/*if (arr.length == 2) {
									if (e.keyCode == 188) {
										e.preventDefault();
									}
								}*/
								if ((arr.length == 2 || arr.length == 0) && e.keyCode == 188) {
									e.preventDefault();
								}
								if (arr.length == 1) {
									var flag = false;
									flag = $('#num1').val().indexOf(',') >= 0;
									if (e.keyCode == 188 && flag) {
										e.preventDefault();
									}
								}
								if ($.inArray(e.keyCode, [46, 8, 9, 27, 188, 35, 36, 37, 39]) !== -1) {
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
																		"Please enter 2 numbers and separate them with a comma.</span>");
								}
								var givenText = $(this).val();
								var splittedText = givenText.split(",");
								arr = [];
								
								$.each(splittedText, function(idx, val) {
									if (val != '') {
										arr.push(val);
									}
								});
								
								if (arr.length < 2) {
									$(".introjs-nextbutton,.introjs-prevbutton").hide();
								} else if (arr.length == 2) {
									$(".introjs-nextbutton,.introjs-prevbutton").show();
								}
								
								$.each(arr, function(idx, val) {
									if (val.length > 2) {
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																				"Please limit the number length to 2 digits.</span>");
										$(".introjs-nextbutton,.introjs-prevbutton").hide();
									}
								});
							});
						});
					});
				});
					
				} else if (introjs._currentStep == 8) {
					if (introjs._direction=="forward") {
						$("#scanNum1").popover("show");
						$("#popoverContent2").text($("#val1").text());
						$("#popoverContent1").text($("#val0").text());
						$(".introjs-helperLayer").one("transitionend", function() {
						$('#val0').css("border", "none");
						$('#val0').effect( "transfer", { to: $("#comma0"), className: "ui-effects-transfer" }, 1000, function() {
							$('#comma0').css('border', '1px solid yellow');
							
							var newStep = {
								"element" : "#comma0",
								"intro" : "",
								"position" : "right",
								"tooltipClass" : "hide"
							}
							introjs.insertOption(introjs._currentStep + 1, newStep);
							setTimeout(function() {
									introjs.nextStep()
							}, 500);
						});
					});
				} else {
					setTimeout(function() {
						introjs.previousStep()
					}, 500);
				}
					
				} else if (introjs._currentStep == 11) {
					
					$("#scanNum1").popover("show");
					$("#popoverContent2").text($("#val1").text());
					$("#popoverContent1").text($("#val0").text());
						if (introjs._direction=="forward") {
							$("#commaBlink").removeClass("blinking-yellow");
							$(".introjs-helperLayer").one("transitionend", function() {
								$('#comma0').css('border', 'none');
								$('#comma0').effect( "transfer", { to: $("#val1"), className: "ui-effects-transfer" }, 1000, function() {
									$('#val1').css('border', '1px solid yellow');
									setTimeout(function() {
									introjs.nextStep()
									}, 500)
								});
							});
						} else {
							setTimeout(function() {
								introjs.previousStep()
							}, 500)
						}
							
					
				} else if (introjs._currentStep == 14) {
						$("#scanNum1").popover("show");
						$("#scanNum2").popover("show");
						$("#popoverContent1").text($("#val0").text());
						$("#popoverContent2").text($("#val1").text());
						$("#inputVal").removeClass("zIndex");
						$(".introjs-helperLayer").one("transitionend", function() {
							if (introjs._direction == "forward") {
								$("#runEditor2").removeClass("opacity00");
								var text = "a = "+$("#givenNum1").text()+" b = "+$("#givenNum2").text()+"";
								typing("#runEditor2", text, function() {
									setTimeout(function() {
										introjs.nextStep()
									}, 800);
								});
							} else {
								setTimeout(function() {
									introjs.previousStep();
								}, 500);
							}
						});
				} else if (introjs._currentStep == 16) {
					$("#scanNum1").popover("show");
					$("#scanNum2").popover("show");
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
					$(".introjs-helperLayer").one("transitionend", function() {
						if (introjs._direction=="forward") {
							$("#runEditor3").removeClass("opacity00");
							var text = "Enter two numbers: <span id='inputVal2'></span>"
							typing("#runEditor3", text, function() {
								setTimeout(function() {
									introjs.nextStep()
								}, 800);
							});
						} else {
							setTimeout(function() {
								introjs.previousStep()
							}, 500);
						}
					});
				} else if (introjs._currentStep == 18) {
					$("#scanNum1").popover("show");
					$("#scanNum2").popover("show");
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
					$(".introjs-helperLayer").one("transitionend", function() {
						$(".introjs-tooltip").removeClass("hide")
						var text = "<input id='num2' spellcheck='false' class='int-num'/>";
						typing("#inputVal2", text, function() {
							var text2 = "Enter two numbers seperated by a <span class='ct-code-b-yellow'>dot</span>. " 
									+ " <ul><li>For example, if your numbers are <span class='ct-code-b-yellow'>12</span> and " 
									+ " <span class='ct-code-b-yellow'>33</span>, enter them as <span class='ct-code-b-yellow'>12.33</span></li></ul>";
							typing(".introjs-tooltiptext", text2, function() {
								$("#num2").addClass("blinking-orange");
								$("#num2").focus();
								arr = [];
								$('#num2').on("keydown", function(e) {
									if ((arr.length == 2 || arr.length == 0) && (e.keyCode == 190 || e.keyCode == 110)) {
										e.preventDefault();
									}
									if (arr.length == 1) {
										var flag = false;
										flag = $('#num2').val().indexOf('.') >= 0;
										if ((e.keyCode == 190 || e.keyCode == 110) && flag) {
											e.preventDefault();
										}
									}
									if ($.inArray(e.keyCode, [46, 8, 9, 27, 190, 110, 35, 36, 37, 39]) !== -1) {
										return;
									}
									if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
										e.preventDefault();
									}
								});
								
								$('#num2').on("keyup", function(e) {
									$('.length-error-text').remove();
									if ($(this).val() == "") {
										$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please enter 2 numbers and separate them with dot.</span>");
									}
									var givenText = $(this).val();
									var splittedText = givenText.split(".");
									arr = [];
									
									$.each(splittedText, function(idx, val) {
										if (val != '') {
											arr.push(val);
										}
									});
									
									if (arr.length < 2) {
										$(".introjs-nextbutton,.introjs-prevbutton").hide();
									} else if (arr.length == 2) {
										$(".introjs-nextbutton,.introjs-prevbutton").show();
									}
									
									$.each(arr, function(idx, val) {
										if (val.length > 2) {
											$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																					"Please limit the number length to 2.</span>");
											$(".introjs-nextbutton,.introjs-prevbutton").hide();
										}
									});
								});
							});
						});
					});
					
				} else if (introjs._currentStep == 20) {
					if (introjs._direction=="forward") {
					$("#scanNum3").popover("show");
					$("#scanNum1").popover("show");
					$("#scanNum2").popover("show");
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
					$("#popoverContent3").text($("#dotVal0").text());
					$("#popoverContent4").text($("#dotVal1").text());
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#dotVal0').css("border", "none");
						$('#dotVal0').effect( "transfer", { to: $("#dot0"), className: "ui-effects-transfer" }, 1000, function() {
							$('#dot0').css('border', '1px solid yellow');
							
							var newStep = {
								"element" : "#dot0",
								"intro" : "",
								"position" : "right",
								"tooltipClass" : "hide"
							}
							introjs.insertOption(introjs._currentStep + 1, newStep);
							setTimeout(function() {
									introjs.nextStep()
							}, 500);
						});
					});
				} else {
					setTimeout(function() {
						introjs.previousStep()
					}, 500);
				}
					
				} else if (introjs._currentStep == 23) {
					$("#scanNum3").popover("show");
					$("#scanNum1").popover("show");
					$("#scanNum2").popover("show");
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent2").text($("#val1").text());
					$("#popoverContent3").text($("#dotVal0").text());
					$("#popoverContent4").text($("#dotVal1").text());
					$("#codeDot1").removeClass("blinking-yellow");
					$(".introjs-helperLayer").one("transitionend", function() {
						$('#dot0').css('border', 'none');
						$('#dot0').effect( "transfer", { to: $("#dotVal1"), className: "ui-effects-transfer" }, 1000, function() {
							$('#dotVal1').css('border', '1px solid yellow');
							
							setTimeout(function() {
								if (introjs._direction=="forward") {
								introjs.nextStep()
								} else {
								introjs.previousStep()
								}
								}, 500);
						});
					});
				} else {
					$("[data-toggle='popover']").popover("show");
					$("#popoverContent2").text($("#val1").text());
					$("#popoverContent1").text($("#val0").text());
					$("#popoverContent3").text($("#dotVal0").text());
					$("#popoverContent4").text($("#dotVal1").text());
					$("#inputVal2").removeClass("zIndex");
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "a = "+$("#givenNum1").text()+" b = "+$("#givenNum2").text()+"";
						typing("#runEditor4", text, function() {
							setTimeout(function() {
								$(".introjs-nextbutton").click();
							},1000)
						});
					});
				}
			break;
			
		case "scanf1":
			$(".introjs-nextbutton").hide();
			if (introjs._currentStep == 5) {
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here, you will notice that the <span class='ct-code-b-yellow'>scanf()</span> function contains two " 
						+ " <span class='ct-code-b-yellow'>%d</span> characters seperated by a <span class='ct-code-b-yellow'>comma</span>. <br/><br/>"
						+ " The <span class='ct-code-b-yellow'>&a</span> and <span class='ct-code-b-yellow'>&b</span> refer to the " 
						+ " addresses of <span class='ct-code-b-yellow'>a</span> and <span class='ct-code-b-yellow'>b</span> respectively. <br/><br/>"
						+ " The <span class='ct-code-b-yellow'>scanf()</span> function reads the first number through " 
						+ " <span class='ct-code-b-yellow'>%d</span> and places it in the <span class='ct-code-b-yellow'>memory</span> " 
						+ " location of <span class='ct-code-b-yellow'>a</span> referred by <span class='ct-code-b-yellow'>&a</span>. <br/><br/>"
						+ " The <span class='ct-code-b-yellow'>scanf()</span> function for the second <span class='ct-code-b-yellow'>%d</span> " 
						+ " reads the second number from the input after a comma and places it " 
						+ " in the <span class='ct-code-b-yellow'>address</span> of variable <span class='ct-code-b-yellow'>b</span> referred by " 
						+ " <span class='ct-code-b-yellow'>&b</span>. <br/><br/>"			
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton,.introjs-prevbutton").show();
					});
				});
			} else if (introjs._currentStep == 7) {
				if (introjs._direction == "forward") {
				var text1 = $("#num1").val();
				var i = 0;
				$("#inputVal").empty();
				$.each(text1.split(","), function(index, val) {
				  $("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='comma"+i+"'>,</span>");
				  /*if(i == 1) {
					  $("#comma1").remove();
				  }*/
				  i++;
				});
				}
				$(".introjs-helperLayer").one("transitionend", function() {
					var l1 = $("#scanNum1").offset();
					var l2 = $("#scanNum2").offset();
					
					$("#givenNum1").offset({"top": l1.top, "left": l1.left}).css('opacity', '00');
					$("#givenNum2").offset({"top": l2.top, "left": l2.left}).css('opacity', '00');
					
					$("#givenNum1").text( $('#val0').text() );
					$("#givenNum2").text( $('#val1').text() );
					
					$('#val0').css('border', '1px solid yellow');
					$("#inputVal").addClass("zIndex");
					$('#val0').effect( "transfer", { to: $("#dBlink1"), className: "ui-effects-transfer" }, 1000, function() {
						$("#val0").addClass("blinking-orange");
						$("#dBlink1").addClass("blinking-orange");
						$("#scanNum1").popover("show");
						$("#popoverContent1").text($("#val0").text());
						$(".introjs-tooltip").removeClass("hide")
						var text1 = "The <span class='ct-code-b-yellow'>scanf()</span> function reads " 
							+ "<span class='ct-code-b-yellow'>"+$("#val0").text()+"</span> into " 
							+ "<span class='ct-code-b-yellow'>&a</span> using the first <span class='ct-code-b-yellow'>%d</span> format character."
						typing(".introjs-tooltiptext", text1, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="valTransfer1()">Next &#8594;</a>');
						});
					});
				});
			} else if (introjs._currentStep == 10) {
				$(".introjs-tooltip").removeClass("hide")
				$("#scanNum1").popover("show");
				$("#popoverContent2").text($("#val1").text());
				$("#popoverContent1").text($("#val0").text());
				$('#comma0').css('border', '1px solid yellow');
				$('#comma0').css('color', 'white');
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltip").removeClass("hide");
					$("#commaBlink").addClass("blinking-yellow");
					$(".introjs-tooltip").removeClass("hide")
					var text = "This <span class='ct-code-b-yellow'>comma</span> has to be provided by the user for the " 
						+ " <span class='ct-code-b-yellow'>scanf()</span> to read the next number.";					
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton,.introjs-prevbutton").show();
					});
				});
			} else {
				$('#val1').css('border', '1px solid yellow');
				$("#scanNum1").popover("show");
				$("#popoverContent2").text($("#val1").text());
				$("#popoverContent1").text($("#val0").text());
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#val1').effect( "transfer", { to: $("#dBlink2"), className: "ui-effects-transfer" }, 1000, function() {
						$("#val1").addClass("blinking-orange");
						$("#scanNum2").popover("show");
						$("#popoverContent2").text($("#val1").text());
						$(".introjs-tooltip").removeClass("hide")
						var text = "The <span class='ct-code-b-yellow'>scanf()</span> function reads " 
							+ "<span class='ct-code-b-yellow'>"+$("#val1").text()+"</span> into " 
							+ "<span class='ct-code-b-yellow'>&b</span> using the second <span class='ct-code-b-yellow'>%d</span> format character."
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="valTransfer2()">Next &#8594;</a>');
						});
					});
				});
			}
			
			break;
			
		case "scanf2":
			$(".introjs-nextbutton").hide();
			if (introjs._currentStep == 17) {
				$("#popoverContent2").text($("#val1").text());
				$("#popoverContent1").text($("#val0").text());
				$("#popoverContent3").text($("#dotVal0").text());
				
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "Here, you will notice that the <span class='ct-code-b-yellow'>scanf()</span> function contains two " 
						+ " <span class='ct-code-b-yellow'>%d</span> characters seperated by a <span class='ct-code-b-yellow'>dot</span>."			
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton,.introjs-prevbutton").show();
					});
				});
			} else if (introjs._currentStep == 19) {
				if (introjs._direction == "forward") {
				$("#popoverContent2").text( $("#val1").text() );
				$("#popoverContent1").text( $("#val0").text() );
				$("#popoverContent3").text( $("#dotVal0").text() );
				
				$("#givenNum1").addClass("opacity00");
				$("#givenNum2").addClass("opacity00");
				$("#givenNum1").removeClass("blinking-orange");
				$("#givenNum2").removeClass("blinking-orange");
				$("#givenNum1").css('opacity', '0');
				$("#givenNum2").css('opacity', '0');
				var text1 = $("#num2").val();
				var i = 0;
				$("#inputVal2").empty();
				$.each(text1.split("."), function(index, val) {
				  $("#inputVal2").append("<span id='dotVal"+i+"'>" + val + "</span><span id='dot"+i+"'>.</span>");
				  /*if(i == 1) {
					  $("#dot1").remove();
				  }*/
				  i++;
				});
			}
				$(".introjs-helperLayer").one("transitionend", function() {
					var l1 = $("#scanNum3").offset();
					var l2 = $("#scanNum4").offset();
					
					$("#givenNum1").offset({"top": l1.top, "left": l1.left});
					$("#givenNum2").offset({"top": l2.top, "left": l2.left});
					
					$("#givenNum1").text( $('#dotVal0').text() );
					$("#givenNum2").text( $('#dotVal1').text() );
					
					$('#dotVal0').css('border', '1px solid yellow');
					$("#inputVal2").addClass("zIndex");
					$('#dotVal0').effect( "transfer", { to: $("#dBlink3"), className: "ui-effects-transfer" }, 1000, function() {
						$("#dotVal0").addClass("blinking-orange");
						$("#dBlink3").addClass("blinking-orange");
						$("#scanNum3").popover("show");
						$("#popoverContent3").text($("#dotVal0").text());
						$(".introjs-tooltip").removeClass("hide")
						var text1 = "The <span class='ct-code-b-yellow'>scanf()</span> function reads " 
							+ "<span class='ct-code-b-yellow'>"+$("#dotVal0").text()+"</span> into " 
							+ "<span class='ct-code-b-yellow'>&a</span> using the first <span class='ct-code-b-yellow'>%d</span>"
						typing(".introjs-tooltiptext", text1, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="valTransfer3()">Next &#8594;</a>');
						});
					});
				});
			} else if (introjs._currentStep == 22) {
				$("#scanNum3").popover("show");
				$("#popoverContent2").text($("#val1").text());
				$("#popoverContent1").text($("#val0").text());
				$("#popoverContent3").text($("#dotVal0").text());
				$("#popoverContent4").text($("#dotVal1").text());
				$('#dot0').css('border', '1px solid yellow');
				$('#dot0').css('color', 'white');
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#codeDot1").addClass("blinking-yellow");
					var text = "This <span class='ct-code-b-yellow'>dot</span> has to be provided by the user for the " 
								+ " <span class='ct-code-b-yellow'>scanf()</span> to read the next number.";			
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			} else {
				$("#scanNum3").popover("show");
				$("#popoverContent2").text($("#val1").text());
				$("#popoverContent1").text($("#val0").text());
				$("#popoverContent3").text($("#dotVal0").text());
				$("#popoverContent4").text($("#dotVal1").text());
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#dotVal1').effect( "transfer", { to: $("#dBlink4"), className: "ui-effects-transfer" }, 1000, function() {
						$("#dotVal1").addClass("blinking-orange");
						$("#scanNum4").popover("show");
						$("#popoverContent4").text($("#dotVal1").text());
						
						var text = "The <span class='ct-code-b-yellow'>scanf()</span> function reads " 
							+ "<span class='ct-code-b-yellow'>"+$("#dotVal1").text()+"</span> into " 
							+ "<span class='ct-code-b-yellow'>&b</span> using the second <span class='ct-code-b-yellow'>%d</span>"
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="valTransfer4()">Next &#8594;</a>');
						});
					});
				});
			}
			
			break;
			
		case "comma0":
			$('#commaBlink').removeClass('blinking-yellow');
			$("#scanNum1").popover("show");
			$("#popoverContent1").text($("#val0").text());
			$(".introjs-nextbutton").hide();
			$('#comma0').css('border', '1px solid black');
			$('#comma0').css('color', 'black');
			var l2 = $("#scanNum2").offset();
			$("#givenNum2").offset({"top": l2.top, "left": l2.left});
			$("#givenNum2").text( $('#val1').text() ).css('opacity', 0);
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass("hide");
				var text = "This <span class='ct-code-b-yellow'>comma</span> is being matched with the " 
							+ " <span class='ct-code-b-yellow'>comma</span> provided in the control string.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
	
			break;
			
		case "dot0":
			$(".introjs-nextbutton").hide();
			$("#popoverContent2").text($("#val1").text());
			$("#popoverContent1").text($("#val0").text());
			$("#popoverContent3").text($("#dotVal0").text());
			$("#popoverContent4").text($("#dotVal1").text());
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#dot0').css('border', '1px solid black');
				$('#dot0').css('color', 'black');
				$(".introjs-tooltip").removeClass("hide");
				var text = "This <span class='ct-code-b-yellow'>dot</span> is being matched with the " 
							+ " <span class='ct-code-b-yellow'>dot</span> provided in the control string.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton,.introjs-prevbutton").show();
				});
			});
			break;
			
		case "restart":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart</span>." 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltip").css({"min-width": "115px"});
					$("#restart").removeClass("opacity00");
					
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
	$("#restart").click(function() {
		location.reload();
	});
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
		/*setTimeout(function() {
			if (introjs._direction=="forward") {
			introjs.nextStep()
			} else {
			introjs.previousStep()
			}
			}, 500);*/
	}});
}

function valTransfer2() {
	$(".user-btn").remove();
	$("#val1").removeClass("blinking-orange");
	$("#dBlink2").removeClass("blinking-orange");
	$("#scanNum2").addClass("blinking-orange");
	$("#givenNum2").addClass("zIndex");
	
	tl.to("#givenNum2", 1, {opacity: 1, top:0, left:0, onComplete: function() {
		$("#givenNum2").addClass("blinking-orange");
		$("#givenNum2").removeClass("opacity00");
		$("#scanNum2").removeClass("blinking-orange");
		$(".introjs-nextbutton,.introjs-prevbutton").show();
		/*setTimeout(function() {
			if (introjs._direction=="forward") {
			introjs.nextStep()
			} else {
			introjs.previousStep()
			}
			}, 500);*/
	}});
}

function valTransfer3() {
	$(".user-btn").remove();
	$("#dotVal0").removeClass("blinking-orange");
	$("#dBlink3").removeClass("blinking-orange");
	$("#scanNum3").addClass("blinking-orange");
	$("#givenNum1").addClass("zIndex");
	
	tl.to("#givenNum1", 1, {opacity: 1, top:0, left:0, onComplete: function() {
		$("#givenNum1").addClass("blinking-orange");
		$("#givenNum1").removeClass("opacity00");
		$("#scanNum3").removeClass("blinking-orange");
		/*setTimeout(function() {
			if (introjs._direction=="forward") {
			introjs.nextStep()
			} else {
			introjs.previousStep()
			}
			}, 500);*/
		$(".introjs-nextbutton,.introjs-prevbutton").show();
	}});
}

function valTransfer4() {
	$(".user-btn").remove();
	$("#dotVal1").removeClass("blinking-orange");
	$("#dBlink4").removeClass("blinking-orange");
	$("#scanNum4").addClass("blinking-orange");
	$("#givenNum2").addClass("zIndex");
	
	tl.to("#givenNum2", 1, {opacity: 1, top:0, left:0, onComplete: function() {
		$("#givenNum2").addClass("blinking-orange");
		$("#givenNum2").removeClass("opacity00");
		$("#scanNum4").removeClass("blinking-orange");
		setTimeout(function() {
			if (introjs._direction=="forward") {
			introjs.nextStep()
			} else {
			introjs.previousStep()
			}
			}, 500);
	}});
}

function nextStep() {
	$(".user-btn").remove();
	introjs.nextStep();
}