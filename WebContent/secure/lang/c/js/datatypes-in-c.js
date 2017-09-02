function introGuide() {
	introcode = introJs();
	introcode.setOptions({
	showStepNumbers : false,
	showBullets : false,
	exitOnOverlayClick : false,
	exitOnEsc : false,
	keyboardNavigation : false,
	steps : [{
	        	 element : '#typingbox',
	        	 intro : '',
	        	 position : 'right',
	        	 tooltipClass : 'hide'
	         },
	         {
	        	 element : '#animationDiv',
	        	 intro : '',
	        	 tooltipClass : 'hide',
	        	 position : 'right'
	         },
	         {
	 			element : "#restartBtn",
	 			intro : "Click to restart",
	 			tooltipClass: "introjs-tooltip-min-width-custom",
	 			position : "right"
	 		}]
	});
	introcode.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
		case "typingbox":
			typingContent = '<ul><li><span class = color-green>Data types</span> allocates memory to a variable.</li><span id = "typing1"></span>' 
			typing('#typingbox',typingContent,function() {
				typingContent = '<li>In "C" language, we have <span class = color-green>four</span> different data types. They are:</li><ul><ul><li>Primary or scalar data types <span class = color-green>:</span> which are predefined in the system.</li><span id = "typing2"></span>' 
			 	typing('#typing1',typingContent,function(){
					typingContent = ' <li>Secondary or Derived data types <span class = color-green>:</span> these are derived from primitive data types.<span id = "typing3"></span></li>' 
				 	typing('#typing2',typingContent,function(){
						typingContent = ' <li>User defined data types <span class = color-green>:</span> these data types are derived by the user from primitive data types.</li><span id = "typing4"></span>' 
					 	typing('#typing3',typingContent,function() {
							typingContent = ' <li>Empty data type <span class = color-green>:</span> It specifies nothing to return.</li>' 
						 	typing('#typing4',typingContent,function() { 
								$('.introjs-tooltip').removeClass('hide');
								typingContent = 'Here, we can see different types of data types.'; 
								typing('.introjs-tooltiptext', typingContent,function() {
									$('.introjs-nextbutton').show();
								});
			 				});
					 	});
					});
			 	});
			});
		break;
		case "animationDiv":
			$('#animationDiv').css({'opacity' : '1'});
			$('.introjs-helperLayer').one('transitionend', function() {
				$('.introjs-nextbutton').hide();
				$(".introjs-tooltip").removeClass("hide");
				typingContent = 'Let us start.'; 
				typing('.introjs-tooltiptext', typingContent,function() {
					$('#datatypeDiv').fadeTo('1000',1,function() {
						$('#arrow1').css({'opacity':'1'});
						TweenMax.to("#arrow1", 1, {attr:{y2 :'25.4%', x2:'49.5%'},onComplete:function() {
							$('#arrow2').css({'opacity':'1'});
							TweenMax.to("#arrow2", 1, {attr:{y2 :'25.5%', x2:'11%'},onComplete:function() {
								$('#arrow3').css({'opacity':'1'});
								TweenMax.to("#arrow3", 1, {attr:{y2 :'33.5%', x2:'11%'},onComplete:function() { 
									$('#scalarDiv').fadeTo('1000',1,function() {
										$('#arrow4').css({'opacity':'1'});
										TweenMax.to("#arrow4", 1, {attr:{y2 :'33.5%', x2:'36.5%'},onComplete:function() {
											$('#derivedDiv').fadeTo('1000',1,function() {
												$('#arrow5').css({'opacity':'1'});
												TweenMax.to("#arrow5", 1, {attr:{y2 :'25.5%', x2:'61.5%'},onComplete:function() { 
													$('#arrow6').css({'opacity':'1'});
													TweenMax.to("#arrow6", 1, {attr:{y2 :'33.5%', x2:'61.5%'},onComplete:function() { 
														$('#userDiv').fadeTo('1000',1,function() {
															$('#arrow7').css({'opacity':'1'});
															TweenMax.to("#arrow7", 1, {attr:{y2 :'25.5%', x2:'85.5%'},onComplete:function() { 
																$('#arrow8').css({'opacity':'1'});
																TweenMax.to("#arrow8", 1, {attr:{y2 :'33.5%', x2:'85.5%'},onComplete:function() { 
																	$('#emptyDiv').fadeTo('1000',1,function() {
																		$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn1' onclick='nextBtn4()'>Next &#8594;</a>");
																	});
																}});
															}});
														});
													}});
												}}); 
											});
										}});
									});
								}});
							}});
						}});
					});
				});
			});
		break;
		case "restartBtn":
			$('.introjs-nextbutton').hide();
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
				$("#restartBtn").click(function() {
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


function typing(typingId,typingContent,callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval" : 30,
		"cursor_color" : "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
	});
}

function nextBtn4() { 
	$('.animation-nextbtn1').remove();
	setTimeout(function() {
		typingContent = 'Here are four types of <span class="color-yellow">scalar datatypes</span>.'; 
		typing('.introjs-tooltiptext', typingContent,function() {
			$('#arrow9').css({'opacity':'1'});
			TweenMax.to("#arrow9", 1, {attr:{y2 :'41%', x2:'11%'},onComplete:function() { 
				$('#arrow10').css({'opacity':'1'});
				TweenMax.to("#arrow10", 1, {attr:{y2 :'41%', x2:'12.5%'},onComplete:function() { 
					$('.subscalar1').fadeTo('1000',1,function() {
						TweenMax.to("#arrow9", 1, {attr:{y2 :'48.5%', x2:'11%'},onComplete:function() { 
							$('#arrow12').css({'opacity':'1'});
							TweenMax.to("#arrow12", 1, {attr:{y2 :'48.5%', x2:'12.5%'},onComplete:function() { 
								$('.subscalar2').fadeTo('1000',1,function() {
									TweenMax.to("#arrow9", 1, {attr:{y2 :'56%', x2:'11%'},onComplete:function() { 
										$('#arrow14').css({'opacity':'1'});
										TweenMax.to("#arrow14",1, {attr:{y2 :'56%', x2:'12.5%'},onComplete:function() { 
											$('.subscalar3').fadeTo('100/0',1,function() {
												TweenMax.to("#arrow9", 1, {attr:{y2 :'64%', x2:'11%'},onComplete:function() { 
													$('#arrow16').css({'opacity':'1'});
													TweenMax.to("#arrow16", 1, {attr:{y2 :'64%', x2:'12.5%'},onComplete:function() { 
														$('.subscalar4').fadeTo('1000',1,function() {
															$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn1' onclick='nextBtn8()'>Next &#8594;</a>");
														});
													}});
												}});
											});
										}});
									}});
								});
							}});
						}});
					});
				}});
			}});
		});
	},1000);
}

function nextBtn8() { 
	$('.animation-nextbtn1').remove(); 
	setTimeout(function() {
		typingContent = 'Here, we can see <span class="color-yellow">derived datatypes</span>.'; 
		typing('.introjs-tooltiptext', typingContent,function() {
			$('#arrow15').css({'opacity':'1'});
			TweenMax.to("#arrow15", 1, {attr:{y2 :'41%', x2:'36.5%'},onComplete:function() { 
				$('#arrow17').css({'opacity':'1'});
				TweenMax.to("#arrow17", 1, {attr:{y2 :'41%', x2:'38%'},onComplete:function() {
					$('.subderived1').fadeTo('1000',1,function() {
						TweenMax.to("#arrow15", 1, {attr:{y2 :'48.5%', x2:'36.5%'},onComplete:function() { 
							$('#arrow18').css({'opacity':'1'});
							TweenMax.to("#arrow18", 1, {attr:{y2 :'48.5%', x2:'38%'},onComplete:function() { 
								$('.subderived2').fadeTo('1000',1,function() {
									TweenMax.to("#arrow15", 1, {attr:{y2 :'56%', x2:'36.5%'},onComplete:function() { 
										$('#arrow19').css({'opacity':'1'});
										TweenMax.to("#arrow19", 1, {attr:{y2 :'56%', x2:'38%'},onComplete:function() { 
											$('.subderived3').fadeTo('1000',1,function() {
											TweenMax.to("#arrow15", 1, {attr:{y2:"64%" ,x2 :'36.5%'},onComplete:function() { 
													$('#arrow20').css({'opacity':'1'});
													TweenMax.to("#arrow20", 1, {attr:{y2 :'64%', x2:'38%'},onComplete:function() { 
														$('.subderived4').fadeTo('1000',1,function() {
															$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn1' onclick='nextBtn12()'>Next &#8594;</a>");
														});
													}});
												}});
											});
										}});
									}});
								});
							}});
						}});
					});
				}});
			}});
		});
	},1000);
}

function nextBtn12() { 
	$('.animation-nextbtn1').remove(); 
	setTimeout(function() {
		typingContent = 'We have two datatypes in <span class="color-yellow">user defined datatypes</span>.'; 
		typing('.introjs-tooltiptext', typingContent,function() {
			$('#arrow21').css({'opacity':'1'});
			TweenMax.to("#arrow21", 1, {attr:{y2 :'41%', x2:'61.5%'},onComplete:function() { 
				$('#arrow22').css({'opacity':'1'});
				TweenMax.to("#arrow22", 1, {attr:{y2 :'41%', x2:'63%'},onComplete:function() { 
					$('.subuser1').fadeTo('1000',1,function() {
						TweenMax.to("#arrow21", 1, {attr:{y2 :'48.5%', x2:'61.5%'},onComplete:function() { 
							$('#arrow23').css({'opacity':'1'});
							TweenMax.to("#arrow23", 1, {attr:{y2 :'48.5%', x2:'63%'},onComplete:function() { 
								$('.subuser2').fadeTo('1000',1,function() {
									$('.introjs-tooltipbuttons').append("<a style='background-color:green' class='introjs-button animation-nextbtn1' onclick='nextBtn14()'>Next &#8594;</a>");
								});
							}});
						}});
					});
				}});
			}});
		});
	},1000);
}

function nextBtn14() { 
	$('.animation-nextbtn1').remove(); 
	setTimeout(function() {
		typingContent = '<span class="color-yellow">Empty datatype</span> has only one datatype i.e., void.'; 
		typing('.introjs-tooltiptext', typingContent,function() {
			$('#arrow24').css({'opacity':'1'});
			TweenMax.to("#arrow24", 1, {attr:{y2 :'41%', x2:'85.5%'},onComplete:function() {  
				$('#arrow25').css({'opacity':'1'});
				TweenMax.to("#arrow25", 1, {attr:{y2 :'41%', x2:'88%'},onComplete:function() {
					$('.subempty1').fadeTo('1000',1,function() {
						$('.introjs-nextbutton').show();
					});
				}});
			}});
		});
	},1000);
}