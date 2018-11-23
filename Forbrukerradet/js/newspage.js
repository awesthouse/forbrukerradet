(function(){

    const newsListJSON = {
        newsList: [
            {id: 1, title: "Halvparten av barn og unge drikker energidrikk", imgsrc: "energidrikk-guro-edit"},
            {id: 2, title: "Vi klager inn Coca Colas YouTube-kanal", imgsrc: "coca-cola-650x431"},
            {id: 3, title: "Spar 22.720 kroner i gebyr på aksjesparekonto", imgsrc: "fond"}
        ]
    }

    printNews(newsListJSON);

    function printNews(JSONList) {
        let maincont = $(".maincont");
        var addHtml = `
            <div class="newspagecont"><div class="newsinside">
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
        addHtml += `</div><div class="morelink" onclick="alert('Kan ikke laste flere nyheter');">Last flere saker</div></div>`;
        maincont.append(addHtml);
    }
})();