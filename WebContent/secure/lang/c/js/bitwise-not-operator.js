var intro;
var typingInterval = 5;
var zeros1 = '';
var binaryNumber = "";
var number = "";
var count = 0;
var flipSpeed;
var tl = new TimelineLite();
var bitwiseNotOperatorReady = function() {
	$("[contenteditable=true]").on("keydown keyup", function(e) { // conditions to enter text
		if ($('#firstNum').val() != "" && $('#shiftNum').val() != "") {
			//$('.introjs-nextbutton').show();
			if ($('#shiftNum').val() == "9") {
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 2 characters.</div>");
			} else {
				$('.introjs-nextbutton').show();
			} 
		} else {
			$('.introjs-nextbutton').hide();
		}
		if ((e.shiftKey)) {
			e.preventDefault();
		}
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		
	    if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) && ($(this).val().length) > max) {
	    	$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 2 characters.</div>");
	    	e.preventDefault();
	    }
	    
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || e.which == 8 || e.which == 46)) {
			return true;
		} else {
			e.preventDefault();
		}
 	});
	
	
introSteps();
	function introSteps() {	
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#informationDiv",
				intro : "",
				position:"right",
				tooltipClass: "hide"
			},{
				element : "#inputDiv",
				intro : "",
				position:"bottom",
				tooltipClass: "hide"
			},{
				element : "#binaryValueDiv",
				intro : "",
				position:"right",
				tooltipClass: "hide"
			},{
				element : "#restart",
				intro : "",
				position : "right"
			}
		]});
		
		intro.onbeforechange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "inputDiv":
				$("#values > span").remove();
				$("#onesComplementValue > span").remove();
			break;
			case "binaryValueDiv":
				$("#values > span").remove();
				$("#onesComplementValue > span").remove();
			break;		
			}
		});
		
		intro.onafterchange(function(targetElement) {
			
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
				intro._introItems[intro._currentStep]["animation"] = "repeat";
			}
			
			if (intro._introItems[intro._currentStep]["isCompleted"]) {
				
				if (intro._currentStep != 0) {
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
			case "informationDiv":
				$('.introjs-nextbutton').hide();
				$("#informationDiv").css({"z-index": "999999999","background-color": "rgb(243, 235, 235)"});
				$("#li1").fadeTo(500, 1, function() {
					$("#li2").fadeTo(500, 1, function() {
						$("#informationDiv").css({"z-index": "999999999"});
						intro.nextStep();
					});
				});
			break;
			case "inputDiv":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').hide();
					$("#firstNum").val("");
					TweenMax.to("#inputDiv", 1, {"opacity" : "1"});
					TweenMax.to("#firstNum", 1, {"opacity" : "1"});
					TweenMax.to("#shiftNum", 1, {"opacity" : "1", onComplete:function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "Enter value to arrive at the <span class='ct-code-b-yellow'>complement (~)</span> of that value.";
						typing(".introjs-tooltiptext", text, function() {
							$("#firstNum, #shiftNum").effect( "highlight",{color: 'yellow'}, 1500 );
							$("#firstNum").focus();
						});
					}});
				});
			break;
			case "binaryValueDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				zeros1 = "";
				var value = $('#firstNum').val();
				var positiveNumber = Math.abs(value);
				var num1 = parseInt(positiveNumber, 10).toString(2);
				count = num1.length;
				
				flipSpeed = 120 / (count * 60);
				
					for(var i=num1.length; i < 16; i++) {
						zeros1 = 0 + zeros1;
					}
					$.each((zeros1 + num1).split(""), function(ind, val) {
						number = number + " " + val;
						$("#values").append("<span id= binaryBox" + ind + " class='box text-center ct-code-b-black opacity00'><span class='opacity00' id= binarySpan"+ ind +">"+ val +"</span></span>");
					});
				intro.refresh();				
				$(".introjs-helperLayer ").one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					/* var text = "The given number <span class='ct-code-b-yellow'>" + $('#firstNum').val() + "</span> is represented in its <span class='ct-code-b-yellow'>binary</span> representation form."; */
					var text = "The given number <span class='ct-code-b-yellow'>" + $('#firstNum').val() + "</span> will be converted to its binary form."
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'showBinaryDigits()'>Next &#8594;</a>");			
					});
				});
			break;
			case "restart":
				$('.introjs-nextbutton').hide();
				$('#informationDiv').css({"z-index": "0"});
				$('.introjs-tooltip').css('min-width', '130px');
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to restart.";
						typing(".introjs-tooltiptext", text, function() {
							
						});
					}});
				});
				break;
			}
	  });
		
		intro.start();
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
	}
}
function typing(typingId, typingContent,callBackFunction) {
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), flipSpeed / 2, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), flipSpeed / 2, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function showBinaryDigits() {
	$(".nextButton").remove();
	$("#values").prepend("<span class='margin-top20'>Binary number :&emsp;&emsp;&emsp;&emsp;</span>");
	for (var i = 0; i < $("#values > span").length; i++) {
		TweenMax.to("#binaryBox" + i, 1, {opacity : 1});
		TweenMax.from($("#binaryBox" + i), 0.5, {top: -100});
	}
	matter();
}

