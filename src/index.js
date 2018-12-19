import "./styles.css";
import p5 from "p5";

const sketch = new p5(p => {
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(0);
    if (p.mouseX > p.width / 2) {
      p.fill(200, 80, 80);
    } else {
      p.fill(80, 160, 80);
    }
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
});
