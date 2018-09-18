$(clickMe).on('click',function(){
	if(popover.style.display == 'block'){
		popover.style.display = 'none'
	}else{
		popover.style.display = 'block'
	}
	setTimeout(function(){
		$(document).one('click',function(){
			$(popover).hide()
		})
	},0)
})
$(wrapper).on('click',function(e){
	e.stopPropagation()
})