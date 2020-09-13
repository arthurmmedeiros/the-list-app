import {createContext, useContext} from 'react';
import {RouterStore} from 'mobx-react-router';
import AlbumsStore from './AlbumsStore';
import TodosStore from './TodosStore';
import PostsStore from './PostsStore';

export type Stores = {
    routerStore: RouterStore,
    albumsStore: AlbumsStore,
    postsStore: PostsStore,
    todosStore: TodosStore
};

/**Null if a provider does not populate*/
export const storesContext = createContext<Stores | null>(null);

/**A react hook to use the app stores inside a provider*/
export const useStores = () => {
    const stores = useContext(storesContext);
    if(!stores){
        throw new Error('useStores must be used within a StoreProvider');
    }
    return stores;
}