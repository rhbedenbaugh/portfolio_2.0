import '../App.css';

function Navbar(){
  return(
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
            <a href='#about'>About</a>
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
              href='https://www.linkedin.com/in/robertbedenbaugh/overlay/1635537980117/single-media-viewer/?profileId=ACoAABd9cHUBuiUH5F61RNenLX_rpP-dF43QU4w'
              class='button'
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar;