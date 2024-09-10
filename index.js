// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {32} f temperature in °F
 * @returns {0} temperature in °C
 */
function convertToCelsius(f) {
  // TODO
}
return (f - 32) * (5 * 9)

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {32} f temperature in °F
 * @returns {"very cold"} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
  let description = "";

  if (f < 32){
    description = "very cold";
  } else if (f < 64){
    description = "cold"
  } else if (f < 86) 
    description = "warm"
    else if (f < 100){
      description = "hot"
    }else {
      description = "very hot"
    }
return description;

/**
 * @param {32} limit
 * @returns {0} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {
  // TODO
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${discription}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
