(function(){

    const tipsJSON = {
        siteList: [
            {
                id: 1, 
                title: "Bil",
                description: "Kjøp, reparasjon og leie av bil volder forbrukere mye bry. Her finner du dine rettigheter og hvordan du går frem for å klage hvis noe er galt.",
                category: "Tips, råd og dine rettigheter",
                bgsrc: "bil.jpg",
                pagesList: [
                    {
                        pageID: 1, 
                        pageTitle: "Kjøp og salg av bil",
                        pageDesc: "Gode tips for et godt bilkjøp, og hjelp hvis du trenger å klage."
                    }, 
                    {
                        pageID: 2,
                        pageTitle: "Reparasjon av bil",
                        pageDesc: "Dine rettigheter når reparasjonen ikke gikk som ønsket."
                    }, 
                    {
                        pageID: 3,
                        pageTitle: "Parkeringsbot",
                        pageDesc: "Sjekk når det kan nytte å klage på boten og hvordan du går frem."
                    }, 
                    {
                        pageID: 4,
                        pageTitle: "Leie av bil",
                        pageDesc: "Sjekk kontrakt og forsikring  før du vrir om nøkkelen."
                    }, 
                    {
                        pageID: 5,
                        pageTitle: "Kjøreskole",
                        pageDesc: "Den billigste kjøreskolen er ikke alltid den beste. Sjekk referanser."
                    }, 
                    {
                        pageID: 6,
                        pageTitle: "Leasing av bil",
                        pageDesc: "Les alltid vilkårene nøye før du signerer en kontrakt."
                    }
                ]
            }, //end site 1
            {
                id: 2, 
                title: "Bolig",
                description: "Skal du pusse opp, leier du en leilighet, eller kanskje du akkurat har kjøpt drømmeboligen? Her kan du få gode tips og råd uansett boligsituasjon.",
                category: "Tips, råd og dine rettigheter",
                bgsrc: "bolig-tips.jpg",
                pagesList: [
                    {
                        pageID: 1, 
                        pageTitle: "Leie av bolig",
                        pageDesc: "Mange konflikter hadde vært unngått med bruk av kontrakt."
                    }, 
                    {
                        pageID: 2,
                        pageTitle: "Kjøp og salg av bolig",
                        pageDesc: "Tips og råd før før du kjøper og hjelp til å klage hvis ting går galt."
                    }, 
                    {
                        pageID: 3,
                        pageTitle: "Bygge bolig",
                        pageDesc: "Ett råd til deg som skal bygge bolig; Bruk en skikkelig kontrakt."
                    }, 
                    {
                        pageID: 4,
                        pageTitle: "Bruk av håndverker",
                        pageDesc: "Det er alltid lurt å benytte skriftlig kontrakt når du inngår avtale med håndverkere."
                    }, 
                    {
                        pageID: 5,
                        pageTitle: "Borettslag og sameie",
                        pageDesc: "Informasjon om blant annet dugnad, ansvar for vedlikehold og utleie."
                    }, 
                    {
                        pageID: 6,
                        pageTitle: "Strøm",
                        pageDesc: "Finn markedets beste strømtilbud og dine rettigheter hvis noe går galt."
                    }, 
                    {
                        pageID: 7,
                        pageTitle: "Vannlevering",
                        pageDesc: "Du kan både stille krav til og klage på vannkvaliteten."
                    }, 
                    {
                        pageID: 8,
                        pageTitle: "Flyttetjenester",
                        pageDesc: "Tips og råd om hva du bør tenke på når du flytter."
                    }
                ]
            }, //end site 2
            {
                id: 3, 
                title: "Økonomi og betaling",
                description: "Sjekk hva du bør tenke på når du skal velge bank eller forsikring. Du finner også informasjon om inkasso, kredittkjøp, netthandel, konkurs og svindel.",
                category: "Tips, råd og dine rettigheter",
                bgsrc: "økonomi-og-betaling.jpg",
                pagesList: [
                    {
                        pageID: 1, 
                        pageTitle: "Banktjenester",
                        pageDesc: "Sjekk beste låne- og investeringstilbud."
                    }, 
                    {
                        pageID: 2,
                        pageTitle: "Forsikring",
                        pageDesc: "Finn riktig forsikring og hvordan du går frem for å klage."
                    }, 
                    {
                        pageID: 3,
                        pageTitle: "Inkasso",
                        pageDesc: "Har du trøbbel med å gjøre opp for deg, ta kontakt og få til en avtale."
                    }, 
                    {
                        pageID: 4,
                        pageTitle: "Betalingsproblemer",
                        pageDesc: "Sliter du med å få endene til å møtes? Sjekk hvor du kan finne hjelp."
                    }, 
                    {
                        pageID: 5,
                        pageTitle: "Netthandel",
                        pageDesc: "Sjekk om netthandelen er seriøs og hvordan du kan klage."
                    }, 
                    {
                        pageID: 6,
                        pageTitle: "Kjøp på kreditt",
                        pageDesc: "Du har ekstra beskyttelse når du kjøper varen på kreditt"
                    }, 
                    {
                        pageID: 7,
                        pageTitle: "Konkurs",
                        pageDesc: "Du kan kreve det et konkursbo skylder deg, men du havner neppe først i køen. "
                    }, 
                    {
                        pageID: 8,
                        pageTitle: "Svindel",
                        pageDesc: "Råd om hvordan du holder deg unna svindel."
                    }
                ]
            }, //end site 3
            {
                id: 4, 
                title: "Digitale tjenester",
                description: "Her kan du lese mer om hva du bør tenke på før du inngår en avtale, og hvordan du klager hvis du ikke er fornøyd med tjenesten.",
                category: "Tips, råd og dine rettigheter",
                bgsrc: "digitalt.jpg",
                pagesList: [
                    {
                        pageID: 1, 
                        pageTitle: "Bredbånd",
                        pageDesc: "Rettighetene dine avhenger i stor grad av kontrakten du har. "
                    }, 
                    {
                        pageID: 2,
                        pageTitle: "Mobilabonnement",
                        pageDesc: "Det er mye å spare på å velge riktig mobilabonnement. "
                    }, 
                    {
                        pageID: 3,
                        pageTitle: "Innholdstjenester på mobil",
                        pageDesc: "Slik sperrer du for mobile innholdstjenester."
                    }, 
                    {
                        pageID: 4,
                        pageTitle: "Tv-tjenester",
                        pageDesc: "Avtalen du har med tv-tilbyderen, avgjør hva du kan kreve."
                    }
                ]
            }, //end site 4
            {
                id: 5, 
                title: "Reise",
                description: "Her finner du informasjon om dine rettigheter når du reiser, og hvordan du klager hvis uhellet er ute.",
                category: "Tips, råd og dine rettigheter",
                bgsrc: "reise.jpg",
                pagesList: [
                    {
                        pageID: 1, 
                        pageTitle: "Fly",
                        pageDesc: "Hva kan du kreve av flyselskapet ditt? Og hvordan går du frem? "
                    }, 
                    {
                        pageID: 2,
                        pageTitle: "Pakkereise",
                        pageDesc: "Hva du bør tenke på før du bestiller, og rettighetene dine hvis noe går galt. "
                    }, 
                    {
                        pageID: 3,
                        pageTitle: "Tog",
                        pageDesc: "Dine rettigheter når det kommer til refusjon og alternativ transport."
                    }, 
                    {
                        pageID: 4,
                        pageTitle: "Buss",
                        pageDesc: "Dine rettigheter til alternativ transport og kompensasjon."
                    }, 
                    {
                        pageID: 5,
                        pageTitle: "Taxi/Drosje",
                        pageDesc: "Misfornøyd med turen? Slik går du frem for å klage."
                    }, 
                    {
                        pageID: 6,
                        pageTitle: "Hotellovernatting",
                        pageDesc: "Hvordan du bestiller, avgjør hvilke rettigheter du har."
                    }
                ]
            }, //end site 5
            {
                id: 6, 
                title: "Andre varer og tjenester",
                description: "Her finner du informasjon om utvalgte varer og tjenester. Sjekk hva du bør tenke på før du kjøper noe, og hvordan du går frem hvis noe går galt.",
                category: "Tips, råd og dine rettigheter",
                bgsrc: "andre-tema.jpg",
                pagesList: [
                    {
                        pageID: 1, 
                        pageTitle: "Elektronikk",
                        pageDesc: "Går mobiltelefonen, pc-en eller tv-en din i stykker, kan du klage i inntil fem år. "
                    }, 
                    {
                        pageID: 2,
                        pageTitle: "Hvitevarer",
                        pageDesc: "Du kan klage i inntil fem år på feil som skyldes dårlig kvalitet ved produktet. "
                    }, 
                    {
                        pageID: 3,
                        pageTitle: "Møbler",
                        pageDesc: "Går sofaen eller sengen i stykker, kan du klage i inntil fem år."
                    }, 
                    {
                        pageID: 4,
                        pageTitle: "Klær og sko",
                        pageDesc: "Du kan klage i inntil to år hvis skoene går i stykker, eller klærne blir fort slitt."
                    }, 
                    {
                        pageID: 5,
                        pageTitle: "Rens av klær",
                        pageDesc: "Det er alltid lurt å sjekke referanser når du velger renseri eller skredder "
                    }, 
                    {
                        pageID: 6,
                        pageTitle: "Leie av klær",
                        pageDesc: "Sjekk alltid klærne både når du henter og leverer."
                    }
                ]
            } //end site 4
        ]
    }

    printPage();

    function printPage() {
        var url_string = window.location.href;
        var thisurl = new URL(url_string);
        var thisID = thisurl.searchParams.get("id");
        var numberID = parseInt(thisID);

        var jsonPlacement = parseInt(thisID) - 1;
        var thisSite = tipsJSON.siteList[jsonPlacement];

        var bgsrc = thisSite.bgsrc;
        var bgfullsrc = "./img/bgs/" + bgsrc;
        var imgsrc = "./img/icons/blue/tips.png";
        var title = thisSite.title;
        var description = thisSite.description;
        var category = thisSite.category;

        $(".site-top-bg").css({"background-image": "url(" + bgfullsrc + ")"});
        $(".site-img").css({"background-image": "url(" + imgsrc + ")"});
        $(".title").html(title);
        $(".description").html(description);
        $(".category").html(category);

        $.each(thisSite.pagesList, function(i, page){
            var maincont = $(".maintip");
            var title = page.pageTitle;
            var desc = page.pageDesc;
            var addHtml = `
                <div class="tipdiv">
                    <div class="left"></div>
                    <div class="right">
                        <h2>${title}</h2>
                        <p>${desc}</p>
                    </div>
                </div>
            `;
            maincont.append(addHtml);

        })
    }

})();