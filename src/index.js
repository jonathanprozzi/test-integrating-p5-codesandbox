import "./styles.css";
import p5 from "p5";

const sketch = new p5(p => {
  p.setup = function() {
    p.createCanvas(200, 200);
  };

  p.draw = function() {
    p.background(197, 221, 169);
    p.noStroke();
    if (p.mouseX > p.width / 2) {
      p.fill(255, 166, 118);
    } else {
      p.fill(155, 210, 173);
    }
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
});

const sketchTwo = new p5(p => {
  p.setup = function() {
    p.createCanvas(200, 200);
  };

  p.draw = function() {
    p.background(197, 221, 169);
    p.noStroke();
    if (p.mouseX < p.width / 2) {
      p.fill(255, 166, 118);
    } else {
      p.fill(155, 210, 173);
    }
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
});
