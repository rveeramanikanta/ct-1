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
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		} else {
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-tooltiptext').append('<div class="color-red">Please enter string.</div>');
		}
	});
	$('#cityInput').keyup(function() {
		$('.color-red').remove(); 
		if($('#cityInput').val().length > 0) {
			  intro.refresh();
			  var city = $('#cityInput').val();
			  $('#cityBox').text(city);
			  $('.introjs-nextbutton, .introjs-prevbutton').show();
		} else {
			  $('.introjs-tooltiptext').append('<div class="color-red">Please enter string.</div>');
			  $('.introjs-nextbutton, .introjs-prevbutton').hide();
		}
	});
	$('#phoneNumberInput').keyup(function() {
		var max = $(this).attr("maxlength");
		if ($(this).val().length != max) {
			$('.color-red').remove();
		}
		if($('#phoneNumberInput').val().length > 0) {
			  var phone = $('#phoneNumberInput').val();
			  $('#phoneNoBox').text(phone);
			  $('.introjs-nextbutton, .introjs-prevbutton').show();
		} else {
			  $('.introjs-tooltiptext').append('<div class="color-red">Please enter numbers.</div>');
			  $('.introjs-nextbutton, .introjs-prevbutton').hide();
		}
	});
	
	$('#pinNumberInput').keyup(function() {
		var max = $(this).attr("maxlength");
		if ($(this).val().length != max) {
			$('.color-red').remove();
		}
		if($('#pinNumberInput').val().length > 0) {
			  var pin = $('#pinNumberInput').val();
			  $('#pinNoBox').text(pin);
			  $('.introjs-nextbutton, .introjs-prevbutton').show();
		} else {
			  $('.introjs-tooltiptext').append('<div class="color-red">Please enter numbers.</div>');
			  $('.introjs-nextbutton, .introjs-prevbutton').hide();
		}
	});
	$("#nameInput, #cityInput").keydown(function(e) {
		$('.color-red').remove();
		var max = $(this).attr("maxlength");
		if ($(this).val().length >= max) {
			$('.introjs-tooltiptext').append("<div class='color-red'>Please restrict the string maximun length 15 digits only.</div>");
			e.preventDefault();
		}
		if ((e.keyCode >= 65 && e.keyCode <= 90) || ($.inArray(e.keyCode, [8,46, 37, 39, 27]) !== -1)) {
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
			//e.preventDefault();
		}
		if (((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) || ($.inArray(e.keyCode, [8,46, 37, 39, 27]) !== -1)) {
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
			position:"left",
			tooltipClass:'hide'
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
			intro :'',
			tooltipClass:'hide'
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
			intro :'',
			tooltipClass:'hide'
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
			intro :'',
			tooltipClass:'hide'
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
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#scanf4',
			intro :'',
			tooltipClass:'hide'
		},{
			element :'#pinNoBox',
			intro :'',
			tooltipClass:'hide',
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
	intro.onbeforechange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "informationdiv" :
			intro.refresh();
		break;
		case "accountVariableTable" :
			$('#ob1').addClass('opacity00');
			$('#accountVariableTable').addClass('visibility-hidden');
		break;
		case "structEmployeeE" :
			if(intro._currentStep == 10) {
			} else if(intro._currentStep == 12) {
				$('#TableBox').removeClass('visibility-hidden');
			}
			
		break; 
		case "subStructOfEmployee" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#TableBox').addClass('visibility-hidden');
				intro.refresh();
			});
			
		break; 
		case "pinNoBox" :
			$('#embeddedFormat').addClass('opacity00');
		break; 
		case "embeddedFormat" :
			$('#embeddedFormat').removeClass('opacity00');
		break;
		}
	});
	
	intro.onafterchange(function(targetElement) { 
		
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		
		// ********************** start ************back button logic
		
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 1) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		
		// ********************** end ************back button logic
		
		
		
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "informationdiv" :
			$("#informationdiv").append("<ul><li id='li1' class='opacity00'>In C language a structure can be declared <span class='color-green'>"
					+ "inside another structure</span>. This is called <span class='color-green'>Nested structure</span>.</li></ul>");
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
				$('pre > *').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"Let us consider an example of <b class='ct-code-b-yellow'>nested structure</b>." ,function() { 
					$('.introjs-nextbutton').show();	
				    });
				});
		break;
		case "structDate" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#structDate').removeClass('opacity00');
				typing('.introjs-tooltiptext',"<ul><li>This is the declaration for a new user defined datatype"
						+ " <span class='ct-code-b-yellow'>date</span>.</li><li>Three <span class='ct-code-b-yellow'>integer</span> members"
		  				+ " are declared inside the structure <span class='ct-code-b-yellow'>date</span>.</li></ul>" ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show(); 
				  });
				});
		break;
		case "structAccount" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$('#structAccount').removeClass('opacity00');
	  			typing('.introjs-tooltiptext',"<ul><li>This is an another structure declaration of user defined datatype" +
	  					" <span class='ct-code-b-yellow'>account</span>, which contains three members <span class='ct-code-b-yellow'>integer</span>,"
	  					+ " <span class='ct-code-b-yellow'>character</span>, and <span class='ct-code-b-yellow'>struct</span>.</li>"
	  					+ " <li>Here <span class='ct-code-b-yellow'>lastpayment</span> is a variable of type <span class='ct-code-b-yellow'>"
	  					+ " struct date</span>, which is declared inside the structure <span class='ct-code-b-yellow'>account</span>.</li></ul>" ,function() { 
	  				$('.introjs-nextbutton, .introjs-prevbutton').show(); 	
				});
			});
		break;
		case "accountVar" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#accountVar').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>obj</span> is structure variable of account datatype and"+
		  				" memory is allocated for the structure." ,function() { 
		  			$('.introjs-nextbutton, .introjs-prevbutton').show(); 
				  });
				});
		break; 
		case "accountVariableTable" :
			
				$(".introjs-helperLayer").one("transitionend", function() {
					if (intro._direction == "forward") {
						$('#ob1').removeClass('opacity00');
						$('#accountVariableTable').removeClass('visibility-hidden');
						setTimeout(function() {
							intro.nextStep();
						}, 300);
					} else {
						setTimeout(function() {
							intro.previousStep();
						}, 300);
					}
				
				});
		break;
		case "accountNumber0" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This member can be accessed as <span class='ct-code-b-yellow'>obj.accno</span>" ,function() { 
					$('.introjs-nextbutton, .introjs-prevbutton').show(); 
				});
			  });
		break; 
		case "accountNumber1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext',"This member can be accessed as <span class='ct-code-b-yellow'>obj.acctype</span>" ,function() { 
					intro.refresh();
					$('.introjs-nextbutton, .introjs-prevbutton').show();	
				});
			 });
		break;
		case "accountNumber2" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"<ul><li>Here <span class='ct-code-b-yellow'>lastpayment</span> is a member of type"
						+ " <span class='ct-code-b-yellow'>struct date</span>, which contains three inner fields.</li>"
						+ "<li>The members can be accessed as <span class='ct-code-b-yellow'>obj.lastpayment.day</span>", function() { 
					$("#lastpayment").addClass('z-index');
					$("#dayId").effect("highlight", {color: 'yellow'}, 500, function() {
						$('.introjs-tooltiptext > ul li:last-child').append(", <br><span class='ct-code-b-yellow'>obj.lastpayment.month</span>");
						$("#monthId").effect("highlight", {color: 'yellow'}, 500, function() {
							$('.introjs-tooltiptext > ul li:last-child').append(", <br><span class='ct-code-b-yellow'>obj.lastpayment.year</span>");
							$("#yearId").effect("highlight", {color: 'yellow'}, 500, function() {
								$("#lastpayment").removeClass('z-index');
								intro.refresh();
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
			});
		break;
		case "structEmployee" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward") {
					$('#tableDiv1').removeClass('visibility-hidden');
					setTimeout(function() {
						intro.nextStep();
					}, 500);
				} else {
					setTimeout(function() {
						$('#tableDiv1').addClass('visibility-hidden');
						intro.previousStep();
					}, 500);
				}
				
			});
		break; 
		case "structEmployeeE" :
			if(intro._currentStep == 10) {
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext',"This is one more way of declaring a nested structure. <br></br> The structure"
						+ " <span class='ct-code-b-yellow'>employee</span> has a nested structure address(<span class='ct-code-b-yellow'>"
						+ "a</span>) within it.<br><br> This nested structure <b class='ct-code-b-yellow'>address</b> is declared and defined.", function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show(); 
					});
			  });
			} else if(intro._currentStep == 12) {
				$('#TableBox').removeClass('visibility-hidden');
				$(".introjs-helperLayer").one("transitionend", function() {
					typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>e</span> is the structure variable of user defined"
							+ " data type <span class='ct-code-b-yellow'>employee</span>.<br><br>Memory is allocated for"
							+ " <span class='ct-code-b-yellow'>e</span>." ,function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
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
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
			  });
		break; 
		case "printf1" :
		case "printf2" :
		case "printf5" :
		case "printf4" :
		case "printf3" :
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					if(intro._direction == "forward") {
						$('#consoleId').removeClass('opacity00');
						intro.nextStep();
					} else {
						if (elementId == "printf1") {
							$('#consoleId').addClass('opacity00');
						}
						$('.inputDiv').not('.opacity00').last().addClass('opacity00');
						//$('.inputDiv:not(.opacity00) input').last().val('');
							intro.previousStep();
					}
				}, 300); 
			});
		break; 
		case "consoleId" :
			if(intro._currentStep == 14) {
				$(".introjs-helperLayer").one("transitionend", function() {
					$('#nameSpan').removeClass('opacity00');
					$('#nameInput').effect("highlight", {color: 'yellow'}, 500).removeAttr('disabled').val('').focus();
					$('.introjs-tooltip').removeClass('hide');
					typing('.introjs-tooltiptext',"Enter name.");
				 });
			} else if (intro._currentStep == 18) {
				 $(".introjs-helperLayer").one("transitionend", function() {
						$('#citySpan').removeClass('opacity00');
						$('#cityInput').effect("highlight", {color: 'yellow'}, 500).removeAttr('disabled').val('').focus();
						$('.introjs-tooltip').removeClass('hide');
						typing('.introjs-tooltiptext',"Enter city."); 
					  });
					} else if (intro._currentStep == 22) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#phoneNumberSpan').removeClass('opacity00');
							$('#phoneNumberInput').effect("highlight", {color: 'yellow'}, 500).removeAttr('disabled').val('').focus();
							$('.introjs-tooltip').removeClass('hide');
							typing('.introjs-tooltiptext',"Enter phone number."); 
						 });
					} else if (intro._currentStep == 26) {
						$(".introjs-helperLayer").one("transitionend", function() {
							$('#pinNumberSpan').removeClass('opacity00');
							$('#pinNumberInput').effect("highlight", {color: 'yellow'}, 500).removeAttr('disabled').val('').focus();
							$('.introjs-tooltip').removeClass('hide');
							typing('.introjs-tooltiptext',"Enter pin number."); 
						});
					} else if (intro._currentStep == 30) {
						$(".introjs-helperLayer").one("transitionend", function() {
							if (intro._direction == "forward") {
								$("#outPut").removeClass("opacity00");
								var text = $("#nameInput").val() + " " + $("#cityInput").val() + " " + $("#phoneNumberInput").val() 
										+ " " + $("#pinNumberInput").val();
								typing('#outPut', "<span class=''>" + text + "</span>", function() { 
									setTimeout(function(){
										intro.nextStep();
									}, 600);
								});
							} else {
								$("#outPut").empty().addClass("opacity00");
								setTimeout(function(){
									intro.previousStep();
								}, 600);
							}
							
						 });
					}
		break; 
		case "scanf1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward" ) {
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
				} else {
					setTimeout(function(){
						intro.previousStep();
					}, 300);
				}
			});
		break; 
		case "scanf2" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward" ) {
					$("#cityInput").attr("disabled", false);
					scanfAnimation("2", "city1", 'subcity');
				} else {
					setTimeout(function() {
						intro.previousStep();
					}, 300);
				}
			});
			
		break; 
		case "scanf3" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward" ) {
					$("#phoneNumberInput").attr("disabled", false);
					scanfAnimation("3", "phone1", 'subphone');
				} else {
					setTimeout(function() {
						intro.previousStep();
					}, 300);
				}
			});
		break; 
		case "scanf4" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._direction == "forward" ) {
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
				} else {
					setTimeout(function() {
						intro.previousStep();
					}, 300);
				}
			});
		break; 
		case "nameBox" :
			readingValues('#nameInput',"#nameBox");
		break; 
		case "cityBox" :
			readingValues('#cityInput',"#cityBox");
		break;
 		case "phoneNoBox" :
 			readingValues('#phoneNumberInput',"#phoneNoBox");
		break; 
		case "pinNoBox" :
			readingValues('#pinNumberInput',"#pinNoBox");
		break; 
		case "embeddedFormat" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#embeddedFormat').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"The members of <span class='ct-code-b-yellow'>nested structure</span>"
		  				+ " (or) <span class='ct-code-b-yellow'>embedded structure</span>"
		  				+ " can be accessed by this format.<br> i.e., To access the phone of employee <span class='ct-code-b-yellow'>e"
		  				+ "</span> use <span class='ct-code-b-yellow'>e.a.phone</span>.", function() { 
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
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

function readingValues(selector1,selector2) {
	$(".introjs-helperLayer").one("transitionend", function() {
		if (intro._direction == "forward") {
			$(selector1).attr("disabled", true);
			var l = $(selector1).offset();
			$(selector2).offset({"top": l.top,"left": l.left});
	        TweenMax.to(selector2, 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
				$(selector2).removeClass('opacity00');
				setTimeout(function() {
					intro.nextStep();
				}, 500);
	        }});
	       
		} else {
			$(selector2).addClass('opacity00').removeAttr('style');
			setTimeout(function() {
				intro.previousStep();
			}, 500);
		}
	 });
}
