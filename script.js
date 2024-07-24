

	let slider = document.querySelector('.slider-2');
	let img = document.querySelectorAll('.slider-2 .slider .img img');
	let p = document.querySelectorAll('.slider-2 .slider .text p');

	let number=0;
		slider.style.backgroundColor = document.querySelectorAll('.ntnIcons ul li')[0].getAttribute('data-color');
	document.querySelectorAll('.ntnIcons ul li').forEach((e,index)=>{
		e.addEventListener('click',()=>{
		number =index;

			slider.style.backgroundColor=e.getAttribute('data-color');
			img.forEach(img=>{
				img.style.transform=`translateX(${number * -100}%)`
				
			})
			p.forEach(p=>{
				p.style.transform=`translateY(${number * -100}%)`;
			})

		})
	})
	console.log(slider)
	
