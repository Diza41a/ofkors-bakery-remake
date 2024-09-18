import gsap from 'gsap';
import { classes } from './styles';
import { generateTitleTween } from '../../../utils/gsapUtils';

const generateTitleTextTween = () => generateTitleTween(
  `.${classes.titleContainer}>h2`,
  `.${classes.titleContainer}`
);
const generateTitleLineImgTween = () => gsap.fromTo(
  `.${classes.titleContainer}>img`,
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.5,
    delay: 0.15,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: `.${classes.titleContainer}`,
      start: 'top 80%',
      end: 'bottom 20%',
    },
  }
);
const generateBodyImgsTween = () => gsap.fromTo(
  `.${classes.imageContainer}>img`,
  {
    opacity: 0,
    scale: 0.75,
  },
  {
    opacity: 1,
    scale: 1,
    stagger: 0.2,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: `.${classes.imageContainer}`,
      start: 'top 80%',
      end: 'bottom 20%',
    },
  },
);

const generateBodyTextTimeline = () => gsap.timeline({
    scrollTrigger: {
      trigger: `.${classes.textContainer}`,
      start: 'top 80%',
      end: 'bottom 20%',
    },
  }).fromTo(
    `.${classes.textContainer}>h2, .${classes.textContainer}>p`,
    { opacity: 0, x: '100%' },
    { opacity: 1, x: 0, duration: 1, ease: 'power4.out' },
  ).fromTo(
    `.${classes.textContainer}>button`,
    { opacity: 0 },
    { opacity: 1, duration: '0.75', ease: 'linear' },
    '-=0.75',
  ).fromTo(
    `.${classes.beansImageContainer}>img`,
    { opacity: 0, scale: 0.75 },
    { opacity: 1, scale: 1, duration: 1, ease: 'power4.out' },
    0,
  );

export const tweenGenerator = {
  titleText: generateTitleTextTween,
  titleLineImg: generateTitleLineImgTween,
  bodyImgs: generateBodyImgsTween,
};

export const timelineGenerator = {
  bodyText: generateBodyTextTimeline,
};
