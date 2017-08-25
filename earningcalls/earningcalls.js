

function load_data_chart1(filename) {

     d3.csv(filename, function(data) {
        data.forEach(function(d) {
                d.max_difference = +d.max_difference;
                d.min_difference = +d.min_difference;
        });


        d3.select('svg').remove();
        
        draw_chart_1(data);

     });
};

function draw_chart_1(data) {
var width = 700;
var height = 580;
var barHeight = height/31;


d3.select('body').append('svg')
    .attr('id','chart1')
    .attr('height',height)
    .attr('width',width);

    var svg = d3.select('#chart1');

images = svg.selectAll('image');

     images.data(data).enter().append('image')
          .attr('id','logo')
          .attr("xlink:href", function(d,i) { return "logos/"+d.ticker+".svg"})
          .attr('x', 25)
          .attr('y', function(d,i) {return ((i+1) * barHeight + 5);})
          .attr('height', barHeight-8);




    var color_list = ['FF68DD','FF62B0','FE67EB','E469FE','D568FD',
    '9669FE','FF7575','FF79E1','FF73B9','FE67EB','E77AFE','D97BFD','A27AFE','FF8A8A','FF86E3','FF86C2','FE8BF0','EA8DFE','DD88FD','AD8BFE','FF9797','FF97E8','FF97CB','FE98F1','ED9EFE','E29BFD','B89AFE','FFA8A8','FFACEC','FFA8D3','FEA9F3','EFA9FE','E7A9FE','C4ABFE','FFBBBB','FFACEC','FFBBDD','FFBBF7','F2BCFE','EDBEFE','D0BCFE','FFCECE','FFC8F2','FFC8E3','FFCAF9','F5CAFF','F0CBFE','DDCEFF','FFDFDF','FFDFF8','FFDFEF','FFDBFB','F9D9FF','F4DCFE','E6DBFF','FFECEC',
    'FFEEFB','FFECF5','FFEEFD','FDF2FF','FAECFF','F1ECFF','FFF2F2',
    'FFFEFB','FFF9FC','FFF9FE','FFFDFF','FDF9FF','FBF9FF'];


  text = svg.selectAll('text');

  text.data(data).enter().append('text')
  .text(function(d,i){return d.min_word})
  .attr('x',function(d) {return (width/2 - 140);})
  .attr('y',function(d,i) {return (i+1) * barHeight + 15;})
  .style('font-size', '11.5px');

  text.data(data).enter().append('text')
  .text(function(d,i){return d.max_word})
  .attr('x',function(d) {return (width/2 + 115);})
  .attr('y',function(d,i) {return (i+1) * barHeight + 15;})
  .style('font-size', '11.5px');


svg.append('text').text("word less used").attr('x', width/2-77)
          .attr('y', barHeight)
          .style('font-size', '12px');

svg.append('text').text("word more used").attr('x', width/2+8)
          .attr('y', barHeight)
          .style('font-size', '12px');

svg.append('image').attr("xlink:href", 'left.svg').attr('x', width/2-95).attr('y', 9).attr('height', barHeight-8)

svg.append('image').attr("xlink:href", 'right.svg').attr('x', width/2+90).attr('y', 9).attr('height', barHeight-8)

  
  rectangle = svg.selectAll('rect');

  rectangle.data(data).enter().append('rect')
          .attr('x', 0)
          .attr('y', function(d,i) {return ((i+1) * barHeight + 3);})
          .attr('height', barHeight - 2)
          .attr('width',width)
          .style('fill', 'black')
          .style('opacity', 0.05);

  rectangle.data(data).enter().append('rect')
  .attr('id','min_difference')
  .attr('width',function(d) {return (300 * (-1) *d.min_difference - 2.5);})
  .attr('height',barHeight - 5)
  .attr('x',function(d) {return width/2 + (300 * d.min_difference);})
  .attr('y',function(d,i) {return (i+1) * barHeight + 5;})
  .style('fill', function(d,i) {
    return color_list[i]});

  tooltip_company = d3.select("body").append("div").attr("class","tooltip_company").style("opacity",0);

  rectangle.data(data).enter().append('rect')
            .attr('x', 0)
          .attr('y', function(d,i) {return ((i+1) * barHeight + 5);})
          .attr('height', barHeight)
          .attr('width', 150)
          .attr('fill','transparent')
              .on("mouseover", function(d,i) {
            tooltip_company.style('background', 'lightgrey')         
                .style('opacity', .85)
                .html(d.company)  
                .style('left', (d3.event.pageX+5) + "px")   
                .style('top', (d3.event.pageY - 20) + "px");
            })
          .on('mouseout', function(d,i) {tooltip_company.style("opacity",0)})


  rectangle.data(data).enter().append('rect')
  .attr('id','max_difference')
  .attr('width',function(d) {return (300 * d.max_difference);})
  .attr('height',barHeight - 5)
  .attr('x',width/2 + 2.5)
  .attr('y',function(d,i) {return ((i+1) * barHeight + 5);})
  .style('fill', function(d,i) {return color_list[i]});

  div = d3.select("body").append("div").attr("class","tooltip").style("opacity",0);

  svg.selectAll('#min_difference').on('mouseover', function(d) {
            div.style('background', 'lightsteelblue')         
                .style('opacity', .85)
                .html("<em>Sentence from last year:</em><br>" + d.min_sentence_1)  
                .style('left', (d3.event.pageX) + "px")   
                .style('top', (d3.event.pageY - 60) + "px");
})
  .on('mouseout', function(d) {div.style("opacity",0)})
  .on("click", function(d) { window.open(d.link); });
  
  svg.selectAll('#max_difference').on('mouseover', function(d) {
            div.transition()
                .style("background", "lightgreen")        
                .style("opacity", .85);    
            div.html("<em>Sentence from this year:</em><br>" + d.max_sentence_1)  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 60) + "px");

  }).on('mouseout', function(d) {div.style("opacity",0)})
  .on("click", function(d) { window.open(d.link); });

  d3.select("body").append("text").html("<br><p>What were the changes in word usage over all conference calls in Dow Jones companies, compared to last year?</p>")

};


