var introjs;
var typingSpeed = 5;
var itrNames = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "last"];
var itrCount = 0;

function events() {
	$("[contenteditable=true]").on("keydown", function(e) {
		introjs.refresh();
		$('.errorMsg').remove();
		$(".introjs-tooltiptext .new-val").text($(this).text());
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='errorMsg'><br/><br/>Enter a number of maximum 2 digits.</div>");
			e.preventDefault();
		}
	});

	$("[contenteditable=true]").on("keyup", function(e) {
		introjs.refresh();
		$(".introjs-tooltiptext .new-val").text($(this).text());
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		if ($(".empty").length > 0) {
			$('.errorMsg').remove();
	       	$('.introjs-tooltiptext').append("<div class='errorMsg'><br/><br/>Please enter a value.</div>");
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
	$('#restart').click(function() {
		location.reload();
	});
}

function introGuide() {
	events()
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#demoTitle",
			intro : "",
			position : "right"
		}, {
			element : "#arrInit",
			intro : "",
			position: "bottom"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#nValInit",
			intro : "",
			position : "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#searchElmtInit",
			intro : "",
			position : "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#binarySearchLogic",
			intro : "",
			position : "right"
		}, {
			element : "#bubblesortLogic",
			intro : "",
			position : "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#varsInit",
			intro : "",
			position : "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#whileLoop",
			intro : "",
			position : "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#ifElseBlk",
			intro : "",
			position : "top"
		}, {
			element : "#outputDiv",
			tooltipClass : "hide"
		}, {
			element : "#restart",
			intro : "",
			position : "right"
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		introjs.refresh();
		switch (elementId) {
		case "demoTitle":
			$(".introjs-nextbutton").hide();
			var text = "<span class='ct-code-b-yellow'>Binary search</span>, also known as " 
					+ "<span class='ct-code-b-yellow'>half-interval</span> search" 
					+ " or <span class='ct-code-b-yellow'>logarithmic</span> search, is a search algorithm" 
					+ " that finds the position of a target value within a <span class='ct-code-b-yellow'>sorted array</span>.";
				
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "arrInit":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us declare an array of elements on which we will be applying " 
						+ "the <span class='ct-code-b-yellow'>binary search</span>.<br/><br/>" 
						+ "Feel free to modify the values in the array.";
				typing(".introjs-tooltiptext", text, function() {
					charAtEnd("val3");
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "animationDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._currentStep == 2) {
					$("#arrInit > div").attr("contenteditable", false);
					$.each($("#arrInit > div"), function(index, value) {
						$("#arrTable tr:nth-child(3) span").eq(index).text($(this).text());
					});
					
					$('#arrInit').effect( "transfer", { to: $("#arrTable"), className: "ui-effects-transfer" }, 500, function() {
						$("#arrowsTr").removeClass("hide");
						$("#arrTable").removeClass("opacity00");
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
					});
				} else if (introjs._currentStep == 4) {
					$("#nValDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
					});
				} else if (introjs._currentStep == 9) {
					bubbleSort();
				} else if (introjs._currentStep == 6) {
					$("#searchVal").text($("#searchElmt").text());
					$("#searchElmtDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
					});
				} else if (introjs._currentStep == 11) {
					$("#searchElement").attr("contenteditable", false);
					$("#lowValDiv, #highValDiv, #midValDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
					});
					$("#flagValDiv").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$(this).removeClass("animated zoomIn");
						travelEffect("#index" + $("#lowVal").text() + " span", "#lowVal", "", function() {
							$("#arrowsTr td:eq(" + (parseInt($("#lowVal").text()) + 1) + ") *").removeClass("opacity00");
							travelEffect("#index" + $("#highVal").text() + " span", "#highVal", "", function() {
								$("#arrowsTr td:eq(" + (parseInt($("#highVal").text()) + 1) + ") *").removeClass("opacity00");
								setTimeout(function() {
									introjs.nextStep();
								}, 500);
							});
						});
					});
				} else if (introjs._currentStep == 13) {
					$("#animationDiv").addClass("zIndex");
					$("#whileLoop").addClass("zIndex").effect("highlight", {color: 'white'}, 500, function() {
						$(this).removeClass("zIndex");
					});
					$('#whileLoop').effect( "transfer", { to: $("#animationWhileLoop"), className: "ui-effects-transfer" }, 500, function() {
						$("#animationWhileLoop").removeClass("opacity00");
						$(".introjs-tooltip").removeClass("hide");
						$(".introjs-tooltiptext").append("<ul></ul>");
						tooltipAnimation();
					});
				}
			});
			break;
			
		case "nValInit":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us store the length of the array in a variable called <span class='ct-code-b-yellow'>len</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "binarySearchLogic":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "For <span class='ct-code-b-yellow'>binary search</span> to be perform the elements in the array" 
						+ " should be stored initially, hence let us perform <span class='ct-code-b-yellow'>bubble sort</span>" 
						+ " on the array to arrive at stored elements in the array.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "bubblesortLogic":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The following <span class='ct-code-b-yellow'>for-loop</span> performs " 
						+ "<span class='ct-code-b-yellow'>bubble sort</span> over the elements in the " 
						+ "array <span class='ct-code-b-yellow'>arr</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "searchElmtInit":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us also initialize a <span class='ct-code-b-yellow'>searchElement</span> " 
						+ "on whom we want to perform the <span class='ct-code-b-yellow'>binary search</span>.<br/><br/>" 
						+ "You can also change the value <span class='ct-code-b-yellow new-val'>60</span> to any other value.";
				typing(".introjs-tooltiptext", text, function() {
					$("#searchElmt").effect("highlight", {color: '#ffff00'}, 500, function() {
						charAtEnd("searchElmt");
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
			
		case "varsInit":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Now the array has been stored.<br/><br/>For performing <span class='ct-code-b-yellow'>binary search</span> we will " 
						+ "initilize a few variables which will store the ";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltiptext").append("<ul></ul>");
					var text = "<li><span class='ct-code-b-yellow'>low</span> : lowest index.</li>" 
							+ "<li><span class='ct-code-b-yellow'>high</span> : highest index.</li>" 
							+ "<li><span class='ct-code-b-yellow'>mid</span> : middle index.</li>"
							+ "<li><span class='ct-code-b-yellow'>flag</span> : this variable is used to find " 
							+ "out if the element is found or not, " 
							+ "if it is found the <span class='ct-code-b-yellow'>flag</span>" 
							+ " is initialized to <span class='ct-code-b-yellow'>1</span>, by defalut it is initialized to" 
							+ " <span class='ct-code-b-yellow'>0</span>.</li>";
					typing($(".introjs-tooltiptext ul"), text, function() {
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
			
		case "whileLoop":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "The <span class='ct-code-b-yellow'>while-loop</span> iterates as long as the " 
							+ "variable <span class='ct-code-b-yellow'>low</span> contains a value is lesser" 
							+ " than <span class='ct-code-b-yellow'>high</span>.<br/><br/>" 
							+ "This <span class='ct-code-b-yellow'>while-loop</span> is responsible for finding the" 
							+ " index of the value stored in <span class='ct-code-b-yellow'>searchElement</span>.<br/><br/>" 
							+ "The code inside the <span class='ct-code-b-yellow'>while-loop</span> trys to find" 
							+ " the middle element and verify if the <span class='ct-code-b-yellow'>searchElement</span> " 
							+ "is lesser than the middle element or the greater." 
							+ "<br/>If it finds that the <span class='ct-code-b-yellow'>searchElement</span>" 
							+ " is lesser than the middle element the <span class='ct-code-b-yellow'>while-loop</span>" 
							+ " changes the index of " 
							+ "<span class='ct-code-b-yellow'>high</span> to the middle element " 
							+ "and trys to search from the <span class='ct-code-b-yellow'>low</span>" 
							+ " to the new <span class='ct-code-b-yellow'>high</span>, like this it will " 
							+ "start dividing the elements in the array to half the size and start searching in the selected half" 
							+ " and finaly when element is arrive at the <span class='ct-code-b-yellow'>searchElement</span>" 
							+ " the <span class='ct-code-b-yellow'>flag</span> " 
							+ "is initialized at <span class='ct-code-b-yellow'>1</span> " 
							+ "indicating the <span class='ct-code-b-yellow'>searchElement</span> is found and " 
							+ "the <span class='ct-code-b-yellow'>break</span> statement is executed.";
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "ifElseBlk":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".background-color-yellow").removeClass("background-color-yellow");
			$(".introjs-helperLayer").one("transitionend", function() {
				$(".introjs-tooltiptext").append("<span id='tooltipIfCndtn' style='font-family: monospace;'>" 
						+ "<span id='tooltipFlag' class='display-inline-block'>flag</span> == 1</span>");
		
				var l = $(".if-cndtn").offset();
				$("#tooltipIfCndtn").offset({
					"top" : l.top,
					"left" : l.left
				});
		
				TweenMax.to("#tooltipIfCndtn", 1, {top : 0, left : 0, onComplete : function() {
					flipEffect("#tooltipFlag", parseInt($("#flagVal").text()), function() {
						var text;
						$(".introjs-tooltiptext").append("<div></div>");
						if (parseInt($("#flagVal").text()) == 1) {
							$("#output").append("<div class='opacity00'>The search element " + $("#searchVal").text() 
									+ " is found at position : " + $("#midVal").text() + ".</div>");
							text = "Since above condition evalutes to <span class='ct-code-b-yellow'>true</span>, control enters" 
									+ " into <span class='ct-code-b-yellow'>if-block</span>.";
							var nextStep = {
								element : "#ifPrintfStmt",
								intro : "",
								tooltipClass : "hide"
							}
							introjs.insertOption(introjs._currentStep + 1, nextStep);
							
						} else {
							$("#output").append("<div class='opacity00'>The search element " + $("#searchVal").text() + " is not found.</div>");
							text = "Since above condition evalutes to <span class='ct-code-b-red'>false</span>, " 
									+ "control enters into <span class='ct-code-b-yellow'>else-block</span>.";
							var nextStep = {
								element : "#elsePrintfStmt",
								intro : "",
								tooltipClass : "hide"
							}
							introjs.insertOption(introjs._currentStep + 1, nextStep);
						}
						typing($(".introjs-tooltiptext div:last-child()"), text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				}});
			});
			break;
			
		case "ifPrintfStmt":
		case "elsePrintfStmt":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 500);
			});
			break;
			
		case "outputDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = $("#output > div:last-child").removeClass("opacity00").text();
				typing($("#output > div:last-child"), text, function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 500);
				});
			});
			break;
			
		case "restart":
			introjs.refresh();
			$('.introjs-nextbutton').hide();
			$('#restart').removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Click to restart.";
				typing($(".introjs-tooltiptext"), text);
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
	
	function getURLParameter(sParam) {
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++) {
			var sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam) {
				return sParameterName[1];
			}
		}
	}
	lang = getURLParameter("lang");
	if (lang == "c") {
		$('#preproceserDir').text("#include <stdio.h>\nint main() {");			
		$('#ifPrintfStmt').text('printf("The search element %d is found at position : %d.", searchElement, mid);');
		$('#elsePrintfStmt').text('printf("The search element %d is not found.", searchElement);');
	} else if (lang == "cpp") {
		$('#preproceserDir').text("#include <iostream>\nusing namespace std;\nint main() {");
		$('#ifPrintfStmt').text('cout << "The key element " << searchElement << " is found at position : " << mid << "\\n";');
		$('#elsePrintfStmt').text('cout << "The Key element " << searchElement << " is not found in the array\\n";');
	}
}
function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

