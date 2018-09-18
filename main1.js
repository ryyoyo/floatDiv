/*clickMe.addEventListener('click',function(e){
	if(popover.style.display = 'block'){
		clickMe.addEventListener('click',function(e){
			popover.style.display = 'none'
		})
	}else if(popover.style.display = 'none'){
		clickMe.addEventListener('click',function(e){
			popover.style.display = 'block'
		})
	}
})*/



clickMe.addEventListener('click',function(e){
	if(popover.style.display == 'block'){
			popover.style.display = 'none'
	}else{
	popover.style.display = 'block'
	}
})

wrapper.addEventListener('click',function(e){
	e.stopPropagation()
})
document.addEventListener('click',function(e){
	popover.style.display = 'none'
})