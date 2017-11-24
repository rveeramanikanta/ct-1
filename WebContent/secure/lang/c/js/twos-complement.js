var intro;
var typingInterval = 1;
var zeros1 = '';
var binaryNumber = "";
var number = "";
var flipSpeed;

var twosComplementReady = function() {
	$("#firstNum").on("keydown keyup", function(e) { // conditions to enter text
		if(!$("#firstNum").val().startsWith('-') || $('#firstNum').val().indexOf('-', $('#firstNum').val().indexOf('-') + 1) != -1) {
			$(".ct-code-b-red").remove();
			$('.introjs-nextbutton').hide();
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please enter a negative value.</div>");
			return;
		}
		if ($('#firstNum').val() != "" && $('#firstNum').val().length >= 2 && 
				$('#firstNum').val().indexOf('-', $('#firstNum').val().indexOf('-') + 1) == -1) {
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
		}
		if ((e.shiftKey)) {
			e.preventDefault();
		}
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		
		if ((e.which != 8) && (e.which != 46) && (e.which != 37) && (e.which != 39) && ($(this).val().length) > max) {
	  		e.preventDefault();
		}
	    
		if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || e.which == 8 || e.which == 46)) {
			return true;
		} else {
			e.preventDefault();
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
				element : "#animationDiv1",
				intro : "",
				tooltipClass: "hide",
				position:"bottom"
			},{
				element : "#animationDiv2",
				intro : "",
				tooltipClass: "hide",
				position : "top",
				animateStep: "firstAnimationDiv2"
			},{
				element : "#decimalValue",
				intro : "",
				position : "left",
				tooltipClass: "hide",
				animateStep: "display1"
			},{
				element : "#animationDiv2",
				intro : "",
				position : "top",
				tooltipClass: "hide",
				animateStep: "secondAnimationDiv2"
			},{
				element : "#decimalValue",
				intro : "",
				position : "top",
				animateStep: "display2",
				tooltipClass: "hide"
			}
		]});
		
		intro.onbeforechange(function(targetElement) {
			var elementId = targetElement.id;
			switch(elementId) {
			case "inputDiv":
				TweenMax.to("#inputDiv", 1, {"opacity" : "0"});
				$("#firstNum").val("");
				$("#carryBit").addClass("opacity00");
				for (var i = 0; i < $("#values > span").length; i++) {
					$("#values > span").remove();
					$("#binaryBox" + i).remove();
				}
				$("#onesComplementValue").empty();
				$("#twosComplementValue").empty();
				$("#addOne").empty();
				
				$("#firstNum").focus();
				break;
			case "binaryValueDiv":
				zeros1 = "";
				break;
			case "animationDiv1":
				$("#twosComplementValue").empty();
				$("#addOne").empty();
				$("#carryBit").addClass("opacity00");
				$("#secondBinaryValue").empty();
				
				break;
			case "animationDiv2":
				$('.introjs-nextbutton').hide();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "firstAnimationDiv2":
					$("#decimalValue").fadeTo(10, 0);
					$("#minus").remove();
					$("#secondAddOne, #result, #secondOnesComplementValue").empty();
					$("#secondBinaryValue0").css({"background-color" : "#f0e68c"});
					for (var i = 0; i < $("#values > span").length; i++) {
						$("#secondBinaryValue" + i).remove();
					}
					break;
				case "secondAnimationDiv2":
					$("#display,#restart").remove();
					$("#secondAddOne,#result,#secondOnesComplementValue").empty();
					break;
				}
			case "decimalValue":
				$('.introjs-nextbutton').hide();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "display1":
					$("#secondAddOne,#result,#secondOnesComplementValue").empty();
					$("#minus").remove();
					break;
				case "display2":
					$("#display,#restart").remove();
					break;
				}
			}
		}); 
		intro.onafterchange(function(targetElement) {
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
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
				$("#li1").fadeTo(500, 1, function() {
					$("#li2").fadeTo(500, 1, function() {
						$("#li3").fadeTo(500, 1, function() {
							$("#li4").fadeTo(500, 1, function() {
								$("#li5").fadeTo(500, 1, function() {
									$("#informationDiv").css({"z-index": "999999999"});
									$("#table").removeClass("opacity00");
									intro.nextStep();
								});
							});
						});
					});
				});
				break;
			case "inputDiv":
				$('.nextButton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#inputDiv", 1, {"opacity" : "1"});
					TweenMax.to("#firstNum", 1, {"opacity" : "1"});
					TweenMax.to("#shiftNum", 1, {"opacity" : "1", onComplete:function() {
						$(".introjs-tooltip").removeClass("hide");
						var text = "Select a data type and provide a negative number.";
						typing(".introjs-tooltiptext", text, function() {
							$("#firstNum, #shiftNum").effect( "highlight",{color: 'yellow'}, 1500 );
							$("#firstNum").focus();
						});
					}});
				});
				break;
			case "animationDiv1" : 
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "backward") {
						addOne();
					} else {
						twoComplement();
					}
				});
				break;
			case "animationDiv2" : 
				$("#restart").hide();
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var animateStep = intro._introItems[intro._currentStep].animateStep;
					switch(animateStep) {
					case "firstAnimationDiv2" :
						for (var i = 0; i < $("#values > span").length; i++) {
							$("#secondBinaryValue").append("<span id= 'secondBinaryValue" + i + 
								"' class='box-yellow text-center ct-code-b-black opacity00'>"+
								"<span style='display:inline-block;' id= 'secondBinaryValueSpan" + i + "'>" + 0 + "</span></span>");
						}
						takingTwosComplement();
						break;
					case "secondAnimationDiv2":
						secondOnesComplementBoxes();
						break;
					}
				});
				break;
			case "decimalValue":
				$('.introjs-nextbutton').hide();
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
				case "display1":
					$('.introjs-nextbutton').hide();
					$(".introjs-helperLayer ").one('transitionend', function() {
						$('html, body').animate({
					        scrollTop: $("#decimalValue").offset().top
					    }, 2000);
						$("#decimalValue").fadeTo(1000, 1, function() {
							$("#displayText").append("<span class='ct-code-b-red' id = 'minus'>-</span>");
							$(".introjs-tooltip").removeClass("hide");
							var text = "Since the <span class='ct-code-b-yellow'>left most bit</span> is " 
										+ "<span class='ct-code-b-yellow'>1</span> the sign of the decimal value" 
										+ " will be taken as <span class='ct-code-b-yellow'>negative</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
					break;
				case "display2":
					var dec = $("#result > span:nth-child(n+2)").text();
					var num1 = parseInt(dec, 2).toString(10);
				    $(".introjs-helperLayer ").one('transitionend', function() {
						$("#minus").append("<span class='ct-code-b-red' id='display'>" + num1 + "</span>");
						$(".introjs-tooltip").removeClass("hide")
						var text = "This is the decimal value.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-prevbutton').show();
							$(".introjs-tooltipbuttons").append('<span class="btn btn-warning restartBtn" id="restart">Restart</span>');
							$("#restart").click(function() {
								$('#firstNum').val('');
								$('#type').val('');
								location.reload(); 
							});
						});
				    });
					break;
				}
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
function twoComplement() {
	$(".introjs-tooltip").addClass("hide");
	$("#displayText").removeClass("opacity00")
	for (var i = 0; i < $("#values > span").length; i++) {
		$("#values > span").remove();
		$("#binaryBox" + i).remove();
	}
	zeros1 = "";
	$("#onesComplementValue").empty();
	$("#twosComplementValue").empty();
	$("#addOne").empty();
	$("#carryBit").addClass("opacity00");
	$("#secondBinaryValue").empty();
		
	$(".prevButton,.nextButton").remove();
	$('.introjs-prevbutton,.introjs-nextbutton').hide();
	var value = $('#firstNum').val();
	var positiveNumber = Math.abs(value);
	var num1 = parseInt(positiveNumber, 10).toString(2);
	count = num1.length;
	flipSpeed = 120 / (count * 60);
	zeros1 = "";
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
	
	if ($("#type").val() == "short int") {
		var text = "<ul><li>Since the choosen data type is <span class='ct-code-b-yellow'>short int</span> " 
					+ "and <span class='ct-code-b-yellow'>short int</span> occupies <span class='ct-code-b-yellow'>8 bits</span>," 
					+ " let us consider <span class='ct-code-b-yellow'>8 slots</span>.</li></ul>";
	} else if ($("#type").val() == "int") {
		var text = "<ul><li>Since the choosen data type is <span class='ct-code-b-yellow'>int</span> and" 
					+ " <span class='ct-code-b-yellow'>int</span> occupies <span class='ct-code-b-yellow'>16 bits</span>," 
					+ " let us consider <span class='ct-code-b-yellow'>16 slots</span>.</li></ul>";
	} else if($("#type").val() == "long int") {
		var text = "<ul><li>Since the choosen data type is <span class='ct-code-b-yellow'>long int</span> and" 
					+ " <span class='ct-code-b-yellow'>long int</span> occupies <span class='ct-code-b-yellow'>32 bits</span>, let us " 
					+ "consider <span class='ct-code-b-yellow'>32 slots</span>.</li></ul>";
	}
	$(".introjs-tooltip").removeClass("hide");
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'showBinaryDigits()'>Next &#8594;</a>");			
	});
		
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
	var text = "Now, let us convert the given number <span class='ct-code-b-yellow'>" + $("#firstNum").val() + 
				"</span> into its binary representation.";
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
	for (var i = 0; i < ($("#values > span").length - 1); i++) {
		$("#onesComplementValue").append("<span id= 'complementValue" + i + "' class='box-yellow text-center ct-code-b-black opacity00'>"+
							"<span style='display:inline-block;' id= 'complementValueSpan" + i + "'>" + 0 + "</span></span>");
	}
	var text = "The <span class='ct-code-b-yellow'>one's complement</span> form involves converting <span class='ct-code-b-yellow'>1's</span> "
				+	"to <span class='ct-code-b-yellow'>0's</span>" 
				+ " and <span class='ct-code-b-yellow'>0's</span> to <span class='ct-code-b-yellow'>1's</span>.";
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'createComplementBoxes()'>Next &#8594;</a>");
	});
}

