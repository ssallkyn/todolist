function readMore(index) {
    const readMoreBtn = document.getElementById(`readMoreBtn${index}`);
    const content = items[index].content;
    readMoreBtn.style.display = 'none';
    readMoreBtn.insertAdjacentHTML('afterend', `<p>${content}</p>`);
}