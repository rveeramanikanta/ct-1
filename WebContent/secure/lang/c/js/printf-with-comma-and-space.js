var printfWithCommaAndSpaceReady = function() {
	introcode = introJs();
	introcode.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
			steps : [{
				element :'#printfDefinition',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#codeDiv',
				intro :'',
				tooltipClass : "hide"
			},{
				element :'#VariableDeclararion1',
				intro :'',
				tooltipClass : "hide",
				animateStep: "aValueDeclaration"
			},{
				element :'#numberDiv1',
				intro :'',
				tooltipClass : "hide",
				animateStep : "aValueStore"
			},{
				element :'#VariableDeclararion2',
				intro :'',
				tooltipClass : "hide",
				animateStep: "bValueDeclaration"
			},{
				element :'#numberDiv2',
				intro :'',
				tooltipClass : "hide",
				animateStep : "bValueStore"
			},{
				element :'#sopLine3',
				intro :'',
				tooltipClass : "hide",
				animateStep : "printText"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep : "printText"
			},{
				element :'#sopLine4',
				intro :'',
				tooltipClass : "hide",
				animateStep : "noSpace"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep : "noComma"
			},{
				element :'#sopLine5',
				intro :'',
				tooltipClass : "hide",
				animateStep : "withComma"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep : "withComma"
			},{
				element :'#sopLine6',
				intro :'',
				tooltipClass : "hide",
				animateStep : "withSpace"
			},{
				element :'#outputDiv',
				intro :'',
				tooltipClass : "hide",
				animateStep : "withSpace"
			},{
				element : "#restartBtn",
				intro : "Click to Restart",
				tooltipClass: "introjs-tooltip-min-width-custom",
				position : "right"
			}]
	});
	introcode.onafterchange(function(targetElement){
		var elementId = targetElement.id;
		switch (elementId) {
			case "printfDefinition" :
				$('[contenteditable="true"]').attr('contenteditable', 'false');
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				text = 'The <span class = "ct-code-b-red">printf()</span> function with'+
						' <span class = "ct-code-b-red">,(comma)</span> and  <span class = "ct-code-b-red"> (space)</span>'+
						' format specifier is used to insert '+
						' a comma between different values.';
				typing('#printfDefinition', text, typingInterval, 'white', function() {
					setTimeout(function(){
						introcode.nextStep();
					},500);
				});
			break;
			
			case "codeDiv" :
				$("#codeDiv, #animationDiv, #outputDiv").removeClass("opacity00");
				$("#printfDefinition").addClass("z-index1000000");
				$('[contenteditable="true"]').attr('contenteditable', 'false');
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us learn how the <span class = "ct-code-b-yellow">printf()</span> function with'+
							' <span class = "ct-code-b-yellow">comma</span>(<span class = "ct-code-b-yellow">,</span>) and '+
							' <span class = "ct-code-b-yellow">format specifier</span> works in <span class = "ct-code-b-yellow">c</span> language.';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "VariableDeclararion" + sopLineCount :
				$('[contenteditable="false"]').attr('contenteditable', 'true');
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-tooltip').removeClass('hide');
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "aValueDeclaration" :
							text = 'Here we declare a variable <span class = "ct-code-b-yellow">aValue</span> of type '+
									'<span class = "ct-code-b-yellow">int</span>.<br> You can also change the value';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								caretAtEnd(document.getElementById('number' + sopLineCount));
								changeValue("#number" + sopLineCount);
								$('.introjs-nextbutton').show();
							});
						 break;
						case "bValueDeclaration" :
							text = 'Here we declare a variable <span class = "ct-code-b-yellow">bValue</span> of type '+
									'<span class = "ct-code-b-yellow">int</span>.<br> You can also change the value';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								caretAtEnd(document.getElementById('number' + sopLineCount));
								changeValue("#number" + sopLineCount);
								$('.introjs-nextbutton').show();
							});
						 break;
					}
				});
			break;
			
			case "numberDiv" + sopLineCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('[contenteditable="true"]').attr('contenteditable', 'false');
					$('.introjs-tooltip').removeClass('hide');
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "aValueStore" :
							text = 'Here the value <span class = "ct-code-b-yellow">'+ 
									$("#number" + sopLineCount).text()+'</span> is sored in a variable <span class = "ct-code-b-yellow">'+
									' aValue</span> and its occupies <span class = "ct-code-b-yellow">2 bytes</span> of memory with address '+
									' <span class = "ct-code-b-yellow">'+ $("#address" + sopLineCount).text() + '</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
								"onclick='aBoxAnimation()'>Next &#8594;</a>");
							});
						break;
						case "bValueStore" :
							text = 'Here the value <span class = "ct-code-b-yellow">'+ 
									$("#number" + sopLineCount).text()+'</span> is sored in a variable <span class = "ct-code-b-yellow">'+
									' bValue</span> and its occupies <span class = "ct-code-b-yellow">2 bytes</span> of memory with address '+
									' <span class = "ct-code-b-yellow">'+ $("#address" + sopLineCount).text() + '</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
								$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
								"onclick='aBoxAnimation()'>Next &#8594;</a>");
							});
						break;
					}
				});
			break;	
			
			case "sopLine" + sopLineCount :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printText" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf()</span> function is used to'+
									' <span class="ct-code-b-yellow">print</span> the <span class="ct-code-b-yellow">data</span> '+
									'or user defined <span class="ct-code-b-yellow">message</span> on <span class="ct-code-b-yellow">'+
									'console</span>.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();	
							});
						break;
						case "noSpace" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf()</span> function with'+
									' <span class="ct-code-b-yellow">%d</span> format specifier is used to display the value of an'+
									' <span class="ct-code-b-yellow">integer</span>.<br>'+
									'Note: <span class="ct-code-b-yellow">&bsol;n</span> is used for '+
									'cursor goes to next line.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
						case "withComma" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf()</span> function with'+
									' <span class="ct-code-b-yellow">,(comma)</span> and <span class="ct-code-b-yellow">'+
									'format specifier</span> is used to insert a '+
									' comma (<span class="ct-code-b-yellow">,</span>) between different values.<br>'+
									'Note: <span class="ct-code-b-yellow">&bsol;n</span> is used for '+
									'cursor goes to next line.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
						
						case "withSpace" :
							$('.introjs-tooltip').removeClass('hide');
							text = 'The <span class="ct-code-b-yellow">printf()</span> function with'+
									' <span class="ct-code-b-yellow">blank space</span> and <span class="ct-code-b-yellow">'+
									'format specifier</span> is used to insert a '+
									' <span class="ct-code-b-yellow">blank space</span> ( ) between different values.<br>'+
									'Note: <span class="ct-code-b-yellow">&bsol;n</span> is used for '+
									'cursor goes to next line.';
							typing('.introjs-tooltiptext', text, typingInterval, 'white', function(){
								$('.introjs-nextbutton').show();
							});
						break;
					}
				});
			break;
			case "outputDiv" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var animateStep = introcode._introItems[introcode._currentStep].animateStep;
					switch(animateStep) {
						case "printText" :
							$("#outputAValue0").text("print aValue and bValue ");
							$("#outputText").effect( "highlight",{color: '#ffff33'}, 500);
							$("#outputText").effect( "transfer", { to: $("#outputAValue0"), className: "ui-effects-transfer" }, 1000 , function(){
								$("#appendDiv" + sopLineCount).removeClass("visibility-hidden");
								setTimeout(function() {
									sopLineCount++;
									introcode.nextStep();
								},800);
							});
						break;
						
						case "noComma" :
							printDecimalValue("decimalValueOnly");
						break;
						
						case "withComma" :
							printDecimalValue("decimalValueAndComma");
						break;
						
						case "withSpace" :
							printDecimalValue("decimalValueAndSpace");
						break;
					}
				});
			break;
			case "restartBtn":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$("#printfDefinition").removeClass("z-index1000000");
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#restartBtn").removeClass('visibility-hidden');
				});
			break;
		}
	});
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
	changeValue();
	
	$('#restartBtn').click(function() {
		location.reload();
	});
	
	var x = Math.floor((Math.random() * 1024) + 2205);
	$("#address1").text(x);
	var y = Math.floor((Math.random() * 1054) + 5120);
	$("#address2").text(y);
}

