import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import SplitType from 'split-type';

type StaggerTextTypes = {
  text: string;
  state?: boolean;
  from: gsap.TweenVars;
  to?: gsap.TweenVars;
  staggerAmt?: number;
  duration?: number;
  delay?: number;
  styles: {
    size: number;
    color: string;
    overflow?: 'hidden' | 'scroll';
  };
};

export const StaggerText = ({
  text,
  state,
  styles,
  from,
  to,
  staggerAmt,
  duration,
  delay,
}: StaggerTextTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (ref.current) {
      const splitText = new SplitType(ref.current);
      const chars = splitText.chars;

      gsap.fromTo(
        chars,
        {
          translateY: from.translateY,
          translateX: from.translateX,
          filter: from.filter,
          skewY: from.skewY ?? '0deg',
          skewX: from.skewX ?? '0deg',
          opacity: from.opacity,
        },
        {
          translateY: to?.translateY ?? 0,
          translateX: to?.translateX ?? 0,
          filter: to?.filter ?? 'blur(0px)',
          opacity: to?.opacity ?? 1,
          skewX: to?.skewX ?? '0deg',
          skewY: to?.skewY ?? '0deg',
          stagger: {
            amount: staggerAmt,
          },
          duration: duration,
          delay: delay ?? 0,
        }
      );
    }
  }, [ref]);

  return (
    <div>
      <p
        className={``}
        style={{
          color: styles.color,
          fontSize: `${styles.size}px`,
          overflow: styles.overflow ?? 'hidden',
        }}
        ref={ref}
      >
        {text}
      </p>
    </div>
  );
};
