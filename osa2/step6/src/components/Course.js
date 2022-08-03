

const Header = ({course}) => {
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
  
  }
  
  const Content = ({parts}) => {
    return parts.map(p => <Part key={p.name} part = {p} />) 
    
  }
  
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Total = (props) => {
    console.log('total',props)
    let ex = props.parts.map(p =>p.exercises)
    let sum  = ex.reduce((partialSum, a) => partialSum + a, 0)
    return (
      <span style={ {fontWeight : 'bold'} }>
      <p className="sum">total of {sum} exercises</p>
      </span>
    )
  }

const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

export default Course