export const activities = [
  {
    id: "counter-strategy", title: "Find a winning strategy", image: "/images/math/game-theory.svg",
    alt: "Fifteen counters arranged in three rows", level: "Whole-number arithmetic", materials: "15 counters or small pieces of paper; a partner",
    introduction: "Start with 15 counters. Two players take turns removing one, two, or three. Whoever takes the last counter wins.",
    questions: [
      "Play three rounds. Record the number of counters left after each turn. What do you notice?",
      "Suppose there are 4 counters left at the start of your turn. Can you guarantee a win? Explain.",
      "Which starting totals from 1 to 15 let the first player guarantee a win?",
      "Find a winning first move from 15. Explain how to respond to every possible move your partner makes afterward.",
      "Change the rules so players may take one, two, three, or four counters. Which starting totals now make the first player lose against perfect play?",
    ],
    answers: [
      "Results vary. Look for totals that let a player control what remains, rather than only counting wins.",
      "No. Taking 1, 2, or 3 leaves 3, 2, or 1. The other player can take the rest.",
      "1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15. Multiples of 4 are losing positions against perfect play.",
      "Take 3 to leave 12. After the other player takes k counters, take 4 − k. Each pair of turns removes 4, leaving 8, then 4, then 0 on your turn.",
      "Multiples of 5: leave one of these totals after your turn, then make each pair of turns remove 5 counters.",
    ], guide: "/topics/game-theory", guideTitle: "Game theory",
  },
  {
    id: "pascal-patterns", title: "Patterns in Pascal’s triangle", image: "/images/math/combinatorics.svg",
    alt: "The first six rows of Pascal’s triangle", level: "Addition and patterns", materials: "Pencil and paper",
    introduction: "Start with a single 1 in row 0. Each new row starts and ends with 1. Every number between them is the sum of the two numbers immediately above it.",
    questions: [
      "Write rows 0 through 6. Leave space between the numbers so the addition rule is clear.",
      "Add the numbers in each row. Describe the pattern and predict the total in row 7.",
      "Find the sequence 1, 3, 6, 10, 15 along a diagonal. What is the next number? Explain how the differences change.",
      "Four coins are tossed. Use row 4 to count the outcomes with exactly two heads. List those outcomes to check.",
      "Explain why the numbers in every row read the same from left to right and right to left.",
    ],
    answers: [
      "Rows: 1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1; 1 5 10 10 5 1; 1 6 15 20 15 6 1.",
      "The totals are 1, 2, 4, 8, 16, 32, 64. Each doubles, so row 7 totals 128. In forming the next row, each entry contributes to two entries below it.",
      "21. The differences are 2, 3, 4, 5, followed by 6. These are triangular numbers.",
      "6 outcomes: HHTT, HTHT, HTTH, THHT, THTH, TTHH. Row 4 is 1 4 6 4 1; its middle entry counts choices of two head positions out of four.",
      "The first row is symmetric. Adding adjacent pairs in a symmetric row produces matching values on opposite sides of the next row; the two outer entries are both 1.",
    ], guide: "/topics/combinatorics", guideTitle: "Combinatorics",
  },
  {
    id: "shift-ciphers", title: "Encode a message", image: "/images/math/cryptography.svg",
    alt: "An alphabet shifted three places, changing MATH to PDWK", level: "Alphabet patterns and remainders", materials: "Pencil and paper",
    introduction: "A shift cipher replaces each letter with a letter a fixed number of places later in the alphabet. For a shift of 3, A becomes D, B becomes E, and Z wraps around to C. Keep spaces unchanged.",
    questions: [
      "Write the alphabet twice, with the second row shifted by 3. Encode MATH CIRCLE.",
      "Decode SULPH using the same shift of 3.",
      "Encode ZEBRA with a shift of 5. Explain how you handled the end of the alphabet.",
      "Number letters A = 0 through Z = 25. Write a rule for encoding a letter numbered x with a shift of s.",
      "How many different shift ciphers are possible, including the shift that leaves every letter unchanged? Why is a shift cipher unsuitable for protecting private information?",
    ],
    answers: [
      "PDWK FLUFOH. The shifted alphabet is DEFGHIJKLMNOPQRSTUVWXYZABC.",
      "PRIME. Move each encoded letter three places backward.",
      "EJGWF. After Z, continue at A; for example, Z moves to E.",
      "Take the remainder when x + s is divided by 26. To decode, subtract s and choose the equivalent value from 0 through 25.",
      "26. Shifts differing by 26 give the same result. An attacker can try all 26 shifts, so this is an activity about encoding, not secure encryption.",
    ], guide: "/topics/cryptography", guideTitle: "Cryptography",
  },
];
