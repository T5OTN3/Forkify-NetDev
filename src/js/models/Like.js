export default class Like{
    constructor(){
        this.likes = [];
    }

    addLike(id, title, author, img){
        const like = { id, title, author, img };
        this.likes.push(like);

        this.persistDate();

        return like;
    }

    deleteLike(id){
        const index = this.likes.findIndex(el => el.id === id);

        this.likes.splice(index, 1);

        this.persistDate();
    }

    isLiked(id){
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    persistDate(){
        localStorage.setItem('like', JSON.stringify(this.likes))
    }

    readStorage(){
        const storage = JSON.parse(localStorage.getItem('like'));
        if(storage) this.likes = storage;
    }

    getLikeNum(){
        return this.likes.length;
    }
}