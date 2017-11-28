var givenValue;
var base=8;
var octalValues = [];
var count;
var l1,l2;
var introguide;
var introStepIndex = 1; 
var currentIndex;
var l3, l4;
var quotientValueFlag = true;
var quotientFlag = false;
var quotientValue;
var typing_interval = 1;
var l = console.log.bind(console);
var typingFlag = true;
var tempProduct = [];
var tempRemainder = [];

var decimalToOctalReady = function() {
	introGuide();
	$("#decimalValue").keyup(function(){
		var yourInput = $(this).val();
		re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
		var isSplChar = re.test(yourInput);
		if(isSplChar)
		{
			var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			$(this).val(no_spl_char);
		}
		if ($("#decimalValue").val().length > 0) {
			$("#convert").removeClass("disabled").removeClass("opacity40");
		} else {
			$("#convert").addClass("disabled").addClass("opacity40");
		}
	});
	
	 $("body").keydown(function(e){
		if (e.which == 13) {
			e.preventDefault();
		}
	}) 
	
	$("#decimalValue").keydown(function(e) { // conditions to enter text
			if (((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105) || e.which == 8 || e.which == 46) ) {
				return true;
			} else {
				e.preventDefault();
			}
	});
	
	$("#convert").click(function(){ 
		if ($("#convert").hasClass('disabled')) {
			return true;
		}
		count = 0;
		introStepIndex = 1; 
		$("#remaindersRow").empty();
		$("#resultDiv").empty();
		octalValues = [];
		if (!isNaN( $("#decimalValue").val() ) && $("#decimalValue").val() >=base) {
			givenValue = $("#decimalValue").val();
			for (var index = 0; index < Number(givenValue).toString(base).length;index++) {
				$("#remaindersRow").append("<td id='storeRemainderTd"+ index +"'> <span id='storeRemainder"+ index +"' class='text-center opacity00 position-relative store-remainder' > </span> </td");
			}
			converter(givenValue,base);
			var resultDivWidth = $("#resultDiv").width();
			switch(count) {
			case 3:
					$('#box0').css('margin-left', resultDivWidth / 4.8);
					break;
			case 2:
					$('#box0').css('margin-left', resultDivWidth / 3);
					break;
			case 1:
					$('#box0').css('margin-left', resultDivWidth / 3.4);
					break;
			}
			$("#remaindersRow").removeClass("hidden");
			for (var i = octalValues.length - 1,j=0; i >= 0; i--,j++) {
				$("#storeRemainder" + j).text( octalValues[i] );
			}
			introguide.nextStep();
		}  else {
			$("#convert").addClass("disabled").addClass("opacity40");
			$("#decimalValue").attr("disabled", true); 
			$("#inputText").empty();
			typingId = '#appendInputText';
			typingContent = '<ul><li>If the given number is <b>less than</b> <span class="ct-code-b-yellow">' + base + '</span>.'+ "" 
				+ '</li><li><span class="ct-code-b-yellow">Octal</span> representation of the number will be <b>same</b>' + "" 
				+ ' as that number.</li></ul>';
			typingCallbackFunction = function () {
				$('.introjs-nextbutton,.introjs-prevbutton').hide();
				$('.introjs-tooltipbuttons').append("<a  class='introjs-button user-btn' onclick='backfirststep()'>&#8592; Back</a>");
				$('.introjs-tooltipbuttons').append("<a  class='introjs-button user-btn1' onclick='lastStep()'>Next &#8594;</a>");
			}
			typing(typingId, typingContent, typingCallbackFunction);
		}
	});
	$('#restartBtn').click(function(){
		 window.location.search = "?restart=1";
	});
}
function converter(decimal,base) {
	var index = 0;
	
	while(givenValue > 0) {
		octalValues[index] = givenValue % base;
		if (givenValue >= base) {
			$("#resultDiv").append("<div class='col-xs-3 box-border opacity00'  id='box" + index +"' style='margin-top: 2%' > <table class='font-size-16 text-center table-margin-left'>" +
					"<tr><td><span id='divider" + index +"' class='opacity00 position-relative'>"+ base +"</span><span id='openParenthesis"+ index + "' style='font-size:33px;' class='opacity00'>)&nbsp;&nbsp;</span></td>" + ''
					+ "<td style='padding-top: 13px;' id='dividend" + index + "' class='opacity00 position-relative'><span id='dividendSpan" + index + "'>"+ givenValue +"</span></td>" +
					"<td><span style='font-size:33px' class='opacity00' id='closeParenthesis"+ index +"'>&nbsp;&nbsp;(</span><span id='quotient" + index +"' class='opacity00 position-relative'>"+ parseInt( givenValue / base ) +"</span></td></tr>" +
					"<tr><td></td><td id='product" + index +"' class='position-relative'><span id='productSpan" + index + "'>" + '' 
					+ "<span id='firstValue" + index + "' class='opacity00 position-relative display-inlineblock'>"+ base +"</span> <span id='mulOperator" + index + "' class='opacity00 display-inlineblock' style='color:red'>x</span>" + ''
					+ " <span id='secondValue" + index + "' class='opacity00 position-relative display-inlineblock'> " + parseInt( givenValue / base ) + " </span></span></td><td></td></tr>" +
					"<tr><td></td><td class='text-center' style='padding-top:3px;'id='remainder" + index +"'><span id='remainderSpan" + index + "'>" + '' 
					+ "<span id='firstNumber" + index + "' class='opacity00 position-relative display-inlineblock'>"+ givenValue +"</span>" + '' 
					+ " <span id='minusOperator" + index + "' class='opacity00 display-inlineblock'  style='color:red'><b>-</b></span>" + ''
					+ " <span id='secondNumber" + index + "' class='opacity00 position-relative display-inlineblock'> " + ( parseInt( givenValue / base ) ) * base + " </span></span> </td><td></td></tr>" +
				"</table> </div>");
		var dividendWidth = parseInt($('#dividend' + index).width()) * 1.5;
		if (dividendWidth >= 52) {
			$('#remainder' + index).css('width', dividendWidth - 10); 
		} else {
			$('#remainder' + index).css('width', 52);
		}
		givenValue = parseInt( givenValue / base );
		count++;
			var boxOptions = {
					element : '#box' + index,
					intro : 'Start the division of ' + ((givenValue * base) + parseInt(octalValues[index])) + '.',
					position: 'top',
					tooltipClass: 'hide'
			}
			introguide.insertOption(++introStepIndex, boxOptions);
			
			if (index == 0 || index == 1) {
				 var dividendOptions = {
							element : '#dividend' + index,
							intro : '',
							position: 'bottom'
					}
				introguide.insertOption(++introStepIndex, dividendOptions);
				 
				 var dividerOptions = {
							element : '#divider' + index,
							intro : '',
							position: 'auto'
					}
				introguide.insertOption(++introStepIndex, dividerOptions);
				 
				 var quotientOptions = {
							element : '#quotient' + index,
							intro : '',
							position: 'right',
							tooltipClass: 'hide'
					}
				introguide.insertOption(++introStepIndex, quotientOptions);
				 
				 var productOptions = {
							element : '#product' + index,
							intro : '',
							position: 'left',
							tooltipClass: 'hide'
					}
				introguide.insertOption(++introStepIndex, productOptions);
				 
				 var reamainderOptions = {
							element : '#remainder' + index,
							intro : '',
							position: 'bottom',
							tooltipClass: 'hide'
					}
				introguide.insertOption(++introStepIndex, reamainderOptions);
			}
								
			var options = {
					element : '#remainderValues',
					intro : '',
					position: 'top'
			}
			introguide.insertOption(++introStepIndex, options);
			
			var options = {
					element : '#quotient' + index,
					intro : '',
					position: 'top'
			}
			introguide.insertOption(++introStepIndex, options);
		} else {
			break;
		}
		index++;
	}
	currentIndex = count;
	for (index = 0; index < count; index++) {
		tempProduct[index] = $("#productSpan" + index).html();
		tempRemainder[index] = $("#remainderSpan" + index).html();
	}
}

