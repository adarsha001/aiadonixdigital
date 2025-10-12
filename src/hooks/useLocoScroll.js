import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// CHANGED: The hook now accepts a setter function to signal when it's ready.
export default function useLocoScroll(setReady) {
  useEffect(() => {
    if (!setReady) return;

    const scrollEl = document.querySelector('#main-container');

    if (!scrollEl) {
      console.warn("Locomotive Scroll container not found");
      // Still set ready to true to prevent the app from getting stuck in a loading state.
      setReady(true); 
      return;
    }

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-ready',
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed',
    });
    
    const lsUpdate = () => {
      if (locoScroll) locoScroll.update();
    };

    ScrollTrigger.addEventListener('refresh', lsUpdate);
    ScrollTrigger.refresh();

    // --- CRUCIAL PART ---
    // Once everything is set up, call the setter function to update the state in App.js.
    setReady(true);

    return () => {
      if (locoScroll) {
        setReady(false); // Set to false on cleanup
        ScrollTrigger.removeEventListener('refresh', lsUpdate);
        locoScroll.destroy();
      }
    };
  }, [setReady]);
}