function createComplementBoxes() {
	$(".nextButton").remove();
	$("#onesComplementValue").prepend("<span class='margin-top20'>One's complement : </span>");
	for (var i = 0; i < ($("#onesComplementValue > span").length - 1); i++) {
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
	$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'flipToComplement(" + length + ")'>Next &#8594;</a>");
}

function flipToComplement(id) {
	$(".nextButton").remove();
	if(id >= 0) {
		if($("#complementValueSpan" + id).text() == 0) {
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
		var text = "This is <span class='ct-code-b-yellow'>one's complement</span> value.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'addOne();'>Next &#8594;</a>");
			$(".introjs-prevbutton").show();
		});
	}
}

function addOne() {
	$(".introjs-tooltip").addClass("hide");
	$(".prevButton,.nextButton").remove();
	$(".introjs-nextbutton,.introjs-prevbutton").hide();

	$("#addOne").prepend("<span class='margin-top20'>Adding 1 :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>");
	for (var i = 0; i < ($("#values > span").length - 1); i++) {
		$("#addOne").append("<span id= 'addOneDiv" + i + "' class='box-yellow text-center ct-code-b-black opacity00'>"+
							"<span style='display:inline-block;' id= 'addOne" + i + "'>" + 1 + "</span></span>");
	}
	$("#addOne > span").addClass("green-color-css");
	$("#addOne > span:first-child").removeClass("green-color-css");
	$("#addOne > span:last-child").removeClass("green-color-css");
	$("#addOne > span:last-child").removeClass("opacity00");
	$("#addOne > span:last-child").after(" + ");
		for (var i = 0; i < ($("#values > span").length - 1); i++) {
			$("#twosComplementValue").append("<span id= 'twosComplementValue" + i + "' class='box-yellow text-center ct-code-b-black opacity00'>"+
							"<span class='opacity00' style='display:inline-block;' id= 'twosComplementValueSpan" + i + "'>" + 0 + "</span></span>");
		}
		intro.refresh();
		$(".introjs-tooltip").removeClass("hide");
		var text = "Now let us add <span class='ct-code-b-yellow'>1</span>"+
					" to the resultant <span class='ct-code-b-yellow'>one's complement</span> value.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'twosComplement();'>Next &#8594;</a>");
	});
}
	 

