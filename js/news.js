animate = ['data-aos="fade-left"','data-aos="fade-right"','data-aos="fade-up-right"','data-aos="fade-down"','data-aos="zoom-in"','data-aos="zoom-in-left"','data-aos="flip-up"','data-aos="flip-right"']
function getNews(){
    $.ajax({
        url:`https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=4ba4dbcdc43341919c99b02be806ba04`,
        success:function(data){
            console.log(data)
            for(i=0;i<11;i++){
                document.querySelector(".news-area").innerHTML +=
                `
                <div class="news n${i}" ${animate[i]} style="background-image: url(${data.articles[i].urlToImage})">
                <div class="n-tint">
                <h3>${data.articles[i].title}</h3>
                <a href="${data.articles[i].url}"><button class="n-btn">Read More</button></a>
                </div>
                    </div>
                 `
            }
        }
    })
}