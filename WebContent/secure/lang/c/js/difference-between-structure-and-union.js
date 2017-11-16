var intro;
var typingInterval = 1;
var unionMemoryDiv;
var diffBetweenStructureAndUnionReady = function() {
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
		intro.setOptions ({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [ {
				element : "#structureKeyword",
				intro : "",
				position:"right"
			},{
				element : "#structureDeclaration",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#unionKeyword",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#unionDeclaration",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#structureDefinition",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#unionDefinition",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#structureInitialization",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#totalInitialization",
				intro : "",
				tooltipClass: 'hide',
				position:"right"
			},{
				element : "#unionInitialization",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#structureMemory",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#unionMemory",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#totalInitialization",
				intro : "",
				position:"right"
			},{
				element : "#structureMemory",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#unionInitialization",
				intro : "",
				position:"left"
			},{
				element : "#unionMemory",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#structureAccessing",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#unionAccessing",
				intro : "",
				tooltipClass: 'hide',
				position:"left"
			},{
				element : "#restart",
				intro : "",
				position:"right",
				tooltipClass: "restart-tooltip-min-width"
			}
		]});
			
		
			intro.onbeforechange(function(targetElement) {
				var elementId = targetElement.id;
				switch (elementId) {
				case "structureKeyword":
					$("#structureRemainingDecleration").addClass("opacity00");
					break;
				case "structureDeclaration":
					$("#structureRemainingDecleration, #unionsDiv, #unionKeyword").addClass("opacity00");
					break;
				case "unionKeyword":
					$("#unionsDiv, #unionKeyword, #unionRemainingDecleration").addClass("opacity00");
					break;
				case "unionDeclaration":
					$("#unionRemainingDecleration, #structureDefinition").addClass("opacity00");
					break;
				case "structureDefinition":
					$("#structureDefinition, #unionDefinition").addClass("opacity00");
					break;
				case "unionDefinition":
					$("#unionDefinition, #structureInitialization").addClass("opacity00");
					break;
				case "structureInitialization":
					$("#structureInitialization, #anotherInitializationOfStructure").addClass("opacity00");
					break;
				case "totalInitialization":
						if (intro._currentStep == 11) {
							$('#memory tr:eq(1) > td > span').empty();
						} else {
							$("#anotherInitializationOfStructure, #unionInitialization").addClass("opacity00");
						}
					break;
				case "unionInitialization":
						if (intro._currentStep == 13) {
							$('#unionMemory').empty().append(unionMemoryDiv);
						} else {
							$("#unionInitialization, #structureMemory").addClass("opacity00");
						}
					break;
				case "structureMemory":
						if (intro._currentStep == 12) {
							$('#memory tr:eq(1) > td > span').empty();
						} else {
							$("#structureMemory, #unionMemory").addClass("opacity00");
						}
					break;
				case "unionMemory":
						if (intro._currentStep == 14) {
							$('#unionMemory').empty().append(unionMemoryDiv);
							$("#structureAccessing").addClass("opacity00");
						} else {
							$("#unionMemory").addClass("opacity00");
						}
					break;
				case "structureAccessing":
					$("#structureAccessing, #unionAccessing").addClass("opacity00");
					break;
				case "unionAccessing":
					$("#unionAccessing").addClass("opacity00");
					break;
				}
			});
		
		
		
			intro.onafterchange(function(targetElement) {
			
			$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
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
			case "structureKeyword":
					$("#structuresDiv, #structureKeyword").removeClass("opacity00");
					var text = "In <span class='ct-code-b-yellow'>structure</span>, the keyword "
								+ "<span class='ct-code-b-yellow'>struct</span> is used to declare a structure.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				break;
			case "structureDeclaration":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureRemainingDecleration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#structureRemainingDecleration").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "This is a <span class='ct-code-b-yellow'>structure</span>  declaration.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "unionKeyword":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionsDiv").removeClass("opacity00");
					$("#unionKeyword").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#unionKeyword").removeClass("animated zoomIn");
						var text = "In <span class='ct-code-b-yellow'>unions</span>, "
									+ "the keyword <span class='ct-code-b-yellow'>union</span> is used for declaration.";
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "unionDeclaration":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionRemainingDecleration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "This is an <span class='ct-code-b-yellow'>union</span> declaration.";
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", text, function() {
							$("#unionRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "structureDefinition":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureDefinition").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#structureDefinition").removeClass('animated zoomIn');
						var text = "This is a <span class='ct-code-b-yellow'>structure</span> definition.";
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "unionDefinition":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionDefinition").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#unionDefinition").removeClass('animated zoomIn');
						var text = "This is an <span class='ct-code-b-yellow'>union</span> definition.";
						$('.introjs-tooltip').removeClass('hide');
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "structureInitialization":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#structureInitialization").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "A structure can be  initialized by initializing " 
							+ "<span class='ct-code-b-yellow'>all</span> the <span class='ct-code-b-yellow'>members</span> at" 
							+ " once.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "totalInitialization":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 11) {
						var text = "The sequence in which the <span class='ct-code-b-yellow'>members</span> are declared in the structure, will be followed "
									+" when memory is allocated to the structure.";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$("#anotherInitializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass('hide');
							var text = "We can also initialize each member of <span class='ct-code-b-yellow'>structure</span> individually.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "unionInitialization":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 13) {
						var text = "Based on the <span class='ct-code-b-yellow'>largest</span> datatype of the member of union, the memory will be allocated.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$("#unionInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#unionInitialization").removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass('hide');
							var text = "Initialization of the members of an <span class='ct-code-b-yellow'>union</span> should be done one "
								+"member at a time.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "structureMemory":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 12) {
						$('.introjs-tooltip').removeClass('hide');
						var text = "Every member's value will be stored in its allocated <span class='ct-code-b-yellow'>memory</span> address.";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinStructure();'>Next &#8594;</a>");
						});
					} else {
						$("#structureMemory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#structureMemory").removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass('hide');
							var text = "In a <b class='ct-code-b-yellow'>structure</b> every member has its own memory allocated.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "unionMemory":
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 14) {
						$('.introjs-tooltip').removeClass('hide');
						var text = "<ul><li>At any point of time, only <span class='ct-code-b-yellow'>one member</span> can be accessed in the union, "
							+ "as union uses the <span class='ct-code-b-yellow'>same memory </span> for all its members.</li>"
							+ "<li>Memory is used efficiently in the <span class='ct-code-b-yellow'>union</span>.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinUnion();'>Next &#8594;</a>");
						});
					} else {
						$("#unionMemory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							unionMemoryDiv = $("#unionMemory").html();
							$("#unionMemory").removeClass("animated zoomIn");
							$('.introjs-tooltip').removeClass('hide');
							var text = "<ul><li>In union memory will be allocated based on the member with the <b class='ct-code-b-yellow'>largest</b> datatype.</li></br></br>"
										+ "<li>Here, a memory of <span class='ct-code-b-yellow'>4</span> bytes will be allocated to the union <span class='ct-code-b-yellow'>book</span>"
										+ " <span class='ct-code-b-yellow'>b</span> as the <b class='ct-code-b-yellow'>largest</b> datatype is "
										+ "<span class='ct-code-b-yellow'>float</span> which occupies <span class='ct-code-b-yellow'>4 bytes</span> of memory.</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "structureAccessing":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureAccessing").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#structureAccessing").removeClass("animated zoomIn");
						$('.introjs-tooltip').removeClass('hide');
						var text = "<ul><li>Accessing the members of structure is done using the <span class='ct-code-b-yellow'>dot(.)</span> operator.</li>" 
							+ "<li>In structure all the members can be accessed at <span class='ct-code-b-yellow'>once</span>.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "unionAccessing":
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionAccessing").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "<ul><li>Accessing the members of union is done using the <span class='ct-code-b-yellow'>dot(.)</span> operator.</li>" 
							+ "<li>In union all the members <span class='ct-code-b-yellow'>should not be accessed</span> at once, it will result in incorrect data.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionAccessing").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
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

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
				intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
			}
		}});
	}});
}

