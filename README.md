## Vue + Charts + Express server 

National park visitor numbers

### Setup, dependencies 

Create express project, create Vue project
Install dependencies 

Server: express sequelize 
Client: vue-chartjs chart.js axios
(See package.json files) 

### Set up database 

sequelize init
sequelize model:generate --name NationalPark --attributes name:string,visitors:integer
sequelize seed:generate --name ExampleParks   # fill in example park information 
sequelize db:migrate
sequelize db:seed:all

### Park visitation data from 
https://www.nps.gov/aboutus/visitation-numbers.htm

### Curl 

curl http://127.0.0.1:3000/api/parks
curl -X POST --data '{"name":"Voyagers National Park","annualVisitors":218200}' -H "Content-Type: Application/JSON" http://127.0.0.1:3000/api/park

(Source: https://www.nationalparkstraveler.org/2011/08/numbers-voyageurs-national-park8607)