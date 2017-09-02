var introjs;
var timelineLite = new TimelineLite();	
var typingSpeed = 5;
var typing_interval = 10;

var operatorPrecedenceAssociativityReady = function() {
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
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only</div>")
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
				 	element : "#leftDiv",
					intro : "",
					position : "right"
				},{
					 element : "#editNum",
					intro : "",
					position : "right"
			   },{
					element : "#eqtnExe1",
					intro : "",
					tooltipClass : "hide"
			   },{
					element : "#rightDiv",
					intro : "",
					position : "bottom"
			   },{
					element : "#printf",
					intro : "",
					tooltipClass: "hide"
			   },{
					element : "#outputDiv",
					intro : "",
					tooltipClass : "hide"
			   },{
				 	element : "#restart",
					intro : "",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv":
			$('.introjs-nextbutton').hide();
				$("#li1").fadeTo(500, 1, function () {
					$("#li2").fadeTo(500, 1, function () {
					$(".introjs-tooltipbuttons").append("<span class='user-btn introjs-button' onclick='flipFirstEqtn()'>Next &#8594;</span>");
				});
			});
		break;
		case "leftDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".user-btn, .user-btn1, .user-btn2").remove();
			introjs.refresh();
			$("[contenteditable=true]").attr("contenteditable", "false");
			$("#leftDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us see how <b class='ct-code-b-yellow'>operator precedence</b> and <b class='ct-code-b-yellow'>associativity</b> works in the given program.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "editNum":
		$('.introjs-nextbutton').hide();
		$('.introjs-prevbutton').hide();
		introjs.refresh();
		$("#editNum").addClass("color-black");
		$("[contenteditable=false]").attr("contenteditable", "true");
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "Please, note you can always change the values assign to <b class='ct-code-b-yellow'>num1</b>, <b class='ct-code-b-yellow'>num2</b>,"
						+ " <b class='ct-code-b-yellow'>num3</b> and <b class='ct-code-b-yellow'>num4</b>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$("#firstVal").effect( "highlight",{color: 'yellow'}, 500, function() {
					$("#secondVal").effect("highlight", {color: 'yellow'}, 500, function() {
						$("#thirdVal").effect("highlight", {color: 'yellow'}, 500, function() {
							$("#fourthVal").effect("highlight", {color: 'yellow'}, 500, function() {
								charAtEnd("firstVal");
								introjs.refresh();
								$(".introjs-nextbutton").show();
							});
						});
					});
				});
			});
		});
		break;
		case "eqtnExe1":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".color-black").removeClass("color-black");
			$("#eqtnExe1").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 1000);
			});
		break;
		case "rightDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").hide();
			introjs.refresh();
			$(".color-black").removeClass("color-black");
			$("[contenteditable=true]").attr("contenteditable", "false");
			$("#rightDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function(){
						$('#eqtnExe1').effect( "transfer", { to: $('#eqtnRef'), className:"ui-effects-transfer" }, 1000, function() {
							var text = "Now, let us try to evaluates the given expression.";
							typing($(".introjs-tooltiptext"), text, function() {
								$(".introjs-tooltip").show();
								$('#eqtnRef').removeClass("opacity00");
								$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationEqtnExe2()">Next &#8594;</a>');
							});
						});
				}, 1000);
			});
		break;
		case "printf":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".user-btn").remove();
			introjs.refresh();
			$(".background-color-blue").removeClass("background-color-blue");
			$("#printf").addClass("color-black");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function(){
					introjs.nextStep();
				}, 500);
			});
		break;
		case "outputDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$(".color-black").removeClass("color-black");
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The value of num5 is : " + $("#totalSum").text();
				typing("#body", text, function() {
					setTimeout(function(){
						introjs.nextStep();
					}, 1500);
				});
			});
		break;
		case "restart":
			introjs.refresh();
			$(".background-color-blue").removeClass("background-color-blue");
			$(".user-btn").remove();
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".introjs-tooltip").css({"min-width": "115px"});
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text);
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

function animationEqtnExe2() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn").remove();
	$('#eqtnExe2').removeClass("opacity00");
	var l1 = $("#eqtnRef").offset(); 
	var l2 = $("#eqtnExe2").offset();

	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from("#eqtnExe2", 1, {top: topLength, left: leftLength});
	
	$("#firstExc").addClass("background-color-blue");
	$(".introjs-tooltiptext ul").empty();
	var text = "In any expression <span class='ct-code-b-yellow'>highest</span> precedence is given to the <span class='ct-code-b-yellow'>inner most parenthesis</span>. ";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationInnerEqtnExe2()">Next &#8594;</a>');
	});
}