function moveValuesinStructure() {
	$('.nextButton').hide();
	var l1= $("#aName").offset();
	$("#aName").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
		$("#pname").text($("#aName").text()).removeClass("opacity00").offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to("#pname", 1, {top:0, left:0, onComplete:function() {
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

function moveValuesinUnion() {
	$('.nextButton').hide();
	var l1= $("#series").offset();
	$("#tabletd1").text($("#series").text()).removeClass("opacity00").offset({
		"top":l1.top,
		"left":l1.left
	});
	$("#series").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
		$("#changingBytes").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#changingBytes").effect("highlight",{color: 'yellow'}, 1000, function() {
				TweenMax.to("#tabletd1",1,{top:0,left:0, onComplete:function() {
					$("#series").removeClass("z-index-class");
					$("#changingBytes").removeClass("animated zoomIn");
					$("#pages").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
						$("#changingBytes").effect("highlight",{color: 'yellow'}, 1000, function() {
							flipEffect("#changingBytes", "b.pages(2 bytes)", function() {
								var l1= $("#pages").offset();
								$("#tabletd1").text($("#pages").text()).removeClass("opacity00").offset({
									"top":l1.top,
									"left":l1.left
								});
								TweenMax.to("#tabletd1",1,{top:0,left:0, onComplete:function() {
									$("#pages").removeClass("z-index-class");
									$("#changingBytes").effect("highlight",{color: 'yellow'}, 1000, function() {
										flipEffect("#changingBytes", "b.price(4 bytes)", function() {
											$("#price").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
												var l1= $("#price").offset();
												$("#tabletd1").text($("#price").text()).removeClass("opacity00").offset({
													"top":l1.top,
													"left":l1.left
												});
												TweenMax.to("#tabletd1",1,{top:0,left:0, onComplete:function() {
													$("#price").removeClass("z-index-class");
													$('.introjs-nextbutton, .introjs-prevbutton').show();
												}});
											});
										});
									});
								}});
							});
						});
					});
				}});
			});
		});
	});
}