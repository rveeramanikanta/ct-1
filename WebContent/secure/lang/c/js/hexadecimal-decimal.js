var valuelength;
var numberlength;
var p, q, s, t;
var z = 0;
var count;
var flipingSpeed;
var w;
var hexadecimalDecimalReady = function() {
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
		},{
			element :'#numberconversion',
			intro :'',
			position:"right" ,
			
		},{
			element :'#inputDiv',
			intro :'',
			position:"right" ,
			tooltipClass : 'hide'
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
		},{
			element :'#firstbox',
			intro :'',
			position:"right",
			tooltipClass : 'hide' 
		},{
			element :'#positionDiv',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		}, {
			element :'#power',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		}, {
			element :'#powecalculation',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		}, {
			element :'#multiply',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		}, {
			element :'#multiplytwonos',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		}, {
			element :'#sixthbox',
			intro :'',
			position:"right",
			tooltipClass : 'hide'
		}, {
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "numberconversion" :
			$('#inputDiv').addClass('opacity00');
			$('#octalValue').val('');
		break;
		case "inputDiv" :
			$("#binaryResultValue").empty();
			$('#inputDiv').addClass('opacity00');
			$('#octalValue').val('');
			$('#octalValuesDiv').addClass('opacity00');
			$('.box').addClass('opacity00').removeAttr('style');
			$('.box').remove();
			$('.box2').remove();
			$('.box4').remove();
			$('.box6').remove();
			$('.box5').remove();
			$('.box3').remove();
			$('.powercal, .plus').remove();
			$('#multiply').empty();
			$('#multiplytwonos').empty();
			$('#adding').empty();
		break;	
		case "octalValuesDiv" :
			$('#binaryValuesDiv').addClass('opacity00');
			$('.box4').addClass('opacity00').removeAttr('style');
		break;	
		case "binaryValuesDiv" :
			$('#binaryValuesDiv').addClass('opacity00');
			$('.box4').addClass('opacity00').removeAttr('style');
			$('.box4 span').addClass('opacity00').removeAttr('style');
			$('#combineBinaryNumbers').addClass('opacity00');
			//$('#numbersCombine').addClass('opacity00');
			$('.box6').addClass('opacity00').removeAttr('style');
		break;
		case "combineBinaryNumbers" :
			$('#combineBinaryNumbers').addClass('opacity00');
			$('.box6').addClass('opacity00').removeAttr('style');
			$('#binary').removeAttr('style');
			$("#firstbox").addClass("visibility-hidden");
			$(".box3").addClass("opacity00").removeAttr('style');
		break;	
		case "firstbox":
			$('#binary').removeAttr('style');
			$("#firstbox").addClass("visibility-hidden");
			$(".box3").addClass("opacity00").removeAttr('style');
			
			$("#positionDiv").addClass("visibility-hidden");
			$('.box5').addClass("opacity00").removeAttr('style');
		break;	
		case "positionDiv":
			$("#positionDiv").addClass("visibility-hidden");
			$('.box5').addClass("opacity00").removeAttr('style');
			
			$("#secondbox").addClass("visibility-hidden");
			$('.box2').addClass('opacity00').removeAttr('style');
		break;
		case "power":
			$("#secondbox").addClass("visibility-hidden");
			$('.box2').addClass('opacity00').removeAttr('style');
			$("#thirdbox").addClass("visibility-hidden");
			$('.bracket, .cval, .xsymbol, .powerval, .plus').addClass('opacity00').removeAttr('style');
		break;
		case "powecalculation":
			$("#thirdbox").addClass("visibility-hidden");
			$('.bracket, .cval, .xsymbol, .powerval, .plus').addClass('opacity00').removeAttr('style');
			
	 		$("#fourthbox").addClass("visibility-hidden");
	 		$('.bracket3, .onemultiply, .result, .bracket4, .plus2').addClass('opacity00').removeAttr('style');
		break;
		case "multiply":
	 		$("#fourthbox").addClass("visibility-hidden");
	 		$('.bracket3, .onemultiply, .result, .bracket4, .plus2').addClass('opacity00').removeAttr('style');
	 		
	 		if (l > 0) {
				 $("#fifthbox").addClass("visibility-hidden");
				 $('.multiplytwo, .plus4').addClass('opacity00').removeAttr('style');
			 } else {
				 	$("#multiplytwo0").addClass("opacity00").removeAttr('style');
			 }
		 break;	
		case "multiplytwonos":
			 if (l > 0) {
				 $("#fifthbox").addClass("visibility-hidden");
				 $('.multiplytwo, .plus4').addClass('opacity00').removeAttr('style');
			 } else {
				 	$("#multiplytwo0").addClass("opacity00").removeAttr('style');
			 }
			 $("#sixthbox").addClass("visibility-hidden");
				$('.box7').addClass('opacity00').removeAttr('style');
		break;
		case "sixthbox":
			$("#sixthbox").addClass("visibility-hidden");
			$('.box7').addClass('opacity00').removeAttr('style');
		break;
		}
	});
	
	intro.onafterchange(function(targetElement) { 
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
		var elementId = targetElement.id;
		switch (elementId) {
		case "informationdiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			});
		break;
		case "numberconversion" :
			$('.introjs-nextbutton').hide();
			$("#informationdiv").addClass('z-index1000000');
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberconversion').removeClass('visibility-hidden');
		  		typing('.introjs-tooltiptext',"This table provides a quick reference for converting all the 16 hexadecimal numbers to their binary equivalent values." ,function() { 
					$('.introjs-nextbutton').show();	
				  	});
				});
		break;
		case "inputDiv" :
			$("#octalValue").attr("disabled", true);
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#inputDiv').removeClass('opacity00');
		  		$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"Enter a hexadecimal value and click on the <span style='background-color: green; border-radius: 3px; padding: 0 2px;'>"+
		  		"Convert to Decimal</span> button to see how the hexadecimal to decimal conversion is done</span>."+
		  		"<br><span class='color-yellow'>Note:</span> Enter hexadecimal value with prefix <span class='ct-code-b-yellow'>0X</span> or <span class='ct-code-b-yellow'>0x</span>.<br><span class='errorText'></span>" ,function() { 
		  			$("#octalValue").attr("disabled", false);
		  			$('#octalValue').focus();  
		  			$('.introjs-prevbutton').show();
		  		});
				});
		break; 
		case "octalValuesDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#calculationTable').removeClass('visibility-hidden');
				$('#octalValuesDiv').removeClass('opacity00');
				$('.box').removeClass('opacity00');
				var l5 = $("#octalValue").offset();
					    $(".box").offset({"top": l5.top,"left": l5.left});
					 	TweenMax.to(".box", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('.introjs-tooltip').removeClass("hide");
					typing('.introjs-tooltiptext',"Let us Consider the steps involving in converting a hexadecimal number : <ol><li>Consider each hexadecimal digit as a seperate digit.</li><li>Then convert each hexadecimal digit into its four digit binary equivalent.</li></ol>" ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
				  });
				}});
			});
		break; 
		case "binaryValuesDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#binaryValuesDiv').removeClass('opacity00');
				$('.box4').removeClass('opacity00');
				TweenMax.staggerFrom(".box4", 0.5, {opacity:0, top: -60}, -0.5, function() {
					for(var i =0;i <=2;i++){
					 for(var j = 0;j <= 15;j++){
					   var p = $('#octal'+i).text();
					   var n = $('#hexvalue'+j).text();
					   if(p == n){
					    $('#hexvalue'+j).effect('highlight',  {color: "#ff9900"}, 1000);
					      $('#binvalue'+j).effect('highlight',  {color: "#ff9900"}, 1000);
					     
						      console.log("************" + j );
					      	
						     var g = $("#binvalue" + j).offset();
					        console.log("&&&&&&&&&&&&&&&&&&&");
						    $("#binaryDigits" + i).offset({"top": g.top,"left": g.left});
						 	TweenMax.to("#binaryDigits" + i,  1 , {opacity:1, top: 0, left: 0, onComplete: function() {
						 	$("#binaryDigits" + i).removeClass("opacity00");
					    		$('.introjs-tooltip').removeClass("hide");
								typing('.introjs-tooltiptext',"Combine all the resulting binary groups (of four digit each) into a "+
										"<span class='color-yellow'>single binary number</span>." ,function() { 
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
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#combineBinaryNumbers').removeClass('opacity00');
				$('.box6').removeClass('opacity00');
				TweenMax.staggerFrom(".box6", 0.5, {opacity:0, top: -60}, -0.5, function() {
					binary(function() {
						$('.introjs-tooltip').removeClass("hide");
						typing('.introjs-tooltiptext',"This is the result of converting the given hexadecimal value to binary value.<br><br>Now, we will convert the <span class='ct-code-b-yellow'>binary</span> value to its <span class='ct-code-b-yellow'>decimal</span> equivalent.<br>Separate each binary digit of the resultant binary value.",function() { 
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					 });
				});
			});
		break; 
		case "firstbox":
		//$('.box3').remove();
		$('.introjs-helperLayer').one('transitionend', function() {
			$("#firstbox").removeClass("visibility-hidden");
			$(".box3").removeClass("opacity00");
			TweenMax.staggerFrom(".box3", 0.07, {opacity:0, top: -60}, -0.3, function() {
			$('.introjs-tooltip').removeClass("hide");
			typing('.introjs-tooltiptext', "In the binary number system each digit is multiplied by <span class='ct-code-b-yellow'>2</span> raised to the power of its position.<br>For example: The first digit is multiplied by 2 raised to the power of its position which is 0 i.e <span class='ct-code-b-yellow'>2<sup>0</sup></span> and so on.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();	
				});
			}); 
		 });
	break;
		case "positionDiv":
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#positionDiv").removeClass("visibility-hidden");
				$('.box5').removeClass('opacity00');
				TweenMax.staggerFrom(".box5", 0.07, {opacity:0, top: -60}, -0.3, function() {
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "These are the positions for the given bits.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
					});
				}); 
			 });
		break;
	case "power":
			$('.introjs-helperLayer').one('transitionend', function() {
			$("#secondbox").removeClass("visibility-hidden");
			$('.box2').removeClass('opacity00');
			TweenMax.staggerFrom(".box2", 0.07, {opacity:0, top: -60}, -0.3, function() {
			$('.introjs-tooltip').removeClass("hide");
			typing('.introjs-tooltiptext', "These are the multiplying factors for the given positions.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();	
				});
			});
		 })
	break;
	case "powecalculation":
		$('.introjs-helperLayer').one('transitionend', function() {
			$("#thirdbox").removeClass("visibility-hidden");
			$('.introjs-tooltip').removeClass("hide");
			 typing('.introjs-tooltiptext', "Processing should start from right to left i.e from  <span class='ct-code-b-yellow'>2<sup>0</sup></span>.", function() {
				 $('.powercal').removeClass('opacity00');
				 count = 0;
				 flipingSpeed = 0.4;
				 w = 0;
				 l = $("#binaryResultValue").text();
				 x = l.length - 1;
				 calculate(function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();	
					});
				});
		 	})
		break;
	case "multiply":
			$('.introjs-helperLayer').one('transitionend', function() {
				/*flipingSpeed = 0.4;
	 			count = 0;*/
	 			q = 0;
		 		power(function() {
		 			$("#fourthbox").removeClass("visibility-hidden");
		 			$('.introjs-tooltip').removeClass("hide");
		 			typing('.introjs-tooltiptext', "By <span class='ct-code-b-yellow'>adding</span> all the decimal values from <span class='ct-code-b-yellow'>right</span> to <span class='ct-code-b-yellow'>left</span> we get the resultant a <span class='ct-code-b-yellow'>decimal number</span>.", function() {
		 				$('.introjs-nextbutton, .introjs-prevbutton').show();	
		 	 		 });
		 		});
		 	})
	break;
	case "multiplytwonos":
			$('.introjs-helperLayer').one('transitionend', function() {
			 if (l > 0) {
				flipingSpeed = 0.4;
		 		count = 0;
		 		s=0;
		 		console.log("bannu");
		 		poweradd(function() {
		 			$('.introjs-tooltip').removeClass("hide");
		 	 		typing('.introjs-tooltiptext', "Add the values.", function() {
		 	 			$('.introjs-nextbutton, .introjs-prevbutton').show();	
		 				});
		 		});
			 } else {
				 $('.introjs-tooltip').removeClass("hide");
				 console.log("raj");
				typing('.introjs-tooltiptext', "After conversion the decimal value is", function() {
					var l6 = $("#multiplytotal0").offset();
				    $("#multiplytwo0").offset({"top": l6.top,"left": l6.left});
				 	$("#multiplytwo0").removeClass("opacity00");
				 	$("#multiplytotal0").effect('highlight',  {color: "#F08080"}, 1000);
					TweenMax.to("#multiplytwo0", 1.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();	
			 		}});
				});	
			 }
		 })
	break;
	case "sixthbox":
		$('.introjs-nextbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
				var text = $('#adding').text();
				text.substring(1, text.length-5);
				$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "Hence,<br><span class='ct-code-b-yellow'>("+ $("#octalValue").val() + ")<sub>(16)</sub></span>" + "= <span class='ct-code-b-yellow'>" +  $('#adding').html()  + "</span><br> or simply <span class='ct-code-b-yellow'> " + text.substring(1, text.length-5) + "</span>.", function() {
					 $('#multiplytwonos').effect('highlight',  {color: "#ff9900"}, 1000);
					t= 0;
					 addition(function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();	
					});
				})
			});
		break;
	break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
				typing('.introjs-tooltiptext', "Click to restart.", function() {});
				//$('.introjs-nextbutton, .introjs-prevbutton').show();	
					//$('#octalValue').val("");
				});
		break;
		}
	});

