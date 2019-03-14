let category = "science";
let size = 3;
// Make category equal to the user's preferences such as: business entertainment general health science sports technology
// ______________________________________________________
let queryNewsURL = "https://newsapi.org/v2/top-headlines?country=us&category=" + category + "&pageSize=" + size + "&apiKey=1cd64ef816394b76bdea16629047d2f5";
// Run AJAX call to get top news stories
$.ajax({
    url: queryNewsURL,
    method: "GET"
}).then(function (response) {
    for (let i = 0; i < size; i++) {
        let title = response.articles[i].title;
        let picture = response.articles[i].urlToImage;
        let newsURL = response.articles[i].url;
        let description = response.articles[i].description;

        // Create HTML divs/img tags and dynamically fill "box" [also have to claim area for "box" on HTML]
        const article = $("<div>").addClass("newsArticle article-" + (i + 1));
        // console.log(title);
        article.attr({
            src: newsURL,
            "data-title": title,
            "data-picture": picture,
            "data-description": description
        });
        article.append('<h1 class="newsTitle">' + title + '</h1>');
        article.append('<img class="newsImage" width="95%" src="' + picture + ' ">');
        article.append('<h3 class="newsDescription">' + description + '</h3>');

        
        $("#news").append(article);
    }
});