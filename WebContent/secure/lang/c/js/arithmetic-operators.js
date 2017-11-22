var repeatSteps = false;
var firstAttempt = true;
var showIt = true;
var nextShow = false;
var tl = new TimelineLite();
var firstVal = 0;
var secondVal = 0;
var next = 1;
var first;
var second;

var aoReady = function() {
	$(".inputWidth").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		if ( e.which == 8 || e.which == 37 || e.which == 39 || e.which == 46) {
			$('.length-error-text').remove();
			return true;
		}
		if($(this).val().length >= max) {
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Max length was restricted to "+ max +" characters only.</div>");
			return false;
		} 
		 if ($("#selectType").val() == "int") {
			 if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
				$('.length-error-text').remove();	
			} 
			
			if((e.shiftKey) || (e.keyCode > 8 && e.keyCode < 48) || (e.keyCode > 57 && e.keyCode < 96) || (e.keyCode > 105)) {
				$('.length-error-text').remove();
				$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter only the integers.</div>");
				e.preventDefault();
			} 
		} 
		 if ($("#selectType").val() == "float") {
			if (e.keyCode == 190 || e.keyCode == 110) {
				$('.length-error-text').remove();
				return true;
			}
			if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
				$('.length-error-text').remove();	
			} 
			if((e.shiftKey) || (e.keyCode > 8 && e.keyCode < 48) || (e.keyCode > 57 && e.keyCode < 96) || (e.keyCode > 105)) {

				$('.length-error-text').remove();
				$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter only the Float.</div>");
				e.preventDefault();
			}
		} 
		 if ($("#selectType").val() == "char") {
			if((e.shiftKey) || (e.keyCode > 8 && e.keyCode < 48) || (e.keyCode > 106)) {
				$('.length-error-text').remove();
				$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter only the 1 Character.</div>");
				e.preventDefault();
			}
		} 
	})
	
	$("#selectType").on("change", function() {
		console.log(" select option changed..");
		$("#charStep > li").remove();
		$(".inputWidth").val("");
		var type = $("#selectType").val();
		$(".dataType").text(type);
		if (type === "int") {
			repeatSteps = true;
			$("#firstNum").attr({'placeholder':'eg: 5'})
			$("#secondNum").attr({'placeholder':'eg: 6'})
			$("#typeChange").text("integer");
			$(".inputWidth").attr("maxlength","2");
		} else if (type === "char") {
			repeatSteps = false;
			$("#var1, #exp1").text("char1");
			$("#var2, #exp2").text("char2");
			$("#typeChange").text("char");
			$("#firstNum").attr({'placeholder':'eg: a'})
			$("#secondNum").attr({'placeholder':'eg: b'})
			$(".inputWidth").attr("maxlength","1");
		} else if (type === "float") {
			$("#var1, #exp1").text("num1");
			$("#var2, #exp2").text("num2");
			$("#firstNum").attr({'placeholder':'eg: 5.5'})
			$("#secondNum").attr({'placeholder':'eg: 6.6'})
			$("#typeChange").text("float");
			$(".inputWidth").attr("maxlength","3");
		}
	})
	var count1 = 0;
	
	$(".inputWidth").bind("keyup", function(e) {
		var select = $(".active").text().trim();
		
		if ($("#firstNum").val().startsWith('.') || $("#firstNum").val().endsWith('.')) {
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter valid Float value.</div>");
			return false;
		}
		
		if ($("#secondNum").val().startsWith('.') || $("#secondNum").val().endsWith('.')) {
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter valid Float value.</div>");
			return false;
		}
		if (($("#firstNum").val().length != 0) && ($("#secondNum").val().length != 0)) {
			if (intro._currentStep == 1) {
				$(".introjs-nextbutton").show();
			} else if (select !== "--select--") {
				$("#submit").removeAttr("disabled");
			}
		} else {
			$(".introjs-nextbutton").hide();
			$("#submit").attr("disabled", "disabled");
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
						intro : "",
						position : "bottom",
						tooltipClass: "hide"
					},
					{
						element : "#initialize",
						intro : "",
						position : "right"
					},
					{
						element : "#selectDiv",
						intro : "",
						position : "right"
					},
					{
						element : "#operatorAnimation",
						intro : "",
						position : "right"
					},
					{
						element : "#animationDiv",
						intro : "",
						position : "right"
					}
				]
	})
	intro.onafterchange(function(targetElement) {
		var ElementId = targetElement.id;
		switch (ElementId) {
		case "initialize":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#animationDiv").removeClass("visibility-hidden");
				var text = "Enter <span id='typeChange' class='ct-code-b-yellow'>integer</span> values.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
				})
			});
		break;
		
		case "selectDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Select an <span class='ct-code-b-yellow'>arithmetic</span> operator and click on <b>Evaluate</b> button.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
					$(".introjs-tooltipbuttons").append('<span class="next-button visibility-hidden">Next →</span>');
					nextClick();	
				})
			});
		break;
		
		case "operatorAnimation":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-nextbutton').hide();
				var text = "Evaluating...<ul><span id='charStep'></span></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').hide();
					relationalAnimation();
				});
			});
		break;
		
		case "animationDiv":
			$('.introjs-nextbutton').hide();
			repeatSteps = true;
			firstAttempt = false;
			showIt = false;
			nextShow = true;
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
					 var text = "Feel free to try other combinations to learn how <span class='ct-code-b-yellow'>arithmetic operators</span> work."
					+"<ul><span id='charStep'></span></ul>"; 
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
					$("#firstNum").val("");
					$("#secondNum").val("")
					$("#restart").removeClass("opacity00");
					$("#restart").addClass("zIndex9999999");
					arithmeticRepeatMethod();
				})
			});
		break;
		}
	})
	intro.start();
	//$("button").attr('disabled','disabled');
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
								
								$("#informationDiv").append("<ul><li class = 'opacity00'>The arithmetic operators are: "
									+" <span class='ct-code-b-green'>+</span>, <span class='ct-code-b-green'>-</span>, <span class='ct-code-b-green'>*</span>, <span class='ct-code-b-green'>/</span>, <span class='ct-code-b-green'>%</span></li>"
									+" <li class = 'opacity00'>The rules for the arithemetic operators are: "
									+" <div style='width:98%;margin-bottom: 10px;'><table>"
									+" <th style='width: 1%;'>Operators</th>"
									+" <th>Rules</th>"
									+" <tr><td><span> <span class='ct-code-b-green'>+</span> (Addition)</span><br><span> <span class='ct-code-b-green'>-</span> (Substraction)</span><br><span> <span class='ct-code-b-green'>*</span> (Multiplication)</span></td>"
												+"<td><span>Both sides of the operators <span class='ct-code-b-green'>+</span>, <span class='ct-code-b-green'>-</span> (or) <span class='ct-code-b-green'>*</span> should be numerical values.</span><br><span><b>For example: </b>In <span class='common-expression'>int <b>total</b> = x + y;</span><br><span>both <b>x</b> and <b>y</b> should be numbers.</span></span></td></tr>"
									+" <tr><td><span> <span class='ct-code-b-green'>/</span> (Division)</span></td><td><span>Division operator requires the second operand to be non-zero.</span>"
												+"<br><span><b>For example: </b>In <span class='common-expression'>int <b>z</b> = x / y;</span><br><span><b>y</b> should be non-zero.</span></span></td></tr>"
									+" <tr><td><span> <span class='ct-code-b-green'>%</span> (Modules)</span></td><td><span>While using <span class='ct-code-b-green'>%</span> (modules) operator both operands should be of integer values.<br> And the second operand must be non-zero.</span><span>"
												+"<br><span><b>For example: </b>In <span class='common-expression'>int <b>z</b> = x % y;</span><br><span>both <b>x</b> and <b>y</b> should be integers and <b>y</b> should be non-zero.</span></span>"
												+"<br><b>Note</b>: <span class='ct-code-b-green'>%</span> operator does not work with <b>float</b> values.</span></td></tr>"
									+" </table></div>"
									+" </li></ul>");
								
								tl.to($("#informationDiv li:eq(0)"), 1, {opacity : 1, onComplete: function() {
									tl.to($("#informationDiv li:eq(1)"), 1, {opacity : 1, onComplete: function() {
										$("#informationDiv").addClass("zIndex9999999");
										intro.nextStep();
										$('.dropdown-menu').css({'min-width':$(".dropdown").width()})
									}})
								}})
					
	$("#submit").click(function() {
		$("#charStep > li").remove();
		if (next > 1) {
			relationalAnimation();
		}
		if (next == 1) {
			console.log(" in the next step " + next);
			next = 2;
			intro.nextStep();
		}
	});
					
	$("#restart").click(function() {
		location.reload(true);
	})
	
	$('.dropdown').on( 'click', '.dropdown-menu li a', function() { 
		$('.dropdown-menu').css({'min-width':$(".dropdown").width()})
	   var target = $(this).html();
	   $(this).parents('.dropdown-menu').find('li').removeClass('active');
	   $(this).parent('li').addClass('active');
	   $(this).parents('.dropdown-select').find('.dropdown-toggle').html(target + ' <span class="caret"></span>');
	   
	   var value = $('.active').text().trim();
		if (value === "--select--") {
			console.log(" in the if condition of change.. ");
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Select the arithmetic operator from the menu.</div>");
			$("#submit").attr("disabled", "disabled");
		} else if ($("#firstNum").val().length == 0 || $("#secondNum").val().length == 0) {
			$("#submit").attr("disabled", "disabled");
		} else {
			$('.length-error-text').remove();
			//$("#selectSub").html(options[value]);
			$("#submit").removeAttr("disabled");
		}
	});
};

