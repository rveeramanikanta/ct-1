var typingInterval = 1;
var arr = [];
var usageOfFreeFunctionReady = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	var maxNumberOfInputs = 2;
	var maxLengthOfInput = 2;
	$('.console-input-line').on("keydown", function(e) {
		if (arr.length == maxNumberOfInputs) {
			if (e.keyCode == 32) {
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
	
	$('.console-input-line').on("keyup", function(e) {
		$('.length-error-text').remove();
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
												"Please enter " + maxNumberOfInputs + " numbers and separate each with a space.</span>");
		}
		var givenText = $(this).text();
		var splittedText = givenText.split(" ");
		arr = [];
		
		$.each(splittedText, function(idx, val) {
			if (val != '') {
				arr.push(val);
			}
		});
		arr = arr.map(Function.prototype.call, String.prototype.trim);
		arr = arr.filter(Boolean);
		if (arr.length < maxNumberOfInputs) {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		} else if (arr.length == maxNumberOfInputs && $.isNumeric(arr[1])) {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
		}
		
		$.each(arr, function(idx, val) {
			if (val.length > maxLengthOfInput) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
														"Please limit the number length to " + maxLengthOfInput + ".</span>");
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
			}
		});
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
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
		}, {
			element : '#preCode',
			intro : '',
		}, {
			element : '#firstExLine1',
			intro : '',
		}, {
			element : '#pBox',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#firstExLine2',
			intro : '',
		}, {
			element : '#arrayDiv',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmaxAnimation',
			tooltipClass: 'hide',
		}, {
			element : '#firstExLine3',
			intro : '',
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'freeAction',
			tooltipClass: 'hide',
		}, {
			element : '#preCodeTwo',
			intro : '',
		}, {
			element : '#codeLine1',
			intro : '',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'variableZooming',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine2',
			intro : '',
		}, {
			element : '#heapMemoryBox1',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'pBoxTweenmax',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine3',
			intro : '',
		}, {
			element : '#heapMemoryBox2',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'qBoxTweenmax',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine4',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'printText',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine5',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'inputValue',
			tooltipClass: 'hide',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'scaningValues',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine6',
			intro : '',
			tooltipClass: 'hide',
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'outputPrint',
			tooltipClass: 'hide',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'valueSum',
		}, {
			element : '#consoleId',
			intro : '',
			animateStep : 'sumPrint',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine7',
			intro : '',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'pHeapRemove',
			tooltipClass: 'hide',
		}, {
			element : '#codeLine8',
			intro : '',
		}, {
			element : '#secondExMemory',
			intro : '',
			animateStep : 'qHeapRemove',
			tooltipClass: 'hide',
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case 'preCode':
			introjs.refresh();
			break;
		case 'firstExLine1':
			$("#firstExDiv, #pBox").addClass("opacity00");
			break;
		case 'pBox':
			$("#firstExDiv, #pBox").addClass("opacity00");
			break;
		case 'firstExLine2':
			$('#firstMemoryAllocation').addClass('opacity00');
			break;
		case 'arrayDiv':
			$('#firstMemoryAllocation').addClass('opacity00');
			$('#pValue').addClass('opacity00');
			$('#svg1').remove();
			break;
		case 'firstExLine3':
			$('#pValue').text("1924");
			$("#svg1, #firstMemoryAllocation").removeAttr('style');
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxAnimation':
				$('#pValue').addClass('opacity00');
				$('#svg1').remove();
				break;
			case 'freeAction':
				$('#pValue').text("1924");
				$("#svg1, #firstMemoryAllocation").removeAttr('style');
				$("#secondDivExample, #preCodeTwo").addClass("opacity00");
				break;
			}
			break;
		case 'preCodeTwo':
			introjs.refresh();
			$("#secondDivExample, #preCodeTwo").removeClass("opacity00");
			break;
		case 'codeLine1':
			$("#secondExMemory, #consoleId, #pBox2, #qBox").addClass("opacity00");
			break;
		case 'secondExMemory':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'variableZooming':
				$("#secondExMemory, #consoleId, #pBox2, #qBox").addClass("opacity00");
				break;
			case 'pBoxTweenmax':
				$('#pSecondExValue').addClass('opacity00');
				$('#svg2').remove();
				break;
			case 'qBoxTweenmax':
				$('#qValue').addClass('opacity00');
				$('#svg3').remove();
				break;
			case 'scaningValues':
				break;
			case 'valueSum':
				break;
			case 'pHeapRemove':
				$('#pSecondExValue').text("1038");
				$('#svg2, #dynamicDiv1').removeAttr('style');
				break;
			case 'qHeapRemove':
				$('#qValue').text("1992");
				$('#svg3, #dynamicDiv2').removeAttr('style');
				break;
			}
			break;

		case 'codeLine2':
			$('#heapMemoryBox1').addClass('opacity00');
			break;
		case 'heapMemoryBox1':
			$('#heapMemoryBox1, #pSecondExValue').addClass('opacity00');
			$('#svg2').remove();
			break;
		case 'codeLine3':
			$('#heapMemoryBox2').addClass('opacity00');
			break;
		case 'heapMemoryBox2':
			$('#heapMemoryBox2').addClass('opacity00');
			$('#qValue').addClass('opacity00');
			$('#svg3').remove();
			break;
		case 'codeLine4':
			break;
		case 'codeLine5':
			$('.console-input-line').removeAttr('contenteditable placeholder').empty();
			break;
		case 'codeLine7':
			$('#pSecondExValue').text("1038");
			$('#svg2, #dynamicDiv1').removeAttr('style');
			break;
		case 'codeLine8':
			$('#qValue').text("1992");
			$('#svg3, #dynamicDiv2').removeAttr('style');
			break;
		}
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		
		
		// ********************** start ************back button logic
		
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
		
		// ********************** end ************back button logic
		
		
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
							$('#nextButton').fadeTo(500, 1, function() {
								$('.user-btn').click(function() {
									$('.user-btn').remove();
									introjs.nextStep();
								});
							});
						});
					});
				});
			});	
			break;
		case 'preCode':
			introjs.refresh();
			$("#infoDiv").addClass("z-index9999999");
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#exampleOne, #preCode").removeClass("opacity00");
				var typingContent = "Let us consider an example.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
		case 'firstExLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "A pointer variable <span class='ct-code-b-yellow'>p</span> is declared of datatype " +
									"<span class='ct-code-b-yellow'>int</span>.<br><br> " +
									"An int pointer variable, should always point to an <span class='ct-code-b-yellow'>int</span> value."; 
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();	
				});
			});
			break;
		case 'pBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#firstExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one('transitionend', function() {
				boxAnimation("#pBox", function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "The pointer variable <span class='ct-code-b-yellow'>p</span> is of type" +
										" <span class='ct-code-b-yellow'>int</span> and it occupies <span class='ct-code-b-yellow'>2 bytes</span> in " +
										"memory with some address.<br><br>Let us assume this address to be <span class='ct-code-b-yellow'>1258</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'firstExLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent =	"<ul><li> A <span class='ct-code-b-yellow'>malloc()</span> function returns the pointer to the " + 
							"<span class='ct-code-b-yellow'>base address</span> of the <span class='ct-code-b-yellow'>heap memory</span> allocated." + 
							"</li><li>A <span class='ct-code-b-yellow'>malloc()</span> function always returns a <span class='ct-code-b-yellow'>" +
							"void</span> pointer.<br/> So a typecast is used to convert to the datatype of the pointer.</li></ul>";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'arrayDiv':
			$('.introjs-helperLayer').one('transitionend', function() {
				boxAnimation("#firstMemoryAllocation", function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent =  "Each location occupies <span class='ct-code-b-yellow'>2 bytes</span> of memory, " + 
										"a total of <span class='ct-code-b-yellow'>10 bytes</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'firstExLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-code-b-yellow'>free()</span> function is used to free the allocated memory by the " +
				"<span class='ct-code-b-yellow'>malloc(), calloc() and realloc()</span> functions.<br><br/> This function returns a " +
				"<span class='ct-code-b-yellow'>NULL</span> value, that is stored in the pointer variable <span class='ct-code-b-yellow'>p</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmaxAnimation':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "Here, the base address is stored in pointer variable <span class='ct-code-b-yellow'>p</span>. <br>" +
					"i.e. <span class='ct-code-b-yellow'>1924</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation("#firstAddressId", "#pValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									var typingContent ="As the base address of the allocated <span class='ct-code-b-yellow'>heap memory</span> " +
														"is stored in <span class='ct-code-b-yellow'>p</span>, it can be accessed using pointer " +
														"<span class='ct-code-b-yellow'>p</span> <br>i.e., value stored from " +
														"<span class='ct-code-b-yellow'>1924</span> location.";
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										svgAppend($('#firstExDiv'), 'svg1');
										svgMarkerAppend($('#svg1'), 'marker1');
										svgAnimatingLine($('#firstExDiv'), $('#memoryBox1'), $('#trBox1'), $('#svg1'), 'svgLine1', 'marker1', function() {	
											$(".introjs-nextbutton, .introjs-prevbutton").show();
										});	
									});
								});
							});
						});
					});
				});
				break;
			case 'freeAction':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "Here the heap memory is freed and it returns a <span class='ct-code-b-yellow'>NULL</span> value.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							bounceFromEffectWithTimelineMax("#pValue", function() {
								$("#firstMemoryAllocation").effect( "highlight", {color:"red"}, 1000, function() {
									TweenMax.to($("#svg1, #firstMemoryAllocation"), 1, {opacity: 0, onComplete: function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									}});
								});
							});
						});
					});
				});
				break;
			}
			break;
		case 'preCodeTwo':
			introjs.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#secondDivExample, #preCodeTwo").removeClass("opacity00");
				var typingContent = "Let us consider another example.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'codeLine1':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The pointer variables <span class='ct-code-b-yellow'>p, q</span> are declared of datatype " +
				"<span class='ct-code-b-yellow'>int</span>. " +
				"<br><br>An int pointer variable, should always point to an <span class='ct-code-b-yellow'>int</span> value."; 
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'secondExMemory':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'variableZooming':
				$('.introjs-fixParent').removeClass('introjs-fixParent');
				$("#secondExMemory, #consoleId").removeClass("opacity00");
				$('.introjs-helperLayer').one('transitionend', function() {
					boxAnimation("#pBox2");
					boxAnimation("#qBox", function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = "The pointer variables <span class='ct-code-b-yellow'>p, q</span> are of type " +
											"<span class='ct-code-b-yellow'>int</span> " +
											"and they occupy <span class='ct-code-b-yellow'>2 bytes</span> in memory with some address. " +
											"<br><br>Let us assume these addresses to be <span class='ct-code-b-yellow'>2058, 2085</span>.";
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				});
				break;
			case 'pBoxTweenmax':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "The base address of the dynamically allocated memory is stored into the pointer variable " +
										"<span class='ct-code-b-yellow'>p</span>. <br>" +
					"i.e. <span class='ct-code-b-yellow'>1038</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation("#pHeapAddress", "#pSecondExValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									var typingContent = "As the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>" +
														"p</span> has the <span class='ct-code-b-yellow'>base address</span>, " +
														"it can access the value of variable <span class='ct-code-b-yellow'>p</span>.";
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										svgAppend($('#secondExMemory'), 'svg2');
										svgMarkerAppend($('#svg2'), 'marker2');
										svgAnimatingLine($('#secondExMemory'), $('#memoryBox2'), $('#memoryBox3'), $('#svg2'),
												'svgLine2', 'marker2', function() {	
											$(".introjs-nextbutton, .introjs-prevbutton").show();
										});
									});
								});
							});
						});
					});
				});
				break;
			case 'qBoxTweenmax':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent ="The base address of the dynamically allocated memory is stored into the pointer variable " +
										"<span class='ct-code-b-yellow'>q</span>. <br>i.e. <span class='ct-code-b-yellow'>1992</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							tweenmaxAnimation("#qHeapAddress", "#qValue", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
								$(".user-btn").click(function() {
									$(".user-btn").remove();
									var typingContent ="As the <span class='ct-code-b-yellow'>pointer</span> variable " +
									"<span class='ct-code-b-yellow'>q</span> has the <span class='ct-code-b-yellow'>base address</span>, " +
									"it can access the value of variable <span class='ct-code-b-yellow'>q</span>.";
									typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
										svgAppend($('#secondExMemory'), 'svg3');
										svgMarkerAppend($('#svg3'), 'marker3');
										svgAnimatingLine($('#secondExMemory'), $('#memoryBox4'), $('#memoryBox5'), 
												$('#svg3'), 'svgLine3', 'marker3', function() {	
											$(".introjs-nextbutton, .introjs-prevbutton").show();
										});
									});
								});
							});
						});
					});
				});
				break;
			case 'scaningValues':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					$('.heap-value').empty();
					var typingContent = "The values entered by the user are stored in the <span class='ct-code-b-yellow'>dynamically allocated memory</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('#consoleInputLine').removeAttr('contenteditable placeholder');
						var splittedText = $('#consoleInputLine').text().split(" ");
						$('#consoleInputLine').html('');
						$.each(splittedText, function(idx, val) {
							if (val != '') {
								$('#consoleInputLine').append('<span class="scanfValue">' + val + '</span> ');
							} else {
								$('#consoleInputLine').append(' ');
							}
						});
						$('.scanfValue').addClass('output-value-circle circle-css');
						TweenMax.fromTo($('.scanfValue'), 1, {backgroundColor: '#FFFFFF'}, {backgroundColor: 'inherit', onComplete: function() {
							$('.scanfValue').removeClass('output-value-circle circle-css');
							$.each(arr, function(idx, val) {
								$('.heap-value').eq(idx).text(parseInt(val));
							});
							TweenMax.to($('.heap-value'), 1, {opacity: 1, onComplete: function() {
								$(".introjs-nextbutton, .introjs-prevbutton").show();
							}});
						}});
					});
				});
				break;
			case 'valueSum':
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#sumCondition").addClass("z-index9999999");
					var typingContent = "<span class='ct-code-b-yellow'>*p</span> & <span class='ct-code-b-yellow'>*q</span> " +
					"return the values at that address locations.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
				break;
			case 'pHeapRemove':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "When a call to the <span class='ct-code-b-yellow'>free()</span> function is made, it " + 
									"frees the dynamic memory allocated by the <span class='ct-code-b-yellow'>malloc()</span> function and returns a " +
									"<span class='ct-code-b-yellow'>NULL</span> value.<br/><br/>This NULL value is stored in <span class='ct-code-b-yellow'>p</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							bounceFromEffectWithTimelineMax("#pSecondExValue", function() {
								$("#dynamicDiv1").effect( "highlight", {color:"red"}, 1000, function() {
									TweenMax.to($("#svg2, #dynamicDiv1"), 1, {opacity: 0, onComplete: function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									}});
								});
							});
						});
					});
				});
				break;
			case 'qHeapRemove':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "When a call to the <span class='ct-code-b-yellow'>free()</span> function is made, it " + 
									"frees the dynamic memory allocated by the <span class='ct-code-b-yellow'>malloc()</span> function and returns a " +
									"<span class='ct-code-b-yellow'>NULL</span> value.<br><br>This NULL value is stored in <span class='ct-code-b-yellow'>q</span>";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$(".user-btn").click(function() {
							$(".user-btn").remove();
							bounceFromEffectWithTimelineMax("#qValue", function() {
									$("#dynamicDiv2").addClass("blinking", function() {
									TweenMax.to($("#svg3, #dynamicDiv2"), 1, {opacity: 0, onComplete: function() {
										$(".introjs-nextbutton, .introjs-prevbutton").show();
									}});
								});
							});
						});
					});
				});
				break;
			}
			break;

		case 'codeLine2':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here, the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> is " +
							"assigned with the return value of the <span class='ct-code-b-yellow'>malloc()</span> function.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'heapMemoryBox1':
			$('.introjs-helperLayer').one('transitionend', function() {
				boxAnimation("#heapMemoryBox1", function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = "This occupies <span class='ct-code-b-yellow'>2 bytes</span> in memory as it is an " +
										"<span class='ct-code-b-yellow'>int data type</span>.<br><br/> Let us assume the address to be " +
										"<span class='ct-code-b-yellow'>1038</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				}); 
			});
			break;
		case 'codeLine3':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "Here, the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>q</span> is " +
									"assigned with the return value of the <span class='ct-code-b-yellow'>malloc()</span> function.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {	
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'heapMemoryBox2':
			$('.introjs-helperLayer').one('transitionend', function() {
				boxAnimation("#heapMemoryBox2", function() {
					$('.introjs-tooltip').removeClass('hide');
					var typingContent ="This occupies <span class='ct-code-b-yellow'>2 bytes</span> of memory as it is an " +
										"<span class='ct-code-b-yellow'>int data type</span>.<br/><br/> Let us assume the address to be" +
										" <span class='ct-code-b-yellow'>1992</span>.";
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
			break;
		case 'codeLine4':
		case 'codeLine5':
		case 'codeLine6':
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._direction == "forward") {
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				} else {
					setTimeout(function () {
						introjs.previousStep();
					}, 1000);
				}
				
			});
			break;
		case 'codeLine7':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-code-b-yellow'>free()</span> function is used to free the allocated memory at the " +
				"address of pointer variable <span class='ct-code-b-yellow'>p</span>.<br>i.e., <span class='ct-code-b-yellow'>1038</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'codeLine8':
			$('.introjs-helperLayer').one('transitionend', function() {
				var typingContent = "The <span class='ct-code-b-yellow'>free()</span> function is used to free the allocated memory at the " +
				"address of pointer variable <span class='ct-code-b-yellow'>q</span>.<br>i.e., <span class='ct-code-b-yellow'>1992</span>.";
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
			break;
		case 'consoleId':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'printText':
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "forward") {
						$("#printText1").removeClass("visibility-hidden");
						var typingContent = $("#printText1").html();
						typing('#printText1', typingContent, '30', 'white', function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					} else {
						$("#printText1").addClass("visibility-hidden");
						introjs.previousStep();
					}
				});
				break;
			case 'inputValue':
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.console-input-line').empty();
					$('.introjs-tooltip').removeClass('hide');
					var typingContent = 'Here enter <span class="ct-code-b-yellow">2</span> values and separate each with a space.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.console-input-line').attr({contenteditable: 'true', placeholder: 'Enter 2 values'});
						charAtEnd(document.getElementById('consoleInputLine'));
					});
				});
				break;
			case 'outputPrint':
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "forward") {
						$("#printText2").removeClass("visibility-hidden");
						var typingContent = $("#printText2").html();
						typing('#printText2', typingContent, '30', 'white', function() {
							setTimeout(function () {
								introjs.nextStep();
							}, 1000);
						});
					} else {
						$("#printText2").addClass("visibility-hidden");
						introjs.previousStep();
					}
					
				});
				break;
			case 'sumPrint':
				$("#sumCondition").removeClass("z-index9999999");
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._direction == "forward") {
						$("#result").append(parseInt($("#pHeapValue").text()) + parseInt($("#qHeapValue").text()));
						setTimeout(function () {
							introjs.nextStep();
						}, 1000);
					} else {
						$("#result").empty();
						setTimeout(function () {
							introjs.previousStep();
						}, 1000);
					}
				});
				break;
			}
			break;
		/*case 'sumCondition':
			$('.introjs-helperLayer').one('transitionend', function() {
				setTimeout(function () {
					introjs.nextStep();
				}, 1000);
			});
			break;*/
		case 'restart':
			$(".introjs-tooltip").css({"min-width" : "110px"});
			$('.introjs-helperLayer').one("transitionend", function() {
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

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxAnimation(selector1, selector2, callBackFunction) {
	var l3 = $(selector1).offset();
	var l4 = $(selector2).offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$(selector1).effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$(selector2).removeClass("opacity00");
		TweenMax.from(selector2, 1, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	});
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

function bounceFromEffectWithTimelineMax(selector2, callBackFunction) {
	var timelineMax = new TimelineMax();
	var l2 = $(selector2).offset();
	$(selector2).parent().append('<span id="temp" style="position: absolute;"></span>');
	$('#temp').offset({top: l2.top, left: l2.left}).text($(selector2).text());
	$(selector2).text("NULL");
	timelineMax.staggerFrom(selector2, 1, {ease:  Bounce.easeOut, opacity:1, top:-45, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}).to('#temp', 1, { ease: Sine.easeOut, top: "-=100", opacity: 0, onComplete: function() {
		$('#temp').remove();
	}}, "-=2");
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
	}});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgMarkerId + '")';
	$(svgId).append(line);
}

function svgAnimatingLine(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}