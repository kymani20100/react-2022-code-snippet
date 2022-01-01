class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor() {
        super(props);
        this.state = {nums: Array.from({length: this.props.maxBalls})}
        this.handleClick = this.handleClick.bind(this)
    }

    generate() {
        this.setState(curState => ({
            nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
    }

    handleClick() {
        this.generate();
    }

    render(){
        return (
            <>
            <H1>{this.props.title}</H1>
            <div>{this.state.nums.map(n => (
                <Ball num={n} />
            ))}</div>
            <button onClick={this.handleClick}>Generate</button>
            </>
            
        )
    }
}