var introjs;
var typingSpeed = 5;
var continueBtnCount = 0;
var introjsNextBtnCount = 0;
var passCount = 0;
var tl = new TimelineLite();
var continueActionCount = 0;

var subName = "";
var ifBlkId = "";
var subMarks = "";
var animationIfBlkName = "maths";

var countingDemoInCReady = function() {
	introJsGuide();
	
	$(".mathsMarksDiv").click(function() {
		$(".mathsMarksDiv > .allowNumbers").focus();
	});
	
	$(".scienceMarksDiv").click(function() {
		$(".scienceMarksDiv > .allowNumbers").focus();
	});
	
	$(".socialMarksDiv").click(function() {
		$(".socialMarksDiv > .allowNumbers").focus();
	});
	$(".internalmathsMarks").click(function() {
		$(".internalmathsMarks > .allowNumbers").focus();
	});
	$(".internalscienceMarks").click(function() {
		$(".internalscienceMarks > .allowNumbers").focus();
	});
	$(".internalsocialMarks").click(function() {
		$(".internalsocialMarks > .allowNumbers").focus();
	});
	
	$(".introjsNextBtn").click(function() {
		introjsNextBtnCount++;
		$(this).addClass("hidden");
		
		if (introjsNextBtnCount == 1) {
			if ($("#mathsMarks").text().length > 0 && $("#scienceMarks").text().length > 0 && $("#socialMarks").text().length > 0 && 
				$("#internalmathsMarks").text().length > 0 && $("#internalmathsMarks").text() < 31 &&  
				$("#internalscienceMarks").text() < 31 && $("#internalsocialMarks").text() < 31 && 
				$("#scienceMarks").text() < 71 && $("#mathsMarks").text() < 71 && $("#socialMarks").text() < 71 &&
				$("#internalscienceMarks").text().length > 0 && $("#internalsocialMarks").text().length > 0) {
				
				$('.allowNumbers').attr('contenteditable', false);
				
				$(".javacode-maths-marks").text($("#mathsMarks").text());
				$(".javacode-science-marks").text($("#scienceMarks").text());
				$(".javacode-social-marks").text($("#socialMarks").text());
				$(".javacode-internalmaths-marks").text($("#internalmathsMarks").text());
				$(".javacode-internalscience-marks").text($("#internalscienceMarks").text());
				$(".javacode-internalsocial-marks").text($("#internalsocialMarks").text());
				
				$(".errorMsg").empty();
				
				$(".introjs-tooltiptext").append("<div></div>");
				var text = "<br/>Let us assume the <b class='ct-code-b-yellow'>external_pass_mark</b> as <b class='ct-code-b-yellow'>26</b>."
				typing(".introjs-tooltiptext > div:last-child", text, function() {
					var text = $(".externalpassMark").removeClass("opacity00").html();
					typing(".externalpassMark", text, function() {
						$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
						$('.animation-nextbtn').click(function() { 
							$('.animation-nextbtn').remove(); 
							$(".introjs-tooltiptext").append("<div></div>");
							var text = "<br/>Let us assume the <b class='ct-code-b-yellow'>total_pass_mark</b> as <b class='ct-code-b-yellow'>40</b>."
							typing(".introjs-tooltiptext > div:last-child", text, function() {
								var text = $(".passMarkDiv").removeClass("opacity00").html();
								typing(".passMarkDiv", text, function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn'>Next &#8594;</a>"); 
									$('.animation-nextbtn').click(function() { 
										$('.animation-nextbtn').remove(); 
										$(".introjs-tooltiptext").append("<div></div>");
										var text = "<br/>Let us declare <b class='ct-code-b-yellow'>variables</b> for the total marks in each subject."
										typing(".introjs-tooltiptext > div:last-child", text, function() {
											var text = $(".totaldeclareDiv").removeClass("opacity00").html();
											typing(".totaldeclareDiv", text, function() {
												$(".introjs-tooltiptext").append("<div></div>");
												var text = "<br>Let us calculate the <b class='ct-code-b-yellow'>total marks</b> obtained in <b class='ct-code-b-yellow'>maths</b> subject."
												typing(".introjs-tooltiptext > div:last-child", text, function() {
													var text = $(".totalmathsMark").removeClass("opacity00").html();
													typing(".totalmathsMark", text, function() {
														$(".totalmathsMarks").text("external_maths_marks + internal_maths_marks");
														setTimeout(function() {
															var totalmaths = parseInt($("#mathsMarks").text())+parseInt($("#internalmathsMarks").text());
															$(".totalmathsMarks").text($("#mathsMarks").text()+'+'+$("#internalmathsMarks").text());
															setTimeout(function() {
																$(".totalmathsMarks").text(totalmaths);
																TweenMax.fromTo(".totalmathsMarks",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function(){
																	$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn5' onclick = 'myfunction()'>Next&#8594;</a>");
																}});
															},1000);
														},1000);
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});	
			} else {
				if ($("#mathsMarks").text().length == 0) {
					$(".errorMsg").text("Please enter valid marks for maths.");
				} else if ($("#scienceMarks").text().length == 0) {
					$(".errorMsg").text("Please enter valid marks for science.");
				}  else if ($("#socialMarks").text().length == 0) {
					$(".errorMsg").text("Please enter valid marks for social.");
				}   else if ($("#internalmathsMarks").text().length == 0) {
					$(".errorMsg").text("Please enter valid marks for maths internals.");
					charAtEnd("internalmathsMarks");
				} else if ( $("#internalmathsMarks").text() > 31) {
					$(".errorMsg").text("Please enter valid marks for maths internals which should be less than or equal to 30.");
					charAtEnd("internalmathsMarks");
				}   else if ($("#internalscienceMarks").text().length == 0) {
					$(".errorMsg").text("Please enter valid marks for science internals.");
					charAtEnd("internalscienceMarks");
				} else if ( $("#internalscienceMarks").text() > 31) {
					$(".errorMsg").text("Please enter valid marks for science internals which should be less than or equal to 30.");
					charAtEnd("internalscienceMarks");
				}   else if ($("#internalsocialMarks").text().length == 0) {
					$(".errorMsg").text("Please enter valid marks for social internals.");
					charAtEnd("internalsocialMarks");
				} else if ( $("#internalsocialMarks").text() > 31) {
					$(".errorMsg").text("Please enter valid marks for social internals which should be less than or equal to 30.");
					charAtEnd("internalsocialMarks");
				} else if ( $("#mathsMarks").text() > 71) {
					$(".errorMsg").text("Please enter valid marks for maths externals which should be less than or equal to 70.");
					charAtEnd("mathsMarks");
				} else if ( $("#socialMarks").text() > 71) {
					$(".errorMsg").text("Please enter valid marks for social externals which should be less than or equal to 70.");
					charAtEnd("socialMarks");
				} else if ( $("#internalscienceMarks").text() > 71) {
					$(".errorMsg").text("Please enter valid marks for science externals which should be less than or equal to 70.");
					charAtEnd("internalscienceMarks");
				} 
								
				introjsNextBtnCount = 0;
				$(".introjsNextBtn").removeClass("hidden");
			}
		} else if (introjsNextBtnCount == 2) {
			$(".introjs-tooltiptext").append("<div></div>");
			var text = "<br/>Let us count the number of subjects in which the student secured pass mark."
				typing(".introjs-tooltiptext > div:last-child", text, function() {
					$(".introjsNextBtn").removeClass("hidden");
				});
		} else if (introjsNextBtnCount == 3) {
			$(".introjs-tooltiptext").append("<div></div>");
			var text = "<br/>Let us declare a variable (pass_count) to store the <b class='ct-code-b-yellow'>count</b> of subjects in which the student has secured pass mark."
				typing(".introjs-tooltiptext > div:last-child", text, function() {
					var text = $(".passCountDiv").removeClass("opacity00").html();
					typing(".passCountDiv", text, function() {
						$(".introjsNextBtn").removeClass("hidden");
					});
				});
		} else if (introjsNextBtnCount == 4) {
			$("#animationDiv").addClass("focus");
			$("#animationDivArea").removeClass("opacity00").css("display", "none").slideDown(2000, function() {
				introjs.nextStep();
			});
		} else if (introjsNextBtnCount == 5) {
			var text = $(".mathsIf").removeClass("opacity00").html();
			typing(".mathsIf", text, function() {
				subName = "external_maths_marks";
			  	ifBlkId = ".mathsIf";
			  	subMarks = $("#mathsMarks").text();
			  	subName1 = "totalmathsMarks" 
				subMarks1 = $(".totalmathsMarks").text();
				flipIfCondition(subName, subMarks, ifBlkId,subName1,subMarks1);
			});
		}
	});
	
	$(".allowNumbers").keydown(function(e) {
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48) || (e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
	
	$('#restart').click(function() {
		$(this).addClass("opacity00");
		continueBtnCount = 0;
		introjsNextBtnCount = 0;
		passCount = 0;
		continueActionCount = 0;
		
		subName = "mathsMarks";
	  	ifBlkId = ".mathsIf";
	  	subMarks = $("#mathsMarks").text();
		animationIfBlkName = "maths";
		
		$('.allowNumbers').attr('contenteditable', true);
		
		$(".passCount-rightside").empty().append("<span class='display-inline-block'>pass_count</span><span> + 1</span>");
		$(".passmark-in-animation").text("externalpassMark");
		
		$(".science-ifblk-body-in-animation").empty().append("<span class='display-inline-block'>pass_count</span><span> + 1</span>");
		$(".maths-ifblk-condition-in-animation").addClass("opacity00");
		$(".science-ifblk-condition-in-animation").addClass("opacity00");
		$(".social-ifblk-condition-in-animation").addClass("opacity00");
		
		$(".maths-ifblk-condition1-in-animation").addClass("opacity00");
		$(".science-ifblk-condition1-in-animation").addClass("opacity00");
		$(".social-ifblk-condition1-in-animation").addClass("opacity00");
		
		$(".maths-ifblk-body-in-animation").addClass("opacity00");
		$(".science-ifblk-body-in-animation").addClass("opacity00");
		$(".social-ifblk-body-in-animation").addClass("opacity00");
		
		$(".dynamic-tag").remove();
		$(".dynamic1-tag").remove();
		$('.introjs-tooltipbuttons').show();
		$('.introjs-tooltiptext').css("min-width", "250px");
		$("#animationDivArea").addClass("opacity00");
		$("#javaCodeDiv").addClass("opacity00");
		$("#animationDiv .completed").addClass("opacity00");
		$("#outputDiv").addClass("opacity00");
		introjs.goToStep(2);
	});
}
function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : '#expTypingArea',
			tooltipClass : 'hide'
		}, {
			element : '#animationDiv',
			intro : '',
			position : 'right'
		}, {
			element : '#animationDivArea',
			intro : '',
			position : 'right'
		}, {
			element : '#javaCodeDiv',
			intro : '',
			position : 'left',
			tooltipClass: "hide"
		}, {
			element : '#outputDiv',
			tooltipClass : 'hide'
		}, {
			element: "#restart",
			intro : "",
			tooltipClass: "introjs-tooltip-min-width-custom",
			position: "right"
		}]
	});
	
	
	introjs.onbeforechange(function(targetElement) {
		switch (targetElement.id) {
		case "expTypingArea":
			
			/*$('#expTypingArea').fadeTo(1000,1,function() {
			});*/
			
		break;
			
		case "animationDiv":
			/*$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				
				var text = "Here, we can see a program on counting variable.<br>The external and internal marks in 3 subjects are ";
				typing(".introjs-tooltiptext", text, function() {
					
					var text = $(".mathsMarksDiv").removeClass("opacity00").html();
					typing(".mathsMarksDiv", text, function() {
						var text = $(".scienceMarksDiv").removeClass("opacity00").html();
						typing(".scienceMarksDiv", text, function() {
							var text = $(".socialMarksDiv").removeClass("opacity00").html();
							typing(".socialMarksDiv", text, function() {
								var text = $(".internalmathsMarks").removeClass("opacity00").html();
								typing(".internalmathsMarks", text, function() {
									var text = $(".internalscienceMarks").removeClass("opacity00").html();
									typing(".internalscienceMarks", text, function() {
										var text = $(".internalsocialMarks").removeClass("opacity00").html();
										typing(".internalsocialMarks", text, function() {
											$(".introjs-tooltiptext").append("<div></div>");
											var text = "You can also edit the marks."
											typing(".introjs-tooltiptext > div:last-child", text, function() {
												$(".introjs-tooltiptext").append("<div class='errorMsg'></div>");
												charAtEnd("mathsMarks");
												charAtEnd("scienceMarks");
												charAtEnd("socialMarks");
												charAtEnd("internalmathsMarks");
												charAtEnd("internalscienceMarks");
												charAtEnd("internalsocialMarks");
												$(".introjsNextBtn").removeClass("hidden");
											});
										});
									});
								});
							});
						});
					});	
				});
			});*/
		break;
			
		case "animationDivArea":
			/*$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$('.introjs-tooltip').css("min-width", "500px");
				var text = "Let us compare <b class='ct-code-b-yellow'>external_maths_marks</b> with <b class='ct-code-b-yellow'>external_pass_mark</b> and then <b class='ct-code-b-yellow'>total_maths_marks</b> with <b class='ct-code-b-yellow'>total_pass_mark</b>."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<div></div>");
					var text = "A student is considered as <b class='ct-code-b-yellow'>pass</b> in maths, only when the following two conditions are satisfied.<ul><li><b class='ct-code-b-yellow'>external_maths_marks</b> >= <b class='ct-code-b-yellow'>26</b></li><li><b class='ct-code-b-yellow'>total_maths_marks</b> >= <b class='ct-code-b-yellow'> 40</b></li></ul>"
					typing(".introjs-tooltiptext > div:last-child", text, function() {
					$(".introjsNextBtn").removeClass("hidden");
					});
				});
			});*/
		break;
			
		case "javaCodeDiv":
			/*$('.introjs-tooltip').css("min-width", "120px");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#output").append("<div class='opacity00 dynamic-tag'>Number of subjects passed = " + passCount + "</div>");
				$("#javaCodeDiv").fadeTo(800, 1, function() {
					$(this).css("opacity", "");
					$("#javaCodeDiv").removeClass("opacity00").addClass("focus");
					
					var text = "The code for C program."
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			});*/
		break;
			
		case "outputDiv":
			/*$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputDiv").removeClass("opacity00");
				$("#output > div").fadeTo(1000,1, function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});*/
		break;
			
		case "restart":
			/*$('.introjs-tooltipbuttons').hide();
			$('.introjs-tooltiptext').css("min-width", "100px");
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restart").fadeTo(1000, 1, function() {
					$(this).css("opacity", "");
				});
				$("#restart").removeClass("opacity00");
				var text = "Click to restart."
				typing(".introjs-tooltiptext", text, function() {
					
				});
			});*/
		break;
		}
	});
	
	
	
	
	
	
	
	introjs.onafterchange(function(targetElement) {
		switch (targetElement.id) {
		case "expTypingArea":
			$('#expTypingArea').fadeTo(1000,1,function() {
				
			});
		break;
			
		case "animationDiv":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				
				var text = "Here, we can see a program on counting variable.<br>The external and internal marks in 3 subjects are ";
				typing(".introjs-tooltiptext", text, function() {
					
					var text = $(".mathsMarksDiv").removeClass("opacity00").html();
					typing(".mathsMarksDiv", text, function() {
						var text = $(".scienceMarksDiv").removeClass("opacity00").html();
						typing(".scienceMarksDiv", text, function() {
							var text = $(".socialMarksDiv").removeClass("opacity00").html();
							typing(".socialMarksDiv", text, function() {
								var text = $(".internalmathsMarks").removeClass("opacity00").html();
								typing(".internalmathsMarks", text, function() {
									var text = $(".internalscienceMarks").removeClass("opacity00").html();
									typing(".internalscienceMarks", text, function() {
										var text = $(".internalsocialMarks").removeClass("opacity00").html();
										typing(".internalsocialMarks", text, function() {
											$(".introjs-tooltiptext").append("<div></div>");
											var text = "You can also edit the marks."
											typing(".introjs-tooltiptext > div:last-child", text, function() {
												$(".introjs-tooltiptext").append("<div class='errorMsg'></div>");
												charAtEnd("mathsMarks");
												charAtEnd("scienceMarks");
												charAtEnd("socialMarks");
												charAtEnd("internalmathsMarks");
												charAtEnd("internalscienceMarks");
												charAtEnd("internalsocialMarks");
												$(".introjsNextBtn").removeClass("hidden");
											});
										});
									});
								});
							});
						});
					});	
				});
			});
		break;
			
		case "animationDivArea":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$('.introjs-tooltip').css("min-width", "500px");
				var text = "Let us compare <b class='ct-code-b-yellow'>external_maths_marks</b> with <b class='ct-code-b-yellow'>external_pass_mark</b> and then <b class='ct-code-b-yellow'>total_maths_marks</b> with <b class='ct-code-b-yellow'>total_pass_mark</b>."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<div></div>");
					var text = "A student is considered as <b class='ct-code-b-yellow'>pass</b> in maths, only when the following two conditions are satisfied.<ul><li><b class='ct-code-b-yellow'>external_maths_marks</b> >= <b class='ct-code-b-yellow'>26</b></li><li><b class='ct-code-b-yellow'>total_maths_marks</b> >= <b class='ct-code-b-yellow'> 40</b></li></ul>"
					typing(".introjs-tooltiptext > div:last-child", text, function() {
					$(".introjsNextBtn").removeClass("hidden");
					});
				});
			});
		break;
			
		case "javaCodeDiv":
			$('.introjs-tooltip').css("min-width", "120px");
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#output").append("<div class='opacity00 dynamic-tag'>Number of subjects passed = " + passCount + "</div>");
				$("#javaCodeDiv").fadeTo(800, 1, function() {
					$(this).css("opacity", "");
					$("#javaCodeDiv").removeClass("opacity00").addClass("focus");
					$('.introjs-tooltip').removeClass("hide");
					var text = "The code for C program."
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
			
		case "outputDiv":
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#outputDiv").removeClass("opacity00");
				$("#output > div").fadeTo(1000,1, function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});
		break;
			
		case "restart":
			$('.introjs-tooltipbuttons').hide();
			$('.introjs-tooltiptext').css("min-width", "100px");
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restart").fadeTo(1000, 1, function() {
					$(this).css("opacity", "");
				});
				$("#restart").removeClass("opacity00");
				var text = "Click to restart."
				typing(".introjs-tooltiptext", text, function() {
					
				});
			});
		break;
		}
	});
	
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	introjs.refresh();
	
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$('.introjs-nextbutton').hide();
	$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn hidden'>Next &#8594;</a>");
}
	
function typing(id, text, callBackFunction) {
	$(id).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(id).removeClass("typingCursor").addClass("completed");
		introjs.refresh();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function charAtEnd(elementId) {
	$('#' + elementId).select();
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
	
}
	
function continueNextEvent() {
	$(".continueBtn").addClass("hidden");
	continueBtnCount++;
	$("#expTypingArea > ul").append("<li></li>");
	if (continueBtnCount == 1) {
		var text = "Our aim is to write code which can determine the count of subjects " 
						+ "in which the student has secured a pass mark."
		typing("#expTypingArea > ul > li:last-child()", text, function() {
			
			$("#expTypingArea > ul > li:last-child()").append("<a class='introjs-button continueBtn' onclick='continueNextEvent()'>Next &#8594;</a>");
		});				
	} else if (continueBtnCount == 2) {
		var text = "Whenever we want to count we should remember to declare an <b class='monospace-text'>int</b> variable which will store the value of count."
		typing("#expTypingArea > ul > li:last-child()", text, function() {
			
			$("#expTypingArea > ul > li:last-child()").append("<a class='introjs-button continueBtn' onclick='continueNextEvent()'>Next &#8594;</a>");
		});				
	} else if (continueBtnCount == 3) {
		var text = "It is advisable not to use generic names like <b class='monospace-text'>x</b>, " 
					+ "<b class='monospace-text'>y</b> or <b class='monospace-text'>count</b> as the variable name." 
					+ "The name should clearly indicate what we are trying to count.";
			typing("#expTypingArea > ul > li:last-child()", text, function() {
				
				$("#expTypingArea > ul > li:last-child()").append("<a class='introjs-button continueBtn' onclick='continueNextEvent()'>Next &#8594;</a>");
			});				
	} else if (continueBtnCount == 4) {
		var text = "In our example, <b class='monospace-text'>passCount</b> could be the name of variable, which holds the count of subjects " 
					+ "in which the student has secured a pass mark.";
		typing("#expTypingArea > ul > li:last-child()", text, function() {
			introjs.nextStep();
		});				
	}
}

function flipIfCondition() {
	$(ifBlkId + " > span:first-child()").effect("highlight", {color: '#003399'}, 1000, function () {
		$("." + animationIfBlkName + "-ifblk-condition-in-animation > .subMark").text(subName);
		$("." + animationIfBlkName + "-ifblk-condition-in-animation").removeClass("opacity00");
		$("." + animationIfBlkName + "-ifblk-condition-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
			TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition-in-animation > .subMark" , 0.5,{rotationX: 0},{rotationX: 90, onComplete:function(){
				$("." + animationIfBlkName + "-ifblk-condition-in-animation > .subMark").text(subMarks);
				TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition-in-animation > .subMark", 0.5, {rotationX : -90},{rotationX:0, onComplete: function() {
					TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition-in-animation > .passmark-in-animation" , 0.8,{rotationX: 0},{rotationX: 90,onComplete:function(){
						$("." + animationIfBlkName + "-ifblk-condition-in-animation > .passmark-in-animation").text("26");
						TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition-in-animation > .passmark-in-animation", 0.8, {rotationX : -90},{rotationX:0, onComplete: function() {
							$(".introjs-tooltiptext").append("<div></div>");
							var text = "";
							$("." + animationIfBlkName + "-ifblk-condition-in-animation").append("<span class='dynamic-tag'></span>");
							if (parseInt(subMarks) >= 26) {
								typing("." + animationIfBlkName + "-ifblk-condition-in-animation > span:last-child()", "is <b class='ct-code-b-blue'>true</b>", function() {
									var l = $(ifBlkId + " > span").eq(1).effect("highlight", {color: '#003399'}, 1000, function () {
										$("." + animationIfBlkName + "-ifblk-condition1-in-animation > .subMark1").text(subName1);
										$("." + animationIfBlkName + "-ifblk-condition1-in-animation").removeClass("opacity00")
										$("." + animationIfBlkName + "-ifblk-condition1-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
											TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition1-in-animation > .subMarks1" , 0.5,{rotationX: 0},{rotationX: 90, onComplete:function(){
												$("." + animationIfBlkName + "-ifblk-condition1-in-animation > .subMark1").text(subMarks1);
												TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition1-in-animation > .subMarks1", 0.5, {rotationX : -90},{rotationX:0, onComplete: function() {
													TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition1-in-animation > .passmark1-in-animation" , 0.8,{rotationX: 0},{rotationX: 90,onComplete:function(){
														$("." + animationIfBlkName + "-ifblk-condition1-in-animation > .passmark1-in-animation").text("40");
														TweenMax.fromTo("." + animationIfBlkName + "-ifblk-condition1-in-animation > .passmark1-in-animation", 0.8, {rotationX : -90},{rotationX:0, onComplete: function() {
															$(".introjs-tooltiptext").append("<div></div>");
															var text = "";
															$("." + animationIfBlkName + "-ifblk-condition1-in-animation").append("<span class='dynamic1-tag'></span>");
															if (parseInt(subMarks1) >= 40) {
																typing("." + animationIfBlkName + "-ifblk-condition1-in-animation > span:last-child()", "is <b class='ct-code-b-blue'>true</b>", function() {
																	$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateCondition()>Next &#8594;</a>");
																});
															} else {
																typing("." + animationIfBlkName + "-ifblk-condition1-in-animation > span:last-child()", "is <b style='color:red;'>false</b>", function() {
																	$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateCondition()>Next &#8594;</a>");
																});
															} 
														}});
													}});
												}});
											}});
										});
									});
								}); 
							} else {
								typing("." + animationIfBlkName + "-ifblk-condition-in-animation > span:last-child()", "is <b style='color:red;'>false</b>", function() {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateCondition()>Next &#8594;</a>");
								});
							}
						}});
					}});
				}});
			}});
		});
	});
}
	
