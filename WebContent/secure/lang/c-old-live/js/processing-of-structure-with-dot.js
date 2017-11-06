var intro;
var typingInterval = 5;
var iVal = 1;
var processingOfStructureWithDotReady = function() {
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("[contenteditable=true]").parent().parent().click(function() {
		$("[contenteditable=true]").focus();
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
				position:"right"
			},{
				element : "#declaration",
				intro : "",
				position:"right"
			},{
				element : "#variableDefinition",
				intro : "",
				position:"right"
			},{
				element : "#s1",
				intro : "",
				position:"right",
			},{
				element : "#animationDiv1",
				intro : "",
				tooltipClass: "hide",
			},{
				element : "#s2",
				intro : "",
				position:"right",
			},{
				element : "#animationDiv2",
				intro : "",
				tooltipClass: 'hide',
			},{
				element : "#s3",
				intro : "",
				position:"right",
			},{
				element : "#animationDiv3",
				intro : "",
				tooltipClass: 'hide',
			},{
				element : "#firstRecord",
				intro : "",
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#name1",
				intro : "",
				tooltipClass: "hide",
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readName1",
				intro : "",
			},{
				element : "#s1name",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#age1",
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readAge1",
				intro : "",
			},{
				element : "#s1age",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#salary1",
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readSalary1",
				intro : "",
			},{
				element : "#s1sal",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#secondRecord",
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass:"hide"
			},{
				element : "#name2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readName2",
				tooltipClass:"hide"
			},{
				element : "#s2name",
				tooltipClass:"hide"
			},{
				element : "#age2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readAge2",
				tooltipClass:"hide"
			},{
				element : "#s2age",
				tooltipClass:"hide"
			},{
				element : "#salary2",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readSalary2",
				tooltipClass:"hide"
			},{
				element : "#s2sal",
				tooltipClass:"hide"
			},{
				element : "#thirdRecord",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
				tooltipClass: "hide",
			},{
				element : "#name3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readName3",
				tooltipClass:"hide"
			},{
				element : "#s3name",
				tooltipClass:"hide"
			},{
				element : "#age3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readAge3",
				tooltipClass:"hide"
			},{
				element : "#s3age",
				tooltipClass:"hide"
			},{
				element : "#salary3",
				tooltipClass:"hide"
			},{
				element : "#outputDiv",
				intro : "",
			},{
				element : "#readSalary3",
				tooltipClass:"hide"
			},{
				element : "#s3sal",
				tooltipClass:"hide"
			},{
				element : "#titles",
				intro : "",
				tooltipClass:"hide",
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord1",
				intro : "",
				position: 'top'
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord2",
				intro : "",
				position: 'top'
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#printRecord3",
				intro : "",
				position: 'top'
			},{
				element : "#outputDiv",
				tooltipClass:"hide"
			},{
				element : "#restart",
				intro : "Click to restart",
				position:"right",
			}
			
			]});
		
		intro.onafterchange(function(targetElement) {
			$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
			var elementId = targetElement.id;
			switch (elementId) {
			case "informationDiv":
				TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
					TweenMax.to($("#li2"), 0.5, {opacity: 1, onComplete: function() {
						TweenMax.to($("#li3"), 0.5, {opacity: 1, onComplete: function() {
							TweenMax.to($("#li4"), 0.5, {opacity: 1, onComplete: function() {
								$("#li4").append('&emsp; <a class="introjs-button user-btn">Next &#8594;</a>');
								$(".user-btn").click(function() {
									$(this).remove();
									intro.nextStep();
								});
							}});
						}});
					}});
				}});
			break;
			case "codeDiv":
				$("#codeDiv").removeClass("opacity00");
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#outputDiv").removeClass("opacity00");
					var text = "Let us consider an example.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "declaration":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "We declare a user defined datatype <span class='ct-code-b-yellow'>employeerecord</span>" 
							+ ", which contains one <span class='ct-code-b-yellow'>character</span> member <span class='ct-code-b-yellow'>name</span>"
							+ ", one <span class='ct-code-b-yellow'>integer</span> member <span class='ct-code-b-yellow'>age</span>"
							+ " and one <span class='ct-code-b-yellow'>float</span> member <span class='ct-code-b-yellow'>sal</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "variableDefinition":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "We have defined three struct variables , <span class='ct-code-b-yellow'>S1</span>, "
								+ " <span class='ct-code-b-yellow'>S2</span>, <span class='ct-code-b-yellow'>S3</span>. of type"
								+ " <span class='ct-code-b-yellow'>employeerecord</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
				
			break;	
			case "s3":
			case "s2":
			case "s1":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "All the member variables of <span class='ct-code-b-yellow'>" + elementId.toUpperCase()
								+ "</span> will be allocated memory as per their datatype.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;	
			case "animationDiv1":
			case "animationDiv2":
			case "animationDiv3":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#" + elementId).removeClass("opacity00");
					if (elementId == "animationDiv1") {
						var t = 1;
					} else if (elementId == "animationDiv2") {
						var t = 2;
					} else {
						var t = 3;
						$("#output").append('<span id="stmt1"></span><br>');
					}
					$('.introjs-tooltip').removeClass("hide");
					var text = "The members of  <span class='ct-code-b-yellow'>S" + t + " </span> can be accessed by using"
								+ "  <span class='ct-code-b-yellow'>dot(.)</span> operator<br>i.e., <span class='ct-code-b-yellow'>S" + t 
								+ ".name</span>, <span class='ct-code-b-yellow'>S" + t + ".age</span> and"
								+ " <span class='ct-code-b-yellow'>S" + t + ".sal</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "outputDiv":
				$(".introjs-helperLayer ").one('transitionend', function() {
					scrollAtOutput();
					$('.introjs-nextbutton').hide();
					 if (intro._currentStep == 11) {
						$("#stmt1").append("Enter details of first record name, age and salary ");
						var text = "Enter first record values.";
						typing(".introjs-tooltiptext", text, function() {
							setTimeToIntroNextStep();
						});
					} else if (intro._currentStep == 13) {
						$("#enterName1").append("Enter name:");
						$("#editname1").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter the name of first record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 17) {
						$("#enterAge1").append("Enter age:");
						$("#editage1").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter the age of first record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 21) {
						$("#enterSal1").append("Enter salary:");
						$("#editsal1").effect("highlight",{color: 'yellow'}, 500).focus();
						var text="Enter salary of first record."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 25) {
						$("#stmt2").append("Enter details of second record name, age and salary ");
						setTimeToIntroNextStep();
					}	
					 
					 //second Record
					 else if (intro._currentStep == 27) {
						$("#enterName2").append("Enter name:");
						$("#editname2").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter second record name."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 31) {
						$("#enterAge2").append("Enter age:");
						$("#editage2").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter second record age."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 35) {
						$("#enterSal2").append("Enter salary:")
						$("#editsal2").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter second record salary."
						typing(".introjs-tooltiptext", text);
					}
				 //third Record
					else if (intro._currentStep == 39) {
						$("#stmt3").append("Enter details of third record name, age and salary ");
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 41) {
						$("#enterName3").append("Enter name:");
						$("#editname3").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter third record name.";
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 45) {
						$("#enterAge3").append("Enter age:");
						$("#editage3").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter third record age."
						typing(".introjs-tooltiptext", text);
					} else if (intro._currentStep == 49) {
						$("#enterSal3").append("Enter salary:");
						$("#editsal3").effect( "highlight",{color: 'yellow'}, 500).focus();
						var text="Enter third record salary."
						typing(".introjs-tooltiptext", text);
					}
				 //printing
				 else if (intro._currentStep == 53) {
					$("#printtitlesAge").append("AGE");	
					$("#printtitlesName").append("NAME");
					$("#printtitlesSalary").append("SALARY");			
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 55) {
						$("#printingStmt1").append($("#s1age").text());
						$("#printingStmt2").append($("#s1name").text());
						$("#printingStmt3").append($("#s1sal").text());
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 57) {
						$("#printingStmt4").append($("#s2age").text());
						$("#printingStmt5").append($("#s2name").text());
						$("#printingStmt6").append($("#s2sal").text());
						setTimeToIntroNextStep();
					} else if (intro._currentStep == 59) {
						$("#printingStmt7").append($("#s3age").text());
						$("#printingStmt8").append($("#s3name").text());
						$("#printingStmt9").append($("#s3sal").text());
						setTimeToIntroNextStep();
					}
				}); 
					 
			break;
			case "firstRecord":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "salary" + iVal:
			case "age" + iVal:
			case "name" + iVal:
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (elementId == "name" + iVal) {
						editableContentAppend("enterName" + iVal, "editname" + iVal, "20", function() {
							characters();
						});
					} else {
						if (elementId == "age" + iVal) {
							editableContentAppend("enterAge" + iVal, "editage" + iVal, "2", function() {
								numbers("2");
							});
						} else {
							editableContentAppend("enterSal" + iVal, "editsal" + iVal, "5", function() {
								numbers("5");
								iVal++;
							});
						}
					}
					setTimeToIntroNextStep();
				});
			break;

			case "readName1":
				getAnimation("#editname1", "#s1name", "true", "name", "s1");
				break;
			case "readName2":
				getAnimation("#editname2", "#s2name", "false");
				break;
			case "readName3":
				getAnimation("#editname3", "#s3name", "false");
				break;
			case "s3name":
			case "s2name":
			case "s1name":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#" + elementId).removeClass("opacity00");
					setTimeToIntroNextStep();
				});
			break;
			case "readAge1":
				getAnimation("#editage1", "#s1age", "true", "age", "s1");
			break;
			case "readAge2":
				getAnimation("#editage2", "#s2age", "false");
			break;
			case "readAge3":
				getAnimation("#editage3", "#s3age", "false");
			break;
			case "s3age":
			case "s2age":
			case "s1age":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#" + elementId).removeClass("opacity00");
					setTimeToIntroNextStep();
				});
			break;
			case "readSalary1":
				getAnimation("#editsal1", "#s1sal", "true", "salary", "S1");
			break;
			case "readSalary2":
				getAnimation("#editsal2", "#s2sal", "false");
			break;
			case "readSalary3":
				getAnimation("#editsal3", "#s3sal", "false");
			break;
			case "s3sal":
			case "s2sal":
			case "s1sal":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#" + elementId).removeClass("opacity00")
					setTimeToIntroNextStep();
				});
			break;
			case "secondRecord":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#output").append('<span id="stmt2"></span><br>');
					setTimeToIntroNextStep();
				});
			break;
			case "thirdRecord":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "This statement is used to print the string in the console.";
					typing(".introjs-tooltiptext", text, function() {
						$("#output").append('<span id = "stmt3"></span><br>');
						setTimeout(function(){
							intro.nextStep();
						}, 1000);
					});
				});
			break;
			case "titles":
				$(".introjs-helperLayer ").one('transitionend', function() {
					iVal = 1;
					$("#output").append('<table><tr><th class="output-table-border" id="printtitlesAge"></th>' 
							+ '<th class="output-table-border" id="printtitlesName"></th>' 
							+ '<th class="output-table-border" id="printtitlesSalary"></th>' 
							+ '</tr><tr>' 
							+ '<td class="output-table-border" id="printingStmt1"></td>'
							+ '<td class="output-table-border" id="printingStmt2"></td>'
							+ '<td class="output-table-border" id="printingStmt3"></td>'
						+ '</tr>'
						+ '<tr>'
							+ '<td class="output-table-border" id="printingStmt4"></td>'
							+ '<td class="output-table-border" id="printingStmt5"></td>'
							+ '<td class="output-table-border" id="printingStmt6"></td>'
						+ '</tr>'

						+ '<tr>'
							+ '<td class="output-table-border" id="printingStmt7"></td>'
							+ '<td class="output-table-border" id="printingStmt8"></td>'
							+ '<td class="output-table-border" id="printingStmt9"></td>'
						+ '</tr>'
						+ '</table>');
					setTimeToIntroNextStep();
				});
			break;
			case "printRecord3":
			case "printRecord2":
			case "printRecord1":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "Let us access the members of <span class='ct-code-b-yellow'>S" + iVal + "</span> using the dot operator and print them"
								+ " to the console.";
					typing('.introjs-tooltiptext', text, function() {
						iVal++;
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "restart":
				$('.introjs-tooltip').css({'min-width' : '110px'});
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#restart").removeClass("opacity00");
				});
			break;
			}
		});
		intro.start();
		$('.introjs-bullets').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$('.introjs-nextbutton').hide();
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

