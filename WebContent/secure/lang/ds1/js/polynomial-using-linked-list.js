var lang, fromId, test =  true;
var callCount = buttonName = outputCount = printCount = 1;

var polynomialUsingLinkedList = function() {
	lang = getURLParameter("lang");
	initIntroJS();
}

function getURLParameter(sParam) { // choose the language like c or cpp...etc
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
			element : "#title",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#polyInit",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#strcutSpan",
			intro : "",
		},{
			element : "#typeDefDec",
			intro : "",
		},{
			element : "#preMain",
			intro : "",
		},{
			element : "#animationDiv",
			introjs : "",
			position : "left",
			animateStep : "headDec",
			tooltipClass : "hide"
		}]
	});
	introjs.onafterchange(function(targetElement) {
				$(".introjs-nextbutton").hide();
				var elementId = targetElement.id;
				switch (elementId) {
				case "title":
					$(".introjs-tooltip").removeClass('hide');
					var text = "Here, in this demo we will learn the working of <y>Polynomial</y> using <y>Linked List</y>.";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					});
				break;
				case "polyInit":
					$(".introjs-helperLayer").one("transitionend", function() {
						setTimeToIntroGoesNextStep();
					});
				break;
				case "strcutSpan":
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "This is the declaration of a new <y>struct</y> type <y>polynomial</y>.<br><br>"
								+ "<ul><li><y>coeff</y> field is used to hold the <y>coefficient</y> inside the linked list.</li>"
								+ "<li><y>exp</y> field is used to hold the <y>Exponent </y> inside the linked list.</li>"
								+ "<li><y>next</y> field is used to keep the <y>address</y> of <y>next</y> node.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				break;
				case "typeDefDec":
					$(".introjs-helperLayer").one("transitionend", function() {
						$(".introjs-tooltip").removeClass('hide');
						text = 'The <y>typedef</y> creates an <y>alias</y> name as a <y>node</y> to the '
								+ '<y>struct poly</y> which is a <y>pointer</y>'
						typing(".introjs-tooltiptext", text,function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "preMain":
					$('#preMain').removeClass("hide").append('<span id="headsDex">poly head1 = NULL, head2 = NULL,<br/> head3 = NULL;</span>'
							+'\n<span id="headsDes"></span>');
					introjs.refresh();
					$(".introjs-helperLayer").one("transitionend", function() {
						var text = "Here, we are declaring <y>three</y> pointer variables <y>head1</y>, <y>head2</y> and "
									+ "<y>head3</y> and initialize it to <y>NULL</y>.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				break;
				case "animationDiv":
					$("#btnsDiv, .btn").attr("disabled", "disabled");
					$("#preMain").removeClass("opacity00");
					$(".introjs-helperLayer").one("transitionend", function() {
						var animateStep = introjs._introItems[introjs._currentStep].animateStep;
						switch (animateStep) {
							case "headDec":
								$('#canvas').removeClass("opacity00");
								setTimeToIntroGoesNextStep();
								introNextSteps("#btnsDiv", "", "left");
							break;
							case "head1Null":
							case "memoryAllocation":
							case "StoreValues":
							case "addTermMethod":
							case "tempToHead":
							case "addTermWhileLoop":
							case "ifP1EqualToNull":
							case "ifP1ExpAndTempExpSame":
							case "ifP1EqP2":
							case "returnHead":
							case "callBtnDiv":
							case "print":
							case "printAnimation":
							case "displayVal":
								$("#createinitTemp , #temp, #console1, #readConsole1").removeClass("background-color-yellow");
								if (ch != 'n'&& animateStep == "StoreValues") {
									$('#testBtn').click();
								}
								if ((nodeCount != 0 && animateStep == "memoryAllocation") ||  animateStep == "callBtnDiv") {
									$('.btn').attr("disabled", false);
									$('#createBtn').click();
								}
								if (animateStep == "returnHead") {
									doPlayPause();
									setTimeout(function() {
										$('.btn').attr("disabled", false);
										$('#createBtn').click();
										
									},3000);
								} else {
									doPlayPause();
								}
							break;
						}
					});
				break;
				case "btnsDiv":
					$(".introjs-helperLayer").one("transitionend", function() {
						$(".introjs-tooltip").removeClass("hide");
						var text = "Click on any button.";
						typing(".introjs-tooltiptext", text, function() {
							$('#btnsDiv').removeClass("opacity00");
							$("#preTemp").addClass("hide");
							$("#preMain").removeClass("opacity00").removeAttr("style");
							$("#headsDes").empty();
							$("#btnsDiv, .btn").removeAttr("disabled");
							printCount = 1;
							if (!test) {
								callCount = 1;
								createButtonFlag = false;
								test = true;
							}
						});
					});
					break;
				case "createInMain":
					$(".introjs-helperLayer").one("transitionend", function() {
						doPlayPause();
					});
				break;
				case "displayInMain" :
					$("#preMain").removeClass("opacity hide").removeAttr("style")
					$(".introjs-helperLayer").one("transitionend", function() {
						introNextSteps("#print"+ printCount +"List", "", "");
						setTimeToIntroGoesNextStep();
					});
				break;
				case "print"+ printCount +"List" :
					$(".introjs-helperLayer").one("transitionend", function() {
						$(".introjs-tooltip").removeClass("hide");
						var value;
						if (printCount == 1) {
							value = (address1.length != 0) ? address1[0] : "null";
						} else {
							value = (address2.length != 0) ? address2[0] : "null";
						}
						text = "Here, we are calling <y>print()</y>method and passing an argument <y>head"+ callCount 
						+ "</y> (i.e <y>"+ value +"</y>)";
						typing(".introjs-tooltiptext", text, function() {
							$("#preTemp").removeClass("hide").removeAttr("style");
							flip("#head" + printCount, value, function() {
								(printCount == 1) ? printCount++ : printCount = 1;
								buttonName = "displayBtn";
								introNextSteps("#preTemp", "", "right");
								//introNextSteps("#animationDiv", "print", "");
								$(".introjs-nextbutton").show();
							})
						});
					});
				break;
				case "print" + callCount:
					$(".introjs-tooltip").removeClass("hide")
					$(".introjs-helperLayer").one("transitionend", function() {
						introNextSteps("#outputDiv", "text" + callCount, "");
						setTimeToIntroGoesNextStep();
					});
				break;
				case "outputDiv":
					$(".introjs-helperLayer").one("transitionend", function() {
						var animateStep = introjs._introItems[introjs._currentStep].animateStep;
						switch (animateStep) {
							case "text" + callCount:
								$(".output-console-body").append('<div id="text'+ callCount +'">Enter '+ callCount +'st polynomial: </div>');
								//$('#text' + callCount).removeClass("opacity00");
								$('.output-console-body').scrollTo($('.output-console-body div:last'), 500);
								introNextSteps("#head"+ callCount +"Null", "call"+ callCount, "");
								setTimeToIntroGoesNextStep();
							break;
							case "readValues":
								$('.output-console-body').append('<div id="output'+ outputCount + '">Enter coefficient, exponent'
										+ ' of node :  <div id="input'+ outputCount+ '"><input class="output-scanf-line input" '
										+ 'id="val'+ outputCount+ '" size="15" maxlength="6"/></div></div>');
								$('#val' + outputCount).focus();
								$('.introjs-tooltip').removeClass("hide");
								var text = "Enter <y>coefficient</y> and <y>exponent</y> of the <y>list</y> each separated number "
										+ "by a <y>space</y>.";
								typing(".introjs-tooltiptext",text,function() {
									introNextSteps("#storeCoeffNdExp","", "");
									readCoeffAndExpValuesFromConsole("#val" + outputCount);
								});
							break;
							case "enterYesOrNo":
								$('.output-console-body').append('<div id="yesOrNoText'+ outputCount+ '">Do u want another node(y/n): '
										+ ' <div class="position" id="yesOrNotDiv'+ outputCount+ '"><input class="output-scanf-line input" '
										+ 'id="yesOrNoVal'+ outputCount+ '" size="15" maxlength="2"/></div></div>');
								$('#yesOrNoVal' + outputCount).focus();
								$(".introjs-tooltip").removeClass('hide');
								var text = "Enter <y>y/n</y> (or) <y>Y/N</y> to continue to insert node into the list.";
								typing(".introjs-tooltiptext",text,function() {
											introNextSteps("#doWhileLoop","", "right");
											readYesOrNoFromConsole('#yesOrNoVal' + outputCount);
											outputCount++;
								});
							break;
						}
					});
				break;
				case "head" + callCount + "Null":
					$(".introjs-helperLayer").one("transitionend", function() {
						var animateStep = introjs._introItems[introjs._currentStep].animateStep;
						switch (animateStep) {
							case "call" + callCount:
								flip("#head" + callCount + "Name","NULL",function() {
									$(".introjs-tooltip").removeClass('hide');
									var text = "Here, we initialize the <y>head1</y> to <y>NULL</y>.<br/><br/> After initialization call "
											+ "<y>create</y> method and pass an argument <y>head1</y> (<y>NULL</y>) to <y>create</y> method, "
											+ "the <y>return</y> value of the <y>create</y> method will be stored in <y>head1</y>.";
									typing(".introjs-tooltiptext",text,function() {
										buttonName = "createBtn";
										introNextSteps("#animationDiv","head1Null","");
										$('.introjs-nextbutton').show();
									});
								});
							break;
						}
					});
				break;
				case "preTemp":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#preTemp").removeClass("opacity00");
						if (buttonName == "createBtn") {
							displayCreateMethodCode();
							introjs.refresh();
							$("#createHead").addClass("background-color-yellow");
							arrow("#methodName", "#methodName", function() {
								$(".introjs-tooltip").removeClass("hide");
								$('.introjs-tooltiptext').append('<ul><li></li></ul>');
								var text = "Here, store, the <y>head"+ callCount +"</y> value (<y>NULL</y>) to the <y>head</y>.";
								typing(".introjs-tooltiptext ul li:last",text,function() {
									arrow("#methodName","#coeffExp",function() {
										$("#ch, #coeffExp").addClass("background-color-yellow");
										$('.introjs-tooltiptext ul ').append('<li></li>');
										var text = "Here, we are declaring a <y>character</y> variable <y>ch</y> and"
												+ " <y>two</y> integer variables <y>coeff</y> and <y>exp</y>. ";
										typing(".introjs-tooltiptext ul li:last", text, function() {
													$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'"
															+" onclick='allocateMemory(1)'>Next &#8594;</a>");
										});
									});
								});
							});
						} else if (buttonName == "displayBtn") {
							displayPrintMethod();
							introjs.refresh();
							$("#displayHead").addClass("background-color-yellow");
							arrow("#methodName", "#methodName", function() {
								$(".introjs-tooltip").removeClass("hide");
								$('.introjs-tooltiptext').append('<ul><li></li></ul>');
								var value = (callCount == 1) ? (address1.length != 0) ? address1[0] : "null" : (address2.length != 0) ? address2[0] : "null"  
								var text = "Here, store, the <y>head"+ callCount +"</y> value (<y>"+ value +"</y>) to the <y>head</y>.";
								typing(".introjs-tooltiptext ul li:last",text,function() {
									arrow("#methodName","#tempNode",function() {
										$("#displayHead").removeClass("background-color-yellow");
										$("#tempNode").addClass("background-color-yellow");
										$('.introjs-tooltiptext ul').append('<li></li>');
										var text = "Here, we are storing <y>head</y> value (i.e <y>"+ value +"</y>) to <y>temp</y> node. ";
										typing(".introjs-tooltiptext ul li:last", text, function() {
											introNextSteps("#animationDiv","printAnimation","");
											$(".introjs-nextbutton").show()
										});
									});
								});
							});
						}
					});
				break;
				case "printWhileLoop":
					$(".introjs-helperLayer").one("transitionend",function() {
						$(".introjs-tooltip").removeClass("hide");
						$("#tempNode").removeClass("background-color-yellow");
						arrow("#tempNotNull","#tempNotNull", function() {
							$("#tempNotNull").addClass("background-color-yellow");
								$(".introjs-tooltip").removeClass('hide');
								$(".introjs-tooltiptext").append("<ul></ul>");
								$(".introjs-tooltiptext ul li *").removeAttr("id");
								$(".introjs-tooltiptext ul").append("<li>"
											+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
											+ "<span  id='tooltipFront'>temp</span> != NULL</span></li>");
								travel("#tempNotNull", $(".introjs-tooltiptext ul li:last-child span"), function() {
									var nodeAdd = "null";
									if (nodeCount1 != 0 || nodeCount2 != 0 || nodeCount3 != 0) {
										value = (flag == true) ? nodeAdd = address1[0] : (flag == false) ? nodeAdd = address2[0] : nodeAdd = address3[0] ;
								    }
									flip("#tooltipFront", nodeAdd, function() {
										$(".introjs-tooltiptext ul").append("<li></li>");
										if (nodeAdd != "null") {
											var text = "The above condition is evaluates to <y>true</y> so the control"
														+ " enters into <y>while-block</y> then print <y>coeff</y> and "
														+ "<y>exp</y> of <y>temp</y> then travel the <y>next</y> field of <y>temp</y> to "
														+ " <y>temp</y>.";
											typing(".introjs-tooltiptext ul li:last", text, function() {
												arrow("#tempNotNull", "#printValues", function() {
													$("#tempNotNull").removeClass("background-color-yellow").removeAttr("style");
													$("#printValues, #tmpNxtToTmp").addClass("background-color-yellow");
													introNextSteps("#animationDiv","displayVal","");
													$(".introjs-nextbutton").show();
												});
											});
										} else {
											var text = "The above condition is evaluates to <y>false</y> so print <y>null</y> to the <y>console</y>.";
											typing(".introjs-tooltiptext ul li:last", text, function() {
												arrow("#tempNotNull", "#printNull", function() {
													$("#tempNotNull").removeClass("background-color-yellow").removeAttr("style");
													$("#printNull").addClass("background-color-yellow");
													introNextSteps("#animationDiv", "displayVal","");
													$(".introjs-nextbutton").show();
												});
											});
										}
									});
							
							/*var text = "Repeat the loop until <y>temp != NULL</y>.<br/>if it is <y>true</y> then print <y>coeff</y> ";
							typing(".introjs-tooltiptext", text, function() {*/
								
							});
						});
					});
				break;
				case "storeCoeffNdExp":
					$('.introjs-nextbutton').hide();
					$('.input' + outputCount).attr("disabled", "disabled");
					$(".introjs-helperLayer").one("transitionend",function() {
						$(".introjs-tooltip").removeClass("hide");
						arrow("#readConsole1","#tCoeff",function() {
							$("#tCoeff").addClass("background-color-yellow");
							$('.introjs-tooltiptext').append("<ul><li></li></ul>");
							var text = "The <y>coeff</y> value (<y>"+ arr[0]+ "</y>) is stored in the <y>coeff</y> field of <y>temp</y>.";
							typing(".introjs-tooltiptext ul li:last", text, function() {
								arrow("#tCoeff","#tExp",function() {
									$("#tExp").addClass("background-color-yellow");
									$('.introjs-tooltiptext ul').append("<li></li>");
									var text = "The <y>exp</y> value (<y>"+ arr[1]+ "</y>) is stored in the <y>exp</y> field of <y>temp</y>.";
									typing(".introjs-tooltiptext ul li:last",text,function() {
										arrow("#tExp","#tNext",function() {
											$("#tNext").addClass("background-color-yellow");
											$('.introjs-tooltiptext ul').append("<li></li>");
											var text = "The (<y>null</y>) is stored in the <y>next</y> field of <y>temp</y>.";
											typing(".introjs-tooltiptext ul li:last",text,function() {
												introNextSteps("#animationDiv","StoreValues","");
												$('.introjs-nextbutton').show();
											});
										});
									});
								});
							});
						});
					});
				break;
				case "callAddTerm":
					$("#tCoeff, #tExp, #tNext").removeClass("background-color-yellow");
					$(".introjs-helperLayer").one("transitionend", function() {
						arrow("#tNext","#callAddTerm",function() {
							flip("#aHead", (address.length != 1) ? firstAdd : "null", function() {
								flip("#aTemp", randomAdd, function() {
									$(".introjs-tooltip").removeClass("hide");
									$("#callAddTerm").addClass("background-color-yellow");
									$('.introjs-tooltiptext').append("<ul><li></li></ul>");
									if (address.length != 1) {
										var text = "Here, we are calling <y>addTrem()</y> method and passing <y>two</y> variables <y>head</y> (<y>"
												+ firstAdd + "</y>) and <y>temp</y> (<y>" + randomAdd + "</y>)";
									} else {
										var text = "Here, we are calling <y>addTrem()</y> method and passing <y>two</y> variables <y>head</y> (<y>"
												+ "null</y>) and <y>temp</y> (<y>" + address[0] + "</y>)";
									}
									typing(".introjs-tooltiptext ul li:last", text, function() {
										$("#preMain").hide();
										$("#preAddTerm").addClass("opacity00").removeClass("hide");
										displayAddTermMethod();
										introjs.refresh();
										arrow("#callAddTerm", "#callAddTerm");
										introNextSteps("#preAddTerm", "", "right");
										$('.introjs-nextbutton').show();
									});
								});
							});
						})
					});
				break;
				case "preAddTerm":
					$(".introjs-helperLayer").one("transitionend", function() {
						$("#preAddTerm").removeClass("opacity00");
						$(".introjs-tooltip").removeClass('hide');
						arrow("#addTermFunName", "#addTermFunName", function() {
							$("#aCallHndT").addClass("background-color-yellow");
							if (address.length != 1) {
								var text = "Here, store <y>"+ firstAdd +"</y> to the <y>head</y> and <y>" + randomAdd + "</y> to <y>temp</y>.";
							} else {
								var text = "Here, store <y>null</y> to the <y>head</y> and <y>" + address[0] + "</y> to <y>temp</y>.";
							}
							$('.introjs-tooltiptext').append("<ul><li></li></ul>");
							typing(".introjs-tooltiptext ul li:last", text, function() {
								arrow("#addTermFunName", "#p1ndp2Dec", function() {
									$("#p1ndp2Dec, #p1NdP2Init").addClass("background-color-yellow");
									arrow("#p1ndp2Dec", "#p1NdP2Init", function() {
										if (address.length != 1) {
											var text = "Here, we are declaring <y>two pointer</y> variables <y>p1</y> and <y>p2</y> and initialize"
												+ " with <y>head</y> value (<y>"+ firstAdd +"</y>).";
										} else {
											var text = "Here, we are declaring <y>two pointer</y> variables <y>p1</y> and <y>p2</y> and initialize"
												+ " with <y>head</y> value (<y>null</y>).";
											
										}
										$('.introjs-tooltiptext ul').append("<li></li>");
										typing(".introjs-tooltiptext ul li:last", text, function() {
											introNextSteps("#animationDiv", "addTermMethod", "");
											$('.introjs-nextbutton').show();
										});
									});
								});
							});
						});
					});
				break;
				case "addTermLogic":
					$("#aCallHndT, #p1NdP2Init, #p1ndp2Dec").removeClass("background-color-yellow");
					$(".introjs-helperLayer").one("transitionend", function() {
						arrow("#p1NdP2Init", "#ifp1EqNullBefore",function() {
							$(".introjs-tooltip").removeClass('hide');
							$(".introjs-tooltiptext").append("<ul></ul>");
							$(".introjs-tooltiptext ul li *").removeAttr("id");
							$(".introjs-tooltiptext ul").append("<li>"
										+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
										+ "<span  id='tooltipFront'>p1</span> == NULL</span></li>");
							travel("#ifp1EqNullBefore", $(".introjs-tooltiptext ul li:last-child span"), function() {
								flip("#tooltipFront",address.length == 1 ? "NULL": firstAdd,function() {
									var text = "";
									if (address.length == 1) {
										text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
									} else {
										text = "Since it evaluates to <r>false</r>."
									}
									$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
									typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
										if (address.length == 1) {
											fromId = "#rtnHead";
											$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'"
													+" onclick='createIfBlock()'>Next &#8594;</a>")
										} else {
											fromId = "#rtnHead";
											$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
													+"onclick='createElseBlockWhile()'>Next &#8594;</a>")
										}
									});
								});
							});
						});
					});
				break;
				case "rtnHead":
					$("#ifp1EqNullBefore, #tmpToHead").removeClass("background-color-yellow");
					$(".introjs-helperLayer").one("transitionend", function() {
						arrow(fromId, "#rtnHead", function() {
							introNextSteps("#yesOrNoQus", "addTermMethod", "");
							setTimeToIntroGoesNextStep();
						});
					});
				break;
				case "yesOrNoQus":
					$("#preAddTerm").addClass("hide");
					$("#callAddTerm").removeClass("background-color-yellow");
					$(".introjs-helperLayer").one("transitionend", function() {
						arrow(fromId, "#rtnHead", function() {
							introNextSteps("#outputDiv", "enterYesOrNo", "");
							setTimeToIntroGoesNextStep();
						});
					});
				break;
				case "doWhileLoop":
					$(".introjs-helperLayer").one("transitionend",function() {
						$(".introjs-tooltip").removeClass('hide');
						if (ch != "n") {
							allocateMemory(2);
						} else {
							$("#whileChNotEqN").addClass("blinkingRed");
							var text = 'Here, the condition <y>ch != "n"</y> will evaluates to <y>false</y>.';
							typing(".introjs-tooltiptext", text, function() {
								introNextSteps("#returnHead", "return", "");
								$(".introjs-nextbutton").show();
							});
						}
					});
				break;
				case "returnHead":
					$("#whileChNotEqN").removeClass("blinkingRed");
					$(".introjs-helperLayer").one("transitionend", function() {
						if (test) {
							test = false;
							introNextSteps("#animationDiv", "returnHead", "");
							setTimeout(function() {
								$("#preMain").removeClass("hide");
								callCount++;
								$('.btn').attr("disabled", false);
								$('#createBtn').click();
								introjs.nextStep();
							},1000);
						} else {
							introNextSteps("#animationDiv", "callBtnDiv", "");
							setTimeToIntroGoesNextStep();
						}
					});
				break;
				case "addTermIfLogic":
					$("#whileP1NotNull, #p1ToP2, #p1NxtTop1").removeAttr(
							"style").removeClass("background-color-yellow");
					$(".introjs-helperLayer").one("transitionend", function() {
						secondP1EqNull();
					});
				break;
			}
		});
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$(".introjs-nextbutton").hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function introNextSteps(stepName, animatedStep, position) {
	$('.introjs-disabled').removeClass('introjs-disabled');
	var options = {
		element : stepName,
		intro : '',
		position : position,
		tooltipClass : "hide",
		animateStep : animatedStep
	}
	introjs.insertOption(introjs._currentStep + 1, options);
	introjs._options.steps.push({
		"element" : stepName
	});
}

