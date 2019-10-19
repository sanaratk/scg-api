export default async function findXYZ(req, res, next) {
  let var_serie = [ 'X', 5, 9, 15, 23, 'Y', 'Z' ];
  let interval = [];
  let serie = [];

  for (let index = 0; index < var_serie.length; index++) {
    interval.push(2 * (index));
  }

  for (let index = 0; index < var_serie.length; index++) {
    if(index === 0){
      serie.push((var_serie[index + 1]) - interval[index+1]);
    }else{
      serie.push(interval[index] + serie[index - 1]);
    }
  }

  let rs = {};
  for (let index = 0; index < var_serie.length; index++) {
    // console.log('type', typeof (var_serie[index]));
    if (typeof (var_serie[index]) !== 'number'){
      console.log('var', var_serie[index]);
      console.log('serie', serie[index]);

      rs[var_serie[index]] = serie[index];
      console.log('rs', rs);
    }
    // const element = array[index];

  }
  console.log('rs', rs);
  let result = {
    interval: interval,
    message: serie,
    result: rs['X']
  }
  res.send(rs)
}