var aopReady = function() {
	var t1 = new TimelineLite();
	$("#restartBtn").click(function() {
		$("#inputChar1").val("");
		$("#inputChar2").val("");
		location.reload();
	});
	intro = introJs();
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
			steps : [{
						element :'#titleName',
						intro :'',
						position:"right"
					},{
						element :'#preBody',
						intro :'',
						position:"bottom"
					},{
						element :'#line1',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line2',
						intro :'',
						position:"bottom"
					},{
						element :'#line3',
						intro :'',
						position:"bottom"
					},{
						element :'#animationDiv',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line4',
						intro :'',
						position:"bottom" 
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#inputChar1',
						intro :'',
						position:"bottom"
					},{
						element :'#inputChar2',
						intro :'',
						position:"bottom"
					},{
						element :'#line5',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#panelBoxA',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line5',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#panelBoxB',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line6',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox1',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line7',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox2',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line8',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox3',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line9',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox4',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line10',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox5',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line11',
						intro :'',
						position:"bottom",
						
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line12',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line13',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line14',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#line15',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom",
						tooltipClass:"hide"
					},{
						element :'#restartBtn',
						intro :'',
						position:"left"
				}]
	});
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "preBody" :
			
			break;
			
		case "line1" :
			
			break;
			
		case "line2" :
			
			break;
			
		case "line3" :
			$("#panelBoxA").addClass("visibility-hidden")
			$("#panelBoxB").addClass("visibility-hidden")
			$("#panelBox1").addClass("visibility-hidden")
			$("#panelBox2").addClass("visibility-hidden")
			$("#panelBox3").addClass("visibility-hidden")
			$("#panelBox4").addClass("visibility-hidden")
			$("#panelBox5").addClass("visibility-hidden")
			break;
			
		case "animationDiv" :
			
			break;
			
		case "line4" :
			$("#typeChar").addClass("opacity00");
			$("#hiddenTypingChar").addClass("hidden");
			$("#firstInputInteger").addClass("hidden");
			$("#inputChar1").val('');
			$("#secondInputInteger").addClass("hidden");
			//$("#inputChar2").val('');
			break;
			
		case "line5" :
			
			if(intro._currentStep == 10) {
				$("#aValue").text("");
			
			} else if(intro._currentStep == 12) {
				$("#bValue").text("");
			} 
			break;
			
		case "panelBoxA" :
			$("#aValue").text($('#inputChar1').val()).css('opacity', '0');
			break;
			
		case "panelBoxB" :
			$("#bValue").text($('#inputChar2').val()).css('opacity', '0');
			break;
			
		case "line6" :
			console.log(intro._direction, "line 6");
			if (intro._direction == "backward") {
				$("#s1panelBody").empty();
				$("#s1panelBody").addClass("visibility-hidden").append("<span id='s1AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> + </span> <span id='s1BValue' class='position-relative display-inline'>b</span>");
			}
			break;
			
		case "line7" :
			if (intro._direction == "backward") {
				$("#s2panelBody").empty();
				$("#s2panelBody").addClass("visibility-hidden").append("<span id='s2AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> - </span> <span id='s2BValue' class='position-relative display-inline'>b</span>");	
				}
			break;
			
		case "line8" :
			if (intro._direction == "backward") {
				$("#s3panelBody").empty();
				$("#s3panelBody").addClass("visibility-hidden").append("<span id='s3AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> * </span> <span id='s3BValue' class='position-relative display-inline'>b</span>");	
				}
			break;
			
		case "line9" :
			if (intro._direction == "backward") {
				$("#s4panelBody").empty();
				$("#s4panelBody").addClass("visibility-hidden").append("<span id='s4AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> * </span> <span id='s4BValue' class='position-relative display-inline'>b</span>");	
				}
			break;
			
		case "line10" :
			if (intro._direction == "backward") {
				$("#s5panelBody").empty();
				$("#s5panelBody").addClass("visibility-hidden").append("<span id='s5AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> * </span> <span id='s5BValue' class='position-relative display-inline'>b</span>");	
				}
			break;
			
		case "line11" :
			$("#totalAddValue").addClass("opacity00");
			break;
			
		case "line12" :
			$("#totalSubValue").addClass("opacity00");
			break;
			
		case "line13" :
			$("#totalMulValue").addClass("opacity00");
			break;
			
		case "line14" :
			$("#totalDivValue").addClass("opacity00");
			break;
			
		case "line15" :
			$("#totalMudValue").addClass("opacity00");
			break;
			
		case "consoleId" :
			
			if (intro._currentStep == 7) {
				
				
			} else if (intro._currentStep == 25) {
				
				
			} else if (intro._currentStep == 27) {
				
			} else if (intro._currentStep == 29) {
				
				
			} else if (intro._currentStep == 31) {
				
				
			} else if (intro._currentStep == 33) {
				
			}
			break;
		
		case "inputChar1" :
			$("#inputChar2").val('');
			break;
		
		case "inputChar2" :
			
			break;
			
		case "panelBox1" :
			if (intro._direction == "backward") {
				$("#s1panelBody").empty();
				$("#s1panelBody").addClass("visibility-hidden").append("<span id='s1AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> + </span> <span id='s1BValue' class='position-relative display-inline'>b</span>");
			}
			
		break;
			
		case "panelBox2" :
			if (intro._direction == "backward") {
			$("#s2panelBody").empty();
			$("#s2panelBody").addClass("visibility-hidden").append("<span id='s2AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> - </span> <span id='s2BValue' class='position-relative display-inline'>b</span>");	
			}
			break;
			
		case "panelBox3" :
			if (intro._direction == "backward") {
				$("#s3panelBody").empty();
				$("#s3panelBody").addClass("visibility-hidden").append("<span id='s3AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> * </span> <span id='s3BValue' class='position-relative display-inline'>b</span>");	
				}
			break;
			
		case "panelBox4" :
			if (intro._direction == "backward") {
				$("#s4panelBody").empty();
				$("#s4panelBody").addClass("visibility-hidden").append("<span id='s4AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> * </span> <span id='s4BValue' class='position-relative display-inline'>b</span>");	
				}
			break;
			
		case "panelBox5" :
			if (intro._direction == "backward") {
				$("#s5panelBody").empty();
				$("#s5panelBody").addClass("visibility-hidden").append("<span id='s5AValue' class='position-relative display-inline' > a </span> <span class='ct-code-b-red position-relative display-inline'> * </span> <span id='s5BValue' class='position-relative display-inline'>b</span>");	
				}
			break;
		}
	});
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		// ********************** start ************back button logic
				
				if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
					intro._introItems[intro._currentStep]["animation"] = "repeat";
				}
				
				if (intro._introItems[intro._currentStep]["isCompleted"]) {
					if (intro._currentStep != 0) {
						$('.introjs-prevbutton').show();
					}
					$('.introjs-nextbutton').show();
					return;
				}
				
				if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
					intro._introItems[intro._currentStep]["isCompleted"] = true;
				}
				
				// ********************** end ************back button logic
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here is the program to print all arithmetic operations.", 1, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				typing(".introjs-tooltiptext", "It is a header file. which is a standard library function for file input and output.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "main() is the operating system call.<ul><li>main is execution starting point for any c programs</li></ul>", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "int is Datatype.<ul><li>It allocates 2 bytes of memory.</li><li>It stores all integers of type int.</li></ul>", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "animationDiv" :
			$('.introjs-nextbutton').hide();
			if(intro._direction == "forward") {
			$('.introjs-helperLayer ').one('transitionend', function() {
				
				$("#panelBoxA").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelBoxA").removeClass("animated zoomIn")
					$("#panelBoxB").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$("#panelBoxB").removeClass("animated zoomIn")
						$("#panelBox1").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$("#panelBox1").removeClass("animated zoomIn")
							$("#panelBox2").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								$("#panelBox2").removeClass("animated zoomIn")
								$("#panelBox3").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
									$("#panelBox3").removeClass("animated zoomIn")
									$("#panelBox4").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
										$("#panelBox4").removeClass("animated zoomIn")
										$("#panelBox5").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
											$("#panelBox5").removeClass("animated zoomIn")
													$(".introjs-tooltip").removeClass("hide");
											typing(".introjs-tooltiptext", "The values of int a,b,s1,s2,s3,s4,s5 are stored and for each value address is allocated to it.", 1, "",function() {
												$('.introjs-nextbutton,.introjs-prevbutton').show();
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
			break;
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line5" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 10) {
				$('.introjs-helperLayer ').one('transitionend', function() {
			
					$("#scanPercent1").effect("highlight", {color: '#008000'}, 1000, function() {
						$("#scanAmpPercentAId").effect("highlight",{color: '#008000'}, 1000, function() {
							//$(".introjs-tooltiptext").append("<div></div>");
							$(".introjs-tooltip").removeClass("hide");
							var text = "scanf() function is used to read character, string, numeric data from keyboard. <br />" +
										"Now, after performing the scanf() function the values of %d and &a are.. <br />" +
										"a = <span class='ct-code-b-green'> " + $('#inputChar1').val() + " </span>";
							typing($(".introjs-tooltiptext"), text, 1, "",function() {
								$("#aValue").text($('#inputChar1').val()).css('opacity', '0');
								
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						});
					});
				});
			} else if(intro._currentStep == 12) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#scanPercent2").effect("highlight", {color: '#008000'}, 1000, function() {
						$("#scanAmpPercentBId").effect("highlight",{color: '#008000'}, 1000, function() {
							$(".introjs-tooltip").removeClass("hide");
							var text = "scanf() function is used to read character, string, numeric data from keyboard. <br />" +
									"Now, after performing the scanf() function the values of %d and &b are.. <br />" +
									"b = <span class='ct-code-b-green'>"+ $('#inputChar2').val() + " </span>";
							typing($(".introjs-tooltiptext"),text ,1, "",function() {
								$("#bValue").text($('#inputChar2').val()).css('opacity', '0');
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						});
					});
				});
			} 
			break;
			
		case "panelBoxA" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelABody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelABody").removeClass("animated zoomIn")
					$(".introjs-tooltip").removeClass("hide");
					$("#aValue").text($('#inputChar1').val()).removeAttr("style");
					typing(".introjs-tooltiptext", "first value is stored in a.", 1, "",function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			});
			break;
			
		case "panelBoxB" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelBBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelBBody").removeClass("animated zoomIn")
					console.log("enter in panel bodey b");
					$("#bValue").text($('#inputChar2').val()).removeAttr("style");
						$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "second value is stored in b.", 1, "",function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			});
			break;
			
		case "line6" :
			$("#inputChar1").attr("disabled", true);
			$("#inputChar2").attr("disabled", true);
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Addition of a, b is assigned to a variable s1.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Substration of a, b is assigned to a variable s2.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Multiplication of a, b is assigned to a variable s3.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line9" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Division of a, b is assigned to a variable s4.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line10" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Modulo of a, b is assigned to a variable s5.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line11" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s1</span> is printed on output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line12" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s2</span> is printed on output screen.", 1, "",function() {
					$('.introjs-nextbutton,introjs-prevbutton').show();
				});
			});
			break;
			
		case "line13" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s3</span> is printed on output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line14" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s4</span> is printed on output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "line15" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s5</span> is printed on output screen.", 1, "",function() {
					$('.introjs-nextbutton,.introjs-prevbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 7) {
							setTimeout(function() {
								if (intro._direction=="forward") {
									$('.introjs-helperLayer ').one('transitionend', function() {
										$(".introjs-tooltip").removeClass("hide");
										typing("#typeChar", "<span id='typingCharId'>Enter any two integer values:</span>\n" +
												"<span id='firstIntVal'>first value  : <input class='enter-values' tabindex='0' maxlength='0' /></span>\n"+
												"<span id='secondIntVal'>second value: <input class='enter-values' tabindex='0' maxlength='0'/></span>", 1, "",function() {
											typing(".introjs-tooltiptext", "enter any of two integer values.", 1, "",function() {
												$("#hiddenTypingChar").addClass("hidden");
												$("#typeChar").removeClass("opacity00");
												$("#firstIntVal").addClass("hidden");
												$("#secondIntVal").addClass("hidden");
												$("#typingCharId").removeClass("hidden");
												$("#firstInputInteger").removeClass("hidden");
												$("#secondInputInteger").removeClass("hidden");
												
												
												
										intro.nextStep()
											});
										});
									});
									
										
								} else {
									intro.previousStep()
								}
							}, 500);
						//	$('.introjs-nextbutton').show();
					
			} else if (intro._currentStep == 25) {
		
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#totalAddValue").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing("#totalAddValue", "<br /> Addition of two values = <span class='ct-b-green'>"+ $("#s1panelBody").text() +"</span>", 1, "",function() {
						typing(".introjs-tooltiptext", "Addition of two values is printed to the output screen.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					});
				
				});
				
			} else if (intro._currentStep == 27) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#totalSubValue").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing("#totalSubValue", "Substraction of two values = <span class='ct-b-green'> "+ $("#s2panelBody").text() +"</span>", 1, "",function() {
						typing(".introjs-tooltiptext", "Subtraction of two values is printed to the output screen.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 29) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#totalMulValue").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing("#totalMulValue", "Multiple of two values = <span class='ct-b-green'> " + $("#s3panelBody").text() +"</span>", 1, "",function() {
						typing(".introjs-tooltiptext", "Multiplication of two values is printed to the output screen.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 31) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#totalDivValue").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing("#totalDivValue", "Division of two values = <span class='ct-b-green'> "+ $("#s4panelBody").text() +"</span>", 1, "",function() {
						typing(".introjs-tooltiptext", "Division of two values is printed to the output screen.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 33) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#totalMudValue").removeClass("opacity00");
					$(".introjs-tooltip").removeClass("hide");
					typing("#totalMudValue", "Mudulo of two values = <span class='ct-b-green'> "+ $("#s5panelBody").text() +"</span>", 1, "",function() {
						typing(".introjs-tooltiptext", "Mudulo of two values is printed to the output screen.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					});
				});
			}
			break;
		
		case "inputChar1" :
			console.log("inputvalue")
			$('.introjs-nextbutton').hide();
			$("#inputChar1" ).focus();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Enter first integer value.</br>" +
						"<span id='errorTextBox1' class='ct-code-b-red'></span>", 1, "",function() {
					$("#inputChar1" ).keyup(function() {
						if ($("#inputChar1").val().length == '') {
							$('.introjs-nextbutton,.introjs-prevbutton').hide();
						} else {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						}
					});
				});
			});
			break;
		
		case "inputChar2" :
			$('.introjs-nextbutton').hide();
			$("#inputChar2").focus();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Enter second integer value. </br>" + 
						"<span id='errorTextBox2' class='ct-code-b-red'></span>", 1, "",function() {
					$("#inputChar2" ).keyup(function() {
						if ($("#inputChar2").val().length == '') {
							$('.introjs-nextbutton,.introjs-prevbutton').hide();
						} else {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						}
					});
				});
			});
			break;
			
		case "panelBox1" :
			$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass("hide");
					$("#s1panelBody").addClass("ct-code-b-green");
					$("#s1panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$("#s1panelBody").removeClass("animated zoomIn")
						console.log("a value fliping to input value")
						t1.to("#s1AValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#s1AValue").text($('#inputChar1').val());
						}});
				
						t1.to("#s1AValue", 0.5, {opacity:1, rotationX: 0});
						console.log("b value fliping to input value")
						t1.to("#s1BValue", 1, {opacity:1, rotationX: -90, onComplete: function() {
							$("#s1BValue").text($('#inputChar2').val());
						}});
						
						t1.to("#s1BValue", 1, {opacity:1, rotationX: 0});
						
						var l1 = parseInt($('#inputChar1').val());
						var l2 = parseInt($('#inputChar2').val());
						var result = l1 + l2;
						
						t1.to("#s1panelBody", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							$("#s1panelBody").text(result);
							$("#s1panelBody").addClass("ct-code-b-green");
						}});
						console.log("afer addition")
						t1.to("#s1panelBody", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
							
	
							typing(".introjs-tooltiptext", "Addition Operation is performed and the result in stored in s1. Also, address is allocated to it.", 1, "",function() {
								$('.introjs-nextbutton,.introjs-prevbutton').show();
							});
						}});
					});
				});
			
			   
			break;
			
		case "panelBox2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#s2panelBody").addClass("ct-code-b-green");
				$("#s2panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#s2panelBody").removeClass("animated zoomIn")
						
					t1.to("#s2AValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s2AValue").text($('#inputChar1').val());
					}});
					
					t1.to("#s2AValue", 0.5, {opacity:1, rotationX: 0});
					console.log("b value fliping to input value")
					t1.to("#s2BValue", 1, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s2BValue").text($('#inputChar2').val());
					}});
				
					t1.to("#s2BValue", 1, {opacity:1, rotationX: 0});
					
					var l1 = parseInt($('#inputChar1').val());
					var l2 = parseInt($('#inputChar2').val());
					var result = l1 - l2;
				
					t1.to("#s2panelBody", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s2panelBody").text(result);
						$("#s2panelBody").addClass("ct-code-b-green");
					}});
					
					t1.to("#s2panelBody", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						typing(".introjs-tooltiptext", "Subtraction Operation is performed and the result in stored in s2. Also, address is allocated to it.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					}});
				});
			});
			break;
			
		case "panelBox3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#s3panelBody").addClass("ct-code-b-green");
				$("#s3panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#s3panelBody").removeClass("animated zoomIn");

					t1.to("#s3AValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s3AValue").text($('#inputChar1').val());
					}});
					
					t1.to("#s3AValue", 0.5, {opacity:1, rotationX: 0});
					
					t1.to("#s3BValue", 1, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s3BValue").text($('#inputChar2').val());
					}});
					
					t1.to("#s3BValue", 1, { opacity:1, rotationX: 0 });
					
					var l1 = parseInt($('#inputChar1').val());
					var l2 = parseInt($('#inputChar2').val());
					var result = l1 * l2;
					
					t1.to("#s3panelBody", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s3panelBody").text(result);
						$("#s3panelBody").addClass("ct-code-b-green");
					}});
					
					t1.to("#s3panelBody", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						typing(".introjs-tooltiptext", "Multiplication Operation is performed and the result in stored in s3. Also, address is allocated to it.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					}});
				});
			});
			
			break;
			
		case "panelBox4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#s4panelBody").addClass("ct-code-b-green");
				$("#s4panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#s4panelBody").removeClass("animated zoomIn")
					
					t1.to("#s4AValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s4AValue").text($('#inputChar1').val());
					}});
					
					t1.to("#s4AValue", 0.5, {opacity:1, rotationX: 0});
					
					t1.to("#s4BValue", 1, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s4BValue").text($('#inputChar2').val());
					}});
					
					t1.to("#s4BValue", 1, {opacity:1, rotationX: 0});
					
					var l1 = parseInt($('#inputChar1').val());
					var l2 = parseInt($('#inputChar2').val());
					var outputVal = (l1 / l2).toString();
					var result = Math.floor(outputVal);  /* outputVal.substring(0,outputVal.indexOf(".")); */
					
					t1.to("#s4panelBody", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s4panelBody").text(result);
						$("#s4panelBody").addClass("ct-code-b-green");
					}});
					
					t1.to("#s4panelBody", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						typing(".introjs-tooltiptext", "Division Operation is performed and the result in stored in s4. Also, address is allocated to it.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					}});
				});
			});
			break;
			
		case "panelBox5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass("hide");
				$("#s5panelBody").addClass("ct-code-b-green");
				$("#s5panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#s5panelBody").removeClass("animated zoomIn");
					t1.to("#s5AValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s5AValue").text($('#inputChar1').val());
						$("#s5panelBody").addClass("ct-code-b-green");
					}});
					
					t1.to("#s5AValue", 0.5, {opacity:1, rotationX: 0});
					
					t1.to("#s5BValue", 1, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s5BValue").text($('#inputChar2').val());
						$("#s5panelBody").addClass("ct-code-b-green");
					}});
					
					t1.to("#s5BValue", 1, {opacity:1, rotationX: 0});
					
					var l1 = parseInt($('#inputChar1').val());
					var l2 = parseInt($('#inputChar2').val());
					var result = l1 % l2;
					
					t1.to("#s5panelBody", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s5panelBody").text(result);
						$("#s5panelBody").addClass("ct-code-b-green");
					}});
					
					t1.to("#s5panelBody", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						typing(".introjs-tooltiptext", "Mudulo Operation is performed and the result in stored in s5. Also, address is allocated to it.", 1, "",function() {
							$('.introjs-nextbutton,.introjs-prevbutton').show();
						});
					}});
				});
			});
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 1, "",function() {
					
				});
			});
			break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	typing(".introjs-tooltiptext", "Let us learn execution of sample program to illustrate Arithmetic Operations.", 10, "",function() {
		$('.introjs-nextbutton').show();
	});
};
function isNumber(evt) {
//	$(".error-text").remove();
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	    $("#errorTextBox1").addClass("ct-code-b-red");
    	$("#errorTextBox1").text("Enter only integer values");
    	$("#errorTextBox2").addClass("ct-code-b-red");
    	$("#errorTextBox2").text("Enter only integer values");
        return false;
    } else {
    	$("#errorTextBox1").removeClass("ct-code-b-red");
    	$("#errorTextBox1").text("");
    	$("#errorTextBox2").removeClass("ct-code-b-red");
    	$("#errorTextBox2").text("");
	    return true;
    }
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}