function getAnimation(id1, id2, flag, val, sType) {
	$(".introjs-helperLayer ").one('transitionend', function() {
		$(id1).attr("contenteditable", false);
		$(id2).addClass("opacity00");
		$(id2).text($(id1).text());
		if (flag == 'true') {
			$('.introjs-tooltop').removeClass("hide");
			var text = "This statement gets the <span class='ct-code-b-yellow'>" + val + "</span> of <span class='ct-code-b-yellow'>" 
						+ sType + "</span> by standard input device(keyboard).";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		} else {
			setTimeToIntroNextStep();
		}
	});
}
function editableContentAppend(id1, id2, val, callBackFunction) {
	$("#output").append('<span id='+ id1 + '></span><span class="padding3" contenteditable="true" id=' + id2
			+ ' maxlength=' + val + ' spellcheck="false"></span><br>');
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}
function characters() {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) >= max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to 20 characters,"
						+ " because the array variable size is name[20].</div>");
			if ((e.which == 46) || (e.which == 8) || (e.which == 37) || (e.which == 39)) {
				return true;
			} else {
			e.preventDefault();
			}
		}
		if ($("[contenteditable=true]").text().length == 0) {
			$('.introjs-nextbutton').hide();
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please enter string.</div>");
		} else {
			$('.introjs-nextbutton').show();
		} 
		
		if (((e.which >= 60 && e.which <= 90))) {
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


function numbers(val) {
	$("[contenteditable=true]").on("keydown keyup", function(e) {
		$(".ct-code-b-red").remove();
		var max = $(this).attr("maxlength");
		if (($(this).text().length) >= max) {
			$(".introjs-tooltiptext").append("<div class='ct-code-b-red'></br>Please restrict the length of text to " + val + " characters.</div>");
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