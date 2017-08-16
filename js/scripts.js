function formula_input(){
  var fn = Guppy.instances.guppy_div.backend.get_content('text').trim();
  var fnType = 'linear';
  var is_implicit = fn.split('=').length == 2;

  fn = fn.replace(/\$pi/g, 'PI')
  if (is_implicit) {
    fnType = 'implicit';
    fn = '(' + fn.split('=')[0] + ')-(' + fn.split('=')[1] + ')'
  }
  console.log(fn);

  functionPlot({
    target: '#quadratic-with-options',
    width: 580,
    height: 400,
    disableZoom: true,
    xAxis: {
      label: 'x - axis',
      domain: [-6, 6]
    },
    yAxis: {
      label: 'y - axis'
    },
    data: [{
      fn: fn,
      fnType: fnType
    }]
  })
}

$(document).ready(function (){


})
