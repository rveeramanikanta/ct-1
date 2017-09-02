var typingSpeed = 5;
var introjs;
var tl = new TimelineLite();
var number = 5;
var idsArr = [];
var factVal = 5;
var autoAnimationFlag = false;
var lang;

var factorialUsingRecursionReady = function() {
	lang = getURLParameter('lang');
	if (lang == 'c') {
		$('#includes').html('#include &lt;stdio.h&gt;');
		$('#printLine').html('printf("%d! = %d", number, fact_value);')
	} else if (lang == 'cpp') {
		$('#includes').html('#include &lt;iostream&gt;\nusing namespace std;\nint factorial(int);');
		$('#printLine').html('cout << number << "! = " << fact_value << "\\n";');
	}
	initIntroJS();
	$('#restart').click(function() {
		location.reload();
	});
}

function getURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function initIntroJS() {
		introjs = introJs();
		introjs.setOptions({
			steps : [{
				element : "#informationDiv",
				intro : "",
				position : "bottom",
				tooltipClass : "hide"
  			}, {
				element : "#cCode",
				intro : "",
				position : "right"
			}, {
				element : "#stackExpDiv",
				 intro : "",
				 position : "right",
				 tooltipClass : "hide"
			}, {
				element : "#aboutStack",
				 intro : "",
				 position : "right",
				 tooltipClass : "hide"
			}, {
				 element : "#mainStack",
				 intro : "",
				 position : "left",
				 tooltipClass: "hide"
			}, {
				 element : "#main",
				 intro : "",
				 position : "right"
			}, {
				 element : "#animationDiv",
				 intro : "",
				 position : "left",
				 tooltipClass : "hide"
			}]
		});

	introjs.onafterchange(function(targetElement) {
		introjs.refresh();
		var elementId = targetElement.id;
		
		console.log(introjs);
		
		switch (elementId) {
			case"informationDiv":
				$('.introjs-nextbutton').hide();
				$("#informationDiv").append("<ul></ul>");
				$("#informationDiv ul").append("<li>A function call is said to be a recursive function call, when the program text inside the function's body calls the same function on a particular condition.</li>");
				$("#informationDiv ul li:last-child").hide().fadeIn(500, function() {
					$("#informationDiv ul").append("<li>Recursive functions are widely used while writing code for data structures" 
						+ " like <span class='ct-code-b-green'>Stacks</span>,"
						+ " <span class='ct-code-b-green'>Queues</span>," 
						+ " <span class='ct-code-b-green'>Linked-lists</span>" 
						+ " and <span class='ct-code-b-green'>Trees</span>.</li>");
       
       
					$("#informationDiv ul li:last-child").hide().fadeIn(500, function() {
						$("#informationDiv ul").append("<li>Let us consider an example for a recursive function call" 
								+ " while trying to calculate a <span class='ct-code-b-green'>factorial</span> of a number." 
								+ " Factorial of number <span class='ct-code-b-green'>5</span> is calculated as : " 
								+ "<br/>&emsp; 5! = 5 * 4!<br/>" 
								+ "&emsp;&emsp; = 5 * 4 * 3!<br/>" 
								+ "&emsp;&emsp; = 5 * 4 * 3 * 2!<br/>"
								+ "&emsp;&emsp; = 5 * 4 * 3 * 2 * 1"
								+ "</li>");
						$("#informationDiv ul li:last-child").hide().fadeIn(500, function() {
								$("#informationDiv ul").append("<li> Factorial of a given number (n) is nothing but that number " 
										+ " and multiplied by factorial of n - 1 number and so on, hence the function use to " 
										+ "calculate factorial of a number can be recursively use again and again for calculating the" 
										+ " factorial of all remaining numbers in a sequences until it will reaches 1.</li>");
				      
								$("#informationDiv ul li:last-child").hide().fadeIn(500, function() {
									introjs.refresh();
									$("#informationDiv ul li:last-child").append("<a class='introjs-button user-btn opacity00' onclick='userNextStep()'>Next →</a>");
				       
									$(".user-btn").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
										$(this).removeClass("animated zoomIn");
									});
								});
								
								$(".user-btn").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
				   					$(this).removeClass("animated zoomIn");
								});
						});
    			});
   			});
			break;
   
		case "mainStack":
			$('.introjs-nextbutton').hide();
			$("#animationDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
					$("#aboutStack").popover("hide");
				}, 1000)
			});
		break;
   
		case "cCode":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#cCode").removeClass("opacity00");
				var text = "In this below program we will learn how a recursive function call "
					+ "works using a <span class='ct-code-b-yellow'>factorial</span> function.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
	   break;
   
		case "stackExpDiv":
			$("#stackExpDiv").removeClass("opacity00");
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#stackExpDiv").append("<div class='text-center' style='font-weight: bold; font-size: 14px; font-family: monospace;'>About Stack</div>")
				$("#stackExpDiv").append("<ul></ul>");
    
				var text = "<li>Whenever the system executes a program, it always keeps track of the current line of execution." 
					+ " After executing a line, the control flow goes to the next line of execution and" 
					+ " the system automatically updates it's internal reference of the current line of execution.</li>";
				$("#stackExpDiv ul").append(text);
				
				var text = "<li>While executing a program, when the control gets transfered into a function call" 
					+ ", which is also called as <span class='ct-code-b-green'>context swicth</span>, " 
					+ "the current execution's context will be change to the new function call" 
					+ " not the main function where the execution flow started.</li>";
    
				$("#stackExpDiv ul").append(text);
    
				var text = "<li>When such a <span class='ct-code-b-green'>context switch</span> happens to the function call, " 
						+ "there may be new variables that become alive in the new context and the " 
						+ "old variables of the main function will no longer be available in the current context" 
						+ " unless there are part of the <span class='ct-code-b-green'>scope</span>.</li>";
				$("#stackExpDiv ul").append(text);
    
				var text = "<li>Once's all the statements in the function call are executed, the system automatically transfers the " 
						+ "control back to that line from where the function call was made.</li>";
				$("#stackExpDiv ul").append(text);
    
				var text = "<li>Some times the functions can return a value. In such cases the return value will usually be stored " 
						+ "in a variable in the calling line.</li>";
				$("#stackExpDiv ul").append(text);
				
				var text = "<li>There could be a senario where the functions can internally call other functions. In " 
						+ "such a situation in order to remember the execution flow, the system usually uses a stack to " 
	      				+ "keep track of varies functions through which the control flow is navigating.</li>";
    			$("#stackExpDiv ul").append(text);
    
    
				var text = "<li>A <span class='ct-code-b-green'>stack</span> is a simple structure where values are stored one above the other." 
						+ " The new values are stored on the top." 
						+ " Whenever we want to remove a value we will remove the latest value on the top " 
						+ "and then proceed further down leading to removing the first element at the end.</li>";
    			$("#stackExpDiv ul").append(text);
    
    
    
			var text = "<li>The process of inserting an element is called <span class='ct-code-b-green'>pushing</span> an element, " 
				+ "and the process of removing an element is called <span class='ct-code-b-green'>poping</span> an element."
				+ "We will learn more about stack later. We will demonstrate how the functions are pushed or stacked" 
				+ " one above the other when the same function is called by itself.</li>";
			$("#stackExpDiv ul").append(text);
			introjs.refresh();
			$("#stackExpDiv ul li:last-child").append("<a class='introjs-button user-btn' onclick='expStackZoomOutEffect()'>Next →</a>");
   		});
	break;
   
	case "aboutStack":
		$('.introjs-nextbutton').hide();
		//$("#aboutStack").popover("hide");
		$(".introjs-helperLayer").one("transitionend", function() {
			setTimeout(function() {
				introjs.nextStep();
				//$("#aboutStack").popover("hide");
			}, 500);
		});
		break;
	
	case "main":
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "Since the main function is the first function to be executed," 
				+ " it is the first function to be pushed into the <span class='ct-code-b-yellow'>stack</span>.";
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
		});
		break;
   
	case "animationDiv":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var fromId;
			if (introjs._currentStep == 6) {
				createMainStack();
				fromId = "#mainBlk";
			} else if (number >= 0) {
				createFactorialStack();
				fromId = "#factorialFun";
    		}
    
    		if (number >= 0) {
     			$(fromId).effect( "transfer", { to: $("#invisibleDiv .panel"), className: "ui-effects-transfer" }, 1000, function() {
 					$("#invisibleDiv .panel").removeClass("opacity00").addClass("animated fadeIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						if (introjs._currentStep == 6) {
							stackDropEffect(function() {
								setTimeout(function() {
									introjs.nextStep();
								}, 1000);
							});
						} else {
							stackDropEffect();
						}
					});
     			});
			} else {
     			returnAnimation();
    		}
		});
	break;
   
	case "mainStackNumDec":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
		var text = "Here two <span class='ct-code-b-yellow'>int</span>" 
			+ " variables <span class='ct-code-b-yellow'>fact_value</span> and " 
			+ "<span class='ct-code-b-yellow'>number</span> are declared." 
			+ "<br/><br/>You can also change the value of <span class='ct-code-b-yellow'>number</span>, whose" 
			+ " <span class='ct-code-b-yellow'>factorial</span> we will be calculating in this program. ";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-nextbutton").show();
			blinkCursorAtEnd("numberVal");
		});
	});
   break;
   
	case "mainStackFactValueInit":
	case "stack" + number + "ElseBlk":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$("[contenteditable=true]").attr("contenteditable", false);
			setTimeout(function() {
				introjs.nextStep();
			}, 800);
		});
   break;
   
	case "mainStackPrintf":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
		var text = "Finally the value <span class='ct-code-b-yellow'>" + $(".returned-val").text() + "</span>" 
			+ ", which is the factorial of number <span class='ct-code-b-yellow'>" + $("#numberVal").text() + "</span>" 
			+ " will be printed to the output. ";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-nextbutton").show();
			blinkCursorAtEnd("numberVal");
		});
	});
   break;
   
   
	case "mainFactCall":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			if (introjs._currentStep == 9) {
				flipEffect($(".flip-css").last(), number, function() {
					introjs.refresh();
					var text = "The return value of <span class='ct-code-b-yellow'>factorial(" + number + ")</span> function call will be stored in " 
						+ "<span class='ct-code-b-yellow'>fact_value</span>.<br/><br/>" 
						+ "When the system enters into the function <span class='ct-code-b-yellow'>factorial(" + number + ")</span>" 
						+ " to execute it, and it will push the <span class='ct-code-b-yellow'>factorial(" + number + ")</span> function" 
						+ " along with paramenter <span class='ct-code-b-yellow'>" + number + "</span> into " 
						+ "the <span class='ct-code-b-yellow'>stack</span> above " 
						+ "the <span class='ct-code-b-yellow'>main</span> function.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			} else {
				var text = "Here the return of the value previous function call is being substituted in the current location.";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			}
		});
   break;
	case "stack" + number + "IfBlk":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$(".introjs-tooltiptext").append("Since the condition : <br/><span class='ct-code-b-yellow'>number <= 1</span> " 
				+ "<br/><span id='tooltipIfCndtn'><span id='tooltipNumber' class='flip-css'>number</span> &lt;= 1</span>");
			var ifCndtnOffset = $("#stack" + number + "IfCdtn").offset();
			$("#tooltipIfCndtn").offset({
				"top" : ifCndtnOffset.top,
				"left" : ifCndtnOffset.left
			}).css("font-family", "monospace");
   
			tl.to("#tooltipIfCndtn", 1, {top : 0, left : 0, onComplete:function() {
				flipEffect("#tooltipNumber", number, function() {
				var text = "";
				if (number <= 1) {
					text = "evaluates to <span class='ct-code-b-yellow'>true</span>, the control enters into the <span class='ct-code-b-yellow'>if-block</span>.";
					$("#stackBody .panel:eq(0) .returned-val:eq(1)").removeClass("returned-val flip-css");
			       introjs.insertOption(introjs._currentStep + 1, getStep("#stack" + number + "IfBlkReturnStmt", "", "top"));
			       introjs.insertOption(introjs._currentStep + 2, getStep("#animationDiv", "", "left", "hide"));
				} else {
      					text = "evaluates to <span class='ct-code-b-red'>false</span>, the control enters into the <span class='ct-code-b-yellow'>else-block</span>.";
					$("#stackBody .panel:eq(0) .returned-val:eq(0)").removeClass("returned-val flip-css");
					introjs.insertOption(introjs._currentStep + 1, getStep("#stack" + number + "ElseBlk", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 2, getStep("#stack" + number + "ElseBlkReturnStmt", "", "top", "hide"));
					introjs.insertOption(introjs._currentStep + 3, getStep("#stack" + number + "FactCall", "", "top"));
					introjs.insertOption(introjs._currentStep + 4, getStep("#animationDiv", "", "left", "hide"));
				}
				$(".introjs-tooltiptext").append("<div></div>");
				typing($(".introjs-tooltiptext div:last-child"), text, function() {
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		}});
	});
   	break;
   
	case "stack" + number + "ElseBlkReturnStmt":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			flipEffect($("#stack" + number + "ElseBlkReturnStmt .number").eq(0), number, function() {
				introjs.refresh();
				flipEffect($("#stack" + number + "ElseBlkReturnStmt .number").eq(2), number, function() {
					introjs.refresh();
					flipEffect($("#stack" + number + "ElseBlkReturnStmt .number").eq(1), number - 1, function() {
						introjs.refresh();
						number--;
						setTimeout(function() {
							introjs.nextStep();
						}, 800);
					});
				});
			});
		});
	break;
   
	case "stack" + (number + 1) + "FactCall":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
		var text = "When the system enters into the function <span class='ct-code-b-yellow'>factorial(" + number + ")</span>" 
				+ " to execute it and it will push the <span class='ct-code-b-yellow'>factorial(" + number + ")</span> function" 
				+ " along with paramenter <span class='ct-code-b-yellow'>" + number + "</span> into " 
				+ "the <span class='ct-code-b-yellow'>stack</span> above " 
				+ "the <span class='ct-code-b-yellow'>previous</span> function call.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-nextbutton").show();
		});
	});
   break;
   
	case "stack" + $(".number:eq(0)").text() + "FactCall":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "Here the return of the value previous function call is being substituted in the current location.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
    		});
		});
	break;
   
		case "stack" + number + "IfBlkReturnStmt":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "When the <span class='ct-code-b-yellow'>return 1;</span> statement is executed, the control is transfered from this location" 
				      + " to the <span class='ct-code-b-yellow'>caller's</span> location.<br/><br/>"
				      + "Now the current function call will be poped out from the <span class='ct-code-b-yellow'>stack</span>" 
				      + " and control is transfered back to the <span class='ct-code-b-yellow'>caller's</span> location.";
				typing($(".introjs-tooltiptext"), text, function() {
					number = -1;
					$(".introjs-nextbutton").show();
				});
  				});
  			break;
  
		case "outputDiv":
			$("#outputDiv").removeClass("opacity00");
			$(".returned-val").removeClass("bg-blinking");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = factVal + "! = " + $(".returned-val").text();
				typing("#output", text, function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 800);
				});
	   		});
	   break;
   
	  case "restart":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			tl.to($("#stackBody .panel").eq(0), 1, {top : "-400", onComplete:function() {
				$("#stackBody .panel").eq(0).remove();
			}});
			$("#restart").removeClass("opacity00");
			var text = "Click here to restart.";
			typing(".introjs-tooltiptext", text);
		});
		break;
	}
 });

	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}
	
