## Vue + Charts + Express server 

National park visitor numbers

### Setup, dependencies 

Create express project, create Vue project
Install dependencies 

Server: express sequelize body-parser 
Client: vue-chartjs chart.js axios
(See package.json files) 


### Setting up database 

```
sequelize init
sequelize model:generate --name NationalPark --attributes name:string,visitors:integer
sequelize seed:generate --name ExampleParks   # fill in example park information 
sequelize db:migrate
sequelize db:seed:all
```

### Vue client 

To use vue-chartjs, extend one of vue-chartjs components and customize it to display data.  Don't add a template to a vue-chartjs component, these define their own components with the chart HTML etc. in. 

A problem with displaying data from an API - the chart will load before the data is received so the chart will draw with empty data. And, if the data is updated, the chart won't automatically update. 

To fix: use a dataLoaded data attribute in the parent component and set it to true once the data is loaded. Use dataLoaded with v-if to load the chart component.  

To get the chart to automatically update if new data is received from the API: 
Add reactiveProp mixin to the chart component, which contains a chartData prop, and automatically watches it. 
Make sure the chart data prop provided to the chart component is called chartData.

### Park visitation data from 
https://www.nps.gov/aboutus/visitation-numbers.htm

### Curl 

curl http://127.0.0.1:3000/api/parks
curl -X POST --data '{"name":"Voyagers National Park","annualVisitors":218200}' -H "Content-Type: Application/JSON" http://127.0.0.1:3000/api/park

(Source: https://www.nationalparkstraveler.org/2011/08/numbers-voyageurs-national-park8607)