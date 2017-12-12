var iValue = $("#initialization_Value").text();
var conditionValue = parseInt($("#condition_Value").text());
var introjs;
var incrementTextTypingSpeed = 0;

var forLoopInCReady = function() {
	introJsGuide();
	$('.cup-bg').hide();
	$('.cup').hide();
	setInterval(function() {
		$('.output-console-body').scrollTop($('.output-console-body')[0].scrollHeight);
	}, 100);
	
	$("#initialization_Value, #condition_Value").keydown(function(e) { // conditions to enter text
		var max = $(this).attr("maxlength");
	
		if (e.keyCode === 110 || e.keyCode === 190) {
			e.preventDefault();
		}
	
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		
		if ($(this).text().length > max) {
			e.preventDefault();
		}
	});
	
	$(".initializeBtn").click(function() {
		$(".introjs-nextbutton").show().addClass("opacity00");
		iValue = parseInt($("#initialization_Value").text());
		if(!isNaN(iValue)) {
			$(this).addClass("hidden");
			$('introjs-nextbutton').show().addClass("opacity00");
			$('.cup-bg').fadeTo(600, 1, function() {
				$('.cup').slideDown(500, function() {
					var l1 = $('#initialization_Value').offset();
					var l2 = $('#cup_value').offset();
					var topLength = l2.top-l1.top;
					var leftLength = l2.left-l1.left;
					$('.initialization').append("<span id='inner_initialization_Value'></span>");
					$("#inner_initialization_Value").text($('#initialization_Value').text());
					$("#inner_initialization_Value").offset({ top: l1.top, left: l1.left});
					TweenMax.to($('#initialization_Value'), 1, {top:"+=" + topLength, left: "+=" + leftLength, onComplete: function() {
						$('#initialization_Value').css({'top': '', 'left': ''});
						$("#inner_initialization_Value").remove();
						$('#cup_value').text($('#initialization_Value').text());
						if($('#cup_value').text().length == 2) {
							$('#cup_value').css("left", "7px");
						} else {
							$('#cup_value').css("left", "9px");
						}
						introjs.nextStep();
						$('.introjs-nextbutton').addClass("hidden");
						
						if(introjs._currentStep == 2) {
							setTimeout(function() {
								charAtEnd(document.getElementById("condition_Value"));
							}, 1300);
							
							$('.introjs-nextbutton').addClass("hidden");
							$('.evaluateBtn').removeClass("hidden");
						}
					}});
				});
			});
			$("#initialization_Value").attr("contenteditable", false);
		} else {
			$('#initialization_Text').html("<br>Please initialize <b class='codeText'>i</b> to some value.");
			charAtEnd(document.getElementById("initialization_Value"));
		}
	});
	
	
	$(".introjs-nextbutton").click(function() {
		if(introjs._currentStep == 1) {
			setTimeout(function() {
				$('#initialization_Value').attr("contenteditable", "true");
				charAtEnd(document.getElementById("initialization_Value"));
			}, 1000);
			$(this).addClass("opacity00");
			$('.initializeBtn').removeClass('hidden');
		}
		if(introjs._currentStep == 2) {
			setTimeout(function() {
				charAtEnd(document.getElementById("condition_Value"));
			}, 1300);
			
			$(this).addClass("hidden");
			$('.evaluateBtn').removeClass("hidden");
		}
		if($(".body-Of-The-Loop").hasClass("introjs-showElement")) {
			if($(".doneBtn").text() == "Finish") {
				$("#output").append('<span id= op' + iValue + ' style="opacity : 0">i : ' + iValue + '</span><br>');
			}
		}
		if(introjs._currentStep == 4) {
			if(iValue != parseInt($("#initialization_Value").text())) {
				introjs._introItems[4].intro = "output";
			}
			setTimeout(function() {
				$('#op' + iValue).css({'opacity' : '1', 'font-weight' : 'bold'});
					setTimeout(function() {
						introjs.nextStep();
						if($('.increment').hasClass("introjs-showElement")) {
							$('.introjs-nextbutton').addClass("opacity00");
							$('.incrementBtn').removeClass("hidden");
							$('#op' + iValue).css({'color' : 'white', 'opacity' : '1', 'font-weight' : ''});
							iValue++;
						}
					}, 800);
					
			}, 1000);
		}
		if(introjs._currentStep == 6) {
			$('.introjs-nextbutton').addClass("hide");
			$('.doneBtn').addClass('opacity00').removeClass('hidden');
			setTimeout(function() {
				var t1 = $('.condition').offset();
				var t2 = $('#condition_Text_2').offset();
				var topLength = t1.top - t2.top;
				if(iValue < conditionValue) {
					$('.continueBtn').addClass('opacity00').removeClass('hidden');
					setTimeout(function() {
						$('#condition_Text_2').html("<b><div style='display: inline-block;' id='i'>i</div> < " + conditionValue +"</b>" );
						TweenMax.from('#condition_Text_2', 2, {top:"+=" + topLength, onComplete: function() {
							$('#condition_Text_2').css({'top': '', 'left': ''});
							setTimeout(function() {
								setTimeout(function() {
									$('#i').text(iValue);
								}, 500);
								$('#i').addClass('flip').on('animationend', function() {
									$('#i').removeClass(i);
									typing('conditionTyping2', 'evaluates to <b style=color:#00FF7F>true</b>.', ".continueBtn",".doneBtn");
								});	
							}, 500);
						} });
					}, 1500)
					$(".doneBtn").text("Finish");
				} else {
					setTimeout(function() {
						$('#condition_Text_2').html("<b><div style='display: inline-block' id='i'>i</div> < " + conditionValue +"</b>" );
						TweenMax.from('#condition_Text_2', 2, {top:"+=" + topLength, onComplete: function() {
							$('#condition_Text_2').css({'top': '', 'left': ''});
							setTimeout(function() {
								setTimeout(function() {
									$('#i').text(iValue);
								}, 500);
								$('#i').addClass('flip').on('animationend', function() {
									$('#i').removeClass(i);
									typing('conditionTyping2', 'evaluates to <b  style=color:red>false</b>.<br>Since the condition evaluates to <b style= color:red>false</b> the control will come out of the <span class="ct-code-b-yellow">for-loop</span>.', ".doneBtn");
								});
							}, 500);
						} });
					});
					$(".doneBtn").text("Done");
				}
			}, 500);
		}
		if($(".restart").hasClass("introjs-showElement")) {
			$('.cup-bg').css({'opacity': '0'});
			$(".introjs-tooltipbuttons").addClass("hidden");
		}
	});
	
	$(".incrementBtn").click(function() {
		$(this).addClass("hidden");
		typing('incrementText', 'Post-increment operator increments the value of <span class="ct-code-b-yellow">i</span> by <span class="ct-code-b-yellow">1</span><br>Now <b class="codeText"><span id="inner_travelled_i">i</span><span id="travelled_i" class="codeText">i</span> = <span id="updated_value" ></span></b>', '.introjs-nextbutton');
	});
	
	$('.doneBtn1').click(function() {
		$(this).addClass('hide');
		$('.restart').removeClass("opacity00");
		$('.introjs-tooltipbuttons').hide();
		for(var k = 1; k <= 5; k++) {
			introjs.nextStep();
		}
	});
	
	$(".evaluateBtn").click(function() {
		conditionValue = parseInt($("#condition_Value").text());
		if(!isNaN(conditionValue)) {
			$(this).addClass("hidden");
			$('.introjs-nextbutton').removeClass("hidden").addClass('opacity00');
			$("#condition_Value").attr("contenteditable", false);	
			$('#condition_Text').html("<b><div style='display: inline-block' id='i'>i</div> < " + conditionValue +"</b>" );
			var l1 = $('.condition').offset();
			var l2 = $('#condition_Text').offset();
			var topLength = l1.top - l2.top;
			if(iValue < conditionValue) {
				TweenMax.from('#condition_Text', 2, {top:"+=" + topLength, onComplete: function() {
					$('#condition_Text').css({'top': '', 'left': ''});
					setTimeout(function() {
						setTimeout(function() {
							$('#i').text(iValue);
						}, 500);
						$('#i').addClass('flip').on('animationend', function() {
							$('#i').removeClass(i);
							typing('conditionTyping', 'evaluates to <b style=color:yellow>true</b>.', '.introjs-nextbutton');
						});
					}, 500);
				} });
			} else {
				$('.doneBtn').removeClass("hidden").addClass('opacity00');
				TweenMax.from('#condition_Text', 2, {top:"+=" + topLength, onComplete: function() {
					$('#condition_Text').css({'top': '', 'left': ''});
					setTimeout(function() {
						setTimeout(function() {
							$('#i').text(iValue);
						}, 500);
						
						$('#i').addClass('flip').on('animationend', function() {
							$('#i').removeClass(i);
							$('.doneBtn1').removeClass('hidden').addClass('opacity00');
							typing('conditionTyping', 'evaluates to <b  style=color:red>false</b>.<br>Since the condition evaluates to <b style = color:red>false</b>, the control will come out of the <span class="ct-code-b-yellow">for-loop</span>.', '.doneBtn1');
						});
					}, 500);
				} });	
				$('.doneBtn').text("Done");
			}
		} else {
			$('#condition_Text').html("<span style='color: orange'>Please enter a number.</span>");
			charAtEnd(document.getElementById("condition_Text"));
		}
	});
	
	$(".doneBtn").click(function() {
		$('.restart').removeClass("opacity00");
		for(var i = iValue; i < conditionValue; i++) {
			$("#output").append("i : " + i + "<br>");
			if($('#cup_value').text().length == 2) {
				$('#cup_value').css("left", "6px");
			}
			$("#cup_value").text(i + 1);
		}
		
		for(var i = introjs._currentStep; i < introjs._introItems.length; i++) {
			$('.introjs-nextbutton').click();
		}
	});
	
	$(".continueBtn").click(function() {
		$(this).addClass('hidden');
		$('.doneBtn').addClass('hidden');
		
		introjs.previousStep();
		introjs.previousStep();
		introjs.previousStep();
		
		if($(".doneBtn").text() == "Finish") {
			$("#output").append('<span id= op' + iValue + ' style="opacity : 0">i : ' + iValue + '</span><br>');
		}
	});
	
	$(".restart").click(function() {
		location.reload();
	});
}

