//your code here

const ul=document.getElementById("brand");
let touristSpots = [
  ...ul.getElementsByTagName("li"),
].map((list) => list.innerText);
function dynamicSort(a, b) {
  const regex = new RegExp("(^(an|An|a|A|the|The))", "i");
  let one = regex.test(a) ? a.split(regex) : [a],
    two = regex.test(b) ? b.split(regex) : [b];
  one = one[one.length - 1].trim().toUpperCase();
  two = two[two.length - 1].trim().toUpperCase();
  return one < two ? -1 : one > two ? 1 : 0;
}
touristSpots.sort(dynamicSort);
ul.innerHTML = touristSpots
  .map((list) => {
    return `<li>${list}</li>`;
  })
  .toString()
  .replaceAll(",", "");