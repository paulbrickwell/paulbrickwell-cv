const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("scrollanimation-before");
        entry.target.classList.add("scrollanimation-after");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

export default {
  beforeMount(el) {
    el.classList.add("scrollanimation-before");
    animatedScrollObserver.observe(el);
  },
};
