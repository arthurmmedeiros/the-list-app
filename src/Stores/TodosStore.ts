import { observable, runInAction } from 'mobx';
import TodoModel from '../Models/TodoModel';
import { apiService } from '../Services/apiService';
export default class AlbumsStore {

    @observable isLoading = false;

    @observable todoList: TodoModel[] = [];

    loadTodos = () => {
        this.isLoading = true;

        apiService<TodoModel[]>('https://jsonplaceholder.typicode.com/todos')
            .then(items => {
                if(items){
                    runInAction(() => {                        
                        this.todoList = items
                    })
                }
                this.isLoading = false;              

            })  
    }
}