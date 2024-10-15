function search(e) {
    console.log(e)
    const filter = e.target.value.toUpperCase();
     const AccList = document.getElementById('maindata') 
console.log(AccList)
       const trs = AccList?.getElementsByClassName('card') 
        const cellIndicesToSearch = [0]; 
        for (let i = 0; i < trs.length; i += 1) { 
           let txtValue = ''; 
           for (let indx = 0; indx < cellIndicesToSearch.length; indx += 1) { 
               const td = trs[i].getElementsByTagName('h5')[cellIndicesToSearch[indx]];

              console.log("td ",td )
           if (td) { txtValue += td.textContent || td.innerText; 
              }
            }
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              
               trs[i].style.display = '';
            } else { trs[i].style.display = 'none';
            }
        } 
    }