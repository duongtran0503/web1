const Load = (id, link) => {
  const element = document.getElementById(id);
  let xHTML = new XMLHttpRequest();
  if (link) {
    xHTML.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) element.innerHTML = this.responseText;
        if (this.status == 404) element.innerHTML = `<h1>not found</h1>`;
      }
    };
    xHTML.open("GET", link, true);
    xHTML.send();
    return;
  }
};
