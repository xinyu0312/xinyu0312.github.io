export const ProjectData=[
    {
      id:0,
      title:"Tic-Tac-Toe Matryoshka(User VS AI)",
      main:  <ul>
      <li>Implemented MinMax Algorithm in the Tic-Tac-Toe game in python.</li>
      <li>Displayed the game(GUI) in Tkinter.</li>
      <li>AI will determine the best next step after user put a piece.</li>
      <li>Game Rule 
        <ul>
        <li>Matryoshka Tic-Tac-Toe is an advanced mode of normal tic-tac-toe.</li>
        <li>Player needs to line up 3 in a row to win, either horizontally, vertically, or diagonally.</li>
        <li>(BIG EATS SMALL) Player can gobble up his opponent’s pieces to take their place if the player’s piece is larger than his opponent’s.</li>
         
         </ul>
        </li>
    </ul>,
      tags:["Python", "AI", "Tkinter"],
      period: "Nov 2022",
      slides:"https://docs.google.com/presentation/d/1cL5lPQbh0u1hCw9d8C5aHVErlJ8YU6v3SQKRyyWxmj4/edit?usp=sharing",
      github:"https://github.com/xinyu0312/Academic-Integrity",        
      image:  require("../../assets/tic.png"),
      alt: "Image demo for Tic-Tac-Toe Matryoshka Project: each side of user has 6 pieces of Matryoshka in different size to play. "
  },
      {
        id:1,
        title:"Snake Game",
        main:  <ul>
        <li>Using the particle system to build Snake Game in TypeScript.</li>
        <li>Supported normal mode(use arrow key to direct the sanke) and advance mode(use mouse to direct the snake to eat the apple).</li>
      </ul>,
        tags:["TypeScript"],
        period: "Oct 2022",
        demo:"https://drive.google.com/file/d/1y9rF6wXz-5YF5CDvdMs9wFjHy2iOX6nw/view?usp=sharing",
        github:"https://github.com/xinyu0312/Academic-Integrity",        
        image:  require("../../assets/snake-game.png"),
        alt:"Image demo for snake game: snake in particles runs on a green background. Top-Right bar has the contoller to change the frame size, snake base color, snake speed."
    },
    {
        id:2,
        title:"Website Development",
        main: <ul>
        <li>Built a responsive website with interactivity for an actual client that supports mobile and desktop devices using HTML, CSS, and JavaScript.</li>
        <li>Achieved interactivities include Carousel, Tab, Hamburger menu, etc.</li>
      </ul>,
        tags:["HTML", "Javascript", "CSS"],
        period: "Nov 2021 - Dec 2021",
        link:"https://arts-in-prisons.pma.cornell.edu/",
        github:"https://github.coecis.cornell.edu/info1300-2021fa/blue-cheetah-project",
        image:require("../../assets/website.png"),
        alt:"A screenshot of the responsive website Xinyu and her team created. The website is about INCARCERATION IN THE ARTS AT CORNELL."
    },

    {
        id:3,
        title:"Embedded Simon",
        main: <ul>
        <li>Built Simon Memory Game in C as an Embedded System with the collaboration of two partners.</li>
        <li>The program connected user’s input on the touch slider of the board FRDM-KL25Z and signaled the RGB LED
on the board.</li>
      </ul>,
        tags:["C", "Embedded System"],
        period: "May 2021",
        demo:"https://www.youtube.com/watch?v=uA88JC_iujc",
        github:"https://github.coecis.cornell.edu/ece3140-sp2021/bvv4-ww333-xs248",
        written:"https://pages.github.coecis.cornell.edu/ece3140-sp2021/bvv4-ww333-xs248/",
        image:require("../../assets/simon.png"),
        alt:"Xinyu's partner is holding the board FRDM-KL25Z and shows how to play Embedded Simon on the board."
    },

    {
        id:4,
        title:"Simulating Evolving Artificial Life",
        main: <ul>
        <li>Simulated a simple world of critters that wander around, eat food, reproduce, and evolve in Java with the
collaboration of two partners.</li>
        <li>Implemented a parser and interpreter for the critter language.</li>
        <li>Built a graphical user interface (GUI) that enables a user to take control of individual critters.</li>
        <li>Built up server and client to enable multi-device login with different permission levels in thread-safe code.</li>
      </ul>,
        tags:["Java","JavaScript", "API"],
        period: "Oct 2019 - Dec 2019",
        demo:"https://drive.google.com/file/d/1k1rzg1ANCUsI3hZTFh0bXeCvn3ysB2qs/view?usp=sharing",
        github:"https://github.com/xinyu0312/Academic-Integrity",
        image: require("../../assets/critters.png"),
        alt: "Critters are representing in little circles and living on honeycomb lattice。"
    }
];