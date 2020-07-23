let endpoint = `https://www.reddit.com/search?q=${}apiKey${apiKey}`

fetch(endpoint)
.then(response=>
{
    return response.json();
})
.then(data =>
{
    console.log(data);
})
.catch(err)