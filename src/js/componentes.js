import '../css/componentes.css'
export const saludar = (nombre) => {
    
  console.log('Creando etiquetas h1');

  const h1 = document.createElement('h1');
  h1.innerText = `Hola, ${ nombre }, como estas?`;

  document.body.append(h1);
  
    const p = document.createElement('p');
    p.innerText = `Mauris orci libero, pellentesque eget tellus et, tempus imperdiet turpis. Nunc vehicula egestas nunc ac luctus. Integer magna ipsum, ultrices vitae ex sit amet, ultrices pulvinar ipsum. Sed eget ipsum velit. Morbi non nibh sed ligula ultricies cursus. Aenean suscipit ligula eu nunc vulputate auctor. Curabitur ante enim, luctus nec ligula at, dapibus condimentum ex. Phasellus vitae congue orci. Sed accumsan tellus eget libero bibendum sodales. Proin volutpat diam id neque feugiat, at porta ligula pretium. Morbi sit amet sagittis neque.`;

    document.body.append(p);

}


