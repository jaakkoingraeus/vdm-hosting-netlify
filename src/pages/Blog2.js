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

const Blog2 = () => {

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
        <h1>Tiedosta haitallinen viherpesu <br/> - haasta arjen tutut tavat</h1>
      <p>
        Kenelle kuuluu vastuu vaatteittesi vastuullisuudesta? Pesevätkö ylikansalliset yritykset omatuntonsa vihreillä kiiltokuvilla? Sitran kampanja ”Varo Viherpesua” pyrkii herättämään keskustelua vaateteollisuuden disinformaation ympärillä. 

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

    <div className="number"><h1>1</h1></div>   
    <h3>Todellinen vastuullisuus esille</h3>
    <p>
        Vihreät arvot. Kestävä tulevaisuus. Läpinäkyvyys.  Nämä ovat tuttuja sloganeita niin suurten kuin keskikokoistenkin yritysten markkinoinnissa. Kampanjasivuston Vihertutka nostaa yritysten todellisen vastuullisuuden esiin ja tarjoaa kuluttajalle mahdollisuuden tarkastella kulutusvaihtoehtoja läheltä. Suomalaiset ovat yhä kiinnostuneempia vaatteidensa alkuperästä, mutta oikeasti vastuullisten toimijoiden löytäminen vaatii tutkimista ja laajempaa uteliaisuutta. Pyrkimyksenä onkin lisätä kuluttajien ja varsinkin nuorten ajattelua vaatteiden hankkimisessa.  Ekologiset ajattelutavat voivat toimia itseään rikastuttavina tekijänä, jotka tekevät onnistuessaan vastuullisuuden arvostamisesta tavallista. Optimaalisin tilanne on sellainen, jossa ostaessaan tulevaisuudessa vaatteita kuluttajat päätyvät automaattisesti kestäviin vaihtoehtoihin. Tämä on pitkä prosessi, jonka tavoitteena on se, että kuluttajat ovat perillä vaatteittensa alkuperästä.
    </p>

    <div className="number"><h1>2</h1></div>
    <h3>Nuoret valokeilassa</h3>
    <p>
        Kampanjassa äänessä ovat Sitran asiantuntijat, mutta myös nuoret sosiaalisen median vaikuttajat. He toimivat kampanjan päätoimisina ääninä, joiden sisältö painottuu sosiaaliseen mediaan, kuten Instagramiin ja TikTokiin. Kampanjan videot, kuvat ja muu sisältö on kerätty tekijöiden kanssa sisältöpäivänä. Tämän ajankohdan pääasiallinen tarkoitus oli luoda yhteisymmärrystä ja räjähtävää sisältöä yhteistyössä Sitran kanssa. Teemoina toimivat ekologisuus identiteetin rinnalla, vastuullisuus ja counter culture. Kuvitus painottuu pesukoneikonografiaan, metaforiin ja satiiriseen sisältöön. Näiden tavoite on luoda shokkiarvoa ja laajempaa keskustelua aiheiden ympärille. Pääasiallisten kanavien lisäksi kampanjamme sisältöä jaetaan Twitterissä hashtagin #viherpesu kautta, jonne kampanjasivujen käyttäjät kommentoivat. Keskustelua käydään myös kampanjan omien verkkosivujen keskusteluosiossa.
      
    </p>


  </div>
</div>
  </body>
        </>
    )
}

export default Blog2
