 function createCharacter(config){
    // Default values

    const defaults={
        name:"Unknown",
        health:100,
        maxHealth:100,
        level:1,
        experience:0,
        attackPower:10,
        defense:5
    };

    // Merge defaults with provided config

    const settings={...defaults, ...config};

    return {
        ...settings,

        attack(target){
            const damage=Math.max(0,this.attackPower-target.defense);
            return `${this.name} deals ${damage} damage to ${target.name} !`;
        },

        heal(amount){
            this.health = Math.min(this.maxHealth,this.health + amount);
            return `${this.name} headed to ${this.health} health.`;
        },

        gainExperience(amount){
            this.experience +=amount;
            if(this.experience >=this.level*10){
                this.level++;
                this.experience=0;
                this.attackPower +=5;
                return `${this.name} leveled up to ${this.level}!`;
            }
            return `${this.name} gained ${amount} XP.`;
        }
    }
 }

//  Create characters with different configurations

const warrior=createCharacter({
    name:"Warrior",
    health:150,
    maxHealth:150,
    attackPower:20,
    defense:10
});


const mage=createCharacter({
    name:"Mage",
    health:80,
    maxHealth:80,
    attackPower:30,
    defense:3
});

// Only override what you need

const villager=createCharacter({name:"villager"});

console.log(mage.attack(villager))
console.log(villager.attack(mage))
console.log(villager.gainExperience(500))