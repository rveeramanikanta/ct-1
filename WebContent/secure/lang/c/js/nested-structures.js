var nestedStructuresReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		$('input').val('');
		window.location.search = "?restart=1";
	});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
		  }
	});
	$('#nameInput').keyup(function() {
		$('.color-red').remove();  
		if($('#nameInput').val().length > 0) {
			var name = $('#nameInput').val();
			$('#nameBox').text(name);
			$('.introjs-nextbutton').show();
		} else {
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltiptext').append('<div class="color-red">Please enter string.</div>');
		}
	});
	$('#cityInput').keyup(function() {
		$('.color-red').remove(); 
		if($('#cityInput').val().length > 0) {
			  intro.refresh();
			  var city = $('#cityInput').val();
			  $('#cityBox').text(city);
			  $('.introjs-nextbutton').show();
		} else {
			  $('.introjs-tooltiptext').append('<div class="color-red">Please enter string.</div>');
			  $('.introjs-nextbutton').hide();
		}
	});
	$('#phoneNumberInput').keyup(function() {
		$('.color-red').remove();  
		if($('#phoneNumberInput').val().length > 0) {
			  var phone = $('#phoneNumberInput').val();
			  $('#phoneNoBox').text(phone);
			  $('.introjs-nextbutton').show();
		} else {
			  $('.introjs-tooltiptext').append('<div class="color-red">Please enter numbers.</div>');
			  $('.introjs-nextbutton').hide();
		}
	});
	$('#pinNumberInput').keyup(function() {
		$('.color-red').remove(); 
		if($('#pinNumberInput').val().length > 0) {
			  var pin = $('#pinNumberInput').val();
			  $('#pinNoBox').text(pin);
			  $('.introjs-nextbutton').show();
		} else {
			  $('.introjs-tooltiptext').append('<div class="color-red">Please enter numbers.</div>');
			  $('.introjs-nextbutton').hide();
		}
	});
	$("#nameInput, #cityInput").keydown(function(e) {
		$('.color-red').remove();
		var max = $(this).attr("maxlength");
		if ($(this).val().length >= max) {
			$('.introjs-tooltiptext').append("<div class='color-red'>Please restrict the string maximun length 15 digits only.</div>");
			e.preventDefault();
		}
		if ((e.keyCode >= 65 && e.keyCode <= 90) || ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1)) {
			return;
		} else {
			e.preventDefault();
		}
	});
	$("#phoneNumberInput, #pinNumberInput").keydown(function(e) {
		$('.color-red').remove();
		var max = $(this).attr("maxlength");
		if ($(this).val().length >= max) {
			$('.introjs-tooltiptext').append("<div class='color-red'>Please restrict the string maximun length " + max + " digits only.</div>");
			e.preventDefault();
		}
		if (((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) || ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1)) {
			return;
		} else {
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
			tooltipClass:'hide'
		},{
			element :'#tableDiv',
			intro :''
		},{
			element :'#structDate',
			intro :''
		},{
			element :'#structAccount',
			intro :''
		},{
			element :'#accountVar',
			intro :''
		},{
			element :'#accountVariableTable',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#accountNumber0',
			intro :''
		},{
			element :'#accountNumber1',
			intro :''
		},{
			element :'#accountNumber2',
			intro :'',
			position:"left"
		},{
			element :'#structEmployee',
			intro :'',
			tooltipClass:"hide"
		},{
			element :'#structEmployeeE',
			intro :''
		},{
			element :'#subStructOfEmployee',
			intro :''
		},{
			element :'#structEmployeeE',
			intro :''
		},{
			element :'#printf1',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :''
		},{
			element :'#scanf1',
			intro :'',
			tooltipClass:'hide',
		},{
			element :'#nameBox',
			intro :'',
			tooltipClass:'hide',
			position:"right"
		},{
			element :'#printf2',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :''
		},{
			element :'#scanf2',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#cityBox',
			intro :'',
			tooltipClass:'hide',
			position:"right"
		},{
			element :'#printf3',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :''
		},{
			element :'#scanf3',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#phoneNoBox',
			intro :'',
			tooltipClass:'hide',
			position:"right"
		},{
			element :'#printf4',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :''
		},{
			element :'#scanf4',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#pinNoBox',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#printf5',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#embeddedFormat',
			intro :'',
			position:"right"
		},{
			element :'#restartBtn',
			intro :'Click to restart.',
			position:"right"
		}]
	});
	intro.onafterchange(function(targetElement) { 
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "informationdiv" :
			$("#informationdiv").append("<ul><li id='li1' class='opacity00'>In C language a structure can be declared <span class='color-green'>"
					+ "inside another structure</span>. This is called a <span class='color-green'>Nested structure</span>.</li></ul>");
			intro.refresh();
			$("#informationdiv").removeClass("opacity00");
			TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
				$("#li1").removeClass("opacity00");
				$('#li1').append(' &emsp; <a class="introjs-button user-btn">Next &#8594;</a>')
				$('.user-btn').click(function() {
					$(this).remove();
					intro.nextStep();
				});
			}});
		break;
		case "tableDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableDiv').removeClass('visibility-hidden');
		  		typing('.introjs-tooltiptext',"Let us consider an example of nested structure." ,function() { 
					$('.introjs-nextbutton').show();	
				    });
				});
		break;
		case "structDate" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#structDate').removeClass('opacity00');
				typing('.introjs-tooltiptext',"<ul><li>This is the declaration of new user defined datatype"
						+ " <span class='ct-code-b-yellow'>date</span>.</li><li>Three <span class='ct-code-b-yellow'>integer</span> members"
		  				+ " are declared inside the structure <span class='ct-code-b-yellow'>date</span>.</li></ul>" ,function() { 
					$('.introjs-nextbutton').show(); 
				  });
				});
		break;
		case "structAccount" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$('#structAccount').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"<ul><li>This is an another structure declaration user defined datatype" +
	  					" <span class='ct-code-b-yellow'>account</span>, which contains three members <span class='ct-code-b-yellow'>integer</span>,"
	  					+ " <span class='ct-code-b-yellow'>character</span>, and <span class='ct-code-b-yellow'>struct</span>.</li>"
	  					+ " <li>Here <span class='ct-code-b-yellow'>lastpayment</span> is a variable of type <span class='ct-code-b-yellow'>"
	  					+ " struct date</span>, which is declared inside the structure <span class='ct-code-b-yellow'>account</span>.</li></ul>" ,function() { 
						$('.introjs-nextbutton').show();	
				});
			});
		break;
		case "accountVar" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#accountVar').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>obj</span> is structure variable of account datatype and"+
		  				" memory is allocated for the structure." ,function() { 
					$('.introjs-nextbutton').show();	
				  });
				});
		break; 
		case "accountVariableTable" :
			$('#ob1').removeClass('opacity00');
			$('#accountVariableTable').removeClass('visibility-hidden');
			if(intro._currentStep == 5) {
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function(){
						intro.nextStep();
					}, 300);
				});
			}
		break;
		case "accountNumber0" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This member can be accessed as <span class='ct-code-b-yellow'>obj.accno</span> ." ,function() { 
					$('.introjs-nextbutton').show();
				});
			  });
		break; 
		case "accountNumber1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This member can be accessed as <span class='ct-code-b-yellow'>obj.acctype</span>." ,function() { 
					intro.refresh();
					$('.introjs-nextbutton').show();	
				});
			 });
		break;
		case "accountNumber2" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"<ul><li>Here <span class='ct-code-b-yellow'>lastpayment</span> is a member of type"
						+ " <span class='ct-code-b-yellow'>struct date</span>, which contains three inner fields.</li>"
						+ "<li>The members can be accessed as <span class='ct-code-b-yellow'>obj.lastpayment.day</span>", function() { 
					$("#dayId").effect("highlight", {color: 'blue'}, 500, function() {
						$('.introjs-tooltiptext > ul li:last-child').append(", <br><span class='ct-code-b-yellow'>obj.lastpayment.month</span>");
						$("#monthId").effect("highlight", {color: 'blue'}, 500, function() {
							$('.introjs-tooltiptext > ul li:last-child').append(", <br><span class='ct-code-b-yellow'>obj.lastpayment.year</span>");
							$("#yearId").effect("highlight", {color: 'blue'}, 500, function() {
								intro.refresh();
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
			});
		break;
		case "structEmployee" :
			$('#tableDiv1').removeClass('visibility-hidden');
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					intro.nextStep();
				}, 500);
			});
		break; 
		case "structEmployeeE" :
			if(intro._currentStep == 10) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext',"This is an another way of declaration of a nested structure. Here structure"
						+ " <span class='ct-code-b-yellow'>employee</span> has a nested structure address(<span class='ct-code-b-yellow'>"
						+ "a</span>) inside, which is declared and defined.", function() { 
						$('.introjs-nextbutton').show();
					});
			  });
			} else if(intro._currentStep == 12) {
				$('#TableBox').removeClass('visibility-hidden');
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>e</span> is the structure variable of user defined"
							+ " data type <span class='ct-code-b-yellow'>employee</span> and memory is allocated for"
							+ " <span class='ct-code-b-yellow'>e</span>." ,function() { 
						$('.introjs-nextbutton').show();
						});
				  });
			}
			
		break; 
		case "subStructOfEmployee" :
			intro.refresh();
			$('#consoleAndTableBox').removeClass('visibility-hidden');
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"<ul><li>The first field is <span class='ct-code-b-yellow'>name</span> of the employee.</li>"
						+ " <li>The second field of employee is another structure <span class='ct-code-b-yellow'>address</span>.</li>"
						+ "<li>The members <span class='ct-code-b-yellow'>city</span>, <span class='ct-code-b-yellow'>phone</span> and"
						+ " <span class='ct-code-b-yellow'>pin</span> are declared with in the structure <span class='ct-code-b-yellow'>"
						+ " address</span>.</li></ul>" ,function() { 
					$('.introjs-nextbutton').show();
					});
			  });
		break; 
		case "printf1" :
		case "printf2" :
		case "printf5" :
		case "printf4" :
		case "printf3" :
			$('#consoleId').removeClass('opacity00');
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					intro.nextStep();
				}, 300); 
			});
		break; 
		case "consoleId" :
			console.log("consoleId");
			if(intro._currentStep == 14) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#nameSpan').removeClass('opacity00');
					$('#nameInput').effect("highlight", {color: 'yellow'}, 500).focus();
					typing('.introjs-tooltiptext',"Enter name.");
				 });
			} else if (intro._currentStep == 18) {
				 $(".introjs-helperLayer").one("transitionend", function() {
						$('#citySpan').removeClass('opacity00');
						$('#cityInput').effect("highlight", {color: 'yellow'}, 500).focus();
						typing('.introjs-tooltiptext',"Enter city."); 
					  });
					} else if (intro._currentStep == 22) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#phoneNumberSpan').removeClass('opacity00');
							$('#phoneNumberInput').effect("highlight", {color: 'yellow'}, 500).focus();
							typing('.introjs-tooltiptext',"Enter phone number."); 
						 });
					} else if (intro._currentStep == 26) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#pinNumberSpan').removeClass('opacity00');
							$('#pinNumberInput').effect("highlight", {color: 'yellow'}, 500).focus();
							typing('.introjs-tooltiptext',"Enter pin number."); 
						});
					} else if (intro._currentStep == 30) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$("#outPut").removeClass("opacity00");
							var text = $("#nameInput").val() + " " + $("#cityInput").val() + " " + $("#phoneNumberInput").val() 
									+ " " + $("#pinNumberInput").val();
							typing('#outPut', "<span class=''>" + text + "</span>", function() { 
								typing('.introjs-tooltiptext',"Output." ,function() { 
									setTimeout(function(){
										intro.nextStep();
									}, 600);
								});
							});
						 });
					}
		break; 
		case "scanf1" :
			$("#nameInput").attr("disabled", false);
			$('#divE').removeClass('opacity00');
			$("#percentiles1").effect("highlight", {color: '#FFDC00'}, 1000, function() {
				$("#name1").effect("highlight", {color: '#FFDC00'}, 1000, function() {
					$("#divE").effect("highlight", {color: '#FFDC00'}, 1000, function() {	
						$("#divName").effect("highlight", {color: '#FFDC00'}, 1000, function() {
							intro.nextStep();
						});
					});
				});
			});
		break; 
		case "scanf2" :
			$("#cityInput").attr("disabled", false);
			scanfAnimation("2", "city1", 'subcity');
		break; 
		case "scanf3" :
			$("#phoneNumberInput").attr("disabled", false);
			scanfAnimation("3", "phone1", 'subphone');
		break; 
		case "scanf4" :
			$("#pinNumberInput").attr("disabled", false);
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#percentiled").effect("highlight", {color: '#FFDC00'}, 1000, function() {
					$("#pin").effect("highlight", {color: '#FFDC00'}, 500, function() {
						$("#divE").effect("highlight", {color: '#FFDC00'}, 500, function() {	
							$("#divA").effect("highlight", {color: '#FFDC00'}, 500, function() {	
								$("#subpin").effect("highlight", {color: '#FFDC00'}, 1000, function() {
									intro.nextStep();
								});
							});
						});
					});
				});
			 });
		break; 
		case "nameBox" :
			$("#nameInput").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#nameInput").offset();
				$("#nameBox").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#nameBox", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('#nameBox').removeClass('opacity00');
					setTimeout(function(){
						intro.nextStep();
					}, 300);
		        }});
			 });
		break; 
		case "cityBox" :
			$("#cityInput").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#cityInput").offset();
				$("#cityBox").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#cityBox", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('#cityBox').removeClass('opacity00');
					setTimeout(function(){
						intro.nextStep();
					}, 300);
	           	}});
			});
		break;
 		case "phoneNoBox" :
			$("#phoneNumberInput").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#phoneNumberInput").offset();
				$("#phoneNoBox").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#phoneNoBox", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('#phoneNoBox').removeClass('opacity00');
					setTimeout(function(){
						intro.nextStep();
					}, 300);
	            }});
			});
		break; 
		case "pinNoBox" :
			$("#pinNumberInput").attr("disabled", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var l = $("#pinNumberInput").offset();
				$("#pinNoBox").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#pinNoBox", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$('#phoneNoBox').removeClass('opacity00');
					setTimeout(function(){
						intro.nextStep();
					}, 300);
            	}});
			});
		break; 
		case "embeddedFormat" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#embeddedFormat').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"The members of <span class='ct-code-b-yellow'>nested structure</span>"
		  				+ " (or) <span class='ct-code-b-yellow'>embedded structure</span>"
		  				+ " can be accessed by this format.<br> i.e., To access the phone of employee <span class='ct-code-b-yellow'>e"
		  				+ "</span> use <span class='ct-code-b-yellow'>e.a.phone</span>.", function() { 
					$('.introjs-nextbutton').show();	
				  });
				});
		break;
		case "restartBtn":
			$(".introjs-tooltip").css({'min-width' : '110px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
			});
		break;
		}
	});
	intro.start();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
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

function scanfAnimation(val, id1, id2) {
	$(".introjs-helperLayer").one("transitionend", function() {
		$("#percentiles" + val).effect("highlight", {color: '#FFDC00'}, 500, function() {
			$("#" + id1).effect("highlight", {color: '#FFDC00'}, 500, function() {
				$("#divE").effect("highlight", {color: '#FFDC00'}, 500, function() {	
					$("#divA").effect("highlight", {color: '#FFDC00'}, 1000, function() {
						$("#" + id2).effect("highlight", {color: '#FFDC00'}, 500, function() {
							intro.nextStep();
						});
					});
				});
			});
		});
	});
}