function matter() {
	$('.introjs-tooltip').removeClass('hide');
	var text = "Now, let us convert the given number <span class='ct-code-b-yellow'>" + $("#firstNum").val() + "</span>" 
		+ " into its binary representation";
	$(".introjs-tooltiptext > ul").append("<li></li>");
	typing(".introjs-tooltiptext > ul li:last-child", text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'fillValues()'>Next &#8594;</a>");
	});
	}
	
	function fillValues() {
	$(".nextButton").remove();
	for (var i = $("#values > span").length - 1; i >= 0; i--) {
		$("#binarySpan" + i).removeClass("opacity00").fadeIn("slow", 1);
	}
	for (var i = 0; i < $("#values > span").length; i++) {
		$("#onesComplementValue").append("<span id= 'complementValue" + i + "' class='box-yellow text-center ct-code-b-black opacity00'><span style='display:inline-block;' id= 'complementValueSpan" + i + "'>" + 0 + "</span></span>");
	}
	$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'createComplementBoxes()'>Next &#8594;</a>");
}

function createComplementBoxes() {
	$(".nextButton").remove();
	$("#onesComplementValue").prepend("<span class='margin-top20'>One's complement : </span>");
	for (var i = 0; i < ($("#onesComplementValue > span").length -2); i++) {
		var l1 = $("#binaryBox" + i).offset();
		$("#complementValue" + i).offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to("#complementValue" + i, 1, {opacity : 1});
		TweenMax.to("#complementValue" + i,1,{top:0,left:0});
		$("#complementValueSpan" + i).text($("#binaryBox" + i).text());
	}
	var length = $("#onesComplementValue > span").length;
	$('.introjs-tooltip').removeClass('hide');
	var text = "The <span class='ct-code-b-yellow'>one's complement</span> form involves converting <span class='ct-code-b-yellow'>1's</span> to <span class='ct-code-b-yellow'>0's</span>" 
		+ " and <span class='ct-code-b-yellow'>0's</span> to <span class='ct-code-b-yellow'>1's</span>."
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'flipToComplement(" + length + ")'>Next &#8594;</a>");
	});
}

function flipToComplement(id) {
	$(".nextButton").remove();
	if(id >= 0) {
		if ($("#complementValueSpan" + id).text() == 0) {
			flipEffect("#complementValueSpan" + id, 1, function() {
				id--;
				count--;
				if (count < 0) {
					var value = $('#firstNum').val();
					var positiveNumber = Math.abs(value);
					var num1 = parseInt(positiveNumber, 10).toString(2);
					flipSpeed = 120 / (($("#values > span").length - num1.length) * 60);
				}
				
				flipToComplement(id);
			});
		}
		else if ($("#complementValueSpan" + id).text() == 1) {
			flipEffect("#complementValueSpan" + id, 0, function(){
				id--;
				count--;
				if (count < 0) {
					var value = $('#firstNum').val();
					var positiveNumber = Math.abs(value);
					var num1 = parseInt(positiveNumber, 10).toString(2);
					flipSpeed = 120 / (($("#values > span").length - num1.length) * 60);
				}
				flipToComplement(id);
			});
	  	}
	} else {
		var text = "After fliping, the <span class='ct-code-b-yellow'>one's complement</span> of " 
			+ "<span class='ct-code-b-yellow'>" + $("#firstNum").val() + "</span> is represented" 
			+ " as <span class='ct-code-b-yellow'> ~" + $("#firstNum").val() + "</span>."
		typing(".introjs-tooltiptext", text, function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	}
}