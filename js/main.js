mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 5, // starting zoom
    center: [-100, 40], // starting center
    projection: 'albers'
});

const counts = [5000, 10000, 20000]
colors = ['rgb(208,209,230)', 'rgb(103,169,207)', 'rgb(1,108,89)'],
    radii = [5, 15, 20];

//load data to the map as new layers.
//map.on('load', function loadingData() {
map.on('load', () => { //simplifying the function statement: arrow with brackets to define a function

    // when loading a geojson, there are two steps
    // add a source of the data and then add the layer out of the source
    map.addSource('covid-counts', {
        type: 'geojson',
        data: 'assets/covid-counts-wgs84.geojson'
    });

    map.addLayer({
            'id': 'covid-counts-layer',
            'type': 'circle',
            'source': 'covid-counts',
            // 'minzoom': 5,
            'paint': {
                // increase the radii of the circle as the zoom level and dbh value increases
                'circle-radius': {
                    'property': 'cases',
                    'stops': [
                        [{
                            zoom: 5,
                            value: counts[0]
                        }, radii[0]],
                        [{
                            zoom: 5,
                            value: counts[1]
                        }, radii[1]],
                        [{
                            zoom: 5,
                            value: counts[2]
                        }, radii[2]]
                    ]
                },
                'circle-color': {
                    'property': 'cases',
                    'stops': [
                        [counts[0], colors[0]],
                        [counts[1], colors[1]],
                        [counts[2], colors[2]]
                    ]
                },
                'circle-stroke-color': 'white',
                'circle-stroke-width': 1,
                'circle-opacity': 0.6
            }
        },
        'waterway-label'
    );


    // click on tree to view magnitude in a popup
    map.on('click', 'covid-counts-layer', (event) => {
        new mapboxgl.Popup()
            .setLngLat(event.features[0].geometry.coordinates)
            .setHTML(`<strong>Case Counts:</strong> ${event.features[0].properties.mag}`)
            .addTo(map);
    });

});


// create legend
const legend = document.getElementById('legend');

//set up legend grades and labels
var labels = ['<strong>Case Counts</strong>'],
    vbreak;
//iterate through grades and create a scaled circle and label for each
for (var i = 0; i < counts.length; i++) {
    vbreak = counts[i];
    // you need to manually adjust the radius of each dot on the legend 
    // in order to make sure the legend can be properly referred to the dot on the map.
    dot_radii = 2 * radii[i];
    labels.push(
        '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radii +
        'px; height: ' +
        dot_radii + 'px; "></i> <span class="dot-label" style="top: ' + dot_radii / 2 + 'px;">' + vbreak +
        '</span></p>');

}
const source =
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://www.nytimes.com/interactive/2021/us/covid-cases.html">The New York Times</a></p>';

legend.innerHTML = labels.join('') + source;