class IconList extends Component {
    static defaultProps = {
        options: ["angry", "anchor", "archway"]
    };

    constructor(props){
        super(props);
        this.state = {icons: ["bone", "cloud"]};
        this.addIcon = this.addIcon.bind(this);
    }

    // BAD WAY TO UPDATE STATE
    addIcon(){
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        let icons = this.state.icons;
        icons.push(newIcon);
        this.setState({icons: icons});
    }

    // GOOD WAY TO UPDATE STATE
    addIcon(){
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        // TAKE WHATS ALREADY IN THERE ADDON TO IT
        // REMEMBER TO CONSOLE LOG
        this.setState({icons: [...this.state.icons, newIcon]});
    }

    render(){
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
        return (
            <div>
                <h1>Icons {icons}</h1>
                <button onClick={this.addIcon}>Add</button>
            </div>
        );
    }
}