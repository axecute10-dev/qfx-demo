document.getElementById('mb').addEventListener('click',function(){document.getElementById('nv').classList.toggle('open')});
var vf=document.getElementById('vf');
if(vf){vf.addEventListener('submit',function(e){e.preventDefault();var k=document.getElementById('vid').value.trim().toUpperCase(),b=document.getElementById('vr');b.style.display='block';b.textContent='Checking...';
fetch('/assets/data/staff.json').then(function(r){return r.json()}).then(function(d){var s=d[k];b.textContent='';
if(!s){b.textContent='No record found for '+k+'. Please do not allow entry and call +880 1805-455811.';return}
var p=document.createElement('span');p.className='pill '+(s.status==='Verified'?'g':'r');p.textContent=s.status==='Verified'?'Verified':s.status;
var h=document.createElement('h3');h.style.margin='10px 0 2px';h.textContent=s.name;var t=document.createElement('div');t.textContent=s.role+' - '+s.division+' - ID '+k;
b.appendChild(p);b.appendChild(h);b.appendChild(t)}).catch(function(){b.textContent='Could not load records. Please call +880 1805-455811 to confirm.'})})}
