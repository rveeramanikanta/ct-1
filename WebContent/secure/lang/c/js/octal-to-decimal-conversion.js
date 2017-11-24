var valuelength;
var numberlength;
var p;
var x ;
var t = 0;

var octalToDecimalConversionReady = function() {
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
			tooltipClass: "hide",
			position:"right" 
		},{
			element :'#numberconversion',
			intro :'',
			position:"right" 
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
			element :'#positionsDiv',
			intro :'',
			tooltipClass: "hide",
			position:"right"
		},{
			element :'#powerValuesDiv',
			intro :'',
			tooltipClass: "hide",
			position:"right" 
		},{
			element :'#multiplyPowerWithOctal',
			intro :'',
			tooltipClass: "hide",
			position:"right"  
		},{
			element :'#multiplyGetDiv',
			intro :'',
			tooltipClass:'hide',
			position:"right"
		},{
			element :'#multiplytoAddGetDiv',
			intro :'',
			tooltipClass:'hide',
			position:"right" 
		},{
			element :'#resultDiv',
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
		switch(elementId) {
		case "numberconversion":
			$("#octalValue").attr("disabled", true);
			$("#octalValue").removeClass("backgroundColor");
			$('#inputDiv').addClass('opacity00');
			break;
		case "inputDiv":
			$("#octalValue").removeClass("backgroundColor");
			$('#inputDiv').addClass('opacity00');
			
			$('#calculationTable').addClass('visibility-hidden');
			$('#octalValuesDiv').addClass('opacity00');
			$('.box').addClass('opacity00');
			
			$("#octalValuesGet .box").remove();
			$("#positions .box5").remove();
			$("#powerValuesGet .box1").remove();
			$("#powerWithOctal  *").remove();
			$("#multiplyResultGet  *").remove();
			$("#multiplytoAddResultGet *").remove(); 
			$("#addResultGet *").remove(); 
		case "octalValuesDiv":
			$('#calculationTable').addClass('visibility-hidden');
			$('#octalValuesDiv').addClass('opacity00');
			$('.box').addClass('opacity00');
			
			$("#positionsDiv").addClass("opacity00");
			$(".box5").removeAttr('style');
			break;
		case "positionsDiv":
			$("#positionsDiv").addClass("opacity00");
			$(".box5").removeAttr('style');
			
			$('#powerValuesDiv').addClass('opacity00');
			break;
		case "powerValuesDiv":
			$('#powerValuesDiv').addClass('opacity00');
					
			$('#multiplyPowerWithOctal').addClass('opacity00');	
			$("#powerWithOctal *").addClass("opacity00").removeAttr('style');
			$("sup").removeClass("opacity00");
			$(".total").removeClass("opacity00");
			$("#powerWithOctal .bracket").parent().removeClass("opacity00");
			break;
		case "multiplyPowerWithOctal":
			$('#multiplyPowerWithOctal').addClass('opacity00');		
			$('#multiplyGetDiv').addClass('opacity00');
			
			$("#powerWithOctal *").addClass("opacity00").removeAttr('style');
			$("sup").removeClass("opacity00");
			$(".total").removeClass("opacity00");
			$("#powerWithOctal .bracket").parent().removeClass("opacity00");	
			
			$("#multiplyResultGet *").addClass("opacity00").removeAttr('style');
			$(".multiplytotal").removeClass("opacity00");
			 $(".onemultiply *").removeClass("opacity00");
			
			break;
		case "multiplyGetDiv":
			$('#multiplyGetDiv').addClass('opacity00');
			$('#multiplytoAddGetDiv').addClass('opacity00');
			
			$("#multiplyResultGet *").addClass("opacity00").removeAttr('style');
			$(".multiplytotal").removeClass("opacity00");
			$(".onemultiply *").removeClass("opacity00");
			 
			$("#multiplytoAddResultGet *").addClass("opacity00").removeAttr('style');
			$(".multiplytwo *").removeClass("opacity00");
			break;
		case "multiplytoAddGetDiv":
			$('#multiplytoAddGetDiv').addClass('opacity00');
			$('#resultDiv').addClass('opacity00');
			
			$("#multiplytoAddResultGet *").addClass("opacity00").removeAttr('style');
			$(".multiplytwo *").removeClass("opacity00");			
			break;
		}
	});
 	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		intro.refresh();
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
		switch (elementId) {
		case "informationdiv":
			$("#informationdiv").removeClass("visibility-hidden");
		 	$('#informationdiv').html ("<ul><li id='list1' class='opacity00'>To convert an octal to decimal to follow the below steps:"+
		 		"<ol><li>Segregate the digits of an octal number.</li><li>Multiply each digit with 8 raised to the power of its position.</li></ol></li>"+
		 		"<li id='list2' class='opacity00'>As all the resultant values obtained from step 2 to arrive at the decimal equivalent."+
				"<span id='nextButton' class='opacity00'><a class='introjs-button user-btn' onClick='x()'>Next &#8594;</a></span></li></ul>");
		 	
		 	setTimeout(function () {
				$("#list1").fadeTo(300, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$('#nextButton').removeClass("opacity00");
					});
				});
			}, 1000);  
			break;
		
		
		
		case "numberconversion" :
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$("#octalValue").attr("disabled", true);
			$('.user-btn').remove();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#numberconversion').removeClass('visibility-hidden');
		  		typing('.introjs-tooltiptext',"This table provides the quick reference to the multiplying factors for the position of the octal digits." ,function() { 
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
				$(".introjs-tooltip").removeClass('hide');
				typing('.introjs-tooltiptext', "Provide an <span class='ct-code-b-yellow'>octal</span> number and click on "+
						"<span class='convert'>Convert to Decimal</span>"+
						" button to understand how an <span class='ct-code-b-yellow'>octal</span> number converted to decimal.<br>"+
						"<span class='ct-code-b-yellow'>Note:</span> Enter octal value with prefix <span class='ct-code-b-yellow'>0</span>."+
						"<br><span style='margin-left: 35px;'>Use an octal values from <span class='ct-code-b-yellow'>0</span> to "+
						"<span class='ct-code-b-yellow'>7</span></span>.<br><span class='errorText'></span>", function() {
					$('.introjs-prevbutton').show();
		  			$("#octalValue").attr("disabled", false);
					$("#octalValue").focus();
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
       				TweenMax.to(".box", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() { 
       					$(".introjs-tooltip").removeClass('hide');
       					typing('.introjs-tooltiptext',"Let us consider the steps involved in converting an octal number: "+
       							"<br>First we will segregate that individual octal digit."+
       							"" ,function() {
       						$('.introjs-nextbutton, .introjs-prevbutton').show();	
       					  });
              		}});
				});
			break;
		case "positionsDiv":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			intro.refresh();
			$('.introjs-helperLayer').one('transitionend', function() {
				$("#positionsDiv").removeClass("opacity00");
				TweenMax.staggerFrom(".box5", 0.1, {opacity:0, top: -60}, -0.3, function() {
					$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext', "These are the positions for the given digits.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
						}); 
					});
	 			})
			break; 
		case "powerValuesDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#powerValuesDiv').removeClass('opacity00');
				$('.box1').removeClass('opacity00');
				TweenMax.staggerFrom(".box1", 0.5, {opacity:0, top: -60}, -0.5, function() {
					$(".introjs-tooltip").removeClass('hide');
		  			typing('.introjs-tooltiptext',"These are the multiplying factors for the given respective positions." ,function() { 
		  				$('.introjs-nextbutton, .introjs-prevbutton').show();	
				  		});
					});
				});
			break; 
		case "multiplyPowerWithOctal" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$('#multiplyPowerWithOctal').removeClass('opacity00');
				t = 0;
				p = numberlength - 1 ;
				calculate(function() {
					$(".introjs-tooltip").removeClass('hide');
					typing('.introjs-tooltiptext', "Here we multiplying the individual digits with 8 raised to the power of its positions.", function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
		  				});	
					});
				});
			break;
		case "multiplyGetDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#multiplyGetDiv').removeClass('opacity00');
				q = 0;
				power(function() {
					typing('.introjs-tooltiptext',"Multiply with powers." ,function() { 
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
		case "multiplytoAddGetDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#multiplytoAddGetDiv').removeClass('opacity00');
				s = 0;
				poweradd(function() {
					$(".introjs-tooltip").removeClass('hide');
		  			typing('.introjs-tooltiptext',"By adding all the decimal values together from right to left we get the resultant decimal number." ,function() { 
		  				$('.introjs-nextbutton, .introjs-prevbutton').show();
		  			});	
				});
			});
			break;
		case "resultDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#resultDiv').removeClass('opacity00');
				var text = $('#addResultGet').text();
				text.substring(1, text.length-3);
				a = 0;
				addition(function() {
					$(".introjs-tooltip").removeClass('hide');
			  		typing('.introjs-tooltiptext',"Hence, <br><span class='ct-code-b-yellow'>("+ $('#octalValue').val() + 
			  				")<sub>8</sub></span>" + " = <span class='ct-code-b-yellow'>" +  $('#addResultGet').html()  + 
			  				"</span><br> or simply <span class='color-yellow'>" + text.substring(1, text.length-3) + "</span>." ,function() { 
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
		$('.introjs-nextbutton').click();
		for (var i=0; i<valuelength.length; i++) {
			$("#octalValuesGet").append("<span id= octal"+i+ " class='box  opacity00 text-center ct-code-b-black '><span id= octalNumbers"+ i +
					">"+ valuelength[i] +"</span></span>");
		}
		
		for (var i= valuelength.length - 1, j = 0; i >= 0; i--, j++) {
		$("#powerValuesGet").append("<span class='box1  text-center ct-code-b-black'>" +
				"<span id= powervalues" +i+ ">" + 8 +"<sup class='color-brown'>"+ i +"</sup></span></span>");
		$("#positions").append("<span class='box5  text-center ct-code-b-green'>" +
				"<span 'ct-code-b-green'>"+ i +"</span></span>");
		
		if (i > 0) {
			$("#powerWithOctal").append("<span id = 'overall"+i+"'><span id = 'bracket" + i +"' class = 'bracket color-lightrose opacity00'>(</span>"+ 
					"<span id = 'total" + i + "' class='total'>"+ 
					"<span id= octalNumberGet"+j+ " class='ct-code-b-black opacity00'>"+ valuelength[j] +"</span>"+
					"<b id = 'intoSymbol" + i +"'class='into1 color-red opacity00'> x </b></span> "+ 
					"<span id = 'powerv" + i + "' class= 'ct-code-b-black opacity00'>" + 8 +"<sup class='ct-code-b-green'>"+ i +"</sup></span>" +
					"<span id = 'bracket2" + i +"'  class = 'bracket color-lightrose opacity00'>)</span></span><span id = 'plus" + i + 
					"' class = 'color-green plus opacity00'> + </span>");
        } else {
        	$("#powerWithOctal").append("<span id = 'overall" + i +"'><span id = 'bracket" + i +
        			"' class = 'bracket color-lightrose opacity00'>(</span>" + 
        			"<span id = 'total" + i +"' class = 'total'><span id= octalNumberGet"+j+ " class='ct-code-b-black opacity00'>"+
        			valuelength[j] +"</span>" +
        			"<b id = 'intoSymbol" + i +"' class='color-red opacity00'> x </b></span> "+ 
        			"<span id='powerv" + i +"' class='ct-code-b-black opacity00'>" + 8 +"<sup class='ct-code-b-green'>"+ i +"</sup></span>" +
        			"<span id = 'bracket2" + i +"'class = 'bracket color-lightrose opacity00'>)</span></span>");
        			
        	} 
		}
	
		for (var i = valuelength.length - 1, j=0; i >= 0; i--, j++) {
			var result = Math.pow(8, i);
			if (i > 0) {
				$("#multiplyResultGet").append("<span id = 'multiplytotal" + i + "' class = 'multiplytotal'><span id = 'bracket3" + i + 
						"' class = 'bracket3 opacity00 bracket color-lightrose '>(</span><span class= 'onemultiply opacity00' id = 'onemultiply" + i + "'>"+
						"<span id= c"+j+ " class='ct-code-b-black'>"+ valuelength[j] +
						"</span><span class='box3 text-center' ><b class='color-red into' > x </b></span></span>" +
						"<span id = 'getMultiple" + i + "'class = 'result opacity00'>" + result + "</span>"+
						"<span id = 'bracket4" + i + "' class = 'color-lightrose bracket4 opacity00'>)</span></span><span id = 'plus1" + i +
						"' class = 'plus1 opacity00 color-green'>  + </span>");
	       	} else {
	       		$("#multiplyResultGet").append("<span id = 'multiplytotal" + i + "' class = 'multiplytotal'><span id = 'bracket3"+ i +
	       				"' class = 'bracket3 color-lightrose opacity00'>(</span><span class= 'onemultiply opacity00' id = 'onemultiply" + i + 
	       				"'><span id= c"+j+ " class='ct-code-b-black'>"+ valuelength[j] +"</span>"+
	       				"<span class='box3 text-center' ><b class='color-red into' > x </b></span></span>" +
						"<span id = 'getMultiple" + i + "' class = 'result opacity00'>" + result + "</span><span id = 'bracket4"+ i +
						"' class = 'bracket4 color-lightrose opacity00'>)</span></span>");
			}
		}
		
		for (var i = valuelength.length - 1, j=0; i >= 0; i--, j++) {
			var result = Math.pow(8, i);
			var multiply = valuelength[j] * result;
 			if (i > 0) {
 				$("#multiplytoAddResultGet").append("<span id = 'multiplytwo" + i + 
 						"' class = 'multiplytwo opacity00'>(<span class='box4 text-center ct-code-b-black' id = multiplyToAdd"
 						+ i + ">"+multiply+"</span>)</span></span><span id = 'plus2" + i +"'class = 'plus2 opacity00 color-green'>  + </span>");		
 				
 			} else {
 				$("#multiplytoAddResultGet").append("<span id = 'multiplytwo" + i + 
 						"' class = 'multiplytwo opacity00'>(<span class='box4 text-center ct-code-b-black' id = multiplyToAdd" + i + 
 						">"+multiply+"</span>)</span></span>");
 			}
		}
		
		var sum = 0;
		for (var i = valuelength.length - 1, j=0; i >= 0; i--, j++) {
			var result = Math.pow(8, i);
			var multiply = valuelength[j] * result;
			sum = sum + multiply;
			if (i == 0) {
				$("#addResultGet").append("<span><span class=' text-center ct-code-b-blue' id = add" + i +
						">("+sum+")<sub id='radix'><span class='ct-code-b-black'id='radix'>" +10 +"</span></sub></span></span>");
				}
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


function calculate(callBackFunction) {
	if (p >= 0 && t < valuelength.length) {
		TweenMax.to("#bracket2" + t, 0.2 , {opacity:1, onComplete: function() {
	   $("#bracket2" + t).removeClass("opacity00"); 
       var s = $("#powervalues" + t).offset()
       $("#powerv" + t).offset({"top": s.top,"left": s.left});
       $("#powervalues" + t).effect('highlight',  {color: "#F08080"}, 3000);
       TweenMax.to("#powerv"+ t, 0.2, {Color:"blue", opacity:1, top: 0, left: 0, onComplete:function() {
          TweenMax.to("#intoSymbol" + t, 0.2 , {opacity:1, onComplete: function() {
          	$("#intoSymbol" + t).removeClass("opacity00");
          	var s = $("#octalNumbers" + p).offset()
          	$("#octalNumberGet" + p).offset({"top": s.top,"left": s.left});
          	$("#octalNumberGet" + p).removeClass("opacity00");
          	$("#octalNumbers" + p).effect('highlight',  {color: "#F08080"}, 3000);
          	TweenMax.to("#octalNumberGet"+ p, 0.2, { opacity:1, top: 0, left: 0, onComplete:function() {
            	TweenMax.to("#bracket" + t, 0.2 , {opacity:1, onComplete: function() {
 		 		$("#bracket" + t).removeClass("opacity00");
            	TweenMax.to("#plus" + (t+1), 0.2, {opacity:1, onComplete: function() {
              		$("#plus" + (t+1)).removeClass("opacity00");
				 	t++;
				 	p--;
			 		calculate(callBackFunction);
	 					}});
	 				}});
	 			}});
	 		}});		
  		}});
	}});
	   } else {
   		if(typeof callBackFunction === "function") {
  	    		callBackFunction();
		}
	}
}

var q = 0;
function power(callBackFunction) {
	if (q < valuelength.length) {
		$("#fourthbox").removeClass("visibility-hidden");
		var l4 = $("#total" + q).offset();
	    $("#onemultiply" + q).offset({"top": l4.top,"left": l4.left});
	    var l5 = $("#powerv" + q).offset();
	    $("#getMultiple" + q).offset({"top": l5.top,"left": l5.left});
	 	TweenMax.to("#bracket4" + q, 0.2 , {opacity:1, onComplete: function() {
			$("#bracket4" + q).removeClass("opacity00");
			$("#getMultiple" + q).removeClass("opacity00");
			$("#getMultiple" + q).effect('highlight',  {color: "#F08080"}, 1000);
			TweenMax.to("#getMultiple"+ q, 0.2, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			 	$("#onemultiply" + q).removeClass("opacity00");
			 	$("#total" + q).effect('highlight',  {color: "#F08080"}, 3000);
				TweenMax.to("#onemultiply"+ q, 0.2, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					TweenMax.to("#bracket3" + q, 0.2 , {opacity:1, onComplete: function() {
						$("#bracket3" + q).removeClass("opacity00");
						TweenMax.to("#plus1" + (q+1), 0.2 , {opacity:1, onComplete: function() {
							$("#plus1" + (q+1)).removeClass("opacity00");
							q++;
		  					power(callBackFunction);
						}});
					}});
	 			 }});
		 	}});
	 	}});
	} else {
		if(typeof callBackFunction === "function") {
			callBackFunction();
   		}
	}
}

var s = 0;
function poweradd(callBackFunction) {
	 if (s < valuelength.length) {
	$("#fifthbox").removeClass("visibility-hidden");
	var l6 = $("#multiplytotal" + s).offset();
    $("#multiplytwo" + s).offset({"top": l6.top,"left": l6.left});
 	$("#multiplytwo" + s).removeClass("opacity00");
 	$("#multiplytotal" + s).effect('highlight',  {color: "#F08080"}, 1000);
	TweenMax.to("#multiplytwo"+ s, 0.2, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		TweenMax.to("#plus2" + (s+1), 0.2 , {opacity:1, onComplete: function() {
			$(".plus2" + (s+1)).removeClass("opacity00");
		 	s++;
  			poweradd(callBackFunction);
  		}});
	}});
	} else {
		if(typeof callBackFunction === "function") {
			callBackFunction();
		}
	}
}

var a = 0;
function addition(callBackFunction) {
	 if (a < valuelength.length) {
		 
	$("#resultDiv").removeClass("opacity00");
	var l7 = $("#multiplytoAddResultGet").offset();
    $("#add" + a).offset({"top": l7.top,"left": l7.left});
 	$("#add" + a).removeClass("opacity00");
 	$("#multiplytoAddResultGet").effect('highlight',  {color: "#F08080"}, 1000);
	TweenMax.to("#add"+ a, 1.2, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		 a++;
		addition(callBackFunction);
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
		}
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
	})
}

function x() {
	intro.nextStep();
}