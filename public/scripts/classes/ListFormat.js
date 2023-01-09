export class ListFormat {
    // the construnctor to recieive the ul where to output the list
    constructor(listContainer) {
        this.listContainer = listContainer;
    }
    // the render method to render the list
    render(todo, pos) {
        let li = document.createElement('li');
        let divOne = document.createElement('div');
        let divTwo = document.createElement('div');
        let divTwoOne = document.createElement('div');
        let divTwoTwo = document.createElement('div');
        divOne.innerText = todo.format();
        divTwoOne.innerHTML = '<i class="fa-solid fa-check"></i>';
        divTwoTwo.innerHTML = '<i class="fa-solid fa-trash"></i>';
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