import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useOverlapping = (ref, itemClass, endItemClass) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(itemClass);
      const headerRef = document.querySelector(endItemClass);
      if (sections && headerRef) {
        sections.forEach((section) =>
          gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              start: () =>
                section.offsetHeight <=
                window.innerHeight - headerRef.offsetHeight
                  ? `top ${headerRef.offsetHeight}px`
                  : "bottom bottom",
              endTrigger: ref.current,
              end: "bottom top",
              scrub: true,
              pin: section,
              pinSpacing: false,
            },
          })
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [endItemClass, itemClass, ref]);
};
