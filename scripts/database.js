const fishDatabase = {
    fish: [
        {
            name: "Jimmy",
            image: "https://static3.depositphotos.com/1001009/194/i/950/depositphotos_1945458-stock-photo-coral-fish.jpg",
            species: "Cartoon fish",
            length: "15 inches",
            location: "Atlantis",
            food: "Chocolate",
        },
        {
            name: "Jorge",
            image: "https://i.natgeofe.com/n/18708334-6fce-40b5-ade6-a7e2db7035f2/01-goldfish-nationalgeographic_1567132.jpg?w=1200",
            species: "Goldfish",
            length: "20 inches",
            location: "Mexico",
            food: "Gorditas",
        },
        {
            name: "Susan",
            image: "https://elhstalon.net/wp-content/uploads/2019/09/Blobfish.jpg",
            species: "Blobfish",
            length:  "25 inches",
            location: "Fiji" ,
            food: "French Fries",
        },        
        {
            name: "Pierre",
            image: "https://thumbs.dreamstime.com/b/photo-prepared-blowfish-against-blurred-background-front-view-blow-fish-porcupine-fish-155353417.jpg",
            species: "Blowfish",
            length: "5 inches",
            location: "France",
            food: "Bagettes",
        },       
        {
            name: "Jane",
            image: "https://seahistory.org/wp-content/uploads/swordfish-2.jpg",
            species: "Swordfish",
            length: "40 inches",
            location: "Thailand",
            food: "Pad Thai",
        }
    ]    
}

export const getFishes = () => {
    return [...fishDatabase.fish]
};