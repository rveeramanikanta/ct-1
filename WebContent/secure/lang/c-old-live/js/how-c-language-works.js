var intro;
var typingInterval = 5;
var tl = new TimelineLite();

var howCLanguageWorksReady = function() {
	$(".line").hide();
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#heading",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#animationDiv",
			intro : "",
			tooltipClass : "hide"
		},{
			element : "#restart",
			intro : "",
			tooltipClass : "hide"
		}
		]});
	
	intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "heading":
			$('.introjs-nextbutton').hide();
			$('#heading').popover({
				placement: 'right',
				html: true,
				trigger: "focus",
				content: '<div id="popover0"></div>',
			});
			$('#heading').popover('show');
			$(".popover").css("top" , "0");
			var text = "Let us see how the c program will run in the system.";
				typing("#popover0", text, function(){
 					$('#popover0').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="user();">Next &#8594;</span></div>');
			});
			
		break;	
		case "animationDiv":
			$('#heading').popover('hide');
			$(".tooltip-height").remove();
			$(".introjs-helperLayer ").one('transitionend', function() {
				TweenMax.to("#user", 1, {"opacity" : "1", onComplete:function() {
					$('#user').popover({
						placement: 'bottom',
						tip: "#user",
						html: true,
						trigger: "focus",
						content: '<div id="popover2"></div>',
					});
					$('#user').popover('show');
					var text = "Here, user is the person who uses computer for computer programming.";
					typing("#popover2", text, function(){
						$('#popover2').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="hardware();">Next &#8594;</span></div>');
		
					});
				}});
				
			});
			break;
			
		}
	});
	intro.start();
	$('.introjs-nextbutton').show();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$(typingId).append("<div></div>");
	$(typingId + " > div:last-child").typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId + " > div:last-child").removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function user() {
	intro.nextStep();
}

function hardware() {
	$(".tooltip-height").remove();
	$('#user').popover('hide');
	TweenMax.to("#hardware", 1, {"opacity" : "1", onComplete:function() {
		$('#hardware').popover({
			placement: 'bottom',
			tip: "#hardware",
			html: true,
			trigger: "focus",
			content: '<div id="popover3"></div>',
		});
		$('#hardware').popover('show');
		var text = "This is the machine which can understand only <b>machine language</b> i.e. 0's and 1's.";
		typing("#popover3", text, function(){
			$('#popover3').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="os();">Next &#8594;</span></div>');

		});
	}});
}

function os() {
	$(".tooltip-height").remove();
	$('#hardware').popover('hide');
	TweenMax.to("#os", 1, {"opacity" : "1", onComplete:function() {
		$('#os').popover({
			placement: 'bottom',
			tip: "#os",
			html: true,
			trigger: "focus",
			content: '<div id="popover4"></div>',
		});
		$('#os').popover('show');
		var text = "<ul>"
						+ "<li>Operating System provides communication between user and hardware.</li>"
						+ "<li>Software is a soul for Hardware.</li>" 
						+ "<li>Operating system consists of two types of softwares. They are :</li>"
						+ "<ol><li>Application Software</li><li>System Software</li></ol>"
				+ "</ul>";
		typing("#popover4", text, function(){
			$("#arrowMark1").show();
			TweenMax.to("#arrowMark1", 1, {attr:{x2: "42%", y2: "11%" }, onComplete:function(){
				$("#arrowMark2").show();
				TweenMax.to("#arrowMark2", 1, {attr:{x2: "65.5%", y2: "11%" }, onComplete:function(){
					$('#popover4').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="types();">Next &#8594;</span></div>');
				}});
			}});
		});
	}});
}

