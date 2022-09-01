const generadorHTML = (athletes)=>{
    let html=''
    if (athletes.gender == 'F') {
         html= `
        <div class="card" id="container_female">
            <div class="card-image">
                <div class="card-opacidad"></div>
                    <img src="./imagenes/sportswear-svgrepo-com.svg" alt="avatar-female" class="avatar">
                
                    <h4>${athletes.name.toUpperCase()}</h4>
                    <p>Team: ${athletes.team} <br> Sport: ${athletes.sport}</p>
            </div>
        </div>
            `
            
        
    } else {
         html = `
         <div class="card" id="container_male">
            <div class="card-image">
                <div class="card-opacidad"></div>
                    <img src="./imagenes/sportswear-svgrepo-com (1).svg" alt="avatar-male" class="avatar">
                
                    <h4>${athletes.name.toUpperCase()}</h4>
                    <p>Team: ${athletes.team} <br> Sport: ${athletes.sport}</p>
            </div>
        </div>
            `
          
    }
    return html
}

export default generadorHTML