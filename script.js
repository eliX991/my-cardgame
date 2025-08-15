const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let ctx = canvas.getContext("2d");


class Ball {
    constructor(x, y, radius, xSpeed, ySpeed){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (canvas.width  <= this.x ) {
            this.x = 0;
        }
        if (canvas.height <= this.y) {
            this.y = 0;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'white'
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }

}

let getRandomF = (min, max) =>{
    let vel = Math.random() * (max - min) + min;

    return vel;
}

let balls = []


for (let i = 0; i<=100; i++) {
    let ballX = Math.random() * canvas.width;
    let ballY = Math.random() * canvas.height;

    let speed = getRandomF(3, 5);

    if (window.innerWidth <= 900){
        speed = getRandomF(2, 3);
    };
    

    balls.push(new Ball(ballX, ballY, 3, speed, speed));
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    for (let ball of balls) {
        ball.draw()
        ball.update()
    }
    
    setTimeout(animate, 10);
    
}



animate();