function introGuide() {
	introguide = introJs();
	introguide.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation:false, 
	        steps: [
	                {
	                	element: '#infoDiv',
	                	intro: '',
	                	position:'bottom',
	                	tooltipClass: 'hide'
	                },
					{
				    	element: '#inputDiv',
				    	intro: '',
				    	position:'right'
				    },{
				    	element: '#finalValues',
				    	intro: '',
				    	position:'right'
				    }, {
				    	element: '#octalValueDiv',
				    	tooltipClass: 'hide'
				    }, {
				    	element: '#restartBtn',
				    	intro: 'Click to restart.',
				    	position: 'right',
				    }]
	});
	introguide.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		if (elementId == "inputDiv") {
			$("#convert").addClass("disabled").addClass("opacity40")
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introguide._direction == "backward") {
					quotientFlag = false;
					introguide._introItems.splice(2, introguide._introItems.length - 5);
					$("#remaindersRow, #octal-value-prop, #resultDiv").empty();
				}
			});
		}
		if (elementId.indexOf("box") > -1) {
			var index = elementId.substring("box".length);
			if (introguide._direction == "backward") {
				$("#dividend" + index).addClass("opacity00");
				$("#openParenthesis" + index).fadeTo(500, 0);
				$("#closeParenthesis" + index).fadeTo(500, 0);
				quotientFlag = true;
				if (index > 1) {
					currentIndex++;
					$("#storeRemainderTd" + currentIndex).removeClass("store-remainder-border");
					$("#storeRemainder"+ currentIndex).addClass("opacity00").removeClass("z-index9999999").removeAttr('style');
					$("#productSpan" + index).empty().append(tempProduct[index]);
					$("#remainderSpan" + index).empty().append(tempRemainder[index]);
					$("#divider" + index).addClass("opacity00");
					$("#quotient" + index).addClass("opacity00").removeAttr('style');
					$("#product" + index).css('border-bottom','0px solid black');
					setTimeout(function() {
						$("#box" + index).fadeTo(500, 0);
						introguide.previousStep();
					}, 1000);
				}
			}
		} 
		if (elementId.indexOf("dividend") > -1) {
			var index = elementId.substring("dividend".length);
			if (introguide._direction == "backward") {
				$("#divider" + index).addClass("opacity00").removeAttr('style');
			}
		} else if (elementId.indexOf("divider") > -1) {
			var index = elementId.substring("divider".length);
			$("#quotient" + index).addClass("opacity00").removeAttr('style');
		} else if (elementId.indexOf("quotient") > -1) {
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			var index = elementId.substring("quotient".length);
			if (!quotientFlag) {
				if (introguide._direction == "backward") {
					$("#productSpan" + index).empty().append(tempProduct[index]);
				} 
			} else {
				
				if (introguide._direction == "backward") {
					if (count - 1  == index )  {
						$("#storeRemainderTd"+currentIndex).removeClass("store-remainder-border");
						$("#storeRemainder"+currentIndex).addClass("opacity00").removeClass("z-index9999999").removeAttr('style');
					}
				} 
			}
		} else if (elementId.indexOf("product") > -1) {
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			var index = elementId.substring("product".length);
			if (introguide._direction == "backward") {
				$("#productSpan" + index).empty().append(tempProduct[index]);
				$("#remainderSpan" + index).empty().append(tempRemainder[index]);
			}
		} else if (elementId.indexOf("remainder") > -1) {
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			var index = elementId.substring("remainder".length);
			if (introguide._direction == "backward") {
			$("#remainderSpan" + index).empty().append(tempRemainder[index]);
			if (index == 0) {
				$("#remainders").fadeTo(500, 0);
			}
			currentIndex++;
			var value = currentIndex;
			if (index < 2) {
				$("#storeRemainderTd" + value).removeClass("store-remainder-border");
				$("#storeRemainder"+ value).addClass("opacity00").removeClass("z-index9999999").removeAttr('style');
			}
			}
		}
	});
	introguide.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		if (elementId.indexOf("box") > -1) {
			var index = elementId.substring("box".length);
			if (index > 1) {
				if (introguide._direction == "forward") {
					boxAnimation(index);
				}
			} else{
					boxAnimationForFirstIndex(index);
			}
		}
		if (elementId.indexOf("dividend") > -1) {
			var index = elementId.substring("dividend".length)
			dividendAnimation(index);
			$("#openParenthesis" + index).fadeTo(500, 1);
			$("#closeParenthesis" + index).fadeTo(500, 1);
		} else if (elementId.indexOf("divider") > -1) {
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			var index = elementId.substring("divider".length);
			$('.introjs-helperLayer').one('transitionend', function() {
				dividerAnimation(index);
			});
		} else if (elementId.indexOf("quotient") > -1) {
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			var index = elementId.substring("quotient".length);
			$('.introjs-helperLayer').one('transitionend', function() {
				quotientAnimationForFirstTime(index);
			});
		} else if (elementId.indexOf("product") > -1) {
			quotientFlag = false;
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			var index = elementId.substring("product".length);
			$('.introjs-helperLayer').one('transitionend', function() {
				productAnimation(index);
			});
		} else if (elementId.indexOf("remainderValues") > -1) {
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				quotientFlag = true;
				remainderAnimation();
			});
		} else if (elementId.indexOf("remainder") > -1) {
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			var index = elementId.substring("remainder".length);
			$('.introjs-helperLayer').one('transitionend', function() {
				remainderAnimationForFirstTime(index);
			 });
		}
		
		if (elementId == "octalValueDiv") {
			octalValueAnimation();
			$('#restartBtn').removeClass('hidden').addClass('opacity00');
		}
		if (elementId === "infoDiv") {
			$("#infoDiv").html('<ul><li id="list1" class="opacity00">The numbering system which uses <span class="ct-code-b-green">base-8</span> is called' + ""
					+ ' <span class="ct-code-b-green">Octal System</span>.</li>  <li id="list2" class="opacity00"> Only combinations of <span class="ct-code-b-green">0</span>,' + "" 
					+ ' <span class="ct-code-b-green">1</span>, <span class="ct-code-b-green">2</span>, <span class="ct-code-b-green">3</span>,' + "" 
					+ ' <span class="ct-code-b-green">4</span>, <span class="ct-code-b-green">5</span>, <span class="ct-code-b-green">6</span>' + "" 
					+ ' and <span class="ct-code-b-green">7</span> are used to represent a value of any magnitude in ' + "" 
					+ '<span class="ct-code-b-green">Octal System</span>.</li> <li id="list3" class="opacity00">Hence, if <b>a number greater' + "" 
					+ ' than '+ (base - 1) + '</b> is provided, we try to decrease its magnitude by <b>dividing by' + "" 
					+ ' <span class="ct-code-b-green">' + base + '</span></b> and <b> keep collecting the remainders until the' + "" 
					+ ' quotient is less than  <span class="ct-code-b-green">' + base + '</span></b>.</li></ul>');
				$("#list1").fadeTo(500, 1, function() {
					$("#list2").fadeTo(300, 1, function() {
						$("#list3").fadeTo(300, 1, function() {
							$("#infoDiv").addClass('z-index9999999');
							setTimeout(function () {
								introguide.nextStep();
							}, 500);
						});
					});
				})
		}
		if (elementId == "inputDiv") {			
			$("#decimalValue").val("");
			$("#decimalValue").attr("disabled", true);
			$("#inputDiv").removeClass('visibility-hidden');
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function() {
				inputStep();
			});
		}
		if (elementId == "finalValues") {
			$('.introjs-nextbutton,.introjs-prevbutton').hide();
			l1 = $("#quotient" + (count - 1 )).offset();
			$("#quotient" + (count -  1 )).addClass('background-effect').addClass('z-index9999999');
			l2 = $("#storeRemainder" + currentIndex).offset();
			topLength  = l1.top - l2.top;
			leftLength = l1.left - l2.left;
			$("#storeRemainderTd" + currentIndex).addClass("store-remainder-border");
			typingContent = '<span id="quotientText">Collecting the quotient.</span><span id="outputText"></span>';
			typingCallbackFunction = function () {
				$("#storeRemainder"+currentIndex ).removeClass("opacity00").addClass("z-index9999999");
				TweenLite.from($("#storeRemainder" + currentIndex), 1, {top: topLength, left:leftLength, onComplete: function() {
					$("#quotient" + (count -  1 )).removeClass('background-effect').removeClass('z-index9999999');
					$('#quotientText').empty();
					typingContent = 'This is the octal representation of <span class="ct-code-b-yellow">' + $("#decimalValue").val() + '</span>.';
					typingCallbackFunction = function () {
						$('.introjs-nextbutton,.introjs-prevbutton').show();
					}
					typing($('.introjs-tooltiptext'), typingContent, typingCallbackFunction);
				}});
			}
			typing($('#outputText'), typingContent, typingCallbackFunction);
		}
		if (elementId == "restartBtn") {
			 $('#restartBtn').fadeTo(1300,1.0);
			$(".introjs-tooltipbuttons").hide();
		}
	});
	
	introguide.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
}