function expStackZoomOutEffect() {
	$(".introjs-tooltip").addClass("hide");
	$(".user-btn").remove();
	
	$("#stackExpDiv *").find(".ct-code-b-green").addClass("ct-code-b-yellow").removeClass("ct-code-b-green");
	$("#aboutStack").popover({
		placement: "bottom",
		viewport: $("#aboutStack").parent(),
		html: true,
		content: '<div id="popover">' + $("#stackExpDiv").html() + '</div>',
	}).popover('show').next().css({"left" : "", "max-width" : "100%", "position" : "relative", "z-index": "9999999"});
	$("#aboutStack").popover("show");
	
	$("#aboutStack").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
		$(this).removeClass("animated zoomIn");
	});
	
	$("#stackExpDiv").addClass("animated zoomOut").one("animationend", function() {
		$(this).remove();
	});
	introjs.nextStep();
	
}

function stackDropEffect(callBackFunction) {
	$(".blinking").removeClass("blinking");
	$(".user-btn").remove();
	var invisibleDivOffset = $("#invisibleDiv .panel").offset();
	var lastStackOffset = $("#stackBody > div:first-child").offset();
	
	var topLength = lastStackOffset.top - invisibleDivOffset.top;
	var leftLength = lastStackOffset.left - invisibleDivOffset.left;
	tl.to($("#invisibleDiv > div"), 1, {top : topLength, left : leftLength, onComplete:function() {
		$("#stackBody .panel").removeAttr("style");
		$("#invisibleDiv").empty();
		$("#stackBody > div:first-child").removeClass("opacity00");
		if ($("#stackBody .panel").length > 1) {
			setStackLocationToBottom();
			reArrangeArrows(true, function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 800);
			});
  		}
  
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
 	}});
}

