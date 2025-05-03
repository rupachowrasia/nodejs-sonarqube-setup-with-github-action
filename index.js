const Express = require('express');

const app = Express();
const PORT = process.env.PORT || 8080; // don't forget to set env variable

app.get('/', (req, res) =>{
    res.send('Set up SonarQube for a Node.js project using GitHub Actions');
})

app.listen(PORT, () =>{
    console.log(`App is listening on port:${PORT}`);
})