function boxAnimationForFirstIndex(index) {
	$("#box" + index).fadeTo(500, 1, function() {
		if (introguide._direction == "backward") {
			$("#box" + index ).fadeTo(500, 0);
			$("#openParenthesis" + index).fadeTo(500, 0);
			$("#closeParenthesis" + index).fadeTo(500, 0);
			setTimeout(function() {
				introguide.previousStep();
			}, 400);
		} else {
			$("#box" + index).fadeTo(500, 1, function() {
				introguide.nextStep();					
			});
		}
	});
}

function dividendAnimation(index) {
	var message;
	$('.introjs-nextbutton,.introjs-prevbutton').hide();
	if (index == '0' ) {
		l1 = $("#decimalValue").offset();
		message = 'Let us consider the given number.';
	} else {
		$("#quotient" + (index - 1)).addClass('background-effect').addClass("z-index9999999");
		l1 = $("#quotient" + (index - 1)).offset();
		message = 'Let us consider the previous quotient.';
	}
	l2 = $("#dividend" + index).offset();
	var topLength  = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	setTimeout(function () {
		typingId = '.introjs-tooltiptext';
		typingContent = message;
		typingCallbackFunction = function () {
			$('.introjs-nextbutton,.introjs-prevbutton').show().css("visibility", "hidden");
			$("#dividend" + index).addClass("z-index9999999").removeClass("opacity00");
			TweenLite.from($("#dividend" + index), 1, {top: topLength, left: leftLength, onComplete : function(){
				$("#quotient" + (index - 1)).removeClass('background-effect').removeClass("z-index9999999");
				$('.introjs-nextbutton,.introjs-prevbutton').css("visibility", "visible");
			}});
		}
		typing(typingId, typingContent, typingCallbackFunction);
	}, 500);
}

