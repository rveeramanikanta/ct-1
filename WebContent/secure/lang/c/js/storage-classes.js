var introjs;
var typingInterval = 5;

var storageClassesReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
			introjs._introItems[introjs._currentStep].tooltipClass = "";
			introjs._introItems[introjs._currentStep].isCompleted = "true";
		}
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element : "#autoBox",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#autoPreCode",
			tooltipClass : "hide",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#registerBox",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#registerPreCode",
			tooltipClass : "hide",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#staticBox",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#staticPreCode",
			tooltipClass : "hide",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#externBox",
			intro : "",
			position : "left",
			isCompleted : "false"
		}, {
			element : "#externPreCode",
			tooltipClass : "hide",
			intro : "",
			position : "left",
			isCompleted : "false"
		}, {
			element : "#restartBtn",
			intro : "Click to Restart",
			position : "right"
		} ]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "animationDiv":
			if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
				$('#textDiv').css({height: $('#textDiv').outerHeight()});
				var typingContent = $('#textDiv').html();
				typing('#textDiv', typingContent, typingInterval, '#333', function() {
					$('#storageClassesBox').fadeTo(1300, 1, function() {
						TweenMax.to($('.svg-line1'), 1, {attr: {y2: '48%'}, onComplete: function() {
							TweenMax.to($('.svg-line2').eq(0), 1, {attr: {x2: '13.6%'}});
							TweenMax.to($('.svg-line2').eq(1), 1, {attr: {x2: '86.2%'}, onComplete: function() {
								$('.svg-arrow-line').show();
								TweenMax.to($('.svg-arrow-line'), 1, {attr: {y2: '72%'}, onComplete: function() {
									$('.storage-class').fadeTo(1300, 1, function() {
										$('.introjs-tooltip').removeClass('hide');
										var typingContent = 'The <span class="ct-code-b-yellow">Storage Classes</span> has the following' +
															' properties. They are' +
															'<ul><li><span class="ct-code-b-yellow">Scope:</span> The scope of a variable' +
															' determines which part of the program the variable is actually available for' +
															' use, i.e. active.</li>' +
															'<li><span class="ct-code-b-yellow">Life-time:</span> The lifetime refers to' +
															' the period during the execution of the program, a variable retains a given value.</li>' +
															'<li><span class="ct-code-b-yellow">Initial value:</span> The value ' +
															'initialized by default.</li>' +
															'<li><span class="ct-code-b-yellow">Storage:</span> The' +
															' memory allocated for the variable where its value is stored.</li>' +
															'<li><span class="ct-code-b-yellow">Keyword:</span> A keyword which specifies' +
															' the storage class(auto, register, extern and static).</li></ul>';
										typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
											$('.introjs-nextbutton').show();
										});
									});
								}});
							}});
						}});
					});
				});
			} else {
				$('.introjs-nextbutton').show();
			}
			break;
		case "autoBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'The <span class="ct-code-b-yellow">auto specifier</span> may only be used within functions and function' +
										' argument declarations with <span class="ct-code-b-yellow">auto</span> keyword.' +
										'<ul><li><span class="ct-code-b-yellow">Storage:</span> Main memory</li>' +
										'<li><span class="ct-code-b-yellow">Initial value:</span> Garbage value</li>' +
										'<li><span class="ct-code-b-yellow">Keyword:</span> auto</li>' +
										'<li><span class="ct-code-b-yellow">Scope:</span> Local to the block in which it is defined</li>' +
										'<li><span class="ct-code-b-yellow">Lifetime:</span> Till control remains within the block in' +
										' which it is defined</li></ul>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "autoPreCode":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					TweenMax.to($('#autoPreCode'), 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = '<ul><li>This is an example of <span class="ct-code-b-yellow">auto</span> storage class.</li>' +
											'<li>Here <span class="ct-code-b-yellow">a</span>, <span class="ct-code-b-yellow">b</span> are' +
											' <span class="ct-code-b-yellow">auto</span> variables and <span class="ct-code-b-yellow">auto</span>' +
											' keyword is never required.</li>' + 
											'<li>The <span class="ct-code-b-yellow">scope</span> and <span class="ct-code-b-yellow">lifetime</span>' +
											' of <span class="ct-code-b-yellow">a</span> is with in the <span class="ct-code-b-yellow">main()</span>' +
											' method and <span class="ct-code-b-yellow">b</span> is with in the' + 
											' <span class="ct-code-b-yellow">demo()</span> method.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-prevbutton, .introjs-nextbutton').show();
						});
					}});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "registerBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'The <span class="ct-code-b-yellow">register</span> variables may only be used within function declarations' +
										' with the <span class="ct-code-b-yellow">register</span> keyword.' +
										'<ul><li><span class="ct-code-b-yellow">Storage : </span>CPU Registers</li>' +
										'<li><span class="ct-code-b-yellow">Initial value : </span>Garbage value</li>' +
										'<li><span class="ct-code-b-yellow">Keyword : </span>register</li>' +
										'<li><span class="ct-code-b-yellow">Scope : </span>Local to the block in which the it is defined</li>' +
										'<li><span class="ct-code-b-yellow">Lifetime : </span>As long as the control remains within the block' +
										' in which it is defined</li></ul>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "registerPreCode":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					TweenMax.to($('#registerPreCode'), 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = '<ul><li>This is an example of <span class="ct-code-b-yellow">register</span> storage class.</li>' +
											'<li>Here <span class="ct-code-b-yellow">a</span> is <span class="ct-code-b-yellow">register</span>' +
											' variables and storaged in <span class="ct-code-b-yellow">CPU register</span>.</li>' + 
											'<li>The <span class="ct-code-b-yellow">scope</span> and <span class="ct-code-b-yellow">lifetime</span>' +
											' of <span class="ct-code-b-yellow">a</span> is with in <span class="ct-code-b-yellow">main()</span>' +
											' method.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-prevbutton, .introjs-nextbutton').show();
						});
					}});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "staticBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'The <span class="ct-code-b-yellow">static</span> variable is declared using the ' +
										'static</span> keyword, A static variable is initialized to their default' +
										' value based on the type. The scope of a static variable declared in the function is within the function,' +
										' if declared outside scope is throughout the program.<br/>' +
										'<ul><li><span class="ct-code-b-yellow">Storage : </span> Main memory</li>' +
										'<li><span class="ct-code-b-yellow">Initial value : </span> Zero</li>' +
										'<li><span class="ct-code-b-yellow">Keyword : </span> static</li>' +
										'<li><span class="ct-code-b-yellow">Scope : </span> Local to the block in which the it is defined</li>' +
										'<li><span class="ct-code-b-yellow">Lifetime : </span> Throughout the entire program</li></ul>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "staticPreCode":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					TweenMax.to($('#staticPreCode'), 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = '<ul><li>This is an example of <span class="ct-code-b-yellow">static</span> storage class.</li>'+
											'<li>Here, <span class="ct-code-b-yellow">a</span> is a <span class="ct-code-b-yellow">static</span>' +
											' variable declared outside the methods, so the <span class="ct-code-b-yellow">scope</span> and ' +
											'<span class="ct-code-b-yellow">lifetime</span> is throughout the program.</li>' +
											'<li>And <span class="ct-code-b-yellow">b</span> is a static variable ' +
											'declared inside the <span class="ct-code-b-yellow">main()</span> method, so the ' +
											'<span class="ct-code-b-yellow">scope</span> is with in the method and' +  
											'<span class="ct-code-b-yellow">lifetime</span> is throughout the program.</li>';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-prevbutton, .introjs-nextbutton').show();
						});
					}});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "externBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'The <span class="ct-code-b-yellow">extern</span> variable is declared within/outside the function,' +
										' using the keyword <span class="ct-code-b-yellow">extern</span> and is initialized to their default' +
										' value based on the type. Its scope and lifetime is throughout the program.' +
										'<ul><li><span class="ct-code-b-yellow">Storage : </span>Main memory</li>' +
										'<li><span class="ct-code-b-yellow">Initial value : </span> Zero</li>' +
										'<li><span class="ct-code-b-yellow">Keyword : </span> static</li>' +
										'<li><span class="ct-code-b-yellow">Scope : </span> Throughout the entire program</li>' +
										'<li><span class="ct-code-b-yellow">Lifetime : </span> Throughout the entire program</li></ul>';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-prevbutton, .introjs-nextbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "externPreCode":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					TweenMax.to($('#externPreCode'), 1, {opacity: 1, onComplete: function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = '<ul><li>This is an example of <span class="ct-code-b-yellow">extern</span> storage class.</li>' +
											'<li>Here <span class="ct-code-b-yellow">a</span> is an <span class="ct-code-b-yellow">extern</span>' +
											' variable declared before declaration of any method in the program.</li>' + 
											'<li>The <span class="ct-code-b-yellow">scope</span> and <span class="ct-code-b-yellow">lifetime</span>' +
											' of this variable is throughout the program. The <span class="ct-code-b-yellow">extern</span>' +
											' keyword is not required when we declare it outside the method.</li>' +
											'<li>And <span class="ct-code-b-yellow">b</span> is an <span class="ct-code-b-yellow">extern</span>' +
											' variable declared within the <span class="ct-code-b-yellow">main()</span> method.Using the extern'+
											' keyword for the variable <span class="ct-code-b-yellow">b</span> '
											'specifies that the b is declared somewhere in the program as a global variable.</li>' +
											'<li>The <span class="ct-code-b-yellow">scope</span> and ' +
											'<span class="ct-code-b-yellow">lifetime</span> of this variable is throughout the program.</li></ul>';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-prevbutton, .introjs-nextbutton').show();
						});
					}});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	introjs.start();
}