import '../App.css';

function About() {
  return (
    <about class='section-pine'>
      <section id='about'>
        <h2>About me</h2>

        <article>
          <div class='text'>
            <h1>&nbsp;</h1>
            <h3>Just the facts</h3>
            <p class='blackbox'>
              I've been writing code since&nbsp;
              <a
                href='https://en.wikipedia.org/wiki/1999'
                target='_blank'
                rel='noreferrer'
              >
                1999
              </a>
              . The majority of my career has been dedicated to writing &
              optimizing&nbsp;
              <a
                href='https://en.wikipedia.org/wiki/G-code'
                target='_blank'
                rel='noreferrer'
              >
                gcode
              </a>
              &nbsp;for manufacturing machines. "Time is money" and the faster
              machines produce, the better. I currently have a great full-time
              on-site position at&nbsp;
              <a
                href='https://www.itt.com/home'
                target='_blank'
                rel='noreferrer'
              >
                ITT, Inc
              </a>
              . <br />I started learning web dev techs 3 years ago and
              attended&nbsp;
              <a
                href='https://www.codesmith.io/'
                target='_blank'
                rel='noreferrer'
              >
                Codesmith
              </a>
              's Global Part-Time Remote Immersive (
              <a
                href='https://www.codesmith.io/immersive-program-page#our_programs'
                target='_blank'
                rel='noreferrer'
              >
                PTRI
              </a>
              ) program during 2022. I am currently considering fully-remote
              frontend positions.
              <br />
              <br />
              My favorite hobby is yardwork and gardening. Working outside and
              getting some VitaminD may be the greatest form of recreational
              therapy. We grow a good portion of our own food, have several
              fruiting trees and&nbsp;
              <a
                href='https://www.npr.org/sections/thesalt/2017/09/26/551835327/muscadines-may-be-the-best-grapes-you-ve-never-tasted'
                target='_blank'
                rel='noreferrer'
              >
                vines
              </a>
              , and many flowering bushes. Caring for these and simply trimming
              the grass are so satisfying. <br />I even enjoy blowing the leaves
              in the&nbsp;
              <a
                href='https://www.google.com/search?q=ber+months&rlz=1C1CHZN_enUS982US982&sxsrf=AJOqlzWzS2mKq3b6ptEeWBfbcszKU90SwQ:1673311035721&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjT0Yev4bv8AhUXnWoFHbmwAKsQ_AUoAXoECAEQAw&biw=1536&bih=760&dpr=1.25'
                target='_blank'
                rel='noreferrer'
              >
                BER
              </a>
              &nbsp;months.
            </p>
          </div>
          <img src={require('../images/me.jpg')} alt='Robert Bedenbaugh.' />
        </article>
      </section>
    </about>
  );
}

export default About;
