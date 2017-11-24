
var intro;
var typingInterval = 1;
var zeros1 = '';
var binaryNumber = "";
var number = "";
var count = 0;
var flipSpeed;

var onesComplementReady = function() {
	var flag = true;
 	$("[contenteditable=true]").on("keydown keyup", function(e) {
 		if ($('#firstNum').val() != "") {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
		if ((e.shiftKey)) {
			e.preventDefault();
		}
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).val().length) > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 2 characters.</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
			e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").val().length == 0) {
			$('.introjs-nextbutton').hide();
		} else {
			$('.introjs-nextbutton').show();
		} 
		
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
			e.preventDefault();
			}
		}
		
	});
	
	$("#restart").click(function() {
		$('#firstNum').val('');
		$('#type').val('');
		location.reload(); 
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
			tooltipClass: "hide",
			position:"bottom" 
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
		switch(elementId) {
		case "inputDiv":
			TweenMax.to("#inputDiv", 1, {"opacity" : "0"});
			$("#firstNum").val("");
			for (var i = 0; i < $("#values > span").length; i++) {
				$("#values > span").remove();
				$("#binaryBox" + i).remove();
			}
			$("#onesComplementValue").empty();
			$("#firstNum").focus();
			break;
		case "binaryValueDiv":
			zeros1 = "";
			break;
		}
	}); 
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
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
		var elementId = targetElement.id;
		switch (elementId) {
			case "informationDiv":
				$('.introjs-nextbutton').hide();
				$("#li1").fadeTo(1000, 1, function() {
					$("#li2").fadeTo(1000, 1, function() {
						$("#informationDiv").css({"z-index": "999999999"});
						intro.nextStep();
					});
				});
			break;
			case "inputDiv":
				$(".introjs-prevbutton, .introjs-nextbutton").hide();
				$(".introjs-helperLayer").one('transitionend', function() {
					TweenMax.to("#inputDiv", 1, {"opacity" : "1"});
					TweenMax.to("#firstNum", 1, {"opacity" : "1"});
					TweenMax.to("#shiftNum", 1, {"opacity" : "1", onComplete:function() {
						$(".introjs-tooltip").removeClass("hide");
						var text = "Select a data type and enter a value to perform "+
									"<span class='ct-code-b-yellow'>one's complement</span>.";
						typing(".introjs-tooltiptext", text, function() {
							$("#firstNum, #shiftNum").effect( "highlight",{color: 'yellow'}, 1500 );
							$("#firstNum").focus();
						});
					}});
				});
			break;
			case "binaryValueDiv" : 
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				var value = $('#firstNum').val();
				var positiveNumber = Math.abs(value);
				var num1 = parseInt(positiveNumber, 10).toString(2);
				count = num1.length;
				flipSpeed = 120 / (count * 60);
				if ($("#type").val() == "int") {
					for(var i=num1.length; i < 16; i++) {
						zeros1 = 0 + zeros1;
					}
					$.each((zeros1+num1).split(""), function(ind, val) {
						number = number + " " + val;
						$("#values").append("<span id= binaryBox" + ind + " class='box text-center ct-code-b-black opacity00'>"+
										"<span class='opacity00' id= binarySpan"+ ind +">"+ val +"</span></span>");
					});
					
				} else if ($("#type").val() == "short int") {
					for(var i=num1.length; i < 8; i++) {
						zeros1 = 0 + zeros1;
					}
					$.each((zeros1+num1).split(""), function(ind, val) {
						number = number + " " + val;
						$("#values").append("<span id= binaryBox" + ind + " class='box text-center ct-code-b-black opacity00'>"+
										"<span class='opacity00' id= binarySpan"+ ind +">"+ val +"</span></span>");
					});
				} else if ($("#type").val() == "long int") {
					for(var i=num1.length; i < 32; i++) {
						zeros1 = 0 + zeros1;
					}
					$.each((zeros1+num1).split(""), function(ind, val) {
						number = number + " " + val;
						$("#values").append("<span id= binaryBox" + ind + " class='box text-center ct-code-b-black opacity00'>"+
										"<span class='opacity00' id= binarySpan"+ ind +">"+ val +"</span></span>");
					});
				}
				intro.refresh();				
				$(".introjs-helperLayer ").one('transitionend', function() {
					if ($("#type").val() == "short int") {
						var text = "<ul><li>Since the choosen data type is short int " 
							+ "and <span class='ct-code-b-yellow'>short int</span> occupies <span class='ct-code-b-yellow'>8 bits</span>," 
							+ " let us consider <span class='ct-code-b-yellow'>8 slots</span>.</li></ul>";
					} else if ($("#type").val() == "int") {
						var text = "<ul><li>Since the choosen data type is <span class='ct-code-b-yellow'>int</span> and" 
							+ " int occupies <span class='ct-code-b-yellow'>16 bits</span>," 
							+ " let us consider <span class='ct-code-b-yellow'>16 slots</span>.</li></ul>";
					} else if($("#type").val() == "long int") {
						var text = "<ul><li>Since the choosen data type is <span class='ct-code-b-yellow'>long int</span> and" 
							+ " long int occupies <span class='ct-code-b-yellow'>32 bits</span>, let us " 
							+ "consider <span class='ct-code-b-yellow'>32 slots</span>.</li></ul>";
					}
					$(".introjs-tooltip").removeClass("hide");
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'showBinaryDigits()'>Next &#8594;</a>");			
					});
				});
			break;
			case "restart":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$('#informationDiv').css({"z-index": "0"});
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
	$('.introjs-nextbutton').hide();
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
for (var i = 0; i < $("#values > span").length; i++) {
	TweenMax.to("#binaryBox" + i, 1, {opacity : 1});
	TweenMax.from($("#binaryBox" + i), 0.5, {top: -100});
}
matter();
}

function matter() {
var text = "Now, let us convert the given number <span class='ct-code-b-yellow'>" + $("#firstNum").val() + "</span> into its binary representation";
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
	$("#onesComplementValue").append("<span id= 'complementValue" + i + "' class='box-yellow text-center ct-code-b-black opacity00'>"+
							"<span style='display:inline-block;' id= 'complementValueSpan" + i + "'>" + 0 + "</span></span>");
}
$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'createComplementBoxes()'>Next &#8594;</a>");
}

function createComplementBoxes() {
$(".nextButton").remove();
for (var i = 0; i < $("#onesComplementValue > span").length; i++) {
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
var text = "The <span class='ct-code-b-yellow'>one's complement</span> form involves converting "+
			"<span class='ct-code-b-yellow'>1's</span> to <span class='ct-code-b-yellow'>0's</span>" 
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
	var text = "After fliping, the <span class='ct-code-b-yellow'>one's complement</span> of <span class='ct-code-b-yellow'>" + $("#firstNum").val() + "</span> is represented as <span class='ct-code-b-yellow'> ~" + $("#firstNum").val() + "</span> value."
	typing(".introjs-tooltiptext", text, function() {
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').show();
	});
}
}