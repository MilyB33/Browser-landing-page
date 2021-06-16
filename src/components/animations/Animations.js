import gsap from 'gsap';
// eslint-disable-next-line
export const onRemoveAnim = (ref, callback, ...params) => {
  gsap.fromTo(
    ref,
    { opacity: 1 },
    { opacity: 0, duration: 1, onComplete: () => callback(...params) }
  );
};

export const onOpenNav = (ref) => {
  gsap.fromTo(ref, { opacity: 0 }, { opacity: 1, duration: 1 });
};
