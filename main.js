const data = {
    'luffy': ["luffy_card.png","1.500.000.000", "Monkey D. Luffy", "Pirata", "Gomu Gomu no Mi", "Descricao"],
    'zoro' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
    'nami' : ["nami_card.png", "66.000.000", "Nami", "Pirata", "Nenhuma", "Descricao"],
    'usopp': ["usoppgod_card.png ", "320.000.000", "GOD Usopp", "Pirata", "Nenhuma", "Descricao"],
    'sanji': ["zoro_card.png", "300.000.000", "Vinsmoke Sanji", "Pirata", "Nenhuma", "Descricao"],
    'chopper' : ["zoro_card.png", "320.000.000", "Chopper", "Pirata", "Nenhuma", "Descricao"],
    'robin' : ["zoro_card.png", "320.000.000", "Nico Robin", "Pirata", "Nenhuma", "Descricao"],
    'franky' : ["zoro_card.png", "320.000.000", "Franky", "Pirata", "Nenhuma", "Descricao"],
    'brook' : ["zoro_card.png", "320.000.000", "Brook", "Pirata", "Nenhuma", "Descricao"],
    'jinbe' : ["zoro_card.png", "320.000.000", "Jinbe", "Pirata", "Nenhuma", "Descricao"],
    'doflamingo' : ["zoro_card.png", "320.000.000", "Donquixote Doflamingo", "Pirata", "Nenhuma", "Descricao"],
    'ace' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
    'zoro' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
    'zoro' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
    'zoro' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
    'zoro' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
    'zoro' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
    'zoro' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
    'zoro' : ["zoro_card.png", "320.000.000", "Roronoa Zoro", "Pirata", "Nenhuma", "Descricao"],
};

function changeChar() {
    document.getElementById("personagem").src = "Imagem/"+ data[this.id][0];
    document.getElementById("Recompensa").innerText = data[this.id][1];
    document.getElementById("nome").innerText = data[this.id][2];
    document.getElementById("role").innerText = data[this.id][3];
    document.getElementById("akumanoMi").innerText = data[this.id][4];
    document.getElementById("descricao").innerText = data[this.id][5];
}

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', changeChar);
});