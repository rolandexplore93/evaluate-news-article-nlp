const validUrltag = require('valid-url');
// Validating URL using npm-package
function validURLAddress(url){
    if (validUrltag.isUri(url)){
        console.log('Looks like an URI');
        return true
    } else {
        console.log('Not a URI');
        return false
    }
}
export { validURLAddress }

// validate URL using Javascript Regex
// function validURL(myURL){
//     var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
//         '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
//         '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//         return !!pattern.test(myURL);
// }
// export { validURL }


  