function animationInnerEqtnExe2() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn").remove();
	TweenMax.to("#num22", 0.5, {rotationX : -90, onComplete:function() {
		$("#num22").text($("#secondVal").text());
		TweenMax.to("#num22", 0.5, {rotationX : 0, onComplete:function() {
			TweenMax.to("#num32", 0.5, {rotationX : -90, onComplete:function() {
				$("#num32").text($("#thirdVal").text());
				TweenMax.to("#num32", 0.5, {rotationX : 0, onComplete:function() {
					TweenMax.to("#firstExc", 0.5, {rotationX : -90, onComplete:function() {
						$("#firstExc").text(parseInt($("#secondVal").text()) + parseInt($("#thirdVal").text()));
						TweenMax.to("#firstExc", 0.5, {rotationX : 0, onComplete:function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationEqtnExe3()">Next &#8594;</a>');
						}});
				 	}});
			 	}});
		 	}});
	 	}});	
 	}});
}

function animationEqtnExe3() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".background-color-blue").removeClass("background-color-blue");
	$(".user-btn").remove();
	$('#eqtnExe3').removeClass("opacity00");
	var l1 = $("#eqtnExe2").offset(); 
	var l2 = $("#eqtnExe3").offset();

	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("#eqtnExe3").html($("#eqtnExe2").html());
	$("#eqtnExe2 *").removeAttr("id");
	$('#firstMul').addClass("background-color-blue");
	TweenMax.from("#eqtnExe3", 1, {top: topLength, left: leftLength});
	
	$(".introjs-tooltiptext ul").empty();
	var text = "The sam rule applies untill all the <span class='ct-code-b-yellow'>parenthesis</span> present in the expression are evaluated.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationInnerEqtnExe3()">Next &#8594;</a>');
	});
}

function animationInnerEqtnExe3() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn").remove();
	TweenMax.to("#num4", 0.5, {rotationX : -90, onComplete:function() {
		$("#num4").text($("#fourthVal").text());
		TweenMax.to("#num4", 0.5, {rotationX : 0, onComplete:function() {
			TweenMax.to("#firstMul", 0.5, {rotationX : -90, onComplete:function() {
				var mulVal = $("#firstMul").text(parseInt($("#firstExc").text()) * parseInt($("#fourthVal").text()));
				TweenMax.to("#firstMul", 0.5, {rotationX : 0, onComplete:function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationEqtnExe4()">Next &#8594;</a>');
				}});
			}});
		}});
	}});
}

function animationEqtnExe4() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".background-color-blue").removeClass("background-color-blue");
	$(".user-btn").remove();
	$('#eqtnExe4').removeClass("opacity00");
	var l1 = $("#eqtnExe3").offset(); 
	var l2 = $("#eqtnExe4").offset();

	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("#eqtnExe4").html($("#eqtnExe3").html());
	$("#eqtnExe3 *").removeAttr("id");
	$('#divide').addClass("background-color-blue");
	TweenMax.from("#eqtnExe4", 1, {top: topLength, left: leftLength});
	$(".introjs-tooltiptext ul").empty();
	var text = "Division operator has higher precedence over <b class='ct-code-b-yellow'>+</b> or <b class='ct-code-b-yellow'>-</b>.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationInnerEqtnExe4()">Next &#8594;</a>');
	});
}

function animationInnerEqtnExe4() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn").remove();
	TweenMax.to("#num23", 0.5, {rotationX : -90, onComplete:function() {
		$("#num23").text($("#secondVal").text());
		TweenMax.to("#num23", 0.5, {rotationX : 0, onComplete:function() {
			TweenMax.to("#divide", 0.5, {rotationX : -90, onComplete:function() {
				$("#divide").text(parseInt(parseInt($("#firstMul").text()) / parseInt($("#secondVal").text())));
				TweenMax.to("#divide", 0.5, {rotationX : 0, onComplete:function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationEqtnExe5()">Next &#8594;</a>');
				}});
			}});
		}});
	}});
}

