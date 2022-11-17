var text_heading = document.getElementById("text_heading");
var arr_name = [ ' Designer', 'Web Developer', 'Web Designer'];
var arr_asd = 0;
var char_num = 0;

function heading_updating() {
    char_num++;
    // alert('');
    text_heading.innerHTML = "I m'<span>" + arr_name[arr_asd].slice(0, char_num) + "</span>";
    if (char_num == arr_name[arr_asd].length) {
        arr_asd++;
        char_num = 0;
    }

    if (arr_asd == arr_name.length) {
        arr_asd = 0;
    }

    setTimeout(heading_updating, 200)

}
heading_updating();