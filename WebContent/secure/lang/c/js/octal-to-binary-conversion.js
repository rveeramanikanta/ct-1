var valuelength;
var numberlength;
var p;

var octalToBinaryConversionReady = function() {
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
			tooltipClass: 'hide',
			position:"bottom" 
		},{
			element :'#numberconversion',
			intro :'',
			tooltipClass: 'hide',
			position:"right" 
		},{
			element :'#inputDiv',
			intro :'',
			tooltipClass: 'hide',
			position:"right" 
		},{
			element :'#octalValuesDiv',
			intro :'',
			tooltipClass: 'hide',
			position:"right" 
		},{
			element :'#binaryValuesDiv',
			intro :'',
			tooltipClass: 'hide',
			position:"right" 
		},{
			element :'#combineBinaryNumbers',
			intro :'',
			tooltipClass:'hide',
			position:"right",
			
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
		var elementId = targetElement.id;
		switch (elementId) {
		case "numberconversion" :
			$("#convert").addClass("disabled").attr("disabled", true);
			$("#inputDiv").addClass("opacity00");
			$("#octalValue").attr("disabled", true);
			$("#octalValue").removeClass("backgroundColor");
			break;
		case "inputDiv":
			$('#calculationTable').addClass('visibility-hidden');
			$('#octalValuesDiv').addClass('opacity00');
			$('.box').addClass('opacity00');
			
			$("#octalValuesGet .box").remove();
			$("#binaryValuesGet .box1").remove();
			$("#numbersCombine .box2").remove();  
			$("#binaryResultValue .box3").remove();
			break;
			
		case "octalValuesDiv":
			$('#calculationTable').addClass('visibility-hidden');
			$('#octalValuesDiv').addClass('opacity00');
			
			$("#binaryValuesDiv").addClass("opacity00");
			$('.box1').removeAttr('style');
			
			break;
		case "binaryValuesDiv":
			$("#binaryValuesDiv").addClass("opacity00");
			
			$('#combineBinaryNumbers').addClass('opacity00');
			$('#numbersCombine').addClass('opacity00');
			
			$(".box2 span").removeAttr('style');
			/*$("#combineBinaryDigits0").removeAttr('style');
			$("#combineBinaryDigits1").removeAttr('style');
			$("#combineBinaryDigits2").removeAttr('style');*/
			
			break;
		case "combineBinaryNumbers":
			$(".box2 span").removeAttr('style')
			
			$('#binaryResult').addClass('opacity00');
			$("#binaryResultValue").removeAttr('style');
			
			$('#combineBinaryNumbers').addClass('opacity00');
			$('#numbersCombine').addClass('opacity00');
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
		case "numberconversion" :
			intro.refresh();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.user-btn').remove();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberconversion').removeClass('visibility-hidden');
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"This table provides a quick reference for converting all "+
						"the <span class='ct-code-b-yellow'>octal</span> numbers to their binary equivalent values." ,function() {
					$('.introjs-nextbutton').show();	
				  	});
				});
			break;
		case "inputDiv" :
			$("#octalValue").val("");
			$("#octalValue").attr("disabled", true);
			$("#convert").addClass("disabled");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#inputDiv').removeClass('opacity00');
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"Enter an <span class='ct-code-b-yellow'>octal</span> value and click on the "+
						"<span style='background-color: green; border-radius: 3px; padding: 0 2px;'>"+
				  		"Convert to Binary</span> button to see how the octal to binary conversion is done</span>."+
				  		"<br><span class='color-yellow'>Note:</span> Enter octal value with prefix <span class='ct-code-b-yellow'>0</span>."+
				  		"<br><span style='margin-left: 35px;'>Use an octal values from <span class='ct-code-b-yellow'>0</span> to "+
				  		"<span class='ct-code-b-yellow'>7</span></span>.<br><span class='errorText'></span>" ,function() { 
					$('.introjs-prevbutton').show();
					$("#octalValue").attr("disabled", false);
					$("#octalValue").focus();
				});
			});
			break; 
		case "octalValuesDiv" :
			$('.introjs-nextbutton,0 .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#calculationTable').removeClass('visibility-hidden');
				$('#octalValuesDiv').removeClass('opacity00');
				$('.box').removeClass('opacity00');
				var l = $("#octalValue").offset();
				$(".box").offset({"top": l.top,"left": l.left + $("#octalValue").width()/2 });
       				TweenMax.to(".box", 1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() { 
       					$(".introjs-tooltip").removeClass("hide");
       					typing('.introjs-tooltiptext',"Let us consider the steps involved in converting an octal number: "+
       							"<br>we consider each octal digit and convert into "+
       							" its three digit binary equivalent." ,function() {
       						$('.introjs-nextbutton, .introjs-prevbutton').show();	
				  		});
              		}});
				});
			break; 
		case "binaryValuesDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.box1').removeClass('opacity00');
				$('#binaryValuesDiv').removeClass('opacity00');
				TweenMax.staggerFrom(".box1", 0.3, {opacity:0, top: -60}, -0.5, function() {
					$(".introjs-tooltip").removeClass("hide");
					typing('.introjs-tooltiptext',"Now let us combine all the resulting binary groups (of three digit each) into a "+
							"<span class='color-yellow'>single binary digits</span>." ,function() { 
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
				typing('.introjs-tooltiptext',"Equivalent binary digits." ,function() { 
					binary(function() {
						if (intro._direction == "backward") {
						setTimeout(function() {
							intro.previousStep();
							}, 500); 
						} else {
							setTimeout(function() {
								intro.nextStep();
							}, 500); 
						}
						});
					 });
				});
			break; 
		case "binaryResult" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#binaryResult').removeClass('opacity00');
				var l = $("#numbersCombine").offset();
				$("#binaryResultValue").effect('highlight',  {color: "#ff9900"}, 1000);
				$("#binaryResultValue").offset({"top": l.top,"left": l.left});
				TweenMax.to("#binaryResultValue", 0.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$(".introjs-tooltip").removeClass("hide");
		  		typing('.introjs-tooltiptext',"Hence, <br><span class='ct-code-b-yellow'>("+ $('#octalValue').val() + 
		  				")<sub>8</sub></span>" + 
		  				" = <span class='ct-code-b-yellow'> (" +  $('#binaryResultValue').html()  + 
		  				")<sub class='color-yellow'><span>2</span></sub></span>." ,function() { 
		  				$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		 	});
				  }});
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
		$("#informationdiv").removeClass("visibility-hidden");
 		$('#informationdiv').html ("<ul><li id='list1' class='opacity00'>Octal numerals can be converted into "+
 				"<b class='color-green'>binary</b> digits by converting each octal digit into binary of "+
 				"<span class='color-green'>three</span> digits and group them finally."+
 				"<span id='nextButton' class='opacity00'><a class='introjs-button user-btn'>Next &#8594;</a></span></li></ul>");
	     
 		setTimeout(function () {
			   $("#list1").fadeTo(300, 1, function() {
					$(".text").addClass('z-index9999999');
						$('#nextButton').removeClass("opacity00");
						$('.user-btn').click(function() {
							setTimeout(function(){
								intro.nextStep();
						}, 500);
					});
			   	})
		}, 1000); 
 		
 		
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
 			$("#convert").addClass("disabled").attr("disabled", true);
 			valuelength = $("#octalValue").val().substring(1, $('#octalValue').val().length); 
 			numberlength = valuelength.length;
 			p = numberlength - 1;
 			
 			$('.introjs-nextbutton').click();
 			for (var i=0; i<valuelength.length; i++) {
 				$("#octalValuesGet").append("<span id= octal"+i+ " class='box  opacity00 text-center ct-code-b-black '><span id= octalNumbers"+ 
 						i +">"+ valuelength[i] +"</span></span>");
 			}
 			for (var i=0; i < valuelength.length; i++) {
 				var finalBinaryVal = parseInt(valuelength[i]).toString(2);
 				if (finalBinaryVal.length < 3) {
 					if (finalBinaryVal.length == 1) { 
 						finalBinaryVal = "00" +  finalBinaryVal;
 					}
 					else if (finalBinaryVal.length == 2){
 						finalBinaryVal = "0" +  finalBinaryVal;
 					}
 				}
 				$("#binaryValuesGet").append("<span id= binary"+i+ " class='box1 opacity00 text-center ct-code-b-black '><span id= binaryDigits"+ i +
 						">"+ finalBinaryVal +"</span></span>");
 			}
 			for (var i=0; i<valuelength.length; i++) {
 				var finalBinaryVal = parseInt(valuelength[i]).toString(2);
 				if (finalBinaryVal.length < 3) {
 					if (finalBinaryVal.length == 1) finalBinaryVal = "00" +  finalBinaryVal;
 					else if (finalBinaryVal.length == 2) finalBinaryVal = "0" +  finalBinaryVal;
 				}
 				$("#numbersCombine").append("<span class='box2' id= combineBinary"+i+ "opacity00 class='text-center ct-code-b-black'>"+
 						"<span class='opacity00' id= combineBinaryDigits"+ i +">"+ finalBinaryVal +"</span></span>");
 			}
 			for (var i=0; i<valuelength.length; i++) {
 				var finalBinaryVal = parseInt(valuelength[i]).toString(2);
 				if (finalBinaryVal.length < 3) {
 					if (finalBinaryVal.length == 1) finalBinaryVal = "00" +  finalBinaryVal;
 					else if (finalBinaryVal.length == 2) finalBinaryVal = "0" +  finalBinaryVal;
 					}
 				$("#binaryResultValue").append("<span class='box3' id= binaryresult"+i+ "class='text-center ct-code-b-black '><span id= BinaryDigitsResult"+ 
 						i +">"+ finalBinaryVal +"</span></span></span>");
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
 						
 						if ($("#octalValue").val().length > 1 && $("#octalValue").val().startsWith("0")) {
 							$("#convert").removeClass("disabled").removeClass("opacity40");
 							$("#octalValue").removeClass("backgroundColor");
 							$('.errorText').empty();
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




	function binary(callBackFunction) {
		 if (p >= 0 ) {
			 var s = $("#binaryDigits" + p).offset();
				$("#combineBinaryDigits" + p).effect('highlight',  {color: "#ff9900"}, 1000);
				$("#combineBinaryDigits" + p).offset({"top": s.top,"left": s.left});
			 	TweenMax.to("#combineBinaryDigits" + p, 1.1, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
				p--;
				binary(callBackFunction);
	  		}});
		} else {
			if(typeof callBackFunction === "function") {
				callBackFunction();
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