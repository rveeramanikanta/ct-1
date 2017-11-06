var intro;
var typingInterval = 5;

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
				element : "#structureKeyword",
				intro : "",
				position:"right"
			},{
				element : "#structureDeclaration",
				intro : "",
				position:"right"
			},{
				element : "#unionKeyword",
				intro : "",
				position:"right"
			},{
				element : "#unionDeclaration",
				intro : "",
				position:"left"
			},{
				element : "#structureDefinition",
				intro : "",
				position:"left"
			},{
				element : "#unionDefinition",
				intro : "",
				position:"left"
			},{
				element : "#structureInitialization",
				intro : "",
				position:"left"
			},{
				element : "#totalInitialization",
				intro : "",
				position:"right"
			},{
				element : "#unionInitialization",
				intro : "",
				position:"left"
			},{
				element : "#structureMemory",
				intro : "",
				position:"left"
			},{
				element : "#unionMemory",
				intro : "",
				position:"left"
			},{
				element : "#totalInitialization",
				intro : "",
				position:"right"
			},{
				element : "#structureMemory",
				intro : "",
				position:"left"
			},{
				element : "#unionInitialization",
				intro : "",
				position:"left"
			},{
				element : "#unionMemory",
				intro : "",
				position:"left"
			},{
				element : "#structureAccessing",
				intro : "",
				position:"left"
			},{
				element : "#unionAccessing",
				intro : "",
				position:"left"
			},{
				element : "#restart",
				intro : "",
				position:"right",
				tooltipClass: "restart-tooltip-min-width"
			}
		]});
		
			intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			case "heading":
				$('.introjs-nextbutton').hide();
				var text = "let us see the difference between the structures and unions.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
				break;
			case "structureKeyword":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structuresDiv").removeClass("opacity00");
					$("#structureKeyword").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "In structures the keyword <span class='ct-code-b-yellow'>struct</span> is used for declaration and definition.";
						typing(".introjs-tooltiptext", text, function() {
							$("#structureKeyword").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "structureDeclaration":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureRemainingDecleration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "This is the <span class='ct-code-b-yellow'>declaration</span> of structure.";
						typing(".introjs-tooltiptext", text, function() {
							$("#structureRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "unionKeyword":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionsDiv").removeClass("opacity00");
					$("#unionKeyword").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "In unions the keyword <span class='ct-code-b-yellow'>union</span> is used for declaration and definition.";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionKeyword").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "unionDeclaration":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionRemainingDecleration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "This is the <span class='ct-code-b-yellow'>declaration</span> of union.";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "structureDefinition":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureDefinition").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "This is the <span class='ct-code-b-yellow'>definition</span> of structure.";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "unionDefinition":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionDefinition").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "This is the <span class='ct-code-b-yellow'>definition</span> of union.";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "structureInitialization":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "Initialization of structure can be done by initializing " 
							+ "<span class='ct-code-b-yellow'>all</span> the <span class='ct-code-b-yellow'>members</span> at" 
							+ " a time.";
						typing(".introjs-tooltiptext", text, function() {
							$("#structureInitialization").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "totalInitialization":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 12) {
						var text = "Here based on the <span class='ct-code-b-yellow'>members</span> in the strcture the values will store in the memory.";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					} else {
						$("#anotherInitializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "we can also initialize each member individually.";
							typing(".introjs-tooltiptext", text, function() {
								$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
				break;
			case "unionInitialization":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 14) {
						var text = "Here based on the members in the union the memory will be allocated.";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					} else {
						$("#unionInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "Initialization of union can be done for only <span class='ct-code-b-yellow'>one member</span> at a time.";
							typing(".introjs-tooltiptext", text, function() {
								$("#unionInitialization").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
				break;
			case "structureMemory":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 13) {
						var text = "The values of every member will store in their <span class='ct-code-b-yellow'>own</span> memory space	.";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinStructure();'>Next &#8594;</a>");
						});
					} else {
						$("#structureMemory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "In structure every member has its own memory space.";
							typing(".introjs-tooltiptext", text, function() {
								$("#structureMemory").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
				break;
			case "unionMemory":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 15) {
						var text = "<ul><li>Here all the members of the union use the <span class='ct-code-b-yellow'>same memory</span> space to store the" 
							+ " values. Because of this reason in union only one member can access at a time.</li> " 
							+ "<li>Memory space is required <span class='ct-code-b-yellow'>less</span> when compared to structure.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinUnion();'>Next &#8594;</a>");
						});
					} else {
						$("#unionMemory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "<ul><li>This is the <span class='ct-code-b-yellow'>memory</span> of union, which is of 4 bytes.</li>" 
								+ "<li>Here the union will allocate memory, based on the highest size of its member.</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
								$("#unionMemory").removeClass("animated zoomIn");
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
				break;
			case "structureAccessing":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureAccessing").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>By using <span class='ct-code-b-yellow'>dot</span> operator we can access" 
							+ " the members of structure variable.</li>" 
							+ "<li>In structure we can access <span class='ct-code-b-yellow'>all</span> the members at a time.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#structureAccessing").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
				});
				break;
			case "unionAccessing":
				$('.introjs-nextbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionAccessing").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>By using dot operator we can access the members of union variable.</li>" 
							+ "<li>In union we can access only <span class='ct-code-b-yellow'>one</span> member at a time.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionAccessing").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
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
		$('.introjs-nextbutton').show();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
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

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
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
							$('.introjs-nextbutton').show();
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
							flipEffect("#changingBytes", "e.pages(2 bytes)", function() {
								var l1= $("#pages").offset();
								$("#tabletd1").text($("#pages").text()).removeClass("opacity00").offset({
									"top":l1.top,
									"left":l1.left
								});
								TweenMax.to("#tabletd1",1,{top:0,left:0, onComplete:function() {
									$("#pages").removeClass("z-index-class");
									$("#changingBytes").effect("highlight",{color: 'yellow'}, 1000, function() {
										flipEffect("#changingBytes", "e.price(4 bytes)", function() {
											$("#price").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
												var l1= $("#price").offset();
												$("#tabletd1").text($("#price").text()).removeClass("opacity00").offset({
													"top":l1.top,
													"left":l1.left
												});
												TweenMax.to("#tabletd1",1,{top:0,left:0, onComplete:function() {
													$("#price").removeClass("z-index-class");
													$('.introjs-nextbutton').show();
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