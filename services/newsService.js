var numberItem = 4;
var newsList = [];

function getNews() {
	var promise = axios({
		url: `./../data/news.json`,
		method: "GET",
		response: "json",
	});

	promise.then(function (result) {
		for (var i = 0; i < result.data.length; i++) {
			newsList.push(result.data[i]);
		}

		renderNews(newsList);
	});

	promise.catch(function (error) {
		console.log(error);
	});
}

getNews();

function renderNews(arrNews) {
	var content = ``;

	if (numberItem >= arrNews.length) {
		for (var i = 0; i < arrNews.length; i++) {
			content += `
                <div class="content__item">
                    <div class="row">
                        <div class="col-md-4 col-sm-4">
                            <img
                                src="${arrNews[i].img}"
                                alt="alt"
                            />
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="item__text">
                                <a href="#">
                                    <h4>
                                        ${arrNews[i].tieuDe}
                                    </h4>
                                </a>
                                <p>${arrNews[i].loaiGame}</p>
                                <p>
                                    <span>Sự Kiện</span>: ${arrNews[i].thoiGian}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
		}
	} else {
		for (var i = 0; i < numberItem; i++) {
			content += `
                <div class="content__item">
                    <div class="row">
                        <div class="col-md-4 col-sm-4">
                            <img
                                src="${arrNews[i].img}"
                                alt="alt"
                            />
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="item__text">
                                <a href="#">
                                    <h4>
                                        ${arrNews[i].tieuDe}
                                    </h4>
                                </a>
                                <p>${arrNews[i].loaiGame}</p>
                                <p>
                                    <span>Sự Kiện</span>: ${arrNews[i].thoiGian}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
		}
	}

	document.getElementById("news").innerHTML = content;
}

function renderMore() {
	numberItem = numberItem + 4;

	renderNews(newsList);

	if (numberItem >= newsList.length) {
		document.querySelector("#btn_more").classList.add("hide-button");
	}
}
