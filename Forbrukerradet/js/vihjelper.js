(function(){

    const vihjelperJSON = {
        siteList: [
            {
                id: 1, 
                title: "Angrer du på et kjøp?", 
                description: "Når du handler i vanlig butikk, er du prisgitt butikkens bytteregler. Du har kun angrerett når du handler utenfor fast utsalgssted, slik som internett og dørsalg.", 
                partsList: [
                    {
                        partID: 1, 
                        partTitle: "Kan jeg angre på det jeg har kjøpt?", 
                        itemsList: [
                            {itemTitle: "Bytterett", itemText: "De fleste butikker lar deg få bytte det du har kjøpt, så sant det er ubrukt og uskadet. Dette er ingen lovbestemt rett, men er så vanlig at du kan regne med å få bytte. Ta vare på kvitteringen eller byttelappen, og hold fristen som står på den. Det er opp til butikken å sette betingelsene. Det kan være at du ikke kan bytte i forbindelse med salg. Hygieniske artikler er som regel unntatt. <br><br> Du kan ikke kreve å få pengene tilbake, men oftest kan du få en tilgodelapp du kan handle for en annen gang. Den kan du bruke i tre år, hvis det ikke står noe annet."},
                            {itemTitle: "Åpent kjøp og fornøydhetsgaranti", itemText: "En del store kjeder gir svært rause byttevilkår. Noen steder kan du få tilbake pengene for en ubrukt vare etter et halvt år. Andre lar deg teste det du har kjøpt i en måned, før du kan levere det inn og få pengene tilbake."},
                            {itemTitle: "Angrerett", itemText: "Dersom du har handlet på en annen måte enn å gå i butikken, kan du ha mulighet til å returnere det du har kjøpt med loven i hånd (se mer nedenfor)."},
                            {itemTitle: "OBS! Sjekk om du kan klage", itemText: "<p>Hvis du mener det er en feil ved det du har kjøpt, kan du klage, uansett om det du har kjøpt er omfattet av angrerett eller byttegaranti.&nbsp;</p><p><a href='https://www.forbrukerradet.no/forside/feil-ved-vare/'>Les mer om hva du kan kreve og hvordan du går frem for å klage.</a></p>"}
                        ]
                    },
                    {
                        partID: 2, 
                        partTitle: "Når kan jeg bruke angreretten?", 
                        itemsList: [
                            {itemTitle: "Avhenger av hvor du har handlet", itemText: "<p>Du har angrerett når:</p><ul><li>kjøpet har blitt gjort over internett eller via telefon (og næringsdrivende har lagt opp til at salget skal skje på den måten).</li><li>kjøpet foregikk hjemme, på gaten eller stand – og du handlet for over 300 kroner.</li></ul><p>Angreretten gjelder i EØS-landene.</p><p>Du finner&nbsp;<a href='https://lovdata.no/dokument/NL/lov/2014-06-20-27'>angrerettloven på lovdata.no</a>.</p>"},
                            {itemTitle: "Hva er gyldig grunn?", itemText: "Du behøver ikke å oppgi noen som helst grunn for å bruke angreretten, men du må holde fristen."},
                            {itemTitle: "Kan jeg teste det jeg har kjøpt?", itemText: "Du kan åpne emballasjen og undersøke varen. Hvis du gjør for omfattende undersøkelser, eller varen blir skadet, kan du risikere at du ikke får tilbake hele beløpet."}
                        ]
                    },
                    {
                        partID: 3, 
                        partTitle: "Unntak fra angreretten", 
                        itemsList: [
                            {itemTitle: "Du har ikke angrerett på", itemText: "<ul><li>kjøp eller bygging av bolig</li><li>persontransport som buss, tog og fly</li><li>pakkereiser (<a href='https://www.forbrukerradet.no/forside/reise/pakkereise/'>men her har du gode muligheter til å avbestille</a>)</li><li>det du kjøper på nettsider som formidler salg for andre</li><li>noe som er spesiallaget utfra dine valg</li></ul><p>eller</p><ul><li>ferske varer som mat og blomster</li><li>ting det er umulig å returnere, som fyringsolje eller jord spredt ut over en hage</li><li>hotellovernattinger, forestillinger og konserter</li><li>hastereparasjoner hjemme hos deg</li><li>forseglede medie- og intimprodukter hvis du har åpnet det.</li></ul><p>Men:&nbsp;I disse tilfellene må selgeren ha informert deg på forhånd om at du ikke får angrerett.</p>"}
                        ]
                    },
                    {
                        partID: 4, 
                        partTitle: "Hva gjør jeg når jeg vil angre", 
                        itemsList: [
                            {itemTitle: "Si ifra innen fristen", itemText: "<p>Det er lurt å skrive en e-post til selgeren om at du vil angre, og legg gjerne ved skjemaet han skal ha sendt deg. Du har to uker på deg til å melde fra, og nedtellingen begynner når du har fått varen og all informasjon, eller dagen etter at du avtalte å kjøpe en tjeneste. Hvis du da ikke har mottatt et ferdig utfylt <a href='https://www.regjeringen.no/no/dokument/dep/bld/nye-livsoppholdssatser/skjema-2/skjema-om-angrerett/id614564/'>angrerettskjema</a>, utvides fristen til inntil tolv måneder. Har du kjøpt livsforsikring eller en individuell pensjonsavtale, er fristen 30 dager.</p>"},
                            {itemTitle: "Returner i tide", itemText: "<p>Send eller lever varen til selgeren innen 14 dager etter at du meldte fra at du angret deg.</p><p><strong>OBS!</strong> Du er ansvarlig for trygg retur. Pakk varen godt, og ta vare på kvittering for frakt.</p>"},
                            {itemTitle: "Hvem betaler returen?", itemText: "<p>Selgeren kan ikke ta noe gebyr for at du angrer. Du har krav på å få tilbake alle kronene du har betalt, men det er du som må betale returen, så sant du fikk beskjed om det på forhånd, eller dere ikke har avtalt noe annet. Dersom det er en vare som ikke kan sendes i posten, skal du heller ikke betale dersom du har fått den levert hjemme hos deg, der du også har gjort avtalen. &nbsp;</p>"}
                        ]
                    },
                    {
                        partID: 5, 
                        partTitle: "Kan jeg angre når tjenesten alt er i gang?", 
                        itemsList: [
                            {itemTitle: "Selgeren kan kreve betalt for det du har rukket å motta", itemText: "<p>Dere kan avtale at selgeren begynner å levere en tjeneste, for eksempel et mobilabonnement, før angrefristen har gått ut. Hvis du helt klart har bedt om det, kan selgeren kreve betalt for det du har rukket å motta, dersom du angrer.</p><p><strong>OBS!</strong> Hvis du har handlet på avbetaling, bør du melde fra til finansinstitusjonen om at du har angret deg.</p>"}
                        ]
                    },
                    {
                        partID: 6, 
                        partTitle: "Les mer om angreretten", 
                        itemsList: [
                            {itemTitle: "Last ned veiledning til angrerettloven", itemText: "<p>Veilederen (revidert 2016) er hovedsakelig rettet mot næringsdrivende, men kan også være nyttig for andre interesserte.&nbsp;</p><div class='white_button'><a href='https://fil.forbrukerradet.no/wp-content/uploads/2015/09/veileder-angrerett-2017.pdf'>Veileder angrerettloven</a></div>"}
                        ]
                    }
                ]
            }, //end id 1
            {
                id: 2, 
                title: "Grunn til å klage?", 
                description: "Du kan reklamere opptil fem år, avhengig av hvor lenge det du har kjøpt er ment å vare. Det er to års klagefrist ved kjøp fra privatperson.", 
                partsList: [
                    {
                        partID: 1, 
                        partTitle: "Har du grunn til å klage?", 
                        itemsList: [
                            {itemTitle: "Hva skyldes feilen?", itemText: "<p>Er det en fabrikasjonsfeil, eller du har ikke fått det du har betalt for, må selgeren ordne opp. Alt skal være som selgeren har sagt gjennom annonsering, i butikken og andre steder, og du skal ha fått all viktig informasjon.</p><p>Hvis du kjente til feilen, eller den skyldes noe du har gjort, eller et uhell, må du ta regningen selv. Du kan eventuelt sjekke om du har en forsikring du kan benytte.</p>"},
                            {itemTitle: "Klagefristen er to eller fem år", itemText: "<ul><li>Du kan klage i to eller fem år hvis du har kjøpt av en profesjonell selger (<a href=1https://lovdata.no/dokument/NL/lov/2002-06-21-34?q=forbrukerkj%C3%B8psloven1>forbrukerkjøpsloven</a>).Hvor lenge du kan klage avhenger av hvor lenge tingen er ment å vare ved vanlig bruk. Sofa og mobiltelefon er eksempler på varer med fem års klagefrist.</li><li>Du har to års klagefrist når du kjøper noe fra en privatperson (<a href='https://lovdata.no/dokument/NL/lov/1988-05-13-27?q=forbrukerkj%C3%B8psloven'>kjøpsloven</a>).</li></ul>"},
                            {itemTitle: "Hva kan du kreve?", itemText: "<p>Så snart det er slått fast at feilen er selgerens ansvar, skal han tilby reparasjon eller ny vare. Det skal du få innen rimelig tid. Det skal ikke være til vesentlig ulempe for deg, og selger kan normalt ikke forsøke å reparere den samme feilen mer enn to ganger.</p><p>Klarer ikke selgeren å reparere eller å gi deg en ny vare, kan du få et prisavslag eller pengene tilbake. Du kan da be om forsinkelsesrente, men selgeren kan også redusere beløpet for den tiden du har kunne bruke varen. Hvis du har fått utgifter på grunn av feilen, kan du også be om erstatning. Utgiftene må da ha vært nødvendige.</p>"}
                        ]
                    },
                    {
                        partID: 2, 
                        partTitle: "Når varen  «selges som den er»", 
                        itemsList: [
                            {itemTitle: "", itemText: "<p>Når du kjøper noe brukt, står det ofte at varen «selges som den er». Det begrenser rettighetene dine noe, men selgeren må fremdeles ha fortalt deg alt som er viktig, han må holde det han har lovet, og varen skal være som du kan forvente deg.</p><p>Har du kjøpt noe av en privatperson, må varen være vesentlig dårligere enn du kunne forventet deg for at du skal ha grunn til å klage.</p>"}
                        ]
                    },
                    {
                        partID: 3, 
                        partTitle: "Sjekk butikkens garanti", 
                        itemsList: [
                            {itemTitle: "Ekstra trygghet", itemText: "<p>Hvis du har en garanti, kan det hende du kan klage selv om reklamasjonsfristen er ute. En garanti lar deg ofte klage på flere typer feil, så sjekk vilkårene i garantien.</p>"},
                            {itemTitle: "Loven gjelder uansett", itemText: "<p>Hvis selgeren sier at feilen ikke går på garantien, kan du fremdeles ha rett til å klage takket være forbrukerkjøpsloven.</p>"}
                        ]
                    },
                    {
                        partID: 4, 
                        partTitle: "Slik går du frem for å klage til selger", 
                        itemsList: [
                            {itemTitle: "", itemText: "<p>Hvis du ønsker å klage, må du først ta saken opp med selger. Blir du ikke enig med selger, kan du klage saken inn for Forbrukerrådet eller en klagenemnd.</p><div class='white_button'><a href='https://www.forbrukerradet.no/klageguide/'>Slik går du frem for å klage</a></div>"}
                        ]
                    }
                ]
            } //end id 2
        ] //end siteList
    }
})();