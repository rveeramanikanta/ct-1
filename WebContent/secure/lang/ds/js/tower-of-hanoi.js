var typingSpeed = 5;
var introjs;
var tl = new TimelineLite();
var number = 3;
var idsArr = [];
var animationFlag = false;
var source = 'A';
var temporary = 'B';
var destination = 'C';


var towerOfHanoiReady = function () {
	$(".circles-lines line").hide();
	$("circle").hide();
	$(".circles-text text").hide();
	initIntroJS();
	$('#restart').click(function() {
		location.reload();
	});
	keyDownEvent();
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
	lang = getURLParameter("lang");
	if (lang == 'c') {
		$('#preproceserDir').text("#include <stdio.h>\n");			
		$('#ifPrintfStmt').html('printf("Move disk %d from %c to %c\\n", disks, <x style="color:blue">src<b>Rod</b></x>, <x style="color:green">dest<b>Rod</b></x>);');
		$('#elsePrintfStmt').html('printf("Move disk %d from %c to %c\\n", disks, <x style="color:blue">src<b>Rod</b></x>, <x style="color:green">dest<b>Rod</b></x>);');
	} else if (lang == "cpp") {
		$('#preproceserDir').text("#include <iostream>\nusing namespace std;\n");
		$('#ifPrintfStmt').text('cout << "Move disk " << disks << " from " << srcRod << " to " \n\t\t\t\t\t\t\t\t << destRod << "\\n";');
		$('#elsePrintfStmt').text('cout << "Move disk " << disks << " from " << srcRod << " to " \n\t\t\t\t\t\t\t\t << destRod << "\\n";');
	}
		
}

