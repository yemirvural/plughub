

const stations = [];
fetch('./electric-vehicle-charging-stations.json')
    .then(el => el.json())
    .then(data => stations.push(...data));

console.log(stations);
