import { Parallax } from 'react-parallax';

const ContainerBackground = () => (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('path/to/another/image.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
    </Parallax>
);

export default ContainerBackground;