function types() {
	$(".tooltip-height").remove();
	$('#os').popover('hide');
	$("#line1").show();
	TweenMax.to("#line1", 1, {attr:{x2: "50%", y2: "23%" }, onComplete:function(){
		$("#arrowMark3").show();
		TweenMax.to("#arrowMark3", 1, {attr:{x2: "37%", y2: "32%"}});
		$("#arrowMark4").show();
		TweenMax.to("#arrowMark4", 1, {attr:{x2: "62%", y2: "32%" }, onComplete:function() {
			TweenMax.to("#ApplicationSoftware", 1, {"opacity" : "1", onComplete:function() {
				TweenMax.to("#systemSoftware", 1, {"opacity" : "1", onComplete:function() {
					$('#ApplicationSoftware').popover({
						placement: 'left',
						tip: "#ApplicationSoftware",
						html: true,
						trigger: "focus",
						content: '<div id="popover5"></div>',
					});
					$('#ApplicationSoftware').popover('show');
					var text = "Application software is used to develop different applications.";
					typing("#popover5", text, function(){
						$('#popover5').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="matter1();">Next &#8594;</span></div>');
					});
				}});
			}});
		}});
	}});
}

function matter1() {
	$('#ApplicationSoftware').popover({
		placement: 'left',
		tip: "#ApplicationSoftware",
		html: true,
		trigger: "focus",
		content: '<div id="popover5"></div>',
	});
	$('#ApplicationSoftware').popover('show');
	var text = "Some of the application softwares are:";
	typing("#popover5", text, function(){
		$('#popover5').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="typeOneExamples();">Next &#8594;</span></div>');
	});
}

function typeOneExamples() {
	$(".tooltip-height").remove();
	$("#line2").show();
	TweenMax.to("#line2", 1, {attr:{x2: "35%", y2: "51.7%" }, onComplete:function(){
		$("#line6").show();
		TweenMax.to("#line6", 1, {attr:{x2: "37%", y2: "51.5%" }, onComplete:function(){
			TweenMax.to("#word", 1, {"opacity" : "1", onComplete:function() {
				TweenMax.to("#line2", 1, {attr:{x2: "35%", y2: "58.7%" }, onComplete:function(){
					$("#line7").show();
					TweenMax.to("#line7", 1, {attr:{x2: "37%", y2: "58.5%" }, onComplete:function(){
						TweenMax.to("#paint", 1, {"opacity" : "1", onComplete:function() {
							TweenMax.to("#line2", 1, {attr:{x2: "35%", y2: "65.7%" }, onComplete:function(){
								$("#line8").show();
								TweenMax.to("#line8", 1, {attr:{x2: "37%", y2: "65.5%" }, onComplete:function(){
									TweenMax.to("#games", 1, {"opacity" : "1", onComplete:function() {
										TweenMax.to("#line2", 1, {attr:{x2: "35%", y2: "72.7%" }, onComplete:function(){
											$("#line9").show();
											TweenMax.to("#line9", 1, {attr:{x2: "37%", y2: "72.5%" }, onComplete:function(){
												TweenMax.to("#ppt", 1, {"opacity" : "1", onComplete:function() {
													TweenMax.to("#line2", 1, {attr:{x2: "35%", y2: "78.9%" }, onComplete:function(){
														$("#line10").show();
														TweenMax.to("#line10", 1, {attr:{x2: "37%", y2: "79%" }, onComplete:function(){
															TweenMax.to("#c", 1, {"opacity" : "1", onComplete:function() {
																$('#popover5').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="typeTwoinfo();">Next &#8594;</span></div>');
															}});
														}});
													}});
												}});
											}});
										}});
									}});
								}});
							}});
						}});
					}});
				}});
			}});
		}});
	}});
}

function typeTwoinfo() {
	$(".tooltip-height").remove();
	$('#ApplicationSoftware').popover('hide');
	$('#systemSoftware').popover({
		placement: 'right',
		tip: "#systemSoftware",
		html: true,
		trigger: "focus",
		content: '<div id="popover6"></div>',
	});
	$('#systemSoftware').popover('show');
	var text = "Computer hardware and application programs run with the help of system software.";
	typing("#popover6", text, function(){
		$('#popover6').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="matter2();">Next &#8594;</span></div>');
	});
}

