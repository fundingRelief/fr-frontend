import React from 'react';
import githubIcon from '../../assets/icons/Github-Icon.png';
import linkedInIcon from '../../assets/icons/LinkedIn-Icon.png';
import Mikey from '../../assets/profile/Mikey.png';
import Will from '../../assets/profile/Will.jpg';
import styles from './About.css';

const About = () => {
  return (
    <>
      <section className={styles.About}>
        <a
          href="https://github.com/fundingrelief"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className={styles.fundingReliefHeader}>Funding Relief</h1>
          <img src={githubIcon} alt="github-icon" className={styles.icons} />
        </a>
        <p className={styles.para}>
          This was a site created to help the lowest funded campaigns on
          GoFundMe get the attention they deserve. Currently serving the
          wildfire victims along the west coast, we hope to added support for
          more causes as they come.
        </p>

        <section className={styles.Devs}>
          <section className={styles.Dev}>
            <img src={Mikey} alt="Mikey Profile Picture" />
            <section className={styles.links}>
              <a
                href="https://github.com/mikeymasonic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="github-icon"
                  className={styles.icons}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/michaelromay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedInIcon}
                  alt="linkedin-icon"
                  className={styles.icons}
                ></img>
              </a>
            </section>
            <p>
              MICHAEL ROMAY is a fullstack engineer, installation artist and
              musician who makes weird digital visual and interactive art. Code,
              music and art go hand in hand for him. He also has a baby bird
              named Wootie that is very sweet.
            </p>
          </section>

          <section className={styles.Dev}>
            <img src={Will} alt="Will Profile Picture" />
            <section className={styles.links}>
              <a
                href="https://github.com/Shaka2Pass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="github-icon"
                  className={styles.icons}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/willpiro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedInIcon}
                  alt="linkedin-icon"
                  className={styles.icons}
                ></img>
              </a>
            </section>
            <p>
              WILL PIRO is full stack software engineer who relishes in the
              mentality that every project deserves a clear goal, detailed plan,
              sensible testing framework, and the grit to execute. As a former
              City Planner, he looks forward to building applications that exist
              at the intersection of sustainable community development and
              web-based technologies that produce positive, tangible, and
              equitable outcomes.
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
