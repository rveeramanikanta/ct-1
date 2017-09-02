
var tl = new TimelineLite();
var typingSpeed = 10;
var executeBtnCount = 1;
var cIdentifiersReady = function() {
	$('body').keypress(function(event) {
		if (event.keyCode == 13) {
		     event.preventDefault();
		}
	});
	$("#identifierBtn").click(function() {
		$("#restartBtn").removeClass("opacity00");
		$("#errorTextId").remove();
		$("#errorTextId1").remove();
		$("#errorTextId2").remove();
		$("#errorTextId3").remove();
		var no_spl_char = /^[A-Za-z0-9_]{1,8}$/;
		var inputVal = $("#inputId").val();
		console.log($("#inputId").val());
		$("#errorText").addClass("valid-class");
		if(!isNaN(inputVal.substring(0,1)) || !no_spl_char.test(inputVal)) {
			var text = "<span id='errorTextId1' class='ct-code-b-red'> " +  inputVal + "  </span>  is a invalid identifier."
			typing("#errorText", text, function() {
				$("#inputId").val('');
				$("#inputId").focus();
				$("#restartBtn").removeClass("opacity00");
				$("#restartBtn").addClass("zIndex");
			});
			console.log("InValid Identifier");
		} else if (inputVal.substring(0,1) == '_') {
			var text = "<span id='errorTextId2' class='ct-code-b-green'> " +  inputVal + "  </span>  is a valid identifier." + 
						" <span class='ct-code-b-green'>_ </span>is used for <span class='ct-code-b-green'>system variables</span>.";
			typing("#errorText", text, function() {
				$("#inputId").val('');
				$("#inputId").focus();
				$("#restartBtn").removeClass("opacity00");
				$("#restartBtn").addClass("zIndex");
			});
		} else {
			var text = "<span id='errorTextId3' class='ct-code-b-green'> " +  inputVal + "  </span>  is a valid identifier."
			typing("#errorText", text, function() {
				$("#inputId").val('');
				$("#inputId").focus();
				$("#restartBtn").removeClass("opacity00");
				$("#restartBtn").addClass("zIndex");
			});
		}
	});
}
function introjsGuide() {
	intro = introJs();
	intro.setOptions({
		
		steps : [{
					element :'#titleName',
					intro :'',
					position:"right"
				},{
					element :'#identifierDiv',
					intro :'',
					tooltipClass:'hide',
					position:"left"
				},{
					element :'#inputDiv',
					intro :'',
					position:"right"
				}]
	});
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "titleName":
				var text = "Let us learn about identifiers in <span class='ct-code-b-yellow'>C</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").removeClass("opacity00");
				});
				break;
				
			case "identifierDiv":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one("transitionend", function() {
					$("#identifierDiv").removeClass("opacity00");
					var text = "<b>Identifiers</b> are words or symbolic names used to refer to entities such as data types,"
								+ " constants, variables, functions, arrays, etc.<span class='introjs-button next-btn opacity00' onclick='manualStep2()'>Next &#8594;</span><span id='stepId'></span>";
					typing("#topic", text, function() {
						manualStep1();
					});
				});
				break;
				
			case "inputDiv" :
				$('.introjs-helperLayer').one("transitionend", function() {
					TweenMax.to("#inputDiv", 0.2, {opacity: 1, onComplete: function() {
						typing(".introjs-tooltiptext", "Enter the correct identifier and click on Submit to verify its validity.", function() {
							$("#inputId").focus();
						});
					}});
				});
				break;
		}
	});
	
	intro.setOption('showStepNumbers', false);
	intro.setOption('exitOnOverlayClick', false);
	intro.setOption('exitOnEsc', false);
	intro.setOption('keyboardNavigation', true);
	intro.start();
	
	intro.refresh();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$('.introjs-nextbutton').addClass('opacity00');
}

function nextActionForExample() {
	$('.next-btn').addClass("disabled");
	executeBtnCount++;
	
	if (executeBtnCount == 2) {
		manualStep2();
	} else if (executeBtnCount == 3) {
		manualStep3();
	} 
}

function manualStep1() {
	var text = "";
	typing("#stepId", text, function() {
		$(".next-btn").removeClass("opacity00").addClass("animated zoomIn");
	});
}

function manualStep2() {
	var text = "<b>For Example</b> :";
		typing("#exampleDiv", text, function() {
			TweenMax.to("#line1", 0.2, {opacity: 1, onComplete: function() {
				TweenMax.to("#line2", 0.2, {opacity: 1, onComplete: function() {
					TweenMax.to("#line3", 0.2, {opacity: 1, onComplete: function() {
						var text = "<span class='introjs-button next-btn opacity00' onclick='manualStep3()'>Next &#8594;</span>";
						typing("#test", text, function() {
							newAnimateBtn();
						});
					}});
				}});
			}});
		});
}

