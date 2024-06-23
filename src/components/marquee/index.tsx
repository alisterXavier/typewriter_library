import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface BaseMarqueeProps {
  baseVelocity: number;
  classes?: string;
  texts: string[];
  directional: boolean;
  styles: {
    color: string;
    size: number;
  };
}

interface DirectionalMarqueeProps extends BaseMarqueeProps {
  directional: true;
  parentClassName: string;
}

interface NonDirectionalMarqueeProps extends BaseMarqueeProps {
  directional: false;
  parentClassName?: never;
}

type MarqueeProps = DirectionalMarqueeProps | NonDirectionalMarqueeProps;

gsap.registerPlugin(ScrollTrigger);

export const Marquee = ({
  texts,
  classes,
  baseVelocity = 0.5,
  directional = false,
  parentClassName,
  styles,
}: MarqueeProps) => {
  let x = 0;
  let direction = 1;
  const slider = useRef<HTMLDivElement>(null);
  const text_container1 = useRef<HTMLDivElement>(null);
  const text_container2 = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    if (
      isLoaded &&
      slider.current &&
      text_container1.current &&
      text_container2.current
    ) {
      gsap.set(text_container1.current, {
        left: text_container1.current.getBoundingClientRect().width,
      });
      if (directional) {
        const elem = document
          .querySelector(`.${parentClassName}`)
          ?.getBoundingClientRect();

        gsap.set(`.${parentClassName}`, {
          height: elem?.height,
        });
        
        gsap.to(slider.current, {
          scrollTrigger: {
            trigger: `.${parentClassName}`,
            scrub: 0.5,
            start: 0,
            end: elem?.bottom,
            markers: true,
            onUpdate: (e) => (direction = e.direction * -1),
          },
          x: "-500px",
        });
      }
      requestAnimationFrame(animate);
    } else setIsLoaded(true);
  }, [isLoaded, slider, text_container1, text_container2]);

  const animate = () => {
    if (x > 0) {
      x = -100;
    } else if (x < -100) {
      x = 0;
    }
    gsap.set(text_container1.current, {
      xPercent: x,
    });
    gsap.set(text_container2.current, {
      xPercent: x,
    });
    requestAnimationFrame(animate);

    x += baseVelocity * direction;
  };

  return (
    <div className="w-full overflow-hidden marquee-container">
      <div className="w-full h-[150px] relative" ref={slider}>
        <div
          className={`${classes} whitespace-nowrap absolute top-0`}
          ref={text_container1}
        >
          {texts.map((text, index) => {
            return (
              <span
                key={index}
                className={`m-0 ml-10`}
                style={{
                  color: styles.color,
                  fontSize: `${styles.size}px`,
                }}
              >
                {text}
              </span>
            );
          })}
        </div>
        <div
          className={`${classes} whitespace-nowrap absolute top-0`}
          ref={text_container2}
        >
          {texts.map((text, index) => {
            return (
              <span
                key={index}
                className={`m-0 ml-10`}
                style={{
                  color: styles.color,
                  fontSize: `${styles.size}px`,
                }}
              >
                {text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
