var introjs;
var typingSpeed = 5;
var lang;

var linearSearchCReady = function() {
//introGuide();
	var l1 = $("#searchElmt").offset();
	$("#searchVal").offset({"top": l1.top, "left": l1.left});
	
	$("[contenteditable=true]").on("keydown", function(e) {
		introjs.refresh();
		$(".errorMsg").remove();
		$(".introjs-tooltiptext .new-val").text($(this).text());
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$('.introjs-tooltiptext').append("<div class='errorMsg'><br/>Enter a number of maximum 2 digits.</div>");
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
	if (lang == 'c') {
		$('#headerFile').text('#include <stdio.h>');
		$('#ifBody').text('printf("Search element %d is found at index : %d.", searchElement, elementIndex);');
		$('#elseBody').text('printf("Search element %d is not found.", searchElement);');
	} else if (lang == 'cpp') {
		$('#headerFile').text('#include <iostream>\nusing namespace std;');
		$('#ifBody').text('cout << "Search element " << searchElement << " is found at index : " << elementIndex;');
		$('#elseBody').text('cout << "Search element " << searchElement << " is not found" << searchElement;');
	}
	introGuide();
	
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : "#cCode",
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
			element : "#searchElmtInit",
			intro : "",
			position: "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#elmtIndex",
			intro : "",
			position: "right",
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		}, {
			element : "#iInit",
			intro : "",
			position: "right",
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left",
			tooltipClass: "hide"
		},{
			element : "#forLoop",
			intro : "",
			position: "right"
		}, {
			element : "#ifBlk",
			intro : "",
			position: "right"
		}, {
			element : "#animationDiv",
			intro : "",
			position: "left"
		}, {
			element : "#ifElseBlk",
			intro : "",
			position: "top"
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
		switch (elementId) {
		case "cCode":
			$(".introjs-nextbutton").hide();
			$("[contenteditable=true]").attr("contenteditable", false);
			var text = "In this program we will learn how a <span class='ct-code-b-yellow'>linear search</span>" 
						+ " algorithm works over an array.";
			typing($(".introjs-tooltiptext"), text, function() {
				$(".introjs-nextbutton").show();
			});
			break;
			
		case "arrInit":
			$(".introjs-nextbutton").hide();
			$("[contenteditable=false]").attr("contenteditable", true);
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us consider an array of <span class='ct-code-b-yellow'>8</span> elements. " 
							+ "<br/>Feel free to modify the values in the array."
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
					
					$('#arrInit').effect( "transfer", { to: $("#arrTable"), className: "ui-effects-transfer" }, 1000, function() {
						$("#arrTable").removeClass("opacity00");
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
					});
				} else if (introjs._currentStep == 4) {
					$("#searchElmt").attr("contenteditable", false);
					TweenMax.to("#searchBox", 0.5, {opacity: 1, onComplete:function() {
						$("#searchBox").removeClass("opacity00");
						$("#searchVal").text($("#searchElmt").text()).removeClass("opacity00");
						$("#searchElmt").addClass("zIndex").effect("highlight", {color: '#FFFFFF'}, 1000);
						TweenMax.to("#searchVal", 0.5, {top: 0, left:0, onComplete:function() {
							$("#searchElmt").removeClass("zIndex");
							/* $("#searchVal").css({"border": "1px solid gray;" , "border-radius" : "50%", "padding" : "5px"}); */
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						}});
					}})
				} else if (introjs._currentStep == 6) {
					TweenMax.to("#elmtIndexBox", 0.5, {opacity: 1, onComplete:function() {
						TweenMax.to("#elmtIndexBox", 0.5, {opacity: 1, onComplete:function() {
							$("#elmtIndexBox").removeClass("opacity00");
							setTimeout(function() {
								introjs.nextStep();
							}, 500);
						}});
					}})
				} else if (introjs._currentStep == 8) {
					TweenMax.to("#iValSpan", 0.5, {opacity: 1, onComplete:function() {
						$("#iValSpan").removeClass("opacity00");
						setTimeout(function() {
							introjs.nextStep();
						}, 500);
					}});
				} else if (introjs._currentStep == 11) {
					var text = "In the <span class='ct-code-b-yellow'>for-loop</span> we initialize the value" 
							+ " of <span class='ct-code-b-yellow'>i</span> to " 
							+ "<span class='ct-code-b-yellow'>0</span> and start searching" 
							+ " from <span class='ct-code-b-yellow'>0<sup>th</sup> index</span>.";
					typing(".introjs-tooltiptext", text, function() {
						$("#iValSpan").append(" = <span id='iVal'>0</span>");
						$("#iVal").addClass("animated zoomIn").one("animationend", function() {
							$(this).removeClass("animated zoomIn");
							$("#arrowsTr td:eq(1) i").removeClass("opacity00");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='tooltipIfCndtn()'>Next &#8594;</a>");
						});
					});
				}
			});
			break;
			
		case "searchElmtInit":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				
				var text = "Let us declare an <span class='ct-code-b-yellow'>int</span>" 
					+ " variable called <span class='ct-code-b-yellow'>searchElement</span>" 
					+ " and initialize it with a value <span class='ct-code-b-yellow new-val'>4</span>, " 
					+ "which will be searched in the array for its <span class='ct-code-b-yellow'>index</span>.<br/>" 
					+ "You can also change the value <span class='ct-code-b-yellow new-val'>4</span> to any other value.";
				
				typing(".introjs-tooltiptext", text, function() {
					$("#searchElmt").effect("highlight", {color: '#ffff00'}, 500, function() {
						charAtEnd("searchElmt");
						$(".introjs-nextbutton").show();
					});
				});
			});
			break;
			
		case "iInit":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "<ul><li>Let us declare an <span class='ct-code-b-yellow'>int</span>" 
						+ " variable called <span class='ct-code-b-yellow'>i</span> that will" 
						+ " work as the <span class='ct-code-b-yellow'>loop-counter</span> variable.</li>"
						+ "<li>The <span class='ct-code-b-yellow'>length</span> of the array is <span class='ct-code-b-yellow'>8</span>.</li></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "forLoop":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "In this <span class='ct-code-b-yellow'>for-loop</span> we will iterate through the elements" 
						+ " of the array to find a match with the given <span class='ct-code-b-yellow'>searchElement</span>.";
				
				
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "ifBlk":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "This <span class='ct-code-b-yellow'>if</span> condition is use to verifies if the" 
							+ " <span class='ct-code-b-yellow'>element</span> at current " 
							+ "index <span class='ct-code-b-yellow'>i</span> is " 
							+ "same as the <span class='ct-code-b-yellow'>searchElement</span>.<br/> " 
							+ "If it is the same as the element index is initialize to <span class='ct-code-b-yellow'>i</span>" 
							+ " and the control will " 
							+ "break out of the <span class='ct-code-b-yellow'>for-loop</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "elmtIndex":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Let us declare another <span class='ct-code-b-yellow'>int</span> variable " 
						+ "called <span class='ct-code-b-yellow'>elementIndex</span>" 
						+ " which is initialize to <span class='ct-code-b-yellow'>-1</span>.<br/>" 
						+ "This variable is used to store the <span class='ct-code-b-yellow'>index</span>" 
						+ " of the array where the element is found.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").show();
				});
			});
			break;
			
		case "ifElseBlk":
			introjs.refresh();
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#flagVal").effect("highlight", {color: 'pink'}, 1000);
				
				$(".introjs-tooltiptext").append("<span id='tooltipIfCndtn' style='font-family: monospace;'>" 
								+ "<span id='tooltipElementIndex' class='flip-css'>elementIndex</span> != -1</span>");
				
				
				var l = $("#ifCndtn").offset();
				$("#tooltipIfCndtn").offset({
					"top" : l.top,
					"left" : l.left
				});
				
				TweenMax.to("#tooltipIfCndtn", 1, {top : 0, left : 0, onComplete : function() {
					flipEffect("#tooltipElementIndex", parseInt($("#elmtIndexVal").text()), function() {
						var text;
						if (parseInt($("#elmtIndexVal").text()) != -1) {
							$("#output").append("<div class='opacity00'>Search element " + $("#searchVal").text() + " is found at index : " + (count - 2) + ".</div>");
							text = "Since the above condition evalutes to <span class='ct-code-b-yellow'>true</span>, control enters " 
									+ "into the <span class='ct-code-b-yellow'>if-block</span>.";
							var nextStep = {
								element : "#ifBody",
								intro : "",
								tooltipClass : "hide"
							}
							introjs.insertOption(introjs._currentStep + 1, nextStep);
						} else {
							$("#output").append("<div class='opacity00'>Search element " + $("#searchVal").text() + " is not found.</div>");
							text = "Since the above condition evalutes to <span class='ct-code-b-red'>false</span>, control enters into " 
									+ "the <span class='ct-code-b-yellow'>else-block</span>.";
							var nextStep = {
								element : "#elseBody",
								intro : "",
								tooltipClass : "hide"
							}
							introjs.insertOption(introjs._currentStep + 1, nextStep);
						}
						$(".introjs-tooltiptext").append("<div></div>");
						typing($(".introjs-tooltiptext > div:last-child"), text, function() {
							$(".introjs-nextbutton").show();
						});
					});
				}});
			});
			break;
			
		case "ifBody":
		case "elseBody":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					introjs.nextStep();
				}, 1000);
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
			$(".introjs-tooltip").css("min-width", "200px");
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