function flipIfConditionscience() {
	$(".scienceIf > span:first-child()").effect("highlight", {color: '#003399'}, 1000, function () {
		$(".science-ifblk-condition-in-animation > .subMark").text(subName);
		$(".science-ifblk-condition-in-animation").removeClass("opacity00");
		$(".science-ifblk-condition-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
			TweenMax.fromTo(".science-ifblk-condition-in-animation > .subMark" , 0.5,{rotationX: 0},{rotationX: 90, onComplete:function(){
				$(".science-ifblk-condition-in-animation > .subMark").text(subMarks);
				TweenMax.fromTo(".science-ifblk-condition-in-animation > .subMark", 0.5, {rotationX : -90},{rotationX:0, onComplete: function() {
					TweenMax.fromTo(".science-ifblk-condition-in-animation > .passmark-in-animation" , 0.8,{rotationX: 0},{rotationX: 90,onComplete:function(){
						$(".science-ifblk-condition-in-animation > .passmark-in-animation").text("26");
						TweenMax.fromTo(".science-ifblk-condition-in-animation > .passmark-in-animation", 0.8, {rotationX : -90},{rotationX:0, onComplete: function() {
							$(".introjs-tooltiptext").append("<div></div>");
							var text = "";
							$(".science-ifblk-condition-in-animation").append("<span class='dynamic-tag'></span>");
							if (parseInt(subMarks) >= 26) {
								typing(".science-ifblk-condition-in-animation > span:last-child()", "is <b class='ct-code-b-blue'>true</b>", function() {
									$(".scienceIf > span").eq(1).effect("highlight", {color: '#003399'}, 1000, function () {
									$(".science-ifblk-condition1-in-animation > .subMark1").text(subName1);
									$(".science-ifblk-condition1-in-animation").removeClass("opacity00");
									$(".science-ifblk-condition1-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
											TweenMax.fromTo(".science-ifblk-condition1-in-animation > .subMarks1" , 0.5,{rotationX: 0},{rotationX: 90, onComplete:function(){
												$(".science-ifblk-condition1-in-animation > .subMark1").text(subMarks1);
												TweenMax.fromTo(".science-ifblk-condition1-in-animation > .subMarks1", 0.5, {rotationX : -90},{rotationX:0, onComplete: function() {
													TweenMax.fromTo(".science-ifblk-condition1-in-animation > .passmark1-in-animation" , 0.8,{rotationX: 0},{rotationX: 90,onComplete:function(){
														$(".science-ifblk-condition1-in-animation > .passmark1-in-animation").text("40");
														TweenMax.fromTo(".science-ifblk-condition1-in-animation > .passmark1-in-animation", 0.8, {rotationX : -90},{rotationX:0, onComplete: function() {
															$(".introjs-tooltiptext").append("<div></div>");
															var text = "";
															$(".science-ifblk-condition1-in-animation").append("<span class='dynamic1-tag'></span>");
															if (parseInt(subMarks1) >= 40) {
																typing(".science-ifblk-condition1-in-animation > span:last-child()", "is <b class='ct-code-b-blue'>true</b>", function() {
																	$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateConditionscience()>Next &#8594;</a>");
																});
															} else {
																typing(".science-ifblk-condition1-in-animation > span:last-child()", "is <b style='color:red;'>false</b>", function() {
																	$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateConditionscience()>Next &#8594;</a>");
																});
															} 
														}});
													}});
												}});
											}});
										});
									});
								}); } else {
								typing(".science-ifblk-condition-in-animation > span:last-child()", "is <b style='color:red;'>false</b>", function() {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateConditionscience()>Next &#8594;</a>");
								});
							}
						}});
					}});
				}});
			}});
		});
	});
}

function flipIfConditionsocial() {
	$(".socialIf > span:first-child()").effect("highlight", {color: '#003399'}, 1000, function () {
		$(".social-ifblk-condition-in-animation > .subMark").text(subName);
		$(".social-ifblk-condition-in-animation").removeClass("opacity00");
		$(".social-ifblk-condition-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
			TweenMax.fromTo(".social-ifblk-condition-in-animation > .subMark" , 0.5,{rotationX: 0},{rotationX: 90, onComplete:function() {
				$(".social-ifblk-condition-in-animation > .subMark").text(subMarks);
				TweenMax.fromTo(".social-ifblk-condition-in-animation > .subMark", 0.5, {rotationX : -90},{rotationX:0, onComplete: function() {
					TweenMax.fromTo(".social-ifblk-condition-in-animation > .passmark-in-animation" , 0.8,{rotationX: 0},{rotationX: 90,onComplete:function(){
						$(".social-ifblk-condition-in-animation > .passmark-in-animation").text("26");
						TweenMax.fromTo(".social-ifblk-condition-in-animation > .passmark-in-animation", 0.8, {rotationX : -90},{rotationX:0, onComplete: function() {
							$(".introjs-tooltiptext").append("<div></div>");
							var text = "";
							$(".social-ifblk-condition-in-animation").append("<span class='dynamic-tag'></span>");
							if (parseInt(subMarks) >= 26) {
								typing(".social-ifblk-condition-in-animation > span:last-child()", "is <b class='ct-code-b-blue'>true</b>", function() {
									$(".socialIf > span").eq(1).effect("highlight", {color: '#003399'}, 1000, function () {
										$(".social-ifblk-condition1-in-animation > .subMark1").text(subName1);
										$(".social-ifblk-condition1-in-animation").removeClass("opacity00");
										$(".social-ifblk-condition1-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
											TweenMax.fromTo(".social-ifblk-condition1-in-animation > .subMarks1" , 0.5,{rotationX: 0},{rotationX: 90, onComplete:function(){
												$(".social-ifblk-condition1-in-animation > .subMark1").text(subMarks1);
												TweenMax.fromTo(".social-ifblk-condition1-in-animation > .subMarks1", 0.5, {rotationX : -90},{rotationX:0, onComplete: function() {
													TweenMax.fromTo(".social-ifblk-condition1-in-animation > .passmark1-in-animation" , 0.8,{rotationX: 0},{rotationX: 90,onComplete:function(){
														$(".social-ifblk-condition1-in-animation > .passmark1-in-animation").text("40");
														TweenMax.fromTo(".social-ifblk-condition1-in-animation > .passmark1-in-animation", 0.8, {rotationX : -90},{rotationX:0, onComplete: function() {
															$(".introjs-tooltiptext").append("<div></div>");
															var text = "";
															$(".social-ifblk-condition1-in-animation").append("<span class='dynamic1-tag'></span>");
															if (parseInt(subMarks1) >= 40) {
																typing(".social-ifblk-condition1-in-animation > span:last-child()", "is <b class='ct-code-b-blue'>true</b>", function() {
																	$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateConditionsocial()>Next &#8594;</a>");
																});
															} else {
																typing(".social-ifblk-condition1-in-animation > span:last-child()", "is <b style='color:red;'>false</b>", function() {
																	$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateConditionsocial()>Next &#8594;</a>");
																});
															} 
														}});
													}});
												}});
											}});
										});
									});
								}); } else {
								typing(".social-ifblk-condition-in-animation > span:last-child()", "is <b style='color:red;'>false</b>", function() {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn2' onclick=evalateConditionsocial()>Next &#8594;</a>");
								});
							}
						}});
					}});
				}});
			}});
		});
	});
}