function displayCreateMethodCode() {
	var createMethodCode = '<span id="methodName">poly create(<span id="createHead">poly head</span>) {</span>\n'
			+ '\t<span id="ch">char ch;</span>\n'
			+ '\t<span id="coeffExp">int coeff, exp;</span>\n'
			+ '\t<span id="doWhileLoop">do {\n'
			+ '\t\t<span id="temp">poly temp;</span>\n'
			+ '\t\t<span id="createinitTemp">temp = (poly)malloc(sizeof(struct polynomial));</span>\n'
			+ '\t\t<span id="console1">printf("Enter coeff, exp of node : \\n");</span>\n'
			+ '\t\t<span id="readConsole1">scanf("%d %d", &coeff, &exp);</span>\n'
			+ '\t\t<span id="storeCoeffNdExp"><span id="tCoeff">temp -> coeff = coeff;</span>\n'
			+ '\t\t<span id="tExp">temp -> exp = exp;</span>\n'
			+ '\t\t<span id="tNext">temp -> next = NULL;</span></span>\n'
			+ '\t\t<span id="callAddTerm">head = addterm(<span id="aHead" class="position">head</span>, '
			+ '<span id="aTemp" class="position">temp</span>);</span>\n'
			+ '\t\t<span id="yesOrNoQus"><span id="console1">printf("Do u want another node(y/n): \\n");</span>\n'
			+ '\t\t<span id="readConsole2">scanf("  %c", &ch);</span></span>\n'
			+ '\t} <span id="whileChNotEqN">while(ch != \'n\');</span></span>\n'
			+ '\t<span id="returnHead">return head;</span>\n' + '}\n';
	$('#preTemp').empty().append(createMethodCode);
}

