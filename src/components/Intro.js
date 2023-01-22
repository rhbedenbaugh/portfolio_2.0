import '../App.css';

function Intro(){
  return(
    <section id='intro'>
        <p class='name'>
          Hi, my name is <span>Robert Bedenbaugh.</span>
        </p>
        <h2>I create great user experiences.</h2>
        <p>
          I'm a Sr. Frontend Engineer focusing on React, JS/TS, HTML, & CSS.
        </p>
        <p>
          Currently, I'm free-lancing for&nbsp;
          <a
            href='https://www.linkedin.com/company/82512583/admin/'
            target='_blank'
            rel='noreferrer'
          >
            Obsidian 6.0
          </a>
          &nbsp;& creating websites for small business and non-profits.
        </p>
      </section>
  )
}

export default Intro;