function flipPassCount() {
	$(".introjsNextBtn1").hide();
	var l = $(ifBlkId + " > span").eq(2).effect("highlight", {color: '#003399'}, 1000, function () {
		$("." + animationIfBlkName + "-ifblk-body-in-animation").removeClass("opacity00");
		$("." + animationIfBlkName + "-ifblk-body-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
			TweenMax.fromTo("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)", 0.8, {rotationX :0},{rotationX:-90, onComplete: function() {
				$("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)").text(passCount);
				TweenMax.fromTo("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)" , 0.8,{rotationX: -90},{rotationX: 0,onComplete:function() {
					$("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)").css("transform", "");
					$("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside").text(passCount + " + 1 ");
					passCount++;
					$("." + animationIfBlkName + "-ifblk-body-in-animation").append("<span class='dynamic-tag'></span>");
					typing("." + animationIfBlkName + "-ifblk-body-in-animation > span:last-child()", " = <b>" + passCount + "</b>", function() {
						$(".introjs-tooltiptext").append("<div></div>");
						$("." + animationIfBlkName + "-ifblk-body-in-animation" + " > .passCount-rightside").css("transform", "");
						$(".introjs-tooltipbuttons").append('<a class="introjs-button introjsNextBtn1" onclick=continueAction()>Next &#8594;</a>');
					});
				}});
			}});
		});
	});
}