function matter2() {
	$('#systemSoftware').popover({
		placement: 'right',
		tip: "#systemSoftware",
		html: true,
		trigger: "focus",
		content: '<div id="popover6"></div>',
	});
	$('#systemSoftware').popover('show');
	var text = "Some of the system softwares are:";
	typing("#popover6", text, function(){
		$('#popover6').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="typeTwoExamples();">Next &#8594;</span></div>');
	});
}

function typeTwoExamples() {
	$(".tooltip-height").remove();
	$('#systemSoftware').popover('hide');
	$("#line3").show();
	TweenMax.to("#line3", 1, {attr:{x2: "65%", y2: "51.6%" }, onComplete:function(){
		$("#line11").show();
		TweenMax.to("#line11", 1, {attr:{x2: "67%", y2: "51.5%" }, onComplete:function(){
			TweenMax.to("#compiler", 1, {"opacity" : "1", onComplete:function() {
				$('#animationDiv').popover({
					placement: 'right',
					html: true,
					trigger: "foc us",
					content: '<div id="popover1"></div>',
				});
				$('#animationDiv').popover('show');
				$(".popover").css("top" , "0");
				var text="<ul><li><b>complier:</b> It is a computer program which translates high level programming language" 
				+ " into a machine language for execution.Complier complies every program once at a time.</li></ul>";
				typing("#popover1", text, function(){
					$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="assembler();">Next &#8594;</span></div>');
				});
			}});
		}});
	}});
}

function assembler() {
	$(".tooltip-height").remove();
	TweenMax.to("#line3", 1, {attr:{x2: "65%", y2: "58.6%" }, onComplete:function(){
		$("#line12").show();
		TweenMax.to("#line12", 1, {attr:{x2: "67%", y2: "58.5%" }, onComplete:function(){
			TweenMax.to("#assembler", 1, {"opacity" : "1", onComplete:function() {
				var text="<ul><li><b>Assembler: </b>which translates assembly language program into machine language program" 
						+ "(i.e. 0's and 1's) which is understandable by the computer.</li></ul>";
				typing("#popover1", text, function(){
					$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="linker();">Next &#8594;</span></div>');
				});
			}});
		}});
	}});
}

function linker() {
	$(".tooltip-height").remove();
	TweenMax.to("#line3", 1, {attr:{x2: "65%", y2: "65.6%" }, onComplete:function(){
		$("#line13").show();
		TweenMax.to("#line13", 1, {attr:{x2: "67%", y2: "65.5%" }, onComplete:function(){
			TweenMax.to("#linker", 1, {"opacity" : "1", onComplete:function() {
				var text="<ul><li><b>linker: </b>It is a computer program, it takes one or more object " 
						+ " files generated by a complier and combines them.</li></ul>";
				typing("#popover1", text, function(){
					$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="loader();">Next &#8594;</span></div>');
				});
			}});
		}});
	}});
}

function loader() {
	$(".tooltip-height").remove();
	TweenMax.to("#line3", 1, {attr:{x2: "65%", y2: "72.6%" }, onComplete:function(){
		$("#line14").show();
		TweenMax.to("#line14", 1, {attr:{x2: "67%", y2: "72.5%" }, onComplete:function(){
			TweenMax.to("#loader", 1, {"opacity" : "1", onComplete:function() {
				var text="<ul><li><b>Loader: </b>Loader is a program that loads machine codes of a program into the system memory." 
							+ "It is a part of operating system, responsible for loading programs.</li></ul>";
				typing("#popover1", text, function(){
					$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="interpreter();">Next &#8594;</span></div>');
				});
			}});
		}});
	}});
}

