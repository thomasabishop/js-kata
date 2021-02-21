arrayOne = ["alpha", "beta", "gamma", "delta"];
arrayTwo = [1, 2];

remoteObject = {
  first: "alpha",
  second: "beta",
  third: "gamma",
  fourth: "delta",
};
const combined = {};

arrayOne.map((val, i) => (combined[val] = arrayTwo[i]));
console.log(combined);

console.log(combined[remoteObject.third]);

testObject = [
  {
    title: "Code Stats",
    description:
      "An interactive dashboard built with React.js that hooks into my IDE and GitHub account and records my coding activity and source-control over time.",
    image: "sqn",
  },
  {
    title: "thomas-bishop.co.uk",
    description:
      "My professional website and blog built with Gatsby.js and GraphQL.",
    image: "octocat",
  },
  {
    title: "Sine Qua Non",
    description:
      "A Node.js, Webpack and Gulp-based boilerplate which I use as my foundation for static sites and simple applications. It incorporates asset-optimsation, transpilation, live-reloading, server deployment and various other essentials.",
    image: "octocat",
  },
  {
    title: "Thomas's React Learning Lab",
    description:
      "What it says on the tin: a personal sandbox environment for developing my understanding of React.js and experimenting with new features.",
    image: "sqn",
  },
];

let a = testObject.map((x) => x.image);
//console.log(a);
