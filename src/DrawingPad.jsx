function DrawingPad() {
    function draw(event) {
        const canvas = document.getElementById("drawing");
        const ctx = canvas.getContext("2d");

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, 10, 10);
    }

    function clearCanvas() {
        const canvas = document.getElementById("drawing");
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return (
    <section>
      <h2>My Doodle Board</h2>
      <canvas
        id="drawing"
        width="400"
        height="200"
        onClick={draw}
        style={{ border: "1px solid black" }}
      />
      <button onClick={clearCanvas}>
        Clear Canvas
      </button>
    </section>
  );
}

export default DrawingPad;