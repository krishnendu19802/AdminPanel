let totalsales_data = []
const cooking_data = [1500, 2200, 1800, 2500, 200];
const cleaning_data = [5500, 3200, 4000, 2100, 380];
const labels = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"]
function create_new_chart(el,name, type, data, labels) {
    const colors_for_graph = [
        'rgba(75, 192, 192, 0.9)',
        'rgba(255, 99, 132, 0.9)',
        'rgba(255, 205, 86, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 159, 64, 0.9)',
        'rgba(153, 102, 255, 0.9)'
    ];

    const ordersChart = new Chart(el, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: name,
                data: data,
                backgroundColor: colors_for_graph,
                borderWidth: 1,
                fill:true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function charts() {

    // {if(window.innerWidth<1000)
    //   window.alert('This is better visible in desktop mode')
    // }


    for (let i = 0; i < cooking_data.length; i++) {
        totalsales_data.push(cooking_data[i] + cleaning_data[i])
    }


    //for total sales
    const totalSales = document.getElementById('TotalSales');
    let existingChart = Chart.getChart(totalSales);
    if (existingChart) {
        existingChart.destroy();
    }
    create_new_chart(totalSales, 'Total Sales','bar', totalsales_data, labels)

    //for cooking 
    const totalcooking = document.getElementById('CookingData');
    existingChart = Chart.getChart(totalcooking);
    if (existingChart) {
        existingChart.destroy();
    }
    create_new_chart(totalcooking,'Cooking', 'bar', cooking_data, labels)

    //for cleaning

    const totalcleaning = document.getElementById('CleaningData');
    existingChart = Chart.getChart(totalcleaning);
    if (existingChart) {
        existingChart.destroy();
    }
    create_new_chart(totalcleaning,'Cleaning' ,'bar', cleaning_data, labels)

}

function change_chart(name, type) {
    console.log(name, type)
    if (totalsales_data.length > cooking_data.length)
        totalsales_data = totalsales_data.slice(0, cooking_data.length)
    console.log(totalsales_data)
    const mychart = document.getElementById(name);
    let existingChart = Chart.getChart(mychart);
    if (existingChart) {
        existingChart.destroy();
    }
    if (name === 'TotalSales')
        create_new_chart(mychart,'Total Sales', type, totalsales_data, labels)
    else if (name === 'CookingData')
        create_new_chart(mychart,'Cooking Data', type, cooking_data, labels)
    else
        create_new_chart(mychart,'Cleaning Data', type, cleaning_data, labels)
}

export default { Charts: charts, Change_chart: change_chart }