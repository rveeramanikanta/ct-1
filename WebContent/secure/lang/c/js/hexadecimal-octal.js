var valuelength;
var numberlength;
var p;
var z = 0;
var input;
var lenOfInput;
var intro;
var temp;
var hexadecimalOctalReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#informationdiv',
			intro :'',
			position:"right",
			tooltipClass : 'hide',
		},
		{
			element :'#numberconversion',
			intro :'',
			position:"right" 
		},
		{
			element : "#table",
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, 
		{
			element :'#inputDiv',
			intro :'',
			position:"right" ,
			tooltipClass: 'hide'
		},{
			element :'#octalValuesDiv',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		},{
			element :'#binaryValuesDiv',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		},{
			element :'#combineBinaryNumbers',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		}, {
			element : "#getValues",
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : "#rowDiv",
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : '#positionDiv',
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : "#squareDiv",
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		}, {
			element : "#calculationDiv",
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
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
			tooltipClass : 'hide'
		}, {
			element : "#finalDiv",
			intro : '',
			position : 'right',
			tooltipClass : 'hide'
		},
		{
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "numberconversion":
		$("#table").addClass("opacity00");
		break;
		case 'table':
			$('#inputDiv').addClass('opacity00');
			$('#octalValue').val('');
			$("#octalValue").attr("disabled", true);
			$("#convert").addClass("disabled").addClass("opacity40");
		//	$("#convert").attr("disabled", true);
			$("#octalValue").removeClass("backgroundColor");
		break;
		case "inputDiv" :
			$('#octalValue').val('');
			$("#convert").addClass("disabled").addClass("opacity40");
			$('#calculationTable').addClass('visibility-hidden');
			$('#binaryValuesGet').empty();
			$('#octalValuesDiv').addClass('opacity00');
			$('#octalValuesGet').empty().removeAttr('style');
			$("#numbersCombine").empty();
			$('#binaryResultValue').empty();
			$('#numberBox').empty();
			$('.box-position, .binaryBox2, .binaryBox3').remove();
			$("#calculationDiv0, #calculationDiv3, #calculationDiv6, #calculationDiv9").empty();
			$("#multiplicationDiv0, #multiplicationDiv3, #multiplicationDiv6, #multiplicationDiv9").empty()
			$("#additionDiv0, #additionDiv3, #additionDiv6, #additionDiv9").empty();
			$("#resultDiv0, #resultDiv3, #resultDiv6, #resultDiv9").empty();
			$('#lastResult').empty();
			
		break;
		case "octalValuesDiv":
			$('.box').addClass('opacity00').removeAttr('style');
			$('#binaryValuesDiv').addClass('opacity00');
			$('.box4').addClass('opacity00').removeAttr('style');
		break;
		case "binaryValuesDiv" :
			$('#binaryValuesDiv').addClass('opacity00');
			$('.box4, #binaryDigits0, #binaryDigits1, #binaryDigits2').addClass('opacity00').removeAttr('style');
			$('#combineBinaryNumbers').addClass('opacity00').removeAttr('style');
			$('.combine').addClass('opacity00').removeAttr('style');
		break;
		case "combineBinaryNumbers" :
			$('#combineBinaryNumbers').addClass('opacity00').removeAttr('style');
			$('.combine').addClass('opacity00').removeAttr('style');
			$('#binaryResult').addClass('opacity00');
			$("#binaryResultValue").removeAttr('style');
			$('#getValues').addClass('opacity00');
			$('.binaryBox1').removeAttr('style');
		break;
		case "getValues" :
			$('#getValues').addClass('opacity00');
			$('.binaryBox1').removeAttr('style');
			var inputBinary = $("#numbersCombine").text();
			if (inputBinary.length % 3 == 2) {
				$("#columnDiv0 td:nth-child(1)").removeClass("opacity00");
			} else if(inputBinary.length % 3 == 1) {
				$("#columnDiv0 td:nth-child(1), #columnDiv0 td:nth-child(2)").removeClass("opacity00");
			}
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length <= 4) {
				$("#row6, #row9").show();
				$("#rowDiv").addClass("opacity00");
				$("#row0, #row3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} 
			else if(inputBinary.length <= 8) {
				$("#rowDiv").addClass("opacity00");
				$("#row0, #row3, #row6").addClass("col-xs-3").removeClass('col-xs-3 col-xs-offset-1');
				$("#row9").show();
				$("#calculation9").show();
				$("#square9").show();
				$("#numberBox", "#columnDiv0").removeAttr('style');
			} else {
				$("#rowDiv").addClass("opacity00");
				$("#numberBox", "#columnDiv0").removeAttr('style');
			}
		break;
		case 'rowDiv':
			var inputBinary = $("#numbersCombine").text();
			if (inputBinary.length % 3 == 2) {
				$("#columnDiv0 td:nth-child(1)").removeClass("opacity00");
			} else if(inputBinary.length % 3 == 1) {
				$("#columnDiv0 td:nth-child(1), #columnDiv0 td:nth-child(2)").removeClass("opacity00");
			}
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length <= 4) {
				$("#row6, #row9").show();
				$("#rowDiv").addClass("opacity00");
				$("#row0, #row3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} 
			else if(inputBinary.length <= 8) {
				$("#rowDiv").addClass("opacity00");
				$("#row0, #row3, #row6").addClass("col-xs-3").removeClass('col-xs-3 col-xs-offset-1');
				$("#row9").show();
				$("#calculation9").show();
				$("#square9").show();
				$("#numberBox", "#columnDiv0").removeAttr('style');
			} else {
				$("#rowDiv").addClass("opacity00");
				$("#numberBox", "#columnDiv0").removeAttr('style');
			}
			
			$("#positionDiv").addClass("opacity00");
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#position0, #position3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
				$("#positionDiv").addClass("opacity00");
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#position0, #position3, #position6").removeClass('col-xs-offset-1');
				$("#positionDiv").addClass("opacity00");
			} else {
				$("#positionDiv").addClass("opacity00");
			}
		break;
		case 'positionDiv':
			temp = $("#multiplicationDiv").html();
			$("#positionDiv").addClass("opacity00");
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#position0, #position3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
				$("#positionDiv").addClass("opacity00");
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#position0, #position3, #position6").removeClass('col-xs-offset-1');
				$("#positionDiv").addClass("opacity00");
			} else {
				$("#positionDiv").addClass("opacity00");
			}
			
			$("#squareDiv").addClass("opacity00");
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#squareDiv").addClass("opacity00");
				$("#square0, #square3").addClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#squareDiv").addClass("opacity00");
				$("#square0, #square3, #square6").removeClass('col-xs-offset-1');
			} else {
				$("#squareDiv").addClass("opacity00");
			}
		break;
		case 'squareDiv':
			$("#squareDiv").addClass("opacity00");
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#squareDiv").addClass("opacity00");
				$("#square0, #square3").addClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#squareDiv").addClass("opacity00");
				$("#square0, #square3, #square6").removeClass('col-xs-offset-1');
			} else {
				$("#squareDiv").addClass("opacity00");
			}
			
			$("#calculationDiv").addClass("opacity00");
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#calculationDiv").addClass("opacity00");
				$("#calculationDiv0 > span, #calculationDiv3 > span").addClass('opacity00').removeAttr('style');
				$("#calculation0, #calculation3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#calculationDiv").addClass("opacity00");
				$("#calculation0, #calculation3, #calculation6").removeClass('col-xs-offset-1');
				$("#calculationDiv0 > span, #calculationDiv3 > span, #calculationDiv6 > span").addClass('opacity00').removeAttr('style');
			} else {
				$("#calculationDiv0 > span, #calculationDiv3 > span, #calculationDiv6 > span, #calculationDiv9 > span").addClass('opacity00').removeAttr('style');
				$("#boxDiv").css("font-family", "");
				$("#calculationDiv").addClass("opacity00");
			}
		break;
		case 'calculationDiv':
			$("#calculationDiv").addClass("opacity00");
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#calculationDiv").addClass("opacity00");
				$("#calculation0, #calculation3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
				$("#calculationDiv0 > span, #calculationDiv3 > span").addClass('opacity00').removeAttr('style');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#calculationDiv").addClass("opacity00");
				$("#calculation0, #calculation3, #calculation6").removeClass('col-xs-offset-1');
				$("#calculationDiv0 > span, #calculationDiv3 > span, #calculationDiv6 > span").addClass('opacity00').removeAttr('style');
			} else {
				$("#boxDiv").css("font-family", "");
				$("#calculationDiv0 > span, #calculationDiv3 > span, #calculationDiv6 > span, #calculationDiv9 > span").addClass('opacity00').removeAttr('style');
				$("#calculationDiv").addClass("opacity00");
			}
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#equalId4").addClass("visibility-hidden");
				$("#multiplicationDiv").addClass("opacity00").removeAttr('style');
				$("#multiply0, #multiply3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#multiplicationDiv").addClass("opacity00");
				$("#multiply0, #multiply3, #multiply6").removeClass('col-xs-offset-1');
			} else {
				$("#multiplicationDiv").addClass("opacity00").removeAttr('style');
			}
			if (intro._direction == "backward") {
				$("#multiplicationDiv").empty().append(temp);
			}
		break;
		case 'multiplicationDiv':
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#equalId4").addClass("visibility-hidden");
				$("#multiplicationDiv").addClass("opacity00").removeAttr('style');
				$("#multiply0, #multiply3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#multiplicationDiv").addClass("opacity00");
				$("#multiply0, #multiply3, #multiply6").removeClass('col-xs-offset-1');
			} else {
				$("#multiplicationDiv").addClass("opacity00").removeAttr('style');
			}
			
			if (intro._direction == "backward") {
				$("#multiplicationDiv").empty().append(temp);
			}
			
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#addition0, #addition3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#additionDiv").addClass("opacity00");
				$("#addition0, #addition3, #addition6").removeClass('col-xs-offset-1');
			} else {
				$("#additionDiv").addClass("opacity00");
			}
		break;
		case 'additionDiv':
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#addition0, #addition3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#additionDiv").addClass("opacity00");
				$("#addition0, #addition3, #addition6").removeClass('col-xs-offset-1');
			} else {
				$("#additionDiv").addClass("opacity00");
			}
			
			$("#resultDiv").addClass("opacity00");
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#result0, #result3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#result0, #result3, #result6").removeClass('col-xs-offset-1');
			} else {
			
			}
		break;
		case 'resultDiv':
			$("#resultDiv").addClass("opacity00");
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#result0, #result3").addClass("col-xs-3").removeClass('col-xs-4 col-xs-offset-2');
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#result0, #result3, #result6").removeClass('col-xs-offset-1');
			} else {
			
			}
			
			
			var inputBinary = $("#numbersCombine").text();
			if(inputBinary.length == 4) {
				$("#finalResult").html("");
			} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
				$("#finalResult").html("");
			} else {
				
				$("#finalResult").html("");
			}
			$("#finalDiv").addClass("opacity00");
			$('.introjs-tooltip').removeClass('hide');
			break;
		case 'finalDiv':
				var inputBinary = $("#numbersCombine").text();
				if(inputBinary.length == 4) {
					$("#finalResult").html("");
				} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
					$("#finalResult").html("");
				} else {
					
					$("#finalResult").html("");
				}
				$("#finalDiv").addClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
		break;
			}
		});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
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
		switch (elementId) {
		case "informationdiv" :
			$('.introjs-nextbutton').hide();
			$("#informationdiv").html("<ul><li id='list1' class='opacity00'><span class='ct-green-color'>Hexadecimal system</span> "
				+"also known as <span class='ct-green-color'>hex</span>,"
				+" is a numbering system which uses base-<span class='ct-green-color'>16</span>.</li>"
				+ "<li id='list2' class='opacity00'>Only combinations of <span class='ct-Maroon-color'>0</span>, " 
				+"<span class='ct-Maroon-color'>1</span>, " 
				+"<span class='ct-Maroon-color'>2</span>, <span class='ct-Maroon-color'>3</span>, <span class='ct-Maroon-color'>4</span>, " 
				+"<span class='ct-Maroon-color'>5</span>, <span class='ct-Maroon-color'>6</span>, <span class='ct-Maroon-color'>7</span>, " 
				+"<span class='ct-Maroon-color'>8</span>, <span class='ct-Maroon-color'>9</span>, <span class='ct-Maroon-color'>A</span>, " 
				+"<span class='ct-Maroon-color'>B</span>, <span class='ct-Maroon-color'>C</span>, <span class='ct-Maroon-color'>D</span>, " 
				+"<span class='ct-Maroon-color'>E</span> and <span class='ct-Maroon-color'>F</span> are "
				+"used to represent a value of any magnitude in <span class='ct-green-color'>hexadecimal system</span>.</li>" 
				+"<li id='list3' class='opacity00'>The numbering system which uses base-<span class='ct-green-color'>8</span> " 
				+"is called <span class='ct-Maroon-color'>octal system</span>.</li>"
				+"<li id='list4' class='opacity00'>Only combinations of <span class='ct-Maroon-color'>0</span>,<span class='ct-Maroon-color'>1</span>," 
				+"<span class='ct-Maroon-color'>2</span>,<span class='ct-Maroon-color'>3</span>,<span class='ct-Maroon-color'>4</span>," 
				+"<span class='ct-Maroon-color'>5</span>,<span class='ct-Maroon-color'>6</span> and <span class='ct-Maroon-color'>7</span> " 
				+"are used to represent a value of any magnitude in <span class='ct-Maroon-color'>octal system</span>.</li></ul>");
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
							$("#informationdiv").addClass('z-index9999999');
							setTimeout(function () {
								intro.nextStep();
							}, 500);
						});
					});
				});
			});
		break;
		case "inputDiv" :
			$("#octalValue").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#inputDiv').removeClass('opacity00');
				var text = "Enter a <span class='ct-code-b-yellow'>hexadecimal</span> value and click on the "+
				"<span style='background-color: green; border-radius: 3px; padding: 0 2px;'>"+
		  		"Convert to Octal</span> button to see how the <span class='ct-code-b-yellow'>hexadecimal</span> to "+
		  		"<span class='ct-code-b-yellow'>octal</span> conversion is done</span>."+
		  		"<br><span class='ct-code-b-yellow'>Note:</span> Enter <span class='ct-code-b-yellow'>hexadecimal</span> value with "+
		  		"prefix <span class='ct-code-b-yellow'>0X</span> "+
		  		"or <span class='ct-code-b-yellow'>0x</span>.<br><span class='errorText'></span>";
		  		$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',text ,function() { 
		  			$("#octalValue").attr("disabled", false);
					$('#octalValue').focus();  
					$('.introjs-prevbutton').show();
		  		});
			});
		break; 
		case "octalValuesDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#calculationTable').removeClass('visibility-hidden');
				$('#octalValuesDiv').removeClass('opacity00');
					$('.introjs-tooltip').removeClass("hide");
					var text = "Let us consider the steps involved in converting a hexadecimal number :<br> "+
					"<ol><li>Consider each hexadecimal digit as a separate digit.</li><span id='OLtooltipText'></span></ol>";
					typing('.introjs-tooltiptext',text, function() { 
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
						$('.user-btn').click(function() {
							$(".user-btn").remove();
							$('#octalValue').effect( "highlight",{color: 'red'}, 800,function() {
								$('.box').removeClass('opacity00');
								var l = $("#octalValue").offset();
								$(".box").offset({"top": l.top,"left": l.left + l.left/12});
								$('.box').removeClass('opacity00');
								$('#octalValuesDiv').removeClass('opacity00');
								TweenMax.to(".box", 1.3, {top: 0, left:0 , onComplete:function() { 
									var text = "<li>Then convert each hexadecimal digit into its <span class='ct-code-b-yellow'>four</span> "+
									"digit binary equivalent.</li>";
									typing('#OLtooltipText',text, function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								}});	
						  	});
						});
				});
			});
		break; 
		case "numberconversion" :
			$("#informationdiv").addClass('z-index1000000');
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberconversion').removeClass('visibility-hidden');
		  		typing('.introjs-tooltiptext',"This table provides the quick reference for converting all the 16 "+
		  				"<span class='ct-code-b-yellow'>hexadecimal</span> numbers "+
		  				"to their <span class='ct-code-b-yellow'>binary</span> equivalent values." ,function() { 
					$('.introjs-nextbutton').show();	
				  	});
				});
		break;
		case 'table':
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$("#table").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', "This table provides the quick reference for converting all the <span class='ct-code-b-yellow'>"+
						"binary</span> equivalent values "+
		  				"to their <span class='ct-code-b-yellow'>octal</span> numbers.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "binaryValuesDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#binaryValuesDiv').removeClass('opacity00');
				$('.box4').removeClass('opacity00');
				TweenMax.staggerFrom(".box4", 0.5, {opacity:0, top: -20}, -0.1, function() {
					for(var i =0;i <=2;i++) {
						for(var j = 0;j <= 15;j++) {
							var p = $('#octal'+i).text();
						    var n = $('#hexvalue'+j).text();
						   	if(p == n) {
						    	$('#hexvalue'+j).effect('highlight',  {color: "#18e4f3"}, 1000);
						      	$('#binvalue'+j).effect('highlight',  {color: "#ff9900"}, 1000);
						      	var l1 = $("#binvalue" + j).offset();
						    	var l2 = $("#binaryDigits" + i).offset();
						    	var topLen = l1.top - l2.top;
						    	var leftLen = l1.left - l2.left;
						    	$("#binaryDigits" + i).removeClass("opacity00");
						    	TweenMax.from("#binaryDigits" + i, 3, {top: topLen, left: leftLen, opacity:1, onComplete: function() {
						    		$('.introjs-tooltip').removeClass("hide");
									var text = "Combine all the resulting binary groups (of four digit each) into a "+
									"<span class='color-yellow'>single binary number</span>.";
						    		typing('.introjs-tooltiptext', text,function() { 
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
						    	}}); 
						   	}
						 }
					}  
				});
			});
		break; 
	
		case "combineBinaryNumbers" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#combineBinaryNumbers').removeClass('opacity00');
				$('#numbersCombine').removeClass('opacity00');
				$('.combine').removeClass('opacity00');
				TweenMax.staggerFrom('.combine', 0.5, {opacity:0, top: -20}, -0.1, function() {
					var p = $("#inputDiv").length - 1;			
					binary(function() {
						var text = "This is the result of converting the given hexadecimal value to binary value.<br><br>Now, "+
						"we will convert the <span class='ct-code-b-yellow'>binary</span> value to its <span class='ct-code-b-yellow'>octal</span> "+
						"equivalent.<br>Separate each binary digit of the resultant binary value.";
						$('.introjs-tooltip').removeClass("hide");
						typing('.introjs-tooltiptext', text,function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();	
						});
					 });
				});
			});
		break; 
		case 'getValues':
				$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var inputBinary = $("#numbersCombine").text();
				if (inputBinary.length % 3 == 2) {
					$("#numberBox td:nth-child(1)").addClass("opacity00");
				} else if(inputBinary.length % 3 == 1) {
					$("#numberBox td:nth-child(1), #numberBox td:nth-child(2)").addClass("opacity00");
				}
				
				$("#getValues").removeClass("opacity00");
				TweenMax.staggerFrom(".binaryBox1", 0.5, {opacity:0, top: -20}, -0.1, function() {
				$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext', "Separate the binary digits into groups.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			});
		break;
		case 'rowDiv':
			$('.introjs-nextbutton').hide();
			var inputBinary = $("#numbersCombine").text();
			if (inputBinary.length % 3 == 2) {
				$("#columnDiv0 td:nth-child(1)").addClass("opacity00");
			} else if(inputBinary.length % 3 == 1) {
				$("#columnDiv0 td:nth-child(1), #columnDiv0 td:nth-child(2)").addClass("opacity00");
			}
			$(".introjs-helperLayer").one("transitionend", function() {
				var inputBinary = $("#numbersCombine").text();
				if(inputBinary.length <= 4) {
					$("#row6, #row9").hide();
					$("#rowDiv").removeClass("opacity00");
					$("#row0, #row3").removeClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
					tweenmaxAnimationFunction("#numberBox", "#columnDiv0");
					tweenmaxAnimationFunction("#numberBox td:nth-child(4)", "#columnDiv3", function() {
						var text = "If length of the last group of the binary value is not equal to 3 then we add " +
						"<span class='ct-code-b-yellow'>0</span>\'s from left side of the last group.";
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', text, function() {	
							zerosAppendDynamically();
						});
					});
				} 
				else if(inputBinary.length <= 8) {
					$("#rowDiv").removeClass("opacity00");
					$("#row0, #row3, #row6").removeClass("col-xs-3").addClass('col-xs-3 col-xs-offset-1');
					$("#row9").hide();
					$("#calculation9").hide();
					$("#square9").hide();
					tweenmaxAnimationFunction("#numberBox", "#columnDiv0");
					tweenmaxAnimationFunction("#numberBox td:nth-child(4)", "#columnDiv3");
					tweenmaxAnimationFunction("#numberBox td:nth-child(7)", "#columnDiv6", function() {
						var text = "If length of the last group of the binary value is not equal to 3 then we add " +
						"<span class='ct-code-b-yellow'>0</span>\'s from left side of the last group.";
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', text, function() {	
							zerosAppendDynamically();
						});
					});
				} else {
					$("#rowDiv").removeClass("opacity00");
					tweenmaxAnimationFunction("#numberBox", "#columnDiv0");
					tweenmaxAnimationFunction("#numberBox td:nth-child(4)", "#columnDiv3");
					tweenmaxAnimationFunction("#numberBox td:nth-child(7)", "#columnDiv6");
					tweenmaxAnimationFunction("#numberBox td:nth-child(10)", "#columnDiv9", function() {	
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext', "In the binary number system each digit is multiplied by <span class='ct-code-b-yellow'>2</span> "+
								"raised to the power of its position.<br>For example: The first digit is multiplied by 2 raised to the power of its "+
								"position which is 0 i.e <span class='ct-code-b-yellow'>2<sup>0</sup></span> and so on.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				}
			});
		break;
		case 'positionDiv':
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"These are the positions for the given bits.", function() {
					$("#positionDiv").removeClass("opacity00");
					var inputBinary = $("#numbersCombine").text();
					if(inputBinary.length == 4) {
						$("#position0, #position3").removeClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
						$("#positionDiv").removeClass("opacity00");
					} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
						$("#position0, #position3, #position6").addClass('col-xs-offset-1');
						$("#positionDiv").removeClass("opacity00");
					} else {
						$("#positionDiv").removeClass("opacity00");
					}
					animationSquare1();
				});
			});
		break;
		case 'squareDiv':
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"These are the multiplying factors for the given positions.", function() {
					$("#squareDiv").removeClass("opacity00");
					var inputBinary = $("#numbersCombine").text();
					if(inputBinary.length == 4) {
						$("#squareDiv").removeClass("opacity00");
						$("#square0, #square3").removeClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
					} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
						$("#squareDiv").removeClass("opacity00");
						$("#square0, #square3, #square6").addClass('col-xs-offset-1');
					} else {
						$("#squareDiv").removeClass("opacity00");
					}
					animationSquare();
				});
			});
		break;
		case 'calculationDiv':
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Processing should start from right to left i.e from "+
				"<span class='ct-code-b-yellow'>2<sup>0</sup></span>."
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', text , function() {
					$("#calculationDiv").removeClass("opacity00");
					var inputBinary = $("#numbersCombine").text();
					if(inputBinary.length == 4) {
						$("#calculationDiv").removeClass("opacity00");
						$("#calculation0, #calculation3").removeClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
					} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
						$("#calculationDiv").removeClass("opacity00");
						$("#calculation0, #calculation3, #calculation6").addClass('col-xs-offset-1');
					} else {
						$("#boxDiv").css("font-family", "arial");
						$("#calculationDiv").removeClass("opacity00");
					}
						collection($("#numberBox td").length-1, $("#numberBox td").length-2);
				});
			});
		break;
		case 'multiplicationDiv':
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', "Flip the each multiplied factor.", function() {
					var inputBinary = $("#numbersCombine").text();
					if(inputBinary.length == 4) {
						$("#equalId4").removeClass("visibility-hidden");
						$("#multiplicationDiv").removeClass("opacity00");
						$("#multiply0, #multiply3").removeClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
					} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
						$("#multiplicationDiv").removeClass("opacity00");
						$("#multiply0, #multiply3, #multiply6").addClass('col-xs-offset-1');
					} else {
						$("#multiplicationDiv").removeClass("opacity00");
					}
					dividing();
				});
			});
		break;
		case 'additionDiv':
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By <span class='ct-code-b-yellow'>adding</span> all the decimal values together "+
				"from <span class='ct-code-b-yellow'>right</span> to <span class='ct-code-b-yellow'>left</span> we get the resultant "+
				"<span class='ct-code-b-yellow'>octal number</span>."
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', text, function() {
					var inputBinary = $("#numbersCombine").text();
					if(inputBinary.length == 4) {
						$("#addition0, #addition3").removeClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
						addition(0);
						addition(3);
					} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
						$("#additionDiv").removeClass("opacity00");
						$("#addition0, #addition3, #addition6").addClass('col-xs-offset-1');
						addition(0);
						addition(3);
						addition(6);
					} else {
						$("#additionDiv").removeClass("opacity00");
						addition(0);
						addition(3);
						addition(6);
						addition(9);
					}
				});
			});
		break;
		case 'resultDiv':
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#resultDiv").removeClass("opacity00");
				var inputBinary = $("#numbersCombine").text();
				if(inputBinary.length == 4) {
					$("#result0, #result3").removeClass("col-xs-3").addClass('col-xs-4 col-xs-offset-2');
					resultFlip(0);
					resultFlip(3);
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "Combine all the digits together.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
					resultFlip(0);
					resultFlip(3);
					resultFlip(6);
					$("#result0, #result3, #result6").addClass('col-xs-offset-1');
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "Combine all the digits together.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					resultFlip(0);
					resultFlip(3);
					resultFlip(6);
					resultFlip(9);
					$('.introjs-tooltip').removeClass('hide');
					typing(".introjs-tooltiptext", "Combine all the digits together.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				}
			});
			break;
			
		case 'finalDiv':
			$(".introjs-nextbutton").hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				var inputBinary = $("#numbersCombine").text();
				if(inputBinary.length == 4) {
					$("#finalResult").html("Result : (<span id='lastResult'>" + $("#output0").text() + "" 
							+ $("#output3").text() + "</span>" +")" + "<span class='ct-green-color'><sub>" + 8 + "</sub></span>");
				} else if(inputBinary.length > 4 && inputBinary.length <= 8) {
					$("#finalResult").html("Result : (<span id='lastResult'>" + $("#output0").text() + "" 
									+ $("#output3").text() + $("#output6").text() + "</span>" +")" + "<span class='ct-green-color'><sub>" + 8 + 
									"</sub></span>");
				} else {
					
					$("#finalResult").html("Result : (<span id='lastResult'>" + $("#output0").text() + "" + $("#output3").text() + "" 
							+ $("#output6").text()  + $("#output9").text() + "</span>)" + "<span class='ct-green-color' id='base'><sub>" + 8 + 
							"</sub></span>");
				}
				$("#finalDiv").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing(".introjs-tooltiptext", "Hence, <br><span class='ct-code-b-yellow'>("+$("#octalValue").val()+")<sub>16</sub></span>" + 
						" = <span class='ct-code-b-yellow'>("+ $("#lastResult").text() +")<sub>8</sub></span>.", function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Click to restart.", function() {
				});
					$('.introjs-nextbutton').hide();
					$('#octalValue').val("");
				});
		break;
		}
	});

	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	
	var x_flag = true;
	$("#octalValue").keydown(function(e) {
			if ($(this).val().length < 1 || $(this).val().indexOf("X") == -1) {
				x_flag = true;
			}
			
			if (e.which == 88 && x_flag) {
				x_flag = !x_flag;
				return true;
			}
			$("#octalValue").val().startsWith("0X");
			if (e.which == 46 || (e.which >= 48 && e.which <= 57) || e.which == 8 || (e.which >= 65 && e.which <= 70)|| (e.which >= 96 && e.which <= 105)) {
				return true;
			} else {
				e.preventDefault();
			}
		});
	
	$("#octalValue").keyup(function() {
		var yourInput = $(this).val();
		re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
		var isSplChar = re.test(yourInput);
		if(isSplChar)
		{
			var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			$(this).val(no_spl_char);
		}
		if($("#octalValue").val().charAt(0) == '0' || $("#octalValue").val().charAt(1) == 'X'){
			$("#octalValue").removeClass("backgroundColor");
			
			if ($("#octalValue").val().length > 2 && $("#octalValue").val().startsWith("0X")) {
				$("#convert").removeClass("disabled").removeClass("opacity40");
				$("#octalValue").removeClass("backgroundColor");
				$('.errorText').empty();
			} else {
				$("#convert").addClass("disabled").addClass("opacity40");
			}
			
			return;
		} else {
			$("#convert").addClass("disabled").addClass("opacity40");
			$('.errorText').html("<b>Since base is 16, you can prefix the number specified by the value parameter with 0X</b>.");
			$("#octalValue").addClass("backgroundColor");
		}
	});
	
		
	$("#convert").click(function() {
		//$('#rowDiv').remove();
		if ($('#convert').hasClass('disabled')) {
			return;
		}
		valuelength = $("#octalValue").val().substring(2, $('#octalValue').val().length); 
		numberlength = valuelength.length;
		p = numberlength - 1 ;
		
		$('.introjs-nextbutton').click();
		
		for (var i=0; i<valuelength.length; i++) {
			$("#octalValuesGet").append("<span id= octal"+i+ " class='box  opacity00 text-center ct-code-b-black '><span id= octalNumbers"+ i +">"+ 
					valuelength[i] +"</span></span>");
		}
		for (var i=0; i<valuelength.length; i++) {
			var finalBinaryVal = parseInt(valuelength[i],16).toString(2);
			if (finalBinaryVal.length < 4) {
				if (finalBinaryVal.length == 1) finalBinaryVal = "000" +  finalBinaryVal;
				else if (finalBinaryVal.length == 2) finalBinaryVal = "00" +  finalBinaryVal;
				else if (finalBinaryVal.length == 3) finalBinaryVal = "0" +  finalBinaryVal;
			}
			$("#binaryValuesGet").append("<span id= binary"+i+ " class='box4 opacity00 text-center ct-code-b-black'>"+
					"<span class='opacity00' id= binaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
		}
		for (var i=0; i<valuelength.length; i++) {
			var finalBinaryVal = parseInt(valuelength[i],16).toString(2);
			if (finalBinaryVal.length < 4) {
				if (finalBinaryVal.length == 1) finalBinaryVal = "000" +  finalBinaryVal;
				else if (finalBinaryVal.length == 2) finalBinaryVal = "00" +  finalBinaryVal;
				else if (finalBinaryVal.length == 3) finalBinaryVal = "0" +  finalBinaryVal;
			}
			$("#numbersCombine").append("<span id= combineBinary"+i+ " class='combine opacity00 text-center ct-code-b-black'>"+
					"<span class='opacity00' id= combineBinaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
		} 
		for (var i=0; i<valuelength.length; i++) {
			var finalBinaryVal = parseInt(valuelength[i],16).toString(2);
			if (finalBinaryVal.length < 4) {
				if (finalBinaryVal.length == 1) finalBinaryVal = "000" +  finalBinaryVal;
				else if (finalBinaryVal.length == 2) finalBinaryVal = "00" +  finalBinaryVal;
				else if (finalBinaryVal.length == 3) finalBinaryVal = "0" +  finalBinaryVal;
				}
			$("#binaryResultValue").append("<span id= binaryresult"+i+ "class='text-center ct-code-b-black '>"+
					"<span id= BinaryDigitsResult"+ i +">"+ finalBinaryVal +"</span></span>");
		}
		input = $("#binaryResultValue").text();
		for (var i = input.length-1 ,j=0; i >= 0,j<input.length; i--,j++) {
			$("#givenBox").append("<td class='binaryBox' id='box1"+ i +"'><span id='text"+ i +"'>" + input[j] + "</span></td>");
		}
		
		lenOfInput = input.length;
		if (lenOfInput % 3 == 2) {
			input = "0" + input;
		} else if(lenOfInput % 3 == 1) {
			input = "00" + input;
		}
		lenOfInput = input.length;
		for (var i = input.length-1 ,j=0; i >= 0,j<input.length; i--,j++) {
			$("#numberBox").append("<td class='binaryBox1' id='boxtd"+ i +"'><span id='text"+ i +"'>" + input[j] + "</span></td>");
		}
		recursion(0);
		});
	
		$('#octalValue').keyup(function() {
	        this.value = this.value.toUpperCase();
	    });


}


	
function binary(callBackFunction) {
	
	if (p >= 0 ) {
		var s = $("#binaryDigits" + p).offset();
		$("#combineBinaryDigits" + p).effect('highlight',  {color: "#ff9900"}, 1000);
		$("#combineBinaryDigits" + p).offset({"top": s.top,"left": s.left});
	 	TweenMax.to("#combineBinaryDigits" + p, 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		  
	      	p--;
	 		binary(callBackFunction);
	  	}});
	      } else {
	    	  if (typeof callBackFunction === "function") {
					callBackFunction();
				}
	      }
  	}
	
