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
    if (typeof (var_serie[index]) !== 'number'){
      rs[var_serie[index]] = serie[index];
    }
  }
  res.send({ 'data': rs })
}