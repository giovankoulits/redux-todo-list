import { store } from "./app/store"

const Header = () => {
   const { value } = store.getState()

   return (
      <h1>{value}</h1>
   )
}

export default Header