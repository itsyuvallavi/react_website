import React, { useEffect, useRef } from 'react';

function ScrollAnimation({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    console.log("Element reference:", element); // Log the element reference
    console.log("Initial classes on the element:", element.className); // Log initial classes

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          console.log("Checking entry:", entry); // Log each entry observed
          console.log("Classes before check:", entry.target.className); // Log classes before check
          
          if (entry.isIntersecting) {
            console.log("Element is in view:", entry.target); // Log when the element is in view
            const imgElement = entry.target.querySelector('img');
            if (imgElement) {
              imgElement.classList.add('visible');
              console.log("Added 'visible' class to:", imgElement); // Confirm class addition
              console.log("Classes after adding 'visible':", imgElement.className); // Log classes after addition
            } else {
              console.warn("No img element found within:", entry.target); // Warn if no img found
            }
            
            observer.unobserve(entry.target); // Stop observing this element
            console.log("Stopped observing:", entry.target); // Confirm unobserving
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (element) {
      observer.observe(element);
      console.log("Observer is observing:", element); // Confirm observer is set up
    }

    return () => {
      if (element) {
        observer.unobserve(element);
        console.log("Cleanup: Stopped observing during unmount:", element); // Confirm unobserving during cleanup
      }
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
}

export default ScrollAnimation;