function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":1,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}

function animationSquare1() {
	var l1 = $("#rowDiv").offset();
	var l2 = $("#positionDiv").offset();
	var top = l1.top - l2.top;
	var left = l1.left - l2.left;
	TweenMax.from("#positionDiv", 0.5, {top: top, left: left, onComplete: function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}});
}

function recursion(index) {
	var inputSubstring = input.substring(index, index + 3);
	for (var i = index, j = 2; i < index + 3, j >= 0; i++, j--) {
		$("#columnDiv" + index).append("<td class='binaryBox3' id='box5"+ i +"'><span id='number"+ i +"'>" + input[i] + "</span></td>");
	}
	for (var i = index, j = 2; i < index + 3, j >= 0; i++, j--) {
		$("#squareDiv" + index).append('<td class="binaryBox2" id="power' + i + '"></td>');
		$("#power" + i).append("<span class='square' id='twoPower" + i + "'>" + '2' + "<sup>" + j + "</sup></span>");
		$("#positionDiv" + index).append('<td class="box-position" id="power' + i + '"></td>');
		$("#power" + i).append("<span class='square' id='twoPower" + i + "'>" + "<span>" + j + "</span></span>");
	}
	for (var i = index, j = 2; i < index + 3, j >= 0; i++, j--) {
		if(j > 0) {
			$("#calculationDiv" + index).append('<span class="opacity00" id="openBrace' + i + '">(</span><span class="opacity00" id="value' + i +
					'">' + input[i] + "</span><span class='ct-blue-color opacity00' id='multi" + i +"'>x</span>" + 
					'<span class="opacity00" id="squaring' + i + '">' + "2" + '<sup>' + j + '</sup></span>' 
					+ '<span class="close1 opacity00" id="closeBrace' + i + '">)</span>' + "<span class='plus opacity00' id='plus" + i + "'>+</span>");
		} else {
			$("#calculationDiv" + index).append('<span class="opacity00" id="openBrace' + i + '">(</span><span class="opacity00" id="value' + i +
					'">' + input[i] + "</span><span class='ct-blue-color opacity00' id='multi" + i +"'>x</span>" + 
					'<span class="opacity00" id="squaring' + i + '">' + "2" + '<sup>' + j + '</sup></span>' +
					'<span class="close1 opacity00" id="closeBrace' + i + '">)</span>');
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
					'<span class="squaring" id="twoSquare' + i + '">' + "2" + '<sup>' + j + '</sup></span>' + ')<span class="plus">+</span>');
			$("#additionDiv" + index).append('(' + b + ')' + "<span class='plus1' id='plus1'>+</span>");
		} else {
			$("#multiplicationDiv" + index).append('(<span id="value' + j +'">' + input[i] + "</span><span class='ct-blue-color'>x</span>" + 
					'<span class="squaring" id="twoSquare' + i + '">' + "2" + '<sup>' + j + '</sup></span>' + ')');
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

function tweenmaxAnimationFunction(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLen = l1.top - l2.top;
	var leftLen = l1.left - l2.left;
	TweenMax.from(selector2, 1, {top: topLen, left: leftLen, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}}); 
}

function zerosAppendDynamically() {
	var inputBinary = $("#numbersCombine").text();
	$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
	$('.user-btn').click(function() {
		$(".user-btn").remove();
			if (inputBinary.length % 3 == 2) {
				TweenMax.to($("#columnDiv0 td:nth-child(1)"), 1, {css: {opacity: 1}, onComplete: function() {
					$("#columnDiv0 td:nth-child(1)").effect( "highlight", {color:"sandybrown"}, 2000, function() {
						var text = "In the binary number system the power of each digit is multiplied by <span class='ct-code-b-yellow'>2</span> "+
						"raise to the power of its position.<br>For example: The first digit is multiplied by 2 raise to the power of tis position "+
						"which is 0.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				}});
			} else if (inputBinary.length % 3 == 1) {
				TweenMax.to($("#columnDiv0 td:nth-child(1), #columnDiv0 td:nth-child(2)"), 1, {css: {opacity: 1}, onComplete: function() {
					$("#columnDiv0 td:nth-child(1)").effect( "highlight", {color:"sandybrown"}, 2000);
					$("#columnDiv0 td:nth-child(2)").effect( "highlight", {color:"sandybrown"}, 2000, function() {
						typing('.introjs-tooltiptext', "In the binary number system each digit is multiplied by <span class='ct-code-b-yellow'>2</span> "+
								"raised to the power of its position.<br>For example: The first digit is multiplied by 2 raised to the power of its "+
								"position which is 0 i.e <span class='ct-code-b-yellow'>2<sup>0</sup></span> and so on.", function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				//	$('.introjs-nextbutton').show();
				}});
			}
		//});
	});
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

function animationSquare() {
	var l1 = $("#rowDiv").offset();
	var l2 = $("#squareDiv").offset();
	var top = l1.top - l2.top;
	var left = l1.left - l2.left;
	TweenMax.from("#squareDiv", 0.5, {top: top, left: left, onComplete: function() {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
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
					     		$('.introjs-nextbutton, .introjs-prevbutton').show();
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
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		}
	});
}

function addition(index) {
	var l3 = $("#multiplicationDiv" + index).offset();
	var l4 = $("#additionDiv" + index).offset();
	var topLength = l3.top - l4.top;
	$("#multiplicationDiv" + index).effect( "highlight", {color:"#FFD700"}, 2000);
	$("#additionDiv").removeClass("opacity00");
	TweenMax.from("#additionDiv" + index, 2, {top: topLength, onComplete: function() {
		$(".introjs-nextbutton, .introjs-prevbutton").show();
	}});
}

function resultStep(index) {
	var l3 = $("#additionDiv" + index).offset();
	var l4 = $("#output" + index).offset();
	var topLength = l3.top - l4.top;
 	$("#additionDiv" + index).effect( "highlight", {color:"#FF9900"}, 2000);
 	$("#resultDiv").removeClass("opacity00");
	TweenMax.from("#output" + index, 0.5, {top: topLength, onComplete: function() {
		$(".introjs-nextbutton").show();
	}});
}

function resultFlip(index) {
	$("#additionDiv" + index).effect( "highlight", {color:"#FFD700"}, 2000);
	var l3 = $("#additionDiv" + index).offset();
	var l4 = $("#result" + index).offset();
	var topLength = l3.top - l4.top;
	/* $("#multiplicationDiv" + index).effect( "highlight", {color:"#FFD700"}, 2000);
	$("#result").removeClass("opacity00"); */
	TweenMax.from("#result" + index, 1, {top: topLength, onComplete: function() {
		$(".introjs-nextbutton").show();
	}});
	/* flipValue($("#output" + index)); */ 
}