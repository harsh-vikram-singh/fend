import { checkForName } from './nameChecker'
import { modifyUi } from './modifyUi';
function handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit called...')
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    // checkForName(formText)

    // var AYLIENTextAPI = require('aylien_textapi');
    // var textapi = new AYLIENTextAPI({
    //     application_id: "68bc62ad",
    //     application_key: "c4b71dc7f08b52b4141bf863067587ad"
    // });

    // textapi.sentiment({
    //     'text': 'John is a very good football player!'
    // }, function (error, response) {
    //     if (error === null) {
    //         console.log(response);
    //     }
    // });

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/aylien', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'text': formText })
    })
        .then(res => res.json())
        .then(function (res) {
            // console.log(res)
            // console.log(modifyUi(res))
            document.getElementById('resultsList').appendChild(modifyUi(res));
        })
}

export { handleSubmit }
