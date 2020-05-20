import { modifyUi } from './modifyUi';
function handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit called...')
    // check what text was put into the form field
    let formText = document.getElementById('name').value

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
            document.getElementById('resultsList').appendChild(modifyUi(res));
        })
}

export { handleSubmit }
