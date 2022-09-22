import React, { useState } from "react";
import "./backend.css";

const q_and_as_obj = [
  {
    question: `Given a list of numbers, return the number closest to 0
Edge cases
  1) return 0 if input is None
  2) return 0 if list is empty
  3) return positive integer if same as negative integer`,
    answer: [
      `def closest_to_zero(ints):
    if ints is None:
        return 0
    if not ints:
        return 0
    answers = [ints[0]]
    for i in ints[1:]:
        if abs(i) < abs(answers[0]):
            answers = [i]
        elif abs(i) == abs(answers[0]):
            answers.append(i)
    answer = max(answers)
    print(answer)
    return answer
    
    closest_to_zero([1, 2]) #1
    closest_to_zero([3, 2]) #2
    closest_to_zero([-1, 2]) #-1
    closest_to_zero([-2, 2, -2]) #2
    closest_to_zero([4, 4, 3]) #3
    `,
    ],
  },
  {
    question:
      "Given a value of cash, outputs the number bills that make up that number given bills of tens, fives, and twos",
    answer: [
      `
    from math import floor
    
    def change(cash):
        tens = floor(cash / 10)
        cash2 = cash - (tens * 10)
        fives = floor(cash2 / 5)
        cash3 = cash2 - (fives * 5)
        twos = floor(cash3 / 2)
    
        if (tens == 0) and (fives == 0) and (twos == 0):
            print('None')
            return 'None'
        print(f'tens {tens}')
        print(f'fives {fives}')
        print(f'twos {twos}')
        print()
        return {
            'two': twos,
            'five': fives,
            'ten': tens
        }
    
    
    change(42)
    """
    tens 4
    fives 0
    twos 1
    """`,
    ],
  },
  {
    question: "How do you do dictionary comprehension?",
    answer: ["dict2 = {k.upper(): v for k, v in dict.items()}"],
  },
  {
    question: "Given this list, how would you get the last 2 elements",
    answer: ["A = [1, 2, 3, 4, 5]", "b = A[-2:]"],
  },
  {
    question: "How do you change the increment from 1 to 2",
    answer: ["b = A[start:stop:step]"],
  },
  {
    question: "How would you reverse a list",
    answer: ["b = A[::-1]"],
  },
];
const Backend = () => {
  const CreateSection = (item, index) => {
    const [active, setActiveIndex] = useState("");
    const onTitleClick = () => {
      if (active === "active") {
        setActiveIndex("");
      } else {
        setActiveIndex("active");
      }
    };
    const answer = item.answer.map((line, index) => {
      return <div>{line}</div>;
    });
    // const question = item.question.map((line, index) => {
    //   return <div>{line}</div>;
    // });
    const question = item.question;

    return (
      <React.Fragment key={item.company}>
        <div
          className={`title ${active}`}
          // use arrow function or else onTitleClick is run when things render
          onClick={() => onTitleClick()}
        >
          <div
            className={`title ${active}`}
            style={{ width: "100%", display: "inline-block" }}
            onClick={() => onTitleClick(index)}
          >
            <i className="dropdown icon"></i>
            {question}
          </div>
        </div>
        <div className={`content answer ${active}`}>
          <ul style={{ margin: 0, paddingInlineStart: "20px" }}>{answer}</ul>
        </div>
        <div class="ui divider" />
      </React.Fragment>
    );
  };
  // debugger
  const q_and_as = q_and_as_obj.map((item, index) => {
    return CreateSection(item, index);
  });
  return (
    <div style={{ "margin-left": "1%" }}>
      <div className="ui accordion" style={{ width: "50%" }}>
        {q_and_as}
      </div>
    </div>
  );
};

export default Backend;
