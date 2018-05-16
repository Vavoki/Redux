import { connect } from 'react-redux';
import { addItem } from '../action/action';

import AddForm from '../components/componentAddToForm/addToForm';

const mapDispatchToProps = {
    addItem,
};

export default connect(null, mapDispatchToProps)(AddForm);