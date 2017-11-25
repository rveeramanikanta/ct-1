var readPrintStringUsingGetsPutsReady = function() {
	$("#restartBtn").click(function() {
		$("#inputChar").val('');
		$("#hiddentotalEnterChar").val();
		location.reload();
	});
	intro = introJs();
	$("nextButton").click(function() {
		$(this).remove();
		intro.nextStep();
	});
	intro.setOptions ({
		showBullets : false,
		exitOnOverlayClick : false,
		keyboardNavigation : false,
		escOnExit : false,
		showStepNumbers : false,
		steps : [{
			element : "#preBody",
			intro: '',
		},{
			element : "#declaration",
			intro: '',
		},{
			element : "#main",
			intro: '',
		},{
			element : "#printf1",	
			intro: '',
		}, {
			element: '#outputBox',
			intro: '',
			animateStep: 'printHello',
			tooltipClass:'hide'
		}, {
			element : "#printf2",	
			intro: '',
		}, {
			element: '#outputBox',
			intro: '',
			animateStep: 'printC',
			tooltipClass:'hide'
		}, {
			element : "#printf3",	
			intro: '',
		}, {
			element: '#outputBox',
			intro: '',
			animateStep: 'printBye',
			tooltipClass:'hide'
		},{
			element : "#close",
			intro: '',
		}, {
			element : "#restartBtn",
			intro : "",
			position : "left"
		
		}]
	});
	intro.onafterchange(function(targetElement) {
		intro.refresh();
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 0 && intro._currentStep != 1) {
				$('.introjs-prevbutton').show();
			} 
			$('.introjs-nextbutton').show();
			return;
		}
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		var elementId = targetElement.id;
		switch(elementId) {
		case "preBody" :
				$("#preBody").removeClass("opacity00");
				typing('.introjs-tooltiptext',"Let us learn <y>sample" +
						" of printf program</y>.", function() {
					$('.introjs-nextbutton').show();
				});
			break;
		case 'declaration':
			typing('.introjs-tooltiptext',"It is a <y>preprocessor directive</y> which includes the header" +
					" file <y>stdio.h</y> in our program.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
			break;
		case 'main':
			typing('.introjs-tooltiptext',"This is the <y>main()</y> method where the program execution starts.", function() {
				$('.introjs-nextbutton, .introjs-prevbutton').show();
			});
		break;
		case 'printf1':
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"The statement <y>printf('Hello World!\n')</y>; prints <y>Hello World!</y> and a" +
						" new-line <y>('\n')</y> character after that.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'printf2':
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"This statement prints <y>I am learning C programming</y> " +
						"and a new-line <y>('\n')</y> character after that.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'printf3':
			$('.introjs-helperLayer').one('transitionend',function() {
				$('.introjs-tooltip').removeClass('hide');
				typing('.introjs-tooltiptext',"This statement prints <y>Bye!</y>", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case 'close':
			$('.introjs-helperLayer').one('transitionend',function() {
				typing('.introjs-tooltiptext',"This is the end of the <y>main()</y> function where " +
						"the program execution ends.", function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
			break;
		case 'outputBox':
			var animateStep = intro._introItems[intro._currentStep].animateStep;
			switch(animateStep) {
				case 'printHello':
					$('.introjs-helperLayer').one('transitionend',function() {
						if(intro._direction == 'forward') {
							$('#outputBox').removeClass("opacity00");
							transferEffect("#hello", "#printlnId1", function(){
								$("#printlnId1").removeClass('opacity00').addClass('animated zoomIn').one('animationend', function(){
								setTimeout(function() {
									$("#printlnId1").removeClass('animated zoomIn');
									intro.nextStep();
								},500);
								});
							});
						} else {
							$('#outputBox').addClass("opacity00");
							$("#printlnId1").addClass('opacity00');
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
				break;
				case 'printC':
					$('.introjs-helperLayer').one('transitionend',function() {
						if(intro._direction == 'forward') {
							transferEffect("#learning", "#printlnId2", function() {
								$("#printlnId2").removeClass("opacity00").addClass('animated zoomIn').one('animationend', function(){
									setTimeout(function() {
										$("#printlnId2").removeClass('animated zoomIn');
										intro.nextStep();
									},500);
								});
							});
						} else {
							$("#printlnId2").addClass("opacity00");
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
				break;
				case 'printBye':
					$('.introjs-helperLayer').one('transitionend',function() {
						if(intro._direction == 'forward') {
							transferEffect("#bye", "#printlnId3", function() {
								$("#printlnId3").removeClass("opacity00").addClass('animated zoomIn').one('animationend', function(){
									setTimeout(function() {
										$("#printlnId3").removeClass('animated zoomIn');
										intro.nextStep();
									},500);
								});
							});
						} else {
							$("#printlnId3").addClass("opacity00");
							setTimeout(function() {
								intro.previousStep();
							},500);
						}
					});
				break;
			}
			break;
		case "restartBtn" :
			intro.refresh();
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer ').one('transitionend', function() {
				$('#countBox').removeClass('z-index1000000');
				$("#restartBtn").removeClass("opacity00");
				typing(".introjs-tooltiptext", "Click to restart.", 10, "",function() {
					$('#restart').click(function() {
						location.reload();
					});
				});
			});
		break;
		}
	});
	intro.start();
	
}

function typing(typingId, typingContent, typingCallbackFunction) {
	var typingSpeed = 1;
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingSpeed,
		"cursor_color": 'white'
	}, function() {
		$(typingId).removeClass('typingCursor');
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		typingCallbackFunction();
	})
}
function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}
function transferEffect(selector1, selector2, callBackFunction) {
	$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 200);
	$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 1300 , function() {
	$(selector2).removeClass("opacity00");
	$(selector1).removeClass("z-index1000000")
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}