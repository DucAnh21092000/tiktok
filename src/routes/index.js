import LiveLayout from "../layouts/LiveLayout/LiveLayout";
import Following from "../pages/Following/Following";
import HomePages from "../pages/homePage/HomePages";
import LivePage from "../pages/Live/LivePage";

export const publicRoutes = [
    {
        path: '/',
        element: HomePages,
        layout: null
    }, {
        path: 'following',
        element: Following,
        layout: null
    }
    , {
        path: 'live',
        element: LivePage,
        layout: LiveLayout
    }
]

export const privateRoutes = []