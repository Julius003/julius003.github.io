document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('art-ball');

    const art1 = document.getElementById('art1');
    const art2 = document.getElementById('art2');
    const art3 = document.getElementById('art3');

    const header = document.getElementById('art-header');
    
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('animate');
        art1.classList.add('animate');
        art2.classList.add('animate');
        art3.classList.add('animate');

        header.classList.add('animate');
        obs.disconnect();
      }
    });

    obs.observe(el);
});
