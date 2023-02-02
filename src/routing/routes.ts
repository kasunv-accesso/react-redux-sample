const routes = {
    home: () => '/',
    items: () => '/items',
    item: (itemId: string) => `/item/${itemId}`
}

export default routes;