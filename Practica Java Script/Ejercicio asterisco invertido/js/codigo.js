let piramide= parseInt(prompt("Escriba un numero"));

for (let i = 1; i <= piramide; i++){
  for (let j = i; j <= piramide; j++){
    document.writeln("*");
  }
  document.write("<br>")
}

