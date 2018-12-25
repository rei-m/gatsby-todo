import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setVisibilityFilter, SetVisibilityFilterAction } from '../actions';
import { GlobalState } from '../state/createStore';
import Link from '../components/Link';

export interface FilterLinkProps {
  filter: string;
}

const mapStateToProps = ({ visibilityFilter }: GlobalState, { filter }: FilterLinkProps) => ({
  active: filter === visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch<SetVisibilityFilterAction>, { filter }: FilterLinkProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;
