function getGrade (s1, s2, s3) {
  let av = (s1 + s2 + s3)/3;
  let result = '';
  
  if(av <= 100 && av >= 90){
    result = 'A';
  }
  else if (av < 90 && av >= 80){
    result = 'B';
  }else if(av < 80 && av >= 70){
    result = 'C';
  }else if(av < 70 && av >= 60){
    result = 'D';
  }
  else{
    result = 'F';
  }
  
  return result;
}
