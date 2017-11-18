
var typingSpeed = 5;
var valIndex = 0;
var index = 1;
var size = ["1", "2", "3"];
var print = 0;
var count = 0;
var flag = true;

var oneDimesionalArrayReady = function() {

	
	$('#typingDiv ul li').addClass('opacity00');
	
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
		},  {
			element : "#codeDiv",
			intro : "",
			position : "bottom"
		},  {
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
			tooltipClass : "hide"
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
		var elementId = targetElement.id;
		switch (elementId) {
		case 'part3':
			$('#codeDiv').addClass('opacity00');
			break;
		case 'codeDiv':
			$('#codeDiv').removeClass('opacity00');
			$('.introjs-helperLayer ').one('transitionend', function() {
				intro.refresh();
			});
			break;
		case "variableDeclaraiton":
			$('#tableDiv').addClass('opacity00');
			$("tr").text("");
			break;
		case "tableDiv":
			var action = intro._introItems[intro._currentStep].action;
			switch(action) {
				case "placingValues":
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
			$('#rowValue').empty();
			break;
		case 'getInputValues':
			var length = $("#rowValue").text();
			for (var i = 0; i <= length; i++) {
				$("#value" + i).remove();
			}
			valIndex = 0;
			break;
		case 'animationDiv':
			if (intro._currentStep == 13 ) {
				console.log("Step : 13");		
				var length = $("#rowValue").text();
				for (var i = 0; i <= length; i++) {
					$("#value" + i).remove();
				}
				valIndex = 0;
				for (var i = 0; i < parseInt(length); i++) {
					$('#arrayVal' + i).text("");
				}
				
				$(".table-css tr:eq(1) span").not(".output-value-circle").parent().removeClass('background-color');
				$(".table-css tr:eq(1) span").each(function(ind, val) {
					if (!$(this).text().trim().length) {
				    	$(".table-css tr:eq(2) td").eq(ind).find("span").css("opacity", "1");
				    	$(".table-css tr:eq(0) td").eq(ind).find("span").css("opacity", "1");
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
					}, 1000);
				};
				break;
			
			case "codeDiv":
				$('#typingDiv').addClass('zIndex');
				intro.refresh();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#codeDiv').removeClass('opacity00');
					$(".introjs-tooltip").removeClass('hide');
					var text = "Let us learn <span class='ct-code-b-yellow'>One Dimensional Array</span> in " +
					"<span class='ct-code-b-yellow'>C</span> using this sample code.";
	 				typing(".introjs-tooltiptext", text, function() {
	 					$(".introjs-nextbutton, .introjs-prevbutton").show();
	 				});
				});
				break;
			
		 	case "part1":
				intro.refresh();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It refers to the <b class='ct-code-b-yellow'>primitive data-type</b> like int, float, etc.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
		 				});
				});
				break;
				
			case "part2":
				intro.refresh();
			//	$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It refers to the <b class='ct-code-b-yellow'>identifier</b> which represents array name.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
		 				});
				});
				break;
				
			case "part3":
				intro.refresh();
			//	$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "It is an integer constant represents <b class='ct-code-b-yellow'>size</b> of the array.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
		 				});
				});
				break;
				
			case "printForLoop":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Using<b class='ct-code-b-yellow'> for-loop </b>we can display elements of the array .";
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
				
			case "variableDeclaraiton":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("#array").effect("highlight", {color: '#008000'}, 1000, function() {
						$(".introjs-tooltip").removeClass('hide');
						var text = "One dimensional integer array <b class='ct-code-b-yellow'>arr[9]</b> and intiger variable <b "
									+"class='ct-code-b-yellow'>n,i</b> are declared.";
		 				typing(".introjs-tooltiptext", text, function() {
		 					$(".introjs-nextbutton, .introjs-prevbutton").show();
		 				});
					});
				});
				break;
				
			case "getRowColumn":
				$('.introjs-nextbutton').hide();
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
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "<b class='ct-code-b-yellow'>scanf()</b> function reads integer value for an "
					+"<b class='ct-code-b-yellow'>array</b> size.";
	 				typing(".introjs-tooltiptext", text, function() {
	 					$(".introjs-nextbutton, .introjs-prevbutton").show();
	 				});
				});
				break;
				
			case "animationDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					if (intro._currentStep == 9) {
						if (intro._direction == "forward") {
							$('#rowValue').attr('contenteditable','false');
							$('#rowValue').focus();
							$('#animationDiv').removeClass('opacity00');
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
						
					} else if (intro._currentStep == 11 ) {
						if (intro._direction == "forward") {
							$('.introjs-nextbutton').hide();
							$('.matrix').removeClass('opacity00');
							$(".introjs-tooltip").removeClass('hide');
						 	var text = "Enter how many values you want to read.";
						 	typing(".introjs-tooltiptext", text, function() {
						 		$('#rowValue').attr('contenteditable','true');
						 		charAtEnd('rowValue');
						 		valueRestriction();
			 				});
						} else {
							$('#rowValue').empty();
							setTimeToIntroPreviousStep();
						}
					} else if (intro._currentStep == 16 ) {
						if (intro._direction == "forward") {
							$('.introjs-helperLayer ').one('transitionend', function() {
								$("#consoleBodyDiv1").append("<div id='outputTyping'></div>");
							 	typingId = '#outputTyping';
							 	typingContent ="The array elements are :";
							 	typing(typingId, typingContent, function() {
									setTimeout(function() {
										intro.nextStep();
									}, 500);
								});
						 	});
						} else {
							$('#outputTyping').remove();
							setTimeToIntroPreviousStep();
						}
					} else if (intro._currentStep == 18) {
						$('.introjs-helperLayer ').one('transitionend', function() {
							$(typingId).removeClass('typingCursor');
							for (var i = 0; i < parseInt($('#rowValue').text()); i++) {
								$("#consoleBodyDiv1").append("<span  class='final' id='final"+print+"'></span><span>&nbsp;</span>");
								$('#final'+print+'').text($('#blinkCursor'+print+'').text());
								print++;
								$('.final').addClass('opacity00');
								finalPrint();
							}	
						});
						
					} else {
						
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer ').one('transitionend', function() {
							$(".introjs-tooltip").removeClass('hide');
							var text = "press enter key for next entry.";
							typing(".introjs-tooltiptext", text, function() {
								tableIndex(); 
						 		$("#consoleBodyDiv1").append("<div id='value0'>Enter the value of arr[0] &emsp;: <div id='blinkCursor0' style='display:inline-block' class='int input-char outline-none a00' placeholder='value' contenteditable='true' maxlength='2'></div></div>");
						 		$('#blinkCursor0').focus();
						 		keyDownEvent();
						});
					 });
				}
				});
			break;
			
			case "getInputValues":
				var rowValue = parseInt($('#rowValue').text());
				$('#rowValue').attr('contenteditable', false);
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$(".introjs-tooltip").removeClass('hide');
					var text ='<ul><li>The size of an array is <b class="ct-code-b-yellow">'+ rowValue +'</b> so user can access '
								+'<b class="ct-code-b-yellow">'+ rowValue +'</b> values. </li></ul>';
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
	 				});
				});
				break;
				
			case "tableDiv":
				$('.introjs-helperLayer').one('transitionend', function() {
					var action = intro._introItems[intro._currentStep].action;
					switch(action) {
					case "placingValues":
						for (var i = 0; i < parseInt($('#rowValue').text()); i++) {
							var l = $('#blinkCursor' + i).offset();
							$('#arrayVal' + i).offset({'top': l.top,'left': l.left}).text($('#blinkCursor' + i).text()).addClass('output-value-circle circle-css');
							TweenMax.to($('#arrayVal' + i), 2, { top: 0, left: 0, onComplete: function () {
								$('.arrayValue').removeClass('circle-css');
								$(".introjs-tooltip").removeClass('hide');
								var text = 'The array values placed into respective memory location of the array.';
								typing('.introjs-tooltiptext', text, function () {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							}});
						}
						
						$(".table-css tr:eq(1) span").not(".output-value-circle").parent().addClass('background-color');
						$(".table-css tr:eq(1) span").each(function(ind, val) {
							if (!$(this).text().trim().length) {
						    	$(".table-css tr:eq(2) td").eq(ind).find("span").css("opacity", "0.3");
						    	$(".table-css tr:eq(0) td").eq(ind).find("span").css("opacity", "0.3");
							}
						});
							
						break;
					case "arrayCreation":
						$('#tableDiv').removeClass('opacity00');
						$('.introjs-nextbutton').hide();
						$('.introjs-helperLayer ').one('transitionend', function() {
							setTimeout(function() {
								tableCreation();
						}, 1000);
			 				
							setTimeout(function() {
								$(".introjs-tooltip").removeClass('hide');
								var text ='<b class="ct-code-b-yellow">arr[9]</b> this is <b class="ct-code-b-yellow">One</b> dimensional array with '
									+'maximum size <b class="ct-code-b-yellow">9</b>.';
								typing(".introjs-tooltiptext", text, function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
						}, 2000);
						});
					}
				});
				break;
				
			case "restart":
				$('.zIndex').removeClass('zIndex');
				$('.introjs-nextbutton').hide();
				$("#restart").removeClass('opacity00');
				$('.introjs-tooltip').css('min-width', '125px');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
	 				typing(".introjs-tooltiptext", text, function() {
	 					$("#restart").click(function() {
							location.reload();
						});
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

tl = new TimelineLite();
$('#rowValue').attr('contenteditable','false');


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

function finalPrint() {
	arrValueCount = $('.output-value-circle').length;
  if (count < arrValueCount ) {
    storingElement("#final"+count,".output-value-circle", count,function() {
      count++;
      finalPrint();
    });
  } else {
	  setTimeout(function() {
		  intro.nextStep();
		}, 800);
  }
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


function valueRestriction() {
	$("#rowValue").on("keydown", function(e) {
		intro.refresh();
		$('.error-msg').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 49 || e.keyCode > 57)) && ((e.keyCode < 97) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13 && intro._currentStep == 11) {
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			intro.nextStep();
		} 
		
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='error-msg'><br/>row number should be single digit.</div>");
			e.preventDefault();
		}
	});

	$("#rowValue").on("keyup", function(e) {
		intro.refresh();
		if ($(this).text() == "") {
			
			$('.error-msg').remove();
	       	$('.introjs-tooltiptext').append("<div class='error-msg'><br/>Empty value is not allowed.</div>");
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$("#rowValue").empty();
		} else {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}
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


function tableCreation() {
	$('.user-btn').remove();
	var rows = 3;
	var cols = 3;
	var r = 0;
	var str = ["blue","red","green"];
	var str1 = ["blue-text","red-text","green-text"];
	var str2 = ["first","second","third"];
	var count = 1048;
	for (var i = 0; i < rows; i++) {
		var flag = true;
		for (var j = 0; j < cols; j++) {
			$('tr').eq(0).append('<td colspan="1"><span class="arrayRow">arr['+r+']</span></td>');
			$('tr').eq(1).append('<td id="val'+r+'" class="td-value-css '+ str[0] + '"><span id ="arrayVal'+r+'" class="arrayValue a'+i+''+j+'"></span></td>');
			$('tr').eq(2).append('<td><span class='+str1[0]+ ' id="arrIndex'+r+' a'+i+''+j+'">'+count+'<span></td>');
			r++;
			count = count + 2;
			
		}
	}
	$('#arrayBox').toggleClass('animated zoomIn').one('animationend', function() {
		$('#arrayBox').removeClass('animated zoomIn');
	}); 
}

function keyDownEvent(e) {
	$(".error-msg").remove();
	$("[contenteditable=true]").off("keydown");
	$("[contenteditable=true]").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		var totalElements = parseInt($('#rowValue').text());
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (e.keyCode == 13 && $(this).text().length > 0) {	
	    	$(this).attr("contenteditable", false);
	console.log("totalElements : " + totalElements);
	console.log("valIndex : " + valIndex);
	    	if (totalElements == (valIndex + 1)) {
				e.preventDefault();
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			} else {
				valIndex++;
				$("#consoleBodyDiv1").append("<div id='value"+valIndex+"'>Enter the value of arr["+valIndex+"] &emsp;: <div style='display:inline-block;' id='blinkCursor"+valIndex+"' class='int input-char outline-none a" + stackIndex[index] + "' placeholder='value' contenteditable='true' maxlength='2'></div></div>");
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