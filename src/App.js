import './App.css'; 

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <h1>
              <a href='index.html'>
                <span class='fa-solid fa-laptop-code' aria-hidden='true'></span>
                <span>&nbsp;Robert Bedenbaugh</span>
              </a>
            </h1>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='about.html'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/robertbedenbaugh/'
              target='_blank'
              rel='noreferrer'
            >
              <span class='fa-brands fa-linkedin' aria-hidden='true'></span>
              <span class='sr-only'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/rhbedenbaugh'
              target='_blank'
              rel='noreferrer'
            >
              <span class='fa-brands fa-github-square'></span>
              <span class='sr-only'>Github</span>
            </a>
          </li>
          <li>
            <a
              href='https://docs.google.com/document/d/1dchiU19ny5UmCQ68kgbgRV1ZVv7U3Dgr5SRoiO_kgCA/edit?usp=sharing'
              class='button'
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <section id='intro'>
        <p class='name'>
          Hi, my name is <span>Robert Bedenbaugh.</span>
        </p>
        <h2>I create great user experiences.</h2>
        <p>
          I'm a Sr. Frontend Engineer focusing on React, JS/TS, HTML, & CSS.
        </p>
        <p>
          Currently, I'm working at&nbsp;
          <a
            href='https://www.linkedin.com/company/82512583/admin/'
            target='_blank'
            rel='noreferrer'
          >
            Obsidian 6.0
          </a>
          &nbsp;& freelancing creating websites for small business and non-profits.
        </p>
      </section>

      <div class='gradient-1'></div>

      <div class='section-skyblue'>
        <section id='projects'>
          <h2>Project List</h2>
          <article>
            <div class='text'>
              <h1>&nbsp;</h1>
              <h4>Latest Project</h4>
              <h3>Machinist Endmill Speed and Feed Calculator</h3>
              <p class='textbox'>
                <a
                  href='https://speedfeedcalc.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  This
                </a>
                &nbsp;was made OG-style because, frankly, I needed a refresher.&nbsp;
                <a
                  href='https://github.com/rhbedenbaugh/SurfaceSpeedCalculator'
                  target='_blank'
                  rel='noreferrer'
                >
                  Here
                </a>
                &nbsp;is the github repo. Feel free to fork, clone, and make it your
                own.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <img
              src={require('./images/S&F_calc.png')}
              alt='Screenshot of speed and feed calculator'
            />
          </article>

          <article>
            <div class='text'>
              <h1>&nbsp;</h1>
              <h4>Recent Project</h4>
              <h3>Clemson Calculator</h3>
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
                <img
                  src={require('./images/Clemson Calculator.jpg')}
                  alt='Screenshot of Clemson Calculator.'
                />
          </article>

          <article>
            <div class='text'>
              <h1>&nbsp;</h1>
              <h4>Funnest Project</h4>
              <h3>Wilson Tree Service</h3>
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
                &nbsp;on this local small business site. We collaborated and discussed
                MANY ideas and were both pleased with the final result.&nbsp;
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
            <img
              src={require('./images/Wilson Tree Service.jpg')}
              alt='Screenshot of Wilson Tree Service.'
            />
          </article>
        </section>
      </div>

      <div class='gradient-2'></div>

      <div class='section-pine'>
        <section id='contact'>
          <h2>Contact me</h2>
          <p>
            I'm always interested in hearing about new coding, design, or
            consultation opportunities. <br />
            I especially enjoy helping <br />
            501(c)(3)s get a site up and running. Let's make something great
            happen together.
          </p>
          <p>
            <a
              href='mailto:robertbedenbaughjr@gmail.com'
              class='button'
              target='_blank'
              rel='noreferrer'
            >
              Email me
            </a>
          </p>
        </section>
      </div>

      <div class='gradient-3'></div>

      <footer>
        <h2>
          Robert Bedenbaugh <br />
          &middot; <br />
          Sr. Frontend Engineer
        </h2>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/robertbedenbaugh/'
              target='_blank'
              rel='noreferrer'
            >
              <span class='fab fa-linkedin' aria-hidden='true'></span>
              <span class='sr-only'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.github.com/rhbedenbaugh'
              target='_blank'
              rel='noreferrer'
            >
              <span class='fab fa-github-square' aria-hidden='true'></span>
              <span class='sr-only'>Github</span>
            </a>
          </li>
          <li>
            <a
              href='mailto:robertbedenbaughjr@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <span class='fas fa-envelope' aria-hidden='true'></span>
              <span class='sr-only'>Email</span>
            </a>
          </li>
        </ul>
        <p>
          <small>&copy; 2023 Robert Bedenbaugh. All rights reserved.</small>
        </p>
      </footer>
    </div>
  );
}

export default App;
