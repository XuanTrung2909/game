function getGame(nameGame) {
	var promise = axios({
		url: `./../data/${nameGame}.json`,
		method: "GET",
		response: "json",
	});
	var gameList = [];
	promise.then(function (result) {
		for (var i = 0; i < result.data.length; i++) {
			gameList.push(result.data[i]);
		}
		renderGame(gameList, nameGame);
	});

	promise.catch(function (error) {
		console.log(error);
	});
}

getGame("gameH5");
getGame("gameMobile");

function renderGame(arrGame, id) {
	var content = ``;
	console.log(arrGame.length);
	for (var i = 0; i < arrGame.length; i++) {
		content += `
            <div class="content__item col-md-2 col-sm-3 col-4">
                <a href="./game-detail.html">
                    <img
                        src="${arrGame[i].img}"
                        alt="alt"
                     />
                    <h3>${arrGame[i].name}</h3>
                </a>
            </div>
        `;
	}

	// console.log(arrGame);
	document.getElementById(id).innerHTML = content;
}
