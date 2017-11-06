var typingSpeed = 5;
var intro;

var scanfUsageReady = function() {
$('input').prop("disabled", false);
	
	$("#inputChar").val(null);
	$("#inputChar").on("click keydown keyup", function(e) {
		$(".error-msg").remove();
		if ($('#inputChar').val() == "") {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		}
	});
	$("#inputInt, #inputFloat, #inputChar1").off("click keydown keyup");
	$("#inputInt, #inputFloat, #inputChar1").on("click keydown keyup", function(e) {
		var max = $(this).attr("maxlength");
		$(".error-msg").remove();
		//$(this).text() == ""
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
			$(".introjs-tooltiptext").append("<div class='error-msg'>Empty values is not allowed</div>");
		} else {
			$(".introjs-nextbutton").show();
		}
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if ($(this).attr("id") == "inputFloat" && (e.keyCode == 190 || e.keyCode == 110) && $(this).text().indexOf('.') == -1 && $(this).text().length <= max) {
			return;
		}
		if ($(this).attr("id") != "inputChar1" && (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105)))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			if($(this).attr("id") == "inputInt") {
				$(".introjs-tooltiptext").append("<div class='error-msg'>Max length is 3.</div>");
			} else if ($(this).attr("id") == "inputFloat") { 
				$(".introjs-tooltiptext").append("<div class='error-msg'>Max length is 5.(Including dot).</div>");
			} else {
				$(".introjs-tooltiptext").append("<div class='error-msg'>Max length is 1.</div>");
			}
			e.preventDefault();
		}
	});
		
		 $("#restart").click(function() {
			location.reload();
		}) 
	
	$("#myTable td:even").css("background-color", "LightGray");
	$("#myTable tr:even").css("background-color", "LightBlue");
	$("#myTable tr:odd td").css("background-color", "LightYellow");
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
		}, {
			element : "#typingDiv",
			intro : "",
			position : "bottom"
		}, {
			element : "#myTable",
			intro : "",
			position : "left"
		}, {
			element : "#sampleOne",
			intro : "",
			position : "right"
		}, {
			element : "#charBox",
			intro : "",
			position : "left"
		}, {
			element : "#outputDiv",
			intro : "",
			position : "left"
		}, {
			element : "#charSpan",
			intro : "",
			position : "right"
		}, {
			element : "#charBox",
			intro : "",
			position : "left"
		}, {
			element : "#exampleDiv1",
			intro : "",
			position : "right"
		}, {
			element : "#memoryDiv1",
			intro : "",
			position : "right"
		}, {
			element : "#consoleId1",
			intro : "",
			position : "left"
		}, {
			element : "#example2Scanf",
			intro : "",
			position : "right"
		}, {
			element : "#memoryDiv1",
			intro : "",
			position : "left"
		}, {
			element : "#restart",
			intro : "",
			position : "left"
		}
		]});
	intro.onbeforechange(function(targetElement) {
		
		var elementId = targetElement.id;
		switch (elementId) {
			case "typingDiv":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				setTimeout(function(){
				var text = "<b class ='ct-code-b-yellow'>'control_string'</b> represents with conversion characters.Let us see different "
				+"<b class='ct-code-b-yellow'>conversional characters</b>.";
		 		typing(".introjs-tooltiptext", text, function() {
		 			$('.introjs-nextbutton').show();
		 		});
				},1000);
			};
			break;
			
			case "myTable":
				$('.introjs-nextbutton').hide();
				$('#myTable').removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="These are the diffrent conversion characters used in the first argument of <b class='ct-code-b-yellow'>scanf()</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "restart":
				$('.zIndex').removeClass('zIndex');
				$('.introjs-nextbutton').hide();
				$('#restart').removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
			 		typing(".introjs-tooltiptext", text, function() {
			 		});
				});
			break;
			
			
			case "outputDiv":
				$("#outputDiv").addClass('introjs-showElement').removeClass('opacity00');
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					//var text = "Enter a character.";
					//typing(".introjs-tooltiptext", text, function() {
						$("#EnterChar").addClass("zIndex").effect("highlight", {color: 'yellow'}, 2000, function() {
						$('#EnterChar').removeClass('zIndex');
							$('#EnterChar').effect( "transfer", { to: $('#enterCharText'), className:"ui-effects-transfer" }, 1500, function() {
								$('#enterCharText').removeClass('opacity00');
								//$("#inputChar").attr("placeholder", "ch");
								var text = "Enter a character.";
								typing(".introjs-tooltiptext", text, function() {
									charAtEnd("inputChar");
								});
							});
						});
					//});
				});
			break;
			
			case "mainMemoryDiv":
				$('#mainMemoryDiv').removeClass('opacity00');
				$('.introjs-nextbutton').hide();
				$('#mainMemoryDiv').removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Once the program compiled successfully memory is allocated for the data type variables";
			 		typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
			 		});
				});
			break;
			
			
			
			case "sampleOne":
				$('#exampleDiv').removeClass('opacity00');
				$('#myTable').remove();
				$('.introjs-nextbutton').hide();
				$("#mainExampleDiv").addClass('introjs-showElement').removeClass('opacity00');
				$("#sampleOne").addClass('zIndex');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Let us consider a sample code how to read a character by using <b class='ct-code-b-yellow'>scanf()</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
				
			case "exampleDiv1":
				$('.zIndex').removeClass('zIndex');
				$('#exampleDiv1').removeClass('opacity00');
				$('.introjs-nextbutton').hide();
				$("#exampleDiv1").addClass('zIndex');
				$("#mainExampleDiv").addClass('introjs-showElement').removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Let us consider this sample code how to read a <b class='ct-code-b-yellow'>character,int</b> and "
					+"<b class='ct-code-b-yellow'>float</b> by using <b class='ct-code-b-yellow'>scanf()</b>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "memoryDiv1":
				//console.log(intro._currentStep);
				if (intro._currentStep == 9) {
					$(".introjs-tooltip").css("min-width", "400px");
					$('#exampleDiv1').removeClass('introjs-showElement');
					$('#memoryDiv1').removeClass('opacity00');
					$('.introjs-nextbutton').hide();
					$("#mainExampleDiv").addClass('introjs-showElement').removeClass('opacity00');
					$('.introjs-helperLayer ').one('transitionend', function() {
							$("#exampleTwoChar").addClass("zIndex").effect("highlight", {color: 'yellow'}, 2000, function() {
								$('#charBox1').removeClass('opacity00');
								$('#charBox1').toggleClass('animated zoomIn').one('animationend', function() {
									$('.introjs-tooltiptext').append("<ul><li></li></ul>");
									var text = "<b class ='ct-code-b-yellow'>One</b> byte of memory is allocated to <b class ='ct-code-b-yellow'>char</b> "
										+"data type variable.";
									typing(".introjs-tooltiptext ul li:last-child", text, function() {
										$("#exampleTwoInt").addClass("zIndex").effect("highlight", {color: 'yellow'}, 2000, function() {
											$('#intBox').removeClass('opacity00');
											$('#intBox').toggleClass('animated zoomIn').one('animationend', function() {
												$('.introjs-tooltiptext ul').append("<li></li>");
												var text = "<b class ='ct-code-b-yellow'>Two</b> bytes of memory is allocated to <b class ='ct-code-b-yellow'>int</b> "
													+"data type variable.";
												typing(".introjs-tooltiptext ul li:last-child", text, function() {
													$("#exampleTwoFloat").addClass("zIndex").effect("highlight", {color: 'yellow'}, 2000, function() {
														$('#floatBox').removeClass('opacity00');
														$('#floatBox').toggleClass('animated zoomIn').one('animationend', function() {
															$('.introjs-tooltiptext ul').append("<li></li>");
																var text = "<b class ='ct-code-b-yellow'>Four</b> bytes of memory is allocated to <b class ='ct-code-b-yellow'>float</b> "
																	+"data type variable.";
															typing(".introjs-tooltiptext ul li:last-child", text, function() {
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
				} else {
					$(".introjs-tooltip").css("min-width", "200px");
					$('.introjs-nextbutton').hide();
					$('#outputDiv1').removeClass('introjs-showElement');
					$('#memoryDiv1').removeClass('opacity00');
					$('#xValue1').text($('#inputChar1').text());
					$('#xValue2').text($('#inputInt').text());
					$('#xValue3').text($('#inputFloat').text());
					
					$('.introjs-helperLayer ').one('transitionend', function() {
						var text ="Entered  values stored in the  respective memory location.";
						typing(".introjs-tooltiptext", text, function() {
								$('#xValue1').addClass('circle-css');
								$('#xValue2').addClass('circle-css');
								$('#xValue3').addClass('circle-css');
								var pos = $('#inputChar1').offset();
								var pos1 = $('#inputInt').offset();
								var pos2 = $('#inputFloat').offset();
								$('#xValue1').offset({"top":pos.top,"left":pos.left});
								$('#xValue2').offset({"top":pos1.top,"left":pos1.left});
								$('#xValue3').offset({"top":pos2.top,"left":pos2.left});
								$('#xValue1').removeClass('opacity00');
								   TweenMax.to("#xValue1", 2, {top : 0, left : 0,onComplete : function() {
									$('#xValue1').removeClass('circle-css');
								}});
								   $('#xValue2').removeClass('opacity00');
								TweenMax.to("#xValue2", 2, {top : 0, left : 0,onComplete : function() {
										$('#xValue2').removeClass('circle-css');
								}});
								$('#xValue3').removeClass('opacity00');
								TweenMax.to("#xValue3", 2, {top : 0, left : 0,onComplete : function() {
										$('#xValue3').removeClass('circle-css');
										$('.introjs-nextbutton').show();
								}});
							});
						});
				}
				break;
				
			case "charSpan":
				$(".introjs-tooltip").css("min-width", "400px");
				$('input').prop("disabled", true);
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#charPercent").effect("highlight", {color: '#008000'}, 1000, function() {
						//$("#charAmp").effect("highlight", {color: '#008000'}, 1000, function() {
						$('.introjs-tooltiptext').append("<ul><li></li></ul>");
						var text = "The given character is <b class ='ct-code-b-yellow'>'"+ ($('#inputChar').val()) +"'.</b>"
						+ "'%c' is used to read a character from keyboard, which convertes the character into ASCII value i.e;"
						+" <b class ='ct-code-b-yellow'> " +($('#inputChar').val()).charCodeAt(0) +"</b> .Later covertedt to binary value." ;
						typing(".introjs-tooltiptext ul li:last-child", text, function() {
							$("#charAmp").effect("highlight", {color: '#008000'}, 1000, function() {
								$('.introjs-tooltiptext ul').append("<li></li>");
								var text="In <b class='ct-code-b-yellow'>scanf()</b> all the <b class='ct-code-b-yellow'>argument_list</b> must represends with <b class='ct-code-b-yellow'>&</b> .The <b class='ct-code-b-yellow'>&</b> represents address of the variable "
								+ " when the given value has to be stored.";
								typing(".introjs-tooltiptext ul li:last-child", text, function() {
									$('.introjs-nextbutton').show();
								});
							});
						});
						//});
					});
				});
			break;
			
			
			case "example2Scanf":
				$(".introjs-tooltip").css("min-width", "400px");
				
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#charSpan1").effect("highlight", {color: '#008000'}, 1000, function() {
						$("#charAmp1").effect("highlight", {color: '#008000'}, 1000, function() {
							$('.introjs-tooltiptext').append("<ul><li></li></ul>");
							var text = "The given character is <b class ='ct-code-b-yellow'>'"+ $('#inputChar1').text() +"'.</b>"
							+ "'%c'  is used to read a character from keyboard, which converts the character into to ASCII  value <b class ='ct-code-b-yellow'> " +($('#inputChar1').text()).charCodeAt(0) +"</b> and "
							+ " Later converted to binary code.";
							typing(".introjs-tooltiptext ul li:last-child", text, function() {
								$("#intSpan").effect("highlight", {color: '#008000'}, 1000, function() {
									$("#intAmp").effect("highlight", {color: '#008000'}, 1000, function() {
										$('.introjs-tooltiptext ul').append("<li></li>");
										var text = "The given integer is <b class ='ct-code-b-yellow'>"+ $('#inputInt').text() +".</b>"
										+ "'%d' is used to read a integer value  from keyboard, Later converted to binary code.";
										typing(".introjs-tooltiptext ul li:last-child", text, function() {
											$("#floatSpan").effect("highlight", {color: '#008000'}, 1000, function() {
												$("#floatAmp").effect("highlight", {color: '#008000'}, 1000, function() {
												$('.introjs-tooltiptext ul').append("<li></li>");
												var text = "The given float value is <b class ='ct-code-b-yellow'>"+ $('#inputFloat').text() +"</b>. "
												+ "'%f' is used to read a float vlaue from keyboard, Later converted to binary code. ";
													typing(".introjs-tooltiptext ul li:last-child", text, function() {
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
			break;
			
			 case "consoleId1":
				 $(".introjs-tooltip").css("min-width", "200px");
				$('#consoleId1').removeClass('opacity00');
				$('.introjs-nextbutton').hide();
				$('#memoryDiv1').removeClass('introjs-showElement');
				$('.introjs-helperLayer ').one('transitionend', function() {
					charAtEnd("inputChar1");
					 var text = "Enter a character, an interger and float value by using <b class='ct-code-b-yellow'>tab</b> and <b class='ct-code-b-yellow'>shift+tab</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						//$('.introjs-nextbutton').show();
					});  
				});
			break;
			
			
			case "charBox":
				if (intro._currentStep == 4) {
					$('#memoryDiv').removeClass('opacity00');
					$('.introjs-nextbutton').hide();
					
					//$("#exampleDiv").removeClass('introjs-showElement');
					$("#mainExampleDiv").addClass('introjs-showElement').removeClass('opacity00');
					$('.introjs-helperLayer ').one('transitionend', function() {
						var text = "<b class ='ct-code-b-yellow'>One</b> byte of memory is allocated to <b class ='ct-code-b-yellow'>char</b> "
									+"data type variable.In system each memory has an address.For example "
									+ "i.e: <b class ='ct-code-b-yellow'>1113.</b>";
						typing(".introjs-tooltiptext", text, function() {
							$("#exampleOneChar").addClass("zIndex").effect("highlight", {color: 'yellow'}, 2000, function() {
									//console.log("ok");
									$('#charBox').removeClass('opacity00');
									$('#xValue').addClass('opacity00');
									$('#charBox').toggleClass('animated zoomIn').one('animationend', function() {
										$('.introjs-nextbutton').show();
									});
								});
							});
					});
				break;
				} else {
					$(".introjs-tooltip").css("min-width", "200px");
					$('#xValue').text($('#inputChar').val());
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
						var text = "The charater stored in the memory location.";
						typing(".introjs-tooltiptext", text, function() {
							$('#outputDiv').removeClass('introjs-showElement');
							$('#charBox').removeClass('opacity00');
								$('#xValue').removeClass('opacity00');
								$('#xValue').addClass('circle-css');
								var pos = $('#inputChar').offset();
								$('#xValue').offset({"top":pos.top,"left":pos.left});
								   TweenMax.to("#xValue", 2, {top : 0, left : 0,onComplete : function(){
									$('#xValue').removeClass('circle-css');
									$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="exampleTwo()">Next →</a>');
								}});   
						});
					});
				}
		}
	});
		intro.start();
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
		typingId = '#typingDiv';
		
		
		typingContent = '1. <b class="ct-blue-color">scanf()</b> is used to read multiple data type values at a time from the standerd input'
									+ ' device (keyboard).<br>2. <b class="ct-blue-color">scanf()</b> is a library function which was already defined in'
									+ '<b class="ct-blue-color">"stdio.h"</b> header file.<br>'
									+ '3. General format of <b class="ct-blue-color">scanf()</b> function is <b id="textAnimate" class="back-color">'
									+ 'scanf (“control_string”, argument_list);</b>';
		typing(typingId, typingContent, function() {
			
			$(typingId).removeClass('typingCursor');
			 var div = $("#textAnimate");
			 div.animate({left: '100px'}, "slow");
			 div.animate({fontSize: '1.5em'},"slow", function () {
				 intro.nextStep();
			 });
			
	});
}

function exampleTwo() {
	$(".user-btn").remove();
	$('#exampleDiv').addClass('height-124');
	$('#memoryDiv').addClass('height-124');
	$('#exampleDiv1').removeClass('opacity00');
	intro.nextStep();
}

function intValue() {
	$('.user-btn').remove();
	$('.introjs-tooltiptext').empty();
	intro.nextStep();
	
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
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