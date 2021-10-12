function getNews() {
	var promise = axios({
		url: `./../data/news.json`,
		method: "GET",
		response: "json",
	});
	var newsList = [];
	promise.then(function (result) {
		for (var i = 0; i < result.data.length; i++) {
			newsList.push(result.data[i]);
		}
	});

	promise.catch(function (error) {
		console.log(error);
	});
}

function renderNews(arrNews) {
	var content = ``;
	console.log(arrNews.length);
	for (var i = 0; i < arrGame.length; i++) {
		content += `
            <div class="col-md-4 col-sm-4">
                <img
                    src="./assets/images/game1.jpg"
                    alt="alt"
                />
            </div>
            <div class="col-md-6 col-sm-6">
                <div class="item__text">
                    <a href="#">
                        <h4>
                            Thông báo: Đông Tà Tây Độc
                             OPENSV1_Dương Quá
                        </h4>
                    </a>
                    <p>Đông Tà Tây Độc 3D</p>
                    <p>
                        <span>Sự Kiện</span>: 30-8-2021 22:08:59
                    </p>
                </div>
            </div>
        `;
	}

	// console.log(arrGame);
	document.getElementById("news").innerHTML = content;
}