function createMainStack() {
	$("#stackBody").prepend("<div class='panel panel-primary opacity00'>" 
			+ "<div class='panel-heading text-center'>main</div>" 
			+ "<div class='panel-body'>" 
			+ "<div><div id='mainStackNumDec' style='display: inline-block;'>int fact_value, number = <div id='numberVal' contenteditable='true' maxlength='0' style='display: inline-block;'>5</div>;</div></div>" 
			+ "<div><span id='mainStackFactValueInit'>fact_value = " 
			+ "<span id='mainFactCall' class='returned-val'><b>factorial(<span class='number flip-css'>number</span>)</b></span>;</span></div>" 
			+ "<div><span id='mainStackPrintf'></span></div></div></div>");
	$('#mainStackPrintf').html($('#printLine').html());
	introjs.insertOption(introjs._currentStep + 1, getStep("#mainStackNumDec", "", "top"));
	introjs.insertOption(introjs._currentStep + 2, getStep("#mainStackFactValueInit", "", "top", "hide"));
	introjs.insertOption(introjs._currentStep + 3, getStep("#mainFactCall", "", "top"));
	introjs.insertOption(introjs._currentStep + 4, getStep("#animationDiv", "", "left", "hide"));
	keyDownEvent();
	createInvisiableDiv();
	setStackLocationToBottom();
	idsArr.push("#mainFactCall");
}

