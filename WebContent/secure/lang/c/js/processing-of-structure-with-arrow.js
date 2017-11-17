var intro;
var typingInterval = 1;
var processingOfStructureWithArrow = function() {
	$(".line").hide();
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed 
	        objEvent.preventDefault(); // stops its action
	    }
	    if (objEvent.keyCode == 16) { //shift key
	    	 objEvent.preventDefault();
	    }
	});
	$("#restart").click(function(){
		location.reload();
	});
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#informationDiv",
				tooltipClass:"hide"
			},{
				element : "#codeDiv",
				intro : "",
				position:"right",
			},{
				element : "#declaration",
				intro : "",
				position:"right",
			},{
				element : "#pointerVariable",
				intro : "",
				position:"right",
			},{
				element : "#pDiv",
				intro : "",
				tooltipClass:"hide",
				position:"right",
			},{
				element : "#mallocStmt",
				intro : "",
				position:"bottom",
			},{
				element : "#animationDiv",
				intro : "",
				tooltipClass:"hide",
				position:"bottom",
			},{
				element : "#enterName",
				intro : "",
				tooltipClass:"hide",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass: "hide"
			},{
				element : "#readName",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
				tooltipClass: "hide"
			},{
				element : "#pname",
				tooltipClass:"hide"
			},{
				element : "#enterPages",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass: "hide"
			},{
				element : "#readPages",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
				tooltipClass: "hide"
			},{
				element : "#ppages",
				tooltipClass:"hide"
			},{
				element : "#enterPrice",
				intro : "",
				position:"bottom",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass: "hide"
			},{
				element : "#readprice",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				intro : "",
				position:"bottom",
				tooltipClass: "hide"
			},{
				element : "#pprice",
				tooltipClass:"hide"
			},{
				element : "#printDetails",
				intro : "",
				position:"bottom",
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#restart",
				intro : "",
				position:"right",
			}
			]});
		
		intro.onbeforechange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "pointerVariable":
			case "pDiv":
				$("#tableOfp").addClass("opacity00");
			break;
			case "mallocStmt":
			case "animationDiv":
					$("#memory, #address").addClass('opacity00');
					$("#arrowMark1").hide().attr("x2","24.9%");
			break;
			case "enterName":
				$('#name').parent().remove();
			break;
			case "readName":
				$('#editname').empty();
			break;
			case "enterPages":
				$('#pages').parent().remove();
			break;
			case "readPages":
				$('#editpages').empty();
			break;
			case "enterPrice":
				$('#price').parent().remove();
			break;
			case "readprice":
				$('#editprice').empty();
			break;
			}
		});
		
		intro.onafterchange(function(targetElement) {
			
			$('.introjs-prevbutton, .introjs-skipbutton, .introjs-bullets, .introjs-prevbutton').hide();
			
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
			case "informationDiv":
				$('.introjs-nextbutton').hide();
				$("#li1").fadeTo(500, 1, function() {
					$("#li2").fadeTo(500, 1, function() {
						$("#li3").fadeTo(500, 1, function() {
							$("#informationDiv").css({"z-index": "999999999"});
							intro.nextStep();
						});
					});
				});
			break;
			case "codeDiv":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#codeDiv").removeClass("opacity00");
					var text = "Let us consider an  example.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "declaration":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the declaration of user defined datatype <span class='ct-code-b-yellow'>"
						+"book</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;	
			case "pointerVariable":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the definition of <span class='ct-code-b-yellow'>struct</span> pointer variable."
						+"<br/><br/>The pointer variable " 
						+ "<span class='ct-code-b-yellow'>p</span> occupies <span class='ct-code-b-yellow'>2 bytes</span>" 
						+ " in memory.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				
			break;	
			case "pDiv":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#tableOfp").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "Here, pointer variable <b class='ct-code-b-yellow'>p</b> stores <span class='ct-code-b-yellow'>address</span>" 
							+ " of the struct <span class='ct-code-b-yellow'>book</span> datatype.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					
				});
			break;
			case "mallocStmt":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "The method <span class='ct-code-b-yellow'>malloc()</span> allocates runtime memory "
						+"to user defined datatype <span class='ct-code-b-yellow'>book</span> and returns the base address of the allocated memory.<br/><br/>This allocated memory address"
						+" is stored in a structure pointer variable  <span class='ct-code-b-yellow'>p</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "animationDiv":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#memory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#memory").removeClass("animated zoomIn");
						$("#address1").effect( "highlight",{color: 'yellow'}, 1500, function() {
							fromEffectWithTweenMax("#address1", "#address", function() {
								$("#arrowMark1").show();
								TweenMax.to("#arrowMark1", 1, {attr:{x2: "35%", y2: "45%" }, onComplete:function() {
									$('.introjs-tooltip').removeClass('hide');
									var text = "Now, the base address is stored in the pointer variable <span class='ct-code-b-yellow'>p</span>.";
									typing(".introjs-tooltiptext", text, function() {
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								}});
							});
						});
					});
				});
			break;
			case "enterName":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#output").append('<span><span id="name"></span><span class="padding3 input" contenteditable="true" id="editname" maxlength="18" spellcheck="false"></span><br></span>');
						characters();
						introNextStep();
					} else {
						introPreviousStep();
					}
					
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					if (intro._currentStep == 8) {
						if (intro._direction == "forward") {
							var text = "Enter name : ";
							typing("#name", text, function() {
								introNextStep();
							});
						} else {
							$("#outputDiv").addClass("opacity00");
							introPreviousStep();
						}
						
					} else if (intro._currentStep == 10) {
						$("#editname").empty().attr('contenteditable','true').effect( "highlight",{color: 'yellow'}, 1500).focus();
						$('.introjs-tooltip').removeClass('hide');
						var text = "Please enter a <span class='ct-code-b-yellow'>name.";
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 13) {
						if (intro._direction == "forward") {
							var text = "Enter pages : ";
							typing("#pages", text, function() {
								introNextStep();
							});
						} else {
							introPreviousStep();
						}
						
					} else if (intro._currentStep == 15) {
						$("#editpages").empty().attr('contenteditable','true').effect( "highlight",{color: 'yellow'}, 1500).focus();
						$('.introjs-tooltip').removeClass('hide');
						var text = "Please enter number of <span class='ct-code-b-yellow'>pages</span>.";
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 18) {
						if (intro._direction == "forward") {
							var text = "Enter price : ";
							typing("#price", text, function() {
								introNextStep();
							});
						} else {
							introPreviousStep();
						}
						
					} else if (intro._currentStep == 20) {
						$("#editprice").empty().attr('contenteditable','true').effect( "highlight",{color: 'yellow'}, 1500).focus();
						$('.introjs-tooltip').removeClass('hide');
						var text = "Please enter <span class='ct-code-b-yellow'>price</span>.";
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 23) {
						var text = "Name : "+ $("#pname").text() + "  pages : " 
								+ $("#ppages").text() + "  price : " + $("#pprice").text() + "";
						typing("#result", text, function() {
							introNextStep();
						});
					}
				});
			break;
			case "readName":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer").one('transitionend', function() {
					var text = "This statement reads the value entered by user "
						+ "from the standard input device (keyboard) "
						+" and stores it in the <span class='ct-code-b-yellow'>p->name</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				}); 
			break;
			case "pname":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#pname").addClass("opacity00").text($("#editname").text());
						intro.refresh();
						$("#editname").attr("contenteditable", false);
						opacityTo100WithTweenMax($("#pname"), function() {
							intro.nextStep();
						});
					} else {
						$("#pname").empty();
						introPreviousStep();
					}
					
				});
			break;
			case "enterPages":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#output").append('<span><span id="pages"></span><span class="containnumbers input padding3" contenteditable="true" id="editpages" maxlength="3" spellcheck="false"></span><br></span>');
						numbers();
						introNextStep();
					} else {
						introPreviousStep();
					}
				});
			break;
			case "readPages":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement reads the value entered by user "
						+ "from the standard input device (keyboard) "
						+" and stores it in the <span class='ct-code-b-yellow'>p->pages</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				}); 
			break;
			case "ppages":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#editpages").attr("contenteditable", false);
						$("#ppages").addClass("opacity00").text($("#editpages").text());
						opacityTo100WithTweenMax($("#ppages"), function() {
							intro.nextStep();
						});
					} else {
						$("#ppages").empty();
						introPreviousStep();
					}
					
				});
			break;
			case "enterPrice":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#output").append('<span><span id="price"></span><span class="containnumbers input'
								+' padding3" contenteditable="true" id="editprice" maxlength="3" spellcheck="false"></span><br></span>');
						numbers();
						introNextStep();	
					} else {
						introPreviousStep();
					}
				});
			break;
			case "readprice":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() { 
					var text = "This statement reads the value entered by user "
						+ "from the standard input device (keyboard) "
						+" and stores it in the <span class='ct-code-b-yellow'>p->price</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "pprice":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._direction == "forward") {
						$("#editprice").attr("contenteditable", false);
						$("#pprice").addClass("opacity00").text($("#editprice").text());
						$("#pprice").removeClass("opacity00").hide().fadeIn(2000,function() {
							intro.nextStep();
						});
					} else {
						$("#pprice").empty();
						introPreviousStep();
					}
					
				});
			break;
			case "printDetails" :
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement prints the values of <span class='ct-code-b-yellow'>book p</span> by accessing"
								+" the members of p, using the arrow operator.<br/><br/><span class='ct-code-b-yellow'>p->name</span>,"
								+" <span class='ct-code-b-yellow'>p->pages</span> and <span class='ct-code-b-yellow'>p->price</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="result"></span>');
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
			break;
			case "restart":
				$('.introjs-nextbutton').hide();
				$('#informationDiv').css({"z-index": "0"});
				$('.introjs-tooltip').css('min-width','125px');
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to restart.";
						typing(".introjs-tooltiptext", text, function() {
							
						});
					}});
				});
			break;
			}
		});
		intro.start();
}

