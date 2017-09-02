/**
 * 
 */
var execute = 0;
var intro;
var i = 0;
var j = 0;
var k = 0;
var Matrice = "";
var forStep = 0;
var rcValues = "";
var matrixMultiplicationReady = function() {
	$("#explanation").append("<div class='col-xs-12 padding0' style='margin-top:50px;' ></div>");
	intro =  introJs();
intro.setOptions({
	showStepNumbers: false,
	exitOnOverlayClick: false,
	showBullets: false,
	exitOnEsc: false,
	keyboardNavigation: false,
	steps : [
				{
					element : "#explanation",
					intro : "",
					position : "right",
				} ,
				{
					element : "#restart", // when dynamic steps added it is coming last step after execution of dynamic step not removing.
					intro : "Click to restart.",
					position : "right",
				} 
			]
})
intro.onafterchange(function(targetElement) {
	var ElementId = targetElement.id;
	var action = intro._introItems[intro._currentStep].action;
	switch (ElementId) {
	case "explanation":
		//matrixProgram();
	break;
	case "varDec":
		 $(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "It is a declaration of <span class='ct-code-b-yellow'>int</span> variables given inside "
						+"the <span class='ct-code-b-yellow'>main()</span> function we call it as a local variables.";
			typing(".introjs-tooltiptext", text, function() {
				preSteps("A");
				$(".introjs-nextbutton").show();
			})
		}); 
		
		
		//mulSteps();
		
	break;
	
	case "row" + Matrice:
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "Here the variable <span class='ct-code-b-yellow'>i</span> is initialized with <span class='ct-code-b-yellow'>0</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			})
		});
	break;
	
	 case "readMatrixA":
		 $(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "This <span class='ct-code-b-yellow'>for(...) loop</span> is to read <span class='ct-code-b-yellow'>a[][]</span> matrix.";
			typing(".introjs-tooltiptext", text, function() {
				Matrice = $("#readMatrixA").attr('eval');
				$(".introjs-nextbutton").show();
			})
		});
	break;
	
	 case "readMatrixB"://readMatrixC
		 $(".introjs-nextbutton").hide();
		 	$("#iRowA").text("i");
			$(".introjs-helperLayer").one("transitionend", function() {
				i = 0;
				j= 0;
				forStep = 0;
				rcValues = "";
				var text = "This <span class='ct-code-b-yellow'>for(...) loop</span> is to read "
							+"<span class='ct-code-b-yellow'>b[][]</span> matrix.";
				typing(".introjs-tooltiptext", text, function() {
					Matrice = $("#readMatrixB").attr('eval');
					$(".introjs-nextbutton").show();
				})
			});
		break;
		
	 case "readMatrixC":
		 	//$("#iRowA").text("i");
		 	$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				i = 0;
				j= 0;
				forStep = 0;
				rcValues = "";
				var text = "This <span class='ct-code-b-yellow'>for(...) loop</span> is to multiply the <span class='ct-code-b-yellow'>a[][]</span> and "
							+"<span class='ct-code-b-yellow'>b[][]</span> matrix.";
				typing(".introjs-tooltiptext", text, function() {
					Matrice = $("#readMatrixC").attr('eval');
					$("#tableC").removeClass("opacity00");
					$(".introjs-nextbutton").show();
				})
			});
		break;
	
	case "condRow" + Matrice:
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
				if (i == 0) {
					for (var row = 0; row < parseInt($("#rows" + Matrice).text()); row++) {
						//loopSteps(row);
						//var text = "Here the Matrix <span class='ct-code-b-yellow'>"+ Matrice + "</span> values are :";
						//typing(".introjs-tooltiptext", text, function() {
							if (Matrice == "A") {
								loopSteps(row, "A", "a", "1");
							} else if (Matrice == "B") {
								loopSteps(row, "B", "b", "2");
							} else if (Matrice == "C") {
								for (var row = 0; row < parseInt($("#rows" + Matrice).text()); row++) {
									mulStepsDynamic(row);
								}
							}
						//})
					}
				}
			
			if (i < parseInt($("#rows" + Matrice).text())) {
				j = 0;
				flipEffect("#iRow" + Matrice, i, function() {
					var text = "Here the " + i +" &lt; "+ $("#rows" + Matrice).text() +" condition is <span class='ct-code-b-yellow'>"+ (i < parseInt($("#rows" + Matrice).text())) + "</span>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					})
				});
			} else {
				flipEffect("#iRow" + Matrice, i, function() {
					var text = "Here the " + i +" &lt; "+ $("#rows" + Matrice).text() +" condition is <span class='ct-code-b-yellow'>"+ (i < parseInt($("#rows" + Matrice).text())) + "</span>";
					typing(".introjs-tooltiptext", text, function() {
						if (Matrice == "A") {
							preSteps("B");
							$(".removeId").removeAttr("id");
						} else if (Matrice == "B") {
							afterInsertedElementSteps();
						} else if (Matrice == "C") {
							mulMatrixDisplay();
						}
						$(".introjs-nextbutton").show();
					})
				})
			}
		});
	break;
	
	case "incRow" + Matrice:
		
		$("#jCol" + Matrice).text("j");
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "The <span class='ct-code-b-yellow'>i</span> value is incremented by <span class='ct-code-b-yellow'>1</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
				++i;
			})
		})
	break;
	
	case "col" + Matrice:
		$(".introjs-nextbutton").hide();
		$("#iRow" + Matrice).text("i");
		$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>j</span> is initialized with <span class='ct-code-b-yellow'>0</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				})
		});
	break;
	
	case "condCol" + Matrice:
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			if (j < parseInt($("#cols" + Matrice).text())) {
			flipEffect("#jCol" + Matrice, j, function() {
				var text = "Here the " + j +" &lt; "+ $("#cols" + Matrice).text() +" condition is <span class='ct-code-b-yellow'>"+ (j < parseInt($("#cols" + Matrice).text()))+"</span>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				})
			});
			} else {
				flipEffect("#jCol" + Matrice, j, function() {
					var text = "Here the " + j +" &lt; "+ $("#cols" + Matrice).text() +" condition is <span class='ct-code-b-yellow'>"+ (j < parseInt($("#cols" + Matrice).text()))+"</span>";
						typing (".introjs-tooltiptext", text, function(){
							$(".introjs-nextbutton").show();
						})
					})
				}
			});
	break;
	
	case "incCol" + Matrice:
		$("#mulCngK").text("k");
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "The <span class='ct-code-b-yellow'>j</span> value is incremented by <span class='ct-code-b-yellow'>1</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
					++j;
				})
		})
	break;
	
	case "printf1":
	case "printf2":
	case "printf3":
	case "printf4":
	case "printf5":	
		$("#jCol" + Matrice).text("j");
		$("#iRow" + Matrice).text("i");
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "The <span class='ct-code-b-yellow'>printf()</span> function will print the text which it is contains.";
				typing(".introjs-tooltiptext", text, function() {
					if (ElementId == "printf3") {
						rcValues = $("[id ^= matA]").text();
						$("#output").append("<span id='opprintfA'class='opacity00'>The matrix a[][] is :</span><br/>");
						$("#output").append("<span class = 'aVal opacity00'><span>"+rcValues.charAt(0)+"</span>&emsp;&emsp;&emsp;<span>"+rcValues.charAt(1)+"</span>"
								+"&emsp;&emsp;&emsp;<span>"+rcValues.charAt(2)+"</span><br/><span>"+rcValues.charAt(3)+"</span>&emsp;&emsp;&emsp;<span>"+rcValues.charAt(4)+"</span>"
								+"&emsp;&emsp;&emsp;<span>"+rcValues.charAt(5)+"</span></span><br/>");
						$(".introjs-nextbutton").show();
					} else if (ElementId == "printf4") {
						rcValues = $("[id ^= matB]").text();
						$("#output").append("<span id='opprintfB'class='opacity00'>The matrix b[][] is :</span><br/>");
						$("#output").append("<span class = 'bVal opacity00' ><span>"+rcValues.charAt(0)+"</span>&emsp;&emsp;&emsp;<span>"+rcValues.charAt(1)+"</span><br/>"
								+"<span>"+rcValues.charAt(2)+"</span>&emsp;&emsp;&emsp;<span>"+rcValues.charAt(3)+"</span><br/><span>"+rcValues.charAt(4)+"</span>"
								+"&emsp;&emsp;&emsp;<span>"+rcValues.charAt(5)+"</span></span><br/>");
						$(".introjs-nextbutton").show();
					} else if (ElementId == "printf5") {
						$("#output").append("<span id='pmatrix' class='opacity00'>After matrix multiplication is :</span><br/>");
						$("#output").append("<span class = 'cVal opacity00'><span>"+ $("#c00").text() +"</span>&emsp;&emsp;&emsp;<span>"+ $("#c01").text() +"</span><br/>"
								+"<span>"+ $("#c10").text() +"</span>&emsp;&emsp;&emsp;<span>"+ $("#c11").text() +"</span></span><br/>");
					}
					$(".introjs-nextbutton").show();
				})
		});
	break;
	
	case "scanf1":
	case "scanf2":	
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "<span class='ct-code-b-yellow'>scanf()</span> function reads the value.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				})
		});
	break;
	
	case "outputDiv":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$("#outputDiv").removeClass("opacity00");
			scrollAtOutput();
			if (action == "print") {
				$("#nameSpan"+i+""+j).removeClass("opacity00")
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
			} else if (action == "printfA" || action == "printfB" || action == "printfC") {
				if (action !== "printfC") {
					$("#op" + action).removeClass("opacity00");
				} else {
					$("#pmatrix").removeClass("opacity00")
				}
					setTimeout(function() {
						intro.nextStep();
					}, 1000);
				//$(".introjs-nextbutton").show();
			} else if (action == "displayA" || action == "displayB" || action == "displayC") {
				var text = "The matrix values are";
				typing(".introjs-tooltiptext", text, function() {
					if (action == "displayA") {
						$(".aVal").removeClass("opacity00");
						$(".introjs-nextbutton").show();
					} else if (action == "displayB") {
						$(".bVal").removeClass("opacity00");
						mulSteps();
						$(".introjs-nextbutton").show();
					} else {
						$(".cVal").removeClass("opacity00");
						$(".introjs-nextbutton").show();
					}
				})
				
				
			} else {
				var text = "Enter the value...";
					typing(".introjs-tooltiptext", text, function() {
						$("#input"+i+""+j).focus();
						//$(".introjs-nextbutton").show();
					})
			}
		});
	break;
	
	case "matrix" + Matrice:
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			if (i == 0 && j == 0) {
				//rcValues = $("#input"+i+""+j).val();
				var text = "The given value will be placed at <span class='ct-code-b-yellow'>("+i+","+j+")</span> i.e.,(row, column).";
				typing(".introjs-tooltiptext", text, function() {
					$("#matrix" + Matrice).removeClass("opacity00").addClass("animated zoomIn").on("animationend", function() {
						flipEffect("#mat"+ Matrice +""+ i +""+ j, $("#input"+i+""+j).val(), function() {
							$(".introjs-nextbutton").show();
						})
					})
				})
			} else {
			//	rcValues = rcValues + $("#input"+i+""+j).val();
			var text = "The given value will be placed at <span class='ct-code-b-yellow'>("+i+","+j+")</span> i.e.,(row, column)";
				typing(".introjs-tooltiptext", text, function() {
					flipEffect("#mat"+ Matrice +""+i+""+j, $("#input"+i+""+j).val(), function() {
						$(".introjs-nextbutton").show();
					})
				})
			}
		})
	break;
		
	case "matrixAdis":
	case "matrixBdis":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "Here we are displaying the values of a matrix.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			})
		});
	break;
	
	case "mulKini":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "Here the <span class='ct-code-b-yellow'>k</span> is initialized with <span class='ct-code-b-yellow'>0</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
		});
	break;
	
	case "mulKcond":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			if (k < parseInt($("#mul").text())) {
				flipEffect("#mulCngK", k, function() {
					var text = "Here the " + k +" &lt; "+ $("#mul").text() +" condition is <span class='ct-code-b-yellow'>"+ (k < parseInt($("#mul").text()))+"</span>";
					typing(".introjs-tooltiptext", text, function() {
						$(".introjs-nextbutton").show();
					})
				});
				} else {
					flipEffect("#mulCngK", k, function() {
						var text = "Here the " + k +" &lt; "+ $("#mul").text() +" condition is <span class='ct-code-b-yellow'>"+ (k < parseInt($("#mul").text()))+"</span>";
							typing (".introjs-tooltiptext", text, function(){
								$(".blinking-white").removeClass("blinking-white");
								k = 0;
								$(".introjs-nextbutton").show();
							})
						})
					}
		});
	break;
	
	case "mulForm":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			//var text = "The matrix at c["+ i +"]["+ j +"] is initialized with 0.";
			var text = "This formulae is used to multiply the two matrices.";
			typing(".introjs-tooltiptext", text, function() {
				//$(".introjs-nextbutton").show();
				$("#formulae").addClass("blinking-pink");
				setTimeout(function() {
					formulaeEvaluation();
				}, 400);
			})
		});
	break;
	
	case "mulKinc":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "Here the value <span class='ct-code-b-yellow'>k</span> is incremented by <span class='ct-code-b-yellow'>1</span>.";
			typing(".introjs-tooltiptext", text, function() {
				++k;
				$(".introjs-nextbutton").show();
			})
		});
	break;
	
	case "mulCini":
		$("#jColC").text("j");
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "The matrix at <span class='ct-code-b-yellow'>c["+ i +"]["+ j +"]</span> "
						+"is initialized with <span class='ct-code-b-yellow'>0</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$("#tableC").addClass("zIndex");
				$("#c"+i+""+j).addClass("blinking-white");
				$("#c"+i+""+j).text("0");
				$(".introjs-nextbutton").show();
			})
		});
	break;
	//#10b1f0
	case "animation":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "The value at matrix <span class='ct-code-b-yellow'>c["+i+"]["+j+"]</span>";
			typing(".introjs-tooltiptext", text, function() {
				$("#c"+ i + "" + j).text($("#formulae").text());
				setTimeout(function(){
					$("#formulae").empty();
					$("#formulae").append('<span id="cij" class="position-relative">c[<span id="ci" class="position-relative">i</span>]'
							+'[<span id="cj" class="position-relative">j</span>]</span> + <span id="aik" class="position-relative">'
							+'a[<span id="ai" class="position-relative">i</span>][<span id="ak" class="position-relative">k</span>]</span>'
							+' * <span id="bkj" class="position-relative">b[<span id="bk" class="position-relative">k</span>]'
							+'[<span id="bj" class="position-relative">j</span>]</span>');
					$(".introjs-nextbutton").show();
				}, 500);
			})
		})
	break;
		
	case "finalMatrix":
		$(".introjs-nextbutton").hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			var text = "This <span class='ct-code-b-yellow'>for(...) loop</span> is to display the matrix muliplication values.";
			typing(".introjs-tooltiptext", text, function() {
				$(".introjs-nextbutton").show();
			});
		});
	break;
	
	case "restart":
		$(".introjs-nextbutton").hide();
		$("#restart").removeClass("opacity00");
	break;
	}
	})
	
	
