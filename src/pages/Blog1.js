import React from 'react'
import {
    Link,
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
}})

const scrollTop = () => {
    window.scrollTo(0, 0)
}

const Blog1 = () => {
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
          <img className="logo" src="/img/sitraLogo.svg" alt="Logo"/>
        </Link>
        <Link to="/#blogs">
          <img className="cross" src="/img/cross-sign.svg" alt=""/>
        </Link>
   </nav>

    <div className="page">
    
    <div className="topicContainer">
    <div className="topic">
      <p>Viherpesun ehkäisy</p>
    </div>
    </div>

    <div className="header">
      <h1>Viisi pointtia <br/> - mistä tunnistat viherpesun?</h1>
      <p>
        Nykypäivän kuluttajat vaativat yrityksiltä enemmän tekoja ja vastuullisia sellaisia. Vastuullisuus onkin noussut viime vuosina trendiksi, jonka myös kaupalliset toimijat ovat noteeranneet. Osa yrityksistä on havainnut puutteet ja on tehnyt muutoksia muunmuassa materiaali- ja toimitusketjuvalinnoissa, mutta moni ratsastaa vastuullisuustrendillä ja saalistaa kaupallista voittoa ilman konkreettisia tekoja. Miten kuluttaja osaa sitten bongata oikeat ja merkitykselliset toimijat viherpesijöiden seasta?
      </p>
    </div>

    <div className="wrapper">
      <div className="author">
        <h3>Kirjoittaja</h3>
        <img src="/img/becc Edited.jpeg" alt=""/>
        <h2>Rebekka Sihvola</h2>
        <p>Asiantuntija<br/> Sitra</p>
      </div>
      <img src="/img/Laundry.jpg" alt=""/>
      
    </div>


    <div className="textContent">

    <div className="number"><h1>1</h1></div>   
    <h3>Varo korulauseita</h3>
    <p>
    Conscious. Kestävä. Ympäristöystävällinen. Ekologisesti turvallinen. Energiatehokas Termistö, jota käytetään puhuttaessa vaatteista, on usein melko ympäripyöreää ja jättää kuluttajalle hyvin epämääräiseksi sen mitä sanoilla oikeasti saavutetaan. Yritykset mittaavat vastuullisuuden vaikutusta eri tavoilla, joten kauniiden sanojen takana ei välttämättä oikeita tekoja. Tarkoittaako Conscious – suomeksi tietoinen – tuotantoketjunsa tiedostamisesta, vaiko inklusiivisesta työympäristöstä? Kuluttajan on vaikea arvailla. Tästä syystä kannattaakin seurata vaatteiden valinnassa muita yksityiskohtia.
    </p>

    <div className="number"><h1>2</h1></div>
    <h3>Tarkista sertifikaatit</h3>
    <p>
    Vaateteollisuudella on itsenäisiä ja riippumattomien toimijoiden merkeille antamia sertifikaatteja. Tällaiset ovat toimiva peruste vaatteen vastuullisuudesta. Hyviä sertifikaatteja ovat esimerkiksi:
    <div className="list">
    <h2>	Bluesign</h2>  Tuotantoprosessit, sellaisia että resursseja olisi käytetty ympäristön suojelun kannalta mahdollisimman tehokkaasti. 
    <h2>	GOTS eli Global Organic Textile Standard </h2> Tekstiili on ekologinen ja eettinen. Huomioidaan vaatteen koko elinkaari ja myönnetään vain luomukuiduille.
    <h2>	Ökö-Tex 100</h2>  Ympäristö- ja tuoteturvallisuusmerkki, joka rajoittaa tiettyjen haittakemikaalien käyttöä. Ei takaa luomukankaiden käyttöä.</div>
   <br/> <br/> Yrityksillä, kuten H&M ja Lindex voi olla omia vastuullisilta kuulostavia “sertifikaatteja”, jotka eivät kuitenkaan takaa minkäänlaisia oikeita tekoja, niin kuin riippumattomien yhdistysten sertifikaatit.
    </p>

    <div className="number"><h1>3</h1></div>
    <h3>Hyviä tekoja, mutta kuinka suuria?</h3>
    <p>
    Monet pikamuotifirmat mainostavat valmistavansa vaatteet ekologisesti ja usein näin voikin olla, mutta vain pienenä osana koko vaatteesta. Vaikka vaate olisikin ”kierrätetty”, suuri osa sen pääraaka-aineista voi yhtä hyvin olla mistä tahansa materiaalista. Jos mallistoa mainostetaan 100% luomupuuvillasta tehdyksi, tämä ei tarkoita että kaikki vaatteen raaka-aineet olisivat luomusta. Paidan puuvilla voi olla toki kokonaan luomua, mutta jos muut raaka-aineet ovat 80% polyesteria, luomun todellinen osuus on paljon minimaalisempi. 
    </p>

    <div className="number"><h1>4</h1></div>
    <h3>Vegaani ≠ Vastuullinen</h3>
    <p>
    Vegaanius on ollut elintarvikealoilla trendikästä ja suhteellisen tavallista jo jonkin aikaa ja trendi on alkanut levittäytyä myös muualle kulutustavaroihin. Vaatealalla vegaani viittaa vaatteisiin, jotka on tehty synteettisistä raaka-aineista nahkan ja muiden eläinperäisten raaka-aineiden sijaan. Vaikka vaatteiden valmistuksessa ei ole tuotettu eläimille kärsimystä, ne eivät välttämättä ole vastuullisia. Monet synteettiset vaihtoehdot esimerkiksi tekonahka valmistetaan öljystä, sekä materiaaleista, jotka eivät maadu. Tämän takia onkin suositeltavaa harkita uusien tekonahkavaatteiden ostamisen sijaan esimerkiksi kierrätettyjen vaatteiden hankkimista.
    </p>

    <div className="number"><h1>5</h1></div>
    <h3>Mikä todellisuudessa on kestävää?</h3>
    <p>
    Vaikka Zara ja H&M mainostavat tukevansa kestävää teollisuutta ja luovat ekologisia vaatemallistoja, ne eivät kuitenkaan poista sitä tosiasiaa, että pikamuoti on loppujen lopuksi kestämätön valinta. Viherpesua on huomion vieminen pois muista yrityksen toimista Conscious-mallistoihin ja vihreisiin logoihin. Vaateteollisuuden suurimmat paheet ovat ylituotanto ja kertakäyttöisyys, joita eivät paranna ekologisempien materiaalien minimaalinen käyttö. Paras ja ehkä lopullinen keino on siirtyä pois pikamuodin kuluttamisesta, muihin kestävämpiin ja pitempiaikaisiin vaatevaihtoehtoihin.
    </p>

      <ul className="sources">
        <li><a href="https://www.vogue.co.uk/news/article/greenwashing-in-fashion">"Greenwashing in fashion"</a></li>
        <li><a href="https://medium.com/age-of-awareness/how-to-spot-greenwashing-in-fashion-322f6828cc6b">"How to spot greenwashing in fashion?""</a></li>
        <li><a href="https://eetti.fi/2020/01/30/zalando-viherpesulassa/">"Zalando viherpesulassa"</a></li>
        <li><a href="https://kuluttaja.fi/artikkelit/viherpesua-vai-vastuullisuutta-kuluttaja-pyysi-asiantuntijaa-arvioimaan-vaateketjujen-omat-vastuullisuusmerkit/">"Viherpesua vai vastuullisuutta -kuluttaja pyysi asiantuntijaa arvioimaan vaateketjujen omat vastuullisuusmerkit"</a></li>
        <li><a href="https://sugar-universe.com/viherpesun-abc-ota-vastuullisuustermisto-haltuun/">"Viherpesun ABC - Ota vastuullisuustermistö haltuun""</a></li>
        <li>Kuva: "Laundry" by Average Jane is licensed under CC BY 2.0</li>
      </ul>
  </div>
</div>
</body>
        </>
    )
}

export default Blog1