'use client';

import React, { useEffect, useState } from "react";
import { createElement, keyframes } from "@tiger-ui/react";

const rippleAni = keyframes({
  'to': {
    opacity: 0,
    transform: 'scale(2)',
  }
})

const RippleContainer = createElement('div')<{ bgColor?: string }>({
  style: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    'span': {
      transform: 'scale(0)',
      borderRadius: '100%',
      position: 'absolute',
      opacity: 0.75,
      animation: `${rippleAni} 850ms ease`,
    }
  },
  props: {
    bgColor: (propValue) => ({
      [`span `]: {
        backgroundColor: propValue ?? '#ffffff',
      }
    }),
  },
});

const useDebouncedRippleCleanUp = (rippleCount: number, duration: number, cleanUpFunction: () => void) => {
  useEffect(() => {
    let bounce: any = null;

    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

interface RippleProps {
  duration?: number,
  color?: string,
}

export default function Ripple({ duration = 850, color = '#ffffff' }: RippleProps) {
  const [rippleArray, setRippleArray] = useState<any[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => { setRippleArray([]) });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer bgColor={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => (
          <span
            key={"span" + index}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size
            }}
          />
      ))}
    </RippleContainer>
  );
}