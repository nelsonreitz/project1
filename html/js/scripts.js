$(document).ready(function() {

    // if price div exists
    if ($('#price').length) {

        // update price every 10 sec
        setInterval(updatePrice, 10000);

        // draw chart
        queryChart();

        // history time range form
        $("#timerange").submit(function() {

            var range = $("input[type=submit][clicked=true]").attr("name");
            queryChart(range);

            return false;
        });

        // give clicked attribute to clicked input
        $("#timerange input[type=submit]").click(function() {
            $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
            $(this).attr("clicked", "true");
        });
    }
});

/*
 * Updates stock price with ajax.
 */
function updatePrice() {

    $.ajax({
        url: "index.php",
        data: {
            ajax_symbol: $("#symbol").html()
        },
        success: function(data) {
            $("#price").html(data.price);
        }
    });
}

/*
 * Draws a google line chart.
 */
function drawChart(history) {

    var data = new google.visualization.arrayToDataTable(history);

    var options = {
        title: "Historical Prices",
        legend: "none",
        width: 900,
        height: 500
    };

    var chart = new google.visualization.LineChart(document.getElementById("chart"));

    // format data
    var formatter_date = new google.visualization.DateFormat({formatType: "short"});
    var formatter_number = new google.visualization.NumberFormat({prefix: "$"}); 
    formatter_date.format(data, 0);
    formatter_number.format(data, 1);

    chart.draw(data, options);
}

/*
 * Queries history chart with ajax.
 */
function queryChart(range) {

    // range default value
    range = typeof range !== "undefined" ? range : 5;

    $.ajax({
        url: "history.php",
        data: {
            history_symbol: $("#symbol").html(),
            range: range
        },
        success: function(data) {

            // prepare data for Google form
            var history = [["Date", "Price"]]
            $.each(data, function(date, price) {
                history.push([new Date(date), parseFloat(price)]);
            });

            google.setOnLoadCallback(drawChart(history));
        }
    });
}