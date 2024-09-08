import { useEffect } from "react";

const SlideInEffect = () => {
  useEffect(() => {
    const posts = document.querySelectorAll(".post");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-visible");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });

    posts.forEach((post) => {
      observer.observe(post); // Observe each post individually
    });

    // Cleanup observer on component unmount
    return () => {
      posts.forEach((post) => {
        observer.unobserve(post);
      });
    };
  }, []);

  return null; // No UI, just the observer logic
};

export default SlideInEffect;