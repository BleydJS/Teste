const habilidades = document.querySelectorAll('.habilidade');

habilidades.forEach(habilidade => {
  habilidade.addEventListener('mouseover', () => {
    const descricao = habilidade.querySelector('.descricao');
    descricao.style.display = 'block';
    const offset = descricao.offsetHeight;
    habilidade.style.marginBottom = offset + 'px';
  });

  habilidade.addEventListener('mouseout', () => {
    const descricao = habilidade.querySelector('.descricao');
    descricao.style.display = 'none';
    habilidade.style.marginBottom = '0';
  });
});