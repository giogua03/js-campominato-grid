const eleGrid = document.querySelector('.big-q');
const eleButton = document.querySelector('button')

eleButton.addEventListener('click', function(){

let i

for (let i = 1; i < 101; i++) {
    const eleCell = document.createElement( 'div');
	eleCell.classList.add('small-q');
	eleGrid.append(eleCell);

	eleCell.addEventListener('click', function () {
		this.classList.toggle('active')
	});
}
});