function initIntroJS() {
		introjs = introJs();
		introjs.setOptions({
			steps : [{
				element : "#informationDiv",
				intro : "",
				position : "bottom",
				tooltipClass : "hide",
				isCompleted : false
  			}, {
				element : "#cCode",
				intro : "",
				position : "right",
				isCompleted : false
			}, {
				 element : "#mainStack",
				 intro : "",
				 position : "left",
				 tooltipClass: "hide",
				 isCompleted : false
			}, {
				 element : "#main",
				 intro : "",
				 position : "right",
				 isCompleted : false
			}, {
				 element : "#animationDiv",
				 intro : "",
				 position : "left",
				 tooltipClass : "hide",
				 isCompleted : false
			}]
		});

	introjs.onafterchange(function(targetElement) {
		setStackLocationToBottom();
		introjs.refresh();
		var elementId = targetElement.id;
		switch (elementId) {
			case"informationDiv":
			$('.introjs-nextbutton').hide();
			$("#informationDiv").append("<ul></ul>");
			$("#informationDiv ul").append("<li><span class='ct-code-b-green'><a href='https://en.wikipedia.org/wiki/Tower_of_Hanoi' target='_blank'>Towers of Hanoi</a></span>"
					+ " is a classic mathematical puzzle (inspired from the puzzle <b>Tower of Brahma</b>) used in computer programming.</li>");			 
				$("#informationDiv ul li:last-child").hide().fadeIn(500, function() {					
					$("#informationDiv ul").append("<li>In this there are <span class='ct-code-b-green'>three</span> rods, one of the rods (called <span class='ct-code-b-green'>source</span>) contains a <span class='ct-code-b-green'>stack of disks</span> of different sizes." 
						+ " The objective of the puzzle is to move the entire stack present in the <span class='ct-code-b-green'>source</span> rod to another rod which is" 
						+ " called the <span class='ct-code-b-green'>destination</span> rod.</li>");
				$("#informationDiv ul li:last-child").hide().fadeIn(500, function() {
					$("#informationDiv ul").append("<li>While moving the disks, one has to follow the following rules : </li>");
					$("#informationDiv ul li:last-child").hide().fadeIn(500, function() {
						$("#informationDiv ul").append("<ol><li>Only one disk can be moved at a time.</li></ol>");
						$("#informationDiv ol li:last-child").hide().fadeIn(500, function() {
							$("#informationDiv ol").append("<li>While moving a disk, only the top most disk can be moved at a time.</li>");
							$("#informationDiv ol li:last-child").hide().fadeIn(500, function() {
								$("#informationDiv ol").append("<li>Larger disks can't be placed on top of the smaller disks.</li>");
								$("#informationDiv ol li:last-child").hide().fadeIn(500, function() {
									$("#informationDiv ol li:last-child").append("<a class='introjs-button user-btn opacity00' onclick='userNextStep()'>Next →</a>");
									$(".user-btn").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
										$(this).removeClass("animated zoomIn");
										introjs._introItems[introjs._currentStep].currentAnimations = $("body").html();
									});
								});
							});
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
					var text = "In the below code we will learn how recursion is used while executing the  "
						+ "<span class='ct-code-b-yellow'>solveHanoi</span> function.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
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
					setStackLocationToBottom();
					var fromId;
					if (introjs._currentStep == 4) {
						createMainStack();
						fromId = "#mainBlk";
					} else if (number >= 0) {
						createHanoiStack();
						fromId = "#solveHanoiFun";
		    		}
		    		if (number >= 0) {
		    			setStackLocationToBottom();
		    			reArrangeArrows();
		     			$(fromId).effect( "transfer", { to: $("#invisibleDiv .panel"), className: "ui-effects-transfer" }, 1000, function() {
		 					$("#invisibleDiv .panel").removeClass("opacity00").addClass("animated fadeIn").one("animationend", function() {
								$(this).removeClass("animated zoomIn");
								// $("#stackBody .panel:eq(0)
								// .print-stmt").css("word-spacing", "-3px");
								if (introjs._currentStep == 4) {
									// setStackLocationToBottom();
									stackDropEffect(function() {
										setTimeout(function() {
											introjs.nextStep();
										}, 1000);
									});
								} else {
									setStackLocationToBottom();
									stackDropEffect();
								}
							});
		     			});
					} else {
						reverseRevealEffect();
		    		}
				});
			break;
	   
			case "mainStackNumDec":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The variable <span class='ct-code-b-yellow'>disks</span> will hold the number of disks to be considered." 
						+ "<br/><br/>Please provide a number less than <span class='ct-code-b-yellow'>5</span> to ensure we have less recursive calls.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
					blinkCursorAtEnd("numberVal");
				});
			});
			break;
		   
			case "stack" + number + "ElseBlk":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$("[contenteditable=true]").attr("contenteditable", false);
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			break;
   
			case "mainHanoiCall":
				$(".introjs-nextbutton").hide();
				idsArr.push("#stack" + number + functionName);
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "The characters 'A', 'B', and 'C' are used to represent the <span class='ct-code-b-yellow'>source-rod</span>," 
								+ " <span class='ct-code-b-yellow'>temporary-rod</span> " 
								+ "and the <span class='ct-code-b-yellow'>destination-rod</span>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			break;
			case "stack" + number + "IfBlk":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					$(".introjs-tooltiptext").append("Since the condition : <br/><span class='ct-code-b-yellow'>disks == 1</span> " 
						+ "<br/><span id='tooltipIfCndtn'><span id='tooltipNumber' class='flip-css'>disks</span> == 1</span>");
					var ifCndtnOffset = $("#stack" + number + "IfCdtn").offset();
					$("#tooltipIfCndtn").offset({
						"top" : ifCndtnOffset.top,
						"left" : ifCndtnOffset.left
					}).css("font-family", "monospace");
					tl.to("#tooltipIfCndtn", 1, {top : 0, left : 0, onComplete:function() {
						flipEffect("#tooltipNumber", number, function() {
						var text = "";
						if (number == 1) {
							text = "evaluates to <span class='ct-code-b-yellow'>true</span>, the control enters into the <span class='ct-code-b-yellow'>if-block</span>.";
							introjs.insertOption(introjs._currentStep + 1, getStep("#stack" + number + "IfBlkPrintStmt", "", "left"));
						} else {
		      				text = "evaluates to <span class='ct-code-b-red'>false</span>, the control enters into the <span class='ct-code-b-yellow'>else-block</span>.";
							introjs.insertOption(introjs._currentStep + 1, getStep("#stack" + number + "ElseBlk", "", "top", "hide"));
							introjs.insertOption(introjs._currentStep + 2, getStep("#stack" + number + "Hanoi1", "", "top", "hide"));
						}
						$(".introjs-tooltiptext").append("<div></div>");
						typing($(".introjs-tooltiptext div:last-child"), text, function() {
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						});
					});
				}});
			});
			break;
	   
			case "stack" + $(".number:eq(0)").attr("number") + "Hanoi1":
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					number--;
					source = $(".source").eq(0).attr("source");
					temporary = $(".destination").eq(0).attr("destination");
					destination = $(".temporary").eq(0).attr("temporary");
					idsArr.push("#stack" + number + functionName);
					introjs.insertOption(introjs._currentStep + 1, getStep("#animationDiv", "", "left", "hide"));
					flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .number"), parseInt($(".number:eq(0)").attr("number")), function() {
						flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .number").parent(), parseInt($(".number:eq(0)").attr("number")) - 1, function() {
							flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg1"), "'" + ($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg1").parents(".panel").find(".source").attr("source")) + "'", function() {
								flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg2"), "'" + ($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg1").parents(".panel").find(".destination").attr("destination")) + "'", function() {
									flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg3"), "'" + ($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg1").parents(".panel").find(".temporary").attr("temporary")) + "'", function() {
										setTimeout(function() {
											introjs.nextStep();
										}, 500);
									});
								});
							});
						});
					});
				});
			break;
   
			case "stack" + $(".number:eq(0)").attr("number") + "Hanoi2":
				$("#stack" + $(".number:eq(0)").attr("number") + "Hanoi2").attr("iscompleted", true);
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					number = parseInt($(".panel:eq(0) .number:eq(0)").attr("number")) - 1;
					functionName = "Hanoi2";
					source = $(".temporary").eq(0).attr("temporary");
					temporary = $(".source").eq(0).attr("source");
					destination = $(".destination").eq(0).attr("destination");
					var index = idsArr.lastIndexOf("#stack" + (number + 1) + "Hanoi1");
					idsArr.splice(index, 0, "#stack" + (number + 1) + "Hanoi2");
					idsArr.pop();
					idsArr.push("#stack" + number + "Hanoi1");
					introjs.insertOption(introjs._currentStep + 1, getStep("#animationDiv", "", "left", "hide"));
					flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi2 .number"), parseInt($(".number:eq(0)").attr("number")), function() {
						flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi2 .number").parent(), parseInt($(".number:eq(0)").attr("number")) - 1, function() {
							flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi2 .arg1"), "'" + ($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg1").parents(".panel").find(".temporary").attr("temporary")) + "'", function() {
								flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi2 .arg2"), "'" + ($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg1").parents(".panel").find(".source").attr("source")) + "'", function() {
									flipEffect($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi2 .arg3"), "'" + ($("#stack" + $(".number:eq(0)").attr("number") + "Hanoi1 .arg1").parents(".panel").find(".destination").attr("destination")) + "'", function() {
										setTimeout(function() {
											introjs.nextStep();
										}, 500);
									});
								});
							});
						});
					});
				});
			break;
	
			case "stack" + $(".number:eq(0)").attr("number") + "Hanoi1":
				$("stack" + $(".number:eq(0)").attr("number") + "Hanoi1").attr("isCompleted", true);
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					number = parseInt($(".panel:eq(0) .number:eq(0)").attr("number")) - 1;
					functionName = "Hanoi1";
					var text = "Here the return of the value previous function call is being substituted in the current location.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
			   		});
				});
			break;
   
			case "stack" + number + "IfBlkPrintStmt":
				introjs.refresh();
				$(".introjs-nextbutton").hide();
				// $(introjs._options.steps[introjs._currentStep].element).addClass("opacity05");
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This operation will print the output to the console and also perform the moment of disks.";
					typing($(".introjs-tooltiptext"), text, function() {
						introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "top", "hide"));
						$("#output").append("<div class='opacity00'>Move disk " + number + " from " + source + " to " + destination + "</div>");
						fromPoint = getStandNames[source];
						toPoint = getStandNames[destination];
						introjs.insertOption(introjs._currentStep + 2, getStep("#discsSvgDiv", "", "left", "hide"));
						introjs.insertOption(introjs._currentStep + 3, getStep("#animationDiv", "", "left", "hide"));
						dynamicPopover("#stack" + number + "IfBlkPrintStmt .number", number, "bottom");
						dynamicPopover("#stack" + number + "IfBlkPrintStmt .aVal", source, "top");
						dynamicPopover("#stack" + number + "IfBlkPrintStmt .cVal", destination, "bottom");
						number = -1;
						$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					});
				});
			break;
 			
			case "stack" + $(".number:eq(0)").attr("number") + "ElseBlkPrintStmt":
				introjs.refresh();
				$(".introjs-nextbutton").hide();
				$(".introjs-helperLayer").one("transitionend", function() {
					var text = "This operation will print the output to the console and also perform the moment of disks.";
					typing($(".introjs-tooltiptext"), text, function() {
						number = $(".panel:eq(0) .number:eq(0)").attr("number");
						introjs.insertOption(introjs._currentStep + 1, getStep("#outputDiv", "", "top", "hide"));
						$("#output").append("<div class='opacity00'>Move disk " + number + " from " + source + " to " + temporary + "</div>");
						fromPoint = getStandNames[source];
						toPoint = getStandNames[temporary];
						introjs.insertOption(introjs._currentStep + 2, getStep("#discsSvgDiv", "", "left", "hide"));
						introjs.insertOption(introjs._currentStep + 3, getStep("#stack" + number + "Hanoi2", "", "left", "hide"));
						dynamicPopover("#stack" + number + "ElseBlkPrintStmt .number", number, "bottom");
						dynamicPopover("#stack" + number + "ElseBlkPrintStmt .aVal", source, "top");
						dynamicPopover("#stack" + number + "ElseBlkPrintStmt .cVal", temporary, "bottom");
						$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					});
				});
			break;
  
			case "outputDiv":
				$("#outputDiv").removeClass("opacity00");
				$(".dynamic-popover").parents(".popover").remove();
				$(".introjs-helperLayer").one("transitionend", function() {
					animationFlag = true;
					$(".output-console-body").scrollTo($("#output > div:last()"), 500, function() {
						$("#output > div").last().removeClass("opacity00").hide().fadeIn(500, function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						});
					});
		  		});
			break;
	   
			case "discsSvgDiv":
				$(".introjs-nextbutton").hide();
				$("#discsSvgDiv").parent().removeClass("opacity00");
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._currentStep == 6) {
						removeAdditionalDiscs();
						$(".introjs-tooltiptext").append("<ul><li></li></ul>");
						$(".introjs-tooltiptext ul li:last-child").append("Let us name the <span class='ct-code-b-yellow'>source</span> rod as character" 
								+ " <span class='ct-code-b-yellow'>A</span>.");
						$(".introjs-tooltiptext ul").append("<li>Let us name the <span class='ct-code-b-yellow'>temporary</span> rod as character" 
								+ " <span class='ct-code-b-yellow'>B</span>.</li>");
						$(".introjs-tooltiptext ul").append("<li>Let us name the <span class='ct-code-b-yellow'>destination</span> rod as character" 
								+ " <span class='ct-code-b-yellow'>C</span>.</li>");
						$(".introjs-nextbutton").show();
					} else {
						moveDisc(fromPoint, toPoint, function() {
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						});
					}
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
			+ "<div><div style='display: inline-block;'>int disks = <div class='new-number' style='display: inline-block;'>3</div>;</div></div>" 
			+ "<div id='mainStackHanoiCall' style='font-weight: bold; display: inline-block;'>solveHanoi(disks, 'A', 'B', 'C');</div>" 
			+ "</div></div>");
	introjs.insertOption(introjs._currentStep + 1, getStep("#mainStackNumDec", "", "right"));
	introjs.insertOption(introjs._currentStep + 2, getStep("#discsSvgDiv", "", "right"));
	introjs.insertOption(introjs._currentStep + 3, getStep("#mainHanoiCall", "", "top"));
	introjs.insertOption(introjs._currentStep + 4, getStep("#animationDiv", "", "left", "hide"));
	// keyDownEvent();
	createInvisiableDiv();
	setStackLocationToBottom();
	idsArr.push("#mainStackHanoiCall");
}

