
export default function ActivitiyCard({id,tipo,name,difficulty,season,countries}){
    
  
return(
    <div className="cardA">
<div className="card__headerA"><h3>{name}</h3></div>
<div className="card__bodyA">
   
   <p  className="p">tipo: {tipo}</p>
   <p className="p">ID: {id}</p>
   <p className="p">difficulty:{difficulty}</p>
   <p className="p">season: {season}</p>
   <p className="p">Countries:</p>{countries.map(e=><li key={e.id}>{e.name}</li>)}
   
   

</div>
<div className="pie">
   
</div>
</div>
)
}