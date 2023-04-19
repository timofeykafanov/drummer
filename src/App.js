import './App.css';
import image from './images/612908026.jpeg';

function App() {
  return (
    <div className='page'>
      <header className='header'>

      </header>
      <main className='main'>
        <section className='about'>
          <img className='about__photo' src={image} alt='main'></img>
          <div className='about__description'>
            <h1 className='about__name'>Timofey Kafanov</h1>
            <p className='about__profession'>Drummer</p>
            <p className='about__text'>I am a drummer with experience in drum shows.
            I have been performing with different stars and touring in various cities.
            My passion for drumming started at a young age and I have since then dedicated
            myself to mastering this craft. Being part of various drum shows has taught
            me the importance of teamwork and collaboration in creating an unforgettable performance.
            I am always looking for new opportunities to share my love for drumming and create
            something special with other musicians!</p>
          </div>
        </section>

        <section className='section'>
          <h2 className='section__title'>The show "Mirrors" in Kaliningrad</h2>
          <iframe title='vg' className='section__video' src="https://www.youtube.com/embed/ESgRyUxy_Tw"
          frameborder="0"></iframe>
          <p className='section__text'>An hour-and-a-half concert in which I took part,
          playing several instruments including the marimba and many types of drums</p>
        </section>

        <section className='section'>
          <h2 className='section__title'>Vasiliev Groove</h2>
          <iframe title='vg' className='section__video' src="https://www.youtube.com/embed/kej_LV2Fg_E"
          frameborder="0" allowfullscreen></iframe>
          <p className='section__text'>Vasiliev Groove performance with marching drums</p>
        </section>

        <section className='section'>
          <h2 className='section__title'>Game of Thrones by Vasiliev Groove</h2>
          <iframe title='game' className='section__video' src="https://www.youtube.com/embed/fEVhfKAXQFI"
          frameborder="0" allowfullscreen></iframe>
          <p className='section__text'>Cover of the main musical theme of Game of Thrones</p>
        </section>

        <section className='photo'>
          <h2 className='photo__title'>Live photos</h2>
          <div className='photo__grid'>
            <div className='photo__bigDrum'></div>
            <div className='photo__snareDrum'></div>
            <div className='photo__division'></div>
            <div className='photo__sticks'></div>
            <div className='photo__march'></div>
            <div className='photo__stage'></div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <a className='footer__link' href='mailto: tim.kafanov@gmail.com' type='email'>tim.kafanov@gmail.com</a>
        <a className='footer__link' href='https://t.me/tim_kafanov'>Telegram</a>
      </footer>
    </div>
  );
}

export default App;