function keyDownEvent() {
	$("[contenteditable=true]").on("keydown", function(e) {
		introjs.refresh();
		$('.errMsg').remove();
		$("#changedVal").text($(this).text());
		number = $(this).text();
		$(".new-number").text(number);
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 49 || e.keyCode > 53)) && ((e.keyCode < 97) || (e.keyCode > 101))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='errMsg'><br/>Enter a number of maximum 1 digit.</div>");
			e.preventDefault();
		}
	});
 
 	$("[contenteditable=true]").on("keyup", function(e) {
		introjs.refresh();
		$("#changedVal").text($(this).text());
		number = $(this).text();
		$(".new-number").text(number);
		if ($(this).text().length > 0) {
			$(".introjs-nextbutton").show();
		} else {
			$('.errMsg').remove();
			$('.introjs-tooltiptext').append("<div class='errMsg'><br/><br/>Please enter a value.</div>");
			$(".introjs-nextbutton").hide();
		}
	});
}

function createHanoiStack() {
	$("#stackBody").prepend("<div class='panel panel-primary opacity00'>"
		   + "<div class='panel-heading text-center'>solveHanoi(<span class='number' number=" + number + ">number</span>, " 
		   + "<span class='source' source='" + source + "'>srcRod</span>, " 
		   + "<span class='temporary' temporary='" + temporary + "'>tempRod</span>, " 
		   + "<span class='destination' destination='" + destination + "'>descRod</span>)</div>" 
		   + "<div class='panel-body'>" 
		   + "<div><span id='stack" + number + "IfBlk'>if (<span id='stack" + number + "IfCdtn'>disks == 1</span>) {</span></div>" 
		   + "&emsp;&emsp;<span id='stack" + number + "IfBlkPrintStmt' class='print-stmt'></span><br>" 
		   + "<div id='stack" + number + "ElseBlk'>} else { " 
		   + "<div>&nbsp;&nbsp;<span id='stack" + number + "Hanoi1' style='font-weight: bold;' isCompleted=false>" 
		   + "solveHanoi(<span style='display: inline-block;'><span class='number' style='display: inline-block;'>disks</span> - 1</span>, " 
		   + "<x class='arg1' style='color:blue; display:inline-block;'>src<b>Rod</b></x>, <x class='arg2' style='color:green; display:inline-block;'>dest<b>Rod</b></x>, " 
		   + "<x class='arg3' style='display:inline-block;'>temp<b>Rod</b></x>);</span></div>" 
		   + "&emsp;&emsp;<span id='stack" + number + "ElseBlkPrintStmt' class='print-stmt'></span><br>"
		   + "<div>&nbsp;&nbsp;<span id='stack" + number + "Hanoi2' style='font-weight: bold;' isCompleted=false>" 
		   + "solveHanoi(<span style='display: inline-block;'><span class='number' style='display:inline-block;'>disks</span> - 1</span>, " 
		   + "<x class='arg1' style='display:inline-block;'>temp<b>Rod</b></x>, <x class='arg2' style='color:blue; display:inline-block;'>src<b>Rod</b></x>, " 
		   + "<x class='arg3' style='color:green; display:inline-block;'>dest<b>Rod</b></x>);</span></div>"
		   + "}</div>" 
		   + "</div></div>");
	if (lang == 'c') {
		$('#stack' + number + 'IfBlkPrintStmt').html('printf(\"Move disk %d from %c to %c\\n\",' 
				+ ' <span class="number">disks</span>, <x class="aVal" style="color:blue; display:inline-block;">src<b>Rod</b></x>,'
				+ ' <x class="cVal" style="color:green; display:inline-block;">dest<b>Rod</b></x>');
		$('#stack' + number + 'ElseBlkPrintStmt').html('printf(\"Move disk %d from %c to %c\\n\",' 
				+ " <span class='number'>disks</span>, <x class='aVal' style='color:blue; display:inline-block;'>src<b>Rod</b></x>,"
				+ " <x class='cVal' style='color:green; display:inline-block;'>dest<b>Rod</b></x>);");
	} else if (lang == 'cpp') {
		$('#stack' + number + 'IfBlkPrintStmt').css('display, inline');
		$('#stack' + number + 'IfBlkPrintStmt').html('cout << "Move disk " << <span class="number">disks</span> << " from " << '
						+ '<x class="aVal" style="color:blue; display:inline-block;">src<b>Rod</b></x> << " to " <br>&emsp;&emsp;&emsp;&emsp;&emsp;'
						+ '<< <x class="cVal" style="color:green; display:inline-block;">dest<b>Rod</b></x> << "\\n";');
		$('#stack' + number + 'ElseBlkPrintStmt').css('display, inline');
		$('#stack' + number + 'ElseBlkPrintStmt').html('cout << "Move disk " << <span class="number">disks</span> << " from " << '
						+ '<x class="aVal" style="color:blue; display:inline-block;">src<b>Rod</b></x> << " to "<br>'
						+ ' &emsp;&emsp;&emsp;&emsp;&emsp;<< <x class="cVal" style="color:green; display:inline-block;">dest<b>Rod</b></x> << "\\n";');
	}
	reChangeArrowHeight();
	introjs.insertOption(introjs._currentStep + 1, getStep("#stack" + number + "IfBlk", "", "top"));
	createInvisiableDiv();
	setStackLocationToBottom();
}

