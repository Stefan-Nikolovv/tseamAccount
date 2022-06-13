function centuriesToMinutes(n){
let centurie = Number(n);
let year = centurie * 100
let days =(Math.trunc(year * 365.2422));
let hour = 24 * days;
let min = 60 * hour;
let result = 0;
result += (centurie * year * days * hour * min);
console.log(result);
}
centuriesToMinutes(1);
centuriesToMinutes(5);