function skillsMember() {
    return {
        name: 'John',
        age: 32,
        skills: ['HTML', 'CSS', 'JS'],
        showSkills: function () {
            this.skills.forEach(function (skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
}