var staringPoint = 2;
var endingPoint = 8;

function bubbleSort() {
	if (staringPoint > 2 && staringPoint < (endingPoint + 2)) {
		$("#arrTable tr:nth-child(3) td").eq(staringPoint - 1).effect("highlight", {color: 'pink'}, 100, function() {
			var val1 = parseInt($("#arrTable tr:nth-child(3) td:nth-child(" + (staringPoint - 1) + ") span").text());
			var val2 = parseInt($("#arrTable tr:nth-child(3) td:nth-child(" + (staringPoint) + ") span").text());
			if (val1 > val2) {
				var elmt1 = $("#arrTable tr:nth-child(3) td:nth-child(" + (staringPoint - 1) + ") span");
				var elmt2 = $("#arrTable tr:nth-child(3) td:nth-child(" + (staringPoint) + ") span");
				var l1 = elmt1.text(val2).offset();
				var l2 = elmt2.text(val1).offset();
				
				var leftLength = l2.left - l1.left;
				TweenMax.from(elmt1, 0.2, {"left" : leftLength});
				TweenMax.from(elmt2, 0.2, {"left" : -leftLength, onComplete:function() {
					staringPoint++;
					bubbleSort();
				}});
			} else if (staringPoint < (endingPoint + 2)) {
				staringPoint++;
				bubbleSort();
			}
		});
	} else if (staringPoint == 2) {
		$("#arrTable tr:nth-child(3) td").eq(staringPoint - 1).effect("highlight", {color: 'pink'}, 100, function() {
			if (staringPoint < (endingPoint + 2)) {
				staringPoint++;
				bubbleSort();
			}
		});
	} else {
		$("#arrTable tr:nth-child(3) td").eq(staringPoint - 2).css("background-color", "lightgreen");
		$(".introjs-tooltiptext").append("<div></div>");
		itrCount++;
		staringPoint = 2;
		endingPoint--;
		if (staringPoint < (endingPoint + 2)) {
			setTimeout(function() {
				bubbleSort();
			}, 200);
		} else {
			setTimeout(function() {
				introjs.nextStep();
			}, 500);
		}
 	}
}


