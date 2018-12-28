import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setVisibilityFilter, SetVisibilityFilterAction } from '@src/actions';
import { GlobalState } from '@src/state/createStore';
import Link from '@src/components/Link';

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
