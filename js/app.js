//-UTILITY FUNKCIJE :
function getInputData(id) {
    return document.getElementById(id).value;
}

function clearInputData(id) {
    document.getElementById(id).value = '';
}
//---style funkcije
function addRedBorder(id) {
    document.getElementById(id).setAttribute("style", "border-color: red; border-width: 2px;");
}

function addBlackBorder(id) {
    document.getElementById(id).setAttribute("style", "border-color: #000; border-width: 1px;");
}

//-GLAVNA FUNKCIJA:
function postNews() {
    //---check news title
    let newsTitle = getInputData('news-title');
    let newsTitleError = '';

    newsTitleError += (newsTitle.length === 0) ? 'Naslov vesti je obavezno polje \n' : '';
    newsTitleError += (newsTitle.length < 3 || newsTitle.length > 50) ? 'Naslov vesti mora imati izmedju 3 i 50 karaktera' : '';

    if (newsTitleError.length > 0) {
        document.getElementById('error-title').innerText = newsTitleError;
        addRedBorder('news-title');
    } else {
        document.getElementById('error-title').innerText = '';
        addBlackBorder('news-title');
    }

    //---check news text
    let newsText = getInputData('news-text');
    let newsTextError = '';

    newsTextError += (newsText.length === 0) ? 'Tekst vesti je obavezno polje \n' : '';
    newsTextError += (newsText.length < 10 || newsText.length > 250) ? 'Tekst vesti mora imati izmedju 10 i 250 karaktera' : '';

    if (newsTextError.length > 0) {
        document.getElementById('error-text').innerText = newsTextError;
        addRedBorder('news-text');
    } else {
        document.getElementById('error-text').innerText = '';
        addBlackBorder('news-text');
    }

    //---check news link
    let newsLink = getInputData('news-link').trim();
    let newsLinkError = '';

    newsLinkError += (newsLink.length === 0) ? 'Link vesti je obavezno polje \n' : '';
    newsLinkError += (newsLink.length < 10) ? 'Link vesti mora imati minimum 10 karaktera \n' : '';
    newsLinkError += !(newsLink.startsWith('http://')) ? 'Link vesti mora poceti sa http://' : '';

    if (newsLinkError.length > 0) {
        document.getElementById('error-link').innerText = newsLinkError;
        addRedBorder('news-link');
    } else {
        document.getElementById('error-link').innerText = '';
        addBlackBorder('news-link');
    }

    //---check news author name
    let newsAuthor = getInputData('news-author');
    let newsAuthorError = '';

    newsAuthorError += (newsAuthor.length > 0 && (newsAuthor.length < 3 || newsAuthor.length > 20))
        ? 'Ime autora mora sadrzati izmedju 3 i 20 karaktera' : '';

    if (newsAuthorError.length > 0) {
        document.getElementById('error-author').innerText = newsAuthorError;
        addRedBorder('news-author');
    } else {
        document.getElementById('error-author').innerText = '';
        addBlackBorder('news-author');
    }

    //---check news author email
    let authorEmail = getInputData('email').trim();
    let authorEmailError = '';

    authorEmailError += (authorEmail.length === 0) ? 'Email authora  je obavezno polje \n' : '';
    authorEmailError += (authorEmail.length < 5 || authorEmail.indexOf('@', 2) < 0) ? 'Molimo unesite validan Email' : '';

    if (authorEmailError.length > 0) {
        document.getElementById('error-email').innerText = authorEmailError;
        addRedBorder('email');
    } else {
        document.getElementById('error-email').innerText = '';
        addBlackBorder('email');
    }

    //---print news input values
    if (newsTitleError.length === 0 && newsTextError.length === 0 && newsLinkError.length === 0 &&
        newsAuthorError.length === 0 && authorEmailError.length === 0) {

        let oldNews = document.getElementById('content').innerHTML;
        let newNews =
            `<h1>${newsTitle}</h1>` +
            `<p>${newsText}</p>` +
            `<a href="${newsLink}">${newsLink}</a>` +
            `<h4> ${authorEmail}</h4>` +
            `<p> Autor:${newsAuthor}</p>` +
            `<hr/>` +
            oldNews;

        document.getElementById('content').innerHTML = newNews;

        clearInputData('news-title');
        clearInputData('news-text');
        clearInputData('news-link');
        clearInputData('email');
        clearInputData('news-author');
    }
}