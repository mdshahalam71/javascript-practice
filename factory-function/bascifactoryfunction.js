 function createPlayer(name){
    return{
        name:name,
        health:100,
        level:1,
        attack(){
            return `${this.name} attacks for ${10 + this.level*2} damage`;
        },
        takeDamage(amount){
            this.health -=amount;
            if(this.health <=0){
                return `${this.name} has been defeated`
            }
            return `${this.name} has ${this.health} health remaining`
        }
    }
 }

 const alice=createPlayer("alice");
 const bob=createPlayer("Bob");

 console.log(alice.attack())
 console.log(alice.takeDamage(30))