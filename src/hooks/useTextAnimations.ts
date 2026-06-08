import { useEffect, useRef, useState } from "react";

export function useTypewriter(text: string, speed = 50, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export function useCounter(target: number, duration = 1500, startDelay = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const delay = setTimeout(() => {
            const step = Math.ceil(target / (duration / 16));
            const interval = setInterval(() => {
              start += step;
              if (start >= target) {
                setCount(target);
                clearInterval(interval);
              } else {
                setCount(start);
              }
            }, 16);
          }, startDelay);
          observer.disconnect();
          return () => clearTimeout(delay);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startDelay]);

  return { count, ref };
}
