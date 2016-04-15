$(document).ready(function() { 
	
	//Маска для телефона
	$('input[name=phone]').mask('+7 (999) 999-99-99', {
		completed:function()
		{
			this.css('border', '2px solid green');
		}
		
	});
	
	//Всплывающие окна
	$('a[href="#politics"], a[href="#popup"]').fancybox({padding: 0});
	
	//Отправка формы
	$('form').ajaxForm({
		url: 'mail.php',
		beforeSubmit: function(data, $form) {
			if(!$form.find('.input[name=phone]').val().length) {
				$form.find('.input[name=phone]').css('border', '2px solid red');
				return false;
			}
			/*
			Специально для портфолио
			*/
			$form.find('input[name=phone]').css('border', '2px solid green');
			$form.find('button').text('Заявка отправлена');
			$form.trigger('reset');
			yaCounter36798385.reachGoal('form');

		}
		/*
		 * В портфолио не работает отправка формы 
		,
		success: function(responseText, statusText, xhr, $form) {
			if(statusText == 'success') {
				$form.find('input[name=phone]').css('border', '2px solid green');
				$form.find('button').text('Заявка отправлена');
			}
			
			$form.trigger('reset');
		}
		*/
	});

});