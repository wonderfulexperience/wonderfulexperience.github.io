

function load_data(this_filename) {

     d3.csv(this_filename, function(data) {
        data.forEach(function(d) {
                d.adjective_score = +d.adjective_score;
        });

        update_color(data);
        add_information(data);
        
        update_chart();
        
        this_dataset = data;


     })
};

function update_color(district_data) {
    var svg = d3.select("#map");
    this_path = svg.selectAll("path");
    var g = svg.append("g");

    svg.selectAll("g").selectAll('text').attr("fill","transparent");

    this_path.style('fill', function(d,i) {
        return coloring(d);});

    function coloring(d) {
    var new_data = district_data.filter(function(thisData) {
      

      if(level_input == 'National level') {
        return ((thisData.District == "National Summary")  && (thisData.Category == sector_input));
      } 
      else

      {
        return ((thisData.District == d.properties.district)  && (thisData.Category == sector_input));
      }
    })

    if(new_data.length>0) {
      
      var this_color = new_data[0].color;
      this_color = d3.rgb(this_color);
      return this_color;
    } else {
      if(level_input == "National level") {
        g.append('text')
        .attr("x","300")
          .attr("y","200")
        .text("No data available")
        .attr("fill","black")
        .attr("font-size","24px");
      }
      return "url(#mypattern)";

    }
    
  }

};

