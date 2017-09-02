var tl = new TimelineLite();
var firstVal = 25;
var secondVal = 11;

var assignmentOperatorsReady = function() {
	$(".inputWidth").on("keydown keyup", function(e) {
		$(".length-error-text").remove();
		if ($(this).val() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		//introjs.refresh();
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
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter only the integers.</div>");
			e.preventDefault();
		}
		if ($(this).val().length >= max) {
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Max Length 2 digits only</div>")
			e.preventDefault();
		}
	});
	
	
	var options = [
	              "<option value = 'none'>--</option>",
	               "<option value = '='> = </option>",
	               "<option value = '+='> += </option><option value = '-='> -= </option><option value = '/='> /= </option><option value = '*='> *= </option>",
	               "<option value = 'exp'>y%(x%10)</option>"
				];
	
	
	$("#selectAssign").on("change", function() {
		
		console.log('in the change function...');
		var value = $(this).val();
		if ($("#selectAssign").val() == "0") {
			console.log(" in the if condition of change.. ");
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Select the assignment operator from the menu.</div>");
			$("#submit").attr("disabled", "disabled");
		} else {
			$('.length-error-text').remove();
			console.log(' in the value = ' + value);
			$("#selectSub").html(options[value]);
			$("#submit").removeAttr("disabled");
		}
		
	})
	
	
	intro =  introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [
					{
						element : "#informationDiv",
						intro : "in the informaionDiv..",
						position : "bottom",
						tooltipClass: "hide"
					},
					
					{
						element : "#assignSpan",
						intro : "",
						position : "right"
					},
					{
						element: "#operatorsDiv",
						intro: "",
						position: "top"
					},
					{
						element: "#operatorAnimation",
						intro: "",
						position: "top"
					},
					{
						element: "#animationDiv",
						intro: "",
						position: "right"
					}
				]
	})
	intro.onafterchange(function(targetElement) {
		var ElementId = targetElement.id;
		var action = intro._introItems[intro._currentStep].action;
		switch (ElementId) {
		
		case "assignSpan":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#animationDiv").removeClass("visibility-hidden");
				var text = "Enter values in <span class='ct-code-b-yellow'>x</span> and <span class='ct-code-b-yellow'>y</span> boxes."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
				});
			});
		break;
		
		case "operatorsDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltipbuttons").append('<span class="btn visibility-hidden next-button">Next &rarr;</span>');
				var text = "Select an <span class='ct-code-b-yellow'>assignment operator</span> and click on evaluation button."
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
				});
			});
			break;
		
		case "animationDiv":
			$(".introjs-nextbutton").addClass("visibility-hidden");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "You can check all the operators by selecting <span class='ct-code-b-yellow'>assignment</span> again.<br/>"
							+" <div class='text-center'>(or)</div> Click to <span class='ct-code-b-yellow'>restart</span> the session.";
				typing(".introjs-tooltiptext", text, function() {
					$("#restart").removeClass("opacity00");
					$("#restart").addClass("zIndex");
				});
			});
		break;
		
		case "operatorAnimation":
			$(".introjs-helperLayer").one("transitionend", function() {
				console.log(" in the operatorAnimation..")
				$(".introjs-nextbutton").hide();
					$(".next-button").removeClass("visibility-hidden");
					nextClick();
			})
		break;
		}
	})
	intro.start();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$("#submit").attr("disabled","disabled");
	$("#animationDiv").addClass("visibility-hidden");
	 spanOffSet("allocate1", "panel1");
	 spanOffSet("allocate2", "panel2");
	var execute = true;
	
	var text = "<ul><li>In any programming language <span class='ct-code-b-green'>assignment operator</span> is the most commonly used <span class='ct-code-b-green'>operator</span> to "
		+"assign a value to a particular variable.</li><li>In <span class='ct-keywords-color'>C</span> there are three types of <span class='ct-code-b-green'>Assignment "
		+"operators</span>. They are:</li><ol><li>Simple assignment</li><li>Compound assignment</li><li>Assignment as expression</li></ol></ul>"
		typing("#informationDiv", text, function() {
			$("#informationDiv").addClass("zIndex");
			intro.nextStep();
			
		});
	
		$("#restart").click(function() {
			location.reload(true);
		})
		
		
	$("#submit").click(function() {
		
		if (execute) {
			console.log(' in the if condition of submit..');
			intro.nextStep();
			$(".next-button").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				typing("#memoryText", "Memory occupied by int : 2 bytes", function() {
				//$("#panel1, #panel2").addClass("zIndex");
				$("#animationMemory").removeClass("opacity00");
				setTimeout(function() {
					tl.to("#panel1", 1, {opacity:1, onComplete: function() {
						$("#panel1 .panel-body span").removeClass("opacity00").text($('#firstNum').val());
						$("#panel1").removeClass("opacity00");
					}})
					tl.to("#panel2", 1, {opacity:1, onComplete: function() {
						$("#panel2").removeClass("opacity00");
						$("#panel2 .panel-body span").removeClass("opacity00").text($('#secondNum').val());
						$("#operatorExpX").fadeIn(800, function() {
							$("#operatorExpY").fadeIn(600, function() {
								execute = false;
								switchCondition();
								var text= "Each variable occupies 2 bytes in the memory, because the given variables are of <span class='ct-code-b-yellow '>int</span> data type.";
								typing(".introjs-tooltiptext", text, function() {
									$(".introjs-nextbutton").hide();
									$(".next-button").show();
								}) 
							})
						})
					}});
				}, 1000);
				$(".introjs-nextbutton").hide();
				})
				//switchCondtion();
		});
		} else {
			console.log('in the else...pp')
			$('#operatorExpX, #operatorExpY').empty();
			switchCondition(function() {
				console.log(' in the else statment of switch.. ');
				$(".next-button").show();
			});
		}		
	})
}