function introNextStep() {
	setTimeout(function() {
		intro.nextStep();
	}, 1000);
}


function introPreviousStep() {
	setTimeout(function() {
		intro.previousStep();
	}, 500);
}



function typing(typingId, typingContent,callBackFunction) {
	$('.nextButton').hide();
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).removeClass('opacity00')
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function opacityTo100WithTweenMax(selector, callBackFunction) {
	TweenMax.to($(selector), 0.5, {opacity: 1, onComplete: function() {
		$(selector).removeClass('opacity00')
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function characters() {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) > max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 20 characters, because the array variable size is name[20].</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
			e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").text().length == 0) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please enter a name.</div>");
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		} else {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
		} 
		
		if (e.which >= 60 && e.which <= 90) {
			return true;
		} else {
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			}  else {
				e.preventDefault();
			}
		}
		
	});
}


function numbers() {
	$("[contenteditable=true]").on('keydown', function(e) {
		$('.ct-code-b-red').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173) {
			if ($(this).text().length < 1) {	
				return;
			} else {
				e.preventDefault();
			}
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode ==9)){
			e.preventDefault();
		}
		if ($(this).text().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="ct-code-b-red">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$("[contenteditable=true]").on('keyup', function(e) {
		var max = $(this).attr('maxlength');
		if ($(this).text().length != max ) {
			$('.ct-code-b-red').remove();
		}
		if ($(this).text().length != 0) {
			$('.introjs-nextbutton, .introjs-prevbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				intro.nextStep();
			}
		} else {
			if ($('ct-code-b-red').length == 0) {
				$('.introjs-tooltiptext').append('<div class="ct-code-b-red">Please enter any integer.</div>');
			}
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
		}
	});
}