function interpreter() {		
	$(".tooltip-height").remove();
	TweenMax.to("#line3", 1, {attr:{x2: "65%", y2: "78.9%" }, onComplete:function(){
	$("#line15").show();
	TweenMax.to("#line15", 1, {attr:{x2: "67%", y2: "79%" }, onComplete:function(){
		TweenMax.to("#interpreter", 1, {"opacity" : "1", onComplete:function() {
			var text="<ul><li><b>Interpreter: </b>An interpreter is a program which translates statements of a program into machine code." 
						+ " It will go to the next statement only after the translation and execution of the given computer programs statement.</li></ul>" 
			typing("#popover1", text, function(){
				$('#popover1').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="connection1();">Next &#8594;</span></div>');
			});												
		}});
	}});
	
	}});
}

function connection1() {
	$(".tooltip-height").remove();
	$('#systemSoftware').popover('hide');
	$("#line5").show();
	TweenMax.to("#line5", 1, {attr:{x2: "23%", y2: "51.5%" }, onComplete:function() {
		$("#arrowMark5").show();
		TweenMax.to("#arrowMark5", 1, {attr:{x2: "34.5%", y2: "51.5%" }, onComplete:function() {
			$('#line5').popover({
				  placement:'left',
					content: "<div id='popover7'></div>",
					container: '#svgDiv',
					html: true,
				}).popover("show");
			var text = "User can type and save the documents by using MS-word.";
			typing("#popover7", text, function(){
				$('#popover7').append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="connection12();">Next &#8594;</span></div>');
			}); 
		}});
	}});
}

function connection12() {
	$(".tooltip-height").remove();
	$('#systemSoftware').popover('hide');
	$("#arrowMark6").show();
	TweenMax.to("#arrowMark6", 1, {attr:{x2: "63.5%", y2: "51.5%" }, onComplete:function() {
		$('#arrowMark6').popover({
			  placement:'bottom',
				content: "<div id='popover8'></div>",
				container: '#svgDiv',
				html: true,
			}).popover("show");
		var text="When the user click on save button the complier first converts the entire high level language data to low level language.";
		typing("#popover8", text, function(){
			$('#popover8').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="connection13();">Next &#8594;</span></div>');
		}); 
	}});
}
 
function connection13() {
	$(".tooltip-height").remove();
	$('#systemSoftware').popover('hide');
	$("#line4").show();
	TweenMax.to("#line4", 1, {attr:{x2: "79%", y2: "51.5%" }, onComplete:function() {
		$("#arrowMark7").show();
		TweenMax.to("#arrowMark7", 1, {attr:{x2: "79%", y2: "17.5%" }, onComplete:function(){
			$('#arrowMark7').popover({
				  placement:'right',
					content: "<div id='popover9'></div>",
					container: '#svgDiv',
					html: true,
				}).popover("show");
			$('#popover9').parents('.popover').css("width","175px");
			var text="After converting into low level language, the file will be stored in the memory.";
			typing("#popover9", text, function(){
				$('#popover9').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="retrive1();">Next &#8594;</span></div>');
			});
		}});
	}});
}

function retrive1() {
	$(".tooltip-height").remove();
	$('#arrowMark7, #arrowMark6, #arrowMark5, #line17, #line5').popover('hide');
	$('#arrowMark7, #arrowMark6, #arrowMark5, #line17, #line5').hide();
	$("#line17").show();
	TweenMax.to("#line17", 1, {attr:{x2: "79%", y2: "51.5%" }, onComplete:function() {
		$("#arrowMark11").show();
		TweenMax.to("#arrowMark11", 1, {attr:{x2: "76%", y2: "51.6%" }, onComplete:function() {
			$('#line17').popover({
				  placement:'right',
					content: "<div id='popover13'></div>",
					container: '#svgDiv',
					html: true,
				}).popover("show");
			var text="If the user want to retrive the saved file then the machine data of that file will be sent to the complier.";
			typing("#popover13", text, function() {
				$('#popover13').append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="retrive11();">Next &#8594;</span></div>');
			});
		}});
	}});
}

