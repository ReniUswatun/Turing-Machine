const addtionRuleSet = {
  q0: [
    { to: "q0", rule: "0b/00,rr" },
    { to: "q1", rule: "1b/1b,rs" },
    { to: "accept", rule: "1b/b1,ss" },
  ],
  q1: [
    { to: "q1", rule: "0b/00,rr" },
    { to: "accept", rule: "bb/b1,ss" },
  ],
};
