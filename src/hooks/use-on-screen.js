import { useEffect, useRef } from 'react';

const useOnScreen = (options) => {
    const missionRef = useRef();
    const textRef = useRef();
    const imgRef = useRef();

    function animate({timing, draw, duration}) {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
          let progress = timing(timeFraction);
          draw(progress);
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
        });
    }

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