function twosComplement() {
	$(".nextButton").remove();
	$("#twosComplementValue").prepend("<span class='margin-top20'>Two's complement : </span>")
	for (var i = 0; i < ($("#twosComplementValue > span").length - 1); i++) {
		var l1 = $("#complementValue" + i).offset();
		$("#twosComplementValue" + i).offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to("#twosComplementValue" + i, 1, {opacity : 1});
		TweenMax.to("#twosComplementValue" + i,1,{top:0,left:0});
	}
	var text = "By adding 1 to <span class='ct-code-b-yellow'>one's complement</span> value we will get the "+
				"<span class='ct-code-b-yellow'>two's complement</span> value."
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'twosComplementProcess();'>Next &#8594;</a>");
	});
}

function twosComplementProcess() {
	$(".nextButton").remove();
	var len = $("#values > span").length - 2;
	if ($("#onesComplementValue > span:last-child").text() == 0) {
		intro.refresh();
		twosComplimentWithoutOne(len);
	} else {
		intro.refresh();
		twosComplimentWithOne(len);
	}
}

function twosComplimentWithoutOne(i) {
	if (i == $('#onesComplementValue > span').length - 1) {
		$("#FDiv" + i).effect( "highlight",{color: 'lightgreen'}, 500);
	}
	$("#complementValue" + i).effect( "highlight",{color: 'lightgreen'}, 500);
	if (i >= 0) {
		if (i == ($('#onesComplementValue > span').length - 2)) {
			if ($("#onesComplementValue > span:last-child").text() == 0) {
				TweenMax.to("#twosComplementValueSpan" + i, 0, {"opacity" : "1"});
				$("#twosComplementValueSpan" + i).text(1);
			}
			i--;
			setTimeout(function() {
				twosComplimentWithoutOne(i);
			},800);
		} else {
			if ($("#complementValue" + i).text() == 1) {
				var l1= $("#complementValueSpan" + i).offset();
				$("#twosComplementValueSpan" + i).text($("#complementValueSpan" + i).text()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				TweenMax.to("#twosComplementValueSpan" + i, 0.2, {top:0,left:0});
		  	} else {
				var l1= $("#complementValueSpan" + i).offset();
				$("#twosComplementValueSpan" + i).text($("#complementValueSpan" + i).text()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				TweenMax.to("#twosComplementValueSpan" + i, 0.2, {top:0,left:0});
			}
			i--;
			setTimeout(function() {
				twosComplimentWithoutOne(i);
			},800);
		}
	} else {
		commonText();
	}
}
 
function twosComplimentWithOne(i) {
	if (i == $('#onesComplementValue > span').length - 1) {
		$("#addOneDiv" + i).effect( "highlight",{color: 'lightgreen'}, 500);
	}
	$("#complementValue" + i).effect( "highlight",{color: 'lightgreen'}, 500);
	if ($("#onesComplementValue > span:last-child").text() == 1) {
		TweenMax.to("#twosComplementValueSpan" + i, 0, {"opacity" : "1"});
		$("#twosComplementValueSpan" + i).text(0);
	}
	if ($("#complementValue" + i).prev().text() == 0) {
		i--;
		TweenMax.to("#addOneDiv" + i, 0, {"opacity" : "1"});
		TweenMax.to("#twosComplementValueSpan" + i, 0, {"opacity" : "1"});
		$("#twosComplementValueSpan" + i).text(1);
		setTimeout(function() {
			i--;
			$("#carrySpan").addClass("z-index-carry-css");
			$("#carryBit").removeClass("opacity00");
			noCarry(i);
		},800);
	} else if ($("#complementValue" + i).prev().text() == 1) {
		setTimeout(function() {
			i--;
			$("#carrySpan").addClass("z-index-carry-css");
			$("#carryBit").removeClass("opacity00");
			carry(i);
		},800);
	} 
}

function carry(i) {
	if(i >= 0) {
		$("#complementValue" + i).effect( "highlight",{color: 'lightgreen'}, 500);
		if($("#complementValue" + i).text() != 0) {
			if($("#complementValue" + i).text() == 1) {
				TweenMax.to("#addOneDiv" + i, 0, {"opacity" : "1"});
				TweenMax.to("#twosComplementValueSpan" + i, 1, {"opacity" : "1"});
				$("#twosComplementValueSpan" + i).text(0);
				i--;
				setTimeout(function() {
					carry(i);
				},800);
			}
		} else if ($("#complementValue" + i).text() == 0) {
			if (i == $('span[id^="complementValueSpan"]').text().lastIndexOf('0')) {
		  		TweenMax.to("#addOneDiv" + i, 0, {"opacity" : "1"});
				TweenMax.to("#twosComplementValueSpan" + i, 1, {"opacity" : "1"});
				$("#twosComplementValueSpan" + i).text(1);
	  		} 
			i--;
			setTimeout(function() {
				noCarry(i);
			},800);
		}
	} else {
		commonText();
	}
} 

function noCarry(i) {
	if(i >= 0) {
		$("#complementValue" + i).effect( "highlight",{color: 'lightgreen'}, 500);
		if ($("#complementValue" + i).text() == 1) {
			TweenMax.to("#twosComplementValueSpan" + i, 0, {"opacity" : "1"});
			$("#twosComplementValueSpan" + i).text(1);
		} else if ($("#complementValue" + i).text() == 0) {
	  		TweenMax.to("#twosComplementValueSpan" + i, 0, {"opacity" : "1"});
			$("#twosComplementValueSpan" + i).text(0);
		}
		i--;
		setTimeout(function() {
			noCarry(i);
		},800);
	} else {
		commonText();
	}
}

function commonText() {
	var text = "This is the <span class='ct-code-b-yellow'>two's complement</span> value."
	typing(".introjs-tooltiptext", text, function() {
		$("#secondBinaryValue").prepend("<span class='margin-top20 opacity00' id='titlespan'>Two's complement : </span>");
		$('.introjs-nextbutton').show();
		$(".introjs-tooltipbuttons").prepend("<a class='introjs-button prevButton' onclick = 'twoComplement();'>&#8592; Back</a>");
	});
}

function takingTwosComplement() {
	$(".nextButton, .prevButton").remove();
	$("#titlespan").removeClass("opacity00");
	for (j = 0 ; j < ($("#twosComplementValue > span").length - 1); j++) {
		var l1= $("#twosComplementValue" + j).offset();
		$("#secondBinaryValue" + j).text($("#twosComplementValue" + j).text()).removeClass("opacity00").offset({
			"top":l1.top,
			"left":l1.left
		});
		$("#secondBinaryValue" + j).addClass("z-index-transfer yellow-color");
		TweenMax.to("#secondBinaryValue" + j,0.3,{top:0,left:0, onComplete:function() {
			$("#secondBinaryValue" + j).removeClass("z-index-transfer yellow-color");
		}});
	}
	var text = "Below we will repeat the same steps to convert a <span class='ct-code-b-yellow'>two's complement</span> "+
				"representation to arrive at its equivalent decimal number.";
	$(".introjs-tooltip").removeClass("hide");
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'negativeBit();'>Next &#8594;</a>");
	});
}