intro.start();
$('.introjs-skipbutton').hide();
$('.introjs-prevbutton').hide();
$('.introjs-nextbutton').hide();

$('#informationdiv').html ("<li id='list1' class='opacity00'><span class='ct-green-color'>Hexadecimal system</span> also known as <span class='ct-green-color'>hex</span>,"
		+" is a numbering system which uses base-<span class='ct-green-color'>16</span>.</li>"
+ "<li id='list2' class='opacity00'>Only combinations of <span class='ct-Maroon-color'>0</span>, " 
		+"<span class='ct-Maroon-color'>1</span>, " 
		+"<span class='ct-Maroon-color'>2</span>, <span class='ct-Maroon-color'>3</span>, <span class='ct-Maroon-color'>4</span>, " 
		+"<span class='ct-Maroon-color'>5</span>, <span class='ct-Maroon-color'>6</span>, <span class='ct-Maroon-color'>7</span>, " 
		+"<span class='ct-Maroon-color'>8</span>, <span class='ct-Maroon-color'>9</span>, <span class='ct-Maroon-color'>A</span>, " 
		+"<span class='ct-Maroon-color'>B</span>, <span class='ct-Maroon-color'>C</span>, <span class='ct-Maroon-color'>D</span>, " 
		+"<span class='ct-Maroon-color'>E</span> and <span class='ct-Maroon-color'>F</span> are "
		+"used to represent a value of any magnitude in <span class='ct-green-color'>hexadecimal system</span>.</li>" 
+"<li id='list3' class='opacity00'>We are converting the hexadecimal value into binary value and then binary value to decimal.</li>" 
		+"<li id='list4' class='opacity00'>To convert a hexadecimal to a decimal value we have to perform the below two steps :"+
		"<ol style='margin-left: 5px;'><li>First we will convert hexadecimal to its binary equivalent.</li>"+
		"<li>Then we will convert the resultant binary into its decimal equivalent.</li></ol></li>");	
		setTimeout(function () {
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$("#list3").fadeTo(300, 1, function() {
						$("#list4").fadeTo(300, 1, function() {
							setTimeout(function(){
								intro.nextStep();
								}, 500);
							});
						});
					});
				});
		})

		var x_flag = true;
		$("#octalValue").keydown(function(e) {
				if ($(this).val().length < 1 || $(this).val().indexOf("X") == -1) {
					x_flag = true;
				}
				
				if (e.which == 88 && x_flag) {
					x_flag = !x_flag;
					return true;
				}
				if (e.which == 46 || (e.which >= 48 && e.which <= 57) || e.which == 8 || (e.which >= 65 && e.which <= 70) || (e.which >= 96 && e.which <= 105)) {
					return true;
				} else {
					e.preventDefault();
				}
			});
			
		$("#convert").click(function() {
			/*$('.box2').remove();
			$('.box4').remove();
			$('.box6 span').remove();
			$('.box5 span').remove();
			$('#box3').remove();
			$('.powercal').remove();*/
			if ($('#convert').hasClass('disabled')) {
				return;
			}
			valuelength = $("#octalValue").val().substring(2, $('#octalValue').val().length); 
			numberlength = valuelength.length;
			p = numberlength - 1 ;
			
			
			$('.introjs-nextbutton').click();
			
			for (var i=0; i<valuelength.length; i++) {
				$("#octalValuesGet").append("<span id= octal"+i+ " class='box  opacity00 text-center ct-code-b-black '><span id= octalNumbers"+ i +">"+ valuelength[i] +"</span></span>");
			}
			for (var i=0; i<valuelength.length; i++) {
				var finalBinaryVal = parseInt(valuelength[i],16).toString(2);
				if (finalBinaryVal.length < 4) {
					if (finalBinaryVal.length == 1) finalBinaryVal = "000" +  finalBinaryVal;
					else if (finalBinaryVal.length == 2) finalBinaryVal = "00" +  finalBinaryVal;
					else if (finalBinaryVal.length == 3) finalBinaryVal = "0" +  finalBinaryVal;
				}
				$("#binaryValuesGet").append("<span id= binary"+i+ " class='box4 opacity00 text-center ct-code-b-black '><span class='opacity00' id= binaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
			}
			for (var i=0; i<valuelength.length; i++) {
				var finalBinaryVal = parseInt(valuelength[i],16).toString(2);
				if (finalBinaryVal.length < 4) {
					if (finalBinaryVal.length == 1) finalBinaryVal = "000" +  finalBinaryVal;
					else if (finalBinaryVal.length == 2) finalBinaryVal = "00" +  finalBinaryVal;
					else if (finalBinaryVal.length == 3) finalBinaryVal = "0" +  finalBinaryVal;
				}
				$("#numbersCombine").append("<span id= combineBinary"+i+ " class='box6 text-center ct-code-b-black opacity00'><span class='opacity00' id= combineBinaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
			}
			for (var i=0; i<valuelength.length; i++) {
				var finalBinaryVal = parseInt(valuelength[i],16).toString(2);
				if (finalBinaryVal.length < 4) {
					if (finalBinaryVal.length == 1) finalBinaryVal = "000" +  finalBinaryVal;
					else if (finalBinaryVal.length == 2) finalBinaryVal = "00" +  finalBinaryVal;
					else if (finalBinaryVal.length == 3) finalBinaryVal = "0" +  finalBinaryVal;
					}
				$("#binaryResultValue").append("<span id= binaryresult"+i+ "class='text-center ct-code-b-black '><span id= BinaryDigitsResult"+ i +">"+ finalBinaryVal +"</span></span>");
				}
			
			l = $("#binaryResultValue").text();
			 x = l.length - 1;
			for (var i=0; i<l.length; i++) {
				$("#binary").append("<span id= a"+i+ " class='box3 text-center ct-code-b-black opacity00'><span id= b"+ i +">"+ l[i] +"</span></span>");
			}
			
			for (var i = l.length - 1, j=0; i >= 0; i--, j++) {
				$("#power").append("<span class='box2 opacity00 text-center ct-code-b-black'>" +
						"<span id= powervalues" +i+ ">" + 2 +"<sup class='ct-code-b-green'>"+ i +"</sup></span></span>");
				$("#position").append("<span class='box5 opacity00 text-center ct-code-b-green'>" +
						"<span 'ct-code-b-green'>"+ i +"</span></span>");
				if (i > 0) {
					$("#powecalculation").append("<span class= 'powercal' id = 'overall" +i+"'><span id = 'bracket" + i +"' class = 'bracket opacity00'>(</span>"+ 
							"<span id = 'total" + i + "' class='total'>"+ 
							"<span id= c"+j+ " class='cval ct-code-b-black opacity00'>"+ l[j] +"</span>"+
							"<b id = 'ct-code-b-red" + i +"'class='xsymbol ct-code-b-red opacity00'> x </b></span> "+ 
							"<span id = 'powerv" + i + "' class= 'powerval ct-code-b-black opacity00'>" + 2 +"<sup class='ct-code-b-green'>"+ i +"</sup></span>" +
							"<span id = 'bracket2" + i +"'  class = 'bracket opacity00'>)</span></span><span id = 'plus" + i + "' class = 'plus opacity00'> + </span>");
		        } else {
		        	$("#powecalculation").append("<span class= 'powercal' id = 'overall" + i +"'><span id = 'bracket" + i +"' class = 'bracket opacity00'>(</span>" + 
		        			"<span id = 'total" + i +"' class = 'total'><span id= c"+j+ " class='cval ct-code-b-black opacity00'>"+ l[j] +"</span>" +
		        			"<b id = 'ct-code-b-red" + i +"' class='xsymbol ct-code-b-red opacity00'> x </b></span> "+ 
		        			"<span id='powerv" + i +"' class='powerval ct-code-b-black opacity00'>" + 2 +"<sup class='ct-code-b-green'>"+ i +"</sup></span>" +
		        			"<span id = 'bracket2" + i +"'class = 'bracket opacity00'>)</span></span>");
		        			
		        }
				//$('.bracket, .cval, .xsymbol, .powerval').addClass('opacity00').removeAttr('style');
				
			}
			
			for (var i = l.length - 1, j=0; i >= 0; i--, j++) {
				var result = Math.pow(2, i);
				if (i > 0) {
					$("#multiply").append("<span id = 'multiplytotal" + i + "'class = multiplytotal'><span id = 'bracket3" + i + "' class = 'bracket3 opacity00'>(</span><span class= 'onemultiply opacity00' id = 'onemultiply" + i + "'><span id= c"+j+ " class='cval1  ct-code-b-black'>"+ l[j] +"</span><span class='xsymbol1 text-center ' ><b class='ct-code-b-red into' > x </b></span></span>" +
							"<span id = 'd" + i + "'class = 'result opacity00'>" + result + "</span><span id = 'bracket4" + i + "' class = 'bracket4 opacity00'>)</span></span><span id = 'plus2" + i + "' class = 'plus2 opacity00'>  + </span>");
		      
				} else {
		      		$("#multiply").append("<span id = 'multiplytotal" + i + "'class = multiplytotal'><span id = 'bracket3"+ i +"' class = 'bracket3 opacity00'>(</span><span class= 'onemultiply opacity00' id = 'onemultiply" + i + "'><span id= c"+j+ " class='cval1 ct-code-b-black '>"+ l[j] +"</span><span class='xsymbol1 text-center ' ><b class='ct-code-b-red into' > x </b></span></span>" +
							"<span id = 'd" + i + "'class = 'result opacity00'>" + result + "</span><span id = 'bracket4"+ i +"' class = 'bracket4 opacity00'>)</span></span>");
				}
			}
			//$('.bracket3, .onemultiply, .xsymbol1, .cval1, .result, .bracket4, .plus2').addClass('opacity00').removeAttr('style');
			for (var i = l.length - 1, j=0; i >= 0; i--, j++) {
				var result = Math.pow(2, i);
				var multiply = l[j] * result;
				if (i > 0) {
					$("#multiplytwonos").append("<span id = 'multiplytwo" + i + "' class = 'multiplytwo opacity00'>(<span class='box1 text-center ct-code-b-black' id = m" + i + ">"+multiply+"</span>)</span></span><span id = 'plus4" + i +"'class = 'plus4 opacity00'>  + </span>");		
					
				} else {
					$("#multiplytwonos").append("<span id = 'multiplytwo" + i + "' class = 'multiplytwo opacity00'>(<span class='box1 text-center ct-code-b-black' id = m" + i + ">"+multiply+"</span>)</span></span>");
				}
			}
				var sum = 0;
			for (var i = l.length - 1, j=0; i >= 0; i--, j++) {
				var result = Math.pow(2, i);
				var multiply = l[j] * result;
				sum = sum + multiply;
				if (i == 0) {
					$("#adding").append("<span><span class='box7 text-center' id = r" + i + ">("+sum+")<sub class=''id='radix'>"+10 +"</sub></span></span>");
					}
				}
			});

			$("#octalValue").keyup(function() {
				
				/* if ($(this).val().length == 1 && $(this).val().indexOf("0") != 0) {
					$(this).val("");
				}
				
				if ($(this).val().indexOf("x") != 1 && $(this).val().length == 2) {
					console.log($(this).val().length);
					console.log($(this).val().indexOf("x"));
					$(this).val("0");
				} */
				
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
					$('.errorText').html("Since base is 16, you can prefix the number specified by the value parameter with 0X.");
					$("#octalValue").addClass("backgroundColor");
				}
				
				/* if ($("#octalValue").val().length > 2 && $("#octalValue").val().startsWith("0X")) {
					$("#convert").removeClass("disabled").removeClass("opacity40");
					$("#octalValue").removeClass("backgroundColor");
					$('.errorText').empty();
				} else {
					$("#convert").addClass("disabled").addClass("opacity40");
					$('.errorText').html("Since to convert hexadecimal to decimal, use only 0 to F.");
					$("#octalValue").addClass("backgroundColor");
				} */
				 
			});
			
			$('#octalValue').keyup(function() {
		        this.value = this.value.toUpperCase();
		    });

}

	
function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": 5,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	});
}
count = 0;
flipingSpeed = 0.4;
w = 0;
function calculate(callBackFunction) {
	var l1 = $("#b" + x).offset();
 	var l2 = $("#c" + x).offset();
 	var toplen = l1.top - l2.top;
 	var leftlen = l1.left- l2.left;
 	var l3 = $("#powervalues" + w).offset();
 console.log("l3 ===" + l3);
    $("#powerv" + w).offset({"top": l3.top,"left": l3.left});
 	TweenMax.to("#bracket2" + w, flipingSpeed, {opacity:1, onComplete: function() {
 	$("#bracket2" + w).removeClass("opacity00");
	$("#powerv" + w).removeClass("opacity00");
	$("#powervalues" + w).effect('highlight',  {color: "#F08080"}, 1500);
	TweenMax.to("#powerv"+ w, flipingSpeed, {Color:"blue", opacity:1, top: 0, left: 0, onComplete:function() {
	 	TweenMax.to("#ct-code-b-red" + w,flipingSpeed , {opacity:1, onComplete: function() {
	 		$("#ct-code-b-red" + w).removeClass("opacity00");
	 			$("#c" + x).removeClass("opacity00");
	 			TweenMax.from("#c"+ x,flipingSpeed, {backgroundColor:"#7FFFD4", opacity:1, top: toplen, left: leftlen, onComplete:function() {
	 				TweenMax.to("#bracket" + w,flipingSpeed , {opacity:1, onComplete: function() {
 		 				$("#bracket" + w).removeClass("opacity00");
	 					TweenMax.to("#plus" + (w+1),flipingSpeed, {opacity:1, onComplete: function() {
	 		 				$("#plus" + (w+1)).removeClass("opacity00");
		 					if (x >= 1 && w < l.length) {
			 		  			x--;
				 	  			w++;
								count++;
				 	  			if (count >= 2) {
				 	  				flipingSpeed = 0.09;
				 	  			}
			 		  	    	calculate(callBackFunction);
	 		  	    		} else {
		 		  	    		if(typeof callBackFunction === "function") {
		 		  	    			callBackFunction();
		 		  	    		}
	 		  	    		}
	 					}});
	 				}});
	 			}});
	 		}});		

  		}});
	}});
}	

