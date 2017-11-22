var tl = new TimelineLite();
var firstVal = 0;
var secondVal = 0;
var next = 1;

var relationalOperatorsReady = function() {
	$(".inputWidth").on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		
		if ( e.which == 8 || e.which == 37 || e.which == 39 || e.which == 46) {
			$('.length-error-text').remove();
			return true;
		}
		
		if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
			$('.length-error-text').remove();	
		} 
		
		if($(this).val().length >= max) {
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Max length was restricted to 2 characters only.</div>");
			e.preventDefault();
		} 
		
		if((e.shiftKey) || (e.keyCode > 8 && e.keyCode < 48) || (e.keyCode > 57 && e.keyCode < 96) || (e.keyCode > 105)) {

			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Enter only the integers.</div>");
			e.preventDefault();
		}
	})
	
	
	$(".inputWidth").bind("keyup", function() {
		//var select = $("#selectList option:selected").val();
		var select  = $('.active').text().trim();
		if (($("#firstNum").val().length != 0) && ($("#secondNum").val().length != 0)) {
			if (intro._currentStep == 1) {
				$(".introjs-nextbutton").show();
			} else if (select !== "--select--") {
				$("#submit").removeAttr("disabled");
			}
		} else {
			$(".introjs-nextbutton").hide();
			$("#submit").attr("disabled", "disabled");
		}
	})
	
	intro =  introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [
					{
						element : "#informationDiv",
						intro : "",
						position : "bottom",
						tooltipClass: "hide"
					},
					{
						element : "#initialize",
						intro : "",
						position : "right"
					},
					{
						element : "#selectDiv",
						intro : "",
						position : "right"
					},
					{
						element : "#operatorAnimation",
						intro : "",
						position : "right"
					},
					{
						element : "#animationDiv",
						intro : "",
						position : "right"
					}
				]
	})
	intro.onafterchange(function(targetElement) {
		var ElementId = targetElement.id;
		switch (ElementId) {
		case "initialize":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#animationDiv").removeClass("visibility-hidden");
				var text = "Enter <span class='ct-code-b-yellow'>integer</span> values.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
				})
			});
		break;
		case "selectDiv":
			$(".introjs-nextbutton").hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Select a <span class='ct-code-b-yellow'>relational</span> operator and click on <b>Evaluate</b> button.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
					$(".introjs-tooltipbuttons").append('<span class="next-button visibility-hidden">Next →</span>');
					nextClick();	
				})
			});
		break;
		case "operatorAnimation":
			$(".introjs-helperLayer").one("transitionend", function() {
				$('.introjs-nextbutton').hide();
				var text = "Evaluating...<ul><span id='charStep'></span></ul>";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').hide();
					relationalAnimation();
				});
			});
		break;
		case "animationDiv":
			
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				var text = "Feel free to try other combinations to learn how <span class='ct-code-b-yellow'>relational operators</span> work.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-nextbutton").hide();
					$("#firstNum").val("");
					$("#secondNum").val("")
					$("#restart").removeClass("opacity00");
					$("#restart").addClass("zIndex9999999");
					$("#submit").attr('disabled','disabled');
				})
			});
		break;
		}
	})
	intro.start();
	$("#submit").attr('disabled','disabled');
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	
		$("#informationDiv").append("<ul><li class='opacity00'><span class='ct-code-b-green'>Relational and equality</span> operators are used to test or to compare two numeric values or"
				+" numeric expressions.They require <span class=''>two operands</span>.</li><li class='opacity00'><span class=''>When relational and equality</span> operators are"
				+" applied on the operands they produce an integer value. When ever the condition evaluates to <span class='ct-code-b-green'>false</span>"
				+" the return value is <span class='ct-code-b-green '>0</span>, when ever the condition evaluates to <span class='ct-code-b-green'>true</span> the return value is <span class='ct-code-b-green '>1</span>. These values are often referred to as logical values.</li>"
				+"<li  class='opacity00'>Relational Operators: <span class='ct-code-b-green '> > </span>, <span class='ct-code-b-green '> >= </span>,"
				+" <span class='ct-code-b-green '> < </span>, <span class='ct-code-b-green'> <= </span></li><li  class='opacity00'>Equality Operators: "
				+"<span class='ct-code-b-green '> == </span> (equal to), <span class='ct-code-b-green '>!=</span> (not equal to)</li></ul>");
	
		//tl.to()
		 tl.to($("#informationDiv li:eq(0)"), 0.5,  {opacity: 1, onComplete: function() {
			tl.to($("#informationDiv li:eq(1)"), 0.5, {opacity: 1, onComplete: function() {
				tl.to($("#informationDiv li:eq(2)"), 0.5, {opacity: 1, onComplete: function() {
					tl.to($("#informationDiv li:eq(3)"), 0.5, {opacity: 1, onComplete: function() {
						$("#informationDiv").addClass("zIndex9999999");
						intro.nextStep();
					}})
				}})
			}})
		}}) 
					
	$("#submit").click(function() {
		if (next > 1) {
			relationalAnimation();
		}
		if (next == 1) {
			next = 2;
			intro.nextStep();
		}
	});
					
	$("#restart").click(function() {
		location.reload(true);
	})	
	
	$('.dropdown').on( 'click', '.dropdown-menu li a', function() { 
		$('.dropdown-menu').css({'min-width':$(".dropdown").width()})
	   var target = $(this).html();
	   $(this).parents('.dropdown-menu').find('li').removeClass('active');
	   $(this).parent('li').addClass('active');
	   $(this).parents('.dropdown-select').find('.dropdown-toggle').html(target + ' <span class="caret"></span>');
	   
	   var value = $('.active').text().trim();
		if (value === "--select--") {
			$('.length-error-text').remove();
			$(".introjs-tooltiptext").append("<div class='length-error-text'>Select the relational operator from the menu.</div>");
			$("#submit").attr("disabled", "disabled");
		} else if ($("#firstNum").val().length == 0 || $("#secondNum").val().length == 0) {
			$("#submit").attr("disabled", "disabled");
		} else {
			$('.length-error-text').remove();
			//$("#selectSub").html(options[value]);
			$("#submit").removeAttr("disabled");
		}
	});
}