function displayAddTermMethod() {
	var addtermCode = '<span id="addTermFunName">poly addterm(<span id="aCallHndT">poly head, poly temp</span>) {</span>\n'
			+ '\t<span id="p1ndp2Dec">poly p1,p2;</span>\n'
			+ '\t<Span id="p1NdP2Init">p1 = p2 = head;</span>\n'
			+ '\t<span id="addTermLogic"><span id="ifp1EqNullBefore">if(p1 == NULL) {</span>\n'
			+ '\t\t<span id="tmpToHead">head = temp;</span>\n'
			+ '\t} else {\n'
			+ '\t\t<span id="whileP1NotNull">while(p1 != NULL && p1 -> exp > temp -> exp) {</span>\n'
			+ '\t\t\t<span id="p1ToP2">p2 = p1;</span>\n'
			+ '\t\t\t<span id="p1NxtTop1">p1 = p1 -> next;</span>\n'
			+ '\t\t}\n'
			+ '\t\t<span id="addTermIfLogic"><span id="ifp1EqNullAfter">if(p1 == NULL) {</span>\n'
			+ '\t\t\t<span id="tempTpNxtP2">p2 -> next = temp;</span>\n'
			+ '\t\t<span id="p1EqTemp">} else if(p1 -> exp == temp -> exp) {</span>\n'
			+ '\t\t\t<span id="p1PlsTemp">p1 -> coeff = p1 -> coeff + temp -> coeff;</span>\n'
			+ '\t\t<span id="p1LessTemp">} else if(p1 -> exp < temp -> exp) {</span>\n'
			+ '\t\t\t<span id="p2EqP1">if(p2 == p1) {</span>\n'
			+ '\t\t\t\t<span id="p1ToTmpNxt">temp -> next = p1;</span>\n'
			+ '\t\t\t\t<span id="tmpToHead1">head = temp</span>;\n'
			+ '\t\t\t} else {\n'
			+ '\t\t\t\t<span id="p1ToTmpNxt1">temp -> next = p1;</span>\n'
			+ '\t\t\t\t<span id="tmpToP2Nxt">p2 -> next = temp;</span>\n'
			+ '\t\t\t}\n'
			+ '\t\t}</span>\n'
			+ '\t}</span>\n'
			+ '\t<span id="rtnHead">return head;</span>\n' + '}\n';
	$("#preAddTerm").empty().append(addtermCode);
}

