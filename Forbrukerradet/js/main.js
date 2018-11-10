(function(){

    const pagesListJSON = {
        pageList: [
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
            ]}
        ]
    }

    const ndpagesListJSON = {
        pageList: [
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
    }

    const newsListJSON = {
        newsList: [
            {id: 1, title: "Halvparten av barn og unge drikker energidrikk", imgsrc: "energidrikk-guro-edit"},
            {id: 2, title: "Vi klager inn Coca Colas YouTube-kanal", imgsrc: "coca-cola-650x431"},
            {id: 3, title: "Spar 22.720 kroner i gebyr på aksjesparekonto", imgsrc: "fond"}
        ]
    }

    if(window.location.href.includes("index")) {
        printPages(pagesListJSON);
        printNews(newsListJSON);
        printPages(ndpagesListJSON);
    }

    function printPages(JSONList) {
        let maincont = $(".pagesmain");
        $.each(JSONList.pageList, function(i, page) {
            let title = page.title;
            let color = page.color;
            let icon = page.icon;
            var addHtml = `
                <div class="pagescont">
                <div class="pagesinside">
                    <img src="./img/icons/blue/${icon}" />
                    <h2>${title}</h2>
                    <ul>
            `;
            $.each(JSONList.pageList[i].linkslist, function(j, links) {
                var name = links.name;
                var url = links.url;
                if(url.includes("http")) {
                    addHtml += `<a href="${url}" target="_blank"><li>${name}</li></a>`;
                } else {
                    addHtml += `<a href="${url}.html"><li>${name}</li></a>`;
                }
            })
        addHtml += `</ul></div></div>`
        maincont.append(addHtml);
    });
    }

    function printNews(JSONList) {
        let maincont = $(".pagesmain");
        var addHtml = `
            <div class="newscont"><div class="newsinside">
            <div class="nititle"><h1>Saker</h1></div>
        `;
        $.each(JSONList.newsList, function(i, news){
            var id = news.id;
            var title = news.title;
            var img = news.imgsrc;
            addHtml += `
                <article>
                    <a href="nyhetssak.html?id=${id}">
                    <img src="./img/news/${img}.jpg" />
                    <h2>${title}</h2>
                    </a>
                </article>
            `;
        })
        addHtml += `</div><div class="morelink">Se flere saker</div></div>`;
        maincont.append(addHtml);
    }


    

})();