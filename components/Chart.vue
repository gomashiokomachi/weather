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
                            gridLines: {
                                display: false,
                            }
                        }
                    ],
                    xAxes: [{
                        ticks: {
                            fontSize: 16,
                            fontColor: '#4b4b4b',
                        },
                        gridLines: {
                            display: false,
                        }
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
        THREEHOURS_TIME() {
            const timeArray = []
            for (let i=0; i<8; i++) {
                const dt = this.forecastItem && this.forecastItem.list[i].dt_txt
                const newDt = new String(dt)
                timeArray.push(newDt.substr( 11, 2 )+'時')
            } return timeArray
        },
        THREEHOURS_TEMP() {
            const tempArray = []
            for (let i=0; i<8; i++) {
                tempArray.push(this.forecastItem && this.forecastItem.list[i].main.temp)
            } return tempArray
        },
        THREEHOURS_RAIN() {
            const rainArray = []
            for (let i=0; i<8; i++) {
                const rain = this.forecastItem && this.forecastItem.list[i].rain
                if(rain){
                    rainArray.push(rain['3h'])
                } else {
                    rainArray.push(0)
                }
            } return rainArray
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
            };
        },
        ...mapState({
            forecastItem: state => state.api.forecastItem
        })
    },
    mounted () {
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

    .chartArea{
        position: relative;
        width: 100%;
        height: 300px;
        padding: 30px 0;
        border-bottom: 1px gray solid;
    }

</style>
