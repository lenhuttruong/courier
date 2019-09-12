import { connect } from 'react-redux';
import view from './view';
import { editActiveTab } from './action';

const mapStateToProps = state =>
({
    activeTab: state.aside.activeTab
})

const mapDispatchToProps = dispatch =>
({
    toggle: function (tab){
        dispatch(editActiveTab(tab));        
    }
})

export const Aside = connect(mapStateToProps, mapDispatchToProps)(view);