function dividerAnimation(index) {
		l1 = $("#radix").offset();
		l2 = $("#divider" + index).offset();
		topLength  = l1.top - l2.top;
		leftLength = l1.left - l2.left;
		typingId = '.introjs-tooltiptext';
		typingContent = 'In <span class="ct-code-b-yellow">Octal System</span>, since the base is' + ""
						+ ' <span class="ct-code-b-yellow">' + base + '</span>,' + ""
						+ ' we divide the given number by <span class="ct-code-b-yellow">' + base + '</span>.';
		typingCallbackFunction = function () {
			$("#radix").addClass('background-effect').addClass("z-index9999999");
			$('.introjs-nextbutton,.introjs-prevbutton').show().css("visibility", "hidden");
			$("#divider" + index).removeClass("opacity00");
			TweenLite.from($("#divider" + index), 1, {top: topLength, left:leftLength, onComplete: function() {
				$("#radix").removeClass('background-effect').removeClass("z-index9999999");
				$('.introjs-nextbutton,.introjs-prevbutton').css("visibility", "visible");
			}});
		}
		typing(typingId, typingContent, typingCallbackFunction);
}

function quotientAnimationForFirstTime(index) {
			if (!quotientFlag) {
				typingId = '.introjs-tooltiptext';
				typingContent = 'quotient msg';
				typingCallbackFunction = function () {
					$("#quotient" + index).fadeTo(500, 1, function() {
						if(introguide._direction == "backward") {
							setTimeout(function() {
								quotientFlag = false;
								$("#productSpan" + index).empty().append(tempProduct[index]);
								introguide.previousStep();
							}, 1000);
						} else {
							setTimeout(function() {
								quotientFlag = true;
								introguide.nextStep();
							}, 500);	
						}
					});
				}
				typing(typingId, typingContent, typingCallbackFunction);
		} else {
			quotientValue = $( '#quotient' + index).text();
			var msg =  'Since <span class="ct-code-b-yellow">' + quotientValue +  ' &gt;= ' + base + '</span>, we will repeat the process considering <span class="ct-code-b-yellow">' + quotientValue + '</span>.';
			if (quotientValue < base) {
				msg =  '<ul><li>Since <span class="ct-code-b-yellow">' + quotientValue + ' &lt; ' + base + '</span>, we can\'t divide <span class="ct-code-b-yellow">' + quotientValue + '</span> any further by <span class="ct-code-b-yellow">' + base + '</span>.</li>' + ""
				+ '<li>Hence we will collect the quotient <span class="ct-code-b-yellow">' + quotientValue + '</span> along with the previous remainders that were collected.</li></ul>';  
			}
			typingId = '.introjs-tooltiptext';
			typingContent = msg;
			typingCallbackFunction = function () {
				$('.introjs-nextbutton,.introjs-prevbutton').show();
				if (index == 0) {
					quotientFlag = false;
				}
				if (quotientValue < base) {
					quotientFlag = true;
					$("#remainders").fadeTo(500, 0);
				} 
			}
			typing(typingId, typingContent, typingCallbackFunction);
		} 
}

