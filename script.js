// Fun facts data categorized
const facts = {
    science: [
        "The human body contains around 37.2 trillion cells.",
        "Water can boil and freeze at the same time under the right conditions, known as the triple point.",
        "Bananas are radioactive due to the presence of potassium-40.",
        "Venus is the only planet that spins clockwise.",
        "A day on Venus is longer than a year on Venus.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still preserved.",
        "Octopuses have three hearts and blue blood.",
        "Butterflies taste with their feet.",
        "The Eiffel Tower can be 15 cm taller during the summer when the iron heats up and expands.",
        "A single lightning bolt unleashes as much energy as blowing up a ton of TNT."
    ],
    history: [
        "The Great Wall of China is longer than the distance between London and Beijing.",
        "Cleopatra lived closer in time to the moon landing than to the construction of the Great Pyramid of Giza.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "The first recorded instance of the plague was in the Byzantine Empire in 541 AD.",
        "Julius Caesar was kidnapped by pirates at the age of 25.",
        "The longest reigning monarch in history was Louis XIV of France, who reigned for 72 years and 110 days.",
        "Before becoming the leader of the Soviet Union, Joseph Stalin was a poet.",
        "The first proposal to use daylight saving time was by Benjamin Franklin.",
        "The Aztec Empire was one of the first societies that required education for all its children, regardless of gender or social status.",
        "During the 17th century, almost half of the Danish population was wiped out by the Bubonic Plague."
    ],
    popCulture: [
    "The Beatles hold the record for the most number-one hits on the Hot 100 chart.",
    "Michael Jackson's 'Thriller' is the best-selling album of all time.",
    "The first music video shown on MTV was 'Video Killed the Radio Star' by The Buggles.",
    "The highest-grossing film of all time is 'Avatar', directed by James Cameron.",
    "Marilyn Monroe was originally cast as the lead in 'Breakfast at Tiffany's', but Audrey Hepburn played the iconic role of Holly Golightly.",
    "The longest-running Broadway show is 'The Phantom of the Opera'.",
    "The first superhero ever created was Superman, appearing in Action Comics #1 in 1938.",
    "Elvis Presley was originally blonde before becoming famous for his black hair.",
    "The first novel ever written on a typewriter was 'Tom Sawyer'.",
    "The original name of the Google search engine was 'BackRub'."
    ],
    technology: [
        "The first email was sent by Ray Tomlinson to himself in 1971.",
        "The first website was dedicated to information about the World Wide Web and was published on August 6, 1991.",
        "The first portable computer was the Osborne 1, which weighed 24 pounds.",
        "The first domain name ever registered was Symbolics.com.",
        "The first Google Doodle was a Burning Man stick figure that appeared on August 30, 1998.",
        "The first YouTube video was uploaded on April 23, 2005, and is called 'Me at the zoo'.",
        "The first photo posted on Instagram was of a dog near a taco stand, posted by its co-founder Kevin Systrom.",
        "The first smartphone was IBM’s Simon, introduced in 1992.",
        "The first computer virus was created in 1983 and was called the 'Elk Cloner'.",
        "The first GPS satellite was launched in 1978."
    ],
    anime: [
        "Spirited Away was the first anime film to win an Academy Award.",
        "Pokemon is the highest-grossing media franchise globally, beating out other franchises such as Star Wars.",
        "The longest-running anime series is 'Sazae-san', which has been airing since 1969.",
        "The first color anime feature film was 'Hakujaden', released in 1958.",
        "The highest-grossing anime film of all time is 'Demon Slayer: Mugen Train'.",
        "The first anime to be broadcast outside Japan was 'Astro Boy'.",
        "The anime character with the most appearances in video games is Goku from 'Dragon Ball'.",
        "The most expensive anime film ever made is 'The Tale of the Princess Kaguya', which cost over $49 million to produce.",
        "The anime 'Neon Genesis Evangelion' features religious symbolism from Christianity and Judaism.",
        "The first anime adaptation of 'Naruto' consists of 220 episodes."
    ]
};

// Current selected category (default is none)
let selectedCategory = null;

// Function to fetch a random fun fact for the selected category
function fetchFunFact() {
    if (!selectedCategory) {
        document.getElementById('factDisplay').innerText = "Please select a category first!";
        return;
    }
    const categoryFacts = facts[selectedCategory];
    const randomIndex = Math.floor(Math.random() * categoryFacts.length);
    document.getElementById('factDisplay').innerText = categoryFacts[randomIndex];
}

// Add event listeners to the category buttons
const buttons = document.querySelectorAll('#buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove "active" class from all buttons and set it for the clicked button
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update the selected category based on the clicked button's data-category attribute
        selectedCategory = button.getAttribute('data-category');
    });
});

// Add event listener to the "Generate Fun Fact" button
document.getElementById('generateFact').addEventListener('click', fetchFunFact);
