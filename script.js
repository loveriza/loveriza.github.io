let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

function myFunction() {
	var header = document.getElementById("header1");
	header.classList.toggle("active");
}


window.onmousemove = (e) =>{
	cursor1.style.top = e.pageY + 'px';
	cursor1.style.left = e.pageX + 'px';
	cursor2.style.top = e.pageY + 'px';
	cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{
	
    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
	
});