function productAnimation(index) {
	$("#divider" + index).addClass('background-effect').addClass('z-index9999999');
	l1 = $("#divider" + index).offset();
	l2 =  $("#firstValue" + index).offset();
	$("#quotient" + index).addClass('background-effect').addClass('z-index9999999');
	l3 = $("#quotient" + index).offset();
	l4 = $("#secondValue" + index).offset();
	topLength  =  l1.top - l2.top;
	leftLength =  l1.left - l2.left;
	topLength1 =  l3.top - l4.top;
	leftLength1 =  l3.left - l4.left;
	var dividerValue = $("#firstValue" + index).text();
	var quotioentValue = $("#secondValue" + index).text();
	typingId = '.introjs-tooltiptext';
	typingContent = 'product msg';
	typingCallbackFunction = function () {
		$('.introjs-nextbutton,.introjs-prevbutton').show().css("visibility", "hidden");
		$("#firstValue" + index).removeClass('opacity00');
		TweenLite.from("#firstValue" + index, 1, {top: topLength, left: leftLength, onComplete: function(){
			$("#divider" + index).removeClass('background-effect').removeClass('z-index9999999');
		}});
		$("#secondValue" + index).removeClass('opacity00');
		$('#mulOperator' + index).fadeTo(500, 1);
		TweenLite.from("#secondValue" + index, 1, {top: topLength1, left: leftLength1, onComplete: function(){
			$("#quotient" + index).removeClass('background-effect').removeClass('z-index9999999');
			TweenMax.fromTo("#firstValue" + index + ",#secondValue" + index + ",#mulOperator" + index, 1 ,{delay: 1, rotationX: 0}, {rotationX: 180, opacity: 0, onComplete: function(){
				$("#firstValue" + index + ",#secondValue" + index + ",#mulOperator" + index).remove();
				$("#productSpan" + index).addClass('opacity00').text(dividerValue * quotioentValue);
				$('#productSpan' + index).fadeTo(200, 1,function(){
					$("#product" + index).css('border-bottom','0px solid black');
					if (index > 1) {
							remainderAnimationForFirstTime(index);
					} else {
						$('.introjs-nextbutton,.introjs-prevbutton').css("visibility", "visible");
						if(introguide._direction == "backward") {
							setTimeout(function() {
								introguide.previousStep();
							}, 500);
						} else {
							setTimeout(function() {
								introguide.nextStep();
							}, 1500);
						}
					}
				});
			}});
		}});
	}
	typing(typingId, typingContent, typingCallbackFunction);
}

