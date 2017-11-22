var typingSpeed = 1;
var intro;
function scanfUsageReady() {
	$( "span[id^=exampleTwo]").addClass('opacity00');
	
	 $("#restart").click(function() {
		 window.location.search =  "?restart = 1";
		});
	$("#inputChar").on("keyup", function(e) {
		$('.introjs-tooltiptext').removeClass('error-msg');
		if ($('#inputChar').val() == "") {
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$('.introjs-tooltiptext').addClass('error-msg');
		} else {
			$('.introjs-nextbutton,.introjs-prevbutton').show();
		}
	});
	
	$("input").attr('disabled','disabled');
	$("#typingDiv > li").addClass("opacity00");
	$('table td:even').css('background-color', 'LightGray');
	$('table tr:even').css('background-color', 'LightBlue');
	$('table tr:odd td').css('background-color', 'LightYellow'); 
	$('table th').css('font-family','monospace');
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#typingDiv",
			intro : "",
			tooltipClass : "hide" 
		}, 	{
			element : "#typingDiv",
			intro : "",
			position : "bottom",
			
		}, 	{
			element : "#myTable",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},  {
			element : "#exampleOneChar",
			intro : "",
			position : "right"
		},  {
			element : "#charBox",
			intro : "",
			tooltipClass : "hide",
			action : "charBoxReveal"
		},  {
			element : "#firstPrintf",
			intro : "",
			position : "right",
		},  {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide",
			action : "firstPrintfText"
		},  {
			element : "#firstScanf",
			intro : "",
			position : "right"
		},  {
			element : "#consoleId",
			intro : "",
			position : "left",
			action : "firstPrintfValue",
			tooltipClass :"hide"
		},  {
			element : "#charBox",
			intro : "",
			tooltipClass : "hide",
			action : "charBoxStroring"
		}, {
			element : "#exampleTwoInt",
			intro : "",
			position : "right"
		},  {
			element : "#intBox",
			intro : "",
			tooltipClass : "hide"
		},  {
			element : "#exampleTwoFloat",
			intro : "",
			position : "right"
		},  {
			element : "#floatBox",
			intro : "",
			tooltipClass : "hide"
		},  {
			element : "#exampleTwoSecondPrintf",
			intro : "",
			position : "top"
		},  {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide",
			action : "exampleTwoSecondPrintfText",
			position: "top"
		},  {
			element : "#exampleTwoSecondScanf",
			intro : "",
			position : "top"
		},  {
			element : "#consoleId",
			intro : "",
			position : "left",
			action : "exampleTwoSecondPrintfValue",
			tooltipClass : "hide"
		},  {
			element : "#memoryDiv1",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},  {
			element : "#restart",
			intro : "",
			position : "left"
		}
		]});
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "typingDiv":
				$('#myTable').addClass('opacity00');
			break;
			case "myTable":
				$("#codeAnimation, #mainMemoryDiv").addClass("opacity00");
			break;
			case "exampleOneChar":
				$("#mainMemoryDiv").removeClass("opacity00");
				$("#c, #cdiv, #consoleId").addClass("opacity00");
			break;
			case "charBox":
				var action = intro._introItems[intro._currentStep].action;
				switch(action) {
					case "charBoxStroring":
						$("#2ndcode").addClass("opacity00");
					break;
				}
			break;
			case "firstPrintf":
				$("#input, #outputbody").addClass("opacity00");
				$('#consoleId, #outputbody').removeClass('opacity00');
			break;
			case "exampleTwoSecondPrintf":
				$("#intfloat").addClass("opacity00");
			break;
			case "consoleId":
				var action = intro._introItems[intro._currentStep].action;
				switch(action) {
					case "firstPrintfValue":
						$("#inputChar").removeAttr('disabled').val("");
						$("#xValue").empty();
					break;
					case "exampleTwoSecondPrintfValue":
						$("#secondInput").addClass("blinking-orange").removeAttr('disabled').focus();
						  $("#inputVal").removeClass("opacity00");
						  $("#secondInput").val('');
					break;
						
					case "exampleTwoSecondPrintfText":
						$("#intfloat").addClass("opacity00");
					break;
				}
			break;
			case "firstScanf":
				$("#inputChar").val('');
			break;
			case "exampleTwoSecondScanf":
		       $("#inputVal").addClass("opacity00");
			break;
			case "exampleTwoInt":
				$("#i, #idiv").addClass("opacity00");
			break;
			case "exampleTwoFloat":
				$("#f, #fdiv").addClass("opacity00");
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
					if (intro._currentStep != 0 && intro._currentStep != 1) {
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
			case "typingDiv":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				setTimeout(function(){
				var text = "<b class ='ct-code-b-yellow'>'control_string'</b> represents the format characters, which are used to read input values of different data types.";
		 		typing(".introjs-tooltiptext", text, function() {
		 			$('.introjs-nextbutton').show();
		 		});
				},500);
			};
			break;
			case "myTable":
				$('.introjs-nextbutton').hide();
				$('#myTable').removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass("hide");
					var text ="The different format characters use to read different data types are given in the following table.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "exampleOneChar":
				$('.introjs-nextbutton').hide();
				$("#exampleOneChar").removeClass("opacity00");
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#codeAnimation, #mainMemoryDiv').removeClass('opacity00');
					var text ="A variable <b class='ct-code-b-yellow'>ch</b> of type character is being declared.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
						
					});
				});
			break;
			case "charBox":
				$('.introjs-nextbutton').hide();
				$("#codeAnimation").removeClass("opacity00");
				$('.introjs-helperLayer ').one('transitionend', function() {
					var action = intro._introItems[intro._currentStep].action;
					switch(action) {
					case "charBoxReveal":
					
							setTimeout(function() {
								if (intro._direction=="forward") {
									$('#charBox').removeClass('opacity00');
									$("#c").removeClass("opacity00");
									$("#cdiv").removeClass("opacity00");
									$('#charBox').addClass('animated zoomIn').one('animationend', function() {
										$('#charBox').removeClass('animated zoomIn')
										intro.nextStep();
									});
								} else {
									intro.previousStep();
								}
							}, 500)
							
						
						break;
					case "charBoxStroring":
					
							setTimeout(function() {
								if (intro._direction=="forward") {
									$("input").attr('disabled','disabled');
									$("#2ndcode").removeClass("opacity00");
									storingElement("#xValue","#inputChar",function() {
										
										intro.nextStep();
									});
								} else {
									intro.previousStep();
								}
							}, 500)
						
						
						break;
					}
				});
			break;
			
			case "intBox":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
						setTimeout(function() {
							if (intro._direction=="forward") {
								$('#intBox').removeClass('opacity00');
								$("#i").removeClass("opacity00");
								$("#idiv").removeClass("opacity00");
								$('#intBox').addClass('animated zoomIn').one('animationend', function() {
									$('#intBox').removeClass('animated zoomIn');
									intro.nextStep()
								});
							} else {
								intro.previousStep()
							}
						}, 500)
				
				});
			break;
			
			
			case "floatBox":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
						setTimeout(function() {
							if (intro._direction=="forward") {
								$('#floatBox').removeClass('opacity00');
								$("#f").removeClass("opacity00");
								$("#fdiv").removeClass("opacity00");
								$('#floatBox').addClass('animated zoomIn').one('animationend', function() {
									$('#floatBox').removeClass('animated zoomIn')
									intro.nextStep()
								});
							} else {
								intro.previousStep()
							}
						}, 500)
					
				});
			break;
			
			case "firstPrintf":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					
					//$(".introjs-tooltip").removeClass("hide");
					var text ="The <b class='ct-code-b-yellow'>printf()</b> function prints the text to the console/standard output.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			break;
			
			case "exampleTwoSecondPrintf":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text ="The <b class='ct-code-b-yellow'>printf()</b> function prints the text to the console/standard output.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			break;
			
			case "consoleId":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var action = intro._introItems[intro._currentStep].action;
					switch(action) {
					case "firstPrintfText":
								setTimeout(function() {
									if (intro._direction=="forward") {
										$("#firstPrintf").addClass("z-index").effect("highlight", {color: 'yellow'}, 500, function() {
											$('#firstPrintf').effect( "transfer", { to: $('.output-console-body > div [maxlength="1"]').siblings(), className:"ui-effects-transfer" }, 1500, function() {
												$('#firstPrintf').removeClass('z-index');
												$('.output-console-body > div [maxlength="1"]').siblings().removeClass('opacity00');
											setTimeout(function() {
												intro.nextStep()
											}, 500);
											});
										});    
									} else {
										intro.previousStep()
									}
								}, 500);
						
						break;
						
						
					case "firstPrintfValue":
						$(".introjs-tooltip").css("min-width", "200px");
						$("#inputChar").removeAttr('disabled');
						$("#inputChar").val("").focus();
						$(".introjs-tooltip").removeClass("hide");
						
						var text ="Enter a character.";
						typing(".introjs-tooltiptext", text, function() {
							
							
							
						});
						break;
						
					case "exampleTwoSecondPrintfValue":
						$(".introjs-tooltip").css("min-width", "400px");
						$(".introjs-tooltip").removeClass("hide");
						var text ="Enter an integer and a float value each separated by a <b class='ct-code-b-yellow'>space</b>.<br/><br/>For example,"
						+" if your integer is <b class='ct-code-b-yellow'>24</b> and the float value is" 
						+" <b class='ct-code-b-yellow'>3.14</b> respectively enter them as <b class='ct-code-b-yellow'>24 3.14</b>";
						typing(".introjs-tooltiptext", text, function() {
							arr = [];
							$("#secondInput").addClass("blinking-orange").removeAttr('disabled').focus();
							//$("#secondInput").removeAttr('disabled');
							//$("#secondInput").focus();
							$('#secondInput').on("keydown", function(e) {
								if (arr.length == 2 || arr.length == 0) {
									if (e.keyCode == 32) {
										e.preventDefault();
									}
								}
								
							});
								
							$('#secondInput').on("keyup", function(e) {
								$('.length-error-text').remove();
								if ($(this).val() == "") {
									$(".introjs-nextbutton").hide();
									$(".introjs-prevbutton").hide();
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please enter an integer and a float value each separated by a space.</span>");
								} 
								var givenText = $(this).val();
								var splittedText = givenText.split(" ");
								arr = [];
								
								$.each(splittedText, function(idx, val) {
									if (val != '') {
										arr.push(val);
									}
								});
								if (arr.length == 2) {
									var a0 = $.isNumeric(arr[0]);
									var a1 = $.isNumeric(arr[1]);
									var dot = arr[1].indexOf(".") !== -1;
									var dot1 = arr[0].indexOf(".") == -1;
									if (a0 && a1 && dot && dot1) {
									    $(".introjs-nextbutton,.introjs-prevbutton").show();
									  } else {
									    $(".introjs-nextbutton,.introjs-prevbutton").hide();
									    $('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'> "
												+"<br/> Please follow the above format.</span>");
									  }
								
								} else {
									$(".introjs-nextbutton,.introjs-prevbutton").hide();
									
								}
							});
						});
						break;
						
					case "exampleTwoSecondPrintfText":
						$("#exampleTwoSecondPrintf").addClass("z-index").effect("highlight", {color: 'yellow'}, 500, function() {
						$('#exampleTwoSecondPrintf').effect( "transfer", { to: $('.output-console-body > :nth-child(2) > span'), className:"ui-effects-transfer" }, 1500, function() {
						$('#exampleTwoSecondPrintf').removeClass('z-index');
						$('.output-console-body > :nth-child(2) > span').removeClass('opacity00');
						//$("#intfloat").removeClass("opacity00");
						setTimeout(function() {
							if (intro._direction=="forward") {
									intro.nextStep()
							} else {
								intro.previousStep()
							}
						}, 500);
						});
						});
						
						   
						break;
					}
				});
			break;
			
			case "firstScanf":
				$(".introjs-tooltip").css("min-width", "400px");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text ='The <b class="ct-code-b-yellow">scanf()</b> function uses the '
					+'<b class="ct-code-b-yellow">%c</b> character to read a character from the standard input and store it into the '
					+'character variable <b class="ct-code-b-yellow">ch</b>.<br/><br/> The memory location of variable '
					+'<b class="ct-code-b-yellow">ch</b> is accessed using <b class="ct-code-b-yellow">&ch</b>.';
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			break;
			
			case "exampleTwoSecondScanf":
				$(".introjs-tooltip").css("min-width", "400px");
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-nextbutton').hide();
					var text ='The <b class="ct-code-b-yellow">scanf()</b> function uses <b class="ct-code-b-yellow">%d, %f</b>'
								+' characteres to read an integer and a float value respectively.'
								+'<br><br> <b class="ct-code-b-yellow">&i, &f</b> refer to the memory locations of the '
								+' variables <b class="ct-code-b-yellow">i</b> and '
								+'<b class="ct-code-b-yellow">f</b>. Hence the values read from standard input'
								+' will be stored in the respective memory locations.';
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			break;
			
			case "exampleTwoInt":
				$('.introjs-nextbutton').hide();
				
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("span[id^=exampleTwo]").removeClass('opacity00');
				
					var text ="A variable <b class='ct-code-b-yellow'>i</b> of type integer is being declared.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			break;
			
			case "exampleTwoFloat":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="A variable <b class='ct-code-b-yellow'>f</b> of type float is being declared.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					});
				});
			break;
			
			
			case "restart":
				$(".introjs-tooltip").css("min-width", "200px");
				$('.introjs-nextbutton').hide();
				$('#restart').removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
			 		typing(".introjs-tooltiptext", text, function() {
			 		});
				});
			break;
			
			case "memoryDiv1":
				
				$('.introjs-nextbutton').hide();
				var text = $('#secondInput').val();
				var i = 0;
				$('#inputVal').empty();
				
				

				var intIndexOfMatch = text.indexOf("  ");

				while (intIndexOfMatch != -1){
				  text = text.replace( "  ", " " )
				  intIndexOfMatch = text.indexOf( "  " );
				}
				
				
				
				$.each(text.split(' '), function (index, val) {
					$("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
					if(i == 1) {
						  $("#space1").remove();
					  }
						i++ ;
					});
				
				var dotPos = $('#val1').text().indexOf(".");
				if (dotPos == (($('#val1').text().length) - 1)) {
					$('#val1').text($('#val1').text()+"0");
				} else if (dotPos == 0){
					$('#val1').text("0"+$('#val1').text());
				}
				
				
				
				$('.introjs-helperLayer ').one('transitionend', function() {
				 	storingElement1("#xValue2","#val0",function() {});
					storingElement1("#xValue3","#val1",function() {
						intro.nextStep();
					});
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	TweenMax.to($('#typingDiv > li').eq(0), 0.7, {opacity: 1, onComplete: function() {
		TweenMax.to($('#typingDiv > li').eq(1), 0.7, {opacity: 1, onComplete: function() {
			TweenMax.to($('#typingDiv > li').eq(2), 0.7, {opacity: 1, onComplete: function() {
				intro.nextStep();
			}});
		}});
	}});


	function typing(selector, text, callBackFunction) {
		$(selector).typewriting(text, {
			"typing_interval" : typingSpeed,
			"cursor_color" : 'white',
		}, function() {
			$(selector).removeClass("typingCursor");
			if (typeof callBackFunction === "function") {
				callBackFunction();
				intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
			}
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
	
	function storingElement(memoryId, inputId, callBackFunction) {
		$(memoryId).text($(inputId).val()).addClass('circle-css');
		var pos = $(inputId).offset();
		$(memoryId).offset({"top":pos.top,"left":pos.left});
		$(memoryId).removeClass('opacity00');
		TweenMax.to(memoryId, 1, {top : 0, left : 0,onComplete : function() {
			$(memoryId).removeClass('circle-css');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}
	
	function storingElement1(memoryId, inputId, callBackFunction) {
		$(memoryId).text($(inputId).text()).addClass('circle-css');
		var pos = $(inputId).offset();
		$(memoryId).offset({"top":pos.top,"left":pos.left});
		$(memoryId).removeClass('opacity00');
		TweenMax.to(memoryId, 1, {top : 0, left : 0,onComplete : function() {
			$(memoryId).removeClass('circle-css');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}
}