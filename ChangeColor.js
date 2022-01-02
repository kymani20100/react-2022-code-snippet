class ChangeColor extends Component {
    static defaultProps = {
        colors: ["#e056fd","#e056fd","#e056fd","#e056fd"]
    };

    constructor(props){
        super(props);
        this.state = {color: "cyan"};
    }

    changeColor(NewColor){
        this.setState({color: NewColor});
    }

    render(){
        return (
            <>
            {/* FIRST TAKE */}
            {this.props.colors.map(c => {
                const colorObj = {backgroundColor: c};
                return <Button onClick={this.changeColor.bind(this, c)} style={colorObj}>Click Me</Button>
            })}
            {/* SECOND TAKE */}
            {this.props.colors.map(c => {
                const colorObj = {backgroundColor: c};
                return <Button onClick={() => this.changeColor(c)} style={colorObj}>Click Me</Button>
            })}
            </>
        )
    }
}