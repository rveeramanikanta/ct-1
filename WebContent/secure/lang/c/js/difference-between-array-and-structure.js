var intro;
var typingInterval = 1;
var differenceBetweenArrayAndStructure = function() {
	$(".line").hide();
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("#restart").click(function() {
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
				element : "#heading",
				intro : "",
				position:"right",
			},{
				element : "#declarationOfArray",
				intro : "",
				position:"right",
				tooltipClass: 'hide',
			},{
				element : "#onlyDeclarationOfStructure",
				intro : "",
				position:"right",
				tooltipClass: 'hide',
			},{
				element : "#declarationOrInitialization",
				intro : "",
				tooltipClass: 'hide',
				position:"right",
			},{
				element : "#definitionOfStructure",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#firstinitializationOfArray",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#totalInitializationOfArray",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#initializationOfStructure",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#totalInitializationOfStructure",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
		 	},{
				element : "#memoryOfArray",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#memoryOfStructure",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#totalInitializationOfArray",
				intro : "",
				position:"right"
			},{
				element : "#memoryOfArray",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#totalInitializationOfStructure",
				intro : "",
				position:"left"
			},{
				element : "#memoryOfStructure",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#arrayAccess",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#structureAccess",
				intro : "",
				tooltipClass: 'hide',
				position:"top"
			},{
				element : "#restart",
				intro : "",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position:"right"
			}
		]});
		
			intro.onbeforechange(function(targetElement) {
				var elementId = targetElement.id;
				switch (elementId) {
				case "declarationOfArray":
						$('#declarationOfArray, #onlyDeclarationOfStructure, #structure').addClass('opacity00');
					break;
				case "onlyDeclarationOfStructure":
						$("#onlyDeclarationOfStructure, #declarationOrInitialization").addClass('opacity00');
					break;
				case "declarationOrInitialization":   
						$("#definitionOfStructure, #declarationOrInitialization").addClass("opacity00");
					break;
				case "firstinitializationOfArray":
						$("#initializationOfArray").addClass("opacity00");
						$("#totalInitializationOfArray, #anotherInitializationOfArray").addClass("opacity00");
						
					break;
				case "definitionOfStructure":
					$('#definitionOfStructure, #initializationOfArray').addClass("opacity00");
						break;
				case "totalInitializationOfArray":
						if (intro._currentStep == 11) {
							$('#table1 tr:eq(1) span').empty();
						} else {
							$("#totalInitializationOfArray, #anotherInitializationOfArray, #initializationOfStructure").addClass("opacity00");
						}
					break;
				case "initializationOfStructure":
						$("#initializationOfStructure").addClass("opacity00");
						$("#initializationOfStructure, #anotherInitializationOfStructure").addClass("opacity00");
					break;
				case "totalInitializationOfStructure":
						if (intro._currentStep == 13) {
							$('#memory tr:eq(1) > td').empty();
						} else {
							$("#initializationOfStructure, #anotherInitializationOfStructure").addClass("opacity00");
							$("#memoryOfArray, #table1").addClass("opacity00");
						}
					break;
				case "memoryOfArray":
						if (intro._currentStep == 12) {
							$('#table1 tr:eq(1) span').empty();
						} else {
							$("#memoryOfArray, #table1, #memoryOfStructure, #point4").addClass("opacity00");
						}
					break;
				case "onlyDeclaration":
					break;
				case "memoryOfStructure":
						if (intro._currentStep == 14) {	
							$("#arrayAccess").addClass("opacity00");
							$('#memory tr:eq(1) > td').empty();
						} else {
							$("#memoryOfStructure, #point4, #memory").addClass("opacity00");					
						}
					break;
				case "arrayAccess":
					$("#arrayAccess").addClass("opacity00");
					$("#structureAccess").addClass("opacity00");
					break;
				}
			});
			
			
		
		
			intro.onafterchange(function(targetElement) {
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
				// ********************** start ************back button logic
				
				if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
					intro._introItems[intro._currentStep]["animation"] = "repeat";
				}
				
				if (intro._introItems[intro._currentStep]["isCompleted"]) {
					if (intro._currentStep != 0) {
						$('.introjs-prevbutton').show();
					}
					$('.introjs-nextbutton').show();
					return;
				}
				
				if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
					intro._introItems[intro._currentStep]["isCompleted"] = true;
				}
				
				// ********************** end ************back button logic			
				
			var elementId = targetElement.id;
			switch (elementId) {
			case "heading":
				var text = "Let us understand the difference between <b class='ct-code-b-yellow'>arrays</b> and <b class='ct-code-b-yellow'>structures</b>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
			
			case "declarationOfArray":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#array").removeClass("opacity00");
					$("#declarationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#declarationOfArray").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "An <span class='ct-code-b-yellow'>array</span> is used to store the " 
									+ "data elements of the same datatype."
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "onlyDeclarationOfStructure":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structure").removeClass("opacity00");
					$("#onlyDeclarationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#onlyDeclarationOfStructure").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "<ul><li>This statement shows how a <span class='ct-code-b-yellow'>structure</span> declared.</li>"
									+ "<li> A <span class='ct-code-b-yellow'>structure</span> is used to store the data of "
									+ "different datatype elements.</li><li>A keyword <span class='ct-code-b-yellow'>"
									+ "struct</span> is used to declare a <span class='ct-code-b-yellow'>structure</span>.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "declarationOrInitialization":   
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#declarationOrInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#declarationOrInitialization").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "An <span class='ct-code-b-yellow'>array's</span> declaration and definition is in the same statement.</br></br> "
							+"The memory allocation of the <span class='ct-code-b-yellow'>array</span> happens in the same statement." 
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
					
				});
				break;
			case "firstinitializationOfArray":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#initializationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#initializationOfArray").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "The initialization of an <span class='ct-code-b-yellow'>array</span> can be done at declaration time.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "definitionOfStructure":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#definitionOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#definitionOfStructure").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "<ul><li>This statement defines a <span class='ct-code-b-yellow'>structure</span>. The memory  " + 
							"allocation for the <span class='ct-code-b-yellow'>structure</span> happens here.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});	
				break;
			case "totalInitializationOfArray":
				$(".introjs-helperLayer ").one('transitionend', function() {
						if (intro._currentStep == 11) {
							var text = "The values in an <span class='ct-code-b-yellow'>array</span> will be stored in a"
										+" <span class='ct-code-b-yellow'>sequence</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						} else {
							$("#totalInitializationOfArray").removeClass("opacity00");
							$("#anotherInitializationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$("#anotherInitializationOfArray").removeClass("animated zoomIn");
								$('.introjs-tooltip').removeClass('hide');
								var text = "An <span class='ct-code-b-yellow'>array</span> can also be initialized with "
											+"<span class='ct-code-b-yellow'>subscript</span> " 
											+ "or <span class='ct-code-b-yellow'>indices</span>.";
								typing(".introjs-tooltiptext", text, function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						}
				});
				break;
			case "initializationOfStructure":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#initializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#initializationOfStructure").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "The initialization of the <span class='ct-code-b-yellow'>structure</span> variable can be done"
									+" at definition part.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "totalInitializationOfStructure":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 13) {
						var text = "In a <span class='ct-code-b-yellow'>structure</span>, the order of the values that will be "
									+ "stored in memory is based on the order of the <span class='ct-code-b-yellow'>member</span>"
									+ " declaration.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});				
					} else {
						$("#initializationOfStructure").removeClass("opacity00");
						$("#anotherInitializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass('hide');
							var text = "An initialization can also be done with <span class='ct-code-b-yellow'>structure</span>"
										+ " <span class='ct-code-b-yellow'>member</span>, using the <span class='ct-code-b-yellow'>dot(.)</span> operator  ";
							typing(".introjs-tooltiptext", text, function() {
								$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "memoryOfArray":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 12) {
						$('.introjs-tooltip').removeClass('hide');
						var text = "Let us see how the values in an <span class='ct-code-b-yellow'>array</span> will be stored in memory.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValues(0);'>Next &#8594;</a>");
						}); 
					} else {
						$("#memoryOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#memoryOfArray").removeClass("animated zoomIn");
							$("#table1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$("#table1").removeClass("animated zoomIn");
								$('.introjs-tooltip').removeClass('hide');
								var text = "<ul><li>This is how the memory is allocated for an <span class='ct-code-b-yellow'>array</span> variable"
										+" <span class='ct-code-b-yellow'>a[5]</span>.</li><li>The array name"
										+" <span class='ct-code-b-yellow'>a</span>" 
										+ " represents <span class='ct-code-b-yellow'>base address</span> of the entire" 
										+ " array i.e, <span class='ct-code-b-yellow'>2024</span>.</li></ul>";
								typing(".introjs-tooltiptext", text, function() {
									intro.refresh();
									$("#arrayAddress1").effect( "highlight",{color: 'yellow'}, 1500,function(){
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								});
							});
						});
					}
				});
				break;
			case "onlyDeclaration":
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "At the time of declaration the memory will not be allocated.";
					typing(".introjs-tooltiptext", text, function() {
						$("#declarationOfArray").removeClass('z-index-class');
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
				break;
			case "memoryOfStructure":
				$(".introjs-helperLayer").one('transitionend', function() {
					if (intro._currentStep == 14) {	
						var text = "Let us understand how the <span class='ct-code-b-yellow'>structure</span> values will be stored in memory.";
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinStructure();'>Next &#8594;</a>");
						});
					} else {
						$("#memoryOfStructure").removeClass("opacity00");					
						$("#point4").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#point4").removeClass("opacity00").removeClass("animated zoomIn");
							$("#memory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								$("#memory").removeClass("animated zoomIn");
								$('.introjs-tooltip').removeClass('hide');
								var text = "<ul><li>This is the memory allocation of <span class='ct-code-b-yellow'>structure</span> variable"
									+ " <span class='ct-code-b-yellow'>a</span>.</li><li>The <span class='ct-code-b-yellow'>structure</span>" 
									+ " name <span class='ct-code-b-yellow'>a</span> represents <span class='ct-code-b-yellow'>base address</span> of" 
									+ " the entire <span class='ct-code-b-yellow'>structure</span> i.e, "
									+ "<span class='ct-code-b-yellow'>4048</span>.</li></ul>";
								typing(".introjs-tooltiptext", text, function() {
									$("#declarationOfArray").removeClass('z-index-class');
									$("#address1").effect( "highlight",{color: 'yellow'}, 1500,function(){
										$('.introjs-nextbutton, .introjs-prevbutton').show();
									});
								});
							});
						});
					}
				});
				break;
			case "arrayAccess":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#arrayAccess").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#arrayAccess").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "An <span class='ct-code-b-yellow'>array</span> elements can be accessed either by "
							+"<span class='ct-code-b-yellow'>index</span> or <span class='ct-code-b-yellow'>subscript</span>."; 
						typing(".introjs-tooltiptext", text, function() {
							$("#index").effect( "highlight",{color: 'yellow'}, 1500,function(){
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
				break;
			case "structureAccess":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureAccess").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#structureAccess").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "<ul><li>The members of the <span class='ct-code-b-yellow'>structure</span> variable are accessed by using "
							+"the <span class='ct-code-b-yellow'>dot(.)</span> operator.</li> " 
							+ "<li>To access the <span class='ct-code-b-yellow'>structure pointer</span> variable, an " 
							+ "<span class='ct-code-b-yellow'>arrow(->)</span> operator is used.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#dotOperator, #arrowOperator").effect( "highlight",{color: 'yellow'}, 1500,function(){
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					});
				});
				break;
			case "restart":
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to restart.";
						typing(".introjs-tooltiptext", text, function() {
							
						});
					}});
				});
			break;
			
			}
		});
		intro.start();
}