function negativeBit() {
	$(".nextButton").remove();
	$(".introjs-tooltip").addClass("hide");
	$("#secondBinaryValue0").effect("highlight",{color: 'blue'}, 1500, function() {
		$("#secondBinaryValue0").css({"background-color" : "blue"});
		$(".introjs-tooltip").removeClass("hide");
		var text = "Since the left most bit is <span class='ct-code-b-yellow'>1</span> in "
			+ "<span class='ct-code-b-yellow'>two's complement</span> form, we "
			+ "should understand that the given number is a negative number."
		typing(".introjs-tooltiptext", text, function() {
		//	$(".introjs-tooltipbuttons").prepend("<a class='introjs-button prevButton' onclick = 'addOne();'>&#8592; Back</a>");
			$('.introjs-nextbutton').show();
			$('.introjs-prevbutton').show();
		});
	});
}

function secondOnesComplementBoxes() {
	$(".nextButton").remove();
	for (var i = 0; i < ($("#values > span").length - 1); i++) {
		$("#secondOnesComplementValue").append("<span id= 'secondOnesComplementValue" + i + 
				"' class='box-yellow text-center ct-code-b-black opacity00'>"+
				"<span style='display:inline-block;' id= 'secondOnesComplementValueSpan" + i + "'>" + 0 + "</span></span>");
	}
	$("#secondOnesComplementValue").prepend("<span class='margin-top20'>One's complement : </span>");
	for (var i = 1; i < ($("#onesComplementValue > span").length - 1); i++) {
		var l1 = $("#secondBinaryValue" + i).offset();
		$("#secondOnesComplementValue" + i).offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to("#secondOnesComplementValue" + i, 1, {opacity : 1});
		TweenMax.to("#secondOnesComplementValue" + i,1,{top:0,left:0});
		$("#secondOnesComplementValueSpan" + i).text($("#secondBinaryValue" + i).text());
	}
	for (var i = 0; i < ($("#onesComplementValue > span").length - 1); i++) {
		$("#secondAddOne").append("<span id= 'secondAddOneDiv" + i + 
				"' class='box-yellow text-center ct-code-b-black opacity00'><span style='display:inline-block;' id= 'secondAddOne" + 
				i + "'>" + 1 + "</span></span>");
	}
	var length = $("#onesComplementValue > span").length;
	$(".introjs-tooltip").removeClass("hide");
	var text = "The <span class='ct-code-b-yellow'>one's complement</span> will be applied on the reamining bits.";
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton'"+
						" onclick = 'flipToGetOnesComplement(" + length + ");'>Next &#8594;</a>");
	});
}