function add_information(district_data) {

    var svg = d3.select("#map");

    var linkText = svg.selectAll("linkText");

    this_path = svg.selectAll("path");

    this_path.on("mouseover", function(d) {
      var new_data = district_data.filter(function(thisData) {
          if(level_input == 'National level') {
        return ((thisData.District == "National Summary")  && (thisData.Category == sector_input));
      } 
      else

      {
        return ((thisData.District == d.properties.district)  && (thisData.Category == sector_input));
      }
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




function update_naming(district_data) {

    var svg = d3.select("#map");

    if(level_input == 'National level') {
      svg.selectAll('#districts').remove();
      this_path.attr("stroke-width","0").attr("stroke","transparent");
    }
    else {
      svg.selectAll('path')
      .attr("stroke","black")
      .style("fill","grey")
      .attr("stroke-width","0.2")
      .each( function(d, i){naming(d)});

    function naming(d) {

    var projection = d3.geoAlbers();

    this_centroid = d3.geoPath().projection(projection).centroid(d);

    //check for San Francisco
    if(this_centroid[1]>0) {
    svg.append('text')
      .attr("id","districts")
      .attr("x",this_centroid[0]-20)
      .attr("y",this_centroid[1])
      .text(d.properties.district)
      .attr("fill","black")
      .attr("font-size","13px");

    } else {
      svg.append('text')
      .attr("id","districts")
      .attr("x",this_centroid[0]+10)
      .attr("y",this_centroid[1]+250)
      .text(d.properties.district)
      .attr("fill","black")
      .attr("font-size","13px");
    }
    }
  }

}


function draw_map(map_file) {

var width = 1000,
    height = 500;


d3.selectAll("svg").remove();

var svg = d3.select("em").append("svg")
    .attr("id","map")
    .attr("width", width)
    .attr("height", height);

  var projection = d3.geoAlbers();
  var path = d3.geoPath();

svg.append('defs')
.append("pattern")
.attr('id','mypattern')
.attr('width','8')
.attr('height','8')
.attr('patternTransform','rotate(45)')
.attr('patternUnits','userSpaceOnUse')
.append('rect')
.attr('width','8')
.attr('height','3')
.style('fill',"darkgrey");


d3.json(map_file, function(error, mapData) {

  svg.selectAll('path').data(mapData.features).enter().append('path')
      .attr("d", path.projection(projection))
      .attr("opacity","1")
      .attr("stroke","black")
      .style("fill","grey")
      .attr("stroke-width","0.2")
      .each( function(d, i){naming(d)});

    svg.append("rect")
      .attr("x", "120")
      .attr("y", height-120)
      .attr('width','100')
      .attr('height','120')
      .attr("stroke-width", "0.2")
      .attr("stroke","black")
      .style("fill","transparent");

    color_list = []

    var color_list = ['#0571b0','#92c5de','#D3D3D3','#f4a582','#ca0020','url(#mypattern)']
    var attribute_list = ['very positive','positive','neutral','negative','very negative','no data available']

    for(var i = 0;i<6;i++) {
      svg.append("rect")
      .attr("x", "122")
      .attr("y", height-117.5+(i*20))
      .attr('width','15')
      .attr('height','15')
      .attr("stroke-width","0.2")
      .attr("stroke","black")
      .style('fill',color_list[i])

      svg.append("text")
      .attr("id","legend")
      .attr("x", "139")
      .attr("y", height-107.5+(i*20))
      .text(attribute_list[i])
      .style('fill','black')
      .attr("font-size","13px");
    }

})

function naming(d) {

    this_centroid = d3.geoPath().projection(projection).centroid(d);

    //check for San Francisco
    if(this_centroid[1]>0) {
    svg.append('text')
      .attr("id","districts")
      .attr("x",this_centroid[0]-20)
      .attr("y",this_centroid[1])
      .text(d.properties.district)
      .attr("fill","black")
      .attr("font-size","13px");

    } else {
      svg.append('text')
      .attr("id","districts")
      .attr("x",this_centroid[0]+10)
      .attr("y",this_centroid[1]+250)
      .text(d.properties.district)
      .attr("fill","black")
      .attr("font-size","13px");
    }

  }

}

function update_chart() {

  var width = 400;
  var height = 200;

  var padding = 15;
  var padding_left = 100;

  var svg = d3.select('#charts');

  new_chart_data = chart_data




      var max_date = d3.max(new_chart_data, function(d){return d.DATE});

      var min_date = d3.min(new_chart_data, function(d){return d.DATE});

      var xScale = d3.scaleLinear()
                            .domain([min_date, max_date])
                            .range([padding, width-padding]); 
      
      var lowest_value = Math.min(d3.min(new_chart_data, function(d){return d.VALUE}),0);

      var highest_value = Math.max(d3.max(new_chart_data, function(d){return d.VALUE}),0);

      var zero_position = 0;

      if(lowest_value == 0) {
        zero_position = 1;
      } else {
        if(highest_value == 0) {
          zero_position = 0;
        } if(highest_value>0) {
          zero_position = (highest_value) / (highest_value-lowest_value);
        }

        } 

      var yScale = d3.scaleLinear()
                            .domain([lowest_value, highest_value])
                            .range([height-padding, padding]);

      var xAxis = d3.axisBottom(xScale)
                          .tickFormat(d3.timeFormat("%B %Y"))
                          .tickValues(d3.timeYear.every(2).range(min_date, max_date))
                          .tickSizeOuter(0);
            
      var yAxis = d3.axisLeft(yScale)
                          .ticks(5)
                          .tickSizeOuter(0);


      svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (((height-padding)*zero_position)+(padding*(1-zero_position))) + ")")
                .call(xAxis);

      svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate("+padding+",0)")
                .call(yAxis);

      var lineFunction = d3.line()
                .x(function(d) { return xScale(d.DATE); })
                .y(function(d) { return yScale(d.VALUE); });

      svg.append("g").attr("id","chart_layer").append("path")
                .attr("fill", "none")
                .datum(new_chart_data) 
                .attr("class", "line")
                .style("stroke", "black")
                .attr('stroke-width', 0.5)
                .attr('d', lineFunction);

      var chart_text = "";

      if(chart_input=="Growth") {
      chart_text = "Real GDP growth, in %, quarterly data, annualised"}
      if(chart_input=="Inflation")
      {
      chart_text = "Inflation, in %, annual change (Urban Consumer Prices)"
      }
      if(chart_input=="Unemployment") {
      chart_text = "Unemployment, in %"
      }

      svg.append("text")
                .attr("x","60")
                .attr("y","10")
                .text(chart_text)
                .attr("font-family","Garamond")
                .style('fill','black')
                .attr('font-size', "12px");
      
      update_circle();


}

function draw_chart() {
  d3.select('#charts').remove();

  var width = 400;
  var height = 200;
  d3.select('body').append('svg').attr('id','charts').attr('width',width).attr('height',height);

  var new_filename = chart_input + ".csv";
  d3.csv(new_filename, function(new_chart_data) {

        new_chart_data.forEach(function(d) {
                var parseDate = d3.timeParse("%Y-%m-%d");
              // change to a float
                d.DATE = parseDate(d.DATE);
                d.VALUE = +d.VALUE;
        })

      chart_data = new_chart_data;
      
      update_chart();
  })

}

function update_circle() {

  var svg = d3.select('#charts');

  var width = 400;
  var padding_left = 100;
  var height = 200;
  var padding = 15;

      var max_date = d3.max(chart_data, function(d){return d.DATE});

      var min_date = d3.min(chart_data, function(d){return d.DATE});

      var xScale = d3.scaleLinear()
                            .domain([min_date, max_date])
                            .range([padding, width-padding]); 
      
      var lowest_value = Math.min(d3.min(chart_data, function(d){return d.VALUE}),0);

      var highest_value = Math.max(d3.max(chart_data, function(d){return d.VALUE}),0);

      var yScale = d3.scaleLinear()
                            .domain([lowest_value, highest_value])
                            .range([height-padding, padding]);


      var current_date_value = report_dates[$( "#slider-vertical" ).slider( "value" )-1];
      
      var current_month = current_date_value.substring(4,6);

      if(chart_input=='Growth') {
      var quarterly_lookup = {'01':'01','02':'01','03':'01','04':'04','05':'04','06':'04','07':'07','08':'07','09':'07','10':'10','11':'10','12':'10'};
      current_month = quarterly_lookup[current_month];
      }

      var current_date = new Date(current_month+"/01/"+current_date_value.substring(0,4));
      var locale = "en-us";
      var this_month = current_date.toLocaleString(locale, { month: "long" });
      var this_year = current_date.toLocaleString(locale, { year: "numeric" });
      var this_date = this_month + this_year;

      var this_year = current_date.toLocaleString(locale, { year: "numeric" });
      var this_date = this_month + this_year;

      var current_value = chart_data.filter(function(d) {
            path_this_date = (d.DATE.toLocaleString(locale, { month: "long" })) + (d.DATE.toLocaleString(locale, { year: "numeric" }));
            if(path_this_date  == this_date) {
                      
              return true;
            }

            return false;
            });


      if(svg.select("#circle_layer").empty()) {
        var circleGroup = svg.append("g").attr("id","circle_layer");
      } else {
        var circleGroup = svg.select("#circle_layer");
      }

      if(circleGroup.select("circle").empty()) {
      circleGroup.append("circle")
                    .attr("cy", 0)
                    .attr("cx", 0)
                    .attr("r", 5)
                    .attr("opacity", 0.5)
                    .style("fill", "transparent");
      }
      
      if(typeof current_value[0] != 'undefined') {
      circleGroup.select("circle")
                    .attr("cy", yScale(current_value[0]['VALUE']))
                    .attr("cx", xScale(current_value[0]['DATE']))
                    .style("fill", "blue");
      } else {
        circleGroup.select("circle")
                    .style("fill", "transparent");
      }


}


