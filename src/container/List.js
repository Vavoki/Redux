import { connect } from 'react-redux';
import { removeItem, editItem, toggleItem} from '../action/action';

import List from '../components/componentTodo/Todo';

const mapStateToProps = state => ({
    items: state.items,
});

const mapDispatchToProps = {
    removeItem,
    editItem,
    toggleItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);