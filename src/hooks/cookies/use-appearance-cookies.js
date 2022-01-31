import { useRef, useEffect } from 'react';
import {animate} from './../../modules/animate/animate'


const useAppearanceCookies = () => {
    const cookiesRef = useRef();
    useEffect(() => {
        const currentCookies = cookiesRef.current;

        const appearanceCookies = ()=> {
            animate({
                duration: 700,
                timing(timeFraction) {
                return timeFraction;
                },
                draw(progress) {
                    currentCookies.style.bottom = progress*93 + 'px';
                }
            });
        }
        window.onload = appearanceCookies ();
    }, [cookiesRef]);

    const acceptCookies = ()=> {
        const currentCookies = cookiesRef.current;
        animate({
            duration: 700,
            timing(timeFraction) {
            return timeFraction;
            },
            draw(progress) {
                currentCookies.style.opacity = 1 - progress;
            }
        });
    }

    return {
        cookiesRef,
        acceptCookies
    }
}

export default useAppearanceCookies;