function flipToGetOnesComplement(id) {
	$(".nextButton").remove();
	if(id >= 1) {
		if($("#secondBinaryValue" + id).text() == 0) {
			flipEffect("#secondOnesComplementValueSpan" + id, 1, function() {
				id--;
				flipToGetOnesComplement(id);
			});
		}
		else if ($("#secondBinaryValue" + id).text() == 1) {
			flipEffect("#secondOnesComplementValueSpan" + id, 0, function(){
				id--;
				flipToGetOnesComplement(id);
			});
	  	}
	} else {
		var text = "Now we will added <span class='ct-code-b-yellow'>1</span> to the resultant "+
					"<span class='ct-code-b-yellow'>one's complement</span> value."
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'secondAddOne();'>Next &#8594;</a>");
		});
	}
}

function secondAddOne() {
	$(".nextButton").remove();
	$("#secondAddOne").prepend("<span class='margin-top20'>Adding 1 :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>");
	$("#secondAddOne > span").addClass("green-color-css");
	$("#secondAddOne > span:first-child").removeClass("green-color-css");
	$("#secondAddOne > span:last-child").removeClass("green-color-css");
	$("#secondAddOne span:last-child").removeClass("opacity00");
	$("#secondAddOne > span:last-child").after(" + ");
	for (var i = 0; i < ($("#values > span").length - 1); i++) {
		$("#result").append("<span id= 'resultDiv" + i + "' class='box-yellow text-center ct-code-b-black opacity00'>"+
							"<span class='opacity00' style='display:inline-block;' id= 'resultSpan" + i + "'>" + 0 + "</span></span>");
	}
	intro.refresh();
	var text = "By adding one to <span class='ct-code-b-yellow'>one's complement</span> we will get the binary form of the resultant decimal number."
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'reTwosComplementProcess();'>Next &#8594;</a>");
	});
}

