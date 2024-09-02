import './App.css';

function App() {
return (
<>
  <nav className="navbar">
    <div className="container navbar__wrapper">
      <div className="logo">Logo</div>
      <div className="navbar__items">
        <div className="navbar__item">(email)</div>
        <div className="navbar__item">(light / dark) </div>
      </div>
    </div>
  </nav>

  <div className="hero">
    <div className="container">
      <div className="hero__wrapper">
      <div className="hero__name">
        <h1>Michaela Davis</h1>
      </div>
      <div className="hero__description">
        <h2>Engineer + Design Technologist</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto tempora velit hic sequi exercitationem ipsum
          quisquam, consequatur repellendus doloribus libero labore ratione delectus ipsam molestiae deserunt unde
          aliquam aut.
        </p>
      </div>
      </div>
    </div>
  </div>
  <div className="skills">
    <div className="container">
      <h2 className="section-header">Skills</h2>
      <div className="skills__wrapper">
        <ul className="skills__list">
          <li className="skills__item">React</li>
          <li className="skills__item">JavaScript / Typescript</li>
          <li className="skills__item"> HTML / CSS / SCSS
          </li>
          <li className="skills__item">Testing</li>
        </ul>
        <ul className="skills__list">
          <li className="skills__item">Design Systems</li>
          <li className="skills__item">Documentation / Storybook</li>
          <li className="skills__item">Design collaboration
          </li>
          <li className="skills__item">Figma</li>
        </ul>
        <ul className="skills__list">
          <li className="skills__item">Agile / Scrum</li>
          <li className="skills__item">Accessibility</li>
          <li className="skills__item">Automation</li>
          <li className="skills__item">Mentorship</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="projects">
    <div className="container">
      <h2 className="section-header">Projects</h2>
      <div className="projects__wrapper">
        <section className='project'>
          <div>
            <h2 className='project__title'>Rocket Mortgage</h2>
            <h3 className='project__sub-title'>UX Engineer</h3>
            <p className='project__description'>
              Rocket Design System (RDS) engineering team member for the Rocket Family of Companies. RDS serves over 45
              products within the Rocket Family of Companies, including Rocket Mortgage, Rocket Auto Loans, and Rocket
              Money. I built and maintained UI components in React and Angular, documented and tested them, and
              collaborated with design to improve clarity and user experience. I created detailed engineering
              blueprints, led team discussions on technical paths, and developed a comprehensive video guide for
              onboarding engineers to the React library of the design system.
            </p>
          </div>
          <div>
            <img src='/assets/screenshots/rocket.png' className='project__thumbnail'
              alt='Rocket Mortgage Github #2 Rocket Design System Contributor' />
          </div>
        </section>

        <section className='project'>
          <div>
            <h2 className='project__title'>Puppet</h2>
            <h3 className='project__sub-title'>Senior Web Engineer</h3>
            <p className='project__description'>
              Co-maintainer of Puppet.com: JAMstack including a decoupled React frontend with WordPress backend. My
              responsibilities include web engineering, page building, training, documentation, UI/UX and design
              implementation, analytics, content authoring support, and interfacing with stakeholders in departments
              across the company.
            </p>
          </div>
          <div>
            <img src='/assets/screenshots/puppet.png' className='project__thumbnail' alt='Puppet homepage' />
          </div>
        </section>

        <section className='project'>
          <div>
            <h2 className='project__title'>AAA Northern California, Nevada & Utah</h2>
            <h3 className='project__sub-title'>Front End Software Engineer</h3>
            <p className='project__description'>
              I did things. Co-maintainer of Puppet.com: JAMstack including a decoupled React frontend with WordPress
              backend. My responsibilities include web engineering, page building, training, documentation, UI/UX and
              design implementation, analytics, content authoring support, and interfacing with stakeholders in
              departments across the company.
            </p>
          </div>
          <div>
            <img src='/assets/screenshots/mwg.aaa.com.png' className='project__thumbnail'
              alt='AAA Mountain West Group homepage' />
          </div>
        </section>
      </div>
    </div>
  </div>

  <div className="reviews">
    <div className="container">
      <h2 className="section-header">Reviews</h2>
      <div className="reviews__wrapper">
        <div className="review">
          <blockquote>
            I endorse Michaela Davis based on her contributions as a UX Engineer at Rocket. Her dedication to frontend engineering and design systems is evident. Within her role, Michaela demonstrated proficiency of Angular, React, and CSS to deliver features and components for our design system. Michaela played a crucial role in fostering collaboration between the design and engineering teams. Her knowledge of design and ability to work cross-functionally helped ensure that all voices were included in the process of building and maintaining Design System. Michaela's collaborative spirit, and desire to grow would make her an invaluable asset to any team. I am confident that she will continue to make significant contributions to any team and would not hesitate to recommend her.
          </blockquote>
        </div>
        <div className="review">
          <blockquote>
            I worked closely with and mentored Michaela during our time together at Rocket Central. She consistently develops her skills and actively seeks out feedback to grow. She take advantage of learning opportunities, is curious and asks questions. She takes the time to try to understand why we make decisions as a team. She regularly collaborates with other teams to ensure that she is delivering performant and accessible code. Michaela is incredibly detail oriented and elevated our code review process with that skill. You can always rely on her work to be well thought out and accurate. She is an incredible asset as an engineer and team member. I would highly recommend Michaela to anyone that is looking to elevate their engineering team.
          </blockquote>
        </div>
        <div className="review">
          <blockquote>
          Michaela is an outstanding User Experience (UX) Engineer and has made significant contributions to  our team and the overall success of Rocket. She possesses a rare combination of attention to detail,  problem solving mindset, and such a strong desire to learn and improve that she became a subject  matter expert on the Rocket Design System quickly after she arrived. This is sure to be seen in any  future endeavors she takes on. 
          In addition to her technical capabilities, Michaela is an excellent team player and has an innate ability to  collaborate effectively with colleagues at all levels. Her positive attitude, enthusiasm, and willingness to  go the extra mile have greatly contributed to the positive work environment we have enjoyed in our  team. 

          </blockquote>
        </div>
        <div className="review">
          <blockquote>
            Michaela is a smart, organized, and highly motivated software developer. She completed an internship with us in which she was tasked with a largely self-directed project. During her time with us, she developed an excellent working relationship with her teammate and with myself, and was able to deliver more functionality than I expected when we started the project. She always made the most of opportunities to gather feedback and assistance from more experienced developers, and always came prepared with a list of questions to make sure time spent assisting her was well spent.

            I could see Michaela being a great addition to almost any team.
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <div className="about">
    <div className="container">
      <h2 className="section-header">About</h2>
      <div className="about__wrapper">
        <img src='/assets/michaela.jpeg' className='project__thumbnail' alt='Michaela headshot' />
      </div>
    </div>
  </div>

</>
);
}

export default App;
