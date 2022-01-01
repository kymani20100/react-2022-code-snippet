class CodeSnippet extends Component{
    constructor(props){
        super(props);
        this.state = {username: "", email: "", password: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // THIS IS THE HOLLY GRAIL
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    // SUBMIT
    handleSubmit(evt){
        evt.preventDefault();
        this.setState({username: '', email: ''})
    }

    // IF YOUR COMPONENT IS STATELESS, YOU CAN OMIT THE CONSTRUCTOR FUNCTION

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name="username" value={this.state.username} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}