function animationEqtnExe5() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".background-color-blue").removeClass("background-color-blue");
	$(".user-btn").remove();
	$('#eqtnExe5').removeClass("opacity00");
	var l1 = $("#eqtnExe4").offset(); 
	var l2 = $("#eqtnExe5").offset();

	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("#eqtnExe5").html($("#eqtnExe4").html());
	$("#eqtnExe4 *").removeAttr("id");
	$('#num1num2').addClass("background-color-blue");
	TweenMax.from("#eqtnExe5", 1, {top: topLength, left: leftLength});
	$(".introjs-tooltiptext ul").empty();
	var text = "After division highest precedence goes to multiplication among <b class='ct-code-b-yellow'>*</b>, <b class='ct-code-b-yellow'>-</b>"
			+ " and <b class='ct-code-b-yellow'>+</b>.<br> i.e num1 * num2";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationInnerEqtnExe5()">Next &#8594;</a>');
	});
}

function animationInnerEqtnExe5() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn").remove();
	TweenMax.to("#num1", 0.5, {rotationX : -90, onComplete:function() {
		$("#num1").text($("#firstVal").text());
		TweenMax.to("#num1", 0.5, {rotationX : 0, onComplete:function() {
			TweenMax.to("#num21", 0.5, {rotationX : -90, onComplete:function() {
				$("#num21").text($("#secondVal").text());
				TweenMax.to("#num21", 0.5, {rotationX : 0, onComplete:function() {
					TweenMax.to("#num1num2", 0.5, {rotationX : -90, onComplete:function() {
						$("#num1num2").text(parseInt($("#firstVal").text()) * parseInt($("#secondVal").text()));
						TweenMax.to("#num1num2", 0.5, {rotationX : 0, onComplete:function() {
							$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationEqtnExe6()">Next &#8594;</a>');
						}});
					}});
				}});
			}});
		}});
	}});
}

function animationEqtnExe6() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".background-color-blue").removeClass("background-color-blue");
	$(".user-btn").remove();
	$('#eqtnExe6').removeClass("opacity00");
	var l1 = $("#eqtnExe5").offset(); 
	var l2 = $("#eqtnExe6").offset();

	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("#eqtnExe6").html($("#eqtnExe5").html());
	$("#eqtnExe5 *").removeAttr("id");
	$('#num1num2num3Sub').addClass("background-color-blue");
	TweenMax.from("#eqtnExe6", 1, {top: topLength, left: leftLength});
	$(".introjs-tooltiptext ul").empty();
	var text = "Addition (<b class='ct-code-b-yellow'>+</b>) and subtraction(<b class='ct-code-b-yellow'>-</b>) has same level of <span class='ct-code-b-yellow'>precedence</span>"
			+ " so here <span class='ct-code-b-yellow'>associativity</span> comes into picture and the evaluation happens from left side of the expression to right.";
	typing($(".introjs-tooltiptext"), text, function() {
		$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationInnerEqtnExe6()">Next &#8594;</a>');
	});
}

function animationInnerEqtnExe6() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn").remove();
	TweenMax.to("#num31", 0.5, {rotationX : -90, onComplete:function() {
		$("#num31").text($("#thirdVal").text());
		TweenMax.to("#num31", 0.5, {rotationX : 0, onComplete:function() {
			TweenMax.to("#num1num2num3Sub", 0.5, {rotationX : -90, onComplete:function() {
				$("#num1num2num3Sub").text(parseInt(parseInt($("#num1num2").text()) - parseInt($("#thirdVal").text())));
				TweenMax.to("#num1num2num3Sub", 0.5, {rotationX : 0, onComplete:function() {
					$(".introjs-tooltipbuttons").append('<a class="introjs-button user-btn" style="display: inline-block;" onclick="animationEqtnExe7()">Next &#8594;</a>');
				}});
			}});
		}});
	}});
}

function animationEqtnExe7() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".background-color-blue").removeClass("background-color-blue");
	$(".user-btn").remove();
	$('#eqtnExe7').removeClass("opacity00");
	var l1 = $("#eqtnExe6").offset(); 
	var l2 = $("#eqtnExe7").offset();

	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$("#eqtnExe7").html($("#eqtnExe6").html());
	$("#eqtnExe6 *").removeAttr("id");
	$('#totalSum').addClass("background-color-blue");
	TweenMax.from("#eqtnExe7", 1, {top: topLength, left: leftLength});
	$(".introjs-tooltiptext ul").empty();
	var text = "Finally we get the result.";
	typing($(".introjs-tooltiptext"), text, function() {
		TweenMax.to("#totalSum", 0.5, {rotationX : -90, onComplete:function() {
			$("#totalSum").text(parseInt(parseInt($("#num1num2num3Sub").text()) + parseInt($("#divide").text())));
			TweenMax.to("#totalSum", 0.5, {rotationX : 0, onComplete:function() {
				$(".background-color-yellow").removeClass("background-color-yellow");
				$(".introjs-nextbutton").show();
			}});
		}});
	});
}

