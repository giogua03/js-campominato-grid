const eleBig = document.querySelector('.big-q');
const eleButton = document.querySelector('button')
let eleOption = document.querySelector('value')
if (eleOption == 1){
eleButton.addEventListener('click', function(){

let i

for (let i = 1; i < 101; i++) {
    const eleSmall = document.createElement( 'div');
	eleSmall.classList.add('small-q');
	eleBig.append(eleSmall);
	eleSmall.append([i]);

	eleSmall.addEventListener('click', function () {
		this.classList.toggle('active')
	});
}
});
} else  if (eleOption == 2){ 
	eleButton.addEventListener('click', function(){

		let i
		
		for (let i = 1; i < 82; i++) {
			const eleSmall = document.createElement( 'div');
			eleSmall.classList.add('small-q');
			eleBig.append(eleSmall);
			eleSmall.append([i]);
		
			eleSmall.addEventListener('click', function () {
				this.classList.toggle('active')
			});
		}
		});

} else {
	eleButton.addEventListener('click', function(){

		let i
		
		for (let i = 1; i < 50; i++) {
			const eleSmall = document.createElement( 'div');
			eleSmall.classList.add('small-q');
			eleBig.append(eleSmall);
			eleSmall.append([i]);
		
			eleSmall.addEventListener('click', function () {
				this.classList.toggle('active')
			});
		}
		});

}