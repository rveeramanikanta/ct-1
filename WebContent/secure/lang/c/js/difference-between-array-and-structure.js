var intro;
var typingInterval = 5;
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
				position:"right"
			},{
				element : "#declarationOfArray",
				intro : "",
				position:"right"
			},{
				element : "#onlyDeclarationOfStructure",
				intro : "",
				position:"right"
			},{
				element : "#declarationOrInitialization",
				intro : "",
				position:"right"
			},{
				element : "#definitionOfStructure",
				intro : "",
				position:"right"
			},{
				element : "#firstinitializationOfArray",
				intro : "",
				position:"right"
			},{
				element : "#totalInitializationOfArray",
				intro : "",
				position:"right"
			},{
				element : "#initializationOfStructure",
				intro : "",
				position:"right"
			},{
				element : "#totalInitializationOfStructure",
				intro : "",
				position:"right"
		 	},{
				element : "#memoryOfArray",
				intro : "",
				position:"right"
			},{
				element : "#memoryOfStructure",
				intro : "",
				position:"left"
			},{
				element : "#totalInitializationOfArray",
				intro : "",
				position:"left"
			},{
				element : "#memoryOfArray",
				intro : "",
				position:"right"
			},{
				element : "#totalInitializationOfStructure",
				intro : "",
				position:"left"
			},{
				element : "#memoryOfStructure",
				intro : "",
				position:"left"
			},{
				element : "#arrayAccess",
				intro : "",
				position:"left"
			},{
				element : "#structureAccess",
				intro : "",
				position:"top"
			},{
				element : "#restart",
				intro : "",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position:"right"
			}
			]});
		
			intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "heading":
				$('.introjs-nextbutton').hide();
				var text = "let us see the difference between the arrays and structures.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
			
			case "declarationOfArray":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#array").addClass("animated zoomIn").removeClass("opacity00").one("animationend", function() {
						$("#array").removeClass("animated zoomIn");
						$("#declarationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#declarationOfArray").removeClass("animated zoomIn");
							var text = "This is the <span class='ct-code-b-yellow'>declaration</span> of an array, which will" 
							+ " store all the <span class='ct-code-b-yellow'>similar datatype</span> items.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case "onlyDeclarationOfStructure":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structure").addClass("animated zoomIn").removeClass("opacity00").one("animationend", function() {
						$("#structure").removeClass("animated zoomIn");
						$("#onlyDeclarationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#onlyDeclarationOfStructure").removeClass("animated zoomIn");
							var text = "<ul><li>This is the <span class='ct-code-b-yellow'>declaration</span> of a " 
									+ "structure which will store <span class='ct-code-b-yellow'>different datatype</span> items.</li>" 
									+ "<li>Here we use a <span class='ct-code-b-yellow'>keyword</span>" 
									+ " <span class='ct-code-b-yellow'>struct</span> which is used to declare the structure," 
									+ " as the array does not have.</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
									$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case "declarationOrInitialization":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "In array we don't have any <span class='ct-code-b-yellow'>definition</span> part, at the time" 
							+ " of declaration itself the memory will be allocated for an array.";
					typing(".introjs-tooltiptext", text, function() {
						$("#declarationOrInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "firstinitializationOfArray":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "Initialization of an array can be done at declaration time.";
					typing(".introjs-tooltiptext", text, function() {
						$("#initializationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#initializationOfArray").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "definitionOfStructure":
				$('.introjs-nextbutton').hide(); 
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#definitionOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>This is the <span class='ct-code-b-yellow'>definition</span> part of structure. Which " + 
							"will allocate memory to the structure variable.</li><li>In structure declaration part does not allocate " 
							+ "any memory space, the declaration part specifies a new user defined datatype only.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});	
				break;
			case "totalInitializationOfArray":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
						if (intro._currentStep == 11) {
							var text = "The values in the array will store in the <span class='ct-code-b-yellow'>sequence</span> order.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						} else {
							$("#totalInitializationOfArray").removeClass("opacity00");
							$("#anotherInitializationOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								var text = "An array can also be initialized with <span class='ct-code-b-yellow'>subscript</span> " 
									+ "or <span class='ct-code-b-yellow'>indices</span>.";
								typing(".introjs-tooltiptext", text, function() {
									$("#anotherInitializationOfArray").removeClass("animated zoomIn");
									$('.introjs-nextbutton').show();
								});
							});
						}
				});
				break;
			case "initializationOfStructure":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#initializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "Initialization of an structure variable can be done at definition part.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "totalInitializationOfStructure":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 13) {
						var text = "Here based on the <span class='ct-code-b-yellow'>members</span> in the strcture the values will store in the memory.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton').show();
						});				
					} else {
						$("#initializationOfStructure").removeClass("opacity00");
						$("#anotherInitializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "An initialization can also be done with structure <span class='ct-code-b-yellow'>variable</span>," 
								+ " <span class='ct-code-b-yellow'>dot</span> operator and <span class='ct-code-b-yellow'>member</span> of the structure.";
							typing(".introjs-tooltiptext", text, function() {
								$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
				break;
			case "memoryOfArray":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 12) {
						var text = "Let us see how the array values will store in the memory.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValues(0);'>Next &#8594;</a>");
						}); 
					} else {
						$("#memoryOfArray").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#table1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								var text = "<ul><li>This is memory allocation of array variable a[5].</li><li>The array name a" 
									+ " represents <span class='ct-code-b-yellow'>base address</span> of the entire" 
									+ " array i.e, <span class='ct-code-b-yellow'>2024</span>.</li></ul>";
								typing(".introjs-tooltiptext", text, function() {
									intro.refresh();
									$("#memoryOfArray").removeClass("animated zoomIn");
									$("#arrayAddress1").effect( "highlight",{color: 'yellow'}, 1500,function(){
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					}
				});
				break;
			case "onlyDeclaration":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					var text = "At the time of declaration the memory will not be allocated.";
					typing(".introjs-tooltiptext", text, function() {
						$("#declarationOfArray").removeClass('z-index-class');
						$('.introjs-nextbutton').show();
					});
				});
				break;
			case "memoryOfStructure":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer").one('transitionend', function() {
					if (intro._currentStep == 14) {	
						var text = "Let us see how the structure values will store in the memory.";
						typing(".introjs-tooltiptext", text, function() {
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinStructure();'>Next &#8594;</a>");
						});
					} else {
						$("#memoryOfStructure").removeClass("opacity00");					
						$("#point4").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#a").removeClass("opacity00").addClass("animated zoomIn");
							$("#memory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
								var text = "<ul><li>This is memory allocation of structure variable a.</li><li>The structure" 
									+ " name a represents <span class='ct-code-b-yellow'>base address</span> of" 
									+ " the entire structure i.e, <span class='ct-code-b-yellow'>1024</span>.</li></ul>";
								typing(".introjs-tooltiptext", text, function() {
									$("#declarationOfArray").removeClass('z-index-class');
									$("#address1").effect( "highlight",{color: 'yellow'}, 1500,function(){
										$('.introjs-nextbutton').show();
									});
								});
							});
						});
					}
				});
				break;
			case "arrayAccess":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#arrayAccess").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "By using the <span class='ct-code-b-yellow'>index</span> or <span class='ct-code-b-yellow'>subscript</span>" 
							+ " we can access the array elemnts.";
						typing(".introjs-tooltiptext", text, function() {
							$("#index").effect( "highlight",{color: 'yellow'}, 1500,function(){
								$("#arrayAccess").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case "structureAccess":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureAccess").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>By using <span class='ct-code-b-yellow'>dot(.)</span> operator " 
							+ " we can access the members of the structure variable.</li><li>In case of " 
							+ "structure <span class='ct-code-b-yellow'>pointer</span> variables, an " 
							+ "<span class='ct-code-b-yellow'>arrow(->)</span> operator is used to access" 
							+ " the member of structure pointer variable.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#dotOperator, #arrowOperator").effect( "highlight",{color: 'yellow'}, 1500,function(){
								$("#structureAccess").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					});
				});
				break;
			case "restart":
				$('.introjs-nextbutton').hide();
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
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
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
		$("#value" + i).addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1500, function() {
			TweenMax.to("#a" + i + "value",1,{top:0,left:0, onComplete:function() {
				$("#value" + i).removeClass("z-index-class");
				i++;
				moveValues(i);
			}});
		});
	} else {
		$('.introjs-nextbutton').show();
	}
}

function moveValuesinStructure() {
	$('.nextButton').hide();
	var l1= $("#aName").offset();
	$("#aName").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
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
							$('.introjs-nextbutton').show();
						}});
					});
				}});
			});
		}});
	});
}