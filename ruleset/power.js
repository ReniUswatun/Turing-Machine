const powerRuleSet = {
  q0: [
    { to: "q0", rule: "0bbb/00bb,rrss" },
    { to: "q1", rule: "1bbb/1bbb,rlss" },
  ],
  q1: [
    { to: "q1", rule: "00bb/00bb,slss" },
    { to: "q2", rule: "0bbb/0bbb,srss" },
    { to: "q8", rule: "bbbb/bbb0,sssr" },
    { to: "q8", rule: "0bbb/0bbb,rsss" },
    { to: "q8", rule: "b0bb/b0b0,srsr" },
  ],
  q2: [
    { to: "q2", rule: "00bb/00b0,srsr" },
    { to: "q3", rule: "0bbb/0bbb,rsss" },
  ],
  q3: [
    { to: "q3", rule: "000b/00bb,ssls" },
    { to: "q4", rule: "0bbb/0bbb,slsl" },
    { to: "q4", rule: "00bb/00bb,ssrl" },
    { to: "accept", rule: "bb0b/bbb1,ssss" },
    { to: "accept", rule: "bbbb/bbb1,ssss" },
    { to: "accept", rule: "b00b/b001,ssss" },
    { to: "accept", rule: "b0bb/b0b1,ssss" },
  ],
  q4: [
    { to: "q4", rule: "00b0/000b,slrl" },
    { to: "q4", rule: "0bb0/0b0b,ssrl" },
    { to: "q5", rule: "0bbb/0bbb,ssls" },
  ],
  q5: [
    { to: "q5", rule: "0b0b/0b0b,ssls" },
    { to: "q6", rule: "0bbb/0bbb,srrr" },
  ],
  q6: [
    { to: "q6", rule: "000b/0000,ssrr" },
    { to: "q7", rule: "00bb/00bb,srls" },
    { to: "accept", rule: "0bbb/0bb1,ssss" },
  ],
  q7: [
    { to: "q3", rule: "0b0b/0bbb,rlls" },
    { to: "q6", rule: "00bb/00bb,ssrs" },
    { to: "q7", rule: "000b/000b,ssls" },
  ],
  q8: [
    { to: "accept", rule: "bbbb/bbb1,ssss" },
    { to: "q8", rule: "0bbb/0bbb,rsss" },
  ],
};
