var intro;
var typingInterval = 5;
var zeros1 = '';
var binaryNumber = "";
var number = "";
var bitwiseRightShiftOperatorReady = function() {
	var flag = true;
	$("[contenteditable=true]").on("keydown keyup", function(e) { // conditions to enter text
		$(".ct-code-b-red").remove();
		if ($('#firstNum').val() != "" && $('#shiftNum').val() != "" && $('#firstNum').val() != "-") {
			if ($("#type").val() == "short int" && ($("#typeQualifiers").val() == "unsigned" || $("#typeQualifiers").val() == "signed")) {
				if ($('#shiftNum').val() < 9) {
					$('.introjs-nextbutton').show();
				} else {
					$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Since you have selected short int and the maximum size of short int is only 8 bits please, select a value for positions which is lesser than or equal to 7 (<= 7).</div>");
					$('.introjs-nextbutton').hide();
				}
			}
			if ($("#type").val() == "int" && ($("#typeQualifiers").val() == "unsigned" || $("#typeQualifiers").val() == "signed")) {
				if ($('#shiftNum').val() < 17) {
					$('.introjs-nextbutton').show();
				} else {
					$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Since you have selected int and the maximum size of int is only 16 bits please, select a value for positions which is lesser than or equal to 15 (<= 15).</div>");
					$('.introjs-nextbutton').hide();
				}
			}
			if ($("#type").val() == "long int" && ($("#typeQualifiers").val() == "unsigned" || $("#typeQualifiers").val() == "signed")) {
				if ($('#shiftNum').val() < 33) {
					$('.introjs-nextbutton').show();
				} else {
					$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Since you have selected long int and the maximum size of long int is only 32 bits please, select a value for positions which is lesser than or equal to 31 (<= 31).</div>");
					$('.introjs-nextbutton').hide();
				}
			}
		} else {
			$('.introjs-nextbutton').hide();
		}
		if ((e.shiftKey)) {
			e.preventDefault();
		}
		var max = $(this).attr("maxlength");
		//109,173,189
		if(($("#type").val() == "long int" || $("#type").val() == "short int" || $("#type").val() == "int")  && $("#typeQualifiers").val() == "signed") {
			if ($('#firstNum').val().length >= 1) {
				flag = false;
			} else if ($('#firstNum').val().indexOf('-') == -1) {
					flag = true;
				}
			
			if ((e.which == 109 || e.which == 189) && flag) {
				flag = false;
				return true;
			}
		}
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
		
	$("#typeQualifiers").click(function() {
		if ($("#typeQualifiers").val() == "signed") {
			console.log("entered in if");
			$("#firstNum").attr({"placeholder": "eg: -1 or +1"});
		}
		if ($("#typeQualifiers").val() == "unsigned") {
			$("#firstNum").attr({"placeholder": "eg: 34"});
		}
		$('.introjs-nextbutton').hide();
		$("#shiftNum").val("")
		$("#firstNum").val("")
	});
		
	$("#type").click(function() {
		$('.introjs-nextbutton').hide();
		$("#shiftNum").val("")
		$("#firstNum").val("")
	});
		
	introSteps();
};
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
			position:"bottom" 
		},{
			element : "#binaryValueDiv",
			intro : "",
			position:"right"
		},{
			element : "#animationDiv",
			intro : "",
			position : "left",
		},{
			element : "#resultDiv",
			intro : "",
			position : "left"
		},{
			element : "#restart",
			intro : "",
			position : "right"
		}
	]});
	
	intro.onafterchange(function(targetElement) {
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
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				TweenMax.to("#inputDiv", 1, {"opacity" : "1"});
				TweenMax.to("#firstNum", 1, {"opacity" : "1"});
				TweenMax.to("#shiftNum", 1, {"opacity" : "1", onComplete:function() {
					var text = "Select a qualifier, data type and enter the values to understand how a " 
						+ "bitwise <span class='ct-code-b-yellow'>right shift</span> operator works.";
					typing(".introjs-tooltiptext", text, function() {
						$("#firstNum, #shiftNum").effect( "highlight",{color: 'yellow'}, 1500 );
						$("#firstNum").focus();
					});
				}});
			});
		break;
		case "binaryValueDiv" : 
			$('.introjs-nextbutton').hide();
			var value = $('#firstNum').val();
			if (value.startsWith("-")) {
				n = (value.substring(1));
			} else {
				n = $('#firstNum').val();
			}
			var positiveNumber = Math.abs(value);
			var num1 = parseInt(positiveNumber, 10).toString(2);
				if ($("#type").val() == "int" && ($("#typeQualifiers").val() == "unsigned" || $("#typeQualifiers").val() == "signed")) {
					for(var i=num1.length; i < 16; i++) {
						 zeros1 = 0 + zeros1;
					}
					$.each((zeros1+num1).split(""), function(ind, val) {
						number = number + " " + val;
						binaryNumber =  binaryNumber + " " + '<span id="index' + ind + '" class="val" >' + val + '</span>';
					});
				} else if ($("#type").val() == "short int" && ($("#typeQualifiers").val() == "unsigned" || $("#typeQualifiers").val() == "signed")) {
					for(var i=num1.length; i < 8; i++) {
						 zeros1 = 0 + zeros1;
					}
					$.each((zeros1+num1).split(""), function(ind, val) {
						number = number + " " + val;
						binaryNumber =  binaryNumber + " " + '<span id="index' + ind + '" class="val" >' + val + '</span>';
					});
				} else if ($("#type").val() == "long int" && ($("#typeQualifiers").val() == "unsigned" || $("#typeQualifiers").val() == "signed")) {
					for(var i=num1.length; i < 32; i++) {
						 zeros1 = 0 + zeros1;
					}
					$.each((zeros1+num1).split(""), function(ind, val) {
						number = number + " " + val;
						binaryNumber =  binaryNumber + " " + '<span id="index' + ind + '" class="val" >' + val + '</span>';
					});
				}
			$(".introjs-helperLayer ").one('transitionend', function() {
				if ($("#type").val() == "short int") {
					var text = "This is the <span class='ct-code-b-yellow'>8</span> bit <span class='ct-code-b-yellow'>binary</span> representation " 
						+ "of the given number <span class='ct-code-b-yellow'>" + n + ".";
				} else if ($("#type").val() == "int") {
					var text = "This is the <span class='ct-code-b-yellow'>16</span> bit <span class='ct-code-b-yellow'>binary</span> representation " 
						+ "of the given number <span class='ct-code-b-yellow'>" + n + ".";
				} else if($("#type").val() == "long int") {
					var text = "This is the <span class='ct-code-b-yellow'>32</span> bit <span class='ct-code-b-yellow'>binary</span> representation " 
						+ "of the given number <span class='ct-code-b-yellow'>" + n + ".";
				}
				typing(".introjs-tooltiptext", text, function() {
					TweenMax.to("#aSpan", 1, {"opacity" : "1", onComplete:function() {
						$("#values").append("<span>" + $("#firstNum").val() + "&emsp;</span>");
						$("#values").append("<span id='arrow1' class='arrow' align='center'><i style='margin-left:10px;' class='fa fa-arrow-right'></i></span>");
						$('#originalValue').append(binaryNumber);
						intro.refresh();
						$(".introjs-helperLayer ").one('transitionend', function() {
						TweenMax.to("#value", 1, {"opacity" : "1",});
							$("#shift").append('<span class="opacity00" id = "shiftSpan"><span id="binaryValue">' + binaryNumber + ' &emsp;</span><span>&#60;&#60;</span>&emsp; <span id ="shiftValue">' + $('#shiftNum').val() + '</span></span>');
							if (value < 0) {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'negativeValues();'>Next &#8594;</a>");
							}
							else {
								$('.introjs-nextbutton').show();
							}
						});
					}});
				});
			});
		break;
		case "animationDiv":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "Let us see the <span class='ct-code-b-yellow'>right shift</span> operator in action.";
				typing(".introjs-tooltiptext", text, function() {
					$('#valueDiv').append('<span id = "full"><span class = "opacity00" id="number2">' + binaryNumber + '&emsp;</span><span class="opacity00" id="shift2">>>&emsp;</span><span class="opacity00" id="shiftVal2">' + $("#shiftNum").val() + '</span></span>');
					if ($("#firstNum").val() >= 0) {
						var l1 = $("#originalValue").offset();
						$("#number2").html($("#originalValue").html()).removeClass("opacity00").offset({
						  "top":l1.top,
						  "left":l1.left
						});
						$("#originalValue").effect( "highlight",{color: 'white'}, 2000 ).css({"z-index": "99999999"});
					} else if ($("#firstNum").val() < 0) {
						var l1 = $("#twosComplementResult").offset();
						$("#number2").html($("#twosComplementResult").html()).removeClass("opacity00").offset({
						  "top":l1.top,
						  "left":l1.left
						});
						$("#originalValue").effect( "highlight",{color: 'white'}, 2000 ).css({"z-index": "99999999"});
					}
					TweenMax.to("#number2",1,{top:0,left:0, onComplete:function() {
						var l1 = $("#shift1").offset();
						$("#shift2").text($("#shift1").text()).removeClass("opacity00").offset({
						  "top":l1.top,
						  "left":l1.left
						});
						$("#shift1").effect( "highlight",{color: 'white'}, 2000 ).css({"z-index": "99999999"});
						TweenMax.to("#shift2",1,{top:0,left:0, onComplete:function() {
						var l1 = $("#shiftNum").offset();
						$("#shiftVal2").text($("#shiftNum").val()).removeClass("opacity00").offset({
						  "top":l1.top,
						  "left":l1.left + $("#shiftNum").width()/2
						});
						$("#shiftNum").addClass('z-index');
						TweenMax.to("#shiftVal2",1,{top:0,left:0, onComplete:function() {
							$("#shiftNum").removeClass('z-index');
							if ($("#type").val() == "int" || $("#type").val() == "short int" || $("#type").val() == "long int") {
								for(var i = 0,j = $("#originalValue > span").text().length-1; i < $("#originalValue > span").text().length; i++, j--) {
									$("#table tr").eq(0).append("<td class='index' id='index" + i + "'><span class='index opacity00' id='indexSpan" + i + "''><b>" + j + "</b></span></td>");
									$("#table tr").eq(1).append("<td id='tdBorder" + i + "' class='td-border opacity00'><span id='cell" + i + "' ' class='innerRow opacity00'>0</span></td>");
								}
									//index of table							
									for (var i=0; i < $("#originalValue > span").text().length; i++) {
										$('#indexSpan' + i).removeClass('opacity00');
										TweenMax.from('#indexSpan' + i, 1, {top:-100});
									}
								// arrange value in the table
								$("#number2").effect( "highlight",{color: 'yellow'}, 1500,function() {
									if ($("#firstNum").val() >= 0) {
										TweenMax.to(".td-border", 1, {"opacity" : "1", onComplete:function() {
											for(var i = 0; i < $("#originalValue > span").text().length ; i++) {
												var tdoffset = $("#valueDiv #index" + i).offset();
												$('#cell' + i).text($("#valueDiv #index" + i).text()).offset({
													"top": tdoffset.top,
													"left": tdoffset.left
												});
												TweenMax.to('#cell' + i,1 ,{opacity:1, top :0, left : 0});
											}
										}});
									} else {
										TweenMax.to(".td-border", 1, {"opacity" : "1", onComplete:function() {
											for(var i = 0; i < $("#originalValue > span").text().length ; i++) {
												var tdoffset = $("#valueDiv #twosResultSpan"+ i).offset();
												$('#cell'+i).text($("#valueDiv #twosResultSpan" + i).text()).offset({
													"top": tdoffset.top,
													"left": tdoffset.left
												}); 
												TweenMax.to("#cell" + i, 1, {"opacity" : "1"});
												TweenMax.to('#cell' + i,1 ,{opacity:1, top :0, left : 0});
											}
										}});
									}
								});
							}
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'matter();'>Next &#8594;</a>");
						}});
					}});
				}});
			});
		});
		break;
		case "resultDiv":
			$(".introjs-helperLayer").one('transitionend', function() {
				if ($("#firstNum").val() >= 0) {
					var num1 = $(".td-border > span").text();
				} else {
					var num1 = $("#originalResult > span").text();
				}
				var n = parseInt(num1, 2).toString(10);
				intro.refresh();
				if ($("#firstNum").val() >= 0) {
					var text="Result for " + $("#firstNum").val() + "<span class='ct-code-b-blue'><b> &gt;&gt;</b></span> " 
						+ parseInt($("#shiftNum").val()) + " is = (" + num1 + ")<sub>2</sub> ="
						+ " <span class='ct-code-b-green'>(" + n + ")<sub>10</sub></span> or simply <span class='ct-code-b-green'>" + n + "</span>.";
				} else {
					var text="Result for " + $("#firstNum").val() + "<span class='ct-code-b-blue'><b> &gt;&gt;</b></span> " 
					+ parseInt($("#shiftNum").val()) + " is = (" + num1 + ")<sub>2</sub> ="
					+ " <span class='ct-code-b-green'>(-" + n + ")<sub>10</sub></span> or simply <span class='ct-code-b-green'>-" + n + "</span>.";
				}
				typing(".result-div", text, function() {
					intro.refresh();
					if ($("#firstNum").val() >= 0) {
						var text1 = "Finally, the decimal value we get after applying <span class='ct-code-b-yellow'>right shift</span> by <span class='ct-code-b-yellow'>" + parseInt($('#shiftNum').val()) + "</span> positions"
							+ " on <span class='ct-code-b-yellow'>" + parseInt($("#firstNum").val()) + "</span> is : (" + num1 + ")<sub>2</sub> = <span class='ct-code-b-yellow'>" + n + "</span>.";
					} else {
						var text1 = "Finally, the decimal value we get after applying <span class='ct-code-b-yellow'>right shift</span> by <span class='ct-code-b-yellow'>" + parseInt($('#shiftNum').val()) + "</span> positions"
						+ " on <span class='ct-code-b-yellow'>" + parseInt($("#firstNum").val()) + "</span> is : (" + num1 + ")<sub>2</sub> = <span class='ct-code-b-yellow'>-" + n + "</span>.";
					}
					typing(".introjs-tooltiptext", text1, function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "restart":
			$('.introjs-nextbutton').hide();
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
	$('.introjs-nextbutton').show();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
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
	TweenMax.to($(selector), 0.1, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.1, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}
	
function negativeValues() {
	$(".nextButton").remove();
	intro.refresh();
	var text ="As the given value is <span class='ct-code-b-yellow'>negative</span> value it will be " 
		+ "converted into <span class='ct-code-b-yellow'>two's complement</span> value."
	typing(".introjs-tooltiptext", text, function() {
		if ($("#type").val() == "int" &&  $("#typeQualifiers").val() == "signed") {
			for(var i = 0; i < 16; i++) {
				$("#complementValue").append('<span class="result opacity00" style="display:inline-block;" id="result'+ i + '">0</span>&nbsp;');
			}
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'onesComplement(15);'>Next &#8594;</a>");
		} else if ($("#type").val() == "short int" && $("#typeQualifiers").val() == "signed") {
			for(var i = 0; i < 8; i++) {
				$("#complementValue").append('<span class="result opacity00" style="display:inline-block;" id="result'+ i + '">0</span>&nbsp;');
			}
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'onesComplement(7);'>Next &#8594;</a>");
		} else if ($("#type").val() == "long int" && $("#typeQualifiers").val() == "signed") {
			for(var i = 0; i < 32; i++) {
				$("#complementValue").append('<span class="result opacity00" style="display:inline-block;" id="result'+ i + '">0</span>&nbsp;');
			}
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'onesComplement(31);'>Next &#8594;</a>");
		}
	});
}
	
function onesComplement(id) {
	$(".nextButton").remove();
	intro.refresh();
	if (id >= 0) {
  		$('#originalValue').effect("highlight", {color: '#FF0000'}, 500, function() {
  			for (; id >= 0; id--) {
 					var l1 = $("#index" + id).offset();
 					var l2 = $("#result" + id).text($("#index" + id).text()).offset({
 				    	"top" :l1.top,
 				    	"left":l1.left
 				    });
		  		$('#result' + id).removeClass('opacity00');
		  		TweenMax.to("#result" + id, 0.2, {top:0,left:0});
 				  	if (id <= 0) {
 						var length = $("#originalValue span").length -1;
 						$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'flip(" + length + ")'>Next &#8594;</a>");
 					}
  			}
  		});
	} 
}
	
function flip(id) {
	$(".nextButton").remove();
	if (id >= 0) {
		if($("#result" + id).text() == 0) {
			flipEffect("#result" + id, 1, function() {
				id--;
				flip(id);
			});
		}
		else if ($("#result" + id).text() == 1) {
			flipEffect("#result" + id, 0, function() {
				id--;
				flip(id);
			});
	  	} 
	} else {
  		var text = "This is the <span class='ct-code-b-yellow'>one's complement</span> value of the given number.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'lineAndOne();'>Next &#8594;</a>");
		});
  	} 
}

function lineAndOne() {
	$(".nextButton").remove();
	intro.refresh();
	var text = "Now we will add <span class='ct-code-b-yellow'>1</span> to the <span class='ct-code-b-yellow'>one's complement</span>" 
		+ " value to get two's complement value.";
	typing(".introjs-tooltiptext", text, function() {
		TweenMax.to("#addOne", 1, {"opacity" : "1", onComplete:function() {
			TweenMax.to("#line", 1, {"opacity" : "1", onComplete:function(){
				$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'twosComplement();'>Next &#8594;</a>");
			}});
		}});
	});
}

function twosComplement() {
	$(".nextButton").remove();
	intro.refresh();
	
	for (i = 0; i < $("#originalValue > span").length; i++) {
		$("#twosComplementResult").append('<span class="twos-result-span opacity00" id="twosResultSpan' + i + '">0</span>&nbsp;');
	}
	intro.refresh();
	
	var len = parseInt($('#originalValue span').length-1);
	if ($("#complementValue span:last-child").text() == 0) {
		intro.refresh();
		twosComplementWithoutOne(len);
	} else {
		intro.refresh();
		twosComplementWithOne(len);
	}
	var text ="This is the binary value of <span class='ct-code-b-yellow'>" + $('#firstNum').val() + "</span>."
	typing(".introjs-tooltiptext", text, function() {	
	$('.introjs-nextbutton').show();
	});
}

function twosComplementWithOne(i) {
	if(i >= 0) {
		if (i == $('#originalValue span').length-1) {
			if ($("#complementValue span:last-child").text() == 1) {
				TweenMax.to("#twosResultSpan" + i, 1, {"opacity" : "1"});
					$("#twosResultSpan" + i).text("0");
			}
		
			if($("#result" + i).prev().text() == 0) {
				i--;
				TweenMax.to("#twosResultSpan" + i, 1, {"opacity" : "1"});
					$("#twosResultSpan" + i).text("1");
					i--;
					two(i)
			}
			
			else if ($("#result" + i).prev().text() == 1) {
				 i--;
				 abc(i);
			}
		} 
	}
}


function abc(i) {
	if($("#result" + i).text() != 0) {
		if($("#result" + i).text() == 1) {
			TweenMax.to("#twosResultSpan" + i, 1, {"opacity" : "1"});
				$("#twosResultSpan" + i).text("0");
				i--;
				abc(i);
		}
	} else {
		TweenMax.to("#twosResultSpan" + i, 1, {"opacity" : "1"});
			$("#twosResultSpan" + i).text("1");
			i--;
			two(i);
	}
}

function two(i) {
	if(i >= 0) {
		if ($("#result" + i).text() == 1) {
			TweenMax.to("#twosResultSpan" + i, 1, {"opacity" : "1"});
				$("#twosResultSpan" + i).text("1");
	  	} else {
	  		TweenMax.to("#twosResultSpan" + i, 1, {"opacity" : "1"});
				$("#twosResultSpan" + i).text("0");
	  	}
		i--;
		two(i);
	}
}
 
function twosComplementWithoutOne(i) {
	if(i >= 0) {
		if (i == parseInt($('#originalValue span').length-1)) {
			if ($("#complementValue span:last-child").text() == 0) {
				TweenMax.to("#twosResultSpan" + parseInt($('#originalValue span').length-1), 1, {"opacity" : "1", onComplete:function() {
					$("#twosResultSpan" + parseInt($('#originalValue span').length-1)).text("1");
				}});
			}
		} else {
			if ($("#result" + i).text() == 1) {
				TweenMax.to("#twosResultSpan" + i, 1, {"opacity" : "1"});
					$("#twosResultSpan" + i).text("1");
		  	} else if ($("#result" + i).text() == 0) {
		  		TweenMax.to("#twosResultSpan" + i, 1, {"opacity" : "1"});
					$("#twosResultSpan" + i).text("0");
		  	}
		}
		i--;
		twosComplementWithoutOne(i);
	}
}

function matter() {
	$(".nextButton").remove();
	if (parseInt($("#shiftNum").val()) == 0) {
		var text = "As you entered <span class='ct-code-b-yellow'>0</span> it will not shift any value. So, the value remains same.";
		typing(".introjs-tooltiptext", text, function() {
			$('.introjs-nextbutton').show();
		});
	} else {
		var a = parseInt($("#originalValue > span").length - 1);
		var text ="Since we have choosen to shift the bits by <span class='ct-code-b-yellow'>" + parseInt($("#shiftNum").val()) + "</span> position" 
			+ " we are removing the <span class='ct-code-b-yellow'>right</span> most <span class='ct-code-b-yellow'>" + parseInt($("#shiftNum").val()) + "</span> bits and we will be " 
			+ "shifting the remaining bits by <span class='ct-code-b-yellow'>" + parseInt($("#shiftNum").val()) + "</span> positions.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'removeZeros("+ a +")'>Next &#8594;</a>");
		});
	}
}

