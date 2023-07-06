import { API_URL } from "../urls.js";

async   function sliderFetch()
{
    let res = await fetch(API_URL + 'slider');
    let data = await res.json();

    data.map(s => {
        const el = document.createElement('slider-component');

        el.setAttribute('src', s.img_uri);
        el.setAttribute('text', s.title);
        el.setAttribute('href', s.link);

        document.getElementById('carousel-inner').appendChild(el);
    })
    let slides = document.getElementsByClassName('carousel-item');
    slides[0].classList.add('active');
}

async   function sideHeaderArticleFetch()
{
    let res = await fetch(API_URL + 'header-articles');
    let data = await res.json();

    data.map(s => {
        const el = document.createElement('side-article');

        el.setAttribute('src', s.img_uri);
        el.setAttribute('text', s.title);
        el.setAttribute('href', s.link);
        el.setAttribute('category', s.category);

        document.getElementById('header-artci').appendChild(el);
    })
}

async   function newsArticleFetch()
{
    let res = await fetch(API_URL + 'news');
    let data = await res.json();

    data.map(s => {
        const el = document.createElement('article-component');

        el.setAttribute('src', s.img_uri);
        el.setAttribute('text', s.title);
        el.setAttribute('href', s.link);
        el.setAttribute('category', s.category);

        el.classList.add('col-lg-3', 'col-md-4', 'col-sm-6','mt-4')
        document.getElementById('news').appendChild(el);
    })
}

async   function mostReadCardFetch()
{
    let res = await fetch(API_URL + 'most-read');
    let data = await res.json();

    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0)
        {
            const el = document.createElement('most-read-card');

            el.setAttribute('title',data[i].title);
            el.setAttribute('src',data[i].img_uri);
            el.setAttribute('href',data[i].link);
            el.setAttribute('excerpt',data[i].paragraph);
            el.setAttribute('datetime',moment(parseInt(data[i].date)).format('dddd') + ', ' + moment(parseInt(data[i].date)).format('ll'));

            document.getElementById('most-read').appendChild(el);
        }
        else 
        {
            const el = document.createElement('big-most-read-card');

            el.setAttribute('title',data[i].title);
            el.setAttribute('src',data[i].img_uri);
            el.setAttribute('href',data[i].link);
            el.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ', ' + moment(parseInt(data[i].date)).format('ll'));

            document.getElementById('most-read').appendChild(el);
        }
    }
}


async   function opinionFetch()
{
    let res = await fetch(API_URL + 'opinion-articles');
    let data = await res.json();

    data.map(s => {
        const el = document.createElement('opinions-card');

        el.setAttribute('src', s.user_uri);
        el.setAttribute('title', s.title);
        el.setAttribute('text', s.user_name);
        el.setAttribute('href', s.link);

        el.classList.add('col-lg-3', 'col-md-4', 'col-sm-6')
        document.getElementById('opinion').appendChild(el);
    })
}

// async   function videoFetch()
// {
//     let res = await fetch(API_URL + 'videos');
//     let data = await res.json();

//     data.map(s => {
//         const el = document.createElement('video-component');

//         el.setAttribute('src', s.img_uri);
//         el.setAttribute('text', s.title);
//         el.setAttribute('href', s.link);

//         document.getElementById('swiper-wrapper').appendChild(el);
//     })
// }

async function videosFetch() {
    let res = await fetch(API_URL + 'videos')
    let data = await res.json();

    data.map(article => {
        const el = document.createElement('swiper-slide')

        el.setAttribute('title', article.title)
        el.setAttribute('src', article.img_uri)
        el.setAttribute('href', article.link)

        document.getElementById('swiper-wrapper').appendChild(el)
    })
}
sliderFetch();
sideHeaderArticleFetch();
newsArticleFetch();
mostReadCardFetch();
opinionFetch();
videosFetch();