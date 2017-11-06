var intro;
var typingSpeed = 5;
var text1 = "Click on any button to see the different examples on Implicit type conversion.";

var implicitTypeConversionReady = function() {
	$("#restart").click(function() {
		location.reload();
	})
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
		steps : [ {
			element : "#conversionDiv",
			intro : "",
			tooltipClass : "hide"
		},  {
			element : "#conversionDiv",
			intro : "",
			tooltipClass : "hide"
		},  {
			element : "#automaticTypeValues",
			intro : "",
			position : "left"
		},  {
			element : "#automaticTypeAnimation",
			intro : "",
			position : "left"
		},  {
			element : "#conversionDiv",
			intro : "",
			tooltipClass : "hide"
		}, {
			element : "#mainAssignmentAnimationDiv",
			intro : "",
			position : "right"
		}, {
			element : "#restart",
			intro : "",
			position : "left"
		}
		
		]});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "conversionDiv":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				$('#typeConversionDiv').append('<div class="text-center row-div1 opacity00" id="typesDiv">'
												+ '<div class="box-div " id="typesHeading">Type conversion</div></div>');
				$('#typeConversionDiv').append('<div id="implicitAndExplictDiv" class="text-center row-div2 col-xs-12">'
												+ '<div id="implicitDiv" class="box-div col-xs-offset-2 col-xs-3 opacity00"><span class ="padding10" id ="implicitSpan">'
												+ 'Implicit</span></div>'
												+ '<div id="explicitDiv" class="box-div col-xs-offset-2 col-xs-3 opacity00"><span class ="padding10" id ="explicitSpan">'
												+ 'Explicit</span>');
				$('#typeConversionDiv').append('<div id="automaticAndAssignmentDiv" class="text-center row-div3 opacity00 col-xs-12">'
												+ '<div id="automaticDiv" class="box-div col-xs-offset-1 col-xs-2"><span class="padding10" id="automaticSpan">'
												+ 'Automatic</span></div>'
												+ '<div id="assignmentDiv" class="box-div col-xs-offset-4 col-xs-3"><span class="padding10" id="assignmentSpan">'
												+ 'Assignment</span></div>'
												+ '<div id="remaining" class="col-xs-offset-1 col-xs-1"><span>.</span></div>');
				$(".row-div1").removeClass('opacity00');
				TweenMax.to("#arrowMark11", 1, {attr:{x2: "97%"},onComplete:function() {
					$("#arrowMark11").css("marker-end", "url(#arrowOne)");
					var text = $("#type-conversion-typing").html();
					dynamicPopover('#typesDiv', 'right',text);
				}});
				
			} else if (intro._currentStep == 4) {
				TweenMax.to("#arrowMark15", 1, {attr:{x2: "90.1%"},onComplete:function() {
					$("#arrowMark15").css("marker-end", "url(#arrowOne)");
					var text ="<b>In assignment type-conversion</b>, if the two operands in an assignment operation are of different data types, the right-side "
						+ "operand value is automatically converted to the data type of the"
						+ " left-side.<div><div class='popover-height'><a class='introjs-button introjs-duplicate-nextbutton animated zoomIn' onclick='intro.nextStep()'>Next →</a></div><div>";
					dynamicPopover('#remaining','right',text);
				}});
			}
				
			break;
			
			case "automaticTypeValues":
				valueChecking();
				$('.automatic-next').remove();
				intro.refresh();
				$('div[class="popover-content"]').addClass('color-grey');
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#automaticTypeAnimation').removeClass('opacity00');
					$("#automaticTypeValues").removeClass('opacity00');
					$("#automaticTypeAnimation").addClass("border");
					var text = "Here you can edit integer and float values.";
					typing(".introjs-tooltiptext", text, function() {
						$('#automaticAnimationDiv').removeClass('opacity00');
						charAtEnd("intEditor");
						$('.introjs-nextbutton').show();
					});
				});
				break;
				
			case "restart":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#restart').removeClass("opacity00");
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text, function() {
						console.log("I am in restart");
					});
				});
				break;
				
				
			case "mainAssignmentAnimationDiv":
				$('div[class="popover-content"]').addClass('color-grey');
				$('.color-grey a').remove();
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#mainAssignmentAnimationDiv').removeClass('opacity00');
					$('#intValType, #zValue').removeClass('opacity00');
					$("#mainAssignmentAnimationDiv").addClass('border');	
					var text = "Here float value <b class='ct-code-b-yellow'>37.5</b> is assigned to integer type "
								+ "variable i.e, <b class='ct-code-b-yellow'>z</b>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn a" onclick="assignmentAnimationFinal()">Next →</a>');
					});
				});
				break;
				
			case "automaticTypeAnimation":
				$('.introjs-nextbutton').hide();
				intro.refresh();
				$('.introjs-helperLayer ').one('transitionend', function() {
				$('#intEditor, #floatEditor').attr('contenteditable','false');
				 var text = "In the current situation since the variable  <b class='ct-code-b-yellow'>y</b> is the data type  float which is higher "
					 +"rank than in the value stored in  <b class='ct-code-b-yellow'>x</b> is automatically converted to float.";
				typing(".introjs-tooltiptext", text, function() {
					$('#automaticAnimationDiv').removeClass('opacity00');
					$('#sum').removeClass('opacity00');
					$("#intText").text(parseInt($("#intEditor").text()));
					var l1 = $("#intEditor").offset();
					$("#intText").offset({"top":l1.top,"left":l1.left});
					TweenMax.to("#intText", 1, {opacity:1, top : 0, left : 0,onComplete : function() {
						var intVal = $('#intText').text();
						var intValue = $('#intText').text();
						intVal = intVal+".0";
						flipEffect("#intText",intVal, function() {
							var text = "<span class ='ct-code-b-yellow'>"+intValue+"</span> is converted to float value beacuse<b class ='ct-code-b-yellow'> y </b>has higher rank"
										+ " than <b class ='ct-code-b-yellow'>x</b>.";
							$(".introjs-tooltiptext").append("<ul id='ulTag'><li></li></ul>");
							typing(".introjs-tooltiptext ul li:last-child", text, function() {
								$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="flipAnimation()">Next →</a>');
							});
						});
					}});
					
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
	intro.nextStep();
}

function revealAssignment() {
	 TweenMax.to("#arrowMark14", 1, {attr:{x2: "95.1%"},onComplete:function() {
		 $("#arrowMark14").css("marker-end", "url(#arrowOne)");
	 }});
}

function revealImplicitAndExplicit() {
	$('div[class="popover-content"]').addClass('color-grey');
	$('.color-grey a').remove();
	 TweenMax.to("#arrowMark1", 1, {attr:{y2: "26%"},onComplete:function() {
		TweenMax.to("#arrowMark3", 1, {attr:{x1: "29%"}});
		TweenMax.to("#arrowMark2", 1, {attr:{x1: "69%"},onComplete:function() {
			 $("#arrowMark4, #arrowMark5").css("marker-end", "url(#arrow)");
			TweenMax.to("#arrowMark4", 1, {attr:{y2: "39%"}});
			TweenMax.to("#arrowMark5", 1, {attr:{y2: "39%"},onComplete:function() {
				$('#implicitDiv').removeClass('opacity00');
				$('#explicitDiv').removeClass('opacity00');
				TweenMax.to("#arrowMark12", 1, {attr:{x2: "2%"},onComplete:function() {
					$("#arrowMark12").css("marker-end", "url(#arrowOne)");
					var text = $('#implicitExampleType').html();
					dynamicPopover('#implicitAndExplictDiv','left',text);
				}});
				
			}});
		}});
	}}); 
	
}

function revealAutomaticAndAssignment() {
	$('div[class="popover-content"]').addClass('color-grey');
	$('.color-grey a').remove();
		TweenMax.to("#arrowMark6", 1, {attr:{y1: "63%"},onComplete:function() {
			TweenMax.to("#arrowMark7", 1, {attr:{x1: "69.1%"}});
			TweenMax.to("#arrowMark8", 1, {attr:{x2: "18.1%"},onComplete:function() {
				$("#arrowMark9").css("marker-end", "url(#arrow)");
				$("#arrowMark10").css("marker-end", "url(#arrow)");
				TweenMax.to("#arrowMark10", 1, {attr:{y2: "80%"}});
				TweenMax.to("#arrowMark9", 1, {attr:{y2: "80%"},onComplete:function() {
				$('#automaticAndAssignmentDiv').removeClass('opacity00');
				TweenMax.to("#arrowMark13", 1, {attr:{x2: "2.1%"},onComplete:function() {
					$("#arrowMark13").css("marker-end", "url(#arrowOne)");
					var text ="In <b>automatic type-conversion,</b> the data type having lower rank is converted automatically into higher rank data before the operation proceeds.";
					dynamicPopover('#automaticAndAssignmentDiv', 'left',text);
					$('.popover-exp').last().append('<div class="popover-height automatic-next"><a class="introjs-button introjs-duplicate-nextbutton animated zoomIn" onclick="intro.nextStep()">Next →</a></div>');
				}});
				}});
			}});
		}});
}

function flipAnimation() {
	$('.user-btn').remove();
	$("#floatText").text($("#floatEditor").text());
	var floatVal = $('#floatText').text();
	var dotPos =  floatVal.indexOf(".");
	if (dotPos == -1 ) {
		floatVal = floatVal+".0";
		$("#floatText").text(floatVal);
	} 
	var l2 = $('#floatEditor').offset();
	$("#floatText").offset({"top":l2.top,"left":l2.left});
	TweenMax.to("#floatText", 1, {opacity:1, top : 0, left : 0,onComplete : function() {
			if (dotPos == 0) {
				floatVal = "0" + floatVal;
				flipEffect("#floatText",floatVal, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="autoTypeFinalResult()">Next →</a>');
				});
			} else if (dotPos == (floatVal.length - 1)) {
				floatVal = floatVal + "0";
				flipEffect("#floatText",floatVal, function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="autoTypeFinalResult()">Next →</a>');
				});
			} else {
				$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" onclick="autoTypeFinalResult()">Next →</a>');
			}
	}});
}

function autoTypeFinalResult() {
	$('.user-btn').remove();
	$('#resultVal').text($('#sumMain').text());
	$('#result').removeClass('opacity00');
	var sumOffset = $('#sumMain').offset();
	$('#resultVal').offset({"top":sumOffset.top,"left":sumOffset.left});
	TweenMax.to("#resultVal", 1, {opacity:1, top : 0, left : 0,onComplete: function() {
		$('#resultVal').removeClass('opacity00');
		var resultFlip = parseInt($('#intText').text()) + parseFloat($('#floatText').text());
		resultFlip = resultFlip.toString();
		 if (resultFlip.indexOf('.') == -1) {
			resultFlip = resultFlip + ".0";
		} 
		flipEffect("#resultVal", resultFlip, function() {
			$('#textSpan1').empty();
			$('.clicked').remove();
			intro.refresh();
			$('.introjs-nextbutton').show();
		});  
	}});
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

function valueChecking() {
	$("#intEditor, #floatEditor").on("click keydown keyup", function(e) {
		var max = $(this).attr("maxlength");
		$(".error-msg").remove();
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
		if ($(this).attr("id") == "floatEditor" && (e.keyCode == 190 || e.keyCode == 110) && $(this).text().indexOf('.') == -1 && $(this).text().length <= max) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			if($(this).attr("id") == "intEditor") {
				$(".introjs-tooltiptext").append("<div class='error-msg'>Max length is 3.</div>");
			} else {
				$(".introjs-tooltiptext").append("<div class='error-msg'>Max length is 5.</div>");
			}
			e.preventDefault();
		}
	});
	
}

function assignmentAnimationFinal() {
	$('.user-btn').remove();
	$('#resultOfAssignmetnt').removeClass('opacity00');
	var  r = $('.red').offset();
	$('#assignmentFlip').offset({"top":r.top,"left":r.left + 4});
	TweenMax.to("#assignmentFlip", 1, {opacity:1, top : 0, left : 0,onComplete : function() {
		$('#assignmentFlip').removeClass('opacity00');
		flipEffect("#assignmentFlip",37, function() {
			$('.introjs-nextbutton').show();
		});
	}});
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

function dynamicPopover(selector, position, text, callBackFunction) {
	$(selector).popover({
		trigger : "focus",
		content: "<div class='popover-exp opacity00'>" + text + "</div>",
		html : true,
 placement: position
	});
	$(selector).popover("show");
$(selector).next().find(".popover-exp").removeClass("opacity00").addClass("animated fadeIn").one("animationend", function() {
  if (typeof callBackFunction === "function") {
			callBackFunction();
		 }

});
}