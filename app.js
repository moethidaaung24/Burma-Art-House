function promptBoxFunction() {
    let value;
    let name=prompt("Please Enter Your Name", "HI!Moe Thida Aung");
    if (name == null || name == "") {
        value = "Naming canceled the prompt.";
    } else {
        value=`Welcom! ${name}`;
    }
    document.getElementById("Show Prompt Text").innerHTML = value;
}