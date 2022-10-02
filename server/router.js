const router = require("express").Router();
const request = require("request");
const XMLHttpRequest = require("xhr2");

var xhr = new XMLHttpRequest();

let response = "";

router.post("/search", (req, res) => {
  let title = req.body.title;
  let author = req.body.author;
  let center = req.body.center;
  let organization = req.body.organization;
  let stiTypeDetails = req.body.stiTypeDetails;
  let subjectCategory = req.body.subjectCategory;
  let highlight = req.body.highlight;

  let data = {
    title: title,
    author: author,
    center: center,
    organization: organization,
    stiTypeDetails: stiTypeDetails,
    subjectCategory: subjectCategory,
    highlight: highlight,
  };

  temp = data;

  for (var i in data) {
    if (temp[i] == "") {
      delete temp[i];
    }
  }

  data = temp;

  var url = "https://ntrs.nasa.gov/api/citations/search";
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const search_response = JSON.parse(xhr.responseText);

      // DEV WARNING
      console.log(xhr.status);
      //
      if (search_response.results[0].downloads == "") {
        res.send("none");
      } else {
        let pdfLink = search_response.results[0].downloads[0].links.pdf;

        let dataSender = (data2) => {
          let xhr2 = new XMLHttpRequest();
          xhr2.open("POST", "http://127.0.0.1:5000/api/search-data");
          xhr2.setRequestHeader("Accept", "application/json");
          xhr2.setRequestHeader("Content-Type", "application/json");
        
          xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4) {
              res.status(200).json(JSON.stringify(xhr2.responseText))
            }
          };
        
          xhr2.send(data2);
        };        

        sendData = `"https://ntrs.nasa.gov${pdfLink}"`;
        dataSender(sendData)

        // console.log(pdfLink);
        // for (i in results) {
        //   console.log();
        // }
        // sendData = `"https://ntrs.nasa.gov${pdfLink}"`;
        // dataSender(sendData)
        // SEND PYTHON ENDPOINT
        // res.status(200).json(search_response.results[0].downloads[0].links.pdf);
      }
    }
  };

  xhr.send(JSON.stringify(data));
});

router.post("/test", (req, res) => {});

router.get("/test", (req, res) => {});

module.exports = router;
