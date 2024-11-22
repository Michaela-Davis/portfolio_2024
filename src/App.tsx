import './App.css';
import { Review } from './components/Review';

function App() {
  let currentYear = new Date().getFullYear()
  
return (
<>
  {/* TO DO: Light/Dark mode is not MVP
  <nav className="navbar">
    <div className="container navbar__wrapper">
      <div className="logo">Logo</div>
      <div className="navbar__items">
        <div className="navbar__item">(email)</div>
        <div className="navbar__item">(light / dark) </div>
      </div>
    </div>
  </nav> */}

  <section className="section hero">
    <div className="container">
      <div className="hero__wrapper">
        <div>
          <div className="hero__name">
            <h1 className='title-1'>Michaela Davis</h1>
          </div>
          <div className="hero__description">
            <h2 className='title-1'>Engineer + Design Technologist</h2>
            <p className="hero__body">
              Hi! I'm a Portland-based software engineer and design technologist with over five years of experience building front-end software and design systems from the ground up.
            </p>
            <p className="hero__body">
              My primary expertise is front end and design system engineering, but I also have a strong understanding of UI/UX design principles and design system management and strategy. I built, tested, and deployed design system features like design tokens, components, and documentation, while also providing user support, educational material, and collaborating cross-functionally with our design partners during my most recent role as an engineer on the Rocket Design System team at <a href="https://www.rocketmortgage.com/" target="_blank" rel="noopener noreferrer">Rocket Mortgage</a>. 
            </p>
            <p className="hero__body">
              Please <a href="mailto:michaela.delight@gmail.com" target="_blank" rel="noopener noreferrer">reach out</a> if you would like to discuss opportunities. 
            </p>
            <div className="hero__links">
              <a href="https://www.linkedin.com/in/michaela-davis/" target="_blank" rel="noopener noreferrer" className="hero__link">LinkedIn<i className="fa fa-arrow-up" aria-hidden="true"></i></a>
              <a href="https://github.com/Michaela-Davis?tab=overview&from=2020-12-01&to=2020-12-31" target="_blank" rel="noopener noreferrer" className="hero__link">GitHub<i className="fa fa-arrow-up" aria-hidden="true"></i></a>
              <a href="https://www.figma.com/design/Gzdwltv04SG0BUYtokOiFx/Delightful-Design-System?node-id=0-1&m=dev&t=JvEJsDti93QNrtzZ-1" target="_blank" rel="noopener noreferrer" className="hero__link">Figma<i className="fa fa-arrow-up" aria-hidden="true"></i></a>
              <a href="https://www.codewars.com/users/M%20Delight" target="_blank" rel="noopener noreferrer" className="hero__link">Codewars<i className="fa fa-arrow-up" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section projects">
    <div className="container">
      <h2 className="section__header">Projects</h2>
      <div className="projects__wrapper">
        <section className='project'>
          <img src='/assets/screenshots/rocket-mobile.png' className='project__thumbnail'
            alt='Rocket Mortgage' />
          <h2 className='project__title'>Rocket Mortgage</h2>
          <h3 className='project__sub-title'>UX Engineer (Software Engineer)</h3>
          <p className='project__description'>
            Rocket Design System (RDS) engineering team member for the Rocket Family of Companies. RDS serves over 45 products within the Rocket Family of Companies, including Rocket Mortgage, Rocket Auto Loans, and Rocket Money. I built and maintained UI components in React and Angular, documented and tested them, and collaborated with design to improve clarity and user experience. I created detailed engineering blueprints, led team discussions on technical paths, and developed a comprehensive video guide for onboarding engineers to the React library of the design system.
          </p>
        </section>

        <section className='project'>
          <img src='/assets/screenshots/puppet-mobile.png' className='project__thumbnail' alt='Puppet homepage' />
          <h2 className='project__title'>Puppet</h2>
          <h3 className='project__sub-title'>Senior Web Engineer</h3>
          <p className='project__description'>
            I was the co-maintainer of Puppet.com; a JAMstack site consisting of a decoupled custom React frontend with WordPress backend and many integrations such as Greenhouse and Marketo. My responsibilities include web engineering, page building, training, documentation, UI/UX and design implementation, analytics, content authoring support, and interfacing with stakeholders in departments
            across the company. I also created engaging animated experiences like the Puppetize timeline and provided training, documentation, and support to streamline the page-building process for content authors.
          </p>
        </section>

        <section className='project'>
          <img src='/assets/screenshots/mwg-aaa-mobile.png' className='project__thumbnail'
              alt='AAA Mountain West Group homepage' />
          <h2 className='project__title'>AAA NCNU</h2>
          <h3 className='project__sub-title'>Front End Software Engineer</h3>
          <p className='project__description'>
            I reskinned previous Drupal sites, primarily leveraging PatternLab to maintain consistency and streamline the design process. I also built reusable components now actively in use on <a href="https://www.mwg.aaa.com/" target="_blank" rel="noopener noreferrer">mwg.aaa.com</a>, enhancing the site’s functionality and user experience. I created an internal cookie tool that simplifies working on sites tied to different zip codes which helped improve efficiency. Additionally, I delivered “Gherkin: A Primer” presentations to AAA Project Managers and the local Drupal User Group, teaching them how to write Gherkin testing statement, sfostering better alignment between AAA PMs and engineers.
          </p>
        </section>
      </div>
    </div>
  </section>

  <section className="section reviews">
    <div className="container">
      <h2 className="section__header">Reviews</h2>
      <div className="reviews__wrapper">
         <Review 
          imgURL={'assets/rocket_mortgage_logo.jpeg'} imgAlt={'Rocket Mortgage'} name={'Yashita Reddy'} title={'Director of Engineering, Rocket Mortgage'} review={'"... Michaela played a crucial role in fostering collaboration between the design and engineering teams. Her knowledge of design and ability to work cross-functionally helped ensure that all voices were included in the process of building and maintaining the Design System."'}
        />
        <Review 
          imgURL={'assets/elle-hillard.jpeg'} imgAlt={'Elle Hillard'} name={'Elle Hillard'} title={'RDS Engineering Manager, Rocket Mortgage'} review={'"Michaela is an outstanding User Experience (UX) Engineer. She possesses a rare combination of attention to detail, problem solving mindset, and such a strong desire to learn and improve... Her positive attitude, enthusiasm, and willingness to go the extra mile have greatly contributed to the positive work environment we have enjoyed in our team."'}
        />
        <Review 
          imgURL={'assets/katie-guernsey.jpeg'} imgAlt={'Katie Guernsey'} name={'Katie Guernsey'} title={'Senior UX Engineer, Rocket Mortgage'} review={'"Michaela is incredibly detail oriented and elevated our code review process with that skill. You can always rely on her work to be well thought out and accurate. She is an incredible asset as an engineer and team member. I would highly recommend Michaela to anyone that is looking to elevate their engineering team."'}
        />
        <Review 
          imgURL={'assets/jonathan-waltner.jpeg'} imgAlt={'Jonathan Waltner'} name={'Jonathan Waltner'} title={'Director of Engineering, Airship'} review={'"Michaela is a smart, organized, and highly motivated software developer. During her time with us, she developed an excellent working relationship with her teammates, and was able to deliver more functionality than I expected when we started the project. She always came prepared to make sure time was well spent. I could see Michaela being a great addition to almost any team."'}
        />
      </div>
    </div>
  </section>

  <section className="section skills">
    <div className="container">
      <h2 className="section__header">Skills</h2>
      <div className="skill__wrapper">
        <ul className="skills__list">
          <li className="skills__item">React</li>
          <li className="skills__item">JavaScript / Typescript</li>
          <li className="skills__item"> HTML / CSS / SCSS
          </li>
          <li className="skills__item">Testing</li>
          <li className="skills__item">Design Systems</li>
          <li className="skills__item">Documentation / Storybook</li>
          <li className="skills__item">Design collaboration
          </li>
          <li className="skills__item">Figma</li>
          <li className="skills__item">Agile / Scrum</li>
          <li className="skills__item">Accessibility</li>
          <li className="skills__item">Automation</li>
          <li className="skills__item">Mentorship</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="section about">
    <div className="container">
      <div className="about__wrapper">
        <div>
        <img src='/assets/michaela.png' className='about__thumbnail' alt='Michaela headshot' />
        <div className="about__description">
          <h2 className="section__header">About</h2>
          <p className="about__body">
            I’m an engineer at heart, but my journey has also made me a self-taught designer with a psychology degree, giving me a unique perspective on bridging the gaps between technical and creative disciplines. I’m passionate about fostering collaboration and communication across teams to create impactful, user-focused solutions.
          </p>

          <p className="about__body">
            Outside of work, you might find me hiking in the great outdoors, diving into a good book, experimenting in the kitchen, or working on arts and crafts projects. I’ve spent the past decade enjoying life in beautiful Portland, Oregon, where my partner and I recently welcomed an adorable rescue cat into our home—she’s quickly become part of the family.
          </p>

          <p className="about__body">
            I’m currently seeking new opportunities and would love to connect to discuss potential collaborations or the roles I’m exploring. Feel free to <a href="mailto:michaela.delight@gmail.com" target="_blank" rel="noopener noreferrer">reach out</a>!
          </p>
        </div>
        </div>
      </div>
      {/* TO DO: Fix or remove this form <form action='https://formspree.io/michaela.delight@gmail.com' method='POST' className='row'>
                  <div className='form-group col-12'>
                    <label for='name'>Name:</label>
                    <input type='text' name='name' placeholder='First Last' className='form__input'>
                  </div>
                  <div className='form-group col-12'>
                    <label for='email'>Email:</label>
                    <input type='email' name='_replyto' placeholder='address@email.com' className='form__input'>
                  </div>
                  <div className='form-group col-12'>
                    <label for='textarea'>What would you like to talk about?</label>
                    <textarea name='textarea' placeholder='Looking for a developer?' className='form__input'></textarea>
                  </div>
                  <div className='form-group col'>
                    <input type='submit' value='Send'>
                  </div>
                </form> */}
    </div>
  </section>

  <footer className="section">
    <div className="container">
      <p>© {currentYear} Michaela Davis</p>
    </div>
  </footer>

</>
);
}

export default App;
