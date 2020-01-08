import React from 'react'

function lesson(props){
    return (
        <div>{props.stage}--{props.title}</div>
    )
}

const lessons = [
    { stage: "React", title: "核心API" },
    { stage: "React", title: "组件化1" },
    { stage: "React", title: "组件化2" }
];
/**
 * 
 * @param {*} Comp 组件
 */
const withContent = Comp => props => {
    const content = lessons[props.idx];
    return <Comp {...content} />;
};
/* const withContent = function(Comp){
    return function(props){
        const content = lessons[props.idx]
        return <Comp {...content}></Comp>
    }
} */
const LessonWithContent = withContent(lesson)
class HocTest extends React.Component {
  render () {
    return (
      <div>
            {[0,0,0].map((item,idx) =>
                <LessonWithContent key={idx} idx={idx} />
            )}
      </div>
    )
  }
}

export default HocTest
