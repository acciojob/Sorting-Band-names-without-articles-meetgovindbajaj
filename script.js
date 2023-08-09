//your code here

function dynamicSort(a, b) {
  const regex = new RegExp("(^(an|An|a|A|the|The))", "i");
  let one = regex.test(a) ? a.split(regex) : [a],
    two = regex.test(b) ? b.split(regex) : [b];
  one = one[one.length - 1].trim().toUpperCase();
  two = two[two.length - 1].trim().toUpperCase();
  return one < two ? -1 : one > two ? 1 : 0;
}
let touristSpots = ["The Virupaksha Temple", "Victoria Memorial", "Tajmahal"];
touristSpots.sort(dynamicSort);