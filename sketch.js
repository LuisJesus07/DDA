
const p1 = {x: 0, y:0}
const p2 = {x: this.innerWidth, y: this.innerHeight}

const p3 = {x: (this.innerWidth/2), y: 0}
const p4 = {x: (this.innerWidth/2), y: this.innerHeight}

const p5 = {x: 0, y: (this.innerHeight/2)}
const p6 = {x: this.innerWidth, y: (this.innerHeight/2)}

const p7 = {x: this.innerWidth, y: 0}
const p8 = {x: 0, y: this.innerHeight}

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {

	dda(p1, p2)
	dda(p3, p4)
	dda(p5, p6)
	dda(p7, p8)

}

function dda(p1, p2){

	let lim
	let xi
	let yi
	let x
	let y

	const dx = round(p2.x - p1.x)
	const dy = round(p2.y - p1.y)

	if(round(dx) > round(dy)){
		lim = round(dx)
	}else{
		lim = round(dy)
	}

	xi = dx/lim
	yi = dy/lim

	x = p1.x
	y = p1.y

	let i = 0

	while(i < lim){
		point(x,y)
		x += xi
		y += yi 

		i++
	}


}