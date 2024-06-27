function setup {
svg.on("click", function(event) {
    if (action == "add") {
	// add a point
	  const new_x = xScale.invert(d3.pointer(event)[0]);
	  const new_y = yScale.invert(d3.pointer(event)[1]);
	  console.log(new_x);
	  svg.append("circle")
    .data([[new_x, new_y]])
      .attr("cx", d => xScale(d[0]))
      .attr("cy", d => yScale(d[1]))
      .attr("r", "3")
      .attr("fill", "red")
    }
  });

}
