import '../App.css';
// import Project from './Project';

function ProjectContainer() {
  return (
    <>
      <section id='projects' class='section-skyblue'>
        <h2>Project List</h2>
        <article>
          <div class='text'>
            <h1>&nbsp;</h1>
            <h4>Latest Project</h4>
            <h3>Tiny Movie Finder</h3>
            <p class='textbox'>
              <a
                href='https://tiny-movie-finder.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                This
              </a>
              &nbsp;hits the OMDb API for movie info. Tapping a movie card opens Google of the movie. Find some fun to watch. BTW,&nbsp;
              <a
                href='https://github.com/rhbedenbaugh/Movie_Search'
                target='_blank'
                rel='noreferrer'
              >
                here
              </a>
              &nbsp;is the github repo for your viewing pleasure.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <a
            href='https://tiny-movie-finder.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require('../images/TFM.png')}
              alt='Screenshot of Tiny Movie Finder'
            />
          </a>
        </article>

        <article>
          <div class='text'>
            <h1>&nbsp;</h1>
            <h3>Machinist Endmill Speed and Feed Calculator</h3>
            <p class='textbox'>
              <a
                href='https://speedfeedcalc.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                This
              </a>
              &nbsp;was made OG-style because, frankly, I needed a
              refresher.&nbsp;
              <a
                href='https://github.com/rhbedenbaugh/SurfaceSpeedCalculator'
                target='_blank'
                rel='noreferrer'
              >
                Here
              </a>
              &nbsp;is the github repo. Feel free to fork, clone, and make it
              your own.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <a
            href='https://speedfeedcalc.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require('../images/S&F_calc.png')}
              alt='Screenshot of speed and feed calculator'
            />
          </a>
        </article>

        <article>
          <div class='text'>
            <h1>&nbsp;</h1>
            <h3>College Calculator</h3>
            <p class='textbox'>
              <a
                href='https://clemson-calculator.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                This
              </a>
              &nbsp;was a fun project & core functions work flawlessly to my
              knowledge. I do need to finish the color change logic for other
              colleges.&nbsp;
              <a
                href='https://github.com/rhbedenbaugh/Clemson-Calculator'
                target='_blank'
                rel='noreferrer'
              >
                Here
              </a>
              &nbsp;is the github repo. Feel free to fork, clone, and make PRs.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <a
            href='https://clemson-calculator.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require('../images/Clemson Calculator.jpg')}
              alt='Screenshot of Clemson Calculator.'
              href='https://clemson-calculator.netlify.app/'
            />
          </a>
        </article>

        <article>
          <div class='text'>
            <h1>&nbsp;</h1>
            <h3>Wilson Tree Service, LLC</h3>
            <p class='textbox'>
              Now&nbsp;
              <a
                href='https://christinadroberts.github.io/WilsonTreeServiceLLC/'
                target='_blank'
                rel='noreferrer'
              >
                this
              </a>
              &nbsp;was a great experience! I worked with&nbsp;
              <a
                href='https://www.linkedin.com/in/christina-roberts-fsd/'
                target='_blank'
                rel='noreferrer'
              >
                Christina Roberts
              </a>
              &nbsp;on this local small business site. We collaborated and
              discussed MANY ideas and were both pleased with the final
              result.&nbsp;
              <a
                href='https://github.com/rhbedenbaugh/WilsonTreeServiceLLC'
                target='_blank'
                rel='noreferrer'
              >
                Here
              </a>
              &nbsp;is the link to my fork.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <a
            href='https://christinadroberts.github.io/WilsonTreeServiceLLC/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require('../images/Wilson Tree Service.jpg')}
              alt='Screenshot of Wilson Tree Service.'
            />
          </a>
        </article>
      </section>
    </>
  );
}

export default ProjectContainer;
