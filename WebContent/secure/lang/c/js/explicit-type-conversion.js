var explicitTypeConversion = function() {

	t1 = new TimelineLite();
	$('#restartBtn').click(function() {
		location.reload(true);
	});
	intro = introJs();
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
		}
	});
	$(".element").keyup(function() {
		if(($('#intaEdit').val().length <= 0) || ($('#intbEdit').val().length < 1)) {
			$(".user-btn").addClass('btn disabled');
		} else {
			$(".user-btn").removeClass('btn disabled');
		}
	}); 
	 
	 $('#intbEdit').on('keyup', function(e) {
	    if ($(this).val().charAt(0) == '0') {
	    	$(this).val('');
	    	$(".user-btn").addClass('btn disabled');
		 } 
	});
	
	
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
					element :'#informationdiv',
					intro :'',
					position:"bottom"
				},{
					element :'#textInTable',
					intro :'',
					tooltipClass: "hide",
					position:"right"
				},{
					element :'#enterAandBvalues',
					intro :'',
					position:"right"
				},{
					element :'#withoutTypeCast',
					intro :'',
					tooltipClass: "hide",
					position:"right"  
				},{
					element :'#withTypeCast',
					intro :'',
					tooltipClass: "hide",
					position:"bottom"
				},{
					element :'#restartBtn',
					intro :'',
					position:"right"
				}]
			});
	
	intro.onafterchange(function(targetElement) { 
	var elementId = targetElement.id;
	console.log(targetElement.id);
	console.log(elementId);	
	switch (elementId) {
	case "textInTable":
		$(".introjs-helperLayer").one("transitionend", function() {
			$("#calculationtable").removeClass("visibility-hidden");
			$('#textInTable').html("<ul><li id='line1' class='opacity00'>Let us consider a situation where we are performing  "+
					"a division on integer values and assigning the final result to a float.</li>"+
		  			"<li id='line2' class='opacity00'>When we perform such an operation normally the integer division returns a integer value  "+
		  			"and assigned to float where by we lose the fractional values which we may obtained which is directly perform a float division.</li>"+
		  			"<li id='line3' class='opacity00'>In such scenarios in ordered to retained the fractional part we can convert the values stored in integer variables to "+
		  			" float explicitly using the <b class='color-green'>type casting operator</b>.</li>"+
		  			"<li id='line4' class='opacity00'>Let us see the difference of performing a division on integer values <b class='color-green'>without using a "+ 
		  			"type cast operator</b> and <b class='color-green'>with using a type cast operator</b>.</li></ul>");
				setTimeout(function () {
					$("#line1").fadeTo(300, 1, function() {
						$("#line2").fadeTo(300, 1, function() {
							$("#line3").fadeTo(300, 1, function() {
								$("#line4").fadeTo(300, 1, function() {
									intro.nextStep();
								});
							});
						});	
					})}, 1000);
				});
		break;
	case "enterAandBvalues":
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			typing('.introjs-tooltiptext', "Enter an <span class='ct-code-b-yellow'>integer</span> values <span "+
					"class='ct-code-b-yellow'>x</span> and <span class='ct-code-b-yellow'>y</span> and click the "+
					"<span style='background-color: green; padding: 3px;'>next &#8594;</span> button to see how the"+
					" type casting is done.<br>"+
					"<span class='ct-code-b-yellow'>Note:</span>Enter a value of maximum length 3.", function() {
					$("#enterAandBvalues").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$('#intaEdit').focus();
						$('.user-btn').click(function() {
							intro.nextStep();
						});
					});
				});
			});
		break;
	case "withoutTypeCast":
		$("#intaEdit").attr("disabled", true);
		$("#intbEdit").attr("disabled", true);
		$(".user-btn").addClass('btn disabled');
		var divide = $("#intaEdit").val();
		var floatofint = $("#intbEdit").val();
		var output =  (divide/floatofint).toString();
		var result1 = Math.floor(output);
		$("#quotient").append(result1);
		$("#a-append").append($("#intaEdit").val());
		$("#b-append").append($("#intbEdit").val());
		$("#integervalueget").append($("#intaEdit").val());
		$("#floatget").append($("#intbEdit").val());
		$('#firstValue').append($("#floatget").text());
		$('#secondValue').append($("#quotient").text());
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$('#withoutTypeCast').removeClass('opacity00');
			$("#xstoresinFloat").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
				var divide = $("#intaEdit").val();
		 		var floatofint = $("#intbEdit").val();
				var output =  (divide/floatofint).toString();
				var result1 = Math.floor(output);
				$("#result1").text(result1);
				$('.introjs-nextbutton').hide();
					$("#fliptoValues").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						t1.to("#valueaFlip", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
				    		$("#valueaFlip").text($("#intaEdit").val());
				    		intro.refresh();
							t1.to("#valueaFlip", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
								$("#intaEdit").effect('highlight',  {color: "#C8FE2E"}, 3000);
								t1.to("#valuebFlip", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
									$("#valuebFlip").text($("#intbEdit").val());
									intro.refresh();
									$("#intbEdit").effect('highlight',  {color: "#C8FE2E"}, 3000);
									t1.to("#valuebFlip", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
									var divide = $("#intaEdit").val();
							 		var floatofint = $("#intbEdit").val();
									var output =  (divide/floatofint).toString();
									var result1 = Math.floor(output);
									$("#integervalueget1").append($("#intaEdit").val()).append(".0");
									$("#floatget1").append($("#intbEdit").val()).append(".0");
									var divide = $("#floatget1").text();
									var floatofint = $("#integervalueget1").text();
									var result =  (floatofint/divide).toString().substring(0, 8);
									$('#quotient1').append(result);
									$('#firstValue1').append($("#floatget1").text());
									$('#secondValue1').append($("#quotient1").text());
									$('#remainderval1').append('0');
									$("#valuebFlip2").append($("#intbEdit").val());
									$("#valueaFlip2").append($("#intaEdit").val());
									$("#quotientResult1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
										t1.to("#result1", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
											    $("#result1").append(".000000");
												intro.refresh();
												t1.to("#result1", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
													intro.nextStep();
													}});
												}}); 
											});
										}});
									}});
								}});
							}});
						});
					});
				});
		break;
   case "withTypeCast":
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$('#withTypeCast').removeClass('opacity00');
				$("#xstoresinFloat").effect('highlight',  {color: "#C8FE2E"}, 3000);
				var l = $("#xstoresinFloat").offset();
				$("#xstoresinFloat1").offset({"top": l.top,"left": l.left});
				TweenMax.to("#xstoresinFloat1", 0.5, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
					$("#xstoresinFloat1").removeClass("opacity00");
					$('.introjs-nextbutton').show();
					$("#floatOf").removeClass("opacity00");	
					$("#fliptoValues1").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						t1.to("#valueaFlip1", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
			    			$("#valueaFlip1").text($("#intaEdit").val());
							intro.refresh();
							t1.to("#valueaFlip1", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
					 			t1.to("#valuebFlip1", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
							    	$("#valuebFlip1").text($("#intbEdit").val());
									intro.refresh();
									t1.to("#valuebFlip1", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
										t1.to("#valueaFlip2", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
											$("#floatequalconvert").removeClass("opacity00");
											$('#closedParenthesis').removeClass('opacity00');
							    			$("#valueaFlip2").append(".000000");
											intro.refresh();
											t1.to("#valueaFlip2", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
												$('.introjs-nextbutton').show();	
												t1.to("#valuebFlip2", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
												    $("#valuebFlip2").append(".000000");
													intro.refresh();
													t1.to("#valuebFlip2", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
													var divide = $("#intaEdit").val();
									    			var floatofint = $("#intbEdit").val();
										 			var output =  (divide/floatofint).toString().substring(0, 8);
										 			$('#result3').append(output);
													$("#quotient1").effect('highlight',  {color: "#C8FE2E"}, 3000);
													$("#quotientResult3").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
														$("#result3").removeClass("opacity00");
														if ($("#result3").text().indexOf(".") !== -1) {
												    		$("#result3").text();
															intro.refresh();
															intro.nextStep();
														} else {
														t1.to("#result3", 0.5, {opacity:1, rotationX: -90, onComplete: function() {
											    			$("#result3").append(".000000");
															t1.to("#result3", 0.5, {opacity:1, rotationX: 0, onComplete: function() {
																intro.nextStep();
																	}}); 
																}});
															}
														});
													}});
												}}); 
											}});
										}}); 
									}});
								}}); 
							}});
						}}); 
					});
				}});
			});
		break;
	case "restartBtn":
		$('.introjs-nextbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
		typing('.introjs-tooltiptext', "Click to restart.", function() {
			$("#restartBtn").removeClass("opacity00");
			$('#intaEdit').val("");
	  		$('#intbEdit').val("");
			});
			});
		break;
		}
	});
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$('#informationdiv').html("<ul><li id='list1' class='opacity00'>Type conversion means converting "+
			"the type of given value to another type.</li>"+
  			"<li id='list2' class='opacity00'>When the Type conversion is performed explicitly by the programmer by using type casting operator "+
  			"i.e. parenthesis or <b class='color-green' >()</b>, it is called <b class='color-green'>type casting</b> or <b class='color-green'>"+
  			"explicit type conversion</b>.</li></ul>");
  		typing('.introjs-tooltiptext', "Let us consider an example on type casting in detail.", function() {  
		});
		setTimeout(function () {
			$("#list1").fadeTo(300, 1, function() {
				$("#list2").fadeTo(300, 1, function() {
					$('.introjs-nextbutton').show();
				});
			});	
		})
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 5;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31  &&  (charCode < 48 || charCode > 57) && (charCode >= 96 || charCode <= 105)) 
        return false;
    return true;
}