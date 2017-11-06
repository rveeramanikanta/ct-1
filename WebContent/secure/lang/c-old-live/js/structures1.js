var structuresReady = function() {
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
			element :'#enclosedBraces',
			intro :'',
			position:"left"
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
	intro.onafterchange(function(targetElement) { 
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		
		case "declarationDefination" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#declarationDefination").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"Let us consider example of structure declaration and definition." ,function() {
		  			$('.introjs-nextbutton').show();
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
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"These are called <span class='ct-code-b-yellow'>members</span> (or)"
		  				+ " <span class='ct-code-b-yellow'>fields</span>." ,function() {
		  			$('.introjs-nextbutton').show();
				});
			});
		break;
		case "studentStruct" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"<ul><li><span class='ct-code-b-yellow'>struct</span> keyword is used to define a structure."
		  				+ "</li><li><span class='ct-code-b-yellow'>struct</span> defines a new user defined datatype.</li></ul>" ,function() {
		  			$('.introjs-nextbutton').show();
				});
			});
		break;
		case "studentVariables" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"<ul><li>This is called structure definition.</li><li>Here structure variables"
		  				+ " <span class='ct-code-b-yellow'>s1</span>, <span class='ct-code-b-yellow'>s2</span> and"
		  				+ " <span class='ct-code-b-yellow'>s3</span> are created.</li></ul>" ,function() {
		  			$('.introjs-nextbutton').show();
				});
			});
		break;
		case "tables" :
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#informationdiv, #storeS1, #storeS2, #storeS3").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"<ul><li>The members can be accessed by using dot operator like s1.a s1.b s1.c,"
		  				+ " s2.a s2.b s2.c, s3.a s3.b s3.c</li><li>Here s1.a <span class='ct-code-b-yellow'>&#8800;</span> s2.a"
		  				+ " <span class='ct-code-b-yellow'>&#8800;</span> s3.a.<br> s1.b <span class='ct-code-b-yellow'>&#8800;</span>"
		  				+ " s2.b <span class='ct-code-b-yellow'>&#8800;</span> s3.b.<br> s1.c <span class='ct-code-b-yellow'>&#8800;</span>"
		  				+ " s2.c <span class='ct-code-b-yellow'>&#8800;</span> s3.c.</li></ul>" ,function() {
		  			$('.introjs-nextbutton').show();
				});
			});
		break;
		case "declarationSyntax" :
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
			$("#structureDeclaration").removeClass("opacity00");
		  		typing('.introjs-tooltiptext',"Now see the declaration of structure." ,function() {
		  			$('.introjs-nextbutton').show();
				});
			});
		break;
		case "keyWord" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The declaration begins with the keyword <span class='ct-code-b-yellow'>struct</span>." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "structureName" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<ul><li>The <span class='ct-code-b-yellow'>structure_name</span> is an identifier and it is optional" 
		  				+ ".</li><li><span class='ct-code-b-yellow'>structure_name</span> declared by user.</li><li>The declaration of a structure"
		  				+ " does not reserve any <span class='ct-code-b-yellow'>storage space</span>.</li></ul>" ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "enclosedBraces" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The list of declaration of its members must be enclosed in braces." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "semicolon" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"Structure declaration end with a <span class='ct-code-b-yellow'>semicolon(;)</span>." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "exampleStructureDeclaration" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#exampleStructureDeclaration').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"Let us consider the example of structure declaration." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "structutreIdentifier" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<ul><li>The declaration begins with the keyword <span class='ct-code-b-yellow'>struct</span>.</li><li>"
		  				+"The identifier <span class='ct-code-b-yellow'>employee</span> is the structure identifier.</li></ul>", function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "name" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The name member is a 20-element array with <span class='ct-code-b-yellow'>char</span> type." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "id" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>id</span> is simple member with "
		  				+ " <span class='ct-code-b-yellow'>int</span> type." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "long" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>salary</span> is simple member with"
		  				+ " <span class='ct-code-b-yellow'>float</span> type." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "definitionSyntax" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#definitionSyntax').removeClass('opacity00');
		  		typing('.introjs-tooltiptext',"Now see the definition of structure." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "keyWord1" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"The definition begins with the keyword <span class='ct-code-b-yellow'>struct</span>." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "structureName1" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"<span class='ct-code-b-yellow'>structure_name</span> is identifier." ,function() {
		  			$('.introjs-nextbutton').show();
		  		});
			});
		break;
		case "structureVariables" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		typing('.introjs-tooltiptext',"Definition of structure creates structure variables." ,function() {
		  			$('.introjs-nextbutton').show();
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
	$("#informationdiv").append("<ul><li id='line1' class='opacity00'>A <b class='color-green'>Structure</b> is a derived data type to"
					+ " organize a group of related data items of different data types referring to a single entity.</li>"
					+ "<li id='line2' class='opacity00'>Keyword <b class='color-green'>struct</b> is used for creating a structure.</li>"
					+ "<li id='line3' class='opacity00'>Each data item in a structure is called a <b class='color-green'>member</b>."
					+ " Sometimes these <b class='color-green'>members</b> are also called <b class='color-green'>fields</b>.</li>"
 					+ "<li id='line4' class='opacity00'>The advantage of using a structure is that the accessibility of members becomes easier"
 					+ " since all the members of a specific structure gets allocation of continuous memory and therefore minimizing"
 					+ " the memory access time.</li></ul>")
 	TweenMax.to($("#line1"), 0.5, {opacity: 1, onComplete: function() {
 		TweenMax.to($("#line2"), 0.5, {opacity: 1, onComplete: function() {
 			TweenMax.to($("#line3"), 0.5, {opacity: 1, onComplete: function() {
 				TweenMax.to($("#line4"), 0.5, {opacity: 1, onComplete: function() {
 					$('#line4').append('&emsp; <a class="introjs-button user-btn">Next &#8594;</a>');
 					$('.user-btn').click(function() {
 						$(this).remove();
 						intro.nextStep();
 					});
 				}});
 			}});
 		}});
 	}});
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