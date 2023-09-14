// Regexp golf
function regexTest(regex, str) {
  if (regex.test(str)) {
    console.log(
      `The string "${str}" matches the regular expression "${regex}".`
    );
  } else {
    console.log(
      `The string "${str}" does not match the regular expression "${regex}".`
    );
  }
}

regexTest(/ca[rt]/, "car");
regexTest(/pr?op/, "pop");
regexTest(/ferr(et|y|ari)/, "ferret");
regexTest(/.ious/, "curious");
regexTest(/\s[.,;:]/, ".");
regexTest(/\w{7,}/, "supercalifragilisticexpialidocious");
regexTest(/[^eE]/, "ab");

// Quoting style
function quotingStyle(text) {
  const regex = /(?<!\w)'(.*?)'(?!\w)/g;
  return text.replace(regex, '"$1"');
}
const text = "She said, 'Don't you want to be happy?' and then he said 'I really don't want to be happy.'";
console.log(quotingStyle(text));

// Numbers again
function numbersAgain(str) {
  const regex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
  return regex.test(str);
}
console.log(numbersAgain("1."));
