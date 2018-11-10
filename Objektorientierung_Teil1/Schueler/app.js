function Person(vorname, nachname){
    this.vorname=vorname, 
    this.nachname=nachname
}
Person.prototype.getName = function(){
    return this.vorname + " " + this.nachname;
};

function Schueler(vorname, nachname, schule){
    this.vorname = vorname,
    this.nachname=nachname,
    this.schule= schule
}
Schueler.prototype.__proto__ = Person.prototype;
let erik = new Schueler("Erik", "Müller", "HTL Leonding");
console.log(erik.getName());