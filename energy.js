var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){
  let ke = 0;
  ke+= m*v*v
  ke = ke/2;
  return ke;
};
exports.mass = function(ke,v){
  let m = 0;
  m+= 2*ke
  m = m/(v*v);
  return m;
};
exports.velocity = function(ke,m){
  let v = 0;
  v+= 2*ke;
  v = v/m;
  v = math.sqrt(v);
  return v;
};
