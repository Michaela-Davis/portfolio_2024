import React from 'react';
import './App.css';

function DummyApp() {
  return (
    <div className='container'>
      
      <header>
        <p>
          Meet <br/>
          <a href='https://www.linkedin.com/in/michaela-davis/'  target='_blank' rel='noopener noreferrer'>
            <code>Michaela Davis</code>
          </a>
          <br/>to hire her and learn more.
        </p>
        <img src='/assets/michaela.jpeg' className='project__thumbnail' alt='Michaela headshot'/>
      </header>

      <section className='section portfolio section--dark-grey' id='portfolio'>
        <div>

          <div className='section__heading'>
            <h2 className='section__title'>Portfolio</h2>
          </div>

          <div className='section__content'>

            {/* Rocket */}
            <article className='project project--lighter-grey'>
              <div>
                <h3 className='project__title'>Rocket Mortgage (team previously at Rocket Central)</h3>
                <h4 className='project__sub-title'>UX Engineer</h4>
                <p className='project__description'>
                  Built and maintained UI components in both React and Angular, including documentation and testing. Implemented UI/UX improvements across the component library, working closely with design to identify opportunities for clarity and improvement for clarity and improvement. Created and presented highly detailed engineering blueprints to the team and led discussions about the various paths, pros/cons, and the best path forward.
                </p>
              </div>

              <div className=''>
                <a href='https://rocketmortgage.com' target='_blank'>
                  <img src='/assets/screenshots/rocket.png' className='project__thumbnail' alt='Rocket Mortgage Github #2 Rocket Design System Contributor' />
                </a>
              </div>
            </article>

            {/* Puppet */}
            <article className='project project--lighter-grey'>
              <h3 className='project__title'>Puppet (now Puppet by Perforce)</h3>
              <h4 className='project__sub-title'>Senior Web Engineer</h4>
              <p className='project__description'>Maintained Puppet.com, a React/Gatsby front-end with a headless WordPress backend with integrations into multiple APIs. Puppet.com included all online marketing material for the company, as well as an extensive library of documentation for the product.</p>
              <div className='row row--center'>

                {/* visible-sm and down (hidden-md and up) */}
                <div className='space-around'>
                  <div className='col-12 d-sm-block d-md-none d-lg-none d-xl-none'>
                    <a href='https://puppet.com' target='_blank'>
                      <img src='/assets/screenshots/puppet.png' className='project__thumbnail' alt='Puppet.com screenshot' />
                    </a>
                  </div>
                </div>

                {/* visible-md and up (hidden-sm and down) */}
                {/* <div className='col-md-4 d-none d-md-block'>
                  <a href='https://proudground.org/' target='_blank'>
                    <img src='/assets/screenshots/proudground.png' className='project__thumbnail' alt='Proud Ground' />
                  </a>
                </div> */}

              </div>
            </article>

            {/* AAA */}
            <article className='project project--lighter-grey'>
              <h3 className='project__title'>AAA (AAA Northern California, Nevada & Utah)</h3>
              <h4 className='project__sub-title'>Front End Software Engineer</h4>
              <p className='project__description'></p>
              <div className='row row--center'>

                {/* visible-sm and down (hidden-md and up) */}
                <div className='space-around'>
                  <div className='col-12 d-sm-block d-md-none d-lg-none d-xl-none'>
                    <a href='https://mwg.aaa.com' target='_blank'>
                      <img src='/assets/screenshots/AAA mwg.aaa.com.png' className='project__thumbnail' alt='AAA.com screenshot' />
                    </a>
                  </div>
                </div>

                {/* visible-md and up (hidden-sm and down) */}
                {/* <div className='col-md-4 d-none d-md-block'>
                  <a href='https://proudground.org/' target='_blank'>
                    <img src='/assets/screenshots/proudground.png' className='project__thumbnail' alt='Proud Ground' />
                  </a>
                </div> */}

              </div>
            </article>

            {/* Hello World */}
            <article className='project project--lighter-grey'>
              <h3 className='project__title'>Hello World</h3>
              <h4 className='project__sub-title'>Software Engineer</h4>
              <p className='project__description'>
                Much of my work at Hello World constisted of building sites for Tyson, and online marketer for hundreds of dentists across the US. As a developer on this project, I am responsible for turning client mockups into fully responsive websites and hosting the sites on a development server. I completed 10 sites by myself from start to finish in less than 5 months!
              </p>

              <p>
                I was also responsible for a Sneaker-lab by Nike site. Sneaker-lab delivers real Nike product designed by artists, and manages the Nike relationship. As the developer on this project, I turned a five page client mockup into a fully responsive website on a tight timeline.
              </p>

              <div className='row'>
                {/* <div className='col-12 col-md-4 space-around'>
                  <a href='https://www.bcdds.com/' target='_blank'>
                    <img src='/assets/screenshots/drNelson.png' className='project__thumbnail' alt='Dr. B.C. Nelson' />
                  </a>
                </div> */}

                <div className='col-12 col-md-4 space-around'>
                  <a href='https://www.bigskydentalclinic.com/' target='_blank'>
                    <img src='/assets/screenshots/drClave.png' className='project__thumbnail' alt='Dr. Chris Clave' />
                  </a>
                </div>

                {/* <div className='col-12 col-md-4 space-around'>
                  <a href='https://www.drhenningsen.com/' target='_blank'>
                    <img src='/assets/screenshots/drHenningsen.png' className='project__thumbnail'
                      alt='Dr. Brian Henningsen' />
                  </a>
                </div> */}
              </div>
            </article>

            {/* Solid Digital */}
            <article className='project project--lighter-grey'>
              <h3 className='project__title'>Solid Digital</h3>
              <h4 className='project__sub-title'>Web Development Intern</h4>
              <p className='project__description'>Worked with another Epicodus intern at Solid Digital (previously Solid
                Interactive) to create an internal 'Merge Requests Dashboard' using APIs, Express, MongoDB, Mongoose, and
                Pug templating along with Vue.js to pull and display user reporting data from GitLab. I designed and
                styled the user interface for the internal project (see screenshots of before and after below) as well as
                creating the individual user pages. Created a general README template and integrated it into existing
                Node.js and Wordpress templates. </p>
              {/* <p style='color:red;'>Checking w/ Solid's CTO about NDA before posting actual</p> */}
              <div className='row'>
                <div className='col-6 col-md-3'>
                  {/* <div className='space-around'>
                    <a href='https://www.soliddigital.com/' target='_blank'>
                      <h5 className='project__screenshot-title center'>Dashboard Home<br />BEFORE</h5>
                      <img src='/assets/screenshots/solidPlaceholder.png' className='project__thumbnail'
                        alt='Solid Placeholder' />
                    </a>
                  </div> */}
                </div>
                <div className='col-6 col-md-3'>
                  <div className='space-around'>
                    <a href='https://www.soliddigital.com/' target='_blank'>
                      <h5 className='project__screenshot-title center'>Dashboard Home<br />AFTER</h5>
                      <img src='/assets/screenshots/solidPlaceholder.png' className='project__thumbnail'
                        alt='Solid Placeholder' />
                    </a>

                  </div>
                </div>
                {/* <div className='col-6 col-md-3'>
                  <div className='space-around'>
                    <a href='https://www.soliddigital.com/' target='_blank'>
                      <h5 className='project__screenshot-title center'>Dashboard User<br />BEFORE</h5>
                      <img src='/assets/screenshots/solidPlaceholder.png' className='project__thumbnail'
                        alt='Solid Placeholder' />
                    </a>

                  </div>
                </div> */}
                {/* <div className='col-6 col-md-3'>
                  <div className='space-around'>
                    <a href='https://www.soliddigital.com/' target='_blank'>
                      <h5 className='project__screenshot-title center'>Dashboard User<br />AFTER</h5>
                      <img src='/assets/screenshots/solidPlaceholder.png' className='project__thumbnail'
                        alt='Solid Placeholder' />
                    </a>

                  </div>
                </div> */}
              </div>
            </article>

            {/* Epicodus */}
            <article className='project project--lighter-grey'>
              <h3 className='project__title'>Epicodus</h3>
              <h4 className='project__sub-title'>Web Bootcamp Student</h4>
              <p className='project__description'>Completed course-work on PHP, JavaScript, and Drupal, along with various
                frameworks (Angular 2, Silex, etc.) and HTML/CSS. Learned how to work with other programmers through
                peer-programming, as well as developing problem-solving techniques. The images below are clickable links
                to the live versions of 3 of my favorite solo sites.</p>

              <div className='row'>
                <div className='col-12 col-md-4'>
                  <div className='space-around'>
                    <a href='http://dev-whitewater.pantheonsite.io/' target='_blank'>
                      <h5 className='project__screenshot-title center'>Drupal 8: Whitewater</h5>
                      <img src='/assets/screenshots/drupal8Whitewater.png' className='project__thumbnail'
                        alt='Drupal 8 Whitewater Project' />
                    </a>

                  </div>
                  <p className='project__description'>This was my final project for Epicodus, which was completed in about
                    2 days. I love Drupal so much that I decided to do my project in Drupal 8 even though it wasn't part
                    of the curriculum.</p>
                </div>

                <div className='col-12 col-md-4'>
                  <div className='space-around'>
                    <a href='http://dev-verbatim.pantheonsite.io/' target='_blank'>
                      <h5 className='project__screenshot-title center'>Drupal 7: Verbatim</h5>
                      <img src='/assets/screenshots/drupal7Verbatim.png' className='project__thumbnail'
                        alt='Drupal 7 Verbatim Project (received 1st Drupal Golden Dino)' />
                    </a>
                  </div>
                  <p className='project__description'>I received the 1st Golden Dino Award for Drupal (decided by the
                    instructor) for how I made the site look. Styling was not a requirement or something we were taught
                    but it makes me happy! This was a solo Friday project for Epicodus.</p>
                </div>

                <div className='col-12 col-md-4'>
                  <div className='space-around'>
                    <a href='https://whitewater-8efd7.firebaseapp.com/' target='_blank'>
                      <h5 className='project__screenshot-title center'>Angular 2: Sunny Days</h5>
                      <img src='/assets/screenshots/angularSunnyDays.png' className='project__thumbnail' alt='
                                JavaScript/Angular 2/Firebase: Sunny Days Whitewater' />
                    </a>
                  </div>
                  <p className='project__description'>This solo Friday project incorporates TypeScript into Angular 2 and
                    connects to Firebase for data storage. It live updates instantaneously thanks to two-way data binding.
                    Note the custom favicon on the tab for the live site - not required but I made it a personal goal.</p>
                </div>
              </div>



            </article>
          </div>

        </div>
      </section>


      <section className='section contact section--lightest-grey' id='contact'>
        <div className='container'>
          <div className='section__heading'>
            <h2 className='section__title'>Contact Me</h2>
          </div>
          <div className='section__content'>
            <div className='row '>

              {/* Form */}
              <div className='col-12 col-md-4'>
                {/* <form action='https://formspree.io/michaela.delight@gmail.com' method='POST' className='row'>
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

              {/* Social Media */}
              <div className='col-12 col-md-4 social-media-background'>
                <div className='align-vertical-center'>
                  <h3 className='center social-media-text'>Social Media</h3>
                  <div className='social-media'>
                    <a href='https://linkedin.com/in/michaela-davis' className='social-media__link'>
                      <i className='fa fa-3x fa-linkedin-square social-media-icon' aria-hidden='true'></i>
                    </a>
                    <a href='https://github.com/Michaela-Davis' className='social-media__link'>
                      <i className='fa fa-3x fa-github-square social-media-icon' aria-hidden='true'></i>
                    </a>
                    <a href='https://www.instagram.com/handmaderevival' className='social-media__link'>
                      <i className='fa fa-3x fa-instagram social-media-icon' aria-hidden='true'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}