var introcode;
var typingInterval = 10;
var tl = new TimelineLite();
var sopLineCount = 1;
var outputValueCount = 1;
var count = 0;

function inputBoxCheck() {
	$("#number" + sopLineCount).effect( "highlight",{color: 'yellow'});
	changeValue("#number" + sopLineCount , 10);
	caretAtEnd(document.getElementById('number' + sopLineCount));
	clickToFocus("#sopLine" + sopLineCount, "#number" + sopLineCount);
	$('.introjs-nextbutton').show();
}

function clickToFocus(id1, id2) {
	$(id1).click(function(){
		$(id2).focus();
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function toEffectWithTweenMax(selector1, selector2, selector3, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset({top: l1.top, left: l1.left});
	TweenMax.to($(selector2), 1, {top: 22, left: selector3, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function aBoxAnimation(){
	$('.introjs-tooltip').addClass('hide');
	$(".introjs-duplicate-nextbutton").remove();
	TweenMax.to('#numberDiv' + sopLineCount, 1, {opacity: 1, onComplete: function() {
		$('#number' + sopLineCount).addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
			$('#number' + sopLineCount).removeClass('circle-css');
			$("#addressValue" + sopLineCount).text($("#number" + sopLineCount).text());
			fromEffectWithTweenMax('#number' + sopLineCount, '#addressValue' + sopLineCount, function() {
				sopLineCount++;
				setTimeout(function() {
					introcode.nextStep();
				},500);
			});
		});
	}});
}

function printDecimalValue(text) {
	$(".introjs-duplicate-nextbutton").remove();
	$("#persentage" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function(){
		$("#persentage" + sopLineCount).removeClass("z-index1000000")
		$("#aValue" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function(){
			$("#aValue" + sopLineCount).removeClass("z-index1000000")
			$("#aValueAnimation").removeClass("visibility-hidden");  
	  		toEffectWithTweenMax("#aValue" + sopLineCount, "#aValueAnimation", 24, function(){
	  			$("#aValueAnimation").addClass("visibility-hidden"); 
	  			$('#addressValue1').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 1000, function() {
	  				$('#addressValue1').removeClass('circle-css z-index1000000');
	  					$("#outputAValue" + outputValueCount).text($("#addressValue1").text());
				  		fromEffectWithTweenMax("#addressValue1", "#outputAValue" + outputValueCount, function(){
				  			if (text == "decimalValueOnly") {
					  			printDecimalValue2();
				  			} else if (text == "decimalValueAndComma") {
				  				$("#comma" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
				  				$("#comma" + sopLineCount).effect( "transfer", { to: $("#comma"), className: "ui-effects-transfer" }, 1000 , function(){
				  					$("#comma").text(",");
				  					$("#comma" + sopLineCount).removeClass("z-index1000000");
						  			printDecimalValue2();
				  				});
				  			} else {
				  				$("#blankSpace" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
				  				$("#blankSpace" + sopLineCount).effect( "transfer", { to: $("#blankSpace"), className: "ui-effects-transfer" }, 1000 , function(){
				  					$("#blankSpace" + sopLineCount).removeClass("z-index1000000");
						  			printDecimalValue2();
				  				});
				  			}
					});
  				});
	  		});
	  	});
	});
}

function printDecimalValue2(text) {
	$(".introjs-duplicate-nextbutton").remove();
	$("#persentageD" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function(){
		$("#persentageD" + sopLineCount).removeClass("z-index1000000")
		$("#bValue" + sopLineCount).addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function(){
			$("#bValue" + sopLineCount).removeClass("z-index1000000")
			$("#bValueAnimation").removeClass("visibility-hidden");  
	  		toEffectWithTweenMax("#bValue" + sopLineCount, "#bValueAnimation", 24,function(){
	  			$("#bValueAnimation").addClass("visibility-hidden");
	  			$('#addressValue2').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 1000, function() {
	  				$('#addressValue2').removeClass('circle-css z-index1000000');
	  				$("#outputBValue" + outputValueCount).text($("#addressValue2").text());
				  	fromEffectWithTweenMax("#addressValue2", "#outputBValue" + outputValueCount, function(){
				  		outputValueCount++;
						 setTimeout(function(){
							sopLineCount++;
							introcode.nextStep();
						},800);
					 });
  				});
	  		});
	  	});
	});
}

//cursor position at end
function caretAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}
}

//typing function
function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : typingInterval,
		"cursor_color" : cursorColor
	}, function() {
		$(typingId).removeClass("typingCursor");
		typingCallbackFunction();
		$('.introjs-tooltip').show();
	});
} 

//Allow only numbers,Condition to  enter text, change the array values, Display error message & Fill all the array elements
function changeValue(id1) {
	$(id1).on("keydown", function(e) {
		$(".keyValue").text($(id1).text());
		$('.error-text').remove();
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39]) !== -1) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max-1) {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>String length to 3.</span>");
				e.preventDefault();
			} 
	});
	$(id1).on("keyup", function(e) {
		$(".keyValue").text($(id1).text());
		if ($(this).text() == "") {
			$('.introjs-tooltiptext').append("<span class='ct-code-b-red error-text'><br/>Please enter number.</span>");
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introcode.refresh();
		if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
	});
} 