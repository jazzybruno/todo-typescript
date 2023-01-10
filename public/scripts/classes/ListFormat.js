export class ListFormat {
    // the construnctor to recieive the ul where to output the list
    constructor(listContainer) {
        this.listContainer = listContainer;
    }
    // the render method to render the list
    render(todo, pos) {
        console.log("Clicked");
        console.log(todo[0]);
        let length = todo.length;
        for (let i = 0; i < length; i++) {
            let li = document.createElement('li');
            let divOne = document.createElement('div');
            let divTwo = document.createElement('div');
            let divTwoOne = document.createElement('div');
            let divTwoTwo = document.createElement('div');
            divOne.innerText = todo[i].text;
            divTwoOne.innerHTML = '<i class="fa-solid fa-check"></i>';
            divTwoOne.className = "icon-check";
            divTwoTwo.innerHTML = '<i class="fa-solid fa-trash"></i>';
            divTwoTwo.className = "icon-delete";
            divTwo.append(divTwoOne);
            divTwo.append(divTwoTwo);
            li.append(divOne);
            li.append(divTwo);
            if (pos === 'start') {
                this.listContainer.prepend(li);
            }
            else {
                this.listContainer.append(li);
            }
        }
    }
    //the function that loads 
    load() {
        return JSON.parse(localStorage.getItem('todos'));
    }
}
