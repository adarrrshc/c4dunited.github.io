function getuseridpass() {

    x = 15000

    try {
        a = document.getElementById("sconlineimg").innerText.split(" ")[0]

        if (a > 150) {
            x = 20000
        }
        else if (x > 100) {
            x = 15000
        } else if (x > 50) {
            x = 10000
        } else {
            x = 5000
        }
    }
    catch (err) {
        x = 10000
    }

    console.log(x)

    generate_but = document.getElementById("generatebutton");
    generate_but.innerText = "Generating..Please Wait..";
    get_password_button = document.getElementById('open_link')
    get_password_button.innerText = ""
    get_password_button.style.visibility = "hidden"
    console.log("wait")
    setTimeout(function () {
        getuseridpass2()
    }, x);


}




function getuseridpass2() {
    console.log("fetch");

    id = document.getElementById("email");
    password = document.getElementById("password");
    generate_but = document.getElementById("generatebutton");
    get_password_button = document.getElementById('open_link')
    details = document.getElementById("account_details");

    generate_but.innerText = "Getting your account..Please Wait";
    get_password_button.innerText = ""
    get_password_button.style.visibility = "hidden"

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
        "https://hotstarpremiumbot.herokuapp.com/api/v2/credentials?type=" +
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
            get_password_button.innerText = "Get Password"

            //console.log(data)
            if (data["shorten"] == 1) {
                password.value = "Click 'Get Password' Button";
                get_password_button.style.visibility = "visible";


                document.getElementById('open_link').onclick = function () {
                    if (window.confirm("Press 'OK' to visit earnload site\nand get the password ( ˘ ³˘)♥\nMake sure you have read the instructions.\nHave a nice day.")) {
                        window.open(short_url);
                    }
                };

                document.getElementById('password').onclick = function () {
                    if (window.confirm("Press 'OK' to visit earnload site\nand get the password ( ˘ ³˘)♥\nMake sure you have read the instructions.\nHave a nice day.")) {
                        window.open(short_url);
                    }
                };

            }
            else {
                password.value = data["password"]
                get_password_button.style.visibility = "hidden";
                document.getElementById('password').onclick = function () { copyToClipboard('password'); };
            }

            id.style.color = "#61ff7e";
            password.style.color = "#61ff7e";
            details.style.color = "#61ff7e"
        })
        .catch(err => {
            // Do something for an error here
            console.log("error");
            generate_but.innerText = "Generate";
            id.value = "Ooops";

            password.value = "Try Again";
            details.innerText = "Too much load on server.\nUse our telegram version of HotstarBot.\nClick 'Telegram Bot' button to visit."
            id.style.color = "#ff206e";
            password.style.color = "#ff206e";
            details.style.color = "#ff206e"
            get_password_button.innerText = "Telegram Bot"
            get_password_button.style.visibility = "visible"
            get_password_button.onclick = function () {
                if (window.confirm("Press 'OK' to visit Telegram Bot version of HotstarBot\nand get Premium Account ( ˘ ³˘)♥\nHave a nice day.")) {
                    window.open("https://t.me/hottstarbot");
                }
            }

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
