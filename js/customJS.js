function ValidIt() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var number = document.getElementById('number').value;
    var grph = document.getElementById('grph');
    var web = document.getElementById('web');
    var mob = document.getElementById('mob');

    if ((name != "" && city != "" && email != "" && number != "") && (grph.checked == true || web.checked == true || mob.checked == true)) {
        alert("Dear " + name + "! \nYour Form Has Been Succsefully Submitted...!");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('city').value = "";
        document.getElementById('number').value = "";
        document.getElementById('grph').checked = false;
        document.getElementById('web').checked = false;
        document.getElementById('mob').checked = false;
    } else {
        alert("Please Fill All the Fields....!");
    }
}