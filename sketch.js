// Approximating pi using the probabilaty of two random numbers being
// coprime or not: P(coprime) = 6 / pi^2
// If two integers, a and b, are coprime, their greatest common deviser
// equals one: gcd(a, b) = 1; a and b are coprime.

let pi = 0;
let maximum = 0;
let iterations = 1;
let coprimes = 0;
let update = pi;

function gdc(a, b) {
	if (a == 0 || b == 0) {
		return 0;
	}
	if (a == b) {
		return a;
	}
	if (a > b) {
		return gdc(a - b, b);
	}
	return gdc(a, b - a);
}

function coprime(a, b) {
	if (gdc(a, b) == 1) {
		coprimes++;
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	mSlider = createSlider(10, 1000, 200);
}

function draw() {
	for (let i = 0; i < 200; i++) {
		const maximum = mSlider.value();
		stroke(255);
		textSize(15);
		text(maximum, mSlider.x * 2 + mSlider.width, 20);
		a = floor(random(1, maximum));
		b = floor(random(1, maximum));

		stroke(255);
		fill(255);
		textSize(34);
		textAlign(CENTER);
		coprime(a, b);

		pi = sqrt(6 / (coprimes / iterations));

		background(0);
		text('Pi = ' + PI, width / 2, height / 4);
		text('Zelf berekend: ', width / 2, height / 2.5);
		text(pi, width / 2, height / 2);

		if (second() % 2) {
			update = pi;
		}
		text(update, width / 2, 2 * height / 3);
		iterations++;
	}
}
