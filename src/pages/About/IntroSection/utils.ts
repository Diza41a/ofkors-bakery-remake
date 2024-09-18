import gsap from 'gsap';
import { generateTitleTween } from '../../../utils/gsapUtils';
import { classes } from './styles';

const generateTitleTextTween = () => generateTitleTween('h2');

export const tweenGenerator = {
  titleText: generateTitleTextTween,
};

const generateContentColumnsTimeline = () => gsap.timeline({
  scrollTrigger: {
    trigger: `.${classes.contentContainer}`,
    start: 'top 80%',
    end: 'bottom 20%',
  },
}).fromTo(
  `.${classes.contentColumn}:nth-of-type(1)>*`,
  {
    y: 200,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2.inOut',
  },
).fromTo(
  `.${classes.contentColumn}:nth-of-type(2)>*`,
  {
    y: 200,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: `.${classes.contentColumn}:nth-of-type(2)`,
      start: 'top 80%',
      end: 'bottom 20%',
    }
  },
  '<0.2',
).fromTo(
  `.${classes.decorativeColumn}>*`,
  {
    y: 200,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    ease: 'power2.inOut',
  },
  '<0.4',
);

export const timelineGenerator = {
  contentColumns: generateContentColumnsTimeline,
};