function createInvisiableDiv() {
	$("#invisibleDiv").append("<div class='col-xs-offset-1 col-xs-11 padding0'>" 
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
	$('#stackSvg .svg-line').remove();
	var y1, y2, x1;
	for (var i = 0; i < idsArr.length - 1; i++) {
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttribute('class', 'svg-line');
		x1 = Math.abs($(idsArr[i]).offset().left - $('#stackBody').offset().left + $(idsArr[i]).width());
		y1 = Math.abs($(idsArr[i]).offset().top - $('#stackBody').offset().top + $(idsArr[i]).height() / 2);
		x1 = Math.abs(x1 / ($("#stackSvg").width() / 100));
		line.setAttribute('x1', x1 + "%");
		line.setAttribute('y1', y1);
		line.setAttribute('x2', '90%');
		line.setAttribute('y2', y1);
		$('#stackSvg').append(line);
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		y2 = ($(idsArr[i]).parents(".panel").prev().offset().top - $('#stackBody').offset().top) + $('#stackBody .panel .panel-heading').height() / 2;
		line.setAttribute('class', 'svg-line');
		line.setAttribute('x1', '90%');
		line.setAttribute('y1', y2);
		line.setAttribute('x2', '85%');
		line.setAttribute('y2', y2);
		line.style.markerEnd = 'url("#grayMarker")';
		$('#stackSvg').append(line);
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		y1 = Math.abs($(idsArr[i]).offset().top - $('#stackBody').offset().top + $(idsArr[i]).height() / 2);
		line.setAttribute('class', 'svg-line');
		line.setAttribute('x1', '90%');
		line.setAttribute('y1', y1);
		line.setAttribute('x2', '90%');
		line.setAttribute('y2', y2);
		$('#stackSvg').append(line);
 	}
	$("#stackSvg .svg-line").eq($("#stackSvg .svg-line").length - 3).attr("id", "arrow1").css({"display" : "none", "stroke" : "blue"});
	$("#stackSvg .svg-line").eq($("#stackSvg .svg-line").length - 2).attr("id", "arrow2").css({"display" : "none", "stroke" : "blue"});
	$("#stackSvg .svg-line").eq($("#stackSvg .svg-line").length - 1).attr("id", "arrow3").css({"display" : "none", "stroke" : "blue"});
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
	$.each($('#stackSvg .svg-line'), function (index) {
		$($('#stackSvg .svg-line').eq(index)).attr({
			"y1" : parseInt($(this).attr("y1")) + $('#stackBody .panel').outerHeight() + 5,
			"y2" : parseInt($(this).attr("y2")) + $('#stackBody .panel').outerHeight() + 5
		});
	});
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
			if (!$.parseJSON($("#stack" + $("#stackBody .panel:eq(0) .number:eq(0)").attr("number") + "Hanoi2").attr("isCompleted"))) {
				$("#stack" + $("#stackBody .panel:eq(0) .number:eq(0)").attr("number") + "Hanoi1").addClass("opacity05");
				introjs.insertOption(introjs._currentStep + 1, getStep("#stack" + $(".number:eq(0)").attr("number") + "ElseBlkPrintStmt", "", "left"));
				introjs.nextStep();
			} else {
				$("#stack" + $("#stackBody .panel:eq(0) .number:eq(0)").attr("number") + "Hanoi2").addClass("opacity05");
				source = $(".source").eq(0).attr("source");
				temporary = $(".temporary").eq(0).attr("temporary");
				destination = $(".destination").eq(0).attr("destination");
				reverseRevealEffect();
			}
		} else {
			$("#mainHanoiCall").addClass("opacity05");
			introjs.insertOption(introjs._currentStep + 1, getStep("#restart", "", "right", ""));
			introjs.nextStep();
		}
	}});
}