function flipPassCountscience() {
	$(".introjsNextBtn1").hide();
	var l = $( ".scienceIf > span").eq(2).effect("highlight", {color: '#003399'}, 1000, function () {
		$(".science-ifblk-body-in-animation").removeClass("opacity00");
		$(".science-ifblk-body-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
			TweenMax.fromTo(".science-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)", 0.8, {rotationX :0},{rotationX:-90, onComplete: function() {
				$(".science-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)").text(passCount);
				TweenMax.fromTo(".science-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)" , 0.8,{rotationX: -90},{rotationX: 0,onComplete:function() {
					$(".science-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)").css("transform", "");
					$(".science-ifblk-body-in-animation" + " > .passCount-rightside").text(passCount + " + 1 ");
					passCount++;
					$(".science-ifblk-body-in-animation").append("<span class='dynamic-tag'></span>");
					typing(".science-ifblk-body-in-animation > span:last-child()", " = <b>" + passCount + "</b>", function() {
						$(".introjs-tooltiptext").append("<div></div>");
						$(".science-ifblk-body-in-animation" + " > .passCount-rightside").css("transform", "");
						$(".introjs-tooltipbuttons").append('<a class="introjs-button introjsNextBtn1" onclick=continueAction()>Next &#8594;</a>');
					});
				}});
			}});
		});
	});
}

