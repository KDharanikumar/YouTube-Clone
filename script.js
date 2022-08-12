const ytdata = async (query) => {
	try {
		let container = createElement("div", "class", "container-fluid", "null", "", "null", "", "null", "", "");
		let rowm1 = createElement("div", "class", "row", "null", "", "null", "", "null", "", "");
		let leftCol = createElement("div", "class", "col-lg-3", "null", "", "null", "", "null", "", "");

		let img = createElement(
			"img",
			"src",
			"https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg",
			"null",
			"",
			"null",
			"",
			"null",
			"",
			""
		);
		let ul = createElement("ul", "null", "", "null", "", "null", "", "null", "", "");
		let menuList1 = createElement("li", "class", "list-menu", "null", "", "null", "", "null", "", "");
		let homelink = createElement("a", "href", "https://www.youtube.com/", "class", "list-link", "null", "", "null", "", "Home");
		let menuList2 = createElement("li", "class", "list-menu", "null", "", "null", "", "null", "", "");
		let chlink = createElement("a", "href", "https://www.youtube.com/", "class", "list-link", "null", "", "null", "", "Channel");
		let menuList3 = createElement("li", "class", "list-menu", "null", "", "null", "", "null", "", "");
		let pllink = createElement("a", "href", "https://www.youtube.com/", "class", "list-link", "null", "", "null", "", "PlayList");
		let menuList4 = createElement("li", "class", "list-menu", "null", "", "null", "", "null", "", "");
		let sublink = createElement("a", "href", "https://www.youtube.com/", "class", "list-link", "null", "", "null", "", "Subscription");
		let menuList5 = createElement("li", "class", "list-menu", "null", "", "null", "", "null", "", "");
		let vidlink = createElement("a", "href", "https://www.youtube.com/", "class", "list-link", "null", "", "null", "", "Videos");
		///////////////////////////////////////////////////////////////
		let rightCol = createElement("div", "class", "col-lg-9", "null", "", "null", "", "null", "", "");
		let rightRow = createElement("div", "class", "row", "null", "", "null", "", "null", "", "");

		let colFull = createElement("div", "class", "col-lg-12", "null", "", "null", "", "null", "", "");

		let SearchBar = createElement("ul", "class", "search-bar", "null", "", "null", "", "null", "", "");
		let searchFull = createElement("li", "class", "search-full", "null", "", "null", "", "null", "", "");
		let input = createElement("input", "type", "text", "class", "search-box", "id", "search", "Placeholder", "Serach here", "");
		let button = createElement("button", "type", "submit", "class", "btn btn-danger", "id", "clk", "null", "", "");
		let aTag = createElement("a", "href", "#", "id", "", "null", "", "null", "", "Search");
		let upload = createElement("li", "null", "", "null", "", "null", "", "null", "", "");
		let uploadA = createElement("a", "href", "https://studio.youtube.com/channel/upload", "class", "uploadIcon", "null", "", "null", "", "");
		let upIcon = createElement("span", "href", "#", "class", "fa fa-upload", "null", "", "null", "", "");
		//////////////////////ContentArea/////////////////////////
		let rowmcontent = createElement("div", "class", "row", "null", "", "null", "", "null", "", "");
		let contentCol = createElement("div", "class", "col-lg-12 dis", "null", "", "null", "", "null", "", "");

		document.body.append(container);

		container.append(rowm1);

		rowm1.append(leftCol, rightCol);

		leftCol.append(img, ul);

		ul.append(menuList1, menuList2, menuList3, menuList4, menuList5);

		menuList1.append(homelink);
		menuList2.append(chlink);
		menuList3.append(pllink);
		menuList4.append(sublink);
		menuList5.append(vidlink);

		rightCol.append(rightRow, rowmcontent);

		rightRow.append(colFull);

		colFull.append(SearchBar);

		SearchBar.append(searchFull, upload);

		searchFull.append(input, button);

		button.append(aTag);

		upload.append(uploadA);

		uploadA.append(upIcon);

		rowmcontent.append(contentCol);

		let btn = document.getElementById("clk");
		btn.addEventListener("click", async () => {
			let val = document.getElementById("search").value;
			query = val;
			//const api_key = "AIzaSyA8OJVGSeAwORpR_nZE_XyWdfz0NmFWpAc";
			const api_key = "AIzaSyBsUQn5zzJj4gSBA7CfZF73FqHJ_22U6zI";
			const url = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&type=video&part=snippet&q=${query}`;

			const ytd1 = await fetch(url);
			const ytd2 = await ytd1.json();
			console.log(ytd2);

			ytd2.items.forEach((element) => {
				console.log(element.snippet.title);
				console.log(element.snippet.description);
				console.log(element.id.videoId);
				console.log("----------------------------------");
				contentCol.innerHTML += `
                <div class="card" style="width:300px">
                <div class="card-body">
                <img class="card-img-top" src="${element.snippet.thumbnails.high.url}" alt="Card image" style="width:100%">
                <h4 class="card-title">${element.snippet.title}</h4>
                <p class="card-text">${element.snippet.description}</p>
                <p class="card-text">${element.snippet.channelTitle}</p>
                <a href="https://www.youtube.com/watch?v=${element.id.videoId}" target="_blank" class="btn btn-primary p-btn text-center">Watch Video</a>
                </div></div>
                `;
			});
			//window.location.assign(document.URL);
		});

		//////////////////////////////////////////////End Of Try code block///////////////////////////////
	} catch {
		alert("Something went wrong");
	}
};

ytdata();

///////////////////////////////////////////////////////////////////////////////
function createElement(tagname, at1, atv1, at2, atv2, at3, atv3, at4, atv4, content) {
	let element = document.createElement(tagname);
	element.setAttribute(at1, atv1);
	element.setAttribute(at2, atv2);
	element.setAttribute(at3, atv3);
	element.setAttribute(at4, atv4);
	element.innerHTML = content;
	return element;
}
