import React from 'react'
import {
    Link
} from 'react-router-dom'

//Nav scroll
let scrollOld = window.scrollY

window.addEventListener('scroll', () => {
    const navBarJS = document.getElementById('navBar')
    if (navBarJS) {
    let newScroll = window.scrollY
    if (newScroll > scrollOld) {
        navBarJS.style.transform = "translateY(-100%)"
    } else {
        navBarJS.style.transform = "translateY(0%)"
    }
    scrollOld = newScroll
  }
})

const scrollTop = () => {
  window.scrollTo(0, 0)
}

const Blog3 = () => {

    return (
        <>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Viherpesun ja disinformaation vastainen kurssityö - Blogi"
    />
    <link rel="stylesheet" type="text/css" href="blogStyle.css" media="screen"/>
  <title>Sitra Blogi</title>
  </head>
  <body onLoad={scrollTop}>
    <nav className="backNavBar" id="navBar">
      <Link to="/#blogs">
          <img className="logo" src="/img/sitraLogo.svg" alt=""/>
      </Link>
      <Link to="/#blogs">
          <img className="cross" src="/img/cross-sign.svg" alt=""/>
      </Link>
   </nav>

    <div className="page">
    
    <div className="topicContainer">
    <div className="topic" >
      <p>Viherpesun ehkäisy</p>
    </div>
    </div>

    <div className="header">
        <h1>Eroon viherpesusta <br/> - vaateteollisuuden rakenneuudistuksen paikka</h1>
      <p>
          diiba daaba
      </p>
    </div>

    <div className="wrapper">
      <div className="author">
        <h3>Kirjoittaja</h3>
        <img src="/img/becc Edited.jpeg" alt=""/>
        <h2>Rebekka Sihvola</h2>
        <p>Asiantuntija<br/> Sitra</p>
      </div>
      <img src="/img/morning-brew-M1n5CWH2xKI-unsplash.jpeg" alt=""/>
    </div>

    <div className="textContent">

     
    <h3>moi</h3>
    <p>
    Osa vaatteista lojuu kaapissa käyttämättömänä suurimman osan vuodesta. Kesämekko, joka tuli ostettua vuosi sitten alennusmyynnistä on ollut käytössä ehkä pari kertaa. Vaikka en ole luopumassa siitä vielä hetkeen ja käytän sitä todennäköisesti vielä loppukesän juhlissa, vaatteen elinympäristö painottuu vaatekaappiin. Tuotteen ostaminen toi toki mielihyvää. Olin haaveillut tästä tietystä mallista kauan ja kun minulla oli mahdollisuus, ostin sen. Kapitalistinen mielihyväostaminen on kivaa, mutta lyhytaikaista.
    </p>

    
    <h3>”Kaikkea kaunista ei tarvitse omistaa”</h3>
    <p>
    Ihmiset eivät ostele vaatteita siksi, että tarvitsisimme jotain, vaan hankimme, jotta meille tulisi hetkellinen euforia ja kokisimme itsemme tyylikkäämpinä, hyvännäköisempinä ja etenkin enemmän omina itsenämme. Vaatteet ovat itseilmaisun muoto ja monelle tärkeä keino välittää ulos viesti siitä millaisia olemme. Valinnat voivat korostaa yksilön identiteettiä, ryhmää tai luonnetta. Tietyt merkitykset ovat muotoutuneet vuosikymmenien saatossa yhteiskunnan määritelmien mukana. Värikkäät vaatteet kuvaavat usein pukeutujan luonteen rohkeutta tai iloisuutta, kun taas maltillisemmin sonnustautunut mielletään rauhalliseksi, sivistyneeksi tai johtajatyyppiseksi. Vaatteet ovat siis osa meitä, mutta tarvitseeko ne aina omistaa? Nykyinen kertakäyttökulttuuri on kestämätön, mutta itseilmaisu tulee jatkumaan vielä pitkään Tämä ristiriita on hankala, mutta korjattavissa vaateteollisuuden rakennemuutosten avulla. Kaikkea kaunista ei tarvitse omistaa – sen voi vuokrata.
      
    </p>
    <br></br>

    <p>
    Pikamuodin nykyinen talousmalli perustuu suurista tuotantovolyymeista saataviin tuottoihin ja nopeaan myyntiin. Myyntitapahtuma on hetkellinen eikä yksittäisestä vaatteesta saatavaa tuottoa voida toistaa samalle kappaleelle. Mitä enemmän ja mitä nopeammin myydään, sitä enemmän tuottoa saavutetaan. Pitkällä aikajänteellä tämä malli on kestämätön, myös pikavaatemerkeille. Ratkaisuna voisi toimia järjestelmän uudistaminen sellaiseksi, että vaatteiden ostamisen sijaan kuteita voitaisiin myös vuokrata. Vuokrauspalveluiden normalisointi hyödyttäisi myös pikavaatemerkkejä. Ne voisivat saada mahdollisuuden tehdä tuottoa samoista vaatteista moneen kertaan. Paine siirtyä kestävämpiin materiaaleihin ja vastuullisempiin tuottajiin vahvistuisi, koska yksittäisten vaatekappaleiden käyttö todennäköisesti lisääntyisi. Kesämekon voisi lainata niiksi muutamaksi päiväksi, kun se on käyttäjälle tarpeellista. Muina päivinä vaatteesta pääsee nauttimaan joku muu, joissain muissa juhlissa. Tästä hyötyvät siten lopulta kaikki. Vaate, sinä, joku vieras ja maapallo.
    </p>


  </div>
</div>
  </body>
        </>
    )
}

export default Blog3