function flipPassCountsocial() {
	$(".introjsNextBtn1").hide();
	var l = $(".socialIf > span").eq(2).effect("highlight", {color: '#003399'}, 1000, function () {
		$(".social-ifblk-body-in-animation").removeClass("opacity00");
		$(".social-ifblk-body-in-animation").effect("highlight", {color: '#003399'}, 1000, function () {
			TweenMax.fromTo(".social-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)", 0.8, {rotationX :0},{rotationX:-90, onComplete: function() {
				$(".social-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)").text(passCount);
				TweenMax.fromTo(".social-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)" , 0.8,{rotationX: -90},{rotationX: 0,onComplete:function() {
					$(".social-ifblk-body-in-animation" + " > .passCount-rightside > span:nth-child(1)").css("transform", "");
					$(".social-ifblk-body-in-animation" + " > .passCount-rightside").text(passCount + " + 1 ");
					passCount++;
					$(".social-ifblk-body-in-animation").append("<span class='dynamic-tag'></span>");
					typing(".social-ifblk-body-in-animation > span:last-child()", " = <b>" + passCount + "</b>", function() {
						$(".introjs-tooltiptext").append("<div></div>");
						$(".social-ifblk-body-in-animation" + " > .passCount-rightside").css("transform", "");
						$(".introjs-tooltipbuttons").append('<a class="introjs-button introjsNextBtn1" onclick=continueAction()>Next &#8594;</a>');
					});
				}});
			}});
		});
	});
}

