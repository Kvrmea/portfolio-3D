import { useEffect, useState } from 'react';
import { counterItems } from '../constants/index.js'

// Counter logic
const CountUpLogic = ({ targetValue, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * targetValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [targetValue, duration]);

    return <>{count}</>;
};

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    /* On met la key sur la div qui boucle pour éviter les erreurs React */
                    <div key={`counter-${index}`} className="bg-zinc-900 rounded-lg p-10 flex flex-col">
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            {/* On appelle la logique ici pour animer le chiffre */}
                            <CountUpLogic targetValue={item.value} /> {item.suffix}
                        </div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter;
