import '../App.css';

let projects = [
  {
    id: 1,
    label: 'Latest Project',
    title: 'Machinist Endmill Speed and Feed Calculator',
    text: 'This was made OG-style because, frankly, I needed a refresher. Here is the github repo. Feel free to fork, clone, and make it your own.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      site: 'https://speedfeedcalc.netlify.app/',
      repo: 'https://github.com/rhbedenbaugh/SurfaceSpeedCalculator',
    },
  },
  {
    id: 2,
    label: 'Recent Project',
    title: 'College Calculator',
    text: 'This was a fun project & core functions work flawlessly to my knowledge. I do need to finish the color change logic for other colleges. Here is the github repo. Feel free to fork, clone, and make PRs.',
    stack: ['React', 'HTML', 'CSS', 'JavaScript'],
    links: {
      site: 'https://clemson-calculator.netlify.app/',
      repo: 'https://github.com/rhbedenbaugh/Clemson-Calculator',
    },
  },
  {
    id: 3,
    label: 'Funnest Project',
    title: 'Wilson Tree Service, LLC',
    text: 'Now this was a great experience! I worked with Christina Roberts on this local small business site. We collaborated and discussed MANY ideas and were both pleased with the final result. Here is the link to my fork.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      site: 'https://wilsonsemergencytreeservice.com',
      repo: 'https://github.com/rhbedenbaugh/WilsonTreeServiceLLC',
    },
  },
];

function Project() {
  projects.forEach(function (el) {
    return (
      <article>
        <div class='text'>
          <h1>&nbsp;</h1>
          {/* <h4>${(label.value)}</h4> */}
        </div>
      </article>
    );
  });
}

export default Project;