function displayPrintMethod() {
	var displayMethodCode = '<span id="methodName">void print(<span id="displayHead">poly head</span>) {</span>\n'
			+ '\t<span id="tempNode">poly temp = head;</span>\n'
			+ '\t<span id="printWhileLoop"><span id="tempNotNull">while(temp != NULL) {</span>\n'
            + '\t\t<span id="printValues">printf("%d X^ %d --->", temp -> coeff, temp -> exp);</span>\n'
            + '\t\t<span id="tmpNxtToTmp">temp = temp -> next;</span>\n'
  			+ '\t}\n'
  			+ '\t<span id="printNull">printf("NULL\\n");</span></span>\n'
			+ '}';
			if (lang == "cpp") {
				$("#printValues").text("cout << temp -> coeff << temp -> exp ;");
				$("#printNull").text('cout << "NULL\n";');
			}
	$('#preTemp').removeClass("hide").empty().append(displayMethodCode);
}

function allocateMemory(num) {
	$(".user-btn").remove();
	if (num != 1) {
		$(".introjs-tooltiptext").append("<ul></ul>");
	}
	$("#createHead, #ch, #coeffExp").removeClass("background-color-yellow");
	arrow("#coeffExp", "#createinitTemp", function() {
		$("#createinitTemp , #temp").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("\n<li></li>");
		var text = "Allocate memory for <y>struct</y> variable <y>temp</y>.";
		typing(".introjs-tooltiptext ul li:last", text, function() {
			$(".introjs-tooltiptext ul").append("\n<li></li>");
			arrow("#createinitTemp","#console1",function() {
				$("#console1").addClass("background-color-yellow");
				var text = "Print <y>Enter coeff, exp of node :</y> on to the console.";
				typing(".introjs-tooltiptext ul li:last", text, function() {
					arrow("#console1","#readConsole1",function() {
						$("#readConsole1").addClass("background-color-yellow");
						$(".introjs-tooltiptext ul").append("\n<li></li>");
						var text = "Read the <y>coeff</y> and <y>exp</y> value from the keyboard.";
						typing(".introjs-tooltiptext ul li:last", text, function() {
							introNextSteps("#animationDiv","memoryAllocation","");
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	});
}

function createIfBlock() {
	$(".user-btn").remove();
	$("#ifp1EqNullBefore").removeAttr("style");
	arrow("#ifp1EqNullBefore", "#tmpToHead", function() {
		$("#tmpToHead").addClass("background-color-yellow");
		$(".introjs-tooltiptext ul").append("<li></li>");
		var text = "The <y>address</y> contained in <y>temp</y> (<y>"
				+ randomAdd + "</y>) is assigned to <y>head</y> node";
		typing($(".introjs-tooltiptext ul li:last"), text, function() {
			introNextSteps("#animationDiv", "tempToHead", "");
			$(".introjs-nextbutton").removeClass("introjs-disabled").show();
		});
	});
}

function createElseBlockWhile() {
	$(".user-btn").remove();
	$("#ifp1EqNullBefore").removeAttr("style");
	arrow("#ifp1EqNullBefore", "#whileP1NotNull", function() {
		$("#whileP1NotNull, #p1ToP2, #p1NxtTop1").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass('hide');
		$(".introjs-tooltiptext ul li *").removeAttr("id");
		$(".introjs-tooltiptext ul").append("<li>"
				+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
				+ "<span  id='tooltipFront'>p1</span>!== NULL && <span id='p1Exp' class='position'>p1 -> exp</span> &gt;"
				+ " <span id='tempExp' class='position'>temp -> exp</span></span></li>");
		travel("#whileP1NotNull", $(".introjs-tooltiptext ul li:last span"), function() {
			flip("#tooltipFront", address.length == 1 ? "NULL" : firstAdd, function() {
				flip("#p1Exp", p1Value["exp"], function() {
					flip("#tempExp", temp["exp"], function() {
						$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
						if (p1Value != null && p1Value["exp"] > temp["exp"]) {
							text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								introNextSteps("#animationDiv", "addTermWhileLoop", "");
								$(".introjs-nextbutton") .removeClass( "introjs-disabled").show();
							});
						} else {
							text = "Since it evaluates to <r>false</r>.";
							typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
								introNextSteps("#animationDiv", "addTermWhileLoop", "");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						}
					});
				});
			});
		});
	});
}

function secondP1EqNull() {
	$(".user-btn").remove();
	arrow("#whileP1NotNull", "#ifp1EqNullAfter", function() {
		$("#ifp1EqNullAfter").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass('hide');
		$(".introjs-tooltiptext").append("\n<ul></ul>");
		$(".introjs-tooltiptext ul li *").removeAttr("id");
		$(".introjs-tooltiptext ul").append("<li>"
			+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
			+ "<span  id='tooltipFront'>p1</span> == NULL</span></li>");
		travel("#ifp1EqNullAfter", $(".introjs-tooltiptext ul li:last-child span"), function() {
			flip("#tooltipFront", (p1 == null) ? "NULL" : firstAdd, function() {
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				if (p1 == null) {
					text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						$("#ifp1EqNullAfter").removeAttr("style");
						arrow("#ifp1EqNullAfter", "#tempTpNxtP2", function() {
							$("#tempTpNxtP2").addClass("background-color-yellow");
							introNextSteps("#animationDiv", "ifP1EqualToNull", "");
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						});
					});
				} else {
					text = "Since it evaluates to <r>false</r>."
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
						+ "onclick='ifP1ExpNdTempExpSame()'>Next &#8594;</a>");
					});
				}
			});
		});
	});
}

function ifP1ExpNdTempExpSame() {
	$(".user-btn").remove();
	$("#ifp1EqNullAfter").removeAttr("style").removeClass("background-color-yellow");
	arrow("#ifp1EqNullAfter", "#p1EqTemp",function() {
		$("#p1EqTemp").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass('hide');
		$(".introjs-tooltiptext ul li *").removeAttr("id");
		$(".introjs-tooltiptext ul").append("<li>"
					+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
					+ "<span  id='tooltipFront'>p1 -> exp</span> == <span id='tooltipFront1'>temp -> exp</span></span></li>");
		travel("#p1EqTemp", $(".introjs-tooltiptext ul li:last-child span"), function() {
			flip("#tooltipFront", p1["exp"], function() {
				flip("#tooltipFront1", temp["exp"], function() {
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					if (p1["exp"] == temp["exp"]) {
						text = "Since it evaluates to <y>true</y>, so the control enters into <y>if-block</y>."
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							$("#p1EqTemp").removeAttr("style").removeClass("background-color-yellow");
							arrow("#p1EqTemp", "#p1PlsTemp", function() {
								$("#p1PlsTemp").addClass("background-color-yellow");
								introNextSteps("#animationDiv", "ifP1ExpAndTempExpSame", "");
								$(".introjs-nextbutton").removeClass("introjs-disabled").show();
							});
						});
					} else {
						text = "Since it evaluates to <r>false</r>."
						typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
							$(".introjs-tooltipbuttons") .append( "<a class='introjs-button user-btn' "
									+ "onclick='ifP1ExpNdTempExpLessThan()'>Next &#8594;</a>");
						});
					}
				});
			});
		});
	});
}

