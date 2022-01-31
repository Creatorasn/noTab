import { useEffect, useRef } from 'react';
import {animate} from './../../modules/animate/animate';

const useOnScreen = (options) => {
  const missionRef = useRef();
  const textRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const currentMission = missionRef.current;
    const currentText = textRef.current;
    const currentImg = imgRef.current;
    
    if (window.innerWidth > 1169){
      const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
          animate({
            duration: 3000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              currentText.style.left = progress*90 + 'vh';
              currentText.style.top = progress*10 + 'vh';
              currentText.style.opacity = 1 - progress*2;
              currentImg.style.left = progress*50 + 'vh';
              currentImg.style.transform = `rotate(${-progress * 90}deg)`;
            }
          });
          observer.unobserve(currentMission);
        }
      }, options);
      observer.observe(currentMission);
    }
  }, [missionRef, textRef, imgRef, options]);

  return [missionRef, textRef, imgRef];
}

export default useOnScreen;