function manualStep3() {
		var text = "In the above statement : <br/><span style='margin-left: 15px;'><span class='border-class-red'>int</span>, " 
		+ "<span class='border-class-red'>char</span>, <span class='border-class-red'>int[]</span>" 
		+ " are called <b>types</b> or <b>data types</b></span>.<span class='introjs-button next-btn opacity00' onclick='manualStep4()'>Next &#8594;</span>"
	typing("#exampleDiv1", text, function() {
		$("li .border-class-red").css("border-color", "whitesmoke");
		newAnimateBtn();
		$('.next-btn').addClass("disabled");
		$(".blink").addClass("blinking-border-background-red");
	});
}

function manualStep4() {
	$("li .border-class-red").css("border-color", "red");
	$(".blink").removeClass("blinking-border-background-red");
	var text = "<br/><span style='margin-left: 15px;'><span class='border-class'>x</span>, <span class='border-class'>ch</span>, <span class='border-class'>arr</span> are called <b>identifiers</b>.</span><span class='introjs-button next-btn opacity00' onclick='manualStep5()'>Next &#8594;</span>"
	typing("#step1Text", text, function() {
		newAnimateBtn();
		$('.next-btn').addClass("disabled");
		$(".blink1").addClass("blinking-border-background-blue");
	});
}

function manualStep5() {
	$(".blink1").removeClass("blinking-border-background-blue");
	var text = "<br/><span style='margin-left: 15px;'><span class='border-class'>3</span>, <span class='border-class'>A</span>, {<span class='border-class'>1</span>, <span class='border-class'>2</span>, <span class='border-class'>3</span>} are called <b>constants</b>.</span><span class='introjs-button next-btn opacity00' onclick='manualStep6()'>Next &#8594;</span>"
	typing("#step2Text", text, function() {
		newAnimateBtn();
	});
}

function manualStep6() {
	$(".blink1").removeClass("blinking-border-background-blue");
	var text = "<br/><span><b>Rules for naming identifiers:</b></span>";
	typing("#step3Text", text, function() {
		TweenMax.to("#list1", 0.2, {opacity: 1, onComplete: function() {
			TweenMax.to("#list2", 0.2, {opacity: 1, onComplete: function() {
				TweenMax.to("#list3", 0.2, {opacity: 1, onComplete: function() {
					var text = "<span class='introjs-button next-btn opacity00' onclick='manualStep7()'>Next &#8594;</span>"
					typing("#test1", text, function() {
						newAnimateBtn();
					})
				}});
			}});
		}});
	});
}

function manualStep7() {
	var text = "<span><b>Examples of valid and invalid Identifiers :</b></span><span class='introjs-button next-btn opacity00' onclick='manualStep8()'>Next &#8594;</span>"
	typing("#step5Text", text, function() {
		newAnimateBtn();
	});
}

function manualStep8() {
	TweenMax.to("#tableId", 1, {opacity: 1, onComplete: function() {
		$(".next-btn").remove();
		setTimeout(function() {
			intro.nextStep();
		}, 1500);
	}});
}


function newAnimateBtn() {
	var l1 = $(".next-btn").eq(0).addClass("opacity00").offset();
	$(".next-btn").eq(1).offset({
		"top" : l1.top,
		"left" : l1.left
	}).removeClass("opacity00");
	
	TweenLite.to($(".next-btn").eq(1), 1, {top: 0, left: 0, onComplete: function() {
		$(".next-btn").eq(0).remove();
	}});
}

function animateLiBtn(id) {
	var l1 =  $(".next-btn").offset();
	var l2 = $(id + " > span").offset();
	var topLength = l2.top-l1.top;
	var leftLength = (l2.left-l1.left) + $(id + " > span").width() + 10;
	TweenLite.to($(".next-btn"), 1, {top: "+=" + topLength, left: "+=" + leftLength, onComplete:function() {
		$(".next-btn").removeClass("disabled");
	}});
}

function scrollToBottom(id) {
	   var container = $('#identifierDiv');
	   var scrollTo = $('#' + id);
	  container.animate({
	    scrollTop: $('#' + id).offset().top -  $('#identifierDiv').offset().top +  $('#identifierDiv').scrollTop()
	  }); 
	}

function typing(id, text, callBackFunction) {
	$(id).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}