function retrive11() {
	$(".tooltip-height").remove();
	$("#arrowMark6").hide();
	$("#arrowMark12").show();
	TweenMax.to("#arrowMark12", 1, {attr:{x2: "45%", y2: "51.5%" }, onComplete:function() {
		$('#arrowMark12').popover({
			  placement:'bottom',
				content: "<div id='popover14'></div>",
				container: '#svgDiv',
				html: true,
			}).popover("show");
		var text="Result will be again converted into high level language i.e. user language.";
		typing("#popover14", text, function() {
			$('#popover14').append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="retrive12();">Next &#8594;</span></div>');
		});
	}});
}

function retrive12() {
	$(".tooltip-height").remove();
	$("#line5").hide();
	$("#line18").show();
	TweenMax.to("#line18", 1, {attr:{x2: "79%", y2: "51.5%" }, onComplete:function() {
		$("#arrowMark5").hide();
		$("#line20").hide();
		$("#line19").show();
		TweenMax.to("#line19", 1, {attr:{x2: "23%", y2: "51.4%" }, onComplete:function() {
			$("#arrowMark13").show();
			TweenMax.to("#arrowMark13", 1, {attr:{x2: "23%", y2: "17.6%" }, onComplete:function() {
				$('#arrowMark13').popover({
					  placement:'left',
						content: "<div id='popover15'></div>",
						container: '#svgDiv',
						html: true,
					}).popover("show");
				var text="After converting into machine language file will be opened.";
				typing("#popover15", text, function(){
					$('#popover15').append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="connection2();">Next &#8594;</span></div>');
				});
			}});
		}});
	}});
}

function connection2() {
	$(".tooltip-height").remove();
	$('#arrowMark7, #arrowMark6, #line5, #arrowMark13, #arrowMark12, #line17').popover('hide');
	$("#line4, #arrowMark5, #arrowMark7, #arrowMark6, #line5, #line17, #arrowMark11, #arrowMark12, #line18, #arrowMark13, #line19").hide();
	$("#line16").show();
	TweenMax.to("#line16", 1, {attr:{x2: "23%", y2: "78.7%" }, onComplete:function() {
		$("#arrowMark10").show();
		TweenMax.to("#arrowMark10", 1, {attr:{x2: "34.5%", y2: "78.5%" }, onComplete:function() {
			$('#arrowMark10').popover({
				  placement:'left',
					content: "<div id='popover10'></div>",
					container: '#svgDiv',
					html: true,
				}).popover("show");
			var text="In the same way user want to develop an application through computer programs, he can write " 
				+ "using 'c' application software.";
			typing("#popover10", text, function(){
				$('#popover10').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="connection21();">Next &#8594;</span></div>');
			});
		}});
	}});
}
			
function connection21() {		
	$(".tooltip-height").remove();
	$("#arrowMark9").show();
	TweenMax.to("#arrowMark9", 1, {attr:{x2: "64.5%", y2: "51.5%" }, onComplete:function() {
		$('#arrowMark9').popover({
			  placement:'bottom',
				content: "<div id='popover11'></div>",
				container: '#svgDiv',
				html: true,
			}).popover("show");
		var text="The source code which is written by the user will be send to the complier to check syntax errors and to convert into machine level language.";
		typing("#popover11", text, function(){
			$('#popover11').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="connection22();">Next &#8594;</span></div>');
		});
	}});
}

function connection22() {			
	$(".tooltip-height").remove();
	TweenMax.to("#line4", 0, {attr:{x2:"76%", y2:"51.5%" }, onComplete:function() {
		TweenMax.to("#arrowMark7", 0, {attr:{x2:"79%", y2:"51.5%" }, onComplete:function() {
			$("#line4").show();
			TweenMax.to("#line4", 1, {attr:{x2: "79%", y2: "51.5%" }, onComplete:function() {
				$("#arrowMark7").show();
				TweenMax.to("#arrowMark7", 1, {attr:{x2: "79%", y2: "17.5%" }, onComplete:function(){
					$('#arrowMark7').popover({
						  placement:'right',
							content: "<div id='popover9'></div>",
							container: '#svgDiv',
							html: true,
						}).popover("show");
					var text="System will execute the program and the result will be stored as machine level language.";
					typing("#popover9", text, function(){
						$('#popover9').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="retrive2();">Next &#8594;</span></div>');
					});
				}});
			}});
		}});
	}});
}

