function load_data(this_filename) {

     d3.csv(this_filename, function(data) {
        data.forEach(function(d) {
                d.adjective_score = +d.adjective_score;
        });
        update_color(data);
        add_information(data);

        this_dataset = data;

     })
};

function update_color(district_data) {
    var svg = d3.selectAll("svg");
    this_path = svg.selectAll("path");


    this_path.style('fill', function(d,i) {
        return coloring(d);});

    function coloring(d) {
    var new_data = district_data.filter(function(thisData) {
      return ((thisData.District == d.properties.district)  && (thisData.Category == sector_input));
    })

    if(new_data.length>0) {

      var this_color = new_data[0].color;
      this_color = d3.rgb(this_color);
      return this_color;
    } else {
      return "white";
    }
    
  }

};

function add_information(district_data) {
    var svg = d3.selectAll("svg");

    var linkText = svg.selectAll("linkText");

    this_path = svg.selectAll("path");

    this_path.on("mouseover", function(d) {
      var new_data = district_data.filter(function(thisData) {
          return ((thisData.District == d.properties.district)  && (thisData.Category == sector_input));
      })
      if(new_data.length>0) {
      $( "#sentence" ).val("Important sentence: " + new_data[0].important_phrase);
      $( "#district" ).val("District: " + new_data[0].District + ". Click on the map for the original report.");
      d3.select(this) 
            .on("click", function() { window.open(new_data[0].link_URL); })
            .style("cursor", "pointer");
      }

    })
    .on("mouseout", function(d, i) {
            $( "#sentence" ).val("");
            $( "#district" ).val("");
            d3.select(this) 
            .on("click", function() {  })
            .style("cursor", "default");

            });

}


function draw_map(map_file) {

var width = 1000,
    height = 500;


d3.selectAll("svg").remove();

var svg = d3.select("em").append("svg")
    .attr("width", width)
    .attr("height", height);

  var projection = d3.geoAlbers();
  var path = d3.geoPath();

d3.json(map_file, function(error, mapData) {

  svg.selectAll('path').data(mapData.features).enter().append('path')
      .attr("d", path.projection(projection))
      .attr("opacity","1")
      .attr("stroke","black")
      .attr("stroke-width","0.2")
      .style("fill","grey")
      .each( function(d, i){naming(d)});

    function naming(d) {

    this_centroid = d3.geoPath().projection(projection).centroid(d);


    //check for San Francisco
    if(this_centroid[1]>0) {
    svg.append('text')
      .attr("x",this_centroid[0]-20)
      .attr("y",this_centroid[1])
      .text(d.properties.district)
      .attr("fill","darkgreen")
      .attr("font-size","13px");

    } else {
      svg.append('text')
      .attr("x",this_centroid[0]+10)
      .attr("y",this_centroid[1]+250)
      .text(d.properties.district)
      .attr("fill","darkgreen")
      .attr("font-size","13px");
    }
    }

  })
}

