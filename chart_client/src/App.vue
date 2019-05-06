<template>
  <div id="app">

    <h1>National Park Visitor Numbers</h1>

    <ParkChart v-if="dataLoaded" v-bind:chartdata="parkChartData" v-bind:options="options"></ParkChart>

    <div>
      <input v-model="newParkName" placeholder="New Park Name">
      <input type="number" v-model="newParkAnnualVisitors" placeholder="Annual Visitors">
      <button v-on:click="addNewPark">Add New Park</button>
    </div>
  </div>
</template>

<script>
import ParkChart from './components/ParkChart.vue'

export default {
  name: 'app',
  components: {
    ParkChart
  },
  data() { 
    return {
      parkData: [],
      parkChartData: {},
      options: {},
      dataLoaded: false,
      newParkName: '',
      newParkAnnualVisitors: ''
    }
  },
  mounted() {
    this.options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
        // add any other options here 
    }
    this.loadParkData() 
  },
  methods: {
    loadParkData() {

    /* Chart data should be formatted like this 
    data: {
        labels: ["Acadia", "Yosemite", "Grand Canyon".  ... ],
        datasets: [{
            label: 'National Park Visitor Numbers',
            data: [1000000, 2000000, 30000000  .... ],
            // add any other attributes as needed, see chartjs documentation  
        }]
    },*/

    this.$parkService.getAll().then(parks => {

      this.parkData = parks
      let labels = this.parkData.map( park => park.name )
      let visitors = this.parkData.map ( park => park.annualVisitors )
      
      this.parkChartData = {
        labels: labels,
        datasets: [{
          label: 'Annual Visitors',
          data: visitors 
        }]
      }

      this.dataLoaded = true 
    })
  },

  addNewPark() {
    console.log("add")
      this.$parkService.addPark( { name: this.newParkName, annualVisitors: this.newParkAnnualVisitors} )
        .then( response => this.loadParkData() )
        .catch(err => console.error(err) )    // todo better error handling 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
