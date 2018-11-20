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

    var  mn = $("nav");
    mns = "main-nav-scrolled";
    hdr = $('nav').height();

    if(window.location.href.includes("index")) {
        $(window).scroll(function() {
            if( $(this).scrollTop() > hdr ) {
                $("nav").addClass(mns);
                $(".logo-nav").addClass("new-nav-logo");
                $(".linewrap span").addClass("new-color");
                $(".search").addClass("new-search");
            } else {
                $("nav").removeClass(mns);
                $(".logo-nav").removeClass("new-nav-logo");
                $(".linewrap span").removeClass("new-color");
                $(".search").removeClass("new-search");
            }
        });
    } else {
        mn.addClass(mns);
        $(".logo-nav").addClass("new-nav-logo");
        $(".linewrap span").addClass("new-color");
        $(".search").addClass("new-search");
    }
    const pagesJSON = {
        pageList: [
            {title: "Hjem", url: "index.html", linkslist: false},
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
                {url: "forbrukerpolitikk.html?id=1", name: "Bolig"},
                {url: "forbrukerpolitikk.html?id=2", name: "Finans"},
                {url: "forbrukerpolitikk.html?id=3", name: "Handel"},
                {url: "forbrukerpolitikk.html?id=4", name: "Digitalt"},
                {url: "forbrukerpolitikk.html?id=5", name: "Offentlige tjenester"}
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
                {url: "om-oss.html", name: "Om oss"},
                {url: "kontakt-oss.html", name: "Kontakt oss"},
                {url: "jobb-hos-oss.html", name: "Jobb hos oss"},
                {url: "presse.html", name: "Presse"},
                {url: "horingssvar.html", name: "Høringssvar"}
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

    printFooter();
    function printFooter() {
        var addHtml = `
            <div class="fleft">
                <ul class="links">
                    <li><a href="kontakt-oss.html">Kontakt oss</a></li>
                    <li><a href="contact-us.html">Contact us</a></li>
                    <li><a href="kontakt-oss.html">Kontakt oss</a></li>
                    <li><a href="presse.html">Presse</a></li>
                    <li></li>
                    <li><a href="mailto:">Nettansvarlig Målfrid Hansen</a></li>
                </ul>
            </div>
            <div class="fmiddle">
                <div class="footerlogo"></div>
                <ul class="social">
                    <li><img src="./img/icons/social/facebook.png" width="50px" /></li>
                    <li><img src="./img/icons/social/twitter.png" width="50px" /></li>
                    <li><img src="./img/icons/social/youtube.png" width="50px" /></li>
                </ul>
                <p>Copyright Forbrukerrådet 2018</p>
            </div>
            <div class="fright">
                <ul>
                    <li><img src="./img/icons/social/mail.png" width="50px" /></li>
                    <li><img src="./img/icons/social/rss.png" width="50px" /></li>
                </ul>
            </div>
        `;
        $("footer").html(addHtml);

        var firstHtml = `
            <div class="chatopen">
                <div class="question">?</div>
                <div class="questtext">Har du spørsmål?</div>
                <div class="questcont">
                    Chat med oss!
                    <div class="button-dark">Start chat</div>
                </div>
            </div>
        `;
        $("footer").prepend(firstHtml);

        $(".chatopen").on("mouseover", function(){
            $(".chatopen").animate({width:"250px"});
            $(".chatopen").animate({height: "300px"});
        })
        $(".chatopen").on("mouseleave", function(){
            $(".chatopen").animate({height: "70px"});
            $(".chatopen").animate({width:"70px"});
        })
    }


})();