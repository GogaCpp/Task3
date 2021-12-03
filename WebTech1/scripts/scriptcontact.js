function Complete() {
    var elem = "Name: " + document.eleme.name.value +
        "\nEmail: " + document.eleme.email.value +
        "\nPhone number: " + document.eleme.tel.value + 
        "\nAnswer: " + document.eleme.letter.value;
    alert(elem);
}
function getDate()
{
    var today=new Date();
    return today.toLocaleString()+"\n";
}
function CheckRadio(form,value)
{
    if(value=="Good")
        form.Letter.value=getDate()+OK;
    else
        form.Letter.value=getDate()+noanswerneeded;
}