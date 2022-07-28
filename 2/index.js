//Done by Mohit Shrivastava - Question 2
//Using js inbuilt function URLSearchParams

var url =
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
const searchParams = new URLSearchParams(url);

function getUrlParameterValue(url, parameter) {
  //Todo: complete this code
  const value = searchParams.get(parameter);
  return value;
}

//example case 1
const value = getUrlParameterValue(url, "utm_medium");
console.log(value);

//example case 2
const value_two = getUrlParameterValue(url, "utm_campaign");
console.log(value_two);