function charAtEnd(element) {
	element.focus();
	if (typeof window.getSelection != "undefined"&& typeof document.createRange != "undefined") {
	    var range = document.createRange();
	    range.selectNodeContents(element);
	    range.collapse(false);
	    var sel = window.getSelection();
	    sel.removeAllRanges();
	    sel.addRange(range);
	}    	   
}
	
function typing(id, content, nextAction1, nextAction2) {
	var typingSpeed = 1;
	if (id === 'incrementText') {
		if (incrementTextTypingSpeed == 0) {
			typingSpeed = 1;
			incrementTextTypingSpeed = 1;
		} else {
			typingSpeed = 1;
		}
	}
	$('#' + id).typewriting( content , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$('#' + id).removeClass('typingCursor');
		if($('.increment').hasClass('introjs-showElement')) {
			$(nextAction1).hide();
			var l1 = $('#travelled_i').offset();
			var l2 = $('#cup_i').offset();
			var topLength = l2.top-l1.top;
			var leftLength = l2.left-l1.left;
			
			TweenMax.to('#travelled_i', 2, {top:"+=" + topLength, left: "+=" + leftLength, onComplete: function() {
				$('#travelled_i').css({'top': '', 'left': ''});
				$('#inner_travelled_i').remove();
				$('#cup_value').addClass("pulse");
				setTimeout(function() {
					$('#cup_value').removeClass('pulse');
					setTimeout(function() {
						$('#cup_value').text(iValue);
						if($('#cup_value').text().length == 2) {
							$('#cup_value').css("left", "6px");
						}
					}, 500);
					
					$('#cup_value').addClass("flip");
					setTimeout(function() {
						$('#cup_value').removeClass("flip");
						$('#updated_value').text($('#cup_value').text());
						var l1 = $('#updated_value').offset();
						var l2 = $('#cup_value').offset();
						var topLength = l2.top-l1.top;
						var leftLength = l2.left-l1.left;
						
						$('#updated_value').offset({'top':l2.top, 'left':l2.left});
						$('#updated_value').animate({'top': 0, 'left' : 0}, 2000, function() {
							$(nextAction1).show();
						});
					}, 1000);
						
				}, 1000);
			}});
		}
		$(nextAction1).removeClass("opacity00");
		$(nextAction2).removeClass("opacity00");
	}); 
}
	
