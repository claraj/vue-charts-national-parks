<!-- No template tag because this component extends Chartjs's Bar component, which already has a template -->

<script>

// resources: https://vue-chartjs.org/guide/#updating-charts

import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins 

export default {
  extends: Bar, 
  mixins: [ reactiveProp ],   // For automatically updating chart if chartData changes 
  props: { 
    // chartdata: Object,   // provided by the mixin. Parent component needs to set chartData prop. 
    options: Object 
  }, 
  mounted() {
    console.log(this.chartdata)
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
