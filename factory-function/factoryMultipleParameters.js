 function createEnemy(name,health,attackPower){
    return{
        name,
        health,
        attackPower,
        isAlive:true,

        attack(target){
            return `${this.name} attacks ${target.name} for ${this.attackPower}`
        },

        takeDamage(amount){
            this.health -=amount;
            if(this.health <=0){
                this.health = 0;
                this.isAlive=false;
                return `${this.name} has been defeated !`;
            }
            return `${this.name} has ${this.health} health remaining.`;
        }

    }
 }


 const goblin=createEnemy("Goblin",50,10);
 const dragon = createEnemy("Dragon",500,50);
 const boss=createEnemy("Boss",1000,100);

 console.log(goblin.attack(dragon));
 console.log(dragon.takeDamage(100))