function nextClick() {
	$(".next-button").click(function() {
		$("#charStep > li").remove();
		 
			$(".next-button").hide();
			$("#operatorAnimation > div div:nth-child(2)").removeClass('visibility-hidden');
			
			var firstNum = $("#firstNum").val();
			var secondNum = $("#secondNum").val();
			
			if ($("#selectType").val() === "float") {
				 if (firstNum.indexOf('.') === -1) {
					 firstNum = firstNum + ".00";
				 }
				 
				 if (secondNum.indexOf('.') === -1) {
					 secondNum = secondNum + ".00";
				 }
				 
			 } 
			
			flipEffect("#num1Val", firstNum, function() {
				flipEffect("#num2Val", secondNum, function() {
					console.log("in the line 565");
					$("#result").removeClass("length-error-text");
					 if ($('.active').text().trim() === "%" && $("#selectType").val() === "float") {
						repeatSteps = false;
						$(".length-error-text").remove();
						console.log(" in the % and float...");
						$("#result").text("Error").addClass("length-error-text");
								$("#operatorAnimation > div div:nth-child(3)").removeClass('visibility-hidden');
								
								var text = "<span class='length-error-text'>Error : </span><span class='ct-code-b-yellow'>%</span> operator is not applicable for"
											+" <span class=''>float</span> values."; 
								typing(".introjs-tooltiptext", text, function() {
									//$(".introjs-nextbutton").hide();
									if (nextShow) {
										setTimeout(function() {
											frequentStepText()
										}, 800)
									} else {
										
									}
								})
								
					} else  if (Math.floor(secondNum) === 0 && $("#selectType").val() !== "char") {
						
								if ($('.active').text().trim() === "%" || $('.active').text().trim() === "/") {
									$(".length-error-text").remove();
									repeatSteps = false;
									$("#result").text("Error").addClass("length-error-text");
									$("#operatorAnimation > div div:nth-child(3)").removeClass('visibility-hidden');
										//$(".length-error-text").remove();
										var text = "<span class='ct-code-b-red'>Error</span> : The second operand of </span><span class='ct-code-b-yellow'>"+ $('.active').text().trim() +"</span>"
												+" operator must be non-zero.";
										typing(".introjs-tooltiptext", text, function() {
											//repeatSteps = false;
											if (nextShow) {
												setTimeout(function() {
													frequentStepText()
												}, 800)
											} else {
												
											}
										})
								} else  {
									repeatSteps = false;
									console.log("in the line 609")
									handlingExceptionAnimation()
								}
					} else {
						repeatSteps = false;
						console.log("in the line 613")
						handlingExceptionAnimation();
					}	
					
				if (repeatSteps) {
						console.log(" In the repeat Steps ************")
						 var text = "To know the working of another operator feel free to provide select datatype provide appropriate values and "
					 			+"select the operator to evaluate the result.<br/>";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-nextbutton").hide();
							$("#firstNum").val("");
							$("#secondNum").val("")
							$("#restart").removeClass("opacity00");
							$("#restart").addClass("zIndex9999999");
							arithmeticRepeatMethod();
						})
					
					}   
				});	
			});
		
	});
}
function frequentStepText() {
		/* var text = "To know the working of another operator feel free to provide select datatype provide appropriate values and "
 			+"select the operator to evaluate the result.<br/>";
		typing(".introjs-tooltiptext", text, function() { */
			$(".introjs-nextbutton").hide();
			$("#firstNum").val("");
			$("#secondNum").val("")
			$("#restart").removeClass("opacity00");
			$("#restart").addClass("zIndex9999999");
			arithmeticRepeatMethod();
	//})
	}