function nextClick() {
	$(".next-button").click(function() {
		 
			$(".next-button").hide();
			$("#operatorAnimation > div div:nth-child(2)").removeClass('visibility-hidden');
			flipEffect("#num1Val", $("#firstNum").val(), function() {
				flipEffect("#num2Val", $("#secondNum").val(), function() {
					
					//var operator = $("#selectList option:selected").text().trim();
					var operator = $('.active').text().trim();
					var first = $("#num1Val").text().trim();
					var second=	$("#num2Val").text().trim();
					if (operator === ">") {
						$("#result").text(Number(parseInt(first) > parseInt(second)));
					} else if (operator === "<") {
						$("#result").text(Number(parseInt(first) < parseInt(second)));
					} else if (operator === ">=") {
						$("#result").text(Number(parseInt(first) >= parseInt(second)));
					} else if (operator === "<=") {
						$("#result").text(Number(parseInt(first) <= parseInt(second)));
					} else if (operator === "==") {
						$("#result").text(Number(parseInt(first) == parseInt(second)));
					} else if (operator === "!=") {
						$("#result").text(Number(parseInt(first) != parseInt(second)));
					}
					$("#operatorAnimation > div div:nth-child(3)").removeClass('visibility-hidden');
					
					$("button").removeAttr('disabled');
					$("#boolean").text(Boolean(parseInt($("#result").text())));
					$("#booleanSpan").removeClass("opacity00");
					if (next == 2) {
						setTimeout(function() {
							//$('.introjs-nextbutton').show();
							//$('.introjs-nextbutton').hide();
							var text = "Since the condition <span class='ct-code-b-yellow'>"+$("#firstNum").val()+" "+$('.active').text().trim()+" "+$("#secondNum").val()+"</span>"
										+" evaluates to <span class='ct-code-b-yellow'>"+$("#boolean").text()+"</span> we get the result as"
										+" <span class='ct-code-b-yellow'>"+$("#result").text()+"</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							//	relationalAnimation();
							});
							next++;
						}, 1000);
					}
				});	
			});
		
	});
	}

function relationalAnimation() {
	
	$("#operatorAnimation").empty();
	$("button").attr('disabled','disabled');
	$('.length-error-text').remove();
	$("#operatorAnimation").append("<div class='col-xs-offset-3'><div><span><b>int</b></span> <span>result</span> = <span id='exp1'>num1</span><span class='select-operator ct-code-b-green'></span><span id='exp2'>num2</span></div>"+
			"<div class='visibility-hidden'><span class='visibility-hidden'>int</span> <span class='visibility-hidden'>result  </span> = <span id='num1Val' class='position-relative'>num1</span><span class='select-operator ct-code-b-green'></span><span id='num2Val' class='position-relative'>num2</span></div>"+
			"<div class='visibility-hidden'><span class='visibility-hidden'>int</span> <span class='visibility-hidden'>result  </span> = <span></span><span id='result' class='position-relative'></span> <span class='opacity00' id='booleanSpan'>(<span id='boolean' class='ct-code-b-green'></span>)</span></div></div>");
	//var operator = $("#selectList option:selected").text();
	var operator = " "+$('.active').text().trim()+" ";
	$(".select-operator").text(operator);
	var firstVal = $("#firstNum").val();
	var secondVal = $("#secondNum").val();
	$(".next-button").click();
	
}

function typing(selector, text, callBackFunction) {
		var typingSpeed = 1;
		$(selector).typewriting( text , {
			"typing_interval": typingSpeed,
			"cursor_color": 'white',
		}, function() {
			$(selector).removeClass("typingCursor");
			$(".introjs-nextbutton").show();
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		})
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