q = 0;
function power(callBackFunction) {
	if (q < l.length) {
		$("#fourthbox").removeClass("visibility-hidden");
		var l4 = $("#total" + q).offset();
	    $("#onemultiply" + q).offset({"top": l4.top,"left": l4.left});
	    var l5 = $("#powerv" + q).offset();
	    $("#d" + q).offset({"top": l5.top,"left": l5.left});
	 	TweenMax.to("#bracket4" + q, flipingSpeed , {opacity:1, onComplete: function() {
		$("#bracket4" + q).removeClass("opacity00");
		$("#d" + q).removeClass("opacity00");
		$("#d" + q).effect('highlight',  {color: "#F08080"}, 1000);
		TweenMax.to("#d"+ q, flipingSpeed, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
	 	$("#onemultiply" + q).removeClass("opacity00");
	 	$("#total" + q).effect('highlight',  {color: "#F08080"}, 3000);
		TweenMax.to("#onemultiply"+ q, flipingSpeed, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			TweenMax.to("#bracket3" + q, flipingSpeed, {opacity:1, onComplete: function() {
					$("#bracket3" + q).removeClass("opacity00");
					console.log("$$$$$$$$$$$$$$$$$$$$$");
					console.log($("#plus2" + (q+1)));
					TweenMax.to("#plus2" + (q+1), flipingSpeed , {opacity:1, onComplete: function() {
						$("#plus1" + (q+1)).removeClass("opacity00");
						q++;
						count++;
		 	  			if (count >= 2) {
		 	  				flipingSpeed = 0.09;
		 	  			}
		  				power(callBackFunction);
						}});
					}});
	 			 }});
		 	}});
	 	}});
	} else {
			console.log("else statemenet");
			if(typeof callBackFunction === "function") {
				console.log("callbackfunction");
   				callBackFunction();
   			}
	}
}