function keyDownEvent() {
	$("[contenteditable=true]").on("keydown", function(e) {
		introjs.refresh();
		$('.errMsg').remove();
		$("#changedVal").text($(this).text());
		number = $(this).text();
		factVal = number;
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='errMsg'><br/>Enter a number of maximum 1 digits.</div>");
			e.preventDefault();
		}
	});
 
 	$("[contenteditable=true]").on("keyup", function(e) {
		introjs.refresh();
		$("#changedVal").text($(this).text());
		number = $(this).text();
		factVal = number;
		if ($(this).text().length > 0) {
			$(".introjs-nextbutton").show();
		} else {
			$('.errMsg').remove();
			$('.introjs-tooltiptext').append("<div class='errMsg'><br/><br/>Please enter a value.</div>");
			$(".introjs-nextbutton").hide();
		}
	});
}

function createFactorialStack() {
	$("#stackBody").prepend("<div class='panel panel-primary opacity00'>"
		   + "<div class='panel-heading text-center'>factorial(<span class='number'>" + number + "</span>)</div>" 
		   + "<div class='panel-body'>" 
		   + "<div><span id='stack" + number + "IfBlk'>if (<span id='stack" + number + "IfCdtn'>number <= 1</span>) {</span></div>" 
		   + "<div>&nbsp;&nbsp;<span id='stack" + number + "IfBlkReturnStmt'>return <span class='returned-val flip-css'>1</span>;</span></div>" 
		   + "<div id='stack" + number + "ElseBlk'>} else {" 
		   + "<div>&nbsp;&nbsp;<span id='stack" + number + "ElseBlkReturnStmt'>return <span class='returned-val flip-css'><span class='number flip-css'>number</span> * " 
		   + "<span id='stack" + number + "FactCall'><b>factorial(<span class='number flip-css'>" 
		   + "<span class='number flip-css'>number</span> - 1</span>)</b></span></span>;" 
		   + "</span></div>}</div></div>" 
		   + "</div>");
	reChangeArrowHeight();
	introjs.insertOption(introjs._currentStep + 1, getStep("#stack" + number + "IfBlk", "", "top"));
	createInvisiableDiv();
	setStackLocationToBottom();
	idsArr.push("#stack" + number + "FactCall");
}

