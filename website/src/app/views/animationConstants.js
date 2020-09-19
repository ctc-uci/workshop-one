import { config } from 'react-spring';

// these animations take in a state and produce a config that relies on that state to animate
const animationConfigs = {
  slideUp: (state) => ({
    config: config.gentle,
    opacity: state ? 1 : 0,
    transform: state ? 'translate(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  }),
  trail: (state) => ({
    config: config.wobbly,
    from: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    opacity: state ? 1 : 0,
    transform: state ? 'translateY(0px)' : 'translateY(50px)',
  }),
  scale: (state) => ({
    config: config.stiff,
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    opacity: state ? 1 : 0,
    transform: state ? 'scale(1)' : 'scale(0)',
  }),
  fadeIn: (state) => ({
    config: config.default,
    opacity: state ? 1 : 0,
    from: { opacity: 0 },
  }),
};

export default animationConfigs;
