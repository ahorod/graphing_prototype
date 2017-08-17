function formula_input(){
  var fn = Guppy.instances.guppy_div.backend.get_content('text').trim();

  fn = fn.replace('*  <', '<')
  fn = fn.replace('<  *', '<')
  fn = fn.replace('*  >', '>')
  fn = fn.replace('>  *', '>')

  var fnType = 'linear';
  var isInequality = false;
  var is_implicit = fn.split('=').length == 2;
  var is_inequality =
    fn.split('<').length == 2
    || fn.split('>').length == 2;

  fn = fn.replace(/\$pi/g, 'PI')
  console.log(fn);
  if (is_implicit) {
    fnType = 'implicit';
    fn = '(' + fn.split('=')[0] + ')-(' + fn.split('=')[1] + ')';
    isInequality = false;
  }
  if (is_inequality) {
    fnType = 'implicit';
    isInequality = true;
    fn = '(' + fn.split('<')[0] + ')-(' + fn.split('<')[1] + ')';
    if (fn.split('>').length == 2) {
      fn = '-(' + fn + ')';
    }
  }
  console.log(fn);

  functionPlot({
    target: '#quadratic-with-options',
    width: 870,
    height: 600,
    disableZoom: true,
    xAxis: {
      label: 'x',
      domain: [-6, 6]
    },
    yAxis: {
      label: 'y',
      domain: [-4, 4]
    },
    grid: true,
    data: [{
      fn: fn,
      fnType: fnType,
      inequality: isInequality,
      color: 'rgb(93, 25, 108)'
    }]
  })
}

$(document).ready(function (){


})