//})
intro.start();
$('.introjs-tooltipbuttons').append("<a class='introjs-button executeAnimationBtn'>Next &#8594;</a>");
$('.introjs-prevbutton').hide();
$('.introjs-skipbutton').hide();
$(".introjs-nextbutton").hide();
$('.executeAnimationBtn').hide()
var text = "In this we learn how the <span class='ct-code-b-yellow'>two dimensional array</span> will work.<span><ul id='step'></ul></span>";
	typing(".introjs-tooltiptext", text, function() {
		//$(".introjs-nextbutton").show();
		//matrixProgram();
		$('.executeAnimationBtn').show();
	})
	
	$(".executeAnimationBtn").click(function() {
		conceptExplanation();
	})
	
	$("#restart").click(function() {
		location.reload(true);
	})
}

function formulaeEvaluation() {
	flipEffect("#ci", i, function() {
		flipEffect("#cj", j, function() {
			flipEffect("#ai", i, function() {
				flipEffect("#ak", k, function() {
					flipEffect("#bk", k, function() {
						flipEffect("#bj", j, function() {
							flipEffect("#cij", $("#c"+i+""+j).text(), function() {
								flipEffect("#aik", $("#matA"+i+""+k).text(), function() {
									flipEffect("#bkj", $("#matB"+k+""+j).text(), function() {
	var val = parseInt($("#aik").text()) * parseInt($("#bkj").text()) + parseInt($("#cij").text())
	flipEffect("#formulae", val, function() {
		$("#formulae").removeClass("blinking-pink");
		   //  $("#c"+i+""+j).text($("#formulae").text())
		$(".introjs-nextbutton").show();
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


function afterInsertedElementSteps() {
	var step = 0;
	var nextStep = {
			element : "#printf3",
			intro : "",
			position : "right",
			
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#outputDiv",
			intro : "",
			position : "left",
			tooltipClass: "hide",
			action :"printfA"
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#matrixAdis",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#outputDiv",
			intro : "",
			position : "left",
			action : "displayA"
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#printf4",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#outputDiv",
			intro : "",
			position : "left",
			action :"printfB",
			tooltipClass: "hide"
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#matrixBdis",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#outputDiv",
			intro : "",
			position : "left",
			action : "displayB"
			
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
}

function loopSteps(i, matrix, name, val) {
	for(var j = 0; j < parseInt($("#cols" + matrix).text()); j++) {
		if (j == 0) {
			var nextStep = {
					element : "#col" + matrix,
					intro : "",
					position : "right",
				}
				intro.insertOption(intro._currentStep + ++forStep, nextStep);
		}
		
		var nextStep = {
				element : "#condCol" + matrix,
				intro : "",
				position : "right",
			}
			intro.insertOption(intro._currentStep + ++forStep, nextStep);
		
		var nextStep = {
				element : "#printf" + val,
				intro : "",
				position : "right",
			}
			intro.insertOption(intro._currentStep + ++forStep, nextStep);
		
		var nextStep = {
				element : "#outputDiv",
				intro : "",
				position : "left",
				tooltipClass : "hide",
				action : "print"
			}
			intro.insertOption(intro._currentStep + ++forStep, nextStep);
		
		var nextStep = {
				element : "#scanf" + val,
				intro : "",
				position : "right",
			}
			intro.insertOption(intro._currentStep + ++forStep, nextStep);
		
		var nextStep = {
				element : "#outputDiv",
				intro : "",
				position : "left",
				action : "read"
			}
			intro.insertOption(intro._currentStep + ++forStep, nextStep);
		
		var nextStep = {
				element : "#matrix" + matrix,
				intro : "",
				position : "left",
			}
			intro.insertOption(intro._currentStep + ++forStep, nextStep);
		
		var nextStep = {
				element : "#incCol" + matrix,
				intro : "",
				position : "right",
			}
			intro.insertOption(intro._currentStep + ++forStep, nextStep);
		
		$("#output").append("<span class='opacity00 removeId' id='nameSpan"+i+''+j+"'>Enter the value of "+ name + "[" + i + "][" + j + "] :"
				+" <span id='nameEnterspan'><input class='index-textbox-size input removeId' type='text' id='input"+i+""+j+"' Maxlength='1'></span></span><br/>");
	}
	
	var nextStep = {
			element : "#condCol" + matrix,
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++forStep, nextStep);
	
	var nextStep = {
			element : "#incRow" + matrix,
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++forStep, nextStep);
	
	var nextStep = {
			element : "#condRow" + matrix,
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++forStep, nextStep);
		validationInput();
}

function validationInput() {
	 $('.input').on("keydown", function(e) {
			$(".length-error-text").remove();
			var max = $(this).attr("maxlength"); 
			
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 35, 36, 37, 39]) !== -1) {
				return;
			}
			
			if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
				$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter only integer.</div>");
				e.preventDefault();
			}
			
			if ($(this).val().length > max) {
				$(".introjs-tooltiptext").append("<div class='length-error-text'>Max Length 1 digit only</div>");
				e.preventDefault();
			}
			
			if ($(this).val().length < 1) {
				$(".introjs-nextbutton").hide();
			}
		}); 
	  
	   $(".input").on("keyup", function(e) {
			var max = $(this).attr("maxlength");
			if ($(this).val() == "") {
				$(".introjs-nextbutton").hide();
			} else {
				$(".introjs-nextbutton").show();
			}
		});
}

function conceptExplanation() {
	/* if (execute == 0) {
		$('.executeAnimationBtn').hide();
		var step1 = "<div>To know how the two dimensional array works , we take the matrix multiplication as an example.</div><div id='variable'></div>";
	} */
	if (execute == 0) {
		$('.executeAnimationBtn').hide();
		var text = "<div class='opacity00'>To know how the two dimensional array works , we take the matrix multiplication as an example.</div><div id='variable' class='opacity00'></div>";
		$("#explanation div:eq(0)").append(text);
		//$("#explanation div:eq(0) > *").first().addClass("opacity00");
		/*typing("#explanation div:eq(0)", text, function() {
			$('.executeAnimationBtn').show();
		}) */
		TweenMax.to($("#explanation div:eq(0) div:nth-child(1)"),1, {opacity : 1, onComplete: function() {
			$('.executeAnimationBtn').show();
		}});
	} else if (execute == 1) {
		$('.executeAnimationBtn').hide();
		var text = "<li>we take two array variables with <span class='ct-code-b-yellow'>a</span> and "
					+"<span class='ct-code-b-yellow'>b</span>.</li><span id='step2'></span>";
		typing("#step", text, function() {
    		var text = "<div><span>int a[3][3], b[3][3];</span></div><div id='revealMatrix' class='opacity00'></div>";
    		$("#variable").append(text);
    		TweenMax.to($("#variable"), 1, {opacity : 1, onComplete: function() {
    			$('.executeAnimationBtn').show();
    		}});
			/* typing ("#variable", text, function() {
				$('.executeAnimationBtn').show();
			}) */
		})
	} else if (execute == 2) {
		$('.executeAnimationBtn').hide();
		var text = "<div>The matrix <b>a</b> contains m x n rows and columns, matrix <b>b</b> contains <br/> p x q rows and columns. :</div> ";
		$("#revealMatrix").append(text);
		TweenMax.to($("#revealMatrix"), 1, {opacity : 1, onComplete: function() {
			$("#explanation div:eq(0)").append("<div id = 'matrices' class='opacity00'></div>");
    		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    		matrixCreation(arr, 'a', 'm', 'n');
			var arr = [11, 12, 13, 14, 15, 16, 17, 8, 9];
			matrixCreation(arr, 'b', 'p', 'q', function() {
				TweenMax.to($("#matrices"), 1, {opacity : 1, onComplete: function() {
	    			$('.executeAnimationBtn').show();
	    		}});
			});
			//$('.executeAnimationBtn').show();
		}});
		/* typing ("#revealMatrix", text, function() {
			$("#explanation div:eq(0)").append("<div id = 'matrices'></div>");
	    		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	    		matrixCreation(arr, 'a', 'm', 'n');
				var arr = [11, 12, 13, 14, 15, 16, 17, 8, 9];
				matrixCreation(arr, 'b', 'p', 'q', function() {
					$('.executeAnimationBtn').show();
				});
		}) */
	} else if (execute == 3) {
			$('.executeAnimationBtn').hide();
    		$("#rowOfMatrix1, #rowOfMatrix2").addClass("blinking-white");
    		flipEffect("#rowOfMatrix1 > span", 3, function() {
    			flipEffect("#rowOfMatrix2 > span", 3, function() {
	    				$(".blinking-white").removeClass("blinking-white");
	    				$("#colOfMatrix1, #colOfMatrix2").addClass("blinking-white");
    				flipEffect("#colOfMatrix1 > span", 3, function() {
    					flipEffect("#colOfMatrix2 > span", 3, function() {
    						$(".blinking-white").removeClass("blinking-white");
    						$("#colOfMatrix1, #rowOfMatrix2").addClass("background-green");
    						$('.executeAnimationBtn').show();
	    				})
    				})
	    		})
    		})
	} else if (execute == 4) {
		$('.executeAnimationBtn').hide();
		var text = "<li>The matrix  <span class='ct-code-b-yellow'>a</span> column and matrix <span class='ct-code-b-yellow'>b</span> row is equal i.e., 3(n and p) after "
					+"multiplying both matrix we get 3 x 3(m and q).</li>";
		typing("#step2", text, function() {
			$('.executeAnimationBtn').show();
		})
	} else if (execute == 5) {
		$("#rowColumn1, #rowColumn2").addClass("opacity00");
		$('.executeAnimationBtn').hide();
		$(".background-green").removeClass("background-green");
		$("#matrices table:eq(0) tr:eq(1) td:eq(1)").addClass("opacity00");
		$("#matrices table:eq(0) tr:eq(2) td:eq(1)").addClass("opacity00");
		$("#matrices table:eq(0) tr:eq(3) td:eq(1)").addClass("opacity00");
		$("#colOfMatrix1").text("2");
		flipTable("#matrices", function() {
			var text = "<li>In this example the matrix <span class='ct-code-b-yellow'>a</span> contains 2 columns and matrix "
						+"<span class='ct-code-b-yellow'>b</span> contains 3 rows both are not equal so, multiplication is not possible.</li>";
			typing("#step2", text, function() {
				$("#rowColumn1, #rowColumn2").removeClass("opacity00");
				setTimeout(function() {
					$("#colOfMatrix1, #rowOfMatrix2").addClass("background-green");
					$('.executeAnimationBtn').show();
				}, 1000);
			})	
		});
	} else if (execute == 6) {
		$('.executeAnimationBtn').hide();
		$("#rowColumn1, #rowColumn2").addClass("opacity00");
		$('.executeAnimationBtn').hide();
		$(".background-green").removeClass("background-green");
		$("#matrices table:eq(0) tr:eq(2)").addClass("opacity00");
		$("#matrices table:eq(1) tr:eq(2)").addClass("opacity00");
		$("#rowOfMatrix2").text("2");
		$("#rowOfMatrix1").text("2");
		flipTable("#matrices", function() {
			var text = "<li>In this example the matrix <span class='ct-code-b-yellow'>a</span> contains 2 columns and "
						+"matrix <span class='ct-code-b-yellow'>b</span> contains 2 rows both are equal after multiplying "
						+"the result of matrix will be 2 x 3.</li>";
			typing("#step2", text, function() {
				$("#rowColumn1, #rowColumn2").removeClass("opacity00");
				setTimeout(function() {
					$("#colOfMatrix1, #rowOfMatrix2").addClass("background-green");
					$('.executeAnimationBtn').show();
				}, 1000);
			})	
		});
	} else if (execute == 7) {
		$('.executeAnimationBtn').hide();
		$("#explanation").removeClass("main-two-box");
		matrixProgram();
		setTimeout(function() {
			var text = "Here is the program of matrix multiplication on <span class='ct-code-b-yellow'>two dimensional array</span>.";
			typing(".introjs-tooltiptext", text, function() {
			//	preSteps();
				$(".introjs-nextbutton").show();
			})
		}, 1000);
	}
	++execute;	
}

var count = 1;
function matrixCreation(val, head, row, col, callBackFunction) {
	$("#matrices").append("<div style='display:inline-block;'>"+
					"<table>"+
						"<tbody>"+
							"<tr>"+
    							"<th rowspan='5'><span class='fa fa-square-bracket-left'></span></th>"+
    							"<th></th>"+
    							"<th>"+ head +"</th>"+
    							"<th></th>"+
    							"<th rowspan='5'><span class='fa fa-square-bracket-right'></span></th>"+
    							"<th></th>"+
							"</tr>"+
							 "<tr>"+
							 	"<td>"+ val[0] +"</td>"+
							 	"<td>"+ val[1] +"</td>"+
							 	"<td>"+ val[2] +"</td>"+
							 	"<td></td>"+
							"</tr>"+
							"<tr>"+
 							 	"<td>"+ val[3] +"</td>"+
 							 	"<td>"+ val[4] +"</td>"+
 							 	"<td>"+ val[5] +"</td>"+
 							 	"<td></td>"+
								"</tr>"+
 							"<tr>"+
							 	"<td>"+ val[6] +"</td>"+
							 	"<td>"+ val[7] +"</td>"+
							 	"<td>"+ val[8] +"</td>"+
							 	"<td></td>"+
							"</tr>"+
							"<tr>"+
								"<td></td>"+
								"<td></td>"+
								"<td></td>"+
								"<td><span id='rowColumn"+ count +"'><span id = 'rowOfMatrix" + count +"'><span>"+ row +"</span></span>"+
									"x<span id = 'colOfMatrix" + count +"'><span>"+ col +"</span></span></span></td>"+
							"</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>");
	++count;
	if (typeof callBackFunction === "function") {
		callBackFunction();
	}
}
function preSteps(matrix) {
	var step = 0;
	var nextStep = {
			element : "#readMatrix" + matrix,
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#row" + matrix,
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#condRow" + matrix,
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
}


function mulSteps() {
	var step = 0;
	var nextStep = {
			element : "#readMatrixC",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#rowC",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#condRowC",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
}

var mulStep = 0;
function mulStepsDynamic(row) {
	
		for (var col = 0; col < 2; col++) {
		if (col == 0) {
			var nextStep = {
					element : "#colC",
					intro : "",
					position : "right",
				}
				intro.insertOption(intro._currentStep + ++mulStep, nextStep);
			
			var nextStep = {
					element : "#condColC",
					intro : "",
					position : "right",
				}
				intro.insertOption(intro._currentStep + ++mulStep, nextStep);
			}
			
			var nextStep = {
					element : "#mulCini",
					intro : "",
					position : "right",
				}
				intro.insertOption(intro._currentStep + ++mulStep, nextStep);
			
			for (var rc = 0; rc < 3; rc++) {
				if (rc == 0) {
					var nextStep = {
							element : "#mulKini",
							intro : "",
							position : "right",
						}
						intro.insertOption(intro._currentStep + ++mulStep, nextStep);
					
					var nextStep = {
							element : "#mulKcond",
							intro : "",
							position : "right",
						}
						intro.insertOption(intro._currentStep + ++mulStep, nextStep);
				}
					
					var nextStep = {
							element : "#mulForm",
							intro : "",
							position : "right",
						}
						intro.insertOption(intro._currentStep + ++mulStep, nextStep);
					
					var nextStep = {
							element : "#animation",
							intro : "",
							position : "left",
						}
						intro.insertOption(intro._currentStep + ++mulStep, nextStep);
					
					var nextStep = {
							element : "#mulKinc",
							intro : "",
							position : "right",
						}
						intro.insertOption(intro._currentStep + ++mulStep, nextStep);
					
					var nextStep = {
							element : "#mulKcond",
							intro : "",
							position : "right",
						}
						intro.insertOption(intro._currentStep + ++mulStep, nextStep);
			}
			
			var nextStep = {
					element : "#incColC",
					intro : "",
					position : "right",
				}
				intro.insertOption(intro._currentStep + ++mulStep, nextStep);
			
			var nextStep = {
					element : "#condColC",
					intro : "",
					position : "right",
				}
				intro.insertOption(intro._currentStep + ++mulStep, nextStep);
		}
		
		var nextStep = {
				element : "#incRowC",
				intro : "",
				position : "right",
			}
			intro.insertOption(intro._currentStep + ++mulStep, nextStep);
		
		var nextStep = {
				element : "#condRowC",
				intro : "",
				position : "right",
			}
			intro.insertOption(intro._currentStep + ++mulStep, nextStep);
}

function mulMatrixDisplay() {
	var step = 0;
	var nextStep = {
			element : "#printf5",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#outputDiv",
			intro : "",
			position : "right",
			tooltipClass : "hide",
			action: "printfC"
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#finalMatrix",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
	
	var nextStep = {
			element : "#outputDiv",
			intro : "",
			position : "left",
			action : "displayC"
		}
		intro.insertOption(intro._currentStep + ++step, nextStep);
}

function matrixProgram() {
	$("#explanation").empty();
	$("#explanation").append(
'<pre>'+
'#include&lt;stdio.h&gt;\n'+
'<span>main()</span> {\n'+
'<span id="varDec">int a[2][3], b[3][2], c[2][2], i, j, k;</span>\n'+
'<span id="readMatrixA" eval="A"><span id="first">for ( <span id="rowA">i = 0</span>; <span id="condRowA"><span id="iRowA" class="position-relative">i</span> &lt; <span id="rowsA">2</span></span>; <span id="incRowA">i++</span> )</span> {\n'+
' <span id="second">for( <span id="colA">j = 0</span>; <span id="condColA"><span id="jColA" class="position-relative">j</span> &lt; <span id="colsA">3</span></span>; <span id="incColA">j++</span>)</span> {\n'+
'  <span id="printf1">printf("Enter the value of a[%d][%d] : ", i,j);</span>\n'+
'  <span id="scanf1">scanf("%d", &a[i][j]);</span>\n'+
' <span>}</span>\n'+
'<span>}</span></span>\n'+
'<span id="readMatrixB" eval="B"><span>for ( <span  id="rowB">i = 0</span>; <span id="condRowB"><span id="iRowB" class="position-relative">i</span> &lt; <span id="rowsB">3</span></span>; <span id="incRowB">i++</span> )</span> {\n'+
' <span>for( <span id="colB">j = 0</span>; <span id="condColB"><span id="jColB" class="position-relative">j</span> &lt; <span id="colsB">2</span></span>; <span id="incColB">j++</span>)</span> {\n'+
'  <span id="printf2">printf("Enter the value of b[%d][%d] : ", i,j);</span>\n'+
'  <span id="scanf2">scanf("%d", &b[i][j]);</span>\n'+
' <span>}</span>\n'+
'<span>}</span></span>\n'+
'<span id="printf3">printf("The matrix a[][] is : &#92;n ");</span>\n'+
'<span id="matrixAdis"><span>for ( <span>i = 0</span>; <span>i &lt; 2</span>; <span>i++</span> )</span> {\n'+
' <span>for(j = 0; j &lt; 3; j++)</span> {\n'+
'  <span>printf("%d&#92;t", a[i][j]);</span>\n'+
' <span>}</span>\n'+
'  <span>printf("&#92;n");</span>\n'+
'<span>}</span></span>\n'+
'<span id="printf4">printf("The matrix b[][] is : &#92;n ");</span>\n'+
'<span id="matrixBdis"><span>for ( i = 0; i &lt; 3; i++ )</span> {\n'+
' <span>for(j = 0; j &lt; 2; j++)</span> {\n'+
'  <span>printf("%d&#92;t", b[i][j]);</span>\n'+
' <span>}</span>\n'+
' <span>printf("&#92;n");</span>\n'+
'<span>}</span></span>\n'+
'<span id="readMatrixC" eval="C"><span>for ( <span id="rowC">i = 0</span>; <span id="condRowC"><span id="iRowC" class="position-relative">i</span> &lt; <span id="rowsC">2</span></span>; <span id="incRowC">i++</span>)</span> {\n'+
' <span>for ( <span id="colC">j = 0</span>; <span id="condColC"><span id="jColC" class="position-relative">j</span> &lt; <span id="colsC">2</span></span>; <span id="incColC">j++</span>)</span> {\n'+
'  <span id="mulCini">c[<span id="CiIni">i</span>][<span id="CjIni">j</span>] = 0;</span>\n'+
'  <span>for ( <span id="mulKini">k = 0</span>; <span id="mulKcond"><span id="mulCngK" class="position-relative">k</span> &lt; <span id="mul">3</span></span>; <span id="mulKinc">k++</span>)</span> {\n'+
'   <span id="mulForm">c[<span>i</span>][<span>j</span>] = <span id="formulae" class="position-relative"><span id="cij" class="position-relative">c[<span id="ci" class="position-relative">i</span>][<span id="cj" class="position-relative">j</span>]</span> + <span id="aik" class="position-relative">a[<span id="ai" class="position-relative">i</span>][<span id="ak" class="position-relative">k</span>]</span> * <span id="bkj" class="position-relative">b[<span id="bk" class="position-relative">k</span>][<span id="bj" class="position-relative">j</span>]</span></span>;</span>\n'+
'  }\n'+
' }\n'+
'}</span>\n'+
'<span id="printf5">printf("After matrix multiplication is : &#92;n");</span>\n'+
'<span id="finalMatrix"><span>for ( <span>i = 0</span>; <span>i &lt; 2</span>; <span>i++</span>)</span> {\n'+
' <span>for (j = 0; j &lt; 2; j++)</span> {\n'+
'  <span>printf("%d &#92;t", c[<span>i</span>][<span>j</span>]);</span>\n'+
' }\n'+
'  <span>printf("&#92;n");</span>\n'+
' }</span>\n'+
'}\n'+ 
'</pre>');  
	intro.refresh();
	setTimeout(function() {
		//preSteps();
		 var nextStep = {
			element : "#varDec",
			intro : "",
			position : "right",
		}
		intro.insertOption(intro._currentStep + 1, nextStep); 
	}, 1000)
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

function flipTable(selector, callBackFunction) {
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}


function scrollAtOutput() {
	var container = $('.output-console-body');
	scrollTo = $('.output-console-body').find("span").last();
	container.animate({
	   scrollTop: scrollTo.offset().top - container.offset().top  + container.scrollTop()
	});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 40;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		//$(".introjs-nextbutton").show();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}