function continueAction() {
	$(".introjsNextBtn1").addClass("hidden");
	continueActionCount++;
	if (continueActionCount == 1) {
		$(".introjs-tooltiptext").empty();
		var text = "Let us compare <b class='ct-code-b-yellow'>external_science_marks</b> with <b class='ct-code-b-yellow'>external_pass_mark</b> and then <b class='ct-code-b-yellow'>total_science_marks</b> with <b class='ct-code-b-yellow'>total_pass_mark</b>.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=continueAction()>Next &#8594;</a>");
		});
	} else if (continueActionCount == 2) { 
		var text = $(".scienceIf").removeClass("opacity00").html();
		typing(".scienceIf", text, function() {
			subName = "external_science_marks";
		  	ifBlkId = ".scienceIf";
		  	subMarks = $("#scienceMarks").text();
		  	subName1 = "total_science_marks";
			subMarks1 = $(".totalscienceMarks").text();
			flipIfConditionscience(subName, subMarks, ifBlkId,subName1,subMarks1);
		});
	} else if (continueActionCount == 3) {
		$(".introjs-tooltiptext").empty();
		var text = "Let us compare <b class='ct-code-b-yellow'>external_social_marks</b> with <b class='ct-code-b-yellow'>external_pass_mark</b> and then <b class='ct-code-b-yellow'>total_social_marks</b> with <b class='ct-code-b-yellow'>total_pass_mark</b>.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=continueAction()>Next &#8594;</a>");
		});
	} else if (continueActionCount == 4) { 
		var text = $(".socialIf").removeClass("opacity00").html();
		typing(".socialIf", text, function() {
			subName = "external_social_marks";
		  	ifBlkId = ".socialIf";
		  	subMarks = $("#socialMarks").text();
		  	subName1 = "total_social_marks" 
			subMarks1 = $(".totalsocialMarks").text();
			flipIfConditionsocial(subName, subMarks, ifBlkId,subName1,subMarks1);
		});
	} else {
		$(".introjs-tooltiptext").append("<br/><div></div>");
		var text = "Finally the value of <b class='ct-code-b-yellow'>pass_count</b> is " + passCount +  ".";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-nextbutton").show();
		});
	}
}

