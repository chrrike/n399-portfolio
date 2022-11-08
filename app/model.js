export function changePage(pageID) {
  console.log(pageID);
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home.html`, function (data) {
      $("#app").html(data);
    });
  } else if (pageID == "about") {
    $.get(`pages/about.html`, function (data) {
      $("#app").html(data);
    });
  } else if (pageID == "work") {
    $.get(`pages/work.html`, function (data) {
      $("#app").html(data);
    });
  } else if (pageID == "contact") {
    $.get(`pages/contact.html`, function (data) {
      $("#app").html(data);
    });
  }
}
