function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Celine Dion",
            title: "Courage",
            release_year: 2019,
            id: 100,
            formats: {
                1: "CD",
                2: "DVD",
                3: "LP"
            },
            gold: true

            // Add a record here

        }
    };

    return myMusic;

}

myFunction()[2];

module.exports = myFunction;