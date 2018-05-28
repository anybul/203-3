var test_mestorozhdeniya = {
	create:function(input){
		result = [];
		result.push($('<div></div>').addClass('image').addClass('map-of-russia'));
		var wrongmessage = $('<div></div>');
		wrongmessage.attr('id', 'mestorozhdenie-message');
		result.push(wrongmessage);
		for(var i=0;i<8;i++){
			var oilfield = $('<div></div>').addClass('mestorozhdenie').addClass('oilfield');
			oilfield.attr('id', 'oilfield'+i);
			oilfield.click(test_mestorozhdeniya.click);
			result.push(oilfield);
		}
		for(i=0;i<13;i++){
			var gasfield = $('<div></div>').addClass('mestorozhdenie').addClass('gasfield');
			gasfield.attr('id', 'gasfield'+i);
			gasfield.click(test_mestorozhdeniya.click);
			result.push(gasfield);
		}
		for(i=0;i<12;i++){
			var coalfield = $('<div></div>').addClass('mestorozhdenie').addClass('coalfield');
			coalfield.attr('id', 'coalfield'+i);
			coalfield.click(test_mestorozhdeniya.click);
			result.push(coalfield);
		}
		for(i=0;i<7;i++){
			var lignitefield = $('<div></div>').addClass('mestorozhdenie').addClass('lignitefield');
			lignitefield.attr('id', 'lignitefield'+i);
			lignitefield.click(test_mestorozhdeniya.click);
			result.push(lignitefield);
		}
		for(i=0;i<9;i++){
			var ironstone = $('<div></div>').addClass('mestorozhdenie').addClass('ironstonefield');
			ironstone.attr('id', 'ironstonefield'+i);
			ironstone.click(test_mestorozhdeniya.click);
			result.push(ironstone);
		}
		return result;
	},
	click:function(){
		$('.mestorozhdenie').removeClass('mestorozhdenie-right').removeClass('mestorozhdenie-wrong');
		if($(this).hasClass(task[globalVars.currentTask].test_mestorozhdeniya.right+'field')){
			$(this).addClass('mestorozhdenie-right');
			$('.mestorozhdenie').unbind();
			setTimeout(check, 500);
		} else {
			$(this).addClass('mestorozhdenie-wrong');
			var messagebox = $('#mestorozhdenie-message');
			messagebox.css({
				'top':($(this).position().top-138)+'px',
				'left':($(this).position().left-84)+'px'
			})
			if($(this).hasClass('oilfield')){
				messagebox.html('нефти');
			} else if($(this).hasClass('gasfield')){
				messagebox.html('природного газа');
			} else if($(this).hasClass('coalfield')){
				messagebox.html('каменного угля');
			} else if($(this).hasClass('lignitefield')){
				messagebox.html('бурого угля');
			} else if($(this).hasClass('ironstonefield')){
				messagebox.html('железной руды');
			}
			
			messagebox.show();
		}
	}
};
$(document).mousedown(function(){
    $('.mestorozhdenie-wrong').removeClass('mestorozhdenie-wrong');
	$('#mestorozhdenie-message').hide();
});
