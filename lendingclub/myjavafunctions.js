function load_initial(this_filename) {

     var this_dataset = [];

     d3.csv(this_filename, function(data) {

       data.forEach(function(d) {
       // change to a float
         d.employee_length = +d.employee_length;
         d.years_credit = +d.years_credit;
         d.zip = +d.zip
         d.quartile = +d.quartile;
         d.rate = +d.rate;
         d.count = +d.count;

       });

       this_dataset = data;

       average_rate = printout_data(this_dataset);
       makeChart(this_dataset);
     })
};

function printout_data(this_dataset) {
         var total_people = d3.sum(this_dataset, function(d) {
                         return (d.count);
                       })
      
      var problem_people = d3.sum(this_dataset, function(d) {
                         return (d.rate*d.count);
                       });

       var problem_rate = problem_people / total_people * 100;


       var total_people_string = (Math.round(total_people,0)).toLocaleString(
        'en-US',   { minimumFractionDigits: 0 });

       var problem_rate_string = (Math.round(problem_rate,0)).toLocaleString(
        'en-US',   { minimumFractionDigits: 0 });

        var problem_people_string = (Math.round(problem_people,0)).toLocaleString(
        'en-US',   { minimumFractionDigits: 0 });

      document.querySelector('#total_people_output').value = "There are "+ total_people_string + " people fitting the selected criteria.";
      document.querySelector('#problem_rate_output').value = "Of them " + problem_rate_string + "%, or " + problem_people_string + " people, had problems paying back their loans.";

      return problem_rate;
}


function reload_data(this_filename) {
      var this_dataset = [];

      d3.csv(this_filename, function(data) {

       data.forEach(function(d) {
       // change to a float
         d.employee_length = +d.employee_length;
         d.years_credit = +d.years_credit;
         d.zip = +d.zip
         d.quartile = +d.quartile;
         d.rate = +d.rate;
         d.count = +d.count;

       });

       

       // check if variable is defined

       var variable_set = []
       variable_set = [zip_input,employment_input,income_input,credit_input,purpose_input]

       

       data = data.filter(function(d) {
       var filter_criteria = true;
       
       var datafields = [d.zip,d.employee_length,d.quartile,d.years_credit,d.purpose]

       var i = 0
       for (i in variable_set) {
          if (variable_set[i] != 'not defined' && variable_set[i] != datafields[i]) {
            filter_criteria = false;
          }
       }

       if (filter_criteria == false) {
        return false;
       }
       else {
        return true;
       }
     });

    this_dataset = data;

    if(this_dataset.length > 0) {
      printout_data(this_dataset);
      makeChart(this_dataset);
    }
    else {
      d3.select("svg").remove();
      document.querySelector('#total_people_output').value = "There are not enough data points for your selected criteria.";
      document.querySelector('#problem_rate_output').value = "";
    }

})};

function resetChart() {
  load_initial(csv_filename);

  var zip_input = "not defined";
  var employment_input = "not defined";
  var income_input = "not defined";
  var credit_input = "not defined";
  var purpose_input = "not defined";

  document.querySelector('#zip').value = "First digit of Zip code";
  document.querySelector('#employment').value = "Employment length";
  document.querySelector('#income').value = "Income quartile";
  document.querySelector('#credit').value = "Credit history in years";
  document.querySelector('#purpose').value = "Loan purpose";
};

var svg;

function makeChart(this_dataset) {
     d3.select("svg").remove();


     // Setup settings for graphic
     var canvas_width = 450;
     var canvas_height = 450;
     var padding = 40;  // for chart edges

     svg = d3.select("h2")  // This is where we put our vis
         .append("svg")
         .attr("width", canvas_width)
         .attr("height", canvas_height);

     // show a pie char
      var total_people = d3.sum(this_dataset, function(d) {
                         return (d.count);
                       })
      
      var problem_people = d3.sum(this_dataset, function(d) {
                         return (d.rate*d.count);
                       });

      var problem_rate = problem_people / total_people;


      
  svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", canvas_width)
    .attr("height", canvas_height)
    .attr("fill", "pink");

  svg.append("rect")
    .attr("x", canvas_width-Math.sqrt(canvas_width*canvas_height*problem_rate))
    .attr("y", 0)
    .attr("width", canvas_width)
    .attr("height", Math.sqrt(canvas_width*canvas_height*problem_rate))
    .attr("fill", "darkred");

if(problem_rate*100 != average_rate) {
    svg.append("rect")
    .attr("x", canvas_width-Math.sqrt(canvas_width*canvas_height*average_rate/100))
    .attr("y", 0)
    .attr("width", canvas_width)
    .attr("height", Math.sqrt(canvas_width*canvas_height*average_rate/100))
    .style("stroke", "darkgrey")
    .style("fill", "none")
    .style("stroke-width", 2);

    svg.append("text")
    .attr("x",canvas_width/5)
    .attr("y",30)
    .text("Over the whole dataset,")
    .attr("fill", "grey")
    .style("font-weight","bold")
    .attr("font-family","sans-serif")
    .style("font-size","14px");

    svg.append("text")
    .attr("x",canvas_width/5)
    .attr("y",45)
    .text(Math.round(average_rate)+"% of borrowers")
    .attr("fill", "grey")
    .attr("font-family","sans-serif")
    .style("font-weight","bold")
    .attr("font-size","14px");

    svg.append("text")
    .attr("x",canvas_width/5)
    .attr("y",60)
    .text("have problems paying back")
    .attr("fill", "grey")
    .attr("font-family","sans-serif")
    .style("font-weight","bold")
    .attr("font-size","14px");

    svg.append("text")
    .attr("x",canvas_width/5)
    .attr("y",75)
    .text("their loans.")
    .attr("fill", "grey")
    .attr("font-family","sans-serif")
    .style("font-weight","bold")
    .attr("font-size","14px");

    criteria_start = canvas_width-Math.sqrt(canvas_width*canvas_height*problem_rate)

    svg.append("text")
    .attr("x",criteria_start+10)
    .attr("y",30)
    .text("For the selected")
    .attr("fill", "white")
    .attr("font-family","sans-serif")
    .attr("font-size","14px");

    svg.append("text")
    .attr("x",criteria_start+10)
    .attr("y",45)
    .text("criteria, it is")
    .attr("fill", "white")
    .attr("font-family","sans-serif")
    .attr("font-size","14px");

    svg.append("text")
    .attr("x",criteria_start+10)
    .attr("y",60)
    .text(Math.round(problem_rate*100)+"%")
    .attr("fill", "white")
    .attr("font-family","sans-serif")
    .attr("font-size","14px");
    }
  };