function handlingExceptionAnimation() {
	if ($("#selectType").val() === "char") {
		var text = "<li>Here we convert the character to the <span class='ct-code-b-yellow'>ASCII</span> value.</li>";
		$(".introjs-nextbutton").hide();
		typing("#charStep", text, function() {
			$(".introjs-nextbutton").hide();
			flipEffect("#num1Val", $("#num1Val").text().charCodeAt(0), function() {
				flipEffect("#num2Val", $("#num2Val").text().charCodeAt(0), function() {
					console.log("in the line 657");
					operatorEvaluationAnimaton(function() {
						var text = "<li>The result value of the <span class='ct-code-b-yellow'>char</span>"
								+" will convert into <span class='ct-code-b-yellow'>ASCII</span> code and"
								+" stores in a variable <span class='ct-code-b-yellow'>result</span>.</li>";
								$(".introjs-nextbutton").hide();
								typing("#charStep", text, function() {
									
									//if (repeatSteps) {
										console.log(" In the repeat Steps ************")
										$(".introjs-nextbutton").hide();
										setTimeout(function() {
											var text = "To know the working of another operator feel free to provide select datatype provide appropriate values and "
									 			+"select the operator to evaluate the result.<br/>"
											typing(".introjs-tooltiptext", text, function() {
												$(".introjs-nextbutton").hide();
												$("#firstNum").val("");
												$("#secondNum").val("")
												$("#restart").removeClass("opacity00");
												$("#restart").addClass("zIndex9999999");
												arithmeticRepeatMethod();
											})
										}, 800);
									if (firstAttempt) {
										$(".introjs-nextbutton").show();
									}
								});
					});
				})
			})
		});
	} else if ($("#selectType").val() === "float") {
		operatorEvaluationAnimaton(function() {
			gettingResult();
		});
	}  else if ($("#selectType").val() === "int") {
		operatorEvaluationAnimaton(function() {
			gettingResult();
		});
	} 
}


