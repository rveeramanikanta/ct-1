
var introcode;
var typingInterval = 10;
var tl = new TimelineLite();
var spanCount = 1;
var number;
var remainder;
var sum = 0;
var countNumber = 1;

	function introGuide() {
		introcode = introJs();
		introcode.setOptions({
			showStepNumbers : false,
			exitOnOverlayClick : false,
			showBullets : false,
			exitOnEsc : false,
			keyboardNavigation : false,
				steps : [{
					element :'#armstrongDefinition',
					intro :'',
					tooltipClass : "hide"
				},{
					element :'#algorithmDiv',
					intro :'',
					tooltipClass : "hide",
					position: "right"
				},{
					element :'#algorithmStepsDiv',
					intro :'',
					tooltipClass : "hide",
					position: "top"
				},{
					element: "#restartBtn",
					intro : "Click to restart.",
					position: "right",
					tooltipClass: "introjs-tooltip-min-width-custom",
				}]
	});
	introcode.onafterchange(function(targetElement){
		var elementId = targetElement.id;
		switch (elementId) {
			case "armstrongDefinition" :
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				TweenMax.to('#text1', 1, {opacity: 1, onComplete: function() {
					TweenMax.to('#text2', 1, {opacity: 1, onComplete: function() {
							$('.introjs-duplicate-nextbutton').removeClass('opacity00').addClass("animated zoomIn").one('animationend', function() {
								$('.introjs-duplicate-nextbutton').click(function() {
									$(".introjs-duplicate-nextbutton").remove();
									introcode.nextStep();
								});
							});
					}});
				}});
			break;
			case "notArmstrongExample" :
				$("#armstrongDefinition").addClass("z-index1000000");
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#notArmstrongExample").addClass("box-border");
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us see how the <span class = "ct-code-b-yellow">armstrong strong</span> number'+
							' works with a given number.<br><span id = "changeValueSpan"></span>';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=notArmStrongNumber()>Next &#8594;</a>");
					});
				});
			break;
			
			case "algorithmDiv":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#algorithmDiv").removeClass("opacity00");
					$("#armstrongNumber").attr({contenteditable: 'false'});
					text = $("#enterArmstrongNumber").removeClass("opacity00").html();
					typing('#enterArmstrongNumber', text, typingInterval, 'white', function() {
						$('.introjs-tooltip').removeClass('hide');
						text = 'Here, we are declaring and initializing the integer variables '+
								'<span class="ct-code-b-yellow">number</span>, '+
								'<span class="ct-code-b-yellow">remainder</span>, '+
								'<span class="ct-code-b-yellow">copy_of_numbers</span> and '+
								'<span class="ct-code-b-yellow">sum</span> <br/><br/>'+
						 		'You can also the change value.<br/><span id = "storeValieIntemp"></span>';
						typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
							$("#armstrongNumber").attr({contenteditable: 'true'});
							charAtEnd('armstrongNumber');
							$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
							"onclick=valueStoredIntemp()>Next &#8594;</a>");
						});
					});
				});
			break;
			
			case "algorithmStepsDiv" :
				$("#whileLoop1").addClass("z-index1000000");
				text = $("#algorithmStepsDiv").removeClass("opacity00").html();
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us check the given number <span class="ct-code-b-yellow">'+ $("#number").text() +'</span>  is '+
							'<span class="ct-code-b-yellow">Armstrong</span> number or not.<br>'+
							'<span id = "trueText"></span>';
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=armstrongNumberAnimation(1)>Next &#8594;</a>");
					});
				});
			break;
			
			case "restartBtn":
				$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function () {
					$("#whileLoop1, #armstrongDefinition").removeClass("z-index1000000");
					$("#restartBtn").removeClass('visibility-hidden');
					$('#restartBtn').click(function() {
						location.reload();
					});
				});
			break;
		}
	});
	introcode.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide(); 
}
	
	
	function notArmStrongNumber() {
		$(".introjs-duplicate-nextbutton").remove();
		$('.introjs-tooltip').addClass('hide');
		zoomInEffect("#number"+spanCount);
		zoomInEffect(".arrow"+spanCount, function() {
			$('.introjs-tooltip').removeClass('hide');
			text = 'Let us check whether the given number is an '+
					'<span class="ct-code-b-yellow">Armstrong</span> number or not.';
			typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
				$('#sumOfCubes'+spanCount).before("<a class='introjs-button introjs-duplicate-nextbutton' " +
				"onclick=individualNumber()>Next &#8594;</a>");
			})
		});
	}
	
	function individualNumber() {
		$(".introjs-duplicate-nextbutton").remove();
		$('.introjs-tooltip').addClass('hide');
		highlightAndFromAnimation("#number3"+spanCount, "#armstrongNumber1"+spanCount, function() {
			highlightAndFromAnimation("#number2"+spanCount, "#armstrongNumber2"+spanCount, function() {
				highlightAndFromAnimation("#number1"+spanCount, "#armstrongNumber3"+spanCount, function() {
					zoomInEffect(".cub1"+spanCount, function() {
						$(".cub1"+spanCount).effect("highlight", {color: '#003399'}, 500, function () {
							zoomInEffect(".cub2"+spanCount, function() {
								$(".cub2"+spanCount).effect("highlight", {color: '#003399'}, 500, function () {
									zoomInEffect(".cub3"+spanCount, function() {
										$(".cub3"+spanCount).effect("highlight", {color: '#003399'}, 500, function () {
											zoomInEffect(".plus"+spanCount);
											$(".plus"+spanCount).effect("highlight", {color: '#003399'}, 500, function () {
												$(".introjs-duplicate-nextbutton").remove();
												$('#sumOfCubes'+spanCount).after("<a class='introjs-button introjs-duplicate-nextbutton' " +
													"onclick=sumOfNumbers()>Next &#8594;</a>");
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
	
	function sumOfNumbers() {
		$(".introjs-duplicate-nextbutton").remove();
		zoomInEffect(".equal1"+spanCount, function() {
			highlightAndFromAnimation("#armstrongNumber1"+spanCount, "#cubeValue1"+spanCount, function() {
				highlightAndFromAnimation("#armstrongNumber2"+spanCount, "#cubeValue2"+spanCount, function() {
					highlightAndFromAnimation("#armstrongNumber3"+spanCount, "#cubeValue3"+spanCount, function() {
						zoomInEffect(".animationPlus"+spanCount);
						$(".animationPlus"+spanCount).effect("highlight", {color: '#003399'}, 500, function () {
							$(".introjs-duplicate-nextbutton").remove();
							$('.equal2'+spanCount).before("<a class='introjs-button introjs-duplicate-nextbutton' " +
							"onclick=armstrongNumberOrNot()>Next &#8594;</a>");
						});
					});
				});
			});
		});
	}
	
	function armstrongNumberOrNot() {
		$(".introjs-duplicate-nextbutton").remove();
		zoomInEffect(".equal2"+spanCount, function() {
			highlightAndFromAnimation("#valuAnimation"+spanCount, "#finalValue"+spanCount, function() {
				if (spanCount == 1) {
					$("#number"+ spanCount+", #finalValue"+spanCount).css({"color": "red"});
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">125 == 134</span> condition evaluated to '+
							'<span class="ct-code-b-yellow">false</span>.';	
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {		
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=printArmstrongNumber()>Next &#8594;</a>");
					});
				} else {
					$("#number"+ spanCount+", #finalValue"+spanCount).css({"color": "green"});
					$('.introjs-tooltip').removeClass('hide');
					text = '<span class="ct-code-b-yellow">153 == 153</span> condition evaluated to '+
							'<span class="ct-code-b-yellow">true</span>.';	
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {		
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=printArmstrongNumber()>Next &#8594;</a>");
					});
				}
			});
		});
	}
	
	function printArmstrongNumber() {
		$(".introjs-duplicate-nextbutton").remove();
		$('.introjs-tooltip').addClass('hide');
		highlightAndFromAnimation("#number"+spanCount, "#armstrong"+spanCount, function() {
			text = $(".armstrongText"+spanCount).removeClass("opacity00").text();
			typing('.armstrongText'+spanCount, text, typingInterval, 'white', function() {
				if (spanCount == 1) {
					$('.introjs-tooltip').removeClass('hide');
					text = 'Let us take another example.' ;
					typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
						spanCount++;
						$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
						"onclick=notArmStrongNumber()>Next &#8594;</a>");
					});
				} else {
					$('.armstrongText'+spanCount).append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
					introcode.refresh();
					$(".introjs-duplicate-nextbutton").click(function() {
						$(".introjs-duplicate-nextbutton").remove();
						introcode.nextStep();
					});
				}
			});
		});
	}
	
	function highlightAndFromAnimation(selector1, selector2, callBackFunction) {
		$(selector1).effect("highlight", {color: '#003399'}, 500, function () {
			$(selector2).removeClass("opacity00");
			fromEffectWithTweenMax(selector1,selector2, function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			});
		});
	}
	
	function algoritmStepsDivs() {
		for (var i = 1; i <= 5; i++) {
			if ( i == 4) {
				$("#whileLoopStep"+ i).append('<br>'+
			    '<span class = "opacity00" id = "whileLoopSpan'+ i +'"><span class = "position" id = "whileNumber'+ i +'">number</span> != 0 &emsp;&emsp;</span>'+
			    '<span class = "opacity00" id = "trueOrFalse'+ i +'">true</span>');
			} else if (i == 5) {
				$("#whileLoopStep"+ i).append('<br>'+
			    '<span class = "opacity00" id = "whileLoopSpan'+ i +'"><span class = "position" id = "sumNumber'+ i +'">sum</span> == '+
			    '<span class = "position" id = "tempNumber">copy_of_numbers</span> &emsp;&emsp;</span>'+
			    '<span class = "opacity00" id = "trueOrFalse'+ i +'">true</span>'+
			    '<br>');
			  
			} else {
			    $("#whileLoopStep"+ i).append('<br>'+
			    '<span class = "opacity00" id = "whileLoopSpan'+ i +'"><span class = "position" id = "whileNumber'+ i +
			    '">number</span> != 0 &emsp;&emsp;'+
			    '<span class = "opacity00" id = "trueOrFalse'+ i +'">true</span></span>'+
			    '<br>'+
			    '<span class = "opacity00" id = "remainderSpan'+ i +'">remainder = <span class = "position" id = "moduloNumberSpan'+ i +'">'+
			    '<span class = "position" id = "moduloNumber'+ i +'">number</span> % 10</span></span>'+
			    '<br>'+
			    '<span class = "opacity00" id = "numberSpan'+ i +'">number = <span class = "position" id = "divideNumberSpan'+ i +'">'+
			    '<span class = "position" id = "divideNumber'+ i +'">number</span> / 10</span></span>'+
			    '<br>'+
			    '<span class = "opacity00" id = "sumSpam'+ i +'">sum = <span class = "position" id = "calculateSumSpan'+ i +'">'+
			    '<span class = "position" id = "sumValue'+ i +'">sum</span> + '+
			    '<span class = "position" id = "calculateRemainderValue'+ i +'">( <span class = "position remainder'+ i +
			    '">remainder</span> * '+
			    '<span class = "position remainder'+ i +'">remainder</span> * <span class = "position remainder'+ i +
			    '">remainder</span> '+
			    ')</span></span></span>');
			}
		}
	}
	
	function valueStoredIntemp() {
		number =  $("#armstrongNumber").text();
		$("#armstrongNumber").attr({contenteditable: 'false'});
		$(".introjs-duplicate-nextbutton").remove();
		$('.introjs-tooltip').removeClass('hide');
		text = 'Initially The value <span class="ct-code-b-yellow">'+ $("#armstrongNumber").text() +
				'</span> is stored in the variable <span class="ct-code-b-yellow value">copy_of_number</span>.<br/><br/>'+
				'<span id="algorithm"></span>';
		typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
			zoomInEffect("#StoreValueInToTemp", function() {
				$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
					"onclick=rotationAndAlgorithmAnimation()>Next &#8594;</a>");
			});
		});
	}
	
	function rotationAndAlgorithmAnimation() {
		$(".introjs-duplicate-nextbutton").remove();
		$("#number").effect("highlight", {color: '#4d4dff'}, 500, function() {
			flipEffectWithTweenMax("#number", $("#armstrongNumber").text(), function() {
				text ='Let us write the code for determining if the given number is '+
						'an <span class="ct-code-b-yellow value">armstrong</span> '+
						' number or not, for that we need to first extracting each individual digit'+
						' in it and then calculate the <span class="ct-code-b-yellow">cube</span>'+
						' of the each <span class="ct-code-b-yellow">individual</span> digit '+
						' and start accumulating it into the sum.<br/><br/>'+
						' Finally, after calculating summation of all the cubs we will compare the '+
						'sum with <span class="ct-code-b-yellow">copy_of_number</span> that we have already stored.'+
						'<br/><br/><span id="algorithm"></span>';
				typing('#algorithm', text, typingInterval, 'white', function() {
					$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton'>Next &#8594;</a>");
					$('.introjs-duplicate-nextbutton').click(function() {
						$('.introjs-duplicate-nextbutton').remove();
						zoomInEffect("#whileLoop1", function() {
							$('.introjs-nextbutton').show();
						});
					});
				});
			});
		});
	}
	
	function armstrongNumberAnimation(count) {
		$('.introjs-tooltip').addClass('hide');
		$(".introjs-duplicate-nextbutton").remove();	
		text = $("#step"+count).removeClass("opacity00").html();
		typing('#step'+count, text, typingInterval, 'white', function() {
			setTimeout(function() {
				$("#condition").effect("highlight", {color: '#003399'}, 500, function () {
					$("#whileLoopSpan"+count).removeClass("opacity00");
					fromEffectWithTweenMax("#condition","#whileLoopSpan"+count, function() {
						$("#whileNumber"+count).effect("highlight", {color: '#4d4dff'}, 500, function() {
							flipEffectWithTweenMax("#whileNumber"+count, parseInt(number), function() {
								if (parseInt(number) != 0) {
									text = $("#trueOrFalse"+count).addClass("ct-code-b-blue").text("true").removeClass("opacity00").html();
									typing("#trueOrFalse"+count, text, typingInterval, 'white', function() {
										remainderAnimation(count)
									});
								} else {
									$("#trueOrFalse"+count).addClass("ct-code-b-red").text("false");
									zoomInEffect("#trueOrFalse"+count, function() {
										$('.introjs-tooltip').removeClass('hide');
										text = 'Since, the condition evaluates to <span class="ct-code-b-yellow">false</span>.'+
												'Now check the if condition.';
										typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
											$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
											"onclick=ifCondition("+ count +");>Next &#8594;</a>");
										});
									});
								}
							});
						});
					});
				});
			},300);
  		});
	}
	
	function remainderAnimation(count) {
		$(".introjs-duplicate-nextbutton").remove();
		$('.introjs-tooltip').addClass('hide');
		$("#remainderDiv").effect("highlight", {color: '#003399'}, 500, function () {
			$("#remainderSpan"+count).removeClass("opacity00");
			fromEffectWithTweenMax("#remainderDiv","#remainderSpan"+count, function() {
				$("#moduloNumber"+count).effect("highlight", {color: '#4d4dff'}, 500, function() {
					flipEffectWithTweenMax("#moduloNumber"+count, parseInt(number), function() {
						setTimeout(function() {
							remainder = parseInt(number) % 10;
							$("#moduloNumberSpan"+count).effect("highlight", {color: '#4d4dff'}, 500, function() {
								flipEffectWithTweenMax("#moduloNumberSpan"+count, parseInt(remainder), function() {
									numberAnimation(count);
								});
							});
						},300);
					});
				});
			});
		});
	}
	
	function numberAnimation(count) {
		$(".introjs-duplicate-nextbutton").remove();
		$("#numberDiv").effect("highlight", {color: '#003399'}, 500, function () {
			$("#numberSpan"+count).removeClass("opacity00");
			fromEffectWithTweenMax("#numberDiv","#numberSpan"+count, function() {
				$("#divideNumber"+count).effect("highlight", {color: '#4d4dff'}, 500, function() {
					flipEffectWithTweenMax("#divideNumber"+count, parseInt(number), function() {
						setTimeout(function() {
							number = parseInt(number) / 10;
								$("#divideNumberSpan"+count).effect("highlight", {color: '#4d4dff'}, 500, function() {
								flipEffectWithTweenMax("#divideNumberSpan"+count, parseInt(number), function() {
									sumAnimation(count);
								});
							});
						},300);
					});
				});
			});
		});
	}
	
	function sumAnimation(count) {
		$(".introjs-duplicate-nextbutton").remove();
		$("#sumDiv").effect("highlight", {color: '#003399'}, 500, function () {
			$("#sumSpam"+count).removeClass("opacity00");
			fromEffectWithTweenMax("#sumDiv","#sumSpam"+count, function() {
				flipEffectWithTweenMax(".remainder"+count, parseInt(remainder), function() {
					var multiplyValue = (parseInt(remainder)*parseInt(remainder)* parseInt(remainder));
					$("#calculateRemainderValue"+count).effect("highlight", {color: '#4d4dff'}, 500, function() {
						flipEffectWithTweenMax("#calculateRemainderValue"+count, multiplyValue, function() {
							$("#sumValue"+count).effect("highlight", {color: '#4d4dff'}, 500, function() {
								flipEffectWithTweenMax("#sumValue"+count, sum, function() {
									sum = sum + parseInt($("#calculateRemainderValue"+count).text());
									$("#calculateSumSpan"+count).effect("highlight", {color: '#4d4dff'}, 500, function() {
										flipEffectWithTweenMax("#calculateSumSpan"+count, sum, function() {
											armstrongNumberAnimation(++count);
										}); 
									});
								});
							});
						});
					});
				});
			});
		});
	}
	
	function ifCondition(count) {
		$('.introjs-tooltip').addClass('hide');
		var temp = parseInt($("#number").text());
		$(".introjs-duplicate-nextbutton").remove();
		$("#ifConditionDiv").effect("highlight", {color: '#003399'}, 500, function () {
			$("#whileLoopSpan5").removeClass("opacity00");
			fromEffectWithTweenMax("#ifConditionDiv","#whileLoopSpan5", function() {
				$("#tempNumber").effect("highlight", {color: '#4d4dff'}, 500, function() {
					flipEffectWithTweenMax("#tempNumber", temp, function() {
						$("#sumNumber5").effect("highlight", {color: '#4d4dff'}, 500, function() {
							flipEffectWithTweenMax("#sumNumber5", sum, function() {
								$("#armstrongNUmber").text(sum);
								if (sum == temp) {
									$('.introjs-tooltip').removeClass('hide');
									text = 'If the condition <span class="ct-code-b-yellow">'+ parseInt($("#sumNumber5").text()) +'</span> == '+
										'<span class="ct-code-b-yellow">'+ parseInt($("#tempNumber").text()) +'</span>'+
										' evaluates to <span class="ct-code-b-yellow">true</span>. The '+
										'true part will be printed (i.e.) <span class="ct-code-b-yellow">'+
										$("#number").text() +'</span> is an Armstrong number.';
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
										$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton';>Next &#8594;</a>");
										$(".introjs-duplicate-nextbutton").click(function() {
											$(".introjs-duplicate-nextbutton").remove();
											$("#trueOrFalse5").removeClass("opacity00").addClass("ct-code-b-blue").text("true");
											zoomInEffect("#trueOrFalse5", function() {
												$("#printArmstrongNumber").text("");
												$("#printArmstrongNumber").append("<span class = 'ct-code-b-blue'>"+ $("#number").text() +
													"</span> is an Armstrong number");
												transferEffect("#trueStatement", "#printArmstrongNumber", function() {
													setTimeout(function() {
														introcode.nextStep();
													},1500);
												})
											});
										});
									});
								} else {
									$('.introjs-tooltip').removeClass('hide');
									text = 'If the condition <span class="ct-code-b-yellow">'+ parseInt($("#sumNumber5").text()) +'</span> == '+
										'<span class="ct-code-b-yellow">'+ parseInt($("#tempNumber").text()) +'</span>'+
										' evaluates to <span class="ct-code-b-yellow">false</span>. The'+
										' else part will be printed (i.e.) <span class="ct-code-b-yellow">'+
										$("#number").text() +'</span> is not an Armstrong number.';
									typing('.introjs-tooltiptext', text, typingInterval, 'white', function() {
										$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton';>Next &#8594;</a>");
										$(".introjs-duplicate-nextbutton").click(function() {
											$(".introjs-duplicate-nextbutton").remove();
											$("#trueOrFalse5").removeClass("opacity00").addClass("ct-code-b-red").text("false");
											zoomInEffect("#trueOrFalse5", function() {
												$("#printArmstrongNumber").text("");
												$("#printArmstrongNumber").append("<span class = 'ct-code-b-red'>"+ $("#number").text() +
												"</span> is not an Armstrong number");
												transferEffect("#falseStatement", "#printArmstrongNumber", function() {
													setTimeout(function() {
														introcode.nextStep();
													},1500);
												})
											});
										});
									});
								}
							});
						});
					});
				});
			});
		});
	}
	
	function transferEffect(selector1, selector2, callBackFunction) {
		$(selector1).addClass("z-index1000000").effect( "highlight",{color: '#ffff33'}, 500);
		$(selector1).effect( "transfer", { to: $(selector2), className: "ui-effects-transfer" }, 500 , function() {
			$(selector2).removeClass("opacity00");
			$(selector1).removeClass("z-index1000000");
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
		var l1 = $(selector1).offset();
		var l2 = $(selector2).offset();
		var topLength = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		TweenMax.from($(selector2), 0.5, {top: topLength, left: leftLength, onComplete: function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}

	function zoomInEffect(selector1, callBackFunction) {
		$(selector1).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
			$(selector1).removeClass("animated zoomIn")
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		});
	}
	
	function flipEffectWithTweenMax(selector, val, callBackFunction) {
		TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
			$(selector).text(val);
			TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
				if (typeof callBackFunction === "function") {
					callBackFunction();
				}
			}});
		}});
	}
	
	//cursor position at end
	function charAtEnd(elementId) {
		$('#' + elementId).select();
		var element = document.getElementById(elementId);
		element.focus();
		var range = document.createRange();
		range.selectNodeContents(element);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
		
		$("#armstrongNumber").keydown(function(e) {
			var max = $(this).attr("maxlength");
			if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
				return;
			}
			if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
				e.preventDefault();
			}
				$(".introjs-duplicate-nextbutton").remove();
			if ($(this).text().length > max) {
				$('.length-error-text').remove();
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'>String length to 3.</span>");
				e.preventDefault();
			} else {
				$(".introjs-duplicate-nextbutton").remove();
			}
		});
		
		$("#armstrongNumber").on("keyup", function(e) {
			$('.length-error-text').remove();
			if ($(this).text() == "") {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'>Please enter number.</span>");
				$(this).addClass("empty");
			} else {
				$(this).removeClass("empty");
			}
			introcode.refresh();
			if ($("#armstrongNumber").text().length == 3) {
				$(".introjs-duplicate-nextbutton").remove();
				$('.introjs-tooltipbuttons').append("<a class='introjs-button introjs-duplicate-nextbutton' " +
				"onclick=valueStoredIntemp()>Next &#8594;</a>");
			} else {
				$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'>Enter 3 digit number.</span>");
				$(".introjs-duplicate-nextbutton").remove();
			}
		});
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