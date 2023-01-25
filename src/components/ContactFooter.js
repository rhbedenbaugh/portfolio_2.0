import '../App.css';

function ContactFooter() {
  return (
    <footer class='footer'>
      <section id='contact'>
        <div>
          <h2>Contact me</h2>
        </div>

        <div class='grid-container'>
          <p>
            I'm always interested in hearing
            <br />
            about new coding, design, or
            <br />
            consultation opportunities.
            <br />
            I especially enjoy helping
            <br />
            501(c)(3)s get a site up and
            <br />
            running. Let's make something
            <br />
            great happen together.
          </p>
          <p></p>
          <p>
            <h2>
              Robert Bedenbaugh <br />
              &middot; <br />
              Sr. Frontend Engineer
            </h2>
          </p>
        </div>
        <div>
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
            <li>
              <a
                href='sms:+18642472299?&body=Hi%2C%20Robert.%20I%27d%20like%20to%20talk%20with%20you%200about%20'
                target='_blank'
                rel='noreferrer'
              >
                <span class='fas fa-message' aria-hidden='true'></span>
                <span class='sr-only'>Text</span>
              </a>
            </li>
          </ul>
          <p>
            <small>&copy; 2023 Robert Bedenbaugh. All rights reserved.</small>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default ContactFooter;