function reverseRevealEffect() {
	setStackLocationToBottom();
	$("#arrow2").css("marker-end" , "url('#blueMarker')")
	tl.to($("#arrow2"), 1, {attr : {x2 : "90%"}, onComplete: function() {
		$("#arrow2").css("marker-end", "url()");
		$("#arrow3").css("marker-end", "url('#blueMarker')");
		tl.to($("#arrow3"), 1, {attr : {y2 : $("#arrow3").attr("y1")}, onComplete: function() {
			$("#arrow3").css("marker-end", "url()");
			$("#arrow1").css("marker-end", "url('#blueMarker')");
			tl.to($("#arrow1"), 1, {attr : {x2 : $("#arrow1").attr("x1")}, onComplete: function() {
				$("#arrow1").css("marker-end", "url()");
				stackVanishEffect();
			}});
		}});
	}});
}

function removeAdditionalDiscs() {
	for (var i = 5 - number; i >= 1; i--) {
		$("#discsSvg circle").last().remove();
		$(".circles-lines line").last().remove();
		$(".circles-text text").last().remove();
		sourceArr.pop();
	}
	sourceDiscsCount = number;
	$.each($(".circles-lines line"), function(index) {
		lineYPosMap[index] = {"y1" : $(this).attr("y1"), "y2" : $(this).attr("y2")}; 
	});
	$.each($("circle"), function(index) {
		circleYPosMap[index] = {"cy" : $(this).attr("cy")}; 
	});
	
	$.each($(".circles-text text"),function(i) {
		$(this).text(number - (i));
	});
	
	$("circle").show();
	$(".circles-lines line").show();
	$(".circles-text text").show();
	
	$("#discsSvgDiv").parent().removeClass("opacity00");
	
}

