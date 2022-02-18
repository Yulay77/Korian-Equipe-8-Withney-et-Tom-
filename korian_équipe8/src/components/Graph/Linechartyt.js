import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";


function LineChartYt () {
    const [data] = useState([100, 50, 30, 80, 200, 100]);
    const [data2] = useState([20, 50, 100, 150, 200, 10]);
    
    const svgRef = useRef();
    
    useEffect(() => {
        //setting up svg 
        const w = 500;
        const h = 200;
        const svg =d3.select(svgRef.current)
        .attr('width', w)
        .attr('height', h)
        .style('margin-left', '3vw')
        .style('overflow', 'visible');

        //setting the scaling

        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, w])
        
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0]);

        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal);

        //setting the axes 

        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(i => i + 1);
        
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);
        
        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`)
            .style('color', 'transparent')
          
        svg.append('g')
            .call(yAxis);


        //setting up the data for the svg

        svg.selectAll('.line')
            .data([data])
            .join('path')
                .attr('d', d => generateScaledLine(d))
                .attr('fill', 'none')
                .attr('stroke', '#173D59');

        svg.selectAll('.line')
        .data([data2])
        .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', '#E08330');


    }, [data, data2]);

    return (
        <div className="LineChartYt">
            <svg ref={svgRef }></svg>
        </div>
    );
}


export default LineChartYt;