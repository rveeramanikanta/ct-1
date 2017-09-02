var introjs;
var typingSpeed = 5;

var gotoReady = function() {
	introGuide();
	 $("[contenteditable=true]").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
	 	if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if((e.keyCode >= 65 && e.keyCode <= 90)){
			return;
		}
	 	if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > maxlength) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>One Character only.</div>")
			e.preventDefault();
		}
	});
	 $("#restart").click(function(){
		 location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#totalDiv",
					intro : "",
					tooltipClass : "hide"
				},{
				 	element : "#forwardGotoLabel",
					intro : "",
					position : "left"
				},{
				 	element : "#forwardLabel",
					intro : "",
					position : "left"
				},{
				 	element : "#backwardLabel",
					intro : "",
					position : "right"
				},{
				 	element : "#backwardGotoLabel",
					intro : "",
					position : "right"
				},{
			 		element : "#totalDiv",
					intro : "",
					tooltipClass : "hide"
				},{
				 	element : "#code",
					intro : "",
					position : "right"
				},{
				 	element : "#char",
					intro : "",
					position : "right"
				},{
				 	element : "#label",
					intro : "",
					tooltipClass : "hide"
				},{
				 	element : "#printf1",
					intro : "",
					position : "right"
				},{
					element : "#outputDiv",
					intro : "",
					position : "top",
					action : "printf1"
			   },{
					element : "#ifCondition",
					intro : "",
					position : "top"
			   } ,{
				 	element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv":
			if (introjs._currentStep == 0) {
				$('.introjs-nextbutton').hide();
				$("#li1").fadeTo(300, 1, function () {
					$("#li2").fadeTo(300, 1, function () {
						$("#li3").fadeTo(300, 1, function () {
							$("#li4").fadeTo(300, 1, function () {
								$("#exp1").removeClass("opacity00");
								$("#exp2").removeClass("opacity00");
								setTimeout(function(){
									introjs.nextStep();
								}, 1000);
							});
						});
					});
				});
			} else if (introjs._currentStep == 5) {
				$(".introjs-tooltip").hide();
				$(".background-color-red").removeClass("background-color-red");
				$(".introjs-helperLayer").one("transitionend", function() {
					$("#li5").fadeTo(300, 1, function () {
						setTimeout(function() {
							introjs.nextStep()
						}, 500);
					});
				});
			}
		break;
		case "forwardGotoLabel":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In <b class='ct-code-b-yellow'>forward goto</b> first the <b class='ct-code-b-yellow'>goto</b> statement will execute.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "forwardLabel":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "And immediately the control comes to <b>Label</b>."
					+ " <b class ='color-red'>Disadvantage:</b><br> In <b class='ct-code-b-yellow'>forward goto</b>"
					+ " every time the code skipped which is in between <b>goto Label</b> and <b>Label</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#forwardCode").addClass("background-color-red");
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "backwardLabel":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".background-color-red").removeClass("background-color-red");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In <b class='ct-code-b-yellow'>backward goto</b> first the <b>Label</b> will execute."
					+ " And the remaining code will execute from top to bottom.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "backwardGotoLabel":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Whenever the <b>goto Label</b> executed immediately the control goes to <b>Label</b> again."
					+ " <b class ='color-red'>Disadvantage:</b><br> In <b class='ct-code-b-yellow'>backward goto</b>"
					+ " the statements in between <b>label</b> and <b>goto Label</b> will be executed infinite time.";
				typing($(".introjs-tooltiptext"), text, function() {
					$("#backwardCode").addClass("background-color-red");
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "code":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#code").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This sample <b class='ct-code-b-yellow'>C</b> program  will show how <b class='ct-code-b-yellow'>goto</b> work.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "char":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Declaring a chararacter variable <b class='ct-code-b-yellow'>ch</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "label":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep()
				}, 1000);
			});
		break;
		case "printf1":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Enter a character to compare. And <b class='ct-code-b-yellow'>scanf()</b> read the given value.";
				typing($(".introjs-tooltiptext"), text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "outputDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			if (introjs._currentStep == 10) {
				introjs.refresh();
				$("#outputDiv").removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._introItems[introjs._currentStep].action == "printf1") {
						var text = "Enter only one character.";
						typing($(".introjs-tooltiptext"), text, function() {
							var text = "Enter a character : ";
							$("#body").append("<div></div>");
							typing($("#body > div:last-child"), text, function() {
								$("#body > div:last-child").append("<span id='charVal'><input id='inputChar' maxlength='1' class='input-char' tabindex='0'/></span>");
								charAtEnd("inputChar");
								$("#inputChar" ).keyup(function() {
									if ($("#inputChar").val().length == '') {
										$('.introjs-nextbutton').hide();
									} else {
										$('.introjs-nextbutton').show();
									}
								});
							});
						});
					} 
				}); 
			} else {
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._introItems[introjs._currentStep].action == "printf1") {
						var text = "Enter only one character.  You may enter <b class='ct-code-b-yellow'>#</b> if you want stop.";
						typing($(".introjs-tooltiptext"), text, function() {
							var text = "Enter a character : ";
							$("#body").append("<div></div>");
							typing($("#body > div:last-child"), text, function() {
								$("#body > div:last-child").append("<span id='charVal'><input id='inputChar' maxlength='1' class='input-char' tabindex='0'/></span>");
								charAtEnd("inputChar");
								$("#inputChar" ).keyup(function() {
									if ($("#inputChar").val().length == '') {
										$('.introjs-nextbutton').hide();
									} else {
										$('.introjs-nextbutton').show();
									}
								});
							});
						});
					} 
				});
			}
		break;
		case "ifCondition":
			$('.introjs-nextbutton').hide(); 
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The condition "
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append(" <div id='cnd' class='display-inline-block relative ct-code-b-yellow'>"
							+ " <span id='colon1' class='opacity00'>'</span><div id='chVal' class='display-inline-block relative'> ch </div><span id='colon2' class='opacity00'>'</span> !=  '#'</div>"
							+ " <div id='cndtnExp1'></div>");
					var l1 = $("#cnd").offset();
					var l2 = $("#ifCnd").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#cnd", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#chVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#chVal").text($("#inputChar").val());
							$("#colon1").removeClass("opacity00");
							$("#colon2").removeClass("opacity00");
							TweenMax.to("#chVal", 0.5, {rotationX : 0, onComplete:function() {
								 $("#inputChar").removeAttr("id");
								var text;
								if ("" + $("#chVal").text() != "#") {
									text = "is evaluates to <span class='ct-code-b-yellow'>true</span>.";
									
									var newStep = {
										element : "#gotoL1",
										intro : "",
										position : "top"
									};
									introjs.insertOption(introjs._currentStep + 1, newStep);
									
							 		var newStep = {
										element : "#label",
										intro : "",
										tooltipClass : "hide"
									};
									introjs.insertOption(introjs._currentStep + 2, newStep);
									
									var newStep = {
										element : "#printf1",
										intro : "",
										position : "top"
									};
									introjs.insertOption(introjs._currentStep + 3, newStep);
									
									var newStep = {
										element : "#outputDiv",
										intro : "",
										position : "top",
										action : "printf1"
									};
									introjs.insertOption(introjs._currentStep + 4, newStep);
										
									var newStep = {
										element : "#ifCondition",
										intro : "",	
										position : "top"
									};
									introjs.insertOption(introjs._currentStep + 5, newStep);
												
								} else {
									text = "This evaluates to <span class='ct-code-b-yellow'>false</span>."
										+ " Since the condition != # evaluates to <span class='ct-code-b-yellow'>false</span>, the control comes out"
										+ " of the if-condition and also from the main() and terminates the program.";
									var newStep = {
										element : "#restart",
										intro : "",
										position : "right"
									};
								}
								typing($("#cndtnExp1"), text, function() {
									$(".introjs-nextbutton").show();
								});
							}});
						}}); 
					}});
				});
			});
		break;
		case "gotoL1":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When the <b class='ct-code-b-yellow'>goto start;</b> statement is executed, the control goes to the label marked with <b class='ct-code-b-yellow'>start:</b>"
					+ " This process is continues until the condition is false.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('#restart').removeClass("opacity00");
			$(".introjs-tooltip").css({"min-width": "115px"});
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text, function() {
				});
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}


function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}