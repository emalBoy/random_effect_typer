window.addEventListener('load', () => {

  const field = document.getElementById('field');

  //

  var txt = prompt("Enter the text here...", sentence);
  txt = txt.toUpperCase().trim();
  const delay = 45;

  var details = {
    text: txt,
  };
  details = {
    text: txt,
    length: details.text.length
  }
  console.table(details);

  var int, output = '',
    show = details.length,
    add = '';

  const putOutput = true;
  //Make putOutput = true  if want to make all outputs write in console

  int = setInterval(() => {
    output = '';
    for (var i = 0; i < show; i++) {
      output += letters[Math.floor(Math.random(0) * letters.length)];
    };
    if (show !== details.length) {
      tmp = details.length - show;
      add = '';
      for (var i = 0; i < tmp; i++) {
        add += details.text[i];
      }
      output = add + output;
    };
    show -= 1;

    field.innerHTML = output;
    if (putOutput) {
      console.log(output);
    }
    if (show == -1) {
      field.innerHTML = details.text;
      clearInterval(int);
    };
  }, delay);

  // Now, even I can't understand that code 😂
  // -Developer

});