s = 0;
function poweradd(callBackFunction) {
	if (s < l.length) {
		$("#fifthbox").removeClass("visibility-hidden");
		var l6 = $("#multiplytotal" + s).offset();
	    $("#multiplytwo" + s).offset({"top": l6.top,"left": l6.left});
	 	$("#multiplytwo" + s).removeClass("opacity00");
	 	$("#multiplytotal" + s).effect('highlight',  {color: "#F08080"}, 1000);
		TweenMax.to("#multiplytwo"+ s,flipingSpeed, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			TweenMax.to("#plus4" + (s+1),flipingSpeed , {opacity:1, onComplete: function() {
				$(".plus4" + (s+1)).removeClass("opacity00");
			 	s++;
			 	count++;
 	  			
 	  			if (count >= 2) {
 	  				flipingSpeed = 0.09;
 	  			}
	  			poweradd(callBackFunction);
  			}});
		}});
		} else {
			if(typeof callBackFunction === "function") {
			console.log("callbackfunction");
			callBackFunction();
		}
	}
}


t = 0;
function addition(callBackFunction) {
	
	$("#sixthbox").removeClass("visibility-hidden");
	var l7 = $("#multiplytwonos").offset();
    $("#r" + t).offset({"top": l7.top,"left": l7.left});
 	$("#r" + t).removeClass("opacity00");
	TweenMax.to("#r"+ t, 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		if(typeof callBackFunction === "function") {
			callBackFunction();
		}
  }});

}


function binary(callBackFunction) {
	if (p >= 0 ) {
		var s = $("#binaryDigits" + p).offset();
		$("#combineBinaryDigits" + p).effect('highlight',  {color: "#ff9900"}, 1000);
		$("#combineBinaryDigits" + p).offset({"top": s.top,"left": s.left});
		$("#binaryDigits" + p).removeClass("opacity00");
	 	TweenMax.to("#combineBinaryDigits" + p, 1.2, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
	      	p--;
	 		binary(callBackFunction);
	  	}});
	      } else {
				if(typeof callBackFunction === "function") {
					console.log("callbackfunction");
					callBackFunction();
				}
  	}
}