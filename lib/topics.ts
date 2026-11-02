export interface TopicSection {
  heading: string;
  body: string;
}

export interface Topic {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  tags: string[];
  description: string;
  image: string;
  sections: TopicSection[];
  keyFacts: string[];
  problems: Array<{ question: string; hint: string }>;
  relatedIds: string[];
}

// ── All topics data (add new topics here or move to JSON files) ──────────────
export const TOPICS: Topic[] = [
  {
    "id": "number-theory",
    "title": "Number Theory",
    "tagline": "Study divisibility, prime factorization, and remainders.",
    "icon": "",
    "level": "All Levels",
    "tags": [
      "primes",
      "divisibility",
      "clocks"
    ],
    "description": "Study divisibility, prime factorization, and remainders.",
    "image": "/images/math/number-theory.svg",
    "sections": [
      {
        "heading": "Factors and primes",
        "body": "A factor divides an integer with no remainder. The factors of 12 are 1, 2, 3, 4, 6, and 12. A prime number is an integer greater than 1 with exactly two positive factors. For example, 12 = 2 × 2 × 3 expresses 12 as a product of primes."
      },
      {
        "heading": "Remainders",
        "body": "Dividing 17 by 5 gives a quotient of 3 and a remainder of 2: 17 = 3 × 5 + 2. Modular arithmetic groups integers by their remainders. On a 12-hour clock, moving four hours forward from 10 reaches 2."
      },
      {
        "heading": "Common multiples",
        "body": "A common multiple is divisible by each of the given integers. The least common multiple of 4 and 6 is 12. Prime factorization helps identify which factors are needed: 4 = 2² and 6 = 2 × 3, so their least common multiple is 2² × 3."
      }
    ],
    "keyFacts": [],
    "problems": [
      {
        "question": "Is the product of two odd integers always odd? Explain your reasoning.",
        "hint": "Write the integers as 2a + 1 and 2b + 1, then multiply."
      },
      {
        "question": "Find the least positive integer divisible by 1, 2, 3, 4, and 5.",
        "hint": "Include enough prime factors to make 4, 3, and 5."
      },
      {
        "question": "If today is Tuesday, what day will it be in 100 days?",
        "hint": "Find the remainder when 100 is divided by 7."
      }
    ],
    "relatedIds": [
      "cryptography",
      "combinatorics"
    ]
  },
  {
    "id": "graph-theory",
    "title": "Graph Theory",
    "tagline": "Represent connections with vertices and edges, then study paths and counting problems.",
    "icon": "",
    "level": "Beginner",
    "tags": [
      "networks",
      "maps",
      "friends"
    ],
    "description": "Represent connections with vertices and edges, then study paths and counting problems.",
    "image": "/images/math/graph-theory.svg",
    "sections": [
      {
        "heading": "Vertices and edges",
        "body": "A graph consists of vertices and edges joining pairs of vertices. A vertex can represent a place or person, and an edge can represent a road or connection. The drawing records which vertices are connected; the exact position of each dot is usually unimportant."
      },
      {
        "heading": "Degree and paths",
        "body": "The degree of a vertex counts the edges incident to it. A path follows edges between vertices. When studying a route, distinguish visiting each vertex from using each edge: these are different requirements."
      },
      {
        "heading": "Counting connections",
        "body": "In a complete graph, every pair of distinct vertices is joined by an edge. With n vertices there are n(n - 1)/2 edges, since each of the n vertices connects to n - 1 others and each edge has been counted twice."
      }
    ],
    "keyFacts": [],
    "problems": [
      {
        "question": "Can you draw a square with both diagonals in one continuous stroke, using each edge exactly once?",
        "hint": "Count the odd-degree vertices. A connected graph with a trail using every edge has zero or two odd-degree vertices."
      },
      {
        "question": "Five people each shake hands with every other person once. How many handshakes occur?",
        "hint": "Count pairs, or add 4 + 3 + 2 + 1."
      },
      {
        "question": "How many edges does a complete graph with six vertices have?",
        "hint": "Use n(n - 1)/2, or draw the graph and count."
      }
    ],
    "relatedIds": [
      "topology",
      "combinatorics"
    ]
  },
  {
    "id": "topology",
    "title": "Topology",
    "tagline": "Study properties of shapes and surfaces that remain under continuous deformation.",
    "icon": "",
    "level": "Intermediate",
    "tags": [
      "shapes",
      "dimensions",
      "stretching"
    ],
    "description": "Study properties of shapes and surfaces that remain under continuous deformation.",
    "image": "/images/math/topology.svg",
    "sections": [
      {
        "heading": "Continuous deformation",
        "body": "In an introductory model of topology, a shape can be stretched or bent while its connections remain intact. Lengths and angles can change. Cutting a surface or joining separate parts changes the problem because it can alter how points are connected."
      },
      {
        "heading": "Loops and connectedness",
        "body": "A circle is one connected loop. Two separate circles have two connected components. These examples show why connectedness matters when comparing shapes. A drawing may look different after stretching while preserving its connections."
      },
      {
        "heading": "The Möbius strip",
        "body": "Give a paper strip one half twist and join its ends. This models a Möbius strip, a surface with one side and one boundary component. Trace along the middle of the strip to observe how the path continues around the joined band."
      }
    ],
    "keyFacts": [],
    "problems": [
      {
        "question": "Make a paper Möbius strip. What happens when you cut along its center line?",
        "hint": "Draw the center line before cutting. Compare the number of bands and twists before and after."
      },
      {
        "question": "How many connected components are in three separate circles?",
        "hint": "Count groups that can be reached without jumping between shapes."
      },
      {
        "question": "Can a circle be continuously stretched into an ellipse without cutting it?",
        "hint": "Consider whether any points need to be disconnected or identified."
      }
    ],
    "relatedIds": [
      "graph-theory",
      "fractals"
    ]
  },
  {
    "id": "game-theory",
    "title": "Game Theory",
    "tagline": "Analyze choices by considering the rules, available moves, and other players’ responses.",
    "icon": "",
    "level": "Beginner",
    "tags": [
      "strategy",
      "winning",
      "logic"
    ],
    "description": "Analyze choices by considering the rules, available moves, and other players’ responses.",
    "image": "/images/math/game-theory.svg",
    "sections": [
      {
        "heading": "Specify the rules",
        "body": "A mathematical game needs clear rules: who moves, which moves are allowed, and how the outcome is decided. In a counter game, players might take one, two, or three counters per turn, with the last counter determining the winner."
      },
      {
        "heading": "Work backward",
        "body": "If four counters remain and the next player may take one, two, or three, the other player can take the rest. The same reasoning applies to eight and twelve counters. Working backward from the end can reveal useful positions."
      },
      {
        "heading": "Other players’ choices",
        "body": "When both players choose independently, the best response can depend on the other player’s strategy. A Nash equilibrium is a set of strategies where no player can improve their own payoff by changing only their own strategy."
      }
    ],
    "keyFacts": [],
    "problems": [
      {
        "question": "Start with 15 counters. Players take one, two, or three per turn, and taking the last counter wins. What should the first player take?",
        "hint": "Try to leave a multiple of four."
      },
      {
        "question": "If an opponent always plays rock, which move wins rock-paper-scissors?",
        "hint": "Apply the game’s rule for paper against rock."
      },
      {
        "question": "In the counter game, why does leaving four counters guarantee a win on your next turn?",
        "hint": "List each amount the opponent can take and your response."
      }
    ],
    "relatedIds": [
      "combinatorics",
      "probability"
    ]
  },
  {
    "id": "fractals",
    "title": "Fractals & Chaos",
    "tagline": "Construct patterns by repeating a rule and compare their shapes at different scales.",
    "icon": "",
    "level": "Beginner",
    "tags": [
      "infinity",
      "patterns",
      "nature"
    ],
    "description": "Construct patterns by repeating a rule and compare their shapes at different scales.",
    "image": "/images/math/fractals.svg",
    "sections": [
      {
        "heading": "Repeat a construction",
        "body": "Begin with an equilateral triangle. Join the midpoints of its sides and remove the central triangle. Repeat the same step on each of the three remaining triangles. The repeated construction approaches a Sierpinski triangle."
      },
      {
        "heading": "Count each stage",
        "body": "After one removal, three smaller triangles remain. After two, there are nine; after three, twenty-seven. Each step multiplies the number of triangles by three and halves their side length. Track count and scale separately."
      },
      {
        "heading": "Rules and sensitivity",
        "body": "Iteration means using an output as the input for another application of a rule. Some systems are sensitive to small changes in their starting values. To compare two such sequences, keep the rule fixed and vary only the initial value."
      }
    ],
    "keyFacts": [],
    "problems": [
      {
        "question": "How many small triangles remain after four stages of the Sierpinski construction?",
        "hint": "Start at one triangle and multiply the count by three at each stage."
      },
      {
        "question": "At each stage, a triangle’s side length is halved. What fraction of the original side length remains after three stages?",
        "hint": "Multiply 1/2 by itself three times."
      },
      {
        "question": "The rule is “double the number, then add 1.” Starting at 2, find the next three outputs.",
        "hint": "Use each output as the next input."
      }
    ],
    "relatedIds": [
      "topology",
      "probability"
    ]
  },
  {
    "id": "combinatorics",
    "title": "Combinatorics",
    "tagline": "Count arrangements, selections, and possible outcomes without listing every case.",
    "icon": "",
    "level": "Beginner",
    "tags": [
      "counting",
      "combinations",
      "puzzles"
    ],
    "description": "Count arrangements, selections, and possible outcomes without listing every case.",
    "image": "/images/math/combinatorics.svg",
    "sections": [
      {
        "heading": "Multiply choices",
        "body": "If a meal offers three main dishes and two drinks, each main dish can be paired with either drink. There are 3 × 2 = 6 possible pairs. This multiplication rule applies when each first choice has the stated number of second choices."
      },
      {
        "heading": "Decide whether order matters",
        "body": "Choosing a team and arranging people in a line are different counting tasks. The pair Ana and Ben is the same team as Ben and Ana, but those names represent two distinct orders in a line."
      },
      {
        "heading": "The pigeonhole principle",
        "body": "If more objects are placed into boxes than there are boxes, at least one box contains more than one object. For thirteen people and twelve birth months, at least two people must share a birth month."
      }
    ],
    "keyFacts": [],
    "problems": [
      {
        "question": "Make a three-color stripe from four available colors without repeating a color. How many orders are possible?",
        "hint": "There are four choices for the first color, three for the second, and two for the third."
      },
      {
        "question": "How many ways can five distinct people stand in a line?",
        "hint": "Count the choices for each position in order."
      },
      {
        "question": "Why must at least two people in a group of thirty share a birth month?",
        "hint": "Treat each month as a box and apply the pigeonhole principle."
      }
    ],
    "relatedIds": [
      "number-theory",
      "probability"
    ]
  },
  {
    "id": "cryptography",
    "title": "Cryptography",
    "tagline": "Use simple ciphers to study encoding, decoding, and the limitations of a secret key.",
    "icon": "",
    "level": "Intermediate",
    "tags": [
      "hacking",
      "secrets",
      "passwords"
    ],
    "description": "Use simple ciphers to study encoding, decoding, and the limitations of a secret key.",
    "image": "/images/math/cryptography.svg",
    "sections": [
      {
        "heading": "A shift cipher",
        "body": "A Caesar cipher shifts each letter by a fixed number of places in the alphabet. With a shift of three, A becomes D and B becomes E. After Z, the alphabet wraps around. This turns MATH into PDWK."
      },
      {
        "heading": "Decode a message",
        "body": "To reverse a shift of three, move each encoded letter three places backward. The number of places is the key. Trying each possible shift shows why a small set of possible keys is easy to search."
      },
      {
        "heading": "Use a model carefully",
        "body": "A classroom shift cipher illustrates a reversible rule, but its small key space makes it unsuitable for protecting private information. Use it for puzzles and for learning how an encoding rule can be reversed."
      }
    ],
    "keyFacts": [],
    "problems": [
      {
        "question": "Encode CAT with a Caesar shift of three.",
        "hint": "Move each letter three places forward, wrapping around after Z."
      },
      {
        "question": "Decode KHOOR when the key is a forward shift of three.",
        "hint": "Move each letter three places backward."
      },
      {
        "question": "How many different shifts are possible for a 26-letter alphabet, including no shift?",
        "hint": "List the possible remainders modulo 26."
      }
    ],
    "relatedIds": [
      "number-theory",
      "combinatorics"
    ]
  },
  {
    "id": "probability",
    "title": "Probability & Statistics",
    "tagline": "Calculate probabilities from equally likely outcomes and distinguish averages from guarantees.",
    "icon": "",
    "level": "Beginner",
    "tags": [
      "luck",
      "predictions",
      "data"
    ],
    "description": "Calculate probabilities from equally likely outcomes and distinguish averages from guarantees.",
    "image": "/images/math/probability.svg",
    "sections": [
      {
        "heading": "Count outcomes",
        "body": "For equally likely outcomes, divide the number of favorable outcomes by the total number of outcomes. A fair six-sided die has three even faces, so an even result has probability 3/6 = 1/2."
      },
      {
        "heading": "Independent trials",
        "body": "Independent trials do not change one another’s probabilities. After several heads on a fair coin, the next flip still has probability 1/2 of tails. Earlier results do not make a particular next result due."
      },
      {
        "heading": "Expected count",
        "body": "In twenty independent flips of a fair coin, the expected number of heads is twenty times one-half, or ten. That is an average across repeated experiments, not a requirement for every individual set of flips."
      }
    ],
    "keyFacts": [],
    "problems": [
      {
        "question": "A bag contains three red marbles and two blue marbles. If each marble is equally likely to be selected, what is the probability of blue?",
        "hint": "Divide the number of blue marbles by the total."
      },
      {
        "question": "What is the probability of rolling a number greater than four on a fair six-sided die?",
        "hint": "Count the favorable faces."
      },
      {
        "question": "A fair coin lands heads five times in a row. What is the probability of heads on the next independent flip?",
        "hint": "Use independence, rather than the length of the previous run."
      }
    ],
    "relatedIds": [
      "combinatorics",
      "game-theory"
    ]
  }
];

export function getAllTopics(): Topic[] {
  return TOPICS;
}

export function getTopicById(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

export function getRelatedTopics(id: string): Topic[] {
  const topic = getTopicById(id);
  if (!topic) return [];
  return topic.relatedIds.map((rid) => getTopicById(rid)).filter(Boolean) as Topic[];
}

export function generateTopicStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}