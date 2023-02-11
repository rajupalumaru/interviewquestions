function find_unique_characters(str) {
    var unique = '';
    for (var i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
            unique += str[i];
        }
    }
    return unique;
}

console.log(find_unique_characters('welcome to tekkali'));