function userNextStep() {
	$(".user-btn").remove();
	introjs.nextStep();
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			introjs.refresh();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function dynamicPopover(id, val, placement) {
	$(id).popover({
		 html: true,
		 placement: placement,
		 content: "<span class='dynamic-popover'>" + val + "</span>"
	}).popover("show");
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


var linePos = [ [
						{"y1" : "79", "y2" : "83"},
						{"y1" : "71.3", "y2" : "75.3"},
						{"y1" : "63.5", "y2" : "67.5"},
						{"y1" : "55.7", "y2" : "59.8"},
						{"y1" : "47.9", "y2" : "52"}
	                 ],
	                 
	                 [
						{"y1" : "78.8", "y2" : "82.3"},
						{"y1" : "71", "y2" : "74.6"},
						{"y1" : "63.2", "y2" : "66.9"},
						{"y1" : "55.4", "y2" : "59"},
						{"y1" : "47.7", "y2" : "51.3"}
	                 ],
	                 [
						{"y1" : "78.6", "y2" : "81.5"},
						{"y1" : "70.9", "y2" : "73.7"},
						{"y1" : "63.2", "y2" : "66"},
						{"y1" : "55.3", "y2" : "58.2"},
						{"y1" : "47.6", "y2" : "50.5"}
	                  
	                 ], 
	                 [
						{"y1" : "78.5", "y2" : "80.8"},
						{"y1" : "70.7", "y2" : "73.1"},
						{"y1" : "63", "y2" : "65.1"},
						{"y1" : "55.2", "y2" : "57.4"},
						{"y1" : "47.3", "y2" : "49.6"}
	                 ],
	                 [
						{"y1" : "78.4", "y2" : "80.1"},
						{"y1" : "70.7", "y2" : "72.4"},
						{"y1" : "62.8", "y2" : "64.6"},
						{"y1" : "55.1", "y2" : "56.9"},
						{"y1" : "47.3", "y2" : "49.1"}
	                 ]
	             ];

		var getStandNames = {
			'A': 'source',
			'B': 'temporary',
			'C': 'destination'
		}
		
		var fromPoint = "source";
		var toPoint = "destination";
		var functionName = "Hanoi1";
		var lineYPosMap = {};
		var circleYPosMap = {};
		
		var sourceDiscsCount = 5;
		var temporaryDiscsCount = 0;
		var destinationDiscsCount = 0;
		
		
		var sourceArr = ["disc1", "disc2", "disc3", "disc4", "disc5"];
		var tempArr = [];
		var destinationArr = [];
		
		function moveDisc(source, destination, callBackFunction) {
			var xPos = getXPos(destination);
			TweenMax.to(getTopDisc(source), 1, { attr: {"cy" : "60%"}, onComplete:function() {
				TweenMax.to(getTopDisc(source), 1, { attr: {"cx" : xPos}, onComplete:function() {
					TweenMax.to(getTopDisc(source), 1, { attr: {"cy" : getDestinationYPos(destination) + "%"}, onComplete:function() {
						updateDiscsCount(source, destination);
						updateDiscsArr(source, destination);
						if (typeof callBackFunction === "function") {
							callBackFunction();
	     				}
					}});
				}});
			}});
			
			TweenMax.to(getTopDiscLine(source), 1, { attr : { "y1" : "16.5%", "y2" : getNewY2Pos(source, destination) + "%"}, 
				onComplete:function() {
					TweenMax.to(getTopDiscLine(source), 1, {
						attr : {
							"x1" : xPos,
							"x2" : xPos,
							"y1" : "16.5%",
							"y2" : "16.5%"
						}, onComplete:function() {
							
						var y1 = linePos[parseInt(getTopDisc(source).attr("discidx")) - 1][getDiscCount(destination)].y1;
						var y2 = linePos[parseInt(getTopDisc(source).attr("discidx")) - 1][getDiscCount(destination)].y2;
						
						TweenMax.to(getTopDiscLine(source), 1, {
							attr : {
								"y1" : y1 + "%",
								"y2" : y2 + "%"
							}});
						}});
				}});
			
			TweenMax.to(getTopDiscText(source), 1, {attr : { "y" : getTopDiscText(source).attr("fixedTop") + "%"}, onComplete : function() {
				TweenMax.to(getTopDiscText(source), 1, { attr: {"x" : getTextXPos(source, destination)}, onComplete : function() {
					var y = linePos[parseInt(getTopDisc(source).attr("discidx")) - 1][getDiscCount(destination)].y1;
					TweenMax.to(getTopDiscText(source), 1, {
						attr : {
							"y" : y + "%"
						}});
				}});
			}});
		}
		
		function updateDiscsCount(source, destination) {
			if (source == "source") {
				sourceDiscsCount--;
			} else if (source == "temporary") {
				temporaryDiscsCount--;
			} else if (source == "destination"){
				destinationDiscsCount--;
			}
			
			if (destination == "source") {
				sourceDiscsCount++;
			} else if (destination == "temporary") {
				temporaryDiscsCount++;
			} else if (destination == "destination") {
				destinationDiscsCount++;
			}
		}
		
		function updateDiscsArr(source, destination) {
			var popedDisc;
			if (source == "source") {
				popedDisc = sourceArr.pop();
			} else if (source == "temporary") {
				popedDisc = tempArr.pop();
			} else if (source == "destination"){
				popedDisc = destinationArr.pop();
			}
			
			if (destination == "source") {
				sourceArr.push(popedDisc);
			} else if (destination == "temporary") {
				tempArr.push(popedDisc);
			} else if (destination == "destination") {
				destinationArr.push(popedDisc);
			}
		}
		
		
		function getDestinationYPos(destination) {
			return 300 - (getDiscCount(destination) * 30);
		}
		
		function getDiscCount(source) {
			var dicsCount;
			if (source == "source") {
				dicsCount = sourceDiscsCount;
			} else if (source == "temporary") {
				dicsCount = temporaryDiscsCount;
			} else {
				dicsCount = destinationDiscsCount;
			}
			
			return dicsCount;
		}
		
		function getTopDisc(source) {
			return $("." + getTopDiscArrVal(source));
		}
		
		function getTopDiscArrVal(source) {
			if (source == "source") {
				return sourceArr[getDiscCount(source) - 1];
			} else if (source == "temporary") {
				return tempArr[getDiscCount(source) - 1];
			} else if (source == "destination") {
				return destinationArr[getDiscCount(source) - 1];
			}
		}
		
		function getTopDiscLine(source) {
			return $(".circles-lines line").eq(parseInt(getTopDisc(source).attr("discidx")) - 1);
		}
		
		function getTopDiscText(source) {
			return $(".circles-text text").eq(parseInt(getTopDisc(source).attr("discidx")) - 1);
		}
		
		function getXPos(destination) {
			var xPos;
			if (destination == "source") {
				xPos = "17.5%";
			} else if(destination == "temporary") {
				xPos = "47.5%";
			} else {
				xPos = "77.5%";
			}
			return xPos;
		}
		
		function getTextXPos(source, destination) {
			var xPos;
			if (destination == "source") {
				if (getTopDisc(source).attr("discidx") == 4 || getTopDisc(source).attr("discidx") == 5) {
					xPos = "13%";
				} else {
					xPos = "12%";
				}
			} else if(destination == "temporary") {
				if (getTopDisc(source).attr("discidx") == 4 || getTopDisc(source).attr("discidx") == 5) {
					xPos = "43%";
				} else {
					xPos = "42%";
				}
			} else {
				if (getTopDisc(source).attr("discidx") == 4 || getTopDisc(source).attr("discidx") == 5) {
					xPos = "73%";
				} else {
					xPos = "72%";
				}
			}
			return xPos;
		}
		
		function getNewY2Pos(source, destination) {
			var y1 = linePos[parseInt(getTopDisc(source).attr("discidx")) - 1][getDiscCount(destination)].y1;
			var y2 = linePos[parseInt(getTopDisc(source).attr("discidx")) - 1][getDiscCount(destination)].y2;
			return 16.5 + ((y2 - y1 - 0.2));
		}