var fixedInfoFlag = true;
function tooltipAnimation() {
	$(".introjs-tooltiptext ul").remove();
	console.log()
	$(".user-btn").remove();
	$(".background-color-yellow").removeClass("background-color-yellow");
	if (fixedInfoFlag) {
		fixedInfoFlag = false;
		var text = "<div>By using the <span class='ct-code-b-yellow'>while</span> condition to travels through all the elements from the" 
				+ " beginning index to till the end index of the array.</div>";
		typing($(".introjs-tooltiptext"), text, function() {
			whileAnimation();
		});
	} else {
		whileAnimation();
	}
	
}


function whileAnimation() {
	$(".introjs-tooltiptext ul *").removeAttr("id");
	$("#cndtn").effect("highlight", {color: 'yellow'}, 500, function() {
		$(this).addClass("background-color-yellow");
		$(".introjs-tooltiptext").append("<ul><li></li></ul>");
		$(".introjs-tooltiptext ul li:last-child").append("<span id='tooltipCndtn' class='opacity00'>" 
				+ "<span id='tooltipLowVal' class='display-inline-block ct-code-b-yellow'>low</span> " 
				+ "<span class='display-inline-block ct-code-b-yellow'> <= </span> " 
				+ "<span id='tooltipHighval' class='display-inline-block ct-code-b-yellow'>high</span></span>");
			travelEffect("#tooltipCndtn", "#cndtn", "", function() {
				//$("#lowValDiv .fa-coffee").effect("highlight", {color: 'yellow'}, 500, function() {
					flipEffect("#tooltipLowVal", $("#lowVal").text(), function() {
						//$("#highValDiv .fa-coffee").effect("highlight", {color: 'yellow'}, 500, function() {
							flipEffect("#tooltipHighval", $("#highVal").text(), function() {
								var val1 = parseInt($("#lowVal").text());
								var val2 = parseInt($("#highVal").text());
								var text = "";
								if (val1 <= val2) {
									text = "Since the above condtion evaluates to <span class='ct-code-b-yellow'> true</span>. " 
												+ " The control goes into the <span class='ct-code-b-yellow'>while-loop</span>.</span>";
								} else {
									text = "Since the above condtion evaluates to <span class='ct-code-b-red'> false</span>.";
								}
								$("#tooltipCndtn").append("<div></div>");
								typing($("#tooltipCndtn div:last-child"), text, function() {
									if (val1 <= val2) {
										$("#animationWhileBody").effect("highlight", {color: 'yellow'}, 500);
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='step2()'>Next &#8594;</a>");
									} else {
										$(".introjs-nextbutton").show();
									}
								});
							});
						//});
					});
				//});
			});	
		});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 0.2, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function travelEffect(selector1, selector2, selector3, callBackFunction) {
	$("body").append("<span id='innerDiv' class='zIndex " + selector3 + "' style='font-family: monospace;'>" + $(selector1).html() + "</span>");
	
	$("#innerDiv *").removeAttr("id");
	var l = $(selector2).offset();
	$("#innerDiv").offset({
		"top" : l.top,
		"left" : l.left
	});
	
	var cssTop = $("#innerDiv").css("top");
	var cssLeft = $("#innerDiv").css("left")
	
	var l1 = $(selector1).offset();
	var l2 = $("#innerDiv").offset();
	var topLength = parseInt(cssTop.substring(0,cssTop.length - 2)) - (l2.top - l1.top);
	var leftLength = parseInt(cssLeft.substring(0,cssLeft.length - 2))- (l2.left - l1.left);
	
	TweenMax.to("#innerDiv", 1, {top : topLength, left : leftLength, onComplete:function() {
		$(selector1).removeClass("opacity00");
		$("#innerDiv").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


var midInit = true;

function step2() {
	$(".user-btn").remove();
	$(".introjs-tooltiptext ul *").removeAttr("id");
	$(".background-color-yellow").removeClass("background-color-yellow");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "Inorder to the variable <span class='ct-code-b-yellow'>mid</span> is initialized to the " 
			+ "current <span class='ct-code-b-yellow'>middle</span> index of the array."
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$("#midInit").effect("highlight", {color: 'yellow'}, 500, function() {
			$(this).addClass("background-color-yellow");
			$(".introjs-tooltiptext ul li:last-child").append("<div id='tooltipMidInit' class='opacity00'>"
					+ "<div id='tooltipMid' class='display-inline-block ct-code-b-yellow'>mid</div> "
					+ "<div class='display-inline-block ct-code-b-yellow'> = </div> "
					+ "<div id='tooltipMidVal' class='display-inline-block ct-code-b-yellow'>" 
					+ "(<div id='tooltipLowVal' class='display-inline-block ct-code-b-yellow'>low</div> "
					+ "<div class='display-inline-block'> + </div> "		
					+ "<div id='tooltipHighVal' class='display-inline-block ct-code-b-yellow'>high</div>)"
					+ "<div class='display-inline-block ct-code-b-yellow'> / 2 </div></div></div>");
			travelEffect("#tooltipMidInit", "#midInit", "", function() {
				//$("#lowValDiv .fa-coffee").effect("highlight", {color: 'yellow'}, 500, function() {
					flipEffect("#tooltipLowVal", $("#lowVal").text(), function() {
						//$("#highValDiv .fa-coffee").effect("highlight", {color: 'yellow'}, 500, function() {
							flipEffect("#tooltipHighVal", $("#highVal").text(), function() {
								var val = parseInt((parseInt($("#lowVal").text()) + parseInt($("#highVal").text()))/2);
								flipEffect("#tooltipMidVal",val, function() {
									var l1 = $("#midVal").removeClass("opacity00").text(val).offset();
									var l2 = $("#tooltipMidVal").offset();
									var topLength = l2.top - l1.top;
									var leftLength = l2.left - l1.left;
									
									$("#midValDiv span:eq(0)").removeClass("opacity00");
									
									TweenMax.from("#midVal", 1, {top : topLength, left : leftLength, onComplete:function() {
										travelEffect("#index" + $("#midVal").text() + " span", "#midVal", "", function() {
											
											
											//$("#arrowsTr .mid").parents("td").find("i").addClass("mid-arrow");
											$("#arrowsTr .mid").remove();
											$(".mid-arrow").removeClass("mid-arrow").addClass("opacity00");
											$("#arrowsTr td:eq(" + (parseInt($("#midVal").text()) + 1) + ")").prepend("<div class='mid'><span>mid</span></div>");
											
											if ($("#arrowsTr .mid").parents("td").find("div").length <= 2) {
												$("#arrowsTr .mid").parents("td").find("i").addClass("opacity00 mid-arrow");
											}
											
											
											$("#arrowsTr td:eq(" + (parseInt($("#midVal").text()) + 1) + ") *").removeClass("opacity00");
											if ($("#arrowsTr td:eq(" + (parseInt($("#midVal").text()) + 1) + ")").find("div").length > 1) {
												$("#arrowsTr td:eq(" + (parseInt($("#midVal").text()) + 1) + ")").append('<i aria-hidden="true" class="fa fa-arrow-down mid-arrow"></i>');
											}
											$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='step3()'>Next &#8594;</a>");
										});
									}});
								});
							});
						//});
					});
				//});
			});	
		});	
	});
}

function step3() {
	$(".user-btn").remove();
	$(".background-color-yellow").removeClass("background-color-yellow");
	$(".introjs-tooltiptext ul *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "Verifying if the index at index <span class='ct-code-b-yellow'>mid</span> is equal to the " 
				+ "current <span class='ct-code-b-yellow'>searchElement</span>.";
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$("#ifCndtn").effect("highlight", {color: 'yellow'}, 500, function() {
			$(this).addClass("background-color-yellow");
			$(".introjs-tooltiptext ul li:last-child").append("<div id='tooltipIfCndtn' class='opacity00'>"
					+ "<div id='tooltipSearchElmt' class='display-inline-block ct-code-b-yellow'>searchElement</div>"
					+ " <div class='display-inline-block ct-code-b-yellow'>==</div> "
					+ "<div id='tooltipArrVal' class='display-inline-block ct-code-b-yellow'>arr[" 
					+ "<div id='tooltipMid' class='display-inline-block ct-code-b-yellow'>mid</div>]</div>" 
					+ "</div>");
			travelEffect("#tooltipIfCndtn", "#ifCndtn", "", function() {	
				flipEffect("#tooltipSearchElmt", $("#searchVal").text(), function() {
					flipEffect("#tooltipMid", $("#midVal").text(), function() {
						var elmt = $("#arrTable tr:nth-child(3) td").eq(parseInt($("#midVal").text()) + 1);
						$(elmt).effect("highlight", {color: 'yellow'}, 500, function() {
							flipEffect("#tooltipArrVal", $(elmt).text(), function() {
								var text = "";
								if (parseInt($(elmt).text()) == parseInt($("#searchVal").text())) {
									text = "<br/>since the above condtion evaluates to <span class='ct-code-b-yellow'>true</span>. " 
												+ "and search Element found at mid position" 
												+ " control enters into <span class='ct-code-b-yellow'>if-block</span>.";
								} else {
									text = "<br/>since the above condtion evaluates to <span class='ct-code-b-red'>false</span>. " 
												+ "control goes into the <span class='ct-code-b-yellow'>else-if-block</span>.";
								}
								$("#tooltipIfCndtn").append("&emsp;&emsp;<span></span>");
								typing($("#tooltipIfCndtn span:last-child"), text, function() {
									if (parseInt($(elmt).text()) == parseInt($("#searchVal").text())) {
										$("#ifCndtn").removeClass("background-color-yellow");
										$("#flagInit, #breakLine").addClass("background-color-yellow");
										$(".introjs-tooltiptext ul").append("<li></li>");
										
										var text = "Since the <span class='ct-code-b-yellow'>searchElement</span> is equal to the value stored" 
												+ " at <span class='ct-code-b-yellow'>middle</span> index the control enter into the " 
												+ "<span class='ct-code-b-yellow'>if-block</span> and initialize " 
												+ "the value stored in the <span class='ct-code-b-yellow'>flag</span>" 
												+ " to <span class='ct-code-b-yellow'>1</span>, indicating that " 
												+ " the <span class='ct-code-b-yellow'>searchElement</span> is found successfully.<br/><br/>" 
												+ "The <span class='ct-code-b-yellow'>break</span> statement is executed, " 
												+ "which will transfer the control out of the <span class='ct-code-b-yellow'>while-loop</span>."		
												
												
										typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
											$("#flagVal").text("1");
											$(".introjs-nextbutton").show();
										});
									} else {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='step5()'>Next &#8594;</a>");
									}
								});
							});
						});
					});
				});
			});
		});
	});
}


