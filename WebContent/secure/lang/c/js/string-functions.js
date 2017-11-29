var typingInterval = 1;
var stringFunctionsReady = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		/* if (e.keyCode == 13) {
			e.preventDefault();
		} */
	});
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
			element :'#preCode',
			intro : '',
			//tooltipClass : 'hide',
		}, {
			element :'#line1',
			intro : '',
		}, {
			element :'#arrayDiv',
			intro : '',
			animateStep : 'arrayZoomingEffect',
			tooltipClass : 'hide',
		},{ 
			element : '#line2',
			intro : '',
		},{ 
			element : '#line3',
			intro : '',
			//tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText1',
			tooltipClass : 'hide',
		},{ 
			element : '#line4',
			intro : '',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'inputText',
			tooltipClass : 'hide',
			position : 'left'
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'tweenmax',
			tooltipClass : 'hide',
		},{ 
			element : '#line5',
			intro : '',
		},{ 
			element : '#functionDiv',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'countingLength'
		}, {
			element : '#line6',
			intro : '',
			//tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText2',
			tooltipClass : 'hide',
		}, {
			element : '#line7',
			intro : '',
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'copyText',
			tooltipClass : 'hide',
		}, {
			element : '#line8',
			intro : '',
			//tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText3',
			tooltipClass : 'hide',
		}, {
			element : '#line9',
			intro : '',
			//tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText4',
			tooltipClass : 'hide',
		}, {
			element : '#line10',
			intro : '',
		}, { 
			element : '#consoleId',
			intro : '',
			animateStep : 'inputTextTwo',
			tooltipClass : 'hide',
			position : 'left'
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'cMemoryAllocation',
			tooltipClass : 'hide',
		}, {
			element : '#line11',
			intro : '',
		}, { 
			element : '#functionDiv',
			intro : '',
			tooltipClass : 'hide',
			animateStep : 'concateString'
		}, {
			element : '#arrayDiv',
			intro : '',
			animateStep : 'concatenation',
			tooltipClass : 'hide',
		}, {
			element : '#line12',
			intro : '',
			//tooltipClass : 'hide',
		},{ 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText5',
			tooltipClass : 'hide',
		}, {
			element : '#line13',
			intro : '',
		}, { 
			element : '#functionDiv',
			intro : '',
			animateStep : 'comparisonStep',
			tooltipClass : 'hide'
		}, {
			element : '#line14',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#line15',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#line16',
			intro : '',
			tooltipClass : 'hide',
		}, { 
			element : '#consoleId',
			intro : '',
			animateStep : 'printText6',
			tooltipClass : 'hide',
		},{
			element : '#end',
			intro : '',
			position : "right"
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	introjs.onbeforechange(function(targetElement) {
		$('.introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton').hide();	
		var elementId = targetElement.id;
		switch (elementId) {
		
		case 'preCode':
			//$("#preCode").css("opacity", 0);
			break;
		case 'line1':
			//$('#indices').addClass("opacity00");
			$('#indices td:nth-child(n+1)').remove();
			$("#aArrayDiv").css("opacity", 0);
			$("#arrayBox1 td:nth-child(n+1)").remove();
			$("#bArrayDiv").css("opacity", 0);
			$("#arrayBox2 td:nth-child(n+1)").remove();
			$("#cArrayDiv").css("opacity", 0);
			$("#arrayBox3 td:nth-child(n+1)").remove();
			break;
		case 'line2':
			
			break;
		case 'line3':
			$('#printText1').addClass("visibility-hidden");
			 break;
		case 'line4':
			$('#inputText').text("");
			break;
		case 'line5':
			
			break;
		case 'line6':
			$("#printText2").addClass("visibility-hidden");
			$("#aArrayDiv").removeClass('z-index9999999');
			break;
		case 'line7':
			$("#arrayBox2 td span:not(:empty)").text('');
			break;
		case 'line8':
			$('#printText3').addClass("visibility-hidden");
			break;
		case 'line9':
			 $('#printText4').addClass("visibility-hidden");
			 break;
		case 'line10':
			 $('#inputTextTwo').text("");
			break;
		case 'line11':
			/*$("#concateId").addClass("opacity00");
			var length = $("#arrayBox2 td span:not(:empty)").text().length - 3; 
			$("#arrayBox1 td:eq(" + length + ")").nextAll().text("") + "\\0" ;*/
			break;
		case 'line12':
			 $('#printText5').addClass("visibility-hidden");
			 break;
		case 'line13':
			$(".user-btn").remove();
			$("#compareId").addClass("opacity00");
			$("#comparison").text("");
			$('#printText6').addClass("visibility-hidden");
			$('#printText6').empty();
			break;
		case 'arrayDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'arrayZoomingEffect':
					$('#indices td:nth-child(n+1)').remove();
					$("#aArrayDiv").css("opacity", 0);
					$("#arrayBox1 td:nth-child(n+1)").remove();
					$("#bArrayDiv").css("opacity", 0);
					$("#arrayBox2 td:nth-child(n+1)").remove();
					$("#cArrayDiv").css("opacity", 0);
					$("#arrayBox3 td:nth-child(n+1)").remove();
				break;
			case 'tweenmax':
				$("#arrayBox1 td span:not(:empty)").text("");
				break;
			case 'copyText':
				$("#arrayBox2 td span:not(:empty)").text('');
				break;
			case 'cMemoryAllocation':
				$("#arrayBox3 td span:not(:empty)").text('');
				break;
			case 'concatenation':
				//$("#arrayBox1 td > span").text("");
				//$("#adding").text("");
				//var length = $("#adding").text().length;
				//$("#arrayBox1 td > span").eq(length).text('');
				//console.log("length : " + length);
				var length = $('[id*=chartdBspan]').not(':empty').length;
				$("#arrayBox1 td:nth-child(n + " + length +") > span").empty();
				$("#arrayBox1 td > span").eq(length - 1).text('\\0');
				break;
			}
			break;
		case 'functionDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'countingLength':
				
				break;
			case 'concateString':
				//$("#arrayBox1 td span").text("");
				break;
			case 'comparisonStep':
				$('#printText6').addClass("visibility-hidden");
				break;
			}
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'printText1':
				$("#printText1").addClass("visibility-hidden");
				break;
			case 'inputText':
				$("#inputText").text("");
				$("#arrayBox1 td span:not(:empty)").text("");
				$(".a-char-class").addClass("opacity00").removeClass("animated zoomIn");
				break;
			case 'printText2':
				//$("#inputTextTwo").text("");
				
				break;
			case 'printText3':
				
				break;
			case 'printText4':
				$("#printText4").addClass("visibility-hidden");
				break;
			case 'inputTextTwo':
				$("#inputTextTwo").text("");
				$("#arrayBox3 td span:not(:empty)").text("");
				$(".c-char-class").addClass("opacity00").removeClass("animated zoomIn");
				break;
			case 'printText5':
				
				break;
			case 'printText6':
				
				break;
			}
			break;
		
			
		case "restart":
			
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
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
		//console.log("step : " + introjs._currentStep);
		switch(elementId) {
		case 'preCode':
			$('.introjs-tooltip').removeClass("hide");
			//$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Let us consider a sample code on <span class='ct-code-b-yellow'>string functions</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
						$(".introjs-nextbutton").show();
					}});
				});
			//});
			break;
		case 'line1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here <span class='ct-code-b-yellow'>3</span> character array variables " +
									"<span class='ct-code-b-yellow'>a</span>, <span class='ct-code-b-yellow'>b</span> " +
									"and <span class='ct-code-b-yellow'>c</span> are declared with size "+
									"<span class='ct-code-b-yellow'>20</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 'line2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here <span class='ct-code-b-yellow'>length</span> is declared as "+
									"<span class='ct-code-b-yellow'>int data type</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-prevbutton, .introjs-nextbutton').show();
				});
			});
			break;
		case 'line3':
		case 'line8':
		case 'line9':
		case 'line12':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "This statement is used to print the string in the console.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
				//setTimeoutFunction();
			});
			break;
		case 'line4':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>scanf()</span> with <span class='ct-code-b-yellow'>%s</span> " +
									"conventional character is used to read a string from the keyboard.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line5':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>strlen()</span> is used to find the length of the given string. " +
									"This function returns only the integer data or numeric data.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line6':
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#aArrayDiv").removeClass('z-index9999999');
				var typingContent = "This statement is used to print the string in the console.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line7':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>strcpy()</span> is used to copy one string to another string.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line10':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>scanf()</span> with <span class='ct-code-b-yellow'>%s</span> "+
									"conventional character is used to read a string from the keyboard.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line11':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>strcat()</span> is used to concatenate two strings " +
									"into one string.<br><br> Here string <span class='ct-code-b-yellow'>c</span> is " +
									"concatenate with string <span class='ct-code-b-yellow'>a</span>, and the result is " +
									"also stored in string <span class='ct-code-b-yellow'>a</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'line13':
			$(".user-btn").remove();
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "<span class='ct-code-b-yellow'>strcmp()</span> is used for comparison of two strings " +
									"and it always returns only the numeric data.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'arrayDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'arrayZoomingEffect':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var typingContent = "The memory created for each array variable.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						for (var i = 0; i < 20; i++) {
							$('#indices').append('<td class="index-box" id="indexA' + i + '">'+ i +'</td>');
							$('#arrayBox1').append('<td class="small-box index-char" id="chartdA' + i + '"><span id="chartdAspan'+ i +'"></span></td>');
							$('#arrayBox2').append('<td class="small-box index-char" id="chartdB' + i + '"><span id="chartdBspan'+ i +'"></span></td>');
							$('#arrayBox3').append('<td class="small-box index-char" id="chartdC' + i + '"><span id="chartdCspan'+ i +'"></span></td>');
						}
						TweenMax.to($("#aArrayDiv"), 1, {opacity: 1, onComplete: function() {
							TweenMax.to($("#bArrayDiv"), 1, {opacity: 1, onComplete: function() {
								TweenMax.to($("#cArrayDiv"), 1, {opacity: 1, onComplete: function() {
									$('.introjs-prevbutton, .introjs-nextbutton').show();
								}});
							}});
						}});
					});
				});
				break;
			case 'tweenmax':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var typingContent = "The given string characters are allocated into memory.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						var string = $("#inputText").text();
						for (var i = 0; i < string.length; i++) {
							$("#chartdAspan" + i).append(string.charAt(i)).addClass("a-char-class opacity00");
						}
						$("#inputText").addClass("circle-css").effect( "highlight", {color:"white"}, 1000, function() {
							$(".a-char-class").removeClass("opacity00");
							$('#inputText').removeClass('circle-css');
							fromEffectWithTweenMax($("#inputText"), $(".a-char-class"), function() {
								$("#chartdAspan" + string.length).append("\\0");
								zoomingEffect($("#chartdAspan" + string.length), function() {
									$("#chartdAspan" + string.length).off();
									$('.introjs-prevbutton, .introjs-nextbutton').show();
								});
							});
						});
					});
				});
				break;
			case 'copyText':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var typingContent = "So the string of <span class='ct-code-b-yellow'>a</span> is copied into "+
										"<span class='ct-code-b-yellow'>b</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							var chars = $("#arrayBox1").text();
							for (var i = 0; i < chars.length-2; i++) {
								$("#chartdBspan" + i).append(chars.charAt(i)).addClass("b-char-class");
							}
							fromEffectWithTweenMax($(".a-char-class"), $(".b-char-class"), function() {
								var arrayBox2Length = $("#arrayBox2").text().length;
								$("#chartdBspan" + arrayBox2Length).append("\\0");
								zoomingEffect($("#chartdBspan" + arrayBox2Length), function() {
									$("#chartdBspan" + arrayBox2Length).off();
									$('.introjs-prevbutton, .introjs-nextbutton').show();
								});
							});
						});
					});
				});
				break;
			case 'cMemoryAllocation':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass("hide");
					var typingContent = "The given string characters are allocated into memory.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						var string = $("#inputTextTwo").text();
						for (var i = 0; i < string.length; i++) {
							$("#chartdCspan" + i).append(string.charAt(i)).addClass("c-char-class opacity00");
						}
						$("#inputTextTwo").addClass("circle-css").effect( "highlight", {color:"white"}, 1000, function() {
							$(".c-char-class").removeClass("opacity00");
							$('#inputTextTwo').removeClass('circle-css');
							fromEffectWithTweenMax($("#inputTextTwo"), $(".c-char-class"), function() {
								var arrayBox3Length = $("#arrayBox3").text().length;
								$("#chartdCspan" + arrayBox3Length).append("\\0");
								zoomingEffect($("#chartdCspan" + arrayBox3Length), function() {
									$("#chartdCspan" + arrayBox3Length).off();
									$('.introjs-prevbutton, .introjs-nextbutton').show();
								});	
							});
						});
					});
				});
				break;
			case 'concatenation':
				$('.introjs-helperLayer').one('transitionend', function() {
						//$(".introjs-tooltip").hide();
					var string = $("#arrayBox1").text();
					var cBoxString = $("#arrayBox3").text();
					$('.introjs-tooltip').removeClass("hide");
					var typingContent = "The resultant concatenated string is stored in <span class='ct-code-b-yellow'>a</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
						//$(".introjs-tooltip").hide();
						for (var i = string.length-2, j = 0; i < (string.length-2) + (cBoxString.length-2), j < cBoxString.length; i++, j++) {
							$("#chartdAspan" + i).addClass("a-char-class");
						}
						$("#adding").addClass("circle-css").effect( "highlight", {color:"white"}, 1000, function() {
							$("#adding").removeClass("circle-css");
							//$("a-char-class").addClass("opacity00");
							var str = $("#adding").text();
							for (var i = 0; i < str.length; i++) {
							  $("#chartdAspan" + i).text(str.charAt(i));
							}
							fromEffectWithTweenMax($("#adding"), $(".a-char-class"), function() {
								if(str.length < 20) {
									$("#chartdAspan" + str.length).append("\\0");
									zoomingEffect($("#chartdAspan" + str.length), function() {
										$("#chartdAspan" + str.length).off();
										$('.introjs-prevbutton, .introjs-nextbutton').show();
									});
								} else {
									$('.introjs-prevbutton, .introjs-nextbutton').show();
								}
							});
						});
					});
					
				});
				break;
			}
			break;
		case 'conditionPart':
			$('.introjs-helperLayer').one('transitionend', function() {
				$(".introjs-nextbutton").show();
			});
			break;
		case 'functionDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'countingLength':
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$(".function-class").addClass("opacity00");
						$("#countLength").text("");
						setTimeout(function () {
							introjs.previousStep();
						}, 500);
					} else {
						$(".function-class").removeClass("opacity00");
						var typingContent = $(".function-class").html();
						typing('.function-class', typingContent, 1, 'white', function() {
							$("#aArrayDiv").addClass('z-index9999999');
							animationEffect(0);
						});
					}
				});
				break;
			case 'concateString':
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "backward") {
						$("#concateId").addClass("opacity00");
						$("#adding").text("");
						//var length = $("#arrayBox2 td:not(:empty)").text().length - 1;
						var length = $('[id*=chartdBspan]').not(':empty').length;
						$("#arrayBox1 td:nth-child(n + " + length +") > span").empty();
						$("#arrayBox1 td > span").eq(length - 1).text('\\0');
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					} else {
						$("#concateId").removeClass("opacity00");
						var aBoxString = $("#arrayBox1").text();
						var aBoxSubString = aBoxString.substring(0, aBoxString.length-2);
						var cBoxString = $("#arrayBox3").text();
						var cBoxSubString = cBoxString.substring(0, cBoxString.length-2);
						var typingContent = $("#concateId").html();
						typing('#concateId', typingContent, 1, 'white', function() {
							$("#adding").append(aBoxSubString + " + " + cBoxSubString);
							flipEffect($("#adding"), aBoxSubString + cBoxSubString, function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 1000);
							});
						});
					}
				});
				break;
			case 'comparisonStep':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#comparison").append("<span id='bBoxCompareId'></span><span id='compareSymbol' class='opacity00'></span>"+
											"<span id='cBoxCompareId'></span>");
					$('.introjs-tooltip').removeClass("hide");
					var typingContent = "The comparison of two strings is dependant on the <span class='ct-code-b-yellow'>alphabets</span> "+
						"and not on the size of the strings.<br>"+
						"<ul><li>If the function <span class='ct-code-b-yellow'>strcmp()</span> returns <span class='ct-code-b-yellow'>0</span>, "+
						"both strings are <span class='ct-code-b-yellow'>equal</span>."+
						"<li>If the function <span class='ct-code-b-yellow'>strcmp()</span> returns <span class='ct-code-b-yellow'>-1</span>, "+
						"string2 is <span class='ct-code-b-yellow'>higher than</span> string1.</li>"+
						"<li>If the function <span class='ct-code-b-yellow'>strcmp()</span> returns <span class='ct-code-b-yellow'>1</span>, "+
						"string1 is <span class='ct-code-b-yellow'>higher than</span> string2.</li></ul>";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						var bBoxString = $("#arrayBox2").text();
						var bBoxSubString = bBoxString.substring(0, bBoxString.length-2);
						var cBoxString = $("#arrayBox3").text();
						var cBoxSubString = cBoxString.substring(0, cBoxString.length-2);
						var n = bBoxSubString.localeCompare(cBoxSubString);
						$("#bBoxCompareId").append(bBoxSubString + " ").addClass("opacity00");
						$("#cBoxCompareId").append(" " + cBoxSubString).addClass("opacity00");
						if(n == 0) {
							$("#compareSymbol").append("=");
							$("#printText6").append("The given two strings are equal");
						}
						else if(n == 1) {
							$("#compareSymbol").append(">");
							$("#printText6").append("The string <span class='ct-code-b-yellow'>" + bBoxSubString + "</span> is higher than the string "+
									"<span class='ct-code-b-yellow'>" + cBoxSubString + "</span>");
						}
						else {
							$("#compareSymbol").append("<");
							$("#printText6").append("The string <span class='ct-code-b-yellow'>" + cBoxSubString + "</span> is higher than the string "+
									"<span class='ct-code-b-yellow'>" + bBoxSubString + "</span>");
						}
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							$("#compareId").removeClass("opacity00");
							var typingContent = $("#compareId").html();
							typing('#compareId', typingContent, 1, 'white', function() {
								TweenMax.to($("#bBoxCompareId"), 1, {opacity: 1, onComplete: function() {
									TweenMax.to($("#cBoxCompareId"), 1, {opacity: 1, onComplete: function() {
										TweenMax.to($("#compareSymbol"), 1, {opacity: 1, onComplete: function() {
											flipEffect($("#comparison"), n, function() {
												$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
												$('.introjs-prevbutton').show();
												$(".user-btn").click(function() {
													$(".user-btn").remove();
													if(n == 0) {
														introjs.goToStep(30);
													}
													else if(n == 1) {
														introjs.goToStep(31);
													}
													else {
														introjs.goToStep(32);
													}
												});
											});
										}});
									}});
								}});
							});
						});
					});
				});
				break;
			}
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'printText1':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText1").removeClass("visibility-hidden");
					var typingContent = $("#printText1").html();
					typing('#printText1', typingContent, 1, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'inputText':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "Enter a string here.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.input-text').attr({contenteditable: 'true', placeholder: 'Enter string'});
						$("#inputText").addClass("blink");
						charAtEnd(document.getElementById('inputText'));
						keyCodeCondition();
						//$(".introjs-nextbutton").show();
					});
				});
				break;
			case 'printText2':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText2").removeClass("visibility-hidden");
					var typingContent = "The length of the string <span class='ct-code-b-yellow'>" + $("#inputText").text() + "</span> is "+
					"<span class='ct-code-b-yellow'>" + $("#countLength").text() + "</span>";
					typing('#printText2', typingContent, 1, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'printText3':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText3").removeClass("visibility-hidden");
					var text = $("#arrayBox2").text();
					var typingContent = "The copied string = <span class='ct-code-b-yellow'>" + text.substring(0, text.length-2) + "</span>";
					typing('#printText3', typingContent, 1, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'printText4':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#printText4").removeClass("visibility-hidden");
					var typingContent = $("#printText4").html();
					typing('#printText4', typingContent, 1, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'inputTextTwo':
				$('.introjs-helperLayer').one('transitionend', function() {
					keyCodeCondition();
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "Enter a string.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.input-text-two').attr({contenteditable: 'true', placeholder: 'Enter string'});
						$("#inputTextTwo").addClass("blink");
						charAtEnd(document.getElementById('inputTextTwo'));
					});
				});
				break;
			case 'printText5':
				$('.introjs-helperLayer').one('transitionend', function() {
					var typingContent = "The concatenated string = <span class='ct-code-b-yellow'>" + $("#adding").text() + "</span>";
					$("#printText5").removeClass("visibility-hidden");
					typing('#printText5', typingContent, 1, 'white', function() {
						setTimeoutFunction();
					});
				});
				break;
			case 'printText6':
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == 'backward') {
						setTimeout(function() {
							introjs.goToStep(28);
						}, 1000);
					} else{
						var typingContent = $("#printText6").html();
						$("#printText6").removeClass("visibility-hidden");
						typing('#printText6', typingContent, 1, 'white', function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 1000);
						});
					}
					
				});
				break;
			}
			break;
		case 'line14':
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == 'backward') {
					setTimeout(function() {
						introjs.goToStep(28);
					}, 1000);
				} else{
					setTimeout(function() {
						introjs.goToStep(33);
					},1000);
				}
				
			});
			break;
		case 'line15':
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == 'backward') {
					setTimeout(function() {
						introjs.goToStep(28);
					}, 1000);
				} else{
					setTimeout(function() {
						introjs.goToStep(33);
					},1000);
				}
			});
			break;
		case 'line16':
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == 'backward') {
					setTimeout(function() {
						introjs.goToStep(28);
					}, 1000);
				} else{
					setTimeout(function() {
						introjs.goToStep(33);
					},1000);
				}
			});
			break;
		case 'end':
			$('.introjs-helperLayer ').one('transitionend', function() {
				var typingContent = "This is the end of the main() function where the program execution ends.";
				typing('.introjs-tooltiptext', typingContent, 1, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content"); /* for chrome */
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function setTimeoutFunction() {
		//$("#printpreLine3").removeClass("opacity00");
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

function charAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}    	   
}

function animationEffect(i) {
	
	var string = $("#inputText").text();
	$("#chartdA" + i).effect( "transfer", { to: $("#indexA" + i), className: "ui-effects-transfer" }, 500 , function() {
		$("#countLength").text(i);
		if (i == string.length) {
			$("#indexA" + string.length).addClass("blinking");
			$("#indexA" + string.length).effect( "highlight", {color:"#0fea85"}, 500, function() {
				TweenMax.to($("#countLength"), 0.1, {opacity: 1, onComplete: function() {
					setTimeout(function() {
						introjs.nextStep();
					},1500);
				}});
			});
		} else {
			$("#indexA" + i).effect( "transfer", { to: $("#chartdA" + (i + 1)), className: "ui-effects-transfer" }, 1000 , function() {
				if ( i < string.length) {
					animationEffect(++i);
				}
			});
      	}
	});
}

function zoomingEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").effect("highlight", {color:"#00FF00"}, 1000).addClass("animated zoomIn").one('animationend', function() {
	//	$(id).effect("highlight", {color:"#00FF00"}, 500, function() {
			$(id).removeClass("animated zoomIn");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	//	});
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 2, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 2, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {css: {top : 1, rotationX : 0,}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function comparisionTweenmax() {
	$("#compareId").removeClass("opacity00");
	var typingContent = $("#compareId").html();
	typing('#compareId', typingContent, 1, 'white', function() {
		TweenMax.to($("#bBoxCompareId"), 1, {opacity: 1, onComplete: function() {
			TweenMax.to($("#cBoxCompareId"), 1, {opacity: 1, onComplete: function() {
				TweenMax.to($("#compareSymbol"), 1, {opacity: 1, onComplete: function() {
					flipEffect($("#comparison"), n, function() {
						if(n == 0) {
							introjs.goToStep(30);
						}
						else if(n == 1) {
							introjs.goToStep(31);
						}
						else {
							introjs.goToStep(32);
						}
					});
				}});
			}});
		}});
	});
}

function keyCodeCondition() {
	$('#inputText, #inputTextTwo').on("keydown", function(e) { // conditions to enter text
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
			return;
		}
		
		/* if ((e.which >= 96 && e.which <= 105) || (e.which >= 48 && e.which <= 57) || $.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
			return;
		} */
		/* if ((e.shiftKey) || (e.keyCode > 90 || e.keyCode < 65)) {
			e.preventDefault();
		} */
		var max = $(this).attr("maxlength");
		if(e.which == 13 || e.which == 222) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			 if(e.which == 8 || e.which == 46){
	   			return true;	
			}
  			e.preventDefault();
	 	}
	});
	$('#inputText, #inputTextTwo').on("keyup", function(e) {
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-prevbutton, .introjs-nextbutton').hide();
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
												"<b>Please enter a string.</b></span>");
		} else {
			$('.introjs-prevbutton, .introjs-nextbutton').show();
		}
	});
}