var count = 2;

function verify() {
	$(".user-btn").remove();
	$("#tooltipReuseArea").empty();
	$("#tooltipIfCndtn").effect("highlight", {color: '#ffff00'}, 500, function() {
		$("#tooltipReuseArea").append("<br/><div><span style='font-family: monospace; font-size:13px;' id='tooltipCndtn'>" 
								+ "<span id='tooltipSearchElmt' class='flip-css'>searchElement</span> == <span class='flip-css' id='tooltipArr'>" 
								+ "arr[<span id='tooltipI' class='flip-css'>i</span>]</span></span></div>");
		
		var l1 = $("#tooltipIfCndtn").offset();
		$("#tooltipCndtn").offset({
			"top" : l1.top,
			"left" : l1.left
		});
		
		TweenMax.to("#tooltipCndtn", 0.5, {top : 0, left : 0, onComplete : function() {
			flipEffect("#tooltipI", $("#iVal").text(), function() {
				flipEffect("#tooltipArr", $("#arrTable tr:eq(2) td:eq(" + (parseInt($("#iVal").text()) + 1) + ") span").text(), function() {
					flipEffect("#tooltipSearchElmt", $("#searchVal").text(), function() {
						$("#tooltipReuseArea > div:last-child").append("<div></div>");
						var text = "";
						if (parseInt($("#tooltipSearchElmt").text()) == parseInt($("#tooltipArr").text())) {
								text = "Since the above condition evaluates to <span class='ct-code-b-yellow'>true</span> the control enters into the" 
									+ " <span class='ct-code-b-yellow'>if-block</span>, initialize the <span class='ct-code-b-yellow'>elementIndex</span>" 
									+ " with the current value in <span class='ct-code-b-yellow'>i</span> and exits " 
									+ "the <span class='ct-code-b-yellow'>for-loop</span>.";
						} else {
							text = "Since the above condition evaluates to <span class='ct-code-b-red'>false</span>, " 
								+ "the <span class='ct-code-b-yellow'>if-block</span> is skipped and the control " 
								+ "goes to the <span class='ct-code-b-yellow'>for-loop</span> and increments the " 
								+ "value of <span class='ct-code-b-yellow'>i</span> by <span class='ct-code-b-yellow'>1</span>.";
						}
						
						typing($("#tooltipReuseArea > div:last-child > div:last"), text, function() {
							if (parseInt($("#tooltipSearchElmt").text()) == parseInt($("#tooltipArr").text())) {
								$("#arrTable tr:nth-child(4) td:nth-child(" + count + ") .fa-check").removeClass("hide");
								$("#arrTable tr:nth-child(2) td:nth-child(" + count + ") span").css({"color" : "green", "font-weight" : "bold"});
								$("#elmtIndexVal").text(count - 2).effect("highlight", {color: 'pink'}, 1000, function() {
									$(".introjs-nextbutton").show();
								});
							} else {
								$("#arrTable tr:nth-child(4) td:nth-child(" + count + ") .fa-times").removeClass("hide");
								var l = $("#arrTable tr:nth-child(1) td:nth-child(" + count + ") i").addClass("opacity00").offset();
								$("#arrTable tr:nth-child(1) td:nth-child(" + (count + 1) + ") i").removeClass("opacity00").offset({
									"top" : l.top,
									"left" : l.left
								});
								TweenMax.to($("#arrTable tr:nth-child(1) td:nth-child(" + (count + 1) + ") i"), 0.5, {top : 0, left : 0, onComplete : function() {
									if (count <= 9) {
										$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='verify()'>Next &#8594;</a>");
									} else {
										$(".introjs-nextbutton").show();
									}
									$("#iVal").text(parseInt($("#iVal").text()) + 1);
								}});
								count++;
							}
						});
					});
				});
			});
		}});
	});
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

function tooltipIfCndtn() {
	$(".user-btn").remove();
	$(".introjs-tooltiptext").append("<br/><pre class='opacity00'>if (<span id='tooltipIfCndtn'>searchElement == arr[i]</span>) {\n   elementIndex = i;\n   break;\n}</pre>");
	$(".introjs-tooltiptext").append("<div id='tooltipReuseArea'></div>");
	$(".introjs-tooltiptext pre").removeClass("opacity00").addClass("animated fadeIn").one("animationend", function() {
		$(this).removeClass("animated fadeIn");
		$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn' onclick='verify()'>Next &#8594;</a>");
	});
	
}