function step7() {
	$(".user-btn").remove();
	$(".background-color-yellow").removeClass("background-color-yellow");
	$(".introjs-tooltiptext ul *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "checking the searchElement is higher than mid value."
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
			$(this).addClass("background-color-yellow");
			var elmt = $("#arrTable tr:nth-child(3) td").eq(parseInt($("#midVal").text()) + 1);
			var text = "";
			if (parseInt($(elmt).text()) < parseInt($("#searchVal").text())) {
				text = "Since the above condtion evaluates to <span class='ct-code-b-yellow'>true</span>. " 
							+ "and search Element must be in right side to mid";
			} else {
				text = "Since the above condtion evaluates to <span class='ct-code-b-red'>false</span>. " 
							+ "and search Element must be left side to mid.";
			}
			if (parseInt($(elmt).text()) < parseInt($("#searchVal").text())) {
				$("#arrTable tr:nth-child(3) td").eq(parseInt($("#midVal").text()) + 1).prevAll().css("background-color" , "lightgray");
				$("#arrName").removeAttr("style");
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='step6()'>Next &#8594;</a>");
			} else {
				$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='step7()'>Next &#8594;</a>");
			}
	});
}

function step6() {
	$(".user-btn").remove();
	$(".background-color-yellow").removeClass("background-color-yellow");
	$(".introjs-tooltiptext ul *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li></li>");
	//var text = "Search element is higher than mid position so change the low value.";
	
	var text = "Since the <span class='ct-code-b-yellow'>searchElement</span> is greater than the middle element" 
				+ " of the current <span class='ct-code-b-yellow'>low</span> index will be initialized" 
				+ " with next index of the middle element.";
	
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$("#lowInit").effect("highlight", {color: 'yellow'}, 500, function() {
			$(this).addClass("background-color-yellow");
			$(".introjs-tooltiptext ul li:last-child").append("<div id='tooltipLowInit' class='opacity00'>"
					+ "<div id='tooltipLow' class='display-inline-block ct-code-b-yellow'>low</div>" 
					+ " <div class='display-inline-block ct-code-b-yellow'>=</div> " 
					+ "<div id='tooltipLowVal' class='display-inline-block ct-code-b-yellow'>" 
					+ "<div id='tooltipMid' class='display-inline-block'>mid</div> + 1 </div>");
			travelEffect("#tooltipLowInit", "#lowInit", "", function() {	
				//$("#midValDiv .fa-coffee").effect("highlight", {color: 'yellow'}, 500, function() {
					flipEffect("#tooltipMid", $("#midVal").text(), function() {
						flipEffect("#tooltipLowVal", parseInt($("#midVal").text()) + 1, function() {
							//$("#lowValDiv .fa-coffee").effect("highlight", {color: 'yellow'}, 500, function() {
								$("#lowVal").text(parseInt($("#midVal").text()) + 1);
								if (parseInt($("#lowVal").text()) == -1 || parseInt($("#lowVal").text() == 8)) {
									$("#arrowsTr .low, #arrowsTr .low-arrow").remove();
									$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='tooltipAnimation()'>Next &#8594;</a>");
								} else {
									arrowMoveEffect($("#arrowsTr td:eq(" + (parseInt($("#midVal").text()) + 2) + ")").find("i"), $("#arrowsTr .low").parent().find("i"), "low", function() {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='tooltipAnimation()'>Next &#8594;</a>");
									});
								}
							//});
						});
					});
				//});
			});
		});
	});
}

