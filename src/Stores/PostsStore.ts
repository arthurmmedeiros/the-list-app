import { observable, runInAction } from 'mobx';
import PostModel from '../Models/PostModel';
import { apiService } from '../Services/apiService';
export default class AlbumsStore {

    @observable isLoading = false;

    @observable postList: PostModel[] = [];

    loadPosts = () => {
        this.isLoading = true;

        apiService<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
            .then(items => {
                if(items){
                    runInAction(() => {                        
                        this.postList = items
                    })
                }
                this.isLoading = false;              

            })  
    }
}