function switchCondition(callBackFunction) {
	var selectList = $("#selectAssign option:selected").val();
	
	switch(selectList) {
	case "1":
		$("#operatorExpX").append("<div class='display-none'>x = x * (y + 10);</div><div class='display-none'>x = <span class='xVal position-relative' id='valOfX'>x</span>"+
								" * (<span class='position-relative' id='valOfY'>y</span> + 10);</div><div class='display-none'>x = <span class='xVal'></span>"+
								" * <span id='expressionX' class='position-relative'>(<span class='yVal'></span> + <span>10</span>)</span></div><div id='finalStepX' class='display-none'>"+
								"<span class='visibility-hidden'>x</span> = <span id='finalValX' class='position-relative'><span class='xVal'></span> * <span id='evalExpX'></span></span></div>");
		
		$("#operatorExpY").append("<div class='display-none'>y = y + (x * 10);</div><div class='display-none'>y = <span class='position-relative' id='valOfYX'>y</span>"+
				" + (<span class='position-relative' id='valOfXy'>x</span> * 10);</div><div class='display-none'>y = <span class='yVal'></span>"+
				" + <span id='expressionY' class='position-relative'>(<span class='xVal'></span> * <span>10</span>)</span></div><div id='finalStepY' class='display-none'>"+
				"<span class='visibility-hidden'>y</span> = <span id='finalValY' class='position-relative'><span class='yVal'></span> + <span id='evalExpY'></span></span></div>");
		
	break;
	case "2":
		$("#operatorExpX, #operatorExpY").empty();
		$("#operatorExpX").append("<div class='display-none'><span>x</span><span id='cAssgnOpX'></span>"+
					"<span class='valOfX'>y</span></div><div class='display-none'><span>x</span><span> = </span> "+
					"<span id='cngValX' class='position-relative'>x</span>"+
					"<span id='operatorX'></span><span class='valOfX position-relative' id='valOfX'>y</span></div><div>"+
					"<span class='display-none'>x</span><div class='display-none'><span class='visibility-hidden'>x</span><span> = </span>"+
					"<span id='finalValX'></span></div></div>");
		$("#operatorExpY").append("<div class='display-none'><span>y</span><span id='cAssgnOpY'></span>"+
				"<span class='valOfY'>x</span></div><div class='display-none'><span>y</span><span> = </span> "+
				"<span id='cngValY' class='position-relative'>y</span>"+
				"<span id='operatorY'></span><span class='valOfY position-relative' id='valOfY'>x</span></div><div>"+
				"<span class='display-none'>y</span><div class='display-none'><span class='visibility-hidden'>y</span><span> = </span>"+
				"<span id='finalValY'></span></div></div>");
		var selectSub = $("#selectSub option:selected").val();
		
		if (selectSub == "+=") {
			
			$("#cAssgnOpX").text(" += ");
			$("#operatorX").text(" + ");
			
			$("#cAssgnOpY").text(" += ");
			$("#operatorY").text(" + ");
			
		} else if (selectSub == "-=") {
			
			$("#cAssgnOpX").text(" -= ");
			$("#operatorX").text(" - ");
			
			$("#cAssgnOpY").text(" -= ");
			$("#operatorY").text(" - ");
			
		} else if (selectSub == "/=") {
			
			$("#cAssgnOpX").text(" /= ");
			$("#operatorX").text(" / ");
			
			$("#cAssgnOpY").text(" /= ");
			$("#operatorY").text(" / ");
			
		} else if (selectSub == "*=") {
			
			$("#cAssgnOpX").text(" *= ");
			$("#operatorX").text(" * ");
			
			$("#cAssgnOpY").text(" *= ");
			$("#operatorY").text(" * ");
		} 
	break;
	case "3":
		$("#operatorExpX, #operatorExpY").empty();
		$("#operatorExpX").append("<div class='display-none'>x %= (y % 10);</div><div class='display-none'>x = <span class='xVal position-relative' id='valOfX'>x</span>"+
								" % (<span class='position-relative' id='valOfY'>y</span> % 10);</div><div class='display-none'>x = <span class='xVal'></span>"+
								" % <span id='expressionX' class='position-relative'>(<span class='yVal'></span> % <span>10</span>)</span></div><div id='finalStepX' class='display-none'>"+
								"<span class='visibility-hidden'>x</span> = <span id='finalValX' class='position-relative'><span class='xVal'></span> % <span id='evalExpX'></span></span></div>");
		
		$("#operatorExpY").append("<div class='display-none'>y %= (x % 10);</div><div class='display-none'>y = <span class='position-relative' id='valOfYX'>y</span>"+
				" % (<span class='position-relative' id='valOfXy'>x</span> % 10);</div><div class='display-none'>y = <span class='yVal'></span>"+
				" % <span id='expressionY' class='position-relative'>(<span class='xVal'></span> % <span>10</span>)</span></div><div id='finalStepY' class='display-none'>"+
				"<span class='visibility-hidden'>y</span> = <span id='finalValY' class='position-relative'><span class='yVal'></span> % <span id='evalExpY'></span></span></div>");
	break;
}
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}