function evalateCondition() {
	$(".introjsNextBtn2").hide();
	if (parseInt(subMarks) >= 40 && parseInt(subMarks1) >= 26) {
		text = "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>,<br>" 
				+ " control enters into <b class='ct-code-b-yellow'>if-body</b> and updates " 
				+ "<b class='ct-code-b-yellow'>pass_count</b> by value <b class='ct-code-b-yellow'>1.</b>";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=flipPassCount()>Next &#8594;</a>");
		});
	} else {
		text = "Since the condition evaluates to <b style='color:red;'>false</b>, there is no change in the <b class='ct-code-b-yellow'>pass_count</b>.";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=continueAction()>Next &#8594;</a>");
		});
	}
}

function evalateConditionscience() {
	$(".introjsNextBtn2").hide();
	if (parseInt(subMarks) >= 40 && parseInt(subMarks1) >= 26) {
		text = "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>,<br>" 
				+ " control enters into <b class='ct-code-b-yellow'>if-body</b> and updates " 
				+ " <b class='ct-code-b-yellow'>pass_count</b> by value <b class='ct-code-b-yellow'>1.</b>";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=flipPassCountscience()>Next &#8594;</a>");
		});
	} else {
		text = "Since the condition evaluates to <b style='color:red;'>false</b>, there is no change in <b class='ct-code-b-yellow'>pass_count</b>.";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=continueAction()>Next &#8594;</a>");
		});
	}
}

function evalateConditionsocial() {
	$(".introjsNextBtn2").hide();
	if (parseInt(subMarks) >= 40 && parseInt(subMarks1) >= 26) {
		text = "Since the condition evaluates to <b class='ct-code-b-yellow'>true</b>,<br>" 
				+ " control enters into <b class='ct-code-b-yellow'>if-body</b> and updates " 
				+ "<b class='ct-code-b-yellow'>pass_count</b> by value <b class='ct-code-b-yellow'>1.</b>";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=flipPassCountsocial()>Next &#8594;</a>");
		});
	} else {
		text = "Since the condition evaluates to <b style='color:red;'>false</b>, there is no change in the <b class='ct-code-b-yellow'>pass_count</b>.";
		typing(".introjs-tooltiptext > div:last-child()", text, function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button introjsNextBtn1' onclick=continueAction()>Next &#8594;</a>");
		});
	}
}

function myfunction() {
	$('.nextBtn5').remove();
	var text = "<br/>Let us calculate the <b class='ct-code-b-yellow'>total marks</b> obtained in <b class='ct-code-b-yellow'>science</b> subject."
		typing(".introjs-tooltiptext > div:last-child", text, function() {
			var text = $(".totalscienceMark").removeClass("opacity00").html();
			typing(".totalscienceMark", text, function() {
				$(".totalscienceMarks").text("external_science_marks + internal_science_marks");
				setTimeout(function() {
					var totalscience = parseInt($("#scienceMarks").text())+parseInt($("#internalscienceMarks").text());
					$(".totalscienceMarks").text($("#scienceMarks").text()+'+'+$("#internalscienceMarks").text());
					setTimeout(function() {	
						$(".totalscienceMarks").text(totalscience);
						TweenMax.fromTo(".totalscienceMarks",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function(){
							$('.introjs-tooltipbuttons').append("<a  class='introjs-button nextBtn6' onclick = 'myfunction1()'>Next&#8594;</a>");
						}});
					},1000);
				},1000);
			});
		});
	}

function myfunction1() {
	$('.nextBtn6').remove();
	var text = "<br/>Let us calculate the <b class='ct-code-b-yellow'>total marks</b> obtained in <b class='ct-code-b-yellow'>social</b> subject."
	typing(".introjs-tooltiptext > div:last-child", text, function() {
		var text = $(".totalsocialMark").removeClass("opacity00").html();
		typing(".totalsocialMark", text, function() {
			$(".totalsocialMarks").text("external_social_marks + internal_social_marks");
			setTimeout(function() {
				var totalsocial = parseInt($("#socialMarks").text())+parseInt($("#internalsocialMarks").text());
				$(".totalsocialMarks").text($("#socialMarks").text()+'+'+$("#internalsocialMarks").text());
				setTimeout(function() {	
					$(".totalsocialMarks").text(totalsocial);
					TweenMax.fromTo(".totalsocialMarks",0.5,{rotationX:-90},{delay : 0.5, rotationX:0,opacity:1,onComplete:function(){
						$(".introjsNextBtn").removeClass("hidden"); 
					}});
				},1000);
			},1000);
		});
	});
}

function animate1() {
	$('.animation-nextbtn1').remove();
	introjs.nextStep();
}