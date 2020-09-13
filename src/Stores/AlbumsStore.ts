import { observable, runInAction } from 'mobx';
import AlbumModel from '../Models/AlbumModel';
import { apiService } from '../Services/apiService';
export default class AlbumsStore {

    @observable isLoading = false;

    @observable albumList: AlbumModel[] = [];

    loadAlbums = () => {
        this.isLoading = true;

        apiService<AlbumModel[]>('https://jsonplaceholder.typicode.com/albums')
            .then(items => {
                if(items){
                    runInAction(() => {                        
                        this.albumList = items
                    })
                }
                this.isLoading = false;              

            })  
    }
}