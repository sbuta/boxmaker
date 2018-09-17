$(document).ready(function() {
	CustomThicknessToggle();
	InsertSpacingToggle();
	$('#insertSelect').change(function() {
		InsertSpacingToggle();
	});
	$('#thicknessSelect').change(function() {
		CustomThicknessToggle();
	});
});

function CustomThicknessToggle() {
	var n=$('#thicknessSelect').val();
	if (n == 'custom') {
		$('#customThicknessRow').show();
		console.log('show n:' +n);
	} else {
		$('#customThicknessRow').hide();
		console.log('hide n:'+n);
	}
}

function InsertSpacingToggle() {
	var n=$('#insertSelect').val();
	if (n > 1) {
		$('input:radio[name=insertSpacing]').attr('disabled',false);
		$('#insertSpacingButtons').removeClass('radioLabel_disabled');
	} else {
		$('#insertSpacingButtons').addClass('radioLabel_disabled')
		$('input:radio[name=insertSpacing]').attr('disabled',true);
		$('input:radio[name=insertSpacing]').each(function () { 
			$(this).prop('checked', false);
		});
	}
}