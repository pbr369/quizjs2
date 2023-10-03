var dynastyReign = [
  { name: "San Dynasty", romanNumeral: "MXLI" },
  { name: "Viloria Dynasty", romanNumeral: "MCCCIIII" },
  { name: "Tan Dynasty", romanNumeral: "MCCCXCVIII" },
  { name: "Bon Dynasty", romanNumeral: "MCDXLV" },
  { name: "Maiko Dynasty", romanNumeral: "MDCLXIV" },
  { name: "Paul Dynasty", romanNumeral: "MCMXLIX" },
  { name: "Andre Dynasty", romanNumeral: "MMMXICX" },
];

function longestdynasty(dynastyReign) {
  const getLongestDynasty = dynastyReign.map(
    ({ romanNumeral }) => convertYear(romanNumeral)
  );
  const longestDynasty = Math.max(...getLongestDynasty);
  console.log(longestDynasty);
}

function charToInt(year) {
  switch (year) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

function convertYear(romanNum) {
  if (romanNum == null) return -1;
  var num = charToInt(romanNum.charAt(0));
  var pre, curr;

  for (var i = 1; i < romanNum.length; i++) {
    curr = charToInt(romanNum.charAt(i));
    pre = charToInt(romanNum.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

longestdynasty(dynastyReign);