function remainderAnimationForFirstTime(index) {
	$("#dividendSpan" + index).addClass('background-effect').addClass('z-index9999999');
	l1 = $("#dividendSpan" + index).offset();
	l2 =  $("#firstNumber" + index).offset();
	$("#productSpan" + index).addClass('background-effect').addClass('position-relative').addClass('z-index9999999');
	l3 = $("#productSpan" + index).offset();
	l4 = $("#secondNumber" + index).offset();
	topLength  =  l1.top - l2.top;
	leftLength =  l1.left - l2.left;
	topLength1 =  l3.top - l4.top;
	leftLength1 =  l3.left - l4.left;
	var dividendValue = parseInt($("#firstNumber" + index).text());
	var productValue =  parseInt($("#secondNumber" + index).text());
	typingId = '.introjs-tooltiptext';
	typingContent = 'remainder msg';
	typingCallbackFunction = function () {
		$('.introjs-nextbutton,.introjs-prevbutton').show().css("visibility", "hidden");
		$("#firstNumber" + index).removeClass('opacity00');
		$("#product" + index).css('border-bottom','2px solid black');
		TweenLite.from("#firstNumber" + index, 0.5, {top: topLength, left: leftLength, onComplete: function(){
			$("#dividendSpan" + index).removeClass('background-effect').removeClass('z-index9999999');
		}});
		$("#secondNumber" + index).removeClass('opacity00');
		$('#minusOperator' + index).fadeTo(500, 1);
		TweenLite.from("#secondNumber" + index, 0.5, {top: topLength1, left: leftLength1, onComplete: function(){
			$("#productSpan" + index).removeClass('background-effect').removeClass('z-index9999999');
		TweenMax.fromTo("#firstNumber" + index + ",#secondNumber" + index + ",#minusOperator" + index, 1 ,{delay: 1, rotationX: 0}, {rotationX: 180, opacity: 0, onComplete: function(){
			$("#firstNumber" + index + ",#secondNumber" + index + ",#minusOperator" + index).remove();
			$("#remainderSpan" + index).addClass('opacity00').text(dividendValue - productValue);
			if (index > 1) {
				$('#remainderSpan' + index).fadeTo(400, 1, function() {
					introguide.nextStep();
				});
			} else {
				$('#remainderSpan' + index).fadeTo(400, 1, function() {
					$('.introjs-nextbutton,.introjs-prevbutton').css("visibility", "visible");
					if(introguide._direction == "backward") {
						setTimeout(function() {
							introguide.previousStep();
						}, 500);
					} else {
						setTimeout(function() {
							introguide.nextStep();
						}, 500);
					}
					});
				}
			}});
		}});
	}
		typing(typingId, typingContent, typingCallbackFunction);
}
	
	function boxAnimation(index) {
		$("#box" + index).fadeTo(200, 1, function() {
		if (index == '0' ) {
			l1 = $("#decimalValue").offset();
		} else {
			l1 = $("#quotient" + (index - 1)).offset();
			$("#quotient" + (index - 1)).addClass('background-effect').addClass('z-index9999999');
		}
		l2 = $("#dividend" + index).offset();
		var timeInMilliseconds = 500;
		var topLength  = l1.top - l2.top;
		var leftLength = l1.left - l2.left;
		$("#dividend" + index).removeClass("opacity00").addClass("z-index9999999");;
		TweenLite.from($("#dividend" + index), 1, {top: topLength, left:leftLength, onComplete:function(){
			$("#quotient" + (index - 1)).removeClass('background-effect').removeClass('z-index9999999');
			$("#openParenthesis" + index).fadeTo(timeInMilliseconds, 1);
			$("#closeParenthesis" + index).fadeTo(timeInMilliseconds, 1, function(){
				l1 = $("#radix").offset();
				l2 = $("#divider" + index).offset();
				$("#radix").addClass('background-effect').addClass("z-index9999999");
				topLength  = l1.top - l2.top;
				leftLength = l1.left - l2.left;
				$("#divider" + index).removeClass("opacity00");
				TweenLite.from($("#divider" + index), 1, {top: topLength, left:leftLength, onComplete:function(){
					$("#radix").removeClass('background-effect').removeClass("z-index9999999");
					$("#quotient" + index).fadeTo(timeInMilliseconds, 1, function(){
						productAnimation(index);
					});
				}});
			});
		}});
	});	
}

