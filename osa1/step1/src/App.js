const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )

}

const Content = (props) => {
  return props.parts.map(p => <Part part = {p} />) 
  
}


const Part = (props) => {
  return (
  <p>
    {props.part.name} {props.part.exercises}
  </p>

  )
}

const Total = (props) => {
  let ex = props.parts.map(p =>p.exercises)
  let sum  = ex.reduce((partialSum, a) => partialSum + a, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts:  [
      {
        name:'Fundamentals of React',
        exercises: 10
      },

      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      }

    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App