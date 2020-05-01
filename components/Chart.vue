<template>

  <div class="chartArea">
    <line-chart :chart-data="chartData" :options="chartOptions" :styles="chartStyles" />
  </div>

</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      chartDataValues: [],
      chartOptions: {
        maintainAspectRatio: false,
        legend: {display: false},
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: (label, index, labels) => label.toLocaleString() + "℃"
              },
            },
            {
              id: "yRainAxis",
              position: "right",
              ticks: {
                callback: (label, index, labels) => label.toLocaleString() + "mm",
                suggestedMax: 20
              },
              gridLines: {display: false,}
            }
          ],
          xAxes: [{
            ticks: {
              fontSize: 16,
              fontColor: '#4b4b4b',
            },
            gridLines: {display: false,}
          }]
        }
      },
      chartStyles: {
        width: "100%",
        height: "100%"
      }
    }
  },
  computed: {
    forecastItemList(){
      return this.forecastItem ? this.forecastItem.list.slice(0, 8) : []
    },
    THREEHOURS_TIME() {
      return this.forecastItemList.map(({dt_txt}) => {
        const newDt = new String(dt_txt)
        return newDt.substr( 11, 2 )+'時'
      })
    },
    THREEHOURS_TEMP() {
      return this.forecastItemList.map(({main}) => main.temp)
    },
    THREEHOURS_RAIN() {
      return this.forecastItemList.map(({rain}) => rain ? rain['3h'] : 0)
    },
    chartData() {
      return {
        datasets: [
          {
            label: '気温',
            data: this.THREEHOURS_TEMP,
            borderColor: '#f76271',
            backgroundColor: '#f76271',
            fill: false,
            lineTension: 0,
            radius: 5,
          },
          {
            label: '雨量',
            data: this.THREEHOURS_RAIN,
            type: 'bar',
            backgroundColor: '#6284f7',
            yAxisID: "yRainAxis"
          },
        ],
        labels: this.THREEHOURS_TIME,
      }
    },
    ...mapState({
      forecastItem: state => state.api.forecastItem
    })
  },
  mounted() {
    this.getForecast()
  },
  methods: {
    ...mapActions({
      getForecast: 'api/getForecast'
    })
  }
}

</script>

<style scoped>

  .chartArea {
    position: relative;
    width: 100%;
    height: 300px;
    padding: 30px 0;
    border-bottom: 1px gray solid;
  }

</style>