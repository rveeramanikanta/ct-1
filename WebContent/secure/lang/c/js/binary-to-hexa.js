var introjs;
var l1,l2;
var sum1 = 0;
var sum2 = 0;
var value1;
var value2;
var x;
var typingInterval = 50;

var binaryToHexaReady = function() {
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
		if(isSplChar) {
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
		var input = $("#binaryValue").val();
		$("body").keydown(function(e) {
			if (e.keyCode == 13) {
				e.preventDefault();
			}
		});
		for (var i = 0; i < input.length; i++) {
			$("#numberBox").append("<td class='binaryBox' id='box"+ i +"'><span id='text"+ i +"'>" + input[i] + "</span></td>");
			//$("#box" + i).text(input.charAt(i));
		}
	/* if given input length <= 4 */	
		if (input.length <= 4) {
			var count = 0;
			if (input.length != 4) {
				for (var i = input.length; i < 4; i++) {
					input = "0" + input;
					count++;
				}
			}
			
			for (var i = 0; i < input.length; i++) {
				$("#numberBox1").append("<td class='squareDivBox' id='sup'><span id='a"+ i +"'>" + input[i] + "</span></td>");
			}
			
			for (var i = 0; i < count; i++) {
				$("#numberBox1 td:nth-child(" + (i + 1) + ")").addClass('visibility-hidden zeros');
			}
			
			for (var i = input.length-1, j = 0; i >= 0; i--, j++) {
				$('#twoPowerDiv2').append('<td class="supBox" id="power2' + i + '"></td>');
				$("#power2" + i).append('<span class="square" id="twoPower' + j + '">' + "2" + '<sup>' + i + '</sup></span>');
				$("#positionSpan2").append("<span class='box5  text-center ct-code-b-green'>" +
						"<span 'ct-code-b-green'>"+ i +"</span></span>");
			}

		// Collection of elements
			for (var i = input.length-1, j = 0; i >= 0; i--, j++) {
				if(i > 0) {
					$("#multiplySpan").append("<span class='openBracket opacity00' id='openBracket" + j + "'>(</span>" +
							"<span class='opacity00' id='valueHalf" + j +"'>" + input[j] + "</span>" +
							"<span class='ct-blue-color opacity00' id='multi" + j + "'>x</span>" + 
							"<span class='opacity00' id='twoSecondHalf" + j + "'>" + "2" + "<sup>" + i + "</sup></span>" +
							"<span class='closedBracket opacity00' id='closedBracket" + j + "'>)</span>" +
							"<span class='opacity00 plus2' id='plus2" + i + "'>+</span>");
					
					$("#multiDiv2").append("<span id='openBracket" + j + "'>(</span><span id='valueHalf" + j +"'>" + input[j] + "</span>" +
							"<span class='ct-blue-color ' id='multi" + j + "'>x</span>" + 
							"<span class='twoHalf' id='twoHalf" + i + "'>" + "2" + "<sup>" + i + "</sup></span>" +
							"<span class='closedBracket' id='closedBracket" + j + "'>)</span>" +
							"<span class=' plus2' id='plus2" + i + "'>+</span>");
				} else {
					$("#multiplySpan").append("<span class='openBracket opacity00' id='openBracket" + j + "'>(</span>" +
							"<span class='opacity00' id='valueHalf" + j +"'>" + input[j] + "</span>" +
							"<span class='ct-blue-color opacity00' id='multi" + j + "'>x</span>" + 
							"<span class='opacity00' id='twoSecondHalf" + j + "'>" + "2" + "<sup>" + i + "</sup></span>" +
							"<span class='closedBracket opacity00' id='closedBracket" + j + "'>)</span>");
					
					$("#multiDiv2").append("<span class='openBracket' id='openBracket" + j + "'>(</span>" +
							"<span id='valueHalf" + j +"'>" + input[j] + "</span><span class='ct-blue-color' id='multi" + j + "'>x</span>" + 
							"<span class='twoHalf' id='twoHalf" + i + "'>" + "2" + "<sup>" + i + "</sup></span>" +
							"<span class='closedBracket' id='closedBracket" + j + "'>)</span>");
				}
			}
		
		// Calculatiion part start here..
			for (var i = input.length-1, j = 0; i >= 0; i--, j++) {
				var c = Math.pow(2, i);
				var b = input[j] * c;
				sum2 += b;
				if(i > 0) {
					$("#addition2").append('(' + b + ')' + "<span class='plus2' id='plus'>+</span>");
				} else {
					$("#addition2").append('(' + b + ')');
				}
			}
			$("#result2").append(sum2);
		}
	
		if (input.length > 4) {
				x = input.substring(input.length-4, input.length);
				input = input.substring(0, input.length-4);
			
			var count = 0;
			if (input.length != 4) {
				for (var i = input.length; i < 4; i++) {
					input = "0" + input;
					count++;
				}
			}
			
			for (var i = 0; i < x.length; i++) {
				$("#numberBox1").append("<td class='squareDivBox' id='sup'><span class='position-relative' id='a"+ i +"'>" + x[i] + "</span></td>");
			}
			for (var i = 0; i < input.length; i++) {
				$("#numberBox2").append("<td class='squareDivBox' id='sup'><span class='position-relative' id='d"+ i +"'>" + input[i] + "</span></td>");
			}
			for (var i = 0; i < count; i++) {
				$("#numberBox2 td:nth-child(" + (i + 1) + ")").addClass('visibility-hidden zeros');
			}
			
			for (var i = x.length-1, j = 0; i >= 0; i--, j++) {
				$('#twoPowerDiv1').append('<td class="supBox" id="power1' + i + '"></td>');
				$("#power1" + i).append('<span class="square" id="twoPower' + j + '">' + "2" + '<sup>' + i + '</sup></span>');
				$('#twoPowerDiv2').append('<td class="supBox" id="power2' + i + '"></td>');
				$("#power2" + i).append('<span class="square" id="twoPowerId' + j + '">' + "2" + '<sup>' + i + '</sup></span>');
				$("#positionSpan1").append("<span class='box5  text-center ct-code-b-green'>" +
						"<span 'ct-code-b-green'>"+ i +"</span></span>");
				$("#positionSpan2").append("<span class='box5  text-center ct-code-b-green'>" +
						"<span 'ct-code-b-green'>"+ i +"</span></span>");
			}
		// Collection of elements
			for (var i = x.length-1, j = 0; i >= 0; i--, j++) {
				if(i > 0) {
					$("#multiplyDiv1").append("<span class='openBrace opacity00' id='openBrace" + j + "'>(</span>" +
							"<span class='value opacity00' id='value" + j +"'>" + x[j] + "</span>" +
							"<span class='ct-blue-color opacity00' id='mSymbol" + j + "'>x</span></span>" + 
							"<span class='opacity00' id='twoFirstHalf" + j + "'>" + "2" + "<sup>" + i + "</sup></span>" +
							"<span class='closeBrace opacity00' id='closeBrace" + j + "'>)</span>" +
							"<span class='opacity00 plus1' id='plus1" + i + "'>+</span>");
					
					$("#multiDiv2").append("(" + x[j] + "<span class='ct-blue-color' id='mSymbol" + j + "'>x</span>" + 
							"<span class='firstHalf' id='firstHalf" + i + "'>" + 2 + '<sup>' + i + "</sup></span>" + ")<span class='plus1'>+</span>");
				} else {
					$("#multiplyDiv1").append("<span class='openBrace opacity00' id='openBrace" + j + "'>(</span>" +
							"<span class='value opacity00' id='value" + j +"'>" + x[j] + "</span>" +
							"<span class='ct-blue-color opacity00' id='mSymbol" + j + "'>x</span>" + 
							"<span class='opacity00' id='twoFirstHalf" + j + "'>" + "2" + "<sup>" + i + "</sup></span><span>" +
							"<span class='closeBrace opacity00' id='closeBrace" + j + "'>)</span>");
					
					$("#multiDiv2").append("(" + x[j] + "<span class='ct-blue-color' id='mSymbol" + j + "'>x</span>" + 
							"<span class='firstHalf' id='firstHalf" + i + "'>" + 2 + '<sup>' + i + "</sup></span>" + ")");
				}
			}
		
			for (var i = input.length-1, j = 0; i >= 0; i--, j++) {
				if(i > 0) {
					$("#multiplyDiv2").append("<span class='openBracket opacity00' id='openBracket" + j + "'>(</span>" +
							"<span class='opacity00' id='valueHalf" + j +"'>" + input[j] + "</span>" +
							"<span class='ct-blue-color opacity00' id='multi" + j + "'>x</span>" + 
							"<span class='opacity00' id='twoSecondHalf" + j + "'>" + "2" + "<sup>" + i + "</sup></span>" +
							"<span class='closedBracket opacity00' id='closedBracket" + j + "'>)</span>" +
							"<span class='opacity00 plus2' id='plus2" + i + "'>+</span>");
					
					$("#multiDiv1").append("(" + input[j] + "<span class='ct-blue-color' id='multi" + j + "'>x</span>" + 
							"<span class='twoHalf' id='twoHalf"+ i + "'>" + "2" + "<sup>" + i + "</sup></span>" + ")<span class='plus2'>+</span>");
				} else {
					$("#multiplyDiv2").append("<span class='openBracket opacity00' id='openBracket" + j + "'>(</span>" +
							"<span class='opacity00' id='valueHalf" + j +"'>" + input[j] + "</span>" +
							"<span class='ct-blue-color opacity00' id='multi" + j + "'>x</span>" + 
							"<span class='opacity00' id='twoSecondHalf" + j + "'>" + "2" + "<sup>" + i + "</sup></span>" +
							"<span class='closedBracket opacity00' id='closedBracket" + j + "'>)</span>");
					
					$("#multiDiv1").append("(" + input[j] + "<span class='ct-blue-color' id='multi" + j + "'>x</span>" + 
							"<span class='twoHalf' id='twoHalf"+ i + "'>" + "2" + "<sup>" + i + "</sup></span>" + ")");
				}
			} 
		// Calculatiion part start here..
			for (var i = x.length-1, j = 0; i >= 0; i--, j++) {
				var c = Math.pow(2, i);
				var b = x[j] * c;
				sum2 += b;
				
				if(i > 0) {
					$("#addition2").append('(' + b + ')' + "<span class='plus2' id='plus'>+</span>");
				} else {
					$("#addition2").append('(' + b + ')');
				}
			} 
			$("#result2").append(sum2);
			
			for (var i = input.length-1, j = 0; i >= 0; i--, j++) {
				var c = Math.pow(2, i);
				var b = input[j] * c;
				sum1 += b;
				
				if(i > 0) {
					$("#addition1").append('(' + b + ')' + "<span class='plus1' id='plus'>+</span>");
				} else {
					$("#addition1").append('(' + b + ')');
				}
			}
			$("#result1").append(sum1);
		}
	});
}
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
			intro : "",
			position : 'right',
		}, {
			element : "#input",
			intro :"",
			position : 'right',
		}, {
			element :"#boxDiv",
			intro : "",
			position : 'right',
		}, {
			element : "#supPart",
			intro : '',
			position : 'right',
		}, {
			element : '#positionDiv',
			intro : '',
			position : 'right',
		}, {
			element :"#squareDiv",
			intro : "",
			position : 'right',
		}, {
			element :"#calculationPartDiv1",
			intro : "",
			position : 'right',
			
		}, {
			element :"#calculationPartDiv2",
			intro : "",
			position : 'right',
			tooltipClass : 'hide'
		
		}, {
			element :"#calculationPartDiv3",
			intro : "",
			position : 'right',
			tooltipClass : 'hide'
		
		}, {
			element :"#calculationPartDiv4",
			intro : "",
			position : 'right',
			animateStep : 'firstStep'
		
		}, {
			element :"#calculationPartDiv4",
			intro : "",
			position : 'right',
			animateStep : 'secondStep',
			tooltipClass : 'hide'
		}, {
			element : "#finalDiv",
			intro : "",
			tooltipClass: 'hide',
		},{
			element : "#restart",
			intro : "Click to restart.",
			position : 'right',
		}]
	});

	introjs.onafterchange(function(targetElement) {	
		var elementId = targetElement.id;
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		if (elementId == "infoDiv") {
			$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
							$("#list5").fadeTo(300, 1, function() {
								$("#infoDiv").addClass('z-index9999999');
								setTimeout(function () {
									introjs.nextStep();
								}, 500);
							});
						});
					});
				});
			});
		}
		if (elementId == "input") {
			$("#binaryValue").attr("disabled", false);
			$("#binaryValue").effect('highlight',{color:'yellow'}, 1000);
			$("#binaryValue").focus();
		}
		if (elementId == "finalDiv") {
			if (elementId == "finalDiv") {
				var input = $("#binaryValue").val();
				if (input.length > 4) {
					$("#finalResult").html("Hexadecimal representation of the given binary value <span class='ct-blue-color' style='font-family: monospace'>(" 
							+ $("#binaryValue").val() + "</span>)<sub>2</sub> is: " 
							+ "<span>(" + sum1.toString(16).toUpperCase() + "" + sum2.toString(16).toUpperCase() + "</span>" +")" 
							+ "<span class='ct-green-color' id='base'><sub>" + 16 + "</sub></span>");
				} else {
					$("#finalResult").html("Hexadecimal representation of the given binary value <span class='ct-blue-color' style='font-family: monospace'>(" 
							+ $("#binaryValue").val() + "</span>)<sub>2</sub> is: " 
							+ "<span>(" + sum2.toString(16).toUpperCase() + "</span>" +")" + "<span class='ct-green-color'><sub>" + 16 + "</sub></span>");
				}
			}
		}
		switch (elementId) {
		case 'table':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#table").removeClass("visibility-hidden");
				var text = "This chart shows the conversion table for four digit <span class='ct-code-b-yellow'>binary</span> groups to "+ 
				"their <span class='ct-code-b-yellow'>hexadecimal</span> equivalent digits.";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case 'input':
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
			$("#input").removeClass("visibility-hidden");
			$("#binaryValue").attr("disabled", true);
			var text = "Provide a <span class='ct-code-b-yellow'>binary</span> number and click on <span class='convert'>Convert to Hexadecimal</span>"+
			" button to understand how a <span class='ct-code-b-yellow'>binary</span> number is converted to "+
			"<span class='ct-code-b-yellow'>hexadecimal</span>.<br>"+
			"<span class='ct-code-b-yellow'>Note:</span> Enter a value of maximum length 8.<br><span class='errorText'></span>";
			typing('.introjs-tooltiptext', text, function() {
						$("#binaryValue").attr("disabled", false);
						$("#binaryValue").effect('highlight',{color:'#2F4F4F'}, 1000);
						$("#binaryValue").focus();
						});
			
				$("#convert").click(function() {
					introjs.nextStep();
				});
			});
			break;
		case 'numberBox':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-nextbutton").show();
				$("#boxDiv").removeClass("visibility-hidden");
				$("#getValues").removeClass("visibility-hidden");
			});
			break;
		case 'boxDiv':
			$(".introjs-nextbutton").hide();
			//$("#boxDiv").css({height: $("#boxDiv").outerHeight()});
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#boxDiv, #numberBox").removeClass("visibility-hidden");
				$("#binaryDiv").removeClass("opacity00");
				var l = $("#binaryValue").offset();
				$(".binaryBox").offset({"top": l.top,"left": l.left});
				TweenMax.to(".binaryBox", 1.3, {top: 0, left:0 , onComplete:function() { 
					typing('.introjs-tooltiptext', "The given binary number will be divided into groups of four binary digit each.", function() {
						$('.introjs-nextbutton').show();
					});
				}});
			});
			break;
		case 'supPart':
			$('.introjs-helperLayer ').one('transitionend', function() {	
				$(".introjs-nextbutton").hide();
				$("#tableDiv2").removeClass("visibility-hidden");
				var input = $("#binaryValue").val();
				if (input.length <= 4) {
					$("#getDiv").addClass("col-xs-offset-3");
					$("#getDiv1").hide();
					var input = $("#binaryValue").val();
					var l3 = $("#numberBox").offset();
					var l4 = $("#numberBox1").offset();
					var topLen = l3.top - l4.top;
					var leftLen = l3.left - l4.left - ($("#numberBox1").width() - $("#numberBox").width());
					TweenMax.from("#numberBox1", 2, {top: topLen, left: leftLen, onComplete: function() {
	            		typing('.introjs-tooltiptext', "If length of the left most group is less than 4 then we will left pad with 0's to "+
	            				"make the total digits as three in the left most last group.", function() {
							$("#numberBox1 td").removeClass("visibility-hidden");
							$(".zeros").effect( "highlight", {color:"#FFA3A3"}, 2000);
							$(".introjs-nextbutton").show();
            			});
					}}); 
				}
				else {
					var l1 = $("#numberBox td:nth-child(" + (input.length - 3) + ")").offset();
					var l2 = $("#numberBox1").offset();
					var topLength = l1.top - l2.top;
					var leftLength = l1.left-l2.left;
					TweenMax.from("#numberBox1", 2, {top: topLength, left: leftLength, onComplete: function() {
					}});
					$("#tableDiv1").removeClass("visibility-hidden");
					var l3 = $("#numberBox td:nth-child(" + (input.length - 4) + ")").offset();
					var l4 = $("#numberBox2").offset();
					var topLen = l3.top - l4.top;
					var leftLen = (l3.left + $("#numberBox td:nth-child(" + (input.length - 4) + ")").outerWidth()) - l4.left - $("#numberBox2").width();
					TweenMax.from("#numberBox2", 2, {top: topLen, left: leftLen, onComplete: function() {
						typing('.introjs-tooltiptext', "If length of the left most group is less than 4 then we will left pad with 0's to "+
	            				"make the total digits as three in the left most last group.", function() {
									$("#numberBox2 td").removeClass("visibility-hidden");
									$(".zeros").effect( "highlight", {color:"#FFA3A3"}, 2000);
									$(".introjs-nextbutton").show();
						});
					}});
				}
			});
			break;
		case 'positionDiv':
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#positionDiv").removeClass("opacity00");
				var input = $("#binaryValue").val();
				if(input.length <= 4) {
					$("#positionDiv").removeClass("opacity00");
					$("#positionSpan2").addClass("col-xs-offset-3");
				} else  {
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
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-nextbutton").hide();
				var input = $("#binaryValue").val();
				$("#squareDiv").removeClass("visibility-hidden");
				if (input.length <= 4) {
					$("#square").addClass("col-xs-offset-3");
				}
				var l1 = $('#supPart').offset();
				var l2 = $('#squareDiv').offset();
				var topLength = l1.top - l2.top;
				var leftLength = l1.left-l2.left;
				TweenMax.from('#squareDiv', 1, {top: topLength, left: leftLength, onComplete: function() {
					typing('.introjs-tooltiptext',"These are the multiplying factors for the given positions.", function() {
						$(".introjs-nextbutton").show();
					});
				}});
			});
			break;
		case 'calculationPartDiv1':
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$(".introjs-nextbutton").hide();
				var input = $("#binaryValue").val();
				typing('.introjs-tooltiptext', "We will start the processing from right to left i.e starting from "+
						"<span class='ct-code-b-yellow'>2<sup>0</sup></span> and so on.", function() {
					if (input.length <= 4) {
						$("#multiplyDiv1, #multiplicationDiv1, #additionDiv1, #total1").remove();
						$("#multiplyDiv2").addClass("col-xs-6 col-xs-offset-3").removeClass("opacity00", function() {
							lowerCalculation(3);
						});
					} else {
						$("#multiplyDiv1").removeClass("opacity00");
					 	$("#multiplyDiv2").removeClass("opacity00");
						collFirstHalf(3);
					}
				});
			});
			break;
		case 'calculationPartDiv2':
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
				typing('.introjs-tooltiptext', "Multiplying with powers.", function() {
					if (input.length <= 4) {
						$("#multiplyDiv1, #multiplicationDiv1, #additionDiv1, #total1").remove();
						$("#equalSpan2").removeClass("opacity00");
					 	$("#multiplicationDiv2").addClass("col-xs-6 col-xs-offset-3").removeClass("opacity00");
					 	$("#equalSpan5").removeClass("opacity00");
					 	resultFirstStep();
					} else {
						var l3 = $("#multiplyDiv1").offset();
						var l4 = $("#multiplicationDiv2").offset();
						var topLength = l3.top - l4.top;
					 	var leftLength = l3.left-l4.left;
					 	var l1 = $("#multiplyDiv2").offset();
						var l2 = $("#multiplicationDiv1").offset();
						var topLen = l1.top - l2.top;
					 	var leftLen = l1.left-l2.left;
						$("#multiplicationDiv2").removeClass("opacity00");
						$("#multiplicationDiv1").removeClass("opacity00");
						$("#equalSpan1").removeClass("opacity00");
						TweenMax.from("#multiplicationDiv2", 1, {top: topLength, left: leftLength, onComplete: function() {
						}});
						TweenMax.from("#multiplicationDiv1", 1, {top: topLen, left: leftLen, onComplete: function() {
							squaringSecond(0);
						}});
					}
				});
			});
			break;
		case 'calculationPartDiv3':
			var input = $("#binaryValue").val();
			$('.introjs-helperLayer ').one('transitionend', function() {
					if (input.length <= 4) {
						$("#multiplyDiv1, #multiplicationDiv1, #additionDiv1, #total1").remove();
							lowInputAddition();
					} else {
						addition();
					}
			});
			break;
		case 'calculationPartDiv4':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'firstStep':
				var input = $("#binaryValue").val();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Now bringing all the decimal values together will we arrive at the final "+
					"<span class='ct-code-b-yellow'>hexadecimal</span> number.";
					typing('.introjs-tooltiptext', text, function() {
						if (input.length <= 4) {
							$("#multiplyDiv1, #multiplicationDiv1, #additionDiv1, #total1").remove();
							lowInputResultStep();
						} else {
								resultStep();
						}
					});
				});
				break;
			case 'secondStep':
				var input = $("#binaryValue").val();
				if(input.length <=4) {
					$("#multiplyDiv1, #multiplicationDiv1, #additionDiv1, #total1").remove();
					$("#result2").effect( "highlight", {color:"#FFD700"}, 2000);
					flipValue($("#result2"), parseInt($("#result2").text()).toString(16).toUpperCase());
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				} else {
					$("#result1, #result2").effect( "highlight", {color:"#FFD700"}, 2000);
					flipValue($("#result1"), parseInt($("#result1").text()).toString(16).toUpperCase());
					flipValue($("#result2"), parseInt($("#result2").text()).toString(16).toUpperCase());
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				}
				break;
			}
			break;
		case 'finalDiv':
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#finalDiv").removeClass("visibility-hidden");
				setTimeout(function(){
					introjs.nextStep();
				}, 2000);
			});
			break;
		case "restart":
			$('.introjs-tooltipbuttons').addClass("hide");
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").fadeTo(1000, 1);
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
	$(".introjs-skipbutton").hide();
	$(".introjs-nextbutton").hide();
	$(".introjs-prevbutton").hide();
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
		TweenMax.to($(selector), 0.5, {css: {top : -1, rotationX : 0, color : 'green'}, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

var p = 1;
function collFirstHalf(index) {
	TweenMax.to("#closeBrace" + index, 0.1,{opacity: 1, onComplete: function() {
		var l3 = $("#twoPowerId" + index).offset();
		var l4 = $("#twoFirstHalf" + index).offset();
		var topLength = l3.top - l4.top;
		var leftLength = l3.left-l4.left;
		$("#twoFirstHalf" + index).removeClass("opacity00");
		TweenMax.from("#twoFirstHalf" + index, 0.1, {top: topLength, left: leftLength, onComplete: function() {
			TweenMax.to("#mSymbol" + index, 0.1, {opacity: 1, onComplete: function() {
				var l1 = $("#a" + index).offset();
				var l2 = $("#value" + index).offset();
				var topLen = l1.top - l2.top;
				var leftLen = l1.left-l2.left;
				$("#value" + index).removeClass("opacity00");
				TweenMax.from("#value" + index, 0.1, {top: topLen, left: leftLen, onComplete: function() {
					TweenMax.to("#openBrace" + index, 0.1, {opacity: 1, onComplete: function() {
						TweenMax.to("#plus1"+ p, 0.1,{opacity: 1, onComplete: function() {
							p++;
							if (index > 0) {
					 			collFirstHalf(--index);
					     	} else {
				     			collSecondHalf(3);
					     	}
						}});
					}});
				}});
			}});
		}});
	}});
}

var s = 1;
function collSecondHalf(index) {
	TweenMax.to("#closedBracket" + index, 0.1,{opacity: 1, onComplete: function() {
		var l3 = $("#twoPower" + index).offset();
		var l4 = $("#twoSecondHalf" + index).offset();
		var topLength = l3.top - l4.top;
	 	var leftLength = l3.left-l4.left;
		$("#twoSecondHalf" + index).removeClass("opacity00");
		TweenMax.from("#twoSecondHalf" + index, 0.1, {top: topLength, left: leftLength, onComplete: function() {
			TweenMax.to("#multi" + index, 0.1, {opacity: 1, onComplete: function() {
				var l1 = $("#d" + index).offset();
				var l2 = $("#valueHalf" + index).offset();
				var topLen = l1.top - l2.top;
				var leftLen = l1.left-l2.left;
				$("#valueHalf" + index).removeClass("opacity00");
				TweenMax.from("#valueHalf" + index, 0.1, {top: topLen, left: leftLen, onComplete: function() {
					TweenMax.to("#openBracket" + index, 0.1, {opacity: 1, onComplete: function() {
						TweenMax.to("#plus2" + s, 0.1,{opacity: 1, onComplete: function() {
							s++;
							if (index > 0) {
								collSecondHalf(--index);
					     	} else {
					     		$(".introjs-nextbutton").show();
					     	}
						}});
					}});
				}});
			}});
		}});
	}});
}

var z = 1;
function lowerCalculation(index) {
	TweenMax.to("#closedBracket" + index, 0.1,{opacity: 1, onComplete: function() {
		var l3 = $("#twoPower" + index).offset();
		var l4 = $("#twoSecondHalf" + index).offset();
		var topLength = l3.top - l4.top;
		var leftLength = l3.left-l4.left;
		$("#twoSecondHalf" + index).removeClass("opacity00");
		TweenMax.from("#twoSecondHalf" + index, 0.1, {top: topLength, left: leftLength, onComplete: function() {
			TweenMax.to("#multi" + index, 0.1, {opacity: 1, onComplete: function() {
				var l1 = $("#a" + index).offset();
				var l2 = $("#valueHalf" + index).offset();
				var topLen = l1.top - l2.top;
				var leftLen = l1.left-l2.left;
				$("#valueHalf" + index).removeClass("opacity00");
				TweenMax.from("#valueHalf" + index, 0.1, {top: topLen, left: leftLen, onComplete: function() {
					TweenMax.to("#openBracket" + index, 0.1, {opacity: 1, onComplete: function() {
						TweenMax.to("#plus2"+ z, 0.1,{opacity: 1, onComplete: function() {
							z++;
							if (index > 0) {
								lowerCalculation(--index);
					     	} else {
					     		$(".introjs-nextbutton").show();
					     		$(".twoHalf").css("width", "auto");
								halfCalculation();
					     	}
				     	}});
					}});
				}});
    		}});
		}});
	}});
}

function squaringFirst(index) {
	$("#twoHalf" + index).effect( "highlight", {color:"skyblue"}, 1000);
	flipEffect($("#twoHalf" + index), Math.pow(2, index), function() {
		if (index < 3) {
		squaringFirst(++index);
		} else {
			$(".twoHalf").css("width", "auto");
			$(".firstHalf").css("width", "auto");
			setTimeout(function () {
				introjs.nextStep();
			}, 500);
		}
	});
}

function squaringSecond(index) {
	$("#firstHalf" + index).effect( "highlight", {color:"skyblue"}, 1000);
	flipEffect($("#firstHalf" + index), Math.pow(2, index), function() {
		if (index < 3) {
			squaringSecond(++index);
		} else {
			squaringFirst(0);
		}
	});
}

function resultFirstStep() {
	var l3 = $("#multiplySpan").offset();
	var l4 = $("#multiDiv2").offset();
	var topLength = l3.top - l4.top;
 	$("#multiplySpan").effect( "highlight", {color:"#FF9900"}, 2000);
	TweenMax.from("#multiDiv2", 1, {top: topLength, onComplete: function() {
		squaringLowPart(0);
	}});
}

function squaringLowPart(index) {
	$("#twoHalf" + index).effect( "highlight", {color:"skyblue"}, 1000);
	flipEffect($("#twoHalf" + index), Math.pow(2, index), function() {
		if (index < 3) {
			squaringLowPart(++index);
		} else {
			setTimeout(function () {
				introjs.nextStep();
			}, 500);
		}
	});
}

function lowInputResultStep() {
	var l1 = $("#additionDiv2").offset();
	var l2 = $("#total2").offset();
	var topLen = l1.top - l2.top;
	var leftLen = l1.left-l2.left;
	$("#addition2").effect( "highlight", {color:"#FF9900"}, 2000);
	$("#total2").removeClass("opacity00");
	$("#equalSpan6").removeClass("opacity00");
	TweenMax.from("#total2", 2, {top: topLen, left: leftLen, onComplete: function() {
		$(".introjs-nextbutton").show();
	}});
}

function resultStep() {
	var l3 = $("#additionDiv1").offset();
	var l4 = $("#total1").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	var l1 = $("#additionDiv2").offset();
	var l2 = $("#total2").offset();
	var topLen = l1.top - l2.top;
	var leftLen = l1.left-l2.left;
	$("#addition1, #addition2").effect( "highlight", {color:"#FF9900"}, 2000);
	$("#total1").removeClass("opacity00");
	$("#total2").removeClass("opacity00");
	$("#equalSpan5").removeClass("opacity00");
	TweenMax.from("#total1", 1, {top: topLength, left: leftLength, onComplete: function() {
	}});
	TweenMax.from("#total2", 1, {top: topLen, left: leftLen, onComplete: function() {
		$(".introjs-nextbutton").show();
	}});
}

function lowInputAddition() {
	var l1 = $("#multiplicationDiv2").offset();
	var l2 = $("#additionDiv2").offset();
	var topLen = l1.top - l2.top;
	var leftLen = l1.left-l2.left;
	$("#additionDiv2").removeClass("opacity00");
	$("#equalSpan4").removeClass("opacity00");
	TweenMax.from("#additionDiv2", 1, {top: topLen, left: leftLen, onComplete: function() {
		$("#additionDiv2").removeAttr("style");
		setTimeout(function () {
			introjs.nextStep();
		}, 500);
	}});
}

function addition() {
	var l3 = $("#multiplicationDiv1").offset();
	var l4 = $("#additionDiv1").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left-l4.left;
	var l1 = $("#multiplicationDiv2").offset();
	var l2 = $("#additionDiv2").offset();
	var topLen = l1.top - l2.top;
	var leftLen = l1.left-l2.left;
	$("#multiDiv1, #multiDiv2").effect( "highlight", {color:"#FFD700"}, 2000);
	$("#additionDiv1").removeClass("opacity00");
	$("#additionDiv2").removeClass("opacity00");
	$("#equalSpan3").removeClass("opacity00");
	TweenMax.from("#additionDiv1", 1, {top: topLength, left: leftLength, onComplete: function() {
		$("#additionDiv1").removeAttr("style");
	}});
	TweenMax.from("#additionDiv2", 1, {top: topLen, left: leftLen, onComplete: function() {
		$("#additionDiv2").removeAttr("style");
		setTimeout(function () {
			introjs.nextStep();
		}, 500);
	}});
}

function halfCalculation() {
	$("#multiplyDiv1, #multiplicationDiv1, #additionDiv1, #total1").removeClass("col-xs-6").remove();
	$("#additionDiv2").removeClass("col-xs-6").addClass("col-xs-6 col-xs-offset-3");
	$("#total2").removeClass("col-xs-6").addClass("col-xs-6 col-xs-offset-3");
	$(".introjs-nextbutton").show();
}