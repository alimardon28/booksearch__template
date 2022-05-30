// https://www.googleapis.com/books/v1/volumes?q=search+terms

const bookcardList = document.querySelector(".bookcard-list");
const showingboxButton = document.querySelector(".showingbox-button");
const input = document.querySelector(".input");
const logoutButton = document.querySelector(".logout-button");
const result = document.querySelector(".result");
const searchimg = document.querySelector(".searchimg");

async function getData(query) {
  const request = await fetch(
    ` https://www.googleapis.com/books/v1/volumes?q=${query}`
  );
  const response = await request.json();
  sendDisplay(response.items);
}

input.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    getData(input.value);
  }
});

(function () {
  getData("Javascript");
})();

function sendDisplay(book) {
  book?.map((item) => {
    console.log(item);
    const books = document.createElement("div");

    books.innerHTML = `

        <li class="bookcard-item">
        <div class="itemImg">
          <img class="itemImg-img" src="${item.volumeInfo.imageLinks.thumbnail}" alt="user" />
        </div>
        <div class="itemBody">
          <h4 class="itemBody-title">${item.volumeInfo.title}</h4>
          <p class="itemBody-after">${item.volumeInfo.authors[0]}</p>
          <span class="itemBody-years">${item.volumeInfo.publishedDate}</span>
        </div>
        <div class="itembutton">
          <button class="button yellow">Bookmark</button>
          <button class="button info">More Info</button>
          <button class="button dimgrey">Read</button>
        </div>
      </li>

        `;
    bookcardList.prepend(books);
  });
}