function removeZeros(i) {
	$(".nextButton").remove();
	intro.refresh();
	for (;i >= $("#originalValue > span").text().length - $("#shiftNum").val(); i--) {
		$("#tdBorder" + i).effect("highlight",{color: 'red'}, 1000);
		TweenMax.to(('#cell' + i), 1, {top: -100, opacity: 0});
	}
	$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'movingElements();'>Next &#8594;</a>");
}
	
function movingElements() {
	$(".nextButton").remove();
	intro.refresh();
	$(".innerRow").css({"top":"0"});
	var count=$("#originalValue > span").text().length - 1;
 		var len = count - $("#shiftNum").val()
 		while ($("#shiftNum").val() <= count) {
		$('#cell' + count).empty();
		$('#cell' + count).css({"top" : "0"});
		$("#cell"+ count).css({'opacity' : '1'});
		var index = count - 1;
		var l1 = $("#cell" + index).offset();
		var val = $("#cell" + len).text();
		$("#cell" + count).text(val).offset({
			"top"  : l1.top,
			"left" : l1.left
		});
     	TweenMax.to("#cell" + count, 1, {top :0, left:0,onComplete:function(){
     	}});
		len--;
       	count--;
	}
 		for(var i = 0; i < $("#shiftNum").val(); i++) {
 			$('#cell' + i).css({"opacity":"0"});
 			if ($("#firstNum").val() > 0) {
  			$('#cell' + i).text(0);
 			} else {
 				$('#cell' + i).text(1);
 			}
 		}
 		if ($("#firstNum").val() > 0) {
 			var text = "The newly created <span class='ct-code-b-yellow'>" + parseInt($("#shiftNum").val()) + "</span> vacant positions to the <span class='ct-code-b-yellow'>left</span> will be filled with <span class='ct-code-b-yellow'>zeros</span>.";
		typing(".introjs-tooltiptext", text, function() {
 				$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'addZeros();'>Next &#8594;</a>");
		});
 		}
 		else {
 			var text="As you have given a negative number, The newly created <span class='ct-code-b-yellow'>" + parseInt($("#shiftNum").val()) + "</span> vacant positions to the <span class='ct-code-b-yellow'>right</span> will be filled with <span class='ct-code-b-yellow'>ones</span>.";
 			typing(".introjs-tooltiptext", text, function() {
 				$(".nextButton").remove();
  			$("#table").append("<div id='arrow' class='arrow' align='center'><i class='fa fa-arrow-up'></i></div>");
  			matter2();
 			});
	}
}