function typing(typingId, typingContent,callBackFunction) {
	$('.nextButton').hide();
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}

function moveValues(i) {
	$('.nextButton').hide();
	if (i <= 4) {
		var l1= $("#value" + i).offset();
		$("#a" + i + "value").text($("#value" + i).text()).removeClass("opacity00").offset({
			"top":l1.top,
			"left":l1.left
		});
		$("#value" + i).addClass("z-index-class").effect("highlight",{color: 'yellow'}, 500, function() {
			TweenMax.to("#a" + i + "value",1,{top:0,left:0, onComplete:function() {
				$("#value" + i).removeClass("z-index-class");
				i++;
				moveValues(i);
			}});
		});
	} else {
		$('.introjs-nextbutton, .introjs-prevbutton').show();
	}
}

function moveValuesinStructure() {
	$('.nextButton').hide();
	var l1= $("#aName").offset();
	$("#aName").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 500, function() {
		$("#pname").text($("#aName").text()).removeClass("opacity00").offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to("#pname",1,{top:0,left:0, onComplete:function() {   
			$("#aName").removeClass("z-index-class");
			var l1= $("#aPages").offset();
			$("#ppages").text($("#aPages").text()).removeClass("opacity00").offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#aPages").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
				TweenMax.to("#ppages",1,{top:0,left:0, onComplete:function() {
					$("#aPages").removeClass("z-index-class");
					var l1= $("#aPrice").offset();
					$("#pprice").text($("#aPrice").text()).removeClass("opacity00").offset({
						"top":l1.top,
						"left":l1.left
					});
					$("#aPrice").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
						TweenMax.to("#pprice",1,{top:0,left:0, onComplete:function() {
							$("#aPrice").removeClass("z-index-class");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}});
					});
				}});
			});
		}});
	});
}