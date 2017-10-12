function polynomialArrayReady() {
	if (iVal == 1) {
		$('#output').append('<span id="power1Span">Enter highest power of first polynomial : <input class="usr-txt" size="3" maxlength="1"'
						+ ' id="create1Text" type="text"/></span>');
		coeffValidation('#create1Text', '', '', '', 1, true);
	/*} else if (iVal == 2) {
		$('#output').append('<div id="power2Span">Enter highest power of second polynomial : <input class="usr-txt" size="3" maxlength="1"'
						+ ' id="create2Text" type="text"/></div>');
		coeffValidation('#create2Text', '', '', '', '', true);*/
	}

}

function initIntroJS() {
	
}

function coeffValidation(id, power, iVal, hpower, i, flag) {
	$(".usr-txt").off("keydown");
	$(id).effect('highlight', {color: 'blue'}, 800).focus();
	$(id).on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
		if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if (e.keyCode == 13 && $(this).val().length > 0) {	
	    	$(this).attr("disabled", true);
			if (flag) {
				$('.introjs-nextbutton').show();
			} else {
		    	if (hpower == iVal) {
					e.preventDefault();
					$('.introjs-nextbutton').show();
					
					if (i == 1) {
						$('#output').append('<div id="power2Span">Enter highest power of second polynomial : <input class="usr-txt" size="3"'
								+ ' maxlength="1" id="create2Text" type="text"/></div>');
						coeffValidation('#create2Text', '', '', '', '', true);
					}
					
				} else {
					$('.introjs-nextbutton').hide();
					power--;
					iVal++;
					$("#output").append('<div id="coeff' + i + 'Span' + iVal +'">Enter coeff value for ' + (power) + ' degree term : '  
										+ '<input class="usr-txt" size="3" id="create' + i + 'Text' + iVal + '" maxlength="2" type="text"/></div>');
					coeffValidation('#create' + i + 'Text' + iVal, power, iVal, hpower, i, false);
			    }
			}
   		} else {
   			$('.introjs-nextbutton').hide();
   		}
	});
}