function load_data_chart2(filename) {

     d3.csv(filename, function(data) {
        data.forEach(function(d) {
                d.average_change = +d.average_change;
        });
        
        draw_chart_2(data);

     });
};

function draw_chart_2(data) {
var width = 700;
var height = 450;
var barWidth = width/20;
var this_padding = 50;


d3.select('body').append('svg')
    .attr('id','chart2')
    .attr('height',height)
    .attr('width',width);

var svg = d3.select('#chart2');

rectangle = svg.selectAll('rect');

color_list = ['#0f0c05','#1e180b','#2d2310','#3c2f16','#4b3b1b','#5a4720','#695326','#785e2b','#876a31',
'#997837','#a5823b','#b48e41','#be984b',
'#c4a05a','#c9a969','#ceb278','#d4ba87','#d9c396','#dfcba5','#e4d4b4']

svg.append('rect').attr('y',0).attr('x',0).attr('width',width).attr('height',height).attr('fill','lightgrey');

rectangle.data(data).enter().append('rect')
            .attr('y', function(d,i) {return Math.min(height/2,(height/2-d.average_change*10000));})
          .attr('x', function(d,i) {return ((i) * barWidth+2.5);})
          .attr('height', function(d,i) {return Math.abs(d.average_change*10000)})
          .attr('width', barWidth-5)
          .attr('fill',function(d,i) {return color_list[i]})
          .attr('stroke-width',0.5)
          .attr('stroke', 'grey')
          .on('mouseover', function(d) {
            div.transition()
                .style("background", "lightgrey")        
                .style("opacity", .85);    
            div.html('<em>Example sentence, '+d.company+':</em><br>"'+d.sentence+'"')  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 60) + "px");
          })
          .on('mouseout', function(d) {div.style("opacity",0)});

svg.append('rect').attr('y',height/2).attr('x',0).attr('width',width).attr('height',2)

div = d3.select("body").append("div").attr("class","tooltip").style("opacity",0);

text = svg.selectAll('text');

text.data(data).enter().append('text')
  .text(function(d,i) {return d.word})
  .attr('font-size','14px')
  .attr("transform", function(d,i) {return "translate("+(((i) * barWidth) + barWidth/2-5)+","+(Math.min(height/2,(height/2-d.average_change*10000))+10)+") rotate(90)"})
  .attr("fill","white");
};



