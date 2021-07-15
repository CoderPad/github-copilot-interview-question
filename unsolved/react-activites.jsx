// NOTE: This code was present before Copilot was asked to generate a functional component
class DisplayActivities extends React.Component {
    state = {
      activity: null
    }

    componentDidMount() {
      this.getNewActivity()
    }

    getNewActivity() {
      fetch(`https://www.boredapi.com/api/activity`)
        .then(res => res.json())
        .then(res => this.setState({
          activity: res.activity
        }))
    }

    render() {
      if (!this.state.activity) return null

      return <p>{this.state.activity}</p>
    }
  }


  const App = () => {
    const [comicNum, setComicNum] = React.useState(30)

    const activityRef = React.useRef()

    const onRefresh = () => {
      activityRef.current.getNewActivity()
    }

    return (
      <div>
        <DisplayActivities ref={activityRef}/>
        <button onClick={onRefresh}>Refresh list</button>
      </div>
    )
  }

  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );


  /**
   * Copilot was given:
   const DisplayActivities = () => {
    const [
   *
   * Was unable to suggest proper render method with this baseline.
   * 
   * Copilot also had to be coaxed to generate the function with:
   *  const getNewActivity = () => {
   * 
   * Copilot was _then_ able to generate proper `return` logic
   * 
   * But `if` statement was still needed to generate manually
   * 
   * Copilot is also unable to suggest refactors away from bidirectionality, which is the
   * true core of the excercise.
   */

  const DisplayActivities = () => {
    const [activity, setActivity] = React.useState(null)

      const getNewActivity = () => {
        fetch(`https://www.boredapi.com/api/activity`)
          .then(res => res.json())
          .then(res => setActivity(res.activity))
      }
      
    React.useEffect(() => {
      getNewActivity()
    }, [])

    if (!activity) return null

    return (
      <p>{activity}</p>
    )
  }
