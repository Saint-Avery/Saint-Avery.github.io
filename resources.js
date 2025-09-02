
async function loadResources(){
  try{
    const res = await fetch('resources/resources.json', {cache:'no-store'});
    const items = await res.json();
    const list = document.getElementById('resourceList');
    list.innerHTML = '';
    items.forEach(it => {
      const div = document.createElement('div');
      div.className = 'resource';
      div.innerHTML = `
        <h4>${it.title}</h4>
        <p>${it.description || ''}</p>
        <a class="btn" href="${it.url}" target="_blank" rel="noopener">Download</a>
      `;
      list.appendChild(div);
    });
  }catch(e){
    console.error(e);
    document.getElementById('resourceList').innerHTML = '<p class="muted">No resources found. Edit <code>resources/resources.json</code> to add items.</p>';
  }
}
document.addEventListener('DOMContentLoaded', loadResources);
