window.onload = () => {
  if (window.location.pathname == '/read/vocabulary' || window.location.pathname == '/read/sentence') {
    let boxElements = document.querySelectorAll('.see-box');
    let baseURL = 'https://toefl.kmf.com';
    let css = {
      width: '80%',
      display: 'inline-block',
      textAlign: 'center',
      border: '1px solid #2D2F3C',
      borderRadius: '4px',
      position: 'relative',
      background: '#2D2F3C',
      color: '#FEE9CD'
    }
    for (let boxElement of boxElements) {
      let targetURL = baseURL + boxElement.getAttribute('data-url');
      let link = document.createElement('a');
      link.innerText = '練習';
      link.setAttribute('href', targetURL);
      // open the linked document in a new browser window or tab
      link.setAttribute('target', '_blank');
      Object.assign(link.style, css);
      
      // stops the propagation of click event from occurring in the capturing phase
      link.addEventListener('click', (e) => {
        e.stopPropagation();
      })
      boxElement.appendChild(link);
    }
  }
}

