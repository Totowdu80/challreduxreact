import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    counter: state
});

const MyCounter = ({ counter, dispatch }) => (
    <div>
        <div>
            <p>Mon compteur : {counter}</p>
            <button onClick={() => dispatch({ type : 'REMOVETEN' })}> - 10 </button>
            <button onClick={() => dispatch({ type : 'REMOVEONE' })}> - 1 </button>
            <button onClick={() => dispatch({ type : 'ADDONE' })}> + 1 </button>
            <button onClick={() => dispatch({ type : 'ADDTEN' })}> + 10 </button>
        </div>
        <div>
            <button onClick={() => dispatch({ type : 'RESET' })}> Reset </button>
        </div>
    </div>
);

export default connect(mapStateToProps)(MyCounter);