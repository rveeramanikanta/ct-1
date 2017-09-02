var typingInterval = 5;
var count = 1;
var result = 1;

var arrayOfStructure = function() {
	$("#restart").click(function() {
		location.reload(); 
	});
	$("[contenteditable=true]").parent().parent().click(function() {
		 $("[contenteditable=true]").focus();
	});
	introSteps();
 }
function introSteps() {
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#informationDiv",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#codeDiv",
			intro : "",
			position : "right"
		},{
			element : "#struct",
			intro : "",
			position : "right"
		},{
			element : "#structVariable",
			intro : "",
			position : "right"
		},{
			element : "#animationDiv",
			intro : "",
			tooltipClass: "hide",
			position : "bottom"
		},{
			element : "#normalVariable",
			intro : "",
			position : "bottom"
		},{
			element : "#animationDiv",
			intro : "",
			tooltipClass: "hide",
			position : "bottom"
		},{
			element : "#printDetailsStmt",
			intro : "",
			position : "bottom"
		},{
			element : "#outputDiv",
			intro : "",
			position : "top",
			tooltipClass : "hide"
		},{
			element : "#forLoop1",
			intro : "",
			tooltipClass : "hide",
		},{
			element : "#intial1",
			intro : "",
			position : "right",
		},{
			element : "#memoryOfi",
			intro : "",
			position : "right",
			tooltipClass : "hide"
		},{
			element : "#condition1",
			intro : "",
			position : "right",
		}
	]});
	
	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
			case "informationDiv":
				$("#li1").fadeTo(500, 1, function() {
					$("#li2").fadeTo(500, 1, function() {
						$("#li3").fadeTo(500, 1, function() {
							$("#example-table").removeClass("opacity00");
							$("#text li:last-child div").append('<a class="introjs-button user-btn">Next &#8594;</a>');
							$(".user-btn").click(function() {
								$(this).remove();
								intro.nextStep();
							});
						});
					});
				});
			break;
			case "codeDiv":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#codeDiv").removeClass("opacity00");
					var text="Let us consider an example.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "struct":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text="This is a structure declaration of user defined datatype "+
						"<span class='ct-code-b-yellow'>book</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "structVariable":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This is the definition of struct array. Memory is allocated to all the elements of structure array i.e., " 
						+ "<span class='ct-code-b-yellow'>S[0], S[1], S[2], S[3]</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "animationDiv":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 4) {
						$("#animationDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass("hide");
							var text = "This is how the <span class='ct-code-b-yellow'>memory</span> is allocated to an array of structures.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					} else if (intro._currentStep == 6) {
						$("#memoryOfi").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass("hide");
							var text = "Variable <span class='ct-code-b-yellow'>i</span> is allocated " 
								+ "<span class='ct-code-b-yellow'>2</span> bytes of memory.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
			break;
			case "normalVariable":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "An <span class='ct-code-b-yellow'>int</span> variable <span class='ct-code-b-yellow'>i</span> is declared."; 
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "printDetailsStmt":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id="detailsOfBook"></span>');
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "outputDiv":
				$(".introjs-helperLayer ").one('transitionend', function() {
					scrollAtOutput();
					$("#outputDiv").removeClass("opacity00");
					if (intro._currentStep == 8) {
						$("#detailsOfBook").append("Enter details of 4 book : ");
						setTimeNxtStep();
					} else if (intro._currentStep == 14 || intro._currentStep == 32 || intro._currentStep == 50 || intro._currentStep == 68) {
						$("#detailsOfBook" + count).append("Enter name of book : ")
						setTimeNxtStep();
					} else if (intro._currentStep == 16 || intro._currentStep == 34 || intro._currentStep == 52 || intro._currentStep == 70) {
						$("#editname" + count).effect("highlight",{color: 'yellow'}, 500).focus();
						var text1 = "Enter name of book.";
						typing(".introjs-tooltiptext", text1);
					} else if (intro._currentStep == 19 || intro._currentStep == 37 || intro._currentStep == 55 || intro._currentStep == 73) {
						$("#editname" + count).attr("contenteditable", false);
						$("#detailsOfpages" + count).append("Enter no.of pages : ");
						setTimeNxtStep();
					} else if (intro._currentStep == 21 || intro._currentStep == 39 || intro._currentStep == 57 || intro._currentStep == 75) {
						$("#editpages" + count).effect( "highlight",{color: 'yellow'}, 500).focus();
						var text1 = "Enter number of pages.";
						typing(".introjs-tooltiptext", text1);
					} else if (intro._currentStep == 24 || intro._currentStep == 42 || intro._currentStep == 60 || intro._currentStep == 78) {
						$("#editpages" + count).attr("contenteditable", false);
						$("#detailsOfprice" + count).append("Enter price : ");
						setTimeNxtStep();
					} else if (intro._currentStep == 26 || intro._currentStep == 44 || intro._currentStep == 62 || intro._currentStep == 80) {
						$("#editprice" + count).effect( "highlight",{color: 'yellow'}, 500).focus();
						var text1 = "Enter the price.";
						typing(".introjs-tooltiptext", text1);
					} else if (intro._currentStep == 90 || intro._currentStep == 95 || intro._currentStep == 100 || intro._currentStep == 105) {
						$("#displayResult" + result).removeClass("opacity00");
						setTimeToIntroNextStep();
					}
				});
			break;
			case "forLoop1":
			case "forLoop2" :
				$(".introjs-helperLayer ").one('transitionend', function() {
					setTimeNxtStep();	
				});
			break;
			case "intial1":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "Initialize <span class='ct-code-b-yellow'>i</span> to <span class='ct-code-b-yellow'>0</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "inc1":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "The value of <span class='ct-code-b-yellow'>i</span> is incremented by 1. It becomes <span class='ct-code-b-yellow'> "
						+ count + "</span>.";
					typing(".introjs-tooltiptext", text, function() {
						if (count <= 4) {
							count++;
							$('.introjs-nextbutton').show();
						} else {
							$('.introjs-nextbutton').show();
						}
					});
				});
			break;
			case "memoryOfi":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 11) {
						$("#ivalue").removeClass('opacity00').addClass("animated zoomIn").one("animationend", function() {
							setTimeToIntroNextStep();
						});
					} else if (intro._currentStep == 29) {
						$("#ivalue").text(1);
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 47) {
						$("#ivalue").text(2);
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 65) {
						$("#ivalue").text(3);
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 83) {
						$("#ivalue").text(4);
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 87) {
						$("#ivalue").text(0);
						secondDynamicSteps();
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 92) {
						$("#ivalue").text(1);
						secondDynamicSteps();
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 97) {
						$("#ivalue").text(2);
						secondDynamicSteps();
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 102) {
						$("#ivalue").text(3);
						secondDynamicSteps();
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 107) {
						$("#ivalue").text(4);
						lastSteps();
						setTimeToIntroNextStep();
					}
				});
			break;
			case "condition1":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (count < 5) {
						var text = "As <span class='ct-code-b-yellow'>" + count + " < 4</span>, the condition evaluates to"
									+ " <span class='ct-code-b-yellow'>true</span> and the loop begins.";
						typing(".introjs-tooltiptext", text, function() {
							 dynamicSteps(true);
							$('.introjs-nextbutton').show();
						});
					} else {
						changeText();
					}
				});
			break;
			case "printNameStmt":
				$("#editprice" + (count - 1)).attr("contenteditable", false);
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#output").append('<br><span id="detailsOfBook'+ count +'"></span>' 
							+ '<span class="padding3" contenteditable="true" id="editname'+ count +'" maxlength="4"' 
							+ ' spellcheck="false"></span>');
					characters();
					setTimeToIntroNextStep();
				});
			break;
			case "name" + count:
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#name" + count).text($("#editname" + count).text()).removeClass('opacity00').addClass("animated zoomIn")
																													.one("animationend", function() {
						intro.refresh();
						setTimeout(function(){
							intro.nextStep();
						}, 1500);
					});
				});
			break;
			case "printPrice":
			case "printPage":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (elementId == "printPage") {
						$("#output").append('<br><span id="detailsOfpages' + count + '"></span>' 
									+ '<span class="padding3" contenteditable="true" id="editpages'+ count +'" maxlength="3" spellcheck="false">' 
									+ '</span>');
					} else {
						$("#output").append('<br><span id="detailsOfprice' + count + '"></span>' 
								+ '<span class="padding3" contenteditable="true" id="editprice' + count + '" maxlength="3" spellcheck="false">' 
								+ '</span>');
					}
					numbers(); 
					setTimeToIntroNextStep();
				});
			break;
			case "price" + count:
			$("#editprice" + (count - 1)).attr("contenteditable", false);
			pagesAnimation("#price", "#editprice")
			break;
			case "pages" + count:
				pagesAnimation("#pages", "#editpages")
				break;
			case "scanName":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#editprice" + count).attr("contenteditable", false);
					setTimeToIntroNextStep();
				});
			break;
			case "scanPrice":
			case "scanPage":
				$(".introjs-helperLayer ").one('transitionend', function() {
					setTimeToIntroNextStep();
				});
			break;
			case "intial2":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "Initialize <span class='ct-code-b-yellow'>i</span> to <span class='ct-code-b-yellow'>0</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "condition2":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 108) {
						$('.introjs-nextbutton').hide();
						var text = "As <span class='ct-code-b-yellow'>" + result + " < 4</span>, the condition evaluates to"
									+ " <span class='ct-code-b-yellow'>false</span> and loop is exited.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					} else {
						var text = "As <span class='ct-code-b-yellow'>" + result + " < 4</span>, the condition evaluates to"
								+ " <span class='ct-code-b-yellow'>true</span> and"
								+ " loop executes.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					}
				});
			break;
			case "inc2":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "The value of <span class='ct-code-b-yellow'>i</span> is incremented by 1. It becomes <span class='ct-code-b-yellow'> "
						+ result + "</span>.";
					typing(".introjs-tooltiptext", text, function() {
						if (result < 4) {
							result++;
						}
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "display" :
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#output").append('<br><span id="displayResult' + result + '" class="opacity00">Name : <span class="ct-code-b-yellow">' 
							+ $("#name" + result).text() + '</span> \t Price : <span class="ct-code-b-yellow">' + $("#price" + result).text()  
							+ '</span> \t Pages : <span class="ct-code-b-yellow">' + $("#pages" + result).text() + '</span></span>'); 
					setTimeNxtStep();
				});
			break;
			case "restart" :
				$('.introjs-tooltip').css({"miin-width": "110px"});
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#restart").removeClass("opacity00");
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
}

	function typing(typingId, typingContent,callBackFunction) {
		$(typingId).typewriting( typingContent , {
			"typing_interval": typingInterval,
			"cursor_color": 'white',
		}, function() {
			$(typingId).removeClass('typingCursor');
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	function scrollAtOutput() {
		var container = $('.output-console-body');
		scrollTo = $('.output-console-body').find("span").last();
		container.animate({
			scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
		});
	}
	
	function setTimeToIntroNextStep() {
		setTimeout(function() {
			intro.nextStep();
		}, 800);
	}
	
	function setTimeNxtStep() {
		setTimeout(function() {
			intro.nextStep();
		}, 500);
	}
	function pagesAnimation(id1, id2) {
		$(".introjs-helperLayer ").one('transitionend', function() {
			$(id1 + count).text($(id2 + count).text()).addClass("animated zoomIn").one("animationend", function() {
				intro.refresh();
				intro.nextStep();
			});
		});
	}
	function characters() {
		$('.introjs-nextbutton').hide();
		$("[contenteditable=true]").on("keydown keyup", function(e) {
			$(".ct-code-b-red").remove();
			var max = $(this).attr("maxlength");
			if (($(this).text().length) > max) {
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 5 characters, " 
							+ "because the array variable size is name[5].</div>");
				if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
					return true;
				} else {
					e.preventDefault();
				}
			} 
			if ($("[contenteditable=true]").text().length == 0) {
				$('.introjs-nextbutton').hide();
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please Enter a string."); 
			} else {
				$('.introjs-nextbutton').show();
			}
			
			if (((e.which >= 60 && e.which <= 90))) {
				return true;
			} else {
				if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
					return true;
				} else {
					e.preventDefault();
				}
			}
		});
	}
	
	function numbers() {
		$('.introjs-nextbutton').hide();
		$("[contenteditable=true]").on("keydown keyup", function(e) {
			$(".ct-code-b-red").remove();
			var max = $(this).attr("maxlength");
			if (($(this).text().length) > max) {
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 4 characters.</div>");
				if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
					return true;
				} else {
					e.preventDefault();
				}
			}
			if ($("[contenteditable=true]").text().length == 0) {
				$('.introjs-nextbutton').hide();
				$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please enter numbers.</div>");
			} else {
				$('.introjs-nextbutton').show();
			}
			
			if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105))) {
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
	
	
	function dynamicSteps(isRequired) {
		var step = 1;
		$('.introjs-nextbutton').hide();
		
		var newStep = {
			element: "#printNameStmt",
			intro : "",
			tooltipClass : "hide",
			
		}
		intro.insertOption(intro._currentStep + 1, newStep);
		
		var newStep = {
			element: "#outputDiv",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#scanName",
			intro : "",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
	
		var newStep = {
			element: "#outputDiv",
			intro : "",
			position: "top"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#name" + count,
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#printPage",
			intro : "",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#outputDiv",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#scanPage",
			intro : "",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#outputDiv",
			intro : "",
			position: "top"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#pages" + count,
			tooltipClass: "hide" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#printPrice",
			intro : "",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#outputDiv",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#scanPrice",
			intro : "",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#outputDiv",
			intro : "",
			position: "top"
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#price" + count,
			tooltipClass: "hide" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);

		var newStep = {
			element: "#inc1",
			intro : "",
			position: "right" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#memoryOfi",
			tooltipClass: "hide" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
		
		var newStep = {
			element: "#condition1",
			intro : "",
			position: "right" 
		}
		intro.insertOption(intro._currentStep +  ++step, newStep);
			
	}
	
	function changeText() {
		$('.introjs-nextbutton').hide();
		var text = "As <span class='ct-code-b-yellow'>" + count + " < 4</span>, the condition evaluates to"
					+ " <span class='ct-code-b-yellow'>false</span> and loop is exited.";
		typing(".introjs-tooltiptext", text, function() {
			normalSteps();
			$('.introjs-nextbutton').show();
		});
	}
	
	function normalSteps() {
		var newStep = {
			element:"#forLoop2",
			intro : "",
			tooltipClass:"hide",
		}
		intro.insertOption(intro._currentStep + 1, newStep);
		
		var newStep = {
			element:"#intial2",
			intro : "",
			position:"right"
		}
		intro.insertOption(intro._currentStep + 2, newStep);
		
		var newStep = {
			element:"#memoryOfi",
			tooltipClass: 'hide'
		}
		intro.insertOption(intro._currentStep + 3, newStep);
	}
	
	function secondDynamicSteps() {
		var newStep = {
			element:"#condition2",
			intro : "",
			position:"right"
		}
		intro.insertOption(intro._currentStep + 1, newStep);
		
		var newStep = {
			element:"#display",
			intro : "",
			tooltipClass:"hide",
		}
		intro.insertOption(intro._currentStep + 2, newStep);
		
		var newStep = {
			element:"#outputDiv",
			intro : "",
			tooltipClass:"hide"
		}
		intro.insertOption(intro._currentStep + 3, newStep);
		
		var newStep = {
			element:"#inc2",
			intro : "",
			position:"right"
		}
		intro.insertOption(intro._currentStep + 4, newStep);
		
		var newStep = {
			element:"#memoryOfi",
			tooltipClass: 'hide'
		}
		intro.insertOption(intro._currentStep + 5, newStep);
	}
	
	function lastSteps() {
		var newStep = {
			element:"#condition2",
			intro : "",
			position:"right",
		}
		intro.insertOption(intro._currentStep + 1, newStep);
		var newStep = {
			element:"#restart",
			intro : "Click to restart.",
			position:"right",
		}
		intro.insertOption(intro._currentStep + 2, newStep);
	}