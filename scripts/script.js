let marker = document.querySelector('#marker')
let list = document.querySelectorAll('ul li')

function moveIndicator(e) {
  marker.style.left = e.offsetLeft + 'px'
  marker.style.width = e.offsetWidth + 'px'
}

list.forEach(link => {
  link.addEventListener('mousemove', e => {
    moveIndicator(e.target)
  })
})

function activeLink() {
  list.forEach(item => item.classList.remove('active'))
  this.classList.add('active')
}
list.forEach(item => item.addEventListener('mouseover', activeLink))


$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});