function createInvisiableDiv() {
	$("#invisibleDiv").append("<div class='col-xs-offset-2 col-xs-10 padding0'>" 
		+ "<div class='col-xs-12 padding0'>" 
		+ "<div class='col-xs-10 padding0 opacity00 panel panel-primary'>" 
		+ $("#stackBody > div:first-child").html() 
		+  "</div></div></div>");
}

function setStackLocationToBottom() {
	var setTop =  $("#mainStack").height() - $("#mainStack > div").height();
	if (setTop > 0) {
		$("#mainStack > div").css({"top" : setTop});
	} else {
		$("#invisibleDiv .panel").css("width", $("#stackBody .panel").outerWidth());
	}
}


function reArrangeArrows(flag, callBackFunction) {
	$('.svg-line').remove();
	var y1, y2, x1;
	for (var i = 0; i < idsArr.length - 1; i++) {
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttribute('class', 'svg-line');
		x1 = $(idsArr[i]).offset().left - $('#stackBody').offset().left + $(idsArr[i]).width();
		y1 = $(idsArr[i]).offset().top - $('#stackBody').offset().top + $(idsArr[i]).height() / 2;
		
		x1 = x1 / ($("#mySvg").width() / 100);
		line.setAttribute('x1', x1 + "%");
		line.setAttribute('y1', y1);
		line.setAttribute('x2', '90%');
		line.setAttribute('y2', y1);
		$('#mySvg').append(line);
  
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		y1 = $(idsArr[(idsArr.length - i) - 1]).offset().top - $('#stackBody').offset().top + $(idsArr[(idsArr.length - i) - 1]).height() / 2;
  
		y2 = $('#stackBody').height() - y1 - $('#stackBody .panel').height();
		line.setAttribute('class', 'svg-line');
		line.setAttribute('x1', '90%');
		line.setAttribute('y1', y2);
		line.setAttribute('x2', '85%');
		line.setAttribute('y2', y2);
		line.style.markerEnd = 'url("#grayMarker")';
		$('#mySvg').append(line);
  
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		y1 = $(idsArr[i]).offset().top - $('#stackBody').offset().top + $(idsArr[i]).height() / 2;
		line.setAttribute('class', 'svg-line');
		line.setAttribute('x1', '90%');
		line.setAttribute('y1', y1);
		line.setAttribute('x2', '90%');
		line.setAttribute('y2', y2);
		$('#mySvg').append(line);
 	}
 
 
	 $(".svg-line").eq($(".svg-line").length - 3).attr("id", "arrow1").css({"display" : "none", "stroke" : "blue"});
	 $(".svg-line").eq($(".svg-line").length - 2).attr("id", "arrow2").css({"display" : "none", "stroke" : "blue"});
	 $(".svg-line").eq($(".svg-line").length - 1).attr("id", "arrow3").css({"display" : "none", "stroke" : "blue"});
 
	if (flag) {
		$("#arrow1").attr("x2" , $("#arrow1").attr("x1")).css({"display" : "", "marker-end" : "url('#blueMarker')"});
		tl.to($("#arrow1"), 1, {attr : {x2 : "90%"}, onComplete: function() {
			$("#arrow1").css("marker-end", "url()");
			$("#arrow3").attr("y2" , $("#arrow3").attr("y1")).css({"display" : "", "marker-end" : "url('#blueMarker')"});
			tl.to($("#arrow3"), 1, {attr : {y2 : $("#arrow2").attr("y1")}, onComplete: function() {
				$("#arrow3").css("marker-end", "url()");
				$("#arrow2").attr("x2", "90%").css({"display" : "", "marker-end" : "url('#blueMarker')" });
				tl.to($("#arrow2"), 1, {attr : {x2 : "85%"}, onComplete: function() {
					if (typeof callBackFunction === "function") {
						callBackFunction();
     				}
				}});
   			}});
  		}});
 	}
}

