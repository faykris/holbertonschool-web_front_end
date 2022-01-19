class studentHogwarts {
    privateScore = 0;
    name = null;

    #changeScoreBy(points) {
        this.privateScore += points;
    }

    setname(newName) {
        this.name = newName;
    }

    rewardStudent() {
        this.#changeScoreBy(1);
    }

    penalizeStudent() {
        this.#changeScoreBy(-1);
    }

    getScore() {
        return this.name + ": " + this.privateScore;
    }
}

let harry = new studentHogwarts();
harry.setname('Harry')
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore())

let draco = new studentHogwarts();
draco.setname('Draco')
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
