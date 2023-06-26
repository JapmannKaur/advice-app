import Advice from "./Advice"
import Activity from "./Activity"
import Joke from "./Joke"
import Nationality from "./Nationality"
import Flag from "./Flag"
import Maths from "./Maths"

const Options = () => {
  return (
    <div className="parent-page">
        <div className="myAdv">
            <Advice/>
        </div>
        <div className="myAdv">
            <Activity/>
        </div>
        <div className="myAdv">
            <Joke/>
        </div>
        <div className="myAdv">
            <Nationality/>
        </div>
        <div className="myAdv">
            <Flag/>
        </div>
        <div className="myAdv">
            <Maths/>
        </div>
    </div>
  )
}
export default Options