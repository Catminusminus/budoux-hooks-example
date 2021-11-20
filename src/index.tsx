import { useState, useCallback, Fragment } from "react";
import ReactDOM from "react-dom";
import { loadDefaultJapaneseParser } from "budoux";

const useParse = () => {
  const [parser, _] = useState(loadDefaultJapaneseParser());
  const parse = useCallback((input: string) => parser.parse(input), [parser]);
  return parse;
};

const sentense = "あなたに寄り添う最先端のテクノロジー。";

const App = () => {
  const parse = useParse();
  const lines = parse(sentense).map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));
  return <div>{lines}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