function remainderAnimation() {
	var index = currentIndex;
	currentIndex--;
		$("#remainderSpan" + (count - index)).addClass('position-relative').addClass('background-effect').addClass("z-index9999999");
		l1 = $("#remainderSpan" + (count - index)).offset();
		l2 = $("#storeRemainder" + index).offset();
		topLength  = l1.top - l2.top;
		leftLength = l1.left - l2.left;
		$("#storeRemainderTd" + index).addClass("store-remainder-border");
		 if ( (count - index) == 0) {
				$("#remainders").fadeTo(500, 1);
		} else {
			$("#remainders").css('opacity', 0.5);
		} 
		typingId = '.introjs-tooltiptext';
		typingContent = 'Collecting the remainder.';
		typingCallbackFunction = function () {
			$('.introjs-nextbutton,.introjs-prevbutton').show().css("visibility", "hidden");
			$("#storeRemainder" + index).removeClass("opacity00").addClass("z-index9999999");
			TweenLite.from($("#storeRemainder" + index), 0.5, { top: topLength, left:leftLength, onComplete: function() {
				$("#remainderSpan" + (count - index)).removeClass('background-effect').removeClass('z-index9999999');
				$('.introjs-nextbutton,.introjs-prevbutton').css("visibility", "visible");
			}});
		}
		typing(typingId, typingContent, typingCallbackFunction);
	} 