function gettingResult() {
	if (intro._currentStep == 3) {
		var text = "After the evaluation we get the result as <span class='ct-code-b-yellow'>"+ $("#result").text()+"</span>";
		typing(".introjs-tooltiptext", text, function() {
			 if (next == 2) {
					$('.introjs-nextbutton').show();
					next++;
				} 
		})
	}
}

function relationalAnimation() {
	$("#operatorAnimation").empty();
	//$("button").attr('disabled','disabled');
	$("#submit").attr('disabled','disabled');
	$('.length-error-text').remove();
	console.log(" in the relationalAnimation **********")
	var dataType = $("#selectType").val();
	$("#operatorAnimation").append("<div class='col-xs-offset-3'><div><span class=''><b class='dataType'>"+ dataType +"</b></span> <span>result</span> = <span id='exp1'>num1</span><span class='select-operator ct-code-b-green'></span><span id='exp2'>num2</span></div>"+
			"<div class='visibility-hidden'><span class='visibility-hidden'><b class='dataType'>"+ dataType +"</b></span> <span class='visibility-hidden'>result  </span> = <span id='num1Val' class='position-relative'>num1</span><span class='select-operator ct-code-b-green'></span><span id='num2Val' class='position-relative'>num2</span></div>"+
			"<div class='visibility-hidden'><span class='visibility-hidden'><b class='dataType'>"+ dataType +"</b></span> <span class='visibility-hidden'>result  </span> = <span></span><span id='result' class='position-relative'></span></div></div>");
	var operator = $("#selectList option:selected").text();
	//$(".select-operator").text(operator);
	var operator = " "+$(".active").text().trim()+" ";
	$(".select-operator").text(operator);
	var firstVal = $("#firstNum").val();
	var secondVal = $("#secondNum").val();
	$(".next-button").click();
}

