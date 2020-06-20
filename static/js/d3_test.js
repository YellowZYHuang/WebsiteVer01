// Test connect Elasticsearch
var request = new XMLHttpRequest()

request.open('GET', 'http://127.0.0.1:8888/search/invoices2020/m01/?limit=6000', true)

request.onload = function() {
    var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data['results'])
  } else {
    console.log("error")
  }
}

// Send request
request.send()

if (group.includes("Manager")) {

    var idD3 = 'd3_4';
    var dataD3 = [
        {'日期': '20190101', '金額': 10000},
        {'日期': '20190102', '金額': 1560},
        {'日期': '20190103', '金額': 6856},
        {'日期': '20190104', '金額': 10000},
        {'日期': '20190105', '金額': 10000},
        {'日期': '20190106', '金額': 12421},
        {'日期': '20190107', '金額': 10000},
        {'日期': '20190108', '金額': 10000},
        {'日期': '20190109', '金額': 45747},
        {'日期': '20190110', '金額': 10000},
        {'日期': '20190111', '金額': 10412},
        {'日期': '20190112', '金額': 10000},
        {'日期': '20190113', '金額': 14350},
        {'日期': '20190114', '金額': 10000},
        {'日期': '20190115', '金額': 10000},
        {'日期': '20190116', '金額': 1300},
        {'日期': '20190117', '金額': 1021},
        {'日期': '20190118', '金額': 35345},
        {'日期': '20190119', '金額': 10000},
        {'日期': '20190120', '金額': 1400},
        {'日期': '20190121', '金額': 10000},
        {'日期': '20190122', '金額': 11230},
        {'日期': '20190123', '金額': 121},
        {'日期': '20190124', '金額': 7546},
        {'日期': '20190125', '金額': 180},
        {'日期': '20190126', '金額': 10000},
        {'日期': '20190127', '金額': 10000},
        {'日期': '20190128', '金額': 10},
        {'日期': '20190129', '金額': 10000},
        {'日期': '20190130', '金額': 12},
        {'日期': '20190131', '金額': 0},
        {'日期': '20190201', '金額': 10000},
        {'日期': '20190202', '金額': 1560},
        {'日期': '20190203', '金額': 6856},
        {'日期': '20190204', '金額': 10000},
        {'日期': '20190205', '金額': 10000},
        {'日期': '20190206', '金額': 12421},
        {'日期': '20190207', '金額': 10000},
        {'日期': '20190208', '金額': 10000},
        {'日期': '20190209', '金額': 45747},
        {'日期': '20190210', '金額': 10000},
        {'日期': '20190211', '金額': 10412},
        {'日期': '20190212', '金額': 10000},
        {'日期': '20190213', '金額': 14350},
        {'日期': '20190214', '金額': 10000},
        {'日期': '20190215', '金額': 10000},
        {'日期': '20190216', '金額': 1300},
        {'日期': '20190217', '金額': 1021},
        {'日期': '20190218', '金額': 35345},
        {'日期': '20190219', '金額': 10000},
        {'日期': '20190220', '金額': 1400},
        {'日期': '20190221', '金額': 10000},
        {'日期': '20190222', '金額': 11230},
        {'日期': '20190223', '金額': 121},
        {'日期': '20190224', '金額': 7546},
        {'日期': '20190225', '金額': 180},
        {'日期': '20190226', '金額': 10000},
        {'日期': '20190227', '金額': 10000},
        {'日期': '20190228', '金額': 10},
        {'日期': '20190301', '金額': 10000},
        {'日期': '20190302', '金額': 1560},
        {'日期': '20190303', '金額': 6856},
        {'日期': '20190304', '金額': 10000},
        {'日期': '20190305', '金額': 10000},
        {'日期': '20190306', '金額': 12421},
        {'日期': '20190307', '金額': 10000},
        {'日期': '20190308', '金額': 10000},
        {'日期': '20190309', '金額': 45747},
        {'日期': '20190310', '金額': 10000},
        {'日期': '20190311', '金額': 10412},
        {'日期': '20190312', '金額': 10000},
        {'日期': '20190313', '金額': 14350},
        {'日期': '20190314', '金額': 10000},
        {'日期': '20190315', '金額': 10000},
        {'日期': '20190316', '金額': 1300},
        {'日期': '20190317', '金額': 1021},
        {'日期': '20190318', '金額': 35345},
        {'日期': '20190319', '金額': 10000},
        {'日期': '20190320', '金額': 1400},
        {'日期': '20190321', '金額': 10000},
        {'日期': '20190322', '金額': 11230},
        {'日期': '20190323', '金額': 121},
        {'日期': '20190324', '金額': 7546},
        {'日期': '20190325', '金額': 180},
        {'日期': '20190326', '金額': 10000},
        {'日期': '20190327', '金額': 10000},
        {'日期': '20190328', '金額': 10},
        {'日期': '20190329', '金額': 10000},
        {'日期': '20190330', '金額': 12},
        {'日期': '20190331', '金額': 0},
    ]
    zoomableLineGraphD3('伸縮折線圖', dataD3, idD3, true, false);

    function zoomableLineGraphD3(title, dataD3, idD3, legendOrNot, percentOrNot) {
        d3.selectAll('#' + idD3 + ' > *')
            .remove();

        var divHeight = 1 * 500;
        var divWidth = 1.6118 * 500;
        d3.select('#' + idD3)
            .style({
                'display': 'block',
                'width': divWidth + 'px',
                'height': divHeight + 'px',
                'box-shadow': '0px 0px 9px black'
            });
        var idSvg = 'svg';
        var svg = d3.select('#' + idD3)
            .append('svg')
            .attr({
                'id': idSvg,
                'width': '100%',
                'height': '100%',
                'transform': 'translate(0,0)',
                'viewBox': '0 0 ' + divWidth + ' ' + divHeight,
            });

        if (dataD3.length == 0) {
            svg.append('text')
                .text('No Data')
                .attr({'x': '50%', 'y': '50%'})
                .style({
                    'font-size': '36pt',
                    'font-family': 'Microsoft JhengHei',
                    'text-anchor': 'middle',
                    'dominant-baseline': 'middle',
                    'fill': '#f75000',
                    'stroke': '#f75000'
                });
        } else {
            var design = {
                title: {
                    fontSize: 18,
                    fontFamily: 'Microsoft JhengHei',
                    textAnchor: 'middle',
                    fill: '#f75000',
                    stroke: '#f75000'
                },
                image: {
                    domain: {x: true, y: {left: true, right: true}},
                    axis: {
                        x: {
                            format: '%Y%m%d',
                            fontSize: 12,
                            fontFamily: 'Microsoft JhengHei',
                            textAnchor: 'start',
                            fill: '#f75000',
                            stroke: '#f75000',
                            tick: {
                                fontSize: 9,
                                fontFamily: 'Microsoft JhengHei',
                                textAnchor: 'center',
                                fill: '#f75000',
                                stroke: '#f75000'
                            }
                        },
                        y: {
                            fontSize: 12,
                            fontFamily: 'Microsoft JhengHei',
                            textAnchor: 'end',
                            fill: '#f75000',
                            stroke: '#f75000',
                            tick: {
                                fontSize: 9,
                                fontFamily: 'Microsoft JhengHei',
                                textAnchor: 'end',
                                fill: '#000000',
                                stroke: '#000000',
                                format: null
                            },
                        },
                    },
                    area: {fill: 'blue', opacity: 0.9},
                    brush: {stroke: '#ffffff', fillOpacity: 0.25, shapeRendering: 'geometricPrecision'},
                    circle: {radius: 10, fill: '#000000', opacity: 0.5}
                },
                //     legend: {
                //         text: { fontSize: '8pt', fontFamily: 'Microsoft JhengHei', textAnchor: 'end', fill: '#f75000', stroke: '#f75000' },
                //         rect: { width: 18, height: 18 }
                //     },
                tooltip: {
                    border: '1px solid darkgray',
                    opacity: 0.8,
                    backgroundColor: 'white',
                    padding: '0px 3px',
                    fontFamily: 'Microsoft JhengHei',
                    fontSize: '100%',
                    format: null
                }
            };
            design.image.axis.y.tick.format = percentOrNot ? '.1%' : ',s';
            design.tooltip.format = percentOrNot ? '.1%' : ',.1f';

            var div = document.getElementById(idD3);
            if (title) {
                var margin = {
                    upper: {top: 100, bottom: divHeight * 0.2, left: 50, right: 50,},
                    lower: {top: divHeight * 0.85, bottom: 50, left: 50, right: 50,}
                };
            } else {
                var margin = {
                    upper: {top: 50, bottom: divHeight * 0.2, left: 50, right: 50,},
                    lower: {top: divHeight * 0.85, bottom: 50, left: 50, right: 50,}
                };
            }
            var width = div.offsetWidth - margin.upper.left - margin.upper.right,
                height = {
                    upper: div.offsetHeight - margin.upper.top - margin.upper.bottom,
                    lower: div.offsetHeight - margin.lower.top - margin.lower.bottom
                };
            var xType = Object.keys(dataD3[0])[0],
                yType = Object.keys(dataD3[0])[1];

            var parseDate = d3.time.format(design.image.axis.x.format).parse;
            dataD3.forEach(function (d) {
                d[xType] = parseDate(d[xType]);
                d[yType] = +d[yType];
            });

            svg.append('defs')
                .append('clipPath')
                .attr('id', 'clip')
                .append('rect')
                .attr({
                    'width': width,
                    'height': height.upper
                });

            var chartUpperMajor = svg.append('g')
                .attr('transform', 'translate(' + margin.upper.left + ',' + margin.upper.top + ')');
            var chartUpperMinor = svg.append('g')
                .attr('transform', 'translate(' + margin.upper.left + ',' + margin.upper.top + ')');

            if (title) {
                chartUpperMajor.append('text')
                    .text(title)
                    .attr({
                        'x': width / 2,
                        'y': -35,
                    })
                    .style({
                        'font-size': design.title.fontSize + 'pt',
                        'font-family': design.title.fontFamily,
                        'text-anchor': design.title.textAnchor,
                        'fill': design.title.fill,
                        'stroke': design.title.stroke
                    });
            }
            var xMin = d3.min(dataD3, function (d) {
                    return d[xType];
                }),
                xMax = d3.max(dataD3, function (d) {
                    return d[xType];
                }),
                crossDay = (xMax - xMin) / 1000 / 60 / 60 / 24;
            var xScaleUpper = d3.time.scale()
                .domain(d3.extent(dataD3.map(function (d) {
                    return d[xType];
                })))
                .range([0, width]);
            var xAxisUpper = d3.svg.axis()
                .scale(xScaleUpper)
                .orient('bottom')
                .innerTickSize(2.5)
                .outerTickSize(0)
                .tickPadding(5)
                .tickFormat(d3.time.format.multi([
                    ['%Y %b', function (d) {
                        return d.getMonth() == 0 && d.getDate() == 1;
                    }],
                    ['%b', function (d) {
                        return d.getDate() == 1;
                    }],
                    ['%b %d', function () {
                        return true;
                    }]
                ]));
            if (crossDay <= 30) {
            } else if (crossDay <= 60) {
                xAxisUpper.ticks(d3.time.sunday)
            } else if (crossDay <= 183) {
                xAxisUpper.ticks(d3.time.sunday, 2);
            } else if (crossDay <= 365) {
                xAxisUpper.ticks(d3.time.month);
            } else {
                xAxisUpper.ticks(d3.time.month, 2);
            }
            chartUpperMajor.append('g')
                .call(xAxisUpper)
                .attr({
                    'class': 'x axis',
                    'transform': 'translate(0,' + height.upper + ')',
                    'stroke': design.image.axis.x.tick.stroke
                });
            if (!design.image.domain.x) {
                chartUpperMajor.select('.x.axis > .domain').remove();
            }
            chartUpperMajor.selectAll('.x.axis .tick text')
                .style({
                    'font-size': design.image.axis.x.tick.fontSize,
                    'font-family': design.image.axis.x.tick.fontFamily,
                    'text-anchor': design.image.axis.x.tick.textAnchor,
                    'fill': design.image.axis.x.tick.fill,
                    'stroke': design.image.axis.x.tick.stroke
                });
            chartUpperMajor.select('.x.axis')
                .append('text')
                .text(xType)
                .attr({'dx': width + 20, 'dy': '1.5em'})
                .style({
                    'font-size': design.image.axis.x.fontSize,
                    'font-family': design.image.axis.x.fontFamily,
                    'text-anchor': design.image.axis.x.textAnchor,
                    'fill': design.image.axis.x.fill,
                    'stroke': design.image.axis.x.stroke
                });

            var yMin = 0, yMax = d3.max(dataD3, function (d) {
                return d[yType];
            });
            var yScaleUpper = d3.scale.linear()
                .domain([yMin, yMax])
                .range([height.upper, 0]);
            var yAxisUpper = d3.svg.axis()
                .scale(yScaleUpper)
                .orient('left')
                .innerTickSize(-width)
                .outerTickSize(0)
                .tickPadding(5)
                .tickFormat(d3.format(design.image.axis.y.tick.format));
            chartUpperMajor.append('g')
                .call(yAxisUpper)
                .attr({
                    'id': 'y_axis_zoomableLineGraph_upper',
                    'transform': 'translate(0,0)',
                    'stroke': design.image.axis.y.stroke
                });
            chartUpperMajor.selectAll('#y_axis_zoomableLineGraph_upper .tick text')
                .style({
                    'font-size': design.image.axis.y.tick.fontSize,
                    'font-family': design.image.axis.y.tick.fontFamily,
                    'text-anchor': design.image.axis.y.tick.textAnchor,
                    'fill': design.image.axis.y.tick.fill,
                    'stroke': design.image.axis.y.tick.stroke
                });
            chartUpperMajor.select('#y_axis_zoomableLineGraph')
                .append('text')
                .text(yType)
                .attr({'dx': '0em', 'dy': '-2.5em'})
                .style({
                    'font-size': design.image.axis.y.fontSize,
                    'font-family': design.image.axis.y.fontFamily,
                    'text-anchor': design.image.axis.y.textAnchor,
                    'fill': design.image.axis.y.fill,
                    'stroke': design.image.axis.y.stroke
                });

            var areaUpper = d3.svg.area()
                .x(function (d) {
                    return xScaleUpper(d[xType]);
                })
                .y0(height.upper)
                .y1(function (d) {
                    return yScaleUpper(d[yType]);
                })
                .interpolate('linear');
            chartUpperMajor.append('path')
                .datum(dataD3)
                .attr({'class': 'area', 'd': areaUpper});

            var chartLower = svg.append('g')
                .attr('transform', 'translate(' + margin.lower.left + ',' + margin.lower.top + ')');
            var xScaleLower = d3.time.scale()
                .domain(xScaleUpper.domain())
                .range([0, width]);
            var xAxisLower = d3.svg.axis()
                .scale(xScaleLower)
                .orient('bottom')
                .innerTickSize(0)
                .outerTickSize(0)
                .tickPadding(2.5)
                .tickFormat(d3.time.format.multi([
                    ['%Y %b', function (d) {
                        return d.getMonth() == 0 && d.getDate() == 1;
                    }],
                    ['%b', function (d) {
                        return d.getDate() == 1;
                    }],
                    ['%b %d', function () {
                        return true;
                    }]
                ]));
            if (crossDay <= 30) {
            } else if (crossDay <= 60) {
                xAxisUpper.ticks(d3.time.sunday)
            } else if (crossDay <= 183) {
                xAxisUpper.ticks(d3.time.sunday, 2);
            } else if (crossDay <= 365) {
                xAxisUpper.ticks(d3.time.month);
            } else {
                xAxisUpper.ticks(d3.time.month, 2);
            }
            chartLower.append('g')
                .call(xAxisLower)
                .attr({
                    'class': 'x axis',
                    'transform': 'translate(0,' + height.lower + ')',
                    'stroke': design.image.axis.x.tick.stroke
                });
            if (!design.image.domain.x) {
                chartUpperMajor.select('.x.axis > .domain').remove();
                chartLower.select('.x.axis > .domain').remove();
            }
            chartLower.selectAll('.x.axis .tick text')
                .style({
                    'font-size': design.image.axis.x.tick.fontSize * 4 / 5,
                    'font-family': design.image.axis.x.tick.fontFamily,
                    'text-anchor': design.image.axis.x.tick.textAnchor,
                    'fill': design.image.axis.x.tick.fill,
                    'stroke': design.image.axis.x.tick.stroke
                });
            var yScaleLower = d3.scale.linear()
                .domain(yScaleUpper.domain())
                .range([height.lower, 0]);
            var yAxisLower = d3.svg.axis()
                .scale(yScaleLower)
                .orient('left')
                .innerTickSize(0)
                .outerTickSize(0)
                .tickPadding(0);
            chartLower.append('g')
                .call(yAxisLower)
                .attr({
                    'id': 'y_axis_zoomableLineGraph_lower',
                    'transform': 'translate(0,0)',
                    'stroke': design.image.axis.y.stroke
                });
            if (!design.image.domain.y) {
                chartUpperMajor.select('#y_axis_zoomableLineGraph_upper > .domain').remove();
                chartLower.select('#y_axis_zoomableLineGraph_lower > .domain').remove();
            }
            chartLower.selectAll('#y_axis_zoomableLineGraph_lower .tick text')
                .remove();

            var areaLower = d3.svg.area()
                .x(function (d) {
                    return xScaleLower(d[xType]);
                })
                .y0(height.lower)
                .y1(function (d) {
                    return yScaleLower(d[yType]);
                })
                .interpolate('linear');
            chartLower.append('path')
                .datum(dataD3)
                .attr({'class': 'area', 'd': areaLower});

            d3.selectAll('.area')
                .style({
                    'fill': design.image.area.fill,
                    'fill-opacity': design.image.area.opacity,
                    'clip-path': 'url(#clip)'
                });

            var brush = d3.svg.brush()
                .x(xScaleLower)
                .on('brush', brushed);
            chartLower.append('g')
                .attr('class', 'x brush')
                .call(brush)
                .selectAll('rect')
                .attr({'y': 0, 'height': height.lower});
            d3.selectAll('.brush .extent')
                .style({
                    'stroke': design.image.brush.stroke,
                    'fill-opacity': design.image.brush.fillOpacity,
                    'shape-rendering': design.image.brush.shape_rendering
                });

            var zoomA = 0, zoomB = 1;
            drawBrush(zoomA, zoomB);
            window.setTimeout(function () {
                var zoomA = 0.25;
                var zoomB = 0.75;
                drawBrush(zoomA, zoomB);
            }, 1000);

            function drawBrush(a, b) {
                var x0 = xScaleLower.invert(a * width);
                var x1 = xScaleLower.invert(b * width);
                brush.extent([x0, x1]);
                brush(d3.select('.brush').transition().duration(100));
                brush.event(d3.select('.brush').transition().duration(100));
            }

            function brushed() {
                xScaleUpper.domain(brush.empty() ? xScaleLower.domain() : brush.extent());
                chartUpperMajor.select('.area')
                    .attr('d', areaUpper);
                chartUpperMajor.selectAll('.x.axis')
                    .call(xAxisUpper)
                    .selectAll('.tick text')
                    .style({
                        'font-size': design.image.axis.x.tick.fontSize,
                        'font-family': design.image.axis.x.tick.fontFamily,
                        'text-anchor': design.image.axis.x.tick.textAnchor,
                        'fill': design.image.axis.x.tick.fill,
                        'stroke': design.image.axis.x.tick.stroke
                    });
                chartUpperMinor.selectAll('*').remove();
                dataD3.forEach(function (d) {
                    chartUpperMinor.datum(d)
                        .append('circle')
                        .attr({
                            'cx': xScaleUpper(d[xType]),
                            'cy': yScaleUpper(d[yType]),
                            'r': design.image.circle.radius,
                            'fill': design.image.circle.fill,
                            'opacity': 0
                        })
                        .on('mouseover', function (d) {
                            d3.select(this)
                                .attr('opacity', design.image.circle.opacity);
                            d3.select('body')
                                .append('div')
                                .style({
                                    'width': 'auto',
                                    'height': 'auto',
                                    'border': design.tooltip.border,
                                    'opacity': design.tooltip.opacity,
                                    'background-color': design.tooltip.backgroundColor,
                                    'padding': design.tooltip.padding,
                                    'font-family': design.tooltip.fontFamily,
                                    'font-size': design.tooltip.fontSize,
                                    'position': 'absolute',
                                    'left': (d3.event.pageX + 10) + 'px',
                                    'top': (d3.event.pageY - 10) + 'px'
                                })
                                .attr('class', 'tooltip')
                                .html(
                                    xType + ':' + d3.time.format('%Y/%m/%d')(d[xType]) + '<br>' +
                                    yType + ':' + d3.format(design.tooltip.format)(d[yType])
                                );
                        })
                        .on('mouseout', function () {
                            chartUpperMinor.selectAll('circle')
                                .attr('opacity', 0);
                            d3.selectAll('.tooltip').remove();
                        });
                });
            }
        }

        var divHeight = document.documentElement.clientHeight * 0.8;
        var divWidth = document.documentElement.clientWidth * 0.8;
        var goldenRatio = divWidth / divHeight;
        if (goldenRatio > 1.6118) {
            divWidth = divHeight * 1.6118;
        } else {
            divHeight = divWidth / 1.6118;
        }
        d3.select('#' + idD3)
            .style({
                'width': divWidth + 'px',
                'height': divHeight + 'px',
            });
        return idSvg;
    }


    function autodivheight() {
        var winHeight = 0;
        if (window.innerHeight)
            winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
        if (document.documentElement && document.documentElement.clientHeight)
            winHeight = document.documentElement.clientHeight * 0.8;
        var winWidth = 0;
        if (window.innerWidth)
            winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
        if (document.documentElement && document.documentElement.clientWidth)
            winWidth = document.documentElement.clientWidth * 0.8;

        var goldenRatio = winWidth / winHeight;
        if (goldenRatio > 1.6118) {
            winWidth = winHeight * 1.6118;
        } else {
            winHeight = winWidth / 1.6118;
        }
        document.getElementById('d3_4').style.height = winHeight + 'px';
        document.getElementById('d3_4').style.width = winWidth + 'px';
    }

}