function step5() {
	$(".user-btn").remove();
	$(".background-color-yellow").removeClass("background-color-yellow");
	$(".introjs-tooltiptext ul *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li></li>");
	//var text = "Verifying if the element at <span class='ct-code-b-yellow'>mid</span> is lesser than the value of searchElement."
	var text = "Checking if the <span class='ct-code-b-yellow'>searchElement</span> is lesser than the value stored" 
				+ " at <span class='ct-code-b-yellow'>arr[mid]</span>.";
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$("#elseIfCndtn2").effect("highlight", {color: 'yellow'}, 500, function() {
			$(this).addClass("background-color-yellow");
			$(".introjs-tooltiptext ul li:last-child").append("<div id='tooltipElseIfCndtn2' class='opacity00'>"
					+ "<div id='tooltipSearchElmt' class='display-inline-block ct-code-b-yellow'>searchElement</div> " 
					+ "<span class='ct-code-b-yellow'><</span> " 
					+ "<div id='tooltipArrVal' class='display-inline-block ct-code-b-yellow'>arr[" 
					+ "<div id='tooltipMid' class='display-inline-block ct-code-b-yellow'>mid</div>]</div> " 
					+ "</div>");
			travelEffect("#tooltipElseIfCndtn2", "#elseIfCndtn2", "", function() {
				//$("#searchElmtDiv .fa-coffee").effect("highlight", {color: 'yellow'}, 500, function() {
					flipEffect("#tooltipSearchElmt", $("#searchVal").text(), function() {
						//$("#midValDiv .fa-coffee").effect("highlight", {color: 'yellow'}, 500, function() {
							flipEffect("#tooltipMid", $("#midVal").text(), function() {
								var elmt = $("#arrTable tr:nth-child(3) td").eq(parseInt($("#midVal").text()) + 1);
								$(elmt).effect("highlight", {color: 'yellow'}, 500, function() {
									flipEffect("#tooltipArrVal", $(elmt).text(), function() {
										var text = "";
										if (parseInt($(elmt).text()) > parseInt($("#searchVal").text())) {
											text = "<br/>since the above condtion evaluates to <span class='ct-code-b-yellow'>true</span>. " 
														+ "It means the <span class='ct-code-b-yellow'>searchElement</span> could be " 
														+ "on left side of the <span class='ct-code-b-yellow'>middle</span>" 
														+ " element.<br/><br/>" 
														+ "The control goes into the <span class='ct-code-b-yellow'>if-block</span>.";
										} else {
											text = "<br/>since the above condtion evaluates to <span class='ct-code-b-red'>false</span>. " 
														+ "It means the <span class='ct-code-b-yellow'>searchElement</span>" 
														+ " could be on the right side of the <span class='ct-code-b-yellow'>middle</span>" 
														+ " element.<br/><br/>" 
														+ "The control goes into the next <span class='ct-code-b-yellow'>else-block</span>.";
										}
										$("#tooltipElseIfCndtn2").append("&emsp;&emsp;<span></span>");
										typing($("#tooltipElseIfCndtn2 span:last-child"), text, function() {
											if (parseInt($(elmt).text()) > parseInt($("#searchVal").text())) {
												//$("#arrTable tr:nth-child(3) td").eq(parseInt($("#midVal").text()) + 1).nextAll().css("background-color" , "lightgray");
												$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='step8()'>Next &#8594;</a>");
											} else {
												$("#arrTable tr:nth-child(3) td").eq(parseInt($("#midVal").text()) + 1).prevAll().not("#arrName").css("background-color" , "lightgray");
												$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='step6()'>Next &#8594;</a>");
											}
										});
									});
								});
							});
						//});
					});
				//});
			});
		});
	});
}

