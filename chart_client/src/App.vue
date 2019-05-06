<template>
  <div id="app">

    <h1>National Park Visitor Numbers</h1>

    <!-- dataLoaded to prevent chart being loaded before data is received from API -->
    <!-- the chartData prop must be called chartData so vue-chartjs knows what prop to watch and update the chart if the data changes  -->
    <ParkChart v-if="dataLoaded" v-bind:chartData="parkChartData" v-bind:options="options"></ParkChart>

    <div>
      <input v-model.trim="newParkName" placeholder="New Park Name">
      <input type="number" v-model.number="newParkAnnualVisitors" placeholder="Annual Visitors">
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

    /* Example chart data format 
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

      // Organize data into format expected by Chart.js 

      let labels = this.parkData.map( park => park.name )
      let visitors = this.parkData.map ( park => park.annualVisitors )
      let colors = this.generateBackgroundColors(labels.length)
      this.parkChartData = {
        labels: labels,
        datasets: [{
          label: 'Annual Visitors',
          data: visitors,
          backgroundColor: colors
        }]
      }

      // set dataLoaded to true, so ParkChart component loads 
      this.dataLoaded = true 
    })
  },

  addNewPark() {
    if (!this.newParkName || !this.newParkAnnualVisitors) { 
      alert("Enter name and visitors")
      return 
    }
      
    this.$parkService.addPark( { name: this.newParkName, annualVisitors: this.newParkAnnualVisitors} )
      .then( response => {
        this.newParkName = ""
        this.newParkAnnualVisitors = ""
        this.loadParkData()
      })
      .catch(err => console.error(err) )    // todo better error handling 
    },

    generateBackgroundColors(number) {
      // These hex codes are roughly a rainbow of reds, purples, blues, greens, yellows, oranges. 
      const colors = ['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C', '#16A085', '#27AE60', '#2ECC71', '#F1C40F', '#F39C12', '#E67E2', '#D35400']
      
      // Copy colors from the colors array to make a new array for the chart. Repeat colors as needed to provide enough colors. 
      let chartColors = []
      let counter = 0
      for (let x = 0 ; x < number ; x++ ) {
        let color = colors[counter]
        chartColors.push(color)  
        counter = ( counter + 1 ) % colors.length   // % cycles counter back to 0 when it hits the lenght of the colors array
      }
      return chartColors
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
