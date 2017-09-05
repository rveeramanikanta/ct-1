var val = 0;
var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddentotalEnterChar").val();
		location.reload();
	});
	intro = introJs();
	$("nextButton").click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showBullets : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		escOnExit : false,
		showStepNumbers : false,
		steps : [{
			element : "#informationDiv",
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : "#preBody",
			intro : '',
		}, {
			element : '#class',
			intro : '',
		
		}, {
			element : '#char',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory'
		}, {
			element : '#int',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory1'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public'
		}, {
			element : '#method1',
			intro : '',
			animateStep : 'static'
		}, {
			element : '#main',
			intro : '',
		}, {
			element : '#manager',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory2'
		}, {
			element : '#int1',
			intro : '',
		}, {
			element : '#condition',
			intro : '',
			animateStep : 'for'
		}, {
			element : '#forLoop',
			intro : '',
			animateStep : 'loop1'
		}, {
			element : '#iVal',
			intro : '',
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease'
		}, {
			element : '#iValComparision',
			intro : '',
			animateStep : 'ivc1'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'output'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData',
			tooltipClass : 'hide'	
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data'
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public1'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'outputt1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData1'	
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValAction'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output_1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData2'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep11',
			
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal1'
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_1'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_1'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease1'	
		}, {
			element : '#iValComparision',
			intro : '',
			animateStep : 'ivc2'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'output1',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData3'
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data1',
			tooltipClass : 'hide'
		/*}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory3'*/
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public2',
			tooltipClass : 'hide'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'outputt2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData4'
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep1'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal2'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValAction1'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output_3',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData5'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep12',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal3'
		}, {
			element : '#condition',
			intro : '',
			animateStep : 'for2',
			tooltipClass : 'hide'
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_2'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_2'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease2'	
		}, {
			element : '#iValComparision',
			intro : '',
			animateStep : 'ivc3'
		}, {
			element : '#cout4',
			intro : '',
			animateStep : 'output2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData6'
		}, {
			element : '#manager1',
			intro : '',
			animateStep : 'data2',
			tooltipClass : 'hide'
		/*}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'memory4'*/
		}, {
			element : '#method',
			intro : '',
			animateStep : 'public3',
			tooltipClass : 'hide'
		}, {
			element : '#cout',
			intro : '',
			animateStep : 'outputt3',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData7'
		}, {
			element : '#cin',
			intro : '',
			animateStep : 'cinStep2',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal4'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterValAction2'
		}, {
			element : '#cout1',
			intro : '',
			animateStep : 'output_4',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterData8'
		}, {
			element : '#cin1',
			intro : '',
			animateStep : 'cinStep13',
			tooltipClass : 'hide'
		},{
			element : '#outputBox',
			intro : '',
			animateStep : 'enterVal5'
		/*}, {
			element : '#condition',
			intro : '',
			animateStep : 'for3',
			tooltipClass : 'hide'*/
		},{
			element : '#close',
			intro : '',
			animateStep : 'close_3'
		},{
			element : '#iValIncrement',
			intro : '',
			animateStep : 'iValIncrement_3'
		}, {
			element : '#animationBox',
			intro : '',
			animateStep : 'countIncrease3'	
		}, {
			element : '#iValComparision',
			intro : '',
			animateStep : 'ivc4'
		}, {
			element : "#restartBtn",
			intro : "",
			position : "left"
		}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "preBody" :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <span class='ct-code-b-yellow'>"+
						"array of objects</span>.", 10,"", function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'class' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"To create a class as <span class='ct-code-b-yellow'>Employee</span>", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'char' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'manager' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'int1' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'iVal' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"This is the  <span class='ct-code-b-yellow'>initialization</span> section. Here a local " +
						"variable i is declared and initialized to <span class='ct-code-b-yellow'> 0</span>."+
							"", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'int' :
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"A <span class='ct-code-b-yellow'>static varibles</span>" +
						" are initialised to <span class='ct-code-b-yellow'>zero</span>" +
						" by default the user can also initialise a value to the static variable.", 10, "",function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'animationBox' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'memory' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#createMemory","#table", function() {
						$("#table").fadeTo(1500, 1, function() {
							typing("introjs-tooltiptext","",10,"",function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case 'memory1' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					transferEffect("#age","#age2", function() {
						$("#age2").fadeTo(1000, 1, function() {
							$("#borderBox1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
								typing("introjs-tooltiptext","",10,"",function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
					});
				});
				break;
			case "countIncrease":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					$('#countBox').removeClass('opacity00');
					transferEffect("#num1","#countCupValue", function() {
						$("#countCupValue").addClass('z-index10000000');
						//$("#countCupValue").append('<span id= "nmbr">0</span>');
						$("#countCupValue").text('0');
						typing('.introjs-tooltiptext',"Increment to  <span class='ct-code-b-yellow'>count</span>" +
								" value is  <span class='ct-code-b-yellow'>0</span>.", 10, "", function() {
								$('.introjs-nextbutton').show();
							});
					});
				});
				break;
			case "countIncrease1":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					$('#countBox').removeClass('opacity00');
					val++;
					transferEffect("#iValIncrement","#countCupValue", function() {
						$("#nmbr").empty('');
					$("#countCupValue").addClass('z-index10000000');
						//$("#countCupValue").append('<span id= "num2">1</span>');
					$("#countCupValue").append('<span id= "num2">' + val + '</span>');
						typing('.introjs-tooltiptext',"Increment to  <span class='ct-code-b-yellow'>count</span>" +
								" value is  <span class='ct-code-b-yellow'>0</span>.", 10, "", function() {
								$('.introjs-nextbutton').show();
							});
					});
				});
				break;
			case "countIncrease2":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					$('#countBox').removeClass('opacity00');
					transferEffect("#num1","#countCupValue", function() {
						$("#num2").empty('');
						$("#countCupValue").addClass('z-index10000000');
						$("#countCupValue").append('<span id= "num3">2</span>');
						typing('.introjs-tooltiptext',"Increment to  <span class='ct-code-b-yellow'>count</span>" +
								" value is  <span class='ct-code-b-yellow'>0</span>.", 10, "", function() {
								$('.introjs-nextbutton').show();
							});
					});
				});
				break;
			case "countIncrease3":
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#animationBox').removeClass('opacity00');
					$('#countBox').removeClass('opacity00');
					transferEffect("#num1","#countCupValue", function() {
						$("#num3").empty('');
						$("#countCupValue").append('<span id= "num4">3</span>');
						typing('.introjs-tooltiptext',"Increment to  <span class='ct-code-b-yellow'>count</span>" +
								" value is  <span class='ct-code-b-yellow'>0</span>.", 10, "", function() {
								$('.introjs-nextbutton').show();
							});
					});
				});
				break;
			case 'memory2' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#animationBox").removeClass("opacity00");
					$("#managerName").fadeTo(2000, 1, function() {
						$("#managerName1").fadeTo(500, 1, function() {
							$("#table2").fadeTo(1000, 1, function() {
								$("#age3").fadeTo(1000, 1, function() {
									$("#borderBox2").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
										$("#managerName2").fadeTo(1000, 1, function() {
											$("#table4").fadeTo(1000, 1, function() {
												$("#age4").fadeTo(1000, 1, function() {
													$("#borderBox3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
														typing("introjs-tooltiptext","",10,"",function() {
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
						});
					});
				break;
			}
			break;
		case 'close':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'close_1':
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"close the getdata tag.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case 'close_2':
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				});
			break;
			case 'close_3':
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				});
			break;
			}
			break;
		case 'iValIncrement':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'iValIncrement_1':
				//$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"close the getdata tag.", 10, "", function() {
						$('.introjs-nextbutton').show();
					//});
				});
			break;
			case 'iValIncrement_2':
				//$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				//});
			break;
			case 'iValIncrement_3':
				$('.introjs-helperLayer').one('transitionend',function() {
					setTimeout(function() {
						intro.nextStep();
					},500)
				});
			break;
			}
			break;
		case  'method':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'public' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "public1":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "public2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "public3":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'method1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'static' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"The method access specifier is <span class='ct-code-b-yellow'>"+
							"public</span>.", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "static1":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "static2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'condition':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'for' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "for1":
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#animationBox").removeClass('z-index1000000');
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "for2":
				$('.introjs-helperLayer').one('transitionend',function() {
					$("#animationBox").removeClass('z-index1000000');
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
				
			}
		break;
		case  'manager1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'data' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "data1":
				$('.introjs-helperLayer').one('transitionend',function() {
							setTimeout(function() {
								intro.nextStep();
							},500);
				});
				break;
			case "data2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'cin':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cinStep' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "cinStep1":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "cinStep2":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "cinStep3":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case  'cin1':
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'cinStep11' :
				$('.introjs-helperLayer').one('transitionend',function() {
					typing('.introjs-tooltiptext',"", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "cinStep12":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			case "cinStep13":
				$('.introjs-helperLayer').one('transitionend',function() {
					/*$("#variables").addClass('z-index1000000');*/
						setTimeout(function() {
							intro.nextStep();
						},500)
				});
				break;
			}
		break;
		case 'cout' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "outputt" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<span ct-code-b-yellow>cout</span> is used to" +
							" display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "outputt1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			case "outputt2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			case "outputt3" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'cout1' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output_1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#animationBox").removeClass('z-index1000000');
					typing('.introjs-tooltiptext',"<span ct-code-b-yellow>cout</span> is used " +
							"to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "output_2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			case "output_3" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#animationBox").removeClass('z-index1000000');
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			case "output_4" :
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#animationBox").removeClass('z-index1000000');
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'cout4' :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "output" :
				$('.introjs-helperLayer').one('transitionend', function() {
					typing('.introjs-tooltiptext',"<span ct-code-b-yellow>cout</span> is used " +
							"to display the output in console", 10, "", function() {
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "output1" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			case "output2" :
				$('.introjs-helperLayer').one('transitionend', function() {
					setTimeout(function() {
						intro.nextStep();
					},500);
				});
				break;
			}
			break;
		case 'forLoop':
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'loop1' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('.introjs-nextbutton').show();
					$('.introjs-tooltiptext',"", 10,"",function() {
					});
				});
				break;
			}
			break;
		case 'iValComparision':
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case 'ivc1' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#countCupValue, #animationBox").removeClass('z-index10000000');
					$('.introjs-tooltiptext').append("<span id='condition_Text' class=''>This is the condition part. If the condition evaluates " +
							"to <span class='ct-code-b-yellow'>true</span>, the control enters into the for-loop body.</span>" );
							$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="flipEffect()">Next&rarr;</a>');
				});
				break;
			case 'ivc2' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#countCupValue").removeClass('z-index10000000');
					$('.introjs-tooltiptext').append("<span>After  <span class='ct-code-b-yellow'>update</span>" +
							", control comes back to the  <span class='ct-code-b-yellow'>condition</span> section.</span>" );
							$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="flipEffect()">Next&rarr;</a>');
							
					}); 
				break;
			case 'ivc3' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#countCupValue").removeClass('z-index10000000');
					$('.introjs-tooltiptext').append("<span>After  <span class='ct-code-b-yellow'>update</span>" +
							", control comes back to the  <span class='ct-code-b-yellow'>condition</span> section.</span>" );
							$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="flipEffect()">Next&rarr;</a>');
							
					}); 
				break;
			case 'ivc4' :
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#countCupValue").removeClass('z-index10000000');
					$('.introjs-tooltiptext').append("<span>After  <span class='ct-code-b-yellow'>update</span>" +
							", control comes back to the  <span class='ct-code-b-yellow'>condition</span> section.</span>" );
							$('.introjs-tooltipbuttons').append('<a class="introjs-button user-btn" onclick="flipEffect()">Next&rarr;</a>');
							
					}); 
				break;
				
			}
			break;
			
		case "outputBox" :
			$('.introjs-nextbutton').hide();
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
			case "enterData" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
					$("#outputBody").append(' <span id ="inputNumber" class="opacity00">Enter the manager details  : </span><br>');
					transferEffect("#enterDetails","#inputNumber",function() {
						$('#inputNumber').removeClass('opacity00');
						setTimeout(function () {
								intro.nextStep();
						},1500);
					});
				});
				break;
			case "enterData1" :
				$('.introjs-helperLayer').one("transitionend", function() {
					$('#outputBox').removeClass('opacity00');
					$("#outputBody").append(' <span id ="inputNumber1" class="opacity00">Enter employee name : '
									+ '<input id="inputName1" type="text" maxlength="10" size="10" '+
									'spellcheck="false" class="input-char" disabled/></span><br>');
					transferEffect("#enterText","#inputNumber1",function() {
						$('#inputNumber1').removeClass('opacity00');
						setTimeout(function () {
								intro.nextStep();
						},1500);
					});
				});
				break;
			case "enterVal" :
				$('.introjs-helperLayer').one("transitionend", function() {
					typing(".introjs-tooltiptext", "Please enter any name", 10, "",function() {
						textValidation('#inputName1');
					});
				});
				break;
				case "enterValAction" :
						$("#animationBox").addClass("z-index1000000");
						$(".td-css").addClass("ct-code-b-green");
						$.each($("#inputName1").val().split(""), function(idx, val) {
							$("table tr:nth-child(2) td:eq("+ ( idx + 1) +")").find("span").text(val);
						});
						fromEffectWithTweenMax("#inputName1", ".td-css", function() {
							typing(".introjs-tooltiptext", "The given string is stored in the array." +
									"", 10,"",function() {
								$('.introjs-nextbutton').show();
							});
						});
						
						break;
				case "enterData2" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber2" class="opacity00">Enter age  :'+
								' <input  id="inputAge1" count=1  type="text" maxlength="2" size="3" '+
								'spellcheck="false" class="input-char" /></span><br><br>');
						transferEffect("#enterText1","#inputNumber2",function() {
							$('#inputNumber2').removeClass('opacity00');
							setTimeout(function () {
									intro.nextStep();
								},1500);
						});
					});
					break;
				case "enterVal1" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$("#animationBox").addClass("z-index1000000");
						checking('#inputAge1');
						typing(".introjs-tooltiptext", "Please enter any name", 10, "",function() {
							
						});
					});
				break;
				case "enterData3" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber3" class="opacity00">Enter the manager details  : </span><br>');
						transferEffect("#enterDetails","#inputNumber3",function() {
							$('#inputNumber3').removeClass('opacity00');
							setTimeout(function () {
									intro.nextStep();
							},1500);
						});
					});
					break;
				case "enterData4" :
					$('.introjs-helperLayer').one("transitionend", function() {
						$('#outputBox').removeClass('opacity00');
						$("#outputBody").append(' <span id ="inputNumber4" class="opacity00">Enter employee name : '
										+ '<input id="inputName2" type="text" maxlength="10" size="10" spellcheck="false"'+
										' class="input-char" disabled/></span><br>');
						transferEffect("#enterText","#inputNumber4",function() {
							$('#inputNumber4').removeClass('opacity00');
							setTimeout(function () {
									intro.nextStep();
							},1500);
						});
					});
					break;
				case "enterVal2" :
					$('.introjs-helperLayer').one("transitionend", function() {
						typing(".introjs-tooltiptext", "Please enter any name", 10, "",function() {
							textValidation('#inputName2');
						});
					});
					break;
					case "enterValAction1" :
							$("#animationBox").addClass("z-index1000000");
							$(".td-css1").addClass("ct-code-b-green");
							$.each($("#inputName2").val().split(""), function(idx, val) {
								$("table tr:eq(3) td:eq("+ ( idx + 1) +")").find("span").text(val);
							});
							fromEffectWithTweenMax("#inputName2", ".td-css1", function() {
								typing(".introjs-tooltiptext", "The given string is stored in the array." +
										"", 10,"",function() {
									$('.introjs-nextbutton').show();
								});
							});
							
							break;
					case "enterData5" :
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber5" class="opacity00">Enter age  : '+
									'<input  id="inputAge2" count=2  type="text" maxlength="2" size="3" spellcheck="false" '+
									'class="input-char" /></span><br><br>');
							transferEffect("#enterText1","#inputNumber5",function() {
								$('#inputNumber5').removeClass('opacity00');
								setTimeout(function () {
									intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterVal3" :
						$('.introjs-helperLayer').one("transitionend", function() {
							$("#animationBox").addClass("z-index1000000");
							typing(".introjs-tooltiptext", "Please enter any name", 10, "",function() {
								checking('#inputAge2');
							});
						});
					break;
					case "enterData6" :
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber6" class="opacity00">Enter the manager details  : </span><br>');
							transferEffect("#enterDetails","#inputNumber6",function() {
								$('#inputNumber6').removeClass('opacity00');
								setTimeout(function () {
										intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterData7" :
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber7" class="opacity00">Enter employee name : '
											+ '<input id="inputName3" type="text" maxlength="10" size="10" spellcheck="false"'+
											' class="input-char" disabled/></span><br>');
							transferEffect("#enterText","#inputNumber7",function() {
								$('#inputNumber7').removeClass('opacity00');
								setTimeout(function () {
										intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterVal4" :
						$('.introjs-helperLayer').one("transitionend", function() {
							typing(".introjs-tooltiptext", "Please enter any name", 10, "",function() {
								textValidation('#inputName3');
							});
						});
						break;
					case "enterValAction2" :
						$("#animationBox").addClass("z-index1000000");
						$(".td-css2").addClass("ct-code-b-green");
						$.each($("#inputName3").val().split(""), function(idx, val) {
							$("table tr:eq(5) td:eq("+ ( idx + 1) +")").find("span").text(val);
						});
						fromEffectWithTweenMax("#inputName3", ".td-css2", function() {
							typing(".introjs-tooltiptext", "The given string is stored in the array." +
									"", 10,"",function() {
								$('.introjs-nextbutton').show();
							});
						});
						
						break;
					case "enterData8" :
						$('.introjs-helperLayer').one("transitionend", function() {
							$('#outputBox').removeClass('opacity00');
							$("#outputBody").append(' <span id ="inputNumber8" class="opacity00">Enter age  :'+
									' <input  id="inputAge3" count=3  type="text" maxlength="2" size="3" spellcheck="false"'+
									' class="input-char" /></span><br><br>');
							transferEffect("#enterText1","#inputNumber8",function() {
								$('#inputNumber8').removeClass('opacity00');
								setTimeout(function () {
									intro.nextStep();
								},1500);
							});
						});
						break;
					case "enterVal5" :
						$('.introjs-helperLayer').one("transitionend", function() {
							$("#animationBox").addClass("z-index1000000");
							typing(".introjs-tooltiptext", "Please enter any name", 10, "",function() {
								checking('#inputAge3');
							});
						});
					break;
				}
			break;
			case "restartBtn" :
				intro.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#animationBox').removeClass('z-index1000000');
					$("#restartBtn").removeClass("opacity00");
					typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
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

function textValidation(selector) {
	$(selector).removeAttr('disabled').focus();
	$(selector).on("keydown", function(e){
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if ((e.keyCode < 65 || e.keyCode > 90) || (e.keyCode == 13 || e.keyCode == 9)){
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to ' + max + ' digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e){
		if ($(this).val().length > 1) {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
	});
}
	
function checking(selector) {
	$(selector).removeAttr('disabled').focus();
	$(selector).on("keydown", function(e){
		$('.error-text').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="error-text">Please restrict the maximum length to ' + max + ' digits only.</div>')
			e.preventDefault();
		}
	});
	$(selector).on("keyup", function(e){
		$('.user-btn').remove();
		if ($(this).val().length > 1) {
			$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="storeVal(' + $(this).attr('count') + ')">Next&rarr;</a>');
		}
	});
}

function storeVal(count) {
	$('.user-btn').remove();
	transferEffect("#inputAge" + count, "#borderBox" + count, function() {
		$("#borderBox" + count).append($("#inputAge" + count).val());
		typing(".introjs-tooltiptext", "The given string is stored in the array." +
				"", 10,"",function() {
			$('.introjs-nextbutton').show();
		});
	});
}
function flipEffect() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').append("<br><span id='retnVal' class='position opacity00'>" +
	"<span id='declartion'><span id='i1' class='position'style='display : inline-block; font-weight:bold;'><b>i</span> < 3</b></span>; </span>");
	$('#retnVal').removeClass('opacity00');
	fromEffectWithTweenMax("#iValComparision", "#retnVal", function() {
		retnValChange(1, " ");
			
		
	});
}
function typing(typingId, typingContent,cursorColor, typingInterval, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		typingCallbackFunction();
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
//	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function retnValChange(val, callBackFunction) {
	if (val < 3) {
			$('#retnVal span > #i' + val).effect('highlight', {color: 'yellow'}, 500, function() {
				flipEffectWithTweenMax('#retnVal span > #i' + val, $('#countCupValue').text(), function() {
					console.log(val);
					//retnValChange(val, callBackFunction);
					$('.introjs-tooltiptext').append("<br><span>evaluates to <span class='ct-code-b-yellow'>true</span>.</span>");
					$('.introjs-nextbutton').show();
				});
		});
		
	}
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
function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}