var portfolio = [
    {
        portfolioTitle: '九九乘法',
        like: 0,
    },
    {
        portfolioTitle: '計算機',
        like: 10,
    },
    ];

    //作品集的包裝起來
    function renderPortfolio(list) {
    //拿到 HTML 裡面你要放作品的位置（這個 <div id="portfolioContainer"> 是作品清單的家）。
    var container = document.getElementById("portfolioContainer");
    //清空舊的內容，每次重畫不會堆在一起。就像你畫畫前會換乾淨畫紙。
    container.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        var item = document.createElement("div");
        item.className = "blog-item";

        var title = document.createElement("h3");
        title.innerText = list[i].portfolioTitle;

        var likeCount = document.createElement("p");
        likeCount.innerText = "喜歡數: " + list[i].like;
        likeCount.id = "likeCount" + i;

        var button = document.createElement("button");
        button.innerText = "喜歡";
        button.className = "like-btn";
        button.addEventListener("click", function () {
        list[i].like++;
        document.getElementById("likeCount" + i).innerText = "喜歡數: " + list[i].like;
        });

        item.appendChild(title);
        item.appendChild(likeCount);
        item.appendChild(button);

        container.appendChild(item);
    }
}

renderPortfolio(portfolio);