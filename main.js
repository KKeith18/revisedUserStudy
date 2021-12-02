
var Temperature = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Average Annual Temperature (ºF)",
    "data": {"url": "temperature.csv"},

    "vconcat": [ {
    "width": "container",
    "height": 500,
    "layer": [
    {
        "mark": {
            "type": "area",
            "line": {
              "color": "firebrick"
            },
            "color": {
              "x1": 1,
              "y1": 1,
              "x2": 1,
              "y2": 0,
              "gradient": "linear",
              "stops": [
                {
                  "offset": 0.925,
                  "color": "white"
                },
                {
                  "offset": 1,
                  "color": "firebrick"
                }
              ]
            }, "tooltip": true, "clip": true,
          },
        "encoding": {
            "x": {"field": "date", "type": "temporal"},
            "y": {"field": "temp", "type": "quantitative", "scale": {"domain": [50,56]}}
            
        }
    },
    /*{
        "mark": {
            "type": "line",
            "color": "white"
        },
        "transform": [
            {
            "regression": "temp",
            "on": "date"
            }
        ],
        "encoding": {
            "x": {
            "field": "date",
            "type": "temporal"
            },
            "y": {
            "field": "temp",
            "type": "quantitative"
            }
        }
    }*/]
    
    }],
};

var SeaLevel = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Annual Cumulative Sea Level Rise(Inches)",
    "data": {"url": "sealevel.csv"},

    "vconcat": [ {
    "width": "container",
    "height": 500,
    "layer": [
    {
        "mark": { "type": "area", "tooltip": true},
        "encoding": {
            "x": {"field": "date", "type": "temporal"},
            "y": {"field": "sealevel", "type": "quantitative"}
            
        }
    }]
    
    }],
};

var US_Carbon = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "US Carbon Annual Emmisions (Tons/Year)",
    "data": {"url": "USCarbon.csv"},

    "vconcat": [ {
    "width": 400,
    "height": 350,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "carbon", "type": "quantitative", "axis": {"format": "e"}}  
    },
    }],
};
var Global_Carbon = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Global Annual Carbon Emmisions (Billion Tons/Year)",
    "data": {"url": "co2_global.csv"},

    "vconcat": [ {
    "width": 400,
    "height": 400,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "carbon", "type": "quantitative"}  
    },
    }],
};

var Per_Capita = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "US Per Capita Carbon Emmisions (Tons/Year)",
    "data": {"url": "per_capita.csv"},

    "vconcat": [ {
    "width": 400,
    "height": 350,
    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "carbon", "type": "quantitative"}  
    },
    }],
};

var Emission_Type = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "US Per Capita Carbon Emmisions (Tons/Year)",
    "data": {"url": "emission_type.csv"},
    "repeat": {
        "layer": ['oil',"coal",'gas','cement','flaring','other']
    },
    "spec": {
    "width": 500,
    "height": 500,
    "mark": { "type": "area", "tooltip": true},
    "encoding": {
        "x": {"field": "date", "type": "temporal","title": "Date"},
        "y": {"aggregate": "sum", "field": {"repeat": "layer"}, "type": "quantitative", "title": "Sum of Carbon Emissions (Tons)" },
        "color": {
        "datum": {"repeat": "layer"},
        "type": "nominal"
  }
    },
    },
};


var State_Temp = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.1.1.json",

    "description": "Lab 9",
    "title": "Average State Temperatures in the U.S",
    "data": {"url": "state_temp.csv"},

    "params": [{
    "name": "State", "value": "Alabama",
    "select": {"type": "point", "fields": ["Location"]},

    "bind": {"input": "select", "options": ["Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]}
    },

    { "name": "Year_Born", "value": 1895,
    "bind": {"input": "range", "min": 1895, "max": 2021, "step": 1, } },
    
    ],

    "transform": [
        {"filter": {"timeUnit":"month", "field":"Date","equal":"June"}},
        {"filter": {"timeUnit":"year", "field": "Date", "gte": "Year_Born"}}
     ],


    "vconcat": [ {
    "width": 700,
    "height": 500,

    "mark": { "type": "line", "tooltip": true},
    "encoding": {
        "x": {"field": "Date", "type": "temporal",
            "condition":{
                "param":"yearBorn",
                
                
            }},
        "y": {"field": "Value", "type": "quantitative","scale": {"domain": [55,90]}},
        "color": {
            "condition":{
                "param":"State",
                "field": "Location",
                "scale": {"scheme": "sinebow"}
                },
            "value":"grey"
            },

        "opacity":{
            "condition":{
                "param":"State",
                "field": "Location",
                "value":"1"
                },
            "value":"0.025"
            },

        },
    }],
};

var Cost = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Estimated Cost of Sea Level Rise by 2100 (Billions of USD)",
    "description": "Estimated Cost of Sea Level Rise by 2100 (Billions of USD)",
    "width": 550,
    "height": 500,
    "data": {"url": "sealevel_cost.csv"},
    "mark": {"type": "bar", "tooltip": true},
    "encoding": {
        "x": {"field": "state", "type": "nominal", "sort": "y"},
        "y": {"field": "cost", "type": "quantitative", "sort": "ascending"}
    }
};

vegaEmbed('#globalchart', Global_Carbon);
vegaEmbed("#US-Chart", US_Carbon);
vegaEmbed("#Co2-Chart", Per_Capita)
vegaEmbed("#EmissionsBy-Chart", Emission_Type)
vegaEmbed("#cost-Chart", Cost)
vegaEmbed('#line-chart', State_Temp)
vegaEmbed('#sealevel', SeaLevel)
vegaEmbed('#temperature', Temperature)