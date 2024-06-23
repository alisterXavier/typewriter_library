# typewriter_library

## Installation

```bash
npm install typewriter_library
````

## Usage

### Marquee Component

The Marquee component provides a customizable text scrolling effect using GSAP and ScrollTrigger, tailored for React applications. It supports both directional and non-directional scrolling and allows dynamic control over text content, velocity, and visual styling.

````tsx
import { Marquee } from 'typewriter_library';

// Example usage
const MyComponent = () => {
  return (
    <Marquee
      texts={['Text 1', 'Text 2']}
      baseVelocity={0.5}
      directional={true}
      styles={{ color: 'black', size: 16 }}
      parentClassName="parent-class"
    />
  );
};
````

### StaggerText Component

The StaggerText component enables animated text effects with staggering using GSAP, enhancing typographic displays in React. It supports animations such as translation, opacity changes, and skew effects, offering fine-grained control over timing, delays, and visual properties for each character or element of the text.

````tsx
import { StaggerText } from 'typewriter_library';

// Example usage
const MyText = () => {
  return (
    <StaggerText
      text="Hello, World!"
      styles={{ color: '#333', size: 24 }}
      from={{ translateY: 50, opacity: 0 }}
      to={{ translateY: 0, opacity: 1 }}
      staggerAmt={0.1}
      duration={1}
      delay={0}
    />
  );
};
````

## Props

### Marquee Props

- ***texts***: Array of strings for marquee text.
- ***baseVelocity***: Base velocity of the marquee.
- ***directional***: Whether the marquee scrolls in a specific direction.
- ***parentClassName***: CSS class name for the parent element.
- ***styles***: Object containing color and size for text styling.

### StaggerText Props

- ***text***: Text content for staggered animation.
- ***styles***: Object containing color, size, and overflow.
- ***from***: Initial animation state using GSAP properties.
- ***to***: Target animation state using GSAP properties.
- ***staggerAmt***: Stagger amount for animation.
- ***duration***: Duration of animation.
- ***delay***: Delay before animation starts.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

## Authors

- **Alister Xavier** - [Profile](https://github.com/alisterXavier)

## Acknowledgments

- **GreenSock (GSAP)** - Powerful JavaScript animation library that enabled smooth animations and interactions in the Marquee and StaggerText components.
- **SplitType** - Library used in the StaggerText component for creating animated typography effects.
- **React** - JavaScript library used for building user interfaces, forming the core framework for this React component library.
- **Framer Motion** - Used for declarative animations in React components, enhancing the interactive experience.
- **Tailwind CSS** - Utility-first CSS framework used for styling and responsive design throughout the project.
- **Storybook** - Development environment and UI component explorer for building, documenting, and testing React components.
