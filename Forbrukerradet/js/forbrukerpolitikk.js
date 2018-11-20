(function(){

    const casesJSON = {
        casesList: [
            {
                id: 1, 
                title: "Bolig",
                description: "Vi jobber aktivt med å påvirke myndigheter og næringsliv i en forbrukervennlig retning gjennom dialog, påvirkningsarbeid og utredninger.",
                category: "Forbrukerpolitikk", 
                worthList: [
                    {
                        worthID: 1,
                        wTitle: "En trygg bolighandel",
                        imgsrc: "Randi-Flesland-nær-bredde-smil-stortinget-foto.jpg"
                    },
                    {
                        worthID: 2,
                        wTitle: "To av tre betaler for mye for strømmen",
                        imgsrc: "31082015_strom1.png"
                    }
                ],
                causesList: [
                    {
                        id: 1, 
                        title: "Et tryggere leiemarked med mange flere studentboliger",
                        description: "Forbrukerrådet har tatt til orde for en kraftig utbygging av studenthybler. Visse krav kan reduseres slik at de kan bygges sentralt, og billigere og raskere enn i dag. ",
                        imgsrc:"kjerne_bolig.png" 
                    },
                    {
                        id: 2, 
                        title: "Kostnadseffektiv og trygg boligbygging for forbruker",
                        description: "Systemet burde sikre forbruker bedre, og reklamasjonsfristen burde være lenger. En bolig skal jo bygges så den varer mye lenger enn fem år.",
                        imgsrc:"kjerne_bolig_boligbygging.png" 
                    },
                    {
                        id: 3, 
                        title: "Det må bli bedre informasjon om håndverkertjenester og -bedrifter",
                        description: "Dersom forbrukere får vesentlig lettere tilgang til troverdig informasjon som kan hjelpe oss å skille gode håndverkerfirma fra dårligere, blir vår hverdag som forbrukere lettere.",
                        imgsrc:"kjerne_bolig_handverkertjenester.png" 
                    },
                    {
                        id: 4, 
                        title: "Eiendomsmeglerkjedenes rolle i bolighandel må begrenses",
                        description: "Eiendomsmeglerkjedene har altfor lenge fått styre utviklingen i norsk bolighandel.",
                        imgsrc:"kjerne_bolig_bolighandel.png" 
                    },
                    {
                        id: 5, 
                        title: "Forbrukere får for lite tid når de skal kjøpe bolig",
                        description: "Tiden i bolighandelen må være tilstrekkelig til at alle interesserte boligkjøpere rekker å lese all informasjon og delta i budrunden.",
                        imgsrc:"kjerne_bolig_budrunde.png" 
                    },
                    {
                        id: 6, 
                        title: "Brukte boliger skal som hovedregel selges med teknisk tilstandsrapport",
                        description: "Forbrukerrådet har i 40 år kritisert den manglende faktainformasjonen i bolighandelen og krevd tekniske tilstandsrapporter.",
                        imgsrc:"kjerne_bolig_tilstandsrapport.png" 
                    }
                ],
                hearingsList: [
                    {
                        id: 1, 
                        title: "Høringssvar: Teknisk tilstandsanalyse ved omsetning av bolig NS3600",
                        description: "Forbrukerrådet er positiv til at det er gjort endringer som kan føre til økt bruk av standarden. Det er viktig at tilstandsanalysen hovedsakelig gjøres basert på konkrete observasjoner, og ikke på generelle aldersbetrakninger.",
                        date: "26. juni, 2018"
                    },
                    {
                        id: 2,
                        title: "Høringssvar: Forslag til endring i byggteknisk forskrift (TEK17) om energiforsyningskrav for bygninger over 1000m²",
                        description: "Forbrukerrådet støtter ikke DiBK sitt forslag om å oppjustere minstekravet til energifleksible varmesystemer i bygg på over 1000 m² fra 60 til 80 prosent. Forslaget vil bidra til økte byggekostnader for boligblokker og dermed indirekte høyere boligpriser",
                        date: "12. juni, 2018"
                    }
                ],
                peopleList: [
                    {
                        name: "Audun Skeidsvoll", desc: "Forbrukerpolitisk direktør", 
                        phone: "(+47)971 51 945", imgsrc: "Audun_Skeidsvoll", other: "au­dun.skeids­voll@for­bru­ker­ra­det.no", otherlink: "mailto:au­dun.skeids­voll@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Guro Birkeland Tangen", desc: "Pressekontakt / Kommunikasjonsrådgiver", 
                        phone: "(+47)995 69 273", imgsrc: "Guro_Birkeland_Tangen", other: "gbt@forbrukerradet.no", otherlink: "mailto:gbt@forbrukerradet.no"
                    }
                ]
            },
            //
            //
            //
            {
                id: 2, 
                title: "Finans",
                description: "Vi jobber aktivt med å påvirke myndigheter og næringsliv i en forbrukervennlig retning gjennom dialog, påvirkningsarbeid og utredninger.",
                category: "Forbrukerpolitikk", 
                worthList: [
                    {
                        worthID: 1,
                        wTitle: "Sjekk hvor etisk og bærekraftig banken din er",
                        imgsrc: "20161511-logo-2-etisk-bankguide-norge-riktig-pixler.jpg"
                    },
                    {
                        worthID: 2,
                        wTitle: "Ikke la oss kjøpe uten å kjenne prisen",
                        imgsrc: "foto-mann-pc-alle-rettigheter2.jpg"
                    },
                    {
                        worthID: 3,
                        wTitle: "Søksmål mot DNB",
                        imgsrc: "dnb_streetview.jpg"
                    }
                ],
                causesList: [
                    {
                        id: 1, 
                        title: "Banktjenester konkurrerer på forbruker- og personvern",
                        description: "En god betalingsløsning er en løsning som ikke samler inn mer informasjon om deg enn det som er nødvendig for å få gjennomført betalingen.",
                        imgsrc:"kjerne_finans_personvern-650x433.png" 
                    },
                    {
                        id: 2, 
                        title: "Det må bli lettere å velge riktig investering og pensjon",
                        description: "Når stadig flere selv må ta ansvar for sin pensjon, er det å gjøre riktige valg av pensjonsprodukter utrolig viktig.",
                        imgsrc:"kjerne_finans_pensjon-650x433.png" 
                    },
                    {
                        id: 3, 
                        title: "Det skal bli enklere å ta informerte og trygge valg i finansmarkedet",
                        description: "Forbrukere skal ha reell mulighet for å treffe smarte valg av bærekraftige finansielle løsninger.",
                        imgsrc:"kjerne_bolig_handverkertjenester.png" 
                    }
                ],
                hearingsList: [
                    {
                        id: 1, 
                        title: "Høringssvar: Utkast til forskrift om forsvarlig utlånspraksis for forbrukslån",
                        description: "Forbrukerrådet støtter i all hovedsak Finanstilsynets utkast til forskrift om forsvarlig utlånspraksis for forbrukslån, og mener det er flere forhold som taler for at det nå endelig fastsettes en egen forskrift om forsvarlig utlånspraksis for forbrukslån.",
                        date: "02. oktober, 2018"
                    },
                    {
                        id: 2,
                        title: "Høringssvar: NOU 18:5 Kapital i omstillingens tid",
                        description: "Det er Forbrukerrådets generelle syn at utredningen i alt for liten grad har problematisert risikoen for forbrukere når utvalget har gjort sine vurderinger og gitt sine anbefalinger. Vi legger til grunn at det skyldes mandatet for utvalgets arbeid.",
                        date: "05. juli, 2018"
                    }
                ],
                peopleList: [
                    {
                        name: "Jorge Jensen", 
                        desc: "Fagdirektør finans", 
                        phone: "(+47)930 84 578", 
                        imgsrc: "Jorge_Jensen", other: "jor­ge.jen­sen@for­bru­ker­ra­det.no", otherlink: "mailto:jor­ge.jen­sen@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Stian Celius", 
                        desc: "Pressekontakt /kommunikasjonsrådgiver", 
                        phone: "(+47)976 30 612", imgsrc: "Stian_Celius", other: "sti­an.ce­li­us@for­bru­ker­ra­det.no", 
                        otherlink: "mailto:sti­an.ce­li­us@for­bru­ker­ra­det.no"
                    }
                ]
            },
            //
            //
            //
            {
                id: 3, 
                title: "Handel",
                description: "Vi jobber aktivt med å påvirke myndigheter og næringsliv i en forbrukervennlig retning gjennom dialog, påvirkningsarbeid og utredninger.",
                category: "Forbrukerpolitikk", 
                worthList: [
                    {
                        worthID: 1,
                        wTitle: "Smilefjesordningen ved serveringssteder",
                        imgsrc: "smilefjes_mattilsynet_ny.jpg"
                    },
                    {
                        worthID: 2,
                        wTitle: "Forbrukerundersøkelser om søndagsåpne butikker",
                        imgsrc: "Dagligvare.jpg"
                    },
                    {
                        worthID: 3,
                        wTitle: "Forbrukerrådets merkeoversikt",
                        imgsrc: "tomateroghender-e1446629963857.jpg"
                    }
                ],
                causesList: [
                    {
                        id: 1, 
                        title: "Velfungerende markeder",
                        description: "Forbrukerrådet vil ha markeder som gir god tilgjengelighet, riktig pris og bredt utvalg.",
                        imgsrc:"kjerne_matoghandel_tryggmat-650x433.png" 
                    },
                    {
                        id: 2, 
                        title: "Lettere å ta bærekraftige og miljøvennlige valg",
                        description: "Forbrukerrådet vil ha bedre informasjon til forbrukerne, som skal gjøre det lettere å ta bærekraftige og miljøvennlige valg.",
                        imgsrc:"kjerne_matoghelse_baerekraftig-650x433.png" 
                    },
                    {
                        id: 3, 
                        title: "Trygg mat og informerte valg",
                        description: "Forbrukerrådet jobber for at maten skal være trygg, at produsentene skal gi god informasjon og for mindre markedsføringspress av usunn mat mot barn og unge. ",
                        imgsrc:"kjerne_matoghandel_letterevalg-650x433.png" 
                    },
                    {
                        id: 4, 
                        title: "Trygge produkter",
                        description: "Retten til trygge produkter er en grunnleggende forbrukerrettighet. Dessverre er skadelige kjemikalier og miljøgifter et stort og økende problem.",
                        imgsrc:"kjerne_matoghelse_trygt-650x433.png" 
                    }
                ],
                hearingsList: [
                    {
                        id: 1, 
                        title: "Høringssvar: Forslag til endringer i forskrift om tilsetningsstoffer til næringsmidler",
                        description: "Forbrukerrådet støtter Mattilsynets initiativ til å styrke beskyttelsen av norske forbrukere mot helseskade som følge av såkalte «andre stoffer1» som tilsettes næringsmidler, inkludert kosttilskudd. Dette er et underregulert område både innen EØS og i Norge. For høyt inntak av visse «andre stoffer» er forbundet med alvorlig helserisiko og kan i verste fall ha dødelig utfall.",
                        date: "07. august, 2018"
                    },
                    {
                        id: 2,
                        title: "Høringsuttalelse til NOU 2017:17 På en søndag?",
                        description: "Forbrukarrådet vil med dette gi si støtte til primærstandpunktet om at ein best møter omsynet til forbrukarane, utfordringa frå e-handelen og omsynet til like konkurransevilkår gjennom ei liberalisering etter svensk eller dansk modell. Vi viser òg til vårt høyringssvar om endringar av heilagdagslova datert 30.06 2015 for ei nærare utgreiing.",
                        date: "19. april, 2018"
                    }
                ],
                peopleList: [
                    {
                        name: "Gunstein Instefjord", 
                        desc: "Fagdirektør Handel", 
                        phone: "(+47) 905 96 780", 
                        imgsrc: "FPA_Gunstein_Instefjord", other: "gun­stein.in­ste­fjord@for­bru­ker­ra­det.no", otherlink: "mailto:gun­stein.in­ste­fjord@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Kaja Lund-Iversen", 
                        desc: "Politisk rådgiver", 
                        phone: "", 
                        imgsrc: "Kaja_Lund_Iversen", other: "kaja.lund-iver­sen@for­bru­ker­ra­det.no", otherlink: "mailto:kaja.lund-iver­sen@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Guro Birkeland Tangen", desc: "Pressekontakt / Kommunikasjonsrådgiver", 
                        phone: "(+47)995 69 273", imgsrc: "Guro_Birkeland_Tangen", other: "gbt@forbrukerradet.no", otherlink: "mailto:gbt@forbrukerradet.no"
                    }
                ]
            },
            //
            //
            //
            {
                id: 4, 
                title: "Digital",
                description: "Vi jobber aktivt med å påvirke myndigheter og næringsliv i en forbrukervennlig retning gjennom dialog, påvirkningsarbeid og utredninger.",
                category: "Forbrukerpolitikk", 
                worthList: [
                    {
                        worthID: 1,
                        wTitle: "Tinder bends for consumer pressure",
                        imgsrc: "appfail_1.jpg"
                    },
                    {
                        worthID: 2,
                        wTitle: "Tingenes internett",
                        imgsrc: "iot-feature.jpg"
                    },
                    {
                        worthID: 3,
                        wTitle: "Forbrukernes 10 krav til digitale tjenester",
                        imgsrc: "mineideer.jpg"
                    }
                ],
                causesList: [
                    {
                        id: 1, 
                        title: "Økt valgfrihet i bredbånd- og mobilmarkedet",
                        description: "Det er langt frem før vi har mobil og bredbåndsmarkeder med tilfredsstillende konkurranse og valgfrihet. ",
                        imgsrc:"18092015_bredband-650x433.jpg" 
                    },
                    {
                        id: 2, 
                        title: "Økt konkurranse og gode, lovlige tjenester",
                        description: "Forbrukere ønsker å betale for digitalt innhold. Dessverre er det ikke bestandig så lett verken å kjøpe eller vite hvordan man kan benytte innholdet.",
                        imgsrc:"kjerne_digital_tjenester-650x433.png" 
                    }
                ],
                hearingsList: [
                    {
                        id: 1, 
                        title: "Innspill til mandat for personvernkommisjon",
                        description: "Ut i fra vår rolle som interesseorganisasjon for forbrukere, har Forbrukerrådet valgt å fokusere på punktet i høringsbrevet om økt bruk av digitale løsninger.",
                        date: "04. september, 2018"
                    },
                    {
                        id: 2,
                        title: "Høringssvar ny personopplysningslov",
                        description: "Forbrukerrådet arbeider for økt forbrukerinnflytelse i samfunnet, og arbeider aktivt for å bidra til en forbrukervennlig utvikling innenfor personvernområdet. Personvern- og forbrukerinteresser vil normalt være fullt ut sammenfallende ved vurderinger av rettslig vern av privatpersoners (registrertes) personopplysninger.",
                        date: "17. oktober, 2017"
                    }
                ],
                peopleList: [
                    {
                        name: "Finn Myrstad", 
                        desc: "Fagdirektør digitale tjenester", 
                        phone: "(+47) 479 66 900", 
                        imgsrc: "Finn_Myrstad", other: "finn.myr­stad@for­bru­ker­ra­det.no", otherlink: "mailto:finn.myr­stad@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Gro Mette Moen", 
                        desc: "Fagdirektør digitale tjenester", 
                        phone: "", 
                        imgsrc: "Gro_Mette_Moen", other: "gro­met­te.moen@for­bru­ker­ra­det.no", otherlink: "mailto:gro­met­te.moen@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Ailo Krogh Ravna", 
                        desc: "Rådgiver", 
                        phone: "", 
                        imgsrc: "Ailo_Krogh", other: "ailo.krogh.rav­na@for­bru­ker­ra­det.no", otherlink: "mailto:ailo.krogh.rav­na@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Gyrid Giæver", 
                        desc: "Seniorrådgiver juridisk enhet", 
                        phone: "", 
                        imgsrc: "Gyrid_Giæver", other: "", otherlink: ""
                    },
                    {
                        name: "Øyvind H. Kaldestad", 
                        desc: "Leder Kommunikasjonsenheten", 
                        phone: "(+47) 480 82 619", 
                        imgsrc: "Oyvind_Herseth_Kaldestad", other: "ohk@for­bru­ker­ra­det.no", otherlink: "mailto:ohk@for­bru­ker­ra­det.no"
                    }
                ]
            },
            //
            //
            //
            {
                id: 5, 
                title: "Offentlig og helse",
                description: "Vi jobber aktivt med å påvirke myndigheter og næringsliv i en forbrukervennlig retning gjennom dialog, påvirkningsarbeid og utredninger.",
                category: "Forbrukerpolitikk", 
                worthList: [
                    {
                        worthID: 1,
                        wTitle: "Stor misnøye med maten på SFO",
                        imgsrc: "algarheim2.jpg"
                    },
                    {
                        worthID: 2,
                        wTitle: "Barnehagene svikter foreldres forvetning om sunn mat",
                        imgsrc: "grefsen-stasjon-2-edit.jpg"
                    },
                    {
                        worthID: 3,
                        wTitle: "Enorme prisforskjeller på å søke om byggetillatelse",
                        imgsrc: "20180514-ke-ak-stortingsgt.jpg"
                    }
                ],
                causesList: [
                    {
                        id: 1, 
                        title: "En helsesektor som er trygg og setter pasienten i sentrum",
                        description: "Helsetjenester er blant de viktigste tjenestene vi mottar. Dessverre får ikke alle alltid den behandlingen og oppfølgingen som de behøver.",
                        imgsrc:"helsesektor-650x433.png" 
                    },
                    {
                        id: 2, 
                        title: "Offentlige tjenester av høy kvalitet, åpenhet og brukerfokus",
                        description: "Et godt offentlig tjenestetilbud er viktig. Samtidig kan det være utfordrende å orientere seg blant offentlige instanser og tilbud.",
                        imgsrc:"kjerne_offentlig_brukerfokus-650x433.png" 
                    }
                ],
                hearingsList: [
                    {
                        id: 1, 
                        title: "Høringssvar om krav til elektrisitetsmålere og taksametre",
                        description: "Forbrukerrådet har ingenting å bemerke til høringen.",
                        date: "30. oktober, 2018"
                    },
                    {
                        id: 2,
                        title: "Høringssvar: Avvikling av meldeordningen etter spesialisthelsetjenesteloven § 3- 3",
                        description: "Forbrukerrådet mener det er noen svært viktige aspekter som må ivaretas dersom meldeordningen skal endres. Åpenhet om uønskede hendelser er en forutsetning for å kunne vurdere den totale verdien av helsetilbudet, og data om uheldige hendelser er svært viktig i et forbedringsarbeid.",
                        date: "18. september, 2018"
                    }
                ],
                peopleList: [
                    {
                        name: "Anne Kristin Vie", 
                        desc: "Fagdirektør offentlige tjenester og helse", 
                        phone: "(+47) 995 68 816", 
                        imgsrc: "Anne_Kristin_Vie", other: "anne.kris­tin.vie@for­bru­ker­ra­det.no", otherlink: "mailto:anne.kris­tin.vie@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Tone Li Sandvik", 
                        desc: "Politisk rådgiver", 
                        phone: "", 
                        imgsrc: "Tone_Li_Sandvik", other: "tone.li.sand­vik@for­bru­ker­ra­det.no", otherlink: "tone.li.sand­vik@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Hanne Beth Takvam-Borge", 
                        desc: "Politisk rådgiver", 
                        phone: "", 
                        imgsrc: "Hanne_Beth", other: "hann­e­beth.tak­vam­bor­ge@for­bru­ker­ra­det.no", otherlink: "mailto:hann­e­beth.tak­vam­bor­ge@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Ann Hege Skogly", 
                        desc: "Pressekontakt / Kommunikasjonsrådgiver", 
                        phone: "(+47) 934 67 352", 
                        imgsrc: "Gyrid_Giæver", other: "a@for­bru­ker­ra­det.no", otherlink: "mailto:a@for­bru­ker­ra­det.no"
                    },
                    {
                        name: "Øyvind H. Kaldestad", 
                        desc: "Leder Kommunikasjonsenheten", 
                        phone: "(+47) 480 82 619", 
                        imgsrc: "Ann_Hege_Skogly", 
                        other: "ohk@for­bru­ker­ra­det.no", otherlink: "mailto:ohk@for­bru­ker­ra­det.no"
                    }
                ]
            }
        ]
    }
    
    printPage();

    function printPage() {
        var url_string = window.location.href;
        var thisurl = new URL(url_string);
        var thisID = thisurl.searchParams.get("id");
        var numberID = parseInt(thisID);

        var jsonPlacement = parseInt(thisID) - 1;
        var thisSite = casesJSON.casesList[jsonPlacement];

        var imgsrc = "./img/icons/forbrukerpolitikk.png";
        var title = thisSite.title;
        var description = thisSite.description;
        var category = thisSite.category;

        $(".site-img").css({"background-image": "url(" + imgsrc + ")"});
        $(".title").html(title);
        $(".description").html(description);
        $(".category").html(category);
    
        $.each(thisSite.worthList, function(i, story) {
            var cont = $(".cases");
            var title = story.wTitle;
            var imgsrc = story.imgsrc;
            var addHtml = `
                <article>
                    <img src="./img/politikk/cases/${imgsrc}" />
                    <h2>${title}</h2>
                </article>
            `;
            cont.append(addHtml);
        })

        $.each(thisSite.causesList, function(i, cause) {
            var cont = $(".causes");
            var title = cause.title;
            var description = cause.description;
            var imgsrc = cause.imgsrc;
            var addHtml = `
                <div class="cause">
                    <div class="thumbnail" style="background-image:url(./img/politikk/${imgsrc}"></div>
                    <div class="inside">
                        <h2>${title}</h2>
                        <p>${description}</p>
                        <div class="white_button">Les hele saken</div>
                    </div>
                </div>
            `;
            cont.append(addHtml);
        })

        $.each(thisSite.hearingsList, function(i, hearing) {
            var cont = $(".hearings");
            var title = hearing.title;
            var description = hearing.description;
            var date = hearing.date;
            var addHtml = `
                <div class="hearing">
                    <h6>${date}</h6>
                    <h2>${title}</h2>
                    <p>${description}</p>
                </div>
            `;
            cont.append(addHtml);
        })

        $.each(thisSite.peopleList, function(i, author) {
            var cont = $(".people");
            var name = author.name;
            var desc = author.desc;
            var phone = author.phone;
            var aimgsrc = author.imgsrc;
            var other = author.other;
            var otherlink = author.otherlink;
            var addedHtml = `
                <div class="author">
                    <div class="authorimage" style="background-image:url(./img/authors/${aimgsrc}.jpg)"></div>
                    <div class="authorinfo">
                        <p class="desc">${desc}</p>
                        <h2>${name}</h2>
                        <p>${phone}</p>
                        <p><a href="${otherlink}">${other}</a></p>
                    </div>
                </div>
            `;
            cont.append(addedHtml);

        })
    }

})();