if (group.includes("Customer") || group.includes("Supplier")) {

    var idD3 = 'd3_15';
    dataD3 = [
        {'體系別_x': '012', '體系別_y': '012', '家數': 20},
        {'體系別_x': '012', '體系別_y': '345', '家數': 44},
        {'體系別_x': '012', '體系別_y': '678', '家數': 0},
        {'體系別_x': '012', '體系別_y': '901', '家數': 33},
        {'體系別_x': '012', '體系別_y': '234', '家數': 2},
        {'體系別_x': '345', '體系別_y': '012', '家數': 6},
        {'體系別_x': '345', '體系別_y': '345', '家數': 1122},
        {'體系別_x': '345', '體系別_y': '678', '家數': 0},
        {'體系別_x': '345', '體系別_y': '901', '家數': 0},
        {'體系別_x': '345', '體系別_y': '234', '家數': 33},
        {'體系別_x': '678', '體系別_y': '012', '家數': 5},
        {'體系別_x': '678', '體系別_y': '345', '家數': 8},
        {'體系別_x': '678', '體系別_y': '678', '家數': 44},
        {'體系別_x': '678', '體系別_y': '901', '家數': 0},
        {'體系別_x': '678', '體系別_y': '234', '家數': 12},
        {'體系別_x': '901', '體系別_y': '012', '家數': 22},
        {'體系別_x': '901', '體系別_y': '345', '家數': 33},
        {'體系別_x': '901', '體系別_y': '678', '家數': 102},
        {'體系別_x': '901', '體系別_y': '901', '家數': 33},
        {'體系別_x': '901', '體系別_y': '234', '家數': 0},
        {'體系別_x': '234', '體系別_y': '012', '家數': 2},
        {'體系別_x': '234', '體系別_y': '345', '家數': 0},
        {'體系別_x': '234', '體系別_y': '678', '家數': 8},
        {'體系別_x': '234', '體系別_y': '901', '家數': 2},
        {'體系別_x': '234', '體系別_y': '234', '家數': 0}
    ]
    heatmapChartD3('熱點圖', dataD3, idD3, true, false);

    function heatmapChartD3(title, dataD3, idD3, legendOrNot, percentOrNot) {
        d3.selectAll('#' + idD3 + ' > *')
            .remove();
        var divHeight = 1 * 500;
        var divWidth = 1.6118 * 500;
        d3.select('#' + idD3)
            .style({
                'display': 'block',
                'width': divWidth + 'px',
                'height': divHeight + 'px',
                'box-shadow': '0px 0px 9px black'
            });
        var idSvg = 'svg';
        var svg = d3.select('#' + idD3)
            .append('svg')
            .attr({
                'id': idSvg,
                'width': '100%',
                'height': '100%',
                'transform': 'translate(0,0)',
                'viewBox': '0 0 ' + divWidth + ' ' + divHeight
            });

        if (dataD3.length == 0) {
            svg.append('text')
                .text('No Data')
                .attr({'x': '50%', 'y': '50%'})
                .style({
                    'font-size': '36pt',
                    'font-family': 'Microsoft JhengHei',
                    'text-anchor': 'middle',
                    'dominant-baseline': 'middle',
                    'fill': '#f75000',
                    'stroke': '#f75000'
                });
        } else {
            var design = {
                title: {
                    fontSize: 18,
                    fontFamily: 'Microsoft JhengHei',
                    textAnchor: 'middle',
                    fill: '#f75000',
                    stroke: '#f75000'
                },
                image: {
                    axis: {
                        x: {
                            fontSize: 12,
                            fontFamily: 'Microsoft JhengHei',
                            textAnchor: 'middle',
                            fill: '#f75000',
                            stroke: '#f75000',
                        },
                        y: {
                            fontSize: 12,
                            fontFamily: 'Microsoft JhengHei',
                            textAnchor: 'end',
                            fill: '#f75000',
                            stroke: '#f75000'
                        }
                    },
                    rect: {
                        width: null, height: null, rx: 4, ry: 4,
                        fill: ['#f7fbff', '#e3eef9', '#d0e2f2', '#b7d5ea', '#96c5e0', '#70b0d6', '#4f9acb', '#3282bd', '#1b68ae', '#0b4f96', '#083573'],
                        stroke: '#E6E6E6',
                        strokeWidth: 2
                    },
                    text: {format: null, textAnchor: 'middle', fill: 'red', stroke: 'red'}
                },
                legend: {
                    text: {
                        format: null,
                        fontSize: 8,
                        fontFamily: 'Microsoft JhengHei',
                        textAnchor: 'end',
                        fill: '#f75000',
                        stroke: '#f75000'
                    },
                    rect: {width: null, height: null}
                },
                tooltip: {
                    border: '1px solid darkgray',
                    opacity: 0.8,
                    backgroundColor: 'white',
                    padding: '0px 3px',
                    fontFamily: 'Microsoft JhengHei',
                    fontSize: '100%',
                    format: null
                }
            };
            design.image.text.format = percentOrNot ? '%' : ',';
            design.legend.text.format = percentOrNot ? '%' : ',.0f';
            design.tooltip.format = percentOrNot ? '%' : ',';

            var div = document.getElementById(idD3);
            if (title) {
                var margin = {top: 100, bottom: 100, left: 50, right: 50};
            } else {
                var margin = {top: 50, bottom: 100, left: 50, right: 50};
            }
            var width = div.offsetWidth - margin.left - margin.right,
                height = div.offsetHeight - margin.top - margin.bottom;

            var xType = Object.keys(dataD3[0])[0],
                yType = Object.keys(dataD3[0])[1],
                valueType = Object.keys(dataD3[0])[2],
                xTypeValues = [], yTypeValues = [];
            dataD3.forEach(function (d) {
                if (xTypeValues.indexOf(d[xType]) === -1) {
                    xTypeValues.push(d[xType]);
                }
                if (yTypeValues.indexOf(d[yType]) === -1) {
                    yTypeValues.push(d[yType]);
                }
            });
            xTypeValues.length = xTypeValues.length > 10 ? 10 : xTypeValues.length;
            yTypeValues.length = yTypeValues.length > 10 ? 10 : yTypeValues.length;
            var dataD3_new = []
            dataD3.forEach(function (d) {
                if (xTypeValues.indexOf(d[xType]) != -1 & yTypeValues.indexOf(d[yType]) != -1) {
                    d[valueType] = parseFloat(d[valueType]);
                    dataD3_new.push(d);
                }
            })

            design.image.rect.width = width / xTypeValues.length;
            design.image.rect.height = height / yTypeValues.length;
            design.legend.rect.width = width / design.image.rect.fill.length;
            design.legend.rect.height = d3.max([d3.min([25, height / yTypeValues.length / 3]), 25]);

            var chart = svg.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            if (title) {
                chart.append('text')
                    .text(title)
                    .attr({
                        'x': width / 2,
                        'y': -35,
                    })
                    .style({
                        'font-size': design.title.fontSize + 'pt',
                        'font-family': design.title.fontFamily,
                        'text-anchor': design.title.textAnchor,
                        'fill': design.title.fill,
                        'stroke': design.title.stroke
                    });
            }

            chart.selectAll('.xLabel')
                .data(xTypeValues).enter()
                .append('text')
                .text(function (d) {
                    return d;
                })
                .attr({
                    'class': 'xLabel',
                    'x': function (d, i) {
                        return i * design.image.rect.width;
                    },
                    'y': 0,
                    'transform': 'translate(' + design.image.rect.width / 2 + ',' + -design.image.axis.x.fontSize / 2 + ')'
                })
                .style({
                    'font-size': design.image.axis.x.fontSize,
                    'font-family': design.image.axis.x.fontFamily,
                    'text-anchor': design.image.axis.x.textAnchor,
                    'fill': design.image.axis.x.fill,
                    'stroke': design.image.axis.x.stroke
                });

            chart.selectAll('.yLabel')
                .data(yTypeValues).enter()
                .append('text')
                .text(function (d) {
                    return d;
                })
                .attr({
                    'class': 'yLabel',
                    'x': 0,
                    'y': function (d, i) {
                        return i * design.image.rect.height;
                    },
                    'transform': 'translate(-' + design.image.axis.y.fontSize / 2 + ',' + design.image.rect.height / 1.6 + ')'
                })
                .style({
                    'font-size': design.image.axis.y.fontSize,
                    'font-family': design.image.axis.y.fontFamily,
                    'text-anchor': design.image.axis.y.textAnchor,
                    'fill': design.image.axis.y.fill,
                    'stroke': design.image.axis.y.stroke
                });

            var valueTypeMax = d3.max(dataD3_new, function (d) {
                return parseInt(d[valueType]);
            });
            var colorScale = d3.scale.quantile()
                .domain([0, valueTypeMax])
                .range(design.image.rect.fill);

            var cards = chart.selectAll('.rect')
                .data(dataD3_new, function (d) {
                    return d[xType] + ':' + d[yType];
                });
            cards.enter().append('rect')
                .attr({
                    'class': 'rect',
                    'x': function (d) {
                        return xTypeValues.indexOf(d[xType]) * design.image.rect.width;
                    },
                    'y': function (d) {
                        return yTypeValues.indexOf(d[yType]) * design.image.rect.height;
                    },
                    'rx': design.image.rect.rx, 'ry': design.image.rect.ry,
                    'width': design.image.rect.width, 'height': design.image.rect.height
                })
                .style({
                    'fill': design.image.rect.fill[0],
                    'stroke': design.image.rect.stroke,
                    'stroke-width': design.image.rect.strokeWidth
                })
                .transition().duration(1000)
                .style('fill', function (d) {
                    return colorScale(d[valueType]);
                });
            chart.selectAll('.rect')
                .on('mouseover', function (d) {
                    d3.select('body')
                        .append('div')
                        .style({
                            'width': 'auto',
                            'height': 'auto',
                            'border': design.tooltip.border,
                            'opacity': design.tooltip.opacity,
                            'background-color': design.tooltip.backgroundColor,
                            'padding': design.tooltip.padding,
                            'font-family': design.tooltip.fontFamily,
                            'font-size': design.tooltip.fontSize,
                            'position': 'absolute',
                            'left': (d3.event.pageX + 10) + 'px',
                            'top': (d3.event.pageY - 10) + 'px'
                        })
                        .attr('class', 'tooltip')
                        .html(
                            xType + ':' + d[xType] + '<br>' +
                            yType + ':' + d[yType] + '<br>' +
                            valueType + ':' + d3.format(design.tooltip.format)(d[valueType]));
                })
                .on('mouseout', function () {
                    d3.selectAll('.tooltip').remove();
                })
                .on('mousemove', function () {
                    d3.selectAll('.tooltip')
                        .style({
                            'left': (d3.event.pageX + 10) + 'px',
                            'top': (d3.event.pageY - 10) + 'px'
                        });
                });

            cards.enter().append('text')
                .text(function (d) {
                    return d3.format(design.image.text.format)(d[valueType]);
                })
                .attr({
                    'x': function (d) {
                        return xTypeValues.indexOf(d[xType]) * design.image.rect.width + design.image.rect.width / 2;
                    },
                    'y': function (d) {
                        return yTypeValues.indexOf(d[yType]) * design.image.rect.height + design.image.rect.height / 1.6;
                    }
                })
                .style({
                    'fill': design.image.rect.fill[0],
                    'stroke': design.image.rect.fill[0],
                    'text-anchor': design.image.text.textAnchor,
                })
                .transition().duration(1000)
                .style({
                    'fill': design.image.text.fill,
                    'stroke': design.image.text.stroke,
                });

            if (legendOrNot) {
                var legend = chart.selectAll('.legend')
                    .data([0].concat(colorScale.quantiles()), function (d) {
                        return d;
                    });
                legend.enter().append('g')
                    .attr({'class': 'legend'});
                legend.append('rect')
                    .attr({
                        'x': function (d, i) {
                            return design.legend.rect.width * i;
                        },
                        'y': height + design.legend.rect.height,
                        'width': design.legend.rect.width,
                        'height': design.legend.rect.height
                    })
                    .style({
                        'fill': function (d, i) {
                            return design.image.rect.fill[i];
                        }
                    });
                legend.append('text')
                    .text(function (d) {
                        return '≥ ' + d3.format(design.legend.text.format)(d);
                    })
                    .attr({
                        'x': function (d, i) {
                            return design.legend.rect.width * i;
                        },
                        'y': height + design.legend.rect.height * 2.5
                    })
                    .style({
                        'font-size': design.legend.text.fontSize,
                        'font-family': design.legend.text.fontFamily,
                        'font-anchor': design.legend.text.textAnchor,
                        'fill': design.legend.text.fill,
                        'stroke': design.legend.text.stroke
                    })
                legend.exit().remove();
            }
        }

        var divHeight = document.documentElement.clientHeight * 0.8;
        var divWidth = document.documentElement.clientWidth * 0.8;
        var goldenRatio = divWidth / divHeight;
        if (goldenRatio > 1.6118) {
            divWidth = divHeight * 1.6118;
        } else {
            divHeight = divWidth / 1.6118;
        }
        d3.select('#' + idD3)
            .style({
                'width': divWidth + 'px',
                'height': divHeight + 'px',
            });
        return idSvg;
    }

    function autodivheight() {
        var winHeight = 0;
        if (window.innerHeight)
            winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
        if (document.documentElement && document.documentElement.clientHeight)
            winHeight = document.documentElement.clientHeight * 0.8;
        var winWidth = 0;
        if (window.innerWidth)
            winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
        if (document.documentElement && document.documentElement.clientWidth)
            winWidth = document.documentElement.clientWidth * 0.8;

        var goldenRatio = winWidth / winHeight;
        if (goldenRatio > 1.6118) {
            winWidth = winHeight * 1.6118;
        } else {
            winHeight = winWidth / 1.6118;
        }
        document.getElementById('d3_15').style.height = winHeight + 'px';
        document.getElementById('d3_15').style.width = winWidth + 'px';
    }


}