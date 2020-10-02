import React from 'react';
import githubIcon from '../../assets/icons/Github-Icon.png';

const About = () => {
  return (
    <>
      <section>
        <h1>About</h1>
        <a
          href="https://github.com/fundingrelief"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Funding Relief</h1>
          <img src={githubIcon} alt="github-icon" />
        </a>
        <p>
          This was a site created to help the lowest funded campaigns on
          GoFundMe get the attention they deserve. Currently serving the
          wildfire victims along the west coast, we hope to added support for
          more causes as they come.
        </p>
      </section>
    </>
  );
};

export default About;
