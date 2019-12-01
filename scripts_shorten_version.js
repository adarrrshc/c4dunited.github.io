function getuseridpass() {
    console.log("fetch");
    id = document.getElementById("email");
    password = document.getElementById("password");
    generate_but = document.getElementById("generatebutton");
    generate_but.innerText = "Generating..please wait..";
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
            console.log("succ sess");
            id.value = data["email"];
            short_url = data["password"];

            details.innerText = data["details"] + " : " + data["expiry"]
            generate_but.innerText = "Generate";

            //console.log(data)
            if (data["shorten"] == 1) {
                password.value = "Click 'Get Password' Button"
                document.getElementById('open_link').onclick = function () { window.open(short_url); };
                document.getElementById('open_link').style.visibility = "visible";
            }
            else {
                password.value = data["password"]
                document.getElementById('open_link').style.visibility = "hidden";
            }

            id.style.color = "#61ff7e";
            password.style.color = "#61ff7e";
        })
        .catch(err => {
            // Do something for an error here
            console.log("error");
            generate_but.innerText = "Generate";
            id.value = "Ooops";
            password.value = "Try Again";
            details.innerText = ""

        });
}


function copyToClipboard(id) {
    var copyGfGText = document.getElementById(id);

    /* Select the text field */
    copyGfGText.select();

    toast.innerText = id + " copied.";
    /* Copy the text inside the text field */
    document.execCommand("copy");
    // toast.style.visibility = "visible";
    // setTimeout(function () {
    //     toast.style.visibility = "hidden";
    //     toast.innerText = ""
    // }, 1000);
}

function sharebutton() {


    if (window.confirm('To keep this service Alive, Please share with friends.\nYou Will Be Blessed(◕‿◕✿)\nClick "OK" and Share to get Credits')) {
        //window.location.reload(true);
        // They clicked Yes
        window.open(
            "https://api.whatsapp.com/send?text=Hey guys, I just got my Premium Hotstar Account for Free from hotstarpremium.tk, Check it out."
        );

        setTimeout(function () {
            increase_credit(2);
            window.location.reload(true);
        }, 3000);
    }
    else {
        // They clicked no
        window.location.reload(true);

    }




    //window.location.href =
    //  "https://api.whatsapp.com/send?text=Hey guys, This website gives hotstar premium for free. http://hotstarpremium.tk, //Give it a try.";


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
