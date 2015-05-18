counter = 0;
var previous;
var current;
var complete = [];
goldR = "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0CUdZ6DdnPfZvG6265sztz0q9dZZkZUNF_PYVLW-KJ3F1Sbk2xQ')";
plotH = "url('http://www.petguide.com/wp-content/uploads/2013/04/plott-1.jpg')";
dalM = "url('http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F86%2Ffae2e0a73111e0a0d50050568d634f%2Ffile%2FDalmatian-1-645mk062311.jpg')";
chiH = "url('https://thenypost.files.wordpress.com/2013/11/dog1.jpg')";
gerM = "url('http://www.rescueagermanshepherd.org/wp-content/uploads/2012/07/german-shepherd-dog55.jpg')";
spaN = "url('http://www.about-cocker-spaniels.com/images/cocker-spaniel-4.jpg')";
akiT = "url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTt1stQmSK-7jj857eN7uCjomzUl2GL3SL2OhurXMnc94DTtWJQ')";
husK = "url('data:imagex/jpeg;base64,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')";

dogs = [goldR, plotH, dalM, chiH, gerM, spaN, akiT, husK, goldR, plotH, dalM, chiH, gerM, spaN, akiT, husK];

function grid() {
	for (var i = 0; i < 16; i++) {
		newDiv = document.createElement("div");
		newDiv.style.width = "20.0%";
		newDiv.className = "images"
		newDiv.style.float = "left";
		newDiv.style.paddingBottom = "15.0%";
		newDiv.style.backgroundColor = "white";
		newDiv.style.border = 'thin solid black';
		document.body.appendChild(newDiv);
		newDiv.id = i;
		divy = document.querySelectorAll('div')

	newDiv.addEventListener('click',function() {

		// box0 = document.getElementById('0')
		// box1 = document.getElementById('1')
		// box2 = document.getElementById('2')
		// box3 = document.getElementById('3')
		// box4 = document.getElementById('4')
		// box5 = document.getElementById('5')
		// box6 = document.getElementById('6')
		// box7 = document.getElementById('7')
		// box8 = document.getElementById('8')
		// box9 = document.getElementById('9')
		// box10 = document.getElementById('10')
		// box11 = document.getElementById('11')
		// box12 = document.getElementById('12')
		// box13 = document.getElementById('13')
		// box14 = document.getElementById('14')
		// box15 = document.getElementById('15')
		
		// box0.style.backgroundImage = goldR;
		// box1.style.backgroundImage = plotH;
		// box2.style.backgroundImage = dalM;
		// box3.style.backgroundImage = chiH;
		// box4.style.backgroundImage = gerM;
		// box5.style.backgroundImage = spaN;
		// box6.style.backgroundImage = akiT;
		// box7.style.backgroundImage = husK;
		// box8.style.backgroundImage = goldR;
		// box9.style.backgroundImage = plotH;
		// box10.style.backgroundImage = dalM;
		// box11.style.backgroundImage = chiH;
		// box12.style.backgroundImage = gerM;
		// box13.style.backgroundImage = spaN;
		// box14.style.backgroundImage = akiT;
		// box15.style.backgroundImage = husK;

		this.style.backgroundImage = dogs[this.id];
		current = divy[this.getAttribute('id')];

		if (counter === 0) {
			previous = current;
			counter += 1;
			console.log(counter);
		}

	// if (counter == 1) {
		// 	current = divy[this.getAttribute('id')];
		// 	counter += 1;
		// 	console.log(counter);
		// }
		// else if (counter == 2) {

		else if (current.style.backgroundImage === previous.style.backgroundImage) {
				setTimeout(function() {current.style.border = 'thin solid orange'}, 500)
				setTimeout(function() {previous.style.border = 'thin solid orange'}, 500)
				complete.push(current);
				complete.push(previous);
					if (complete.length === 16) {
					alert('WOOF WOOF! CONGRATULATIONS, YOU WIN!!');
					}
				counter = 0;
			}
		else if (current.style.backgroundImage !== previous.style.backgroundImage) {

			if (current.style.backgroundImage )
				setTimeout(function() {current.style.backgroundImage = "";}, 500)
				setTimeout(function() {previous.style.backgroundImage = "";}, 500)
				counter = 0;
			}

		
	})
}
};
grid();





// function reloader() {
// var count;
// for(var i = 0; i < 16; i++) {
// 	var divy = document.querySelectorAll("div");
// 	if (divy[i].style.backgroundColor == 'green') {
// 		return window.location.reload()
// 	}
// }
// }
// setInterval(reloader, if);

// addEventListener('click' function() {

// })


// function doubleClick() {
// 	var allDiv = document.querySelectorAll('div')
// 	allDiv.addEventListener('dblclick', function() {
// 		allDiv.style.backgroundColor = "blue";
// 	})
// }
// doubleClick();

