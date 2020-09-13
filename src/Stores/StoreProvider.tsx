import React, {PropsWithChildren} from 'react';
import  {useLocalStore} from 'mobx-react-lite';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { storesContext } from './StoreConfig';
import { Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import AlbumsStore from './AlbumsStore';
import TodosStore from './TodosStore';
import PostsStore from './PostsStore';

const StoreProvider = (props: PropsWithChildren<unknown>) => {
    const routerStore = useLocalStore(() => new RouterStore());
    const history = syncHistoryWithStore(createBrowserHistory(), routerStore);

    const albumsStore = useLocalStore(() => new AlbumsStore());
    const postsStore = useLocalStore(() => new PostsStore());
    const todosStore = useLocalStore(() => new TodosStore());

    return(
        <storesContext.Provider
        value={{
            routerStore,
            albumsStore,
            postsStore,
            todosStore
        }}
        >
            <Router history={history}>{props.children}</Router>
        </storesContext.Provider>
    )
}

export default StoreProvider;