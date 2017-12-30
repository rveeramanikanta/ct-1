var bannu = 1;
var readPrintStringUsingGetsPutsReady = function() {
	$("restartBtn").click(function(){
		$("#inputChar").val('');
		$("#hiddenTotalEnterChar").val();
		location.reload();
	});
	intro = introJs();
	$("nextButton").click(function(){
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showBullets : false,
		exitOnOverlayClick : false,
		escOnExit : false,
		keyboardNavigation : false,
		showStepNumbers : false,
		steps : [{
			element : '#informationDiv',
			intro :"",
			tooltipClass : 'hide'
		}, {
			element : '#preBody',
			intro :"",
			animateStep: 'preBody1'
		}, {
			element : '#method',
			intro :"",
			animateStep: 'voidMethod1',
			tooltipClass : 'hide',
		}, {
			element : '#method1',
			intro :"",
			animateStep : 'method11'
		}, {
			element : '#method2',
			intro :"",
			animateStep : 'method21'
		}, {
			element : '#method3',
			intro :"",
			animateStep : 'method31'
		}, {
			element : '#main',
			intro :"",
			animateStep: 'main1',
			tooltipClass : 'hide',
		}, {
			element : '#int1',
			intro :"",
			animateStep: 'int11',
			tooltipClass : 'hide',
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory1',
			tooltipClass : 'hide',
		}, {
			element : '#float1',
			intro :"",
			animateStep: 'float11',
			tooltipClass : 'hide',
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory2',
			tooltipClass : 'hide',
		}, {
			element : '#char1',
			intro :"",
			animateStep : 'char11',
			tooltipClass : 'hide',
		}, {
			element : '#animationBox',
			intro :"",
			animateStep : 'memory3',
			tooltipClass : 'hide',
		}, {
			element : '#show1',
			intro :"",
			animateStep : 'show11',
			tooltipClass : 'hide',
		}, {
			element : '#method1',
			intro :"",
			animateStep : 'method12',
			tooltipClass: 'hide'
		}, {
			element : '#cout1',
			intro :"",	
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1',
			tooltipClass : 'hide',
		}, {
			element : '#animateVal1',
			intro :"",
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry1',
			tooltipClass: 'hide'
		}, {
			element : '#show2',
			intro :"",
			animateStep : 'show21',
			tooltipClass: 'hide'
		}, {
			element : '#method2',
			intro :"",
			animateStep : 'method22',
			tooltipClass: 'hide'
		}, {
			element : '#cout2',
			intro :"",
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2',
			tooltipClass: 'hide'
		}, {
			element : '#animateVal2',
			intro :"",	
			tooltipClass: 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry2',
			tooltipClass: 'hide'	
		}, {
			element : '#show3',
			intro :"",
			animateStep : 'show31',
			tooltipClass: 'hide'
		}, {
			element : '#method3',
			intro :"",
			animateStep : 'method32',
			tooltipClass: 'hide'
		}, {
			element : '#cout3',
			intro :"",
			tooltipClass : 'hide',
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData3',
			tooltipClass: 'hide'	
		}, {
			element : '#animateVal3',
			intro :"",	
			tooltipClass: 'hide'	
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'dataEntry3',
			tooltipClass: 'hide'	
		}, {
			element : '#mainClose',
			intro :"",
			animateStep : 'mainClose1',
		}, {
			element : '#preBody',
			intro :"",	
			animateStep: 'preBody2',
			tooltipClass: 'hide'	
		}, {
			element : '#method',
			intro :"",
			animateStep: 'voidMethod2',
			tooltipClass : 'hide',
		}, {
			element : '#template',
			intro :"",	
			tooltipClass : 'hide',
		}, {
			element : '#main',
			intro :"",
			animateStep: 'main2',
			tooltipClass : 'hide',
		}, {
			element : '#int1',
			intro :"",
			animateStep: 'int12',
			tooltipClass : 'hide',
		}, {
			element : '#animationBox1',
			intro :"",
			animateStep : 'memory4',
			tooltipClass : 'hide'
		}, {
			element : '#float1',
			intro :"",
			animateStep: 'float12',
			tooltipClass : 'hide',
		}, {
			element : '#animationBox1',
			intro :"",
			animateStep : 'memory5',
			tooltipClass : 'hide'
		}, {
			element : '#char1',
			intro :"",
			animateStep: 'char12',
			tooltipClass : 'hide',
		}, {
			element : '#animationBox1',
			intro :"",
			animateStep : 'memory6',
			tooltipClass : 'hide'
		}, {
			element : '#show1',
			intro :"",
			animateStep : 'show12',
			tooltipClass: 'hide'	
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method41',
			tooltipClass : 'hide',
			position:'top'
		}, {
			element : '#show2',
			intro :"",
			animateStep : 'show22',
			tooltipClass: 'hide'	
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method42',
			tooltipClass : 'hide',
			position:'right'
		}, {
			element : '#show3',
			intro :"",
			animateStep : 'show32',
			tooltipClass: 'hide'
		}, {
			element : '#method4',
			intro :"",
			animateStep : 'method43',
			tooltipClass : 'hide',
			position:'right'
		}, {
			element : '#mainClose',
			intro :"",
			animateStep : 'mainClose2',
		}, {
			element : "#restartBtn",
			intro : "",
			position : "left"
		}]
	});
	intro.onbeforechange(function(targetElement){
		var elementId = targetElement.id;
		switch(elementId) {
		case "int1" :
			$("#aValue1").addClass("opacity00");
		break;
		case "float1" :
			$("#bValue1").addClass("opacity00");
		break;
		case "char1" :
			$("#cValue1").addClass("opacity00");
			break;
		case "int2" :
			$("#aValue2").addClass("opacity00");
		break;
		case "float2" :
			$("#bValue2").addClass("opacity00");
		break;
		case "char2" :
			$("#cValue2").addClass("opacity00");
		break;
		case "animateVal1" :
			$("#value1").addClass("opacity00");
		break;
		case "animateVal2" :
			$("#value2").addClass("opacity00");
		break;
		case "animateVal3" :
			$("#value3").addClass("opacity00");
		break;
		case "show1" :
			var animateStep = intro._introItems[intro._currentStep].animateStep
			switch(animateStep) {
			case "show12" :
				$('.user-button').remove();
				$("#inputNumber4").remove();
				$("#outputBox1").addClass("hide");
				$("#inputNumber4").addClass("opacity00");
				$("#borderBox4").removeClass('z-index1000000');
				$("#value1").addClass("opacity00");
			break;
			}
			break;
		case "show2" :
			var animateStep = intro._introItems[intro._currentStep].animateStep
			switch(animateStep) {
			case "show22" :
				$('.user-button').remove();
				$("#inputNumber5").remove();
				$('#inputNumber4 + *').after().remove();
				$("#inputNumber5").addClass("opacity00");
				$("#borderBox5").removeClass('z-index1000000');
				$("#value5").addClass("opacity00");
			break;
			}
			break;
		case "show3" :
			var animateStep = intro._introItems[intro._currentStep].animateStep
			switch(animateStep) {
			case "show32" :
				$('.user-button').remove();
				$("#inputNumber6").remove();
				$('#inputNumber5 + *').after().remove();
				$("#inputNumber6").addClass("opacity00");
				$("#borderBox6").removeClass('z-index1000000');
				$("#value6").addClass("opacity00");
			break;
			}
			break;
		case 'main':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'main1':
				$("#int1").css("opacity", '0');
			break;
			}
			break;
		case 'mainClose':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
		case "mainClose1" :
			$('#animationBox').removeClass('hide');
			$('#aValue1, #bValue1, #cValue1').removeClass('opacity00').removeAttr('style');
			$('#outputBox').removeClass('hide');
			$('#inputNumber1, #inputNumber2, #inputNumber3').removeClass('opacity00');
		break;
			}
		break;
		case 'template':
			//$('#template1').addClass('opacity00').removeClass('blinking-orange');
		break;
		case "method" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'voidMethod2':
				$('#method').removeClass('hide');
				$('#template').addClass('hide');
				break;
			}
			break;
		case 'preBody':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
		case 'preBody2':
			$("#intBlink").removeClass("blinking-orange");
			$("#floatBlink").removeClass("blinking-orange");
			$("#charBlink").removeClass("blinking-orange");
		break;
			}
			break;
		case 'method3':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method31':
				$('#main').css('opacity', '0');
			break;
			}
			break;
			break;
		/*case "animateVal4" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'animateVal41':
				$("#value4").addClass("opacity00");
			break;
			case 'animateVal42':
				$("#value5").addClass("opacity00");
			break;
			case 'animateVal43':
				$("#value6").addClass("opacity00");
			break;
			}
			break;*/
		}
	});
	intro.onafterchange(function(targetElement){
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		
		switch(elementId) {
		case 'preBody' :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'preBody1':
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#preBody").removeClass("opacity00");
					typing('.introjs-tooltiptext',"First consider how a function is <y>overloading</y>.", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case 'preBody2':
				
				$('#animationBox').addClass('hide');
				$('#outputBox').addClass('hide');
				$('#aValue1, #bValue1, #cValue1').css('opacity', '0');
				$('#inputNumber1, #inputNumber2, #inputNumber3').addClass('opacity00');
				$('.introjs-helperLayer').one("transitionend", function() {
					$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext',"Now see how the same program is written by using <y>function template</y>.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
				}
			break;
		case 'preBody1' :
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#preBody1").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <y> function-with-templates</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'main':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'main1':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-tooltip").removeClass('hide');
				typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is" +
						" the starting point of execution.", function() {
					$("#main").fadeTo(300 , 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
			break;
			case 'main2':
				//$('#template1').removeClass('blinking-orange');
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass('hide');
					typing(".introjs-tooltiptext", "<span class='ct-code-b-yellow'>main()</span> is" +
							" the starting point of execution.", function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
				break;
			}
			break;
		case "method" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'voidMethod1':
				$('.introjs-helperLayer').one("transitionend",function() {
					setTime('#method');
				});
			break;
			case 'voidMethod2':
				$('.introjs-helperLayer').one("transitionend",function() {
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", "The <y>template</y> for the <y>show()</y> method is ", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="templateFunction()">Next&rarr;</a>');
					});
				});
			break;
			}
		break;
		case 'template':
			if(intro._direction == 'forward') {
				$('#method').addClass('hide');
				$('#template').removeClass('hide').fadeOut(0).fadeIn(2000);
				intro.refresh();
				$('.user-button').remove();
				$('.introjs-helperLayer').one("transitionend",function() {
					$("#intBlink").removeClass("blinking-orange");
					$("#floatBlink").removeClass("blinking-orange");
					$("#charBlink").removeClass("blinking-orange");
					setTimeout(function() {
						intro.nextStep();
					}, 1500);
				});
			} else {
				setTimeout(function() {
					intro.previousStep();
				}, 1500);
			}
		break;
		case "main1" :
			$("#tempVal").removeClass("blinking-orange");
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"<y>main()</y> method to execute the program.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "int1" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "int11" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext',"The variable <y>num1</y> is declared as <y>int</y> type" +
						" and initialized with value <y>10</y>.", function() {
					$('#int1').fadeTo(300, 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
		break;
			case "int12" :
				$('.introjs-helperLayer').one("transitionend",function() {
					$('#int1').removeClass('opacity00');
					setTimeOut()
				});
				break;
			}
			break;
		case "float1" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
		case "float11" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," The variable <y>num2</y> is declared as <y>float</y> type" +
						" and initialized with value <y>10.5</y>.", function() {
					$('#float1').fadeTo(300, 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
		break;
		case "float12" :
			$('.introjs-helperLayer').one("transitionend",function() {
				setTimeOut()
			});
			break;
		}
		break;
		case "char1" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
		case "char11" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," The variable <y>num3</y> is declared as <y>ch</y> type" +
						" and initialized with value <y>'R'</y>.", function() {
					$('#char1').fadeTo(300, 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
		break;
		case "char12" :
			$('.introjs-helperLayer').one("transitionend",function() {
				setTimeOut()
			});
			break;
		}
		break;
		case "int2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," To declare a variable of type <y>int</y>" +
						" called <y>a</y> and initialize it to a value of <y>6</y> .", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "float2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext'," To declare a variable of type <y>float</y>" +
						" called <y>b</y> and initialize it to a value of <y>7.9</y> .", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "char2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext'," To declare a variable of type <y>char</y>" +
						" called <y>c</y> and initialize it to a value of <y>'S'</y> .", function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
		break;
		case "show1" :
			var animateStep = intro._introItems[intro._currentStep].animateStep
			switch(animateStep) {
			case "show11" :
				$('.introjs-helperLayer').one("transitionend",function() {
				$('.introjs-tooltip').css("min-width", "300px");
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext',"The method <y>show()</y> is called with an <y>int</y> argument.", function() {
					$('#show1').fadeTo(300, 1, function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			});
		break;
			case "show12" :
				$('.introjs-helperLayer').one("transitionend",function() {
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"The method <y>show()</y> is called with an <y>int</y> argument.", function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				});
			break;
			}
			break;
			case "show2" :
				var animateStep = intro._introItems[intro._currentStep].animateStep
				switch(animateStep) {
				case "show21" :
				$('.introjs-helperLayer').one("transitionend",function() {
					$(".introjs-tooltip").removeClass("hide");
					$('#show2').fadeTo(300, 1, function() {
						typing('.introjs-tooltiptext',"The method <y>show()</y> is called with an <y>float</y> argument.", function() {
							$('.introjs-prevbutton, .introjs-nextbutton').show();
						});
					});
				});
			break;
		case "show22" :
			$('.introjs-helperLayer').one("transitionend",function() {
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext',"The method <y>show()</y> is called with an <y>float</y> argument.", function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
		break;
			}
		break;
			case "show3" :
				var animateStep = intro._introItems[intro._currentStep].animateStep
				switch(animateStep) {
				case "show31" :
					$('.introjs-helperLayer').one("transitionend",function() {
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"The method <y>show()</y> is called with an <y>char</y> argument.", function() {
							$('#show3').fadeTo(300, 1, function() {
								$('.introjs-prevbutton, .introjs-nextbutton').show();
							});
						});
					});
				break;
				case "show32" :
					$('.introjs-helperLayer').one("transitionend",function() {
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"The method <y>show()</y> is called with an <y>char</y> argument.", function() {
							$('.introjs-prevbutton, .introjs-nextbutton').show();
						});
					});
				break;
				}
				break;
		case "cout1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				setTimeOut();
			});
		break;
		case "cout2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				setTimeOut();
			});
		break;
		case "cout3" :
			$('.introjs-helperLayer').one("transitionend",function() {
				setTimeOut();
			});
		break;
		case "animateVal1" :
			$('.introjs-helperLayer').one("transitionend",function() {
				setTimeOut();
			});
		break;
		case "animateVal2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				setTimeOut();
			});
		break;
		case "animateVal3" :
			$('.introjs-helperLayer').one("transitionend",function() {
				setTimeOut();
			});
		break;
			case "mainClose" :
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
 		case "mainClose1" :
 			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"This is the end of the <y>main()</y> function " +
						"where the program execution ends.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "mainClose2" :
			$('.introjs-helperLayer').one("transitionend",function() {
				typing('.introjs-tooltiptext',"This is the end of the <y>main()</y> function " +
						"where the program execution ends.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
			}
		break;
		case 'method1':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method11':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"This is the function definition of <y>show()</y> with <y>int</y> type. ", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'method12':
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeOut();
				});
				break;
			}
			break;
		case 'method2':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method21':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"This is the function definition of <y>show()</y> with <y>float</y> type.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'method22':
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeOut();
				});
				break;
			}
			break;
		case 'method3':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method31':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext',"This is the function definition of <y>show()</y> with <y>ch</y> type.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case 'method32':
				$('.introjs-helperLayer').one("transitionend", function() {
					setTimeOut();
				});
				break;
			}
			break;
		case 'method4':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'method41':
				$('.introjs-helperLayer').one("transitionend", function() {
					bannu = 1;
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"<y>show(num1)</y> is a <y>int</y> type variable so <y>templates</y> calls the " +
						"data type as <y>int</y>.", function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(1, \'int\', \'a\')">Next&rarr;</a>');
						$('.introjs-prevbutton').show();
					});
				});
				break;
			case 'method42':
				$('.introjs-helperLayer').one("transitionend", function() {
					bannu = 2;
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"<y>show(num2)</y> is a <y>float</y> type variable so <y>templates</y> calls the " +
						"data type as <y>float</y>.", function() {	
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(2, \'float\', \'b\')">Next&rarr;</a>');
						$('.introjs-prevbutton').show();
					});
				});
				break;
			case 'method43':
				$('.introjs-helperLayer').one("transitionend", function() {
					bannu = 3;
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"<y>show(ch)</y> is a <y>char</y> type variable so <y>templates</y> calls the " +
							"data type as <y>char</y>.", function() {	
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-button" onclick="flipEffect(3, \'char\', \'c\')">Next&rarr;</a>');
						$('.introjs-prevbutton').show();
					});
				});
				break;
			}
			break;
			
		case 'animationBox':
			$("#animationBox").removeClass("hide");
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory1':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						transferEffect("#aVal1", "#aValue1" ,function() {
							$("#aValue1").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							},500);
						});
					} else {
						$("#animationBox").addClass("hide");
						$('#float1').css('opacity', '');
						$("#aValue1").addClass('opacity00');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
				break;
			case 'memory2':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						transferEffect("#bVal1", "#bValue1" ,function() {
							$("#bValue1").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							},500);
						});
					} else {
						$('#char1').css('opacity', '');
						$("#bValue1").addClass('opacity00');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
				
				break;
			case 'memory3':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						transferEffect("#cVal1", "#cValue1" ,function() {
							$("#cValue1").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							},500);
						});
					} else {
						$('#show1').css('opacity', '0');
						$("#cValue1").addClass('opacity00');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
				break;
			}
			break;
		case 'animationBox1':
			$("#animationBox1").removeClass("hide");
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory4':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						transferEffect("#aVal1", "#aValue2" ,function() {
							$("#aValue2").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							},500);
						});
					} else {
						$("#animationBox1").addClass("hide");
						$("#aValue2").addClass('opacity00');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
				break;
			case 'memory5':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						transferEffect("#bVal1", "#bValue2" ,function() {
							$("#bValue2").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							},500);
						});
					} else {
						$("#bValue2").addClass('opacity00');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
				break;
			case 'memory6':
				$('.introjs-helperLayer').one("transitionend", function() {
					if(intro._direction == 'forward') {
						transferEffect("#cVal1", "#cValue2" ,function() {
							$("#cValue2").removeClass("opacity00");
							setTimeout(function() {
								intro.nextStep();
							},500);
						});
					} else {
						$("#cValue2").addClass('opacity00');
						setTimeout(function() {
							intro.previousStep();
						},500);
					}
				});
				break;
			}
			break;
		case "outputBox" :
			$("#outputBox").removeClass("hide");
			intro.refresh();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
		case "enterData1" :
			$('.introjs-helperLayer').one("transitionend", function() {
				if(intro._direction == 'forward') {
					$("#outputBody").append('<span id ="inputNumber1" class="opacity00">Integer number is : <span class="border opacity00 position" id="value1">'
							+ $('#boxValue1').text() +'');
					transferEffect("#enterText1","#inputNumber1",function() {
						$('#inputNumber1').removeClass('opacity00');
						setTimeout(function() {
							intro.nextStep();
						},1000);
					});
				} else {
					$('#inputNumber1').addClass('opacity00');
					$("#outputBox").addClass("hide");
					setTimeout(function() {
						intro.previousStep();
					},1000);
				}
			});
			break;
		case 'dataEntry1' :
			$("#borderBox1").addClass('z-index1000000');
			if(intro._direction == 'forward') {
				$("#boxValue1").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
				transferEffectCircle("#boxValue1","#value1", function() {
					$("#value1").removeClass("opacity00");
					$("#borderBox1").removeClass('z-index1000000');
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
			} else {
				$("#borderBox1").removeClass('z-index1000000');
				$('#show2').css('opacity', '0');
				$("#value1").addClass("opacity00");
				setTimeout(function() {
					intro.previousStep();
				},500);
			}
		break;
		case 'enterData2':
			$('.introjs-helperLayer').one("transitionend", function() {
				if(intro._direction == 'forward') {
					$("#outputBody").append('<br><span id="inputNumber2" class="opacity00">Float number is : <span class="border opacity00 position" id="value2">'
							+ $('#boxValue2').text() +'');
					transferEffect("#enterText2","#inputNumber2",function() {
						$('#inputNumber2').removeClass('opacity00');
						setTimeout(function() {
							intro.nextStep();
						},1000);
					});
				} else {
					$('#inputNumber2').addClass('opacity00');
					setTimeout(function() {
						intro.previousStep();
					},1000);
				}
			});
			break;
		case 'dataEntry2' :
			$("#borderBox2").addClass('z-index1000000');
			if(intro._direction == 'forward') {
				$("#boxValue2").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
					transferEffectCircle("#boxValue2","#value2", function() {
						$("#value2").removeClass("opacity00");
						$("#borderBox2").removeClass('z-index1000000');
						setTimeout(function() {
							intro.nextStep();
						},500);
					});
			} else {
				$("#borderBox2").removeClass('z-index1000000');
				$('#show3').css('opacity', '0');
				$("#value2").addClass("opacity00");
				setTimeout(function() {
					intro.previousStep();
				},500);
			}
			break;
		case 'enterData3':
			$('.introjs-helperLayer').one("transitionend", function() {
				if(intro._direction == 'forward') {
					$("#outputBody").append('<br><span id="inputNumber3" class="opacity00">Character is : <span class="border opacity00 position" id="value3">'
							+ $('#boxValue3').text() +'');
					transferEffect("#enterText3","#inputNumber3",function() {
						$('#inputNumber3').removeClass('opacity00');
						setTimeout(function() {
							intro.nextStep();
						},1000);
					});
				} else {
					$('#inputNumber3').addClass('opacity00');
					setTimeout(function() {
						intro.previousStep();
					},500);
				}
			});
			break;
		case 'dataEntry3' :
			$("#borderBox3").addClass('z-index1000000');
			if(intro._direction == 'forward') {
				$("#boxValue3").css("zIndex","1000000").effect( "highlight",{color: '#ff8080'}, 200);
				transferEffectCircle("#boxValue3","#value3", function() {
						$("#value3").removeClass("opacity00");
						$("#borderBox3").removeClass('z-index1000000');
						setTimeout(function() {
							intro.nextStep();
						},500);
					});
			} else {
				$("#borderBox3").removeClass('z-index1000000');
				$("#value3").addClass("opacity00");
				setTimeout(function() {
					intro.previousStep();
				},1000);
			}
			break;
			}
			break;
		case "restartBtn" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#animationBox').removeClass('z-index1000000');
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.",function() {
					$('#restart').click(function() {
						location.reload();
					});
				});
			});
		break;
	}
});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('#informationDiv').removeClass('opacity00');
	TweenMax.to('#infoText', 1 ,{
		opacity00 : 1,
		onComplete : function() {
			$('#nextButton').removeClass("opacity00");
			$('#nextButton').click(function(){
				$('#nextButton').remove();
				intro.nextStep();
				});
			}
		});
	}