function reTwosComplementProcess() {
	$(".nextButton").remove();
	$("#result").prepend("<span class='margin-top20'>Result :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>");
	for (var i = 1; i < ($("#twosComplementValue > span").length - 1); i++) {
		var l1 = $("#secondOnesComplementValue" + i).offset();
		$("#resultDiv" + i).offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to("#resultDiv" + i, 1, {opacity : 1});
		TweenMax.to("#resultDiv" + i,1,{top:0,left:0});
	}
	$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'reTwosComplement();'>Next &#8594;</a>");
}

function reTwosComplement() {
	$(".nextButton").remove();
	$(".introjs-tooltip").addClass('hide');
	var text =" "
	typing(".introjs-tooltiptext", text, function() {
		var len = $("#values > span").length - 2;
		if ($("#secondOnesComplementValue > span:last-child").text() == 0) {
			intro.refresh();
			reTwosComplimentWithoutOne(len)
		} else {
			intro.refresh();
			reTwosComplimentWithOne(len);
		}
	});
}

function reTwosComplimentWithoutOne(i) {
	if (i == $('#secondOnesComplementValue > span').length - 1) {
		$("#secondAddOneDiv" + i).effect( "highlight",{color: 'lightgreen'}, 500);
	}
	$("#secondOnesComplementValue" + i).effect( "highlight",{color: 'lightgreen'}, 500);
	if (i >= 0) {
		if (i == $('#onesComplementValue > span').length - 2) {
			if ($("#secondOnesComplementValue > span:last-child").text() == 0) {
				TweenMax.to("#resultSpan" + i, 0, {"opacity" : "1"});
				$("#resultSpan" + i).text(1);
			}
			i--;
			setTimeout(function() {
				reTwosComplimentWithoutOne(i);
			},800);
		} else {
			if ($("#secondOnesComplementValueSpan" + i).text() == 1) {
				var l1= $("#secondOnesComplementValueSpan" + i).offset();
				$("#resultSpan" + i).text($("#secondOnesComplementValueSpan" + i).text()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				TweenMax.to("#resultSpan" + i, 0.2, {top:0,left:0});
		  	} else {
		  		var l1= $("#secondOnesComplementValueSpan" + i).offset();
				$("#resultSpan" + i).text($("#secondOnesComplementValueSpan" + i).text()).removeClass("opacity00").offset({
					"top":l1.top,
					"left":l1.left
				});
				TweenMax.to("#resultSpan" + i, 0.2, {top:0,left:0});
			}
			i--;
			setTimeout(function() {
				reTwosComplimentWithoutOne(i);
			},800);
		}
	} else {
		
		$(".introjs-tooltip").removeClass("hide");
		var dec = $("#result > span:nth-child(n+2)").text(); 
		var res = parseInt(dec, 2).toString(10);
		typing(".introjs-tooltiptext", "The result obtained is the binary value of <span class='ct-code-b-yellow'>" + res + "</span>", function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	}
}
 
function reTwosComplimentWithOne(i) {
	if (i == $('#secondOnesComplementValue > span').length - 1) {
		$("#secondAddOneDiv" + i).effect( "highlight",{color: 'lightgreen'}, 500);
	}
	$("#secondOnesComplementValue" + i).effect( "highlight",{color: 'lightgreen'}, 500);
	if ($("#secondOnesComplementValue > span:last-child").text() == 1) {
		TweenMax.to("#resultSpan" + i, 0, {"opacity" : "1"});
		$("#resultSpan" + i).text(0);
	}
	if ($("#secondOnesComplementValue" + i).prev().text() == 0) {
		i--;
		TweenMax.to("#secondAddOneDiv" + i, 0, {"opacity" : "1"});
		TweenMax.to("#resultSpan" + i, 0, {"opacity" : "1"});
		$("#resultSpan" + i).text(1);
		setTimeout(function() {
			i--;
			$("#carrySpan").addClass("z-index-carry-css");
			$("#carryBit").removeClass("opacity00");
			secondNoCarry(i);
		},800);
	} else if ($("#secondOnesComplementValue" + i).prev().text() == 1) {
		setTimeout(function() {
			i--;
			$("#carrySpan").addClass("z-index-carry-css");
			$("#carryBit").removeClass("opacity00");
			secondCarry(i);
		},800);
	} 
}

function secondCarry(i) {
	if(i >= 0) {
		$("#secondOnesComplementValue" + i).effect( "highlight",{color: 'lightgreen'}, 500);
		if($("#secondOnesComplementValue" + i).text() != 0) {
			if($("#secondOnesComplementValue" + i).text() == 1) {
				TweenMax.to("#secondAddOneDiv" + i, 0, {"opacity" : "1"});
				TweenMax.to("#resultSpan" + i, 1, {"opacity" : "1"});
				$("#resultSpan" + i).text(0);
				i--;
				setTimeout(function() {
					secondCarry(i);
				},800);
			}
		} else if ($("#secondOnesComplementValueSpan" + i).text() == 0) {
			if (i == $('span[id^="secondOnesComplementValueSpan"]').text().lastIndexOf('0')) {
		  		TweenMax.to("#secondAddOneDiv" + i, 0, {"opacity" : "1"});
				TweenMax.to("#resultSpan" + i, 1, {"opacity" : "1"});
				$("#resultSpan" + i).text(1);
	  		} 
			i--;
			setTimeout(function() {
				secondNoCarry(i);
			},800);
		}
	} else {
		var dec = $("#result > span:nth-child(n+2)").text(); 
		var res = parseInt(dec, 2).toString(10);
		$(".introjs-tooltip").removeClass("hide");
		typing(".introjs-tooltiptext", "The result obtained is the binary value of <span class='ct-code-b-yellow'>" + res + "</span>", function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	}
}

function secondNoCarry(i) {
	if(i >= 1) {
		$("#secondOnesComplementValue" + i).effect( "highlight",{color: 'lightgreen'}, 500);
		if ($("#secondOnesComplementValue" + i).text() == 1) {
			TweenMax.to("#resultSpan" + i, 0, {"opacity" : "1"});
			$("#resultSpan" + i).text(1);
		} else if ($("#secondOnesComplementValue" + i).text() == 0) {
	  		TweenMax.to("#resultSpan" + i, 0, {"opacity" : "1"});
			$("#resultSpan" + i).text(0);
		}
		i--;
		setTimeout(function() {
			secondNoCarry(i);
		},800);
	} else {
		var dec = $("#result > span:nth-child(n+2)").text(); 
		var res = parseInt(dec, 2).toString(10);
		$(".introjs-tooltip").removeClass("hide");
		typing(".introjs-tooltiptext", "The result obtained is the binary value of <span class='ct-code-b-yellow'>" + res + "</span>", function() {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		});
	}
}