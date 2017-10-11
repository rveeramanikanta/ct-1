function polynomialArrayReady() {
	$('#output').append('<span id="power1Span">Enter highest power of first polynomial : <input class="usr-txt" size="3" maxlength="1"'
					+ ' id="create1Text" type="text"/></span>');	
}

function initIntroJS() {
	
}

function coeffValidation(id, power, iVal, hpower, i) {
	$(".usr-txt").off("keydown");
	$('#create' + i + 'Text' + iVal).effect('highlight', {color: 'blue'}, 800).focus();
	$(id).on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (e.keyCode == 13 && $(this).val().length > 0) {	
	    	$(this).attr("disabled", true);
			if (hpower == iVal) {
				e.preventDefault();
				$('.introjs-nextbutton').show();
			} else {
				$('.introjs-nextbutton').hide();
				power--;
				iVal++;
				$("#output").append('<div id="coeff' + i + 'Span' + iVal +'">Enter coeff value for ' + (power) + ' degree term : '  
									+ '<input class="usr-txt" size="3" id="create' + i + 'Text' + iVal + '" maxlength="2" type="text"/></div>');
				coeffValidation('#create' + i + 'Text' + iVal, power, iVal, hpower, i);
		    }
   		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).val().length > max) {
			e.preventDefault();
		}
	});
}