function step8() {
	$(".user-btn").remove();
	$(".background-color-yellow").removeClass("background-color-yellow");
	$(".introjs-tooltiptext ul *").removeAttr("id");
	$(".introjs-tooltiptext ul").append("<li></li>");
	var text = "Since the <span class='ct-code-b-yellow'>searchElement</span> is lesser than the middle element" 
				+ " of the current <span class='ct-code-b-yellow'>high</span> index will be initialized" 
				+ " with previous index of the middle element.";
	typing($(".introjs-tooltiptext ul li:last-child"), text, function() {
		$("#highInit").effect("highlight", {color: 'yellow'}, 500, function() {
			$(this).addClass("background-color-yellow");
			$(".introjs-tooltiptext ul li:last-child").append("<div id='tooltipHighInit' class='opacity00'>"
					+ "<div id='tooltipHigh' class='display-inline-block ct-code-b-yellow'>high</div>" 
					+ " <div class='display-inline-block ct-code-b-yellow'>=</div> " 
					+ "<div id='tooltipHighVal' class='display-inline-block ct-code-b-yellow'>" 
					+ "<div id='tooltipMid' class='display-inline-block'>mid</div> - 1 </div>");
			travelEffect("#tooltipHighInit", "#highInit", "", function() {
				flipEffect("#tooltipMid", $("#midVal").text(), function() {
					flipEffect("#tooltipHighVal", parseInt($("#midVal").text()) - 1, function() {
						$("#highVal").text(parseInt($("#midVal").text()) - 1);
							
						if (parseInt($("#highVal").text()) == -1 || parseInt($("#highVal").text() == 8)) {
							$("#arrowsTr .high, #arrowsTr .high-arrow").remove();
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='tooltipAnimation()'>Next &#8594;</a>");
						} else {	
							arrowMoveEffect($("#arrowsTr td:eq(" + $("#midVal").text() + ")").find("i"), $("#arrowsTr .high").parent().find("i"), "high", function() {
								$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='tooltipAnimation()'>Next &#8594;</a>");
							});
						}
					});
				});
			});
		});
	});
}

