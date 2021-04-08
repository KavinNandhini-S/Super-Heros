//dashboard Components
import HeroStats from "./Components/Dashboard/HeroStats.jsx"
import HeroSearch from "./Components/Search/HeroSearch.jsx"
import ViewHeros from "./Components/Search/ViewHeros.jsx"

const dashboardRoutes = [
    
    {
      path: "/herostats",
      component: HeroStats,
      layout: "/dashboard"
    },
    {
        path: "/herosearch",
        component: HeroSearch,
        layout: "/dashboard"
      },
      {
        path: "/viewhero",
        component: ViewHeros,
        layout: "/dashboard"
      },

]

export default dashboardRoutes