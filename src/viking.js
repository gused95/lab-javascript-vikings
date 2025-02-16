// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(theDamage){
        this.health -=  theDamage
        return
    }
  }
  
  // Viking
  class Viking extends Soldier {
    constructor(name,health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage){
        this.health -=  theDamage
        if (this.health > 0) {
            return (`${this.name} has received ${theDamage} points of damage`)
        } else if (this.health <= 0) {
            return (`${this.name} has died in act of combat`)
        }
    }
    battleCry(){
        return ("Odin Owns You All!")
    }
  }
  
  // Saxon
  class Saxon extends Soldier{
    receiveDamage(theDamage){
        this.health -=  theDamage
        if (this.health > 0) {
            return (`A Saxon has received ${theDamage} points of damage`)
        } else if (this.health <= 0) {
            return (`A Saxon has died in combat`)
        }
    }
  }
  
  // War
  class War {
    vikingArmy = []
    saxonArmy = []

    addViking(Viking){
        this.vikingArmy.push(Viking)
        return
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
        return
    }
    vikingAttack(){
        Saxon.receiveDamage(Viking.strength)
        
    }
    saxonAttack(){

    }
    showStatus(){

    }
  }