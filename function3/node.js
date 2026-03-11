var person={
    name: 'jhon mac',
    age: 30,
    ismarried:true,
    address:{
   street:33,
    }
}

var person2=new Object();
person2.name="krishkant";
person2.age=32;
person2.ismarried=true;
person2.address={};
person2.address.street="nagar road";
person2['address']['Flatno']=33;
document.writeln("name: " + person2.name + "<br>");
document.writeln("age: " + person2.age + "<br>");
document.writeln("is married: " + person2.ismarried + "<br>");
document.writeln("street: " + person2.address.street + "<br>");
document.writeln("flat no: " + person2.address.Flatno + "<br>");