class Particula {
	constructor(_x, _y) {
		this.pos = createVector(_x, _y);

		this.vel = p5.Vector.random2D();
		this.vel.setMag(random(0.5, 2));

		this.tVida = int(random(100, 300));
		this.tVidaInicial = this.tVida;
		this.estaMuerta = false;
		this.diam = random(10, 50);
		this.gravedad = createVector(0, 1);

    this.velAngular = random(0.01, 0.5);

		this.c = color(random(220, 255), random(80, 150), random(200, 255));
	  console.log("Estoy viva");
  }

	update() {
		if (!this.estaMuerta) {
			this.vel.add(this.gravedad);
			this.vel.setMag(6);
			this.tVida -= 1;
			this.pos.add(this.vel);
      this.vel.rotate(this.velAngular);
		}

		if (this.tVida <= 0 && !this.estaMuerta) {
			this.estaMuerta = true;
      console.log("Morí");
		}
	}
	display() {
		fill(this.c);
		noStroke();

		this.diamFinal = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);

		circle(this.pos.x, this.pos.y, this.diamFinal);
	}
}