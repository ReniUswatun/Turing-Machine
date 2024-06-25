const divideRuleSet = {
  q0: [
    { to: "q0", rule: "0bb/00b,rrs" },
    { to: "q1", rule: "1bb/1bb,rls" },
  ],
  q1: [
    { to: "q1", rule: "00b/0bb,rls" },
    { to: "q2", rule: "b0b/b00,lsr" },
    { to: "q3", rule: "bbb/bb0,ssr" },
    { to: "accept", rule: "0bb/0be,sss" },
    { to: "accept", rule: "b0b/b0e,sss" },
  ],
  q2: [
    { to: "q2", rule: "00b/00b,lss" },
    { to: "q1", rule: "10b/10b,rss" },
  ],
  q3: [{ to: "accept", rule: "bbb/bb1,sss" }],
};
