import React from 'react';

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="hero__inner">
                <h1 className="hero__title hero__indent">
                    A portfolio<br />
                    <span className="pl-large">of sorts.</span>
                </h1>
                <div className="hero__action hero__indent">
                    <a className="hero__link" href="#about">
                        <span>
                            Senior Frontend Engineer & <br />
                            Design Systems Specialist
                        </span>
                        <span className="hero__divider"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
