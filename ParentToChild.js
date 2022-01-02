class NumberList extends Component {
    constructor(props){
        super(props);
        this.state = {nums: [1,2,3,4,5,6,7]};
        // REMOVE ADDED LATER AS BETTER APPROACH
        this.remove = this.remove.bind(this);
    }

    remove(num){
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }));
    }

    render(){
        // OLD SYNTAX, WORKS BUT CREATE ANOTHER FUNCTION EVERYTIME :(
        let nums = this.state.nums.map(n => <NumberItem value={n} remove={() => this.remove(n)} />);
        // NEW SYNTAX, WORKS BUT CREATE ANOTHER FUNCTION EVERYTIME :)
            let nums = this.state.nums.map(n => <NumberItem value={n} remove={this.remove} />);
        
        return (
            <div>
                <h1>
                    First Number
                </h1>
                <ul>
                    {nums}
                </ul>
            </div>
        )
    }
}