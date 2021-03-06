;
var scripts = scripts || {};

scripts.Common = {
	detecting: function () {
		// global technology detecting
		$('html').removeClass('no-js');
	},

	isModernBrowser: function () {
		if ( // modernizer alternative
			'querySelector' in document &&
			'localStorage' in window &&
			'addEventListener' in window 
			) {
			return true;
		} else {
			return false;
		}
	},

	jStylingInit: function () {
		if ($('.js-form-custom').length) {
			$.jStyling.createSelect($('.js-form-custom select'));
			$.jStyling.createCheckbox($('.js-form-custom input[type=checkbox]'));
			$.jStyling.createRadio($('.js-form-custom input[type=radio]'));
			$.jStyling.createFileInput($('.js-form-custom input[type=file]'));
			$.jStyling({'fileButtonText': 'Browse file'})
		}
	},

	jsPlaceholderInit: function () {
		$('input[placeholder], textarea[placeholder]').placeholder();
	},

    formSupport: function () {
        var inputs = $('input[type="password"],input[type="search"], input[type="text"], textarea, select'),
            validationItem = ".js-form-validation .l-form__item";

        inputs.wrap('<span class="form__input-box">');

        $("body").on("input propertychange", validationItem,function (e) {
            $(this).toggleClass("l-form__item_value", !!$(e.target).val());
        }).on("focus", validationItem,function () {
                $(this).addClass("l-form__item_focus");
            }).on("blur", validationItem, function () {
                $(this).removeClass("l-form__item_focus");
            });
    },

	init: function () {
		var scripts = this;

		scripts.detecting();

		$(function () {
//			if (!scripts.isModernBrowser) {
//
//			}

			scripts.jStylingInit();
			scripts.formSupport();
		});

		return scripts;
	}
};

scripts.Common.init();
