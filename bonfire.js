function titleCase(str) {
  x = (str.split(" "));
  for (var i=0; i<x.length; i++){
    console.log(x[i].charAt(0).toUpperCase());
  };
  return str;
}

titleCase("I'm a little tea pot");