function introJsGuide() {
	introjs = introJs();
	introjs.setOptions({
		steps : [{
			element : '#forloop',
			intro : "<span>Above code demonstrates the working of a <span class = ct-code-b-yellow>for-loop</span>.</span>", 
			position : 'bottom'
		}, {
			element : '.initialization',
			intro : "<span>This is the <span class = ct-code-b-yellow>initialization</span> section.<br>Here, the local variable <span class = 'ct-code-b-yellow codeText'>i</span> is initialized to <b class='codeText'>0</b>.<br> You can also change the value <b class='codeText'>0</b> to any other number.</span><span id='initialization_Text'></span>",
			position : 'bottom',
		}, {
			element : '.condition',
			intro : "<span>This is the <span class = ct-code-b-yellow>condition</span> part.<br>If the condition evaluates to <span class = ct-code-b-yellow>true</span>, control enters into the <span class='ct-code-b-yellow'>for-loop</span> body.</span><br><br><span><b class='ct-code-b-yellow'>for loop</b> is an entry controlled loop where the condition executes first.<br><span id='condition_Text'></span><br><span id='conditionTyping'></span>",
			position : 'bottom'
		}, {
			element : '.body-Of-The-Loop',
			intro : '<span>Above statement prints the value of <span class = "ct-code-b-yellow codeText">i</span>.</span>',
			position : 'bottom'
		}, {
			element : '.outputDiv',
			intro : "output",
			position : 'left',
			tooltipClass: 'hide'
		}, {
			element : '.increment',
			intro : "<span>After executing the statement in the <span class='ct-code-b-yellow'>for-loop</span> body, the control is transferred to the <span class = ct-code-b-yellow>update</span> section.</span><br><span id='incrementText'></span>",
			position : 'right'
		}, {
			element : '.condition',
			intro : "<span>After <span class = ct-code-b-yellow>update</span>, the control comes back to the <b>condition</b> section.</span><br><span id='condition_Text_2'></span><br><span id='conditionTyping2'></span>",
			position : 'bottom'
		},{
			element : '.restart',
			intro:'Click to restart.',
			tooltipClass: "introjs-tooltip-min-width-custom",
			position :'right'
        }]
	});

	introjs.setOption('tooltipPosition', 'bottom');
	introjs.setOption('positionPrecedence', [ 'left', 'right', 'bottom', 'top' ])
	introjs.setOption('showStepNumbers', false);
	introjs.setOption('exitOnOverlayClick', false);
	introjs.setOption('exitOnEsc', false);
	introjs.setOption('keyboardNavigation', false);
	introjs.start();
	$(".introjs-nextbutton").show();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	$(".introjs-tooltipbuttons").append("<a class='introjs-button initializeBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button evaluateBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button doneBtn hidden'>Finish</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button incrementBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button continueBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button updateBtn hidden'>Next &#8594;</a>");
	$(".introjs-tooltipbuttons").append("<a class='introjs-button doneBtn1 hidden'>Done</a>");
}