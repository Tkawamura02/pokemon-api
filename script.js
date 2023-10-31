function display() {
  let pokemon = document.getElementById("user-input").value;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
    console.log(response.data);
    let id = response.data.id;
    let name = response.data.name;
    let height = response.data.height;
    let weight = response.data.weight;
    let ability = response.data.abilities;

    document.getElementById("not-found").style.display = "none";
    document.getElementById("id").innerText = "(ID: " + id + ")";
    document.getElementById("name").innerText = name.toUpperCase();
    document.getElementById("height").innerText = "Height: " + height;
    document.getElementById("weight").innerText = "Weight: " + weight;
    document.getElementById("ability-title").innerText = "Abilities";

    let list = document.getElementById('ability');
    if (Number(ability.length) == 1) {
      let listItem = document.createElement('li');
      listItem.innerText = response.data.abilities[0].ability.name;
      list.appendChild(listItem);
    } else if (Number(ability.length) > 1) {
      result = response.data.abilities;
      list.innerText="";
      for (let element of result) {
        let listItem = document.createElement('li');
        listItem.innerText = element.ability.name;
        list.appendChild(listItem);
      }
    }

  });
}