function matter2() {
	$(".nextButton").remove();
	$("#arrow").remove();
	if ($("#cell0").text() == 0) {
		$("#cell0").text(1);
	}
	$("#arrow").remove();
	$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'addZeros();'>Next &#8594;</a>");
}

function addZeros() {
	$(".nextButton").remove();
	var shiftLength = parseInt($("#shiftNum").val());
	TweenMax.fromTo($("table  tr:eq(1)  td:nth-child(-n+"+(shiftLength)+") span"),0.5,{top:'-100px'},{opacity:1,top:'0px'});
	if ($("#firstNum").val() >= 0) {
			$('.introjs-nextbutton').show();
	} else {
		var text = "Now, let us reconvert the binary number in <span class='ct-code-b-yellow'>two's complement</span> form" 
			+ " to get a decimal number to arrive at the final result."
		typing(".introjs-tooltiptext", text, function() {		
			$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'negativeNumberResult();'>Next &#8594;</a>");
		});
	}
}

function negativeNumberResult() {
	$(".nextButton").remove();
	intro.refresh();
	$("#resultDiv").before("<div id='reComplement' class='col-xs-offset-3 col-xs-9 re-complement' style='text-align:center;width:-moz-fit-content;width:initial;'>"
		+ "<div id='resultAfterShift' style='text-align=center;width=-moz-fit-content;'></div>"
		+ "<div id='reComplementValue' class ='margin-top20'></div>"
		+ "<div id='addOne2' style='float:right;' class='opacity00'>1&nbsp;</div>"
		+ "<div id='line2' class='col-xs-12 line padding0 opacity00'></div>"
		+ "<div id='originalResult'></div>"
		+ "</div>");
	for (var i = 0 ; i < $("#originalValue > span").text().length; i++) {
		$("#resultAfterShift").append('<span class="opacity00" id="resultAfterShiftValue' + i + '">0</span>&nbsp;');
	}
	for (var i = 0 ; i < $("#originalValue > span").text().length; i++) {
		$("#reComplementValue").append('<span class="opacity00" id="reComplementValue' + i + '">0</span>&nbsp;');
	}
	for (var i = 0 ; i < $("#originalValue > span").text().length; i++) {
		$("#originalResult").append('<span class="opacity00" id="originalResult' + i + '">0</span>&nbsp;');
	}
	for(var i = 0; i < $("#originalValue > span").text().length; i++) {
		var l1 = $("#cell" + i).offset();
		$("#resultAfterShiftValue" + i).html($("#cell" + i).html()).offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to('#resultAfterShiftValue' + i,1 ,{opacity:1, top :0, left : 0});
	}
	var text ="This is the value after performing <span class='ct-code-b-yellow'>right shift</span> operation.";
	typing(".introjs-tooltiptext", text, function() {	
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'reComplement();'>Next &#8594;</a>");
	});
}

