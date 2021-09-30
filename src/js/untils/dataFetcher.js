/*
    dataFetcher (url)
    description

    parameters:
    url:string
    async ----> promise

*/ 

const dataFetcher = function(url=null) {
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export default dataFetcher