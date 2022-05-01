
# Web Map Application

##### Ali Basbeth
##### GEOG 458 SPR 2022
##### Lab 3
##### University of Washington


## Introduction
In this lab project we are focusing on building web mapping application, and in this particular lab we are interested with the data regarding the Coronavirus disease 2019(COVID-19). The virus has claimed millions of lives worldwide, and it is one of the top catastrophic event in the 21st century which leads to economic turmoil, and global instability worldwide. 

In the past few weeks in GEOG 458, we have been learning about web mapping. In lectures, we went over some exercise related to web mapping, and also the geospatial data in particular "geojson". Additionally, one important reading redarding map design with mapbox, which covers necessary map elements to be included for a web map. 

## The Technology
During the development of this web mapping application, I uses the Mapbox GL-JS JavaScript library API. The API is so crucial for web maps development as it is suopport many essential features for any web based mapping technology. It supports user interactivity, query, visualizations, and more. 

There are several functions that are used in the creation of the two maps:

including addlayer, addsource, legend, and on. These functions are necessary to the functioning of the map. The .on function can be use to load or query the data for the map. In addition, we use the legend object to develop the legend. 

Also, there are several methods from mapbox-gl-js that is used to develop this web map. 

- addSource method is used to add source to the map style, it takes two parameters compose of string, and object. 
- addLayers method is used to add the mode of the map layer. For instance, circle, or fill layer. That can be use to create proportional symbol, and choropleth respectively. 

## The Data 
from the New York Times of Covid-19 cases rates and counts in the United States in the year of 2020. There are slight differences in both counts, and rates of covid-19. The reason is the normalization, the rates has been normalized to per 100,000 thousands, for each area distribution which in this case is the county. 

## Maps Content
1. Covid Case Counts Map:
![Fisrt Map](/img/counts.png)
The first map that I created above is a proportional symbol map, that shows the case counts of covid-19 at a county level. The [NYT Github Repos](https://github.com/nytimes/covid-19-data/tree/43d32dde2f87bd4dafbb7d23f5d9e878124018b8) defined cases as,
>The total number of cases of Covid-19, including both confirmed and probable.


2. Covid-19 Cases Rates map:
![Second Map](/img/rates.png)
The second map that I created is a thematic map of type "choropleth". The map shows the case rate of covid throughout the mainland US in the year of 2020. The covid data was acquired from the New York Times, and according to them it was based on collective effort of journalist gathering the data. 

According to the [Medical Dictionary](https://medical-dictionary.thefreedictionary.com/case+rate) case rate defined as:
> case rate Infectious disease The number of cases of a particular infection or exposure during a unit of time, divided by the population during that period; CRs are often expressed in terms of a population of 100,000


### Works Cited
Acklowledments for the data use in the development of this map: 

[1]: <https://github.com/nytimes/covid-19-data/tree/43d32dde2f87bd4dafbb7d23f5d9e878124018b8

[2]: <https://www.nytimes.com/interactive/2021/us/covid-cases.html

[3]:<https://data.census.gov/cedsci/table?g=0100000US%24050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true

[4]:<https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html
