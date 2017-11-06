var introjs;
var typingSpeed = 5;

var includeReady = function() {
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
		
	 	if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if((e.keyCode >= 65 && e.keyCode <= 90)){
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
			 		element : "#totalDiv",
					intro : "",
					position : "bottom"
				},{
			 		element : "#code1",
					intro : "",
					position : "right"
				},{
			 		element : "#main",
					intro : "",
					position : "right"
				},{
			 		element : "#printf1",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
				},{
			 		element : "#include1",
					intro : "",
					position : "right"
				},{
			 		element : "#totalPro",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
				},{
			 		element : "#code2",
					intro : "",
					position : "right"
				},{
			 		element : "#printf2",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
				},{
			 		element : "#include2",
					intro : "",
					position : "right"
				},{
			 		element : "#totalPro2",
					intro : "",
					position : "right"
				},{
			 		element : "#outputDiv",
					intro : "",
					position : "top"
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
			$(".introjs-tooltip").hide();
			$('.introjs-nextbutton').hide();
			$("#li1").fadeTo(300, 1, function () {
				$("#li2").fadeTo(300, 1, function () {
					$("#li3").fadeTo(300, 1, function () {
						$("#li4").fadeTo(300, 1, function () {
							$("#li5").fadeTo(300, 1, function () {
									$("#olLi1").fadeTo(300, 1, function () {
										$("#olLi2").fadeTo(300, 1, function () {
											$(".introjs-tooltip").show();
											var text = "Let us see the sample <b class ='ct-code-b-yellow'>C</b> program.";
											typing(".introjs-tooltiptext", text, function() {
												$(".introjs-nextbutton").show();
											});
										});
									});
							});
						});
					});
				});
			});
		break;
		case "code1":
			$('.introjs-nextbutton').hide();
			$("#code1").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Here the <b class ='ct-code-b-yellow'>#include</b> directive is purposely not included."
						+ " To show you the output which we get when it is not included.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "main":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#main").addClass("colorMain");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Compilation starts from first line of the program and ends at the last line.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "printf1":
			if (introjs._currentStep == 3) {
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				//$("#main").removeClass("colorMain");
				//$("#printf1").addClass("colorMain");
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep()
					}, 1000);
				});
			}/*  else if (introjs._currentStep == 6) {
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				$("#ct").removeClass("colorWhite");
				$("#include1").removeClass("colorMain");
				$("#printf1").addClass("colorMain");
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep()
					}, 1000);
				});
			} */
		break;
		case "totalPro":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#ct").removeClass("colorWhite");
			$("#totalPro").addClass("colorMain");
			$("#printf1").addClass("colorMain");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Now we will recompile the complete code.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 4) {
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$('.introjs-tooltiptext').css({"max-height" : "233px", "overflow" : "auto"});
			introjs.refresh();
			$("#main").removeClass("colorMain");
			$("#ct").addClass("colorWhite");
			$("#printf1").removeClass("colorMain");
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<div>You will notice that will get errors when we compile the code because the compiler was not able to "
									+ " locate <b class ='ct-code-b-yellow'>printf()</b> function.<br><br>"
									+ " In the errors you will notice that there is a suggestion to include <b class ='ct-code-b-yellow'>stdio.h</b>.</div>");
				var text = "test.c:2:2: <b class='warning-color'>error</b>: implicit declaration of function <b>'printf'</b> [-Wimplicit-function-declaration]<br>"
					  		+ "printf("+"CodeTantra"+");<br>"
							+ "test.c:2:2: <b class='warning-color'>error</b>: incompatible implicit declaration of built-in function <b>'printf'</b><br>"
							+ "test.c:2:2: <span class='blink-in-console'><b class='note-color'>note</b>: include <b>'&lt;stdio.h&gt;'</b> or provide a declaration of <b>'printf'</b></span>";
				$("#outputBody").append("<div></div>");
				typing($("#outputBody > div:last-child"), text, function() {
					setTimeout(function() {
					$(".blink-in-console").addClass("blink");
					}, 1000);
					$(".introjs-nextbutton").show();
				});
			});
		 } else if (introjs._currentStep == 7) {
			 $('.introjs-nextbutton').hide();
			 $('.introjs-prevbutton').hide();
			 introjs.refresh();
			 $("#ct").addClass("colorWhite");
			 $(".colorMain").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").append("<div>The program successfully executes after compiling because we have including <b class ='ct-code-b-yellow'>#include</b>.  Below is the output of the program.</div>")
				 var text = "<b>CodeTantra</b><br><br>";
				 typing($("#outputBody > div:last-child"), text, function() {
					 $(".introjs-nextbutton").show();
				});
			});
		 } else if (introjs._currentStep == 10) {
			 $('.introjs-nextbutton').hide();
			 $('.introjs-prevbutton').hide();
			 introjs.refresh();
			 $("#sqrt").addClass("colorWhite");
			 $("#printf2").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").append("<div>These errors have occurred because the compiler was not able to locate <b class ='ct-code-b-yellow'>printf()</b> and "
						 						+ "<b class ='ct-code-b-yellow'>sqrt()</b> functions.</div>");
				 var text = "test.c:2:2: <b class='warning-color'>error</b>: implicit declaration of function <b>'printf'</b> [-Wimplicit-function-declaration]<br>"
			  	 	 + "printf("+"CodeTantra"+");<br>"
					 + "test.c:2:2: <b class='warning-color'>error</b>: incompatible implicit declaration of built-in function <b>'printf'</b><br>"
					 + "test.c:2:2: <span class='blink-in-console'><b class='note-color'>note</b>: include <b>'&lt;stdio.h&gt;'</b> or provide a declaration of <b>'printf'</b></span><br>"
					 + "test.c:7:47: <b class='warning-color'>error</b>: implicit declaration of function <b>'sqrt'</b> [-Wimplicit-function-declaration]<br>"
					 + "printf('Square root of %lf is %lf\n', 4.0, sqrt(4.0) );<br>"
					 + "test.c:7:47: <b class='warning-color'>error</b>: incompatible implicit declaration of built-in function <b>'sqrt'</b><br>"
					 + "hello.c:7:47: <span class='blink-in-console'><b class='note-color'>note</b>: include <b>'&lt;math.h&gt;'</b> or provide a declaration of <b>'sqrt'</b></span>";
				 typing($("#outputBody > div:last-child"), text, function() {
					 $(".blink-in-console").addClass("blink");
					 $(".introjs-nextbutton").show();
				 });
			 });
		 } else if (introjs._currentStep == 13){
			 $('.introjs-nextbutton').hide();
			 $('.introjs-prevbutton').hide();
			 introjs.refresh();
			 $(".colorMain").removeClass("colorMain");
			 $("#sqrt").addClass("colorWhite");
			 $("#printf2").removeClass("colorMain");
			 $(".introjs-helperLayer").one("transitionend", function() {
				 $(".introjs-tooltiptext").append("<div>The compilation will be successfully after including <b class ='ct-code-b-yellow'>stdio.h</b> and"
						 			+ " <b class ='ct-code-b-yellow'>math.h</b>, and the program generates the below output.</div>")
				 var text = "<b>Square root of 4.000000 is 2.000000</b><br><br>";
				 typing($("#outputBody > div:last-child"), text, function() {
					 $(".introjs-nextbutton").show();
				});
			});
		 }
		break;
		case "include1":    
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			$(".blink").removeClass("blink");
			$("#include1").addClass("colorMain");
			var text = $("#include1").html();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#include1").removeClass("opacity00");
				typing("#include1", text, function() {
					var text1 = "Now let us include the header file <b class ='ct-code-b-yellow'>stdio.h</b> which contains the <b class ='ct-code-b-yellow'>printf()</b> function.";
					typing($(".introjs-tooltiptext"), text1, function() {
						$(".introjs-nextbutton").show();
					});	
				});
			 });
		break;
		case "code2":
			$('.introjs-nextbutton').hide();
			$("#code2").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider another sample program and compile it  without the <b class ='ct-code-b-yellow'>#include</b> directives.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "printf2":
			if (introjs._currentStep == 9) {
				$('.introjs-nextbutton').hide();
				$('.introjs-prevbutton').hide();
				introjs.refresh();
				$("#printf2").addClass("colorMain");
				$(".introjs-helperLayer").one("transitionend", function() {
					setTimeout(function() {
						introjs.nextStep()
					}, 1000);
				});
			}
		break;
		case "totalPro2":
			$('.introjs-nextbutton').hide();
			$('.introjs-prevbutton').hide();
			introjs.refresh();
			$("#sqrt").removeClass("colorWhite");
			$("#totalPro2").addClass("colorMain");
			$("#printf2").addClass("colorMain");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "We will recompile the code after including the directives.";
				typing($(".introjs-tooltiptext"), text, function() {
					introjs.refresh();
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case "include2":
			$('.introjs-nextbutton').hide();
			$("#include2").addClass("colorMain");
			var text1 = $("#include21").html();
			var text2 = $("#include22").html();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#include2").removeClass("opacity00");
				$("#include21").removeClass("opacity00");
				typing("#include21", text1, function() {
					$("#include22").removeClass("opacity00");
					typing("#include22", text2, function() {
						var text1 = "Now let us include the header files <b class ='ct-code-b-yellow'>stdio.h</b> and <b class ='ct-code-b-yellow'>math.h</b> which contain <b class ='ct-code-b-yellow'>printf()</b> and <b class ='ct-code-b-yellow'>sqrt()</b> functions respectively.";
						typing($(".introjs-tooltiptext"), text1, function() {
							$(".introjs-nextbutton").show();
						});	
					});
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

function stepsTyping(text, nextBtnAction) {
	$(".introjs-tooltiptext > ul").append("<li class='opacity00'>" + text + "</li>");
	var container = $('.introjs-tooltiptext');
	scrollTo = $('.introjs-tooltiptext > ul > li:last-child');
		container.animate({
		scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	}, function() {
		TweenMax.to($(".introjs-tooltiptext > ul li:last-child"), 1, {opacity : 1, onComplete:function() {
			$(".introjs-tooltiptext > ul li:last-child").removeClass("opacity00");
		}});
	});
}