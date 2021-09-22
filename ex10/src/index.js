function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            tittle: "Piano Man",
            relese_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Jilly Boel",
            tittle: "Miano Pan",
            relese_year: 1937,
            format: {
                1: "DVD",
                2: "CD",
                3: "HDD"
            }
        }

    };
    return myMusic;
}
myFunction()[2];

module.exports = myFunction;