function octalValueAnimation() {
	setTimeout(function(){
		typingId = '#octalValueDiv';
		typingContent = "Octal representation of the given number <span style='font-family: monospace'>" + $("#decimalValue").val() + "</span>" + ''
		+ " is: <span style='font-family: monospace'>(" + Number($("#decimalValue").val()).toString(base) + ")<sub>" + base + "</sub>" + ''
		+ "</span>" + "\t\tor\t\t<span style='font-family: monospace'>(0" + Number($("#decimalValue").val()).toString(base) + ")</span>";
		typingCallbackFunction = function () {
			setTimeout(function () {
				introguide.nextStep();
			}, 500);
		}
		typing(typingId, typingContent, typingCallbackFunction);
		
	}, 1200);
}

function typing(typingId, typingContent, typingCallbackFunction) {
	if (typingFlag) { 
			$(typingId).typewriting(typingContent, {
				"typing_interval": typing_interval,
				"cursor_color": 'whitee'
			}, function() {
				$(typingId).removeClass('typingCursor');
				typingCallbackFunction();
			});
	 } else {
			$(typingId).html(typingContent);
			typingCallbackFunction();
	} 
}

function backfirststep() {
	$(".user-btn, .user-btn1").remove();
	$("#decimalValue").val("");
	$("#decimalValue").removeAttr("disabled");
	inputStep();
}
function inputStep() {
	typingId = '.introjs-tooltiptext';
	typingContent = '<span id="inputText">Enter a decimal value and click the <span class="btn btn-success btn-xs" style="cursor: default;">'+
					'Convert to Octal</span> button to see how the Decimal to Octal' + "" 
					+ ' conversion is done.<br><span class="ct-code-b-yellow">Note</span>:'+
					'&nbsp;Enter a value of maximum length <b>3</b>.</span>' + ""
					+ '<span id="appendInputText"></span>';
	typingCallbackFunction = function () {
		$("#decimalValue").attr("disabled", false);
		$("#decimalValue").effect('highlight',{color:'yellow'}, 500);
		$("#decimalValue").focus();
	}
	typing(typingId, typingContent, typingCallbackFunction);
}
function lastStep() {
	$(".user-btn1, .user-btn").remove();
	introguide.goToStep(introguide._introItems.length - 1);
}