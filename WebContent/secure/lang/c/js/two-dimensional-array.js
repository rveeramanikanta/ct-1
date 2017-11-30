var typingSpeed = 1;
	var intro;
	var i = -1;
	var j = 0;
	var valIndex = 0;
	var print = 0;
	var index = 1;
	var size = ["1", "2", "3"];
	var count = 0;
	var arrValueCount = 0;
	var flag = true;
	var inputFlag = true;
	
var twoDimensionalArrayReady = function() {
	$('#secondInput').val("");
	$('#typingDiv ul li').addClass('opacity00');
	$("#restart").click(function() {
		location.reload();
	});
	 
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
			tooltipClass : "hide" 
		}, {
			element : "#codeDiv",
			intro : "",
			position : "bottom",
			tooltipClass : "hide"
		}, {
			element : "#variableDeclaraiton",
			intro : "",
			position : "bottom",
			tooltipClass : "hide"
		}, {
			element : "#tableDiv",
			intro : "",
			position : "bottom",
			action : "arrayCreation",
			tooltipClass : "hide"
			
		}, {
			element : "#getRowColumn",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#scanf",
			intro : "",
			position: "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass : 'hide'
		}, {
			element : "#getInputValues",
			intro : "",
			position : "bottom",
			tooltipClass : "hide"
		}, {
			element : "#animationDiv",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		}, {
			element : "#tableDiv",
			intro : "",
			position : "buttom",
			action : "placingValues",
			tooltipClass : "hide"
		}, {
			element : "#codePrintf",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide" 
		}, {
			element : "#printForLoop",
			intro : "",
			position : "right"
		}, {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#restart",
			intro : "",
			position : "left"
		}]});
	
	intro.onbeforechange(function(targetElement) {
	console.log("step : " + intro._currentStep);	
		var elementId = targetElement.id;
		switch (elementId) {
		case 'part4':
			$('#codeDiv').addClass('opacity00');
			intro.refresh();
			break;
		case 'codeDiv':
			$('#codeDiv').removeClass('opacity00');
			intro.refresh();
			break;
		case "variableDeclaraiton":
			$('#tableDiv').addClass('opacity00');
			$("tr").text("");
			break;
		case "tableDiv":
			var action = intro._introItems[intro._currentStep].action;
			switch(action) {
				case "placingValues":
					valIndex = 0;
					index = 1;
					var length = parseInt($('#val0').text()) * parseInt($('#val1').text());
					for (var i = 0; i < parseInt($('#val0').text()) * parseInt($('#val1').text()) ; i++) {
						$("#arrayBox .a" + stackIndex[i]).text("").removeClass("output-value-circle");
					}
					
					$(".table-css tr:eq(1) span").not(".output-value-circle").parent().removeClass('background-color');
					$(".table-css tr:eq(1) span").each(function(ind, val) {
						if (!$(this).text().trim().length) {
					    	$(".table-css tr:eq(2) td").eq(ind).find("span").css("opacity", "1");
						}
					});
					break;
				case "arrayCreation":
					$('#tableDiv').removeClass('opacity00');
					$("tr").text("");
					break;
			}
			break;
		case 'getRowColumn':
			$('#animationDiv').addClass('opacity00');
			break;
		case 'scanf':
			$('#secondInput').val("");
			$("#secondInput").removeClass("blinking-orange");
			break;
		case 'getInputValues':
			$(".array-values").remove();
			
			break;
		case 'animationDiv':
			if (intro._currentStep == 12) {
				inputFlag = true;
				$("#inputVal").empty();
				$("#inputVal").append("<input id='secondInput' maxlength='20' class='input-all'/>");
				$("#secondInput").removeClass("blinking-orange");
			}
			if (intro._currentStep == 14 ) {
				var length = parseInt($('#val0').text()) * parseInt($('#val1').text());
				for (var i = 0; i < length; i++) {
					$("#value" + i).remove();
				}
				valIndex = 0;
				index = 1;
				for (var i = 0; i < parseInt(length); i++) {
					$('#arrayVal' + i).text("");
				}
				
				for (var i = 0; i < parseInt($('#val0').text()) * parseInt($('#val1').text()) ; i++) {
					$("#arrayBox .a" + stackIndex[i]).text("");
				}
				
				$(".table-css tr:eq(1) span").not(".output-value-circle").parent().removeClass('background-color');
				$(".table-css tr:eq(1) span").each(function(ind, val) {
					if (!$(this).text().trim().length) {
				    	$(".table-css tr:eq(2) td").eq(ind).find("span").css("opacity", "1");
					}
				});
				
			}
			break;
		}
	});
	
	intro.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			
			if (intro._currentStep != 2) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		
		var elementId = targetElement.id;
		switch (elementId) {
			case "typingDiv":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				if (flag) {
					dynamicSteps();
					flag = !flag;
				}
				setTimeout(function() {
					intro.nextStep();
				}, 500);
			};
			break;
			
			case "codeDiv":
			$('#typingDiv').addClass('bg-info zIndex');
			intro.refresh();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#codeDiv').removeClass('opacity00');
				$(".introjs-tooltip").removeClass('hide');
				var text = "Let us learn <span class='ct-code-b-yellow'>two dimensional array</span> in " +
				"<span class='ct-code-b-yellow'>C</span> using this sample code.";
 				typing(".introjs-tooltiptext", text, function() {
 					$(".introjs-nextbutton, .introjs-prevbutton").show();
 				});
			});
			break;
			
			case "printForLoop":
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "For displaying two dimensional array values as matrix we require <b class='ct-code-b-yellow'>2</b> for loops.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
	 				});
				});
				break;
				
			case "part1":
				intro.refresh();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It refers to the <b class='ct-code-b-yellow'>primitive data-type</b> like int,float,long etc."
						typing(".introjs-tooltiptext", text, function() {
		 					$('.introjs-nextbutton').show();
		 				});
				});
				break;
				
			case "part2":
				intro.refresh();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It refers to the <b class='ct-code-b-yellow'>identifier</b> which represents array name."
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
		 				});
				});
				break;
				
			case "part3":
				intro.refresh();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It is an integer constant represents <b class='ct-code-b-yellow'>row size</b> of the array."
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
		 				});
				});
				break;
			
			case "part4":
				intro.refresh();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It is an integer constant represents <b class='ct-code-b-yellow'>column size</b> of the array."
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
		 				});
				});
				break;
			
			
			case "codePrintf":
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (intro._direction == "forward") {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else {
						setTimeToIntroPreviousStep();
					}
				});
				break;
			
			case "scanf":
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'>scanf()</b> function reads two integer values as "
					+"<b class='ct-code-b-yellow'>row</b> size and <b class='ct-code-b-yellow'>column</b> size.";
	 				typing(".introjs-tooltiptext", text, function() {
	 					$(".introjs-nextbutton, .introjs-prevbutton").show();
	 				});
				});
				break;
				
			case "restart":
				$('.zIndex').removeClass('zIndex');
				$("#restart").removeClass('opacity00');
				$('.introjs-tooltip').css('min-width', '125px');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
	 				typing(".introjs-tooltiptext", text, function() {
	 				});
				});
				break;
			
			case "variableDeclaraiton":
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#array").effect("highlight", {color: '#008000'}, 1000, function() {
						$(".introjs-tooltip").removeClass('hide');
						var text = "Two dimensional integer array <b class='ct-code-b-yellow'>a[3][3]</b> and intiger variable <b "
									+"class='ct-code-b-yellow'>m,n,i,j</b> are declared.";
		 				typing(".introjs-tooltiptext", text, function() {
		 					$(".introjs-nextbutton, .introjs-prevbutton").show();
		 				});
					});
				});
				break;
				
			case "getRowColumn":
				$('.introjs-helperLayer').one('transitionend', function() {
					if (intro._direction == "forward") {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					} else {
						setTimeToIntroPreviousStep();
					}
				});
				break;
				
			case "animationDiv":
				
				if (intro._currentStep == 10) {
					if (intro._direction == "forward") {
						$('#rowValue').focus();
						$('#animationDiv').removeClass('opacity00').addClass('introjs-showElement');
						$('.introjs-nextbutton').hide();
							$('.introjs-helperLayer ').one('transitionend', function() {
							$('#animationDivText').removeClass('opacity00');
							setTimeout(function() {
									intro.nextStep();
							}, 1000);
						});
					} else {
						setTimeToIntroPreviousStep();
					}
					
				} else if (intro._currentStep == 12 ) {
					$('#rowValue, #columnValue').attr('contenteditable','true');
					$('.introjs-helperLayer ').one('transitionend', function() {
					$('.matrix').removeClass('opacity00');
					$(".introjs-tooltip").removeClass('hide');
						var text ="Enter <b class='ct-code-b-yellow'>row size</b> and <b class='ct-code-b-yellow'>"
						 			+"column size</b> values separated by <b class='ct-code-b-yellow'>space</b>.</br></br>"
						 			+"For example your row size is <b class='ct-code-b-yellow'>2</b>"
						 			+" and column size is <b class='ct-code-b-yellow'>3</b> enter them as <b class='ct-code-b-yellow'>2 3</b>.";
						typing(".introjs-tooltiptext", text, function() {
							arr = [];
							$("#secondInput").addClass("blinking-orange").removeAttr('disabled').focus();;
							$('#secondInput').on("keydown", function(e) {
								if ((arr.length == 2 || arr.length == 0) && e.keyCode == 32) {
									e.preventDefault();
								}
								
								if (arr.length == 1) {
									var flag = false;
									flag = $('#secondInput').val().indexOf(' ')>=0;
									if (e.keyCode == 32 && flag) {
										e.preventDefault();
									}
								}
								
							 	if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
									intro.nextStep();
								}
								
							});
								
							$('#secondInput').on("keyup", function(e) {
								$('.length-error-text,.size-error').remove();
								if ($(this).val() == "") {
									$(".introjs-nextbutton, .introjs-prevbutton").hide();
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please enter an row size and column size values each separated by a space.</span>");
								} 
								var givenText = $(this).val();
								var splittedText = givenText.split(" ");
								arr = [];
								
								$.each(splittedText, function(idx, val) {
									if (val != '') {
										arr.push(val);
									}
								});
								
								if (arr.length == 1 && e.keyCode == 8 && $('.backspace-error').length == 0 ) {
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red backspace-error length-error-text'></br>Enter two numbers separated by space.</span>");
								}
								
								if (arr.length == 2) {
									var a0 = $.isNumeric(parseInt(arr[0]));
									var a1 = $.isNumeric(parseInt(arr[1]));
									var aFirst = parseInt(arr[0]).toString();
									var aSecond = parseInt(arr[1]).toString();
									var dot = arr[1].indexOf(".") == -1;
									var dot1 = arr[0].indexOf(".") == -1;
									if (a0 && a1 && dot && dot1) {
										if ($.inArray(aFirst, size) !== -1 && $.inArray(aSecond, size) !== -1) {
											$(".introjs-nextbutton, .introjs-prevbutton").show();
										} else {
											if ($('.size-error').length == 0 ) {
												$(".introjs-nextbutton").hide();
												$('.introjs-tooltiptext').append("<span class='ct-code-b-red size-error length-error-text'></br>size should be 1 to 3(inclusive)</span>");
											}
										}
									  } else {
									  	$(".introjs-nextbutton, .introjs-prevbutton").hide();
									  	$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'> "
												+"<br/> Please follow the above format.</br>size must be in numbers.</span>");
									  }
								} else {
									$(".introjs-nextbutton, .introjs-prevbutton").hide();
								}
							});
		 				});
					});
					
				} else if (intro._currentStep == 17 ) {
					$('.introjs-helperLayer ').one('transitionend', function() {
						if (intro._direction == "forward") {
							$("#consoleBodyDiv1").append("<div id='outputTyping'></div>");
						 	typingId = '#outputTyping';
						 	typingContent ="The array elements are :";
						 	typing(typingId, typingContent, function() {
								setTimeout(function() {
									intro.nextStep();
								}, 500);
							});
						} else {
							$('#outputTyping').remove();
							setTimeToIntroPreviousStep();
						}
				 	});
					
				} else if (intro._currentStep == 19) {
					$('.introjs-helperLayer ').one('transitionend', function() {
						$(typingId).removeClass('typingCursor');
							for (var i = 0; i < parseInt($('#val0').text()) ; i++ ) {
								for (var j = 0; j < parseInt($('#val1').text()); j++ ) {
									$("#consoleBodyDiv1").append("<span  class='final' id='final"+print+"'><span><span>&nbsp;</span>");
								 	if (parseInt($('#blinkCursor'+print+'').text()) == 0) {
										$('#final'+print+'').text("0");
								  	} else {
										$('#final'+print+'').text($('#blinkCursor'+print+'').text());
								  	}
									$('#consoleBodyDiv1').append(' ');
									print++;
							  	}
								$('#consoleBodyDiv1').append('<br/>');
							}
							$('.final').addClass('opacity00');
							finalPrint();
					 });
				} else {
					$('.introjs-nextbutton').hide();
					$('.introjs-helperLayer ').one('transitionend', function() {
						$(".introjs-tooltip").removeClass('hide');
						var text = "press enter key for next entry.";
						typing(".introjs-tooltiptext", text, function() {
							stack = [];
							stackIndex = [];
							$(".output-value-circle").removeClass("output-value-circle");
							tableIndex(); 
					 		$("#consoleBodyDiv1").append("<div class='array-values' id='value0'>Enter the value of a[0][0] &emsp;: <div id='blinkCursor0' style='display:inline-block' class='int input-char outline-none a00' placeholder='value' contenteditable='true' maxlength='2'></div></div>");
					 		$('#blinkCursor0').focus();
					 		keyDownEvent();
					 });
				 });
			}
			break;
				
			case "tableDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var action = intro._introItems[intro._currentStep].action;
					switch(action) {
					case "placingValues":
						for (var i = 0; i < parseInt($('#val0').text()) * parseInt($('#val1').text()) ; i++) {
							var l = $("#blinkCursor" + i).offset();
							$("#arrayBox .a" + stackIndex[i]).offset({"top" : l.top,"left" : l.left}).text($("#blinkCursor" + i).text()).addClass('output-value-circle circle-css');
							TweenMax.to($("#arrayBox .a" + stackIndex[i]), 2, {top: 0, left : 0,onComplete : function() {
								$('.arrayValue').removeClass('circle-css');
								$(".introjs-tooltip").removeClass('hide');
								var text = "The array values placed into respective memory location of the array.";
							  	typing(".introjs-tooltiptext", text, function() {
							  		$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							}});
						}
						$(".table-css tr:eq(1) span").not(".output-value-circle").parent().addClass('background-color');
						$(".table-css tr:eq(1) span").each(function(ind, val) {
							if (!$(this).text().trim().length) {
						    	$(".table-css tr:eq(2) td").eq(ind).find("span").css("opacity", "0.3");
							}
						});
						break;
					case "arrayCreation":
						$('#tableDiv').removeClass('opacity00').addClass('introjs-showElement');
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer ').one('transitionend', function() {
							setTimeout(function() {
								tableCreation();
						}, 1000);
			 				
							setTimeout(function() {
								$(".introjs-tooltip").removeClass('hide');
								var text ='<b class="ct-code-b-yellow">a[3][3]</b> this is <b class="ct-code-b-yellow">2</b> dimensional array with '
									+'maximum row size <b class="ct-code-b-yellow">3</b> and maximum column size <b class="ct-code-b-yellow">3</b>.';
								 typing(".introjs-tooltiptext", text, function() {
									 $('.introjs-nextbutton, .introjs-prevbutton').show();
								});
						}, 2000);
						});
					}
				});
				break;
			case "getInputValues":
				
				if (inputFlag) {
					inputFlag = false; 
					var text = $('#secondInput').val();
					var i = 0;
					$('#inputVal').empty();


					$.each(text.split(' '), function (index, val) {
						$("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
						if(i == 1) {
							$("#space1").remove();
						  }
						i++ 
					});
				}
				
				
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$(".introjs-tooltip").removeClass('hide');
					var text ='<ul><li>The row size is <b class="ct-code-b-yellow">'+parseInt($('#val0').text())+'</b> and column size '
								+'is <b class="ct-code-b-yellow">'+parseInt($('#val1').text())+'</b> so user can access a '
								+ '<b class="ct-code-b-yellow">'+parseInt($('#val0').text())+'</b><b class="ct-code-b-yellow">*</b><b class="ct-code-b-yellow">'
								+''+parseInt($('#val1').text())+'</b> matrix.</li><li> For reading values into '
								+'<b class="ct-code-b-yellow">2</b> dimensional array we require two for loops , <b class="ct-code-b-yellow">outer for</b> loop used for '
								+'rows and <b class="ct-code-b-yellow">inner for</b> loop used for columns. Here m size is <b class="ct-code-b-yellow">'+parseInt($('#val0').text())+'</b>'
								+' and n size is <b class="ct-code-b-yellow">'+parseInt($('#val1').text())+'</b> so the body of the for loops will '
								+'execute <b class="ct-code-b-yellow">'+parseInt($('#val0').text())*parseInt($('#val1').text())+'</b>'
								+' number of times.</li></ul>';
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
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
		TweenMax.to($('#typingDiv > ul > li').eq(0), 0.5, {opacity: 1, onComplete: function() {
			TweenMax.to($('#typingDiv > ul > li').eq(1), 0.5, {opacity: 1, onComplete: function() {
				intro.nextStep();
			}});
		}});
}


