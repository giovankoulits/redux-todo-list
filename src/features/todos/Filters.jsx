import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from './todosSlice';
import { getVisibilityFilter } from './todosSlice';
import { nanoid } from 'nanoid';

const Filters = () => {
   const dispatch = useDispatch()
   const selectedFilter = useSelector(getVisibilityFilter)
   const filters = ["all", "active", "completed"]
   const filterButtons = filters.map(filter => {

      const style = { background: `${filter === selectedFilter ? "#ae9f9f" : "#303030"}`, color: `${filter === selectedFilter ? "#303030" : "#ae9f9f"}` }

      return <button key={nanoid()}
         style={style}
         type="button"
         className="filter"
         onClick={() => dispatch(setVisibilityFilter(filter))} >{filter.charAt(0).toUpperCase() + filter.slice(1)}</button>
   })

   return (
      <div className='filters'>
         {filterButtons}
      </div>
   )
}

export default Filters