function arrowMoveEffect(selector1, selector2, selector3, callBackFunction) {
	$(selector1).parent().prepend("<div class='" + selector3 + " opacity00'><span>" + selector3 + "</span></div>");
	if ($(selector2).parents("td").find("div").length <= 1) {
		$(selector2).addClass("opacity00");
	}
	
	$(selector2).parents("td").find("." + selector3).addClass("opacity00").addClass(selector3);
	//console.log($(selector2).parents("td").find("." + selector3));
	travelEffect($(selector1).parents("td").find("." + selector3).find("span"), $(selector2).parents("td").find("." + selector3).find("span"), selector3, function() {
		$(selector1).parents("td").find("." + selector3).removeClass("opacity00");
		$(selector2).parents("td").find("." + selector3).remove();
	}, selector3);
	
	$("body").append("<i class='fa fa-arrow-down zIndex " + selector3 + "-arrow' id='moveArrow'></i>");
	
	var l = $(selector2).offset();
	$("#moveArrow").offset({
		"top" : l.top,
		"left" : l.left
	});
	$(selector2).parents("td").find("." + selector3 + "-arrow").remove();
	var cssTop = $("#moveArrow").css("top");
	var cssLeft = $("#moveArrow").css("left")
	
	var l1 = $(selector1).offset();
	var l2 = $("#moveArrow").offset();
	var topLength = parseInt(cssTop.substring(0,cssTop.length - 2)) - (l2.top - l1.top);
	var leftLength = parseInt(cssLeft.substring(0,cssLeft.length - 2))- (l2.left - l1.left);
	
	TweenMax.to("#moveArrow", 1, {top : topLength, left : leftLength, onComplete:function() {
		$(selector1).removeClass("opacity00");
		
		if ($(selector1).parents("td").find("div").length > 1) {
			$(selector1).parents("td").append('<i aria-hidden="true" class="fa fa-arrow-down ' + selector3 + '-arrow"></i>');
		} else {
			$(selector1).parents("td").find("i").addClass(selector3 + '-arrow');
		}
		$("#moveArrow").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}