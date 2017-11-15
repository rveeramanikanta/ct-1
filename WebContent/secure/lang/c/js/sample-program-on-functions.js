 var putElement;
var introjs;
var timelineLite = new TimelineLite();	
var typingSpeed = 1;

var sampleProgramOnFunctionsReady = function() {
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
	 		$(".introjs-nextbutton, .introjs-prevbutton").hide();
		} else {
			$(".introjs-nextbutton, .introjs-prevbutton").show();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
	 	if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only.</div>")
			e.preventDefault();
		}
		if((e.keyCode >= 65 && e.keyCode <= 90)) {
			return;
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
			 		element : "#demoTitle",
					intro : "",
					position : "right",
				},{
			 		element : "#leftDiv",
					intro : "",
					position : "right",
				},{
			 		element : "#funDec",
					intro : "",
					position : "right",
				},{
			 		element : "#varDec",
					intro : "",
					position : "right",
					animation : "repeat"
				},{
			 		element : "#sum",
					intro : "",
					tooltipClass : "hide",
					animation : "repeat"
				},{
			 		element : "#callingFun",
					intro : "",
					position : "right",
				},{
			 		element : "#funDef",
					intro : "",
					position : "right",
				},{
			 		element : "#return",
					intro : "",
					position : "right",
					animation : "repeat"
				},{
			 		element : "#callingFun",
					intro : "",
					position : "right",
				},{
			 		element : "#printf",
					intro : "",
					tooltipClass : "hide",
					animation : "repeat"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide",
				},{
			 		element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			if (introjs._currentStep != 0) {
				$('.introjs-prevbutton').show();
			}
			$('.introjs-nextbutton').show();
			return;
		}
		
		if (introjs._introItems[introjs._currentStep]["animation"] != "repeat") {
			introjs._introItems[introjs._currentStep]["isCompleted"] = true;
		}
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "demoTitle":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			$('#code').removeClass("opacity00");
			var text = "Here, we will learn <b class ='ct-code-b-yellow'>Function Definition</b>"
					+ ", <b class ='ct-code-b-yellow'>Function Declaration</b> and <b class ='ct-code-b-yellow'>Function Call</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
		break;
		case "leftDiv":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#leftDiv').removeClass("opacity00");
				var text = "Let us consider an example.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "funDec":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "We declare a <span class='ct-code-b-yellow'>function</span> with name <span class='ct-code-b-yellow'>"
								+"addition(int, int)</span> with <span class='ct-code-b-yellow'>two</span> arguments of type <b>int</b> "
								+"and <span class='ct-code-b-yellow'>return value</span> of type int.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
		break;
		case "varDec":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here, you can edit the values of <b class ='ct-code-b-yellow'>a</b> and <b class ='ct-code-b-yellow'>b</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					charAtEnd("aVal");
					introjs.refresh();
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "sum":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if ((introjs._introItems[introjs._currentStep]["animation"] == "repeat") && (introjs._direction == "backward")) {
					setTimeout(function() {
						introjs.previousStep();
					}, 400);
				} else {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				}
			});
		break;
		case "callingFun":
			if (introjs._currentStep == 5){
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "A call to the function <span class='ct-code-b-yellow'>addition(a, b)</span> is made by sending" 
								+ " <b>a</b> and <b>b</b> as parameters.<br><br> This is known as <span class='ct-code-b-yellow'>Funciton Call</span>.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.refresh();
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			} else if (introjs._currentStep == 8) {
				$(".introjs-nextbutton, .introjs-prevbutton").hide();
				introjs.refresh();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The return value will be stored in <b class ='ct-code-b-yellow'>sum</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.refresh();
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			}
		break;
		case "funDef":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is <b class ='ct-code-b-yellow'>Function Definition</b>."
					+ " <br><br>Whenever a function call is made, the argument values of the calling function i.e "
					+ " values of <b class ='ct-code-b-yellow'>a</b> and <b class ='ct-code-b-yellow'>b</b> are copied into the parameters "
					+ "of the called function i.e., <b class ='ct-code-b-yellow'>x</b> and <b class ='ct-code-b-yellow'>y</b>.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				});
			});
		break;
		case "return":
			$('.introjs-tooltiptext').empty();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The return type of the function is an integer, the addition of <b class ='ct-code-b-yellow'>x</b> and "
							+ "<b class ='ct-code-b-yellow'>y</b> is an integer which is returned.<br>"
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-tooltiptext").append("<b class ='ct-code-b-yellow'>"
							+ " <div id='rtn' class='display-inline-block relative'>return"
							+ "(<div id='xyVal' class='display-inline-block relative'>"
							+ " <div id='xVal' class='display-inline-block relative'> x </div>" 
							+ " + "
							+ " <div id='yVal' class='display-inline-block relative'>y</div></div>)</div></b>");
					var l1 = $("#rtn").offset();
					var l2 = $("#return").offset();
					var topLength = l2.top - l1.top;
					var leftLength = l2.left - l1.left;
					TweenMax.from("#rtn", 1, {top : topLength, left : leftLength, onComplete:function() {
						TweenMax.to("#xVal", 0.5, {rotationX : -90, onComplete:function() {
							$("#xVal").text($("#aVal").text());
							TweenMax.to("#xVal", 0.5, {rotationX : 0, onComplete:function() {
								TweenMax.to("#yVal", 0.5, {rotationX : -90, onComplete:function() {
									$("#yVal").text($("#bVal").text());
									TweenMax.to("#yVal", 0.5, {rotationX : 0, onComplete:function() {
										TweenMax.to("#xyVal", 0.5, {rotationX : -90, onComplete:function() {
											$("#xyVal").text(parseInt($("#aVal").text()) + parseInt($("#bVal").text()));
											TweenMax.to("#xyVal", 0.5, {rotationX : 0, onComplete:function() {
												introjs.refresh();
												$(".introjs-nextbutton, .introjs-prevbutton").show();
											}});
										}});
									}});
								}});
							}});
						}});
					}});
				});
			});
			
		break;
		case "printf":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if ((introjs._introItems[introjs._currentStep]["animation"] == "repeat") && (introjs._direction == "backward")) {
					setTimeout(function() {
						introjs.previousStep();
					}, 400);
				} else {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				}
			});
		break;
		case "outputDiv":
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
			introjs.refresh();
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The sum of  a + b is : " + "<b class='val-color'> " + (parseInt($("#aVal").text()) + parseInt($("#bVal").text()))+"</b>";
				$("#outputBody").append("<div></div>");
				typing($("#outputBody > div:last-child"), text, function() {
					$("#outputBody > div:last-child").append("<span id='intVal1'><input id='inputVal1' maxlength='2' class='input-val' tabindex='0'/></span>");
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$(".introjs-nextbutton, .introjs-prevbutton").hide();
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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
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