function flipFirstEqtn() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn1").remove();
	$("#firstEqtnFlip").removeClass("opacity00");
	$("#flip1").effect( "highlight",{color: '#ffff33'}, 2000);
	flipEffect("#flip1", 15, function(){
		$('#secondEqtnFlip').removeClass("opacity00");
		var l1 = $("#first").offset(); 
		var l2 = $("#second").offset();
		
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#second").html($("#first").html());
		$("#first *").removeAttr("id");
		TweenMax.from("#second", 1, {top: topLength, left: leftLength, onComplete:function() {
			$("#flip2").effect( "highlight",{color: '#ffff33'}, 2000);
			flipEffect("#flip2", 17, function(){
				$('#thirdEqtnFlip').removeClass("opacity00");
				var l1 = $("#second").offset(); 
				var l2 = $("#third").offset();
			
				var topLength = l1.top - l2.top;
				var leftLength = l1.left - l2.left;
				$("#third").html($("#second").html());
				$("#second *").removeAttr("id");
				TweenMax.from("#third", 1, {top: topLength, left: leftLength, onComplete:function() {
					$("#flip3").effect( "highlight",{color: '#ffff33'}, 2000);
					flipEffect("#flip3", 13, function(){
						$(".typing-two").removeClass("opacity00");
						$("#li3").fadeTo(500, 1, function () {
							$("#li4").fadeTo(500, 1, function () {
								$(".introjs-tooltipbuttons").append("<span class='user-btn2 introjs-button' onclick='flipSecondEqtn()'>Next &#8594;</span>");
							});
						});
					});
				}});
			});
		}});
	});
}

function flipSecondEqtn() {
	$(".introjs-tooltiptext ul li:last-child *").removeAttr("id");
	introjs.refresh();
	$(".user-btn2").remove();
	$("#firstInnerEqtnFlip").removeClass("opacity00");
	$("#firstFlip").effect( "highlight",{color: '#ffff33'}, 2000);
	flipEffect("#firstFlip", 5, function(){
		$('#secondInnerEqtnFlip').removeClass("opacity00");
		var l1 = $("#firstInner").offset(); 
		var l2 = $("#secondInner").offset();
		
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#secondInner").html($("#firstInner").html());
		$("#firstInner *").removeAttr("id");
		TweenMax.from("#secondInner", 1, {top: topLength, left: leftLength, onComplete:function() {
			$("#secondFlip").effect( "highlight",{color: '#ffff33'}, 2000);
			flipEffect("#secondFlip", 11, function(){
				$('#thirdInnerEqtnFlip').removeClass("opacity00");
				var l1 = $("#secondInner").offset(); 
				var l2 = $("#thirdInner").offset();
			
				var topLength = l1.top - l2.top;
				var leftLength = l1.left - l2.left;
				$("#thirdInner").html($("#secondInner").html());
				$("#secondInner *").removeAttr("id");
				TweenMax.from("#thirdInner", 1, {top: topLength, left: leftLength, onComplete:function() {
					$("#thirdFlip").effect( "highlight",{color: '#ffff33'}, 2000);
					flipEffect("#thirdFlip", 6, function(){
						$("#fourthFlip").effect( "highlight",{color: '#ffff33'}, 2000);
						$(".typing-two").removeClass("opacity00");
						setTimeout(function(){
							introjs.nextStep();
						}, 1000);
					});
				}});
			});
		}});
	});
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

function animatingMax(id) {
	TweenMax.to($('.max-value-div').children().not('#' + id), 1, {opacity: 0, onComplete: function() {
		var beforeRemoveLeft = $('#' + id).offset().left;
		$('.max-value-div').children().not('#' + id).remove();
		TweenMax.from($('#' + id), 1, {left: beforeRemoveLeft - $('#' + id).offset().left, onComplete: function() {
			$('.introjs-tooltip').removeClass('hide');
			typingId = '.introjs-tooltiptext';
			typingContent = 'Hence the value <span class="ct-code-b-yellow">' + $('.max-value-div').children().text() + '</span> is assigned to ' +
							'the variable <span class="ct-code-b-yellow">max</span>.';
			typingInterval = typing_interval;
			cursorColor = 'white';
			typingCallbackFunction = function() {
				$('.introjs-nextbutton').show();
			}
			typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction);
		}});
	}});
}