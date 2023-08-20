const imgHTMLElement = document.querySelector('img')
const endPointURL = 'https://api.thecatapi.com/v1/images/search'


fetchImageFromEndpoint()

imgHTMLElement.onclick = fetchImageFromEndpoint


async function fetchImageFromEndpoint() {
    const data = await fetch(endPointURL) // HTTP GET REQUEST
    const result = await data.json().then(data => data[0])

    return renderFetchedData(result)
}

function renderFetchedData(data) {
    const ImageURL = data.url
    imgHTMLElement.src = ImageURL
}