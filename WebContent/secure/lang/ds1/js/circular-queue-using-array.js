function circularQueueArrayReady() {
	lang = getURLParameter("lang");
	$("#enqueueText").on("keydown", function(e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
	});
	
	lang = getURLParameter("lang");
	lang = (lang == undefined) ? "c" : lang;
	initIntroJS();
}

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


function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		steps : [ {
					element: '#queueInit',
					intro: '',
					position: 'right'
				}, {
					element: '#btnsDiv',
					intro: '',
					position: 'left'
		}]
	});
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		$('.introjs-helperLayer').one('transitionend', function() {
			switch(elementId) {
				case 'btnsDiv':
					$('#enqueueText').effect('highlight', {color: 'yellow'}, 800).focus();
					typing('.introjs-tooltiptext', 'Choose any operation');
				break;
				case 'lastCall':
					setTimeout(function() {
						doPlayPause();
					}, 500);
				break;
				case 'queueMethods':
					text = '<y>enqueue</y> method.';
					typing('.introjs-tooltiptext', text, function() {
						$('.introjs-tooltiptext').append('<ul style="font-family: monospace"><li><span>int x</span></li></ul>');
						travel('#enqueueXDec', '.introjs-tooltiptext li:last span', function() {
							let enqueueValue = $('#enqueueText').val();
							$(".introjs-tooltiptext ul li span").append(" = <span>" + enqueueValue + "</span>");
							$("#enqueueXDec").css("background-color", "");
							//((rear == MAX - 1) && (front == 0)) || (rear + 1 == front);
							arrow('#enqueIfCond', '#enqueIfCond', function() {
								$('.introjs-tooltiptext ul').append('<li><span id="enqTotlIfCond"><span id="enqIfCond1">(<span id="enqIf1">'
												+ ' <span id="rear1">rear</span> == <span id="totlMaxVal"><span id="maxVal">MAX</span> - 1</span></span>'
												+ ' && <span id="enqIf2"><span id="frontVal">front</span> == 0</span>)</span> || '
												+ '<span id="enqIfCond2"><span id="rearPlusVal"><span id="rearVal">rear</span> + 1</span> == '
												+ ' <span id="rearFrontVal">front</span></span></span></li>');
								travel('#enqueIfCond', '#enqTotlIfCond', function() {
									flip('#maxVal', 10, function() {
										flip('#totlMaxVal', 9, function() {
											flip('#rear1', front, function() {
												enqueueIfCondition();
											});
										});
									});
								});
							});
						});
					});
				break;
			}
		});
	});
	introjs.start();
	text = '<ul><li>Let us declare an int array <y>queue</y> with maximum size <y>10</y>.</li>'
			+ ' <li>Let us declare two int variables <y>front</y> and <y>rear</y> and initialized with <y>-1</y>.</li></ul>';
	typing('.introjs-tooltiptext', text, function() {
		$('#animationDiv').removeClass('opacity00');
		$('.introjs-nextbutton').show();
	});
}

function enqueueIfCondition() {
	let cond1 = front == 9;
	conditionMessage('#enqIf1', cond1, true, function() {
		flip('#frontVal', front, function() {
			let cond2 = front == 0;
			conditionMessage('#enqIf2', cond2, true, function() {
				let cond3 = cond1 && cond2;
				conditionMessage('#enqIfCond1', cond3, true, function() {
					flip('#rearVal', rear, function() {
						flip('#rearPlusVal', (rear + 1), function() {
							flip('#rearFrontVal', front, function() {
								let cond4 = (rear + 1) == front;
								conditionMessage('#enqIfCond2', cond4, true, function() {
									let cond = cond3 || cond4;
									if (cond) {  
										text = 'Condition evaluates to <y>true</y>. Hence control enters into the <y>if-block</y>.';
									} else {
										text = 'Condition evaluates to <y>false</y>. Hence control enters into the <y>else-block</y>.';
									}
									$('.introjs-tooltiptext li:last').append('<div></div>');
								});
							});
						});
					});
				});
			});
		});
	});
}

function conditionMessage(id, val, flag, callBackFunction) {
	flip(id, val, function() {
		if (flag) {
			if (val) {
				$(id).addClass('ct-green');
			} else {
				$(id).addClass('ct-red');
			}
		}
		callBackFunction();
	});
}

function arrow(fromId, toId, callBackFunction) {
	$(".arrow").remove();
	$('body').append("<i class='fa fa-arrow-right arrow faa-passing animated' style='position: relative; z-index: 10000000;'></i>");
	var l = $(fromId).offset();
	$('.arrow').offset({'top': l.top, 'left': l.left - ($('.arrow').width() * 1.5)
	});
	var l1 = $(fromId).offset();
	var l2 = $(toId).offset();
	var topLength = parseInt($(".arrow").css("top")) + (l2.top - l1.top);
	var leftLength = parseInt($(".arrow").css("left")) + (l2.left - l1.left);
	var time = 0;
	if (fromId !== toId) {
		time = 1;
	}
	TweenMax.to(".arrow", time, { top : topLength, left : leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

