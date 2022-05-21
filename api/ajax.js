const fetchPreview = () => {
  return new Promise((resolve, reject) => {
    const body = serializeForm();
    $.ajax({
      type: "POST",
      url: location.href.replace(/\#.*$/, '').replace(/\?.*$/, ''),
      data: body,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=zb3;q=0.9",
        "Cache-Control": "max-age=0",
        "Content-Type": "application/x-www-form-urlencoded",
        "Upgrade-Insecure-Requests": "1",
      },
    })
      .done((data) => {
        let preview = $.parseHTML(data)[24].firstElementChild.children[2];
        resolve(preview);
      })
      .fail((data) => {
        reject(data);
      });
  });
};
