const eleBig = document.querySelector('.big-q');
const eleButton = document.querySelector('button')

eleButton.addEventListener('click', function(){
let eleOption = document.querySelector('#list').value
if (eleOption == "1"){


let i

for (let i = 1; i < 101; i++) {
    const eleSmall = document.createElement( 'div');
	eleSmall.classList.add('small-q');
	eleBig.append(eleSmall);
	eleSmall.append([i]);

	eleSmall.addEventListener('click', function () {
		this.classList.toggle('active')
	});
	
	eleButton.addEventListener('click', function () {
		eleBig.innerHTML=''
	});
	
}

} else  if (eleOption == "2"){ 
	

		let i
		
		for (let i = 1; i < 82; i++) {
			const eleSmall = document.createElement( 'div');
			eleSmall.classList.add('small-e');
			eleBig.append(eleSmall);
			eleSmall.append([i]);
		
			eleSmall.addEventListener('click', function () {
				this.classList.toggle('active')
			});
			
		}
		eleButton.addEventListener('click', function () {
			eleBig.innerHTML=''
		});
		

} else {
	

		let i
		
		for (let i = 1; i < 50; i++) {
			const eleSmall = document.createElement( 'div');
			eleSmall.classList.add('small-d');
			eleBig.append(eleSmall);
			eleSmall.append([i]);
		
			eleSmall.addEventListener('click', function () {
				this.classList.toggle('active')
			});
			
		}
		
		eleButton.addEventListener('click', function () {
			eleBig.innerHTML=''
		});
}
});
