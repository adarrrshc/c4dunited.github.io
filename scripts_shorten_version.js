var url = ""
var fetch_urls = {
    "url1": "https://hotstarpremiumbot.herokuapp.com/api/v2/credentials?type=",
    "url2": "http://68.183.143.29:8089/api/v2/credentials?type="
}

function load_balance() {

    fetch("https://jsonblob.com/api/jsonBlob/f99b68e2-23d1-11ea-8ada-1f523035cc30", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(data => data.json())
        .then(data => {
            if (data["url1"] < data["url2"]) {
                url = fetch_urls["url1"]
                data["url1"] += 1
            } else {
                url = fetch_urls["url2"]
                data["url2"] += 1
            }
            console.log(url)
            return data
        }).then(json_data => {

            fetch("https://jsonblob.com/api/jsonBlob/f99b68e2-23d1-11ea-8ada-1f523035cc30", {
                body: JSON.stringify(json_data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "PUT"
            })

            console.log(json_data);
        }).catch(err => {
            url = fetch_urls["url1"]
        });


}

function getuseridpass() {

    x = 15000

    try {
        a = document.getElementById("sconlineimg").innerText.split(" ")[0]

        if (a > 150) {
            x = 15000
        }
        else if (a > 100) {
            x = 10000
        } else if (a > 50) {
            x = 5000
        } else {
            x = 2000
        }
    }
    catch (err) {
        x = 5000
    }

    console.log(x)

    generate_but = document.getElementById("generatebutton");
    generate_but.innerText = "Generating..Please Wait..";
    get_password_button = document.getElementById('open_link')
    get_password_button.innerText = ""
    get_password_button.style.visibility = "hidden"
    console.log("wait")
    load_balance()
    setTimeout(function () {
        getuseridpass2()
    }, x);

}


function getuseridpass2() {
    console.log("fetch");

    //get fingerprint
    var client = new ClientJS();
    client = client.getFingerprint();
    console.log(client)

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
        url + packdetails + "&id=" + client.toString()
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
            id.value = "visit";

            password.value = "telegram bot";
            details.innerText = "Use our telegram version of HotstarBot.\nClick 'Telegram Bot' button to visit."
            id.style.color = "#ff206e";
            password.style.color = "#ff206e";
            details.style.color = "#42e6a4"
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


}


