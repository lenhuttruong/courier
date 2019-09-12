import { connect } from "react-redux";
import view from './view';
import { increase } from './action';

const mapStateToProps = state =>
({
    count: state.count
})

const mapDispatchToProps = dispatch =>
({
    increase: function (){
        dispatch(increase());
    }
})

export const Count = connect(mapStateToProps, mapDispatchToProps)(view);