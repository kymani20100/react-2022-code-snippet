class NumberItem extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(event){
        // YOU HAVE TO PASS ID VIA PROPS AS WELL
        // REMEBER TO ADD A CONSTRUCTOR
        // AND LASTLY, CHECKOUT shortid ND uuid FRO UNIQUE KEYS :)
        this.props.remove(this.props.value)
    }
    render(){
        <li>
            {this.props.value}
            {/* OLD SYNTAX */}
            <button onClick={this.props.remove}>X</button>
            {/* NEW SYNTAX */}
            <button onClick={this.handleRemove}>X</button>
      
        </li>
    }
}