function dynamicSteps(action) {
	var dynamicStep = {
			element : "#part1",
			intro : "",
			position : "bottom",
			action: action
	}
	intro.insertOption(intro._currentStep + 1, dynamicStep);
	var dynamicStep = {
			element : "#part2",
			intro : "",
			position : "bottom",
			action: action
	}
	intro.insertOption(intro._currentStep + 2, dynamicStep);
	var dynamicStep = {
			element : "#part3",
			position : "bottom",
			intro : ""
	}
	intro.insertOption(intro._currentStep + 3, dynamicStep);
	var dynamicStep = {
			element : "#part4",
			intro : "",
			position : "bottom"
	}
	intro.insertOption(intro._currentStep + 4, dynamicStep);
}

function tableCreation() {
	$('.user-btn').remove();
	var rows = 3;
	var cols = 3;
	var r = 0;
	var str = ["blue","red","green"];
	var str1 = ["blue-text","red-text","green-text"];
	var str2 = ["first","second","third"];
	for (var i = 0; i < rows; i++) {
		var flag = true;
		for (var j = 0; j < cols; j++) {
			if (flag) {
				$('tr').eq(0).append('<td colspan=' + cols + '><span class="arrayRow">' + str2[i] + ' row</span></td>');
				flag = false;
			}
			$('tr').eq(1).append('<td id="val'+r+'" class="td-value-css '+ str[i] + '"><span id ="arrayVal'+r+'" class="arrayValue a'+i+''+j+'"></span></td>');
			$('tr').eq(2).append('<td><span class='+str1[i]+ ' id="arrIndex'+r+' a'+i+''+j+'">a['+i+']['+j+']<span></td>');
			r++;
		}
	}
	$('#arrayBox').toggleClass('animated zoomIn').one('animationend', function() {
		$('#arrayBox').removeClass('animated zoomIn');
	}); 
}

