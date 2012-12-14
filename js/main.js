$(document).ready(function() {

    $.foundation.customForms.appendCustomMarkup();

    //$(".js-no-native select").sb();
    //$(".js-no-native input:check, .no-native input:radio").checkbox();

    //$('input[placeholder], textarea[placeholder]').placeholder();


	var sertBlock = $('.icon-list-block').find('a');

	sertBlock.live('mouseenter', function() {
		var self = $(this);

		setSertificats({
			'tooltip'  : self.find('.tooltip'),
			'sert_ico' : self.find('.sert-ico')
		}, 'enter');
	});

	sertBlock.live('mouseleave', function() {
		var self = $(this);

		setSertificats({
			'tooltip'  : self.find('.tooltip'),
			'sert_ico' : self.find('.sert-ico')
		}, 'leave');

	});

});

function setSertificats(nodes, type) {

	var params = {
		enter : {
			tooltip: { opacity: 1, top: '-20px' },
			sert_ico: { bottom: '-15px' }
		},
		leave : {
			tooltip: { opacity: 0, top: '-10px' },
			sert_ico: { bottom: 0 }
		},
		time: 300
	}

	for( var i in nodes ) {
		nodes[i].animate( params[type][i], params.time, 'linear');
	}
}