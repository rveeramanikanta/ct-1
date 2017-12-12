var lang;
var dequeueLinkedListReady = function() {
	lang = getURLParameter("lang");
	initIntroJS();
	
	if (lang == 'cpp') {
		$('#injectElsePrintf, #pushElsePrintf').text('cout << "Successfully inserted.";');
		$("#popElsePrintf, #ejectElsePrintf").html('cout << "Deleted value = " << temp -> next;');
		$('#displayElsePrintf').text('cout << "Elements are : ";');
		$('#displayWhilePrintf').html('cout << temp -&gt; info << " ";');
		$('#displayIfPrintf').text('cout << "Queue is empty.";');
		$('#popIfPrintf, #injectIfPrintf, #pushIfPrintf, #ejectIfPrintf').text('cout << "Queue is underflow.";');
	}
	
	$("#injectText").on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	$('input').attr("disabled", true);
}

function getURLParameter(sParam) { //choose the language like c or cpp...etc 
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

var insertedVal, flag = false; 

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#queueInit",
			intro : "",
			position : "right",
			tooltipClass: "hide"
		},{
			element: "#strcutSpan",
			intro : "",
			position : "right"
		},{
			element: "#typeDefDec",
			intro : "",
			position : "right",
			tooltipClass : "hide",
		},{
			element: "#declareFirstAndRearNode",
			intro : "",
			position : "right",
			tooltipClass : "hide",
		},{
			element : "#animationDiv",
			intro : "",
			position : "left",
			tooltipClass : "hide",
		},{
			element : "#btnsDiv",
			intro : "",
			position : "left"
		}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "queueInit":
			$(".introjs-nextbutton").addClass("introjs-disabled")
			setTimeout(function() {
				introjs.nextStep();
			},1500);
			break;
		case "strcutSpan" :
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This is the declaration of a new <y>struct</y> type <y>queue</y>.<br><br>"
					+ "<ul><li><y>info</y> field is used to hold the <y>data</y> inside the linked list.</li>"
					+ "<li><y>next</y> field is used to keep the <y>address</y> of <y>next</y> node.</li></ul>";
				typing($(".introjs-tooltiptext"), text, function() {
					$(".introjs-nextbutton").show();
				});
			});
		break;
		case 'typeDefDec':
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltip").removeClass('hide');
				text = 'The <y>typedef</y> creates an <y>alias</y> name as a <y>node</y> to the <y>struct queue</y> which is a <y>pointer</y>'
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case 'declareFirstAndRearNode':
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-tooltip').removeClass('hide');
				text = "Here, we are declaring and initializing struct pointers <y>front</y> and <y>rear</y> to <y>NULL</y>";
				typing('.introjs-tooltiptext', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "btnsDiv":
			$('input').val("");
			$("input").attr("disabled", false);
			$('.function').addClass('hide');
			$(".arrow").remove();
			$(".introjs-nextbutton").hide();
			$(".background-color-yellow").removeAttr("style").removeClass("background-color-yellow");
			if ($("#injectText").is(":disabled") || $("#pushText").is(":disabled") ) {
				doPlayPause();
			}
			$("#btnsDiv [disabled]").removeAttr("disabled");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 5) {
					var text = "Provide a number to be inserted.";
					typing(".introjs-tooltiptext", text, function() {
						$("#injectText").focus();
					});
				} else {
					var text = "Please choose any operation.";
					typing(".introjs-tooltiptext", text, function() {
						doPlayPause();
					});
				}
			});
			break;
		case "lastCall":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					doPlayPause();
					
				}, 200);
			});
			break;
		case "injectFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				injectAndPushFirstCon('inject');
			});
			break;
		case "injectBlk1":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<ul></ul>");
				arrow("#injectinitTemp", "#injectIf", function() {
					injectStep1('inject', address.length - 1);
				});
			});
			break;
		case "injectElseIfElseBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow("#injecttempNextInit", "#injectElseIf", function() {
					$(".introjs-tooltiptext").append("<ul></ul>");
					$(".introjs-tooltiptext ul li *").removeAttr("id");
					$(".introjs-tooltiptext ul").append("<li>" 
							+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'><span  id='tooltipFront'>front</span>" 
							+ " == NULL</span></li>");
					travel("#injectSecondIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
						flip("#tooltipFront", queue.length == 1 ? "NULL" : address[0], function() {
							var text = "";
							if (queue.length == 1) {
								text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
							} else {
								text = "Since it evaluates to <r>false</r>."
							}
							$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								if (queue.length == 1) {
									fromId = "#injectFrontInit";
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='injectElseIfBlk()'>Next &#8594;</a>")
								} else {
									fromId = "#injectRearNextInit"
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='injectElseIfElseBlk()'>Next &#8594;</a>")
								}
							});
						});
					});
				});
			});
			break;
		case "injectElsePrintfBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow(fromId, "#injectRearInit", function() {
					$("#injectRearInit").addClass("background-color-yellow");
					var text = "<ul><li>The <y>address</y> contained in the <y>temp</y> (<y>"+ address[address.length - 1] 
								+"</y>) is assigned to the <y>rear</y> node.</li></ul>"
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='changeRearNext()'>Next &#8594;</a>")
					});
				});
			});
			break;
		case "popFun":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				popAndEnjectFirstCommonFunction('pop');
			});
			break;
		case "popBlk1" :
			popStep1("pop");
		break;
		case "popElseIfElseBlk":
			popAndEjectSecondIfCondition('pop');
			break;
		case "popElsePrintfBlk":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				popAndEjectIfOneNode('pop', 0);
			});
			break;
		case "displayFun":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "By using this code we are <y>print</y> the elements in the <y>Queue</y>.";
				typing(".introjs-tooltiptext", text, function() {
					arrow("#displayIf", "#displayIf", function() {
						$(".introjs-tooltiptext").append("<ul><li><span style='font-family: monospace; font-weight: bold;'> <span id='tooltipFront'>front</span> == NULL </span></li></ul>");
						travel("#displayIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function() {
							flip("#tooltipFront", queue.length == 0 ? "NULL" : address[0], function() {
								var text;
								if (queue.length == 0) {
									text = "Evaluates to <y>true</y>, the control enters into the <y>if-block</y>.";
								} else {
									text = "Evaluates to <r>false</r>, the control enters into the <y>else-block</y>.";
								}
								$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
								typing($(".introjs-tooltiptext ul li:last-child div:last"), text, function() {
									if (queue.length == 0) {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='displayIfPart()'>Next &#8594;</a>");
									} else {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='displayElsePart()'>Next &#8594;</a>");
									}
								});
							});
						});
					});
				});
			});
			break;
		case "displayBlk2":
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow("#displayElsePrintf", "#displayWhile", function() {
					var text = "This <y>while-loop</y> is repeated untill the <y>temp</y> value is not <y>NULL</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltiptext").append("<ul><li></li></ul>");
						var text = "It prints the <y>info</y> value of each <y>member</y>.";
						typing($(".introjs-tooltiptext ul li:last"), text, function() {
							$(".introjs-tooltiptext ul").append("<li></li>");
							var text = "Next traverse the <y>temp</y> to the <y>next node</y>.";
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
								var text = "";
								for (var i = 0; i < queue.length; i++) {
									text = text + queue[i] + " "; 
								}
								$("#output").append("<div class='opacity00' style='display:inline-block;'>" + text + "<br/></div>");
							});
						});
					});
				});
			});
			break;
		case "ejectFun" :
			$(".introjs-helperLayer").one("transitionend", function() {
				popAndEnjectFirstCommonFunction('eject');
			});
			break;
		case "ejectBlk1" :
			popStep1("eject");
			break;
		case "ejectElseIfElseBlk" :
			popAndEjectSecondIfCondition('eject');
			break;
		case "ejectElsePrintfBlk" :
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				popAndEjectIfOneNode('eject', (rearVal - 1));
			});
			break;
		case "ejectBlk2" :
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow("#ejectElsePrintf", "#ejectWhile", function() {
					var text = "This <y>while-loop</y> is repeated untill the <y>temp -> next</y> value is not <y>rear</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-tooltiptext").append("<ul><li></li></ul>");
							var text = "Next traverse the <y>temp</y> to the <y>next node</y>.";
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
					});
				});
			});
			break;
		case "ejectSetRearToNull" :
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow("#ejectWhile", "#enjectrearToTmp", function() {
					$("#enjectrearToTmp").addClass("background-color-yellow");
					var text = "<ul><li>Here, <y>rear</y> pointer points to the </y>temp</y>.</li></ul>";
					typing(".introjs-tooltiptext", text, function() {
						arrow("#enjectrearToTmp", "#enjectTempToRerNxt", function() {
							$("#enjectTempToRerNxt").addClass("background-color-yellow");
							$(".introjs-tooltiptext ul").append("<li></li>");
							var text = "Assign <y>rear -> next</y> to <y>temp</y>.";
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								arrow("#enjectTempToRerNxt", "#enjectRearNxtNull", function() {
									$("#enjectRearNxtNull").addClass("background-color-yellow");
									$(".introjs-tooltiptext ul").append("<li></li>");
									var text = "Assign <y>NULL</y> to the <y>rear -> next</y>.";
									typing($(".introjs-tooltiptext ul li:last"), text, function() {
										getIntrojsStep("#animationDiv", "", "", "hide");
										$(".introjs-nextbutton").removeClass("introjs-disabled").show();
									});
								});
							});
						});
					});
				});
			});
			break;
		case "pushFun" :
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				injectAndPushFirstCon('push');
			});
			break;
		case "pushBlk1" :
			$(".introjs-nextbutton").hide();
			introjs.refresh();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<ul></ul>");
				arrow("#pushinitTemp", "#pushIf", function() {
					injectStep1('push', 0);
				});
			});
			break;
		case "pushElsePrintfBlk" :
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				arrow("#pushtempNextInit", "#pushFrontInit", function() {
					$("#pushFrontInit").addClass("background-color-yellow");
					var text = "<ul><li>The <y>address</y> contained in the <y>temp</y> (<y>"+ address[0] 
								+"</y>) is assigned to the <y>front</y> node.</li></ul>"
					typing(".introjs-tooltiptext", text, function() {
						arrow("#pushFrontInit", "#pushElsePrintf", function() {
							$("#pushElsePrintf").addClass("background-color-yellow");
							$(".introjs-tooltiptext ul li:last").append("<li></li>");
							var text = "Display the message in the console <y>Successfully inserted</y>.";
							typing($(".introjs-tooltiptext ul li:last"), text, function() {
								$("#output").append("<div class='opacity00'>Successfully inserted.</div>");
								rearVal++;
								$("#pushFrontInit, #pushElsePrintf").removeClass("background-color-yellow").removeAttr('style');
								getIntrojsStep("#animationDiv", "", "", "hide");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						});
					});
				});
			});
			break;
		case "animationDiv":
			$(".introjs-nextbutton").hide();
			$("#btnsDiv .btn").attr("disabled", "disabled");
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#canvas').removeClass('opacity00');
				if (introjs._currentStep == 4) {
					setTimeout(function() {
						introjs.nextStep();
					}, 800);
				} else if (introjs._introItems[introjs._currentStep].tooltipClass == "hide") {
						doPlayPause();
				} else {
					doPlayPause();
					setTimeout(function() {
						var text = "Successfully clear the <y>queue</y>.";
						typing(".introjs-tooltiptext", text, function() {
						});
					}, 1000);
				}
			});
			break;
		case "outputDiv":
			$(".background-color-yellow").removeClass("background-color-yellow");
			$("#outputDiv, #ele").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".output-console-body").scrollTo($("#output > div:last-child()"), 500, function() {
					$("#output > div:last-child()").removeClass("opacity00").hide().fadeIn(1000, function() {
						if($("#output > div:last-child() *").length == 1) {
							$("#output").append("<br/>");
						}
						doPlayPause();
					});
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
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}


function injectStep1(selector, index) {
	$(".user-btn").remove();
	$(".background-color-yellow").removeClass("background-color-yellow");
	$("#"+ selector +"FirstIfCndtn").addClass("background-color-yellow");
	$(".introjs-tooltiptext ul").append("<li></li>");
	$(".introjs-tooltiptext ul li:last-child").append("<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>" 
			+ "<span id='tooltipTemp'>temp</span> == NULL</span>");
	travel("#"+ selector +"FirstIfCndtn", "#tooltipCndtn", function () {
		flip("#tooltipTemp", (address[index]), function() {
			$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
			var text = "Evaluates to <r>false</r>, the control enters into the <y>else-block</y>.";
			typing($(".introjs-tooltiptext ul li:last-child > div:last"), text, function() {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='injectStep2(\""+ selector +"\")'>Next &#8594;</a>")
			});
		});
	});
}


function injectStep2(selector) {
	$(".user-btn").remove();
	$("#"+ selector +"FirstIfCndtn").removeClass("background-color-yellow").removeAttr('style');
	$("#"+ selector +"Blk1FirstIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#"+ selector +"If", "#"+ selector +"tempInfoInit", function() {
		$("#"+ selector +"tempInfoInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, integer value <y>element</y> (<y>"+ insertedVal +"</y>) is stored in the <y>info</y> field of <y>temp</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			arrow("#"+ selector +"tempInfoInit", "#"+ selector +"tempNextInit", function() {
				$("#"+ selector +"tempNextInit").addClass("background-color-yellow");
				$(".introjs-tooltiptext ul").append("<li></li>");
				if (selector == 'inject') {
					var text = "Set the <y>next</y> field of <y>temp</y> into the <y>NULL</y>.";
				} else {
					var text = "Set the <y>next</y> field of <y>temp</y> into the <y>front</y> (<y>"+ address[0] +"</y>).";
				}
				typing($(".introjs-tooltiptext ul li:last"), text, function() {
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		});
	});
}

function injectElseIfBlk() {
	$(".user-btn").remove();
	$("#injectSecondIfCndtn").removeAttr("style");
	arrow("#injectElseIf", "#injectFrontInit", function() {
		$("#injectFrontInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "The <y>address</y> contained in <y>temp</y> (<y>"+ address[address.length - 1] +"</y>) is assigned to <y>front</y> node";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function injectElseIfElseBlk() {
	$(".user-btn").remove();
	$("#injectSecondIfCndtn").removeAttr("style");
	arrow("#injectElseIf", "#injectRearNextInit", function() {
		$("#injectRearNextInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Store the <y>address</y> contained in <y>temp</y> (<y>"+ address[address.length - 1]
					+"</y>) into the <y>next</y> field of <y>rear</y> node.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}


function changeRearNext() {
	$(".user-btn").remove();
	arrow("#injectRearInit", "#injectElsePrintf", function() {
		$("#injectElsePrintf").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul li:last").append("<li></li>");
		var text = "Display the message in the console <y>Successfully inserted</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			$("#output").append("<div class='opacity00'>Successfully inserted.</div>");
			rearVal++;
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function popStep1(selector) {
	$(".user-btn").remove();
	$("#" + selector+ "TempDef").removeClass("background-color-yellow");
	arrow("#" + selector+ "TempDef", "#" + selector+ "If", function() {
		$("#" + selector+ "IfCndtn").addClass("background-color-yellow");
		$(".introjs-tooltiptext").append("<ul></ul>");
		$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn' style='font-family: monospace; font-weight: bold'>" 
				+ "<span id='tooltipFront'>front</span> == NULL</span></li>");
		travel("#" + selector+ "IfCndtn", ".introjs-tooltiptext ul", function () {
			flip("#tooltipFront", queue.length == 0 ? "NULL" : address[0], function() {
				var text = "";
				if (queue.length == 0) {
					text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
				} else {
					text = "Since it evaluates to <r>false</r>, the control enters into <y>else-block</y>."
				}
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				typing($(".introjs-tooltiptext ul li div").last(), text, function() {
					if (queue.length == 0) {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='popIfBlk(\""+ selector + "\")'>Next &#8594;</a>")
					} else {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='popElseBlk(\""+ selector +"\")'>Next &#8594;</a>")
					}
				});
			});
		});
	});
}

function popIfBlk(selector) {
	$(".user-btn").remove();
	$("#"+ selector +"IfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#"+ selector +"If", "#"+ selector +"IfPrintf", function() {
		$("#"+ selector +"IfPrintf").addClass("background-color-yellow");
		$("#output").append("<div class='opacity00'>Queue is underflow.</div>");
		$("#"+ selector +"IfPrintf").removeClass("background-color-yellow").removeAttr('style');
		getIntrojsStep("#outputDiv", "", "", "hide");
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}

function popElseBlk(selector) {
	$(".user-btn").remove();
	$("#"+ selector +"IfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#"+ selector +"If", "#"+ selector +"TempInit", function() {
		$("#"+ selector +"TempInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we point this temporary node <y>temp</y> to the <y>front</y> of the <y>queue</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function popElseIfBlk(selector) {
	$(".user-btn").remove();
	$("#"+ selector +"lseIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#"+ selector +"ElseIf", "#"+ selector +"RearFrontInit", function() {
		$("#"+ selector +"RearFrontInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Here, we initialize the <y>front</y> and <y>rear</y> into <y>NULL</y>.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function popElseIfElseBlk() {
	$(".user-btn").remove();
	$("#poplseIfCndtn").removeClass("background-color-yellow").removeAttr("style");
	arrow("#popElseIf", "#popFrontInit", function() {
		$("#popFrontInit").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "Store the <y>address</y> contained in <y>next</y> field of <y>front</y> into <y>front</y> node";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			getIntrojsStep("#animationDiv", "", "", "hide");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function ejectElseIfElseBlk() {
	$(".user-btn").remove();
	arrow("#ejectElseIf", "#ejectWhile", function() {
		$('#ejectWhile, #ejectTempNext, #close').addClass("background-color-yellow");
		var text = "This <y>while-loop</y> is repeated untill the <y>temp -> next</y> value is not <y>rear</y>.";
		typing(".introjs-tooltiptext", text, function() {
			$(".introjs-tooltiptext").append("<ul><li></li></ul>");
			var text = "Next traverse the <y>temp</y> to the <y>next node</y>.";
			typing($(".introjs-tooltiptext ul li:last"), text, function() {
				$(".introjs-tooltiptext ul").append("<li></li>");
				if (address.length == 2) {
					var text = "Here, the condition is evaluates to <y>false</y>."
				} else {
					var text = "Here, the condition is evaluates to <y>true</y>." 
				}
				typing($(".introjs-tooltiptext ul li:last"), text, function() {
					getIntrojsStep("#animationDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		});
	});
}


function displayIfPart() {
	$(".user-btn").remove();
	$("#displayIfCndtn").removeAttr("style");
	arrow("#displayIf", "#displayIfPrintf", function() {
		$("#displayIfPrintf").addClass("background-color-yellow");
		$("#output").append("<div class='opacity00'>Queue is empty.</div>");
		getIntrojsStep("#outputDiv", "", "", "hide");
		$(".introjs-nextbutton").removeClass("introjs-disabled").show();
	});
}

function displayElsePart() {
	$(".user-btn").remove();
	$("#displayIfCndtn").removeAttr("style");
	arrow("#displayIf", "#displayFrontToTemp", function() {
		$("#displayFrontToTemp").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "The <y>address</y> contained in <y>front</y> (<y>"+ address[0] +"</y>) is assigned to <y>temp</y> node.";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			arrow("#displayFrontToTemp", "#displayElsePrintf", function() {
				$("#displayElsePrintf").addClass("background-color-yellow");
				$("#output").append("<div class='opacity00' style='display: inline-block;' id='ele'>Elements in the queue : </div>");
				getIntrojsStep("#animationDiv", "", "", "hide");
				$(".introjs-nextbutton").removeClass("introjs-disabled").show();
			});
			
		});
	});
}

function popAndEnjectFirstCommonFunction(selector) {
	if (selector == 'pop') {
		var text = "By using this code we are <y>removing</y> the element from the <span class='ct-code-b-yellow'>queue</span> at <y>front</y> side.";
	} else {
		var text = "By using this code we are <y>removing</y> the element from the <span class='ct-code-b-yellow'>queue</span> at <y>rear</y> side.";
	}
	typing(".introjs-tooltiptext", text, function() {
		arrow("#"+ selector +"TempDef", "#"+ selector +"TempDef", function() {
			$("#"+ selector +"TempDef").addClass("background-color-yellow");
			$(".introjs-tooltiptext").append("<ul><li></li></ul>");
			var text = "Create a new temporary <y>struct</y> variable <y>temp</y> with value <y>NULL</y>.";
			typing($(".introjs-tooltiptext ul li:last"), text, function() {
				flag = true;
				getIntrojsStep("#animationDiv", "", "", "hide");
				$(".introjs-nextbutton").removeClass("introjs-disabled").show();
			});
		});
	});
}

function popAndEjectSecondIfCondition(selector) {
	$(".introjs-nextbutton").hide();
	introjs.refresh();
	$(".introjs-helperLayer").one("transitionend", function() {
		$("#"+ selector +"TempInit").removeClass("background-color-yellow").removeAttr("style");
		$("#"+ selector +"ElseIfCndtn").addClass("background-color-yellow");
		arrow("#"+ selector +"TempInit", "#"+ selector +"ElseIf", function() {
			$(".introjs-tooltiptext").append("<ul></ul>");
			$(".introjs-tooltiptext ul").append("<li><span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>" 
					+ "<span id='tooltipFront'>front</span> == " 
					+ "<span id='tooltipRear'>rear</span></span></li>");
			travel("#"+ selector +"ElseIfCndtn", $(".introjs-tooltiptext ul li:last-child span"), function () {
				$("#"+ selector +"ElseIfCndtn").removeClass("background-color-yellow").removeAttr('style');
				flip("#tooltipFront", address[0], function() {
					flip("#tooltipRear", address[address.length - 1], function() {
						var text = "";
						if (address[address.length - 1] == address[0]) {
							text = "Since it evaluates to <y>true</y>, the control enters into <y>if-block</y>."
						} else {
							text = "Since it evaluates to <r>false</r>, the control enters into <y>else-block</y>."
						}
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							if (address[address.length - 1] == address[0]) {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='popElseIfBlk(\""+ selector + "\")'>Next &#8594;</a>")
							} else {
								if (selector == 'pop') {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='popElseIfElseBlk()'>Next &#8594;</a>")
								} else {
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='ejectElseIfElseBlk()'>Next &#8594;</a>")
								}
							}
						});
					});
				});
			});
		});
	});
}

function popAndEjectIfOneNode(selector, index) {
	$(".background-color-yellow").removeClass("background-color-yellow");
	arrow("#"+ selector +"RearFrontInit", "#"+ selector +"ElsePrintf", function() {
		$("#"+ selector +"ElsePrintf").addClass("background-color-yellow");
		var text = "<ul><li>Finally print deleted element <y>"+ queue[index] +"</y>.</li></ul>";
		typing(".introjs-tooltiptext", text, function() {
			arrow("#"+ selector +"ElsePrintf", "#"+ selector +"RemoveTemp", function() {
				$("#"+ selector +"RemoveTemp").addClass("background-color-yellow");
				$(".introjs-tooltiptext ul").append("<li></li>");
				var text = "Delete the <y>temp</y> node.";
				typing($(".introjs-tooltiptext ul li:last"), text, function() {
					$("#"+ selector +"ElsePrintf").addClass("background-color-yellow");
					if (selector == 'pop') {
						$("#output").append("<div class='opacity00'>Deleted value at front = " + queue.splice(index, 1) + ".</div>");
					} else {
						$("#output").append("<div class='opacity00'>Deleted value at rear = " + queue.splice(index, 1) + ".</div>");
					}
					address.splice(index, 1);
					rearVal--;
					getIntrojsStep("#outputDiv", "", "", "hide");
					$(".introjs-nextbutton").removeClass("introjs-disabled").show();
				});
			});
		});
	});
}

function injectAndPushFirstCon(selector) {
	insertedVal = $("#"+ selector +"Text").val();
	if (selector == 'inject') {
		var text = "Here, we are <y>inserting</y> the given element (<y>"+ insertedVal +"</y>) into the <y>queue</y> at <y>rear</y> side.";
	} else {
		var text = "Here, we are <y>inserting</y> the given element (<y>"+ insertedVal +"</y>) into the <y>queue</y> at <y>front</y> side.";
	}
	typing(".introjs-tooltiptext", text, function() {
		$(".introjs-tooltiptext").append("<ul style='font-family: monospace;'><li><span>int element</span></li></ul>");
		travel("#"+ selector +"Parameter", $(".introjs-tooltiptext ul li:last-child span"), function () {
			arrow("#"+ selector +"TempDef", "#"+ selector +"TempDef", function() {
				$(".introjs-tooltiptext ul li:last-child span").append(" = <span><y>" + insertedVal + "</y></span>");
				$("#"+ selector +"Parameter").css("background-color", "");
				$(".introjs-tooltiptext ul li *").removeAttr("id");
				$("#"+ selector +"TempDef, #"+ selector +"initTemp").addClass("background-color-yellow");
				$(".introjs-tooltiptext ul").append("<li></li>");
				var text = "Create and allocate memory for struct variable <y>temp</y>";
				typing($(".introjs-tooltiptext ul li:last"), text, function() {
					arrow("#"+ selector +"TempDef", "#"+ selector +"initTemp", function() {
						getIntrojsStep("#animationDiv", "", "", "hide");
						$(".introjs-nextbutton").removeClass("introjs-disabled").show();
					});
				});
			});
		});
	});
}
