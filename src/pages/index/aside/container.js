import { connect } from 'react-redux';
import view from './view';
import { addActiveTab, editActiveTab } from './action';

const mapStateToProps = state =>
({
    activeTab: state.activeTab
})

const mapDispatchToProps = dispatch =>
({
    init: function (){
        dispatch(addActiveTab('1'));
    },
    toggle: function (tab){
        dispatch(editActiveTab(tab));        
    }
})

export const Aside = connect(mapStateToProps, mapDispatchToProps)(view);