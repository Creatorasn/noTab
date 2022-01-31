import { useState } from 'react';

const usePressing = (initialPressing) => {
    const [isPressing, setPressing] = useState(initialPressing)

    const onPressing = (e) => {
        setPressing(true)
        e.preventDefault()
    }

    return {
        isPressing,
        onPressing
    }
}

export default usePressing;