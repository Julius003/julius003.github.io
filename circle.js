document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#circle p");
  let angle = 0;

  function positionItems() {
    const radius = 152;
    const step = (2 * Math.PI) / items.length;

    items.forEach((item, i) => {
      const a = angle + step * i;
      const x = 150 + radius * Math.cos(a);
      const y = 135 + radius * Math.sin(a);
      item.style.left = x + "px";
      item.style.top = y + "px";
    });

    angle += 0.00355;
    requestAnimationFrame(positionItems);
  }

  positionItems();
});
