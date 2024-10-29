import community from '../../../images/about/values/community-icon.svg';
import product from '../../../images/about/values/products-icon.svg';
import authentic from '../../../images/about/values/authentic-icon.svg';
import initiative from '../../../images/about/values/initiative-icon.svg';
import impact from '../../../images/about/values/socialimpact-icon.svg';

const values = {
  top: [
    {
      title: 'Develop Community',
      src: community,
      emoji: '🤝',
      description: `Our goal is to bring the whole organization together as one strong, helpful, and supportive community as friends
        and teammates.`,
    },
    {
      title: 'Build Enduring Products',
      src: product,
      emoji: '🛠️',
      description: `We aim to build products that are maintainable and sustainable for long-term use. This involves high quality
          development, design, and documentation.`,
    },
    {
      title: 'Be Authentic',
      src: authentic,
      emoji: '💗',
      description: `We want every member to feel safe being honest and true to their authentic self.
        Respect other members by being open to other opinions and perspectives.`,
    },
  ],
  bottom: [
    {
      title: 'Take Initiative',
      src: initiative,
      emoji: '🚀',
      description: `We want every member to feel comfortable trying and learning new things.
        Failure is accepted and encouraged, as long as you continue to try again.`,
    },
    {
      title: 'Strive for Social Impact',
      src: impact,
      emoji: '👍',
      description: `We aim to come up with creative solutions when designing our products to make a difference in the community
        and strive to pick partnerships with organizations that need our help the most, thus making the largest impact.`,
    },
  ],
};

export default values;