function retrive2() {
	$(".tooltip-height").remove();
	$("#line4").hide();
	$('#arrowMark10, #arrowMark7, #arrowMark9, #line4').popover('hide');
	$('#arrowMark10, #arrowMark7, #arrowMark9, #line4, #line16').hide();
	$("#arrowMark7").hide();
	$("#line21").show();
	TweenMax.to("#line21", 1, {attr:{x2: "79%", y2: "51.5%" }, onComplete:function() {
		$("#arrowMark11").show();
		TweenMax.to("#arrowMark11", 1, {attr:{x2: "76%", y2: "51.6%" }, onComplete:function() {
			$('#line21').popover({
				  placement:'right',
					content: "<div id='popover16'></div>",
					container: '#svgDiv',
					html: true,
				}).popover("show");
			var text="It will give the result into low level language to the complier.";
			typing("#popover16", text, function() {
				$('#popover16').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="retrive21();">Next &#8594;</span></div>');
			});
		}});
	}});
}

function retrive21() {
	$(".tooltip-height").remove();
	$("#arrowMark9").hide();
	$("#arrowMark14").show();
	TweenMax.to("#arrowMark14", 1, {attr:{x2: "46.7%", y2: "80.2%" }, onComplete:function() {
		$('#arrowMark14').popover({
			  placement:'bottom',
				content: "<div id='popover17'></div>",
				container: '#svgDiv',
				html: true,
			}).popover("show");
		var text="Then the compiler will convert the result into high level language.";
		typing("#popover17", text, function(){
			$('#popover17').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="retrive22();">Next &#8594;</span></div>');
		});
	}});
}

function retrive22() {
	$(".tooltip-height").remove();
	$("#line16").hide();
	$("#arrowMark10").hide();
	$("#line20").show();
	TweenMax.to("#line20", 1, {attr:{x2: "23%", y2: "78.9%" }, onComplete:function() {
		$("#arrowMark15").show();
		TweenMax.to("#arrowMark15", 1, {attr:{x2: "23%", y2: "17.5%" }, onComplete:function() {
			$('#arrowMark15').popover({
				  placement:'left',
					content: "<div id='popover18'></div>",
					container: '#svgDiv',
					html: true,
				}).popover("show");
			var text="The output will be displayed to the user.";
			typing("#popover18", text, function(){
				$('#popover18').parents(".popover-content").append('<div class = "tooltip-height"><span class="btn-success ct-btn-next" onclick="removeAll();">Next &#8594;</span></div>');
			});
		}});
	}});
}

function removeAll() {
	$(".tooltip-height").remove();
	$('#arrowMark9, #arrowMark7, #arrowMark10,#arrowMark14, #arrowMark15, #arrowMark16, #arrowMark18, #line20, #line21').popover('hide');
	$("#line4, #arrowMark7,#line19,#line20,#line21, #line17, #arrowMark11, #arrowMark14, #line16, #arrowMark9, #arrowMark10, #arrowMark15, #arrowMark17, #arrowMark16").hide();
	intro.nextStep();
	$('#popover1').css("z-index","0");
	TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
		$('#restart').popover({
			  placement:'right',
				content: "<div id='popover12'></div>",
				container: '#svgDiv',
				html: true,
			}).popover("show");
		var text="Click to Restart.";
		typing("#popover12", text, function(){
			$("#restart").click(function(){
				location.reload(); 
			});
		});
	}});
}