var stack = [];
var stackIndex = [];
function tableIndex() {
	var rows = parseInt($('#val0').text());
	var cols = parseInt($('#val1').text());
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			stack.push('a['+i+']['+j+']');
			stackIndex.push(i + "" + j);
		}
	}
}

function setTimeToIntroPreviousStep() {
	setTimeout(function() {
		intro.previousStep();
	}, 800);
}


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

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function storingElement(memoryId, inputId,count,callBackFunction) {
	$(memoryId).text($(inputId).eq(count).text()).addClass('circle-css');
	var pos = $(inputId).eq(count).offset();
	$(memoryId).offset({"top":pos.top - 3,"left":pos.left});
	$(memoryId).removeClass('opacity00');
		TweenMax.to(memoryId, 1, {top : 0, left : 0,onComplete : function() {
		$(memoryId).removeClass('circle-css');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	}}); 
}

function finalPrint() {
	arrValueCount = $('.output-value-circle').length;
  if (count < arrValueCount ) {
    storingElement("#final"+count,".output-value-circle", count,function() {
      count++;
      finalPrint()
    });
  } else {
	  setTimeout(function() {
		  intro.nextStep();
	  }, 800);
  }
}

function keyDownEvent(e) {
	$(".error-msg").remove();
	$("[contenteditable=true]").off("keydown");
	$("[contenteditable=true]").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		var totalElements = parseInt($('#val0').text())*parseInt($('#val1').text());
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (e.keyCode == 13 && $(this).text().length > 0) {	
	    	$(this).attr("contenteditable", false);
			if (totalElements == (valIndex + 1)) {
				e.preventDefault();
				$(".introjs-nextbutton, .introjs-prevbutton").show();
			} else {
				valIndex++;
				$("#consoleBodyDiv1").append("<div class= 'array-values' id='value"+valIndex+"'>Enter the value of "+stack[index]+" &emsp;: <div style='display:inline-block;' id='blinkCursor"+valIndex+"' class='int input-char outline-none a" + stackIndex[index] + "' placeholder='value' contenteditable='true' maxlength='2'></div></div>");
				index++;
				charAtEnd('blinkCursor'+valIndex);
				keyDownEvent(e);
		    }
   		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
}