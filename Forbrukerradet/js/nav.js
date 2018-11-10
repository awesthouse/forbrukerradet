(function(){
    $('#navigation').hide();
    $('.closem').hide();
    
    $('.shownav').click(function() {
        $('#navigation').fadeToggle();
        $('#lineone').toggleClass('zeropacity');
        $('#linezero').toggleClass('rotate45');
        $('#linezero').toggleClass('line-zero');
        $('#linetwo').toggleClass('rotatem45');
        $('#linetwo').toggleClass('line-two');
        $('.openm').slideToggle();
        $('.closem').slideToggle();

    });

    const pagesJSON = {
        pageList: [
            {title: "Hjem", url: "index.html", linkslist: false},
            {title: "Vi hjelper", color:"#27334A", icon: "vihjelper.png", linkslist: [
                {url: "angrer-du-pa-et-kjop", name: "Angrer du på et kjøp?"},
                {url: "grunn-til-a-klage", name: "Grunn til å klage?"},
                {url: "slik-klager-du", name: "Slik klager du"},
                {url: "kontrakter", name: "Kontrakter"},
                {url: "klagebrev", name: "Klagebrev"}
            ]},
            {title: "Tips og råd", color: "#27334A", icon: "tips.png", linkslist: [
                {url: "bil", name: "Bil"},
                {url: "bolig", name: "Bolig"},
                {url: "okonomi-og-betaling", name: "Økonomi og betaling"},
                {url: "digitalt", name: "Digitalt"},
                {url: "reise", name: "Reise"},
                {url: "andre-varer-og-tjenester", name: "Andre varer og tjenester"}
            ]},
            {title: "Forbrukerpolitikk", color: "#27334A", icon: "forbrukerpolitikk.png", linkslist: [
                {url: "bolig", name: "Bolig"},
                {url: "finans", name: "Finans"},
                {url: "handel", name: "Handel"},
                {url: "digitalt", name: "Digitalt"},
                {url: "offentlige-tjenester", name: "Offentlige tjenester"}
            ]},
            {title: "Nyheter", url: "nyheter.html", linkslist: false},
            {title: "Undersøkelser", url: "undersøkelser.html", linkslist: false},
            {title: "Våre tjenester", color:"#27334A", icon: "tjenester.png", linkslist: [
                {url: "flytterettighetskalkulator", name: "Flytterettighetskalkulator"},
                {url: "merkeoversikten", name: "Merkeoversikten"},
                {url: "henvendelsesstatistikk", name: "Henvendelsesstatistikk"},
                {url: "kommunetesten", name: "Kommunetesten"}
            ]},
            {title: "Dette er oss", color: "#27334A", icon: "oss.png", linkslist: [
                {url: "om-oss", name: "Om oss"},
                {url: "kontakt-oss", name: "Kontakt oss"},
                {url: "jobb-hos-oss", name: "Jobb hos oss"},
                {url: "presse", name: "Presse"},
                {url: "horingssvar", name: "Høringssvar"}
            ]},
            {title: "Våre nettsteder", color: "#27334A", icon: "nettsider.png", linkslist: [
                {url: "http://www.hvakostertannlegen.no/", name: "Hva koster tannlegen?"},
                {url: "http://www.finansportalen.no/", name: "Finansportal"},
                {url: "http://www.strompris.no/nb/#/", name: "Strømpris"},
                {url: "http://www.forbrukereuropa.no/", name: "Forbruker Europa"}
            ]}
        ]
    } //end  pagesJSON

    printNav(pagesJSON);

    function printNav(pagesLJSON) {
        var uldiv = $(".pageslist");
        $.each(pagesLJSON.pageList, function(i, pages) {
            var title = pages.title;
            var titleurl = pages.url;
            if(pagesLJSON.pageList[i].linkslist != false) {
                var addHtml = `<li>${title} <ul>`;
                $.each(pagesLJSON.pageList[i].linkslist, function(j, links){
                    var name = links.name;
                    var url = links.url;
                    if(url.includes("http")) {
                        addHtml += `<a href="${url}" target="_blank"><li>${name}</li></a>`;
                    } else {
                        addHtml += `<a href="${url}.html"><li>${name}</li></a>`;
                    }
                })
                addHtml += `</ul></li>`;
            } else {
                var addHtml = `<a href="${titleurl}"><li>${title}</li></a>`;
            }
            uldiv.append(addHtml);
        })
    }


})();