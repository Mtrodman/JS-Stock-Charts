async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

 
    const { GME, MSFT, DIS, BNTX } = mockData;
    const stocks = [GME, MSFT, DIS, BNTX];
    console.log(stocks)

   
    stocks.forEach(stock => stock.values.reverse());
   
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
      
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
             
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol)
            }))
        }
    });

    new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
            //this isn't working
            labels: stock.meta.symbol,
            datasets: stocks.map(stock => ({
                label: 'Highest',
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data:getHighest(stock.values)
            }))
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {

                }
            }
        },
    });


}



function getHighest(stock) {
    arr = stock.values.map(value => parseFloat(value.high))
    console.log(arr)
    let i = 0
    arr.forEach((element) => {
        if (i < element) {
          i = element;
        }
      });
      console.log(i)
}

function getColor(stock) {
    if (stock === "GME") {
        return 'rgba(61, 161, 61, 0.7)'
    }
    if (stock === "MSFT") {
        return 'rgba(209, 4, 25, 0.7)'
    }
    if (stock === "DIS") {
        return 'rgba(18, 4, 209, 0.7)'
    }
    if (stock === "BNTX") {
        return 'rgba(166, 43, 158, 0.7)'
    }
}


main()
