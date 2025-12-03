document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#circle a");
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


document.addEventListener("DOMContentLoaded", () => {
    const topics = ["Programming", "Heidelberg University", "Arch btw", "Art", "Chess"]
    description = document.getElementById("circle-center")
    const interval = 1.8 // seconds
    current_text_index = 0;

    const ChangeText = () => {
        description.innerHTML = topics[current_text_index]
        current_text_index = (current_text_index + 1)% topics.length

        setTimeout(ChangeText, interval * 1000)
    }

    ChangeText()
});
