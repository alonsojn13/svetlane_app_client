import React from 'react'


export default function AvailableLanguages() {
  return (
    <>
     <h1>Available Languages</h1>
     
      <section className={cards.languagesContainer}>
        <header className={`header-basic`}>
          <h2>Available Languages</h2>
          <span>for learn on your language</span>
        </header>
        <div className={cards.cardsCarrousel}>

          <section>

            <div className={cards.languageCard}>
              <img className={cards.countryBackground} src={franceBg} alt="" />

              <header>
                <section>
                  <img className={cards.countryFlag} src={frFlag} alt="" />
                  <div className={cards.infoLanguage}>
                    <section>
                      <h3>French</h3>
                    </section>
                    <span>+300 million speakers</span>
                  </div>
                </section>
                <img className={cards.infoIcon} src={louvre} alt="" />
              </header>

              <main>
                <img className={cards.dark_map} src={darkMap} alt="" />

                <section className={cards.sec_one}>
                  <article>
                    <img src={profileTwo} alt="" />
                    <div>
                      <p>Bonjour</p>
                    </div>
                  </article>

                  <article>
                    <div>
                      <p>Ca va?</p>
                    </div>
                    <img src={profileOne} alt="" />
                  </article>

                </section>

                <section className={cards.sec_two}>
                  <div>
                    <p>Strong in Business and Education</p>
                  </div>

                  <div className={cards.levels}>
                    Levels:
                    <span>A1 - A2</span>
                    <span>B1 - B2</span>
                    <span>C1 - C2</span>
                  </div>
                  <div>
                    <p>Spoken in +30 countries</p>
                  </div>
                </section>


              </main>

            </div>

            <footer>
              <Link to="/training"><Btn1 text1="Start" img={ukFlag} /></Link>
              <p className={cards.btnBelowDesc}>Speak with elegance</p>
            </footer>

          </section>

        </div>

      </section>

         
    </>
  )
}
