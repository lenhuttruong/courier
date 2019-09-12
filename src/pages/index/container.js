import { connect } from 'react-redux';
import view from './view';
import { addHistory } from './action';

const mapDispatchToProps = dispatch =>
({
    signOut: function (e){
        e.preventDefault();
        dispatch(addHistory('/login'));
    }
})

export const Index = connect(null, mapDispatchToProps)(view);