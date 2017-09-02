var intro = null;

var sampleOfPrintfReady = function() {
	intro = introJs();
	$("#typeWriteId").hide();
	$("#consoleId").hide();
	startIntro();
	
	$("#startBtn").click(function() {
		$("#consoleId").show();
		$("#typeWriteId").show();
		$("#startBtn").addClass("hidden");
		$('.introjs-nextbutton').show();
		$('.introjs-nextbutton').css("opacity",0);
		$('.introjs-nextbutton').click();
		$("#preBody").addClass("hidden");
	    $("#typeWriteId").removeClass("hidden");
	  	setTimeout(function(){
		    $("#typeWriteId").typewriting('#include&ltstdio.h&gt \nvoid <b>main()</b> {\n\t<b>printf</b>(<span class = "color-green">"Hello World!\\n"</span>);\n\t<b>printf</b>("<span class = "color-green">I am learning C programming\\n"</span>);\n\t<b>printf</b>(<span class = "color-green">"Bye!"</span>);\n\t}\n}',
				{
					"typing_interval" : 25,
					"cursor_color" : 'white'
				},
				function() {
					$("head").append("<style>.typingCursor::after{ width : 0px; }</style>");
					$("#typeWriteId").addClass("hidden");
					$('.introjs-nextbutton').addClass("opacity00").fadeTo(2000,1);
					$("#preBody").addClass("introjs-showElement introjs-relativePosition").removeClass("hidden");
				    $('.introjs-nextbutton').removeClass("opacity00");
				    $('.introjs-nextbutton').show();
				});
			},2000);
		});

		$("#reStartBtn").click(function() {
            window.location.href =  "sample-of-printf.jsp?restart=1";
		});

		$('.introjs-nextbutton').click(function() {
        	if(intro._currentStep == 2){
               	$("#preBody").removeClass("introjs-showElement introjs-relativePosition introjs-fixParent");
            }  
               if (intro._currentStep == 4) {
               	$("#printlnId1").removeClass("hidden").addClass("opacity00");
               }
			if (intro._currentStep == 5) {
				setTimeout(function() {
					$("#printlnId1").fadeTo(1300, 1);
				}, 1300);
			}
			if(intro._currentStep == 6) {
				$("#printlnId1").css('color','white');
				$("#printlnId2").removeClass("hidden").addClass("opacity00");
			}
			if (intro._currentStep == 7) {
				setTimeout(function() {
					$("#printlnId2").fadeTo(1300, 1);   
				}, 1300);
			}
			if(intro._currentStep == 8) {
				$("#printlnId2").css('color','white');
				$("#printlnId3").removeClass("hidden").addClass("opacity00");
			}
			if (intro._currentStep == 9) {
				setTimeout(function() {
					$("#printlnId3").fadeTo(1300, 1); 
				}, 1300);
			}
			if (intro._currentStep == 10) {
				$("#printlnId3").css('color','white');
				$("#reStartBtn").removeClass("hidden").addClass("opacity00");
			}

			if ($("#reStartBtn").hasClass("introjs-showElement")) {
				$('.introjs-nextbutton').hide();
				$("#reStartBtn").fadeTo(1300, 1);
			}
		});
}

function startIntro() {
	intro.setOptions({
		exitOnEsc: false,
		exitOnOverlayClick: false,
		showStepNumbers : false,
		keyboardNavigation : false,
		steps : [
				{
					element : '#startBtn',
					intro : "Click to start",
					position : "right"
				},
				{
					element : '#typeWriteId',
					intro : "Below sample code prints three lines to the console.",
					position : "top"
				},
				{
					element : '#line1',
					intro : "It is a <span class = 'color-yellow'>preprocessor directive</span> which includes the <b>header file</b> <span class = 'color-yellow'>stdio.h</span> in our program.",
					position : "top"
				},
				{
					element : '#line2',
					intro : "This is the <span class = 'color-yellow'>main()</span> method where the program execution starts.",
					position : "top"
				},
	
				{
					element : '#line3',
					intro : 'The statement <span class = "color-yellow" id = "samelineDiv">printf("Hello World!\\n");</span> prints <span class = "color-yellow">Hello World!</span> and a new-line (<span class = "color-yellow">\'\\n\'</span>) character after that.',
					position : "bottom"
				},
				{
					element : '#printlnId1',
					intro : "<span class = 'color-yellow'>Hello World!</span> is printed to the console.",
					position : "bottom"
				},
				{
					element : '#line4',
					intro : "This statement prints <span class = 'color-yellow' style = 'white-space: nowrap'>I am learning C programming</span> and a new-line (\'\\n\') character after that.",
					position : "bottom"
				},
				{
					element : '#printlnId2',
					intro : "<span class = 'color-yellow'>I am learning C programming</span> appears on the next line in the console.<br> It is printed in the new line because of <span class = 'color-yellow'>\'\\n\'</span>(a new line character) present in the previous line.",
					position : "bottom"
				},
				{
					element : '#line5',
					intro : "This statement prints <span class = 'color-yellow'>Bye!</span>.",
					position : "bottom"
				},
				{
					element : '#printlnId3',
					intro : "<span class = 'color-yellow'>Bye!</span> appears on the next line in the console.<br>It is printed in the new line because of <span class = 'color-yellow'>\'\\n\'</span>(a new line character) present in the previous line.",
					position : "bottom"
				},
				{
					element : '#line6',
					intro : "This is the end of the <span class = 'color-yellow'>main()</span> function where the program execution ends.",
					position : "bottom"
				},
				{
					element : '#reStartBtn',
					intro : "Click to restart.",
					position : "right",
				} ]
			});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
}