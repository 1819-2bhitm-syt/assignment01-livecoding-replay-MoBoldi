function Person(vorname, nachname){
    this.vorname = vorname;
    this.nachname=nachname;
}
Person.prototype.getName = function(){
    return this.vorname + " " + this.nachname
};
let hans = new Person("Hans", "Müller");
//console.log(hans.getName());
let p = {
    vorname: "Erik",
    nachname: "Müller"
};
p.__proto__ = Person.prototype;
console.log(p.getName());
