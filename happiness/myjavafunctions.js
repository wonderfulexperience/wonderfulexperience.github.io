
            // make scatter_plot


            // source for the scatter plot is Will Liu: http://bl.ocks.org/WilliamQLiu/bd12f73d0b79d70bfbae
  
            // functions to update data

            var svg;

            function resetChart() {
                    income_input = "not defined";
                    friends_input = "not defined";
                    health_input = "not defined";
                    religious_input = "not defined";
                    age_input = "not defined";
                    reload_data(csv_filename);
                    document.querySelector('#income_output').value = "Select an income bracket";
                    document.querySelector('#friends_output').value = "Select number of friends";
                    document.querySelector('#health_output').value = "Select level of health";
                    document.querySelector('#religious_output').value = "Select religiousness";
                    document.querySelector('#age_output').value = "Select your age";

            }


            function makeScatter(this_dataset, criteria_variable, lower_value, higher_value) {
            d3.select("svg").remove();


            // Setup settings for graphic
            var canvas_width = 800;
            var canvas_height = 350;
            var padding = 40;  // for chart edges

            svg = d3.select("h4")  // This is where we put our vis
                .append("svg")
                .attr("width", canvas_width)
                .attr("height", canvas_height);

            // in case all criteria are selected, show a pie chart
            if (criteria_variable == 'inactive') {
                var this_average = d3.sum(this_dataset, function(d) {
                                return d.happiness; })
                console.log(this_average)

                svg.selectAll("circles")
                    .data(this_dataset)
                    .enter()
                    .append("circle")  // Add circle svg
                    .attr("cy", canvas_height / 2)
                    .attr("cx", canvas_width / 2)
                    .attr("r", canvas_height / 2) // radius
                    .style("fill", "blue");

                var arc = d3.arc()
                            .innerRadius(0)
                            .outerRadius(canvas_height / 2)
                            .startAngle((this_average / 100) * (Math.PI * 2)) //converting from degs to radians
                            .endAngle(0);
                            

                svg.append("path")
                            .attr("d", arc)
                            .attr("transform", "translate(400,175)")
                            .attr("fill", "green");

            return;
            }

            // Create scale functions
            var xScale = d3.scaleLinear()
                            .domain([d3.min(this_dataset, function(d) {
                                return d[criteria_variable];
                              })-1, d3.max(this_dataset, function(d) {
                                return d[criteria_variable];
                              })+1])
                            .range([padding, canvas_width - padding * 2]); // output range

            var yScale = d3.scaleLinear()
                            .domain([Math.max(d3.min(this_dataset, function(d) {
                                return d.happiness;
                              })-10,0), (Math.min(d3.max(this_dataset, function(d) {
                                return d.happiness;
                              })+10,100))])
                            .range([canvas_height - padding, padding]);  // remember y starts on top going down so we flip

            // Define axes

            tickLabels = [lower_value,higher_value]
            var xAxis = d3.axisBottom(xScale)
                          .tickValues([0,d3.max(this_dataset, function(d) {
                                return d[criteria_variable];
                              })])
                          .tickFormat(function(d,i){ return tickLabels[i] });
            
            var yAxis = d3.axisLeft(yScale)
                          .ticks(5);


            var y_averages = [];

        
            var x_values = []

            this_dataset.map(function(d) {
                x_values.push(d[criteria_variable]);
            })

            var mySet = new Set(x_values);

            for (let item of mySet)  {
                var this_data = this_dataset.filter(function(d) {
                    if(d[criteria_variable] == item) {
                        return true;
                    }

                    return false;
                });
                var y_average = d3.sum(this_data, function(d) {
                                return (d.happiness*d.count);
                              }) / d3.sum(this_data, function(d) {
                                return (d.count);
                              });

                y_averages.push({'x_variable':item,'y_variable':y_average});

            }

            var sum_people = d3.sum(this_dataset, function(d) {
                                return (d.count);
                              })

            // sort y_averages to draw later the line
            y_averages.sort(function(a, b){
                return a.x_variable-b.x_variable
            });




            // Create Circles
            svg.selectAll(".blue.circles")
                .data(this_dataset)
                .enter()
                .append("circle")  // Add circle svg
                .attr("cy", function(d) {
                    return yScale(d.happiness); 
                })
                .attr("cx", function(d) { 
                    return xScale(d[criteria_variable]);
                })
                .attr("r", function(d) { 
                    return Math.log((d.count/sum_people)+1.008)*100;
                }) // radius
                .style("fill", "blue");

            // averages as big circles
            svg.selectAll(".green.circles")
                .data(y_averages)
                .enter()
                .append("circle")
                .attr("cy", function(d) { 
                    return yScale(d.y_variable);
                })
                .attr("cx", function(d) { 
                    return xScale(d.x_variable);
                })
                .attr("r", 8) // radius
                .style("fill", "green");


            var lineFunction = d3.line()
                .x(function(d) { return xScale(d.x_variable); })
                .y(function(d) { return yScale(d.y_variable); })
                .curve(d3.curveMonotoneX);

            svg.append("path")
                .attr("fill", "none")
                .datum(y_averages) 
                .attr("class", "line")
                .style("stroke", "black")
                .attr('stroke-width', 0.5)
                .attr('d', lineFunction);


            // Add to X axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (canvas_height - padding) +")")
                .call(xAxis);

            // Add to Y axis
            svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + padding +",0)")
                .call(yAxis);

            // create a text element
            svg.append('text')
                    .text('Very happy people in %')
                    .attr("transform", "rotate(270,5,200)")
                    .attr('x', 5)
                    .attr('y', 200)
                    .attr('font-size',"10px")
                    .attr('dy','0.35em');
            };



          function load_initial(this_filename) {

            var happy_dataset = [];

            d3.csv(this_filename, function(data) {

              data.forEach(function(d) {
              // change to a float
                d.age_bracket = +d.age_bracket;
                d.health_bracket = +d.health_bracket;
                d.religious_bracket = +d.religious_bracket;
                d.income_bracket = +d.income_bracket;
                d.friends_bracket = +d.friends_bracket;
                d.happiness = +d.happiness;
              });
              happy_dataset = data;

              var sum_people = d3.sum(happy_dataset, function(d) {
                                return (d.count);
                              })

              var happy_average = d3.sum(happy_dataset, function(d) {
                                return (d.happiness*d.count);
                              }) / sum_people;

              document.querySelector('#average_output').value = Math.round(happy_average,1) + " of the total sample of " + sum_people + " respondents said that they are very happy.";
          ;

              makeScatter(happy_dataset,'income_bracket', 'poorer', 'richer');
            
            });
          };

          function reload_data(this_filename) {

            var happy_dataset = [];

            d3.csv(this_filename, function(data) {

              data.forEach(function(d) {
              // change to a float
                d.age_bracket = +d.age_bracket;
                d.health_bracket = +d.health_bracket;
                d.religious_bracket = +d.religious_bracket;
                d.income_bracket = +d.income_bracket;
                d.friends_bracket = +d.friends_bracket;
                d.happiness = +d.happiness;

              });

              // what to show in the chart
              var active_bracket = 'income_bracket';
              var lower_value = 'poorer';
              var higher_value = 'richer';

              truth_array = [0,0,0,0,0];
              if(income_input != "not defined") {
                truth_array[0] = 1;
              }
              if(friends_input != "not defined") {
                truth_array[1] = 1;
              }
              if(health_input != "not defined") {
                truth_array[2] = 1;
              }
              if(religious_input != "not defined") {
                truth_array[3] = 1;
              }
              if(age_input != "not defined") {
                truth_array[4] = 1;
              }
              

              // select data according to menus
              data = data.filter(function(d){
                var truth_criteria = true;

                if(income_input != "not defined" && income_input != d.income_bracket){
                    truth_criteria = false;
                }
                if(friends_input != "not defined" && friends_input != d.friends_bracket){
                    truth_criteria = false;
                }
                if(health_input != "not defined" && health_input != d.health_bracket){
                    truth_criteria = false;
                }
                if(religious_input != "not defined" && religious_input != d.religious_bracket){
                    truth_criteria = false;
                }
                if(age_input != "not defined" && age_input != d.age_bracket){
                    truth_criteria = false;
                }

                if (truth_criteria == false) {
                    return false;
                }
                else {
                    return true;
                }
                
              });


                var i = 0;
                for (i; i < truth_array.length+1; i++) {
                    if(i == truth_array.length) {
                        break;
                    }
                    if(truth_array[i] == 0) {
                        break;
                    }
                }


                active_brackets = ['income_bracket','friends_bracket','health_bracket','religious_bracket','age_bracket','inactive'];
                lower_values = ['poorer','less friends','less healthy','less religious','younger','inactive'];
                higher_values = ['richer','more friends','healthier','more religious','older','inactive'];

                active_bracket = active_brackets[i];
                lower_value = lower_values[i];
                higher_value = higher_values[i];


              happy_dataset = data;

              var sum_people = d3.sum(happy_dataset, function(d) {
                                return (d.count);
                              })

              var happy_average = d3.sum(happy_dataset, function(d) {
                                return (d.happiness*d.count);
                              }) / sum_people;

              if (happy_average > 0) {
                if (active_bracket == "inactive") {
                    document.querySelector('#average_output').value = Math.round(happy_average,1) + " of the total sample of " + sum_people + " respondents said that they are very happy.";
                }
                else {
                document.querySelector('#average_output').value = "The survey results suggest that in your situation " + Math.round(happy_average,1)
                + "% would say that they are very happy. This is based on a sample of " + sum_people + " respondents.";
                }
                makeScatter(happy_dataset, active_bracket, lower_value, higher_value);
                } 
                else {
                document.querySelector('#average_output').value = "We didn't find any respondent with your criteria."
                d3.select("svg").remove();
                }

            });
          };