function ifP1ExpNdTempExpLessThan() {
	$(".user-btn").remove();
	$("#p1EqTemp").removeAttr("style").removeClass("background-color-yellow");
	arrow("#p1EqTemp", "#p1LessTemp", function() {
		$("#p1LessTemp").addClass("background-color-yellow");
		$(".introjs-tooltip").removeClass('hide');
		$(".introjs-tooltiptext ul li *").removeAttr("id");
		$(".introjs-tooltiptext ul").append("<li>"
				+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
				+ "<span  id='tooltipFront'>p1 -> exp</span> &lt; <span id='tooltipFront1'>temp -> exp</span></span></li>");
		travel("#p1LessTemp",$(".introjs-tooltiptext ul li:last-child span"),function() {
			flip("#tooltipFront",p1["exp"],function() {
				flip("#tooltipFront1",temp["exp"],function() {
					$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
					var text = ""
					if (parseInt(p1["exp"]) < parseInt(temp["exp"])) {
						text = "Since it evaluates to <y>true</y>, so control enters into <y>if-block</y>.";
						typing($(".introjs-tooltiptext ul li:last-child div").last(),text,function() {
							$("#p1LessTemp").removeClass("background-color-yellow").removeAttr("style");
							arrow("#p1LessTemp","#p2EqP1",function() {
								$("#p2EqP1").addClass("background-color-yellow");
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' "
									+ "onclick='ifP1EqP2()'>Next &#8594;</a>");
							});
						});
					} else {
						text = "Since it evaluates to <r>false</r>."
						typing($(".introjs-tooltiptext ul li:last-child div").last(),text,function() {
							introNextSteps("#rtnHead","right","hide");
							$(".introjs-nextbutton").show();
						});
					}
				});
			});
		});
	});
}

