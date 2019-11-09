import { connect } from "react-redux";
import Landing from "./landing";
import {getData} from "../../Services/incidentService";

const mapStateToProps = (state, ownProps) => {
    return {
        list : state.incidents.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);
