var valuelength;
var numberlength;
var p;
var q;
var s;

var octalToHexadecimalConversionReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		 window.location.search = "?restart=1";
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
			tooltipClass: "hide",
			position:"right" 
		},{
			element :'#numberconversion1',
			intro :'',
			tooltipClass: "hide",
			position:"right" 
		},{
			element :'#numberconversion',
			intro :'',
			tooltipClass: "hide",
			position:"bottom" 
		},{
			element :'#inputDiv',
			intro :'',
			tooltipClass: "hide",
			position:"right" 
		},{
			element :'#octalValuesDiv',
			intro :'',
			tooltipClass: "hide",
			position:"right" 
		},{
			element :'#binaryValuesDiv',
			intro :'',
			tooltipClass: "hide",
			position:"right" 
		},{
			element :'#combineBinaryNumbers',
			intro :'',
			tooltipClass:'hide',
			position:"right"
		},{
			element :'#divideBinaryNumbersDiv',
			intro :'',
			tooltipClass:'hide',
			position:"right"  
		},{
			element :'#divideGroupOfFourDiv',
			intro :'',
			tooltipClass:'hide',
			position:"right" 
		},{
			element :'#binaryResult',
			intro :'',
			tooltipClass:'hide',
			position:"right"
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	
	intro.onbeforechange(function(targetElement) {
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
		switch(elementId) {
		case "numberconversion1":
			$('#numberconversion').addClass('visibility-hidden');
			break;
		case "numberconversion":
			$('#numberconversion').addClass('visibility-hidden');
			$('#inputDiv').addClass('opacity00');
			$("#convert").addClass("disabled");
			$("#octalValue").removeClass("backgroundColor");
			break;
		case "inputDiv":
			$("#convert").addClass("disabled").attr("disabled", true);
			
			$('#calculationTable').addClass('visibility-hidden');
			$('#octalValuesDiv').addClass('opacity00');
			$('.box').addClass('opacity00');
			
			$(".box, .box1, .divide-box, #binaryResultValue *").remove();
			$("#numbersCombine, #divideBinaryNumbers").empty();
			break;
		case "octalValuesDiv":
			$('#calculationTable').addClass('visibility-hidden');
			$('#octalValuesDiv').addClass('opacity00');
			$('.box').addClass('opacity00');
			
			$('#binaryValuesDiv').addClass('opacity00');
			$('.box1').addClass('opacity00');
			break;
			
		case "binaryValuesDiv":
			$('#binaryValuesDiv').addClass('opacity00');
			$('.box1').addClass('opacity00');
			
			$('#combineBinaryNumbers, #numbersCombine').addClass('opacity00');
			$('#combineBinaryDigits0, #combineBinaryDigits1, #combineBinaryDigits2').addClass('opacity00').removeAttr('style');			
			break;
		case "combineBinaryNumbers":
			$('#combineBinaryNumbers, #numbersCombine').addClass('opacity00');
			$('#combineBinaryDigits0, #combineBinaryDigits1, #combineBinaryDigits2').addClass('opacity00').removeAttr('style');	
			
			$('#divideBinaryNumbersDiv').addClass('opacity00');
			break;
		case "divideBinaryNumbersDiv":
			$('#divideBinaryNumbersDiv').addClass('opacity00');
			
			$('#divideGroupOfFourDiv').addClass('opacity00');
			$('#groupOfFourDivideSpan').addClass('opacity00');
			break;
			
		case "divideGroupOfFourDiv":
			$('#divideGroupOfFourDiv').addClass('opacity00');
			$('#groupOfFourDivideSpan').addClass('opacity00');
			$("#binaryResult").addClass("opacity00");
			break;
		}
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "numberconversion1" :
			$("#octalValue").attr("disabled", true);
			$('.user-btn').remove();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberconversion1').removeClass('visibility-hidden');
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext',"This table provides a quick reference for converting all the 8 "+
						"<span class='ct-code-b-yellow'>octal</span> numbers to their "+
						"<span class='ct-code-b-yellow'>binary</span> equivalent values." ,function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "numberconversion" :
			$("#octalValue").attr("disabled", true);
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberconversion').removeClass('visibility-hidden');
				$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"This table provides a quick reference for converting all the "+
							"<span class='ct-code-b-yellow'>binary</span> equivalent values to their "+
							"<span class='ct-code-b-yellow'>hexadecimal</span> digits." ,function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
				  	});
				});
			break;
		case "inputDiv" :
			$("#octalValue").val("");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#inputDiv').removeClass('opacity00');
				$(".introjs-tooltip").removeClass("hide");
				typing('.introjs-tooltiptext', "Provide an octal number and click on <span class='convert'>Convert to Hexadecimal</span>"+
						" button to understand how an octal number converted to hexadecimal.<br>"+
						"<span class='ct-code-b-yellow'>Note:</span> Enter octal value with "+
						"prefix <span class='ct-code-b-yellow'>0</span>.<br><span style='margin-left: 35px;'>Use an octal values "+
						"from <span class='ct-code-b-yellow'>0</span> to <span class='ct-code-b-yellow'>7</span></span>.<br>"+
						"<span class='errorText'></span>", function() {
		  				$("#octalValue").attr("disabled", false);
						$("#octalValue").focus();
						$('.introjs-prevbutton').show();
					});
				});
			break; 
		case "octalValuesDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#calculationTable').removeClass('visibility-hidden');
				$('#octalValuesDiv').removeClass('opacity00');
				$('.box').removeClass('opacity00');
				var l = $("#octalValue").offset();
				$(".box").offset({"top": l.top,"left": l.left + $("#octalValue").width()/2});
      			TweenMax.to(".box", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() { 
      				$(".introjs-tooltip").removeClass("hide");
      				typing('.introjs-tooltiptext',"Let us consider the steps involved in converting an "+
      						"octal number: <ol><li>First segregate each octal digit."+
   							"</li><li>Then convert each octal digit into its three digit binary equivalent.</li></ol>" ,function() { 
      					$('.introjs-nextbutton, .introjs-prevbutton').show();
				 	 	});
       			 	}});
				});
			break; 
		case "binaryValuesDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#binaryValuesDiv').removeClass('opacity00');
				$('.box1').removeClass('opacity00');
				TweenMax.staggerFrom(".box1", 0.3, {opacity:0, top: -60}, -0.5, function() {
					$(".introjs-tooltip").removeClass("hide");
		  			typing('.introjs-tooltiptext',"Combining all the binary digits.</span>" ,function() { 
		  				$('.introjs-nextbutton, .introjs-prevbutton').show();
				 	 });
				});
			});
			break; 
		case "combineBinaryNumbers" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#combineBinaryNumbers').removeClass('opacity00');
				$('#numbersCombine').removeClass('opacity00');
				p = numberlength - 1 ;
				binary(function() {
					typing('.introjs-tooltiptext',"<ul><li></li></ul>" ,function() { 
						if (intro._direction == "backward") {
							setTimeout(function() {
								intro.previousStep();
							}, 500);
						} else {
							setTimeout(function(){
								intro.nextStep();
							}, 500);
						}
					});
				});
			});
			break; 
		case "divideBinaryNumbersDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#divideBinaryNumbersDiv').removeClass('opacity00');
				var r = 4 - $('#divideBinaryNumbers').text().length % 4
					if (r != 4) {
					   for(var i = 0; i < r; i++) {
					    $('#divideBinaryNumbers').prepend("<span class='opacity00'>0</span>");
					  } 
					}
					divideNumbers();
					var l = $("#numbersCombine").offset();
					$("#divideBinaryNumbers").effect('highlight',  {color: "#ffff00"}, 1000);
					$("#divideBinaryNumbers").offset({"top": l.top,"left": l.left});
					TweenMax.to("#divideBinaryNumbers", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
						$(".introjs-tooltip").removeClass("hide");
						typing('.introjs-tooltiptext',"Let us group them into four digit." ,function() { 
		  					$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		 			});
				  		}});
					});
			break;
		case "divideGroupOfFourDiv" :
			$('#groupOfFourDivideSpan').empty();
			$('#groupOfFourDivideSpan').append($('#divideBinaryNumbers').text());
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#divideGroupOfFourDiv').removeClass('opacity00');
				$('#groupOfFourDivideSpan').removeClass('opacity00');
				divideNumbersoffour();
				valuelength = $("#octalValue").val().substring(1, $('#octalValue').val().length); 
				l = valuelength.length;
				$('#binaryResultValue').empty();
					for (var i = 1; i <= l; i++) {
						var d = $("#divide" + i).text();
						var hex = parseInt(parseInt(d, 2).toString(10), 10).toString(16).toUpperCase();
						$('#binaryResultValue').append('<span class= "opacity00" id = "hexa' + i + '" >' + hex + '</span>'); 
					}
					q = numberlength;
					division(function() {
						$(".introjs-tooltip").removeClass("hide");
		  				typing('.introjs-tooltiptext',"The left most group which contains less than four digits will be left "+
		  						"padded appropriately zeros."+
		  						"<br>Now we will replace each group with the equivalent hexadecimal digit." ,function() { 
		  					$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		 		});
				  	});
				});
			break;
		case "binaryResult" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#binaryResult').removeClass('opacity00');
				s = numberlength;
 			 	result(function() {
	 				$('#sub').removeClass('opacity00'); 
	 				var resultString = $('#binaryResultValue').text();
	 				$(".introjs-tooltip").removeClass("hide");
		  			typing('.introjs-tooltiptext',"Hence, <br><span class='ct-code-b-yellow'>("+ $('#octalValue').val() + ")<sub>8</sub></span>"+
		  					"" + " = <span class='ct-code-b-yellow'>" + $('#binaryResultValue').text() +
		  					"<sub>16</sub></span><br> or simply <span class='ct-code-b-yellow'>0x" + resultString + "</span>." ,function() { 
		  				$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		 		});
					});
				});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css('min-width', '125px');
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
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
	$("#informationdiv").removeClass("visibility-hidden");
	$('#informationdiv').html ("<ul>"+
								"<li id='list4' class='opacity00'>When converting from octal to hexadecimal, "+
								"it is often easier to first convert the octal number into binary and then from binary into hexadecimal."+
								"<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li></ul>");
		   setTimeout(function () {
				$("#list4").fadeTo(300, 1, function() {
					$(".text").addClass('z-index9999999');
					$('#nextButton').removeClass("opacity00");
					$('.user-btn').click(function() {
						setTimeout(function(){
							intro.nextStep();
							}, 500);
					});
			})}, 1000);
		   $("#octalValue").keydown(function(e) {
				if (e.which == 46 || (e.which >= 48 && e.which <= 55) ||(e.which >= 96 && e.which <= 103) || e.which == 8 || e.which == 46 ) {
					return true;
				} else {
					e.preventDefault();
				}
			});
				
			$("#convert").click(function() {
				if ($('#convert').hasClass('disabled')) {
					return;
				}
				valuelength = $("#octalValue").val().substring(1, $('#octalValue').val().length); 
				numberlength = valuelength.length;
				p = numberlength - 1 ;
				q = numberlength;
				s = numberlength;
				 
				$('.introjs-nextbutton').click();
				for (var i=0; i<valuelength.length; i++) {
					$("#octalValuesGet").append("<span id='octal" + i + "' class='box  opacity00 text-center ct-code-b-black '>"+
							"<span id= octalNumbers"+ i +">"+ valuelength[i] +"</span></span>");
				}
				for (var i=0; i<valuelength.length; i++) {
					var finalBinaryVal = parseInt(valuelength[i]).toString(2);
					if (finalBinaryVal.length < 3) {
						if (finalBinaryVal.length == 1) finalBinaryVal = "00" +  finalBinaryVal;
						else if (finalBinaryVal.length == 2) finalBinaryVal = "0" +  finalBinaryVal;
					}
					$("#binaryValuesGet").append("<span id= 'binary" + i + "' class='box1 opacity00 text-center ct-code-b-black '>"+
							"<span id= binaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
				}
				
				for (var i=0; i<valuelength.length; i++) {
					var finalBinaryVal = parseInt(valuelength[i]).toString(2);
					if (finalBinaryVal.length < 3) {
						if (finalBinaryVal.length == 1) finalBinaryVal = "00" +  finalBinaryVal;
						else if (finalBinaryVal.length == 2) finalBinaryVal = "0" +  finalBinaryVal;
					}
					$("#numbersCombine").append("<span id='combineBinary" + i + "' class='text-center ct-code-b-black'>"+
							"<span class='opacity00' id= combineBinaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
				}
				
				for (var i=0; i<valuelength.length; i++) {
					var finalBinaryVal = parseInt(valuelength[i]).toString(2);
					if (finalBinaryVal.length < 3) {
						if (finalBinaryVal.length == 1) finalBinaryVal = "<span class='opacity00'>00</span>" +  finalBinaryVal;
						else if (finalBinaryVal.length == 2) finalBinaryVal = "0" +  finalBinaryVal;
					}
						$("#divideBinaryNumbers").append(finalBinaryVal);
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
					if($("#octalValue").val().charAt(0) == '0'){
						$("#octalValue").removeClass("backgroundColor");
						$("#convert").addClass("disabled").attr("disabled", true);
						if ($("#octalValue").val().length > 1 && $("#octalValue").val().startsWith("0")) {
							$("#convert").removeClass("disabled").removeClass("opacity40");
							$("#octalValue").removeClass("backgroundColor");
							$('.errorText').empty();
							$("#convert").attr("disabled", false);
						} else {
							$("#convert").addClass("disabled").addClass("opacity40");
						}
						
						return;
					} else {
						$("#convert").addClass("disabled").addClass("opacity40");
						$('.errorText').html("Since base is 8, you can prefix the number specified by the value parameter with 0.");
						$("#octalValue").addClass("backgroundColor");
					}
				});
   
		   
}


  function divideNumbers() {
	var arr = $('#divideBinaryNumbers').text().split("")
	$('#divideBinaryNumbers').empty();
	var count = 0;
		$.each(arr, function(index, val) {
		  if (index % 4 == 0) {
		    count++;
		  }
		  if ($(".split" + count).length == 0) {
		    $('#divideBinaryNumbers').append("<span class='split" + count + "'>" + val + "</span>");
		  } else {
		    $(".split" + count).append(val);
		  }
		});
		
		var non_zero_text = "";
		$.each($(".split1").text().split(""), function(index, val) {
			//if (val == "0") {
			//	non_zero_text = non_zero_text + "<span style='opacity: 0;'>" + val + "</span>";
		//	} else {
				non_zero_text = non_zero_text + "<span>" + val + "</span>";
			//}
		});
		 $(".split1").html(non_zero_text);
	} 

function divideNumbersoffour() {
	var arr = $('#groupOfFourDivideSpan').text().split("")
	$('#groupOfFourDivideSpan').empty();
	var count = 0;
		$.each(arr, function(index, val) {
		  if (index % 4 == 0) {
		    count++;
		  }
		  if ($("#divide" + count).length == 0) {
		   	  $('#groupOfFourDivideSpan').append("<span class='opacity00 divide-box' id='divide" + count + "'>" + val + "</span>&emsp;");
		  } else {
		    $("#divide" + count).append(val)
		  }
		});
}

function binary(callBackFunction) {
	if (p >= 0 ) {
		var s = $("#binaryDigits" + p).offset();
		$("#combineBinaryDigits" + p).effect('highlight',  {color: "#ff9900"}, 1000);
		$("#combineBinaryDigits" + p).offset({"top": s.top,"left": s.left});
	 	TweenMax.to("#combineBinaryDigits" + p, 1.2, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		  	if (p >= 0) {
				p--;
				binary(callBackFunction);
			}
	  	}});
	} else {
		if(typeof callBackFunction === "function") {
				callBackFunction();
			}
	}
}

function division(callBackFunction) {
	if (q > 0 ) {
		$("#divide" + s).removeClass("opacity00");
		$(".split" + q).effect('highlight',  {color: "#ffff00"}, 1000);
		var t = $(".split" + q).offset();
		$("#divide" + q).effect('highlight',  {color: "#ff9900"}, 1000);
		$("#divide" + q).offset({"top": t.top,"left": t.left});
	 	TweenMax.to("#divide" + q, 1.2, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		  	if (q > 0) {
				q--;
				division(callBackFunction);
			}
	  	}});
	} else {
		if(typeof callBackFunction === "function") {
				callBackFunction();
			}
	}
}

function result(callBackFunction) {
	if (s > 0 ) {
		$("#hexa" + s).removeClass("opacity00");
		var r = $("#divide" + s).offset();
		$("#divide" + s).effect('highlight',  {color: "#ff9900"}, 1000);
		$("#hexa" + s).offset({"top": r.top,"left": r.left});
	 	TweenMax.to("#hexa" + s, 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		  	if (s > 0) {
				s--;
				result(callBackFunction);
			}
	  	}});
	} else {
		if(typeof callBackFunction === "function") {
				callBackFunction();
				$('#binaryResultValue').append('<sub>16</sub>');
			}
	}
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}