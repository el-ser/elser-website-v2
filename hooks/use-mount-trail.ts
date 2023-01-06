import { useTrail } from "@react-spring/web";

const useMountTrail = (count: number, horizontal: Boolean = false) => {
    const horizontalValue = { from: { x: 20 }, to: { x: 0 } };
    const verticalValue = { from: { y: -20 }, to: { y: 0 } }
    const direction = horizontal ? horizontalValue : verticalValue

    const trails = useTrail(count, {
        from: {
            opacity: 0,
            ...direction.from
        },
        to: {
            opacity: 1,
            ...direction.to
        },
        config: {
            mass: 5,
            tension: 1500,
            friction: 100,
        },
    });

    return trails;
}

export default useMountTrail