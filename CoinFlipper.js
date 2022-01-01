import {choice} from "./helpers";
class Coin extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", url: "https://coins.jpg"},
            {side: "tails", url: "https://coins.jpg"}
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this)
    }

    // FIRST WAY
    flipCoin(){
        const newCoin = choice(this.props.coin);
        this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                nFlips: st.nFlips + 1
            }

            if(newCoin.side === "heads"){
                newState.nHeads += 1;
            }else{
                newState.nTails += 1;
            }

            return newState;
        });
    }

    // SECOND WAY
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
            }
        });
    }

    handleClick(e){
        this.flipCoin();
    }

}