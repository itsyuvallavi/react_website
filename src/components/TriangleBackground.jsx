import React, { useEffect, useRef } from "react";

const TriangleBackground = ({ parentRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      const parent = parentRef.current;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Triangle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() < 0.5 ? -50 : canvas.height + 50;
        this.size = Math.random() * 80 + 10; // Random size between 10 and 40
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.7 + 0.2; // Random opacity between 0.1 and 0.3
        this.shape = Math.random(); // Used to determine triangle shape
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        
        // Varying triangle shapes
        if (this.shape < 0.53) {
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(-this.size / 2, this.size / 2);
          ctx.lineTo(this.size / 2, this.size / 2);
        } else if (this.shape < 0.66) {
          ctx.moveTo(-this.size / 2, -this.size / 2);
          ctx.lineTo(this.size / 2, 0);
          ctx.lineTo(-this.size / 2, this.size / 2);
        } else {
          ctx.moveTo(-this.size / 2, -this.size / 2);
          ctx.lineTo(this.size / 2, -this.size / 2);
          ctx.lineTo(0, this.size / 2);
        }

        ctx.closePath();
        ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Reset if out of bounds
        if (
          this.x < -50 ||
          this.x > canvas.width + 50 ||
          this.y < -50 ||
          this.y > canvas.height + 50
        ) {
          this.reset();
        }
      }
    }

    const triangles = Array(30).fill().map(() => new Triangle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      triangles.forEach((triangle) => {
        triangle.draw();
        triangle.update();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [parentRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
    />
  );
};

export default TriangleBackground;