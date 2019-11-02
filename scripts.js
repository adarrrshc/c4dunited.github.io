function getuseridpass() {
    console.log("fetch");
    id = document.getElementById("email");
    password = document.getElementById("password");
    generate_but = document.getElementById("generatebutton");
    generate_but.innerText = "Generating..please wait..";
    toast = document.getElementById("toast");
    details = document.getElementById("account_details");

    //account type finding
    accounttype = document.getElementsByName("account_type");
    if (document.getElementsByName("account_type")[0].checked) {
        packdetails = document.getElementsByName("account_type")[0].value;
    }
    if (document.getElementsByName("account_type")[1].checked) {
        packdetails = document.getElementsByName("account_type")[1].value;
    }
    if (document.getElementsByName("account_type")[2].checked) {
        packdetails = document.getElementsByName("account_type")[2].value;
    }
    console.log(packdetails);

    //maybe hide ???
    divv = document.getElementById("credentials");
    divv.style.visibility = "visible";

    //fetch json
    var p = parseInt(localStorage.getItem("credits"));
    console.log(p);
    if (p < 1) {
        id.value = "Out of credits ";
        password.value = "Share to get credits";
        generate_but.innerText = "Generate";
        id.style.color = "#ff206e";
        password.style.color = "#ff206e";
    } else {
        fetch(
            "https://hotstarpremiumbot.herokuapp.com/api/v1/credentials?type=" +
            packdetails
        )
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                // Work with JSON data here
                console.log("here");
                id.value = data["email"];
                password.value = data["password"];
                details.innerText = data["details"] + " " + data["expiry"]
                generate_but.innerText = "Generate";


                localStorage.setItem("credits", p - 1);
                document.getElementById("credits").innerHTML =
                    "Credits:" + localStorage.getItem("credits");
                id.style.color = "#18f8f8";
                password.style.color = "#18f8f8";
            })
            .catch(err => {
                // Do something for an error here
                console.log("error");
                generate_but.innerText = "Generate";
                id.value = "Ooops";
                password.value = "Try Again";
                details.innerText = "Share to gain 1 credit, Creditx2 to get 2 credits"
            });
    }
}

function copyToClipboard(id) {
    var copyGfGText = document.getElementById(id);

    /* Select the text field */
    copyGfGText.select();

    toast.innerText = id + " copied.";
    /* Copy the text inside the text field */
    document.execCommand("copy");
    toast.style.visibility = "visible";
    setTimeout(function () {
        toast.style.visibility = "hidden";
    }, 1000);
}

function sharebutton() {
    window.open(
        "https://api.whatsapp.com/send?text=Hey guys, This website gives hotstar premium for free. http://hotstarpremium.tk, Give it a try."
    );
    //window.location.href =
    //  "https://api.whatsapp.com/send?text=Hey guys, This website gives hotstar premium for free. http://hotstarpremium.tk, //Give it a try.";

    setTimeout(function () {
        increase_credit(1);
    }, 3000);
}

//Hi there! This website gives HOTSTAR PREMIUM for FREE!.Do check it out,Click here hotstarpremium.tk. #Hotstar

function twoxcredit() {
    //window.open("https://api.whatsapp.com/send?text=t.me/projectupdates");
    //window.location.href = "http://deloplen.com/afu.php?zoneid=2905837";
    //window.open("http://deloplen.com/afu.php?zoneid=2905837");

    setTimeout(function () {
        increase_credit(2);
        window.location.reload(true);
    }, 200);
}

function increase_credit(c) {
    var p = parseInt(localStorage.getItem("credits")) + c;
    localStorage.setItem("credits", p);
    document.getElementById("credits").innerHTML =
        "Credits:" + localStorage.getItem("credits");
}