function reChangeArrowHeight() {
	$.each($('.svg-line'), function (index) {
		$($('.svg-line').eq(index)).attr({
			"y1" : parseInt($(this).attr("y1")) + $('#stackBody .panel').outerHeight() + 5,
			"y2" : parseInt($(this).attr("y2")) + $('#stackBody .panel').outerHeight() + 5
		});
	});
}

function returnAnimation() {
	$(".user-btn").remove();
	$(".returned-val:eq(1) .number:last").parent().addClass("bg-blinking");
	$(".returned-val").eq(0).addClass("bg-blinking");
	if ($("#stackBody .panel").length >= 2) {
		if ($(".panel:eq(0) span:last()").parent().find("span").length > 1) {
			var val = parseInt($(".returned-val:eq(0) span:eq(0)").text()) * parseInt($(".returned-val:eq(0) span:eq(1)").text());
			flipEffect($(".panel:eq(0) span:last()").parent(), val, function() {
				reverseRevealEffect();
			});
		} else {
			console.log($("#stackBody .panel").length);
		reverseRevealEffect();
		}
	}
}

function valueReplaceEffect() {
	$("body").append("<span id='dummySpan'>" + $(".returned-val").eq(0).text() + "</span>");
	var l1 = $(".returned-val").eq(0).removeClass("bg-blinking").css("z-index", "1").offset();
	$("#dummySpan").offset({
		"top" : l1.top,
		"left" : l1.left
	}).addClass("bg-blinking");
	var l2 = $(".returned-val:eq(1) .number:last").parent().offset();
	var topLength = l2.top - l1.top;
	var leftLength = l2.left - l1.left;
	TweenMax.to($(".returned-val").eq(0), 1, {top : topLength, left : leftLength});
	TweenMax.to($(".returned-val:eq(1) .number:last").parent(), 0.5, {opacity: 0, delay: 0.5, onComplete:function() {
		$(".returned-val:eq(1) .number:last").parent().text($(".returned-val").eq(0).text()).css("opacity", "1");
		stackVanishEffect();
	}});
}

