import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
};