export const render = (todo, container) => {
    let length = todo.length;
    for (let i = 0; i < length; i++) {
        let li = document.createElement('li');
        let divOne = document.createElement('div');
        let divTwo = document.createElement('div');
        let divTwoOne = document.createElement('div');
        let divTwoTwo = document.createElement('div');
        let divTwoOneOne = document.createElement('div');
        let divTwoOneTwo = document.createElement('div');
        let strike = document.createElement('del');
        if (todo[i].completed == false) {
            divOne.innerText = todo[i].text;
            divTwoOne.innerHTML = '<i class="fa-solid fa-check"></i>';
            divTwoOne.className = "icon-check";
            divTwoTwo.innerHTML = '<i class="fa-solid fa-trash"></i>';
            divTwoTwo.className = "icon-delete";
            divTwoOneOne.innerText = todo[i].id.toString();
            divTwoOneTwo.innerText = todo[i].id.toString();
            divTwoOneOne.style.display = "none";
            divTwoOneTwo.style.display = "none";
            divTwoOneOne.className = "id-todo";
            divTwoOne.append(divTwoOneTwo);
            divTwoTwo.append(divTwoOneOne);
            divTwo.append(divTwoOne);
            divTwo.append(divTwoTwo);
            li.append(divOne);
            li.append(divTwo);
            container.prepend(li);
        }
        else {
            strike.innerText = todo[i].text;
            divOne.append(strike);
            divTwoOne.innerHTML = '<i class="fa-solid fa-check"></i>';
            divTwoOne.className = "icon-check";
            divTwoTwo.innerHTML = '<i class="fa-solid fa-trash"></i>';
            divTwoTwo.className = "icon-delete";
            divTwoOneOne.innerText = todo[i].id.toString();
            divTwoOneTwo.innerText = todo[i].id.toString();
            divTwoOneOne.style.display = "none";
            divTwoOneTwo.style.display = "none";
            divTwoOneOne.className = "id-todo";
            divTwoOne.append(divTwoOneTwo);
            divTwoTwo.append(divTwoOneOne);
            divTwo.append(divTwoOne);
            divTwo.append(divTwoTwo);
            li.append(divOne);
            li.append(divTwo);
            container.prepend(li);
        }
    }
};