function stackVanishEffect() {
	$("#dummySpan").remove();
	tl.to($("#stackBody .panel").eq(0), 1, {top : "-400", onComplete : function() {
		$("#stackBody .panel").eq(0).remove();
		setStackLocationToBottom();
		idsArr.pop();
		reArrangeArrows();
		$("#arrow1, #arrow3").css({"display" : "", "marker-end" : "url()"});
		$("#arrow2").css({"display" : "", "marker-end" : "url('#blueMarker')"});
   
		if ($("#stackBody .panel").length >= 2) {
			introjs.insertOption(introjs._currentStep + 1, getStep("#" + $(".panel:eq(0) span:last()").attr("id"), "", "right"));
			introjs.insertOption(introjs._currentStep + 2, getStep("#animationDiv", "", "left", "hide"));
			introjs.nextStep();
		} else {
			introjs.insertOption(introjs._currentStep + 1, getStep("#mainFactCall", "", "right"));
			introjs.insertOption(introjs._currentStep + 2, getStep("#mainStackPrintf", "", "top"));
			introjs.insertOption(introjs._currentStep + 3, getStep("#outputDiv", "", "top", "hide"));
			introjs.insertOption(introjs._currentStep + 4, getStep("#restart", "", "right", ""));
			introjs.nextStep();
		}
	}});
}

function reverseRevealEffect() {
	$("#arrow2").css("marker-end" , "url('#blueMarker')")
	tl.to($("#arrow2"), 1, {attr : {x2 : "90%"}, onComplete: function() {
		$("#arrow2").css("marker-end", "url()");
		$("#arrow3").css("marker-end", "url('#blueMarker')");
		tl.to($("#arrow3"), 1, {attr : {y2 : $("#arrow3").attr("y1")}, onComplete: function() {
			$("#arrow3").css("marker-end", "url()");
			$("#arrow1").css("marker-end", "url('#blueMarker')");
			tl.to($("#arrow1"), 1, {attr : {x2 : $("#arrow1").attr("x1")}, onComplete: function() {
				$("#arrow1").css("marker-end", "url()");
				valueReplaceEffect();
			}});
		}});
	}});
}

function userNextStep() {
	$(".user-btn").remove();
	introjs.nextStep();
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
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

function getStep(element, intro, position, tooltipClass) {
	var step = {};
	if (typeof element != 'undefined') {
		step['element'] = element;
	}
	if (typeof intro != 'undefined') {
		step['intro'] = intro;
	}
	if (typeof position != 'undefined') {
		step['position'] = position;
	}
	if (typeof tooltipClass != 'undefined') {
		step['tooltipClass'] = tooltipClass;
	}
	return step;
}

function blinkCursorAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}
