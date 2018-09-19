function getNews(){
    $.ajax({
        url:`https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=4ba4dbcdc43341919c99b02be806ba04`,
        success:function(data){
            for(i=0;i<11;i++){
                document.querySelector(".news-area").innerHTML +=
                `
                <div class="news n${i}"></div>
                 `
            }
        }
    })
}