const rows = document.querySelectorAll('td');
const links = document.querySelectorAll('a');
let linksIndex = 0;
let rowElementIndex = 0;

fetch('https://api.github.com/users/h-pina/repos')
    .then(res => res.json())
    .then((data) => {
        //console.log(data);
        for(let i=0;i<data.length;i++){
            let {name,description,svn_url} = data[i];
            if(description === null){description = '-'}
            console.log(` ${name} , ${description} , ${svn_url}`)

            rows[rowElementIndex].innerText = name;
            rowElementIndex++;
            rows[rowElementIndex].innerText = description;
            rowElementIndex++;
            links[linksIndex].href = svn_url;
            links[linksIndex].innerText = svn_url;
            linksIndex++
            rowElementIndex++;
        }
    });
