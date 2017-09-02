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
						position:"bottom"
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
						position:"bottom"
					},{
						element :'#line4',
						intro :'',
						position:"bottom" 
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom"
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
						position:"bottom"
					},{
						element :'#panelBoxA',
						intro :'',
						position:"bottom"
					},{
						element :'#line5',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBoxB',
						intro :'',
						position:"bottom"
					},{
						element :'#line6',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox1',
						intro :'',
						position:"bottom"
					},{
						element :'#line7',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox2',
						intro :'',
						position:"bottom"
					},{
						element :'#line8',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox3',
						intro :'',
						position:"bottom"
					},{
						element :'#line9',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox4',
						intro :'',
						position:"bottom"
					},{
						element :'#line10',
						intro :'',
						position:"bottom"
					},{
						element :'#panelBox5',
						intro :'',
						position:"bottom"
					},{
						element :'#line11',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom"
					},{
						element :'#line12',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom"
					},{
						element :'#line13',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom"
					},{
						element :'#line14',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom"
					},{
						element :'#line15',
						intro :'',
						position:"bottom"
					},{
						element :'#consoleId',
						intro :'',
						position:"bottom"
					},{
						element :'#restartBtn',
						intro :'',
						position:"left"
				}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Here is the program to print all arithmetic operations.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "It is a header file. which is a standard library function for file input and output.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "main() is the operating system call.<ul><li>main is execution starting point for any c programs</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "int is Datatype.<ul><li>It allocates 2 bytes of memory.</li><li>It stores all integers of type int.</li></ul>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "animationDiv" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelBoxA").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					$("#panelBoxB").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						$("#panelBox1").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
							$("#panelBox2").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
								$("#panelBox3").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
									$("#panelBox4").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
										$("#panelBox5").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
											typing(".introjs-tooltiptext", "The values of int a,b,s1,s2,s3,s4,s5 are stored and for each value address is allocated to it.", 10, "",function() {
												$('.introjs-nextbutton').show();
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
			
		case "line4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line5" :
			$('.introjs-nextbutton').hide();
			if(intro._currentStep == 10) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#scanPercent1").effect("highlight", {color: '#008000'}, 1000, function() {
						$("#scanAmpPercentAId").effect("highlight",{color: '#008000'}, 1000, function() {
							$(".introjs-tooltiptext").append("<div></div>");
							var text = "scanf() function is used to read character, string, numeric data from keyboard. <br />" +
										"Now, after performing the scanf() function the values of %d and &a are.. <br />" +
										"a = <span class='ct-code-b-green'> " + $('#inputChar1').val() + " </span>";
							typing($(".introjs-tooltiptext div:last-child"), text, 10, "",function() {
								$("#aValue").text($('#inputChar1').val());
								$("#bValue").text($('#inputChar2').val());
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			} else if(intro._currentStep == 12) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#scanPercent2").effect("highlight", {color: '#008000'}, 1000, function() {
						$("#scanAmpPercentBId").effect("highlight",{color: '#008000'}, 1000, function() {
							typing(".introjs-tooltiptext", "scanf() function is used to read character, string, numeric data from keyboard. <br />" +
									"Now, after performing the scanf() function the values of %d and &b are.. <br />" +
									"b = <span class='ct-code-b-green'> " + $('#inputChar2').val() + " </span>", 10, "",function() {
								$('.introjs-nextbutton').show();
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
					typing(".introjs-tooltiptext", "first value is stored in a.", 10, "",function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "panelBoxB" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#panelBBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					typing(".introjs-tooltiptext", "second value is stored in b.", 10, "",function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
			
		case "line6" :
			$("#inputChar1").attr("disabled", true);
			$("#inputChar2").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Addition of a, b is assigned to a variable s1.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line7" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Substration of a, b is assigned to a variable s2.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line8" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Multiplication of a, b is assigned to a variable s3.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line9" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Division of a, b is assigned to a variable s4.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line10" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Modulo of a, b is assigned to a variable s5.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line11" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s1</span> is printed on output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line12" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s2</span> is printed on output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line13" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s3</span> is printed on output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line14" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s4</span> is printed on output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "line15" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "printf() is library function, uesd to display anything in double quotes on the output screen. <br/>In this the value of <span class='ct-b-green'>s5</span> is printed on output screen.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
			
		case "consoleId" :
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 7) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#typeChar", "<span id='typingCharId'>Enter any two integer values:</span>\n" +
							"<span id='firstIntVal'>first value  : <input class='enter-values' tabindex='0' maxlength='0' /></span>\n"+
							"<span id='secondIntVal'>second value: <input class='enter-values' tabindex='0' maxlength='0'/></span>", 10, "",function() {
						typing(".introjs-tooltiptext", "enter any of two integer values.", 10, "",function() {
							$("#hiddenTypingChar").addClass("hidden");
							$("#firstIntVal").addClass("hidden");
							$("#secondIntVal").addClass("hidden");
							$("#typingCharId").removeClass("hidden");
							$("#firstInputInteger").removeClass("hidden");
							$("#secondInputInteger").removeClass("hidden");
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						//	$('.introjs-nextbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 25) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalAddValue", "<br /> Addition of two values = <span class='ct-b-green'>"+ $("#s1panelBody").text() +"</span>", 10, "",function() {
						typing(".introjs-tooltiptext", "Addition of two values is printed to the output screen.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 27) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalSubValue", "Substraction of two values = <span class='ct-b-green'> "+ $("#s2panelBody").text() +"</span>", 10, "",function() {
						typing(".introjs-tooltiptext", "Subtraction of two values is printed to the output screen.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 29) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalMulValue", "Multiple of two values = <span class='ct-b-green'> " + $("#s3panelBody").text() +"</span>", 10, "",function() {
						typing(".introjs-tooltiptext", "Multiplication of two values is printed to the output screen.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 31) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalDivValue", "Division of two values = <span class='ct-b-green'> "+ $("#s4panelBody").text() +"</span>", 10, "",function() {
						typing(".introjs-tooltiptext", "Division of two values is printed to the output screen.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				
			} else if (intro._currentStep == 33) {
				$('.introjs-helperLayer ').one('transitionend', function() {
					typing("#totalMudValue", "Mudulo of two values = <span class='ct-b-green'> "+ $("#s5panelBody").text() +"</span>", 10, "",function() {
						typing(".introjs-tooltiptext", "Mudulo of two values is printed to the output screen.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			}
			break;
		
		case "inputChar1" :
			$('.introjs-nextbutton').hide();
			$("#inputChar1" ).focus();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing(".introjs-tooltiptext", "Enter first integer value.</br>" +
						"<span id='errorTextBox1' class='ct-code-b-red'></span>", 10, "",function() {
					$("#inputChar1" ).keyup(function() {
						if ($("#inputChar1").val().length == '') {
							$('.introjs-nextbutton').hide();
						} else {
							$('.introjs-nextbutton').show();
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
						"<span id='errorTextBox2' class='ct-code-b-red'></span>", 10, "",function() {
					$("#inputChar2" ).keyup(function() {
						if ($("#inputChar2").val().length == '') {
							$('.introjs-nextbutton').hide();
						} else {
							$('.introjs-nextbutton').show();
						}
					});
				});
			});
			break;
			
		case "panelBox1" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s1panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					
					t1.to("#s1AValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s1AValue").text($('#inputChar1').val());
					}});
					
					t1.to("#s1AValue", 0.5, {opacity:1, rotationX: 0});
					
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
					
					t1.to("#s1panelBody", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
						typing(".introjs-tooltiptext", "Addition Operation is performed and the result in stored in s1. Also, address is allocated to it.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
			});
			break;
			
		case "panelBox2" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s2panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					t1.to("#s2AValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s2AValue").text($('#inputChar1').val());
					}});
					
					t1.to("#s2AValue", 0.5, {opacity:1, rotationX: 0});
					
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
						typing(".introjs-tooltiptext", "Subtraction Operation is performed and the result in stored in s1. Also, address is allocated to it.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
			});
			break;
			
		case "panelBox3" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#s3panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {

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
						typing(".introjs-tooltiptext", "Multiplication Operation is performed and the result in stored in s1. Also, address is allocated to it.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
			});
			break;
			
		case "panelBox4" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s4panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
					
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
						typing(".introjs-tooltiptext", "Division Operation is performed and the result in stored in s1. Also, address is allocated to it.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
			});
			break;
			
		case "panelBox5" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#s5panelBody").removeClass("visibility-hidden").addClass("animated zoomIn").one('animationend', function() {
						
					t1.to("#s5AValue", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s5AValue").text($('#inputChar1').val());
					}});
					
					t1.to("#s5AValue", 0.5, {opacity:1, rotationX: 0});
					
					t1.to("#s5BValue", 1, {opacity:1, rotationX: -90, onComplete: function() {
						$("#s5BValue").text($('#inputChar2').val());
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
						typing(".introjs-tooltiptext", "Mudulo Operation is performed and the result in stored in s1. Also, address is allocated to it.", 10, "",function() {
							$('.introjs-nextbutton').show();
						});
					}});
				});
			});
			break;
			
		case "restartBtn" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					
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
	});
}