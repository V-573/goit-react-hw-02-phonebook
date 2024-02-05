const FindContacts = ({handleFilterChange}) => {
   
   
   
    return (
        <>
       <h4>Find contacts by name </h4>
            <input type="text"
                placeholder="Find contact"
                 onChange={handleFilterChange} // Agrega el manejador de cambios
    
            
            />
            

        </>

   ) 



}


export default FindContacts;