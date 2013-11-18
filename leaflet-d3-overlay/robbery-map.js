var map = new L.Map("map", {center: [44.9833, -93.2667], zoom: 11})
.addLayer(new L.TileLayer("http://{s}.tile.cloudmade.com/1a1b06b230af4efdbb989ea99e9841af/998/256/{z}/{x}/{y}.png"));

var svg = d3.select(map.getPanes().overlayPane).append("svg"),
g = svg.append("g").attr("class", "leaflet-zoom-hide");


d3.json("projects/viz-hack-day/data/robberies-2013-ytd.geojson", function(collection) {
        
        
        
        
        
        function project(x) {
        var point = map.latLngToLayerPoint(new L.LatLng(x[1], x[0]));
        return [point.x, point.y];
        }
        
        var path = d3.geo.path().projection(project);
        
        var feature = g.selectAll("path")
        .data(collection.features)
        .enter().append("path");
        
        //feature.attr("d", path);
        
        
        
        
        map.on("viewreset", reset);
        reset();
        
        // Reposition the SVG to cover the features.
        function reset() {
        var bounds = d3.geo.bounds(collection),
        bottomLeft = project(bounds[0]),
        topRight = project(bounds[1]);
        
        bottomLeft[0] = bottomLeft[0]-50;
        bottomLeft[1] = bottomLeft[1]+50;
        topRight[0] = topRight[0]+50;
        topRight[1] = topRight[1]-50;
        
        svg .attr("width", topRight[0] - bottomLeft[0]+100)
        .attr("height", bottomLeft[1] - topRight[1]+100)
        .style("margin-left", bottomLeft[0] + "px")
        .style("margin-top", topRight[1] + "px");
        
        g   .attr("transform", "translate(" + -bottomLeft[0] + "," + -topRight[1] + ")");
        
        feature.attr("d", path);
        }
        
        
        });