function reComplement() {
	$(".nextButton").remove();
	intro.refresh();
	var text = "Let us first arrive at the one's complement value."
	typing(".introjs-tooltiptext", text, function() {	
		for (i = $("#originalValue > span").length-1; i >= 0; i--) {
			if ($("#resultAfterShiftValue" + i).text() == 0) {
				$("#reComplementValue" + i).removeClass('opacity00');
				$("#reComplementValue" + i).text(1);
			} else if ($("#resultAfterShiftValue" + i).text() == 1) {
				$("#reComplementValue" + i).removeClass('opacity00');
				$("#reComplementValue" + i).text(0);
			}
		}
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'secondLineAndOne();'>Next &#8594;</a>");
	});
}

function secondLineAndOne() {
	$(".nextButton").remove();
	intro.refresh();
	var text ="Now add <span class='ct-code-b-yellow'>1</span> to the one's complement value to get two's complement value.";
	typing(".introjs-tooltiptext", text, function() {
		TweenMax.to('#addOne2',1 ,{"opacity" : "1",onComplete:function() {
			TweenMax.to('#line2',1 ,{"opacity" : "1"});
		}});
		$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'originalResult();'>Next &#8594;</a>");
	});
}

function originalResult() {
	$(".nextButton").remove();
	intro.refresh();
	var len = $('#originalValue span').length-1;
	if($("#reComplementValue span:last-child").text() == 0) {
		intro.refresh();
		twosReComplementWithoutOne(len);
	} else {
		intro.refresh();
		twosReComplementWithOne(len);
	}
	var text ="This is the result value.";
	typing(".introjs-tooltiptext", text, function() {	
		$('.introjs-nextbutton').show();
	});
}