function ifP1EqP2() {
	$(".user-btn").remove();
	$(".introjs-tooltip").removeClass('hide');
	$(".introjs-tooltiptext ul li *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li>"
			+ "<span id='tooltipCndtn' style='font-family: monospace; font-weight: bold;'>"
			+ "<span  id='tooltipFront'>p1</span> == <span id='tooltipFront1'>p2</span></span></li>");
	travel("#p2EqP1", $(".introjs-tooltiptext ul li:last-child span"), function() {
		flip("#tooltipFront", address[p1NdP2Val + 1], function() {
			flip("#tooltipFront1", address[p1NdP2Val + 1], function() {
				$(".introjs-tooltiptext ul li:last-child").append("<div></div>");
				var text = ""
				if (p1 == p2) {
					text = "Since it evaluates to <y>true</y>, so control enters into <y>if-block</y>.";
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text,function() {
						$("#p2EqP1").removeClass("background-color-yellow").removeAttr("style");
						arrow("#p2EqP1", "#tmpToHead1", function() {
							$("#p1ToTmpNxt, #tmpToHead1").addClass("background-color-yellow");
							introNextSteps("#animationDiv", "ifP1EqP2", "");
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						});
					});
				} else {
					text = "Since it evaluates to <r>false</r> , so control enters into <y>else-block</y>."
					typing($(".introjs-tooltiptext ul li:last-child div").last(), text, function() {
						$("#p2EqP1").removeClass("background-color-yellow").removeAttr("style");
						arrow("#p2EqP1", "#tmpToP2Nxt", function() {
							$("#p1ToTmpNxt1, #tmpToP2Nxt").addClass("background-color-yellow");
							introNextSteps("#animationDiv", "ifP1EqP2", "");
							$(".introjs-nextbutton").removeClass("introjs-disabled").show();
						});
					});
				}
			});
		});
	});
}

function setTimeToIntroGoesNextStep() {
	setTimeout(function() {
		introjs.nextStep();
	}, 1500);
}