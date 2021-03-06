// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2014-03',
            Food: 2666,
            Drink: null,
            Combo: 2647,
            FastFood: 2533,
            Dessert:2004
        }, {
            period: '2014-06',
            Food: 2778,
            Drink: 2294,
            Combo: 2441,
            FastFood: 1333,
            Dessert:934
        }, {
            period: '2014-09',
            Food: 4912,
            Drink: 1969,
            Combo: 2501,
            FastFood: 2333,
            Dessert:2134
        }, {
            period: '2014-12',
            Food: 3767,
            Drink: 3597,
            Combo: 5689,
            FastFood: 2033,
            Dessert:2674
        }, {
            period: '2015-03',
            Food: 6810,
            Drink: 1914,
            Combo: 2293,
            FastFood: 2563,
            Dessert:1234
        }, {
            period: '2015-06',
            Food: 5670,
            Drink: 4293,
            Combo: 1881,
            FastFood: 2543,
            Dessert:2335
        }, {
            period: '2015-09',
            Food: 4820,
            Drink: 3795,
            Combo: 1588,
            FastFood: 2199,
            Dessert:2000
        }, {
            period: '2015-12',
            Food: 15073,
            Drink: 5967,
            Combo: 5175,
            FastFood: 2345,
            Dessert:2134
        }, {
            period: '2016-03',
            Food: 10687,
            Drink: 4460,
            Combo: 2028,
            FastFood: 2563,
            Dessert:2555
        }, {
            period: '2016-06',
            Food: 8432,
            Drink: 5713,
            Combo: 1791,
            FastFood: 3000,
            Dessert:2634
        }],
        xkey: 'period',
        ykeys: ['Food', 'Drink', 'Combo', 'FastFood', 'Dessert'],
        labels: ['Food', 'Drink', 'Combo', 'FastFood', 'Dessert'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Food",
            value: 40
        }, {
            label: "Drink",
            value: 20
        },{
            label: "Dessert",
            value: 15
        },{
            label: "Fast Food",
            value: 10
        },{
            label: "Combo Set",
            value: 5
        }],
        resize: true
    });

    // // Line Chart
    // Morris.Line({
    //     // ID of the element in which to draw the chart.
    //     element: 'morris-line-chart',
    //     // Chart data records -- each entry in this array corresponds to a point on
    //     // the chart.
    //     data: [{
    //         d: '2012-10-01',
    //         visits: 802
    //     }, {
    //         d: '2012-10-02',
    //         visits: 783
    //     }, {
    //         d: '2012-10-03',
    //         visits: 820
    //     }, {
    //         d: '2012-10-04',
    //         visits: 839
    //     }, {
    //         d: '2012-10-05',
    //         visits: 792
    //     }, {
    //         d: '2012-10-06',
    //         visits: 859
    //     }, {
    //         d: '2012-10-07',
    //         visits: 790
    //     }, {
    //         d: '2012-10-08',
    //         visits: 1680
    //     }, {
    //         d: '2012-10-09',
    //         visits: 1592
    //     }, {
    //         d: '2012-10-10',
    //         visits: 1420
    //     }, {
    //         d: '2012-10-11',
    //         visits: 882
    //     }, {
    //         d: '2012-10-12',
    //         visits: 889
    //     }, {
    //         d: '2012-10-13',
    //         visits: 819
    //     }, {
    //         d: '2012-10-14',
    //         visits: 849
    //     }, {
    //         d: '2012-10-15',
    //         visits: 870
    //     }, {
    //         d: '2012-10-16',
    //         visits: 1063
    //     }, {
    //         d: '2012-10-17',
    //         visits: 1192
    //     }, {
    //         d: '2012-10-18',
    //         visits: 1224
    //     }, {
    //         d: '2012-10-19',
    //         visits: 1329
    //     }, {
    //         d: '2012-10-20',
    //         visits: 1329
    //     }, {
    //         d: '2012-10-21',
    //         visits: 1239
    //     }, {
    //         d: '2012-10-22',
    //         visits: 1190
    //     }, {
    //         d: '2012-10-23',
    //         visits: 1312
    //     }, {
    //         d: '2012-10-24',
    //         visits: 1293
    //     }, {
    //         d: '2012-10-25',
    //         visits: 1283
    //     }, {
    //         d: '2012-10-26',
    //         visits: 1248
    //     }, {
    //         d: '2012-10-27',
    //         visits: 1323
    //     }, {
    //         d: '2012-10-28',
    //         visits: 1390
    //     }, {
    //         d: '2012-10-29',
    //         visits: 1420
    //     }, {
    //         d: '2012-10-30',
    //         visits: 1529
    //     }, {
    //         d: '2012-10-31',
    //         visits: 1892
    //     }, ],
    //     // The name of the data record attribute that contains x-visitss.
    //     xkey: 'd',
    //     // A list of names of data record attributes that contain y-visitss.
    //     ykeys: ['visits'],
    //     // Labels for the ykeys -- will be displayed when you hover over the
    //     // chart.
    //     labels: ['Visits'],
    //     // Disables line smoothing
    //     smooth: false,
    //     resize: true
    // });

    // Bar Chart
    // Morris.Bar({
    //     element: 'morris-bar-chart',
    //     data: [{
    //         device: 'iPhone',
    //         geekbench: 136
    //     }, {
    //         device: 'iPhone 3G',
    //         geekbench: 137
    //     }, {
    //         device: 'iPhone 3GS',
    //         geekbench: 275
    //     }, {
    //         device: 'iPhone 4',
    //         geekbench: 380
    //     }, {
    //         device: 'iPhone 4S',
    //         geekbench: 655
    //     }, {
    //         device: 'iPhone 5',
    //         geekbench: 1571
    //     }],
    //     xkey: 'device',
    //     ykeys: ['geekbench'],
    //     labels: ['Geekbench'],
    //     barRatio: 0.4,
    //     xLabelAngle: 35,
    //     hideHover: 'auto',
    //     resize: true
    // });


});