function twosReComplementWithoutOne(i) {
	if (i >= 0) {
		if (i == $('#originalValue span').length-1) {
			if ($("#reComplementValue span:last-child").text() == 0) {
				TweenMax.to("#originalResult" + parseInt($('#originalValue span').length-1), 1, {"opacity" : "1", onComplete:function() {
					$("#originalResult" + parseInt($('#originalValue span').length-1)).text("1");
				}});
			}
		} else {
			if ($("#result" + i).text() == 1) {
				TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("1");
		  	} else {
		  		TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("0");
			}
		}
		i--;
		twosReComplementWithoutOne(i);
	}
}

function originalResult() {
	$(".nextButton").remove();
	intro.refresh();
	var len = $('#originalValue span').length-1;
	if($("#reComplementValue span:last-child").text() == 0) {
		intro.refresh();
		twosReComplementWithoutOne(len);
	} else {
		intro.refresh();
		twosReComplementWithOne(len);
	}
	$('.introjs-nextbutton').show();
}

function twosReComplementWithoutOne(i) {
	if(i >= 0) {
		if (i == $('#originalValue span').length-1) {
			if ($("#reComplementValue span:last-child").text() == 0) {
				TweenMax.to("#originalResult" + parseInt($('#originalValue span').length-1), 1, {"opacity" : "1", onComplete:function() {
					$("#originalResult" + parseInt($('#originalValue span').length-1)).text("1");
				}});
			}
		} else {
			if ($("#reComplementValue" + i).text() == 1) {
				TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("1");
		  	} else {
		  		TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("0");
		  	}
		}
		i--;
		twosReComplementWithoutOne(i);
	}
}

function twosReComplementWithOne(i) {
	if(i >= 0) {
		if (i == $('#originalValue span').length-1) {
			if ($("#reComplementValue span:last-child").text() == 1) {
				TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("0");
			}
		
			if($("#reComplementValue" + i).prev().text() == 0) {
				i--;
				TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("1");
				i--;
				sameValues(i)
			}
			
			else if ($("#reComplementValue" + i).prev().text() == 1) {
				i--;
				carry(i);
			}
		} 
	}
}
	
function carry(i) {
	if($("#reComplementValue" + i).text() != 0) {
		if($("#reComplementValue" + i).text() == 1) {
			TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("0");
				i--;
				carry(i);
		}
	} else {
		TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
			$("#originalResult" + i).text("1");
			i--;
			sameValues(i);
	}
}
	
function sameValues(i) {
	if(i >= 0) {
		if ($("#reComplementValue" + i).text() == 1) {
			TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("1");
	  	} else {
	  		TweenMax.to("#originalResult" + i, 1, {"opacity" : "1"});
				$("#originalResult" + i).text("0");
	  	}
		i--;
		sameValues(i);
	}
}