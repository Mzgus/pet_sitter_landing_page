const villes = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'];

const container = document.getElementById('villes-container');

villes.forEach(ville => {
    const villeElement = document.createElement('span');
    villeElement.className = "bg-yellow-100 text-amber-800 font-semibold px-4 py-2 rounded-full";
    villeElement.textContent = ville;
    container.appendChild(villeElement);
});