function arithmeticRepeatMethod() {
	$("#operatorAnimation").empty();
	$("#submit").attr('disabled','disabled');
	$('.length-error-text').remove();
	console.log(" in the arithmeticRepeatMethod **********");
	var dataType = $("#selectType").val();
	$("#operatorAnimation").append("<div class='col-xs-offset-3'><div><span class=''><b class='dataType'>"+ dataType +"</b></span> <span>result</span> = <span id='exp1'>"+ $("#var1").text() +"</span><span class='select-operator ct-code-b-green'></span><span id='exp2'>"+$("#var2").text()+"</span></div>"+
			"<div class='visibility-hidden'><span class='visibility-hidden'><b class='dataType'>"+dataType+"</b></span> <span class='visibility-hidden'>result  </span> = <span id='num1Val' class='position-relative'>num1</span><span class='select-operator ct-code-b-green'></span><span id='num2Val' class='position-relative'>num2</span></div>"+
			"<div class='visibility-hidden'><span class='visibility-hidden'><b class='dataType'>"+dataType+"</b></span> <span class='visibility-hidden'>result  </span> = <span></span><span id='result' class='position-relative'></span></div></div>");
	var operator = $("#selectList option:selected").text();
	//$(".select-operator").text(operator);
	var operator = " "+$(".active").text().trim()+" ";
	$(".select-operator").text(operator);
}

function operatorEvaluationAnimaton(callBackFunction) {
	
	//var operator = $("#selectList option:selected").text().trim();
	var operator = $(".active").text().trim();
	console.log("operator ::: ");
	console.log(operator);
	/*  if ($("#selectType").val() === "float") {
		 
	 }  */
	 
	 first = $("#num1Val").text().trim();
	 second = $("#num2Val").text().trim();
	if ($("#selectType").val() === "float") {
		if (operator === "+") {
			console.log(" in the " + operator);
			$("#result").text(Number(first) + Number(second));
		} else if (operator === "-") {
			$("#result").text(Number(first) - Number(second));
		} else if (operator === "%") {
			$("#result").text(Number(first) % Number(second));
		} else if (operator === "/") {
			$("#result").text((Number(first) / Number(second)).toFixed(6));
		} else if (operator === "*") {
			$("#result").text(Number(first) * Number(second));
		}
	} else {
		if (operator === "+") {
			console.log(" in the " + operator);
			$("#result").text((Number(first) + Number(second)));
		} else if (operator === "-") {
			$("#result").text(Number(first) - Number(second));
		} else if (operator === "%") {
			$("#result").text(Math.floor(Number(first) % Number(second)));
		} else if (operator === "/") {
			$("#result").text(Math.floor(Number(first) / Number(second)));
		} else if (operator === "*") {
			$("#result").text(Number(first) * Number(second));
		}
		
	}
	if ($("#selectType").val() === "float") {
		
		if ($("#result").text().indexOf('.') === -1) {
			$("#result").text($("#result").text() + '.00');
			$("#operatorAnimation > div div:nth-child(3)").removeClass('visibility-hidden');
		} else {
			$("#operatorAnimation > div div:nth-child(3)").removeClass('visibility-hidden');
		}
	} else {
		$("#operatorAnimation > div div:nth-child(3)").removeClass('visibility-hidden');
	}
	
	$("button").removeAttr('disabled');
	/* if (next == 2) {
		$('.introjs-nextbutton').show();
		next++;
	} */
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}

function typing(selector, text, callBackFunction) {
		var typingSpeed = 15;
		$(selector).typewriting( text , {
			"typing_interval": typingSpeed,
			"cursor_color": 'white',
		}, function() {
			$(selector).removeClass("typingCursor");
			if (showIt) {
				$(".introjs-nextbutton").show();
			}
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