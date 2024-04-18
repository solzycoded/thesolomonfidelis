const skills = () => {
    let frontEndList = [
        {skill: "HTML", level: 90},
        {skill: "CSS", level: 80},
        {skill: "Bootstrap", level: 80},
        {skill: "TailwindCSS", level: 30},
        {skill: "Javascript", level: 75},
        {skill: "Vue.js", level: 40},
        {skill: "Reactjs", level: 40},
        {skill: "Alpine.js", level: 60},
        {skill: "jQuery", level: 80},
    ];

    let backEndList = [
        {skill: "PHP", level: 80},
        {skill: "Nodejs", level: 30},
        {skill: "Express.js", level: 30},
        {skill: "Laravel", level: 70},
        {skill: "MySQL", level: 80},
        {skill: "SQL", level: 80},
        {skill: "MongoDB", level: 10},
        {skill: "SQLLite", level: 20},
        {skill: "Microsoft Azure Cloud Hosting", level: 20},
    ];

    let programmingLanguages = [
        {skill: "Java", level: 50},
        {skill: "Python", level: 40},
        {skill: "C#", level: 40},
        {skill: "C++", level: 30},
        {skill: "Extensible Markup Language (XML)", level: 30}
    ];

    let tools = [
        {skill: "Android Studio", level: 40},
        {skill: "Visual Studio Code", level: 60},
        {skill: "WAMP Server", level: 70},
        {skill: "GITHUB and GIT", level: 60},
        {skill: "Azure Devops tool", level: 50},
    ];

    let others = [
        {skill: "AGILE SCRUM TECHNIQUE", level: 40},
        {skill: "Object Oriented Programming", level: 70},
        {skill: "GITHUB and GIT", level: 60},
        {skill: "CI/CD Pipeline", level: 20},
    ];

    return {frontEndList, backEndList, programmingLanguages, tools, others};
}

const portfolio = () => {
    const portfolioDetails = [
        {
            name: "Bidwars",
            type: "An auction web application",
            description: "A company called, auctioneer, wants an online version of their auction system. They want more buyers, basically anyone that's looking to sell off certain items. They only sell items in these categories (Antiques, Vintage Cars, Furniture, Art, and Electronics). They have 2 types of clients, sellers, specific clients that have items for sale and buyers, interested clients that are looking to acquire certain items. They host in-house auctions for these items on a specific date and at a specific time, they have about 3 rooms with similar items, in the same group and each interested client (buyer) can only be in a room at a time and must be present for the bidding period. Their buyers operate based on anonymity and the bidding only lasts for 2 hours. At the end of each bidding period, most of the items would have potential buyers and both the buyer and the seller, goes home happy. Auctioneer needs a developer that can simulate their auction process on an online platform. A single page web application has been developed, called “bidwars”, this web application simulates the behaviour described above and delivers value to both interested buyers and sellers. ",
            frontEnd: "HTML, CSS, Bootstrap, Vue.js, Javascript",
            backEnd: "Node.js, MySQL, SQL",
            deployment: {deployed: "yes", where: "microsoft azure", details: "a CI/CD pipeline was created with the github repository for the project"},
            applicationType: "Single Page Application",
            images: [
                {src: "bidwars/home-top.png", title: "Home page", caption: ""},
                {src: "bidwars/home-bottom.png", title: "Home page", caption: ""},
                {src: "bidwars/auction-list-admin.png", title: "Auction List", caption: ""},
                {src: "bidwars/category.png", title: "Category", caption: ""},
                {src: "bidwars/item-details.png", title: "Item Details", caption: ""},
                {src: "bidwars/room.png", title: "Room", caption: ""},
                {src: "bidwars/sell-an-item.png", title: "Sell an Item", caption: ""},
                {src: "bidwars/set-auction-admin.png", title: "Set Auction", caption: ""},
            ],
            url: "",
            timeFrame: "2 months",
            repository: 'https://github.coventry.ac.uk/fideliss/bidwars'
        },
    ]

    return portfolioDetails;
}

const interests = () => {
    let data = [
        {name: "Movies", about: "i always enjoy a good story, played out well in a movie. i enjoy korean-time pieces, anime and fantasy the most."},
        {name: "Music", about: "music excites my soul. i don't like coding, without it. i mostly enjoy listening to nigerian artists, like Adekunle Gold and Burna boy."},
        {name: "Boxing", about: "muhammed ali, iron mike tyson, francis nnganou. all of this cats make me want to be physically fit."},
        {name: "Psychology", about: "i enjoy delving into the mind, what makes us tick and i've read books, like \"The art of thinking clearly by Robert Dobelli\", just to pursue my interest."},
        {name: "Chess", about: "i started playing, in my first year of Uni, back in Lagos Nigeria. I enjoyed playing it, and continued till i graduated, in 2019. I've not really been active in recent times, but... it's still an interest of mine."},
    ]

    return data;
}

export default {
    portfolio,
    skills,
    interests,
}