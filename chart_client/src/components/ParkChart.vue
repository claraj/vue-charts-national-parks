<!-- No template tag because this component extends Chartjs's Bar component, which already has a template -->

<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar, 
  props: { 
    chartdata: Object, 
    options: Object 
  }, 
  mounted() {
    console.log(this.chartdata)
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
