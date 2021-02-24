var news = {
    "news":[
 
        {
            "author": "Alexandria Cortia",
"title": "70,000 coronavirus cases reported in India",
"description": "Coronavirus cases sees yet another spike in India. Total cases in india stands at 25 lakhs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
"url": "https://webdesign.tutsplus.com/articles/best-wordpress-themes-for-financial-sites--cms-35412",
"urlToImage": "https://twimgs.com/nojitter/darkreading/dr-logo.jpg",
"publishedAt": "2020-08-21"
        },
        
        {
            "author": "Manoj Kumar",
"title": "Bihar the next covid-19 hotspot?",
"description": "With the lowest testing rate Bihar has been recording the highest. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
"url": "https://webdesign.tutsplus.com/articles/best-wordpress-themes-for-financial-sites--cms-35412",
"urlToImage": "https://cms-assets.tutsplus.com/uploads/users/30/posts/35412/preview_image/wordpress-finance.jpg",
"publishedAt": "2020-08-20"
        },

        {
            "author": "Wienie Aggarwal",
"title": "Bitcoin hits a new high now valued at 1.5 Lakhs",
"description": "Bitocin is gaining popularity as one if the best investments of today, making its price soar as high as 1.5 lakhs. Experts say lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
"url": "https://webdesign.tutsplus.com/articles/best-wordpress-themes-for-financial-sites--cms-35412",
"urlToImage": "https://editorial.fxstreet.com/images/Markets/Currencies/Cryptocurrencies/cryptocurrencies_Large.jpg",
"publishedAt": "2020-08-19"
        },

        {
            "author": "Aladin Bensassi",
"title": "16 Best WordPress Themes for Financial Sites (Free & Premium)",
"description": "If you’re running a financial business one of the most important qualities to convey to your visitors is professionalism; one way you can show this is by having a professionally designed and built...",
"url": "https://webdesign.tutsplus.com/articles/best-wordpress-themes-for-financial-sites--cms-35412",
"urlToImage": "https://cms-assets.tutsplus.com/uploads/users/30/posts/35412/preview_image/wordpress-finance.jpg",
"publishedAt": "2020-08-18"
        }

        
    ]
}

var ad_img = {"paths":[
    {url:"add-1.PNG"},
    {url:"add-2.PNG"},
    {url:"add-3.PNG"},
    {url:"add-4.png"}
]

}

function renderNews(){
    //generating random number in range 4
    var num = Math.floor(Math.random()*news.news.length);

    var num_add = Math.floor(Math.random()*ad_img.paths.length);
    var data = news.news[num];
    var add = ad_img.paths[num_add];

    console.log(data);
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("description").innerHTML = data.description.slice(0,200);
    document.getElementById("image").src = data.urlToImage;
    document.getElementById("author").innerHTML = data.author;
    document.getElementById("date").innerHTML = data.publishedAt;
    document.getElementById("url").href = data.url;
    document.getElementById("add-img").src=add.url;
}

document.getElementById("next-article").addEventListener('click',()=>{
    renderNews();
})

document.addEventListener('DOMContentLoaded',function(){
    renderNews();
},false);





