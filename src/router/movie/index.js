/**
 * Created by Administrator on 2020/7/27.
 */
export default{
    path : '/movie',
    component :() => import('@/views/Movie'),
    children : [
        {
        path : 'city',
        component :() => import('@/components/city')
        },
        {
        path : 'NowPlaying',
        component :() => import('@/components/NowPlaying')
        },
        {
        path : 'search',
        component :() => import('@/components/search')
        },
        {
        path : 'comingsoon',
        component :() => import('@/components/comingsoon')
        },
        {
            path : '/movie',
            redirect : '/movie/NowPlaying'
        }


]
}