function flipEffect(value, type, typeVal) {
	$('.user-button').remove();
	$('.introjs-tooltiptext').append("<div class='position opacity00' style='display:inline-block;' id='voidMethod4'>&nbsp;&nbsp;<y>void show " +
	"(<div class='display' id='t'>T</div> <span id='x' class='display'>x</span>) {" +
	"<div class='' id= 'cOutput'>&nbsp;&nbsp;&nbsp;&nbsp;cout << '<span id='cout'>The value is : '</span> << <div class='display position' id='xValue'>x</div> << endl;</div>" +
	"}</y></div><div id='one'></div>");
	$("#voidMethod4").removeClass("opacity00");
	fromEffectWithTweenMax("#method4", "#voidMethod4", function() {
		$('.introjs-tooltipbuttons').append('<a class="introjs-button user-button" onclick="methodFlipEffect' + bannu + '('+value+',\''+ type+'\',\''+typeVal+'\')">Next&rarr;</a>');
	});
}
function methodFlipEffect1(value, type, typeVal) {
	//bannu++;
	$('.user-button').remove();
	intro.refresh();
	transferEffect("#num" + value, "#"+ type +"1", function() {
		transferEffect("#" + type, "#t", function() {
			flipEffectWithTweenMax("#t", $("#" + type).text(), function() {
				transferEffect1("#"+ typeVal +"Val1",  "#x", function(){
					$('#outputBox1').removeClass('hide');
					$("#outputBody1").append('<span id="inputNumber4" class="opacity00">The value is : <span class="border opacity00 position" id="value4">'
							+ $('#boxValue4').text()+'');
					$("#cOutput").addClass('z-index10000000');
					$("#cout").effect( "transfer", { to: $("#inputNumber4"), className: "ui-effects-transfer" }, 2000 , function() {
						$("#cOutput").removeClass('z-index10000000');
						$('#inputNumber4').removeClass('opacity00');
						transferEffect('#xValue', "#boxValue4", function() {
							$("#borderBox4").addClass('z-index1000000');
							$("#boxValue4").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
							transferEffectCircle("#boxValue4", "#value4", function() {
								$("#value4").removeClass("opacity00");
								$("#borderBox4").removeClass('z-index1000000');
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});	
					});
				});
			});	
		});
	});
}
function methodFlipEffect2(value, type, typeVal) {
	//	bannu++;
	$('.user-button').remove();
	intro.refresh();
	transferEffect("#num" + value, "#"+ type +"1", function() {
		transferEffect("#" + type, "#t", function() {
			flipEffectWithTweenMax("#t", $("#" + type).text(), function() {
				transferEffect1("#"+ typeVal +"Val1",  "#x", function(){
					$('#outputBox1').removeClass('hide');
					$("#outputBody1").append('<br><span id="inputNumber5" class="opacity00">The value is : <span class="border opacity00 position" id="value5">'
							+ $('#boxValue5').text()+'');
					$("#cOutput").addClass('z-index10000000');
					$("#cout").effect( "transfer", { to: $("#inputNumber5"), className: "ui-effects-transfer" }, 2000 , function() {
						$('#inputNumber5').removeClass('opacity00');
						transferEffect('#xValue', "#boxValue5", function() {
							$("#borderBox5").addClass('z-index1000000');
							$("#boxValue5").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
							transferEffectCircle("#boxValue5", "#value5", function() {
								$("#value5").removeClass("opacity00");
								$("#borderBox5").removeClass('z-index1000000');
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});	
					});
				});
			});	
		});
	});
}
function methodFlipEffect3(value, type, typeVal) {
	$('.user-button').remove();
	intro.refresh();
	transferEffect("#num" + value, "#"+ type +"1", function() {
		transferEffect("#" + type, "#t", function() {
			flipEffectWithTweenMax("#t", $("#" + type).text(), function() {
				transferEffect1("#"+ typeVal +"Val1",  "#x", function(){
					$('#outputBox1').removeClass('hide');
					$("#outputBody1").append('<br><span id="inputNumber6" class="opacity00">The value is : <span class="border opacity00 position" id="value6">'
							+ $('#boxValue6').text()+'');
					$("#cOutput").addClass('z-index10000000');
					$("#cout").effect( "transfer", { to: $("#inputNumber6"), className: "ui-effects-transfer" }, 2000 , function() {
						$('#inputNumber6').removeClass('opacity00');
						transferEffect('#xValue', "#boxValue6", function() {
							$("#borderBox6").addClass('z-index1000000');
							$("#boxValue6").css("zindex", "1000000").effect('highlight', {color : '#ff8080'}, 200);
							transferEffectCircle("#boxValue6", "#value6", function() {
								$("#value6").removeClass("opacity00");
								$("#borderBox6").removeClass('z-index1000000');
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});	
					});
				});
			});	
		});
	});
}
function typing(typingId, typingContent, typingCallbackFunction) {
	var typingSpeed = 10;
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingSpeed,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	})
}
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1000 , function() {
	//$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function transferEffect1(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1500 , function() {
	//$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}
function transferEffectCircle(selector1, selector2, callBackFunction) {
	$(selector1).addClass("circle-css").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effectss-transfer" }, 1000 , function() {
	//$(selector2).removeClass("opacity00");
	$(selector1).removeClass("circle-css")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
		TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}
	});
}
function flipEffectWithTweenMax(selector, val, callBackFunction) {
	console.log("function Entered");
	$(selector).effect( "highlight",{color: 'green'}, 500, function() {
		TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	});
}
function setTime(selector) {
	if(intro._direction == 'forward') {
		$(selector).fadeTo(300, 1, function() {
			setTimeout(function() {
				intro.nextStep();
			},500);
		});
	} else {
		$(selector).css('opacity' ,'0');
		setTimeout(function() {
			intro.previousStep();
		},500);
	}
}
function setTimeOut() {
	if(intro._direction == 'forward') {
			setTimeout(function() {
				intro.nextStep();
			},500);
	} else {
		setTimeout(function() {
			intro.previousStep();
		},500);
	}
}
function templateFunction() {
	$('.user-btn').remove();
	$("#intBlink").addClass("blinking-orange");
	$("#floatBlink").addClass("blinking-orange");
	$("#charBlink").addClass("blinking-orange");
	$('.introjs-tooltiptext').append("<br><div id='voidMethod3' class='blinking-orange'><ul><li>template &lt;class <y>T</y>&gt;<br><span class='position'>" +
			"void show(<span class='display' id='t'><y>T</y></span> <span id='x' class='display'><y>x</y></span>) {<br>" 
		+ "<span class='' id= 'cOutput'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout << '<y>The value is : </y>' << "
		+ "<span class='display position' id='xValue'><y>x</y></span> << endl;</span>" 
		+ "<br>}</span></li></ul></div><div id='one'></div>");
		 typing("#one","<ul><li>In <y>templates</y>, we define only function with <y>parameters</y> of" +
						" <y>templates</y>, the template concept avoid the <y>duplicate code</y>.</li>" +
						"<li><y>int</y>, <y>float</y> and <y>char</y> types are replaced with parameter" +
						" template class <y>T</y>.</li></ul>" , function() {
			 $('.introjs-nextbutton, .introjs-prevbutton').show();
		 });
}
/*function templateAppend() {
	$('.user-btn').remove();
	
	typing('.introjs-tooltiptext', '', function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	});
}*/
function bounceFromEffectWithTimelineMax(selector1, selector2, callBackFunction) {
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