const dev = {
    BASE_URL:'http://localhost:3000/',
    BASE_API_URL: 'http://localhost:8080/'
}

const prod = {
    BASE_URL:'https://mysterious-meadow-54338.herokuapp.com/',
    BASE_API_URL: 'https://mysterious-meadow-54338.herokuapp.com/'
}
var config
if (process.env.NODE_ENV === 'production'){
     config = prod
}else{
     config = dev
}

module.exports = {
    ...config
}