import { useState, useEffect } from 'react';

export function useTypewriter(phrases, startDelay = 1000) {
    const [typedText, setTypedText] = useState("");
    const [currentPhase, setCurrentPhase] = useState(0);

    useEffect(() => {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeWriter = () => {
            const currentPhrase = phrases[phraseIndex];

            if (!isDeleting) {
                setTypedText(currentPhrase.slice(0, charIndex + 1));
                charIndex++;

                if (charIndex === currentPhrase.length) {
                    if (phraseIndex < phrases.length - 1) {
                        setTimeout(() => {
                            isDeleting = true;
                            setTimeout(typeWriter, 100);
                        }, 2000);
                    }
                    return;
                }
            } else {
                setTypedText(currentPhrase.slice(0, charIndex));
                charIndex--;

                if (charIndex < 0) {
                    isDeleting = false;
                    phraseIndex++;
                    charIndex = 0;
                    setCurrentPhase(phraseIndex);
                }
            }

            setTimeout(typeWriter, isDeleting ? 50 : 100);
        };

        setTimeout(typeWriter, startDelay);
    }, [phrases, startDelay]);

    return { typedText, currentPhase };
}
