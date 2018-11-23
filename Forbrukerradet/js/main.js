(function(){

    const pagesListJSON = {
        pageList: [
            {title: "Vi hjelper", color:"#27334A", icon: "vihjelper.png", linkslist: [
                {url: "vihjelper.html?id=1", name: "Angrer du på et kjøp?"},
                {url: "vihjelper.html?id=2", name: "Grunn til å klage?"},
                {url: "vihjelper.html?id=3", name: "Slik klager du"},
                {url: "vihjelper.html?id=4", name: "Kontrakter"},
                {url: "vihjelper.html?id=5", name: "Klagebrev"}
            ]},
            {title: "Tips og råd", color: "#27334A", icon: "tips.png", linkslist: [
                {url: "tips.html?id=1", name: "Bil"},
                {url: "tips.html?id=2", name: "Bolig"},
                {url: "tips.html?id=3", name: "Økonomi og betaling"},
                {url: "tips.html?id=4", name: "Digitalt"},
                {url: "tips.html?id=5", name: "Reise"},
                {url: "tips.html?id=6", name: "Andre varer og tjenester"}
            ]},
            {title: "Forbrukerpolitikk", color: "#27334A", icon: "forbrukerpolitikk.png", linkslist: [
                {url: "forbrukerpolitikk.html?id=1", name: "Om bolig"},
                {url: "forbrukerpolitikk.html?id=2", name: "Om finans"},
                {url: "forbrukerpolitikk.html?id=3", name: "Om handel"},
                {url: "forbrukerpolitikk.html?id=4", name: "Om digitalt"},
                {url: "forbrukerpolitikk.html?id=5", name: "Om offentlige tjenester"}
            ]}
        ]
    }

    const ndpagesListJSON = {
        pageList: [
            {title: "Våre tjenester", color:"#27334A", icon: "tjenester.png", linkslist: [
                {url: "none", name: "Flytterettighetskalkulator"},
                {url: "none", name: "Merkeoversikten"},
                {url: "none", name: "Henvendelsesstatistikk"},
                {url: "none", name: "Kommunetesten"}
            ]},
            {title: "Dette er oss", color: "#27334A", icon: "oss.png", linkslist: [
                {url: "none", name: "Om oss"},
                {url: "none", name: "Kontakt oss"},
                {url: "none", name: "Jobb hos oss"},
                {url: "none", name: "Presse"},
                {url: "none", name: "Høringssvar"}
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
                } else if (url == "none") {
                    addHtml += `<li class="disabled">${name}</li>`;
                }
                else {
                    addHtml += `<a href="${url}"><li>${name}</li></a>`;
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
            <div class="nititle"><h1>Aktuelle Saker</h1></div>
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
        addHtml += `</div><a href="nyheter.html"><div class="morelink">Se flere saker</div></a></div>`;
        maincont.append(addHtml);
    }


    

})();