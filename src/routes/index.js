import Following from "../pages/Following/Following";
import HomePages from "../pages/homePage/HomePages";

export const publicRoutes = [
    {
        path: '/',
        element: HomePages,
        layout:null
    }, {
        path: 'following',
        element: Following,
        layout:null
    }
]

export const privateRoutes = []