var valuelength;
var numberlength;
var p;

var hexadecimalBinaryReady = function() {
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
			position:"right" 
		},{
			element :'#inputDiv',
			intro :'',
			position:"right" ,
			tooltipClass : 'hide',
		},{
			element :'#octalValuesDiv',
			intro :'',
			position:"right",
			tooltipClass : 'hide',
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
		},
		{
			element :'#restartBtn',
			intro :'',
			tooltipClass: 'hide',
			position:"right"
		}]
	});
	
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "inputDiv" :
			$("#convert").addClass("disabled").attr("disabled", "disabled");
			$('#octalValue').val('');
			$('#calculationTable').addClass('visibility-hidden');
			$('.box').addClass('opacity00').removeAttr('style');
			$('.box').remove();
			$('.box1').remove();
			$('.box2').remove();
			
		break;
		case "octalValuesDiv" :
			$("#convert").addClass("disabled").attr("disabled", "disabled");
			$('.box').addClass('opacity00').removeAttr('style');
			$('#binaryValuesDiv').addClass('opacity00');
			$('.box1').addClass('opacity00').removeAttr('style');
			$('.box1 span').addClass('opacity00').removeAttr('style');
			$('#octalValuesDiv').addClass('opacity00');
		break;
		case "binaryValuesDiv" :
			$('#binaryValuesDiv').addClass('opacity00');
			$('.box1').addClass('opacity00').removeAttr('style');
			$('.box1 span').addClass('opacity00').removeAttr('style');
			$('#combineBinaryNumbers').addClass('opacity00');
			$('#numbersCombine').addClass('opacity00');
			$('.box2').addClass('opacity00').removeAttr('style');
		break;
		case "combineBinaryNumbers" :
				$('#combineBinaryNumbers').addClass('opacity00');
				$('#numbersCombine').addClass('opacity00');
				$('.box2').addClass('opacity00').removeAttr('style');
				$("#restartBtn").addClass("opacity00");
		break;
		case "restartBtn":
			$("#restartBtn").addClass("opacity00");
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
		$("#informationdiv").html("<ul><li id='list1' class='opacity00'><span class='ct-green-color'>Hexadecimal system</span> also known as "+
				"<span class='ct-green-color'>hex</span>,"
			+" is a numbering system which uses base-<span class='ct-green-color'>16</span>.</li>"
			+ "<li id='list2' class='opacity00'>Only combinations of <span class='ct-Maroon-color'>0</span>, " 
			+"<span class='ct-Maroon-color'>1</span>, " 
			+"<span class='ct-Maroon-color'>2</span>, <span class='ct-Maroon-color'>3</span>, <span class='ct-Maroon-color'>4</span>, " 
			+"<span class='ct-Maroon-color'>5</span>, <span class='ct-Maroon-color'>6</span>, <span class='ct-Maroon-color'>7</span>, " 
			+"<span class='ct-Maroon-color'>8</span>, <span class='ct-Maroon-color'>9</span>, <span class='ct-Maroon-color'>A</span>, " 
			+"<span class='ct-Maroon-color'>B</span>, <span class='ct-Maroon-color'>C</span>, <span class='ct-Maroon-color'>D</span>, " 
			+"<span class='ct-Maroon-color'>E</span> and <span class='ct-Maroon-color'>F</span> are "
			+"used to represent a value of any magnitude in <span class='ct-green-color'>hexadecimal system</span>.</li>"
			+ "<li id='list3' class='opacity00'>In the <span class='ct-green-color'>hexadecimal system,</span> the values " 
			+"<span class='ct-green-color'>10</span>, " 
			+"<span class='ct-green-color'>11</span>, <span class='ct-green-color'>12</span>, <span class='ct-green-color'>13</span>, " 
			+"<span class='ct-green-color'>14</span> and <span class='ct-green-color'>15</span> are represented as " 
			+"<span class='ct-green-color'>A</span>, <span class='ct-green-color'>B</span>, <span class='ct-green-color'>C</span>, " 
			+"<span class='ct-green-color'>D</span>, <span class='ct-green-color'>E</span> and <span class='ct-green-color'>F</span>.</li>"
			+"<li id='list4' class='opacity00'>Binary numbers can only be <span class='ct-green-color'>0's</span> and "
			+"<span class='ct-green-color'>1's</span>."+
			"</li></ul>");
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
		case "numberconversion" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberconversion').removeClass('visibility-hidden');
		  		var text = "This table provides the quick reference for converting all the 16 hexadecimal numbers to their binary equivalent values."
				typing('.introjs-tooltiptext',text,function() { 
					$('.introjs-nextbutton').show();	
				  	});
				});
		break;
		case "inputDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#inputDiv').removeClass('opacity00');
				var text = "Enter a hexadecimal value and click on the <span style='background-color: green; border-radius: 3px; padding: 0 2px;'>"+
		  		"Convert to Binary</span> button to see how the hexadecimal to binary conversion is done</span>."+
		  		"<br><span class='color-yellow'>Note:</span> Enter hexadecimal value with prefix <span class='ct-code-b-yellow'>0X</span> "+
		  		"or <span class='ct-code-b-yellow'>0x</span>.<br><span class='errorText'></span>";
		  		$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',text ,function() { 
					$('#octalValue').focus();  
		  		});
			});
		break; 
		case "octalValuesDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#calculationTable').removeClass('visibility-hidden');
				$('.introjs-tooltip').css({"min-width": "250px"});
				var text = "Let us consider the steps involved in converting a hexadecimal number :<br> "+
					"<ol><li>Consider each hexadecimal digit as a separate digit.</li>"+
					"<li>Then convert each hexadecimal digit into its <span class='ct-code-b-yellow'>four</span> digit binary equivalent.</li></ol>";
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',text, function() { 
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$('.user-btn').click(function() {
						$(".user-btn").remove();
						$('#octalValue').effect( "highlight",{color: 'red'}, 800,function() {
							var l = $("#octalValue").offset();
							$(".box").offset({"top": l.top,"left": l.left + l.left/8});
							$('.box').removeClass('opacity00');
							$('#octalValuesDiv').removeClass('opacity00');
							TweenMax.to(".box", 1.3, {top: 0, left:0 , onComplete:function() { 
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							}});	
					  	});
					});
				}); 
			});
		break; 
		case "binaryValuesDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#binaryValuesDiv').removeClass('opacity00');
				$('.box1').removeClass('opacity00');
				TweenMax.staggerFrom(".box1", 1.2, {opacity:0, top: -60}, -0.5, function() {
					for(var i =0;i <=2;i++) {
						for(var j = 0;j <= 15;j++) {
							var p = $('#octal'+i).text();
						    var n = $('#hexvalue'+j).text();
						   	if(p == n) {
						    	$('#hexvalue'+j).effect('highlight',  {color: "#18e4f3"}, 1000);
						      	$('#binvalue'+j).effect('highlight',  {color: "#ff9900"}, 1000);
						      	var l1 = $("#binvalue" + j + " span").offset();
						    	var l2 = $("#binaryDigits" + i).offset();
						    	var topLen = l1.top - l2.top;
						    	var leftLen = l1.left - l2.left;
						    	$("#binaryDigits" + i).removeClass("opacity00");
						    	TweenMax.from("#binaryDigits" + i, 3, {top: topLen, left: leftLen, opacity:1, onComplete: function() {
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
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#combineBinaryNumbers').removeClass('opacity00');
				$('#numbersCombine').removeClass('opacity00');
				$('.box2').removeClass('opacity00');
				TweenMax.staggerFrom(".box2", 0.5, {opacity:0, top: -60}, -0.5, function() {
					binary();
				});
				
			});
		break; 
		
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$(".introjs-tooltip").css("min-width", "125px");
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					});
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
				$("#convert").removeClass("disabled opacity40").removeAttr("disabled");
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
			$("#binaryValuesGet").append("<span id= binary"+i+ " class='box1 opacity00 text-center ct-code-b-black '><span class='opacity00' "+
					"id= binaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
		}
		
		for (var i=0; i<valuelength.length; i++) {
			var finalBinaryVal = parseInt(valuelength[i],16).toString(2);
			if (finalBinaryVal.length < 4) {
				if (finalBinaryVal.length == 1) finalBinaryVal = "000" +  finalBinaryVal;
				else if (finalBinaryVal.length == 2) finalBinaryVal = "00" +  finalBinaryVal;
				else if (finalBinaryVal.length == 3) finalBinaryVal = "0" +  finalBinaryVal;
			}
			$("#numbersCombine").append("<span id= combineBinary"+ i + " class='box2 opacity00 text-center ct-code-b-black'><span class='opacity00' "+
					"id= combineBinaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
		}
		
		for (var i=0; i<valuelength.length; i++) {
			var finalBinaryVal = parseInt(valuelength[i],16).toString(2);
			if (finalBinaryVal.length < 4) {
				if (finalBinaryVal.length == 1) finalBinaryVal = "000" +  finalBinaryVal;
				else if (finalBinaryVal.length == 2) finalBinaryVal = "00" +  finalBinaryVal;
				else if (finalBinaryVal.length == 3) finalBinaryVal = "0" +  finalBinaryVal;
				}
			$("#binaryResultValue").append("<span id= binaryresult"+i+ "class='text-center ct-code-b-black '><span id= BinaryDigitsResult"+ i +">"
					+ finalBinaryVal +"</span></span>");
			}
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
		  if (p >= 0) {
	      	p--;
	 		binary();
	      }
		  if (typeof callBackFunction === "function") {
				callBackFunction();
			}
	  	}});
  	} else {
  		$('.introjs-tooltip').removeClass("hide");
  	//	var text = $("#numbersCombine").text();
		var text = "Hence,<br> <span class='ct-code-b-yellow'>(" + $("#octalValue").val() + 
		")<sub>16</sub></span> = <span class='ct-code-b-yellow'>(" + $("#numbersCombine").text() + ")<sub>2</sub></span>.";
		typing('.introjs-tooltiptext',text, function() { 
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		 });
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