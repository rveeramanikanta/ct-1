function structuresReady() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
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
			tooltipClass: "hide",
			position:"bottom" 
		},{
			element :'#exampleOfStudent', 
			intro :'',
			tooltipClass: "hide",
			position:"bottom"
		},{
			element :'#members', 
			intro :'',
			position:"bottom"
		},{
			element :'#studentStruct', 
			intro :'',
			position:"bottom"
		},{
			element :'#studentVariables', 
			intro :'',
			position:"bottom"
		},{
			element :'#tables', 
			intro :'',
			position:"right"
		},{
			element :'#declarationSyntax', 
			intro :'',
			position:"left"
		},{
			element :'#keyWord',
			intro :'',
			position:"bottom"
		},{
			element :'#structureName',
			intro :'',
			position:"bottom"
		},{
			element :'#semicolon',
			intro :'',
			position:"right"
		},{
			element :'#exampleStructureDeclaration',
			intro :'',
			position:"right"
		},{
			element :'#structutreIdentifier',
			intro :'',
			position:"right"
		},{
			element :'#name',
			intro :'',
			position:"right"
		},{
			element :'#id',
			intro :'',
			position:"right"
		},{
			element :'#long',
			intro :'',
			position:"right"
		},{
			element :'#definitionSyntax',
			intro :'',
			position:"right"
		},{
			element :'#keyWord1',
			intro :'',
			position:"right"
		},{
			element :'#structureName1',
			intro :'',
			position:"right"
		},{
			element :'#structureVariables',
			intro :'',
			position:"right"
		},{
			element :'#restartBtn',
			intro :'Click to restart.',
			position:"right"
		}]
	});
	
	intro.onbeforechange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "declarationDefination" :
		break;
		case "exampleOfStudent" :
			
		break;
		case "members" :
		break;
		case "studentStruct" :
		break;
		case "studentVariables" :
			$("#storeS1, #storeS2, #storeS3").addClass("opacity00");
		break;
		case "tables" :
			$("#storeS1, #storeS2, #storeS3").removeClass("opacity00");
			$("#structureDeclaration").addClass("opacity00");
		break;
		case "declarationSyntax" :
			$("#structureDeclaration").removeClass("opacity00");
		break;
		case "keyWord" :
		break;
		case "structureName" :
		break;
		case "semicolon" :
			$('#exampleStructureDeclaration').addClass('opacity00');
		break;
		case "exampleStructureDeclaration" :
			$('#exampleStructureDeclaration').removeClass('opacity00');
		break;
		case "structutreIdentifier" :
		break;
		case "name" :
		break;
		case "id" :
		break;
		case "long" :
			$('#definitionSyntax').addClass('opacity00');
		break;
		case "definitionSyntax" :
			$('#definitionSyntax').removeClass('opacity00');
		break;
		case "keyWord1" :
		break;
		case "structureName1" :
		break;
		case "structureVariables" :
		break;
		}
	});
	
	
	intro.onafterchange(function(targetElement) { 
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		
		
		
		if (intro._introItems[intro._currentStep]["tooltipClass"] == "hide") {
			intro._introItems[intro._currentStep]["animation"] = "repeat";
		}
		
		if (intro._introItems[intro._currentStep]["isCompleted"]) {
			if (intro._currentStep != 2) {
				$('.introjs-prevbutton').show();
			}

			$('.introjs-nextbutton').show();
			return;
		}
		
		if (intro._introItems[intro._currentStep]["animation"] != "repeat") {
			intro._introItems[intro._currentStep]["isCompleted"] = true;
		}
		
		
		
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "declarationDefination" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#declarationDefination").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"Let us consider an example." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "exampleOfStudent" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#declarationDefination, #exampleOfStudent").removeClass("opacity00");
				setTimeout(function(){
					intro.nextStep();
				}, 800); 
			});
		break;
		case "members" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext'," The variables <span class='ct-code-b-yellow'>number</span>, "
		  				+"<span class='ct-code-b-yellow'>marks</span>, <span class='ct-code-b-yellow'>section</span> "
		  				+"are called <span class='ct-code-b-yellow'>members</span> (or)"
		  				+ " <span class='ct-code-b-yellow'>fields</span>." ,function() {
		  			$('.introjs-nextbutton').show();
				});
			});
		break;
		case "studentStruct" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"<ul><li><span class='ct-code-b-yellow'>struct</span> keyword is used to define a structure."
		  				+ "</li><li>A <span class='ct-code-b-yellow'>structure</span> is used to create a new user defined datatype.</li></ul>" ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "studentVariables" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"This is a <span class='ct-code-b-yellow'>s1</span> structure definition <span class='ct-code-b-yellow'>s1</span>.<br><br>The variables"
		  				+ " <span class='ct-code-b-yellow'>s1</span>, <span class='ct-code-b-yellow'>s2</span> and"
		  				+ " <span class='ct-code-b-yellow'>s3</span> are created for user defined datatype <span class='ct-code-b-yellow'>student</span>." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "tables" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv, #storeS1, #storeS2, #storeS3").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"The members can be accessed by using the <span class='ct-code-b-yellow'>dot</span> operator."
		  				+ "<br/><b <span class='ct-code-b-yellow'>For example</b><br/>To access the members of student <span class='ct-code-b-yellow'>s1</span> we use <br/><span class='ct-code-b-yellow'>s1.number s1.marks s1.section</span><b></b>"
		  				+ ".<br/><br/>To access the members of student <span class='ct-code-b-yellow'>s2</span> we use</br> <span class='ct-code-b-yellow'>s2.number s2.marks s2.section</span>."
		  				+ "</br><br/>To access the  members of student <span class='ct-code-b-yellow'>s3</span> we use </br><span class='ct-code-b-yellow'>s3.number s3.marks s3.section.<span>",function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "declarationSyntax" :
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#structureDeclaration").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"The <span class='ct-code-b-yellow'>syntax</span> for a structure is as follows."
		  					+ " declaration." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "keyWord" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The declaration begins with the keyword <span class='ct-code-b-yellow'>struct</span>." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		
		case "structureName" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<ul><li>The <span class='ct-code-b-yellow'>structure_name</span> is an identifier, which is optional" 
		  				+ " and is declared by user.</li> <li>When a structure is declared,<span class='ct-code-b-yellow'> memory is not allocated</span> for the structure."
		  				+ " .</li></ul>" ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		
		case "semicolon" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"A structure declaration ends with a <span class='ct-code-b-yellow'>semicolon(;)</span>." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "exampleStructureDeclaration" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#exampleStructureDeclaration').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"Let us consider the example of structure declaration." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "structutreIdentifier" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<ul><li>The declaration begins with the keyword <span class='ct-code-b-yellow'>struct</span>.</li><li>"
		  				+"The identifier <span class='ct-code-b-yellow'>employee</span> is the name of the structure.</li></ul>", function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "name" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The member <span class='ct-code-b-yellow'>name</span>, is a char array of"
		  				+ "size <span class='ct-code-b-yellow'>20</span> type.", function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "id" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The member <span class='ct-code-b-yellow'>id</span> is of type"
		  				+ " <span class='ct-code-b-yellow'>int</span>.", function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "long" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The member <span class='ct-code-b-yellow'>salary</span> is of type"
		  				+ " <span class='ct-code-b-yellow'>float</span>.", function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "definitionSyntax" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#definitionSyntax').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"The <span class='ct-code-b-yellow'>syntax</span> of structure <b class='ct-code-b-yellow'>definition</b>." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "keyWord1" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The definition begins with the keyword <span class='ct-code-b-yellow'>struct</span>." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "structureName1" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>structure_name</span> is an identifier." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "structureVariables" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"These are the structure variables that are defined.<br><br> At this point, memory is allocated for all"
		  				+ " the<b class='ct-code-b-yellow'> structure variables</b>." ,function() {
		  			$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		});
			});
		break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '110px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#restartBtn").removeClass("opacity00");
			});
		break;
		}
	});
	
	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton').hide();
	$("#informationdiv").removeClass("visibility-hidden");
	$("#informationdiv").append("<ul><li id='line1' class='opacity00'>A <b class='color-green'>structure</b> is a derived datatype. "
					+ "It is used to organize a group of related data items of different datatypes.</li>"
					+ "<li id='line2' class='opacity00'>A structure is created using the keyword <b class='color-green'>struct</b>.</li>"
					+ "<li id='line3' class='opacity00'>Each data item in a structure is called a <b class='color-green'>member</b>"
					+ " or a <b class='color-green'>field</b>.</li>"
 					+ "<li id='line4' class='opacity00'>The advantage of using a <b class='color-green'>structure</b> "
 					+ "is that the accessibility of the members becomes easier,"
 					+ " since all the members of a <b class='color-green'>structure</b> are allocated memory in a "
 					+ "<b class='color-green'>sequence</b>, this <b class='color-green'>minimizes</b>"
 					+ " the memory access time.</li></ul>")
 					intro.refresh();
 	TweenMax.to($("#line1"), 0.5, {opacity: 1, onComplete: function() {
 		TweenMax.to($("#line2"), 0.5, {opacity: 1, onComplete: function() {
 			TweenMax.to($("#line3"), 0.5, {opacity: 1, onComplete: function() {
 				TweenMax.to($("#line4"), 0.5, {opacity: 1, onComplete: function() {
 					$('#line4').append('&emsp; <a class="introjs-button user-btn">Next &#8594;</a>');
 					intro.refresh();
 					$('.user-btn').click(function() {
 						$(this).remove();
 						$("#informationdiv").addClass("zindex");
 						intro.nextStep();
 					});
 				}});
 			}});
 		}});
 	}});
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	})
}