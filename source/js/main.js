;
var scripts = scripts || {};

scripts.Common = {
	detecting: function () {
		// global technology detecting
		$('html').removeClass('no-js');
	},

	jStylingInit: function () {
		if ($('.form_custom').length) {
			$.jStyling.createSelect($('.form_custom select'));
			$.jStyling.createCheckbox($('.form_custom input[type=checkbox]'));
			$.jStyling.createRadio($('.form_custom input[type=radio]'));
			$.jStyling.createFileInput($('.form_custom input[type=file]'));
			$.jStyling({'fileButtonText': 'Browse file'})
		}
	},

	jsPlaceholderInit: function () {
		$('input[placeholder], textarea[placeholder]').placeholder();
	},

	init: function () {
		var scripts = this;

		scripts.detecting();

		$(function () {
//			if (!window.Modernizr || !Modernizr.generatedcontent) {
//
//			}

			scripts.jStylingInit();
		});

		return scripts;
	}
};

scripts.Common.init();
