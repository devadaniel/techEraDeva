import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {course} = props
  const {id, logUrl, name} = course
  return (
    <Link to={`/courses/${id}`} className="course-link">
      <li className="each-course-item">
        <div className="each-course">
          <img src={logUrl} alt={name} className="each-course-img" />
          <p className="name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default CourseItem