var next = 1;
	function nextClick() {
	$(".next-button").click(function() {
		
		var selectSub = $("#selectSub option:selected").val();
		$(".next-button").hide();
		if (selectSub == "+=") {
			$("#operatorExpX div:nth-child(1)").fadeIn(600, function() {
				$("#operatorExpX div:nth-child(2)").fadeIn(800, function() {
					flipEffect("#cngValX", $("#firstNum").val(), function() {
						flipEffect("#valOfX", $("#secondNum").val(), function() {
							$("#xMemory").addClass("opacity00");
							 $("#finalValX").text(parseInt($("#cngValX").text()) + parseInt($("#valOfX").text()));
							finalValOffset("finalValX" , "xMemory", function() {
								
								$(".introjs-nextbutton").hide();
								$("#operatorExpY div:nth-child(1)").fadeIn(600, function() {
									$("#operatorExpY div:nth-child(2)").fadeIn(800, function() {
										flipEffect("#cngValY", $("#secondNum").val(), function() {
											flipEffect("#valOfY", $("#firstNum").val(), function() {
												$("#yMemory").addClass("opacity00");
												$("#finalValY").text(parseInt($("#cngValY").text()) + parseInt($("#valOfY").text()));
												finalValOffset("finalValY" , "yMemory", function() {
													$(".next-button").hide();
												});
											});
										})
									});
								});
							}) 
						});
					});
				});
			});
		} else if (selectSub == "-=") {
			$("#operatorExpX div:nth-child(1)").fadeIn(600, function() {
				$("#operatorExpX div:nth-child(2)").fadeIn(800, function() {
					flipEffect("#cngValX", $("#firstNum").val(), function() {
						flipEffect("#valOfX", $("#secondNum").val(), function() {
							$("#xMemory").addClass("opacity00");
							 $("#finalValX").text(parseInt($("#cngValX").text()) - parseInt($("#valOfX").text()));
							finalValOffset("finalValX" , "xMemory", function() {
								
								$(".introjs-nextbutton").hide();
								$("#operatorExpY div:nth-child(1)").fadeIn(600, function() {
									$("#operatorExpY div:nth-child(2)").fadeIn(800, function() {
										flipEffect("#cngValY", $("#secondNum").val(), function() {
											flipEffect("#valOfY", $("#firstNum").val(), function() {
												$("#yMemory").addClass("opacity00");
												$("#finalValY").text(parseInt($("#cngValY").text()) - parseInt($("#valOfY").text()));
												finalValOffset("finalValY" , "yMemory", function() {
													$(".next-button").hide();
												});
											});
										})
									});
								});
							}) 
						});
					});
				});
			});
		} else if (selectSub == "/=") {
			$("#operatorExpX div:nth-child(1)").fadeIn(600, function() {
				$("#operatorExpX div:nth-child(2)").fadeIn(800, function() {
					flipEffect("#cngValX", $("#firstNum").val(), function() {
						flipEffect("#valOfX", $("#secondNum").val(), function() {
							$("#xMemory").addClass("opacity00");
							 $("#finalValX").text(parseFloat(parseInt($("#cngValX").text()) / parseInt($("#valOfX").text())).toFixed(2));
							finalValOffset("finalValX" , "xMemory", function() {
								
								$(".introjs-nextbutton").hide();
								$("#operatorExpY div:nth-child(1)").fadeIn(600, function() {
									$("#operatorExpY div:nth-child(2)").fadeIn(800, function() {
										flipEffect("#cngValY", $("#secondNum").val(), function() {
											flipEffect("#valOfY", $("#firstNum").val(), function() {
												$("#yMemory").addClass("opacity00");
												$("#finalValY").text(parseFloat(parseInt($("#cngValY").text()) / parseInt($("#valOfY").text())).toFixed(2));
												finalValOffset("finalValY" , "yMemory", function() {
													$(".next-button").hide();
												});
											});
										})
									});
								});
							}) 
						});
					});
				});
			});
		} else if (selectSub == "*=") {
			$("#operatorExpX div:nth-child(1)").fadeIn(600, function() {
				$("#operatorExpX div:nth-child(2)").fadeIn(800, function() {
					flipEffect("#cngValX", $("#firstNum").val(), function() {
						flipEffect("#valOfX", $("#secondNum").val(), function() {
							$("#xMemory").addClass("opacity00");
							 $("#finalValX").text(parseInt($("#cngValX").text()) * parseInt($("#valOfX").text()));
							finalValOffset("finalValX" , "xMemory", function() {
								
								$(".introjs-nextbutton").hide();
								$("#operatorExpY div:nth-child(1)").fadeIn(600, function() {
									$("#operatorExpY div:nth-child(2)").fadeIn(800, function() {
										flipEffect("#cngValY", $("#secondNum").val(), function() {
											flipEffect("#valOfY", $("#firstNum").val(), function() {
												$("#yMemory").addClass("opacity00");
												$("#finalValY").text(parseInt($("#cngValY").text()) * parseInt($("#valOfY").text()));
												finalValOffset("finalValY" , "yMemory", function() {
													$(".next-button").hide();
												});
											});
										})
									});
								});
							}) 
						});
					});
				});
			});
		} else if (selectSub == "exp") {
			$("#operatorExpX div:nth-child(1)").fadeIn(600, function() {
				$("#operatorExpX div:nth-child(2)").fadeIn(800, function() {
					flipEffect("#valOfX", $("#firstNum").val(), function() {
						$(".xVal").text($("#firstNum").val());
						flipEffect("#valOfY", $("#secondNum").val(), function() {
							$(".yVal").text($("#valOfY").text());
							$("#operatorExpX div:nth-child(3)").fadeIn(600, function() {
								flipEffect("#expressionX", parseInt($("#valOfY").text()) % 10, function() {
									$("#evalExpX").text($("#expressionX").text())
									$("#operatorExpX div:nth-child(4)").fadeIn(800, function() {
										flipEffect("#finalValX",parseInt($("#valOfX").text()) % parseInt($("#expressionX").text()), function() {
											$("#xMemory").addClass("opacity00");
											$("#xMemory").text($("#finalValX").text());
											finalValOffset("finalValX" , "xMemory", function() {
												
												$(".introjs-nextbutton").hide();
												
												$("#operatorExpY div:nth-child(1)").fadeIn(600, function() {
													$("#operatorExpY div:nth-child(2)").fadeIn(800, function() {
														 flipEffect("#valOfYX", $("#secondNum").val(), function() {
															//$(".yVal").text($("#secondNum").val());
															flipEffect("#valOfXy", $("#firstNum").val(), function() {
																$(".xVal").text($("#valOfXy").text());
																$("#operatorExpY div:nth-child(3)").fadeIn(600, function() {
																	flipEffect("#expressionY", parseInt($("#valOfXy").text()) % 10, function() {
																		$("#evalExpY").text($("#expressionY").text())
																		$("#operatorExpY div:nth-child(4)").fadeIn(800, function() {
																			flipEffect("#finalValY",parseInt($("#valOfYX").text()) % parseInt($("#expressionY").text()), function() {
																				finalValOffset("finalValY", "yMemory", function() {
																					$(".next-button").hide();
																				})
																			})
																		})
																	})
																})
															})
														}) 
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		} else if (selectSub == "=") {
			$("#operatorExpX div:nth-child(1)").fadeIn(600, function() {
				$("#operatorExpX div:nth-child(2)").fadeIn(800, function() {
					flipEffect("#valOfX", $("#firstNum").val(), function() {
						$(".xVal").text($("#firstNum").val());
						flipEffect("#valOfY", $("#secondNum").val(), function() {
							$(".yVal").text($("#valOfY").text());
							$("#operatorExpX div:nth-child(3)").fadeIn(600, function() {
								flipEffect("#expressionX", parseInt($("#valOfY").text()) + 10, function() {
									$("#evalExpX").text($("#expressionX").text())
									$("#operatorExpX div:nth-child(4)").fadeIn(800, function() {
										flipEffect("#finalValX",parseInt($("#valOfX").text()) * parseInt($("#expressionX").text()), function() {
											$("#xMemory").addClass("opacity00");
											$("#xMemory").text($("#finalValX").text());
											finalValOffset("finalValX" , "xMemory", function() {
												
												$(".introjs-nextbutton").hide();
												
												$("#operatorExpY div:nth-child(1)").fadeIn(600, function() {
													$("#operatorExpY div:nth-child(2)").fadeIn(800, function() {
														flipEffect("#valOfYX", $("#secondNum").val(), function() {
															//$(".yVal").text($("#secondNum").val());
															flipEffect("#valOfXy", $("#firstNum").val(), function() {
																$(".xVal").text($("#valOfXy").text());
																$("#operatorExpY div:nth-child(3)").fadeIn(600, function() {
																	flipEffect("#expressionY", parseInt($("#valOfXy").text()) * 10, function() {
																		$("#evalExpY").text($("#expressionY").text())
																		$("#operatorExpY div:nth-child(4)").fadeIn(800, function() {
																			flipEffect("#finalValY",parseInt($("#valOfYX").text()) + parseInt($("#expressionY").text()), function() {
																				finalValOffset("finalValY", "yMemory", function() {
																					$(".next-button").hide();
																				})
																			})
																		})
																	})
																})
															})
														})
													})
												})
												
											})
										})
									})
								})
							})
						})
					})
				})
			})
		}
		 
	next++;
	});
	}


	
function finalValOffset(from , to, callBackFunction) {
		$("#" + to).text($("#" + from).text());
		var a = $("#" + from).offset();
		$("#" + to).offset({top: a.top, left:a.left})
		$("#" + to).removeClass("opacity00");
		tl.to("#" + to, 1, {top:0,left:0, onComplete: function() {
			$(".introjs-nextbutton").show();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}	
	
function spanOffSet(from, to) {
		var allocate = $("#" + from ).offset();
		$("#" + to).offset({'top': allocate.top - ($(".panel-body").width() - $(".panel-body").height()) ,'left': allocate.left});
}	
	
function typing(selector, text, callBackFunction) {
		var typingSpeed = 40;
		$(selector).typewriting( text , {
			"typing_interval": typingSpeed,
			"cursor_color": 'white',
		}, function() {
			$(selector).removeClass("typingCursor");
			$(".introjs-nextbutton").show();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
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