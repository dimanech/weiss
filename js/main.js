$(document).ready(function () {

	$.jStyling.createSelect($('.form_custom select'));
	$.jStyling.createCheckbox($('.form_custom input[type=checkbox]'));
	$.jStyling.createRadio($('.form_custom input[type=radio]'));
	$.jStyling.createFileInput($('.form_custom input[type=file]'));
	$.jStyling({'fileButtonText': 'Browse file'})

	//$('input[placeholder], textarea[placeholder]').placeholder();

	//$.foundation.customForms.appendCustomMarkup();
	//$(".js-no-native select").sb();
	//$(".js-no-native input:check, .no-native input:radio").checkbox();
});
