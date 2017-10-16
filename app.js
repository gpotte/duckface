bodyParser  = require('body-parser'),
express     = require('express'),
app         = express(),
port        = process.env.PORT || 3030,
duckfaces   = 0,
http        = require('http').Server(app);

if (!process.env.PWD) {
  process.env.PWD = process.cwd();
}
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/', (req, res)=>{
  res.render('home');
});

app.post('/add', (req, res)=>{
  duckfaces++;
  res.send(duckfaces.toString());
});

app.get('/count', (req, res)=>{
  res.send(duckfaces.toString());
});

http.listen(port, ()=>{
  console.log("----------------------------------------------------")
  console.log("Welcome to DUCKFACE ! Server running on port %d", port);
});
