var input;
var lenOfInput;
var sum;
var typingInterval = 50;
var binaryToOctalReady = function() {
	introGuide();
	if ($("#binaryValue").val().length == 0) {
		 $("#convert").attr("disabled", true);
	}
	
	$("#binaryValue").keydown(function(e) {
		if (e.which == 46 || e.which == 48 || e.which == 8 || e.which == 49 || e.which == 96 || e.which == 97 ) {
			return true;
		} else {
			e.preventDefault();
		}
	});
	
	$("#binaryValue").keyup(function() {
		$("#convert").attr("disabled", false);
		if ($("#binaryValue").val().length == 0) {
			 $("#convert").attr("disabled", true);
		}
		var yourInput = $(this).val();
		re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
		var isSplChar = re.test(yourInput);
		if(isSplChar)
		{
			var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			$(this).val(no_spl_char);
		}
		if ($("#binaryValue").val().length > 0) {
			$("#convert").removeClass("disabled").removeClass("opacity40");
			$("#binaryValue").removeClass("backgroundColor");
			$('.errorText').empty();
		} else {
			$('.errorText').html("<b>Since a binary number can have 0's and 1's, use only 0's and 1's</b>.");
			$("#binaryValue").addClass("backgroundColor");
			$("#convert").addClass("disabled").addClass("opacity40");
			}
		});
	
	$("#convert").click(function() {
		/* if ($('#convert').hasClass('disabled')) {
			return;
		} */
		input = $("#binaryValue").val();
		$("body").keydown(function(e) {
			if (e.keyCode == 13) {
				e.preventDefault();
			}
		});
		/* for (var i = 0; i < input.length; i++) {
			$("#givenBox").append("<td class='binaryBox' id='box"+ i +"'><span id='text"+ i +"'>" + input[i] + "</span></td>");
		} */
		lenOfInput = input.length;
		if (lenOfInput % 3 == 2) {
			input = "0" + input;
		} else if(lenOfInput % 3 == 1) {
			input = "00" + input;
		}
		lenOfInput = input.length;
		for (var i = 0; i < input.length; i++) {
			$("#givenBox").append("<td class='binaryBox1' id='boxtd"+ i +"'><span id='text"+ i +"'>" + input[i] + "</span></td>");
		}
		recursion(0);
	});
};
function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :"#infoDiv",
			intro : "",
			tooltipClass : 'hide',
		}, {
			element : "#table",
			intro : '',
			position : 'right',
		}, {
			element : "#textDiv",
			intro : '',
			position : 'right',
		}, {
			element : "#boxDiv",
			intro : '',
			position : 'right',
		}, {
			element : "#rowDiv",
			intro : '',
			position : 'right',
		}, {
			element : '#positionDiv',
			intro : '',
			position : 'right',
		}, {
			element : "#squareDiv",
			intro : '',
			position : 'right',
		}, {
			element : "#calculationDiv",
			intro : '',
			position : 'right',
		}, {
			element : "#multiplicationDiv",
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : "#additionDiv",
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : "#resultDiv",
			intro : '',
			position : 'right',
		}, {
			element : "#finalDiv",
			intro : '',
			position : 'right',
			tooltipClass : 'hide',
		}, {
			element : "#restart",
			intro : 'Click to restart.',
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		if (elementId == "finalDiv") {
			var input = $("#binaryValue").val();
			if (input.length > 6) {
				$("#finalResult").html("Octal representation of the given binary value (<span class='ct-blue-color' style='font-family: monospace'>" 
						+ $("#binaryValue").val() + "</span>)<sub>2</sub>"+ " is: <span>(" + $("#output0").text() + "" + $("#output3").text() + "" 
							+ $("#output6").text() + "</span>" +")" + "<span class='ct-green-color' id='base'><sub>" + 8 + "</sub></span>");
			} else  if(input.length >3 && input.length <= 6){
				$("#finalResult").html("Octal representation of the given binary value (<span class='ct-blue-color' style='font-family: monospace'>"
						+ $("#binaryValue").val() + "</span>)<sub>2</sub>"+ ''+ " is: <span>(" + $("#output0").text() + "" 
								+ $("#output3").text() + "</span>" +")" + "<span class='ct-green-color'><sub>" + 8 + "</sub></span>");
			} else {
				$("#finalResult").html("Octal representation of the given binary value (<span class='ct-blue-color' style='font-family: monospace'>" 
						+ $("#binaryValue").val() + "</span>)<sub>2</sub>"+ ''+ " is: <span>(" + $("#output0").text() + "</span>" +")" 
						+ "<span class='ct-green-color'><sub>" + 8 + "</sub></span>");
			}
		}
		switch (elementId) {
		case 'infoDiv':
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#list3").fadeTo(300, 1, function() {
							$("#list4").fadeTo(300, 1, function() {
								$("#infoDiv").addClass('z-index9999999');
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					});
				});
			break;
		case 'table':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#table").removeClass("opacity00");
			//	$("#binarylValue").attr("disabled", true);
				var text = "This chart shows the conversion table for three digit <span class='ct-code-b-yellow'>binary</span> groups to "+ 
				"their <span class='ct-code-b-yellow'>octal</span> equivalent digits.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'textDiv':
			$("#binaryValue").attr("disabled", true);
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#textDiv").removeClass("opacity00");
				var text = "Provide a <span class='ct-code-b-yellow'>binary</span> number and click on <span class='convert'>Convert to Octal</span>"+
					" button to understand how a <span class='ct-code-b-yellow'>binary</span> number is converted to "+
					"<span class='ct-code-b-yellow'>octal</span>.<br>"+
					"<span class='ct-code-b-yellow'>Note:</span> Enter a value of maximum length 8.<br><span class='errorText'></span>";
				typing('.introjs-tooltiptext', text, function() {
					$("#binaryValue").attr("disabled", false);
					$("#binaryValue").effect('highlight',{color:'#2F4F4F'}, 1000);
					$("#binaryValue").focus();
					$("#convert").click(function() {
						introjs.nextStep();
					});
				});
				
			});
			break;
		case 'boxDiv':
			var input = $("#binaryValue").val();
			$("#boxDiv").css({height: $("#boxDiv").outerHeight()});
			lenOfInput = input.length;
			if (lenOfInput % 3 == 2) {
				$("#givenBox td:nth-child(1)").addClass("opacity00");
			} else if(lenOfInput % 3 == 1) {
				$("#givenBox td:nth-child(1), #givenBox td:nth-child(2)").addClass("opacity00");
			}
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#boxDiv").removeClass("opacity00");
				$("#binaryDiv").removeClass("opacity00");
				var l = $("#binaryValue").offset();
				$(".binaryBox1").offset({"top": l.top,"left": l.left});
				TweenMax.to(".binaryBox1", 1.3, {top: 0, left:0 , onComplete:function() { 
					typing('.introjs-tooltiptext', "The given binary number will be divided into groups of three binary digit each.", function() {		
						$('.introjs-nextbutton').show();
					});
				}});
			});
			break;
		case 'rowDiv':
			var input = $("#binaryValue").val();
			lenOfInput = $("#binaryValue").val().length;
			if (lenOfInput % 3 == 2) {
				$("#columnDiv0 td:nth-child(1)").addClass("opacity00");
			} else if(lenOfInput % 3 == 1) {
				$("#columnDiv0 td:nth-child(1), #columnDiv0 td:nth-child(2)").addClass("opacity00");
			}
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				if(input.length <= 3) {
					typing('.introjs-tooltiptext', "Now calculation for <span class='ct-code-b-yellow'>Octal</span> conversion.", function() {
						$("#rowDiv").removeClass("opacity00");
						$("#row0").removeClass("col-xs-4").addClass('col-xs-12');
						$("#row3, #row6, #positionSpan3, #positionSpan6").hide();
						var l1 = $("#givenBox").offset();
						var l2 = $("#columnDiv0").offset();
						var topLen = l1.top - l2.top;
						var leftLen = l1.left - l2.left;
						TweenMax.from("#columnDiv0", 1, {top: topLen, left: leftLen, onComplete: function() {
							zerosAppendDynamically();
						}}); 
					});
				} 
				else if(input.length > 3 && input.length <= 6) {
					$("#rowDiv").removeClass("opacity00");
					$("#row0, #row3").removeClass("col-xs-4").addClass('col-xs-6');
					$("#row6").hide();
					$("#calculation6").hide();
					$("#square6").hide();
					animationHalf();
				} else {
					$("#rowDiv").removeClass("opacity00");
					animation();
				}
			});
			break;
		case 'positionDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#positionDiv").removeClass("opacity00");
				var input = $("#binaryValue").val();
				if(input.length <= 3) {
					introjs.refresh();
					$("#positionDiv").removeClass("opacity00");
					$("#positionSpan0").removeClass("col-xs-4").addClass('col-xs-12');
					$("#row3, #row6, #positionSpan3, #positionSpan6").hide();
					$("#calculation6").hide();
					$("#square6").hide();
				} else if(input.length > 3 && input.length <= 6) {
					$("#positionDiv").removeClass("opacity00");
					
					$("#positionSpan0, #positionSpan3").removeClass("col-xs-4").addClass('col-xs-6');
				} else {
					$("#positionDiv").removeClass("opacity00");
				}
				TweenMax.staggerFrom(".box5", 0.1, {opacity:0, top: -60}, -0.3, function() {
					typing('.introjs-tooltiptext', "These are the positions for the given bits.", function() {
						$('.introjs-nextbutton').show();
					}); 
				});
			});
			break;
		case 'squareDiv':
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				typing('.introjs-tooltiptext',"These are the multiplying factors for the given positions.", function() {
					$("#squareDiv").removeClass("opacity00");
					if(input.length <= 3) {
						$("#squareDiv").removeClass("opacity00");
						$("#square0").removeClass("col-xs-4").addClass('col-xs-12');
					} else if(input.length > 3 && input.length <= 6) {
						$("#squareDiv").removeClass("opacity00");
						$("#square0, #square3").removeClass("col-xs-4").addClass('col-xs-6');
					} else {
						$("#squareDiv").removeClass("opacity00");
					}
					animationSquare();
				});
			});
			break;
		case 'calculationDiv':
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				typing('.introjs-tooltiptext', "We will start the processing from right to left i.e starting from "+
						"<span class='ct-code-b-yellow'>2<sup>0</sup></span> and so on.", function() {
					$("#calculationDiv").removeClass("opacity00");
					if(input.length <= 3) {
						$("#equalId1").append("=");
						$("#calculationDiv").removeClass("opacity00");
						$("#calculation0").removeClass("col-xs-4").addClass('col-xs-12');
					} else if(input.length > 3 && input.length <= 6) {
						$("#equalId1, #equalId2").append("=");
						$("#calculationDiv").removeClass("opacity00");
						$("#calculation0, #calculation3").removeClass("col-xs-4").addClass('col-xs-6');
					} else {
						$("#boxDiv").css("font-family", "arial");
						$("#equalId1, #equalId2, #equalId3").append("=");
						$("#calculationDiv").removeClass("opacity00");
					}
				collection($("#givenBox td").length-1, $("#givenBox td").length-2);
				console.log("inputlength: " + $("#givenBox td").length);
				});
			});
			break;
		case 'multiplicationDiv':
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				if(input.length <= 3) {
					$("#equalId4").append("=");
					$("#equalId4").removeClass("visibility-hidden");
					$("#multiplicationDiv").removeClass("opacity00");
					$("#multiply0").removeClass("col-xs-4").addClass('col-xs-12');
				} else if(input.length > 3 && input.length <= 6) {
					$("#equalId4, #equalId5").append("=");
					$("#multiplicationDiv").removeClass("opacity00");
					$("#multiply0, #multiply3").removeClass("col-xs-4").addClass('col-xs-6');
				} else {
					$("#equalId4, #equalId5, #equalId6").append("=");
					$("#multiplicationDiv").removeClass("opacity00");
				}
				dividing();
			});
			break;
		case 'additionDiv':
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				if(input.length <= 3) {
					$("#equalId7").append("=");
					$("#addition0").removeClass("col-xs-4").addClass('col-xs-12');
					addition(0, function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					});
				} else if(input.length > 3 && input.length <= 6) {
					$("#equalId7, #equalId8").append("=");
					$("#additionDiv").removeClass("opacity00");
					$("#addition0, #addition3").removeClass("col-xs-4").addClass('col-xs-6');
					addition(0);
					addition(3, function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					});
					} else {
					$("#equalId7, #equalId8, #equalId9").append("=");
					$("#additionDiv").removeClass("opacity00");
					addition(0);
					addition(3);
					addition(6, function() {
						setTimeout(function () {
							introjs.nextStep();
						}, 500);
					});
				}
			});
			break;
		case 'resultDiv':
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var text = "Now bringing all the decimal values together will we arrive at the final "+
				"<span class='ct-code-b-yellow'>octal</span> number.";
				typing('.introjs-tooltiptext', text, function() {
					$("#resultDiv").removeClass("opacity00");
					if(input.length <= 3) {
						$("#equalId10").append("=");
						$("#resultDiv").removeClass("opacity00");
						$("#result0").removeClass("col-xs-4").addClass('col-xs-12');
						resultStep(0);
					} else if(input.length > 3 && input.length <= 6) {
						$("#equalId10, #equalId11").append("=");
						$("#result0, #result3").removeClass("col-xs-4").addClass('col-xs-6');
						resultStep(0);
						resultStep(3);
					} else {
						$("#equalId10, #equalId11, #equalId12").append("=");
						$("#resultDiv").removeClass("opacity00");
						resultStep(0);
						resultStep(3);
						resultStep(6);
					}
				});
			});
			break;
		case 'finalDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#finalDiv").removeClass("opacity00");
				setTimeout(function(){
					introjs.nextStep();
				}, 2000);
			});
			break;
		case "restart":
			$('.introjs-tooltipbuttons').addClass("hide");
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "-max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	
	introjs.start();
}
function typing(selector, text, callBackFunction) {
	var typingSpeed = 10;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function recursion(index) {
	var inputSubstring = input.substring(index, index + 3);
	for (var i = index, j = 2; i < index + 3, j >= 0; i++, j--) {
		$("#columnDiv" + index).append("<td class='binaryBox3' id='box"+ i +"'><span id='number"+ i +"'>" + input[i] + "</span></td>");
	}
	for (var i = index, j = 2; i < index + 3, j >= 0; i++, j--) {
		$("#positionSpan" + index).append("<span class='box5  text-center ct-code-b-green'>" +
				"<span 'ct-code-b-green'>"+ j +"</span></span>");
		$("#squareDiv" + index).append('<td class="binaryBox2" id="power' + i + '"></td>');
		$("#power" + i).append("<span class='square' id='twoPower" + i + "'>" + '2' + "<sup>" + j + "</sup></span>");
	}
	for (var i = index, j = 2; i < index + 3, j >= 0; i++, j--) {
		if(j > 0) {
			$("#calculationDiv" + index).append('<span class="opacity00" id="openBrace' + i + '">(</span><span class="opacity00" id="value' + i +
					'">' + input[i] + "</span><span class='ct-blue-color opacity00' id='multi" + i +"'>x</span>" + 
					'<span class="opacity00" id="squaring' + i + '">' + "2" + '<sup style="color: teal">' + j + '</sup></span><span>' 
					+ '<span class="opacity00" id="closeBrace' + i + '">)</span>' + "<span class='plus opacity00' id='plus" + i + "'>+</span>");
		} else {
			$("#calculationDiv" + index).append('<span class="opacity00" id="openBrace' + i + '">(</span><span class="opacity00" id="value' + i +
					'">' + input[i] + "</span><span class='ct-blue-color opacity00' id='multi" + i +"'>x</span>" + 
					'<span class="opacity00" id="squaring' + i + '">' + "2" + '<sup style="color: teal">' + j + '</sup></span><span>' +
					'<span class="opacity00" id="closeBrace' + i + '">)</span>');
		}
	}
	for (var i = index, j = 2; i < index + 3, j >= 0; i++, j--) {
		var c = Math.pow(2, j);
		var b = input[i] * c;
		if (i % 3 == 0) {
			sum = 0;
		}
		sum += b;
		if(j > 0) {
			$("#multiplicationDiv" + index).append('(<span id="value' + j +'">' + input[i] + "</span><span class='ct-blue-color'>x</span>" + 
					'<span class="squaring" id="twoSquare' + i + '">' + "2" + '<sup style="color: teal">' + j + '</sup></span>' + ')<span class="plus">+</span>');
			$("#additionDiv" + index).append('(' + b + ')' + "<span class='plus' id='plus'>+</span>");
		} else {
			$("#multiplicationDiv" + index).append('(<span id="value' + j +'">' + input[i] + "</span><span class='ct-blue-color'>x</span>" + 
					'<span class="squaring" id="twoSquare' + i + '">' + "2" + '<sup style="color: teal">' + j + '</sup></span>' + ')');
			$("#additionDiv" + index).append('(' + b + ')');
		}
		if (i % 3 == 2) {
			$("#resultDiv" + index).append('<span class="output" id="output'+ index +'">' + sum + '</span>');	
		}
	}
	
	lenOfInput = lenOfInput - 3;
	if (lenOfInput >= 3) {
		recursion(index + 3);
	}
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.1, {css: {top : 0, rotationX : 0}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function flipValue(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {css: {top : 0, rotationX : 0, color : 'green'}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function animation() {
	var l1 = $("#givenBox").offset();
	var l2 = $("#columnDiv0").offset();
	var topLen = l1.top - l2.top;
	var leftLen = l1.left - l2.left;
	TweenMax.from("#columnDiv0", 1, {top: topLen, left: leftLen, onComplete: function() {
	}}); 
	var l3 = $("#givenBox td:nth-child(4)").offset();
	var l4 = $("#columnDiv3").offset();
	var top = l3.top - l4.top;
	var left = l3.left - l4.left;
	TweenMax.from("#columnDiv3", 1, {top: top, left: left, onComplete: function() {
	}});
	var l5 = $("#givenBox td:nth-child(7)").offset();
	var l6 = $("#columnDiv6").offset();
	var top = l5.top - l6.top;
	var left = l5.left - l6.left;
	TweenMax.from("#columnDiv6", 1, {top: top, left: left, onComplete: function() {
		zerosAppendDynamically();
	}});
}

function animationHalf() {
	var l1 = $("#givenBox").offset();
	var l2 = $("#columnDiv0").offset();
	var topLen = l1.top - l2.top;
	var leftLen = l1.left - l2.left;
	TweenMax.from("#columnDiv0", 1, {top: topLen, left: leftLen, onComplete: function() {
	}}); 
	var l3 = $("#givenBox td:nth-child(4)").offset();
	var l4 = $("#columnDiv3").offset();
	var top = l3.top - l4.top;
	var left = l3.left - l4.left;
	TweenMax.from("#columnDiv3", 1, {top: top, left: left, onComplete: function() {
		zerosAppendDynamically();
	}});
}

function animationSquare() {
	var l1 = $("#rowDiv").offset();
	var l2 = $("#squareDiv").offset();
	var top = l1.top - l2.top;
	var left = l1.left - l2.left;
	TweenMax.from("#squareDiv", 1, {top: top, left: left, onComplete: function() {
		$('.introjs-nextbutton').show();
	}});
}

function calculation(index) {
	TweenMax.to("#openBrace" + index, 0.8, {opacity: 1, onComplete: function() {
		var l1 = $("#number" + index).offset();
		var l2 = $("#value" + index).offset();
		var topLen = l1.top - l2.top;
		var leftLen = l1.left-l2.left;
		$("#value" + index).removeClass("opacity00");
		TweenMax.from("#value" + index, 0.5, {top: topLen, left: leftLen, onComplete: function() {
		  	if (index < 2) {
				calculation(++index);
	  		}
		}});
	}});
}

function collection(index, plusIndex) {
	TweenMax.to("#closeBrace" + index, 0.1,{opacity: 1, onComplete: function() {
		var l3 = $("#twoPower" + index).offset();
		var l4 = $("#squaring" + index).offset();
		var topLength = l3.top - l4.top;
	 	var leftLength = l3.left-l4.left;
		$("#squaring" + index).removeClass("opacity00");
		TweenMax.from("#squaring" + index, 0.1, {top: topLength, left: leftLength, onComplete: function() {
    		TweenMax.to("#multi" + index, 0.1, {opacity: 1, onComplete: function() {
    			var l1 = $("#number" + index).offset();
    			var l2 = $("#value" + index).offset();
    			var topLen = l1.top - l2.top;
    			var leftLen = l1.left-l2.left;
    			$("#value" + index).removeClass("opacity00");
    			TweenMax.from("#value" + index, 0.1, {top: topLen, left: leftLen, onComplete: function() {
    				TweenMax.to("#openBrace" + index, 0.1, {opacity: 1, onComplete: function() {
    					TweenMax.to("#plus"+ plusIndex, 0.1,{opacity: 1, onComplete: function() {
							if (index > 0) {
								collection(--index, --plusIndex);
					     	} else {
					     		$('.introjs-nextbutton').show();
					     	}
				     	}});
					}});
				}});
    		}});
		}});
	}});
}

function dividing() {
	var l1 = $("#calculationDiv").offset();
	var l2 = $("#multiplicationDiv").offset();
	var topLen = l1.top - l2.top;
	var leftLen = l1.left - l2.left;
	$("#multiplicationDiv").removeClass("opacity00");
	TweenMax.from("#multiplicationDiv", 1, {top: topLen, onComplete: function() {
		squaringFirst(input.length-1, 0);
	}}); 
}

function squaringFirst(index, p) {
	if (index % 3 == 2) {
		p = 0;
	}
	$("#twoSquare" + index).effect( "highlight", 1500);
	flipEffect($("#twoSquare" + index), Math.pow(2, p), function() {
		if (index > 0) {
			squaringFirst(--index, ++p);
		} else {
			$(".squaring").css("width", "auto");
			introjs.nextStep();
		}
	});
}

function addition(index, callBackFunction) {
	var l3 = $("#multiplicationDiv" + index).offset();
	var l4 = $("#additionDiv" + index).offset();
	var topLength = l3.top - l4.top;
	$("#multiplicationDiv" + index).effect( "highlight", {color:"#FFD700"}, 2000);
	$("#additionDiv").removeClass("opacity00");
	TweenMax.from("#additionDiv" + index, 1, {top: topLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	}});
}

function resultStep(index) {
	var l3 = $("#additionDiv" + index).offset();
	var l4 = $("#output" + index).offset();
	var topLength = l3.top - l4.top;
 	$("#additionDiv" + index).effect( "highlight", {color:"#FF9900"}, 2000);
 	$("#resultDiv").removeClass("opacity00");
	TweenMax.from("#output" + index, 1, {top: topLength, onComplete: function() {
		$(".introjs-nextbutton").show();
	}});
}

function zerosAppendDynamically() {
	lengthOfInput = $("#binaryValue").val().length;
	if (lengthOfInput % 3 == 0) {
		typing('.introjs-tooltiptext', "Now calculation for <span class='ct-code-b-yellow'>Octal</span> conversion.", function() {
			$('.introjs-nextbutton').show();
		});
	} else {
		var text = "If length of the left most group is less than 3 then we will left pad with 0's to make the total digits "+
			"as three in the left most last group. "
		typing(".introjs-tooltiptext", text, function() {
			
			if (lengthOfInput % 3 == 2) {
				TweenMax.to($("#columnDiv0 td:nth-child(1)"), 1, {css: {opacity: 1}, onComplete: function() {
					$("#columnDiv0 td:nth-child(1)").effect( "highlight", {color:"sandybrown"}, 2000);
						$('.introjs-nextbutton').show();
				}});
			} else if (lengthOfInput % 3 == 1) {
				TweenMax.to($("#columnDiv0 td:nth-child(1), #columnDiv0 td:nth-child(2)"), 1, {css: {opacity: 1}, onComplete: function() {
					$("#columnDiv0 td:nth-child(1)").effect( "highlight", {color:"sandybrown"}, 2000);
					$("#columnDiv0 td:nth-child(2)").effect( "highlight", {color:"sandybrown"}, 2000);
					$('.introjs-nextbutton').show();
				}});
			}
		});
	}
}